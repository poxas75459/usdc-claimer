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
    "FfDX4vND3GSCawAbPfUNKJCJv6n2Q7CgCCCqYAe25sP143PkEWjGgpZUSZP7Q2TRSUJqGL24UPH3ieHB6LAabrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1RdS2CNMce9j2ecC3ejNs1qSzSzs4qtPyuxKx6v33GNEynuXUBMUUbGZwK15PgMGM1R7cdoPz7nUVYK5wsrosX",
  "key1": "22XPnLpgJuppvuY7o9SuCKJLCDeGp37QrSVp7RVud6cwa3PDxymA1SSJB3bz4zSH3q4GP95PUR7kNmfFZZ5Ds88P",
  "key2": "31QNiUBHznHt4KWThFELTUvQkFoCfQsRSMPZGKF3HCE2Zi8LpCpW8ZzuZt1gRjix2rpLWkD8DcFhXu7E4nrDP4xP",
  "key3": "5FaL9cHwpRhS4akiyA6Z54Zjxa13xTkrYQVixWuMbe5nUP2cHdxejsd3RGPb86VakettLtEnbchNu475C78dzRfC",
  "key4": "2LEgcUaEusP2FZcwm6587VfkVkGj4CDRsJhRZXwp4SM2C6sgSQcUXSYtYwoJhuAmFwUfpJFG8vp8PqpnAefop8Wz",
  "key5": "5281BkoTRYWQoj1YvBcjm3iU2meDR7spHSae2H5CJvagQTxeWoQ9b6x6EjL6nyiXRx7XNqwSnSmN8NmFvj6n1KSY",
  "key6": "4GHUGCQ91X7RfTFpAQTnMrSTnYvVaxjZ5CdEDeKRiofWhi6wXCF4bQYo7uXx7r7HJtxeUyQWpxv8QHa8m4QYAKva",
  "key7": "5eVDNkLveYLcjksDqGygxLoSGFGcxhucqZquz96Snw3yFZLw4REK1MqHeMt3u9Y2fdtAsYEFufMvkmAF4juiyfsg",
  "key8": "4yJwPyocTDMXxVygrjpWg2x3zc8jvU3hsMroqSSnCLKsSDL5jFQpbTADwLRVyBTQ5mHwKWkguXsYPc8ihDift5DF",
  "key9": "RHGdhjkx6uuqpXrue7QXjDDM8f1AZVmbjafaf8GczR9XMpYA3UPLnqjhjSuMTxyECM5CDV5nfe2YSoUNkMyy3RY",
  "key10": "2AxYQVjTLGXUqa79VoJS4vWTDEbuyGBD951GiPm4MK5iVSCa7g7UVHJJu2469FGeaxMTRNT8vVy83M3245DXGvEo",
  "key11": "5a53XWZigajgVrPsrcQGvKJ7kXo7SxoRR6qqWCujDZgDAUegvnEaYd5DhUPo79DbQNLKeMpM1NTvL786PNU5dP8M",
  "key12": "3Mg1AVvZMbU9CMkSh217tCJizbGp3zBDghf4CSRe9gC9QiYjTfiXcCkUX9n6g34bU2rpYGMu6CPqcaY1bTKRr2CH",
  "key13": "5waUQzqBEyKehFZX7LKr4UeEbqPWn4wcr8GdKQpqc87j6rBwW2fSHvBgQmvfiHn3TEwmBXv2tLu3FvJNRrRo6nch",
  "key14": "3JvNtAJRDzbutGYo9wpFfoi7MbPp7pDgSsAd7FB4YByNJaGsRNSi2oaFQNdVTs1wbF7T5LPm8KMDedYaa4isLrhK",
  "key15": "BQsnLu76XNnsrY43N53V6bcbbdqxExmstGA9FqnUtCFqEHav8q8s4kHFMiVUR4wYfHbU6wMhjRsHzFmneSkvWpX",
  "key16": "3c5D1waEhda4Rkd3XjfZxSpV6EX8a1HdKAf64AiiFHX32std6VR7bWTkECSoH7prUHqUBj8thzXy4HZqMdqdPkvh",
  "key17": "3sz3X8QPwp9ur8qw9AAEReSGZU7SojXYRwxMasjLhHx9AAMqtcz1x3EakCcdJRU6TSZcobN4ziGEesnkbW2pC8TC",
  "key18": "56mD2thenHRDYdjW6wi53n1ZoyiHhWooSnZQWLZjLyU6kLRrJtGEDee3aJzK2ahFaBFxeKc3GgR7eNwPBKbMupKa",
  "key19": "3yCQjCTBYSpzewEo1XtAiDz2RjbBqKNTE7L8hXGZNU1W9d5yJFMogSiXmx4phEtRFTAReuJ1UfjZYH6dFTNt41F1",
  "key20": "5jiLBqKmd4gnNxdZbPYgbhVNRv5tCw1YUJ7TnqbSrRAz7tyfdSFrbiDh2rMJnJ1NXXu8a2tT3YdRoUujB6g7Jcws",
  "key21": "8VWPZN18HQPXq1kuTpvcDRYToEW72Bhoq3upPMhEAxPdbMhbHw1NdDcoZbCTjKxnVhsaLRwCNMtiGt9ttCmgkgV",
  "key22": "2mzk6gznaWSYiYYxnosiyEmjhsiyqFauqhjUoKaxznKx5QYdGn4hvc9UmUQHbNki79wzSJsDpfuTzHFFMyauxJee",
  "key23": "57psnxcLzZb8UBcQfq6v379sP5ob2cLrn5C6yXFfAkSHnWvt1qEz5kfuzFrEaMZtj3w2odyueP5mxAos2m8ReUH8",
  "key24": "2WVbV3LBjGsSRAExHb9WjphCyZDvZnJE67Bb4Dr1ZyWQDdx6RztFB6JTPe5iXRngxRPPc2c3zmTK5nR8K8FLTm4u",
  "key25": "65zzWyhXffCToGxXwoayogY8qC6jfEk5ucmeyj1MwSNZuQzkjfCeJPRNASgnWLoDPtnCLbLe51GM6J9WC2q3jZLo",
  "key26": "29EyDWpzgc8xjyktweF1nbUADAdxLgpoQuvCQyDYwWVQ6zuN3UAJ3sqwJFJdeRuXnMep5Tcz8Wd6Ps32MX4B9frS",
  "key27": "3dLCEo1sg6Lu6aApfvPdBiP8Tt5RYeVVqh5Z3FofC5kdTf5VWe8qGHLgCiJR3YFX3PCUATrAuumL7MqAXfWRxETF",
  "key28": "52Kn9APjNar6WRCnLmP3RvgLhZFZZAGPz1tR8KdfL1hoG9ASTg79ktrMLdPoSXMMAKHkE1AtR2p5f16zBhFvLjwQ",
  "key29": "UG6bEU97jWp8CRTQd9Dp2p98gdfFeq9GFvUkMdzvMMyFawDKHTdneuFL7u2Wagoo7owvxttLZEAnwcskrJbTvMj",
  "key30": "2nGdYMWXfUfqz7qNRVG6Fdj2pKt9BnzpXJhgLipx2eGztZXpcvozecd3yM8mowMu2KLuVwjCiFTqTbWGatmXmWho",
  "key31": "4Qe6ZJ5aRC9acnvNbPCihx5BeUckH6d9tumkkNUJFbvj58U4k2k5EvQHg9bTgNGybc9E4L9W5knG3DCAaSDcmeD9",
  "key32": "3Ga5kA3d3PLK3SzvypSZnybR7qjtvXNfSj6AkGQKaMqPxT24ruJ98MgtA6BYeBaod3AgdesMVXqjZ4V44FzfFQUT",
  "key33": "4UMdHNYRBRaBJBj9pp7vaefYshddm64vjYLbL7uShot9vWpyKetBKSddQocErykKHnApyRvybB1k6AxiKsrwzMRc",
  "key34": "5UyCsagRkoLrQgF7cZvbK4ZbYe2G7L5hhvm4mnQUSP7WtyCnQYNcwsQ5ea2NdDHE75Fpisehd1xpSUR5HgQjxXQJ"
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
