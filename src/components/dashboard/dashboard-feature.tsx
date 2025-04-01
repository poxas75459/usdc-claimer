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
    "5FvKahZpHG739xsgLvaZpX7jXQo5W362WuTPi5UzeNWFaSqCeM9z4n3YhyouKNhwoM6Cr7RMNBktGHm5xc122GT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izFpW6DiMSJTymPZvM7xfy8m8fgDAfMR1VJYGdTZtLLQaWR4VBvv1xc3pQHP74yn4SthdZbveLH3zAQx3j5vRC7",
  "key1": "5caYT7mjBDCE5VvPoBnJv7REev7nAbL9ijoQsCrNNzzz7U6hS1q4CT26AkAvEBQc6b6k7sqDNaHUCCEHK7KCdZsm",
  "key2": "64h8b2G7LU8VkHVABUv6hhkR8ZQW8jhNBBxwXN93Dqq44uQY7aKtACgBdz1vf5MySwhayfQvpEZmCTViwYwhduSi",
  "key3": "3gqhQi3BGxrAfWKr5BYRkvp1SUHm6hNSqxgamdvDrT2SKLmSuSQ226Yi1Wc12jNagzjQphQYSp1KEzNiHXBUgRs9",
  "key4": "5uAWq79eg26Gitt3uADtFi6KbUm8AGNJM2WbPfszh8UC2nWcTSx27T4GF6oTxes7TP1FBwbBwsnDrybSvVdEDdzs",
  "key5": "2es6ZRpz7PwotQseLLXmjMxTAF2dmF8AgtW2yhWxmxzEUyxoydnHGtwQ1uUUpmwUaric9QhxibbTKiJfphdpYGfR",
  "key6": "2ky4dajZtLLq5oKiUfp3sGHWsBnGB6suqN6HEXPr9spQ26M6tXjNmpL9NkamJiLBFqCeRorTKmFPGz8L2KBnnzyy",
  "key7": "4U47nNTUmTBrxgYJ3yG38P79kokCMyficBPkSHqWr8uJMeBbKHYh6pdHnAKmLAAReRrz376jhJifSSJAEjBnKdmJ",
  "key8": "2egBWEF6kRJGFhm2XBNtJMRb5QPTU1189Ap5TCxQ3s7HFxo2Yq1jR7RrHuT29CPobt4o6K9TjZigaFGKMVYbvaZm",
  "key9": "YMB2ww2W78yeKKDvNtTVVJhaJy7xTFg5EaUp5bUxUve8Zjigaos4SMybJDZH3SJxuiZouGu7qNwT3Q1RAs5xnPv",
  "key10": "mis6bisoTbiHKzXymi5Kmp6NWzkUKk4S3MWDeqRxHekj5xMfPPAXLyQewpuJ18oHJRRDEVqhci4aMjVCjGNBZn6",
  "key11": "3jNaAPXwxPDAKqe8mSdYcKsgAEAGYybtX2cVdzidLfuS2EcynVyEAGbdqJr9D6LUuxQrsDNRoai4bkFefA4rm74W",
  "key12": "2voNvTojjYvqdZpAZzLamtmWw4TGM2YwHcsja1hMxcbENFWWLmBJWVopodNuaMPxpxsM23TGjT7rga7vPiimeDi5",
  "key13": "37uBvCqTKx5361B48kVFoy2qF4HmfR6SxLWyt9ri1bPgmJVajX75AKpju58ytQK2uzLDUGRxBYqv32ipHRzGRCCK",
  "key14": "3hrWhZ7JhHz987vj1KXe68yaFBSvrEAEg3csJAhNbpS4mW3k1CUugADHqT9iqbDDae1iH3kRyHQZa1GBqC3vQQrr",
  "key15": "5QXNQX5cuTvvMpKZbS6GWzHuP8FiSpHVBesCW5gebcvWrDYH26EUfVW2MgnHEkrJofhZXWsgY6st5MGgTprZQsni",
  "key16": "3ewcSetRU9PCV3nwULLYTH6m8i8HNX1KzoWo3UpatAPCjNcJnrJsTtmRH2VihNUHAZugwJupREPcAybHoiqMEq3r",
  "key17": "4RkZpD6edKLD13psQ46PFtJfqSw6syqPZvFFQoDy1iijw2TS1eeFhSE5RbTRwEM5JRaZeGyCRB5AfycvoScpLSwi",
  "key18": "c3KyL8QC6FRPuXi16ZNXkJ4gKfDrAmhpZhQWR6afH9nGHobhA2a4pYS5yjoZr8jZnGz9PAfFgKF57nq7wTXZqS3",
  "key19": "iRVKGcDUbQwpsz7qSSxK2BhXy63akRcieXuqZHUjaZoSoGMjkvrPHoazhdWSvz4Dq7weT1w65wb2NeycoNi9W2s",
  "key20": "3gHmUadQ7BVsS8tAUdi4GyEdemaJzazC16trdM6MHryb38suxNPSbnokbXo5gxAmaW1EX25e8Sk8JWSxpKJV6f9i",
  "key21": "2bdYZikH2ifT3s8bQUdvcgbZ6qA1254Q8nLV6GmJcQkin51JCuDCJsktu92hjeLQzDxreSjkC79p4kuVX9CA1Uvj",
  "key22": "57UgpNypgxK92YYdRsvePSbavcM5FW3VSQMVjZ4KY2GyvehMvT1hA7mCgyHCvaxrwp1fw32jS5HHwKRKgNDAYwKL",
  "key23": "HFwarPjquwTMwEBmPPi5eBKB5xhX2jK2JnxNQW9msi7LqqERqbnNdda5G3Pe3RHDfvHBT7oWUz1CtkkTTeW4mbE",
  "key24": "4WaXYQvhUo1uoYkZUoyUZFGygEws9BXq41t7KM33DpBrR2Ych658FwWXicWbFvwGV3D2KNetyW5F7etyeLKAgM3y",
  "key25": "5Dj56czd8X7JvKi2nTnNtBvfjfKN775JgZoyzMLeMBhf6buR1q5V6qDEbHj1pwU382tWsBnYEdJyvcEtuEvu3qZ6",
  "key26": "3YZxV4GHUY7dJNoxmP8nhcGxGL4BX9BqA7hUKpy6GuY5aFotjCsoAEMtvh9GMjdFw4N3MKXob1AgcghhynnUvsGv",
  "key27": "vH1eYLXbLdhbpJ5YB5uQYx5qE3HeUpoiFmRjHvuavrk4wcH21AVzfAevHtQyfvM6wW43a2fqeRtA5uMfG7YZm7k",
  "key28": "5ogTQMzzzpNrUbzRVp88Qxnygn9v9RHiy3EGaiycjWEPFHf8wyJD7gJ8JBUorLbX1bPjaMQPePq6F3T38SxeuVre",
  "key29": "4wBEtwR6g5yDwcDcFrRd9xHWcSzCnsaUzDWFoNBSucL5z3KA7xE4b16qa9NW7yUTtUyEx6ga277hDuLGtJAcUGfW",
  "key30": "3ZN2UGvj1PmF3iFn9ntUsqumNNrtxqrfuhQcgQDFQmG7ruTLCb8Rb49KizEbb1DhFKQPkZ1fcE5u6SL9qjERJkM4"
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
