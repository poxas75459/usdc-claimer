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
    "HMFeZvsRYW5ercmagJAMQ52rBtaJPNzBc5nALeViVq9yVgVF9YYKdqQj3k9q9ndj9KQZZhmvPa5DgiikKXifEdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNsNaEfenAnr6Sq5WYNVSWfyacrqMN2oorie65AGbP1Rqmi2RkKUf2cqN7EtaLX8KRuTzkuN6Ah6d8K9FVAmo82",
  "key1": "4rs2y1Dk1nmBuaZ5h3cSMGcivE37csFBmRN4YBsjEwcr25QgrJjzW2QkWDEZqHdv5cUqWZbJ55CMvbc7sBUeVKD1",
  "key2": "5i23LD67m6Q9VoQChmsNPXaKavqX49LxWXJGATWkQ6TSFkNqMRkUq3BpXBEmoyCGcVXCjxanGcbGvbC8YqzMMgmD",
  "key3": "2kKF8TovGyErLa4CFroWYdbBC4skW2Pw3nHodeaDsSPG6rdMd5988v1E75qq6cq7QmXwECC9zXcTUxW9wjAuscBm",
  "key4": "48zawfraqHcpNhM7FXMEJEDo7jM9qNSVT383drQAaqXMwR57BAtGnLBF1CY7nV3cdZG6UJXiBskkn3fDDe6Hvy85",
  "key5": "4RSfhAwoLTztrEkhgsCCXuNGqsavD7oHidrQD6qkMDzaZd7nFr82trvbrGgTDQttnkBWK7c6pRiSeBUymMRXvZRZ",
  "key6": "2i6Zv6FBvgUP3ivudEdeL9so5oZJt5wc11uVSbfMpJ3avAnEp6ECcE6j7CGPAo6dxQ3YJJ1DBDn7xzfUxiwS8Wt9",
  "key7": "2KuqKK5idWCfawYZuzVXRC8DsoKXVBmYK3V3otpQRQGuDmVvmGPiRW59ZmCE52rS1MkobH7cDAdcNuUwZ7egq6Wy",
  "key8": "3cBs5SKMYdeRczSweTHh4kHmgwvS8yFFxeeEkSHzEN9e9bKPARL5bWT1Dq1Xg9YRUdr6pYKKAvTuN6z1drLpvZqG",
  "key9": "4G6rnSfPgCvk5tKWBwherdVSTHZyN5SvAZBiJoia25gnS3Z2VnQB4GJH1uHRevCiQg9xpDEo6hJZYzHRC3pXAV28",
  "key10": "PzygUHWjR1g7qF7H3FhquQ14sAg8mwoJqvScZWJr2nwZR4e6EyG7nMsrEg4PXRgAsQvWKDuHHPkTyB83SNLpL5P",
  "key11": "5q7oyGkrLDddm2bSy1TYeZxTEKQbY3gLKpE5Wx4ZErpsUhZpZHYGq1WEdi3gJTC8xGP2NsTm1G81VLBdCRYRtEgJ",
  "key12": "585fKu2PBq91uVaayEv9F7eC1EzKFH33XYbTfgMp1pTycAgAWg2LSjzyXY4mCpsYH2XAbSwR4CKYuBraXaxpKuot",
  "key13": "q82gpzr86xPwoz77ZJLPqbEMTtKUySL8FzDaoqdymXBCaV6Y1DqeWGkpAizKk4F1nox7FKys7niTCBjdvXyRUnr",
  "key14": "38hyVxHgyPUfWJixcf6xAaQ56QpSjEBMKoMDDKHEzv2GGodxXV1sJJKvTq4pS6VMmT5Di3ciuz2FoSq7HwL9uJoH",
  "key15": "2Vn1YcmmGMUxwJpdUt4DVMovpmfZHHcT1svJt7xMfirjw6VyjyGfwpEpP5DSb57exzAPgwXxEShzC8jPBZmKgng2",
  "key16": "4gJHazruWreVFvDehA7BMpouH2ujveiypH6KSggPhwJZu38urkLrQAtNNCGDtxFrRHUHuq8nYj2KVF4H5wFDg9KC",
  "key17": "55Hj4echyG2FVZrAayuBADt55P4wmB4WtP2uFCWARckuCv7NG4CEfSeCUGAxZ4dxZrYise1hDyn38Qnm6HPru8D2",
  "key18": "4ywN5452XzAtXMz8KfzZtf4JRJyrBCmJrmKvYbxvj7qtrAwSFekC1u7gkwng2Cfg3HZneyp9mArUAWoRsJdpkgd9",
  "key19": "PFtV9CrhHsUKrrPQoxafTYor5AGBWAu6z5x5CaSBZ13LxRKrMqFyXSm5793DbaYdo1iEZrccNDToHq2RZkreRk8",
  "key20": "46ofGFhVDwXDdk7fScZ9MHRsG1dfu7PZBB3DTF5vyQw7vXgNKcfjiDJmdJ8as6HAZ8nHmN2uaDbhFVqvJd5KscaJ",
  "key21": "42FRyZa5VjUHpcvi1qwo55dJz4W8Gc6TF1HzDs1ytzuYipnBaWZho2F1ZLSFygFjmJH5QYCJgemBPFBUnMeC5P1o",
  "key22": "2LWcUva5SaMspg57zzXL8gPjL9UZJqM6kRSDwVaeytwCszB1QWiuPfTUowBMEk1ADgQEBi7XQfMJVe7sNGFMnyiJ",
  "key23": "3a4PAxQHFgij85w3uCB1FABcVz4HEidxtgJ7MkevHXAUAXTBzoRgUQDvWVHXnJsc9w1VpD6wyhUAsp93AeZjTWeU",
  "key24": "2vg2QbsxGi3ZVGDgqXjukzhKFVCDW6xi9zAkPdMM4jjJdmevT3cGHNuik6i1NQ3PdXvKXLasTp6Rp7EZFpwSETPz",
  "key25": "4MdUULSixcdfTJNHzGmk8m6Zt1n7PM36dLm6Jo83fWG2pqQksr1ydEMK19YB22eT8sHXpBZrgrtVXqvxNnRNpHA4",
  "key26": "3hAmfBBNapMDPqrWTMMKBw6dGhyhfKov9onwBCE7y2xBRdMHxtNvAAHNpoG6aU2b6wsj1fPVLcbQ4oTMW63cSbEC",
  "key27": "4sbYgBE1T8s8WTib9zBuTABAUNGZSknZzA5PZNM2mNaWMKPjcz9LQbc42Mqengm5gFJhD5gzbxA62kWPoLJorwNi",
  "key28": "4z83Mtvzz8HCXxhuaNAPvcCdPrnX7ZieExVSX8s7ZXJRxn23VR2EYSQMGh76grJ6U7yaLo2Y7ZHJZhxaeWrMdp7D"
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
