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
    "3rWQv6r2VFpJKp1eDqtAjn7EYrU5gATnHF1yqgqc4zT6iYN72ht6kyWXayzFXJoUbv3TArsWaTE7L6yMtVJxAFK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2CKWhchPqUWpiiq59bLf7PZJDQ6cm1m2oHgMCb8K5Dx28HqyQEiAjQknxLTN2L2TFb5SuHzWWEP1eZZRLPXDRr",
  "key1": "36ZQ6wvBLTNZShDuh98CvNUu3BwiixLfG1R6Qz86r6ydWveW6CfLLkDd3f5JJo6KjotgSniic13AArxsyrghhhv9",
  "key2": "53bUA4iFMkCMS7St9xDhXj85P6ors1cvJf44bMaDkcUC3wvrRZc636RERx3yCpa2sBQdzNbtGYKVuqXMLMEQ1cRZ",
  "key3": "3qAVhgoGWqG425cFD4ggUBomctaEw86CMYjf8QcUmMxRQDgTZVwzcGS4a2J8gZW3Heok8uHyP2TeLwihNMiwyBGE",
  "key4": "5HyvtYtYYVguPTZzLNuXZNyXra1Xj4pamorAJY34xEwvrLiG6xj1zvaYP4YoW8amTjmdJzgvPt5pFkyeTweQetT",
  "key5": "Ra3bzJpggNZvk1ZeHNz2cLm5KFRc2vmgBkHMxN61TkbcQPmp2JG7jencboKsM5AnAUyvNbocPHDxALbZf1HaJzS",
  "key6": "2dweQg7FXyuwyZqqQ19afDdJGkGgUv93gqSnYFxuvSyZfqCGQNwyCbBsdDTiax55DnjEwW5uQCp6WAJxtvo1ADpj",
  "key7": "EBeysFaBvkAnyA2H9UJS7v7KUrNNoJW2bHHehDjRctkcM71UKsxp9r2AZMCfiJsDY3zCVCLGGACqvpgm53dbY1D",
  "key8": "3PKyZi5CZWHma7R1ShSXNV9KrDUKDXVecUMs8GXtHtyTeeNNdV2hpJvB3BbmBJpibG9FgwTgQ7WQzSbwDEDKVxMf",
  "key9": "WYCRnLLRDiy9qdyjRHSCJZeinNzeMmyTybKgHqiL5Ehi5kP5QXDxcpV3b7WkCW6FcTjxLwiKZzbZoJUkgbZfcFN",
  "key10": "3PDZ8DiwHEDMZuKpfkDKVtFsACm1y7vJyJbMuyjCdRCmiUsC9XjD27sRxF9EnzFzENMqVqWtjeHRg9KNrZJXmrnG",
  "key11": "tadUQChhwwQTZuQ3xepSKuZX32VoqGT7SUuPsp7Eifym1i2r61WuoXDxHXHXxJ8cYXtiXnj1aT7XSpZjxiiUysa",
  "key12": "5NBCqx74Afh6wYpiCQjUdK8EKR4C7Qn1wrtpyUuhaoQFf5uVwdc4CReY8jbFTDPoRnFP6G4GRakCLTywV5rU2rYv",
  "key13": "2CXmrgAtsHxboV31uem4sLkqAgQg6u4KDfhMiQZrRnhNRecJw4P4B6hW461j6MRe7BSzmem44pzJdbcBdqZoLPLW",
  "key14": "62UcY6V6EJgCs8UCuntskZZtcrPNgrguSUjPLUyThbo2acybFVrkAfDhKGE5s7PCC3g1hZ1KaETZzXpjvJ4b7cWc",
  "key15": "5jBdMrLCfDRoXXE6kh5n2ptiH9zgTsLXTw1ixojF6SEPuCtmGyCE7PdCZr1QpomMMQ99LQUA6CNfR69paiX8BEHo",
  "key16": "63kDS5X6Pkp7tbrWECwZrL1UPxypAqnE9HnHGb3figCZeUvryY27UgraRc8BS5zazDiatn8TYc5YCxwfjxTwFrr9",
  "key17": "3oLmga7Y6e2S33AvfLcKBe29Lp2oQALeG2VRDF4xVzChie7VK36TAxLpEwL4ZkKGk9pUp9UPhaoNFJrwfUguUWph",
  "key18": "3Eug5wtm281JgkCtJaLjApP1LBztYWjF3jCsmoF7poh1yh4MbRPVVXdTsZChLYfnqLfEETYDRv1AtobccYkFEHLC",
  "key19": "eKrvERq1rructSX1WaHomjhTcZttGgnk4SwriimUJBgFBugVP9s34GPYhqeARgwoUti86KuyqUcVrTa8n2kX9B9",
  "key20": "65QWtnzeaiNjZrHG1wPQ57kZwxDaBoyeE2bYyFYsd43tmot7mz1zo1YPSyN1dexacEBfGHUhAtQoHJmJxAECSeHP",
  "key21": "2PnVuP6hyRKedCLb8aCatqt9EqgsRAfVBGjBYEw5vDCfHBiUKNjSRHGNNKCnLvDWMF7N6YeGX4rr3kvTWL1bofzs",
  "key22": "YXtQxZNQMtvU3Q1eWjE3WUSbd4aawgd4zxLNwyDoAgtpkEQdDGGrDtAxvMczZHtPZKmXUMAuRDxMUHoBb9t6rmJ",
  "key23": "3PyE2vqXoLEe9KyHoruSKKcatwK7jyBfSQjzWp7AFFrq2kFcyjZPYmztE6WwC8KQD9Cks6aqLMDmUqiAzjnUSS8S",
  "key24": "2yVrg3G7XkGQVNp7oz5Gq6ppnW1nAdE8SKtgUNZoGRAaD2gsaVdeqaA8btiMpRDq4vJMKvbGXn5AwovhitRjVwUC",
  "key25": "nTSgyQDqPHrA4mQaCwNLyLVGWqDhoQ2A3qNEik94Bn7xNo2RsL1bj327LzUfErJCQGoCDcmmXBGSVspdgsvoCLZ",
  "key26": "5XZAJtZpz4igF6DcYF7KV8Q43r4PEpBD2UmiG1KbXHGyovgGY3JYUDy9RBo56znGZj1hZTqYkQYdVy9U8xPETehC",
  "key27": "3tYs3m5p74YCTgstdV4RuT742mTbHJY5MHnruC6P3zNwHamSTiE58GKLSAz9GG1cQ7U5CCCudGj2dWyNzbLoHvsq",
  "key28": "5NJEXvbHEZGhhZgXHKQZnxagPmtuudThJQ86EmWbqTS8u5djB4k3oW5pfHykKiYL8GxgfdAY2AqXqchgLVQqkkFz",
  "key29": "3tR4Qj1zinXUGen92vZXf3wcEnacw4Q1RBjtCZiTRAB13uR6RbpmZ2e5aQ22QLfcsGtenYzzudhsJti2HFMzdrQH",
  "key30": "34r8RTEibuguct8oPWJDQfKNqSDTAfi9uEnCCM9BQNs4rDTEd9LRWnxa5bE1zd9P8p75qVzxy1xVn3Lwwu7iCf4Q",
  "key31": "2DhQor8T6deS6PmQh6bNdP85Riu7VR6evhkeeVnCBxmhhD4sTBXs7YYejRbwvGAvARd5BictfPc2LbWJwGxC6fft",
  "key32": "ox3UpxRdyZ3dAHwcBgXk6nyXmXrWKKmb4qQgup5dyW913m1YZ3bdjGZKGCnhiMfxnQT5j9xFmiBeGmqZCis1zk1",
  "key33": "4ASbS6zRatXraXsBREjqwjxLVgVQLakwbHf91sjvfWudp3JX8iHvxbHnH3mhyserSiHQwkLaYP2k5sNxNMbzj2To",
  "key34": "5uLSV9S4cExq9PAytjEnDpyStyYx69i3Uo8RUFYZBm4qMY3rpiZEH2qg35s1sgUHNrBDEazig8b8wM2xgW2mbgFD",
  "key35": "4ewCgxw72XJZte1gJpk7a2FPnmVSLVzDWscqRrWdDpogNHBCuVCKamNQHg4j5zXvvWwSaQkmjecAtn1ZZ6nvuB7B",
  "key36": "4Kdv2F3AC5YAHvaXitzyQSYSCWiJNj5Ep1vGPSNEm5FHix61St2PUfwm74mxEeRDkxnZWaHbk94VBBZqKSfnjWTp",
  "key37": "51SQehWr7YK8CADYJykAn2LDvUvuc2DeTKzEuCVYE919VNvT9BXh4BKNZPBJ6eVQSHwbGiNU2FBqqzKW1RAPiYh4",
  "key38": "4Q7uwQmYNtshehjq5bo2KQUedideKNUpuFSjiWteRF1ziUGF7cuoMk8RwA9ef2rQL2FUzyvJhE3ExhQQivEwM46S",
  "key39": "4Ta1CDgpvWtLQfVPjicn6J8HUVpNYuzidqNxjX152RQtMNXGj7Sxx3y3nz7Qcd2Z6U9p1iFZjhh9RdNb9ZKvGi8k",
  "key40": "EfBgwqTFE5H99qyd8nYZmPkwD7DgKReLid9wS5vWPLYJFWUPmGb2xbWWSZQUQvcRAeHsHnwSrJcAdSSf2JXnji9",
  "key41": "5aUiXk2QPZXJ5W2YAWQYqS491maT8BoxeG8pweA9hpsLX66w2b2VJoj7T76QL927uyucs6gEYvvNtyEMoJa2M9HK",
  "key42": "2Rvsj6hUVRidDGKgcX4jEPz9nj1X68XRrnZZccYniCv6LY1qGpwoJujhkHr3r6ybkNgrjkjSWFkhUXSNhBBmSVPk",
  "key43": "QSYrUo9qpga3enohXQfPYPDFkYDAS42F8N7MNKG7J6tv2FSaXFtzpJ5PP9G65n739FhvCzvbkot6VNtrRA74PC4",
  "key44": "4Wyj2oNPUttT9TYSNfhmRf65eb5UoJPbuPuMTuVrJKmMsKND3urvQERoiWhLooxTE2uEPBQdsMCX4djMGGUQpHyz",
  "key45": "28yx4nEw3NmVnVwbe2EcKG2QZ42ZUVdLivTF4PzbsyiDWWWSN1EHfkbycqbKrv3vA2VtNGTDZj5vs9WzrqZkpXq2",
  "key46": "sQFrFpBPSdKmTcZBviYRJ3MmV4SvjrZy1M62mCEZjUNhEiDQ2XX1o9kFgp9dEtP6jtnumMwhyKjXpWgzLPDbH8v",
  "key47": "J3CE1jefMUoqSdwstXXbN5eacPVGVd5AGffa2MYR3GN9DmZu3K4uEq8j83Gxj41Z7FswJfAEo3Vv1GCGZ7LRGMm",
  "key48": "61yaTJJ8aLGBkM8EtvNhRq8HSV8z74bcbJk5Dan4VAwcApPvbZy49LMwFhRAwDcNxi5CNF44CKezEojo7cqvT3nZ",
  "key49": "2ubqtiQSA8F1jTJsYpaznHdW2wysaMsK7bgPGbo5tSWUPN1qda7fWut8va33jXtygpcag6EaK7Hf6NuwsLaaa5KK"
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
