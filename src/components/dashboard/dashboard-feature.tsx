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
    "4WY9NgQ29Aoq7Yk6GqFYwAYcXUHhbPCLiorVdjgHiHaFXM8AbUw8APDhmkQ3HfKR95WXR2rVtLv9tmrPumtVVEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WPacddfKzcffYvpAWZ8dV9yoS9ioJfVs8hqq4XG3wvXFZcKiCiaEgQp4eeikoEU3fKSpoB9nRedyZXTdrfgTcd2",
  "key1": "4z5jpTQMb1uqdiU633axNRqKVbdSEbPoTp3EvygKvmUfou6B6FZQrBxvPhiS5vvwk333kUxd1s1vjfK8gtvRkXy8",
  "key2": "2jkGGA3of1VWMW5JvyfTX7LXiWuSqs7pMFQtVbHKt39fehqw7pLqa8TbYtUJ2MkhCehBECzMstM33KJfpYVoi4Xt",
  "key3": "46ZsVdi8zb57eDYrywhm1V1dZxsH9nocweoNPacf5n7z81A9ahJZYUfS46r7iBFy7ykEJLmMDDt1CyGLcpyBaiJD",
  "key4": "3azgPpkXcT4k5Ro2a6un6TZANpFEyMEcn74Ti8uHJdfNA1Z5d56EJenNVpdviARmBR7YHJShyt6jKGmKtiL6XLzr",
  "key5": "4ZP78B2Z8wDaakWXeaFpRHDfcufuMXsjBjeczdKXTYpT9b5ZeRu3b7a4myQen21sX16gVZxyENFUGAt3YTqXWLGz",
  "key6": "2GBmZdUcZWg7QwBrZCGRbncKhHJugw1HHm82AfCeBKUcuFmF51UW12AeKhuSVRmC3zqGfuMhRYFeXkEwvmtvWgce",
  "key7": "35eNHVCXuJkkTsANVQ4tTKGJ8AEYXqCYpTuodbeWzWVyjfVBMRMLYsPsH2HvGNBGQmp4HARJdS3xvUoSCUTbGhdY",
  "key8": "38UeiVtj8wSzhVsGBga4bFuTuM96LD39oxzJs1H7ToR2Tyrxjz5FApWVA9x2Gg1hkFmg1RuSCYuobwALxhjNUZVz",
  "key9": "3FFssopNRSfkPEoU1CCoXCWF2WN1n6rPvmyGq7gksPm7TADgxKf1Y8biQmswN5F7g2NTPjrDZQcHtVvwHA2ZrizD",
  "key10": "5kBLLT9P4j8oxxS1abWo3RwqW7sAy8HUMNr3ppUTMAqT9fwhDHRebNY579QjSfgcK6rkGTMsVhe1mp7bfEABGchq",
  "key11": "4Tb9D692AVBNQsmXrDhjixzLSEE7q8spL12vrLT4R4Ra4fRR2AnpqXSCWuVeP4zGTH8VewtXNX3eX6eJUevPSGyt",
  "key12": "63KKB3V6wKiFUhsnC38wevEwKUMPSfQ4BbN61kKp3CQRHpdDT89y94z5iv1JmZZbE7f9TALhK52SXzBoJ55EtGXN",
  "key13": "3JaTUyNwWX9V5qw9M5FP9qETjv2oAeG6dvm7qWH4dwvV7GM3AHYtTbZ7amjmmZ1e1ezC4YJkkD1EA3VJkEzz2zsW",
  "key14": "3CY9iu5a1zaXhxcWpDxDrntoqPYawVjXdRaHykacEeygQUEhif77SSDndeb42SnYmrQeSVmv4L1XL6YNakjzxMQt",
  "key15": "35YHrQamJ6ES7HepKGLLDZnwHYGNM23V7wSqf3iSUEGyo42dx1xgqjV5nHY92SerQMa1hiJGx62atStHPvJn4HMm",
  "key16": "4kTaj3aNy2f7oyFFiLZ1Lasvbwg22DfRFXtcbGiUx57mQXRo1nVKypPb7wALhhUPejpmcCWeTxxPmcXtKvZGFj2f",
  "key17": "5sCQ9RF39ScpgzNeDrmhjdGacecTnTywBy3ZUBTrWcxM4PRYkuaZ8egxsyyVDcydG1C6eh85huyVqqWBBxu3r4J7",
  "key18": "3HtP3LQ3m5eXCYwvuGzRyotQHJqnsJcAkpdx8zjZHMHaAxtQKaAY6CXr6KCWULtEp8jmZYekUYJ5pTpp3rFwoBwn",
  "key19": "mALW8e7R4j285hQdtkqvcZcGvycWMUvMgyTPcH1jUmTVymsNDESxBpgyjLVMSK86hYpE38EQ5tqg4c6S972HTTo",
  "key20": "5AYUzFtSPcTTi3g2aVdUyczWVEDXXw1dhbkDwcxRHsb3wLSg5ogx5KY2stLiWHZrdWruBV6BgDbZzpT2wL9cp5D",
  "key21": "5GTuq1UwzhuDrzpM2syCzsKhRxfqm7aj3gKb5epya6xsHWprAuQZwwkbUecHXEcmJaDgBCxJKCA5oS58jmE2ECZC",
  "key22": "SnRMf73LYTuHohd743ydYqShSs6PGfCkmzTFmY2JnwY9eVwonsVWrbfaFmcxtaXUPok9pz4YoJTtUZLKh8otnLH",
  "key23": "3cnc2wJDE45nwq3efdHi74gKAcqeQQcWeS15tPBVa7GCPdnfofm5DBuchUd4FmwmyYUscFDykyddcDawE51mGVFE",
  "key24": "SHApeNPfGTt9fLWbnnUmdJx84iB23o7pro8BnD2JjVgvqXYzyjk9AJfh3cFWRxL6thdvwsdFHmVPr4AQ876f1rT",
  "key25": "3TTzc3tdF4UTVtnFuBMyWLpfNzcx89jQq3cyzLuQqu4ATv6tkicrMp8okwN1hGSVav4qEyicD2fTFtaxFB6NipNk",
  "key26": "58b5cX1YfFtLwqnC3ZCQpvo88uv47BwxDXWf64Mqf2Aegw26ZiHKYGcwzz2k9qSKLgM43FiMRvecQ8QhPUFat6a8",
  "key27": "5D4gRpP62mdsiKtEvr4hTSXhgQPPvRwFM8nCkRbTkgiUMjZsarcLbFtmuKyKjUqoPzT6e6Pbz37kjf3qHy6fx4tq",
  "key28": "pds2xiLqDmcWcrmyZjD6c3HWFVLBWU34Fr3sHUUFiS65Rm9KS3DRB8udHEiJvP7ZC7iJA5RnAXGLb2xMe3Kb2xm",
  "key29": "3c2j7JAxPrh61zxjxxfszaf327wUfFKjUDjfY91pxgEMEffSDfSFuiYA76VD4JUnVaMWF8Vfkodu71gVjW3ZuiDd",
  "key30": "5GZ9AofnbQFdeUtboigyonZkRXgt26War1TfXvf67xtWhCwgF1m4ijMSbVGMnH4WdekJnSL2jTqkjZfArbuzjE5B",
  "key31": "5TQ9JCDftwgBYUj8PjE6Qb8nA8vQ9XfQ6nNMA2ndTJgz79tCgsg2fHgfLHSoV21J7qrcXGSmWHmFBHksfu7FYfn2",
  "key32": "2nh7TrVnEeCCS3Hu7aZRcxJzJvuokSuvj6UT8tBpp2dgxZadSisxdAEgYFof6QX1rAp1nQRtd2ESDvgU6TKd5Npt",
  "key33": "4QqYT5BbPo1yorjnFG2hjTPNCMQLN3DpVvpiVf6xXzEbGWTqPSmePh1JkbTBAC9eKMZf5gQQncxM4jxc7pRmZyBn",
  "key34": "2yes4kGCWvLALHqycp3G9fdoumrnbSFpyK6KHMpgyikRhRS8MbgEVeANKETrhEeXYDuDosWgsyuJSU3SxiktzBzs",
  "key35": "2c2yZfEeUfyeDoATuF43Y1P9ur5T6kYVLQESHvk5TiUAZhpV52J9f2g2S4ZFPjUm5hwKXjwn14BMsnHbkvxLqc9r",
  "key36": "56FgJvGputncPocCfUynwZtHvGDHMZdJk5rQvhsLPWHAg535yRhJ1a6hAh5cc123btQxsjEdEkzPcYcPQUDYK44U",
  "key37": "2ZRABEWEu46DwadhRXgcM4yT24kddVohiEeXPQ2vSxyHAH2JUJRq2Hj9aZYBKDiqywjGCFJ5pWSK7xhaNRAj9Bvv",
  "key38": "2vtEcpyfAuDsKH3XPP7fgxpmt3HQajjfJPmeD92sdaZvLqhhvdrTfJJw28Lrr9DADJb3JRANLj8Gs4n7UgSfVJdV",
  "key39": "5veCQkiMiV2jMtcvGhxpRXbMzug5Aa6XZ2jonFo8wQ1Rtuo8XXSqvXvvgtTqbma8sDDHVonJmjFPiVJrzSkhTQ5F",
  "key40": "jg1dHN4PvbXYTsNJxUiejA4mDxGxbf9XxaNHXgiKG68pqEPb9USjAk4CKSAdnBFW2QJ7hNKQiUmDHDdWfgwoE5M",
  "key41": "aPywQcMnofxo5TtFKpKu6GhJJDVV8mub2Y4pK9S1CaR4fhT5XPjYcbdgzMxJmtB9rq7b8FjZUmGUcvy7PtfwMNd",
  "key42": "3CDuFHBtWzFA5fWi4j7PhScBDerNDHHtfZdZhdhbS9PsZ7gCDUaW1dxNDFN8avBVrH21y1o7Ez3D4kxwELJRxxs1",
  "key43": "5bDwmAmJq64228z1kYk6hDxsf5YP64qNR8eezufmRJV3D9FpZPuBXWMBz8WnehbhvpAJ9aFrfhQbWPYUz9EUWkiM",
  "key44": "2Vjdkt2TmyLizXSqYtXB162S92TxK62j3NkK4gtqfCJRLpbRfa5KNqePt35XzYMw63MY8JzR9Zrvgj39MfMfdJDL"
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
