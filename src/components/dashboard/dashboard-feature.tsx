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
    "5HDWsepWysWNqvNbLscxrL3BRuGEAWnQoBozRgzRZe8cmqaA8dH27WhxujFGsnLrebcsnAAoXGekhaa1Fxp1vTRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jaUMj61qhcuZUeaCeuendyDfgbjxQi5JqKs5hErNuPCcwsw3r6E4L1pQpL8AzqSPzjZA4ZGe6uqmMrCULg9E2oB",
  "key1": "hFeXRXrR8e74epv2FPMbuJuFa7hmhpzDqCJGEZBVY1mJgX4MvHsuCy46spa36WVaTWyTy6VQSjktxQDDkCEdi1m",
  "key2": "22zNLaMC6d4cRGVBFT2QQk1Sqh4q3VF4y8KKF4Va5S6jb4bmbSYkgJVUh7Me81qr8t5xesktK7UTGyGvYoMfSeA3",
  "key3": "4YRzWKXNLTWs6VjxS2NaPrnwJNgqVczjyw8cMj4V9nFsGjkGms1vUmd8DiXpPpsVmCznQBDbGznqKnickNKCmDnm",
  "key4": "3n2YUK1cEpDAS7MTWVBFtsr11enVcFnvYfGLRNkLY7tfiU2XHzvHY64xUwy2Agkk4MfL4nN8WCixWEiUTUw7FXMQ",
  "key5": "4yWWr4jaqbsZhotAziFLnmTk7Qazjs1HfSFdFtQsK2hJPUJuvf18QYu2wRzo2cCrdZWPTGDW51vtiviNh4uMJcbQ",
  "key6": "yWGcRM3RQAzWEjWQbNj1AhtGc5maMT1jae9B6FHRPTTWjj5xRfLaRcyn7qhC6MCV6dqwyWKPB3EV4R49wXhjd1q",
  "key7": "g8E6jkzufqn68KkZ9xz8dSBPRpX6pPSwaU9yNHFFM5Cfr67H9n9krBBaX2vDgVKeyPa6uhmkVTUsrPoUL63Fw77",
  "key8": "56r7GRBysXYeKt9ZjpPQ5cAWHr75VRVxGUq21hwuzjXYQijmDVeejJN2oUhQFrBfKnmqf9wpJfVo677MvBCyzNvA",
  "key9": "48oVLeb8hyJxFXMirLCnGtvi6t3P7VVJz7Z4aRN5G1tu8ov5AehsthaSNKDDg8UvhthuXGZW3nexDPK9XPu7Ex8f",
  "key10": "3wDusPhEmjaLcXjTfDrBVFtXLREKJZrCHdpENt3XUsw51FC5CNgpsXmQEwiLTcdUTevETLtrtkRqCsBbraSooWkA",
  "key11": "dC4Ho69JbCK5fDg2pHBmcyM2ZNei979bYv8qUEDPoXPSKhfPxTTVHuegk4pf2dG5kZHi2k3YPbgjWHtEBwoqNKv",
  "key12": "aurqj3FPPMpPMEVNRSKqqNQfmKyqrAZTJffcttscQc5NBdyHT2gXnfpbj2r5pXy3apNzksTB5ssSANSNdsGNN3t",
  "key13": "2h3sSvVPxF7BZMkd4BcQP97WQbair9NetrajJuRDD9NqjmJuLYSGpCxQmdFauaA2jbxeQExvSvPFT8kAUjik5wT4",
  "key14": "2LBoY8Sk35B1j6bfiDWzdXC7dY5WNTZz5qfBeJ5napUPMnWCxgKjULHN6L3f67Hiur9PVrhmtSgcTa2crdbk3VEo",
  "key15": "2h6Xngv4XUAVJKiwyniXvZgKge66V1t2yQgYfLb7xUdqacGyjCQPsbpihDzUnB5tyTqWLL776FPotEAWyQTkheG6",
  "key16": "4ziNYAzWRTiLjGfQvf73963tatyArHa1zhw7rMVrYXAR56RxKC3GkF1v9Bc3YxksQZsWirGdedwZVBukBGgxgXLM",
  "key17": "4UvwEEL3CUbakk3aJynpM3QZbxGCjiAVYxSG7B3GtM127gweJ4xRFuxFb9qszaAFdPHXnSt2p42pwSteWdU4dtzs",
  "key18": "2XxDg3UyoVfXzJChcx9XhivE5PiGHVdW1NCMUTxnXj1m5gX1Simqn2FpWEGPj7jAkYBbGsBXSn29KejfLaFU4fvZ",
  "key19": "232PTuA3Jxf4xC4BGx8NY2wpZss6hqTgaYLTAw8XxVuxqy17LLGXeMeVqY8H3sj22k11yUzJWhWCE7d2dGrfMzzp",
  "key20": "3Cbj65qEcdCihHSysZJYJ7A52k2cR8us1ypYTseiSbUUHvostKBqcKcgaXBcfcA9zix2U4uyro82RoHPjZQhZjvz",
  "key21": "xJpZ6VWMdv4HqefKLyTqV9PGVuFqq4kfYnf33gMNtx2MvXWXnJLyGe7CSDYiUaiNMrAwZsp9e6omotkTuw6g39r",
  "key22": "4mopmRXgv53zJ1DS6rsdooXFZGyViZMFtRpZRgWHoJS3VBwy6nvBXXT3Vx7UVoHEgbVkg7LpGEvzkymRFrbiXRE2",
  "key23": "5y8LMXdDAX4b37gfpVUVyLwpmxGm3tdicTnKmFkxPdsxj6c3mNnszupUTXSqz8ZhQxGVG8PH4hQ36PLMmk25SrYP",
  "key24": "3Urte5jfE12VAPf7Aa6WUkSVC5cTAM8x7MQbdzu2r2gn7DYNxDhjakUmLyhN5fk5RSDjtLFCDM2v9irCGMcxBbPs",
  "key25": "4CH4yDoagNBiGWEJKFqZERFnJz4bdBpXWZMr1qYZCwwNBNCtgf1DseqdMepRms7qxzfgMfs2nz9iqSyUUzgEsDky",
  "key26": "2ky2wt4Yb5q93fxTFfyfXiMf5hgqUTP2xUtEU5DYFtPRHaJAe9jJrYEv27KpAw3xLMYmLPnwP6yaCCw48gnuLRA3",
  "key27": "439Cw7EtH7UXK6565fccengBhe3DR31g6b2WkucxufxgQdYXZLA2XUYpwnshcckjhioZSK4dLsJPr1RYM9Krj3LP",
  "key28": "3TukkG7xcsCiuZtsJ3Ec78KCZcKUWerJhihmHp9Avo3R1tCZ3JEweCkDzYSWar7ryqq4ZKLvdLfRd3KqDyHRZ5dW",
  "key29": "2pRBZoLZKaaFZiTeoshYtdx2nw7Ao1AsKcTCMNaFn7gv3rhAhAseLLLgJ6pr5ne3Ts1b6PrMMy7JVJtjRKzcGPDA",
  "key30": "FrUT3fcg2xjcJESN8E9mxMjbdv97VBDtq2xQaUvLDVErdtDLGG3VjdSxkXworj7MNaACRtWsoKtYq1bTXK5kVVE",
  "key31": "ua6xxTfc5WUGJykUsnWqcT6Ao3w5iUAUSi7be4bhW9r4Pvk5GXvMBBx31yRp2YLpB5XsSF4M6u6mmV3eWQKmFtd",
  "key32": "5NkHzPSGitTSjAoF5UcDVD3qcZcHzZRENcL1nj2xSaPt59e7UC2PVMLqj8b7JSdkaBNw1Fc8o3vLZZAFd7QBYTpM",
  "key33": "cypBkEXr7NRi77EVm2zXQ96Gs1FsxFSkymh8eZsKYHZfCJiQyZSveLYcW647VtuEspaSRuucogBdGmDaCCdytCe",
  "key34": "VwiJ5oaLdutwoAF3azKu2ybq4j5CrSvB2V4uvEiSb91pVCMot2UtRYjLUAHiP1Hqvgs3wTEGhfQUXoKzJs73LVC",
  "key35": "4iLEYt1FPodtSFaTPQTfUAabSr9Z3BRvyXUrFmjRNoP1keVsNmWHdd4fA7DqtaEfXCJSvn5pCy2ji8Qb3CDj9qxf"
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
