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
    "5pB9KFTxHSTdbxgEqjdXnEwZkUt1vygdNNtsjEdKaPvXGxncyHtAHNG2DGnL9JVCdV5U8JGMdLGhynzvEvExkzPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPEdXLBMxZfx8DSue2ztyFyVeMWfcvLZ77o52nJZVUYZd6BAYJLZKjnCApiyBcPnJXFTXotVZk2xsRJNMjWhN55",
  "key1": "49DgLWryLyUeqmehCC55e16wSrHfFWHmCxSiNtkCNAuy2ujYYLZoKcjXS3eopP4T2Ak2zvsqVK3CNgczef33EBGB",
  "key2": "2jwcwoVDEYNEjhfprUe7MyKr3UhjRgfsniuhHmtCxvvrDcF6FRJ6BAaCDFLyEsaH7teEXheeNAHSeduVJePGnsYY",
  "key3": "m1z4sRkwnDJBsGk8fqKjzJEosMvq97iFnDVEzjwsaC8erS3EkQtbAuFmfWu1epNeNA6MM4F4iCYxNRQ1fUe6eue",
  "key4": "2ycBmPraSRC7ozpGDG5FyvU5KEg1RJNevMRxbNbDPvjEdvSPGxtBM3Ev9DPGaVwMsZM143EEwGem15VHFFpmvLLz",
  "key5": "Y6mKZJPxMPcyCgX8LSciqgcfv3E7nYHGDUgs2BveVwM7vc6VPGR6sWbmF5iNHVzTUZmNmWvRtUpk5HWnLDyVSuR",
  "key6": "58W5WeZdR1RUnJ1vstij5KDqXencgJ27tGGJ1JMAmAiqzyZqj8KDLBTnUs9RdSvtU6Zuobuo8McGd4d8AH2c4iEd",
  "key7": "cNfe72ozG7HXAyKhAX6zypRXuhm9QLnezDHjD5RPrdxgd6GSP6u23KSh9t7NhvX7MtWfoUJLj1bUnRqRZSiXp7F",
  "key8": "WPq7wyHpzhR7ucnVTpQYpxBfjj9N7Lxwr3BfCdPVPqwfkSmiTbsoyrJRN14YWTpqk1QcK79dveRj6d7NuUbQa7H",
  "key9": "4C5q6YwgttjkehGUuQh2japscTBE5MWkAue88L4WrHeQipPQBKheUzLFk5Bus9bKU1SsrxiLNktK5XRMFQDFLn2a",
  "key10": "GXs2P1R4XjLXRQLq2hsQ3fZijNiki1zjiYPYKt1wTGWj2iDCS1QVLvNw1mpLV8BaKeMM9eZFNq3mwTcprQf12iJ",
  "key11": "2MtmVBckYg9uq52HQFtwkDW3fX3AJLQnYZfsfh89Rtropufyqr98RJupGKXMp9yaRQcE7dtW8pNi7oS8FWvosB6e",
  "key12": "5dmtF5xWTi2e7CADnwQwUHL2XUi2rVYvtsJP6kzBa1iKWMVyygKzZZVotgVdECUPSk8Ary1YDCtwW36UXWWDs1U7",
  "key13": "5ZxSMmAmT31hV4ez6qZpDdNaaXiUE7FicoqaZsyYQwaLLCigaEm55TJtnGVcrGF7i1PR3oCmpYW88LQnAPF7M91X",
  "key14": "5mDiDj6o8X666Xi27xgHCAfW3Y65mtCVAG8dS9DnbYg4dVnLeReYneLWHe9ZqzjDQi3XBzLAHshbjPNsNjFow1Gg",
  "key15": "461h3DgpYsxT1wLQH7UnQy6B7JUu3Ej1SK31kikpz5bdUXWVcvVoTmC4k92bnQq5CAa836vc5z5TkMquH6M14PuR",
  "key16": "4kSfNmCCRtS7aSazmVU4vyK5dcDGfC2kz5kXMWR3RyS7vfhWAk2fsZySEoyewbKy4g7wfKayJJGSagLMQ8v3jGDS",
  "key17": "3jXSi1wQ6Z3DayHvYLPkZjRRHywjf7XSbDEZYrWyzyHEYRfgw8PZXYUmbsk1tsXWqWg4k4zP8qPHvtMcxeTGwmGr",
  "key18": "3W9oRg76j2YEo3mpoTT7RQp3zgXMgBGyu1iEV159cfsYous3zyyzjpho3kFPmUgYhD1Bv3Uz9acQu1KNcVE4k93Q",
  "key19": "2CFQfmMrNCK9GnVPjR9nBtjAAFLaDfV9ZaKDemrjW5bacZufDBM7fX86iecGXy3MfPE5bzoek1LZdfbZkp1Ag1zS",
  "key20": "4YNEyV6MVLpR2Nh5GSYDEM3GnxyJpA1pYkJ9b6RJVeBwgrbKjjEaxm7nEWgZncmHTdU3rSsnhiaM4j4dcXnQyYai",
  "key21": "4eEwHbCWjixjskudJrSzZFQ2kQ4CsrMgeJ1fbomquZvPkBBDv7rFENZJiBeF9kgB2fJbAd6oX1VfXhMzDyXRp9to",
  "key22": "4nP6u1JEZB3bF9E2zV6VQ4FAFvGGuV9zVeNV8KMKpNxPdN9F7HeeQrv9TeyzqaEQkwGaASvPGixL8k5bX9yhyT1L",
  "key23": "4hWvVhGzWqZwTstTXadxuiPq3t7qG4K3SJWd9XpFp6Dtn8N86X7Jmy1YaYj7GWjnLYFGJ96UfzmbpVGYN7ARUBGA",
  "key24": "5UXYBbT3pde97UcxvNJ9u3phgrq3me2rkLEs2ZikR33VWBB8taqSzcRdj6tFbnkBX7zTcnSFn11uFpgCG8fZKNvD",
  "key25": "3A1NFYGynVaoy5uSLycJGLPTDVXRppNNKUjLierGrYejJMeRPktMv1c73BNvtckrPy9LbxZtp5bVqJzgkXRvyR9B",
  "key26": "4ye74VYtpY7ZAuNwvYRY3yY7qjjNaUuyMacabkRgqHyfQ64wH258baEtLk9HrGxDm25v47SrsmtFRvjZ56ppx7Ha",
  "key27": "4ub477RAU7NtY74YirgQtD7rDWP8t4KjfdMm5Cf9NSntoxQ3LbwjaRK1B8w65ZCMcLNEtsfFmmjUtmW6iZAhH5Te",
  "key28": "5YqFQB1P1MUVX7f4kdonnL2PA3p93rHoFaszYRXcbtiThDMKxEmW87eyZ17Gin8YaVZDHTGcjXv752szAnht53T1",
  "key29": "4FhwA2MwB8CnVHw1VyCNVyBnXj9exQ63qkwAdNwZicHu8QmwbvdjC4wpLo5Lm5XyqJhNtKrA3CAGmoXjT5bNxYpq",
  "key30": "58x1AuqTF6MhGHHtQYaqx25psMP6ZBPQawv4dKS8CwTGWj8Jgxg3WsBQGjGfzyLJcQhiXW8j6ZTDV1tKaTHfGLma",
  "key31": "2BZmWHjWyZk6fBLTPvoMmFuRaDCAe8XW5iLdfaB3WqmZpWShmHnJn1D8UgGAC4Khq67McPC6jizqwKHmzYjB6gUT",
  "key32": "33gHocTWQpPS3xAjq7SbE3rakTKA5rK9fxUeJPKj8ZcFzCMs1ERD7aqHEUJmioyRUaigUCFh8LtX1HZzy1iAVY68",
  "key33": "5XqF73FjgV84Y1euCGohUayd2PhfxFmnRCnytDhByqpx9DSA2kHmwjc1wt7ekyhd9Vu61QFzc88EUq5JkU71VvuA",
  "key34": "67c78gsgGt631cnaGoMoYVGgfBCZSxSXSaFmrYMGnvDm3QKpBxfDGcdySwGZ9iUyPAQjt3rt2okuvuMqAgr5iWpt",
  "key35": "XE5u1mUcCjV7Aqw9tPe5KqajZkLAmVm26mgRNKWnLEEnBXBPNYZXPAHFap7wB4UpH8gfmcHhWsb1idLtQnJy8Wm",
  "key36": "5BzZPKByeMXx9GssfBdGndSXbmQ3S6U6fvARJSWMKtVrvn9To9XP7pkt736HELuoP6LqJr1Ld7dKuEFwRpoa9q9R",
  "key37": "V7s31da5ZgSWM2Qymhdbs3mWKSDGj7sWAC1AQnG358wY6fXcS8wLHEeXkHuqqcn7GJNK4iKmuzBGVrrmB2PUnbq",
  "key38": "2W86mqimjCQ5P4ikc5JxfU9wPcDMJvFQdg93ZsUrof93Vej64NWYRJsYSLw8ZDPLmrxi68RmhJggHmbrVWq5YjTr",
  "key39": "4VvqujZR4ExfNqT4dVDPs4gCRmd1NN2MHrUzr77oNexW8fRjCFvi8P5YqfN7JtBBWBP14GiDzk2jt8dUCeGuquhU",
  "key40": "45ffagQ2jA7HMFtYZY8sMr7xCzgxARqmQYcEpPveZANTZ2JgJPyFSgpthcoisr1LRgWpcar6DwvaqwuWHXXbcYaX",
  "key41": "V1p57etgB1rjgbzHkEYQcGPtdrEw5BTMzJwMQ4YAcVwfxb2mE1hjTPwdXFtJHrX88ETFGqPQRznLgF9MVax7tdc",
  "key42": "3ro3GS5Ph5zjB9JJEc6rtnD43MYDNnSjPWTwdXfwYnmLbfAQ6S4sUovwFnE4YZkT6r8PpJvg9MEgRZvnM7fA6Cvy",
  "key43": "2fE751YeiL21jH98hFohA2tTm9eGBn5aELF9gTB3TEi4jZ8SXU5AHHki2owq3jMwCTE3puNZ87qJyMmBzfburxn6",
  "key44": "3934uyFJ4pcVqyz8SJz7kWcQHBf4vkXcni97wKazm9aosjjPwRpZfghP2gwuqPdkscs6w6KPeo1mDQ3p9aCp5jZz",
  "key45": "2vj78NXesLAQRuKPxXDt6BuwMvriCQyLipMdoErrHHPYLvunQE8PB7VBeZgVZMLySCzX18hWLC1ydtSKM89PxSkE",
  "key46": "5dZ42gSA3diM7U9HM4mpPygkQdrftf9QWWTuVf7UMzFGZCtdzNs3LgtTRsFhrTD14fszFAyifeinHhep2gMWw7By"
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
