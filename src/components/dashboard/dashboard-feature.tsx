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
    "45fhgM6SpGgaJdHW3q4gGXLZiypv1xpMZvZhqKDNmMqgfCwqHnAGX8nzZ9Abw2WiC2wyUMaXQpGm1fpGjBGavpL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVXzPNL5XzkcqGe4GkonddR2oSFqMDFXyEz757PLf3mPpdtMd1Jw5WpMDUaAS9miJdnBMeRjfXa9qzPpx73RoTE",
  "key1": "Cm6Yqcg6DKi6Bg82p41WZu3sfXW3upd1ZUASYmRS7DPgASRDGcQAMDedd57KuoFMpEjSK18p1FaoU2MfYgW7X3F",
  "key2": "2Z6aMc68TUwGtDyZc4qycCr9VgDqKHmGJxRCBgYFbzh5LDSJQXDKYJ4SsaEyFMyeyTKDVAXfqKQhH6vtLuiYQqwv",
  "key3": "3NKe8XxTzWo1Jv1akmjbky2NNPSSJDXvxBSPz4WvAbMmVvk2K7VVbnAiWovit9j9reXhfF6rr2f6A1ggPrkS7V5h",
  "key4": "5DKV6fbU1kVrjLdYrTyGXWqy5xDhrPSc96PiDNHrZCqn9oHVG9YhPGnCNymWUt2dZ45BG1XG2ZNEarNbvgSPW2WF",
  "key5": "KPZ4phVEcDwEau9TdgQi3utJvaJmfnCa4DswqPdAfuZb6hF6NfWeKjt9sCg2VZZF8seoZEdYkJfCTXNUqNKSS8j",
  "key6": "3FETbbCZA8MRX8U5KRci5YrgMCKt3Yw1XSbkeA1QfpNWpon7UU4WEZpMvrMHBHM1ShhCiZAipfEoaDCUY18cYskZ",
  "key7": "4tWu2wkqBnFvHhxHxosC5TpauQsPsciFZ3SNaFtZ9NqKRdiyWXXvqhXAxXrzrov8GbLuHn7WAge4UyaGoSdADuVv",
  "key8": "4UVqmbgAVEKTTybF9UVHLbXcXREdHWQPxRu9nFCRhY588oBR3GT1puKZKaBnsriYY9THHgFZYeDdRwjpnbwaPCCx",
  "key9": "3Dv6c8kYjh2hYQB6Tt17bGCdEYy8321sKRdYhsTwg1zWJcTv5dJYrCBvFKn5TfDcij1XsenL3fEqdbpdsLnfCigV",
  "key10": "3CVKgf5vBUcFdhZLa2BzFLsW6bBJsacu9ioZWF5rmQyFRKhB9fg1DxCQ644Pq6ysDHU6ZqXUYpMUgYddGXzwfXqP",
  "key11": "49wCw9conXMVAhG4ZDXezdvbLzFihdm5BvbzN8z1dkbkeF1FRppW3iaTNMrfVrKMfF4LfLtwN6gymGkCe39opKRn",
  "key12": "56CF8HGKjVE89SgUbBNWLeeNkxsVCZyWEjb82Aqrb5g5LYyQYQiGnPScQM2167hxFrFxg3EZFcUe8ySH1wUx1Tso",
  "key13": "4VPX7q4scMXf1K4JS8CxmX5UaQ9VGcBpwuA9UG1BsZgQxuqZ1bWLaUjC5RJji33B3eJo8or6dCqMWvVSTh8HXz3L",
  "key14": "5hYbmD6S55k2fagqcMksfeCEH2ZUrBQEn1Hvq85mFyThmSCVUijdxcg74j3uJjBN6ToGCxRpovKwSsx1nvf1UF7S",
  "key15": "4tnu3LbYDCh7LFYk8p7cQSgiDAVEVRXs3Ay9s6KtrvBoN5sYsXNCZwbQb1vUWqju5QG3oQLXSZxANiWrKDV7Rvfz",
  "key16": "2d15udmCtndWfEJ8PnLmAZdSR8vwgsrwLPwBhAg1t1dE5JCZrqstkBa9cG3gMCgJxK8mUU8XjjDVoaSCBECgnYoW",
  "key17": "36u3qvYbT3KTNQ9X2HvHTWMbWKiJYg2Tf7CPaL9zYtWFK1dL5KEQbAzCcnyV5WtuLg6s6Qm8aapUTdW7JbojJQn1",
  "key18": "2WeV13nuScun47NBVJ3t9PZjQRWWWxaV9N4Mxy4YvU3SVkNPPKLeY5Vajg7a3z84zKTdUmdFXbua9A9483FpBVWU",
  "key19": "ESYdcVbaMgxBx7cC3EGrPEiosmBZA6hiNRmaCiLqaGR1aKPst2e3kZ9gx7ci3xoCWMN2EeUrVXPTaW5ZhSQYH4H",
  "key20": "2DzHHT9cvj7fpzkcygptyHTQNEbNERVTCfmhnXi6bQSou55KJyZrmbd1765AUvd7bKJuTyrJEnuAjbR2cqwK8fds",
  "key21": "45m6SuvVt2nTCCbTPUr9ULULURkDRsn3UCAiEwdVCFW7S3rb9THqzrSCa9bUiV3MWeoURNYfLyu5ier1QcZCy6oh",
  "key22": "5yhMDPCCNwMmqDAdV3zP8Ssjkjnx2j7yipLMwJuqDM4GQUccRZ2R1NgzNnigQLpkiuJZNtZ3818sRRo9AFsj9UE7",
  "key23": "2rEChyR5TxKCKvpafZdbfyEE8uuGYfGrfXcHrxRHrGrYUAutKpxzYfWP2rkopZxpo9rq3DxdNo8KXqiSGFcCPfU7",
  "key24": "cMQUbB8NVGcBoXR78sn3RnT2eBtJdbwQ9XMHxB5SSK1xec1VC1nkS844bNQsgnrPFdcGRaEkRNuqdJRM76f226k",
  "key25": "53biAKXULdrf8WU2CtqkScvDzWvYNjwkHnRmWxQXcxXMMkX3YNmpQM59cHCAUGEBCHzuqeQmHDe39ijKa32VtLTn",
  "key26": "5nQs1pwKbBZhuxXBLXPZ1JaZwScXGyg2EDyWXyMuCKbis2gV9cKEwuvXrV4RdtbZQNKyQ6u6K8Cu2GepBiPHD8ci",
  "key27": "pns5YssXsM2YqyFcw58p1rkiDsUAYyLXguKwF3LHjqCcMUvsGBU8rAn5f4BVG2uxeDgJzxqqC5mFkb8s3qyfh8Y",
  "key28": "ufcwuQbeNeVKHpxx5mqDJeuXXM4jN6edkUS7pVGfDj9rDGBD36D7D8cutJQhcDmP3jWnEfbmnzCRgQFZqPL5iDq",
  "key29": "JVT8GEdairQeNLK3tVACSeoqgWMh4xjLcqGS8XmMetZum1zxsuBmWT8B1R4b2pu42R9Fmsf3g7Ccjk3Ufdz11un",
  "key30": "3hJJrT1Muf35b5nF4pcTZ5SLgHft3xK85ZdSAeVaLnVDr1PM59ArYngyrPVGsF3pahFE4J84YmKPkqTC8hE8ekK3",
  "key31": "5CfNxgCeW1yer2oPSNrEZwX28fnv583QYYPSJCdcT4Tntu9pUR5f5YM867ApVfTodqPwosRVpaugu73dEHPP9uDH",
  "key32": "f93stw8wfc4A9og8hL87YVEWAAADN1rpbFoCEgyeHZiUXMHjiH3stkcAA1NaLofR6PgEkyLhR98zAWDuDeLsi3z",
  "key33": "3Z1rbS5s8LK6HNNxTcH9dXXeskcK3pAYSKByh1dC6DY6fScZDws5oFUvMwYE9E7fUyVPyFKF4mLovVhRSQyMFViv",
  "key34": "42f6pfMdW1JsS4YyYDyKrzDDfV6Mk1pCzUbWSfiiAgCGkMwoEXyy2ay8SEBj3iRwT91jAe4Pni8z1ofd1sAKG8FA",
  "key35": "2hUYWG4LxQosQ5aoR87JpNhvU9XqHuq5vGVYRWECPETQWDHfSqPhKgwbNCv9uyh8uwTx9thDiMMzywfnL4ZCK1JT",
  "key36": "3TjETuo2Pvv8DaQE6iwW7FcEDfFGAAi1Tqyx5UHShgMveLrNhYVWpo18NweiFKU85N2xNDvkN3SQmPJtSt25Jawk",
  "key37": "5MmQoox2DwHK8d9jDKfqWYsNEFWufJ7PED1qPGdJUqigrZdxLRuzpVW3yCrnhA7LjR8Ufj58WtvTGCRMbQWrArBT",
  "key38": "3LiirZ9H25GzaSWdDa2Go8W5dJcfRcyVwYftoBvoP6c49PRkVaqRF2syNb4sUUncKUsqPD6eRQgGyx6PMpgbSX6D",
  "key39": "mHHKKBvMUYxRLERW4EPu1LTQnockSG2ENLtYACNHpPMUdAWWRBt2TzJxhdqSCJipDqcYRiKLuzSMG9fJuTddC2D",
  "key40": "5f2iwEh4UMDWuhKktiEHAVFX7jMpmFJH6cPsFCSzEqjh9ewbwVJKmCXQEo8mYGN7uJGjsoyseCpJohP1vnWDLRJ5",
  "key41": "5iZ5fnU62SivjsZqRtEFd8udXLpWs8ASpd2QLhhn22ComzQbwo6rdpRmAxwYY7hoTpgwREFFd9a4eYzqTKE68ziu",
  "key42": "4RUiCrymg4FvPAM67qhnkAuYDtYkZXBMC7V87wgSup17zmJtuZU5qPCrvfpHa43KPDmGg8H9G3KQ92C5HP9PpL6b",
  "key43": "2nBXkYAtGk2tnD9vgLKWqr3HxFreac5fRXxTdwcBuXq1Q3fxHdaHVRTxo2RjJxCcMr6214MMNqVDQcQLtPubjkpJ",
  "key44": "3JkiTsAymxKc24fEGZQCgmmfJRT4nDUKthoZqDFwgJm3uprx9dnYG6vCvKUNFWqV4HUuuCpouZ4Eu96UNWnc9Rr8",
  "key45": "5YUxAcxuiFSurUheBuShRzWoZqqSrui2jsVgezUkAeXAFM3NdWFfeV1SoLAJjZ5TYsYTDpXqFGc5kATQiMCyy2Jd",
  "key46": "2Bk7CxSEKwmbZnmS1K7QBmbByvGkQgtSLord1y6LoGHb4yYqYeAiPsWSyZGzSjTWATEFoxMMqWKSzUH33TQj9Saz"
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
