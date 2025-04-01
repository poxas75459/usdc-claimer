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
    "2sTb1guhVh8eGiey79gAVT7piHE1ghvMzrqw19G61rNehU7Z2uB2kLYU4a6F1pNEt9c5rLwqEAhgER5V5kXuJGZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABxUrnMpJvyRJfHbW9ourtaLhTqLUJXCCJVZTXRn4cCTv6cCYsiZJFLVkSvKVUwSQRxLrsFK6kww9FXZGWrpR7Y",
  "key1": "4LEmQDYJKMmpd4hB2ESHFkxv2LdtGw2EWoE8uUeRfZmVWkaY2mayj7KzWyXc6XrBYUKXPj1bGrAx84FTNi7tzm82",
  "key2": "21WbZxXNthGVGs9DaZ4oFTC8cWbPsTF37NoFb8umFyp8qNcJozJTc9Tn6GhDxizgveqq54mKGPsn8p4aRN69HLjj",
  "key3": "48W8VCNWBt8eycP3R1fEJi3kee88vMCHtBnpfg6cSsjaJPBKD3JUtCo7PrAzMLDNvze8TV6g4X15mtvwUPQgnFYG",
  "key4": "4ZqJKe3mfgEHzJejpf3hnfR3EDhmR3WXwEQFZQGUSybCAdirscxg7E9KWFGV18S2pk6S6zYDDt464BpyKfbRyHqw",
  "key5": "2Hvu1WEAocCpUkHpp9LHXgX7rUfJP1on5g8VUgiuhs382oFN9SCZb1ckPQSP1ro6ABRirXXNXtMLdHUuKoJZ6gRo",
  "key6": "5rWnZP9fmsgABLHMckPNiqW9Ye62cNPLKWXVH9Z59kz63UkKSe3cvuahAPrqZr6RCcyYHhNBWKVDUkXAcxwT8Ncv",
  "key7": "65dLXJgESnpwDWVCJ1Xdow2ZUbKpZBQwyw5FFZ7BzY19dVNp9fcu3dMpFPjw5jhcVH8MDi48sZdFsqfZZXuVVyxw",
  "key8": "T9KGup1FcezBfw7GJW8yx8RJrpkQ7PviaGj14PGTGLZ6ZbFBx2fkbLvhLbgFi8DtZmAJ1nMEWjcwBZ87c2YJz16",
  "key9": "5SrQnxsUEsovwAi3XHfrTBCffNcHk5MyK3Dhvubz4Ckf28xNpf561GaMevYq2mgjrc5zRvX1uYEWBNAG5jWc82dh",
  "key10": "3Sdj5HykB3Mb5joBmuXuREjdgT4c2GDVV2p3cFNhhxk2XLDWojSQB24ejddrULSWgQ7iob98z6zVZcfT2qa5GxhC",
  "key11": "2HMwdnm8PSaKjbfFDHozfM6RpCasuasU5XamYdyfgdyTFoznV8XyskgNtHAD1eH1hQAZRFvENhFMNRpEBfiSfRJP",
  "key12": "2PD6fuF6cGug1MsBv7LXoeJ6tZVAPSDqSW7f8RC8S6A1tCqXbprUF2HDQqLuADdiY6VgfYnop2Fm5gMbyQqAH9vn",
  "key13": "618TcG6gSMRDVLLEx4nKnnRi5RwKU33bwEfyU9esyAr46QAQSLegHfZ4GjLzQPnTpaw2MCqZeKwY2TD3KB4MjaZR",
  "key14": "3GahWEjRd6rQ6ULZvmjhoGaz4diJAR55ponyJu6t6FrMgpBDZMw7PmkRarkq9jotyNzPrUSchsy9K5xPgWn3ZCru",
  "key15": "3Vg9eTLEPdEdQsYi86bmWph7xEM7HxtSmynWHrssSWLFtqPegB4VKvVvdrSyg581C3X1cqQ7YYTcodgENvU4znnQ",
  "key16": "5dMf74rLUgPJWgfC2BZvP3fGTiYw3D5nUtvamd3yxUDjMgG1Ci8nSnMemNnFFztreuGAH3MYMuR9zzBjQCHWRwdh",
  "key17": "PoRt9bXAcaTnmCAgyaT6CGoLYwWrb5ATezbnxsqUskuzPiLGWd1VbsrPeEGF2sN21oUYm1j2ZoDEA9dkAR9ib3Y",
  "key18": "4nHtrTVh6s1PbQv9TZFGLd1g5kVCLF2qr8uSEayADYi5vMpwmqNknfvRKAdUa5wYX4d6x5B46m7zt2zSYaBjv5kM",
  "key19": "2gLmV1iL568Akfn4XKTU55Lpi4KV5WoFWmEev3XG4WVrAqcnyWde1jEvkAdd1b1xYTw7pxs5ynQPVAARojegMuGa",
  "key20": "3HTD787RWZto544co4RBLD3mUNG3X5HP4FGfKueuZ58PkriqrG45zCgaQLqhZcLXrN3FV1siqo3PRggrjZR2Lmjr",
  "key21": "2CU2ych85EdRYw4m4uXV8vPsVgJ8xruuW5Puj7WKTVRJa4p1ciwKKiCfgQ8apTNp5JdSDZRMF1ZDuwqXLM1QsjEb",
  "key22": "4Loou7PG72Dy7WRWK8n3RUh8h2m9ofq47DcSGu75ph5bezdPc1Zf2muGiDZPeX4WmR7ExRyuydVMxeLFMwVUY4YP",
  "key23": "2FyZWCR3Uu5i3H3YLwi6Qo4vcTffaU2cKXrPC7rknqtAcvWdKmjm6cj8YBmCvd4ANoA2WhX79AimLFEVXHNHn2NY",
  "key24": "2HchbwawPi4snEUdoRU2ow2j3ekjb7hT6cZ7KjSvNUh8crb14rg5uxTX8g5cgX7NVnhEmm5h1XAQgX5qNPBAVzQp"
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
