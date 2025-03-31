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
    "3BQv1GDj8Ym2QCVAenXw6H259AhYHgoXHW1itEWgaejgBXWJmVWxgt3kCk6FCYPZqtVSiMSjgQWLqxRF2Y7fFX7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dT9CmLFSEtgLR5ZGJWztBuM8p1ZMaHiVutubums12tsbM2HipMGRfEMoNgHww9PmUwufrD7z8gqhbZguKQiBDz",
  "key1": "Kbz4RfCbZzEXPqwnxM5Wyb5FFXw9C4psdiMoEA5DiEvEFyzRzMJuRG4Yd4AnqXiBJ4dhWT79jCUF3SqVGMLFcAK",
  "key2": "5sBfUUDbTHpyxuvjafSG2JZmSAfzeNniPDuTLv1Fyev33sJQ2Nc892ABdrwc2nArAtX5cfoM5mZwMNV6GT7eMYta",
  "key3": "ZepnkC4Y4T6vp3474ap1f2Qd7oKutBQmhdKFPp3k8LUqerGy39Y3LMTDTwx1Kc4azkuMemp53tGbtPaQaJBrfVV",
  "key4": "5ZRFsSvFv6Fo9XP6BAVKMeAfiARmVSFzSPa6Mt4GWGuxNeRz5diAUCVqQGyBSivmZYEWdXmcv49revVcLrMhBrgN",
  "key5": "3R8yM59spc7gtDSYNT4Jvfy2p9k7UTtrP6TDrdEEyMm3MHH6XjD5P3Ms7weKkoZpeYLzYZVMdGeTdH9LNMQ1Ufsm",
  "key6": "4kcH9sJVSYMXBazGVpytfseinFP6Pm3WX8X1N5g2oePybesP23bdiRJuvcTExcnUPYDzktPmrYzrz6pPZPR1PtEF",
  "key7": "3ideNjoKFEBh91YRxi822cNhrkcTJpLnQwZ8vzs19uFGpg423QsnM2YpuM5q8y6Qf9JeAivEzuQLAD2VkoeK6BjZ",
  "key8": "3bf7yc32Nd8e2WeTb33nRoz4uDZn8ZPsGPh7SBEJPfU4jxEHqckEtJRykDDuzN4ry4e2cpdua1SYFEQMSFspgxXP",
  "key9": "u8PpEN2XrVs4Kqs74VDKKqCVsPoyAhiyLxoN7GQQprbCy7fiSM2dtH2u6xuLW16KfSq9gK8wsyob3wygKU4jCvN",
  "key10": "62xLsm4iDLY9xUHEGg7XUiVVHye3s8uM6ZUcTGeCHzeVKxEKFmMAetjmG7hewfCRs2obdV6CnwEgYaQqVgywZiG8",
  "key11": "5rdtLFDS1rJ3wiRZAxpAbrDen4oscaUKHeUQqSNzRbJGqY6rakJZXXvnJiZvqq6eb2sXpiAz1NGU4YanQkP39eFU",
  "key12": "5EiCzyDr88DKEExbnQYe5ziWnUKqmBxD7FCVX5ABksWLGfYa7S6LwCcpWyVx5xPxjKsWCYkrjc9u8uoN7rjDbqTz",
  "key13": "5dDb7CJJdhTuAt7T7KBJ4cu2aF23MkW5joBZVQY4PUpuhArhjFQUV5yYHM66qxvbCAJF9tqoAsGVDKyy1GArLsct",
  "key14": "5DEriGDe2Rup5wcighqrVXjejVHxZCJ2Kruzfj41stM9xqnn7HdmwkAb1jFoKGVAYkHeyMooqWsXdvU6EYa3JwfC",
  "key15": "3D5ZifHyQMDtux5d9PSiaEsEgrpF1fuWKjS1igaECPLoGh9RnYZvHsVNRfs2NP9ff6ZdXvCvkKPunrmPRonxAuo2",
  "key16": "2kTCheNUyQexvnrW7NNcN5dTXP14n7NbB3Wmj7Ezbnn2nu5h2VdVJqx5e4q7EPsBaFJNLnFMU4YfGNPDWcBEmbEM",
  "key17": "2EbnT9yqPUFAEv3cmhJG1ZRqXywMXMcu7tec2KGDWXYendLCLYEwqW3AW97A3SHgKECHnPzZTzGgPw3WFkBnfu38",
  "key18": "4qgWNopa1tTVbmPAtnwUZDdLpRpawMXvGNKcXGAMEzHNG9MS4RUKfzjmqLgLdZwikUDJ6WQj4wabZcDmmfwsSnmy",
  "key19": "4caSzjyhVkHRpcrtqREM3jqXS9Kqir1s422iWMmGgUhc44AmY2LQQ2De112V5bNxmdV9uKRroaTyhXCY5V5E2Hk1",
  "key20": "5rMrNwPH4XdYxvYjbtamoEyUouTXpPTqSjYdnrBmPzKoCtNkeCNxUALPukAXUXTin4iqJRqgaS7WvaZob3CLToD9",
  "key21": "5omSMho3h3yKk63ihZmqkEcyvstXyVTQZiRd1WXFpAbJLfnNTvKpc8Rw6tN8qw1PHAr9EXhdmxciZGcNz3QtcGx9",
  "key22": "3A7U4aNmmXmExXmHPeBWqW1tzSKT8tJe4NG8xsGYmh2WoZ2YYY7vs3uYYJuXgVEWmQca9p3KjG5nBLWRbnsqnzXU",
  "key23": "2cBWRnS83wQgnzb4RGm9CfEwsXJmxLmMAMcHCux8auPiYFX4AByQNEo2knrneTgKDtVGc9q5EJ5eGbFx3dy2jQNA",
  "key24": "E4DNktkvxG7mjf7UsiKCVBbjoqpEA2vwFyMKkTUWzT1BPQejjRYxZtH66VmfcAYpq9XLVwJWL5VeexD5YL1eeyB",
  "key25": "5ke9U1BPT8PXBAo25omjC71HDjzu3ZZ49LiEKDM3z1As7VHpm9pvkkMoq1wJTsZk7xzzmV4RtLvqDbCUfAWZv5vM",
  "key26": "4V44nFA3BT7UbW2Dj6vzbEvTpLJHaRvm8xhr6HKZPTSey6mRsL7xaY5su9pCyRzUnRrYUYM5KHVnhPLMJFJw8w1z",
  "key27": "5CnmSsZsbCioCK4K6USKQwKnHf7HZFSGGcfMUEjwNVNGeiFDScnKxA2mzNuvDdJJ4naVrBfa5ahxtyJV2rZhte3A",
  "key28": "4fERj3QZygo32pWGXbAqLgBTgL4fzEH9LB6cc8yWPhU9UqM2S7Bwy8PQBYHquJMtRLBqUuhRa3Qw1bpF8fr88os6",
  "key29": "hwCCXEoSnugHGQWVb2EQTc7WHoc9NrUaNRGksKK2SMHvZcZFGskAQDWUjwsvMvymwX95eJVHkSr36BFSikJvJan",
  "key30": "423ci86f6UFt6RupnQ5w6r3fBgjpxa87q4NrkNSqYt9N55wJJFYecddvva73f9F7jdvBaFFsZR3LyNYDJjGFYik4",
  "key31": "57QMHk2yrpyQaZvHWHHj7SLHJFJWS5H2Y5MMo7S95Dddsp4zBwY44zPBzN2VM3Pwx6UTmPBE4CRELP3p5bFj2um3",
  "key32": "D3Rm1vf9c9LXy6Mk3Uj78NjK3Em5nVZzHFZNNgzPsXdrYXXzgQ8p3QFNZinKUJjpT3unnBghkxjMMr4eMKRfudN",
  "key33": "3QD7YPsDaW3KFLs7nc7h5pGF3L4v4vUg5fEgAXNbDM6RTR88jdsycoJ53BF3yxPVzafWe3UyXdFnMJ5J1kXBV1pj",
  "key34": "4AxiiFkJfwxQppdeJmpRohX7z73hPqKVr6yQJwEPP6Bw9Q1ARLfTHKCqx2D5xzwxafZN6JhqotCe47PXA9amTpZj",
  "key35": "2QAKwCg5g7KxXvD56b82dLPAAX1DAtg2fmMU7JfrHS3GGdtFKpdbfxEphs1adMKezyDwBkVDV2do3M96fD9YGnaj",
  "key36": "R5pi1yGPurQ8UrHYSapta5TptaQvr7CziTQKNgKpjW6MYvYDdECvyYQXQxnrJ3mQt6bcCDLQNhHaKoJEBrNtxL9",
  "key37": "5K6Nf95HRm26RzuUoqDZ1ku529UtGx5eVrTcTPkHpCnBf41sZa5DXevW9eejY5xSMpSN2jkj2hxPRQw8iBVUjgRv",
  "key38": "5a45DvhGM7teEANurpYwCMMURYmHLJo9Lj4SpcDbRir9GCWE3LNuYpkxnPWffmJ9B3BmMWRFVWUuxvTqsFoabgmt",
  "key39": "3s3cZATvK1X8sbYQwKDt5TZRqhHHZadLGgBV7f3ukDkiiZLFpGTmM5LkzeULgDvNc9pi9odprhSusefUyw5qQZFt",
  "key40": "4D9Kvnx8crSmj3Btfjika8ds4RAxC7u1pUtjoNG5hugTWjzgySjZHm4SvGzpbAqRFLaJhXSt6aHoA5b47WgfgqNH",
  "key41": "4mhYmbY3tE2aX7bykC64fqsvGU4LA6Tx4EFSQhbMYxpzykx5yyCafSQ5ZcqHhFiD2u2E6bbtnwSct4KEPbtCc24z",
  "key42": "2wta3Kc2cZdEMfwxGAuEWWkMLaJUVT87KxQ2GNKc2rUyD2ZcstCkMeE1RyXW21kNDByvf7ryf9hYfVHXAQNH2Jus",
  "key43": "41gkGtqKNvjjLYvMrSf8THQ5rbP6yDX4BEJtiPsYvpYVBfZHP3a9F91puhWpFtveMDkTgEJnVfaCXGdvCmtsRb4Y",
  "key44": "25jJkS6A33AA1pyUUbKsgjJpd3CsVC5HnNubAW6HrRmhG7d7kzwSUEjzzSH5HsUo3AJXKcPt8bNXqGGURMzKHTjm",
  "key45": "54HqgSXpQCLCxqbguSXaAN79AB8UwHkTJdVNg4mi11ysqWDXeQLcrmpdrGoUzRxFSdR1kfu1yN7QTzXjJXyfRKSX",
  "key46": "hLfdjBnpmyd4nff4879hFN1KMDkBbsfocFCEePKV6XFmdEoQtBWWN6hsaKV4szSFaeU6ZkLpMi3SxF1y1326qUq",
  "key47": "4tDG6E7RrZGNSuwVkEnppXeyCQhtrKfcsE9EdZw1NwtefCnGnAvAGenjARt7Mf8chqAxzLUAb8nxTNmPmmdkJtqa"
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
