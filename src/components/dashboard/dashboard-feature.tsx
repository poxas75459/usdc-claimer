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
    "ALTmFWFBeKc4Npzz3QjN8dwwRW6zBBs7AiDohiE7U9GoGLssYEFsY3cg1yyTj7d5XALR8wxrn4DMomnyV3myz1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571KU5vaXkiuSqreMJ65f98Bc33PyNvwEpw39aGXnMVgULU2qn4mE1qVncF5uYxQNhm4RSoNacGGrb8VhCSZkR4W",
  "key1": "DfLCGWfUqB1tQg3cETN7MoN2kqX5uLNW9eWWJgwqmA6pwp4etQftveUgh6RNCEPEpX59bKNkxvyZqyT8WUr8diF",
  "key2": "54gv4L55BWSsuFPxr8FvsmB1PHtTzDAJ3oDL7eNvz4wuKXcqnDwBK8E6ex7Dwi3DKUtNYtr4dnjVefi6YYtb2hnQ",
  "key3": "22GnND65EnvwsM9wprfXqoXDC3PdufMDZVKidn5VX1EuFjFYxgyfDywRRWEpbYz2ESH95xbDx5KnGuRsdE2sjqV7",
  "key4": "JGQRboWPJAycQLzBY4paFW5cRXAZJPaR6h9KGDH3sdnjNp996K9T817TwhV2Lv6wW2eMLcVuY7m68ZQw3PJBe3G",
  "key5": "isyDJUmrsFQMDDRx3jUdVbRSgYL1RqMiN3DWdpuFCSjtqR2fyPMfaP2GTMQWZxVHW3ZPbKXYo8E57THtAZxg24x",
  "key6": "yCV9UKM1MybZfkceXrFySj2pztajuzxMM6oqzeKGA22KJJvcW8xWobgP9g1WgwbTt5X1S5S9C5J8nKBez9CtL7q",
  "key7": "49LQDo2GG9zvRtiPR2N9H4bYizBF1R7pJDg7w7f9oHcfUF9yWnBXFCQnLdsAMBeQmC7CJkPrtqL2QLiDsXsmgFhR",
  "key8": "xifC6iJdU4H7bnywst57VaGKnMSzWzG8VNiT2gRpCKzb7BLMwdtEHQqQ2CapGm273Ecn7vdZMkWxGszYoNXJho2",
  "key9": "2X513U5V7np1DDr1Zxf3MdrWhpEbL8sPGe6TVa6tgP9HFwBPSrQfdHU6jHzWaRumoSW1sFpEGjFKUk16kDPicckk",
  "key10": "4ZdeviJZLYcQms8mJ7YD1E9DFTdKzKe1LL9EvnPZ56JNhgNpuFpeoYhaSxDRdPLzAsTH4rmTqBsyuMrZLiq547EW",
  "key11": "J7UDbniSZjWahd4XgCGVvGKGNu6XQPuPRgsWpX9NSQW6h2bbRy5CpBqD12iJonxk5G15FXLXSjuXJVNTvdwPNbW",
  "key12": "4JdxM8hExk11FX9eYGWwPisUm8Z7NfacSxudvfNXXMgLauVrBA1dmf6at8eMzc474j9GKgvTYP1ojwxrpZmj5zaT",
  "key13": "321H9dpnP7XR4Na246SSL1X1RyzPsKT7z9q3V9Don3Q6BmXW3Q52sHuGHghGzHPyecxyakjnPf3SPhh81uU1rsiv",
  "key14": "SfJrUjUjCdbagoF5TxoQMoaCK7oMMGowpNGnQcNry6GwHgiaVJX4jXo6ZYP2sQns53DdcaqZKUCw2AjqEN7ApeJ",
  "key15": "59K1JW63yruCxcX8mxhC5QMUDGPrmKt1bdJ8XgKynx2djrEZEHMY6gG7tymhpSzdsnTaQJVz4CSHKyBF9qVxFAPP",
  "key16": "2BTESQYu6cK43Yh8wC4eVWxFN4ToaVbLVF5jtkisGqUwAuDidTnWdjZgkpsaa8AJdDTBHhDU5JmgzxnNAbjGt6gY",
  "key17": "3q4TFoExV7QNF8a8Ju4pZix84BarUe2e5w7M5S8zCnx8GAAzbttZYSGpT54KdYQpSDTr1FvwfhWJ2ioMAmtEYDVb",
  "key18": "PexQRtTYLUjiLvRW7CVG4fqfFzKvi2i9AxAtcCyZPZfgirvQGAaR5SuF5yccFmb3sPpzbKLbrL27gLqHjfE4214",
  "key19": "5T2poMTBuin9VDhMRUqYG6oRpiURSoMVLKYZjJpyXSkEWADgkrRL4o38W2xtHEA9nsiSycMVq1M5LEF1iaibtzoX",
  "key20": "5Es7Th2Qb3bbKwNUS9MYGZ4GoopZPn2csBRis61monP16Xaxe4Cj7AYwkXjmDLWGT7DTpAWWuMd67YezSd5bjuEz",
  "key21": "5xEY6WF7Wp1gvFTHbZMWTF22XcC6VJ3B6LuGp6vacgKU489WoLcBJgfJJbyWtjrDfkF1FvvBCYefBmoGHvYkFTKE",
  "key22": "3W9XqTxsEGtHtkT9remREYHYGtnGXmTeit9JHzoSrvgsJf35ipZRm6xCGFQdDGm7ieVzBe3zBr3qJ8yTc1xeY8yn",
  "key23": "f2gYJxts1ajwqngoFTwTGenytEUwMYAUW3eWrirqBkTPVUkveo6sFr4aqxQLKWnSzqr7cHsCzXd8JHC6CMXDydi",
  "key24": "8g9zuL9YxNJG1MVAirJjuJbmnsTT1Wz7vrfd67dGdxiSUdFFGNnjvjGKCUrxGZo7TpGwSnPQAqhyek8xDibxQes",
  "key25": "2PpuBGQDwCSthwBhitGYMs3FQmN6r5VH3yEgT9RVXvaR3JDwCBk7cwK9ob3LtrNkxYV3BycZEgo9syyCBGGxb1fF",
  "key26": "2CHsPQ54PDks85ioo8bFVfavCujb696ivMShU4TbxH3oRf1j25S6Js7R9qutaPGFj7FPfPDc1R1t3DZAAxLbxd9Z",
  "key27": "2351muWVfNeEKcs2dCv8AqaajVLge1VBmcbQqH5HfwKxHb85B4dnz2RiNboLZXz6wFAUYUgKt26w8Jqf6zMmJvYb",
  "key28": "5nxxVuiPcYeLWK5TPhLmjACbBPCsYhQhh2qr22jN4HFsnTbpzwrwqHg1MdA34Pz2ekcxqeGFHveqLcbWuixYjk7y",
  "key29": "TLusEGFUrKxevf5eoEFWj1bFQFeHrRZh2fYQVdeMBAcsMsyCvwDjtLDiK1izHhwuuMnT3ck7agLUhBFxsHATpJC",
  "key30": "52r3AXUKMZVbLV21X1aSTonw8TwdSRe8Q6J5ErrMpWtQPiTEgUy6bYdpgSaNRuSWqSfZgmZaSvGHvkV7abJSRsz4",
  "key31": "3z3xdJEMuVJ2Nw7b76pQN6z3arqdYfx3nphzFz4zaebwNMp7w8VuNVWpnao33NmTd79fJ646dtEb9mQxrkDZLZh7",
  "key32": "4hLnytv5yDrPE87KUcPnLJ1M9UEHRs8xWuM5nwBGJ3nYAhkWPmPcWARKVZnzReCLA9vYcE8eRwq2ArUy8fA4fVBd",
  "key33": "4BeatR88j3cqQVXAL7yfoMaJ7TbyUZKoGFWxqMPfenWS198fBp4VYzZahExWMQMPw8ttUWmUtiWe9En2Jv71VDvc",
  "key34": "p3fMR3R3dWi3wVhcLiQ2jrWYyoZg1Mhk3SFzPfLMGLfx4tvqMKB2WLSDXev4ZtJrSS5jKF7uggtQEUh6moA49H4",
  "key35": "8XmqMXFxecwfJ3UPgW3G7aFaNbibQujNPuumY7HkzCnPXdEKJiHAhUDzbATXir2uZeQki9eEvmuab9T8mHsyGmn",
  "key36": "61GVx8Pm3bjhigiFyYaMnLbXsArRyNJQcvsdxTUQSAADB5LExcFXYQ6Tyd2ffiKE7F76TQ7n6gXysfV1HvUzSzLF",
  "key37": "2mEL1RDtgQCsBN9vjdNwwnEQnfxQNfxVcT3cmTd7FpEGZMGPSXmpgMSM2PK7VyhUhCDyh1eUpMhFpUomCdRCwGdr",
  "key38": "3K7tVjMUs416jQneVuvq4vReW8FqSgtgdFuYc5HRXWJCqFicmPHqaJ4A9VugoUX8wQpqsj6Fp3T78Ae5uymoYVJD",
  "key39": "Z9Tz76NqHwZ7nKe7fmVB3gJS8wVrv3GNM4zCyCv8Gc9BVRoiytoA2sZUYphEhHPSpnQdaBJDRy4PLvHUFqA1Hgw",
  "key40": "62shbfcr2MsB46NkrbpMY4FX4dnL4C3ytvUfYPiCCgtnTWG7m8cfTwT6Uj8uUNxzFZzW3oj3oaYKzCEY7nka1ysk",
  "key41": "5kqnmy1Tb76EsPC86yKCRoPt2dQrYumn4zdoaXLgthW7bgw45y37hVZEakAZNqQCiREVc4yPHDPD99jyUmcdAkV9",
  "key42": "raMKhr8jg5aLfPksYcdeuhCtD9qd8s1CBJi5tafXbaQsEftFAjvshwHR29NfYwuGH87aETQs7xpcj5dyUuJqyCL",
  "key43": "5hd4eBXMyim8yLUHJN7UwW8HDoPZXhzKxVikPYWnvDSKVVjZv62unbj7CLXtJrtyn6xKLdiAyDdHD3w8qv8pi6BK",
  "key44": "5ceyZpiSPuBfrpgzi8JRRCqoPdTeHrw4n7UCqdN3kh1CbgHc2fB18Qk7bYhiAgTQJ6RPcC4qV1owX5TNnq16JZL8",
  "key45": "jDxFTWfUAmcAEvNKpBPeF2o5MywpeUWNqmrT9wnwChG7bZmM9gDCTuASRhJdZyuoYhJVWJ6C5jAk1949n8H93Cv",
  "key46": "21oFiSCcXBfRkqKAYL2Ebix4aMaxu3azFWzuwEv92zE7mk1oGCaiFmM7qAhKs8sm9N2yBgZMyyXYgAKC7uGYro3r",
  "key47": "5DEcPJ6PNSWZrfCLfyYBhgCeCLWsNccxzNXTSxawj5wekg3RrV4a9jPCB4pXkryiBPrvKaGfmsK8CCic5P941UMi"
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
