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
    "3YKooVuEQEqKmuyp6nuxZ1KoBNoJafZ87UVYitPYwWPvWd6eejxRwv7aenh4Pwup4fux46LxQijR1hFdgjbxTwEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDyExHtJWYJqLfSPSzmq7rqVugPbdTnatbnYsx38qUbpPdhHNEG2jqp4z8nMR2CxXqSGN3ekemM87sr4qf6HvjG",
  "key1": "4tdi9WXGQZmHpDwEsUAniudx5Gt7Bsqw85y8GtprXhdj8XPfAfD8QekNgtbABwCvj6pAcrMdKzy3p2q1JWTg4kEN",
  "key2": "3vunG5q3czEWHbBJYPkGWAsQjnqf167A5XmhUrtD3pVgwkCrvcdBKrUUjtuoqMrx7mAYRkTabjigmDZzRg9Diy3R",
  "key3": "5Q1e1pyA53TAJ5bagfVxy98kYUeuGqTkhBQfsJxAvBnfTjiLF3b9YQZQXAF15TmnhgeY6eVa2kMvwsrqiNrPaB1C",
  "key4": "4NkUnqU3B3DQVFVrmpXY9M7cjrauE9mYMQEvqBFadQmWq2tKDzHjsTgFRAtcpFTPeYgxvKfr4wMxTDvJmERovbLV",
  "key5": "DPukiQD7SZZ4HqkKr56ouxumtTMMDh5G1edxsNVuw2ZiPoBKgEiwn1eAS8gjvyRTY6x1j5smGhsyYwz3YDSNSBS",
  "key6": "4vWuDfQjQ3ALUAzVcM71cWMdvu4yDNM3vad1cEBTwc24nsbLTrzYy2REkfDMu4atetF5KaP2zBhkjt8e8mLnp1Bj",
  "key7": "5v4pjpFhYfuPrddTDLk8aiGNhtAPM5YgtUfmYmwRCjFYK794yEwfcaw3qEYK5TXhxzWAodfDUx6yVsp2o4LcK5qQ",
  "key8": "3aVTfp7yiZX8ikPXnU1pJCuyzxGMFhWDYhfFpdE7hipZS5nGDkaAK84jTuxivEgHdBi682qz5zvmu3cCtqnhSCxH",
  "key9": "GNiT3Fx2B3hgMSwu7pUiQ3Wwfz5qMuAkx67cga1TccG92beNAmv6xN25wHEmCMEZPqdSPXRXDWq3Phw5K1PoNrK",
  "key10": "GaCS7z6a8QgmMjvfoP5HDQMZ6ptKTbkMJwQDXptkntzuXCENeypvQFNiSGB3sHw1QvuCVzRspuijG6U5QwS55zj",
  "key11": "2zqLXWAf5zQFVXiNyuuSF8yZEtkYvymYmh8SBFGxyWJdfJUsMrEF5dBgS3edYcCerTNyQC3kD4ymHDqK9W1zrCQf",
  "key12": "34tWkPXorPNwsRbtYY2V7XvgDUYojhVkToijLK9sNAT23kXwveK8bCG7NvQdW7tEWCiECquXaEEKSCUGkUGVVHQi",
  "key13": "2M6io3qSN3uz241hgkVsi2ttNhKNr8atMDBkyTpoQTmvF85WnmaEXDYDy9ULDbu1qv2126Nyv2af4TiBwBNYGdfJ",
  "key14": "3pMPQiZmrm3EaPosbZ84HkGMgRwiqPP1uxQZ5xYKW1w3eCK6CV6iy3NirjAPgvutE7tqegHDkDX3eJnmBbKWnC2f",
  "key15": "r2DER1dPgKvFaD2vdqvTUBLcfasyo7KM3FkpXfa2T79Y6pZZ5AWGfrXva3V1ncx51qefDzo7S22PDhY2az5gQmA",
  "key16": "4Spufu67pnchGnCsidnoM1bteZR124XXSVsVD84MQk9wKTrHmDZVwveY9utYYS45y1uv9g65h5PhqUMiCnHrBWSj",
  "key17": "3Tm6Kgty2FSnw56f2jqdiG58hk2qRxLf7G5tXBvmDEcrzfvwNZd1tS5U7ZRExRYt9bKv7whEvGenTHMeG1pTpNPg",
  "key18": "4ZGbrpGjFwwnXAqYw6ZxziGhee5YSh2K7aTFqGCzyjFV541eCGoKADbABEdF89TYec8QCzHAnsPbR26YsNeoYycw",
  "key19": "3qXX3fR8EEH863EDxDifHV716x23AGZKJTZaqhF3NzsYZ7xfgeJjZCJF1eRqgQeymCVuNgsJu7Y75SfPd8RiNwki",
  "key20": "3TvAKTdWsMHobUW8X9PjVih6jM1ZuznTjTpJepEvUD3kgSwECWUfB6ar5kmD93dRRgjXkaBm3uQUGKyYqGshznXF",
  "key21": "7Fp2Qp8efh4yz4WeuoXZgsdxhAikZrShFjNK9NwgCtGysKbyg2sSzix6JZt1VRQxp6TnSt2SbmZYah9fgVcQoEX",
  "key22": "5owkjwW99jGYadQenat481Pzu9NGcGST4K2zi7EySrB7tAwjnFhgDwSDG1SGYMotBAfLh6Dki195u897iz9os3sC",
  "key23": "4VQ7iBvJyKDVE72ftpm3R9rGfFh3mWdoGrXRXAWEoDWR7HYNLQjd9tGHSm9kgzuugA5JUHds2ShbfUpwgWMmLg8w",
  "key24": "4Bwo3cwqYX2cXtKXSr8v9y5NZMiFDX4DsViHPGFASi2tAj8QS5GPJpocxPo9n5UA56fk2ZbPXEwPgWBT5oVoMHJf",
  "key25": "y7H8U7vR5S511Zewn51zKvyNKidL6Q8njfuiMPodewHr55hhGUvxkVPcRMd1wutqdwcntQvwnHhyFRvrtNmisHY",
  "key26": "5Uhxp6HWMpe3uAUHtw8vJEH4718Y3cNdSQ8SdK9mQBNZhHffeJkd6BUAJqu4EtNfixVCSNdQbriqmEbT4BxUyC5y",
  "key27": "4YTfYQ6izpZhUWCmY81ggKnETAUNq6EHT3zrNuF1wgRpcWFnVmaQRgCRH5WxhL2qonbe4wW7u8tSh7aq6A53c6oW",
  "key28": "HLZcfyy5xvsxLpKRUBbRcmb1KF8wTkAdT7R6vh1nNUjNZJkHGJS3Lwf3f4W16ouXPNyqLQd3W1tmR8d9hJYyekc",
  "key29": "3NQqT7NfSPiHrTVGbnkJDJcnZi3UofQmaBdfLrXHd5hMcRnWGkFnB6NrcfE9npVrmBBo14wfZybwsGjUR3MzyrZX",
  "key30": "3YRWQpMXwg3CCn5FXxJwHzBe8KrJFzgVkwAghR5EkUzKCz4ff3Prj3c1rEK2dRXZDpt4HfDe96UNqLJynjN9TvqS",
  "key31": "2RAnUAmyiek5du1sUXDHHqac3tq2xcyqWf1wyz9QYnGk9MurSrpVZtgUitVsDjaawbamx69ptWGBhvvuMcVMjc2f",
  "key32": "66Ejyxczy4aohdAu1UDNAvjHstvvq3QNCq3gkLKJx4gw4Nm9VTvoymsEtSUJCxsMcSeD7Mkmd7tKDqMo7AaGpUWB",
  "key33": "3sFPGLroP8JyH1bhk5XvDRE8TnED4tQdfBsfdf8Pdvp1igbDri1LV6ca3SWiua6FoqAr2hQt1HQyX6PFrmaHZ9Xk",
  "key34": "4dW3ZypPuvaUpd45SXBX6QLnH1zjiD9hRQnL7Qiq6vBFXJNiiKKpV9xwZ8sz19UJUs3ZLqECJSCMJG8tXZjxaZSu",
  "key35": "3cDsgutwKo1rxDtLQbmgoqUjjuJipbvgUfu12N4qJoh7bThKRt1h2kpQY2skHGhBbnqekjTxQUC9z1gbBKjJB93Q",
  "key36": "5Qn7bnrBjyi6EDg4rSafkKu5SRKMLfc9iW4FLmUmrjZgzDj1dYwF6RuH17nx1VhTt3eCGGMTEhH7CZfYGNFkjceD",
  "key37": "fVbpRVEVadAwq2zwLAsZhtqDnLYgaSJ5XLtxiy2Q5s8j9BP1KhiyHPwRfdXiPwH3qMqVoHujurXhMDCGeshnNDs",
  "key38": "5dgysi6UoVNNkyGyeKgYe64zmV2cNWKEUj3Zf81nyvCGcp48XzUgRxrnnBa8vfFJjE1wiCuuoxnnTGPgTBSQVpnu"
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
