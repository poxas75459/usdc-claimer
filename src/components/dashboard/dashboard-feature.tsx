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
    "2LUrE7rndWsN2oVzqrvr8Qq4ZyBLfvvtSQSPMDro3N9odU1Suro5sth4WeVEPPcEKZorrgeHugXDmiKH3PNEFXy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZV2egQiHtcYTm5uuVuKp81VTUyGm6nWzbKPLsL9d4NSzPacXSCzxFzfgJ4BnBSgWib2FmgY6qa9HSxrvQwxTop",
  "key1": "4yXP6Y113Hx8Q36hzFrSuV88NgDohNgcXdBwq9fTLh2xGaSc7iZ9ForM3KYeBVACkYMFdKqKEbFyjXSdbZENiwa6",
  "key2": "31873GcSXiEunf1xMuBCuqeBJcWsrN6tKe5EGDNSAb6b57jx3WR4CkY5TDkzH5uFTud6nsxrZuYDTan5jAZsDy9o",
  "key3": "4Hb6bDY1bJyHPpUkavRuBz3j49qAjcG8D9LJR7dNxnyGtzufkaR1v1iMerBuUzA8fGPP38io2HMVEoFZTvjDZSG8",
  "key4": "4h6Jf1mQ9DuB5PLQhaFMd1qv8mDMExxmkt925q94bASbSTgdaKhQZtMbqdWVZKpEdAihDr423NCvp6poQhAVD1Ke",
  "key5": "36LCqrHwM9svUcA25PrA77B5mRjYK5ZeVV4iXXXu7aNj8HALrutFfbyPLeYc5VZpVaJXw9Z5v2WK1jQ8TmHrcoqq",
  "key6": "8VUMhm9pCKTzAnqS6nRYXcFyrr4pf7ww6Ef582MzX3T4Q7hUeBkDUH4GdmFR2ow4YkeKD9EykvuFJzkNdAehXGv",
  "key7": "5ATWn79XyrGprkLF7xpbTcetkqmyQxCj3LTzoTrYmmh3C3udnZk198oxfUzqm6DLYjTGYSWr7xUzoDkjY7Ajnvab",
  "key8": "1ND5oRJTfuk5LchA51gzLPsyG3T4dvBJinU15tCQ7CXmL6ghp115CC43ZGYgRtuUqTHTJ7HyKYsTUyUZf7nsA9d",
  "key9": "4A539di8tUg8dHyy8A2SEUUKkjGaYFxZhes6SMqHeLvpm2SBVyXHmMPi7TcmbUDzUfAWyphYvmJfv2cB5akUKWkU",
  "key10": "4qu8edXSK3G3RRHzoAR7azb6rtyPLLivfZiCZXGYYXY7ZrygiQ6EvccyYGa26HANhpvpd4TopU6RNu69m9SYWbev",
  "key11": "2VTgf55XAAwHf1RsnXVzopq2AJ1jnRND6KP39TasGQaSMqHXktspYcmoPxUkWbPsYfXAdd7YFDpHmZ265yRvNjMd",
  "key12": "4uJt6VW7mzV1upC9ZRoKW9J6f1odNm8oBb6586oDZ4jVeE6fDyo6mQNJQp4hCFeF2CGRdTodq8M1JCNRS7NFGpXH",
  "key13": "5SbsJ6Q6vskynfdsb4guK5pc6RvAXVJPvgqCB8VSLp6JMzaxzj8DFyud7Fo8eZGByRciA4DcuzbwN73T1rFtF7Q1",
  "key14": "oQV54Le8HBKY8Yra7gEjh66v5wxY6QDKsyzCCG9cmPiiqpiAdkcg5LgpMrFCtjyNqwsxWCsYgzLDrfZmExxkw5t",
  "key15": "3hkYupFXNfy9AkPx9gFGFqDksd1qncssjGearF9WGED7p4xrqhFdde94HDSmgVhe9u8LNpPVJh579nBjTY7gxbFN",
  "key16": "4YC7DZPgvtYrnV9moT8WvQvJVq1h8c5gNo4vrEY3NXeFuqhvmszu8hFs6xufqQgs4xmFAsnvFrBUF3PdHPoNmNA4",
  "key17": "6FiJhui71Nhq6Cn2gLwCd5WbZvivYtzsWSBNwYF1RbWM8EiAyeV2p3RhRZMMSe7Vbib8v3TrtEBD21kaa8jHQPX",
  "key18": "3PLxFJA5KtwSui6uqJ41PBsAhAzneXVUyDYhro5fVn7Ugbg6xfkELu8KJX7Vp4vfu65FZ1eF8eUk7K67YuREsJQ5",
  "key19": "2hJ2WbDsrtU3rFcJPBmSVctf3KsxXpZuiG5vRUEKs6wVX2gJ2Tht9h2ZxCGqAWfyXMQjuH99DzgedkNUnRKjYrpp",
  "key20": "39ErY7bBzZWyj5zFUPDoawQK1k1wZinFmqVupKeHek688434Coo5FrJRkDu1PHnRyyFKkDzXqXLjUNZ3sUBaT7MX",
  "key21": "3ugyW67Sq4vszbTsSsrkmXWbsAYR79DVYf713B8J4cs95ScWT9GKSMRDksvsxtNivGuAUmEGwhE55ez3NG8KKK8U",
  "key22": "5b1KJnmFjPBcqCaNjHa1ZS8XYcr9LV4hJa75dXimXJoDuycp9PUAEzTj6YUDx6dUUT4ojzCEqgegxp6TkjrYGSV7",
  "key23": "vQucLwmZMy5oXtqXNqkfY7tcfqxxAER5xufgnzVDKdKRfzfFtiV6hCzahmo1NzPRpWKDrF7sjnJJvGt9eLcU1X9",
  "key24": "3tJMFU1Ae8uj3EmbWyTEM9Q7yrQQasd4V34bxPqvvS64xxD2gTCLmZjWyHXYhVq2q42baCWeEksinUpC8wNWrrQA",
  "key25": "3eWdmsg1svhjVK6kwfRfXhWCW5peHCnLb1hpwg7ZUW7q8coxy68nxqw23tHNDQagYZhnAyj16fvDkxXwJJtQbkr9",
  "key26": "3hDmiXXH7LgHgb29ssUNXnA6wnyxg6X5S4DZfRg1LPWttqWYkFF13E4mnni74eXYGKRLxCzELZwxAGNVbPSKDqHu",
  "key27": "4N92MqXsQHKAbs3hucDZggzWYHqvBsg3bqUk6hszaMcWbMDXdCdYdfAjUmKMRANBkUCvkmQjP2R5eDfdtNgV9R1a",
  "key28": "4GbiMWWeTEy6BLR5X14BCWaJj98K3DGBHNQhjoPrp4uhVDbGTKYSFhvF7u5d94yFZHJ7FDxDKnuKEt9yusSFb8uH",
  "key29": "5itZqpDqKyL6nrqC71whHQqYoBJCQzk62weYUmhvjHoA2C7hJNoFnhyG2KVov7f5ugj6HPbAfXBrhzfhhVJ3uNpD",
  "key30": "24Y83ufzoFPwfdPyhmofZjuVHZiGfogtpbvgn7wsAy1YZRQxEfvK4ecW74Ef7zrvWPBLNxVPVWXJskDHVTWFAbiL",
  "key31": "5aYToQpc8f7ouTCCrDQKxK8n2Rx8RmYhFjdfkVzbcReHZAuCES2jawWDTLL9LSPAiEifyctSfTnbCzKpdmHTxDjA",
  "key32": "4xUfNWZrEfrHQngvRUPttktdFqJc8Vy929KsZaLu6ZQcbywdfM6JciC3nt1envxjHvWyBvfPHsbqJZudUexarxiR",
  "key33": "2tPRnzGLb7RyvMrd58YYxx4ns6nnNChsNJzTZNdnnfvgZkWC7sCRE5RcHzzowey9VyQ8xfvxV7hkHmyXLDFXn4NV",
  "key34": "7rkSUSw4FeWVLdjF1fpnCBVh3Fkr2frLcBdZUj6TMtnxMecHRvUzUVyUSNYEG54EVse1GAzoAoNecZGBJxgoEv4",
  "key35": "4KzghNaXSufWiG8875b74omxHhe1fptPgV7p7nyVgWQ2vTWxbhco9iCXeBEaY67orb81KePq49HY7ZtJNPKDEchE",
  "key36": "hUpabXbCzc8cGgegG9rWjqNkeJvkPQixjiqEdJihwbxk55KATX7xMegHCykfMbo7ZU3jwNZ3NVJH7etK8memMQa",
  "key37": "2GAFgUYNPa86TGUA7EGcGDu3wre81jyF7AuWQ4gsD8FSLUpsf5EpDJSspyyUmtp9AQY7WHVDYU4E9S6q5P5QKtW5",
  "key38": "58Za2sg9DYdUqdWPZSZUYWLZb7duBNB3mhqDfdRXxxH1LHuTHMQN4sAEEC2pFY53RuJCu9Dvu5LMndBTMhSSmN6h"
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
