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
    "vwEc9hXeSQiwww5Wyhx12Yy22WrhniAC65r86YeQ4x28dpyJdmcKaKkG48Tnk1Nghw8RnTutKgoJ3zx3skBKxmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BuYsKtSFxXFH5jQrimtPQGeY9mwPnVhrUdcLRugtBWteckRxfRseehQxnNVzUEWnC57CCcwsx9CQ69X5x5fwun",
  "key1": "3qHvjKQ8wfpQytrBxFKTCpsFUe2pqvCGZ6Hyh9KXUhiBxQEZKn8iWiCPYcbFJy4MSYYYdVtqxZo4g92gfVFSsLMy",
  "key2": "2PBg9aTC5E9QE4QcpNFjjxUwu2GnstiKj4xVsVQ8yFxwASxAUAT9d2MWFb87ic35dFCrd2skobv8n9nLURrJkSDx",
  "key3": "2mK7ow27UFKbtY5ZEbvVwAgoM5PMfMypuLFedosta3Ai2XFaPRUBmr7fCWuLYx8pMUtqGuuKXNs81SVzwqh8Hg7s",
  "key4": "4HfbiqT2C26AE4mPCYcmvbYdGxF62nHB34S2uZ6zLYTJSZqrawLYPiR4niYGHcQUbHVLQXHwmW1aFWkcMyqdP743",
  "key5": "3mnoQz6AJA7vxcnh7CFYK4spK8jAFG89w161eAVNL9cAFCxSuJDKPavwW4wMWfHhfReQ4DjHCDVr6qYoYRPJ6xjH",
  "key6": "3VgSpyVTahez7sgv8kttjyRX4m1g9Vf1gF5vgcaQ9it2BXhqCzMTrDqdCsDgENiRCozxbUZoDU9xWkrhB2LbEpbJ",
  "key7": "58LuXdxmYryHghD96nyVVD5RhrqJgfPdzwDbHAWQ13JM6XZQTtAT9mEjvHwZ3bU2sWU5zAkWnoSuHQ2V3UxCFFJe",
  "key8": "46Bqg7uaiaTWydQNVF7isoYgHyr9Xqr8TEfzfnJ1TvpsaLwPQMitUvQzmrMcjB2J8NC54NMC91qQ9MowAKqJbdb3",
  "key9": "5s2SkmafS6PFa2EXu1SXQdTyGNzAovBmAT33PdpSKGDbs93pbXuYY8dE39tKrn4i7nMCUWmxuDLwp8WtBs5FNF7u",
  "key10": "kuT2J9j8iZkqQop82rjaNAY4KsXJrbTL2W6rhYhNZiEbozFpghZ9X6UEXN9PCHHzu5689mJxnqzjGoeXeWjb5MQ",
  "key11": "5CaDD3Pk5Pyb2pSz6DjuGqEhL5xXdz33FhXhVz1NRfm5bsiXBiCwG3whax7Cr3pdi28PYJBhP4h8F93xyeHr1XcB",
  "key12": "5pzuruqhAysAugfdfN2VaMqEY7HnCLKQw3eK9TGPvKc5XWuKadKdEY9nKDnYVFBJziHHkzm4sfyb9wu12K6bWrns",
  "key13": "v9iaJ7B8uaBZfyqTuvoaqsWsGG8jSk1VwKkEkXQg8g4koQTAshEEtEoaEqofmWBy4HJ5XuUVcLU79SGS7THzpj1",
  "key14": "4fAV4aUbLWhQ54ZT43f8K6wzcNwDvVnvnJNiVn7qERmoyss1mXoMrwBkug8wQ3jT7w4FNc5RePVALNKpLNKqkZHP",
  "key15": "eMWuURktwqSXSMw2kNepPE7SRTFysbebsizC8U3h1rD2XoTnKmnqLaX7UqU81wcN2SguFEWVGQ9anZqADFiiV9D",
  "key16": "5ihjscfqvJgnYyDP8oS5g3LnZRvjv76fY4v3GaNP43BefLydFsvmTeZV2yJxjt4RfFFTs37pDwNsVjLR6YeZzVz1",
  "key17": "3ZsCrVhLkXqA6GBmpuH5rm3nyuSgsgAuNRiDfn29LBF2LgCcsr1msCSAz1JtNfRHe3z4iZMJ1m3HYwtz77xDfEBV",
  "key18": "5agZRNhnF2Q494FPS3DLGaUfh8sVLNjXuHgH41Hu29qaFfZcVTmXEidP4SSJ7fFMWYnjEjMhxcvx48rhvVnpDJig",
  "key19": "2hWWd1QnSFNxGwT8DQueeQeAo95SAhALRHpjM7D9E2t99VjHrP99jcmgyNvw7iEaZZZKWqLMWd3DKjxFXqDdYFvP",
  "key20": "4WPKbxs4XYURa5HThwkKcXsN2fBh3yJpwYZtswHCKFZrJ2UmsGSbL7e2gYAJjomzrYLi4pRCT3jNoY6P91k4bC3z",
  "key21": "4iwUhzgdVUQnWnLgi63FtTGiwHuHNBYnvJYZd6ZZzRA9quBDhkankQASYYizVsJygwDzNJ7SzhGhmYxw2QuukiPQ",
  "key22": "5WkrQRkDfez69D9cCBS6DuNa2SSeuvo43pvoR5hD4tKMVfHKcyprVHNLeTBC8wZ2uzeJjhr3jbJX2UrwwEjVwhaD",
  "key23": "CJ4395WGqRTpQMKCvmA3Cm8cNPD1ZNMCJtQXY6h6sCef4HYxHyx4UQ3Fi88cetmWfZ9nRW52U8vik65EBPyadGJ",
  "key24": "4QZRxkCS7u1kV7Z8uWcpE8Y8T4bYNe6HRR1rdKycuCQ3i49whHU3NecxNWSjP1N4Gxn8gukn6GMNR5APPapVSPD9",
  "key25": "5jiU8ex65h4GCa5hzZfamjZbdshJMFYNiy5Pc2arTJNJCJG7bzti26hHiqa2Cj3FAEXsZC2F9hSP9hU4EA3CssRM",
  "key26": "5kWLtLTZ2bdBbZsE7R6uk8aMZtB5N2uhadDt6aUQSavv9mMnqQYRR1D8vaEcC8AAWMocSaEMM7gMrZ4zgxTvK3BE",
  "key27": "2zEFPQbMfBZNk1Gau9RW4dJ1wqn6abLrJ6wqd7EdZsC2d34z6sKgjURsqSqCsmL18ze2ZeC7mVEamwq6WziTg5mV",
  "key28": "5nwUD5qNbZMaZLzgxa4LHzk6gWZ2H46aELFHReUUnAnQR9AsGhhzy8775RhYTZ9LyjUqvKUqmBrSUHWjCLAUdYxW",
  "key29": "3ZorKPorkc1bt16irgkbS3S8JvrgQ8AtKwAsbT1G7DqtWKiEhWj3YFT2MwaVdyyd5YBeVe81ZQzyqLGe5oMt4UC2",
  "key30": "4i7HtCoEjD5wiSaTwHtVQAYj5VVEBNHdYLJYZVupstFgYgHzKDqS9DyihHU4cesnPG8snDkf9EqZVe23YvF8VZqw",
  "key31": "55YQzPVY5Jfouz9GxjD5Knxj54SsVrD4g8GyX6vA8aosX4Fh3JP9q6LAouXGv6UxLJRNNE1oudLAgPUrPTnRJm41",
  "key32": "2oradDMG3VS3dLPgsWUj4HpuFFXsMz4LrLop6AXjmu1k7kbTqcNHPWTVfg8cRKY9WBiEtNojd65wAykgQcxDzJPD",
  "key33": "66S9JcXKajqzRkzZo6TLGdtaAyibD8gT2x3aySVCXeVP52FdSUNRCR1hJvBKuTDz6B4VNRSVY5LXGLdk92X34kvN",
  "key34": "4V3D9PV2eANUGqb98jgaT1qSzywQVgkP9dBoCwcCuM35s11WaqxjQgowexdmhreirBpWAR6n4zM2QwzFPVhLwsFR",
  "key35": "3LrApLXUsiBbE6uffjNcZQ73icSnzVMYaDPGwDzBnappzjStrKnJ4P9iJu3oRRemHVUW6PiPKSe36sCiPmCUD2J8",
  "key36": "3Jvw91oxiGqKJD2WhM6WKEgkEQRDBSgpcNqcz636WZ1Nk2VMwvaJnayNhrYDqrMdPG8Pkh2WkKS3J91DpaSu8Lo2",
  "key37": "5ez6W8ZxBbcktwJyzdcR5tcPzuy1fybF6CRkCaGvpYULbB1oWEnBAqbipUWws5njgZzcXi48WCJFD79nXU8YCAe2"
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
