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
    "36V9FbUftb7aZSGQuLnNhbuuRwSHmvhA4HWJStNPcjEat99mxbApAuPDiQ5G3xhu7tWzYgUs3zVuGbkHEYqZ9Ms8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rM74rDgbyGbjAbmYYLVLrUfq1N93KJJcibjnxxas3hBh44LwzrdAA4Tu5a59BJNzwcWyoQMqmVjzdRKUZxYGtLN",
  "key1": "55HnyzfTVTFPGewpdtJiGfFKphxb8fZ2VUEp3EwP1CdDLjxENq2FdpifQuHBXRcjCjFMA8ojzUxm1N9X38i6S3cc",
  "key2": "38JQks3K3Xr14d5YuMBN83P88bdEaGiyJEmbUJCyQcwMJsbtm9uHLnJpznqLr9tP91Qcun1QZdYUcEeMZwCXLpGo",
  "key3": "25RaPhdUs1HtKtdptwWVp3dHcKVMZgbx9aebW4LmwrTRq1wsM15aVuQhgGvzaDGDDFa68XMeXMg4TQh771dMcxqL",
  "key4": "3EaxuBCxU4i1jgAm9FF8eRFAcm1Qo7rNWwuqeRY2w8iNeYuQqR8c5aqGZ4qqEqWVGanLYbdebPJGnyMpU9GLKPPe",
  "key5": "5PYDgdW535efGK53aPKDnVvgRCmYHJ8UavcDKuv51Yxfcvx2hXqFwiVpArPFjtuFf4E4CRM57kS42fZk4Eu1hdjm",
  "key6": "5zNepDdgFU3obV9wbFXZppYBhjN5iDvz5De88fToaMvLXuWtDbqGAnx3gkdkeJYANjH8DJcobp35S6Rdx3ZohuUK",
  "key7": "o882zNJmp5qCN9RPWaima9rgzT8TNPTXbz7zDCMNsSFN6YGr8oP3YieKbsNVrbg4dfZu6xnKGT1ZLQD82CSMUnP",
  "key8": "fe21PdbwUoo4k9AvXUt2VLem1iMtYNarNejwFVs7uW4K53GxJf2gUWxkptuKJpij9i2B3wgeK7ZbSjUbuf6Pt94",
  "key9": "383SYj6bnckjVdP1a9CyAorG6hDpVqVwRJqgoczATwubKzFGj4tBhPuMJ2634CKzkWwMJjGVDNzdiLksbbdXTmfi",
  "key10": "5K5Rw99b7qHZEXeFAzNhqm5dweLDiT8L8sNSx3Jjjho6dcZXE1PZuzhq8rKesH7SYf2gLCUCLD619Fy7c7vHbTpH",
  "key11": "LGzeJ8Fu9t5Ad3WdWU8pDfm5FanERVWApHGnrSSrXvio3m1vZjvwCjJh5CtG39gfawHjUZDr5FnrJPm7hEZyQu4",
  "key12": "2iW3Z2igjLYrnWj9RGiMZf9oAuNZL7tCtGiGF5nDfS1QGRqVdhEnuPQmQ3eV6PYzHQu1FaF4DzpetP3ymKzeWvzF",
  "key13": "5nVXDkPqLMg4GThUPsZ33JhFpDSwFpCmdxkaCf6pwicsnWWehWcUKAgExzBTqGDYc6rPL5bZ9FPQ9waf884yV9jd",
  "key14": "9UVRWo1RitxCwPXkxDe58XugTRDTY4PpYPMVV8QBWJ6LyBK6zdPnAcobpKZZd9WbMfCgx1NiUPswbUjHpmrqxRi",
  "key15": "Mxxci9VuudRu9jDknTiFpsN6iGCHMQUSnVHsPX3hyzPQUBEorF99LWjrZuJpvgzn9Ez2DhdssFpZUkUZW9E6jvh",
  "key16": "2ipPnXCYztYgrfrk8CTtgYpXULMb29ZQgfHQyPBAopfjuLjUestYcEwAyvKuFHjM6G8b2Z6wNiNnXaQZjo84d36h",
  "key17": "5FP5WXvh898fQPGaWK1So9FKjZy34jkhwMzcZ7w9AMshsrKNLbEjWXXbQjBrU2YtpyaDwwQDi1XEfZtR66yRbS8t",
  "key18": "2NHM1qQ5duN4Ta9ndG1sz9SCEYX4HXjeWvKwMaQDAriGWvi6P5d5Z3MonGM9sHVkt2NxxtR3RzWSQBEbpbsEUrwD",
  "key19": "hDmv5DtsDm4vp3AQjxDnGCuGeAk6v9iSAkVeg3KhMKr6qeTFrNyvVFzyzotHGwogKNznE4SmpeqRJsM2LSpqHu6",
  "key20": "41xy1RiDyKkM22x5fbTRLjyHQuRLXufnapwJ136iBUFCgmHW44gfNo41jaR39xJV5oioFCHWqtn694XoJXzuJNaw",
  "key21": "HZv9tYnQFiLAF8jjB6Mw6H1TeTCrBeymJAj3stLjy6nBCiiHn8UUzRrrThatk1FxWyVj5wRWFnSuJJFUGNmPHeQ",
  "key22": "5cRvnWJHYgiP3QWEFCe7vezgup6iybVm8BJg7gRB7CEMqCDkJHpV2fM5eFmaSRMVTTNt2eq1KTLeMjxyoHCugHYK",
  "key23": "1XR8rzcdNABv4L6QwA7gnaKX7kSe5WbkMmVsmpWVLtNEUaeNsuJYSNhFowVRKvgw5Jzkdqwcx1bgT81qeWxZyXw",
  "key24": "2asoZwFQVpK6ZykoQjDSju2y7U3EWbsRR8E9y8THWajTdVJS5BMWj2ZT32fukfiMFa8oqsKRoCxhVw811S62TkeV",
  "key25": "39w29TNMK11s52ot87oKd1rXrFJfTb2WzxoJ4oHTs9VnYKppQ87nvW6BLKdgrarRMsPFzK6Wdi3SDq8QnXoFAFY7",
  "key26": "23rzBUzjvQpJtzQnagjW5xMFcCsjHs9CSmJT4oG7UC2yvrmGEfwD6B1YiJrn618PE5bMJbx1ZMzNw5iSowDC3Nu5",
  "key27": "485Qkma5xGHFSdVmGSL6P8DGqS8F7n1sJEvGSJc3HuJvgG9NR8McCV1WShoXmWCCmYQvkWaWCtpsE9DDzmQs9yTi",
  "key28": "5iK79Pc4u9dUsWRhqoTcUcGTtcRCZG16okZRVdfBx8ccRocVhqHARuKgiM48jj1agrBwac8cpqaEfdMQTYsUwiDx",
  "key29": "3ddUu7Nedq3Ss2s4H7tfHKz1kDd7hyaNNeXsLxQzdB9qttZevQhyN6Na4XeQvnqS4ivxpMXow18KSGAwqHDyv5Ni",
  "key30": "3DcYUq6rtkSYddVzUdExom9L4tNJEHndSSi4MJRr5Jkk2hddumQpaJxVcPZYu3Zp1fdHR8cPBCougtyovnNKrdKP",
  "key31": "2Zd9WoN8q3V2tdV7V2DGiySFjmY2Ex9wnQAhQgJ3fYbLweZho274rYFgjyegTU4WYYYwnhtYYofQUwV3n6SV3Tnf",
  "key32": "5hEjAC55y8czCqufSJkAJa2XzyXjm7PwrV5HLuQK1Ur8VNKvoLJsHpy78WWcjqJHmsta2xw7DnsiTd9uMVopS7AH",
  "key33": "2im2pe9G317uUQ5Xfy1dVGyZp2TheiyyhbzATL7eF4VzHeED3eJnA6D5KsD968Cg75ZsBZcTQYK8mFqyfJh6GUSo",
  "key34": "2CyNNSgEpxqeHDR4AWhmp97Bt2JLpnguNxhuuNXUQt7tgtdbAuZTGc4Z5jfqUFUxAwAxyWx2D1D6iRTi3pJqMkjC",
  "key35": "5NwKxgTX4U8JuwXnVdtqMSmY5PFM385AHXs8PWTX3JzitaNqdfxLnZ18cqM8AGNuzzS23Mvfuk6Rmq6mgeQyT3DC",
  "key36": "eNySawmRRNP3RPcnE6wvDeJXFE78aNAFmXXgGzwSa3npQ8nAjHYWi1qU1pnctD8o3W1f6fogfFnnni3jnwSeWmj",
  "key37": "2oJqM5ne6yVB8YUbLzxAg7dzMray7nNrxtFMRSxLgor9G8xaBYbY73Qq1eQTTs9SoUMSpbVKQtC63fPYXgje4iMh",
  "key38": "6UwALzJ7NEX2X7NWYyVCNSM5mqBga4PkHcsChkHkD2bw9KfuVpHpgRjLenEVqiW4GQe8PkCwryKrMoGTwQpj8n6",
  "key39": "2UpWY86xfS1FZaZLpZLdR3cT9bspdRmG5KXe1S41QbLdy7LwvKFpNjfMXmSuJNvWDiQW2DriXCoAxedg2XPPExgU",
  "key40": "26mGmktFWLuEmJ5PZz8oeAXiBfTb4Ft8i5kqmqJVmeXCpq7bmQrybaqpGoJt4VCu1JhX1GvcMrFXzdrwPUC1cGCH",
  "key41": "4tUfMPFouKeMa6f325DwnU2izEa9rqx2nziav7DURNEP4aq3itWvjSeESxCbYokoSGCzuAGprLhKhXLCUtU7o2iM",
  "key42": "38hMcfa21BgeeX44xLMEuxpGag7aXovqQk8euDMHkiA1UVZg625d2c8M7UcLYmHFW3XVdM9Z1iA25ZaH2H21cCCe",
  "key43": "2KyqQqvRV2cbs5ywWBvZmQgzzPKpjhUSgtr4TRACPv2aRdyPR2trs8QkTKhTz59nWQHFMMewwRFrv9hk1MCSQshi",
  "key44": "g2wpLBLwhM3nLJXwrog4t2EsMiiLrLZwD8eD6Runcvxnbm73X8iJYD2i823bzXbJhyUhCtk17bTMH3sCa5rJ2j2",
  "key45": "3Mu5MMWGNDwTCU8yNGEcC9NJoZ6cVNVtkQq5WsgeckhJQGsHZp3BpZQ9y9H2ChsPi2enJTGHxpBWpd4w6veJV6NA",
  "key46": "4s67JHbFS1UHMg3x5LdGNPCEXjb2NNR4rwGPLhDVnDyFmFZ3WXipKQT1zExbn2n4nhLHkaLwJ8Bp8WjT55xxeja7",
  "key47": "VTvXJYbah9YSYf7C4cxP56ZCzpqCMTMADqfp4LGkVYAVxcu6Tt9RC3KDhnm9rKTvupVHMvPpChiiKf9SgvMjh5P",
  "key48": "21jwbNq3Kbu5hjoK5hXC1PWbygoS1FpehDbj3DbrVbF8tiNqVwQstNg4X8tPhSLhGJXqXhB6N1UAdJpndJrgiS26",
  "key49": "4ShzA45dWk236cdXPBYbAkuiWud66pjNgtcfShF5tEngwSEiB2s4SAJPb46mkaN66utf6mcJYkNdRHMpcGAiJZuB"
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
