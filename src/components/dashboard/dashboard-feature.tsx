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
    "3kFi4qWgMXat8oWT95dSULNA8dfvS4ytYpWL2BDtfyJTUPW76jv7BeCWLUqmVneFfrpeWRpe3oQpvNM1buHd5iUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kiZxuUiiVCVb2PSQ8ziaxZuwKN33Vtir1ZULRzTSqZEVcS6s3DQjjiSTAqkaB3H7a5TxtzpDAYuWuNjnErdnfeh",
  "key1": "39fVscghTcMseLyieg69pgSdtMK4MqGdA3RGvuh9W4vNwaVtP7zCTGJmcr3C5Zn5k9R5E4D18WdWwhrW41MQcpNw",
  "key2": "4zutx7NUK27ozbgWR2osEWyQyNnwKswrabixK52jZ7MG88MHGoJwgyUz2JQwe1j9xkJRXY4AGRg3Kp1qSc6Pt2Sx",
  "key3": "56SFdmK9yr1VTPvxoRTm5hkgvXUBWo9766ohcFiCz3Dtwr9jpbP3fzm1CSvRTMzJdFxXNhE1vzzmn9EhWLFvJAwp",
  "key4": "KfmDjZbtWuTcazw87aLQnWZCBCJ9RJ5p7rnJpscLQxN7PGUjBosfVxt1TKc9sy546yUarVefA2p1iTvR1jP7m2h",
  "key5": "5fN29XuBL8KJFPASCSFWLpKyRhyuYeVGXHcXXz1Q5MJ31hdYS3eXvszTSzMnk3dsxTZzrGfaSNHCADVzs6WiLafs",
  "key6": "3mwncRFABYibviZUM1Yyyx7WSNeAE4C2UG94fnNNUMZZUqqvRAtmadLvzC23ys6BvwUQMgCs77tvKgTY6qSkuNPH",
  "key7": "2sGK9uX1FMX5poUo4RJd8XVmQMQjkVUM4y4zRSnuWBPSQnGw81TZHDy1ZGKYhgVm9xzMo4wJamrydy5axgs9MfhD",
  "key8": "42YTWtCo73DdHmwkAuxHdtR4iuj4XRF49GCJcoPxehCLN5ZdU97Cy1aEeHGzHvPHdywxSXD5X7VDAB6qQ5HDwByK",
  "key9": "3uNKs1XCjBzC9kHc2X5GRhCnpgsPUodicfsJxcanWTQZMJM4kvKX87GzcTucxTLhvAxqZcz1N6VabM9FTi7PXqop",
  "key10": "3SP6rbrmmbbSq8R6HYih3jiWtp1d5CZ1WohedAErnqYU6ARgrwzSdeRwdfHGwW7bDxqwyMexLjs3UtPJhZ8GrKa6",
  "key11": "3xrRHWp7qktEgJKNidi3c6UiHtTh29gmDdEenA668TH5kuULGsBfUjeRMZQTZBoAaXat8TWWkaRp6SsZbmvKmCdu",
  "key12": "LKbCKcuW4hxnpCe1SxcCL76DMa2hyLHf3a8QFa1WcBmA8m56iiLhrz1ybjbG1dFUobDnSJe3eu2ns8oBPfeAyNp",
  "key13": "2NpSi13uALA2NQq2s8r62DuKtkVxpZm6pEphqwB1BLiqkWMvaBGmZREvM4AZkrEjVKvd711RCoVANgc1JNiGeRJz",
  "key14": "4SFuqszmuBWjoRZNa5CEwpKdK3jBzyVWHnrNCJ3NpTwhiXkRboFRzc4YdurfeR38C6Bqt2eCCs8cFwR2N3qQ9jbL",
  "key15": "4xrTsbARpHA4MPAyyHbFNDkbiPR6fHjAb2Xgmj2zjRPFuzpTBeQLcnraLGnZG9Z8hH4szE3kdkcFnMKobpxjNDs5",
  "key16": "3RtKaP74fGgpJJWjF5VvfRBnhNbYFVRz7g8jtZN2jd6XTfgL9KnT3gCd7Ji6hAqogmwFNafUo7jS2N8tk4dowcLH",
  "key17": "9qJBAwhH8QEKKkai4mYNxrDxXPMcrtRNYZAmM1LudT15DDWjqW3EkxaJSLq4Lgard8DCALpPZuN2roVzPgG3fE8",
  "key18": "23ktVNRLjkueRuNNS4sk3setRkDdfabWZM3ZKsejz5pJDFW9dmKQDthqpyrQXHwiCg1QxsQSUzL9JRKTDbVyapTj",
  "key19": "JwTgXvF9vE6HxDAv4YJxAZKn5NKwFZeGcyDVJTsu1AzFCrtaCxHxYejDwkx5wCeRZMdk46EEBe525P6f2kxtpKV",
  "key20": "5eSQ3KcSuzxyJFpsp89UtC7sqPHQCN6vbHFEoNbZmsfK7xR78bcw2ZUp5oX6LH3ymhKrgCyAvZbuRbpgnaP1WVqy",
  "key21": "2jDpZeReUYpoecZ6uWpgcSWqLr6UMw4WGGnFv51Vy2ELVGoStAykMjBidFmheoC22xt2iVAFdpBVjz1h5jnBtcSL",
  "key22": "2638UuwA9vneyXyF3U3dvsUi5LXUkGn3qR8pkxsqXZurTQCzfk1mPAjJbsnp44hfRZCmdRJ14dGe7oQi7pugZcZ3",
  "key23": "TBVBJ13YBGKj1BhDMbiaHzphYv3vJBRMEHQt1DJtvzmcM8wknT3m3bWodVRUPCYE9eWTec2t2mcVxbNC8uRZbhc",
  "key24": "HriCNjcmj6g8WvDmHpBjmdMgGbY69pMGKvBEuXfGb2wytTYt8amySDrygrCTBHyypcTxYpsGFgUP1qmJvArT3i6",
  "key25": "4nBv1y9SHqhLshQ1kBxpc18nvSv9adUdvaWeBvWc4mgdzUmGAyrmnA2DvvnmhS6wkeVTwmyvR5cMPyZSv5CmbD92",
  "key26": "VHsPgs7AxmG6ebcc3eHvP2kJocSxjhvqx7kZRxGXV89KTdRyLRaZeXQWgRNeF1fsfJkjpKbRJWDcrqHEiuq76wE",
  "key27": "phWSFC45FpzRQN6XfLeDyoizvJ6E4zBchjA1nm9ceDByZhCjLX4hKsSUJ9w23Wn3egtXWsqzypTrdh3yzotXzU5",
  "key28": "54ceUwTr2EdRKXSdP27je9DirDRfFJ9Cj89zaWaVK4chfoCZ9gJ86ZHofEknpSg32TwZ4GVeRHN9A1Ase4VefJye",
  "key29": "5drZZx3wodphoApxh7kPtisVptMTjnSc4gdh6196qaztBd4axZBPDW8gpcsJpV6P1pEHxEiqo2CV7XMAyXE3hwcp",
  "key30": "xNfbquyGXWhfkrsBf4us6S8q4y6ywp4B3wmYk2aJcSj5yxoCyTypafAHgkA1bMpfD6eGLy9dCXswicq3EKuxWPk",
  "key31": "3qkTYx15gG8uxgpBkS4JLogaSVPqhxs5hB2d2ZJrjqzRg5zZt97S6FcMQ3ykD84vqfWewAghQgmVrz3ppnyLFVHk",
  "key32": "5iY5gtc9nPZQUTiWm2Gooh9mM8VdVDaePGFeLxoyRcZDsTTmaRwcfBYCDG7zbrn7X7QkfBPyE61S1kKFbjhFbMTb",
  "key33": "4579YjVgrpKzUBH7FBe6xsNP1FxfAd9iWKK4FrFcXwgq5nLkawVZ5rwxose84KF9FP7xHJKJShFofhqpZV34RBMU",
  "key34": "iLT3wFsd6PFh1webvtPwqvKzHaEnn9Zv8z1867nzBtdevt7X2i497NoemivQcKzeBUv8Dx6NnBfFxr9eJrDFhtc",
  "key35": "35Bjqbr5wwDZGoPGzv22cNRPUsGGVRCmoEMuci4KpK9WG3FaydQiSXGM148WniHZaMKLgBDGeUrSNAYAha9CrTjT",
  "key36": "5ePY57aJF4MboRrcHa1y16CuWwKbXVnEkTewH7W7WtK61VeTSaZKhidEG8bBF48AGuRa3KqYYWHfYd85zYw2yNma",
  "key37": "52U5SvWsJj2xhijhFvMBVRTzSXqirmKZvDqeZxQ6XPvRZifdQnhAf4M98G2KBxkahUbvuQFCtUVc6mudQRpDPZXa",
  "key38": "3JAJn2RPpBzEWTdxt5kssswC8dDRNQE1fTk7VEFGpT5rReizYmpQJyXJBvAAx8cWBbBSZvsaWswXAufFRv53Ruen",
  "key39": "3dRb6W3y9V6VhcCk9oMVNDmmxedqAXMKamx5QAsKWdcTgUJHfkvNqgXaFsK6CJsSrrZDGjia2F6toKTHqh4PnKVq",
  "key40": "ghfJtn2vmkfbDjs9AwCkTXwqyQfV2WPc3MEtJrg9AgcTiiy2DidRc47f2bEjj4QALAy3mjGCi8xVyC2HbN8PcDg",
  "key41": "5sXuKHxZ4ttdmPtSSweCD92zs5quMGUb2AN5GXjjt8fD5ZDD6m9w6xE8LQwzT3fD7CLCxTNMkpN3kDjevqs7gTkV",
  "key42": "gNqYn5d39LiioQXTjHCgfkyUcYx2Q1u5CSRLCWwDoqKAdAcLjWLnkJQ9kUXA62pNxZjfdk26kpFx6ucpFjrtNrb",
  "key43": "3xRMAiWkUPoNyP4Uz1cfcG4WnWqpJAgkLKkv3d496bA77qDMAhxZDjNHqE3um7ppw1yuzYkGX8chk9sPmkfDvoU7",
  "key44": "2bbPe7oZgiN2f4GpKSdVqemrtP4cLHiDcBVFpYNvEVnsnuRdWy4KEmq1oMrtWUrtQsGTvhsmEvp5wiizJQ1yZBKi",
  "key45": "3teDRXCnqUUmtGrebyxDj4E1fHBNfvGdeStPPxJxKKRHEPwGRTT519UZe2cZQ49eXHh1F27TriswKfmQ9AFGJmo2",
  "key46": "3T5kDkrZB9NhLPW2pFxpFE82Rt8QLssiHhBJRzmGbjfrYpoN5UckgAsFWNP5Va1N83XJNQnBWQ8s5ETL3LZanSbo",
  "key47": "21ZhAv18cms47iChkFHS9ybTRJp6d5b6S8MyHXu94MLuNinFoXejMbCG1bBX4kQfXpynB2xVE8oVwUa22d9znsDy"
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
