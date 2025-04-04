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
    "4jGhs9R2byur2DeHTPcsihyvEe1GZdwnQvVC7RgcQY5gyZsaHhGAprFaauDpNVUxmrkBiXofDFuj8gv1CzXek27Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzttW2whjrcAnnyzHyocKJB2LYrwq2fivwAXfsqVj4q1J4GscGoH8HJ3q1nJCbkT6bLxxxvzemqVRMSsGMJdsHc",
  "key1": "4iigeHDfRECgkXnTTsCVNQdxddXoEvZBbUww61v5iqrbEMnYCd2ogkxnXMkqbxAUx4rhsPtTcskUyqBWBejnFkhD",
  "key2": "5NUzUrdHHDtyzxAP3sw7e9mfNz9oLtx6i8zAs6B1JmWZPuGaqHt2hrU1B8LKU9svzYG3UYtn7HoFDzBHBhokwYBs",
  "key3": "5f87Rw93kEgCBmD2sMieCvXshWcioEK4AR53tsxE1f3b1UaJteU3ogJWBRtiV5iXrhWekaJK2TY93L7xPEeMVqsQ",
  "key4": "3e622hZ4m4RDcaKe4VrwPJVYX3D474mSwJE6QnQEn6ff835yYa96wKE1FDzj4R6yUVJxFLrNJz5fTm6F9oMSg7eC",
  "key5": "5dqwz1cD6LGNmJB1NaCrgLn8MUgsScmTCBpvVwye9Pm6cC5Zr9H4KmaxoRoXSHLuX9wXQkbCWVRgGfRnTYtwTsbi",
  "key6": "4tmpX48wWmcezrGAPAgpbdsodR55E7zkU8VwVieJt4FMessWqMMo42pngNZFrLb6FXFhaLC7NeRdYXrbNUbfcJnX",
  "key7": "3pPWMLcNsxZUyJZea4FckVnoWBAJKtKCZogaiZB67s7gXCN6SAN21msFccfiqCFYPGB6qpMcX1WXtvoYjhbTVqiA",
  "key8": "48hQrn4MVtQNfeWC4tewMnEPSw1a9jDNE8pTak7Bw38QszBpPQNgaT16ENheYf4U4PbCiPoU8EU5ve8RXcn67iCc",
  "key9": "2Juum4xmNNognh7AUdk8dvFCjcnjMmbsibqUrfbwJ4p8RC6oNZSMFMeWHiywshf7pSL7aPXD7mQoC52wM5qznofE",
  "key10": "4bvrfSTSo9US7c6eHH4qnX5rZdppAK8WL2be3hVNN1hR2eXh8kQ5GT3qQ2TitG2xWhALJijHo5EhPhDTxtghHdnq",
  "key11": "2z4D6hbHJTdAnSkxu9sx7K8VrobEWRPX8byLDSTitQuhwKRUCrCTmotaLkiwV3UyYSiS8xwkBojNAYEMg2JnrTk1",
  "key12": "3cSb411pcwY7gjhy8aj7Pa47uXb7Uaqd8weDG36Kx2fWMk18q6ywxowX4KDugEv97Hr3tHCMeNwqgBguDmLPnnqz",
  "key13": "4vmkpwEobbbxbjyijsEMoXpWQxEUewL6MihQUhTxwfmVbNxqCEzLw4XbPM1xS9DSSJxiaDEE4SwBn7WFRzj53eUb",
  "key14": "2nGtJKebhK96JTn5ocHL9HLrCER4y3AswADmyGJXURtsSU527MjijUrysto1ZLrYBrYX7M46BZnuLD72oxRy9FRd",
  "key15": "5eWvfYxbKjx8q1obDQ6mF1G4qmbocoHYN7QPzcEfTJXEEbY3EXRppmL6pWzYRN9XWSkENxW35oT7UmFkXF21kQPW",
  "key16": "5eyo27LLu8UVhBr88FmCFWxdHKLQLYD9dhLFh4vXE8WPJ4C59VbZ5ebGknyWppWQUdneE8w7mhfwyB4T536wvzNb",
  "key17": "3DvuPvmhBvgQc6wcTWJF6ZDZEVB2zZDwtcrgfMUSVcvUwVriwQJ4CW8zqBvA8ggg9mT9YormUnA4ZooDY3uTfKaf",
  "key18": "vFmuYXmtAw2ppX7oNfLQoCuKwkfasHVRFWpmiumSu27fPh9mvQtAQNF3X7WGvJHYQv3yFi3WBu6S5uTHKwPjvuT",
  "key19": "CPYEXcMx85zNA1r1HqU1yDzKMYzkrvmJbNaevAuoEzma7KCjhvPTwX6uCHphiwtezkNLWET8JABgCW6oEYs16pV",
  "key20": "667Dv4ZRKd2xJVoXPhNMKYprk1RAeK8WNWKtW9uMK8mKWqpSBXtzFNP44peX2e4oXDopGPLRUvstyqBBfjtwCdE6",
  "key21": "ggtfrGukSXtg6TFbX9NyM3Jm23yxy7BqnPupQZP6LKPdKPub7pe2DFzxtzEju6TgPbzKXY4Q15RkXZCSi74q5vy",
  "key22": "2JSvm4vEuhngRi8BP811dxJsjRkjWvHaNimpu9gDwiDP81t5cg8EksAg7Ji9CjteuFzMhpTAEr8VywXHacsE2FoS",
  "key23": "3eZTUHJNj3BZ7J4d25YcnfqHeqqiDWyAhze8SfUSACJUDHmKgTg7g36W8kFuuXZRXkyFPzzwF8vFxKpKhnF9rtnS",
  "key24": "53j9N8JhL1ZeM8zkWuJo5UYFKwiU4UaPkeiFVMV2ZupDAniPPH36L8LSPxJYFtE8ATpWatBRmvkVnWCgUn3coYHd",
  "key25": "4hJjgK2pSjrqzKYaYjGuyvdP42QNKvjP3xgjNvFg1UYCGQKxh91Rpc9m3ebywjcgPGe2nedK9hPuJ1vGX1oqJkqb"
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
