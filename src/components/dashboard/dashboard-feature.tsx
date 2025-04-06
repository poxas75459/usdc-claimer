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
    "2xjnCR1r9oCrW4tDLXPrdhHWoG8eNY1xSWPYVyhAN4YBcpKE4dSZh5S19wrvUHAws5eHnnqCJokRco3nVBYqHCE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VbCgX5rV6ih5xZjPhrvmbFteYeukZdjJjQp3ZxaKT2LLw5uSEddkwnKMHvuNmhnADcFabxqBfMq3XteoJLKQnf8",
  "key1": "3oDKWhTBwbGE294bF1eCNng653moQ7BYZVHZ3JiC2MJTw8JzJm5oJiUd94xGa7T6xwQcZHsG5YBmgxBZBZpRjmpq",
  "key2": "54evkBdTetxfoSEEpseDUZMKPJqmPwArJWa4YouJzFmVFowKm3ZgaXYkGyvL4fnG7oa1bpzoSSxrq3dmygfWcQR6",
  "key3": "3Qa9xAJFSu7gGK2qrc94GKh2GRhzAjJ6U9Cf3ykY8wLgAPdSGnrgsF2T7hmRLEys9pqWfrpWmLqu9CmatGLr2cct",
  "key4": "2Ud8Yaoa2pF1aZRsFbjk4BE72r53jkm7gtPXbznmSyMWciLJHpPmnnCFd95vns8YA3NiJUip2NYnK56fdoRMYJvV",
  "key5": "pMVPqLz9xarNbpbCBPTsZZmkm4wCeT1FgW9rWRv91hBRsP6L44wvsMnPFkaqQHUCdrLPgF8LFxoALapy49ndyBU",
  "key6": "3X99WtGkfn2zDY3NLsmDmZH8kPHFL3UkjQrxZiMM6FtU4XHu5w4e17Z5oS9rCmcoGDhMk9n6TFHuXudpVtAhKNcZ",
  "key7": "2f8Q7LLwxcUqjdhFmRxAyE15wRfBuvckUkzy41ShbroAzKCvkoDweomi7qndHnYhA5v1yT6nratgfc5KP6mnRhgQ",
  "key8": "4cKw3ovhyNrPjaLs7MrWPp9DouZ3DryGH8SGarhUMqtxfb2CLwg4GAyfBNFq2iHkHcR4CT2f8Q2GuiTojfPow2xP",
  "key9": "64s2TUA8m55gNqv3hsVXG4n32wqNtLCsy8bkdyktsWPJbssbgwjtfBvNxTLoQS6tVEkKTSAf9pFz56KvgWtGgNdA",
  "key10": "3NZN5LRNZTmvYJyEaW4MFVt4KswU9RxqUBxVhynWRe9szVJtDs2ivZ3NqaBvRFKTsHwVz4yXDJH9hydacFxBHBkY",
  "key11": "4Q7DVbLHmnMrpDbE79hbj8hWmn56oVHQcfdU3LKSWHf76Rd41dSygiqvS8sT7XdDqQo5E4XEFBHvqhMCrik5kvv2",
  "key12": "4z98ag8MZW5HJ4hbYdx4Cpubr7AEVNEMS7KNbEX6ANjK9g4bHiBxhQTLHMvU4aQSHVCzDevnakxrR7AZgy8fRAfV",
  "key13": "4Y3pLH8WQnP1JEYYJRJ4YEKwaNCVjqkQELkGdapB5XoSPKYMs36MBF1KhJETu9wfHsdEQPwrSHhV2jCPyVhQv8SE",
  "key14": "3o88sHGReJ5ZAjbPHdiNyiKfELqt8MHFSdv7safAmEjF1rZDKmmCLNYpnz1cE7JLLwsjupWAGaqG9gmKXckPdnY8",
  "key15": "38fFW114jMdJmeojeQrHUSSnGhVxewhjg682VEiTqvXKmw2eHmmMFeB6BFwPpPD6XKZRvMEkHYLjmKr7czMLsBR3",
  "key16": "vk4xEa6n44WcZhj1VyShMwi3ADdxVpxV5WEMFvZHZWeAAxyEY1iZbciRLmsWEFd7NydwRGpXpPk66deNxJNnVtN",
  "key17": "3mUb6ovEjHfHKsNjzzRrxAT3Qezv8YyfrrPk9r2imcqUAd4KJLNSPkd8qyBDB7fLbwjBE7SpSF6diYJWyWa2q7b8",
  "key18": "3QQzoLfSA6LEaFPesZxuSp7Wy1BZE4M6FmFbaX6UXsZXFNqqMxXjuPtopVKCoWv2Q8N2KhtsoNjhjFKyCfdrjYGU",
  "key19": "2T7jrwTscFU6bS9yfAFaVHeYJkncSLU9Yv5nJfuLP58A18XDY43GvjShD2tPD5SAkQhdKtwNFhkxWH69kB6e2JDQ",
  "key20": "2bhtcy814drFsskLMyoZe8zJ5aQgHJb99yZMyCT5qT9QndNy2dsHsNQysBoxjdXfjp9QhcMPe8GN6ELkwBuwD2A4",
  "key21": "2rXPV8dvZoGiXEgQtHFhisPHkEDtWrEMC6dVuPY8E65iKX6BUkbxY83tKAmUSTziWwvBr5Fdwc9bWYM55W7Gwbuc",
  "key22": "CZRyN9csJBhSmCK21RBnvJ9tNk1cQ59VrbTUdPZ1cXaQvHChQ4dWjYFrQUK8GLMjLEuGvnS4U13XLDnN8NPWiR3",
  "key23": "XUsuGs1P89HtYKpD7yQcKyBaiBSULEr3UpwMHx9XuqeW9p7zs2ZqbP1dPB8PxmMn14yZLpcXfYPpNNieuZHEYHr",
  "key24": "3ndQ4NXC7iMFT4ef768L9rz3E9UwbdwvA5d6zhxKq96v8oZZxHbm5mKidmgiJwENNSTtRjj5FitVE3yxD14CjqGz",
  "key25": "Phvf3Y9WmsohjMsRsecY6WbNEHzYeZtyppaMzQBobqCaNB3vmuWzvBaC7s91w5KKmBnossTp4u21NVq878QkzjE",
  "key26": "2W5B82ZTw16XRiE2gCdhQzZzH9Cc37rFNxNcZb2JUCVQ5o3RH59S8YPdJ7PvsN1UaQmijjUnRyBGhMEcwZYdeuYh",
  "key27": "48bsZVrpKXjfopQq1t8bofs6PxwyfUXUH62WhrvQVCKfBnZP7RL8weFUnBrv5MGDk6ixm4oM9UYCcwhfKSdFBUVD",
  "key28": "48oMWb2D2ZXorgrS8DepeyCyeyrwrWJZ9e5vQH7prvfjYGNNGB8YRDUXuba7erDh1SU7FdV4dYeTQCQduBfkp89o",
  "key29": "44otiYbtqvDVptN6PDAdM5TKpDER4s5CnSejGbwg6dVfLm4c2JgexEEV2tzV8FmfYb1bAoPJ4s1jr9tMGgEAqfVj",
  "key30": "2XfzMEYbLXqc1KsQxFoCsGabpGSneZLmxXLwHTaKW68M2VkJw9wRERsiq56BQi6kowaZAuxutkdVADFVz7cxS5Mx"
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
