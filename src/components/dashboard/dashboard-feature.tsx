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
    "4QuHmr5fM8RKz6Nr5kKEyqtrgxrWkZvB3xYU51LS6Tcdj4YofLUBNEKtLHhp9R6T4kiUhS9heB1nA1ryswUPkbq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfix2aB3kX8eE2wVBkPTeC7qEx6tYdfhJMbTMpyetM5M2rTdimptpVpWBT9h3Hc8h1UptgZfNq26DHFGUwsjwb8",
  "key1": "67Gjv5QTTc5hDsU6L7QwMKAw1hYPcHvGqhRLhT9m7bPH5fTeHxvUR3zq7z2NH9oZ3waG9Tq3kvSxnRzt4RWJfqLT",
  "key2": "4RHW4oo1UqqMbuuFaXPMLZuszqZxiJ9WcY9V2LnshDTkc4RoBKNRKZB2FzFFQusutZmJNwZmCtVU7SXgSX89Zz6D",
  "key3": "3N7Nz5TZS8bqrhtP31A7vSaoBazhZ8UKiXyFWVM4pipzMjAhebfsBfU4ZQZuowPbNAi6PAbSGd4RSyP9XztJDYrW",
  "key4": "2e96CVfbwbPcwdMkA5jgfCpWAvSJUNVC5ns7yBR7DhZEJy3Ynxpo289GawMr5QzygsmFj3xgWxcaKXV7RCoM8FWv",
  "key5": "XepTkaaTjZQU1qJAsSHvN8AJpVRFP3wKquz5jRz262ZDakBSw6H6JcoumtrX96i9NjRMUCCE9hquJMMbf3zskHD",
  "key6": "rHjh9RZsCZ1YafJgGTNXWCCKQ6juJpuhdkq1kHX7eVyEpzXEGQttJNg28wkMofJ9bNLuCc3J3DSYtxANte2gntE",
  "key7": "5uk5o66P3CVo3ZKSyw5QMHvuhE1iU2iTSw3N5TftX2ySKqB7wHF6ZXiaM4YbKwMNUk98ui3yQAxGbApbuYuwwvn4",
  "key8": "2WqLxYqUdR62ybiaJqAHmyeaGR5JfFtMuMjRDjR2MoDHqJpk2rfvWGwVnFvkahk2NRFyBybTvvf9aGGqisdEUwjF",
  "key9": "3xKnTn7GSt9G5HDBNe8gbAGMFFeofPqRdJ3td8QBZVqx8dbXmLn83CjuKtHRZRgYHPmTBFbhoKAJRoNo9GAmnS5m",
  "key10": "2CwtggHH5oNi8ZUy56semzhcgz41kt27us8ftnXGhy3626B9zwubgjefcDU3dszJ3TrXe3JGouoyR5QuSU7SJyvL",
  "key11": "4zsNSuPQgeQ4TJYC3ZzkCDJpG1Yh2ayEpHjqWt5vD8URmqS4w62CRy5exdWFjH8xRvJtqtn5Nc5xHHL5ec2u6b5w",
  "key12": "KbuajtdN4reg5Z1FHDti2iUYyjgGXbjZtJL4YCeeKxnDJaH77YvMaL8m9CjjM8yLWdwGLwiKnrJtBZN5NSVAp77",
  "key13": "5LXpfYTzDi5v2R3P28tW893yRkjDuLave4JYXGxHAMqR61NE3c6SyuM6DytUnNuPwJ15UUAktqxohKbmsR4is56K",
  "key14": "5JsQvEiwBuGsApF1s8MiVM6eQCujJzuVB1CkTekeZVRr2pfjcFVFuyue8879m9QH5ZAGG9HApAV7K7Zjr6N76VVK",
  "key15": "4GW3ahbJBKDLa3HG5GspsmAtd5iHiwRUTweFn2H7k5s5EnmJi11xuEZEMr4nnVDJJbGjYyLVDrUi1m48AWJU3QSu",
  "key16": "3BFnCvzDHCmxvUGH1unKosaBpwoWkpW9TM7ZTfychNzpWDancv5hGcap1oZe2AR3qubHmFVArT4hsPDjE8DXMgxn",
  "key17": "3b6Q4dfy3JCmBuGeeuEbZffQdAZbNUN7oC4XdcoRSkYpYH3BqueLhqbGJKnN4FUNqTLYTnGFoEN2kHgA3xfVFdsM",
  "key18": "4GusMtvmdfgtDZNS3zNSAMY4PmbxZ5fYmYyDTQjV5hYtkQjRLPuoq1oVDFDaZcB1tprSLQLT9dDgo8pWD9HrAaXv",
  "key19": "5zMDRLZL8g8M76yJh1AB4cmqP8FC6hojyV5tELrwKmxCvd5AXsRrNKMY3we6nMgH1xzxw8SkHPmdJt33e8fsAikq",
  "key20": "5figs3Hc53wNP84bFF8ezTg53ce8YPrxAxc114V4VZTiaicMh181jWNHSS7z3XVBNW2bjMMDCJukuFEx3Ennq72w",
  "key21": "5j7H3akJQMQwFuP7BaSbPD6GWe8XAJbBToYFWTMFr8saMpP7bceJXBfUpVRZDauYQ2oJhXNkxkRzF8UaCRxcQ1YZ",
  "key22": "2WUQ5PmVNdXjwNTjL7T8QFimZwpuR8bdBkA3qXLwY6LUx99jw7y7FQTTmw2B5ujkCj7vvsoEjiuWezAJTccjgS4Z",
  "key23": "4vsrda33EYW5Hba8Z4Z8T8berKDiB9R4zopXnJQRM4tAN94Qwct96qVG8uvWdqXMBSkAkHMCAUXcorbku9so9dA6",
  "key24": "zZU8ZrzzNUFVEczGyhXEd9jrNKeSgwDb33qSSAH9Lo1nCfUFFSHzHmna9Hb1aJQUQd5GyfgWxNHbqbWbyDKwKHQ",
  "key25": "2kG2gPY7FjPtY6c4ttdsp7wEe7DfjYBEdNF9YCyPyBRW4snj4MHFHdEeK9gMCdbVd6oAKGdpvoScrMB7FhKeBwJe",
  "key26": "Z8xNaMKp6fFNFhAd29NDphYTHrz936ReHkCwgARKbVENWGL6pfefJpjM6G8x1TiJc3gnycDRHU7RrhVZMEGy2AD",
  "key27": "4iS6y5jbYfehFzZ3KR1BWuj4eoVqiwrzK7e3gHznKJZPqwKVYCbvVMATo8t5XZNiWdrAqpUY85WUH5JDSMSpqrT1",
  "key28": "qKQSPrzfwfJkkUoC84uqU63dHHjFfZRZ1FDhURBQ8U5nUWUYJ9K1Tba2Z3sYgQpLNPtkrKuqLUL1DJHxWTpno7m",
  "key29": "37FzHUcdZ6jneZbzZxJMapHFLs7j7jhnkmDqdbZMAYWbtGpLoSsJSd8TS43Zexn4kFEV8Qjdeg6YRVbzNoARSWXx",
  "key30": "xGoC3ceT4Lg9jUd7dKMcqr9Aa1GVjCnocqc61NzyCK2fnFNJEx2tx9ZAK4G9duHhPVFaWKvwyRatGCs4QK2fCDW",
  "key31": "36qTVgmdoEhkDLLT2WUHHpYYTfaHFLXPvtxMxuyYDCCNiWVYv7WSCV8VGQDcYpRE8UPyrzpFmuCMthbzmxG9EgRm",
  "key32": "2Ybw5jFLBaHbcKrriAaBB7p8mQTqP7m1dom4sXPHYH6TNvjynF9BpqtUq1xNujm9N47WLdbNUSJw9iwjn6W7TCRX",
  "key33": "2DyQhxytH6SAc1JaDSZ5zmqqYgAbM2UfHuHTLCHskN6R2Yytb1gCkN1MfpyJYtoUS6X3qTK3TKT6v5HaG61gWQVa",
  "key34": "5kwM1Dmt6WVCe7kf8TT72umv1ZggLQWMiDRYSYDFhywkkvu5ZbBs4jNMfwVGfeZ7RMd3hNbqufXWjrP6gQHb6Ze3",
  "key35": "58jcD7j3evEErGQE3hqDz7bXcHTC2rrDQ81HpQNdZSfdNy1i1QmF5DAmkMyPZdq9TeFqRiwYJQmGznPhSedts1WB",
  "key36": "4yusFca2WRtRnDjenm3UhD4C1pVXKBeuudGMcxftKHAfv9JYBAyPJDa8Q1KSFyps5onw2tiaTsFjHxQdr47G1Cse",
  "key37": "52nwZt6PsbTPG66PTSS3ERKnNk38iwfSp6BTNv3PE7pwuwmXdwxiYj3igZy5jWtuJwbouWWNhK8vQWdzecYFrk9o",
  "key38": "5dpmzVuYvV7XFBYFb8KWJybnxKzFTe7t8jtV6oWbGwAUTKuzEJ15aNPYBRAqD887e7yoEk2mXTeA9ZVrm76xpaWw",
  "key39": "WuAcaMQ2nYhHRv9rtuCaChf9j7B75FMhM4pWHEtGuN1FE9kWy5S8z5NPMx6Tp6JtpjhoANBC4Xeo7RWwsHePk8R",
  "key40": "5EinSvt8cjFP27izA2VEUSx7a2Y61ww5pGQYgR8zSY23FY3NzeRdDNRrFua8KNCynaxMoanZzwXH9SoxTJo7K1vi"
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
