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
    "3MmFhrdnVHFYkKQAbEgTDvDMaooWKJWhRKUEoiBHiByq5tEtCFjG3VtqFrtU9XtsgT2tCcR1hTa1gB3HfSQjmHK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jmPSRyadXePLdtThHsYgskd9Ki9FsBn1xkTrQPUP3Erox589q2KmF1WD46ZGHACbLRdn4ZuqUczTFdGhnWc3Zn9",
  "key1": "3tnH4PVYJYScUp7okFPnaswrxcEgYrgvYP54caU2oMyaX9aapCTU9EEKBRCKizNieEF4oUpdfqJXGHVUUYJSzwLY",
  "key2": "3zVoF3jZ7q1zNZJL26yLksBzKxbYQaiM6nUiu5cVmwqSQsoR6dCcje13RmDGS9x6FTUHKJk9thACorwWZNdmfimL",
  "key3": "urX495TQSDy7gStCtdgLy4aeMHaa6eXAS7bGJru42JH7E2STc9eWXs6d9mat2iLm4TbLQVXtssSzq2JP5z75dAy",
  "key4": "54Z2C27UHo9xkpMpjCrRGrKLzNPW8tcE3yDb18pFf6nqZDXEgUiQkQ9icehzg693LBcQ6N7cu1jUMnWDpP4sRWR5",
  "key5": "3T5nS1UQ9dmdfy5bWYQd5RSnJdyWVSbs8EtLgk9AKd74zsSpLp7i2bagjv2hZ23Btq97y728ot9YbCi1XHuMXptB",
  "key6": "dQqmSwkdrgvgjRZE2dV95oxnFafNwbgNoFW7o3uYVQJSL487i2gaXy8rq7PhHyisu33zKFcp8BqtDU6UYLGj4kw",
  "key7": "hZHYbujniQrp1p7AeGsdKVy1GuxA8v8afg1dsp5rd4xs6BHtZP3Qkk2C58Un1N5Pe1hyCXdpbT3PAn76ZhXhv7M",
  "key8": "3fSWKX4W4hFSKCULgPqEtJeJxtxuw59kYUg4oJ2suNidJsFEJEDSHwz2CsFYC4cWR3HxFHMsm9iTwmzut8MiPhAi",
  "key9": "mVHnKna3FxfjSryiBM3fFdvj2oEwoSwDXX6EgKsr7SqW2nVehLXVZp8unCvBATbFd9ABAEqdzGcCcFbLjmyWhHe",
  "key10": "f3gAcYomkVoGSfb1zdh87vb3JYWhicHbc5vcEas5UyymojiPHbYsP4FAy9629DW8N9zEd4kFSYgfXu1Xwp8fysU",
  "key11": "2v4JRrAD1ov7AqJkPdFPqmrFJBc1Ycj6qE12D7ja1HztEzeTQc9fPiSzDLxwKoF7Eduoh11on6gxf5AUgertEzqQ",
  "key12": "61suxXso4DZdppAysB5yc6GetK8LpjAa1QN59QVB3JBRYAkHm5P1sY5ptcjk11nmsRvKSD9bQ2z9if24cbpN6r87",
  "key13": "4xvnMSbxe94B55Qk2rbuKjB5EDjbui8qXZA9x738nyfNJgzoKxjZZjHfs6xDFynUmd9xR9TgBPsZ72Rs3TGZrbbT",
  "key14": "2WANvegvN1HpX5kktXVAziA59TLFj3o41aXp6TtHi1Nmd99KDxnScs39Zu5r4DBJPzDN7jXuTBPAU8ALCX42hNq2",
  "key15": "39hTCeVAXKQaceMc4UnczqBuVRHMrrniKucZU977Qe77yxxLob1Wq2j1rdHcScz2X3A8TQnAtjrnUFrjirYh2m3N",
  "key16": "2TVWdqLhUgMjTjBQJTjXaEVXJEzFneG4BRxqWTF6dT1nxpyRis1tpcJBs6D3DL2CRCoDWFJjeyBpi7cxXsySgsL6",
  "key17": "7jxLZZ8UrMe79GZMcTkGHctERjW6KJpTCKYA6E6oCiadF82S2uMjkfANs7JRP8CWeCUs1wvaBtocxr1wz71YAVJ",
  "key18": "3MTb4cctnLPSGVaa5QNHXabfCzLGAt3JPvnQ4spK6kNmdd9emdvdJVFSXJqHUHL48MdZrftQhyv6kCh38tdyvFiJ",
  "key19": "65Ui4sjHEARo3KK5QpNbXorr4dTr7mBHXEF1J4HCz6TkeddgXdVC44cpAuuEn1iHaZ6nF1MNFa2BG6xgBM3yWof8",
  "key20": "BryjDx43gFCFV7M4xWkGLs8BYMdVoHZYcbxwhmTGTEAxJhEWfPY7NLPRL8xSCepdShzSKFH5wxcR1NesRrRVN9N",
  "key21": "3NhhpZbD7FrkrCNkhyUVeRV2HGSVFqhRKxTH2R3rMS684YdiHZP4iMTjUWpUSExEqqFHyPjKrcoruZU3HoLhrPr7",
  "key22": "8sus22NhCxBRSXne4vT77niFG8VLsCEW9g8g4KMd378MQCMbxFKgrp9e5hkerYZ79WZyocZPPCsDVbLosLTnRRT",
  "key23": "2M2tgX7h3osbCyvT3rTJZrZxi9h4snUMuR6oEgxFzYPMDhAuo2Zepc56Ug8TZK63df5PMmAwLQb4oHjSnw1Jvhef",
  "key24": "4H7zQCBXMnkrbePWfmbfJCZPwu2nLQHUw2PYd4KpjWzh8MS975SXe7ViLWG3TAqqNJ7Ud6yCw3S3tEEDKA3XekUa",
  "key25": "4V6wDMPZBN7Gnieo8N51kBAPSYm4p6CNt6HmJi56grwENeywKLuttEbCLkCDPEYgwMcLnm6sp3wmSBihpDKiZdEm",
  "key26": "5te1Hyr6Nfe1NzLbjCG9BNN9z4okgbgQavmt7nkvFsryVsuymv9yRwBLNEX6y3Ti85P7vbL87feY4p2DM3gH3keR",
  "key27": "672o1WZzAt3kexnEwuHuc5qkyRvX2cWwZSrcFNc4GWHnS2S9KbX7YBvmR5R1YVSnqLVAC3NtHeEkb6PER4peM6mg",
  "key28": "5zPur8X1pYusAtaSGXTHUyUV2scJk7DGtYx7mXB7U8qFGt8nMzc734RdurU4pfvoFahrUVfr6GMXoKcTh2EwT1cZ",
  "key29": "2GAGywtCerPWC74rKUHHWEx8XAwmML2pykFu6F378bsioJig5S1sceSGz58JpzfYYSC5wHE8DXBAbGKgJTWzsCkW",
  "key30": "4SRokAccZAhNyBr5Vq92B7FSGAjTdTJurVBf55YQmiwqzB8kxLhxhCNPGqBis4njznPoQJqowxh8J29s8UVgYXt6",
  "key31": "3n3JtmGqXDUZz8YhjK5em7ZKwZz4tPYE7EMY3qwpNZphs5V7UKodne3WjNfqF18FgF6Ei96s361EfVaGc9j9n56T",
  "key32": "3T1fmbDouMiSd6fcKn8NsXeN8pKPpH78uVSwSH82o7z4DuPebcVyZHq3nJYZowYtJUGZttKmtd4RjnrYqFieXH37",
  "key33": "4iZ5vFCQ6mAKJ1zkUooWco5gv5U342XLpvW3jYtRpqfmUDP5myAX71sAQsdqUZSG1P8PZo273v21yQb4RhugHsyD",
  "key34": "2sgdoean8BveYQTWr7ucWbLtcdrNDLfREbudPHwrqKEu4h5uGpNiAH8ixyLmUXy2KzDpbUhJp8mtmDBbB6wQa7Hj",
  "key35": "GsDX9a7qd5roMwJ8C5VpfmKjqmW92QAG1R6HT2TcW6wiqQU5s5s7FQHqZnT6R2ibCvpqbZ4g4kdKSJd2h8iebvE",
  "key36": "5bA7EBRnmEdKs4mXBqSkoMRpgj8FRNu1qqiJFc7xkW6qJ9H1gp9TBrjina7kK58rGcEvKTR3T9WBcb9MsjoVNVTH"
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
