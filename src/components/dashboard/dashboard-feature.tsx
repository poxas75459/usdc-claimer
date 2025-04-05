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
    "3yWBkigYPTvGWqQmbpvawhM4pfpdJL3uHo5Mm9avcgDaxuXogCCsSbMemyweNzsX7ufyxKhxZ36eBRWXUMSuvRHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CUyQF7YvNm2ZtBrBmurcxkH4moB7Jzw4D3wTSu2CNyYYomXcESEpdmb7VJDuQpcnbtxopWcHLCMi7PzFMg5ctA5",
  "key1": "3qzuxppZEQ25muJsbwBp5m1w5VTb8HRjvCMi27sqo8TeF29uzF8w28DThCjDJnTMCsXnN17z4daeTQNQG6rmUJCa",
  "key2": "4hRPMwrDzHASNZ9jUBkza2wmbvC9qLeHPmD448xZVJc1Ypw3cS8E5Nc9AM4uSeSh7hiPRBriFXMtKtJZ8cgQx8b1",
  "key3": "5LFtkCUURegL8YuHYefuMGoU4XQeUtDgFDbNdPR3isij1Wn6Npz1q1qamQH34XVPrsFhtzrNXdbH7pg4Xpi95w5c",
  "key4": "3dDfwuiSzhrA5EJuQ3bb7oqQ3NgUdpyHweWPDWa8tkticV5vA1YfVPJFdyVPMe8EDktKLUkssgT7EEYc7jhNLW6i",
  "key5": "4qCgt1TKLzCe5jm7Ytnw5s3TQJtEaD5i9wr7p4YwTLcvmavfPR4qno2JNJCKy4z9YCmYJfvaZr2DcWHhpYHpmLnD",
  "key6": "2VrXA67TDvd6kZk1ZXmn3UhWHDs8Jn1Qj6WJu9v73vkNvBeTJ3jRYFwXN2oNYHrR37vPtBU4kwXpZbcEcyEAwnuG",
  "key7": "2zkrsAp8pbQdGrhBGQiAPhySUYGu7FK2GyvbdPD1A3RuTD5xU4DucyRx65ioCE8spy1nE7wAkvgTQjtpLxurqtZZ",
  "key8": "4nbxCDbkMgZGzEpyD74EANiaypJYqYAZv6ZedUPj5TEDWphzfTpj5S2crn1Fa1AvCJk1mNjuXcDVzBNvD5fDfgwL",
  "key9": "Y8MrV8LNG3DTN2pvb9feybztkA8WHhYVbLLBnFwVv4docpxSAGHVYjf5GXPPrGnRnV8xftdnBFsQVU64axYv6ZA",
  "key10": "4HVMrPSD5qQv8LuqUYCaXDAVNicyQ4V6Ua1BYu53diRoo7gCgc4rFw8ALc1yH1sxbhjqjNHsp5PenTb7DXnbNtyj",
  "key11": "58x6Q6PabkuVUXG3G7sdbDhwPpW4fpWa1QzFUnRCSgWvHcgri2oFbxURKHXKSZAbecQ8PEohzeuUr8KqBPJEcofi",
  "key12": "4mJqnPcxbDZiCy92iKVj6MYu8Zgf4oS7nSz11rC7YzxJ6SUB42naBLgbYLVducCAZmZn76ZfWE8ZoMo72u5qwN58",
  "key13": "4go3RvbuQPgaPqgk8M2PNWnHCwbhs57nQyRM8BirQHrZeqBNmarVZezqiuYMESG9YcvGMzX7DsFFxHrRmtWQEStA",
  "key14": "6678BqJEFaNrwhDzdSP8NdH9XjR3B1gbB15dpyzx4f8WeSsLyvcBHJru8fcwcj5D1LeWPqu66wGcC3J8qQWoon4Z",
  "key15": "woaKFPcGW2MwBpwuP5kUWF4LM1xnFizdy1QaYCTiD1XHLM7LKUPXC7QKjrgpP8vm3oJSApKcmHwDQey7KspLGFL",
  "key16": "4T3QmjGLVyQAvtTaeK1RPwaEcw6nWan438coMDSoKWDfbmtUu1UFgh39AzCbgP6gX33NUUYMa724KCoscgUZhWq6",
  "key17": "37QCkrotLRYVmbt4wnxMvMhzXQgUa26XQ22okuTxMLZPqTd4w5QvVh8J7xg4XFd8FXrNP4X5MxPEjdWPiNMfGgcG",
  "key18": "2S1TaRscEb2qVte9bs18JS9MPFWkXSVXsfrVAwZiLyycd52XdDVxBYq1aUURCHVCSZVHYJBFb19PY7xhT4GbUzH7",
  "key19": "3r2KHkfnyPSRadfChySGBc6EyRn8jAvJHmws6zDZbF4irL6eqCg473sWbxiHp28D6AQ1ApYjW9DdYCe8N2fqcHvF",
  "key20": "4d3DmMgPHrFbxddVZ2yK7aes56tCPkxdYaL5eYm9v27hdfrf2wWPsyaYULY8Pe6xWL7uPKDJPbkR1uweuV2LCB3V",
  "key21": "2XafdQhQ2F3BgNVtsVTVtkcXpLDwEpmBGc7nU86s873uDy2WKaGAycU8QiQcntQhpQmCaUtXecjDfXZqsZq7HUtz",
  "key22": "3wKyBsWBdNyze623FK8XZbS9qV3rZMiVwYVMwSoY8qDsenneUd5Nnur6JjCTQDEUQ9RDz3wMwKL24Uj2Uir65Dk2",
  "key23": "3eaYBdRU1xzT6aquRewqRSzuT8ZUYNNx9Qn98Dd4mvPfnExZgkShwieqKD63aJ96THvA74WXR4BpfQChRw2WvdTM",
  "key24": "5XSPoENJ78gBoMHZAUvrd2D6oadB9APSb3nfBcrE6gG5h6LNRm8GQVFdH5gg4YfikmmaZukvzJinQcTGjHjHAyKB",
  "key25": "4uytibAiVFDzhzpCmZh3iUtm9rYMHZiJjMJ6LC5kutedNRTTfg2jtZqrN6cJL9shpvjDkXwNxGfrQEVSzRD3tmHd",
  "key26": "5tAwCBeuPM75LdaK1HqaGSQTbEyDpGiWmuTSk1txxmzHy929Fi79o6MbfTnLsWR9zzv7QBHHvneuhae27Pu7cXeN",
  "key27": "3rBCgfyEt2MPn65Ugrz1XPGXrP9oLrPk2AhTk7WbAbsAyLNFkN2iBvURUphNTJnNK1hqxdoJ4r7zL3GKgQXsk2Ag",
  "key28": "YnaDMKFAQHKFTa8C8XGJaRXXsdsGNEYhNkFQ9jJ6VrJaJcznmNJCvSz2ddT1sYx2JZkuP9YtNH1nQWUu4Z5tPAM",
  "key29": "5YM72QBaXGdpfseYewEQJeEyDwjM1RfiA7ABd4QjcDofmoVGD9JtPxB4E4buYKKTEoTpxHAy8Dy8PvTuBZos5pku",
  "key30": "5UBL3Xq9XFVzBHdkbfMXpn3rYdGfWYciotKtQc3HpkyjN911BNmyMaE5WXErSGpYZMkageB3Be5FagkaDhqTJxkk",
  "key31": "3CZ4UgBPrane1pvxi7Bqo3wYZMEoZwZxg3Tyt444XEFJvdL59ZxdhBAXTQ8A5adAX7gna2xm5LtEgBQMH5uLoiYG",
  "key32": "43xUbCTzyPCorSwYeiihb2LYXECTMZa9XAzEioq9uSZsJAQnmEE3pgrzmhBSWKw4iSFfiq5RHLPtcf5iWNSWgYSV",
  "key33": "pB9np3S2BCYansqpdAwo8yLzgHeXsWZ6QRT8mcCUFd8fgTDPiCeYSyXAKtDbhbmNeDZac9yTn3iPLxbSSooS4go",
  "key34": "vGKBaFhiFz98EgYjJhtSK99d8wpaoBcjUPbNfde6ViLW2YYNpZsnnmDwkqLGMN6z1yYYHEVQuHNYf7tuyNHjFPY",
  "key35": "4BeHurSsTx5rHBVm2T6DC5aFYJpifDwAtvuACemPeJzzTmiWfFQZkGFJQt69LsAD3jBKV5EZsP6GmLk65jAvnR9C",
  "key36": "5J7GDnxBYnGPRmtgFNBVUMn3BWD2BpoieVp99cgcVnRUwEK2s1cooWnkiRoDryL4BiwRe54szPc2KqVz92WrpCFG",
  "key37": "37id37GYRLw4zbkWJWheH6jTFuzEzpr9zHcKP7sfrXySKXLGSeyPVECg7AicjcmUBpgprfs35HZg7J7AZ54Kx4T7",
  "key38": "9k6oFrTt8CFT3XFfoWGdJMvHsRFkzg7QcWtsbF669NgCNJREGAH1TPG9m88CHFVT6udMh8CiaQoWpN7YQUfZq9o",
  "key39": "hZUF9xHWRy2M8aM8Ph7g64kgpyKd9Z1w9kUekYoewZAPdaj26tYQWJQY36oah89Luz2gtfgpFET42SMvXFq9EJV",
  "key40": "5s3Ajo42h6zTcQkbUpvM8pkB2WoVgwTrusTsoesxUyFKGXqMdzA5SdJ9nnfeu21JxDeysheAppA7MMbwVsryqDbU",
  "key41": "4h8rrUjV2yRBD9ZrsADDhyscHe7muSxuD5ch3teYF37iZki55HBfNrLhWUiTDkgvu8S6NvcZfrfVcQgVDJgarqXB",
  "key42": "2sbhxP9z7a31rkEir9a1M844secKkv5WcxCcXRPtMCwasbWUt1msF93Pi9K3x1b67iN8GMNRb7ESWbgHT9tXEpvA",
  "key43": "2tWQG8sFsVdkT4imRZ2d8N4YKC9quz9ZC1YbQd46fQYFUcuPmnrDv4k4ya7q1oh6kQwbZYt1TCmez9W4xVZ9prbn"
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
