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
    "4cs7trtk1x8W9LetUMab6SWryJBhFeVsKdRAdWJbXjKufafH3m4mtZsxEG1vz73YXrgxyPdAH96dskbwFUcHtQzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjPSATeBhiazG4VatXbSaWXB5cepkdF9HWKDYDpCJdLpipvYdkeXVBkFKkBwFcRZTjTjD9eNTWqJUvmkpWnhJzy",
  "key1": "4LqAQptf3wGKcxgNBsYJQVuEoUANEEfLJwR3XHUGRdGUrjZakaGUjC9xLWDVW6f2Zj3qoT2TSsEEJZJdBiRXVdR3",
  "key2": "nwHd4AzLubU1QRf18qMp1CNZVa8a5z5cP1za7DDXFnE9C1MSrzy2v2spr9Ax7L2qp6pwRhqoPrVE3baMfoofYET",
  "key3": "5cS9VZxhkgmo5HBtKxy7MSjHJc4Cx1go2BwKwzpCdD8wUc3gyK39rTJyxBea4XKeypfUY9VqP9RTUv2HFUrz319E",
  "key4": "2foN3ao8kCjNNpidL6TPhPQ8ZfFscKF6KTEzPYMk4WYb4mj8evb8FW7Jp3tj7mYwU5C19jFjjMWKqMJQ8tqZwqc5",
  "key5": "4G61NR3Mbf5E6A5jfuudJrMF9hKskSBbCquA3HZLLdh1LmU54RQ6puwsPsPoz3d9wfiiFmfmhPe3Z6TSsr5W9cfM",
  "key6": "2jVJrLEq3gKoMAgNKfCzU6hvmqUSibNvxcTWrVmkGQzxWtCPPLPTYZf19Rz6FCc6YJ6USgsKJXR7LQMsaegNRQXz",
  "key7": "4dCrCveTEXykivSFMF6CabqeGhRka8UYqPRaxp6E4pwhnbeD8E3j7Q5HWfHQTXkgsqut1wKgBSzjJKF4VENpXWxA",
  "key8": "2bKU4YiiDPMGX5AZWjdxvp2yZt2MQ9ZoFVWrf2LN6YqVd5hRhmdVt6p3WCCyEq9ds62NQf9fSyoApghNMEz29V9T",
  "key9": "4A9gPZUBHXQa5Yvq95cJBKFbfwk4uatFEvPNkayEK5P2mVQBkx1vvhhcPba7TfyUjwkXHfDheCCp1w7PT97Z4svD",
  "key10": "5Qb4u9MsMJzpv63ZZV8uXvWBSMKRzjDACijfpUkDRpCM7oXuEbZHDvf3iBpNJDmHccGDpiaWsD1MSAR7foCMraQ3",
  "key11": "4BsDvgcPqsSyhJ2KuhdSgJuJWfGKQMLJP76ooLPw5krxrnX8bHwe7JWmpyabNcWmc7XHiD5qPLVP2oqpjQYycHBv",
  "key12": "2mxWG2n4SAivmGs55TctnSsSBJdddb9xYvwayAu8ahm3hif23sALtVRnQQn16qBENLpcsPVJXRxtVXVdDVk4zLpm",
  "key13": "54keXg77EpEF6b3JTqJ945tWFc1FZszWcSReWhkgs1pEwjhyKtiwSHntsad6MVnbZDTk7N4KLGPCP9NjE4NvRqpL",
  "key14": "4Y1r3KnuZerTcCJ5NTeEC54FcWt8XZfgUEgZsNFny2M53HocowjXLsjxxLMHsvYvVSLvYSc9hQMM5nhfDiJ83WCU",
  "key15": "5jWYXJdvJN2GN3E5J5CMRHynLZC5mHM55He7q58bf3Z3e1wv99aqNNw48tfR2JNmY7AxdMdmuuYR3jMxDWsGdso5",
  "key16": "2kXgQ7a7syyZzAhbW6ARfbRvD5hZ1DmCrYkEZ5MqtVULo36QEdYxryE3czM4q9VbN237L5UuyaKBBMVKk5DNH2rg",
  "key17": "4t7TZ59iY878Uxp3kn33dMqQGHJYnASp9rSZDngBdvHtcKc9D7FyJvcAxWHWnLEJiS4Qr9xVVswMGVSzy1E5P9QR",
  "key18": "w4ikCJexTRHs6PbMZrfRdvihsWazkrj4xgKGi7qY81HPVJCk7cddgUFiAnUtJYXTRzZKt9yMMtPq4bCMgsMKDPS",
  "key19": "2WrDVrv6pVe9yv2pqDykorBxzzPv26SQ1amkhEEEWFbDH38H7TVQzQxym565R87dc5vcsuBUQGCWmJZomAWQH6R5",
  "key20": "5shsVNZvPDKjhCZmjGS9hie6CWTckzGx3Pvs5TjQdGEvjBFZ4bj595LHmgBnU6eE82JmPvmFHoVgLiSvsC86iZAc",
  "key21": "3SjidjiFkxGWmNvebkPTneTYsn6vxPbieggmcCthdk6PxBuyFAYwhyjmRN2qbaqYPt34NzNrct97Kp3aQmjBajHU",
  "key22": "5EnHi8AtSDP2GECDziWEcWN3XK2dTTQGSvU6MFNUbMhN6pyLVHdM8bHXAbKDJejo2zLEPeYskr3QE6Ezg12UvBWJ",
  "key23": "4bJ7nAamzidAzBZY6uoQcvDpoqQPDP4fHq8EVX6mrW2MdK8XAdJcNxwBbz6N5CcaV5rqKHZcroQxBqpYxj7vYnjo",
  "key24": "3ghiorsBnNg1s8GB7K9JUTUaMDaTu9RmsSWbnttwXWdYRvRHzxeodQgbBZzj3eHAAzdnrQnHbZ3R9mHVatYSZNwx",
  "key25": "5fLTLmimKxm4tL7K7ktemeMer9X3NXQdU1XFTtY2qTpB7EVqvAohF4sbktiJGy68BHni1jESPkVyR4du8BdWGse8",
  "key26": "9bh9kK4jgEUfreQDEtKXB6HurxQ5LqGPxdMSLMigWtcbY2DexDRaHoLohA2bvnoiTgxPaYfzuS8YL4QWBBPFPCW",
  "key27": "4rdYKk8FGCeAy5kLhRp6KKthyGekfcUWMFxf5EKSBLRVtkdZK4DaQ54xpc5C5W6u2PCKXAtxi3CYPXU8Axie5kUB",
  "key28": "YzGhBEVTeLzs8wbtATE8kqRV9CNVKi5NvxUyiWecjAxAX4qtLPuNHz7JXUwAigdN6BYFKBCuEnUkvXbichnC4Dg",
  "key29": "4BxQEzr3e9uhTsEBBRCS5vnKcwVABwn7JBoiXrJwx2BEJ8p8ZNHXAkgp7x4zcH3y8NGXZ32T79uZANH12JswzaSQ",
  "key30": "2p345fbk4uXeXsmnSPevRS7zqHmPBCEKNsRuHSUYN9HfTcBR5RKeMwtMUmbVZYeWx3jmiT5jxUEgSBM7oHr1aDf8",
  "key31": "24CzV37M92Ccf9uRpqfD5ZRwyayrruMvqoyG4J4Suxmj52tu3guweFnvBWeqgrCf9PPhUpJ7R1TZgxCFwdcfHCkQ",
  "key32": "RombyqeEwBgmhmpJgjZq6sWk8SRu7v4KMGmwQ2Moq7K9nZR7j5MTcn1rqvb9zxNrkfrxcKTHTMj7uMwzStZivJ6",
  "key33": "54NTKPkNwvQ1cpNfPvkNRWMyMFobM3doKKypkF2oQP1X4JrMWavzNZ7sVYdyJhNuaSyKk6p6KJbEKKuD3G7DCYen",
  "key34": "2JYHYND2DkymjdhowxowKsebMvFqJM5ijKBhM72TUrh9WYmb4wZcBA3pGdoXX5mfjT8r3CNp9KxMqpTzxo1TDzcA",
  "key35": "57UgNw3SoXymrAZBbQYwS5HLduAVhUf2UVicyZqLJt8Fb1AUYwkqswgK7KJySqboBs4bFK6UGnKV6VzSsJGRjRqB",
  "key36": "5CdhxXUqYtpRBhXrPVLNjKvTeuVgif4WJcgcdnhMgH82tPTrroYUBM328Wn9SxFZz9ctfeTDnfcVdMC7bDUwVjyX",
  "key37": "66E4Mknhn9sPFg4F6LU5KdZC32ftebWzTrnCgbBFKmKJMrMBGDscusK5B9XkRP5FdpxvP1fvcmPqNK3RtgWrkw6y",
  "key38": "49Kt9bqrwwRLc2zCJimJA1Yx8iisPrSN1eYREcWJhNVrjWAseA77dxr1zNL5socEfnQmVYVU4DMw86ejK2A3xwpN",
  "key39": "4ce3mNKrQpuB1CP6qwyJWnBFMVrGffMz6DHbKyB9pNoiR9GVYrhAf1w79PMT8JA4VwWo8ZRL2sLW2cJoH17sdJCn",
  "key40": "BHoBMxgknfARwmoHyTaxUv2NYhz5Wj7NVDqLHkniWHNZdC7qeuCyNSytdmvEBK9xp8ZMZdXRvp2KDU5daUDjPdQ",
  "key41": "2EoZMfjQ63Cv1WfoC8viGdtPcoRWK7jxBccD6FJT1HLgp6UJVtHLbdWaNn6rzUB4mbwkqKV2emGrC228UfswBMhw",
  "key42": "5pYhDU3soFmGx6mg2jxF5gWroNHVwwnGCJRGddaaGPyyGFwDeAEaPXqDkinpwCApFmnfszDWribjY8Pz5wFKo4qV",
  "key43": "5MNV6YMFUh8fLkkddijmniEJkpJMsFeg1zbhRa8UzgXX4kNKhUzGL1inztGg9iKHgRQy8X5qtKanWryAWSEq93gs",
  "key44": "39UYL2JR4rGNxMUetyFr4Tc6FAV7rwY7ym91JK42Acoan6Ff7f5xn2X6QTG4eHPTYMKspN52AxZjt9eArA5gmxuE",
  "key45": "3RZnZ94UDh5uDJgNsT7yEtVXr8g67Ae32YpinL6JLCxvvG6atJdRL8mTMC8BHw4iYSTCJVYjiU1T2RrJHjrzCgLx",
  "key46": "5whQQJjSiW3oTbFVounhzUDvF5eT2g56HY9TaRrBVuCdZD5zmtLMFgzGzJnfegUMDKa3Vsf6KuU2ymmMgezorton",
  "key47": "482bbZ9TTVJXdFKFVXNNraGB1ugBk2aW6wYRzgVVnYdwbdnTB4zeqYAnagyxU2S8U8323gqXb5UTHRApBvhTr1mR"
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
