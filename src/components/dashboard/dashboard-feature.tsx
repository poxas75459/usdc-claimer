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
    "2aicRNX3AYk5uBBhMpUyQzhhuACqp856CTZHthr3MGT5MMsnaTAhXeydDHjYBDAZj9rRDDba1Mej347MhAH3cxzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqZw5biDVqmj6A5Kxjz1gxhC7cZWm8p2wyeHxwW42JPsSbqsfXioq6Di2tYuc8Ex7avQCt1Y4jVbXfKcMDdkjs1",
  "key1": "35NhnffcdPTy9DqiCekfV4MEHmQNoUr5mC2J3LEa3uCoYreDY32XYfVko4mjbmKSeRaDogbPJmk97RHCAVw2i7iN",
  "key2": "5yy5N941crevVMV12NDdRNdZguF5hoaFUy4UHxvTJxE66Yata396t4PxXTfrzyKWuEH6VfettYSZ15Y3q5xbCsE9",
  "key3": "8YJ4GDZado2CSCL3KQEC8wGAy8jCVd9D15K7F95nwY4fSGLj14ghJF4XkZs3X9ir6RSwVoRYa9aU7X9iXaDRwgz",
  "key4": "3y1g4YdUQ6FFg5rhdgTCxmV2J88dqtsJvqEY2GEndh1wbJX3Kh7Yq2Ya9wwdSphHBVCYCFYMpmEen7uCz6g4W4TJ",
  "key5": "3YmXvcobMXuM2QtnhHujjgi5XpsKD4jztJ4qsCWX5Nk6XtJW66WCASnPZ2CKi9YURGdJTDVNLRv4Dbs5XKvVnJ7E",
  "key6": "5zYMANiAM3vYfdbmb1jFXqE6UAwyEwEtrGMTwaCeCHheG454BHXwP9xPPHahoUfvEyLZz3hKqiFqtWxyuJGhBsZm",
  "key7": "3LEuvdX9RfcvHtGRUSASVPBGACP28oeQg6TWfsD43vG2xgSYdpgVwrnPa3oz94XJZYNeB783ZX1DYAvRTfXFfHb1",
  "key8": "526rxJWddPKJMaDX9MvEeN4p3EHpz7CpNPF7ZeTxRPGhWBKw71iV2udyANHfkYyEZA3jJau3N1q1nfoT1hB9F2ts",
  "key9": "4g69Y9WbQUH7mUY1t5VUyiE941S16QaWLm58eh1FETMmF67XrY8JhBzTohUWTi3RRMRDr8d6zcasVxkCaeRzvnsh",
  "key10": "5PtuBwQ3jWAutkRPKFnWV8JgArjyKDKdbhs3weZsRMxe472AshK5QHzXnQBtyCw7hFwPvJiKhavmZWug5Vp6WaGn",
  "key11": "5wLAWsND3rKp9RZqAMSMFKDftjKYXifasSsSe7bqNB3btiEoG5gvQo7wuczC4m1yqbBjU2TF4KRmFWRNh3EQVkNn",
  "key12": "2NAnyv3rBE8ysf2gi6MQrr2JxVDwZJ6XnfL5fMoYVCPbMu6rKC5m5qgaCmjdug3qyoe94NHR3L7RD8e95CMhfoQL",
  "key13": "2QjWESqb8UdbBszjz2duF1k44diozuS97JgJewRgFmdoPjBFbXei6AKNZxpHeS5PhHD4ofrHkFHWVQUumFvJ4fYz",
  "key14": "aNw2576DVMNTXZVXSiW2HocqVM1LPYhhJYfQPJDe5fCxhUsin4wjJ1b3zYLD6FRZbWCVx1xX3ER1CEwiivmTx1K",
  "key15": "3U38pxszCg2iB5CFEYqJazqBLrak3ZMr4xS2SNnAZ3xqjL3BypwZrMButErGmTcjfiz2RbQWMXrsPno5PCHBcyiW",
  "key16": "3EVYMU1dJu2jLZX5rLXQxQTmQ7y98NKR5CCJJfb72DjZtWBGgoyPPWTgsiNFtE8kKyiXTQdRoKXnUcafQVmTzqXw",
  "key17": "5UwBf2i3pdLXpu4amKVRaFR2RjJTVRMMgG3U3rG5VJqZhy45BsxKGhksPGfFcm2ejKehDxkAFa5aJryvEf1VWFDu",
  "key18": "LEC5RkPc8FvB8NUAU2RMzn2bkdKtBCDTcHRvqwhhXWwPLSvhNYuS1GRu7Jj6po7nZ2eJuVFQXkPkTBgiGkfTcDg",
  "key19": "4qfq1GLMBSFJjTt4SyT83QcB4Sbo75atY6Y2mzhunb2ZjhEdqZG1zzTb2CUcp9eFwKGCihuXGdfcqna8Xw8rLJN4",
  "key20": "UBXtviwRnoGgibfxqnCE6mZkzoe8PeA8iTYBecxwLKTFr4wLVUDXU1h4kZTEZtmidyA6RvXPHYewqJwXrNL8J7m",
  "key21": "2yPVRsrvBRCfDnqCxVyyyMt9EPjxhsHz5Nqs2U6DKseeyPhHZPwjphajj1kH8K3nc2Rmxw9N5kJQNJftsFSEVdgh",
  "key22": "P5YmPuSaZsjz4xnJaTLqT5nbXWWz7AufMUpbS4KmThS4brAKUKfXH8ie9AtDpR41aToGeKAuT2k4rD2K18R2y8X",
  "key23": "GrW8zkRUowU8HtawJgpw37hs4J6S9eJShW6mMX9QM2q5XQu13jRmgyG7mYD4tMf3jQS2ZNrswZRsowj3Wm1A8BY",
  "key24": "2eepmvYGjTHBkysXBLzfA5ieZ1TUEstq75UrnjvtTiXYMaWe3wxvSKrHXkH47ydrkQsogQnjzJnuEuQyKYMJAcFD",
  "key25": "4XA8pFmN6ALC47CkUv26rkedK2SPkwVG21yxSxWqBaSfid4axw4PvvnHUuBMzkbY8cB3ntNC8JdGYWBiU8pLTvcf",
  "key26": "5gsjuM7eUY9G2cWXJsSn3qXdgnypemWydxcpWafYMDa5Ke6Ftxeor31ZGGitVxhzMJY9xeUGRi5ZQKyj3T5hnCpG",
  "key27": "67NfwivvHm2vBx8WjDxTgF5iNzUTkQDQ85ucELPRYnJKprLHZQEy33kCymMwZSqiTm9QdKATfM7vbtYXJDvshUXq",
  "key28": "4f96WVUGkwiCaf4rHZPxKvMvTWxqLxQC4kEGL1KDZxqyY2pJ6YipvwxwJm9Q8PHJBvgAYtKXAxTKKAKd2wqN3m8J",
  "key29": "5B4qSKnJ5MjYba9fR29eAT2GsDxL8cJqY4w19UwBA41zcdVfadDfomNsUCnEFP9jT3atae8heDWMW1rojuSGqhKJ",
  "key30": "4dFbbF4tLaQFjtPYYWGDGxJdKis4HXcRuyDYPLswt2iHyjZxbLZmSTHpkkM2YNmdqc4DD2cmG6QGfrmhwuJKnPWt",
  "key31": "3DreFpAMhEexQz5jjr9c5VDKd4Zam32ydEoXFxHk4NecBff2einyZtSRGkWSg4hSihfbdQJP4eQixAyyC2U5k4qD",
  "key32": "5MrHcKCw6pe86WquL67EBdyJsAVLHwuAC19hUfmbXrtrs47dLWJW4ugft4RrdpeU9E55MTFzB8fdBitJXJqi5cDC",
  "key33": "4QiRYJpY49hCxTQcyqiYjtHUkSrJHQU6KLkjCzApriDbzb8jLPke59qZFKGDXX4yjsHjXA6NS1SHqiwpHMVrDXVW",
  "key34": "2Zh3TGZTjiVrUcMXGVwCxjWbGcjP1wZdA8ovffLbyD4g6Sq5NBuWuGNjuUusvgLKZjRvNtmNGz3qX1yR3X1xgvgB",
  "key35": "4iMJkpUC2uz61kafixS4QXbqaWeCWVTpiv7Ha3BzKxoriopZRG86G3vDL9C8UUDddEM1sbKvjA33LdGf1bscFhbN",
  "key36": "48QXgjdaxUPJobaM9SKKAKti7rv5kaHmBoErtt6BNZU9gMCgRKEarsNKeEHaWHgXnpJN9SyMoZfqajwDfyjQsUqq",
  "key37": "5HEGZHCgFnpt4WGydfPNxzqUyQSLqMgwiwRVymDkyzmAoLgUzxjhN2zMQNWeeXeGH1NyPZibz7cwsYshFTh5m1AF",
  "key38": "2WgiH3y1y3y8ywwnVS7aVkB7foJWMqjGdUQkYDfQTRTTz9xAZYAfqEZS6aM9b3BF12V8zZXLahrFVCHtBVpEzxDU",
  "key39": "2NWoiU6ozhAytuqnMuNHx6UXSXxScuf27KUYwA7c8QoeGQB7RA9ripTZe8r8hDasba7bDaFacSwPi5zgJE4cSEuA",
  "key40": "5jteWXiprm623eSdhwrAgdZj9zBkVeuobaasiCJE1uTJjLQ7D94BLehbScoecYF3AGa2RiHYXPHbm5BepzzDfxN9",
  "key41": "Bxf2vKzNMQisJQFXxoVS9LbytHNmgopDRyLghycfZVe3LJLgXoE4bfLALZN77RUj1EFkVHFYNQtLkXjq8M6iya6",
  "key42": "39rYQcpNxdDPyoESCRSGgCHXXmYMjm6Pn6H6hNKNqBYXuTbwJRufPPtzbYdKEQbNeej2tNv9y7Y1i8jhBdtHNYcS",
  "key43": "5skmKFuhN6fP3FrJt9WP2VgmPtVNc5M6ScjjsCy83wDFgnJg7yygV7HxWXHJK3JMVeNPpRQPBpctJ49uqyFBijq5"
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
