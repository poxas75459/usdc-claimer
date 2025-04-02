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
    "hGtgeE4CgiBykaRYKksdBve2o53EXL9bjVrxXqFhJXEUTZzCqLrhaw38VFLiDzVr8XqJudiRerwyFdh7h8hP7zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ru3aMrs15W6SyBmQDbLApQA1JGfKv9SsC9ivAS2vLSUUKFwrBNV9aHYNFYsozbtFX7GpDGUuRUzbRh5cm1uyuH9",
  "key1": "3vB5EhFoee7VZpLvqJEKQJdH7tKJwhkCFcq3jXLPdiarGmheTD3W7Xu6qdSnYEo62r4yqZpQ1YZGUu44HfuNpTgX",
  "key2": "2Y3phX7zh68P1S8FysTPPgPb64zKRqH8HmJbnjijigqbPQL6v7Cyo4VmoEycqdJbsRdAGUMCRdhrp9EwLxPUDvqE",
  "key3": "4bCfiDMTqJF4DL3MSm9t14eLt8iodGbxAufTXAVsnPjrrGSy9FDd8pzqY5TnypqKvm8EAtBy2ekc2SKTRzA5Vr1k",
  "key4": "3Ht6bsCVrVhfEXy6LFKrTBLUtkAHKRvcN3h29oQersAVHF5wTvPp77h6zSASe18aYDp3k7BiSiV8c3JRFQYhGPnf",
  "key5": "2FGgYa94MxxvgipkHox8e1pqAk5L8CR94TjTUB2Gh3thktDusKsPNbpghTCmtbVmjg9mPkLTdgaHSW5G3ZEhK4uc",
  "key6": "5a6eHfbkMGTLZTjNhsMnV9TajzoiHuBdtKqgYF7cif8Z1XdrGUTE2QMZ5gioW59MZeNmd4eqQ3JYUuaxzf1MUZAa",
  "key7": "5rnrFM9DM8kEwawhELiWWnAyroQHAAAyhV2w4AoXkqcc8enAB4gNBeg2qVxoU9ibSrQTd49Wbxw4HsyA2QoVwdJp",
  "key8": "2D4r3iJesnAHwtLENq5tsj11R3M36UVi2dr1QDgP331Rgpztitph8ejosNMKm28GFLd6R9pNuLQmfdhru1Usik75",
  "key9": "3ExoARN4hGEwcDDKkXmTfP6fRJuRiMNPMxBF9BxSNBgRy7227jQQVTzieBrd8KyZKcPF9YfPqK1ZWrTrpYQnAJ5a",
  "key10": "28sQJuFGrLxX5oRKC76HYeiHXwCNpGRo2nYGaxiMzfTozLdjYvwfU3WgvVk1q839J4pfZBM5XEPgwzG4ADL2fgKN",
  "key11": "4zRpv8GqwVri4hyEr3NNHkkXW2vdwYmxbXp2yzGBnj6dkmrAUTEpxrHHMv33QMVLfaguYsJTmLf6v42t3iyVhRR1",
  "key12": "3gL3gVGdBLR6xUTYdchwdgmX6NYUrdFiKjaKQyE3L8UsRN6wSte2UhZDVJJTUJmJ7ubC6W3TBK5N8ENq1rXNMAFy",
  "key13": "4cn2f6FBhnCsaGxUQGcYEU3hc9Ku9TwW9T8LxpuFBf3tkS2NTnWLYMnhpHDyo9A1WUBorJWjwdY9jm68SoxUj4dx",
  "key14": "2Fi4g31REh6jJ7eRrAeSHMaNB2k2oBfWivCyamWvSn2TeFitb689FWBRQDTvryzgWMFxLHfqKHHUuZZSPJi97UmE",
  "key15": "5PW8TqCgvGkcm4csLjnstSojBqcrKBHFh193Dco6Txoewv7SzYwvGjp8tKV23MqwSbx8R97b5sCuZ2wby6Ec4ygS",
  "key16": "4ADC6A14LRiRgKcZGCQwHoKLpUwq7VcaPXZrcycGiX3a3wLJjyAUPrpxwDDwXUEujgWBoKdPbLBRgA4SR26iWVnP",
  "key17": "EpL65Rpoyrnc2DcRLDrCGUBqKonp5eBJDiPreJTNK2exhTk2rRa4os87MHPaHYF5AZNLR7SwQ4fuKEnDQ1khAWt",
  "key18": "5RgKvShSgSHVG7uufyp6pbYJimoaBRf1BvfRb36XzPrGbLMZdxF1etGaNX1u316JE5tA2bAy977zCsrMqmAEZ39Q",
  "key19": "4xwiEWTQi1ALqQkMH8RUYNyTeVuVRrKCbyWs5EgSRkpUP8N871fwkabPzRkpLasWe8rTPW7saYje9FzYSaSVu3Mh",
  "key20": "uvPMcGVK5MZUXFV9VW3SHE2zVVNAX9qPVd6ZDD5mBArZvir3W8WJoZRmwsMT8VsveVxXGtrka1knD4TPv2NZ1g6",
  "key21": "WnmAvEx6FLRixQHDpvQNwWML2KFGWtWAYLQ45apRnc7W7VX4EmNfgjahoadcAgvfQ86hH1r3Z68CRUa8AsQoQXM",
  "key22": "3wAJKY9gNFdxNT455GwphTArMV85u1Ez9AqYWsxH36h7GebBdeiLZEmEYE8wbeDQA18dfYAYMRHeV7aKcPwqzykn",
  "key23": "5TGeYCFKCtXZiU7ywzMQtvRGduPP6iX5QnshoT38Du2d3mdhYhkAj93a2mvKjYHVZ5CaTHJAMD8e2tXdJ3yt18E7",
  "key24": "iJqmFxtQVEQ2Qz2Z3Ai9g2Gfx4m3orknQGyvHR8u5v7bzdixVmxvwbCoYzNHjrdmARTHUNTKXjL3mZVmAJrMvR4",
  "key25": "67HhFw4qFuTNsKThP3MzVZm5fAvFFN2Zi16SVyGKjNfG9FynUw3yS8cBGzNWJCMkL8VS2TcewYEiVu5Fhnj5qzYQ",
  "key26": "3mLFWa4BMzyxbc7T7GKD7gJhQaQ2rb7fjXCPg1WDeZYtYMK3P9sF7uLQbDEFNqB2qPtCTmknCZNzxW6XHYxiLp2H",
  "key27": "4RTbSDVZq4mZizNNMM3MwqWcL2RfisjbYbubYxTMMmUUCFSqSeUqzjQ9xsc7QQKpFAbbPaswTPQ4Sbwmnafy12Z1",
  "key28": "a7GYtHDUWq3tECoFVW8Gzs5neodo99fqDGnsoCZHYCZs7Rzd9dUtbxT3moQYCMn4vaoHanAqMDQvSttt3vELVrE",
  "key29": "5k5TcDKgXZpqhGLsLAMsTfJ7aZDiA85xqwzr9Uk1ZpN8fMEMev8P4XpMUqjVvqmN6xzNjwG2u2TYY1cMUCBn7TY2",
  "key30": "2dKQZNREKwKgV5ENsGWTRb1LKe5SatnEWAiAQLV4Jai9SPi4SGQPYeaF11KdX8koWCGjaViDyp2Tb1A1Df33hU5x",
  "key31": "5VWf1w8WdPGjLzZX82qMK6pyuJScWWk4WKjnuFoDzuiChMyViM1dADbn8z1bgZ7jNkcAL87LmRDRhEhrZXuokah4",
  "key32": "2b1TBaMa9gBF4C9LZ48nBreqaBqzXqWU2FWRj68mmBqGEm6L4HzMurBedCF29xx4TXbv3wAUCksHbP4tJnizSFs6",
  "key33": "sTAFNmMtF5iKWp9Ee7wX6WuGC94QfaTQSVUHSj5orU1mRKbuMRjgQdksQbvYTWVHpJTKGoQek5z3RVeKdpKjmhW",
  "key34": "4QUUb2N24WXrHFAXXSiDTazMtDhkTRWPhJUqQAUQRvt3F86ZqWmfAr89vGZmXyhmzqPicxMVy1GRViWvX3W2Niyd",
  "key35": "256GDW9mTEmVaM9LP6vhegYKNofonH7pynxHGD1opzJSdBGN6bTzZzJuFqarqVZjHB41w9WFqVL8Qn6Hn1HHogdU",
  "key36": "2vpA3os5ARRhUKJjqXUVdLgXbaV2LMtLCHRJGZhJsSiAXcrZByLCPgWn3mw111tkP7XRtcrCjUDuaa6QW8j8Kkzb"
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
