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
    "4EiqdmhUy7ncccegnQYMYCqbBPoQz8jHaW1uzqLxbp2MSDsBpgTp8Z7WciszdrPNCJN8xSdKBrvKsVJTtg9wsiUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tg2yz7S7G4cQ7K7zJgZfJ7TYpo6RLrmbp7JTPQjd9RYZwA3Fn1LDEYnBp92tfX8bpePHCN5WmonpaQcvdg4reK7",
  "key1": "5mcNXR3W6uZnYSw6Dcavs5EaEBVt9ds5swofwxPzxNm5GJuVpTNBcvASLr5GuSnLy3ybS1n1A5zfcmXUGXj1HXcW",
  "key2": "JpFHQy2Utw8tLyz6zdMLuwaFa6s4n5uqquaVuvhkMLsbMr47UR6cPANwGMSepeAvRXLveqz2admrets2tnEYJrC",
  "key3": "4gMstFrzeqe4RmRVkyAWMss8rxYpntKV9yjmtwZLDworq56fa6xMJQDfwS5GekH6hrfH8pGRFTPcgn6by3yPvoqa",
  "key4": "XkDBW2uLwDSBqAKwvSfSTgwSsexdF4nwqtxyFsfVtahaNAiv2Mz9YGBbmSGnFWgWc8rUowijjErjFKu5JYNANt2",
  "key5": "AxMGqwba9xNK7VQADvdrU7APziv6tiAQjKLZHynzNx2J9mjxVYtLsXyugBvNPT82j1xW5dHzJkzYBqQJM8tfdAT",
  "key6": "2ihoXm19q61E8MqBEYH497XuSRh6sr1rVoRLq1okMrzboEikGvdJh5YnRre4GC6z38kEBrRvuu9d4oqbriTjmaNj",
  "key7": "3ZPo1mp8uoLE54APHET12vyBqwvMH8s3e9FNJn2CHuwsix9vHyU6DAkF5JqW94uvE2ug2K6jLFJaHunFYGSnNQQr",
  "key8": "4XJtTCJcJ388gGNHMN31N6wWn2LBSZqLVYwTXrryQCjqenMMze2DDSG9n8LgWDNWHu9G2UQFfv6yZE52Myw1pvre",
  "key9": "4rVHaYTkEcb8gmWne3Mh5kq7ovy8evYs48ZJ54mSLvAED13YShJz18sHZMujfnbs4L3M4oeWPx3tzgWSXpQRFoq4",
  "key10": "4b7DXZCQibNvQi1pyWemfsXXwv6RdCG9LqcDyZm2bDsgYqW19QcjnRPX3sUrH7R3yr9VwKGB6uMGhbzf2mhjp6Vh",
  "key11": "4GQhcuax6aNwS5tvkGgayqpLaKCH9WiFP9cqRY1jxBdsohrcAse2yF14shZxQmRAXQczXGdeeavCGxABB5JTdqPn",
  "key12": "K27tMN7ChebEbV2Ew5f9hXEtvvKHxgNC3FJ64VaKshrqDXS3fHaqMBqVaZUy4qP2QfZPxEVdoADtMzCHqDQYqhg",
  "key13": "3zKoMAKCbUEaqVa4Mc5S8HZheLnnRiCQEWPyyNUps7PoToV1rooMeRQhVRZCNkV9yacSLGYZ5vSkr2V4EhTD8zMj",
  "key14": "4FKKz7REEVBSroifwYZpJGtFrynAEsm1BBJX3qkowwcRgaXPtBDYMCesgmV1TgnjDncoLmMZoUnum6q1SWQAapVe",
  "key15": "5QNd27koz4QwmniesFBwT7eS7u713sYqW7JTpmp3swyGoyNRCzo1K7f6oPk8q5eeNkRpiV4mNpH9vryVdHLCQBfZ",
  "key16": "2QQasxT7z2c3Vte29MGgzJNpkt8bHecs93Gj5hBntCBzJQnnC6QJDGL7EUfrTj3MqkF7jojznELUsmpf7XKUsxLR",
  "key17": "5NKsLNZTa539aUJ5xLQYPLk1CuigAgtuATMPDscKSXGwCpSxrKB4HDVHDEbXwjRKZQWfir6eZcuko2unwjdfYAXy",
  "key18": "2KevCNZhcSE6eC9WeTs3ZW74thY88hMxx4oKN7sQNDw4iZjFAijGoBUyoRrzzNAa7cVamoqxJo7b7P5APyhHSQXK",
  "key19": "Fk8BrKmszncpT5r4QeZxe63WjC8xDJ5S62hQ7r5mXbkGW3ThFtnN48554aAdt4a4s5SpGauUMfCHQ1Uv5imC6KT",
  "key20": "sGAZcTtu3sJffVFSvRiqWHskxnK9nynRVM4NwoHhWTUfz3Qc1JzYFYDjjLWHUfuJECgMeweBjyd8KbEBP73DrxH",
  "key21": "5stqaKAW9eewjJt4g93Lh3KMzffkEqVfs247P7KpuZadgVGx5cENEB23xutfg97PMXJWmfrQhVGugiiTbYDQuDiS",
  "key22": "4SYjKUQ6YPtFpD4nPeJ9DdJ3PyFAW8865AQzrKafJz34c1wzfJzqmXiyhSGiZHcKnRLqNzh2SLcShqs83STHzFrA",
  "key23": "HYioZ7ggaUzCzE6Ek5wMKcPZsyuQHY1Laj6vMNARnKFZnr9zTXpn9mC6hXLTwpviSCTTerUhUzh9tJ61VYRjTJ3",
  "key24": "C57JicUS9PmKMuMKwtVgonHidKdkFp54zUbBGiGsuXECZV97XYAAfCrwEFhy6mmcD2QRsnJEaZywTLm3unknBoq",
  "key25": "3VrzQHvjvPxrUNiFXKyLeiFaFbV4z8xBMzHYaHnfbQgYfje4nmuYkXDNPRYXQ8TyqgDoQR1Ej4YXm2efUjNjfKoZ",
  "key26": "65JVLzUJbCZbgQiFvPLLYtpAc5mX9jg8We1mMxbBRzRpQ3E4Un6MubmZo38oswHhqZu6f3v9zpMtsfo6aqBJkjPq",
  "key27": "4PoAb6iLvY1fofgEVrFKkyJu2Es8QHFteiwEbS48ATEJNT5hVdXcH1tPoUugmHRmQ6BxMeph6gZP42JzmqycPjAW",
  "key28": "3cCmMXrwdx8GWsSH275hTi8UC4SbYm8PDoWaHWSzioTEzR9BC7peFJ7U4bohbg1h4NdaMXkhLFkb8PdCEisZsvQK",
  "key29": "49Wdy2jYNXCCuoC7TeLz8K59t6Bq5PG17kxZqcH2bbXxzgcENy8VxrEeJyDQmHybBU3Mhuv5eGJuXjzr7oYPAHsh",
  "key30": "2K7unRjuJoFvYaXJSV3GTLxYP652kiDyjWpWWQYQyqR9Duhm2wTfhKTMHjRZKo2K9F3otZqwWDxxAUi5BPmnPhby",
  "key31": "3i8oF9YwR9N35s8xicVd1BqRybszVm9WeJR9hFENqKR4CbkbMFjmzXAef44z9n3Bp6rZ1mWJ3zBfasaY5jeEr6Qd",
  "key32": "4dc5Y7qCdv2MqSHPpHxSCshTufVyUf2FyxHiY6EPMXMwpieP8mDcX2XZoc2HPKoGsDpZZMGPn5RtWvsYTTByRfhL",
  "key33": "oeqmFdEmVwpt4qVCB8HGhyF4WQM9wiQnYGjk4fD9SU1S3rzG1LMwTX9nf6Si9kdxied8HfPQSAqgt5zWKp9VA8A",
  "key34": "3CsUhrhL2Yt3RRG9tqfmFRPWBK3Xv9SDyVzbs4uH783n1FkzBQu612fuMUuHGoP9DGkwjvsHNSMeyLj28Bys3L7Z"
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
