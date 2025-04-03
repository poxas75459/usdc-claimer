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
    "2rEw8sdNJnHEugXCmhKxmAvm16QzzTTSkvDzq197W9nbK8dBQUr5SASjNuaEcgCLUfew2rLKf9uxF6ze7snTJqgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38pCYthFhegk3bDd4jeadjWG2XYyjE5zq1Fc82Zy5ViYijMDNj2WwEyRg4PUW1a6nyhcviuSAnVK7HB7jkcTiNeV",
  "key1": "5Zs5HDFL52Nk2FXY4vvczaYWYK3DrudysQwscYEMjphXKEJd2DMnwxgCDTtByh4JdAPrAxxFaCr1dDVGFpjUrtku",
  "key2": "4WiM9FBvDKQPxhghYJQw6n89Hq6gSDnjkAEtXGZEvN7KmChvitdccLf6BEvWEmp56VAkEND9F5JffCbb6UvW1jGS",
  "key3": "4EpQtmCN9U7v5DtEd8TKGiokymRhmUtso6kYWsD1UJiPDhDESZ79gS95fJkn9ad9MWVgQ1THgEpfQEZ6mzYBYEAE",
  "key4": "35HpVaSRj75L6fuf66YTacSfazrM4qZxsB11z3dKdKSzLKq5ydmMTe3nT9VTLkSCL2q1ans6DkDGR4GH53fcomwK",
  "key5": "jDLKWccsRNDaHaY8pqYeznAkKLGBy5bxT7UsVPRH8y4T9sNEEqvUtzdZJx55sfHcEmiXieDCkVVrgLid8SLr5jC",
  "key6": "47xrWsYVAd4hTuZa17axnXUYjE29dvyfyKKTxQFNcUHdmYE258a2muX5icUhGmwz4QF59pdBoQsBpnPBJzQkvty8",
  "key7": "5EHJyzidcMaGMK8WdKbn9C9pMacDQqLgN4DbPuBFmC59oD8m2MprCJ1HMyB4QBwbRQgq9MzDw7gTGGfattPNteu2",
  "key8": "36yDz63QHM5xvFRekxucfcZBRBXjgMv3RDV4oyVjvN3DPEvVBQMeWxoryD3eYiYgoXWxW3CRSnBR24Uwfd5D5QBo",
  "key9": "5Uw3JwrGUDEjH12HXSjwFYS1q3majKAjvbC2bxebecoYRnb4ZX3ppoHedqCheg9ss9LM319bwKKF2xqQ5Y4Pq4DG",
  "key10": "4YwijqrxsVpog3pGo6tLYBppfXbRjZVX6Vf2j66rNq6r3KJ2hMnKjn7ENDppRSBeCzb2g4NQPVh4jDj4XNWZzE6M",
  "key11": "5peck3NoW1ivNPjo7CLmucuaFsAFZLjLn8kqu7ZkQEcpWRg4HyEuUuXi7PxNM5oefJYdUErFt3pM4koKva6LKHq9",
  "key12": "3yHDXSnKwP5aRuWMkU6Vx7jq5pJn4AUJfxB8i9qTW5Tu4FxJHXWQevuFXFPR6Sw3898UcJkcYCMQatjTe9EEz4AD",
  "key13": "3xPYFjMU9iW5syhdfGxUYEDDKucWNPPgEp1Yi39kSx2i1LuBtyuycyD9QFNgdHSXFXVs5C6kdNS43UjehZiHUXW4",
  "key14": "2ZjpaKa5g4oQe9U6AvC74Egm3hHXf3UW3ExWgf7ZtHgUP56nBZtAoiwRJw337dWmKyYHhnpsi49FsthVsM2kGn6J",
  "key15": "hYiQZ1qYpGjzvgi6gzrQdpT7BXHVTZHq1ES2EaCLgkzqH3g3J7UCmkcbpsUDCVHm1unBss9wGhGQxeoPjV7hcrW",
  "key16": "5NTZB3eNRZFFokEgY6nnrbvrfYCUt7JcH6xpcqA4smCM9pD6xUyEvuPB8CQxhoFoHbF6CYHFYPhE3ohME2As8MRR",
  "key17": "3yncJqV1vYpE2ZKmiWg64rByyydS5dvcj23X7Mfn2RQyKruACWaC9mwYodTP5dQe7gRTTro4k8KYM9TiMn9Ta7VE",
  "key18": "2L4WRVj8XDin55axSHTwAWj6jYdQSTteC2RdzLaQ7gL4MR1EjzfQRRZ8g3tv3qJRWuDTvbwRCKVns75BivqKiQNt",
  "key19": "3sjqJATqBmwBdH1yvFxPj37DZWaw3TBFxJ23DGjHCiiME8a2obHmysUnSGCGGouxPMhmQ1qBREFtCcfh4Pn2vhqt",
  "key20": "4RVe7aETfGsTRtnPL1RdbdG2JKHWdYgetajqGZVkAResu5vwSZSawjY7UAtUx62hc97gYyiw6pCmo1JRSYU65eY2",
  "key21": "4QwEy52k7ThDPPqMjFLewMfKpAAMqwS2XaG5Rm3PKh7CZRbjhs5Fncse7HkrsEXkC3SidgaiyWnqKQMUzEk6ni6b",
  "key22": "59fHbPhj1HD457wYA863tptmmWAvJnyooVGvKKPHAfY36egWtuBfstNB45tkgY2pim4m9d2NmBub8sK38D1TTHRe",
  "key23": "23drUkRZNJcHq6L3uXwaHgdW3Eb6wszZ3W22LTcfWq5FP4tmiC4t3ZCvfWht2kVuvqMeYuakdsVcSDwjfeNpjqhz",
  "key24": "4TCdP1QAHqTpUsVZoGLdFUc369JsoWdWJs9hxpEUUSy8ZBYhJ97rMgeYMZ6ymZLvrE6kWs3gSUUHDaV5HyABxowj",
  "key25": "5m7z3AhooArFoEAva8AEams5P5pvdA8eHUAyAmho2giucpGpqci4EvEAjvVzmh59MLfLZvFKZGKsJXQvcwsnreBb",
  "key26": "52LRVYCprMHNEXfL1gmaRxd5wHtXMcQqH1876JxEQa3u6PMA6sQBTteZPYgfdhM3ysQiwmMih2HVSk3ii4PJUbXx",
  "key27": "6gVfAk4qrTS1Q2bbLCrS3nrLorzTSuMXV4PREGeu8fEvNGN7Wch2FTa62f97ZcfhQJjSwztdXFmfiRWA9wXiEBg",
  "key28": "31wB8NwUSyx9pXsNoU1TK8ZE4CXPkkKSzeji8wjfNvfhJ6s4JFmb8CYdUgK3Wm1kfSz1a2vm2Us684ByUjNnsaFM",
  "key29": "4dvS3i2bWGftPQP9oDRJcX5uhzttBjCa8pzRdDxiZAscPvHidSTcd2ifBMFzAxYAzEVezNUWt98UrVkGpxS7kJ8P",
  "key30": "NZmmUkYCVYa4ZPq6w38YSMT5fKHn4qWRj2ydhMu83PqC3PRxr9M6KdwzpxyHroEgD14bGWdwD6b4bSevmwDzkEm",
  "key31": "4Co3QubbUU9FEHzN4Yn2YcbVfDNT2aQAYGSQd52gEFDbLixq6JuVyq3MfqE1g9SchBxkgbXicSuxDCC1uxxYdVrK",
  "key32": "ZeJzNtWNW654TsvTqsjqy6LMmGve4xjWETSRgmCczVaSiqMwfsXmUNXZzwN9cKRV3HWjvfah69mn7kabEYn43Qn",
  "key33": "BAM5a5qG9sy5rS4YMwFkNyUjdfJ3kDdtuHbpmEJy3Vxrgfqd6EHvX8MxF1aUQoBBVBrwj6hgsz92jAoFPrZGJvv",
  "key34": "5tWYJFH2KoYzdZduoY5RCWPeUY46etNBm3mhdHWMPsLPHKPfY8A6FZpJkP6NYDVpEnr8nK5ECM91ovJ6Tx9ALgfg",
  "key35": "2UwtF7ZNSygQvnVMiD2pwMCVi53WDXfin82cukzxHpj1fneHau1DCzB4U1yWDbMPPy7ykYTuQLT9G8TxJJY51hfT",
  "key36": "5baR8vUHn4g1BU3auhmAKXNEjps4Fj2aenS4uTaZoyT9B6ZGbQUx6GJXUfYmzxAYTj8pcezEfVnWjAr8uAc61B5V",
  "key37": "45DirMM4wLAmroMpzNuFCbkoW5fBD8T3Q7EVmbMLEciXF7MgxhKJ2C2f1idjhHxC6wAsV3rpdn6EnkET1Q6BZNp5",
  "key38": "2XNsHMPg3JQSvEasWRNNv2RUc4mdY3v899eg64y2BYvhPmJQayicgLsCg3oHj55xit52Xh74GF5yZTp4aBmS1SEc",
  "key39": "4uHtjiUWLawMhFJNNLZEuX8cXA2fPF7FHibKW9hLrhdFA5PvqGzP5qmfQoW3FLyAsGEGovusGREqhh5ZfnwvDCMr",
  "key40": "4R7j1FEzJQGhm3TZBB16KFy6CSNM5VMaw6i5cvT6vMvkC5hKVEKjLLdSJzfieaqtYxZSAjUP3SmA9JU5cFojHxLM",
  "key41": "2UzEmLrsRzC2SNb991egSNGZPGi23f1YSKVhCRwuG25n59R8nD95DbyW7Atk1WngPBZmC3o64G1gmTwe15arUEM1",
  "key42": "4xmXtdazUnihmiA9eCTX1EYZZnnnKi9G3KdSjKoSeNqYa2PqmkoezcVeLYSLeiEwLxBkSGvsNE9b7Az11gskbLhw",
  "key43": "3hP8cL7XydbYos7twPqJKc6eKqhaMKSZXYRZdKujNPLXxJUHfW8jyR58Gp4dyQezHiWHAnL58ospcNoDx1ena4PZ",
  "key44": "4f2cdNLTJhZJs675Bximk9k5zBAHxLbq2BjQzmRKXFpKaMmwqybYS3FD3jRuMxNAcBes1uA8D9PXF8tMR6QAFVe9",
  "key45": "PiVBr7k8SVRif3rajQAW6JBhGUFRx5R6WsdEWrp1cLERXX1eEE1P4pu5TRmm7J2fmGSAXqq4gnopCD92EgXyRPM",
  "key46": "2KnoedB2PvMHQh8FyDTXWQGkkfE71kswczYqnY6rQyKXXiLBkxEo2JeyE9FfQXsniouzb1C4QyWcobBvPC6ZNh2Z"
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
