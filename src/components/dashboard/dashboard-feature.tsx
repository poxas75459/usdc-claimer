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
    "5cZpa8AbMow27sdPCf7rtfnG851ZbRAYweie2P1KJaLUbU5xZKqxHCTA6Eq8WVX9CXwHPYkgMJNfWUzRqVyFYFye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jWP2ZaRwtgn9j15toyzyY8m2sifef1fK9P5KBSsZ2xrky1ZMdfQP3avm2nBTQXSM8x8yJjyoUFVEic3H1at34Fj",
  "key1": "sjXT41bJ5bUQE29BrnN9zgZNwxNDmwHYXX83QtrzCvJnCViEaezgoZFSp4ynvNuV2MUQS3nyG4XDSL7sgRWzD5o",
  "key2": "2oqG8ZxBZY1WSVZVHsBWqwQSkMiknT1XYL3niGBsWWpAKBUGQvyiBUbvEeshnyoAvQCLkAUzedL7VmS1RH1f4ktR",
  "key3": "3gknfEieKpePHdndmpEFzMh5UyPs4WkeXNoS2vanVMaCRcy8asgTVWz44UfTz5KZu4HZs97HqSFtj8Wv1MTLdHBY",
  "key4": "2Rjh8FNFLdh7J8G56jwAxo9E22xpfmtyxkfUCvjJExdKTjPqN8J3yUG6soVcYm1pDuHS1DQrJNNVsn3BrpTC6umh",
  "key5": "rrgAfwe6SzUm9q82Kk4eRTDAtCfLAP1f5tTBpRBCAkYVSfKqDeiqDDQwgvbkDaLMkPF9gBzoA1JXhRoAFeYY74t",
  "key6": "2GiQxrw7QC6DCu5g3XcQ8NrmEUVbuJYieGgZm9nUuqMiVneExEo47RaVQ5zNdsRCBSyc3tRmjw6MwXBKsLM6aJp9",
  "key7": "4kVdi8Z8HZBDJabs6dWEVZDDBSnSJ7bqPEUpoR4czAQ7qUDqwkDMfnxD6DKh1XA1BHFaa9K44dpzb6nJJMMsWBY",
  "key8": "31oFmKrYAbLF2omGay5pBVDQcmFS7kEodDMGsYwFWZVj9SNYQur4EuP5GG1utyLfBAnWiySnfN8BWcshk9ftpfvj",
  "key9": "4BwifyafPe9oYmTmA8JvxnCN8Wzk4jWrrXS2tDwrgzRAfEUinPDfSf45B1KgstihzCVeCiQ5hWeTzFjFdPt2rPRN",
  "key10": "5Qfbzaoc9AXH5eMqwXC8VxRDjRZWzxfM7joJyXArJd3JoofKemkexYTynwa9pB2fMq6YHRX5sXCmkW1iyeV4ZxKV",
  "key11": "4QCht5cZBy8wuXu9Eci4qgdz7BFec24TLa39pAR2pyR1q1GpUsPjbPH27c39TE6wxBGFMdpAvGg5zYsDzxJimxvo",
  "key12": "1ynRuLvGXw3Boc2CQarXWSsHuN7R1wzRYxKkPamZFPSNknAwFWxzDbN6KXsxownahBy5sJnx3Ku7BKV9BYNgFcP",
  "key13": "5Tmg4xaBYBAiymc7QjQDbEgTQCFEbPGYRey6nGqHVSpuxSkRbUJTmmjqRTXbUtfQN1o1cvMmYNhnifpk4VW7TWiN",
  "key14": "245a6BaEd9tYj6yeDxfL6GMWE24AKpCQDQk9m5bovhqLTuWvQTbyvsfvxPjWhDAp1WyowYp9RhHDdJv52tB4ZzdM",
  "key15": "2ptmboWEeUyD7JkMEGhDvcMdoQ9u6WM8MHhPGWY4Kj8Ly5dRZzzenv9WSqj7LbxgcHrdXcw6cNbgzNXxVLQT4jdt",
  "key16": "5YjfauvbmzuCwWR7LrDJrfW2rFE8GYyQvEG1HELZ8EfbAJwdVE93FdzpukkGHZgNA3jZt2x6EYHTQjcVmVTDAxtZ",
  "key17": "VceVXiCKRvGastdaQLY2Ka2YyJhnJaPYip3bc19mYLcfTvR2AWrQ2tWazS1Fb2bg7sFRgDpyTTiLLQsK9uZBpTd",
  "key18": "3ZvVPLp1wwowhxZkib9M4xkTQ58Q9JKdZQ3gYAu9CkAUXoPU1SgUVgqZ4WZ54Ct4Kt6mHDRH8StHcycBTLXbopGE",
  "key19": "4nDfN22ZUL3fZQR25Zrb9ZgYz1kT1fS5vdJGQ3HhjkrHPEHs2YkuAj4gs8WLREsQPoVYibUif3qQtysXnCAdCrW5",
  "key20": "2BBz8pvCo7YdyatVQjwZ4BQ8TEPKHQ5GqieTTVbNQkVCx6LKh2maACF1vc2iEkahrLVo5zXdu7hBgthFQBM7wVQj",
  "key21": "63XCbUy4tpYVQFFbjSLnqhwLD4Qj6uucVwSkdgqHKC6uprj4tz8pEBrmHdgxyHWeHDmd1WdBQoMssv4ikj6UDnt7",
  "key22": "2ActEZoyWUXyX86WtBirZc7MnB2SLcmUnEiRSS1QudbL7DBo72VkmWYJRWmbrp95RWsu8GcZTmhZSjwcEa6JJ9d8",
  "key23": "28sPLoPWys5uJ3ujBso69sHKeYqUmQUvYthMXeSbxVYQM9kwrg4d1Lafu5WcMdPYvsg7fzWYV17ppWhPSGHP1viJ",
  "key24": "2BdHDyG4F2QtYsduG5RUu8zw2EyeJPSD9EYZfa2zeD8Xo9tLchQEJjVMr9crf9uiwv2AyP3SJ1ASZpUCwn31GW94",
  "key25": "1bR2RS6arSGhLDQpAyScU1JDAmsqdkH42RhKZZNfB6ZMPsUocGAgxd2EKLn6py3mkjVC29oi9hrYtnPtsWaWJJt",
  "key26": "2ptpzw1oeJhguhNLY8SyJnUxJkDWePYh7DqhvLAPD9aZgzHvLNvxGBKvzLBbNR2f6oget9m6WXdUiqqMbtFbuUgN",
  "key27": "5p8ASCEoSYxNf92GsP2xUB3ZbHf8cuFqzebuDXcqm2Ym12pPwhydNrqRkukZbfHfpUrPoD2bMvLum8qeNGdeKVHq",
  "key28": "2ebBL1Rwyw3pUnxDzxFfx1BE3Du37d6sMw1errV4c8ztyEM4FRFGB3RY3o841AfNnW2QJ1p3zgQqZTRXVi3Nnz5K",
  "key29": "4NE6gkZLYC1yytRB3i6S2ZGMCh6vsxHMJGcTqN2DAQPTcoZWGbbpKYz7t6xPQ6TEeMoXKMUVP7pH89bT3xiVtGau",
  "key30": "RCj39uE6BtqdQLuNQsJj6J5j53uoSJX385pidTWj5YGdUPq2wcbD3n6gHaLkiWMQKqp6SPhnHdeNDrDjdjj5yy9",
  "key31": "3psabFNhHDDBafB25EfEQn2bxFJNpyuvYGZmwJfwL4366DHc4MnCFEu5PrTtYuNWmCHCixMfcgLWGxYgQVdg22XZ",
  "key32": "2tZrRbt4gEY6D9fwFv2o51U24BhEgin4zGEVnnkSV27APahqM4ZHAD6qDiJt7YvEeFNUPwxmTgPZyyYF7RE48ruZ",
  "key33": "1NhKvpbwRKK9YeLUiftvhvcAY7to6DqWUbfmNzNwhG2zCyo1CMznRXoccJPmynnz8tupNr83PZMu5JJ44WE9sc7",
  "key34": "39Dmvz8tbrj9a6TLzJES7gxNwHVH6kezk9yhhS87cF83rfyni8pjaHpXC4SeZ2ZH2QbfDYzoUSSMYseU7hhitGUZ",
  "key35": "2TCyhWJo9UAi7paXDCTS9bP3sEG58CRPdEoP4JfKzveFSZrzc6jUrBKTnq4pzhk7rv4P4azfLggZ21qpr8biQJfT",
  "key36": "3Tsa7CoWri3Z6w14RR8FErHqCeTQdgRBMWu5UPXsNdjd4K8stvjpKbpzctpcs2wQMn6FwZYSJvmEzNo73AZ2WP76",
  "key37": "2PAH6cLenYWpAAu9GTzsRwqSbGfrFiiJs8pNS3ZMHtydgeXwZYoMSPwc9zqe72UaduUkGJvhobPSNyNzUgJ1HE4r",
  "key38": "3bLKs7AjZFgZo9JMykbMQ496A69MZC1JPu8bpCinVfMRagJMGRppvEdombpwgFAo5g637m4vUypsxkN9pN9iXiMD",
  "key39": "5J1mMNG5w7SxxKK25NGRWzMLc8Qn3VFAiS7ijbzCZ7FimsTVneL21qQzecfU3Yc5Dod6XS1dSu97G1xSTT5eTtV8",
  "key40": "fiTL9rDeLMBo9jXZZZLBreNFNYTh1eZbYeoF8gtLAcnj3k4J4bE3oeEgbsnDxie9L4ezCY9AKBLneQmcwRdFA69",
  "key41": "mPqJiandg3utPbWHBk7YYDRVy6muPDZmnZDsDt7Jdfp5dGT3VmFv6bN6DjgQ1mMvy8Kk8KqGjTCaiUkUvGa75Tz"
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
