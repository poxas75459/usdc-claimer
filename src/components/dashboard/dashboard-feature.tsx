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
    "5E3fGZ73zFqbzL4hZ6MSMDYbd3ijaH3FYk4Rw5KZRWk55Z6hMWtFWmDzMDfRtFjydYMVvgvbxgLpuGw6TNskPFqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHjp1zZkpmPsmXkQUvLfuAeJ4DbJQgjfpQP1zYV3Z61dEYp64Vk6EciJ8VWFD2bWj4FnrezE8EGN7tVjqVpkDBo",
  "key1": "2UR2rEXVyMbrAXF3MG3TWn7Q8uq4sR3AY6BEC62B1ituUuTG3VumsR6wb5froRybHGBF6ukfeQ8SGqP5MAhumpNb",
  "key2": "2kReSANZvvzBbTFiys3yTMcKCnU41rj8kiRzG4xxKpzGhVzWFpS7RYVbmDTqyUU3g8UQyRCyA8x9YF7vHF3R7HVn",
  "key3": "cbsHV8mdPmbiAVqNkdC9j7cyBmrjJUf9GNtSHr28n1QDGMRWkkV8mrEiYdSvtxPwu51gA2swRB1T9RiU8RPjh81",
  "key4": "2F6PfArN9C6wWTSaU59abFpdQv5pZ4MNnrnT77hPYkXRYRTt7sZTfg2FWsN1PNHhDcZbfAT3NpgPDHaipFvxmH9Z",
  "key5": "3rLq27V8Bn6YG3AB8YqQep6QW5fdgQmos2LfyvJhqsmBpVCGJYVHmsLWHXYTbZCu3wCBcYiFjjZ6wTq5imDdVbQi",
  "key6": "3TUZMZxzLVzvvb1EkMB2YjhJgQDxXCFV1W7JTpJikivmzcoVMLzAQi7HH8jd3ZNZ6pzo6NEL4hTNW2wmVnvYUMcm",
  "key7": "Xv52qvjpfjyqh8TDdYTpCtUs6gNQyEt9WTZAi8zbtyVjyZduhG5C77XbtqHRjbyrg57dhSpEVjzJad1thtVNVSM",
  "key8": "2ciQRpyS2MY3xcwmnSPMsvUwCn5h45zXbFwJfxLYWFhRf2YfybNyARHy1dTTeBCx62fCKTjiwrLJnKdbUcJRQLAU",
  "key9": "2DTApJN3u1riJKJKNf3scXWnFNSnjpt2rCUBpvVcZMBNUMZvQanWb4fhQT6Hnvq6AaHfRuyih7ux2sSPR6vin8cj",
  "key10": "3MTK5QJ1QzkgEixh8Jy9qcr89YdN4hQguEQruNxqhJ5EREWjKoHKYicPZZbrjx1NZArKtPmgaJ1FKRwMRightSt8",
  "key11": "rrvA2NqAXys9VadYBb8P7Hz3fxxpVDwhFzJ6c7VmohjfD22fpGWwv4vUeVGxRa974vv3yqnF4wijothU8hsK7zH",
  "key12": "5qDo1ERFWCk5okFhugEJgEZTtK89rbAXfk5z6xSm4i3bY3PChN9RiXJWvez1YcjabZu3XnLGMWPpyBCXfq2KwAEW",
  "key13": "4FSqRptJWP6FryCBzmQVBdpU85FFS4bGGVAqe9VdSbmySdd3FeRwVEYH8VSZyQHE61bU5iiY1j6UYasvb335Si7K",
  "key14": "4156B4oXNXwKg7U8sBCFuLWb35RAJg8c79Yav9fJfXqc38MpREsRokyZR8WbnMMiWWZ1i81B55WU1yNggKi9Eb47",
  "key15": "4QppgPCSfF64aXCauKfiAKf1MDkUhTSJSEqY3BG8WzkgfyaiyomH4u7eTqwqRSexbuBY6zbB5JW1b2f1Zji6iyHV",
  "key16": "61jsV2eTNNavHmPUQtYPUdtCjfHAa6toiXiXieMUewydhUhj88j76AX6T2mT8y4EgKCXcqhw6P4N8RCLSc3kgC6B",
  "key17": "57Udsoy4n6ToTfiMTfQvGFCkMA4CFTSX8YxqQLmSs43J9NJnqZwNA7eD5Dk3xEiTSujtGEKCVtVjRCAdqSe7S8uq",
  "key18": "4FgXAToSZiSzRzJRUh9BARcsv6Q5s8iUUFQVLJu9V5PBs9Jf45pSRToTF5yLMmm4qzaFsY53zqiaW3QTWZwnvwCb",
  "key19": "3vKqnqeVJQLkqJqiUVf8DrbdRxx43VVCQDvJeXJbaV5omfaaTexjfDsJeJb4PTXvC7PHRNMscbb1svV6itcMaKjW",
  "key20": "cjyWA1CQcsuzk6LHcgTSGJCsxgzphvpZo2UHDAKMyJ8ajmDnfAMME9pdMkJpueDmbxnxFzPpZWDacQzY5GAiYij",
  "key21": "53eJcnomwHYtTDbVJ1vzu9ExQkTAHQXSTy5S7H3ohXqnbBgdKtyVhoEDfkNJ59uAYyoXqg8Ux4WCDc7UmxHxrxT7",
  "key22": "5w8tXuajV2DqVVAD2WyNsFzevYh15k2bKeqDhYHnT7gSBBYi7uRFrTEx8f4dsggMnuV7e5t8oGuEiJsCswHxP8KY",
  "key23": "65ziXnqpxMnCXzsaCYRP4EkJc2ssQqegYe4KMkh58raXxZymmdUVHjprhxGwPwm5VSSe9nAjisKpge23PnueQA9K",
  "key24": "49EiUh9qbfi5SRSBf8BjkW9hk8pcbALGdkCHZonxRfeGkEJUGe8UoGa8b9MEzeqHcEPjn3t1yaRtQ5yi3RUP7QSA",
  "key25": "tZrjJyJb2ufY1w82NmBuETp6wQbN4q8kfWkH3yhEvMmmVQ6mx1iA438R4Kbe3NFN8UUtBtvGgkrshmskCT5WE83",
  "key26": "37UiitMmyDW4LknfsSadLReAZVski7G2tUhpY5fs4b8Ht7VXT2xEHZBrbHGvt75oXwQVmmNMLfs3kF1EXRdXQB2P",
  "key27": "5EYY7xaRtnXKpFo9e7bgGC6Z3qkxFR6pLAEMKp99SEeyksSxqPozueT1B9Mz4aootq7o8MPF9DMqaAswH8Evz2ih",
  "key28": "2E3DhjqCuHnR6crHqPPMgkywfcnXYvdFD8uMgEzXeeRSQpVTFwdDxtKXEz5XocZhbd5furmWqjm9ccgbeKhRnExo",
  "key29": "2zNk3rWtRozHTyhmDUK43svH9XNVNUYYPLdmuhhnpifVp6reXXWjH74J6X9FcHGhEnsQcxwqf1eyuT8wMandQXVA",
  "key30": "5k2FV5ipgCb3LEmjkgaKEDj3XPTXRy3SWBr4nxPr54tTPih2ggceCUYAxHMzEphjRT65UP1b1BfYSMpyUaUWWykz",
  "key31": "5Vtya8vRyfd894vKhSKgY3LTQX6KZn8a7DTVgPW5QWDaZn7bnQQ7gLjD6aRCBUhaJRfcYr8MgeXjjnAU2fTGpmtg",
  "key32": "3BVQpeazCm9UDdHzdCTCHMC17ix5F2kAxXcWGYZLAwHsepquvJJxMjdMR1ACbWvWYBtA2K4v5zKJjaFbr9fJPKM8",
  "key33": "513ZPg4yykHtR2Y9k69ubJW11YVh7hhnNyZAX4MhVcbwqfB7EKtX8frEbDTaweShF9PcTAa4R894JhoJFyqBBrnC",
  "key34": "2NDTuiXRaqjZ5QseAMnSGPr1E7c8GM2nBHfXeFa8Vq8rpJ1d1u8rS6euLC8FT437j5F376ifgtz4pRvWc8hQkRnn",
  "key35": "2Q1dELCzuZoCrwH5T3KDhGKLMTvcxHvP3ZjbpVsLbms6FoJw9BhEAQL4WKdTBMjuJrG6if5GQwTrTYpY3nThiU9A",
  "key36": "YTavEPxgF4gJjriQHABqNEN5bRDYr8wbBV7fL7oDSwKWwDEUjDeiTr3uB2WPoahcBSsFpF6BKhWxoPgNQ8wpSfR",
  "key37": "ttmadhxNXz728MChybM3j9YuB3LCG3PV1YgPcVbyUmoqNLUnrnPcEbC8VpRTvzQWj5pFEgE47pwjKUUR6p4PQp1",
  "key38": "4d9wKcc7fvAUCD14MCMiNUskrgnrg3pcnyBpeG59WE2t6nRgeRmsi1Tjp2A3vuyPRsg9W6nZDfnnXdy25mv7XsBo",
  "key39": "HV7Kpy4qr8niUTn656Rd5ww2xpdPApiXxNXC1qZkik9RjZGddMPGPvpQ7QeXDuwrPBwSBbTDFrVXcbv6R19gs54"
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
