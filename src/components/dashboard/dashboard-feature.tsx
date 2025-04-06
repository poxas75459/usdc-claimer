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
    "3ttTotbrR36p55WUxg2sRE81KgQCsRmb12jdJupkzo1NnzwUHKYNac9JbTrRhagH3RWufickSaAz3r2ks97A6unU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s958wMR89RJCMN8W9dY2SuUkUqaJdfXvRCsx64UtLFZmiwX8GWycRtGBPMfq5x5Fn1ykhdTyvVMBdzrS3M6CpXb",
  "key1": "LFmqwqNp2Eax7GfmpvxgA3hCMWkQMJBj7rEGHBwE4VZ4t4RdAFvjKmjyDdjq6k72CqkoPSXo5WWXQYdmueigaCC",
  "key2": "2LkgWqBoSdfBLry8FPLhP4xSAcAMeHTXgutrYQJk4wJ8tNxViHs5xuFCMpoFecTqCoa5dcozXzZDfesjYySdLbsL",
  "key3": "2YxsmYL4dGKgWZ2srFfrPrmVSkiwqATvoiComunJkXeWXuukXSFdcYZUcfRQKECm1LNMw1JytXYLJo42g6Gr8th5",
  "key4": "5Fzm3ZbdSCrgnKLMdkZc56887ByNDeC9RjkFdugyuSirszVFrPrTJmPU6ZeaVMEL72En5crvggNVA7a2M2UzFDiq",
  "key5": "5U1Ek7Z1E2fbrsqiVe2TTjWhScVxPeQmWrHBapbRucWYRzjJqSJGqBFV8hxYzt68Zck7pTsy7CquqWJwuBZ2qtNT",
  "key6": "5YwGVyyzvwqg5qCaVuhNPZkYmVUsepV8m9em1e2cJjBWK9wQkHRYrRp24h2ihR8nbciE7kue29enxvZHmE7mk2NH",
  "key7": "kdS1P6YqBPB77qfNGjG4KZTD2fccx8MvWkoa8qXXH7omKom8y6yUYpLt51wzDPT3NoBpsYFCCrDnGFBKDXCw4dt",
  "key8": "3Ns2cifA9H8ZVAoLJraEdagd83ppcojRbRwzGFnYXSeYAkRcQjD6e2b2ZUU3c7kX29dcvmjkjTJNe3wfw5Y3rnfJ",
  "key9": "4tCSjYP2z2RSu8LzwMZsZ8sA7Jj5TEtJ9v3FFAXu8jZTijVbd83kJN4RKWpdnHZNzYyPpaz8teRaCrZn1Jr1Xqfy",
  "key10": "4k8hcQ913itgDPrVLPgJeQq9WnqQFi1so2kPMwoXQPJnZsnTyDRydiTMCR1ZfGRhzb8ZDdujZNFrmxpwL25fX7Bw",
  "key11": "4Wtr9nBnmc4d8ZX1pj2VTZiT5LxbG7VdiJCSN5r55MHE3EwAjqhfY2FgTRJy5rYbGJ2CaaBZ7Pr8wkkqqwFaUsF9",
  "key12": "2i9HnX1VFHpM8n9YqCf4XZkMcmuadBDntEVqdxgXGJKxU2UcjiDFUxCXfifyQjQE7cdfLcz4AbEUP2w4vt37mYYU",
  "key13": "35KhjkGiWBPhnQmypUPjHCFxmfkQGh1GBbgvrJpanL7V2jJjnwfrQ92jdVi7U2prnmdNDFwym9LnHtRxuTwsMVN1",
  "key14": "sR2xfFYXb4RaAGN7h3oH9K5uEEABbm1h6YxWC5mqUd5niXDwvVHPoRWwo4ZduG8iY5THnUHN88QwtA4p2cRmfhK",
  "key15": "9LF1WW3ALR9vusCnU9s9fhui1rkEoGxTgHnNFnDFVCQUCknmfQXo8X6Fwa2bVs2AHjCBmDCQfb3baeGwj3AwFuW",
  "key16": "2PQiLLyEfrBc7w89rq8xTHpPXaamxSH49dsu9hHHxea1Ei5e2xrGToAGJSd6JhVYeKnnjGBwjfbGhfsLLEZTLZ3o",
  "key17": "23nJ2xYbqcm5HTiULoAUeLb2qLxEsZZtTNubWLr5y3zBbet3UNx45WTY7NXsVAsRrgKxULZ6kU6xp8XdLNmdyuuq",
  "key18": "3vZcyzia3DK1eeRM1it8FC8LUm6DhiNZqJZfqhrZXpk4xL9T3NZXiGCpStMWGN8wVnBnSQch9DwXVSvqGXdGagyg",
  "key19": "5hsyHZLDyXsvtyxM4ozStamf8MuS3t7QuzPqpvD883fZ8shDsRcFUcfqTW1CDBysmgT9U3LnHJbS38dJFKAskbmU",
  "key20": "5Q1yqtXu2Dnf5Gs6WwWjJ3HAmzMwCD4rejqHVuyQ2bqhcuzqaWJy7NVa44b33egYEQbvwAkpwgviaHXNXGy5eP1h",
  "key21": "5KmAPpb6tcV2RqW87PY7UWdougDHCfY1L96C7F1AUxuqxjaCd6FfU9DF23jG8jq2A4itWdbUqwKUVwyjj2s14E98",
  "key22": "3PKRNMvWJDkdQYMyoCt9mtCDmztrd7LpVnCJ1Gyn7ENSDv3MBXYG3ocRh7jitkHNKyd2tyNCEast1vdVs4gLox6Z",
  "key23": "3PEfAhbkLkCsWLKwTgn3qRh2s1pDd54RYqHkkT6rf3SzAEXPPHzGPiMXhNxXiYRxsA3FCaYmrNrbSUQ5H7FnB3tC",
  "key24": "4ayLrzg2NRaHbT6XWCzMcV41baVxauaXmuXUvBnrnxdbcE1RPkbMYxWrQU4zASNxoqiGwCF4RYFAZTA6wdQrEvzC",
  "key25": "4mwp9NE8BA1kSMdkBnA4whuZDdbJcRkSLLjzaaKuJzU28urVpZJMJqygqokGYqsD6ugATgjXmxthXxMetnvbLgKK",
  "key26": "3aQSuAKeNCd71xKz8JkTbJEzQHLNAcpSHYewMyAXpeNx1KGKBfCpMMtj4DVfcpXAzq91tidoCXYiMqSooUPXSvaK",
  "key27": "yMiJT7cRcPohqg5So8rcWV4gG1JDUAf4m68bPL5ZWFCf6Feq9xdttvhUrUEvMf6E7rFakxcpoP95Nxg2ptrMj1X",
  "key28": "38ikL7JuRb9q6cn5pz4DKfUXWom5pVQiH9ef9AzrBrAcLtR2PE4vw7Uqg11msHz5asMq2vpa2wZrwHdba5C13a2a",
  "key29": "5tBzYVBgyGxKJwpCAJfeuSbEmnxA3wedwpBmFMuUGGo16d1zkWALJTsTFx3pRzq8ExU6ekcCJNJbUdKQxDRvXL8s",
  "key30": "5j9MUehZaqTftMpTUm9KEuganygjovCqVqjpTG3ZDq61ZzSnMsMQTArRaYBdc6m7YX7wAPbnJXe51aZCAJaej7hP",
  "key31": "4tV21iMhD7GFxd7d7cqVGbjWsmkXsf61ujrbjuzC6f4oMmfU6YKmSFyiLPZpGZ9KSRG745gwpNFtMr7v5SENSvB2",
  "key32": "5ZVf1zPPwX3o68XG7HLV8H6SQy59Z4sG5Woo8NEoxto23vWsiskiwH8nbcwk8K9Yg1Zgd94bhdm7iyPRSkTqsAUT",
  "key33": "4FJA5WREdRmjQpfj6eH2dAMJCCVkTaDuAH58xactpm5Gx1NN6RK1oKtAQ4mxEgGRPYue4Vpmx8voPScsxVWVq7v4",
  "key34": "2EyqDuRDmBgFQGGTaoQnLCGTk3XTCEEFdLDvUcPFC3p2Q2Jz3QkaEK8iaF1X9DaRcLBaArVS7o672m3p6sd5Lu6",
  "key35": "5BvrXWV2GM2FTq81XKkxKPMyBvQB7CcER3BBd3W6TXVZ9Ba76E3WkLFtRsGK9WFXsS4m3xuWonKZezh6iFEEdGEH",
  "key36": "5QPm9JHCD9wKr3zreodwkrwCNZqkXv7J66VYdews4uLiNK281h3W1E8nPNYKoA5YWZ54fkyqir3Q4NfRcNCgQCVG",
  "key37": "2vuBMocroqTNFse1pjmtm8smWHShtyujdPuoLfneJPBTZGNWApaHQog3LcN6tbhbprmQkcEhMCr97ApKMRkoacYx",
  "key38": "55MsBMem7cmF1FN9EYLySYWeFQZt1tWxB75JqNhaRjkXYd6ozXM12WF9fx7ETizomCUo5RG1Kq9CTVu2YNU1nRCW",
  "key39": "4L7wRSjKzksPsD8QKvyXB1Q8E8KrNx8NbwEVueUapPB8roeFj5LdB26AFrwQiYV1y2djCTVqaZnAyzkS3t8BdVrp",
  "key40": "3ZLsXf8Yg3WwKAFc4TS4qinM9RUdha3xkxxKjTP8mkPmYVmRpGVdYCDFv4v27marKd7n25ETPo9w3SwZBCp8WcVZ",
  "key41": "3Z3eeT6NMqMmbiRpJHd7MNJFA983YDxSwFgR1BB1UrBSDyxFG6orUzcdze4c9tPeU5NnTu6Z3qAYy5A46xiJk4CS",
  "key42": "5egmRrR32nQsQVhJrUZjW5k9WVzbv8Z6McJLh7NobuX2LgBNvtBi4xkpR6PWiJhtuCAHGRhNZANqbS9wAjm8LK4F",
  "key43": "2NQMu6tvFMAgacDdWV1vRNRH7LvW7eismfmpiRYmeajHErcVACSSBTfFRMzWNzTRRMFMMwMyHFgkD9MH61TifvoU"
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
