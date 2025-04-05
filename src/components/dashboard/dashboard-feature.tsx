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
    "fcD8ES2NdQPKkNrbgv8fumrHuDk12RivMcp55guJBAwnHnRAEbw3dhkUGSidVPiq1Ry4LAW5arUgBTcv1uUv8rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UssagqsAsstDqtyuSe8NdQvrfVmpwLgKmhWmYCu1ZfrGhiqQtB8jzXEEHSTWksLBwaQ3Aw6PpxTMfQDAqRfWL7t",
  "key1": "3rseDRQvdYZJrZG7mFCQprWfuPyvFvtdf7zoGU2BdAfZYRhoUMUn5pLvDgcxhku2H1MMoxgdK1jddzCmNGtE2Fv7",
  "key2": "3D6zCWsQV9VFvBjdmJLVxTh57a4gxiqabyscNyCFG6Mohi5dK1zuR3mRgjaPT6Zjva3jFyD2pqzEpC4FZtUt22rG",
  "key3": "3RrWfG9CjSWJnrb5j8VyqfCXVKU2bzFTDghmaQtk8odYfjvcDBsymU8D2Us2L8UpaMTMSdeABk1EhXoGKbLxV2TA",
  "key4": "4MYiGx8geGEGphHPy9K48BCwgKYCEyLH4wkHta5Z7to2Trh7quhAi76S4Hh43SJEgjH9EwCkvfHZJR4zNPYDEc2E",
  "key5": "4EcvXd5mPgX2Qtab3F42JemdtjgJmn3hrHNRZPgjYffQozrW3WDWavbQFcM2yTEErqed7DiJ8VQtwJmL5guk3gmv",
  "key6": "2zM4u6tgJSv7JJ6UubRpRHwuWSc6Abq34XhgkLmKssrNPnPPwP3qpwF5FCPNy5MigpmzPcYHyQTENUTU7YEq8NUa",
  "key7": "5gjTdrgm9mBCe2Kp9xYP6Taz3vhxGWVsCCo86abESkowoH3S2nrKSTw3ThJ4RAv3bwaVb2nS4bkrUuKAbcVpF6X1",
  "key8": "26XjJKitQxGma3cvCR9ZybRz9cd8cGmYN7YhpyHzgrd2gNLW1wZhqpxJLoALV447eZ8i28KfZz7q8KqbCVps6Mh1",
  "key9": "29tFk548iRPmnw11igZ8Ha8xDAd5hu7ipezY6um4BQ8Fk3ATuL8sCGydNLuhmQBeJ8WkpSoBwFgCUE6kQXA2qdJU",
  "key10": "Bs4AxJ23wizgQZpBV6wP3C8cTfAJnjoqbD5vDsQ2XEQRX1UMhCu7xJ9uyjghsmUeMPiSm1tg6dSRD7WfGpXfZHe",
  "key11": "5LcZud5nEqdgQGfQtqweChEnMyLc6nNUcP62ojPeq1PMDSL4BNmJjqpTrFyFCFbt8Q1tsCwxGtMuR1wbBGU8WwR6",
  "key12": "27cJzCyyrKJU6ZtXaGgpwBiCqAL2ReFbhL4Q1LH3EVgtBXTBNhH75Nv7899rj6QNwEpTvWRdVwAtQPLraQuogNmn",
  "key13": "4q1bxVndXNUJYVRreysk4cs7twU4Gju24KmotFNaGhdPJ4zCnocB7yEgFevxxLZ1GpqXfK6EJnN1MzoaoFmoF3iv",
  "key14": "4G97FjDt8TQASmWKeaiyGUAX7aPDXCp71iKRvCZHs3yygydMYvwBYSVpigPAxPqGqDfiuebDKcFo3pLXxif2X7go",
  "key15": "52ySc6WrRRR2LVZSZ7toq4dT8kyoefXYQKaKtTpcpBeXwRyZUFEwD1tsGDHwDGY3Xj6MkmDz1LBecKpaSLx3TYyZ",
  "key16": "3MjbsKEAggmDhHUVx54VjgoTzc4oNPoLrthqG8kqGs1EdZtq4dPX4bNH11Sppf48hHSVuDqUE5gqsE8tJn95MRob",
  "key17": "4eeD3GZCagtwbn84fghPM6VvpHiuEV45zs9uvYubgkEdgmzwjd2yNCR4YxASFFNj9SxWFgcSu55Dfp7C58oZrEVV",
  "key18": "2euBXHcR3gdiLZWMtfTJ32uY17S4jVvqF6MtoHcHLUojcDVsAsiTm27XEEYAUY8VsMuXdbbu2cAhpKL24XZ936cG",
  "key19": "XYDzS1m4Ss6gF6RqtAyAvvyBfJHSPc6QAZ17X49f5uhRYa6r6zffrjqRpDLQr2kSk83fQBLiGDj7n5Lsf7CujFq",
  "key20": "37Mi8HoDnE9CiuJm3CDhbq81HeWBhERLsY7juZqShrZH1Hny1EMMkWxv8Saa87EzTrEHY9MQa9wsaX1hwKCdW5U9",
  "key21": "366FvoXtn9ZCA3n4MMzAVfun5kGEetaKm9ieYBB9rAZ2uHTacioLtcuAZugsBD3btkVsV6LyzM1qWUN6FAETptcU",
  "key22": "nen8MN7SKZc14C1TWqEVG1hjnpx8yGzT9j6smGQwHXzuXTSh9tGWk9vvsWr6YsxgMn73wo3qqVq8pBGEeiKZBPM",
  "key23": "4uPHS5pCX37v6HdJfxv2hVjps5KbEuVjv1DZYzcRNDGghkLSVipF6HVenbKoG42DZrkyYaesnkHYkpKRybkoL46w",
  "key24": "5SKbR3gkWgTWBq4jsZ4SKHurbGNDSfYq6n7mBNrqPqEsYCv22T8CjTuA2bu6a6MRQJSvvbA8qLpnhHagJZ7cvi9m",
  "key25": "3CtYGuLg2CvbcLfmrr4xYuuhH65Eoh7LaTi8HJzm4pgxi9jxuL1zUu5M4Mq5TjPT2r1vNTjc1P7zzinFodB5TYNk"
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
