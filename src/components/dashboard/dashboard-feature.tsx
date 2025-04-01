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
    "5eKBNtd8ygRFXJtxp18oFpqebsj1L6QyZ6Gu8P8qxeHmjpH7H39iYrYPcH1BM4kcQCwk2pvH4ctrz4gyWXu77v77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65PFoJBFZesDGR8B3qX7Wzp3jGNzq3W23u2Lk5AYVKp7KcubqJwT5XEaUfPCbJEmY2hmXHVPuMHLjDs1tuUYTwdC",
  "key1": "g1gZnnn58i764UewRu5oCGijDwakoi9Ccv2dNcpd6jeeyvLm8foLVDbH8nFJvXaVJWw1BznAjQgbbbgcrjeYUgL",
  "key2": "3347DbBibYG9PTuAmaqqxMqcYS5CtZC8dd6R6FbAhdCHJXLAsiFXxSgRoHNGacowhyBFL8WBSuiZHG2DqoEr9wqf",
  "key3": "2MNy6iiGibXoH8LED6nCiNLm6YKQKUZPXEgXtEGzG5EF5itmtBzjnjmX43F18Mjv8wqkRSPMEv4Fjqh3fUjLtBdS",
  "key4": "wZhtJUfgNnV7rcME68zLYhA6ac4CNkb3TUsspmxGeZFEdKf8WoHuMmZ2ZEMoKHPJjXx3WG91oEz5qq8gUpggZ1C",
  "key5": "2Yko55zeoxxJWVbDz3FYgnfZqKHXjHiTbmJ7cqbNm3PvDSu2dDj6jo6RjVyEDMJAJTgPhgstpAu2Fkzwc1TA18ys",
  "key6": "5bk4dRxM4PvVV5Q9atfAPnhQwwkgWp67FX7DAQZoPhmRgdx2RiLXap3NaRgzE7uG6bVvC7Li3EmQUtycKPAFPnGb",
  "key7": "pohWAttkWzfonaNxi9YtxVJYXV6oqZBoJBdmvxnrouuZ9rjSYJjN8dKA2iNwuBh9BHUFPYRzA65G56DzCn1q1by",
  "key8": "62Xz1GdpuaTwsoARkKVoN9RDsooXzQT7zw6AU7d3QuYvQNYzu5eM7mAERt72NRTKxk5WEj6SPKW5wwroGMfHejyz",
  "key9": "5TqJPHukAdsZFE2oTWjTwFCmLGgtCyQroFTgeeLk46mv1JhHvVUX4Z3ph4CGkSq4kFuEKUMRB9Z2YpAUqs9xFh6g",
  "key10": "2Hr1EMGfLtYaUrxqereFFCBqmS6konCZ6joPYDoqiAydZsRGHPRBLeMcXpaAxL62zaNs2BadXcGHuHgaRv9xTyLX",
  "key11": "iJTmxtowxq8FPTud7iv2x9m2ySbDwpVofy2dQMqbmPXbuQhJKBYDo9NNi1oa4JVRHfeXrMdXb6FT7NooUJqtffs",
  "key12": "4VcJCsrK6hUikpCqKU7hb5KHaToaFjP5zQRfADwsXAmKLgxQMUKj2YMapZe2T1sTrNwUvAFahRTyzhn4ki6LrHrm",
  "key13": "3decFyRNrc8vXLg4rhUrWoYFxCSypC37f4N9pqh8ei8j1heTP4VsTuP6g5eoyzmKo34XL12DMJYW4R3DpdoqyLwL",
  "key14": "3PttR6A7TzdPt8myGZjFF9ABgxQT7qHDoLNsQ8Nc18sbeShAwnpaLgxwHhptZJWS4CJU2taTa8dNWFmHUwxsN5iJ",
  "key15": "31qyq8o1iNTvvp59tY36ksJdUETxdHJYWgT1HWZCusZgYSqWYJGqQvdPqA1iAGu3tzYHyCfPoXiDUvLa7UbJtZUF",
  "key16": "1awH9o2ws26qvqGkpzmrHDPe7jnMX6BsJMvEuhsCzE25JCZxf5LDNA113txFqAmdffckbo7sx5f7ASqHdPpUaMj",
  "key17": "2gcuRzoNzC3MR3LqqWroGtA4qgYekLbyWmYL7haCaGC2SvDq8rNEsZFYh5kro2zKBiSxU9PyseXx27JXUkD3fVT9",
  "key18": "4h3KWUG9RjiWwSwQQpdthnaqKSJphGXRA2k6vRGgobBk8QW3KkYas4NbhYDycwk3KmHYAmcGbYG5YsigwojtzXwx",
  "key19": "3RmX5NB3yaadUEkbTQXgN6epabfwLn9MUYhN4EAFXQJ4M9aapodD3TwbKv1Bkh93rqJ8YFnYsAfvrofYL6sAXp8b",
  "key20": "59Hr1SsL8xK41XAq1doMyCaQe5RaoLptzyHkw44Tf95SVMQDN6ZUhTFWAvU7ZHN5kL48ouE6xuV5iQHrooTcqtVj",
  "key21": "3yDe5c7vkWVmq3iTcni76UQtFRQ47jA46PtQvTNkQxp2yYpZmyirCnNdEbqHAjoye75xfY4u2V28cKFLZhTFKd9j",
  "key22": "ZMJzGBcapuNNRU2hnz8WPWG88pm7cKeBaP9NbzMxWLZ72bERyfgaeKKC77LZM6ZDYCKPMjZczrKmja3iBUd1eRa",
  "key23": "23zurkCXVUUVXdXWqNuXSdWpSqEgw6n5eDmUfsCThxTbSATkzDviUZQ7GcC2JHhbTJYDk2od1HRtAf9BX12bpRT3",
  "key24": "7jFoEFVfqaTeFJRHbu67c1ffUpum7Sg9GAEzdXuiXQGGGKjsqUmZa4C4vPV8cv55XqQqYH4ChFCrHCdGxDHu2HQ",
  "key25": "5h644wZqbkFYfpJfkEwoyMPR7CfYP1YEY6PjcjF44U3iLkfjMxGm8t99V6jtUH8mXQHZuAj7E1HkrH2Fr2LE4nax",
  "key26": "Cykx6nQWczTj1jhuNZxyzDmqLdbAZVAdxGUNi3myQRko6jKq9Diwy4CJf9gbTmdrjC1Cz4EPb3ei95XbF7a6XnL",
  "key27": "2Kkf6ANoQkLXouZRfESug28rfL15CdxY3P7thiZdvgMFs1vDn8XNztDvdo5gTt5E64Rt9TybgGVqEkzuvw4CXe1M",
  "key28": "5JyqoT3vmYpZdDJMKnRsyp6kPxUh9qV5q4tntFf5vCvJf2jTW2R5gopx6xAXYmiazaNmLzUoQ72QMZ9v7YXBELLe",
  "key29": "z9ScsfgpTKipFo56PUdCpPMAj4GvutmjoXJvN18jrQnp5ZiJdRZZaZkqFKgkALm5M6hZYh9TZXLsLhK9AwjtZi2",
  "key30": "4aFiXeF4EM99XVEn4TyqHoZASLuCsRfoqHzMuenH7ddUrMuWz6sFDpDaX3V2SW9YMifb5go3sMExLyf1kXzZgyJg",
  "key31": "nSsxjF87jZF73e5XEQGHxBhX6rcG4x59wcr4en82PaSdpxZ3EZg5hBQuJXDBXkGwE51AaUhYbhkAfCW4s2aM1n7",
  "key32": "5yhmEVxn8KDrezh2MmFcuYAK1vWXtkAhcBjjt65tcQprDn9B45UFNJCk5gjm3hbFQFPyBfLNruAvimd6pZ7moXWg",
  "key33": "5avjkMV4UVBavrMbtyabQyPmYFKerjTGAYc1usbYtwJGaG2aQscbvE7ZzQY3zYDRc6K9x4UMJxciiv1gaU18xsTv",
  "key34": "4fgxJ5mdvrQ9UEsnC3YrmRrHGkNoYA7t6fLuLuoo7ddGQM1zbq4CTSDmD3oPt4gtZMd3mTuzrTpYJSsXYHZPZg7j",
  "key35": "4A3zm5utPrGVpxChpA9PXzqhyuZwcHHju6KhiZAukhxGy6fEDCyXsyUqqcATsKTrpPjQb7Lg2JxtjTNv41t6PMfV"
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
