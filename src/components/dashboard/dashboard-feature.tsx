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
    "65wB34bRDqeYqQZi1Vwz56btotb3dt68iUeXFVjNR5xhdMRgZLPtHFAT3QgaR5tdRnShyXuJoaJWtHXem6dFqiRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZYLCtS18XFU9iLHRdRqtejEFcwQYmq7nFcw76CXZjz133crz5GFBC9Ru2KRffJH9E6WXivdjXGzismqX6yv9aVv",
  "key1": "2KFdvuzERmCQb5PkBg2J1APoLFwH4PDxBdmFNXhY8Q8j2iqMzBaQGhZ1nBfkuRhdvVv5KnLiNAJTCNAjzRXtL1jS",
  "key2": "3aQccPYthFvvCSK2Qs4Tm2m2vpe1nN2G5CRz2xsfmT26APvqf1t1CGGAsdoPibnqkwafpJzh7TY4Ae3vXkTz9f8i",
  "key3": "sygqa9VtAp91HASBocsYmRYdgTiYMNFfQBkCke23uDzg87BMTyj2HQ9fiyx73GKL8wNqk7tDMgYrccpQ8Mn3rC5",
  "key4": "4SC7SvnR1rHfMnRy1PufXtfhYvBBaU7MaFNfrazXS3w5XpSoKp31PykxXnRZmABZiyCdYrnLmVr8b3kjR1h7dPMs",
  "key5": "2ax4oqFtXXHuaPDBusKTDCJeNjoj3k9obNSiyhyQSvfgQUuQRZ9GvHcSUUvhyw57qxQEx6wu7JJwGrYBRwXnTaAg",
  "key6": "4WESMGVfQUF75wrcJhfvMwo9UX9SF7QDS4cMfKcj3vGEnrSSFBrGYDPEV116nYBXx9rizySQZZ6DhDmsKE4UawAg",
  "key7": "3t5cociQiBU7JVjNLduzt28TyrMbbtvwa2VuxQL85EaGnQpR5UMVyHWBg3wcjnfuioToYFyQM8b4gZ9mPfERZUjh",
  "key8": "3aT42GLn8VQvngnnwAsEq1QiCSJkSa7rJruhRL69LK4beE5QkGaSkiAy94RZx7Skbr4fzA6Vsd6VCuC1eGYnoQnJ",
  "key9": "RStm2p2XxLy1mDrbuwnAoRj4nrYtotn5CQQffJu4AgmCy7U5kjUG4M3hfj68fmLtVCSiegV8RpzeNbLUEfV6ske",
  "key10": "4UFk33jHdFoMbpCGCbKTJ6DPCLfbJnWweQgRLi8CmnS9UVPzfxvNfRjJHDPFcDbMWTbgRxUG4MKjoUL6CQiZvjoS",
  "key11": "5n4QLd8Z4tUHwVovvbHL7RZFir148aUCG759T751FQs7ewis1Gcsg9sWkvWP5Uxwhy39XGX3puoYfmJs8WKG3cSx",
  "key12": "4oVV4Zk8jH7ZeXxak9DKSH1vNTmuaupAfzjJ3iEahChMTSQxYJ4QiGTf2k3j9Nj9HfepGnhBtrWSRTGXzVJzmzmv",
  "key13": "4GJbHnGoXQaH6LpMYogF8c8t2vBKG9vwcT28F9qUbA9C1qN2dkV4hC6q7cxp8NHWPxmW3dzaSRCKk3MdNgWQdTPJ",
  "key14": "3zc61Zjcv4eMDkAx4kcxdKuP3McbMcyKKhRQFfF7TYt2VRukrNARQnQrHFqSh3Ls8U65FaWhRyzHoZFMyRhTimev",
  "key15": "3H8TTVdtojzKuZyN5bWsTgTQoDtaHmh99bZzmK5tmbANgHN9bEAzwyUz8DvgoBiQ7qTFFBNMo7wSHAK4pqi6RhTU",
  "key16": "3tHhKGRLryfYRHJjsbsjANPR4J2aUNhj1KfAGJALLbsWi8ZrB4ZUKNkNcPQirQPpDSJ7Cmcki8TsH9tkEyRdgmrT",
  "key17": "P1V5fyEqxi74kmk7AB2EDCTbMXN6FiAmd6Lji2ycmkSuQHDvk8hXtZveoH9iLsAUjUFiUdAYExF722EJ8zzMGnU",
  "key18": "5bTotQcQdymzt1ZKARK6nWDoUJA87WLhMgU1YQkwcV4NNUu6gjZaBuQ7B94rsGDS5Kj5hEnkzxJyEmnAGCn8ozad",
  "key19": "42qncQ1vJtN9hFL8uk9GPC9afUYCc6UvamsDaFPLvfTNyg23Uhf6N5X8QP7zJLuuDbUEZfsSysKiJSWBWMGGXkgi",
  "key20": "55BHgtuqhpbnygjUrXgF1FMox64FjTV2fxp8MMipYuhaWPFmCXMe8Wg5AWiV4BRHo5bq47AAN34LUieBAZ4zPEsW",
  "key21": "3GrJKk6CytGJ7q6V84K4jMgYo51j1a7dBkNpi1RXbTZfPu7C3WpX8c7vaHjbyHYddKPNm9o3LASEzFmMB8h1Aywd",
  "key22": "28o1RqStRErHMpExtxAsdStMZfpoTzzs2LWYnBacQu3sXx5mTd9u9CbzkSsS3MZfyyKZ5MH1w1yzN6udUuDcJGpA",
  "key23": "4sc6f1nJ5hFHehyhMGLx9XWtqmbMGcPzYRxx89hroE6F4qznzpdx8sAq1N8CM6HRSi86VkzcDeHJtLiToahRTXcG",
  "key24": "3ybKyKQZYEEd7DSUEtj15VcsTbRizQo7PepqE6y9GirhijkLuNfQMer3F2cBK7uozVnS7ERjrNaL7ugT5HQeqAaG",
  "key25": "32S3WL7eUKpsdgmW58KUHrvxU5KcEu7CLrkoL8WRU2L6h5F7P7zxVvihMXHueYwnuUb33THPkoCqnarRbaUDvn2d",
  "key26": "2PRKMcuuAyGcg1HPFPyj3zXPnUY9ATw6U17Yws1oaKw8HPuUuvAc98S93GzoWD8ZCYBLjZYJCnHYdjH2LTQB1Sis",
  "key27": "5gPifQF6MGZAKrgERm9r1XGo4eVz9pQfoX5cGzY6rzGasPrc76SLuqqY24N8wi9DYZsdtW8ZMRRwKM18Unf1mYH1",
  "key28": "5ttNviMxkR1XWL7xBsKf39Erd8x9tswcDHFRhSq5rL6yn4JuNi65JctQB2PbS4c3kzXnWf6kjLgk9zBumjuTDcLD",
  "key29": "5oF9jScnFQNk8aVnuqJrw8RZyCFuCSnWqAVs6WuQue6SndbxfRAtCxHHZrRntxK43QTJp8CUjNfczHnsh3jWUM39",
  "key30": "4v1k3y1uQ9nymc5LXbKJvhkiF7SvuJuv9AKi92a6XmUyTs4MkiGP5Ly5FPY839vBGuUSowkCDGHew48cU4YrtV55",
  "key31": "4dzfyxF8YqbRw74jSponS4cyYfawkq3k8hoByaLLhJU9GTVNN3NHi4ifcah1WnPXkMqUuPYcgDGp2buhZhVpyaCK",
  "key32": "jvxgKxZAUYp6WKKX8vuguSGaNshcjSk2xZDfwsamywrUwEpnX9iFuVBhbL4ykuszB1EKRrKk2Sg7RjNSzFuGquP",
  "key33": "5bi5vqsJq99KP26hk7K3ujdVG8i1ZDhWyzoueMo7Scv3qp371jocySmnBrMAi1Ytdrx6ioC2ZqYZWdsiezeth9h3",
  "key34": "2Xg3mYhp7beBtRgG5pExdKKZLE1Kp8ziqTKHwF1ivda9NrKAbPJ1NWgkCFHaR34P2pnRd6RjbhmGB6xKUADnqik7",
  "key35": "2jPM8QbR5nHoWUKVLDdrnLryJW7BuCBoYjcarYouxmzpJSgVRug8fMYJih8WqB7mGYPFtQ1Svebbz2AvEnB6FiHT",
  "key36": "3t3zqjwcwNnUKJR2syT1Cni5UXx7Ej1iu4fjhPJZTtqW6MuK6ZVhftmH3kgX7dhuJhqSRQAyY8gaTwsk8BCcTLxN",
  "key37": "4bL5WfZABG8ntvwiZH4sMNSqaMjV9QknwYSSUzhoZmeJ8Uwvckd2pZZDY5H88epRUF5oA2zgRJXLbHwrZLDZ4oih",
  "key38": "vEzNwVACozerus9ej8XDoqQJCC9ThGVb72GUEuFMdzmCdT7aZidgEsCpiYipCkJ2YdWGWyHbQjv1htATC1SkG1G",
  "key39": "42HMYWcZrhvLWdKeDV1DVECUaQmwDxSU2WYwes7bm7KWnjhv2tuQhFp2dsHMUMV2vftnrXGESiFefgMkzqZ3DCkG",
  "key40": "4AZnbo4gHQmEAhKmB9HWfBEK5ZUjxZ4hEUJc3b7M5BZP8kGSsWvpUJTZPq3PvjmUpHPZJgUwoQ7Y45b5hTqbahBd",
  "key41": "629JZU9QXjTuzi9bu3s8XhDcG797fEHxYt1iknG2V9FxfGPCLBdwnG5xgnW69PGUAfjhFue6zQdbHi3K3MAzHSr",
  "key42": "2kq7Ev3JiKXSvWXL8P1R5nsBq5LMxnzViFA4dSRmJPLWkiL1TFKhzUSyzKP4R4xmo8bJrUSKeyuJxEgwSmgvuQhh",
  "key43": "2vrhf5g1KN9CBpwi7aqavYUBFiH2iygch9Wt6BMBiPMgdpyxy7DdpFCnquzWc7VVS53ecX8tTmDnM6RZmt8vrQN7",
  "key44": "5cJwuc6APBmKHVcvVJS54vbZtPs5K7YA2CvLfRyiHrhEn8zEFyLsXhi54FHw88qYmnrfkjNnCrJdi8u6mmTHkZEo",
  "key45": "4j6rxTjyohxum27hXvHTPmLqJF1pX9TUwxh4jsVYFQtsAp2VqZjqzMU9tFo4eYxcNmuoMrHC4yXZ51W52ewRBizP",
  "key46": "3TvVn61dW5AcVKW2roLmbmwDCkdkYxajg6ymsTCc7wv9aBuYX1GtT96m93dvsWmYhAJ5iYNgvN1cbW3akmUr3gkX",
  "key47": "3C8e6YzNLCieFE1ZhoMHLyxdumLeJAWGxcoSh8vABj3n7Sa5BVvRmPgFBGK4J1fcNAcHfqSRXLp448uDsztPQhvC",
  "key48": "3o8YzaYYee8imT1G72GaHhjWHNdbb9mWFmxgawpPN5svCPxPFpFzADeaQ2jhZvULhCumjcm7Y3BTM9a5agn1LL7A",
  "key49": "3SzKiVTAQ2sFPrAH7bD7YabdY6umo8edMaZCMExRadCd32rNi58oUjazuaW5uvfbKVuN9RBP1ReFkZybZn7wU5BP"
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
