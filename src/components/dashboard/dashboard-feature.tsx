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
    "5FTYAqMMfg84zHaRh8E1ZodZzykivDZG3EQBpoFFYc5NjtPpVSPBEcdDMtteH6XerY6aCcHD1xwxuUD1KGarEETf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnGgaToFrbA1eM4TZzYdGrij5RgVnggzbXfL2X7fbnkFRDVcM2p9xrqiqmRphAk7rykorv1yAVPypCVCdMDvocP",
  "key1": "4giza1FuE1R9uGJvda2CadCHVtrxwmRAM5H47xq3DF1BWXpGCT4craocwggFzySJzcQneMm2YhP3yHgArxaAHrov",
  "key2": "2qXVJ4SLmW8qvUmFrhCm4wr1CbfEGRqb1crgq1z6dztqBg5RJGWnK9jFuifGHHPutMbYTPwmb8KChfFD5zkgUXrH",
  "key3": "5r2ivPEQUh3KGviCGyeF9V8EVB16Vu37f8AF2tJXchcdg7uN3QZmy3S6mdwSD17La6SbFQ3Mvewsx9VU71zoQ2os",
  "key4": "3SboNVkMYCdJaypDoxjtUdK4v1js67fAm6pSXpxjzcjeFX6SU59XW78maKpkL8Z7qBbczdvckxGpa8hTWpZb4mam",
  "key5": "2zLxwVgSUdD9ZkMT44ffqcq4gUuXF8mReH6Zcp6KjmG1vHkqeJXkr85HDZYy4xPDMzjjXL15dBxvWSPU6WPsEtDb",
  "key6": "2yjJ1umvKvjYMntkG6epsdVhBzZ861dYYWdXEMze5LZkbY2Rh4sttw3aDsNwYhi7zBFFvRFiqAbLCx1yuzqv8oiU",
  "key7": "2VVTvtngtzvYgQSwLW27e4X71UZpJuFQ3fWkEx8eGVQ5PzbumyYr7vUmmQCzvyhmT2PZuqVxsfYNxVkXuyw7hnMP",
  "key8": "1wNtiVqmVoorVtARUgKLRxV8szkPhQmPGZmBGYWWvAXr97kdDn2CrbHCiWPDRWCbX2eJneC5ppN6BxTz2rGL3SM",
  "key9": "44npNZVyYeTKv88wdkjbsQ78nJiG1MhnrX3qmVuYXuv736V9myEi1gjd6DRLVHojVDM7NxBVDidy38viHTZHbQHL",
  "key10": "5Uo7Xek8p9xmRCurxvBKuyjheuJBrEPjt5e7iN5qfPNJvbua5sFBXx6aDwmYgRUTYaEFwJfpwBxi77EmsvKdGwEz",
  "key11": "38b1Vca5VkktsvYgMMcShyyFNgf5xLFD5eUpusFVcBXhuozwXzarYUCxHiY73rh3g3VG2fUCHGqe1fhrqKA2yDwv",
  "key12": "4rTEQAhCDZsGMKL41PPBGVg4Ss1D4Q7W2ZkQNgCY5xqWuSvVcaucXq5witqyFoEEDp6pX9vaKjKSpkynBnyve6Uu",
  "key13": "4vQUtHrhiUYMZ2LLvyf182fwZYAGcaEs5hbQBSnxnH5HvzQnAtSoKKg1fBZoE4rcA2fM8FJNEbLDeC9H2E5ceQyv",
  "key14": "5dWGFnm1Geg9VEeMDgUVmecYY3CQkWbiez8wS7KWMkZ4iK4qvvcKZnsbytAoQ8MirzyPyrvRHvP35B1FpbEq7BRW",
  "key15": "3JDN5djdWRdmUXL5Y7mZpxY3kaqDt7fWGTjpsuhzGA2s4UQNzVvejBsZm5CnCQmn79foyWsph4aZ6QFUAQB14bdT",
  "key16": "2FAEyRmfpYaxU4dMV2ciGrZ3akD48Xs2QUyEg7HLi2TonQg28veYJj2AcNj61aNUifnEjJBuQsYStW484btUU6Ma",
  "key17": "CUEFM3J87g44HfLpTUjsoXHHgXoKUhXEFwT3oEXwrWtbg9RN7YK16PeeshpoKJQiNQvHs7FByBg4L1gtNjHjBxA",
  "key18": "vhQBK9n5U63iVKvgeeLUFgcz5KsMDh2MczSE5ot5pq2BDh8pZZBNwEZ39xHULN4jc5ns3boFpRR2qPNzW9c6BAj",
  "key19": "4xDMsnf9sLQubgi6pxndHP6tFpdTPmRpSNXS4HbgfeA7XugfHwy7ib7wUVcvZGrfV4eVMudVcRZX2EnZzR969KfH",
  "key20": "4JjNk2YiYhRgF3riynZQ7UGY8tEYp3YupcTYKqhD8pCBLZjvqeAb6VFAP7utRih7Wb53pH6AryVdaYsMTLLv1sWN",
  "key21": "4cXawkWMuPsPdbdggoiUqsENnKk3DQcS7TqWLpBXsjrb4Q4pwtuAYBc1qfB4B5p3Ws9ggerFamZCwbp434YVZNtH",
  "key22": "3RdGCW7DN4t6ig5hWm3jmgWkcSddNms8a1ieqpD9ut8shMpX8iB85EWeDGVEeSDQBGNiYNVpg5T9BJLiQgxYrW2Q",
  "key23": "4CDb9L7Uhw4m8riEArXbEBfSYdnEorBV2cC5EB6FFd4vyAstzVEk98cavE6RemmwC8JgCZwkZmmCTRof7jZCT8Sk",
  "key24": "2yQcGPzMXP1F4QpW8BZZSVCoM5NraVRqW1VR12qWt5vHwZmWxFmoqhv9XuLuckGW7aeUHjFFgEPYZEW8a7JjJLhU",
  "key25": "ffMiwKTrL6X2bkYhRoPLVLxoCkwSepyKuN2NqDsvSiBrQAJ4R43giHCHwN6RgxNVGoVzX3sGtMySBh8up21NNst",
  "key26": "5BVgLKmSjwWhhqoeAiTVXphzQpTeeftAXntmt3mvATnKaoRxwN59LDPc4jbowncHaLHF4tnHgK4rheGJrSzGU7b8",
  "key27": "2Apf282UfsopK66chywkjEaTFXDDxGcf7ywChwAzYHv2Kwg9FGc6fJQxPigMPbiXYVGcWHSgHyX7uMWAchoFMiek",
  "key28": "3pTT74Baf8beqQwsKtnBunryF2MhCK5n4coF7pY1VG91rtY9JKbSeAnP2GjsqiUmGRwpE38Sg1JLQK6eWP4WvwrU",
  "key29": "3x5shRkE8aWpTPQLALfj2EQMnrLwLb6afNiZUKWaxt9WEufZPeAx4mvFZ8BBsjszajARbgAdXG9vWs7jv7xJvQae",
  "key30": "434rgKkWbeqx346UeA2zn5eoeCFJhjJkdcjjpK397g9DzidHVqts5fZpJJ6H6gYboXx9DxgFR52muEhdKcvXeMCM",
  "key31": "3vUs2Rs7mVz2d8s3szA1cPENB3zcvTxL2nrLiAes9H3ZmnrMAN6gyxnskMkYrfM3TG3MQruevjBZ57pgbp8EBK1g",
  "key32": "GViQTnvGFCTPH7rE4J4KyoHsX1NzGkzw118dzTz4MRLLmDahPonSQ5Pyod9txJXMYFfFHMLgffHpFKYPQ94EefD",
  "key33": "2XxRa7dikbQ695i3BJH67uVRzmX8BVRxFuCYYfnRAemRsZCi8NQ63RYVZa23C7fXkmBpSX6wYcWHTV2gZhzEzX4c",
  "key34": "4XEBcNeUpbZhW5KnafLsefCsxUSxbgyG893ZJGp3TRrt7yq4NRYojgDSPp6Ln8V5gJKqgntuVyAUcxVj2QPFnceL",
  "key35": "3EWm9jsZHgq7nJ3AwemwF8ohxfM84K7oedRw7LH4McSo2oeku9YjVtG5RCnbN6XKpN9ivw7YZnsmMtZ6F8Bt223n",
  "key36": "2UhVDYGAMQePS8UH3KFizN65DLdRZZdXwJB7ajuNy1EiZormtcGYgUhF4wEGrNzeTtEgAvTKrZ9B9fvkeFpfTHfw",
  "key37": "3WpkjLw3UJZhprVKPujs5GihbydMdv7tEh2bTyoS3vHRSKx2PQxjcfkNGL6sHjhbLNozNK7YJZG12p6DCKH9EDMV",
  "key38": "3EXNs5x1rvXZqaiJg4E9cWuLg8UXDUHThyRi68N9MH8rzurTtijjSrBESJEYLQ5HvvLG2fWux5YhjfwHxmZVXuW9",
  "key39": "4uv2TVXZZmuumst6PHZ6WFWaN4954QdkG4oebP1mk1SxQjVmpQYpuoYEz6HoKA2gGehTvaXrVhpQN8LzjeCTMjd",
  "key40": "4UmS7DVstCf9dTZhsE2LiQdy4ZLCjmioxxDrPRs6oRMVZM4xPeVnpJad1PGyqS6U4iUqB9ZVqpxJzRz1QrSLwTCt",
  "key41": "2SpH9NTxyisWkcJkMXQk38dXNrLZSV7rJp3y2kbzUNJki6HvveLaovGEY512sjnAx62uUfzi74eKCvzaYPFV36mf",
  "key42": "31yQWukQ4iaL6DJKaGhBuaBmDnuHbjFJNWujWZwwTXr9yQBmcsvmEux5FLJcV2cpHRhpW9GY1s11uUwK7JqY6E8A",
  "key43": "2M2CfhdVhGz9yY64ZsnxH3iMm9S3WcUxKFEGnEP1bJdjNqtesnkQqeZDjhuQc81LvJTSkqq11n5d7uEwCCCRCZe3",
  "key44": "gTKKtr9HhteER6MVsRvrtedzR7GaG7FT2jrvhx6owGRY5v2DeQcs9GPpZd54dSg8x4kaiL5ju1QevfRJr4jEaBx",
  "key45": "46p9fCte29X4XwNqtg7DuvFTYDLJGbc6VxrvHiEHyGRyGo2BF5nb12GGp2xWtpLMn7sLq9byycJ9CPKxWcx2m9Ws",
  "key46": "2sCZhNhMWUtumQNUFiiPoVg4JXwgvydpLBDYHcxRW7GSw1MkdvTJMdoATAqwWDYSxAE1zwRwdgJyMkFxPCT5pLHm",
  "key47": "623igf3zjFjUxnEQaqnBtuWJVCbMgJTaVHPbAf51Ec86R5dWS4RhrNe5ZjZvhr67czG8YKKbxs8LLM3T15gB758w",
  "key48": "3V92RKPmnkxrtugjgmGoJDvykoV9NXkTkHQqP24gZmBhNtQzsh7xRaPRk6CbB2N3Ly8NMmc4yAWH4jCZxDE1EVqs"
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
