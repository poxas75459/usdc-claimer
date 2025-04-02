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
    "54faHwEuRrByKz8N45XhqPgSj5f733ghhcBj9rizGegbrc99ypVXtaG1qz9761LG1qN3anJQHXWsWrGxDZnSDkRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "414Npr4K6YEFxxb4ypuUVvbtfjBqHeDwKfz73nxqS4uH38AMaxCqHeBzBsuJSndarkmgxzrSuwwmgvpxE763KChB",
  "key1": "4yH8Byq4uzyi4Ewg4bmM76vctEnjgNAszqhL8XNCXLwuvSRTASPsGdYLJ1P3dmYksppJVDG9usQZfQxRDHwmCrQ1",
  "key2": "2rF6suxQVfuYAwtxXjaByt15qr4h457sVgrczL9q6b97c3TMZGycnNHe96mEb1JAyJnyZVsmrTW92Pr27ccW3i2W",
  "key3": "3gueRU5BqDzdEcKnAoPaLok2x2Fxu8js3VxT4qrkUR9BnRz3q3LPJq2FLHMvHjQUmwkTpGUtG6D6NawDBLEYaSX8",
  "key4": "5EdAzB8hX1Jvk1AkVhihyRijHGeR17K11faLBqUpEA2oXstZ8hWiBqgzDJKyTzx3C5MS6jPJt4sS76JNbLXfkixp",
  "key5": "5DTUg63WiWfDkMejYuLcZdQZNzGv1EPK94rbH46WghEiX6PbWd2R3JtBQafV4W4qi4DgyR47hbdMGdqJcuaRvu9s",
  "key6": "2pZE6H8Db6LFwMCmtQcFWQ8aJtN678q9pCEkBTDtY5Zc962c9JQpuRsjjh8R7D9Zg9MBq3k1Jx9HDiZBmpMFUGk9",
  "key7": "5fat1i3D7SGuKcpRTJm9MpoGyaxkJjUxVpwZz1Sr94K2g4PKbKVdAYMkozudcmjMgn1U7jEvHCx8acbnuU3nep84",
  "key8": "5sF3mmyxmsUU4P2UMtPByPF37f9aHRHY6PKBM8di6HHdHdFv4wTR5kcbQZpuC2By7twzWcUK8zNopNFviosQt5W9",
  "key9": "2sZBfTH4ZMfg8ZaHDuot3QVxjeSsHJknYNCKJccFgWiHW7xMfF8xFR4gaZskdePUR3gPUbNhYFvroG2w8LYKzK8e",
  "key10": "5wFqEG21pVWDx73VNZd4yHHHg5WSfUPSAQuo4eM6GBFtgdqBAEiD58mVfaioeev7Y6H3gQAgyrHGmCkpWe9LKq9g",
  "key11": "m7jZwJsNBF2ovtW2ystZBW4jqXQrAYBE2Q5gFTRdrPFzWTbjcHxt1Gf1h2GsV8cUf4HQjZiGuG2aJMknHD13Z9k",
  "key12": "2SS5VgcSXoozmnY8V5gpyed5auaZCZQCZaQSRCAR9Wk1pxUiXnuxNjbA3s5uT9HBUnu2RmxLqGJhGHU8mFqHLKAa",
  "key13": "5zSc6EDWUTfW3iX4eGFQ9u5hf9fcBnYB1RTbhsuzF9RCwc4jpGhtPYHVFkaMTA83t456PfeUmWQyTXumv81e4bQ2",
  "key14": "Td2LV8retcxNWtbBnZsj8dYdiHtub2myYbor7WhG6qdPERU2qKz95DddFqWHSuUCHCFJMGic3VaQj1VmXEKYzZm",
  "key15": "fYK2aLfbkdKDkwPhdpxRXZxtfFjJJQNCwe6SFMiVjcddr4wdzQx9kqpgKwhbDYapeP2bDVrpTis6Yaz8CV4e1KF",
  "key16": "m2QVuMH2vnxLAuYqjdrN1YugMiUV9Gm9LJUXpKL56qJD6Ki8LGk8m5FGsZL1oecpV8iLxMUCAEfFgBuDAAi2XHh",
  "key17": "2Trhz8ncytAkZxWBNd8ZjrXRmrgoPhcVKTXiTXdQYopSx5s9922Jh9RY4JHkaDkap5GWYK2bRnvSqZfwgppuVsrj",
  "key18": "4WxdHLG2oCccaoqp5eFXtLEe5k7a9jmDHLkZjtWgAWJ71BxMCFhcR71WLjEpS7LuVRA3c666upAukM8czg9aAVQ3",
  "key19": "4eLAm2idz8pLSPpM1TBparLSSCw8fpGGUtSpYENH9VGSukUwvqBVfAWs5JcZcfApHPnuNoTGtJ74HnW2MWHYySs",
  "key20": "4i4vLNULP5NJJuBnaKA6VLZcFBrZSJYhrf6pB2x9kU8ZfuCLr1cqZNtrCnJXBrssv9LfVUfHpnqZdEX9dweaRenP",
  "key21": "3R2UgUa1iqWyKc9dMwfZx2TgaiPYHGtTSANAVi788X9DL2C56mQTCMuaQnBXrK9dX1pezSDhLcf34yGFhUqa2QYZ",
  "key22": "5kqAZS44WNwHBNkTkdURU59V49CH2WrHgBUN6SBoxsh5sPHq695vo2VzEJ7cZ6z2fWTQxRkrpgyoR72RnpZrzWrL",
  "key23": "2FqyCrKq1LwssHnfzPt9Sw68qArE8Ldix82AhtBdRJuRYpSSEDJFCXD9syU2jQPXFYeEt6hMeELtXcirgYw1EGKk",
  "key24": "2uUU72KHdVXSK3PJAZsgN1wcPNBKXCdwZowuRDHtwehqHzubi1cGorii5cSoCxGos6tmFL4kEpeXpm4aGURWckko",
  "key25": "VX3tFN7DhRcu5M11rmUkP682GGUkmdwaT6e6h1GSLnR7T1kHZZawDKC4aQfYcyZbreWRcWuL5RQ11ks34ziJsSW",
  "key26": "5uNWCNxpRfhY4hwj6mgTvwAG6x89zXXu3pjozSxA9j6vohBNj1NNyVtqFVJnYA6MFJKpYra1cHegWMaa7qiMRNr8",
  "key27": "5JiEDdG1LYY2o7LLKac7MfSyGVSetVg4Y2htU4ybyKJhZFGrMreGKx8Ko4z848cZ6LFRuFUWjCAzZSRe4ecMY3BQ",
  "key28": "2RXFiGfpt4wd6TWpHaeS8omzyq9c41QSnAwzTPunrAKxXvuCYNqybWps3FwZ2XDkH9CfvhszmuBjfpYyX2yy4aw7",
  "key29": "7jVLNp2ayKa9QGvqsEFokVenj2Ra8CTdMvUAzUcV6bSH6AfM56AabdrtY6BVPieYoV9NW1CQP9fEVeM3L4zVKYR",
  "key30": "4JjZ3EEPP9hoPD6UWMfa5LGZ3hYnXXyNTQkSaRaStnJHvtnQg3zWAHvqdnVaEBv5muwigj6xJ31ZJXMGcaSZhyhu",
  "key31": "5p4kEWRTFDM4kXuDUbGtpj1mj2ytqMH859Af7fztvL18UMixHJwnhYyGwC4a9AooGtM8ad7Ub6u9DdxmbJnmUdP7",
  "key32": "4JF1XwGUsfBPTn3RH3iyuaRpfbYrmziS84q7F9FaBqcyjy9i5iNQXXexAuuL8VELpyV2ynjDvXtCtjy4GNzuhkRQ"
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
