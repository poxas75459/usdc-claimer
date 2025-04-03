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
    "4z6Xkt4Mx52UzsGhCymNcg1TRx77c76juWbKMddrDM6QpZLpcBvHjZK8kWgqRGCSwWGXJHDwsSomroF1oE48coKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNXkTTbJ8zJPvjx1TtXTEaXiAHtg6u82QMifDvF5mpnQoW4ZS1GQZf46GZWZL5JmayAQFVftFjUqxpLRn78fsPq",
  "key1": "38Fu2TKDfknsfV6JmdiNehDyc2so39jV9BiacZ7EEUa4b6sKuT1h7td6hhc97YBRic3qgPYntR5fHihpR6ShbZbc",
  "key2": "2fabQ1zxRHwjAgmmK7r54ucVdHHfpZpUxRGVfrz96xsY5NKfYNz2htTSGknGk4v1hSbEFmQVeG8R9CwbCtA2Fo7r",
  "key3": "2A1cSNEnnVEgzV8Dcz2WVFBTiYuzmMr62d2zgU9mnvLUNECpgQ2zuPjmTm6LbwmB17yDAGT4cAadCt3TiUATHwxd",
  "key4": "4KDuqdDGy1fepXS6brQAVSjnGtVF3zfDooWsy2w3MnLciXweY8xWgoBivgGZbJDLCPkzPAv8u1ZGYih5L4zZRFdo",
  "key5": "65FXmbiLPmhz1u273msRLi8ootpe6zT4r4XbkqhAs9viFcX9amRNrD8JkdBAK9CxxqLpapd1XEPQBriEmjx13UWC",
  "key6": "23LTJ3nExaYj9Z9zLr5WwLK58hic4DKh2sYmUt72y7RjeaTm9jPbLJ4xXHzV5Yx5kJpXUBScBjVgW16xTpjeTtpz",
  "key7": "5doM8dz16pZick5xgFeaWKp9BL5brjHbtdjtHkjufhhbrjqGHffLuguaUjLgv2xCRrz5Z15vwHV36zuToiJU7nma",
  "key8": "412Uef2JQdi4mQJBYB76iDkqENfGq2q7kc9WtebDV3JaFcQZJebwW7Da3RtXgFDERbMcmXsmDQ1C8zzTJotyRHc8",
  "key9": "t2gRbvPt8vtoHnULnZSCF1estNAhsiZtAMMyURyYdXLkK6RVtvGm4Qwj18qti7afR79QtbZ6G7qnSDkXkpjakNb",
  "key10": "4Q5sVF1qYMH2Zk2vvMqTJVqCu29Bw9DpWdFbEJLWjPQHqrNY2zRe7WkeKAeL7T7sxgj8paM5dHUBK3WfSVaqJK4o",
  "key11": "5ETzvqDnz7mGqfJc8PrqqBJJzH1Gs8ApmqhN8bREdup4d9UhTKZNQce5vTn4JNP8uS2BZX5Zik8F2fpopcq1y5nN",
  "key12": "48Jfhb1arMwjoWGkHYzUBz8vsY8vTw68qaYErA8x37dpJu5y29z6ufiWuvXMDxkrAZh25jzgiyrkd1WqeeShecrC",
  "key13": "58VJQ6mpfnSZAeDo2bbvw2oVTzMKBGguHyMC8oUDbURkA5kbEFAajZYJmFFntsinp8Q3zWcN6ogwSTBJrmv1Fc48",
  "key14": "wZDhHTz4S3BrtHm2BTWXrvZ51KhrqBCKspzivAXzghchLjG8qix9ZpaonwaccT59p8E9UPrRbASLi2jrJmUspsa",
  "key15": "5oLiN5VpwXadZs5Gs1YrDCSXrcpmBFt4Vd3ahrdWsgmc6z2W9BXQUGcNQYzbW2PaGvQawBEFAtov8tihc1r4HCnK",
  "key16": "4Deg3aRVSrxtNaN6UkzkMjuYMmYx9SrvT3o7Sq9WcsQ587Dw2FN8ciuanacg2CW9S4qnio8yuhiUnrDDRUuZPnmc",
  "key17": "55nXwKsnFDPkeStsZ68voyx5ayiWgRzsDN5iZDnEBKnReSmXS6WFo1kHGzSqVvCVKcqXYfnWESLQDuo2AsEmHjLr",
  "key18": "2DGTXpBC7BpV6yhqrUdJT68h56dVdpuyRFUVfbsuNhNDv2DQw38QpXfp4KMDCmm8t75QyzN9YFBE5HnF11YDxQsu",
  "key19": "2w1U56WRL2sXsHQW4JpqyXbmZQpFhR2h1VnbEGrM8nxA3L6iVsuqibnC4nKkkuFb92nGjq2u1tW3GSp544qYwqFA",
  "key20": "3XmHKkghdcDkmHzLrKb3GNYQdjjz4A295wAnjwqMKmaz9JtLbyCFxeHXWYEe2LZb63igpwWvto6Bf8zVcHX9Vask",
  "key21": "48dD9ijpkzPDnwbavMTgrBRFR1q6u9WBgwm91svR4Njwxo5WMvdN7kPZAQKujeGPJRW1mmL2hd5HjhtnAHrHaUsy",
  "key22": "LMGPqnkV3Jv2vK2NCrYLwi75EeN7NupzwssqkxoZup6sHmo4tAWByJxBfU6iDFwp53smoyDWZFd4SH3Erfj17y2",
  "key23": "5Baho3ZnTqtx5YMYvkT2aWzsgCijzvp9JwwhozThJuXT7mbCRX1iudV1rc1rJe4VaTHPWCsSuMjNRB4JNmQNk55Z",
  "key24": "2JEZUv7DVpuAkJ633gQV1hgjXYfygei5stJL9o9SKaqhUZJu5QsmHkF1pcW3ywU6pHcPkcZSGRQi2HgfhWh8WcWm",
  "key25": "3PbBbPsxjkHU5zGWyv59V4EmxQnB3d4jJiQ3SXXrEHeQ5teCEUND4it3W9gnYT95jkYXDyzrQfRSL6bWusUBVJXt",
  "key26": "FX8Z7xrfJ6gi8oowjw2VBSxRpd9QkJjdpPzxgeAgvoSq9Mg5BBv3TxxN2JX6jk5Ld3FS6qUwgqwewcSFxuvRPYH",
  "key27": "WJqiCfTCJYzdBett2anJpVQcAWogBcW9McYLUaCXYtparyN6x3aV33JTr9cJQXgURtkJHdecRGwZWNLavTFofic",
  "key28": "2mYRBz35y6ws1KubSqwDR6gLkV69heFt3D3w1ZHh7bFMKKXnWPF8VvRenAXbgy1C8CvZadMpFSqPZPLn9CC5QKMz",
  "key29": "4ZCDxock9qYd4UBoFJZyiZ2MxTjYLZNN1yViXZuDoF3wtyokxR3dKVb3muaNzUtMkuRbNi34K2SgukzouVjMH18j",
  "key30": "3SYSkTcHabBZMTkPd3k7bV5vLPty7zg6iUWRW9VFovcbsz7akuFyysJ29vtY3zF6KLdFL91FawZ1PQbwaZFBy8w3",
  "key31": "5PeMwwsLAuZQPCB4cGSHvT4CBGLdHh18JopcGjFJUcqQyFkcNj3M7Q1nzwr9Tj3K6ofop6fJHoCwJR99rR5FN57T",
  "key32": "2LqDhYStY1xM9yc11tS4dBMu47ENs6bmezSPwPe6otkaXw9yASGsce7tURM8JTWYTpgi61dxSRHHeEKpedygcyxF",
  "key33": "4QUEJFas51jdsFZLmYDcW617fx8VgakVqRSgKWjj61kuqJZSJtD58bMDEaG8ARvD4H1xDFvGDoiLL4fN4RTxb3Kp",
  "key34": "28xvknk8TUZP37FLXNKehJFBh4bcgSXJhA9oA4XPyDG81GoDvQUGVxWfDEQCJbQBHU8yT74kHi9sb5vDD9zHg4nq",
  "key35": "437i9R8QD2bYUJiaPU1Dss1kYqJrKbrjxG3tPVq87HSe822jAYQK5aXMQyzAEYsnxexiFeYK56A7MLTknxpxVYAM"
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
