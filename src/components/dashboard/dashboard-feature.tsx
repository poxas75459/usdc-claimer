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
    "4TtLHPHmcmH4khCCxkPxyXSzY4vmqP6AxnN2ytFyQZshPCFcUrQtLpX2J9SyPwBWSmxAH1j9auJFXNWBJyusvoi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRDZ4j6VqXZKcetwKdKPUaxJMjcPs9wTCiAgCdRfk7dC4ak6u9NRQJtQSMRGEt3Kwq51v9dQZCYmoi49GddBfoA",
  "key1": "4RHRqnSrjYeE1bZ7ntcimsFopCPuPEnVUgkXECJAx19a1JNLLfZKvMHHg2UUiZ2PjrGbNWjt1jG5yH6Gk6fbhga4",
  "key2": "ySPjkZ9DRPs7iPAXHQ8k866y9zVM5G4YbjWTPHv7UmTABfDSARSamaztbpEYApY8j6dpEqGor2pVdKUf5U15Tzm",
  "key3": "uZ4WH7wFagwrhJbBne24R6T3icVWfH5DDZHxLgqWyFeJ6kmGHzrsd69HGu41iZzHh66d3HFFLx4nENrvWNbgbR9",
  "key4": "5dLyxTacupbjKmibHcqGjgxuVhb119DBK7FZpeaYsi5LEtpS6WTCczDb6s9fgZg6wtm1gNJErzgxYHhiBReB6WVD",
  "key5": "5fCvBixScy6Z4DfQZGSYLT5GMY2WGU71w1AajfX7dzYqmnHCrGhSE76XN1vyvDBJ2JFGdeqNbfcxgkEvb2rTHFmD",
  "key6": "2g8mXGYCwe8MfPen5uuvBdirrqMJ14r2GodRTtCPREEpb6brWk8mpzWxqMY3yaMRvhF62Zp6hTead2h1ksG7HJm8",
  "key7": "2aty62v7AcRHmdwJyBXN7LxJfuzdSTqXajsZEzVNA9vZwfRd3BRzGheUm7eGPPmDAEfjzPnXpJ5D2GzRq29Vi3ep",
  "key8": "5QvkArNi7JYc54NCpAWKdc5eQdLRsgp3PTAvvyGkS826FGvomSwCGcHghonTZ5NLtHbD3QupgWPyaJmx78MhfZAZ",
  "key9": "3sHogYKaGzEcvWx8JuzgxZo2qZWAjSfGLixy4KqAEqNmWCsQEic4ucL6xDCoNybjcnDE31AiyMpDHAhRDy3YTpTh",
  "key10": "411s9A3yuSasSTNuUor1KK9wiQnuQkU7Sj9U19b7MBU9NPzeqH89QLiqDJ54YrE2t6a8NyPkXwnuJLgbzPL42SaA",
  "key11": "2BQ33eGjRr3eQio6k2JS8ehbdzKbdcueCjz82yVid7BY8kE74YXd7AXBef2oW3VivtyLFeDL8sNWJUsMJefTRVC4",
  "key12": "4zxxYyixCMfCZ3XDdMb22P346AHCELfTxX7CVgHJA2CoVDPoge6yeAtA4MFNWeqWXJZzKCsL1DWdzoT8VmnyZYFT",
  "key13": "3HyZEuuD3xVvCnkagDtGUVBF1TA2nUZE9Uc2cMonapn9C7z8MJUcR1wN53ZQEtnvEC9iePv4enrFVtzoqXjvfjCd",
  "key14": "Nm1w2FmnVSJYJJuStf9uGERfbKni2CQuj7moRhjQnpJ2MG9UrCGkdb8iAW1DTFiPs1KMqJHZiZtVa3DTo3dtsDe",
  "key15": "49VdPjMKbcj6Q4dscobJkk5A6AH5VgryP1g33QESGivrTKiTCDqV6ZQB62JfEKAeipmbBCiYCG9J43oKfKSwiex",
  "key16": "27Xjchi8hBWaiQB2uoovVykGPjw7U26SwTZXVvbz4Sc9o3odEF29gLWfuv5wVRcArCvEaJEsTRm7Zfdt3mCPiKkW",
  "key17": "87LGN7unDnuPh91d3uqEoYUReeYqZ3KW7wXAS14jf4xQvkEvh3WyWEpXnfB5KaYAiS5kmWeYtpi5aNoESVTDJNQ",
  "key18": "Zm5z6Uws4kH1sYK2UeeFUgtJnXT96ZPRwvSbEueevtJYCrCm8nTNRaKX3a16niTtwhNsUjUJuYHkyPi7okVvMLi",
  "key19": "546J8Mvwsp7664CLHdTdvBDTZJRRtiTCHpUR89PU5iFGhWYqUbArQJVzjzQ3E6H14hZPAD7CbQBkZjg8YugaArwT",
  "key20": "57AQmz3WVwF6psUNkGvV165rG9y4gN7F1KiaV1yZ47pKT4GK4z4uH4bdeEo3dXJiRy42Kn13bJDyiPc1iBwiMRCH",
  "key21": "5T83jLKFbHgmUoyD8n8e8QQdMKSLGwjAE9kkn6HSSwUuRLZz3uPdLwyZQBBC1tWyTNWhoXjpZm6xWpfS9tXLZxcS",
  "key22": "5JaFqG4161yMz4P6qKfKwFTaBbKqsPgqxBouSVdHR7r7Vyvx8g5u5kdxVsV8J7uPZPQLkmMGquzJ5n14EcosKaxv",
  "key23": "FXoxDThUEb461dg979xBRgQS4whNAEpV97QdoYZqWMwXiFGFMH35hvA4m8qHpeA9LJG1zYQcx1WqujTojWVbFfT",
  "key24": "5VXvjtyF2hmbBpEnUe6Yr7i2rYTE3EfSUF3cD1sWf7HdggXTrJjEQQthfeGPaCKCNZaKaid2SPtuFyWhVenpHXUn",
  "key25": "2mKdPqaH6dyzBuYuTaf6Jbyi9JBrktgzpgzy4dAvLQBLBvEo3WyQ7TYDzmJnVxtkpPAb6fbqBNgQrKpPhc6V7Aax",
  "key26": "4ZzjhhBvLVGoH8LZS4JrJB4cAF4WFnokkeigxh4SktYZpzTCUkJ8qydvHGwpxgtxPDJY4K4mKbLByXBxH4c6WM9T",
  "key27": "3anKV5CBnxwyhC3Ppi1m493JHsP4zfGMwJyWarfp8LwK6yNQWxTJkDedhs4frvRNoo1rYeHGQDHBzDAsGGLj8AYC",
  "key28": "pKabWp17sxSu4qVmzpLf5jkvarkpnFoifacbQcYTkF15dK9yZAJs3tPKiWpCGCHmuwtnNveZHpBoveveUNNzxgg",
  "key29": "52Pv7iwmChiq7Y9TKFjnLK1WQA8hsnrT4qSvumWDR6eDLKyHcfs5GdGPxwAY5qjf4V75Fx8rEFFiUZCG5Pg64mkh",
  "key30": "4ZaGRzg6DgRso6X9FzursEKXg211UHKkkzYtyBBNa5wL8qbfHbFGLLwVKotKZp3vymtumodnozQ3iKjCezpJHLe3",
  "key31": "3MVpCjtzh3hkTUSgnKjHBMucnzd6896WQrQF4DFTUR4LD1gmhA2yAETCB6iZEFPnAyLGkmDvSp1wkaiAUAoQyCuW",
  "key32": "2JurcvFfxMKz9ciyb3CW6Vuk2g99kX8s45aWrfeY37M1pyHjF4YdKWcDRA6ApgZ5FntrMY7WssyTq9Nr9Sp5aJcM",
  "key33": "4needvmE2r6AFAvxjBsMHr8Nz4qBuctpuH1CAeLYfizpjKjuQcytu7aH3VJf74ZJoV3npu8D4opbjVgu6hRM5ARa",
  "key34": "31xVi7KjUox8zrSgzJhLm2tnnG3VCQYajzvQznCzDicjnKJ9zLfiJPdjMRLte4WDaDs5ZJfWzRE1ADUaDy6L2Rxq",
  "key35": "5NHXpjNRb4tUg5HAz7aqxkMCrDexxYanvN6VzDZ4PU585hPAFi8BRZ5rtLh8NveWUF2ZEphUUEgo9EP6w8vDXSbn",
  "key36": "2giZvMMVyFSF1ZJHs5HrFCBkptKdgAKq9i8m4XsvGJLntzQExCEX1CD46AqX923ZCsF89FLJABNcpKc4iTqTQJtg",
  "key37": "253UUSGkNR39zKu6zJ7vWZZNXhn9pSBFrLVS7Uaprzko6yHyNkGAj9Hw7uhqheZ7azmaTAdi9vRugAURjb98Ehya",
  "key38": "2aFRuUBVYhPGZPtTanNMzoxRabQHRtFiKm674CMymXh5CgLZiXeXYCCzK8CMjWcxtHFKEMqBGYN57jqpVwDBdop4",
  "key39": "2zUpkrQgQvt1PAwcVQL7wqvQovaPkYtmdrmVqmg6N24Rwm17TePrzjkCcAMV4tmqN3aAaNZD2GPBimUEgAC47MqE",
  "key40": "5Nd7jdoGXzsXyuPwsE5gNo9PSAqjYZATCr9MBXKfm7eKdCfdgrxErGUTxDDaEr8NWehvg4VpUzAdWNZKGZBRexgr",
  "key41": "382iNf4bXmpWExS3ziRfVUCTgkVXkwf54DtiodTWQzstVxwRF39AuDsYFMZd2SPJX8kXNkEYn1EhqwSTtZUpaKJz",
  "key42": "5yDiB8wrecuzukmcJPXdf7LPCuD8gJhkK3wzadXgWhUbkRjfTCsu8wHj53WUoBCAEC4y16MMzANyRHqpCHEVE9yz",
  "key43": "5ZAM5BZCCMXPveWjxCb9Fr89A5v6DFjr3YhAB4bHjQkd3LH4vDiE5TZ69iQz5F63aNCf32RxavMCibaMuVU5RoJv",
  "key44": "4i3a7NtXwmGVMqkM3AE9hQXzv9KVtidshh4acvVVAsYjXXcntsY9Qw44em8EXEywuTjGXtvcDV2atLJ7G1oiTvJT",
  "key45": "492qoR8pZ5w6RJ9qGSwC312fTNBbVzfQhoLQkujBYVoKbyZgbdH61AZxKmzxEGvV3jsLrUbX54w29tVaTXKoWmqP",
  "key46": "4oD1qw7vb33ZMU9DnmWJnmVSqZw3pkxo5ASswPVm9hQARzk5kWkWWeEskYuqeMCSQyUQUZrbLYKm6i6aJAX8mhqq",
  "key47": "kWtcX5mHyVNVe3Pmhh4nC34cVxpApZMPr4A1y7PynjZ9wLcUnJy3vApEL9AnYp9SaAZMNp8aL4qXEgaYdiKi1f2",
  "key48": "5A1SDqKDSE4bHMiBPV7wNqKxnw8BaY1GFdrKjne7gBsKv5cR4XEvMvRxeMrmaNzm7NYuDUcTMGNUwBTCUMwiL9K8"
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
