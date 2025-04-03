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
    "2sH7fmRsp5HMGec3JRgrp9gtG5qK5K7sgxFLfmqUWkjkRsmsfaKX38BzFK69a8Ve8xvhR3p9dZ6XmkrqnqVy2HND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wQhrsbsiXCkhv7PTZv8nDRF5vjqT154H6zbWURzUnCaBtSe9J7khcb6mxdXfPRxxXSN142J6frtbgmoWv8KCF4",
  "key1": "2vt82rRRkQRuK7ce62g5yRDtVziwB62m1U1PDjXjuY1PxgsqFJLcLL3W1MU9EGx4zioGB65SNbg44xkuzf5c7o2S",
  "key2": "5Ab9fjfTuMc4zGLAhwHWoKE2zC9cBueu1XN1vLJS86339xeFjqGewdNituEGQe6sLs4Z6TFNwWugyn1EQeVSXqrL",
  "key3": "25iE4wnxydaA3GxScf6PwnbgYa2azwt4igbVh8NShg27qZ9KZJ6SHzW5sepFBCgYUMAjNVt6mXQNNymWcZ8rdDuw",
  "key4": "5T6FVyjsJiUY6vqpygAj4MWvxVLPxCvGpkfKpcEpfxnU6H9w7tVxJhwaXQ3ZZQ83J1khh6bPUgAqujhYU3ChTrgW",
  "key5": "3HDts3WTb4cWR4gqtLvDhZHbwnf7Air8kKJBk3AWsLibmMHbrgbjsjQHD5f9uovQKKo79RPi32rwQQQr2qiimqQu",
  "key6": "3sJ12eV9PkdQz8mSrRjEbvfGDTqaN93zfTjDdP2iCwCbiPHne9o3XYZB9eSE788uwr6kBKThEfZeVYTmknphPtUj",
  "key7": "RkbY1MwfT4REkMgVh14bNBbEmxyY4tWxDcN2eLj1GhW34TZiZqZttmU9p3di4C9vaGoWtHNqdVqU8XzYBB8hMU7",
  "key8": "4i6WrWnAX5TA3xzkaz5XCKGxH9iGsNwGPTHzrQMiEmVeUTa5FLCVtt72awHyy87hff2GexPAn4F5p17esZpSf7ix",
  "key9": "5U3CekZN61UqAAxbWGAHsf6UTkeH8FnZQPFsbGL9BUofm79izLtXgYbDd9XZvsWrsRNuE5Qe9pFkYUma7t7K2XGe",
  "key10": "27UZiG94UgZYQSu8b15AHk8Jk3fzFEwXNsnE7gp1ARtt36dzPb6eWW8KfKLFTcsRPBEbx2RXQdxxrxpjjXdJf6nx",
  "key11": "3eNcXtckiPwnqKFHvsRWBy8swB4A4EGJ9mVpiJciEoFkdQTD8H4iHEAmEEFP33aqqjP6RyytgAHBSMab4PpFhpxS",
  "key12": "65nfBpUV3iyBT1EekGpykTe78QHTTFqBBG9rsCtx1fXzoiJ4NeGfZT62wyAcT3HXy1nqukpYAhBYYBsMotUtGRtb",
  "key13": "5C85A9YkGkTozxYyiHZBuSeWZUfQmePCyjoTxgYbHgCK5wX36cA78ryxup4cun8i1VYxay3CJvg7vRxLjmYLLu7v",
  "key14": "6YdWV34D5kmCAzVb1NRPsvesQsDnjf4CHj8MrC41bvtWt8WUfzrd6qU6zDx6RojuahvJtCAY8GXj1DJRYYoe87A",
  "key15": "2XduRm1sfymDBwJfK4h59i1gvHvCv6N6cDXCE5rQgnWEsZ3TdkD3eUvNNasfPFCxNk5iiPGcrh9akHTCaHke7xUM",
  "key16": "35qcpzfZrEDxcW1Uf5L1H8RH2rDBU1nKLDE2A17S2ksDeTzqkJZExpfFdPevvV85932tHaDxTGv6pS44CFRUM92M",
  "key17": "DCSa5e7rbUaYZbFpVqDcbEjmJfYT4wohHNFBaQ5iTiujmsvhtNChzNXH5Kyt7Au6RAj3Ds6Ui4PVqdhQcAY5NXf",
  "key18": "4iXsrAFnXp1iJAUSFhrWpVNmZNm6KLYkYrZeg7LRcgLwkdkHA2Zge41PQWYVQFaUQ9g3Pa8s8xEyyUi3ejT4bcTy",
  "key19": "4MHqafEmZ3ukrqwuZ4JJKzfSDmVaoC3rW9rFFfcno39oueCefXXjqCSSmDSNX1y6eq9fosSJKTfb9y5vwff4MQwA",
  "key20": "Jov6gCf9e4XWdwpcNaUbmirTVH4UrCX1HzADGHhnU9L2fDkpnSKAehXLEVzhhiqhzeTrFvwJzGDPyX7Nx3wHAgt",
  "key21": "8FmFbAaPRg4XeoJsrMpXdhztzxpQLs6otvThgZwAxeAYYEmVD877R8gutsKx6efw6AWw6pTDYyYpTFbz7RfGv4v",
  "key22": "3PBz1bPzHZbeQRyjd5WGRPeB6cvXDM1xJEKG6TxLe6UJ72MFz7WxRpkoKbb6fcK1NKu292QbuD2zuJa4xjiHuZvg",
  "key23": "UpkKcLY5otiFuKSk73b8ifWoQgnzx75y1MYYRh9ewM1aQUmdZuieeSSgiRznrGZMyKga59jw9j3XtUmG1tDPzM3",
  "key24": "3wiZ9rs4NhjXLrWK5G1uKrUS8aiSYJL1fg8HbWphvvh85kaczNLGVHVzMjaUyuCGiia3wTJoWKbtuxibuJAzaY76",
  "key25": "3NFWaJy8j8S9HjsP4SwthymnFq1Rdhws6cyTDcixAAqFqnm54VKuXsW5tP1ZwzShscYYgRun6gxKfQuh1CZjarXW",
  "key26": "2is1czh5va2nCfaqbEYusJqRLhk1LUhgTKG8d4GzoUUMeaqQ1Bv31w42JwLpYAqa6EzcuVDGMCzXaq3dnYjCVWAW",
  "key27": "oG2uYjjAV6x2gN8YFBXTvkXvZ2fNQRLtn6nmhUoHqCwEbNZjeL13DoD1H2XTPxesnopGEeooFq54xKjLnHecXsf",
  "key28": "2CwqHvqM1B1XsJKph3YqCTXVXHK4KJde6ZJ7NQCVpZRXA6Sinwp7ZFbr1KH86rkwMffYu37fb29ZsNAeHGC5xpPf",
  "key29": "wzA3aZR1DAMeEuYn4ym2DfvV74UkAjenPr5xMrniH8ReSEzLUj3RfsoAxpeJMKs5qp1kyaQK5UaQUUhKPkmSCVC",
  "key30": "5PDPa2AYcJy4Faj2Nnj5tbDN9b3yX2M6XnQMPrtUw25Wg2NM1Ng4pz4rz2ZPyh4QUR4JDiLcBoSxpaMZTk98uKm6",
  "key31": "fz7SPVjmomWEFDTnehZDRAt99c5knJzv7yPE47xVgNMnj22TZbs1Qa6aFFNiL1Fj1fmcFRpGZiSGKhxBcFQguXZ",
  "key32": "2ummpuEX3gaKRgF2n9zPmcZijyF2WkHgug5WD2HLwXutA45q4MYfhMD6q68THmbfCMYBXmTXUYxMb6GYEYqasJ3H",
  "key33": "ZcZ9uDUBmDaKDmbXzLnmGK8S1bgtEHyFTPYgWMbGtdBB78UiGDBaGUDhsTQU2tyNS5oMHHDKC8c6Z8DmUDQRdTA",
  "key34": "2pKCHswdMEouSCQiS1EgxjuQm8h5ascG6q7Wm95sY3qtTuYRRXYMTfqXdnqJZpbK6cm4dau4hQFBsGFvQa9sv7Uk",
  "key35": "5AYc4TJaXS5TWScKEzN3HcakqhgnQ8jBxyMWBTeue6qnAwHYnTwbxggx4ZJ1BesjsPDLP7mHM9VdN5cJxCktHuBn",
  "key36": "29faFfWoJgkWqc35PP9FFruXBQH8TKTNFnhiUsJTyt1yAs8KGvDkqqPyVoivwzeNUVf2jv2WQV8BytDsrdAuCzwy",
  "key37": "5xC7BKEsB12i7mx7cE7MMPMiEQZUDu8f7j6jLo3Sd2SZgcdkjVPFHTeoCjXmFm8NQo7Bj7FEwY88wjr4uAWngTpA",
  "key38": "285yViEoo7ooRYEVRwygzDK7cuVxh7Ws462LNtvTqhko48bNKe6rCQju8JX6P1L93bqqJrh3ebrRyW8qDj9Nqfit",
  "key39": "2m4hgCZFnKwdfv7M92BqywxzPYmcUT9nmSXk8Ssu5LtWanZZp47DjwCB7TA3CLemomrPkamRAZjRPJnjQQy2ZFLW"
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
