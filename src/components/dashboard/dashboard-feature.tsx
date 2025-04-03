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
    "2huQdse2CaQkEKMxqH5HoTSdEU9KBULPjG1Ye8q2Qs6Jgk8rTPrpmymfJX5kUgCLXH98fmFaM5GUVLeCvjcdSbdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xPyrBTJNLZpJt8HJLSHdyqpdTrgLhpknBGVCMnKAuSj4Bak9795iR6UZyGqNxiD2UKN19zbqkbeMjAiLeHAMtGF",
  "key1": "3ktKYa6yGTaBKPfT45yM2aUvWJYgKw5hoWNUDdWefmRdSfVENyPf8odZsGnfhpWeRMpBFKqWPiF1NRK7Vf3pTxNb",
  "key2": "e4yux35WNnJzE7dVq2U3GmJSm9ZpfAQeMx6HZaE9odt2ki8GWWVhkk1jhiXhvBe5jNzx17wzrM9APcAsNBaoLBx",
  "key3": "4sQjUeHp8xn1XAEqtAsUD1QNS4XthpkG8RzZDN3zEyyE5Wdjj4YgexPZtvWb7pQKkEEqjreXZJyYXpA5zCeJSaUp",
  "key4": "2CNvgavPYAqMTmkSycyy7RH8hW2jK2cNtZ7rBuLp46Bz5rA3t2Vbpnb3NzJvNnXB2M2RhaD7Uy9wo4rR9LythAD8",
  "key5": "urs9BqZefuxzKLD177xBhuGvza9d9zS9cBeybnfkEdJdCAhDBMnmrHPgJzKYaBPaVQA1KqHn8V8FqNTbThnHXnQ",
  "key6": "3SHbKyt3pCRRaKPos8ViD8HkvVBJm7MmyhN59cKAgekS7DCyxCUqEA9ZtBrg4Byg14EiSvxG6edxdF55W9DPvwsA",
  "key7": "3U63bMbSu8SLe7YjtRWdwzW5HEy7mGtaUBzYdedft1QEDh6dvSW82DmeCtixBt35p5qvuJGhgDNTNqYBk6aYpv7w",
  "key8": "3sFV2TWXVomt4fvVeHHBr8umASQdjzfqt5GGDxEdHj2CpGDq9q1JEd6CdcUjys4idCDdpVYSkqmCZRkEvpFK8UMr",
  "key9": "5QicsdPaN6bxNmHKnEyvaGuSqADiaNCn6RceNGRWJt2L54x4DgRmrVNdJ2uDdT9bAuTyPEawQjZAbaghKPFDE3aF",
  "key10": "4LvwnNWxrfQLCZJ9jQQY51cm7nEU8p2JHYVNFjdnPwD3yFNJGuuGh3CPCsUjREhWzx5pjzy2ywonPHbo2DPT14Rd",
  "key11": "8ThEdqXuBd8pgGLXUzWLaQhowqyfA6dZRTH9roWXmVULbMuk2PtV7DATt8b2TPXqVHvUe96SQFbAFeEDBwWuqY3",
  "key12": "23N9QVJiCNz8hv6G3V9LPq29H6xAfEny3FomJLFn1ep5Pn7LRBbLGKSTQ86a9P2XPdyB21zLwr4qA2p181R5TPaW",
  "key13": "3vh2ToEqEEEbkKLCa9VPKFicBPpjygFHL5SPZZ3PTT9g4bKs9dwVNJKrCvsQg94NSGPyfBzr8iMYcdqLBicEJqJA",
  "key14": "3m8yKJ32Qj8wHPyCRHsdBjbTMsJkUKmZ8U6s8VQ59rFbTk7vCVcHJmvkX25g2UowJf9rQpNv148g8w5HQw8LzHcS",
  "key15": "5Cbzh7BnMif6LMTzYz28DkDQRYX4DuZEs42dJvmDePvnfrPhEeAGKR4oLoi9Dq6WxVCUu6ArNqDSJCwdCihdbPcu",
  "key16": "2dJjJ1rBFH9jwXCEWiMm7N2p6THkqA5L3HHTwDSswd7irsoKq9TjUHXZDXfAqGxT5zeVWAGXnJubjXvMGKkWcQsk",
  "key17": "2F11HYsKchqCCt3gkK8Jf3jWUyHCgEiwmppBQq52kGuby9gneTydsqwdfavqhm8YUjfATaAsiVAdXafksg1PwNiK",
  "key18": "3GMoJA2qLHSp34stXthWUd2JudUi5L4ayBoUF4uYy8fjMD22NagMbQ8daLcPqLWUY6B6VfbWutKqqPfbRrKcyVCm",
  "key19": "NFUgvdC1VKpaLHnmzTR64icCi2xchxkHyKfJ3J5zTYXu9uFuqGTKQZpX8aEhP5nm9aci15QxG1uKtxuJPQpC5RX",
  "key20": "2VsiXo9Ne9oVpw6Kcs1wJwiQ4gkBEVuj5TEjmwcfDzZHxNhJ45Efcq8Hk6DFqXQENksNniH3hE9JbfvGGdahF79R",
  "key21": "5vWgwEVuaG319J71z74Ciu8q5gajrQdXZ2KnmspRKfrf1YqNA2AQcrjUUffNYgZqi6aXKFfD45QtUAJmZbVwtv9D",
  "key22": "2S42L2fS2c5nGDann8vuGtz14eaYRaJC6S9eka7fT8KzMndGvsW6NSz91UGsZ3oDEau74dSBVtGT6DV6pxNMJc9v",
  "key23": "5QDns9yPSWuSzjFFPUmydmsaJP3WQM3DqXiqu5oaZFvsRuN3hU9yJ7UPBfj4Zv1WUfMgiwFZnPX2G8wmbxkPDY14",
  "key24": "4dUoANu9zvr2WNga9db4f3uco5juLsPkqdc1gfKdUrQHbvFhXyPwasdZXU1okAWZGKQXEhy8yAKGnT41mGWawrDy",
  "key25": "4r2hpmZpVSMy1EmJgGq9Nh5qYaP6aWQ2hyCujjrnbMgVHkWysP2cQjTHpx45a4WYG9EPmh2KWxTXBmFnB8sTjFz7",
  "key26": "5yeS8s5AfiaNXFRzXePWfkPFFya6QhcKkyJPuzNtsE3RTvGQ5A8YgBZQkRRnZ1cQcghLMfzStQ1a5kETr9rJuEw3",
  "key27": "2wHJ3sQRVuLdF7EV3TURpEm2mkM8xyGSeH1ctzDugzWKr4QjoKoBJTuuYhk2B6pdEjYmD5c3Yg6wXEXko2wEdjHY",
  "key28": "EBhmrJc3PBvUBDVyi2JQHWD1jmuhaxHo8GaFm6JdMdiDbFnTxWN9h1WDMTHikKxerY3SAEN6e4WsmgZbis6EeCp",
  "key29": "5Zc4PhtPzop4CCARNRkK2rMxyyYwMPK5qjAjQ8wWjHXEf89Ty2jAUrBRSUSn9Quy3vUNvUqTsY5FsYzExX3Eonw9"
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
