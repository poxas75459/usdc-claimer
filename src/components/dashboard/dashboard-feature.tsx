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
    "2rXwdHuffkcMhgW9SrCmXeNS7ftkmZ8p6S8MjXBd9iH122usgtL3nWdbYVbKms5tZU9jhNhQaimYa32NcfwA4DBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkLB3PwQnc8abDspmZ4sPGcz4YoQc78KToSq2SkyTfnA9fzvbvvmFaMhyP9xLwxTWNAG4jBvE2tqy8XgDLZWUfS",
  "key1": "2Ru1ntgfWJtqxncSG86qNAoCzCqAQzEbGZYjG6TPJrJPXrNcN5jsX4pQwUfMe1hmSVmTc6JTugijiWmHdZXtfQGp",
  "key2": "RJKxxNbhdaHKxDXaXmxXdSYxoy8X3gLMzZk9qkSJD92KPRXWdeatxYMtZnjgGPKQkDNLDRxYYov3YXEb8s4tWPb",
  "key3": "3UJREyCK8gDwhrXgzudsjZAzZFzdifdRnFFKsBXU3GfbdSuke8XEd1kuh4TFPz7D7ydDLsFxouKqgUApJhzt5UVr",
  "key4": "5pWTyFhWRefbWgcDRMKAjqgNHSvsoV9fqpWiKNYpctjMYsTjfKWrQh7h4QYTTgXy2NKcnKA45CcERFYNorFQqgWe",
  "key5": "27hPSPuuGwcoV2ct9NFMrS32uWPdTx7i97NsGvwUyVx1qV8mnSnHmoVHSx24JT1WjABSUKUBitCvqt8YVDFnwNUm",
  "key6": "BSVUHckcJku7FMYTjY6D64AuwF1FtjkTrBzmEN7fGMK6SSc8k8oRLt36wEov1qoXPhvzUDAnfpmN24jtk3uupum",
  "key7": "tkR5sE8n5Khs8m3aYP6G9Zb2jnVFYcj111RgJWn751gLGTusS23uJBUEptg6qKfyFsmcHbCaF8kFDVtYWYxc7Qs",
  "key8": "5A9yLJKmQFfmpq9LaaZMcD9AUassY4MeLLdtpBiQ3FmBhJmJSVMfuqGRZR4B9Mjxt9nSyiUnTnsQ2zat6jK21uLi",
  "key9": "3FbxJjUsPUFsXa2rgNKXH1mBEaANwzHeGTLRZWMAA8dgjtRwqhmCQvGTaXdxbqU8yyU8aK9Zu64LH9uLGAq1Fmtj",
  "key10": "5Roy9p6rJHuLY2cju4i5TNRoE1TcbghWXX8tDkToS3qVmgWenh8DaJFJmuNkk3uJ45vNr1h86np8Te3LVcCNSSjr",
  "key11": "5mYoheeiSNgehrRUb83mZ6XiJskBd8U96gFGz94mzxhFwJst7sXS6PAYbhA9mjvNhBHEPz3XBmEqsC4kuzybPPio",
  "key12": "3KCGoWnQSw2i1TGaX25BjxFDcbqPBKWn3NahGTxCGNcohe23CvP5bLDYtraHwsuvMYwGpQDN89yjyBZXTDCr8Pmw",
  "key13": "3zHnKGhhuTp4m2L2tgFm5JpbgtE4xkSH5wDb9VtnTcCFaeCre3uNEHt7tFzQtkQ5yUp7edJt4ybyxj64hxYbARAy",
  "key14": "5e4RezoUQpsRU3YMuVgZU7NxbgyX1tskReGoTcWGV8mfUT7G7hh6ZrGVpLKfhJMnqjGXRQ2sC7qvHome1tkwwjgd",
  "key15": "22KNE71Jv2WRAJQyU74bwcQa4LWeTANnNRbRGZtFD6dTPQm2ycsgTKi9xfAscziEXm3WARKaeaLXPQ4s3wpyHjsj",
  "key16": "4HrkrqPaUQfMvK3z3X2oeJXAvhAZPqjeScHs9KV3DV8eH57VJpdSbCgNpzCN9VuEqS7STzYz1MmoG65aYRHwxzXG",
  "key17": "4CvBucCh97mkshSqMDmtsHEmLLx6CFV4JCGEkJBNWjuntThDGk2ARvhstPmjwsBhS6r6maUCRrt28PNZExsMFmVi",
  "key18": "wduqgjuzwbZ7GjHUZN2xrivtEd2W4aBLKNv77E1mHVHiP9QQ4fesQc478yzNvU4BzvEEm9CKvpHgkHi6KP2zsLz",
  "key19": "CYkLGTekvFhzcxNmMZUXGR6srexMQJay2DwRSckBprsp9VioqdEApjNv94TLqf9WXMTSqCdXY9scUQPRnE44pig",
  "key20": "2XJVzvJT6Ui8GFugvLZQe84212REoGnv5CrxkKNRj4Lpov48kyiwB55SRKQwGyJgpFBnBbMaQdjdxMkgoCkUpj5p",
  "key21": "4FndjkZnk3tCTgL2pTySjSxXMVqhHt6gUwEU1zyHHn98XDXURzyFuEvUwBvCmMCUvaUXtUpJQ8XVdFUWEGU6gE4d",
  "key22": "5hRpNsiaVU7bfYYsqVJcKMHztVUJYKSBxpvkJmmgDntwEUEmwhVnfMVSoechKYU7sqcdPPSpkFAhnexdM8VtbGxL",
  "key23": "JF2HGWthDvQkrhfMcazP7mS2mFohPyQ4eD1q48CgwtaGTDAKrGtyxC6YPR2gYf1nSYBea5unWB7zvNe4JQ6ALPj",
  "key24": "4V5KS5Md9fBtEQVCtKKGHiW9VTRDjqJ1vg7KdBzRn2HpCbakS4X14LuWhacAutkcwY8gexScrx4ikatfBBZEgHx3",
  "key25": "zL5jQ4Xzn4gg1xjGTjumnPnqRdE64TUav1gZgbFijYmAJdggpmRdZ8nqZNiJmvEUkL95WGxzLmh5jXimBvKS4D9",
  "key26": "48iC2kSFvTzftWrw7GUcymHFHAJutZoWFMA7mFV11x8Gy4U6qEnQK1ezckLrfRZqfoLMzuEMs76BzfLp4jCNXYdB",
  "key27": "o5CB6RwNJYraKwFZ96RLQfwkbwDLs4VRafENPmBXGHydYzdexZDw8QGdb9fvtjqDA8SuSdpjcX8qzbkUjuc1gyj",
  "key28": "3Bu6RwG6tZaekRAWUUZmRmn3bPt4CHCxUsBcFtuXCzycNMRCi8b2s8MNwZRzkG53qtsVh4utU6nv1Rvnd2nU8AaC"
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
