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
    "jNNxpBstVwASEPKKpADjPstNFmdJ7NeuUtiadoKgpy1YWibuzBuwqWjFY9mWKY9QuRHiXSsi6aXw3ZCEAu7rz7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2Udi6cfEH4cCFaV8yD7wgwcb1qiGEJedmsRU2UGx1xtdniUVNpjcUURiuJSCAaFAzRFVFcotuRtVJPTMLGzzH6",
  "key1": "61vzNfym2cZHFEjMKDqVbWKD2hqYQpP3mfSUtAbmVXq76qJm63aJgWM928HwkawUdncVXwHkBweiB6qP193yeGW1",
  "key2": "44gUfwdMpk4N3kxRwkN6T6dNPQqtnq3bVUgSjA6X3bzBYft8HioXrNKs1icS4ao6juEFCMG6AAB7QSkyMPafVJnT",
  "key3": "44zWzRzHhSCTLV21UTZCE1QUr1a6wdBdgi5UYD2eKu3KRp3c6X5VUH7SFoCoNmmwH5tKkriNDdGCBXod9cadHAxz",
  "key4": "oZ3DmCNFh1dC4NybYZquPtx89S8drLzhfG3c2Qh2rBoYpGJf4Pt1gPJsn7KdrU5Xz6cA1aBcdoC66Pme6m5NFJU",
  "key5": "32LEF7KzT9KwQev8Lthw8bj6yuEiwPKEk6EFVgYWveWS8ruqubSEj5HcCW6LyefWyHXh8saHhopXkcdfP9c5V72N",
  "key6": "Hn6TpyNBxS3kDJTzt3xeNSicxdzpRTPsQMHwusHZ1gRDGA4NG7iETqgpmY6mnkH1eAv34jLMKn7jtZY5CGdeDSN",
  "key7": "2jvJyqvLJT4oeCyG21R5uaHVz7gKUEPV5zeDzUgjDBBn8HcMrREK3CqW44Eispaf35vixk3YY87CZebAfshmR6AE",
  "key8": "4YaY3VuXoVoREUSHr1kHAr4QvC64VPLd9i9uBmEdHPHoczXfauBwuSMf5dyskPmw8PYTN6APG6VEDaesd9N2Ew5E",
  "key9": "2QjF2gP6epM89bqAjBwe6EVQZk8myP7zT1nwWH1vXvkWpvs4G343GrmXgcQ6wHUCgz63Pr3LpXwiLLBs1HzGxMPv",
  "key10": "5KzcRPZz1CwveovLCsm2hJDn3BsnFkGvtXpUWurHEd5eh9b63vQF4okuq6no7Pf33L6JRtFZM2PndbMzzxEfu8oK",
  "key11": "iKPKQKJztuL6wSYkVmztA7B6QkHAXJTn82cyVgBVf39ps7s31gqA1UsCwyqwNzD9yV5ivVEd3fP64o4xR4qicZW",
  "key12": "3Mf6XFfo1o4HjKSCZpZV8WMhWnXujGNJY4veR3nSskcMRc7xRMeaDzjB1N1Zoy1s2orKo5qqFHb4Nr8PLyHgLU38",
  "key13": "5tKFYDCfZnT2PmUtKt5zxFzWotiYbYE7bqCFpuxByGGngsVMqURhBSgKNA8ERhCqFH9Q87RGVnKtUDFgbR9kmScV",
  "key14": "59swdm1VWto4cixBf1hqSCoNiSwmeMK7eMXhmerFVr7uL1dcm6xx62jDdLDzLuUsEcVMdiGK79Vicnst264V4hGw",
  "key15": "3Adpd8ug5SBZg8D5WjyvoWQjX2on2b538R7kR9oTpXPmT4Am9v4cNmgYDFmphsoibwi6X3VXRbpUWZVxN91UZdUV",
  "key16": "56NfMmerz72tFcKfyPk9CSiwk6xzJCLoXrp1R42x3oRQ7ZRRVJBtubKuchsH22zWLeV66D8Y41FLJ1N2Zhh9pR4N",
  "key17": "R92AbLySFtgskZHFSsaaMv7gcu8HZRAiED3syxYwEyJ5aMczGs8LCKVUjSmBHpn2MCq7LbXRk6UoGNwpfdNjka8",
  "key18": "6Vn7BaQz2oqxhas9NbDNTu1dzB1N6ogKNkootjjN893bAURPUhs4AP3mQo4UsenPcGyuN1fWJrXzGdbfjNHDb2f",
  "key19": "2gkVKYuazkZs9RUwRxZ1K8yti8AjuT1BttFzhT3SnKik5M68ni8L1HCHZh71L9HzGm8NGwEyqsfo9emQuemPYzbp",
  "key20": "2C9NMckEPbGmdD1oC7KnBX31JgS3RnaAy5P5ojcFtYGWiBqpYK8NTkJ3eNLCsfwL36TGLKznBV4avEspQJ4XqorA",
  "key21": "R6kK2SMXCtzt3dZxR5xftDTVQWxp5AuV9sbx49KAHSettztUED9V3FopG9LXSTki9UcFdSGy6moRXi96WcTd96C",
  "key22": "5XeT1Ync9jfxjvJAGXetS3VygZJfnPVfU2PG3mSx6rcV7nHApVX9PCTtoyTU7pKv6fzPNDd8DX1NU6bP1ySuyM19",
  "key23": "4e4bcLQHQwkwqdUjm5GMUgsjcmh9gx4vDPsRwyS3Te4oe9wswBAipUBhXfZa89EkFcGCRY55AuG49vUjY2t1wGgv",
  "key24": "HDLNf14F73SFMasJ9Zqwmqo81c3crDAsUHqWsgXvvh7aKmpNmDvdMsTPUBhQuhpXeEUWd6XBtPvrWfu2kg4QL1R",
  "key25": "66nMYhAFfWD561HMWkBeD2HgyL2DdPUVMtosiAwLDuGcJH5Q9YVGhNnETtjH1xqjg6r9KhFnvgLoHuYr4LnSWD8K",
  "key26": "67A48BUz7hKPjmapj444V3F7veUdTWTUnoi6ZAXV4nDm1w1Qxo55ZJms8AqAmotcuMVmUwHN69nfscw5pihg7zA3",
  "key27": "5kBhhYmSs5Zi2x4JuMJBNCnmBKajJEyc5izBt9ZkAEi69qi5mvnRGHyrqdRaxoQhSxzMFmxX9sWS5NJmw34cixZ9",
  "key28": "5AesU8A4H1GDLHitT4ZM7fujqXYqJJc47TsqAbZdTPwZeT9Gwr3ryJ6Rw6G5PAz3zLRMxRQV33323rL5Ef2cAsa9",
  "key29": "4xcnU9gGFTZqiRX8gv8tEXpGjXHjKp1gnYu8YkjqwuEiwCoQyB4qdHGQ3UCTRkqoUD551QUkqsh7KHXX9H8nJjfx",
  "key30": "28xqMLgEFTvpQpJoL7N3JP2zBWxwaYHKyM7VM4DpPP8pWRmp3DCQTpJCH5Gymdx7w7EwhaTvgceUNFLkrtgv7SrW",
  "key31": "4bKRW762vHDPViZD3SeRuyiBribzDroz5d1ZuHDp38PZ6GDiMfqnqzqLvCMFdwoQA9ERJ8J2xHEHj5FzCDKGZNpk",
  "key32": "2mjN2xGXYoLWMd6epmX599CfuaGwQvDJcKt7zqU6h1C1BUNANJVNfAQw199AbcgDUYvHYYJTzSEgRzmek5qv3Fk",
  "key33": "JDEzap9GBkEbPtMTCEVYjGNcNLR27rUXwCvUpNwHtW6vctUmxx8spxzVt3XbzHdatBhrsHQjTFnSDw2mb5Vq23A",
  "key34": "2cVby9bPMx7t9F1L1ifgUK4RhaVXxQ44GQcez4cUMBfWGZD3k9qVRCWWVhiixfxf6LrDRRqvLqYDaYMknXWuGZ6E",
  "key35": "4jmZ5YV1Zhe1ZnZKqwnPfZJvfoeuivFxJR33HhmB9fTojFGFnzeTyNkQ5FGFhFWBpmePgF5VTwK3mWajrESG9e3P",
  "key36": "5NzKsPiuNT2ytyN7KEYTAnrYVhTgmsRRavmF2cSnxm8gvTpb9PHrEvYm1QLF2okYyTAG7CvwzpJUQuimWZwpvFTa",
  "key37": "pego4VEdZ4QRcva2KhpXkMhMy8brPifi3tizd4K7VQyVfQDkPKkHgKn4a9CW7R9X7zHLmeePj1uxY3GucToMVyz",
  "key38": "4uxj7intSTyY9NG6tSpLUNLWZqyoKxBqbFJiaouA2bn9AVC8sStyGmj4dFpin8uHyWfxPeVZh83kRk3HT3JUb5cT",
  "key39": "5ZEwgVwDYs7fA2n8BaSzYK6pUdTBoqtKeGz2pvif6YEY6F6rAA7QQcHmVzMGQ8L66FfBPNBjei63iYxAG4EGYh3S"
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
