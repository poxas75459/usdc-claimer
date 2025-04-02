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
    "2De2qWHBnaHGoagkJbNx8aTk5Q7TFSy48Sa3W5qjyHosLrbfnE29fbFMBngDRo4EvC6vuaAA56ZCfB2mfmw79WYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KLeRKvWJGiUEFYXrjLf8ANSGPCvBdAnEr2HSPbkuRu1TKYML4wdqyQPKFxZAoiKAGxuSycG3tX5Xzegt3XFYkqx",
  "key1": "3pUZoM21iXCxmRGBwDmnzbNVgiCgxbQnfEDb31K95u31GQ6TpkffmYYQEhAzXCca2XCcYWR26SzEJs1yXFVx1uqR",
  "key2": "4iEbDgUnTtx23mTrcZL1xYiRChimegVfwuF9zvhe9vuWvCUUF19mBvFAXvqNd25KK8Jn2UaRds6rQhe8R9gUbJfe",
  "key3": "4833VKZSGqPPuhQ4ycMf2cgwVgwCwAEKdDsikNp4BCcHnP6HqTG51VS3BNMh7Yox5debyWoLFW7xLH9Dw3Wedv61",
  "key4": "72V4qxUpvy4HH5rCWRxD8SLmc6KTFdNX8iViyYwS6k3BBH35HgYgXwdWZ78DuNDADCLVHeZBjjwvM5gkLmJpThw",
  "key5": "3dGw3js461jk4z2zjWxAkgKrkjsoJa5CCibTEHL26hDW4QTYHx7VsL6oFPfcPQhj2Qurx3xv1Lz5kbKYM5RhLAAP",
  "key6": "5VXTYttXB5n3zVbw44qL21fvdgd7XbdrQst2ZmXGKQUeyXt7pxqXyMTapCyd8oCUtjq5wmT7cyVpiTL62UyR27oz",
  "key7": "3NdCnjZCKCKf91GkgP36uoT252XZWHJKEjWnZfEQjyz9MAJSwDhehGDRkAsjZxbnjisytMtGjR13pVV5PcPmo173",
  "key8": "ZkSoefVo9vJhbp8AiJf5vuB1HvPTGa7w6oDsHVo86FBhqRtohGoQ5gEy3SnRGfni3SvFUpQQLv27TsmiADSjqCA",
  "key9": "4Uj3rNYxdAJz3UgoPpSfK8zZM9bx2xpHhp4YqdD8vavbVvwkNiaBVQBr8PWo75nT48i8vskJLxVuvFh5EYWHJj4E",
  "key10": "4WeDYCbMe6euHNHSCrTMStA7Hvysxd6pcC1bNGHGBH9t6496PHt3Ptu9d63EBJnEB2nJQSRi1v4kSEWN3Eb6hr2n",
  "key11": "JwP4egYQBFaPTRJib8ygg2co2nhEXq6amXZEL5GPCk9KvS5MPd5xn5YrUCfaeuWvDo6JZbY4ZVKJLrmc173KCVw",
  "key12": "2zZFGRh1RVLDHe9MTzikwXZPZBRki43Z8TEDmnmZNYvGR3UMBshb5pSbvSuPVcq1pSisV3B63pppCzqxsRBFhFSu",
  "key13": "4vZ85sKRQEPeKnHB4ortpkhuru5EbUqvSUvvBrdSKphVJXrMXmjGXtZkCn2XjF2o1K7mkkPWyP2gzcsZUJ9SD4pB",
  "key14": "5GGFjViNzFWiNKaCXxU1S5CAQTXXfcaiLKbpjVRwqkfrxTFu35qW9U6hkxvxnYiffK8wWhNt7kvbpj4dJyQD5Fpr",
  "key15": "2kSrMWgt3TUZuqv2dDKGmkduF81TUWFzSaXvab4b6N4DN5UWumPdN7x7bAMWefB7aBEnMtdEUbjm3kKJHFM8QV35",
  "key16": "557gox9gBAgqKutambsAogW7wJ3HZefbBatBCwxGEvZDRwhSM1P6JQg2tuuhv2ZPyGNsDzBR4tuJWv94T8YroJfG",
  "key17": "21tN9MLALTe6uWvpevCcHNa6CwuzrGY8viZEvSmDWmNghEZzkAxExZHbeMfxT8Z6PWjC9dRw5JuwjEQ7YMkCdZTa",
  "key18": "2NQ9JVmp9beLMYiydKBTBRBTDV5Q4YPUwuxVwUbM75H9F87h5nhDb18RQjHYnESCSNMYXw5EKeTnGsAxqcgCaXu3",
  "key19": "66UvNoVq13NG2j2jbySqWi6hgi7YPN9awiXNM16B1iDRvfkreNmdvZnfDzkZzxHgNuWGMXZB4CqEcFvk8X7LgNG",
  "key20": "2jVNn9QZipcf4fMLoSPsqWtB1nGf43gp6JwodqNKXFT3nee8zc7cmwNbWeYviy5BG3z5kFAVyXbdUehN8tqXXXq1",
  "key21": "iW5BspvjijWLJ2nAUyTvnAgNZXoUyPnnvGx9V6L1byFwgCcQqxTwrUux8CRnouAh5PagJEjwis3CZmTT4pm3LCa",
  "key22": "3vAhEB51LEDAAz9pH8VdvjAfdm9QN95x9Y6aCkD7zDq9q4wCqKZoJjgFM2twKC2gdNSwt6RHyMVU2k9HBNXMRtDo",
  "key23": "4XZ4HaPthVNMXsEiXdaoPHWfNscpvcCxTunAtP21rkkGiNnNnagFsr4V3phQfEjXcv3mnNAMHkuTW2BVS361767x",
  "key24": "5rgbiK6HPVRiVzkxT6SiWyr87UE2qdJMza8TE2pUFW2cFUpYNjNB5MFBQN8752XarjhZBBkXAzdbd6or96Nqr2eP",
  "key25": "2YCBrs8ZL2cfuzmf9CxqdMNHoyWRp9D3Wxyf1rfRVcByP24vpgQkeq6HBaZu52oWpWm7vusEbR6ttEgHyafZ4D5G",
  "key26": "4CvVn3wUMRNgsnVTYRuj9hKmF5KDZCN9nmb1aNhCVhRoCuThHLVpnPgN1CpybFzVkCAZHbGcfoBnW1qHsC1vUHa7",
  "key27": "2nLSXEjQCXbgU5JND6Dqxt8YExLT6585PEryQPK51Yxxmf9JwPaWjbRFuzBhg8WsqJGXdGpyrTx4bTpggmN9EQTf",
  "key28": "2fxMWdrYD1Rfhmorfsd5S5Lw7ge6hDxEWQByJoBgfkB5rfR1CGtC3sgYsVi22pAZSh443LcCcZoe8qedAZvKcWV7",
  "key29": "55iHyADxJYK3HXWpFfj1uD5Bda6xrApKgPYmrfcxMzieQFnt3EBVs68Cr7te3DE89491wtkRZ2SyUbDyo7KXxUdT",
  "key30": "4DZfBA3kHdRcKPjF8TTcGWJaeo11sHGwzujntjXbMUC6vp1ZBxd7ihq2SoowGv4DNWiZhS8iYcrSzYHBxGenQ7dq",
  "key31": "4PY4ZFKtzpzpTe6MxbEJ7uBdEvfi3hAc8DLJ7n5NU4N2Yih3yiwrEjWtoyk54Gt4uFkxioUQND1TTh6aeXSiC4tu",
  "key32": "2F4e4K3enFdSkkCSYrzxoCUK6sc1zxFRxYZtvTHiSCRVoeukb7H3fgkPjHEZwgKKpwRfNDRr8e9ENQCWmSJp3KNu",
  "key33": "39MauxS8oupWb94AmGpW6DDdTLxzV2YYt6UyEpwc6GwsRHbdzifKqHEtnHk1obn3VAe2NJV3zTFnnY7EsRs2GFc6",
  "key34": "3wCiujyV6y1QVK5psQ6Gt3QK5T4chirz7NNcFo7stEMWJcG34SDnNCqMaywpAccSnyzDi9c7WKc77PsDMMmQcfES",
  "key35": "QRqzWqZWgPVnoHZdiKvKfRfrDJ97DF3mGrDB8RgHGVgG6HMcMDdDdoGPLr4gwrjV8cWVuCFTRwZMbBN3zZ2GLzz",
  "key36": "iXe94XYKFpAKoudKdx4pTFKhXkQgoZiiSuJ8w1QrRHQegC4g8LiG2iuvXFb4YbhwstZZDEge7XyPL6NudHARRSJ",
  "key37": "5bwaWjFTroWVjNHGfyegADU3fZcymJr2GqopTQevq2Etnm4M9UijjkUumn3rDub7p5qF5qXBWr6Z9hqtYCctg3AN",
  "key38": "drXeJpcmaGVSdqZuypB3MQAGDxyLnmsUsd9nxAVLgkPsw8T1uZ9MSD66XrXM8qHKwds5RAxz6rumqa9gss8C4Kq",
  "key39": "39U8PdgFvCF6dEsjQQwc3QjHRKPz88u1VkxLMXUXco9xPgMGVUTMnwyLYwbwTKeFhhboAJd1ghg2XqgtGLxPBPgg",
  "key40": "5Tj6xZtaYRBeR42zqzBHWwjkFc4TdofS9ksjU4Zx66xHbnuWg5YDJpM3EC5YJG6PJ2YZSmk5K5cU7ayKPMHKFyVD",
  "key41": "3v88sz59izsA9nvP3GCjWb4jFwDCWDxMuqcRkBBip4ZVQLKz3eJoF57ynJfUAb7SnfDqSeGy2dsxD2z7pdqaFmYN",
  "key42": "4gL17dLbTU6H3ofM2qnBXxA2dizoQiKSzjvHsVpwdFMjMBmijYujLKBTpfumQHMVeWT5qv8Q4zV5upGkvtL8VMQB"
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
