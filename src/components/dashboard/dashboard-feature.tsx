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
    "66QRoK4xjJkRBsinzH2QJrSbXCuCGPHLhG4sYtmpWbxRH5MVuKiPqi83sUMr47PLYpBR45yYCGwtDzg7iam5WPVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nvws7PhCi12RU3pWqTc9HNxajwYSfPbDVFq7umYfSZfTqkKZw9722RQqkDHreC8Gd6mUPiFqMvQXBMEKmuaiGSk",
  "key1": "3xeizYZu7ZrGtHHKZsq6TPZwJerpfR4wqBXmyGgkUzxCWpuzD5ueDH7FAQSobqVuA2DgQeBvK78t5mikxMtBaFTW",
  "key2": "3xCHKrDDYyVStmLJnsDWPaMA2NjdwSDuHy1yUe9icfu4XxLrG7AE1ZNGCYGztA7EAztbxvdp58WnhtXr7VJTCpoa",
  "key3": "4qrnwpvD3ucpQZ2omneMYirD5ShoXRpsujDVeJ9ER551T498a2qVRZe1wPQrFm2DjKRxACfWZWPbv9kt415DpVAd",
  "key4": "3wiETe7DBbNT7AnXsLmXQbREKwrcTViebhaQtMLcNauPw94favdurJFKSisBDxBKGw2BCYmnKN3M6jJiWaoXLGbo",
  "key5": "5PtY6F12MNKg6hEVX2fXkp3ssrCEbExtiNPoyR5yYYs9p13wTFMzWE5gxsSmdq2sxFbq27btQEhK88RKFViWYpHk",
  "key6": "5KpdxcKzzmR88hbR78aoiVT5C6ZBmRL57LknwSte2Z3G2daBdMz9iR4qBh6LekhrbbQWManUpBGDrTcW9KQs3Uxy",
  "key7": "4vdwZ2rBN2bHDrLi3aXnE16H9mm5eykmyCgJ1zhffp7z2Vb9ZhheWbqXWHTwJqamJSm4Chqnzo9L3wWFVtbmngyL",
  "key8": "36pssbcDWW2UMXMfbGF5a8dtAB4aGoy1N3UyMHqjd5dtk7y59dmS3FgagDGMeEb8CNmsrfPvZQNUZJ7zQ65vugZv",
  "key9": "3K6bHj9HYtAcqCZb25yjVfP91Qmogs4vaGkXJ5C9xJ8YmrARJEuaZkEaSLpqo9zyAfVXDnmbqEy4yxb5uRWg5DoP",
  "key10": "C7QgqSW1MYXjBUqdV1ZUwu6nGh9wNC8qR9cJsXoWCKENvdFmLp4t93aVPLGTaqfnuzcfEQdoCqtas9GBkWoX1v8",
  "key11": "41QmahpfMD5A6mZoK8w5cmXwiNtMrHebDzxErUu3S5hVNqqrb4Bhe6MYV23BwsnZqzgnPx5NXk1V2RxFQrUHBDyb",
  "key12": "2Kj1YKrBNKix9ZEH3SkNCz5Cu1tcJUBUtvmU7eAYU4Y7FjK68zbceWh2DQbnxNSMcHa96D7cRYbCXtumwV4urqD1",
  "key13": "59nbfScFqQ3nPfkAo8ojigCAvgct8CMpsjg4JGu2T2sTQiEucPezB3JdR5vwoccn4geLm85XSuQnXQWcYknnhQkf",
  "key14": "wZRrsyzVqkh7vzpYf8HVsUoPBTwvmNdwg8WtnaY89owfNY2zg9nHEXTBssXZHDhXiJE4kcMSTf1x8dhnRzUd55Z",
  "key15": "26Zmkp6HMVsCzTUhAW9YZ7jR6zAQR8mz46FunU1BLSQZVTv7JGesdXpCC2VhLSLKkg5QJN7XTGKB88sZ88Jo8sgJ",
  "key16": "4YHH8m94XEscP2eiYVxUVNeCdYetzJHZtQ8kkrPZL8BFtQufNoKy7TaFEpWBfRJgywXLRj89Kcfckw9gVR7XnFnt",
  "key17": "49Vdh1PQss4QQJk1JXHDffi6r2BhJohpMRGHDM6sxpp1fnQCnT2FR4CpNFH2yMafMrRsJa6rd7CfY2bi7hjiM7dz",
  "key18": "4aCcQcokRtpobTzExCkzu3X3ZeQ8YdU51t4gNvQKUJAQvW6ZguXs2ypVbWpEy7XdDWwHS7nKF8zDX2yr4Xm3rgiZ",
  "key19": "5iHUACTaTpTkoSnEDFAKgAawNMXzUhTZEngqrN7sAhxVaHi6FTNfrfQr4EYg21w2ThKa7Rea6Ck66XzHP6R4aeGs",
  "key20": "3QssBemL2WEb7j3g3t8J7Af6SXUivByY2t2aXRcUUgMedYKrbQ48ZXygtAv3Ly7XLjqekGv96gr1TSNxsWEKfZbi",
  "key21": "4Zu3FjqMZx8VSaTmKez2t4DL6Wp923wbboHwPy71Vc8TeL5YX1LvSqT6wFE3uiwyWQtEpocRSEYam2964QBTgwQi",
  "key22": "5y3pPB3Hc2p25gXm6FCBk9nbncocde2u6LupHXpz8y7nr5BD8CPbcCDTzdsZon5VYY8b4H6P2dNZ3WAyj3BzFpXK",
  "key23": "3uxD9Cya9J2NbJGnpXraWFe3KfZhMnt7HpXDan167jNJJw5AFs7iWDakY6rbyJcQNgBL3FBuvkVmHQg6yp6NZAKM",
  "key24": "5sRKEDKJDkXiWfDGtiFdBW8f59TJ2fmc2i8KvjzAu4aLdm368Fy1nUDwwcQDUoEHdWAAAeWQ2LKVv3gvpdgeenWD",
  "key25": "4op7amoGHp4CEEtSaUb9scToi1mRusYzBskF4gwoeF4zVvYWUDyHgcWwo5kuCRp42dZdBfTmNYeQbVcwxBkyz6GQ",
  "key26": "3yz2R9dn4Ni5c1ashKEHh1SMNQqvysJJWTNfoAB8xS8KUJHcyW3VDid8pYyKthfyrz8GsDub3ByyZqKPA3RvoYX",
  "key27": "hqLmNbLGv2vNcx3d98Ppdk1GnYimKpodRR4ZPFhbQgTGDcS3VcbTdT7GNA8nTF5CeUtYDkxg9cA5Gv6EWfAXi2E",
  "key28": "2X3azf9WSJDugAES7nZ8YvA8w8KBWwQJT8NdGN1pTh2scdZkbAqv66Vj6DyUXUbsBF9uyURuXSURkSJjHUNGiikQ",
  "key29": "4vNCqgoCFpKp4qys7tmnZGoLV52UcaWGxGDRU5pFUsFCvwkQqViGB3d7VZdvo7pHcXWa1wchJ8Zvd6wxEaBMshs",
  "key30": "28DEyWp8FjbTS6i6BQ96MrXW5W8KeyucfUN4cd3HEg9UyBHaKCGKoZ18nDJHtHhh2ftm7JeNbHYQCDzcK25o7yQR",
  "key31": "5QehmDshawimeiQQV8S1VvoRG4JSjcRAvBTNtotgJt6JCaqvA8QbSaPy8WJaoozURXG2HmzDvsF98X9KSatno6xp",
  "key32": "3wSWc9Vp7gnuBQQFhdC1ohADaY6HE1b6pvfvsuhcs3SLehFj3RtJL3PQ7Y61xRWecowPxnBGeonCtSnfzLe3AnZA",
  "key33": "5yGHHdgpXvVbcEmfnFA5wy5JLLkbcyuDGaP6ko1vAMzNy8EAkDiwGpeiZtvFSNnqpXwYebu5tQUW57Z82Tg9F8Xd",
  "key34": "5htwDDG5nciNUnTxg1fgZGxQEkoAcwFiTeTYUHf8rJ2isHrT1wm4uC5FVSBQ59MSi17mrnoPpW3XnAkoXSvuwtQ5"
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
