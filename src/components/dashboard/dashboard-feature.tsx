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
    "P4qnCSoRTxuu6NwpUu9cXWqn4e5beACR9ydkEaoDmA3w4HaMPNoXBvmkYEeuGh6ugr8RvytkEBgNGoSVCcTBy3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34RSGqkW9NijEikpEyacCimdJU6s3ocDtTjkN6ooDRcgwfWe8mxLJ1EzGD1tbQ1BsXq1mfZbBprjZffBRV6jW9wT",
  "key1": "55s5igHgPyhn2okXccAppnwaTZcyEhqf5YskRfbg5xpCzuw872jJ73U72yDJnGQzgmiPd3WM8WLYk55kSvkXtzYV",
  "key2": "3aGSzSu9pBiMj989kU615e81FRitpDJ42gRZdJ9AsKTTmvUWdntGnCCbunMYoXNRAg4T789dwujog5rq2oiq4dnc",
  "key3": "j3xz78ua2Rq6woQMTwQccKm7ByqLmNkzMxE8ZCBqVrz7Zur2vzeocsNo4ra8NjBe57DqBM2gy1jKs6reVcTb2up",
  "key4": "5y72F4uNvWT3PrRMfbxkYoZZiP9mQA6xBRfsoQ7Skpxr7Rc2x1ompNhkJxMXR1bmygQK1qc5bfQgWURUhwP4z8C8",
  "key5": "3Qx8xMVw7VYZkfZxrQnbomwk8zHZmUWHWoY8WjNEqWDWxTWWJkc6bKg7LmpHMpXL3YxbbgthcNsce5jqD5Y3HUvs",
  "key6": "2h2wJZJnQ7ZhMbECSK7ZiMgFUp7xZtubrLN8GnvNG4SSsvyZ72i23AvrwBDhCRsBQ45w9RMjFcqM6PAirYZEmqPk",
  "key7": "3s4wQRKEWtXzgvyBroVcY1w6oXSemVw565kqeaQGgBjXWruPE1JzCNBpkoiGCJEkYRiVFi4gQ6k9SRUqsEthC2hf",
  "key8": "5dctQT1TqFY4AQRkMapvv5BNxW2Q4PkfoBgXKMrbXBQ3Dqn6r69u8fTgcBzh2BQVMxrDosYEn2tVefYgtA6DRUCf",
  "key9": "27i9hXdGa6RUToxhz4dUiahQTiYfk2A8A8Lc2vLnGaF8Kz2u3NvVj8Li7bTjSiT5SjCxW4VbhGFAzLGbNi4bvmbe",
  "key10": "q1zikEJdmsq8aZC22UhjJjNWVh8poymXp4FBK6oHep74j6ui3K4fPCamm6LSgzuhUQhJXyr8StXDkrYjdPPdvnk",
  "key11": "4wQp7cNKJWdLiVDr4Xoap4sP856VKKaSKFHwqtTGoDw1DdC78Xy5FRy93WYSpyohCNZXzzFiBsffYhyBboAzwYEW",
  "key12": "45Zy6Z4ymjXs4v2A4crxsxuQZQEnmnTY3xU5UJjg3ZyxfRa2YEJZXDZHaDwZddVjGjJ3gBqq5fip9oReFZgmbc86",
  "key13": "2rskVXuiRzsQuD6FY5z7Cx7Ln5rXVygPQB4oNsm6Hp7t1D7hqpoAT3KzXqePyhDzvReTkSnuNHLUCVhgunVgAfez",
  "key14": "5Wm2MFvxbv5qoR4XGfcgLxQBYgvEqGKbDP5Vouqcz4R9VMAJt368J4L1DWwGZjqvQfqQWpTmd4Nz1R4CJKMrRHBn",
  "key15": "2hLkBZ8HQ4XvXRVTMYQdvckPPMuDrNXYWYKu7HTjm8imtpfacYKJUkXTEUhsfDXAAFrraPMF8nTpGZA1q6NF4sd5",
  "key16": "5ASjjqfGxnMVQFngfgLiiav4taZw1ycqwrgjYKFwzTUHFDRdoB2NcL6LCPM1EoJsJChhq7gMq62EWXBTqQjKWfEm",
  "key17": "3KiU5oMLjJeXbJLwSqPT3q1K5dSm4xE35WDJo3gtysF5dnN1TSvsFzepAQJAgEeEVwWnyTAiYRDLBT1NijHG7i8",
  "key18": "5hykMfRXJ9rpVtRFKkrJGTFvDMgyxDQbkx2rXhVKCRzSfw2XLbUeQ8XhzVMp2CMVr6aPoPzYuz2a1JDp6UXUnuDv",
  "key19": "4ct9nPXGERT2SJnvj1nZek6eKe7fuS3DJKQFVE61m9JBKk7PykuKDvZc13hn3deQsRHQWi4iMoiCMpjXHAko9KWp",
  "key20": "5Bu3yHkxwDhJYgZf53yZekrzpUG6GoSChgpeZvDoFjRHR5gKVAC2B9x87SuPZDVjgHSe2t8BMVaFsUYp7RL7VWTV",
  "key21": "wugyg8YE5v9wvbc6nAvBFnd2kCW9XjZfTdUaSjEuarPqXiqF4gKFEw2J5nMtA64eY4CeAAhbSPUpj7zRFbwQjsf",
  "key22": "uVoYAKZu7WWjjQdbecrHxnPiJkvi4WBeyoq4fm5ViyTcML9fKcPUkZM5w1pxRiU3xZJVDtWqWDv5Nmb27VHZWZ1",
  "key23": "3eHpDyJ28Ff6jB9pD5N95LBMCUSD3jpHmZoozakAMvK1PXF8H3SabwWdCWCUStSvSDarPx2BMfJhxJP13S6aqHHx",
  "key24": "47B2TQ5wfj7EtQa8eoCzib9JpWqwaJpMK1iiPWXyuYgyW5UKfNHgW7dQM5jvrVuP7oh3VbbJxbVR2GvfPJV61n7X",
  "key25": "wPeNdFD8e6ngGqfqBVqT8UsmVs4Pxx5aBxAQzLPBv4FLb5WSYTLwXcxuzfwPgg2LHUbnNDpZi6BNXHnuJ1BHMeZ",
  "key26": "24WSUnhM8wBj11rHrkwKZD1G536VFYSDjRNNBRVkgPMrFi9gngvME8o1eSh1Eze1CmULYzdDDsm9hSbk3afnouB4",
  "key27": "2ABFMt4XiLGqVz2NCkrvyoPWeUdToMshZDptNDtPGc97H6sAoySoj1c7VkwHUkwuERQV3xSBfdTQ1iq3Vu2s6M9U",
  "key28": "5hPj47S4B31zooXA53nvJtxdxbjhEVLmQMJX494iwdDeTxv41nP2HUPwNZwyPNUVgH48bsRc3KNgt89F4MBEq76r",
  "key29": "3LuaHRT3DrUCxfdjxnu5xaFLv2GrNiRjd4HadRSauFbKS2NfhYAcmfufz3ZvVjwPdUrrCpDRm6dLPJDsw91wKmjr",
  "key30": "3Q5eXMbRE2HcrDYqigyG7HrmmNZ1dxmHMGkfveiCdF1joNQyxnDZKEto5VYVuQ91uidV5mvLeehhyUdnZzAU2oBt",
  "key31": "4Mvr8DQpKZxLyX3vZECP6chKajXfXzhkq5wgGCZTdsNrZfgkp7FLTXpYcvKWYGAXR4j7d6MYWM946WKcySnxmKjy",
  "key32": "5VemxqcRsaTKQ7kSPB1BuQXT17sqYBPui1ewgdmHUHWFapRsf8roUH5PRT2aNhxdnUSHm9T1fNT6dFLKeHFXNeR5",
  "key33": "4hCsZ4B6yzTDBzC5cTVgyGYabXD716tRZeRCaQrS8Rj9UN3MzJcwBaFWgUBELG8eH82BJUE6dMv2V8tqPdnPpa4R",
  "key34": "2eJ9p7YW82DiKZU6w92WPhLc6qy5jTbHpcoH8FfiFs9mhJbjoVNdoJLZBh9xyJhz7ndPPJRS6nq3VCDkSs4CoidJ",
  "key35": "3di4o7dFUqhVTBem8gR3kUVSrneJXxLgLZdCKVgtgto5v5RRhqDXkn5wkwKeqZP45QGm3pZxDXUXDMxbenp6rQ5C",
  "key36": "5M7nCQACA7eUHVvwfVZSmMjgdafHkaKTZdPGDMSftriUW94rS7pStdNu6WKrM8HFieA4cn8hiduX9NmLR2hA9vZL",
  "key37": "3tYnHFUP4fL6nEUbokzqws8zzaNNbetzDfbHZehCRAf57dEQyLX7ms5b9Rw2eUgv3SEDKW4HY1JVLU5ZomRR8Ft5",
  "key38": "46sQtLJ6qgsMn2UTSyemh2nyeidRreoZgUfFJchkrCwzojqGtKxQfUN3F1WNf98rk2MYJ9H7fKJ9uoh5t9uU6TT6"
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
