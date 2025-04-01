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
    "2uqqWrr8mdAuv4BrJ41XB2qw1J2fBbhFGwEB9a1KzqWNWSphHTkEFtXDa8WLYKbS1bnxU71x4XkKqwWm4SoZ76Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lg6Fztw3Rv598QR4vyAu9Bm8A3Mhb85Y1i5bFzFTLuC1zRL1nRv3c39j5L4Yq89zmnUp4kUxydDb5Rah5jMu7f3",
  "key1": "4PwYc14wZQitWr7tPR5wrFwDhArStrEWRz6FPTUWPQZxXY9GMjiv59mDUXS5D4tox9tM3GDw7cFMxGJLtNYa7Ssg",
  "key2": "3eSABAKUzBPfiK1P3UVwtszD83cMXQB3PYbSifE4uWWHbKx4mTqwntnedWWdvcvz1QqUPx4zZquZdQzv8xaCDr1f",
  "key3": "4431ubvL13jMEwXxv6wmf152eCxm9iMHXhbvHJbrajP5ZpAAbUcup9NZw9Z2inwFBPPFKpG671AovajzX15tKuos",
  "key4": "3ims6UziSvappt9GnWBqteEFqKEMK7kP6ruwMGVieFrbfo1QnSVW596MBpukxDGxxqvCVSBTJmoDDfEJPbuu9H4C",
  "key5": "3gSgZ7Pq8tMh1ymGUAZHu86JnN3VXjxrKQLjFgSzfsU3rNpwewBpMbSL9nA8fxTFVfCJMQcWDmwahuCYVkzoMsoT",
  "key6": "31LY54nrKQEQke8bf1LrvEGMuSrtxKoKf3JokXvHpNVYMgtXawfKz66FmnVjukZyWnBMQVNyfLa3o1MMyWFjY2hQ",
  "key7": "3gEQv2dvgMTEPYnmCvJxF7tAiJU4dhNrZicvfz5iPYM4UeGsFSmuqsxAYih881g84cvrYy9gmoCXZXkz55XbZchp",
  "key8": "4fvnUyjFzn8mpCAmsVoghyXmfWKAB2GiTa2jw6YW63yFgTkwHQDQ1tCZiNWbNjrqpnXopgeCLMfphymqWAmNA7f2",
  "key9": "4NnDK5B8mjxjfK7NLMrMcg1G2wiL3GdcjdyDFQRfdNPjg1ThogMAfw4HywxFrVaUcnDQr7TRxaY5mJd6SSiZ88oc",
  "key10": "nt3kUx8fxKGvhSgXFvBCsAT3YvhVawsMPG4xfweWpYpAauYdoNqLusPmfgT68HXtPYPp95NoU3QPZA5okx2sg94",
  "key11": "22Uk3WBdEneoZeV9nPkG5XjK1w3XJMu6GgAdZVa13HaAzcVr2xei6vxNAGJWoj9xa6FftLuTeo7m83XZ5b8zfnoU",
  "key12": "3XFrkatxKeeMWxL8JKDGM9W6tmxtr8fRX68t9CjrD29wojJZSDhrKUENm3EHfGQGMNtwQzQe1XtLarU7LEE5QFpX",
  "key13": "59WWt2GJidLTSDqFhXqWJLTQ2eK4Uhmp83TZoJQ7rL21bLJNgAxwMpMeYP4vHZ8q1twzGWd5ZhjdAxgjvQxXEbqL",
  "key14": "4Tk7efsnkYMPbYnNzu349LYsWic5oHvT9hxbGB6zuvVwC48kZXCnjgX7rEZFJCccEq4Cjkk7ozRsveHWbArgLYpE",
  "key15": "3zJQtoksAzyVweJ7q48c7oZwW98DWi8rpaGSEBqX5xNJVMLQPmbcqfFr3zox4aUzAMLM9QpYMBNmPZbvbdLn9Fz4",
  "key16": "5FiyZwkqLyZccm5eg6VvjUspCncB1XLM6YGqggV2c73WCBGmaFgYsRYMGnKd44VTp8J4bMRE3mAFF9bxm9XtTmAC",
  "key17": "48LNJQWKYBG7wsdR5t1pBoyn2hfxtLvuA79qeBwtYjcJo6R6ef4PPeaHWtvGEbqyxywbGPtEVK1hBYj8fgFURJJ7",
  "key18": "tL1gnVpuMr48T59V7LdTiFFNNMhMMuLf5V3YdymjFzf7hbV49VJ1SEhfzeRZDN7ZtUUE31wXR7zwPWubrKfRqNf",
  "key19": "2x5pYz5JbTEeDSd3tYsHLTFnWQ88v8KsghwmNn1pWL8uUAdKV3Bp7D7NorPwUjGviGFBjBRiP7tJyGXxkES84dJD",
  "key20": "5jjnTGcN74DELy1Z6rYpdE4VZ4TDyZxhm9awmyskfVdhq6SCzvkjuPm9s4b6JGmcaWkxPdMisENLSS2wa8hHphbN",
  "key21": "4cpbMzC4Bk8CqwdUZjnAX9ftESwNV1QPQdHF9GaVi6c4ktpYRZqAsmypfSzoHjBEc76fuSahrdvLHsY1GA7U2DWD",
  "key22": "2WqswybG39kTLrfWQs2EmLr42FGn6fpDcgjzYxvGFmJbH7mFeqvVekvDkQRSiVN5axunGZnh7Fz6VT3GPkPFsnA3",
  "key23": "2R8QBpRnHD6i2QnAYhbazphTt2p3PJ5hNT1wH9SUWCRGGpZ8dswqZL2Lbdri3qtspwPgeknm1v5Wkg6EVWgL1Bfi",
  "key24": "54xV5pdiYFt9zZqhsRsz6DFzoC82ZgGNKMeM7f3QMcLuYuRi21Y9WxDJ3hrPCRTSEMGDkY2K5Hc3zb6z8u3LMKz2",
  "key25": "kFnSzqMJh4aoU7z18UvGmHGVNxdbP2C8TEU3qvNte7mtrFihoZ4R36HcrQWq3gsxdgrE11s68szc7NZMkEWGXJ2",
  "key26": "342N2wzmVqrJTXxh3G2WHe8jNTkC91kYS6WaSUT164a9kU1yU94cdf5zvRAkiQCw9dkEX4fHn8TCJ4fAY19vqfah",
  "key27": "3Twqhqqx2yvJuk544W3uZ5FexiFFyBvjV2kKgRkuSM42Sh2zYKuc1SVVwgfMYgCTiWFt4WXhnEyPGUKUFP6u9CxX",
  "key28": "2V727tiK6kchaNi6yRR3D5kj6jqYNX3fmqYxpSvE76ZCaGxHpwbNU5PfArDgazs7t5V62q49qfR5K3H1wyf4TRXd",
  "key29": "4mG6BrMw5nsNak6q32t6Uai4vx6M7VUp6sHiDBqDfxPTnc2CsQCbtBMqB8XLRPTR7YWHCGjSfSBQFxdREwgoX8ig",
  "key30": "3Fk5ZEpGXiJbC3kssCdkrEnzZDCqD24VLMbpJeJAw4HEoyhn3kv9aFHtcKYi62r13p5Qg1mD1xLw8zMTejutVNZD",
  "key31": "8hh8eB68URWMPC2mbMq33Sd153LJoNYNaznRewAkbeGL5yJ8An2mcgb5jrrhmWkasf7DvnYYkQFdG1Tjm82xiQe",
  "key32": "2RrW1EvGUBDoGuMjcms9GRvxTSiRBxWEJNAxviKd3WyizVrzfRgy1rCXhS2u4H5UcGML7pKeLeAY6QuS2aWoL9jt",
  "key33": "3uQo2fsH6tTxhCVgHnq21VkeTR1VxziifAQBPeBM4zhPqZv19AqQeYPoS7oWyUoyurfYxUjiQfXk78CaAyTmi3Kr",
  "key34": "38BpgVHrHhRyqeuvJcRayJLEboCzVeYPj5ri9AnVM5eNLHQs6nzLp3nbPZhmxaqSBXK2cFnR5TFE9AQR6GYoeNQw",
  "key35": "4UQJiFG2XbXpLHenmRFcF5Tq6hhNZYVr1RoRCzdWzyVdyVMESZJaTfefHChjh1JVPomKb1pGDNsR8eKbaD1zqVwS",
  "key36": "3VEB8HknLbsGtybQ5qTtKjRyiesWQ8fHTUJuLsXeriG3LKi2wpEpsRTgJ2o4e6AfvNQ3SZLjuk6tyR6CpZnuNCwL",
  "key37": "5f3pq8jaYXQxq7ExFrrQ1gfmwuCKPjp99pxf4xUxkeSpCYm2gug4WCU7Gd1pg67GawyuvAWf8S48sHtW8BwJ3akf",
  "key38": "3rYqLcb8dM4kTSJGFuhJMpZVqEnbqZSKvNpNXaTaouJeqYeoWYYqSUeXGeqE5n1jDBqDGwdGnRQxtu73ujrGdRST",
  "key39": "2Jm1wJDSgoXpBnTBDDvXonGTgXvVQ3hzPa8ourm2jH18PsP3NYz2dddiVmdXBCMbDa8ezDFGnzkAs5YaFikde4z6",
  "key40": "4E3e6dXcWBW27kpkCXPYnXLqcoqM9zLKgox2w5qeMAt9xXKECLDoDhmd4kkqZsEiPtk8MoXA4sLHBkkw5Gkj71ir",
  "key41": "4ZuoQxWyioQ4imczC3YedCdYUEQo3aQJDtALZC9t1vLnziWhYR87TSZThyH1pBSAy7Z9WRi4EeLYvn67i58FK2Lj",
  "key42": "3JK2pNkf19hF8oyHM5MXphS5bWpzQoYttbjBFjrpV3kXDj1itSNXH8B1TBdBGQPbHBkp7Kfc4Ar4uhbxXeq5Hgjn",
  "key43": "62U4M7HM3sij7ZEjEX86H3S3bQ5D39f2GVVUa99Qu4zYDTgDUqJahFzPfn3sFvG4e3JMZoysSEPmsJMQP6FyvKbQ",
  "key44": "2RPE63BhU9gXyo2eTKrwkEDjncmNvxcSzMxVQYERK6gt33oAnKYR92CWdtkctY7BvXKnszTGC3w9Ym9REPdDgNSC",
  "key45": "37fcmpYNegFQiTLqyXQtesY4Bsb5zmBVUokjpg5satyLbbjkX4KVTEV8HVbBC1ZZmEkczx3wDJEcosfkzTadZFoE",
  "key46": "48rp7bvRbEKXvg45dhSmC2Nqhj4RG9NcsQLCqZULLkakWZctuDzokDfpX8kZRDuCvRQavWu2TrKkWoR1ZdTNmtQf"
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
