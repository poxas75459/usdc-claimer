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
    "3FcMJFsazMTTN4wBAq8PJchD1FVzQsGvQ5JfobVPKrBJXQ3NttEwGkcBYuSbuZS4PFZStzdjEiTfqECjD8b7FBAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sysq3JMpYBt8oS1pKZ31mfKHjs6Py6rAXcuL1sNTu3FA9WkFm1Qz7oopyRA5wZ7DA7CFNk1yapua4txnkvfLLp9",
  "key1": "7f2uqiissqhAN6Yt8wJd9yGVFzHXJKkEw4tCS1eFtCWnLM7ptDz1HRqCY8PoCoPJDBnpHsSadrXKQTMmx1qJfo6",
  "key2": "5iaYeEZUSLvnUJegfXHYBxpdyXTmHSnknRsHJgEfszeZsHhJqcd1Vs9fnW4xpM8b3RSTCvxRv28oWshybYgxHCuZ",
  "key3": "5kxgHhnjrD6iRyx8LgpTrcxdCrQsoD9ar9prKVkQ4Hm867F61Y1s5T337SCWGLFhzf27hCSkfWrnHi8zskwKcKk5",
  "key4": "35jurrhzWVANAfiUdZnEWq8Ck87UjPWcVht5TUarTsi6yEE5MvUXFgmfBvmWrw2J2BQ2AKCErV4PYJx5Nwee2G4X",
  "key5": "5gzfmuCuA7tPTwrvDcUuJ3GUKJzS1AG91ZWmREpz8xghjEabfAZCUW4AxoXxdHTie67DpG9pfJpnShUkdhPiRjrf",
  "key6": "2HU1QYhFnm9W6LqdaP1ZLv8WatQhFgGvu9igYGua7dRCZy7TsgFZJv6L9fVdMB3jkUAyq7vqp9ezohZT6f4ds6P5",
  "key7": "2iuscvAxxdrdenkPCQd8YJmk5niugrpet62rGCfCeH9EuEwZ38dQYJyTEMB7EKURaBn9gyumpF4qXJ6hiuhD67fh",
  "key8": "5WVhC4d2V8XquFGihtjjesMA2tWLNmH1hnXu1yG7gBfdKSUFLgQwMQZw9KCVX89kmqDMdyXRGY4eaEGR6Hdm7QCk",
  "key9": "4a68wyZr47Sy1CtA2iseogheniSyh9Cd68Nkx3NBxspM4zeQsuDA257ig5JDXrzMCez6fKdGRLw2E2DBF8zvMRA9",
  "key10": "YNWaxfuVWkyThR2RRsQb2s6jHqHwdJY9kkzjbkMW7b1kcZ43mJet2LXMt5R1NDijKZmf6PrzHvkSY5kpxK3QxZi",
  "key11": "3Uc6K7fuw59nYpHsKBPUrs8KR5BYrqjM3scoJ6CrxbCAjyaLT5fD914v8QfYkThGRTze6kXPdDDEaNfuf7MhD4eD",
  "key12": "5fgbUVDTPGuyBCrFzHCebgqQdsNnexh8BPvYa76HcS555eGEyV1ZdD36dTPf9KNMuWg1byzYvM9B22Uq5bQm445a",
  "key13": "4Sj4pRKnbxwVnKvMaMQB7iD4ccJANDR7pJ5i5BGoapv5GK9tALew8ogeSyMgmpBrGw9NZDu8Q4wwg99raMqGbV6S",
  "key14": "3X8m6QxyjA7qz42m3HNacT5F3gm3joq4yzaiN1GGR8a9JPYkQ4eoAex37g28ctw4n96NcLYCev8Chsk7Kiv3xa35",
  "key15": "3y2dUAhBNibC8LsbqjM1WgnGwB1bExtGh4kK7eqB4xasPYTMmPtM9Utkochq1ivdi9sL9bh9UZpvMhaahBog6PE1",
  "key16": "2UHhVDeadthYenZScwPqyCujSj7ex1GYU7bbwdWdfvnFsNct51rC8Fpqi1174JFDzFvev5jY9HHmebuizNKT5AUW",
  "key17": "3XxKhfDb6aWiq8WeTvyG9ZSgWoK94KiRYttB31BYbs8s7fMFscw6tbwCWcq3Sxi9skqYcN82prHqMShFTRP2hBii",
  "key18": "nFTjgDdTuDx5QwaZFbW3PbKKTdNqzX7qHTa32vSQUU1DouDZvhr83vmQuDSS82FkuHqKYuGb7VkBFZi1YEsQBa5",
  "key19": "3AJhfsbR32jdEKBzdqCUFcdEHaMWFPN6n3mBcdZAPi88gsM1Y3rhzthfjHFaz623fjxxCZZ1LCdfd3g7Gwirb7br",
  "key20": "3Cyo5ULZ9TSA2zfUjgyisL85hnAyB5pVLGoTqGTv7oshGo3sPmGVXMKQy4hGtiPCmJqJM7x3YDDUc7pNNqUKGdFr",
  "key21": "5QcXtUP3cdnkrVEWvaFgfV9y9Bkmr424jKP3FXRrcu1Hs2pnJH8tEs5bjpDkhd9VfXioiG1PxJHUzJeu5TLKfMYe",
  "key22": "2F1MgLBQCqAVj3bFYU37ctHnvV8ho8hmRQGT2k2hcvaAEjBod5uxJHPGxL3Y8uFZnHyJ1EujY8kJw3PYSHH1cNx6",
  "key23": "2csae8LKSUsmuGWRGUzLUVv8Fw6ztm245ocPqMSyU2dgYbTBkjpbShqh87mY3rRiBhWQpJVnogSf9ixNW8K53hwp",
  "key24": "3CbKE49bmfrbH7AMUufe5tTHntEzrS2DBLTuZHke8xtLEXqHu5EPMZ9a8kCPWA4mR7GgSJjiiw2t7M8EeRnrTJPN",
  "key25": "3iu3FPoQfkLBSKPTYiqmG9ZShS4z7LSBbcrDgy1GsvHS8gxUs8NT6wiwuZq9xJSWtq9K1gdz8iCFh1nUJBjnCQ1F"
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
