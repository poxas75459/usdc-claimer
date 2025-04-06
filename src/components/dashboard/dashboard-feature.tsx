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
    "43ZN9epTa6aKUuruJePxNvfLMkqiBDJjzcSC7BPTxvcBrFXJSV2HYbQkzVFwXDEcyifXy6CgEFpNAAhPvxnUmmaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248M2KP8ppVdpRHTfHPXmzJ1nyuoZBodFewQ2rhk4HHbpQHJzr2w1KMSeZ7m7ZStpwwQUX5D4jQB8umjD8ZfpC4H",
  "key1": "4UeXjJZ3KHZRPGstZTkCc8M8NtEYqGcnxDtY8ea4G3Ly1aXm56Vq81usumaEwrsPjCMNyJa9YBZkztGYKLwHhdC9",
  "key2": "2Rs1mB6H5bAn6Ev1WLTf3xTgUgLkcDWWqAeBYgmzBU3kqAzGMggdYYr1uYBGu9RTwJVgMq3t6iEiejnik9UKRBFd",
  "key3": "5xMXHk1394fTMvhEMxok32MJaFbjquGMRCPXYBFabrypBgwFvLfoREXLmhHVKoyuaT1B8gaMWC1hBuzinQpU6My8",
  "key4": "36EDJz7TYei5kEKkRm4GHXYnJ9u2556jftnRnr8Ma3ShcGdtkPUpUUKXHR3L9MAUaQkaNytMyCfn3wpWmFk8iqSu",
  "key5": "5x7fBuBi3aNN11DuMjhV9ersirZS5Z1BMu18sEg9KYaDnDzuvH4mWSU7DNvVAxgG8BBRtsJ2PS3q4nfZju1LFqbN",
  "key6": "38aKtYgMYEJTxQaxEGivA6cRGB2LLejwPHSpT3k2Xy8D5vPiH7ne5izfS4YCCYqPjKwCWpw8ZoXUrL5ouPJ6PX5L",
  "key7": "5ZjMsQMe8N2DYU8aG2xpN9DZaZGGBVuzbKCjpQF1hJjsg8HrH15cCkarutmSCd3aeaSyEc6CxmqynPNzqJTD44gn",
  "key8": "Kftx9bsmcrzSqUyav44WS1yr2gAf1wWz2WFTFY7HAwptf58EDb7evtMpWj4W5ByFnYhuo6GxxPVtghtRpBLMY4Q",
  "key9": "3TZQ9F29mm4CVUzAbQFmcmeAhE1dVwMTTwb8g5v76aNYJhoXE8LKNB3LyuNjy7DLmX7UXvKKfh5bQPHaHwgGriVM",
  "key10": "5Dx9Gn9k5b5M5H3H8YBCBVoxDWjAHMuwNTo6GQ13reZ8HRsNCc7dWF3ibh4LDv7Kk5oDKHJbEtULGZ12ZU1Fsmq5",
  "key11": "FAHhGb7GDz6pABqSERBQTF56iLaEGMfRZWSH4ssRdqTi1Za6LA7rXzfg4p1XFdhdQMpuncnzWfy62JwwBRgkR3L",
  "key12": "4rY3fjVeSidbqkpptpqmq1anEALSQ4gx4Hi7qZcLvnQtFa6BipPSQ8VXieb4YfgCNfG8idvhyLof8KrruY9JC2Ye",
  "key13": "4Kk6jW5mGi8k4aCDmrCH8xm8dQdrbhGh4hgq8yTCy9GJ2omvBkVpFAhxQazbKD6VsgkPahwx9ZC81aTEU9sBv6WL",
  "key14": "67CVa2Qid8weB7y1k2JpFVaRgAd363ZPmE9svYtzJbcqzMm2LLgr9Rkji3R9XaanzQ9se937wiKirn8okFk4KBMZ",
  "key15": "4DfLtL4UMMQchc8Bvg1znLH9ZqezSsaHWAMSusAcxJtU9R5wFS1sHHBJysB4i1SHEGejE62QLzWxSAqUkdWdbutN",
  "key16": "26M48yGFCn2nSGhs5mLRCLB5DLfGTD3Y7t4qi75niSbXtjSX3VpXS8U6DqNdbYo8us4th3hN8a5WXxsRSTyCbj5u",
  "key17": "4Q1AvsLZ4qncLfhdk3X1RfmBUPvMjrMgJmyuba8jLfwBLPa4h2XSWhhu1JByQmCedAza8eifTYEDjmjLRpSZeSWA",
  "key18": "4Lnrq3oE6BDkCihL5NpWpkZqeSJyPJALe6nfiqXUG6CSbxCJeRADVM4rheS8mJuhaYDSnnCbFTKd5ppwrrvoqGk1",
  "key19": "3s9Aeg1pbGfXocxDdmhWo7UVrMGzHYPuobkRCtuaqaYLATv3iaqo3xormZ2ZkogCxUBfk1YYQX13FRZCvsME4YnR",
  "key20": "49HKBXKwLiGnFVshzErhe8uW8ZDmFBKrRREuB1e8rJr8mGarYmAzRNAEqHCFXmVUg3b3uXJZ8D1QcaJwv5MfzAMb",
  "key21": "3dLadjS8jfVgRvFmHPD53tcKxXVon6r2Lyj4u4WLY9BVsenHgSbKhhbmzpJLj2EAvqiVATF69S6gAh3q4QmdPzQP",
  "key22": "3HieCiNCevSRaEgG2WSHSmptxRhmhh3o8LmHPdeXPj2YftqGg1sRrLRAhQYdPbb91uPeKtQbff3DstYtKuXfZSQG",
  "key23": "4EdaD6VAkAFa4uVz1gtMTaRr8wL5hyyEC8vGKTsAkbKM1St4rkcU2rCq5y4DUimPWuoeEZBNCKoKVnMx2aoGYnBB",
  "key24": "fYvmHgAKDn1skvqDesPbYrWancyxjtDGTN8Kv7YxH6LVgdkGX92iYycGf8z1afvaeQT3wudzPtYDmdx3nzBbaJy",
  "key25": "3pudiecfDHQvd6Yv8EEjALBnDjH3HmLMHFe7oiUw9rKym3W1MwSbsS4ddQSAhZvJDjbimAWMCNdQQZXRCQg7EonU",
  "key26": "5dFghXUEA3HuTYNqEkWSmPpMQuxCp871m6G4oyTgHLcJGP8RaxPPHxq7bD9fD6juVrrLJ52DoXdjJRGMTZkd7rWQ",
  "key27": "2xvoB4197Aw2oqX8udJqEptY32GxYJri7EjvkqBjAuSBjBnZX3mcn2N19y7e8FPuhN6v463qYdkJFbcQ2ff44Wi8",
  "key28": "4ugoi4VDrxiCdqXT175TureyuMLVoBMGsWAxtXrX4ZQfPicBPefYLeZxkTd6pCo9KKsWGUWXB7sUtJznhr1r6cGo",
  "key29": "6a6vb2poHvfy1zDAQ5Y1FuCvcBr9uB3x7UQLR4TeSUou1fuJSa2HZYdZXXBQbfE2beGY7HxVN53pDbf7Y2BYHgR",
  "key30": "ybpbubscM8sScYpaKim168K8EHsZBFSUPsx4gHH7xjW1sGuJJEYUCdy8GQvgXVcbwMkauQPDZVtyhjrHLBXKuuY",
  "key31": "4MAhu6mbDWo18z7y8iFc9af89jU8hX6xr7kE2g3U27qKct896e5xaykjh5Ptp7JXRxe3zhps7gD3J3aEmcGTWZPm",
  "key32": "2UjcaVxnLYmPVPhhbx82ShhQMH1hhmtwpQW49thoRuMn4rcQDeQ5KJFMf6Y5GJGhvCbgUSaSQg3K8i3VqMdte7Q2",
  "key33": "5nF7e6DMvUwEA5x5gBXyV1wo2jJXjV6TbmHDCaXLoiFx1bLEjZFrLbcCxo555w5BULFYkLpbXVfxv7hGoGT2jQsX",
  "key34": "2cDPU8pukMk7CJyxCCezegUsSGWHrZNH5HuuZLnSRuAHKoHTp246ZPhheryGRwxzxTeb6zmWgmwvXXWXRe4jcZAT",
  "key35": "4Ke5tXskj8w6HoWjhJe8tzebtczNuk9gD8uYu2sRrfaKXWA5BTYKypqubTc6U7v9y12b7tcBULKEBVg4GU1aFWfd",
  "key36": "4pqJtruRJXiXo4rShnwjgK1oR3GsazTocd8LLzVGSyMMXrzumUx4UiUYb6wPgpfjAdkW8C9sY28SgRKv3UPRrnzj",
  "key37": "4GevUjiTaw2QYo6ZTsTGj6kXdnqZ9darqUcdRigufY82pKixJu6VFccxtLKjMczd7oa6NfvzX5U6HFDKVjHHjQQR"
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
