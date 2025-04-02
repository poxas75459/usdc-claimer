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
    "3LCLxuZJtQTe1oguZmcUVixtxKF2wjLiLPcy3JJkRzjk22HrHH79vDbp3LU8nJ3V5NFsPZsu3tcmHjdBLou3LXfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfYmz6rSExBFaznesP3rfiupGWHrdR3crXy2Q5hbZVukUZkLjTkmTd1H88cFTjf3TiNiq7URUuCnHGTsHTTgUcP",
  "key1": "56jf9NmUHrtBZT7VBnyewsmFDPG62jSnvjwkaZjaHNCcHE8DrBfxuSQ6NFWq4ys5EyB1juau2Q56mkNPy5bsYosA",
  "key2": "3LpcxFdjzjFhZgnqcTPdGGDumL2NJJNFEN1wyTrzWhpgRNjc5655EXM9YqEkktkAVEgAMAcm4uH1C4dkkyiTfV6C",
  "key3": "6JohLjYfDFWAAZ7M4d9NwsLCVyKWAJh2a48hXGSt3rpAV6U6UMbLQd5W6tzZq2ZzzDGtjMDj2QQoKr87C4YyzdQ",
  "key4": "3RJ925qCHidxRnJgJm6NHdeRkiBmvYNoBrJmtmVex1YCSdVZGG5h3nFkZDuvGoiKE4X4MqzME9ZbGMsV6nFHuK83",
  "key5": "2uqw9bGjiCSRZuXkNe1fp4yZUqwVrZAXBm72gpEuGLrXv7LHMYe6q834MHqNw8wowynSNcjQqMibs3M8yLdX6hiF",
  "key6": "2EmzxjLRP2iqS8jnJo5ZeznQUUMALgUj2Xiqynns7atkz11Xd4aNs7KFwBVYsviJQKwmwXzZiWqTzZXVHqhLHDTM",
  "key7": "2xXVKa4xv8wTXxYJTc8XE1io5KJPQEvRMB9R9vfQNJXQhnwLGqJT5EE2bJZoQAM6Cnrem3DEGwLbhiTQYwxDDmVV",
  "key8": "3tHHkbr9UT3osJsYdfLDmvFGcbhNf3HgoMTe6oQDAzV3TmMmEAALvn858Wiu2HELWyF6WRtmeXVm3W73MGueu6iv",
  "key9": "4R4GH7YNaoZbUTxkD6ZJfSWucRf2FwaWQMAHE4wQCpyo4yx7E4qvZQbrgXNACSGqbm6unXrNE9c8S6CSPyTqeg5T",
  "key10": "2C7RFdo25owAjopyU1gc7MNgJu56hYbLfoeZfsN5T1mYzuvVLYNjp9CwHFB8wAgDTUipAHXEcs8Eoz6Fdp7UN4U7",
  "key11": "57YpU2Pt6rE3KDnWLdUhCC3uvYnjEuMVakVk3Kmc2VZ25Luixb1wjQYEug7gbpGim3VN5zNxNk8YkQxQeTtgg67e",
  "key12": "5ZDRt3sc4iL1WqWeyNTaj3dMkw2Re3dVFQfKuxLkEvVPXvUaorLpDpU722aLDnHHdwdeEHzuwbrnGLq4W43e7S6F",
  "key13": "26uAPB2FfNtY4FJArvB9Kdmq1hqU1xVtuRd63Ax5qQF9U5QAc7Bf8eydJ3zgzvcUgbnxxnwFpg8QyUqMNRik9SH1",
  "key14": "4foun7jT2dqvVsmasKkBx1Q54iSSoCDgkTw5B4kEKU1WVrmAJrSXwHvsWZMjV4Q7Rry4qPYZg82bt54NfsrmBT6o",
  "key15": "4t7TaJ1DKERwuy6nsEaTpWyJoKGe91KXH4MBgQkkRUDfrNmypfNpAX3N8dPTWvVnBBinNQQSD45xosFStsHZY2QJ",
  "key16": "5hYWCEXGtcUnnc59vdTyrhjD4RTZzHjqmTsP7ZidvduKAcjVmFLjZMtmbGWTAzL6uKU1SVf9VVRN1McD5QrmovcL",
  "key17": "27t4JskMQ2fomnXBAZdPTb8RH6jdEtPB1mo6HXN1n2brvYSUQXNz4Vp1CyqsQCfLNWozv2mm3vFmpMRYXcyRghjc",
  "key18": "2r9sNBoPPoATHreiP8MJ66DXTEkrAJWeGHh1Pt1J4DQnvwZVGwj9fLt3sLtgkb8EPffnUYAeDwn4qPoohRZtrU5s",
  "key19": "2nCt5Up1zr5NDK12DnAvWehU8bmnb3Dr4ZGT2g4cgE9HPNtBvstHJTbojdH3hMfnVYUdUR4qXz9u4oVPRnne3vu2",
  "key20": "5EovgayKjQ73TxBreAxWBHaXjykQpLpGGorPSCsQ7tbgtiwuEjtwQcr1GTxNsBU6gBkvGVcMseLs5gAJhbcWevLC",
  "key21": "2C3Xqt6hSPcQDf65cMnPAL7i197iwYdHAZPSxyJJ2QAdweEky4JV9vL8re6QTebXPFnaH4LeHLwgWP1YbaPbBb6a",
  "key22": "54Fjgy7TWhgAPQB8zXk7ZfDm4A2BQiatAPMSRbsUEMSrvcMU5PciFz8NXu9kXNiSW2rEytBdCK3cFdfiBYaLQJWp",
  "key23": "5wjBhTj9qs2yKHH3JBQhHMmEgqru4xvtJK9f1j68N4RG1JjtfTXdu65PW67hFrzcXrTkBFokcmtXPdeZTitrt12g",
  "key24": "36Zp4v1199oQdskoajyx1X5Jhi2ybHrihWEE3B3MuLGbrSU3H1WFQDQ8JDaqZcgSiVYs8owwKPsy8gdgtyVSH5M7",
  "key25": "2hsY7ZpjCxUsTLNhYUFDTknrQaqTz9fRgLrB4XpFbUUT8qqb6B7ppfkKVJ4UfEboVD6fkY77vtaGzdduQ35cbMqE",
  "key26": "fdsAeFYv8LsTg74kMkyK4pZxugXsCCpqHsjMJfYquhog5kvHJv5XRLHfQDrEVe45JLFQdCCw1YQEgxNXHi9FeJs",
  "key27": "bRLXBQWn1hrGmKvUoxw7S5kFskRbEg57vUxeZSQu1oGM9sPtvNXpyuhwE6tnHmWYZAnSxFe8MSv2xQyMXhoc59m",
  "key28": "45jxejv15LfAytcS61ykPsDMoRumSwz2iaitgA6qZjhZ7ZgiHjwxCcFDJRMZ3Bs6bXnM5xFxwR8Ne37q2cUmyS1P",
  "key29": "3ri6P2cC56SUkwRMPTmnKpo2TDgJzVkGovcmVZCSNdshy46dN1BXquGgnmrXdjsSpycPw2VFhD8WEJ5Vr5kY4NLi",
  "key30": "2BDcXn5RQHDvXJSJrxHQBTqJi19WzpZZmGK6udmEgGj5tCCoWxejJtmLeDCXEB5LxJQcwGdjtbRXqkU88MBezMvM",
  "key31": "5viadsXmeuXRWH5stKhTdUoFCfkExB5p5J5ep5Xn1HTSpuXZMwowYp9f2NdJS3p8ApNsbByfyE3gbtzbTn9jk8Um",
  "key32": "5Wz1CY9xU27YsmLXH6B89FWtBeBVurkcXejxyDh3Q311P4f6ycsRNHN7craHWPmGAwCzAyQqVKpquGZaPWMmGaN4",
  "key33": "zGbG2uCJeAiLoapu91tekiWZFLB4BHX8GAdVQoPwD5ThCPZ6EJuHyafYP71XukJnPdTBNDohGJxrgSSNkwUBiCZ",
  "key34": "3p75bSo5YxoZ62t8U2uxr6KrJHc4xeipQCNFJx19MscPQye7us5Gzb9TmWx57GUCHaa488aiQTqaHa5iDXukhkR9",
  "key35": "hHBxvCLh4FHDyLBLB1CkSf7fJsR5hey1RBSzwduZqA36LU68ceYN2Kgza3S428SHFoNzfk88uyAQLCuq5ykdUJU",
  "key36": "5Mm73wsRzcWPWBhDFkTuVmveKshuqakwkzSABDwZvFGnAnuFZrqYiWgryNB95xo7g2ZRXE3xkK4eQQcu9N3sPs4T",
  "key37": "5wpSAG4awMTz7G2kJBhd57xS7woS352Y5VR2hkSUp65DksXyMWXR5fE9D8ahnXTKiGabgyapzzR6py84pWKARm55",
  "key38": "4HGApNwXMtvz3hr84odrBJ41JHguzspHPLvv6N8871cobNtbwmAfzF8XKRbj7MhHrWRdtuCHy4C81bbQAVzguHqm",
  "key39": "4oK6SL7M33cUb9Vwmkwe5eQnfbMkooJtujanGkGgHxgjVkhpcKnS7Xf1WBUSWMwH9CEcmVx1u1SDKhdfyoqF1Ybf",
  "key40": "8fjrGRfM9vUhtk2tyTFXy2au6nYHQzRkJKt2VTvu9SBZ1jDL2FnfTQaLEYvP8wvurWfh6WDGW9Kuay4ixqfMQY4",
  "key41": "4VrhSywoWtNncrU4mMgYWAQr3BumjQda8dznvGimG8vusicTpuXzK5adpBd2g8p8Adfhn64RBk3U1SVFXUjDVtKb",
  "key42": "2ppZpJ8r2UiHgsL16c8V5s6kyFXPUMuXQBohB27xwRoBtxECdjGgdGN2ZdgDT9aV8j2YU4fgpDQ2WN2tcqJEHSux",
  "key43": "2JVBzGN3po2H5wrDfsYELzkskBQ33i75EDHxsTE3gMxY2tJhERph5v4iXUYG46fgoXtqKZvqysYe96iS81Hqbxbx"
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
