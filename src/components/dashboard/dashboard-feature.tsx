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
    "2vySR1uP4L52fQGPPLnwpV845hSBw9SWooHs2nWAtiBUA3V9eH2zr88AsZmvoJAhRyTck1YabkpwCzEW2a3Bq6zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52MbTYrRwfRGt88nuWcKSSoQaHkAi9jKfHndSMkiB7anP6NEekE3uc3vnmUFpgUmMqFSUCGdU4bquSr6NitZtrJL",
  "key1": "mJT5zC3oDy4J5JRq1McoRfoPFBfPYGZR1GZeVC7nYQtQ2HNs97XtoWHJshU7aNaP7JvVu3CSGxrM1RcVGi8FCVc",
  "key2": "5weJsX9c5VocuFvqrtJxB92SJFxVa5qEk3itVmzuSVUUVRsGFs47C29HZchLhtWMj57rRSG5m83JmNVAnUmrbTPR",
  "key3": "3J5saCeUQsR8jRaYh6MekKYMC5MH1QxPa3Ks8Q58Jv4MgvEgYxkECrcp2SaunXmZ1rC9TtKfvBXRrTSKy3vpYLKt",
  "key4": "3p9xciZrAoAwYWCKraU2dDobiowx5Cxk33t2H8xahMQJG8ac5R5f6djq8AJWsSds8Tvp4aKuhh2Zo1ikYNiN4Wns",
  "key5": "2EjGrWLX1gfPY755NUAKaLzjZh6a27Uv47ZrNNeVR8u8A9nWA7WPwrzikFk5gdDWkrUsfdWUFmKX6R9nBJqiy7S1",
  "key6": "5TuMQk5UttKRzeBdJv4TPBYKKp5e7gbmaPsHQzV1t4Us1nqmMNRUSkgB7uGPiXXj6rivZC7Ej3rrRo6yAfqGzvGv",
  "key7": "5Mm1LFsrMFRkwz1rWfq9zks35XxzQN1iokeQRudF4sUZQcec3nga5mUhwUjmzHVBjPyZvp7y3TzN4ZdefzpC3cJG",
  "key8": "Ak6fkogwbeo5bRYbTxsFipQzXh4ur9L2vqiNV3FrgB5KJhnrZC1QyNZwnEAS9f9L5jYEnXsS8q4AHwyXxcjC7m4",
  "key9": "3YfFqWiVALH9Jr58XmyNkthCxE14GReuWpgbc3qKnUAMoRMTjBKfb4DsJp4fnX3634dbSqPx5cKP6edkBWqVpJwV",
  "key10": "4adXbS5fTbJxZwSNDayZDCZTLQiWGiSxAeC24bSBA5B7sMB3P34xctJY2ErXwLjNrgSHPuKeiWMkdkEKTA3MdGja",
  "key11": "1Ea4FuB69GSSNYzqq27wRd6Q3kk6TVXC1ALWNSvx2VhryP81V1oBDaUqwDPckKPa4EtHHYQ2PjyNjbS1pmUqM8L",
  "key12": "3hHwHPQUjKrTpYvoUwkJKHapQoDYnXFhFqcYkNdSojNegLPv6bwVsNJPyqLc2ptyc9a7jgJvr6FwHgLPqhRWFLf9",
  "key13": "E6T8Hag8pDvYfistoXWvBNshJUtQUPp86jUGAzb3axXrrzkWkK1EWPbNvuHaQ61dum6iVVSPL6Q9PhB4zpHKg7A",
  "key14": "4Poq8Bfm19UgXsfEuSpEEW3gZyqRFTdLx2STq1nQ5mmGAWFyxnnCC9EJMWpJkLAfxLBoekeSBV7PU7rdFpfY5cCZ",
  "key15": "3EYg27nPGVyt3L8MjSAxF2CYqVJaZwDMLkJVEp3r1dxBcLmxKdRiFP4rWLmCj7TM3ahsyjWLhyfJ2a1GjAxDLmVa",
  "key16": "m8dpGc5wpyYCWakC6EiG1V3TN6KisnaSwihRD3ozZpyfxPvjvoNGBTqePHW5J8EFt6LfPDPkEaQqMmJnGZdmT6i",
  "key17": "u8nAQ1MHNPyanY3Tf9FXgGcnBTpgwtu8TPKiD7MCtr4zJSwVaysoaiyfF8uJD7BDVUPxAQJLk94HG7nZtc7HzJ6",
  "key18": "3xpdQzgaTv8BxaSZ7gcDoNnbJgMwVxqYvdfxKnEeeKqmNZVoZPTDhP84XuRFTjW2NJKoDeivh6eLMnycMBjTtEq6",
  "key19": "3DDhDNhanXL7D1C4t5hz8oWrVHRLoWNQnC5UC7Tyq22pyKkmFULGgYVMYbjaW63GLH4xKFJLXUNU8GERKyQoqV8Z",
  "key20": "622hRGAVnSKuFidPky43WQVJZwYN2q17QJ74CRximTiYvm5zgAKbNducBwUvF4EW9QQ13RnbzBWxS8JtatLXJEjG",
  "key21": "4TfMCu5oCwCJK2N33WpERsxsZAA8X8VBAxjNuXJRh3x8oZFqZP1HDAXbzvAkQo63e76rJX4LJtq8ZtjW8Xzwrz2o",
  "key22": "4hYzTE8id4fbmGYwwojBcQTNpz1itdLNJ76dGwNEgLWxSRnHrxM4drZNrm8rvBkuocpuABbccnQverEuFDUV6mnN",
  "key23": "5eNgNxwcYx6LQ9cNMU5YdyPxwEmBXPSznyBEiivtqhsG5nzATN56o5TaRJC3C9rUxXrEvW3YwqZyvXWxpe7zki7a",
  "key24": "3FRxcewJUgrhEkyfyQFrViiiQgDwxWo9PHBUHAiJz7jJD9aBqN9fY4TgJ4PUZGxjqWy8zAxjzDZcGkK3492cWmTF",
  "key25": "5bmkNFLVcu6hkWMMbbjJuyk1PMY4MxnMV3XMUtzaNWNHhrKBu2Ck5Zcsspfmsx34Dk27KZXt9D2k6Y14guhNf41s",
  "key26": "4SdKVYMP1ydoexTUzi7FJJ4zFWaY6YmaymXZwRrrSWH6XhGRwWqNp5AmX9JLDUnJ6aJo5EWz4DZuA9TZFJ1XTxTb",
  "key27": "4e3wUBRFfgheHnkpCw5YkfmEhbFmjxGXChEPWppUx7ykBqSMoVva5WVZmKpsiL9hoUUN7WviAC2fjgQ1cSTMiJnm",
  "key28": "5BBum7ouiB3V2wDiD8dWgQC73hk7c62J334EESiBskFtDBtoPD8LaCuzaH2baep6W344Jgeqf9VKvkzXPfvCAFah",
  "key29": "3W4m2234qw2QDRh2hzwGpTtt1ZCcqmnKfgTV6oSBK6U8QMKED1aVS3LCYhZMJsmux3MQZCiq5FiXh8ggCNVfUwiV",
  "key30": "4YuSHUw9sUb7Aaahbno5Q77UtHQKfRZ3UoUciAoPCkXwQLuVwcAHPPyYNZFTZwBWgfMo1knDgD5tqDSruwWjhzPL",
  "key31": "2v2xDkj6ZvV5TcdK11eXgQp5ZpCWa3cEuEdS89mDMsaoHHtWK4tffcje2YmFt4TMRoBHGXAHY8uHwjaMYGvxm1jN",
  "key32": "TyQyizudDKLX8UcdctEgiaafUmi9yAc4FUV65mWmAQLhro8h2giB8Yy1EjmXzFECgP5hkxzzqqZQVdoFWeb3EVU",
  "key33": "34i9mHMXtPpywSYsMyV6NRMwxfDumzLDDcHMKKgwUtPdrvRgecNTFGVuf1gaP38P91xBKD2rYvUCLkB9u51q564R",
  "key34": "9eAF94qgpAaf1hBbf4a7PH85y31GG9zbU1m2F9hLs8RnpigBMfdNZAGCXqdC3J4AUGnZukdw7jwmY1MjmhJ1wha",
  "key35": "54UMXWaaZRmXVRZ5ErLuYb2nLZAjMxaxvG27LLe2urzYNcfzTSiEvEWvPuNsP6Ax7dACCW4jwGemfW7e48WMFEZH",
  "key36": "4dbKtyNN9eBs3A4XE2AEcqwFRQR4DvwuiEzfiAYtj2jrbhoTMwVSmGKF2LJFGGS3pVj9FDAqtGzFEWjeQt8jA27g",
  "key37": "2ayEtRWk35bxV3Bsw9nzn894rjbaT2u8AhEhdVjNEYekuT5Kjw5sryXQd1ocLfFMoGGCvBrtzpeG3yGRtxuFvZLM",
  "key38": "4f9HjsC4A7K96Lu3eFTjVBtBuZ6RBWpcbYLhzd8vRUaa6sQei4tyF4zBqWHegj5wZW7UtrF4PuyLnt9Gj4qLBTjQ",
  "key39": "3ZoKu8dKiGNcwvPomvq4oV9MK8o1gUDAUwMks8DNoLsxP9UnMkALVvraNdE8KkXPr71j4nvgsmnFd9bSVULyQcJE",
  "key40": "PB5m7NM4fQNKbgscE9H1H9pcZaPDWvK1ANTaLAxD64CuJQAuhnTQkEfvDdrtXxrkrBhkYpgFMk7z3EC5m2P8AEh",
  "key41": "2fraFzggAiYKZu3GhtG8kKvg7eoPMA9mTxN5n1H3XWn6smyGZQypBchTyUpaBqXU1cR3VPpUUapKwZ32fYYFPTmH",
  "key42": "52uCMVs6NVMar4koBqcmGqTWxpWyWGyjdpeXNWTowFiRs3fWPcsus43tSBG6FmS9EgvzuK6Y2i1kWMs6Z5qBpkhN",
  "key43": "4LLjJVzq64mYWMzwkDeQ4ykbJe48DezhKPmER9LVVtNev8CzQcDJRpfpGt5ZtSbkksK2wwMkwgt397ipmabByvND",
  "key44": "3CgTtDrvCpev3WYXTJeeK99fJhzXSVnfw4e4qny6ZE3mSG3agU2LjXcZBcwQ9pnSCFrpqJFxwGQDvdPkNzuwUrCM",
  "key45": "4pT5dJ9QWoU6eYxiweFaCNxH3FhaqjtRURCDCfB1tKWPKHEobcrYVnUQHCgbKwLaHPhc1ESsGEHMBgVMMuk86Yve"
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
