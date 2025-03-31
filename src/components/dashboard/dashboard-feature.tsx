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
    "5tJTH4Lqz4m6v4mwTEF13WMiacc5TPPBx8ybJ4Dr9h8UPdgAhkbY7DcAd21kcxmB4uFZj1ADb9MZuCUDxhLgD8sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTABTJ2znK6rgChoAix3tuPiRSZXER2gujnqUHrSsrMntQmK2nbZ7CCzzsNMttLfUtoKSsbGHCWagWqZ2izKb3m",
  "key1": "3EGPDj6aTHQPbQDJde5LAhifijwHnof2TUbbPfodxFLXd5TP5izRAPmmH1Xx2FVnvoLzAi34jXKKKh6A8QFKRfS8",
  "key2": "2bQxZtWXZYvYaBQnM5oQ3b1NT2dMjpoxrvT8fTYqq8ZbkEadKfCkveZjH1zSjsfV33ZTLj2rJ54bxL9tRWaxtRXW",
  "key3": "vZVVFgfVj5nq7u8Z67ENeBp24PXaVYzXZCsroXfMZBUSUYww5fE32q9V7kynz8xSMgUzmYjrCSQJEM6sEcaRAT1",
  "key4": "59WoXmV93KQFRJLSbgUeAxpjJMyVKGf1tax65fQHffDN9FVpexNnEHsc92xTNqANY7FQKYX9xKDh3bbiJt2HZ1WF",
  "key5": "39Q5YEd6gv6p2ybNjo7JeqgZCQzX282AKYAwVVgYf4AbEkCHTHHraQ16DbWKjQt11KqLA1sqMMqoyXgwERH1gHX4",
  "key6": "2Gegyf4j5S1B8gAhx9XmBZqzLeLj5MQqE1u2SADr89emvCu4EX7jfdNYjt6rFX1jmMuNhdZx2YSdNUDTFHUs8urr",
  "key7": "avLnB39WriY9gPQSBWq2XMLY9WYTcrJCoqBxSq3F5Mhkp2r3NYHQyMMynsiGFdQtCofmzV6XeGCtboRDrBdE3gc",
  "key8": "5wBsUURYJ4Sc9zKTtuM27tHw8r9NakRxoDwHvFFSNdCbsAJR2ZiQ2LDCxLNjqKVVC1dBxSjQLrVXGwSsHw9T2K27",
  "key9": "5dpazM3nES5u32WnMr8MHVKTXNoDLTZbiKC23svHZ5D3mHNLVzsxue9Lmob2Uymi62ZQ8TbeqeZkV8cYn27ez2Qf",
  "key10": "3tHUZvgd5SdBA3KZjuPgxNSBejH9w7H33FbYFhgeF6Q78xnNRmKwvEfChL2EVEMhPR282LZSEG7vPcGa4pD1WdPY",
  "key11": "2nBpuk8g3jvVWoB9C9ZNmYbkWti3kWUfCUybXUg5TE8pRxq8eGvojTDL2mmgactvh2XnPzRVBf8hqgAnuosD4UwD",
  "key12": "72SNUbMrSd7WxV8ziyFJU9WQL7txwbwLsP82TiRXPKwTzjdzaxd1XZKqhuWJXdZF9dfTy8283MSHs6tbW8dLjws",
  "key13": "5MxfQ3kxQqEcpfiZQFKET277uyoZSmpzTREEXuZ2jLnpDVA9WEWJ4yFcqmYWWg9KeVDPYbtUVouP6pEACBqtDehS",
  "key14": "2SiJ2t3nehniqmiGNJJ7eDRAJhrjhYjufr81TetWayKwMduSZaSMPH1fxPnsDN9UtAFriwbCfAt7y7dEA2iv6yXH",
  "key15": "2FL3UH2fM57uaao3uzbZ6GBGXcfwoCDdpS4nBELnKQtfsFeRt5idG6y5UGWdvDv8koHtKnuc2inz6UtLNdY8CbeU",
  "key16": "RcQMV5Lbgyfqsh4h36yQ5Die8oBGqhRrfS37LP2QYVYqnjbeNBGvvD6z2D8QctddbxviBYky9gSakmoRX7eaaJf",
  "key17": "sLZ83FXu8moGAGWktZJYJhX8BfM52Kxo9RsM37xb5BwJHnLSdcv2TaFwyxoDLWsrKs5pfqtABXJZZgST59q8kGR",
  "key18": "3rvfQHDtiWhZMEs8Vzz3xMPzydWchQNY5Ke6yWcXsXEnx7HEe1XPHgJAkdcABKH7QdYFHurLxoiRT8RHrdkR8VW6",
  "key19": "R21w4neZQnbtSm6ym7fJr6P5ShDiwFRc3dUEtDJLT6HzKeSa3YKeESWvVgeW2sLxuHTvBiH3r9pAiZosLNvMAe2",
  "key20": "34c3F7qWs2ChRpeJLAtZfQFZGtYXi6KFR4U1TaAh1q76XZNzh3KAVrgeGozsAFDXcBKq8NvuHR7JUGyjWPRKJiWf",
  "key21": "43LPTSgM5xMTLo1vocyuyABHzwQMU6Q1kjnoextMBdSUmSVMwhFp675mTTa9fiw9yBexgGqTXFfWB9PUQJphDmP5",
  "key22": "28FBWxRcTydNsT2NcNuYVTFSNhadaCBUgwaXNqreuJC57zChqyfXNcgkFzwPiX3Adwj7w2d3mcLhxJfb6DnyMD5D",
  "key23": "3qYvWEXS8qdHKCLojTfSH6C8zD6snELiZHh8k4ELcHC48E4jmoeZJHgUhi19ELvMxF7nffAqrnP9PpzRZSxof3Gu",
  "key24": "3mhqZqr331QtqfxbuwbjCGFQSz5AoyL1wsRLMKkrCtmTPrPqujdpRVXa5GbB3hXdcQPNvLVoBwihbp81CMWAUr83",
  "key25": "4xcyReoNkxLt26GMx5prjSR8FScP8z7aVntYdEek28RGbJCen4LzXb2LoJWooMb8mxF73zHpXRUsUAPQaW1eg7Mu",
  "key26": "FU4kMeK7vJV4sp8kkUTqcRharNdRM6DdL5tyApiPNkSp5SowUG6UH3oHJnkaScnV2FjKR8khJEHVcvp8rmM8JgV",
  "key27": "5mbHtMhzWZ4rDxoXEZdUD3S373D7EjKgtiuwBv3Nk2LYAXKmp9CZETetfcu8ASXMxqrvgAXin4BQfwyuPH3JmFUV",
  "key28": "QbLHCc2eJu363D4ygvBLKt718JJyg1Y1gC71DaD86nY2kSCyYz1kWDudXwJvdDu5DShf2iBG5mpyTjUds6S44tE"
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
