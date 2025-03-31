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
    "2hiGGzfBfABQZzrL6k4r8trszS54u694TQStX4jVSbuMuLpA4wuxBZNzGMih9LwHaNuAtqHF8BcWaST1q4YCztxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MakbxBjZdaDzB8TEf7QstihTPxEAuP4VrLM97E9ywJwzPZEoBS2fTA8T5Pkme74RZvZqBQj5GdEifNZJNnm1UWE",
  "key1": "hNrJpA4X71Bk7fMRZYgwUAVaJmSCN3FCXQSs5HEvMAmueLmpNVKcmcT6pGbaptgNW16AVRYNQfERtH9TJDiZrT7",
  "key2": "oRxqfm4C3app4tFJGXuY5BakVZWxcKjg16e3uqDm2xB8GcTrwvPm62hD6GXxV1J2adY1c4KkoFPtrJLXDsgQoGG",
  "key3": "iQjL2sxAbZ4thts8ZUwssjhHN2nrFGsxs6oHACmsWG328dijcVJeFxUqZjzBJifLnGdkTdEPbW8wHUE1eiQcsD5",
  "key4": "rgWdLpHmTqnRXmJSHBLD9EKzAQP8Sec4TViqh9Ve1KS6fDzvdZWPtQMmjmRWwWfaGanCHmkgaQ3UAuRZJwpFXuy",
  "key5": "5JiiAffF7dm3eoJ6ydJR2xcE6HtBtQbRFUEnxTarQZAB4YhfFaNzbnf3iTdRWEYz8DUfof5cSaBN3RbyuQSFtqvR",
  "key6": "3erxqJ4ekdwGGNDzoKkp3eHmzcmCYreYFj9ors5waB67YLpNCGfn9BBn55MGq1mLymnyPgQLt23NP4Uu6KBPssBW",
  "key7": "5LmwQLv7Vzqs5MRfpNpgjmzijrhwj71FPmnzMEbxAcz6Fk9RQq8xC6E9iPmsTGv3VJDszr4ym1GtjMaHenGvJmuC",
  "key8": "66BZXhqFk4oTcwzw2UvXymLH9K6rmZ9L1bqJ4VGhyG4cRhvHHHW5La2CEsW9BKufhpGmVYi68vyh7VR45ueNNLey",
  "key9": "4QvJpg1LoxBq4KXYMnbgfDrs5syPCb3UwoYrE7aUFvRMwjUeFJJPUNrEa2dxHCbKnrhwJKpjLKKavgUYJMUJ1bZJ",
  "key10": "2kMEzojfe17kLMUgQcJuozEwwzW413eSRTE78ZoikUPSrqquhEkYxjhLRWYsYxZuMbmpuQdcwR7Z5pCUBgnwwRuv",
  "key11": "49GqPQ7bradMH7emGWXkgfgSGYdzDzQdPEdYmHAHfGh7JRhTGShWhxvk75WTtGChGHPcW5fU3fxZQ8YpHcqghgGN",
  "key12": "2mKThN6f4xefewttHzDvmAhEMVNg5jqdSjkTwuS3J57U6DiiYZxzBj6D88tWYMx6oWE73hjKcpkVEV9429A1WC9o",
  "key13": "5QAt4zVtxa3h1CFeKmiPjbpphnwroCWYq3wo8mXG6cDUyAXUgo4o8i2w24nSahcyTxxbN8v5LnY6cijbF2vgYKvM",
  "key14": "4y6ooMAZHXT52SH6xMEz4QNhzFQwrrdqsg5BQHmDrbJyzmYAxURwyLxDYbDTMS99vbaZF5XwperDoyfg18dMkeao",
  "key15": "5PGymdDm8LAPwYrLLKfm8HNXQNrEjMsShHgjjxu4WKjaWYWgcVBKwc41HoGYwgeaCdTCnzNTvrBERJ4wvPg5CwVG",
  "key16": "2BDC5jsJsXkxMZagyJVdSNgZmihDfCmMNY6TUmRL1twHNuaJEE4ingyWMbwqastoVY1cjJP9aWLT4W2DTQwHBWWw",
  "key17": "3WWJn8tyobfDvAEQAbqYX9vJH6Qff2eLygnoyefbeTtjFM8gvSZAPJVuaahPYw7fHTvErWmaKPKQ5P8yhuZVg36",
  "key18": "z6HcKAgr9G88f5BtfJFt7SHAKgVaQw1riaFrgUeu4gywPj3E8vFT7vrDjDUR2Jo3GNjFLex1V3JqQGgg9Wke3kz",
  "key19": "59NbiLZTB8gepi36qghxr4RsBtFGvvCRLnjX2p7jpXLftwTVAv3tLZhVSGbVNV1ULrEuzMi4UDgu1YYrg5e7W5uP",
  "key20": "3bQTS7uTViRAhZJCnBEbcpVjPUumPQf2ZmyUnRzAgrTHjykSfj61XrBFiTva64UfKG3eohKL9VGGjq7PXnQG6Y7r",
  "key21": "2j3UGr2wv1ZG4ZZyiSFhe2wgPjrEx1uGqwMtL5jNqdxHhTUxV8LMbefNGGAw3tMEzrT9qGKzfGKxuGkBsFQT8Fuv",
  "key22": "2pSe77dP5B4waEpxSmQK7WX1JfqaoLBPmmAnPDN8KjLpnyJqJLTbHLRy7yysARD3QsxvKYjCu5QX1Sj49ZgctZFi",
  "key23": "5wtfByMsURYg4EUycV7kPCaHfGxFq6HntQPiFjdaRK9dagoP3TXp3kTkfqw12FY4vFaAaRPayrxNCpeJtZjkp1uV",
  "key24": "2D62jZ17poF4Ku6FAoporvbo3sSPsWMiwSfmhGGPbHeJScvwjW2PNSvnvVSQvkmcRNJy9KYDkZJBPZ5mKpqnTCKt",
  "key25": "2FCn4j8hfj8S8t9ytKT79P1MMLoY3LDLuVud9gRLjt4cKgefzaGyumcxyP3EfM5xrSn17nJg2nzueEabWJqb4BhN",
  "key26": "3SeW4Soyruzxoxk2cZdVGtoFsDRT6QrG3GLaAR8azsox8sNr66WK2vNN4WASCFCTJsnBtHe4svnotY36q8PA7nAK",
  "key27": "3ur5PeWz6V72svwcmQFE19MovuoqYKH9gzHgUx4z22GVfQs1scuAJJt3f8aE21cnRcuzP3xJistxsn4fAGXbQh9Y",
  "key28": "5CYrvx4FVimRfZz3qGeoxw1CFGtCqZGZFWefhRNmCVaT1Rbx1gK7LiZJ346aU5P97vgCiMdtbmMBCyGVUrLNNqgv",
  "key29": "4BRJ7cHiiBbnaDmzcDpj9ZcGmNWY5shVW5dBRoUxd42wS8w1EVB6faTTbE6sg5X6MQY1sULmBkJWuUWr9XxNih3c",
  "key30": "4rh63Ht1YqawFnAQqfeCSMNhjokdLPYM2MNNj3DJSQMbvmyu74VShzsazsFqZZmkGzzuwqmh171c6S5yqDdyCQCE",
  "key31": "5aPwWf2vodLy8Q75LeZkQoUrsu3A1g1tykB6J45f67byxToxSeNVYXyhtnbKyCpBJ1yEbuBDWspwpnHvrM2LhQtH",
  "key32": "46YXFDvMjENkfdRiENjMSTCLZ6gJhwGoTqt4QJbQJBMDaVsiFnkEbSLXscFt5sKZfwuabqip4tG3bCqegKwKdcFh",
  "key33": "anyHvDTPjXBKRJosgAJFRA7NMS3bbdzbToxnrR5KTWNztRTRJgxrhwq9XUUAMxxFHTMbUDssK1ZiGgoiWUdQ3Mi",
  "key34": "64Sk6j9yfFUUzRMPhGrZypwPuuX5NTxjfcHpFDFYY3DDRMGoZr28GrvBTDKe8fQ8tVTEeUhfHZ4CopvGQ7xis5rg"
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
