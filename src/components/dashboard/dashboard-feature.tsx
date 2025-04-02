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
    "4QfspZWHamtu5wASwdJzr1WWuKoqyXxwjbnN9JQ62FT2obgwMAQgGirJyxdRdgWMdjt9LFG1NSkFMrGBjoA675uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ixbbUumfmTGVnf2tx96wdnNs2D9fycJrc7ZoBBbduZ2SMRkq9aiMNK6rbZbCHJumMTkibFsPhSUTY8qVKcGbEMb",
  "key1": "2GS85Ce1aAJuwTMrhcZ4ABN7FingbKM6ydKDoXfUJ82jRCG9hxnriGy6R7PyJtVhYhwi5nsxMFZ77xfTAUyJYTAS",
  "key2": "29BTUVQafHKTopMMdbYAmUjEm27FeqkU1jtLZN8hKtF6mo3j6WjkqhaAoCGsCdNNS4NJmU9LjYYieCUN2rDFAeYj",
  "key3": "oVEcdv4RCTDBhTzj7JRhXEe2r1WdcQXYah5rsouSga7n6vqdHTSwUnwo1zYAEVLoYK8ArJFGBbyVeHZ34n53ANS",
  "key4": "eqDZVA3NBsapy7PmTroNyyCNfvP72x1KzqMrbgp5hTCCiSLn4tPSEPnN9Jd1jHq2wvMXW6iJdM7WAQjvcGqkcd2",
  "key5": "5ig3VkZkTcnHqwDJ2BhsJKKSTyZoEPfcaK4Yn9nCZQKLgb97VWKqg6hNneqKar3RTdKF5PK7EpKjqxPpUxod1Hy8",
  "key6": "b8rSVNtUKBvv7yXzKkvBzR2vYZRFKAZwASJKDBJaChFA5dXiH7seiUhpDnZC484cuSVxWzXqZ9PQ48Jc3EPZDeU",
  "key7": "4iPxR2Qx53ZjAAu3rPduZ5uj9WgjUgxJVwPGqWcRXm7NEfkVT3VJXLrPjqSAjbXLGb1LxB96XBeh3cH4RZ7vBTN3",
  "key8": "62h5kn4BPtaRJVMHEmMkmuXsh2czF4t3MTn1bYVzeRZGhEqvX9PWdZvMoYovQ3kiFWDf2aeviW7MZM8FHx7nBnCo",
  "key9": "3g8CM5brkKMxfca1Am3UVmiTEjBHNQYNczvPT3VWwba4vffUpe5699RBgaVHcqdsCsrekegqKXAi8WUM1dc15Fno",
  "key10": "51aob63vfxAx67HH6S9xMne9JBVXqLpNtXsT544i4yZPyQvWxqNyKgASZrpUBX9Lep3yoCR5fh3qTo3MEqwv8a9M",
  "key11": "26BxGJCdRoYymbpwTovPnXwoBLe7MPmyN7Atfjn7MCtpkL5WhgnTZm1BxSCangvRTCrbAyAF2BobfYJHgeoqGg9M",
  "key12": "5AZMoVKk1G8Pfc9wdDpLoX1dmzbYtAGt6RA9cdkXN6NvkoSrEdCr8kX8fH8bBpThmjDLacBhsKPu38LVh9eGQkXd",
  "key13": "5C8obcYqnUXkqWHLwvbApVAQk3mRTWNWq7drQnBXpKgEfws5LZQvDGCVBn9cXtfSBd1wQX373tnB8hqKSc7HHSTQ",
  "key14": "p6fM9QfuKG3ahPkmwuLDDis1siVk5JxNWxUUExhnLsjvqDhpdA54V3K5U9gEirB8MLjsHjbBKQX9Bqgj2e2JyAc",
  "key15": "24nYPiKK73RdJYV6ctRxT27JY4KbAex3rPEiPQZLtwJ5QtqpYh1afuTT32gYfzbguuouf93h1ih1QvS4eskHwYPq",
  "key16": "3ZwjhbtHMF3s18xWnUtkWSfRd47SUBQBERW7dzcRfVXavW6xgch5BLsYMiWHeLeW5pnJbwsqeBjPUd2ppaTNXECs",
  "key17": "MjF9yhji1VaMQcuEdmP72uNztXuc56JGNCpFGFfnzHS8iXrRvzoHxvhuZnLxtkL5Tjog7AfehixJcr9j2ntpain",
  "key18": "5b5jt1CbiTnHSNPGVZ15A4QfdjEnv9DxhCTXFdbHXKcYBEx2DEBs3Uvcw8LD7EStcs6cUp1wjXMqNpfpoX6t1iDq",
  "key19": "3Ks4zRQeeFC1qnqpDb9V1bSp2dvM4QKUZwfmMXgA9uM4VeDDbj3Dj7zWguZhhGV4FZsCdWcVaJ8HgJyDK6KDU7Bw",
  "key20": "66TNBsTvXtea1YfQ1cqiieNhgS9Gq5iadGHBGu2i7esPYcauavGDTXsFVmsjdeNZUbP5hp7WWsXxyALnSZtsqJHX",
  "key21": "22gs8MPVvtGoYcgkmn9pafC8CzinwhxypiNLBc6Myzbq8aHfWz27rtmh9YgM3YkX7VdDsJe3jHgJPB6dQqD7HDKF",
  "key22": "4nNvmLbzYDAgG3R1C3dCyZc64Z7U1Jq9bW3DQ8uXeehxahC2w7MfgExVSRJhbx9FufDYhtvYotQqS7eXAhmeUEsf",
  "key23": "3dSLuo4uApnCpuyMKnEedpusNy4xGUvvqfvyGAoZzdXM4k4jq7xyN319i1NvLNtddmEwiDRt5kXMMjNAuSGBTcD",
  "key24": "5NtKsQPUGKhuqi2WedCgxmZ8nAohFwTioYEJojLKtQbwLTNXudtpZ18frD43ogbgKnQr7wTMNCPfBMphonQeLvch",
  "key25": "cPbkqZZ1UKh28xvPNwcHj3mEpCbrbwCYvv4NRzjHX9JgKqXUwbX2mzQpQdMVoa21Lo5X1RwHMP2NvwEpjtwunKA",
  "key26": "4qaaZVqBacXrAjLnYoeExzkJwJxY31PYQko6ZVwZsh6ahYkqRkvQDf1jSDD1p8PCtAoxcsCM5ppi9x1e9H8TEp4T",
  "key27": "3pSGdq1ac5iEvHYiUE3ASN49EBLQVcd5sCwNQ6p7nGkGvG8YFELRYCrkaRBYLYdbwUhVdawWXc1Hz86Djs73Ur6q",
  "key28": "5EgShBXghmANU5N4UNohoFhCDM9x7yxa5ZbkX345Lh6qjoWBreYBaduGZTy5dqLaLi8FcMdukzJmNMvpMXiA9R5u",
  "key29": "33beYdM6chD9vsFMRxXvvoQvDK4R7P2V9TYqSrR6TBEw2GtQFxNZEFTZhDGtQmtmayqQNvRCff4ZRLGtSDepaB5r",
  "key30": "5R6XCqz8PLqauDoBFPe1R8JpBP3qVQBQ28CTDccu6MSaUVQRJA1SfRuUD1DEwbosAhdnTB9yjJbD6EWmNYCLGfDL"
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
