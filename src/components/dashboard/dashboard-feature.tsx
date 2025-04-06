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
    "636ABMo3oaA4hQg5f8LhW1JL8z11e6vvHBcjGmu5G83kvsQfMVc8HRmxj14YocpQg6EXyMfZvKtm2oqoJLmXHpoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWXmUfjWiXgwZ4yavF1J3Eq8ca2BKG5QNYu9BMLamsNbasy658Y2GLpYfv1eQDREnSi3jHHB33yzRjus8geZJhW",
  "key1": "5Cj5SxMmMuWRFsZkjUxF5J1NtEmTRb72UJwi4yEoT9MQHvw8PK653UXY1mEQ7NYCidJMT35QipANtWvBzYZi5Ass",
  "key2": "31CvzWg3fsm3DmbmFRGYiNvAgJzgcYanzhFLyFjvSXiUy31T4hHdQbMguks76zJWG5niKFeExG3ogku7yWNT315y",
  "key3": "5Yk95iraaLjzF1L4QTWrAacaERn3rHmk4fwyWS29q7KHEExhYu24yEpUWmtxyuMb1D2c9SpoJFU7DWndYtvKSRE8",
  "key4": "32FvFtpi1gyMcJudRdPqKkG42o63YeGnSYC4yL82LJBJhCz313hEco9wJKz2Qhu9jfmbCAbos7wJBf5FUHjf4FBC",
  "key5": "2dTKeb2SnCqb6pYJr3H7DPqgDGrAojhpgSe5EyGcq3L1dKjzzwHSjU8JWqxtWCe4SkZmXtnHmAPZ5qZhq8YJAWSw",
  "key6": "5ghimhfoxqe2qsNbyctxJWwRxUjnwVfZVcN5rss5ybBvxML33mk9vxtd47v3YKUxxHsNjHiNYdDe8VGZgJJnEk6g",
  "key7": "2RSMWg62cuQWvH1osAzJVNmQf29d4Mmk73HtKktSHhq369nNpUavJ2C9DtjetsJDhP65MDSju6n1bJwLsJQV4FEW",
  "key8": "4SjC2FK29fuMn1rSAbr46YzXqHNWdWEmAsmAQjiqjCHzSmJZTbBfKx3Rd2LEhxtci3VRDSC6eFwQoTWQiG4Txvou",
  "key9": "jjD5qghiwL7ZKTTr8PH996QwzfbZuN1ABLpZNPfpKhpega8GqLJwEGpN5713GtMN3LVixDvSd9agWiJjjB1y2Jk",
  "key10": "4BzmdHNp9VctjPevFntkHhXTB8MBrK8Jh7ZGawmsSh1i8ukyWi3GWk4cYRaWTYkHzBozjESeRPrv6KGbmk5F6Xnr",
  "key11": "3uzKNSS1LwiKQE9gUcLk8SofZQN4vtZQZGEN1XjaiXj6XjmABu5PRYoJuojdXiuugUrfieaxMhC8oYegFiUwQteQ",
  "key12": "oC7T2oFXaFZ23zyJxHyqHZNuvBuhtfPtuxsLdmhWo9L2mqZFGios2XGgquf27ybrUjJbgs24iaKiQmkPXd2P9KV",
  "key13": "GciG1jDEif7rcmpAZ9XUxSm8Gzr3KsDvcnwuZmBjBj6byJoydvKfDP6gWchkJk6WJ7xtQe92qiCasFFbFHXgbC1",
  "key14": "46VX2Z4skzuY1vcPgzTd4JPcRnGFX6tNhMJWmPVdiQu3hdTPewocWcuTYUxzR4UZfxeVv3bN4bz2DqUcqSciZp3X",
  "key15": "3iSkRF8V5AAaYuntRTi9UahKRRE8S7v3aFhf4ttuLJxwXPS69LguxaPsdx896XKLMVWGjzJxQNwiPu16TMP631Zs",
  "key16": "5txCvBEuPcux1eKWzDXMUwFUa2qtXBt7ZrkbHPwfJ92EAHycnzXWWcMUBMBZmobWawhjLvTTraLtPeSshXVdiMqm",
  "key17": "4WavcGz8TL78E2KW9X9evinpMtwoE6YvHDRE3sTo762rqndZAwpiggmJxAgduLedn3ZveBZnf1LaCHjqeY1EXBYJ",
  "key18": "3EW2V6uNpMtTqb1KKnCqQjCQHHuVWc7HNyo9FycWAa7KYTf52TkPfLsw9UpakmPg5cMPkJ3Knz8J4KyFmQxGZ8mi",
  "key19": "29a7kh41i1Ew4xLuiaYduSEKjeWNvqcYo6kxrTMw2KvgfNq6MM4SmK13GWNECZKevynPpxQWYoc3eQA99j1K6LCa",
  "key20": "4sZED4giRo5gcYNK9kbC2jJsoNvMJoEasyE5o1DGfxRQtTCytuDo1pFimyZ57gRDVQBviRt8T3afm3YRW8qmnHqS",
  "key21": "34SZujukRRdtQqeikbCdk8anQqu55CS4Mb2FHgEXTBFb7J9Rb2oYHFsj3VLguASs9VN7rYffsMFBZAVDPBcaQvoQ",
  "key22": "2ZWvjBTrNtVBD22wg73ZUYM7yK8QQi4Eo9RAvgJa31cFchrT2YQAioobfrUXyqgw5yuhWQp1WoHsxC47XzfwKUhJ",
  "key23": "3y7HkncmtEBLNLXvnWbojXqWZyAPm8TTzozmfStrmZy5Maj918VU9sGTsT8vpLbgDFABb6sshBtY6nUkaeBxsd8",
  "key24": "2xEtX7BJ8Z1uaTinKRJjrtWDae7RGFcdJHXZ9qnDu1bcBhooKgvC9kN1SiEqVe9Go6kufLLJTq3BLSmfEEMBaDUu",
  "key25": "1xw2KpV1SLBZDxH7i7RmQLQ1Vm91n6afW7VXL2DRd7aiKoVSW3UTVjAsivhsnx2ZxS41HEN3qtSkTRbztG8Jr12"
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
