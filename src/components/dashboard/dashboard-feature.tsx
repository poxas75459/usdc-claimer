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
    "4sdqo4pedfpXvaTFiLZm3g6S5ksugtkjfZb7Z12cdWJQExda8gYRD3cMHsnyrvoZvoy6wqAKAbRy1m9fi6bE9aj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DMDG6n69jTcQeLGgprZkug41GUErb8zLHuk69Y8oW4brDWqrVhZL6NcsMAmuhYHa45SqJG3bmCrZvHBvHMo1BKS",
  "key1": "fqivEtPbs6h9T8B4EdQWdHmPT4XNztUN4r5sLgrW9pi6oBVGn1MAdxFfvYDwsJN6SjYnccxWAgttYpAjAY4BHN3",
  "key2": "28vXW9axrpUeFDxSa1nEPJJX5yQCVaqUaFSU9KL2e586mxWaZDRKjf8vb3HvmzuTbiwXgrNkc9UHX52AzZCU8zQQ",
  "key3": "29mfVxWPTmmFX2XaXLCHYMsk9LggVRNokZgCLoVvPvpLUjm64EhRrDKy5sEB9eVbY83w2oDo2x9ngWZCLjRkKXWu",
  "key4": "5k7qNgbjXXQC3mHT4CPpqMie9zKUBaTrZZLvXJ2RvXApeRzNhudMPp8HBGbWNZai4fZuBi2jy6yhdnzS4uHhR5Wr",
  "key5": "2QjTYPueHKjMTxv1Q4NXBH6LEk6Hhkjdq6ApLMkLiCADRhUFCJ6iYPH3EJmKdeeqGUAYN1abBBwiTg89n9YUo5Tn",
  "key6": "2UwGNh9NapuHLmLtBxXh1tvrjLXNtxzCvs4g5tw7LGVdSgQbsQ7AeRfLke39aopUSKFwsWKENeip5MARLmwYUrRr",
  "key7": "5P4MAZKNxxqxYCUSc3zjtaBtQ2hfrGPvnZ1EEu1So1H6nQYgpiqHAS1qe1jo6pc5HtWpNaZromnqCGGY6Y9ozTBF",
  "key8": "CaptrTDN65nH2LCKa4FybDYhwx3KB7mHwCeW4vAqKtYrddvueT4Kj7wiCr4CezRqv7nEe8ZPGAahk7xNpaYYbtz",
  "key9": "5TyAzPFiuHWuRsKeHDf5RHaEHXcmixUqjkChzK2UXzzcBHGkVTTw1ZbQnZ688yZJR7GEyAnY7rh4N9wmHWJ8KwEm",
  "key10": "3EBpjBnZTDXb3UZFT27vGEUDUaULNXDKMxtDAXjGG34769nkaRbWVjGypoyzSVLKxGr7Vpwq6QeX3MhTYHA4tuTp",
  "key11": "4X8AnMzefxPptkK4Uwbe4PunoVgCLUYQwcmS3jdVqRcNzMeQ4x5E2J1BeWHKDbmftkhimk5p2JBFba69AqRKXwrx",
  "key12": "5nj2hSHwQTdUQTrZ1eBV5wuhAzRSYpS5V783wMQyFgG89gpwiSS84MDZ23cppVN74HJ8CvEcnAy5wHTmLQtfvdMv",
  "key13": "7u7h94Gx6VDyHfeHZ8ZcpkafA7WcjjprNdaKn91CXNgyH9d3ZM6ZVLTv9oCA75rN7DLphV4MCJLJVBgtuSe7Jd5",
  "key14": "2GijE8Khky1KDt9bMBz3mGwusZPR56W8G4szbc4gZoGQvCrMSepBFMvfrnPYReHipktGUHKbhrPHD3qhqekKrADD",
  "key15": "2a966HoifeNUBUER1qAZczRuRBTw9wRh8ouDQob54NZhRLMThXJU3TJnRySZQgNDEjs2MhVEdbN6D46a8izJoMoH",
  "key16": "4DDpPE5Xu1NgVeZUC2tp6e8Y6xD25snCs2dDJU2C39kJEz9Ptv2QBJL7qBzWVVFJt4WAKjhrgtzSGW77J8itjvdz",
  "key17": "3hPEzS8RfnGpnQDqznsAmZ53YhjW4wAMfGXKU3QgrVWizoXz3jAivRSneJpXZzFLiH1DBExYJU51bffbFAey2KFh",
  "key18": "49bJ164mpGFDtevdV75nn1mtcsLZCEdQhyk3MNBDBs14n42K6SbuL3yTyXKJ8hLM9LVySSKdywfibDHQDZXt3hUx",
  "key19": "4Tgt772CvpZ13egJ8PUfDeh3ykDL5bhKcBrFr2jPmKuo3HNeq8XA78UVjgPkon5feQqVZoJDZnWLjVBp7EytVxQo",
  "key20": "3vada8hPRHh2FYmoi4uhDcXcENJGwhVCnDCr361Xo8Pu2mMPfGSosUrGN2d6JD46Yci8fcxk4zZHDRo2NmfgRvhw",
  "key21": "kGACGw617yJhFKeiXFBxHYLCxYaD8Panuu6j6Dqt2EAKr8pgXungLsDRQsGhqg1TQn79iZJRXEhWcfDkExtawmQ",
  "key22": "3k5VC2QSq8fHiXvSv3PaThyjoMRwR38wYktzWjAYDZyEzG5MqBsjtT9o6kp8QC3TsfeHHdh3w57xMJbWtPirHN8C",
  "key23": "4Szqt7vcXv5FHeRvbzSzLbhXbe6rQYxo3GdkKqabysZByv7SPzoBLnHgoRWuSZRBXgPVdt6TDZE3Qo5KGmEfa6TR",
  "key24": "4c8QLYe3vPDjgxLTTB3q5oqEoaeh1da7hLMf4U8XKxftohb9iGWvwTi6breYsjfZVqbrJF223kpSWqDQWUyjK8WE",
  "key25": "59TeZ976jwB5gLiVrAGhEAycKYe4HDB2Q88bDDqyZYhYnRBeERYgafDzAMetKkETLMxbJztMD2Um6XKUfLE4e9c3",
  "key26": "3ieEsVVMoMVNVVkBwCXTANzyRegvEw619kPHoEX936LgLSqhBw3rBkeRpdm1FKQjWMkehz3FAy3QHqN9Mfh2tjCe",
  "key27": "T2gABNHb2Boj1BgQdHEhFXhEm7wLX2tHCY5j83LeeBtEa61Bdu4pwRinwDk9uExjueCJLLbRFHZUXeXfnuHgSzE",
  "key28": "4tNzKsSrLbb8Lu3iSnKvkxoe9KoaaHpC58zRYTkpBHmQCeA71KkqfuFP9Sy62zEWvSwW1MqQcPzbnyCLqUsnukop",
  "key29": "2tUby4rEyuZDjDkgA6VGEsGNpBqE1kTCQwREcJCEGsG2dm5eHep1mSpST2KBWdS2h2MZeFMQKKTW5dg6KFov1bWP",
  "key30": "2SQd772Fz2RDCvjm9KQQbcyRVe38SiD7kZFJebreTuFGAEfFx5XPgKbN7GPgGo31dAHq5htyip9NA75u4CvKzadv",
  "key31": "5cKr7roAWc8viuu2rPM4pD8jLULyiaQBfcpeAfrPXfJxYk6hiTBcXRKX9KUNotpnbpMmMyeW4HrBpWvmMMW9bbrD",
  "key32": "Esum5G1QhwsGECwvhqNZhZEHuHHykKCgBYtZBuL4w4tPd75BjUSXYUchDjcdTCoML76oQfUyqT2N2ozj3KeEnZU",
  "key33": "Hn5Q7hgj4pP5ucF4kVap1FkzAqx2u5rXBrPBXtoUnm77icBsMXcBHLdmVPqybNXK4U1V1LbPamLem7mD1jzQGxR",
  "key34": "4QZYjVMuLbNUmhUN5S3ft3NDzKGHGxeV2PxJycVoVWyZL6gvcgEEkNCTFq8wNmR2Ek6AMfy4B2Zte3dfPwuYDwo2",
  "key35": "2q2hTuBVeFycpbs9JsVA4pdpCjtaYJwi2qt48jxfgBm1GqCb8qrf5nkFVTdAqF89bVZrVUNBNycUdUS5mQJozFm",
  "key36": "t6Q8x6RMtmGVc2ePHrUm7RjtLuHsW5NY4qDXzS84SW7VfksAc1Mx2wR6xotosNXo1kpuWtAgDPA1f7pSbrYACfx",
  "key37": "4y378cmayoCG9cv4rvnuj53pDn7XTrnAQ3JsLBSJ2m6qyWG1LoziFfukuN1C1M3GEigjGpBfFHVxEjnKPJYbdvrD",
  "key38": "2kTd2H3aC57GL3uVxGXNLnoM1byCboy6ULJ2fKmny48MvZhn5U7qbSWMmnPrzqL5Kgn4PsVXhZ74pM6UCLLEgMH4",
  "key39": "4vKk8SUhiMEhdhGDAD5xcoDrgnwi36ZkzYYHwKYnBuNfH9rwACc8aKfwWmSbwYXadZNCU6DWp9mEg37QKzvr9gmY"
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
