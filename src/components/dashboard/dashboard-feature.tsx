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
    "38ie2gX2AxGSpR73NSS7H9pYg9Wb7JZwc2un8uqirSEfGPwtsjNbPAEynw21RUSc2qyiRrpqm13AjnW57anq6wWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AvMwEKDyCAu5kczuZ1nmCh4XTG1WnR1zCXcEmFWnoTAJKWDr42EZmUCpobWaMtJGb3mXhwPFnGE7sa9TxFgKyQM",
  "key1": "4YwfcwAePzv2QEXkSSrdgvRKBEMWtgDMvdnWDsBiyyazBtpojKfDPAMZzry3xHGx14MNicgyFLvDiDpCNFogCU58",
  "key2": "2FtpWFrnoCKfaRRjmw2kASpjkmnL1LHs1DDETB4fwSStpSS8pjDEcmgwP3wLf4KkQpLBfjXwY7FCCSVxmqs1FKoy",
  "key3": "vPi4mrpGisy4PSiNjiVstiuxRkDcsbv9FyrJxmkkmiqGaQSg9ZfoGUzhfKGiy4xW9pzdWSGFQEcTK2TW6TL9exN",
  "key4": "5L2BSB7neWWoe6ERbg7a6cHnu5e2FgdZRt2XvYUgwu8JTFx1J4QcQdpnCVact4dYc4RZCRXpzud1VYxPJEnKGhaR",
  "key5": "w8z8UxdGCHaHXakuwYUjbQCm3wTi5VMvrJEBTuXxyVxF5MX4i5edXzmQzWcmV8tQii6cjSm6jHJjQa5hobr97tZ",
  "key6": "4L53VZKqNUpMZUZMC98XUjyLqj3QXEgAix2zDRmkHsLPLXZiZMovbLAPXFcvPqnirNMKkMnv8QWNuBJPHG6MnZnK",
  "key7": "5agHVkgyNAZDyAMBfandKmTsfuAeJqTodm2LmeNvHwKhZghnv8kofLSppheUrwHPfHjHF177WRyBw7i69q4PVYLc",
  "key8": "5ymHrSua7mstbh9Vqc34PTxMJPcgR9UVq48yjt8gDapspfRB6euAmqMuYG63zrdvTxFjR7oNpTZeFFGAGZLFxNGE",
  "key9": "4eQiofZpeetHTTnnWMi1dfJqUEN6Gyt4NZYypx7zRrLXAyu2RhZb4RX8reSWw4dExZfkm9NdrFcycwcGmYgejLw4",
  "key10": "3MdukUTtt5Up3iLuawBz3a7WR8bsjaMTBe6bVkEMBH5hMSfYgpWdRz4dd5NjJAT4JTW8kxB1uf47uu8GKZfTpNXr",
  "key11": "4HxhUaXCuFWJ1zfJfi8fUTkhGnsjbcVVEnVxfwm7TRjCfXHnJuzYHQGcuEts9HS22KxeHPsEtq2iUhxf8JcrbymH",
  "key12": "4pPfd5wTt2JUb7iFmwAVFCiXiU2TfHwF2JfLE3y8zhbeFiq9F5c6kARfGwX8snnBMhWuYSXn5WtjNBF6CP5zufMg",
  "key13": "QK3Mz8yEygaYKPLNZtNLhSb7gjR84QKFrCQP5cC124wdikXDhNVStEFXDeZCgni5Y8nksRaFG9Ga2x19v4kdVph",
  "key14": "2xmy4zpwBcm1yj3sGxjUPHmkbR2Jse3u2ViJ6JeEDYvC6z46H9nFyPrCTcLJuSD2mAPNM82nQKvgNGD4JbWJrSyh",
  "key15": "2tLPZyyLzvDW16Drcn2Di9XDxep3XrR8uZXVodxUihwerhcwz7n3aXaeAiiGZHnG59fXBsTM2pgbryZw7gnhSVMW",
  "key16": "5sXUTDgkFfG3Lj8rHpcxk5vGkk2U9b6bbvCdnFtnE7k6PQBR5GZtGJ9kEDVnSvT8aAePz3QvmSquLp15wYD57fU",
  "key17": "2MfC7krrNwQ4tdpG4tEi9MXheTni3n8kYU6pnyxSkTfmz3DnoZXEDF6RL98aWg5Z6pdqZ8x78Z2oeo4u5TxGDeL5",
  "key18": "5jTuytij4hgMJ1jxv89Ltxw7enZTLVKrrUS3v5SCX7LW4HVaN4s1X9JwbW1sx4rAcvSQorVJBcuxVSEFcU2N6632",
  "key19": "4dQsGbJQG8D2Sq8p6aK3QzrTEbN6xjLwQ6fbMVCdsznCbo3FAE9jksQehxXcBoLBZVhXW6YqpTBut9cHvjwRaLLq",
  "key20": "5xdzR3bBzTWen7U1iYRnMMW5VXmDFttbquwFKhrrd5cvUMVKzWQ2nWvnWXd78H8McnfKox4Xiqsf4uQoZDhtsrkK",
  "key21": "3GcAGRBN6h7qwYLEJwexJHxd31454orrUoDDYjWZHCpgZorkyLNozti69hxeJjeoAVLkbWYxw6Q1zoU3cKAVEowV",
  "key22": "4CZCp5zSUD5rBGa9rHPpmq3RJu7pwgZv9x5hD8YByoySTYsKZH9wmV2g6iAVukk7nvWWL5nidnZr7LVbs8rYBgdv",
  "key23": "3u79CMAiDTsfZqjJ9pmyN3vU1AdyDNq12zoQ9RVNM8CDMubtTXftVFRDCmM5zGB7SJTTuB2yyRwJn9E9JUjkm43b",
  "key24": "3fyVDsmxKKyYCyTefKCVYMZBWNLX69MCuiZL5Sjv4LB7urN6W8Huk2JSPsFHFiM8pHvyufFNBHyqdsPLvz1V6Efr",
  "key25": "5D4yyaM9FLYb7quHGTCPUUR8teUoCtLxBkoxRDEdzcoUfZYAXE4xHf7XzmSkWZg17xVe14ufUHjFy1Tz7MvuiQZF",
  "key26": "48btgSn6xjmoahuhSKXvaQPUVX5DSDbsmnmRjzaV5Cwj82vz6wtJKkyTbZrbiZXC39LmKUUKwitywu9GuvXSN5ag",
  "key27": "2nUm4gzMLK99W1YkfwEGJ6uRcz5UdyjTrUp8PLRVRXm14rYq8Qorti4FXdCczFr3MdU1ajQwZe5EMrWHp6cgjW3Y",
  "key28": "33woSU2Bdq5tGVG2q34vhmSWiV4pbhHuz8UpZuPLMFHhJfDhfoYhd9kmcsagKuivDewQ2wxyLpeudCxgvqWhLTuS",
  "key29": "3xg3t6s82aJiHWGKUnvvkHgaWE8S3e1ZoxSdhPEu7xqoiiFhhGoDipg5EhGbcbHRYzXbJ9XTVbk15hYuoLAchRc1",
  "key30": "4tXuGEbcBze9Jxa4Ya2FBHBDSuh3Z1vN5hRa6o6SxEzRfTnhbLfMjFA5oJPWyGdjNs2yiu44zbEHbR5MY3iVCFkA",
  "key31": "5ATfGDeJDPPyada9ySTHqNyfqxLVwdcPUV7CERBMisZVtc3Q7kgxgjhmd6cLmwHfAXyx4WEjcrih4XduLaajUw1i"
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
