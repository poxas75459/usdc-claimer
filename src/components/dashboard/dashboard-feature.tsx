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
    "4pCe6af9TZNs3QxHHg2fAC83XZWLnf4H5pUw7dbkD3Dv6gHgMEVgkDohNa8bV9cRFBaMpwCZdMDdRhYgPvjtpNGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vqF3wdU8cZ1LvyFXq88ax8F2ya7JZMcFMiXQGQ83GWC1YiCGNLbCtDghfVWahCoMz3Vpo9kiZ2C9wRDi9A41VmA",
  "key1": "2WVDNo6gc1Wqfy7SQrUGvKbTNhheVqmz4XQYiRXqNqC5NsdBM7sYvtR6AGPdhZiByn2H3mmVicRev29e7cGU5UNn",
  "key2": "5mtBBSjLBGojGchsQ6nAzD55okRsA6PNsHeMJ1HBANFhjQFuraJemWNrphpv17NUjVqKktEZXbNQgbvX7YFFyfSZ",
  "key3": "4ZV8Pccwdo9gp9ayH2xC5BFAiHZ9jHPJ3B8TLGCvtQA56KaAZhUpioSz9vK5HUVSZwAhnjqG2RjKCEASehAKzkhJ",
  "key4": "6ZeBrrDhzTRpCfbUt4Xy5zncZjLStUim2zBtetkCZdqduAk61KfTwNyitegFjRFpMBQBa6ZpKCmYymZwZi2oaPZ",
  "key5": "3VC7CfdW7jwJV63Y27qVGG2JmKkq8KLjzmbYu2qKyjFXTxWE3dtAvDMpwhHspy1EHiqmFAvs8UuA8TtX9EkGLkmt",
  "key6": "42wE7cNAUsTQgcjqwPwH6qtMTJhzXP9UCDmbDDfHzQtEfJnS9wuUbxypRmoQs5zu4hHsUTyMqorp6mp1FVkTvZKE",
  "key7": "2oXwgc5ekWnUgen9vVPtZeetuGwxRmYzPihNCWiHeTZkFdWS1kBzd9wQwkZnFSaXxe29C1swrV89QBQkVYZhDoNk",
  "key8": "4fwPuw5KLoDEW5cDQrxs3Nh9GS3tpwNqWnSSkdM5nsKY8ChUmDneRUuaiU9UM1PG68AVGrsKGrDmrA8T89RA6x36",
  "key9": "2YBrpx9FDAVseBwfy3csnkHjGSj1t6wC35rsh1mtNWNQmCYYdmwBnRCCGF1J85VNnNTUqJqkL8vz27eu2vDMDkuF",
  "key10": "58Jie4KnRLxjXjZigM9JMfk3hq4MYzLszXJeXD98qD4XdbsMDTaZ1h7aPB5GL9SB9JDHDbaBXxioatwN2WWCJxzV",
  "key11": "4FWuGVK2K4Db4a6RC3ZMyrrtnPuFR9DaeFpqXpHx7qN5HEkBLbEvgpUiZnoftpj3c58Nq25bGrJtfKQCxG51STuv",
  "key12": "5hxZ7rkkPtQcXWah46Wz4HSAhbJF7mbkYu7c2YZHKoW9gZMxxxue7HDMsByDF6s7Pd3WMBUZ8vViy6edJQ61sAQd",
  "key13": "3Amvt2XjamdJoudpZHmagu52oxL3tLVqiqNX99NQdW64UrC5uMxu98iyMt4mHoMn9Sz9kymCPYvmBinT9Ysd5N5A",
  "key14": "34EPREvbK9WoLqcd9j1FxjwyUJoQNoRL2hzSqe9tikQ8xMwrvGP2XcS1zbgF8HK3sBtLUSGtr7zzExa5w2CVYY7p",
  "key15": "56JQGZceqazDPKwou7SyrAxpYg7jJBfnwe46emVtd2sxzDGbXc2A9rZczymosVejCzkzZrx9pqRtvdcBpjJYy7Lb",
  "key16": "3FYojk4QS1164ae6RsJ2zj9FsmRUgXVd5hAEUxkZkgrDFUfNZUH6GhQEn5YmXjkr5wJRD4B2Xqx8ikiV4MckNVLJ",
  "key17": "DJiDi269PJ3hbxBe7DrTMw1qKdyKjcHo6QCS1J5kC42M88Wcf1so8VYwTsowEQd8865uTz4YUdftEa3STPMihip",
  "key18": "cTbucCQjkV37zSYCvHaMsVN5wUa5D6hy9ArsMjwg2kd2BCY7ceo1BbUyGTxqtff6vXQLH7qKg1SWjocCMiJxmco",
  "key19": "3gGQPMF14K2MRLQXNDV97kiR22nrx8HNRoxJRfXReQjRM8WoN4bsyMu2LmVrEpju6bhabiKY2nhtW7iFbCuS6Les",
  "key20": "23TcQV4UsXMm7yoW9eAZbAC6KfwY1oC35ULzxK7vXLSWCfki6FqjFV61a53VEUE8FdRbPCNLbfWq3fNdZ1mp7mnk",
  "key21": "4TgsMB295sWmxGNtm4Vo3yVTirTZQY2dbdvAYhHUiPafwJm7p1uPx8dxg3yo7fmRgxpDG28zRgXPUgxShahwrUE4",
  "key22": "4FiTjBPq3VXQWXPJLiV7FrNftBnwFKoYd5nZr894dxpcrNLdRvVRVHLp845o6w7Z3PtpKQ4Np2wzYEdD9r398eUs",
  "key23": "5TKK7mpMnGJnwrhXobfHuKdyrPAhwXxXriDGRgFLucYad2pW2iCwK21KopqFxjWg1NsUjDbC9MK3eWD7CePZUtbS",
  "key24": "3M7QUfiqn8pS5NnGXQcPvdNtWaJLuWiDajH4Tbu7bm4nnWM17rbM7ZgXV5AR8GEkVAFdbaP7XMPZEb2DhFDsW4Dq",
  "key25": "62MHytp9HGmqa8cFRR4vAzfH3Ec3RU18EGb84huaNdo9NYyDHrXVZLSoUSXQvjmUvVygmSqDehBUw881TaVNuUHT",
  "key26": "4vwAW9QBDdtcnX8qs2gr8FT7cc1o8kw8fe43d7xWu3Hi2UCRpwecK1sFaEGPmL3PHzAKQ8N83kJECjpc1jec8k7x",
  "key27": "3YxBk6K7qyApPBdZNKryru2uatSE7434jBNPM6yMV9zjPGRcnSUDvpDYYNEmt83PA2X3DL1v5QMqv7mqV291gcuY",
  "key28": "3szXD5XvHmuskoDriQhMY5SFuHhKoxunrTJZuA5Mo5YBd4QecdLAnqHxmv3tShUKL5ZeDeiUFr2fWTDVVKaK9bPx",
  "key29": "2Fo8hLVPJtAe1LwJK2qfTRMZVV6YS6xrvPCzk8rubVHN41pRkdLYHmpo9ChXGTuGG6Phis25ydaQxpF1KQV73Bd8",
  "key30": "24y6cpHTGTB1we9WTYch7Pz8tLFtTWGjhPFoECMj3M1fUk2iG9jHcChZ6sTbCjRTCSPzhETqjH7fYrhy2LaLoj3h",
  "key31": "4s1ZPHNkZB8r7VXVNVBQkFEoDf13U3XFqkjioYpjATAHrQvYFupeoZ3Geay6E64QG922kCFaq7Y2Yk3VHkbZNM8g",
  "key32": "TPftbpLqBLF49z5fPXgLFh1kr3P2zTSmNfxYRR9CNdKP6QfCBwrzxaWUZQbGdPkipQ5YdbC6MubwwN5FkP7oZfk",
  "key33": "4LwmiCNv3ci1ZMR6gG5JdRWPrSC9GS94k6VuUj93wp3RfZPpe5HDwLjnQqhsVH7oksAdhe81oDEQULRmNSgnbm5M",
  "key34": "2BnWkkMVcxxpRpqMLg7M8eGA8FmswHQQxTLSLHiYc69ZJ2dr3v5LGAwcJDAfRMSXpGAzTbkYC2XyJKRGv4aSncT4",
  "key35": "24ziCMDJrvcuKDhSYwa7ZkPAgrp7zg2uRSYnRfZ8xzQfcE6Uvse9J9BokVba7MXxk2nknKzvWAyXZRrrVkE3J4Zu",
  "key36": "376VZr3jSNMx2dbDG7Ru1y4552pMtT5vrdLZaZSXWEB1yMatK5tfJhtzrxYuBNxbqkoPHwPdvbrrvq14XbCJuZqD",
  "key37": "zDA6cL5gtJj3vDqKcADQqLbmJmbtGW1hahHyUvDGdaBvSs1pp4VcKFYdEDFgLwu9HYLf4DQx6GUaiUWEG4fgyZC",
  "key38": "5wWV4y1eMKgRJN4zS3jFVA9ndXRB6H7m4Yp3MezZAG78Fg3wT4UpoaiqJQPFvZcG8VhK35JcGQbnuNmiXYXebChg",
  "key39": "3VxR2v9ivRxEhvYAE62GQGwiSw4ptSUCS274w86PR837P4NtaLDBUwyBGDytwtW7URB8pzskWizb8NV7bFszBmPZ",
  "key40": "WEuGhmLwxxqs1cDzs63yMgbEbyUR1MUGti9ceoMjSRm2PtXmexC6J85JqQr12hxddxRVgcnKjaqGiwwoLCGcXFR"
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
