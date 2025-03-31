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
    "4i3S7PWhikDYZVSAZZb6aWYN2eKb5JkZpmVuvGecWhntLHhx8oarVjjZKuCH6cY7g77zKo1nkXK22pgvcF215N7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3q72RnmdiFJkJDfYSV2bsRnckBrTX9hhrLZ9qRPxt4QxAB4RFaQSHQSN6sdW9oyBBtef5KBQMYsQ6dEiepEp5F",
  "key1": "2xdvksLz4FY3Ph8shjwndNbThLB9Vg96dUGSgQNyNm375oErpqduyWXptgkcgtdEMUbV4HNqbgEDLunSRVYjTtvp",
  "key2": "DAXfqeYzQBZzuLqKFvionG6KVyxZRs8V3h54bi8QxqXinrvM2rkuUFsv3vtPHfFTJ3a4NgPeZFTrHbWzVPsExGt",
  "key3": "2vTzeGD8SsgqrGGzgCEjr6tPXya9H71y7KJksLEbEgEhYueyi5g7Hnwh2XNXXUcTMR5Z444gxi3RceYKnQKHnw9x",
  "key4": "66J2emWykT6axRXzLsFmJqPpx1HU2fVoKSjQUQvQSu1r6XFhBaN6e6LuiRp7jGc58cqP1MVauWzd96i9VnQWZS54",
  "key5": "4kz6zVkrrryYp3KGG7kGzcniom8dGqAJyRc9mA5rTUpZfLgJzXkLP4KcNRgs19GJCT1AYCFWVQLGUBgz8UqEzeqW",
  "key6": "T7qLYrqQGLJRjnbeT3KrxEcuQutLzqdPhH2qQiiKkaJJYzb9ZzL6dGQLQh6Znws6HrJftgcVaV2NN3Q1GgzsUew",
  "key7": "4LDb8qVqSAoEsZvCsSQiff6Nq3Kzktmxwn2j6ZNZmnR8wHq8AgEYdHrQzkAhcczapm1iPZtH6AcQXS8tWa9NisYj",
  "key8": "2Lhv5dwHQZBHPqfwaA4zcz1DZFXp3PdWhfu1x48wN2C1fBvaBPkYjyidr3RguFaGWK8Ua7WPwZ9zZeUKPLQjazkS",
  "key9": "677ZaATkEvdpaKjA5uXw4HzjsCTGje7AWM1kndJ6h1bTiY6MXiTDxCaYxFRvrQmRKmS7X7xMw6dpeoujyLPn6QXx",
  "key10": "3bKzkMyAjY7Zdg68Hb6ph3XJVv3nY5kzQ7rR8fYiy4FVLD5W5bS6gV4jWNY46oWW6ZcUeaayD1QaZBEDAKPGZAXu",
  "key11": "59nBW61pbnT4SMAcYAw88Kf33mZX7rmjD6GFLyqZNskPLN3pMjwavmpDNHEd5QnPf9Zg4FX48bBMg49vi45LF2fG",
  "key12": "2iXULKTeg18x1JNbpbcUPh6i5JTnzX1iHT3YSc8e9fZAnqfhPMAhzycSkgvgtS5DMZ2XwXkqbpy5USP6c28fAxgd",
  "key13": "3QeRJu8cyeFuB4hWFUCbrMsaFymHzZUXUqPa7hMeDDyKoYw2uEuk2u9hNy64uUfEVpWBFnqgEdLmFYP82MxTR1yp",
  "key14": "2kZde8VktoA2Fu3pZHrcfZXFR13dquCgB28LspMb5Azs7tUxc2LK35c4KYAo4zxoqPNW6XawBsYfX2LUoH3XzQUh",
  "key15": "5KvE7ia5CjhrkJsikhjDEyF6JBnQUvfk5vjktSce6a3NsV8yofbj4Rw4iCP7Dj76fkRDh5TC7KtcjU9HWAvbLeFx",
  "key16": "4MfsKrsRpLGiofBmwEZjPFErYbL1qbraTNUt1GNha396YSsR2VWGqpC5B5azizR6ggo5GEZMuXzDTeSGcrSAh7Dr",
  "key17": "5JxdyBuywSJQmCwmARBy59SmpPRqVLFS29k4RwGgSFUhyuQSz2o4PJN1jNcq6vVLzic3MFCR4XA7UtcHsBGgmKhN",
  "key18": "5XiZs1FMDsJewE1aRFG3AkA3Tx81meojWt4eJYQZNqxkgGH6nphRVaKJRCbgm17mRPrm5wCgsXJcYKzh4MeQEgn4",
  "key19": "4k7y7FjGWoX8R7UQASuer9ETt9XnGwXy9Z39BcyAkjmUG2kfbnSAtnQtU2B9pGwdUkp8C4P4ZM6tAfwts1wYcMeK",
  "key20": "2j5j3knc3bgxCcGjzc7NSsChcDC6xxir6GfXm3JeR4TFGBesSBknim6XQZ1qPvPH5tYLz6VhXAPjk4xeMDTuZ8dg",
  "key21": "4AzLhaLya87ECUayF7RZKzZGVgrENddXraxRqtPQNWKNYXAMTKf8Mrdc5BoP69Trw7ryLQ5gcGAouyRtLMkTfefQ",
  "key22": "3ASm8oc2g23ZCsChEAwX8C7eEuHUdnBdLexxUGKbuADYmUjpBxayMKH94aig2SDZRTvuzBRhrXE4nR6HNEX7gdbW",
  "key23": "2b4q8mVbb3erxqpDkqLsHk1EsB6LWbo2ExzoSwTpw6Bw2h4SNBx8NFJL19DprQvgwVty8n9vJrhc6TavUabGjDaE",
  "key24": "2vRQ2FtecWXx9T99Pwd56DkPbxsX6RURBst4FqnHUrpsg2qbSdhMMyrYduBURd7gNJw9wbiKwQhxCKm72QyijnYT",
  "key25": "3rtScvJ47eQojWAWxH45uFJLw4GpA5vMV4PuZbwG628CbERbbMcz5qYVJB9KAZdV3FmQygxU2rn4xuSnUZWoFGs3",
  "key26": "2wDmU2H7gVjwDkadaBeWCM2CQmAM9kiEtHDVbuBo8udEPLos4tqRNH9wbZgSBx7b1zTAqVyxWoF3L2dqsoPPZtgC",
  "key27": "21HwnvVvSoLr2eagZddJy2GJPqtRhHggAbGFNrBhfQR9tpHu4sV74kKS6jJbt8QYzjFbATWrYxEozkaah5ZRFRSS",
  "key28": "4fndFyQS3WfEccsJVhatsHS4LbbqvPYKqTPPyk9sti7u2V5z4R4KwcEp41zdPU7Jy7tU8r2A7pcEPzg5jpBmj9AE",
  "key29": "4zdUPiB7rwCJDZCBqi87w54BDPiBERKtwcEzouKb26JmKKmwQVECBgvPaGat5Re4SUTRUT95nJ45uHZ7bVCiAKgG"
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
