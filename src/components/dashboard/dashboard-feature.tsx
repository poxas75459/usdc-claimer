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
    "3PK9Hn7V6pDheMxL16bXrWv6S1EEP9nWXqMKkPoVNQJ7DWFguDAgMxp7V5MFgjH4ZApJhaFYMAU5MhZeHiHtMZqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jwVeEkyxYzGKoHZ9xmjFBH4yMLkvZBDzEW2eyP2m15cQ5VH1cSWXXtpT1nSs5PQzEDU2WtVkDwTBuDEXqnPdcfq",
  "key1": "35W4wiEqtJ5c3xeyJ3ioi9acW2sjdFsNPCfMXVydYvGtmz9HUSMTeag39rzrNuSuoU3151ZcnvxXKKJoFwv1o6P5",
  "key2": "4LEi1wJ21Tbhr3pPxBLkHr7FaYomE1xSFhyCnAHhLeiBozJLZR6Nph5qKudwUTwddEEDWokGYoBsnUnTcgELwxq6",
  "key3": "2yWGSWAZ73dRvrQjihjcJEVWzh7rvss5BysbPLSGzPLdQGF8CRASXxQLxk8kTbHegVcS7MQUQ1zaLoEU8JDh5gqG",
  "key4": "5gMDvHZvZ51ShY1kDW2TUqxRyfZWitDBeYL7mQcQ7zoBubJW7Vz3UtN1nCb9m1NeDsTXodmkvazTuftPLhjpfctz",
  "key5": "yz5iv6L7MmVxTjUkNSeqxpyizBufG5B83hWXu5amHVGsHaWEM3BqwbaDt8qP6TRvFpttvinfJiop2SWUCZLU5Rx",
  "key6": "5L5gHWXB7becmi6vEgfodesaoaNoNVHu5PAGaa9o3sbVSRud413da64Xc6pTReXDEpQ7VPMdeDBhGjXxs8eLJqzd",
  "key7": "5tbdY6RjWmEFyudWiD36T7MqG9xbhnYSchcP1wkMSe15nHntfVF2EYanW15X7vozADZ9UpBhve7GNbXJuNtWqVPA",
  "key8": "2LUezB8Le3fhUWorus4oM2bbEG6U74nSbEBZXGDFTDykyGhAzGbCmEBiZVMd8NkhC5FM5x1HrCrB8P76mbgoPFig",
  "key9": "5oexxTdTouMq1BvYBG9WZBh5acQfjhk6LHExGuuybJnZG4EgQNSuTr5VevSutKTFh2gdhYQaj7YnqbxWdgg8nLZR",
  "key10": "63t2wgA2UANDWHogfRtCo6aiQEfmBtCbZ7LPxmiwwsGP7wsHM9bo7Vvoy9hRCvohx67zNGnxUG4ojqWJytj5PPCZ",
  "key11": "3dwvMtvn9s6wvY8bWetAu7nF4u4RVGgmKDh1P7N3qaVxCbkvMRvBspFUHJv7by2mFi4CJajJMDHPzdzJAwV9zozZ",
  "key12": "3nvy7pZFGakBpsEGFpwjKg67sV2chKvhkXvoY9ubL1B3jiajEzKN4nJo5Pvf3gJv9rbQ5fQRAiizV21T3t7B3dzJ",
  "key13": "nfe7JPLXuzNcWiojGEKsLktfxwBedSSCdwY3nFjFF6YyQemf5Z2ThVHLN2H36JyFpccp4oVX92iuqFbfaNaKp6F",
  "key14": "3VUVbzY6dupnpRZTB3yKoFPCYcoyppn5iyx64KxESvK6BnmUrLs5sMdJHYPaE9EGqoH9BbCZExFXDtZXzXFDqJfr",
  "key15": "4pw7S79VXHeZPo3rDjn1Ctxd3JQjurgjbRkAR8brueagWjdMhcUE5nSzN8D13LS7m5mJXPZv1Hq7XaebqNstv8o",
  "key16": "2G8XGDVHUt8xPC3WqD8vhBWu1ru5ed6S4eu2St6W1huSwcVDKcAdwCiuXHH8UBVqnouNwPLxR2qKsPe2mk78xFGF",
  "key17": "4Rfz8CYW15BP6h6d4kefdMA9264opDkVQrb4678ejSeTy75E5Bo4VH8RXqggoFABWVog88YboyoK5atdzRcivzwR",
  "key18": "weX5kVv2THXKJNPvorp2NdZCtnCfoAHWqoFfE8q9Sf91dkr5YUXNzxQgVctGqnvvqXXS85B4W85F7gjnyQTMP4V",
  "key19": "5QRJdjdS2x53QfZgs4Hsq6mWEzBJyudEp3ENVjp5rR6AvBBBEm91b4VjVjDUVYzs6axYbQZYiyWzs4NnmuU8wuZ6",
  "key20": "4DJrwAw65KaRf23mRrzdjcr4o9RyAaP8cZxKbgezbFaKC5v6vTfjgHdXmZSfctv5Gr6cHuPgwxSTYmpepAFvgiWi",
  "key21": "2rrFhY6i5E3oRuHvQr4efafivw7yCBZm6kgTkb1d545hU8quTvLcfHvQEKWZAcH8CtPaeigFEua5Viyq65NxHdab",
  "key22": "5qKBDa2Zws4Y1rkMwKsbzqjspYrcR2HvVoNvdz8xmmsx1cT8CYokuwEfKm57aQCjCSU2V96VLFokHXNjZugoNuC6",
  "key23": "3Hjw6QY45BHsZjQVtsSLnrgoMBNLfnbqsLEFpCXFCvjfvJXPPfiTARzWpEUi5y3FLXX5chdCnA4WtfRNq2bKb1Yi",
  "key24": "3TT3aCPCZqvKgGyU4ujAVeJVMB9rFGYNpSQCcyNJargZkYbGPi6FUJdMpqKoYXtjGFSvR3BLWkqJzm5empUG8uV3",
  "key25": "3oLQA6kysbbWFTNcZauD8qRyUWaGuxtmHpXvtRw9nCWqqm43T7sj72BZNrPaR3hnoYkYCBNP9JdZXqDVLYNdiVth",
  "key26": "5E7T8P3E1QCKxtdHb8feXzdHMrVVcTDDyzZzXxST15KWJ82wpWrtmBwBgE8u8dNDMYXTMDXLw3krxjQcyLvBLbUQ",
  "key27": "MwA6jZ14z3EVutYu9RDzwAbsRKu4TFmhNueaQ72JePou3wy9WLcCCyRkNiGW1bP7Cpo3C7eEWoEteezRk8uMA6n",
  "key28": "52tP126G1gKiGzpSgPSiAAAUhQEKag1VAteEdosF7rdu6Z2ruyg6tUcXbdoHNpRiHexWzmzCcgZNx74hg8ySdZBS",
  "key29": "SbKoQkMBL1aZ7vNadNm4MsDjg9JRaHDdjmFS2Mo7Si8ttgp8Kh8Fug6GDnZGbyrGcWUry8uSS2t5UC3CjWAPyUu",
  "key30": "5WEEnPGv6dCgshgk2evRnV2S69kgeb5Q4UgoR8oYjYqzQBaP5EecPzcmXLQeM8C1M1WbCPJhpr5XSX7mwumkx4qz",
  "key31": "2L1MbAPXerjQeqeHokKH5MNQsNb2XWg9SBaknCxkjTBsHcyLAXPxg7qmLJy3kxQ3RArJy19ut1aaCCDHZaBwEiRG",
  "key32": "42rBtztVJUDJQhc3h9iGxuhuPQ2XdL3R9o6wdcz1tkwNHmAGkqKJpuCNbMABHE2HENsPL7sUkkPhCMdoypazCtKC"
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
