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
    "5e2b4f9hVzBmoiLpVp4UdbjSKT4MwD1FLmrqFBzjPjcVoKHJkiX5gLx38m8oyKgb19QU3f7G3EJTmC6mDUSY7pNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gLMgZfUJbTR1SEwMUqkNTAeYgCTKFNpwF5Z1WFP1BuqtSVkbEHzqW7dTPfxYCXVZHWdFQC3cAGg2meo3g6XqvVJ",
  "key1": "2Rsqofn7L7WeSD3aQoLgihSMav4ZSNwGwiSERCUYqqLWEv47vPP5h1CdgtQD8Ehs5RuxT44CyUigKkarazYV3UUJ",
  "key2": "5DgmQ6gUfA7dXhERZNnm37yqfUiPrj6ZdtSi3ie6vChByPUsRLQuKueMv8etwi5sgwtzYUa2tjoZRap9TjGm8EFb",
  "key3": "3wB1JT7F9iZsAKftaHQXjTp23hMWXA7RAYwLSDytq7f3kt4FsvNyEc6LRDPhzq2VnkzkhuR25H21pioVA6Q56GUV",
  "key4": "38hT9LE6c2wfn71TxAbTd1xNj31VHpA6KDt51UaxzDtuc6cE9msZKGtAury6d7JRP8dxvf8NU2CjkBTf3VwKgDya",
  "key5": "3ZbUfDoRNaV4YrZhUu7CL34AyAEKuPPtgf8JTqn3E7bxhesEHGNDoxsAKnttCgro6i6kZpZXdhAGJM8sM8ZJ9Ndx",
  "key6": "33B8y2wTzdDGcQ3kUV5pStGojmGHiMqQEWtUmAsQGQmsZVZgsNBf1JhctYBfFd9DFyiXKRt9bB47HfGnDugmsBt3",
  "key7": "294BdXWkUWSh2kdn8ZNXoQ4anRrmPfG1p9Su6z6Lgf8U6wC6EC5Z2gcur2frbAa2tqyMKn9crSZrDsPe1KZdevz4",
  "key8": "2MqVSE1efwykLGDiPFLVv1Qu5dqZZGAmR8B2X5V7Sxa3CgkzPa5Zrms7La3tvWGjyACuWyYVZCWRu3tKF7dxLrFn",
  "key9": "46jnTL2hnQi5kE79W4rZvQ8qtR9raohst2APzkj5XPZVXo4RRxLipZSmhYSAVDuAcjWTYM3Yvs4uvfhqfk3zMXPB",
  "key10": "4BajiQ4MkBjUHWbXGVf3xJ9Xj1biFmxuCVq5mCFzdjhsRjr6t1nAMxwQdXNinsv5sH48DTL1XBVt1xu5LbiFCDzn",
  "key11": "67mdHmQdfS2Gw7iN99YLRA142BaRETV826xohEpSR64NkwZo7VgmdAs4T3PMTxfNfCqGGhNZpLxto3u7HgniSyH5",
  "key12": "29RRqjag8zEBHdmJgDawWFtkzYKgE3ViMioPxFYRPXH3vpk9rp72vofRkyLwxEaV7R6V5ddmW9grasWA2iD6fXZQ",
  "key13": "66Dw2PWbbopw4V8wKCbUJCQ6zyo5495WMu5YYfEHc9bKvbL2g5hbucsu64ohjQua3uRh7XBCjzL7cjqDEuotGuh7",
  "key14": "4uZi7fgzeBMqJLeqs9gMuZQafYnhCnN23fBhUXGY4z3TeZDWAc2tnMvcVWrUrhoyDKNSrbsbRTRjJ1o57HjRhZAK",
  "key15": "4685MnRDE7CqKxNKKrAfUNg7zwAZ6Ni5giXzDE4XtBf6CVe6hTE65LhWJuPYqxNTYbQWfhJWsVh4FEN3jv3ejWHN",
  "key16": "2gSSQ1zc43ztaCcj1R9RQUHuo2auLpYzzzqXJGxhL2UyCMFBDjRhkp7whiPiJRNPEPbf2UmVRvpTib7UnKqhTuRs",
  "key17": "zrPnKApZGUs51id1Yy2DQmKux95K79epr7joTGfQgYFG6u5McQCcCBbgDpC9ZZQkVQUSe2dAq1XBgA5SPN38xGt",
  "key18": "4tw3CKLKDmyLLL7mg8tZoWa6GxUnmCZKZiHS7ekomBPCDHFGkDtsZ89E8Am8xqD7DHCFD4X3LX55cHTBKhWu7DUP",
  "key19": "45kcDChXk4WoJFG8HswTjTSxsYBRXxvUQT43pD4KM9HGSZMUxrZeDXGU6HTxqFiTSnJihgLajXmEJxbYkdtVVYBL",
  "key20": "jjxjx7A7resJyivkRuowTuyqB2ZVDrmH4KVBByShczuvrXSGVmoWaVd2igFatU7yVov8MjRrqaNQ1TEJvwwJ58b",
  "key21": "2B8HFqBkVUEE9LXbcYqVUirPL5y6CqsAU9sLrDPBTK1EFi5KXB3NhNU1WtoTvwLfRY6CJ7AEcNyYLp6XdRMRq8d2",
  "key22": "4YbVZzivEKMqPuEaGEVPwGZzLwsxVXBhWo2eezSNgvYyvzVWjLeZjx9W5MgAPsTm4nGcKuSHS7sBsyRyJSMGF5xk",
  "key23": "4UpSGBjZB15Yf8q12qsCHgxAfqtGAQ4hhsrYMmjZKAto3j4tCJdmjK8vL2P6TUS5JXedQm5Ye3QtfecqAwFXqmBY",
  "key24": "BQctyZo5FUYPq3LCdvZJAVrn4dA1m9Zp4BHvmqrYbfkHDqDkpuGwGn185xgwaSiLz4y1asGC9sVTGYk32fgshzV",
  "key25": "22AJB7XbmQFNc6yR6QcSV7qWze7N4AWfBzPvfrypL2QbF2e6ukFNEdeSmrVUss41VK3MCjZkbFRdic8fXagUK5ei",
  "key26": "3HHq1tJ8AebBtSd5nh9ezxw54iGFyEVRMHWCWajSSYRVCC9ERkeNGztKybsFquEnaxjn1aQYtRgjsJd6hTKcNkZj",
  "key27": "4HVykoaa48pgPPvkmhbUhkzFptjLLzzFP1gW61rxxxUTBPHUN5z6eGYzHiqC3nT132TGurEqCYaVHdwdvorbhko3",
  "key28": "5rwgcahS2rYpzurF2FvD8MFtrhnzkYpov16WTmApv8jSmXCtLGT8pSh4FC4oS8cAtmjvq3KgXJez52Th7MpGkuog",
  "key29": "2JdSQUwofjjzchtEcjUYZQXp9nmnwmvFvjYQuyJsGVDecdy2SVoyTardxSaSTBdypALo9hnSCg1xZjqytdxJMQ3q",
  "key30": "3HsMyWKMdQZjYQT2uRzwM7FWBkTQcnJuNy45k6UmqcdKX2Sqq2AUqCgEuhqKuwxyvHqi3hkS7rSMbRanDQwYQc39"
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
