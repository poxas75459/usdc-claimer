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
    "3KQV6QuvPNSVR7pLAfZzfiYiAsKYXQvm8dMhY4bCFBX1nnrqQYaF89mzPkX9Y7j4kxg9BudbmKV6HrZdmmTJUi1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvpMSz4d6x5EZgcrosS96VYBPfPjMFKsWwuXdaBK11S4RdLvnFNTZvDQUh7NiSdpDsm5H5UZmKHfWeCiMSFVkkV",
  "key1": "4esrGwbcY335MiRBwCCDvFBjwkCjmCE4w9Y3TSF1iiR65oKevjUqwkPnbiLDYFnMv7K2Yw5wo1K4cSDbq7VLZJmr",
  "key2": "4qEoL4Q6mAW7bz5pqk9tjH8QbADKJtQtE8NFmaSPBbc8GX987hEL4edLXGW8X88NK5PcAF2gWC7Z39XLxbHNioEQ",
  "key3": "3QhS9cCgAYQpG8xHTg3LeWvBHhfs98U3XqkoDE8vo8NQEk2xQzsZpoUKbxyM1cvZ9Qdk72w5nuQKDzJascCLZEe5",
  "key4": "5hrfgTXSV8KCGkU6pLJnuxJzu1yadeQkccr9w8Ubpuz1UdAQDNiZcKrAGZ113kMLuoSEyEkodyRf1RBS7J2GT973",
  "key5": "rWpMX5ynEahCiJEGEEFEnprJvbiXYxsxesAHY3fDhFeTsxgnbf8vWuhCLWSrPtyjNLFUG7izRqsTYon1b5yqu8B",
  "key6": "3DW4Hwpd2sh5d1Prv3jfLZcCb1tZuPCHZRUcvyRSmt1a4iYfjc3nntbGmgVbzui6ezkkHVVNVF8MYADuHq9zwvUs",
  "key7": "5f75LAAGCUMobXqvCrfrsAAjE8ZCYwiEaeT7gW15qo7GrMxbAhpNu2hzSFUgt91EQ8xRRaHm5Dmnvb9maSdJFpcf",
  "key8": "hm238RFPNBFgnDZ6KvVSLXnWSQtX3fd1dKZLrWbLK2vBej7kgVj3WWNq63h6Jirg69Ck3n78VFzmUaYcH4LzfkS",
  "key9": "2gvYMqreNNpP1xvNUhEpL2AcVpGHySrPuWhFmgzKsBBs7TckfUhjYkoBS6G1JSnekjXDq37xiW7iGNkdGXivNbMh",
  "key10": "2qa9gvEWyiVqsfncFwtxyWn1HiR4Z5e6RxAdA82VwKHyvGZWTRsnVKrdmA9S2N1sm4r8VBuCEmMfWJvXNe4UVzk8",
  "key11": "2TgRgghFJHDSL1Mwuknba1zJjJQu2o1cgmUU8D4Hn9dJ4cdTMKgKq6mMwJ3CY5rq1b3gbCAnuAxAF3KUSYLcT3Qj",
  "key12": "4AbJb1fNG2SGX797QuATVgg2mW1mmpm1bq3JKqomLZtfQgXdALkZksaVaZN9MRm1r3uRRQUcqiRSn1vLec9RqUnA",
  "key13": "3J5mkLTKNhU73fLD4dHGBd9gXLrwroSoDzq4GozXdDDhXedCUqwmR4YSh3qT1VJnoDNbv7NFy9ERkqTnR898PDEY",
  "key14": "3qPvdETF9zqM3bZnJFqL9DwpxYHYvXQnrWrZrySGx2XHsbUGkCCQnDY9wspbVsM65NdvffzwD5kZNKujPhzV5VB6",
  "key15": "3hiycBJCPQcCADJVgR3igXM6duw6cX6EuQkKgJQBjN5Nj8Nw5KXGa4DgXnX4cMsqpxEThALfra7suLWMk8B7GFMF",
  "key16": "5aS8RoSMPVtBddZVZpHqVkFitZEq1Te7UkYbV75H19khtu1w7eHJn5LdFpnaMX4mBznBJKXySuhDLQtKGf4Xy5YR",
  "key17": "512H8SuJ7tjHgfHrSsM7bYZGgT5ctDiP3gc9NwBbEvKuG8NoAsS4QLsfnzDfCJ6bQJc5oQzywn8e6cYjhiaJgcEG",
  "key18": "3mJLdKbhH9bAPowJ2Hxo8HoECtymus49MDgWapbK7FGDTDYkBtnqabLZYf8UwGu7ZT3QzB6XizHdFxY5VSqPj7Nz",
  "key19": "3wntUy85K9DpryXJyxmDk5qQvgMz51FgYDLHaKsHNjeqhKVhfFbTpykuYnpXwDg9Ky663njWUhrUNvASr1fTdY1w",
  "key20": "2eK2MxzD99eVFQSN73oaCy9kcwmXAYAPWA6Cikd5dyhY5K5JwqVtJjVev6THwBLrGFaWkdHiEEvzgXuLjxdgxLQj",
  "key21": "5okH8kv1jXtxFtjzSBhYGSqa9wHgcRJAG6nKAS2M1LN7gHDkGdQ7LFPApgGWPwfaRZ6LP5GRUetNteZLHio3jmTp",
  "key22": "4WSkGCPHtK1vV6BYEhUqshsSTprJZAnJKFJHZ6z1KCRBeGr4XZe7D5r2BPAur7D4DgB6HA5cqEVKQLzrqBGi9Pzn",
  "key23": "AGpDYiLwg2K6z6KysV5p9Pucz2SYrZoSSjoHMDoN7pH1T9anNHwfkNiY9Zsb7i6G8GxFX3ozhJz2ip2cVXohcDy",
  "key24": "f2tNJfy5XZCkHFyMoyExd3tZVBW98MRmterqr1GTEDgneQtpiehcLmbGsF6EYmfCVRfU8QxnZubqnFJQGy2F91G"
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
