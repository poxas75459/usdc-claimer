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
    "2qd4q2SEmHBX5GYgAVZkFe1pwTD8DjYLUMfagkVBxE7CySSF5eFETm7aM2RW23e21xbDrfdbPTbQRkuEgbf2zFh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jY6gnJshxEB6RUD3bhyLxnwWak9NV2PHdJhcyvQmeNivgwNktydEgQ9SoYTjhXNd9iZ14ZgakkUQ3rgJkKbSswU",
  "key1": "wdJoBjjmqioEQHtQBiitRH8Mtwsnetb8tcoo2Xwu2UZB5YQS1Wr4ApzCNNX1BGLjfkitErgCu59414vbbU13SDL",
  "key2": "5bzAyewtUmxyrh2N9gNzsfJnE6x8srkbMQ2k3KXWkYxpcw35braov5pma1A212RHGC6FzHTYmrbEhADPxDCdsTFE",
  "key3": "498ffm65PtZ28subbAJo4isY2tv6N4HY9LQzqZWsRAAjst9YvJUhBzjquEV1FQXVqsN29Dv29QqiHFQBwV3TTioj",
  "key4": "252g2zzyKCo7Wvi3bQ9TkJqh2ppVpYVcxA9hncLnyGd4sCDHAX2woMBt8sCLK1qNSKuu5V4H2Tnru1Junp79QULw",
  "key5": "3YpfGxFaFQWjvoktoWGoGuseQPeYzVCmSjA238ibd7nN5RwhAjbMTN2a4wrepMs4EhE6bULWZt8pZtUZue4XkA8s",
  "key6": "5xjiYYCetx6e154B6CyNBY9UBnikf9aTB1ysp6gVhZy9GC9H5zeKcYcFUt8sR88o1AkUpFxM9h4JDhVi7iSpHaQ7",
  "key7": "26iwxG9ad2DvnVfYLEuoCmTeH5qSe4Q1hBWRzb1GnMCGdKndg8YVmvJmtudPzoLuDgwBhiD8JJJc9HRVug2BjsMi",
  "key8": "2vMkQh48hRnApRbikjZF9wmKQPG3EbdwZsg7VQFYGgKSEePs8Kjh9WVwUwzFCgykEqDZKTFZrUxkt2fD7Vt9zSgS",
  "key9": "5XZnBY1Sds6bcwKbxiHFLZnVSshZrZUHVKDTeRAGjCNYmcBbVGzqvhu5FHzdcGTLG7a6ZRon1UH3xk9AAiSS9Man",
  "key10": "4frtyLJrT7kGjdQ6L4o5QQWkg9C4XEYhgSyDgJkscfa2t5BWoNHze2snjVhHMr5bjQbDFYWCGVdKawqVaz6x9PKx",
  "key11": "5kL3p3v2tHwc3WGw7Q2utL4xtMzbu3hboMQAy7BBi26fMu1R3X5JPVHWRHnPK54uV29ty2gu5RBqyKEfVxjdshai",
  "key12": "2vkH2nsVC85ea51nJ1KXnZuARe8nxmmt9BJCtxcuku7e7ybYQVx8yw6KvoEt7bugcWXuj3kYipv4HCX4r2kKMJ1u",
  "key13": "58VJitp2VVCCe9pSG4mi7oji3UrusWU9Ex9PBb9EYgSbQwTjaxyEhwFqwDKazNEDqSmYX1oaiDd3oP2PzzYnGBeR",
  "key14": "3gqtrvq5tZmUvRP1dnoXQBXRBBitJmu7xj1ThFGzszMGnyFwNigPf9Mmv3MevZQaMauFZAaz4hoXdf2oC6CmKHnC",
  "key15": "52SgXpdL9bh7aovnwQ5rxtJ28RLBabGA9D8ViE9JkRzbV6snxLGjSbr39qvgj2e8HdkMrpdJPLa5mq11deCDDmeb",
  "key16": "su89qKAuGJz5aVLN7msRTiYsZennzHuTSmvai3fH33VKseWGX1XeTDK3v5877GNZQog6QJDRmL3DGQopH8z3mFL",
  "key17": "9QFy1womHseASvUeQqFuzSbbCyJuf3HuL1z44hS9Xh8n29yNrWSxNszWfWw27vf9unzUpGdF9o7eY47ogX4gich",
  "key18": "3FxCV2per97jY2qdJqKSnii7iP7FTJtD3an5T2TTGEMkC2YwXgT1y5ztjZPjednAdMPCLpTfSe6gyvxUgP2gThJ6",
  "key19": "4Ja6aomzpViSsHiuoaswseeKCVVhXQj4LE5QhArhAkDwVRSEjTgaC5HBfZ3DP9at7rxfRfESyCdXhUUT6S2wksb4",
  "key20": "4KuxWhDrG8eM2jmX52KXGNZ2229HfCYgcuZ3b3JNgJ59uc41nSsvNfkGRUjVx7ahaENGm33k38UHKvJZ3HjTdAHZ",
  "key21": "31cAtKwc7W55E9A8AWnSShJFGwwbhodS9RFJA3FVj6ziEZEvy7uGB8rfTEwmSjmRAmGvb4VTQwgwy2sNArc8uwgy",
  "key22": "42LT6dHnxKTA4WhyEsp2dRhZYis6j3ztDPvhG4arLtDqdMBqiWTpX1qVYAm4KUSYGTCKLDjcFf1hamNYGApytZUU",
  "key23": "2J1ecqfys95x7KvGcMDAaqB2R5sUb8zD7RATuXyCTMT7FePQ4192kbBk8EvWbEusfUj6HPYtZog8kHbBVMjeL3Mb",
  "key24": "rzcczNcNKaNP8E1wpzFegUyV1y4jgqM3MT1NBgWzpR79uPkce2B9toTRG4ukPKtGGtNQaZmZM2zS3o23EayLBHw",
  "key25": "VwdSykavRUJaBSQ9viJFGqzvo11Kkw7s2TVCUMp8Y4wruH5ibqQGtqor3TdVWVyZMft3uWd5BZNRyWrnM6LBUYL",
  "key26": "21d5wTDcQXEMfKQdZKk5oEKg2vcppbotxA1gY4bm1CwVKTynMv6PuPJvCtsXUoLaNgqgfGzEaPt14H8xMBfXQCgD",
  "key27": "8QJEbCtZrWtojNtLKut7n8iBr4tKyBK1hrQA3x9XWjcMWSgh6BV5VUGexcTe6nFY6Vy5JnDViNRZpKGRQy4gYv6",
  "key28": "K8JtoekXskvrvj6DkvxSBC16MxjYbiGKcPFfZKc8L1wYob5KmXNkZHvHJRTASLc7UauiZ5Dp8sqM4tixDRgLMbK",
  "key29": "5hoPtygPY4s1wYoWcswisMKoHAd1NQXHicPk2j4P5yGuo4r9uHtr2Jo8TRvHKxv2eUWeyzzPZcYjMPevvJ23ywwh",
  "key30": "4sGgHeHzVFd8z7nkPh5hTaJ5GPQhg8ckxECiitqB1BdHzwnRwdT8VrWehE7Z7Xex2rdznt7ZUE8C82dMhVvPpcAN",
  "key31": "4ezwTpezoAyCHyc3fo46cWofat4ettBa288mYKHu3uRNQKysjDPezvvSQab67YFexQqYR4KkFtEqJ1tRewSTcLSy",
  "key32": "5phzq4uGKEnJiX5YG2QQ18VkBT9yNEh8ZiLvSyK4pfUR3bHDQberRcxfTH66gaPsYnsXVS3FbChWF7bHArvsuwMZ",
  "key33": "PQDRf96mg3YKzfQtJZTbQqaARgurCSRVGTST46s4ps4sRLNeQV5YFCLk68QMrP4QzUmxsFnDsAvZik6huiqLnyB",
  "key34": "2EXRGJiHo7UZesCECDDV4GwiUy5Nu1Qe9245V1hykXcFwKRdeE3gYHoUTtfvcwTia3xooNQhDmSjZARPSWR5ZUan",
  "key35": "P14nLnkPvFua5PLa23mbWDvicT2S2K8k44WJxgDE3EYy1q2cLGPJJmwdkfTjFhFTF4QTWzwxkojka6tDq2V9a8B",
  "key36": "3aMttXAUvjtud5BMKpAdUUP4QHnU8wHLCvFngHKZLR8jf8B9htz4gsvfjZcfEvf5mjaiXM9fed1d5RQQRLb3H3sK",
  "key37": "2JP5svqQdTPyY1fM9pkMDt4p8gmao1kgvgjxdEZ9JbiBcKPuLzJZzV9nGMfUZeE21oBYW3vjpYbTATcwYHJvSNYG",
  "key38": "4anA5P8QQjMfdYr6zvEjvrTh9xpH4RdBUB3xS66Fy2HiGcqEoMumPp6oFKk68iTyorgo5qBZBQUMAvYbgsBiw1vJ",
  "key39": "2MAmnFpSBH4uXm293Epj433UBmz45nVhsjC3v6tPCaQRPCdodqxPPzanRZRTdawqRCy4ggebrR8WVrKXF3qen9w9",
  "key40": "39LKu47vhNRW2iab9Wx6kjet4CduCJcfpqPrepy6kmzxhFukRAJBdmJfA34Lqiz3N9WxQq6RXvhXRs7t3a2szbQT",
  "key41": "ywsmXQ6zCfUNT6w8Ph2t7NYBjUKFwqkND5rTEQgyTQ4Z9Q94GtXJL9Ei4gTPQkTbLX5YAdPzR3sQviw9sEsD6tH",
  "key42": "67CmGptT86XTp5DWNPoN6sJQwwXLxBjCPwLEEG9stpxvtTFP5gB5VoWTUQLNwpoBoSWh5JiW2MDnaWnYJ712fdd3",
  "key43": "5eHBdcnjJMJMyAGtrG3GYoE3UtmixJDNP6eg9z5hsgHx83yaARCAr8345QteDoiTGTfvJrL2bQpescULsbBqyekU",
  "key44": "2morGDBiaqjk1z6BweTaWGvM1u2NoY7sHHZ4YM98dBNK2rm5TQeKdLsDvDR8omEx8xVmtEetvxickHnS2qbxQ4wv"
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
