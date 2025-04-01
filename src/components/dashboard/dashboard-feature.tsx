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
    "3cFJJVnVTfSYvEaoX7tMfP4yRb5Xn6NQQu5TQ9UUWnaXZ2sZAzbQWjFdV93ixv18F2F42tVdwzFFdjJSi8gqSjTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LV1jWFHMogeGdxWzpfrWmJTDUfdKXA5dK5staJ1heDBst7GzHkmwb9iJvJ3cLqfyujKvXeNtqz62XHsNRd2XuyS",
  "key1": "3CFQJn8W9AVJzet1DQgS8kPpXiwaZPPbJ4ce5wU7CfD556C5CDAAe7xxJYLzY87YvcaqgovYVgbv42VNr9uaKRaE",
  "key2": "mDBTrAhyHCah7adGL5WeaRNN8KxW49qbv7mmJuSvERhfdd1kSwcCxWbcrUHiB5h9iLuVXmcXhiw7TMoooGaRuiP",
  "key3": "3Ve1a3jSqZj6jPAosVqVB8fXb64NTRGgARBt9LJax3TWN8awPYvEEkdfjQYz1NGWG5ThkrB25TzVN4uEKDXrCiF4",
  "key4": "5b5TdfDNTyrzNRCvrXftQFAoFc7vXpeee3g6fgdxJ2HE4GmHPTmh5T9UKm6NAYK6esASB6E7SfsYDSUeV2rJcoFh",
  "key5": "32SfeC69j8FSodqEb5ecP6oca5japptZcgDcjbF4HEKTkARHTKSJqHRA8LD5GWUfrnibjgQvQHmNeEVZeDn2XtBu",
  "key6": "33zuqDxrfLDNYUnYAFqMjX9RvZfXhz79tE1ESUKnv96EWY9kBBFbVmaGBwJLA2WjHHgryLu39kiwwGLKw76xKsG4",
  "key7": "2rDPQkzKKtatmWn789o3t89Q9QLQSZJAxrVAkEwnGjDC3iHsQzAKuV2aXmeB5cyHkZvShV9xwq3EGqmCGQVSmpnK",
  "key8": "5awFWWEkS34VoZafX23vV1QAgGMZcM7TyRQmttfPgpCSedrPs5MJffUpn4o9KdvFNwzxuHSCprMVKgJJd15Q4hJP",
  "key9": "4YhtxXfkoCaLDGVnT7cUkt6XsjjUSRhBss9bbd9C3iG4DfXhGye3ZYRy9WoFBm78UquCifJExYcE6WGgrXieKUer",
  "key10": "5SvUPRder78hiVf6KDauDxhbvs4Wm12Hw3TBmf8LCm7FAuuArkLJdQLJbtpdUYvmCDtxiaoqhRP9fVDmKkqDiUfc",
  "key11": "5BaGKisRrVmGvXW7jQups7V6YDW4BkV5u6PBCWe1BQmNvNjJTXKNoFFbr2LDiybCnkQTAznsNbo3bxJVcgToaWBu",
  "key12": "3SRBwHBpQHq1f2bKji2S89pMG3z6MnNsoErYNZ9hWYkXoBvkjW61WEvPAVGCZPkZoyK8ximYtB4Rs7u8hzbRfmwD",
  "key13": "5SneVYbPgT3MKikYzuv6vxjamRAfGGph4YGa9ho11Y63qcJj7BaHeBRmvLx3X3actf9PGYUG3ofwpcb1a5vnEqvg",
  "key14": "3CyUXudWh3vDK43CeqK7sXb42cefvC9JkwqNU5QEaHG5uZMvM5L3rERUZyQuAEVcCw2PQ5pUjGpjBB53viZU5tno",
  "key15": "2baZG2Dobojp1My5Byi4i11sRd2ZvdfdXYVBcMiBvoAD3ZTakowvUbS2c1THF1dCqKGvJLCMrwRUWSvTPkVwppfi",
  "key16": "4xkGpSsQSUw36pQjkPeXTE1WB6bvrMpyZcGs9nwTLm4pX9rFry6hwtctmGupUyLgKTtTMouD19xhHrWHRSzfmMXV",
  "key17": "2HghwKZ3JbiweGYBNubMDcYMmeouPM2hWZ8gCiJ2GRUZJBSwbQtA5RWrkhvxmSSZ3LC5a2h2mxpbFojGU4b1Tcm8",
  "key18": "4R1BkZct2i4mDLF63FK2M8deKdBMtGc1jyN9cZ5MbH2LJbfzDHeFMAY3XEh962pQkGtoZru3cDAd4HhVRfcKa8na",
  "key19": "4w4CHsvt1owSLYZt1ofdHKVDx4ZrWQZJrNvYUZwDWVsExfcP7tzmvwVKkevTLtiKgtod4SE9TuNPZXeQ39NexuXz",
  "key20": "fampQftFT4DzKBny5gyrsCnjvmBVRsazFTop8Bn8VEYcPBwMUTMcjEsBmBh6uei4CrxiVtmQtWK1tfeH1d591o9",
  "key21": "WS97xNCXp2p8LfzBNSqGEZDaEAtWem8FM8p94S81q9iNt4pCJqrwdhRX6dywcGwXgriDJBZMm5WzNzt8mJ8DEZ4",
  "key22": "2zyEu96V6zP19ZC6C3ahUu6Qsv9tBKzYMej7E76JTRX8vUuYMnjBwBBXXPrhb2WFTHpxdMfRenK2EsV1z9gSuRKQ",
  "key23": "2pxViHX2dsHWRCs1BWwSVViz2K1F8U61C2RmrJTwpb637T2PfyWPTVhxRABYQbLbV2pUqVfpwr9RybHjxHijwQjt",
  "key24": "4hjANWdf9Hs4fmxpp6rKBnoKS5A41DCyXF6UvJB89xmDTzLuwK7dcS52SxHWkMTyezW6rHbgcuXVDPAGveiRXLo6",
  "key25": "3ivkVTFiLXDCaV7NQG4GzCSpMMYLDzAMHmZHwTH3qEWdhZ5aQB6vKxLeE7pXpAre992v2g13amCeLXCtBY54hx9J",
  "key26": "2Av8YV3LachPT5nnMnzZ3tkRN1nHx6o1jPJYTjrzDVba5KNGHZ1bdoU4LR589nWLjyBrKWn3defMzTiWabPKhKHN",
  "key27": "3hgwepTzUHHLjU7D1gKU37uSphaP6mZo53QzcdBCt9FBkAxtfcW7EhhWUtoTJmkvfVL7hmnaPHjCPNfb48AFR6ms",
  "key28": "4FgqtQdRGn95L8QsdbNN57i8M6A79HoMpivwktuAE15TfkxwgD3EMst2FAFnNAbDfdh2w7RiRNNfrfugZUFcLds1"
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
