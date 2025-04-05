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
    "3v934pz8hkMAb8rWyXCjhgj2rdh2xVJceRicqF1CYXQzJ2QYam2dpsyfzTwonbw9WbA22akNxqpuTXUwjMuuYAfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2civJp5iyGgaKXpBYyGgCQ2XZ2TCtEq8zFgMv1XPLzjqiPf7q41xoUX1RZaLzwG7e3rUwxAPidRvZizrRRqJkFP8",
  "key1": "5i2gdwPCwtbsj4C3fgaFf7XLkc8DaaN9WS7HRcwfTidD6JjZL7Y6re5NhondoG7XyuVUt9WdEgvv2UAwsKPuFg4D",
  "key2": "2nh8KQC7d8vFxYxdQGLrMPqQiuRuFRpjxtGSHD7e72fvCHpJyDc4sdBapCwukx1DHw6FupWJvb1qA7WxDHtSqpFt",
  "key3": "2HQ3Ja4hpcncmVfk1BSe9cE8u2DqLDKwoeSme3KxdkuzMGx9uWNiQ4Ft2CWRukpiPxtaDceVKNWgeQBwQYez46fv",
  "key4": "2cCCyeaYNjd3c39WPai9wFCbxW1kx3SGNG3UaBtBbY69gsE1HWEqTcQs4HUveCKqgeaMLhRLLZVzdZ527RXxwYPT",
  "key5": "2EZvq5SK12ovGS1NqC7fHsXifru2dydfkgVm63oKnxFhKDypKuvPrzK3V3wnWKPsfts4in2AGContbBfKoFuBWV1",
  "key6": "2rPXf2J58nSyErxKWirWUAnmsoRRafdDBjhvD6GXYELHyqkofQNfmPqdaaBdrfu2XqaLhtWLW6BYWitfcqKnLKAu",
  "key7": "66ao8C4ZXco58cJjmVEb4c5gphjGcDh62x92MnpDzPgv5CBSmaQVgvn1x5FcYmQiEugimoiADGw73E18n8SQTjnG",
  "key8": "FdGKxeeyasyzewLk4fcDX1DNWqHt3JFGrhew5tHBpLps5on7sz7wpCZxDHQeCg7XPWvmDMqb517djncG5bCfA4z",
  "key9": "2MLQR8RgbBScL5LLCU16LxtbytgMnQkSzobSKbw7wqbgUE439z7ADKrtuaHLczzywuGtSoymGhbWa8Yfu3sM7cu8",
  "key10": "v7MzLRjhugUfS9H75H8eN8sQmnQo5PEyFhvnYaQhZ4Dv626dsry6bTWMFijkKXHnbTQDWHH5JaGwMw84ztcSGLv",
  "key11": "37gK4hMLja5ESvCe4oDqfW9Z52ZigPxeKoZgVXGqzCW51LWiv8vKyTHYNVytsfgGypoQRTeQERVjQ35eJUvLg31u",
  "key12": "RbLeSbTX7jvvEqmjtMRwYhPShNiP3ZN8nj7pT7vqReiapGerWoWLE4DqW8R9bYXnzpZdCzgDJPTx4fRHzYiBDm1",
  "key13": "5bRvxyNyrud4mQPmKGqFnanwYoWqg1cstauh9ZDtGAPaBJQXocKtbGij2fsdjyo4nwRSgaqNesThbUFj1jMR5aL4",
  "key14": "38SnbgkM6c8wFgkn2JNzuysabkAuGz8CtNaqd353dUYN7DQ2q3kSFGBGuxEYQat9MzZ6HNFpUgMzwi21tfKetRzn",
  "key15": "2henpeDHfK5qj5eBGQiZp23jQaP3cExYbUN2yx7ujVzfaHmMiURb75Rvpp6RYqJ6ffXX6mpgV7kAH2kt7ahUPFqQ",
  "key16": "48VrfXMzcx7fNDNQem22vEmF2fekJAPi86nh4Hp4NJyCytNGSExifHdJRvGsjBWY2xJDX49UPmJNc3MymYqjcWsK",
  "key17": "4iNtA1PKBL21B7EcH1KenUqSZ7FEMH1iUZUJomxxc7cXdgffEw8GBmMRV4y4fDz8ojBzyV6tvrLB52SAQoe2DNMf",
  "key18": "4Mxj3BThrhA33VXfYLHPjie8Mv67Emge5Naf7gi6CqHNA7BKTetPbVVTaa6ZT4ajsg7BhSDiuht8tmYgVqVtuxwf",
  "key19": "kb6YncDZdWkJjfiJZKyygvktL667kPbkGCqhzHD4Z64joLGZ9qGersGfF8MbNWt4QuboA7aUJqkR5ibE3wzmUC5",
  "key20": "Me9ufsHJCRVurNJUTKnW7hvwhiQg2XHgdp7aL8aWshsJQJiZhXZwh9FFN7KfViVBvn2J4Y7JENXQ8kvwYjKXfo1",
  "key21": "4PddaLmZBBjYV7DmXMpUMxBT5KCddiZevaULEdGxQ7y6AS4P7kg6rvLRAhXo77NZHZoXuzcpCefunJL3BtTMQgW6",
  "key22": "3eYNPnpvtg8k6abgekaM8b52pPJfbYUU9vAZGN5Ydnm3qk1CTuR92cRX3ZbXqHzpv8zre4YNDxHyrxVzWqUtsFSg",
  "key23": "5ZKqxZfcDaGLoxcbpSx4kccNFbXAfMrxH9WCMk7NJTrhDh8qLVnkbyu4qdzCuDUX1rzhb6PRKfgNw5coSApV3k4f",
  "key24": "248WkpQ7KUnfHz7ygrF9a8eUrWU7ZKbzUyVYCCsKpwQyjyuyJUL9wywygEff7WpzLKBdv7AgNKyHV9Qhz664GYNw"
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
