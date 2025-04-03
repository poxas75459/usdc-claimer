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
    "5MfPX7KpAEoZK2iBXmesJCwBuJSB8qvXHks5dC8QHjxZtBukgvKdYRkhzcZ5ezBxXMTuWXfoPNkY1jetapabZJGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iUd2EDZVyzq8gYnr14uA65v6YwJvyAq8m45fQVo82AzqtoMYrDnc2Zix3CT6WKo4okr1v9833xTpYix4RRJ9QJo",
  "key1": "2q7FUuHVUutadqYtws7QpjS59tChiCvNWVCeKQrN7AgKryGhMoUKFgiUCbJPj28fBQASZJKwYfybxhbkxvqQ9G8A",
  "key2": "3CnMMayviAmG2UjDvkKPDY8PmNMxfUoPy38h3qP1extb4g7BNS77efjsHkGzz5WrgSBagQLVpd1SjmreWuVFJGwq",
  "key3": "5UPQ8UJBEbFxijEzPU5NeQpuk53PsduSXunKC2oRUSnjYdWtHHfTYbCBvuNANjhXsnwhCTgtdr6ffjzR2Nm3bbGx",
  "key4": "2cKiuZsStfTGV64t9P8QBEBD7E9NYapiHLdAzo6xie7RPbFHX1Rfvaj3pHf12AbEdF1SoDScMMEcSMCjAfGZPSHb",
  "key5": "2hHG2SREuXQhgAEwWCxyA44XEZAsjtKaT9ZZkfryD4pAB8bwqJSAr4eGBocsuhLNjZ91cgLtpwz6fcw9dVNR5Z4m",
  "key6": "2iwa213n7hSXBmkUSAwFS7BGUq7pAW7Q5DBKUHERoGSY1GRnn2GF4hgcftxdvqyDH416cd7jKxVNVzDWDVEk8cjp",
  "key7": "bccHEgvtBvUMy5ZhcjyfygYytg4ZEPSsNjAAPbZbBM5xAepVEVLYKDeG1b9tVrcrkM2wEBqp1ukyrd9nrPBLBof",
  "key8": "5eAT4mDEzatBAqE5MDKhA7JWtsv5stnQKDHYzYqtBW1oMXsx1ysiYJyKzqREgcWpGP29BJyUmJczkD8wE98tSnz4",
  "key9": "2EpLPLpfaSxwBtGjQ1xdddaMC5fStNdSwRC1Wcr9U7ZEuRuhLiS5HRvwKu3wzDrpVW5rCoZJGKUbBJ3oR6bHjBZy",
  "key10": "5o4xenMS7nZFKRXwij7uFMzRqm61msGE53ANJLuw5PY6UJqrRCMzaakHAK7UNuNaaqtbTUV1FWV8ZbhQLp4ASmde",
  "key11": "5xcJ1jsNSokQZtt8Pi8ni4LWpDSKAnBX7Sz12c4gq54ZebUYGf2crzaThqLvz1UD9d2c5SXFHtydA8nRuuVUD6wh",
  "key12": "m51HkgLbCUeYwxvWUdCSKKuHcS9PbNQ9F1E8FKQrMGnrcxgfRwbxjFsHLpZTx22x6PbaKCWhJcx2yQvUsz1SMgC",
  "key13": "2xU5xd6UCbJiubLMQzQHNdB2YAyuA9F4SreH2cV8YdgAyPQVpqcKDpvwFPobX3sC3vc1vAUbXDXFScqjxGhLMnsD",
  "key14": "5NCM7S1CA6t8PoqYh9f3cQJgGS2VAtEQm1mBMZasVttQTSJKpBeAkshknLxUFUkoADoSf9EMofEY6QxhbKHyZkAK",
  "key15": "4xo9WSt4k61MBhL4PstruwxiZGu6ZMm1q9qSedq4eKwZ4ysdAhycMRVwywz6y4hKKSDSmU31zyfKThwKoax5h4Ah",
  "key16": "5toHysU2JPcAE7KxLbvYvu8gL9YYoyVJrFWvpzG76BFetCMA8Nm5QgMkZ644XAaxDgpVjqpUACpmQ1nzHet2p53m",
  "key17": "5Q25J4rUWrjBJSEnXi4Ai29v75SvfYGZYuo3pBsdm38M7ghRS3fax8kJfUPGtPrVn6rdXy2Sqh3v1jH5uzv76zYB",
  "key18": "65nzfRmUY7wT2fHbiXEJAkYKQFAsWGyKqhY9Csyzy6jM9HAx99YCStxDXbQ1YHE2oU9LbDCCx34xCciuyuAC8wMG",
  "key19": "3HrnM2HAGgZTgSodKyi2wdwU2YnbHphpx48B5nwuqxVqPi8KbZobyTipw3JfSTBxBQLcUAS3qvMYCVyyUqp7mvrn",
  "key20": "3RbgYspgaM3nXn36vGm6191GF4vwFHNMHq5u3KwynGL5YZ2Br6q3JP3UitAkFUSsL4BZTTT7JcYsywwVCUp9LfCE",
  "key21": "43pqyVGApsnvZT4SW3XED7GiqPj8UYkXKEZCvpi4aVymrLKbqGmMro7bxLij8T9UWSZFV6SJZ1WLWjhHtQQ7ConV",
  "key22": "2atGFxndfEieqEytDXfjPGDcEsq5AXV4yZTFW5FSgzoad4tQevyBQmd1SDwgaR7ykkZvRBQRpkcWnkuL5koNbaPx",
  "key23": "2E72FfJKXtYFMY5Czb4DZf12ByfTPhQ79sEYpbQwpNTgdk6Lj3gnPfMfbfReMRP9B8LX9hnF6wBx6DSQ6pmkJ5jW",
  "key24": "UzXUjvE656WWPtFJVVZomc8DoLNmqsDGQ6hvJH6HVKvGY8VsAEEA7MdB8L8afqdHfyCD3G3gpUqpt1xKofNqjCx",
  "key25": "5esghogdrFRwLfhnp9mtezGFfNtmoZF4KCWfd4K5PgcC94CsrqhappKZaPekQdiKiCuwWpTNK534whSrSd9BkkqZ",
  "key26": "2VNhjte1kW5HgSyzZW1cnHouytJ6sSXntsgfJa4PrRVvKJSw2x8EgEWJ7T9ZyAo5Zxuou8i8HGwtRP2NNN5aGivA",
  "key27": "42dvNQpEXy4uxNULVxBy7vdrvhXDACYHJiRrVLDPa49uvFdJRa4WXjuRtHzNCfEKDaA2U7VWAxqVwdQNFc4FeyXp",
  "key28": "2SkHh8E8qgc6TvgR2t6aYa1MszAi4JfFpoKi9tquiRBkpmC24P7r9XHr24vr3pS6MZDdtWr4sY4RhY4nYEE15acH",
  "key29": "4wnT3kYP8R8sDQcPuhY7u5D9ZGekw9ukhSioxBLy6bbrNFG93s4MQhCyyHhAPdWLr67z8CU4fhZNW2d9buy9oqMi",
  "key30": "3SheUfuU3CLF5vKWzPofcyedNJ8Mcwe4ZdqBNrfMX4RmCP5rpth7hJ9LrZ93a5n3ZddEi9mHzpAG7B4vuvTPfM7d",
  "key31": "v5uRqKvd6G8gNZG1JXVsMXDNqD73zNnLn8smjcLS8JqiuX7eDSZQFR4tAuhEdv3NMpBr8S7nYP3Xs663Bdeq2qj",
  "key32": "57fcDJpxqbWdZuh4A4NxbcNwqWq81D1P2eWEf6iwuvSnEzgD9wVgJGieYr1gRZnYGNW4BLbvt6FtV88ZXsqKbEWE",
  "key33": "47zxXpwqxD4LTgHaQMFDyWSd7MdCPpfVHMXQDuyx7qBhq5F5TXe28VF7wryC6y9VWiAqKaTYusffnkNt9sp5pzM",
  "key34": "3SfNeQgdgAcsAG65ADZg3pXZYFBtaPKN8RjAcuL39YhHFXbEBymXNYc9HZvrBvWn5tzwtRqhDMk6Hi9bAkThkZz1",
  "key35": "48Pssk2H83o4DMJyidWnmZDEyJWrne9a4KrmYoXUxeVPigejVtgviULBVgChG3UsSWSqBYY8mDKjGsGvWHzkfWYo"
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
