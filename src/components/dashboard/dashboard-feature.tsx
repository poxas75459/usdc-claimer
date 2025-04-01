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
    "4CCQsALKXY4UyvmxWP3mkB53FymeNJwPH75ohHwL4pZtTwvmVdFYMiAsV5g99idv68uWhG2JQuAGs52aYbDfdJer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UB5Pdm67X5hGPSUX3NbDvQ2BPjdQeWymmvzdnn3VA6wEyiRegeWwPrGgyWexNdQXtRDrfMEbkrMwRgdDCLfRm61",
  "key1": "uW2TKY5aUzJT9ZmD3MfjE4Cpwvy53SWxbfGyET1RKmrpCisfJffHtAEPaBoT9JXpoz9fNZ6PpQKsBoqVNrjUUWi",
  "key2": "57h8XqZGt4Cy2rYoKSnjGrMKRChaQmGJ4EEfJ9waDYSj6mKfWMqcePgVK8i6P1Bohds6v6VNNbe4MTfuPqQ2KTk5",
  "key3": "3XUcGdqckiudHH8A3R1huGyyFBd7ku1ctGmkkR3jqEvzZyu2sanZewKspaJHQYArXqGkxNErPj7Jgv3UnJ4TfLgG",
  "key4": "3usEXVvfDYfS48a8RJ4pHd1nHSaAwSAe6vCV6QKpGsoFR1iD95j5ZuDBZhctceUxuxAQ7RtZs4Uot3F5k2hS2mgj",
  "key5": "5jURzGDnG8C1WRdFBWzmUbJGzM8aJ9wvYW7jiZpagrWAX2nAPbdL7v56LY1R5TUYFMqN4KvxjvTWMxkLHRs3gbJy",
  "key6": "5GGbhE7tiNG94MgmaCjCp9X9x24eyjprq1KL2HdcW2PxUWiKMUKXUkwxseJgJqqsEkt95hn1BBGRCMzKjwN6xTaz",
  "key7": "5mHHRiESEYw7EYESgELQTZvqeynsrXQNy6pkM5GnVbVuNZUGY7kzMUSzEFva5ko4HzczBKvsdQYyJf7FBeDnWvSZ",
  "key8": "27gm31Ct4gaFh5kjhnJkizWtLv6G1TBkCXELjgbgEbi9k3NAFpVBZ7WB28gMNkU4UGXP1AQAcp8KQdbxv8q8B1o1",
  "key9": "4wivRMgnapLYEh8mHoz6sF1brAfv6DdW97wiBQeNG4Vt4rHmxmn7SE89s1rcKg7vYi7X9eDN87Ec3HJh7TsUv6yf",
  "key10": "sGtK3tSYdigNjVtW9LnEFGWttPqrRM9P1dYySkn5mbBQZvEQ6Qyb5CDmqyWpue4RnDTUBAuc48C4aedy2G5ab6S",
  "key11": "3Am8MEQfcGkjje8cPkPeXdJLAsLuH363dXdd4wB8TmDRtt4qbnt6r7HqgD4bSr9FHDM5uqwBRfp9pZvQmpCJU8TU",
  "key12": "2rPNdZ3tEhHnT44FSrgreAiF16Bx4i53nqBeDsvmXMw6BJToPeyTBJm4MtzoMndeu3HpSQwVfwGdDbd5RvqDNYY6",
  "key13": "3JQmZkrydQfVRge5hYwPqtuXLAbv8rK1348NvEUYCQjNggMvow2dYUefa3RzBhNjka3NVQUDP3pgGBoN6ijFHvgD",
  "key14": "64QC6q3ZNn2zsnLcYyaVVEBc1AWWrhuo6eTbGbTcbEx7yi1M5h9UWGFbaYk3M9Qj6CWpXMKEkDzSQ6WieZVJJVCE",
  "key15": "3Qztzr4tE6sG9PPHTQ4scqYwDwu1zMWZNh5UtPYpkKnB1n25U6J53xEqYiZPhom4fmC2KvzuA6hFNZhPLRHbxxNk",
  "key16": "uEPQVyZGap4Wg1NhGUdNhRikyJPvhMmN8RvLhwMtkFzvDwF6cqy8NN16MQVGWxW2Nwd5n2sicM5hZZAD26Y5p7g",
  "key17": "4U4K7TCd128eEeRbtf8iBkRM1W6mSkevJRNDAtryGhsQ4juiUyGFEBWFyeeyKwquXTtX7Ny4SM3msFGnQZraArGj",
  "key18": "336WnokMw5rMoQi6te3oBxqRJk3LMvYES13HHVPG2tSLL3bnGMKqpSmRTN9gYv7MwZ7SN2mUYuvWXhh6Y21xLgP6",
  "key19": "5SZHoRtV8GrqmEkmhYKKtT6FEBERUZVCetuHm2irAwCNoZ9aB7uSVggoopeetdD7HFMAbPfPh1SSbsxDXM7geS13",
  "key20": "5Uh4Vqobm4Ni43FSwLaAQUK13NfPksKNhBUt39V6UxZWgVCqgsUjJg8ZxaAsRm2cweaZhw4wnMJY4f6sDs4GwhQY",
  "key21": "41zc2XzZdPjUQfaM8YpcFaA7gnzCJ9vqrmy2FQb3YSmg68cMWbUJfinWMuaU4JgS3gBbqCURRr8WKehq62M66xQd",
  "key22": "3m9qckRDSzJtno7xEuxCaYNU8iUhdE2qRFdDDyQRturhWveZyFFT4QDaCp41shCDGWXF7zdPy1asY1qB3Gn9MpsM",
  "key23": "596wUdAnV1cFvSEpjgAy9r4ePa94aLe4yz3ae445J1KFDZkynb3KEWhcFqjwjZs1oq2tRmopRXKmo641po1SKh7a",
  "key24": "47SnDo85N5H22d9cEU6Ly3CDB7dVz1AYRw7qEk71uRYLr9hznXUoKsJNj4rMRsXxvvbsur2ZJ6WCzqoh67m4ptv3",
  "key25": "4J9BThqjh8HHJFmuty3hcDDau6uDToYuSjTABeAbpc2BQN4avg1MKV1ABmajbRKf2Q9axGMPokMtegMq99e6E7xy",
  "key26": "37mSkR8sRHJHveWPSGsuc8eWFB2mFsk5pTKQybS3agVGtqGf7evYfe3RAPgyFQ1TyqCsku3Yj8YVfy5XkumYLXtG",
  "key27": "5PRU3nJFaYnBejJJ6tAowFM7SYX2MUn81y4FYr6hpbiyn6qtgE1pkSvtX84jMFeT2oTSfyCxQXtu1ymxzvmLjvcP",
  "key28": "5vci6kV9rGnQ8Eer8bGhknUrVJbqyFBKVmbJEc2wBxgqXKMrzEcd2474dJgxoUNoSqEn26j64ocxRLrnjBSUK2iv",
  "key29": "3WDwbw36J1wHztTbfz7thy6X1qYnhHfRXdzDTxzWqu5dsYNuz7KarckfXQqjxrdkW39fkqHYA4iSXwzMaRAg8cU6",
  "key30": "3gMu3eFRqNwYnUH8L5NvX9QSnMuSCddwNmNStJE5LWa95c6pQXZcHitAGJa4cvUhbLQUDn2ahRusWKLSyZWZY8Aj",
  "key31": "5eGocEVfbrdNZoeckUNyyKiiD2zVx7HLV9NDBPc4fkAQd2GxZgzor5zzC6Lwx3kiHV3Av83qfFT1zRphoeZusMd7",
  "key32": "KRDf3fRHM8fxL5WiuAvxQtdZ3LfLmAWcjtcAsRB5gJWzEB4HJK61C59Y9C9EdKxKatQ5M935Pox3Pb4ek5Ayy85",
  "key33": "2kkcMoGVsSH52Emo9J2E5cK7fCUbXZG6HFToq8HRiL1Yd4ZAUmRT9NjQXqQS2rnJTMCsqtDNE7ET5Z6KCqinc76e",
  "key34": "4yVPCLBAiq4bqeVQWuw9AK4EjThM5WGZm2S2c943N3u6A9BasJLpcsQwRmMTD3pDCKjQWyVWvyN9GfEJVVJeVYYy",
  "key35": "4hhbXDhqP5nyapqDqL67t5ZWKpCibcjMfs9rpoBY6vEM354JZ7CBdYN2qc7HrNeyMRfzBnL1oyJoawgEQHn9nxrG",
  "key36": "4RswRhVREcaPmBGm6Z5YFYrHfGs7mKS1x6x4ekuxLS6hGWBPx4C2PNZy3uF1dJNBiberYfSez3JzwPTrhqvAPdhv",
  "key37": "4QHyyvRaNWEN3NVZvrMBrGP5QaxB5y6RrSVaxGGiPKJ1Py1wUkfaD2qeujZucd8bqiMKWoucQZB3HfVk5E4Ex1wd",
  "key38": "5kq3DyKZSskE6cg6xug7D7YSfGxWifNgMT3m6KQeSwGMUigqEpLZB9QW8x1gYH1euj2Fhk8kwHdXtpEQ5D4Lm7Xy",
  "key39": "24tUQr9X5kdaZCcoXw7HwxWcz6wYLiQfz8T1KmGFYmUK1fLgpANzqde2VgYJgLq81pMBHrELbaTz4bTUPbj26pAc",
  "key40": "3gKpYzDZWZPX7LCmAi6cKimcY5hvNuVeY6gVepdoFnze1h4Af3d7Uod4Ths5YJZ5XRb8LWqUPtRbiURgkETjtJCe",
  "key41": "2F5YtxT8Cp4mqv9KhFoqFKd8GDXEojd8ZsaYjYMRoY89qSKULp9rQGxDK9Ni9KWLUHtTk7XW9sCdVMR6gyegcoSd",
  "key42": "5SDsy8gK8nVvGy7hwDd2HnzjAr1KVtpHEGZj6fpEUC1NmM5qVMuKtd4GcSbmQTGV2Qi1ACi9vJ4pfMmS1yQGPfNw",
  "key43": "24YgsHVhU3qMSfzFBeLqrfHY27ENtKKLizbymxTihyu5JjuRAFDeUCXeevMZNsKXvdEDCmFbYqDwbZu1ka53Jpyq",
  "key44": "3dFBPehGYaxGc3VYyzzsrM5WZNdJzTJXguaere6Sih4imL455znsAra5Pg1PR4CfbEEeRvsNdXvafPfueP1Jouad",
  "key45": "4E4aY2gGA3wopsTxe5owup8Qm5oikH5WJ9nA4zqPzGSdLtreN35FxLB8TD7UeKekrkQVDh8pG6viZTwQQUV7w8Ry",
  "key46": "3MqUreeWDUqK7uUFSPcaUmowxXD3YVFqurQHeAg8KPohxxcxxGMnmMNpt8sYeYrGc13hPmUngKzKSZreS8JnarZx",
  "key47": "asr8gLBG74dU7uqADaDokNQFtsDBjuFXEw98R3GJGu5NyGv2EjwKt8mYhiwJGYYvnN6bSkf1NDs2mkW1GcyNzRp"
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
