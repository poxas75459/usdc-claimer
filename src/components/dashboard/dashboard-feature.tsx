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
    "2s2vxTG8R69geQqaUppXy1GhoJChaXpqNMW1uAFKZFdUc3eD5SE4u6BcLLdz1sDVkDeasbZr2nvzqYRDiiKnMDGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxXwfqDJo6Vg5sq8RaxUs4iwYDYQ5gVKNmtNFmvHopZ4hv9A9KDFCSFR1XZsa8ExeKFDHv56EKyLgnkh5ss7hqp",
  "key1": "23aVo6wjCdTfNwAaPPqceYyDCahxa4zT5ip3D3k9knkQDcU3HExtofsAVJhuNiN4r7x7wnv4LrdQcGYqFmRrPgG9",
  "key2": "2an1Yck5oxK447m8CanKWR4Mk47BFB139SBYYXUrtqiRMsDYs9Xgqey1TjuyVitUxsWiNtEFL9oFYpP1hzwibstD",
  "key3": "2GP5tJnV62ZN7duAKejAtwufRBvp3m4KxWHfXWPV3yjX1bgpp3y7ESprS9uYqH4DZ8araEpU87gtZs1tg19G4481",
  "key4": "3F2uEPL3EQmbj6KxKkik3aKne1dnYhGtX38voYJCgb9LPSyxNuEuJH2cyH7meA8AyTNqWkFUW5S3rNRUk43CtdMu",
  "key5": "6abYdZcN7bF7ZbKnVZLYWwFRjdWBoFMZRphRukvUiiv6Lx5k7ZwzCeBtBpYHDRFeRjgcmJXxcrdW5weASZJZx2X",
  "key6": "2HjryJN7ypeYC4xX33UAexKd4RaYvvawyMTEW3k7WNhUifVjday1sJUgYtLBV7o6cxTqQUMNfsi2C3b7isQCvGVU",
  "key7": "21MXsaoKRKc8kpupJRF3rTR61H4MnTWY6Nh5u4t1cryBUsW5VdG9uwmGJ1m9KPPQ6pkWnMFLtuKCHZsBdeyPCcye",
  "key8": "36y33M1Pun4hDwtXpHVjGFFJwZpMoBweq2Hb3xQ8fptCyBAad1ULueD2u6gkJA3TSsTGuPiatAiF71qTuumSNZ5F",
  "key9": "5Gwep3tfNBFgjeXsMdzgW7uXWjF3hQ1emq7vUmmjKed1ehr97suMPMiogMdKiy7cJDADGD7xHqeH2R2wfQnUmgtV",
  "key10": "7UfuVgKVgY74wHhp8GYuWQ8vkDnTLYkZGxTgm3RKDJVkJWQ2HpNDHkQom4ETWE87Uz7oRPpJpTQDLzMnjRkm6uS",
  "key11": "2UmFPEBtn4m52QgUTLcxH6cGHMKgujN6fmgRewJpcVigUtbCtL6HiGRgYXNmbSpFzdF4voMTNm2XydptJFBUEXjg",
  "key12": "5n5F2ENwv2eGKUxYyVYY1j4r9pBiQK7aGyqNuBJa9MkgfPtjVDmPZGdd9y2ZTCRssbQKJKDtdK28tAC6khiN5C8e",
  "key13": "7dQFEBHkQmQFVrqtitkkcWStkEUsKDDezRoJuZr2EbMKExeLDSWg5pv13Axd4HtReD4dST8rnJ1BE1exbhZPRXP",
  "key14": "2c63nvdhDGMcRbJ97NAtWWpxjyKuxrFe9opcb16qiXDbLJD7xVvjqFxkDUFHKH8tAfFXrQQCg8SjXGs1Us8FN1LB",
  "key15": "H61DrkiaLAh1TiLh19CQLXorhwvV29dPvJtSo2rqKgvj6MTgDuLzpm8QQ2iMrkSThw1T9Z5w7Z9evByK9mZH829",
  "key16": "5MhM1K3kTKcD7SXcGuErnYLFVJYjQX4CVr3ovNcoAo8YQfRTnqzMCcw8qfxUBjdNhqVtvoaVyCjAKgcuY8xezQoV",
  "key17": "2nX8kpqxGiF4JBbd9ponrkZ2d3mBETnEAtf2jKAYY1Ko8NUhVgA3rFaXVfprugsgrnAnD9bXWyCw8Ztbbq34cU9V",
  "key18": "vBxxdhs7SguqzXStZ5hZGFhiHrc9LkENkFuXtQrFXQfoSXwJ2f5FzJXBfDeJA5UNzdakTmH5vv7BjfZmJgWq3NC",
  "key19": "3nUyDzFepLyhMk8sSZdpGS7eRw3ZkxTyusJ5BDHZfzRErgA2BXo4z93wtmAnJtPVeZKLdnqJkn32AZribMMxtrRF",
  "key20": "8YKPgAS3T8JpnnWtdezB99WDn8GUEfVpvYbpjqf2f4wTEF1Mma4uxrvWt6LErckxgMgRUe1cPeyE1pSbi79gV1g",
  "key21": "uk1GawDsRDzKe6rmENMAp1kYr3AUYsx221sCcZZkitHWmNr3LWCy5fwruqUcBQkyNBDcdEojDw32KchADmRCC66",
  "key22": "bGNz9Epe394niraEWnR3XjGMTk8yQbaqzi66hP5PqCu7bG5cXRfUdwUMuLiLXi53xKYWqYsVZz15acdhoe92UbT",
  "key23": "5py5PDs2p5pGx9uGLSLWYcsu1XNWaaMQZKB8JNxyceQPHMcYGXx8JtGwoKbCKizrTaho9gt1qU8tsPC2jJkBkQGa",
  "key24": "5DQg1CffpLE53zha9NL7SJY43Aw1aNZigrEG8ZPPqGKFAT8MTfLEdXnHbbWjcreikfV1tfknyo2zWNfgmAbKSfDG",
  "key25": "PbAuLhpGMcjuuu1zJ7RHxKoVP1JiKBzmJuv7fCkiYixtvLjNpXWv5L8CuKuFSkVRbN2MQTUpuDs8aLB1QEULHep",
  "key26": "4i3axtygcyDhUFVoU84Ad91agj1imQ6ZQ3tWjmkPUPDDMXB5mQqMbLXnC1dsEAQxWXAHbnVt59x5jzrCSPd7bXNB",
  "key27": "FzNQNH9ubszhbMz9dkxREtMbqB69MtTvsC4CiDFUG9ZGA7sukbZoEpDQGV1p9jUw51Si2FzTzdyeo6yjFD3fHdi",
  "key28": "3YGCTxBrB6uuYDgF4UWywsJKu3Am7dz9bt1VHENokdNy9Uvx2Pfc915iVnuMdUPuLgezSXD9EWVZoFFr5XJ3Mska",
  "key29": "38L4xGLH5Ns54zPzTu7ndbNRpKQ343jLqse5eHR8TXmvJjwXeUmTTvb9S6du51dLJHsSpWVBRboxXEPkLRDCW5QQ",
  "key30": "5VDkVGUuzX7FpSfzwA85Y3x1cjDgxuiWhEAJf64td5i259Fbu7C4LPZjkMhnziqkK5WFFthk7phBYESBqi6mAsQr",
  "key31": "2EVtsLWZLBhYh6JME6UrZRr9YCzUcMupCaRqMVne9RVipYpXdkqgbGxWj783tShQ7ASSGLjYUehU3wpsgUX2j4Bd",
  "key32": "4aa6vHUmUYFa2mYnCHbH5JQ9B9FZAqYNxt4viyB1sYz5rA7Vae7boJTRw5kScWk4SxM8b1s69NYH7cqDm93teaEj",
  "key33": "RtKAbAiWskUeCg7wStgyogMJ2aWQDjbCzisk1oJfqcvsXwSsu8nqQMx8ne773civszzvyRByodvF92TJen5Yqst",
  "key34": "4ukKSUqv3c65PDV4BWAD9Hrn6REit2z2ZeTTasCPCkb3R4M63Rf2voTJfvzNdnARoJnZQWa1gzpL4PQhBbQ8S9j7",
  "key35": "5Ua5XZNbHk3k9cmws1cvLud4LkNPcuxzoXVUe4DMKWYGteZu215pQKnyw9YU4q5HRyLyFgpAZoAsxKqgp6Qw4eSt",
  "key36": "5FqcwnnDnuZyqdneFsRtNeFWz6JGmvk3ie3pqFVKitDbAkegMJZt2KeRhmmFZzysXzWD891AgykDn75EVWcjATqM",
  "key37": "u4VErsWwjMp7JKeAbBoo5D7MEVsM95Gn6t524ksFko7Rbm6zHQofwEj6NWj5CSXDqb4X63Hn2CAEf1KwUdq4Fe9",
  "key38": "2NY833YtAJAmU4h1y2vXkyfbwMKzYe7kZymgoNK4aJfrASJf5mYUGRkob4bRQNyD8ctdZQwbbbMgNqnPVLdJUAFk",
  "key39": "2yVW1Y9PQ1vga2J8iWjjgWzvGL98VFe8c93BYjxHCmCGRLo8VSd7n6gSip2rzLET5stLroNfVytLsrwQnTZaihQj",
  "key40": "NtHA3opo4tiYQybeeoNHe8Y6tkdU5u1TS6hXYmoiFRN5XoMFhMy2QsYqpJ4PVBw6Tc8Vctb4SC8PQ5K4qdCi4ej",
  "key41": "s3VisMwdewM54FJgvngMYPqgKWVcVCfDt9cL2t2eJ7mosGtn1Zj14FcaAtCzsZDoQXf5Uc4cTZwagq9bCBATnxQ",
  "key42": "4j5mR3MDLJ8enfd3SWDoqiYdNHd2dV2DYvXQpTZDVptLyY18Jhmyk7WW96WHa6x6TwM6sVUdNPoVArmDBgRsoptk",
  "key43": "5t35ejofzGkoNUGUwhjgAPBMyiwmUmyHYMhmyF81grE7JnLe9efqy7vLpSfgCG3UQYKziPp5HavRPU51tsGduNG1",
  "key44": "4NCthuHusdVF1e2ofbcKKZvsWUwdS53hfcFCRwikDxMZ1ZX7A2aXYvgUFQQ5xofWgi8QMqp5sUweq5KhZ9ofTQcF",
  "key45": "5tzB6QgooPvZdaix58svZuHiCAjNEnvfcfM4FyCjxcxFwn3WPTB82JDDesWPFbgosLDpG8qYsjKHHu46ESQ8AZoK",
  "key46": "3Yzjcnc4GNuyPYznARJSVWwJsrX7niiSXiZY13TYS4e28DGnabVkVG8Tbuh4bWqkKdHtJT95u3t9RBoxPfeVZ6xZ",
  "key47": "G5Ls1S49mcdgHS1oLcsnWcuphWkPSE8sQkfWu9nnn66bkcHRYDioyNoYvb8ApX1eeBKQkRPkxgSjWFQKxFuTWem",
  "key48": "2rXYQBd3X8rpoftKfi4FN6jH6Y9cKy64QBm7DBmVsaq6xhL5qrEC8vNy23tqMZS99N3fwqyoq2Wr3btyeFxs6cfi"
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
