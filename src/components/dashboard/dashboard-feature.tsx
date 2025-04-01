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
    "RGhCzG6SCuKdeQCDcyxoUiPaABp9C5FebUk3DW9D5pbSDbi9xkYBJcUgzd1bL6yjszGfjeBpRghSNuJpHxvHjS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxRtrxEYP2QTeKgWMj5msygwi5qKddQGDsHX8SoDPAE5mCkhj3bkhLwr4cYJ4TuGZXuSefABNSDK7rmRQRSdH2e",
  "key1": "5QYyUrW8mF2ZYP6RFsejFbjxpH7ViJiNf7xJo7oxQhkRBUv744nqVaDtWfsDRpcPAXK3Ph9vXfpRP3HumVTnVVLV",
  "key2": "WYhEWz88Cd8q8k6yCBmaYW564tidm4auU1Jn8tWqsKo4eST97CZKVAvdihGn9EYPfP7JGrv1ERYXUxTBBwFSxuU",
  "key3": "5hCHzCJuHBJzn6Lommcz1LyxB3mdrU9LyWSjjfN75f2bYKbpwPoBfFub3L6xACYWKSs3Y1Xhd3xhBCRL3KfeYpAs",
  "key4": "4w7FYX8FtWQ2EheYt9XsbD6Ruq1AdbKMFVqgSEW9iYADXQ8SkmiMamV7b94XMK2NTPfgDd4XYoawLJszh8EoBriN",
  "key5": "4Qwcmj9Pb6UaWm3Pe6zjey3s1tcCpnxmtZd4tyEJua9322sHCknpDwYqyyCsnjtLkwcadHSyvC7yy6isxNo9SdN",
  "key6": "2FpSjyrdbjrLLpVg9GVhnYnSDiL6VmqJ4gSFzyspnGXZiriizcb3bDZaxhXGRwkmaSMgprmQYwjc1oRfGbQqJ48f",
  "key7": "29NrURdoyGSgvTX1SxDuZfeSBbPY6VuHktPjh2J4Pck27K1tYiivt18FwiTwxRDbNgcV1jWxdwZCnP2CpshjR7WM",
  "key8": "3o6AgGz2qZiHxEbdGL421mVKg9vo62t1iRfQ7jMziSmFRtRm3dM7fdJCWWfw8Hc2LfCR3ysMFPLnonLKX14eB6aD",
  "key9": "wyBZ9p5RKiV1cjorYQsdACbhQ7dVmBsLqCJ2JjDYFR4mR5x1aRmQnDVi19WbugYiTjsTuzFF9m61irm49UzxafB",
  "key10": "48BJfVsHWHMFC4tZXkTPMj2h21CWWtAN1dH2gEGFvNVX73aHJrYLQ8gv4aaavUgaaQvnKT1C2s2WxEM7BMHZ61xg",
  "key11": "2xwa81RD7ZFjd9nXMDk6KrENZifPPgUiQAiuyKi8ou5u36CDzgqbvm5K3zokTJSoqy6QbpZ9D2X3mEEn3SDHa4Bm",
  "key12": "4TmejRW5Ar1bv8KTxs61xouDLkqhXs63Qfu7eF97aj5y9bVUyidwHkRNaZfp7VZ8kKAnvAteicw2AqwsWnZouxoX",
  "key13": "3Hywvp6R68VdwbPPyG2z7tmyFRDVh7Cxq5XX1G7LMqnWcF4vQmXtfBip5co1VYr7P5mit3pmd2VuzcM14rQ6riCe",
  "key14": "3TWwknN2K6VfdXi7zLXKqBufKjbSbLLZpGwEjpYBUFBk2ScHQmZgvFKSj8jv3caYRT1t29saphPymRy5w9yZzqUw",
  "key15": "pkeWHgLYGQ4ePZMT9V1HFsM3Xg2mj2GgBAACZZ8EEVYjnqDChAwSSr3CwELKZ39XHRWhXZy4uDX21W5RUR81FEt",
  "key16": "61eMdyUUcsSCa363xkXiqF2u8AMRduNo4QonnLum9c4P6VuhBwBUmbAvcZyCKKmc8Uh69V6diZHEMmYHV3KuywR2",
  "key17": "6mmT8shkSMsN8uj9mriY7C5JfkJ36nutQrDpXnSy9XvSpaRKCPNWC4na7M4xWxYFki9X6JJfmmBGjaV56158KnS",
  "key18": "kqPER3d2NSXLCYwLerbeX2SRFddnQ7qC1Yer2zyGDX1hvTcc7N5L6mhgBwf2L1gbN9vfp9utyjEiVuxrcsoXuoX",
  "key19": "5syN6GF8MMyTj1eUVpADy5fpethNChZD5AQMDZrJtGtP7YcuE5siNToQHU5HK393GAbeaFfejax1cKk5W3KGgCXx",
  "key20": "2X2i5pSdsL2mNMdyGV5bs3CmpQ3HLboE1kcTv41fghA589UcdM4cEavqcWbdWWAFJzXcQdJictY9EAtPCrkd8ZJu",
  "key21": "54EKjjd8tzdUhvu2GxoX2Sm93bGriQE4NLnRrGrVrZQ7JR9uksp6u7Pf4QtgdbqBocuLRqXQmmVAfsFdi3mt45gj",
  "key22": "3cQNFkaPmzEiV9YSRskom7tX4JPyZT3WiKKuMRdvXV26Wb1sTvmypj4AvZU7rE84Hb23mn1W6Vo8DYyVwYojP1Q1",
  "key23": "3nnPc4XftDkGhbDTAErzHCf1QasZyxxGGq9Co1tEkSbD9tDVDu2ZfhjjMgDkGyiVETRkr129NCdQxEJQJB25DvM7",
  "key24": "EeGUGXVN3xvBkasnRbZ1TkYA7Dnzutp8rtfcZavvizNEA4bwVPGQVyXKikDf7AJUukBxR2fAzhPCa7PQ8DmYLo6",
  "key25": "43xTALXBt6HpXTH1CywoQkMGGVkj3erq2uDVbfa8HPA8Sho2E6ru1EHKm9x87TJ8nBGinF4CNyC7XjiMKeUifSkU",
  "key26": "43xyHB6699H8ELncmRrpoc7auPuUszhxXddWXrBisqFWpM4k4ybk5yhnUdbyG2z5GCfh5evEzGs6DPJeqZ9auE5f",
  "key27": "2sQUhEbntAQ9M8kZ6rfpVQbwHUHLNE6z9eTuAMe9WJhxkjJiTaaGpgR1NheUGuAY7FnazkQVjNaQYLhvQ7k244Gs",
  "key28": "5LFzoV8hXKUVvNM1thbNQBpXbrTFyBnPvjT7oJfBC79prgTbbUULwcQ1PuAQ8vgPgADTMRHbBvywgR5JHqkQm85i",
  "key29": "3r2UThFqKemPtZzJCbcV6P2SmYt6LqXvu7wEExFufUwzztN6RD68sLm21RnyvoTWHh4mkNB3UePUEWbzBT3KoFfU",
  "key30": "4wGnzLPud7XkeizDafaAExwoyeoi3pANbxuhtnfGRswwZCUfrSEyKvMTi7SshnH2yxgMJvSYUdSCvEiZi9rcTX6B",
  "key31": "5Djupp1iwgGPjTWiEFAKux18vo6Lj4chGbixMZjTh2DyKSrnzpK5CKbKazJErYwTNWz9EnruPSjmUQQgzhy3sAkZ",
  "key32": "wVWQB2VwLC32HTvp8zc72zdn6P5DezS4CdUtSK96ypjM6uFYMuWXzn3nxrf4xBwaJJh526vspdtLsMN6DcjD2Rx",
  "key33": "3ckbc85ffrZtYhJTK2ahMfgNUjF3BWHvf8TnfBfxZGPU9StXiZmDP2x1BiKG7wc7MGCWo2xGyTXLdKaTdE1YZ9gz",
  "key34": "5Cn93BF1TYXJefG2KdT8GU46u8WodSh4uYPo7FYMK2ZA4tCEpZgeRhnE9Mf94gpEAqNPdLd2eUmBmSs7AoY2dGxW",
  "key35": "yKdUPaG5W2WBo4DMzQGJB1zNYFbcU85NP1zcrkp9hgSzLaWNxRa1ePnVoej3PeMH5oekfwGWw8CbFdQYLqHdhHn",
  "key36": "1XrXsajb5dVMpUH7t74tCRsg5577gDZMbT3rmS5gSfbCwusAK2M6MKx3y4ahJsVJvn6XC2kGYfGQRtK4QmBgtss",
  "key37": "4QXkF8K6JfhXU5YBGDi8zJ8N273sDx1JZzTRVoLi64QLGSE2ewkWQ5zBTqTAd6u7ZPtjxzms7zU2mT4nYDog3FJv",
  "key38": "3CK8wMFjXRxoKN2ytoC4TUmsGceLQWuwpEp4BwbcEbETzutHRVDeahNLxGERAacejcazVQPMbrrMyo6xTsWVTd1J",
  "key39": "2XA4J5Egs3EfGjddVyNkNng1AFpXPDzr5wkQfMt9UyMB1Z14vVod6wp24mdwVXJXBfd2FpE5Adfa7ecdi4ZeDhef",
  "key40": "aXUygUqtf95jTVUoRVafLAGSJG8GTKsYccYcUBM7Piedzda3WYEEL9WuX3ZVzaGwqJzVeW282Ct6oHf12iJTLNH",
  "key41": "A53ZjVHricNE7xfUQKSrHmTfdCZiU8DmFAVDHdcHs9c3zMdzoW64JQFmgxhGynRi4BA3iHpy6eQEWUoibYuR8D4",
  "key42": "5oWkwtsks3iVqQSqHQgmJHzgAr9D1wxmnnMqckVaqcKx2wpprJzmcgDeMU8PytXnZTEKUt8ebKcjUHKqcJni5gHV",
  "key43": "4yBf4LzTQ64CJzbWJ8bhkcWg4JzucvgEsLwSBdog35KHCh9zKxfwRSKxRhbcmekj9bFT8wNAPiLpiQUqFepv2kUX",
  "key44": "2AadQtbYHbLHpVSfntDSf9GWfEQ4pxvKBryVhUsq8HyCkML7DQ73LqcEXse7FbSSgXbmsYj4C1oHBRCzNWiBjT9d",
  "key45": "poszRDQvHVCekuFtePNGab5LfFkAWd6cQfoyqK7G1B8YNQrdoJydXo3sCMLRUGosLwr7yvYwcCLjto3wLt5yewq",
  "key46": "e2omFPrdS8phvBUor42LWRwNgFeFrbpFFqVa9i1cyYJMQHdHmVNSECd3tEZd5wBuGBwqwRvjzRpA4Jf2Yhbu5Ys",
  "key47": "3MqDaiLEUtwaLRpqySLKSixvMKweMGDpuEVjAHb6Gxcphn52giAjyL5YwQhWJ7VtBm6h61fyadKr83Np7XsrYttM",
  "key48": "36g52nzJ9T6PjenFw9nRHE8gNNijRkgp94dXbunzc1JT4B97xDdVYg6mXBs7ePpFuagHdewjjyBVK4UrqgC7ibS"
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
