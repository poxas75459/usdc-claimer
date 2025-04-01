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
    "fdywVY9exTHykPonPDKZ7Bq82no4sH22AjwKjEb1QHn5wApj6DjZGPP2VvBs2Kh7Y6LBBm65pWgNBQM9to7caVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZitiEdFLd2rdbTawrLW2ESYBXjh6hn2LJaMxgCAMQ3xiVHiJvTec2eycnCoNx2L1vyqNXx6xC9ED3GQWkmPRSEB",
  "key1": "3UTKzKHkAeU3s6mut4Lt8bYzXGQqgu2FXtDFkGAeHbhXAHY9grGEscrid55x8xCfQqbL7W1JKfhTpHkH8bEiqCaC",
  "key2": "3wo36JG7LxLzd7wpZP64X9vWduWjrUzCHGLVXLgiwham9E2fTwRiBWAJsCxeWqpDk5gfhbuH4TZqLFNKjkvs8zJ7",
  "key3": "4yFBboB6ZZhe5q6ENpRMc6ohQdX97UZnG8LBXKSj5KqGR6PAc8rjbLtYLUBjSw1AkhnD9b8fixFVWueAtjUqM5Sb",
  "key4": "4EbctYq4rPXHLTna4KQzVvbxMkfqRxuUYPM47TH29otQe4A4G8erEhPj2Lh7sbMYvCzdUCdD3N5mBJChSEY5FzCV",
  "key5": "ZJ9yyVZPtAPekjv8FrpiKJvstmFtzfAjG7P86JSsvvh4ahU87KerBfVJYsdRGTGgYWJqwQK99v9h29vPbACjigq",
  "key6": "26YVXofkfiU5SAM5cFKHJ1dTqzzhnk5uR1qhq4MYxjro2pNW16J3dRcPoXbHMU8UKme8Jj9gw9p7shr3q7BPLWDG",
  "key7": "5Zc7ukWAvABYQoGeThqdtV5oSvWiaE4weFf5bL49ihyC2CPn184EB2pVPA2RpeSjDHw9VJAGTAZ5sB5mk6beW3o2",
  "key8": "2bTKahQJSEYCjovbxyhKnDwqDsFkzQsDfhU5YkME3ZDWppTuatqc3kJPdmCf13N8U1YNApxysDMhX8iwpcXazFg4",
  "key9": "8fWUZcfbqHTcGib4EmMsEc9nAJNyvNDnyXU7XkutmHC2QYrHygNSW9vPUHR1FrrWjm5MK1Hs1ThDyU9dyWExZtT",
  "key10": "4bLNmJg3aTuwCU45W6pAQssJUfvgVgyEKNVbjizTqeyWtVYkUymWagEyT2YFwWsw4M2KC5yseECeXUpfRxfZgsSy",
  "key11": "4NZnrnN4M7cGN1mYaew1iPBP7ohEe7qKaev5eGyj3R7JEC38gqTiroVDAM3i2ehKrSTXR7Txr7V82ccBJJaQh9n7",
  "key12": "51xrHe1ndMbwkMxhwD25Dn8Em33GBNXugB92udgnpuT4zmGiFDegZoo4xhZzLX74KjG4yqbrxerMepENj2wtsZ7H",
  "key13": "4NhKeecsyGSERe9q5R5EAq7yePHpLsRcXjBFFWXGZWi7SmgMmn8hw6Y8KizgmYvkYG33iMhgQgcuW7YijMgCzDp6",
  "key14": "4TXnHR5qkk229E3rvQzbivpGQ8DzJN2bh3WGQJBPi7J6nQmeUny6xqSy1kUBemwgC4pcASNuTbugziBADygkeja",
  "key15": "2u5UTtpUeMCtmMB6KWpf1d7JSCbuao9zV8zoYzT61jM9oBU1nG8SA6LKZVvYFiHPizCTmEkYnGHP7K4N7MjLLcx9",
  "key16": "5RHeu72mjreRS3b3kZ66VoW9jCWeap2JEhV6XYvFD4VecMdVZJLh95tuDVyzffQNLAshbG8oGwEJWtbjxc6zByV3",
  "key17": "htpMDvdzfJNkwhdt4hvTwUuecQMFrtCK27MbKZRdAfP5iM7QAp72aYwC1bBA9TvUpENLSkTrqqzvFTkEymovQUX",
  "key18": "3RMNcbhfWrxx7LxvaHvM2HCiSjXFiS1GPBfzZAj8b2Efpu1tgcg6FCP9AChkbYiVJfB7s6TRaLfqBpKNMR5h3Kzy",
  "key19": "2zrC6DUeEcAsQuLgoUqG6siroWVt3A1uBfiafCVMsuvRU5UPQcfvfgdrzXrKaZQtebZmwaXmkTbXpLnPajhrUTJy",
  "key20": "2KCZ2wvHvnv2vPx2G7BwkxZE7iCFJZ5QnUPQhaY5mkLBkBdowShP8JCCgLr8Ykwzi5X9rFcfRNpuAde7cn1XyaPY",
  "key21": "38umiHpuCgxa8mge6FstVJorCHbDyv61WqL9NAKskYvCF6PNknmHxEmnWST38B353r53kKiDzBJ86Ett4FmrGcDf",
  "key22": "2bDRKxZm6QvuNuqGRiWrWGQQi46EZwrS4878KiEgu29b8xjnFWdc2euFzgWnxXPXV4SmsGbtP2smTQJynXEBKDEK",
  "key23": "55Z1NimbVHdE7ZsnMMHvVgq1brvegzzTB18GxJKbACwFgjbo5JaJEbSHF4pTdBVU2mw5rUm64JN6nYe7J15cMrP4",
  "key24": "3VtaEuCKLhxC2Xg72ijgNEFepdgujwDTmBY5bwSFqTGw7mcGNL5gQCracjHKqNcTat8h4YWbYmvdxZoai288FWvG",
  "key25": "3FBWvE7XnpzcwrTNc3hx3dhnCPDzammqJVqhnW51u1yKyW9nSp5zUR6m1MXi972vTxe3mf81eUWP1CoTW1ea9Zma",
  "key26": "4yzzH3j1dpRXeQzzS5DBsawwuZfDwrK1MTUJkX433jRaBa3EhLWoDaXbTcZBJo9Z3SgGAWw5qXvQUyaNSb46fALE",
  "key27": "37d3GFD7FBzWfkYKbBcFBqY49DC9gASGmfi7SMosUrKGcPQ2G6LFckhytZDS972VsUqvx6LehzeeqEZ5UUAz47mt",
  "key28": "639vPe2aUGwn84KdZqZMvxfwFxj4ZvQP1ohJXfHF38W6vomN3MRqWQM1cXcnoweWuz2DWiLmxbDn25hSBEmNVebu",
  "key29": "2Xfk2n8J8aZak1CGy97e7kVT8nwbseiV7tz5Tix2nM9epBNdWWD2codnvAenXzoigZtB6EeJNTTaQFE7kj1ZA6hJ",
  "key30": "3RDqkU1DwiGUnP7hh2o39CYbGaYttNPdEk2UYawEvmSAsj8Eb8CFFji175f18itxwknF7tVf564iiXXr9bB7cEWW",
  "key31": "dKDbw6YJEEfonPURCmtucj57vU8fUjhCrX3AbAz1vi4fzdoqt9zN6HuRELzKZMTyTH3diNrFjCRGpfTrnXQKggH",
  "key32": "5UYajVoYPsCjgGpmTh9jZqYLs62HvFSEUu9f4HWyUJyMaN9dBL3cjELece3xFQNS3tKUQStnFzWdcFpxV34qd7yE",
  "key33": "23jQr53CRJYZwQvkGpszMgqhoX8aNnJRE6dG7bPx3ZYXVnMAzawiAwqJ8wAQjzCAQ9jBu492GEzikRV6vFC4m16g",
  "key34": "GJsnrL8PRakghSkqqLrCejK43e15KKdZhbmb8nr17Vj2EGbL86bh4wvDPXzerPMzuFR9tWT2x3rf77t4ki1kQfc",
  "key35": "2fkX1WJt1S9xBayZaR7PQqkBW8sqCDM1yQxT9FtHPByAU4Qr2ZJLFXJesAvf71ayg7vEDzBAnqknsuofFmyfyHm2",
  "key36": "4p3AwsbSwp76ctiqJdQwjUYcbDGvgjsoMwy6MVyY3Ch8kgfJemzKriKshiRj8yys9yfrR9YfGCiiEh27RXePodCR",
  "key37": "niSZA1HNoBGYcUqDhHBFipwGHAxdRZLrMa8RXS6uhBuDeZiTT7hBzMVVNCsTiKCsMXaGFwbhvhH6VMdygR8wR8m",
  "key38": "2iBBQy6vJZxA9KJnUZmHMCNs2yrHxWQvjtKQgu8Euyp1tPpHcmoQfsF2CCkTq5yUPdnDim9wZyZMsqwTyDqvFb7F",
  "key39": "3B64ttQCPpCKqo3rDPrt1BVKUYAW6MWXKP13pWdiwBbLFGxXHz5ubK9S2uM5or37nRGU9Umz8duPvhN99VHUi85B"
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
