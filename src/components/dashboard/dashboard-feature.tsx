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
    "3UKDPqfYNMGLg9BQMd2LsegxJnyMu6ZnDBLpTu8xekMWbQn5WfjAUhZX6Dsg6DV2m1ELq8fjMMF4CuvzWJM57PMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVX1dTRmjHmTeuRVtCxEbybCpvBiL6XgafnP8LfWUKEUBmfmc9u5RnGCA181XmcGhJm4KJ4bSjSWmXyHKQ2jNRi",
  "key1": "htRMXGXE9anGwv9W9V6yv55Efos4yQfNkS4BntUzcxJ2mGbEW7Hb9dHyguNfNEDhwR88gwutkL23D7w9XruuVot",
  "key2": "2Ev1DHvod5jvBzEbqxWtsY7qNUz9Pk1ganw3PCiVhMDJv1knXqvQTR3TXqoLsQ7mRFLpABHHdGyRyfBrU4V2wBj3",
  "key3": "5AXpwQMnUJisUZ3KFJTiBJXPaVUBdcnZeAHXMhCbkidSwVnsRg3VqzydAmUbdHEeEehecnWCqHHCF6WtnaYoEaBc",
  "key4": "4LSkUbiDro2Zst8VxL8sokLLtv7S1qt7ocP8ZrjA7LmWTSdhRKG7qLMo9bqPE12DQdmYQXEWB2tUt4SyLx4WckhH",
  "key5": "25Nyyb71iFNkKJrLC3GQWvZptnG2FRy3DQZcBrkLatDRvjDV2An3s2xWcmXNJgXCQKuWSiQ8LCXwqf4hyakFK2VG",
  "key6": "62QPMX1AuvyDtkhZUd4ACobnV9yAveFCD8qHk19pzRM4DLoKkqQY8ZqMq15Tuw3TiYDSsy36NNjD3q1mbX3DKZrw",
  "key7": "2wjyvd7ZaG4JmY6MCBJUhLYCMMCUFo6rKENituKoaY7nX6UYbWqRM2EbPKeHSgCR42hrLS4Tv9R3pKNztuw8mq2a",
  "key8": "2fYwzTAsScg9v5h49muc5cUS51PR9bV1bWuh9R5ER6WaVTKFX7b1yB3hbLpF9xsyDS1Vv6Dkhq4bYjVTK84Poqef",
  "key9": "ZhRfAkitybjY5F6P2rta17Ti1HRajVwmxghgDEJqcWQ9jvo7s66VrFXu3HKv2G35ZJa3ecUjVAzG8eTpbnbYBxM",
  "key10": "62ajM97EVzCTQCBmikDv31kv3nCSjW2K4MkjcGckqvYU8XfS7xpvmAkFW5K6Ls79REReDZ5Zgshw85dCyGzi3vYg",
  "key11": "5HRJnnng7obfEpGDxhZHuusy5wxLeHs2TA4uXX9wYQKXzKQ1RjxcSjDMM8yDp8t3hFyrTTssjBQQG2YDUTx3oDc9",
  "key12": "44moZNX2PJL6zH7UNCG4dtSKbZ9y4Do3CnBiYSw8KSquEnRXeTRM8LUCWSp1axdBrBhcq591Cm56e1t4dyRXdhmX",
  "key13": "rnMYvDvahWAQUtYizwGFKSdhv2zQ67jCftJF8NgWAYUhYoMGAY5bDs19k7rit8PXfnme8p1wLb33prMJfVUYDRx",
  "key14": "5nN6sSQpskQigKAGoj9BUKtAAyputMc7njtP5mjtztUXkCisye9pxxgXHAxaFayww12dihqvr9Zrng49dvNL2jDy",
  "key15": "5AeGMqhE1QQsv3g7hsrkR6FJtuwYFhJBLmxBcVCDadERJ5nPjAw7q28JXiN6ofMukTrnyjq9j7C1oBX8TwjeSB7L",
  "key16": "4CEtJrKNKuVz9R6SsFwkf2rWL8P6Mj8CUUJYhMY7ocXHP2hRY5CWPtXFZNrXTwNJV5d1RsqhDMfyx2tAZ93GoFJE",
  "key17": "56rs8Kv6hnWBtHaFkT2yimdsBhUTcQC6wR4kHpLsVzKM2ZosdbHRZQ5wACk2DpAZaEmUEQztn3M7vF31DfJx7LRW",
  "key18": "5fmp9nKnJmYz7YJuD7qV2FwDiV5JiCVj4uMGYLRQLzuTJUxjzo5eVpwtG3LSRyah2rutnYakzK1dgqbgySFbvSgR",
  "key19": "2kWpphnJfdjTYX8b4JE1qhEJLUiSSxp4ottePWmhXT6j2NhDqfrRd91nfeTGwekoZS7ZifZwNtnyoXFf8DWtXXbZ",
  "key20": "42DxoURVj9yCd2s38Bk4F3YhCSWYV9fMfqvhTMH4bHo3R4eipLS6S44thBMcqyCBjReTFT8b6rGFbfSCwkhAsSYd",
  "key21": "5v3EXs94CxJJWJh93eo89tLr2MyFRLhmvbXo8bhAssJaxcKmNVSq2ftb1fuce9iPZJUVob8S1MYTeSjuuGw8Nnh3",
  "key22": "5A8jbTE6cqUqESUzWGF2t6ueK4usZxPvfCA8U6vjks2DjgYDUcUmoiGMLfeaB5Tn8jHVUJ3SoBtKuA1ejuzUnDNy",
  "key23": "3CNGtNLa3A5bRJ7PhvMLFoNKckrXgDrSBYh78WxpESgvgcWejxLVfdPmuRFGRdjJi9Jof4VtRCm932q7SAdZYZpL",
  "key24": "3xmd6wMZwaxTGmDk4nrVX4PRcHXHuH5hp8CUoAFu8WznrEqBma2bC8rYyzDrmie4rmbbCeEuqSStVGtcsJC3Y8KX",
  "key25": "5A683YRsxPdEAW4KgWcCY1APJVJ9dcsnuCxs3Wc7rqBq4r2nbTpzaxKhX1KSyj5hCALL5tEapvWJLjH2BLpicRsu"
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
