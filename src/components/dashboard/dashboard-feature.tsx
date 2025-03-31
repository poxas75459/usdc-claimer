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
    "2WRw3d2yFpXoLGjkngRJeQz9oD4B6jshwk8tN2a1T5brQEfyRHHkBTEtfmAnbqZP31JWaH4ugN7VzZ3qf388eUfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZZV3TMzMuMSGh4msRwWPceXGXnKQr1hZ2SFRaufbxooCiJ2VKx3irD8woxKeoLypZMmeXbb6xaePt9yzv3kEkh",
  "key1": "2CXUX33pDDVmz44LZ6q1iQt6uB6pSHFuv9GG9efUBobFee4spnaG2ds8YUjQJiB8YMJo2rVKp4fTHByc2NuHNV15",
  "key2": "a6raym5MocB7z2Fe9md9CVq15j9cBPZHGdR4z3D4JU5Jag3ycdyrE2WESETVXrCPnVXx3JWUH9CwVnxBp5FoTWa",
  "key3": "3AUdhpgFNtxgkKdjkVvR2xBuyY73jyz8eESF7iWWuQG9fhU4ssm54fwDZgsCSwisqZbHKi4C6U4HLtqeyUC2eDjK",
  "key4": "5ZKEBhyZ6M7YHGAD9web3xwN5xcG99BXnEkg4RaDRtuUR2TrkDoNhAFNKcQsro1EBJpjqVNZSnC7MAKNXg8vxoDu",
  "key5": "26feSECyrfTBSbHrEJg8w4RbkTHM6yAEoSC26YnUkoHhxWicmozoB6buocPvMtN7BpArQ8ehbnoTn1gXRC3nJaFF",
  "key6": "d6cmNXXQ1Nkzp3kfrjbSHmwDTo9WVQVRsDvkRFgszZPHYJQSiZ73RSAcmChi6xNtivjGvCvng4C7fiRzdn2bYMd",
  "key7": "3yoxhZiiTmgvVuHT4mRHCMPf138fwxuXSm2qTMG5LzALg9UUycfPbdRU5yrAUg5SB7s5Nb7Qzw9xMK1eHhPvxZDj",
  "key8": "2jRCk2UEMB8FTDXp6xsGoBDh29Wau4ySnS2oPBRcQCmf7Zyaa6yfs96fpcXMiLwMBYkHp3JZ12WarhJYx3VdNZo3",
  "key9": "3hUQvauutnBwsZJFfbsCPvLMaYK7tXuhn7Z4FQaQCpffGYZyREuFqnAyEwoe3n3ncaHyPxHSoJJMD2RenrGZPpt2",
  "key10": "iFBBStHfFQTXpKKSz3XRjqNUvM53P2VqBJ3sKwneSJ6qK2uqsfoAkTX7Kw2HhwYLMTCdXZkjR7TYKygDAQDFADD",
  "key11": "3JeYQ1oA4na3bLc7GRMCZBiNBiM82k8obNJ8EFG42SvXf1DoU1hkx5QCe9uHTrcAvVHTQrLDW5PpKuiYM4V7hjdj",
  "key12": "3xEbvMSKhWm21RqtmsrPS633Pr3WzhD7Yp3zKoTNX7rtfw2NuYv7cLwHvyY3qaAEwtra7nxbi1QVov3J9nDczh4B",
  "key13": "46syqRzjkBLmE5V76kEqU63F9Ye3bxq69maHEwSmK5pbwAurpQguWQoofFRcjps2ETTuFsBRHg7jkG9KKykrbT9Y",
  "key14": "4v1bAqSaVQHEVsnvKgKpLAFK4ckscUUhE4VzaZtzcdNHM6CVDhax5Uo5F1Ms1XDxiLgNVkgzEGQokzJY5p1twNNu",
  "key15": "46mXmsCrHaaNN8WeNbUkGoCEtqgR3jF2a7j89FSNRsukErjaPGT2SvsYZmpqQAeBvbcP9dbj24dqY39dumRYfEAT",
  "key16": "32XH4EPvTCc1g7pvV7VsnLzEo1yQhw8P9NRx6Cj2ezgP2iPRLPWbrFxubHT132KrSBpGs47ruQWRdeyN3fQxoWZY",
  "key17": "2vJ9PXkhgdLNB1m86zSTBDzR3qFz5Fxh3DcPABWNeG9w92B2g6KjdEFwUayB9Rqz8citQUThMPVeouZSFpb6Zeoe",
  "key18": "3WVr26HpG2iCHAyAQ9mJyeG4TNwAYdXgzwmdXB6AvBuzMnr1vyboG3KygpByzjvT2HMn84EUwsrpt7AXpv9sVCrc",
  "key19": "2VPWLw2ofSw2gAGvGbwgJNnk72yoYLyvBJfCcEbjAFeiExHrPrnnLHpfcWNrdx4QGd4QAP7tZzDHMLfv3q5niGfo",
  "key20": "64D81oTDDgcgP1T9UYTWNXow8XTtnru783mkiKawEUHSDaJngb4Xe6uQffQ18y7kX4LyyHE5vPaNN9mvUQp9TrEf",
  "key21": "247nyJDqJv8bACRNDzgeE57X7MGNEsWyuMu6d69yUHWMuxqSsdFSGtmZYc3PX8uJgNSphfrmKScNSdvw5125xWRG",
  "key22": "5eUbchbmbuxkfuU34CVvwTkxEYG9mZJSNXVXN9T3dgWzohx41tKjQBD4AJ4t1r89jgZFyFZLpuARNiiGTtpryJT1",
  "key23": "42NdZDrZrCboZ1fA66YF5eVAwzU7iVamg4JfMagh71UMkxDqyjNaGL4YRWo96uBGJW9HD9DCB5JHCBrt8bp11prg",
  "key24": "4ygGKnXpAumUoGsnUsTDsLiGTyjceru6Y1dVbBq9T7nMdJgYqkWGaU4efxbN6phD5fNA2Viuj4rRU1ghaPZria97",
  "key25": "TzZepTrQ6Rh6H6nH8U9M7PPiyb554FKfrkYjQD7EdRADLdEjE6emKKdnLJeMBBc6vtEmcihjEoh2gkkSiTeKUgR",
  "key26": "ThRUCVkrV3MhUwXVp7tKCPWeovaRe8jEH5R5QZFtYnJuguynERtF5tkFHptEvHCRiqbBAuaUoCoCQMWZBZDyocc",
  "key27": "2svQK349P6bSsfAhvps36sDia9fWJNS6dgQLWzJGRa3nX8izy5Cp9dPZW4RqLKMQrKvsjtriRtWRfic63PKJUsQu",
  "key28": "JVjfkGHK9fgD5R11nujDkz4g2apudCsd8h16NsspzM7pGM8EiHuJp76fHnmnSFDrujDUn2af9oNLvMyncjhQsL1",
  "key29": "5EPv1eabWpqcabZ18X7P89HUMbti9M8ugp97y3x593YqUzfZGNbsGFrKv4nAZRKLfastGPYXmwRccd8GetRtDE1M",
  "key30": "3Jg5gJHRrW4bexNUukyFM7fZgmTmVC6dBSfrrr5qrM3pXFpoMmK2CStFdqNRjk1ZHpsGs1WPB67mGAuutmGiS1gL",
  "key31": "D4ALdyJZpxnsZ2p5sJWdRyT75CEs8Uw5s4bi99aG3KhY2D8Rh2xWY5FbQSagPPUnqZkEZXZKD92zzz5MkxySUTi",
  "key32": "3FXkEhbVrR1s7UP1REBu2nhgQUMBaHEj1cWQYHfkRhcAcmQaahQ9kPc4EJCYJkUysbtmNTvxUfyv7KYVTxDecoVh",
  "key33": "494XUEXd56Ry87g9gZXMW998HbWPAVqLQZoMLZ51hddMrfPKQ5Sd3BxfwotTr1T3jN4UuYVWXPG9Mjn4sPAReYTy",
  "key34": "5HNPnHefy1z9G6o7dkwdvfG7Su66ohJKeS4Cfexw9s1zNSk9aw67Avm5wETQEtrCRpN2Kw3v2ftao6FVobK63Ctx",
  "key35": "3qq87wNtNa8EJ4SPYVRa8aPKZExdvHSj5N8AVovntP6LP4kXjPhtzfXjbLLrMqdTChrRRXVcfrk8GxM1xw4bdeWd",
  "key36": "43knf6Jn4KhdnqHtjXDfUpf192ebkwL5b5Z9b9g2pYLPF9g7vTUqxtrcxfx7ETGgdG2Di1CZewWpAKtbtQTCtnBf",
  "key37": "s5bKYE91g4c8qbyjTD3mhFe1ik9donYLiRL5fyi5QsNyiDJe71WKS7QubvLe7NcigoBt6vUJSTcJ66TA2eQ6nF6",
  "key38": "4qRDM4exnsuYix476WCjbyYkta6iJGuRrKe5kwQDxDGn8MBJ8gEzZ1oWNK8GG5jzC5bgWCYGsopY7uNYyep8RwUr",
  "key39": "3dnaasHMWwXrgUoradhjxqPLFHU3R98MSbBzJ8EjKdyeCMLM2tYmR2CVYpyLDKPCFeLDGTW1BRMdbhqgRQPoAnat",
  "key40": "4L83EBoJXVufrUxH47AB1xGB2EsMtMXpCXbV2g9xc4Km6Eiw2m7eu4hoP4Vb4tUq95tNJSnTkmiTFr3JB7UAfE34",
  "key41": "56FkNykFQTMCzcRDzAWDZrYkesfxsWXRE57oEWZeiL2CZNfF6x2HQx9Z5diWZVd12LJjDizQFXc17RKyUiCaTKmS",
  "key42": "25ZitrLPjxzftMD5uRi7xtp7hL7MicwN9mCH6Mt3yAmTZmXbJB3St41WkXA5HogQHvc33Ey6cThiXuhYsmFo5u7i",
  "key43": "5h665ko637wH4mQSbRxTs8vA3b8ACHgZMqxjSA4kep5xc77epWDfNENQFz6H2dwbs3dRocdP5HYuHKjt4Nk12vZU"
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
