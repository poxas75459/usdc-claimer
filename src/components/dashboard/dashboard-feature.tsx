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
    "55fbevaQUhT6e8krG6yGaigZkhwtMSY1AdLXyRqJbakaFJqT6w7cvugYrjm2QtgDDCChY6t2bNu4frJMfeVe3h6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frxpNWFTZaCzsEBzoP2mEMd9CdiNyN3Q98vGtTaj8g3K1YvV7zduCoC9ZQoenb2f6u3n5ftrKvmbMG39aiNwuN7",
  "key1": "Gd4jAAtPgv8XyGF2vcDPsZ8YzZWew3SpyV7pWoTaywhZTude9vxXsBTESrFDuVmDhQjjTagY3Rjrm4pHxbw6Bq1",
  "key2": "3UnN9D4Qr8CSyQTMLGgwRa3YHufG3pYmjcU9DkPZj4vvVcvBKmZrCtBFLdCQpeuTuNXscATG158K1Xh8RrTxLLYJ",
  "key3": "4VMxUzGanc7ohCndcSZuH2Fn9AY6MgaC4wGNJXQ1cmDGH88Eak2hSjtZk8cwNXCiGn3uwJNazUPk2h7a5ezcag2z",
  "key4": "21gqZgaC7F8TaapXbKeSNb1BN1naEVatFvqCCa63W6kTUNrN74ert6c2HzLBehhWRwyx8TRLnnU9QKheYZ8F3DbT",
  "key5": "3WtbZdkr4pE8mSdjTjYNfUEMsyBADGJvUtuDJt3LqriwBBRgK4FJrpkgmHou5L9BePqcCnBMCdPX9VscnjeKBeo7",
  "key6": "1nMqoSXVqHCZ1hBqrcD8EGXdB6Vxa25Hr2fTbbXrq629ntSNMpv9ejiCHdfGUADg5A4z6GPVF6gFiiksbKECj6a",
  "key7": "3tjFAum5HkPVMXxX8UiF4BZX4Y7EVV1Lppp8KwrjWkAQneKz8tzMcqC41e5emU4pt2tsUDWkxgMdYqgLL7UeHyt8",
  "key8": "qhmoQFvabAtwa1siwZYR1JjctkLwrhuTzx63vtucmYgev5NwzmcX3Spq6wdkCd7vgKySfpRsnLH74nyZEB7D4yB",
  "key9": "4dUYNVG1xZDczVBUmrpVYAZLobtvQPkxFzBe9qpecuUUh9UAHNpBCt4skqD8ZKgowuMvV7XVQZNqZUW8Ly12cKNM",
  "key10": "4M1VPBCvviX5pFp95yra5Lxv1hA1LPKfqfiozpors1ja4prQXY9T779Gg5qkrU8nNDTFxTW5Vcip6Xfb5zE6JFdj",
  "key11": "6w8edmfvJ4yrVVjAk63Us6Wj9Grkdu5F5QCmLmWgazGjK56cPzRiBXwtQPHEjhG1XQpygwYhG52BTjUmoebysDU",
  "key12": "ALtHE77YKmo6QAgMCd4j4RWc3tH3NBtMRYdDgo1cNRLBzpy7hCPjQuxUPJ1PSBhbnzKCfUk2YmM3bampLHE9Ve7",
  "key13": "3FwdgSocNj3AUVABc9pstjCuM9RWESDQHEVPpHkUXzwE16gKyRb5gnwAhjGyk8FN4tbXyVtmZrxViTULYHk1nhNW",
  "key14": "2obtGXtPhbz7ZZjj1hNzMhSq6jEtT2ko4ipcPvv4em31LmbsHzgyGjvCLTyPPt5ZfHWDrGe9ZGMzXtm3jTimA7Wn",
  "key15": "2fKYT55pX5ao5x3FX6zsPP3p32cj64GF7auVy9Jfu4uM6c5dgNgeBMQ6kwNKExyLwZU5HcNDAXk6zj5PAzGz9Ya8",
  "key16": "4VnSZ5YvZHhydiBu3vgrWCpZdD6h3C1twK1swqK25sFsGwFTaFJFtnBQL7ZNsai8QfpcNtqyzD3bFwSATLEYurDq",
  "key17": "kYxuVVEdL9ZzJbnudGf542kiHhG5SWFitYQVhuYwQeiuNHzFTeAjBgRRWUehpUM33LH8P65N6RbWATfj4peU3sk",
  "key18": "4CJ41R5XEEAgtUvw7WPQtnfkDdYuQjCscKD83Hw1CgxDTx4sw416k21tvLWqSHCYAEw1z74FyyuS7MvJpmPGQGzq",
  "key19": "3dday9t6r6beu8a6Tsbbi7i4Yn7eSS6X5rfcvEUTAkUbcK5gUWeAroWz83tVVvgjdmuzNXeXzovxxDyoAcGQkHgn",
  "key20": "3JPWnjbc2PE7pSK3JpBgtuXnFaBmnDUSvY6Fec7HvdR8CwrKZdYaHrHsWvkrgZXYiz46NZkpYTXBWwZrZxa8CKL6",
  "key21": "2ud93YNz4vyZ1QrKqZbrhyCiKkWPy9PtHuw3TfHi38jtiQSZ8NCdUA69NhFEnaMazdNz7MJvR7zqcf2384BJvz5F",
  "key22": "3HrdvQw64puJHYFh2jcchVzWUfLBS4EbQ9jEKBNfV4h9y9EaNiqTVX7z7GuM7NZkAjt1J1CkC9Y3Q7yt8uM5NGiw",
  "key23": "2Mx6fJyHcLcd6MdG8NHiFuC6AWtNSknzyfzx6FV2wqfiEaZmTHyBikPA2yFnoC1RmQnvjzf7rCb27YBz2g1hGdwr",
  "key24": "NzughyUh4cxjCSFbZuF9GrigFGJ9h58g5459ifnha8H9gDVbJj4FPkBjxtitMAFXUHyGYvwCRPwK8tDv3TNxnyP",
  "key25": "v3tYTAo8u3wD17UycLKszqnS1iunGsDfaLFr41zPdXotGC3AYWrhTW8cGdWXuHecjJBVFRU3HfWrwN73bmuNTcd",
  "key26": "JLzYwh3AvDJFLVKsps7yEsQGt6NcSVSLCDqQtptKczU74YNhvypGt4AwKg2zFxmVb1Pwb3KmHQ1mfC9WNSf19QZ",
  "key27": "2CiX1qz3sZEhGQihxQi1PGY2dEw7MnZMpskdardRS5oknUa8e6Z628ToFy4qs386gp9qaYZ6qbJNH2hxRgbuFPAJ",
  "key28": "YruHSyxF7GVfkxPFBafisjbkYMc4VmHRBzEfSVEKXyS58hBweGEEmRzYHf6U8qLfCZyen4ssdcYbe7feoUCzLD8",
  "key29": "3YD8qz2g5FBdWotr7PzWKU4oq4XuPcQUh2PPxFapYhaHaTBaRaXqXANHmHD1verfmCRiKwFNZQ7CgzNF7dzXWK9H",
  "key30": "3AyQwBtkfkwtVJW86peTh31h3zUK5GPsMF3rVxdQzkDUkEp6hpUBU3nxRMZzoRd6ggctUgY7oPvXDJm4Hg7PyqNy",
  "key31": "5nZcwbcdyNKhUxRhHBQLyfTXccaEjQzKGiN1iU3Z13rgHA64cKpoDajT3GwLkwjZKA6XfvGa6VJskEViEAVUGhr6",
  "key32": "4idJLEBT8BfUeyzDEhpBTEt7AJ45BuS5jR7vcmzupfzGPCQxuLZ3DLi6NikeU6BPSqntydpZmZsSvqXv5c7NZBZ9",
  "key33": "3ksaq3c9xxaSXFn6QGSxa7tyYFRSzpLHD3v92oWWKPGznGi9WMJx1drZTyjuRTSAtbXWJa9VMmYryWptugzCHfy",
  "key34": "kXT1BS7QWBB3NGN8TjHHmXYSeGg2isMbisyP4mc4cDp1YbfGxo13DEnJJfCUDv7Hg6r8F5AmfzYEQJSPCKvtmWn",
  "key35": "5cpBKQPa1KdBLAXQxF9Ak7CENQxR9RScnfMX62FrS4wJq1G1YBMss6v329MBKcdSzerrajnkMyV2cXF1YrscR7hT",
  "key36": "66DXZQX1JLztwf9sx5CNGTMTSjE4EHLrQGgABQ7gRPPbe443unXuZNj14yf4uoA4duDWMT7Pf6RxkTicWpDLYkeY",
  "key37": "2oSx1oUrAT1VuMMKxxTKtNEPwxiUo9qXd9pDgQ3rtPPX6yZkYD6jjxD3VHtzgkATmGaDCXANZsigzUggxhNiopmD",
  "key38": "w8R8Fz4s2rZ7w4KYZUazbJxN6J6TnAW49HmbpWL1ipn1a4Gtez5BokNAjCApdpjRsmB3RRueEgJQxbyhpL1XwGv"
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
