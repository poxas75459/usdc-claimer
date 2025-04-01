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
    "UNmG1bmNAMZapsCLrZzGYyMWNrKmESUHufEuunUsDoPfFDpcV63uGNhPKkLWmMPE8HTq7FA3FuUgmKuxtWoKgfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ikf6k3QggyrBcmK7wWRAUwUVyAPCmWoYc48xkhwXS1dKdVkkepDCebwqmzD1AhnCqxUvhk9YBiVaSJJASMm7T1g",
  "key1": "3TMpWyN8kDMbYyHTsdpY7jvexxmakRvqAdHXYV1RBC4gVG4sbc4MGkJwJHroVeqtVYQssTDvVFk84FHRYXV1qETk",
  "key2": "5nhfeZqVhydCvL8B2BTexiyXSP6eyzdcYnmXMmPEJ1dcU6WHCFdS5a5us2FbkGepS3oS8ragubn5Kn5seUjn9PHa",
  "key3": "2v4XGfC8gmkqgVr2vnLxCpLKcuaQ3GjF4reY8YKsn7DmzqFmuctLkYTq7dw1VJHp3kYyMC3d5qRHTmQQaW4JzJ2U",
  "key4": "5WkguTeW4b9ToVaoyWCejrTHnLqdWeAN7qWPyUMafZwGvC1Mk2yTPGNR2EkeDtC8UNT57rawgwNJ28TyYmdwRSXK",
  "key5": "5S7592E6LcVDbFdCab2NBWSNnJk1aau6BU129u1G5zLu6Hc6KZgrqEhC7Fr5dBdZnPeTLg1QiXRJ2UbGZBtvr2t6",
  "key6": "Y1Xk3ZYrBazYKUs1BLTy7iPtQsgkAjxni6879VC1V57AosgCUjqBUdoSoTbmssvFVcupvrkqmCmsmPRinfizNso",
  "key7": "3MjFtGs8mjp2kkkDr32BJBoD38M5mWW7vWA5AbfdfQZufzriyyYuGsPirP8FN5WMYBuXCcRZHo3J4nHosTTuTnqh",
  "key8": "3pCZWzNGTGUcgD6tQ6powoCSAdVtCdb1twbtNPDXPqsv3HRu8RtU3UKrTceoyDixR32epWf9sqX9297AHPm5n4ke",
  "key9": "226P28QZvQhUnDLp5fuyhEDmgVLCk2EBr8qQtn28V5TmnsPsJMjqQPZVVpqjcQiGdaaebmE4zhgNPwMn1dG4ctLe",
  "key10": "YxSJ8TxNVYuk6UVBxtFJ7VYQxaG3NkfQ2wMMZGiLvcdbxy3Bd1y3toEq1Qy6j5XLc17EYaJF61CXvcuH2s9DZKP",
  "key11": "4YjaBEVvduVPSPimX1oR6EF9s6UoiXbkHq3NFCpZ8eLkP9itrFoETe6VEjdDXexFun8BSj6vPgRQJje2r3a43iyH",
  "key12": "2u2CwVStMvJ19Jqh2dE78DnNJjXSYk5a5cJoT3zkquTCAHPRom9quBo4s7KCDs5XsvMmTgfssdjonPfAHThUmwWS",
  "key13": "2JoNAyo1LFRXSY66E3pgsKCAiWYfP9eD1YxkK7xYA9wc9G6QQcixNgYGwFJi2uDE5Q1cb4idw5h7RcyhKfkw9asG",
  "key14": "5kg8gFLYua6qNGdkaYp5zgnR7FD7H6jfg7fFE33YZo4uLrKZqoXfiEqsxVpV9x6CJU9AaQBcPHv8r44LkcVnWFZk",
  "key15": "3ceojUFMe3pQwkMepFsFS3TEnrB1qRqB9HVvsFwDg5XB9jFbAtid3pTTsHVT4Z9eYbjGEhnXGqYzdvAbFV4x3HNh",
  "key16": "4DGaEEaGhMUGke83HX2v4kbRjFxXx8GthpDbFYm8FCawYppMkUz3XAN19C1Lf5Jfc5aQTgAtEK3svHZVEUqLzyW3",
  "key17": "3Yu4C6ncXUBpEs4eXpoA1vgxLXtUz9pKXXboCGx6YLNzX1GKXBrzHn5kgj1SLC93pfet2kA32mEhoT8HhVzm9SSr",
  "key18": "3KuN3eFeYhfGPxzyptcH1Rn2gKXPfczZbi3XMpXbAKVTFdFyX4LTd79oZk654wmTckCFqZXUERVye4Xcj4Mo3WQY",
  "key19": "2gdUemMLxc16J6HHYdQahepasWn9gsFhSUUEgeCaEa18dfT5S1MWasevCpFVzLpdwjYYp1G6EvmYrDbkU9iXDFDu",
  "key20": "5GDNAmoAWAxHdv8GxYy47kAMRau19Ne5moLTxakeVcCGwJ2qE75t9vy9mLQ3TnYoV4ewTsej5zv49mjwfz38oc8C",
  "key21": "4U64ng1EN8KJS2nXSEzAF3qtxUo1LKsZqLthb3GfoSh87BXzAYKLm9hesrrqZax2yVQwNvecPusZASeomN1FArzF",
  "key22": "4gbugwtdgT3ciuN5dE1Wb9EGRvmJALoxgzibb7iFMqDnWzMTCHcABRUVVAvJCih9rb8L9KyWMEBytyUM616vWC6W",
  "key23": "48NQwQtPcsppaMZPApXGMLrcsC2aXgLXg3w4yrGFFEJCxDn42PahbdsssksEiiS8Z4G3MKnsMe5mAGaE3GTB5j4b",
  "key24": "5shAyqY1t6EXcbVq7QyTKrsFuXn9wGeyhbJNc2JNJeUP3AMtv4rCKuJPbu2tcCm9xSBbTSRM9CGN6tRGBFyoYh1n",
  "key25": "7jqPZhHagyu3hHKfNQtP5S835zknJ8iVARK4LYJceKXgqQrYhaTWHboDDoJBFmaLTkg2kbXVB7Ka9ZNBBWWk92h",
  "key26": "fHn2ECxjv34MajeAjN4GDqFVTHSfetVdjFTYFaMtrNRbsoBneDxetgdch1j2LcDE3vHBEcLQmdcNbzhzwdJppBY",
  "key27": "4fqHokFqCo9ZneWaLTPvQAhr6iU23EEpDJjYDJUCGzRkR2k86Q7bteX4uxZjLSaLdDaTRG1gP1Y26yVXMRJydFZ9",
  "key28": "3WDNHNwGzDJb1gnYYz2TvjqndWkhDG1id3jkGdSEe4KRZj9V7uepvasDPq83BbHdBi6oDBaQQMn7GrFTHPA5Ancp",
  "key29": "5UGuAa66bxoHAAVKrNgujRFPqsCy5AY94wDyUVnFXDN71U8JJgD8haNknpohN9tRymqYFPnvkPCMNVrfctp3bCfK",
  "key30": "46mF49uY2CLv3QWMTSq6fSeh8QYKQ5Z1aBFitdWs6E18eS78qKNNb6Hz4mu2RcmZkZ4bT9X1DKBZz4yyBhjMadmP",
  "key31": "4HqX1MRXqbg5DgDuUKX3TLhK2xVxvnCA1v1iTMsfaxkFjWvNMMEEhKb56EBMiBxcjYeJAcWPepS3TCHhQPkDK2zV",
  "key32": "4ekiD8DGP8jbTDzPe2ntf5Fq9DuV4fDnxXweNgk64HCdBRSWMZjXH2PwPZjn85hSYhAD4NxhyQkAouGWGKFtTEmq",
  "key33": "5iVH6gReDVNfpDB2JxHX4b2qDy7AeqGN4oKYnwVNSRmtsyqtd4EBRrEzgvcjogPP7r1R6aTgh8XJfj4gfeABnJkB",
  "key34": "Zmz7TcdLLv5GwJB2uGyvdYP7wuhyq2epctc9XUz8L6mpe2AZjUxbtn6Lp9xQjv26S3yhYzhrET8bAQxEGBm7HJv",
  "key35": "5RqYswLoUhumKeA2GaQuvXfBZ8tTqXTBYbsTTuFGzRqBs9U2hSQ5FFA9gD4MCVNY8irN6oEWTn3H2XAYfCnJ4kh2",
  "key36": "5btm7pe4wqCLMqZTrsbY9EacoR2vbrQmt7X7kvRz93nKtMb6ZgBw5MCXxMwJGvqtzffm8pcG8hqPeWp3FJWfthWL",
  "key37": "4AATKSbVmdHGzV1kkNWmCb5ws9mXJjGYFY8fDGzk2XDrHR9gZv3gYP2Ced9aLenuBLr2oVkMpYnwBTDBbKVdK2VP",
  "key38": "5ghSGFkJ9FesxVF9KCc2fznQXQLTUUHjK1YRuYLP7t6yEzNAzmp6jz75Mi2bCVivTnQaKcdVwDXMXBQTFAb6nN9t"
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
