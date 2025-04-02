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
    "3CsAiowSTPAjg7rEJ5AneyKYMm4J53QZ6htDtXPaBdX96engSTd86Bsj9Yew3AXWmrWBgNc7LZjah6zJjPWY9stV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4Mbjrtr29JW8Y6bZ9M22m414PaWA3omTJvzrS91HaYPToDa11pyFx4jBKMwtHb7tBvHxkQC9LM7GeGfJYU6Y2e",
  "key1": "3xURwkYH7VyaZdCP3qwvJCmuZZ1h6wwH33hmDiEui3bEqmWCsXY43qyv3ijxepjtq8eZq9PihdnSnorwExA9YUaX",
  "key2": "xQaroYWStMiZjSEjAar1Mw141hw3SeVtFAR4NtXC6uR346ygGrze3o3gBqSPMep4pvVbSpzM31eZzts9TGxfKvt",
  "key3": "2GKEsuMWwXCBgaV96wJVLNCP5xDCFULEEH5Q6fPkMG3t95bk2z6QCNTFfuEEHwWgJoivgff76kkZoFBcJYAKbYqT",
  "key4": "3iJZZ6ydgQmPpgy6KSw6J2LZS1VjLi733YHDanwagMeG8MRBXBaL7hREopH388iJaE8otcunVc2CpcVEfkdehFAu",
  "key5": "V9assMsj63D9AgvER6pUtUXXVWrSU2cDVNRxrfurPtFyyMTbEfeNk94sPwBnvdc36Tx2mHmcuBU3Ke6JKgrR9CT",
  "key6": "3RbquwRhb3ijafRRVhCWYUGXn4PrN24j9guzwootKLG36P8MdEb8fBzrcWJPr6moJLPXTZgBKqZ7YxQiBbNSnQdQ",
  "key7": "4p7tgzAkSf16RnASVGnFvjsbiZaVFSEsXm2phh9nY94rwSckCWds63Ebwygf6S1hMEwKE92bqdRA4jXr5Tsnxqkt",
  "key8": "2DXPUJCQhWNr3CVxMXyn6Tf7H4opmjgTABkY4S1Dv5XvX9ZWNvTAtAt3gFR6cNMtTNUvaEgS3t2o3tEucX8odsR9",
  "key9": "QmFJKDZukeGgsDrsjtUxhhjUN7WJBd1syqQwEUJsrsdE3gSiTThR13E8bXwVUHJJ1eptxwncad6K7JG2gkurgJE",
  "key10": "5Puro4P7Z8PtNXTxRfnhJ9B1JEjR6YdUqQveriAdQVfLEXtxsjhH8Y2x1DSbePfSeQZnUQJoxGH9jCbJZ5TPhSip",
  "key11": "24qfCrmVf5xHUpzqBTjHjQi78PJRsuKb6d1QMiFqSAB92EUWMaEvGg9wg29ibiB53Kkak9QLUhY7yt6KRAYCdvvG",
  "key12": "3huZMuavEy1exgQX1VSz25iLt6uUwygPMMsGp2YZxz82d38UrKCHDrf2gyCqUT3MtxXLszEM9aiiM4V22ZhiG1ey",
  "key13": "4LhociKtth6neLpN7PaAMQaX2D4FXRHyYen97ykQCvP4RxNqLRrTztTB3rcoHBn1RoNBB3iV8srxBPPqsskp2EdS",
  "key14": "2yFo6L2BAA1ajHdhbwxYLz5EDLejmHyqDUd18Y7u3No9hig6SopWn2HpQaHUbNckk3dLFggkSY72iuNaNdb1W4C1",
  "key15": "3Xh7suQzySsSUTTEPsUNM6hDWJeswgwsHENdXfaqQceoe1mYP73ekggzAGZqpsHtckSDRsGfmJrNnjWTukaUk4Ne",
  "key16": "4zUP6GxFJgMWYxMH5YMhZRq2Jsz8vXJ7C1NcRfnN6YgerGTQr4xzaUKN5WAd8BoDLDsXzvNDj3fwpY13ieZMjktk",
  "key17": "5XE5RoTKonu29AmPdZA4Fhy5ZWdp5qLqXaQbVEWVdKcPsFSqWpM1CfmpD91ZcEHUNAL1aSqGwNaX9ySUd3sDTggK",
  "key18": "dFLUwCbS3j1Y2iP5tvvE75zKo2hTeyNT7jpnCBWB5Bag6eHMFXwdohaUW5e8WwKxnrKvD4WvAzcjL8bcDR2sDty",
  "key19": "4JUJHWRUsap81J3WYMaiPkEnw7owmgSS7Vpe9pdhizju8dBX1xvaxVUtz4scSskkFqbSSyD7LQV5UCesmyQKhhbH",
  "key20": "nHLfiK37BTwAxUpJkZxF9kwsP6DRZt9Fq7gEeTCE22nCbxhbpUzuFSZpegEbc1GsqMKttoWxEuKEnGT6u14YSJN",
  "key21": "up7VsJTtW7wRhQfjVuJgSuMjMAnYeuGQ2MigFAsxTgZDqmQUMFbMveMwZVcx5QzY6hGnT3bsJgp7WtteG8JdVBp",
  "key22": "48mpfqYb8gzx7EB9PXKWwaptTJtMoQauN5YykNScJnG2ev4Q31FrrPbie1FfG366S3cWwvbuY9yQR8oAanYR5ARM",
  "key23": "6iBotUBcyRfHPKK2izz2GtYWx6c8xGe1G3w2k4wguEfoURneoRTHondKjv7CFDofNiXQMdELfTpMrkudvE22qxg",
  "key24": "5wCqbKB59Suj6fJMaoWS4yc7ZYghmUVS8yhvMz34kB2B7dwWz2eVdF3umx21dKz6HjdPR8W5RDqgm6my86nG48vf",
  "key25": "Gu1pFoxPKbR8ZLrU1sqjXVvMUCCHYuKPBFzFWk8jkEuTRRLoRnxs9gHHtiPjP4kU8MiVrBnEjz1LRCAAucpaZoK",
  "key26": "2wdyafRKAG3xdriU2JbABMjdZdgXmhstXBdDdktHu4mjYPTWMXSwx3gaQE4Sh3yJFNkB9yqWnPbBMVE3pFGMPXoC",
  "key27": "33Kb2vKkYBUfZ76gUrrZnh8zHChYqDBpRzvRRCiywzoiguHnxAkCKfqauStcRPcuLjhhXLT91DJH5YVseqtY3HhL",
  "key28": "65CzTdMoWXmVwn8fqxY2yuVYceEAKTVZPpXHQ2bGJsDTDw3iSV3nisx7DoXKh6WwmKK6rKEsB8wkVuFqV3Aktcym",
  "key29": "4BhoNRVEuuiuKmSKcC9ZxMun26zF4uGRTFEURCFmNDUcWZAwXM1weuhPxq9vomWFiQ2n5xNGdcQUHUSnPt43WVyq",
  "key30": "3wPtMCBbdCVpj5y44zYmrCyGr5of9nnv9pyAEMdJcwhfAPPLfVgxKi1hCWbCPVr6DNhcHx2ew1Krmqs2PqiZeugU",
  "key31": "2dfhJUqYoU8i7dkLwU4mKEwPMVUcdGXm6ZSThohDbdyryXDQoWAtWUNDGVLvzn82tu9fGwiGAvFwT4JxXe2MVLBs",
  "key32": "3zqywU9qjNeJm6iLFkoVLHdDQiaY37kySxfpfBYR6jPXgqjNVASZ5PP9J1M7pHMKS4VdUPTFCjA8u8U63QsLqGsY",
  "key33": "RkdqDqw6xnz5vQSNfsh2rK4ch38N52g1BgJVe7A9mg1k2bEtz73th3upcsnf7v4qQ6Ze3RMpcVFizvW3mzG5QGc",
  "key34": "3DnCDYsnvC9oCxQogKjDhtTBoUXoaBwfyqNWH1txAAw4eu286GUqY8pGDX8Y79fHQrwKd2ApvT3HRdnxYNVk2Cjb"
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
