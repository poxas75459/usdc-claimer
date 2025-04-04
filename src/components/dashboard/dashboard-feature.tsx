/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5xaafAWmLWTKwEeuAyqJ5bdUvmHCUdQLHa51bHGyShSh7u34Z2nSfKdM5R5sDNzTPJQEL4YVpuvj23givggMWuDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2GkMSMpzBpa67koswVpoucUmsR5qsKvRzhtbswm9CvUpDtUzaWUSVEPuGnsLp7jWqMAbnPSpSmRFwN88gFHyLa",
  "key1": "pUpqzc9pc6XepafGuAAemhNESz7VYMM1JcEJVsYSwFNxpWdXP6N4sVWS558jRfyxGKCW345pgp1hw7gmDng6hKw",
  "key2": "5gWdrcN4Zcrbn8aPA96q1WDFdZ7HbAbbSXvKBnHuxW7L7hnjRVXbhzqsPkdgkmvqq1n8C4PvJfpUfGse2FSWYDFq",
  "key3": "3RgA1ciWb4cRNzACaUnzA8eEyTuZ3RTj3QeDc9Q2k1YGqvSFDjR8VVLtYHPFaRfkaHb4Cpbe99KAZFitEA9vNTmB",
  "key4": "33u2gTUeCR7caZoky5yToyyFxuBgg1FYip3JVmcgoydWsUYXXiAhEKY3L2XJGDLnbYU7266U5fq9gyRCs4L4M6Lj",
  "key5": "atdN4uvGfvr3z51scdgbiwooMfZNm7kZ3uWJhMJehcA1xuS1sQVxhCj7Sa5TEEKrhyXwszs7tvQRKr78YBedRdM",
  "key6": "aJj8WZU8ZLNNXgw64jdgSE2J9H6r9AWakQiDuBa9mytw15s5AfRUr6svScNMc7bGpn9y8cbocgCbTtrmNvobZSv",
  "key7": "3kHt3MhDVz2kspykAwEWtBbQVgP6K4jM7cik7HRwzXdEJChD9hKQbRCAp4rT88YmyEHbRyfXWwhcJxRG3QL5Z5rZ",
  "key8": "4HW691bTX46t58tqV5FTBkmr5x9UTXzJgbdAaW6omr7b7tPV1DyLiskXFmc61a7jrgF2CiyH2wVct6HQKAJq6FJw",
  "key9": "3dckx1bCP4tiyCryUmJpFyy6m146ebL9CLyD5DC5gQadojHebbGLqed3UkCZEA8NTdAnd8wNDg2rSaMpEohWvS4R",
  "key10": "2YXvz7KLNevXYkY8Rd599EFs8bnVFpw5XtYF5g3aSXhwUavZ2dzS9uMAe4AjhhBaBAX6sEYinqo57K2LhjJ11UQ8",
  "key11": "3sG2t7NXEwK7fWfB3477rCsHDRzvPvUwoR9uot3WGjA1xRCGQt7oCngbwzB6Z6BiQ9SWTtvPX3xq3SYrC2CwyCbe",
  "key12": "2LnbJoBoF4rrrNfSjMpYYNpCPgsmSjzd6CP1kHVoo2zB148pf1CbuWDe9bTQjaU6dzLjapZmy8ZrU9spPhkDq9uy",
  "key13": "5ptMU2S45ERTXX8kRhw6KpGg3HtmcrLYFhWW6dS1PwYdRGzMSEh2cRB7XZeTuCzW1eMKpFKfPisq5dN4KZ28kNrm",
  "key14": "aZLQZYjvUFZi4zxzNWcxDgdvCo2ta5ge7ajkvDZ8VnL9ZaAfW8Pz73uvWE39smdwL4xpiHJTUubrPTPy5NBM89h",
  "key15": "33oPbutrhp5Qugyx43emCLHCkrmos7cGm15fU3zRqJUzPgVand7Bp4yBDQgN7uW9rnp7PixMvNomQWS3M2EG6zAx",
  "key16": "2145FJTVrXECA1wRHTvjgnSSQ7Qs6WgmBQ7s9G4YaTUUpebdvo4AGbgcfXSTCaKbmBBFWQRZquRkVj2xw9nESr8o",
  "key17": "5wm2rXn8VW5doXrezu6oKs8H5hKmJNoNwFCkCLNnYEtcuRARWeUC2aRVDTCzxs5JQijcHGY3i5G6ADuiVqMwB9YD",
  "key18": "4oe95ATdFUoeuQH51gGhUHs56vA28hGKoa7Tyt1h68hdQzLwwM7Z71XSVrjFUebeKPjDMihWEst7mmHUkUkbzjhA",
  "key19": "4GzAWRe89Asi2K7TyGGdJUPJMYs3aXa8n4uDx9dKYSbzPZFP1UikK6Q2LTBKCWBZHyok9eRhiczbpgVgt72nkBj8",
  "key20": "5k3bCwsD7yHZTX3mLRSmf3ngfMNnsqYYgx6i9GFfUEKhtS695doFGVfa2yUVPEZYcKzWA8jJe8bYEqmuz4y9991j",
  "key21": "33ifnWWnvcaXS7zBKoRWwTkPmb2CtaB2NeTxsKdD3XYNX5dz9FfHqYyG3FZfiM3W1uN4nTizjkRrTj5KB8FqV9Fr",
  "key22": "3K8THKdKuVpT5gJGTq5yDrZF4EBnsQRLCiAfosCvMUrg8SaJUAxKxAREgehEHJVktQ5gx2rFbS6kL7M3ZtoxRUES",
  "key23": "3UCFAhfbSYkYwu2SkeTFMhAmj8o6NoX4W9t72MqSPkV9K1W3dvfwxnA97XayaLcANhE6gKwQGUmcEQUmPsBrkgGZ",
  "key24": "2bsZbHXkXiF1TjHyiSe9mfgMVffPfj9aGCt31mTDvf8sPPcCnSbGf8hoJRTriyJmnhW7KVcRVxzpBBT9L78ab1Hs",
  "key25": "4GmZtAUFE3jEkSUKtbekqRQmLW7bHiZnXkKrMN8VQag2AaxHyZ4W7F34633hvgcFcnw13gTrYNJF59RqUnaPdWLn",
  "key26": "2KJe7ddeFDDEGUs6ehAomWN6mbnio5DCYxvqbAGQbyByjsgewNHgNeznGGTazjAfXUbC72gsSzJABVPArZ8So3LG",
  "key27": "4JmZQgdLyT5fp2heKQVP9VuxCKZVu2os5rx5XujMQo9XKTFSVxRpSHzq8FwAE3MgS4y6GRKBPQMea6vW4gDjaQor",
  "key28": "4wpWk6HeUE82F74Rdr8EKJizrhHhzsavhuVzVPAXJdu31bZYJEfpUdzLyShCwynaxoCVMTd4oPM4scgpKoibZtj6",
  "key29": "3aGmsLM4ihnmhwkYpgEwYZatMnfpxLECDZWZ3Myp1QMuxpZLChXB5jb4jZQRkkssDjSEaaZ1evKu6Rdsavb6q4xB",
  "key30": "656FcWoAEagXktTs5Aqv8KbqjvLJuwUXC7VPGaEYVs95bT4iiLLBPRa4oNs7rJXZ7cdFP3eQbeWdwtJ5S29zwmiJ",
  "key31": "4PMWU2meFStX3HNaZHB327efPuz9uwGaypFUsoJf4V7zweUfsnFrS8UfgutkQVz4qVqHrn7kdTNRQp8UP8CYdjGs",
  "key32": "4uvCPsDzM8Dh1VRnpFFV2HH3X41nKsApsdT8TbrCwk8ydHuK8WhdgqYN83wNottm8rgn8zaZMferi1P5oGipxZWG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
