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
    "2GMz9DhJocVzSu3BmvsS5rs65QqHMDL6u594Neefny9EC65vsBxJYkddxtgVcXaCZrz5YmKCJqs1mFXjLDyePBud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8C85RknQF2vHX5o8yXwGY3LESfEyeY8SMGCFAUBUDvvqnjCBaww95tjxNCigNtiswo4XJdhpTqSEC5oGFpWUyQ",
  "key1": "3J11WG9feKnbrSg9mSC3EBpwyaR3eESe42snxojHmFti3DT7SaCuG4kP6mxyYJ9UWH1g7v5Y4n1h5sm3ycqAPeGE",
  "key2": "9b25rc1qdGsQTxK3EZqsCDXKLzmgnFjyDCG3JSx2v1JLHKmeZszLtSBWAX18G8AWyakdSfpn8GRxwS31HSdxGSP",
  "key3": "2KpHbv7u8yPy6Vw52X8LW3fwRCpkheuFahtHwnVWjhhRAFbCojh5EVp8jz1sKJaDkR9PD7LwRZJYNgnYvNEAmoE8",
  "key4": "2bhLotafN1UaDa8hWPxuS3nGGRUcHU2GpiEDQS4Uk9ig4ZWorm2wQGraqEwcs6F85wGwjqp453rFnc3RBSViWNn",
  "key5": "2HPabh4tJFwzCAwwHMwps4U7V6naqhx3RrKyonTYNbZhYCPoswAisVjpWZCg9HMbDoCfJ8rFtPboNz8N9HNKh6mf",
  "key6": "2ky2M4Fpd5TTB4bc5wnRGridAKUBRPEZPgV3Mrj7CAGjYSAzX1R9pGCXYj8dSQtTRFasWA4E4nzTm8ifatuqHia8",
  "key7": "dEczDoGz6zNPRoUWPaPc3gTeLpR3UdDgp44vArnrWLUZiMBrR2A2o1oBt1pfhmut8DPxnQHXYNZH3rRSsjcfTej",
  "key8": "3QfPsuHFE2fhjTc6M9F3GjS6TLmnn8McUdDsk251AJ2SLnLa8JeAsRni8xHKoKAmi68awV7x6tCC75ivtWtF8BvK",
  "key9": "5XXx7MukLQcuKDviHKjK6okW3RBtwcXAJFWzPRZcGs7aYgfE7CgZxZD44X8PM4yhQn6cXUjwbtqbgyZ2tnmNuDgT",
  "key10": "3MXx6xGwNovHHftXjBLsQfRxfsXA5ZdgphXd9JC5mzHdP9wEf94b1FH2tyJ6UwKFg4d2dUJYBtG6b1xRYTgbUTFq",
  "key11": "5UXvgjR4ZabCUBXHQoJGUSDizyMkgaTgiYthXfbbJYsXmXbn6FKpKfkpoD8THxCQU7Qn2FuaKgTFZJbefCZd2TZe",
  "key12": "5YxPxNUgkGbHNuCuhuQxggtBiXVRzspqAgAawdqz7epG7V8izQZ6GxrfHxJSGjUe1wJW44PqVizudByTkJWJPrvA",
  "key13": "4K2vkhEL8q6UiLn6zEKGQpy5ry23eHZKw1bcxfbLa28oQCwvFkiHn2oJQ2jqnCEQPM1Q8TvXVTU8e67tsPifVsXv",
  "key14": "3MY9x2eVESMfkWVf7MwNNa8DazEQEcnX34ZwMH6x7cuc4MUxJh1SCpg5K7TdhG5QYQ12Xa182CXjQvZZ8QePDjft",
  "key15": "pRbwBZjoj65K7V4FTWqxpVPqAn9Lhas49MouuFDnDF3PVyUJhsR77uHBhLoQHE6Ck4oi1jSDKwhmw82huYhN8Ay",
  "key16": "28PRu6FeJwyy1VaxH2SjmLHcAicXBPTuXodg3xWH4obiqB1SLmB4Y2C1QS1Ab8dM2F4kaBXmGECDPgrdxRJCrqhG",
  "key17": "5avkggwAiNek32FBvUmYFdH7yHKAb6YWf5KGse18pXYxUvQ6H3tifrhJ9PkaGJqhGGAQFkRhe8LGPwYkuRLY3Rsg",
  "key18": "5Zc14gMv2xW63VtGry5EKUq2JBYARzaA9YqJTX5KXHR49xq5N5TLKHq2RJEYNENu9up8EWCdNpGfxXzhm54DDLYq",
  "key19": "4zeBbrLw3JTqLs3ytbJ3P3TfWa6jTgBGd8C7LWbdzNQWReEBgX4mmYBv1WwU56WiqgCYUYpYsVr4W4WNm1Eep7Wg",
  "key20": "odZTJpNywXpftBkntVfxaiN6Qy25aX4HEJ7uk6E1tjuGsXcqCrmSdVB6k7P7drms9YKg7yXZMWt3YXvwMrnPYNk",
  "key21": "472xgXFc1SWAyk5obhqXX9sAM6gjtU5GdMsutA5HKbVbSiS5TN4tdNdGU6RdEgSci6fdLKByJ78QXnGro7o2aZqn",
  "key22": "3haA2EgWedgzR1ibtoHKA5V9bhB9V2dymaWr98kfwr77KXtcVcE91Vz4tKgGb2cegevXXnnKUBoG77z4C7CDRm8m",
  "key23": "4yjYpbQ79gadYDdCWx8PF9SN8jmN5Rwd1sXgGWGkmW4EDijDX4q8DqpDMRyDbd4yYb41J4o8hNETdXJtVbAFYdUC",
  "key24": "6MuobqbeyUXnxzJb8phnFryecYQ8hCRurDARwft6rGVdG345Q329fMaEvES8JaXJLvG1qb9cRBRWAW6CTXvpZFC",
  "key25": "3fisn9iDKxahyGULDahEZNKBmqr4KuufdYAf4ktwwpT9GxQx7JiU6mf5ApQnZG9sj8HiLH1Y6Q67nAHeN8Nff8a1",
  "key26": "3qYndHbT7TteaGm4MgWE8dsDCnmFsJ9wjobJXPPkMReZtCVYjEEYq7ULBsunNLsY2qsDkr31nvG4T4GLKwN5hgNw",
  "key27": "H7BSzGCPEyVCuHyPGrnxzxqD7tgAHLwPMtKWW4A5ypNi4MnacoTGr9DMcKoYPkPqb4W1rkZALiZ7DUwqFXbwB8Q",
  "key28": "pnskniKj1KcNmwcEw9sPotegc2dawchJ1ZJfGPVC2kE2fgKNSPkMxsYatk5jAzPNb2R6nFiFEYH57UkdQwBkUGq",
  "key29": "3kaHAneoj9ipnWpg1wsJ8AJm65JeowetxStwjbaao3T8SZhUfNdk4FfvoVi6gnBxdFLmka7prwKPipRwaL5VnraJ",
  "key30": "2sZSfMautNYbwJmePiXvttVg1K6QtcqTW659cnJFFuUM2vvh7Zy3SyU1QMB9YT2HHyrnDMDEG1ii4s8hnF3SAcSN",
  "key31": "4QT67FFkYuBmDjXtEdwLoERYaW6j9ywUFa2tfkg6vqXeybkAXf9irr3zLB1dm74AK5D29gGmqiSW6qfMn4xi248i",
  "key32": "4je5xEocb5aU3Pcvv9iiLKqs2UVnaGHAHTU77ntmxMnzjrT4LZqFAJrH3B68EuXFVDTXc1QY6hLnbPRrLWKdvxzz",
  "key33": "2HbyAAkYVSoertSLibpufcDHMy8xdKa7p4k3Ebq87oBm2hADgaEojbY41imKF5xF4JAMbJr8XJMymjBa3HFKjqgx",
  "key34": "xJ8CQ7QPGY48DC6DqGpcM8hHta15bk7PzLqkpPxNWZRUjJJMtR7hBE1LaZ6okcionrD5afWRUCp2wnY59S79rJr",
  "key35": "47McqLqi9qB5oC3U9UDuT47xzEYEM3XsbrucXNfWda2ahaBWvvvRBJgkUnP2X5ZytMg2ZjRkAUA5MK7Wof1Vg3Fo",
  "key36": "PqyKpF4m6yXLJBbutQD1U3WyMmQeHjG1oYuBPeiknzicbTz4qmY7gxWWi5XXxySgJ49q4a6rAF7W1ykqAScPmWU",
  "key37": "3eyFhAyYkQfiUfjyRrW8XSPwzKdNrzgxEjTgYp2de8vfPoCPVtj3rw1GuEh6QwtpygYAou6jtKN1oT84qDjzoyw2",
  "key38": "2qNLWthtBfbzSwoxN8op3E2jQTegterq193w2MFTJVnxfQN9CQHeCMUQsLpg3uKRpYBUnrBH4M4U7cGyTWYWNgs1",
  "key39": "4DtZCcDczJwNhWLyQySrFSjLC6GRHkgr9uMCiTpLT7iAcdjcz9yZ3gPsZfZvM4WsN7HaXCpx5PryWjt7QTDQrB9f",
  "key40": "go4sM9TLA7mdNoanxeHzSoM8pq5sJJAV8J4pS2XyScw9t3WdyfTHbBZ7upinXDSVenFpUQMusuEbkJW3mkEUqDo",
  "key41": "4J359v6sBfsELYx1Qgg2xkzng5Tk3n9PWkJH65ZeWWH5ogErDK2DTKayqvVbhS214fXvNtiHkHYXq1diaR53idKo",
  "key42": "2nwC8cEwqkUtdGSDB8gvTDfZBpJF2Z7RiQ7UzWAE5bAYvuh4oB8kieVTN5Yhc3eaqnM8NqCoFYaihAngxCMGy3db",
  "key43": "2RBFbJ4VQ9h8rPdeLSN8nTn9gNsTrWh6Z7QnbL68281a7s4jpvN7feFLqmvHseM6HfXwQmuWBdzeMgFqVWe1QLc9",
  "key44": "5gYsfgtRFkptvMqk1H2ojKHvLyktcs8G84i6G713FYVabavYN9DHeXM3AK8DnZbZuhd3c2xKNtTp5C9Z2JCVjQya",
  "key45": "VVH56uWvRr4WbK4ygGQ1QvjBWT444pPwtkgFDpxxQyfbZvsr6HRsTDbJLbyYqFT6h48t5pm4LxU2Y4zCrZFoPbQ",
  "key46": "49niJUCLqFaHCLvmu358cWUTw8pf3jCBcuyLmoR84jWz7jg786VhnvTnutQkudYULbpar1wBa8cjP3n4XmtrTXzZ"
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
