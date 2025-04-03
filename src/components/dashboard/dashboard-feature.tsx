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
    "wJepKWGvfFwzY24njyjr5LdmCk8xvoJMfwFYzMTYkoUeNTssNmWjvx2xwDbMmizLPbyrY6MZ41NW6W6mff1R1vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qxg5BYUf9YTHtByyBRwntFy7NxV12RNkAfYMMYVbxGask1U1C5jKTgbgWanfJCa2UgHoNCjFKF6okUtGbsDE369",
  "key1": "38tLfKSqtbDAQAESfQxgf4GZG8Nx4xN38KLUFz5QJBGJdejiBmyhCAMf14oEAo1grUyFS3BhFRioSr3rikoHqRWK",
  "key2": "s8xTZwSe9YKLCPJcEggHf4vbLxradtCJUBpHy94usehPwYudzQY9zTgaLchXxHEj3tZ9S948JDcxL9idDzAR92Q",
  "key3": "5MVcbxPFHjoz5bYYMkLaHJqEaDTRS2fXwP7kMVd3CRgcpmAAxQeUpYD7Sm72PgAXYuZUaWp2BeTfXfcs1fxcEZK6",
  "key4": "5vYbknqdkCirNdKnN1E3Jp99sXm2bAM2uxtSHZP8Jja2oNmumReH7mFyLiB3hhpgyvx9EHyGQdCkjf7TF4gevS8Z",
  "key5": "4XBtKdSJT4RbyM6rLNXydSHYec65Aa7dNHQty5vjvzSRgQTNSQXzwEEJ11RihdRyNF2N5GjKAfgTbzFkd3DkLcXA",
  "key6": "2maSUf497rhXowPsVdr4bWCcusqgY9uEWt29USDWz5QnGYuU4YrJ8K6fYoWnyYjJPBGCRbd6hvWH4Rpfss92iG3a",
  "key7": "3LhQzySQajU9RBbPTPr5w1evCc4iyQUXteGuphxEmdJZd5ZzUrN1eiTeJkWAdvEKrNUReeF6TfNGeHouRSsiXMAD",
  "key8": "3zpWt8f8XbGq5JXuEXriX2EVmHtAyjKWScq1DgJGiBVMgLd27B8Zk6o3NAn3Jt6gMpfK8T4eyyuAsp6f4w5YxZ6j",
  "key9": "5tXcHN9vjPTQW9CsJMP48MUW4gBKRhJiKcDdjahtD6dfJwFRmyoPr7RZMQh1kf2MHS6rzASFhFRx4KtcuA9EBd31",
  "key10": "4YFesDs5gELCrouPT2PJm3QBNX1ndTkn8LG2xDrZoNNSpJzk8Gr7u3tmB98f3uoA2D4RN6rumEiDbjsdnEWShLBo",
  "key11": "5eL42zbtT7Nu2EzTsnU5tzm7CoEMP6xSQfQU3h5GhvneUCetZHb526rLDUgW31aE3bW2VXsHLGmF817sHBes9GaD",
  "key12": "3vq2MiLwJDPDsJ5xNQvtbmu7jgsRDXH4jFUwJP62Bry7KQpj2j5mSbsE5ZgHRdNpDLv2XFtSRzk8ayU3rT5B8cvt",
  "key13": "WicUnjvrxtDFbZnJoGDtgswR68rwBzF2KaAax87vPcqkUBFqvpG7Sfy9FG6ZciReoCaJLFr5RsF12iPqeKwGgoi",
  "key14": "28Kkk6GxunDMfCT3DrNHRFdZTUTrzzYKEA6zC3BRc6WZKGHA5V6SLhtgZxB4gm3X7CvRUZEihD5uxFaeAPpS4PN3",
  "key15": "3KzhpGoF32f1iUFnqTb1sd8ysjBJiP7d1CY7TwnKLTcn6HY19NCCVyYyWp6Yv21zdkLJFHjego3CibTtmPEKy74J",
  "key16": "4UeDddAdxQVeq3Vudaa6B3xtoYbvFQei25DES66NqwqfTEqxeMTf8XphPwA2sYi1a7JyC5SC5gBprH5iTy4CvXw3",
  "key17": "2zpbYAhxYMHDy3NAZ989Svgr2urF8sEr3wAneJPiKaW5voj7H1MT5WkkPabYwqaTZfJ2HGy2cSBdduasA1fYsE3r",
  "key18": "3SBZpghrVnAtuFs7mTC41tvmiyUVstEfVvVnbfBqhJx2WaY94kYrc6f67bYeFdMxAsc4np3WMFaKVeX8xjJxi3PP",
  "key19": "3NvzigKFq43jGyGvwpEE8qDekmx1N8mgiU4aiSfuqAtC4CuhEAT3G8K7AGj8aJpqjbovzn1q5bRzZnxWZfoxCGHA",
  "key20": "4iE663Wbf4De38oAj2x9QCArYmWBTjn92vRX136y73b8rqkDPZf9WhWCH8qvJHtf5vXRKSdALDqRxs3dbj7DU1jY",
  "key21": "4xSpWqCVPaX3ijiBVdGBQ1xxFMbRNUgWqtY2cayXipfm8X7G3nq2R5pNRU9C4rb5EzSd6U2w3EQobVxFZHkPsX2P",
  "key22": "LCB8ji7eDGE5oDzKRqQTzuUzgFfoKo6vpEizAzaY8MqgTdZd6Hedv8qfFffTRr3dxSuApD8qSvmXk4emfPixMWZ",
  "key23": "2mrxjroYz1ieQQvVDkhR7cqo8MkGydAxgZ42CUV79erwiMbDN6FzuwYi7mvX6a1x6yyUH8byPj3BGq8UkcwJin2s",
  "key24": "2LfKpxTXvyqpVqVkupA4LMYQDZZfm8igAojduukemTbB8KX4YjYi1sHkiYNf6xs6tmBus7Pju9PjpMpkDwHgBpUM",
  "key25": "Qa7SoE1jM6sbGD5WZdtncUs93v3G58rdqCJsj1K55WmjmcuT6muVjgqXC5qowit9o3Bh1b8SB7QRLor87HRMjDV",
  "key26": "St6A88rhoccXtuZ6U1K4ea8or93HAaQqVFQEBPfojRKN5UhZVxWXC9Q13rPikAwMBwsk8UChAZveU4SNd1xh9KT",
  "key27": "3iDUmnR4J7TMcGdbgrH6CPCF25vMTtk4Ej2qUFXwwBUsPgN3BHW3GRcbYFq3LijUdxYDSbMSfEgqLgf12oiQRwaD",
  "key28": "HoJhmiK3t1xv1GfeMht5QCXZWtAA3to2H8YDDv8n6NLbSWaXvLAGpNNEH7dvCeqWyLaJqqWWBpxvUkiBioL8ZH4",
  "key29": "2Czpus3diowsSYcaf952b6v1tfoofdN9qb8LPsf5uRDMCNwCrwifS5mrojLRDwvtYtWQfDAog81QxLG7WK6Bzdvv",
  "key30": "5cGy64Xrqz54VLmy3jww4HUe8NKnaSpj6sGdvtjWW6HR18g65ysVPAyG8cUrDKFaUUwkkM4VASSX3LhSWTW9zP6R",
  "key31": "3WNN39EyhM6gcAWGiFgf1B239YbpPaTqoZxivDoa5aKtaStD2fHfCZXWY7AmUBu9bHfFKFEAbRkhhvwqryE6ihgX",
  "key32": "2ay63Vvh3QsFqFPwSxnSSQsRofuUDyimCaz447xirz94QS6PqEyMYyr2oTQ3vtnBkQDDHfLscLxCjuEB6UB7JG4f",
  "key33": "2AWgaHf6FMVsxhdn1HvMZJeB6EeCCj6mJc9Hky2v4bQvTbw3ejriia1g49YKQLnzo22sae9MJ2zj9oywnFEHctYm",
  "key34": "mEZ7eSiua6Cbi9rbAb7qckvcExCUn3HPCMpMU7XYoX2uHKFg2Pgtrw9AMuJ3hJ9wBqi3M2nxrSnLQDJguHmtBcc",
  "key35": "248bEBAdxGNuwXpsJexGL4E7d4CzLJZa1uD5AmEDNzJUfwE4W2gxwUzL6416iJbjqv731idv31Qa4rMN9C8DXTuE",
  "key36": "TPuYHPwmynsSWKbZgLjN94p8zYGC5SRVYpcYwKfa8zXTz3Ru26sudcwfrEYM64Nihqzk3GS9jsP1jvmdNtq5sp2",
  "key37": "61ZMkPD9zwQpSJkJbnFH8YTqxSJeS11qsTjkxNJ7rXZpDG1FRs4VRex36MGBvDMyGGX3CQiayvUbVHMNCrJAKPTT",
  "key38": "5e5YQ3ozK6opFzfANvB5Bhpa2UHYJJFQKcoTLs24hbnMqXDN1ehQoukFm1VCgEj1DbURoZSimQSqJGFZhYd66jTf",
  "key39": "3r96MduAGTj3uhZgrGDC6Bs3ojbceUoTfY6cW5cRgtoV3UZEihC1Gan3KagogJVrM5MfF2CsUv1YPHZ5wudDnxW1",
  "key40": "5drXE624t4DhoZdK9apJahS22v1c3VUrqTSWnJM8hZPePTWwYXQXGRvZ6eiNdX8NfUJfa4VdTi8zGwNjEtPxwCfZ",
  "key41": "n6VKpthTkZztYgiPf2ArxYB33tyXBkhFqBGKDiHVtdDb3CCAgYk1C9134m1bao9Z7xCgnm4hwLau9TWikj9vcMM",
  "key42": "mnbWbTP6K56Dok8e6Znr3ugfSbDpE2NS5Y6xL95r6jcWeYdxiK1HoMef7ph8zG5iduR82vSUWuCHTVyuWPLgjYC",
  "key43": "VvJhJ1n2ort1rHk9uFT7w7prxba8mLXnGmBx6ZdKmm17rmmK3HVHcfEz4Mqpa4avQtnBRvGZYhTZSwmFCpTnheR",
  "key44": "5zSCwxX87G1BUP6LyJ5QTZUJNCWq8gmP9DAbi94zQGSwLjsLznDstnfVxUazuhxuwjqzWhifSzZkBV9EM1vP3W9w"
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
