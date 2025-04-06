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
    "5vqoArgGXXuV6kmbJsgT8dFWoCZSFn5NVcwLK7RFajirTvvtTVRhB1zgca83Ma8Xpjfd8rVoXxejSiuSds7JTNvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gztgfdCXn2GfyNtrUSQhbJuLTeJexthkWqMdwYrYnDJQ6eeb8LfWUrvH9mipuTcVs5Frv2p9gKrTMLa1izidmF",
  "key1": "45P4e7xmw7jFy1dERhdqjV39VSUnYaDoXA99LbuNYBbJKtjPBReXGk1w583tdEd58NkpwmoprTYpUVgycq6n46gR",
  "key2": "2KfywzED3b483hfHVKExTsmHKRMhB72t4VbYJ2yBHa1fhGTGKgnUSHir2vgJfrVmvywE32u6CWgmqxXbhnafCp9D",
  "key3": "2jbC1jbikrp3hn7UY58EgQ3VvF6xrsPxwX2HLDYUnznpFxgvgvh96nWo5Geywkc6VV3CKjrKvhKEvdAMqWP7eNmA",
  "key4": "pRiaJjXorZghfqRghbMJ3c8xvSy852NJ9zRs7BRL9GaZRNo9RnhfSqVPBhyaZX8aCxZKN6xMn7f9dAiCoAVfbPp",
  "key5": "5wmUf8vhDeNhWh1oNej9wiGMYitz9DQZnVS87iUYtnz3iqbU2ULG6nAzMayVG5z1LfpP8fGxDRonyT639gvyX6X2",
  "key6": "U95uVnZfdQupX96Yvc222SeQcLz6WQ4mTut5FTMSD5XEAcVteysWQAryD96fAvxiefKNaLygaHJVjKReLse5NqZ",
  "key7": "3YVQKGSC59wwwzFDeoJp6o7ZexDENjseJzUvAfMUKdHiLFSFjHnz93EMfUpottUGDMmuN5y6mWFLBG18ErU8KfKb",
  "key8": "26auw8Sx4BX2hJQt5E6sk73Hs7dGCrg3YxCCpuiueS52AXAtm7vHyHUYDaKkAraFAx1vppqdiAPgJFmmoUqkNdeg",
  "key9": "UgsgV4WQdGyGzc29DAnhnPRBnALV3nJbD55bVW7KVhavF5so9qq8ttbk84ciJWqSwzkEWGLpL6WpnHnzKZpxcaY",
  "key10": "4DUCTqQykrTyLBzLn7K5Stn4PkPP1jkdUuqrKdtt1nKR1jygRkTk3nxYhSX7NxuQaj3htEwSyG6HYAF9bRs5AA1G",
  "key11": "4nCg6YRDDpHrkkJYwYEZnTjNHWNwMwHfK798N85yjSLRH7NZqeMA5dq9jaxJ7pM6UzSD1sonp9niegF1zroYHWvf",
  "key12": "3kYckWBWwPsNCcxcsxpGhWbwuzGefDg24ojpDrm9gpdqwkfcnckbuqx6NE5hbrnHAkZk48JFBEoUi5PPp6kRAL2E",
  "key13": "3NVyoFXWeqMnqW9gy8S3RxBie5h7AxHnN6nyXQorWwtL6grzFyt68DTuqA7yw6HdaJ8QW5UsPwXguC4urA8WYLEr",
  "key14": "4kRQ84N58Va1hX458JRS7dDM5E8fZfSm33CNqabe28evAVhk3Ye4hpGJ9agCwqR88w1WrLcr6NvKBdwZJkMDCC7t",
  "key15": "x1YtieuSgmxysfgbh2NM8i5eRE39GyShkGGX9Bg3A8iZERMCLtEGd4XJDfM11pUxGFRTjVftf62Y47RLRHFFExF",
  "key16": "JpbvQiRFF3TYsFCo1a5qFaGLLYiAx9oXaLRsJnzr4a2aRUjH4Zy5G8QekC8vGzf1faDjLvCo15friuGax4GRR5L",
  "key17": "4xeYJxqSeQctWdQup7uQQNcoEEzfuSJqM3gutkH7wmNt7uuHh5FHHQtMh3h9N2rTSivpjmV6tQFpHiFSLGPZnasP",
  "key18": "FvsL4aMttDAEpUo8bBMPmtetTSpe1tHkTUm6s9qLTYYR8fjQhnGVXfYAsCPRoeN9PsLFagi4ZsmfDbCLFHcTSZm",
  "key19": "vKdyZmdD1TdBLMfHCG4RM68mfqd3DL7sRv1CYbqhC5DMyNEPu12EzuhLK1oXdeJLY4BKNq1XTrVPRMPcqrGfzEa",
  "key20": "s9ykHYDsXzNLjmjvGjS937X6ine8gg97bzp755pmRJSQ3HRPUvmnRqMXZsuAhxoW8UN4UnSUPxMP85Vfi6qZexv",
  "key21": "5b7Eq3HmBSbEcyZYyXxJGS6agwvxznDQTrWD51gLMDbsdkKcQiRj4CCUGuQDE2F69ujNhudNU5Feo1DExQaT62iX",
  "key22": "5gsZrWjdE71D91WHRpsL2cvjhuHjPm3Fu32x37ZhRmkQZmzqNpujBSmkMmv39CxX17cyyhBEgcZRNRuaGpXZij4K",
  "key23": "52eCt4YGKX653vNto9v8tWPnuZBkgbDa7bKVNxDccXKBpXzALeHjz42yvga8wrT2pDdd9jFLA1ZBeUsSMHDtGXsE",
  "key24": "4fKU4P5SKpS7qWDN58Dtxt2BuGt3JKJS3G9U1NRJdLJDJXcbCccEtEni348G42wVM8bqHiY12ykLnLW8wD4sbFHd",
  "key25": "2emadAWnE42eaiSGcwNPcR2KszySDEW5PQ9unuR7g29yEB8cHcLAtS2vdR3868CeuDp2Wg6nJwwc4yPm7VypBWe4",
  "key26": "WvWouS1DM9LZGXaj1TP4wV6hMcve7rgUrbDWhe8Wbh8QMwUUzTezmkqn71S8YmSzHz4dkrUpSHeLqHdVkpdN5zG",
  "key27": "5Ns9xZ7rYfmJnh7gDHwk5ztNkN7Sf1JZnuHgsrmjG2QEVfiWVnYYSAkEsWeqjTZg6eDoD5sd2SkQ57VSjNkfbXrS"
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
