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
    "3w2nLtVobsuG4mPMnimN14WSLaxf8hGujN2UVrdrYSHzFFeU9T9AZWniqbwtKTyM6uav1eMSvHBeL7BNgLsgPfi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rGxQJydEegtnmGLYhSpwAqohatUUFF5K4mgNcEqHgtePawaPsrZwHCo1pj1pDogYzdaYK8Qt4gUQEDVbxQDWay",
  "key1": "4wTLqkhdDYQ6vgraJm4s3zM1Gu2Kni3egsnVy7jbJWsubgQqfi7T3Fs9nRC89CurHhxYoWS25nuYx6UEipNuok3w",
  "key2": "5RxbmfWt4RegycyEbx56VGFqyQKfG26LETjDELt9XktpRpTWVKH6Qw8CM1Le5nT4CJ5ZM21CwKu39VS9o4NBz1bT",
  "key3": "BKhxgnqLU9Ksv6vtu5EQYnYPpAtYoCHHP821r3YryoPni3s4oSPMVvGY5YyFRmZmB1NQeEmcgNd6U6m98MCBXEF",
  "key4": "4ijpFAouwz2C858FnMiPQc8qru4gzCVxWxb39oEekXN2hEe9PP6aWDLEvHrDw51zB5oHuB5577i4uWDaQLNTymp4",
  "key5": "5dozimbSCo7ToRJozW93BUMV6YMjukqew6p8nU7Mf7AoDcH3SJz6NC6B2FUkrse62wCs97WnLbwsSW1rMU8bfsVv",
  "key6": "41oq7HBjqbXwZDHXbXti6jcrHPRyPcL4zpRqTLkxsCT6whSjmiApAmum9eutBcVh1kBrMMsuPWK4wA1qn6MqXywd",
  "key7": "4YoSmRyFv69sfw8GjYC4nftjfBc2dqcipRS9Gqu2e5EKCKoM8aUVz9MhrpWxEkrk27QeKgFDhmJukWm3AiiPNjS5",
  "key8": "5bPh5UYcsSptBHBd1cf6GVK1pp6vuXMTaRMq2QZZLcf9h8PeQMr3TMythxzXfoYe5wEM67bJdBaN1JUGx3hPHcaZ",
  "key9": "5qDFe7UvHrfWJHWmPtreqLgnvF61GwNNS2u5NMrReMdBvuvHVpBEFN79UmorfYya6HaD6jGMTfgmjDYy41iBCdRm",
  "key10": "4WrzaPBRaWWfiA8HWKQds228Mh5ujx4YtdHJWxy6M7BjFzp8D9bGSpxi2xTeve5vBwK6yVYacboWg3xaB6FQaJsT",
  "key11": "3VvPYTikCVKr31Tt2RuK1raXuR7eo46GyEBsGpTfNtPFGdHBZBsHBZYj4hWG1PsLStmyF8CaKdm4mD3yaQHkm5Ty",
  "key12": "3HjkotmrnZC1B6qNAPG154iE3w5c4fdm7yKwCug7VZdmGT37xvFRuXDdHSPJtSMUfRCzgmCLsbnGdGmG2LJadBB",
  "key13": "2J91uMqstb9m9WHCmng2B6XaWzoaSmuKN7QN9NTQVZPrZhzhaFpSHZbA3yEcJrXc5cq9p2T8T8DTipMA9kZdho6d",
  "key14": "3Kea5izbW1sy1ZiArAdCZbURsGkLh9Ui5pEBEweUmLpvmzUd3eCQK6dR7kgjzdJMg86rEnE3NJrAx7KJhi3UK1XE",
  "key15": "4L8RoMjYJKm2769eVn4DoEKtY219R96M5AkzKt3poN874R6do3yadr9gRjvewnVdwALPq9tGZi3jon7aDM2tFAcM",
  "key16": "kE54aGmEKkvZjiVz9mvPzzMcRFBNxoD3Krw5sYzwsCJcZjmSkwsLMfQSSK7ZWsBZEj4cgUL96UbBGNvbNEduyp8",
  "key17": "iSJUWoTEXT26pkx4ZHkVB2q1MSMJSfv817Mc5CurKKWXVpeZ9a6Sy1LiLQZKPEBpYFbLrT3h3VzPppn4vYqWNBq",
  "key18": "NKagWFyE96XgWnu5n8LgoGYEu64T9M1zsFpkQf2Td4gdz1SVTx9SBUykXWks31g8uo8nrafiQqaqWzAmCvTb5kg",
  "key19": "4muut8d5CbxrxX9Cfsvj4TfPa355QZFYLiJSdUK3d7y7j4FueiAZfTeBVcofAmCsvqiC7vmhDZaVjNg8rcuyk4wW",
  "key20": "DdA2vjyyKmXWzK3xHsuUZhrUmC9PiQKD1uZR97ypNcg9SjUvTnAYY4UCXgBWpZMkKBibwAWeJRGsEvmhAPJ977M",
  "key21": "4jg6QCLWA75416CsjqzfqHhbpdL3Jbwwx1k3gTwyXMzsNFiNynChdgZ4dJmHs9bxbPGUyr3Pi3zVmpkNGSKyuSoJ",
  "key22": "2LfWX6uXDQdVnKRsjHbPkbJ9UBHQiXR9MiFDsG7MTTT1qXWZzUPEaFTxEPvmbGc2ybQbj4J46y7TeHJJvXHFzpVQ",
  "key23": "2WnZcDMfT9ushHoRhyNagHsonoFDeUMwCNtfDmmQ5xseKw7GY81z95611XMp2tFwC9kcxWXHyvhPGDcmABrAAFkE",
  "key24": "5kJ8QhSdoCdbcA7YRXjNyKGe5Ke6yu9thVJ2HNKqUrnZxfSQz5YHkgZJuPoUhZg71As3XfhKF82R1msUMtrJ5De6",
  "key25": "5BsrSJVUgxodtdwzXMKHocffMdLvVa6WLiq3Mgo1MMMvXDpLgtnAUKDcMYqGioKdY7rAEiQeJEaZbxLhZD4Fxusn",
  "key26": "59UTJGbhxEPWADwNsRhRZirZ2TcrH72o36VJgpK22FuuERzbW7pYVLg9ENgczUJukaPGz9R9YBMpwJmXWXdwFBN",
  "key27": "5aHTj36J742ehWxvurQZLyv5HGFvWQt8qBfj6R1t7ZEaqupSXKazncBGsbZ5EGbVRFD8AgWutb6PsvB78rw12sFo",
  "key28": "44gQirqRhGRFQaRc2NQQYvEmLSKR9awyobYUJXpVGew12D6MZKUchSMZSG7EGX99yi5G8F1QTgzgwuzUMzdxqAxv",
  "key29": "3KZri7AhkVKocBkAbyzRcwH82RtBYUeL8jVYayY8o6rEvjxFQq17LCCGNzKdiSTvEUoPpY3k66D2reMVjkSwK7oo",
  "key30": "5V7JBj6A31fXJp5FhtwHuZ8E1BeL9qpgRxULGTfB6LwHqnRrZMsVkc2YN4fUTXWMtd7fFGcAPrLmj4aiKmfUzuxG",
  "key31": "2XYhuez7jiz7C3U4LXL9XnUZe1ZiMuChDQD2MN23wrUCtsMuHjFWcCchqnWogvECB5Gec9o1ZYEKuM1Aies5dbs2",
  "key32": "5oRTTGdeR9y4BKoejvPNXRecj2ZEzogg1BA1frWTzFrDpbwn2P5D9t9YTmpdWByr89Gq7xTZABeLUPqHLozWKX1G",
  "key33": "32To6MPFRtAWjmsbNPVeR8B1KGFUwHWjXJt5K5faJQnHD9WHPBw33yEu5pyhYzeYFabK5FS59xw7yGHwPjnWUqBx",
  "key34": "2NPUG2QmSVqtyLipzR4gqRFG6VniYYWQDqkdwxjQda9uH582PVKSYjXUf8cWLbXkaPCQfZc828w7LRdrhpvxxtfh",
  "key35": "2MGaHAUbLFn6LUs6YDKnFdv8zYHcJ6NaxNabKEjWRcyAuq2PcQP2UvNSXG6bsriYxpn6ciLaaN8r5Y7WSTD37jvc",
  "key36": "29BXjq3jg316CcZYySNmPbQ4e2ciFhKhShRfS8v5yDPdWXaweeavckHrJ8wmfSdysmdWHwz3H7uQkDjJr64Na3Kc",
  "key37": "2xw1CvXtPeZPzWYew6KtMpMc2ekxE6j89WJJ6j6TSwxp341X4spKMMBL6d5GBsEiJEQP6SaiN6f2oHtvR4Yx1c2z",
  "key38": "3Cv6FBvfKYcuHB6L6XYUn3HTvLLqshMBw1LtUopwBtsd8mLW5jXZ6r23ExK3NaYqVKf5CuAj3sFy8oZbPZJJ1f6Z",
  "key39": "3BFv3fKB668mHui37VeFU7ZNWoHEoBEoPV4M1ubmrzM6FBGZcWrzvDBqCb33nsW7Quy6EaRdRPaT8v5BrqqhfUgq",
  "key40": "R5vmGitjBPoqM5czUU9fgbyMj4ALRL2Eq6Mke9wNdQSm3nonyTAT5iQSD9abPRkNvBmir3hsPFCUziX31DPCJAe",
  "key41": "3aapNC1hkUZj3RjpNRGtKmzBLdmkH6GxFUAyJEXoiZVKPKfPqqSf4Bm5VT84qVxYMv6bBSiUircFKmAQdv8Aq8oe",
  "key42": "5n4pvcngXUk2MgCsRHwwfQuZnVzUAAjwBnVrv2xZ2Kj1H8TKQkY4KTQoFiprML91kvXXtYVfFSJnUAPMYWNcLMkA",
  "key43": "1WCuK6qLFdxsshB8KBXudKj7bZRScUqDQDGbrq45Jh5sY1ut8ssAJcPnL2FzSytiXCPQfkrkLVLW5FUGgisx25D",
  "key44": "2zLvTPC6663vMGc12BeyCC84qn2gP62VdMZB3yNBZT5simnYD49rYMkZyVB4xD11qywZtypEU1gUNkBcA24Lfx7a"
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
