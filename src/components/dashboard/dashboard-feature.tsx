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
    "5VHMeRzYSFLVegE1f6LEZTGNGMDVexkFwfYEViuGrkppS9qNkV8dkseyr95rkhncHr9owX86c5JcXPU6pLwcNW4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iLPrsxLv8gmRq9Dsri5LqZaxkrZjC7jZGUVfB4TrVCmWxnoD4d1tbDLvtzycLTojbAH6FhWJvr1QaWThL6GAgSe",
  "key1": "5TvvpBhrsVi2sMg5MFojW3t8hkmqxEqSDgKAChjXSWt8zdeoFg2845VmyzxjHbE1ToXncVm1eoJytX61pPwmRky7",
  "key2": "5A64KEwLhc66cXNZqxCd25kRJSxcE8VAmsjYcR6JXWTdgpdjG81fvFwGWD24XVK43UCAJ6UGctgNn4Mm2Ued8WMd",
  "key3": "2CpGs3DXijm6YyPepa2mxSinfXLMeDbXhqyt8swvwXPkJ7CoFZQgRHYdjdtFkZCePWTWCZXtbJ3NjDP8qTiYdcZ2",
  "key4": "4sRzKtjcmEe5w7unF6pZd1px35ySWTpgX1aiHLSyoXJ8nDSHxVtRfPtGHWPHaS4ZmrG6xe1AEY458Etr88Jxdrw3",
  "key5": "5qXVcf7pazTPBJ1u4hLb5GQSLqYN3iUTZ7CJWdX7MDRnzFtkUYJqFexvBk2Qd4qwapbtrNG1PDfmKSRVxn5g5zau",
  "key6": "2nAxjP6fBN31t1ZhBcHDJyij2GvJBexWqzD42euCDUidUatVRaWUEYGaGw3ZBYVCsZa2rRqPm4LrKJK3AgvZr1Hc",
  "key7": "J8URTbMT6d9bxaeawRhiSmeibG3EVgfey8fYtFQLUFNxuwPhBC7vb2RNNEvNzYaYFGHD9t7aFERYS7kbxmC92mm",
  "key8": "5PZyaPaUa6iJsoyFXDJc8V8koGmS4VYs4Lbey7Q15fJtybBP9yQpVpVP6X1vUfgBtnYwmPaJ3yQSTvKcBdh3S5hh",
  "key9": "5w9PtgFfssgs1nwB2TDnAdwdU2TYuWjSNEFFNoKXKH81StAhGhTEJkhcEwVPsqogwrfBRJFv9noSnnBCHt6FCAfo",
  "key10": "N13oPoZVYkuHC17bA45BDD9vh4K7XUJrt54TRw3kFrr2QrW5cBSVYi7FXHzFgxF8jfwMPrFJiJTNJSUS3gdy9RT",
  "key11": "2CXL9AcfX1EgM9oviSLwgFypbiXsrUvQTSAGXtjJQiwTWqDWsBffYBQwrgNZ6j1ZH73hTYqXvqukRwgjFKpJCXsL",
  "key12": "2as36YmVS5BuqCLXZhHeYmRoq28WdFj2jSgDJ5TUPG2TfzaWigBbLZpTfMurfTZLQM3ZMcjHNkA49mbLLPTxPtpy",
  "key13": "5wmP52rmAQRgnagMHu8miAFcLGzoU42AvPJ9a7E4Sw6Po9cqNyio15YpokirJvYDrMWXKDHcNCkvyikaDcbWpLFS",
  "key14": "421YYrWAd3r9J7mxJQUxNv8bffAtdwaSatjg4o1F4TyoJ4zZZTQcaDsc3tJ6vSQ68AAJhe5nHJWyrkkZn6iBgV43",
  "key15": "4QYr5UjPTuncsRg3gpVKqHraHE8Rpdh5q6aj9ChGFYsVK36eNg3Wn5c44sq4LwzsqNUdREnipvG8nrobe2Y57GKg",
  "key16": "4cQebp5FoZqyMVHZgQ2hRprEKFjHKSigGFfwxfpjCnRov8E5SeFeWFnPxghumA9CNxzFPKAWRmRgMSpXVZ4fhF1e",
  "key17": "VMSPC5QZD714NbS2XJMrCXVkyRTWoVG8H7uJuhEpjQHzp861CVCXTQJLbM8BS6Vjy4QqAgpWxoQxrdAbLgLBf3y",
  "key18": "2HhStwBcEzgsQPG9vgRGK5SGQrxkRVj1wVHasCL3GyfXG2Z9KkzQnEmZXN9rj8Xh68fwsvetzqXiuodFAgs6iHpJ",
  "key19": "3E1VvPQU6V2A6c8V2D8UJHL3qwKSGZMfkigoQ7exgf8mTDtAfBSVwxhybMYZmwWSufFrw9EXShSXoNUQWCL553KC",
  "key20": "3bYTe7AurouaWApvjBv4MaWf9KPBMx2xcUsULr6umd4MMdzKRBRZuFRJWFyMwC1TtqKuKzYKDD4x2ZzsZkZwoF1D",
  "key21": "zKaCkq5hN9Qu2uYzApo1xyUBcv3aaAuJ1Bm2Sa6koidVVACedf1gtqHv4Tse2nV5cwppSKs9C5hVHjXpiQTdu9n",
  "key22": "3m9DdNzi6eyDKeGG8fcvpSkz648wAA9zjhbgv4FYBC7CeEGujXrh2THkMEWJ8uxVzL1CqoC48G4r1agxcn2BPQoq",
  "key23": "2u64NkcGiBQXZfjX58ahYpYzEpze6SFFn4iSPq7kPrpoYAf1EHze5sMwFQuPT1yw6AHn8SibkbfrDukz3YAxrvF6",
  "key24": "2kNCJcxCSEHbu41ZBUmb2NBJdguzQCQHp1kwUggUZouxEX38LuiknwZQaLmSQrPQvM2em87vPCFMXDEvDHjaSD3X",
  "key25": "5cWJLkeoa9qYzPfwPmyU1F871gJtseRrzaaNZvFuE9N75at35kpv1LVbepZ4mncFRKXHTgS2oJXCM25DbYtqULtf",
  "key26": "2UHfcEkzku5p343zJHicPhwD8kJAPeGB3zJsyUZBdGfynrvyf1VtBLj3vyXFo3hwdRr8uRau2xLkdKDM7nWD2Aio",
  "key27": "3u2yV2fS5dLGLHec3CPQzLs4Zxqc9QLWG95sfmVTbMKerYKdV9bF2J2M5XG67UFems5kGXKC68qyG4ocQRdswSyA",
  "key28": "3wFLBVJXVjzuzTVxuowZEHyooJkuwJ7FcE5gkPpLzpGhcBhXAyHRJT7HxcEa21P29rkcD9mEAZPj6oxEhFxtiiTX",
  "key29": "3nmFwiFdjDoRiKcSbgh2Ap6gaLccRyz8KK7dH2n3DtYi8SYZpdY6DJ2iYq3Asy9Ye6XhcrhxQ7Kb7YgMa1buGeH5",
  "key30": "mHWYLyjtWRNRUMbvbnbcncTDtr6HM6LCSrg8HeizhTcA7jz8xXsieetdXah1vYEUsx5hdEpyp9AW1n2Sh9MKL15",
  "key31": "fKN1gM52K4UUd9YZJqeK9eixnAS2r4twUjEZBdjFAptw2284GczyqsS6K97zXuu1kY5rWHi5kzTBqbvhBmXZ1qj",
  "key32": "5asR1usQMv6dkBWQifthfXMDn78qBRCGjXVcqDbFByQ1czU28nSA5ZFCrhnu4haFsD3snbfk7vggtBWwPcvd76w3",
  "key33": "2rwBbWEMVHnGBZeVFXkhFHcqh6H6vcEtnjmTe5zZ2pSd5ced4DKPsEEU32okhQ22FJtLL5VMQvKniuF2RAsxiarr",
  "key34": "3gv2eUUQbNohgFpwcbrnpNyCeA7Ceztc4vcuuo88etpurkz4K8MCUseiMBBRWnskkbkjzXNheFi52ujYehZUhUvB",
  "key35": "3pGkaUGaEaNUvsH15Um8kgptw1gCNdB8GXEmRDVCs3W9NXeCPayvgvBfw1aFxj3h9QokLcjnsd1NWM6mjYCsabmu",
  "key36": "5W3KcRNGck73LWyTdDgXURvjB79jHBbFwY98NSyWuFUjGvKB1RvKF6GYKaZoAnUsjif4sHG7j944bTfASzUSf3Ab",
  "key37": "5duvDaJs7AFCW7ma7irtcBsoM5oMf2nQGyAym6hZmYRbKBD8L9TAeoycmh9wuGnGXLjsacjomwbdPvnCnzeo6DA1",
  "key38": "5auJsmWJDUHSYe8eKtQSwN2zp8AUu6o5y7BUT12Mcky5rMtdeamP2BdUjDsfHu3mzxXFkz3W5R77yUiDsY53ZyDj",
  "key39": "4ts8uPJTHmUqmvf8Tc14EvpYuMQpBmH95x1qEpiDuRdC3xrLnBu5WvDMk2T6P2DfMgaKj79E73WWJ5uxMYjYLDDe",
  "key40": "2kNKSgL5Da144AgFBqEWo9Lr9tQz1Mmk93rZKxebQaMA47J9KkXX7inigKzSb3iavqLATUV5EnjEAKXbkFDxUb7p",
  "key41": "4BKwH9hydZXEk5yfRAiCGvJ7aQWGE6AqW5x22ztpLB9nZtem2isAeB4tjgDRiEyz9jR4xTG9GR4wDgn5d3oTrncg",
  "key42": "nHE5iQCjK42LSAeC2VMfLvzBbTLUDZBsyTwR87TAEj4WGN77NkMyker487HcSCNcnV4EXbcFKTzwjWdGLtXK9Zi",
  "key43": "67AnYwzoiYbj35hL3rB6KVGF5ky8G4MP5iTeBdYBjd3syDvb2FbHvsDKHYLndVBo5JV76e8bnYomeADfHexW5V3V",
  "key44": "3Qb145S2Jsng5Ugeh77SL68suJCHSWvqk9CFMJz43DPRygaS62rh5F2NPJzTU2CQsD9tBe1iLLcqi2YJJc9ckTae"
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
