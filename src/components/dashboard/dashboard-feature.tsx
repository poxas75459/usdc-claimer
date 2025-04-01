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
    "47mnVmShpZHfM4g1hwCDhuwdzFaBSbtRix2gJdY7fGMdzw7jGgzKHFZLBBDdL9yYqUpACKcZZUaQFcz9S1EE6PrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKqBDchE6fbDnuNkszczY6cWjysAresWaEbpxkWkAjkdGHZmmAw6LTamcytR4qgwUUGYPTqwA1wDniNbYqEZt7V",
  "key1": "4wq3vTaGXUjT6a1Yzmvn5r2VDKMAB8vbX3ug6sNmC1n6tV373SPzv6MndyHDrYhNsvf8JGhwaAv1cit7vJR1aU7P",
  "key2": "2c5ibYi3NxrciqCWWEicBNtogqWEcMcoemZ6qFtytDg8XXR9mMaxrVKSWJWrwbz4YzSW2YLYgzp2M8yyE8oWL4fE",
  "key3": "5y1o1xqJZ3mR1isVx8rUXuTYBEHXEne2dcqtbDvSVPr6TbDkMpj3HwKnjiapQ9c4VkjVDk4zNMmKbuoE3fsnkT7D",
  "key4": "5wv72EdvdY4dNcuJjEBYfL4eXzK9TmFb7F2i1i3eubvgYuQAEDtrD7jyxgkH9Ykub4NxL7yD2Mx3UwCkkf1XZ6QB",
  "key5": "42BKAka53aCDMtK48qgDJeTHDXMHx1seDsJvD4BKs6jaxsmoUQpMeFdq1r7LbApCWW7iaHndJyhojKHbTCj5gZkd",
  "key6": "86iUcZYwXDtbH4sdqyxpbwUJJdAk81Hn5E9zwUkHdMuLu3jMVqoPbPbtwTCouV4PZYUpXoq44P5uXuf2yLXRAjo",
  "key7": "3VqqLaaZdioyygWLgibKcikTTukr4oM1GRyg9AHdnW8REvQ4hHnvyKQAQeovM5aUuwi2D2TuKgiygHC7DHsAoLGi",
  "key8": "4vpbKr1aEcPyRm4Jvcrdgqg7m8qHdCFdJ8xLg9PvLCKMs1p2ZuCJTScFa4d4CxWgZb4SaodqEPD4XvaN2EN1Q5u5",
  "key9": "58L1uth1KoeDUjtooVJ5m2eUrGpT3fugkyDUqyzn4KMUNgC3L9LzhcHXnRAdjARZ8z4eMen8GiQ4jmbn1tx7DcXA",
  "key10": "UuUCJrm3yfRbbARYwkuLGK7dDpeEdx1F92RFB7nPVuRMCh1yTxfoD46oc3AMTRyMuicHtbcvzvGbYmtcv1B1e1w",
  "key11": "5A1TBVgPHQ8pwVPy41G6R9fjnEuPCGssP6vze4cywGMpmfWae41SrwxifKKAv7j7RjdvbfFUqfAvzRzkBo5DTdoF",
  "key12": "5HJSKti2KvwDq6UHjvHF1DasCco4AB6sZtdPMJMpaeaaB3kVsg6UDU6dNUPhLAk1ZhX3cyJTiBFxXhocq8vUf6gq",
  "key13": "5qreXUDZxcU3ZwiAaSHtYnucanD2jC6kYGHVTMMQUF6sg1ZiRDEEuAQ4m4yJTykBAFLCp57ub4BhwooZcgvrjBP4",
  "key14": "273PBCgUgYY2w8qumzehHQ48tuw6hxPcRwveWQeYkkbNvEogCvhNcXepBKcZeYYbxueiNBC32NjveDaNGmTJ5tBX",
  "key15": "aKjn56XZzDXnHMAUFZNLKDh3cFtu4t2ao1qoowGgHoxWzfecUGoaYDANDoQoT74bfJpXrwbEKgmcdwJok1aGc3n",
  "key16": "5Jabxfv9JyKDuTTxQYAC6r6ySNLW1WAuGsQKJUwDY8k6DERfAeyLfAa83ALJayot2oUpRfFanU92PyqqxbigPujn",
  "key17": "63Ptgt3hofLjFgx2XjMen7q6wRLPhaYx4sUEVTLpA5PFe8pr7gsWE4PWHz3GSDrictjgkrDsX5FEprNabRTwzr7G",
  "key18": "2c6yuS4zzbeTuQtP5V8eG9suLWePaBCHiLj9PurtQBBnKhFGJHowV6XTQv3r7T5ckyrxN7vQqGV8So8JFqAxa7yA",
  "key19": "5hX1QLz1PXn6rk7c9dqVpAiBF94HQakSs2SwzPztCFSPQK5wVhL9MNPmnodnLcdRTqVDTYEfuj59Jy2fZi3tEWw9",
  "key20": "4mvjaPBAWe3x8f1LckDAd9hfbAgfKaZkoe7tCkdMJnocfxHumowPdWV4xEtp6S1VzpL1Lvoq5BvLkuLqdVArSg5m",
  "key21": "5ef7n1WiuUHAJE5Yp7LXQfzL4aBWnkSBXRuESNE7JifQanA9VPsd83drAm7usQfasWFanjFBZw89fyztBK7yEJNG",
  "key22": "3oKRkZCbR8rpJn5qhuGg2wYXjDdxGCAmtysZdVM4UkC5nLM4ep99BQamLWnLQJySHS6h2WPKNyDK863b7cSLFwjn",
  "key23": "2arkxwGyFGByeNKBQAKkdjhhohUnrcsP2zjfvbq7YzdTk5mZJYhEZBsgE78EajTzrzGQftnQoaTPkVgroZr28HZ9",
  "key24": "vy75gKMGnxThsYBUDVU4pxu49umrSPAhkSykyZ35XXxcxuoQbNcRkHVnWwFZDnJ1ij2k1ucvxSXcezELKqiRAXZ",
  "key25": "3uWEZnzvJvWrvTM6G2mAyV17Matf79DVFuvVsz1iQVq8TiQzi1YzQ68EUb64jTubEUWkYn7CTkspePTxaFa1fDFe",
  "key26": "5fDnNtivBofprzFEdPXKoBpmRcDsrggNqrCseg87wbTBUDL2RbRLZ8y8bDWp97AYY8hEopdH9jjhunsm6BXet4ef",
  "key27": "KocfzeyNC6sjFaTa4x4L5E5yZGJqNqMfhyAdJacLV4E5m4S4vpmgBbgcGSrFinopaSV5Z6MJ6svQMYJSEEFBVCR",
  "key28": "4YQsd5rv1hBszkDmzVuSzBNX51hz4Y5z6M5ZanwxPcCZYbMnB1bE9qgZ8yjLV7W4oKG345hFdhTcift46iXywUAt"
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
