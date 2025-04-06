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
    "5KykuJRTiyEB8i8RoiBZdGt4C2JKuBL1L2c7QjpdhbhsBUJbv8s8gjJUvDtBVPDWLspQrC2cWpCVwb7bSAT7KHTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61U4qFYMnPkUafXSY63YEaZW7fwSCxNSVhwJbgksS8KkiiagbCqWnsVBqY3N6n4GWUAMgybCamXLCu33u9wf2Yb5",
  "key1": "3XTRCxue73ajNL5js2TTXwt51tHJygCwm6HafGmQ7PRK3tM63xvy8vFm3t4LX1P2fSLgbnxduLvHqn3fAVxTuNfj",
  "key2": "4vYeefL61wm9V6XJq6ZpVJmeKhSUwdsQXRJRckkWZdf53nxHCL2v6WBsdioAr6Lc5JDCC4tgkSk5mpukLRtDJZtP",
  "key3": "2GxijZ7gfHuMRmhUL3c3jaVL7iagAct6jFTP2oRftCGajwrpXo4xoA9kNsruqzvtBQ4SSG3BAYLyEt3S5qLmtBvG",
  "key4": "2GGf9oZZBaDXnGWDtgWX8DproBH3goZCf1v5jVS2g46VVLUUtPbnCrGntawps9iwrnHHSEBCTKxAFWBpqcDW9T9p",
  "key5": "YwxPLN7JkdLm3Qo9Cvtxycvcu6XWbMLyFzfiqQqQ37Jn7Tvd7XgrrcCinSDioT53zK9JqCZwXFfMJJqNqL3irUP",
  "key6": "5rsxH2oJjUN1zHSR16qBW9QzkGc28VmN1gsnQfL2pLnAB9rvde8jd8zJhqWosCLYvqFPPJ42ZswRQv8HowG1B4sq",
  "key7": "4MXgqMtXQQQ8pNZDydWSKdmhkNJf3Jj6Gu16cwBgpopiqaa4kfRBXk7LJxj3phMabEYi3pWcYQUVW9qYpwZE2Uej",
  "key8": "2yAkD9e6dz7dzjFouSKht9ZA9Ws5DdvB5odLS91AiUiBdzs3yHhwTEH5pfJ9jy3nzCPdXdS1Nb8Lz6pweCFxP4i1",
  "key9": "27nQ92ThLcUDxyKXo93WVJ1oyafAYXboEVWJEo4qzK9izonVaoVJGoFomTdaBS1tFmnw6aqBD9aHWhHFZfizRXNB",
  "key10": "5G942t6FPtuV7DC6mKHxh7mxUksrvZHqAfjr7xXtUrNNSDzjQpLZCugr68nyyvkBXwTSmixY3yvou7MEvwXahiR4",
  "key11": "2Vf6T7WSj3g3D16g8AvDxiU1zuzcDSYxAFNKqr646WdDYC2WmXegvS69YGE1xfmTNmAGeW2kHg65REQ368BWR4XP",
  "key12": "5hp5UnZ9e1Fkx2FzfyhZJTAG37SHmQr7MdzGi2LazzLqARmaiTxLLtVYYKihmBTmB7ZhsF2T4j76fNh1Gzo1hYd1",
  "key13": "3EYLZAYtd1B3poSG3GW8z18WigfzzLZ8a5UYchFM5NVLAa7gr9P4wrH3D6XSWFN2DoKLBaMyk4pjKcGvVvwZ8fAT",
  "key14": "2y55y5nRohFzQx43eMZFV3BZV8SkwbC9yxH2ctuGtADJRG4n2syvKdtcTVmmiekRSQhNcch98GJijUrjfTPYD7gY",
  "key15": "3hCdjenw6Fft1zprVoatMe8uxXhJF9qZiUfuAWU3hLURD1D4bTHjS168YzoAuuKRMxFaKB6dXJqsbMoiGagC3Cen",
  "key16": "iG1h9ZuzdJxpuwBezTrZXmSRjQFBUWW8szYoFpMn4gwQA2AEzxNZ5yDqgUQrxS69e8a9L9jVy6L83dCQjZ1QdG2",
  "key17": "rnRs7ptJ2FiFE89UUfqbP6VNhLGw3KuLbxsDQTGkQY6nMpyBoj7B8U1CSJSdcuWJUxPCt7ptupTkfAVNqvXtJNv",
  "key18": "4aUNqBxi8kb1Fh1DRgCMQdrynB1YVjBkvbMzEFanEeAeamzRm8dEDYe5yhxpkpNCWJ8b31AUgfx9NJ1Bu1BnqLJi",
  "key19": "4k8Q6niCfgiAZLy34LYYA9tpaRberRoZSu1cM2Awvc4WfvYBYUwQ3VmnXubMVMG2uivPJKXrMqvv97j9Qwu7e5tW",
  "key20": "d7fY3WASrgt9Y5DrVkx94oS9yzoV4BhziWKPWaov4U8M5htSAFiAEZc8d186R14HWWCZdVzcLemGsUhJ4pZwB3Q",
  "key21": "4Q37aapiT8s4HjARj9uqjHcxZpLPYsZKY1Mn1JFbtMCmCJs5ihAdADYaivLzsMuSTpricAo6Uf1TXHvedWBpkoik",
  "key22": "3DbDKjhmhN4qa5GRBpxG7Q4GZo9Gmc8wrvPjLUytYmNAq1XJk42uvHDEJgMhGPRoDVdMxPRuvEakxKCg7Zawx7bX",
  "key23": "ZC5zFJ8gnJnFnn32NCSHejzZJHuQPGGck1mAbHc6AikD3oWAhxxCLGFiVBbPvgGVrc98jzwibPre6qm2uq7bntJ",
  "key24": "4xqpWFqo8LHYrgJBL7h1hxEs9zfLPCgSisu3sEfhqBVdFKtv94shhY2Nnyr2nRVBDZRviBRnHu6W31P9HNdbZwi9",
  "key25": "JudRhd1v2sxhhgTjv6yW6TchpYxokaLYYBMfZ5AqoWqkfd1z3mZo9N8sgRwCU4U3XgtinaELSUCuDg9E9Fs1wKm",
  "key26": "5M1Y9qXUonJW9GhmyMJ5KiPum2mChJsV1Mdmt5RcAJzRuZYZk26LpSVB2g1PvP64g9hMfaVttTqaNeozwYcKbJQq",
  "key27": "3X9DUAhDqGLA9ABXE5Eiqx6PRSD13V4yEK1tNE6TVjZeL8p5S1344cov32Z2NWGTNxH1di9Gd8DbucHTtg43Zgf6",
  "key28": "5mPHaWwzD7vCwKApKW3hTgWz95ZxcgSX4KazCJdtP4XxpXSpPpXrukcy9y1rrQ8eEZT8w1AuvdDRb98XGW8wBWyX",
  "key29": "55kgTTJ4f866kcMkD8ZZc7AKUqwobicoNpGL5qwEpqDZdCyH7zPSj2qKHxzAoQm6JrB9DFPRbCYokz8vQ19iAKz2",
  "key30": "4PUhQiYNibvPVZUT8SXmasZpZ1tU3qDc9jBNhZKYuGgqBmmC1uzXR55RAifzERzCzxAb3yfJhgWFN1FwgYEwhpjo",
  "key31": "3f6FBeD32phs9Jx7jUoZMq8Az5N54RNqVBNR51yzndrz49j7XdBU6HGgh4uL7pF8ATNsn9PeX7gjnSna6dvuosWh",
  "key32": "3L1qdxN7B8xGE5zH5fUasiPjgDPTUz619qpjyyu2cBDyAtmX6Q4woFMaTsVEgHWDcyUuokvsUEaZKn7tJYYrH5pR",
  "key33": "3JCd3wmfMLw4wmrkoLCfiBiw2fw17fhfZCfZbpMra9yWcAt4fmtYbjvUvhET6gKs4GzCqDkCXPeyNzat81goZ32t",
  "key34": "ASTqcvU2TbpQkuD3BkLgqQKuJF38xNfYdvvp34SMyJL9D26d4a71Tia9U5HjNcyBA7S75GtEFALJwCGZgE3JFrm",
  "key35": "UAoTgi6wm5YqdiyM5oX5TBEeSvGGYe1gvEFvt5Yaas58yeo36z5vfhdoPtZsfK99CntHrgwPmDrqRuVNUUtN6as"
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
