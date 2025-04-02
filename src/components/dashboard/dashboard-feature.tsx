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
    "4S6U3tK8CQYqoQXpLyj8SLsbsxAdirw1oEGQpFxp9KBGhrCQEwuN2syEsmXzFcTPdomzP1uHt431c42fvNa5vyRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQCPVcWkesCcYNWbCcoFo3d1xYEY8hr1snjjXAv8kfjLzmzf11xEUUJRE1jReqHdDBcpc7ujPdvwKg6fHBgsM78",
  "key1": "51iwZXDDDw8gCMb1z4PdDmqCwGgWJrqdRyqrY8YDcHq6EJwQBLV4qHJr71aM7ibk3pPb65edgnjhQWjCs2vmV7Av",
  "key2": "3TG5qa24wmHWs46PzAq5php3hp3fC18pCBPBBfrAZfBAyppNtxJdNNPrUaqgHzRf6JZFRMqJ13dbVThSZRv24WZ",
  "key3": "GqwVGSRyQVjiwhH7Zr8ibbAfSajNu21JHQftFFE7M8JHUaSmM39oJ9UKzPCqqAByF9TuyYxpPRYhpH18edLT9ER",
  "key4": "3BFhG8Xb85v9QzajTCbJtdhNd1JBPSqiRHhUSWDCo5xrPw6wb9CbHfB8YF3JTQwDMjNgyNCPi3mKZBuwz8U2LoRE",
  "key5": "4oAcf6BJ6PnFVHW5SxEMjLz1G7sM54pkQ3NFFQyzzPckSiWYjSEo5BocUrh4rioEZNjqZL6hcBudz9YzCNGfs2pU",
  "key6": "2oE7v3c39m6bdj9WqT2bkC3SRypr9FfbBbAJyoDpH4Pv4jdAZbgtq28aoGqe8aZiB1iGvsAU14wFcPXGUFNKzjNJ",
  "key7": "5dYsHLQmUp94NLnZvE23aVJVS835CZkqibvYqr7UEBSCNJodh7j699ZqjAX6AApVnFZjMxj3c8q8phqRaS7XN743",
  "key8": "53Bagvtg8RfF7DP3ARTEapCfPBwv5XNnVRFJQy3m142tWbGmW5L1Cm7k8U1NAf29tBsKHYZkRyigJZyS76S1oU8j",
  "key9": "5H9EixAL8yH3rMCms56Y4B7TZFjihxVz9RkqdZpWD1BAPrC5HRyT6NKW3QmKriSRnQP3qj2ojVpiNS2kVrFzGWfz",
  "key10": "u43xMNgj6GxP5V9zGAWM4vgDwCmntN57dastBH3z4Ku7V8g1JQ4Wm7QouZhRg8qQMv86rmo8pJeCQKQZjvyAasj",
  "key11": "3WDu3SgfSwnduXeEvz1DzPuh3uBZ6sYr7TPj8nQ9RELvdwkdo1CGKvx6X5PVwosJnqsJqqTZ2LzgvW2nW44zAUDm",
  "key12": "2vRhQT6drZzhmrhCLDdMwu9o1rqPr9i5kqoTzroaRAM8Bzu8e8Sri7yb9vnq5h9khXXbBNRZCKRvW2XXZmy4fH1w",
  "key13": "9KAhD6RkWLEKTiV1PzxX6qKGZ75QN4Pg85tbkdzwHSSJHRxMXeba5NWDe27n3mh9LAqYSQyY1XfkQh1v7oevm6S",
  "key14": "5kqjUMd8FnAMR1UwmhsRxkDbu9QWeHjACwW9FRmxmD7RoCgGHm4P7qdHYZattDu9qmY7dboJDpM6vPVM9k7iG5TL",
  "key15": "34Tt8YQpPGBVENk9B2yQ2JAM9o3rh8QUZ8aciZDEQ8LHFrRWNokh3jcLEaGynLjK2hZoxWsEyjhAw8C5BscprH4h",
  "key16": "46jKfcDWG21Xkp9ChTML6wK13mGPdxw9B5nbXujS2vSaJ9XSxMU7pDzcQwvspTng5Xk4cCXctrUAfRrjzHn9aSKN",
  "key17": "245Y8URMeXW4Wse5F58FYiLsAbJ8YFEzskdcpTHEQUMCraYwn2gzssqGcEiWnPeQjnzbny6JKUBqcoAgd5E5MUvj",
  "key18": "9W8aN6RnPvcBcDTas1m7jEhG2GskgZP3z7rbavZiChW7VDgb9QFPKkgUSKTKXbzq4GXmgd4Y3NmMazSeU8ogAWv",
  "key19": "2jxKFTMjXA6RvFiUxghK7BxnpjDoBpZ2UTRccFxvSjzUctWiSwgdjXz7V4JGw8s8T38DyqyCA1ciSRqTP14S5iJ4",
  "key20": "34ahRJGk6pdQbpxUFY81Wd9q5VzcsktKrACjVCbgyo2bkCSQZqHcjJMD3KRtvscXXyw2ZEbW1BSR4QTAG5QsKVTV",
  "key21": "5BWjiJ8RKDEUNuoMJRmQAu8JJYdxaemNySTgAG4RxyChF7Kv9o8aPSpQRWwc8pU2WJTxkLu76gebCX4gySnjvAPR",
  "key22": "4sVpjTW5CyaCAV9Mg35r1Aeb4SYGYgxhyHdYUTz4yUVbFW2Xgbr1m2fBPBQ5F1kBhpQDjcgFfNjKgGWAXH2yG1Va",
  "key23": "2YhGwfnu9w5PtumNfPYzxe3usRDRFTVbv7FyAMFS4F4ZMfQXwqJjoyxT6i2K4iQUhV3txWcKmnpdruPastJxhuKW",
  "key24": "5EmKYETLcLDcaUwoXyE5Z71wkXSAcnsZ7Gequ5eavmbcjnhMCkgiLeMTWfjGoBwxB8nRzg6RfwYyUsUHZo4CYUTo",
  "key25": "2mBk9F7fRvkQcUEW3mZ8cTP5icFMNxu2ASxAMMUvsH98b6x5hQwwGAZ7Dik5RU7xbnKnL6PZUqe2HAytuLCGDrjF",
  "key26": "472NN66UkZ95bno5s8WJ6u1ga91j1FmRhiqKwCtexEeXdcmWcMa1BaqLToFKve8YzgbCUBsCbxBsvfdJBm5CBgc6",
  "key27": "2jJar1L1eUhYvcinFDKdJRVfapUmZbmPpUgKQRiSreHdoAXT7hGYPut5e51ZzR71AvhpsC8BnVRk46soAMkWS8w",
  "key28": "3SWEMJqVj6jGZQMhk1T5W4o5iAJ1P2xuo7KEq2WQu27pmx4Ff7wrcJZ4w4A5M68Rnth8DBS3fRhzDGtYkDvwTSTF",
  "key29": "r6fjQfQW5LDRZQZXnWzk3J1KV4Q55rLFkMX5VqdVx95LWfyNpsbDkxyGh1DoW3bHTcDTuH8WUCZqGTqfa8witbF",
  "key30": "LAugGcXtJCtjSM9ZzufA9nQCVswzS9WnhXq8QSAt276xuPSrNcd4N4dh1zqBxX9wUiAfA2ZR4Vv7z3iS3w9SoG8"
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
