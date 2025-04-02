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
    "5zceMVGFzeDCHfPaPH72nbS8otni4fe222m8hpCDCSfUiYY8eHafAjzNrqzkEwWxNHkoPydSaYXcwVr8MM4b8e2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mep9BbFwYbjjemtiPaYcdPnu95JUhHt95aPdE6zHx1ju1CYHZX4ihNW241fTaD3dkQhjm5aExhHzfVhsjgyzjvG",
  "key1": "36uHJRJPSDSdu1dppAKKWcqiUqBXa44utzaj1KmpFfKQDLFc9A6jNKG6bUQs1yGS2hMpgb3wuXwdoC2tmaSbrw6f",
  "key2": "2KzBMkBHpRfRgpjzMcdDkCJimwG9CZemumuzhqZL2o7J8dwnVtGydicxSYLqZ8RAh9UwY3tWZQTXs2QQQc61NZ1S",
  "key3": "5cTZZKDs3AqtQpBDYNjSrYYW6xXX96CR8aXWpszqT357r8vLiDCy6Sg1pdDZ4H7y1uoxr74c4PsPVgArz9RDMwKB",
  "key4": "4hgP5wny1jgxFKqoK5DoYTBTc8KkEjJJAMEBZwwa5G48ZS4GKHehrp4BVF8mqPq76PuoVh7KDzq23yJcpREF7RES",
  "key5": "4etjk2VJoUxd6ePa9vjo2RZcnX2NjcGmgVNYudfLYb7cQFXWDb7weVEiNa5zSHP7P2wcvK9NikKPY2U8VQh7e8Zn",
  "key6": "3nNKnxu1AL7vUL6MLKKfcdP7nSSoLkExjNYYqwHce4rrTSR9Yft7Rk3E1W9UyFjEHxGXoU83MYLSdfRRtvHMvTxZ",
  "key7": "46Q4XzhJW4QdyWPfy16Ar9LXdpjd6nxvHD2gM4J4D5FCxGSzrmyLJsTsuSTphr7DN2wPLgAjPp7AKF3t6XfpwV5n",
  "key8": "48ftx2WgXhof8pELUsQoyJikYaNjHCoVKmYd7LLC6xvuaUGRugSmqYanjS9N8CcPB4i8DeAhTRvVPf5xYj39NNV7",
  "key9": "SRC925hcevJGY5yg1xKwVEtCx5CZaVMpcbAPsBK37NEYavxZTp5sKyoKeWnw4TuxSBfmhVrejbksvsQFnHNRzgq",
  "key10": "4N7Z8oKBRiGvSa7DMtVfwktU1nHLxbp5ubqe6VRNQiVCCZiy2MEVTg8Gs4c3ZygsjFmW4FkxhNNCNxu2tymMtdkA",
  "key11": "2CKammMUSMxrajBgLAZzpNoCzKjGHPumsCFPgYjEz7GETD7khxe7hbRgs8w4JTmj8paYgvQPKjegaAnGAT4u6tWg",
  "key12": "37vRuJQExL7QFTLcyiXzTpHT3PPqepLQKPK6uT7mnSB42auanG9E7oryjCKs9xrF5HX8zEwA6MGsMk24meuKRPdt",
  "key13": "CxH1eYUM6565qj7wiBfLQ29cxCH5HwZEHUpGfnw9mPBvzB9TV2DLxVthEXjCzpyAehun1RtK4MFCMDXFw4yEVq1",
  "key14": "5SJ2PooJDnMTXSNwFZ2uNNopqQW1bPLWvNu2jAnvR3J6WvKS8MHmrpXMNgkEAQBWtJontEF2Q9RLHP6bzjhxUo8C",
  "key15": "W7vRQeQ3N8w8TzgQrDBpfgzHrzfTrs4ayh4zQ8sjkQq6nJexAw2c65ox24wzyJ5RHZse8adXoKRYeLgN5WtDEqq",
  "key16": "5vhYSsq8eLKttRWpFKxkoHig3em3uR634ehD85ZXieVAgxug9rV48PJiT4rXWU1TAuBH8NF5jgtNyR4MQuSw6cW5",
  "key17": "BoTih9PQcV58nKkeDjksckyFs5Cu3vZ5bzNxsUU7omuvNihMjV35zyFwt7U2NBsLKyQekxwdgspN9agGr2YcBvu",
  "key18": "2yoCLE916LbEbzxjNh7WvRDBRwjq9Gbwo4DwjqsSpuF9YJBo1f5MeNotu5h5xtm2KVJqKHgLDDbUqDGHpYjfWtoJ",
  "key19": "5pkr9K7d3NwCJkZpa1edD7QUqYnbc4qALcbtNaaukQnQvqiPykVJHJYKUeUjK3LNSFV4nGv2NybRLq7VWAzHW3MP",
  "key20": "5K9U186LztSYvdXka3BSSHopTfZrAGCyMLqxCAZxdXCC3rMi9cQgGoyk6fjypNzJHia9uY7RLq6xBQAEZqLY1e2",
  "key21": "38Z3XZMEs4sRSb1863CQKYmns2xUGpZumiCiggPz667ni6fMipZAqhQyZBBFMbv2URVnNVwbVNZaYVk7ZJLqd9Am",
  "key22": "3UdSVkGt1CcyLtVigcHPjY2yyXYWXDK5mXFkZtxpzfYSpraafHeNgmCQh6TDB4i2GchG7JJJDrAZBHhutkKdqS3W",
  "key23": "4RNSygQrJNpqHQ8aqJrVVrzNXsPx5ybNgsFsz7khNauQF8U2qepRFW969xjjcLaZDaPHLVU5w2m7X9BC8qTRQxip",
  "key24": "5wLgWLLfgFYwoVTxGsbyRhmphvtpKMu6fjYGvbkJRSbm6B4gVtmfN1hBSSBH3gAujtVNBSYp1rRdTYvQskFoKFzc",
  "key25": "tDWfwFu316CzmWQP6p7FkTE2LFf1K4DtGxpmXCG3z3CGdsjcRqrctcWMwhv7jFxvReaF8DryzWKo5d8YKgjyiPM",
  "key26": "4euwN1bkMA8ZZtpLDaJfPL4Y4zcBcD5J6TtioDGMsFEjJqSmRpRZeZnyBZcZfybuCkrgXvu3Rktq2TQ3PxLpRi6k",
  "key27": "3rxUifuTgRr9xyRuFXUm2Q61ogLKDi1szghWETanwv7DkKYJnfNpxA4t8qa4mUwSM3Xe6TL21B4vUf6KNaoZMZxN",
  "key28": "2MMbLdKNWMNxUeQWPfSivwLUwyDbdHvtX9MoyuNvJcEep6bp1batzFqq5tTYE3uFcRoiYMcs3CkYTYfuBtrJLkXA",
  "key29": "45owbLC25gMkMMaoSZCWjZgNyhaf8CsoAjx3NVTjqgngiopQZdoFbiLtPohLtDPHavs5zpje9Cax6Cnv1MzwkRbK",
  "key30": "4GZ8u7XxEaboGudzvV82KEDuJ9Ek3VU1HG8m5fQJwSCjAo7Jqt6LBQppEcMfcn6AWEmHH3tfya7xXroGrHm6jTug",
  "key31": "5yobUxkmLR6C2n6yrwGctJFNV3osU1uhTK6GKrNvfW43JjX62mPxs5Y3CKb9Nf7drdAyeXnUtPXmceoZuUVmrNMV",
  "key32": "4iPEgtusQ2iVa3ZioiQaswHr83hPLMmKSRSMk6ChfHSaD9BzePacm33ZUbTr7ifE9pZ8ZSmP8M2vgDB6FiPEaHHo"
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
