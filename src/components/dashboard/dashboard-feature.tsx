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
    "5u1GiyJQKxf2XNtjYUYQahSqYbFHBREaFX6mYPePHdpc8Cyqu9ABB7UHDidsyjnJpfV7T7igyM9gWZSmbiskdnh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37MVBX4LwbW6WKeNUNPQD2FokMwPBNFqKFCHbCYmAjRZ8sUtazPrd33DqSY3RZ3wEFjkEy1EtCkNGTeB8RyqKBJ9",
  "key1": "3pYakqqk9uzHXtFNHPJrzLnJTPnVVSG91emrKoMnhrmiikXwHEtQGSZvkFGeNqXKQyDnwPMSwuSWchZmJ5CDoqMP",
  "key2": "3KUwXUmaQPcouajbZsUKUP5t4owT4QXpkGPRVtwXM4hm7CCqTzAfVnM9HBacnyhxMhyuAdgXtfpsNrTp7sZDQBue",
  "key3": "2KTkg4ycCy2y3gBkEZtYkeV1WV7Gx3V7TPPN4DQWvppPBeFNTtgWSyMKPy3N4sfjSVTuWTHNpZqaqsYLufuTVJed",
  "key4": "3EqkKUeBNJLEvXgQE71PNNEaLC7TM4eZSaooCcfec2VGLLcz3RD8gbsHFF7wG2bWgjqhzoaYPioVtVBSXjbCAPRn",
  "key5": "2jTrvUoHE4n268RRMELg47dbMSx1yoUhvywcgoGjKEnkJrQnuzeQRnGGxeWkXv7TuYe1SmbB1UQBUDKHbgGhT1kH",
  "key6": "5Zoi34wVkYjyuadjFwy42hmsPd7dxYNBr4ZrvijshKU6HNcct8h5rWSt467xvBubfuV6xGrFBgtoYBP7eEQurqj5",
  "key7": "5pSQ3af2Y4mQM1cei8LMSiahDXHeMkCJaiPvF7HM8ZEvTVjMKvR6USi9TmxrF1y6sCi7PEazCNbRU8fgmBjgjpMt",
  "key8": "52DXXrLBcjV39UPdCQjkVayVxGP1mfNRRgBZ6qUyss3LDjF2WfdhZAr3m82bf9s8wAN9Zh1A5LJdG3VrXhnNkfsn",
  "key9": "5zTSgW6PWkKPaPxSuvZTWdXQbCSaQsvNtQ6mi9vycg5a5aPupB2Cy2rbc98YBva3XuB2vJNjxtbGX15d4vfh8kDF",
  "key10": "5abkkc3Naycw81bzifercVsiXjtuQqW53qGcMGMXdN4yQcE9ZXVj9qiX15Eg4egmKV8UgR8PJisUGoGXrKB4qNLb",
  "key11": "5ZrSvpohN8dGwfoETpTgX4zWENj16tfxbztVHoVqbkHcLUcHYuaSqmXrG5tZsDktZFmTSdBBit2ZaKePdvK1QHdt",
  "key12": "4XEGgtxN2ZMxV7fRhubU9cxngBZSNFf4GqiZo9hZEVWGaFBVTYV358ZhzmcfS8HN1e7edUwpLerFNkRy9hXKYwu5",
  "key13": "2AsyrVe3LbTMgXDfKZxbbRHtuyKnB5URT1DCuG77goUC8BB5PvL1d4cHA99fbQ9PTAzXcxmwds9FcG6kdwzFu3Ha",
  "key14": "3bSNVi6HWLhoNh8WHPnpotSNoBi7tfNGG6AZh7DMeHCXuJYfwfCfizSLbYmXcnVztPtwDoRxZ2vs3g7VeQMH5Jih",
  "key15": "wH2YUpTdijFKGzYEKoapMiRxdH59QHWMqew8GTnsaJgP4CAEJLimvxYvxU42meBckLdCWgveCPUmBct1vF7Zhjc",
  "key16": "4T2ScNMaujXeR8BqiHVHavLW7F2KV5QwBWmfHJUzwWBMjELJhttUxsyKibN6Kj4mSPKcawW47LzNuCv8WWb1BDC8",
  "key17": "aoPrALfWtYTYMrq9qcvYrDsDP4wt5QsWoaECM4ooCtqePfjMnbvQ8r2jgSjs8SjnWA6FaBhESEJYn7JyJyiCXnw",
  "key18": "3J1VaQwFMAVdLg2c2hqnujEGb1GWsuDkxzhBXiE1kEmdcM59ar4jCXtmvzPoYSv9SSMpuoApLJgz5wXhA5yjyXyP",
  "key19": "2vfM3i456FgupnAmCm5w8Y6ZnB4x8wHE3EsSoKuY12gXBFNkYQpcX2qJSfKwzkjJC9qxw9wBpkUmsyHa4Kaut495",
  "key20": "J9gvpBbmyjstrzA6tzTvS7p4sfZj5xWXq6eisF8rxBV5YDk7zQhxxVVtCuDsaUerDEd3QPLoFybKVdEu5mY9zLe",
  "key21": "A9AAFJzJMCUEMdQKJ6aVy997YjUqueaj8ohQ3cZKSuvm8ZNUroFkCdVDr12zYXTEH96W1hDE5mDxk3t3GePejSY",
  "key22": "XKKHAcGJM3TWpF9VwovXCKaHxG4vZSSZXgDB1tWwF8SHPYEcBDeRomiB5fLo6ABqwtN52ugXJxN2LhgQLtZqFht",
  "key23": "38rug9SzLGn2uvNjP9aVg3C66uW1EyBeB4ChL1JDGQMHjwJfX7Y4XrSrcvcu1dwh7UqamwM956o5wTEXzeBDyruS",
  "key24": "2TbshyK36y2Q6RQMus7K8PfYxDtd4C7MpzzFNYovVaVjw4us5nMReUUnqb9XRysBdPuAyVXUGRqtDyhjWhzE4qrE",
  "key25": "4a7BDVcK7e24cXius9zaVh6VNBAf2TCNGZWkGwkYgYeYR7w1bAWsyat6xWJFTraVa25UP7si6zhZVGhniAoQ5SQn",
  "key26": "5qRd9rrCREqYmqeUcCzW6FiDZ5Zw3UWZnHh22amJWXY9T3eKYocgeExn6HQaVFFKwzKuYGCqeMCwbtG6rZVMNPy2",
  "key27": "5MnusD9iKLJBjszFnXunccfpkEBqZDoNNFCkAwMdQetPLiayikYVZxAy6yi8ty5jdbn6JoPZKJeDFfyhXd6z2SSf",
  "key28": "2gVTRmBdiAAtZhLwFyGJbaNewfxm7QSHutRAPiBWi1TXiwBLRQ1puvddCVKV1xUjaysNthth4z6KysXks1JhVT7k",
  "key29": "5J3YbMNT1uDW3rNBT72UVZ7GeoNiuwzh16vYBhoBRy66kTRSpGL94mxxnHGu4h8DfBSN5XnNH877aRffNuq1pc8D",
  "key30": "28ap5PuPj2whaAzfEFYsNoMrxYF4HcuQ13d6Z2TWNeh5hnKAVVHHJ7iBbPKFenw1oWTvZHLZzB7BzvUbYtzybfZ9",
  "key31": "3fktgkL4UvkgsPnmbVN1KfNmWVv4nfbWA7UEuGdPYyfp2BuH57hYG1pSvzAnMNtxXXzMvARCCABJwn3NK71Ru7cH",
  "key32": "ngpTPxz3kCJZgf5aVXrtijYyczAZHPCmDRz4G4JvnvczZesVNz1nRCTAxq7oQnDWHJjDoQTTysEdcxEBqnuijZ9",
  "key33": "5yYg9F8rek5w5EEqp2bsin66vL8zSpSvhzGEdvUtea1AEJCjDQaZc1BPx7oTVQFb6Gzo6ZDX5YbL3mKjhYA1EYsA",
  "key34": "4A6VjthSkvDnugGn75WyKxYPnqGNHoBdSshVHeEcczVKeda2XvhNMPEsQqMaNMEDeMQvXEqEUi5CAci55LpjVbfS",
  "key35": "3WtNoQi24m7Sww1gLTpAoxj663M2TeeUjxD1Sm8bQru4fkhKNJc5XUxnYbMDDEHH4SKzeCHtwPLomjGnU39HwD2Z",
  "key36": "3hGxAyaTYB43wha3qyPnPB8RZ7W6ScJMLk3wPEjCp9Ff57sizmhon6PXWFWxVWTtD7Bn6DRWJj9Zq4oPS8Rk4ccv",
  "key37": "49jYQyx75mTrq1ezrWZCnTfC1rSsb9BPdNc5dWfmkynZgH25mM37sbQy3ULdxs4YxkiCHoySUpFuxbeiPxyK6qsV"
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
