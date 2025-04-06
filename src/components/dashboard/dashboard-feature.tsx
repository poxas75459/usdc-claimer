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
    "4dpkXNSQNXX7X47r5CN8iW8tLtQe1GhnQizLXwKa1tPVPk9P1ksjpy37F9XDqBGy4cHcsrEyNE7HYRMpeTnABLYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wNRakDae4fDt7jS6SSeqgPL58FyKz8crSg1UP3kvYEE5goMUKadCRM9zVxZzxjbLf1TLJk54kDjR4UJqDeiACDZ",
  "key1": "4iN3rrsM79nzAazXSWCA1Jc6AU6NNC8pLENn1YsQuNBjZt4J96bKPzVN9sL8D4eGxrD9JA3LVNfS5C3WTu5dieMu",
  "key2": "4rJaiwuVTwRmPK6uo9KHJGFJwBQWFq1gXMjHHaL6nLyw3wR9vZ5mjHMejbA6dBJHwiX3RT8WgTN9Mp3YUwxuRZyY",
  "key3": "4HdXLHrcweaUztED1vRtZ8DEVqotsb7YqksR6pFRCeFeXS83H9541XVRx1R4ULhzKcE6pHFDGoRwzRX7CRXPutdg",
  "key4": "2WXDxmM7SEetWDqHvGHsgQUE7tfBdYuHiEPRro6sbuyApZjWT9xCrNNmx1nunRGXWaJDZb34D8G8azTzkLyqkwwn",
  "key5": "4VBSb4k8avQqTXNi9dmsBT8F3jBoS58x1fym1Jz5fy3GErEdT5TGxsyRaE7kukqPKmMdD9KU7V8FCzwY3snbbtvj",
  "key6": "2i17PuU88S8q5fmtd1DFVZ8GBQ4i4AZmMGjdGn9dQxAjW5ivy62RcrYjVuiw8Hn45fdmuzZqCr71QXg7kX7tbSn5",
  "key7": "vfHYP5irL1iqA9LhizuMcx3wQ7nNfmrDRxiUWJm9esWwR8Dhyh7ym52nHoB1ZXa2nSDbCDY8eR5cQKHbroruU13",
  "key8": "cR3byFn1C6cpMWuBdt3TMJRMkkvtB7s54qgYbWk16zVAC8Guf9sYr5EU6ZfmiWCdeESmtr3dMta6eQ83nHFyZyf",
  "key9": "dDuc5jqZERqhcZhygM4nBLhUQiQbwn2D3kN5by4trkHUmaozhaUxWbJmKE7Gii5UuganxtVSHkPGyVUifKm7zYN",
  "key10": "4ammPCzmLD3uQdQJftj25iJfJPdTnGKqafTZ5dpxZV7ZiqDdbt85gd8TjjyfR9QwBtYmd4d5rkLnMCgGGxe5yiRE",
  "key11": "4ssX8oPkiQtGKHLyUD1s1WVRuX4a8YVfQn3G5Qf14FpDfyyMahAC8Dwq6tDTBf9aAd5ch2NTcG99qotFAaqkRYum",
  "key12": "KEAnmSMEzjv7jTGqWRYzTJrH3d7MugpqP1uvncBXpiNDqZhUQwqfcXXJkzmypMe9JjDQv2QHrxCcGVVQLp4wAmi",
  "key13": "7WFHf5ZaDRoHUXzmhahKZuNTzG1c2qGgK9mtFVqxYw2PzaiQRe7EVqUFhz3g7BHRiy5yNcLXPwtnVQiVp1LtpLU",
  "key14": "P2FW7poaEatzS3k4E5zJJYtDAMXADG6ptAwrpasZXD8d5pgw3cTytsaqPEhc1jrr4JWvn97UV9oNEpScXXNb6fX",
  "key15": "3k1Gpvb3pA8hLXUxiJEdbDcy9vZZyWBRcrBcMtbZp9x98FKxTSvGbSHYEuDj7jDjKMfXuLFsGf9DiALXrerPt4E",
  "key16": "C2eYhvc1MfHVck9iki1795JkPMCqXZKvUWsdeunnScVdkEcZj6oGnPbQXJSeGmnxPLxB94fhTs2C75HULTBqMxi",
  "key17": "MmQkUq4iKeLQYaAbmYbUZBjVz5dTcTsnjXonGmQruWPoH6rtPLRcW2qYrcLvdqdhWccB22RSYJ6GXh7LXnUNJhp",
  "key18": "4auUVwU7AiW2471xP9ZqGD4op4ehqDC8EPaEK7W6keTE5n7yZdyx6Hm3ULLhxNUnfRfUkV4cudx3qY2jfKLPrpSX",
  "key19": "3Y8Rd8zqFJxtjU34yqtyso8RdfoxyDCMGhGCXegAnkWgocsoHoixraREc3MLP4kDShGXfaztZFGwmXywMb3hgAGQ",
  "key20": "3P8SrQWyYoptWCVyWwW18ih2GHyJD4ssBL7QgyakM2HuGHDdcGnTQZxHPXCwiWV4XjdobZruAmUhjAj8hoLtuuYT",
  "key21": "5BSHUAXf5u6vjXXTHWu2jSytS3yc2WuQpdLw2DVnNsCAim4xks8ZXsEVgswC9YHL9kyeNWz3hnrqHoCWTYQPiqgP",
  "key22": "5qi1jU5kQDaYnSP4zL4oHSzsCBWPFqFCbeFUZdgTNnW2N76aFayxLYoJLPbEHuVhF5MHrTJhaWTD6Yzz8AUmJwHR",
  "key23": "3HfBmErif6UcCwmkpNWxXUMqQzEGCsYGoddBJSzuzBv4vfGgPLXLbmaMCyqHTYYzyrbLZ16yJvixe84ZsxUMKAEL",
  "key24": "5s6ogH6yh3zy1Lczc8Cv3Wc4BF9ZGZJUhZjBtKYDYhVokKhgMtG4YZHQDTTWKYBYvNrNmLsPz9ruqHB7uWLLWYE1",
  "key25": "kmufVtoJoWd2FSgwUu7y273zVkHA368dXmhX9VrLuJgAcrL6U566M8E2xySxVkXWLspMSMw1wGtyKnroEG3WTbo",
  "key26": "3cg7QdQfkQWUUMDLF5sfKeCK5rkPBaMDTY2NDRX6rjgksX5Zyqc9eiM79R6Ganw1zDNDmVtdEuGaWtpNfAbzp6fz",
  "key27": "4wFagUnGEAsNSsu8Fvp1c4xvc24QD6amSeSHx2PqRMsAwj3rW8VBsSPYkgfe2hALFAhS6ZiKmY2GGaWoFMzBKvja",
  "key28": "2dRzoWSj9AjsGDveuxkVEHbDWUCnMAVAegeA84axukGC5CaS1SdHksCEaqp8LACNs9cSVFojEVd9zdG623LmUo2v",
  "key29": "dLspHp39DADkAYc4DeXArhVz4FQMRJNUtxW8nwfYcivn2Fj58JmXuFRhDzXp1NZjvrYMKSzzQ4JVWVhNz6vX455"
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
