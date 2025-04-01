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
    "32hgcCEDfZjWZNGn2qKXewiekd9X1rf2WsHg1LUtK4qMFnBgu8vcsBunAUBkM8kTHMSYZfpv559sQeTd6nowmVdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUWyGHd6sd6rXYzeLN8g8CKf5PetmWUUPTzhYWpVuNyPumdThUK76GvYaikNTyqLYu3n92NjdE7J5qHC5FRJ2jw",
  "key1": "4AzgS16EMYpaXCW6CpPW8S8fwBhGrwuehJ9CJGSeLFcPcydWZ39WKRFmfddED8oXXp1PKjnmiR5r5TFG7ub5AxAe",
  "key2": "3TM2NXiH2PJY7qS1ZcNWS7zQyEZMKXvthDV5U8HCFZa9iiWhAeJDDiyPVjdM8rtsGnqji2hWKu9kUX6kpjDXUvhs",
  "key3": "3qpFtznpHfxD3hkXEYdRLLDEbJYr4meeS3hF1hCNAQnr2TwopGpLCJ3XitTJtvKtzGmKdeWRtnfuo6s9ALDL65ky",
  "key4": "W4KWUXoE89ChZipYsdcdRbWsjzJ7vmYkJ6c8tnQaVZSjCC49xWeD9mwzCdzzcUrqTM23vB6A92h5Z6Y7XKefr2G",
  "key5": "52UuDGx3PMSymGq2RLiy6ApSuj7KUT5YKmULsu2rcU88FPEW5HxiVDEtGbzarKsGmY9Avokz5mXNwEZmPr4tKb7n",
  "key6": "3smMZ2xo9vQk5UiyNBWsxVCVTrSbR1DK8QYXm9hoe2x6jZrxHkq83AFQKN2xMqsUmrsJqX3Q1CjHiLKQi3NDURaB",
  "key7": "5Em3LrscQvosmPsvpPNQ3TFbkXHJSujctQjYi7Xvh2amVuLMoy11mNyzH1iQWeM76YyDs4jBc9zxD5ZXwY3NJYeA",
  "key8": "21GcG76PV6ARBjSpjdZUi14P4G1Hthy8zxGLq7sLT381UaKRzq38j2wvHEEVsjP29imBFNoWkJfRfqgbY7Au8UDx",
  "key9": "G74GsW3bskyT69GDcAYBzbCYsYQbLskdGmoBz4Npu5uVCDKCv6qW3YCjyqVvbGiwjTn8GJ7qnB9EwGf4wocJi9S",
  "key10": "2zxy44Nzvt61iPQ2KUjbHiSwSakvNv5GN1uSzpV7ThsH7R7coGKP7ByTMFhAsJxyi8rTSJwmS3iZJ8YiwCHu1YQe",
  "key11": "7MSSC9vhtXrPLkCUPZMCoQo2U5qGeWUFroy5pDmRgjBAx71bfFP8HV1XjYs5LY2vsApSpTteiP65VsPBcPcws4z",
  "key12": "4CssUHjfFC9F29YV9aihniQjuHXiBwfZDt9dk3eAFue75CFoQqiWz1qiB2c7J3qNkFGXeAnfVxr3xdQ8Yn4TbS3A",
  "key13": "2ARUQboPoYgiszzBhLQ1fEZd1Py5JoARapSAhLhWEEv1NwqcdmBTJ55BQYfGVHdERUAyPUidLrJapwQhUde3wzFi",
  "key14": "2WeoLYRJq9MwfAhoGnC8Nt9QsWsL5wkew8y4bme6WxRgqzdNkde6dkvSzjySWyHgf9bozgsj1bPPgUXjRBLv9moH",
  "key15": "4teiHwvnHDQpAGtobHniQjpE9JNvyvKc1v83ccTS7L4u6V6E8J3YNAWLAvauU7nj5UDCKVE94P4zbQToqSBoBxvN",
  "key16": "4AFFE9o5vui8Bs5ypwahEBvtbFj1ypj5FNnbYe5orocKxNDy6U7eda2hxcfLSrzWF8vPAXzXB6HfGEcx5Vhmf8qg",
  "key17": "22c4PfW7BppGqBFmc5HXu2NK49wPQJRZ9PF95xhJr1ZEuk7U2NcifPN2mAZRC6UMFuzB7mTcWcMPjfwxecgiHJyS",
  "key18": "2rfQUdKHnaN9p314GVheVMJRChCLSDtrxMGuP7muaB1wvmoCJM7UUhiXq9ef4RasR8QVbKquMSYYGZ8wrXS85fjg",
  "key19": "VY8N5rS6KdfjG59eTfifVr2GuV7J2WTPTKzN1LEuHx3D64V5W37akxeJtUzZhznj7VsjfpHvwMmk5dFqwYemWhT",
  "key20": "3UQqqwEKVm2NWhcNTPSiX9WmMn2Yzpqt6KRYaY6N13r15FdTVdvzqXZydAfyU4J2UMdndmEgYdt7aGKdgZqitv2R",
  "key21": "4eE5edV4VKjVrJpbYWK4gKVhWBeH5avZ4TJAJPN8pNyEJHDXZANxTuuPPeH97cFv8rtgik82DtiweziWCk8t6WRN",
  "key22": "4gQrYaxmYzx5iR8byXC5ozBGja8xGV3KKGg6dye8hqtXfd5P6kj5bS65MWUxjWxEyd7Su91U7uqpmim82LX87oPL",
  "key23": "3M9ifVgrY2WxN7h9tQo8s7KejNzyZqAm66ANgjgyrQYJ9TDgBZuuPBYKTtwmr1MLMUWrxEZnA29gXSmA9RmdxDFd",
  "key24": "2qcrgMJkiMXCrrw8PL1iuFgFdJccmeeSf4tHsRFmP8Nd5rBvnzyrMaeQtBaQydyqzQRygKLZamXZ97kcozJtwBj6",
  "key25": "4TZboDH9Pzz8NAkoKLe26cL4B1vYDLXwTAtgcWDb5pC9hQizwdyrSf6tzBwE4bu7NGJwcYYszP73RnpvB46nn3fv",
  "key26": "gEEkWcPLTuQM2WuSfSBf1mcEHHfncbbF8URHY7C1PMKAQCndrQcrcW4UZCBwgWvzUyLrHgbk6ok3wcRggWwpDCX",
  "key27": "2DNvWac8nynqFC9zQ7s8WqjjH1rkTPwoPiWyspEimX8iJhp2n3W5WNr1WyjgfqWn6QVhKm9s8424G8cbnCv3GEy4",
  "key28": "5cJnXjzhMJW1jSyb8Xe2tTiAKdHxbmrnchs11f4ztzS3hWWRQcySXsJN2ukPkRcEny2JtA5c8BhNizkYri4rYFnR",
  "key29": "2LRCZun6b42LofkcAkKtG3SLR32FFCj8LyLDmFDbK2tc1XqkP4vX4w29vSzSpDy4KwjmZADKGapdVeueLeum5QJw",
  "key30": "2db5uktquHXfkUS5tdzR7JPs2cVUuyos9vPfAzH5mTzyL4uc9gGbv3Z68gPpRLtuCz1NoiUMHGEwwbPmXvxZHZu8",
  "key31": "12AFL8iV1VkfWHcLzyxFpuY9rhcvjNqL75jix5qg2bQuiuJ2WW7C8sPd9AJMXEz9QoyKZzLuStcZwrFJjs5MVmrd",
  "key32": "3ty8kS4wzA7cyjrqNDwHPaXjBffWgL1RoSJfuW4YwHBDYL8vZMZuP7m5Nmkh26PYrzv27WMjBYeSyL8FFQEoCpTv",
  "key33": "4VuAxPsrYHyUL7TJprsMrKagJcVTfb4yWkNhuhTyVWUeXznabfU8k6f4cCNdZ5jR6Qu8W5HShrVpcWT8dx1npqBa",
  "key34": "2JNhHMBB1QgLbQfZBMPuYHzu2LfFNT9MCkoHJkTwiDCXp1MfVzWrh618cmYr4XXiH4BsD5BcAeVJyUiNzVXAs5dS",
  "key35": "4DMZBHawwWhfeou7eNvyRA3bLJmPcMPcnLJP11VtRPn1J9Z2j1qMMcq9W5yJbHMKtaL8PqL29ufDD2rtuuhkHWJN",
  "key36": "2d2L2dNZvL5ivY8MGx2QLTFh9bLYd2MZG5iYM2T3XFKhBga7KUQ58prsuu3gabzpwDt3Svw9fcaAQ1ifeT9qrsMh",
  "key37": "3u9cRsrwkkzVgWAxfCZKDRDyHJWDNBXsTaxMKXDwCAJ4sPGciEyJjdcuGEDKamQmDFUEmkG2AF4s6j9EkoDSTDP",
  "key38": "5F8oWHpPSzBUuqwiQ6SfrUdwy7jY2KKMzdYhWCEoWVbYewNWcBTPyk9h1CPeCCVgaMynZ5rhwrNAt1Ro2chJ4rnE"
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
