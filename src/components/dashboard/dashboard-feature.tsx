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
    "54YQaXUz6rXCnBJCdwAEgKJa8xuWNtCUp2qsQ7i2SGUyKR1k52UgJDaY3iWwZs93Ce2dkGpDP6qzeUygnukPVp8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuKt8W7BoPkU69dFXtwv3vAzxPbYN8etASRAvyYaVRvxbNVQAT2kv1rPzrbEtZhZEN15ohUw9rMG868KtRVtyn4",
  "key1": "67PxPv55j6z9gpG2Ha9pjeGvTqHaomq9upsCKjWbDy8A5T3MybDzKPGqwzovHXcnoWn2pKhBMY2S2UKraej7fnRg",
  "key2": "3r4ZpiteSGbckmwkCuEvAhgwLzy256Yz1iEjJkCv53KqcBXYduowZfFn95319FRRR8HpFTMzhWzEcX2fct9Gfnyc",
  "key3": "2ZhRp6vHhL6WvZBSP5T9GkNXxowHZKL1RmqZdgas5FnVrzGXMTjVStu1DojxPwLZgyLXhvV5hgaE1PQGpmkVLJmw",
  "key4": "59BBt26F2BdoA4qZBZMQeefNoBKBiHrKYs22fKKbsGdVAjfaJDzAqYpEZ3NBmZAXXKVNQE3fZ4RFy35BQh5JP2dr",
  "key5": "38LVdHSph9XCRP6BGhLnCFBK8D1xk37utzCMVUaJV1wnQrtUHjqUWCnF7Lcj17B6ksD3Ygju2CRoYRNc3EvMW2qz",
  "key6": "5ZLGjehErGYuQs4wgtiqCrcxn23aeQY1uvpEbdciB22iyEbSFdbN2yNZqCjgnwtHMUUM435eL4W47cckFysYVf3U",
  "key7": "X9JMnZJgKg1eovzuWye4x7oWUdumsmtnhDLYYtPDdgxW8RxJxciCTfE64pu5Pwvqg4pb8bwjJDURSvFofwPXyAc",
  "key8": "4Fk1emzgao9pGYARx66cw8QG4czsHCkyDv6wBjRuZ4AUhPp9AMmVK4r7ZataaAE946QdPc8uysGTm61z9vBtdUzY",
  "key9": "61QVupvwczfJTYxhuG4DWEaDYSgg9J2fJxT1U2NM5maUvPfPP1TzaRb1CkRDB93FUoWqku4jgtUFXyiU7svrAXnW",
  "key10": "3mqspcgeYcSrg1hDPmT7M12zkjSZFMLGTzerbGVfoCQdB6KrztzUfkG6z4UedQNNyRLoSLCFXe3viRUE9A6Fhrxq",
  "key11": "5p7Lv5TDdeFYev6RQUpKBdgUfh65u26FANyjtjL18vsJXXqKhWvXf1Mam9cRKxYmTggtv2SZURTE9tGmWgfvwofd",
  "key12": "5RC2KpZyhfs6aaLmcptRC4Uge7kTdF1EL8i39hWauUb9gzqGcvbgKj3zDyc4twMXqkrEHh3HbDzifDJhzPLU8vpP",
  "key13": "3J6N7sz6HaCzt2WBPzWnMMjgXEs5CakveWJJMUtaLHFCkTzvKh6fVLWsvwXVkxMsM32BbpmLy7hmSo1KZZbeXiT4",
  "key14": "iqvkY65ooFPVQ8MvSfUtY6EAVQo9iEgPTm2FHZpVhqHkkhFQ6CDbpV8CVisUzcJKSSLXmrxXGe7vyWEjutYj5XD",
  "key15": "4uiMqeWWra9dzRwkMyQosboyZzjUG6DpwwMf47KbtjRWP8cgJNZhUug5v3BntpnY1hJzcMsEQjrPmVRZavBCxXDD",
  "key16": "29n1twddtpDZy4mizbjuThbdVS1mGezpZsapNMR6KEVJ6K3DdgpFu67rQNSPXxrAyFfofAURfJQzTYggcavaGnSR",
  "key17": "5C2EwBjuuc7wkKGZRnhnEw2BTghasw3EzJomoGxFWfGWTyA8jPTtNR9DVnX7oM5C3NYdMXiZ7Rbr2rz6yKwYdvp3",
  "key18": "3VtyNdRLUPZt1LNTXHggeBTyKav5XWd2dawjfbc3M1mYY6vMW2zKJ13odemZKncvkTsdhpACVmndTfye1fnRyXEZ",
  "key19": "3u3ZKEnomEgzCBdrV239FexZ4k6tw7HnaB7QqkHA39HCepHuPEVYadsEmQN7Ra1qzxkeMhqdA3yP3Uw7DhBfUaJJ",
  "key20": "ZiSspTKyp1JWmmzJzBG4HzXAy7Ab8PGKbPJZPn7xfgHWTMeSw6DK5JjLCyrRXf44qoywuPrFvxebxyhSkdYwhwg",
  "key21": "31aCwxA3ZZySYm7uqFHKQucRzrdzeRQMczrF7GctQjhztmXtxyhZx6uHjjL27jxXQNx8f1q5ySkFHC8BZ1nwnENt",
  "key22": "2FjMxQpAsbhgkGPyW2iyDq1xHfgdibHDz3hP7vpo1zj4tY4Me26NewFGa82Ht8LzsXvzC8jhQGXJqVqV6NDM1XCR",
  "key23": "5mQSrsXZhW8hYEZhHGEtYj64geC14cZqdZ9werVJivA7xS3HYZZdAMn2SD3VmAdn2XqM3dPPgmY1u7JG5QQ7t3JL",
  "key24": "4JVcxk4GUTnHkBjh9UciVeaSTooqebDW6h9Afy3QVyA7zdCKo9YKnNLwo9VQAJYz7S5ZD4GVPV6TrXpiFLSxtBDi",
  "key25": "LdVXusPVxbmeYhFVRK6pdGDMrsYw3uwTiFCpjeokQSVEde6XuBGiPbDUwuDr7Bhd2yikHSD6eQNWwakrKnuXpeV",
  "key26": "4t8k1yjBenb2xKieLpzg3KrWUPp3FfaLnTeqzWcJCHH4VFDoGMUxJ6bkmWgr91oxjLpXbzLt8WhcXQgSYWfCz9aR",
  "key27": "41Xa7fbT92uUr71re8G6DmNvCAhzZGUg6ZDsmQohkQgjRr8B2a6Le9nV2FKBNzDFfqRBWNyZ9Mo2ZjzzgeiSbwnG",
  "key28": "29fwAqGjTLcozbqVqoqU4ZoNwru4GzPkcXysRKRXjGDr2MLYA6td4SqCQ1RTVgXnPRNzSKc8uWe9XEPQaMqtA8W5"
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
