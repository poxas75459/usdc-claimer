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
    "5WqrDb7mswRcecmXjhMJaLMCjS8hjCpGiR6htCBejwERtgPySPa57W9H7EejRnY9RLSDWERDmXF3pXU9CFJVB1R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437ZGWRmjd4oXLknFjKTGEEZ3NW8tBwHjBgzuEKmzfwKrEKW2YSCGCYqXcQRX72YHdh8LbXh69inbhF68QkstBBo",
  "key1": "4Ey3Vv1w58DGtpCZ33RuF2AfYtpZ96S6BZhMvMWmLk1ptoYEWTtbgBc9rFps2bMtfY48nsmjZFAkxEJKocFd3Bc6",
  "key2": "2qFATpbMonvq23t2CuRXfmCPgrAte8rEbWoPLJqjcpHVyA9D27HgTAVesc8N8z1DBD91pHFgipBFpSK9vPwnQ2SS",
  "key3": "3HF8grdRxyoBWxLqEWmHdmVCMyMFQD2fLd5SviqvJ9xK6Kyv1rrh3sHVQGAyS2MepLXRJRzdhkWR1dinLAp9Ljow",
  "key4": "2cisG1v7ftKb4RAVMoYQ4kCN6GPZjbjnWhAum5JJce9G4hVvRH7HFZQVWre1T6QDZXo3cVndvtcUnos9FKidKdwG",
  "key5": "2cES4Y6boQqu8fvVtFwPsiMX5fgEdJG2Yxjd3CtqEAuxDvrCVEAcn48HHTt5h95kSPbzsEh32DstCzJECALfZVZy",
  "key6": "2U2UngqR2BzpttoURvE8wgPBUwzWnTgZh4KKL7TUQ4hKUAC6yPwmEmL1iEiBmALQMukiP2y9rUaqEYfyLJyJCHwC",
  "key7": "4A39smRj7tfNFVnLRy8Phcw5DnihoGuzTCVQA3aJiSRNYbMpeNBMRPgjj9DRLDn2SwZ9ncdzBXJ9xiU4HRiwv93",
  "key8": "5DrfReoRdGo5js9b4t3eV37y1Phx2rZQ5xDprtusAjg23DECC31QXepH1XxJa6nhk3rKwSTu7jajxmV75uBkRWn1",
  "key9": "ZvqZ4eSDqJTKWoQ8HFEPngQYxcAqTg7GJmr9eJaZ1fpJXgPpw3eTeK9pSD8zAZiCo2S8sorRFsAqfctomab7NuG",
  "key10": "5gQe7Y4Y7no7Zx7qbjAZ8EFDcA9UUkAQiZUbe7mkNFibvdoGNGdW18gLeDGtc4E3Y7emMDPcT27ucWuNHu7q1ohT",
  "key11": "2E9hQzp5d7Z6KL2kwaFbCb6vjd2ymZYGWo7ALvori7zeBTArg1SF2raDhksLEguHWTmLFoRPZwxneKvmaaweD5bQ",
  "key12": "4LkXvb54svUo24yh4GpKDj5zYMXJVk8ozMa3QgBkqYbt2Tqz4YVyiZUN8inaujougLozWQs1fqCznhdHoqGH3UWb",
  "key13": "M2aePr9Nw2QQWTrC4pZ8aTHEvQhAuFqej2VprMH7G6ah37iNkF2EE4H5WucZd4HpkskRu1b57EpWJmFEi7yMPm6",
  "key14": "3H2jfZA2tCFn4A88rZjMNn9VvBXAd586UJNP5pEocxqs9K31pUBU9NMHAjPhv22dqQWagokDSyoafuSZHjVi6B1M",
  "key15": "5S2r76xFj7KRSkepxwREKtCrFwudvSW2ENKbrjf6baG7fN9eKFtjs1hyFqryDmTqhCZ28oijqscBYWFWgiaPbp25",
  "key16": "4h11dpqohRGfJgNAAk2cdHKJ9p4uwDbb8RVGf4fduK3s8FRMWWYBjGFrSK2ABC9HN863ixHkWGVzQiqgYEZyyFxw",
  "key17": "21MZS8uhHadmMdjzLXe587PNjgoLUKCbPGL75tLdvgeBGjyKGUGCrt3ghJn2DetnaQfLNNrzbq6hPDNDCdkN8Jns",
  "key18": "46fLgTfFLgESPAPz6cLCLRX7A81QaRx67GHxhMBKWH8z3aXEhrr25EVZMKFrkrBAs6msCySD2F5USx7NtJmJUQU8",
  "key19": "3MEVHeUTmFTK6FHC7QDnwZXCKXhaYb8zg4xdRdiSsdywUi4ikVYqXMjnjpDrF3JVG6SWWEG7yLKix352LVyjmcPX",
  "key20": "5eVXUZiNWGduJHVDGuPoSpioX3PL7GYJZKUDXbNDbTDY8SjoUWvNdVgy38aciBWCGmsEkMv5bSShEViRroP6qgKe",
  "key21": "NKCUfSmYM76uTwudbPQ8LrJqq4bFWBRnFgrgEfFXonUKBur8n26ec4UG67ZWtVnfZAWE1yVNiLu742eQvcCrsUL",
  "key22": "NPWwy9d4MnL98s4ftz9uVQBFCFZWMzKX1nUEV9bkDyxwkfMNr4CAouaVPv5Lqgc2iqYhosnkz9VSdzu5rPQazLV",
  "key23": "5TtwBzdMsRJiuSvAU5EXnbfJAc6FZVz2LqgVphDyDShDXUBSsoBkLSyCUND4VNDwRGxa6yZ8DPczPzV9ZQa2N3T3",
  "key24": "4J3X3y5vph8KJfymtQ1DcjZLgx4WEdWQ9LxnSrzeSc51Rgt8D1qpKEMnBx1xWYuixoMcehpkouF23dnrQsVGzLL9",
  "key25": "62V62zjnhLUd5UKqxPWeK3CX1BNtED1mU3sjw8dq5YAsEvaUJ43Z5BNqsqy3Cxzt3rPLtTKcb9LBz3ztsQ7dNVCp",
  "key26": "UGcjgkdsGctCTsS3wrUYpGxNmk3iNt8Q32kCyYV2v7cSkmqkxE8UiQFB2ERWBu5vsjTSuzhkE6pqkwAJ74Nu64s",
  "key27": "3vmzauMRvsU1KZs8MCuaGTmJsTJi74J1K1G6mZ9sfKvsmwK1tj4XUeiLVy5w9XAXL6UNNG7FkD4rg1uZBJh3VFP",
  "key28": "58kTx7sbck4zGBJeW4n5LpgPkr6Lty2SSAuGVvEGHf4MR1qU2tqUjCWVWm6KUEVZ3EZwnPUv6KjW615G2F9F4zRC",
  "key29": "5GEaVbxCivHxnFt77XcG5uzkvvesnfuh6CeZW88zQ28ajbfiX3PajdqejFtGj328zeFoKn8UjFkUkUN4vLBwnHWD",
  "key30": "5BcThFKQSSU4EoVDEH5vrzsBsyygSMrEzmVuKzKnsC5Q1S1uE3HbuRctQcnReNsa6dttSf93Lz6XDbQhU1R7LeuC",
  "key31": "D3rPWDWK27umEq2NyGDmUfWNNKVsoi5j9593YT5GxjVtq3EvXP4huGgB1CP6fwCJMYYmQQ64mn5tNcxLfrhSjLB",
  "key32": "5o1WvreNX2LBnpmmT7AWUcLEH8wYkCAQ6dcRLNfHXm7M9YPHheeZ87VYT8wvUmcQ4VJqPjCqbpvQJpchizV3EdMs",
  "key33": "2f5ngmFAYysKqMAbW5XprAMbKoXWmnSdFNRirxcHQgLZFkjVe64LGjTzd6QBGpT6W77EBGSaCavfYJ6ubuZquy13",
  "key34": "2AEDpgguPJsn8YSpsSyEnDXpej492a2M9xVd3k6VjKR9NYWNPHcfJ4Aw183gQJuk35ciwe4tU2yddpFRkHW7KSmF",
  "key35": "NK1PQGtAyPRxpnqJ55PvtMQiBWHSsgLAJC7z3s1BVJ5gMuXaPWhGN9Rs3eE3RYRiZmg5uU8NRQRBN1Eyj95hdr2",
  "key36": "TJdhFX6UT8gfFDGjrEmtQiA8grRiN788cDLKHTc33SXjQgKJuFjju59haLndRTbxSaMbzkp4bkgWBeRzDAPqtyL",
  "key37": "34JCGN9YVgvyUJt4YCN12JRRbgY3DvXDSyNaEzX9AC7DTFzUsEHpWkr7eTDddDSf7BTd4jxCGoEEhYu7AUUrFHhZ",
  "key38": "4wGXbpUWiEczC8aZUooFCAchgLumF1FHM1a2p5ueUHEDiJGikzUwioAKdKZfqNPZy1rYusYPCxRoPYASVinxKp9d",
  "key39": "3Wssx4teRHBdAqLf51qLV7aH6LJ2QKHJkYLzFwCgZ5Awa8YYvV2rSafkbtMRizadjGY2zDWMWVYCKdbNX9vrHmQg"
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
