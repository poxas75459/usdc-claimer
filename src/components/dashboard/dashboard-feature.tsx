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
    "4UAZtiQwniSUCC2Ce3foZv5Wdf7BUgkfkkYPSKVYPnMGiZJPv9SXz7koJTDX8n2co5g4WrYPm7VXuHsqyGqRZRVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mF1HZCYNYcrTGNKS6vVRBmQwjkX4vySVkrRAy4Fpcf73peePDcPsgaR6Yu4KbaYLTeCs9Z2xvu9bALf4arMQvL4",
  "key1": "2xSGq21GD54dW3WrLctgzZ7utGixZC4No5CiZfBcFEF9XpP4GMoSyGmgDokvDMPSuZGyYLC2UgU1DMF57WzzjJJK",
  "key2": "JbqJAXXMjqHvPn4fyQFBU9nbKQ4KqMp5cZRVAJXekdJkUGezfWhWSxu3C3i885Rs1JutVUs3qAsUAPuUEv3TFfa",
  "key3": "25c7U9xhNH83cop35zbU1RbfG4kThLyBHeA9TJxA5P1QMtB7qBMfbaXfmUHaTL3FriZr7iVgJSreymvt8Kte8dA5",
  "key4": "5AAf6JJQ9zKiqSc7eB6po1u2SFQMpGS1JPya9PXaxppivANgfpzykgKefLSrnbLrNACxrsVPECSzKXLMYMAuEvcb",
  "key5": "av1k4xrDaoFfbgMqfp5LEE7ft9NFJh3SyXdn5DSaeUKSNN9mkSyrrC6Gs3vmvdTKMZEpe8MAyU9wrQQY1CH9nYv",
  "key6": "5mom3s2fkzKqfs62pRJTpFqwppTp2qAqHqBYzVYYnDEexP95P1ezbfREZfPrYEuT4eLZWdUkMkxHWk41m4eVXxzY",
  "key7": "44nbxgM2S1jGtsbMkh8FKQY4bFbHPyeiE8BfnawYUqp2XGG2mASbsizHRkgyzVkqmjR6V9sNrFcBB2sK8Q3gef5N",
  "key8": "2Q1wrj4jZcSnwsfeUsEYYGUm56ycLCXoAya28dvxUGB34dKM6LZ8U4LUBmZv5QAFr3R8MBJFWnFN8nyuwDHMHg5j",
  "key9": "4D7mG6GWnP3bYYHgBmzdCKHnfi1NYQhaUa1v1FrkRzhceLfDsBtsDaSiQZJP9Aw3KLjZSj4q32WD5K9yGv4HUnH5",
  "key10": "3bByDzyMnyrEK63xccWXhSBD8HszYJ6MmYqy1DJ1F9pEvJf6PHDPBSvhHxu6FY6ik9Gx9uxfcYb9HdwHjX76dfQp",
  "key11": "2B1yLrQB6FcV9a8aYdgJiZHn6Yts9LK4puGHK4FapQEHc62DZRhMHvzEeHjPmyNGcpNct2MhtHKCDCXzL2JGw39A",
  "key12": "2B21KT9wkdggm88mGm83kEwR4ttxrq3AdzSPywrmHXdmKEtfydNJQ7yR6w3cBK9fcWdH8tsZxV68Mpfvc4t2EBai",
  "key13": "z1gbbWZ7L4phnBQFhhphXrqPEJF8rKUBUhWqdp76PHGgUg8XBL1z1tfe7KebYzzcgLuQmhgojboUR7PLoEskfiH",
  "key14": "28YaG3HsqQSzZXfxzQFqGp988yQ92k1LL2LTvBMKYtv3AyxRqaUfJkPzavK9k4B9rDTDVsuni5YfrGhG1u3hSNh5",
  "key15": "2Ca5VySaDKoaxAsWTVyqqUTUksyPLKgFnwPp7eXbhCKL515tyv7w3B66pw2f7WmmeNK3nUtUGNLovPmJiLdXW5k2",
  "key16": "cYPNGk5C2MzEgZwmcATJZBkXCszHXnuTvGnDUqQJQBKdq3EqjetKyRhxCWGrJkHi6ATG2siGeVKPuQMAyRVmdGX",
  "key17": "5rp6HEYAU1jM1ro61jY8uA1dUm8svm6mPFZ5Rc2FxTcjfjHvNEWgLSgqRNFxqkMGYigFqP34sCT8AGzzuWyWWKQ4",
  "key18": "yTTP2TXRdbnocztP5sXfkVbVPawqcek1g5uAcQT9ubzwgUfwhTH6uMN85FWYLvSMyoKQwh6Un1jC9dU9Pes2JPK",
  "key19": "5WrnCNHH8H5G853o4Pd6UX1UAWsZXDP5DZgs6y8xyr5gYkM8Fi53P7cYNPLUKpSGqEg7opo8KrqbyCFPhW8mmgBq",
  "key20": "3K95nVVWnnjp37WMhKgjb6oFGTTqs24nL2QR53kMPRjN6LSyVscieoWd1PXhJc85KFLDSBvvRcaU8GPZuUqBSddn",
  "key21": "jqjhXJ6ZfAMTHwNeAcqZRv893H6X7ZjfThW6xXLMMfKmYMheFZL9eZ6a3a4WzVV6u3Pw97BeDyCSQCNac7hmKCX",
  "key22": "eGVvNBapdDamamJQm16mq3CHWCUPuXzfqj5146DCZrXho35cqSSrQW4hkD4vR917hFJz5ywW7bdnFQTvp4iwZwW",
  "key23": "2ivPSx7DnpQE8xTaJxfiPmrHoxBfBpqq4j8VABYFbMWz3GM2BuAgY3Assug3gCFK65vRKipgKcEF6Z6g1FEdaZM9",
  "key24": "5RjotR5bRDwL5NgmLdrYQcEeouBjjA5m85nBzY87ef6uhrqc6xgGvvT7rK2dG5vgA8zEmZor4s775pwK6GUmdL6D",
  "key25": "3LT7uv68Rcprk56EpbwNnwpoKmjXCZLiHEL8Weub8uGFhoEkLQzLzyHBx1DpVBqLHkPL4KM4E3C45c2d96BvQi7U",
  "key26": "35NKZ5Hxkb9LGK6hyLfmprPEmgGKYeBMzQ6Q3PQQLGdVNabtQqhEyqXE46Up4a7pcaYgtrz9qErXrVnqcf19dkiX",
  "key27": "8sw4K2nPiPC9vj6xgTPozgabQHHYPuPfWH5nGs8wXBqfE7VTSP7FiEbJ15w3sihXoZ2rjwuDooTTWxXWXQzqFud",
  "key28": "2craZRdfNZe4b3K4VwdgvVice2E4jLhq87jxEKPMau6Cn6VmZiY9caNhWFM5wv3vGEvZAuo38KB6RoeZjBvBMdha",
  "key29": "5nvwbuUbEnzuNoWPSBsm9jCnUC3SedoAvq9yaSwbs65J4iicXXa4vRKwKdmXcKozF5i51ZzAPe3nkDWxe3qzMHhd",
  "key30": "4D87msdHFwg5maZLMsaVswKkWbTpd9LWibySjGzUZ2vrYBVYrZvSQEzkzSjHaY6B1UuvqesCaPbbKaPUw7NXETd3"
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
