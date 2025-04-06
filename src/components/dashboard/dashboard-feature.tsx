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
    "wbsgFrtHhLR19CHGySonLYfS29zgoqVJfEQ4xMsw9tQFuGb8kuzpw7omZcEU4W3FrSgj4zuGka5MAQDxeayYaZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2SiHU4yskbpopXWfc5sEiAA1PsE3UNjpoeEnXVvbdMz8HQnq6EuMZVxuswubqDzyC1kxSQb7CY6czZ9CcRC7pj",
  "key1": "3Ufb84Q6wRb5nbVYfyXJq34wpyABbqdiWsWGwaQc7k2evn5ioyh8MBnbt9M4uRGTyMXb2aveUqLsp8rsmSeFWhoM",
  "key2": "hiqsQqhP6G7sKDVVN7g4xvSDuDi2oGQPTpR4a6J8XfHprFErCXYYDkhwgPag1cWYnjfXgvisotfzjbcumG5ZyWk",
  "key3": "4wCcWgzzHSqGW196Fo9HKHaP5JwJheZ5nbFZj1HxSRjyBfAjYVeDMbXKvvSoKLe9yrdETk348Q4sFqwno2w7F9bg",
  "key4": "2LqbnvN9ENP9ecLc6i6PECvF74V8H2yjfQF4LnxbdX317YNcKxhYY5nZafrK7o9PFiXYrm9aRtxgeUpk8VwJhhsn",
  "key5": "53sWchm7ZfhFMncMof2qnXp1PG5emgVgnP5fsBWAEKxEKmrCTa8v8Rs4LkYqSbfgnFkQK4u2xB1XHQquYHqC5LY8",
  "key6": "4sw6E35nnXGiMbTjY8GESLaEgeVV3y6Lj1ZkRhJbBvgYThGKyp1SDD77iKktwrBmCq8k4Gw9P5ZMsddpAdrZqCqG",
  "key7": "4TqvucwtMRZWBSogGvSyne48Hw662oEH464tvc25of6bE15gZmMr8DRwsWFy8bYb5DCrCT4GtaL1zExAb4ZCzpyT",
  "key8": "4oJe3HJUVGTrb6wUNMhNEvecmU8tiy2ge9Y1UcnYtZQiqyGddTqZ7qnGf7yqwuxGJ2a5VCvDRRDme3iDtxt7P2xH",
  "key9": "2igiEoG6SVVXxFLY6P55GpoufhG47tUvJFQWHiLfVXiXLgpRCmFPHi1tDm269aW6hRU43L4CYwwYurd9iJTzPoUd",
  "key10": "2kQkgc3X4wCZw2zuNsbiZfaKDD3V39uALpcjtFwWRxUWi9YTYwB5BD5TFBduG2PEz7xSNHqx2rnNnKjxfWGQLH3G",
  "key11": "2dA2dV6F91zQUVeYbLaJvJaAejhiQdLHEjkSagTtXssFQP2Nu7eBRjN8cgzWz9mePiEx2rCBLbWuk85N2wquUc2v",
  "key12": "5FXG7nKZDGPD5mDWmRkq4RQLxreTq4CopahVahhq1zw45fUL3ckXsGdd4uefeqctvwL3JpkWRYkxE4VMRD4mNDY8",
  "key13": "WhpfweQEypvX9j4iCgcyqPmcCuV2JecEcs3x9BY4PNdGix5pJ7bCavqcAU2D1TxFbLGsFJ7WkaqUeLm8uXiDvDD",
  "key14": "pycH9HFkfkxn4Nq6hJNW3kU8kZQ2U1X7VEwz8XHqi8UxX6BKsqNvECJA3EuKoEMk8cYphmfz3g6rDPkQSgAbbBg",
  "key15": "4hT5C8aMAkPXQp5ERnyNdybN26a3ScJi8ewSoikSakqxVmQnj4v7gknvtZgGzGtrXeLVfbLhY5GHP7P8AUSprLb6",
  "key16": "3K9fPxZPgCiBsF7jDQEwmNwiMCjWvTkmQxi4BvBTbhPNP9QgkveM2E7oqK49p5XYyz4goskh3hd9SQ3a2ZeknBDc",
  "key17": "4F4KQAPGmaX4sycWbdEaEhn9ALuPgyeckAGpXH4WwrRuGZhgMxbWHtJhrZ61HFK8K1SFvbnRMB5JME5q7iT9f28z",
  "key18": "58ArppMsSdUyFFvDf4Go91qKE8a5dXtztWtuXVdydxTYw3tpeUfnJWm8PxbVZp3UunDrFQEDiQcaeZv8iJVEi8Sf",
  "key19": "5QPs5Ax7S7xRgdDjdf5g7sc11z7zHnQr32ipqnSAEB4QJHuG3HEepeVm1YcSJ8SdiNM69u9cXx5w8L2RRiBtodMA",
  "key20": "3VR51pvEHmfWPLp9kmkmJN5Jb4Zrd73s4jRZp1GYjRSyb4AJkf7Mjrwiexxwj7FP6QZHUnPGrojXHfERsdMT3nBy",
  "key21": "35YNogoEn8ENgYVZVeDkoMtzneyaL69VCKeBQiTV6HKbbh9L3jp6fd5kpQgaS7d4jg6p4hDuLUzbr9xinGRtGXSN",
  "key22": "4zUDe1oSC2jcDuzwjhJvyecLgiV1fGVCowBrZ3XUKMWxEp1AA2wqpvLY8kRs262tYmeJPMCqZPnz1eb29vfbVZkL",
  "key23": "A7jepfr9gkosSRHeZ5nsEK1P9YNG2bYi6amJB17FV3q3LRcq7Y2jrnDnkTVuvjZXc4tu1end8JM6zHo5ZJUQJgr",
  "key24": "2ifNojK32qgYX3XntSS8pzZK4CkndeRoZMx6Mf4H3txMjERownMbLk78ET8m3JG7dJRaF6ByAi76sspzFNLp33vG",
  "key25": "5eFge47cDNhVw7R4EmQAGwYuSPn6wLEjB3gfZihcFSXpHAVvQMX6igrrFXcJzJPXzHvdrUc7NJvr5skxvNn9yAX1",
  "key26": "AXxVw9bPPbvZpZd2wKCSt9pzAJwBUP4fMJRTzCpxQFi1mJ8D4RTJRKcALpFN3QWjYzvGGW4tqD8r3wWfrnzxKWf",
  "key27": "5gAgQNXqk5thgSSwDPaZXHC35tgQRvk7Q4q51enTwHsdBdP6VPH8842AGEkKdBYtaDtsjhpckAcSEdjDhwkzdWRm",
  "key28": "36KmJ72EQjbNYDGMWsH3kFvngz5KjKBuYwbGUi9ZQsZfpm2rE1uyqwpF5T2gzNxdtDunvmYzMf8Yw5Z1MamFdTVK",
  "key29": "2jDztsnm4ABDmqEtzrNjzwrgiQuFbWQgdsNFFYTb1BNEqmaSPFNutp8rCn3bfnBtr6GGygZiEEQEcDyuH9oPpsmx",
  "key30": "QeNNxjyd83K3GZBkVeHh7NeJGJ2mHxoGBPM1Fa9uLEGYpjP64F7Z3QZXop8nqtBTHuTLrge8dS4Vcn9mV2rFe4v",
  "key31": "2ZmiNswKnSYy44aHZGLpwssQD3C3ZyihAc1PKejgCXREctVRfzUv7BWnY8ttVkKZoR525AtH7HBDnzHjT9XnkyAP",
  "key32": "4FZokYKhZas2vkWUMVy2k5obG7G5b9cqJa98tUZX4EkyKisZPXp9ibUR6J5j5ccHU6uJtDGLDL26RNwx9XgGF9af"
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
