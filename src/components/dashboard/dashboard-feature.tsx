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
    "5vcHMop5Aiv4N93sMZX9RRiRUpGjVEWL2Ao4AitDm2YdPfsSr42fFqQ6Q7nRMv7E1c4QLNrfafsHocn4pTeFa5r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29WBD4DwaXyRccPiU3vwdtsGQ4sB9n8tc4QvFmAXFouE5e7Qwzw5tby4zeAnngK7Rvp8S2BnAedwR9UMyUkg7pvm",
  "key1": "62sCFmygU9WZG2L5BAYtTz7p7VVnayW9RdLxpMV3W6yFGh6CXmtLG4gQshEZrUGSUxc6J8EhQpAafzMMYUcXojFN",
  "key2": "bXHBSAEaYjPNZJLJ8vXeR8gyZPRizt4R62k57YUF1iMgKFsNwcjR3ca9qdDGTbQge9xMgKpwTmAcMwKAaVxTUrq",
  "key3": "4PpnWDEmYV52waPMWAc1pnbogRjY5F2kDn1cPNvzC4S1SV2fMghDxYayahxzNqD2JoYptTyx4SGhaoF2x4nRLocW",
  "key4": "4xFHU9trzN2rDFgzi9zzGW1RejAn3BwFhCdBnYtYGjhDD5Ur4iMgJNjFgqzkR6wu6azjtiqvyEbSKmyWfxdmuvFN",
  "key5": "2Fvrb4cNXzSSxFPvKvq2qP9NUF6Xa7od9sT16LDFq9rFtGJcSJQhndb9nGeBndv4NCLoUhnXeLgmpCPwzbg2B5a1",
  "key6": "5VbRHY8RXUZeUpak7PyJMAnXg4nSBRjqLxnuV3fjFBLxp6dwEM2vZsxUZerXNAUiAsrwobdt4nB1vXVojhtwnmX1",
  "key7": "5y8eDFJYmxp1Zr4XL7iKDwtiKDfDKZxW2pGC88KkHnx9TdADodJ48qxrqcoE4m74uPj1rSampfb4txiC7aQc4Qmg",
  "key8": "5tvoQCVYsi2SCJsHRhHMoFkMu8ZzoQqn5K727bTpPpPwEKzHkPm8S3H7vVcvCkgX1zqjgdxNNBLvnsJxq6UxqFGr",
  "key9": "5x1XKvWDn3Vx5KrFikStT83qHdpBCcfnNsZ5Bc5i4jtiYAwREtsDhwqfdRq8Y213Afcw8qmdd5YSjNv39dA5zgrZ",
  "key10": "4KBe7WFUqzF8k6TDPKpXxFuPrLqSyU7NYNjGiEF2aqUoHksozxrc8NwxqqXFHK6S2VY4H9MqzSWxvmyhBQDW8Gn5",
  "key11": "52J432EipvoD9KoGJtahm4rAZeFAFVqG2UouQvuGrjmHtw2cmeqT2B3raVu7sfKbBt1ceeFhDPqeinHCmQdXHdR6",
  "key12": "3Sq2CVDQQsq2KrKAUYetAYNbupLtyRJpgZhHxrLLRjDSKsT8acsBEG2BT1dzjypHJ79XsiteUByNT8DmWgpTgaXQ",
  "key13": "3bDwKVXT7MuqM2iX5ajwSTmUZaU6K3zpMuzgAb2D6Ke5jYT3UhEy9NeYPjGFKzeEj8d6WCbtVpMYMyoQT3nnH1UF",
  "key14": "3WooGCzj9tefgF1GXiCAXqajzvKvQzRVivYuSaU2HY8B8LqcgegKDJCcK5EwfmbEvpwFb4WxXJa7BWGw9NhUDGkH",
  "key15": "4eQunyGcM1i2UF3khYAeXee2N7uQpo8xh5JyrJDvHeq3YLkcge7PPCRFbXnPCcBGT8nXEM2bcxwo7BoZ4SnFHar2",
  "key16": "5nnNKosnxHHka3t6GT2nmur5ZaNiYAtS7egbvMoY5cCFkUzrysuotCJoJjrQsq7u8GjAUbTgHd3V5CcC9hzVgc6C",
  "key17": "3aaBqn3dp6VivnynHVAyMxqRtdYBR7mEKjL1JosLTCk7mpMtA32yViSY9qjaY5yiGbaykecLi7i23vxpoKzGFZK1",
  "key18": "3BLeXiiUeGTyJK9icUzsbWn9Tmtt2qukqneeiwsF3EZNNWX3F8J3RuTZHYdFysTKHqqGd1PNPhRaEX51kMZ8kUe4",
  "key19": "54T3y9A7uDuEzcx8eESG6hYj2vCFdBHCSx2uojr9u47cbBnFcqE2PsdPgwqJa86ioNEZeBiUfiVqjtNGbU6Y7Lba",
  "key20": "2oxo5oagzR7djEtLoB5E2cqKfZ6mG4vrvKGkxJG5qqKajmGpN77NCLwL1CFRzvKH2w9vK6peVguWALyimJcZzauh",
  "key21": "2avDgCaPFKkprf3v6ytapE9XBAY3a8kkwEQCS1QiMFthP9kKYjTsdtRHo5pVDKW2m7HF44rSpK58zDuQPrFHfzSN",
  "key22": "3SePwk2EhYx7tXqoFAiv9Cma97y3xdsn5bs3LpbuREVasUrd4D1tPavLWzpKobZj62nS3Vh2ABRTry1x6QKfrMwf",
  "key23": "5P5UnawRkAF3MQ6HMwcoLHf7W7bJ3Nen4ATexwHfQpeP2tbJhoKPiUkYJLXx6AeLzS5qTb6c1duxY9oj4BMVCvRP",
  "key24": "489V6kiBepnrymBhH5P2dWApZJNPecgbNuAXFgLsjWSXip5GT1LcSabk3z9dawGrdEgcmZmeoeUY1oaEnmuqidVb",
  "key25": "5yBA85W29aTeXSxhgfErByqa4mjUM7r9RVY8k1X82pqWZpsq7YRf3Efq6vn5PHtL13FyfL4rty4fvB4z4E4LWyJq",
  "key26": "5sKfSXrjiS5pAr3oS1LmQ6LpRHK3omuFQkxTn6marBMvBRUd8KDrff3wZZ67Ev5gL27forRnQx7FgrBQcJiEPd2g",
  "key27": "vKGS1VbUp7PeTXv4bWEZyYkq8nBnGWi4zvxresywrCUipKbPkfK5vSqLAShwQ8HRrwWBSM2ZScRqdcXFbrwJyoe",
  "key28": "jj4u3mZhZap5Tw1yFmhPrdXavVyiZ3T4Q3fZrDL33PtjxVYGwpmBNJME7rSpVwvFBYF9wn2cvrzqunSSQve1moF",
  "key29": "4NA55RhAEJjSFhgDrW1jtMm6QV4ifPrKcrFWVZi6KuLRWtp7W6Lchcc6hCr84t5kaHZwBgMZ8NYobBdn89PgL3uN",
  "key30": "3Zz4W9SJ2TKVvmVP81UJvX9rkEsbwV5sycYL1fdszcyJBrahBVPkyixuSdaJigYtfM3wEYmwaZQaGApKiMy2weN7",
  "key31": "5Brafc2p4nmGyXAsyxj3QG7PV8RxN9mFTdMa1eTfSZrTxYvUyDx2MoD2jVbkZR3AFMoZsaL1kGm7Y4tvVUXBSLoL",
  "key32": "3toxsoFAKie4y5rDSvzGc5jxG7WSxVuqQzVF7ii7kH7BnFwQ7pdk5EY3ootZoKewTneTMrv8cxTHviK4ck9zWGhX",
  "key33": "K3yuhpvsobHiL7tUHjeK3vTzCiP85afFGYXMy3cmRJQwKzzJt5iGsJJRhg6DW1BPRwppVpxefiSkxNJfHfiTuXr",
  "key34": "5e2Zt3SJAYWh8CCqM7VqWgGKd5SQmmUXWiKz6sgUsqKQSiTEcTbTg5cpgNgvBvkSzJrbLPX3xAAYU7tG4zB8j7Ks",
  "key35": "2M1ixhDGoRTsurBr5VuTr27jnkEeJ48amvu6bsWYU35oyDdtu4UiM5r27UJRfYAZ6JNuhkUUuRkM8JdhPiUC1LSC",
  "key36": "4jVPDF3gdXM6NUxbBmaoyJ78hb9mbiXfuohdsdWAZ9J2VERYsrfB2NcwA4CUgPBManon2nuksLLY6NpkFNgpPUTH",
  "key37": "57gZ5Atr7TsPVNsRr8ULDnQWT3KjAbiWMsQu512WqkFLQ76Ueeic6mSpFMKdyKBsJhTZ331nzEejb4fsZdYypEvC",
  "key38": "ZiUSsZGzuQr3Szu9eMPCnm3kDs1MkN5MaHPQQp98p7GSBKo9nvUErbR2csK4GLobVxdcwNQCu9pPjVZFQ7g42wQ",
  "key39": "4iiBnp6nsEvLkfFvFGbZgQX6svAkCG77wnDfnGdKdGfDJ8uevakvai5xaaJikLoq4eFsRPVKq3jduTfatHwgZxLn",
  "key40": "3JF6WNjhct49R2NppVC6JLfRXcgyXnacX8kBR6Ly1FDf61SmwfUgGwopgunJvox8h3aZZZqxMXra9yDD6GMLAJHU"
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
