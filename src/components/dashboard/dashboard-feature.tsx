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
    "28ozieNczcCophRZWz8u6EHeQKcFXTrxc8AhaLQKj5LcR6DQVWzX2Le6WSyShTp2aRrEpTuNkMqUdmzhoE255NET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFm89zWoiQPtcKgCBTr8RhBNHPnaetwaku6WC4K6yB43TzY9SrRQZmxnMfsEwz1XRsqssEWdFQ5hsRBmEt13Jni",
  "key1": "61FHmQTaDHzMSTgc9cNBQr5Dyqm7EFka97zA6C82rQS62SBp9bKFtfucW3kDxEuTzAGcurBPpGNoZwsvG4PiFJTo",
  "key2": "4sMWKcQq1JBcyo2DZNM8JbhCyc6T5YW93nL3uLvaGaFRuubhdU33PB368e553bik9mWM9GzcukagbkutTT3Uecmc",
  "key3": "3P3MRUFCcfRUe62XYh6wyMEbySJBfLcLZ6Gx2NV3n9nRDht5XJuDqWrhgPrcJsHAnBVxMdaHopNcn27ixj1UaDMr",
  "key4": "4AFwe3qEjVECHQrR8M1ZbQk3kmSuDr2TNZZEaseRJGhk7SMMMezrAXvczStZDUaAhxHkKwTPCmo8D1H2X14Z7eYb",
  "key5": "4LneqEotPW9TohFSjM6ZghVehbGb4anC5FsjEPJyd6GCDZMD6jAwLFhwC5xGYAtVAxLkESP8qYn3o3mpygMDnkmb",
  "key6": "2Lr5jBTHDMzZNVqihaaRs7TkugiCChzQTf24tvQbnwVBa42PrhDhsU2jAgaEZ7y1XqUPFvqv7aScLs11ey8QRXh3",
  "key7": "4xuHbCUA9xNU1V62SnniPdZnujYppsWryG12bGBBveTQJK41ZgagzBKE72hshqpaycDozg3J5SjymN8Zcm1NCGvH",
  "key8": "5SaaFgxA9ALpW9g8roEGEG3QGHBGepTWMRxTLQrYeD9GgS7m49ikWTQNw8A8E7febsLzR9DixkRd4HbeYonGe86M",
  "key9": "4qrEnUbAUJ4BAiVAdX8sfgHNP8JPWiF5dwgKdnkhsLLHSD86hkaTqbTCeXBXkhE1DYUozwd3V6L8fD1pgTzFD9cT",
  "key10": "64cyn1xSVvmijmH9MnfUcAHS3rcGnQRM4XPzEXEvFFUVZVKLw3eFzCg9TxMZff1cKCCXsxUuff9544Cs1HEo2Ne5",
  "key11": "3az7TshgHJ6NXxLwnpHMWCm7XtinPkwR8RD6SwdQm4zjcMVEVgJ6dFGoExw3SbpJf2wKeFx7gtYzVk8o2GQZsD9b",
  "key12": "2PQCE8619myEGJzUEvhuPJFgq9A15NWzSsGWJuafu1R9h5XAETFvGeDP3Z517y1gTfVjGE2jrA3oHibCujmKuqCp",
  "key13": "2JEGhzKyNvtdhbuZZYoV89zuYTiCWowzqHavgeZk7TARq5L5epYhqukPVx2bb77xgooTbibzrM6mPgjUJYuVVPA2",
  "key14": "4JHhipvHi54T3X8D3HLdxyfubbDAceGUdsWgidysK5AttBN5pLm62Egb5P9WHBv4QiwAZmMWwwreCWbZVi5ZJ3k4",
  "key15": "4gwuPaz3rd9rv7FWVySyiCNge1ZH9LnS7GxGG4kn149JbTbqp6oHpccqbFgZWA8uz8JmCTihRDePFC8LXBCPYuFr",
  "key16": "Y3Xs5S9wrgkydpjfSdhjMC7q8vHc1UFFcrgDzs4GfiSTxbccUXhHrGCcVW34zG3CvTcBZcWKSZqM44g918a6bLc",
  "key17": "2c9BQ5uSbrCYq9xFuHTcCWJeCUFJGDiu2gNdHKkgd7bpKz8EhgpPW7WaiyKRXk7GeNmo5gTjuc88AJ6C9o9G9F4R",
  "key18": "366vvrgqAPeKDUopdASU2Zc3oumRNy9Rz8j4VvgMWw4FjBZo9Q2nGWhD5N2xF77nGTKRhJmypBLgQWi2HRHPys8E",
  "key19": "3HmdQE76b84a4TKqXiF3bms2fVahTdu4haHjPkX5KwZhmC5BTbUxdNWDtr7NVyoweb2MCy5DvrZENRPu8vYQtAji",
  "key20": "5oNuH1sZPRtTcU9xngA6LGgoUmujGnYdAnwidV7vwgd3YVaCuK1HcqZq1rZL2zPgCBMJ5MwAYsj4k6fmgH1bBNUd",
  "key21": "25L3xmecxM3ZZE7S8YDkxpJb4QQX3B3MkHxkvnmcX2KLYcPKSTvGywqY3Zk4rJro16ncWnzRZpoj2UzGX1JikMsU",
  "key22": "57V6E6h7J8aPWw6akcFCPQhykcfwX1dFc5hNKWvrsUXcEFAqcCGXE2rgWVA3XktZpcDN6P5qb4FkhYFzdCg3tqHA",
  "key23": "383NMdbfgEvmixcACj5tYxkBT7iMvRks8NupqrLmVAoq2eSQnX8XosR5Pi9iyDT9KWnbBLC6WoPrEtPwu2EbcB8U",
  "key24": "4uYXduNuk819PKu7ogQNZGd9U9JBtSfG5rhW2NrWityQ7dRmaWkTEXcjHYeMLvVyD795EzonU91hfytjGudvq41i",
  "key25": "4bFLFTQoGnydTCUbRpVF4Yv5QDoc2qqaxHrSRaPGUdNLVujqNCMd8AjqeqkorrkTk8cuDfDWuYC6iAog93Sw7o4f",
  "key26": "ppo6qQrfZYiekHEifNBvVQf3v7jdsYLSYarmpf9oa2uvUFkW3jkMsQ4DuREbRNW5wArKirhNjHecz53nnBJX8Zt",
  "key27": "mW52EYR6Sr1FzKSEhvPpxRGbLHcJMM6wRnmFxcq7LP6a882pQGUESESxiRnjs2pd6iSE9M1qsh3pRGFN3CgpxaY",
  "key28": "4sbV7wP4q6hosWRSkEHY5fnfSzx8gctWArZSHSZdUuhW5CV2Z2BUcTQVpx72kDKtznKfbokeHtpxwe4eVs3UcPcW",
  "key29": "3mmLdmLZb17SV73pTZGb1rgpnwBY56KLevj5affZTDQ7XVjgrtCQKMei1BjdFYQcRsK3BtzxjxY9TTa6RMQ3Qtxf",
  "key30": "5C1S32pDi1kJT22XZjrkJAccTxae6EFTeMuvDB27dutgcviEGsZWXxBTxX5D2PX4nzNb3BGV6hn2dR9Y2cevFF8J"
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
