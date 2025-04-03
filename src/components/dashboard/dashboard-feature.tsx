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
    "3R7ySoqo9uxyLSfmEWvtZXDdeij7ihH5YFfE9DtsAVBLSRxDXgmGDxK1CcauyL4ZWncFdLVwJq6vRTviWqhxrrYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pxAnwQRufpDVsrCQ6aZDMoCQsN1hK8GDW8o6zq1VMuC5GUX5GW8sAxpqrXUx5rKwGSydtTQXaJ47xt2oesQFjJf",
  "key1": "2taH9jZYnkYvJohqfzcN6TsfQJKLYYsqrJJ9iVL6VXQ3tCHDYyUpDW3NSyDQJKLcSKZgBgQ9inhUbEMU4k5PYV85",
  "key2": "rtZgkSyo291FaqiRnVedcrNQgt5446KqNYuXJuVkomjkmWrCdaH7vBnvisk9mJ1ADZpsWw6u6Y3sU4mXJtqrTHH",
  "key3": "535g6NXEGncoD8HuqMv9bmB1bYkWXb33foP2Nr1RBac1Uoxs1ApFNaEBYN3jdyZ7QbLYYdzHbwTEPoEwPres42Bg",
  "key4": "5h28g7vZ6bWD1EAqeBtdFwZTPFvXtY4yq7i1vXcebDxQZ3WEsLwy7Cr1uzPEroiwJ2S2Yh5GHjYJzFRvQXFCY97T",
  "key5": "45tKAiax3xA6vyd7Rztkxs7qTaEFgRYK3KEB2HoYqus2MQpSgsoyNveJYK3uysx7BuQvsd58AYsJo98hQtoGmz2n",
  "key6": "K3fvBUMyZ79mZ9tndGNJtbrdcKRG53Aiz51GPKHDLTQACkZujGcUntCLkFcoS5tERTBmcgJ5y8wRz44GDFx4KTa",
  "key7": "2WXPugvfU7oSy9bNyX4vVbx2Hb5mT5z4xWvHcmh7iULEq31vJZM7QQapK4UAUQ8RYod4iKdkY96FjiaPJCv2Xme",
  "key8": "55ykYVT9nGunAmHgVqcgefZJcnJcQRmJyW6Fdmqqr8JnUTLZ9xbeJehcmWwJ37FMdzWAAwHY3zV7LoPDFrpf23AL",
  "key9": "3apK3fj5XeTV32A5m83jkCeBid4TDnFgW7ecSCNvbu9cpeojv1nK67fMk2nnHVp4wP6kj7JrjgZ9SQJ8LfVF36S5",
  "key10": "4r5WtCgGKh3gXDqChYWJH7N5oezzXoY2shzAY9L9P9SDFcftGywQdf4DNd5Rv9HXVX98jy56t6eTo4BBtxn69DY9",
  "key11": "Dsv29TJUf8gPKvsZRxzFCwLTdzkZLG2ZEos9FyyKfCzugUrGbEocs9MojGBGmivNBiAxeoVsnbtHBe7HHAfjMY3",
  "key12": "23kP93JhWudkrhiNw2vBoMKyGhv5nF5STxQXHbhbAB2KLELZNXSCAcWGYKcve7Ba1cwGXFnxvqZEqMgudkjnCxWz",
  "key13": "5wEcAtFKneSgoZjhAqf9kPkTdD6HXghyB6CDGFVwe8twGsBhp52AdbuiGrxUceAZNCk9gsMCZi7cQNHkxaXiYLM5",
  "key14": "5AwEmeG2ds2z8smQbTzVsXzRPzaabdgsZbjXtj2uKDfETdL3TLtNyDCv2hWzVMuZqvBZc1EUHvxyxwhZAUzqL9N2",
  "key15": "4zQ4ZxjqmqvShpGghZd3X7M7vnTMFt8AQRxTuPa2C3YWpVDYZsZgDwLy9rZjj48LcEGbQXxdHDhYBj9pyXwXNpfR",
  "key16": "2BLjy7VndteHQ9KFBtRM6QbAPtSmNiXVqsj8GGfLmeqkNnUg2NKkhP3DXg55Ez9YEXq2ND2dR7SRF5187rjHBDKE",
  "key17": "31PHXq4pRASHkigkDfiSE6evs3Ln2NexsMkcY4Dn7siGbDjH6hKPkvxQ9U3euxPj9rkfrkEv7rd8E5J6woXPdv3P",
  "key18": "5Xt6bTnzwp5mDByXoTu7zRJhXgkTr6ta6wMyhoa8ZMdjCcRVos8rJBf9B3Pvrh2GQ6giyfKLpxq8vdky6ee1hE9S",
  "key19": "5CAVENYaDGcoTajM848yL3XSLw4CSSR93RfVmXYvRnah3ckw2Eyriw3Vu9VWyXAX9MQa2ktgFbGkbgzizjwcQDnv",
  "key20": "w2u3mtbwzSWpwtAAfYVvL8pNCC43baYUMHNtGkzrSASmS759CDyuvqffMUccZLmQ2eUDQ6hEodMc5zxzXvMD1E7",
  "key21": "3L9fgyk6uW6onrdCMSXWeg1mQszeUhqyf88eYgibhoSMdgTSdaDtYr7y4ccNvtNcLiGvWYvymHRdacqEmfPkBmZb",
  "key22": "sNe5CUaDLsdniuyRx2UnpamsCySZxcwZrVJEkqy7yUYRqXRPP9RNG7zCuJRAbCd53tmV3yww2NCL5uDp8ZGFzta",
  "key23": "3MhfTJ5vRhJ7DbpSM6Nh8L6PDJKmNCvax51Y6p1fmVB1GFpxCEBzRg55mEJzM7YG1SurKPhCFodqx7KmfrDnvUTp",
  "key24": "ENmRAfc42Jz4tCJ9HiEMk9FSw6m2W4s16W6LH25eCXw4SLHk1GkBf111CMBHaDeybEp3UoK31vne3rbzcUMBid2",
  "key25": "5ZfwxH3xrZkshrkaJ54zQQpCQagT3hBfRYVCTjssPJdkDhgUxjHAJjTUtqegZgy7nprEASrts7cXcM2tdrDZ2zC",
  "key26": "4Y1tSyFxrsmb1tfH1Hrcx3XU3Qoz9NF5LPkXKW9n2i9MCVFe8vjHWEZ6DJAZYyHoKDWPgR1npcEr2iq9EPu1wTYE",
  "key27": "3rRG2udLKZAj2NjdvyvaT8JViTsvUkqRrcZtkax7wWXW2rNwE2tJNnYwbFtdZqDdHRxUzRkhH2XFDi1gN68y56W8",
  "key28": "4w3DvW8B1Mx4vz2qrGCwz4Dq23jWPhSt47gnDrssC8NFP6TMZyeYE8nHsJDsYM8L5Dm2KN4592BHMouLchHoX86x",
  "key29": "54dAQAGHRmcDqhh3AYnXe6e46LiqSjRimnsqq1aXQkg4FsBjSZwfmVSxvnZTT13qumAc6yzpgWERhwqDtRHECfXB",
  "key30": "52QR1esM4GR1VuGaEEm5UivsgEzyrRSS5Y67ScEm356aczmUbcrccMivrsxfowDDHjPGtJe44EvuiD3j1QQSa2gx",
  "key31": "2tPcJZ623UVERsvg1SQFkgYFNKy46vadXZe8tzhsiNycwdyidb8ptVwTm8Hnwt2PyQMVVZY8eAbtXJJU9a8FNWLU",
  "key32": "4wydcf2jS8bXsG1ZoTskboAxZ6Y5kPz1tWun7Uw61qZ6xa3TFqPK5gBwhQkZVy1JnWKVVpXtqgCwL2h7vP57Juw8",
  "key33": "4jo59vAgGyAa2mY4A61Y11TsUTo6yLZoebvetCGKdQ4afCeeJEqqCHmUpvL1j1bG6EoPrp6Zz3p4s7PZQ9bex4dj",
  "key34": "mJbVctg4n66nW3xjTn4nxucEjsGoUbfSt9Qa22Gvng2igsEuCkeASgPcEsakog6vC4aym1Cxh8wjPtNxipEVjv1",
  "key35": "MotyxXfTBCjFu3eE77N5a7BFcpVAKt4rsKjcRbjiz8wfcmu1wfm19AaXPKF4vVzZzrD9xctwgqNeQHA939g2quH",
  "key36": "4chm1oemPVNdBRW8qE9jdpjqyS3fosVSkdjQ658ePRGHrRsqTkx1NunycdsKFczutvLvhQd2Nsywj4yQJuwZ7YyG",
  "key37": "3wvVswfo37uHdnadCEdcsRNhwarkcDSBbCrfigfX8uj7ch19Tcd3yVrNsy3kr5Jbzkz1tMWK3mAfaBMSSBLXu1kB",
  "key38": "3hiNTYf6WKUTXoAXrUhzi8JnAr5fyPc3HnEyiKu98ViCubMWkti49ctBo4gH6G2rvEK4qfkTAYtjBB8BSvaoSYV2",
  "key39": "3nGcUt8ph35GaEGRwBGjPfdoDdexft5HYVk7P3Rwv9ZLTrMWkyWVutieUhT9yEt6quTfLF7mykLJ3rWmxxqfnj45",
  "key40": "5RQfyFkWY85KGEevrqTcWFvGB7AgnJqWYCGda8bDt8ctp2PiK3eWdiYsyRuUhLK4eJLy13kLZDncmt9VgUnJk55Y",
  "key41": "UjSBkGvyKgrJQzzzEyGDLLJZFMaoV7LhzJ1vZhKd6vKm9cYpS57WuQqRoyMambvMfLZ686vPowjMswGeoJKqPHi",
  "key42": "ah9xPnBsGD5nkgd8jPEy4Y213bdSdTqpdBHjDARq3ZQmWsV4ZZ8jijYchEZ8REk8PHyUNM2DSLPuPtQchXZnTVM",
  "key43": "5hZxBshpaZqCJrKwMvt378LbFfFtjnJzwDdnyHPN4Q5BJY4x2en7LGs7ehCPgu1cBqUm4PUtzGUHFbUgX1xGSXMU",
  "key44": "BMaLpXuCWdSqeTGFcf2BPUTgBLETd4acqXuEmYSfk4XsmPRfZpUd2MUyvWEwpDaavJH4u4q4MqLfh55WLmSDN6Z",
  "key45": "4F9NKTwTkEpQNRjHLTVHAuoR1C2mXeBaVL2gkbPyYYmpYaw3T1C3861tdxvaCALxby13pS54cv7jdU7gBx4Rp8Wu",
  "key46": "sC6qjMSaqztKcC3VG12C85rhWznkxcTsGshBpyKzREgbtuxRBGWTSxDdwJEh3gQcRG2zfHmA6NgwdJYMh21ZDkm",
  "key47": "2y1wPr5oum4BXASVHdRcuP3G5jp9zrKowyr6tCswzBmskCpFjnj9KYDqA5YCrHubFCuDABYVDqM8vACUVjaUX77h",
  "key48": "3SRNrS5XG9qnRRkZPc7PJrdjFxZdv1m8dV2nVkmeNQEThkzBFxVjNLo2sV3jc5Z8DQ8CLVXZ1LDjHruQvuUSB2CF",
  "key49": "bQEa9XuqRv5jghnRt8cdtUqzyKgBtYtn1xD4fQRBNnYwxxR3mo4YpnYHkmvTX1XhPiWHmXVRLJyNHbKBiNvKYVb"
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
