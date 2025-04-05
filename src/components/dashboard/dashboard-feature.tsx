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
    "2Z62kaTQkmW7K2odGJ8dWBtEuC5bErZ3zoTt7MWwLAygFBbdb7MBTgBPckDQ1j9DEwwe3sBZWGMSVrfRukapmLmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HwiXuBoQyxkgam6U6c6eLHyDMAV4YpgEFFyi6Dg8XwTMmBPH1op2X7BkPquCbEBDkUBhZAECdhyo6RoK5xaJJ2W",
  "key1": "4vMp2DKQVFdkcWS2ZsJtgvhe5wS3H1j2GTstHqiz6ACvEZ3WG9cBTZCTuxHUZXUPqQpEAFTgnqgxXqqVTD9ZoPVd",
  "key2": "mDrYPio7q5z2oijs9h8UzG1cGueCLfBNPMX8PioBiob91DEUw6QcHK5UvCUCJ6Sd4oKmEMQMCxrC9m7rPY6eo8a",
  "key3": "424H5MEgtTyC8shHXZ9vJBLiRBMZkUoztwh2SFnMCC2TvULNobtTpHVQtiTf1B5woKD6G5yK8Qzyy1EbuYuFj4Uy",
  "key4": "3sSLaNUNehhVLUKJKAyG33E11r3Q5TooQdLMJXMh2hZTVSrcLV95cx9AB9RJ5yh8LZcRbibcymG2kEqqKutWkxCg",
  "key5": "4B8vJuDnbnYG5A6UkFSPDrtDiRJYmFBEGLzZPDYsCpxVSQsyfxsFFwyCGrQbbGVxUG5jmrQdQgHQWQLdPpta5sFT",
  "key6": "2RE1PFyamVQAzqgXNeSSayXExsrtaMZ5hW33WDqJcSV4sDyjb2DVVvKfemhZqKwTUppBdwSCHQpLGpdaSCcBfHDL",
  "key7": "3FxZjB1tu3Z9w7zJYXBQgYUhQe4g6yYiVXE2nLzhT4yNq3mvbPcaWpiJA6m6DqPVZe8mRpsX6iRoakU1JqpGndZG",
  "key8": "4PpdWhnVmaEhssd4MMT3wjU3mXUs7gPgXmLH6JGE54QpD1cp3TgaYbWkQocHbWD8RYVjS12emCdCqcMcKcd7EiRR",
  "key9": "4W6HjZcGYmhoHTpZLQjzCpV2CpVHS2XbPZM6VP1WmNXMqqdAKBY7ia4ytiG7RqzLPM1HTtWET4Uzr42UYjc6z9He",
  "key10": "3MTozfRTLsfdiZX3T3X388fWNjT1vwCLmqmepswocuaSxhWfkmaHzjCUwv9NT5ebgCcnjkX2V9qgnsyf4LJQtRdj",
  "key11": "4tGwHHNaTKoTU9PeSFFvGdUZLf7Jg32yVFCT9eSGH61zWbG4z4SueNGcbhco35jWen7EHYpuRjJ4LoGrn8XnW4hx",
  "key12": "2wDZyvfcCDpdFsZixUtzNNhBjwCmFsnyWziHA1MeoJkCo9DAhNNGpzWSgw6PTrdx5vNtg4U1quUQzcgsVQ2MfxV8",
  "key13": "5ycnvphKeag9TDSQupXsCxqBmiKStTMydgdndDCw1hFmg9LQhxVqBpSWrifHyYrzRCzjNFQva7MsWcJrnJZxWGJk",
  "key14": "2LaLX8Up1Arytb54BykPhWJ76xnB3tRCW45BnzWqimHkHQtLaaWb9SZu1BynZZXdxZBX4LQpgsFYhSbeQ9qCaETz",
  "key15": "oyCcD7aUDdnGc5gzMSBcn6h69osDpJYiNbPqgj6hcDoPdacxHfusAL5nu9rYCCiqnASGUN8TL3BM7PJGNseMTCW",
  "key16": "4NPGBBFBYmoi5GFHGzhWRfL3eUVqPDhNoMUn14NwUaGcfoos3WFdRKhebXC4tHNUd4AbVYyBGqoUvrAFAz7HUr1o",
  "key17": "3Sj7zdeyKEvqFoYsGDkNeh7tNurPjNpMqkkF99iQPDudsdaBFXiZDLaokyGzmZJZt9AkM9EubtJ5yYFmkxt8pdDX",
  "key18": "5ofpP6LA6kMxoQ6JYWGV5bjVxrnbyNGLn3mpyEP31YqrQff5vRogM4ez5QVNDj8CEU1xtvHYYzsNnaZyAyiBD6Nu",
  "key19": "EBkxQBwfnLUZhwZ9fZWg5YNqzyfaxKT6FsCbqBktYTaEE8uaBerXJd4ntGJ8tDUwqBhXxSBz52jz2bcxNPhauuX",
  "key20": "4XwXc5vf1vX6hP5xKFnXGUkqCgsHpzQyR4t5rKqmG3pPfT1Fy6ugpZoSq3RNiX8CBpQPJy4FBSASBJnspPjNMpLt",
  "key21": "2ZFXWrurp1Ee5k5EDyjpHHNGSXKbvzfYZSBBgc5361NXeq2H9hH4YTrQg6aL5DCFyWTs6hJfYNuxi3179AWRUWSk",
  "key22": "5qSkdor56LctqV9zcUAW823UF4eKE87tYFGtxTTsM8iFk5rcJwkmRQwWFewBJeczewyXPz2wfhMmkUkRQFLQ8gnx",
  "key23": "3HV8ooFW326AE6Mn9gGpfk2bHBHmcv1ZDktxFG1gS7HG5SHcXyjvm7pYZXkrzTuixCrosYeqnEv2pYiescff7nnP",
  "key24": "3o9UmpR3fYQdEc2vqw9ZCgBWs9nPiSz7iGw1uqa3d9zBo2HSx9b3tshfu1QZ6a32qrgWrVcdPAreuTTjn7LjnaPu",
  "key25": "24p7H645E9tBa3E1Ftaothr34RbYwtG51twEaoCWie9YqZKYQDJzd2RwMVjppG37XhmwH67WgBvGURjaeBbNfsUf",
  "key26": "2qQmKxPfyTT7xW3NRVaPWNqBUGJ6hEzvHCfoWPXMg5JnadFTy23SdinJ3n14nu1QWbLNr2U9mfceZFXhasdczSkX",
  "key27": "5gtQa5KB5bb8V355d91nXa5o9HAxzAjEcMpV5cSwCpkiUeLZo8zczKpRrVFyVpFimbFrLRxKmZKcwibsHD2fgQny",
  "key28": "X1JkvjamiRJNi9iJRxvpi8YhjMiyrXJBqrekdmaP9NhGSSkCF7Rzy1zCp2kjUWSNDHT2ewau1fLVyvrMt581BBE",
  "key29": "3HokaLdtpmi3a7fpGKTW1cHWf99jsUrf3uGEXVZtfjs7EPkjstukt2F2YM8TT1BDam9LEjU4aTX9CjyBPafGHUZi",
  "key30": "3f3rJLoSFiLMJPn6feAmRXKdPB1JQPTzRtzYcux6bqD3vM2uQfQ7Bwsp1uXRakbJqdCjHPppQ7skNQLD6UzqQ6He",
  "key31": "mLPTodTxHC4g8dCu1A2X9UEhXJBuPTmLpkdKXfPveSc4AGDWJ1iuKyd4HLAm3vL7S3QHKzhWjkfJPFohTdV9Et8",
  "key32": "2tnj3Fpe7aMGLtEp99ATP79Q2g4otxnm9nmyu4JYjQRXBaUEFLj1NzDjLgYrTm8kFHaBAaMzZKrCkdYTuFaijWXf",
  "key33": "MaD12ujAtChbi9T358ZdvVJVcAXgP1pfrtr4hRyL2f1Z5uXFpya1XJCg5j5HxUBSz7PqbpHMPbSs9YGWDE15Quv",
  "key34": "3LHdCmTfbCTrQVvhFtoPyCpM6Ccg1WwPqPd6FW4U9YUhNkf8o3xrfHm8ttya4cm8RyyuRjSfFf3V3janHs3qrjJQ",
  "key35": "2yTN3MC55WHLSHnwkg6ZaYoojtz2osGuxsxdExWE5SpTdnZ1nShhRJocgjFukLbPNUs6yE3BfuGeiJA5wPRWH7db",
  "key36": "4e8LbcDkrgt18oGbbTiecKvGzRQWRNHWEsgVBE7rbZmLwQZfBv4f5Cp5t7je1xeie6UkFUXoUnG6uVgxMKCNJwSQ",
  "key37": "HmWzbrSZ4CNqywvGmmms1dxvLckA7N3YEnMBsy4tBTY55KkrRJ2uBJuDemopBvX7h36qCQU5zQbppVtaAtVoXPa",
  "key38": "67knCh4S7VKwJBpYCdK9s3sc5A2isE14FB7bS6rkbCv6E9sjG7PJByUhCmQVHyZtLaEmrAp5tChW1ZTAecyeZ8LH",
  "key39": "23WYVF3iapE47ThevMHYCP76z79MkfTZsADM9jvoyc7zZ37KLb3W2W3hVcJxreWpHDHUu3QGbobUknLEkiCpcC87",
  "key40": "gvQvPCfdDvZJ7fLxT1mZzupJSUJPuZrpeb5jYxVgv6MMifyT16FHRVBiMpfD9DHfBDazYvzgN513XR4xv6j6RjN",
  "key41": "4fGHbK1qRfAFrTZTzCuBThW2QYQ4jzRzzkpLRnA2AC351YNkMaJQWJqjWU2E4YKQQ8GrDnkTUHxNUSZ25Q11waQF",
  "key42": "22kL3VTnLbzoLS3tjcnkpgNduci4qN5xWzZRSbZnjcDAgsJedMffTnNNX7mdGL8LqRXp4ahuvLjKamzvFyEPafTj",
  "key43": "vMfpYN3owbadeve4ToZ89dMTt23MAXwa6X8q9D11nwWR4zSysL44V4vYqRt7e4YXeD5MUMExrNBmT34cTNvvhfr",
  "key44": "4TvPyvaUhBsPisz67NSMCVYDFEsnQsiCPLaq6Uxvf39FN6Rk5Vo8wE8Z6WxybZ8QULwNEgor4RYcDNANrG5oYAUG",
  "key45": "znkD9mMkYb6WZLhXehSAuqyW5aM8apB4VQs1MwsBRKiBjFPTdf7zQQjHoAJZr4u8o1SLHAv62AuZSWr89kGzCYZ",
  "key46": "nDH3Jmrh3cGyj3wbpRasuV5UzGESQFSQDAJLUrYXCALTj9ePYENseLsiruycRdjrqhHLGdi6wLgyCJC2ruFtsEE",
  "key47": "466S9jz64GyyjfkwgNkgGfwLqpMu6ZeuKiH6XvvdFSYeTvc42MTdT1jcPeJFYgiHqvpNBJSzM5BiSud2EkbkVr7m"
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
