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
    "55HKBBd1qidQHGbN8jK4FFr34nf87dyL1Ba3RdPxggJ2HXDa59eDfEta6PHYm9fG1VQU36U2GTZdxgN3vmFTXTzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CN3z7ArWq9bJK3w4RhznpvEorGTA9BfrvU6kcvASZMUihedaphtPADrGEdyueZrofSeoRv15C1S64SUT6Qi5LDw",
  "key1": "4FyrX1Q5WLFpfzPm4vmXWsFjk2nsFCXXJspEq5N82MahwRrwJ5gC2cm1QCHrKt1tY6AMGUvhtH9DNUUgVoePDZUr",
  "key2": "3AE5MfjwKioSDnsexEbMbXgEDUdhrLqEUcaQ8KCZYeBBCWr31eqLNKhBAJj5B721UTwJzMQzQTbDi1jdjgMRK9jK",
  "key3": "47hEJ5SZ3KrTfMEp5HMdmPHTgqAP3HJsAFCxZpvcGnVsyFQ27CbncPCQbdDC9M5XvA9XQrv86goPtadtzuDbok1F",
  "key4": "yNKRToS37z8n9mG1RvejGjhkgUUio58CXpUHJ2jEBaaMFwwdKEwRu4KPAfooS7VSWJ3x2nfgVB3cnEq5tQjioU5",
  "key5": "5JGFAm9DMAuPLzuiAXLhszjJ4gb5HRT5QkWFgyMDx9NLA7gK62KgLYmf5VW5eknUcP5XcDCsfLXRPkQ2nmiPy7YS",
  "key6": "5QDVyT9rMZQxZBtMrFnLvFZ1kMQWAWVFBYwoLTBcdtqRkHCxoT16GwkiGEsgJvp1wJnkK32NVwHCgLfzZDXDFYAw",
  "key7": "53Xi4CeoHQ573KbDsY3asHxXewEbHHy6yJgRH96zFVD3XADbDD9VMdLXYNd2TwAMUgrnGwPyHZWzWZYVRJQgXaXf",
  "key8": "4qKLCq4cumyaVaZDRGrF6AHq5tfpT97BnkUPtPzqkipTs3k7V2tR1PsfkVGQLeervBA4us1VGBNThyrjUxY6ju5w",
  "key9": "KAPmQcDT6By8sYju4jbbUcPcH68wStMPsGyFF3sViTk6CfB9kaDxSCMGFsaxf1FGTC5LZHUbPFW2Dq7tcfmFgNZ",
  "key10": "PYwUyxyjNGUFD7CcertVsxUxtw6tGZhrUK6xxx9oJ6813ZTEsFTGGkQV7c9bwNqohwLqeUXMmHsinqE7WFsm4QW",
  "key11": "ajLYPbZ1Ndu18u4qPYsLtxnYAe3w77rxUCpamksRoBrb984jhpJDanxf6ZzPpRLje6HiuphA3hGapVKafxw1mTw",
  "key12": "43KvzDt5K86QivmAMQaDMtXG3PqUPb4ievbvURnWwr65YJ1JKRztg7Hy2YoNN5mMyTGNjPwgArNnXqXmMy8K3CAy",
  "key13": "3SShAXSucELq44JoEBi4RPuphrd8mgdm2a8jdyXkkbQEpU4zJHTnLPcVcrvsuDsLLHg8rimwAXZFqkKbP2RN3Vha",
  "key14": "53FCoeAEJbriV9kLGTwzkfHdutQAY5HqnqED1vfUHqk11wqLVnXSWLAhso7ma97C2bdkAcRfNveUYARUx8bNbMRE",
  "key15": "gHPNZTPCTjpe1fbkS9Uz93kJVfQoifBH7D92UuWkjXtWuJWSswz2N87tKvUXqofDQ6vLJsvshfLahYsheBBR3w1",
  "key16": "3ptg52HA1tEgwvLzRJnGiTB46VyjwR6n5YpX369EKPpykEgveDY8payEU1k1w8sC1dvhs7BGcXCYZAqctmcPVJjo",
  "key17": "3vfbfqrDBSSZzi4fFpJvnKWX82Y6aQeLeUEQvGDrThYfLTeQwANbHCDtvQf5eNUpiZevw6cfHy4zYR5YVBNMqjNS",
  "key18": "4ybnQ5hxPwj1vaAcFdn8wyoY93WjRRE2Yizy8H48NWtXXZsubwsUCPfcj6TvVWpv918oHBkM4dVQQsH7SYXsRZFb",
  "key19": "4S2crsPtaF31SGNahymVszrgypfGWQgBP2BmxtU8r3DQaeonaUTzxjCRZk8iRRp5fMjBeQzaG4kETLGX53gXeSw5",
  "key20": "2EDjFm34FsfbrXSbZSq4nNeqs5BKRsUaheSqAFGEkyxqLDasTn5fuEb2av5rXQvedWhszLgAdh4YDR2dn4kTKfdB",
  "key21": "M9HCCG6o5F4VwjPYrnT55C5Jdwa6fKMUf2ACCZyMUmBULgANRQtbKGRWwdodiecdRpK6aimovT1TmnKCMNNo53z",
  "key22": "2zUwGAZdQeq4uoDaAWqeYyawUYPgEWVHbQxRbNTRWTsBwbd3XFWvYpUXcz4GxAvcX8yUgCgshuzkrV1TgkMuPU1W",
  "key23": "5ng5UoiS3UnfZeVLeDorZ5WvwYQ1UcABJigcQEwfJF6qFfaJNYLAFcQA3wEVuGk1dTGkaVQbnMPT8uLp83JaHPYv",
  "key24": "KB23wdppMcgysdptat8NQhzHHeiwr4jEL3UbrjEa8LqP181CFMfyoLBvzuYrfHAxsv1RJvZ3si4QmHN75rYGgmM",
  "key25": "3pFhP68qpJfsWRbi3oRSBsyWUzLbooKqX8NyxtjgKpgPYT19R51rX9U1JbpFvS29jU5NHLeceNNfnS5rkyZGUV9m",
  "key26": "2VNH8V1QpVhRDHzgBcawSonbxG2SSJmbiwzLTwPvtBxRvHb3Y7vAdjKJ8AJTkh8v6tXK35KDvrboKn6ywxvMuiNA",
  "key27": "5DVEV3FoEFxWaxyrS21chcErfVc4ZZTuT8nkTHCnVhp4iqJJ5EDqNKgtQqPurqJKWUmW7QgBdeJoc7wYtJfeqbDk",
  "key28": "2HahcY9JzNxiQyKYUP31tdpPTY7GsYTw5wb5YX3wxK5KYgQRk4WbmYyVy27QLKurg5gXE9d1b9vc7uaHoRKsGJvv",
  "key29": "4e6hoJTsfcC1zinJrbBR9KYzHaqx77Db2jRFNa8xoC5wv8bzL53ey59LCuqkEju2pip6fzWxaiQ3JEEikPjaUFEb",
  "key30": "3nvtaXBiFy9eG6YohXmYnFReWiZrMQwWHuie5wXqqzxXgJjbf9wuwENMfcUvvPk3ZAMjt6ZebF3eKec5dGg9RWZJ",
  "key31": "2Cm9qHBgt7QQtRj61McWDtyJjtQ8oPnsUGtksnhcxmxatQBafYNPzhwkrSkqhbS5npwpvA3ewoWgMmRkPWJL6258",
  "key32": "5PTycvJfwncNbimp81Gb4fSWdKpfLzkknQHTmZRyyfnejRhyQVSeheSgfV51YdomTpiSkbnui352jKQAZrVjzzbf",
  "key33": "63Bs1Bdt6QsQZmrTP3HUBb4BUymsw14wMX4jVNKF2mXjVJQ7KLdmKiskbRLqbdFoxGZS95abqALjNT9RXfjQNrGX",
  "key34": "2pbVGDZvj8b29ELWbeG7t7zecBEMnX3MzgWZnGkypkKhcw4HM5ZG2MRxsHiTCgGJ1wwyToM8UoQAcbfyDyoRChxN",
  "key35": "3t54rDSvp1n52YT4eYzk8WUG96dMnCAmSuS7zymHRzfGQxfPNDXuHz234yZGP485xWdu8fq6u6iP6ULLL1TSqdmV",
  "key36": "2N3y2SmfpLFtRmniJSdYtpmpg31R3dy2fozQsyeUFPYnZFp2Mkxr6D899PGmAMizRBvBgZJ3cNhH6Fge61XqnDS3",
  "key37": "JzNrpbMkWWJ1AYDoCnCvcwWrA9B71LyJ6fA9Avtas7bzXMGucyWAzchrAHC3NWVfWdu38LDG4aBGkLeqHDvrvMF",
  "key38": "3gP4uBNMiz1GyQZ9eTBrr8uAmUcMA6nRndsqXo2vYucSdAXMHTVD7vAstFyPfhwmq5M75EPY9wLQgLGMke8J81Cj",
  "key39": "26Q2mS7KFr16nZNbbZge8UKHpsHpybetv7DmPeSDr8zaPJcJt3NBBEwQeg34nATe7iRj5XT9p98DTrbW3UfXCBNo",
  "key40": "4KmWsuzJ8npTGHoqRYzsCFVA3qR1J4upogRGseohjrU2wqVRdum6hpDvw6S1TTtmSqP76vKamim94QLkz7uSBD84",
  "key41": "eVptJsJHrwUip9YGpsHTGo3NXfxBufCZ2SLW4HJZpcQUcLG4PNFN5SnhdyTWHLdPLqj1aVx4o6seQpbjn64uYxv",
  "key42": "g1wAbCa9KnPsNDoVhmJH9c7j2uLKYenw1c6okKTnn9jxp4UdGTzw6NuZg9QLkfZ3f5UScXUf8LMPcLcuxnah81y",
  "key43": "4EnkPeGBKvAhHxWvcnw9j2fscqkBmVvZSFnQZfrysbJJvaBBEb83TxFwFkrNc5xWGSVxKAM1kRDwzCSz1ABRMV8s",
  "key44": "3xS3yQNMigap7Lkk8kpEkpET2xQas8xUdPDgHEAmZ31xoTP2ii7gFMhRXbGrp7yD1NxxMNAwnm4RAsk4uRFQfRsN",
  "key45": "2LCZMrRKFgCiFLsWAR6ZnHBRdcvvyop7F5Ge14NXRDBGZ1UNufC8YP2YkLFf8VDW9PDr6KSe9n79Una6jWiEdzHw",
  "key46": "3mQU3Qc1BqbqAfNUzJH8TwwebK2NDbhZVVtaBbpwKGuu2aod3kBehgEzpABFRcYvfMaDA9gEETW1iqYqVBLQTPUe"
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
