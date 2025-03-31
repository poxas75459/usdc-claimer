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
    "3vx6yDAAno2RZ98Kys2sbm1BouyTaFGoHCy4nP4QvwmjaZCtTLdMPCaGZFmAUeJv68Cgrp3gixpwdzt9cr95DNkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGn8wrFik5Ltas63H2P9EJ727TydjACocFMJmUbojMwY3X6cZKjYZPXz6A1TEXRL8MZ3t3bxHzkqRkXk7pnjE57",
  "key1": "2k2PXkq4YYhdTMxVx9ggtWb2NTUts3KbyN8oAU6wouL5YpoacKWeUzaWhRDRfSnNoJX6HTPyBMZXbKtzL9D6tmDv",
  "key2": "5LKoj4LuyVu1YQyzkQELbqFTb9jpawki9QmxdvvWRNzypcAWuoicjgC1YwNRHboZKKGeTmDMxYz7DvLrq53FDQVf",
  "key3": "2UGv46tp8vViEfWuLZkXHqmkci5D5bJGZ5UN82Bkyb6uZUwmDSX2nv1Zb4MCJxjvqPSJPUYtrmGcGWbBitdstyKY",
  "key4": "59zvwH4QRWCB9dbKVKvLVcJgE6pLtbffCdgC5kWjW3khjeqCWZEPaMth8HL7W7GSgytTr2DyBKW6UjResU8z3Jah",
  "key5": "qS54mWTyBWUtYU9LVnXY4UQVGXEW6BUibp7jrXJGcwjMksQbbovaTgGnCnnp6D2RJck4MBhi7d8Px3yTEzm5oWg",
  "key6": "4axniaebGzKZLvXPWArP7Q3Y5HzCRWNTw5p12RNbeG7Et4F3CEVWy1pfc5bs5MW7Nsj7D9HYEw6GbNtzGWjTSAwr",
  "key7": "4MbMS36uKcDpq7BMFe6QdKKUMaiLhStwMkgythAW6ai64yN5FQMaCj2apEvMdPQfE3ivk8zLzsiVQUktX4Rq81Mm",
  "key8": "5Jymj7pRXNrxR8yhFLHuwYs5pCgc7CJcy2Y3pcoCfsmh7qQof6KCX2YMiH6M9bLMZuzv1efLDpFisX5W44Ahdr1D",
  "key9": "37JLVfSu89GeLj1bgouREUQFr1i1NLfSCSnTY2h14rF692Miq5MNRoUBK6BRtBbBxqEye867YUqp96v8Y6Dh8TfN",
  "key10": "5XpNGe6f4K6tDDdqet9qBqhmztYFx42VjyR2pXssiYcvPyyV4ikGKTEqTFiBKxHVFRetgniZzjrufYG4T4BhwR27",
  "key11": "59ai5xwqYoSwvFmgbRtAoZwQog5DswjsRuL36SyuHCmvweGSLfgR69gszRAqnC9AQp9nZSBinhVsCb19Hi7ho9n9",
  "key12": "5uDhbYiqzMrunpKGaStgk4FyMjfAAceAVdCco96jj3CmaUGxkNtmikpx3ewpxGK5dugqFvfE3ed1PLsLdmtTGR2J",
  "key13": "58zsNuxKrWUdib9taLjfzAbTcz1wkVuWRBmyuUUqidAC9zhmLicByG9t9JaxTXdnq44NFDjekJkMsCwj8ZwGCXv2",
  "key14": "9PkmfxKXCzGoehSxoGQNoFzusTZA11kQujKd1qKndbxWHVSdsZ5m6mJJY81hYAhfimtdSobw5UeXYLwBxEMgdMe",
  "key15": "5FDb5pXi7xNcfH4DuNLGHqT8FL5ntK8fF11Siw7Ug38g2aH3FFRvrpXZBYH1S3CmxJhavUZTtRpbaJXNM84nawVb",
  "key16": "4EagS7h5jf9hpNv5FBvj8Aqx8cUvYui7kmDVKKSGq7HRYQ7kqYU3ny3H4NFnUdrwSXX42DQcYPwxjMdpxsS2QDmK",
  "key17": "cW6f74ohYXrYKfbAZRNZvCg1cFM7Ag4Jtm2mm17aQTuVHnwGxEu6QwB62zt2Kc4tHj9AJX67rSfUg55Tay3xx2v",
  "key18": "2DzDpuHL6PPgGfzi2ayb8m7je8W6a75G8GYopSoB6YPr7Gs5z2qXZesYh5Se6Lf6u3kxLPf751Pn5fHGoBMWwnmJ",
  "key19": "27QQKPheMujHzwqPdXeEmvdxfyiYFoSLjY1B9r35kjUM565a3c52yUkzMaQEBop4LSQcftbEy4Y72ad1HZXVtPTz",
  "key20": "4B9HkZKoc8PTNC8ATrUqTAZ2hayuxBKPS3Gg8eQYhGJs2JTsCsVwkeJq4SVbDq5xmAXTgqcNBHGCkoHKnWjnNxqh",
  "key21": "hNH2hpVSt6v3fs69BT2V8bXMZh21bTMhUGE74ZgB1Rto25AHMTcpiWi6cEb1R6c73nDM6V5G9AeZ96E445DpbFm",
  "key22": "3C1xjKZRteHVQfyqPE99xZQVrMusg72vTrjZr3Xc6VDXWELV5hoieT3cSqJ2U9qzVWaAUfQWiq7EFZHGoGGi9RpL",
  "key23": "1CUKJBRZ8M9c5ME6k8vA9WaGe3eWcgSoSA6cm3NvPBqGJTorcnCSntseEX9TrL8Berwvk3AYUtLDu1Lb6wzSANE",
  "key24": "3shPDrpvzCacLvwykoU1ATCnSYgeoXUvRhtbuTCfrj8Pdky6Egi5FHBFbr74tz89cuzr2NZ9qaFqemN7ndvm9Dtc",
  "key25": "a7bRhv4jsp868keNwdEfi8WdhwfxNXVzyxowF2Jt3FXyCXpzLMCPZGm8SJcGhodn9ZX5DtTnmj3XUzdvQf6YG6B",
  "key26": "C24KG1FYd1DBtCrzBcoKLoPGPMWMWhdigMzy1k7YBqPDqmcNCgEKKeEjN5uHHjFVrBB7Ymzy4fbRdZRTGvkDS5p",
  "key27": "5xAGqhPwx3z3uAxxJnZHq1GAndBewzZpjsFCXRgKBrpQCyMwHeSUMhqDg5gi6kLYzZfvb5P4PqkQtbmVxoTEUUhh",
  "key28": "5m59PFtZTwZiQ71F5QZiQK7NTDvzasJ8R2wMQxJJiqVo9DPh5dwa6yEmLuN2NwHT91hk2JjAZU7YNsFE5sqq2rPW",
  "key29": "2xtb13Vf6aRXMQ3yc6LMNdjUfto8ryoVdYPNzgUE8AquWxdnEj8YRopPRYzjZSeVnATjs6sgbHfpbTMnmgfyFkPc",
  "key30": "5LNpW4CCk2HVFawzDrN8s8Yx5MABA14csR4YCXR8u5ooQ7iMbKQdmC1MoMDiRW8n4MEfQkpDZZkFncGvfhoFD8LH",
  "key31": "4G1Q3gDvMVjS2fct1enu7SVemUaUNbVTsYN8A6DAZyr1CPYTTMfjUotWCdAXgked9Q27vtjoryCW912NupJntKAa",
  "key32": "4dYNj75BDNd46GpH2fBxeAqmLTQ1uPGw3qB6EsJWHSaoss9eiGTh8FbQ45vcUs7UdV3LAXGagGdgq4WsBFXikZNi"
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
