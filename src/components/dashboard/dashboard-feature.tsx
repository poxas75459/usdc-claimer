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
    "4Lm8KEsTvTZ5Wq7QAzB996KsT45iARkeQYxgLP4vN6XP2cGaEruxqDkqtMJbgzgj8f6WACMYkSeMfa6HdCNPd3wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnrKTYVGe7X484dK8W1fWgQXHoLDa3jB5ePZdhx3hBpmBauFPCPf4JTqyshM2WHRisjN42Pp8NFZjLQXH3QZuUG",
  "key1": "5Fj6ZqCwo3Dh27AF5VpvKaTtQRWqxdrrCdTvP2YzvPtwJ637afrWJvUoe61Zgq7PYaeDJKu8fTpPD6Tj3aSWr65m",
  "key2": "5d9DKGFMd7Ynhh3nEAVcbeWnjn5vbSmGT8DnWxBMTNGTdr5V4NeLg6YmDtV3WRDDtc491WPiMfZignds4tgGmun2",
  "key3": "3aiVxUvDPLJLeFNoW6xQP24tDe9HZuznRujMKh4Lj599WdxCiPceL31pNGbGGyDGYQkSSATrKvQCo1uMkAs4N55j",
  "key4": "2uYwpo6t6jXEFUNw9RiRjJhyGndd6MACTreJetrwGURFoRhyt8kguiVHWwbuTxp5Xpob45uJEpTqs5SnzDWRQo9N",
  "key5": "53MYCxM42kXG2UU8SgJuwwv1YAb1ZvXU22hMACsNHUf6GEZ8R2h4oVhQ6LucqoFptq5i9FfzmY6kXHUvAWgjeJRd",
  "key6": "2pLq7TjqoZcEucGTDj3wBjqygcgSCtdXQw9WjvRY36EfK3kYBDJ9EDQYJ21tbiMsTJk3y8t2LJ1JDzuXTLutnJVk",
  "key7": "2WtghLf62uU62uU8vAxjADRpzj8Z8rvXrGtt7xEVVW7UPy7pCPAsbVYxHGqu7ezijnM2Tg3fSHRayKkuroFUngLy",
  "key8": "6HcJ9JYHPHeyX7Fz6Z3jPucGqxr3aBKz3b9RbqeMhMt8u4ZJzSUv4vkse5qWVYtxXWoJnWcmeYJ9hB4BboBryE9",
  "key9": "6rYsZYhbmT4P6bhxhgx5t6fwt3zmCyb2diDqiXNBMXT3QSCXcWs8S4Xqh6hw8ysaFuaou9kuZMCBhrru5ijeFK1",
  "key10": "3JsCbW7QD6Y9NyrJaSCuTudmLrMeNPAcA2VAkid7vAjT6B51jozCfS5KpGGyoE6icfNtmvL3iPSsVqWKA92TPeRr",
  "key11": "4EL3EMgB58xTThrLi8b5Pdtf7yY9QEJ5yqXSkE6YF7Fv56KwpZQ5uBogSBBb3bsMd8jQhDvfHs5JYnuCXsw2DsHE",
  "key12": "A7gYpgXy89yP9q9BqjHpwEKxDxWmp4JhPAVESreCjc7c9itsyNW1T2q91SVUWHTTNinFWjPpEXk2SBvCU3hVuKQ",
  "key13": "2jBaMPhaV95mfVyKAjujSGRn213nFPmMA5m889KeBf1jt588B4cANpZ2Yo7pgBNBthpv8AMRD8RYNmGS4H3TFnRN",
  "key14": "5xEvxvxjmk7aXy9HGTUwXnFLZRv4QH11S8NN8WhD9wHeMfuxnjm7bD9Lqa5j7WYLCGMMijYH3sR6EjDvwXMTrFvp",
  "key15": "46r9MeQLXHTbGTyqCcM7CTpqWEjGNUEFjfyABCMgnPevxvBwxgE1CYsgEFhJMG7ei1kVSvi4TqoCuZ8ibD2czUg",
  "key16": "3V7FxFdwjXDegL9M7Cpbms6GGH4zyoDPCmmMbQdYfagM3jrFqgMW47mZUpgxmv5PWFU6GrnybA9xndyKymwfayK7",
  "key17": "3x4G1hgAa8Lo2CYSGY32EDSn8S6y19VPmynyNZMMw8YiWw2e38QuQqpFYJZRd1YQ8XFXLMCzfGKhsi3M2G9ShRz6",
  "key18": "5DXKp34V2LknN75WWy5pXonpw5eFJiBZBxBQqqSR7Buitk1hYixndDkMFumHM7kv5AD3gd6NYGhZRwP1Sr4rvjF9",
  "key19": "53tKoQCpS5c5VKd8B51uJj11EdEJE1vK3A6Ye12eA1dwb7DrYBnPbnKC9ozKmao7ha1KZrJpELXT1pSfX9ULnNLU",
  "key20": "3b2iFFy5MYRxCkwVG5Fk74bADbSpvQP5CCT3qL7K1C4vUzp12fmMABGxtChXb3jWz9vRaFkFymkHYmpuYTiHQr73",
  "key21": "5zefXWJTVq1GcMUdyGKCTM3etZhftu594Hs6912fLS8bFdyPhp7444B82Z1XhU99wpRaSYjDpbovtGEoaYDCDQuE",
  "key22": "zquj4MJrVuqwEvSYzcW9BxoqqLCFb4kwiEnusBoj9Qkp5aMDBUVit7SrSmN6GZhPqPpukqNeeLQfQ3PEn8iZQJV",
  "key23": "45ouqXqJL4ELLx5iJWjxMBbpw3DZPgWcqKfSaZAsT6XTByRFQ3jiWYfPHHN7uzGZhkYsiWGdRGC7YHv21ESjhz4n",
  "key24": "mPWaQHUrV24qxeY7c1S7dJvcnbgNzS6bssWJu93DsJdmMMCj5ruRCouk85f6iZovUvNvpgYiKietyAtVoutYcyx",
  "key25": "5hB1ms7LcqjLPV6FoeZh6KZezZuGCpBCnTZNcWg2SD7FyfcNwWnMAWHnvFN61GkKPStinhzFCBAZdoeeSkHEbgPk",
  "key26": "63vPHM8TN1r5uKQ6VLv6yvyERGTF1Ei2mPWKPhmxzD3a9C6tUGArU1poiRZUjSiKZctTtWMPDXkzPfbTXZP7Ecih",
  "key27": "srVMqUQ5biiMvP7CVJUQaXCHCFyijJga4tv7GzQgKg85uVWCAccwioGMyTi2NG8RcjmMh8pUuYb24Bm1JFbjVqX",
  "key28": "63MvT81XkeVvLtDWWtL38e3LAtH9cYu3NW5omUCXzuDb5j1x7tPEJsQ2XR9LdPDdLphkFBqecD4t5sAQ1uVfjScR",
  "key29": "2yGsg1Lyqk7jjLQ335Pi6iYFq6h9N9Zv7M5u2Jw7zjmRHAWYLK9kXsyKcsp54uTfaxzVzbD1t5aRnZvVw5r6irQQ",
  "key30": "44EdVFowuEEdgXy3h1Ze2kee299H63Vv7V6cCXYWvJZzpH6KChYo9dPT1fDHwLHdGbwwHjkwEsd3mg5o6Moi2mn3",
  "key31": "4mi4U4wNy6Bg9qfo86M3jNctN2khrcPCv2jEzfsJKPukMoMuDGQJhuFswm6tJG6yLWEF953v2Cmo62JKkDZhCo3f",
  "key32": "4sGktfezyRHmPTaMhjHTukYgqSTud2YPim2GMcMv6wiwtQYaHb5oz5XeyzayEmkMBn6upiMkjjNM7dVfBR3Ciekc",
  "key33": "5wn1hHQy3tM35qcttzetkMWBP4rc2yqTpEnbRjrFjHFmgKyQYZ9BBdA2wPojGkGtmxWK2nYKrqhWgyJJ2zBrEMKY",
  "key34": "3D85r3kkjpaayph3cjzQ6MVeo5idpHCtXLdD1pHZY2TKaGjAdFmGYtFTAiNmE734i1QYChek3nqKR49gjHh4fD7t",
  "key35": "4dQ58dV6zorHZ4JHpgVhqeumigQ6iDwdYZZNTTfLdhWzpZVHX5PcGuKCzAaV1MxbawfsKjq6yJSEXFhQm1SSLSnh"
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
