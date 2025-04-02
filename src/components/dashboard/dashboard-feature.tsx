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
    "4jGK9E6vmjUGHX2wMmTHbZMjSqjLndiprMTpLJwVgaABvpG7xVXpBb7foWmfReaBU8DxFxoqNiC3BjhEu8UFnNAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QyXeRAem51KLefVNz3dn7xsie9wdiagYhRW7ekEXBE49dKdJ6BUknqjDiznf8TmaABRoh5HxCx1VoSuVJvagtkL",
  "key1": "5KZm2gNd11btXomDXoqGt2Czd6cECBHkia7LMA6nVKGjP6vHugtq5L5ieRNKo2R6PmoWmGQ6DVBd5XXcY26dEeuD",
  "key2": "29zoDVxKM8jc8FCsBT7FyggHTmeG6UXeVsCXHMQjkeiDcWUHsquMRBgE3FZjLXRo4mA3rsH9LrtNLyfdMF1cm4jE",
  "key3": "hJrEUHT4XcujKtYBgL9bD7ZrTSWffWHvePv7znBgPUnbYWraTUDNzU94ZhTCZxnKfkHm2cgXba9EwHiNda7B2cy",
  "key4": "3NLY43f7wgXEPufXGuS16QY4F1Dg13sigYEktVVvH8H9uPA7U8ZQwZu4LuhhZMMQCbXbjbzqfZZEgpSeShvjvper",
  "key5": "4iAtPAp2TV93V3Adg8SRCey3ETQkxBXYkfDdfYUqxkjPaV4rCRPzqqZf2vwZuLEVWdEc98KxFSjQSGNsVYSmdrT1",
  "key6": "1cN8L8WWxFw8mDgSnWCkNiCPyeEJVmhsRMhHDXmgcHidotzAc95fdMES96Hmv2wvrAnA7CG8VhC9hLgYK4g82h5",
  "key7": "4mA43AZnk1F1BdAPoGUMYmqFvcVowsduz3VpLYjvB6tUSbtcLs4K4Vk7T86zFuEMwyyg2EXHzVQepjcej3vxB94p",
  "key8": "44JNAc7UM4VLK7xwo3yx2mnWnNQ4PPxTBGchmFtgVACqNCmVqg5m9nYxN8b5gLzYiVSt5zdD6cjcdPsgKJzTSJwC",
  "key9": "ws2ooPCC2jGVwWjGnAEjzhWRnrvdwHGK5FhiWa27vHEWfLXK7iGFoJjcCgACoQXjfNwxmFNS3A7AzLfgePQzvMM",
  "key10": "2HWByiX6D1ahVGMCgVZqUKUU1tsXsYQKpP5P9ay6rBhij19NnijckWfAQ4Zsxk5YC98F3Mh3oswiDkji3YyvKxpJ",
  "key11": "2PZTzNbcku87ihvR2gTbUKZb6hcg37zvpK5ercEerG6XurhxAwwwERPsYTonNq8QsaQWxhiqHp4XgEci9hvAat5L",
  "key12": "3GoVQEpH34LJcvVV543ZmxVMQfuwGjsX8JobjQVaKrN49EMPyBZz8VHymX8NdDPcPaNYqGPiDN7NKRbYQbT8QTXg",
  "key13": "5uPpBStT9FXf2kQXb73wCjjMQWuP9x5VwASzD2fXnVhAmPnGbBuzpFE9XnG1JANQKJyHMv3PKohq5rYa1M7382Do",
  "key14": "2BRqzc9WwuqscoXJE5Kvww51AdKV3kLfuzWCrQHWJQn1r7vUTT8GdR2Y93PrZdWd9rhkjKopLyt8KG8AGgzcZhg9",
  "key15": "EYbM7VpUs3rG7PZbQpnLhS3ZqCvGFNsx65FbknhjwJgBNB3dXFQaSJoT9a7SNqmTD61tQR4M669F8eB9SqRcyiR",
  "key16": "2GUDCpUQTM9fssxRmWftFNKeCzYTb3xrc3d2NkPWVJXQGjCNmF6sSfJY2WtHqufBzYNUrybdJfnaF2WEQdjrdUor",
  "key17": "2fuj15nJuViHGFTdfJ8N1MvuYPoAm7wsJCwoby9gnmoBchUqkwcszb1F8E4xPLbEB8bMZefrPDRxhsW3F9pV52QE",
  "key18": "2mkuW1Fi98cjEj56iCk8iU164NuranUeTPzUsYHDBNaRrTVyqKCkYQKm6zeExEsk4G4kbYUxo7p9HHe1vznwHg33",
  "key19": "45jzFwTV6aY6FMxmRNbDfcyx7MEN6kcof7P7WCFKvTNGSJhEc56pchoM5nGViL1mceqH7eAJ4RNRTZSvaRpXmuf1",
  "key20": "4amZiAZiqQgMmCgwYC91ZL6hKk6JooF2E7XxXtWnTEyYAobWihfKSanmfNe1NhxGjNhCk1enQu5nR2hQ5WwEk2u4",
  "key21": "Wc1PRPivsaLStAxTSJJqTyoF5shHRTWEhoqEUiuMS7U6WTKHGvu73QdUrsBxoCS7kqUd8sTruBaEaoxUKrYSdU1",
  "key22": "2UPoqqfsWvkwsrRtgrvkP8jACxWvJ7j3kqZbbhwqYirahmGh38Xs9JSbtiYyEzQQrKtgHSWDBrVB28Yf8366skUB",
  "key23": "2v748Z8Vd4gZGVmNk6gN856fTxRjCMm8B7CPCZL7XmmfwbBqV3we8oytg5ihouGiAGGqfjZ4Wz2JMrYZdJthDeES",
  "key24": "4mQTyibFaARpWGVftgJfPJ2avY4LPFTiHEnDEkqWPy5xJd2wG498uMLom2iCubMJEfqxrTrgFyP6kAmQBqrQEsNu",
  "key25": "5E1G4KtZtnvv6G4eD7VpaTnRFK9ptT4LrmA1eJAX57J4A1tZQ9dTK8ooaN9kBAFatM4PbFLEAUvbNWaeKyfjJo7g"
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
