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
    "5Jg1Zag7uM2c4nWh3hKTtSi76hRfHE3tEqSn3GWCzbdwDjyfmAvu6h3psFykmoh3U9dmSc8C9FxjRUoQU34PthX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNw4Cf2o6HfCrQEX9oKumHWPUJfhTguTnw1X3t14JUV7AqseBQBRgJMu45JLcRy469s2bxdugKMfEQcu4sDSeuh",
  "key1": "4uuEyaZLybBrvNuX5ruvwu9PkxcQGdmmT1E6EPdzwpbQsSqqFbdHRZWREVgF5LouAxFqSskHJfULv2nJSxfbLsFS",
  "key2": "TyuzMCm9TPW1LVkPvN8SeeLcunWJM1yoEicpWNudLG2T83gpTNvK7V3oH13EYZeK3W2XK9zzCkwLCdf7kjQEJNc",
  "key3": "2URw4cUU33JZJkr5aUEMHca36v6r4FS9bxuyN5mRS74Qzh954NkCc9TYMCZL4DkpwSutMejdWu3RwQwmfADLrXRg",
  "key4": "3YRw2EttCmSp7WsoqHsTVB9NfkFnGZkhVrdcSdC1huZtPPnUF9VH5fLVS8dJDGYuXTCpeTYnmHeVUi23JbtDAi8Y",
  "key5": "43M1hsrdXNr7JL6LHdep9eWTEYJDoCNfjvGaA3oXaghTxaqsWD61FyLgoNDUHtAH7JyuLwgx8pABsTEVJy6SvXsp",
  "key6": "8BJ6csThcWxBTJ4y8Dbun9Hbv2L8VfCqRZP6HANDyXr7riV9p4VGUpGonHMJB7TVdmKJPXKGE3UyfYYGBBEoCUR",
  "key7": "EpEpCt63Fib26sB7EUcBEGeg8sxbB2CmjF4LUEDgz5T17dqCXHK8CQcezFNvGgbijqFB7F4oJECfLHdrkwRYsGv",
  "key8": "xQe6XbBEsrsGF4fv4s1n1ArKMF7fbgGueQzP9KthGDaioBp1z37i3yfx2c452HerD1KgPnZvvnkRs79zJ47YcWS",
  "key9": "HQEmjKR3r97315QavgKFpC9rKSQupHEGEPgTKojdem6yge6gvZ6nX8jEjaHLdpoyLLQwycNKyZ1zZRyZE1LT3bc",
  "key10": "5qpFjQnP89Be5cFKd981g2TKHVM7VhJ3JaT2HrmZbZ2xiKQrch4h3mfADLhEj7hCDCc4yckGPQqYaQVjtD1nibn9",
  "key11": "61HaxkeHW5LYe6479xEqv3zkoPBxprcw8aMnG1UUV9YGKcVziK68spvicAPNkkZGVugqb7avk6Y7VuNzzGexAaQo",
  "key12": "EpdWLMchBPeQLwG3ouGgifvYoiCfCbTGb6BDoRF7WnFqtYSjHQkuF3VPBdKGZRgpgKGr1z6LaBRfyTKJTKnp14c",
  "key13": "okfeKqdtmLsA6TARoMVbSPY3Y3sMr8Z7xyW5rgUQ5Xhxi8HDoGdTWttaX2iRfQwZPHmGC629kx3LUUuAXhfQ3kc",
  "key14": "2YBHcis1XGf2Lwfu9ZdkfQRAE94MnFwiTXx2cY47ZZ6AdLjs85mhdrK3JTc46wwSismxfUUm8cwCoDScBUY2S31t",
  "key15": "5RL3Y2PGSiJLRnQTZKNKduLAd8DQHRHQNTumUP1AZ2s8W3sCbpphX5B8av23x8kcpuyA53yF6ZkcfgPfvsN35yAb",
  "key16": "4YpRJnjq6paoKrqTEV4iV8fk613rXpUjQ25VTcSYB8AQfvWsScDAdnM2g2GAmRx2e16nQMmJKVJ4Db6m6Sdn9Jk8",
  "key17": "JjvVvpVHekWmdhXXFRWnM2Cbe5pw9TXc6qiFf79fBvAgykPiTJr3zzjCfo2sxZq5XcBcTAYSkBnW3vzjigDeBUY",
  "key18": "4VTX6A1VyVGcQnkQ68B9M2dBx3A5XpsM7puMVZbzVgAsX4dYutMK37jj9BTAwZ8C2yFAHeSmv5pNuZwESV4gXhER",
  "key19": "4bgfcnJNm6mQiWdzJRTvKgst3yZbgu9vaopy9dcZfiuzsy4c4Y8S4KqjCzfKX9C5GkMFv8GELPAyV5nhxKuigShA",
  "key20": "4Ch2kKUaXNX6tV3ifrxn4zYV5aUD5gd5A6FxD6oV5RneRcS4rfNEkReoQ3g2SgNQ29fv3Ls1yQ2jX4WeDiVEFM9M",
  "key21": "MDZB7w6x7BjYMy18JvFH7y7vNo9ZtxNwua9bi36jhcmRsacvnya3LTLX37zvdHCQd75F71t8u6LKZyKi2WguZDg",
  "key22": "2yukLgh2bGWbu92YxdH29LKBiULSwtXhrHL4vbS6MB2KfqPzcEwFrAHKJAeEJMGjrXccARSYgwCeQrRYVa6iNdTd",
  "key23": "5wkJFXE5bnUw241gmFcVX8WGhj9HRQeHhqh9QpwGGXREvGHb9zweydZuZP5kNzshoojq8avBNBWfzti1RYRepPYT",
  "key24": "34hhjmuMpMzxgoyAcXniGGhqKrBvhm7r9zJVatpXvugGFCb8CwjCbPM6kVdLxZSzHGaur5mHz6XT7WZKtL8zy8By",
  "key25": "SKpJcdaGPpFSAUYGyVbG1B17xYxDMHsdz69RgyiC3U3QLF2zXdYBAn21tCVFfG2F5TgnQskjQdncgQ1L2hUg2x2",
  "key26": "2MWUtiUE62Yeq1zinCDdN9bgVtM6bPEfrnmxM9mQTsHY2mceETzVoKNL57nh1huwP59GBJNRNULVznNSoRimtLRV",
  "key27": "2iqFsvHfuabjajPhv6sNJJQdxGLUexbY42cY1ARTrSx7aSiTSgeNJe4kpYJdSs8ma9B46Yh6w7psFE29QLYbLUZk",
  "key28": "3GbrWpD2SAKzhoZTUeQzpZkDY1aYmB9bTqjsu5kfbdt2bHYkGEASCnW9biJNLLYc6U6LrqFCQt3XJjVZLZNa8YNZ",
  "key29": "5E8ikNKGXBNpuiMP88KzUwkr7ncN8bXfShGnJ89YNx11BYVKaFzx9j6tX8x7GQccftwdkpeSJFNC3kxVczQp3VLx",
  "key30": "35eCXPLU4thTSQ8doVud7umzm8prC4rBEKkQZd1FdQmTjcunwcc1abjSFrk7cZeJJeQYG7HaX3ShUxAgUrFtaWFW",
  "key31": "5cZLPPCnz2GQpAcQpnxcj4N9DsHRHptBHtRTXUw2HVGGwUz2B8Av1y49ZB8QetfY3zx2t2ecZhzHzbwDrgAL8Fy",
  "key32": "MZyiYLFQ3U52keuGP7PJkyw5ty13X1UhGuSPHhMyM2wLPBFXRHfnn6MDJzSehYmrffT9xiGwdBVor5NnmeQCagV",
  "key33": "5pBCBNywXNTbMuC6h6m6wwJJu97mBFitJeUYGZo1R8aFGH1pXFxD5M6EZpmnw3kLzF9o1H3gf7Y9oqjZqCs7Dp4h",
  "key34": "HZjBC62Da8JpbfuM1pTDC4UBPXYXu7HkeifaQmfdZYFtfbktnkTJNBYxFKcmEZBka7pCQVDpsTTXRN5NFdka79Q",
  "key35": "2eoLxgs4r4i2Yuvi1MwKspeS2AQNSdgYiBoQqpBcFAQDTxX7VMNh8whUqs7YPNvg4XVfGr3wxeTaEk7qFypMHAno",
  "key36": "2r9GadSyk2op5hS8Jx5Vb4nZVTki3oWR8aFXjd8yUQZ8tAzXot1FdaEUG1yT5Qvh3fnt1CNf7apFWQUFYgynUhwj",
  "key37": "4mJwWRNtKaowFnkeDbGsY97etyMDtdUtxNmxSpkraeqbpsnQbt973WdqejqjiesF77HKe8QyuS3bsR1cGi78jQzq",
  "key38": "53tRT1KAhxeN8aSjfHHF38JWmbsoBHzJ9ZxKYQ1TzAem1nS4TYxR6KaSvr2TK2MJy8hjMYWcDttz9RPj4mRzLGSA",
  "key39": "5fd2pdLZ7Q33AUoBSPfsNr3mwgpXk7vRstqpCME9hBRx7RJjaqZb6aRxD3HN8pgpK54FUmK96PWCyTXpwPrGKZks"
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
