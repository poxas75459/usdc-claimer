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
    "5vJ2UkrhNmZC2zav8WY3S9Q6ZB7BhY3xaT7YBi2hmteKDxQ9rYuWe9QzVC9FiUSUTsYAUf5p5u1qdsU7fjGLXA8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fz7BntdFxDi6ocsSrryPqYWATN3f6qCPMUsoDxAVbCwrr1QoVXGGWFM4jgL3aYqcEjBtttJiMrTYssmf9PRDcs4",
  "key1": "21vLKQe2hLT1vmEx1xKt3JonUH3vuQoJfE8S1RpY7jX8tkpv9ef5RGoHpvSfLXK2VEPiwJdvDopk1KmCCDhixjqT",
  "key2": "4aq8NBuATSUAfrzFqa5zq5T56qzM1BKNLcG2sVYLaNRPczQFwpZEoPCeRYakVMXj2vMwakZxdANWkojzHjSPQc4u",
  "key3": "v9nHhdb9mxzHcAiG4hHpAiGPNJBAVJ7R3ywBnHPssLHBgwN9TvXzBfQLpT85ef3uXmvURBhq9nXEQCabwqWYS2w",
  "key4": "2UQKeWhMwksk1n18hfp6WHP9gEvFha5NAiomxqSc7mB6B5gSgrfrT725ehKEJvzfGBYbEaHMEu4vDTk9p4kzCuW6",
  "key5": "2AfzdGnyA4xvx7dz51AiTkku452yDoUWB1k79zHtHVLXcoxDzjdhrfkGCeS6UzL6sYMEyLTB75FDCz4G8u1umq3t",
  "key6": "WYDWhchFB5VjXKjuyhbgF8ktYx9kyY5STZfcB2ZGX5GD4Ytj8FYdbyjNeX5S85A9KoCn1mKkQoaQCS9QXV6Khi8",
  "key7": "5qCKcFDoviiSqCRjzxQrs2prtpsm4ZQv8i5thS6A7ETZS3vm7bw8zgBbxA1W6Xo2fDiVstGagoHhwTCWb1gGjQZk",
  "key8": "TL42Fk1a8zLdRgQ3JfKkJjFamRrmZdfjVpDXmmyVwwwvXxZYZP6jAV7YNkpg7vXNmkSqWCfo2aAXd1TjqMx94Q2",
  "key9": "31MMm7p32qAeYe41XaFbLEtbALLYNELCmWsUiRJBJYZ55wKcKpujfHbtYGVQnhHb1qXYskqtmC7E7woM5KXD39pc",
  "key10": "5yvCGH64sB87NMrBQgMSYfdfzTQcoJa8UxmRPtAd1eG9ibH1aF5G6ndtS2U2ayAPhH4VHPueMnLJtYpzGsaZTKhK",
  "key11": "4kkux1udBVzN4BFNoKGfSLGkp7ekWD5TnPWWNBvEofdCdRVEeNWyNrycwmJAea1wwj1NF4rUZsxFZ4HHbAaiB3S6",
  "key12": "2494KqzNiDrCLdJyDDUj7VKHZc1zmzNFmdVYnGMq3VZsUPu4P8e7U5HaGG8D49aZzBBo6psFWj2Uhn6JJ1N28Wtv",
  "key13": "39psCZ29A57AKGAVmTsTrsJeSYTgqnmPTFgA8mVej8L172hPYRpocBnXpYvYkE3wDfCopN1L7mXi87KgzFAZN7dU",
  "key14": "4FTHCHaj2tAnUqcAtzo8ayiQrYcLrQoFwPqAd7LGRU66wPdcyj7pXBHLuM1xAS8P7RUjMQv7cB1Cdy4rbXA1eC5y",
  "key15": "5k2RciYGX25UnoR4Q24FZ5SWhABaNijtXRCc7623S8cTMbtmuBsyWKdQQtVNof121rwtttm52f6fCwPxvyHc3fni",
  "key16": "2LsoqMfzwKgBMZyP3rjqjA75wf3mZzqoaWagdZEHF1Yig6TtTvNRCY33tBiFamTEVJiv77KqWGTdj8b9Uc6CzSsS",
  "key17": "4etTULC9gdWHw2tSoiuVbT8XERtKbombi3ci6vUxFNnSa7gMP5krygqmSTXu4w13goiSRhUtNmNLpR4KVq3MdUcM",
  "key18": "3PfbhPTCTnrd3bNg2x98fsrCfNrjEwS6cgVmeqKwp3B9gchkgwJ1koSRKg5NHjehrxEX8Bf32KsTpUYQjCSXqwSj",
  "key19": "4jJAGhiDF9okWdSZozcp7HhtyEncT8oQauww465hBZTudbx7yVDhmKP5wkCdB9BbQtzCRm6CUbHfFySe1YWy7prC",
  "key20": "2rVTNNaM77BX9D6aPpbrfLvxWzpHhoWgnkvG3TZ3f4VSgucxZhUkP2HMWDEWSTtbXehuNwcMpbGRQr4gTYbdjK3R",
  "key21": "3edwfGzFw18a1AW8ZeDKKBArLXGhpt8NDCD3FoD2Zt6UQzP1RrL4dHicUgtJww1dFk4yCdUFuH6r6KXmA1uy9HhL",
  "key22": "HjaHenH5xD5mJnap1WvL8zmiKUVKX7F4YgFtofMu1NDRCSCMMaBrzWMoGyhXX3hWTJ6h8szhRAFUqqEAPKEzPjs",
  "key23": "5TWYLm2DiJo8M6PwWwjU8RbWvJ57B5Rfz2Cfrq8tBbFLPgyKAQMdNwxayecrXyEpwgM6wDqMScNZEssUpYHeh8NM",
  "key24": "5AhC3e7hZGJ7FkmYnM88jKJ2ZKKKX5bAefztLZHzebLKQFnEinaSC8GZaYxJJXBSgW9acrHk8cc1Yn5iCJmemec7",
  "key25": "5e2LerLSMVTjzpJ9sMRtjfaWekw2bbgX2WNRQDrxPd2fqM5nWhwRmGLtfW5vUyQTdPopVHpHGkwjiVk4APEwk8RP",
  "key26": "5n4B6WvztGErVtyF4q5NJ3tzx9ALEHkwq5qFR3j4vTiFBphteGjTWPxgScppweGJ7e4SWCwe5kn6aAPEic713mSR",
  "key27": "4L9CagP7FqpTnTQKrzEabLMfp4iwjqhLkwAf5fieZpK1dABye8yQEEw3BnXYxKQAH7NNXWXz8LswEJUDEA8uS4uL",
  "key28": "3vdT1XAgarcTxnsgEEvzkGyp3ktCHjY7VX2P1eFVWrUgVjotak9CPMTBNjk1o4afF1JMMnbVb6Sj2enfS7cJ8YTj"
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
