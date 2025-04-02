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
    "2VtqCquKVtNMm5x7xUbqEtvRNVojsxNG76Ts6dUWoRxqMzZ5UhYCAvhYEfk54L2vQzJLWfi2sb5GUVsoUw7qegDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6pWnfg48d68eMPWNUuGRycNuSmw3kLdNvKdo936uMFkKK9gxYr7E5yPaVgrQzJp3arSdXBSuydvbniJMaowoDa",
  "key1": "5RFzxu5MEZP655zijoBz8Y6wVyvas7RGKsbhquPZd3u3SPdXvuzGM66f6WrALkUGbtqcbPMt7dhBdr3qTAJ7yeJ4",
  "key2": "3mX1FKD74dhyCPq4yd8mpHCuwu9W7wiPYuQAkVMLWrnLFCZqF1iyXhaLvRtTRLi2pqM3GP767p8RjRtNzBVVxbnz",
  "key3": "3AfyfV7U4KzBBK2a1DhzB4vVr1NaiuBzswWRppPSxbfbTQ311hyTWj2dxXu9mzaxHLvCMsXpVC3pcJrKnFRzZ3HU",
  "key4": "29eJD9g2rS998cutCtApZsUk4ryFfc7sA4f54se4Zu9nbBpwNRavQtfGCg5wTW5kCN8YVsC4V2bmrLqU2DBHt4sX",
  "key5": "336zCXoxi1bcuCLpAJ24uAEBP48zDXCL5Ntt655zWPqhTmH6TwbYTGGxzY7sEPWQzWKUbB4wSRDRnxXaZnggLYsD",
  "key6": "5SYr4zXPxqD2EuEFZaBquRLbGdMuDKPHKdQygzJDMny7yifBchW5VfQFX9LNi4kWwueqRj24q2RNYCLJn8aX2cup",
  "key7": "34LEmcNWtcDfVxD3LV16nMqzRBtvk1Q4JJZF61XofBmYxWMasjJaSmUH6RQ3XCCyVCwSZtSb6xZ2YkukYiQBZWh3",
  "key8": "5b5rpcG612LBwwRTj8anGNHrQzZATCckRnPGNdLMTmE7cB8K6fLLHuX57s5Y9Manvx6ZwGWsGDiuJqEZB5iEMmma",
  "key9": "2L5svAmz2sZB7S7FhC32KaQRhTXHbDoFkNifshTJVgJ3ZXCiwrhss5erwYPYkkXKDLKHCGuLNy7wTV7wQ8o65DkV",
  "key10": "5M4ZS3aQ24x9wqBdydtHQFMqKF8NFCyLDCPEovNn9eaWngmwjaYmyzs7MNL7VBNJ6XxHtnj8F5wURJyFXCFchxzg",
  "key11": "5oSTaUeagvnVikCuTtwAWp291RaazRGh9zks6rNRxsNiyuCfbysfjZg9wFJvBBX9WJS31eJpvuRroGT4dEQZmoP4",
  "key12": "NnUTtrf2b55onccw786o9tXyonbcq9sevBCxmEHxECXX5cYYrDG76FBUmxjMSGigmckKqDEJPW17pJSwaSDou9L",
  "key13": "u5gSgbeSyfBsKeYm5J56PsEjsyUyQS3JGQ1tenuttG9qjeTqMpW99SkMmyXQDurbFjwETir368MMQb1KY6VHESs",
  "key14": "tMfNufhfZth5q2XjbrEvkdyQi8kSJXMNjgWT4pKSAEVF7W37x2sy2LW6c43fGuMk1QaqeQB8JEEMpgK7yhPr9nZ",
  "key15": "5wwSU46uLn83zy5CRNJkTJCKUbNaSumLK5MiDWxLxB3z5LjcuwjZ8qvVeJc2esNgF58SYRcb625o5F6iDDFrzCyX",
  "key16": "Wmu9P1TxDrG2WY4pWE7nWZo78e8CeAsjsRbyAC4wUVyuJFNvM82fTrrnCpybZaThF6XnzsByXs9C2Ubt2kKrGGm",
  "key17": "7yLsA6TF8DmBHFESV8z5wrM1kPewyseKfmNUD7Kqt9QXsU6NZoXYQCtH2XiKR8g24doQuV5rwGYpNYJDTLvgjAf",
  "key18": "2kruXGZUgbZ19V9xvqN4nYSLJMb8rqGdmQttZY3MC3o73hWAEdscBYHtSg8F6eXbTLvvMB3S31AZR81myPcFZ5SA",
  "key19": "bsW9PS8dAFgXyCvoGxUKjLiU5XQ9MjpjoVt6R8QhHhs9sSrLqwwgxCNSUQnNiho7Yqj5WdDsMMCA4bhzcuso9jN",
  "key20": "3XRHRGvzTWFThDqVBaL4ayiQRqUWnTWQHfwSyFWEhrsHkrTBE1UPkSC2BcztihmoTKKFvdLJb81HX2cShebNSKPV",
  "key21": "4EKrjjQ2fL95aY9p22jbiLJupMJ2RUQ4tFivcyA3bgvhbrhwSGGGxeBy6fNHNbnW9sEGheamPUpRfyzPEVP3Rq4p",
  "key22": "4yFMbJXTnm5YTVNr6pSJgAv2pKqycuwBn6kJvVg1MAy4Zz3D7NZsjrr72DgMCY4EZitMHqLqYvo7sA6RFnUNHqnC",
  "key23": "3UTncEevcuNdDyiieRPwQtPzccxuFDGhxzHReiMP35xRsfjYC6r5ogDqyb47hFZrYW71BmaRK5wQL5rT6rFjT7bz",
  "key24": "4GUzNjD5pspcKfjMhWPVTcoYJ68gDQ2KissbQyM1YtwVGK4iV8yfFnFq9tFKNipnBH1fLYK9eMugjNaZmD2A6Zjg",
  "key25": "gX55MfEBBWTgvuCJig5sufuu4A7Rd9sV7MU1EhCYaUAfq9d9TtvMWsfejLeqk9ruEWCyZUU96v77333Wcv7SDza",
  "key26": "5gfQASMV9hVPKnizCC5KUkkfcqnE3G1QQrsTvBveY5VqXs1mJLCpmRUcknmBi5ncRfsSLRX7mQLJvCd6nN98NJLU",
  "key27": "QXxDvy9LWduK1mdWSTQY9bR72uPg5fdv5ZpcYnXUvubb5ufFhqv3CjJr1KjeTM31Czx4ktCfxf6UCrt88YLPYTR",
  "key28": "4bDLeBCsqPTpkoTYXapF9Xmy9sqkGU6LPU9LXGntpSat9dacdnjs7aVscHwJo9XxTHjDqez5XLmMBAwf1sUxczTV",
  "key29": "3hWaRVMQ6GnnqszfAXwok54PVuN5zdyuCdfBiVZUZ557JNNu9k3GbTyDNvUBbs2FGDiqrekHUdXeUfbdKNYYGsSx",
  "key30": "5rjYdhG5HRey932jz7WdzHhNteuQ8xLgQuMnohkBPxfMssuJgq2rKKCZRnyJuDH1uzYvWQi67QyVKWr1CAjXrkFm",
  "key31": "233PfTvjzp7oPvGbPk8KqxZMxT8EXuFcjLPNCAcoisZADWCZbCLN4JzfkBcVKo5LBCF3Mb9cXhXYNRK31FFKizdt",
  "key32": "65CPoar7fkakc48ethj6TU8LmN6fLx9CFi7bMbuj9J5McB671hDmwjoCGVbUhg4Yo27d3ABYWm52rvMvsvYjo7NN",
  "key33": "5NChGuq9CE1ypSMoXzt4F7TDKHiPHndGZTv2d5vokBac26upVXZPfUSaqK2gNZDvnWY8HyvspBrh3Cb8Pca7y9e1",
  "key34": "622hWr48bRVGQaSHbNbJ4UWfpsDLRTzYTxh5t6WdKh2399FStAeeK93CSsUb9z2mVomKPEwUUFqcKkiLgJWBujP6",
  "key35": "2TLwRM3bPUz2hYAt3YGMthdQw8JN8QjiNSBU9BJWJrBpEsAcW49EWJinN7PQxsSgJHB5ZjmTQZggvxCEd7kST1Pd",
  "key36": "P8mgLBkUjb9XwNMTbSzbAJy1qyQ87W8erKceZcTg9M9rpW4sBYM8GeSb1RaLq2ZezTX6Remv2xhwY1J3GnrRqoH",
  "key37": "bz32FLoRvKvA2GZiA7XCynMAhgRdrQ1JVBdaz2qcCkJ1cSSqw196ueo38PdE8dxnP9bCFb2hbxMLnbnZxzcWA2X",
  "key38": "3T9pXxTonovtbZ1FgJ5ejv4m3bLHGfJi6UiHqQkAmtJoEQANGJ3a6vUTVg72VTEc5Jpf86Aii5hThjzK6kysSDw1",
  "key39": "2kks8g5U2yaoASxZPh9VUPJS2dFNNwMD3Qebv6rhSSjUb2WEVT7YNffGEi6JY6GegKSEWYZYRFAW2m8Xc35ZD44i",
  "key40": "2aCwrGNfEYw8maNR1u5hRDWWAkTvxWPvnd2WnwLcGtx9WWAs64M1SdRVLy55Htoj8dr6nR687GEz2pYk8XYUDg6G",
  "key41": "3Zd38j2X7UsYdsZNrJ8hZvqiKS1WNBqLJPDo7SG4Qfe6EE229vbit1st6Wawu6hkaPBe6iQarMxB1nG6ytRcX3AX",
  "key42": "2GrjWTarPcuPMydSFVMUu8B5TtoirrcMuykAZqNG91z26jkvK2AR2v8arcgXHncEKMaBjvferUAMjQrDwY7KvuGH",
  "key43": "2wmnuoPn4CyGPQ5wytTBeM2TBLA4gZVEh64xayGhus5gaBpG6TPrDgkE46hi4PNnoWeQGwmUV3SDdaBUcHaxttie",
  "key44": "2ooYaZttAcmdAyw4gSR3GboWs1TRnFSFDtA5nJkkNJDjUCAbPkWn4AjLRZViBqmdQUsydMy2PEMVqRifYZa9QFzg",
  "key45": "2YdPVj2pc31pq5YCy1yhYrcja6Krc5xHwUj8fBgHw3vYdtP25fyZ7DxTtfMcWzmfmP9VbpxP1A8g5ECvkEWRhuf3",
  "key46": "3ELE4eRdVy3SCiFnsuyFVn23bpdPowAZ5G8dc2Kr9hMFApUZVU8R3yYH3SzwKyf98ub6AEvcNNuT7CQrsgC8uubr",
  "key47": "CGoesZzsAjNeTBFdkmDh1UvKiKcBFcgd1wngR9Nv9ctwsWpXtdKW4xo3N1qjtkXmuvpH5nTwcU5dJq5GjkzHopS",
  "key48": "3tKjJ834SCa2AvfhKGCbM5rb5ZABDnkLYrXtGu3YsKeezyfPzUkJQ3F3tv6Ufuv1ibjvE3Re7itCaY7rY7eSmxL6"
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
