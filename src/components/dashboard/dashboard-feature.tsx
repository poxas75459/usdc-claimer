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
    "67mDVd9q9EYLAoojj5JhUFjpvZsNziyHBeY1eyiLMxvF33r8m9UqgbSpZVrXdqP536whee3grpWh64PfJHrYkktv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsUdgHUZi6KHATgmEYaVQXxBRpYHLuCyERaETJrjnrLNREosnDv3QbSnMQqmXYgg1bLEcaryJLZEWHktjQ7D3sS",
  "key1": "4NeLykNXrjqjpKX3fDgkrXQRW2UHUjUzvbd9KJ1HtYUSgD8LjLc6bTeE6sp9FokKM8sj57LfTJCRJLwCcDHaoP53",
  "key2": "33zfw3SiycPirqErPgsNuY7jzR3vk5VzxNSndWr1dEF1ncSf6Syg4UWp7TgARPjMSwU6CusZyt4UdD9HeG3rPwm3",
  "key3": "4yQZX5RMaEbMN3fnue32sdSTMqRFwnSDSjeF82TzfBC4mryfNd2ZddKBBswpbhRK74HaQU4nTT3HvGVMkQxUBZGt",
  "key4": "2kFeZ7C5fDMxvC8Ep4ueM9pUsFNRNn7W9qcxfmuPLrmYhoJaNxPVia2LEWFcfe51QHBhn3QpRYuPWYY8w2UTDi8q",
  "key5": "3xQSxeHRmDJiBHr493s3ckNWLVQiExnDoLYyWo6v3y2YNAWY6XmcLiP4vQukCqgPocghWTAj9xfqhM1MHjtNTwnR",
  "key6": "2KWzakVMB2tEJ4fsBUknuY6CN8U4BnTT1NgjWBHDJ9ME5RhTRxzzZ5HL6AArVWDYF9zLBqF1gv1EGqVfzMDhWe27",
  "key7": "5W4MbAhiuekAL3bAzJjQJAD9rZhN7YqTsa2f8BoXtXHdHqx4JXiqDVqfs4Me8KekUyk4swMt37GJsSZUTFTmqktw",
  "key8": "4DP2mqQE3qKQMELeJTrAv17dPWQ8Wea4wPwffjp7wAqGcTDc1s23Yw4mxhvcGUCgfJySQwcpKsSw2amjP2jbeadu",
  "key9": "4WqS9Cb9bmApkzqdCjELKKzGJpSxjMFooC48KNg1vnq4YEVYreqoV4sLb9uLmvstcT93xvjjMnSgim2ModvXn7CQ",
  "key10": "5HEmJM7uoGci91XR9ze4ppHLYsZ3wiww9K2JWyrGbUWhGjQ2g95LWHcMgtAWu9CF9RXN3oS96Fcy7TBJKvyUZR3P",
  "key11": "54z36hBAC9EG9vJ464Bp52kewqH6FSzf8PgNzAbHf9Y4RBfZyo3cT2aDWQEyhMTj7ynaTX9XKQLvRXaPmLkGaeNr",
  "key12": "4J9pcoc9axqAQDhJMQHfPA7KVUCTKceqhzmXSY6Ggi2vBKq5xZbV85NBMjfGKBaen5jYo8uxN2NSm4xR7q76RytZ",
  "key13": "v8ZHkJhCWNDyzYqFphcyZeAWH1U8msXw1Yiij33SNPqRZ4AFqByzVQBV19vUfFmSYsqWbtKU7t8uiThPnJNnPVU",
  "key14": "3qk7hobYYmauXjTip3eoyhHNd9n6Cc9NWyznMRDi5ivS9BLa49mZustumSKqht6t5eddcaaWnF2svGKUqv25mdLL",
  "key15": "39Vb2QHWKKa4y8LWLpHjGy2J3LA3YxGKiMU52AMxUN1NBYUMpvQjsXhMBwV4n4VghYtkJiUHxrHss8QiFRcBJ8Kn",
  "key16": "21QrgVsPQQbsvJRiGiyr1Tmj8cJAnUqrx5QXASKfYN1vwXW7hcz5Wyp358Tv9s6WzDVsm2f6nxdmuWCrucEsJhsP",
  "key17": "3qQ73nCLYuGGWRE1Zho9wZKeqc4z341XCModokACJacbZpZK7vH8ceb5wPTbhadrKUoBXogdxTuNckzSKUeYMGgr",
  "key18": "kk1z2KqouK1NgxTeozRW177dv3Z7WnhYndC9vvCVTWEhxcrZLNaBEE14j5taXpn27ipdwKWx2mjm5V1RTwvBDkh",
  "key19": "2oVWjz7Gi6GDeodj1RW9thRE2amEE5nQH2LfY669V6ecmenBTvmjih94vSuqzVHjV4AGQoH1Sh9YkWDgybuCyy1i",
  "key20": "4GqrueiHxUspEvqSSsaAEtMwP5rS1bqW8Va7dYVkMqzf2CvyYknzzK114xgEa8CmrbzG59FCb3nBkkWJu8zUSCEF",
  "key21": "aP3CbLqwRkwZuQa9LaJJsKBrN5E3PncmTXCnbcQTcT2Gy1pRcqqJYoXSC7JXzC9tTUrT9E8uYw1hKLzfgF3hYB4",
  "key22": "5QcH2SoQk3oE7XgJmeX5CpEdxxQ8GTVd6k8n5f1wD8n7cH3NgpzpQiJHGJ84usLmSLLR1kRyMuv2DLEenhzpsp57",
  "key23": "425EAQVJ8VbVjrgYuH3hfyDqCZSXJmjMPhYrLyUp2Ao3WqMYwJguXfDS9FnXxviE2WMou3J6kinmb22iiHEaJ79a",
  "key24": "5KGTmAnNmaKQ5Vy9tjVzgKK9GypWdi3uqLjFM3WN1wg4JUUzUd6kM6q6jutacqaYEQEWsuctuhEez4CHYVX8h9GC",
  "key25": "AaUkQxG8QgznjTsBQpfvVZHivnZA4nX3md29UUGV1L9L4AR2VyPP7FhQUwReGsmwqvnD3zWcTfMdGqLeyZdn4Cb"
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
