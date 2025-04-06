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
    "5nBh5hpy8zACuUhBBjVtmnVKxS8HK2oP8bzUopYmp5A6vQJDJRugLfMKLwAhJMjT3mPNdB9XkcpmnQUuC87S4Rh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLbLfaWGnBa41aEpx76qFmkbk8EBUyLooT1xM8AtBGVnPTRYGgx247xva4KbhHZ5vWsV3WFoEAJefusUb9U8xiN",
  "key1": "4MsLCs5cziWbnZdJXK3TqnbzCmt6S5TMeJ21njJYvuzke5CToe4TYEMFzTCDTpM3CGyxvFEP44dogFpXUzPEwjKz",
  "key2": "4fFVfvyPSJkXtMegSrG5BxVCGbRjzpLsbkFRQn4asGVib3BD8wr6AL7uqQqHx91w7p8oz2PXXVozhugRdtnUDjU5",
  "key3": "3GcfoPzxcmcDURmwMz74eY6kHxmmT1iu9k2bmGgcqWDf15Jum7hGwLTuSd2UqfPXS2bqKjDkDHvsX4PXphU6THgz",
  "key4": "4BHqfqRBVNBkWdu2Vus8BtkYP7JvNf9YkKJpHgyT323i4MGUd6tVMUr75AwZa73DvxBcBuGMc5p7zZSUdtub8kBZ",
  "key5": "3bYD28X9293uLELqsuFJyStNSdoD8CaxUSF82YqWttyJzTcMAYHNtdNFzdxnNBrEc6yCcWgsdyBzt9G93STHC4cw",
  "key6": "3rXsBUFxMdxV9TCVG6Cu1sDH7pyV98NxGVwKFLCQvsniXbKma3e8VRaHdjLhSyceSXm1HePecH4ABzyqNMVxMQgP",
  "key7": "3gyvoXy4qmaTCbxjwg7FaHQ8YHdtozT5JsNQFwA3va2s4W7bhHrdGAR4m71DdQfNgc2ye214G3pnxAqVzzbcAoAw",
  "key8": "5pf7MTVJ1Jf71WEP71Qx8e9pntE1NnCdW1xrcpMpX74SmepzNEULGvorw5285yx4DNXskddEh6HiGZVrv5FGteim",
  "key9": "2UQuThJYYmuqvybCZyT3n4BNFMttZG1vDNfZJTwR63PtkZG4WFLuyS25eULKJp3VyhzegTLRkaPDM2cGbDFFN2xu",
  "key10": "rhxYhUMFYE1BkGXUzDUf4r3fAKwPccZE4UdAQdTDYb9f1tbr7tDgxPxPKBo8syvU1DRRYWGAVGuHTcZNg9amhpa",
  "key11": "WGZoVrsrgP3e4tcVdyxsJuj5Pr9RhM9xuzhTtsN6WzHq5UcQUyJgwFkfhdrR8FkB3XTun35QQFGNs96qEuc2ZjY",
  "key12": "2FTN9n9pgwXeWuvZAJB9YvyQDQ1hvPdv6wZr8wr5rpeu8UW5gAJEPMHqw83dRsV3y3182oxv2u9PzPM29fSNLoAj",
  "key13": "5DthmiuJ1gbCUQ2gZdZJLyXzWKMw1NqshRk56t1QXZBPrTcYzyQNe1or9mUhXrCLBdD55e9qi1SCZ8GbmBw7hted",
  "key14": "S1hkB2RVhybaKkYHLbVYcbthnSSbmN5czmuWshXEHjgvWuWNseQuv85mKz41do2furheBWn9HXqSLZHpBr4Tz6Y",
  "key15": "45jJdKxxENXhu8zV7xqKQe6A1s83hXQ2KiECdHmRMqhM7whGeDCVduwsfV4ciWTscsRZw3VT4Pfbgx8Zaaw7UYG5",
  "key16": "3q1P1VcmBDNHRU5BjceHCxYLyFkHmGBqHUpQGmuMw9Kbq4kXiMs165tTNDCWpHSwAzkGSK3np2aPZBsgge3Nsoqg",
  "key17": "5EUfe5JP2icnHc9d63nz1CS7b9SdncaBCLCXpc8bBdscQPL3NcpLAXvqVetdHCqJ9riFU9uHGQearg57FbFbouUA",
  "key18": "52J52rviWH7HtSkHjb8CTE3qw2cycoRJJZtW6pEUkyaKLgpW7BvxsTWaCK5JYiZPeDFWAB3fev44K7Uz5rvS7n1o",
  "key19": "4agMBUQX3awrYQCQ8CScPfRSQ98gtLMzV5ftkiMRrXp76EyQ7nRGjhoSM9qcArMnsQ4CRzReKKvrpuPHHQMHWjP7",
  "key20": "3zRQpMQf7GUtkm4muVUxi3MydhGEZtmfwc1JujqJqwRRYnuXMF6psTGKxedRpcVYLvGCJXCuqMKo1g2vbmupPEb",
  "key21": "23rY9W9WJRL6s7wD1HUJtRyTrhbYEXiy7GJuhB3UXypotHg6iytZcimuqHYWaHmHosKDCcQDBQ24RqfQi8DwKaP6",
  "key22": "3XmmVEhSusUjvcZg2K5qngBL8KL8ERBSwyMkGv1hjEmwx8q8AsEZFsNb3B9eaDkVsGZZs46MWG9fP6RNQmxGWjja",
  "key23": "2j1xkfAouABmt5fpVqBBmZGsiyLkhFJp2bd4ZvtfC1zSxSwpNuwQgL3GexRP3s9P7nvf3ZTMURfYpPaovfiZqLnv",
  "key24": "652s4pGJxBaMGzC1wmsUJTG7h66LSCf8ApEGKk3phL57y6x3doiptdFoh9XnzLnMJDu34oeg6eMCyeWKZUjiSXp5",
  "key25": "45J1eBteGfC97yW8nqxUVTUrwNGkrdk25mzeTxvRDV7HVgMrMS9jU9KRzHJNFDYvy36v3KXDbWQAXgUMJtQc2jvo",
  "key26": "61CsjL9dCgTLNLA3SuJk118kcJHg1T48Y7FDxW7YZmUh3meYk5U4D8sWrCdB7xr8rNXgcHRQ9oxruK1eFjVPE5Cv",
  "key27": "52ZoDuTjkv1DTAqrj14H9oXKSWKZwhKMmb7Q3tMCqhmvN6ZyT4BLuwSxHnzczLkJatqKbSQVk2uZPEZwuM1257j4",
  "key28": "2fjdHf7FsNrCpeioQiAzVtX4uj5SHwnzNQ45B8EH2Zo32tGm8bGTVKY7mo64cqy27TSCSUay3ZRS9M91LxMtWUJ9",
  "key29": "4xFptMDRKW7entitwrX37o6dckn4ZFBJ3J8YnxVY6cE8aVN14VUB557Qn3z7sa14jijUDiFX2Pf42Cc4TMusovR",
  "key30": "4hPQY7JQVko9X6G5eQEUjbRbQsYB6Px5othP1ZJ7DAko3Wfi4mBEkHzLPMeRKJbmyRG7r6BmnqG5ZBgt6Vn9sQJc",
  "key31": "2U8kRoTNYkVbVWnsfAGCTubPTKHi8LAxxiiacLwb87v2t7Z5oKYjkQ5BnH8e9XQB2mVopTizk3aJxYozZ486RGjG",
  "key32": "4a6e1Hbr1tpxHGh8Sy8Yysv16ctP3jAstNJQFsDm3UuuntYc9RMVbAnwdRD1a8gaHpghyPtz6gfJyWpce3phYTMa",
  "key33": "4Ru4KaabUqXuePxLY8ei8sX3gMWsyK6dfhmCX2kLUZGcypuWqRYUoxPfHk4xHEFVTp48odiQQCXqnp3bRL4sUo2G",
  "key34": "9sPXXoHLaf5wnFfSkxSjfH8xcpwAgktdQq9j7aPLQz5mgvhXp4u2iMzmCC9R74n2y3MFdju2jwazqDZzuNzw9iB",
  "key35": "37QGpoA3a4ZJrqad32rGPjgmbtXpG2mwV69GSbJmJ7mdQzyGi9jzSfwrPqYZgHDZ2FZubeaaLE9FRLdBTbuwXief",
  "key36": "4BRRzPyFJ4F5JH4EdkLAkR817EdZcYSw9wtouofqn7avUgZeuutMKiLm2QQ5EkRR666rqtEVHmZ2YXruKz6Qqmz5",
  "key37": "5SWnKpXf5PqQQVxxKD6v7P3JGu6QCGSrVbrhxiGbR75smFbghoufiwh6ihWYXkYNkhSmdwSm1YLaxEg1ncryCKKF"
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
