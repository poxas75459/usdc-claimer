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
    "25he8d5YqWi8UwgZH8sQQU5oJVtsG8mJwRstULTcb5CgiXApP9ubum1pYkqDygUjL1mTNvDPvLi382eivYeqcW9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DRdseioBNoAnw6LRmhZeyY2tmyFozRzNsVLDzfHRC38f63nSzT5ZGSnCwspAoee6ombUzirnbedtyev8WQCQFr",
  "key1": "2AtXkXe6LtYqw7YQzLx65pjYKHsK2Hh11nAqGjtvrontubjeTwz2p3fofa1FTHh2QgVPt8npKsvBfRUUhNba78tT",
  "key2": "3rpKi7i8MHNomnQUNJTBjYyQW7HqJS84cgBtKfDBLWVRJ2shcUGpdN4p87RxVtK2LAg2ts349hEW6PgjrMVqwsHM",
  "key3": "3YBUZN6MxWvqCrzivDyXXGQUNMsiNaULEJUE4KyqQZtCrWiWhKvnwe6F6jTYqApdSywCfmiWExHArUk78ervc2Ps",
  "key4": "43xRG7H5i6hxB5icH9sEjV1Ni97htA435bDdePBBL1Ru4rHfgW1uTmkyDfJBSKTHQSQQgUrFXtJiDS3uV3d2AjUZ",
  "key5": "4Npe3U1gKny3CsauZNnpc13zYUggVJv14EgVPBsu8DF6XqNbryxzXuEB7LYMMAYRtK1gzDPYnQwDnbVxvuKdubjD",
  "key6": "2y4EK4caYWqQoJUfte1d57eH68g6586a4TRsrGNQQKiAVUxZWQXK8vo24xczVj5gkRw1kqMvaifrqcLv2QAcafqZ",
  "key7": "5F2Ksr1yRN4h8WpJ3HQ2KpbzduzXQKZ8ebAAVkfin6Vy7tq7SgkQqDVeMNQJtV4mW83wcmwNeKYxUv6vGywShc5N",
  "key8": "2zEVuKmsZ6LY2NPh8FJdK7KuxAsBua5iVs9Fx678KCV9gu499xDa4VcW3d3ui4BRTtDoftNjvhvN8hasBNxwraD3",
  "key9": "3DWXDGufYuotcFbzXu1C5ZS8tJeNVjLaqSWwsxRAo75sHq3ebbrqYKcM7MNY3RS2CnF7iBnByhsSWkPonoQ45XVU",
  "key10": "5cci3VtohisPsZMkHTJ1oqrbosxZTh8B5HPFmN9RSXJr7o1bPBYh8vqW3aorCoDEpJXjQCm2f8PvmBTpr5Fu5GLv",
  "key11": "2NsPi3afVLyRjkXwsaTMoVWnvzrxEkx97SZK9n6qYsJYvH3ftYkrGPvUcB4mGUhZFTimjseFQZvrZuEGhbeoj6F2",
  "key12": "2SkWbT1kMULob3xkrh6bScYAJ5bxCqq4xfoAD4iYd5P9B44EGH6nBRFT8PKdzunK48d65qFbPYroFsyvmErPqty2",
  "key13": "66uY194p1J3WpSxVzjPpaVvZy7QAYG52yvHy5fyyTmvC96hr9r9qBYPNgL6gzx55Ttrqymw2afjMvbb13kv8LKjA",
  "key14": "5TJ6ZRbUEbs6ZRsguZ3yjPCT8JdgCdhpqvSMuAQo8NeA3Sdgs9bp9WwoAGYehRYUgRGdZjao7E5QjQhm1YoYEJNg",
  "key15": "3tTCkauP6wnEUSA6ZcpwJTrjad9wC38PMbZ4dzgZ5Thw5Jnn3UMjHauBxYE47WfFCeJxoApPY927Yj1ruoL3mKEx",
  "key16": "5s5tP8Z3Dya31pyBB9n1YnYzmkAhQM7U6rwjgzVM5EBTcbxgMoE2haZLohS6tE58jfZrop66pg8rmjNnY7JrYjdd",
  "key17": "2ptTqdyC2qZ6wN5F4wX7y4gaBJop7dbR5hQ4KG7YfgCU3a3E6NQ7ieQpPbckffij8gfNZxqe1xymcNGvgvnCQTUD",
  "key18": "3F1uX8Liskn8JQTX2Suz7gjXKXozyUfVe9MjWjfjcxhdJiSrK4cUjwxCr8aKAFv2qYZsBL5fZw8dcQouZCEi3v8J",
  "key19": "2BbjvaDFN8v63R15SSWnsdftdDmZEHQA6xMbQpUazYh5Vp2Y4vT9CoYWc7mdppn6KHo79f92mwY2VsLeDVhiYfWs",
  "key20": "3SyaLabJJ5PRtmuJptPRNRnxGXXBKAvZ5gkRYA8eCtNnxPdoLsRhhSzYxh7SW78mr22eJmeCBAZATi2TRfozAbiY",
  "key21": "32eqdBzzXnwuRoFss9H7fHNPCsohCmmgHHvMrVrQWaYjt1kyBJ7tfUnBexTNyWo2gfbvaSH2muvKgEmLwkKzTxHm",
  "key22": "3RRGCYCt1oiCqYYJyHtZLnrw9vWckP8rnBQn2shSkJq9diUxREpdpTKADwsuLJbpUYehNRdrkCG2EE1GPvhhr68v",
  "key23": "GPVdPvEP1tnejjf6VvGH3bkrdVUqxmzLiCtbj7tFZ6xVcnScMMbCQQ3brxV1Te2MQux2npue8B1K8CMB5M8guDn",
  "key24": "47V1CKWoLVh82es8qAACmVbZoN67nRmXNBwDXEJoFa4XqX1vrcQAqbFn242AA72hYrjEAhYr9aH3KZ5iQzPWVXGb",
  "key25": "tzNb4AYGxehjPCKt3CsEPZqziBuHhYNgGiSL8f3JQPdE4a8Ry3X7A7KjP2VTfCrs2ygYFe5TQcMyp8zUWx6kWgV",
  "key26": "4qwBavcFTci3NhX7vAJKVnJ6jgFjBdc1yQnZt7tVBFCwSW58gHbEva3fmBSH63ZmCmJ7uVrYcv9XsRwBrK2SaVqD",
  "key27": "22xDLtrj6oVvxcmd4RnGqvCpNsswqm2LXpLhgBneVWDXn86TMtv1pCkDh4pzJCwvLGqP8nqjMGNkR8uD6Ej7W3pX",
  "key28": "4bRneP1sm8hyhpSmTEnV5DXa3NbYup1bhBYW3ran7N3jq6KWyQH9HEkLpQnCKiRfTv9eeejGPJnwhu2RHs9xbA9o",
  "key29": "5Dm5iYgjkbFamCvSgwXYAuVL29ZL7b7uep74XkkpivFgG66hYYEwFEkMbj6ZbVNhVvH82CdiX6U4dgCdmdrpEZGu",
  "key30": "4zh65N9JS8TqmACAxszK9wqtrMDavxwNsGSJ29VTA4jGToXtWSgyw4eEK6ghVddVTzEYvaAcEBT9WMgym5LSPQnK",
  "key31": "5v2xeEEyaVpzVwF2yRjgLqYmxchARA5vCpyn4BDLLw5PzRWHJdh6iyAeSX5THdgG1BK3NbG3teWdGvX1ajHWiVX1",
  "key32": "5jdbqUf7Px6gXsdihX2c56FXny9qA4osJm6nECmTvG1mY98gkNVUPGNCFYNDVB25CvZnAs2CGeHqBSHgx2QeJDUJ",
  "key33": "3u7jPkKW3qiBd9vXGyzNPDaLddkrzKYrbRrDqqsPvkf8CpzzAsv58JEjYVX7ZFApE6ZYFjdVUqQWqRvWaL2NvHoo",
  "key34": "7nPtEB268uotxxqtWQdwtFRiowcRvCGsL4UduDzw6Et5NVbT7m5MKTTMXjvMRNh2RVZmxLRNcKVqgxtR3K7KrN1",
  "key35": "3eaomyev5fm4RPLWabdenf8H18ms9gPVQVs24tubEREb4WUA2JuYPrwqoKQcGUQ8VQe52W8r2BFXC1ctcWjEBuWY",
  "key36": "3w9GezEbZHHvXhcmsH6W4UbJLRTvDb8J4bXkLgPYTNJHQRAD1rUQ5GaPeMA9UCd11yRArT2rARe5sAoreLGnTam4",
  "key37": "nXdAxj4LcDxvpuaKYRMEApSEnUxNtJ19BL4AyTKGkEyXnuMdvdvxrnhNjTbGwLEGgaeaouA2br6sNheHwgmQdN9",
  "key38": "3Z6hZubPp3MgENRQwiNy8jG9NwBMwTWJ8J8JsXAvbie7aLeDGbbkHKSdQjpcSMx382pji9oWjaibnGiqZUdZpJP9",
  "key39": "4o45GBXvpJW6jKNzvyWFARv7Unqi9EnfyaNmUUk52AHUrWVYRYT5nYCxZRrccDZ2omEvQzxF9aXLdibSfwZGvoji"
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
