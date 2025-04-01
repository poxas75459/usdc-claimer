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
    "3LxDYjPZ4V6NbbmwQZ2nYcGu99wTXSEM9ycY1UKEPNCLqMzGaEPPegNPZBS814PwZhacms1fmtsJYrqDW1SD5Vju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oZ9BmLBDmEvKudXj12ExUewy9faK7tpiZW39i8R3Qt44cbjzzVKW1yCdE3j1Yb6eUgmt57N1mZDDg1RHUdeW6G",
  "key1": "3mH7RGhcwJKq7FyHCr6RNJ6rXS5Y2a9GVJc2tc9SXccEMzCcWWDEALnTCigTvL1kr91yNiZAPxV1Bvppv1PU76qi",
  "key2": "4Mk7jsTeMTtuJUxctUYYig3rQYBvKd4iniWRntWbK42WESx6M3BXtHK71xLQoh4XkZX75dfmG2fEUi8r4WUx7ZMM",
  "key3": "ZZ781fAFgEbW5EvNeeAsbTc67TrYb5by6CCUUfYqkkveyvb9Zg98DJDM6aHZeJQVotchGRbkvgdA7fE3vbszpcU",
  "key4": "3sC6W3eSzXcS78afGYMtgTyMmJ7KW5haXDMCWNZb9QVDiwzoRDK16JbxhKpms1m6CYf73Mf6WqfSaCjneZPDAdTJ",
  "key5": "4xVtaEkr9mwGkxcSuBT4KoUqmTALuBww7nLhKCo39qy53gVygtihhD7j8aYmYn8oz7mDe4WogEPfWCs7bf41N4vD",
  "key6": "bqaMJ2enwKFZQ6aUddZLGSMAjHpoGrt3u67ZQzSaeATcc4K8VzvHajb7TUwZXKVFmKP7Nz9N4yUYv73jVTunJCj",
  "key7": "2tugUPJvjJnKCHyVvteCcNhNfGjQbtfdusjxB31ZbCceBDrptSoe1y52nkc2VqKq5XdVnY63EofkgCCDMi1FzMCo",
  "key8": "4Vgw6xmHAq4HZg1xyRk7F74WAvQRmpfKgVQuaVgm3EwFypUWbKggeUJX3meDiZ2D4HWQorNq6yVhavpWzMsn4Bk",
  "key9": "F9Ed4ijc9z125ZLoKWRtNdLbXTvsiwQm5yojknmQcviwJGUTdw7nn3BtwLARobXjkcM54xQPeBBunzMUoL2xzTi",
  "key10": "34o89PAitSv613J1mgeFguoo5FdcyxRUkx2Bdn41KCJM8WtadnK15Yrk8m2RpcPfiPSEpwcyJiSiGPtQ3AHTWQ3e",
  "key11": "5VaiVt723mz8cEfBLoGJCwMb3eSjBd227LuFw3HE81SHTj9MqbkDfTm9msUyf8SMtrMMjVr7kRenverNfaprRYtW",
  "key12": "3BrEQFxdMTKdfEE2Q4QYp5CFTCzzMXoTsLSwqFzVjZGBYCLrGuzjZPjyUE6oZBnLbo3egLcE4ZND6zSLus4SLhkw",
  "key13": "4bCjkgc45X5qyZrxnP1hSqGK9MBrw56TAJBRBMSdj2kr84T5CEetRvbZM8zMTAso5KMcBfoTYdaPW5WKHovvi9cV",
  "key14": "3BnkQBea3zY5affK7Bog6sg3QD4csZXB9dqnhedk5UdJRDtJH9sJDfWosx1y1ddgGbkzqoaNSY3vQLNJ6CVUcRo8",
  "key15": "fGL6dpKnLYwMKQBFfeGMqCeAAPfKuaDhNwL6psXxNcLHjf9PpcGSReUekatu5dN3MhFRNPrsqU6fwaK1XvdQKR4",
  "key16": "5Vqq82dfagbYwAjdTVFhh2A3QVf9pfaKVfS4gBQs8iXy3otrDHjJD4iKAkrRyqYk1PbA1m2woqBSMgBR6TXoXop",
  "key17": "4jhZ5G3g3EuaD6iZca3L86L2bhzrAAD5bekDMTVBF77coUF2gySvpuwg8Hdh9H4e74fVgKXNgLBSzQnh9Kvd2D7x",
  "key18": "2NWcs6cEfwxCiK4aGfbvXihdwbo5XjfGLvsW5hmA28QvozJogGdW51NL711GHr9MESnQPEzpQfmY9JhTXH6sUYnd",
  "key19": "3pHYDw2J5jsY2XeWcewsdcchwtPNccjCN895U5tN8MWUPN5tFQM1XH9pPGXZ5bfAmVGgKQ5UBkE2YLhALyriMBm1",
  "key20": "9KZU2rGaWB6Wa2o6EJ7Ve24dY4QdEK2XnnXdbJ5e1UKZjVUaZY2sqFnp6pnwZLrhS3q4sLmt9gQQY7TBEC3uDU2",
  "key21": "4CaUz2SSr5jVh8XvN76xDfy6WG5QZjmSCodJ2eXNThwzWXX9VHkLMxiFyqK5RCdjmV7W5MmDecd4zfLHDThSNr9M",
  "key22": "2RKrbdCad94gBRr8evRXypxTh9kqKpWxwMfYqirivq1M2g3T45TmUR1KKCLCswzfZaV3c9WJUBcFKWmSxS5CgTE1",
  "key23": "3YvuT1Juse7Ej4AevE8CoKcEGBuRZRsWZFsdAPUz545o4eBJesYb9sMLPhuUjGdGjrBAtgjcpa7vWm4YrDZMoiV4",
  "key24": "5TNmH1c8gKjp6GZbaMy8QzXMYBtCRiS55GaJPaoH9HgSgiV8aFjGPDqpyUvVp3bRi9dtEPGzZJyh5XtSgbEKUT38",
  "key25": "3H5CoDwaQYWMDBgSXHndnysWBbhVhiKZqtpjHPcNtvpPEqMz78Zi9h8LtRq7AwLXvBbhPvBfRBr3NRGLRBwX32pX",
  "key26": "3Qez1rtoFWuwRubt3sppxqxg6D6fTz5nj2nhyP7PD79A2R1t9JHQAkd5KWXhBH1NfHuiLMj5s5xwN3siMDyCGfrM",
  "key27": "3pwyxgjCSHfR86ivqnJbdqcjRpKM4r9rRNsPAt3yzRLouxNXTB6vME71E1xnvhJXZYf9tjcegnDAxPuTwaeJqACu",
  "key28": "5eNbqfUusJfFhDpDxenCxDqNhWhRJEYsnAt6v8Hq42HtjaQXy3yNRD5ivgNSAbVLVLUSx8hBU1AjD6oGqMw7vKAT",
  "key29": "52iF6vhLNaZhTAPKcLNAZkEWaa1f9moMXAd56oP4kiKGUGwHhCWTq8nvakWsnhhxUapkJNEjnhaxu5os3rekFMYK",
  "key30": "5sG2zczhqYzRU9X3Ht5ZzfTMDduY2pFDrWLDu5YyT36juwCyZ89JhQodAS7i6DFndCpE25SgdK63QMCXZZQB7FDy",
  "key31": "YtsCBLnFzSqzWY6ymhgUqCiKrU5d2K2PRha9Lvk9ohnvnwAuAwBbx2zqfPPcVBXCVb2Xd1hJGBLMAwzLSPPgJnR",
  "key32": "2KPjyzQsHzYyhuvjJt3dQasMYhnZCYfjcKsXvQEcTX1jPH99vZLU6ompBPYNRgzfTkpdt9DE4Lp79yopB1y9kQXK",
  "key33": "2xASuW9HnVABDruaj5XHWdA5hJFQr48DgoQYHgucygNe4Rwg7qrajpSFzthm1zYT7fotdsm6mzhMJYxJyLV4UPb",
  "key34": "2s3w98m7Lm2P9YQ8dBJHQ4B1qjyhUB8nrRWCpziavKnJQWekLk4o8KP71HbFRnDHnfui8tbgwC3qJpuWK5iF9BRi",
  "key35": "5HaS83fkNTNM9KQurmfPdfCgmfoBtTDmPL7m9aGpdTcKukP9DAPSZkoHgznq6dR6AZNEBUCgQK5tWimS8LaeXbNM"
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
