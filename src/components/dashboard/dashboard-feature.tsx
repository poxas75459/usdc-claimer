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
    "aTDzv6kLT2jyqGrkFmFYyjH2duNm8KBXziZ9rgD66BuiwNWJjW4uMMVYXppLj58xCveUtGNNsUSSFKppvmTZGPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYyACjNKzL9zDgCp19JXZjPjwC5vn228Z38vSvJsxUB9uJTbpyRuVbEza3Lg61ios7ejvFu13AWUqeP7Y1oHT1f",
  "key1": "77jRfJqwhu4XzGg9o8cRvgV9h23rUXoQx5jt2eB337WsewptsYPD12q5Ypw7BuWA9bkKAvoKzVc59fj7gePNveA",
  "key2": "2mGTVwrw9HEFQEDimqTEGjA4qrCD3MbcmsBTm57zjBPNEEXegQ9JQvCo42YmCDw4tstuC5MtnqbRg43XtNYD1Y6b",
  "key3": "2hWkcStAUEsPprR4GZgxjLdPBKp5CvPTMy4Z94fgovufKdkNeVk6wrwet1w57ofrVZzmyjSz8f6VGfdMUMs2gAqN",
  "key4": "BazBC92rrdPFQtzaqzP7N35YPro8gg2PSpdsjzk7RH9eU62kVRm4ZUkBL8YesU94NtFG2TmBtwvG3oXA6Po7bKS",
  "key5": "2ihJXXx5rndha3EwqgMHg5GxbcbpCRyiUg7tnUNVUGSbUsDVZmp8PknLt7EbArG4YkZyGcre8JnDVG4FozFZTyZF",
  "key6": "2rjAxm76gZJfS4Mvg4JfVFkcJQsAy3pwDYciq1FH7kmrMfyn3wvUc6KrQQWavfuHyR1bzqvAKyM5iQUjyeVjawHz",
  "key7": "3CtXFCZnfSR2qfFvYps36ap2XqkrbqXqJY3EVouKKaRgBBP7uskpEAsdptBvCG7iCF1kS73PeXHh7QbGCZZQBfG7",
  "key8": "5dCMEBJTmKJbNxEJ6rUsEFr8birRVz4s8t7yjJwPFuwWnV5K3ZnFU2StxQCnacE9uZ7ysuAj5PutnJDYCZ7b6qHn",
  "key9": "62hudm6WN5r9FRLxT5PT9bH2VQ1DoiGLsC2c4Wh9irtSBBNxuuoGkUPG9JKRihZ8f9Q96hpKiV6vh9hMcsLhjShR",
  "key10": "2zDMa3cKQfw6sX8NEpUD1tvumqQefg8fw1DuF5YEy9vKNQLmWeSbN1huXpNwcfMW3zrRqKWp8JdU9S3SDS6EHVJC",
  "key11": "42UCFPjzy3acDuzbFXYa6x2xcBLFwEXQhzfmxHSLfhTQeYryYJwv5v6eQVZfe72g4SGnoK1TsiUnkrm25iwZcitG",
  "key12": "3EFxoEY3Wiez5Qx293AVuQ9KAn7c9gWpDK452MgihLM69qiYrFHuhy7cXhLMDQcbzEKTgTeHhLkRD68TxJbU6jSH",
  "key13": "4GQgrvbwZmTMVbZrGFE5kymFoVrtLh3Wzm6hFks75ocEXrbJwJ4Gi8hkQt44m4MSVauutqWUi7vhVUkhhULKPFqg",
  "key14": "3gBb8mncC6JQ6ae4ByktakJCV5giYNz6HWuzgEswhLV2ADFkYPznLB6F4rX4McLtqb6hYUTQ1f7pWtei2bQDKPhJ",
  "key15": "2GS1djhNt5tYCgWmoJnRGH7A241py7GaVV67pcTJrbxkQgyqHz8owNRN2Jh4rgrEScEMD4pii58p2MuM9zUeTxCb",
  "key16": "5sYc4dpwq5FK2v3xfg7CmSjcPSeziC9zL9BBAkWDKn4fsdQSGMSqe6Hh1k7tgY5qFuC8PomHAmiPC9pfxMKNfN49",
  "key17": "3mb3vFHdwm3kYqDxpkgWTHXXWWoc1Mwe6MkqTFxCwSWT1vJkPuFLek1hgscG78Pc9PD2oUwZJRRiLhqeA6qTxZzN",
  "key18": "67q4YBJELZjPBP8QP2ws7c7t4SELfmqSMNZVCczrpqp1PNVFaQBtqSHWqgKzwe5n3Red38oqmKi5pn3mnsycuSQE",
  "key19": "5wfHfT17rUt4fSMXYU11CNUitujg3FsXJptnjnwSWEpLFfpiYVMM6wK5w8mhaQUE2u8T4LeZD9e3UQRbaoBT7ygU",
  "key20": "4WzXzzajdrfwbNcGeFHd38jGg2ihSdduyDg9dtGTdY2PuSizrvWjtBfJdbKq2oW18pmbAiUUygfRxE6asu3XppJx",
  "key21": "5qNjbaRXCcff5t8KnB9FMGGwPcw66qpcLQpsURqSD4sZoUz9QD5gV1ZLexTqeThhGK8mrvtpUF2TAjhXvtFNzZF3",
  "key22": "5zoQNbkEurxMkTGpX7VkcRtJgNfaABAgjcD8xm3Vyo4pTpGpKRCCZKSWspYA8GSmX4aZzBkm63AEn8WbwpfHLJjq",
  "key23": "5DZ4fSok4J6FeCYS2BCyBxr5873Eknn7U7GJJUhgwxbR2HyDhmysXigc8dt18iFZ6kj43rWqiKsSmANysUytzMvN",
  "key24": "72L2nb55d7PXAonrTm2rmV8VTUjMP34xTHfeagBNDX8HMA87FV9EURqfXTej9824c1c5YCS3MK8en9ss1b6FcEx",
  "key25": "64dw7BLhFYZPfs98osNiEZhVrjXjHqc41EorCXABKoAkhrhr3h7SRqvyhUABavyS4eTMB4UBnBdz4uEuwG8qDLv3",
  "key26": "25p6Ljm7p4jfNDgTVboXqPhevsVSM1vJ812uDobhmYhdNZimxt9srMChz3Q8xNjAACzkyLThHURPfdUF1VdEP3sG",
  "key27": "5RsCaj6cvRctxpoYMttDFR2eBCinRtG9uvmzzshL5Fa8B9czRvjUCk7kGUcUesX5ghjwNQsDNS3hywhJM19VcdUS",
  "key28": "5sZpf6qUhqN63hGVGY7rS8zxLAkmuL2nJiXYzUraHwNfXFaU8N47MDQ6dAxWmc1GAmZUpg61V6fnNQySGtAwFvLz",
  "key29": "3q46GDViNVRzMnhEU4bEnobzoFz3PxPmEzCkjQLvF9xzWQwhkCdZEKAnbWheKMSSjnH3Um2jZbM3uZ4tSjd2ViA",
  "key30": "3KWZZqiK5GmVy3K5kreohU7KsA6w6cq6tPesTCx9GC12nsYYyDUKdN8ncqRabwDbqdggLnFVumPofq57rmc59ZZu",
  "key31": "35CJV694jQEQkVUbjMAUehN4TzcVWdFVgQSswEUWsZCgWXSvqUjWUh31m8eQjgvHgxdCRQ29Rh5grGS5McDdLZSZ",
  "key32": "FSrg3ToD85KGHzuFhRDdHMqabxfJobBUJtK8dZShwzAuahCJken3qQ6gCzVR8NoKqKzUxhTj4sNFNECN3Ei1DZC",
  "key33": "J1vR9nLq6QbZWztykT562v24BN2SoFw3jmHktokxAyCF4gqBtke4zrNwaeZofwUx7sKeNaGv8CawsKrCuMA1L8Y",
  "key34": "57JLdyGDxRe3KmLpmmf6Gp8XLk2XTXeKWBujSdokdvhoL6La6gekX4Pmx9SkPs7Pj8LCe2YqMjrZXeZFAkvtzDkz",
  "key35": "3royfWq5G5jAaqGzy4YB6SPXEjYHfbcFGBjAnv81iKb1JNLxrHY9eoccNw9heG39oniyjzKAcxnTYvAyXGTVDpmu",
  "key36": "3SkLkxqVhozDG9F4NGZSFFw3wUFhywnUioKU9xUgHrbpUCCJGCT3Vw6xTsv1PgWCztjdjJjRyweUH1CVszBAuKH5",
  "key37": "4umE1gvaeqvXraZpZwDZ82bQh3gn8eFxmse7ZQt35NXun5pewsyQeMPjKooevEbiXspvZvywTxxsvX8CtiHP3hSv",
  "key38": "KdRqRwrGGM6PLk1n2nPMC3of4vqEuYgrDUisddBpFYm4rjy4xZhYPiL81QA7w14ahs7FsYzMgNDp5J2DYtiuy8e",
  "key39": "4ihZiWzNcszkshj4iCAwxNzkTkr451MfWkSoGsfHoR1CRVWo3sggjhMEDybQr9hXNVmxXyfW14aew7gft7nLKCyk",
  "key40": "F9mcaLmhm6GyjTcpqkBhNkzcL7k5P3RJ3A8WNYUNgA7Sj68tz7fwgtjUypGSHg2KCiipPTo4isM4N8ohxomcd1L",
  "key41": "3822sphkPjWoFR3deAbK398FwBedAzSDz2ZFcJjp2pS3UnuPzemE8nECzDk5AmHPbRw6FL9YWtdRjLtVwY3LNDcx",
  "key42": "2xZr7TJK56S3HE7cAuK1x4c7iLSdqfGRL5rtGbXBXCFmWxWzUneBMfn4JgfLCmF6EnQSKw7ViLLGzFEourqRauzJ",
  "key43": "5tSovvn55GYo9HeiDwntES9jph1dfxaqSz7zsk2pzG5g13FhiKJmRNPwSH6P4Tmah4Yd3ymbxPPJszwmxcNXDMcj",
  "key44": "5h3BEMjzRetvooWwR3zA7qWWwadnY94CVocPytJkUniL1vwxk5xcAR4dZSs4LovLEXcBA3kjBceZ2y3XAQJyx4wG"
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
