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
    "NiVGoRcUjCyLsDZ75vgZDneKdBH1J93BifQcLQVrMXmjJS8Q1ijxTCKej4KF582jtbacxcHP8svu1nYo4RC1skn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGTzxG5avCqULjnuTkA6TpBiAibqpaiKUkq6MVUFXWRJJc6SQBgG98A7xguDEQAGy5TjuSuJXTr1Wz3sSB55Fu8",
  "key1": "5QujwJMvvj4y5Dm11e9GP9WETbhQU6K1JboFtYoG28nx8U31mYLV8eFRwEx7mJdmk8d3KCGyQ61Wg1aRa8qJS9n4",
  "key2": "5x7bEgrh9gVDmxN3Kyv5n74KqJEq2M2MxuqbRYzkzxUbR796QebnoUA52G64svynFuSqB2vfodeUkmHZ17gDvxJm",
  "key3": "5cqq3zGDbiFADH2HSy4hXguzDXYemswNgJVBMiQrWuaAspayTWaaf8PVVUCxQLhG48xnUTp7QRin8ibwqU5XA6UX",
  "key4": "5fDE9Gqi9BL9PFeMDH1nVe5ziW3Rndf6NRAJRfHeUPWVw3fLhzjtkk8wHBBZNWanzoEgYZPUpDeeYSDXUC6XZbqg",
  "key5": "3zDXtEiCY272ekuN9cCBv1ozPp8vss3gs9ssrYf2kHy47f7TPJwVSpwSFPVMPLgMBantsEMx9xcuy7ENVcffrYJX",
  "key6": "4fieGrMYfCnEpwgM8cAWzH52dLod83zaFMS36YWq3811sTv4TKb9is2K5shHFAdL5jkmAup85s7uGdQapZtevRHX",
  "key7": "2iWCV49tMnzBKziaZAVT1VRPNkWRdgHhKwtELGxBAmtZXDXGVoi7k55EQJF3d7SRP6ZTckjvrskyUKNXwpUbnPeu",
  "key8": "4khXJW8t3hwa48bc96JAWvbwJFyGBpi2nW2P4FGVgeZH3dQQDBQgaoaeEvkR2PRvTWddAJP3aYbiMtSJcoLNRsTJ",
  "key9": "S7Tr5WXboo7rzNDs41sBpDxNfZ8gnrDcko4K2X4EMkaQMFYRyQk8frbhMrmEVQcFHfJDKjTAT4Ut6EhuhVWqGo4",
  "key10": "49oSYcyV7EyahndmTMPW3d8pSvzwujLJSyR8GZrH4BvaKCw3UP9kD1Gpe1Hi77Ea6eZbT1Hjh9zEDkJLFQ6Cn86c",
  "key11": "24Ajj3jtVrZaqrTJPGvcsq1kUrCAywryKPSCTi5G5tLomoHZLwFNVHSCV17egqWGCgsBwYy8f77obMpYcc5Mzhag",
  "key12": "4sBmHCYhvmG8A1FKL5BTPVjDfuBwWzAXGgidriryipQiUHNHRQhqK1qpssm3wXGbqo6jQj5ARRvL6RvwiLrAP3Hv",
  "key13": "3vzxRMEJtTVdbbwVUtZ487RiLGuLWkJko2rD8yfxiGnWfn1BqaJrstr1jsVUbYvBRmEn1b7wQJVjyvVbDcgpzxvk",
  "key14": "55FGupsPcT4uYHJMUn1GrnbJTYmkp5Dcpj7LVXumjsVJdxQtF9mdL26vdVD2Zop7u4kqaxPV52Q2D3fWtFs8vyLT",
  "key15": "GPMBNkTZRoVSvFifnrP4mU86SacU1uPbqA3NQqY2f1cVPynwC2HtmWTVVYNWZafXQw6bAeBVeborEdkaKHWUTjs",
  "key16": "4wmoNbt16gBrEsKXxJDSm2GweCNMFpebSDEXaB2W7QEuyt4kJnaCE3XM597CLgciz9PiJ8Aph6tjY7RLyENfrggK",
  "key17": "Ti95reGwAKVBRxWX1hrmNdBhYvwK852yvGQFNrWyY2FqZGPJToZHrNwjGG4Bs4fZFCkmzjMV8gfkwWW96TqBpKX",
  "key18": "4ZctyM1SoG9vae8M2g2YGrrfb8ZEVmLG8zfU4WkbB3vcvUXdx55pXYn785ddQ7ELTuvv2qjf6g6ayqMiM2dG4bik",
  "key19": "5yCpXQLiRrQ5nvBKWiQ1UKqDHdazM2SYnoBuC8JY1YtrQLPWydnb3b33yYAdqpyXb7xrxh7yaGGVdKuuRHpd7pXh",
  "key20": "4hpd7MZR4Asr9u9ziXZ2YT4aRygy5G8KTHYqAZx6yL8zfCMMLpuvdDnPC5jEkLKXfBxwmydNyVX7h3fSs7FamUm5",
  "key21": "2kv2LLzFCckWaYDqB5YUm55kF9pLEWw9S6EyeZ1hypJVqLEx7uFKUnWYdRRqcFrp6oYH5CLErkmiYvGoQC7tob58",
  "key22": "5E7baNajuFbzrM7yrYFhaVvD8xMeuyo3q3PqoErU2KRsyXyiQbqc4hK8C4cFbH5LedCnUxSxAxA9VwB8X79UA3Ed",
  "key23": "4hVN3Bn8d6LEsH24tWMqtsQUzWZGJ79LPmNdtHYz7TMayYtUvkKKnvG6DtoTonEXEsSKhJKCDr9oz9GzE2gQqTdK",
  "key24": "3aCMZUQMPzKjoEd19sskABBCkv9jcMcPZZB3LdwGVsHzgNLbZpHjpqLsScH3mk7nCUFgq6e6PnQKuedVrT68Aoz6",
  "key25": "4R637Ht2pZmHvGjzpCM2RMgZMHjgd6sSFvhGcU8aHHoc8qBzEvCmWSVC4QFNtSQX9Mjzers3qeisSTS7dEww9Wsr",
  "key26": "u4kzUPgTKrGk7atX5d2iJZKXP57izoNzrpmRLkfhLKQ6zE9VohZ64j6zmwrKMDexQpL6g7mwdxuBCzxZvxndbM7",
  "key27": "2M8bYhB6gFct7hNHfrKUVZ5ni89SpR1sxP37JERZV1N6XkdRgatqp15EwXWSeDJM3R6oKDFVcESsPN5sZewSLuim",
  "key28": "2DQue72an7hUDiQYmUL6hymWpJjgd15GuKomAijf3iaehavhFHoVzxQpvUrhHhj5agP6V2ophwNW2BhJmv16vDJE",
  "key29": "iYT2hkXnXp5y1dk6x8nSmHA66djHmFihPEAX5Q5bkuSP2MvnpyK3PwKHiAQjBLWfV3yGQzod7N8riQeWcDdzh16",
  "key30": "59KUNB47NgxWGbPpMmmDhMH13giNDHN1kiMCyNTcpim6FozRt4Jc4CULHQ95VzP8cQvqnnmdBYXzoQKhGJLjbieE",
  "key31": "2pVNQ3ABM5GQk9GPiPRHq9hSD2n5ZcAwfgPdWLxEWHnP7GLXz9BL42uXBEzrnTeueBra7dZFfAfUKUur4LHzUbnR",
  "key32": "4UmGPxc9X18yuzbeNrKSEhtzi8ZPZnc5WuBbug3foyMuADFn4Pb4pJL5rUNboFLC4ansfRwGvf5H94vzfsAfDBWs",
  "key33": "5gmFFC5npx6WmY7LjSHBbSpihZyZ9iAJJcaaGGfzJv9UYGrTWjE1eo98Vv8iQCqRh3fegq6wnkLRWif8BnR1rYNE",
  "key34": "4LNWtun43n74a5reB8bCauvStFBEQf9VPdBtpzk2v2Uc1v4Z49dMCszprTFXmecQ8cpUcgWRyKByRMqDZHzFexZ8",
  "key35": "5S2hLXabUDBuKCfFUuBvd32QcEHLiXuzPWwm772pRDoAsYBCaZTth4ZbAZ5Kfu4EYb8ts6WVtnv8XxFECsLCWWsX",
  "key36": "hCak4jLUH7jHcY4cdVxdRtS6QdVZHDcAgJoCrzndcgRcex598RVMfSQAA62ek4FkRUF7gt1ofqW9CgUb5K2JupR",
  "key37": "4cXyjwFMVna4EeCjBdAFxHbhesy3xknPBEigRXLG63EAbMSkkwge2RFsud7DgHRY5jfSuc5F69Ck9D7hb73rtJQt",
  "key38": "LnYPZbYwdZ1gZZnreDcrzt9XmumYa3ph37apeA8WbJjv8vaEcLrbZF1nTJK3Jf57T7j5G5xce9NpnJJKLnFnmPL",
  "key39": "5bdrXgkzcJGux9A3GASpHHCSSBWWZ4oeutjgxBLxrrNYJB5x5MYLjLgxZb1dYRJfEUeGeGQ3HrrSpxDREhg7r5Sz",
  "key40": "5EYdLfwnyMKSxHfdxQqiNrZyQzN613qnRxSPdYvdFBkB7sh3CbHs764xMzxXii3xY9btwBENYoDtZL5RUzD9tJmA",
  "key41": "3syuBaLeLiiKiPjgHPvpSAZFrhgTbCVbusPw9FeNXV1SzAqifYWaDw3RAep2h8LUwyqHeJpvVH6WfcZkcFZPt8Hy",
  "key42": "2HSZKJsT7RanV29zvrdsbKiCLqhE2xaD55XUKGaGobgkGLJZmGJTQk6PEWYj9CujRJAMDjXdX61SXVkTSVP82DZK",
  "key43": "rqVUQAkcX6GaXn5Qu22x389qofhzrMc1kDGoTQW2KqABEXfinNQ3sMZRmhRA6jpjTeRhEQQPynJ19jGEkUy1ydE",
  "key44": "4q6wsajnyjLL8Ax2GDVjzA4cd5Ud9zmiag1SLcZD1PioQEjvkUr4TPBJdRupcsy18CHVNMvra6ZvXX7Z3d7EB1kX",
  "key45": "3A8heuJ1spP9CH9RU6ztLCAbcbuhZmveHmxrB65nWhf7UjGQG17b9AHctP1CWfKWhSsgyFePmH3rifykWLWaubMh"
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
