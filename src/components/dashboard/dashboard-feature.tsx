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
    "3pRmyD6CmwY8ANiQJTCMpLSYtVP1FVVHTGk2jqmZ7sUsgJ6ygtCNiAPFkDFPeuFsWSjx65d8oaaRm6TrAVFhu76t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "epbk31X6gP4Fq9ovNRZwsksCLiaGkEY5jYaGRgksVHvKE8kB6mssQjdaMpPbnuxtazqtqFjqRr7ftcGbHXaLA61",
  "key1": "FVdqcjBAAveaKGwSYTf4wi2k6UMvoanr8K4XqVcaWRpFGMiTuVy53gYDR4PYG9r2Qr3xb7RWFL8y2gxvLywEy9g",
  "key2": "qNdisoxRqqxqs4pfp6cYorMTasokstSSEhhCyC1g2xpSFF7SbAV266HZq3DBQPZeuP6UAeJ93PH3jUy7yx17EuK",
  "key3": "3RWuZCDifHddJ99tzArivQt67LHfrvsH6Z3PVAnxp8UKfGU8odszrEYbGrS8QHd5XHHraY3S5VdhSu2mVDtyXVT",
  "key4": "3iWrKVvY9pgTNmD5d6PX7ZdmwrEnXeP68Fju1a56HH737VKbJ3YgUQguJGiUrc7dTFVkNEnvdknB6CnoPFBn4XWU",
  "key5": "5uNLiZwPGfvypuRzbK6Qc2g9h1ge1LnNMkHWYsjMYRSopco6gygWD85B7GDkpYutRRkBFkKCz7uVJVBKHJW7dDtw",
  "key6": "3ofJ2pL5SX3KNcDiqvkEXzJq3KDbBpr6vZ85FQxX9yFAsk6b79haGqi8Trz9XP5arqgRkzfcVGY4zrCf34LNfsk7",
  "key7": "4yjyb7LQgkZchBZo4k9zSdFxvB5uwVHnxHDXUAG8DKLy9aXAuraaGVQrSr3iobHzEcRR4zWrbCxpTaEBjo8tZUXS",
  "key8": "5UMGJ4ni6LJK55U3TM1Vb2YJk7XCXRqX5814jXNTbAE1PscCPyDpsTmPDZ5Uc8jBZ58FcBz8xizHrfajqvHjereQ",
  "key9": "4AtCK6YLKoFzV2AtnqYsunYqqsrdf5ULvA1ZDcs5pcpgdpPg3nRmHayUJNPJc2LPnacpXe3XNYfBBETExsFnuUFK",
  "key10": "5yA94af4fPRHaRdPavHuRdpPunSu7yDL8oRwuRdYR23PPTp4U4wMRYV7DX8DDjLcXoehottvKLQHpKsNdKwhNuob",
  "key11": "VGcmxzV414fRK8dTYZ17wgdzU1JTUpUYPgDyDZt2F5ZYGWdEQv29ACypaw8MNU2zBXjtFDEMLu9qCb9Y7Q2CnGw",
  "key12": "3M4vBPRZbDi3whemJgGoZjuJdY98WsSmYJ4e9EaxCahCan8CnFsrnuu6rUPbXLipMmbnYLBfyeHkiQJAgcnsV1Q9",
  "key13": "325XVYnwSha6vd84TVqXE6mVmHVoJNPJS9Nf8MCmuhF5e6buSAbkf9bnPuUzP6TWEucB8nRziyiHkjbByg45Sjs3",
  "key14": "4aWEAwoQ8evuGmwX1YHNySfyy7htfUzGHjJD2g9jp32EGpK5iLt8gQ7oT2fdU26R6bvRRWH7Kze9uu4DFnExKiBK",
  "key15": "5Sk87gQe9mf9ECziS7Z1DkVsRTCF1QMJc6BSeGCL686jZois5QA4wiu6Jimc6i41CLGUUrzLrhjVBcgDU5or3XZi",
  "key16": "HXAjL4LKi9o3oRzZnxBiFasqy9h7UoCgH1Mz7h6XPvsysv5i2AQTeyxFw4c8TKbTfZ3J1MpJcFvjxvxADu3eShX",
  "key17": "3somBhJyxq98UJtj8kN1v5AQ18zMZGfvA23EXgRacpcNpr8Khq8Man8523Vcfo3XLERJJyG6KjbP6meKVcsPa5JV",
  "key18": "3kprdqZbainx5bGaVgchQz76Sn2G5xf6kyBN1yBM7yxvTbV2GQD2vXz9vVPWPRw9LX1Nmzp7hZvnRdhvsPtFkVgq",
  "key19": "3dGGaCrwS9ar7yvepCZPiMBmpFjPuQn5mWHayjvs6sjcjyjkjZVwvifWGRZp33NzQso4LhRkG5w122AEJF6XWSXX",
  "key20": "3tYi4FHaKognr6KkwSNZYouySqMYLRne4jeqPj3i8BukfeaJ8gXVDFeabKv87YwSD7et4F8LYD9TtjK8uVRdK832",
  "key21": "2sfwWm8LNbSfpv2sEs8HcrMsuZjoexq9yb8f8kjmoTQ6wmt9Y1SYjg63YcFrLZZQV8qpDPrHJ5gri4MPbpG6EFj5",
  "key22": "4uTpEfSqcQYu6PqUcWqigtveQ66TVk99rrTZgHUkiuT352M8zwsaXYxNHj8SvJ3KgApBc6X3kqhYjV2KTv7howAQ",
  "key23": "5bSuk5w4eR4WFnLqK93KVDYba695vNK2inVaBCdescor1GRCXso5TrdR9p7UTgTE9R18KE4vTPbHS7Rjvj3S95p4",
  "key24": "2SesX3yxdnn3gqivd7LqkKPAE9Z43QtwRzhLdgXvGpKDtENVn1CZD4y5jFLguCFdwvvLbjRwYC41hYRJtyDZFAbH",
  "key25": "5PnsjQs9YNRYvSzFwLT7ye6dwuP75VWjBvs2NdSULFvxuUmudYJ1JMCpksSaCSoKvByvxkJM29CLRiRHZfZiFXjV",
  "key26": "3kDQ96mjWQwvojRuMKGfMgXxZJgb8GNgKoNSc2eKzr8xzTT6ActB3cs1A3Ty6eFwRj87AusQTehMdG9Ejv2dZrMS",
  "key27": "3gezmVNEdXryphCz3pFfrv7zMLMBpfeC7rLR1Ydb8aQ1wJkDVPZPEi8HyPpfewoTD1JpS6Gmz2VkDRdAhF2yknoE",
  "key28": "51KerSWaLvrS3UDT26GHdT7SB7y9qixbSrSrxemDtKLmADMNsMzFiUT2r3Xywr6zzaztCDoFP5HhdqKBCGQDecse",
  "key29": "nxjBBLDbaVGJtBgGX2XtTCSNPH94A9iwZg59qwNZv4irvYeRkNaEjxLZ2M3WziwPtVfWx6dm8ssGcfrwByW1Y66",
  "key30": "uiEfQpPSt9PTGW5dWbqdSyTMJ2HtQMHJRWWBGdHANAukrZ196ixw54wKHXnStDYdbAH2TsNUt9woLup2qwtGeAF",
  "key31": "5Wd1rDr7ktw8TFzDax8f6zNPcGw4TKYULWonmbWF7Jp1rYJsFoe7J5zwc5bSkg6c98SMJmGxwcq9iP4m1RyGNUXU",
  "key32": "xBqQBwiRLf1iy2gYoWxuwgehsumty3VSyDoxcvtEdKQibVmuZHsnHuXPWV2JG4qnazmsq1XMH6pYySYEJKhsLyS",
  "key33": "YMZfoLp7odMVAqSktKmq95jCcWizHtRyFcE8CVNWuXRqzRne2uzxGs4QuqcRhE49XccmKF92HKiuH4dn9ZsXEQT",
  "key34": "4pfxW7zffXsdeULQnkSUcrosDrQ4sTyPWzGANrb2Et5Mf4BPSKCS44gzG4jUxx6JL3TVj79PPT9BwiirZKLAEnJg",
  "key35": "qaD3ruTRf1YWfqy4zuqoScMEoGjYjZn4hCSWWA2iBmWUqaGgE1h8yopRh6qyx7s3baD36xbnCxsvLoBQJpUD8cF",
  "key36": "4vmzuvcJwGkdoDadpyRNdZfzd6FXtxsU3fDshPNS3j5iQPzgjTLxxw9byaUS67zpxkxAeL4ZJoFzPmiGKinf3Aou",
  "key37": "3aTtiQduQXYKzLkYuEJV35vo57FcNV5rvj7nojmJKmsxoYYmD9yCifoKnK8ufuDpNXQQD2QVTidYTeXJGnVuMwTP",
  "key38": "4xB6Q7754euZ6f6VyKwSRDTUUvE6qFNJtYQEvZCHew4hpWYKDBoRxNFWzqu76vt4TVp1i3yrfhnyfXCbcFRbZDTF",
  "key39": "3wadU4GMbKys9KuiPvKPY7Z8mJoTJ7EZNVmJrdcWGi4EPRjAQn5DnJBvqiTqFj8iU7LXJjKMJKxfXgpFhQ8rjD39",
  "key40": "3KwiCCthbSD5KgRzCQnWLuPSRFCWsX8FhATAyA1xw5W81RQzsZbBF1Fc7RF9fgbwAPhegSQ758fmNiSLxWewj5gA",
  "key41": "5P3UZ1fxVJepZCjeUMXu51z3VWjveqPYYq2UQAim3qwMFzPPqBX4KGeT6VfW6RHYkzVZ9JxTfDbFWv4ou3FwWsGj",
  "key42": "3nwANkQRFuRii5XTkbociJvM2zLYQcVSGaK2NBKVx4kB2CtYQsEuHq64VXct8zaAMqrekDGEeb8MNCapW8RCp6S9",
  "key43": "UFiQuGUF5tWzd6BiRDxoT5exLJbBr5x9KSFzYHmTh1c3stAbLgrjZ9x9JVAuJJ3nuDSQ155BuCbcU75CdqSwwe2",
  "key44": "5E2jy14kTr6XgJG7TWpHMLRWVJgr72Bv4PnPLWVVYipeS7JFiQde5sbDb8cJADtfNLPotqYzBjSJtYJmwEeARdGx",
  "key45": "HiNHxm2QCDdi1KAvE85Fd58bvdeDwHoAH6iLAUyHGcMrECGYWafT4p8LFrEQpyBXqTQ6gE77C2iPxrUzcAesmwE",
  "key46": "3ZNoxozjmi8b9mwC9JL5RKZW89zo9Paqqn6iCdNG37g9uPU4BcQVA11mXAtRSpnytoveaxpMS73tgBV1wBrLrX9K"
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
