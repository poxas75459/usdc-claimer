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
    "5EVnE8QkgQT7qVPgLyqQC2Dh8uEnTNvf2NoV2s332qEUCnfvFQgUX2CEPFzZCYcYrvvRarp8y3qRoQzAZsSDV4TG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32NBSJd9RQA86mA9v2DpQqNDYaDqJbVc5ET3pkxyr31v6tTjgf3ochT3gTLQDDLPSZGf86VW2x8uYnHrLFz8tf6a",
  "key1": "5h7fzXC6zePCTcXMAHjJ5FCmSm1rnByFDMv3won5tLhJA8XojVnocdPKHcheHaWDgxm9KjPwNfYEMV6JF3heGC8A",
  "key2": "pSN7sy6XtxKAbfs7wb3vj8fDLSgSb4PHKnVYAq1C7ucdFkivBCNVDYtMqpwz5MmybbzQvZg3yUkEhCg6mA93YSJ",
  "key3": "3Ve5n76BLY8PbMQmRFoXC9udwXwkVLyHFgA845vkWtsJhtQvohzzJnztxEtVMfjBBcXy8N2TgLj76bvVZ3WZoujH",
  "key4": "2prmocyH4pBnApVdjXRxW5t7u3YNgRDywRMtRTKjbdCCx9q5mhG1KDvJcnpKrVbc1r3JMWACNrK7mMxjLJZrzuuU",
  "key5": "65MonpquzqFBtbLUV2KQ38xBMTFo9gCFCGkXR4sMfze2MQzfu5cRWNs2mczwHSv7nACEsDHJ3abSQcmRNTsk7FGe",
  "key6": "RuEP1qfaLEEpa67cGgkgNF89E2jQyuE3QU4DaXQgyPHgoXNgcgHYSAN7S8HEkCT41we9KHUPW7xt7rTM4p76AaY",
  "key7": "4ezPmUsyRGiMfrb6DANtKnYgixpL9sUX8XTBjCvUT5JW3iew4Qv8jwAGf4bSZh6Fhg1XLHqtP3gds7bwoH9LdrG4",
  "key8": "kkaMaRMGcaN8pM7wTkvgS7B9J6ZZ24PK5kXw8gzeTzPcDHn71xZb6DrjYUuNkTcdQjuCLBiNjjYhfdU45UQyJwe",
  "key9": "26QHsPB4u6G3umAfBmF89rdiUgxaD28nFSVghePBqPpUSadKT82bFeuNjcasxR8PGBBisyedaVpCwkpheDSrKkvb",
  "key10": "2CGkWbq3AnjHZLeNpB1HP6wSMuuNEqYoYMx5erzv8imwp2JfanAwNuSpYvJk4Mx8ngXsFxvp3Lx4rPn2JY7tDjDi",
  "key11": "4LtKSGfHn6hUeHmzYd6E4kCJE1uKMtSRfYWPGgR6FykJNb1tvRZng7aQpRr4UB8Y6UCySGRZ4puXtV5pHPFndmUZ",
  "key12": "3deErDdC7J8EnSjRNFb87mG4Jb2q77EbwwDC1VC9nKAXmVXKG7oGdWffJyVjX5iECEJZoFswhh2qoB4LrVWfhJon",
  "key13": "2bWVsjk8ADQaJZh54Wz2PbghTyRhb4d7mLNPpPUfpArP3GgdtXz3wSRbJiDwmWj51Kj41jKvxUYk2wwrXWVLXRxN",
  "key14": "2dfbPkW6eBLgcRbJKS6aRRtRntP2bSVPMMVkpoMZd7Po72QsMJWyFbRJ7CfRvoRzS5NzRB5x3WcheBJ7bG9JW6i8",
  "key15": "2RWvYTC3ztxnukDJFCk1jVNM8C7KhahrJoyr27bkA2vPVcFDtqUGR9syo12isqhWSBdP2fA76E6Xck6onXA9SSkd",
  "key16": "2LuzQsrBQaMCFb4ojNBnh4VEyPWFemzDSzsf7Yka9BqzQ9Z2AnYNYkaouVgkJBUdhQggJxUa2AYjr6etszK5r9V9",
  "key17": "kXfhbh8nVwiJu66kq6nmxx1a8vBt4BitVkB2HP7rjfYx4oHgFnMcvHibCW9pekQqRj5agZDPighh7TCcgKNrNdN",
  "key18": "b3vKpdJTwbuFoNdUS31yfARz4utbJbGWRYz86Yi3MN6Pc4LTGfNsFrQaQPC6AaXy6cVs5u6NMH4mJjPB7YtHHTR",
  "key19": "4z2isx5RuFh3qwMGVrWf6yG7jKwe1phfMGZC39MUMcwpfTtFc8h6Hknw34YA4RJPsabxd635kxt2AZNJoK3jSp6o",
  "key20": "63jPuyGZXFx4CENPS8FQ8wNixQRVQcmTxzsFYAbXQciknwFGKYS89mkDJe9NsgS1Ki3NDP4AJ2iXyCKLtvZ5uWqu",
  "key21": "4j5DW3P9AGNq35nFoYMcyKUiFySeZpM2L4EgP2KUbVC3KQv1g2ez8UPjs3oJSXMJSRntuBQeeXmmjwn5ShJTPXby",
  "key22": "u4UGpKyACAvXyZGLv8ENMHzJovmpgHZCrBb7fP4obbhkeANDmGDm2E9mzqY93ui7iZvxnWJ8Xp1XnVy4oMK2tPY",
  "key23": "5oZM9fxzyjECVAEZp8CNoQdSE5cn2Q6Rh2vWpae7DN3fQXusScw7zKByENGMe2zNgfT1oXJQmFXMVkXQsTYkfwda",
  "key24": "492GhpEpGJMVGWqPGxUR1RHQEWmh8zn3xHMv7erCWFwcesyhoBzqjoMVhcrpxFfA1t6YGMAcUwXH6V4fXdG7yH6N",
  "key25": "EpkQzASzeV5B2QX9WuHuyBEVAmQppJsDbRhRNMqW7iVFqbJ2sxqCCMsSLA69hAA2bPEcpChAQSPWxX7GxjAwtv1",
  "key26": "2F37SKnBkXRz1xo2dU2CFt4TKuvrf2268Mcdfs9AKSsg13iJPoeVkK2csUJsx7FcQL9HJBLHZJaHNrS2qsWarTqk",
  "key27": "28iMwfMro1ak3dwhBcommJZipGmNp5zJXwShcoJxjS2xUtrqyCykYbaWt74x21ZJgX4e4ydsQpSacdJoZztivnZo",
  "key28": "55xPSXo9vSppESiV3yrdE1795mRefnCuWvHoTcz1iEiccwSnQN6aXrTkxSEDfnK5mPVsLjCCpmfz2yHK9Jn2S1ne",
  "key29": "3q1WnFjBBaavQWDcyNfbvJjWfpJ1SzsrBAceinCprvd85rBYBQt9cG4FLjQWq68SUvbT7wAxhMAumyzwFQMCj9He",
  "key30": "48sdiiKwQBF9wdmEdkvPxBoRrn2B5ASswpfoX1nM5Mu8zUDQfiQJ6KhikpiY46Ar6u4rMB1HhbjMJwAzJSfGBUE6",
  "key31": "2EGus9T5tU7rA1tpyhkhH1ibJwun5bfkHe8vohVQsp9KWJ1iaf8hG71hQkimpQbyZ1dFSY4MXjg38pGx7LS1V7Hy",
  "key32": "2R9QPuiNyTX1j8e5tqbCje1rqB6KPMNZAv8Yfsw5sYw9ujBDCyDVe86s9widJNvT56Rq2Qw4V7Hmzu4C7R9qQ4d6",
  "key33": "2Dz9xZYnd9BBVmTvGpYokwchbeJph6xLQQ8s3qQ4Gd3yJJ6xowaNJf6agSMC7vsRfkcTNtXvXE3DMQXTfJqEgcQy",
  "key34": "2wqCHCB11HXM2gkjSnku2azzwWKE4qHDVqvi7v4QccJ3YcwuAX2FcgZFLztqJEsEgv118Y7eBD52pcwKWktoJQ2S",
  "key35": "67dPrXTGsYM2vHfYJpdmPmR7DoKcqjpjsN5KhTWhteMuYU6rmPaQ2K3h46kFeyLsazEpJzWmu92VrZwAUpAUw1x3",
  "key36": "2FF7jMxiBbJ7k9fxCQ3DTzvEPPkch17cRekkXR2CAzkFzCa24CMzejkHnkLDwexN8Jq4RBktmN13bwfBKh8TDgi9"
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
