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
    "4EqtXUsUjurRE8N8e4rtRdjLdN7puzZ4L7XBmBebrCq7dUgYw1KQYCA2TDnLYs781RicLsRtizPh84BN1ge1YjUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43gmD3xsEvYBuJe77bbEno1VM9g26twrYR5LcPFUNE5ELqReYfmJ7ZQ47bNRWcFw9fPpAcBfC5i5P3myw5GqCoif",
  "key1": "2CuZY9izXyG1Gz5UuTZY1tHSJxGffNqong9bUGc5uPt5Jf85AqxFwWJvfTfPqZgbCvcYTgddL8gqchXS4txFwGks",
  "key2": "4vB9kn6CDDU1aw7w1xvxaUnLwe5HMwgAB4Go4aZFW9vR1gMMgHGCZneW1pXoBmahMQp2z8DgqQidDLAYVdaabksb",
  "key3": "3R2uqNDe6bRp8J5nagy85qw8Zgjcc8R7yBAYpTP9KZnpzMpXAKnqkQNWqbozVbm9Qk48FQgBSATdJb3pddRsHV5d",
  "key4": "2Z7QkpdMkcHuRjkMcWcy3eoN8U7zqaEagJGomDGREoV35MiEjWkF6qHPUVqEbrZ9DWcsD4GKFomXtMM1gdCZgA6A",
  "key5": "4veVL4edaCrMwTv3FQbJYyEFvF2gTNWTy2iU6bJrszh4Q9w3M36REe5gyXRhF8Uu68jwDMnzYhDMnNdR8zxuztgJ",
  "key6": "cS85Hn8Vn7NACtpYBzF7yuHMEUPLQ5oz5We4ij77itPFCMj44Kue76nFC7ESYL2tqbUMUcPTPhPg9jSzogzwJLN",
  "key7": "5irzcrckQgxT7m6MvoseC1JjbGKp2QNKUr5ZTFTSgjsE36ZADkxPM6reCxHJmUuvBGwL9xPbwQEC3YGe9LVuBtdi",
  "key8": "26sd6LCq9C6doWFH1bmMZhtTuiH1B3r47ZWyfQ5yJXEMzmJo44suconFQV9iwFtE57tyG7WmvkFsLKuiscTDZsLH",
  "key9": "211wSZYz5gnQW58KXxGDr64aCBu4q6tpsFRik358hDcwDLpcG54eKV3vofvapBJpZpz7btdUN6v3bG3933GJUWmY",
  "key10": "3WNXyQHief9nT713a5VuFCGwNxZx6Fs9sot6o92x8wczomvxPhWJBwdxBy3GAYYbdysW4V66DftE3aVNcJBUKA3h",
  "key11": "25n3TqAkY9UMGYqUMiHKU6Mk4ggKKcA6HPumUgbq3wHFWt8nJdzQM5BE5gtnYXmjyxD5d53kRkNn6RFprZS3pu2f",
  "key12": "knt2uLojBpza71Pw9Cxsto79rSavhqzF5bBdffb2rD28zv4XGsTsaFfFVdceKVvAhPPWpoecCDp5YDgqJUuDatj",
  "key13": "5KRf65gEGgJCsHezJDhy6dZHdHSaD4UNZawbNVa53wrHzanvxMV1hJPUyhgHWZ1aN3SPKQTCoNrJK29BbKryDxMY",
  "key14": "2PAHpehFkJb7iqcKaDcW3rc61ZgyEFE9wTDeuZbNxPAV3jUYM1msN5etAKkH4JKGJbobQm2BsRt3prkZmmRhiitL",
  "key15": "2zyNN4QDGzcMNYQdUrVeYQz6MSajbQp2CVpC6nfzBw1Rdy6oecHXEWLvCwYqaXzGeMxsjfDETuJW7S62YFZccuQo",
  "key16": "4ECDc9QHaVLUqEsjJ3vi2HDSjqqTwCZfFNAy9P1Hus6y57dq8khJ46bWpLAKKyc2weq4wpYrLAxWFjyuBKEt1Fu9",
  "key17": "5j6wH8vnWayVsJmL9ALvack2iNy678EGDycUbG86MrAt1qqMiwm6YBnyxQVUXav9XHhqo9SsVbmdRVgf1Zz373UR",
  "key18": "4LcxoEWCiXN4iYwZjTCEshHWYWaRSkFoDFXoxpaeg8bwWNXQF2UgG6YaZ8GU4Wjnuw6zHu1h78i8RpqhcDufKBCc",
  "key19": "4j3e9UWaEUhj1i7RMhAemggAQF8dcYyhue5pk7Fn3YsmSegU99afAzcZZnENNfGSqcowZ5L2JTr8CW7RBoQoYqC4",
  "key20": "3Rj4jzkdQHMAMNx7AP1stpP37xtoC79G641mA9uFwi1N14KEFHDuB8EVS2m4TP5oFhfQSvtbQamFSLkyE5pKHDXj",
  "key21": "394DQWAB9X4cQsfVC6E5NkEQvv9qyp6HMuNjB7kFgN9R5WavBn2ojvRVd53UFkaZqxo6u8wm5u8wzvs4hbLq6L7m",
  "key22": "4XgfUc5UBaVvNomwUeMsXNYchinrgpLdGWV7snceNKmBu9pw3AfwXkQPTmLcgAUUKa1j6FsNxuvT1eEySDAwFKba",
  "key23": "3jg8GhieeeDR2abxqexDeRReTPAqnqtLyxYfCvZ3vQ9rBcpGTMh8z2rKnyREPRyEEpSJrJTma3UtXekTKfsvGAJS",
  "key24": "5Jy7DNAbbvdj2cMbjdcJY3G4VvF6tsKBGskqNkMaahnw58hHFuvME2GZn6YZNZHE2ABvatVrZRGckyTqj73StZhM",
  "key25": "34Nmw7uVb9v7smdCHX2CBJAVnuru4xreiUytdvmNYZmKDCTRQJNwA6pAokgZGtbZFMXQnDe8max64dXFE3HHaV1u",
  "key26": "3nhhSpDtX4ALjvU9MBf5oKgGCjbPqY2nnmLb548a2TrtG8H67wqNV9qXQj3MnUSNxTzCEaazunDXPRjD659Mr4Us",
  "key27": "4nvtZq4fRXhRcySSNXYrHk2p9zpAKt5KRdZi3ByG2J3c5smcX2mesKgE7GEGtATsvfH7Ssmt2hPAhFppu39eEkc9",
  "key28": "66QpSHktd6jcNncignYizqQHiJ2yBjxhLm79MnNTD8pWggjc3mrZx88XAnzHqjUT1McneFiy1uLoYmHQimT6DKU4",
  "key29": "67gQwgN8mDgkah2xqic9Mw37itw2SrUwxA4gKpAwyMaZLrqJFkSfSDZnRBYmAV982UHWkFJQXMbUFh9FfESPr9BE",
  "key30": "5HGcuMvee915yVaPcoJfjNSKfzUnsFrDDC3dBaGzd9M2Gfqci5ESTxYELj3JLB6UkmKnoWcaaKU6Q5dn1QrKwbig",
  "key31": "2CbHKi93zftiSHLLeUPtUTWobKfhM9oJGY1RGzNZfQ6ubS2zLtrZT8kH4F8zcWFWVz8kfntmjTVpxrbSgo2t6pAy",
  "key32": "2fEi9tt9Nap7ZEPr6xhbvo6HghX6Vvsyzip1pkpJAtS5jmXtDuLnQ4P4YvQ2WwcJwGEWx3Ejoy8t6ZMXsqKvFQhM",
  "key33": "4eXQxg1KWQzWo9zoiPYcgipu2oGNR4VBeSxWrkBZo1AsuTxAZ9GgLwHtEHiyS5YGcZaBe6Z4HWuW9D1W9d1ZFmmn",
  "key34": "5sUQDp4o2Y4JDKNALNHzVfA2hA73ChLCqtJVR8zACzzohyxSVQduuV1JxGftu4MBJL4Xe8iC7WzHKyoJNMsTyTLD",
  "key35": "5kgPub5NTmuPnnQsojGVhBvfRPiB6Aqwxcw3zvfEF28vcDtNndv3VCAfnvwvQD3TmZCwB1AUroQgKsuHLVkQnhyN",
  "key36": "xgQC6oKfxEoV238yg2FziAu8wzfNSETiJvJCDTgNM8GARyYBS3zdQLyeaXeqqjcGbfCiE1gprbFspkQAF5X6mqX",
  "key37": "3ye5joZi6yVX9nERCGJVQx5tSn57gZLCc1doxs1FiXsEjYJe2xa4oFL7nnfcVYrkNzDj9Lg8LYtgFESgLK1nEXLB",
  "key38": "9yZo9YyRuvKsLLmSYSatf9mKoXJ9JcWMhEKf4cmJKKUEPuLaBQ8xPdPkYMyK8CfzxJkZUTPJi7cyiYDQEhDxhNh",
  "key39": "4XgTkMa2H6mgVJYB7AH6G5HPo7hkEhgWH5ejSib3kLzTE8T5UTACqZzzkrTLX2NoudhGUBnDtoBQngKymoXnxj7g",
  "key40": "4nSLmfN2FxZ1PeA7T83HCQCTXtz1hU6qrjoovRL7fwN8PsUz7iBC8gpbY3FnDho8dop33RyYQ3ZjyQz8mJqYGLEj",
  "key41": "35sCXJeyNfSwH7HQGPkrdi6mn9EJPcE8GBP27uPPmDqGEZcQ3CX9Gd4F3VA3ES1gSSkZagyLmbcP4dRFMMmoFEJn",
  "key42": "zGqBe83AzaPuzkpG4W4aQB2Vi7wDBU9qHvxAtEN4oUAKrCpxh5GifWAsKUDnHyk6cWH9of85TEfPzNfTXsSAE2w",
  "key43": "kQAJSNZc9hHQfdYXrxqkH8qKGXs9xmiFMu64dYwFNE9YTjSffKm4DEDT4GTxnDmaLoR68KueBhut92Kb6SWUdaP",
  "key44": "2DyqJTx5pfa2pAJ3iDCFC8ASczReJafBRmSqiA9GHVT3HYnNehtVe5u9TMDDDDjFgZ839vC4SVmCcV3A24sQCez1",
  "key45": "227EePHbyk2FBZJmSzf5M6RLfe4B5v6EKv4qXTGSq78BDD4aUQVhAeJJvYABNP7BrLQK7jDNVYvzPmEvZuraeEyP",
  "key46": "3uE3HTLszm9Q7aCFFuMfrmTzUQFeLhM78x8i2L55igMQ2CeUjbVT4ptB8apwZBXrQxoF5qtKA2V57ytfeT1JWo73"
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
