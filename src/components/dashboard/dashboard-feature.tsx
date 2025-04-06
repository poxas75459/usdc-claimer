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
    "63MN37JyknH6WVFDvchu9nGHNhEuihz9cuifddSodDLrLKj1skJnGa8JctXocbQ1uDsXRbeTmWZQ4YWPyMJFET4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MnH8GXnEQFK6B1wcuQXUKqoP3v9LUbapQFQovtSGvWhgesA2epPJcdV6ZkikPAdjY5Qt6wXUj46nJbQ4drkSh4Y",
  "key1": "iZwCtVBomW4uZnTfFtqMvTCLTB8HkyAFU9P6a5BJja6RRE2HxKy4acyhYHYGZbLZWX5rnQVEJ45yJv1woYQucUu",
  "key2": "NQFZ1WhoUHNcLLredGGSxSDwUpV91fZVeFWxtQg26axum7FFFFqQXbCQmMXgFd9pXQmXF342UvLoHhCrdyNDwY6",
  "key3": "2GvirEe41ojNqBXYz2yKCvJbRefDQ8UKkrW48sMZ8qjKZFczDcDzda5i7VfzNC3A3fFFzV2hVjYsB7RQekJ3fUpx",
  "key4": "3wLwEYmD8xaxLzg186oRMRiaHH1fx82p4oLRhAKoAofjbNk46bSHABHgzkozcUy5bZqXEqp4CYhev8VEZbMA7edw",
  "key5": "5huRuRiXDY5PWyHpqfbns47yryQr69EdxG1JmDze4Bsm5M3H62ASLB41HZxCdfydakm3hhR3nz25ucHCE4ft6Cm5",
  "key6": "2JWYDfsFnPAiTsKSmzCYGXikGUnZBdDGK3atj5a4X2u2cxMRjShY7h9s18LRZS3nYAYBCqxabMu22tpEpf2Vvayq",
  "key7": "5JsCHot3Mk5fRAKUKxhYvpEV65hkUmzeHaWKCXumJ79fxPwEFV5dWDdUL1MUyPzoXujt9nfbths9EAk4rtym3pUh",
  "key8": "2y1GwsqMua9BvuTofD1yQ6ZxHmiukerZodsyKFycP5ihxmBx7iWgiGCz39k7bRV6wLQVJNtVezBM1UeK1w8DMtKL",
  "key9": "2xyZKe3VA4ACNAwkGXwhio2y7bmdfCKCBRyv2a4uAzs7E1U5ABDAJj5v3jZJesQnvTLs3GyNG3nBhMoHDavjrNDB",
  "key10": "AfVWaSAUjXVE21MwHz3cyj2h4Cykrb7w2V8JKi9XPXEzpkQGuknaDNEesiuAv1z87sos2vwTG3qABn8aYXpMZgZ",
  "key11": "5ttEUCLH8sbTkK2zevcvMgFGQnNxNoqomRuouUixoJBEMzf8TKpFSfaNUN7gTX7eC6vbHJWYXw3JJdrFGuyboitJ",
  "key12": "2ELjGeaeADh8hP6SoHqmdtDCyvPSbjWNUAR4r61ByPctUZoiYawBRC8vu4xr94ft5S1b35PcbRE4gfC4hbw2Qenz",
  "key13": "5SiJGY7s9RnHwwRXvmKLWDbRP4rZ8vY5TaS5bnQYH8t2x3Znqp5tJAkHu3vU9u2hQWmoAfTZiwzehUdVMgVzSb9y",
  "key14": "3V5bT5tvPsJDJWsMeDFLQS1qJzjPqgp1P4BEVk3jhMbvxmu2pd38PX268L9PWCtZrAbFXvkt8rPv598cdMqJLzua",
  "key15": "4WPmwni2WpAk8wZ9LiZxkx9q8awmQ5xDxdgSy3BPbdtWu4wKevjFTqUegtbFQdNLEncBGfVcS58xu7yUsFjhNPVv",
  "key16": "WRPRXaV8poF2ww4GeS2fFq2SD3kaoCb49WvQjne2q4ktZQx78L5EJED3sfpKE6hZQ9Qoy9YMW1BWb4jkxpyrRA3",
  "key17": "44EShSEJ2sxLfMek896TA3RJqJG5pUCF9KLhFM6c4QJTXzs2BeTFRfwA5i3mDxUDzTGMrABgNGv6o8uY1ugUC4uE",
  "key18": "58dV2AM2hwRW7Ag91eVgtpLtWTwZHwbLDJTsJKHHrRf8Yg2bYhb66h4Pt6zShMoSTsyotkEcKvHYc4kzrFAv2dSL",
  "key19": "fyoPtADsVttvNWtESwvKgW2oA6BnNzQv8QgrUmzJ213C9vq8WY9jP6boBBervZ9wgUoTGMViq95CArq6i5FNEY2",
  "key20": "32u5rvUSb8Ngn6rzWYdYPDhiQoDbXiKKDaVyas7tjaCEnY2zhXmQorQcPuKmfWGwfHmLDHXx2rkkkLdVde9HAMaU",
  "key21": "2FtXBCstBPvBpEyTq83dPDNqKW9ST2WXdW4AAjscjJgT7kDHNrbHJSor4w3GcdoddM443KyygFGSErU5LagnoP6Q",
  "key22": "49mRAcfsR8fn4dyScCUZn1hNHXJbj3NdZt1cgMCNcuC1MMrLxNYi8J4kZ7gpqzwFH5pj9J8T1GjNAtyGmtyZ8eZJ",
  "key23": "ybdu6gsRiHJKBvDXEbSxq9sLtiau925v4tjmYuYALhEq6wU4WWJLafSLoQLXvfr4ai2jYoMp6XxLbZrvwEs7zcS",
  "key24": "3NL2wghEAxPFC2NxJKuTZG2kxtWTsNLvxL86EA6ZcyTAtoE8LWDW1gxJFkKn7wSycbrNEM9vJZQrQupM9sAdg27h",
  "key25": "PHXou9Hzc6idt3Rajux5YqGKRMiX6PWKgXCyaTuisUwV5GQrAKJwaYJr8e5GUJpG6vaAXb7stxQmXA84nKTHCDV",
  "key26": "4tkqUqau9FZcXWuhEfB6oLjxYWmSBnPZUPQH9TpgBXpTWkw8hW4xXi22s3se1yBQAPk6CYjXRMx2FvmNM7Cjh29f",
  "key27": "4k6FaoKUNBUysDy5zSPp3T9jC2bhZDH5MwQL45fpbqvLjGWtJZiH29P7f2zmN2VM6aadqPuUAVvey9rH9WC4ZSS8",
  "key28": "3ueDVVQkkkC1JovuvvZC2A9DMWzqXh5hZm82uKHVF1ferzRszubVU7J4BHYiyEdg28dWKnv5Z3kpN1UmQHWyZ5UH",
  "key29": "3qMYDGsTdeXrSWSwZNaMpBkTTxSMhBwraMS72Z4M166D15JtUkzWNeRyCh6EGNyiChdA6LAGbMeu6aJFkYL7BXsh"
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
