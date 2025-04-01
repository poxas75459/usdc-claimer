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
    "36r6LzxFcc7SvvQd29qwFLrzMbtyKmZCiGi7CikEuWx68xoJxtiGTC1Yiy3CffVdXWuCxSY2Yeo5NhGRCfLrbMLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aHQCUhheGk6Kfi7CpaVcWvuqkKs1UreKYt4eLRn5Vqr5FoaactcWd5EBVWGWxXEyvba8d1DETtqZxAma7W7aSYA",
  "key1": "3ckyDTkwMGRN63YyaQquM1Gj3d2Btyj21Qbg5ef2Tak9faVdB35DutUkLtiyoZraeuLkkP89i6J8q7rJqbi825Rf",
  "key2": "3yL1XXooz7hL9hjHZzHmuyvhCY4QaHh6iN4V9QJdJYAodePPLrgaJM9ZtTYizL2rpqPsk4H2AavJYe43fD1xgUvg",
  "key3": "3Zuvm9uozCwX5NbBNLTYXN59V4XBkycfdPujjGAaydpYc4QZK3mj1amdaSKcLWZ8QdL19ARVzDEnijx8HNLPd2tm",
  "key4": "4QL9XMB8evpqhaJfL26XEbbEvHCLmpSD8r1WPf6rqGhiLkcPcQGiuo8bHvo7G2eseqEKFvkAv7LbxNXaAy6p76Dm",
  "key5": "4wC98CrdEfdTqdiADhY2AcB6SevP9YivWvsfuv2AwZWkYAjCgrFunziS4b4ecP2CrvNLeaex31eiR8umtUqN6KFx",
  "key6": "49ifEjmSRg3vuTbk9MwzRis73pPH7t8nPamyGfyHu1UAwvoR4KdsyXPGZNU8GaLZRM9hrTbfRKtgidKaB3apz7uU",
  "key7": "5o6SW9CnwZ6kCenXSsV22BPhRtCHoTjhH8Ex4w9K892Ek3zK5XD7n5KZVdDheCYYDw5WKcWuXuSvgL2YBcPcSBhz",
  "key8": "5vWT14yNe7oUqxZtiMRNKPndSWcHLXYocDttkkovJJ8Uc4wyeJKeXubd48oUn37CPjJA9gUHVYsc9ZSeN6d55QRT",
  "key9": "XNJ2Pu21k2b95cGYGCjfyeth9KT6FdUQYW2mUnykQfk1VfSv9AjLDua4oz94V6Km6QovT3MREeJSUZSQ6ZDYRKu",
  "key10": "2v3JixC4PTVsXm7UkBWvHySwwEiLakp6sT1tX1okDPWUU2pXHyc5MRVmW3bvARLCuSWGVCjF4fFxhdngFRammK6e",
  "key11": "5EJfGVN9feRsUB6LoRDmhrDFijxN63xLcXuqNqjqJBbVw1QPXbWVBKfrD1F2DzTQHayuZBzo5mXT19S4ScGMfum",
  "key12": "3MKUtUgtAJHP5gYT54p5h6hGNGPZpNGKbscWSDfN2XWpu6Hc53PzGHmST5xi2GLRzprDSL5XB81AHN1YWJkmivTv",
  "key13": "63LW3nHjgsjQNXLVJFc1wCEYH6LmRQzxNya5PHtpU7JM1hbKAh3mrKQXjGLsos9iXnCdDd6KATgwgKX4gjLVisjz",
  "key14": "54HZX3tA3HfWAE97TeibEtkMWcTDPwvKvUTp6R6zTYezS8V1Cpv6sFRJDbC4cyA83mCGKXhmZnnGTRMwHYmUKtMJ",
  "key15": "4Ur1oKm8dr5xpH6CUwyiALDvFR3LCXy2XH1q3KvBakTTcwFRiewWUbG8fnZLeE3F7NY33VYj5uv6TBNKc3zvnjXD",
  "key16": "2eMwKsyY6TMuMSRevEy7brFJrTQkpDrzejgGxdJZeAixLJrpsVZBAFFHxBcwo1CH5uxJ4DdDbNHNWZeBf9QcrRjj",
  "key17": "25L9zaBsT3J14EWRLXfhNVb5ovTsWDD8KxQ8VRYr6kAK96DukupXWQS4ECgsF4XBZJTrahmniF2e1QwCDsBxYbn6",
  "key18": "5p4vEH7WFur6QphYVDgsjT9MKG9q27PC5fsnm3Y6EKJv9pF4Sz5jRUu9hHDbc1TRyXjxHB4t5NgYaYoZBZD7SJLS",
  "key19": "MNzqVQQ4EfQoHBJdPvPywSX8Gp9WaYdLg7FQvZ9ZZDBiFS5jmnsrZ3itP2QZtYNuxEsmD8kpWXXcL5itsVcPDJF",
  "key20": "SJ8docYBGLsfMx2P5gYCpLLYfqW49yrPwgorimNk8poMWcrUJ9Ee83xkLs6PJHffnEUVtxy2DQsRy3BJf3C9tWw",
  "key21": "3YH3rcP8BSzSrC4eEn5nfZmEwQbSXP6qp29YsiK65heB9b99jqY6VwPQ3pUHgRVQCpDiXiJqqSqxXy5Z7UPcAKRC",
  "key22": "3PMgcN6psQVTAYgL496xMtCdaWEQm8AmqNN76RaV9cxh7xhwVHRXgdzpzW6FopyQkAdhYEJZ7qLyJ8yYUxPkpZ6C",
  "key23": "5YziJX5dxgdMM3j3QBADVHTddHaDG2GpNaXPZKyY9dYcpTL6pQhDETkqbXdLbhEUi6Aiub6isVgxi9hcTr6oGQvS",
  "key24": "3UFTDiQxShdQc6z8rqL3gG6CRZZPAdEjNTxQwauPELC57Sj7vumpLFeMA4TxS6BhfxoBJhTGs8KBv9DuhGzpDCdg",
  "key25": "2tsQPCgkkJeNvbxTy5fJFCKh8AbrwDSgeboTS6MQAgzfsmaYsox8XrwGYNfqW8wahRyiWHJFB8CBSEwZh2cL4NUJ",
  "key26": "3vQJZDHaNK34xbT9X6JGd8eKnJkD6qEWPp8oRQKDXoxb92ZjTDEdGA7TcZ4MXHBbGGTxB6r1WX7rbyhRsG67pVLq",
  "key27": "PTxFuvjkvZo46sfX94vcZr4u3xa5GMN8LSrxRXLMVXWqA9AtwMCqH1vo67GcDnjk9LVg8G7paEVLptYF57SLXqm",
  "key28": "4pUB5zPTVjccVXmydR5oE5iC6k5enTJJhtVMrFwPcuJdYU55cpX2rPx1x616xNuSdGrCFU3mfitY3HeWRSPPbr2B",
  "key29": "5txsbjMEA7kKbKAqvjT6ierYzrSLWPBF2eAnp7t1xLSP8xD529RgsRebdvfWPtjGP3kvrZ9qvyn1ruYACT9NKfvd",
  "key30": "45HEBMtXxVPDiPCVJwgm12fbbnxvi2Qr2izMBvWz83kYvrpkdfTyP88njiZtJt3SjWCU9BSvEqZCC4wSaFj9v7BB",
  "key31": "4eogkq59XqKjukaVQk7j9Kf29716ZdskXuLENqvocYcYPoQuXTLvbzkRgRs5Svvkm2pxdaShHxnQ4ryGKvDKhXAU",
  "key32": "3jGf77TznfovTd62wsbx2XG3iwXXegbL2sur9fHXh6TbpdfucEYbpUxGxDyavJzmuHuf4WcCNUTdLSKbDNXm2Pdj",
  "key33": "2YoWZXHaL3RJgMBNiGWBA8ygZNA5TGpeUGyMjA6BXCSjLoJAi8ieYPptw2YzW4aWtskPuVbv3r9EUw1BNGfj6Ljt",
  "key34": "5M4dsdohNYX9aXTgBnkzq75WCoQmziCsiWhryJRH48VLJ2KjrkqX6Pr4BUJYyTegfUeddSiu5CMsUMrxfum8HGjv",
  "key35": "4QKK5bSktJoEzYoiQPapqJHWKekPchoqFvr1ySNs14jW5qY17ibqi2Di4Ku3yahc4KebTaNQipsDQMVTEyxByqD3",
  "key36": "3TKcoyePU5wMQEUAVkRUo4Mn7EJMuSD2DzZdd7HppUWosGNczA3C4GhJvNqR52JqpYTc6jCiSzaeiytW3BTNSfSJ",
  "key37": "4F69BHC8RJjwx8GkvJrEpvrB753CG3oNQoWT2JuDeW6Rea9s2KGEDnCHM4tpqR9m8FSVZmzZTZHpLjmY9zAXNtMw",
  "key38": "2xXHww8rZcd2n4vdf4NfLEt4hxTdZt9TUi2LAGTWsniPirEMjXLLB7s9xR7yidouDWjJfr5VPrFpH6tb6CM3fZfi",
  "key39": "2Mey96MX1zGZjn3qLNA1GEdiDwhzutppvRJMateBw5Wa8EZouxkvLiRJHUkYpZn9bvv1NpnrwYFyr22UiApPVk8H"
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
