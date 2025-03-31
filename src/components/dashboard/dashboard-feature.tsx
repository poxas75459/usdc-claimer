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
    "3oJZYcNu5QneGZPvoswG3wwvobdQYa9rVaaqCdRAyVdcotzS3GKuPfSGJXwwbHTAGTd16hwVGSP4boYyxgtH1SA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ER1HYzkftaBmSC8CZtYaJZzwMxV85SEp61XfFhci6cnMqDhfoRaGdzadf11kHE1iagvC5X8zPBVnmC1fpVw9iXn",
  "key1": "3ZmMwPEMDEa7DorErPyoGYnaaecdyZY31EmAyhozWVpBPYCRaNQaGKGbf2xXbhsC2iExC3CpsSiHfcwUxvyDvzLF",
  "key2": "2PEw1sZa4rWF2wfUkbDgZB9Lr6YUgNj1zKDdPi46Qc5xoUnkDr5Frznpyn9q95z8TGZR8sHUwoaipUwZBQB1yQyY",
  "key3": "RRHMhv7fhpAijjjRayC61QksVfGsysdFZV5smGfH3kjQAYgfd9WtYj9pgT6agEakPyuvvnuMXG59hM4uyMzkCg7",
  "key4": "5vhXbYBrdJ76L1BWoFQta4S5EU55iEjfwyeGcJbHMdMCGTYTPnEheqnaqG4koVkvkQeWcK6wYgp7b9vURhyVXmrA",
  "key5": "3EsvmPjrKTzNAxx5i54yfEV8wpeLcWNqjyteMxrnDXxnmjaKihGfKAgWEHye7VccVaUND3zuYqTnpQT9QoGhNxwS",
  "key6": "2va65zxv96ksY5vdnDRzDQWJ49UnxZsMWTx8TN8j5wEGXrSUdmxk2YGhy5nmy5cJ4qy3Vf3WPojWQfmuoiUASmmJ",
  "key7": "FaUqQ4PktHQEFchiRmQNHpGKMmu8kZLVZFQRVqHpm4ys1mDbFQrEQ89KsBVJK2XW8pvN48oXbUgtCNM6r1R5ePv",
  "key8": "2S8oDNsghRFVHdXPjfZMnveZjeAEfUEucVGhPFruxV4nYBqbVE9SJeaB2CGb6TEKsbiAXVz76EChix5bWoxN2J5W",
  "key9": "2QzqoGE7KrMALuY3kYFghmc9k31GLaunUX3g8NASe2DyVwRfTrgNpNxo1HTSyzhUWifhJDyHNLzDSCVjZG9xSx9E",
  "key10": "5UxpvNewftthraQkhPvVrvzY87xWAN6D3X7KYF7CBFddN4yNgBmF64PPvzRNeFpkgr6G6LW3H9AFGiyKru5VeVvu",
  "key11": "2L9edrywdramV2W9XiYQrQWHrUGbjF1hYAbpLYYN3JyYWyJqKjHwJtowhoSBPjLvFvuEQ4Rx14mWW6sWoq1MsNVx",
  "key12": "5EkbAm7CAc2Dz5uq11ALFS1Du8caXDbLPPUWZhqmymtB4keXNHCyHZxBzxqPX7v9YfaUYQS7Yy38oXj7NqntrnPY",
  "key13": "4sm1w8Ge5QAPvZAHxHJ8nEe7u6wjaLgqVvCue4spaEn6jEBK2nzuUKZVbzPcCn6h6JFaFWeNDYiyXFCrKyaWg5fj",
  "key14": "2WdstFDmzYUDrJFAUuCsVZE931suCWMpsPyBJmqCvW2nxaLfWQWm1mqRXpgvoqMEEpMDVFcssnTqU5CcjNgp7xig",
  "key15": "5nM2LspWU2riwESjw9E7WLM3fxQCkfZHw3wwgiTeWq9LPKLqkWZ8uT96P5KfksvUwXG3jhRtsVb2amfix1iTWwqG",
  "key16": "2R1UL28gbUr1SextjaZgk2gHyNmMCqvzMYWvrZ8Pxr8HRvLEmmMUFQXBodnGNWgAPZSg3cCt3vJNNYxoDrPXkUu9",
  "key17": "4mM9K6igcqT84NRjinAnHnzcx7NZLyCWqfgpjbYE1jbyFP9dTJ9P7tdWjzryVT2f83k9ujxCqnmxUyTC15zQyXhG",
  "key18": "58eCejyfWXaXVFt98bEZQzaegPg5er4Vqf4mefxGzUbRyonSBNuMzDWaQMqQjXZj5BSgij4tPV6YPeadg7Ne2KfU",
  "key19": "Nbu39CAxa6wi7nf6H3LjynN3CfNFJDtKumXRrFjVefpsNjj9pqXZu7uHkfGr23d8iYv1yL3nUjiCJR9pRqhBhup",
  "key20": "3rpHc9Pdwh2RVYvFThBtThFd8uHQiqrvc7JEQtbfiozYNvZte7sKGu4okQt7BdNwRxDDoxN53eQSM7vJ8UsaYT4Q",
  "key21": "pQk2UL5wErhCntZGYN69SofrUh3hakVyqnXCgsiRxMb7KQLY4JxHsXJ2Dxm8GHWQ4Q8NpQ29qXRZXhSrbDfwLSu",
  "key22": "5zpupd9vhAC5yVPzDEPUQmJjyE3fqRJQhqSZzLkv9xKL5J4n5LW65ak3WcjacgjSiDCTuyBuTPfsxHT5hyC2peyQ",
  "key23": "VnfhLpFrebLLeHUBJhBXniWPcSFiZWRw9t8Ma9g2VfrH6vDBMJKkUK9Hv4YRuWem7jUYXXLe4d7hpRxTJrePf2n",
  "key24": "3JzEnTbZBqhagYP7ftgPJ6UBnt3eTKm1bAfQefSLnipyr9uGtcsFA8Py16cGtRUr59LzwwcXNgmRTMyZKyoH6yH6",
  "key25": "4Ze7LgJLM3Ze3xMv4ED9SRV5F7G9RVkWgGbmigkHTHoVjWtUgQGncvHfCkdPAquk5ke4S2VwHh2UMNVpuoP5F69P",
  "key26": "5u71ATjnJiMyQyaWGysoRhPEwr9VRFnMeDuwKwBHgAUdvDPMurYnyRuagQLfneNbCt81628FB1Sii4oGRFNuPFQD",
  "key27": "4zva4kUSaG2Py7aN8iwgAR7G3vTN4H1DncZGWvnixthndLMd4RDiC9G1buJwMCfftDiysjFnC31cuYuVwttoa3qB",
  "key28": "4zNqtuzJFkYmM1fWr1VyLrdgzMdYesH1eJDgdu9TLFMajiPvsdhePEBX58MrYGryUWd2HrYLds86bVqgUk9sgt6h",
  "key29": "3yqsratSRWzu78nA3HZCbev4hzbkHZZw6YBDcxgtuTuVZaiuQnJXda8ndnnZhKwaaZSZL1CUg4J258yoA4SbRQPW",
  "key30": "3e8H5M3gZ1HCGgQTmuYgrkZJLC7jj8sLacnecjtyvGMzTspSMgYUKeErNc39f8bUbgzTu3huYyJM91npRMaMB6u2",
  "key31": "2yiJdtbWKzbvruJhtDzH2SG2ELsZ863yn7hxyvmDsC75H4rZdUKgfr5Ensu8BJcTVPE6x4m8Fu5jK9k7Trdv2MGw",
  "key32": "4fWWmVGd2SaRHuRQBxRVcXdfhxLdnMxeoGLo5xTY1kxmphLyQMYGyTenBaExCTbvMiJeyyprZVGAzC2PQHsScVPJ",
  "key33": "VHy5XJKHwApwmev5muYX3xQFBPXGqPR6zwPMAJbFQrDvBrFZWaPYEh6Hbi9E3NpjReGDPbFuVTtjZg5ggf9MPvn",
  "key34": "5Fy3EJkSaaHLiG1UnTrDPma8FPiSrYSvEHmRDTJAfZNLw626GkfvTpqdWbwC3eZLEaaEdVyzxPHaJ8tpcyczuhfG",
  "key35": "4385BGjjHgrD6TzpyLX8aLBdd7d5tbrbK86trzSvKGMFUBa2khV5cTdiMFdovfGJH8n6uXQ2UVd4q7K8TfKkiuPz",
  "key36": "ACY3fkey9A4J2csdrZ9eFCfVun6vvf7wS8NiwvuADKBpvkmtJM8WeCu29WnJMHL2KZZGv7rFR3QL5VgzMNqyw7q",
  "key37": "3YnYjGmvV6b7t6ijMjpHc4dsHdG1F8RjbvVCYxQeWZ1VZjvvZbtER3goEuFDWuUHEZSBnFW8MeS2rZcNjeLyVzqS",
  "key38": "5rE57Yo8WZwzJ2d6v9iJVLFF7x9VUh8ei5eF5oa7SaRuTTdfHiDEPwBQd7KWmKHZ2kNTUjwGzJ7gAvjiBTwgETja",
  "key39": "4CsqAHz589wVdJy5ncSDAFTGG555UVWxpeWsqNTLwTGS6DGGqjkxmoiw5EMoZkQSai9QEwM5Q4FjiHCKouftTPkL",
  "key40": "39c8tZLtGzyCcfN1Y7fzYfzTvRdAxMEi5Ehwj2ubn4woSiTgZtBaNkLw8naY9q1XLzky7iiKQ97Z3H6C91aSJYsr",
  "key41": "2SpFYG8yaPfKPkHr9hX6mdfGQDqsNVyJSFJgB69fDJFPBFWRChYmBL7hwrjxAMmrKDwZfiwNP3mstPw68ZBHbVeB",
  "key42": "21AUC4CkybQH8Urg24fVDZhKvJhfybQPu6waFyzrGkXcVXaXRiE155CP5dVW1R8G9GasotGtU2vKRH85kPgUGZhb",
  "key43": "GZX9oZbdmz51fv8hnCnDDRmzVBfde9AL3o83uiN7R1XVFJXJWMDZ4xB3BFystR4GRmrjPUfcs4DijpG2gZq6XB7",
  "key44": "2uEWSyMaxt31wUe7SXHLHUmcJGWRYF6ac6LZqogjCCskeSDH6VLUywdkPBwnFKZcp49cQaxb1KzFvoQw8tmYZ71m",
  "key45": "3yA1uainJLWkweNQrsUNmPYTXLqw5k9SgbQf84AEZgPLWLVxvfm3p1rx9sgvSud6zXR9Y7nqp5TDdA6wWa4e8fKy",
  "key46": "kB13jUseg39ZiswgrPvgfA7EkJtj16LHitkTgGqm1DqKJNd7yYEU5W3JL59F1M1eEX15rtZnTBTbzMFSGv5qomU",
  "key47": "2qzbLfXATpSWyWUQwxn6RD3fDNZTUcAS8BHxwqiE2eESV74TBEdtsKPstnPTJeJyH4FToGMtw2SRKWxTeAjoc3Bn"
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
