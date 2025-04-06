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
    "YK48iTuKWLZRgrncAsJHxJaPoPuzY88nWm2GA5PXvKtytf7N9LaGX5hkC9cM7kEA59GRxBjEU1dZ2gZggEBwRny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41STCKE8akYPhe6PrNWjsucswPJMVoqjnaQHLgLBrxHyef81hHRd76W8X6UuMTcE4uGFSEbcACfLyuxuqzDYDQXD",
  "key1": "49bxxD5t5LCCZP9bmSFoe4cnUTRRLjAARQpzZUmX8iM2kTPdJzienZG9BfgmghcLvnGUamEnxenaM2r1PCVpQwpS",
  "key2": "2ZmE9TBZQUQu7kMxhS2QoTawChgcG1s9Zrf74rY89gvA72ZFmu2MPSm45FpaFsrSM92uAvYGedtQvkyDXNEsD7rm",
  "key3": "22Ssam5uL7UXgCcsyymXsPZWWdYBxYf7ezDr4gDF4j43cYb5by9Yua6YfXyNnXxQjkTbZrB85zmPhNeLHHTRpzyn",
  "key4": "4tnfWyyptcG2qFTejTxWsztkt3cD4c9ja6gz77W7fj87E5oysUFspXb3dEyv2KLmy7FrSzqXk1nLYUw3FXDBfZJx",
  "key5": "3BvNtoyFX4q5WCZ7mk4g2ERXxU5CQm7Fwfwv9rLhQPSkkuPwLUyzP7KFTTNDDEqb8qVEunkH8KpcqRYmnMwoJseS",
  "key6": "5WprXuxhBVKyRN9aoMDUzc1WBomKxJYBqyseGWZcxoRKWR4kSAiYEywQnGn91SHS5dGs3JkydQvaZFCQcyKLU3Wt",
  "key7": "2GW2H89csJt8uwZ4Tx63sjGHMN4HKzBa96CKmfzZq5Kb9vk9RMqiMxuLRVmScyB7yS8339N9ASWG5Y3QL66c9XRL",
  "key8": "3bAsB8wJwGQuKRwnLcc7PCAN3kuh43L613pCiE61KWT36G1tt93XioqyNCC2gGb2EZiMirbBXFNxLu3mkTagugiz",
  "key9": "5oyWvU5nEa9qFwYSv35rYEBqpwYcgaKuthgvRHCu5g4GkrM5dLxo2bmkFAnrKvK7QzicdL6dVafppkym7Mx4Qbzd",
  "key10": "4w8kFTRVgmwDucLX7ypKdqmcHUfxz3gJCG8foWXD9d7Yq3QHGnw7BGaswk6bsjHxqkvaYxNqogs8J6Tf2mHB7f5f",
  "key11": "3XY8ZX616hn1UUgWSvEvmUzLnZZYy4SgmErxczgWjkxBCCqgr6rQfG6wo9b3adddyfBEau6wpfU9HP1MUfNPKkN",
  "key12": "4p9zoqogoyssMCHreEXeDUSWSJRbsGgZxM1VkDnQoxBeMoVCGmZ72H45USEX2kkPka7CobCVaTMMFjUZQKMycYFt",
  "key13": "4H5xKoJc4h9iX5jMKDWmU48mKByQk9Di1eGskhnoCQ3hgyfwsBfuXTsGYWVgePSw6aXv1eKJNhrnMsY6FKwX7miS",
  "key14": "5foDZrETibUhBNDDcqYjfL31gAEarHL8EhZaoWnabtvHfB41sUU6uBBgKqhkKAWTWDsLcPXWf1pcE3DE17uHMUdn",
  "key15": "4rq7xuPCUGNbUt15JzPBkYbFgRxV9euUmpxmwK6jV1zaNyZ8i5g7r9svjXZGa4P6jPDh3mktgqF6vL4A6CPu9Ac",
  "key16": "wbZ9hBvAYbQwfbH9ARFbzSNzyBfRZGyoG72HQwp5ehfCQiiPit2MM9XBd1urXLsgMyvrFfx1NYh38vh8SVvRr7V",
  "key17": "4u3We85ppZfez5ddWLuiCaX44HtGiSiuf5K1kcYjXP3nn675dBzAmz8HTp7dM8MbsmrrZhLEJAH7D7jNYMbw6XpU",
  "key18": "5BcySqUswcok3XQ2epDo2T1qcCgCsywLYhw5JS5ejVRv9kRqgZ1hSWH5PSQjGTFF53XLvXTaUfFYjnKsZ1ygG2cC",
  "key19": "5kRXUQsh3iNiSHm9oCe94EJPuNv8mNRTFRBggELijuEg2TWzfsnE6bqi3woazWkNNyqCxXf9PGC4kzak84B1xqUP",
  "key20": "qv8hUEWZHmLih8aAs5rbxziJkinbLUwShuZjGzx45cttGhLrdbptgd1ZLJfqEoNMU8u8WChKH67NjdzH1Bo5ZA5",
  "key21": "4V1xn3RZLArF421vd5vm86ELSwgLCBZnk88PF5Y2EpLFYqybbCswgE3euUNbmCHmzmqQAznNvn7xRwi8htc8LMri",
  "key22": "2cj9PCKYexVov4G6HFxRq9CAqn2iubikZ8Afk8p9ruiuNPPH5QPZGGbTTSjFvWhF37Cj9RJSsWZgZAtZb2hfkvib",
  "key23": "39eqmC1Ks43aJHb9SNUoL3gAKpUaSX7VzQyX79jbmhzSLAaMJtbT6iHGCsY6G6WHrTGn7wHh1aLq2fN7oAP77wbd",
  "key24": "5N5gV9HJxviftW2LKGsRWh9bUGSZoEaY4Dw34RaCwq3TQNdeq6QNQxGrsgxTzLVVkPY5KishsFiSEx6ez9ZsKYnE",
  "key25": "uM8CzH2z8Xw9PUbSnwFC6SqEKKdmWkFqCkLFRZaCnfrrV1JM4wrr9d5Qg6KeDVL5tQT371Jm9b69b3apfYLfxic",
  "key26": "hvTLyuWUgxDqGBg26VfwBDEeJFJT9dceaEGHsMnR1UTsv7m3C3BCtagMerqtDSrKbUPgx1227siE4qsTa1xE2kR",
  "key27": "2m2p6PBeac4kqmydEbdTcxcKQxBeUu1xKZZWzBk7xP26deaBc4WTjd7meMLRLEU2Cvzo4u91zSxZPF9YkV9d2VfW",
  "key28": "eAZXCaJ6UBLffAVf4BQowruBtgw81Dao7HKNZb8XN3TcsKDjJJKo5wF6sgvtP1kmMxGR7Dq4ZJVZLwXHJQn8Gts",
  "key29": "4PWfBSvnyBGAuapDTrFm9FP7ZkXouo9zz8LdBdQy2M8cVWnAmUzTm32Ka6MZd5u7CGqQbomukADWt2gM4uzkvdW5",
  "key30": "4aniWpxCATM5exRdgHzJi6eGyqxZ5o95NisQ3Db9jNG9hdZ5268XGJEySGnyjGN5UqMfhpitSu3b2UtaUJBMfAca",
  "key31": "4A2w5U1xqrhy8N1JfftqVm9WD8ipRiQT3AQzZh81prBnnpaKWoQRZgdzSi9p7bhJ6LH4kMqDeSDgP5Yo6Vxxj22S",
  "key32": "2VNDLGrJc2Gvzgh5ctYup3kJCy8Te2KdJ7Hm49iAd5fr5r9LgoUMGziUDwHBKrHqm43tk7xCuTdVHkkvKQJQCHCN",
  "key33": "r74vGmYRGbxRZJtHoAVd9rRcJg9bPoASVqT6mBjF28DzSqStEFsPDM9BsNziLSZMGX9pNLhNET1fPaGr48f5GTD",
  "key34": "5ZevVRFxy19x51dHddvb5L5gFveinJ78aTvTQxqGgpeVpk1NM2h7QkHZhtC3fknTWsjFTeQrsKpQ4MKVrCPk8SXT",
  "key35": "237ZfamsWapQjHK92GAebNs1MDLaNxehMYdG1reyf4P86DXGXZL36xK8qpqgA3ZEcbujpCDQc6eeg9SfX3QRNnRd",
  "key36": "xvP25NyY6rreAZ9oYFhdwxDxUVycrDSpXNTmWeNxdLKNPugG52SjwvkUcquvjt13xSFkf2x3EvXiDT2BAVNMrzB",
  "key37": "2uApiXWMYeNGFp1AzHSAPH4z7MEpbMxmzMdTJgYgykXmKE1obKvB5cLndw92TVk2kTeTxo2tSL1qJ878JTFmdGbo",
  "key38": "5oT8GaAbjJnUKjvm4Gu4x2PcDQHaH1XGBW3Do1qw4KTEXL5V342gnTE1K9hVJUzZ4GJXJr6re1QgfA4QqLYL1xKo",
  "key39": "54GjjY7pCTfBjq1dP7ovEZFZYpyiQpsLEGsLXHwcto7HD64Gf7gLhyHQzRHYtbzaYrjsgQaNTPTrqvwRuWNNHcon",
  "key40": "5mQa6gUJvV2Lv2iW3xSfAYL1KB55t68W2RQ2toLmvM1LoR7vwErxvg3Q4LZLYHnjm18uMYUbKR5438WsYkpMuUr1",
  "key41": "JNnWf76dKdb5biERvfJaD9NvA3cvj2Uthno99E33a57yKSCwx55rGBVML5jzPXBDMZWTGUpYup2a7Nx1CWaSeaB",
  "key42": "3U8Qe5raTWEJpRFGLQCftq5v87GnsNShWn8Ly8tjWPUwfiiU7wwpXvq2DoovXMyxT7ykVHyjijzaGU8HqUX2cMRt",
  "key43": "2uJnoAVkvnHSCsUxR88sSCVKz8dddWPm68dftruPRFiQAQq37KQri5SfUbNbR61Q8dUTmMgSxdRDvtdvXxuaJF6n",
  "key44": "3tA1YriJyjjHjbEhGNLMzWbumnVVXFy1UUAEadeEoKXvPpfnWPCo9hqs2G9wb2bjWbgHVVyDjWjobJAQLiEB2uca",
  "key45": "Y9aiCstABjvMqzL2KHKDCMAVFqJreFuHbU3HtQA53BwdbFABzczMPFA9hfBvRT2DaWRdR5Nt5DnADqUCdiKaS7M",
  "key46": "5pZad2Zp1zCtLbtio7cxvnkJ729MffaHXniNPB5GrR1GRmUuXagZyqD5wXUhLQGZC1Hw9ptaL6hgcDPzAk7V5tKK"
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
