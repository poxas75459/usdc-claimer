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
    "oQ3e1UMd4eHgWyZh4FD1ezzSvkZMdRGvAsXwPo8kqjSCm1uwW2VKk2GJGHMpcL2EhJP7FGJLoX5Zq4LLHMLQCB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPQKTDbsML77788TVgK3LaLo81NMqSgTZKv99D9bVejMbe3MThH13Q2C3ERQWwpRmeLSkwqw6o6b7tx13zR7KXg",
  "key1": "3xtE2PMhxfMzTtty8p4d3ygyHp7cWcSwgqsUa1g7WSgV5adENQpUp5WceiaBnVkMnq1qPPyJ8QdgjjwZuGdXAdYG",
  "key2": "3edZrnTxEoGqicoPuhjLJFMoiWQFsgaw426EwroLCC3UjurHMbxphXAjuDm29XU8JugsmwWpiaUzTwg9ZFEn6sYQ",
  "key3": "31hGSbvQQP7MX8AAEVnWFTS4Sxpbi8CtzJXs88hMExpXanUL6Wt24gMQZpwQhtGeYGehmB3hE2fKGDq7keeKEHov",
  "key4": "3jZFccjuESk6jprwxuEnoxCoGxBKEcxMdays194xSwJa83ZKecL6nCbwSQL2C3ZG5b9qdjipNfAtytKdHZakjanm",
  "key5": "3qRVxXc59HVLKeBmEdCi5ypYtvZEqadJDFCm8zmVUQKxCX1K8Ag4wAmFJDt5cTv1cLLKKGSv2D6N5RF1BnjVwWhV",
  "key6": "4Gt57HfhJPYscYW1h7PwwrE2YwsXzhk5RXUMyJ2QKTpruohJKkY5Z7nVLPAiX4y7B5CLsAtVE97e9ZfyPcRYD39q",
  "key7": "3jxDqy9UhPaB9f4xQbzpdpqUJvCtbqQpE72p6VPaR9bKKxJNqvptKaHeUcYUuQaeMVdZKaUjEhVcrBVEZzEma9K8",
  "key8": "36wFMHvbmNE1wafwVuDrLLwLthxKyCoQXWFiuyWTbZr3S77bFFK1i2UKz93aGDbS9k3zb43vtLr3NR8pfo1TcX7n",
  "key9": "5ipyq5GDUGF9cDCQqeLLJfka7mMNW1ohPjjKTCWVGuSr3kBTYDv9y7Q2T9AsrBsxXQmMEgevNGoEkcf7qZSZzBFP",
  "key10": "2z3PapyyvguAfkw3TfmDpyG48CRK6sqHwdSwd8q1DfQP6qAz8JfjWKPpbiVbDg1QnkptXbvWptTV8hcK5zzGESFp",
  "key11": "QybTueegRbcYgqw76aVdbeWRwPsXC6Bv9r4pPKS8dJiEMc2dSShCj3ZxeXnBHj1pjk5EpG13v8wr4sUt7q7uJ2D",
  "key12": "2xpZd5qVDDE1FEHQeX7EVoLgfMmb7yqABQS7CYrhdMzYaYfsZQeHffUi3bD33EYFuSTCvT66a7CXPZ414WzAV42h",
  "key13": "3UbeMrUmu6sdiKe8mwBzpMmZvUHBRg5QDcqCe6xHR7LKuLB4ZVHHM9LcAmm2yDh8StR2mWdRmv979NnHfHNaaipB",
  "key14": "4z5yqi6FdQ27xy1HSQKdhNQB1wnmeuCwY6hCrMnivYnKH9R1T8493sNEqx6n9Dm21e5ZSjY9GWNwUzsWYEYGE6eM",
  "key15": "4vReYUTdqqrN4qS67mLCXr6e3CruUAbWXgzVoxw8ivgDE1rMAv13FKKFpSB4pczxmAL9RbsUEKfqLQqvfLmBj6XV",
  "key16": "594C9Jb2QsKkggSWTDWxJ7EruWPhLWwWzyXhGCS6LkNPCVYHrFj59eHT9reEeTZ3UUmz5fBgpKEHf9NqyZtpfFho",
  "key17": "qA98oPxU9MPfUUuisa9u2Ys8gnD7RXCHi4LaJQZN2S4rPMRitUd1JpEvvNTCt6yueMJ8E6AFA5VvGdysK3P9Asy",
  "key18": "261yzBALEq7LGC41f1aX4gdRbbH65ksiSPPxGMw7JdP1ceYLYePZp3yK2UXi7BvR8ky9FBH73Ga31fQDvddxhSjX",
  "key19": "4tE3kivcixJDkv3dQLRvcTiY2pAzP14d8PBS9vwtpcGFjeoA5UvAiUXZWgP3KYFSBykc6ZBP952YGoWwvjkRLdJV",
  "key20": "3E156fYMDY2sWwd96oEPPRF6Y7XzCRRyMXYGfc8JftapS4NXuzJJTtLPuc1sW2c71bZ5ZzL2MD7yeHrRpkKhyxR1",
  "key21": "SVyTHD7yka7f3hxrPKL5ZKerWgdYUUsdiAJkc7aQ33vFCgDCa9koGT5b4T7J2UJ2Hoa3Ms8V87rpFWo3BE7ToSW",
  "key22": "5J4ceUws8qAEUTYwbWq3mXRZFy4FHVJkaDCLckZL5jhGWGwThqpZdvxzDktNvvYPWx6g1xSXunPb3sjhafxQqVKe",
  "key23": "4j8iEipu7PJfq5Nc3hKw1fjxqfmXYVGz2MTRu5Hikcn9KksnEhMASqQRnd8Uo98Fn8VcdtP3Ydtx9EJDvYXxF13T",
  "key24": "4DLDprYurmyavu7EBpy3y8dEGxBuCfo3ghgn5cM6zy9u9CfTjtz4Svx6wE2yeNJ8J3yyfXKq4qUxk8XR1Gw6ezVv",
  "key25": "3AMzL4KTxu43D7YA1oLxz7XSwQJkjYF69CFAS47xGnCy8ZRWnwFRTd49KvQSn4FA5jRKdCR6hf9NpuHzyFjgpimv",
  "key26": "5BHEdvH7kdj9t9zr1ueqUhpv9YrPuKr14ZV5tGA2jEWZcKH4TSo8FiyGqbvBZnzDdJB8EyaRLvSw7TgPN2RfWtfT",
  "key27": "3r8zGVR9NSN9VUE4HgPqMShDhDHCW9quMQXr9cW4Yfqui4q4jgtfHDz1YLJNhmvMYnSSGvRpRwLAThHVzXQR6Asz",
  "key28": "5G2C2Qqq6fVdH1kzvWoUrB81BujEYDnd4qa8MguJ7YvfkvUJazBuz9GGv1btMYGfUqHYdkbNbfQZCzt7TnkxN7sa",
  "key29": "36LkQyqmUXQL5JgPReJU9GeuPJi3qETSAWywNdcu3wsbF93sWwSGUHsXCxxKc2caTKdQ7EBEppoS4YPf2xrnxx1E",
  "key30": "63RzYqEcMjzFiD9jp6h1qPhuHpbrFwdj1QAXgLyTeWB4iL4Qcwewwqe6Nidn2LpMHxdg558bpmUVqfYf9CuUsD4v",
  "key31": "5CgBZX6dhGSxJd19YYGk4ipZcTWv9hAJtW51kgTnHVDjyDNAiz9jQTMGQtNS5XZvEBDYZXvS6NTjj6eEN6ZLDdyn",
  "key32": "3yU2pRVLJDJZR9mc3MSnH2AvzGJ6bM6cnZpL7ftkJheDUH7m7FsjxSwfoyc2vofL7ZGLyai44DvEz8DEBesmWawP",
  "key33": "4nNLiNaSeLF56HGP4dHjw8dZkCPXkLEaiyQf6B9UQQ2c55fCKd26QDHR5xFTHKCiw2so7SSJjn19uiyHzUPdyd74",
  "key34": "5AcVnCBoXMbgMajHgz7WgUZp7PTCngGbVQsy78rr7p127heBGHtRYwJp7rQcCBETpAt5RkdtRYDTvVBU1Jh72vBx",
  "key35": "rxMKHYLcniSYb17w1A4PpcdA9uPsLhQX5FRw3WBNiypenKcqmK7dwHKKQTjitHAw3xuXudJUVotumSZBZAd4jHg",
  "key36": "5xUdMriR6x8KzAFppg7q4HKPpg41mYiVNTaF9XumGYvKxbwf3Bpqn6XeMhY5jXxSbz3JnDMLBYKoCumhGyEBDa5M",
  "key37": "4oCJzNAzeksjGstrcGrH2kgWjsgWJS28xbB5Y8XHgNpmhnXSqz8xyFkLhikbGyEA2JT6i9CiZL18EDdtoJgDCLdQ",
  "key38": "3MnUU4rJXoUuAVUBGWN9exWqHJV7uCCRNd5WjrxRBT2m3g3UYYc1KcfFVzzYqr4g5fPVucpKML3htQ2VkAHzJJ13",
  "key39": "5LzKRqhN5xWCtrwMn9jVRWgQD145qBNPgMWSz9nrhCgDf68mG3Rwq6W65WiEdHWPLdfL2MJwTTPXe256YaEYBSXb"
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
