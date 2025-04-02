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
    "63wui4ncFL8MCiTnF3WN33DGgTEmTDzSYb5tHtrySdGbtD6fBazFML1osnCUmqv8bRe9XZyRYPbyAMNa5gPcg3RD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkBwWBsJpRo9T63Z3VJ1zYuvh3YgUSwqdLwGTCie96HmhMNpjEbHXYhgemQWSNR8BUWziRQv2ksXFcQbfSjJWfT",
  "key1": "2JWLpPHaRGqM1cWTyuZRW6YNA2GEtzBoiXABimZnjDdWvfy9kJEUd9b5KkmjnrQVzA56AvYTykpjV3wEEFHfb4fg",
  "key2": "292M3vPMYaUeemkWjodeQrwV3YjudtLjFFGhcPWxevruxMBR6dd2arvjotJJLb17XgQKu52T2UeQPYVabiFZjHE7",
  "key3": "4X9iwWp19WtVdNFYPP1a1eMiPNnVhGf7rcfspd6KLA9ZxHSFjBoDzhSZXP1HybZePzUzAPHLiusHyaPaizMEjCQX",
  "key4": "2R2vjKTnQUhsGHSmqjKJiqTnhHLSpkwNSHEiaa6fwnkSxa65rRaatksNifE5ZpSykQFguRgLiLbZiEnW9qeLNgfX",
  "key5": "3ahEnjMca2jtJ5AXvoMpmKpf66mVn4k4xv7GxtGNqKXG65fdXK1XR97BntunFhvurXRLTfHZfPjrRkJxbqe8pUxF",
  "key6": "2ueJ9G8EPZ8Z3ziVBPNfYGT6kbLkxt3XmcDD2KBrxeyJ2BYt6PXmpVD4wtdnPrP1cBYXXZVgum5k6bApM84XBpSz",
  "key7": "2SmaTiFJybZtuT4qwqjqmyg83eiYBt2Cq8bn2Ugb7tkjb4AVcrCiW95ZTkecbzttQ9TewwvViZfrKGKGPJvMJ9CZ",
  "key8": "4pfFdat5KjruJHscsBp5QApTKis9mYGVRH5ikeB6CbU6kxN6RvPtT5vc6vq9yVxKC3wNtASDcp5c4NSqwtm935q7",
  "key9": "7XZAkj5WnpYhifjbCiK2VLj82ziKjR3GyiToFXGDetKHN8ECBSqL7d9zfFdCVM4P6AYMbuSMkvwF6uviEwkKob8",
  "key10": "5zES9VEsVQLnqxDPPJ4EfY6g2VU9YAVyuPautoLxvAqTV1SAboqZVbksUA4kjJ5FR6aRWRqX8XqTLcQxBp8M778x",
  "key11": "4LbzP9rJEixP3Dx4LHqHD9WUNMzZK5NKKQNW9bjvCGqroCWpYLgaZGc4yCHUtbYoEopLJC8yphrCh983k5qyUGNW",
  "key12": "4WnBuHHVqAZh2qUTzKfWBdhiAShZYXBvQUfyschhy2yjXqhdYGiQiU9oHxUbNtZpwwGPQNkQZ5dbti1SpGVQdyMX",
  "key13": "4S7KeZ93nMDr7mhq2eFkmVEBDErRK3QYQcfUjKkWndFiBGv4BgukgPotGs9YjEDBGx1nedhZXAcXRGmMDq6bFkpm",
  "key14": "43ndgxVZYEB3aJebDWSLUgpMU6E3Zm4UMTv1ZP3FY1gp4xhVhTYAhiwsPjgAgM6XaCLgWCqiWYkBC7MtmAhsoRfF",
  "key15": "3rAZvxpqa5j9631CNEQKd7K3q9VPBRag76Y2VT2SEpRhe2o52aPHC2ihSQL1yF8imPPLxwLogwtvSdfZH9nYnZHe",
  "key16": "4RzKL7Ux8kZnXz5SfjjkY8zv3vPw9296UvGBS5KhBSWu8RMU2xmozHdcpfJqryaN26KuToAkPYhGRBZtVY17FXAh",
  "key17": "4dQCa6TCjw7bbjw1DgBEz8GW8xGm2vrxCGuNEJCW5DmCjv5pSU5sC4TUtmPFKC1DvqedzCjQc8v1HMNeMj5io3Pn",
  "key18": "2w7Zpnq8HJ4YoM7eh6j756HQJXiK6n4ALoCUdaYG4mSbnpeP8GM7zeBi1pL7Mfb2ppoCuY8SmMzSnoxySNQDhvcD",
  "key19": "5vQdmYpC3vhySDgAoqdfQAC6skvuNdUhtNS2ADH4EWMv9PJG4h79wPQwDc9rpo2k4A7rj9otYJuh7gj5XnAJgVRZ",
  "key20": "2LTD931aDv2whcdvBCrVpWHvbthm8RXmP3ocR4SZQFh7JoW6s5UHs6jv6HsUe2huBBZYXZDTSQ9ZjgH1gPYDkT4Q",
  "key21": "5JWczMZ5zaVBgtF8DAW3SUBAJtTTJGZNuChWzDGhxfbKCGyiEm3i7oww5HjtBZgzVpPT6kY2YSii3DAD49xmpf4G",
  "key22": "34xt3Av1Ao19HRv5EsaBhPosodmV5Ji1EzMEXyCcgZBwaqcgpyfLm9p4xiw6SxdjzpidMNLs1Qsw7EnUDtfYYBWC",
  "key23": "4WTamfud5jivBCqP6BsbqZLF1RVojHZGx7zviFhKV4YZfiAY2qNDqR6KNLTQv5Dc6mUTN6StgSf985pXyx27eRVQ",
  "key24": "53nUfCwMcSwdiM91BbNAixEpKaoogzfZituAwuZJFXLj59GBvVEjwMy5EYtrQdUjzzVvcG9EjzPYbHL8ZvRdghzF",
  "key25": "5ToTcSFaf65Wodmjfr7MT21fwyvvD6BhCsHTAo4FxbURwa4GG5A3xaMggKJYK2kb5Z9ZadwXbhPuPB5MupTm36jw",
  "key26": "5a4diVyZ2mWzuvn6dGStS9cZeqWHzP9VqkTW6rc5MQJtDN1BR9nJRamoBrY9PanvFquNSbWXuJzZjGW6YukdfbQm",
  "key27": "3NEQBDCo9mAuL3EZaAy2WgTAnp7UZRjYwKaTSiybZNYAxodLs3m3SjQE7rTZN92K8o5wJzSDvjiHVngjmPKN6Aph",
  "key28": "3pYGZQHXcmvPMaPXGB9HL8uHn1kFoH3veZfEC9QLfHk3rD7xNayWow9tr9xNcXDb9trawr4e3g9qCm7zv3QGKWwK",
  "key29": "2Ye1ojjzdXQNZNxCjah8xs8p9YvEVRSDmQ87zuGae4MwYr8WDooYkA9VW2qE66geFojguS1p5tEXSaopZmzYZ4eo",
  "key30": "3HM6CHznjygkoQ2x7HVegS2FjJsGhWHJf4jwqVmqm86ybQgf55PxeFXiiGfsk2s3tMjJcxN4bsPtjbE5dkGHWo2D",
  "key31": "2ujmfK4wymgZTMtupHGKzFMZ8tYhncdjSv3g6SKpt9ecEXoELmQ61RyU1trmyDjPPRxpNuKnQndeuT3pVwHc8pWg",
  "key32": "5rhsCigD73dUabzquwWdnb4dBfpRJHnUCwaHWDq5icagQ1qfrP2dEGaEGVusXsQWHJheWRzuZt6ZVSMmVLHBjqGc",
  "key33": "ffYdRsHCKGKR6GQcTJMSa9rNsU6kGupzSKwm7rMFAs9VKFTjZJjZhNNbH2adJxpVPu1HJXzeg8VJY396C1gdAvt",
  "key34": "3xZBFUooPgm5gayB1tnSZVQpvAmyJB9zrX43HHJ92Vt251SAcA9LyGvhrUEbRBhVTEG8q5Ze9XECKmjt635N6SG5",
  "key35": "2RJ1CQkHh9SCYsK9nkxQ9aSUU5ckS4iAqBZ4P4REx1ccfkBFhWTvDni6tQ8qxvLMSRLT54Ae3i5Nufb2RqHvGmah",
  "key36": "4NHzWSyf2VLb3n77yWSEq2Xztd5TWTCg3mzCnWuUQGXnHwcTyXrfVagJTkvmRD8dozC9SzeXu3zDACdxLKvY5TPd",
  "key37": "64V6hsnbD5RWx5FShXTvLzzXdagqkR9UuMiHvmRDJe31G4gi7VVCUsFTWsYMurFchoxWVedjHbNc9P3sQRLFg9Jg",
  "key38": "2hxbyB4M4MwVDQCLwPzotw4ukqAy6FTNTsF1p9o6ob9NC9bn7wDLpoyxYqq3ijHfEsEguoBFqz4WJeyxPuRpGDz9",
  "key39": "4K4A18psvBsKnemf93rMiimSZXTtfZZ99R8kD5wH5vvTnCtNtEU4i8naQ4PvquUhMEZsT5Xveu13k1rL5kuhJ5oK",
  "key40": "4ZhwgWRNGaqdMZEN3QzEbDcR6ynjbmstm8rPPKCj7Bi8obboeXWwfeh8R1CFPedsmJMLDTP1TQV8ZiFRBQhhHjJF",
  "key41": "3nGqMBoowzvT4K1JnP6cP7qRQ6Wa27XWqpP2hutyNZrQ57fGjQkArfdJBgCm4jLspEUgLzMbrE2JNexzNN694ZTo",
  "key42": "2Ky4X6o1HVW744nYYpDhXUzLwmbMZ8fgPvWDFVZByZEs8tueWa8JpT4w6cQY5hfAfXKqD4YD4x9hy689WL3FQAPC",
  "key43": "MVYJqcNvFKhPfzLfeCH8tL5bDc7ck5qCyYg9pUnwne9G8x3fR7aXnMT6McMmg9ZrsxWFeuhACGn4exUu4d3Z7uT",
  "key44": "2vgJT1xAhyHKCuKJsg85p55jmeKkfCtvz8LniZREKLMybceheRCgoDPGHvmc8ijHJsYM63pK5PbU2aifioKGwoi6",
  "key45": "2UxJGKHdQvjyZttbWuJiNbqvzL2W2SAuebxna3anyr4g2N6sykFTV4WWJnDbi9itdAQW5wmxwQuc98pGXazg5VnS",
  "key46": "3rMm9f4Zt2PFcL161vJn4qc5KthDK53GJ6CAUdGPfahpEZ6S3AtYjMbQexcvd2beP2wkkEVLBxTCY8nHBd2PJ5e8"
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
