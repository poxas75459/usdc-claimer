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
    "4Pzav75tQZVEYVfA4Sd5VFG7UGzqC7tYXCHYCeQ8Rp3iQJtkFZUBMdZ7JK7mRfqhG7UTH4DZgFSnJA8cgppeJ99i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nBH9G8GuoCSumvTC9QKEjkgVW2HYve5aUnErVCs3qMjun51Qc6CBAJDN7HmXbktFFPrv8fb9wn94CFvsu4AfUfe",
  "key1": "2gPHhuhzFF1UxFXenPBX4AgRDbjv2e8vboA9LFnvD4WnksoEdAHnpvaGGAdCSmxrsnpm8V9uuqSj22LuJMxoEhP1",
  "key2": "bc3QKVX2sUHjjwdKDgJRVsqDSDBnhU9Fgq5GYgs5eJQEHUPwr8sDXTCKBi677yjLUxEhSXyX6JQg4VnLVs98asS",
  "key3": "r4d7e6XPpkyhYkb3jD7hWqCkLVeGgwnTf4yMjTTdLEhWojvH1ssdAD8594f9piejgg5bCFcs2yHKtJ9VmZxKTix",
  "key4": "2pDZzHyVdnFZkS9VCFZ4h15zVt6WkrwKPZhuBziMK4UGX7ANKuz1efStZxZfLu14CJGzaAAtPreVhgySaCvZRaDY",
  "key5": "66VfBoTufGdRwpEddQximwjki9CUdcaw9yL6fzTWRAFN4Vwi9ECqwz4kLcsCGgJwJj5cAbkdgWECTqTajtp9kVyT",
  "key6": "5foSJRtd2ZT13RUWRSz5VZCX24cfCeP2m46qCJ1vbDKtyNtbSaiRtnS1wyA33ijKyzSQiDU6NY7Zp4f6A5cpfJSJ",
  "key7": "2NERgofvZqHYQtnc1kwtSxzdXqubZQLkfwmMh8zPSHnHkHSj7mPpwsTTt1Za2NKftE8TmtKJ8uhnvy8JtxwMTNFS",
  "key8": "61CFykJ2sPnbKcQV9W74QZ9jH6gH3TEUFC36k8WDyqdF64M9A4GKzrhYbsBChF23RhqRjGv7LWAwSrdpbqs2iyqY",
  "key9": "63o9Z5yf6Z6cK2CQjDRTKMHaYdJrtRitAGMm4oWkzNZNGcvWfKBCF9g6cMSDXwv1UY6hqyW67TNFPuPWoPqEMi3y",
  "key10": "4YkE6tehNq33e5a65Gp9uu7tZUqkg8ZLGxnSMnqtzoDYxurCi56zSVhpNsLesLqaLhWXdfrSfKMe5pPQSDGr6e69",
  "key11": "3YijnyjCG3BANV3LQ45JQJ56qYQ1FW8RzRa6fcALL4hZiXV3z6bDxvjRiynsjAfDTQZuAe6PmZaj36JaJ3dYbtWo",
  "key12": "5ogcYbjWTobm5BPqgsPesUAd4bBvuX8T6kVG1hYHTKm7qhedrg26REMDy9iLzKfVUbyMJfm2csb9uFtFqRFC4JVH",
  "key13": "2C5ViYUK3EgKvPm5SYJHSeyrbZXSgAJTEGiy6nijwGVX5K1g1XHna8FkWY6PtZJxiAqGvR1yhqnb7ZCeSHiRLw6",
  "key14": "iHGHEpZK7ycimBaXxQFKD2VagE8gFkFJfnemhuyPb5xVw4BoFs2aDThu279mLjwusHnk2nSD3tNf7kEMCNXQAdt",
  "key15": "4SSgPmxfErvofLmR5SPyJzVSRsJCPHVFxzeSbpmShCY7pT5yakC6bUVnouuL5ez28A51jkHjUgBcWdZi3nxEe9jd",
  "key16": "J9hKuBFtmdkXf1gehfJ9Hn5Ta43oWXxU7wS3uDfvtDGJEyBmDU2tCVCy9ifvtjieUb7Ehq3hzkH27oe11f73iED",
  "key17": "5DdWp9WQiG7MrdZ7dbwyEURgp8M99r2HYNjguGSZrRwpMVmpvUNgcy7pYkkZWQckBYE9gDeF4iBhikDJx5cddeGg",
  "key18": "4SPNzyTA7MTSvmxaGZoDB673xeWWLt1XXpYftmkUr7dG7CVd6aWEdQvtm2k73W22ffhWfaVrAyKFVXtpBNWkRZ8s",
  "key19": "4wxWRsxUNETSoCpv5wPsSvPUZ9VdYyAzyx6BLW1qB9KysMw21hBvQdNMszPG6NWRx7gEGedHCpheAKWe3kpR3YnS",
  "key20": "54uZJEULt1LZM33M4JaD5MKk5dhz2YafbFXTLnggvB5NM3esZx2xSifMZjY2uyvvkZcvzCGB9wUNfGcxN3GMhvDm",
  "key21": "F6nsuSLfLpJwiZkMX4vMJKuXmasNH5HZPBzpAUgizzK7dkMUdEsq2975PQNQKz1KivHziyqv8GgEuiFwGZJsHnY",
  "key22": "4UtVVnYCyDh2VucNLqTYRtpKm3YYd4ZeyK9aKVmGFhpaWgwSYC5VhsazcCUGY4hov4N21zW6gDF5KbKKRdCorSJq",
  "key23": "JRSpD46mUycGJ1ZGcSqNc2ibiZK3m4J7JVxQ9HqhbiYDwYtQvZMajGi6yLxCbZdUTD2sA5mGGWj38jRA315NzJK",
  "key24": "3Xt9vEbkkUjHC58bedJUjEq6FeF8nRnr1sDkjLYvfAsoxox8pjSoCH814K5m1igvGmo3Uk4gNRBEBmqt5EfptjMc",
  "key25": "2MS1ckiDTbcfoT1UCp5Sm6gneB2Q4CEvpkfyS4drRNwVpCrtppNKfvmQZ3ExZGS2X2RwG3fLaX8dUPaEev6pkYq3",
  "key26": "2ka36SiNv2UGM97V85xxKk9VWx7YBwZFUEMEKYKJQLtKXtGJyLoNGqrGMpKQCh9tTALpmLZS68BeMFk6cLstmXXv",
  "key27": "4KT9tobhWFBQmpCNcnXNmgP1jPEauZmUm6ZwwBHr15GDJojb488KjsFdG5pfDwDMW5paddUPitLifUV5brJCKcTC",
  "key28": "rqGNyNSqxW2LbpqM3eo7m27P5DTasReVpGCbv6XNyjmQwJAWEiaB6K2fzeiXcxCDJHp2obzZgjj3bhnELx77eHm",
  "key29": "42K28VA3PNRSEiuEvzMptELaWXEguo7Y54TLiC5M5JYazqZa4XQ79JkDyULa7e9CoaUseoEoggLVGXYha8gqztNn",
  "key30": "58nZzxCQ2NeQUu8F263bL8draGCKjRWB8biLZEZKacE8i3XrqzZGcJJHSHcWStBKBcxD363Xin9U64CjG1JhbkMU",
  "key31": "3kPj4oVaQ6dNNcvoDQr9xMbMX7QYcTVB7b9HqUx3Mfur5mraghQZFjvuwJJRY5BV5SWyzSgxAPU9Udcweg7CMVH6",
  "key32": "YwYk5ye98SRJHop5zFJbNZDK7fuoaRzQTbgCNVjMo9QQAxfd47Csz3sECWRPepfMDjDuZRwXsmq4rkgKYe26uyH",
  "key33": "3YjVjLARTqB1NymGxYtdM2K6DwVpiKrzidDGQWoMF7J6Gu1hyE5TmD5CKRGsNrARYqQ7xbaS2jT44QHB1NcVc85o",
  "key34": "3NDda9gpKk8DJ915XTMbQ2b2N2zkmMr2nJ59mWXMZNcNSjxJmZ7QtHazqd85mEAPMRHUPvpXDmPN46X2pFj2aktT",
  "key35": "4tBjk9h628G4cYFvbc3WctnxPGuTiPniv5rYVL9e3L2FYXQR4bfDWkS8WBLoTGarb8WKHmv5SXwbvD23qM17tvV4",
  "key36": "LW2aoD3bnEYGRs2tL42AFFGkjQ4UuFQVh5z2zEFZtxfnwzyiiwhSM8AfxML1x9shxmMFNSHWEffkqzZRHKHv3XL",
  "key37": "63xMYdAzvGh8cjf9XzDwWKAaZpBWCm2wqM3tM7rn4uQy2BLtkhtQrrSQfaFN5zjBvAtkEQwsDSjo2SLuw5BnHX1C",
  "key38": "5f4R9kZswXBLAAMtYMXK4n6Bo1vt1Rx2N5fVNChgK6gUUsTyeDrsLp9XReJasiyhMCLv8FfxsydyENH4maBCrGJA",
  "key39": "bkuTLDXcSgagecZ4pVvQPHr81woiH7fArXxxDT5iKEicW8hjPS93pGKmc9Mb9HRCSRmAkq1ciWG8wEFQhxyP6zM",
  "key40": "3zBedb5ddENFLmAQcHF1d13YvkUpBxcSBN9fi5qBHpj6iMBVxn9rz2r4E6w17Ndvm5J2ZkfFMzKDykEAUCH9qdG7"
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
