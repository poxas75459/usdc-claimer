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
    "3NfExT9CTjHMReMmpQ5q1pc3KuUgbG1wKP9MtRjQr36qBq6kVJn6uiTMDUE5WHvjR2uCcKcghaLQooY6rDqJB2Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5Ve8a1HDgAqPt1U5s2hHCJjWgnGTAYqx7tsw8JAqdh6EaAfypmCmJMx7Xr5FxfNv9CFHdfwgUPHcsUZrfBjPnU",
  "key1": "xVnAkvnSggEzD6YJfkGTza355DFKnDjaF7qd1dsr5uBgWxqTMaWo7QX3JvYzfQAs74d3GPw9LrRgV9AhHvLbNoH",
  "key2": "2uYcjm1SU97vFgF2go8ruGZUHMpV2VYrVd4XvJmScBC8iFqtaVGQxW2uNrGw3h5jKc6um79Ehp9XbhdD1m3YRQR",
  "key3": "wXET3hAuFDWRVXMsPkAGK6XBPHcaZU8tjVqxYDYuFzM3ojKd32kVm7nvPNRq7ouzZy2Ecbwsr1SEL3KmXWC5rzc",
  "key4": "4XibW6Mz6mNgsN97BSQKPs3H2TiUWd8KEq6Qeq8CUWi4DtiPMo15vDYUCsMZ5prAJjfu7y4x2Lcxy2HdDzgxV1Kk",
  "key5": "5iat9v8kgXspACAraWBMDADv9QJSRkMYbQQUDxtNTmYJzy2rvav2aFoDPvPNGUAUWL9tL1N1p6koL9rs8wJuXx2z",
  "key6": "2cdyg5cPNdAAyWugpvqZM3zMEERCpw5x4tig8pxhkjp5uRrnMuw8szHeV3kq4BuBWqpciSQHR1h8ZHHjWqfPEkoU",
  "key7": "3NpjNNpD912yfkCecY1r16WDeiMSMrDc51KPPfBDQzuuPaPGDXce7dszidmWWrmTPZqFe4mDMV5Zisv3dvxnfr7W",
  "key8": "5adHHT1iJohnhGuvnXjbqyDAi88Xr3o3byqvkDCwaqdwpWM1WQp8C4FzEqUJ7yAmJakSmPxTJcAVfT7Qi1Hkm8js",
  "key9": "HnBv58xMExMY87vnx6iJx9oiqSPyr9HTiWb8P3LGQ2HQnLsEjG7Sn6n5tsRqW4aFD25wGYhPLyQRQhw5kueh5an",
  "key10": "2J2z6FL8BgYEVFj5hjEkxq7uDUGMZxsf7EA2ALPwkXGCJPLet3D3PZeroa7qKYhtDuANmv8RxtKTbfAGaQhYRZi9",
  "key11": "3MYvQYnNYXNkZWWxs7QNHRB1fuAxRe12w775b7EFjiupeLeH148b1EczUSHQjbKozkL26FjcwTfdMd49TEuM3Vnn",
  "key12": "4Y4GSv3L1X3CQQdDGmYcdBjmSNEAb3Js2AKbYcfyZ5qCEL9JEc5rtJUiD6ptWgf7s1JinNwNLC6j9gPg3z7ixeXp",
  "key13": "2iK9R7nyL2uHLgMWcPoCm2mG3jW9rqeLiCPSxJYJNV35Bo6JnZsVGkUL3ezzXuys7mG1Hw1JXEQDxmmTWPECk6TQ",
  "key14": "33BPeE8xGq5gDWGHiuHwgegBpHrfy7Wn17q1WSq5aNrNquDi5oEb4uGMuB71uB1wQkhixLSBhBb6ANGfck3u3vGr",
  "key15": "iHQLSyWkdnxY8EKgYdNSfNP3z9hAtMBcNGkd59H5ssR535b4zSTLAz6S4rfY9vjVT1Ds7n8nQL9EaHtkh9egKfF",
  "key16": "4KxZz8yEX1BsdEjSjTfAZuiBNGhhwK9AT2sFrGV7gYQgqcD25yC8ykLRX3462YpkfhKPgCV5bayCrAigAeqoRY84",
  "key17": "5JfhGhGdxdRBUPCTjJtQtHtaySLA7kFFCAHPZiHouC8ahenex9hiVfdn3qpA1LRz111iUkKeMmSwZVHRXGx2r1Z7",
  "key18": "61WgzpAVCjCUTGVWRgiDoxMwLZfULMpfb9BpPTW36YfFBnZQ2wfaApFRDVUDoUsLXZ2sodJP1ZF6BP1DtDneWgym",
  "key19": "4rTR8ddAFcUGddxguByZJw7eJsfJBMGzqEfD5pcPkqzRnkDiGriQ4oxNjsqfvvRm9zUTwS4gfQd2zLWuH449GtvL",
  "key20": "4FNw9GtLnQRHj4gtuDp9nLQSp9u5GF66UDUakFbiahmtXbzAbBixqtH4ERGYzFJkm5mSyeAHhASNU8t8aj1Ne2ao",
  "key21": "LgTjYbinEuK6t4rdfX5e1c9zMadiN7fTN7wnhYSRuva27SiYiQuG7Tw35ZBRXQsJmQNwj4jxTAM95gLj3SR5wWu",
  "key22": "UpibJWYi7SPeBXtYUZG6SAkp8offGLscizQj1qgy8VGstBpM4TEb28NawUgbebb27wE5KoRR5CdeZfpbtUWjPwr",
  "key23": "qsGUj3jXHWhutAizpR1ashVcMxaJ9xVCcnTPqYG3yhQCEfgk2BbaEgnE3fes9vJfgzVN5b5BvLFPEPEyXiEreTE",
  "key24": "399bp6PgmpcLWVdj1YfzBXW2pqng8fzTqKFozjVdMrTAveyEZvxAD8rZXGucFQjKSSzhRnEs3qPWzzsmjAkYduZB",
  "key25": "VL9UPzm62adic8PaUPBSLtvuAFAu1CZuYbKLQBZowtRmEod1W469wj2BnpoXjPwx7n5KUnbkoGQUuc3t7Vob3t2",
  "key26": "2eFx4WRqkD7Df2ZnpPXqwAujjQMb1joQ432S6WcQ7AVweWjfS4xQzaNW4LkzL3WHEmKDi5bTFagAaQT4bTLSeBhL",
  "key27": "w5K2wJjtJRu3LbmfMwZUveLjtLSPhs7PMVUssnvp4hvEtZbAg3ZtjVoDWFKqPV4nRZd2Sd3vXz7ui39fWcxc18s",
  "key28": "4GTDApNinXeUZegoSN31wktCBvhWi9gbufuthdyTJJmAPB1mAH4Zpf6TZWBdFQyvgToJQquxLghLdxyjA5hTiC1h",
  "key29": "3tHdr1YPVbkMSwBn6taQdqr64PR2zXtu6ta67FYvXW9V8McCyv9B9YbYgTKWdaqxh3qySGraeu7m5zJjk19N4hJ7",
  "key30": "bTmrrMY3vYG6NKaPNNKEopQ8qDnzp4qFDZfkKBXus3xfKE853tVd3LJnCDhDVWLtAse7cjWs62K1oBq74bFLK8C",
  "key31": "5bs6NLdCHHnmxGL5jjBGJo83t6Q4iUjXd9F1gZX9r8JA9vZQfLKQjuAPGatxnWipbACuga4KVqgKj8F9BwL1hWmv",
  "key32": "2DvNyR9SVscrTNk4Mfiw2wM4tt7ngLbLd6ndybabCxLxzXCiaS57SuSTdyeVfC1AYdTA7q13WnHnxHsonYEKV1U",
  "key33": "64orxGh2EmfA6vaBbSN5Hf7Z9rav9uFzz5kmENHE4XYKAVUZ8xvXKu2Q4t538iWz2HqoDci5ZrZHWYpCw7VQhH6D",
  "key34": "5RWrgX26PpogJHfFwRxhZHKtFGNSiaa7DzmbpqzkD4mBfz49KA5kkfRnkkWJjToNzijXqFo6jNKVnaCx6fb4b6Gd",
  "key35": "4CFpUupxYBVDAEgMzLkNkVa11QEnrDBTJypLNKmitseaUMVGhnKfgiVeCehGat5VK1bXPXs3dHUDE6xADacbG4UE",
  "key36": "5fhQnpiBgGb2BoPsiv22zF3N7bv9pGFDQrKsw8csSocXu68sDRFLxsabUDPqPsy1mrDEGr7rogdWswDU1HRxMTJr",
  "key37": "3MWooks8uH1dSU7kAK32jHsnY7Qy563Z39g2ta4HsGhkVgD6iHdgPwoWCBgAeuLWH6mk44ZVK8tQCTifftpvyM1E",
  "key38": "2tDBK6iG4jmGVJZFSeaKZYsPmfsEdgf55QJruZVMNjbMkkxejJ59PAUXSf68DubQjvozxNFtChXbQ3vWh4yx2vps",
  "key39": "54Ctbk1U2NimKnqtb8nP31vvy8cWtyeHhcu2aZLdxXegahpWpEhpyFKkss71jG7rmEqdttGpR7ewH2nAyHmNxDmj",
  "key40": "3ZYRmXS2y3ZQEyfGBy8pLLZVEJyAEXFVku9DpZH5kxrAz72REikJ2HW1SAnQh7htMt5RT3XBLSarEFNHWQsxTq3b",
  "key41": "4m9h7jQXwmaaC4LCfLaC4fmYpUZLoDCNSd9F7u87KMy9S44ZQauaBo2cs8ZfjEqhYDQyLGcSYV3sJ3bpyskyQcdb",
  "key42": "4Bc6zmZMVGPffNxwL3c9ABTuxQXLJt8Nxhn8aS1nSx8c3a5ZDJ46mm9SQVEm98Sp8Uat53LDyd1MKEmvNqYHnPen",
  "key43": "28W12kcyS87cm4wXTRKcB9S2J5M5RWsbehxQSpNG62N4yxtHxAmcVZppDkm85v5213kie8XwapDR4vT3KUo2irgM",
  "key44": "5tNPHa6FhDypjpjg1xoy7cdAmxALXkt52hMynoCr1HenKuRBTodM9y2G8CszNTqKbqcGE19Qgp3q2ACqkXyNKxeV",
  "key45": "2ZsYWHFKAWAr9TPaFZ1u8sEYNAG6UiuEoVdHnywzRTR932eXRHDpg5rUxp5FesZgdvmpmyoyfedXqMwtszhAYCp6",
  "key46": "3BoCWXv3RGx94aPmqAKzpWG85qNGf895yjjPAebdka9XMbNimvajSaZJEU1oUkCuRMsYULwzd41eDkfxRSmKakW2"
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
