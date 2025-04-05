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
    "4kGbpMcUBuiEjiwirVkhyDe6WvnxcpKbbEnrx5M5RvXgNuFt3vpmXShJasvCokaSd5xZE6is88N6ZLqoaxsZiEDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xinRNEKG87cLUZ2fikv9tKEFhUYG6bVWFi3WwM4F8wp7RbkHPm8b2H9K9oWw1jNGrGCnYCX2RjDTs3Aq31tTMzL",
  "key1": "3XME36C9Ft7KBEpiYjuTYH9b5kErpm3grHbFueFSnYyHs5RPSDLfUW4jHK4gtzxmho71xan2i2FNU3JrSBFStohE",
  "key2": "anvcfgebseKQeuQVWwW8f31Ae1q1363utqWpwQGgPzm4EbyX4hfGPZigkedUGUoe3MgxXBs1XN614pgD9ttziwv",
  "key3": "Y1amTnosynjd1PigEg9JLq4od3UazngEax6bjEZdRmSUHszNumPb7oXV1EtAt6ZVfF7CoxnrAsoSj9X7TTuwR3X",
  "key4": "2e9KMi2oDdAHoVV5HeKz8pd85WsgnZ6snadK3zZhHNQKvNDj3dw6Ddvy53NJ7wYxpBDQUAGyP3a77HcrBvXu89FX",
  "key5": "5QVGF44LBPpQzrvfiDojSF5DwJmGyg74Dj7rNKhuGCEJkABAFyJoPnWW5De724AKxUWWXkqPgJfyoEokNFHaZLNZ",
  "key6": "tiZh3CmyicJcCzh6DoWzHzLL7RxZ1UMGEamwCjLo8VSNmMBzAu8EoXzjsThU9hrYzwwAY6nEWuv7e1nR4jYm3VK",
  "key7": "T6DRMWUAom3YFnNHVEvYHYTUzfRJpGTcaCQSpeBwD5jzz6YyXrgZcfYjBGgSXhRZwU3UmERtXGrcZiHEazyRPVN",
  "key8": "3FKFcqJiCXiGrxUQMSviAeSJzVdgDf5cPSe7MDdk2mWqEDq4f3grVzqcBhdy1KguLayehcXG9bTyGxkBmvs19anb",
  "key9": "BdSdG7EyDDpQECqEvEimK7EczoB5QB9xLX94SxSS8XhWSQsE819eBooNPJ1ub7WY6514S5Waq6mEE5eTMMguYWV",
  "key10": "4AdcTYYYDfMKp4LqdFq7E37UmH8nt4bNatGYzDhKJ8zMrgWhCMDnAh4YDbPyynzRz5RSD4x7LhQ4xQZkvjm2eSWJ",
  "key11": "5hiZLJLpcxYUDkd9BGd8f3kWdtRpMXqTZr34xAXWfLDPXDZwZZhwgR22YJ2NdtYqSAEbpUeDvxzJmVwVuZJrw2zE",
  "key12": "2P23FaNmcuRax6bLd9d1EPknXmN46fdJR8VkXDjdGW6CnKXrBt8k7tWUWVAQZ5NQKpcEHkCqREMFbczJWXtwrHjN",
  "key13": "2hR1SK12wgVwGxoibXKc1oYLUqQpv6uqsMV8n4QQmdAGvffFdyncU8qRNfzBRQXmN5ZJuUqUMGRcdf4i1trVCphE",
  "key14": "5veL7d5XnzCpV6WAP79cZtpgs9uhKFqE49gvbBCWxaVuq4JtPjqvkY3yakyhgug5JBjQtkcS6uY3ygbjWyJuyJ49",
  "key15": "3CtbuqqZknxR3Nhy42mKyu8Zp788L9YQZeubUHmPRKYMaLXLyktqnaUZmTTRJ2CzxPQnLhqWzQcWBUe89vFXnqu9",
  "key16": "2LqgJqNSbKZvWg6msMkGW8iKbQLxwvKdn9iiz3rYorDtEdrkdZ16dQgvyvYNgjFTXjfYrAj6NjWRaoLW4wQPJBin",
  "key17": "38kZRMzkKpd8anxZktd2CVTsTPN5zFipPSBWpAsLkoi4WRFKYdeX2PkkeS5Hg4VuVaPHC5Y5RZdjmj3y3vMQNzcC",
  "key18": "5PFtB7nzJdoBniYakKX1KiiAFGCrdAmzbgHwPxZUUpkLjV9PigSQUx3ZbTs1VrpWNoZMTsp34FXoDjcDWhNcRNfN",
  "key19": "4tHXVcD3w2KuBoTLV2BsU5gPUh4DYhwsTHPVWRzB9mzZvYveV6s8vnsygPMGsDfaPhuBxKHsAgW6soRyqgWuxgSj",
  "key20": "5ov8vubJVM667Kk9s5jn8dzjQCNqEXo8HjqEFiEHcu52pUE4YitP2LWYFzEpQvspuJJkUfF63Yq1FfWBesnux5Kr",
  "key21": "2J4jyyGayNuaxieBuwdBf9isEy8az7S67A3cgdG4kMCHUzhheU6V1BBEXDvJsZBqd6jF9kFSrAQ3dXwjaTTkZESW",
  "key22": "4zZ8J5ERfnaE2SBHLYk5VEY8KSD2dNYkEr8WYKBhZE28c2vAJGCnJLKMNybdQHcDWBizpcvwTJqyjKwAbcLxRg9R",
  "key23": "3V99KyejNJCmKiatyHUCcwJNb5NGDJgzUc5GuiACtVFJ8QEP9j7imQQBXp2c4d3qm6FwNV1qdbBRaMt3hhE3btzB",
  "key24": "LhJUywBZ8RCz565UhjD7UknmDtHMMJuDUtPxxbNao5rezWTSbZ2QtcnFYr9y26tew6TAFFRqqrZGJtjRC7XVJpi",
  "key25": "3S8EDn8fL76NipMffNzxRxNgdPFFjHidP2NjxUHBMbyyAU4QD5B8XgNygjw4iFTPAGo4QJDURHTQmStAGNNrhUwb",
  "key26": "4v6Zr6BWxtwpNccYw9GMfBwZ9j4PE4UDH4XcyHwEBU7NZR1MXe5zvpa1xWJV5TAonrCMWjjTjn7fqjvwBdwC87j6",
  "key27": "3TnJYbToi177GnYQ8LwUTd77cjnsdfTnzggwsankVe1oXBy2y4eK4DRmk8xDd8aV971MrB3Lg1HrZJD3Vt3k8rbX",
  "key28": "5u4Nmc41eUoNV4GQjKRCNHDt7wbQzAqtJtmXvL8U5KkHck1hxfL6uhG5WeLkvC4a1HZXbegkgmXLYxMv7nhLbPWb",
  "key29": "vgvjM1XF3x73Z1M1MHCeeKqGRe7obRSjVLQGcETQVawL1WdNLsnUtBY6fAHtNiSsuyJPWAekPjsx6ddyKamCBKv",
  "key30": "4gSFMxBy2hWv3fRwGtpP4G3NcfSPQoi9rSZBeDqpUvZTte77bepqWQURH8W7tPr2m7HT6bTi664KN3SqsHgjWway",
  "key31": "4sMwHc2uJZV5TTt1YNL3GX3yXAbmHdBnkTJ9Bv8WQaQZvdvtcvJjxaEN8DxmEqXS5S9xPL4vAcivXWe8hWe8yKk",
  "key32": "3L3qrb4uCZfjeCgYcgoM18VHZh6VQ3zrqYXo6f5aTgv4MKgSeCouUUCKwcxSam2CPFJ1uLNrVoq8BEnAWXA92sGs",
  "key33": "3WG8HSYYTQMpWJNiFtk7fnkfBkEM4JxiRmbssakaPVuGqtJzzNzUAp7HdaCcsofDcU8p7oeeVQqew3cXpEjbFAfX",
  "key34": "3UeDyG4pbtZTm3HvimfrF8uPzq52MgkJsGRGffVDCQFJbSxaECmiuhSAnq8G5oZ8ZpFFoYMkvRy5dY9n9MTh4BR9",
  "key35": "4oaMPkYh3p8e198CUY9btyCxaD5hrP3YyLhgBWVU3omjNP4aRNvL12NvSMKt9y7JST3qmeRBtnzEnANYaUoWiszX",
  "key36": "3yiDBLCC7c429hY2gfnzdYbujiPzRtNpv2xcScjQt7a6m9tYx7Lu5aFNu1imeoiobY8y23Dzm38RjNxti7dotDkn",
  "key37": "3ZZwi6y9duhDaNaiTgZ4Ru4xzScJBQWuvZ47xvHmPi5NX1rDd8TQ2h9vHB6XJVqjB9rUrqmnebMnq68MaGt9QTDf",
  "key38": "WdNVa5LB9t6y6bRtkP9HPeppk1cWNTHueq8nxtJ1P1ztXp7UWd7LE1zM4x5iZg6heYKFqXv7YHTqf2auA7ccgGc",
  "key39": "5aKAqP9H1wxEdf7nchaSjQkVUZ5GBQDRm2TSdjCf9MKpGgpkQQfbJkw7rgeCJT9zpZK9Le9SXavpPGPtWc2N3xnT",
  "key40": "3Lqg51cxGxaH4Ac6TJAChSzY1P7wqVf7ASW7LNP7Ubuegc7SX8iakRUfi7C4g2P4zLp5zcm5rMHpYWqUyiV16iJB",
  "key41": "2FcUDoN3q8jDrTioxaoRruBa9YXwrZvsbv2KxpgT4vqbbaNdRsUMoZrMZMiRWEoGESjfMu5JaD2LS4dhacV8A6nv",
  "key42": "2L4KwJL9ApBwu3hJfQmyDKKpbJg2Ni6YhZFjm7WesCKQVozewn4D9NYCuwa5LZT2uFEKbbebSHJSAQUfRrDh1Rx2"
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
