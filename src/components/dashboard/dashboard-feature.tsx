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
    "2hz5gLYbM24V3EVSVmSVCkDDrEV11eJY8hcALvkiXHxTLxrRjDgNbNxjraKfDMuej7eUpjQtUDqH8mxY4ANdPiip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwdBccrH4xLACj6Uz912nvzQcU3Twh5sqnQ5XAriZctjR6DJWNvbo5EK67nZFu7p575d5DWMzk4meMhC84ryJeb",
  "key1": "4ei98XY7qsspPQEvchG3cRxfwiip2QepoNWc3Aiz1bwq75sDeHe6MPpSR236aAVczNZEjVS2BHpY3F6RcSuxHsPw",
  "key2": "67WFLw5Rwo3tdWNAkGLMshi3mAxLeyTZT5YDnDyAZymzNdCRZ5TWuPgZWNzMDKtcnPuXgZyLQ6cgBNVmMjQEEE5i",
  "key3": "5UZBfQLyWQGXZmPF8a6CU3287SHE8uqasX6NUoKyCm2MLkzTCyGxwFTegrXDyEh2hfQiWh1Vix8XVfCT1Y8tEYeP",
  "key4": "3cfcbdrxUQFtpv6tSHY5naAWUKz6jVdMpADEBWYBxMdASLXRf6fwh3p6iGkNVHkdGaghKVR6t84N8yVuVPQEXGa4",
  "key5": "3TjRWhmBUSMbewNhmbamZ7KHJFmjdu55teB4JPAoGokrNUxefZoAgYzkpRE1sL74LWW3yeGehHJe8sxvAFitLPZf",
  "key6": "b3BVGwWzRVfSU3en6TULQByimMyotFwusqMLG8iADG91Jz3tieu6MLY22GF5EQzTxwVk8Y4XikBtSCxCgprQ7RV",
  "key7": "2mymHYFz3mJpvcYyBqviELcCCfesP26qoMJCzoKh2TZnkKLCxQGbgKhKuGiFiJDVyWkjaZNWt4dkJhPAjkANaiud",
  "key8": "2VLDbdA6FYAtj3WXcvxKVuSPW1snxMpaB5Aii1yx2NoYqFNcy2mtyKs32bPZ1NQDK5VSko2pjK3vMK8gcA1JhqTd",
  "key9": "2zS7vQt7fFvDTu4KARxcBSEf5rv5KfDZj1Fxx6Td6vo2yWxD3iTouFkCDQ2xF3pWy7jJJiH3GorY7UrByzgYyonS",
  "key10": "33GRbiVp8iYLToJRkcoy7q2hH63rnxxQWU5qJcm6uJBUG9D5rp8LrThL3bCFD5wHMw37sH5CYdsYXuWauENbW4P9",
  "key11": "geYW9Prju5v39kX4adb6DUh7xe2zLercmCGDsL6AzDS4Fw2aF4CzNFziP1yYuvCbMMxKcTs6Ne3aHB8nTYganXn",
  "key12": "277yYuDGaw3sFQTUxe393dGYCeJVcaBoPPujbZTpA8P2JY92W38FBm8CFCuPJSYCgcY2wkaMQfKcHM5oiU4Mw4bL",
  "key13": "29RQGybscew9uNNaypVkgRQWotFrgiEsqfiwHuhZndD244pfUh8NMQjkTiPs9jciXYDVkeC2z7tyDrRzmatj2yfv",
  "key14": "2dzrWiaG8pdcZLFRhSzi42ZwyWMvf4vuXbCX9a8gdFZocCuKvsx5VVkyzxgGTxsGAw6YRkXhUocXyZgHTADYpYxX",
  "key15": "48sq3fqmTBZadV9s21vAQH3awAZE5TGKRgcCmegu2WRjk3fUxw3UbvKmJnz7ygTRWZriCaoy5yssQHzSWHD4x41x",
  "key16": "2ATqmzyFTYgPeLb6gD2DiGmLbKwt1greSr1c2d9S4aswiEAAWzrrK6Wa5TfSP4B6i5cLB2NfrXtsop2CcnEkfzDk",
  "key17": "5G4PeMt1nVV8mMHBFyJhpusxRz6iSgikD7kmsAZ8HzYwxxYzmDVRXDYi22zKpGSbtWQ7AakDwzeKiS3TiU17KYWn",
  "key18": "27JRy2Ny56S8nzhvUFfRZUAMdZXrHwbfW3RxotbhPMUDdCGuTR6jSjiekvyjLqgQMFCveLkcTdjfQrexPfo9kM7e",
  "key19": "3q3Nnmd9Lbks8ztvMAsE2gbqyEgLHWrUfL3HiN9LeutTfkLfEa4BMeaHXiSbr4FLYH8abudq7Eu6EB2LxT6ruqnG",
  "key20": "3EekwT8YcRz7597FNjp5W36abooDzwfTiBvoWRa8DSUNmodd4sdQ1dHfjUt2swprymCibDLqNLw219EDjPjv4oCJ",
  "key21": "4XvCa5X53tiEdM4s6rQCJ1ba5L6CLTPQmJG75Zj6drLexuWBEvonQE1GJUrhCnQczLzSXzzqebxDNfqeiBBvpQuU",
  "key22": "DzekwcCUyggSBGwy7zweAaY7gXDty6iUU22gSVDpecnwxC5YtNRXv52sXeRUr16rKza8bnPEo6dV5n2DWRPdcDb",
  "key23": "B3H7mi267GY2NoXXQeyXqDnzeEbCeJcDFy2F4xSyo388KMfFy6FsHuJ36EdWgEKW79duLeAtTbsWqgJqTKc8Kb3",
  "key24": "3mvZzujZiuxxuh3Bsx9KWa9nbFE24gEpz4m7e8fXJY7w5hN8i8AgbArwsgUrMQA1hrAikhis97j8xHXh8Ex5RDka",
  "key25": "5XPKD7BJvSsckduUkLDwJN7qjrheuBrQcTsxiRuJnH3YtCgZgsfEJkFR1EC9JwxNghzoccatYSf5Q91u8gwVxuc6",
  "key26": "28taz6JbWLykmWhEW1k4yX4adaSckXxiBcTWpwYbTFxmUMPUMBQFrWJnjDaPzzo7GYMCDtFp5LntJzYRLUgnewoU",
  "key27": "3rNm5FK3ZusN8NtCZeam9QdgDe85PUoJ7ij1gJEzwo66CvtET91TGefZEe1kb2RpKjHNyPenzZetZJMrArEbBhcF",
  "key28": "4tCVFAgzSsnjUBABPn7LLZuf3Ej64SGENnyfvEDjY1rUntTJKYp32cr8DAGBC1r5K1gVsCRWi2ZofJEPorZLQWVy",
  "key29": "2dcGRwTE73rnkmk7L9QDjcAeDkLrujZKdJKMF731RqViL2aKvJYcuRpnkD99izuyGDz2hijgRguRWyrWVAfYvfrJ",
  "key30": "iAq98f3yawGRMn52q7cZ1Et3hXQBG6CNeEtJnSr83QfinnxTpgd9S2q12qDGTCmdviAHYvY8GCba5bQo3bJPMHw",
  "key31": "5WRLYjRmQa7HWZkiYSXFdRYJMw4qyxhamzS18rqV43b8tYcihS6qt2mQMBcgZpsMAoTcErG6wnYGhUTU6F8BqQce",
  "key32": "3tNPH93YUjvE1ahTGyXMmZTDM9zNsoi1Z64gcoFKp4215qckApwQoZ7tyToVU4iJiqSB4MNVaHX5SdMGhcPaM7s3",
  "key33": "zrmyy9pPUBQ5CWbq1WtHWhAb3UNrwEeF89w9a9o3A4Q2NcRraGTakBiFHwR4FhTormposSzfZSojsMuSUKmG7GR",
  "key34": "Q57MUQLwLYSDrammuhLuV4yRYH4kTLBWDVaHZx2erg4BYYqfZKUFk58hrhhinsnxeJj6JVmqtp4BfKmvNs2anh4",
  "key35": "3QNSFgNJ9Wf5pacUf6nLCTRYYvGxdLwTpCJQtxWSrWNBU5LBa4SKsoNbPwST8rvsyaRwj6y45dX3jqTrgk3vPs4Y",
  "key36": "iQZpZsoxbj9amp8Wx3aQdDPnhcaDbBujCg9tv4mXXkjZUiYgWtSJL1CmEMN7RZCL7BviaqLAtgzLEWv7p45KjJH",
  "key37": "4Xk55XgVzyZLb7Sz8Mo3EgsqPDju6cot49KcjaQKV1TJF14vTd1bKEbmiEubZcSSTZJWhXjFvHgdea6p5fESpt11"
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
