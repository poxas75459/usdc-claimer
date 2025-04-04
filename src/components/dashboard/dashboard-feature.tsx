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
    "659X1uVCdVZWgUnMh1gCS6MU4Ew1z9UCbDcAMM9xLGLb3UWsZwmhcqhvgno19TueQwPGHkJ5yHxfW8j7RK8qMbHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BF4xuHjFzLiLS4Aimt26ipvaBC6FrA6KCW69A6AmUDS8cf6yrnUkqiQjx3DfzC8PsJsG1eYzdsT3Sj557KiXBaE",
  "key1": "2oggHAVC6pmtQVSTRuaykfR7r8dRuS9wSs9ptfNDSjbp32UFE4PcuUsupRZpNMvEaK6W9HoZrT8Ybk2yWJNAvLzW",
  "key2": "4ZpevjeUPRncMpzg3KHNqrF25HEoePgKU78PXrmfw8PFpp1K77XLzJrg7Wu6VNtnRGKeBz5f9KXbYva9Mgmg375v",
  "key3": "5wDWNeM7Cq5FuKcu644DH63eBtn89Ak3KGWWCZK8j3gfKJEhLgAiihUdvDkAwKwxdtd6uPJ3PDs4AFdaBfN65uLJ",
  "key4": "iQTkZAfZByo6Z818rmY3HZWtVhK5wn6RRcQGCs7rq4fR4CaNsEPfEW4pMPqaY7Cg9vunJYSHSQ2FUueEdq1k5Ue",
  "key5": "3ZSqyCozDXk5LE7Cef88ieRkDtQkbRsCW2Vqmo3zYCCqpQEDhTvECcsAx6f3toUTGHHsucd1hHM2i9UbtimKaTRR",
  "key6": "ocJU3uDuQaFDRogkfqJwqMpFLZ3XyuonBfqVfNfyLaEK2mRkwGxyka46z5CDvBvLb79nwHFRit1TxEoxdHyEZhH",
  "key7": "2M8ynqhPpXvVZyupW8hZQ2UUcuQ83TCQCFfaeAK9NC5cw1NtEKVDxARcnEw64VLmxnfhubdLfUYcc7asNp6TiRvj",
  "key8": "3xPMEBqLNLXUnZUrgoJ5zSBERD84QhEcQCewBwombFPq9Xr3AX2nEgKsxqRBfzzdGDZTWfXvL8qs7P7qRTJsTxx5",
  "key9": "3sdoTxabNhqek33aUGP6pnqectqki6gBeCV2odE5jjym71TP9TAH9SNrAPrbdfxc6j2tjP6tzMg6BF1TonDwgepR",
  "key10": "2uwVyT96GmuY5vngn7iYquxVoJKgv1z4BGgqRZubAD17XmGCA3PMUfLGqrWGDGSEc4UJ8syLXuLJapRTizryQDcF",
  "key11": "uDr79CsgkvrXv5iBBToxfnrX3VMUsTtS8cBJsiufokZ3xSvL7KL1g9rsv7JWhc5Xfng5FnrHWD79CdeQq9NmNPJ",
  "key12": "63K9EZfUudCR5GUVEuwi9XWbHkFPD31D3bUi8YwuzYtpptnDBuDxUHNSjhz28wGeciWpsCzy37t7BAWZy7GT7BXD",
  "key13": "59xzmZ8bYvpyfsriJFZVn6jZLjiN1yirKYDED8mTUmyz4MBPq8YZkRm2vkxa6TPMpicZHvggsKhsoik7m8EMTxPy",
  "key14": "5xTy2hAm4c1HMAebBMnRtmPMsPZh44Qib9bA8FfbozBvxG1t3eNjfRHbfSXbmcLkwkBxrV81dH5y4pmYH8GEsy4h",
  "key15": "2eUkTtJbxMqz7qspkJUZdnBmzsvnCBVc1tegHvxggdSLThsYMEV8aZ9Js53CBYW79QHo4E9KEmQoG5jJt1Z85PWG",
  "key16": "5RBG688Vievz1uSPLDJxgaLFhRFogCMZMHw6e4pfKUzGTZsFpFQBfWNeEfDCCrej6rtiPzTrZZV4b9Anj3ecaK5r",
  "key17": "5YZscoQPHvsLLgy6AhEow9sMQxdnzit7ayJ6tz2niphVEnzj2coqS2pkzqoYP5WvrpqB4XufjJ7QhWCdpwdp19qt",
  "key18": "3W6ydVVweNzX7qKo9TFUKtaebBrHxupnHzzJub3L47DzHA5GavHdATVtAmWsgzg5NJntdeGEfoLxdDVvTgpuSDku",
  "key19": "5NLeFhhjY9yJrHGSuXdqnyiud3gVRNDBpMv7CtUeC3obvp3X2cTUU1yCrvnQoghzRyFErqAsECzq179dWnNJwPjd",
  "key20": "2BWYJ98We3zyNXcrKvMziX2UvHnQj4DvJxyzsYSN9RkpoPDo5QqrAArSN2YfFybn27m12rJVfdabLcv529cE7cSb",
  "key21": "4nvinpMGzzhbspszX8Nw7EHeWZj6F5tRp5FwSNW27AmmiS91KRDhFn5U43yvewdBYsT17FU29soi3geoe6RCYRbX",
  "key22": "3zYFuzVbnL7JivmbXoZEj3Pruc31Z1i7kfBXrboCjfJ3fxHhNKMog1WtsLfPkZdckgMifjDY5YcDqbULemzSQMUD",
  "key23": "cNAFRTd2UVPs7mWNLAN2Dxp7r2x1FhcNxVVBNPd1bkEbr8B4HdjKUcBGqjQCf4Bd9dVSPbZoCAb3XWxYwaZLkPf",
  "key24": "Pw6Yg5KjJ4924iDZHsz48y4GzzHSDiepxe6yosUWk19bhfnWAN8hehoUmPJQScc7jUHs2nTcm6FMa3QUBQ4cg8w",
  "key25": "52QUkgXXdDzdyJFTHYtoNwbJb2C5Jy2VjXg7vkMdVghPTusq7jYjVWJnFXQRvDjwVHozRBJMWE5rUxfzb3UPpebE",
  "key26": "5roK7D7AGn17wTDQNm7KbM51MQpmXQnERHHYv6HMGKM8TeFo8oi4r2zVaRHVZY3YKeDkSoGUdgKbRMXbU4QemZQm"
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
