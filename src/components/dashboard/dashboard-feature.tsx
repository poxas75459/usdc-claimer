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
    "5pGEtDxT39wLN1vtb2xiqNmuVJZZpVDFvuEH5LiJ8HUdH5BNuPSs8n4hFkXFV4CZwtVrsZC7FCxW5n6X4yxy6Tq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ym8PtQJtpc5amKK6AmmBzV3MnEbeyfyC7h7mPM1MMcv2PcEEbhmdCTGGaUbYtNa4hiQBDiTxxqPXpoAhYUsFKnc",
  "key1": "FxcfiKwVuPYw7pUbpzqTgkyU3fFiDdquxPxbZyRKyMjCNKGUoacxhJExrDKUwf9CKonKgCNDoRA9Ku5gGnsBi5b",
  "key2": "2J2CcKH8d479TmyuSMoxoQsTyFdV3Z1JXWrXxRtnochMFjNF2wUVm4tVKv31DzK2tL6NiSicsrmZup1GemAHFiPT",
  "key3": "2edsx8yqJdgBJgHeueqC1kdGCaBS2ho6pB42uNTx3k1KV6ENSJUJd897U6f4HPVUcQREHUofaFf5vuuheMKUifbg",
  "key4": "2JFyHUU9XRRH7GDvced4QqZ6YqoeH9bnFwzVsfxSkgLHt9zvmTd4nwBKboqYK9s3Lzo4fFJrmfyEpqu8FDYEdFWD",
  "key5": "39wUssw9kDHJSW61UNxCFH3JHAyHaJnowWkYHHu1Nv3RQsq9XrLrHeFZU6PXxabhEx539gTDfBNhVtMoXNrcws4D",
  "key6": "3QzRAY62nwRaBrEctEuKFEAFC8eCH8h9QCaD3iuqV2iK56oJGLwATa7CskA6c9uUpu6eyEk9eZVvfS2uM8WzdZk",
  "key7": "4L4n2xVEvPYYkZA5dSxRJgLHhgEZoCkMncNztoDAGTeBkWRWeHh3r65zjCZeg75G1fqyn5YRr8fnwgH6WPVi5zJB",
  "key8": "ecaxauYA9QDA8WHDPSgmsYpGabdKHycYhwxX2LD34ubRgo1Bwuv4PRxkF4ZpzD5ef9pyG71DWKAthh6K3VCKJC5",
  "key9": "5jKVhob27e5ywtT5FSYty4moJxKTM8Kufbs3BGrdypYoFqWgfgthHC49ZsS1d1pubPpFG19nRNhB5tVGzxVXkLxF",
  "key10": "4Ybfa78i8yqvGiNEf4yUfAPKaLcND3jycWmJzUk1ctQReAho7FtJEdj6eCAuQ1Jbxx9YWqbX2cwx87Na8CAyKHav",
  "key11": "3QqMZs3uthQe9rV1nn7nhGBPmnrivpqNopRMCE6VQh5LDKpw1TKgRUUR4wRN7MjirTKQr1esuZiiYGKTXWM9xLvZ",
  "key12": "5uHm5HiHhcDLmuyrngK83Qx17qArkTDRkgKcitbsbchNrayoQR2yp8kmPVYADQpAjEM2iCdudhYnaLBD2jTpsM6b",
  "key13": "xqKmbvTPydqXwmjWDaF3bWzwWn5xoXuf7nyX6mx13fZRoiCAPUYVN3FSD1DeqwX6S4WJpTLGv1ubbYrM2sQ7aNp",
  "key14": "HjniZc8fEk1PSzqLJXXatZJw8s87KCKffWMvQ5dHSd2UEZn3xoHMpC5EvsimVFsB9K6Y3MoqdDWY1FUVySMNScv",
  "key15": "9xY7ow35qCyhmZneUbihPUgJm4G5i38HPzz8aVo4uvBKa5zuQ13neiKwSnrkwRwt46Aq8jxD7tNzNmj6NUmTVvQ",
  "key16": "36SpZfymnJGyQ1vbSsuK8YniVnGmT3z9J4VcgmtmUqvxbasF6G3QcNddo9cG7AZvXYXAfJJ1GtdSEqz18hox3QFu",
  "key17": "ntLcVmev3gftrz3MdMK5pBYrNqNzB2Ex9Fz4Hf36sKmYfstExDvuwYpbioYBTCZDUHmJygskrqLTZYHpo646d1s",
  "key18": "4fCRnaLbu8NWLwSfb4tGjYTrxaz214DgRqB9Rqc82CFq5JyaLHueeLWSB9Jz9wcMhmSTnkgHcYqUYxu3o11cV1wK",
  "key19": "53CEsqBuszEtts1Tj7W6n1FzCCJRKFU4GKSWYE2JnQcuzQUkHFhfuKFJF3oD8xe6WN7nFaxGm14eyf2Eq3SLoqMj",
  "key20": "6xPb7hMKdwHvt6Vtx6NHxkKt5ec2meiGEp7YV11XWm93JBhepmx6EgvPVkMscsPwKRS5BQ89cqRmKG9ELEDKtDT",
  "key21": "3jVTGGnTPSwy7hZ99EQ5WBhTGGpNtPHaxAcWN979EzgME9Yh1RjNs19wCMfJEMosUgaibiWewoeNfQy7DGBXjwmH",
  "key22": "2yq7nM98Fx99bBd5BZkpyhsJYCYfGNEA7XEfawLJDsu1PzADp7ABZaZkxVo3RRVxZYLdM2mwnVT3StmGkkYQAyC",
  "key23": "hmLVXuT1NFJqq5xgTwc31rbJb3usxwKaw7ZgnDiY4i9zr6DKWLZRTbGQvXKgnoACjzMjeBCoQHnjoyeKiraJNw7",
  "key24": "3M19kWkVmmA1XEhywvJjSyA3E3LoXahrVMu1eghErUy3XFxPD9kQL78wtoM2f3jmnX3gANWMgGhSdqsJp15tHpXy",
  "key25": "4CLmsJyfR5Yivz3Gf3LwU8yYFGUATMyDb1gy1P2ofkkhjSStXDqPMSaF6q9PraXwZS7bcopvZJZb4TQJejyNwcFi",
  "key26": "4s828zo9bA6oTu8CYLPxFyR7VuQLsnrwVTjHzNhCBusL7vvukBtUe9fNXeoeCnAqDQUFPQVRqc4zPbLRbdMGMEGa",
  "key27": "eVvzutF4Jw9gLPX52dzr5kKdfAeZSwrzbQ3Q3LV9nwNSsi4w7sMuHmxREmXUwz6bxrxYaoEK81qtWuaieVkgmzx",
  "key28": "8wRh67N4xjD8wwhfpFcSzNitpVYLYvZnbrQEz4pe6dgAg6DKYJS3EauRquKLEeu6pE7YPuUMR3xjYVmuhks2UoD",
  "key29": "2KdLVR1jx1YnJH2TkX39gc3LYB6jBFKAdMkoQX93YLpTLHhrqGn58uMYk8UQtEwj3VK2usf1beksbjDJAV6cvZzw",
  "key30": "3K6ehjbWosuaguXx7y93azdmzyZrBuCmbL6VCyV2tM8javrcg73dyarN9FpyhnL19usGBr3ce2TaHhSNfkwxJQnJ",
  "key31": "4HF9QdC8GdWyG4XRKgP46xT9KrCWtGRZrZuWj2j7Anupe158oSvvovk2LhWkkbfZoUTdBM7HHhGLKDXtTxnmymES",
  "key32": "3NwMUfHKbHAYQt6QsPXNMJWhNFuCrWq5baBcgj6KrcD5fiToaJazGM73mgD1CZM6QYB5K5BaTAGJAK9Jc4Cvjuuh",
  "key33": "5fQnrVx1ZEogz7gJCGUJi72A5ghZCX26zhhUiJiDBkLk8AQ3jXTRnmXVGHYPrT4SpLmZUS3q1aRVJvaBfFeAVwwR",
  "key34": "5nFt98UJMXDmxYw9RfYj2VT2mFzxpgqMRp63qSXRvzr88fJXmhGUS1BcygurUuNYxZbrPjuBedAtH62p6y2W4M74",
  "key35": "s2VfLW3UpHnUx9kp8eAVG93aRSYM4gVNN86xBV8AToCY11EAUQZmSFVuQ8d71sVV9ddxFc3wNK94L3AQezjGmKU",
  "key36": "C4EoLtzrDwvHsFHbJv4Zy2tPp6mNjQwp61TdBuhjxietmZzqWdhf9nvWi9qeWpLTU5czVQqpjZUAGHKkCnY8duv",
  "key37": "5rK7ZA8cnvGQ2jias911ovcPNAiWtecZtVfR8WqCpfRNjSZihxEwHmxpkZt2m2ecTXhrNLrDkf3oG3wSWUj7Y7H5",
  "key38": "4bxMTJXsaNzzUytAh7iS3qdVad94gsusgMectAyjitaMHtes9HrwUwCFdSvQZJhTvvxW3VY69iNuEdhBFz5Deu6Y",
  "key39": "3Ddneqf2WPju69TRztHxW74uGrejusVxVk5jmREumgXLfXY6kdBM6hq4kX2jN9eLqaZv5c5DtynqJs6SLji9MgXz",
  "key40": "25Tfp8t9aQXKZhF2m22Qnc1EwcwKVQmVTx8q4RdRUbmQN62STWhWS9p18s9iAYW2KrhHZSipTxcKR59WZfkQoufo",
  "key41": "4dpEmG7PMkzMwZXv7P5kTXLn384F5F4ZLT2UFkEBgsToJ2d8Qb1hABVXorVZ3SDL6U1anixetYqHSGyrLpEbiF4w",
  "key42": "3jtcBet7CoWwWVCNpvY3Spxt3hnujFJiC8XvbhRqw5kWCEAQeA2cXj3QRnf97Vpe9DL52izZk9BeVCdVPC4JvBc6",
  "key43": "4xnfrmVxW5EyiFQWp3UL987LF9Uvf74Q2pPxvUNooXntNfXmwxionrpxzTJK4QFBYdZemtNDzmgxBVbuYJDMz6cq",
  "key44": "2sPncftNkhr6n2bHbCHkXmLJ38XZuM63eS9DUHNmSBxNdzi5AvwMq6Af1hDqjbnNKPyF6RhnvqdNZMS7niowKTSs",
  "key45": "2svXKECSEeUticUZNig1ajKYUDm56v77pTnheeM37fn2FMGqYMJVJTKM24ZAhJoEcPV1JGBFZSuWDuQT6SGUijj6",
  "key46": "4u3M42VV6b5VH7fKBNj4VYwAFik5tQCwcfGvt5QAicbHgTAyYoRe4V5dtKqxgumVQf7cgs8Q5rc1mTjZpc1dgsX5",
  "key47": "xPcRBcvRknGaroaNyMyfq46sqYxrZ19wDQwWVdYdxYcFNZSp4P2XTg4sJE6omUBX9rh7SfoPsS33hmvB2khbQvi",
  "key48": "4MX9euZ52gn9yMQpWrNgR33eQmEqHMQDRkZg7qXJLGB2n9SwQLNY6QHkV4iDs5gBzAgGRuXn6dcqUfGcwn2eGAf9"
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
