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
    "4tAjprSZiCLngLNhu2uC7e3hcebj8JSY92dsnqhQqweNVfuf9JKETdCbL78yYs6XvJhMJG7Mt74GWP4FLwY8Poid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpPxN4qEZwj3MuwvXD1uJEYmcYU3X9BzeEZ1bK3sT1Jxqtk8zkbEiSjuNbwzrXFNbSo3rLWbJYvqBPEZij9Ap4d",
  "key1": "2fSqkZFG2wxp77wH7z7dtkpPscq7Zt111T9mB3KAa4q2eZEHjJ8YkK7Rgm5uEQr5cmKTXXy5Z4y7XCfrP1oVynXb",
  "key2": "4Mgwy4ZJDcGEw7h6sPXLCPMu1yKgS4ZZJHgwPARStxamuhWnn1xGKunKBwer5NddePd9yzropN48bwA4YsdXR5Dz",
  "key3": "C1yPPmiWBhQEBYvsHNxVDbPaqmXToBfmVbRYc3Q9e5t8RNo34uo1EszY6hBNMrJzEvBzzLJvvMopq2m6LaV325s",
  "key4": "q16nDVhA4rJR1BH2NHQJXFYMqNVbpS27WHQLNi2AjoeqhB3zvkciwpdn1C4N3SQnZuUSwg6Wa5ZDgAtY3DqHCp5",
  "key5": "4msW4EpQvrmpxYKr6nBin2otJzu9iMBzP7FNZ6eACptpkyFNcGczYFriQUefKzUXdmsFS6khY11HQt52nkNv8LQA",
  "key6": "2NdHpQvyZ1t6wr1PiiwCw3U8cAsQgBUdRGfudXcLaVanKrebsJoc9GYc4CgEpaJJaxHGhKRKC8XsQdKedZUTT128",
  "key7": "3Bw56jQBMyHSw14aPcWnz2Em6kUjUnhiLuGweddrPkBGZpY6FtzbkDFfmKYQh2pzcX9uzABf6aWotfbxUfDr5ZSv",
  "key8": "2CJecYvSHgPHxaWrr73vZuozrXumW1E1kvXDeHusboz7pJtzGM1N8dct2c78vLiZeAKqdctxKJUET33QBWCtV9F1",
  "key9": "4ANhe6SLAsXEaBRX8xbezzFJDKFDSBB3bDB5NmUuaumThtgS2krbK1sAzFS5HUoab9nouK7yRZfHTLfV8V2LS343",
  "key10": "PAejxM5arjtPmuPVrQjNrFNPstAajHoFXVUhRaLGByWcPe62aQVkQfTTxarVtoHd5QUkspMSJ6amJnEtEV3U96v",
  "key11": "4U2ZWufBPFD7osDhnJMHjJvDT9FqWkEUAiGtrcmExXyWTkKYzKRSzTwUnwce4qPXr2JCPZMmrqrtGirun4EkHJDy",
  "key12": "9PJjbzQKcACanXGbvcZDBS1XAdFUhL5cUQvZRi7McHDuJ6U4SkeB1sqcbmCe5ZQ1LNm5ujM5X6ife3czrfJqM1p",
  "key13": "4YgbP4v8CrztsHaCawDLXYdzvpdQPjvrFUC1AXv27WiSHDDyZszR8H7owqXqoDPPU4prUf18JEghtGQRvwjbA7Fx",
  "key14": "45SwZtQfSEAwpc9zQGCAvHkGPZaSLaeBZYxgYuNmx7nLZSWHmeMB3p7g64n5TfvvNXcJX7GiLweF1412S6b9pe3p",
  "key15": "4qxbuDaSUrcpTSDXGWnJAHkVC2e1a8E7MsuYQH7ckKy9GdyPvVgNcjsM78GE2BceMyV7rWd9CdAbhkdnkAooduUc",
  "key16": "3tmZdqGoBvpANh9MvSBFMJSULjgkVWxN8mru1ZzD6mTxN22M8pfe2CvVfjeQS8wmkcfuDsn5fYrn9gdvJjFCmu8v",
  "key17": "5Ww7wFtiihS3htgAjpFJdkfoPmxDjHLiMCdNnK6YqXeVNJGCJEdFfqUkvSdPWCaVbsakCyZqcZBgG3PLpYgvUHmc",
  "key18": "kArapiUvtz5zJRzotGFacy5E1RJAXFu3TGPi1jWr5sBQhvXvFfQdt2zego7RafkAwPmXZmhv52SHkwXGw3ULk1Z",
  "key19": "49BeRYNgF2gvhwf1GCFKQnzQgbZr2NGXw8ccXTVDZpfocNAXWnmBcvoqUrEv9ALeoPCLfcYmAZ3Av1W5ympBVGWE",
  "key20": "4HXq7a8txEzuXWNrpUY6W6ENFDHdxVGq5hWyMzzURA9XMfZsjoRgQJdTbJ9rorNtXaCMrpJ8KoWwvDbKtRsraCRE",
  "key21": "FLkFQ9GU2peFvASCoSUnhyGnDq9ZcEsMekNePqZRzt6RH4W1rS7vsXwqTyGm1MUQhZBdpKKzUzpyHopgCKt2X4R",
  "key22": "5tAP1tm2EtYB1R66vPG686BKByF2Edw199eFKBC3P7S3dCvW6n7KHxgmFQ65N2owwek9F8MvKt5SituCNkPmMxXm",
  "key23": "4yriHPLXzVT5K6mdJqoRkN8J4dk4YdQvunavggEQkSYNnMHByEXcfJhztZznmiW7RrhJZgFMhsQSU2GKCYedTHLN",
  "key24": "5WKM9UDqrbpcDGuMxgu8HUTimfZP2LT1v7QNjswhtKwWcWbpAgGz885Rz9mFz3XVWGkeePaEvihwCJAAWt3JwiAP",
  "key25": "5jTaDHwG5qgWps2a78GJGCjYkNaF1vnMa8DTwWBd73beQYaj26ojniumE1weqZw6XZznDg3odFbAwMNV9WoLhyqw",
  "key26": "EJVfTr56HYAxpvZM6VEv9SDo5tKUGuekSNyDGG25mPYDW7AEEmHRWR1w7ThpgFVR2gHqhA22xEsNAJyjp7dpuKu",
  "key27": "9KmXgR7spHp8X4XEPx5SgYdaDVhB3vABVeP8TUcnfniSQSzzcRPbihm5dd4udCbyngpteYXii6fV1jEdSd9aBBs",
  "key28": "5stxB6Cg1BpYnwCtN6nYusiPL8uQiMJtNbrqRzaocTANm54cotGRhH9ZCepb7Azq6b47ZsQXg4yX5eU78PL2rVVS",
  "key29": "4nsUw2QLFRBD4fxvSuYhgAcqmZbgpRxWEQtKK6xjtetqbFsVzUBNMLXK9Z2jFbD6pYBfNUe6XkyVraCPYGpdcZAq",
  "key30": "55UW1M1z6SEyc5uFjUrbiR5CVkyYSGhZQuZBDXpBoQCK9cw4CSbZKXfZzu78eCvFcy3KVGok41fV1ggjooGKy1aU",
  "key31": "Rui424QwGV1LaCwzUQZrJRPvyL8c4TUktREnvpm7cRUDBmzZNz9TCKRDHSPX6ctGZbaGW5KiQpst8LoiwidBp1D",
  "key32": "2V1kXNKhp8kyiCwo7UijxkPUuEBhbjMWyNzPHx3oK7Z8AKdC56PAu3cLdogk3x5MRZhc9uJMo73eibhR2zTjArVi",
  "key33": "65v5oFkoqojkAFKB1rfpuBUMi8ofiyN5VAUf8ED54Z14jVMeuxS5rPxHeWDY9Kcm5XHv4e2W2yVmiHx7J6Z9ERYf",
  "key34": "3afrq5MHSwPVfZ7DH7h6LHQQZNAjs7DoocS613CH6P3HXxPSvoBpQsN1Ge2NVza1oMqLPmCow6ewuxMJGajnp6dx",
  "key35": "5zv13QwnWJGS1vt1nhX5pqDr81vvCk2yaRkDM37hVyZvf7x9eWjho5AzSDZES8TFH2TjaW9cem8e2aKtkj6uYWVJ",
  "key36": "5macweq5DXKp1X7fKnQ8mzCDy39kqMWa7k4ym83QzYeCZCs95aPekKPXz9FYE6FdzhqG6Seo3fzYMh8jZ8awJYsv",
  "key37": "4x9jZ8CEN8z6S3U67Cqz4yZeCXsL3ng4ccDWVAMC88eMsG9QKK5q3Si5U2BRWK2rQgbkXJvskS9pSt4wobG7k7Kg",
  "key38": "3jWonLvxeC88M4HdwkQfKhA76goG86smL3eJq1rtTwTYzXWYasjFmsBuMziuhhKtovnXdvpThrYhxKTcjEw5g9D3",
  "key39": "3Wd1q6tR7bqxAugurfNUi292xnRvjMfUwpippcpG4RPe6ZARkdXeu97PugEYP6oyYCFuN8KbkJSXdzis4vqtnrWQ",
  "key40": "4mz1ois8XXKkp73okV2vn2jwV33ErPczbcHp87Cg9qHNm6oYZ3nrrGwwXKZdi6o14pQr5WiE9WC8K9cCiR4YqsAk",
  "key41": "2Xrw5TShVf1krdcSW24qygwXNHk4cpTKFDyxvbQDzZ3Gt9qtteUCPrjsojNnwCccXXRHDKGJnNDgcximW3ENe4RN",
  "key42": "4H9uCjGRf9uVQdcFiea5KZtfLy8hRaeFaGt4a8hPNZ8CzDhtrYuNzwbuoRbr79RXZHNuoDrZXrKanqXcSg59aS7R",
  "key43": "5FxzZyBq5ECtCa14cwYatoNr1qPGTMs6FTetLGmxrAZpV9ooKZGBzLSoFhCB3EYLcNQwxhebWGCDWoztmzr5GCmk",
  "key44": "49xWYnD9qkXazRdMkKRRcgK1opgP4YCZhHSR7VJY49Ud5x9kLoF3CHbWnPHyAoWYyCcu5DAshhfCUCZ55vsgESMS",
  "key45": "SEqaJzwgfBJBMfuHsBb42iQDgtYAC6TUuVhewjF7v2d1Bj1unwsKbj8H2s5CZkwo7yWXmKqPxmCkBhDuFD5Zy9C",
  "key46": "NpvE7pzTx8jFoyminrqRckQwFexATgLCw8PYjU1e5a3NhT5TqSZMpgAADuCAn2AvB6bonYeKMFNH6HkvZMtgZK7",
  "key47": "4GcDUGTZ2zT4LYKoR9rSX5Hoo6E28iwLtYPsBQ6JsdsXSFvMiDnRPbhpNgWNbNQku5jBfeS5aBnE4zVXoGQNUoNc",
  "key48": "2n2u2vAyeHrXvPrJmBA3AVC4UDJv95NVB58JtzMSo6V7eVCe8kyzQQTVHFANz4gz6aiAi8uugDe8NwdmRaFHkUPT"
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
