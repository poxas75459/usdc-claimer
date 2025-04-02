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
    "2st6Dyd1WRYpcvbDZy61eyADkSTEqZvJnvkHxybk93qDYdXyNDojDB7c9gqTP7WyngKSngBfzaf9bQiGR6weuFGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eb7vQmGz1MGWS643yNkxbDbzZBkuCUU67faJgMRakS4ihTYNHEhzcLFujnVUfmYkBDqChn8eQJvdd4jAkf1qBTe",
  "key1": "2ZsSZwAx9gaWJrZFVqYMMpgcnMWF9j8B2vzPvcTpAY61cXRHPV3EM7NKfNGJMLf8WqDSUCpGtzqRAsL3g4Eq85Ag",
  "key2": "2BrNk89D8am16TdEhosME83yZ3JLKXHMt4ydAEcjKEQZNoZ3F5otSJHJXshK1MZX2R3QxuNQgfqnXQGAWB6n9FBV",
  "key3": "5pyBNRWFckz3mDVnks8g1KsHghmdHPFwMvoKD5YBS3MQEpPyJ5rKxXPxwaTc7hH8VHeto5TCy9SZUomWhSQRuGNZ",
  "key4": "2r6bAU9whNoHQdacRu82dUwEaW4Tg8wLwENFsqCa6sUDYPvMGNsV2rriv1NNHEnjRYr1F3XNRUmgZPByQBXCA5oa",
  "key5": "5q4GupkVbwK2HykYKUmQAgx7tDtd4QqSysjJBDYdEMyMFDinJafP7SvcUSJQmexA2BTfLAJGbvbPsHDGpmvhjHAa",
  "key6": "DVdrvbLJTU5c2Y8b1SazuYTHYtmeE1uRXh6WFdZ75fmwWEqHbYKLgZx7ST1bPv2rTTA3BzaCBkks7i1hiKoRa3e",
  "key7": "57w9miPWwmWuGDMbD6wkamDAtq2XM7q66XsSzCQdMQjy66J7wadXAu4apHHkcWT5EkY83P7FW5YUtfzdR1E9GLVX",
  "key8": "5Uf2ay13euw576mSZGT2FHZu44JwCPmXe5HHDWBvzhrBzBbb38eBgyQaHMPcFEgx9mRvqCC4VtAvi1xrUkHmXZDx",
  "key9": "DKyKpgzq2aDWHEwJBM4bc99wW8PfEfRH8ahZWfv9GGmfK7y2s1nCEvk4LMo3YoKXiXT8dPQvE2vyJN4VGGmBDzw",
  "key10": "4T4Ks7z4ewDTzM4g9oeCnjexH4CA57RJdGYX3bZkKM2T59AJSLpwLjUpmVpUuuekdsF3keThgZx2dETPfWZp9NnT",
  "key11": "NC2CS3r5gtGk6PgEGUkLE39gzjfNJt9eNukCeuvv4oZntKo5i8L7eq6yArpskmjf99oNCUCwc6PcpqHuwhHuXgs",
  "key12": "42D324LEqgNdUjLNncGbiF57GnbS1gQ9gSbuTiXUz3tixqmBeE6usZL3sjZ1MmmCndmDrPLA6pvwjRUJkHkLEoFC",
  "key13": "5nrvRBmMmoDyCeoUGAcvV9rpUHAirUCKrWvafURShSK1Rqrk3ucQpAFaMCA5daUSg4sSYZPCpZCwFwdcuw5sL4Jz",
  "key14": "2kWCDeyWswBqfgooo8jGfyTjAspKJcdTJaaK4BqTZViLXVz7YSXvasskfeMLgCkBeDZ1h8MiG7MvwYkq39TAx8pH",
  "key15": "2c4JvAebwDT467QCLE1HyX1cPwCrQ76muTamMkqoE1VfGaiCTQLAv716oBGR3GKz4dirMcPRbUgEs4Bgzj2kxF2q",
  "key16": "5rQEtcundN9KoTgsiYhFGyT6pyUXMPM9ySYkQ9bds7RNMiCcfDP54NLT4nAzCzyqnas88KtjDwcSYsZtX8kugAbB",
  "key17": "3Yohp7SPGUM3peJek8AHVwbP23f5z5AHtdkb9LhYx5eAU6Hchj8zG4pQXFavDg82cPaB4bR675UCbXkP4jekkBvR",
  "key18": "4wfpruw8nfDHsZRVvPmwRhvhBhDc2EjAFfgbQSoFrLBTz5cC6XniQaJE7Lm7Dfj7BeijGbDdQ7VUTcVvoqZVZCGJ",
  "key19": "2HeqziHWmkSuGWivSVK17f9JFLTYpo7dvuGRqL1dZGZyLWMoF1byR4Gg8YWQkrYfLXxKnctjbJj7fnvWR2ChNkAo",
  "key20": "4D2wEEyaJgs1PVpFV7KGr8faGqeiaCgZbcvK1jRp2mqN7YtVaCLusWDfBMQxJjWYJSEyrqcQQUPn89DNGrVLsH49",
  "key21": "2g1c61m4NBiUw267BGif6X6ffw2bAerYTrtDVMjfGoLaVBAwGbx9aW9kRfnsoYVZvhRhaTYKoS73dieA4ym7uTqr",
  "key22": "2764QVYQTnjEPZz1SmMWn23jJhQcs3MMZSdbbbcR8YX8uZ249GcicsThM7SEc8PtBjASi5SVYwuLfz2QyBwxck6K",
  "key23": "4bLhpbarn9rZnkeGsPzc5vVjGZZY47mDVRzaRq6BHqfGEMyMfo56F91Erjd7uMduRU6EFvgajKC7PEotKzqLpeB6",
  "key24": "3JjVWbQQnKkMH9P2LrNYRzrjNjqYGqhPfNpXEdruUajftcfQ4hJvjaZHjpz73KgWrmySFwnV3pGF3iTSZ1yauWtj",
  "key25": "5HBhmJRDdixZ1cvbX4x18yZz5FKWPqdkJ5w5ybe8LYRRhuQCiDwksh5wdQVsmQ7HrXBDBL6uVKJX1iuUPQL5MmGZ",
  "key26": "RLU6NsJZQWdBhHgfN1dm3Q4EQdM3s8EaF8Q2URddQepdhmtP4jLy4HMxhcZ7iXcFMbtqys9QhNSttRv5P9MXL2U",
  "key27": "3dZbYFm2eRecwcHeK6Ujmi81uNYaMDxwgen2kyzND3o4PAgGRoibCqeC6R4Q4Uo85X4rAWfS3VdE2xbmQDDJbVdu",
  "key28": "25TGw1nJ43pEYRHoJR57mcK4Fpa2tGd9s3DEPC2CgkmcbnGFsJu6aBzKnMagk33cmF2P7EKLfkBEMeL9GE2wVddG",
  "key29": "4eRnuUSGNNyLhahB4BMfjWpsVoSzhZU5dAmNaYJUe9jfAL4n82keWATF17v8UbzFUWBLbrZkiMnaNnr1PxoaPgR1",
  "key30": "5eFtGWc4ugFbkCHCYwBXV5dVh2PtZyAQQguR451X5BDgwPmbZ2C4vMHRayPeBBZLAc1DeQX8Cm86gbtAxDJr3Dki",
  "key31": "5CdeNhtwdwLHvUUj2Y4GjBba2FrGxZA6BZTdLYMkumELcWL3jCgBD7nshGEL6D1zvTcxHM4eTECWPqACJo68XtbH",
  "key32": "5tdv8RYnf1wZLvNReVfLHin8CkuFGBUHzi5gqRsC6iJwReTy631Nd27Bz5J1C8HYC2J97PMA1fB9qoFJoWBFyUKK",
  "key33": "a1H8BoWxWYWuhwYWgFU3qXojKvcfAxb5QoLBpriSZ3FGvF9a51axdMkdESs1MWLQXBX6KMZZH3WF3x2Eu9vZ5ki",
  "key34": "5LWENn2cfc4xWt3Wk7S9Qua4sNL9gCMJE9qJ4J7uqGG7gA8Q7TGy8PRfUbXySqNdtBRsQPMChSokaKfUdABueKL3",
  "key35": "5YjkySEuLmiMXf3HPZ1KdrqztCRY1RVUYgbeSkCeAbyXUbT25QkAuEfWoNrZgVMGokqr9BZiiBHsefc8NLm2zrK9",
  "key36": "2TEnkTdJkipGmizHcYKbfrJk7e3chLr5VWH95EteHZ3ANgfaZ6XGkfLA921K6sEmiMr9iRu4aMN5rZ1yYrrJ3dDz",
  "key37": "26o2twb4n2ecjDtfbrV412nwS87KQ3uxD2tE9UGudTJhSPAFsGDUacLH2V9KSPSUN4Hz5RpJkHFyWxQVTGiDVGjR",
  "key38": "3mWR79xg9Ynee654qUUcQZLrfJCRXXtUQtfHwn7ZvmxKZpQPeB15rx5xgj5wNxCScWewmx8BUfdKMWWPVMn4zsfg"
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
