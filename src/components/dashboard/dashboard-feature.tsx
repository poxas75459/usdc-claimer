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
    "5WvNdmLPZ6Umh87udE4H9LrKzCKAa3qhoYp9LaA7mLPtrgXCYmcteQwcLZGC3az1gey3T35jsaxNe1Ahreh21436"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NVRJNsr3iHDe1V8kMFvz88yydyttf7Szy9pMY15GBZrkvSpSRJBrybrH5gJYqQbBqozbbJgmaREvLi3GmH1iN6",
  "key1": "3YfshJuArhLn55s1uqy7G4Rb6NUe9wz5QNwV8D6A5dTZdyQdzumAZT5RPuR9UtUr7vd4tfu7Si1fK4WFu443Q4Rb",
  "key2": "JVu4d6q9zdnEk7mRioPuX7DveNS25tjJ2daSEv7sEf83WuRWML5ozbFyejNgqbJQDRhN3RN7x6aAsLc4FvmSPxu",
  "key3": "5KwJqFnvbP53wrd9hazAHWTYZvZHEQJzdzf5bFqfvLP9FJthBpNRz8dZqW7NBnGXArgQDyeQBDTcjEFEWAVtgk3T",
  "key4": "4z4ouAxE2WdptcBaV39gZAKK6ugh7Z5ZuqHefN8bHqdAvrmXSG2LUeD3LDkyUYauiRh2YEwrQRMVEM7xnp4chhFy",
  "key5": "2MzVaJMvZZvXJuRZfLBpVxpdVVwuv6TYHPqAUEckuJGmqmuvsJYxz2V9B24zwEnaPk3XFiDMZx6qdeE6WbhhkWiZ",
  "key6": "5wbBusRZ1sC5CSJ5hX1rv5eYG7i4THfcwmmVTwGPPx3NE8iCRw8pcstQxws49GGnnJzLqxCsHgmh3YnAgLfk6odG",
  "key7": "29VwjJLPwVhLf7gCzcDJMnEDi3kPRChNauG1wTHMA2hbj4pgC7h55DakgvzutJVeZnAK6dv56tTuwZNJrRpUvn2P",
  "key8": "4PHc1Ke7tu7iLHHC5UC1WxzQ2Dpfo9W1wB4FG5uDVD8etQDB3X7TUUcv6WcjRUdDHRrommGHxbyZiyWjeXNmPeqW",
  "key9": "2WFNyxFfXS958zXpCLswKCcT3bJQ95PFNcxkCDL7FL15v165dV4xHdKunQLQfRCUv1mL9tiLG1fSbT6WbrBGHXpb",
  "key10": "3nUJmjFfi7S3BpGj7CiZmgxxfSb5axjHppJbvhTWYxxDHbLfL8tK5s4XPsXiH8irh4hx2iGak4of4QXNV3zDit6A",
  "key11": "5pzoXaNtjTd15uuSrjbVB7irQkTNy4DURVisXygTaYSJUdj2Qfs5k7TyK5kzgNB2YxtDi4s4Q1HzJ3g6TSJXj9UG",
  "key12": "2KhdXPpR5uMsBXm5XvLGkmSaNXVx9L5rf2Ccd4TkzfXGL61WbXj1tYLXm9QcMFvTp3zsUJ4kPBRwZSHETWNLG48Y",
  "key13": "2ZipqPevXxfZu8CjCMfLFwTYgUkaXhjJbUvQypp1RF9Kz9z6oMDGe69SS3RN38QFHooXnhC3ceBheEc1dYcqeyH5",
  "key14": "47C21iaNJoCZ4UiRJLQS2JFxdDkJLpkbiXmwcqqJm5VW9R7tm9FK54dPRafLvVrH1zkggUT3m7PCj6q97mTRmC3T",
  "key15": "58EitGwjseMC1BXWifK8bQ3sYgGfJiiVwDeXjEoBmwd2EVMjUFNAg7zWikcDWdvv3EvUD2hxKujh1KMyumvQse4V",
  "key16": "5zPC717TpKERfPe9z92tNngatWo4NJc8wwCFSDK9167wwGrPsP2mWfJoCbmazv9XgVLnrqLBW9QetbvEEZ1aXVzM",
  "key17": "3SArSsA86q6Hojn9WwciNbdFaAL6pjK3apZmDbQmMRZXuYrtjssP1jEMS9j5vTYiv5qqS8ibfnJXyqB71rbbk3LN",
  "key18": "X7eyMsPW1YwhopdMbQiUXpNvDYnU5jtaiDHeqqqgYSyBRNcKCzWcgpAABnuyDXtFLooTw64J6BWHPZmMjYfBnT5",
  "key19": "Msj3VDfvbEuhwdLm8aLMnjRaWLu8vnoA5r3ZvrT7woKrQsBi1p4Pz7nKkioXqohpYiuF1yDCS3dDFb4b1NxhW6m",
  "key20": "3vZ2k5FN6RozQ6zR6gwyiQq4ySkdKagRAybBwWyh9ittQdkcBDCVrxQ6P3EmGJfg5jpKkQDn2AzvmukTPvLktzXN",
  "key21": "3vZwEeXdFtzZoJVF5nS9KFLQ7GMk6VxdaE6AFCSX6H99HH6HmqKPxZmGiNya6XAWhDk5iMwounV69gyZMy349mMD",
  "key22": "3vAKBwudDmckW49JPWogBXjkpceJLAs7GeUvv6DSFkNyLyZPMtBxFxFx2ikpN5BMnQx52u7KgByt7jYKsP1jTBhT",
  "key23": "L5uZUTsiNGV8BrxPvdeJpJGUHtBx1y2Ksuo2kMS6d7ffseiMu2N5NhxtL9QRNciTRHnYfJpVMvvyQe3SKUPYP3Q",
  "key24": "5AKiM8Ffr5SydXQdA4a596QdH5jCYtZee9fF91HziUhwazUzGK3fsfzxWyBuQx4c5txuubpdZzzowE8ircWNBe8U",
  "key25": "3SuQC2McCtBrdGpXX5bSo2YSRqzLLf8nSCsm5j7qpHmYu6pnDzxxjfYn38kTEvDdzjbLiPmgYdPVEiw81rSpmLgg",
  "key26": "49t2WYneysdcQcZz1SKfCKfFGPqHieHU8Z4gzf7pLwZFukm9aMrXiuF2eFezw1sffe2Zg5DUsfeGwMKMGbCMpLq2",
  "key27": "3qQqVEmSgthaMpeG5a7V2yvxB4Wj2kqfMhkCJoBAzEWzMY7msGCcutWNoiY43rqpy7s1yPa8c8aX19Nf5kJugUn2",
  "key28": "53AG4s1EkQK2fwZxTkQu1td9gUZsvcw2xEYWXzjRuX461VYRhLbP4um9qv6sgmu5MSrzLmPHt8hV7U57ECTwMjiy",
  "key29": "3ygLjw7zQktausbnNuAVJrdKLJvEDkjcg526WdV7v4iNCp835kZMvWdT3hTEi2SfkAu8AL7E4AFNgr5zHpycHViA",
  "key30": "2rkLv3RNSMiEitFLp6jUU4EmoaCsuYB7LLLCz3x2KkVGxYzaahYSTVoReAiCE4nwuB4MW8cM45a9y3UZaiwdvgpa",
  "key31": "4BGSfQBtBZ9JdALtV2qHCzXPYrcXLiR1ecatK7z45uLhuJEg52TsbStowyHXDLwdRQF8FRFjgLgs847HC3FVWCiB",
  "key32": "4AVGgy1n5HAM6AivzDD7Qzmj9KXQ27UKEtDdFQzNLZsqBSnYB1jfWsdPhNcJ1eFmvj8UCPKG1uMUZNKnXYYpX9A5",
  "key33": "5DFE9Nz34DdeXwmZi5VsLkLumFvXStTJm9XUYVxk6WUe7Vp6yK6EHRWAPPtwUuKSL1e5HHYwUhaMvfySL6QkjQPr",
  "key34": "BZRfwdoE2fquzSb2Ghx6Yw7mmF9FXZGXiuDJERy32D36Mb2nvV3y9bBP9efzHxYNXuRKGyhAbj1DwgrewNJTSbz",
  "key35": "2GfL5Ha9a5LabuejQEYJRT7Tm4fj7eGYG8JB6DvwLM6Cc8gfUkD9dw2ZdgbiUVb2tcCAvXcEyrYJiY28WUQhBuua",
  "key36": "5TPs7sGMEKxxME9pBV2Huo5J3PsnJ8d3bYALK7B96AnC2FUoSzxd8iHtNvvdP4pJhZ9bGZkath6NREarhTa9hjhw",
  "key37": "3m4j7ogZvxYWNtPbqfo2qPNcgrcLp5nWKLEJSrGozTJMdriTQfWxR3trCFNQjNrve5L4GYKqwjiDQLSwbBBX1EvN",
  "key38": "3zcTj4vyF5jseWgwfKkCJkFJwD9tcFvEMSf8ctwZbsWmUeCPyz7zQj4XtuTeGxaup9RWCnSgA2TJRbscMo7soi1s",
  "key39": "2ohyPrcQi83w5Ti2gDFGaSuwN9DwBAa97uygYZpt5LKqYdWDHMRqujbjRdnTLPgqTED2QahfochyUKp61NNpsTwZ",
  "key40": "5g9fX25Lt5zLuEbmVvbgN5oNQS29tkP9csVdyqqvUxkJYFKsBSheKw6ME31GsS7UD9ErnmVrspQr8kjfnsaDQq1C",
  "key41": "2rm5cxjCzmeRR9dmxQ3KdrbejgfeuKCSeN2aqVqq2mb2DCoKVt27aUMPrnWthSr9Mvc1c9X4kiSbvQFXUCVuPq5h"
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
