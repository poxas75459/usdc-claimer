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
    "Pj5mLrPv7ExfsDHAcom1e1zmQXXEyZgEWS7ForRsP23XRuJp8odjJfEGNRXcZXwhAbucvzmLFZV9yF1KjfDE6jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KK6ZeTUyUkixbiLUGWgx4DYFS7m9LmrUfqP4h4XbUB5A4kk2zWAU4DMJ87KSyGHsGYWQWkqPzJ6pVjikmK3Qxs",
  "key1": "hAr9nfBX3b97d8bMhhSEucq7q6Q4A4wqCo1qmHb2eXX5xjAUoJc2HLZRQ6PkmFAvkUdurdrWUxrsqvrXdBYFKYL",
  "key2": "2ktAPatSHt1VzRbypXq5SeACZF4DcNbsqZFhAECoiPgCbPzXMTXV1rX76NxjMwZnWPXymbYbXrDFvkQyLKiUA8aN",
  "key3": "5wyoFgURiWKDnVvWp18mXnC7sLwMm9qW5sCyd19yWRxu2oDqKUyTGFpNGRTZvFi9Y1bjrjZTuiStoYzTha5w3mGZ",
  "key4": "piQcTUHXWPhZ9AABJbTBF6rr71x2QejfYYDdaH855YCVNwhLK3N6n1y9MjeJh2ttconwHmedTesPg3WrWFXMLqp",
  "key5": "2FpzqsNsvY4bTg3Vn3tQ81z991pLs4XxYe1mSVcfoZqycmqBH3RfwSTGvLXmPA5ojRakFudDbt4nGvGMdQsvLgXr",
  "key6": "3R5ao5P7Q5Q4HzWNzHLvj7SCwFqhdS1jQV9ARAxAkz6fnWrPtofyNgGMwYaNpZCv8pe1hR9GJMRkFHeTyqDnkgyo",
  "key7": "2rBVBLW2dh8T5YvRCbvwfK3UW1VLGDrcXBK77g1uahQTkvpu5YQvtJfh1xFGjpFKrxHSW3SmwDCMNRLprdoJuw6V",
  "key8": "51RqeEHZniEjm9Kc8TjgodVx3UDbPjfnAYMxJg4ti6FSFmWgyHE9pUHnjBEuBGaosfqwJoDe4KZnTtAYRQT7bQRo",
  "key9": "5kjMpcJGDFbxcmLBu5gHiJDRoWa5Groa6WCxYVhpgzEzeozkMz9oHKPeYwRviid8oTKrox1QsmFQnH4dUhzMk5Uu",
  "key10": "5h3dnRmaHh1V8vs7CYweCL6AUHfohp67NZ3N3WiqKTBHCNQkAzNAvwxhpZejbgSFTqDseS8GLXVLZpmauPp6wuGH",
  "key11": "5AUohS6ecH8qPATESFKygKvsEFhDWRgjQGbbf8EqkwX9T62gevBqXsjk2m5f4fJaC2RXjtjkLxD9zJ6voiv2ZbqE",
  "key12": "41ccq5LEU777NdXdcM78JzxCdE3NxUcoxXBYBh4piotMykSd9z54J2CgQBroFiD7RRXmc8mW9PdmequXNYsHjNBk",
  "key13": "5BDS8nsih1ShH8fV9kggHM1WMreMwxY6BJuh3GkAq1UQxiycFvhULxRFsfWvqBv2Kr2hAS84pRPL2YCqmrqazBin",
  "key14": "17YhPnLyAyDBmqkiVYSh7gpML1B9f2pHMRyPAfY5jGP4T1Rcg5TxGAQvmEYVBCjEtqCFW27eM89eX1tY5z8hyLe",
  "key15": "2HHN1ji1jjvw47uFYmXiXkqSJusqayqQKK3ovf2khESPzmSgJkLGudmKMRpB5uConBbRGeWZNR6FD6o4iLaWmeiU",
  "key16": "4Svjv6dJVUawqUfBg49iTonVz8mFjshPDnfTonCSRFvpMHXynmZCfniESi366GWrA3vecL6VWRvokoKBBZC8diG2",
  "key17": "3aFabTt3XST18stvossw52qrVC1ZLj1jiCR6QZyDB26HmjcvwAfkF8GzMDGGMSj1EXripcFXTcAEDi1x73ALiCsv",
  "key18": "5x6AMMJ6xDTd96a1rM9SbeVQZpdRFQR6vGRfPFEkDM9MnxgNv1HVZ48R7cZ8iuVR3da8Ut53MUqfdpQZA1uUevRU",
  "key19": "4zxky3neH1MDsbYCtVhwUJr7X1NBG7WsP3NCXkpHotJ6i24d4F7Y8UDL2jxrtxi3zqasqrbuDZoq8EEaqAan8pRc",
  "key20": "3fmneQ37R1uPAXXvbodtuLmoMYAXVmSxvX5PFvwcwohGd9eAcM3r4YqTXzhstF7XevTfxz6X7j5LVHBv1yVAH4r5",
  "key21": "4Wa9F2oPgrmTmdhJJFQraeUcNtqrqvAuXByC3NxiMCesLeKmSR7eVTZF3ZXDKhvjSSLYpWjU2wh3MsvFUhZq4tnB",
  "key22": "4oH1mD5mEHvpYivKpbk9MZFAfhBn86vPU7M6Lm1ki6Uc2AzkLNqURcQEyods5Mcq4ygjHhKBat9T7AhKCbUNSe14",
  "key23": "3EMhLA1hZPC6tTfHwCumpNJTDMktmm3RthjE5utNHZD5EiQtc2FS4QBYoCDyRkosBrPLqPHM79ZqyBm41YMytP6Q",
  "key24": "272Fe13DboMwze53MX38WqHg1s7nGDuLfJ2uW55KMXD9eGeMWA2toXzsuhLWVd6WDPtd6Mt5TT1Cy5TwLUUBZa7Z",
  "key25": "3N5sDiXVipBZ4XbkJB8jrdcb8jSCVWemr7ggZGxh2T7cYpb76mvAATwB1dhca9vpgJFsBB1CJipHDfwZLZRWh9XV",
  "key26": "5xqk2mt7mJ678xceYtYGoyRnPGLsFCWruSgw4DsFEgGhUYXoQFy7NGdBrfxg3C48hHRmW3u4PHm46UkiqnoCYrxr",
  "key27": "2pqBKsCgw8vpqVtRyBBKWFGTuB4n7LLY8TushN8C3A9E7TshofLT3d9U9ucEpsxd74Re6wZ8KphSxyHnnNJBSXXz",
  "key28": "39HRhNtgZXzDhh92UweuYWUTViZ1KdvQwJA9J5Gf9UVmY45yUoZBimexUr4sg9uhPHr83GXHeiBfTArVTTSTpZR8"
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
