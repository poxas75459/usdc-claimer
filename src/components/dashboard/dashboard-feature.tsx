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
    "2ev1prcMDsXfqPmLPyVKAgApT5TPsCCmE6wfvv4znpcFBdNgjq9vsoMcmL8GaX32Ppox5JeBivrLKKkpqhUC6Hgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27K6BTRtmMaZQTsoZxUVxBbSNCMLMZax6MLs9WRs5oN82HA1mBjErPFReC94gEkBKB9GNzycFuFHsdGQUDz5Ae5n",
  "key1": "2abcfwSzDYjT5RzDdww6oMETsCHNSk6WNVgqNXtVajieV8aVxWjhs13D4UswWoGRdW5r7CuWWvhGbiC54ei9fFA8",
  "key2": "467L1BRxHqYUFEamB9pUyK9BzKtm48S5hwFcFRuEpquGxVFgvBhkZmbMVm7cn42ZQaRfG44yCTSrHBHPuBErAFjc",
  "key3": "8VcYWxmDnPx15ziwBGmtRyKFDGjMCXvoBWo5TBgEdk3U24G7YXiukSYpBhL6FC8JxD4DLSGpwqSQRujLdbUu36z",
  "key4": "61Xg3bpsXDuN8wg5148zCrwPQSVpH3cGyvXEmx7fXyxneXqCMhCwoGAxKYJXW7At2cAn5hHcjx91cdjeKsmTytnV",
  "key5": "5oBYdiiny3zHsqqsTxjqGym2nRGi2mjpqU1cM1fH1rX6BqA19YodvRk3KwM5AjEjHUxRB6pYfMb1xQt4rzPNWusi",
  "key6": "yVWbhH8Ldo8kVkfMr65GAghfxNi7MsUFEvQZMwhJbZhPsnKzLEPLYasTH5VVrZNqpWELaeEFiZCHfwcaZHgbwGc",
  "key7": "5iV9mzEPmuCnu44kyFEnsw8XEkd42z3QozeB13P9wnJFZ1MU8XGXRi7cy4DCPJqRnLpZSCKADjvUFkP4kf2CVJNC",
  "key8": "5REzuzoBaLuXJEP6T8BcbJEv8nCt1qb47pEgnBNKyab2RCQ6xhxSgbAW6CaFpcnXvB8tiS5gBm6kZdXU28FaLj2H",
  "key9": "4foEJrvXsTiY378BjkSKXDWhwgNhCxW2DpaNEgNtsWr5vQxq1jGseXaHSUbcmTDwXkXWLw37JsUxmRDL21iUNiVo",
  "key10": "3QKv1UXX2eogEvrKrccRVJrGjijCN2LjotDZSaiKMPWnanx9J4bX5XenHihnyZnHVW5yMmPtBSfydfM9GbHkSzpw",
  "key11": "5VVFLZQHMVbBgXn1zwEYprKvAAs3uNbFVRQdzfp5ViRApkdADnEA3vhow4VDhSCnsrWqi8PHRbFxTTnArB8yFH7p",
  "key12": "5UXrcW3StFxWi35ig7s9FztTRnfAipa7KT8WPPtUTGWKoYTFoCUmk65TgUA9wTrspZGx82NLkiZHLN5RYfuUa5Hu",
  "key13": "4guc6hHUSq2mxamCXEawkogHZvcJfYZ17aYZx7kUa6MKHu5aeY3G89kBdUQPKbKctwSpwTZhHU3cjyXDQM38tK5Y",
  "key14": "5K2YgkeJs3zZUC7iAc3S4NX3JWYXuNmafB4tkfCisdtq2kD8JDgez6XoLYj7PdSZLAx9K1Vj3NFVwy6MSRALy6X7",
  "key15": "5fmJaoNySEutYMy6XJUg2AtNEeLZhC4TYJ2B2f3KgwHZgvLhtw7rorQupSpkKwUDExiyN331MfQm4R2sjXneQJTv",
  "key16": "3iFmcLDhHH7uQaSQntzXANgemxCDKWZj2ehZ38q2eFeCw17D9r57tEJao4PGjQgN2BpY3aDbuvzBJYraxxb7Qo9n",
  "key17": "5TisSvaXR3F4dh8M1bL4MyKRvCsLXtY82yNzELVfga1AzKu88ta9Hy6aKaq6FxzT7ULFNsGzEyNYWiv11Jdrj1M1",
  "key18": "4F4dwLmkmwU14XnDJ6m96XgM63j7dsgaa7wrkvdxFH7ovEt9oEbotnAjAkhxJbuY1WhW1dyYurBm8AamATqYoKA1",
  "key19": "4Na2kKx6bgMbZisncVskQyUvgy51dg2sBKJathzXxNJNhjQho2aNDyC9J4h89Rt3ABSE6t3yWVGDSTixga7M6ic9",
  "key20": "49PV9ggXjkjSC5R8WNWhyJ6688vZKokuJUvWQ9inaYYzpUQbaHHGqwK8yN7aYHjt1WT3eoyC5et4uZCS4jqM8vcx",
  "key21": "2DsNcDbyaYEXMm19sZNYwAigRHSa6Nk4fP3EZcUxNZEDNVYD2cKAPe6ro33s2iyna2uurJ14Gh5biDSGZ4ue8Csm",
  "key22": "3SDwuV4vsFoG8MjuH3vnA8SBY7UWHpf6pqmZvM246fzboLHbkLgYhp6eqYFcXGWC619wjv8rMRPwp9mArmEzeouR",
  "key23": "5x97haR1tC9DB4b37o5Kakra1GJ8QG1x4C9UyHXDs3iqo5X67trrk7Xka6EspvGqAg41FckMQGHTpn8qZkFKAyxR",
  "key24": "2vZQN3ssyLcwG1PphpsVoNJDveJxZAcn7LhbVU5TmcyTKkiHxWzWpS22a3uzt7VfBFPrje1EVqMnc6YGJWNPBQAP",
  "key25": "2z478rYQ5VH3nsdawnsiH14EbHXVr2mnvbpBAyrTEPVXMrb6ANqvSFf3ZgZvRgHsx8iaaFbZK79NcbxftiZQxAPi",
  "key26": "4EgYe3KVNpCRfehRTkA5ynaeJV5jztzKnANZvkW4L2FAZDJkBmReVFtQLSK7bytJYEqDBjxcHeTr8H74fEc3jEb5",
  "key27": "5K6rAWXkysTMrtgSSYZEFSSGdim4vmNj6uBhvgBh6HrNaCY3MCoUAPRDgLv3qLe185pmBStH6HamSnCKqLqiHraG",
  "key28": "5KhqYWJMs4eKuYS5y4Nrr5VZSV7QKoL8tbzaHaaKmP89EgfYUYmiYdYm24LamGKDdLHLQMbHhWLAyEFWRAnSJsWH",
  "key29": "3zNCBEjb6g2o5Tm7QjWRGgqGBu5aADWE29QE2suoep71ew54NJKiNHYrdPWRrd7dxTg4cbNDkDXkb4ozxQ9tJ9JB",
  "key30": "3Ptbfshs9nEeZLHm486Nv6yRGKbvmG2w8qcpp5d3CVGcu2PC5pf4R4KpVxXYRuFAuADjYWeBDYt4CRLKv344bvBy",
  "key31": "3ezeDKp5KTUmiF4HDS5CZH8f1euhiDtceSGeBE5MfoRrhBuz6UgUjnzYDXRcvm2cLt8CybDYgNxTN24JHBSbqBaK",
  "key32": "vAY7Rhnh6yPrBDGpJDhHWHojNExrea1mSMRxY2FJqgaUNrtKxwrA8PZ9PStnnWWpBYHsXbs885LkaY7RvspA5RP",
  "key33": "42WoTBZR36gTNzFE2J1Wjt81ZaE3HZfrVrs85SVpDUF1LPGGTq9fSNgjudPivYwP7iohPn5NtrRg3JbKgxDCq2iP",
  "key34": "26RwDy2VQegwDxeKyGFkFoJrbKeVbKh39LYb5ZSiaWFXY5nkeBbjaumiv5RbKJuLAWVk9T9Jn8e2yte8ZD6AH6qN",
  "key35": "4vM3M5nZekAVTqrYuMsiZYmwp1Za8RQ2WgpfeEjYhazwJzq5eTDHT85GweD4wyjG9Jo7wVbqv5TsnSNPqrRJm9cR"
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
