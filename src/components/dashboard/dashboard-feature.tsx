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
    "47eYaYAXVqYmDnU5ybaxoUbyb6G1wK9ABuBsCQsqxPJyLtHMoa3UVEAQfTF9qaJhRrLDXXLsGScYmohXq23wMPxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBqZmbepAXshp5fg2mwoUcHtmcvUGKz9bm9EoMBVGTpG6VX6SWKTyqkZ4C4v3RMXWdEPWZiksia5hAUfsvx9B1j",
  "key1": "88QxrxvbYQFeowDTeEwnvrF8dXTdLSzJKyFpZco5TGcv5K66y6jAmu9faGmpSMJkdiYnmshhRda7fYKqH28JxWd",
  "key2": "5SN88SPRo7gJVji4dvUDYNhbYRB8YNUUsdHqXqNz8KtDZZFgMD1jtVrdUpqo12VNzz3ANtGyYvCYxycRApY8unMZ",
  "key3": "3x2mrCAU38QnbMjZeH9i1T4gbNLoUTyXwpV1afB763r3q7hNhe5cKJ5UzYYN7YE6Wa2gZ6uZNRniiBjnTdnK2SGh",
  "key4": "bTfqSBaBpt13X5zcThVnoHf6xvmAqNkjbHw17curxhbvbFMtRWjN9KAM7CgzZaqDChvftX4B3iK3qtn8YJkjM83",
  "key5": "5K5H6bWu9F6Y65fBYKCMHg1e5oj1ehN9LnwT2qwf9Bv6y6cs9c1D1px39RdfXRy3cCaNnBDyHANos3QZuKDsYJ5S",
  "key6": "2cSLMjLzdtZETAu8yjRVokRqbUPaPAz76sYy9TZ9w8MnontzUX557cuf9BC4nQ11YDPwxtS7xrrnph4GTwTirEGY",
  "key7": "UAczKaqormGASeSECXUCkJwkGwTKHLr4zZ2Wfc1rEoemEngZnLRJWkK1M2iZk9x3VvM8Gncm7rV7HjBDnECbdKf",
  "key8": "FDA8kmf5L6uZS4ETxSVMv7EHzQVqoJxymgkENWp8dCAL5udqhsB6aHtyQ7LK7Bs66h1qU88MHM3eESvPWsMnXmi",
  "key9": "2Ljeu1zxPKovvthAvsm91fPGTCdwe8kjYAqk9U7p8XDdCeZsFUMDzwNLH628N7JT26RkCBpZ4EV4Wt2LuY11YCft",
  "key10": "Ric94TM3h6Xb1BTrYSUBbmhKawVUUqhpvch33rGranfm9VFXJM8MvSE8B61o1D7VGAypvxS9wt53quD5uf2crbK",
  "key11": "26xkpALeWRxtwQUVaDeXGxyJBaVpzn7rqn1dRaxk5T7dcaMLFK57oS5Rce6h7KSHhL16YMornmwdvGUShZzGB127",
  "key12": "5tz6jRcza7gQjf47iRC7xfo15kXG7cJyxPoj8Qk1fDWriAmGSruGRgNg13bikcNvdeJzaYy5vhtUPtqMadfWhQP1",
  "key13": "4kgBJ3Tw1hrzVmftNUqSaN6N33RyfmW1CsGvbypZ9omfdtXdCUTJGkHNRJVAsunnTQY5SoGrtzN36hLGtTzH8XBf",
  "key14": "67Nnmjv5gCPFcBBWFYEgEf3K734qVs4DFSoCcriZijNjDfE6vQMHrCMZ4zm1qmHyLXjSD4MPoZomVb5uZyfHWpr1",
  "key15": "5pih6Luxo7dwCBbGjwMxS76Sk4LPZaeLvR4SjS4abeCZp8gfK4SV42XxZkZQoEdiWdj1HC8c7LcA5Vo24zjZvU26",
  "key16": "ynK2E59H8KdgsPPjCVsf1H1qk4dSeNurBs4K28qsVrUwp2wwxpPMqC6bvEmLU19ZhSG8t19uoGHaMh9KJK386zs",
  "key17": "4pL9k4PMTtZPtfuwLcoGZAapPWTbL9Bmj7UoKu1Ae7Me2SbwXVFWZxzAVANNizbsu3EBX6e2BwMYtppXw6aAPWBK",
  "key18": "3eiGAFTW7S7q8FELg2118kihyXLBUQ7aDBsfbZfWEPmc2L6ob8i4tk8dE17wFmBVZ6jakKE5reqpUYE9hgb3YmbX",
  "key19": "2GArc93YW9H95775nsR2eFqfUgbKpWpMG7bWHc5YKroYHhNL1CQCC8T6U781LxvK3pUmGwzQjPoRyRMw5XpL86e5",
  "key20": "2Cx9nnDroh5wqc1AqpDo2vekKTc1osLLEKCtKaitypbnpMpBsewz3hB2RhFN4P5bU6WojPa8D1Dabf9pamt3UQVL",
  "key21": "LyCJq6vgXT268zr532jHSSNzi1ApAowycr6uPos3Kcf5s2krwmfRFHpwCM1w3Y2Gxc7GNud68r7zfsQgKfa7o6r",
  "key22": "2tXHCCyB8N7s3MDBeakn95E6Lv6nPCYSdXGqwVaTLp9zie1BW16hLnosusFbxtn9kVWZzwzcQrsHAG3XjomuXLNq",
  "key23": "4CKr9xUTuL4KPL1SmTcqKLVYHiLCt3Fb81UADHYCseuWvktbQvEJyeU3nZWHKTngHhHkBcpq8fUQryc2qnHLuLaa",
  "key24": "7ADajLXLnqCo83QQiZrZBbWd6UHgd9PozfzDNSxFU5tm833PDBGh3jut7QXx1bR4fgYFatGdRkPwGGAMNHjYtq8",
  "key25": "4F7romvY5W9EU6K9qWanh26bMSrWFmfvSJefPgJczvccBE4SNEYGYPWa2gRUkWHJPDnmeDLEzH5yEDydzSMHSy8Q",
  "key26": "91f4KHRdz23NhjVtWapWfYZtpvD9YTk8fsMxnE5jDWqE4XVvStQnAxq93gwXqXX5HtKrdP7JorXSqFdwibMVwGz",
  "key27": "45cJtwP68Nb2Mm7qwTW5FsWQvvnC7M9miXnn1YfuQG9BRpHrGpC1n5EUPzS4fAU5nQv1BMR2RpHKet7QuFQ8hiK5",
  "key28": "2zTF5b9bRMDuhWjuPGg4G1Q3ZRpovgDwxXH5PMNVYMvZrQDkbNC7eMmGf5KPUcee82LK5a1wTDwRT7M4ZaCNpn7E",
  "key29": "2mM11WeioZiWsERAnhBa7kNPKczgaaCdkxuZqihxFTYU8nLTDt2MmWewMcGxRZpX4biYXS9yNnXReTK5ZNiJy43R",
  "key30": "2U7bSvBZ514pXaeB2h3nhycLC9VB1RtHwyAr1RJN2tnNwyA2ahRwgZKDr1oNtzobquQF1rdX6UHABRadgthpyi26",
  "key31": "4coRxBXJFjSMNrvXhuxKEUg1En4hqpuCyofSUF2JdCQz23dgS3q8Fx1JfnrHTgKQZH6uDxRtJ1YiiTFNdtMY5rb5",
  "key32": "4HyJLgNTE9RLqtEJyrqb3s5qYHt3zpiYtPFJcbphzTwBPJnNAPgevFSs5NztVj7geznQCHCrwrfYhL66ZNdWNaqs",
  "key33": "276Pue3Hxbg599JxtT317z2iv26pVKRNSLui2qGNTDjz9zjS46pwPtm8tKrHLmvJoUJQh5JgqGxjwtU6RE6MMqe2",
  "key34": "5xXXeDq2HT1PvyLpj8cKptEiYfa43ZpxksZp8WyD2mot5GwYviyfnJpaf62wseCPh2nm7Db5hVM6YdRJXSnNSwaA",
  "key35": "47Km2LamsKFg9qbcKZV4cSf7ceG39vwT4HdfBopCEMoFrUWbxS43Migtrdqvnc1UHuVhFRiS4UKFf4qsCiyr8HYp",
  "key36": "5meWSiZPHmfKNoawZCK6Xv6gih21gTYhKsnMNQTvtSH2nnzyb3n3QLUK8MeKF6YMr1VZ8a8PFUJRv9z3dAcidpJW",
  "key37": "2LDL2sLka3aKJDDTdQxQ56m9hakq7oqphSZc6Zm1baxoorjqPFB7kHuptfxgqWajcvQNnkXhqPAzYQ6WFeWp7V9i",
  "key38": "4oyq9s8YBcoh9a36tgV8PsCVGR1PQVQEe9fL6Ct1oX64qL4926hsCQX424oG3sUqJqrgRbiQX2Z6XPM48gF8mKDL",
  "key39": "62ey99cFhGxXJFEnqajzyiHpE3mTDjLTSkZASC9NTRBdze52E7Kw17asBEfcp7TQqt3TzpLAaEcpiAgiv9YYWgHi",
  "key40": "2YCB7636szMmKMJoKFSNj2upytnj2ZsGUecCGaSdskYEqQXpR4usYfgEb53mSr8VhF9J6DSZ7a4xfVHh32YgKynb",
  "key41": "5g1y4sMEQVG1p879mTAEcQgnntYq4AtLaacq8rZUHVCzY8VdM2ZtHontLYc4k3dxpL6nLQNKszCg5vKFxj7PWb72",
  "key42": "4eEhjBhFh5GT6zpuCHzVNEsuysM4bCphZrg5xEExqiMQcHyVPWrj4k5MiHNxmhrZkEBoBzJ85Rm92E9t4bcKmQ7K",
  "key43": "32JqeFUSD2bj8za1cGat3HS96XE73jHPHEKmNQHcUZNvfahL5crfZiRiKdDW6zvk8Ahs7RomHZyCMyiU7RtimYXd",
  "key44": "5Rpz1GgumMspLAbVVxSp3TD5kKVwXuDFG7jLRkyfqgTUFQpnihXYiKB3i8A9iSFZDDH627h8MGQbmEcTv9TTS7Xv",
  "key45": "2rpBKHKhoG45vVfqBWtRc4yY2HJmzca1hvcN1NbCi94Q38y57JxSSjK1hP2iQgDthDcEXNXMXL3NTMD1EYn68Tvb",
  "key46": "58qVEA7C1WZHL2tDVKtVHLLWHYhrV8Fy4fZAd4CigVDoobY23AKwzKPxVc3VpZue9Li8fPM7TRxTey529QMJewSM",
  "key47": "2Wi63zSL3pEjDYfXaG5fmJrCfdaEAyaQ2y9KQJXcgngAkDnXdTHQNH6m6dcbW13GMMsZw4q64Z3HZFu9EkzQkdvH",
  "key48": "ik1zQrDJn5XeMsDPSbd5pzJjgyxnx4NXAADWtx8PCzsJe3TGuLapxNe5ykbeoPvDddStKxd9bRY71rhrk1KD3AM",
  "key49": "tsa96wuD5NeZPyPqo6yLwYwMrp227xB791JPsvZ5sPccFwxLLHth6UxUfAPdrS56TwxWr8DF36P1qFvZ89rf5D7"
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
