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
    "2DNhgv1CUSfUknVBWCC7jLQYf1kXYToiyqG4Pk5MWanLVyX9qZbWVi5PBu8aTeR2K6xNy9UeHwaR6MpB8K2VU7u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ConANZdSMsEXQxbxt7oqtEPJNh7783dDCijhW3dALuYWhSuXJm2U4XZBNCLUPskFC3Qgd2TkChKzaSUbRuu6XQt",
  "key1": "4mFwWykVVHoS5ave9JSDtGT7EhNFXrC2xuyXY6u8MHEaqQCcueQyWYsGH5aHURcG7ShjHMUFXFgk6MSH6L7gAT1U",
  "key2": "4maBhHin1hJXMmguNUASUXitUrriGSNJYhBYSaCW2gfAzfM2fR5NWXqr9BNQZSdt8b6FxPRAgFvf4EyffqWdfnTh",
  "key3": "3dWEgTK4s7ZoxiezWVACd2mqGrf7pimvEEPSiHEaaaqUaeMdr84SoYQxmS8DARRB5JUCFVGVQy2SgxNencZU2YEf",
  "key4": "4zf5woBYoog214pVMxytHG5rhxuPvrQAkEG8MUnuQQjGNn4boCkcJPaKUpzKEotaE9hcEWHHt5APxoubWtGanVQL",
  "key5": "2LEqvQVeiQMuHiqVay2E23UDdikFF1xgdt4UqjJmofHfPpcry5FSxVwq4kFkqCQfs96aCGNen6pNnEWBa6RtjkE3",
  "key6": "2x2z5c2VVcnupxQsCJjVjNozXszwX6JRs6xQMqcBtyUvzRiHKEkZ36KwQiFpebGAiAMVzbEAj4VgMr7kvroPGDj",
  "key7": "au41e3BC9zRPGXndkjt2uZ3wfum9XEWXG5MrrYbqcFVo4N1GbRtVAQyWhQ8hDTQQ6hZWYS3KBZ6MpodeGQuNsEX",
  "key8": "2DebAr4PrxnrhZhvHDP4tBBC8AAze7VX7FsERVpq85iHpEszE9nvVyZeAdrmL1Sd6osz3PhEsdPdvdHwj7kYtkZF",
  "key9": "2GnwzhSEcZP8GG5SiisDy3XG9BnE6jTamiWnWStKXvJJdKKaGveEfETyZKdGjGiWUFLo1qefp2wWyrteZSYajSBY",
  "key10": "5riqXnjevExTEDxW7CSuJcvKJbBMJ2soiBzsbueinedVZe9SuAHwKdBCDnUsSidJPYz97xNqnXju7dCCeW1hHBLr",
  "key11": "2wvkxZbwVpFrzavumNQgGSLEjbNNNaAbhf4RWsBFKQfDbT6H3Na7aKCbgQTBob2BgZvZXndeoyeNehrCGbEnq9yN",
  "key12": "4P5FXh6dZGTpWgJpAL7HuY594vVfAq4dvQm3VMVo4wC5KQwbGMDU5CwsRXWKfRDynpPzFtzXP8yTbinEVx9tEdLD",
  "key13": "3ascGYn9TFPBxS7LGphyYuihSpmnS48RbQFe94rrcMvYaic2YJcWhEEimBD9ekUjXapAzhkG1EkVqQ161RuJ3QSs",
  "key14": "V4A3oJ5v66SFnornPRakeMCDaZDH4EcqSaxbKh4eQ3iV4cPfgewGRNrVyUSZmnRj6ZkX7SCuVnev8YomP8LfxUH",
  "key15": "2EinJwK6cFYFSmogfTJbsNWCoG1woucN3rT8jrqhm1NooFZKq1ynw32cuwCU1rs2GrVzWGU9qUdjw5fTWgWBT8ZV",
  "key16": "2ETwAMpzJCG6PLQcebkrUe4ekZDwQDUKHkkD1fjmKTmuC9wy1vZSPYSRQQ6ZT5b6w2impKuXBy7t6WmtQE7foKLz",
  "key17": "4ywCM1ipwzYfReLeEftfmQEd7xkM3pbBRHN4anuv5Pd6C3mJ8NSNBnjJ2fNDeSUpbZUeBg2mqJz9ChQ6KvNbciwz",
  "key18": "FPzuuHPiSJr6we7Pz9EDPh3thmgrF7EBu8mGXQaeBN25fogQ747KTALJtyfSRH6yDpceoigXMb4LdFqyaiPoMXP",
  "key19": "2cX5rw3MdWTjLy6gYLQHFZobSWk8ejMek26s4JZUcL7kKx4DN37iDhe1bgdiaJGjAT56GqPWKQeXS47oKoJ5EYFN",
  "key20": "3K52XTzCytJC6TcjsfnskoUygaQDXQxj4osUkPe3oAX9nUsvhR7tcMZxPRjQS3MAoT9Vc9T6B85RnCcMWpF9NtZY",
  "key21": "3XvtfHMkHQTHh5zhfsvF6Gz39iiQ1ZMx4Y4BJ5URgRRxAX1srSLX5vn8CehfobBWqixoSeXCvtjGbNop3smd2qPQ",
  "key22": "2ofD37awVCsZzWonUonu6HGmPdevtfG9qKoHfQyK9TCXH3yn6aWiWQm42QiG8Hc4f5mqZkBrNRwFJZTHEZZtducq",
  "key23": "FTr6XyNJ8B718JTK4XVSRhJ9FyN3qCQt1YnTFdBm4yVnC5V5Zvtmb319y4zj9H1bkdZjqVofiGYAMKg9bbATyPN",
  "key24": "66a7TSRQrmigpV4jLXoiNHriUKf6Snh8XnihBk5yGVS2WQmL6Hyo3uVGwn8KvY2DKDiCR3TrcvVQH9c3VKiFi6Kf",
  "key25": "3nZmMVTdks4JGbfeZhspNL8a1Z3dBx4ew6uiiKSpNZCHBqvfH5rNbtA5y85oucssXM8W9FQyToCd3b2XYjmV47nn",
  "key26": "33ttvuvbPHLuSsEpegWFRYfnykzMiwmkGfEqo3V84mxJZyzVp8symGcysnNDZQJRU4koLshydB9PLr7Q6o5Vmaaa",
  "key27": "56isGhtHzB4JdRN9ThFigqCuPjaUvZSB1u1d5C8d4CuZCGEfZ5LLNHYCYK1wF97LKAW5aohgHLcCHebyyP2USMq",
  "key28": "KrTqMewY4goX1nxVSxQzvYDY5DqB8kMH5Ec7u9qpsybE73tDRNPV9p5CVMrWAfJf97rav7ZMQoWg6WZuJZK7YrF",
  "key29": "DNMw48F98aWanmxXcEe2DKeXKz777w7fS2GYn5WhbGosXQsRpqJEXAriVknQ4td7P1VEsoU1pPbEWKMC7M1qMHZ",
  "key30": "56h2Y8fVrLaBwDV4KEUfqbcxSscmZDASzW4egJVem3Rdtg1XoT7RCTe5E6xrc9HMTJvwHUbWu1oyBHWbNSWRKzo8",
  "key31": "46NbtxnskJprFLgKynm654e9p3ZEu1cRJ6qdTiuvB75QuN1StR8zDk5uGjARygb1DWhGfaNxJWVKsrKvocZ68Jmi",
  "key32": "3spaTnemm8zrHuCAn1Cbty61zw1iZqs1HiQNRyCFunDh7dCz5f7zjYckLwRcUfoNT7xYXjmdmGTu5f3faFdaxA9m",
  "key33": "2LD2BW6rJKuMoTJCypUJYjWtPGibfYbq3iFWUAD4tYfRPx9Z5bJ8wbUnSBW2oSHVDvBPq2kR3zHktd4iTZVrzhKH",
  "key34": "4Uk4mYewMdxGoNGKXXygD7Eu9igfm6gM4etcSoppSS4vmqtkz14PCZtUigsChAzoXRnSvPrJN6b5qPdESRwceXtP",
  "key35": "3XEwKHEoBVX4GqXQhFiAP3DRmieEzhtGeJNQNckrPHMeSo48xrmyAEZ6StuNiwM6JpoBn8Q1ZKqN5TCPwKFWFvnm"
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
