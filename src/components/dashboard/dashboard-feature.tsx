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
    "4piCxpjBMHEvDB8EgeyPsGVpg9zBE3WxR7jbeegofbARwTa1zEw51VJuYBcFTZ98x8G9HCcusSqtYJZLJC6qqP9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1gLGFt3yhLk5czxKnhY2ruwo66xNmgm8iKYBbgjP88Ub84LHGk2KJqmJshvrKuPyNVFAZwrNqBccFgaByKMqG6",
  "key1": "4QxtkfrpvFL3pAaNADTzr2ZmKvmM3TNZjAf7ozok1aaPEifjmJMY16FFpikY28SmkZXSrRa3WohfhGAjXT4DLVF3",
  "key2": "2YCQZmFXAxknXHgYbVDM3w9Px1iMx5yT8gnBV2GSax7taitXpnW3fMTmCx9UKt3muMeLHcWcc9MDY2vsW6zuyGps",
  "key3": "3F8Kj13D2rjERQuEMGCzXBMf4vWMtX2G2BS89Rw7XNdwS5SJVsr3H1jKsLBzG7VVca7VgA7NtZ1WFmoZJpdDk5Ci",
  "key4": "4bAtNS9mRwj6wJTLAkm9trqJweMNnbrKw8mtcWWwUr8sCDiUBfWn5Li3sbBGPACSbKDajyYaeAgBo4hfb9qZM13D",
  "key5": "4qVCY8xiCuyFhgte5LR1nR6X79ZoFmMVeKaNeDSN9fABwLEQfxfK4LZfmytHMqXw8tmQTCEXA5h4ngPY2gFTRJBC",
  "key6": "3QAyPXJB4YLH6ePr3qJnP87ipp6wToHM1ofZ4NHYwaKHLCkTmfA7uoXeWr3gyrWktX6bnjLYcG6z4Qe9hYR52Vos",
  "key7": "3ZF3tdFtv2YaqtyoXWBXAoUocGG1LpyksafG8n5VQf4RMQUjux34awBVmiZk6mutU9B2sgvdzGRkxTb4KR6XWgGb",
  "key8": "4MVoptzrt7U2i8bLvKwSaBATyWhLub6QcW5ZvYwAWexKdzxsC3xdKNMEaAczBvmePUf1Af9FN98VVV9N3ns2pXNc",
  "key9": "37xqtyjZycQSCyxexkUp3bqgcuGHbtpzv2APX8yP8ffugR55cFt2jK4wu9DzYEaXaRYz8W2nb4dMfVhNt2EJHdM4",
  "key10": "243M24uyYibKXLGMEE7XP1L7MhZ6LnTy5NK1voU1uaeVEHPKzD7NFrFhzvdikVKy4KZBqmKD9yLXWgGcN7zagxbz",
  "key11": "4Vd112cXfAbdNba4b5K2kmUFk4CtJjwhtNP2JpjqnnnYeK32X9RoGFA7B3dBpmAvWNJiRGHubtsBhrEPCWhRUSrS",
  "key12": "MwC6rpgVqWdhCUVBsS3DvWNLnoGPHQxkVdaSPjLmWcciu9Fp2G57KVDqeH243imZYsrzbECNcGuPnee3jhFsQwL",
  "key13": "gsvwV9qb767bUyDG85ZQvvBfhRMUFTgGQwtoLcVYjc14uy6Wg1FCFbGg8YWKKbNAUAqiEWgcreFudfh1mRUXd1N",
  "key14": "5USQQdrCVsYe5B5GBHMSfPEqE6pdtQmkcUju3BbcWue1ZnPZQN6ePPFtJ4AB5fCN77NqsNojJgrBfR8HFioteJPJ",
  "key15": "5RqzUT8DFWDiqSPjFu2L3eBkciXn5gDfjH4kRBPoc7nBfyiB1AkcnwNnEuhHSr6JzbG2JiWcdpBn6mGRR4n1t6Tt",
  "key16": "4W3pnTXdQbF8rogeEALcLprkAsrVrTXyxpYmgfe4zwCEAoeh4THSMisJLp3GWu6fekEGPfL7baE2pAwkrkhj1ho",
  "key17": "4qfs6Pu7ERVmWH5JKkZrjjtqiekHzh32ajyu85dQBBCNpJTJqmg5BGSMx4dwv1bPGotgzTD27p3pz3TAGjgvJqNM",
  "key18": "5koiYTkx3RrLmQXFeYyAXw5YRWfy1LJ7fWwvUxhgt2TaY1LftNwU55Ccy9iYpJrCxMUAaKR2jEKvY28mX51oq6iF",
  "key19": "3cfiYE2CpWkrbrrb64S5hDc1PVbV3LLZW5XDnYEtSGYkdYFJduGx1jFd2SUv6P4QdDwXMKx1G9tCLRRacWdC6vFt",
  "key20": "29VZptDM4jdiaAA7xJfVNZjYa2mMRXN2Bjbo1k1NvLhinm1UUEgFe1qXRofpE7cbKYiAggaPHJVR2BV3MEGQsvPu",
  "key21": "4UbksCoRzLnz6JfaV2YDdmyi5wqtps3h8zy6HJ3cCvcM78WnTt372GyQ6pXvDPUv14JrBpUYnYdFVGPVDyNaiyRb",
  "key22": "342UAmamDeRQbz6UD2K1iFVp7E1LZ8wNppGySHRuA5G3Y98USccd4FoeqBUYkeDfeq7djQBJ7yKCMwhRwiMvwcNU",
  "key23": "5pMb6E42F9ahVaAWDWF4vo9cPssgX1k8zAzrMtDSPjh8eVgstuPN6hq4ZEXqpUFyVrwi7KtwVa7g5eG56eWDtDr2",
  "key24": "4tz4v6aP8a7r7kLdZjVaVxPgWdtPKZrL7MaCSDZQsivzvuMFCwvaV5Pa6vgg7Brc3E9zFF9x2pKQv2Sk3DTuMdHk",
  "key25": "5Xc8wFkvUtmvK9RNsQdqXEGjdVNJQsTQoJwSMTPvNTtbPPzf69E3y86ijdit2wGwNvQrBMiscDGG9EpjAwN8KkB2",
  "key26": "5wp5zzutuMpnLNeB7YS2qMqDxEfWcJyLFoJJhxdopaMZK8X94TiH8i9Xw2Tn3F7r6YP1CkARWuEwBSBM9EiRnKR5",
  "key27": "3oauEMtC3aBGnDDDoLqiCJmVskJCbdz7yrVfgv9H5exYx5T122fA16bUZgr6WZdQXJmYzcpcRqXR57TKnU64d7n9",
  "key28": "4J9WBpwLMpHRNyi3Hpap45XQhxNNYTaHwmf1Jtk8uMLEVJTF32rx9KjbKBcnay5d62jMzCmk3oLP7V7eTCeJjxhj",
  "key29": "5nB4fFf2hRsDLqFhRieo2F2zGfqpbqJgh3pYwKF9s4TPr4skx4QVaeQSawf5CaErdRLDNep4jhbChyZMZeQswZ8D",
  "key30": "4RZ4ngQBp3od1v2xnhB9Wab1xdneWhuYJvQCCiDvDDvxbERUXE4oG2bESSFeNgDHiQazRKqg8S9qqeZbSJzCtNzL",
  "key31": "4hxudSREQNEXRz72UAtCyX2wXRA1ANhAkFpp6gsNJjL9pFXJB7VrdwxwjQZ99p28fFFVftdoh252Vc9wKFEHX735",
  "key32": "3zHfL9hgtxT7eZTmQ7S3yA9wyeE4pQGuACftxhunT7AHTBZP6xqwaD3MMAwoXVyUNEhDeS9RhqatrYziZzNHMZ5n",
  "key33": "63Qcn1smibdJqr58XsHs6wf9AiYnijZMjaPs13FG36QEs4bs5M1jHUXMwuCHcXt3ksHmWzwLqVjfGFwRHcB2qgMi",
  "key34": "5PXNoQ4zKx2jbRb8rvAdnmwjpT9gN7WnMeNbmTq7Kpv1CzxM9pkYjzMhLqwCTH16e22QNjaorwB47dXH1ACvUcUt",
  "key35": "4mRDhgVmvsK5Y6rQ3z7KJThf7zrV4ZuyFPfxyRxRp6JZCiBoBBNgLMdAPbeSo5Tbrb2xGUNmzhiztrnHv3FzxUBy",
  "key36": "49HkDaaxfojqRAG7sVqXt1obG8fQzPvEbVAJukrcWB27iRA3U6r36DpC5dVCVoSDiT1PJ2PqC2QVu2iXtReytyHN",
  "key37": "4VC2sYs1J7pNrq417kammpzHXgcXcGXkxxzUZi38wG8vzC1mMniQ1E6wWa6ZooV4wWUUJDnqVvmUnRxLmKQw2Vc8",
  "key38": "Zf5dgPbxwd9PaKUrH47Lpds6xtujpYYVE7Xd9YgEZKAeGnaSXhRqjHTjGenmH13DoHJpF24MQrS1UXSdwkvGtuG",
  "key39": "4z7pxy1tMvzYTrN5mLcyiHsgBsDz2AK8daQJYfQZNKdNvsR78HHy7DnGu9VVjcFMVjqkQbVWhirqsuMSFmV8gwGy",
  "key40": "4VuVS3MkHQGWap1M9vvEwK8yrVXqoLzVC68QSVY82zwUE4L4edMQQtbVWVNQxjG47fQev23Uojp9CbPuK5Mz4ntU",
  "key41": "iPJMNiiTPssnhdUyX1WqYADFmiZaBacpQTxr4Z5fwzPRSGvGweV4c2VzYRFAnPYiBxn3FMALzf53fHMzLWst43r",
  "key42": "61UdMJ7Amki1ox1eEUXrBnwZKYC3x5F1Y1rCTNRfzKodXdM8xNKKCKomhqJRtYxVw2sWT9PQRkeisrTnvkfYRxNd",
  "key43": "5fCHhuVdTnfqo7v8NHPFwYbu92xV6qW97VcakQ49gjJp3MfJQpQ4WTww9LASFodoH7LQ3qpUuGj5b2EpZiT8Xxep"
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
