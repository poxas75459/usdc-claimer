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
    "3CavmSNVSQ62tNKk1BR861ogDbCKwwEBwyAq2XX5sqZqt9RUvFVKFwS18DJYXqrhxyrj11qH2t9yQFkU5GEzpWHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Kibce5ypSVkiLBPD1He83nfsEy2DS4Wb8wsj5EaA6sXZWdWrCyvf7P8v3Fchs3RXPBE3x8jn9tXkGNPKmHeX7h",
  "key1": "5jzzkh2Utq3GT5GysARZvKYEmmo3GGDmS7y2Zbi81jp3gqKs6frAvcXbsLgHteZ1zpGW1Z7mc8zwzqYxBMC8FMWr",
  "key2": "NfuEGVs1JJLmKn7eLNBDMgXGaeDHLRfqXrH7fX9xRZVP9eohhMNe9XXhE7dWWNxLaPBs9iQ8v2XVFAXBz1W33az",
  "key3": "532YzDVFxcACFrYD44emNfN3ANbWnHTS1tSLEdBcWYtt3aTbs54twxQKp6M9XkwhEdBpZ97cGhjd8XR6cnTgH8Cj",
  "key4": "39easJzSEhQAue1pPUPGhq5e3htjv3JccETKxUWzwicyQfKfhSWsdZHYVq21hnKAe2Lq3i9MGtU5MWCKWqfBckEZ",
  "key5": "4vazjeRYnxv2WX6epdagRNkjcrCznjk2BuHFFQWDRVrSU3zuE8Ur2owMnfVFUC2hQMa2HZqudxux9gEmC7hDpDgR",
  "key6": "e9AKw2PXN9PY7KP1DGQ99b4pmYyaAc9HScwvycZMZj3qJTZzbBpvPZA6zJogXeMa1gknAtZKpkHQjoqV6vRvCU5",
  "key7": "5ymeXPpLHiuhQANni7mf9eQY9eeFa6L93gcR7vwLDzBLpiiL2nosVKfZjh4PCcaUdzcXWreftawbYkn9eATRukWi",
  "key8": "PgFZGhKSPHdKVpGFVVuB7SoXLkjfGtLamveDmDjGvfPFifgp9dikTiUiFRHSoNjus4NkQsWthuQ5WLrhJ31NsiU",
  "key9": "2VqBZ4oL5H8WZASYN9Ucpdd9BfTTnpke9TnyEJUJpbvfwgWXR8daxVLm8MjsrtR7eQCdn6ZvxQT35SFadZJWGEL9",
  "key10": "5HaT3nZ84KUzwhkYN2bfexUvJMyE2DrN5bJhVbtgt5hp2N3ouyxMprwimHx6aNZkY5qf1BajBd6f5xjAemh9wGSr",
  "key11": "5qKF7Aa7kq8CModYGkDGyYJjK41wyXCJdYgeaz936T86ZwLPbdkXAkiG6VwJEebEwq9EUxEuJd1gLd2BDSwcZ2HB",
  "key12": "3KoinJ3YvDtUkwew4sEZ9kVePwq4VKWUjZGfAASb4NooKoWpqjy9ts5ZnXWxzCwnjNNZQUb2SWuNR38aJ7zChCtg",
  "key13": "5mq39111u7PesdackPuBHznqXWgdEr38ETyjAxoM56dhRT3wZSE42WFXxFiB8D6yJgKKkfieqz3C6dLBFa9APhKZ",
  "key14": "29Wq7n55wshfUQEne3N8nt67DsKSTbkbFsXhX3moyQ2DJ8ugbxUFX7KqdpVR1sgx4gHKcPFPGqCmvwchJZm5ggm1",
  "key15": "2ycj2wWeXak98q9eNSbqMp6Bj8RZZdeiTrXCEyr88YjnqxSEfcjKys9sSG8FPni4gnLbA8EeyKJBPfc6PS9YCVKm",
  "key16": "5Dw9rYD6mTU7NJSvcT4YzPiidMB9UUH43yYjUuRxqyXyXsfnWDnMQ8FpvXbFasjqZe5m7z4xGcGvfUZCw7hpbxQr",
  "key17": "33Ba7vfyzmH1eewH7bG7SmG26ECsNCNJuKMoCnSZxNPgHXcr3FtnwqobPA4MnZiQPDHm3Fs2cCv66Lxt5jKgZGfg",
  "key18": "2nGoATqsWKb4TzM6GjZoruER1rJHhvjsgXEJHhz8se3ZmonPJ2LAJR6y8aBFV9q35hvFspWpDoWsmg1eE5ydF5bF",
  "key19": "5eaycDAiygo3gWSpC7m575jLnF7jxHbLjwXoSC8qfzSYusPgYr8hhxinwhbvwunNiK2PzMPsSiXPjvDXeesGHqUk",
  "key20": "2qjyHTGFMzX6s4HrZCep9FvMYrUWH8WsXDF3w8Eo2D87UdC2kkDVVifu83o7Sz236tHuSv6uoYQNf7cSzqLeNaKe",
  "key21": "4NxtdRGM8xLBrZeG9Nx9cvrtrmNwNtQ5j4ggmqWZqTCpaoZb4na7r1korodoGMRDBwFkGUFrnmxZejXbqgeRSE1B",
  "key22": "4bVSBevkSseeH8hMiFp673AeB1SqMFZVV4CzJFrfRdvK6NuqVE9QYQx1JrZ8r3s3rqgJw7z5esFieZ7urbh1mPWM",
  "key23": "55mPNEMB1PcC6BmWWGc7gwmzm7w5wFSvnKuUoFLDaMhBs39WDxSUhK9BUUFhP5WD6gzFJv6zCnQJXy7JEaDNeKNK",
  "key24": "2BQSyi6rFQyHyirATSooFLYVe4fvidjxS9vjUTBwsFyRUeWsW6tb4WQVXXGNckfqLJCSWtpYbdFJSSB5g11RNbGb",
  "key25": "4w18htiiNX4zVyrWiRqwYPDcUa1iMw75vF5viZ8D9Emt8LeAqu6gbii2wHVqLRXFYnVYi4VqYGbXbSYNxMSdwuG3",
  "key26": "49eUKcnrxoB7BUeS2JuVHY6rU2ZGPCSi3h92grYnrMZEvWkX7FJVqwDE93vAuDD2yrpNGvS6NxY43uxPwG6bkVo7",
  "key27": "24T8LbrtKGq3Tst8vGmYddDgEJw1dMgso9JGj9dYNB3KJFaq4pJkQGiQP4nFc7AcZJqLUNwQN4ujiGfXBYQim7oo",
  "key28": "5fj81wHq9gRnnZKuPqxk1a7PKtn8ZdstggFx1LThjKk9csuTMj19HPK2YwFzyLe6CNuMikRr4tcpERqyPT8EEWSg"
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
