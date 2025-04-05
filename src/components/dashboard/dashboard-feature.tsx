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
    "x9U3wjrULaY4W8sGMWebFjuJW2EuoHcJz6Wd6ZzKxZJCRerGuymcv41TJspxyhA49iCgwUcXNZesMNAfBF9QcMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uw5XbJ8Vic7Rzhkm8p59XAeSmjzr3jenZvEkmAMNkFK3EcfgEHi33HK4fPtR8AF8e7rDNLSG1sW4uoshPKfWSL3",
  "key1": "EY7d9KqTDgQDn5nM2sfi4inmv7RgyPTNewDnEQjStCZ7d9jEcDyW5Gb2LXC7A31tWuQSvs3EBtBJHvdMLPaEDe7",
  "key2": "4KseUBT1Y1r7ztZKLHxx76LV5REZiDw7dPnmvgWh59Fn7EFVUg4LDXZJt7JuhkaNw6KfV3FPFxSTdfMXf9DWK7np",
  "key3": "WJYicuX3P8vNjn9bxgWeEQtcCYC6XpixZpCN9Jg8qY6BJzFJieKfLaDvKjTenPhLdKopnfjRnPwqdV5pS9apwfy",
  "key4": "5ZqyVHMgSw6MLymRNaTmo5LjikgWHFUCVfaog9u56zCByspbG2okva8JseQUo2FM1o3WfAEB2CkVMyf8mLLAtXZk",
  "key5": "5NBPot8QW48ragZJZDum4vosNp9rws5meryQa9z216CDkndrzAzXHLDdH2iEV3mqaigJnP669ZCisVUUxKtfqs3s",
  "key6": "2WLMTCWZa1FhaN15x6TAxY3JZfeGgSAJSVTEyvE5VES9AUPRNzziNKZbpZxZQ8ubZDwftk3YsGjACnxxxHokU5aj",
  "key7": "Tf5PG9NWTLFBMrPWuLYfH1rVxWwBU19G1wsJvPPjzwqnRu37Gx3qsUjo8GUngzXPBCi1qy9kMNP2Gbv8NRQaFoN",
  "key8": "2ps4sQyDwnFCHKpV4PxyxPc4rgJcGwLuMECBeVPtp49zFwUYkmLZQjmbJ7hNGrZPgduXKeREk6Y9YHexPBh1ySYg",
  "key9": "66iQ3t9ZqVU6ZFXL1vmisxUDJvspySeuaBQzjeAJMW3KEGcBMhzKAQpdbjy5WSsR218fhjo3Fo4u8nkZ9H38FbX4",
  "key10": "25SmooAuuknZ5vPJ8j4czhygzapykviuueBPxNxhgjCDHioz3gkAQccSH1n6RaffBXsd8sMpaLsLDdx4TY4ZgzKE",
  "key11": "4EfbKCHirkAgPbjuEvhExWB7B822pLUKwEUbAvdi78szqvAq1MTu46afM2Btg6i7B99f7HWM6gcsaWE4RHgFrjbk",
  "key12": "5mDC8ZDCkwJFdKrEBbnJNgqVnK3eUmvni3qYvGBRXoQFvb5irSg2CsX2VPTW3gdBXQwBmEDziaxoGFssPW1Vjofd",
  "key13": "5Vic2nA8VM6RrhU6FZm34AM8h2C7JFtXxnAGx3k4mXt8AWcj6NekyCdvrAHEns6rz8vYRVXyUPtzg8TsEms3WCoy",
  "key14": "ZqnSkDtt1j3LorGRgCEnFogfMmW84UwKoq6T3UVE4TmrGgAucUAupitPubX1XKM5CG9DQwAMFja2X39PxENP4oF",
  "key15": "5W12JTzcxfVAyZyEgSE5LkDduZfLiauvQzeEZYsjRQcH1DHcK14TE9RTmz55QgqtZsLsL2n8WkNhFmbWPSVtefhh",
  "key16": "3FKyRpSKwpW1SQ1PaBEfKDtFthxURWaxAW1M5TQRggjGeZeyef8cJgqcsv1CwM9wU6NokeqCbhpwzDdsQ8KPg7KU",
  "key17": "2yfy3LvGN9U4szmVLEFsLsXEs6HiZ5w45fvqmxWDWXsbmLdizHCAnPxC15PbJ22KmwD1JPsjMqv5zRhntA3w9GqG",
  "key18": "ugGhA7e3cVR33CgWV3YKytKgykR5GDQCAptmrGDB5i9nfodrLudch48AuwCLkwYq3hRL9ZELbhjbT4xzARqNbg1",
  "key19": "4aFwYoboroBrpmqvo5uNedoR8CNWLgoFJJXgXS6xR1jJU2C6R24jYapJ46iP1kd8ygpjtDGpSvGPESfgMmC2BBMz",
  "key20": "2ao98SW5QZHdb5LoRCek4gSAtUghDUs8QswfutPmq7rBsebEH2CTDw2gtpHuQjaKN1W71w3mwmN7679akSdAUnEA",
  "key21": "5KpQpu4JovZ7Z15GwW11mCPncA6fEV9L8WqTj15Hxx18HAByjmMYS6ZaLDaHyGXeyUusePzjzYZZdTxkzq3XFjMM",
  "key22": "4SPsRPevRTk2WCrHYaDxvevcz6bTUHdiAunbgFd4xr7Fjgy4n9QZZAszJMBoAN3NzES65PebQYhi1JUfXqhscTwx",
  "key23": "458pBgyrkv5wHy36G8Fxo4sm4i3HFo4Wfo35AVxjWVqdEQ3Eauev3AANNtcQw9gyKaxrK23Mp7ycA4ziSog2VNCR",
  "key24": "359kQZQgtETujLKr4J95v94juDXUpCJPwnAkua6JjHaZ4AbMU2P1eTQLXqKjMPYqq9hnxdccqQ7MTb7X4tmeqMqx",
  "key25": "51GMJqJJVkxhyVwVuw8xkZG1Jg3VZvn2txkHhnkxEkBP5LA9jiembJS49bbzakjqLpADDfugeQXWSFcr5eJ984G2",
  "key26": "5ZDNz2n6isJ4cCZn3uirBVcz66s7mKx9TNxzaxCvAXJVqe3CDo8m6794SX6nypwLnyCdFzueBtDEmLeUN8iWu13x",
  "key27": "NBUY6LsrizLq7Frr595BgdzgZ7y9e8uBnCbTVfznHXNRSHrMfB7SiHC4HaXGikKsqEnYHbWNh2UvhEK8jF8LA1a",
  "key28": "32Aw3b9wH6HHSuWvtwdKbotCsbKTueBFERge2sdpYFAnkgRLpRjt1orYL3geS2JPqdRW2dFrdKqGxQukzKnaCFG6",
  "key29": "5vtivTAQXxzG7GyhQNzPCfx2hGBWjuHMyJRfsVy5miejukdiqUKc6xWVknGLRehQKa3eGDFM1KNfUnW8kujAaTin",
  "key30": "2FpuM4YEnZRtJ1GBXco4dbCx9GVBHrBchX8gQrCnp8mQ6HkmTQEgjd4WEagtuNYThHmFKnH88drdQ1N16sFVJXwu",
  "key31": "3o8DZvJabXN6wF4Jfzv5zCscn5dR1e1G83Wt9JEGhqW5xZzSaVtrxHaPj64VXXZMgToUh4WarRk96ryLewZhT6wL",
  "key32": "HPuTQTJ9tG5Gpgn2HKQCQ9u7wLaYP4584HxhkDDRddab7HzksNRYkfUvWbY1ezzZJxiQ9Efcm9L5UMuZzdxk1uk",
  "key33": "3JYkUYjXqSpEt5det14jnibtwuMi2NsCa2gNtNfyJBoH1F9DzXC1E2cQWUNKA6cJnkP7STYGFwwBNaaiSyr3rqru",
  "key34": "4UTYq8FBYE6J32sKNeXfvLdcd9gq8R4ugfoSzdyTc4BSQozX1Y4vqhAEFKrGe3TSxyuQ3mp6NEyq6tthysNJTgAW",
  "key35": "3WSDpjU1Sz45R4cbs7dMT9LjxazvGX4GoLuzd56BiFR8EE376iEGeywCNuPx8wpd4e16T4MZhiteTS3z1WUwBM12",
  "key36": "5B1tBvZmoGEPCtVFnVazAoxrPF4bZkPoh8zVs61k4XjenobBQ41VjoyH4Zo2qGSW1hg2aqY2aWMTr8wRGF4LkTX9",
  "key37": "5yGbmbFjtsAQtpEWH6NLWDY7GRVn8nZ1194wyz7KWqUJRUvQPhAQJe4jjN7pitjc3o24AUaWY8MRx8j1g5KrBMXn",
  "key38": "3H4hGwKZo8tAwVSmg247TjNpi4D2C22PCZcRyZaWxK7qYSuMVobRS4n1Zgnb5sezXgLaNSfPMWXBaV3djsVjmGR2",
  "key39": "4KGA2z7iErnLnFV6tz2KcLbrhzvTFZviBwTXJVfih1aBnQrEUcEXebSUo9dj49spAivue1nsghU4uFyL1Nja8u6h",
  "key40": "5KkhLRJ4BqPRz8vgEgU2qmWp3k8jF2ohLrmMRHgJ6Avx5iZ2rnS5UrxNUntE9v2u8z5tdE1aJZAYMtwbod5QZjkz",
  "key41": "3y7x5gne9WC5uZYP14X1n9iaHZD1QHt5mFqJGPVqJaRwc3scj5DmK1B3WG7ddC2kxR3d72TNtrWwdW2TMTVGibrz",
  "key42": "zPmCLnmK8AqUfYW3k6W1JfycrXcMkY47CExMRkgVAhHKJ82nAJ8FaGQqY4XryUBnbANYcMxn1raAL8pjwngdAGs"
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
