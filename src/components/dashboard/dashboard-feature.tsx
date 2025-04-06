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
    "2bdUYroLeYPk8ALDrRaoD6nbASA6w5bzjL3Lep9B9UJboP45jxez3JiiKgWu4AF7D79wwcBDLmRYYrPV4wuLZ7hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNt24FMmjgHtY5U4bSZxhJxvYrErNFcV4eFZUuZk5WFcv3XHsijcwQE8E6QEfMYdLUH9aKNLMGns8weBEmN82pD",
  "key1": "t7M7vCJuWfSTRWmudN9Bgj6URAHWkQbq8SJDvQpeS2bquGFUEtjWkpKt4o8QzFTpghTMwbHEPtBMKXAFxzD2wVp",
  "key2": "55BtxjbZeg4hUFVyCGPE4yzNoeW9Dad4KsDutVt3MW7wcKiCmvnLZRAzf1K3hDogcw95seZ1zfUGRHqaJoxWRjrw",
  "key3": "5gQ4FTvNKAQn9DiCwPge7UEwhCweFpXJ5K53h3pbfjaAF1WhDoHTRtsHchi4eefYw4zByAeBqUNbwLVrHudZRLwc",
  "key4": "3jTRes6i3ab68iQgWoy1UPEx432cjz7keZ5H8GMbS2J99Ksg6NniFFwgfGiVny1J3fdkAswiuRjp3Czq8JKNuEuY",
  "key5": "2BSZNSaP4Ck3LJ9TV1WmE4zaW5e4KWFYJab6bxNNKjjpGsAQwAo4hsH6kzfwKFr1juTGBNYbJfMUiPxvougfuabr",
  "key6": "3jGGGpysWDqGXo4fLTjee8bN7Pe87koQiJg8PtBLsayMY4N7PtcmRetZQAhhjuaEyPx86VTfCrmsv89NCRKHWHbt",
  "key7": "4JhhywmvoedXqrc1QJX1kGFve6Q9MvSAfZngQ7LyP2xX44Hbdai8AhjbA8DaNNEpdm7YoQyWwBbCUCPLB6xzPMwh",
  "key8": "3HCNiug8gH5vcLi22WpDJQsP3GP9PA5RkzktUWAtNrXBSo87K6VpGq6yMeKYcKWPNHwG3pdZLUhPeyz2NDS3NAiY",
  "key9": "eoCz2CkjHXxpmA2uah8kocPv6UVqrBxR11ULayQzQNBwmXhXx4AbLtTZi56ioY8paypVP4deX154RtWnRRb2SYH",
  "key10": "4EhszehrGNfmQpSiZhYrVYy5eEWF6mGhfXQdFWm1zRYdhkk9XnxnpuNQAhmGVPyWE8SVkstNZfuvB1twwh2WT8HY",
  "key11": "3kqEXoEJpZxe3VJuxoYQxz8tvmvLsGK1vs4EjbRGfVnDQDqUovJHKmU6kEMVK3zPWp4somXFBCrDRBinjrd3LKMz",
  "key12": "343cMjZyyoeKDpREhme1j8DAKeFPjp9qp99somdLKJ389TCkHjxUzsJYxPKoPyYkGepnvNTYKDeeoRyYkaCa5Nqp",
  "key13": "3CNBRPZ85RcySbL9UeQ4muEfnk62vZUcUJskgmj3CUwQKqW2CT5PD6zKfzVZb2eQBKrdseqrTh4oCpsRqyqHmyDc",
  "key14": "2V6c8UGQtseE7LGZRwoMN5VYf128nqr5dgFvjnLbykchGnTVcrFJwysbun3tABt9t7AavdDHnUJzJ8nPXfw4cCp9",
  "key15": "5Yz6iZYeHCxGnwbo49oepcmA9Qy8c3RjFwkPKPugFbWF7DwLCLrmeNyvBQv8f6p9WcxiamAyZtvBQDLzPfgseWAX",
  "key16": "5FCXKUbUYd3bV1TJYg6MJxDdXAKe39A8wJe9oPVuFTaJVTTqHWowBAEHCNJKDxFw84MZhRZT6ERfNv4Qy24DPpdm",
  "key17": "3Z2R3e8tih4Dv1SMKhRZar2L7nZATW8yaPhP9W6fBKhzXawmAaxUNiFjbTXKg6TskisUi1TKk272ebMZtaAM3Sv8",
  "key18": "5itkDPLqmjAS26XyQRN6MAQpvk3ZpLjHxZnubB7J8mu7JrhkBcLrmX9yKbFCNfDEnFWzxfAaGwAiSeNNSHsRM8ut",
  "key19": "4HevBXfBxLEZ9zYBCChGjgMEF31t5BRMQkBLyKuK57PYH1YUDGDkT9YqMhr3dmECvaWtfKcAoXHn4sDq87Jvvm1y",
  "key20": "2NorsgyRQ5xvKMpLrNBQaYYPanB4DfkB7Eo9zy12BGvKtLkAzwFLGQokMesM7TTZysW4DmnixNXMpBDLfjKd5Vko",
  "key21": "4kGzS3JwEkz2NKwRErGvXmTWFWTDeJiYrb6nRtnuNJsLu5d16inHYerBHF9gvSPynQLaxdZzJMuPgNni8asnV7Tt",
  "key22": "4yovAbziqN16pJmniucJNxjXJfE2fmiy4Rbwj7mJ6PS3fC5UpKusSpYQn6Ki1FtYtZYYnQ3ZkavjPvaM387ccaPA",
  "key23": "5JStHnXYFpxR2fWSnrHQPkT7guBfSmiUvY3yccJXphosf6AV77Wc2fVwRB6c2w5iGfDAX66YF4zLUdQoLnBTWe2i",
  "key24": "5PVMtAaYfdk7eR6EkkU2ULKXQsT4YKXVSkMZo4T4VGnr9RX8TgxnEGj2f8Cm7f7GKxnG4qzhTtPQ3EAc58YjzKfr",
  "key25": "5WJEBoZ6Q6BUwUmJrH6o9gCvMK5gRmhhU3vbyrkSUR3sTWpVa9tcv2i4ZjVAu65f4irUf1tXXe16nrpZiJKSx119",
  "key26": "4T3WsuYWW5GBCRynYrZjfxQhZVpJAtTA7o9mgd8r3BDdonyWbovM2CmxDaudti3RnZVzYXxiDqanYsZ7SPPbXcRt",
  "key27": "2Pz5gwXYgmSDpUMufbGBQLYUMA3TZeKD79hHeUK1kfVLhz2ekAAKofMGiMtkgifzPRhmzHt2qXuUfo61jHwTb3Fj",
  "key28": "438gQsh9yBvdcSLMQb5nhfnRVTFje3dPo7ezksVjbk8yZ4Xn5jG2KmoR64Mf3SWXGkQ7aa7r7eZ5qsZr5cLz9nce",
  "key29": "3Ja3SdkHbrEm2povWLvBvn57JqRUm7mxMCwh51r8w41rmjeA77XFFfD1KaQMGaUG25Am54ejJFkUrh1wTQyXRErh",
  "key30": "pQs5cQ2w9FrB53X1gmPyxx5Z7q6NhxDVsQQwEbnS6GN6vTknBPyszta8CKEkVbjzsiLeoSEkWHYwB7iAYXz2wSK",
  "key31": "2NMSfDJtRyYkp433MQpcsXATFQvvUbnm5MTx5Zwwtf6fFuWVCa9dojJJAwQi1AgousXK8eEGZCqUs6WKCHSYQZ3K",
  "key32": "Ci5Qwgqd3pLvFrNyexW9khi6JAp9B7SnmGm2CszgVy2qBLCK1aj2E43dv5jHw71KogTxnBG6DTfRS9xwN297juP",
  "key33": "5wXrTPtiKD7DCHektqFijQeVu1pSRZ1v2TaUrpgkTm3vZcM6CVHU3CNujjTDQq7qtfeCVNNinnp67UzGjLVtKQvz",
  "key34": "3huD8zVNGr8E5Z1UsY6vHA9w1roKAHpNt2wndMfG4cAf8A5rbT5TYnj2W3SSyziFADez7Kf3vizX12KVqaZgK96E",
  "key35": "2gR2MAvBFJds23BBN81AMf8ELcGxPjfXzEnn48gKCJVJY2W3TpcoCwqT6MH9TyGSLCqDnc5UUCqBqKWcLUd18iBR",
  "key36": "5Wz3jct1ZFABHrhZ8dLwufQDqzDRB4Lt5nWgDd7Eu8je15KabZhr4reNbwjVFXYoNnD5YKgWfh7WKdZNZcWUjykB",
  "key37": "5okcPxtTXfKb36kwRpSjR9ixHjiNa2atFy4hy2z6H73EuLUsd9F6JCntB4cgY8b1iFc7EVNjSczhK9mtBdoQ3XQP",
  "key38": "4uRCmn6fGE7Vrv93VzLBiHCW7TvRpNvr9Tw86XnjgXEhvsxrrLbAK9HZpoavQ7aVFwxcpTXp1ehJeG571YvD6LFQ",
  "key39": "9x46FS1kkjt6g3JBo1Ygv4k77mhLND9QDZVsmrC6nh8bBmuRYFUwDaCyAnY7Uw6C2xTWMGJ6zNdLWWF1RwqHUXb",
  "key40": "34qPMmoVCU7aDawedH2wSo17f3wQCj6reyN9A9sbAiKhvgXYVR2Tj9KGEkHU9NNFnvrTLisvbVhjPYeMoyZJFQJx",
  "key41": "4H97farBQZncxBpR8oiNXkHB9GYGPUKcWyQfnPGRuPq72Gd5bqBBBRcFAdoL8GcB77vLxzbgLwZcUjdzhEG115an",
  "key42": "4YbehTxspaRLcCDCmLAsfszKvCEwSzo37b9dyoqxBkuXeF94kPMSbPadB5X52d1jchhoLGVHbQ7EWoqYLGgD7Cho",
  "key43": "rdxFUZTmKei9waNatq7UUK6UE3Qnrthkpdm1Q5ja8mzU6u191xY8ELnbi2undpYp5H9mmf7shMhXELsNSiSShDJ",
  "key44": "2grAkkHHXZt2bZo3F7W6Mz232przWPJWWV28G4aPGHYycDmFd87dDeftQT5yw29gMUJzJBwQC2evXzzUYLZnhpap",
  "key45": "5rkcg2QCVhbfcDK8G3LU971w4gBLuzebvbcFoq3rMuDo9c5bioHBgbRFokpRQNfUsREmeo1QrZAHuF5yFafHKU3C",
  "key46": "DnCXkirsFo2CLfLffdFVGMTwm8ePPkqbVNtuBzqKYjAs591GE2q4Mgi2bYwCVmh1Kj9i81J89xBQd5PBdWakLBs",
  "key47": "nYWQAZJZAfvCSxacCnW2We1yNthMMw29Vvu1gj9VR2vYGZS6m5CbVLrjdS7tvYPdsdWMdrrJC5aJBDADeynM7Fk"
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
