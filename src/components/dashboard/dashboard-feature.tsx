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
    "3Q64Aw2GHgtQkByk6RFCMVvH3nmY5QjzwQhZ2J9eidYKUkiofY18MtQoiVu1i497Ftkw3uy7CJ5pAQSsyeGT1rJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uWtyoTCUiz6BnZkXdaGyYVquszeoZgjp6eNbnbiFVayQgqo4UA9WeaUD8UcZAxN8bgvh58YmQXeroxxytmdEMDa",
  "key1": "5v5aAdnZaqUmtbmVihKWXpkvxwZBwzGBzJXDjVsWvgaJw6CMYs4xuL5uerc5SX33i8TJhcf82QDLiNwV7p32c7sN",
  "key2": "28TDUiLcT7sQjB8biiqLtjTVcg9QJKDiLKMAFtLNuGzhx25ygooyyzwURMhfK6uVFpa6erGj1BD6rtaCohCmjv5L",
  "key3": "aCtuQyUCjaBqzKKdPR8KcLoJFx4WqB2D3pVjx47w1V4srNu9d6Hv3BoS7ZobB2BRfRVE2FiQyvMYReZe5x87KFs",
  "key4": "3mu3rEaqyc9zE1fjq2SqmrFsJPvRUAn3rLynr9AoX5i1mhyUC9g2yyBUtVbGV7KzNaWcRXPcMWaF3nobLb6PVeVF",
  "key5": "3XUfBJFBy17vTLNUV6s9csWBKDJctTRNx9uzGUj6UzfctTzfZdmk77jZCeWyZWegA4BrzCnuG5diJ4wgRqqs88RF",
  "key6": "4aVcHtrEMrMniGrjWpjbF7xK33uPakvxU1GoKZUDUPo3o3sZmqNfaXSS6AgyxZyrT4kLAQuD2CLoETxmEBiJPC4n",
  "key7": "4Q7d3tEbuQ7EsCGgZkJAWesP35oMpqjP7ZSydaCmiqXD6nVvKcTUQxugrByauLDFpmZW74NWrRv5vUG3LHTkM67S",
  "key8": "2R9eqjP5WQBxxPeannUVKdaqTWaw9hMZtkBDWNmFFEjHArin3F3R9kUsXNFZtY9UGWjKgWm3WXXKUJ41i9zh4EPa",
  "key9": "3QXfwHBqe9npk7BLyJ2iYznF5MEzvtk3rJk91LgSL13RsMKyuuruUQ8Vg8oBxArAvtcqbGvUa5D6DpLdDbaLaCUN",
  "key10": "4oHfGhLkH7Rmr4qsR3whdGqc4Z5R9RAFLo1FNRYjKMS92bXjfDnzqEguhjFNfwKJx6P6xQ1phcCbonAu4WzFYq8t",
  "key11": "tG4TuLzEsQPAscookwn4y638Xznna2iwn2zRJMkWcYT4rJrkkgN7Sn1afnTAHKCMspWWRAEBxL5tGzretkQinBn",
  "key12": "3EakG6LoAn8c9F8uN13uDiNjiK3SCnyo2vwNwCHMswXjrWeEK8mBGsUSArcqGK5u3irKrSxtp4uMBjFbkN8sHdnx",
  "key13": "3skuP95robsJ2eDPW5bpKHngJVJ6cySbZoamxjeCFSAj8rvkfwEhP6LLPFVV7dYb9QYMZRwYDRysKfaMcQ85ufPQ",
  "key14": "65fYfJQgzSs8WGJzyT1xDY23MVCvbpYiJVJYAvvJwrQAaL5ZuxyF8AY57W2n6YD9aFQ3AA6K25gKC4NLBgFdHpFN",
  "key15": "3hRHwgqMGhPXwaC4UNDccPviYDtfnbgQUcchpACDmaoqroGxg9ADJ9DY63h783iSMsrF8hvhdfmLGfiTz7U7NHNW",
  "key16": "2BQoQ7jkuaKmZoRaewmeeMPUPsCgGVUAoHD2PQ8JjUGVdqyLNJT9BHdxj5gLGJbXijkbKBx8hCoJvqXDXeEuL3VG",
  "key17": "VWaGbxi8m25Hs4P992wN22SXRiH8Gwj8HmN7usrdFcJv7iFBFSR8waturjjwT7m6Ux79Bieadm3EBmSNjLfk8Je",
  "key18": "2KetSJpFBt7YTV7S5K2VfmkeQupopGiBrMsWTQhx2LRjtujh9oxjFcBVRTjJ34CVq5ib72hNxJ4hiNuv6twA46pa",
  "key19": "Be1EqjDGCQc3h6k6SjW61nqZAoPrcAvz5TxK9FBBmP8pDtpKvUC24VJLaGyfzo7nvW86XZyMk5Dvp121x9L7NJp",
  "key20": "3y8wqoi9EapmaBVue7UKBgje6u9w9pu9fPjFNvpieF3LCMTiMieqW9c82Gd8PwWZvWqbSzFHCuFFbMZ8fxhCoRTK",
  "key21": "5mPxJLcPrcx3PXTyuUKsFgtijG1JhKMMAybKyUiADBBy2ETNei6DXNyuXkRmYQpvqG9pink9A2niHuAH4LdSXUyq",
  "key22": "4rh3sot6yqbw3bDzU26NmuwXgX69aowRye2Zg2wS1zgP6nBebz1YvTa3UVSRCuA8e6zeEGE24ZNNAE6kuxCyGZdt",
  "key23": "3FZwGP6HZPoVY2RDvZMaa64kaZkGiekJ2ZQ2oLeURnvVfZvo4KRh25fYB3e3HtWtgHB7sdgsHtKbjEmgnsbLsyf5",
  "key24": "2KFQvEGCJRxtVbGELmZbHhB72EqyK6ZZxkoPNfWmGojin323QDkc9MsXKr2Tt2KwGNpN1vtu78qbEJnEj9drcZLp",
  "key25": "65XBvXLicxPsWMu8BxeGMyKqemaWqq5oXouQvHmjMdN2Yem1MMtbnuxty3kLQioFzFk79u4NYTP42UD39MEt6qUi",
  "key26": "59hUewyomHS82vXwqEGFsgyPuhraoHaDg6hNsSxJT2ki37H25nhZe5uuorgd2MCkAk5gngWThqDBy5YQ6MirCsgD",
  "key27": "2rZAqbjB4ruJqZ6KPQaekoB31n4DDpJGV1wqXm6bJxQ1qV5RJeG82GmxWEbNKh4h2xJUkZ34AJTp79RCdkQcvcXk",
  "key28": "5wRkcUcfpMnumSxc3TdE1Nyw7zWZVEV3gWayEGeVK7fAVnoVYroJrQabWDuBNaVzbakgxot5ahBt37hh63izotyX",
  "key29": "3ePkQERfr1jz3dwXSecjzcbkfBz3HQJTpgqhJLizLsRc6j1nvGdn1GvwGoGX3C4Wp6h6dUbXQebqHhvQXgECBWWF",
  "key30": "2gzLK9CTwEw7nqTbTx7gwvWPpuiHJTNZsK5KNKFSYCZPr4s3erp1MaKtMqbsxWNx8dquJHXb7BuXgUubWJCRL4Uv",
  "key31": "5KPaphSSmeG3vaz4Jbwhu3TVsMLDuRiqAr2HMAqPGs4ha5rBGVrTfYKKrvC7e78jSLmemMPyu2jFCtBSYNzCRod9",
  "key32": "2VrxgFSeWQPBJ59ZZLSFBd4gtmr1kAmUmhpDrAEBQMCh2Mg1gw5xcnFrPgeUFWVxgybr58CAafQ4AmCtajTzSQoa",
  "key33": "44Zb9ZJYS388uniCJ59eGxjfYRUP1eMaBuHpEGey3pp8FH2MNCUmG1k4Q89rYA65vZmaSQCJGA1rAGn8ig4S7Guw",
  "key34": "3hY3SpqhU9it2BeJZRgDK9Pr88MfBUMEuAAdMdGKLj7FUKAkbp49UrVEjUTLPVqp2vAuh9P3m8EawXsp9s9nmxD5",
  "key35": "55qdbfY2ExPhcXEwDt1pwZMqV91C7hGYbYXHDWJueikFc1z27wqpqhG4EynNjcxqDSXqwdYwJMNFbapXEaMX8Cex",
  "key36": "2LZmbQL9NpnmGytRpv8ZWkYLgMkg6MKVXtcDPaAyhu7zhLSexTZyDWhE18xtMhxFVupNeubea45wLWHtjqsy2UFe",
  "key37": "5iAkViybfMSrLkXuT5ihyahHYzjyWfpUewiyrVg6wFFS5FcJoajmpA6HjfEACvigHyXHMe2hDNgrYuQ94e7mHJaL",
  "key38": "4CjpdjTRDRW4dUtMBg8zLR168dCTHuphboYvHf7qTyJoV9m713T8oALfRGAwfsBh81j3eiB2zqQmMMtz7MKcRnBf",
  "key39": "4pUVceWwchWdNP5a7FPNK7VCHi3WEdDw5wbPjXq8nHu6LaAyaNBvBdNwbkAgxtkeVuHYLZU1y1dSeXtHv3fpBFJC",
  "key40": "2Srvs1Lac4X79Cvs7GQoMzdPCbtFbMD2kN1bioa97eQuyAgaHrULYPyVf9K6XsctQrddqjQtfFHvLDUqVrNbnWuE",
  "key41": "2cSxoYp5SUXm345SMfP7LaQ6mjuMNT1tMcMSFCuFw5s9us84TwXSyhdBti8oRNRNA1jBwdb2kT3q7KvzgzoP4QZm",
  "key42": "2AcGQixriFwkjiNRGt2d24shjueKgGwppJdVuNy9BuY2rGdwoHAmCSSytXLR5fBQH5jr5PasGPem8SWWQ8z8zyoL",
  "key43": "raHUFtySUmAcXK2MHAjJDcR7FHMg3FdVfUeYxuQYtaBEi8tZ5Pkf2NgjRHCi83uUfK3wCmtnihjhTV1cRYx6vqA"
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
