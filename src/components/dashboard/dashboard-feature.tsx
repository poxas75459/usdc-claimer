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
    "uVimJip3YssjDunfLoUqt2em2z46p9DE7sx7Q3vT5cKm8wKRQd2syfUjsENLZe6WEPvCADBkhVJjJEZPMUHkjHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRuMAMPT2rBHLmXhqDx6n96LbszxoiEMfgLRBhaSdkUQ45Thrsqu3cNaKmjfjH6TT8T83gEdiCDs2hQqB15Ynkx",
  "key1": "4iVfBjLnBSr6tBCb5zaG5xGzPG8NQSTiQzk7nFNJSMe3PyMUb5QH2bKGPdGQd9MNQGVy2N6S3ewpuirbgXWcTNZt",
  "key2": "5t2nhrVFpBTRguxXSXrXMxh5ttZosUQcNErGRybxmBuABGiqYfUsTQtGcyKA7b21L8bzdZzm3LJS6k5UQxndbphT",
  "key3": "SRNBzrNEGiJ3PJ9L14zcsmmE2Hsw4RE2hets8sNrtUHFpv5c1fXZy6EeAj1TT5BDsgMGVzqdcPaevygNExHYrwm",
  "key4": "3yDZKBk3ZtozmeyAWE2nVm8UaLrcbj36D9yGGVd7K5HQ2UqiTdq3ypDEUvgQGA3rFjykcsYNLPqCMQTGHFJZygnn",
  "key5": "5FAoFVDCEKCgxnAPpret6DJuRWQN9T8nLeS9RR795dgzfS1HLQ7SgSeBmMK2U7Jt1WNGbGPQYAKCFQKSbZVyPpzn",
  "key6": "52VufH4JywDvWeya8ZTSwJwTBbQs64AZ9dNJRvuwy4vvgEHCJMzv6wLrTnqXvTcfNmhQjeScX4UsbpwpcFnGUH4b",
  "key7": "LkRbXoaAVoVvNcbKPPZUg4CsF1hTGxsth9D7UnZCtJ7A6zEfPC3XitdFWrx6YUVMBh7GJm9J3UB8CidXND94iNJ",
  "key8": "2R9TazPeonNw8ebv3Fp9Yi2x21BteBYrXR13qgGppeWLSx6CN4dLSN2uQU1TCj845Ay3iC87C6VBT1SA74wVHWHh",
  "key9": "2qxoXouSau5oMYQJAMY78AZzVsT7tzVF6jVJYZSY3uE3Pknd9uqZ8WSwzqVDUJ51jK7CBwmH1tfW6MXdouakwWwj",
  "key10": "2845m9FqAbQ4XSmgHvZTdHaisHqHdUm9KVfPToFKzMHqaYCKCqPCG2ugnDxfRhcLf2QrZJCNSLGjofco91NanxMq",
  "key11": "2wxReZmojiPG3VPDuW6kzVBgVkhtBND7TZfje6X1S5CczFSnhdQyh2oYoVwA8DmQPBHxtaSyCwrmX4texT1RcgAY",
  "key12": "Ccnr5MQerXARQ7Cf5Y7ZjAVQyGstknNPSyw9xitZNBVojyhVWkMcFBmwXDDgA167tK2tsvitK2gE9edZ5mBvQiH",
  "key13": "35azj6EQecL79VCEETQyP8H2XAdsmccusXgpbLEp2VFkKwoCEknJHGY5HWp8DyuepW6hAwAGXBSqaTkPhj35Junt",
  "key14": "4XV7FCRTW1co8ErxBEgy2atg34M9YoCHyo4Q2Z1RXmhss2WLbjUNpwsg7bf8wtoPiYX2HiEHZ4pinn4HoVPzPSC",
  "key15": "28RNPFdxeYmApERF7WaAxjUxb7zbkvgvqQtsp7FPb56nza6rknKoT1DRiaPCYncC8a83zajjax4Kz8eow1yye8CE",
  "key16": "214CmbJQGXttHpfphLv51STnX3BQmpuh7yMUQw8k5xDQ8nVibntXtXb5hs9GC7gyAXTuEpJU28wUSQss1547wd3K",
  "key17": "4Dz8N3QESWdz7epPWu8mzJMqrerdRamnx9t39GLCSuhyZBp8CfvPMKWYkYit8koQ8yELak4BDVncoVFigkvkQcNa",
  "key18": "5UhKQRrwRq6xeHUwE2mFBboqbMvXWBnDmS3Q9qMY35yFYNTRg5ApFRevkXVZsKQ6DwJcjfvF37QjvRn26vRGQsJX",
  "key19": "3SzfvZeXagRxvDGumgEu2FhGfXYwnJmp1aLQHsjRuyfCrCLFGBpAtJzm2xqxSn8xTtwNEkgQ5YNswFSsrDGUmuww",
  "key20": "3MMc1EDan8sbQWqPoBQ7qPTs4L4kyRnQWRRrXwEZCnqLRFSUL9Z2UkoUvje6bnUL18oiNSwD9Tp4M75GqmsTBVc5",
  "key21": "2TQwiAWygsBySH4UVZjpBMX4YRSjCtLXCP6hsu37yUA1xZY3hnhbhHtBkb66uCzGJ1qTaLcKehV2J9H3SDy2R9up",
  "key22": "5HoREq7HSH88MPKY4hCt9kWkTn3C5qawR4E4gYJjXj893pjTSF15kJWjEmgzvrDXsvBZPrJumWehastEtq5VaZPB",
  "key23": "4d3uhGLADYWrghcwwcWnubqQX36i59145scFKrrdsyWpAQjW3r7AXEZmBmQNwwg7C4zzk7cPSesjSRWtGHAT3Pho",
  "key24": "25juxU4KA5GUpKHWZ2wbmwFQzo7md6TZFXdcNxF65uZHR1JL9GSPfqiuEPGBtVKNLGZv8mHFtkTqR3VZVJ4osMJp",
  "key25": "3TKPaYTs4y5EUAUejxQykrSwPGzWf774HCPfKyKYkPuComa4L67MQje8rrR5X1Vc3vdUwoCaDfyeprrFotKdG2Gq",
  "key26": "4e5j9CL45ExPddZHgjDCzqx2NvVcmRE9u6EykLottomCXAFgXtJfcCCXMgXrKUNd5LhpkdoNWfoMFTv9zQosirvM",
  "key27": "5vB82VWPAWWZzApHrUnRdqo5vE9zSabAiJQr2UL1DMUcxX4CT47N1V9DPxBdvFSD96YWkpW5g1Zx6CXUbTuBGJJT",
  "key28": "4HuCBLr8cPKQfbijxYnsV7x7mMaUHE1R67cNodBVDae7cgFb8N5uFk9oEcdBzufLSzvEqtSEXuwbRwKvfDbWvtWm",
  "key29": "2AszyMKdaMPY4L5A7bonkkThv9S9kDZGDmMSXucNEWUFVsP9hFh7ejJ853u2NiVMgyuYtv98DQCGjLGjGEWk4tkc",
  "key30": "2XHHRN71heADDJjGvprmtDzBs9nJPFDALft7pDWq3nZT3SZnCuTbQqQ7PP5AVteEgtQiq6ijLB8KSN3cYXqqmEVB",
  "key31": "oGFmzuMNxc8WoqrqepDxgt9TVnggq96j3mfUroxFQ2uVZ6ZgymS28LWvy4c4LJq9Jsf4aZCvLxXZX7Pc3rLshnD",
  "key32": "4YfqrdfqX8UVbE2SaJFmCSc8cUNxga1NC9DXpet8rkqgFW2jFTQb5nR9j9oXJeLY7HJ87iS8RxxJU9eZ9mYkoPkv",
  "key33": "2e8BJTrNcnyrrDpHBYsq4xmRDXK6oP7tE8mQ4AzmM1fcccMQtPA3SoRvT4E9Ugpmf8bHYW8RWjiC9qxxzUGfczhU",
  "key34": "3rw5uYWC6FQXYv4tiA9y9a9uJrecEb89tEXwQe5j4w36QjQxG61b13QKKSPFZUDvS3A7Smnv78Kbgj2xBMeU9GRd",
  "key35": "4zSj7GDnPpAaWbMMEx6WcsaLnvjfoAptkyNBy4Wna1dtzWvoxVZz8Ddbswu5D74nn4B3drPu1bD4CbZtQY7x8mB4",
  "key36": "3GvDQEsbXykYKsCZki9Dz3w8YixjTEPjKVKpGuRXgZmN9oh3h99TjTCAXYjseVJa9bPCmDNQqpVoaW3D3A44DsC6",
  "key37": "5EziJGGpFbXJ7KXpghu4GMHDZw6sWFWgBZ7C43m1BaoV8AcepNZMqhwKmWjDHQzymePc9MmLvWppTmToko1A3Sqm",
  "key38": "4xiCJpXX6HRL4tDSDM6EKkWQ2dYhda3621EkdurqUTuF9dLvjL7RGvdyQ4AH9L3YX6L1ryL9osgSLXbDcrs1q1Pp",
  "key39": "3ggPtwYAVDpK2CJwTbKsaMy1AM1DgWCqm4zoHhD6EVyt8viXzxp28mCZkDjnXTXFveJqR5qwbU2jLu4hoWfimmkj",
  "key40": "5rZjAaZMxiVZhcvR6xaZ3GCQP5g352JMF8kAmjAP9rLFJvHHWcKGpeTx3os5gcxrgYLFXJ4paTmyCuWcSqb5eazx",
  "key41": "5pezRo3Do6p6YFmikMtSoam9K5snZ5q4EhuLe7i8V71MpiemqGgfKahwxgJjgbN9bDbcqsgEWqDVqDKihxoQ1acX",
  "key42": "dvBoBxNUZJjHL7RtddTjpQFGGqSAQ1H72eAxEgZQ5m1AmCM5TpgWAqs3bSL4wB9QGu8PKLcS3jju4N3wi4rdaFo",
  "key43": "3KrySxQKdbZ6aECN6puezB7kYf2YWkQpyibz9NdveMTMkDd9p4JWW6Yfg732FzJHJdCxfbLU62i63yFAVFfPuwrM",
  "key44": "2Gs3tVnUvRWhuPdh9ETG5BJNJdMnA2CHrdnbQJxriKKa3Ynza7s7nnWSqSWXz9LXDXJAd5PJM4GgXgaxA2kdrPUU",
  "key45": "3KdNdSd1WbyvDXGdcaB4vaWVdnoQZGKaQFi4syKQuW2FNMoWppnxEEbqRmzDWnApxReQumAmvSLHtSPKQFyWFqJC",
  "key46": "5EpquaB8WVd4kPYKB2iTutjJ6JmCxfFLEdus6yyXikSxx3RhJqcbRsd7TNr5ZqzNLo9Q4GmUCA1XJ4DLJfKS8cv7",
  "key47": "4krqQxiKS4JyunVp1d3fB5JRkDFiLftYDqyw35zrp2Hs5ocARFS9WAVEhCXT13Jv5fV3UFSAy7cfsgAdoKf88TZi",
  "key48": "3KKqQP1DcW5PRuc5HxuD3r9wjj94iRGTHeRUA7nYgp5Zdzme8C1NZxS6mJDNT91qfEaQsaA9sCmEkuJvdR6D2kah"
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
