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
    "4QrsxHCF85RvjBJdf3m1AwFWXkRDTYJGt8RSGvf5UZM6gxBBuKTS1hXhMWcc7VUMstqL48vX2a3jeXTfTKsWyxrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ye7STzfq5qVm8fQdPZ4vWszUw9CV7dbaNyg6vf6ZBdUqnjctK336ZQPrF68itDvN5wWKCABstL4KH2s6tyioCwL",
  "key1": "4G9Hs5hphSdW5bHuWxMiLP45Fiisga5BTC5zaG77mRohppoDM3nrhRmiaQ774Q8LtDKViKC9darcpfivwVnMaqBg",
  "key2": "PqGS8KZjm5pQBE5SDq3pHgbwsSE6m4ncpZ84mXHgDsnPiPtborsmyqGTgY4Bg6BfHf1sTu7e3TFPzdBCLrC4YVh",
  "key3": "m6NcPHUnMkgn3pcBDYehZ1ZazMrRNXFYREkTq9nvxwcGvphyv4HV8wCBF2A5qPLWCRboRR3dxrozrtqpY93KGD9",
  "key4": "2TJ8v5BfapFS9CJ9uSpYE29DvcvUfiKH8ppCestJ7VQCerpHND2uuGmLd8qHBmXAnd4KEZqFm7Y1xVYkx7P64hzJ",
  "key5": "5CLn65SCummmxcDYKbBCbojwdMgUcqwBppVJFEJFebEc4UodoRUYCQjQWzsnztz9xLhxKohNofVVg5CoBqvvYFov",
  "key6": "575Gh1mpfedb8hHedS9enCvoX7855MLTZudfYAXjsQUsYxuQhrwsrR6q6Ki936wJd5pnM7NQ12F66XPe9HEY84uP",
  "key7": "3xtX4LhYr7aqSF9itURpSvZfePzMfa6V2Z4MPVi6bvnNuEgvfBYfKxQGYrqNGgLGopweVRVdFJodXX1bKzoh565j",
  "key8": "KaX2VZPQyoB3Qd3TPSegTfAGKkTk5PZMhmUYb59ef8LMfbV28u5FJxZ4qdqadDx8iBXrpM2JyFrq79EfuLUNM7h",
  "key9": "2C44wZhuwQ1HEV9fPaHwND8dWKMxvCcgMeyLwkd5AQvp6cyCEMRksLCoWTCqMyXb6is1TmQyiD2XVNpZLmqGgsCp",
  "key10": "3LqMP7n1WPHwoMWB1Vv8ZB7vJP2BiD6rpgrLVYsN84TyNVw7QFapiG7YSBPbFUMAe9pLvk9LSd8MNx9nD43Gt1r9",
  "key11": "4CBnyxiYpB6wih4pTHh61ZaMRSh1CbQVRRnFiQnz8GwPAmbYjvPMrPsYZxHSaGoBDVP546KQvh7kZEB552umZUNY",
  "key12": "3SumyvhMbSZDah9bd81aKbBJYLdmzN11B6mS8Uz5kpD2pruhnMVx9zNBZYGJaLLdykb9oTDYUnzcSCuEG93yoWaf",
  "key13": "4WmHXzQJjDsBqFk5tfKVTeycSX1bDLYArS4NBcVTf2qW5FCinMBWUs5KTFFz99Uj18h9UEkFJfi7C3N8h7LagAVH",
  "key14": "dcCZk8kCAgMu8zi2VbbAZYtEV2Dmo1WfHArtGNS242z9AhfhEj1CQYNa6Lm4zQBTYnpuoYPzizevNjMMSLYrahW",
  "key15": "4GPnPDX8iyi3KQdVm9gTUFKo4GahUNs6k2E5htaJs3qMgo2TTSkuvKVcgjacYCZHv9dnhKB9rWbaznvVCeg8ahJt",
  "key16": "39uyDhmQT4QeME3jeL1utfoYjGAkBiEtjXr1tDSM26m2EsbmLwSjCKmqGaQkDkT4x5FyAKd9PHEp3Cxtg9PU4C9k",
  "key17": "5Ccuq4jm8vMxuf4ykxKHQnynF8LBia9rjAcSNCtjDURLAmP8sf5ibtPSHqr4CmHZMvgWbtjD3qh1VuyrY8shwNsQ",
  "key18": "3xYh6KQRXLdSB6v31Ecwi9az5NsdNxpGQZmu3jSMYpttAwXzuYrJ1BbVnTprgB7qpi1t2XPPa54nqmkFsaayviTd",
  "key19": "2BHHosWBqVSYexafNc9uFfebrNMJYvJMHovqjjeCgp1LDUmZY6M8CFNNh9EV7GgoPwWD4Jvny6p361MXUpnDFxY3",
  "key20": "25G4ScBAuFRMjfnjFdgYikgytz5dnUbSxMQmVmFXg4BdYvGtUvDyMP4iugPgdCTLRQvmwuEmsNFXYVjxs6QRTavS",
  "key21": "36ZvR1VpygubYTfjNFbft4zN28VytiVjbyQmtrGZTpLHgY4ra5uhKX6HGyqio1aASBw1ikkJEu8UJmwVRv4X8p68",
  "key22": "2Ckdxpz1w6WxhYQoVySRKQMg1c7a1oqTrYezre69iatFmarsES7gByKimknXJttHVksnUnVo3XGDMZBnMp5e8pZv",
  "key23": "4EyB9ReLp8W3grdTJtWsPmZSsQZ8kEBniVqhfo5VMtpefZUD7MpZ87s28vUKd3zXJfMdZtBo8XpoeqW3XCsknGjN",
  "key24": "4VoNU7xQ4cHSx4D7a4Xu2eds6tKALQW9qR7dTVqTAJB5myPQrgThDnGogQiTHEEe3hjhT9b9GwVL8TnwnkoT8xsy",
  "key25": "5BeJgjZpMv9hZJLcsDpfd6SkWE9yEormZ2pS2JiHwoeUAaNuwm88398YNnXsybnR9fcXhNftaRMFdVFsn17XydVq",
  "key26": "2uxr3a1qSuw51tVbt3BrkfK1wo8sbbDRVN216ouAXu9S8LKB2QgfwSGC2qSJrGtfXhfb3YXLKLLeDA39F83zstS3",
  "key27": "uBnbXaeyJ9Qpu9UzAaxg6eqifTyY4H96QcH5oSLqaCa2KQEJh7VAt8QU2XkmmboQV9GfehkKonTwoJpqNqsCpxV",
  "key28": "ud9TL1mfLHVMRMnnsiGVs3fjpHQUP4RhiVwkL3KsBT1vbaAubxuiMnN2koTh7k65bQcyE2AFXcqiYV6XNBWKWsu"
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
