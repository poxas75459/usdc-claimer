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
    "3HG1ZcG4nfnfj25Kuf5ejcUaP5u9251wB7bQhdHNc525GmDbsXwojaLLHe7GDMskTCFV6iLfrk8o6sXt5KhRab9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZwE9z1Jj3vSzieWYeUj7gRnzY9niypg4qTDAJG8Bo1yQt3XvjseoTVQTDfNnRtT9DnfXrypUKcAEFEfbo4txkL",
  "key1": "3KtxzGusnNgaQsrwuUG4YUvgj3pxAwusyHqRmAQyvEcFQLHt5kqjkjZyd7RPgin2h9Dxy7cRP54rizsZCvaZV1X2",
  "key2": "3yXkYazwbdcbwCoFCHZufLjSRizw24WkTowQ9Uk95pkRKWLdxnKwNaWae8d2XKWggpFLpz1gj2pp4AjGNGQeHysh",
  "key3": "tqcxrFHWMXzrfkEMriEhSRaMKJwSrD8NEhGj73EY2ZWoFjY55AkNhjBu8FLPJUDzqqPCobqvt511xK1mBEzc9rD",
  "key4": "21bHaVU1pQHrKAw3rpssMt3UcwtdJLvsPGCB6u5NkwDDqvgsXD42WNqeFP7NwBhxTwfPk4Wah6bTTvufrNfMCERY",
  "key5": "3SPprsjncjpsFnMfq2B1foCt691YUuDhPp9UPhxcQqheZgAJaB7rTDVU2yMtBRCMHCZqghmMMk4enCHSc8wiP4fC",
  "key6": "5ZqWhxQcQ3j21DCqgQqFR4KK7GfB78XCyLs7HvVDZDn9PMnvodk7titCZJDPFF6MgDnkeAGDHAy4NRo644LFmWE6",
  "key7": "2Cc5L5jBQrGR2wAirBpCxxQmMZk8oKw641CWfAh6yJqzCUSAfpkg5FnbPBouJ6Xi6PagHvkgSoxf3SqLKSvZn8Qj",
  "key8": "X7FRtJjrFVuCxChsjeWZWHrVqFfvHa7u49zYc9XzurR4mxzqNmsLkkWkhSWhCBVVgUJ2mGJc5XUqTrST23xn319",
  "key9": "715h5uaEABetVkffdCSdLkkZfomwmrmn9JQxFecstuuoFwvFBauKpwm19wCC9P9gGMC4GHoCkqBFG7tLrs22Z9L",
  "key10": "4NUwmRy8cHy2MBzAJcZkq5R3datbmQ92z8PC3HryGqRQZmu2rEHq4812C2LSYymqQCYFX7K8PJWgdiduewPR51vy",
  "key11": "3mKuR6uKkZoMbXRtxPBTLsfeAWrWnhYXS2Bg7CA8yTyLUtbATMF3ZNTf1KBswYRp1sY12wJKEUQQ45YK4JsbcNw2",
  "key12": "5jr9iTQsy944c2hmdQSiCrivYTzXBdwdiZgfC2zWhBcQpFEwpZbSpxmeTukDdwpAUBgTeSaE13b4QTXUuJ5kEppx",
  "key13": "5B6ZFDAgWzAw761Ntf6ocUJ6yEoLBVN31n5GnTcPYygLYfEfv5ja17NkyWDtwDgWEauNrF762kAW4YKUbaGwjXTC",
  "key14": "5hosZ15PY2gJsoExuKsVFYpx76PystrKySTMZfgDVVN4sRhbq6uRiWLMzdtdTw21ZuWwTW9KwRYEj4k4zcMJnDc5",
  "key15": "hnYLcwwtwbLpMWsC4AcALgNt5Bi3HTZ3JQBZhcFXreSRKeoNHHiymjVqbRP689mkmGtHVXNBFsYDqn56TdtaSc9",
  "key16": "5oBd6EV75EXxD9bMRGfj6KHmTGK6cqfFTcXNCa9vGkZ5SzaT6FZo8yELCXVoGo3b2bTY9gVob4LoixSuWB2YNfGi",
  "key17": "23Zup3hDefxzpijfXgmgRfsJepBFK2GNPmGVajkkC9ijNn6cogn1AQC1hfmb4MGAggp4556kE8XgX8cdzq9oCnCq",
  "key18": "4RkfFkoDr8x6bfpPMX8AxKzTg6LbRGHNSeUEtAatrC55aY7vsTgydoJi5FSakLXQ8AbU2fcXZNqteSfzvs9HL4KR",
  "key19": "3m5vr973Bybtnzt2T9soT1WDFvWJKobTy2aAmEP9XUqkbYZR7m2cKn2AKi4UChEtXgr7KGGivdhTb2bpDLaV3tSN",
  "key20": "4h6bKKrBMVgp13quXck7JrX2a5iKkqiJPw8JsqpEsEVDZRf9ZbtomnE1yhBmEnu7xZEy8Y3zyQWTQzYd5HFnUWMU",
  "key21": "3MzEocyTa8AahBXZ7w539dZaVLcCTfnrZtrGGY9taTWU5tZ2PgmP8GoRdCSKGrqcN5ZENHokrurW6CLdrgxaCKYJ",
  "key22": "63Y9nLksBhd8B8BLrbzbs1ESYafb7JQJkJgdFwGY5CrqbZ7BHwYzxwkNEHau6qJjd2moLvPzYsS3EiCY4UF7LZ6h",
  "key23": "BrBSvmgfQEfKsMV5WyLJiDfQj9wJRPufe5hjY5AZEamGd7euGrgb4nf7RV9KuwDAgDBuoiLTxfoj3P17JmCRNVK",
  "key24": "612kLNFY4ibS8h5ooj6WsJUbZWJrJn9jcgu7Tqyf1C5i9vjhm2W2iDWki4iVZKi3QD65iqXpYuJJSvfqKGtQ9idx",
  "key25": "262t142wFTA8qJv5hUH28ursQiSfy7Xx4kCH5zVqu5R2KBNhZpsjJj938RGBc2ksPahCHLyeScD1AUdUP6544pZW",
  "key26": "38CzQyhcCA1VEw9fXKj21Pf6jgdHkPrMW5BiKqyqbbGwpRFBnzSXvYozJDakVYQyGgyiPRvWWoXtVWTCAh8tb4Tj",
  "key27": "3m92XW7JRcC6kh3yFLtqdgN9GsUQ5WMQphkzrt6x1PeWWdRL6FpToL3uM64ScE9xVYfvzsAkPaDFkfeKmJhCQjRZ",
  "key28": "4RC5dFovFdg4UkBUhLGSCVKeBnfcVt47ay8pffRWzvYCZeJpUt9iqfqRB1emYD2KHLU4J9L4rnAyXjesG7HfY3HQ",
  "key29": "4FeFuKtjHPaoigx4rgdhy5uEDCwmqTEoA7MjMdAN6mr6ajTrVmUFtkSMVtWCPwzJsoZ7HDSNqS647MWjxtKDtWVv",
  "key30": "2V1eFMUcwVxfY8MRAMFDyspVaMTqhr2Bmwrbev33stS9M5BEUvL9GyEUGDkYTng1H8tKqfg85T6ZbzCfjrsb8ep8",
  "key31": "4eUxf8k2YRVFZ6pMPN2TRmtP3gQ68iPJxLD5YcdWvRvhVvnVT6vfFV43QaKbEfr4qDyoqAtrJdveidvR8qFPGTZy",
  "key32": "5n4ZsuLxdkHCmWmh38FeGdWRYnf3tFMNLYB6FPSYsYN1pgXhSUcqA7Uok7sWg2nYcCXsTDkL9s9SeH9d3QucUpk1",
  "key33": "kHYgs4CbnSwznJtySFVD4LQia6NRQMp8i1stuz3t8XhR37W11v4TjWHkXyCu65KKQbjjsmSwXa3MNU4K1FRDmQf",
  "key34": "38qACzs5N1KMCmG74JQX1WeZrH2zLQx84YMFcwo6iYKcpZV9CeLXkEzn2a2SivHSTHCaznBVfymoFSN55Kx5nPTg",
  "key35": "VCufq9d68yBR59oeSZXbgouwmjMnxqafRCn1MzkGZ9Wu2nxpCzoDJVp5zAQPmZUx35DwiQk89z4MCehfSMxNQh2",
  "key36": "5jBaPE3tayqfo9DXhXM6YgnKfvGrcpeqe2YSXUuUf1Vm2Gzs25NkZm4P73Mf3iU48312xJQdYkH7GjAsqbhvFBY8",
  "key37": "4F3CN4AYBG3zoBWAY9d3i7Zh1FvQpbGKiEM6b3sQ3LuYeo3MHiVjLPixThhFRKxbn6vhQHyNGJqnscCBfc6bWK4Z",
  "key38": "3EPDWR13pB3SBXb6DN11Tqm1sLpPU1YHLx2Bihz7afDSWeDGdWgXRvbtB8y79U9i8ozSqitZHSG3UXjcQrNNfKiB",
  "key39": "5sR6kBakXmavRWAGnJmuAKCGRVPM92rpPVdpnwEfQmASt9RrpYBDfLHGUU7t8mzoLGuFSnKdez6FKpQzLd7QFiPq",
  "key40": "2dyq7V8VWqwZBfNyaTdqPZTU315GVnEeU3tK9ixR62bMWGjnn1Pj1ojwH4pj18mEX8mNpHPCF61Ykn3SjabS6cqn",
  "key41": "65HE4nxKMXK5DmF6pU2gA3pMQAuzwaQiXgCZkGk2nqcf3ekwLng378naqmzsyVAV8wgiGnd7wT147iEaPZT6YAqv",
  "key42": "4Mn51Eip7xBwng159bcJuSaNea9ZBDkAh2SvcvxrShxKicaJfcYbxuSX3AGVQHbYCaBwtbHJqnSZdUfiPVGGzusm",
  "key43": "4oBNea7N8aXcy9xvDWs5D1yMoCnVa7PCQjwsohZQWfMU7bdaA7xuCePKzqfdwBRpWvrBsHMATyahw1i363TytstG"
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
