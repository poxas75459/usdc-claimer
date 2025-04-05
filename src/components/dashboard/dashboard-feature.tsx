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
    "3sJdUPufyH6W1ReTC23iG8E8KypXh4BFTHpb5oVvzfa79L73qLBEmwJ1EAX4zeBrhQvujmsHTuqLy4FCtk7ny2Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AJBnkpMSxHwmwnqydMpJHWcgzzizqTTdBH3ULiGGS52xd6u2V5uJo6VXd6v5NVmyjpNLFeqWYadYcq4RAPvSP8",
  "key1": "5tgqszsTwELsbm9t2QHfWjydpBMQboypRft7ESeoY4kfHK7VUZunnGHdYmAGKkfwTXwPHCbtLAcqNwCMZYnWw7M3",
  "key2": "246fAXqVPSPNwZUZ43R1625UstLsbuVhgwNnwrjSZKrBmDZZgraYGHz6eYzC83D3RXpSPfKXc8QThcdcDrCjb8kh",
  "key3": "4WPPc2fsmC9w324PGdHEW6PrG6KY5pdWQiqQqysE94gyXWrFj6R2wnP6x3sUFcU5FoTsgsRwBsj3xLJ4NHEzRSjZ",
  "key4": "2EkvJZvDhH9fFdC2SYidNG1cSVQKqwaeDJTkuXHDknoCEfRDLtgiH9ZCcH16G1afWpgVQoJWmxDX1civ2F7KPruy",
  "key5": "3ZCVmMETfF4kwTBeScCbwA2zbz5vxeBYTSZBE6uZ4Sv2MazfnFDQpGZGXKSps7n5m7AHT4uXQEKGXErYQUztvfka",
  "key6": "63qHPP6fEgKVbmZwd8X7UFokxKY9rxvaX981zFmih92kt3jJjYMR4LEWfVoYZjYWfSC8LjBbgn1Dxu4maP7g8tXh",
  "key7": "gzUWoEqqLeBMW9CZ6e5Sp78vbLWszfGTsPjX973vAJYwqApokCA7t24ZXCxUwmP2Y1czzPmthajxsRdGxkZDR3h",
  "key8": "4o8iWrJeNZqd36nxY2zQd6uChsj6niPPhzvzEtE9sEjgPcQn5ZB32fE7HBZQbw1tpft3RjYT83VMbqDvy4pvXW95",
  "key9": "3ZHgF6u31tAdpyjFLMnZyEdC4k87TELQN8vBVKEav3Jc1MnV2MjzBwb971qMFub8tyBJMtVxBReNMtDMe54y3Mqa",
  "key10": "3SXXFQArXizPVMxVQD68JxJbFnsYVpHj2ooufzQimBJukgtob4iJLmDAV9QFyxa4oKvyVCHYyuieVq2ThMFQSMdp",
  "key11": "GBfk1cQUeagTZjzWg6eRor9Rpadnw3YkeGjPBeakXATC5CuMPsDtwqZpLknnLmKrE1SUUj97xueQcLtisRAaJgZ",
  "key12": "3VMuRr7Dxixk5P31j9xuQNWJoZZjsBieF3E8CgMXvnbHvtNbVMdGNzG5jnX29FU4oZTRMg1H3UtfPUE1MVMXAxdN",
  "key13": "RRCpLmUuPbwEbvczPVS1UYwDrb5VBhZZa9eLuKGPyMQZhpfk4Dwv65Dht2SUcAn8d1NLMh3RrEBYYT3Ufg8rDx5",
  "key14": "VqUdQteg5BSatbmSV68pCJpo6upXZhTQw68jwvh1zgsKQ4R5denBizAD1wxSvsbk4k75Qa4dywzfHatfWnZPW5b",
  "key15": "V9b2k646mHB1e6EjGQmPeEuqoPkGWY3Xr7Wv4LeshaAFHsigKPtv1ss63SgWdDgRGWLJdynoJDhNHRcJQaiMRwN",
  "key16": "ocxSAQeTpYtToPcRyEcBwUAP8oPVNnJ14rGmBUDDrLeWWwjyv27Gh5mAbxZVsQJ4CEhq4V3cZdF4BxRtRKf2VKi",
  "key17": "5NeFPozd9zf9sMnxYW3FXju5zL4jhYFiHjeB4MmG6YsUxaxg7Sd7FwmL5ExWRJKEUUBSsvEq14XP8D14QF6QEAnQ",
  "key18": "4ZUHQLM3gQv8Qydr9a3vKni6P6Wsd7RfcE6vNdFvbKjUp6rLRnpscQfgzDRoRGMsW6Q1H6xje1GkRyDrWswkxUMf",
  "key19": "2miNz925h8wdhL8LfMuCDkzqmWF7ce52cDEFNLqzw4SQEEmgNPLAj4gpuqNAQgooPSNUgznQJfzDa3t8ae6BFVPL",
  "key20": "3MqxRxkAr2EkdMGGyPNFvS9panQZZ1TyGLb72z4mzg75hTEKtwCgGaXixZVyYucyP8MjWhhCfLqtZNY7GMCTQ5uw",
  "key21": "4iuDJep23J9HGVhgAx7dtfoT9tqxQ7uR99FPnQH5VhzQYqiTaorW7DYeQLLTokx9guccBRtqhus5iC2pYe4MLjih",
  "key22": "5bdMyzMqGV4ghY1kU9v5xheW2Cnne3N46uLMLcSKZPP8PzXfJGRcG1mV52KWXWmpniCsG3yzKvNWXLFpEZYLSGji",
  "key23": "xZhMFxjcausZFeWEFkhEEg8q3jyPno9ARmDnNpWheBGDzHrvVBhwwMZCCokjVWc1Psf18aD6NEtdEuWa4d3Nt7L",
  "key24": "3vq7Fvtb7dYpLdNTPBK2LHWDYAn16cVP7jdWTJznoGbYbzyQyybZ5K2YfWqgDPx3Afn7cKP3KJK23jf9aD6NVe2Q",
  "key25": "5XQoxNznRMkM7qxUMqAkWnMd1bgEH2wHxFhzvZcFneARWRq1Hc7uWfmT7HRzz9fGSXynMnpywZv5xo79E9c6LzMN",
  "key26": "4QLh3nrcjT7ZFHkGpWGfDki8yzMdzQwTXq36xzzVrJi9wqu2FS8zZ9aTGqCXZiSyzoDwN9gMfwaHurrSkqQw4hFv",
  "key27": "4hEaqx1umxvBM8PMhNkbbDZj8GXQa2ftQqUwbmHtM5CLZJ3qySUc4ZBtaNFTdSP2zmrBdFUqzUPJ3KnERV9WH8Bm"
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
