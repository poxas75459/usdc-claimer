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
    "2EYseqjVKm7EV3jsf7K2xL878b3tBKrdnnGg9AziMTYNKsWqJ8Fqa1MQuEt7GeJ4KZ7wyegKuxB6ZbFkHjJ19wKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwJgDZT63HWduG55kYgMyTJACboCSqYb8Uymx1s9L2F59GPmBaXnugFF2JjVLqbTbe1BMbfQxfPTiGJKMZnS2yg",
  "key1": "4zrr3AaeUHp2iisGa3XooC8zJVNn98AmPxkBLSEumUWd7ajTxidDcDPythw5tsXoPFAMefkA9zPHM5pDBMZKXCxU",
  "key2": "4rkJ1zruC8MUXFzAv7ex38k2LukmqNLJsrWmoguLR8YsFXzZrc5dde5o4KXpAqdod9XMvXeMEENPK61hsnZQwENq",
  "key3": "5W28mSiba8oSSZZY8gkYGYeBn7S9GeKsjmg78CojJG2uzG4tM1KCAHh9XWu4P5N8XRyJ9h1jDn8tQS6p1iUpG1c8",
  "key4": "26dPyBWSm83nnkEDyqmGBZVi9SDdn8R7iWLaoifDwGwAnuSAvy6rGLyrV9pDanf92X3jMb5e4qstw1ynwPdjJmEE",
  "key5": "4knjVy5gFMTNwCtaokXmpWE3TQZwzNfYjTr4zZcabeAHUv6VBKZy6uK77v7RzVBy4jrsYQPrEFrsfdgRvNfG8v51",
  "key6": "2GrHiH9pb6QSMqk3b7DdswGXnL3XSuDvkipMq36sUaZwXNBLiaLiYsXns2VfyiXVRCqiMeLdTPEcWnBhgvbeemYu",
  "key7": "FBuz6r4ZRzMZB8b2JwnS9Dh7Vd7jDN1wcCoKcTVRBmnPX6wpUCVCtHtVLxMEW22k89z2vP2X1q2caZcUm3XJ6wA",
  "key8": "3KHEuCYkYNMzJoeqQeu6V7bdEieYiyrLDBcfpvfYSkYCPpwHnhNKgmSZba7Vs6ouYiesLwCxdWMQxbuDACLCiXKe",
  "key9": "2P7tZNxmqKE4NnwJuxbabD3DRbvKwnbi3mjM26Cna6g4swXvQ9Yzpw7pYTJv8cn8FT3aBZ1dhyVkHrQAMXwCiRiV",
  "key10": "53Gq5FKuC2zTtbzGKyHZumCnEpxkX1xG9mQf8wERVVjvMtYL1PgPkwtwhxAzdbP95Nh8bapHSe1X9uUhDTY7he9S",
  "key11": "XUoDKCQJpZYSToWB7hREMLuo44h6dbY5ZoE8HMo1QGKNUxNiGG5YkfGKKRh2iSABY9mHTCHJHhoRzqcFenh4C3A",
  "key12": "46cTwW9MujdjAzvoPJ2mM3iMAo1ZrSXCV3LifRJ4Yj6sd74yNnfCGJCnNsFed5YxCqn1EKkSBuAg43SMutDtajZ2",
  "key13": "5xR9Y4M8YgRA8EKRTaTACPnKXCJoGr3DGwMUm5CSFBFbPXR1AB1uFtHCvZHArJNBNXsMebwzQGZPb7BRZKFXimwP",
  "key14": "MsHDuwnLfzAB4XSdVH77jioUqRJe1rjRsQS9Tt3mFSQCb1VJchQZz61MNSnct8sdEKgztFsUgEtfdqj3FCYqZHM",
  "key15": "2PkYmk6hMtRg1XYvfRVAcpuCt1rGVMSgrTbE2naW8FP8a9FzthpcrQg29rsuAy9a52NAKLQqW7LcoHHiGK6ieYQU",
  "key16": "g2EToj9hpx51iVcot3jpHKac4qzejJWrpBJWdsxSub5Lo6UAXa3V2pLTUMHFBuXJdB7hsJwW1TppkwEvHGrxg4S",
  "key17": "5xKTy1GvWKgaAiwSitGcFrhjijeGdKBzjUKnhpQRF6cxT9JZxuL7bZDFd9SWvXzANQp2AXX2CLXEnscDWjEWXaVk",
  "key18": "58z5xriXYTq5KG7hNTXFvnNTzyoGNgXaSU37mXySisG3Jr3sDpu5uibEyMTWNkC3SXL2RNEDjrrrgmi7taiCbLpT",
  "key19": "4SYLZQT4XS4shnQJZZkMYgEN1EgjryvTGCoKGvVt2hYHtHnYLhDMMK28uu5MkCu85gs4GUyHDWm3WrcD4k5Csu4y",
  "key20": "2c1oDDMjSo88sGk9xfzBD5K29JuCnhT3kfLhPRJYqnJD4JRdrMvisK3bXZdDYLKmVb6ARyYPBR9LxR5M11R6yPjv",
  "key21": "5Gc5JyU19HbvZiSsT34fv8AmEgvicMavTBHvWLHjEiBehFoHDzPwZUy5gEgRn2EYkA86E8ZgYKbnyGnxCvMSu5nZ",
  "key22": "25AiwC8GuF67SCBPyTCH74MAKgjo19dRbwNSVhxy8cbxKV24vi3DQQNpAukbcZy25r7nYmuPMu7M4Y5zVb6Fiidm",
  "key23": "5C4o38ETM5yNNvxGmHdMmMdmFAmHsJ27ukveKNgTj3F7Vywu4sHUUCxmE2aNr4Z2GSmTryiAQATcJ2KbefYHz8r9",
  "key24": "2zkhNw5JRuHS1c1V92DRt9xTwTzkn2GXncwofw97wWJ5hZeBY3bt6XFX2QgSyPjmb4nrF3nnyBL4fLkHvuh9QtdZ",
  "key25": "49aZhahbejqFFFGnNEeTJHmxSKuD2MeqX75mhKWFrBvwMqEv2FBYxSgHYnhXXywWUMkB8nJRLoKzQGaYva9m53sz",
  "key26": "5LNJcphxpjM1MJJMBTxEpEXuwDJTVC67wGZQXZrEDPd9tCFDzUvNnMzjGSGDXsuHUmKR6wxdbPvpr7pXNEmYeNfw",
  "key27": "5a947ew2vDnNJZ4SdJEuAQ5EvFAF9Zsu6PwPtYqZvf5kkxJWGhB3MoLfPFvGheopsxAEWBhV3iHKajiZrRtN4hv5",
  "key28": "XmmB1jE2xw7TciTTyfXb9cPayCbxKi3m4kP68TzC6gxeKThN8ZJsySFd913D41CJEBiABZseiLpqPa9cMv348jc",
  "key29": "4t8n6kqBPcoBLgGqpCAcucfz5z7KPmhKxQjTHwaA54fqDxhSHhHm1VZUHYaiRyaTJ9bey6u4V5qRtrqwvhHr3gPx",
  "key30": "MCFtLdQDH9qQfUvsr2Se2mVj35bPkYnncPVg6VxhhSC1HJ7cxwDzEwF8StkxGUsFJuZ2y7BGTP75NUdm3aWatZo",
  "key31": "3QKCk2FVvHcc7uKqCunhv3roBpCHPHRnWEB1WGcwu1XRntNe2LF6b5ruSp62LuQ5QSSrpknhT1jgeHPb2B3uX7QU"
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
