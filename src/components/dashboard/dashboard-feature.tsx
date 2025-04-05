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
    "5koBUvakDgbdufDVE9o4yYcHmpHCAsAYXUkdzCDBDktSUy5STfCZukEXwpr3VQmXASJxeS9LkDxjpuRnS5P8qsct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucY6FT13WV4fL5gj164T2dwRjm21JVmXyXVdSy4ReJ7ry4NpTmToBns9vqYYsJFdsSNgcgcMLtJ8wCmg9m13Lhh",
  "key1": "39m9NCKRsqP8xAtaqYgWvTBruiyAQsrxmYoE4LofNJDEcAEPajnMhmJueG8h3dng3mT4QxHkXd7nuEjMWmzLY8RK",
  "key2": "42RUBqCBF6LTTUp9qVN5cXhg1Ky4jipxQG2gjhoio31BWvxJS9jCiKfU2atLeuzQBMa7g93ndeK4mUpPAv3byj1A",
  "key3": "5E1mTueVWJRMi5YKYtBqmXvPszqcQpz5FYN5MkA7RPNyrBWYnFj6tWs99EfFiDD6aRzvpcFvbETi9h8rFAsv9miM",
  "key4": "5BWKRZC9v4Z85UjwW48sf1TrdkCwSGdf1j1zsCf2UAx1HaNG2VRvCVgj3sS9s22FvkxgSwvZEjwq65tFJffSizbP",
  "key5": "HnLeQsy8dt7mXQcNKT8ntM4hBrNyzyGngxJkUFvgnhyecGg5EsxYEtcAdwiKRCfPgrY1LSBXNXgDNWNP7dy2VNz",
  "key6": "KrYk9XkeqPtTTtxDWdb43zDQWY9BqR15Pdar4MRVjEXgYA5JwBjWpGofThUAyctDvmb4Hm2kPzvWj9YjS2DdsX6",
  "key7": "372P5Ea4K8hKDV6adBt4QAfrSQ8eojF3mkjwek3PWsDm9Vg31AYkZcLKo6csfoTvhoqu639NeFqekHswuAEoHaTU",
  "key8": "Q8kY74kKE9CVUSjB1wQadBeJoFx9n7u7h6nZ6d9S5WBDpq37J9WzTL3iG9nyBEgiNxxNeP1qTPyu8AXDb5TT2PD",
  "key9": "4iu4hWcywgTx896UEdwUoBYjKzJzaXAm6xj1ug9pun4uQiR1nD3QLWpVbXjPeyyyEAfzFvWrGKoweAB2WKqcaFFB",
  "key10": "3An5QsRx9MMHFf9MEz64bjXzGPY2F5e939PwV8Upv3EEE9JUMx7oTEAvDiazqLHZTbG1AMeU4MmAY7ovcSj4Q5be",
  "key11": "54pYAAejWTchU7FEK4gau6sYyqDVC263KRN5n23RbmqkxMzD9u2hzofbL2UhyVL1LtXyZoRHh8teSPk1WkkHh2UZ",
  "key12": "2MZy2Lcizm2gQVJ8XbDAZBb11qcYwydbSj8NivNZkERRNAswZQ3htG5fZCGwPRWYxyhDycqa3GNxGzoPNnQNAxJY",
  "key13": "3aWngoNNNoXRm6YRndRzeGaYBVUqeYLTvNZLevEJz5LaBrhNqPUYvwSPZA954tEMSzEtpqNaxB2mxqcau9XvH5Zs",
  "key14": "5fuYf1a8ismJNELj9utvCqHgbKtpMoN7593REC8HNfvjuUTSCiYL59BaTwHZA4EmEXoZEDFdXPrPNosYoiNrqcof",
  "key15": "4nXZTmRHgEDpS3h8Y2CMCDWni3N5HRcS1xZkCDsV35VhhCT91t5Hg6X86s8tmzTqNx4Czy4ZYWTzUXkXjtZFmVtU",
  "key16": "2GsXbXszdcHfuFMJHaYjN5rr8oCyNsqWvDmig5LqC98cfbPxBVLFuKKTc3k8ytTMzLJJs1KFsNRFdA5mtvz1cZPg",
  "key17": "4Rmrb5kkHXWPBkzZmYSDK735rsJoHU4Pcwig8Rc1rho5QKdMzqY2pybbasn1rWLUz3ahEEsRAwXf5Bv6ukTtRj9q",
  "key18": "674hibTFX2wc9oNptN3g6e21jgpRU2KwDrihcxqzXapKXUDxkw7kPQVdtbTU8n5CfP1782vc4cdgvgMKzN8jCmmH",
  "key19": "z61FwaSMisvfFM9GcFW9ZR6wTGD2HbRPYJ6bvH3s1onBcMawPr2aAqTNDVc8jtjMsNStKc9DGtiaZD8ikV6ReX9",
  "key20": "3YG3ardkPJbm5n8SEj6X3pPhxHcfBZiywd4FMPUgXuEBPjaMVMwkKSukHXjKEj69paHQWAYtZ2564pSyh4UMXh4h",
  "key21": "2MZafvMeBwercHxhsz683j5mAkPoAd4KnPtq7btuBMTARn2SBw3jK1Uxx3dXFRV9MccdKRB3jjbKXMGLDEkcv6dq",
  "key22": "3qnqFersTu7tvBLmuXmnBXUNoSpvu3M41U9kjvayX2WYLXqQGMtuCGFYqyYke2Cb9vhmFkUwYXaK3yiAa9J62Mfv",
  "key23": "Kc29PNMbxKDk4FePeKHrrvrUkckKXteBcCfmiN9SkxwChgE6WvxX6UUsVBTZF8hgcs8uS13qMqfL1n3uE5cx59w",
  "key24": "5SnVoTVcoJNPm58DaiyyRDucTM2JokRzfPeSzydkRecmFbp1omXNZ1CHcaApMyUsFYdcnjtRvkH8n5gg7GYWYSKJ",
  "key25": "28p3TLcGd8V75XorkdBPs1H8oaSE7Y2aF3nFAprT8zMPL5hw7mrNmVwEJGTwewEVCHVNUerGpkYL6HU4nE8NRF8n",
  "key26": "23UDJyXPGarZoWR1QhN9syeZ9bAxoeHcrZRpRA9FoYPkZHwCYKZagXEQG2prEHFxrqYTkGVo8GwD2uRVhUe4oZaK",
  "key27": "3UEjijrzuTcJKU9xpKoruzjoQEn3c3sgA2ebSnQqm7NKDPuyFJW9s6dhJtGGv53Nksq5ETqvkGY3bcVZsCNxL3bD",
  "key28": "5epJrhyCekNTpxPWzLd26ibLcjDJGxCdzqtqJN1YgWEckb7UD64HBiJoNLBeNS37rJMdSiJNZzMKbpkyAY9fNgKX",
  "key29": "4tw2LBX7CnSjywhHoPvLvQMVUHdn4kPow47bDbk9GtyKG54xtdKJxs1adaGuoK7umamuifnoHYDC8ayRDM7vK2KG",
  "key30": "3ntuakvSmg32V1RV5bQUyM82ytenRdqcFLB5xVYaHoJH2JnBvYUjiJ598yYQnDFLUhQSsA7nneZymcPbcFWdvuZx",
  "key31": "5Y7z7fpzx2M3uFiRx8W7pR8QgYuPKLdA42Pz8jvNo9WQPitaRxbhCgx16gKtHJpmud5toYk3YeGMtTUqEwWJNNss",
  "key32": "3ZLfKHPEGXV9xrrn631SXXPqQ5CrnYBZ96gcjqy4zPNEmVc61Ma2gvFuhcNfqMJw9L8YDq6YsWgVC6mvvweYxyva",
  "key33": "xtXj9nCPqwoKjE431Kse6gohxzdxXei4jQTfuyvCPVURRVE31sNsyvub6A3wyEbfnrHhu1ZBYjHFFwTrPQNFMwD",
  "key34": "MySRGyH7UbuCPYAGi5fBkuoTqvvZsBvZiDR7EiFcXF1saQBLNsCyvvWqynErmYDs2GcJB4kfbPX7cpDL7hDZcns",
  "key35": "2ndcG9Z2hPFxE4HA3MQP4GF5uCx761EQMYfQc3HZ5k1vAxfk7BNv8CwuynJcCSQ6RBTSatJscn6ZN7A1Ag8CGusK",
  "key36": "5M525vpax7PjYNpwgmpVFWjDYvHzHm9wBw7fjJK1qUjUCT1iY3DomY9YejNDQodz86GSzVCqkciUT5fcV2xfFRVV",
  "key37": "5tWtBczXc15foSwYqqpSY3qgk4EyrHciREsJqTNW5rZZNBJToWKExttoKWs2qgB3ThCvaUn7fpWehGRZfzcaPKa1",
  "key38": "5jr8z12CQtKznPEN3WjzjPab8iMh54dEotYFCmidkZe2639Yq4RWg56n5pqysaFJk2tkT19feUYfhFWLrwZ1Dzwo",
  "key39": "5ht27f1E3Nvd9scDeZ5tm8pJf4amL5e1dWJVvEYqMjKykjoVuarYKUMBeWJc3Laz75xnA26Qd5a65HKLEswUFAVA",
  "key40": "5PErz3cYeiXQFy5p3ryYGniVTczTFXTQynUNSEP7kAakMzgqxyjsLfaAoJccouKAvrwSpBQ8HnTVE1FeXCd6Jsyu",
  "key41": "2M9EJgmaeSZvM35GV8LaWniEGCraZQkhCiAioKURUWfzN1rBKzBLWkJXBRGRuZXotsSoL1CY4HPoGhbxh4T5sqsM",
  "key42": "YDpmuu8mtUuAVQR9pTXbLw2738rjEbABYXP8zCAKc1TRcvEohsa4MjhnBDE2mUyqk6o5RVsuWuKxPNaJsK2uCKh",
  "key43": "54w3CsaSLiFPZY8AM1xL7eV6ju9Cj5sL6xtLPb2wjr38REm637EXfwBQpjVKgFvyncHoeDQvH7nmDs2VZ2qFtLMc",
  "key44": "3jkk1AYrF6q5xJTHgTgTCKngLYaPPEQXVD3kaMyQ9zKt9PYPsfEqh8ZucyFrEFKmLyo9Lrj6HLcA3TnWLufFz1fw",
  "key45": "2GeC5PD2C6EHsEWaeN5U722yaJNTZW7nSMhMnFUcKxgdiUKqrFF35s6zuUnFk6ZA4RfRsWw1przzeXdMwxDawoXG"
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
