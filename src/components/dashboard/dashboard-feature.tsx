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
    "g15ZKobGGWMxVbh3djzybvJPCGaChbv7Wf85iXPkHTnmMpfkBJjX7dAQt1Rfp2HXWjretNVbte3UPo8ny3qFAD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSQHFGGhGYxt7GnTWwAXiQSqmbSS17xNswTpAFsUG4yiBKJnBWYAopAf3af5GgrjyobgsHSou8D1XmXdMCcRspD",
  "key1": "24PNVfmDbGWGwAJruYDQUPD8LnVbknMDCZnneXzLHunFC1p4NPqB4gMYujSxWEwUoCiBfLqs4a5MLaeHzKK313Nh",
  "key2": "4jeAcEywLh3EBMb2yjRTdFsM4z9wqP4e8iDc9xtHv5EtaVCZmDcGdwoaADwivwywPMAtVjohAbxBSnmqdoTzpGvV",
  "key3": "5Yyg22Cc44u1e9uLGHFApiMpj25e3EtSr3CP19kNHpPSVNgXXf3bKD8s361ezbkpLoaQAW3Pk4g9Jd8prghrGGG1",
  "key4": "2jPVCYkVB2Fz4LyTEYvpZCDq1VjpnFt5RjCfV2NgP2FxFwB393Pgj2vh83b6cFpm44dnxBsq3d4eefsXszHStaqF",
  "key5": "CXMNNNJG1HBi6vyJMK6xewWonpd3HXsdonxjdvriM6znvoKETvX1ongVVLKc5oMb9FEmwp6o2TSTKCNFuhuPE5L",
  "key6": "45QJ8Z6hL7oEBCaCPiLkFueF7r1iaFtJZyjmD4mpbqYsGAGxRvfdfm5b1jWXimKQ7mWUXmFfU9CSDywcMgvu13rd",
  "key7": "3a8frdXvH5adwyMcdjFukdt2qEq9XoZWQch67g8nnT7K1sFbZmqbfwNUL8wNE9XKQzsJdJXSjzPMF4DmKcrALwTv",
  "key8": "zbCLex2VbzUZ3Mi3sYWFxfi291AEZBanb9S56TQ7VWGFgfwc7ancYbwQUzm7WDBALMdHmocGyqGr3Bm56TWiNyt",
  "key9": "55KPL7TiGDrcuUtG5Y2ZwoRQ5iJEeD3VSdjcYBwyy2ou3r1Q6JnqtZRLFAaPEqraHh2dfBxJ1f2L3hv2NszTcxTP",
  "key10": "n3HkKaXfKVctZJivNVXJfZP3vayT5gKXawu26k3tySUxgjFQSQR2rgxNPA6jsBvESQJCxVuyF7H6kS7SK5iPJ8M",
  "key11": "2HVVfrFU1hruR5ridcHyG4Mt1T2oZeHMHhCUAoyGuCFwd9bV8RafgJCoypsRmXW5sZ98neW4ogvf8nJKMM5wgija",
  "key12": "57P3Dy2HjUQhaQmN43nnJQHNMWt289CfvsPv7Ue1fNv1cyCQRcT4sUPyCY5TcQq7mSxFbRLGzc16tJpjuT47jLjv",
  "key13": "3dAs7QxSZ5Xx9pYchpMzNqUeCJnTLe7wQrWNgRtmSUPzinrhAUZqaU8sow97zGpkxxEay6p2JRFm6FpS3b5p7PNw",
  "key14": "bnQuEbDqjeCwEwUN6iXYAzxNZ8o65sveoUsJbuPeVyxzZ5T4JA1aeDom3GQHVT5ash8U2R5uFo4zmN6etjCR43Z",
  "key15": "3ubKAfj8paU5xPana55vpzcUpsUDmK1uPfY6mRrumu1mjdFfLKfbUaQp1nWdBQNYaYQvsvKVwx1c4sJNvBSFfRy6",
  "key16": "5TWD6jMHnwafvzNWMMke44yy4vgodyY145bSihk7njzRA3o7TCeSPHa8mYQnvQKDePexUdwx7V7GYzutRCywajqW",
  "key17": "6wUBCUgwjspwHZiY8FHxPLnxf1DmiNBdhEc1ymJvmxLGH5g1LPdsSmkEgfiAeHsEGmE6FYdc7Js6gxbSmiXokSJ",
  "key18": "4XMpPpxqsCHcqTB2Abb8Mf8VQteTummjFUbcR4EJzUuqE1JqLprSpSRuQFwyq3UCov5dgr6UPmCihGbLKyBKZix",
  "key19": "5rr7U6H7rUAbSiiN3ufxmZazxKA7EdZ1kXxxVJ6ctYeR5dYo1zUoanT5WDmepdjoTXxfa77am8MexxSAVfNVFjWP",
  "key20": "UkvcCquDwGp3K9BZkHU7vVvhP8cNahYB84NwwMjHALgvo7dqpZGgUZM5QMTKa6MJYZnHVH4u3PtdVpZ91D83gSu",
  "key21": "5StvftzVfSF3JYPzhGtKfZaNEYiNCUoB5rk9DsYJaPUtV29j6pLZmaHgHtm2v6vwmKCYLLrMxfCpcx2BXn6mcsT",
  "key22": "53aNtxeoHzRSE7L1Z5BqopxEeaEZJMoz9TABNVDiaSEmDWM8VeVrqTWYgcu84mA5p3RbM3exuLBPRPsxRLh6unC1",
  "key23": "2MBy98rJmjVqDiswz6siv23obzGswfBFNsFsKwBqAYG1tdTMFf5AUzT43pznVoXJHKgRtZBrrCqrbdb3LokiWDzk",
  "key24": "37FmyAnGXHngQ76zsQ3LY6nG8jdVMXdM4ZYvAxEQMnQg4qjU8T5fKyUASa7t46mAXUxLBrQnK8f6DyqFAPd2rJ13",
  "key25": "Bz39afs7tEbeonkutuPymz1ip7E6WoZdf82kupcgGtjSDamWs95tbr4j7vbAs7LjBTSdVsJRwpqtVfLaG84ZFaS",
  "key26": "2mqWSTaUV9td3S8zyZyM8rTf5pc7M4xD5UML7esDV87gR77zt6HvNJuz7UbaebosP3SkU3o12uraM9BmfiZ8Tt2C",
  "key27": "38HGhb4MwLtX7WKqJS3FUcNyAdpPBZZ1LUUBwAijubsiXnxTnaCh8DwTHgDgSDFJfZ9rkomQ4ebz7tcG2MqYbYcY",
  "key28": "2kAJANL8gwgETWDfLYUSkpydFG38QA3pAfivoBUyNWKby8bYWWJTX5K9UrTZ2egvdhR5T6V5M5gfeYjWn18psTH4",
  "key29": "4VpJoEH6ywu4gobkpUTXCAk5YQu3m1KiEoDgSynTrGrfmqxXWj1M4wo2UrWrm3ZvLAuZL7M2ecdSuf1EZj3kvW5c",
  "key30": "jZErqzUZV5gn1pG82zPiBZhaSkybwWL94r184tHZDUBTqodprVKCHFd3CT7Lt9oLKP7Wq7nn2nuUbCQRRoabyCg",
  "key31": "2RTsY9aRXemUu1eeGmD1sLaTD4EYWcf5vg1BQDCbUf7V4rv4BMPCQhCK2FSdo37fwhxtxHDbASMiyuRAwjQUBizH",
  "key32": "wv9KKzx5bAUTHbRkcmQbWLB9GZBUoAcPh2XsAxa9DZCmWvnTViocvN6xkCtpzbJXjh2CE3f8PGjYoSz6h2NtBWB",
  "key33": "44Uu6R8o1qgk5ASHUoEJa9YJk1JnYX2qhsHS3bgbehv62Vv7CKoKRbtLrLwPUjNLew9JfXTvQK6uJ9iX3rP3Fyyh",
  "key34": "53GhiDKpm3QeXomerj5sUD8nZiG3v8yw1fhniuEbNmgqrTmNFCitMuSd55f4gRYvtSo6Fsns22jzaDXeavkH4KVT",
  "key35": "65Eno9fRBnE5RCaiSyC1DiMAdvExfqjGNwAMiJuEMfFwY4eFVCpwowfC3nhv3WpDT2f4GJngqGXy287P2aaznEjf",
  "key36": "3NqYUogKfZthBZ289Lgium3rho61HHW2H5tFj1N6VFTg7yoHyR73sSzSrBJ4s8pAkjWiHSsZVXue9S4BjKJf9aWv",
  "key37": "21Jb4hBvVBjtk9kFPEahH6urGX91umToG7tnJ2t6p4sm6NBRiNetBcYjHk8JnNkHwJLfttRbuiJQ9zovKVDhoFYz",
  "key38": "3Z6RHuQ5X7eoCibfWNxjc7n56u7N9tWAWivyscWRRVujwFYD6r44R1BFzDUjNy8NnmDgMafkcd3MDhosxymgStre",
  "key39": "3qfdUdPm4YBZrUKzqYnqt7FLrogjx628YnwiTXeGVBTNdARGJYEL9NLwMnzwptNmV431Ao6jjUtA9aZExvWhJuz4",
  "key40": "5NzSc92q7drEZRHRP8JsJzgQ14m2j7XCvzpsWGUpB5fE6FBxreXNeggUudqh9i2fVdxcDU2mTFzgePWqPk4JsKBG",
  "key41": "8VkwoZyDe9wUXmC4f66yTqS8WHnyZ8s1BVYdnetsvbfXb3SnJvg7xvLwLSJJ4ZSVpxYtSWf2nMRQ6iHZ8TWV41a",
  "key42": "26JkUe4VkYCBYYeixQ8SKUMx8EkG2qq8UdDwLe1uNgaxfz2iphFF6ptZUFXra9UNLdwpmt1vGEMB5nFu6rJZ3VQg",
  "key43": "27wp3QLuXdyRAnaU2xMeusv9F2pCRV8HNiUX3Luajb9iEF5o4FsMGS9F6bDNuY55VrCkJXCpBYAKHF3jp8F5yiew"
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
