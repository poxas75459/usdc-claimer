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
    "svbyzrytjTRnfa86YxNS8QRw5aE1FVzfrWrvM6p24ebvyEC7fWtjAkDdfgKXFda78s8qvz6ejLBuE3D4E5S5fCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N6XYmjUPvor6zgkXT2gYM1qWnsQDGYqtwxKNSZqv34PuTCjamVbE52aL2dotg1hntyemPTQcn9LLAcRhabySCBs",
  "key1": "4ghfKK3dVYxGvJsH4kXSAAWN27rxxGHqsDJcoNDY1BVJZFQJwfkuhPKxt79i4JDhCgNWSHxrZio6MWH4D6aXX8tg",
  "key2": "4rRySLy9rtDdDuL6cEKC3vfr4VBGDibUqM48UKTaUyKVhMKCdmjguQQZAGz8tconnraGLZR7arTPuWPM5F6Su8LK",
  "key3": "4514rCHm5KHZxxgfV86ThVRUiue9zLHHfbnUQSUSCd9YGKu57hDq15gZfCvvXHPnKRXHmiKqbzWK2UWtaG8fF8xZ",
  "key4": "2JSLEGKDcDpiCouGTuvS8h7uZAaqRF45mD6LAN6eBz3vJhUrPC6oahJrbETKusAx6M9SLG73MvrG68drhmTMBb1v",
  "key5": "3r8UgzW23YZK2qTYR8tQrUyd3oXvWZXuXLk4nMn8z384xscs9wx1mDKTWAgdEiAMWhwCVp4Kxwsvcx3avHx1RaFT",
  "key6": "59mAziVbwd8fgUXFPeikdJTRmWrBea66c9mKF558NGvDaqydkJzrurbmgusmVFgiHhPyb3evm2yMseFcsaKG3LJq",
  "key7": "2XzkGy6UbmrSbUuxbG17pF7M5nyf5NZHWUfNRKrWKwLwDNi48Lt34ncFob77aeet5dCiZ95UdieHxmxZq6uLRwev",
  "key8": "5drQNMfxssABhGJkFRXw79N3zTfyHsKTKQzUufzeMJTsta4zNcGNo8XQ5UswFvLnayFRioszPRWSDpCrYofF3ssb",
  "key9": "5uiivkHraL4iYoH2fgGWG4iprPKWsvxR4JETwaT8pyRMxcShfkydvp8nMxpfrLSkArDeFW4CWBBqc9AVdLN6RtCH",
  "key10": "5yjKfyLFQArR84oZQ5keXSfsSSnbHxXVFsQoUDaEjoSuCkU7vokabk6LrH6oD8h45dWycjW5qbuaH5Yprc8NbSDa",
  "key11": "2LMG1KbNb98LovjXCUHUzh5ZuyCKdxAnUCkUtJdrYJoHmUvXz6Sv4L6buizK7XjB7k9gTFzS9SE9X5emWfEy9ztW",
  "key12": "2FdSHb9Ypf31c6eJkharUGQp5VUZMmNw4dQmZ6DnfQVWwVYn6KHK9xJJmAEQGE1Aira7TsemERz2CSDgusnVCo7R",
  "key13": "2VKoHMMRTmweVBSYEAqkWagfoXUJ8xgxEfMUtSWUpUECupJgVzFhhD5NSesaJ3e6fbnbuD7sm2yhtjeDaeLhMGdp",
  "key14": "5deJ8hG8WbQ5pQpoXRLiBDEewoojBEqb2wRSr8fC6TkHL4eXNCUiFdCG4oLVNRBAnUFKxdAmqvkb1bmHQ3GkUjmY",
  "key15": "H58NqJ19YLnBhkcfBXbyuqCNMUeu36PJyspRgcRFADh5yQkGukMyNCtAw9LYgLa3NruCXW51RaeHdK2j24rrwio",
  "key16": "53su1WBB3aaXW2FdviZKgWqZFiRRLzYLyD9cY1fUkneM3VzXDQwYx1euWJm9eJdq2pzB2hRrimVgUtvcvhQusgeM",
  "key17": "4CYNTCnkKY1evwDqPxynv5UPLqFZXwbXGP1LcFh39Eo6y8Ltuf9RobWam39WVPKyKBsegkEDfQddkbk8VqCiwxew",
  "key18": "5B1Upi8mjArE8zQuVdZD5MtJZJ6eAFBs6s15Ayo7FDtXJMx4XfkXkyktD52GdpX5zit2datZGtynp8taF4ow5uig",
  "key19": "EAz75QymQX5yznppKbUMEENPNrQA3DAriuzbMyR7w8YbK1Q8w5uQ5uHbps3fn4NSTmaToWyGPQcXzghopyBpuSs",
  "key20": "2iU12XSp3iMqPmJ4pCn8N1QSMrEzwVYpvjxMACpwbYE2A4rixcM1y2qoaKwYBNasCVG5KQfu5MynAUyLwLDJjhN3",
  "key21": "3DpsqhiFwjdVaVRBwDuT6EPLMJgF6L4TWGat7TsSKXGzKbsaR4ETG9DMZgnPD8rmsqQpnEVL4KFEeXmzLuKUxBVw",
  "key22": "3GbMJVDsVHUrs2m84fyergqUKr2V28oRgtJYtqaXqNRduDLKGHu6JXLDvyt7KK4YwzvqRFZpA36h3HVkzek3ex3r",
  "key23": "5pD538TFVaJNtfEV7uQwja5zbj6MtsCyx1fag9yKdSKv2n8GN53j3gEm9FbhsPaNsP1yKZkezYj2bcBP8TWgrGUK",
  "key24": "38opKMkX3t5o8b8TwR4RJ4hnqMPLF5oriv4saxe6neKtcphHa5mUHofV69HRuNHZ9SwaVZ8iAAS8jx8knbcMVtnf",
  "key25": "2z8casfGCbspEXLPQZ8MmbUc22sraT14M7wdQvsJ24t3wGASNkW7aSqSkydivLzNNt9WHBVSVTaGQUAqzuYUFJk",
  "key26": "3SAtvYQfyuE4af7YVbMer5tqGHg7P3GHhZxzjC4JvApjzCZcvLRMgqjRaskcJWYwRNy51F1dsuz6HEon5ack1qjv",
  "key27": "3PpSQmY7UBMVXAw8CR2zu56euAKQPHEZuQi42kwnTWAde3FWMNyMN6KpALzhoPNQSndEdpNMSy8rAxYAg74AFeAE",
  "key28": "4i7AmdQSJXE1NruWdBxuaDsS43VyHfPxGBD5bGjXd6xhgxvWNaHZgnzpvhJENdnhwNvd6SnppbqyS54i691vd9TP",
  "key29": "WpJe2AU9awRSfBStSNYPQGcURQKM4avoSqZdzVztw1uBVZZrBJL6FyCzd3b4Rpiy2s5kPTxeaXDy22sJLHiLomd",
  "key30": "TzNHdeSmU8nZuZP7QRVRRCbu4bwk5q7pPbeqjsHbq8DjDndfyvN1zM1CbcFveF3JGaiDt2ebpXcmxZT2ygBDhtE",
  "key31": "2Bh4TiCgPnvC71211KQTwHNCSRGm1obJeqaNfwgoCwPvg1FkUyGsQSAyfNHtKN6qjetdwFLtHZR7gbXVT2eHeRr9",
  "key32": "4Ye7e6A3o4pAiqpwDdGosvNmHpQiMGL6t6iD68qKxpYfNFPvhdqsNmc4DHsNkUG45mwpBycosaG7wSvDmL5oRCvi",
  "key33": "42Fw11Ey8DKdB3S5vka7XJ6gGVCR4pioxqDUd6QcEsA1rEgBFXbv2gCRd6NrwbH1oNoQDjVpavEBv2kKm5yyQdEJ",
  "key34": "2CYdETgGcYWvPxF55Z1ggr5jZSpdk3zKayhpEarhVrf54bHyWN4H7wTszsSqvFRcpwuf44MBxgt9Cnzi8TZZJCdY",
  "key35": "gQ8bzbZVWJxp45jg3ntGfULo5oTwJdyircNmMFC3ukYLKuL1sitde3VpRaV3hGmbS6o1rSQiPCM5dJFr7cxsCrh",
  "key36": "5Ps8S5eDt3c7voxaAwqLK7fbc1VPg5RikhUd2uAeCmq7PodnaWy7eQZFV8pHsnysdJqBxyhtUi2R4eeNqnjgMQUT",
  "key37": "3G7ULMDULczmStcM9A6XUfFYGcQruHQZtsSJogNQcpQjPAgNCfTStuNcomkpnEbNmahvQN6oKiRNBV4iCq5zxnvP",
  "key38": "2Yx6bofzeFzfDAeqZPsLBFpMavF8Fdve5hMwnkue4EesVcEostBCh2NqLg9sSRASvXR2hvo5g9pUCeoB8hdEz9qT",
  "key39": "3ew1qsio9J6DFETEpnsWtc6vjfEnYxL4AYDhW8ajqCr1EWaZZALzBNHrWLgwrTMhT5xfYNeGjUHY3sm6a8Wry1AK",
  "key40": "4ewiMvc41mYixpTQeNPcAKcNYn6tgEdMUMSN7nsVWN8ArgB3qnQfhTXGq5vi1VFfpC3V1SAiNpQSs2LBXUQpcBc2",
  "key41": "5LrPSd3GDzgwHeJwzAQYoXLJVW9YcicaTy6WZCSAUaTi2cn6Q2Z6yGEmnUnoQ3H7AccvE5qV3ExbLRUkS63amFzw",
  "key42": "35Qe71wKQjDdobKSmvjk6oFm1qxj7ZmwuMmyXRXmXkDmRXiEKRub1Rb9rwU2ZT2aeiqSaGniagr6oZ6zHeLVd9LE",
  "key43": "21k4pKZSbwQ8j69dm6PqYPgQRUPoDgHeGKyTcAHzkt9s7WA2i9M5T7pyw5g8jUVdMz197NA9umU6ba8YaWzpiGLB",
  "key44": "5wSx6k4Ya3ZCUNmm6gJUTqb2NJCepivL5j6ue7ixpYpjDN5DC9FojUSV3AwLa2iZUwsNgritqwjdVFhgSvNtqUAv",
  "key45": "2iYmpfd2L8Cd3Jne1XSt8c9rUJMFoRhMxpjrA8FpzuJ4zxfweHcnoZbp9ppZ6PhTYUjAUNguNWe3UGzPQe16jtT3",
  "key46": "qTkjGcvDQHLQCVRD8j1VXF8YJodGyDdSYwaFDREjY4dSsY7M7fkbX1e3m2BcGmeggfggBr9FimY7CNriDKE9kpL",
  "key47": "5VvW3THvADzThZvXEejajfVMK2TGecgEJUjWveuuSys9NPU8g9BZbHCBFbuHEKKpCkgjVkZg248pF9iWZYDmLGs5",
  "key48": "4gwBv3HbiXPjdRDCAt5T3Tnv9UHDUkW99za3JYUY7pHn5C5yqQSXDWP5ifsNMVsXRUspfYEXwiwti1A7EzPc15nf",
  "key49": "5pPhnn9TbDwR4hcrqUPdx6N5KGUAafVVE8YGg36TBUqYNcsWagnwE6Tjzog9ViALRrb2vbMdQRPwDhaCosxnQMvp"
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
