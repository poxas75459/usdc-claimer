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
    "2TCYyGfwpxhWNNrRtF2B9jZ1euMfkvszUnZvSbqvjwQtydpic6vXxcNHJiao8H7Nkru4kz9m7n4PWJconmmaxMup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5suC3pJTUVDtJBZFDZBLMMCv9yi3zeJF31tvsPX21e8U43g1FJxKsE5CYFmSnqdkYooWARb2o9XPHzJxZroFzMxb",
  "key1": "WMu49zJNsFsXjo5XuLW7zVNCnC994oRtqYsZ8tvLYUwBWsPTyhY8D1W2aLr5CVBCD7GWLtBwn9bbioiewEyMWwe",
  "key2": "3yrfhMsFrVHp6BKzQZ7mWu8Vj8VXAVRjwjVRGTP3syXa41HSuaPK6aHUAf8KMyCoC2A6KHCnUUHxz2bHEkrHT5R2",
  "key3": "5Bncn8JQdU7AgD1PpXkxQ7TQ46pE5ypHVtDtDGCFCo23kcssdQHt1KUULgXJDSAtg56SLz1wy53WMULuz6nGczMF",
  "key4": "LiBGaTQ4Hbrbm8L5aZSuj8szD9vQXFwuHiAtmFqh6LiTm9BAbTWtH67kSfwKG2sDq9RyKbqGDnd4uthAaHT9fxi",
  "key5": "5BBM3kBDUMCKScy2bNE2qc3GVt9R7voA6ebSpFB7iR7KZMaLxB94CF7wvJf3c2KAjBFpzz3dA24jKVGgrDSNxy57",
  "key6": "4Rh5YPLTJFFEuFmnNUjr8JaojEBS6LryjEtYRyP5SABuEzj7rw9vvKWgAAGoArLLYovf69cUW7AyAbJNNRsa4Wqr",
  "key7": "2zFQ8FM4uGbf1wahki5Rc2KSx6tthoLuavapcNQTnYK5kM11TGdFvGsjFM3BSBA8NVsPQQz3rNAJV6HiCnPQVKqm",
  "key8": "46qRTzVqatYUTUaDBioJVWW24YnYJRcLH23wtJrxkHcePwpuqyzNr1kGoY23NLVMNXJ9KYVuZ8vJXZv7Y5ojfYhy",
  "key9": "5pssN4RxJerBtSASZkfSeVCZ17U8bDjQDahVDtMTmHzhKTwGgME6tkhBxReAR1aUq3HX7LMwdchp5gbDijTgTxjS",
  "key10": "3UMy9BycWRwgGUPbjGRuPxr71LrCr82fo6zjZwDsoPz7mLcLSXWaQW7u8j9gK9YjW7LDMyKZ3MebG6QPkHGBv3SK",
  "key11": "3Br3pfviUhXhNjKYsNvWBNamYuD1xNH3sYBkxof1mdmPV4eTANsoungzk3v8TwRzBTjfemVLPYnyCndjTJyZW68x",
  "key12": "2qVALBpQ3kBKF3xHwSp7vvsyv4FnGJCk4x2CW6tyfaXxhGZXa6t76EncNMmvztFbiTLzyrDejic2qkCb2PWpnfeX",
  "key13": "2eavrqfwLVwNZg6TEdTP5UXcki6n6R8su4VgmaQbPzmg4n7kSX7Gkgjj75QjpzHCAXfJoczDmAWx1EPJyTN91u6B",
  "key14": "35Pu3r9d6tPhZ4RLibBohP3wWe69eG35CMrbSMN2TwUCsZTL7vTZJgApkBcrceyyb9YvXYFoFYkSZXkY5vWRgKTh",
  "key15": "3DLgcjwYVk4bqrDggKbPp6Vgs7ruw3uk1zRRH7VXKRXpupkLGJA89ET3L9JVkmg98Z4DTzBLJmpUrNEmmupQkero",
  "key16": "GvkSaEr4hnjdzNeCp3bmokU5KHZdvWfLgYqVYVANwC1EA7sYkTV7T9Ar2N5WrEaPY1DyL64KDivr7jsLrNtkWi4",
  "key17": "3Bzcu37XvZQEMHSESv7yyS7jK7Ahm3aNwrDDuY9Dtcw5srtCDdQVqcesRH9YQq7XL6oPmXijNtTDg3sYKmFFJVgi",
  "key18": "28dxtoFb6Pnqx2yhS8tPVAaMcwxVpUqRgrXhF4ctfyMqgG6nEu147eEMUJAYS42uK5RuwecLs3BweKbf72N71VLi",
  "key19": "37Y4h5TxoxJirkZMswp2ENRCsejhBEJG2bo5Hu1EKH43pfJkxYBMEvcyTg9FctbCou29g9Lts3DFvqy4d8ttdoW",
  "key20": "2qnVcr8Nb9d5ckcpve145CC67qFHqr2kUje4qiXGfnYd4VUzvu6soBULaJ9zdadiAsUWtBugwjphU79AHfsEbXz",
  "key21": "2kDeseXrbkFLVWkHVTrVyGfFfbzCUvgQD2NGY4F4Z4E7eRTQm2ts4VP9i59asSQjMMrC2YTVLGvgEWvZEzGCP9Zw",
  "key22": "A54cW7awzCQBKwjEaXA5Dzz2Xx6GDHqpoGRSECpTWz9GcmjoCHKof5QwNGdLygz3wT7tzRHyGwRadS1ibQUo7sM",
  "key23": "5dxn8ehk4vTq76X8W4jekt4d9umq2XaTrFcgSHz1vS4cxwP8S4aXoZK9bdK3S13dBVrWrvyaU1BZ6E6jAbNJGeZ3",
  "key24": "3sBeeAfHtToQoFL1CBHwrZL3arTgXux9ig96zRsYfSPrP9ksLm5Bqdb5zGVrBLr2E5wdeNkFuKRMrBPB4agjpoYy",
  "key25": "Wm3t7udcjgwzqsH4X8TYrPpT7Qq55yxv6iEmfVMrbTLs7H2uL5oTthmtgqErYW8kZ9vogN5evFrQxWarfM3ETrz",
  "key26": "Vx1ZNMaJXrV4Snk8UPxMqBVEtwTj8xNDvBZz9KhQB7KCXkGykKimyi3MtbWjVZTd5jF6ADTG6sCDN8PygtrwRah",
  "key27": "E5q239rFTHm3qF3hFeFmRwEUvctGzm6G6uoGict8Cn5FocerjijcHBsvTqDbSumgjVcMr49iTcgcgrkQKDjJRgh",
  "key28": "5ipBW399d3vdKtVxsC1wKjx1qa1DNyuRKhtcHoLHRzJEyCgF45TcNXgD8sojkRNheDfAwJexoayR1gYwcjdrzG1x",
  "key29": "4zPTKi4exGydSWsZfQSxWH9g75rUqXLxcZ8rcR4K77E4ovZrdLf2P5qSnuxRaTT5S1mBzQUJz9Tzgcoapfc2YC7Y",
  "key30": "4Zinqb1ydjbYBUM8sSn2Ph6euTUEdSqmd9y7AfzLu8UpvERshyj3L8gTMszYSM3SG7WCjqY23b3a26GdbSr6TbAH",
  "key31": "CKH9vDJXNJqf9cZkstvBt8QdsJXREchFDxNiqhtGCBoBdccShYBMtsuSdWnNf2xb4dgjKFETuWQoPKhrFhLQhAG",
  "key32": "2okr693yMcxHWd2A6qFMuerZmFTWo8Qi76kHohkf1XcT6PmbBf5AJNiacNXMnWxaMVTmJMDvuAkQ6co89PncLSCL",
  "key33": "3dXxdC1gf62srvdnebwaKVgZPCDqwU2vZY3BQcxGZbzq58j8zXLrJpVuAmdMKaApv56dB1nT8yGpEAEEfRhvkeVi",
  "key34": "3ZRLSP75c46CYK59g1KHzbtreM5GQ4bzVGMRqiqPk5JPzHzyH2yBLBB2uXnDR3WPRFsjVP8qysHZW36neLRsbgr1",
  "key35": "2PuYFnzXuQQ9HByqv2LGWxtXHnEQLtqJmNq1vsA3dbL1kS57cJQs5KrqZ8pC8vy6bEetQ6kTDUKMV1qih9rB12Wc",
  "key36": "3YT5emL3q948TgkCAwSPF6t87oDYmNNwxm2i3RgmztaiKQ7ivkohbYgVWBiBLmnKHzZ1TYpAN66oio2ALpKMTCSa",
  "key37": "47jSFJ7dWo3LPYdVmUBZHRhhC8tkFWE9sLwxutsUYFPeAihfD2dUoD8XnMHN3NnZAMbmVhgqkrqSB38tEcXcmqho",
  "key38": "45g2k2HdDtSgQSq5NVzS4rhmG17tpwTYXcdRcGmu6HbZbVP94kUG2VU83XuKYUKaEwm7D1sMQkpSzWMsRfweRxzo",
  "key39": "5d8ZzU3mQbwfy6LiiQampeGv6ZTsLG1UeqMfg884NSRyWphbAY6BZe8qyHkyUFDdpGqMaexGEKCDXi1RvtSB9mrE",
  "key40": "PBikxY7vyzPkuVHQcubBJpxJtLe1qcRTY8otTDswivMUv9w1mVE3jir4xydNPS3WwEnDBPR32Cd1PY3zwDjoSRJ",
  "key41": "3UXXswST6Mr1aVjTh54hGtPJvjSvChXAA2ZfbpJDERfkrWXE6zBybHoaX2RZS9jkg69UjiJbSRoVfXqkSDfpDELm",
  "key42": "3ZjXXwUQ3ZVZKL4HYRgmf7B58ZAefLpfwWKeBCzAJo45fUi3c1F935ySgvEyS7QbSHCVcXhzJyGtKvJeoCgnVoPN",
  "key43": "3puzF7vShrWQdYqgji2FuUFYisrZCEHgF1NpSNvRVXujzbVDq9UoRJ557qpSj5w5WgrFdtx6TuK5NSVvdMcBT5dZ",
  "key44": "3js5AvV2DEVsEXm4xu1T2F7ydFmbT16E9397ALQSWBDj2uHbEPwMmHW6iPyGYNL99iAZLL872PdcuhWTExbTyyDk",
  "key45": "5aB2fZRMsiAVtHcriujv2yucnsHUJvoSqkAsbKRfK8z8vWLzKAj8EQ1XWnp4cGx8YyEFSx94SSi2d2mu63XBx5rH",
  "key46": "3rngR4Q2Y87dhe7TXxkT5RW5HJuVyQBFNdfgeWhXCEd76Vo8MPvaJwwsxdrJPik1xe6vZobLD1cdac1ezRi7QWAS",
  "key47": "3SWjegQp92gGkudtyvxhEBf5CRBBY5znHJQPdnEje7LFck3rk5VuKAoy14Rss1UnXBDWDyDqeKpFKtafg2GhHvDD"
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
