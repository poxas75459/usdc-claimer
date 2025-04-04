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
    "3yPo17Gi2GiMLrsARhYpWXareFYpEejVcThwjpScYZ32SYrpvuxdDFyGgaKvEHYbFMeuFvqjPcmztD8py5wfjPHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3zZo3tHGtcRTQHyx6t76EcUYvXnjtmp5s1iYiucWkXWsWxKiUwUN6Gz6WNpkrV6qg5azND3avQHDeedfZawR9o",
  "key1": "35pUcavZM3t8Cu2dsesPNdGv45uUujTfBrDUTPKSSARaBJYxA8VpDE5ek3Et8U9BDjXoAtVmX8hfZd21thsDZGuq",
  "key2": "3B4RvsEzRr1aVmjdctb24v4xnqyrinrrHFk3kNj2m1QfMJYs16P6atJY6YEkm8DqyxaYhKVxXQ5LyActfySyeUZW",
  "key3": "GFmZqa33xBpkbhUAq9XVJGAB9322KWmx88uPDRCEYaffB79tBQMmuJ99m9gY5T5Fq8JrPfXXwuRsREpX9zVhtaC",
  "key4": "2W9XEgr99j5AXvbMhhWdLXofVFx3cC9rC6AeqNR3ACpX7e8AfbzFB12Co85ne5nvEPrYDPxp9C4sUefdUcZiH2sZ",
  "key5": "35iQnh6Le3uFE2DTDseKuWBBv6AKfVdtgyXBqEkkUTGkaYFnR5Mqsh9Myb2UukKpTStgHJEzaQdfBiLSo6uQXjZT",
  "key6": "53eFh3hCXum3eQK9j5xKKdLShu4wWvjQa58RQ2G6x3cESPMHGq1CUEKjAG2tWjFkJ62ddPGoxounHJdZEinuT86W",
  "key7": "kZjn9TzsoCzJkNDnkAd4zYmP13ENmrVtx8P1GpN6JfUqcaprZsq6Cau8juNS9y7ZqgEd72VA3qQWCpLvb6gGHmv",
  "key8": "5dCXwuXb9NcyJGwz26gBxnPPYLmGjybQtmwsFxRDcEcQdVsv8qF7mxWyDQXTotegcqcDFvmY4TyBatjAW9S5WnXD",
  "key9": "gGf3mjY9g92PhdnmLyrWwR8XHVHCjxaJJ2FcTkW4wMLRKBs5B78wPsmcdh1YGFhwGAjxnugi5Wjpw85YFxNbzb1",
  "key10": "3cjh3pNgfjT2NTFmra6t1CHziWFfNmx45avRT6eR9cnJQv6zgGBT4ZAGr7e95jBhgHxo2x7PPTbcKmyWwPA3SPPa",
  "key11": "5VHzKubgfNxwAPZhduTrMtKmudzbFED7vGpYxJqN9SygrQAcp6mS19C2NhNiYb5YEob6Wasc3SQsjyHrXGhgFsZq",
  "key12": "48pntP6VD1qK1hPzqtyL88GbR7kyRWpVGTw8VEHpNtBESHDzN5jHyky5up5rLWGEjJbJtVQXk95Nx5hUZpmXnw3f",
  "key13": "ZNZdXRd7vmwN847FPKnTbiNHCaK4vfxQeDN4YwsPWoxshA8TiRr6NrvcvKWNLqwD9Rfctg2ZxFURqJjhLJRytPT",
  "key14": "5nmPB5KHeaAK5hu2VVZ5zFKgi7rdAwZiQoNkJQiq87p7HPiNMqtDbssmSs4Nz19gGCjFkaBKF9JHanDH6y5YFUo3",
  "key15": "3hbpSLDwo1GAUauhrmMxTBQmKUy9tENFTPvtj67ZGfHii12vLdhK8voJS3JWCrbycDqJKrzJuPocBhnAUQydcv2",
  "key16": "5taCvd2QkRfSr618hbCSkKPNQDTFsFwQzj7zNXhDwTgK9nZynz6qQTjD3Bq5Ts2hYU6JTGwmvTyNrof8x6ajB2Sa",
  "key17": "4cK37Jxua8dKTRA5PErreXgA2tdjHZApvnEqmgw7YjBp55Pg2V5eNBBXntjGhbFxkLM9YKzifKbg2pcRh2zY389q",
  "key18": "4gLpNL5Hk2qZ3JaeiPuoRUFnBdiV4UGLFN7DvvZrZjmr5pGB4PRVCLY2SHGdeNkaKyed9znaB4JmHvPDip13gExe",
  "key19": "PHpRZ67PrDXCasBQBW8GjeeNExSh3uKXK9qoRje2iSXs4UV4NKcDPsN4fkgxZRPb1JvhGEdHzMytVzsFQ8reDtd",
  "key20": "4JypU3UcyPowGGJ3Xpj1SBCxbT9hGDNguAveAWZh2iys6NaKEfCMEuUukd2m2Qb1XC6xZHbQ8tYoTfE6NVdvP6xz",
  "key21": "4Nx2fZUns3vGSYMfR3z1fY5rhpvBPoejx1tzjYpitFdKypBtWRNeNSCskXziGRKBdxMct9npjBHRwJrTaZgHcsXF",
  "key22": "3sR3FNXhvGyTpoZqubQj3JHvkJ8sV9VHoi7gzbyVEdeGhDv5357thVec5WXk1JaPaLgmtywgVavCFg6f5DUkGfSJ",
  "key23": "qRDDTJTQg4xH8QKpi4v44F8Y45CRE8SAjQ63fVhP9RJNjFybqvrseNf3gHaUGufB6p34YYewXsFNsBZ6SnFsBjU",
  "key24": "64UFsroJWugCwAGyd8V5qxLUkRhWGUo9AVrYhazuXSW5xPaDYCQakzMfwxhftLacbDZDw69j9SWxjfj4yMULmhFH",
  "key25": "2GrboQPZb1DZ4ytHgq8P8pAa2GXiNuj4MehzzXiDgeGa1jdEtpGedZYe6aBevBeXp8Nce4fGiW2VZX6AKYrRRRgp",
  "key26": "2nTG8EwXrGrvAJtWx6w4zYFcuQzcQVepeomB2skj1g9vUVeYWi6BjzVNx4J7Bxe3btvNjVadZh4CVE71obYP8TpH",
  "key27": "2mQwJLUPPaCZhWEL9dFBSk2LUbvVatRALbCKBPYuVqDetSPmRo85ccTW2CZJvcsNCmCMtaYV8pw3oEj2cnbZUNHs",
  "key28": "XLuv26DUqBiG9PqQp9bq9Wwr6hwLApn51MTw8v4i1txGFEcuD8238KmLkHnNcq3RPFpVBz2iMuTXS4QZiwHNB6B",
  "key29": "jwRjae2n51AUBkdBe7uqxAVTnzWtXNnfBwkP9wRPV8UQFknnSCmdvaJRQDpnGffjMA7XSxTPd6Ytq4XfNGAPbYP",
  "key30": "3JirEfEVdCCShdKbaRkWTKq3f4RFL3ubc7Ca7bxZXxbmhssTsCsBy8TRmh6U9tgPcjkcfuQqZCoMUnabD34F1fhZ",
  "key31": "YufEwpad5JECs8Zt4jGj1pcKxkvNn2BP6AaR2Fw7BYheFCoDphALRcp19KDbB9fSQoRkHznJLD9mr2dTi1Dx5JT",
  "key32": "4ynmCLbupKjdngDLCNFauS7ciKkczRFjSZ7Kg96xVpzb7PWb2cxL8BS2aKwtHYFnvzS7chDPHPW3njeMiP8qatg6"
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
