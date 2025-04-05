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
    "f7h9y25uyeX3LxJEsTccKNVgK7BhT2rYWKgAQbxoLfDwWh4uVwgcsDpVEEefB8Ud4zEegKSJYhscDgFuNnEQPL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HuVT3bgSpLQWJUNiPE3dEvBHM1xQQB6GQeX7tddeNKFCynQ2LTNvZTdcf1vqNC2Yh8sZMDoFhRXmSMjW1zLNnsd",
  "key1": "5TwNXxHtHEZnYenoMqywimXVz7uDJDdRfK1uRK9J9B9RtBB5MJ39vfcfeVs4B21DUrZZKcJJ5GciL8W8ybHssPbw",
  "key2": "3SKTDoTxqfyfuFbCRpyQhkVUDqv1kcLoCNESH2vHoeCtvvkA6Z5371MWkJFSU4ZR8LWfJZXn4QvwnuwzsDskfY35",
  "key3": "4S4FCwgsKm2dnfeju134RTRs5eXraxy2UFDghHCPsQ3Mgn21ScPEfPwEhSMfLC9hd986ko4hJZwK6wkJUpi5C9h3",
  "key4": "3U44fSaVFfrrxssmzuFAQUfuJSeAqi4uPQdNQfkVYMpMz2iJhmG8PiW6tZLCyweWc3YhAqJR4fRaabZZrXxdzJ1E",
  "key5": "3XfTViQagmJrC4YMNz4j2Ti79Tt6mQvdZn8KvLR1z9SR3fPvk5VffkrSDeCfEzsq8ZSLnVQLbQaracpaFNrpSbr5",
  "key6": "2uzQc8qBq9moHZwt2KWDenJtr7mVp6v6thTxS3mUKhDy8GwSpUWU419v8ix1gy74mAkRDc8e2niPTUcoPdm8MhgN",
  "key7": "3rd8byzXXJEYA4MFSDSf8L4JUeu7esqGvFfApXB9bSirVX8pWCMCEKVzqP7TTeg5Bc3Prig2GF7TTu2BPRFRppqH",
  "key8": "zCy9YB6jYRyNiJ8UzjyKQysDpWGaBPULCKfaSmGmC1JAXWZsUAzidep2NDtEtLmpdjow4onqu2C9UW7dN9j4eGS",
  "key9": "2DHmhByCFSWE8sR6K5Hxn3277GiZPJUiXhBpkMvH7VEztRFHwdJPw4XZXbBw1LE6APxrPjEeNwuGwGmFpuVp61Rn",
  "key10": "3VrKsR6tQ1XwD1JyLzn72UfgvmRBK51JjpLZEofSvvwgbbLx4fdYYi12FU4UfjPg5yvc4dfLy8ViTJAgMgBbJgMM",
  "key11": "2iWtrRKLyn4BkH5bwGpjn4Y6xH4UG2KMVtv12Rs3wCd5SuWnK1q9FC8CdU1xf5z9GJ96HqorowAZoWaFVxEH9AQH",
  "key12": "fqw3oa6EUpX1PFtxKw9zGhB6KWVz3wHnwMquk7oVMaDTHSR2muGuzkPJaXaSHKYmNb235N7HKyBTEngTWzo5vas",
  "key13": "Szsx6p4c1uGqKUkwEtSxSwST1ARQX8zDdcYj2zLSsXPpJBwckjSkGTYYd1Ro1Ag8gN8ELUSQTZDucpLQhNTz3KJ",
  "key14": "4t1m7yQNnKzC4sy5kSBcFY4DPGFZBqZQHtKWujr7kt9FdZfxJvpvssVFKj3vsGCYu7zpttsDs1fspw4nQk2t5p4y",
  "key15": "giXFBxSmdFAnEV2DBCc5yd8gVUgjUcg2myby872LnCmPtBZrcJtpoRS4quvY5je7nHwt5RVVTe5dVzpSUp7qFeJ",
  "key16": "5SDUESw1LqjJSXaYeHgD6EFL1aNvRwZbsvwGpZQUXqBdmYYuNtt8b6w8Bj2dT8EwD8zWLrBW127ySfXrqQJDZ9BP",
  "key17": "5eT2XqHv2k4gCEbwmPCESbjwtKUhB5EJXgQtJBaVDj6TKLnDMrusVniHE8BYDLUpghHz8MKUrsC1shuibnTUXypB",
  "key18": "3AMY6LN2E4HCWRQ5D4awhAgrz4wEkdkgZ6phZKhpJpeZBTfFLY3DjhwwLunEYA8UWzsYwZXXT6DJ8voHZekYTpBB",
  "key19": "3B5XknKPvczAJUuSmzEsKs7cZvG2zc1qrhfpY6r5L5xH5nmVNPrRefmBvv44xpecSfNktGvoXEhSuBJMTDVsvHPx",
  "key20": "59iF8PBs87RM3sAAHJ8e4fQixJRqN9iFuqqgK8xAGtwYANLW44N1eKDnFVEkNJU9nPf1GfoDQ1iadwCmueWM8Wqm",
  "key21": "26GJ274gNEfiTeMhXjgg2opawWQ6uxqMvkcKQc3JbveH6Dj45MGGZcoXxqcaFsd9kYVGEcAMPU2cN5srbwvCNfLD",
  "key22": "4j76s85WuSxbpBJKGFVKbbpXr1BWEqy9BcQ9bQB1axK3Cpxj94VGQqgGEHMX5N1Pb2uxR9vh4ayXgEuEHW5vR2Tq",
  "key23": "3N8bjdYsJEuqvL9zCDBEq9KxE6yQDKmWw6FDRw7GUpSeodYJWN6RfiwWzftqBTiS77LWxQJBMfxtCh3ifJ2eHM6p",
  "key24": "4xWTCiXjfd3erKbq9sauY8GnmmF2WqNbkJR947sXyrefLYKHpv5xGKSoxoLfTVobZF14ZdP5nrjXvLWYVUNACBjF",
  "key25": "xXpoXh8XNkecikGG6b16LyeEkwDbh2ddQX1YrkT57JcoPXvcxJ2za2e5VJ8gRhFxrA1mZfm3wtqyaaFJxSBGeE2",
  "key26": "65T2MVAKqJrfFfxVGnsak23WhtmUgxeyooVLgqRhPMczvimoVk7HS3NQHt9et51ZJURhxtnXYCfTTxWMjJoVi5R",
  "key27": "3dTEKSHzxSichVdxVrFSJYEJ3CeK66hqcsskMAtXVWtDGGTMgLe19TnagenTs6rXaFoQeHyEhNg9Xuj9G2SrfbpY",
  "key28": "LnFG1gY4Tm3fJgSrTKfaMRkVMTbspLTgc5oRK5CCNePD5FJ2WHgZ5q7MF63KJdzWg8rKAV4agpdpqJVoFUux6sn",
  "key29": "2ayJG5PpevuJd7RT9wQhjsPjTnHv8sRKStcf2DtM4LeiwWqg4xW8SbmsiLBBZErBspRUedtoaZBNoe9hMESX94cB",
  "key30": "5m4ZYswvcG41JFx3xWU89vUBfw1prubB6bAGm2URk62uuoZeCVWZkSkYHm7XpMW1rBTWvEu6nFSk5FufihfJ4yi1",
  "key31": "29iQfSeKgWSQy3S4DLsjsT2Z4JRjfTN6nYqXh9S3aefGde51MpA1bM2HPVGmn3xGZAhXpr5QjiTdBoaxXFKuGZ1g",
  "key32": "3iAAAd3P3HpNZT1EJS9t5tj646bxxwd5ABhMqSxJCRzaHaL5qZ55ivdQrcNWisEWv5Amc6kk1fSVWr2vjzLLKVj1",
  "key33": "4X9ea6td5aFL91rCVFhYm9baocbAmAq5feoV3HdShWdrg7W4onFoznGZW4bRR2hSoKSuNzAxWfQyESoVwcFgi8Ux",
  "key34": "2PhARiZLn3vXeqxdfuKRWTiJXi6MLM7azVwAcmW1wFNK6BBxqHnXBvpgBwXScbuHeSGgEDXk1pBUJt3ozWJXN1xw",
  "key35": "34Q2giYCfbqPifC5U48cL4MWYD8yqnjUkDzYTi9ojxpAAvCm2DcX6fR7MQwRJreUD4aQmk32F6DeYThzNsqq5BiP",
  "key36": "538qwa7j73KNfp9RUQ3jLbwpVUh4nzUYiB41NwYJXeb7XbZqWJyiuW1UvPcHF6cngaFPWF21GZaq3mh96nVghFGY",
  "key37": "3PjrdziB16vGG6WWnUffDFUcr6YcPdTuGZ67vcPAPtRNTTeAZ3LYzPWDQ3Shy5LLggbfVopanSjQStCkrz6BKsDk",
  "key38": "3mfcZ89Vp1ht5nV1SeZaTvQzG77wWZBcS6hwcoN4Wa4Vv6V9cg1X9GweKZbLBmBzoyY81Bzg1Vku9s7byX6bjZj",
  "key39": "2stAFG5uVbEaiMvc2rUVHzuSWdu62cARdac4guGtD6rPcmj4gXtVTTinHGgrBWZ22jxfHXShKU6cr5dcKvWpjHA2",
  "key40": "3rGwJxuVmutDqHvyHomzQSK9UzKc21uiqvqTjCiE2peiiKsv7nokJ8rdw9u5n9qbErvR3ro3K9MEhV4ZzuNRq4ua",
  "key41": "3ySJhnPSaT8R3Wb5oNxptRp6HBe2dQJS42EXdp1748cHahXut5r2Ngmk1TrbSbYUoXnkno7JgjaDuG5ae16yTRYz",
  "key42": "3bVfKA1MH7YPucEdDpAQAeJywsq6qqTy46RHoQ8XmTJtACc55YGbk8sjXSRU3y5Bqf81smsmPZBCwpTHvo8dJWqi"
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
