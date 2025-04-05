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
    "3gRghifbq8JAz3BPdUQV6NExrUZNUbZc1MS5ExLfmbPjA8VtipJCbMpmTdUTkiYYswCicbqqha48xMBaZ1H2vcE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkzbYT9fqKHSokQY14gQurFSFchBqiSr1PfGZD6gDQ7kpGeh7kW3yBgWegNQqAqsaRbuiK3dSjYwz2B4UtJxjf7",
  "key1": "38bNDHmVePAQkQsrRbCu3sFfpbei7gPMNBhDUYYzFieLM3oekQpBpXmnMpTBBPWraEF3yrLvJ9jKk3faNDGFvJEG",
  "key2": "2d6umVdMq7efYd8k1i5qSsa3kUDfVj1p7ouW8hpwTMSPkYt7k86kQ5agQbNFWTDF6nMSEYagieHovXLhuCXTdKVN",
  "key3": "4jKY5UGoxextq8Mhm5GtTkRDVYexiKCtYjEYjQMbtUibcYB7bzvVgQEMWgkzUerC6CHVgPsgJ9QTfEZVDHNE6iBB",
  "key4": "2JWGBRHtZ3kghbKiqyh7NqP3NsAH2GM9ayNwGAe9CeMSs2XHSx7sAKxZ6D5Xeuxjwqu2f7xUzsNN1h3DHC5a26Pk",
  "key5": "5cNdr8JACt9PpvhZXk4EMbyhLzZfHT1hTVhiWMpvPkkxbUA3F4Wwxr5fSm5u7SKjyZHtihSL4QfB89koJ6gTmc3X",
  "key6": "3xQQjw1toPsFwd3cJL4AvmUAGJJ1HD3urnwA4FjQXib5UNiBzaPmTY8Av7McqkFm2xKwLQSBaNDbVDrLrQ2RJ1g9",
  "key7": "3hSyy9g1zq75W2G7uc5VKtECiRNAWNc9oT2MPaUqwJbkV7YNkZQVD4gSEhWu46imLkFkYA5FVnpnSpkAEskjG14W",
  "key8": "2r35mDpDoBv9eaMQp2qZyhJHTdEvUuzuohLi3TzREh8TJSmYTZp9uYsz5dQexxakm9XaK55Y3noKU59QiVjzNhYD",
  "key9": "3YKrFxmauiFdwkQhbTeZ2FiLQf79nQou9GD1wRGbJPXWoCgE2pvqp2B4rjzAEsSkFdPXT3iSQ2yw3CkiZwmPKCHk",
  "key10": "2s1pP5W48F261mFd37EZkBH6X4ZXUVDoZycTBUEYjs7K8XUh1zp1ySFHjnNHXajQTteXWsGGvhZoMCmYCe5b5o7s",
  "key11": "3JC9nbj3reNS3QErs88FUJXzaAVt5aQb7KzXK3WWzTfFuyXXrg1ZsQT8i1SG3e8M4xnm128ErBwzSB37Ad5ymv8n",
  "key12": "4j1kCABsPSqhg2sAVh5aMrvuwg8aJFRf56q5JGeaX9Lk3xsaVZnAqiXeEBRtHHKhsMbGnw95nN7LWXHGojoCYGjn",
  "key13": "315tMCjY24xnYoiM8Q5GbWrtzWuwN8rUvJL1Hnmf4YQ7cvdRok9T1rhE2GyCQqf949Fd2gnFv15kfxKaZp4L1gFt",
  "key14": "3wzvVqPNj56JJ3Y3FQLNNuMFTJqJgL2nyb6cmMKSuB8Bg7RaEw5DU8c8KpiQCcYenWM7D8pEPYumx9L3xZhJkgS6",
  "key15": "3S65G36fys9Y6zTGQ7F6VsgHsrNyNzq4QoUSD4To6uhSD46WFoimEoetNkYW4NQT12MjqT6QfKMxFETYzLZvfUVt",
  "key16": "3cg7c7MKRyDtSF8XqLtVVCBPnoSFyia1Muv5UdjQKqp8xT8Fv5KzAb2ZfgBGUMGpAcSvWFbax8D4KMFbze1upVrd",
  "key17": "4H5LjyNj61ERKaYAwe8UXBHzKqaUtEAvgehKHR6jNuf74movHiHqwGtG69WP2ZJvGtYLyA4MpT5z3vtAiuxbgNNn",
  "key18": "4YbjxB4KqaHDytjBzv9GJs1UGWgyoqi8pYJhioJ6U3nmHHN3kydgAPRt6U66bQEBvo1ddbPmQyY1eoVcbpKvqELf",
  "key19": "2w2g1t12Mwjk4ZJGh2uNYBA4PZSW6RQh7vkUisUdLWkB9r3RoRr8NxfaAfTCxrDAroww8ccbH9DNogBGuSVezi53",
  "key20": "ncP846QKbNkWef2zX5CGZ2WgawFa6s9mUs9J4QyaHZT6dk2znigh6F9VmDiJpBqV5CY3tb7vBeGa3dCnQsVZstW",
  "key21": "4gAfjXh6khBdUH6HE6grQvxJjmCfmt1Ka4r2M3bU4uJhHq9pX6JW2YQW3N7haVCLyvt6s1FeEf5euvKRBtTAGxu4",
  "key22": "3V2yWfXXyicLVQtTy98D4BXQ35DAxkKCy7raEFXXp6moVEgTtoPGyHokjXmVKrZTK1pexWW8WAq9B1WMonn5Gjyd",
  "key23": "4drFDmMbQyzBcx2STGSdRWyG4CyfyJN1BodVXUa56fCuEMPLTGjyyomRNZPHNQGNvgcY3pUXh5GGA6SwW2HyHJbN",
  "key24": "4x7LRTJctiSZHw33QZ7fo96BArUn72V84W7mQTKHBbKb7yDApW6MnLt2Dj8Mpz5HwiL9JFYHkXwGroJjqb2Hzxm5",
  "key25": "Nib9MNRJKGC3t5Jdmxaj1eq7PfQHeeWUcabtEM1FzQSwDSqgdHrsdqEpo4SqvgQ4itf2LEHVUQbA3RfBcDnQusN",
  "key26": "2uNT4ddyWGngDq47ZbCF6aDGbBLEGRdpzLrEaKXSYoN1eCqNggmgsSTDqi8EPNruHhx6GL79jZ7zYuhWiSWZ8NYu",
  "key27": "5oJPeHJKPaW9Hx61YwnuWg7eE2shTtQbp9EBe7CK5U2WtfMtgvYRVprfxMrL2p4BockGbaLwhFB9PebsaBEyfZtz",
  "key28": "4tj4ej37xwdYJevjgaRDNK1PF7U72g5hJ7DTCnMzKeMYabbLRJHBVnxoyY24aH76CQibE7fN3FajyqopxLJVrKvM",
  "key29": "2veJDYr5QSKjt98UMJL6NMcutRroMg8HNtPKbPm7Uaf7NYhog6V3kA1fZjXKrQRJYSpEoV4sYVbomir492Lbn3Mv",
  "key30": "5BnuqZKKFtZaE8K5kVvXA1VgU9tjjDFNFmSkwo12NjGfwGstfSqSXRxkoSHVp6xbJNZACvteKFQjN1ySTf6M2GsN",
  "key31": "5SSdZkkrDogc8DkbHM8V4iPpGj7MYGCgsRmQLUjqbu4Q3r4NGDsQYrsSRyoUy9xr9mugRKEq7rwcWrPZCFRTwWpc",
  "key32": "4yVab1vd6qJyoRkfoKHyrLHWqwG925DSz4iYeGoEGTTArb9zfHtantSPv5L5ouQgLnTZaXihJXd3MeQhTXmYhMNj",
  "key33": "2pJTuJQYwvcjzV9ZHjve9aiYzKSq8zPiu5qw5Qaj14sfUqSY6pU4ELQ2qoLwSP26c1eJqcSPwL6uPN765dc5FBrB"
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
