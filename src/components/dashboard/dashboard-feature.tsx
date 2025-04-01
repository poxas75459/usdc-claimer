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
    "51FvWGYB2bWapKAMvrk1NAwBNV3ZBojZoMoDEEwsqCMcq217NYMde2U1U6B4Taeh2fTqZ5b8FHByyj75eTmrUT9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usUKsUH58eaujwJyxJLf4TD9vXzsmpVusRKmbUv8LVUA5bHZBM2TWQQWkCVJ2r3mqRGhjwt9BwRM4zVd8mhMFij",
  "key1": "2QUqRdGmYdEs1Qi2MRLv9rjri76okF4zSMA5GZAJGqR4dWYKJFtGinudEJB4ojrDMLniT59SVYBcVLiaegUtwWRn",
  "key2": "4VWykUKT1V93V1DNrmuKZL2XH35paSXUe7xMV2h3X6c4HQsKFU9C5g21wu2tTf92hKRXR2b4YiTMLouYWJuS9LCG",
  "key3": "2yEYq4vMXNAdhMYrytuPiSrFmqyJcb6dfVjGWn2fT5BFJe8eVPbb3rSyye3omWyZYBwxgBAc1FFs5RUEUg3yaCC",
  "key4": "4b6HwgepJKaBUKYv4P98Hv7NC3ruqQPuFne3NhJJBsNYeYBkqmgqgRyhyXqTx69rU3XGhHbQTgSs7pNh5wjPUvfT",
  "key5": "5CzhfpfWuNPufa8VnwMpxpTWTyT3tZf2J3Ufpiiw81Ln56Y7MMqHgssFvmYctjCeDAq1RGi6NvUjBBdJCXGrzfSh",
  "key6": "4qmHFCC4f57i8QCWM91J7v4UKckwAEeY42oLPcBYsuV41ggFSy7f3KVXaUncPkYPXXhZysdesgrdP3Ay8v5JYedU",
  "key7": "39fLravR2368uFria6CqUeBkRQack8fuHYry3TzxqhmoYQHX9iqVcZEuWB7wjDVHY3UNoZ9kFfM1Yu1NBo9mPueq",
  "key8": "2djNYkxc8xk2TmSMgojTpWUxKR12trWkDFH9VYNjs6CbutUtFn9GJLMvUbZA9UV3zvYnP2bKmeBjLUxnN9pGLV6q",
  "key9": "5Ytrd4j4mecRbMfyJFveCWYoSsTHr3V3gmFWL625rKg4YXfjAEamWXTK7XvZyACJrpXX2hYBVsHyThcaS9G7dZq2",
  "key10": "TkivJ8DgRsRfWV6zBwDYN5giD1Tj8A43kEtKJUH2UGbr13meMA83FphU81ijaYSUzATVpBy59UXBsmYAV3DktzZ",
  "key11": "WPYbcALdZc7CXZKJFhkozucpnBeQCexjSHUmgTUTVmZ5keQ3Qrj7BdmdpXpk7GbbzKPUKctznNnALH9UhXSjfo9",
  "key12": "3bbDS4XYbpVYLkpTdEPVVvtz7YuyipCgChCJQwXUWe65Q6EyKZmBrbQ2bFnmsXxTpDKnnWU3efMyBoTkZfT2YxWd",
  "key13": "4SXXxEDdnYTTKPvpfNTXQfCf4QqvgeyY2W1RwHrXrZoBqRADaSq1xFxYcn6u9D352mrn2tEHhXYzcgyR9mYpK9d6",
  "key14": "3ozR8uRoNdMBUKc2z86TddnqPLxyuCCPLnPMqJbQxfQDK79M6sPYWW2f3nAvhXrAUBRd9FvK3m7P47PCdMoWdM5x",
  "key15": "zNEA2Usc3UuWTomgZw9nCdT5iAeS7Hv7MYnVU935mQvrvnUbX4xtkamyC9Hy8Kcr79yH9GUmL5KMV1sEN8hbed3",
  "key16": "26wkZmsqNPZUwwFfzvU7ZtWcyN1wxdVeppCsojVWYgxXpDHzYHNXuFHvNDVXNrte3m9i3yAy7wFciiezfKrkJyAU",
  "key17": "2t3pVKF5zBD8ek5JPJMRnST6WePgg1qnP4aqWguVkYaH9qe7ibaY2bs7J5brrG2zSZy1kjdwA2bPZNWzGBKhCr7H",
  "key18": "viZZJNSg1km9sK3V5y7x7QPQYVxyG2P6ADabA5NVw8Si9Lxh8dcCdECufRq7wBcCQXqHpzTk5WbPmDYRPYV97Qk",
  "key19": "5YSwPMS4veFQa6H456vd74GBbh9WVAryJcvmrvQvk42fUA6DY8pNkZsXRvtmm6hEM7BuFff5ERkeTJhacgY7Kmu4",
  "key20": "3VwUAX4bgtzT1N78RLLFkQyHcUCQqgwZ6Qyq3FsrsRzhDM7Y8ZD7ooG4g9FmJZZ2u92cRZ8madJ4M1dKaHv7s85f",
  "key21": "3g6SyvcFaFEMkpr28rADiBoGyWugjU8jv623a8iWHzypxJm3nG6jNF2HuvgiWG8r4SorC2Mu9H3pKuxdP1KCfHeR",
  "key22": "52xxsMaCDcij64nTHdjTfQcELJy62VauRvw69zb4MnuH9jwMKoGQhiKQK5HcWDHHYUqEcmwbd2GAUBSZdhpcTbyJ",
  "key23": "3n3exTQWcRDW7mxiZ7HRjm55RAyF2ZMecM1CQzqjjJKPAkiapXKTPnWEMg67DVbY1FiyFzmYYMmpuCnunBNceqUb",
  "key24": "AtjarKLg5YPHYUh97EXGW4qdRY529R3XhXfiguymEQnT5CzPRkesLwKYnwJgwzdkVE39vJWvmwGzYVdSPtHqYxH",
  "key25": "FsAgDmnG4537XKzDvze23moVoS8aqwRQBFzEKWwcpTWhEZo7i2As2V2EmQKA2aA2VjcAm4vxHASBcFwUiyvGFgf",
  "key26": "4f3xNbj3VUqxtkUSV3sg29F7eqdLGYQquWo2D7ugtJ2fPe9sPtUuZfhqwXiBeWB8ELZY8aCJ3bp6TLYKKRSYgnP8",
  "key27": "4367JszUes65QM856LTdv9cm2V5aQNDPkhRZz1F4PLcjF3LYNSQ59MsfjQpddzb2aN8CNLV6YZKRduvZdVHadNgv",
  "key28": "2QaqnXvwYwjJFoYc8gN7ckjHHcjXDajYtFnBhkvDpUqi1zzBEYthydWBeqjDsrR7ZbTy5KvtRjAny6zWh92MRsq4",
  "key29": "4QnDbjyxrCjP6bgZemxvcjAWLnazMnNQQi8YtBSdcd6VkkbbQ5XfDjMUWFoUhVM1QC5mBDv2Z5k33vVXYkdHvsis",
  "key30": "2xZU9ZFCsiTU3PeSJuZ4ppedah2Xg6hg9pxC8HErqBh41RyLiBEazjYNUu6NU25RxK7CAqUrwnaHk1DUYviYmibZ",
  "key31": "2X8eURb7gDs4pYTWHgAEJJ4Q6au7YD7WicGGCydGrXpnmskHjzhMKWcHW46GkyFbzYZRukPrcwBE5yTLWGfV2sZY"
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
