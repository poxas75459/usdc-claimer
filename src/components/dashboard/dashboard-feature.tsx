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
    "5cwMzpTM8BwS7KAZ89GS3dd8oTio9z52CznDTWkmHnTjhBcsYttgHPPFQtn3FWaoTkkf5Bq1YsPEQTxuJNY2dv9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqujQmQDia2fVrx8oZnXBT1hPxXsk2H6WRPmJGZGKXZ4j6fkQPHbCjME9GWdPqTpEHtQpxiLTMh4HCoA6gEpHQB",
  "key1": "5iCLGvEHoubSDaJYnpFD8NSquvBbCLKcjn7oa1AWUq1p3o6ktoVcskPX1tmcgz5ne1CHWmCrKYfgC4RiJYajJEe7",
  "key2": "4CvfqM5E1YFFJRc5a3qctDSxjjmsguwWxdhLTnB1duEKbW87qA7wM9Phe9wg7inVJf8Nx5ZjYrUuBiimGsdo3VWB",
  "key3": "3uhEefv6VAQqg2Ji9LM5MXh4CsLAUxqJB52bXqyYm7VECsss4vBE6MpKnBarLHYzuxWRhtJGJeMTZnrQ9Bb3bLWQ",
  "key4": "4WBEK51Pd1FrRXAkreg5qvXVQWEzxxeqRACmsmmgTeMJ1YJ1xBcRZYy1pKAynQJEi4CpXqjqMNPj2TL7EubiB413",
  "key5": "3X1FrGJmcE3bvePSCxbQBK9wFzy7zsUff1XRu2GdiMdhEQ4XuTovbJSUv98w2G4yLorBgMJMJaRATmLZ1EBZc9jJ",
  "key6": "4cZX3aqmJQASZwDnLEUVW7Zq3MkV2LVLGMhCnPQWH2N7B8PQQjWwpGgJdCYV9EeQFbdNCQtYmiiQj2QDRYRch5ca",
  "key7": "Yu5YRKWb1vvqLP8baNKLedMz7tpsiUjz1iti9sV58SMUhgUaPbSLiq5tyr1iVxwckezaqApt6MxPvvtJwRmC7BQ",
  "key8": "3hrkBDWeSHZi2dKHWG5hwBPcujcFmJtnDKY1xKDdmKgUyZKCbgsTsq9K3HPmzdpnZRvQWgEF9AB8VsrJ1LGYyCVE",
  "key9": "2DQyjW4xChebgfEWGTypZFnKZA5p121NauUdg1jNLVymJTPkFw1m1RJ1oPLuhwB2L6L8usJURjc8pdDPWzvgQSqM",
  "key10": "2Eu1sfEByizsn4vQJnjqJzaFJydSBssr6KKLhs9VwzS5WJyCMdep4Lc4cthFiYgghDNvwHF9NKU1vajSQMTGvjbh",
  "key11": "3hV7szRfPBfGp3bgYzipj4mJV5N551rtWq6MQKXNa4NbknwVme5h7GBMY7hWz5S74bk7DEjLgVEtQRPxKKTwBX8q",
  "key12": "2ej9qFa3hbq5GPMyssfzsber16v4X6Qr34GhhiVH5y41cB2nEF3wvsXy4ow49BuGCqcv6EHjrWcpmDYXeC7NcuNR",
  "key13": "iqCvKhXFXyewRRoPUdoeeK9Xun2hrbEpi6pg9LPjvbLLzWq2i4xWPZ4dHb8uiYhABXtkQgbzeptWiK6TL96E5v2",
  "key14": "SPUyAMQGmN9Xb4s6xiYAfEHtQJRdFdqgaSVJwwmreHMcvihnMTnXVa1ScnzZLSnZJZiwWKS2vkP9SNektvfkz95",
  "key15": "2eghqW6XNDfJBnzRZKtCsEozncKG3rxrCUk3DV7NJyiZWf2gUKzSSDvrcaYPLp9wxLxEabpjRXuobfzLrKkdufs5",
  "key16": "eoyci7U64xTTTYMnKuxmKGoLxq4pNuzZRTnSmR2UBAtYoxYAw1WKobRHb8WmgkJxW3XFqNsvB2U96ShY6CJSzz3",
  "key17": "53yTYU6yjgdodhLshR4T8UjeuDHWd98PR1iDyhjFLzsYdiZSP5zjePQv8t95JJXHU9Q8SDdQ4A2Mn3uueWLweGh8",
  "key18": "2QPE3VeL8c3AXg6ThdYrthPdca49ycHXXgiV1PCZMiZTh4Dqi29ZRmzEYpLuYBkJwLTBo6EzExXaVnEgftxPGzA9",
  "key19": "5e7bVmPBVbmvC9Ba2Vn9uPB1jJF41K18zNDYpUM27KDeY5qAtnquJdVttQzrGasJWDxbYArgQJ1RAhZ1dM8BL6Ue",
  "key20": "5KK8vVgu42EtF36pMxHZtijwrePXXJH5ou7Ct3t3CUBsbcxPiAtNZjG9Mnt14VSewZ4SQWH5cwFqKqZN9kqY4nnH",
  "key21": "4V1M2aos5oHYHPMZzw9Vugim1Tj8eKp9w9qFTjPZzyZ9NjCrevzMWVHmxyZoP9QmGzLbUUh48uJodsVLAokVX3aW",
  "key22": "3DeKAbQH1w1J39v6c2W2yoqaPtXoPYfEBHSEi1Sa3wmPb4mDNUT8M94ExtCbiZcx4nzKZqf5pcxf5mhcmDCEi29z",
  "key23": "5qKEGrCJtyeoQW4yUFRjHAeUVkUrUgh34uY5iMdyVTM9VbCHFE7cCaKF67TR1a4RXk35U2razgq2HidWu5pHXSyV",
  "key24": "4xs8GKgFz2BPMgxKhyKGppywVr1LY99zR4A1SAJX9ATHhMBBeaUjabbu113kdQmP1vNxVKE6uNnh7E7wVrW8h3Wv",
  "key25": "5i3GrhevTGPYNG6GtS8uHqxCRRAzkiE3aRFSPAh1uAuGmFHt4YuPEHnNZ26h1Mw8AQktuj1xwzFb7UU9X7f6UNcr",
  "key26": "3SEScm56yDPp8udBcUy1mTRoEZj2u95oFFf5we3zKKj2yY1pAs7h8cUzGdzkw4BY85MRDvDyCKxKjuTV934YMToT",
  "key27": "2XiqDaqH8BhNGxpU8CSxB3mDBTHptmw37BiHLQEvuz64t8xhMmb6vbN1bnSLqagZ8jqxrt48HC29HZzUpdjkKJSs",
  "key28": "3k3UssVzyBesPey6NyoEeAfVANDEyHocFvfLcJtkZWVf6zFcEMFu43xczwjQkyzFBh6eDseAhFpfWDTru4mM23LA",
  "key29": "2YZNyehAm7irwG3Fxh2caatjoZqV3ZTe6QjSrKGnx48TfHJBPsUPPiH1ztp1bLGZdE4CzuvfXYM5YYs2q5AD2y8k",
  "key30": "28jn9q64Ryok6woUSF5LxDTTKLVjGpkvu5FN43bodAq9AkB6WBh3mCbHRtQAbDZeJSMJwFQR49yRpwZJZ8kSPFLU",
  "key31": "4fH8itPcoaU7r27wRg7hfDxUdaiL8xviixRByJ3VRvWtx5FF5K5tFW2M9WA1B6NEaRnjwCYCzZndUnZerMBRGyyf",
  "key32": "3uoHd25TDRzYdL5vELQe6UBMUdnayZCLeDfqNrJiV9WNKMfEvgmA7yVS76QV4YiaEcxkwf2hxf2fkzZs27rxe9Jg",
  "key33": "fh7FM3yEkWbjeAVDXJm6KAqQd7XZirSgEZmA9811ZvrwRc8G3dCs6DH5UZkPJCBu78bKe16rK1jAaZqwmMT7FkL",
  "key34": "3w6hg6zx5fkmiCtyV63Gpm4F7WmsYDFUxi4qCMJi52XxDFvUFtAZAjQMkdMgdDaqyRU3e1AWS5YKpmH8rfoahRCn",
  "key35": "9JSt7tRtcs5ZCLQ8Vt4qwEB2osESgiLKCGMbazzu3u4Zt44ucEh5udTzBAQBx8M7J1S1wKv2rQhX33NexC5zTdN",
  "key36": "4rKDrTgp32HgvQXXBRwKWKV8t2hJFrGkFGBfWFdrzzzvvSL3yrjejZMvZ7SHteNEh6q65deR6XEGuJ1aPcceNtB6",
  "key37": "46Ehy1KFcAJjvvS9pUzpitRnvjhoXmBuXPcLMtGGmdfpTebNrL7TZqwotVgeU9nAYDjfMSAm8Z5vAKDspUmdaBZR",
  "key38": "Xh3DBZgYnFGye4FWopNAf8JmHSzjhsyyfm2zupMGYMZoBJwiXbraV6PuhV5XcFQrAtTJ9e2dhTkop8CmGtJhQcX"
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
