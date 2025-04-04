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
    "5KUAruf2SmpYizUrjDhHxjLi6ypPRnFN46sXVUjxJFfyjwyX1USrBrpQMiNqeybUqmdEBewhimPZ4ERopSbzwwHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QiGnF91PENciK7Jqpm5hazzJUoVEDqLHw5w9cp8uJXyttakZQATKAyMBoSZDaTt6gHM6vqUYQbxhkcxLyevG1b2",
  "key1": "3JbAHDM7jZEhvxjxVx6CGPBSrTudGyKQo2693CYu6jXL4MpwtEw6iAcLCDCfnjwKUcL2LUJHkSKFzzDxvdPA5jud",
  "key2": "3N9CF3vfwEHceb1CVsRDWmbxeYF2QSgoY5tFRy6sQFA27rBMT71eUwkr8mWgbaUzokEq47JqJ9E3SucTcCfjUuxx",
  "key3": "CAMMenqo3Xw8y8zNcR3wkvSmu1w2Q3fdzYiDcgyfmmD7DeSBCw2GpbTze7xBFubhBGNdA1C55DDKn6tKxVFK9fZ",
  "key4": "2mFDi4iM8dwupdLgC2LkEYNaGJtVuHXPqYCXWsN3KQReyMnFHjUUY44XmqKfc68EzAms5FbyS39vALt3jrx7j3TK",
  "key5": "47PGMWoHx49bEBUhTZ1khDbNLxnzSwWWqntWzzpNZjsGuMA77nXc8TkEmfWuoY6X6FcoQBKiyD7jchUWfQ3E8Sxm",
  "key6": "3qcMinhNjbVEVK533iu3ofeqJgS5Ub4tFTvVguBrV2TavUVaGZSKPU9tb9RXeXcci5KHyRh7e1E69biKeJsrVMei",
  "key7": "4wcZvshfcSZ83fppMPRjgNtV9TrFvByp7ZfLx6etP7wi8MZ6fdxJYiTmQThYMH59ECzWQ88AmqkRVP4UiMevSgiB",
  "key8": "4YTXNzW6ERwm35QJxGn3HGStEaUcXZHLwU9CPgUGyPNiUWRbKYiNM9QosWfXtUjmUHMSLyuo21TtM73tKxHENpcJ",
  "key9": "2ghzSjekoZnoHc9nAzh8adRXHJ1u21c8HxSnyAfNu6ZGhUaLXcTrNq2R9o17ZsACJSy8XzNgpUotf1y1U3zejcxg",
  "key10": "5uLApKGSyGJfGsU9xrUBMusW7Tcsc3f1x4uiYHHYdYX3ZxXg4o6ZN6DNvtEnqN3LKVC15d3JCa5WECcomwq6by45",
  "key11": "ppvMiRoHAcbdivpoJYpCaFoGUNeojR58fjYhnsqN1kE58U1a87RynwtHmZSFKuRFGtnkYmpKaAUkhz7NobaFgy5",
  "key12": "25Mu2zEUXVERUjvmWH5A4ujqtxN5ciHtrcNvw8oEwf2x5aEyoJeCND4CCxbSegqSs6k46jn7xKKjt95jrkxFcMJT",
  "key13": "37DgSqVFrDjT9xhpUW45tNAVhgkWRy7gtjKdF3cJczB1h3miwkbsvxBDBUPfeG3tqaJKiDzfR9wBFrNExjdWyPjC",
  "key14": "3sCMnQf9uXNNWL2i9PapujJwjQx7GCZ9fFiMSfySuVQaNLNF573uC6Bm1tTpQq9maAyZiG9F4TFaK8N5iSzZPuTV",
  "key15": "4Cw4Lp32UU3gzQ3ErY73enb26PTRp9NVGzkhtWgwib3jt6TJTodX4Rri1MEY1fx2EkjPViKmBEyo32TnsFdXCf2o",
  "key16": "XFcpqxCMwn5zEgiCHfpTyhCuzxCsaK5SEpEXXAF4NrJNwQgt2iMxGWP76pmx4nKnXQXM6D9WGBVgJEgs3JR3DJZ",
  "key17": "59VWPcxRU2AMjsM1BcZWrcvvp9M5Nb1Uz8cLCgddxpooWDoJEGjfA2DFv3625cSH99A2e3Qn6hJAAQr2Hqw4iaYA",
  "key18": "4G7fYTXvsHVZzeecARPFQRxcYrdCpMAgv7ZKk9gJQRQdGCDtLsUvTxMNy3i9uyD2jzF33LjfwaMLR7aQmAYSxQX7",
  "key19": "BsYnjtFRUPNkFW72F4NgosJv5FLraUDsRmt8fR5v9rokDMQtn87FNQQJTU7U62oBetyS1y2WXY6hvMNdMsBY35R",
  "key20": "3ZcQGfdYN6xxF7P6MkySUqA4ZYPp52KbaogP38KPFmdfn5gzPVc6ZjQwDUaANZwZJwCovXRPCLpLR7ewsi9ofYDS",
  "key21": "VZPKzbwaN5T3PaxVJKAAjE3pP4BRSupoQnSCvJMt53e4zFwba4tnD92cU1TfFEunJNT2BnH9cUgNHPomjkzGY83",
  "key22": "5G4XPvrj5U1NFiSCVxRTZTvHi6jp4JE9oByynMS3sFfp7EP9BRP9YNZY8rpp2yMpmy2QS6g7oCfFp7dJbRcvnHSd",
  "key23": "3izEKFDDhtFvLWtYw3y4zqVdxvT3aw37oM4xhDtwHLRgfGSGqZ7EFt9bRjjzHvo1xRoTvPD2gSdR1ALyPynJUt7u",
  "key24": "652yv1ZkjV5HaCDsUa221TgwPkGAe4XEZBEuxK8kd5sCxkp7mLvEpaVjEB3pNQr897M3rKDzVzubuJdCirmcMdXK",
  "key25": "3WWTtpD737vB4qPZNs1xRWqGcjgyhWSGYVBzdfbYeAcZdS7TMd7DL6HHoP5fiRpV1jUxoFgUt2nT4SHtyndP1m8B",
  "key26": "2v58JB99zKkD1GrdZQhKVdvuHhnefH4HTnfbLCKCVdeRNsGrDCFB9gM7uTnV6MwGDCXzu1E6B62jqhqWC9kka2ZY",
  "key27": "2WAuSmgmakXNaT5kUyfwFfqtjNsfDk72Sdut3w3d85bnoVrkgQsShufhKLsYtB6ffZBAUE5x6U551n42sf2XiFzi",
  "key28": "3eBouZ6JppY9YbrHG26EHeuoWcjVpWwVe7iFFyGRMgrjuJMvQ527bRnwsUpzvoAAHD8EFeby786GpGZRV9asqRUH",
  "key29": "vT4iCbUsZWh9MtjtcTukTpNKkTvzUtEkwUHwLAo7yKx4n1kEtnw6KDKMwJDdp6qhaWYywaXGu5E3FiBKfNUqdAh",
  "key30": "34MNFU6VcoYn1WnkuSvyQBaMppycddknrjHuUmTU76aEJqj5tv7qPaVpkBk6om1QnRSMHCtHdxXS6XFe69Nm6bWL",
  "key31": "3fVKy1N94AgCEUXh1tftQaoGGTPVB5KQJnkAT9pozJiSQsiNBVyKzDkZZ2daiGBrzs7FdjsCDGYBFAEqk3uY4mVA",
  "key32": "4dSiGa9LdhGgedrSUa5T7eH8mCpviHeiHrkzEBGi8qPVe8HsdgCMWmHyVZ7uknARnNa29yS8oSbPG4hE8kEqypig",
  "key33": "3Br2gUHsL5joJHYSJhE3dZMkkJLgWqR93ueHqpU32iBUk5CRkAZx529AJ6MP35ThzM66po63L5WhxNV19NJZCn7m",
  "key34": "4NcWnCCMAqhcw6N3Za7b55WrZqU6Li4MnJVG9FqDZPqR4C8reQL8vtQVWw1HSYaQXpNp7wZBpMD2ghg2XYUgen5o",
  "key35": "49vdk8KsxUBb9j7iXKt4fvkxupnXeXHUcj8QSMrLWMX2giMn1Xqxoe61DZqL4cPkYRTQbzPcswBqF3hDZHUdT1A6",
  "key36": "3EtUvg7BwmgdEiSo35Zxie9o88ydcc2ZJuUcMBJzZPfbvy1xr5eSLGCYuZWgdFr8X1Yb5nC2tKr4zwZX7UeW4xEN",
  "key37": "2GeUFDyg3ASc6zQWhPW7H1VBaiULV8krTPwLA2tkMTSsap4M6g4f92afcF8R1ZATKmK1w6JN7r5prv2T2D4wRfjm",
  "key38": "3pJ5ZicWYuNKwqmVd793LtujcLUJ3oa1jHmA1Mv6w9D8HLL2wJ4hDXZGdeE5UsPbjHPgPpcj2kz21ownDP2huS4N",
  "key39": "2x8kAt6ee16BkikZqBv1XocZ2E3vKmGE52o4ucG6j6HdCfN4CeCR4cNvH6oBFvnZLFDWoQrCH9UwQ1fc1BTcLtxQ",
  "key40": "5AhERme5idDYf1CjvUaWcQzfh9xg5rrFNmzh2jvtC7a1Ag57hC172BpWVDbXX4bcx3SftVpzZ7GiFDAXuGdfAsn3",
  "key41": "2SoH4bkLuhSG4DqpLN3PqtXx13VvFwTYod3bKa5duK6QQvm5MPTTQToEk3LrDneWyp4YTy2rCV3A5vTSjPvrvzZU",
  "key42": "4CzhGYo6iLEBDgy6818hbcxH6cLTb4eXbu5WWPrGSrTVqbubYS8zf7zeCTRAPqLcZ12E4SVQuy7J8sVE12R4sicG",
  "key43": "22kYChbJUkiV4Uw1crhQWP2ZzEcjBEmEAr5DEjJUQUCuVu5MSG96PFdbporyyCg6MLgARwXVBk5k4NPBi7qVcNvD"
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
