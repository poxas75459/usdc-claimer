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
    "3188C5noFWCbtbi5eMUCMK8RfcNqjXAeCtRKWmqCYT1UtSEFxgH7Em5zaS2XSNtm3R2FgWxAnV94iiMpZw5r2jWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6F73YDi9yA78KDYtC2ZipUupUVhM5tf5Ed9r19zSWqY47mcSoCRPBmnBinsSQcq16PCMtWR1vzYmyvCXCFbEMj",
  "key1": "4spCaTdft5PpT8c29DxGjjdde1nadu3uXmuTLPXtNJmZiCr9m3FNfoSct4DezXyjhxSdsm5aeokPEMrvHUjFvfar",
  "key2": "4qogCnhx6m1a6cifcG6SoRqJjP1r8QspBZTy7As5mC72ZrDvSXbuzvV8muspWKmMV64zF1pMZiJLvkfWFMVi6e3Y",
  "key3": "2UfS2sHhTqMkUEzkrKepS7M9x9rNF3hJVHubJdKP34YhbujWvA3SHrSxrsZWTfWLqrneq7d7t2dw8hRtuRia1jio",
  "key4": "2zkmfhUMTEapdvaCrkaURmmheesmBSZVtaQTJvvGHKzWZhfB15QgLHBV7G9VJKJmEzUHgYhNifJc4E6oi8JhWqzF",
  "key5": "29gRZRZGX4XBq53bcvBotyGgWEW8CUcQHtF7FhR91eAzJBwVpaZfT28S19cb2Y5Rct3yoSCsDJ4n5BWKBp25X7Vp",
  "key6": "2zr9vKVakjBW67v66nmtDSh7qWPrYn7GLgRhyfRfmbj8apxCDyxp91EB3kFAEbvdLFskPfRfxY2xkVniXCezpbw3",
  "key7": "52LCgxJxtnQnmWMSmkkRNTPnkGjzZc6fjZ9X6S7RWbyit1vjqMRwPnRGoVJMjCPE9iPAfk99wcFiJa6xeEfWs9Hv",
  "key8": "4aguLrQrBrhRm7PEPDUA4byPprPpPJ8GXLRC4hWYHxUx9XDyf27T2wp9cKaZFSrkuDNFJNhcSwmWNS3vFK1KE3dL",
  "key9": "2wpJ28tz1MFG7aeLqVqaxU2WabKqqvKENd7JqPMkVfGNSWZqcQtRW5Vfya5pF7VXzS9quKePaN5oRmwHr3bgUQFt",
  "key10": "2EjVPGoKf5ijwNZypUPU72T4Cz8RLEBihFPUFLKyinfGT6JjT4JE7jXKXYZV5QHPVGPPzhg6bYJ5NQRiKTHf77v7",
  "key11": "3EEAvNxr4eto9CFmVSDHybBV9cMzsjRAFaDNXzEpB5bHxrqVVUyQTxdHramPAShSPxehWLxioFgYn3s1KZWLEsXp",
  "key12": "3kq2iMuJUJqDR3VD4AdjVbM9ony9zFJgJWuz1wGha9AyXZ4ivB5dXqS9AgvejgdLWmXRA5SMMQs9SFw2ffGxQYzx",
  "key13": "47kdiYm4awy9575s8W2YGbSzXykoVUaha2xLF3URJPpGdDcUQqFLj4gqxQh7JN2jguhaaGdEWYuDmVnNfdZXiAHf",
  "key14": "GEvaRi7PQ7vJkKhLCJEJDESnekbm2pHxbLGLdw2sfsg98Ec9N1BDUs9xi7aFsiVy71K5ZnLgcAvS73yAYXotoZt",
  "key15": "5RE7tKFdKunVMeURiLqGuZZvvn8VmT5Wsbxy3s8miD8QSbBoNyfANgTRNgJzgu4P788pdtUs2AHFnvwLJ72Wcsvw",
  "key16": "3rVbjuz5aKVpVU7aiMPLBKQMBM7LWo8TWi968ViiqBsmAZAmpNe6F96ozm7df2Xr7LDuqhdBiYzouQd2uruCU9Cn",
  "key17": "5BKruXwFTck7JaFMr5Ua3vUCiHK4NFuJYvRMJj9whwsmGD7zja7uqJz4MV973W4o3agvND7uoBhAQE8TCxY2C2Cn",
  "key18": "57XrZgNJNmHEXKq38JTzg2D67U8kHzmGQf5NygwQf6ktBpzv77reGq8bRhY5n2tdRtgRY372kB6ynHSawFnBwHsR",
  "key19": "irMt4PLk7yUGFZjjPZbQyqCZnfPSxjsvFtWnW1giEutAY623RwnQ2g4nSsfCshTh9zrftsCTuzGZNWqAeTtYmC5",
  "key20": "5igzvYq6GdqbhbrWU1Ve2R7w7Pemz1aiaZhX37hnjxQsT9W7HumbphqyzCeGSBbFcNEuxMaL2RLVz3oCqjKuGqkb",
  "key21": "xv8yLQrdab3XagsgtxRHLPweu9hm6rGkh3bJMX6KHBbn493NtXWCWjeaKbQVX25ppCqhzJCDbBGoG3i4BWsvTQf",
  "key22": "67TBjpUyB3RQLSrSZNM5Fa3AewJb4Ke1Pi14t9DBhm4GJMdWkArHkezeCf3rjkNeHxYg5VHDH5p169N6QknnBUa4",
  "key23": "2RXJhifkGmgkL2jUJuY5pBgHnjTNDiu9eYQgQ5pWM4bfQS4MtCmkDFEiKXLstDZmwew6JXzgc7eGbkUB3zrCimxq",
  "key24": "2D4ERBUQoqG1g34tz19bnDaCrgBJa3frMwGUXbAQfwKp7LWJQC3og29LV8YvFGrbEotGjzkDP18q97L1LZnwRH43",
  "key25": "3PZxxuYyBKGTqt2LBSzbDkfLGFpvp4eevs5jZfjRBpoVpM5ZtXjspB5S7KmEwjjQRM4vGLk2rFUVcj9YLmg9noDx",
  "key26": "5cGpbTsYpgbkBFDcbkW2KcmZGKkjaeomszTPxFVj7NL7GUfCQ2vbjkvPhyUZVtgsHBSJn8VQRQRFK8qw8tfyu355",
  "key27": "2uihmQoiYiprBA4U2HrvvQqgPfuxkGGmHtRuLgQhvwYYwd77vyGSLoy4qPH5xmQBpWJossEURBrUSLXqQE9tbasb",
  "key28": "4WmqSrY7VfHTGRmi1Q3GUKvg5ZkMXfSPJSYkabbz722WRvBndvmGNAZst9eVvSnwZyFPTHF6dugDLSLGs4Y156Pd",
  "key29": "fQEZ7vUHMX38yp757ccvQmTBoigajpF4454GGUWjSURDUYZjneZ7U2Di4M1MqqwsXA1WLMD23yNAWhccYP9XwzZ"
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
