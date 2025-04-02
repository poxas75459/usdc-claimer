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
    "281gkFJqgoDgCvxog42sYv1wt687Ufbb1xNLPjWZmDk2tHf2xy86ZfXr8pUQjk8XqdXx1t2i7RzsBszpkKeVF8gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oimWrCd4jX11EHUoBUFGJ9ZT8kg1nMmxVcqfeu5BDqiVkbu1C7tqgNXHZfhdah7fNJ4maEAbeQCAyfo5fNMg4V",
  "key1": "4aHggQxvsdSoah7tYvF2mHM9vNx7ChvmjJcCmu716YKJvi2TZa9c2ZvdqjAbmkqimauDpuih26N4n6m2tMXS2W8T",
  "key2": "DLfHcBC5V6HSqJpL2U5ZYFhvPPMrFuQa9AmaeAaHKszxf5x6Qd7opYnMX3iLGeWHFHtd8ne9NfmxYJD4z8bzbmn",
  "key3": "4GJcWpjZbFTdJrPidTanJjb5sMGBSKkPw4rFQ6svDjqCRi47oWBfLi6mWcRk3n5YSbgKeZjsCeZs77FU6npo6LbW",
  "key4": "ZWVfrmmkpHwAGTQZVsitCUAN3UERQaggWB81reYMAPDbHFXaCrdUbZBv6qSMdEnePg9DuKkg64uAk3pXCvTK8jk",
  "key5": "23iDqEg13Sgj51hzpVx84hCx2sUYsnSK8em8o1s5fGLZ6Laa9z8TcFQc6AhgN68aseALhMbMmQXprUuUzRuCUtrV",
  "key6": "4ZnZapJpp5hQypMTDnBtnjmXE6seMMzAcMS11dsEczeP6rxmHu4Tcj8KEHjiqqTpbgjPo2RWXpnaSDwkCRuJXMjQ",
  "key7": "5cSaeaaemN1tYzM41UXmQ52K85wzVCkpkwGMZB5nCur93YN8hCYyDLcmDdQZ4xBfZf1NdnmSxSSyJJyqkhCq8NrC",
  "key8": "2ZNVASVzbEKMFzNH2BRidny1KMLxmKHeeuxoTjjGJBA5CSR2E3qLYa53xNEc2zY9dNpsT5nN2YApUPcAoAb4u431",
  "key9": "65vXygoJbhwjDSARnkcsCnUfgRkscQMaTYy3kmzTX6GFyPFgjaGqBwgc7oMdHsHR8d1YotQS1Wt4hY8mVb5YV9SZ",
  "key10": "NENrSrDhuX5vjbtFEmUZJtE7rkupBaN8MxPzWBeL6Jm1LHkMNqRzshFy8HgP4PMiLDwrAPXSFTxMTa7nyyRaVML",
  "key11": "2mjuaNnDrJBBvmhFMTMc93wTKdtBniViQQ4Eg2dAHXquM6pL5iaPQkXyAWfBCTLTYeUV3TsFucEoFbGG5VwBh3yS",
  "key12": "4onfuQuhRUweu8xnmtkBCZLvKXUaXMrWyPnoKgm7FzfxsHm4JnndvM6sqTHFXTeH8EWd84vYM9eFc1VMvTbg77P6",
  "key13": "uoWzhfnaKzykhJR8sJYvS8yXSwoWbbrSf2KLRNXfSSPoMDBdNzFTRFR4VHBtbc9T9XihgbJZDkj5fopgTjD4vBv",
  "key14": "3n9M56yq8VXLvWdMTRo769GaTNXE7hcv1cJXw5ykZkeWUJuVBNUXC1VdNujP2n8ftj29kruq8SYNGZbNaS2s8hBr",
  "key15": "Sjp6aorSrqh74uWjLAadUA8gd88ZLpGzFUURG7DVK4bkrwzFQr9n758WGcshcqLrAt5hYdxDrLrYxuiEhQpwxJD",
  "key16": "WMXaDbkkuvCihWVbe8zewm786S7XBTPs4GDH6ByEsbK5cUfCZZWQHbkCVXtKu5urNnb1mnGgEwZ8m2mFSPF765D",
  "key17": "3uTsJuAa71yp6C7yaNo3UcSWazE6T48vMrtwmXn71VDGHzW66Fb6CqsQt6xDq58QSzk1YdpCEgTkNHpdtt1PMxX",
  "key18": "2sr79jka9qLndS5LRey61iqFgnankmFpyruPQXPb7Zx31cXZZ6YbX5khfxCqJDDRWKte9UTxhxNLF8WiibRVUaXK",
  "key19": "2UqhhUUp25AfKCzMpNxDnB2ckxSWwgQzmwJiDE6pqeqFFETcxHzELCemX6MA2oEGECjouTuHBAu5fthkkJ1wpFPU",
  "key20": "2My6iyHJuFPgrdaXaFQPsHNLJTPYEDQNMr91LtiMAWekYX5k3mZfXu4tkARJ9q1VmVvfFX994ydKEypQW7z8RKK",
  "key21": "4f9SnRdmKAv1ybuRe1hpQkbKZjTo52KphjG39x6MbbYkf5kNxt4cWbHk1KxzkgPW4DMPEWLSxTHjm1YwGuRE846t",
  "key22": "iffeHhwD3BPRU9p6jPFbAhYaXJXRSGop6moCWkdErLtSTGm7KAqUvuC6BUPB4a593g5CaPqT8fYg5HLGxmY4f6P",
  "key23": "LvGRyF1PBBa4uDkrn5jJ7pdZJG9GK4qrgp81FoRMW7b4KnX3d8rdvtdmZCBTTPbz61SKkKyjofbJYGgfydLmzcJ",
  "key24": "AHVQeNfmvW7vY5GaTQ1qCtwT6EYB5QMQXvmN9ygQzFPUkDmEd3HUxp919pxWgGxxtv2i4rxaNoKzQBsp6Po2yJZ",
  "key25": "5DwiEX3FAHy732rsbLAdbGHCeV7jm2pSZp7kcwoorKfBhrk1D48RVMuCXWXSxXMzYJethgixJFraiqefz4wDkjmz",
  "key26": "5e58JwxUMHgbZ7pASbKy4cbjkZ1L6by2WnPbPwbeM97ki2ksogMCwbjAaB9TrCmTmWuqo8eoFrvL41nHu2bD6HSx",
  "key27": "2bxsDdVLPx5sp1Xg2LQy5qvbqd5saz7tfvy6GTPK1rHiNhs49DSDkGqdBoqFHBykjmUc3adw7QZreoCXArbEAtqh",
  "key28": "5Zkyie1G56Lqk7FKhhczY3XTaAXTtXJ5Pk8VC6YELYdZahKqVV687zDCSYXyV2nDtTpDNLLTuQ2exc1nCL67azbh",
  "key29": "4L4dS4EXJ34ayZKD2MGKUHgbdixJydCpQP4DRQSyDdB7mA2FFhD9oXcQV9u4xgLHdqtX2ayyMQBb5AbihtyViz7o",
  "key30": "4RbwMNQxnafZSD7MrnP2efZoHqTBELXRN2NVufAUJxe4Q1YCMm5AuH6UiPc4KgVnEMaKny86ZRCJS5WebL6xAHdm",
  "key31": "5zwRFaKeyZhfM5kRdS7tEbkYTwGspFMF9FVCyAyH5De1VLkBxheibXMtrTJn3QQktBY31GoKEZARhuA7SrXbx3cU",
  "key32": "H9mXwJGCBNTpuP57xToWPHYK5QWfLXjJ3q7QYMmM1rUgUaVVJga9pijU9NfBeDtSUnEVw3ovWFrs4Ptm8QcGqo1",
  "key33": "2QgXRNFyY3qWRNHRoDRtfEMkTM4z1dCPGJSrVqkymu6gFzdbSHMrGmBekdX39wtmh785RjmAzqPA4nZPYLUJJYta",
  "key34": "PiUu3TuwYJQQJwP4XQXNXyNW3ZmhuFioGk1Lfdt1YLVxQiCK8GEYYwtpVhJK2xzD81B9NxGgTrSud6oqvyNnBF3",
  "key35": "4VPM9xzGRmhozcrmBDdUhKeL544n3Eke7gMq5Lq7vFtwUuzPYh4wKt5vko86n3LQuMHdsPfEagukLkAKK46wocbV",
  "key36": "4T5TYKcU3QVCC23szjq3in2vebdtPaibYNmHkR6VhGmKwzfww9rukPrPjk14Ufz826ZZmKXBEWJbQ9Jg5M3mTm9p",
  "key37": "4YpgGZfv7zhwLMbVL8b7J5WdbjNyZdhfVViAaYjPCRTigFsuUPFXM9M5GxTXhLAfXeCatJtoGhrcopznHmadjnox",
  "key38": "5UaUaWgPVrMDBsTL11DgKFjCZLiQ25M4roQu87KxSn78G5G2GWvFmv1QQULkdUxLE3eKBTLLFGf9DrzAJAiswqX1",
  "key39": "5NnHGxnSFeFj5euHfizMrMbr1fDdsXiGqHdcQaFRtQHFr2tGxz43QeiKVY1FTkTV47LMdKWp3odmvVSfj1sV7QpA",
  "key40": "4J6QqUsPsTjBkafmV2XYDGZ5U1qLkngCQUE8APXx6Q92UYEhDQ6SrimQcENpzo6krWwVhd5aUUuZdBocdD2itpMn",
  "key41": "5U9QWfQfQCcDT9tSpt2Sk6yUfQj3vYP5GFndYrn15t94AxB8xBuN2ABg6zfaZPpprZm5WYKz8du6jwDwxxwCD9rH",
  "key42": "4XkxdsCnRm12GcibZ1zK9bt1MPmmE5FA2oVxMbLZoxSgTH9QswNCqWLWMXWFGr4JWcDCKtpsB3s6KbZZ2jYmJjJ6",
  "key43": "5RsMKCpVL5TkXL8skoUxFZjaNTndsJ6wfYtJZeFMJ5c6zT5hQ1yT9DrPG9ZEci3QengiJx5ryVRhqgKfHf1p6m3L",
  "key44": "4cwqMoQYTpGu8n72kNoX1Pkt7aCCtGs8D5F3EZAdfWUCiPeQjamq2Nn8S6ViLhz3euVipnT5d7GYUZDKBaNztQgy",
  "key45": "2JwxiLWaT52UcZ6oLrrzBbcPJMweohBa7ZBn6T8TvceKd4fNkqTPLtKUGPQ5ZQMPWTqccKC5fXtSfhu3RXHeh1fe"
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
