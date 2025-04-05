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
    "2Uf2UHmeGYLt4wmxGFCNfGxTEym6dr1gqzpkAt8NZWo3xicRcU3RNeSZHJHyr1K8Bo5Wiroo7QTBK1q4mVHq8Emy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sSJzB8c7qGHA9fJEQ55F3sNkVRrNf6aiZaJBqMegxsip3bq7a1q8P1DiDVXUuTnoAFHfzsS53R28sGnFD8bBy8n",
  "key1": "2ER4DunyCpRqRkyJc3C35gmDjcDdyqPGg5g1qnQojJmhGJ8TkuCpNbSXmAhwWY1AZH3pwhxAx7T4CDiNhsyyhYaT",
  "key2": "3JtroJ98U9rd1DEVvZ3d7YpSWe4TziV9a1oigtTqPGvEjw3wpxTpT5BGoV5LDFeT1q6ssdajyiV88myZSsDekftQ",
  "key3": "2mbKzbBwFuWLUfC2joKr8hqNXeGHVZCK8ukVECsfjWAU3vUzgMWR6Awrko6agnzPBwxvNsosdDMkMMiku19wynVs",
  "key4": "5q9yUL38mZBnqrvEhC6AZdjKM5XX8h3SquxQ1EvZmBcqQuRa3J6yUhtqs2c4fJ56qFm6j22LGHGjL78coay8ecUF",
  "key5": "2yoD2CL2zNX68cqfA6zZP5gAzN5XH2NYL2ojycfjmZcRUUQNyEkZUdSftUj78aVkc9iABsLURtJv2W1ae2NQVBhi",
  "key6": "4gzvqGvvS7xpDWJcNnExetxi2gnrnXRDJ6wnFBio3JzXpfMCb4YCFaCzyPjGTi5JUHXyrqgWWVMKRwunrMo8XUk1",
  "key7": "3kgE91nSNLUcwaiTbs35yZ4cGoSKxu4M9GjPwVrJ9pPCbyX4wp5yXDqGk21b3t9XunWnL6MHyYLU6rjf4Gohvy2J",
  "key8": "36sSzusAzFgaxwgdwRBCxZG4EHCPxqa6c5iVsBp7o34ZwSuF92rPvi3Q9nabs9Asr88v7u2zY2ZDSANR2KEotBoo",
  "key9": "vFS9akkaz94G9M6mi3J56g72s8BqRVASq5cNnnzSNqB37N6wjWJdtLpDFjAbAeDAKhTLB2E9z7RrdDBVRQ3vMsL",
  "key10": "4gvxmuE9TQcC4tUK75tKhT1riY98cwMuLwDKbhxgXkoeLL1dMJrLm8r5ebXB4m9wCTYHWGE6hjYM1uNGk6bZtq6J",
  "key11": "2FRxoG5n3vV1RpW1PvtWPVd6FNkPYAVVTEtduAFstNMQ5oYXYriuWi23ET4Uny8s22JtLQ1y1TAMzSPUTgSbeLqa",
  "key12": "3DC2bKYD6QoMx1c7WqXJK3EsDVYoGpcDUbkG4w97JgGhUudFHPmbx8qMHXd3J6QbXDwMCo973k4bo8sb639oU91n",
  "key13": "pfTE3sPLE8CeA9Es7g8oumdTsq3gSR4kP8Q3QNrkX6UaWvKQD1XAXZqvQ4aKAm5j7WE61ASmwGMC2hTdHfqyJ1B",
  "key14": "2hB3z63fj19q6HkPJDKrXhyHy7TxopXvGCNMXwmwbbmbX248FQUvDhGnYxnZPvASD5ChF9XaNbhdYxEi4PV3Jnrz",
  "key15": "kqB3BgYx1y2M2aRJFmZYx51eEAGNqApS6yzPbZZfW82dFgJ51XYB4SWHDF1KAjqkUuvTUzoGEVNjXDWXmUXeinD",
  "key16": "gGiR7FDphcUh2zRDGVqFxMcMLKrrARmMKNj4VZYmsdqjU9R9sMeaNNpHuBMYvxN5rw1dHB4HPbr3BcPyzvemNcL",
  "key17": "4zkGj2iV6nDp9M2GKFQekQrttAENYC83jcj2bgbNjrR3C8n6mnS3Z34AWXFYUM1bN1kNushz7VxPPwHSxdZLwNj2",
  "key18": "26GBFbvVjQEwr59RjtB3dt4xZwLGNThPTEEjDiUysgS5UPj2JpUCGWU4Hy39Vt3cHxBkYBCszbtUmLpQeDbSiRMF",
  "key19": "yUacEu8vZe6bxYJnfHKPFujvHbLiFiiADBAJx9PJLTaEQTdS4pf2nuiQYJMBU8G871wpYVmp57ppreKqY3PtiST",
  "key20": "3696XTja8q7E4ojt9giXgT3r5QbDpDKjEuSEmUe8pC2LvrfkEWLxkxy556XynqAP5fZXf31BG1VoQp4hMhPpkPea",
  "key21": "4XL9auj74cDHLXpgEL3vLjYfwaFw2Fdcc4R9sAXwqPtr7BPFCW8AJAj24mwm72ULrDF2WCkb4yUEBB6UKe2g4i4H",
  "key22": "4arGYF14jEJgVPbxdmV7NZ1PM63kX87DrYtW1xPHq92CE7fMJnPsg6WUHN6keE1ab6zY7arDSC2qabZnRF4k8cjS",
  "key23": "36PHPMbTK11WDaHBuxnj4mUkrtPk3dr32FJHoEmr9qFTNYJMBkCKGeSiWVdUL5yCx3XwyEHT9W9iGFXVf33rSaTK",
  "key24": "JndrP25B3uK6UCKHYb1Fifr5kTsiimotSHT97pv9eKuHbvGLVvoZhkJMtVuQieNJU8cQsxJeVLpeqSypADL55CL",
  "key25": "4xbCDFxd6c5KMrdhVfdEktp8dRP5N1tegbUZE3AiRVDkANcZgSW5yPQiDou8gMtuFDim8oav78fZdardkd7ueaXe",
  "key26": "3njJrVp6pa2zv5GyXWSBLnpe2EJ9M8bDKm5Jndnx65cAuMmqN9TcFm6zXwahZjVhrm61DgXfyd1CBH4FnZQPbm5B",
  "key27": "5gmFiUgXztAwLNHb2WTaGqy5di5qEA96AdzQsWTWRZa5Xb5TUXnnE2tMvyEZtstehhfcAt2TGznnU6aYjuq7FhwX",
  "key28": "4zaysjHbXK6KbYStoYXEcvzaoD58AYrBghA2CMuBETMoYZ7thJKERsVxBx2YjfeepWXdqCysYCn93egAEtu7vqc4",
  "key29": "5UMhv9JSzaRoYsRdgPErrS96QdE68M39h98ZHEZMyCZN4afWCVAyZbZ2n34A3JXEt8XNtX1rxSn8EgPYLyBDwXGA",
  "key30": "TmgfyNQfPmojpWnDc6fcs6qVbrkv8rceqF4piYnBMi33ddFEPMFk1DD3CV7YJNUpD2qN47KG8RVFrMV4nNhkgX1",
  "key31": "4RcWQBjkQcknYew5wXL2XC7nQ7h7X2tezYnUo7E3n8WTUBiq7dJTXhmwjPp9j6paoSkms4TY6rUULP96Tczt22j2",
  "key32": "5EmrSoytjw3Z3uvHNJdZZCwdmytwUxFq2nkHAhVjSo8CynnqPP17kWbhYwG6GAyiAaLiPBj9Cvc6UDG6Q92q89Pb",
  "key33": "2QfAHxkCsNBUcAzLy6y9ZPMEG4DiZhwK1Xoi6zCDj5uMVKQVWxGiB1Eg9zm7wuUTe1xBPct4cRVKLJJVAQywRrRP",
  "key34": "zWt7ZX3dBpKmoQfStwmWEx3HDdExLLKho8UXDs7P2EQy5cvGvKtjpA5u2h1TsFDyDrcqZJnFbrTRGT2HegZ6n3C",
  "key35": "3ECzrsfJ6QuqPWfXXpcXBAhKB2zWcsc3myQWR4ftBKyCqQmsU8yJC2wMrofruY1fZ2MgQoMwYBQuAiKYX5Z8TrkS",
  "key36": "GG4g54Y1F8Lj1XmZkSJTNKrJfPNX6xsSJQpReX6r1WJR918MJZwcWCPMvc6dsD7i9FrTuZF3yXWQnca8aauU4ka",
  "key37": "58ssP2aPaqqRVRv9ESTAgZg7BSgnQBqRLievy8ZR4LRpDhpGBDsmeMpPBb9Rdv9p8sURzaLbtGuNV2fzonb58Md5",
  "key38": "Udrxp1nX68Fgo3XCeBDBYHcNih124YJEjTuaGfb7v3vNBkKwBgcmyRfHen9aKyNCRJriaynwWwhSir5jeye4Q1Y",
  "key39": "4LrgTj7h8GKKZbFBxaLWzPGZf7YhjTY3N2TA9RBZUcJRWVKuP4UuPvx2QSFgP7zebPEiVvRmTqDvZuqtkWswyj62"
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
