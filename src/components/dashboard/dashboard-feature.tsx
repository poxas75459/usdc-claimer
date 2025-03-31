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
    "5zSQL6kunUTMfyqije7iCkcHAfWizwUgz8A8BBigS5eGTaRQWKEer4KFwgWRNMueKJ7qbjV92jUzEuJ5gbVYw3Ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJWTCnGL7pqXgRDKtJ6xqt8rzt2equjedzK8pucMn7EKmCn9sMHQjnXSRoPmu4u1eozksS8BrUYTdCprRDxNsHH",
  "key1": "5Nf7tKmCNK4bQ7AfrrodzCPg5NBAdW1tXbjWdELEHx84AbdGt86uPwg2qGXGJjyWXWruvwmutePiP5w8oyeP1geA",
  "key2": "4P4B95tkDw5jhF1drSiZx4cp9NvPZLkpoMgQemrWdBc3urBdmCA626RKBCKdg3WHkmGZGbTdiHYRVQcYNXAsYJtT",
  "key3": "3qSdPG4btbKtKw6rbnDJvW9549AkBcjTuxkT1pRZzY8jqNgGHwhmduJWWydnef5Vwg2T32TJ1ZR1VVQ136QxNLFx",
  "key4": "44f4GSsDxEGzranHyGKfrnEpvfjfyEXr4zYqTSddt4d4zG18VdrVQr6datK4vYK7ou14jJDTAF2SzwQrz6Diumny",
  "key5": "5jgtUMSjEXtZ6PbmYThwxx7ruHQnfCbJhPWmcGPWiGzd5eJqMzva7fad3bjmwNfBudnEFz2Cv4F3tQetkB6er14e",
  "key6": "mwQKR5nVTn4nni5a2zaBjtFiBb8cpT8KAiYvHr4wJ5Qxv4bg7nbmJ6Z1QHngPSoQ8fKwqYt2zUqtaeaZXR3EZNo",
  "key7": "5VHBCQHLbxY9qtfvVjy6DxCXxC4WtCw9944mf3cg1ZKDb1yGYmrjNdd3ERHdXabM7CeozksKqzhnKqiYRUTAaz1g",
  "key8": "zeNwxtyD8T7xAZviwDDTwpg3gKn96yPx6kLaXsikDdGJWHapmGFYmztgx6doBt4WphaHCXDYsUbAtyo7o1d3uFU",
  "key9": "2ZCaUATcARyMEmSrY57dhDTCfXintU5J1eBaEbhhA3y3f3DheNe9xmEE2eZeTne8jXr3Pj91EGAfb7uRy3hohVpV",
  "key10": "2q4M4orL2anbvtkj8B2Yx5GXgUjgbxiczbjZSyveZejdYC5RbvkxjBb9Z82aKPV4x1ZBvST9SCGC7saXNXPsu8Cy",
  "key11": "3pYSBiXGx1Qyppcr9KjJGQyZi8wfD3bfy5aJmzf5Uj5Ye7HxUsghVABwyG6Djf4nzfrwqWh86KYYvYD97TZ9CzeS",
  "key12": "2g32QK3iZbUYWrL9aADqcvswagocoPixa6PCCmVTZYVth1LEY6wrWJJo7At6CnGsUsocsyWV9emyYZk2frNYce8M",
  "key13": "3f57AmfuAMTEXFk37JGhLg6TVXGHW8hyx4aywiWfZ2EEQSwq8pHfeoLiHN1XtMxJhCmVCtkWcizGTo1RF9YK9YmU",
  "key14": "4gZ6Coj4K5WTJk8zXNQ4DimAgNM1L9211WdNhCcc21MQLH4vEV8pBnVj9cZtUfi45LMA2wwffLUYSFYuSnjPNq36",
  "key15": "5hUip74F883uC3hvNWfdJNSLHtCoRP6CKMMpKrX6izRwPKLito8bpLFfESMBxEEDM8g5tJBv2rNt6xmU3bsv9znu",
  "key16": "3QY6zPEhQFQJJUbAPnf5VXTXsAeBuiSgFfjujv5S2VnDj5dRcgCgNm2LRmTjyTX9GvD4U9BDdz41fh2Brgdre7ax",
  "key17": "21VePDadg21KJvRYFa2nhWaRQUL7x6s2ZfqK7RyuzmeUmLH7yqRTxncBrFRjTTGtqXMiGWLVthFcLFvZLvVn3Vsy",
  "key18": "2xECMNrnpXq9YFEQCRaNwES474wEyFKJcWb6AW9KcipXhQPPXcfWq8nGekqqpgZpLTu9LDAMANLhMDokJCNoMrvT",
  "key19": "2TLzzLiMFPHCgVWnHK7YvKjW4DVum4KU9dKXey82kfo8194wqMi2xR3hkAHUkBMBWBVSiJfxWHq4oYLgNjzy1vZR",
  "key20": "3SbR948Nt8EFegRDXNqiceXLrbtP6BZVkPEmXqSJGsGanLzSJoqvNqdBTVJUPQcguEHWAbemzzHKNJqKdTA4azQR",
  "key21": "3CAh5LWkHSoaX6Cs7hxWjABiEvxh36AxG8jPGoJMjnyqZJspSDtqsVEit36NHcmjevLLEG6F3c1YKcacebfBXAQA",
  "key22": "3xfjzpw2wihctFzMHPJxG94Udgd62wuGRGch1X1BjvgwBS7nLfpSn24zFvinKhfUjsCMryC5M8vLeB5jB5tBTJy3",
  "key23": "rJiUcMEWQA4rX3PeEEW4E79PCJY9rVAtSaTn6PXgHr4ctskKVV8CeYXyq6Vg94M7i2wnHUQ92vuYbGtWFAWxUFz",
  "key24": "4fNCav5pduom3RZy62eZGWJ3qUrYVwhNgjyYaKCrUksXmCUoTgAVCopndW31VVX8mjnDdQVPHYRL2uLgNyhrSPXT",
  "key25": "mLS7hinTiZCpZQAoP6rvgJpkfyufYikxrY1rgHWTiX5aoScx2bxkPUDv7ubz7t8r3Eq3nHY8N14LmyQgkyrFwNH",
  "key26": "5RDCiU6LEcvqCwvBX7LZwbU5a8gdbT92EDNWqJevgVaDLNpeGWGieQHcjiGR4qBf857uq4JbeiHQuiGZbuXfkPXv",
  "key27": "8geHKCJ4kpPMdwRDNMGNnxxYWi3Uq2tw61SD6TXnSXHQkNFt1iR1RXfV8GRRswrqQn32mfg1fXs45CLtNmrPg3g",
  "key28": "27KueCTkUKKsmWZfKVLxksk5bosQgQfanQ7BjQZj5vTHBRmi4RJZ4eNvo9qRHm3DQG4f7Np6H46wqQBKBAdZJCJd",
  "key29": "4yN1gQci2UWwCWKP2VazT1R9hdp6gN8bkmEQqqUNenU9Umd2D1G2nuKJRLYLbd7S3UFu2peTwKkryjsy2K1dx1dq",
  "key30": "5QMghj88yCd1X3wf41GDnmHFSha8s4P6NQu8QAuyEQn3XSwaEGe188MYeVGa5mr5Pmodv8P78QYCubbWDJYmXRTt",
  "key31": "2Hh6GkSbMwxRJtjF71ShiFvHesVxJ4ZFT7FUj1nQNBrx8dz46ikTaUgkz4wE1T2P8QfM6ffDddm6mxpywE4RuhuR",
  "key32": "67FY8xnLr7cfSoGAmVuoabqEnHCgAXJuYs7mzx93avPBpSZpABFsuwcGsiHbHsW5KsuLBJw3hMHoQck8pC4tAvAL",
  "key33": "3XBQYANfFuPg8pKMXHtVa5hLjnH4DPiTRntiL36SYRWoKd8NZgyvkE7ufAo9sYwPMW5YSpM9zEE1UX12tZbHd97c",
  "key34": "23C8ya7C3ighMg7x6m833rNU2TNJjrHfnXGXYVCWwPDKJxckGK5ZwfBWMs2ENB1N9F1ELAXAZCemZzJNgGQTw5Jp",
  "key35": "4s1pPMArcwdUmh9Rcg5MWy5u8xhnMYbSaHvjmpTwL54h3NLxirgy3CqdTM3sfd1yLFkbVq7oePSgdg7vYQmFZXyH",
  "key36": "3279aVgXwW7dUZHyGB3upJRzuoPsy3nEZdYr5co5Hefq8yww3mjtTNvbjKZqCkScAwgzofkmX7caMcgpwdSakVaW",
  "key37": "3n8SPj6RfKpK7QEHvQds1H7Xmc2txVvLxcTLE9zpqJDoi1spSKEfYBeueEzeGmx66SBerXijb9kpQMa7unPFk1F7",
  "key38": "mvSCv9vqk9cqBzAsf7oW1gcp2VqHPoy6hXf3XED4My2S11pk54cm6J34KbfZnC3hLLwe4y9cqJcknnV9P9T6wwa",
  "key39": "5guryQDyYWH26W3DnDm3wAiX6dtEDhVrxoiyTKmqcwvGtP6tYeCyM1JVWYgySzmfYJFw6m31bbYhYuuYTfRZLyho",
  "key40": "4NQv5afqW8eSkurKLxbdykTJ2iKVPVNbyAmKWcr4PVhdu2qzs1taUyMKTdwreKuUu7sdFPcZguvKYKceJ1zsGjk4",
  "key41": "u3EwruSohQ6mzUf7kr9SFF6rDnWFSYp9sMa3FD5sfPLPHf56SVg2AeEBX8TURVcdCsYR9tNvddmQEuXuQkRGMgz",
  "key42": "3DcFWpnpmk9qpm6opFsMefkmzsGf19kpqDk6WNY5UaUdJYvdRneDm8FmM243e8iLvQiDpd41cATuynctNsNo4t3S",
  "key43": "3TMd1DfkrYgn4Qf2YM28Hocdq9HsRELcmfSnz2sPqnXsShLG5MbNtYGLW9KS6BLMnNpADsE9xrnWMRSyjJkkjYUu",
  "key44": "kMX3dc6FBW9PLDUELnVn3R32qJQyQgDaMLHCBvoHPFDCnzCWqhSWc2ZyCWy8A1fU7BfqJdeXJYtZwMjSXjieXqj",
  "key45": "RcstoBNFDUVTRd2uZY37JjWhtf7t8dbdeSbcBJKeX1VNsKWap5ZqncRz5ysvkZvkebozYFz17ydaMbGUh9ioAnt"
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
