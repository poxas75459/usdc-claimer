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
    "3kJSshgT55qPbZoZ3pALng4rvv52emPkXPUyWyjRrPHHzKNrRjAvjuJKWbPfWoiApGkXQKejQh7YWKPz5voBTNHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igYjsUZomAMuHJ2E4KPYbGubSoQUy8C6CwxJWZcQzvVAqiAfFdqojyQzkv9aArkCxPVMLMakNDcE41f398Nhh9F",
  "key1": "4aNDXDxk8PLpp4aiYD8cT7npuyZSAxNg68A2EpLecdNtbpSvP6X37R1ryQUTbg5Z1JGwc6p8idd5qSS8QhPBa4yU",
  "key2": "tiCgeGsSBg8iUNiYQssz9FWtzBGCC5TeqAtg3KyPmT86xfyCh9Qn1DK4gfLBJhzF67mexEZJLKdXmeUEegvDtf3",
  "key3": "GJiytTFZMQ4bFL7iUhiQ2Uzwh5oCa7ZvDxRhi4PQTmpQtWcJpghT6x2LXVXrn24cyc62yD22vASaVJGPVqEk4np",
  "key4": "DFrLNTSn6p6E5B22QXo9ZNGyFZQYKXEABxWEDqXpnNDKoSuGnyZ1disKeiUbx9AtvobtuAhWE4xAb1uHnUQYP6K",
  "key5": "LjLwao7TwLHcMqkcKG6vLPCuwCLpNx7XtN3VbAzeHDteGuf7HEtPosSSJfktH8DW6nwtgtEXFeLBDM8KScLrTsp",
  "key6": "4NSc8ZLGRJe3UsD3icKMGb1TmundBFwbVguhyqVgDBihgwkv1MCVKgrc5rdktNFmjot2wQ2XhtNwm8YHDgdLR4ta",
  "key7": "2oUaELoe6n13CUyde2oByB6BxFNyRqKAC52SDrQQkedfUdMhNeCZNoKYM8mk5Jyqp82keY71Niv5grxR55RvfQiQ",
  "key8": "2zi6jFqm9vswVxqgDtDc5YYqdCk8pYfRAjb8hQYMeEkwSxV46paBZ71W8ktgURzz1wZsiLM9eSsECJihkCPcN8Fe",
  "key9": "3PYQ3bz5vjLMZfAjd15tfk8AUcEjgtX2fcZj2LD1jLWCQ5K7N4QXZdcR4VWWCqCFigfjvnMT44Rk8XKEiMrAcjuW",
  "key10": "58FhqxPePLVisEKNfc3wrsgR4yVrCVKeDZmLEH35qFaSSsGoPgUwSqEW1EksAQsrLVGqBEUvHne29tLBH4ZYAh6W",
  "key11": "2vmwpVk5K1F8ngo1GqVFt3HskqfKxbsSnTz5VBZmNfKvJpv567g5mpm1pedpXPU9ocAQsP71CwNKNX6d4PgeTzQJ",
  "key12": "2aJrRk6bG6CR2i3WzuHgaSksHjFv6JeNmWtTuy9VVLry5D92wf3GjyCSgp9s5ZrSwG1gXQ6ACpZDD86vuRbifLhc",
  "key13": "4aMw3BRrSMZxYooRNHSieyP8Rh22yNSHAZEEyQHQddRGBLjP743oBrsFPBWVsCpzNwaAVPeY27qQVN96vEJbEJY9",
  "key14": "3tZMMxZBvw9rJ74sLF1auVGrdvELcCsz9Z2ZoCJfqMp7T21RQytVakgEqFWkHvBLpqk5BuEANZ9BkTD8s7C4FNq3",
  "key15": "4sRbvhkkrUK3tEcf4a3k765rCsPDe1QZg6WotmwdyAPHAYLXnMcaZuU9RiQUbeTVxfErDjiWCSHc6AnRLeJeboos",
  "key16": "2w5pdxMHRAfQL1DvSQxPGPSzYrewbsp92dA8iBBQG6eepUUmSGPP25tc1jCsmvsyyh4zVBWtmePgk4xGifpPfpCu",
  "key17": "3RvApzYng1QFVZka3qRHzHtMZE9rQKr4RyQWVE8mXah5m63Pvu3SbFkoTJhMEVsKohsp5bt3vMBi6VWxuty8Cx4T",
  "key18": "2WH532z6T6VSSYVsz2ANq4fvEj7yiaPyUtbXWAQMSNomeQGcDRA6eqyjCx4nVCHU5GZck4oCc39r18e5CHJ5NFub",
  "key19": "oeN9zS7nidYZGMV5fwwCFiJzAEJUg2Qm6bxdeaCPoh5vZ4o9fJf8fp8VfzwWH4ceGyxYA4Eec2vD4jkvzUpkYdH",
  "key20": "4mgsja4xnbqW29qHkFKZy1p6hLs8WAEG2tdM2J1eHqp5TRHWCjSaFHEyznj6XXifPYktF4sS2hQqZnkggWkBtwoc",
  "key21": "4DVWAiaHMZcZKvbUdmKcoxmmWeSFAuYpUGfuujfz7Wr7h6guJ16iwSfUgfmPdRe6gJsCsTAW5xZrp2S9XuNk8toF",
  "key22": "2QsfTBv98hh7swECa1wtq4CnaDGcm23PbTqnfCNcRJvNnn78d64583MdWm7qNGq6Ne2hHtMgwPGFxt1znboJr2h",
  "key23": "125sRN3psKEjq7dHqzdRsovuVyQ3DKFNYE4FDdfJycoH3SLY49Jg9FucwuwZ6ryZ88nFb4GuMgBSsbpWGXUboFqv",
  "key24": "5EZfJVm34iR1F8yWzALWYEzoUbE2wZXUTnk8TU6tnsVzUbqQyKQYvaiEGp2Wtc2GUHdXcAqmis7NfjrY9ZZeCnG",
  "key25": "28hPJNkWJSu5JggUTS4DBbKGa9CRgNWjepWGHC9LTgHnzL8K5ewZ8BYJJUm3Q1iPnnfNKoN9NYRBt8eFFYfm9kUv",
  "key26": "45pLsASycfyEypm2YLJJPHuykKSJPfaeEsUHhvf66Xs6KhCqbtRWeXz5c6yqxMVzY2XmqKEJPorJNxCbLDKoCvks",
  "key27": "57pNW8LxTzsFXfGk4QAb5MuNvnfjPmmNy9VP2ewVwpUotVSKhvDWgkZN3PMg2jjh4YVZ6ZKZcGxPyp9WsKpjq9oQ",
  "key28": "2NSVJX3aKNvhKpaX4tw5AuN4BcQkfgq6haAnPMGNcEpj6VbxmpDJoJA6zbxKFVrMdiJXtrwmoUZTf4kuQQXJLz2e",
  "key29": "3c85SaQQsY9Vdh2KJSkWfNMFNpFKLq5fdExW6A6b21ZB4hDG9uYNARZJmSeLzjUzFq8Z5ZVii9PWJQJGF6mVHpai",
  "key30": "3sPHEkMqebwwbDBXmC7ADjQCeQKieg14d4nPUxCv6u1EH8iKFYREK5W9tYDxFgRA4J7HapCrcuaKepue6K9z4tLt",
  "key31": "4irsjHsfTaA9wLof8wXvwoc3dpMp8AkuvWGQ99ArxrBxTnQXG6Ksi4qgLigp3TeXP8YRqVSJecXD56QQqU1uP99Y",
  "key32": "3YfYKNpAd6EuQTetEmFPyEMasb6H4QCtN6ngtqED3FC5qWhRr7QBcVSR2M7MLmb9vT4XKXM1cFhaFrGsFGttGHoh",
  "key33": "539nyfwHbMFKSRs3XW64qmA9efZKrKGYcX69H8HwY44EXgj3gM4t2x5omiHx1A8qpeocBDg5BLZEmtHPYhVr7B4H",
  "key34": "2fLvDjX9W1H172J57pTpkzYV5AzMTLsK4cYJcKc1UaJj9wS2M5k3nuKh6csjKiaXr7xmkVnDiGYFPeHZjtk37Qjr",
  "key35": "2mryGSPfUaCGhwqvtSM3TxPf9xNbePw7r6x3p43SjhSZc2nyKPJJ6Ye9ff8bpmX4W93EQxw5LA53iPixyj7YZqBj",
  "key36": "394yyv3euULv4ZPHuEYhi2738aS3dJECka9QvEMXgmFkS2AQpSJUvF4fUPkJUDbZu7qXb76pCbuYqtByymbz1dAF",
  "key37": "42iQGdt3JgFq7jBkR3PHx5eAhB33AysRoCeWSw5sNRbiw8SCNtTwrmScZxQ3WCyzRpferQwDjZWHLQrU6X3zZ4rT",
  "key38": "3cwPzExFf5Gqjpdv7L4ryiULnHywSa8TCYKoGDYbdYWJgF9PahrPzeNyqeH7LCDEXBNd6HY3e15kSjCpFA6i8Jir",
  "key39": "5Kz8tD7vhayEUtgZsVZF1VeqKPiCTXcerNQzDakcqDxGdphGC1XAM8N2YAuYudFFJswVUSjp7Ep1YDaU8KoxZpVj",
  "key40": "412QX2JMAjUzUxjLz6PNbsmDyZPna8hu58e4CkLa4sQdsuV3YyuttpSPfEzpp3SCPtUSzdBbk1KCmHofAvw2Wvku",
  "key41": "4gN39eeLYiHN5U7AVZdo3RvcpbxeQSN2wBquZGCvzAnr58S8sCQDPC31icPad28yGrMwWcqfkyQbFpJKUPTZqqDx",
  "key42": "4WKdahpv9gy84hPi8RFypAujXzC9g29p2ZopgtVSSLkqBJ516aEiBPNMSHQ8J5MPTYub7PRZAdaoLX6e3juoe9b2",
  "key43": "877owx8Wv4YxDfbF9Q6T8WcWfdgcPGBgg1dVKGwjZqDFSigbSGwYsNKNKXP56JRR2mm52FKoJazeaaLf8n5RpyN",
  "key44": "23S4M4BFJmEwR2knL4qduGAXocx2VM1gZMXU6mnxCeeXh7NrDKurTfNd84daaBKu6QcZZVZEPTmaiEWvzqqZu3cB",
  "key45": "PKVEoVLXXBAMChzbGgejQ2bNs313qajpLAjRZGp6esX5uqt6jYUEaYFXW8K5KbSKJDnaFq9ZEQZU5MYxsGUp2Jv",
  "key46": "7dJ1FCeKGtrYVFSBg6EsVUmbQK7HJrPR7RJJhSfMsLmUHAc2d4uxJ3Ky46jcEJ7AnKZohd9srJHDi28ZfR7qpG2"
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
