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
    "5kREs9zJLSP4hQCxMhtv7GSZoppeziD1wVz317umAmosLaaQ1dyD9SCLvgt2GLMGmGzXKXNsdCGQ2yiECPJX5LXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czYqU7VAgZYJdvs65aPnGDaTG2c1B9BadNASZs8oV627HE1LHKmFzfZeWPW1GwDgQqqkZqjRNi2WsrbVsBZKoBQ",
  "key1": "3TByVo51njBPJoqJu3kNn3u7n5xZMSyXjMMfXG6hMWEDhhFJA693CX1mEiwuu4xnNNvqrWVXaMWFgFLFVnsaMSs3",
  "key2": "AHKZpQfDTjPNGG4QfYJFGYqX8JQ8TasEt5z41UEVkEGMVZod7SSxxjcZzhF3Zc2spaXv6Xdc3BvTYpqZfLP6Ay1",
  "key3": "2Jh8ooAy3YUrCD4kAJaUsB6npRqD6PA1zATn65yM4NmbBhLBK8f8zSYLQqe7nrZdWAa5Z66ZzJVgvtwHhVPiQQA5",
  "key4": "ShwmKemUVAXw3sPPXvDnoVs3v3GZFrJWD7CzURCNSbHGUJmwagXM4UHkiJfmAx7jFvH8nyGSRoTFGftxDr8uSWo",
  "key5": "37jtWW2MkULXvDajY5WCSLvxzDyURVN6uuesRjHwTEyNnDauhZZraaeCZ9dU4KZNA1BdSyemNwvge8SVvuYgbUz6",
  "key6": "2ZMh4qGjBZxKBpuCym18qBb8KD5GU56FLAaqFjxfzzG6MXjyGyfR8njx4RqFgGuC9PjKtcVbWDxm7u8FGdy6hrAQ",
  "key7": "3CcvA3725c9D2K3JAXHMaWvhdG28BavBMvhX36dNAE67WnDz8DsQ2fjYoK6dot1JjPBdtipjRG4hD3V9mdG5tnxV",
  "key8": "5PDdjBN3Nqx8HiommfvRreWoBh9dUGqJy5jvGtWT8dkDDY5mnbnkfDKpUTAwe2aynRr8mL2AcN2EFBBFJvdEUbKy",
  "key9": "2F3FiuGXh1rcV6SSEmFVHKASZhQWqMN3Y2EfToxyvfEAfpedoKgQmntde9LRbGdbEP36hbXZSozjS9dfm3kPNHYP",
  "key10": "2ExMk69TRz6e8gRjr11wLdPsvxj2zsa8RnmrNVcVz3hY8prZnqpVD1ka4j4DbF6PntHXqYxdS7gdL28K3m3pWq9A",
  "key11": "4ZEJyA73iABsmWWujs7QjxdRa2sHrRaWo9N215kCzdfbF7uoiZdYGCAkN5pjzPgBt78FeCjwPTKPQM3A1feXYGNA",
  "key12": "38hAGNdLsTYcKWQmLc2kR5LmWXByGeaqrwwy94rwdGnGGzsHNgXpP2Yq18EPp8WdEGhf5ALWFHtTQirB427BktZ3",
  "key13": "3c5qsDZ4PUb8TBZNb21qSZECGiHUdkWMRsMVBWuk9SbWMgTzGfPpLixUqwN6rTLAWYBRyaQteEggTevKNbCcYoh6",
  "key14": "3vQi5ydA6mKtAiheJAZ5fFPFv5dQ6eket9EccAwpMuq2qq7EyuTzJmjg3ReRpFtA2zu6WztWQvgnJtRbg3g7s3u2",
  "key15": "4Kwr47FDov1cux4tHRV58sYVYAuDMpJGqDPPQmZzpVvEk6J9MEdnNJEr97hF9EpvGjS6gYqyP284jXaxxfVPs4vp",
  "key16": "3EpH7Q3xeZ55xZdPaDhjdPBDRkVoHQigBbkH3ULDAzA2bfKZ2BeY6wL7cf627rB4cdzZDV3meSaCfE37BUnezYpr",
  "key17": "3qsFNcLXU818YvafX4iyXK3oiGwGkqCWLWJYvVP4zDYu4BmXPVwuzwdEZH5uQ2z1mNbwxB9n1ktccFa3weC21CFU",
  "key18": "3EV8sLCoUBoXoNCwDxdtHgVboebfVpnVBUd9KnaZvdvFSdDsJBjTksRd88fPmZwvamQ7uiozivLEZgaqARYTjqZV",
  "key19": "5VG7ggPfk8STowwxYse6iMymSWGf5JPhDUxcXUMKqXAGWdSD6C2xgDFaPmyjV6NwDQMMsarpZpnHK1wRK4oVChSj",
  "key20": "3c17Ly7LzDabGKo735vrKAUxC9tTpZ9hKt8kVoSWEYQ3C7qz8fxB7DYHtvvQRsnB12Vcv11wYzYoYgVh3HuKzG2b",
  "key21": "VPecpprammEPVestQgUddavVgauicxJNndE8scrVMT43pcUzipxip6btrD9S7SyaSBqNDzhR8D1xicZUMS57yLC",
  "key22": "5fX4aZrGe1Sy6VG4t6jzGvrb7J1aupEL4wgzSCzz3csZXZkCe3F5CKnraGcvmUHseNSnQNMszsAC4vCT3iVtTrHe",
  "key23": "2oBPtgVyxZdZk56vrc4ffk4M4kz4HQBtFTBPsYCjZoweWd4K15wG9QmgVfV1QGPirDv8VbNQ7kkWsy5jUZhhUzar",
  "key24": "32w8kgs8XqpFoZhHWevZbKRy5w7pp9D4LzCHwcFgnpFHasFLj5qvBxR6mRHC4VftWbZTDZJZgw8AnbRVY6RS4GSj",
  "key25": "3xQg21C9SDQnZzqnzD4uiGHS5nmRDYfM1s2BucD7x7dSxBEjgTyzT9kZb9q3RkFrCr1g3qY896bdpTn5SYDSmFsn",
  "key26": "5t41hfm3mopAwoWhM4AH2C4rKppnyeF547KtRGGQ7W1TPKvjp6BxMb1NyrsAAfwpdDsUc8ACmZiH8F34SkeXHjE2",
  "key27": "4ZKrpfCHnossnodVZinuRkFccYMinJVA2rRNuS9xfucrFsQzhedtCyk35BoBiQmug1WzpeTtasyabf42qBUqFXnH",
  "key28": "58wNhxdD2WHJTwSJ4CWqUS7U35f8ZiwF1hsiPzSpWcvuuia4whH6GLPuypL32x5ZUoMH67NT7k2pnPDLmNKCqedo",
  "key29": "1cE8hEEehaBmyHyctgJmFMfh5N9JZQBq5uhpfewSwbjU6ERcppKufgRjtP95MJ2DLchr5qHrsKnEQSEtbVKAmmb",
  "key30": "62JibmA3NUK2F7J7FfEEZk7bmE2qgWqxkrxKrmg7MXGW75EpgAmFff8QnV1b1RS8Nw7FfEok2Guee2vnSGrCJXkY",
  "key31": "gEq9xuCz6tH19WCMV4htWwvbMGN6NiWymKJufzbECqF3W4WYDS9HgcTJPywN9VhRXWETNDeCRHEopubEyMtFkA9",
  "key32": "2hxhNjaJHbMhp8ipTLodr1GEJxdxRwokGBrkqg7WTMtXpkTKzn4JepYtsKzy6HbRoKhvZXWTMDBq7jjLgJ8xb8qX",
  "key33": "37TzYKbMS8Vzcj5LQCjo3tpWgUfUpp9VpGcojPjkBRmkjYH4hoiW7UnWSYCYUadNDUVzkBhNaC49DCxx8wKBQA51",
  "key34": "38Vi18JVT5Z9YtXBddXLi7hBse6RwhLotaWZSqHNBnJbgvrmKNHkYsMWNbTwwYPppy1QkhPsxDSpNks9D7ZWXM6S",
  "key35": "21orkWamr4WoJwB2GUAHZwoxUepu9FXevegZ7Evj7aMKmm29cA35RMaV762GTSmDXbBSfVP4Mqq4Qijh5k4oXVvr",
  "key36": "35BQkCwkeSx9YsKo9bxXgSMCfa5Zkp28pFscCqFKNWsYK8cu9kQG6gQRcx3kALyjASERFRmAcLK3fusiq41bu6hV",
  "key37": "46iFysQD3t4gjqV52Jhz42fRUDDQGmGLvusHHZTsfmeu3RorD4qVThsNTq69i9GG6Lcrz5jj8V73LCW73nNcoRau",
  "key38": "2uu1xPSm8DxGKrSLXfwK2aihhpJGcA8yphraU75t6ewspFcokuho7aV4Zf2uJXPtSaz6QK3azraJN1tqGU7Y3yQh",
  "key39": "K6GUq9kdQpLGNjrF5CRLxeZEDpMwe3mwLgRekyPe8ZfrWjDMyLrVb6ZmCgsg3y7UxtqtJbKNEvbS2Ei1fqBLRJJ",
  "key40": "E68F4WHaGrLj6YJDzAUcQxd5ykECUPTy4JFDJtxzcuwcT7uyMf5mRTx5b3csMVWuNKJj99gcsguowKs7QZLMoic",
  "key41": "2Zxy5HYoqhsfPxBErk5dZcUYoGRrCSfJ8SVuqUvjBEm77GbWhcMdHuaVooGws12cAaq5tVPbaUwDeA6miyfdAR2n",
  "key42": "h6nXBLYHY4qeM9ftcFNkSLD1uguFAZtbu88Aj84pU4YDqefS87PVj2KoisAg8qgTpgFPaXPrvB6s2bjR9BkFLe6",
  "key43": "3uz9RCwismUzRgchP5bRSfywLLt44o1B38vGg7s8zqYMuAoc1BiuU4e89YqJXJhQ1sANLvErNhwa5dr93gb986ay",
  "key44": "4uaqXxDUF7TAZcaDJNELLHEsbth4a1T4QLMcmCHtsZP7pB5EUEVw7zzbAaJEpvKNzhLLvu9hKpHvYVtLoAUN9PHs",
  "key45": "59gGiX4HxMugw6f4Ubtubozc9dHWq3cmj1GmEV4NybmM133YAcTQbXWvRkPyA5fKTioyQ36E1Wq9nvDewBmrqz5j",
  "key46": "57fA3ADFTxtUBNQse3pJY5WdNELCEGj4GcCLJpQPFGNU2gwRZmHPcFMAFoD57yXrnrfiERVF38KZhSGEiojPAxeW",
  "key47": "3KftLbogh5iGvyj2htNyHW8j2vfQzNPV71rwkmQ9pUffxjvyr5nbotDpkeiJhXn2bi1gJ5ENwRrgUXG7v6Fjw1DY"
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
