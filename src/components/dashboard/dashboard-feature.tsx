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
    "5gHE5rPuSnGaFFJLRKjhJ2WXaWn5xentaHNVKVn8C1huahfoohN6jj5XFavpgqWDJBG9oBs6Rujsi6GrPhC2mJH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QE6YPgeA9DVs6tMm16RyzNNnut15WaEjcKzW2tsMmnFoYHQRd84NoGf89qANubdLDYNV7SXKjhSb66CJXxQCjsx",
  "key1": "61pEnne4GDaHknLcX8346A4ZQyrKSb1j4z4tt6xGMAWcTFkpZypxmmqMyj93DKdZnVmRVqkTeYMH7BHxJ4NMgHqM",
  "key2": "6YySZb5egkoP4ZKzbfaJ8xLyRu475stZNjnFprqV674SLCqyXUa6CsyEN4kojY2Eb2f7yqdgiwaaCNcZbXWhVje",
  "key3": "WFiLZgjD7NJRSx4QTa8azTFrXokiFk9dxwADHhfHZDyqGwR4iYy2tJCFPn6qpVN6jKhx56LShS7q2oUithJVoGa",
  "key4": "T9DyDTQvtzcgrbQfXExNNWdvZhRWdvGGcmH2orVsya66wRTrg1pEomWRDT9pLHs8tTgG8YaNvwLB6STDEUvpLuU",
  "key5": "4oadC7Qxxjkz44tQmH6rifJwa1n8VnHGQMXUuMaUkS7FBfRWZ7zZfV3HKjBsFYP4s4zqAcQ68fiGtVKe1tKbuTtK",
  "key6": "5vWGiLmshTwNuoByiuvFhFNiEAcWd5KWeyeg4XZRwSPaHeoxwmN7ABkvobtc4Ueo2ZSRxWJdid9w3HLtm7MbjBq6",
  "key7": "Q7wW5GQrJzAcgzA4opHDfibG87w5b6UyNZKz23hrfxhiGcfSw76Q2msAJsoZtHndW1xPUhPirjsuZp2sJs4fcBm",
  "key8": "5vYXKg2zKqiNqCTCT9LeiUyi7zR3BkP4rFrhB1WTtksBNFQQ7dQzixbb7Q6gu4UbRdnLpNAZvjgSsUFjRs9JcvM3",
  "key9": "5q9FoxHqMfWbK4LAfuSLrHnUw5QKHunSnSnuWoPzzccYdeJeyyTvNpy4PsphrE3NwMbCtPS8f3S4TqXFWczYRewz",
  "key10": "21KqJUCtNgE4g6HGSm9MCSqREJZyHbW9hrW3gxg9toKbjXsKDiory3Pi2mT6cUmv9qKfrg34346TyGv7jaU5HL28",
  "key11": "4vTXmedmBJPu9LzibvLNv6Ekds7f4xYi9yojFZRLZxHuMmKrb4oar9PGZXB7qtnkfMk7DobvCv186YMG7ceGqabi",
  "key12": "314F5kV4hLMqbNbYisGFBr6VGwyDRir64SESiY2uDQLVe3oaHeXfv8uLQKZWJxfjGyoEs1hhJb4vwzmKpaY6FHFq",
  "key13": "3Zcfaj4P8YcsSwCuscScvQsrhWWX8Sf6HMrCASqnMLi4Sy7DhYWSF4SGUp37rqx8YokJ9jEHTJKTFLiyeZPYgfRT",
  "key14": "388EmmbG6eFsYvTXiBcvucdWBUbGY9Zgu42fEVCsug7vu1pr15e7cc4bjDjUrc6BbSqENS9b3v1L3VCkVn5zm8ik",
  "key15": "2iDcdFyjjYD7p8LVQyBuH7LNnx79cZ8aGM5wRdWtVL4TQugXUhMqNXYitd4hSRtEKzmk8eD4oSa8kVb3spFpiHd1",
  "key16": "37ub4NsZUGHCn5DkvtoW2tc6ZQ9Lco2mnAx4BfFnGi7ZnVEvdA5Sta2aDYrdgKgw8fABfkpYBu4LVXTbovwjx9dw",
  "key17": "2YXhcSSe32yKgUWSkphe4Sha31RPaFgsWsjojN6EbdmGPVUEcftjpTjLvM76n6BbYqzEFEtF52EhboDvWzbpvq9h",
  "key18": "2oGD1jasRUPeGjoPGkN4oxZTs5i9FRDFZRczdkQncSBbg4w4rhE9ZTdigoaWHk1XZjSasiYqjuF3DHV2hvhLktTg",
  "key19": "4Vf7SvqTVKs9XGJC6r9VL6GsFj5K2M3UArmKmQ823Qy3RzqWqp4BoSHeVN3XMp6tQAbTmUf9DihC7cFWqdx9j2HY",
  "key20": "5B2zPpbHBYLvcfi9UPhycbZMzaGXVuWo6fJxxcRhvRf4VwJbuktAGzskDyvZaHbYGDDqbGLZACrtF5QMATHTMRL",
  "key21": "3ixCQwYpfrJhW6ZPjsfuBgpc3dbyABzu4wzHepHWeH4qLR4T2BDsKYRCtcsMsnXhLq3ed5ZsZGTMwVwzVtUPwXEE",
  "key22": "F6hLZ9FGMvXDakHc6YSCV8idiFgS6fuGpb6F3W7CQdkvo8jT1PYRG18DZw1dxWs8CLvuvmFEugK1tCPPHh5Vsh2",
  "key23": "2289X4mzSwZNca2w9xUJ5cDGR6K1Z8SMMDG1mZSajdNHmzRw751yM6m3yjkwT7jzm9HQ2pgoXUjuTrZYjzN6a6DP",
  "key24": "2Xk89cfs4WTbVugv2wNhtUcgqgeHtDUtJhnyHCtaSRZUnpWDNFRsLFeRS1DU9RWAFXJw8njDKTrXth7D43XpTJum",
  "key25": "4jJFYMt9EWwMcgVzQnMeDaK3722L7F4BSBx6uDrLRKZ7bHkgfVUQ9f2bJXEjJtSTqqegUFqH3RkAfY6HK47NcUvW",
  "key26": "4cZRYdCqBLHbDnTorHQfr7cWqGMdoJ5gNG75Kz9iGFjKMGJFdYmqKEqcNn7nx6cvz3WBf9BjvCW13bJG7bzGRLYm",
  "key27": "3tuL4ynhpCukxAtVEgtRSUFxaUrVtFJVK4NQsiWnLHkkq2oKKvj2z8TwpCxFEwK3U7BRjFrJYhwFQv26ewqFf1Xd",
  "key28": "5R5UTgYtzmaZToYnwBUe6GQVRoKqs4xN6FraKSEHb77GaBBGHzDMQ6K4isix1bK1hDspQLfe1mDT5QN957YjEhm7",
  "key29": "2tY5bDB9E6zJwhb6EVRNtHxWdhiWMEVkgpe9cFwjCAmxfZkbDGr24xYkdKXemcz3wt5khjKGoTfg9NBmf2qasSGL",
  "key30": "3jdjZdWQ64A4b3HJDTFSjNY2bJEUPF2ro41dbKjacGaC6vEop2gxjaiVB4Mnef7LBD83GEUeifLep4wnX3NUeKwE",
  "key31": "3as72JzRAPRqqvQT4BewYRwHxeeiZEKyxWrCTAqovXTp3C9da7qf19AprqKcN42V2yiYixViFP6Pz2t7B17mH4iM",
  "key32": "3TbMteW94ZQhFeZ48BJPeQLnRMJrg7WxfzwZyeiNrXCDxw2sWTsrjJSZVJevpMAhfj8wAXxuhBJboAwbtZGFEu1Y",
  "key33": "2WRs8NaM1qi8XPaSPKNKUV2ArzsvuJJ4khcYCWDyr2PSS28CrsWAEo2UfpRTgxvxejgRHtYRKrWkDtvXfaFbpe3t",
  "key34": "86MQFaJLN4wuUtiZRzUHFSUPwNsJimdRxBDzMkmBgpmoxN7dC5LfcjuV28VHdW6ek4XtMWtgkitbNuLPXP9kVDJ",
  "key35": "2DG7Lc9hSLQz9HoHUVSgPF16DEyGJVN2ftfccq6xnWyRkUH3hRF11bJKqbKhbWabQYv79Nb8JK3KMaPUx1ZYSQ74",
  "key36": "4ekq7dVM41KoAhKJACpwPejYzW6ZQE7KM2u6G5rYkXP9N8dC3fQnZtzAm89T7wPT1Xa1drzxzhSjJ9XvNpjXe2S2",
  "key37": "4npbZVVEyNJtxzWCas6eZ2q6oTNUPikDYf5Z1KtSnWtj1m5p1xqmR6JDJpEbh23xBFY3JASJk2tCqhzmFpnakBPY"
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
