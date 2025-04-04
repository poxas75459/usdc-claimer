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
    "AgXxMxdjdeNBQdn7nXRYNGG4nekgGycxxud9r8QtudS2XM46N2Y39JMW6cABeZDjUMZw3B7rCuycrNqFriLBHsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NyXKtLWVR5zRGVySXYPp3ReYhctaSAmR4jPLd7AWqkpuSVDcV86pk56vXF5SaiQBi9ZSPemMbXrZ5bKZu2NcRTz",
  "key1": "38W2fcznN3qTF8C65xy4EWEiMVbNTYaQ4rN2oJ37UCaWPiXQUjZk4G82UNSvGadGxfFUBursvi7uLwGPA46EdhkW",
  "key2": "Zj5Xr4hokazEmi5ienX85YYSihr1hkMivsLj6LBQGHcfQDCYmWNHFkRUsoz14SL8pKy2ndJZjY2TRNFs6QSKV4y",
  "key3": "2x5vXvqxRygbECyzYBzYmVW682exuRQrLCSsa8DCYtB3u19QZZvRN44DurrQZ5ujRq8pnG2mk9DhbBKn18YWdQmn",
  "key4": "V1PFxHtXPMHSwCheM9v3ECdMPCNjJTdus8z7JzTJoQC6qJeAPqA5p5UCtrS6TodqSf2F3f49dsKhY3RBbqwFWHv",
  "key5": "3XJXgfrukfjTKUha5Ye9gE3fAabbb5VtWWnhff5iBw2QDYsua5F4UUPhsX5gYgLXaZhC58nGaES7dZC7PZKXQN15",
  "key6": "YjdK4zECWuUditU7UD7Ysg2i3WY3itfwqodLCEhGUKaS7KVjYg7T1or2FkpG6B3RbWQNqeE4dGj7HNwkJ8sRy1W",
  "key7": "3hvhPpEKh562RANrcrqWXD7rjpD5VoiASeQW7zLUCDteLu1VbdyokeeSfjj2v8dcykMS6AGEKzTzABWskB6UUBSU",
  "key8": "S8mF3ua6EB6mzn6NJhWgUpJuAvh42NdAJ1tqy7YmmqftFgFDpjksZPd8SSVHopmQPCSrGTJSVMTJkbBasvTjRkR",
  "key9": "fGniErQCRWJushPmGutsxvaXauhXPA5fPcwTgQmy9DYnT8VSh7JWR7AqUomR37VNkFp9g6zCxrUYo9acfVAsgHb",
  "key10": "5NjCmvgeABgTYwsiW8edfGeGEwtGNMaesV4uJPdw8rMLWsY2LbV686GLJc5tgBUwt79xzC5Y4n6d3u9cQ77qBjvS",
  "key11": "MY7ttwLDzFSksE6HWJQTz4MPtAfBuktNXSsi1jSduLMR1mrNv7h3H8dnpVAnQcqgQVHQi61b6gRHUzm8zDYD7jp",
  "key12": "3rqVGGgyAi3UgaYXcGAneWLjqF6XV7fuWQs6QrwaME7WvnHLaoTqQthhGWcNYShsuaUBUitYgHvxSurxmEEnvS9L",
  "key13": "4W7DBKrsH2tGd3v2n9q2CG48QWS3jVL6UXCJuYk6mpqtrXvrUuriWKYhBrUg5Mk4HrtfTcZd61tZhNaEaunt6x6e",
  "key14": "5rmWen6n4BZichRjY8kfQmYiorNYwxsRBbTqizzQXBy6X2JzaEqhkeagYWjxQSo9qkN4phwBMb321Wv5QRbMj31v",
  "key15": "3qsKoa8hfjQ3Wsoy3K7PjG4sFQSh7P52c8ck3QekR7RqyKCm8q5C7kuH3CgmiAsjzS7ghDMHvhWJPfwPauj86VDf",
  "key16": "j9QGVhQ92xftnKY7k1EXmWevfSFovigKesWQquLdpXk6qwBrdA2B43VWwKAFrrJ3CMUxJHJsGbt92zda81gnt4A",
  "key17": "4Ufhy8i5PocvE25TbkVEEe3SH1sH9LEPvWHHNTbVGWkdtBKdeGUHPJqRqgpMgqyqGUwJkcjb2DMa675oMkQx8zoF",
  "key18": "DDBoD6a5KnHtfbp6Mf6Rfrdygq3weF9amtDENQdUuZNeMcjKhAXVaLM1zfNkrqknex1mUh7uUav6mq9exgiSmSK",
  "key19": "3pNifB3hnS1x4qPvSvuofwGcs4DspJ3m5ku4Rn9Pmj2TraLscQmkBZDJXbKZmpJ5djQGzqeMvEjqxeEqGRrJGvhq",
  "key20": "2antP7W5Jt9tRXrwfCvrUEiudAxAEydzrAU5cr6qbkWavnZ7H8eM9qUp6yeFd7ReMmfGPYHED2DvDdL4pYdpUMS3",
  "key21": "4j1mdFCYia3bLPhFfM7R59cVwQydPK1WHXjEGL1P7ZPPR1n6J9E5ZHe8VYCmLEaPAVSDU38wnHZgzCchmfYuYEwV",
  "key22": "5vdsfVP62rK3YL4N7Er29bibDjqVPaLqaVPF6MJG1c6pFPS8n2VFFMMsQAPFzeMScjUHmyKdPL9F74P3t5Yh3sS4",
  "key23": "3Jsup2kyhdEJ4udU6q1THJ6K8KLaxLhKrJ5PMNpA3vrMpbkczQxx4ZLWoSASNk9dzvVMWPCAACZX94f6UiTGKbAw",
  "key24": "3ANhBQo677ZGC6YoM5oFqJx3sKJ373Q5JkjaLwZxNNajHhWhdWJaAu4BXTPNtgp39YmuYRNhFKsRDvLXvmAcbozZ",
  "key25": "2n5LBiU2VfZVJTsdRMQmwyvnveXhifAUbymg7rVsHH9pYFewjQaqRKFAiJiZssf6mHQ9979PTmLFrPhwsqjQNm3z",
  "key26": "58jVkBB7ByqYVokNKnscYQYbX6DuXUNYtvqs5mnBP1iN3qiMuKHTDbeqiB3bsqWejY5UZo7zsTTDYZqvwtybFDDy",
  "key27": "65iAPdscyfEVet2spxm7q3ek2dBgWkuM7uguVDMMbT1cQUGhyFPrqPH7yCUaRvFkTbKGcA5eB6jR5TBvjFpKynA",
  "key28": "4kgVQcd3A7iTtoBt6AQtzK7H1HdteDRDxgje2NC82fsugW1RhvZnDygzjQXCPdabxv8JiM5Tb29ukQRoBptZhAaa",
  "key29": "5Rusbvb6uxP4LizfEPpysTc8DuDC4V4PMtxvEtz88Nrd9eYvTjvdhGFtY6pC8t1k5HkFC3u8PsKZLXQC5jNqn1kR",
  "key30": "frpfrE8nj6zuFq1qRy5jRLagiDe5LJPUMWct2Zaj3CwgaXTfdi3GbUu8itxzrGUyMUPK4epCUqTk78PM8GaAAfY",
  "key31": "4Rq8WLd1KLBKgkGYA22VassXfteBaqW8ayVLgrP9xAC4kiEeN9cGPddQHt6wAhjp2S5QVG9bQw2rBeXpnCLgksKg",
  "key32": "4x3fRGsXWKQaTaXvBszo3xBzTXJH6pC7644ha6Zms9TT4EAivHSc6TtJDq4jzpZaEpDmUGKt6zF8YX6XwjEyqreW",
  "key33": "rcwCgGYGcXD9ZtUkebBVjm3YHeMx53NuxWTwofyTpX6GjchU2TofuxFR3bwE3SK3UsUogHNEnWBgLNdhbrmmhgD",
  "key34": "2XMveGNgvFe1bh4ZK6HSUy3RXEAfTVpiq61BgzzUaSaengZvH2kiZx3jLzmBUXqu1DNKpb1HeeCGkttcW7UzMJkv",
  "key35": "MDrC9kSb917VkprCHMuZ6kcfMjuDj61vw6jPrBszJRoP4Ao1keppTZMHGVHk8aByRsEx5UCqBeciWp4pE6TwtJR",
  "key36": "kgT8tYzts1QKqahJt9KMNktBDBmG7aR51mkCzQHFHJzjRLof6pKVApz4zbhoSCYxCQZzuoZpqrTd9ChhtuQCUQt",
  "key37": "oqqwNzZAXwc2VSLrocf5fHTjCtoovkn8WBUjN9M1cPE1YJkUbzghZMDWgAbMCW2W8MScQkxwUJb8T8rHxyUtVJh",
  "key38": "i9986htGGPkwHLEAa268iM5WpNz2fKqBx8emdiDFpqARNB2K6CEnqt5RxCYLQJMdQBz32eJcVLSws91iCfCv6AC",
  "key39": "3pQmwaefTdjaoCToLCFkEP1XFfE5FYZ3vXgSooZr6HfoPYwcHdD5xUFdi7XHbhoYRfzBkmEyqsUZojhEd6sH2DxA",
  "key40": "5Gk1TRkdzHD6G8QcPZHaYhv6564me16kQzMegrXR9P9oWvDUURmAxNsjKAGChufRouy5u7dPR3fpvK1JhHxjHSxD",
  "key41": "3BnuqS2v4hMLissoV2QYk45RLWt8LC9UjuSMBMRKzjJJr62jCS4JDtm4y4wx8a93WHqnW5ZdbWCFngFeq9t4aWSs",
  "key42": "jsg2uuwZPAZ4ZgXVBtmJGKhexX6qdyRKNpkFRUgCYGu1EAx7iEvKHmpfaNVfRdiaGW4CUXpELNqxGuY9yq4btj3",
  "key43": "2VuQsujhBmt2LcbFPShuHqZFBgPNLwkKMYygDhrBUWqerFQm89q8YZoqPFiZYgH6pQ61AjU6WGJJGnrGWTwHAay5"
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
