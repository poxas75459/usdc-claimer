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
    "48zst9vMtkgNPskUeSud8SMjRgQjYEc6MhQA1FkjdecCXfLiip1mQbBdgeWaUfu11qYbGBgoXt1Dm89cvT9j8osX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ccp5Qr6GVdTRkRFa9fEMTYGkRgeWnzrTZBJvnmqUpNu9TSutsoTYzjU6tiakquGM3FBdYp5CeATsuzEeqhfV4WU",
  "key1": "4GNnW3kfcpJ1BxrPeccCuhRWZ4tdtqeqW6nem4fvdPUHRpvxLsofTF6v2qmHYysm6Fv1ox3E5CEH6P4ty53VXqTH",
  "key2": "2ZrXknsGfH4D3xcDt2Q72R4i1dynZVuMxnVzp628GpTgN7KbZDDBMSFWWs8P5BsmgZH2oJWgsq57p48RQsA5a8A8",
  "key3": "67bDmNwxm17v6asjJewp7ocREiRzjqYbqmhV2wdzCYnZ1Ux5ZfueeFHYXmrEAXuCf4MzkEYCZB442pgh5AT3uMww",
  "key4": "1oi4wqS46Jb7cxJgBjK63VS12TxiKJ2grzr9CjtKLNRFeDbu4TdhsRkCXTPd5U6NMGWA4wD2pWA6R868hhVbouH",
  "key5": "26rqzaB1Lr7mZxGpEQQTTnjgm3iijrFaGmZEUxoFCUbqSHw8dbKZ8KRBUQTqU11SskyyyZsQkJcBMWizt1K61gGG",
  "key6": "8xzmdZDYgTK69ze8snzvEiG44kh6Xswi7fnXybN84a7mWiEi3vgYfQnBr2Nehs2hb7GK21SVLoZp6QsnQt62G5S",
  "key7": "61B5u5krW4VxNiaCK8G9PTBh3df8eJ1dXDovqiJn1TpGTFksHJH4NF64tur5QmiMWcdoQPMZCjjJEQFJzCy7pNr9",
  "key8": "3AVni8jUhZAYeiEQLfJuFXE6gNAuSTgZtGh5hTM6kBbTf4SQuJXXVtq8WS5Yvb1fFrW1qhCPCP83JQAfEGNkcMee",
  "key9": "4iEX1tBCaKz1GhGGyAVSvPQcbSZ4RPQLebEs3U2t22GaYG8nkooY6niUDbunADChbQxaGNME5KPicpfafJjP6iFA",
  "key10": "2hGqR8prVhGwW5eTk5X71WwqBoJVrtVjsaQk9ZcU1SMy6ga5NKipR65gGwXAXftzZRa3ErBjCmXSaXFP1pGRA5dh",
  "key11": "2tyAShJ9ppQS4JeeVac4DDoqb7WRQ3ofVbNh38MP84uacTtpGKbu9CFqR7336fsxdn6WsmWAvRNGVkb464GPnTha",
  "key12": "48uyRm7z8jhjgCQMC1fi7t2UH5E9ToH7iMwnS9MADrTNDgGcq4akVvqSsAZr3ZssMPU74Ny38kN3YJ4Y9R7PAKoG",
  "key13": "cr66G7gUy6hq1LobgW2XwHS2jUDnT8BwtAU7QcPEEGaH7eZ4tDUL6XFqD6GfUmTyWiUfGt4eQrqLj6RTKrGyWHj",
  "key14": "5yuBVBmnZjYuWNaCnwhY583L8nN3TuP7dSC3TdvRRpRmKFMQ246teZaHzMtt3JQDcdEWAjgrMuaAfKcmm586vHP",
  "key15": "ZpfYPPYhYNNCdzvHFq1GsYPNpVfaYmdaDfsgYsJMHMdnS8fHqWeuVNVFT2mgeeaZBLW931TGFxnrfTEud8oBsCU",
  "key16": "643yL7MA3yhdRKaVj1tmdFyYkmMR7kjfggEEN57cTWZi2hKLydYywz3pSM9CG789sAWbbzB899b5Je87dN4ZYxrE",
  "key17": "4Ae2TPcTeR5AiGVKLL18MgjXDtoTmTsntVFAPk538PMSRcENLme4uUUCGzp8D4Bc553iKuAcCmxEEvivtEGhuXtV",
  "key18": "5vpX5ry9JvEWSQ4ucfe1L2dXcv5PzUzsK5oe5rjmuUsrUHAYB6SzZWK7apcfMz7vqtPH7v88FgAz3MtUenBvrhUJ",
  "key19": "4JxfN2AtBiuzmmVLXy4wCXVhRYhQ8i3LadiLAuxuq18WyYFfdxDYLexaKD36cib5fp9Zu1jvdCxXbvjZAVUrTkLN",
  "key20": "4xYHWMH3QXfBXmeJTS54hNjRsvFzzjjhcP7iYrYQdHZTqLsd7zRPh878oRhNE8dA8e5prKwPXWXf1pVeFMxEoucR",
  "key21": "2PiHxShkbCnWzQgAddJvAmkct6tYAM6u1GyFF5i8h5zsgJNWrwSVekt4gHznNndPT7r4qNJPNT7bfHLPsAEGD968",
  "key22": "5qiraKEgf3rFSTWxwZRFDNJyRjCAC5fYN4h46w1pvN9ughhTtYsR83e7LdDWeo8gzpiBXNVTWvsoCbH9Ha1i3CW7",
  "key23": "58HXiPejdE6afnC4ja3LdTozKDnHfPic4tGGViQDtFxJd1igm2ws5CJ5eFgzvC8Gc8zbp2Lcbs712aHyyXGDGwiN",
  "key24": "2G335aQ7czetecAetuhmuE2bTL4J4RRxoDNzszDdU9NTYwc57VjzEoeZ6Lx97rSRTNFxooLKTKWXXCw3RohghpQW",
  "key25": "27VUy7fhaQm3g2aUfV8VhMPhCgK3W33GYH9V5EW2TxC1CcBVJ9C8fabtrb5YBKiV6u7bsL9jdi4X2AKHaCsEGGD1",
  "key26": "24FRM4MJo7RdMkTCxNyUAf7YyrdLYb3o5HpoCa2vQYxDEgZkVKX4EMTAmvtEqJXtWqxtkL5d6RiUPWfSXEow5Mkg",
  "key27": "5M2zQxpB4CFao5MQtkowEtaPS5g9uGX4JH4wZsbeCtSqqLfpBmExDejJnpvCt5M9dfxd9XgAFSFeABFSDqhkfEtA",
  "key28": "2DsmkopcV6mtHppNTj3g2z2wG16mTiUMEz72V5NWigBc9fQBf4pjQZFLKaAqzF66tzL2Z8Bua49Xw7WT4PGrZycF",
  "key29": "xbw5UHaZqXBgzbN2HMwmkGfk1erQeb12i6iB4BroLYdjCTfTXTEucjJAxpabBLR7MaESw8ZzZEMMbj66FDECehh",
  "key30": "5cS4UmddxfXPWV6Ktem2H5b7newRJ3ftge4fHiW4crw4EHYkpiSP1B8uDMR4uH87X8Sxdr7Y3oATNNLhcGrJ7tYa",
  "key31": "3iEFVQE3M8cPD5yt8E8GZAQdHY2bbR9HzK3YdANw2LeztJA9KYvS4QdQxjrBtMhmcTfenpYj6D5fQa4raYXy4pf7",
  "key32": "67AwU2BQLFG4vaAzj2y6md7GGkJ7AQriJb6QM3GghGx8QrjNkzEyXZDj2GyYQkNu5jk8GQDGyUvHgAvvfRb6X1Ur",
  "key33": "3LrnSbNpnJsofuwSP5VGGLBgdrUVhcF4YHk8WYj2Kr5FqNKSFNRjaxM4LKhP3fm1PHhF6iWnopc32CQU2pfgVqrn",
  "key34": "2NGBqyPYgpgLXnCt4L3UsTUDsRkkGa8PptbmxLp7pJounjAkPgnDDh6HTQRrvYAfNgwJ6SXhJVEMhv8sBmREcdLn",
  "key35": "52GmM1v2345rHCdubFPQysJgJxcrEj6VPJa9uoJPJsicygNseioVFJBiuEbRh58UG123LpSwxPWBwGi1bYZakoKJ",
  "key36": "5ijpWKyqYAyDLkiWgQMa53JQoPoyokQ2g6unRyuBrhoHx7TiFBgHBgWKZAvj6pLKiA7fweVxYQU3xnvP3inVzqy6",
  "key37": "61p9sSSQUcaKKKJMCDjfxHLJTjPgE4buKq3h5TZudUqjFUmSmhiFEjYY2MKJzgarzthghv9zzhVdo3n25hCzci1s",
  "key38": "4e2zGwB13eV94G9wAiBGJCnrCWrhkvqx97bvtq5mikvo17YT3LtK9d2SJheMkgieJuS7JGZMivEDk7hBCrDRMErs",
  "key39": "SgYjAYCzFb7mJDqKMGst7yrbv71mQJ4CL36g2Cw2xpu8pzV1a2n4WocSPyZ3p9i5GW5wRGifLg6Hsf953po3c5F",
  "key40": "5dgr6xGtteXUqdYD3DwHJ2YafpUTAEpwoWGrhgYFLDRW84WDZE2jcvsMzAViKnbD1gkLpi4dH1sgeM9wA3t3Ze1g",
  "key41": "5nvkt1nm8R8Jy5VVc6zvBkhhfEhAxwJjp2GruuzXAhqqh6X3GrhuT3RyeoaquuRw3HGrQ3GpfdqabESV7ejGmaHL",
  "key42": "26pw6qVc9nR5pda8bhquZdnxzNMYxcmZhkiYK9DpsPMZXK22DxpJNwUsUMcXQHqcZnfpugZXvLFdHCuWtFUdqFnJ",
  "key43": "2Xs4SmmAL6eMkJvzhovqUsx5e7VA6dEbHBzPW4UbLMdptr6MPFnAyE9P9TKgpWKv6ML814r8dDNNgpc6evcuAVDT",
  "key44": "5xHSLUQqNoz67oJjuFLX6WqXqWaUtjGX3ko3yodTCSMYTTQNoMEyFDsE4TGqX4ZaQHw5F4JKFPFEiQEzoqL35iaF",
  "key45": "22LtV5xJ9Wgk9cH3mnNLwFJbh7UZPAaA3JKd17TGWua7EmGKgHSJWAZBoB1qjAj7gaPtdc2RJMYBfPWf6jLjpGbv"
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
