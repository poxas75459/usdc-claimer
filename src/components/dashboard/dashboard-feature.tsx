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
    "62Y6TzFLPrVdLn48BZcsXnvf3n1wBCyDcj7UfeePKfDmUHY7UhZxjztiqur68iCeG5iuZAF3ESRkSrT68BvbuUor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3AXCxAioFp2b1JdMfkzASjF41Y726Dcf7a7b5zDihdJWEGfMNPksVAGaDqpmVkXD6aAeBgNdMZfBoextLktorb",
  "key1": "26KDERJUt2w78puqunQ7q85tpXXePdjVqnhaXJPXEAF6PA9GwysgfFUHiE9uJEfdrTM3Dhc1kf26NC4X9JayUbqU",
  "key2": "BnAiERdsUu6NpNUt5YAYnD4d1pYS9YBydNuDzYsmbNyH6CWUUdbYimUMHL3WHk3DHRsnwR13StWQqtokQyb3HxM",
  "key3": "42nbKaTKsMANvt3PTbouuxg15DeitCAqzaUbTrg8vqaL8uSPQ1sEcjW3kWbkdTrXBszX2awLoSthtkcMRTroMB7M",
  "key4": "4tc6xzJxsavEcJLx65hVHM9uT59rquQEvGZhFYRN38kj3LNafuh9CM5F6vaGHaQVn951msUBhXeVaHaitMegN5sP",
  "key5": "4i3EJ725rEWVfb4voXmK57RnTNWDDxs4bTngFD5Rj6AJQiTfeRCpcFDTMBREvczJFMvf1mEQrN1kBJcBjjtTTbSk",
  "key6": "41dSbdniYNF58uohiu2DANuHZqVnxjX7LMemdaoriBFtWnhwyEakdcc7nUNs5gtVEUBDgoNfHjnHKfzWrYr45B23",
  "key7": "2WBKTY4HeAp9mzpczpiT3K6kDcSgs3QW2Qt6hKxrodbhbuCi2PNPPmmg4QesQ5ZhHNEKnusQUebqAPWmNkBAaCEu",
  "key8": "3v4y7Twq8f1ZXFTD4vTrkr4qRaW9g2FkmNxswWRKjSDRUeX6pgTuQwACBKWXUxdwBFsW6Y9ePa2WEzgzq9thwjQs",
  "key9": "2D56QRUCsJuho7TtqHznZtfWrLjHwE7qT4ZRFm6u69aouNMhMFyAxouoiEGv5dAMYkpborKQotSTgBk2ovVtq8FC",
  "key10": "4ckq2HPYcMWnqdNDao7bNxikW7V8NyqA9twUcVxeguH723s8uyn3hBz1qYrJEaMPM2SBwMYvS413SXJpA6KCsq86",
  "key11": "2gZEPSzRYQP7YoxB7thVTdVhrS2zu6RnX85QCW7mtKVuAqFdoSW4xyB83LLSeRevjHFikrSv29yMhjXmdGeAAZ5T",
  "key12": "49oYZVurVxGTknK1dxnE1zkGHwC9JBNffTcLWXWFpMYN2t9yvMsLWFJSwVLB7Dzcy91tnTAf1fU7rKzXMrgABhq1",
  "key13": "4vruKD3oqdWf1A4uUnPZrwGD7JvzoPP82keVVBbyg4Aw6xP6bhrBmctEDEMXYEJwxijHo4UxHuN15gh314pTRY2i",
  "key14": "3UY9zwvSmaDqDNqtaZtqrZnDSBbPVZVhSSE9nrb3yb1V7qEK52JtJvs4D6mHLb23FQKRnGWakrFzDCKjCFE4EC2c",
  "key15": "23qYzW2ooaE7yndJUTKJk24nMhT8wA3ZstfkUhdRr63TQgppyR5ZP7iGDXPZ8v4CTqLfzQFXopwv1roRYkn4s93Q",
  "key16": "2LsK6BNbuH1bJTEDD6gxNUJkksr5FtqS8LXcgX9BZ2cVb2aEPnqaNz9X8JuTFydCiUUYxbhYJq8gyTqMF9qwJKHf",
  "key17": "3r8xNiHwuejA7dGjXDoFz5eGNvoBCqALbSoqd7MEWQR9aU1bBnuzak7QJ5GR62BhxPxChBu1d1mxCbivt3eWX1W4",
  "key18": "2sW8PuYewJkGLExhCVXPip4VAovBkfNP5XVDmYvGCQzNzzaWqNhLLDUozULXaDj8Hnvbr82nAB2YEt9m3HVUDSz9",
  "key19": "5vU3FxCnHyENkqrpC9SgpshfW3R4SSyQoG5g1QHiPHze71rWdiaDiVMJfAmVrSePKHRtx6TdZMM2hNLVELhBq3jJ",
  "key20": "5SB7QXuTBGWGaLCKQuba68rPgaxpnnhQagpiYu4snHbXKJK7HU7Qa8pVCaR2rqq7GXsgUkDifu1YCge1ZZTtVVVU",
  "key21": "4zUPudxupNY6AWHJ5giJXdXyhLJJZocD97xKLYcrUhMvE1sYbUC6DRUhsmDg3rq7whDJWMQabTdyd2oBR2Swmmnj",
  "key22": "paTtBPUahEbLNH5EVLBKb9Hd9Z6z8hrLd9CYkZZ1gVvS7hZQsQ9gy7V5erfhSfPhUr53LCH4AFaBKGhLL1doS7D",
  "key23": "5Mh4wbTJbs3C4FXV21hpZGUsnb95RmLYQYg88pXk8NMH6ooCW9XAAqRXcm28t64nemDiHg74xatcSd7MdHJEz1az",
  "key24": "3Am5fKY51g9CGpCjDYjwWDuzNJhwJKJTtFgXKeeZeEe57D5hYqiPLnuCQ1uDjk2HcfqHDqN6GjVsxV2jhCYssCbU",
  "key25": "33NTFTzV4oHkW7EbrAMu7vVxhAsrbQrDNzYRWXc69cPTXZpQZdFLXQcfQ99pLyB3SwhAh6FcajBXEP7BEUdg596d",
  "key26": "516SfwACBUxojdbD3iuNYCwGnTBmgZu6s3XFi3Nh4B3C3XQNMATWZLM1Bo81e7SanDuhVw6SxpAT99UFSMZ4Fd9X",
  "key27": "jNNEu2G836jJeSsvevCh2x8MTZVFSizXASMbKjVHWmFXHPhinHg4B1yLCJ7vbZC4ZXx79yRo8H9XnMXp2vfA2t2",
  "key28": "5b4bj9TrnWHzyd7FongXKVeXoxh7Jk28k3vp27Az3EsndA1fmkXXLL6w3MCaSMrvicVJQGxBGWQRiARmaW2PDpzw",
  "key29": "2VoCdW5orvsG8FcTzk3ikt14Ea3m89bSuywjAthRH4oeeSs5aDFYdooWhkLbDjAKATdn9WwUokX568cLUNYPFmNP",
  "key30": "H5po5sPq6sRCSqjkoPY2XFn11JjAFNVLborYM4TSa15C87Pkaon2C1oaS1PoCgzyGfWX8sDVFGcWkVmEoVqNic1",
  "key31": "q9h9QpCugWLFdGU5rPjgBGTLfxDyLKzQyGMiG8QMXvjBb6SkEMXss1gvSp6mcLggVZmGTQdfw6EptYqHrKHboQz",
  "key32": "4cPxLtsb8nu2hnHKEuNuX4e4fH8Br2eDNsHLNJj5RKJfbH3oY4dKtR82w78yfuyPL7kafYvrVHFFvJDwNtEuR3t",
  "key33": "3LRTnjfwKfesNqrCNawi5bGz4pDSXJkP2R9KhidVUkUkCFDyxgphiFQYJQaboQzMqnysDQRmabej2273m4eb9CTF",
  "key34": "ZkY6ZmJ4e6k4Gf9Uvk4o3ShqAT3BTBuDQinLpbcwCJW32g5MDgxYmZLAEWEK6Axmg1iZ53dDxQK1E19wNCpxd6p",
  "key35": "5L1kymcBJ2iE5pZtPrP29JT84LHRLT8LHERcwDd3tjTzXKBLy7vRXWihsM5qZQiCuUNhzwus7j8hYJRJLwW99ic7",
  "key36": "3WPeLRBdyVZokyrhjpmjXZrYoHrY4TCFW2VVrwqmBG6apkqq6UfiJyT6n8pzXXSH2rUG6vPijFTakyBpZUiwnbfa",
  "key37": "4PoTDz6h2PzmN2r899UCj6Trc9biKrjTr9W9hMVE2JaZypabyv7FMeVtNcJ2DeD94uxpaP1ZEK4R6t2MVwaYRZRt",
  "key38": "3Hy4grXLSmH7FEgMjdis1bC1Bpwgxv7krXXABWdHNeKvvZt5tuwmVmFg6FzXCFeZZYtc84KMfiys9i13p57VxPvi",
  "key39": "43GCPrTaKmk1WVZFg2oRgELiyJUv5b7fyuk5nMLpG3qBbCa2eThaSmmtRZZCv7GfXaD7KQtn3cjrEtyshK2SrDxB",
  "key40": "2L8rjHGqS5P5TFtGx7DqQt8i2JE9JN7WuqUJTiKRSbBjGM1uYXNrdKAbnwKwprdDXeJcBeDCqwgzG4dsS9hRikdW",
  "key41": "2TK7RVamtcaCv2CFqWfwQF1q1zNHoYrLMHYok4ZV7ev5o82tEkzzfb6APaNTrQX2Q7FpRLQDXHyG1sD4qaNyejGc",
  "key42": "39vZacRhHRQzBzcHYit24xjdSVfgZDCaQBxPjjLEvp7wmtr2BySGGevvDQXideUVtMbkHzKAsMDWzWvegw7V2nff",
  "key43": "2ZNxxUBMFRahRsE6adfhU3gnUqPprWRKaE88Rpbs8te8oDis4ZMYmoyBkgp2ry5dmT3ouF7XxKA7TL1Ah7vipQ5c",
  "key44": "245xiADY8K9X2x9pxXufPW9othP45JCksX9gmn35qfxy5AJ7Cj3gzw2pQcD569PDrjYbEJxFAhhrVsC9bschsimV",
  "key45": "5XyCx6QAdvhKuwiD6M9RBLbWqm7QNMiDqJMw4pVgc8kswEVb1GY7GtRZbeNf38R2zofXom9S8ieKmgeeZczp7kGD",
  "key46": "4yMkGRJuYiWWrv17Q1JdqqMr9oqa31N6fz22UeeLbtCZkPsYZJkcZhpp5YyGXu9PQs7D8nr4aM9PJZGzuZ9qatfc",
  "key47": "28rVMk9jXJEjtK97yMVhX7R3P497n4GnWypfByMG6n1sGYKkBxp1rHKhoZcPobvMs4uM2QQXzvXpu6sLKKYaywKE",
  "key48": "59ARAhBEzeh9yQVj6NLUdWywLJuSU3CtntmgY9LBxYvL2omS8b6Y3zMkQoQ2juLsDXED3jc5SZcNPLaEs6Wjxpvn",
  "key49": "QM65HXAB3VBeLfwTUXW2xz3qoWuNiYgiLBCvL22SHrKQHtY3DvPesgidwf2pTDauFGskRfwwqeSHHV3tc72srhn"
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
