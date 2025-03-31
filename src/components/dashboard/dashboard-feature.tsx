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
    "5PrwhSTrgugXe2e4gXesH2HxqGupiRivk8dqPEosW1ppVFZgWaSusAY2GuQ6DE8vj4nUAX8Kn3Z9i7x9Lu2B2Kjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KqddnLE1PVPNhg8krL2hZw523jMCbCgUXav1bMzSVufK4sopgGg8Vj44ABk2uozkmQ6fR9wwMkpuNyoUJnJHFg",
  "key1": "3nhot2Qtxd2fqiCXMk6Sh9z4fdGA2zSKs5JRyZb3mjWJ4A5QzE7cAn5yzEYe4n1LytFboom3G6bY4Y8ZKS5F48mf",
  "key2": "RaCgvq2qmhvQm7EVDPyw9C1BKhUrA4fpVRoHXqv5QMiTk3rWpjUK4zeG3FkwqeeEbArfb1UKkTGpjWMcBBQobK4",
  "key3": "5TBm23LD3BiUMNgUiFrrZ7cH4ni72nUYGWvGHxiAMZ7U3x6Y3FfNmVFYo1aSBsD5eXiuC1jbSL3tE2n7iEj6ZA8D",
  "key4": "3xUw8fFmKfxxn7PnxCYTjK8EvZSwPexbYHp7Q8yErKwTdJr4Gyw3xga1dKDvhL2ZzZvyfVth8RniL5bpLTfcTbmM",
  "key5": "4JsXbqDwUVJRZt4yv9XGvKeN2igJ3pXKs1QpxApjeCcesbAgqnW675L1N9jChdUgkE7oYuJirMJAgSdhM7MaXbe3",
  "key6": "1PQvhExaG1baS8QaBF6RbuQzCQWVLeho4whEAsVjvXhXaUiRqqw88RMLETNa9syKcimZ1p5ApW7j3ye21gTrDiw",
  "key7": "4NX6HFgSnsm7dQwipJEoBtZgMX6xBQoQNMdsGWrHA44XL34WmzVbncCFtC67vLqbpjS677z75MqmctwXXyEHfnLa",
  "key8": "4Hr3Vf4vvrDvMyshd1yas3VyKjj5LHM7Qxkf4nxJkkJ68WQPwrsA63wNJSUC55Q9DtubkQveWgvduWDbmsfR7EGh",
  "key9": "3ixwm9c7sYePSSEsZdFQvoV3VEnS5F12Eyu8dnHpz1muqM62UmfFtiatLevkYBRZU9D3DB1mBHkk5Rjq1Mu8tY2k",
  "key10": "54Us9XHb8awxDADhUSMy9QJpuBEwySHus3bc1PJGPZp7vYb9DSnugKRELbXMbmM4yu5SZbRkECrgWfu2UQJtTHyC",
  "key11": "21cxjFfGCG5uMPsqvjknvN1tsv9VZ5WgvzCcA9wybxJrVdrrMEMbnCdaLAyMzYV1G5VSaMzWXtxM95vFnYgPdya7",
  "key12": "2STwTqDs9PkHDp8FfkZ2Z73ci46CVL2AYXw8QnbfNcRwCoPUWZLwgd5x8E58BwWNF4T5gB676wcfN5XeENzuCW2Z",
  "key13": "2jMkVpD7LNA6BxoLFcktpKLa1QG9bsTsfuaNM3j3ZKjKpB3Zfu6QMWJ3GSygpwMxSeJz5XLdzCB4bZfkKRnYJDaz",
  "key14": "5rsbhe2zAu2Av1zgzGMUQbQ4u9FDiEwVPpfGdbwqX7t6XuFew3qY8zK3chq5ThsA6B1fJaGbUHinS5oimLEbc83i",
  "key15": "4SR3jnfFkZjV8wNUd6bXX9pKwTGigSML4xh5MTJPBUTCJapPFV8ftAHuYVFPDZjkHbcsWyJksGaPufTqUGzHDC4t",
  "key16": "4byYtmtucBeKrUbK6HuVQ86uymFnaB16f6k7s7AUv6ajeLMaHbv7L69ntgWFvTYG4Xg6YMj52iuJbWdegwU9rzbv",
  "key17": "3f4nZDoMjAZ9FKiHvZtBJfCASaVwtX8ZyvtyvjBuFTb138ax3GxsMkxWYWMrcRasDPh7Lvmp6g1r429Go66Ytj8w",
  "key18": "4mwzmgNAaXe2bBEy8H9ETw9RhgY1jLi7pKnGJGrWDVRiE5AZziWNidmYDbq1ZexcTknCvVec6VJwpuLwXZ5Nrzgq",
  "key19": "6qSchve8fwVF1D97jC7B5ce9jaTyqc2cMM82i6vUrN6Cd9qSx5EobK8ohCUjedYvW6biA1VkoAZB8H9MoToWste",
  "key20": "2sLzGXK3jhsh9sAP2BogiSXYjPJNx6Ls2G99ZSnk2p3m3R7k6B1GsNJz5uAyWKaVHhjXSXj9CtAGdWR9rbKTnVcs",
  "key21": "44okBNBrMnr1bJ2abSFCHg7D2rpk8QhtLyG49D5MtUtoBxnWiixuof4ix2SSxmkkiyZub2Ut7tK6GzPBsXYwRnFh",
  "key22": "3JQsxemE8m6oWvXMwrSco3mno7p7swqgvoC49Ar6BEknDxSFARCCvC3iQ6kXfoWynwoiAr73h72Ptcs1aK7Ebop5",
  "key23": "2Mctoypt4ZyfxWc4hAorhHRyNotmmHRTRfhB6nSyXwZechBpkcTDq5uq9Q3f9ZvPwF7hJ7qousGWPhZFgSzGYsux",
  "key24": "5wNmukx1bLei9JwGNeDfwxW9Qw4hWmHnN8vFd9knecGeJFyUBCM7unFPiTRhzvDx3wcReDdFnhRW5C7VLxYmgB3t",
  "key25": "GoBUN3EAzEAP2yyFT9L3A3k514WzXh1VNB8SUgizbyzCYVGcAq5c4gRdfhWX7pdLALU9hP3f4m3fogMDbXSGwjn",
  "key26": "57k9cHX3DJYWmi2PgLnFiWNEnD41xBnQb6bc9vEheeGsWUqv4Bwx4cL1SGmUx47y31hP39QEfettrpCqAYnGyEXW",
  "key27": "27qgVRcgSjMC5kZZzFRdtN4bfEUPjyQ1xRoNhyR2CWBVg5LHKYAUteT1K5DYm97bWETbti5vEKCrJkipxbaQoAMK",
  "key28": "3FRiJixUURc8nR7WVVGArPUgFc4tToL4qru4wr5o4xZv517GeuSyJJfiyQq2caxXn4vTmyDwdGp1sw58k6Sfr8yJ",
  "key29": "5NFmPnrTPCamrNxTDmJtcATEEDeisYT8wWBgdoXvK1k8H3jbSowk5Fckos1eoNFR5raWSLzEGHe4Fkx7B9Bebi3t",
  "key30": "4KNUVWD38V7FNq1SqFfnwhz7vGJ63EimK3TUq5SQUdbgWbfGVfexFS37TTa4zocpkjuCnRLYeYNgDMUKbX2TRTQN",
  "key31": "4wGwJnt8LKwbiWWXXyTnPnTuHyjGLdTMxQJFzQyhsayPUkmJ75fhLkix9HstNYQqd3Lyho2xwHBX8KGT9xWFa5eS",
  "key32": "25U3PZp4hLiCLaJXbn1BYMzGTyaP3JGqtVwDjVRA2sTKBALx2DPQMoRCRh2QCgZTvaHtTs59yEMHScN5HXSPYTZV",
  "key33": "4fsVJPa7QffiF6TDPWZe7BzdVVy7jpZJ9oretMTAMFc9A2mSH9rbAhNCXcHBcHVnZwefQ1u6K4oFLjn5ixn1Eywh",
  "key34": "4QGZVPBfKQzfadsENje3hmhSs1uemTUYrPfytuqQBs7ML13qmYvJ9LFurgquS7Ny98RZQWnyBzxd4WD59AnqksCv",
  "key35": "2HDeY1hKRhX8RUtC85ipmjBfaKDTg3X6BWbrMjWsp4mFNohiSwYaVdP6ubsbNKmWJR5YDwbFfbEsTLCnkgwwfawL",
  "key36": "34Q27DBKWbHAYFjgrvrpWts94afZ9yEzRNWft1FF1MFUu52VEF2BWhtXf9Lu15wU7UBvEwR1jimHXpiwXJtRdoQY",
  "key37": "2RKSMR1hGdsxhgC1H5LpAnz1oMzhgaxmUyxZD1qV9Y9ufvG7zqJCbCeLWtYS6N4AfB5DdG4FWskHCTVGxGTQXpD6",
  "key38": "5TeyM5jCjFMu7yt3oNHxAaeDJLmwnAtZwLep6hbrAw1cSjcokGMT3pjNTnFFyJMX91HCQEAcfYZ3P4PojiNuTtna"
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
