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
    "3a564zcVj34KfRjH3gonB2CSobx7VgEW7cdxkvub5SVxVHALL3b29z2y1gFzBumexNfs1UpF7MJL6aKZspiCNYZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pyJZtbKfLx5qZFPfbw7D2sbsX4GNfh7z6SpNuKswWyEJbr1a3vP5f2unA8XMhVEq2YeYAAR9QUptDezNvcCUYng",
  "key1": "5tzMoGL5qpPx8t7YGMsPGGHadXpCzVZxhtyfXMJvQXRtM5bWPLGZLSx2SCMHsxNTNvxmaoq7LbRnGWuFr1z3hbFA",
  "key2": "25DFdhPjGZ3bTecWKnPZDb8SQRaeCjGgqWPijvBNBeERapPX1cUcrb3noKn3Rx7PP9doNanvCyfJ4AHdX37A87AR",
  "key3": "3SiVhxQaztk5Tg8yctWsKp7wf2MpM4oFqDi9SZbKqM163zr92Ym3tS7tse7k47CyBvMtb1SiFmhSbsVuneFqJByQ",
  "key4": "waHKsesU1Xga7Z9sTiUwvuGj2S5rSHsDPZKbJSHNDmairmpSpFC5SQnoZxvo9MDvMNBNCTwkPuXCeRAZBcNsmuX",
  "key5": "GngnvGwApDjFdqR3g3HMscg8MUizZ8YYWmSH4d6o4V7iPukQCi26rZxnVa3eB7acZugyptpNngsMReYzbzpQbxt",
  "key6": "3ZpqAgsYBt9zkPemNbbtS2MuBKH9c6u7BGBfjDb5rqFk8c5W7ZwFxPByUYQQCuYiFTL4aMHC9Prxh4r3USYtTLsT",
  "key7": "1AmBqegcr6sHHZHvSWC7MnJNA2tkVysyMFgut6fM3BLpaKMpzQAmYxALxcv8J4zWZgzUQYdwMA2AFsdnLtGiyzk",
  "key8": "2aM3yZX4tn5cSRMoSXEyq41ppHVn7pUcBWe8SiQrZMxXguBqaC9RuNdtvM7QqXUmD1JGyGBwfKrjF1DCuH2Sv2Vo",
  "key9": "4QHg4eCuG9xSZWE39j2tV63RjQ7s5JEeRJ5hwhZsD994pi771dsr9J6sAG5iiwgLXAi2wn214Hkg8C1ET3FTXh8Y",
  "key10": "5FDiSPBigB6eGYHTBhgor84XJRVqpDr86nRcfkUwTqbiYhqJUN4gJfJAn9L5fC9ahSJLihYZE6D8MZmMNVfThp2z",
  "key11": "Uw6yJk54DPzyuSv1t3Q2P4ByGtCyo4FWQZSbapxV4MXvRXCFuYgaRut8ZdSb1fKdxXoc2nqHRXdUnq9TjKWi766",
  "key12": "QRBYKNfaGtjVpxt78eRgZ1qQhJVJ2pfd4PBFSYfderzA7AXSoYfCNKyDpsMRCEk3DB5abDs5CLzWiN3eJUh3jHy",
  "key13": "3exwt3eP5F84RpXye3rpipSu6eaeutGerpouCMtGhyJkkQifu51p8dpVmKmPbfGjcU5YixTf8EuEGxGpWqNywc85",
  "key14": "5jXvjAwJJ9njiUrDJzVX4Qh4dWwnwMFAWYeMrjzb9hMJy1m3pN32JhSizmFNh1fWi38tj5aYB4ZhuzktNaLLFRvS",
  "key15": "2E3YzDQeaj2pXRXAPqhjkWq84HVHa4YJyb42Mrai4LSCMGd3kpP6TALJQV2E8Jf12rMgp6z1pFVypoWTyLhaucP8",
  "key16": "3Xg2QVM1QcjRQUT8XnBb9YtbZyCTBFhHVK5BxJx8WVyjvDa1t4XsyrKQH6pm6jhm3ntCPdNDSZ8RPsnj7yahHtW9",
  "key17": "2E2i3pPY17QRgee9rRcg5Rc3W2qqMG3qHYsE1szFFKaxq5Bk5j1XScHbpoeKJTfzmsft1VQfQ4Pxo9orq2KSmdKQ",
  "key18": "3uJNDCq5BaQ9P8Gu1QuEx3fqFTBxSSqhd8hcScXG3zYh7PT3rUKXnKySPFb8RUHczZaVwb8yhwBCnzE2PDeWBxNG",
  "key19": "2fk5HR9dVjtLNxkqHVFYtyHzAZWfsyB8e8rb12Y66fco5Qbhjxi8cgtMNAUhy5S9PWEKj9Bh2Ls95EtMD187dzr2",
  "key20": "Ux77ZLsUgjFCxatDSb9o6MP8BKkQak7hJY1XUHcVD6jpJm7LXU5aNeapXTkAUxhm4bzmPeWKDSEBmR59Cr7G7fC",
  "key21": "3VueJHUqHgbyx6r12ebccsroY7Sqv7uTKYvTfRCCFGu9tSDDD8M2vg6mJG1MFB31ythvnjXbKYPoHm6yE2cMkQnj",
  "key22": "2Ks5hdsBp2gB8BQ1jZstfYg7BhA1WokQNcuRdfcJDGtjReVrEJ3XihgHApmGkK6Lmy8NxV9wXxRrqMdBuPczTVEY",
  "key23": "4CwYaRdCviAJhRUBHLPPa6g15DkJmoV7jit9g29YqFY9pGWvEy2W6SzGpy9p1uJs6r9dkKUsSGPLvhpatw9auFGv",
  "key24": "3mHBX8imvrk5VDqne5UomLabnSpdnBQpQwUX4yHoRbDiNFCax9Ttp7dmyhFaqSxMqm5ShUrNZrtzh2s2nUdnZviX",
  "key25": "391jVoHqs5mLX9bH4CSjuxifStrYbhAYFLkUdkky6nXGyncyvkhazj5uGNaFne96vJHVm8B8jQntXyYd6WJsgMik",
  "key26": "4jLzN87FuKmLbsFd4mW6de8iDW8vcsqc9casv34EhouKGu1N1rFyHdnGLeQVgXxbt8odhFkf1fRcp7RdMMivsJu",
  "key27": "5sBT2LJmr7FaHf91CdvwPi5KXWnMwq39UE6TGiquYTr3o43E4eRKmCynqLptT1QXG4N38grDVDn2CbMSjLHmnTsC",
  "key28": "35sES2o1UZMvxVeU12UnMAKg3KdRfFkEgkBANVE1KE3W2qJxspp7e2pD5WVksvChcEZ8Tr5K1gBkPdjGWVtcANpX",
  "key29": "4KREC3rGq99muVwVGBhdhJwe2iZDNzo7EwHFfYb8ApkyDx8WFVvDvJ6chwFeRFUDyB561jGVFvzrrJhmFyWFhrDY"
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
