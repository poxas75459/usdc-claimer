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
    "3HrL6g7k7bss55F1fbUhKiMYiPjkRhQ6DJ52BnzyAQH62ZegjJCAstNbvERvVFxVpwn66wMzDZcaY7nqSwpZUzZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vj1vKMjHWCPyU7Ev8iSBMMBJ5KEjo6uym4e3VjstdyWJTsuaYB2BV9Z4GmzxtwA1rVQEPufFPvBeSTcEx54wfgC",
  "key1": "537y8uBtom5fMWJ95Sm5NQMAEQRcgiVoghnwGfz11rdXKgDH8i22pa2jKk73wzrNucZykkxhLzS251p99NmhUSUg",
  "key2": "imCLBM3Xh8YLPWDqAgjFrebvihWV4h9pDmjXeJeZDonzWdCeDSkRtfqm6zvuJiBFra6bGeQzTeB9Kx4o9vEBmEd",
  "key3": "2dM1NjcPUw26b2icknAo5T1Ss7YpV6r4TWcUN9ceSwjCzDKR1XHN8eigtUYWat1VeiQNhCS8qswS6RD6Fm1JfhHG",
  "key4": "Ai4HCqcW8JjpHj3vuYf7y3V9tfnoxoiNkh2uxywMzaS6PsdLaoPKj2wEosMNnwtMozwY2GfG8fMkiCNiWzxGEBu",
  "key5": "Kv329mbuAX7uHgDnXHTkzDtsdG9Jj1YD9mEAVgB6nyFAcUf6vdNrpFnghPVUvwkbMv2DktV6Ut6FCafka4FjqBD",
  "key6": "4cFtGUkBu9oAuHzBcLq433XxDmV4YH3MH2zb6RcGGuDE3ESWVAYvTpPwb4XfqN9rGxhQvwc9yMF2R3irc7qW21a3",
  "key7": "52a4hxL2QMzoqyjNsGWLo11awFnieRZRrrf26Q8tqxQx5dSXdkJx9u7YTS6STJD3sfAKLhXb3N58otUfGHGuMn3b",
  "key8": "44E4usMq4jXQqAa6oBhuYXRkHNMksmm96KxRB1e6gZo5fCw4SqEnbxdC6T5VJgc62ZUYXAyH7CPhm9arj94B2X1g",
  "key9": "4mmg4d1TbpqDXr4XgCLMrD8PwsxEsQJ3bbMLLj2fqLy2NLSiHEsHHFh1Grm1iRdVJk2JtPyZDhXLqrfzDEcRq5FS",
  "key10": "4wiZhVKF5PuAU4eDnjaUrRzncnPxNzWaRpgSK9Jk45giTZfGarGU5bFzciEEhEFaGsKV6LzwSThts8xuJsiv66Ub",
  "key11": "HSbkJzcw4tjaGigkdGZiSaxDkZgLCapLMMtFxMwQsPkUobZxHNUqBrxdAX5twYSAvbM585o3cssh23B9raAvzs9",
  "key12": "3tQ3miAjmaNey3vmuEwP1jGFhqH34daZHG1txYH6B9JcruQbNY78GRAYKgaKhuVVv1tYeffCNoQ7DRbygkJd1nFV",
  "key13": "2BxaacfVpTCoVL5j2F21USsvb1idaxbJ2FM7pyUNaMemSgCqfe8Pi5XjfkSm5ZnHAV1f7SpMHLjFyHcv5hrbZvAa",
  "key14": "24wMza2ykyGyHSChbR4XgScX6BfL2Dua2jkwYmpVy4KLjMg1fqruzGm5kTRH2QipS296NNie4Mf8JmDAuvcj1CDz",
  "key15": "3h3NFLLTyP1sPc4svugHt6CmK4PTVqRdaGcQbq2PpLgYtcA87dbLyHbvUxgJukFBcDSBKRnUhd2uLQfMVpyq7Kgq",
  "key16": "4JGEgZYVdaUXsAjLznD7tZCbmUPTrt1eHroHssuMukERrbHr6DBDsQjvjb4T8hB37ZYegzHB3QuNZcxNcZ1jAmqk",
  "key17": "39513dYyz3oSQZCxAotZYCB7ozpBDwNae5CEpxCf5PGGjXucYKFkH6mfDBYYz8uNTh7cFVAnUCrDnE9egmChw9n7",
  "key18": "eWJe22ME8m7jizxR29m76vb5UWYpuEdiV5Y3r29zhmqfG9ThrHkcVm2hxreuUtrHSXEupLpy56MrCwmRwQBGCmF",
  "key19": "3SRSU55WfgKQcz9skSTuwcNUPrYFcNAtm2U36N5WdFoMnYH1eLnUnTCNiVW5NrrnVhFkEED13YMu1sQyEpx5AYt5",
  "key20": "WBa24r599HhxQJPHsNPTua4dPGJeM5VKkWvzMfUKpfSzHQ5TJQesiLKF5F7Ye8TUwwUTEB6aRTTgpMHQfto5jMR",
  "key21": "G8SqcvzYxBGFryY6rWCCaLPbrdLcyj3v5htGY58vmk6F9UsAhmd9Qo6s34UEGLo6Pq7xF48tkA8FRVF6W1xwBbu",
  "key22": "cUiDHRNtUnjFHGbvuryEAZHeQVfyxvubfrcX87LT3fqyVfLyUk67w1R7nZBh5u5Lb72Qqsqr1dHpScxnUYJdqai",
  "key23": "euVqMZDeqpB8PxMFYTXJZ9RSKoq5Qiuvd2J6NkTZrsm84EiWr447u2tBASffGJR4vFNpYzzYwjTpCSzAxg2LuH1",
  "key24": "32oLBRep3qGy8gBYBu4YXF29gtzs5t3deXSGYBPDXuKFMkDGi3jRw1wyAt8mRHq1Mp6oMYydLo1Q9tssSFQ8bVYQ",
  "key25": "2mKFv9ctMnCvfvjniRN9GY5zzP4CaKnUznsw8dBAYPKVyHk83Hdr9SUWa5fFeXiPxwGw6A78SpsZAhJE5r9KAZCU",
  "key26": "4okuH7fwvZQeV12FWCutv3i8yeXDTGKCWVsgBsGNxbJ2EZVBtx525XcAMcTA16E8B3WbEHikE18Zm1DmSzoM7JJJ",
  "key27": "4sj9pcYq1Rjs5DW7vXtcrn2qcbvSAuHd5WcC4YrorwEYgLBzJjt9Viqan1m83cFpYnWzTzip66BM883n51RM3Qox",
  "key28": "2gVcuuxaEB7eEMEKtv5LT2dKuzsNXqmabDDwkRu6WTioZBH7gVXHhn1W5MXQhf1F5r8dxWRNWGMahhP8kferyRYF",
  "key29": "Nj2BPPRpRaHMiAXhFAyaiKdPSN5S5WkAYF7ckdqYRZsoYfo1ujsc6bew4sVrDJfvsWffxTKpm9sMGJeK5YAzkSv",
  "key30": "3q5BwM1sujKhwhhnL6y72DrUAS5yWLbhJaTbR34cZxmfQSbWPEJeDtUDPybmNGj5buWYRk396tDmKWTFPbRtCpWa",
  "key31": "3Z1sk57ZUcacyLWKeeo8nbENSnjBfAWhgpX6JpChLmQuJoXowBXGcs9TxSq1Y2Vz3rMJi8bqpVbUNpxd3Wsp2xXq",
  "key32": "55qJeVXXKQ4HedTNqzJaWSm7pyvrUmc7FZhgZtd8AZruwCrHi1B2nGAd7J5mWbhnLCBX8UyaWhY7XZfK5ZLaNsHm",
  "key33": "3p76fk4Wf8rkkmVUxXkEwfGde7LsE23GLUMeeFUGgPhcLbUrFKcrxb2VQ8SGAqNhxBgnHYKWduY41fbuhwikDFgh",
  "key34": "3FcHFWo3v34bEs4qwCL3uFW92Rb3xoELbbnm5MGseVHnJ2zPVGEL7axQx18N9L7XQpwoKvVvVr8HtVqMXkZJqsfe",
  "key35": "ig5rDpoFFqX3KYxyCvh135GDEfbzqjZWBLE7cSs5ppvaAVQZndX1hNS3hJg8CM48jyQaRkHWw7yCbAxgryvNNt2",
  "key36": "26bbs3Prgfy29EvGEnSMgzScJJ6v2WRjaXVdFpwPRSbGTG5S9s5Er1AKLMu2r26ZPF32X7FSiWjBBxL8fKsip1pQ",
  "key37": "9RMa4RYPRJbVqmkAbQWGabaG6H3tsyuSea3VRDB1r6hWGKinCPSjL3kiQNXr4wPwpWEsEQZGaLRWj55Tsgw2jz8",
  "key38": "2gjXJNi9YPuwzca4UTTBdafLDxnAk8fi5eAKB6BSM5HJEgMqd7pettwyHSsBydPcRK2vKateGAWrrTBYYrbW4ruy",
  "key39": "r8pCAWQwKtLXSXLsmvzT3CpXy81WFAPvtkhYF8RZRPix15qc2TZLoaQG4jKiPs5wjP44HgarWgEn7YLK2E1BBsw",
  "key40": "4fMmKddDCKtA4cJC8EfVsmX1SivTKUkPDCyruJpjWDhKucRRMLPsn727rLRVZef2YEyFfNkwku8bhba7PQjyGnFg",
  "key41": "3d8KYj4xyBA3V6VVmQJtVWTh5VLrzMPVVvbvwKYmk4ny5FfmHMrZc6x8MDV4RcLzJg2pgyLcghWfmtZg4Xru6LiU",
  "key42": "4zrZrXrCxBD3zQ88TUySFi5fDt5YhMefSy5HNiKjG73L6twZBq9YH1gv1dk4MBUpMKEnWhvfQ5ZVZLrvjPSNnPQ1",
  "key43": "4U46LYw93of2yEVg1CWYDcZij4h9F4bjiwqcGhg6jnqiGig1FrkAd3Sfyo7QWA1pKtAzJJ7ijjJfVJeVD7bsF7xa"
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
