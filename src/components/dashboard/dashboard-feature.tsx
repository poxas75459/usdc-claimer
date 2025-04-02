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
    "RWHLFq9V8Pz9gyUqJStGYf5G3J1sxzLqMZZKgqTVsuVWmK1CvbgHubtGDj5NCh64atXoY6Kk5xooJ2C19XHSV5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWDz5YT2gixn5APV2iyzd9S3eKkZQhuou24pyNqwYWZm31JoyHttUEnKVCdNuMd7THM2tTw2ke78gvV1bTtXika",
  "key1": "5N5R9GZYDUZ7w4N2hKoChLDXYc91wJe7YXh2YqN5WbiQttP5jjyneZmbjTxBvRVnvjzwr5oPV4VgVCcoiJJjvX38",
  "key2": "5E6fobVjbpkQyRaoTJWeanYoeU1uyfzUFC7fjaZikHMeWchbiWYq1gm3BAmoH1dLHscpUdTJCSiapPDeUEsL5bTX",
  "key3": "3mpVrpTkJDqt4yctXRDRJY4AZ7MMMxtuWA99LEXcbLGa41xv6NfhyMmQTrS6pFZsKP7HtodJAjZPVPMeMTfu3VLd",
  "key4": "4chQJtSaqLtwQqVochSuxetUYKE5nzDjgZNLRtfXzpix8PDrXysqxT3SNP2RtaF2SESmPKTLCEVrcc6oTWDXNvKx",
  "key5": "52AL4Wgqcq8qhppLpCzY6yxnEaPB4dBCYdvyEg8QpTqvbZmC93eByvX7fDfwumQbgFM3izHo1HAYCC3z9crSp2au",
  "key6": "5kgD31jmLYNayvJAqb5yELF8h2kSfrnPzTQrT91Ymn1sLc8CS6cB7GVdKoyTGZJvuvjNuAo3SA9MUF8JZ8GA2yrw",
  "key7": "4kYepEkx46cPtrrhZmCUB1jp5xPR1twUmkZNohkVQdtTwXCiGa9cEPvmwdJfv8edhq5mcLmVq4sHwoMWDqDd8qpr",
  "key8": "5o8sMQ94Xb8PcNUyZFTRmemncuqdf5hydsiKgvKSVvbdmQWocbDJadjfeExKttzZPrPuHLUm5bEX4aKk1oWiL3bt",
  "key9": "vYEzxKUZyw9HkjAGkJsN2NYaTcgiMV1rwDk8jymCz3pwGWwJojZ4rfcoeEzdTyhxYfg52beKL8TzVMcJuDmKcng",
  "key10": "5aBmpRjMiaamyxkm5MkS6dab2Ry1UBD4SJ1UHTEz9UjfkFR3ciE2NhhMFpxzvuEJCvTdG7e9ZzRGK73Du8jjQwSP",
  "key11": "1ddv36gdjtAwUK5hspH66meNkUb5aHrWqMKjYdz7VdJJvXzq3zxAzx1wJjbLJDdM1Ea5qBYNsETBYrLrt2JqG41",
  "key12": "5d6E2hV7vJf1XScG8DMUk62AdVDecoWmtfFV9ZqpbJFw8dgfTUWzstEhGDqEFQ6gpTsHawCKw5uW8WuHVpqiUCrm",
  "key13": "3TwssmM13CfAWVirco2KNnuiHrCkHmc8Tr5eYYnDY5UFA8ySefaXu6V4hDWa6EVYrZdjA3WaJzZmem9vVymfEZPa",
  "key14": "3gNX6YJbFu1wb81TivWPvLBDeDuxnrXiCtrEwQ8k1SW5BukYtggpdxVus4vKUxUMAthAGFAf6FvGzQSPotJHLtVq",
  "key15": "42QKY3dTvuZUs9rk1F5vak25ts8meneSUGMCm1DHbyD3Ls3e3nrrqrhjhzKAHd9kpHcesT8JUm7gyBPtQQLZQ7VV",
  "key16": "2MCFChLRFbFydJon2Ein6wDAY1LPneRf1XHhmc9cMBkoUzWtSqBxo2Xy83ekeVzmkN57AggSoFe86DzjzvAoPF2t",
  "key17": "63cpTpD4iKFL1rCNmL4tC9HzyoMzmcCwYGCuGqHXM4TseBC8ee4ZkE8GVmpwdaweN6AcxhiZUtSWP69yxCmu7kHR",
  "key18": "2nJjCi1TD3dB61zNhgEepsZ61zqoxnBCgNcVED7LuBQXmjQzpH2k6gCbjyiZGSBBEHeyfahdv65cr9mTMTHus6bA",
  "key19": "rRhwvSo52XFLYjJNHWp5mLmfMmTTgGSrLYtmKarDP41AUZPL7cDCtLGdARA5doo4QE3UWvjUbutxL346ZH2pdKU",
  "key20": "3SbNCziUKtW5DR2UmcvyeBqffaC9kFWqXovSBrNJZkU1EUDbyiWsp9ahUmq8GEkF98ESPxghSJQ5XQK7tV6iFEY5",
  "key21": "4DDiqCEQJuVGXdzenUESKT7JUdoDvW5ceSHRK6kHn1L3UedtYS2baANv6sz5nobhPDoiEwRKHaEcnA2xDgpcaM4K",
  "key22": "7u6LnW1AapYKfeKfbHxcAHTE1zXiyshJ4BUgkHxcEYiwhbDGG8V9AZDxVp2EfDCALSzqF3vVmcGGSMVKRX7mrAU",
  "key23": "nGVaSZ1fxiWaVL2Qt9Xs73mFzaaUdyzpZBcB2MUGBp1W3Xsm9bks8BnLzfk1tXz2MXewgHHwkJ4LEiHc6FS9LPq",
  "key24": "2xf65bQAjTgrHqXGMSJfgPrgeJ2Ve4R4QYpXvo2UEE7qTJHRmT28vkfshhg7g3QSTAHYJTQwFfuP2x2QuLoSnXsz",
  "key25": "58qQBoG4yLQfDa3rTmQ7jAnVSyodNdwKsZgipfkqcLLZPXViCqLxA3htGScZW5nakr4nkUjZ2sJHFAaepoeapR48",
  "key26": "3nqGcU2JDp2uVfGTpW5WZYRoPCh1dNjNWsxdCVAZJ3BfjUczP8HWPr2qTvvEGk2sYMUNhD66tp6KEzAKjjdidQS6",
  "key27": "P61YoZNttsvkatWbqmKnhNEMP5Vs5q1BoH4BJoNZ4y8rEtAWoJc9oEQau3zdnusvPCQ7NHHDtRWWWToY4AxPQkt",
  "key28": "5hSmkgQwwFUoAVu9hZKHw2JKt1FCVZWKVLXwPtjSQh58QxyBBassA9tamwC3mHjEJ4HvR4fQ2PUYbVX1XQRpKW2e"
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
