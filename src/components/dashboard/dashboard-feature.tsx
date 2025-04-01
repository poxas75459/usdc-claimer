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
    "4a5ikU17F4ivNU3nSEMpXDNfTsytxDfJ5Ny7PyWsgkTvAE11P6GQJ5ZF3JP2usBb3LRxxBmuGG6gXJWhXaJz1MF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xN8ugPvywFXreLdNZdnRQ241mffPknxHNVLDq9P5aQdcsVpemBY5in1HaQz3PrhNr8nq63aSnUQuuARxpEFvEX6",
  "key1": "YnzDqwf8XBzm5NrpU4hh1kKwPJb9Vya7bBtHspidy2DQLZSxLQyCHub3MJSg2x9iXxbS8sCA4VQ2CJ5JeRc5p6f",
  "key2": "4toUCkSP1SM69ytVWcqo7yDjeYyHkkCTwaKdY4R7f5wRvSKM8a37T5HXpPfgzjRvQfGfbpJRSHTB14DnD8DopPFD",
  "key3": "4Cn9FJ7RbDRmYDGJFq9L79BwwhdwqpgfR1Z7c2EXmGGPZXXB6SBTyVi4U4T2SSubn6s37bSxwRENpLGxKoM68DMP",
  "key4": "5p6vQUDG1EFF3GsRxtT9nQTKZyjcU6EzxKE1Fh2srPVVA2q5K8yHcsVNXYcWSeB6SSw6wobuUj12JXJmMT15hXnb",
  "key5": "ySMMTkVXNs78NiSNUEWoM9C5gG6Wc3nW1z1RbEgCFrW5NmAjq4Yc4BXUEMDF9G9o6GTspX7Sn4UyYF2Pvp9GHkQ",
  "key6": "2DLMDqFL3XhnbShzXfbpwdN1HZ2LYGt6Ve396jNn6HgfUSbBpsQXusLM1eTD8sczWjpWLKzTFeaBqSt4BvZj1YVx",
  "key7": "3ojdyGhKoXTqA3s7xU8i8B1hWxh3BKbKExmWvvwrUjTdiMWqg5LufMD2cxzbLgCDQ7pAEtbCHg1jboFHi6ZPyNE7",
  "key8": "22tu68hxF2tc3P7t1NvU1wyqgzjujk2JN4n8LipmJUofhrM9Yw9miqLh11Mf1gKTR6FcBVQT6KH1P5GWw7vcD9AM",
  "key9": "4mK9oFHbdFUPAAED11Wj6hhJe9KBjAr5mTbqBRQsmJ54ckJVQ7m4kuHSnim1oTrahHTHWU2cJLTr3r2ezeGPny4y",
  "key10": "3bPzPyuZYew98ETBRJr79b3VcnqK4dNKpQ4m1nCX2JasyhAUAUB46hmjvyQ5haAk1a6CBbhCWYA1H87wwJaANkZW",
  "key11": "QjYqn7fpb677inJPYRW1nG2WhQXhQkht5bCz5G7Lg2sbhmuzRPTaD5TCPufGyZT4PTwAHYpKmSCeXsPJrUHH4ZA",
  "key12": "28xqqi4VNK3rMjEMKwJh1Mj28tjwcFJEgkDD7EEKsNu3zJmxeAJ5n7aC4bZ2itkxNYbBVUipg8K1ErTxjU7crLBF",
  "key13": "cKy1TTWTiuXnnPz9yjh9dUkBGxAUueKRDNRsHLdxX7fvNpYigC9RCzNEKFGE69EyYqb1Q8oXeJYW2zvR2T1u5tQ",
  "key14": "2T4DnZHUh3Z8Jo2SVTvbwWqDsDVSTUAPNikBMZE93h22TGf4rEvzBUuztcMr96biFhPXk3yaKFcbcLszkkft3VRz",
  "key15": "29ByHA4uF4g7LyowyAQmMGzdNe5rmUKjQJgLbNoUGwdVwpGHnkHgWp7SVLHEdoDV4D3KCf3mrk91RixoDpSPW6ES",
  "key16": "awpEHoCntVgSpg7qps8LnQPfFPzVn3phadvtUjS46vLyrqEMoVe1p7Mn5mdcSomhgWPLhAX3xgtcr36qCYJJJrs",
  "key17": "3bde7YxR85859PjHnxbnvq1uvC5hBzxAeuGomvpVs7doNmfnSZyhkJHHh72wrRd6BrcvL8u2kGFyhThHtmSzgfxU",
  "key18": "4Ee3511BkfYG1H9Fa3QYg6fxx2Ah4rG1s2M3HdVBLLNXfbb61jkmXtXDaiyuFu54W4b1DmaijEkAEnVwACMbWUMH",
  "key19": "9AHkatXNSvpMnZi9zWGUTBHWqV82hD3jfyLRLBMFTExKDv92j2XnwFYWLiFHLrAPj4e5j5BHp47Mnx2RU2JKPsA",
  "key20": "2CCXUFH2GShk7H8RACmzejTgA4CUWLcSnk2gAxLzTocbuyJzCpPHhaiCZmob6zTpeq2gtcnsHW5vryjNTwXG2BQv",
  "key21": "66CU49UQUQ7RBuBvcgFZcwd8UwsSutjUiEXAnhhxKXZfASR2wVZdmHh8p1N2U2JCKdd8LwkgDfkQH5qAPHtBLKqi",
  "key22": "34jDjH6GKUQHBSJhLxxuWU4X3TFhceGnDD1rP1ZXXSCBUshoFk5Hkg2B2CjeP971x31AnpYdfgxipXJgKjGratZj",
  "key23": "4BqhbDNc1rwNbrWBJRscAunbyanBXapxtsLDkfJioJDh5Vy2h6b5gS4owDvhqkyRHQYrWf28wWuPsEexDsAuCA51",
  "key24": "2ZE2xhoDuvAxd9SpstNRvbrDMXC8cSGFYvLfs8WbXCbWGvxdsjdRZEb2HKb3RnKZ1TqPWdKQoLw5CALpooWHUrxA",
  "key25": "5zkNXJfNWATxbxmr2o58jyuF6HNj5RwjW2RMwfVFR9KvVxXb17rV4EWSDhaatRGuTxJnBva4oCrYRcu4wVFqkvkz",
  "key26": "4b6dDujUowKjDqoLLoeaLTQCKrrZcrf1kthxnQKM9e2mqATjCrfv1JG2L6Lbc7T42YiozNsLR2jC9fbGJvjE8aRW",
  "key27": "2Gh1NX35mKXszwikqGCwW4f6sjEXQ6z19Eaa7hUfRRX6KU5CoE66VVtkCGU6cqDTEBU4nnqPdhhXyGxQq2YYh8hK",
  "key28": "9SWsfZ5BVr24gJKB8mHxHRivT5jW8UaoXtS6ydhMvUvuErm88q4rGmJgWgVHCE1oJ7Kt9yBUHM2NvQrhfmrqsNk",
  "key29": "3imo4Bvq3C8VWGHRaFcZmCnAvEhZpEMmZZks2cLWyQumVex4MCwUtQ3N5fyniKeWXwdPrsgEBzHNTj7fQNqMvZW8",
  "key30": "46qvZT7VUcmcL7vqYR6gJTw7YHsSHKRkxQjJKoaktDmeXjb3WckK6rUwAEPjKwH61swwJn3oZc3TWWGFjpLqAGbm",
  "key31": "5n9PrKriFJn4CCRHrh5Pprdt1zCfkRbUHEdKWXSTZ5pzF1DtMe8z2aVWwSqbbaofefwR9QmhfMpDUmZd9FB7U3Vn",
  "key32": "3M55g3ufp7BvniTMuoPpKSWmHUGMSrDb3xW7HnGfbVVvmbYWZBifzeSrSZRHYj6tNb4v4o8AzbgSw9RACt1uG9sP",
  "key33": "cx3iSQPDZPQFMTPspaTXoG5fZk2wudD9uz1xbqd3eH1JAhizRWrTaMnXHhsuZ21uZCKY9qCoSzZHB5pwaEFii35",
  "key34": "BLEi457AWCQZdQSyzthPiwLt2uLccGZ4tWUfRwE8RcTxPxJwtRK5YEeZDN8K8uobbpGpBLRrU7SDUV3RynH5U9c",
  "key35": "28iyJKVFrsxLZURrKQfPzfU5g7RzkKoEEXCHiby4k84vRRr8b5UDcFqnoUshxiMhJyAa2JKfo844uFynQZtQ5Lky",
  "key36": "5JbXye18y6vdvGNaAvGVXBVx6UJapKFBnSLYWNBf6M8yuk4HVLZ8H4VkdVEwYhgBr8SgPgCZ88zTAurhDGTmhBs",
  "key37": "23xsLq14VNDJppV19SqyhVttgRFTzPsCXV9vwsJPL4RfwkryRMijAckdmsTirmPpqYMCUCVHMzQ1pgqgKrmTT2Uw",
  "key38": "4K5Fsn5Ms6sChnqSkTxt9ncZwXC2Zg92ypCenYeN7k9EiDFVarpkxSJsTJuPqE23HdHfGEkmH6NVYtwhXmgDz7ro",
  "key39": "2se14fdrSU7VHRZhFvCijhT9HvZmTG9QYCWKzkHrLCjMk6STPkUhiegaUDWFk8ao8njptM8i6yv1iAvAQpzJ4UYS",
  "key40": "2zsxCUmejNo4z4mVSs77dr9qTjJiKoZTT4oaaphtHSPsufzthbCp4DL9NHBoAmSGQyTAVxPHiwY1kAZNSRBz56sL",
  "key41": "5L3vzax7aSWuVhE3ev7Q2Jofspht5jtEdZ4Jq2uvXy5suWboVqMCLQMi69fRpZ8XMsB6eK8jY4KmLm7cKoA3fcao",
  "key42": "4hXWfZfPs5h68H7ckakvKrjggmmeGVcit3xarxc4B265yCeHxuAwrd7De47sdRqYx5mFh1YiHheokkvFuaaMjqHu"
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
