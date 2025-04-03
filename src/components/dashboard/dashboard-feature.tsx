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
    "MbKh7DLXq3HaG7AtmR3kdMSuBZ969msjq5h1uVFqRZSwuNigenUy6PWW66iNJfMxaQqueL1Tm6it9LFNj9n9JoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ek9cZeLX495qsYxj8xHbNZ7SjmeVGeSzTNE6TNTWirMJFjV7nS8EYCxns94mSDKdKoczW1gaEyWQgsDgSXM3MTK",
  "key1": "37Z7ULNBxvGMeBEfcHaCaT6CxgCLvrbHrQ5AuN9RLXQTSyjAqz1Y3DtG4AXmGGCmZDY3BkqgiReX9GokYdf4xt9a",
  "key2": "4RxkK9y2Tub8dwZbgZR8UFtSkKZ9uR8b4qj4tYLr36cF2LYhk6WHQBXQDDUka7cCpoZeKeRLpmKJTz2Zphi13yc3",
  "key3": "2dF5tgavz1pNuUQb9M23zYUx873NWrGV6LwdeH7nKdAtRjid51YjJDSQLZzLnN63WimyhA4RShCPF1gWjxJKd2mP",
  "key4": "Z96nM3wz3442zkVjfQpzx7MsmVLp8T8eE1MNnRBJdhJYyjbKRw8ZJqoGbeEYY6oXox3bMAoM95iCX4KwFhfKLcN",
  "key5": "452LV1WU3thBoWEBanYMqRWz7hKQPCB85MTjJftUBM93hUBqDYcPXwM33RWtctTBguDnZEadfCHtQcHpJuKLneLu",
  "key6": "3chWdJEKLU9FzzbWUHazszz1jonVS6dNP37brcJRogYHKGvfdLuXL6CWCwdHKJ5uKQ6xt2auXkQpVWzjcGfrcLSH",
  "key7": "5jrJDBHZ52iHj6cTogmxuRRBXwaMFMfTp74D4e7Czhi1djixUur4ngdtrFzgQ8xKSokNt8L2crjcuv4jGDSCuUpm",
  "key8": "3Yiy1U6QjYa2N2B2kyyU2HAUtyjsvhuDZpgYpbEqPT6dvWkB26vMCnP6WwJZnA3D731wKDKz9GhjGrsnZ2am2AaS",
  "key9": "4exZSrmcBFtzQZx4nHWAhRCJFQgcNUa4ngKsh7mnZjM91E8tXHwzrPpoNLbkFoVq5p8ZfZkfvVCrYPEQQSSpygCK",
  "key10": "2PH51PZ9SoxTEUBWPHYRVa19nSUbh7opyjJi54ydXLxB5PwmnvsurUXvbA996EMV8v9qCVL9hF8pQi8t856RR3v2",
  "key11": "56Ni8vK3qfMuJRhP35XSSPiru1jdMSnSKthw2ba5LEsZcPhwAnZGUkrpTgGG1aWBkAxvPK82ZmCNbYVJtiBTkVhn",
  "key12": "55ipzKPK1sewkDTdQD4P6j6LwdHMNg15tzY8FUkVorPNptud3n5VidsYbtVX8gvHEovWGp5FG4rNC3mk17eCQPcU",
  "key13": "dU8MwqdKzx9g3WAgpfLWiLRATp9PaxvqDZom6b1hq9xn3yAXxmpwdyhaXQvdujscs7vBLzQe3kdE5MNfzTXtH9r",
  "key14": "3fnzYebHAD1PGDUEsmWvj4b41jB8AZYXSPzgGNHWeT3Y16CirWqqTSegZW513KzpnEeERNXTHgwTgWFPubeJ7G5C",
  "key15": "5WH5PFmiqMHRZ9Sxm9qdviY1Kug69iz46fcdGh6ysP1fMwx4wcH66hdWmQRiWi12TYXBngcxA7dzPkcJsVHf3SxK",
  "key16": "NYFCjwGnuP9tLzotNPCdao7dr6Uj4zrHYLUE6dyaBzCKGHLmLESvajgaRW7k7igZRv574A35th5poseu6EFM8p3",
  "key17": "uU4yYEB6zTZHuLjro87QqjUNriiL6f3d5Lyj4FMYeQYonkyAeD7Cbwwz87T55k7M9uUh8or2iYLGZAM5HaqAm9u",
  "key18": "2kAJq4SDm3mWQC5zD8K8ysyhJ3sFWkYmMVk4xAeMrfk9QaNgRWhB3m6KunLZtX3yJ18cMzquwo7iviwz6XmQCvdf",
  "key19": "2AhKjG496JNFWPUhZpZM6g8tYbftBb7rKUx5NrxiTnZQLg9uzDudkeH6pMd4XMyW8Rtavp1WPpjftWTzKfsa6fsj",
  "key20": "4sYyQ1qbbFXgPjm2R9jqSuZtweMHyzDohgqLUieGtNYD1QuP7Kyg3ZQk2v1RucooDY9PjtKicbN6jSAPHtrWHemV",
  "key21": "4HBDYzHzs7F6Qo8veabNstuB8KUXJCBUQLtQePS3Vz89hV7afwzTK33FAH1SDqCMGKhwFQ4gKEJ8Q7cenFHMRuDe",
  "key22": "2jfaz2oahvadAov9xLrk6Wn1fz1QAWctaD8HKXDV8tfUxWjmAWWBdNBZDmvMk9dZuS6dRBySrAG1S6gQYRBLndCa",
  "key23": "24mVQDRduxgxtpZjezwvS3yQL21AhLanJ9SHjQvjkSK4xqCzjV3pjVQi1zWMiLgJ2WnmdZNdKco4cjumNaK2tRSh",
  "key24": "2eA7Fw8Xsv3KQvLoCovKqjpB13EWNSQgAgGqdkwyZmxadV1SVjFzkDKYsPXUGg9FByfxfq7L7CqSYZSrZGW5NRGB",
  "key25": "3CpnZ8XnArBXwWq5Jbd1g23DhaQ2j3B99FvzcfaKQ8gf7jcJ7EtbduM2f7Uqy3Bo4E8VGzeDH718cLL98n1jKyvp",
  "key26": "61zhjAkbT3jNeJe83JioAUrsERnkeeZuFoiELVB1bvVvzm2s1MG5Karey8asMiPQTiBn7166G58Trn9eXZBUPJve",
  "key27": "5fjWpTnA8Mgpse8ZS2irzEYGzQdRJJsSN1udzErRdUB8knxmWp4yW8NbRUBo8Bu9JR1rahqvnrvepBgdDnsKX7hi",
  "key28": "5wpEf3sBaeHSsn3nRVgpGAxCHw8htqkAKRLK5yZH5xwB5vkozmoYGZH7z4CqK7KBTXqPuwssTQr5a8jaaUs1UhD9",
  "key29": "3W9zjrcnpdyPJrEqNUPF1811bEJktHNJZxszAQjSmGPNDkEGd1RdnPbFvyzonFPfFEoGAjbFiFqnwUBtt52HSwvn",
  "key30": "GJU79B8YTx3JbXaD63oUVZWjcfmK8kVrVwkE3g66BURhdVSFLbHUUbJd62N4E7MRAJM5LtJxntjvvRc6kGgeUNU",
  "key31": "3taxTKZMVaZPHBYt1SSEf8oatV5SPKNp6VMdykmLjWxjXQmWqgLwnmvCsR7bpYs4cGxiqS9pihLQej9ssnWog6zQ",
  "key32": "PBAH6c9i6nKqhoM4QTkknRR8kmfRZhzhpV1vvqf34BqyxEjeGYxuoXvJ5h6jk4wk7qHFGHT76mejb9Fp48BDAD3",
  "key33": "2HcX6S8CY5jXZUzp182qoqA9R9caDJckzQFvvnxMgSddgPJtXGVza7gwNSfZx9gMVBxdog3V8xCCotk1GRtDz9et",
  "key34": "4zgHb4g5QVWKgDF7VXfYzQ7YD2xeujmj1YRPWACCSJKH7fu5b6xAcBnD9EN1hJzxvzFQ6vWtVEdafX6uWSA6e7GL",
  "key35": "2zw47XjRAkX6dBd8t6UFXAFBHe4oYXTT1Zzs8kKyLaKSskATWASySMYwwLiMcUcjdsS4mEyAxMZ5tgUdnyVaq3J",
  "key36": "5xbaJw5mR1e2gBi45K53Tz2kW1DmT5Sn9RoKjB9ch5BCw7ajRUZrXx9sYuFGvzeD9aFTfZgqt4z5ZQaSfzRddcZK",
  "key37": "3MzxscDNMNVJWZQuyR6nyaUeLCRBBhMnR8J5hJouAy53VMykUDSEqappuL7vrEPfKMUT7qFH2mLs5Gy3BQH1oqR6",
  "key38": "CawZJ4UoYXUrBeUo97VAG8PLurxnvA5k4kX9HeSx6KbDo5x2SgYeMvLEmsHsnGMwaghUXN5eMNjpRXoit5kDvPM"
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
