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
    "53c1f9zW5HR381QbauYczYEmF2HzqMPcftp2yVoWxSyGixQ2G6jXLJ4inUKWcwpdSYh3MveXDAMUDoKTgvNZozaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCAHbTXAYCZaQHo2yH3vWzv8VdHsgPM75W4YZViyM7i5AAMHKFetKin7gwAee4Wtc8mJEFo3C3z3gtXU5Dnmn7R",
  "key1": "5apYrbTjBWrczCYu7CVQ7h9AjCzxxXPDVe3bh9EXBapw7GHP5QE16P2XgeSsVfjyfAqDjZ3rw8HubZPnd442g1Lt",
  "key2": "3mEsaMLJofg6U2uwQo8Wb9W78ttzYarbbdo4kU8PWaLeVTCd8GUmZ6hN4MHpA2ueDGujdHLz5VVbFTXoQChP86dp",
  "key3": "317VWPLURUu2TCdqez8P9HY6NDWee43ZidnwMokgiqTGqe9ixgJnGPKPCATWK1UwGZoMoeQeMw6dN3Ndc21yNuMM",
  "key4": "5iJo9Yqb2ZeZ6EcwcJCnLpwdWPrgUKZowDNNS4F2zodTta3Dfp8wvgGfrimnAyiCXDakvFKdvWnY61oAqoYB1Pt2",
  "key5": "49Svto2AKLo5VaHhig488bZ8MYZe9EJfaCgGr3LBhA27DaDbKBr5L84kynTKwkiFjbbPCN6GRaPd1174qJw2ZzRB",
  "key6": "4Aug2BrEhAFL1edr8wD4LJcx95YxEZFfWYiGqhkgpdvjEb8s3NkSHL3uEYBYfp4nYyWeFwG4n4XCp5SNBenxGnkq",
  "key7": "5vAJ1ebcZZ51aSB8f8sKbXEsP85whenh4mGK2jjByTXFZ8DYWG54YCkM69LxgAR43vapjCTxVYi5jJ3qAjFhVeqW",
  "key8": "5eBZ9dnjciqjR1Wbux6ymgfNedCxrQZWAeMnQrBdPqWGbVmoS6TWuM6AeK1BBNrYuVMkGvduFpqvXzt5UoReEmpF",
  "key9": "B45Rx8QgkuuohQybwnXjPbwaihwKfq9a1fCQedM1j1AedoRENjHXqbi3Y7LGZNTbZUcKZKcmbdeH3dazDr1s4nj",
  "key10": "5ZinrEF5a5dAf9MtRa438c73mKdpU7DzQHfbAMKypXTmaPwpQZZxyusTMNa3dSjwCM4qkiihzbbaSx2k6j7Tuj6n",
  "key11": "5xp9SzkCHJq4mneeYvmm9rNJkgWnNG6F672cy9Jk5gDEVbyFtBGJaJrwcFkVQwCNB2ZBh8ecSVyRAkAaLJJfVohw",
  "key12": "4dh1hHguepGTpguEYPXcdmC6jerJm1XBobtCM95CeLxttzCQkQk1V9uLMGYPMqZd5fAhDbksFnma1Ug9YJdNpoHs",
  "key13": "4B79HvqGtjCmrksaxh3idSnNbyeGSvQYFrZaB9UdojogoRSfH8w7GNeR1CE7HiRTDPw9JEy3hoZAdBzUM6XJWryv",
  "key14": "4LDVVk8iWsnXyiwcwC6fM1VsW2swkFKpx5awk5coRSvqwB4tzrddd3ME1DPH2yK6ASDhPfXqH6D22MezKPuxG4i2",
  "key15": "EDFijovkciMTPd9JYvgruLQJRA9PPAW4EkFd1zGimf42driaRD5jr1tn3vgiXzCjoUKuzUsALetjXyjyEgNujvs",
  "key16": "2jNHg4M6r7J8YozU4pjmL39aPDMVpeYVy1jvsnrUTapVu38vNm4ynZLiB34tQAKFcfzdi2dEJ9zN8vzRPnkvdyFQ",
  "key17": "2fernKYERsCqNpq7qSnZcMzcHNKp2QzXFhpK7Vve5UZTQixhUuvqCqw7wnyGt6pa2DG8pXGXYAfFhY89kprG9FUQ",
  "key18": "37NSSizWnph5BKx2euk8DZiQ69nrJhM3gi9YnpuMtwA2UGKE2UFhpcp4XkA99cy4F1Wyy5zHodTtSurq5RnXtP5p",
  "key19": "b3jejcECKAcEdxkoUq6qaGFU969UQcq7GqdoAWr335yrn3JmbG7rYkHbf7vcueMZm5kSi9nuHYRbxoJjWyYbjjT",
  "key20": "4k2UDy7aMXyu8f8YNAawXnRCUuNsFLrxTJHZwPRu9odaxRNh8cxjfb52wsoWRk2Y9sWnyVM57Qr9eK3PGNZAfqxa",
  "key21": "EjmJgKWw6hUv5RzzdubiioKm63j9E1BDjubBr2Hv2oBbvsi2Ee2RHhSyXwVFMKoC4e28Zd3r8cckgGhTGQxStH8",
  "key22": "2sshV6BL21Jkc5PcLbN4Z6pHmTn1Zab1p8wdxeZ4R8j1mxNQKLN7nvGhCDAPa5a6YiCkVExns1F6e1FeLpbVZPay",
  "key23": "5Dv1qFBsqRDJtTyqsQfd9Y6LeZrrHUsrJXaM5aWyJk1U9gMCCVS4w5XTBweA5QUCQUjWUyNk5nGy7GW8J9fEKVwR",
  "key24": "5u6RRxFEaSxB3SB3EYvk1RT1ewpyRWeJWRGA7UwBrqdAkihTaUY9QZuZSsvfqAmVUN16n13xdUXPHrwt9Z1qHvKL",
  "key25": "34r7kpFYhbzEJD6TaC1ThVtu7X2sSueLxoWR5tfQvJ6J3qPCU6GqxRgUouxCCXHCojtyVaA1vcZWZun5krv5kwK4",
  "key26": "UKVpQYDxHkHaiNVhdmJNmdtXDtXq4pKFq6kE4jgwyvSZkXPswCD8wGCwPVRLCrmhGcphVCMx9z7Tpzi4GtgWVSL",
  "key27": "5yrpqFAAE3TQxJTMXFBMhfHc6J9m2zPVaGsXrK96G8a6HU573amptp3bzK4rKtkNVt98LJgDNnzY4tR6j9xKnQKw",
  "key28": "4sRbFaZPFQq2j735G2BbDad97jcSyt8jm1EuMCsmvsnz6DPQGkTCraUBbQejRmttL3Vw7fqHuGgDAcFchpEZpEm4",
  "key29": "4v3SXEzFKKWnq2tHuXokY5DkxHX3jDNfw6caNoVhjQbVRRZheW5AKzUf13HT3KTYWTvsFnCtpg6fx8BTSFXEXFJm",
  "key30": "3VszrEpygE95f31vbPTeUsm8YZoNDcAjDPrJMMK6dRmbGvaMdVaWKeyu9js6eGRqro2WS75LEkWS3ybZTw4DyeKA",
  "key31": "21a3FoDz8ExZiDHDrVcUw3h78Y1PadpeoisJaPhBsX3V8kNjp6xpodUZpJWJ1t6J6eXqqncsKFpdBbzLwqz8S1Pw",
  "key32": "3UbjxHgjr7UujBFFNmtVtDoAqtZPrEvY8svyKZXhU3QSki3Bi1o43W5EyxYxEpz48n7sdkUacBUHqNEjXketbH3U",
  "key33": "5Sq5c72RWGLjmhixBNbpTd8s2MwphNZzjvti3FKQjrfsNhaBvmA5JB6ADoCS7eDX9nYYuqRuD5BQvfsex6Tw1g9J",
  "key34": "5YukZ56bPEyiYC4eNLX2CS6EgXetVF8vLiMmLiKA7TAhn2VZjAXjjJ5JS46Qi7G1Q62q89tzJGuEyBDMoCd5pZTY",
  "key35": "6zpb1VZmEBbQPnXDqzBw2csfrRfjDenFhFDFWRZUAGy6u2vkgG7Nv93wRDVMqFaXJPPzFyDQmbiWqk2pfXFNVGu",
  "key36": "2QhRuVir4iWYG6Gy4Saza5EW7WUpWrzQo56QG1L61fsTQHSLnYqUNj95uBarwEATmjyx4vfFHFur7d8gxSTpTq6Z",
  "key37": "44etDVec3b3gdcwsMsrHKa3NVn84yUcAu22DwZq6jueDCLfx7LJDw6eEREvFnr3jPJenZHUjSBYDe7FFinGt2pre",
  "key38": "2Nns7BsSTmkdQjb3pvgMoXs19gWXy2dYBc8gigXKDMwhoMCmXTFeiSp9XohRMiKhRJsG1CEmQpxavfnjksaKS8wf",
  "key39": "GMEj9cUia6uMQWoyX6nQrmKv4kcrLC2dvkqUVvYvM9fhYHRgsDphnn2dxP19svMMrqzB2mxJt6rLprvNDPCgKGT"
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
