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
    "G1nNeKaEwWseqUubBKdM6GmJGiHy4s8KYPzXKMjK16UiJxhmx5JpMZEYh8PK9bATe8ofba2sfhkSAZqE3sbAZCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wshfbQ8mvCgFfMmxoozYiNvR6QvHG34XHNFU1DNNwd5QuBTxbCqhZrxKJXoKLuCRveGKeUHkfpUbJuCvDsCBsse",
  "key1": "2Q7J6x1BB5227VT5RDRpVH5VzVV2utQ2Vznn173249L2tzJoZsjD4fFcCCXg95R1raPPixM712EJpnYVr4UsJvsn",
  "key2": "5G7WeWS4tLbUoEVkXXKRNV9gBg5j89JwT3WYc3bS8DV7bd2UrT7CDC11V3Ub6ghuE9UKmkHUEXVkzLctRHfaChHr",
  "key3": "5Ehm1e5kHGXRz791AakyihsWxx3kZwfk8VTZfcgvtPMmkBSxs4xpWHLVCBXjkgpi1YQsjuNSZxbN5vhRfgW8fLAB",
  "key4": "54ZYcSFm38do5uoxUZzAam9gdvmiZgki5xTQ9E5QnXVAnfpaZT2nKaM1umGELeaA6g5axGWgAmcWonvtA9cG2AAU",
  "key5": "4tkqDVdXtjTNoYLqyPRjZJt2qoq1n9Q6n4cB98eriCby17jvD6fSerkehQ4yK8thqsW5uxViMrxVmz3CTbbh1fLF",
  "key6": "4ixEszeg8UuXFrEJBfnMX2JLc2ENs7v1aqPsxcJDwMW9NbmLo7ZTrfsNYS1dcawHQCFBTW3FkUjQnHwe3MVnNAab",
  "key7": "5YEuwkSFmYDMhntm31FQ6u2oEqq7VyxArZqSZpx4SSMcHBcWZmsJMzbjqhucBWQ6Jmb9a2PDnW7MEWfJBgdzfc3p",
  "key8": "4fkENKQEzsvJwx6aJrx2ZXnGmyhGgS8x4aaX5mqXQrMMmDGwD5eZmKm2vQsBs6uoFSy4Tf5d9grixy8YHByaMZ1g",
  "key9": "3WAjzuuo4bJnfrH1XTNxiA4WcX3PeYycD4ii4bL9ohAg7koXFgePLj4yApBHPEqTjcMGNp9ZKq1mXoRWyJEdcuA6",
  "key10": "3K3nDJLEA9M5zPFW7nBBmbxtiJUsa3vdCWrtaYAEGRh2VfhuCuJbb7AqJGEAa3CwwKQF4qhmvnu6hAEDq7aJzu3u",
  "key11": "2mWf28zDeHAN4LQuYiz3dAdVqLBUhWqvLFYHbVtzE9z8gxDCB2H9XHexpEu33KZEA41pRMowJoiCrRZ21Qd6uuDK",
  "key12": "2i7uJWGL6bSsY2yXfjSzQsceju8V2Hh7UkC47u9uqnq1fzieCJ6ZdFzbMNUer92WfBjFhFYsXs3Ppko9R4fSaePH",
  "key13": "4MKiK1QGxTA7R3nxzzWEzwCtkELJVAVFqpBW3qgDypS9PxKEytn2CTW26a1LttPcznf6vEpNWc1Lw9Nc9LFjfoFX",
  "key14": "4m1eJsxMGYuDmNwu3ubtjy55kDYehsjahAp9JyTzkkjwVNiDVZGYwj4K8xuFVGAMCiLZjgpus9GqgfP6N1vBLMQg",
  "key15": "3kLrYCCGCaxCjwDpas9RYZUtFpufLEtsNdr4WE6mCf2KCqXP58NVFDZVgadeWKC3y742BsGcNwDsUk7eQs42PbT3",
  "key16": "5MHHkYBuFD3j8pqwwY1XKAKcLcP6Sroc52WtnuYLCsfsJzCK6p9EhKLae8awr6aNhxVPcZZnb4HhTiiYcxq4QbmS",
  "key17": "4zmox4nYuVhEdeNC2W1JYAiJeBMEnFSGnbq3G8jTht9hdX6ZNBwqZJp4u6TQEZFMPkpF4ayY2CPTjJQQLeUhHc8W",
  "key18": "5qKWKdiU7pYzB5xQEEeinZdjWJh4JgmeAzB7ng17rWZybUCFSdJ5U57mQysCqNiE4ww7zd1HZNtQ7YcpgQey7LH6",
  "key19": "4gmMxz88vUJvH6XnUjd6Rb9X5XvRYoiJcjScxDahF9zvzfXvJsFbzKeH16oiWhanKvEEeBRZChB7po7MDwA2cJk7",
  "key20": "4oTcrottGo74kZbDQa4MBwFHWXxinEkGT4upfXpRShcdCPa6errZ3JEdD8xUJSszCTxDJWa3P7gNfpfu6RkWdTsA",
  "key21": "5Eb6iGdHzWZsHqYrwaJsUuXk4x5z2LNsTTYV7HGoNFLEvTYeRxeckqju2wRd3keLurUjFyP4oM6HxqwnDN9WBzV1",
  "key22": "2nz61twdGA28hWdtywHMYCboqSSkNpcUkVxtV47QKM9BXJLzshZAT673SkyJmJZQDp9WpvRJjhYRDzn9AY8LXh3M",
  "key23": "29a3QWxKc76nr4RRVxmza5SqYpiQ3RQB4jZ887giN5P7BqBWqj7Ab5rKDECW6jGe8Q2BavuCGaytT5ZHMaj2j2Qm",
  "key24": "2ZauEWvWaiqDrm1vBmPFafzo6VRetr47Ptjpnv8PxiTYKCrsNQxPa5KiALjQYGfeJrpQzYXeUZgWMYieWsYbuf73",
  "key25": "3c6h4KBVcMwVFJnCv97NTP1UyKBYAGFiRaGCxtYNZ969vFXjioQzjhVSEBNqoWc8yfzzsT4H2mW3HukYSauz4Nej",
  "key26": "49m7XvoXYJfYw6gEnZRYUTxLRy8pcJBYLhEuYFV2gnwLDpcvMvhpqxa6Pt9TNxYXbJ4qbk9uYoheLU3TXQVGNaqt",
  "key27": "2ELsV9uPaUpooxT2cm4eCw7j7FJsNJDyziY1b9vaQZR7KW5T2ezjaYMpbsHi7WceymKk2oyne2o9q5muZ171e7NN",
  "key28": "WhxMtbfnCLRMdH86bzQamPZFNJLZUziZt7zxaAsHzWHADo6X6SLoEp6LUvBJZzVu2w8tEZ38u1bQwS77N9M2C2r",
  "key29": "4XkpM19krVRmTCDCSoLC2dpyuxAyddrxcQS6vZfFCWb5tq7NRrjvSx88jqr3sj9gbAWco6ZGxpgXYPYmvG7Q3Bhk",
  "key30": "2hfUKChrKzFsRCJDRy8nSWyzbu7vBVsVTEqaA7C1Pe5J2gx564WSrnY1Yu1xdhnbemxwYv6bMNYyMQMoBBomMY3q",
  "key31": "3tmm8hGNRqBqPQRAd64u8QdYwZoQyUpFByiuJL3pH8Qw9cyKRkhhNU5ScPnYjwr8D7sQ3DmuEgwq6qNJ5XFqbW4s",
  "key32": "2WB3VY1xa7gNRHmxtpx3b72t5PuKb5zxo79hk1P1P5isNkZXqNUkwcmCDC6WAtUQLjpq7rgDQGzyEGhZ9LVkSGz9",
  "key33": "3aLJaVViMBwycaT24veghFHDnxZaiVz6TdrJ4yzrkui7dBSMmkEna4p45FdLVUr5cpum5dwsGSaNMg85uT9ewBz6",
  "key34": "nFrqv3xy4WCpmDpXUgDam1onuysydaikgb6R3gNPRKjLkBwkUeRVT5mNaYX5wWogz5XwtbF26ScywAWUbAwgHUd",
  "key35": "5QN7e1zBax1YguuK3SQCte4nRgCW4xtP4bu1Ys7K4BvnGGJbpTzMJNGyBGbRnfKR95CwojvnsfTV78hqJyUC7pPG",
  "key36": "bcdqbqMZy3utioaByYkvXSUjg7Femei6wL1zkZLzJQ9RNnuNmbT929HtTFLsg8nYp2mBX2SSpjFFVKKgm5sv8ag",
  "key37": "2FbCCn7LJAPAqbsoUWKYb49Ga7U3VE2a43oBGBvzJy7ycfihBcqcehbi7Sf5p6sqCo427CCjmWsHFiQyrucMM6TQ",
  "key38": "5EBADPteipQo9SHfMqGNxAokfnJ3ZCvD33E9RpCCY2vvBu5v82bcHhFk6HpvCYNBfHrSXyLvwdHskYBReh6syoxz",
  "key39": "2zgbNW6Rquoi8ids5WR2Fdjd5KZhrcvJt7hGZYQamMSJ3P7qxtAXsSATkVBshX98s6HhPkigg46banZp1eUhMKFd",
  "key40": "3VohrywLYgJxSV7e5cFyjXvZh8Hf1KT5qBjm91QJvhZ5Dr2h3ExNbJhSrWpAag92ACNDrW7AgZR5iatoWX5cq8Bb",
  "key41": "26X6RK2MyNVmKpFLcxYXBt6qKEkDCTuisQfxodCRSAUYvm3yakH7VcMzieeNTyRHAn7rysEoLg3nbkCLofZ2cTi8",
  "key42": "39FEruQyC9w7eDVumSRHahQ23QdVJp8iUyPkddWgCbPLyruUKPN6CDagfgZmikQwPMm5vLfRrTAKpt3cXgXmp6nB",
  "key43": "5vgnZTcGxKqD5eJ21hQh8zMu3ddgw9ed6uDr7EU8iLxh26ZyWRtYPNjZ8k1ZfUMSWiS7aGFWc62YpZhbXcFZgQy4",
  "key44": "4xc8DbPj5zi4HyWqzFQbXfhxWx3qu5ZG9t8fzq8icRgHx7Wq7xuJXRHuuiPC38Mtgdfcq95uHDdwJwC8SbXY6hz9",
  "key45": "2mZqAhVjt1uY3k2NqAr9exjctPBpJzvxvS4tzarpCs8iH9ibA34QbDy8FPzZXiS3MkpPtgTUUjAr7h7NrkT9Wz7k",
  "key46": "299sA4zkkLyrkAo2HCpRS9UHa4aoAeniMzufn7zQPQbRwDuy8vRhUC8do6Zjaeme7oLBvdLtfdUqop5QGdWMXta9",
  "key47": "3RSKXcXzN5ZZtShNHpbYNQgeBC8sLjBzkx6Pi4k6M3bVNSgHfrJPpfuoRcRGZxQFVo8zDqzwhVCx19k4RJt8gX6o"
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
