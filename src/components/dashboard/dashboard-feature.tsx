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
    "4VSjYX7Z8jU5MxTEkWE5yHcrbzhdAoPUuut5ZT6vfceZHq1FcA9xAbqtCmsjWPyQRXLHJCL6Xm1JGmAU7Cgjzo3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHNzBRJJmDZJ95xDQttFaWpnchiJRJqrzRLcrfKAXSMgikL72sypBr3kL1BeQcNqU86eejhQ5PEwaoUYPiRcpAw",
  "key1": "5KyxZLFqsPC4sUtdoeqpHQ8KnGPq7nzG9TN4FCiZK8m8zyMe88ADehJMsH95npXhbaromVghdjBRtf1URGkd7XGR",
  "key2": "4K61FvvmpNoS4DCJkhruug69ssZXsGH1jLgALMd73SaJ3ujeQM1FQWnXZHcYNWE6rNggNnCFaJ3UaH7LM3mzXcQn",
  "key3": "5FiZHkaTH9j7iWJjNfccNCT5NSRJ1bZyepZE818Qqnp8bvbs2ZFBZKe3ZQxrRVycWDK7gMXCfQJZbDeTNZGzKsUf",
  "key4": "ZpXGJXvPfp2qVZrUKvcL6ed9Cc9CEpRC4YjF6tBUsnz7mZxTEA1X1F5mUE4JPkBgEJ6WA6imYmnvoGpkuC6h61i",
  "key5": "2LPgZeKkxZAXrTNWCHK3qpMGNz6ZEtk7CWyEFdzJdML7DeScQB1myrnJGKZiiuSKactqNRjpEoEnD7RsLvnYmyEd",
  "key6": "5FZTMChPUHDB2gGx3bgJNzaUTmTPCbTXsaSwFNne7xmkkQpqEMdw78BqXttPXzoNVTfm7KtjAy4eUTk9PFBM18mh",
  "key7": "4MDNDiBwoBmx2FVRerduFd3g3L1WEq3XCmpb5zpV3VFwqNwmXdwYv2PwmWRS7Tw7oDNw2BjJ2c8SZgoMixkiMJXg",
  "key8": "2jVbboeWn3MZGsNbGTr1AqnVwx5QkV3CNvBfqntqDHj3Vtof2ET7nnx7ntHz8Ru6DsmQBEj563LQe3BqVcs2GRLg",
  "key9": "37tY8i6XZtMGfrUSEJxD746m99DQ3AyRy5HNNd28RGQ8CXNujdaEqqnZbE5PAj8GJeqqxYWpsVMNRgaJLVFQ44xU",
  "key10": "2yDqvKqkhXsAFcHXvAdPLR4aygdv1jzgtLDM69UZQtEHRggr7cAAHJZ6faov48vXba3CCUrgJRTiMiiTSo5DXjiU",
  "key11": "4Kq9st5AE4JUo8ejnexCN2yvZZT5u8Aed7dAZLCEDa92XkjKnNVa4pP1UGNVDHUNF2LVuzT44ZNvfoj5WZwzszNF",
  "key12": "2fGQyUt93YPPRziB3Z79JqTpWfcUhMP716iJQbQPZZ1x1kqGbBKwf823tYncDBGJ8cDCXgUTsP4mp6FE3cnFicdA",
  "key13": "3uRZ35BEpVALyKup36yTZsjrT53j6Fzgm5C7vPjJp1SwinYhVFXZarEdKVifAztEku8FCf15wmH2RpEmFccW2oEU",
  "key14": "3JX78soz191ZHWdNTQXtUs1UrEDaqXvwWrbDhLMGbtXQZK492nqNTuCGKPrS9qXWHPCdCFLbDCxjudMjezsdpuw7",
  "key15": "2PrWrm18T11uuiTZSsHnuWLe1xkfgWtkUVQZFiQRD2VfPDscNADjemKegR9zktLukSme8qTXMtUKFmykwhR8g5Yi",
  "key16": "5o3dWKPq2gyZ81eT4CrnoM8LNfwZzN6B6epxNREPrV22YyDTjzr4obqN1n5qWLCYD46FScwifRUkQsVayS9pSSor",
  "key17": "E1u1pRhYUjZv3HPcK8tGCmPSzy7GCguJuq8BFsiZA13Lp2SHftFJBkF7TWFZXwmYQ1DiBtiDWN7yi9UprPH9KPv",
  "key18": "o7cxg7s9ZjeTDDi7C3HU4ReaP7U2MEcR28GsdtHfBSviroS1dhmsKjQZQrUXe8Ra2aj4WEY1kG85or6NZ5tnZyC",
  "key19": "2m12rCi5LHngxQE89LoL1NMVNy9M9uhYjTEb1PvG6UVBDSq995ttuC5buq6u9JkWue1BrVLSM961wD6Gnw8u5kqD",
  "key20": "jaJFYGtdPSWSaGz2o2cdvcGeZpxG65VcEXoK1bfES3K22BmYFvgc8DNguKtYcyH5ycaAYraZDhjSbryAryoSGEU",
  "key21": "4Npkd8iKyUnpmvLxiJMZpaiSi37PPYkbNRjyv9AVdSc1WGSmMHZ7eyQk7Jz9nfD3Sdui4qLk1DkKnZr4TBiAvqaN",
  "key22": "4abSx2n9h2KvMY9gxi39AbWvSkLxqS2aQceVUBkjGPvStXrXAKV6NLaTd5zXb24JGD28AiwE812dwBp8spbpuBZW",
  "key23": "adQMbB8yqLHVMzTc3Ch3GS2NsaUEaVvQTbY5d6VufzAj6wtV3wA5zL9xxmsNDL54uhQJVoLSrjuULiamjexFsDW",
  "key24": "5u7AvSxv666dTRehrCeF1zPvpnJ6LStqks6Q6mwyjZ1wHTaYQ8kNcw5zWce1ifUr7CCWvSuEDT6iazVXwLUT8Pnr",
  "key25": "2SBYeV2VaXCcrPq5cvrmkTzJaap9vAXAuhKdY9XnhV2tUM8vtcy8BQB4sc4eiJoDCqGUHbjse9Ni8UYLA3ncC6Vf",
  "key26": "3CX73LLevQPSiPvmeA2hqHqcd26RW8Q1Bs8e4uGJvK8gkiJppjpH79yorT7dWc2co6FtM8bWAULBcqiYqtHqC2F6",
  "key27": "anL7Tikby8MUQvbNcLfKAjmec4TzxpYQKUAJ4fYkaGdsoHJS4GjVKoipq2hngobnER1YyAkPEXWcpwV6Sq6GbEZ",
  "key28": "3vpJCJyLGMMktuDFWjxQQjSt8mEAGWgiy9ioS1bgVuHT683rAkfEpfV2K6Hujo3Tvv1XAk8nWvNPGe6nSCWmUBQr",
  "key29": "6535GGQF3K8hqMcGcrhipHhAWYjGZJcVHg4AZjs29LYXsoPvzVG8jeLHuFp3Cv9Z6nQP2eBgs1aESqA9WUEauE2J",
  "key30": "4ZHBAd5pSgzEMMLqoavbuPghRAgkoidcFHq1wVEH5QYDN8mihtn5zCYZXzDUg4cnczftq3WoGApM9ifb8U339y8",
  "key31": "ab6XYYMV2co8c8UqobQPrg4ZiuDNCYKD9R1W41fhq9cLcpmGEpwNEF6meCVgDAnV4dbtvAjDqa4szMDJPfHX7mc",
  "key32": "4F24hUhc6Zrvns3v3kw9oWCVtiqhJifo2YoG1J9THNSzvBjVNiCJehKZCm1aQuCAKjMbKQnuXK6bCd1Y43Fpu6Xo",
  "key33": "2pd47UBxuXPV8evUQb4AuTNV7QxbpqE9h618ipyosUk79jSDCbu2bzxZvBM2NsW7zFZBXAZ18wsPqa6FYUbZWHJ7",
  "key34": "3t6kfAk2aJzmYTRWawFqNSgdVtXePVUSFtfiFKW3LDi1LBiJPPvFPYZM4GGUYE9kg6wbioLhd12wBZeuKc56cBm3",
  "key35": "4k9XHNEy5QbxPjhpcD9Cjr1dBxJ8B7qpYzyQ515MQfwsH41sRSCEVNo9EwPBjjWJvDZYF8MDqtXPCcqAv3H3w2nm",
  "key36": "4i5ggdNx9sw6sV1hbhR82jwbQZpnhVgExfCcMh5b8HausXiW9yjLZ3Bi5EgUArWWWmqvZdXRo4NmybgykbxoDhbb",
  "key37": "5LFARhQqn11Kzc8ijheAGTKk6zDTboGapRifFDkJqZCjDp7B2qfzp64avV18S8rC7EjGj3DdivcnVo6Ce6zEyuam",
  "key38": "2JK8TRoGUELHUcx7WXEdWRVJP8w4oZN7BoiV27EuUfsdnWaKVrAbvwgQxyroxKNd2ycVXNYEdezq1e76AFv8B8jX",
  "key39": "3e7F5w5crDNgdwm2NqbYctJTmiEycsQoBMr7redCkEQmVLemTuLDGuJibbixSgwrMuQcQECyXM3SkHyBgTRwG3qF",
  "key40": "39XcjBF8PbXw9KFdMWqm9536pQpffRVBpXUAG3VucsXWUxxouVH2FoDbudBvsihBEdyQmdGRwAGfKVdV7Z4Snizq",
  "key41": "21mUnxXJhQ3QAYkdMXLeDDvCe56oadHkC2qwQScqF9QuqniK4FscanviGD9RZke4X1VJD3v9kLEcJBHZpqpNM7bn"
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
