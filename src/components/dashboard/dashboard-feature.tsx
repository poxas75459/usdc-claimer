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
    "5dZVwW19dddm69vmi6ZuK6xPE6ZrgE4XFjMxKyivqhFa2aLoGrRk1yw9X5koyhxfEGDexE8CVtXCxc4MovYmoEAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1rnvgrC14bJaNqzRHAx19weYcX2R3sskFzCUkfxMKq3qNBwK4kQAoqtkYtC5nH5g37McCDTDHoi6ZZ12g6jTJs",
  "key1": "3mv6wrCQy4ApLJkp1VjkxAgrhkXsudERdZUARhKnBGwWP1hQPYkZgJYfgmNjhGaAThGMCyNcyzYsemBiqJrTDKC3",
  "key2": "3C7i9tGTJpWdB45hyqJh7gb5WySXwbNKusfqQ5eQ7E2Mp29APrNL9rmZ4CbKvzMGiunn8Wog9d491bCnxdsAZcxu",
  "key3": "4RUMxjRATCH1RNmfBtTDP67ey6dmkQ7pHxB6fVPX19Cmgaaqsp987GAX95Eg2Ppmqcq1N8R4bS3ZJJweBSARh1oW",
  "key4": "my6Q5jt1Ur1JvCFLqQ2BepCcpXWpeuKAZHWCJMmTHYiciQhixicbYcqH4KL4k3fXdGQru94j5F9T4hYLZa8QhhU",
  "key5": "2cqiJYkZFgUcpYQWdk4h9mHm4V6GkMyWz3gxfeQ6nYvUhEFZ2UAPpP9oM7S5WFMx2ATHs2neXsrieimz7TBc1Vi7",
  "key6": "ZrnpjS3GGfafoc89Hqm1XMNvG2uqVjE6mbSqkTZoDcJr8es9it4ZtwmWYBSDmXE2TVt8rcHdm1AfWpHaSWfmFK6",
  "key7": "2fV6SBjRjgpQvm4JSDVaH7p1hynHxsKvUSw8yqYCtwnnVE7opQh2RUJktVYgMbqk46ZbS4dU8Hp7kHRhskW1KAGZ",
  "key8": "3SDtAhdCt7pZ5CXrLatF9hz8ssvErvsAvRrZQ9byS5dzzujFAdvHDHfKageUrSL6CDbmBGkBZ5KDAD43Kgj6W7FN",
  "key9": "2ePecQkqHZgtWGEVthVKk3o8Hz4uoiPfSsmZe98xZCynkKckqfRwLWGWR9LvEzZfjyJ59wUDcqzwMkPEWVWGJM6s",
  "key10": "MrkJAw81vXzxbvuhqmAUHD5fBLPRonXq6RKVdTMpRN4sjcU1pddJzAU6F74HqfTpNXJapQEfg48gsjPmaaX5XEB",
  "key11": "52yjPAVs7CvNKDRhG6Xbnm1vtdx4CxeFvQKAnXWtfWRg8QAMYzLghtLMfyTk2rnDGai2FN4LrhKx3jSeKgp7NieN",
  "key12": "5ENTzkZensqiCwNL4iE2YGAZUWF7R4QiHRRpjoGzZpDL2mXACi3ycFs6EDKw3rZgyV5hgskz9C7uSYHfj6AZvKuZ",
  "key13": "LfKKr6RtG1XAZCtYC5vaPktvLod74sTXfQ7eNg44KKGym98K2hE9kGnUttyXtUmsCfyZseMLuDhtjfKgseGQg2V",
  "key14": "59VWajBduYegtafW44p9GKSxDYnL1H1qK9EqRouZzfftsAzqtsnAdoo7ounFSppjSeH52m3NZXFKuK8xTE8vG4cm",
  "key15": "3USHZJfp1sqg7YSjn1w8ryCyiKRn6zk2yQ5QapVQjiLhQ3CPRVNFUtVAfWA7amFhLMCbtLPcSFUx6k4EY3n8gTxy",
  "key16": "4A1kitHg51SHNQDBhwENn32K7YvHHyqLw2m7Z58cGLnYxQwbSqjAendkiV3wuzdYDAgq6smadSfTShnWvcE87ioe",
  "key17": "5K1nuGsdBqjFfSAqiQTFgREpSNkuMnuuM35iP3h95jjgMjD98yZQYTfkz9pCowjUdXFtVKGuSFe472RbLWddFrLL",
  "key18": "5fdw4tXjqAGjbEMRGttEHLkQuAC4jNP1pHL1T7R5JqcVcjgGrKTk7PTVj8Pe57sBLuYQS6YFD87qwta6pbw18h9Z",
  "key19": "33AY3kmr67487NiViYnvmHg7hMWiigsTD4NmgXDpRxs17NdSi932S6NnXwMu8Wf7RJ1JhjfreFYkjCAvCNB9LgK9",
  "key20": "J46PxJngJLEF61CqrF9XaLwU2p6buJ2j4TT8XAt5E3icnLWdApWWu6xHnwDAJ5HJeoYA9H7kFZNojBJS2p8JJEX",
  "key21": "4vxjnp4bcCEdPCHi1HC5GYUAbGhgpykSeykt7Li9wQRndW5Dt11uFJdYRvu98q3267wwvXG1CXvbupF22hZq5zxq",
  "key22": "32zMgg4Y4gCjsg5RiHLhyKahauiRHScqxcEAhD8G61C9HpZMv1gUpeCCpFfUxXfis8Nay8ithe7oLdfDKxXFBim4",
  "key23": "4nnZqTJuxDiNtwHLys1x3sprcbHDmvpS6H2rWpvs2n133yNDHWDbPvMyxTfkTRzyertrWcoboqxzpsYrcxtmnUgp",
  "key24": "4phCe9pKioBh72ZcGxS7RgzLQZVZDJWm347aJcrCK4HNPko99teBbbHZ2KUXe2W7M9LmsApCHxDHU5FNRQETiUUp",
  "key25": "3wfY9HvCCp1mtL8z5xECCMKZpkQ3zA4XG1K8oSsPqZLAjXXHc9kmcdcSP1rpaqihjwE9nVxQKTrRCWN3VqTFGRR",
  "key26": "45fvdHT7riz1D42zbQsgWiwkTH1PDtr89Kwb3JNJ2MtFtX84Q2i8sof7i9u6FvAdtvKUJPgAhyJ45KDXrL9qwr3P",
  "key27": "5TvGqApDxHPTpbcvjkAoC1k7RHi1k6tcY52mYzhyZGbddjcP8J2Qxz9V1LSJ59CNuNECxCV78Rf4b8yXud7WxeMU",
  "key28": "UJNLQyKcQrh3hakkiQadnghZ1KJbZkvR25WboMserd89eUMPtBXpDNKj1G3RAdgP6uVfZiBxAhcpMZz4sfUi4cZ"
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
