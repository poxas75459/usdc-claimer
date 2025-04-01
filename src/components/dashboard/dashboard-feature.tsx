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
    "9E1wTomz8kgS5fLBqyoFRM1Qu9BXzCxR8EkC8YVACmgsHcjwbzXFeX2WJNntyEj1VvPKFM7vqCdFbYKt91S19WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FMBgrLHKoQPmiQ5G9YAcuVT6cu8XgetaagY3tRqoU4EXuutZ9ve7bJYET9g4YbqjsaG9zQoscNgMQsshvGtsozg",
  "key1": "4nhW5uFTVqC3nvRr1eazRYstkUvVYm1DekszC4XEjKE8g46iJiYmCwRJJ138sofxT5VFbsSV7sPJhiHK51jSUSyn",
  "key2": "5uTzwrsdLg2oEkJSBUHuFUFwKPUSwsBeHBctkksp1okpAkeCXV8gLgtQrX1VuNT8VUXwvQgFnahKvmrS7VDcGTty",
  "key3": "2my7mLSaNVTjGDNniac2pmNd5fzob5S1xHWeorH2s3gH1PUqN9zcSjFL62PiM3g1LMPwGNYh3odwYjfNQ5KAWJPj",
  "key4": "2yEeMYhC7XinUTPyAZRtgSGozaUKwRDRQh7HoE8GGoLFwC9yE9AK8DwYd359GnNzn54jiGHgcK4Gzwt5bWzAEgsR",
  "key5": "51kYABYqCERc2GMbS7tUTB5BUTBii1BFmQcRrB76okVQS4tR3sbyCZwjcbmtEJ34iztowC4r1a7mi1fHp7LsCao6",
  "key6": "397mUDbN9M1xaKzJzmBCDLV66ayHNQ1BDuSVkF9cPbGAqtNFkatkNaM87Nb9CgoXo6GgbQzeSBjRZiYptoKqYYrT",
  "key7": "3qQ44NseKF8EKb4xHbnm1CVmqbEu25CDwWtHBKqFt7jedeY8K18PA4okQFTntqxFvkWpLb3FRZPqPTaxZm2Gnp4w",
  "key8": "4StiS9Gg7LcoWhtxRxPFdL3Md8Zyn4CmN1eFdNEw6Qp8Q1Tjnjw92qwFQGrM3K3nHTgWToiZfp19ookKcRZozDxZ",
  "key9": "2WFV9Jg4a7vU1yTtwuxGQ7jX9YY5KWzgDCj4jqxo66R6uEye1RYAhp8yohxiZ7viYJpGgZ4C2HjhAPZ9hsBPHj9U",
  "key10": "vz57m7tTWLBT6uGrtyEiQPmxGxqyReTeBY6HRNMgEm7VK3NbB2aCTEhg45SvN9xXeThgxowKETq6ekXPzXcMnpx",
  "key11": "maYwqJ6N5mFEt5TmNC159iU1Ex7to911wvmnDtbPrkMgRB89HohmmZfGwLKdKnYkBumqwpGocK5ksZ5mtVmUxzN",
  "key12": "6uwLjHke12b4oTT9LZDbb8GpJQBqWyFBasiFe3enWteZ6iw1owzzeotUNrceFsEYWoDDJs7oz92dUBPDYgPnyyv",
  "key13": "Yy3Jw2VN3aXqyBeFTHmp1THro1uV1cQVJjxf21JkvX5zCtezfrqxNYqsg6KSdJGKbTwkyeCDWQg79mcj1R69RtK",
  "key14": "2C7Cx1Kb6Yagr7H4TEdKXJ9RTcCtnBscqxnArfy7SiWVYt7rHZUiNm4GVAx4cgPeSeCjgq2bSasJ8Z6SeHMUF4Kc",
  "key15": "55nZ1yuRQXrYuSfxoxpdT8NHi5BrcJKZ7MXqDfgv3Uc2NtP7mNN4p6cZ4FikCYU5Hn7UEfTT2EaFahQbypwwTWc8",
  "key16": "2z3BqGUNtNmppFgfHJUJs3jj5yCnJ75AaiY8w6YczS8bcPuNa9MRCCktYHXuSxvqXSELzp2bMH48HNqYXnMnGzHp",
  "key17": "2Ukh7eoNwruXwGUduyRSjm2xs9ybWmbrW6fMhEzidV6GY3pL4SXhwCRAW5pwDLY9n4CguMyQhsR46Ta5f1ydbpXH",
  "key18": "27L4RYkhhEPZqkFDRN2Vj7XAkGhKAzBYnoGH9WTzdDkhWQjgwgCUWsoFm517mksWQcY5uYeF9BWe7iCJbgsdnf2o",
  "key19": "MMfTSStQE8nWwePB6BK68YbybLzxD1YoXsCt1tBuVenDjbFkoXWJvjdfpX1Ks5K8CW6CdEhGmpcZiM4YwvFaxXv",
  "key20": "42dbCgh74ohBZwk18di7jbsDWEKwUamRdRvGaZyjthofJwHUHjYKBRyeeHtunk7xwdXSg3Me6t6sydiMdAcXgyiB",
  "key21": "5H4TF9mommxnbX4UYqPcnEzZT1hWQiZ6daSHTCkx4VEpXJuXLHZhgsE4HPJXMZPNxLZZcfodoPYbVhzwpPzxNs87",
  "key22": "4gCfzFy8hULHCygHY2gkXPw8GxeeWWLcw4wauPzMHdLw5CQ34QCfzvNQ8sahHK6SqcduTZ791fxjztHoLMPcLGYV",
  "key23": "62hEbtKxfp5CbbEw6K9d6LJCQSD2qBkUV2EQknawE86sr4J6dV3ehcxre7F9i2j3GcGQKRGQ764fToZJbbxAS3Aj",
  "key24": "5rQRwBZ5Vc7WyqCiwghnmoMPVuR5RrVv16ruK4JA5Y42ndf8xrarbZy88CmXY6aSWeDSXb9vUqZro7pzW9e85cBZ",
  "key25": "21GAcPD4Wfc9oi9SYqovJY1QrGsJaoYRPMTQiiVGJuy2oiPp1Co7CvEofPR3mWW6HWeaSbMsN1EfGBuhKPtFyP8S",
  "key26": "2F4N2LDZLwTaxqC5TUAFBxxXZdNQ2wbwyPysfxJQ8QMXZ5jQdkSjeAzGY71f8u8FJjxmq7sobbnKRnfYXWpZuKVW",
  "key27": "2jgDCgzV2rdkMhs6ZzmybCfTr8MhkaQ53vM78ezvurMCBfUf4ho1iVbgLtXcGWK3uL38Sch86ksVNNjqdF5UUtv5",
  "key28": "JjWDY1H1uFiwg5uTiniMsyMSkbxWiQFMiTHRVjicx3PPYjqSMu6UNDa4aXGzpF5YkXoQT7grmHK9sVowUZ6LpwX",
  "key29": "3HhXbL4ksWAzryKwxtAzHWXvtJvs5bk1fjWUqGQibfJreUcNp1A4V3K6VeQRUd2icAF9KMeVXzjackLB9q52FN78",
  "key30": "aNdMnEdrEm2Fp9ct7tGPfLEvdW9WfK35oJRUhShQjG1Tv2z3FDaDkzNkESayV7MgeRZLhdMfihDjRPBNPK9BCSu",
  "key31": "5k89kZd4w7gmXQVyPhZ8jfRPhpkzmunqMCjmNoHkWborHLsiniM2AbVxeY8B5yVMbYrfXTKug7n9KMcCC9gFJcqo",
  "key32": "M5S8HyG7x9US1RGiqKnJefnd9v9UFF6ntTJacTYBcpa4nkDcBR1WbwTLATc6Yxa4TarnbCXZ3RcN9VMLxB97eEw",
  "key33": "32bWzhWX4LDFuZ586cs5rAafnfM6b9JB4WwprPGMcXRga9Vih42EQ6X2SNX8TEJsELQx9N18MDdFUTNcCm3zNuzd",
  "key34": "3ZSccxAd3RnssyG74Vg7zTZECw3JPcuqLQ8B8ys9x8WepcpWFyPX15Ry5Ki9dt6iHkQJFtEgpQybdXDvoWjHUkC5",
  "key35": "GMdjCmD7yQWKuJQCNSjwadKgcrsiP4sGSLxXPgEbswjMp9fFH4g1Lx3SmGZYXrhmEYYhTa6ueTYArnoKHDCPf12",
  "key36": "52m4cirFCubwjUqijxSkZ2ycNGM469oKrTzpxW2gkaGMMdfvTSGdrH4q4L1SGVtaU6vmNFisY2JLbpG9bncnpsgM",
  "key37": "5QdUanw3PbPo9fXLNqxpTrX6FFmq3LBKNYVHr9t7JZo1PF5UHvbXBX1xk1a8gWqe2PMtBaQUEc2yfNhqF9J3Bktj",
  "key38": "c759PuWpkdaKbxHtZp8KfP8VUduKp8v1GrheWbeiF7NpGH8GyLdqU77Aua1xWzPWqU7VBwxFkT6DTeLUwwUdVWf",
  "key39": "BGPvphkRzthJp1GSL3BtcotAA3rU3yoKCsmYzS9Erk7VH9zTLpAnVLb7CvdYPwWaLWuKuUnRz5Heqs6KDXLLBNe",
  "key40": "2gfUhp9uiDgABVwTFGZKTjbFTVgMtYLS5wg14jXZ6k71GekbUGwKn1LJkSRycYyKjJqt1chppnFBvcB6gf3LAVmu",
  "key41": "39MRzMuMi8BhuHwfXK6RHwGnQgWPfJzTLPxLD3yrsBECXGhNKzm9j4FjPwYWCkcpYMh7By7sbQqRw6CKvLiNy3t7"
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
