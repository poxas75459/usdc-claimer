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
    "DwHYptn7JNkQPXfikBkHXK9V4AYjdkbv6hBuYaqk5UwuXMff33dbie37X19vBtXVytKFzq4CgQseurz3GuGAx2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61D45gYhxKJPqk5giTYLQjR5LC8DUgTNgV6aVtFvC7nsFmGv2aZ9PBqgpbg2r8syyY4MWocZC7NQB4fXHzdmSoLM",
  "key1": "5g3PGhGkqe1a818usgUJUq8nq5J2ds2ATH2uNLCuBJe1Qz4N7XKj4dqgZFS5MhAPLEunbzYehjSL8i5YgWMAnH3W",
  "key2": "KEs2abDGPKLvsAKqp1kgZqQ6B1MAQZ2ZAdKdmJae2AM9RYi89RvZKmF6WB4q47aePCRxxcT745yxdAvQBtLv6N8",
  "key3": "4v43LG2EqCsMHYSzwVBBByZrU8aHZnmC123aAQC5W5tXg748cJXo1ywsJVw6K9EidxQvFSoxU7eyUodvpxRXGp11",
  "key4": "5TGifN36ZSchztU6vdgNGymwCJey8HodsfqxXTUG8yidHa6ABriJyiHjgjjkrXvjWHjFNAT23Cnmidv3jZdJBibG",
  "key5": "xVy3WM9euBpSFVPMykxbVp6aP2W5SphPiyVfx7n2m2tZV1NS1NYVGNvVuzDZZuky9AZBWFKtnz7qL7GfYsaU86S",
  "key6": "4T4i1pUijNnzRCMbE7mMq73BR4AHYwkWC7Ljo6GfFtZHiAavqJh8FNB4wo4vjaXa8LQGVpAJCP5Q1t568QmcC5cZ",
  "key7": "4MncwRnFRZUwatFBoTPjMFLwLFqFYRjntnSb9wBU2HvPBAwWqVXhWmS45q4RVTQqBXM99BYUn5z88yMJSeggmd9N",
  "key8": "2aBB5k8QS31iMAvWyLU6MdqyJj4NZETW2AGCdMVhGQea5EcpEShqYuWoVHBkS8vmr6MCVC1jQ5wmw8N52EFymKoM",
  "key9": "9FXmVVASWDK1W81PRYqSi87mqebCjSaJg93oyZQM5sVAPddmZ3T7wBGL7vYhFXTZBEPJmjXHhCNtFCcwnARFVyj",
  "key10": "4h9Rf9gqeQrTcE3K9jhndopM6ojpMkiZdGJdXXoDAeQ8F2kFtrnVgAMsP8WNhEaaEzFjfkEpJQnZH18S8rJGcWsh",
  "key11": "3imNYgAhmfwVNRdUR1w4QpTSN9hiQqhwYPhJDi4hCA3SegoWuQVeLW3sgat2sXGnyGYbVGLVebt48eGXSRSBL4iC",
  "key12": "3Z2d6rXjUPKYnZDaYKnY5A9W2ASiLuNhsS5StuVHLT38WjEUumgkthhq1TqZBkqRiSfvaUjJLJPBEM22iRDUf7sU",
  "key13": "4HGYDNpTYsajmqJ6royHKyBsXd5AU67JHFV7zM9LM7cqWaexq83vGBZP8rRuDPqrT7aoMvQLYrZAhpAiue9hfD1k",
  "key14": "5seuTaRdu8Dbchu69YHX9JcEqUyTBpusc6gwsnVtJnXrrz875DjiMcx8cuNhgFoNwprgRSWyWDJ6TJV4vn4GdGdx",
  "key15": "4msQ9UUEYg3tuAmvmZkuWuMRUV69EEWFnPNvT4nrzgExyyAUxYMxJWJTrXhStTo9tienTETgnZV5PBB8zDdbJ71Q",
  "key16": "4aapx7FUZjEW21X1AZGY4LTU4pBNTuWmXdVjG4bCyELCpD83adsXVzDpsncNs3mfAq6Drdq5TF5Xj32Fto3GzTAE",
  "key17": "5w3ifAtYRVBoHCpAhoqokimkAPxB8nfJGtDChKZsXYFrDUZS17ZQW2HaE1m3UMXBJxLdC2HDKQNJuYSgiZGHpsxU",
  "key18": "2BhZL3TW98NFtmSTtoev8ZNRJezo5AZ8ugswQVzXy3WjorzVpTGhDzcm1GSdaHzFq1Y2RQBewFrWhtAx3GtKto7E",
  "key19": "5r2zcnpaPUzghm6YoGxT2oG21VRSYqS2kqPx7obRo4e36hmPrZKfxDrhBuiY3vuDeoD29R8dS4mEybgpkoYESaTi",
  "key20": "2S87fWxNAFDXe3GwNNqMmHsaGu1Bi32kNKVKfptCRx3TbjAQAgEbsy4yHDryVvxyiSJ6cHBA1AW2fju1YJNM1sYc",
  "key21": "fWUJtWd1BmgzLRwB8LCDAQZaU3yrVNHuYvtFWhhxFf5EHqRmtEFNA7nKKJCLsmZakisULKd4MB42G2esA3aPGBc",
  "key22": "4ZKU8vMs7Bb7ND2zMVkmY5zMRX8jSyEtDmJBSLTNBWGzwkpVR7B9Bj2vSqSBUe1WBaCsJHhwZqfsj3HRLHn6xAXr",
  "key23": "2DmsPbqDc9SHd4sANihQ6tR4Hf1wXDPpMkVEo9USEd5HWa6jvtSB5T4waguni7BKWLENyXGQKz5FBPt3Trb36bSr",
  "key24": "4YwZXsJR92m3fybCXGAEaw9dKzCSRiJkXQyN474K75amrbwVVCDxXbrpu1WQBEivxy9defeGdM9Jr9rkG6MmnEir",
  "key25": "4xnb3usbEEm33H2Ec9JNodW8G1mEVmf3ZxP9nr66gcAwq7TEwwWYj18Fj6kQvqLfsSt44y4LHK8pXWr6kmHbHABR",
  "key26": "4Ldfa1JkBSeHuSrqU4y1vhUwTbN7jY9KEHEu4zM3S22Yt74DnX8H3FMQtUrwco9RAJWixJMEJyYQxywv8NL4SXpE",
  "key27": "2Z1xbSeJNq6ZNkA4xMULU3GXYXhcfeT4Vp4rwt2bfJXuuDs1oBM9Zy3ujJzU6GvC5wHn2LqVNc3GVefn2VEtF16j",
  "key28": "4pX4NTLbPRzPWFXgxV6bG2UffgQSiZvKhg8D5cNNfLHFpvpEquFLcPf48vreYVuCdijC3NGkZZ4iQDP1w4CEkCby",
  "key29": "2ugjHaLVgnGBPb186fLD9qVPZskubGwYN283FUVERwxgC7JCCDEkK2m9GxynZAt6Bhd32erotAhCpj2kyb7Nqszy",
  "key30": "4a6wUSnK1gBnXByBNUpTA31QWTPjnJn8k86nQBgSumRWJ7qRfKPrt9PSTb1ZYNfuSHnh5wgnK9y2wNzfvL6QB8EF",
  "key31": "4K16dx6kz8oc5X4SVDh2wTEb2kAuQt1HFrvXGpidSpEixHaWh9acCWpRx2pj8iYeR6GbucwnU99v4DFBrzT8HcHx",
  "key32": "4KDcAL7b831TNyhVjfmPkqNJiEr5CEBa8z8k8RUPxgeTDJr8pfgq72gCKQAdUxqEfZUgMUS6VfmJqhJe7sUqjSj6",
  "key33": "3pfxFJYLz5dXEEbr1gFvNZXtAiQRVXoNUFW3wuizZ3hE7cxSTayrP93LkD6zfQFn8rsWt6UJfH6Mm84MmfVVkeNx",
  "key34": "5TgghxnBUxzYSC3E8bkzjkfcqSdHeQUf4P6daoAdJYVEotVFuGkyWD6fXZZXvAepT25W9NfJERQ6iR5WiSh9GoBa"
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
