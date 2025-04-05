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
    "5x9DzAxyF1fwbCAUxdTabkzLWbJmEoeqrFrUyaEsbNp6b7k7RLRFioDZkzCbXWQHSNwBtxg64wSaGcADFq7F2M84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6ZdnVdyJBFq2KQe9rbtqDbmrbLdAMcB7Qnoft1sCzhAxAdk9zCPTZKDkELM9brEKjcA2V29k5ZKFAWFyf9Lh6R",
  "key1": "4ovu8j2hHddCQKVe3ZEnQeEgDDubkEnZ7woUEMqQcPYNsMHhTBocFPMHzL4z18ajn1ntV7XCARAKbwUsmy2xD8gn",
  "key2": "3dhGA7c8zZMyhHCqPLHoonKxX7mMc7nGsJ2JWTRHLBdY6RnS56g8QyAWMPXHwu6bfXPzDkuiF8d4dyq4kQYZCncy",
  "key3": "Lpa9H8E84p3G4KtBxVKmYHorf4GmxgzmKVnnYsRoWocj86b2GXVGHwDcRJ5tcqVR6WM3ZoSVE7YpHLdduZFGo2i",
  "key4": "5VzoNo5aThTwsC5Js32tjBL53gRHeXzovCopTRCV5ZZhT3wvPMXptGBs99eJ89TjU6RUs6FSB8tGA2QhUkv6ZL8T",
  "key5": "2heKnshkiZBW2rucCZ5nxYhfPC47cikArTsHFf3RB1WhcVaWpfPw6hVftbjnbVwPabwSJk7KcA2NDMMYnjvya94b",
  "key6": "4RzSQrVMHHhLVb6wNU2sSz8QMTTvM9w5KtnwMycs5SR5hknwrMANkpHW7w463NCxEkiJ31WHPvAvfwNRGh9tescM",
  "key7": "prNLj29EhrX11C8KPaRhjj1rP8VXFhm3rxLT8Y31fWfrcpXd3cWcybuFVjrZYjGyNd9stYmbosNUNg5zPDTEpjx",
  "key8": "5bF127eeuaQat1L2Dj6LtkEfaFnvmKCA4rbaxtWEyY2ncZXgEzLs3jGm5TaT1NRirpziF6w41ttQbyvc5NGoU4zx",
  "key9": "4WKzDFdtyJbvkVub5yLi3w6YFnMfNy9GoHrBxJSNPKpagbR1Eba8Z3JE7aFF7jBjaS731vhtpqPPanGeQHE1uXGv",
  "key10": "DcpYrprTu8EGmPaKUCxyzxKE6nygDLUAay99z7mkTVGNkCrTEqSmMGkt5xo6tWMN9J8PSZPrfP2Ny7UWaqePLxS",
  "key11": "3NreJ8HLyFq9zaB6RdnzWZsJmsknryMTwRQx2WC4qdagWkhiWqZwuCbtaqW5d55TAaYsLiEtvpVSF3vGR9DbksS9",
  "key12": "y5VGNneP1ouhGJFyTyq4HH5k4aEBNsAhQyPxCnQzAvMoQcRXtCPoe8X8qJxog8Hzg4pMpEHgfX63ACsF8VconU5",
  "key13": "45PwqywNNnXTpSRqjmkdR49ZjYnWKbFH2U9vscF67topQH4yDKGa256jsR1cyu3VFnUiySUa2Xs9W6MJaWxjL6BN",
  "key14": "2UHQi8KZi1ttqEC1JsxYicYfmiKR68NpwEnD4EDtGAdvppyr2mU47rDPh3eAsZKWUANyZcMWqpuXzwLDQNjPH1gA",
  "key15": "3fU2yGxtJtc3ZSZWgzUaa9aPfS3XD5ZHop83bYYdMwjyV9yS2HF1gewAqpdUZeELgmccr6EPiQv2uATUEQcvjC4A",
  "key16": "ZczEnJ9f9PVhJVdhkbqHCGNndVwUsfWD2Vii8ueGEt1smPD9yoAfr85Lc7ZCezLzbK77BpgjqDMKxmvxYb3FXmp",
  "key17": "mc1482CFjJJnpkGFYMT9qmcadnRUEWRxhdjDvfBMAgTKCTbpcJQ3hJutMZg5MxTWv5ijDh4qJ7UNYaUjQa8ZQEU",
  "key18": "GSzfu6TSo5P7ai3TnSsXFcXXtvi4suJpm2hWtJYRq5iEg3DB856wVxhZm22A99khobxooo7WuLyiPXhXnqCXxvx",
  "key19": "2dQ7AqxRSvf3GScFKx8BtyH3do61iYi8uPVNgbhLdc2YrN4sr8EfgmACofqwpx58EnEEowYNcbpGBLtuiE9ycxGJ",
  "key20": "5C4VrpKQ7ZCYEq8VumkZNaXuYanLwY2fKYkaZRsZmAcEEraNjCbk1M9BEm7KCzXBrzeWSXmVnEKmf5cRTf45EJ1m",
  "key21": "3DzjEYsq483yuBAfTPuU6h8oReY95q2wEs9Mg4yejQJAHXjUvvGJYyRLxz6YspCcRvTyxyPi8tAWPQqvyUFRiPK9",
  "key22": "53JaVgmcuGDV7ip1upLmU4xVowGVWUbojpqV3vDaHXxGnbkiaBWHAt3umgqkPYRrbbT5qdBVh47C1gfcGCHePAT5",
  "key23": "3HwVGjrhfAQU5To6Sj73ka3gbs39NoBrq5CNYKUHkaXSSCTDUbocCwmP5k7ZgFvyuH5pjMLfzuFqLG8Zv3n6eYfj",
  "key24": "yLBsBL8JoeKMBGCDgEowAXDhFG2CjVMKMXSm3ySi3qM9xoVzzydbVxPyju4ztyZPTEb8s97dYbCf5zVpegcBTab",
  "key25": "2GNShAaugw1nJAPUaqC5ynyS2cgNWwPdsj1W34uHnABcwo9iTPw4PwZsJuVB1nT1M7Hv6otuAvvQWfzjeZZEr56T",
  "key26": "3roQMxdEnS5qZLd352xhx4rJtBKqwAKEkRW41gcrcZC7APTFZkLdPymtZsUSCFHw1XH3S3KtVf58A8pujtGFX4vU",
  "key27": "2yeWnkhKQmpViQ3E7uRNT938H5njLpi4ZUns9bSfQjubH9gJq9LV765L3EWnxyBjb9TyMRzQAoVtTZt3XC75MpyR",
  "key28": "5CWo4g2KVUPbs7qAiKkJdXWoCvpZxRymtNA6bcscrpL2x7w6Qnp38tcV8RrBE7P5r5LDMqLNsifBge7V5itJoS91",
  "key29": "8fjU5KpBEYStfzbPAxUstrWxY5VAkqgMqnd8Uae8Y4pd75c6Hznv4AEZdSE97yxbKUzoBrS4utPN3xd2QEBXVfx",
  "key30": "39ntxLhWsCtgLSEB5Lc3DhhpCp7eKSBa55C6zNA6gqFrV14AkzJ15RrnGZ7Bxeapqt4BdjnGPMb2nJ7p4S5DEfnj",
  "key31": "5kQBwq2bz3PsAkXtvE1a5sFLizFzXfN3QJi7EwoNm8E4igEQoo4MvHWxVK5Wcn5xiL5YDTx6B2duWMbbmVifFjHG",
  "key32": "JPiib2PmVQ3vTeLacC8DYgg1hqqkZ3bxGu9wvEUbZ7KdHu4UHWUNXH3zru4mF89fJpjimAdJRcDR6GfHAbhibia",
  "key33": "4CH7kouN9i6EzUattsbJj4dczTj8CYXNiRtiCds9Dti9WRAbYAhJsoPm2t5ayugpUR6hf7zh9WUinap2mL6H7oKp",
  "key34": "3wVSAZKfyZHUa8F7axneT28C8dRgHvo5PEUzz5RMGF4WeGJphyHVkPN1TRd9DFTyDbM9oGcoH1WJb9hMwNcbMwqj",
  "key35": "2Cv2cKjV2tFRi8JxqJA1aS9ctXM2895boKDeU88J9yjBa1UttVrZVAonBVjRfMQBqVY9krN89G1bAEo5uypR57Zu",
  "key36": "5gfQXNzmjofNcCWSZEaLgLfTn1tqzxdroQ6qYoB95De1wEVGUyPuXYB9tKUAWBSieNNRgfmxSghZ1Ldg4A2pR9kd",
  "key37": "4giYuJhEC6LfoKMdgiSnBApKjXBH2Sd2hy1A9tYGVJyz3bRrFEEPHn7iKgJxj1zXXX4NkKXRsjtseWzF4mVkmqyy",
  "key38": "GdtcTfAUQFCemLEjx98aSDkwdSuc2nLkVKwnARicNC8yi4csECRX71LTkGBb2h6NNyHcyWu2shbmfgeghzr54Qt",
  "key39": "4wJrXdA2K4KxQEYj9uLV8RzN27TXDMJAgUozAoTgeKXTKHGS5xv5Y5a9FZFUGUtXb1ish5EGjm8gjkTg6ZAcUnpu",
  "key40": "4ssH9wakw83HNaa8WGQ3Lw3G5QnBTYU7ZWDGohrtBvBXa3mV8ZjsgBoLzuCfrVA81ByBthRpWU9tSijQFMEuGWDm",
  "key41": "2NGTgY2gF6o7KYuVVSEE8u12BPCkUyVn83xydsR7z7vtxaBCX86kGg12nNorGGMMP1oTVPTrDxDRhzeB7QAU9s9J",
  "key42": "4NHtnoH9btjkpSiGX1Wy8tDxZ2WAKG6MuFm8VqAPjXjLz6KCiyBApJAgMnWTJd9b1LT7Wqgbh5WWBCYGhHfz2TEB"
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
