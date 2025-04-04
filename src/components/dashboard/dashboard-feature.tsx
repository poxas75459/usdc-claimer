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
    "4erbNzm79SgXHqu1ch2pd3L6yDaNrCw6U5xoo47ssMfRJNzECkFhm9jBGi9pGCYWiLtiaf5SaCpsshJGy6QWiziZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ssZk321KADxgmRSLBNnmwCrMfG6z2yrLoqgQywiC2wwbGKHAwwRRUYtNUsCaJVWbNcVUaRA7dKXgLTGKjDB3PfR",
  "key1": "3qczehuumppJ4bMzpX3TvkcaWCdqTnmgWHswefnMwtFe1DdWJG3bdcX1Jj32pf3wRYEMouoavZSCakyNyAjEYiD9",
  "key2": "3sK32S7d9wmbep9roerUahCLFuGwiR3WcyeePQGvK4sXdwAXQN77vKLqsvdtSgj9kthi8QCBudwAC8xMLDuZsdrV",
  "key3": "kM3rQmGNWcYFd32djsPWZVHxfaWfwzsxo5aHkQpLVm1PJm8d3FAhFdtAF7vvmaraRvD8MSRVas6ULNnngKYK8Bi",
  "key4": "5LKorTcfGYJCYrruKpiGosVAwaSGukYqVwHrVU1rTuTBmqJ68132Y8hqrqyCSdJdiZ8iXS24bXcWyS7dwbS765aC",
  "key5": "3notivrjobE18puhRyxa4t6qciMaC3ApHiUHWqrBbhr4gY9umNUvH3ogGerNmAH4XjLjpUG3486sFFguJ2yGBJqi",
  "key6": "PQ3xYf7eo93Q6wvzcR4Zqqg8m45nRF8T6EoN2SxSvnhVAX4DCQM5Ycjz5Each21A6u8UNRY74NPAkAj3rQ9aZXS",
  "key7": "5EERyheeEd9YNcatBSi2NtWciApMsBzAt7Ut5F1JQUiebXs99VhDHuB9UyrstypeBDVEDiKwwQ8a5tau2a89iPkR",
  "key8": "5nFiEGWy9Z8C5px49XzBL5o837fsSsrpRKKfKqqdK9pz5jdqHvWpTkrJ4mGWXq8tqJDhyRhSt9j8EUEWdXrMfKjG",
  "key9": "258t7mZJp6g4VvUe7j9EZRrSz4AZaUiY9qZJcWXZhy46pf3w7ef76kTRq82Zbd9UmJvv69KRxuNUhPLi5hS5TxfP",
  "key10": "2A2gQmFsiYTDTKcrhnAuuTWHizDs38cMb1c1i3puZRaxG4Cb2GsLsx3srjxXs5XKrZxvExd59G7iuR3b5D6gggsi",
  "key11": "4B8Y4R29qNYnGXEciDmVxYVrm9yjexivShndJNGkL6Nta8M6PRn1nXEJxNC55RUY2s1oLEzoeDhAsCMkvN2VKYoA",
  "key12": "2ZHnzrQeCX1D2KXeVZJPA4yyWTM3CYjvdfFwdtVytJWHSSLfcUtBjnRsaix8sNirM3CybwvpomMoqPNj83YuQK1D",
  "key13": "TztuFsyKTrsmT643PKUTGd559yfDsLEt28ZoaG3Qaw95fx9ULGHtvRXZrzDSL1uv8VrDiFhCgJT5HZov8sSr7g4",
  "key14": "22iY7Le8oUeptKL9rfcoLvwXn2wXy3BgtZhBEBgAmARofswEmvKCSdd1jsFqEXYEgEazjRTxfNZspXqboTRKe4Wh",
  "key15": "aa8atkCknNh9cDEwmdpyFequnnSnqShKotZNivSt33dcgAFZtTG5VsBSJjixczAQu3abHEcmbcT685jm1tALyvM",
  "key16": "5ynxBWtkcDux9iXGwjVkJ9SDgXaSGyKBfz9v54Qfz2F3nNvnom8RQGnhnEbQQNYF6AMapkTmSDy53nHgeXBNB8np",
  "key17": "2fiiJmKhdk5Hiyt57ZaWuyvJmciba5TPNxM1EErZhuUaXh6GUsKjED6HC6n54nuM4SxniSadZNcWRrh78nWsG2vX",
  "key18": "2q5NrEcQGt7QYNWsTTkupgA6jp8CUjCHMeTtCU4Z9fKsEca7qCDU34t43j6Nj6wV26vmuJNqp7jsCEoY1yRSKGsQ",
  "key19": "4ZaU5UY5ie65BmSzEvtK9crdPi5iE3tekvy7BWut1Uqkr5q4wp26eKPPBgfkHo7UW6BUrXyZCuLnwUF8sMP1t8qy",
  "key20": "2kPbv1PGpcfKnaDMbc8SeyKzMdyA325uei4A5mkNu3nJ8cjXhBWncERdQMzLHG59oywvqk2bJ2V8byA2rKgFhoMm",
  "key21": "Zn29EzqN9NmkyFjP8YppAAtJshbZkdjqh6YNgarV5b62pGQpdn3Mhf7FixDeGhjLrJXu6Pru8H8HyXV9jBsMLp9",
  "key22": "3wy4co7tbwwQHxJdaw83n3qvVC6o9nYnHxmA4SbfuimLHdajaKqVq9tm43eZySHz1vSq4XGhEsCYm56oELfSu4Yw",
  "key23": "2viD238u7DVSd2hAytxm9gSSrX1ksqLqTq58AikSYbqYmSKXpzd4VyRZvppU3xRKLNne9HNWyNuqBDYEVLJaJwda",
  "key24": "66TJ4jt1CUG9tNDotkNt8Kw3wsuiKhuanCTgywYQ3suh9sS4fr2x9PZXZ5irK9FvtSy8gZWKXsFaw3QhnBMo1dt6"
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
