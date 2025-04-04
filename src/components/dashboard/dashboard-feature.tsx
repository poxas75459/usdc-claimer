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
    "5cJUC2sdPVYEvkmQ34w4AQrUUY6581SnmrFXo5hhXRAa5qfnyEAy77MKECFyQHZ7s2sJfjL9m2SQ9bxK8iYcZNNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2WFgP6ywjanpKRmNtZMFNpW5Cez2S3L2FTADcT5dkcVSqxxPdUzxsxXw6Wbh1sgTYqNrnm8PijtnFEdBh6XryY",
  "key1": "2XZTSumefcF9YuYz2pzmuhcXjteXXL41UrVJfS5PGAeZ3VyHrxuhMDEVNJn3JrstUk7ShUGgpWowWaqhMYacHm3X",
  "key2": "3SMak4yrNbxQrE4mo3jrQUHhoBQYzcVYUvcRkF9NL2JHTS5v8MU7gUdbph7vp4Sw3VpYu6uawh2Tnmauc8XTDchr",
  "key3": "53d75BgesJMHycrpUXe3x46GG6DfA95QieC5GzE2eZTCQnNrhhx5EeoDzoUibGqZiHj5JhkomM52aXkkk9NB4wov",
  "key4": "2UQd5VVYpSZYfh5uUMzTQuM5ZiA1wGMaxjckv57VCPXaLPddPLA94P781m44Xt3DRxrFswj2Pf2fKw5G8HbifXcF",
  "key5": "5XUE9mQXwfYMsBSigQMoUeaJrGcSPKYpNjd9wLd5CD55UzcAn3UoBqzjuchZ4dZba3EzmAFPCuQYx5nDdvLP9eoS",
  "key6": "4L4mNm1mHJKCn1JwVRZKwoqvsE7ooeMTq7wyujWq9i9C8ZXQyB8vmjLU833XNd1zo4sNtuBGjLDtYcAJc913VDQQ",
  "key7": "YAAZ4zmT7mX2nFRFaPDaHy5MDpuTQaq8Hi6Ewd423HvTh2J9qRjYL6z2CpTqkRHAwnYP61Egp8LyBbqyvBWqdPi",
  "key8": "4MfZhiZBkph1iWb3UkhYK3VKpSLLtxGaKm675z5vgimLV6pmyv3vmZ8kragtQmiNzzJPwULT3TWjpxM8RURWVjV",
  "key9": "5aiaVMqF3EeoSEbWGik5SYS4hpjE2RBqbWgQQMiqWRLE7PQV3DLeg5xjbfhdRRsiRGEcZ1EW4VXitPhy59MoCDTh",
  "key10": "wKy6DxKXVLtdAJ1h9M47a76TvfmzEnoMt88hJjsnUYTqum2oQQ5ii6hKU7zh1kJzCnVeBbVsvRnFMWUKNTnmH7Z",
  "key11": "3MgiSont9cMsqYcKvbv2CcryJTcGR7Fush1njjaYZSnLXqwqZ1vuRtmsGRFhdTSuPp9K5CNinkPL1q5cgPNx6iJq",
  "key12": "5V5RCK8MsyhLjQc9gbdTGTsgi11pqb4vHgUteDm5MNv2NoTsjEeEGMghqjLAj2V22LeoAFqJ4QGjKzNDjhojabv5",
  "key13": "5FMTxgZUMJSzSwRdj1AGCqFh3BrX9Dj7pPUCjfNeykbzpqSCMd65udsFAJZnF8mveeHRUmPob3ekKjzp4qWQ6HpG",
  "key14": "5PePafigQDTTEYBbALruNQYiuG1MSPCCCZYgXLemizpBu4xSYq1u7droWKVz9fbB8aQrAjgKrN1yocntpD6WxkZu",
  "key15": "2je7V9nKFrVn8xVpd7JNP1ndbgvbqpHPRPQfygzUuLQardH2fFTmukUbjAUbG1bAiiH3hgrJBHhVqETFHw8b4b69",
  "key16": "5zZRQTjxvcW27K8advUKhdUpMCYJMkzD3ckeQTo37CYyMyEin7PqcBjAqAB2o3nFrg1KZwMd6GDKFans18m8qsSc",
  "key17": "2GQvYbcEhRTfvxg3gV5uHVK1U2j3AFf32CN1L6q1234nCcXRMZtqsHvYCmDHRtfjkca4ukDSnebPGhnoDZ1AAMCk",
  "key18": "3PypP3yM2yEMX7bKvA8nMzZsgbtfcq7wTCvgyiP5LWf2S5KF3kGpoBcc2h7n5MHgue3QU8JVTvnLEsbp11cEPdT6",
  "key19": "39CBSVYdfPomjCHx8kTmHs46XTEuLiPEmXfG4DgJz6UYHUiJE5MfPQHz6R7u3irE33BnVEPYXrdWuURXX4sPYBQK",
  "key20": "z9bmRMzp7BQvDsuSUsUhoKQFRTrXnCp7ZR1tNNyfDrBJ3cakShYdKdN7s4QmFzwFsnSQAajAET3Mk1Jhv3yA8cq",
  "key21": "4fp455JZ7Xu99bLqT9Mfn3EVfcVmLk4GNeWx3CwDu5aa2kogo6hDUe8hsjYZXgDeD9G2jK2Ff9uuJiAy2UcKi1LY",
  "key22": "3n6GSb3EzNAQayKsT5h9gh17M5R7excgGU7PzgCV7q3awvVmedgBquUT7XPJ96d1PxLx8qpJMcHpFXYZmh98pedj",
  "key23": "466koSQcJ2u1hfBdWXzqgEj8BdLfztt1KmY7N4gNZN6CAcShjWdW2jXBRWD5YK59t9CUKHB66aiVCCV3mvRm8bcb",
  "key24": "oz9hzN4nDJRB9Rr4SJtNhvjJSqwSJvuAJi5uhahpcxgEaxwpgdjCEZBmfNjwKFf6CvGbfL4XqtrqkvHYbckqjXC",
  "key25": "5Fo9h4f7dQtAhNCqEeWgifY6k1KBeKSD3TnhZJCc7r7uJZ9hpiKnKuRgjE8m6BMQaxcC7dgsUexzCACmTw4gsFmh",
  "key26": "4gyxVTDauGMPdwfwpJhwgrYgXu32nSXRTbt1Lc8hvcgcgg7YPyWqkrTeZmHyqqjzc2MqoPAbFm53DYZgNtLjt2Rv",
  "key27": "2ZNMvRYXBUAYqqy8zgnbLmPLwjJ34EA5P1PzCw2RQNH5m9K9WU1Gb7mxMcZjuWH19Suqw4WKGnrTzXH8xLE3KowJ",
  "key28": "4ppYKYefLNn4HP9MTqF2e24EjMB74oa6LBQgesAEBdRAM1JAqCkpGiG5ymteg6j4bHFQeSKwKPJPdCrdiwBQQz8h",
  "key29": "4i7K49ACwbA3Fk1KhXV5iirTyPRQgMpLTKTa2QN76dMzwWkKmHqANAshoMQjBSiFQBqpqiLDDMqbW1SEYSkwcb5t",
  "key30": "5ovjsXvU6mF3AuzkXuAuofr4ngoU2fM7L5D6CVtDw7GWLTohLus6a7rfi8NzhrHE3yJuUpu48Le35r9GnMqnAnau",
  "key31": "24JgMhQLST5eaEbc3fvfJAMNoF8QS1JP8rr9i7CrfoQot6MtNt5jpeMaZTaUSrYCztTymNqoMDFFgNBX8uoLJsas",
  "key32": "39qxceohqCFYEj1qWwKUKxHjqq86WqHRRfirw2SbKz2Yv7hMPwAujTs5scKE1P1UfqaXCaCJDSnBrubTawnMLbPh",
  "key33": "GoZrWm7Q8HStMaHYHcjcw4SYRTM7VEUZGhvE32HG7jufAiMv2D8xyJg24PECto9VGkQDGJRN6n8kpcLBUsozfdR",
  "key34": "5XdynUc7zXe2RmxEmrsJrFJ6RTv11hLX1gbw2ABT55pzAmBQSHhwc2bPqBjFabbCibeSis8LspLbnAN1W3Ndm1yo",
  "key35": "3hmBNR6cbdZDGmtLTsGNmX4D3vAZ5CkohCuMbo8FGNaMrC4S6rPnmBds3EqUTUuTpi5aG7qBrp8zZCsRVQCn78TE",
  "key36": "s9gC6AxXoxy3cs9SXUyJjadQNtoPD7pR4EbfwsjUJ4oYLAswdMgHM7cbEyywfuNV4W523fpyNaGKBxjfV3cLofj",
  "key37": "4G3nc5Fq88cMS1MFSGTdTVDSR5vr9Lt4UJTYrcGRUhaTBJVVM3egDcYwfTtHEgmWyZQmxG8UQrJ4sGCmWobe5AEP",
  "key38": "4r2EzthGHGf5xcnGJkxwHbHCiwZ1Ero3FnLwqnwHwBWu6XgvLYe2PGP93E3YrfEAH78RAY36y96RuvA4jfZKdu48",
  "key39": "LKth2inuyBaQg8t6YptkWNvshWBmw7ARA54bPq3LnU6go83GCCkTXfo3EW2WiMf2SLcMKm68WxSACmh4WzvqbGZ",
  "key40": "4DVxnwMnLRGqQbLY6RV2fMB1ZskzXUB4pmYgHTR4fx1PzTGheEsN3w1hK3tgQrpGB6xnPB6F7a5iz1nVSNAhzitf",
  "key41": "4h69eApDbfBgshLyKzT6EV8hvgt6axEbKupkT4uuptYeXLGcBkAD45aVBwYZLkUQxRH6ENtfPSaB2VktRbF8S7Xq",
  "key42": "3s6aGk7YEPf1osHNQiHBVL3NRA4inxmmoCmKnu4TpyXRwzod4PVJL9qYEPV5rtvzZxS62uM5c5WRwz6ZUR1wcMgx",
  "key43": "3FZQVgGgFkxdEvhsCAHk8MtxBxAPw2JoQYt4Wu9ZnUmGpTseZEmAjujQ5dZVEhP9Qi322BAj1etYnCQCsqLL4T8T",
  "key44": "3K3Q83TamnuNRk3z33frU8GfQctX7iN7dD6ZWsJ1XWL8fi9tnRoDJPr2CWKo5i2qvLcF1W1wGdREWn4V7ud54jQf",
  "key45": "2SfxXHUSe11zsrfjEjfbrTnDxpFE2RMTxd9KvizSLGF2U78ABPgrEiaPR7SE11fUJnMHQ8VTGCVdduUzSVwqTxAc",
  "key46": "482TCmdEcpGWBiJzdFDQSf5xL7h49GzXoAUFVRhCie1jjJrsr59nm8XTmL5rm5LrXiCYTxBpPWs8QGkXntyGckik",
  "key47": "cM462CSDMg8bhpwy3DV6Vpuca6ghgagaun63XLw14ELCVkBnGhBGcZ8H8qV1e3mviR1pLvkWB3rpbkz4KCvKU1W"
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
