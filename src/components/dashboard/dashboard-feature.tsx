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
    "FiE6idSUd7q9doaeuLR4gKDMGGBh5iKUYPv3Qnk5GmNCLGmvZTDfkACs56rHvmCdpEqDFFosqCv36xjiYZiy68c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coUmtrPiP5C2ZG3259kEUSM2iRUYkuU3zEE2MSZnnu12RRTQxdzT9NHSioZJo28kwawHLC63C215hNJ1e5acemV",
  "key1": "5By7igVnAeKu9AbLdt98FJzc365iWMyB3pqoiUkCzAR9dj6gTC3Abz49JU1ywvgQpXoKy78TNYekVz7Q6tp3RTuz",
  "key2": "34j2StLRRdF6rKedsV6VGaTJRQ6hUM6MQXZoAmFkmkiSmdacCggbo9potJBEHPH1CgqgbEv3hQfZ1PicGC736hfe",
  "key3": "yKUr4Y4bdyqaKNikRCDv3tM3MeZods49PuLiV5agHegq5mgKyZw6bFb4VThtqDvhbNrFsRkV5z4NGgXSj7B7yPN",
  "key4": "JqJzHNYFzw7k6t3KVYJdKRSVpUyVrqQyKdyUHGrZtRyi841HEELTDhJN2Ug9F3wYAZytSGbjGYav9SqrCqKxQW8",
  "key5": "3U9uSAdVGnDYxSW8UkEd2fgeF3CyxP4GAUeWYXBdXvtRqNpCC12PtMCiLHXFvubYrPLZXoA4szrySm4edBuEyinB",
  "key6": "5zrZ83SKnpu3Nqc4DoqE21vjwFJi4DsiAzfupQzD2HyjdqdQCbjKR3qZGasuy6wTeFFncsmnf8zZMfM5nsdgXrjG",
  "key7": "4FDs2tLCViN8CPT4GmWERvdg5ndHqRfpQ36RtYhicAomjnT33wmy5vw73hknwgbsPnZNVWg8mLV8VesbJsJBdPGr",
  "key8": "5nfqriykCkcbWaZrxjrhRbRTPhy4S8EuG7wpUZUNGRqeGNmW8re5d3NybXtCqTNYUs7CvKifSJxUzE4apDFhcuRS",
  "key9": "3cJrJXgWdeCAhqwwEFmJcxttBBP2qE6GZzVKxb65ZcRjncMcFf76vgHeikbVWvYvvhfkd7uoCX9kcjDLS7b5Z4zn",
  "key10": "mUxPvDt6KSemeVa6WkePcLAFbkSxNDNPAfyMcgSG2R2rdhssNLz7XBTUWkqKZrAjHSLbQ3T9Av8HmxFcrWwByuH",
  "key11": "48TpAVX2cZTmjkxxpbJFNw4S59GdXd871ykf2kdBHto6eTF2mwe4NHaDAND81F3cWRrLfSLwXgbMoyCBsQawgqF5",
  "key12": "5jANWqsQWVXqGuT6Vem5kKaB2txT5fPYyW7Tn35J9rFfQsdxee5BWoQMxKHt4kcRu2n8BMBQdZeMsv5WayE1ASnf",
  "key13": "ExpN5D7AVnkmxXqRw6oRncx62WZxWqXL5eAfLiTEnuTEAUGWuzRdhQAGx6SGFujT9U6uPLgqhCUN9U61FvCEjJk",
  "key14": "2gj9wjYXuYHHwtN3zNo5AKKdG6g5k5W58U6ax4LnfUuTt3QVRFRHZUtyFEXTo2WT8NtvB5aDCMnHkSLrkipR7sZk",
  "key15": "ewm8g37j1NyBrfPc2FAQBURcXois82aaqep3cefuiY7skxq3FShg8DXgeYXew7e3mv42S7t2fdDRXMgUtjKMZ91",
  "key16": "28EFKMLF4p3dVezhAk9EwZetEx1NBkYuiPUJCYBWPXh2cjx6dgLYsFjQ26V9sjAYTDEUWgmbnbqjRCyF94W9hswW",
  "key17": "pyJc94K4Dh8Uhpccm61qhbwdbKa5MrMoMyy3MKiWKqK13iNJXpvirwAmSh9h4k1kethYzFZiqiSVVPEQdZQ4ffS",
  "key18": "4A5TeWfoN8paPTkdkBtqSk2v8aimtanfSqznKfZV4tg3DeBhoXDaALefZmjDnByfEWUGVbqqir7EtC5aBPE5DqUw",
  "key19": "3s8tizHVRZBSdcWKU69apXPGTo8g872fL3DvXNersMv8cvFB2sYYj3e2fsq1ZZdjY7drKzuV7ez1sNiCLKeC9UT6",
  "key20": "4zyaJB3e4ha9Dn1hYkCmA1pcMuzbKzK3SG8UfKYWBKJEhEi7Hc9JjyQLbfjTiiY7LAgXPm6o2EDvHtwBxyF2Sfa4",
  "key21": "F4jkJrCLjVCqWzNYE3ZUkt8QRbYyCjTppJGDDufjWxVZQ5Fgji5vECmuWa5KnWrFheVHSPPNxmrN76wzwbTBaBw",
  "key22": "4MmdgYHh5Y1Y6KYqkSayotAk27vzRjTT85VAhSz23LCBXwVjawxrf2MetpZ5hAtRCxozA6NWfnQY6xgjWHG21JGA",
  "key23": "3WTdAJv8YzWrumhskgnNVc94FrsU5nd51ekvHBbJMZnSNRibtHUzjnZR77S7tkxHieMJJs1k13KY2DEM9eQgQTVw",
  "key24": "2nJoMwR939u5iGYzioXcabqfwBFGFxk5PATsUEMiXd6VaDfWCihyG5uuMSwss6t7eT5mpFSmLfR4gqWTCAZD3zd9",
  "key25": "4pfczTFwHNu8fsptnnv5znZiqF2pkgppiHNdZGnQkEexLG79RKhhRUPnrMkikDvyUSMNNadzs8diGq4qD5WZRZFC",
  "key26": "4XMZWE65wYwVY2jaHTGZBFxAnxSogL4E9QMFkdYGsLWipDeE2ye8zkhk5Usj57yY3S15KqxV7vwjEoxWMEVoSHzb",
  "key27": "5bPF7FieBMKCXDu88hTjZHikx8trDvrpu1U3qW4ThU2Q1F2bNuVZiK6DvmYTCH3x6Xhmc3zURNdgH1WzhyBGhCxE",
  "key28": "5REK5B76gapMeRU167EE8Kda2jFJ7xBkLe26JjnJN3JervnciXWsocuzQxZRucUcH5h39aDDXfpwPbNHGZQxFzKh",
  "key29": "3T6komYZ35y2DQCtxm5G3RpDXMyTmiRKVwCyDyav8VjAWQSE6LX6PbAF9MT7hvFeKzbo1jgv9bLecCG6tMENSutW",
  "key30": "4LARTAuFRRshSk5fg5A6XRi374tTvmZ4bYuiChd9TJvZDsLNAwyShGmwx5x1EQ96c6RXUasfWmhaQ5JbRPPZ6BSC",
  "key31": "41iTEYS5DGxoy63nLKzampUuWnc4APKEv424Hph9V5vF4XrNRH89Z9TQh6Q8A8sufG2hbt92UMvHpvRvFtV6uumg",
  "key32": "5aNzRbUynkx6ed5h5Jy7NBVq4Y8eUoHoJANtTo5ZAySn6wve2sp2CPp72uGT7BWUdEj2ZemYhfagZtweu4PRj8bs",
  "key33": "5kbTgZdAqxLu5EkGTsPbP8cKaqxz3bYtcJTme2D4hr5w9tXdXRUCHU9p1WLi2iterooxB9tmQ55UQWSU9mCSGjgY",
  "key34": "f5LU5ciyicS8V8tNRDqmM8LbZw19xCyDJLtz8msGTBJYwgrzjudjypj5tVAnaUDKQiHGpQCHhybuth8bzgAaVNn"
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
