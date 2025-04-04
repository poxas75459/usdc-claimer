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
    "kQM2XRKW9sCRbDcQc5VuBbd8ES92VmnvUDpTc2yLctz8A8juLA3yRxTkJyN7NurJXHAb9YTE957XwxmNjyj89J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGdyUrusPjh1S35GrXakaDcjdMVa4t6efMMxy63Nt6aovUeGmrXE3y3Z85T2FbhhJkRR4Qpw5KnCkxo3VueKf5",
  "key1": "4m7N3WL1azMjTnozkUMZfp25E8Wk5vaX6czyNE5nWZfxvtgdZgiMvqf7xzdqaybAQcVAjui51SUj1Mh2GbmrqjYS",
  "key2": "61YsiRJR5KE57usFgVXAWmeWgJNWn2RCri3LXqWAtPLW3oy9ubRtNh7jsuk3ty4PisnAvUDR7EPYBYtE2YUm4dTx",
  "key3": "5Zn9ogXJivAZuo5zFbzF8WkMVPbqT6jb4UhPCY2p44QnV4DL4TfjaQcXFDJLFTCrEvW1rkPVVrU1sNpBskKkvxHU",
  "key4": "2DZ3SpwbnFmLPmn2KXdoUVUDDmMJx9SpFwQGh3YHe67Y8iNU7Kueasc7uGsbcypLZfENuqXsnVLcxT1Uc4kKVcQB",
  "key5": "5NbuJUJR4ykqLsi4u3HgLXWHdPFJGHG4XYHh2arKgUWkjgBsGC9ebS5kJj7BfmHrTL2RnLFpr1MMkE9RFwTL6CZt",
  "key6": "5mvFBNCMkchCdbT9QUto2GJXhgW2mUh44GYoJ29hr2NmhX6Yd82DdDreMSG1go74bdvexqMvNbgshpcB7BLVjArd",
  "key7": "5gCkUNz7BjV7WSa5LacgQHA6aTP6rvzdBEZqvmH1wVzPWDw1tX9sisPCJdzNgB7GfW9U1iLHFQCtrN6QVQmiR5wW",
  "key8": "5pDeKiPxKJtgG5HuuW3PqJ2a9pkJ1oMC2GcU1EmwJw17nQsuHp6E5cgALXEsgSPAMhiySDKponHhmBLTEnmaAdeg",
  "key9": "5B8kw2V24GU3sGkvykkdeDynrdg7pZT8jXE59r73c9jbC4c6kYDynA1F4v49nWxLoYpLeqhbwJDsHhxRrfaUqFzf",
  "key10": "4gBPAEzY1dgZzkbu4rosaF3qKxScTVhJRc3vGY79JTmzDGfpWGCUyYX51a3sHQ1XK8MTtFxzAsjzs2dSY9Em3L86",
  "key11": "5ZEi2eHwXWPggxDziiFfc4pkktP2CEA4fxkVSShhhRQ8GvyhNhWGEVGkncRdq84CEj4s1YRHgXn2MjJUhCLFJzGu",
  "key12": "zXFVPpHGxJDczw3ck6YYG7jGc6RZwuXDGr4cFoHaPA7SiqVbwu29fQaKmPfr49TyK837ZN7iCDc74jMv26DBjYE",
  "key13": "2iDrddjcjXf6Fao96ukyVFQQefB1AFQiEGy2oyL3vinnQwZFbUeuWtaadvcwNeEP8GaJTQUeVN6riSEVzHVwgEkc",
  "key14": "4VEupRUwbX8N6jRtahc2m5822sqysYTwkGMKhspa6QqmhKcfLbzHHWMg2KMpxrcQKKynXQfymwAESTdBLKNQt2Xh",
  "key15": "44szTE77E6xHADGoNRZHm7ZpMY6bosDSCkJBuF2Y55hKD3JCxLvGREbAYrUVNqcrdaAPpY6cJEUiux3r7XRZrjvj",
  "key16": "5E7TPSgBwcPr97Bx3BjnCBUZxA4rarjGZFGWQEXTiizGajDFJ9mDNRCnu7e3y7BsiBrnyHxrft37pAsJCQ5um99r",
  "key17": "2o2fCyiJKAhkXbtdvSZvVMH3hAXLEpG5HgBNGmdkrQeYpCcTWwWk6XQQz9au88QSYdx64ZHNg5knam9KJVUivHZJ",
  "key18": "5XCeGkb1TK1XiPoHhiYyjvx3RN3ays42YegFAK3fpC8X5yqm3xy49HtDq6hiStkj7EtRuoitZ5MqqeBaEiJ2CYaR",
  "key19": "4qpF2mZKMEWHjG1M1y57DBrtaHZ2Avd84BoRTpwCSYcs6cLdKA23NJ1JMtyXvauHR8Mi9CTzzxB483o2BjcjAk7y",
  "key20": "xkgBDcjTSDPUKKSh4rRFwb4pKexrNcgtkEzjtnkNRgegsKKHjt2v2abQdUjt4BSmd6xroqZRxBTsfYwg5iqp3FF",
  "key21": "rdefMSYkTcN5XY5KKVL7wMqDbhzCzQsnHFdBVJaKYLWbMWb9eauznZFpVc2KThpUXAofxej8xtaPg5UpKEdvn9x",
  "key22": "3uEydgfRC4tr2g7mw6a48ZAriHzkm8cM2agoipYzvERggWok52H8utTACog58ywpUwr8EdZzJZUa4GfEWMV7rjeD",
  "key23": "3Az2AHdkDykkV8SA4t8qEDs12uPveMtdvbjAwdTJtJTDQZ14CDZE6eHUs3PuJuQGDg4ehrHCB2xXgBAhY52Qhfaw",
  "key24": "4EADDtcMj8R4jhzBmjXpdKs6GZoywibc87AuT1QFduDqPfJXceu6uUagDmcGdvTktM229Hk9nwm2A3LTZucezesX",
  "key25": "5GEeRPtteeafaQs4wsLCU3D94ezqSWkmViGsPhvJUgJv95rXMa5vZTntXUKKEpe4EWMb38s8xmJwt6oT5eiefGBE",
  "key26": "XVu1PqZfJFAztd84ztsoKpmhvMxRpuep6SGCX3jA69V4DFdbXoXyKwFVoiQWUyx1JBD1k3PcFB5umB8KhhJ9tnQ",
  "key27": "43xr9k4mpYgHhFXQ89MBaPAaGN2aVPu2ZKNkPpGY8gZ2zHRQgwFB3tbW4vzSwJRQmQwCE16a9svzFj2oc3cBKjqZ",
  "key28": "4uw2D335MYWdSfGiVfsDQbn4nnWffaDmUojzLjLi5LA6VqxijAEj7D2A4JFZATkb9aSay5CjBE2g3PVcy1ydMe2y",
  "key29": "2ityWjHg3AeKQKiGwBojNvLqHR6joHjhQ9azwn1dekrYQcgM5sajUmbKcoR5xskFHeR1Dakrxf9mBYmbAcCWka6i",
  "key30": "41UzVpWKCUFqvhXLFz1CHTPF2geyNbViEGsbZJeN4EacTwBMHKDz859iuWXsQdDMS1TTFJXzbd2bZXebVXit1h5Y"
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
