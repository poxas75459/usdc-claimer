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
    "2iFoe6KPR86HfXSHPrVBTkvDsxuYmX6rw9yvEU7zAQ16LSQUscfW5ENK5undSK4bMBVSX8G4z4p3NyrY7cibJRPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdoYukmjvNGJKF8vHo62LJaw94E259BXSqEEnRa2P4cucdxwymBtBDDwek1XpigvYyQXuur3hNu1HsnMEPucWac",
  "key1": "2po5tDXLSW63tLo65mDvFuuPH11aYWEmiVdNq2qw1zxCohhaZehr1WK2CuGcaVf1Q7rqm49bDh8PQDNVKtq1QppR",
  "key2": "55K5VLRVu4y3SdgwkHE2cHZrd7BmbMbQ5qyRcfvABcCnPu7oNYXon31vm51drDTg5DkAdsxNhuJ5oJRM16igAFDp",
  "key3": "5UD25ZrjNnCrK8SGKkNyc4fPvjRfBk3B5f95siPB66J5k6KUrwgqNAycQ9uprgskr126m3GmdeHAssgjYDtt5oab",
  "key4": "ySRXrdy5CMi1RcEe8ZQCJTucDRhrjdhqZ7LqYDuK6gzxg3xZo8eNMF7JfzQS4Xrjpxqr9PXhXsjS671kC9wwyqN",
  "key5": "rK9ZaDciXWCjpjJhRHH986kRDvGrpLurgUKxLaV18PQDLXV8saozaG2xn1wL33tw37f8vA89ZqqC9yCRmcxHwiX",
  "key6": "4uakTLoMmVArBsWE7RWcynMdbQD2AJh6uAfXmZS9DPGzbNnGhtpDXcRXfYuqsKBs9HhZNAXhoRvBAt9DuHzQsFUA",
  "key7": "5fn2683Je86xs5R6fAizAsBCSv1TWc9WJZaSkce772SZBwT6PsttfkdeQoXh59bTb8BsLJHVfSzsauCrZqLc3ps1",
  "key8": "3vyykf22DiHAH2prRiDJyyBXfcrpHrqXdVyRQdVUkJqv4E3Lw3CkKimBbSVjgBkKQ22YUNGwfF9aDhmrqrvNHCTm",
  "key9": "3LDVG7RStXK5LnB6Wda6dyyK1U9X8E3AtFT1VxnX4MVaeyye9YRXGwEsjQxxC7aVw565VUeFoZBbXtYbeGRha9CQ",
  "key10": "2h6auX8XfYXLgnujmL8L7Qdm2NUZD1SijHL6tgHwmpgiCGLNPhN41f6ne8XEPkPLkesEKUg2YnGmG9NoBSwSDBJH",
  "key11": "4xePaQbB4oTUEj9n8N9wiFBkdQFQZL557FzegzA79DBCd2JPuewtwLUs327svVfkDhnA2wZ2x7AoxrvVSv36WGf5",
  "key12": "41MXATNdZkG9vZKUY9ZHMyZqBnLMGjob7tnHzkBEzZFhwVKoRF6spxQd4G8ekzNMaZU1b5wV9yTx1ZUkTNshRM9c",
  "key13": "3RWf6VGBrhyTVESdUK4PSVV9zJgFhvuh3XKNbnjqfCphiHrWiMmGHBkHXz4jyMGE2tqoHYBFnLCrYZbFMgzNX3y1",
  "key14": "2vUeicDxVTELERY5HpPf2DFr5nVGyDw19R6pBA45949ivwLyfCi1vWChXnzhzZ9zVQWjQe74yW2xaBV9Tirimuxb",
  "key15": "fbmfy7WdWZhjmCjGoCZjUfC12FfmgSa4qw6MuNQJgLgRFnfzFjrKYnxpkfVgpcKTvw61P16qXa9F8Z73scVF4wf",
  "key16": "4sSPzXsFopRoTfo4h7aZkNZ8vtxkuUbXrtwVtm1tDqcv3JUxjPsf2fGfSfCTYWP8aoFuLJzttKz3srQi9joM9YkX",
  "key17": "6wFMCwGcUACu62KUz6xsxSMQzt3Fge2mzUQ8eApJ7ALL4PwSBnj2nRHcZHSGA7Xnvquapcy5B9SZd3swP3EeEFJ",
  "key18": "3sxRnA2CeaaxdrzKcu4MaDCrqkEMggxHqacVsW5PttuEAB3qjWt9GiABpWhZdGgDtScUSRQr9kuwdeQMmox13obD",
  "key19": "3ZJ4eG8564z2RF62TvLwHnUeRRYP7Gc3cGWLiSv45q41Pvu6L7a5Ukce6e23xZCGSHDRR9o2B2B1V3HAsCyezhzL",
  "key20": "4LzKzog67H24quaAdhSDpoSaBDNDXa2y4LMCfR7zntvAsstY1ooHDBZCJZAYjne9jSyjbSJ6ZAAAhouMrqoqBWEx",
  "key21": "3esP84tnKe8cmFngqEVS23uLVS5r26s3VxmxDjzcLxMqpNAL8NwNXsXursq2jpHS8NXeZsnnYPEw8kZerYcyq2qH",
  "key22": "3v8XrYiGMKsYMhQSwJYRDVNDWMLG6qybf9gJw9oE7qky2goqbbYH4mehjSTHK1KBbu4V8MCVaTYUzdSYRYSBsa4W",
  "key23": "rGjWVvdDS5wnqzbT9QY4x3EUkHMFB1APXNBPv7kDQq9sU1pcptkEFyAYPsE1oVnAonGHSQYS7HrFtChLakwf59K",
  "key24": "vBmAZ2cp5rA6aBabGEHfj7hCPaWie4sQL6LN7pfqaBrkR4oy7kZwN2Rfze3gb3KfV6UrvPgE4uLJvDHxbYAssCK",
  "key25": "4KPjjU5A2cme4Fy3dSN9sJcWPo91z69aYbYAoMeoDNLcR1RFGGiGRrmTLmj2dFDrLcYVMqB3WgxS1S9CEpLzmQ1v",
  "key26": "3gAD9vReua37Ue38LnovuT1eTq3gC1vV7NTyVaCFcpifKgdK9s46zBDbPaaMvKmASosst7X4qsyXhDkjEV3p3bXb",
  "key27": "4VEfP5cJPHUVQeAEfkzLxNyXByQg1aLyX9ccdw9ynj9cnGwuR7S2WvxRV9Z64WzQZCnchGtgvxBvk1SLe8RANVdg"
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
