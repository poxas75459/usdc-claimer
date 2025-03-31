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
    "5BELCafbTbx9TivqWcvgjo9NkxDPVkWHYDZ83yW9encMNgpbEV5jTfMXCGXBkoBMFRKWZ1YpYKFBULQXps1wPLz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8YsbqcNtBrLXbqitHV9ejRpsnRseoyH7L7BLVwPUmnxhWG3A5t9JKyAM18VzWeek5PuRLUeZ1r6PvmNCux1hMz",
  "key1": "72xpzK842fTqYoeHDiw24rtTCHgZe99fEExuXCpTk1CJ7MBSHWA1zpqGiFa8qfw1ov8rueiWZHtMY1BfqV8gjAF",
  "key2": "5Fmv9SH3sik3W14bh1gU53nat8gTPpnUsVMgJM5HjHxSAkEMWq5RvFBDWS6S2WJ6XcUg1w5TxESsAVkzG9JR2XTy",
  "key3": "62zwKugNdkNXtWbbnkGBtDsxry6LQTXznzrV9h9Vi6wXazudxpwUMJfHxtnFce3LQpzwwzQ3FXckx4k4NTcfFNDX",
  "key4": "2KPuPAcMNE9rNp9hxRTMeZ1UfTQWc1sTzWZvocVa3Z4WZgRsDQPv6hQjvjLg69FTHpg1VZTpmCcnzWS4CwaBWaKj",
  "key5": "5vzUYPEodafSaT8GrXykBrjjMfVPFSvfCsCgAe2k8RGyv1B4yazqSv2kSLmLxz2FqxNAwecQ4hWpVm8yzcvicKRg",
  "key6": "4yg4bcGiKMEBuixYANaLfLs66LSBrq2Xpb1GgeYnwZWoysdVe386P1PZs3fQ2tiq6MicLwyv9odV6JvtC4jf74bZ",
  "key7": "2m6jpSVhGuihCMyUkyvzaBhCe1f1t1NPx2snDt67GsWx5yQsRZq1RNXLnFhAvsZE8TTqbudsKwoiaaBva1HuZr6G",
  "key8": "rVWuiSPwDRiuphzKvXa5LHy5iMahcnj3Gnmn9EhqiyxZD3fq628s8BWmFD2U1b3MAHgPhXF81yGFuKrfKy97VQT",
  "key9": "25PJzbgq7zy8wYUBzUnYEjiSRAKPQ6GdsZrQdA6pQFCViisM4CKWuRXmxuqjmgdg7pmEiBTi4bhQgHoT6Z6SePXM",
  "key10": "LwYzGTB15GsXLu7PFjQvFKBQdQdLA7vDb6zyTDvLMUWxa5oUeNNKrjpHWU2Wa7edBoEGz91xZJWxZYDw6Vr2zu8",
  "key11": "e1CivGzM2uee1L6mdqgp3VfgZM7PZcPCoQj1Y6wPMq6ife2htfhjGaD7mRefKf8gXCsjnr6BLXGVqsixKhnKzPh",
  "key12": "VheYN6vj76AdT9AMpivLiGNWG4x7T4sQM8Nt4pxpcUmSK1SziH9MUo7XzbykVZEVXM7tH9rSrAfZWaaKRMreqHG",
  "key13": "sjiC3k7KfBD1Z8vvs2b3gBZHGGiSyLCH9HKhNLGK8F2ttAG55n5sXYPzNcFrS5Gx9YQ2pgsmuRuEwiUN3LzehMW",
  "key14": "2vX21PAaazjGXawgQwNSiL7ZuefRpiuLByRBfvJzaSt77nhERmBqmNiYLxDEiqSPTzwdGkz3Gd2YSarRAFMh3c6g",
  "key15": "4cYPChki1i2cjBzEWRUEbht2PLqvfd5ahrHD1sngri94PdH85vn5dZQtnqnMC167ijGACcScQ1wsLRrZKM9cZmZZ",
  "key16": "5MGNvPkevPmgFSXjKXnmLs3teC3vUWrpVEabXEtHpnjc3yn1mJLQN1TQGQCXUaBB6iqoX1djFpbPr1WoNxd7ma8N",
  "key17": "3bU1zc8syTU1YiDRwEPAfuNSZ5VQgRxyfod6EdWhnyuHJK4jfz2Q5nBdZ6MpDdwAxuAUyahziSUyFGC1kjGQMiXZ",
  "key18": "3Yz89xYDHoPgj7eXfxwBZv3NFukSjymtQ7xSjgYtzrQ1QXeGHZSgMZoeVzHkW8oswUXp5hArBTF6mNYP5XxtxgwH",
  "key19": "4U5ZHWexyLu8PxS89UL87KR2cb9a4Emvf3mnkcXWXCRPqpH925f2Q3sxJT5rm3kv23p9NVDN1XZT6UPVujz8oofg",
  "key20": "57VuNr22Y9YPMcKiLqry36WMKx9QA41ZjNnnpaY2eTESL8fpKRtYHve31ARoyeb6viTULc8QSVgHjfDFNepk7e7J",
  "key21": "2ppEBAMcPP3z35Hy6NPwKVK3YvwUi6Z8Rwf9XMgiuNibeW3rKSmse8G7aAC8bxELUMBoMfCL1nvYBet4Z5U5ENyQ",
  "key22": "2TaKvUsugYqmnS4qRFFJ1Ljf1p6MNB9Q1gfeg6XaUVedQR7RbiVxcKT8wcEjtNbfLcYJGDaSq4gqipZxw3KPbMmG",
  "key23": "i18UfpjtyRuAnZ1B86EFE4jteX5VZ93C3nYt4w5NgNkVX9xzh5yqCiyTWyq9VreDLiB2dSqH1wfgCQfYCnJopCK",
  "key24": "4HeJP4Q1xcNGpySBZBndJUqRrdTvubCG5MbNr59k6swaZ7sXWuiUwnkz1LxnMgY9k11wo4eiuEJtyhtbdXv9XiMj",
  "key25": "61BN5rzqD97xJ2vd3umPRXJ8etZNyWvv86PJV9X7TCWcDXcLvdnkHiBkfCiMdc6XYCH7sE1ZNnVxrNURYkZZSpp8",
  "key26": "RkhDe41K73Y7xEZbTM4oUjdvZDxc1ymZdaA8H5uNwazLjF5xwFekEZ2wSQ3F3BmRj66qp75yHm8LA7thmfk3jSF",
  "key27": "4ZPRGkoEQ1ERphTBkG3oTPZS81pMME2od6H18bDt8dDX3enziViuSzhoJ9H783aLxj7Bj77tj2EiLEVxRtmCuKwC",
  "key28": "3JWEZmxmESWbxE4oq9FWCkxHtjw5s6v5N2yszdZ2e4CiZP1acjoSkqY3NfxENrNGG9FbQFwgKbSz42XeaXsqr9q8",
  "key29": "5zupL136LXoCgw9j1aSGr9AcZGhVmwZ5ziLMwajLmGNAeS7DLZW5B4KokLBJSXwGWymhs5rjuoDDmgSn1PYnNzWL",
  "key30": "4j9d5yzp296sd2xtJZbXZ8422Vc2Zd7uXy2Hh6kgNjnEpEwtudaLub7Jff2HcdarH9YvxSC2kajMbvi4KhSgQZQL",
  "key31": "4RbRxsHv7V8BcfCMkjFgr1uzAZnx4VTP8RJBwe1ToLoGRvvqgfNbbkAZ9FmQpZDaWZ4k7AErkDUP6kWguD3jUVmV",
  "key32": "2YTvmxw824pcdwb1RYP5NdVNAdRhX5u436xhM9fP1wP84cnHtoMgtBwLukJXUEkjqDfGXYp5w4wRjkGtxUgSmspE",
  "key33": "5agyURyX6uRKabNkMBTuqBP3RCve8sWwo9x7RGVLLtnLdauEJafnjpGggNHkDAjALY3qsFDYaDe2Hat7P4x1Lc9A",
  "key34": "5RrwnEGbM5MSXPFq86Gv8KXKRnwKpmH7QrKjkG59c4vZdb8YwYLDd57P2h4VchQqM6rT2tSvu5ePpqzCU72yogy7",
  "key35": "9Esv8ztojYsyHR6vunoSYgV8tkpsVh5z5yTvbHMQaDY7aCikGyLAxVRheVLz6KAfQtdwnMKqP664ZkS7RVm3qv4",
  "key36": "4UABdiiya62Tf9xTU6Z45VfuxLt9WNxJNA5EqVAL1voN7NHuhp6KxmPNQckiSx2P519x6XzFWhSpsSKnhLowai6o",
  "key37": "ivgdoKdAe75LUbxZ6QGeqdwR2Ry94H6WpyidAP3s5d6aL3WK4WKBK4dJivfQqyVtKyxnHAQu8DYVjNJssrXEzwN",
  "key38": "3UQmf2uC9ygrXLYb9kjZTeGPrZR2cgCzTfoxofRBLyX8VYSysN5G93GQZwsQxwnfinKRyki6MbbRowhV3R9eHQJe",
  "key39": "2FLtuMZ4EMimkjA2mYxULvsoNdtGtCzD3ugzxMAjXSWLT71W4ZBcnKLSNiKWDhpok16eU9brP2pB2tvLLyVvUUsu",
  "key40": "rztfxsgqNfu3vvV8EmdqwiELk1DT8AoqXJQoGf1qSdNnmKUEjtUBxK6nqhvaRj7Wd7wgMzoARBLTK83JysMT6xR",
  "key41": "2sCQkQryJjqjnUUejS2HbhFjjgjfaR8mVa4mxhTU1Gzu7kRRyiGr6wc69aH4iBwSjZyS9uiuS5wjkbUtBsh6CrFg",
  "key42": "2SrDj7bpscuLwsPBykBF68rKkoL1JtN1NQWB6eoTwWWhxMTvKSa7hkYh7wReeBBzT4RscueeSv3degcdu69vr7Wb",
  "key43": "28GP22rUfo2A2agHu3JQLTpAL91dPFXzjsx7XmkmVwJ3NSFGqToaf4MzGnjM31Ge5m9FxdQ2XsLCuwEQn7cmFRTK",
  "key44": "67MsZ6CWHDAkgo7n55eMEZXKD7uvHYCbnU8ohAzULo7Sv5SRMXbiefWjfNfMPLPBgQpQUVUDX43FqkxHEhS5Bg4e",
  "key45": "4wtt87mV4CPLCG3iMDemi4B3DpMPWDUeXnT2xi3vdLLGuPCnMY7zvFYVTggUndgeBUEo6EvcB9Mr9fokwVzqM8Uk",
  "key46": "375evHMZBi2SRPyo7bvaXXGc1VXRuiU7jjM93Z7PwAJ2FbPcbxV7YBegFCNnar5asqvKwXAPbzA1Qg9hN1pXqgmH"
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
