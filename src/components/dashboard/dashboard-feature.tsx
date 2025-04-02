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
    "3wjrSULAYeGGFJ73Zaq6Kj41gKRAbZAkGpnaG2XSzysUWQLMDUXgMeqj5moZVfURnaeuNFCkigxMEfyaM9Ze77bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G61VB9yE5bYtBgzN61wdTeBzqGTSBXRgtYKv7qmCBo4ApVUKXEZxwhXe3icEnkKAErmt9LiqKafnacS5Jr1uupk",
  "key1": "4JoXjVD2iUHvjoqGgutpkb5oZvYY2dLNoMjTLS4NrAa1wQCWFx4qofQp7DFnw6JmEQGXbYiGtQ96Xn7MpuvZa8GU",
  "key2": "2M6bzhEwXM3sCVAMHnWmxGY54gFdFCZn9uas31ezhiXgtwaSKzPFgfRbPsoSMvCMgufgkLzeT1LFFxbNgn7v3QeV",
  "key3": "9KHBNEyBmVga28LxCh1qY6sahgTSJ78NY22fTEioYP5nwtncfCArUdnL3jae6PzoSdpyohT59o3C3rdEDD9biNk",
  "key4": "4JR6bWY6pzwJ7LbHa6PYvixxRzAafhXBg4VDhARL7cpMWPAhnhWpbdyrbJtpv3Waf3aB8zZVvkFqBNoUErPy4nNN",
  "key5": "6731w1L4hL7ddkVWKc9bhuUoKKbLMtCn36RNBt1DcAQgxxazDm1dtewvA2vduTkDUh8H7YZrEpBVXvvess9FabXC",
  "key6": "4Mn5fQeJXNhydRHM5UVELpo8NbSyxJPAEfSAYVm89JwvWarL1ahMYhiAPjdz71GvB3RCQSsKyexTDcbVr87dzVN3",
  "key7": "2JftSCEquFX2nBNRJLLnicv1n99Bk9EcNsKR5k95zrRUts8ixDB1LheCvN2v5XPaKVvZsNLZEVvp9nM1LVr8Vph",
  "key8": "41GRfXz5232Pxa1tpqdzZCfqCQ1X49mA2gdKkDFyKb2fzoqQnMhbackdTUE7F7mBR2FgDSCtcEk85vLHuiLUURKN",
  "key9": "49cEyxYekbm2akmMV8Nw3Y2MzcfiezegrAVrB7akgCK1DtDKbRJwa4ja6R96FLkcdWZDmDwgdfQmjBqG4tHmmFGG",
  "key10": "33xZZfQzmAZbbnVbJ9fmxNN5P5PBJhgNXNEHWdEMdt1Vz8Sx5aEr7kdoneBsDjAioSEs66Z9Rzs6VrhaEvFR4c3T",
  "key11": "3sKGbP8WUykm5GvRYcmrEiX8VNcqP1WSes67aeMWp2ZB3tRLsXPuqrWkBVcW364SSHHNWLNuBrgutSVza6fGXT3o",
  "key12": "2NrNczDd67FrEAqSLNKt5AXT7VnuEoeEh26GD1JbKkYs7esrQaXdmMhZGjtHTzwNvNGCkDsXgFnJ9NBxrbRCWMaa",
  "key13": "3kvMm3kGSsNGAhrck4RhFt165Dq5TQs2CVTbfVQGxGRi2AayRs1NiMBx4GRRZiYQUsppgYeyPevGTBF9qa3HrGoV",
  "key14": "3EBYSEiZB557iK2yweqpa6oaPqfGz5MXBBgDfSaAQA2A429xy4GeuYXDj5KV2cSp4awNDJdzSC4v9MJiJMmTQZJ3",
  "key15": "3FGJDG3YriE8rkNr4hsvj6iHF9o9Q2CzTEZJKzoAQHGufTcW9WdGVWmpyp8NZHFbgXc6GCZJp9H11id67b136Yj6",
  "key16": "WV52QpwD1SuCHbejp37gXoSJsv2RzNT5bfwpKRMxybDGpN1Xf5DZzgRWt9ZNSzwZUtrnajuL9qWFfwk8rCYgaEc",
  "key17": "5uPyQj9x6ahVFaZVuSN1knSzVGEuTkegcTQf6jYoCn14YCZ3VWmQk7J6dqsNMdQSRv5F3M3AXDhLmKbTp97Ny9xw",
  "key18": "2ptH251mYXxTDvKF77Do7ZVfWx5zW7BUxGhmwJNcuhSJpiL9k47QoFYVx6bZUTcNgp3wckfv4EwskfRrFRiZsSMY",
  "key19": "2XGNoDPLqNC31JisVUNU357CD6npE5nA22DsUWrSPQZEk6mKyh3DWf2noRQ5KcWcf2amaeHeTYHGPdn66X7itoh5",
  "key20": "R6GVFYvP7wYGkoZQCJgPmjA6W74CnUVgPzivzTwJ1fwZffDu9CErzaCW48YagF4FMhBnEHnyNJf8ATTQTWfm1tV",
  "key21": "2d1vDNe3W4Y5qdxUEpDmvhFC1nwfYA66nouBXgMPiHrD3UoRasgJt4jeboPs3MkwbV4UWcTwfxuk7pxihut8yaRo",
  "key22": "LiWLWZxYPBShc226jRm5463aj9W25DtTrSmmKcPNc4Z9Gp7eMHH42eCCZDQCP6PeeWfHrQu7p5RJa9LxMGK8H1h",
  "key23": "2tihHH8whbftM4rB6MS7XjowHc4tXz2v9oNLG4FBe6NUiKGzRHU3vDNykbbH89mY8TGykjcf39kv2Fs1Gb9wwrEY",
  "key24": "2ps9sWtdqu2TJv956hJ6Ythoti6ev6TVGjWWoBov8ZKZ8aVgXzogNyUih3V9iaeP7tLeccDMePb2FBgENyQibiTG",
  "key25": "AdnHTPL4GoFQwo2txfspKGTJTyHEqZ32FLN8nLHhQP9wna4SqJk673WTjjte1PrEKwZUNFxxU5RP3iWXg38vN97",
  "key26": "2cmd2gMgoyqAGFFdTU4ShCh32TZyqfiaWViJPisXARuu23WtvigdAxN4x5v9bMyWUeQux8sHAVHno5Gm8SdPtqBm",
  "key27": "4xC2nZKRr4Qd1wFnDCaCc76yKET9kSBiRfTzFYuwRpDtjv9xDK79KiLLYPhzU58JKzRbsSMjETUmn7LrWSVBhya9",
  "key28": "2pbD9GVjDqsjFsFjqk6EhjbNAGjfAfEbvdhW73QLaa6aDLbpsJnZ9LZ61NAg1HxbTcCFJVWoFB62UbQqC6swiwRD",
  "key29": "35FttY5VXDxdm31CVZkksfhrbBzKu6wTUbUtajaYtEXHqRdAs9UVrFNi9jwTJLPDsUGHxruSRduyFbG4FtfosAQM",
  "key30": "2f8TYntUTVFr9Ler672Qkk5ELmcJEcqKtLL2qJXUiC8MGM1d7SHZGmAtcLKNTSXuegRQDteh9NqetmSee84L7vzc",
  "key31": "4gmu8nXtupRVzCjnezfWZAtTFNMH3QNvXM72vqpKmyfSnAXW4RRFsgtPMZ8Lsg8WnzVikQWEGxGY8HFHU3mxrLaB",
  "key32": "26sD15wF5jXSwzNDa2sBRAJaVrk74LafWdTTF19ovVaumhfbXRjSP2Hg8KXVv1vzJVp9mQKQdi7gsTLJWNo5mW9M",
  "key33": "56pxQ4VLwdEvf8CBtqLYeNa8cDreNzBaQU8bmZxZNzDTbAHgh4cPi5CGNhKsp588QBQk7ugnou6vyyNgZi7DR2fL",
  "key34": "53nCrN6DcsrohnHZGFD75ju9fKxtZ4FRCXnDWtRzWfuwjHeHCZuKz4k7GZaSGFP6KAJ3QbFFsV8vHXkJrtPvEcpe",
  "key35": "cVR9NxFVgnoJaWNk1TtPc7vQzC2C8f8H5JsQ2BhiRJCWSqut2vMieaNqFMG7kVQiptNTtDTc4c5ZV7UGUtWzae8",
  "key36": "3sXvAyQNSN99YLPcDXWT9CHMdUG2owb4gUWR2oECwHFLhuU7fXbZqu64Un5acA2KhMwJyqCgsbzGkmafZX9vxso",
  "key37": "12Ct4iNjjtqD2tJMT7Bs7p5RfL3SYeZ2MRqp5ReJpN17bMbkkVRtEzCfTVHNNL5CFmFmCgr9mztBAuexqmUzqCZ",
  "key38": "3EaJTQ4ccPeTu1juVDiFhBtw1UJMTVhsZ5TnjR5p6jxtfWiFFWtpYVgnVJgWpdKs65NvJcUJHXdLWyB1wVUYFgsr",
  "key39": "5Cb1YSExM4NsDDWygCB7xVF6KFaajyLixHqvpX4JxNdfzWGFvZJ4CuEgoxTivDjCLvw4bEGxyAtxQTPy3TmPV9i3",
  "key40": "4Zuxq2D1pmcJz3Y3SupE3JXJayzNcGPMCD5VFTYQoyJ2M9hyNAf9tDVUPQBWQK9Ap1caXCd64fVCpbW23Dgva58R",
  "key41": "4XWS3VK6NktGwrcQ2Ar79smPvbMUCihtKYrcfg4cvbXqCWe4JChSJcUsohjDTrJkpvCrsXjWAxj3cjMMoGtxqV7z",
  "key42": "5YQgvcLCFDZqQ9oiAM4oKLp4d2dAjEvuYTkRNpekv4aouUMVU9f1aztnRYrmYZzxZ7LciKzVC79ZHKP8CS8Jbfuy",
  "key43": "4zgXw5s6KJNdNcZnqgYa3ypjG5VV7iXnooEbwzLiYbRwZGoCsuVDCG6ruoUJC27VqXvT4NMYhjoPwLhmt9woiqpU",
  "key44": "5bskYVxBf4Q3yBuuoFai92nLGb4dYcHFfqLjvqR4enr2wfREA89v3puPUeqDfjU7wCT1wcEy8aLApNoMRpF1Vguo",
  "key45": "GuPi4KYosyquHhCdw7Ev83fqa2UdKHLmGtZ8fxPjqKi43YPK14Uk3fXiwBju46yZKhpNU73aTLzBYuWege4wEcL",
  "key46": "2cnN4PdobzHFriEsLNoejfXaCVUBT2hKUruufPVTGCR7eSX2ikGuHbd5a9JqW2XS6A2AgwWamFgBnEVj8r3iRbiG",
  "key47": "4Y9JEzwwpHdaki2bGeK5ooziETZDwXX7xL4eUpCQCbDQnGxCL8NyMYFKyf2a2mFw7HdyKvejvV4zXCxAnzCf3ids",
  "key48": "5nUVoyeFtzyoEiFS3EidfpEWxpp9A2jyFyRMY1msw1fRKZ2GLnsHaZ1MLFsMDWoCnRvaCLHrA9XG5qKg1R6Vwhz"
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
