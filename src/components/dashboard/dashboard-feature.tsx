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
    "2sMmEppzxzwo6a4iYh1fBXgTaKgEdcqoX3zo4v447tYKNvxWAtLTmCLsXHFDdYhGFqwyEbg5SsatMtDvXLiwDiMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHFjyXDakRmoK5v6cvisu1rWiWDCgjPLgn4RWHKUPDQV5ZWuBjeDhMAqfGnmCLUGasua5sAdSL45TS7skuxprxZ",
  "key1": "4YBqkzGbAz2DbRGg7ZKuJfG8wuDdMc6eDXXARLxZx4zTXvvYEGoAfztF3pqd69W99Jcn8GY9T7QoxBJaokds6nNt",
  "key2": "4PV5GJGkczXcL6mCfzmqnD2Gz7wfQiDQyCcJPJwardnngJuXfuyF4SRsyxqoMB9Jan5gYZabayL6bLKiSHtN2Njn",
  "key3": "25aLrZ4GffK3KAsMCDm1LQTevT8Lk3MfFXi4SHJesurZPdbfmwE5mtHXtDrxGHtLvn2PvNLb2JsYEwYYQeTkbGbH",
  "key4": "39oj5HDb8ULrqQXM5g9J7r7rXFo4tiywZ8hhqyphtsnJy5AkA85DbG7mtpWxCffdJYTYk9aHEpciB6rQhQEkUb9d",
  "key5": "Lo29fWxdvMQzq2sdd34ERcGC7YTmHDHto1o2fWqWB1G7ehikhSbLgizRw5GyJgJgoEcEGj1LzoeLTPZ2gU3MupA",
  "key6": "5E8E1BuDyytUZwWy19mGM1HgQwHmLW5pS29w2X5mX7PaGtx6sdkQDAK4rD1x6RJWhXF4ZZkAuxG4u3QjxFjQWrC",
  "key7": "2S7amjNG19mZTdq7SmPGCSXgLp4yBiH3bQPFJoUn2g4x5ATrdscCXtzpQuEPPNMJhSSAsBQuQCY3p35WWjbfgyFB",
  "key8": "39Bp13MY6BC6DUKpQnKAfcNc1in3Dbb42BpSLP6BwXrdQE2NEHmqCXusgqQCmwzbPdyh6h8P2U9ZpajPBCMTzUHU",
  "key9": "3FxR5tGH8BAGefra1qgqQ6vcXDfckuKLReQi8DTXGRKQPijv83xGevNtzUkpk99CNonnJ4YzWpBfJpoJt2Zn5HcC",
  "key10": "4FsQZhNugQTmt5ykVZ9Uvavii6axYDpw8iiE2t9S2uzqU8RqfgwoHaZtKxS7LjpZhxPrUYPZN6wiEaNDuSb5zCde",
  "key11": "5zVLsD9bFjgHwmJV6tbdzZYC4LPZtDpzSLb6RB5noQN38dpgofyxbi7JoznJF7dgKvPtbBvotgoko7Nkd6HFG6sT",
  "key12": "5HdnncsFR7oQ6NnusbsxJVnpeyewAxeE6GmxDHeLe5aKn49zJuGZsTsGnyiDijzuAZEK4f5MeMRLL3pirAMEvLas",
  "key13": "5CCrFTm6RqNqohiAgyV3BnGzfQML1d7pEyhxb61zyy3M1JunXWhRxhYYkticvixEXRYsg6JB2gWqgJbFNJ3bL14W",
  "key14": "aoB6MuahHd8Z9Z4YmAnBBRf5ZZntXR7f7n3eAnCmevT6Pqxt7QUNkPVPMf7NmxLEh78bBCkDVLizfUUq1WxRJMa",
  "key15": "4PBMn36LkRuMZ9Y23BgWbbnpEcZWcyxmv4Ktg8yUR7fYeKkUjatey1XchBxkNQrdAaMJmRqzmp5cawg1taE9dws",
  "key16": "2g8yDnzQXMViQei5HS5Q6ceDj1gL3HswAt6Z6nLQjHmJVsSUfvGqPNYvLRGAUrMG9ZZXGqR4zSYxhfaUxZZTfWWS",
  "key17": "KDRBkbFA4JFpyUM6W15B6crujczry35WJbjd7ZxfFM4oiBwmXpwF66XemFzuMXfc23njy1wyfvMdkMtb3qKQFTk",
  "key18": "3wZQLBG7boP2z4mzGiHjjjoe5NrqQmQnj4Xg5sv4gqdDfi7ok8b1Tmn1FpqzRBkuNt9PLqRLJV7TxvfqTd3E1ENg",
  "key19": "5uvnh4H2NdY72ni6WYMckDKrM9q2ihW36BSaWc5MGq3669YP2x8PLfCY2aEgLMX9XbhEasRHHRxdXz1Sye9BL7sf",
  "key20": "5cFdSSnCs22QksSuGgT9ZBhM9WFTgqssVuf1fLHeJQ5SFfoAXPGJ18U6znR61ZemUd9d49hJmfBiydSpnfUvcGe",
  "key21": "3RPyRoQMDjSMSgXFYbxG5ddyiggSjaqbX9zZyY2nHkuUvzyjGPA3RysmHxQiPcjEAdLdu28oQSixDLjEUyu8dJ7L",
  "key22": "3C3xkrDfvkN3a2toEfgtnodCuYViZTDWbDTJ2YtP6YMcd9eozeEeYDqzFsZuQc9MTeWiXhScHvQA3jLvt7YaW9fn",
  "key23": "uqV9c8Hi8q26hm8241y2KFfA3PRXLpzqmNtXzsBFv4G9yLnTth4NS2wcq8LNV898Y3drT4jc8tQVGJ725LisxAG",
  "key24": "3njD1RXQfZvhDDsfn72BWTvRG2pHhnRgDTQ2coQjxHTMVRga6qbKrU1szWxAqCdgcdgA4XQDgzr6mVHDSUW2vW39",
  "key25": "4SatdfRrk1ey3ZaeBctnDan9ABknkPyDSyBMuyrMTqgwGKthpFGkCArjDRfswQn4tkQ3WtKrFASWo7dAUGmcvmTD",
  "key26": "5f82qACDPArx8B5yBaiXNu8UTUFWafgLbM9yUEuxoVDh2nGxQxEcaJjcSpvMNuQYxJNhWbeNoETScYT6yRHTU4dw",
  "key27": "5XVGtd3jX41JNgr3RR3mLWLa12nv8XbHtq6gCq3CuZBEuw2JVbj3G4nHAeJu6UGD3DP4vdEiQktcyDF46vwiiH3M",
  "key28": "VBxNKPjZr176cSVGfGTe8QyQpWHXAtJ4SkogEFjXC3CZ7JjBAHbbkcqyyGeEjKyW7qrW9fL5oqeZoa7pu58Fvgv",
  "key29": "4Jp4tP78vJoYFvBqDRCtYHsgVX4XtFBjbMkpg3moW75WjJAwf8ABkm1mnUSgFk4TMQmLavND51JPuGQncsABUhVb",
  "key30": "5Gs3HovsENrFqLQaFvB4APsdqrMnHGNVkpkVH1Ti2SV3QZUeenGVMiSZWLGryE6gtzzGTogj79LEUdH6YWEGbVk2",
  "key31": "52XJ5DDwupoyNMYs2ob58VcJBfWBwwSjteWVEMBUDyQDff3Qnb4o4q1ZmpSryztcZyDXN6eZZyA6QvY5zQQMQF8c",
  "key32": "3CWJrHyfc33HQduVsENZanknd4JWDzAR3ghbMq5RzizKaF7F82Hce58k8oJudU5uLzJbVShtukEGHyNn2cKqLqvH",
  "key33": "2trv3jYZucmPGMjvTySAirrJLvYMTeNSGKXjUoZe1Ut77XVce5yDdabZcUWgrW6XWVQYs4SZddERTRvaAKkVk1gw",
  "key34": "3UBPV9Qh9NtGjFsavTWQXmrgFDcjKpXW6QHy3V353vjCQmVqnDLbhfTbAaT16d2W5e5E4UjqsvF9WtVUgqG2rqt",
  "key35": "4pmufpJLJWcX8bqbp3LTJ4pX3BrrHhoWmWzDxS8uLZwqsFAX5myx1BDCu6e5NLNm4c1qgPRBh3uBNG3W6KXAHWda",
  "key36": "5s1d7PUe3UdLn38487cuPqUj1uSfKX2YLKtPL3StTFWZcjzTLMzRi8jJnoyf9yG2Xy6RDzxc7yCZT9NMhVAp38df",
  "key37": "p1jcQZbvjQMDfyED2r9825Wa2jKSwZa8LssN8tRkff3fXWyb1vT1RhusM7CZxSJxiwF3qQVAErET2SyURFgBjvn",
  "key38": "4LJtJLFg1vLnqRTkmc7eeCwhFX5Cdmk5SFGrqbizDskLdwaGP6mxwCwe4Z3qNyX43NUcGJSz5eFV89iGypfDCQbt",
  "key39": "3xb9Vy6SRX7hET7amAuxCvcQtEvJWdAQwKtktgrHEgy7LN1owPft44AnvYbkKZvNtkYbZuZf4G3usX2bDXQ85NCU",
  "key40": "2rBQXum7B4rGNWfpZPUkLybqo5S1MjiSBET66CEmsJun3oZozgxzy1aJkMbAMFGXAqWpWYYDrWB9d6MDpuxFRHvi",
  "key41": "4vP2w3XgE9vH7pg4HvyRXoRvZcWzHvkdxMmTCuhNtkkcipFPKBS89vBzyReWFmXto4qF9reM9TbNmVZTzEGk24rU",
  "key42": "wkJenTqsLpfinbX8gs5ngw6m2bZgrP1ph9uBnMGHmLPrpHumB6NejXkGYjb2XZhPzSjghhkRo7xPLDhdQiUcv65",
  "key43": "4yJCRXSAfYZuN56KWJug4pPvUBkUMocfMRQMZn6aLesr5RFtpTyKswjFDuUaZQGXfgFgWKdx88mVfFmvMgemBFuX",
  "key44": "5qR5U6zB37dotseNmQfy67Z9f9oWM851awGj4F34TiaRiLBjBfXB5NMJprWpTst243oaWJy7jg5uTmQXM2W9z1HA",
  "key45": "3DYqsjKvkCmYgZbCHg4AVHtBYQimRfVRTrLmZxRNSQkDZ5jUjJafPyCFZGMwnCVtbjQ3HwahBhdoKxR4KW79vxR1",
  "key46": "5dE4J1RxFkAyhcMvj1dnjywoGEa3x9tig9nJt5cJcSo2dhQd8ScTtzpfN6YQQz8R3Ev69Wj5jwwkkzeDBKdtXZH6",
  "key47": "2FAamvTKra7sB2muBdmG5q9hak3k26QFBDPg6VNEghsBvG6yQ9DRCZkTx5EBJ8NvEm4C4M7HUZYR3g1p2ReGDnkg",
  "key48": "5RoAdkLdoJqi8dw2hA1NkaTjX9c2U9XHJdEmhiotMPB6YMGxqBEm7j9gbNVtcwrW245WU8Cx5x9h8h5N6ZZNLzsm"
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
