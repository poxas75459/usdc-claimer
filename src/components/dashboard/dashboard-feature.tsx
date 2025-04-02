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
    "5nZZiAS63QhuovZD9JUPnyae18Yqqza9bgTb67fh15oKPA8rw1f9FCgQfLdgFuLKSJ6oVfeaVEbyTAkHGUv9Qik7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dygqc5eKD936UNCydX739mkMzJ8rFpM9ngjmbX73KuS8qz9z9fC53bTYtgX5uhCkfBPUgd1Q959t8X3xgLjP9Hy",
  "key1": "4wqVHQ3nNruULJx4gLCabkwnNGyJDiTEJNrAc1rS8ZACBNZBmuQrkiQ6ChVNKwSsHxkGiLTiXZEEH2rAsBpVBVfn",
  "key2": "J7Mm87gc9p8e4UmjZFYALvidCAkdFSvqxFBouUjEj8DXCJqpyfUi95BzwNPzsvRzMNaXcV3oo5YAgEpyPvQxMzX",
  "key3": "5cfzwMftygZi4tVJfL5vwfbem4aWnRBTiMTkyYawBbUJ4fGSxpBJjw5wVBN7iFsAQLMbFBdHy1XtMLiFVHGVHHoG",
  "key4": "3TQxj9rBjhaqoPkuV2ubavAxduY2KhBevfKDEb6jYRusQn7uJdi2vYw1EzYdB5VEsv4uMESc9PEH6qVuggqGmR2U",
  "key5": "4ArPsUNnFBfyG5AiFzbV7y6SjhHU12NjhzLwVz9WoSiCLCnTHoDDmXfS894GByHWrvdXbdMvJVRWxPkd2KptBpyV",
  "key6": "4DgrTbSJm3rG8cFMrNJn7eaCEcSfpecBF8sKJhNCEwVrSs5cB9w9Lxo58b6iNwZ4uyUnJbxagzrFdiPhu3Zs6VGE",
  "key7": "2gKDUJPqjdobAwgJoLuxN7MaNU5eqivAz4Sm2RhwrGh5BCFiybCcPjMrGHYiyMUk8P8wFA2gnbDsyditzEK9eZJe",
  "key8": "2qHX21B6RSE3KQ9pTurcNSQNu4gtK6MpKD8RHAFZPZJvn4se5yF3UBd28GTH4y47WW423iruYEFZk7fQQCFPmttD",
  "key9": "21NESfjEvyqiUqDjLNd1szHvoTUp48b7MvcGwvwqbS7aMFiLJhhYDeiTxjXFuPkJLL4FS9pnwkwBFaog4tMajadQ",
  "key10": "3DikcDkJk1Kzobc2PV8n5DqSo4AkVEnwLaTST1hDXcGQt6pNEVX1kiN8dTQ2T92g2cNTP1UcQos5kT1XWsttEzAv",
  "key11": "2THV77yWNGnsNZ9oNrJVkXQnNQKPaxTEqU2mLcoBLTNZMLNX13gHph44FPk6es9RBN1VMS65mzYjdC31dpoUoghD",
  "key12": "tq1BLMRmHHmpAYUrUURBLVtTCVFoi4QGyP98jrP9cpJs4j7yQazr3Fap4zobPLTPY3DwBXixVbrACNS8BqpZHns",
  "key13": "3a7kTXfASh51e5m7LBCKF89TB9QbjTxfg6R7eTxU8Saozc4suxki5L6215LR8xNmRZPYcdqun8tYMpd2w2KPWswu",
  "key14": "28EXUMk7uNetR89D8DzgbKCDY7jBJc5fYB4J3xEUyNwE4zrDnb6AfrS66fmimPtgWQN6VtVwPhccA1toqNhP8tAV",
  "key15": "4xjgXu3h9GrUhHirLRGdoQjFr78Zmf8kNqMrQY5d4WgFNj2Lmk679eXCpMCAYbkWzqegEruQVREHqeTz1cX4FYSw",
  "key16": "KABMwohT6nuSyRvGcwGqpbZtXEH5J9m4vsef8ESMRCmUcqFoXdvFCQMExHbK5kkh99WpmiRg5yYDBRtdCqEkwDR",
  "key17": "2K4SmbmdiJYaevVPuzUwQDtKppLQtF2EBqRZsjMnwjXN8FtZevNds4tr3MepZXTTqDfzggkpj4W1iTNb6QAfQko4",
  "key18": "BNkqi6jpBJKVRPHJu74Vr8F3zUFAZSFT9nH1P9o6McToqTq3n2R1ErAfzpef5YTN5AuYwGz1LwWNFH5Ry1vCDzR",
  "key19": "4CtcYnNY9ppLBYWaCekaP9cf5efVCSCUWZcY8Ug8u39LDvu2QeYeMz5oGF4V9YrWxyLFCVg2XPEWYQ7sdig9FkJS",
  "key20": "564rJjDDXSMqNpnKsVsGd5Hmm8uWCWB4T6SP2BV1Hwt3vSUfTJm6w5NA5HUEubk2MVDJCsHdgYpuxyz3PCJQ41bE",
  "key21": "bvSUjfFbfv4KLzjLq2ch8UjzZodTu8GaGj9nVUcZs8XN9Wk9h69Kfi453AAUb65LKuuQXtAS21BFirDnDrz5idi",
  "key22": "4C6oSMRh7B5s4R6rNJEFwx7HEdexcPB28mFoxGZ7gQZNcj7mWwCvPW2YgUXMX1sPaD25FHZMoWEaCBqrqQ1odoiM",
  "key23": "3tFEdWpMUCqCdLzUTx6ax3Jt38J98abSvwbQDnPU13GXQ6U9M9waL4mhjxkPRFdbjKUbKEpxXieVq6B5W9D4rNG3",
  "key24": "4CeLgFigFtvFAMSFpJRNmFPLZ4vhehE92nnfoAgDgB8K7hjMZy2MKij1KCuuhMCYCjgYHQkgcjWcnWXjDdvfYDzU",
  "key25": "29PJEZZMW8NVt1bmieBUwGQsC44VdX357PFwA91mK9mPAKHQgtwg96GyS7n6pc2jRxzHPjJpibpUEZ23fPGcrwwV",
  "key26": "53BnkjMzKXkgDV3K8i2748PwznRdmhkzDuzzqZpzrcivw4Li386ZkkBdXVJhq1vSP6fbPCN4chtJrRSCYeiutMay",
  "key27": "5DjK6EYb64opkKXcGqxVsugLDwUYE24fCL9pMD8nAMuHkrFVK5hUWnvRK6KPfx3pecGTgcR2Cfd1agba19iLn4Ev",
  "key28": "2QGb2i6frFTLFysQoB9qqgnLgMYK5zVfebmoaHVmvmkzuXpYhCcz9EhUhpY6Z4aqVNd3ieZeSdiSvu4yX47agZoo",
  "key29": "5H4MaHwhrfL7ikm9ckHLFyj99X1vL6Y27wiM3Krpq3sGq98WzXJ1W3a65fBBvsbRnoGaJKhiMd4Y8mWURRxEyNcP",
  "key30": "2gh54nxw3LubEuTu843QNdPkoy6TWpJ7R5kx23VzQD2ve6TsVVUgJfnRzAEKSvYhJAA2ohqgXX9xz21ToU3cQeYB",
  "key31": "3eDNYJ7aQx2N7tGsrCtU4SDAGQgCf4s9B65nJaVvBCvZKTy3SJ4f1Jvr5MyqGVXcNTxgRafpJHsGrK3KeKKzXR2V",
  "key32": "51jsycCWkvHzEJXVjpnmiGWpdCSxVkJuQiMxtc2hejayy8fVFHdLQ9ccfbCgLv7mBGkue5yk8i7JokssF3UiTizA",
  "key33": "2DhoMuBP9RuRMej8qWe6ij2L8VK9cqkysmxTtM8Vrh17euGTJ68A7LhYHt8cQ8ze5cuB5ZV8JNG7eBwKa7XzPJL",
  "key34": "2LisP7ybcvHDaC5dRCsFaVKZ6tmcjkfQvpTWxZPuzz5ejNzEquDDYRKrgcJuKdXuVhXU7pnWgt1u3vwGiUnEt4eu",
  "key35": "3AmsyUPnfjwJr4BYpnZRUSG787TPQyG1NkjLZLxcM6FZNmwVK1pnAx8o68z8ZRp6H2kAUFfWcf19EwyCKUiUmCqc",
  "key36": "VHT6LyuAmoUe46mCbwVmwEH8aPJWxfFJtp8ZRw6HS8opd8NEwRffMxQ8y5tTj6c588J4codSLuCvJDNuFLbD1Y4",
  "key37": "4vFUAMZJGjSEBqAdU4Rcmrok5bE9HQEor57SCt8XPHtLxGpdNfdCEnYTU1SxSh4Hn5PiDDERdDWN7AYFPu2bEoQ8",
  "key38": "ow1Nx7Cfknzc5otE1NKhCLjPybGw9LaCxnVR2wZMxmsE6L3AxiaGquikp2m425ao8Yj3FQ2FHukTeYfQjiYhRea",
  "key39": "54C9hujVtikoLyeFBWN2Pj6RjAta1SGrVHXfuMoVV9ZDVSWkDqX5u9Fofv34Gq4LdVZbN4JfTbZ5cG7AZSJJdE2r",
  "key40": "4gP2Ly489TuHxUqHf6WgvJ7PncQPTYDAZppfFfaKiqAF8cpAmNtg4CvLgquzxagfbYsNy8X1ShmfvNcNBm859U4n",
  "key41": "5Rbhj9T8veXAop782KHRYhEudyJeYWHzZ4pmugKST8qYRzZBz6fFrxnUYPoMjiV2FhaHhS9bcP8WakbFeBB6TYbP",
  "key42": "3wudjTPmHKFVEk7bzZJ6N78HshC42nSX9XHs2NmYC8tiCPUaHCU2B3P14sce74zxWNFFgLkAgBovpo4tWqJZDFLD",
  "key43": "47YChA1HZyCkS7MMd3VHZ4MvZ1PWHFZFoFd61x5UgZH6ML8BfEfUBfq3FY3VmCqTa2Nh19Rf9rZWWytFgFFAiZPy",
  "key44": "JGWrsjrCjWDgNDLFdVN196DsAdTJ6M2TjRcSA9DHjSVLbP5FSjTASV8WhcpqVVy1GSQsKFjmLh9Erd9KaXBM8o3"
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
