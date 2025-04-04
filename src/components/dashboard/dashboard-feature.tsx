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
    "wE9jusZ9euE7o1xnQYLXzPUPRrDLZFgdx5iQHv3MT14KPZJNTXH2odm3UZTE8MfuYSasUT6kXVJm9xMHYP9qUXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PydvpJnMYKNjdTvwHNucjsnr6QspkpPZFVoLCp8u2RgM3ngcbdNaBbtJ1GvLsSec4gdBazkLSxZE71GUHTMhyWK",
  "key1": "EFuZYKcar8Cenmr4UkJJUw3yDU9soVH4Rnh5f5ba9fw2PmvgJf1vYp5aUVYWdqFmn5FqbhFoKWjB5sgWyKrMKMQ",
  "key2": "3oj7BXiwjx8bGXTjqNx8xvRvjns5LecirmFQtZ8osfwzKzGj5qNVvcq9peS28FQb714rqK2vSCG6jJdW7VPUXG5F",
  "key3": "sAvgChtDRdtPLYupSUANLGETDAMRA7rYrY9LTQ4KNJSdxX9yN77vcvuBjsn1Pf1qyayUnRNPLHqPfcHLjq5MK3F",
  "key4": "4tUvaicT7w9SqrLDLhB54LnyR9EdFG2fobbJEmEZ7Taozb8huepZkpk9PNinNovu1k34UA2vsYRVfkva9CritRw9",
  "key5": "5Mt6Qudt6Q3uV5nznxKrscDC6AC9Gak4wf3wDVRqtDeNA3kjUpq8RPAAi5fA2YavnJGHmkiYR1vrFgj8wRJBVRT9",
  "key6": "4pdh2Zkejiwp5HGz8kzhoVeNQcDhaeW9DSYFJ6RGWPi1QGPwbgXMD6WBXPQtBr5ZsTeyLaYjBZpi6TzFkicvjitB",
  "key7": "3tCYCUD4GGJK1WSGvg8ieS7DDm6cLf2n3o3N4nYvmqYTqKYm3nrPYWnyaMtLBrR4FA16BStMMQPzE4MsTmfS4t3Z",
  "key8": "xKAX2qbYWohszv9sWV7k8MCzUTnJsSE9sbkKKHFESjGiNyB9gjyn5MoDGmCZuHFhGo6zGMtiiyBpejKBaCWtu5f",
  "key9": "4DmmCGWnciPL3tQ3vrDQQhhEwe66uSQDcbsHu3Kh5VSoxAuU178SWN3EEpSGrvtNJFFKx8TumeEbpfLo1eun6uYF",
  "key10": "Db9kSe8iMtshH4pkQEKu35jSZm2UgwqZkz9etnSGtv5ugQepuPYmwaPBJdqZh3XoqDYfCQrcdTRf1CWHoDqBm16",
  "key11": "3VUc6et3J51m39uJcyTHCmArBHj7eRUTrvMNWrwZc2q9u3oz2ceCbysBwRnGEWLCTLNHnpCdrXpDTu3NHNu6rRhP",
  "key12": "2UTsC2ppvB4i72ZEiH7cwUHde8X9xWPpbVhPDoqrzCZmckWeBjG2MbvFHeFfGE66XguuQcCidEuyXajgimXQjUuQ",
  "key13": "4M43hVHxByu2gBe6y2d2H6ww8nhG24qknjffsx4zxBTntTEpz1dPpGyXTfvTcAMf24yi4cv5RwcGoRahmanyUWUr",
  "key14": "511t41SwF8amswWAQNfWHMuzb54hSoy8sPubbidrxF9WVSsooqSvghcJWD1zMnSxZDrryekwwtEyVu59ueb5RGif",
  "key15": "3NqZk69rKdJHi1oHzb67uwxRJxRRSusd34KPQ5dnwKRFGKzkTHjm7YukxPuk4WDRfjMDBSnzxUEC3md95d9rHuYX",
  "key16": "99oiFLcZLYy6ufHzfVEmBZT881tCLJVVacFQNqT3B7NSQB7HKKCApca2EbPNZMzaeN85UcLVS9cnQs473rhULSx",
  "key17": "3icUniUHJsXRq1esFYx2WfdDfEw87zdiU8Eu3nwZqN2FJpQEfi2skwuoknyYf6DZRCEixwmqAXcWyh1NB2v6pJ2y",
  "key18": "56hRLqwqx9QhCztcWkbUy1SoHNwque5indS6EKY8kmZ855dLqvznjbqz3s1CZHAGrijs7fPJdPfiUfHqQtmxdKw4",
  "key19": "3pUNMq1MgJNvnXeLgomYEs67FVEBp1eMdZxbp4HBhsNPKab63hfYimZtByZH8cvJeBxKgeGSazZv7h59v2Ham3pa",
  "key20": "2mPW6cquDPvcDoncgPn4ARPbb97FJDvJRzg8dHvtujxDjKR3NCTqxK1BNxWxpji3FVNfqe7AtBM6mfh7LjNhDyBD",
  "key21": "3TP5NV5MkJJrCcksjAw4pfyKGpZCxzD8gLvvg1shnDMty3QxVQGutnqM2oHGpyrqaC4GEiEJtM8BCbLqfHkZ7q9q",
  "key22": "2CVoWvYLRGWHK39jieWKjPdEv8XAYp7BaCGmUrFEWPqaGE17g3gNc1drkAEVgjmgc3Xy6RMhmpd3myLQashaVnAo",
  "key23": "4Z2BFuFmVxCoseTw98zGfWQCk6qfydx27VE4RcEhAxKmGrKHU2LGiJnWk3fu37woYpsQJ5H43mcAxmXY5NYQMnr6",
  "key24": "5oSj62R7z7zXRmsHrXeJJEfU35t2XbG1F7aBGCPeYJAxh42sSRYNtfvxUuysc3hLeXHz5mqqTfrAEEFRF2xCvwRp",
  "key25": "3GrBSAbFxXZNBmQ4aSFn4ihFox1CLQEAk3wAQnF616RGcgBQegMsLgQQU9E1xLc1dq7Gwpw15d4dcfVGBYJ6KKnh",
  "key26": "qQuFgCUgBcAT7rfado4nuh3jHFFDa69j32U1Hcd5WbwQfkUUwJj2xCqSngUcH8CZKxeuh6Dp5dizivhn1rsWLET",
  "key27": "wsB5FUxiiKtHRK3J1H7wcvTZXQ8ExNbzEXBhUQmzQzFxUqnkAkULrKpSmdgroLFXSXFKB3mpFMWnGcsFfCMieut",
  "key28": "uPoDEMxo7BPuJSJqjV148DTfNYQR11wBqQ7TqML3ZCQu7DCbVSgDkzG6Et2XsGNRCjvwuhBH6bGj6qrJu1RXNf7",
  "key29": "51stFAvr3dszUZamQe2jXtTwJ7xBp2kWncVoHR6iLuWwEinrdfEGzJ55CvZAhUkPQALSvkRt5Xmmts7Vspwa5UmR",
  "key30": "2xSs7ALkKHUaW3eE2pdUikG4epDYNktj3d3b61LBykZsC5V6T5aZjJ1sKjnLQ61oCAY5WMemJcZUZ5PmA1Fr1sAX",
  "key31": "2RwUKtQswTU1DVkBhcx32sesozbtLX8xZ24novfG6tHcH8A8yw6mthWf9EHqodXfJmdNjfnF3Kj7aChxXbUCFuYQ",
  "key32": "5Sg8AUd4eVE6gVm5sVrn3TFYkeoDnxCfYBX3AtDcMBk9eavwcgjUSKErJse8Xbbk6jnPnaprByw4LTRVL1PzGrJo",
  "key33": "56Rk2CxK5NAXSLf64NFNdEJymYLvAKAMqD4rz5EXTuypaSjQ2gpGLZcAHumzxepDjmBcUZD978hrTx1dfCyFpNKm",
  "key34": "3t7NMhg42yERu6oWebqpi6VWvDdr9ysycbTWZ7oZfGhPZBXKD9k3He11woa5pG5LDrWsT7QJKuaw2QsYLSPmPnF2"
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
