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
    "43G3H8CfGAZ914EGfe8TkMWuWwJpLVx97H1sWTVjXMKduQRDnE3zBcUu9qphdaHoEqHZmL3B6XhbhHVLJ4g85dmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bss2mU7Zr94fSAB1oMbi2GqQQApDzmRLfCXo3PnhsvmntkW5cmn37Gdhy2SGme9UViHhADLFG5ZRFRQbuUJSyrG",
  "key1": "61wQi1JpWoVhLUTzVVcBdUTgMjN1Yc6hSEPX1WoPjUKBghtrtF4B8FdMWUoXqyxQXemWCb2H8ZrQykv7NJQKikkg",
  "key2": "4gk9VuvJzmVVrXk1mbSe5PnMT1gogxjf6Y21XiZ2hx6QUt6Riwc8vH9XqPShqNi4rRjNiNEnhyK9Hhf5h5DaevAr",
  "key3": "2UE8HXtciNtwuEKCsuQH8sq4KRBTrvtLKZiJpuZ8XNTQe6wxBcCX348GaEFs6xU3L1tL8Qeyz25VJH68SemrZA1k",
  "key4": "3fx9HBmcWbZ3zjRwchFwbcpfv4RkyghrrgCtfLDKyKRTQSVWssTDcLufWCQfyR9VFXpanTNe6hXacoDCFJSRxQrW",
  "key5": "2zPNgB5riWPCRugqqBXqvnSpS7oma6NL7ov5FVqEa7aYB5LnytDt8vMcHzyJwxmTcmbbpe1gUbgN6jG7urgFU4f1",
  "key6": "55Ft6SYREXNX8GH9c8hSxvGaQQzU5vKppwP9a2iJferU8aFUdiH5wh2YJKdnzgjHrcA1WqkjVg7qT3hEWe2bAAbu",
  "key7": "3o7Ej59453sgEYbRVPaUReLmrWbqbfTCm4Uw9Jc4bVVgwsJEVFUZib4Bg5ZiMJQBSLV6QEpXTE1ybtwiG2jFc75H",
  "key8": "PQcEccQqPr9sWrZfx4JNkaSV6wm17Bc6H1PWsf8CcZ875UWnimAx2fxgRXjCVf1o7mxb2aRAt8mSwgoDyBgwShM",
  "key9": "282eZyLzwqzjSTJwJnuoddXh3KFTF995QPjbV8ULuVBt8LMPjC9T3V4oeRjMFcHvd6vsGv9P267DLVTLJzNe695d",
  "key10": "u12fSSKLFKbMUNfkzBAjdaoYJE8epFa5ZbiNVZKQZ299Pb3tSnGoE7rGgcZFjdmdxcGDzQx5rwpbJSDQBivtRaD",
  "key11": "5f61xKYtW8LW6oerfStS7H1SuoZYcrMB8xrXyV6BTjRBxs1Y32VK967JFb3rCn6FYrrXWDDpzAJoDzMMa1dXowAg",
  "key12": "339tZoEU3UoJpQbYjYakgDVBg6LmUkJQoAYstUzfDvJreBNwhLdyNSjsnLQNzffKdV9CzGsrtZodQ4Cyfw37e8Gf",
  "key13": "5SGv88DcNFPbTRZW9PkzBYuRJUGFZEgY6j7FakbBK6m9mVKL9VLofaCiLdjK6ZDryKYCdkibQJScoQBTwwWCVc6D",
  "key14": "3Z1e12aABgSY7ZhYMTmUHSTpYuhuBpPPQ4sRaP2g5e16BXM5YzbK89YDQPn3995EmVX7XmzLJKh4kTspT9PxaeNB",
  "key15": "24jfXAE4zXDCyB185qubu3LhCZkRUyvcZFPuJUidfKBCE32wkApU7BiKVC1bLSQWcq19YmMqgowuyJHKxBAekUNV",
  "key16": "3BuKtrQTNx6HdgYYnovhRWXZKVdKRHY8pKYZ7YUyTHk4NEhyXXQBs82erKAVYugVJCWwbbbjoTg9KxxVELhq9xYY",
  "key17": "2MG3iuu9xciMVietwF45pwQe6Je2e2TXJZ9zzGrh7GFbVCruNvAbJgd1BNx8qssehTePCEEzTt3z7EgiBTzRVmKe",
  "key18": "641f9tc5RGkKb1KzFgHxb3Ln8qCfxWZax7Ue54crGpD87RGCjGk1y6Hh6Qi8JUNct3ywHroc8u5SwoSuMtCbwU1j",
  "key19": "2R6iZeQDfyBaW6V5r6H5BKzouynaVwzyk7fhjKFYEMxELjqksUoYR8jPAFyb5m1cf9nSrmc1uDGNqT2bKfncjUnw",
  "key20": "39HgrEbfwvv5nJCS9fvT1TKwFm985NZD2YSvQQg821Du7zRi165hAGLzj1DTfQHSeQ3AJy2Cc6hhFcXhWo86tcaX",
  "key21": "2a6N5ruL2g16TRhgNTEH89wWqKM2mW9Be2Dm5N9mtU95rn7kUkw823Njjk1Fz2Ndw64jqviVBvR9rVHEjwp4ydPW",
  "key22": "4Zrman29U6BzFLLPFkE9bnwZXvYZo7gb4Sx3sKvZPZEnXgd5vasUTJAE29NXSeSMsaY9JWScQFqd8QT81cNrG8Xe",
  "key23": "V2zaNHybHr9DbNhTMXSWZ59it8MVpTsScySWYWg7HmQhWcbM5u6h2TNaZZFySuAm3cY4oMLYPrrC7oBgzPfh1CU",
  "key24": "4ectQ7SAy4Rc8bFMmJY7H7aMNhCTMDSeRpQQAR7Zcf4XhnDXVauesJ36GHie26g3T8jgEN5ZZJZrHqvmRaXmmt8d",
  "key25": "47V46ZNwYAvbVeHrxteXS2rK9HeyyMWuaEZZDeGoTR5VrVwpFVpnftpNJUNUMADErcx6odFmci228EdLSDmJxSZr",
  "key26": "21MhU9UvEgnc7x2n5uP7ByjtkyLYJFEk7trBNomXWD8BKC4N3vV2kBNrSA9QeKT5W8ueM1SNakjoJk218Yrch73Z",
  "key27": "Pw8j1EnpQjpXJwn52FvX3vXiA7hdNp9oHZ9xVcvwxtGuDxf1W9CWsAzdkGFauLLsxFhECjENLUKgcTzqhxQkrr2",
  "key28": "4G7zjG9AN8g1TytNpis6Jtw8S63LeTqfV7rT19sPEXXit8f3Dm3QXvisWuZtw6PmVg6VMaHgn7j4Y7TDpFbCEYbW",
  "key29": "3o52kkPppW1zMx3Ryx8fTbyVAnj2jyUnaMnSCwYiuZ56EsteoUNN8DaG1zDDGQzpf9zWiT1XkzsaWFUkZdMgzxWw",
  "key30": "EgniAp9m2Lfm9q9fHmWk3ijd2Wc2er5vcjfg3Jx56dJ11cmWyVMxrj4m2hNfEX1mmJaPP5kDTHZxvtFejHKBxS2",
  "key31": "28vWeoDZaznELSjDmJCW9eYxinxN945THLKUKAG7iUwA5eDUyjBVqcjX3icsSNLorjarVtHzDYjJKjDxUk3AkY2q",
  "key32": "2AcjXWiztBWS9kJ6YKkdjyoQdK4MAgpGeNh1irHUVrVMR9qW4HRvGCud57juPmd21XYt3pYdzRbq7XwdZntNTimz",
  "key33": "4LA2SBcZSjgF1FTZHzeNEnYt5QZRkTurxAAtiM5bvpxbCEfcKbmoADybq2TaBmoU42ETWKS2VET7ycEtirZ6gjyo",
  "key34": "5xc9NeU4pKpnVRLoffX8g2TfTSgp5W8t4NXY2tHxP6fnUVgZjPGUNerELvXGBZCtT2HJjf8BtkFDxaLZCUw344Vx",
  "key35": "3Xzk2qA7rGbzABEUfWTaSkKb8dEPRkFtAN7pJu9S88vfuXCpkGRgCcyg444CgwTzQKCzasFvZLAmhE3y9Gp332J6",
  "key36": "5j9mvT1coHiQtoSqCwbmuguTLQdomHoPbeSEC26nGvJFGjqbrjxDfW9aPBHuknRYB8GGN5T4dabjdiYvCYjyePPy",
  "key37": "255zFVcxEupHFB7EwUDxu5GFNjhMdif3oqFgGwDWuhLsVqZ7cFxh58wL5zHUoqkiBMnj8a8qmAGtbzwx5t99nfFx",
  "key38": "3rbCmjciEbHUvztF9WR9euDsJFtSyAoP76hhT2ATAJc2Rut8kvwCTn2zgXM9U1UZ4xDpfrjf2VS6JSxhLQCUmCyn",
  "key39": "2bqyNET4YD9PDYUNyhRsaXo1LQFD66PuyE9cKTSCwbyVPwu4UP5QyEaaFnDsr5VVY5AfAyzV3Xb2AydyZhRMx3ey",
  "key40": "5jC73h37vJe5Pkca2nfBA9DFgUoYQH9XJw7VvW6uNcwCFSvQkkp4idBbE8Dguuuikcp96P5vxewxtijXF2pDAF6Z",
  "key41": "3jMrkAh7XjPSbRQAo5iXsvnZw7KAvCPypnEWR9yzEyTZWGJbPjZusRNT6rMPDRYngyS1v19JbqHRV1SqNLAMa4K3",
  "key42": "Pn3biXmMQYf9Gj6Ach3yswrkcB3wvuRp1JbjM3hVdkEiYc15Lp36xaFJXhcxVn5HyEj7hEnLaeRJvQ2F2d3ewUH",
  "key43": "3hcuFvrteAbrHcjx6aVFYgpCNcNS7WrDcncbLLDVGYLsoS53K24u6fQuQAcqBZsRgntBiAzNktxfexvWdfzMY6i1",
  "key44": "3LGfh8MVeE9uKKDhKDZQvbnLupqPfBG2vCeNNbbit4CbLQLsACaybqGhWRyZzGa32HFTLVXLN9sQYLFuktRWTsm4",
  "key45": "5wTSUqNPpV2QsTHt8afPN2L87tTGDDjGUPRMgRVPYV5kYT48gSHJAAuF3A8H2Woz5dWCMNk8NGdnDV9hve3P3yQA",
  "key46": "44gXodKMGB5fBrWSDYZFqSwgEr8yt5LKdgetNtvQsgxR8De8xt2ap6JVJ7vdK3YSDFGtzTxjv3Szk4DjnL2dDJJX"
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
