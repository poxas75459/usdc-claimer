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
    "2GqamswmPQrCn7nqJSASoFiric7veyxksnTXmPw9QzaP5NUbeeZ2AhhxtY5eaGBpz8Sko18YxFbKwJRi3gauMJXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PV3WUSr1QE68c3t1pcqJX7Cp5QYAWSxG1zeD4tuHi6S7L5dVSXw8MtDt5w3maSD2F8vbbyEnSFk3r81bEdb1L4B",
  "key1": "sLBAtzqU4Ti3T3iYtc7AMjaq2oJX49dGpoiaC1MVnVbF6DGSAmbXHTNm1SJijF67bnAA2srxHn6P1nonEawDUG6",
  "key2": "5ssSMmmStfJp2sn6YpZkQc8WQLW1Z5NnYLicHWPk3jWRLztu3fhDYsyg62Lz1Ut897FHdS5R8XBbhs9BQyTegfAK",
  "key3": "enm6RjAok48ZDEBPRASLL8KazwQnMifqYtGPLe1mqnXbuhtJD1SBsZr6Twr9ZxVFuCyzH3n3EhARimqNB51XrAY",
  "key4": "rnsENXBxdZRtRX7xxRGzAEz1KRpPWjRrDzBf2kvfS41iphCo54TjSvUD7SemsokxPs5HXMYAaTwu4GhrdSPYWsD",
  "key5": "46mP2yUvXpUPKr4uK7kSQm6G8zUmnRnBs8bPr1yBrxAZTWJdcuxdebqb6KJFVnGqXQfGe3eNZFycuCgFSCssXDDN",
  "key6": "5kcMagnypttVg21UfT2gGdGvYo8r8WNszibawbafBPXr28A1ewYsreNNgFHMasb8H9hxPvEm79amKqLdNFurpsA8",
  "key7": "53kpHMZjDzPmWZ9b9Lf8hR1WyW5hVzTp6ogmWtQfVV28KtZ5nXXUfu26oEBnoNysGvdfGyF3S4nb16TvNrky1KAW",
  "key8": "2pbDEhyk1FnKz9FFs4h1RVwFgqgLxXRNAEdhcYG5N84cw8bngvF1ojLRUH3HNScKzr4otvBvWZy58ajCFo6F38U4",
  "key9": "3GHKRGvMhR3i3WBYb2GrkACNAPHLWfTQyhiYV2as6X9WjxyrKjTzeTvVVxnCnRkHK7MmDpvEMUhZRUPixcCTQyet",
  "key10": "4Mxt4Zu9ZkoKGYRJk5gConxbBg8hx6vRTEXyWwoe4G48SpYkbhUE49axBVyKQYxMr6S9ssGb3jiZMFWPp5yauAGx",
  "key11": "67qB7mTAxX4iLsQ3F7AhmMXjemLB5LqemmptCXu6XAsg24UtqZrMEj1Xrh4KKDuxV2Q1ku9p3LFjPtaBt4krYc5v",
  "key12": "99PrR9m8xCCviv3oPCZ3QsaQ2EDnvdmZKrZVU1TGpPmq1KyFf4M5M4eYW2Wz5wKJTtL56bkiNQtmDB2QAvCZJd6",
  "key13": "wPYEwqYRMaXKPi2Fau9kq3BZkmcp27KqtPLH25SouXcVaDAB7H4WMXg37CZ8WTi22GoSWCWUYnv9J28W9841qyR",
  "key14": "2ruHQj3bZhE6SxfnZFxwK1vAAfNZ8ymaMkR2yXLho6gPezRyEsqURs47F2RB62sUcbr17JmkesciEzkfY27L3wh9",
  "key15": "49VHbfB66DdwcLHyw1pQYkCWkr89xhtWpXkiUTwUTNqq1y51oB7UNJDo5ghmJexDKTVLLNeGHZm2EHFdmqmDSmhW",
  "key16": "5fHSLRoz6pDWEwbXE8g71sjAe6JDedmhfBmJKf2drBudbQzCCV3WGXL6RtoumDBU42yJZUYxywUg66JYMYpQiqqN",
  "key17": "3Qh3jzYW9dWZDDiXSVrn2oG8VMtEsqo5z97Bpcau8o5x3mY97spv8oCDavFLuqyFStPUtsc9tRpAVx9ii1nXwdnS",
  "key18": "5ZGZJHBrbXBRRZ3kQGXYZTjqZGr3LzrPWB3v5F5yNuTzGGEwwxEePQ5cr52ScjDXDf6EjjDruDJUX1YWXBStMyZo",
  "key19": "4mAeerk5fUbNyt7CRDoNRjeW5U3jRNWQK7sgn8Btd4Rctn1Jm3K9gmFw1EnmR1ZRNekHGh12sQcEcort8kasiz8L",
  "key20": "sYniDusSKMuLNTpDzd2Fi79RiTfZUdDeN7TRpTyUm1QNgtEgimJzeSqHCvnzEZJENMTw9zjbhBf3bL7Y12Xb8bm",
  "key21": "5WrAQPcueuPyBSDLxDYxVuXmWiWTFfmy7DhKmTgHjDmPT1n5tCsAjBYxo6Ho71UdexKFjCvPXEoj1DJECVva1x4c",
  "key22": "4S73tNthM4C7GSKZdbQhocrHCq4d5a19BWSE7uw2Knew5HHEUP63ZEUwtiHpGEo4P3TZqrPxnhK27ndRJGUC7odP",
  "key23": "4DfhWt98VV1DUrg8vEaa5YdYG41poKFzXvnqRpoSJR6d7U7YUwhDD8jowqVct5MTwbhhXBG7kTkuhWrneSFs3bWr",
  "key24": "pLYJ6zCnR64ZAETtiTBzhoRmAuBtFtPz54vanTgNu7ToL5k8PeUgdr3CU3EYectyeUW3S6nDyk4LdrropcJG6qy",
  "key25": "41Croj4fQSZo33XGqxkiFyjxRduQg7daX1tSP3w7QKkByketfXYUVgFuF9xfo8ndG43UMmHXtK73KRERzdkoUw3X",
  "key26": "3yTrevupMxrrAqySbHsKc4nBpvCm1FrCGdMDVHcka2x3KeXGWrFw6j8YYp1Le9BCMFZSQT35CVCt2cmQZ7gv2wkb",
  "key27": "628mpQDGNejJVHyWG35JF9TwP3mZhRpoPdCvcnMHCPDN91x98M2gFQbd8bRT5BxsHNEfHG3Q4uiLkDViHkvjupDy",
  "key28": "9RZoMHrjVLSKhfHuMJQWbRGqRKnoT3N93HqZMtpd5SKqEZvpxoUSTx715W242yvomCzvTbLydZWzUGS2HKT9Ujk",
  "key29": "5G51wQTk6L1nY5LqB2dJMrnTCLyUQY4FyCu7hGbJMNS6fXYgAwSqT9e2xrNJ8NQkxUu6tj7ywHPz49mbRWnbq8pC",
  "key30": "3Cc7cFoB7FTJkxsfrgYeYBK45zHWjMZUrSdfyvgsz1SZVNzFpgwLeFX9nuxBbmReutSFpA8yUWUvn9z34rNRxdws",
  "key31": "5xt2JDvE7HPwzopwMXSEBkfvf5KFEv4qE4DehGiXZh5SPxSr2d1We95PwU7VdWq959mUnttE2e5BygAFXYeLRfvo",
  "key32": "62T8YxfmmAtweJ2dhEXHasrXSn8BaqncuWeNnrQBEZKh4JnTrVBerUsqnMVSixVMDQVodkCavvtqvbgNccoQwHf7",
  "key33": "4t1vNoQWZKGbDiJekuk5MUhFHQQiJFDvKqEcTePz1arwiBt1Nze89FqJrF7pU4H19qLfNYxe9RgxdSwAY7gtm7dE",
  "key34": "5ZJCUSivUFqARuhrEBhpo7Cd3taE2wyHP6tqCqhNTg2B3VjWFW6giVHoqvrXfd7uH1JK2crVzTPijE63ySDQtuxt",
  "key35": "rkFVrvDBZF6Uo683EePmThwqwpSr3kgR7vkmSvwEByaJFM42KJcmzxmSMMLSfw2c13JAxT2AjwTmvQkNkexnqj1",
  "key36": "5sBks6GKfQhubnPjy2GrzHF3eu7ZMikQL1sKWKQUeWMYDsdh9i1UkJDhr5Zw8ajU5gVKWfu3esCiEDarLRJrrXgT",
  "key37": "29hVvWYXL6VE2HXEuhDhVnHU7F3cGHWJqtSNq7oYQeKAYboL1xeN9Y33bpoTJqEwRHbWTW5naaVKb25AauEerdry",
  "key38": "7yXeafLV1vqdPyrGFZzNfrLtSBTiFA4GkBWJv2Qr63eKy35eovcp48jDPQWdHG86CfNxVxQ38pNjeNkH3Mkbxrk",
  "key39": "3UfhAoQR1vhdW4MitEzVqWTXXnipf2ST23Jo7Rq7X6xfHjyDrGwzTrVm2kYCgC4Wr1FkKEwkmeC3X4DQWWapFuJS",
  "key40": "5cHdWhheYHMuEaH1hXrRNAz5v3D68KbkU4SuXU9mEQjgQboMCjz7aYF7Ze3yCr45yVmHCCtyEiXtB22V1qTd3NPB",
  "key41": "3Rx4oJ46cjXwrUy8GUjuH4HvAGkmYgo3N1mJYx7GFZQ1h4whPZ8t2e3vR1vyZumQpmiUfnXtLZqKrwH3D52SCHpx",
  "key42": "3rDboH3n5KbUJ9y3RUj4sDuPAspZK97F65J2LzJceS2YuMxA5ttP6LmCks89PimK18h92hFh921acqEHwDTpdGLw",
  "key43": "tkv48SSWUkWS3vbYfMLBYcBvv7Kne4pM9e5Bz2ZcGGH9GyhxB7JgQj5DDocitTiMSrU3k25pMeYphVUbVh8uFRF",
  "key44": "5UvubUd6ybLP2wqK8csC2cgSywEg84hDQPRHeeJ7bkvetKmVJmBhZFmvq4JqcDANUwPFbYRdU47z2PbpgPXRvAo4",
  "key45": "3ZfmB9QHhtwNzo3qP5HhWrn2T2LSEJHTyuumYL8fMQNNAUJTbC1NNq1uZSwxKbDk8MKZ9GBmREnfpBVLFPyPMLJE",
  "key46": "6rMMb1KaTAFgAFnxcUJsEizGXwDbndNGT2wisSa2n8fYWqiv5GbkZJCfrLWm5jZDshkmMBGhVT3HxQd2La4npk4"
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
