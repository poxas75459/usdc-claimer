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
    "2X9txxZeZZu6yw5hbqkDHzgrikFzaEEYpBk1CbdK9VKQEAa6uXEKxh2u94wDQsnDuxTRZxD4xcs2fkSZA1MmDbnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xi9UeWK8HP3JqjZ9NtNfGYzfUiQnFUdDUphJK66eBgNaxFPECRVKHktvz3qaudxocHxTuDfL815QpryGSjGUbeU",
  "key1": "57pAue17ZDUDmZyxnBAMNSivjs7XcQV7TQX1vTzdFpSbtoZkUbgpk1RVSVTrk3Fcn8o8Jj1ERHQ5M2S26dvDMcga",
  "key2": "42EaMTD91vZ4m1k2Hn2MEB7G2vK7fYP91rybaPwpRsuvkxmzmPcWc9Py3WFkoGJNYY3Mjf3PaCSVhmXvHWEQTvfU",
  "key3": "3XyYpAswHhDqSTrYmzDnEvifECdH9JSsqNdeyQ8rFdYSXPPFHXf3F9D1RKA9f4wFB8suSaVDbwhSJeRW36kFbuuA",
  "key4": "26z15U3vgqSsE5oBduwBqt9tmYdBvFMPF4CmJ2HhreN5BC6t3zxxa6f67oY9V9PV8sDiqHadMEK1H5ap8fogFYTj",
  "key5": "48ajzTosXeVrPtRLwE6Hd6RtvE53NGpgPLE534VEmiwuYciiP5YMAnwdcuYCspZFAcJjHUFB2Fqz1NcQgCf4ighd",
  "key6": "3E1mfbd2NWbt5xRcy4FbrqQbxvhtr8qdtUxHwYq9Zj5zwyg3LbTSXso1Aj7N3fQwJhMvJzY4ZJXqaNrWyFge8w32",
  "key7": "4G99CFuCPhn3w4gc4cwKP86N1BYvNq45obcsbXkezmBMkWN7MPNDEs5Z7UPbshQMtrXs3Ckb7F5UAWpR3VGa7cNu",
  "key8": "4EQkdfck4pgdmQJ3WhhPE5MRQSAkvvaFweCKiRoWVAihxXo4KGmhWpSECe9MKQ59XkPtePXeRctQZZy34rwvxUbe",
  "key9": "5q7cNj84BebgbKvG5E5ToXFgDeUSZNXiG4oYDTURCBse1v8Q5DGVGXeMTodPqPXAYv53WQtKQ785wfgW7Q1pKgmh",
  "key10": "q9yQL2tHPn5PddizAuupGKKvnhnhc52u24ZC5qySH9Au6vMZApxLkKBQGx8pEBoUMDTbrEnuPA3EGsWw2oLCJbP",
  "key11": "57bnAdW1FLRUGXsaenxjzCaowLjazzeJmC1GTNuvNFVUoCvdWYFNpMn3ftvR4XLBzVQ4YSEZHe9RMc57AY7PJPBm",
  "key12": "5dYNmCKUchPJiLfXJkxMAmXtheD2D9ZABBg1ZkPvuJwWiWp8Xvr6F3Wg8gRDK3P2eYit8wtiEWxFF5dbaKS8943Z",
  "key13": "3wQxTxjq9HmZyEGSXnTHRHmNfcP3jman172vmX9EFyuReSZGJYeLzZeKCuqYwKdnQdZErztYev4s96Qeckv2WFp",
  "key14": "2Jqk7RnT9vBMwhsbydBv7zh3vQnHSwLpy4ehNsNwFfK6j3wSUftTsK4teUWimor91o6Z3UZqazBcwe9p9DvFPmkU",
  "key15": "78C8ziCGN3vb4kxKadcxgoTp4Rn3uHUx16V971x63dUbWfqPx3F8DXJ8dDpzxcGQz6kx2ZQgfmcFUakRPETwBQX",
  "key16": "4eBaSkPEG3xhzYsBDY5xXo2SXWKESX8wbztv9KKKwj2UJG2nchmBJppbmaPbaiW4Mdxp6nMiWZZbWQaTcQxaExxk",
  "key17": "pte4MEvGTrode47sQwWAFkV3S2xULBriGMuUgrohMvLfRS2kXHtftSckUebjVTP2Cs1zqaGP3qCQbqAAYyijt1W",
  "key18": "2HNhVKcpjhCAbQ2VykJeUQnhezBs7ezmrdB5rragm4A38J7AnsETtLAHyKndw27GJKDMHfBVzYAiHHeoY7mJVLT6",
  "key19": "2gMdkmjT7Q1nV9XPQBCkTxzLiAhxNBBCALkYNa8a6cj6m3jRnkZ3XbiLcPrP1tC6QWt9NdURj4byfyGScwERy6cZ",
  "key20": "4AWmfPXAdZR5jFndS4JoQES5JxhhkizeYriH7tzyiUySHT789ZHYwwQroH983j4xvRAh9AmQfztXadk69jCp6txS",
  "key21": "4QyCgNT9jnL11W2iFTtXymaeJPMpn4ohxppFaWe5i4ExByVZsPtZ32jvHDKUjSBCnsxRqgiCMV4kqErDGTFiUGLt",
  "key22": "4cE7QiA88Cpb4CWUZmFFB4xGstM5mSohabd962inLqyd8ov5Up5ee3pupQgrDKJ1NEeUgNLRQrRaDMqZxTHPyPW9",
  "key23": "d1BNweNrXifoqZyfT3gJeoJVizgbd3GwAQ6Cb9dhArhQEgdQds4CDPXaYU1MZawpzitbWFvi8BpT9cU3sLUkKn5",
  "key24": "EmB4qyHs3fKsnEy2KBFY3ZSCwB1b8FnrgTSfE4MbsLGAxu4hr8NWvsY28xiFuVEN21PnBbD7kVKjtik8Xp1en9Q",
  "key25": "47b9qTmNQD7XCnucDnRgkCvEnhR142Rb9GCjgznHaLnYCYT1hjKwUFtvWQFmYCH9WEV8do9YS7Fu4X1rkGVVMQdm",
  "key26": "51299reHMzSWzecSBguBkCbiTaoXQ8aGhohULwbTsDSQm8iXheQx4b7P4FraDKivN1tHTfXp3so7KYaWnRwcZodr",
  "key27": "31dzZDhMDG4PmzrLC6SQiUAxmX9RSCo1F8wbEhb3V4NuHa62ZdSVkkXSXfT2D2Na4DSMAzv3wxPbXQzUFhfytzMq",
  "key28": "3h6RSaj7WtYKxyuyrU11B2SEh4GFPNViSbfBdG8M3HC1JKUpqzFtzy6VVFk18f9LtNgh6yJ7LVn5upvzwkn77E8W",
  "key29": "3pnLPWSn2Q5eRfbjNz9rMpznb3n7DMwHZWmBrTcBnWV4AUR9Zkn5BxyFBpoVVjkAYxj6vRVx3RkKqPU9RQf3XHyF",
  "key30": "4dxkTw1sniPYW3xmD7Xp7WNxPz6B15FhE5MwPafw1WKqcruyBBGBDUEJTdnMcE81ooKu5KjidA6ZXhofHE5DS4TV",
  "key31": "4YF6NGX5aV4mMNvyZGwwRnFhXoWgAac3dkfszNAtJW9gnXYf1UFArpk65Yux1Asq6vqS3KKRTw778N61w9LrWWzw",
  "key32": "2PDs3wa62b1iZUBXXLQGYRL7qzMWJoE63bDw5NDZXu9eF5QLQpSJQqkvd6riA5uZYmqJueVR6FCdzY6i81eiZswU",
  "key33": "YrTRZ8YGxQCKwGvvvBTfqk9KZ1pX8EWYCkZNAxKv1JvQRxKib9XJ1WobGVqVnKgc4rx6FuVcf7LR33YMk2wdxBL",
  "key34": "5tYSjXEKHyyZUxDDYRdrgkdJDBbVSLF8xCA5mUeRTwid2FaRJdKCvkqrNvoNxkkuMywAayhVEEPfqRThydbsvWtS",
  "key35": "4SKA9W7QAZRoTdVu7Ej6AQgS1YjjSSVZwK5NTt5bkEd9bSGHYAvqcWap4AwDiy2zc21Hu7DeQHTiPrtFNzmZuJL1",
  "key36": "5LUaRbWFst86XPXv36G7SXWNNtBoaw98bZ3NSWhCL4uqVdpsgDf3U6yfH3ouvx5vzvdAub89C8svHeaE61hvQPy7",
  "key37": "kAmHjHpmMSfsdGdB2jui3cSMpr1x1DbQ2qV8Nde8wYtgoV9sFdtqj7pwhAAQGVDw1Yr99EMZHrsL2cknTyFncUP"
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
