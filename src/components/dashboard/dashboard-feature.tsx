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
    "2ugEZJYQLVSSxfq8uY8AM5SEgvrGs3p8ppXiE6VFzC5bwzsSg3bsTU2R5Gw9Z675kzBaVNWikSgQZJ2xTfvX3ECt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGhtgBHQrC53FGf4KVR5UHuCtxNwkfWmXK5gyvDiYS7f9JWxzY6oDmvNEeB9jPfc3G7vHWLG7CrSfYGB5PJ4AhZ",
  "key1": "66skCd768mguJ1kFg1udegeuJMfJZc7HXFqG9jxzag3q9Eff4a9yXqMKY94QB8FcWuj8dgTUzTKFVQxfhQPNsPjr",
  "key2": "288JhhECvvqpT7KtSXcdnnpXx4thHUCugEjeWk71aAesBxiFoxTGw8WewTXSoTUssSg6jq1DB3a8DsftvADTEMJa",
  "key3": "3RXcymyiLSmdvWzqFQsotg7vjWQHtEP6LAa9akYtRQFHb3F7feMtBZhPTYvrZBnHN8VzNCboZ99BhvCXyd9EiNWm",
  "key4": "2XW4adtKFNyDC7njWPNKPD1BMPGhbGv6CUbTemhfAn6SEpVRBQHFFtDoeL1KumPhQxCwea1ro9ybSkwm7qbdYU4D",
  "key5": "4UH5nxBQEun1WNQXfpSTQMMCfyC7GjsJLCBoCQqqqCjaKWiuG1C8RDvpSm9uM4k7kFm7svShQJqUuSuaMWo121UK",
  "key6": "5Gc4mix4Zqt17sUha4WT87L9FhjTeshM4KUbwUq4pXMbtBNNvtGLd3x13Jy8b9Fz4SoobzKnvdfpeUMwPQ1e4od9",
  "key7": "r2rqRBKsX8Ae9Gb4n8knSuuWhkb2nfuu9UkK7x3zzw6zQDkXiAMdjbZcREKt2PapxQVvB2GD6p6fjkqus8Z9jfF",
  "key8": "CzUTBfJvFg5sFTArmN6fENpLNEPvwFJ5nWCjJzL9nyCdXLcHjdXiATXS2uCMsFHyhkS3CUbP5SrTwcty5rJ1Xg4",
  "key9": "4s8DyLYY66ki9zcbosEyU8k7KdAnfNpNCneo7sBgWS7iL19ZepKd5mYs91vvZ8QX7WqgC5HwBfYejP8nhU7Hxtxp",
  "key10": "3wDPsuhedyJmz2kLAdypUSS4fXFRR8B6ahWkaux5c1phesof9Gcqse5KVuTBVKPUjAkpck1u8MTVRZJbEbjU7oCV",
  "key11": "2CM5JwVGmePkrbk2iHBHHoZzZKnAbmY1D6KJtYsd9XdhHWdsKTHzcNYTaJBBcx72Hb9ZtNoY4ihFUnmkYaZL27PD",
  "key12": "GvQZKnUgnhrFpCpGqKsYobmn4DYCDW3NuJTf1Cw4AFL6JSLZSvbhfYvkFWNTsQj2NcHdFQhHfCiGiyBWL18GsC4",
  "key13": "2ms4xTsaeBti6zgoqpQfoxWexR9Fb2jPPfrqmMmxZCSU5APNyXQvdtou1oSmdtj1ptPAdTvUzud5DYwucFfRHcWC",
  "key14": "2PxqvFnkUcqkeSeatz3UUFtvzaSgjdnHEmJRwRkCSsgxzNY11FtVJr7LHUufx8at9z1HtDJi3GqormdVVsDjpKy3",
  "key15": "2BCee714MrS9zPm2guuKSXJoH2N2GaZd4cq6PHshJM6r7JDaHcMuvpyN4aAK3E25ep6PYs8S9Jp4TBNN5Hmosck9",
  "key16": "2jwa7UqnVRATphhCZRhB9ZJyd5fHE4dbiuqJ3jRgGCaDoSc9FLQtCAuwwbmdNdr46Fk6wqk52iE4feLYKEBXpqRm",
  "key17": "38vqtYXGZZkKQdCCKAnR44RvxqJfHiqYiHBuUfsEP1xCi2w7J916DNNGbNhyeqJzbfRfJ9e2R741PuiHLSgFYF1f",
  "key18": "59TqKAg8BbgF16jPPax4MkJhgwRyL9vJYPgVb4VnWNhMZ6wBT92eYixwDUj4DTkU8cpmvEkCoLLBUzvsawnG3upF",
  "key19": "SqWa4X5AWCw17tPAXbmTLxn4M3ieptbG2S6JfjDfDYfDak2eyEZTvPexDWum9qbp2gpinakFBNyXhUkkMjuV5pM",
  "key20": "3Q23XPedhQNPxfWNx7Raw2HGUoNAJhZBhgVsxpMW6EGxXerJYrQUSARBpp9Yf6q7hkaADZtJmqekkkZTwrtFsWrw",
  "key21": "67JkeCuS9N352jWDCf2jFwJEDusfPqoPYNY1r328d2xmdHWMi2qGsrUfiMiXTLctJkG31fL4Sb9UC6bnfE7Ms1JW",
  "key22": "BVLrnRvDp5GSgmiGCfYiscoKtMUrd7MnRqGkdFQzGf1pVD8Bg6c7qGqv9ixCExxUWdtZXfHZZkuia4hJppXi9Bi",
  "key23": "Yrye5V7Dj5zj78793ewm7Yrs6in6avZHs3a1tDNgr7jxbhWqhHbLoidK9oe9RYXm13UmSeJ9vtJDjs1VX2k8YxV",
  "key24": "5ScpgZSKmqkUuP6aMrTzzzX59g8BbcpBWYZCEXFEMEkKwGhhmtVGgAvzHYRLgC4NhNbStw37ra3gXLVstNE7tDSM",
  "key25": "286zogRf4zFo7eLs5nxmQZmUU7XT5eTetE7PsvqFp6M9BgSaShB3dGUrY1dViteP5k3TiTVJpdadQ9wQYNF2ZqFF",
  "key26": "4etGK8dF6xqZmKS6Bqi8LWE2xvy2miUBRJwuRb4SjrKeuoZWxoWTehDComSGYu5EABhj7kiSNjLtyJh2tcLFN518",
  "key27": "2kpy4k8V44ABMWkLB6qYTdW7wKkVHtPq56s9eEt7MiPui29pkrGWYs4x3nqWPTPTDy7P1z3tGah69BQh6gDRcPkW",
  "key28": "3HpYbkg1xWuz674UuiRSGQYixWnsfrVhUQFz55EzoLGuVicvBtLUd7Wav7rUvyKbSJkcDwCHBcnjDUGgwAMfowLg",
  "key29": "igF9Sx65L3sbbeBepvyrpbQBCe5zamYfTv68QmJdF224cPjUUo1jKnzPQi5iep2tEPCt7nKYP3steUfusHmX1BD",
  "key30": "3Dg4MTrPoRgfKFKMgujhbFjXtCu2LXa1vjF5gnkjboXEiZoRvaa1gx7ECg31HUmyqYuibYqN6u5q9PVfxGVPitLk",
  "key31": "4hAAvcmmE9NGpKZsu5RdFQb6Uc6tCpLPn68nfyuK3tCm7MwcbmpzCRmoq8yr7YPWAnvaSjTsQ62dGQ35T1DLnqaN",
  "key32": "5FNuWAfD2d9WPAmPRQGdRpZZHBTGQa7RoZYSneBKfUGnmk9vmMnLJe1PUdSAVet7wws4pD2fyKXaRxh7u9ptSZ6h",
  "key33": "2ceAZ4ebCjStL9LqWhMGt8HB77p5UKzdcwU65eJha4bkNPfabhQ8u7rtsBJfvuaknRTxoP4QPnq8b3YZPE6qZQaz",
  "key34": "2unFj9oTuoz2Q7EF7hRxUJBdanPxJdGszCzKTTChmCc8sC67or6w7ixCDrPmsZSwm1L4jdmZP5eiWzVy62PQWQV2",
  "key35": "ZHkhLPLrCiD4Dh2wRf3CNi855pGToxDEdDibzjANNosCeY8ZVYiaAWAJWosnHQXdbkbDgr8mg2vyWoywJJybMtE",
  "key36": "3wZ1AzaHSa2zV66Q8brayfDSmVrD2UAiCisVS2GhD39NuxiqxxkdZGbehdTQrfb71CiMQDvu2nSQjTSGo4MxZfN4",
  "key37": "2mwSkq1zHFhYAm4fhrEWqm536oWrAVpFJGwSDKdJMWULcNHUm7aWdS9CD6AphoBxoi6RzuwHawd7vwmVPLr1gjGA",
  "key38": "4qHzY6xgUtukLjATy5Kq5ezWEbTWsgRhim5poqSeVNGWh9SWP4J3vQN26Ud1TcPwkwqH8wpJj5GDSypYqxkgBhBY",
  "key39": "3bjT7dseBT33svWwdfh5uYa9V4B3gCDwtJYcCAH4EWAzdkfgHgdeemEGJ1PJmfN1Kt4wRNrrNexYvHmftB4YwVDT"
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
