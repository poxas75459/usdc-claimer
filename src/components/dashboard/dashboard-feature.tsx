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
    "4E5BdxbXe9pvWeFAJB5cN2o5XVLCJW6VAZQrGY5XQsFrp5u3TGXky6JQf4Yygzkwnv4eAWDkwAChe4gFGf6dxj3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agreFvUCWGDZ71z9cVxQEjkGqvDP21gbkKViYm3rJHbGM2dFHbvc2E6YD25WJ6HvepG72yMVApT19qwfzhYEiYA",
  "key1": "5ekgb4Nb7tusqXcH39hVutkzehgBNdQTwxN2pfuGQEP1hLREXQGgDAZ5UisFmCMCtLz3CE13HhxB9UfDMGUjuKrP",
  "key2": "3Ew32GGMuRH8MHb9XdmSxAdbWnw7Ef5vjFqkJF9GgARsb641GdsVgUZCjvX6sVY1GH4Dqv3x399qmrq4v4Wr3Nww",
  "key3": "5UYD75w9poox9ZF6Njm8GYwT644xYNqPVWndLFXa7yAkGLkye9kMHJ94Ky81YmJjeojA7WEddommrxeDtSn9Kmr5",
  "key4": "4rCSxTQsfVezeKjZ6R4769Ebiv6L3Q5CS3eEoB6ndcRE3pqTiPCHzMJoH9uJ4UcYxsPw6Pxn1f5YXZF4EpHPPeB2",
  "key5": "3ojCFJpBqYyBECojdCpitNhWUZnKmoKiS3YcCpkosEdUaaUFrHaSUB8qFHLQxFputW2Yqds5hozcfMfofsjM1CYz",
  "key6": "H9TQsQFvM1M9AqXkeXtPJJJtk7ru4yHZtNdMbKKmLh7uCbBeECZV7UrTG7siiaWBcSX5MZwE7ru6S3PsA23PodQ",
  "key7": "5UeXwfX6SnNTPQ18dGshAdBnUXFSD2YoNA4sa7vqHWYGKQDfr2fDAsXG5XMA1LgrJ3HDzrW2YRVjiniutKeikiwd",
  "key8": "PYM5ZHmrR5rDx1GMfzFuD1jiFBLQwjDBwnwrpvgmn5qqXM1RqzRiFEL3VSVi2mHa3Zc2Y5FNjcXG93URs9UHqpF",
  "key9": "4pQTuzosajQrrZHehFt2BVmBnbDzqUbSxc3Tc5gpBcXApqsUPgDbYL9d9fgnut4qhajaBBxxyKkNZVAdfmNstUnX",
  "key10": "4zXTmepq2w8qDNw9wCeshEmqEPXsHEi6T85ueFP6g6CpstDVc8RMauKxcxPzEYm8oe3eBgjEp6taZAwLg1ufWSNg",
  "key11": "2e5XT1SzZLf3esLvkzqM24mdE6AMPDb75g541QSh4fusoetx4ujUq9JQpbV8X3bE4v7xwHAtxiQDsoATezMWBpAP",
  "key12": "44Y1g6UaNoUwpzGPahFcrsUa3uEGD7GdET8SPrxgBeBDbgjp6ZY3XvSCo1mR6iFUTecaRfGnFHbxJonYsaim8qk8",
  "key13": "4ALgW2Sfts6Y8jwqTvLsp4RXUg54UyCBe4v5aDvxzVwBxGcZ93t1iUiveAMhZrxxwmh1gdA7Yjh5wdBkHsSN2gYc",
  "key14": "oJ5PpE8oC2Umxz3egacXfL7NJtWL63gmmt9ys1mkQ33mPch8aVd8Rsbqtn6PEddUptgoD4Y7FwnQnZ88Waa3TyQ",
  "key15": "29gvGFEa6PtnboYLAt1iHGG8sLyQZtEsuuTEta21qywH9dqKm4msQLbDsgRrpsiGiTfVMAv1dNTKjb61NaXjbTbG",
  "key16": "2RB3yhsSVDH3RtzhwqdvQ42WvX9AGNT79r9GjDgXYnNvsx2L1b9WLFnHFAr8jjJcNhPpUuz5E9RdXLKMPod4LKPC",
  "key17": "4VniiK6Q8J1qmaU4UjRxs68oqHAa2b7Ftdr4TtUpDvydnjM64soSAAn6jTDagsyuFnWnG1UjWah5p7sMwTT7o9hP",
  "key18": "L4fyjJoh5xyPshXVQ6YJLiQJcvADVgyr5fUCawM2W4E1jsXM3KJMyPqbfoyVYM2gopwkF8SRMCdJH559MTMDCkE",
  "key19": "5jKCNJ1jTN5d1mrSfz4iZPE99fjGQpmEDo8woiH5pZ9CehgsPtY5MtCxFGvReurrHu2EfMF2zcWdFRe1jZomwDb2",
  "key20": "zmgWZeSVJTrEuC9aEFuR8Q6R9uQnwchuWW2mjF1K2tEn4qxA9H6RAfgjy14vqyRxPr5VRwcngsWqTHyHeU3Md71",
  "key21": "2jqfo9YHKhZJYG3XC7K3jLF446kmcfijgff2RqHP9YtMiKhCcmHs7PQ1B5frK9V9DAuUiPHMqagkksZCNR4K9zds",
  "key22": "NK9htYifK8tCjVcBNqhH1gFqRKXqEwWSPAEZpiv1AE7FVZq7GkQvUbeoqyu6CGXgEdqmvpT8K8UwrCHDJRH6CA5",
  "key23": "3gz5pLNnSCUoCRjMDHrBZoeTsJ5DrTGsKdzCnQTcJCjYseTxQU6bXqyBYctaenHhdWUmNNpV3xHXaeXVo2zWr7Vc",
  "key24": "31LauErFLdHixuZtvCjjDrjWs6LeFG7btkqGS2pveG3YwNzkTvqXeuoayq4rsJZbqu8ZNtozQyy1SxDcVvhTRVXC",
  "key25": "q7V6RxrydajaJnqt3fnjns428YssBrZk2aNEjUBnjX9suJk89LUcB7js9zrFkWA9wM1myJNDYz9xKAEiVQD5w8x",
  "key26": "34D7o3m1mqaE3rwfgV3xUvoKpJVxTQ9KPscjvJsDkD4nqovwdbNhfvLWhapmB3x68m52xW3gDC2n2doDuVLD9XpH",
  "key27": "2RwUVkFzWRGBcQ9RmpXLdWxZwHpLsZruZtenJDCaq8KCUHsMZWPFwR7ah2NFjjhoamGPKpCAtsrt59YyqrX4sdGj",
  "key28": "5e3ug1jpLM5WNBRLDhNW6pY26mu2YKNVfgHVRDgFHEmDFmJSpZ5SPYmYVCrySZxvaWgSW5yA2Sg86fTgWezMKCQW",
  "key29": "2JYNsqqAWNg2JsbU4V17CxcEd4eeJyrvSYNRRckTd5t5MAqgkXHPXGV6xkiYb6WBCstAsPfM25ccewraTKpQ7jsX",
  "key30": "5enfsG9NyvvGEits8wPVVH3xyTxQ8NQ1JdtiTZx1ED5pLjqoc3N1cwQbsG7XyJr5UyYqawozGWyXYkZGFWHdahcR",
  "key31": "2NTMroxiqQ2VnL2fTQJm27V4nrRaxDTJePhYNxNbhWwQdd5G32XUdiXaXADxeR6dnCNQjiYZU2EMSWzoMxGUzt6p",
  "key32": "2kaeg9VTBXcfqdw1XUMTJnG4eab9wSyPqTogXWcwNcw78kxXk3aoWGttm9219D1dPoRcUP43Dq3c4aMBDC1eQXUE",
  "key33": "axn31Vsg1g7VnzVEbWgXqM9NmYwFMWtMK9NdSauPJzGzyR5CX7r37SJvSAS9dFNF4jyF8MbwwDRHvi7b6Af51Wx",
  "key34": "hWBu9wGRsCNdnKgTi3gDqBmHj4KcqLQdoUKVNaTvQJJN3K2ogo1uBLPwu5K69ByMAbGs5rRhtqYgzAdNdoUx2nv",
  "key35": "3G788Pnbzk4DvsYMTRFk2HGcaL1wgBLTHUdoRMT2K2QxpGzGDgMuQkkBj7D2LBTqWLRq2LbF8bUnhAyq4FP4raZB",
  "key36": "2yjEHq1zu6EYd9xru22mbYxRoSTx8RacsmzhdJLVxsWB9GMsdMRRy7EtdVEgh2xFpMKtpCDAgJCryX5dWBhYSep7",
  "key37": "3hxkUrFjkzShEjLcCX4UaMnkDsUBMeGbvMgDFyQfcoZbipWUzHK9zXkHNR8gbttgt78AvJHtJJBvNR74oLLx4dmH",
  "key38": "4CkSoNb1mDTVjBRNPoH3FuMZt1y9HXVsskSi2J5BWnEjX5wyPCyYU5gQKg7u8jieJfS5zgRKDJLp2KRepxoHVz2w",
  "key39": "5GbCNis1KVHk5MTmCByovhj42cYkQ2aJRrBrCsSyhLwQYaCGtanH4Kf5KyBkn44fdTQSbZvrhsdNkN1kiqAEe7vY",
  "key40": "2f3Wpa1vtvXNmSoMWYHxpgesrB4uCEr8J7LDwkPihGR6h5P5Etb1SDepmA4Rr81CkYocSYgGzbpN9HjmgHJX93MK",
  "key41": "641UGpzKVEA2tc8KRysuUE4mFYhYSaV2RbUpxnT5x3T1WQk7ih4kXhkivbYXNFJi8coxnCQASG6XsoN4tqNoEdYx",
  "key42": "5jQWFPjwpxQYjPjYKqf5fGXGJPUZqLFTeRrLpXN1ygwWSr5DgZg2RcctPkYxahdd8M9diBYgzfFUKVeZsFZYVRXR",
  "key43": "wBkHPxvMNZ98JCPsMuqKX6kg11hgKH6qoWTc5aGio8WWSpEwLMg78mbdVFt3ZbQUTjKwjPbvYNksKDoLtUXLMeb",
  "key44": "2eU6wHhWMoajfUzgvHF4ARKFXqWV2ktLMZK5PgHZvEF1eswbmZVVQqUAS2cuQHKUJ8Kw27NDJQQZa6yBQVmQEoPS",
  "key45": "46ZPeDgvkCnWKypZubNASrhB4G9psaNMUBYNWXWtMiLtrUUNG2sJPnEwEg8yTmDPcK1VyX8413yG6XSJqDsxgtMq"
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
