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
    "4X8dVLAmxw53dRpMCPZiHgXsq6Wgkz4Et4WSs3vtbE3sXiE9HkPsZbKqt3wpSn6i3G8Mzjdc7xi9L6wDdcansLKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttfBSyEHuQkpEM8bcCT9DaHUAAA5ddLDsjb5uvDJVUuPqgCmepJBoDeiL7q4WCUGASRauE5juf3XLpdxZEpdy5r",
  "key1": "337jzHzQAnC4cFaSniAECL6vz59NJ5g6yagXCW8jcXdMTWetJDdQV3jTu8Car7zmx8wCsWz68CThiTXSu1RZXa2q",
  "key2": "2wbVCVwbNmFW9rm7u3Cnwrcc55TeRxiAiZ2pmEx3kYqWwvEVjY641dQS4Vfg5jELgcuAFkZGnaS321SPTvDVQtBT",
  "key3": "4j5vtejJ96eY2a37DdBmszENoM4JjgBzWe35eqSwFPQXgmoaanwWFg4ca9LzzRq96oWkNBhadhFzhXZWiDDLdZsQ",
  "key4": "41Cbu8xVKpTp2rix6CMHpmSrCuwRzqAUuaKDaZchNgASqKMTfk3tszH1HYtozqg3VmE2YSbFbMQsds5DChnXvbWq",
  "key5": "2AD4v2HhTWFQ6AD6u8LwgX1xeW8yPQcRdqUDQ4WSA8HWRpVaywxRfpZWLbuBMZPrB7HK7AQxhoBJhv8zPHwN8oUH",
  "key6": "3nUT434fz1BCs3WNBooweN7qzWEZ6rEYj677T4otu9XZJiygd863ppBCgCP2i2EWeTE9k7gcdkqy4gpVVWSzAD7d",
  "key7": "2uFWeSgcYE9YHuQZNbskpN22Jnjwc9NFcRsasaYZ2KjdjbppSKumEuJZ9S39wU5CkxfRo5vniN4waKdXu4DnXevj",
  "key8": "2NCbi9ewrWqnU2Kg1G5rWnCSonEhMNqtVcfcYvy5FQNBzS3SrKF6qtqqoi8w9SFXqBt8Dos2NymjNAdiUUV1GKH",
  "key9": "2CQ3PM5PM43U6pd3kWGZaWd6bSWWhjoncrjAGvdFP7ErxorXMzbZaWcJ9pRevdRBdh1cqRqeAifYpUtGtimi9Skb",
  "key10": "25ioAjkV89CjqGEZn4thqhV994vk5tav1Zt46Qhnnf2tLcYWzsoWAMQmjwGBBJzRx63ssbhPDiK8QGj2PvWVxf4K",
  "key11": "5nhaFkrAudwDvhgrqXeBVWoto5QpBtwLZwG45mwNmkSiSbBQDGArjohsDB4ocdzcWBdFkvar8YFT1odRPeb1x6iT",
  "key12": "43wBFXi8gm3rKxMggoHGUeNpxwmykcRQMRgHUAotVdSz1HUZGGWc2EkKYPQgZSz4jE9REA6ZUnF4mAE7MrmKb24k",
  "key13": "3hQ5CGfHjk6dqP9eWgbw13F9cG3pT6fPPmNQwpxL7TkhFu127Es9stxkszq1GBpEUgLGggZ53kmep26hvbTTGRrs",
  "key14": "3XAMdctsheTBYrXpr1uADnrYYPNnjVvFR1xFpMNDE61i6BQdHMoxaHJoZNSohkzgVBSmXmDju6SmKX5hiRbiAQoq",
  "key15": "fVe3ohdbUmWURwa9nGgisEhVVFt4VEQqBhqyqw7W8VuqfZ5E2KTsNV1LvfQafBmVer8Y45acoySfpKF6MbiUxwS",
  "key16": "3UNvggagXYu8HdYSucraYZTGajfZyHvMfrMbnBwEJnm1edQqyELEup82nrRc5LYMeWd4BGmuoJAXcMQqjuKe9tP5",
  "key17": "3VGb73942RJtWFnrZNZkwzw61fPRkKWjxN9rpEW1NiPFp5UbUQvH6GWJ6zYAjpHh6huAzReZaS5PUVUzoHF67tDx",
  "key18": "27bUnBgmy3G3SK4NH884eL8mdQG9d81corTvC2UYzM79Yu6mRH8NzSPNDCX2xA7gwFf1uNhtmzvbga744ggrjF2k",
  "key19": "3c9BzQ8QHuGzjwUcBgHLYbT2adLHZTFstg414y92WVQQiGLJJKLexiyUJz7cx27AvjrVRyUnz8ei56q2hfYg1fro",
  "key20": "41WW4DnqHfafwXgaQg2nrrnXkAtfahXgAx2mHdWdxSH95j4h31KYaEQ4KSGu3Lm3gYfuyEBfUzk3M1nsoaWngbqC",
  "key21": "guuBvMaaftwysau1JwBCJsFRTBHx9AuQDrAgPZ4mpfuoa96ghJWaBSXfxcYLbjY3zpMGT3HAnESG1TozotCM2pd",
  "key22": "2EVY38xhkNekUYSnx6hLcKDBMrrGJgUVSDoEuhYAM1XgywTwQKFwTHTEW7jJM3nfY5tss4Xn3z37jc2ySQVtXxA1",
  "key23": "1V3UvQefAfWfKgRsYEeV62WCS3UNHPUg2cWRZrMeXiPUShiK66dK6G1k8kj55Ft9fyomX4fgqM7gg8Q3vYqwj3p",
  "key24": "2EzYzWZ572h61zDbRK22BSjGQ2mCbPLAbKivMFu5eDMuWZv911czv7JUBwqCtYZBJdEQ42M18nQusDTC77V3ru37",
  "key25": "XzRk2KxWRs5ozKxBWBqCFvDHw3DH8EKyy5sWmKaDvUHQLjgoXF4oABUJeTeGbmBcTwfZhG9K8ArvUaE3wHKWhvn",
  "key26": "Toor8EgyaKN2kmzZYQHu1Ew67qaKVvjLzgBEfSkavDCo4AYFh827Z2JW4pJZrK6Si88kne5yhYfoswziW2EprKW",
  "key27": "bmMBLzQSaYZ7JKbf7VJWfzDp8KjhZot7FaRAFybCamxbnQMvU3ckU7E98QFUX8bDSSLPU2Zkt8DXThMRLhUVt63",
  "key28": "4Q8Z2moqhpjvujhTQkVFDSb3PsH4LrAPQymzFR6yRup1UxWqUxSEnuCEktj7BFmNUQxkRrc1s8668b4YTVBEQ1Ws",
  "key29": "2UXmC4gDJVuAtMcJQwFRa49FE4AfFcHsE4UnQR6Hwp52FuDMVyXQuupFWULypV1tA9BMCQpmZXA6WVGd9UfoYt4U",
  "key30": "37mzFgwqjNqYMWrLxswdTLKhfLY8AurtVt5addtqZutTYkVpScGNfmfG9ZW48U1Nd6dW52Lp9Hbz2QdczTnVfeXe",
  "key31": "2rAq6Kv89T4jBchpEYXJ1utjobg1DjrZM7bc2EaLYjS3rXNCo2mbCb2ynwiGZHb1ywZJ3Mv9cxpnnCDbpPK17at3",
  "key32": "5YJRJBdbYFSTZgZRumrm26Ac8ewEQ3trRXPSh1mPwi5FtT9g4CTiQvmAYf5cwghQAF3JmS1o5oXCLKFWaeGPfAiv",
  "key33": "3Qa1iSugGNnvwZyZWYKNkM6cZhmyZ1kkRGVr2NhHim6LJoRc7jzmbuoL3kTDE9Gx9oyVPrrjoe8GbQzTVTLUHt5m",
  "key34": "63BUMBmMJiSF2SNfeofcjrgUBwXJ2RvpcuM8kBvqqjUjtLiZD4TYRBWnUJJp8AdLHhSMfRra6oRjtHqo9FrZB7eQ",
  "key35": "GQ6ZvemWNbjpFd1uWomVbaYisfwnSaEk7jQKgb2YGeUhZMEdtr83ZKTW8zvD3J6iHoVbeBvkTkfkbz24YxKvvgw",
  "key36": "2TNGguFfwVitr7AKrVZ3LReXSnTSqC4KCnt9Hv5NGQeFPrDpB4f11f1oM1VHLbNUx2ebAai14Y6Qua5pkNKfsLHD",
  "key37": "tJmjL8cKpJMf8rUdJhrhojYeGL5DdnxaQteKtxm4uA8MydqQdXa2NVhi6GmDb7pA2mWUJPxogvHYTya4qjJH79F",
  "key38": "5wTz62jJtqw7fUDvGLsUv4T81aNtQLHcCDuWbgyEzXFz2id7s8ovY1fzoZfoQXk9EzuXNzfXo47Tq6b1Z2iSYXKM",
  "key39": "12yoYQvjrvyqGALACwFpJAKVbfimu5Q5HJkd9fZjMrs5XJZgbDB3B5Va6c2HAiSEHSBS9HYcm6ewiAPfwizqZF5",
  "key40": "4LyWuMs9JzeheqmwEWN6v13p5BaXUjNrUaVzF6i3b3ofNf18Q71B7LQ6EVGsaSMvFhboDXhJRVA5BaSSmMdFYvEK",
  "key41": "fdktr64pkpspHN1U82G5thbi4qoHkmQP9vZ9RnCHD8KMyCXhyFM5rX5kJqjPoAHpBZCwz4eyKgRMh9YAyW7fRL1",
  "key42": "48r1ufK9fb2sNkZLW2fU7Y81GqupeGjamATn6paAUk7KZW5U8xZCNL3DuyVJYRn2pev91m5hzD16WpiP6XoE5FgY",
  "key43": "2an1b7greEb3hGNmYrUzD6FSkmtb7J4egMaL6DxTNXw9F1UCmTxkzFfjJ4SA6oqYzc5GtkYMLYtrbbfqG5u3LSxQ",
  "key44": "9UHWknmP3viEWc8g6HpVFznjrXL18LnPJgdrUevVTNZpLejHBcH4TH5quRgZ9B91GFCKNRnueeagYSh8HNd6XGr",
  "key45": "3LHPXh2zpgf4VD4uAJ9eercc8VPgovKMUFcatja2DZzRDbsjNqPs9Wqwbg2b81ocDUdFtWCRgrUqzJsuHgVHoYm8"
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
