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
    "2qkvdswPrAFH8oDFbRP8kEmC7GRJXiBhLKM7uwirXU6jrr3Yodg8wBa6UYuwJCQvadYsm1wpXKF2DV38pmdP8djY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1pidcm13ojyKCPHL51DVHiV8aPGYFLETs71hbnpBsaEzEiyBMXiWxmTfBjYmyp2MzPG5V8GLKrVXp8WogGnkfa",
  "key1": "2xQQJx8mqdgATvewxLcrLch7GPk2MQGaWLT8e3xQX7Wjxvk6swfpnW2x96j5cccrVaoGe1fTNVYa5Dw9NvZd1ZcX",
  "key2": "3N24EGo6wTUcaiku9aRydK6oifUndE84gq4cvPj7xHka92VTZVkbwJ7gWfGbqr8ngy9Dr9yyw7gYfAWWeuuBve5y",
  "key3": "2pXVfLojrEASjuA9Bhn6aEJ3MjRMAHbsodzwwRuPkm6p8iMQpgXVZwanXntFJGf9tG6q1Cc5RRMqdVYNDcgziUKM",
  "key4": "4E4gh1wiu7sLsLgr3xVqpNP4QBWMiNkBRA2uAmUYZaP7N8CyFbXGYFajHuGKzmV3FKniGDov2Lih1NviVBZoa7Ka",
  "key5": "45HCYL4eycCKZKrGovhinLzaoqYGsNuxi548PLbZHEi7SxHhYqg9hpjmftrZ29fdwQ1zRdqxJGt7H4YazBUFETsb",
  "key6": "229xVr6ucFEJTGUczKBG6VSwgD4Yy5K3xpvvQadJ5TthujiHnkiXGa17z7xR5XH3c5TpHffEiD5WwUsTPFs87B51",
  "key7": "5zyHLyfXbRM3cP2bGxgjLSLgJTjiUaQQCCq36KFzLuUvNCARv3xY6XmSTUR5WQQJqVj25WEXkCauLvDNpgRQFkzw",
  "key8": "jmpeSdwvCiWaUcD3JsDxVSfNBUnRDTirVMMSgFLsYHQCyZniTi4bNafNdWrtHfVyjrA32nFTf5Jm7Thdr4QBtHN",
  "key9": "4h4ePyUqUTDHTrFaBfxqEvCVQDqvD3mAhBtufnmUNXNpDojNeHUwXnN5v36AXYmnbYai9M4wHw4jNtPm4B9hTaFt",
  "key10": "ocudyRnY8HJJfv5vW4KTgtCvTqnM6zzRL3NZyWhpYQvv6EeAzNLK2guutA2C3umzR5aX1UbUBVLGpZoyejozwMB",
  "key11": "4TdKeENopXkmaK3UAPnyf8v9UeqoVrz91CLzKTWVTmhFoURcEFaiTvVCxipqC8DyU1Dwo74drxAkmwYpt7ao7cpD",
  "key12": "28K9Ja9mAbnyaZbXAHuyGzdXpecAKE6v2diYN6CuR1gYQbTauNQHE5ep2LNtuWjAmZFqfNGa3oejL6N4dMAPsTAw",
  "key13": "xRNFj3ZTYK9otrFSZuGoHJZoA9Jc9caW17rjuPdmRkJeLp5ocQVZT2qGohMnAb36v8YnDtmAJo1c3VVwNZcTmRQ",
  "key14": "4cNV3iJeYaugc1BRT6eNsVZgp8HFDgSYewvd9irDdnW485o6CsskoFTRNqf9o3HsEonbKKu4AE38vTSA7xJVx8mt",
  "key15": "4LFqCwWrZ3uCyzUBv4Vq7ubsuFTBh5jMc6gkD4gRMjcTVRXCM8kUjLykd8iuAvmzacZmj2ZaUT1obmA3i7g78d8U",
  "key16": "LdwkHY1uwaUqJVGeUzVRLHEaVBmcYbpBb7nBmEJAfoNuZEjaE5hXhDH8VjdCt3oqr9gzEranNm62F4CCVugypoA",
  "key17": "4q1BgNPRemLmsgM3oYYgwkn6ez8mffHRED5L5gjoJ9PNoCCXxp7jiT3ZWDjTpm8mKmRkjJ3e6QW61ziP3uJkS1gE",
  "key18": "LkxQJRSPh4BEPPggTamNARL98r2sTthtvRStvx8x6piYSyUMLUQfHLEbojBuHVREP3H31uvsuW5CNXtFMSEeNMm",
  "key19": "4qX5gz5FWRywKEu7B9YVHiEvKtrwp1qA29vDhWNzLteQFF91ZmrcDspHFp8jaseW6pa6Pijfe4KrTjndquH24ntR",
  "key20": "56wZiKNMmqwty3FyNYx7T5sQ3PQNApZveqWiSK5Qod3ZByftHUpQd1Lbsvkoevdy8DiDhqJo5KhCEURcSMa4HvUu",
  "key21": "46anGdQQNsPBtY7mCwgHvXftbuG3myLqWThgUkmaobnKKi5H4me2PMaXxNUSaC1nzNy7hSJKUEDXw2Joa2WbnAs9",
  "key22": "55dcRM8uzWN7MKS6FpfJ4ukkeMoWcqhSagtoUA2pxqieWa8VPFFzT1cL8wQGLpzX4ZoGQGqEiXvtRhzRiNAKYgXq",
  "key23": "67NMkwcq2HQyWViRxEUgX3iqbU8iBVeKgmZkdJMtBWju4wj8UxTU79Ujs3jZ7iB4ukJZPoKsT3eQiW3kxFzc4XeN",
  "key24": "4PAgpqSeL1jdkY5b41rSExkHLo5CNmuZgR5hXBQ9hrv9ZQBtAa47EQXz57zEgvSZGNotwNZTPc3hwoYeC8BDxFrg",
  "key25": "2pDuRfhYs7g6xu7YcqYxojvHHJDVMhCa7xwuXxE4mKt7d2hcJZ2FUyzarAQ7wUTCBWJ4CEv3rbs5jDDekLQdfTnb",
  "key26": "3Lt26rbFeJjKuzfeFxBnjftQbkyKTDmiDEpN1hqonT1m2jp6DyBBhjRADX8yXNPj4V5NBpU5okqaWY3SLzP2rY92",
  "key27": "5xRktLLGnSkdPZc6RdWfB3gUvZPHniJzpUBwvr6MZ2p8iWLUTtVvsn9y6zDT6Bz57Yq4m14KMwTS3zrnmCRJwBB7",
  "key28": "ghYwe38ZqTkrnW6282uKoWNmrqYaPVLgux7KPQjywZCwi29o43MJ5cMkTyH9ogusfTM2N1gdTq6EToH93nUjRho",
  "key29": "2Kamk1gTgfvbNz1QtAHmCbK8kay2WPu18BSDvgXQ8qfNbQ1LdNBmfXh435TQPZbWgc5G1be56ngYMc6hcJcQpziQ",
  "key30": "5iKCRSqvkhN73ag5UH6zKVEWh2RfBXWDmsaWCiV7wiwWG9e5E2hH47aFJqucjzPYoCDYXaNTBC4wcVod3GVnmsmQ",
  "key31": "4hLxGJVuG94z1s1oLNzFbsD9voyEyTjUS8V7ZDR5HcX4iH1AfQmiMqLw2oEysF7pha9dTTf7unQJYhxPEewiChbT",
  "key32": "2acHWobZnxmc4isnHiY3cd2t73RHts8MSpmsof7ypFkFfJ9e5LxTBLCWNCsMpVRK2QQrEXFYWLx4aVTUjJt6LLXX",
  "key33": "55jKSjBpBifiaC7y5RW4agfQa4FkxWXnuTAFMxp87KhMq383iUTAAnqojA2b6uwaH2ihYBrptE2YqDu7DZs1Yopu",
  "key34": "5uBSBxQLzxbVWbj6eq5q2FRf6SXzCse6cJg7Ergu1BbC4MCxbvVTZwHy2UaWsqUrnWvz9mJRkSwvD2FDaegGKyMn",
  "key35": "2FqQqisoHeSDLXQUCtDZVNPf2t2yPDYA8hKJRVHVgfQgJ2GMHM3xbCUX4phKE2mD3EyVQ9PTzueSrMiNBXQUVSa8",
  "key36": "5id7Ga4oRtBo7CtoAUBUKxu3TgFY5a5hyLRU65D5rGnqXJuGNffgFkESqmoH5w3fcdZEugLZgPo2djvxWdCTJx15"
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
