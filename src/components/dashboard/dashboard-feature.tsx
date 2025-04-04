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
    "2eqGcxneJK5Pn2PXsM2oFPT95Ddzk5LFmrm7DJi5jUBMNkdHVabVCVtwN3vxZUKJzAtzTbP8sN6gycH5BRXjDjMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SqgRD4CcCkbKUmK5BYm8s92LabhnkBTKHuvsc2GUCmH4b3g7VPsErH1idaqK15F6AtoDfbYUun2XWMPKkmUSnzU",
  "key1": "4kA6mWsK1ZdX32u1k9TFiWdvj4QBsZQW6X9gK7387PiQXjgSG2nWqeZvyx2HdrBdSQgc9E5Ja9HzRv1ihW27rd4Y",
  "key2": "zNbYuVGe5cYrzvW5YfMEJbjgVZe6AeCXnsrvPkkLXaHnC9513qi2cYFeYT8RNBkjw79YBs4fL29sdz6L2AUeCt4",
  "key3": "33SZeQnbz3b7fbndmFsLwbikiUdDXQdoyq2y5kePnvVHu3EFpvoGg6FPY682gXyXfouYMkiVkjY4srbDHbBGvA2q",
  "key4": "3GxDuM4BQL1rQ97hTuQ63dQiV3eFSxYGxNMbZptnNfLGjW4jbMeWG2kAVwcyfRooYHUWvqyzPcDovXbfJjLP8Trz",
  "key5": "3yDPt6UddWXGUH3YwwNy7ePDrqNryhdxhhhUN3PzS91tgjZSLM8uyfpydKM4dqdidVgmBm8BqFxqxGjb4bdwBwfh",
  "key6": "52k9h6YZrXNxH4ib4dxPNn1v4sERYf6tXiqYC1BRFDEsjb5pXWofdx5dcbW6xXzvGwpEMGVoMf4xQ8xYqEAyr3Jp",
  "key7": "4gJ3WHp3fryBEcnCqPMrjRNDanT65Uho8VQxnhSwzJCX1dgb49JQHjvhMzpqZLmQwDRE6m5LSkcnjJEgCDzFFMHF",
  "key8": "dXu2wseLczk2hCCySpYGxSPjEqTGnMUgnhw773hRkCg5efqnab3WWrf94fS3VMmS3nNtzTQsfgZXQ5rrZoq4BUf",
  "key9": "3KBA1uAsHY6pMjWJE4NngFcU4CLTWmGsXbbE8feDNXmzpgKfXnnA34DApjhv1qJZzrpL4brF2K9icBduw3J8HpjB",
  "key10": "2baYja8Zmssa73NT4sLRM6GNKb7ZM33UZeQbXc46FM2TLP8fXUg81yV4ZQu1KH43WySGLiiu9HQKvQtG4vhcvSGZ",
  "key11": "PftjS9UrtxeDbK87DhhSCJu4p3jZeXqLmGHJAsW4USQFcgMea3VTZRS2Fzin8ji54rmkydw98grCb4vcQx6a1ih",
  "key12": "7GdkgS2edH4LEc7R4Fc28nAT51qCR31fNBnC6Uf8ZekwJjfUDZV4xy5KXrdHvkvhmaKzBFATM43p9sDpmB7ifkU",
  "key13": "3FTyRtYkmZVZYyAHFozYFrNuPdwA2AfmzN5Kqug6nyVk4yv3KHQGt7faB7DNYikBVtBDSs9GeFwLKu3zkN97E2Re",
  "key14": "3bZyr7CHszYpLiEqe6BFsvTkt3nkdVmnDbxBtuVKo2F86c4hTGWUXM7xE4288YR6QU36umyBvypbDqxgSjB3nRUV",
  "key15": "4tTzpj4jmBhiHHHJDZD2koufuGZdLT1WyNHA6S2iTcUKBfRL1HMj3osiKjAjns42BJBRNn4qGNYUycoUcVH4TSUz",
  "key16": "5gUPAetJ1inJxmhp9TQGFskmgLEAUkZzaDcJF8yinyFm7WxSiF2nhxnPDixHikr3GvoguWsBNJnfQvXJsJP6rXyP",
  "key17": "4a6LSo84M7yxdohfLxNPUq3rq1tP4Av4aCebYxX4gPFsm94UYANn6cNqkrbMiA9pjEbpKxRmkTMtQwh3jQ1CJSFA",
  "key18": "4U8cAfnCLpro4auwooh623ZNnmHuNhGjvAE2ZZR1DanicguMrSVmwmCKK9MuNB777geuGDHCcGW5zfrNY5hTiETe",
  "key19": "243dbWfHVgZsLp2zEyDjFre13sPSDjYufRdWevT3rpZ1peYMfW6HXmXW6hBUYB1AjiDQgVjbzZgNwYcBaLnoUNVr",
  "key20": "3D3nmRpCwPrR4t7huoVBBAPxgRYMqJwfx6pwZ6jxiSGeDmsDxbARtfN27HD7PywA7SqDr52X7PXiBXaQeBKUSpjz",
  "key21": "455kQ2xBGVpGAevsdfwjzEzHxDXGqjTrxF3fnzN8WhW9jPGo42ijRqGg8dnmzkq2sVarig8yoeL2b42xE4PX4FT7",
  "key22": "RBt82DMgvb6NKodZkxhYUBEgdP5xd7NpZX7EJHwsEhuk55zfM2TVNj2iW98upzsKCExg59tCdXDkFKrqn8rqfwZ",
  "key23": "3H4mz5XBVGjiaaHdsYPt9tNBmq8fkfu8B4kv3SMRRZCcAo4TDzhBMpb36rJkaQikkqTumELgsPWet6RRRiGhZY6V",
  "key24": "51JRdaDcwcWrKhbwh3WsCe8e3R5psH7xsCBqCQrS9MT6WuTpGB9zQzGq35QcwLmdASFr23ctFHRaisSjkk36G3Vg",
  "key25": "5EniUtHJHBaryjWQEkGYpJ8WyL8RzrKXzdcbEyn6pJgbt4es3D61BHqciWERbFSokZSKraBXo2kttF3HyJs2Wyma",
  "key26": "2Rod7s7stXEQVRoxNDvYhgGtMuy36mSbaHej819xwv6zFUvr7tWR8tepBPRsurr4Cw3JpkJQwAYqHY7xFBtVX7BR",
  "key27": "pcphs4ytjZYwLKuwfSTJJ1HpcdcxqWsQ56Gd9PwvWyXw74jrsT9Vj12eQYTPAYxQXmT5Dv7MAEKjHnaFSJtZ4Hd",
  "key28": "QegrEQKFaoiMu3z58whhzUXHB4oEUdTYLULg9H5tbzfXQud685RVzrZ8uFLTADACVHoZ5KVMndkUiKq4P2C4rLd",
  "key29": "5DxSJ76nTcdqV9EqZjQP39niYYUHXUL6eRb6TdBL1SEY2e1ft9sNvr3ad4BtbURDHj9VtWM2ztNVZd8VUfadaMsW",
  "key30": "f47AbZHEdUih15Jro4EjHiaGchXR4tXFDwoBT25koFK2A24uMPupmZ2jJMDnh6Hj1RrxxW4pcYCAp6vyqN2i5AP",
  "key31": "5bhgqX7vF1vnwe3LrCeetYjz4uEcezF4g1EMHqshPsv85G48m3uU9wzx8uQHLTZxQ9i1QCFGNdLf71pGr4A7Bprr",
  "key32": "64HNhciYgxeHAjEJWe5QMgdcjRCWAkiGSc3q89aLKzsPX7cC66YqzyzkqrHfx1U6J4Xdtiw11vJkPELWKso6FUyG",
  "key33": "3vSgsaP24B3YkC3mMwgn2msEKbC2KjANLBHRus6fGmHQ7yR5jCfbL5Y84LauxLXTsQi8r5fjhmThrsPS3Smcq8Jd",
  "key34": "2hNCgbfCb4QLHfeYHfL7BGwgUtLzv8jCjwSrQN7wukU7HLoM5dJJXdsVFQrUAKpMT9T2e9Hkkbs7xWgKPQi4PrET",
  "key35": "Nqb9x9vBFDypvwkVpNT9KwpC14SiMZsKDqzGx75x5Tyz3NZhjM3ju9FHWYq2QSkMicKSox2QE4nYMxcrGtQNbu6",
  "key36": "63RBHXL4RMKPggLMFPet9rpP7fRA7QC8qZQvArvadzaqUyKM5FWdRdxa8qQMPrdySXUNJGHtqthxt47w3UURQp4K",
  "key37": "srHXLatgbreEwj6NjkJnDDkHq3kAkdALuGtWb26fCsSwCN1wySskA2G4DXdBrzBSmV2p3Dz6bNxnEnP54Nst4UZ",
  "key38": "56re69g7irzfVVgGDE82C9LJ5dXqnYYyDm3DXx6CDzJiaM8bSYNaVcLXRudDjwTw5ethHzf7qrt5jHQoyMWdw8rf",
  "key39": "3Ydm27vMW7hgJVPiyVbAQANqjzBStSMAUoCXvJgbxr31zLwEQkEAJdPjwP88T1NUHxpu3FLv3k7xdzhocJeqSHqK",
  "key40": "3cY1FFMb78Br12EmQRqkQ8dZg7WnvgXA4xCBbeu4c6WamKeLL9SCEy1htmeMBqcRKuyHTBioFJNWCVYHdF4nxaU4",
  "key41": "frYpTn5fnUHYr8Dvx5QJUjtPQckwjpwbATh6Vde7z6zxvSLPSvLqr7ZoPjC5WHYDj9xUnf6ZN3sKCCyr828qh32",
  "key42": "tGYoUrKnTfFnT7qTG1xEHJecETE9VrSLJT3nuNdwpvaJDMbivnro1DCEbo9pBmtdwTJtJxVf33pPq8ZQpXfZZ1i",
  "key43": "3ucevzSr2rmETFpNRzxH4KYLtUi6bx65T6m9Jv4di3GQyikFGWsyMC5xk6M4v4bhrr6qHQemfcEqN8S3tgXkT6Jw"
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
