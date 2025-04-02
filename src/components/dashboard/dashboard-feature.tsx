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
    "3zTwTeCoJKDNSeRSKwAhEEN8czUstPfXnpFwwgD2VWBqtJQoRXcaenmaRUbUFYWXi86it8RvD81dfsNi8Htfiv44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcAKJiCRdpAaBbEpJhbSCJdxXsTgPSAXGoXR55zrf4RqueBsAyivQs48cdsZDLpUUfSNKo7fdDBa7fuB7sMRqKD",
  "key1": "24Yq1RisWxUzibvz71eEQDzFHCGQApLBL7XU3LnLj8H2jcdziYGfgE8RD8HEJCzVxdkDFkdUYSoJKW6krvNyENfF",
  "key2": "HeJGaWcYaaxcrGJXzAA2qQUn9PBAvGjCf7EpmXsqBv2nWQWdHbJ9cQVukwThEgeAFsrjPGS2HysjshZTWgYaxPM",
  "key3": "zbY6YfJVqesnmY9VkYPx9D5Ps7ym2mMHcTFwzgisu76XcrGJ9z29nGGWFy2Bbu4kF8HyMeCasnmgLgWgD9MyevU",
  "key4": "58JKUZYK21PCx6Dujpew5AohATRCpnhWvuk47VsGCsY7Ketjh3Co1WU2Yk33j4bVgqzMeFTp2YjthmgvT9q3JfZ",
  "key5": "ZmGWxKKYgkT3GusQjTX65ti3Fcjdfj5p4ZdHTptnHE9u6pxyngeL7c3VQ25GnUThScueLGqEpwpZRGLydfd4j5P",
  "key6": "5TYKBPQAswo3XUsb9i4ykdwfYiu7m84maEN9Bea7b5XJKYYfB7C7K7UTdyoEvKQYdCUrsdpvu4LV4ktMc83TH8im",
  "key7": "3LuZaxMHw5w6WTS11KEUyQfQRf5WSoEgnqRRA6MyWDtAu4k3qNzp4TUe3Mw6KaHzXTAvHPJmRpqVUAaFEnv85zzJ",
  "key8": "Hf6Drv64qDtHT9Wkjg6XuJNCz9XQwJMofHWbYiDjkpbsUjF1yRCDQ6yXue679DWho48g9dAYDym8Jb4GsRx5g6X",
  "key9": "4sAgNXoudHzBRyfLuFubq4q1U2BMCEtBjXiWFXk9oYX3wS2tL4KFR4qQukz1SLnEBnoxgUbScWZ23zsjjyETEXnV",
  "key10": "46AN17uBGADnkpz12gkKBBqHCtfM51JSxAAKXb4zjYzH6QM3crVWRS1kyUD6zGLx1hWQ4eQVXaLWpodzK2vibtRf",
  "key11": "mNy8FiC15scAzN6FuTjgWH1G22Hsx2bvwcaBMGKvEHXL2Kjzz72JtWBmoFZr3b4aLW1vV9tU681yswXXHdytnjT",
  "key12": "5n5tU2eNYxboLH9kLvZjNchf2ZVBU5BWK9GXnHcMyJc5PH2qmnvgHgMDpaAitqVo7jzSiKZqBWfbwjSJe4X6AuHu",
  "key13": "4F7jfPUKv2tx3U67a6sLXr2LTY4HHV6AABgP17DGfdi2r3WNGRbFSyjkAmgHP2UbUYL8AXiX2ZdSUn5svmgSgmqz",
  "key14": "8tJTbSLJhaQSUdGnFTZh17N4TT3vwMGVNefHJpDJ6C7uGtJULMmydSRDqpmMeYdtpByxzajUHLHyBnKp3HcWgEs",
  "key15": "3um6aSJ3k6DeoY35E2pRCci56fipmpQqX49iFbQ4m6W4VNtsmD94V97T8gGFVCCsaGQGQ3yyUfD6N6jFzTEwZaVb",
  "key16": "5GSoMRZmcdX5Pu3RUEXTpsS7vNxhSuNTqus46pEgwMbpKXTHCNeeNr5CzTZSndMisBNNtRsQDhx21uh3j7k51yDy",
  "key17": "gi15iuMx1AoDFLTAufE7SF7puozi3vdoCevApKwkon9oQD4xSNZBqFprdJ6Gpas7g3e6pQcny3SM4wcfcYsz4Lv",
  "key18": "3bjv74n6TZy8J9EAAYQFeomHZ7PHNtA6CQ5hVKnUj4quCM73X4snUky8UZi6Lhp7SmJipEj3XKUULMymAuvcZm22",
  "key19": "2bHDrijqk44L2D2WCnC96rieuY3kYRCVq3msRQYEoMFhC1DPXe9jiqVs1CuY8Vgh2qRdzbbbJ3KjQmzZkaY9pu7H",
  "key20": "4LmjyMMBbf6YLADizrYQxtUZgJnXQsTrqS3UrpAv79vQNHP5neU8rtV9yyRtTXVEx4AM5UJ2RPqFU6FDNAY8qqSo",
  "key21": "3vEpb26d1XDQaK77E17PdZbiyKN9GmGBu2kiSUsXS78Nff8KEzZdMffwXu4ahg35o8NHqovHry13WGyLMxhHQ4vf",
  "key22": "Ci4c3DULJEbQTWfryqtUooyzaP1soKMcJ3smU7yh7EHozyujXZYs53nxkqSF5YVq6MHooA5ZextbDUDFCUy6NBy",
  "key23": "5kJnm2CafEGhFsoVsCx9ykA2Bb5vCxwoXj4kg7t1SLVByyeDRcQ4QRguGgcRyo3Jo63z8LcyhnBnLRxrXexu9yCg",
  "key24": "5Kft3YftVJMmW2sdYQJ7ZD28U5fDCrQjyWtQohRySs3fDH1FioF9ZyhpiQhpPmqm5fcLn7UeWu7ysHWG5iw3Y4mS",
  "key25": "5dcnVY2t948T84gcyHUH6XwFfJJ6MtFyVywiv1SzDH2jevUiJWQUgjWYPWtCDoFiesgb6V5c38cQopkXBjSL6GmY",
  "key26": "2ZNsUBPNdzeuxv7zerrUqukPCU5Y1djSHqYzNoXkPYjNLfPFE8zDa1VMZb64jvgqaK8fLhnwT19s8jsrPPKH4XDf",
  "key27": "3RdEheLL9P7ex7vHQH8TQNfeYf9CNU1Vj2HuwsvAkgFRH4uVTA2wPnWknvSnotZWTN5zMFvJBmtVhp6f9WdirsBz",
  "key28": "5mDASV7Kd9EnUgx4TQ8GFPMdUjNy5FGC4gBqSfBzoXgLQ9vTWmNuueR2HSfTbd6EYwPskPqdvda5tdySkxpV5HrL",
  "key29": "4HYw97i1gNSbfzTgUTuwvYArLFw7n8poSy9EZpPBdotThBHdVYofoCm75EHrH3dHedku21VJ3AdvovBm6PP12P29",
  "key30": "3DvGrAcn2drvMsk2X6DoXr5kSjjZs4LpyAVi3xrg3nZHMbcagyKQUrVvrfbFCg4PPDZq9CANx1knyp4ibYfdXkMT",
  "key31": "266SipqAdLQwwnWg5WsAxGWPCorxmrhvuCRMvjpryfCUfCniQChJagCxyeFhT1qLNT8FCnfM2J4FyXW5iVWddsjp",
  "key32": "2AcZC7PjYUnFDpkzA1ftnSrCB1Z2WhYvLUPqKhcvowqM71hJAnE3RooEouFoqLkkMyMfAAFPhq3cb3nW3pTva8jU",
  "key33": "VNeUa9joxGKupKU98qKJPsnfw1yp1GVUVmkK8fHc6x5Bkr5bT7zhK8N2jWp8STJ7udGog8qDjq6wY7fScniwcBi",
  "key34": "23WrepYBQRGQoJr2BVELCpUT1Soyvju2SXzmCte5LWSUT2FMxXMtDBFxtS8LDCYjSqys7gL827GSApMsMdeUFXdp",
  "key35": "36oCLy2Aezmd6CB6VgTLyr3whFaHB2bVpxTNwHf9DsYM8jfrsADEeSUjtnE9GHQrExd9J4Vkaay4K9Cn1P5hAwK6",
  "key36": "55f99p5BakzPVmHBV5UeLgNjzQdUykDtgfg9YCpQrTc7ciX9K93mw7P3811BPapsXvs5uNF2ALuBe8LxJzrHjCVn",
  "key37": "2MwLGPT7vbXDXZEUBRPn4ZbyiwiDxnfv5F2H6DBWf4nmrHeqjaqnFjLJm8WuL5chJeT9cd4RdZppzVZqRUXngjAH",
  "key38": "62QZrYDvt5BYFXsJ13GdwdTB8vJj2CeKLRYVu7bdJjrSiitJdEJ7xGL5CgjXiYyWzzGBYtF3wzuPk49SXd7TcWw",
  "key39": "671x1FMHzyuyBtViYDuCCmSLxoUgffHzf1erMyFXbkQ6fA39MsL9Uf9w6tRiim6M53RTp29tx4B9mUypBeE4CZjV"
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
