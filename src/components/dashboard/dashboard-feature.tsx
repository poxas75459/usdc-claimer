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
    "3B6SyaqyQ5S5SyAUbBph41EjzTVSUdow4M3debKJfVNoqmrLLo61HzJhKsHLCAwb11vn2wQyoo1npqsPygYWPPP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XsFSQnDYrDHQ58SqgyBHqMJXXGvAb2cwDZz3A7ijgz6HjteE1QBbp17wXdpFeZqsck41xJf3EmKicMGAoF3Q1Ns",
  "key1": "L6KCQcJDCBpvFLGEGY1ocUzWBuoBcxto2fjbNYMFHPDWsQ7AyyemLp9DSXSv6AJm3sWRRrN3Q6bbtQZQg6wX7jb",
  "key2": "5P86KrEPUhAhNKRfQKJcP8ztsq1pd3kAYSqk1MgwkYtHUMdLet9ivnPqMyAX5WpCNuTTTqpSsvtid8sSB7Fufk68",
  "key3": "4S7v64DQswBq1Mk64RGy1npcZ6Yfqbs9th6mcMEzaBhNbCcSqwqWNdS3KcJzh6xyWtnargF2r3TNL2grCsMc69AR",
  "key4": "5JgqrRYH2C4CcZSRzEaovuHd5usoUpxnZoUFttF6TcbW2JqSdSkb2HCXPMckxX3VLWPHXXxiaJr12eZCrP8kDmeu",
  "key5": "x5gN2Hvr2uYa32nEuvttZeFgCronfmKx4vzSrdoTX8NtMqRKNALEmnzWLbSqN2RcsjMVaRfYVUDq3CqvLcvCpVA",
  "key6": "2rR7oc3V7vCxTirccbmNpRPdXFHUswSFGGc1fdAowni1JZgdB8B6vjAGLBQQScPwD5T2cqu12syCZZy85PcGGALj",
  "key7": "TJvgNDxq4K68qbFZgcPEw9JvKFmAF5NQQruEZAv6FFo3DyG9LRisvMbmsTeqvwsjiRW83vTUd7my2buAxYsdRtP",
  "key8": "5ZcBei69FkPX99Bxp7xH8yGzfaLGi6KXEfnNuKjoV6ce2RJVrMzJvZghSwiWQxea1ssnsgkJmKRSMpxD3AJaAfVG",
  "key9": "2M19rDz2SVdMsvFFkntAtNg9ThqbhwBdpA1TifcyZsNXhcVTuXy9SFQPZmaq1kc92vjk24icV628YEFNCE9LNVKi",
  "key10": "3tACApqX5JVVJ3mv9sz3EGcbJwzdo3BqUiJ94oijcLBDw1T426ZUQ4YNW6czorHXo44aD4zEvvHqqNEiyzFu8FRo",
  "key11": "33Wks3G2Y9Cvzf3yZQGSsEQ8edGnekTh7QBnfmWEcrHtvstQxZaJjNqPcfEAfNoJwSmSWjjQHUdvcb2wNDbSxL74",
  "key12": "JW3HJF82tkGX1StaKbQuJdgXRG8YhimFqgWW6X5SdNWdcBrPA1FerXMHGqrppfoXqSKjGGUbiNzetUQPYsnxUN5",
  "key13": "5qRqBydFKi11LCqZGkh7oLVD4rZBiy18iE87XBxBgYhtmTtFfihBEL4rEzbcFVpAHrhzH4NTzkbzr3gWdGUdXmeX",
  "key14": "3uXYuGm8uB6BNEfR1ptvmSVkRm9vv6izHzgEgd5ygCL34T1sJUzXs9Y4L5pRD4qunqW5BtZ3B6CN4ktw7jaBE1Lb",
  "key15": "3CiUdr8E3qBGLF37CCsamKP5Pp2BTP4UiTEG79J2umUDVFbmpzKZbxBENYdFC2giPqCetcUjeB7jweym6GjtBqap",
  "key16": "2QuXoXmQtUz1eUZ74A4Zjhy6qnctM3riCqiGetEZmnYNi3WR9qFmAwdDL4auQSkbEismiimU7TydGTmRExUwpS24",
  "key17": "3w9vcvpb2cWJjFExUt3wmYxgSJ3rgLLQSnzqd1u1C9GPaUY1Fx3c2dtJ7nBDvrPVXABWtjkBbrQiS1YVTp93aWBw",
  "key18": "3diYGqgHYx4FUhULjiACXPkd1CUZ2pZdVVdKM86KCr5JCXaJgt9PQju9v8H6atXX8VAFDMNizgUpis5uyWFYntHa",
  "key19": "5T3fmYBs4NYgQVdDQTV1sbMbmc8EaXKkjYMZUnPaMLV2ryjjqA5qBGwsq8EP9c1ADadkg3fNgyf72zuNzBXb5246",
  "key20": "43DbrppKWzVtVmJ1GXtBrrxL9PC5kA1jWgn6cznEWreGHG45ZV22Quu9kWsWFK6c5CHN4MfR6cXU5WEMP1Meb6EE",
  "key21": "5XqxWm1k9nkmiej4m3L13fytBKd5PwetN3NveJAeBa2imubiT6ahNAzpJbNLwGXVK1kN1a3btqtxrAHYEnvYQPUp",
  "key22": "3jz5ffBS3dhvoJqqqwgbJx2gBGsxRFCqow2ijjba2tfczuNC57S9a8jcoifM9NkvEGZBzzSqia7oK2hAvfE3TtAo",
  "key23": "38swP1dFhwksisCunJQjy1x42JKiJYSa1rF6AJhPBhNiHLKi9PUfHUxfg2c3bngFGhvcHXwXtq69gu5hV6A13CEw",
  "key24": "e4DpxNYCadBbnSXpjeGTdD3axocVdDfLcR3yYHnmKQ9eDJc2S4vUjX1VZVGkTtFbYPhKJzTU1X6nv7zrfn7pb3h",
  "key25": "5GdhKpPJSYhimxT6cbFVYee1n4MmqZ4RtVEb7dALGdwXzvtNSRfFqfQV8Lh7bEfmEHbgeXJQBvqzQatRezLs3V1V",
  "key26": "5WYqMfeMMdbziHzKjvmLHtbLGNgeqxv3mPHmroc6z5ENfBqoyFSiHRz5e6RemEyDu9wos4ixPkVNQoG8XHtGftCD",
  "key27": "2Lc5hQswdvszpecEj6TQdkSQuarP37edDSoXPbWNui18LCJDFRb6NyffyoEdnCPLoF5rcemxaU4qdzgAnCmtiDrc",
  "key28": "432deNkbSTe32Da8cmwdvnMjLs4BG9LfLxkiH3WqsBUAEgTxCdd7QGg9cDaz6TLjBDvi9bvSebgeryykJycstCVr",
  "key29": "3oPAq5Wa5LwmQFumYSyvg14ZDdX3E1zEY2zoYXrods8tF2aAgoxBtjQXp5jeRgZcMThj9PsZnAtTo9vCAfaLZCyc",
  "key30": "3H4Jrdh4YN6pNbPfi7bxagPgBQVaffoHGYhEYwStfsmohEGybBTAAJsxH1NTuKi5o45Fqa3qiagKwLDG5zkRQvCW",
  "key31": "4aY9KmkfVqzLE7suVppdD1Pntvyvg68LvGQw4Hx5cKmkaxaxPDCDn2Z4DDbFqBaeN697yiF9MbCAjrsa5JkMV8wu",
  "key32": "47f2MvB6wLb7TUy6qNncbLYZABKnE8JZQ4pQ1TJk8fwDUqoMCMhsHddtTp9Eu16MVciRHdMERw82t9yj2goGiHTQ",
  "key33": "4WjJxfyuu3mrPLZAy5UZjwAvr4pYSxxSuYLXN6zWJ9a4UGyhZSd6cLkLn5EW3bVKSY8sJebETEoB9RPgHAQuuNTK",
  "key34": "m1X7fVX6uTMFndwFt5oDM1k41EVdd7xbizYD8dDvuX8bJnCFtMST2kQtS3e7daxgyAD6nwkQ3YyuDmD7qVTYtck",
  "key35": "4nbGW1VvuEmQgQdyfobPg4eDoSJrBgdyPeMcj1Vcqz67WqaPLY5VfS23nAvNsRrHiEufjss78cho2z8cFGboLaKW",
  "key36": "3sXWqnM9kQEtx9DVyQbQYkBoHRkrfEMBNfAcJdeQnbThx1LqLCXrT5dqgFhmuBsYd5MTZK9FptVA47imQGUeZBrP",
  "key37": "5GZjSFycyYbZsC9hUBN27BJd4KuV5ZeHexw65xt9YqkZWTybw4hu5hu6F377rnxRqCpr1v5gVyua5K3Wkg6dcMJy",
  "key38": "4vfwfXJndc6T9hh4VCc8dwFeUKLRuStF1GNauRfcXNA4rhuWg4BH1jPKNDoGDBA6PUNSFsgk6pbVkFyVvE1HtV7z",
  "key39": "4bEymFPXbGa5kimaDx211QEF4TqUKsCXdjQSk689CAF9KHcvajaHgwxENsQfnM9H2NSMtvwkgF1QoCHKprSRWbiE",
  "key40": "3nia1X3bNsToLYweVrYUPg8PomzjecTkVeZYLVU96bwiBNJsxYCyUYr7VSuU4sBbzXqdK3fawiPPEgW9TNNd5NFK",
  "key41": "2gaUZvNEZDd5z36ztB1hHsQUrDhgkxHgRDYMZ5mrk9D5R5AEvRPfGz6C6u13VubLUxCEqYmu9Fjgov7Rp5UCwqvg",
  "key42": "5UuzsmhPtU3FPD2K1TNGwtUZAjj6J7YM8i74BrVVPgq946gzhw67VPDJbzCpxZuoQJbAmuXpEVvB595M8BLrEzyv"
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
