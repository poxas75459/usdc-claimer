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
    "3L69MoFy3RCUePs1cyWd5K2yWSqjDrsCB347hJaVAdjCnJiFWVyd5RvAVMEVqzwGqr4qREJiiLcJ33XYLVgxP7b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzRhnDTmDJAFoAUkQZnyxHF5BxzDTM1mPyPXpf44PwMTihouuX9JCNL9yXzRrJCGCE4v6UE3pAPZ9GpLjzksF1p",
  "key1": "33N8aQDaTWEz3seeYTaqVBMDpm6Csz7v81rnV1HzVMKaTFuR64QmKfTiBZoT5pQSJbnFEMhTotZHf9b8a1aSqo1Y",
  "key2": "4E65oYNgxRcFBdXuFuPSRgvWzWuXjuG22UrDKzU49ymnuvgGoXgm5r2m3rV9evBm6kLwjWUUTmki7U8aCyJtMZ7u",
  "key3": "3yKrNf3uHRpKMDysHCjvhFSKZYsyczot8QRQMu5zKaps6mRBNHpk2gQmppQtMEo4ihKUuBg4VqHz4GowE47ZK42r",
  "key4": "3rKpBXRQ4DkuezuqjnHTmeB25o1eeNP6sFeeGqu8ukZVRSWd3MetB9SUiW4maN4thESD14pux2we4oEir96q2gNG",
  "key5": "5UKLRCGD39769B8KTk5y2UVgnayxeDghJDPhuShbHNr7m1wog3X4r39QAYQKeHiNaH4o1mUnc9dWoDczN7nh11tn",
  "key6": "4DJrHii9aHaixwJz89gEtyT7jDUadgShANWJadz4VR3YDtaKR8pfbgezPD9u8kSgnXhkCguSRduUwk8nhZgJ7J73",
  "key7": "2mnRiFP4Yc4eHznPe9BBCzDDf3zkkukyrj9sWvVt9HdFg12GDKy9cD5nSXzVsE6s4WGEvXwU4a3GbWqRksnS7qsa",
  "key8": "4hyuqiA54okacENJTqGkeFthZ8qEWdSBpULmm5bzaA6Zb7dkBj1R7KheUkBLUu96jgLccLvDSUy4Jq5xtqsMaXzx",
  "key9": "3XqBXtKuXreMXFfTJtUH16W7uZWpdpXHoRpbMqtXc1QokW8AMVBH9sWucMGRYgS1rVJmUn8aj6e1scJNXFDQUWpj",
  "key10": "2pDZdFVUSDYuzD66jnEud7aJaoFVG3LF5tcPr2xmDBZcaidxErcwK6Sb76b4EuKMcepsfa5E5fgzf7UwTysRaHgi",
  "key11": "4LZobafNBKZybA8DgUMQYCyjCvzYKskGSTuBm6xipBuJS7RFHXyQQWPDmDUwYPTjDUrJgFJGmkVih3BRKFmq5Z2x",
  "key12": "ZmZHThFqget25oPTiuiTCdRNEv6mBmZqTnxyUSGWJFhTvo8h8TdT85mUzXWSmohdGrUxtivCvZSNXa4zhTZQtFB",
  "key13": "5TAzE1NsnpKpHbYbRBbWLEuHbXbjdQegbe1jer854YxRSx98kZWybmppQDW7CseakCPkCVeUTENJd3x5WYJjVVWe",
  "key14": "29jzzzjMeikRpKy8iVFd2qWca61rfbecdREu9rZSo53WVCGH5chZrBzbGg2tmwb89pQjGpD1TpXrm8E6KepvvyxZ",
  "key15": "2sqcxEtA98B7N8ACGA1KmihMZQveJz4nBXDPgUwjaaFW9a6X3cKK2bQw6skQ1xJwnkNDm7dAKH6bkCr9ub94XcSd",
  "key16": "2TuzTUxPTzYhu4Xx5Z8hZ1WUiDh55ChSRvGFKrNjxXzcKMWawDjF8eh7aQpReRnToHjJ2RcAg5kDnRA7vMXJcn4T",
  "key17": "233vQg9dYRPy5NJ29kTuiMsHBoHRSVxYYBSPbYpSRdSaADyCqnNzrFaHNjqneANrRNhTEDq5d9D5azxtF2uqbFjY",
  "key18": "kkh8ruKnPh3U6xwiBwH94ESh7bkdFb5ggmLB5KYHMJemt1kMNRPxusfZHxfbUXM5XkKBiaENw1huDUDiTkq2iZF",
  "key19": "5qTfLQk9yR4e2Cu14gjGdgUBSgN6sbGes4AyvwxkeiaYRN1oh4J3osMPWsXy516KUr82gkQwm6zEehoxXfBtAVxd",
  "key20": "4RTzPeCeKAUdmH3cxFhck9X158UQb1i7kctJgEJswhQKCCaacq7DZ3aiyy53f2E5W1cBS26vt63BqeXBhY5vVg4B",
  "key21": "4ens8maUP1TrzcSFqfkCqVXeeU83D1T88LUXtkFpCC14mWq4GhLncdAEYRw1LBspuWA9kWGcaHn65A5jfwSwAQVT",
  "key22": "FEDfDD682qxNGKkZeB9zmwPdifyTHGpSCHM2gTm2SkgpocqiAWMDU9h66TKukJRaGP9gN5z66ujZkFU9caTyKvT",
  "key23": "2nikNDS735yJcaVEoRcBB6gvLQhj4BkzQWSH4EsYxb45v3ahJaW2N3zubyT6mNgeqCd5vrHP9uPSQYg3wVHNdn21",
  "key24": "36xRRBUgNJkK76jHta91qsZN9YmYt1mWqR9jNLJM1FEakqdb6pU1TTsR88sQpSeMdJJWM3TYrvtwx4Y9v6a4JWSs",
  "key25": "2qSb1Z4W83VP8fMSXnBXBujkbQgzZ1tRRYxxjf2sodi3ybkxTsNuVvBix83bxSUiovv5bumgkZ1NrCyQyVhVz71R",
  "key26": "rw8gdPXz6XS4P7LrkwXpbaWPPL2fZLMayyG33AtqUkuAE5J5me3k7vBpP8yJgbUgARXR5v3LDHirqULroaBMxHU",
  "key27": "wujG6bhfH5DEtTmfurYMn5DKnYvmvGyAx5LSnL5L8q6xHLggfb1s8uqiKgf31jApHBgpyKKJm1EGAHCnqKMvuBa",
  "key28": "233MUwz9z7av4HsAKQi9ya1XYdC4J3PLq8nHyghf8C6XPQ2iKcfDsHsZh9cuTPDDqCZBL7KkQoLBrgfjCLe7fxYv",
  "key29": "3o5EjvBRWp1p5MJ8wxxq6d7k6BrZRSWWvtvxP1T4trqvnjWncYobut9dS6xHyeymE8h89Az9ubE18MfgM1a4bdCH",
  "key30": "55Wg4rYu48JmojyxrkGYNsjkXz5xghn84c6pAuZyZaiZDxaPf4xDfgNDHbFvzXbCahenccje9QAF6aSw55mMBaFb",
  "key31": "4G2YoAbmzDoUJ5u5hy95BRHaq261sN64nTxQVCSCoJtcAEEroZiZm3jsjwGPPnbtSFp85PTVznbbC5VMRs71JmmB",
  "key32": "3H67Le6FtTAkxKefbrSth2fk3LsHLkjidQLQxSSGcb2kMX9ViunEo6pxwzAAHoRcdMYP8PTDp5R1Q86BhidF8Ept",
  "key33": "KvqbDXCCpKLYmq985drvCcaedzr5MWX9ZZrxoQk47kWSF18hCtvwumArP49eHJuZjF8hwob3prXzsoDjw7PaTVF",
  "key34": "2FfkkshweuLT1mXkSM7yCGV7JoGifRm4zgoAvD6CF8nEipatQ4eivWAwwHNSKkVPNVVTZg4My2HNjvYzXhCuMdgS",
  "key35": "ysFzCYgQZKm8WdSwveL6SYLZhKYPj7xDzbUkMUCysTwcANe1HM7wvikeBYVctcyGNczrfjh8NPCZkMnzwMrKMtT",
  "key36": "8fhJknGxm8qDJj4tk5jBPQg8cPzRpw4qN7LBGog1yjK2Ju1V7bJQyADZi5ZjjX1P95GLGcFY2z6av9UHD21atYz",
  "key37": "25ABmwJyPLvw1Caqhgv6YBKBXCyzUjVZwTzPEUj9A8GQhnmLmATiW8TxD3hw17ShX7FcTws24ATrFRtry9LSnY93",
  "key38": "45ceMgVqpbu1P8Kk4aXxECjqSpDqFJBCRcccFfDDXZjQEdB6sf8gZRxS6RRYjwPqq5kpntAW99UgDyBwRVcbqCQd",
  "key39": "k4piknAQ5YyxLZCYNh2boNynrh7E1GFsqyitGfJRZihA54rRZQj8ZcBbrLHDqWQqQ7WX2Ta6Ukr7JBtHC9PoAZk",
  "key40": "3trBvtE68rjWr3zFxKWGT7VEfBf8VNCnRpPqDxDTm892bmYeD1axroWXS62bxCK1rQtNUYUuWtuFySXggCkCyEjX",
  "key41": "3z5mwAPHgE5X31EY6BSPEhL8mYT7rT4rRKM7u6VB9CHBRQnvWx6awurrZBsuAJZpTkTgdgLvRwYqLHp8V4cj8r6a",
  "key42": "2HK5qhbAP8FNZcupoAVyfrWg5FkDt1jvotzFKJbj31Th5oz6PgwzooDoGX6BrjRqabw8nGH8abxTC8R34pKEZfWC",
  "key43": "55GxG4x3EKduG6pjGptxAJByXpNjjcprKxpofP3U6T2ECwhVUKrA3uvhmFXVy5RhWfF6YGyUXnzLBeKtwgFCCwik",
  "key44": "3LuHAz3ktc9isTjzzSx9G4S93Ekt6FADpUbTtxZTQP3D2s9zr4pqZtSNw739CzrAKzNFD7kobhAt8LuSMsuMQwA4",
  "key45": "2YzGuAGADUUMUtbRFF6crcVUjbaHfmMZkZX1NRfpsbF1xnBHf6r4qGKffjFWVJgsnAopuF3D7i6bC5k5jytK5gxf",
  "key46": "28rTg7hT9nbADohsjK2t2H8LcaqiJrCB7MqyZkzQ8EWZruTgdDg8k4pqtrjr8rZHtAVTMGRqZFZUx15jkKiTYfki",
  "key47": "4uuZMHSgT7Q4oBGzYBX8yo1FRN7YNSw4AsxVCRRW26bUGYBpg5QVczEAsKybfmqTQjgymmCyRjFMZ7J199e8EtWy",
  "key48": "3zGnL5hhfEub9DKVP1qwDgsrjk1cbLwYFry6MsuUySZHunxvLSbAGqEBYbMyeBSaJKF18TSM1o3AeBT8WLMkheth",
  "key49": "3MrQKAVfTXEinvHGT2ipoK1PCgkPrfYsnUURGDK8VyEMxGSQtpNeZjVXFLyr4VSzXrv5yKZSU4RFross6c5JY7QM"
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
