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
    "5svFtVL1UiKbz3HJmNuLaDSYfTVu64UzNi6FQiJMzjM32mUu3J3x8a8Lqc9xkN9vgeDjnX8VViz6RQzyf4gzbJny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bE6gZxYuSB88Mcotj6SaNkkLjaWuzeLBPY8aDs3dDFw4q4hPk39CZBSNinegMMcs6ds8vPDYncdB5Tm2Yv78pjd",
  "key1": "2cLkpCFsc5MW5kyNdusDdcATehxTATnHBfTrdJfWrpVrnCRatxjQrNtG2WEaznobk7LH5eqPYsF9o7X8vhdcVxQN",
  "key2": "2pfbehZ4aHGGsXQSYfgBsSYTyQoDQJUum1DV12qaDJJV7kUJqsnNhvtd4NDoPGZ53qQug3jnt13c4oj7Xh1JU2Rk",
  "key3": "3HEffWEZSeWQM8tNW8LJmZABry5JRHyB1ZouM1e123JDqbG5yd3f95LjG17vLqZhuwVLtjY5NDDnkFDVoiAS699W",
  "key4": "2q5HGT4CiDxhmygD4REMfh2seqmkr3tGBeKoRxmZEkSgBLy14Fv3czGsNPmV2mc2PoZkmE3oLEr35MSqzgHeQR4V",
  "key5": "4tmZwH6gd2sK8592HAtJ4fuJYMj2YpBvjFKg6uHPzspkxxxtapLxwiLDC8DezWF5UeEFiQuBoHgrqEq82FPCUVoM",
  "key6": "2fFpP4f2rGE76bdBG98wuTLSAQZeGvbDztRYCw5wXTJrPaoJ2MfjSC6hGEi2u394gXEEW1znuLme9nq3Rzz3gpzE",
  "key7": "nTz8U1YEGfDQzxRGMKeEyFbQNK7X8jxoorEbyN4YRteaxSQcHjd32NXFbBzCdzG8SZgzkWFZ6GZ798r7MRWF36b",
  "key8": "4kYontib3TZKHX6vahuY7PoZUg2f3bPAjo56Tq9NN1jnuS4c6tWYpozkBSFzn8UYwCYv73J2EqKXYQq6jq7rggsa",
  "key9": "42nAPZ5WR5jfhRFhQD9ADestpdv4Fb3ubvYhbR2J62sLuDouanjPyxBYfnKPD1MedusCGDLybGwpGzBP5J6fMMdi",
  "key10": "3YJ5ActwLgmfqFnmrdv173aj1k5Nh3aphLCw5TqL6UpPN5bVi8pdCvNhWgpdtR4jQGELS7Ak8WT5w2fyY8np6K5L",
  "key11": "64aNtgxM5ixaKW1LWPcSxfBrUaPihyZVdyoPjcR7NokDQXdcN8UvVwXWatYoJuLMjarcb5y1oTPonHmtSW2Fb9Hs",
  "key12": "34snZPeehEzRK93eo98yfGsJuKEZoS1UJKLeickxcNSdogCV5PR7QeBtj6koCnQjqXWmrEPRNCSXV7wqJEcjGWqJ",
  "key13": "35CXEhcL2kNZLSrRHBNt4EU9TpMTK3HmHt7DM8CLEsTVyK98wfGc4WfQHZ7zUxwkdRwjLHWZSmvZx2zHsp2TSMNf",
  "key14": "3J5688kJkxsweK3wMxpqDNYFaLy7tYvt1t3UefZHbgU1X5TU9u319fkiYGqy1Lqi5Pkx4XGDZa7tU1cXXb3ReeN4",
  "key15": "AocnjEtvcHyPcbx1XFRDAyJCd7YJTVthKMTMQBCNhx2pZEiemwYkDjxMxwZ5CRANtrj1w6wZMffZsdHkbXuz3Ze",
  "key16": "2q5CtjXs13S3qXR7K1tpyEzY48kUFYFErWWPWiPr9Nei3vhkZ3Td1LAJD4Q4jTqyZeZKpNwRuKkTgzTP93wfbvbx",
  "key17": "5Z4V3NenRTNxWaYuEJnMoyhJjpiwDEn72SuzBLHhUbiACbf9zsmT7NnP8rUYnMEB3HTerLtnuvCekqsmzynw2fJ9",
  "key18": "2a4tDnQBUDTVgokkqsEbZR89aPfb4tGAHyKuoFbj9eVsujTDy7RQEhvt4Yz9tFCXhJdMZZFKrw2HfRQEa7pptrmq",
  "key19": "5dk1BpeRZxCqv7idcLiswVZePFSX4MWvHyfwafvhiDMEAwzMBvHnpA6Ra8b7cUA5akqRKHUAzBj4HcAS8Z5GqFTo",
  "key20": "5v68MgLjiV85DsFpUjAKqQmoPSMWeukNqfVLc7vPtv9nbRcdFUUsXCPgDx1nEwCT3q31bczQtuDrcDA4vsUgxbAj",
  "key21": "5RCZ5McoQEfPC3TUyafF6LCQiLgeAe3x8Y1Zhp4uJPcdzk3f7pDnXdhM9k1qtMvHnYF2ZnznEu65Gk2tGg5YPLZS",
  "key22": "3q5CxcXhPXZq3EwvhDaqgbmp9DFgTYac895fiAVL5rD6xXQ8fdmhpzrBm8yDfWFBvztvchprYDZRTJYJFsrQTS8t",
  "key23": "5rqCZHrguXVQu5fNxBxMgH4f2KQPTeM8jWU1EYzWUUNvuwmGiVo31szAy7dKwJmqcra5j6MFpZT9xZAN9aZ2dzG9",
  "key24": "5PmMRnv1XSqFLmmRiLKwinBampJ5j8LJCRMffsWNqMFgEurjxuRojMXFM3iNAu3DFTzXYtoBozafBusS2iyN2h3h",
  "key25": "3PsWD8fNZbRAMSKdCWFn2Wbjg2C9ZU1p3a6nJye8Lcfg27DMwDpq348kF8J4jhcrHwusHYbBgzisoZLWMw9CuHQH",
  "key26": "3ohb11jaY2pM6BayKhdea2xmife8x7k4dmLdvv6CJxoqroLddpbeoyEHJufxJmMnWvhn6Xr8ptBobAeuJPbXmUdM"
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
