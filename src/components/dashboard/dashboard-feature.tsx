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
    "5rhwA9N8PVLcE921wNMpLQw9ZHeoHXncTWdYDAiPDnXAWcqMoB9dieqj6T1EUJzQgFXmE1YEv6Gf7WPWZFmLeAVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjJ5kZSz8gzxa6yFK8meGYpaqFWycYBL4AdVama1GwyXPnvTd269TebeTsctVzzUyqGSYrciuNtzYxayktt96tK",
  "key1": "5zoQhLZaHctftN8bhWNMAuxzCC4Bxz7PiCVpUpmXGHzh7Tinf7fBERSJyWSLVqhrazNLPeaHbSCp4Tk6At4fkk5o",
  "key2": "SVM8nYHsNyb9aNBP8D1ZzfK1xasKiqqJCYqJRuvQZfDagY9amAm62ocXb3LxUezTxVeevJiqMwczDsFFMcEBMXp",
  "key3": "7YcVcrYoZmjTqscdyjYEZ1SgDVUpsvByKat1j9XV6c3TRqEk5VJiqtRPJhefJWucrQLBqkYQyYpJBiGPF8W4Brf",
  "key4": "2qCr7vS9HUxXhG4xKtFLVakwaRL3RgZmiR7gBErv3uB2YiQJSVSG2QSqXb33HnuFHjKXWotXQ3iUbexDC3ztjAUb",
  "key5": "4D82Ud4w6UtJpidQERNJepP9Xd3kEPqQSoHSciCygJFApejq2bPfSngidV8LcgSDrmT4BVhL7uvg1ZK1jn6NBMyf",
  "key6": "MWrLKTVx2Pi782Wxto5PLmprA772jfw2M845WduY3SudrbygNS4Hcsw2pJG5P23eVQSYFK5yPSHKuEMJTnotF7c",
  "key7": "2sq3YctcVuhRfvSTYBoGG3XbrEe7ARiMSdckcNzjwnnHYaawfKHKff4q4hd5YVaqDpteWjuX893JZDf3QCpRQ7WL",
  "key8": "5k7Zvfd6pzgPtS6pBaRxVyZhWnTdvtC928Cgy3kdnt25yXix4MKnHDbPMtoG3ALqAgfrr4WwLnTiaqoxeWPmL13i",
  "key9": "3oCDVCfRJXrX1rXHB4kTZ5Mo38eXiMZ25jf3AS2fb77kioUE5JE5L8nA6ctN62zQs7n2nn4S3NMW3Mb26uvaf6k",
  "key10": "3hkWBrddr6Yw4DR5G5EVjLoTgdwhT3AEg3iT5XxccvBYFQuDMbriwrciB4zv3dWpfauiANWkKrdxqRZDdaFLqkjx",
  "key11": "2TEwuCWSvMmcadYcSVaQ4mRywFDQ2PsTFCc7DGZmhi5ybnN1dvpYBsFzVHXcZi8AYrUQgEGTJNH3moapC4rEA7ow",
  "key12": "5XW5vSgs2wzsvjbS9VwdvfjRi8gUcWCHV7KXgH9ycMnS6JgbGZVRZRxuU79tnLYjtx7iHLG6MezixYUAV94j1EBc",
  "key13": "4SvLzaNWfwfrLwYAZKsVbsHNRMHqsCrT4cPnwK9g8CxbEd622nWZ98iKQh5oEyNmajVpYooGDRcJWpj3MWmE2d47",
  "key14": "3XwNVgq68ePdRbnBM6wjPff8pzFr2hK248k9qYuD5HbZZsnYEd2qxGSNFNAUryZqHexJtUHCA2YgnySdBQzrogFx",
  "key15": "o52AApQUP9QViyhvUxmDCbgYQuU4tHQJ7A36PFSd3cGmbGGaEsfGJFr9KiTuVV2YPUUY3WaBFH8fRn94oKzpUKo",
  "key16": "61LNzEimZTBRAGYjiW79aKioJJFvfPiaeCz9mFVvpxUEKK4W8QmTKyfAYR1sX5EsJtQAV1EmngBzRXu6ghemrEoH",
  "key17": "4A7CUeRkxnjHNqtpkHfoKPfektKCeSE81Ycf8BLsL5jS2zfeAsYk4YmXXUFeXKsZWausiNaDpW88s2B5DCu6xdNE",
  "key18": "4uv4dAitj9eHm6XmsxWr5tHQakpPr3DsLDM88mwAnEgbxFW2VKY8utN6gWxMR7qQm86VeJUv1qRY5tMdHV2cXdM1",
  "key19": "2rBtxQeHzYNyjy5zLnsnjPh1xtx5ybYuuwhtkmiZzg4L5nXAqzMi1svHTd2UUsE7kusmS6CK2kZcKPfhaZCbC4pg",
  "key20": "65L6UEPT8J1Czm1aLsyLmzfpXiSxiE9Jy9ySa272zPcNEYT3tsDiGnb91DyQZjvSKvCz6TGE6n199fHXGHGJxaXj",
  "key21": "m6af5v3s53JYqbW9pvgy4oLmbkUWAsCxrtAyx2GazFYWGbZCsNVPbpXXMg5b1m6igb7j4nNFJwch7poD9NWWrcq",
  "key22": "2cv5HnA4JxNAUz71eksekZwTpNUYCAx2p9SnnWMUtLpQ9PuNW7RyjEHzciZSPUwYT4PuWB39AH8QNMdszYGxAH7u",
  "key23": "3vrJEakT3JgF1hZVMaRdMaEsWd1cWScsURJbUXEk5AgbuJrcTky2jEbv8kKJDNP4EpujTcWAaHcjJv9ihNey2Wm1",
  "key24": "3hPXFvghvZNsQNw4oZyu28f34Uh9aQxcZBdR28G7XB3Yuwj1NyjswXMjXjGQv7espbaYSpGqxWZMyT315fyp5qRL",
  "key25": "JTXs1vdKxFZSCR4GPCQGdi2QDUF9BJcugHGmGKbcLVX7WmhhbeKur3athuAFKqpRHEPTyerxs4M29dpjzn9W8oQ",
  "key26": "3sg7FzCdiMnGA4Ek2tT9Y2sm8r2T38yTfAZcfQ6iKWCs4fnSFKnMXoLSXh2pfwoVyVyLRdwzn8uSoivuePR1NmaZ",
  "key27": "3cj4nUJmW7sowkYvCRuFiwqQ2v6LutkVkTN2bULwUwTYoTTHbaVMyxpNnhHVqhnzxf7eCGo2vH3Hn32AnUVFcEUV",
  "key28": "3KNRGLMcFY8LVi9XLui78fNRmEod5aUvRenoypYQ5oVeL5iHc4uMoxkwhitJG14MK2kmPTTaSenjB17VSCdkWiKF",
  "key29": "3HUncqeZxFKGzmEw7LSUQJjDJSHaWQweYwmL94b3xhZLHh1H6uvNJt65jXhh99qp5S2RsX5ppe1VtbRuwH1WTtYX",
  "key30": "4H9sAR1o34CFdh6dbc1rE4FhWYSsYtaqf6MiJQQisUR3BBCujy2vKBhdUjxBnKaaD44ZCwQ4U4KsV3BXgQSo129d",
  "key31": "46kVGyiSeF4mJJQS96isd3TVGo5g4J8pzB1n2nEuTm1bEhTwJP2emuSxgganGdGVB1hmK3zEi1cM2rsgynD9y84J"
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
