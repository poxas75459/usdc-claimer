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
    "3wG9PbBWBaL2UoLCQy6XyvJy1CSDwGAKAZ5VCG7Xds7zGf2hpLrVCxHN1rkR4f8AJDhXdftwXAGvb16mUhmT313n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhJYN9jK9ERhzhVMKMcycqUrFeNdfHMyRYJ8U1QL628T2qDXrD6BVJ342ampahmdmDmNfJtwa5DicucLDszGJta",
  "key1": "2ZyPspAxpofJncDgSce1zToPXn6maUFdypEqnpHCqCf4vvSJq3hmeiVmFX9Xq947Z6CHpNkJFYt4NBV5MCKVuTa",
  "key2": "2mtTtZ1gtNy5o4dMcwY7M9PZxAXYuVE32duY54mxDVLxJD3qHG98KT7CeKnaVcMNT5ha1bcirNjbqvGPYa4sfKui",
  "key3": "QCw4xenSM7zhYte4UBTMskjv29qzP33VACoSafLYcWKcQ2SHmfZxadvxcT5tHh3sFi9ViDPnBXT5bZnZbeAE8rK",
  "key4": "66wadk67Huaen8QLExvGyksNRWsSrKGApXsyd9w8k59S47TXxgKzty87fDvCoDSDbABqdKA4fEXL5zpkgmqaSZAA",
  "key5": "4M7BE9jwzRFcSTyEqSJC6FJMafhEy8wq6TxcRhxPhyN3tCTV93MW5wQUrfzEivXdN74Ei99jr7Wqc4no3oW9iLEd",
  "key6": "4dqqE4aVteumCBJrj4KrUUxmz16yb8ESsa8FqsjCVaRvMVrQsSQHPKfie2NTTTUX2ahoYt7YZCfYoyZByPHwHyun",
  "key7": "4ZRepSVkLyKPqfC8GZKzurLR94BLU5YSP5zrBmERqCV9xFzwvJFzZwweHopc1puE9u2iMQ83bUaVSpn7FacfTn9V",
  "key8": "vojCnMLK8BHjds3GuZQn7nD6z3iGWcMuJXnWVMWnXk9ZU54T9ybyW1cLdkDxJHKvAYzKvFHVVpEsLAAoRWg5Es8",
  "key9": "2j2W1bcJ8GHjGBEA526pyWbFrqgbtNgqnj2BKDvpFDt34Uh8e72mBVKUXt132i5Bbc6Cz4AGuAEqE2qFinC5xwEE",
  "key10": "3He7ToS9Nmjxt9Mj6t5UJF58ZWJegC2rCJJWhEgXBQk6x8LMKzncJS1ffcHLH8W3asH42bgiCP6wBLRbdy8NpMqb",
  "key11": "6bBVcQrSNNQEAHhtqw4RcCcJ3k6VNbDyNP1oeKv4DKzVceoFYs8cBnCF3J99yCFyKnoDLkeXTLhqRJB4M78ULWP",
  "key12": "5sheQpM6LgsJL2zgeTKDjQsNuVexVF3ENjDsy8HhjAjCGbgP5auQgxErxDFtNz2tra9uajPPqJvRQcnLRV5U2DHA",
  "key13": "5pcKT3EmW69cNXDFRf3d5KEivGfvCVNXDyha1tFE2vFjFc1V8BcmSAkk26eYs3o3BooozXHv3Amk1tskcMsWJBd6",
  "key14": "3Lm34zsR4HzxNUWiG8ditUccR32NXF3s16wgJCJg8JaMuiGTpofGKGsLsnWbSreoV9ZE59F5hhL9Morjkn5UnHR1",
  "key15": "cfbRpTRPwRmLmDngcaL138zdnYsBWcR2cwxA6oPr41RjRKoLck99LfXTZBB8DLmakpyKGbam1uaTMb7KXAj42HR",
  "key16": "379nZ8bKf86zPGU86wAimteSGgzJ7nEARe3sHP3GxNWht98kkpkTAHqVetSgpx9Ksz8jnvVi6zYqHAGJzwwhD7Fk",
  "key17": "3eZHykBmgkzaA37uQNJWCidxJJCmRMhG1BqdHjkQbU34dVcbDcis4J1N8Q8DXmNbPUM2rYr6y8iFvH8m4wqp3BXW",
  "key18": "PUG5KTJrSiam1sWST7yrBSbwqyi9LAwsYjaiyDFQZPC2hrzdZGgutAZpckEZrTRf8W5q6khQMxZkJmAqwJVetDH",
  "key19": "4BeCaVrWmgGvpS2eVu1AikKmz5ShT8u6JcJiY9J4uVtj9ngx8rF7NxvWoYSHdF9zAijG2QLre36bQuiGvb2EzM9B",
  "key20": "4VL4JPx6hWZeFPP6k8YgFYumDBBqsDFkEmszKnSnK3GH9sUZ8P2r4tJKtL5V71Z75JPUCqhJeTEa57iRSRxuPcFu",
  "key21": "3SAnnPGYvmbe2hFxzE2ncuzQpU3WcGpd27515ZuePvCcfQiLhqjMi8hWv5ymuorYNjV4WShUM5yV2eyNrVb8kRqp",
  "key22": "2uVC1aTdnokHYu1cpBuMbSo1VFPaEZXgkmoMpbFDz16XjgCYpt1DDLaa4GjNXfcsZmT5Q1BsHd3T6YAictNw1tQP",
  "key23": "NUxAmNfJSKMVLQkWse6wY9dZB9s8PyghWxMetDtrVFUX4kbAsUbsdjwA7nbYqQr728LEnuGMfYagFdBRTED3NVt",
  "key24": "KYGiDKut5HNr5bbbghb3ybpHNu8DoKjzRqi3uUyPd7Z6cYfLtPxvhjFgjofpHVszxr1FHtvpxCGiiaADJndziky",
  "key25": "3hUneyQyfMKT6HNMaxBMmUgUSSTrzv3ZHQnNnGKct1KELAasymqXCixx8GarbXKGtUQUSDiPHbHTgu6PKSNfMk6g",
  "key26": "ANUxS4YkmDLi8rHASvMDBHjV6wpKBJmrwdiaUbsEo5YetsUrCP4JhhD5zq5x7yVXBZmYAy5rfDsWdmVDkaBaLkn",
  "key27": "22o37hGMfb9hkxzmmKMuJa3jbjbA5zDvPda4p8fz5rySt7pixiuWU5CE2VBj562Mj1VhvsiySgwPVDiqZoTsepez",
  "key28": "49NPwGgZARxRbZPKR8deecsckvMbt5zgbsmS7mQ7gm956r6rgdXYQb2tKZU9zLFKpy8MdwYzyphuLoZB35G7mVaR",
  "key29": "5Nak8Poh5are9x4KkWXfmXEp9L8mgkd79hdwAj84udw2anknTfv4ABY7n4hFay7sMtLwPKFgAiE5SCinquHqqvB",
  "key30": "2D4cbmybvxWhkQLyLJNVuzUqNhHcMkEnMUAqLgBGTka4FEfpnn2ouruR6npJrsV9qdpAoDGLarpvtsE9xCzY7MbA",
  "key31": "2AdW7UsVC175dCyWr4eatJrGEYeYeVjBnmZtwZLEeZpyrSdRLs56T1KcYrEPWjSrL4qndWSHbuNdeT3wcA3z2WPu",
  "key32": "3o52vE69RVKcyCsACWnwERTbmkKFMYAhGRMt2pHgNctz5YT51S44Jbb9sahLLUZ72uonhmuEvVAS9gh9YoxMf8sV",
  "key33": "2DrnZ6pxM7a1CqmjzaRuckuazJvHwuJ6wDEjREbrLyhVTjZVZ3S2fmQc7saMHGR7sk5LYD3FrAhNrzzg1zxFVzsx",
  "key34": "5SmKeGg5EggHAiBGvybCbUmoLv71QHrsc8ckS2ypVN6o55GyjDbaBRKuWD4zc4623YH7DQQPHjLebcHw2QJ2tbT9",
  "key35": "kLYccXkpMrGCnevMBmGPfLt6zpX78o7BA5ndSH5Dh51Um1iuWEsFYR46FALTw5xyJmDJ7VQx9xdySBhTvGpdiXn",
  "key36": "gPhxbxJDeAXrwYU6yEbZyHeDyc9YD2sC3J8KregdE1yu7yyMwVEVVkZK7oaQZVSEwYE7BJhCTv1d3ZfHSVCNuhQ",
  "key37": "3JnWtoqUGoT1XWcizqSgj2D58aFJZFtLrWT5yEwk5hchb4ftvzFRAtFtEzG54UfmYcuFhmSS7FUAZiti9Pj7qobw",
  "key38": "29qbjjFzEv15KtGBPCDz2r9nnFKqCKJUYRgRVDYncTsqk5AXZyfM7P8BXEXUbVJzLhAfcHT3a2kCLmEdv9EU4uJh",
  "key39": "4RCzaonrBuTpJWZyWiqSQBP1a2b3RtpzQ5YZ3x7sfnZqYnqR9hE55Sop3k6XnZPZ3fyvTtAacEsrci19ZH8fQ4tL",
  "key40": "4hPifmX6TeYwn1PjFCUEqaWjSvA1dxq3J3h574dSetFPagX4N7VXP43eMFxLLWiXdryUmKj6pHDGctaBswNZFLCu",
  "key41": "ptP1vAVjX9ugn5rDoYH6rhaRNnPXq4hFKB8wrbWoSVVpj5RK57PwVYdDDhk1zYtLPwS2kYmbV596NaJsLqhdGpB",
  "key42": "4DA9kCyQ4E4sqidG3VsZrYYAuy3dRVUnWrb7ZzYpqWYDs4pqjL4hJXoLy4Nc5KTv5zkYMgvdaUKyHy33oaa8DAec"
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
