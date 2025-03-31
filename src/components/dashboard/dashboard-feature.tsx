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
    "5Qs21ABuEQeEbUU4QTJk7GpCXqNPMMaQBbFXy13LxRU2arwjs1LSohWqYjd6dW3bUrNhgaqPxGgMbiU3decNsBan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2havTwaYyVFMiA24Z2wU4QgXAuFci5ZSJUNQ7gdTJCPUygREEHEhXGwfErDa3S9gWos6ySESALgseSZ4bCWJ7oxu",
  "key1": "4UXTtf4BDvTYnDAxtMAbDq4dVZo4YW7jVvwv4CxtD31pjfCWgHmwEWDuK1CkxREZq42bDTmLKbigjnGz4aHiDfkJ",
  "key2": "5HwCGPu2VR9M3dcm91zRuKekMdfJxzaTomN9q7rv5HbDJxPYukJgPpzTW1Q36Nuh8ECPr6vnZqW1qy7JjN65FKBo",
  "key3": "xuMsFLUWqy1c96kmZtS8eyw8Z5PPN4xob79zBBCYsCiUtd68UoyWDXfM9VCY5Fy7jc7r9gPxGwo8aQ74RQQ4FsH",
  "key4": "4s3xNmbNzYKfTxPq97oVVFeYSips6Luf1tQs94HNN5angJu8C8wt2eoGKP6ESmvE51qhZUco898ARtVS9z3Qdwpo",
  "key5": "kiX8gQLj9in7hJjjtRe8kRuQxCgb8RpCC6mDXaKCwQRnMLYWepTmeTjxzjpmVkfus4X1wwLAemj3J7S5FvNcKR3",
  "key6": "2pvQeVSgfSgAE3zkcEcyYyuiap1Tx53TdzHMQX8BW58igcn9i3KeA7Lq1wPZTbP21U9196Jbx9EUtMVdu26Q4SZD",
  "key7": "2UaoDg4ZPhf3A5QgtkyWFQuVBZQLEDpiWuCLvVKXm93bfN3hMtm36zZNnG4aoQM7XPYLgpi4phwTrnxeAMdrfV1n",
  "key8": "JjDRPLNVusG3nyacW9AQYGRBeDs6YgBTwoaJY629h3v54mMbkNjmJ69xEdYT1rxXEQjZSjnLY65ZtoX54V5d9pU",
  "key9": "MbKcmuNQRmuzUK2DpVtu7z9oYqf2dFGpDQUg9NiKajFGd6nHaaAMqMVmFAcjSUvzRv2XUfTKE68jt71WH1y1EUg",
  "key10": "3tayAX1sqdStkFmfpFTFx71u2CcHv9SjeoYVjJvQSYwbE7sfVSsyK59DK91PP6te9bYtPUo66MrQNcrnsGTFXStn",
  "key11": "5cHRB7wFTq5zJzvhKFi4zPmQDq7qWNmxV1TpmADAtgMPnZboRGxAf7A79gfJigWzEqFEpVAxpwZR3uChfERL4ywy",
  "key12": "2fHkGKAt1ZPUBDWmB3PE1V29ddkMmVpW7J855RvBR4TZmZqhaXcH1LJsh5337oTj7p4ah1nBBzESRJ1Lt82cHkPe",
  "key13": "xQFwTeR82zyeSzAtkTemhKd76t1gFVVPLNzyp5XYomv9MByvbBh83QGVpEcg8JT48kEgLE7bZzwxEZuv2UZN9MW",
  "key14": "2kdYf6TyhQ6fbhRHPa79r5LBnzPbg3zJNduX2MHenJD1NSwEePHwbPnMzidx9UYebHPEmQtgp9kbfwE2qKCV3fFj",
  "key15": "3tsLujh5FLU4nKdS4YENtHnGQWRcQMGro9Pbt1jVTXdULWGvhy9KrTDd6SeRvUCWDScTPjsuG4bjnFdcCiGPo54K",
  "key16": "ETZoQnAkawYB2BxEHkWWgwxeEJhTLVhjcgJQvuCQFegtARU2FparXd5vwTwAf949TTSU7ELHFAE4aeMufb1BHMo",
  "key17": "5sTrPPVfea76spQUBKAgxJYFRbNmabUMrJd1K8kKexjUS7Z8981LLDjzBLwN9akpaSfXfRUrt3PKD8caQWMueUcP",
  "key18": "4q5jDz7F9JXdmn4cWy4RT7gYoYQGyF36CMiKZoeuga2NucvrNK2dnZo3fB8dUYhMoAADtLx94PmSeXRUqcRhxKXV",
  "key19": "bmQpEjGGhQXSCa35WLfPNjF7RKAf2FwPeiN4hKUwidFAvty5LzADtiN9jUVqu3kKNSqxWXL66kB1waTwdAEmoAa",
  "key20": "2zmaY7ozD3PLrGpA77go1xy3FbMASi98hsLTxfMf7SuNKHuKXF55wY6VcJWJTViEkbnmFmpZwWyfaz7YNyUjqko1",
  "key21": "3J6WPRz3MekiRFnKubpBV32m54g6bh8J2eFtKx5M1ZzFWekkoQ4BJNAUWixvXuz5smenWuYFFG7MsXkn7phkS8g9",
  "key22": "BiixpP4V9yS7LVNmMJwyGdykqxfZxjgu7MTSZukY98aoJBrZBM3eaSMQXGcscJYjDMjL3fuLXxFdQzxtixKt4Bz",
  "key23": "5XUzMPvL5vrSCvEErHt9ZtsfdW4ondwmqiyAQZHW2dgMRQgQafPp2nTyWyqPc77wozSqz8LHfQtwTZKZmafSqwfX",
  "key24": "2Yj3iyVh25BCBLRfBHVWGGykRJ9eXXR1qXSFtQJMcFbNFg4Nn4DGf9hepz9pgWaPmjdXy9aNBiuMa59qcYABBphg",
  "key25": "342giSyqJPk3irPFvUsQNqSTQ823Sz1hifrN2qZ5UgDWZBXpDHBmNm8NhqwUghDbr3dE6CUT6MYjeJcYmNynYaoE",
  "key26": "YNwNoYRtSGagEkt1iVct8P8eB4ewfmTHLtdN8M3yPucLufp1bcFNPHxRqVg6cx6pF3Q6PNNmoZ3nJrKyF8s7t1p"
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
