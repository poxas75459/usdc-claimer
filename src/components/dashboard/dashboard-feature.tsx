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
    "2GMa6S3kpkvEEwP3zoYxFfBCW6N96pZyC8i7AR965HNoAvteFRqcuZmiqSajD8mbS4DFW1rYTPKrbeUygYecmZV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsdWVro9PYb3FbzRQ6xnDTxdgF8c9en3RiWNx7cP4EsGXBMsvPQRDhxhwW3cY78S9cvqoZEY3gYXZoxJf6Xrjst",
  "key1": "242dHoYqnmGTzJy6Bcxs4iDUzP7Gvz7f85huuANV9vfCX9ykpe3PyV3RwHqxK4AK51sU1fcZzJxgQhCmGTWvkYao",
  "key2": "2G7kF2ZUhT4pVmj9KJDVrVKqB5J5Rtoai8TV4PLvjYGS25kfsMkLBwyiHqXELPNpLaTEm6xBgaLQDg5zssXp63gd",
  "key3": "4EhWuiJGTpokanMSR7bMAgC7YivmouUoRtmdAD9rbNseJTyhKyfLyDrBUqZAWSnG2pDunagqwr3HFdN4ZoGWnpDT",
  "key4": "afpnkyrRa5itoDeXdCG7DkqpmnhvmsjXuzzEs9qk1Mhsr9C9Qh6kBQ9KsxyAgoZxRry3iuVo8HseQPt26ju922s",
  "key5": "2FWRibtjbEjLf7PZsSUtbexWWZ5ckQhYe7uacQz9k1tuQ7Uzsph2PVovmr6FQxRh5fewnTT1eksgFQvpxRPTxkvH",
  "key6": "5eKSSk6nmwaCXkyGKMx6QmjY7JRMsgG5keGEroUTgdJoL4hf9YZ6mXdkygP8DxRjPvVKBtfFAZkccDWypu8ckvS5",
  "key7": "Hpr1N3S3Wj4VLt47pBD9AboD7TFNe1aY11JbJarduX95UAuPZyR2dFBuUkrnzU5ifVs1wVePLApm5n3vyHrWjxZ",
  "key8": "7xkxSGd1ntREdXaaELTaWaB1BQ6cyofcBsar4tC449jFLTk1xtsiGSAivDLyQpgcaVi7QTR5dFXoKP2d5Ca3YTF",
  "key9": "5L5SHKvpQJdzQuUDkbWC1yqfYmNVA2Ntrt5MRiMYvP2UoShR62U97CFLpibErv1oiuWH7NiEP8aYVkvE6jBEtaGX",
  "key10": "47NmVbjwQwVVB9EwywEJ81oShp5eMzwMxB5t7b2kzb3hC4tCDBwNiDFKz3dNnf2wF7RqFbJH6KQWSndH7n4ZXZW7",
  "key11": "3bhqEvnSFFP8rk1SLCRggQUjV1cb6MtpWEferbU2p2Gw5AWXA8U8Ddjhxhv44d3VogHWtzkeBJfLSGN7sfo9NuVo",
  "key12": "61iNPC7TJBQS5fUmLVLaiuPLk9LBG9ciNTa6pLNveCf9ktUBZJ5K26mkA7ziUxeioGe63dknjA5u87riVc2T9Jdr",
  "key13": "2gaErZWenc767nbp9g6j4ntPsqfQWehVhvaFmqLTVUMbQgPa4rEQ5iuBKJHm3Y8yBAkfiGkX9PXD8oNmBJpBxJFh",
  "key14": "AU75XsK8sFW1snGRcC8285DN8WZZZ8bYB4AkbnhZpPEpK3Cb8FcyiC5rEQvkxVAFgkD6bigtaUvPR524duyFDuA",
  "key15": "Bjym1z3YFpxq4mc22HZxLMeDC9WRxeZt6YuYX8DPstzrmMraJKoyusEq1BFmwFqegozjd4WMzcTg1Yi6mnit6e1",
  "key16": "5jsUA9p2r277K6p42hE29H5nHPFurn3mmjfuNJzriuF7GaAa7Vs3aiTSRJuMoCGBfB1Xt7pgs3zq1YHzUamHi6fZ",
  "key17": "28fA1rTRbKXNcf1XGfWKk2PQfbb7oh7FeqBZAAD5w4RBYvQ4coDdNskmULiNiLJEb8KFWwsZNRy3Hkr4gwPuLe9w",
  "key18": "5HPPfWGofYk3PKfCRokcHT2xNj2BocMmBkh7WuwcAVuk2w7fn7hLqZ5uXsmmM2oQV9Pgg9pTC84nn2MCQkjyHGVi",
  "key19": "5pjJYWwpjFcms2KAyApfiQyToGuKiwZstvHKs93Y7fa8EkPhEswvnsQjHqbA2DpGWsdjtW4qaLxGB2JY3iRJiDaJ",
  "key20": "3iYZjKYJFgPGCWXJRTrpEUb64d8jQpuNAGTULxPPtkN9EoSJcpt1V6HugBPYwR9j2adgyL1FZuHoG2pjNeAC5iRW",
  "key21": "3sRJeyEc5AW9hkWYKeMqxpC3a5vRy5PFc7E9BhNPfav7cazEsZLrZotXCGAkSWwFSojaCBgwhDaNo5VP36UWHBoa",
  "key22": "5oRac1iKxkGy7MfutxAyyWSMNdYqRDbXkx317DLyrSSKwfxvWR8PRYBhqWuQUEeVxUeNMcZvkrRx753X5zdKqyPU",
  "key23": "2LUSXxvcWL39yoZSTChQPxWnS7hcutDhGHWTHziPFCZ82qJZA8Supeh8T9uGbUEFtYPmVK9yf57iYxTsPR9Lpvys",
  "key24": "4hbdZC9PjrgQXYY2cVm4jLw5ZV2vY4jrmcdzt4gyEEkkigPEKDiWF7MPietwfw4bK6oDxC4Qx8tocgTEKAG35J11",
  "key25": "5vTsR1BUj92xWaxgPApJU5WkscvePEozVrDFTYbJ6yP6v88rLsHXy23ZWkr5CLkJYJ3mpaA5d1VgXtwmswT6iq9z",
  "key26": "aCUxji9UhUSsRCBEgFy6XfcU2qhexvy5Dnn9tZJ1Gnx9ZPVayPmyDc3gej8ZcKn99XizC6pctmCCY3weG796BVh",
  "key27": "66iAXNULRqPskcvMQBmqJ2Zsh3NE8PS8zPgU6SfbcMk7L1fynnZChM8ff69S3cJjYmnPVJ9xFyeVaPPEH6mYbtei",
  "key28": "ALXDHGUPqUfvN1K4a99SWDN9AeNN4eGEhgiacPdSkJE7h3LRpmK8txNooPyhtfaa38TTiG81dykfkMFq4f92ddh",
  "key29": "2VFCvJPYTeEEK2tdcGKaypfk7CgkTiq2t5v8vN12zS7okZzVmjYXS5XRRqEwv43uDFBhX4aFguWk652EndoPyKNJ",
  "key30": "5syJgFT5GsYJqKViou8ipcrqox3iDpiMxomM7qP7vXg7R4WFuPsiJTimGEHrYHh8Yf477yEuppPkqjmL6JMqw8Wc",
  "key31": "2uhQojG88pKQgPUMRpUq5LJ5TwRP53LGUP41yYmM5phvFoncFDcvbvqnuqgFqubUAQR2z1iwcNvduKSUTWeZ2iQt",
  "key32": "5KNWVz9s43MR9Sd1Ei7WiWKTjPMp6aput82zRL3XAcFQ7rqUH436eLVhHoBoDqQJX8Wzi1TTpYnH2DGoxENvFAsU",
  "key33": "r3ZtnCQ5W3zCVL4LcrZYkpVXKKqHpxVGPH388A4JQSp4yrDHUZ3RAyKSzqax9kRimGo8bkATtH6amVH6kobRBgg",
  "key34": "46eKbzLGhYZS82LygjXBqav2a9348d9FpSbMcCuUZ8JZw5T4i27WxHqLKdht9JjrQini9rHtmVqqgqygSdqwwcU5",
  "key35": "2sUfuTQcbGhpcergC8BzzJfuxHq2zdNnuy9qDV8gNUNMq5qRUinvNUmKGydXpMyixi3kBp6Z1188K62Af8Vx96nk",
  "key36": "2kpxJjn61rgXashQKKBRfL1hzdRDPP7V8HdG7PSBkaauxCwWWc175dqkXHAUHv8Pn7YWRDrFvgv4yrL3SMMWrSmg",
  "key37": "4hbmAV2a13KNzQ6zkksXyjdbwJkmm7M1vfX9Fo6bib9VFGNKZAZgBt78GdXp24tRgkR9EZoe93YoG8V3avfYk3gh",
  "key38": "2qE4uLntFSSfa2vCWD2tQVt8Fmd7AvRjCtFG23pFJKZqTBcbrwJLYHVMmA8z2nmZhWpaPL6BpzwJbpL5FHhm91Ph",
  "key39": "2R8MFTFQbsfAYaoL1WSsyQbVKHvEbWnpeRqm9LWGLrY21eHGr9hRBKb223VqqR7dDC3KQgTEuHtAoqaYzRXACVA2",
  "key40": "2YgXq68YDXVHcstZTRhZCWkVv7u9jDM1KQV9QpbA9KMZdoDLM3YwqfvqP89h2mVThBuaAZHGWq1PNdNLgBkALFmM",
  "key41": "4TEpTmJ6hkuMzjMrih2o9XV1sH5VsjUfZzDq26YwrCsQiojVnj76Th9x4yqkeU8hGLp8xeH5vVVxp7KLNH1LWjod",
  "key42": "58TE2zeCeBETEmiSsCFDfv5REN6mm67hKQd6hBJcCguMnJiJi3VHMWsKvVFSzKnidiS2BrnYvR7T71P8SKpiEaeN",
  "key43": "3P9Q2gNKKGhHrBWSVxkzN9yvkJPN9onrPXd8QJHo2gjTvEvo13uiyP5UNV29sg5KGTFFM4hsESWaQh6mEfHHkrKh",
  "key44": "4WrFSm1PT5tapvfVQtsoBoBj169zNkFvhyUhns65E5JeSSCbjrAp672iNmb8oP3aWgGVEJFCH6EQo8WETUMPCiTf"
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
