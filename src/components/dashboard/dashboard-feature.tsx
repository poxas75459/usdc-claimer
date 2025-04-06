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
    "4WzcBdkkXu1418TdPQGzVMGc44xXTbp1tXWMP4YLDiHQdpMsHhqQRbwtBs2MxSqiKacyXwjS6sPyoTbQK1GqAHPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fqNVbe2MD2VJi5KaYRUbknd1pAdtoQgie46mdJdrYB8UnJywj3vHBcFPaoXECswGqbzNKgD7SYjRLYU3dxkF3R",
  "key1": "4kEwS1QmZgfr2E4k48bPjF7EPZBxn1uGxBxRD7b4otRQvv7DsZHw5HcQxUKuu5wrYgRYMQwQx5zM9aWQrFQBproN",
  "key2": "2tGqisMtvKpqWo3z3vtk2cTULu6LffBRwJ8foizPs4FGjJ4iVNU4j8wHARNx3sfa2tmAR13SiSxVjgU3SA4utzag",
  "key3": "62XKwFm2D1XHRooJTk9RdmSe1Ra8EaVW59t5X6mT7iLTbgkHpt7Se6CwWi8yCuEhBAc7HcAmj7vwhyycC4ZR2Dej",
  "key4": "4Kbb8Tc9aNUMAES4M3mqFxKPYFzdFttcD7YWjyA4g1E8NAUdZ5vGb9AEzWzMChPs99DL1XTE62bhi4fvCJFbY6aF",
  "key5": "4NueLvRxCQ5gAwfiBPz2hHjAs1JLXLyNGTvwz24EHEotP29CYCVKfDvyUxWzcqVfbYD9zyZEeQPX5ioAA6XU2Jtp",
  "key6": "35F1fi6g91MDoG2FqKHKxzFF3rhr6rEPMpaoJq2mTTKVc7KnCD6kjMaPrsE7T48CSsMkutrUKSWTtq6prKWvoPFh",
  "key7": "3ThdrwwwhGhnHAnYgCBZKgHtfR4QiftVKDWqAuNScYpEX8BrXvqfeAre6WGSNaDp76YNPhfjPdxJAQXsqVZBys4g",
  "key8": "4iG2xsQGeEfV7oYm2CApigaxWrBrZUUwoE6ws3mC6kpcycYQRZQUcVSqhoyvY1GJ9KwbqoRMoJsgMyYRTRQVFZrS",
  "key9": "agAL786dyrCQRrnhkJpyeC5YsCzFcdrjkwuLr9etESG52ifCth3BNeAYK5pSiaDJgYgCP38biY2fvwbXJ88gQfb",
  "key10": "5ZAHfvcfCRcNc1g12JChZNm45rpLineoPGP1YoeVAWehA3tD3UTSLYSf89xRRsH6s8ouRxjP1WgwkEKw24fLVyJT",
  "key11": "3DQMcKYyrLRYVR6xCxmfgPnFRBgmWzQcA1Asg4d1azwHXFeAvH4H4YQ3ia9sNGAUXvh7DgSQF472fATfunNMGYPp",
  "key12": "62yFdkne6wquEVt8CCbzBeLgNfN9PynQn8Q2gpXFT6wDmC3aKDDEe6St1xAmezzNWvtqPvC9Wwa4Gw2eNxHfbNJF",
  "key13": "31SUzQJjmQZy9jVnRo8oGyJ1weyybVmLowAwieYwSWkQjcxWAC8wFQibCamNDCXtdZ35GjC54p9otzhN9426xF5S",
  "key14": "48kxhmX3ijsBTZWLBAjpsoiuoiZ3YeGyjdNH2pDQ1E4UzyRfRQpR39ff9TrAhpjzPYvHgD1vC3UCigZRabCJEJkG",
  "key15": "24D1AdrAV1zkNhr6FU2n6Sh4Mi2xfbXFC7NUQroD6GUxxWMdbW34xMJimHmWj74qKRUEjWAPRDxaKGtEhR9AGRvx",
  "key16": "4pzkU6xxDiuFrLsmZCn18K8xqQXiu6C6fNQsf5n3gGRgKtj9tuN5Cwp9z24LWs7ocAjMAvjNHBd1xVcAzmMoU8h1",
  "key17": "5aGXtE7C6HSMAgfsDxx8NMPM8WrghFWUBX9Vk96EqwYkZxkNs4CT8rxuCkhEK5kB8J1WAvyWq4AddbSvcrvu4DvA",
  "key18": "5g1i9KC2QjjABAsKfh3KrFYiSwYdfCrgFvRktvLDLyZkZFWniVrBqYUm7ZLaxdJYbQeV6he5B52ZswvKtvSuQ95b",
  "key19": "24hiChe88wHjG5TRHbp19dPYscjK99VrdypV75mEVM7onZF6NnuGED1S4hdV8TaEgjASARYnoBSgAsZwqY9q3sa5",
  "key20": "3c9vRDDJvw62LPdgSkVh7pbPBiKLrUa3rj1Dvipzw1eM1GgspypUqnZScCaySX933Q4TbFyBcXsc3fCgL8UWMyq7",
  "key21": "67MVDcfMnf7k2HrCSSYVvceWcwPfxa9AYYKgoahJTGRUE2SwAaBnvzWrVxJR6BY2Sa6ipcjEB3JtiaQRHCZFE9Ph",
  "key22": "5zFcH5WUTMvug6K3BqeREkEtTweuqn6X16zAUyMToVyynfmYjtFd9iR4GncsiPkAZFN5SucF2k6GMe6Qt4rvpC4i",
  "key23": "5ufqiQbx44QZXrnhJzDYoMziPLDybT5JRczz2aYbYrX7i2pa2R3K8mgGeMp1jrqmGcsxd3m4EWGE6igFK8FQgepq",
  "key24": "3K2yYuuVDuncy9z3vmW1S6iKpNkk8FaFQoqweKQX26NxR57zTpVuYzUwCEt9x3yFtsF8yKHMJY7CMP8S9f4XALWk",
  "key25": "kmiwefv2LnUS9d5eY6XCJ51hhGYP4hPyi3QoZjK3iV4GzKtnJK9auYsJG798Dz48sjYL9LndzNQBVQGmhFgGNMh",
  "key26": "4AMuhXP7cSe3kdRQQzX6CKdVfGZWuARmbJCgs7CGBkjcct1hsBi5pqxfkZV97ozjYnSpQWAn2ViFXG5xJxLwUYov",
  "key27": "s4HVMgD3Wrbd4rat2LMxhFKh7ajJpQFXWaPQhbSVyamNSZcdSszcqkNPKfUTiBDUR5Z754cGdQTqYhbnbxJmWLT",
  "key28": "3B5NuLT5tjFqNDpp9z8L3W3wFH4qA6afmiXsmqo6PnU59edargZFxCnYLsNadXPV9CQMWyHJiN6miXtg6oFWWaVc",
  "key29": "5rE4uAPBiNzxuGz41cc6ypwg8vqqU26AXCEvrJrUJQR2SFS35QABDpDH6czo5nYaZB9JmZesxcyiHG2MtB5KsfKg",
  "key30": "3Ws3p11outDoeddPP16Bb1BZMT1V35daCoXgVbB2qmUT9qxdh8AbwznkfKec9iybSdSd1zc5BYJuKZCtwzynxqo9",
  "key31": "5verrZUtxuFCKFivnTpEhmnab9rLujaMcjukbSDaLemehXpWwaTJiCQVqQod2ZhnxErXZY37dhQpM5CBBjaifKDY",
  "key32": "7XTtm93eVbtn8gV1aw9dyZcTEEr9Fo9YZ2fkBu5nHUQrn98uuqBmoueHZTknXjkrbpz44qh6fgSW5cqZUdQNFyC",
  "key33": "4ezvJsuP79NTF2dPRsYfySFVvLpWNdjQBcxsrDwVjZFHFaNay123Ca7NEAwBDryWdG3zPWauwTDPfReLqMZs6vRy",
  "key34": "3U8rkAiP8in3ctsXNrL5tgpSddPbN3DWmaGCniBsxuApB895AYoqFmNQ3Ra6qYVWk1s9pxDGVHSMq5tAi9TRoY4d",
  "key35": "3CJNRjkh7yv94kraWbm1YBFHsr4y8UDRfBquZxFV9ASpEpFGzo3Qmx58ych8zM5HpRgCXgY8qHeHY6xGSHRQjdt",
  "key36": "4mNpNnPGUcnopbGjoaUP2Jhzd9eeD9L6fCKbNJzgamPxBbuUJdWxZgVC1epcz37XaUadw4ZE9THfSTAFf5a7qt43",
  "key37": "3GPRBA89MkhWkGnJ7HeFamDbWCZ4iDHLR7f2FkZLtLNwagVehg9K4uJc7U23QASYJMMP2AdtBGZ27TQbQoi87X5y",
  "key38": "4NbEH1qhGxkpkC4ZL7WJFF9QxJVxtUJor8huxjjWrsXJCd1bn23TB36Qq3j53v37X1gUX5bHB6sAn9eEU3YcjUY6",
  "key39": "3B5BXqnfiCQWPMpuvE5XzZniyNYQ42Su5AVWNeWCSEfyDAYhvuQQcaxQ7riFdeKS8NWACiBXSD8nSJqR9W9UNgpf",
  "key40": "35ta1M4xuzTeuqJxMpPukYzEtZEbhrLbDUSdmfsRvc84UKpMES7zBpLhvHXRbXy9M9DgST4dce7dLfEJcLYJbLWa",
  "key41": "3wDDwRRDwiDBzbLqxH9F21zkt4wVhBAKxEsa77SR1Yv6vt7tdwVYFPF455CYhPsRYG9HysFqQBrkPTzEkeCjvXVA",
  "key42": "5uMT374TWnbxWqNwzj2of3MPXyGDgBvvCs8GH7UZascvbgzJTFNAws3bnYDJ1vh69zXWeMHpwvnubsJ6cjaJP23h",
  "key43": "2c1PKeLjTBaLn2qXNWPkusE66G6qskqmuaWPJb8k7mfNLvU4PvnhUQmz1svwemrWKduQVAs3os9sxYCbrry1jsve",
  "key44": "yeAD4xW1da4JKW31mF5fNsbYerRRJ9JHFQR1qQf1QWR5SQdPAJpNDuGwmHEroia61xhGqxNoPB7yy3q53gres56",
  "key45": "wjz8btPibCW25KRrA4z8WFvDHgcC8mTMmfUxdyqR64P7Zhh1jkeBRErVG9AhUmy7P6Zm8zHeSvSibBaL64Gywh8"
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
