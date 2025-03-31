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
    "3n7YV9RitCL3YhUsbtfjsYXA4v4PSuXMdZu33Fa9kocG6cpjUuCtHrcVTHZCFQJYQW2U8ZQPfGFLxvc7w2umQ1tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmR1ePrAyLwXjmqpARqmJrT9F6qatiyrefvabFGfytFyLkpjDRxg4R43Kbaq5fX6nnA1Mm2J2xF7iiH9jzK9CFr",
  "key1": "4wMoWdCr5ToMmcjGugNfGvWcnvZvcbjrxmXPnvc93koxZqvtkeEKxdJAkarKbDsJV3pSQAyVL6Y3ctGVVvXDTC7U",
  "key2": "4D13oQ8EDK6xc32v8Fvaud2RcyUCjy6NhHkFeFj81GUNsFcWfQ2vwhJYuaDPEmQk8VE9uXeHYZ7FphRrgcdvoJs5",
  "key3": "25wZYavjfQ1dF4iKPCMzcJUur63vysJ8z7NAFVddycNB9gkandit7TnNbnoeLGmcP7MvKoBCpE3x7zoFMHeR2t4t",
  "key4": "3YJLpqwuseD5Nftka8T8CrCPhV6tkg9cNj93hyrefKYFK2rJmG9AVFnPmRCucobwyCEgRBAPvZKk1LX1gDTt7wHk",
  "key5": "5obp6tdHXMHkDH8H9g1NwpHzJ7W1bFz4u55cSd2cHEBTq25nV3NAUYFJU2t3hqj38vwdXB2a2i9m7tQ1Zoc42yHW",
  "key6": "gd55MWKaTRo4zqDLKyZDgPDTdrYEr1kXukuLTRqdi8Yr1pyw1a2nesVsePTKKJkgSBRonSvS19f8z8AWNhksnTJ",
  "key7": "3qV1fgVZnMoaZAK3MBhaLuuHfeuNEd2kq7wegPd1zpsKLYGY2q82iBwF61g3gwnReC9tLQQGrnm9GVs4bj9Q2xpR",
  "key8": "4gYTMURZ2j9haBLd3qbKipeocBwUA6iBfkn8PdQ61LVxKbkxXPkzQWknjZNFGNW2ttGxQuqH6TdfHhWmuQRs1SVX",
  "key9": "5poYpvgFnXHxg4gCqfmT6jMC1UtqykCAcEJ8VH3Z3J2oiAoq8U6PUq8b6YauTZ4CEAMV245kMVf33vAD6QmYwKFv",
  "key10": "5gRZG9LxC1sGuXSniMAc23wTvsFw82twQVdGubav8V2HX2BLFvJ49xRL62gD1Nxopeg9Yjh8nuYu6dHzcSHMjn5L",
  "key11": "5mj6XpJn5ZGuGTVW67vSD7yjdf8Q8drHNthtKGcFmwxG4i8RznmoTWr3iUFutvS5n1CEKDp8GgakWzHZu5YDNU75",
  "key12": "3kgS8gXqTD78oSpunW8uAaqs3nz6jv4CCj36bfNt6mZmCVrfkVhETDngSv2MwCRz6wnJv8MKGbV2fFZXcA5A6kET",
  "key13": "mRdiFb8oLHqPQDvZzwhpmn8QsXX918iDDgBzhM3VizgVtqxPsBoficZzWdC9TCJpZhCkUrMAGnrWJM8j9eTTHrT",
  "key14": "2iFp6hahcWpMEnqUph8M4LYYWWJo6n411tztqs51dNkY54KV7Qzf6WqRKbg7vBEix4FRYQ6QsrDKA2FJL2iC5EXL",
  "key15": "Bo6vr8LC7AxmkmzMytmzSTUaRhVFZeYbWDmyzFZGAjDzy2mtB5fwbsKyD7UmSA8BEEbUHgdsFECmLAQsghGHiZ3",
  "key16": "3uFuoP6ChvRq7ZLjdtCuXJ3DKLnK9JKbd5RBMEfanZc1UKXMmz4cf3KzE7zE2M6XGAB46WUcNyBhdjTWxEWApTnA",
  "key17": "5QTpFPX7S3BkSacEYv9WPZtsiaCoKTgdJ2v5jcNELnx8NugMgUFU2hA764u69icNYggVysp32MKQdtSVpDxeEwnb",
  "key18": "3KRfNpBTYFrpVog7Wa71Ag7rKxsATWHrjuRm1A8nHxfikgMmQapi9cmA9yRnjA3v3wKUQwnHQn3hFBq3NWXMij1x",
  "key19": "52Z2vi761bk6Vn7sYZPw9DRwERVqs2X7U1VqAfeSHptANmEuQcSo2mHcQixYkUKv3jdw3thfRUM3Sof9hUc3R2JB",
  "key20": "45Y3C5qp1CGoPPBk8h1fgmvFSwau6fMc8JPUPb4PyTdV3P4wYUNw8tErmrm9nEwev2wqRaXLYrEAqnpFrYtXJ2tw",
  "key21": "3tQNX9pMEM98GHGLzH1U3UESTLUF862LDXsyebEowW2J1AVmRstKj8R5jBQnwAfmKSx9w6TGDwsAcqLCgV1joLab",
  "key22": "2iEGAo6LBVGqwL5Uw2rDJKGSumUoTEKRtcV18ttwB4zzu4m2y9BcUg7B3QDyHyPfndb98YeFbmM8MbzaNbvMepu6",
  "key23": "2yAZzkNYvvpDa2kfaE65hQJXubfoUWZcKrbEUw9qTR4hiqEotXWhVHAvebbNTeGtm2f8CccAcApAZhgt62QAGRfw",
  "key24": "5Kx3LCyB3jUbceFG3XQVPZEWL1JvoQEE5pQopXoLCfsZWy5Z8uU3Dn9QWxkfXA75Vn2iQptbo9Mxj1wmgYwtsdUm",
  "key25": "2ampifdSrx7mvnEUnfjc8cBrxZaSFuD9iZaXnnJMmyNS7pf8QRk7GTgg4QxMLtX2tesJ26EuPYf5JQr9o6f4hmfb",
  "key26": "2n4H1imGwQ9YHVzd4Ng6ppcrUUDNuDyGN3W4LixA8yBgA3rgQUeNeBVo1zyZqtgCAnqGqJbMviBpYmu6C2jFQh2E",
  "key27": "2zU7pcrewdwWG2GfTKi9s89quc7afsPM1T5qLpwQNiJBnYzNzWahNwQ8rPBNs7GZabxfRyYUjUXVKtKV5bWPnEVX",
  "key28": "59uprQgsFxzzaV2CZabDWVxDLjQq8XhUtj5UGi38Eik9n6f1k2D1yrqShXz5rrFkvWkJdZMkYMuEDorLND8CBAa8",
  "key29": "3BoY1xmoc91nPKzvLzKNMcv6pzeiwdPxnkhpi4TC1PYCSsXZgGBRN1Amb8nnC7s7TGWDSreK7qmAwYb6kqLo4LZ7",
  "key30": "2AYjcU6SDpDoqUbpNi4fCJA61KxWabZ1eXowKCmTDfQ2egzDpFbfiVHmSxD3japg8wQ3rU4QKLbQLSudnE522qdC",
  "key31": "3y345bQRc1gKxzrDMALpwYfww4xAZ3cdUsp5E4QGRGcHZa11MzT89LAM5nhnp52yEy3y2mta2u81L5c84htHSxSn",
  "key32": "s4ax6nveb9jWHvS4Qd8au7f3RW68y1Vn6miLufF7Zwugq3gana8bj2gixcuHPc7V3CkzQ3tYGdKKNERHUNfmj9N",
  "key33": "4QVghEu5uYqoKfiae8GE2t1sN47H5kr1p7QyP3wjW9AKnZrm6FVKyU54Zf73edtSuGYi5bYde7BLkvXjX9S2RqXb",
  "key34": "4kC2HqjTizXAEWhRdcmqJenwgCDtmDNj9yW7Gf5o61JFqYUJMVf5HARQ8mEgqq3sHFEABeZ8583qKGemepZDSL5S",
  "key35": "3rCHuGHzKYjbMhTWchCAAYNoYyy9W7urseTtS5CMdLjePM6qhbNVBjindq61P4g2yAag4NtitN6vVheN2X1j3EZc",
  "key36": "5kYWkuy2pMXv3yTehqQ2r88JRiJhmeS6TgC7jZidVHRSes8nCbWZzawMkRAd3DoH7xkA6pXBpVYhGMj2wBDuHtFm",
  "key37": "cbmVAAyfs14QjNXwjPzFM7BQ5T13FUeVxzp5pXKBsMDAquT9hS73NmYU5uhkvpYx4L46LsYt15Ls5JS7WjUXZ8K"
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
