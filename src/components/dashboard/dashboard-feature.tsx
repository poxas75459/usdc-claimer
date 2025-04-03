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
    "eo9b69FD9dH5ZxLAbQuVF3Unewz7uyR8cijHuzyosBKsBwzYdaHEjuAbMEXjgwQXTxN2jVCyB7hSBmkuF5SavbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rH6rRQfJ8oGiDYGPhwsomsKbVMatN1zuX5NHHiFzk3jAtotmQ5NgnKpwzEGsbgGg3YmoYagwJSXqx8q8g1tvGZd",
  "key1": "4CLMuKx7pu4v345n8BFk8DEN1Mtg8sH3uGKCSTPrr6NoK4vQifkkN4PQb6XPzhmUUrpJnWeFPFZyinUqqFecghGQ",
  "key2": "5soA9Kac2m3nn2QXfED79qhQoN2aKgMydKmQfoHZ3Mi7tMgn3j9K9fyeFqD4BucAKeLaq2RZ3wKXFoKpgqA1DrbN",
  "key3": "zWC5zn52g2kF5QeGi2gF7Dc9ipePwrpC7aQj7undFJxcG2fsUUgm7UKuqfRCu5AhTZMwsxdUA84AMhRYMPJugZf",
  "key4": "44ybrGWaFk2X4CEvEKmhxY3mTFrkzACPkYFNw1uCMxnRkeu3ctkV3VT3qqdGKQ24RUcveo6q8QwBhTrjExdL5yDW",
  "key5": "2xJ5vDrbsr9u15WV5xedyW9zTbVc5gPSvNggKpnbE4ufzTkLAiPt6FZSKxqafjM5HkGc4gdKhEG2LiZS7eWDLAxM",
  "key6": "4VrapnZHzaSiQtu2WpJpDc7j4PhcPe7Uuh4Ps3KZw2gETdUAiSWvBeygBEDtxUXn7TBRovjaq7QxtkiUqgv7NfGf",
  "key7": "3Z8RU3sMiy5GYFpDc2X1pZuAvKxEzECQ2WKiAojKGX9sdzVc2k2QVsFrVKaEnAnmzwfKL9QxbWqj6dVaXF4zrnNh",
  "key8": "DJvm2TUPXb5aAeZsMkajFwkwNdhfEctvwNXce8qTTUwC4St5t55FxdYHGjKcLGFSMQyERhJQGtJLHgJRwCYojUX",
  "key9": "3wiFMqRHnSyV6X3MwF1oCACzQCyhfKnaFtznS9b2Wdw8B43wdLgiqYmDqHyYBXncxBzDYuwGHR1LphKm7E9CSyNy",
  "key10": "2jY73LtDZAP9VoPQzQ6cAtfE6Pe1H2UpVoX8QaiHxpd64pPZeXTHAYvXX3us7hM7fghTY4e8QNBBTXooReKExhFD",
  "key11": "2bvEdV4oU4LfHACRtKfLJYEKF6dU1e9E6vRnsZhtBVR3mDHv1na1pANP6gPpYJ9JRuKoXjQkNa4QQk8mr6QeNvkp",
  "key12": "4gWZ1NMKr8wwifsa7Xs4M3nWro6D25bLKQXSvPv2aW5iKfxR2E8YWNbCzBZtfxmw4GeXT5RPQAtk4W6Z6FfEWgr5",
  "key13": "5uNs2vrjUT4H5uXEYvBX6RVMdBV1EuAi2GsHt6bCoiM4y9ksdNGVR6fsKG7v9yBd3wQHzB89fb2eqXFxQeGN19PV",
  "key14": "2q621LLoVN3kod7WPNVCo6RoJ51gvR652Uupios2zXkDnNVZBsCXvwJzkzvehFuJcfjdLFjaHf6Nnid6bynYWnuH",
  "key15": "3p6oDf97PSQZofR3K5gBiAskabSGqTowTKWy2SA5xUwk28No3SRbPP7TNGoaUwzoTxYRDdr8akzedrvNT5i49bUf",
  "key16": "5yMRSq4r1sUtDpeWspF1qmsw4A4diqy3PfnstEkRnqDJvpZLRSXUyy2M6QD194Y7FADyAkXZBCwTQvHbn97czy3L",
  "key17": "4JKuVs9WpL3VqGLKoV4dYHqPsZU6q5FAhHhZWFngAGLW9hstU4uYgfcxLAbHdkH4hi4g1SHkGtVVHrURCKAinaiY",
  "key18": "5Sr2Lr2DCpDZkS5cc3jkHxiMhLcDroLVvffk3V4yNh96hEEdFZUAqEzdTN6DJdnCEDjp3k9d2FkDhV8uJXxoKsRj",
  "key19": "3J4qKqonQHBmHJMmkJZoSSdyxefp5TKAfFAfxiXsP1bZwekuy1mGzySXtd6KpFxDK92EDBtfcwSJoLxtDndRFinX",
  "key20": "mXsBpxnC4tcUk3A8RcbfCkehWyQnDbeBitLc2GLFgxwHNA6NcofpVdG6micGVoGJ17wjdJHEFG5rwfNW5XGDrx3",
  "key21": "4H5rP4QcHzd5umYJA2c6JrLrKikHFwmiUH2H16k2BZ3hu5F5KdCeQcM6rixaAQyeZ5ZdnqBYSQZkgcM7wBLL8mtc",
  "key22": "cyksPYH2uD4TsSSEjfkrTAxjZbHMAnE6dggx4GHPzcVHcnKYPUfVJaTMLCTFHMMmWYAE24gAJVXo8f4DexsoUyV",
  "key23": "3b3yBywcDFrhZutuHzbvsWyicTZXZz2djNAd3JuJKri63GpPiQKihvYk8VU18fpyvtiF4nyktXvBeGiqtyx6m3zh",
  "key24": "3WqV5FmCUysymFmWGy9puyBmMQKpJNrohUJoRevBgpF7X4ch2aqmnxsg8LLdoBPnfQWnf79qJcR9rEYh7tzkTXow",
  "key25": "3DoV8yhGE9Fx5W9pSetWUTz6wVTimY45SLz5CBTEdhBN661KenRR1kUoXaWnmCgERc1xA885izREup8grMW97Jnv",
  "key26": "XqCreBaeSScnC3sewQqnvNW7ssaJ2iY61uoAVv3aM37tB16Ee4LyJhwFHhH7APGf1gLatyq8VzmAGSPAd5qjv5m",
  "key27": "3tUVM3k2q3JNeHXtuMWjNmsgGvjJQ74vdBRb18jBkitaU8bsm4M1CSUpGXacejx94GQnZkS1fgBNU169r9Ma3stU",
  "key28": "X4pWsjgFAkfnmbzcKeTmpGCG1k5DhgMifGkLLec1RMrnti1RYyvJ71NtCbV2VQHv9wNXCEcGTac83wPzvV3oyK8",
  "key29": "2u4PtcKohenw5AU7R3QYmnKEmQGiL5fXZs64SvVwi1PZ97KbtSkVgaMWUHqAvYZ9kyvzFFAEfkZQoL2YMhhXWoXU",
  "key30": "2p6TgWHF4CQUfkaXnWwc8jPLbGRGu7ZmAvatCgf1g7R8S3Vwt2rHbCfMst6KpnroatGzqv9UWEnMZ3E49wdXX6cH",
  "key31": "WeKP3E1YEibErHJfKSNJeerjg9XmESbffCv6yds6G3ZQ7BeKGVDQQqAeYE1wAT7geWJrieC1ZWGAgkZVTHDSKFQ",
  "key32": "66EZGh6nYTeEH8FGEPkeKCa9FgjLc3XPoh2F4WMKfWaDo2whxAC3QGNKheNpk4FfvKNTrPFFwG8aaJorpin6kCRw",
  "key33": "jxZgwMnBAjVrQQjCmemzRFWrKBWFttkdJwcEWH185kgBUuPqVM4CpY1pPgjFhdKUFyA1sXhXye4TkyH4vExmeYr",
  "key34": "W3rbFitDNoN7Y94wEbxr9357XL8cNjLDxXnC6atTMKaViw4MPstE3BU6mT1br7153CnnHfRgDrKQKxoQNyW4PCp",
  "key35": "xLU4CybAva17fSQBhJrPPWnM66xWbFncD87DGwUzf1rAFur7MPDd5RNuptHNFcEeUbx4XWGn4RL6SxA7T1iww3T",
  "key36": "4fT8m3KrDLu2ZyzVzvzQy3hmGPgof3PMd2sH2UVNw7wfxAAr4eQZhjv7G22bu2tro5bj2cT7sgobAczTSSpogLKv",
  "key37": "yVXW3Djx1qCnm1UbtACr676hWh59BxUyCXuvdkZvwpevhGYDDnJhhNujq4PwRMKYeK2Z1BFVzVh3nPU2MomvCRY",
  "key38": "4zYTVkfQoLEzCYesQcuobKJjAcyw71fTUpb8o9pzb6JkrzqZ9xzuY5sF2W8uuRcWKtgeefwW7oUc28C7jADA1Ta4",
  "key39": "5FQdnptQCQcMYQgP4P5FcCDYBygGWoSqZVYZkudmULcEznF3SiX8tRnRmDuWee3r6mSSJtdoyTFnevE3g1iidb66",
  "key40": "5nYVJrbGRgYMB72gNLz5kQNd89wRgyhYrdtLypayCNyYjKrpGSvFcMSrGUi4ZJmFKBmisjRuACprK5Gx3Y7RaJxP",
  "key41": "4sADn9Gionf9Ayu8BxqBTFSQe5nnWwTxky75AFRQGgZr2bcLRcea8hPB9Ukw6cfM5bLp1dyj6cUndEdqBTp8bq3e",
  "key42": "nsCskuupwofA4LwF4qYNRDWMcz56JtGQAZPmX7k6FGLhJGKHh4sNVB66GjmBiTJBFfNRP6c5MpU9FFnU1W71fK7",
  "key43": "37J8EX9V3agWo5XSPXMLhmRbhQhAYNNun22Jg3NmLZ6p9K5ewEk2khhBphdyQKQSzwkoRSZmLgFPSUUjb4FMChsx",
  "key44": "3Z7Lesaw6WV8rxiEnhhhN9Qon2dFy4icSrPXCGNHqEG79iGMChnSQk5UtVoH2MA7VKDmWBRRLe4a8gTqr8DUBhEF",
  "key45": "62DxEZ6xaVEixht9DLXfscmCC4fpLMx148QuyhZaWp2e5S9nVyo6c6LGfiS18EgsqJsWKaXNbsW7uigxwz6k7UPm"
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
