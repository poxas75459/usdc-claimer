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
    "2BwuV7xRuCDEXHQ7bVnLnwfHEzgHgF8A6Hfrx4jY1MWRvsfSxUiaaB2QbMWQ9Yo73XkFSCKQmnKJmZn5V9ssL3VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "brfdMjp9khg3DP7xhAUNyiUub4FCbfkQeREupaaPfWLG4N9sTDWqdiz5rDsogEr5YRUaZiqqbH8FjZtihJRvkR7",
  "key1": "4nYsyxKxjCuMqQ91s9V61E4EmJpc9nVng5WZL9YCqwDNdLQXJnMx9ZMQF8THo8pHDBo8E8VyV5MQDeoWtsfW1GTL",
  "key2": "4Cx1U2muX7RxYrQLP8CnN3fzQXkq5m8mkxCj8X1zZnjHfViLRV7XvWLe1ABNaJP3psDZEZKhvWcKHH7o4dna1Chh",
  "key3": "5qHLXEHUfLNeTSaqSggA1Nu9Q2crhK2ooQSCGoYi849hz5ywRyVfc8aUgP9NceouqiMky7nJnz26pyRRmkxtSrCy",
  "key4": "3sAk1QbuNgVNmcFCjnhtxHrGvURjUu7ex4rsaDWkg3Ur1PRqREopeAYiB2ahTorsj5eaan9tzbM94fNAqoS1NR4Y",
  "key5": "RkrnYPb8rGPS8bdFHEgjzVXFnz9QSr1SzwvyoW3c63vNyPbQKUYNYMRdZMNQ1x12BecJ4Mz7155XzFfQsLESWMw",
  "key6": "py4VDJ6oEB9N4mP11LYraHj3gH4UumPLFBpgAmEt9JR8FfjKiD4ecMLVLESYMWb8GueCTKTvWKqnUYFjXVkgk83",
  "key7": "5B5D73ymkL4imQWJuvT9inLEcFfnFULgtPdNMXGMwDPtWg52jJzrXV7uooyFzGh1kSVNNaFnv8b2GqBnNMkc1x2k",
  "key8": "p6kac9UGeppi4UHq8n2nKVfw6UfRrUkNvWVTJLQtxeYxxKw9ZDm6hpWCRmdqy3CZuuhimAVBMhSyi8hJ1nFzS5r",
  "key9": "5TBdiEYq9Mo36JGbSbm4UT3JcYrvwT63wDMrXF2Cj7BgqMopDoEeCoFLJs7MjRPn8cFhwDL9T5bM5CNuRZkNyo8h",
  "key10": "4peS1wQTE9EsSBVrmJ1G7mZZHqc9jE8QptaMjAM5VXWCbbLTZkBAnDdxb7zvLMQ5b1rAaFcJMjxREUzPP9q2K86L",
  "key11": "woZpbBZcrz4ghTjw3yrKJUSuv3HeRSVfN3q1QkttbHpUe65gzqX5h3DG8ruqVothESYeZEwqQhqx4RQ57hxza2C",
  "key12": "4EcdEBMwcprcYfskV51hVTdE77mgtsDF36Kh4SiDgnVe7PHfjCYbVmhsoew7q568beDPvXcuJqu3ZBc5Gydc2ppP",
  "key13": "2sy7d8jS1nkWoLG8C29Wejyhm2frJv2X1nLEMkdT4fkTkUwyQYtrvrBQdFZT1RuAEZJi2R5QL4KU5jaNCPhMjfsU",
  "key14": "woao9VB5NQUbm8MZZXsjjLdkMvVydv8Y86ewaTTmRBAcaKtaetSdtpP7Gn2ms4SKj4bUBq7qWHSEKZDU84mHoBZ",
  "key15": "2hfC4gsPRH57D1BV8nwF1KtQoc7gD1pPGDWGG7ECYLiSLfwtfrHechkWQpo1JDSrwZMchJs1fis1EC3BMbuhiPzF",
  "key16": "2S9qeY8xba5Fe6nHjYNfiVWXcCsGaFLmNRbBNYnpJ4mj8TEvErHQc4JYUSwW7qqUNUsSXcMpD5ncCtvJkBjM5T4U",
  "key17": "4oBSaPgko1Gy1bwt7efjPfLBS1ftjdjmwUMfVhQQLFWfuC2YT8XbA2hNnm7Emuwr9gBmNVzwKHvxfmvgqQEC5KNa",
  "key18": "5uS6tGDXzUYstuEpyeXUsUXbDADemZoKU9vZMXuGZMvLeyTGwzgae48bgsTTaUk8VKV61Zvevp9uJvrZ6Zf8pVU",
  "key19": "5iGU35bZogVx86D7Z2tVHvkfeV6RJTgk4944U8J31cxuinp8wb7Fqf1ixduwjXsEhAtvd3KmcfBFox7Z6tyZjBDA",
  "key20": "hrrY9UZbRKcgxwqDkoHNhAQiNXbRYet3QyRmS2W9UUA9H4gcUX6tnHexddVxzNMCbZPpyjiN5PWL9KenvEV2HBy",
  "key21": "4Y1aGuira2Vkbk2RE7xUWJa81rnnLgmQ4MnzNh1Nw4TkRFWWjXKygo8ns3spHM1HUr3Enmyw9ycqDzrYVy5jj8yR",
  "key22": "3X91Yxcau4rNfco6UaTZco74kepScvc9J92LSM5iTKt99j2h31uFFGFaSrWNfq77gciNAmcX8shTKuS7nqFgKLqW",
  "key23": "kKVcpF8NEzXZZvZYTqiMB8CB3rZx9ke1FemoaLPWhHeHXwXp1qwyD7v5BgZLDCZDjHq9eMGFTUVy8XVKCECVvbS",
  "key24": "3WgwqCSeg9EiJGzShCgtA32jJjwgRLQoFChtNbwrmj2hDU14RRiD1xAmjtHEcPM7GViGgmA8GPkFzSrgEBooBXjd",
  "key25": "k67uxo5dtDSjhNymXRs7eHra52YD7fxFtJAu7JAXroEsuzwPBWiL1Po6pbwbuTg2JS8EqtvFXePWFAbFkzojJ37",
  "key26": "2HWGrmkmxi6dcY58pgoC5BWMoY8Q5Q14K9WCB7JnAHda3JRfu8dZxWxCY3YrsCNTQk7yTfGUhc6aF7Lt8oW4TX3J",
  "key27": "4EPp2NHb9xjnkd973KSuwcqd7SBAXexTH9NUEkRu5eG7pe2DCgcL1ffZYjvci3Cx9cy5Lmq3P4LJhakJc7V2LsEx",
  "key28": "4SM8iRsCkS9yzhmxuEYbGKZVYJXjrPaYM1etpiNhRkDwUbcJsq7fDn1uv2vbkAUstnNpJhfqDDEwFYMt456Q5wgq",
  "key29": "45P2DoERDHPDyoDjK8GT6gZv8s6oF8e76RDKXfRQ1QqLFyL1XgZCvF5veMLu5oDXQUh8iYQwqpCGVP4xfEWp7ssi"
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
