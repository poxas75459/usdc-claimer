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
    "4LVLrgbN78ATZMegCyFskw9KRWKA4y5oAGk85cqmVHM9nGWDSidYuseV83YR7GdGqBj6wtb1H5reEHHgQVakQ8ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtUHRoc9D9VYUU2YLPC6KFzfupAJh2moveH9z2z67PXKzZuAjDGXTWKpH1SGPKryNQ6LviYVkqJeQm5N2WdWWzo",
  "key1": "2vLKn9JH1KRCKReKfwxcCYVsKgzRoF8smfSSZn9e5UK61BoS9PRKPDB3VBsTbvhPWRdCEhnLy1nh6FFrNEjjHBWc",
  "key2": "2AB1g433y2RkZA95bt6KqW5TbCYBvAW8JEbSKcdwmTynwtCGkJPH2KtHLNEfin1GcXenAkRv9mcYr1owJD1mYonF",
  "key3": "3XmnrB5BoXG87dPWVP7VnQV8E5FKFBmbTX6dmxrqBy2VTYUVZmg3Y895R23T5onQWgScKMhbPSNsX6xVzSdQz46L",
  "key4": "4ocgnFF1z4bWNp3nETuTTi6Qk8kPpdxSi4CrzMX8H6gpybAaRnCfWVjQvqPHa9nZCuVjpJdJ5KpRPCV3EbzgUoJY",
  "key5": "548uJ38JQynsLy1HhtC85kUwiEt6cmtKwjs4JLpHPqsszjahVKMDdA4X4MuQ8JEZmrahaRk3nau9MRuPwzWBJ1NY",
  "key6": "5kc2KVWxbcmtCkT6Gq9GSDFHJBhXfAjQq5oo5Lxs5z8fxFyLSztmMycudZtUirRwgzbYgoBgdWb9WVMNkE5MZ15E",
  "key7": "3P2BF641T8bxZMoDD1FdTs6fW5MVzXNahWR9ULGArAkuVGmKNsczoUZJdmF6YymvDLqTL7mV3j6AKJ5RaLEF8iSU",
  "key8": "ERgNsoJAUXZSyaaPtPJFFbV856XaxvuxJmEqCsNyMzZvpPoPzQK1hp689Jb9bf5zbwP7AvQREk2hXsWA9Uqoukj",
  "key9": "R6ErVig2ugKTdYxsuyA6y5jEc2yKqFGfrNKmMCPpSg3KHSxwpyfxUzD38Q3MW3vwB4uvfWoLoqRHRKnC5GLGQ8B",
  "key10": "5XN8wrd9WYvhtsMnJFiXcVqiQN2ZeRcC352Gh5Fd7mx3qTzDQ3PLDMfoggjyB3fp39RGo6qwG3DEsaDjwGCdqrxb",
  "key11": "3UZm95n43K4pKWXRJZZExDrhRjsb1zCKZtXYq6LVbYsA5dtXTDyKTjCJUkoPT9BDTeHx4mfV7yKkAatyG3kiYpZW",
  "key12": "2QSFoPaogtkYqxFcRcUQZh8CETcECfS2JmHtRBbidWVyiZfLn6RGE8Uepe1cysLSKwHSTHFd62tDURRdXdTsaxBT",
  "key13": "3yHLPMVq5XX7QN3DrhmV1skyZo7RSbWRhmkBekKdgjo3eMWf99qFt7DCq8vsrPX4m13D5W9YuBuDFojU9AKC4Aea",
  "key14": "2hV2y9qTh2z5AnZ912kJMWZS3kHq7Qt2eM2KuM7CFS1ayaFD94vEw4H89zt3d6cP1s6adNxJvEbz8utqxFCFVfSD",
  "key15": "5wMdkn5JYwCaAeqRi4uJ5341osYALy2N9n58ro8fQv7pzFR7qZ3SRw5YCzq2XC2AgUa99hS89JuXuaZ6DgCfpmHx",
  "key16": "3yXPzNYrCb5BD3uAzsHPVL3KAk9CGXxDiKctJn5H7fPadLDBEHhSfn32XvTmNTAbZukbpzQdMDGWs7kc9YKdajxF",
  "key17": "5v8YxT6ZtAvsarwuUewnWZsSkQx3r73vhzeRrXjUToyxjNfEHC84XZcidWGLyqBFFW66NworNjULc6HyFVMdCxHm",
  "key18": "29dF6ocmtoH8JBAhEgQfSkjQCRa2Ufmd6wvEfKb4fsdpD1t7NWwsYcrP3aqLcPHpCKVC9SECE5BKBqp3zAvaivt8",
  "key19": "5MSsQCHd6KBoPxk5PyKNWLkubXBCiFxwjzGEHPyUqWXr619cEbC5uCGk2beshQiJWrkPuffwMUQ2yoySrp1GYThk",
  "key20": "5NEUHrfFvDsoozSuvbTM2AxaVQVvHvibiLfWhvRW8Eun898ZsGtsiUGnAxx8pk7w7zGoV5R4S8sonyQU56CoAmv2",
  "key21": "WfCDYhCjcgiaqC8uXa5ioQhtFrUz9y7iWcpx6W8Zyjo1qU1PzaVN8WRgqMZxg2AnWpKjyUxVdPtamqBf7vUvKUj",
  "key22": "4FPgVdJat1X23XeynWCB3DXKEAWumfjQgrKSukDCtJCbMSrFYcYFGzEjCmrVTNm9XqibSqq9iEhECGYayz2MPCem",
  "key23": "46je86Xon1xj7mxAqBMdWhaj4g2febUerz9ABuz1xG5KEHsBqi22ZT6GMbP2UpD3KabSJ7HoVuu36d2o9RJgG5oZ",
  "key24": "4gGS5qFy4btXu4hVMWLwKSG91aquv5zuTJEM87zi2zwFKuk8PqdBdPBDBWqFSW5uhpyC8eSmPfKNesjX3xHCVhP2",
  "key25": "4pk9DoTevqM2DYdyGEJNpbZiVCJfFn3CLakj1PXRcTmDfkXNtLCSSJP7DTT1HKhFjTdf9BHJxKWVJCbzjoMZk5Uw",
  "key26": "vaUB7heZwNPZ8XXT5qJgrcn3gsjUxtK8mYnRz1CM9XEiCiiNUvVDVEeuDv9QqrEzoDJTABK1h3L1o6gjTbVUc2m",
  "key27": "4DiBwAwJDVGv5dcdoKHsRAZmAVokGpRwLZd8H9o12vUSmoQMDnRDV6cP4iDKd3Uhh5HAV6qLTyhoTr8Lj347ncKW",
  "key28": "63fEMMpEqgArHcrp7By2F8y8NF4cji81zi3iccabFQ2h9T3XsHWW17Wz66GpZ3RkQfYyEkL4hBf5ySJqnb2TaxJu",
  "key29": "2hGoRiTA4gjc4PidGb2zywqgqsvmQk9vanc9pw3w3LaAxq6pkXfaP6rAG6tPqsTZTBfVVQDgtZvp5fJpSuHJjYe1",
  "key30": "3jjF8FhGm7kXPt5fWDsNQxdfpvr7yfo8cJq2hCfrHa4EgCSmhv62URne4cgBpuBcyBxsV965XTK4AfGC7MoXCVFx",
  "key31": "43w37eme3SaAFrqeJwcDwXx1KMmiFyzXE6eZQYvKZKT3Q941EKWtGi8ZXSVdEzy13gwwkXmDXpWLXbmVoCprwPDL",
  "key32": "3ZhjcTZr9w9eqMVaq3B4Zq4mFipNexyQDvmcAB5PcqnMK5WJpX7sko2LgJd1ZBm1ZbB8SP3R5U6H78UB7C3YBJ5f",
  "key33": "28naXX5DTB3hjwGfPeUEdTAr1JYgozEd6y1nm5VXLdzGTvfQtHReuLpDRkCNBBXWB6APYQ6rbbq8xejcVivL5qPY",
  "key34": "5c4tCuL8XAnmTzv5ZaZKf6WV5p35MMxDuddQoSPDd6sMXS4nFNtiAomTD2G8cL9dJF5bWNHYV5WZuxqnNb2wBjHG",
  "key35": "NpBMmsXsTJbrS8crdXHhuj34wqRmQ1Vz44ibfnv1SuXb9xHNwt2QFHdDKCfd2ieeCrYbivZE9F4cPYczq2nCp45",
  "key36": "2HTisUjh7YvDHnSb2tAoGFFYzauXipTjvyMENeNjnfqW3yUxnHWBDFThcHEfkNKc7Pum4M2HbAcvCxsT599wrhK5",
  "key37": "6gMogQo65YQVSXhs2kpdUzrGyi68B7Eu1c8WZasCQAg3biwfvBxvPjhjJoDUuh2yfU5d6cwBg4qkEsP2bhBSfK4",
  "key38": "3h8qgE1Hw4TX7gGJzp6RXvan8JQAhCs9vMNhdYetunRuJPnXmhkxTgXkgtNNsDNK97m9Lv4bXBb5W2vf6iVKRQ9o",
  "key39": "4X2NUjAXyn9GmHsVVrJfKGZG8K9n7vVTnh5Ycfd7WqjZAHqNC4iAr8z4Ua9PVZjduVANEc6m8tQo4fvQZ9CJT875",
  "key40": "5VLGwSnXaY2N4ti8xnchr1cEFvJL6yZrdU5LXTfG61dLkzHS1GurJjBwL1u9sGtP9zMCtsSGjkyAWb5Mebd8THbS",
  "key41": "4oPRF99v1xjoCoCX6e1fAwuxShsH5Mmqge6ZsdiGezstLwVaCupARwmNquHaVBM9VHFVvkbL9BgnM5bGGa8zddV1",
  "key42": "98KQEwwWeGmnqz4HY5TfQkwnPhSHttxN585JPQEdP8Nbwmu3BYsMj26N6tvB2xiLXLPvLcQHTpAnXsWjzHfSRB6",
  "key43": "VkivTCjVvZ3GzqDfd2QJdRXfvuH2CyrhWEQSJGnaYcXfsg9tc3wiCWa7KaFwCXTuWPd8TwBxpFd515fwGgMj98s"
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
