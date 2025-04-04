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
    "3dWZo1mMBHEzB39dPQbTZwFv6wuTMF95rUamaJRkMJfhU6LR1ymCcLMtBF62tt1DbBrXqmZDxvVQrceSiqKVjkHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWsiVKPboCRe1WqParo7o3BwGqBriVvdjCS5eaqPP4taCXH4VGM4Xmt5pEhPEzTER7qgFYq4jkQ7vwLbEQ75QjD",
  "key1": "3DVgFTj4ucdbUV5AGs8eaMofctsubU4HAo9n5GUph8ACLtSyjFjdpqH45r1QZGPt8YF7YXUJyEJLTTzwhaxAmSFe",
  "key2": "5CxP5x44f4BfrPYjwWUi8HCMcZ4aSVTbqYKANz5nBkvza5PeeQRwfufUXSBmxSysm9PCenNkJDKNbdhb52us6p9t",
  "key3": "4WNVNB92i3yPPZ7b9rsae4JgteRA68MwgnCGWHH8Sw2zjvxMFr8sVvEyZLjwtFGufnHCxbmrgvRS7zge2kHNXiQk",
  "key4": "3NqkTxscsQPKV4dWzYCGeVdMqd9sYeFP3W2c1ZZQXjRLHza9fCsNLSzEFWWfF6CpX6MCLrumzMysxrJZHGw5bL44",
  "key5": "5mnnKrfybaU7XNUzhNcgh1s9p5AVnWB46WKP6pPTUNi64kEpaNytiFHMWGQ2xNFZQpjK5DSLE3TznCBZxPjX4NnV",
  "key6": "s9ZudLYzjsvAtPFRnKaMVgeDnWYZcLFSLZ3zBk4bx22XWa5RQTSD8kxmzV82Fceb33cLPja3gEnvmYjk1obW4Gp",
  "key7": "5jD86xXnRATRkrer9Z3XcmJ28HWzgtvW7AQEV5SYcMf7UqtoGickDurxxcH6UiSaUebNbCbu4rKSFQYnCNQesgdt",
  "key8": "2Hh8KJg9KdZvpdLMe5mn3yMstBSEdR4mujxHSpxu3QBYufzWPT3SjfytKo6D7UGRYaGgS88nY4Q2ioHvcJqrXpr4",
  "key9": "2VQXTRTahbFk28nQTyfZCrWNsd8L2bbNFgZqKnvN44NKWqoLt8tPHA3s8wE2HBEXuN3M9nh9YxsXaA85rSbYWb6v",
  "key10": "4zpRkxwnanxp1RyBGY3S2UfsMG8iFRyrxG5Z79j1zNXWEWTK3xV1m8wRfoqF6SWidSkjswnyu5nLjCL7gkfCQC3w",
  "key11": "3zz9yF12epDEdQmLGRkFcmiyzxJbFBKiYWEoMnSVQXEgyPk5g48NMERYrHpKeMnwf4B78ukkrDxHgwDzeoU6qKfd",
  "key12": "63Vj77gtJUYZBu8owodhYAtF1peTuWYBn7otGMzopH8PjNocrv8HTBAsZV4RNvwv6jx7wA2iWriBLzSec5ntzy4d",
  "key13": "2NzrLpaanVeT8E5376avEjkjR2d54jRH3HdNs6D1vTngfhGCCwMvTR7mkhiNqNBFE4QYNRKH9JbxhSo2cYkYcgDL",
  "key14": "2BRxgLMjhYWFR1N6LCfDXRYaWVHHkxYKj74mteYbeoH7J8eohen19BvmjsAGBPMMCZssN3QHy9cTfRtUkLVw37fg",
  "key15": "mB2bpeHQMnUB1BjTsoyDF6q7o2kWntBkSGGUEGxbsqMEf15xwn1memkh7r9ZVsEVryHzGcLFZ4uDo7sbgWraEP8",
  "key16": "3unYBMAa3BJAjGHthVPrqqVgtCZkbF2hZBGttXVreD99QA5trCpTDSJiz5AMggEgqyjzJJuLanbyjZZMJEzEMtff",
  "key17": "3A42BXX7bfamz6go3QHyM1Dr7uaeyVmJUQhcZgs94PPxCNv8KEW3T5VZssYjPTDbAqZEctbweAuKLpCSxp8zJpNe",
  "key18": "4fy1aC8cq7rF3advi3h2G1zkScLw4CCCpbCYFaLurumx5DosEeQLzrHjyrcbpq1EEPFS6VSriX16Afh5BVgVaEXq",
  "key19": "2CHZkthQZgJMDn52j3VXJNxBhFRtpYcVx6haAr6wvYYc2uaPhoEkEiXFDUWv5XaH9YAE4y4C6ehEVztbxN88Unei",
  "key20": "4srA8LRdxxeNSCPANruK6BwQcwya5sdVjdUCw7j4FwmjUeStjXmWM65za8uxzaLb61NW2yUL4pqqWiCvC1TRYv1h",
  "key21": "R5yZp8USegzTs8XiYqoXkdtWmNCDczKJNEZqojnK7HNnq2hk1aSv52bn5bci3u65Mp4m8UFb3Q2M8BbkTGbPqB7",
  "key22": "5cnEoJpHv2q2FhwB5p4weD3z5eqb2zymRCoCCMWpqt5tApRPmQTLwvpGv5NpW9zP85ty5AmEpNVjJbuNgqYYck3g",
  "key23": "RpSUJvqcgSbghi6c3YY6h64SLksoqgtihxAuEihNb8stW9hP9t3vdZpqkXjWY2kyDWpW5WuKtWR6n3fYdN4Q32U",
  "key24": "4tSVVcLMRgp6uMmhdpT8v9ot8ZMqQyZ7ZAoRqP3ydaEBJ1XazZxV7N3PXBMS4LcD7w2t8ipVsYviekBDaAPxcycv",
  "key25": "5CEBwwkYgcyvUKVyugP36mgBz2dzbDBbytqL3kyHL2RsEr95fyVt8HJwnvr2WfGVVxCPako9sCdaAKL3zf3f3zny"
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
