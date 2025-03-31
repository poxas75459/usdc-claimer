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
    "3EVbF8W83byotKFPtM246xHSWdHFRcSmSVRGUEtPYoiZmaKTzQBdsy3bkXJENP5JWWEbW4MeuH7u84UuyyV4h7Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QPSQ5ALnfJnHQ2tbJm1JUjzWz5v6GhGAjZKNAQgh8nbVj1t4UnRKqnm56kHDJYGd1XTgwRJfAosCV6EbAWuSTTM",
  "key1": "5cEUWhncAvzLUzABK4m4ComYuofrdMHadnygF1PTdcyNwwasu5Z4CwQ1AWKKrow2XWZ8RgogkF2v55N7zCCpDLFr",
  "key2": "5bKcCA1kdqHCM4hnFpfQo4vqCmuk3G4dB49dWp4quqBfXK11TwKp17Vo8ETAdAqZEMjrvRYnPJEHbA6mgrrEYmY1",
  "key3": "269b4y5ZkUEMe4ypYjtCRx26nyAfFsuBVosnjs5yptDGH7im3iTSowMu2C4Uy2RBPJdKwwf6x5KUDB554Tcc8ETP",
  "key4": "4FYYRsQs9QR5HH5rVPjMUxuzbSySkWkjmGD5WRRRBPifzPXdRWsVqN2QnN3bJtNvHKNPAEytvAhZa4QYdDSmtyuy",
  "key5": "54esWQMsjrFj2X8UH5bKZtkGudvrmyTXubcun9LUn6mywcazUKpwhBpruf1gRbVh7xUpgfK4VkwdWhCiRoA9QWmh",
  "key6": "5ThBYvd3obsqSstjso5C28Z24AM7abzXhQjEQTVrckenAx1ndjZAUtKtgP5vk8R2SpWH2RJtKWTvv29rbqoa7e6J",
  "key7": "218m9ioi6tJDRs7QCYLRZdzfreLfKqKmskoZYrfnHgnovAueHqdxpDaSDupjGSrPF8hVA4j6cnjD3JweMbdLiknJ",
  "key8": "fNtMUbAdpL5sFHS8DLR9A4KZrgZwamyTG6yEBxqWDMG53JYDeNxY1FuW9X32MVVaqmmBU4kR7nSsKAtWQjnZSoh",
  "key9": "2bDxYmkzfHM9CpWsQFFSjzdWqKVtvQjuLGtGDfCbSCpW4x3gt1LAojGKfqimEdu7uj7pFbrzbX9VMU9vXVG8M6zq",
  "key10": "2YN4hdMusGDCBtScdVBn6do9BbGAF2ifLRb9dFRAUfvLtnCM6zMkJahe7tdSgqujJnAkzr2RcwitztAVTdv3NpHu",
  "key11": "XTLEn8EFW69ERLbCK28HaSg1P4S3a7KymqAigyhd1gzLbcHrXZ7aUsRLJfJSG8mgRe4boeSG3esAR8Ndt5kCgPe",
  "key12": "4Bz5GgHxKds9V9cpjGAGZ2qK7AAb9NZWj79EEza7SsqE1LSWdSnRWcTJP3mcYPg5rCqhwrLfj6ECcmFD4WtrUX8K",
  "key13": "5t8Ehq5A8uV1BDWzSGpfpaGM4ZvkjX3i5qZnKjeNAzcQUt7YmbKLqhdPgMHJRrKS8L6y4GLUwVwcLoZfuZatEQSd",
  "key14": "4Gu5fL349zisjWpUsFWcbXkAuisKFStYgBbzrMW7VLmhygii5FEN8tRFuCXyM7393HNMAnL2DbNuBsNHXXmv4EX7",
  "key15": "2qJWUkRwiUJvsoqqfGWT9jxF6C5MCqk1cy3wcTRoemYaEprXSNzzYVpqjVpPMuwda88Gcpwo5BMsoSXBCwaNCMQW",
  "key16": "4rFfSGhbgg9DtYSXWorvwdeT839erpHXEyzDM7AFN7LGmAk9sKkn5LkKjGuj8YvAGQ7ndNWXhznjkhmoRPJeTdjW",
  "key17": "4seFkTWXfqLCFjuW9sGycAbYYVAKun4F1jK9gryuunoaXhT4oDc2xx96CvuuRZm4LVsciRfEKuYkhj96psdH6fyi",
  "key18": "dVi2MgZHa4o2R3kebSjSTkUqCvhhWgLd67mLg5aJzJrvqSxCnXERdDbXRqnXqaLaxHpi3nCeBUZHnM9Y8ER34rE",
  "key19": "pUA8NPAek83K5x5SyWEuMmpSRTMYgXgMb9ZQrH3cWEd4ZLoWLHU12VfnWRXyMn9ZSRQNxkF6kVEL2qJYHKoSMiH",
  "key20": "qCgrfqP6gX8B3DCzN4MEQ48yyGe4dG2n5gM6T2Ew5uMoyuq8a89mXxYxdm1xfa5mMUCVycPFj7eooaYCgsPX7KP",
  "key21": "2gYxFdthR4FrnmUpzPemqHK36nYRyF6cQFtPXUtgFPiReRiiCqkNFr7KxHmS3URH91qo1wosEATcjPX13BVPAzxv",
  "key22": "2Gu39hNrGCiAG9tYnKnGLk3H9VyTH7fHJ8HkooGe8rBynqnLUJQarCLPsmbpzn3un9vVUannsS46MBc7ZKc77HCc",
  "key23": "5cR4osWmx4NZvqrYXLyxnJuudzFWEnCdc3qPn4vGLCs6Vbrk4AdqxBjBcyDVqECY8vYm2rTCG8yCXze1Rqp1aKKW",
  "key24": "4tPW7f1ZRNKipDmmj6xLRgxYWKXsyHEnwRzCKS7ypAyDt9ixb3jx9MsY15iwHHFLQW5x3Qs1wqk9eue6mJi1iByT",
  "key25": "XpC39mK7PtvqJnSswUSQJg4Q5KB4SNw9XGLj8V1rQgcnQrPfbGi48ZQ5BUV6cCJ7QrM5eo3WhbSyYYVXjUCv8bc",
  "key26": "5T4N42Nq4JQe8ewomVgV1AZGgwZZDGtjWrrrdkXDCqBU21RQBLPwoeZqkfBh7GBUcZxL4axqFczBHfodStREyYtg",
  "key27": "4YQwkqAcCv4vNtqRcGXMVEm3xoAzosqmTdDv5hkbv7kE7ETuHiGfrofwcWPLRkKLQ3aExwDEkohC2Nd1eThDHRUE",
  "key28": "5VwwdaHdM84wYH6T2JoJAoubHrSPUCpy7TZtxiisXkJhpqj1eNKNhSDKe4xUGvd8pcn7C77CikTeENzLdkXAarJq",
  "key29": "4s2UTChVndYvYXKq9WdBmeHFpXevpS5GA3Cw2w2X6pMNHA6LBzZ7mrm4qqhx4dL9X8GDQW3RrceMX1yMFs6eLZnD"
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
