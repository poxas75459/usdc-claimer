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
    "kav1fNZmcokC2nuYbNvkBKTNpD6wDicCoXAh9q2RGA62231bsu3W8ENvyALQXxbR6CHff4n9KKhUE9TpicUcjd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWAbGZMuUtFetjUcaaqQPCiVmdVhUFGrT5RrM8bsp9EUJmgqf639zuUmyMUiaRxWbUPAU8nqBPkSoHjprD4kQSW",
  "key1": "2JdSaK3bHZC3mAwd5voE5oqPT3xPn8d56tYKyUPjkZ7YqT79dDsyC6y56pCSRAyzR7RFs9dnwVEXidRJs9ixagSS",
  "key2": "4FA57kjguL22wzZkC26NgAaFpahS2gjtLQ2ztkNGXtxVkinAbSY5ke7h23FMpcBHM4rcTAy9Wq3T2nSZA4aVRFQ8",
  "key3": "zrQYhkxKwZNhpEeDLENsZxUPfB7vEhCQ5n5Wd9VNSiZN3ZnLNMpamaHS7xfXGmDdg745QdHJUu8a64nP5MYzYiS",
  "key4": "4pTTvBAstWrn1emk7UHJS9M81BuY7byPoYNdKfjxDqVYtGK5uL8z7D8mjzmVep5nFtBH9duf6heQ9tJqJ3oBeURt",
  "key5": "3ZrBU9ebftTCNS554uSKVXaKiPmWSyH2We7HRTjK9EQuqWyf2RJgef3p5ZMGQUXbdHtcbZG3yzE9mtH6H6uVoJyM",
  "key6": "2i1kdKx48w19xL9oLbs6tSkYK2ptSQWttHkxaHqQAGHRi8KZbwmr5eUmuN8oaaRKj9ASRgPFFMye8WjwuRMgLqwg",
  "key7": "vVV6ixNoUwFrNiDRPfmTrJZrTKeVYyjwr1e82bTTcjsPQv8L7gt7J7vBtsXYvVk8s64Uy7ZZbdNqY2ouJLVFNhX",
  "key8": "3CreaP9ddsFLD7DmmtZQ7vhShqg9Vrb4LNsbMgpw9ND49dDTsfooD3vtdcGWDKH34aZAcZ3NnYwJNDBPik1t3iVY",
  "key9": "3RsgLWciLgD5D74Cj4xReErQCzj3SVuWijMoFf6NhWK6Dq1mprxu7aXGQcWevjt2HsvJ8mcdRKPHQDQpm8shWRXe",
  "key10": "4A2YvdP3yXmgiAMy1opaMEynThHX1ARtxXLbrTm287BLoAHZzLGKbdTwDqRGP52n9BfBNAuLeo86bC7RsjAyEhV6",
  "key11": "2NGkGcG6mAJDbXukbbfDzXtFPkUquNyBku7HV6SrodLY8zG3iZbjcH4zBWgaQQfxb2roTHzbVrtRCaw6PBGWpNke",
  "key12": "4X311umKmU3a24EPfQTdDxMmd4iCqPd9CF5WBQMWgg4uhXcoCkWm2LRmdmcP3BNgENjmSN9X8XKiuRaWTZ16gqnY",
  "key13": "QTi9LnZ1ZYqKRJpbmkiHEPUyFucsG2uaCsXK2gjuDfxLS35EQTupQGNPyPpDSRboY6SW6dcD8eD7cvzuBdB2zek",
  "key14": "4mc7LRjAQh4CqkfXQen5BQfb75HjwhhazXnTnkAhjnLtUExR73eTvQhKuJcdnJABxbUzcZNC3kXBCNiSGm4heJxW",
  "key15": "496fDTGKhGwK5g4Rj2ST44Aawi7G1pvq6bAC3HYnYMvsmD3mwCncvDiHpQwp9b3xUYtp6VMsnUrq8mhNHjVgtJQU",
  "key16": "4EGi6PVDmhWY6rYeSheiNDjFNMg6xghkayS6gH4c61JKAKdng3RVGTTUJCWz6LXiAABzWT6ANtynTRwq4E12tqa3",
  "key17": "2SWUNsD5LkKd7x1a6jyVVusksmj72ED89uwq69k4D9pS8ohtAGust3K4onfG5wKT2nA9rLKyeFLAdfU3jDcC4ino",
  "key18": "5WgrLkgf9AZnchvi5C5kjJuNFJBApnJKbB8974avMBKhN4tQLL7NobGAt5fVcEdcqw7BUWXxtZ6GPgPXNQXgUUxw",
  "key19": "jayT5EdWyXdG9UoaSYzi6V1nNJYpJY6RJfP9AM89d1BazkaHLTyxhVG86PxKNHw7CLkyxCm6ZW7qdbqnVyUuZcq",
  "key20": "rq4SVSqYu4vZVZPtLySkQRmDaDZoXzPvQYg9aE6eeFg8y8L9bYMrJr369nS4B7JUfaa3bBsLw7Q3Ysghqig7sMn",
  "key21": "6vQSDfPsd3u2nKXd83jomEjpkD4WyLLsqtU571DgPZZneyrYcHBs5Y6eZLh9RM2StuB177fZmKoqo9R3VFg1HoZ",
  "key22": "5K5MmtV61MX5ZQLqNFAHvYyczAu2zbYwLLX8CPUDZuET52YsBuVFgD9GX28RdRUECDAnPyFmAce1VicK8Sh1GK9h",
  "key23": "3bf87nyTR9bHZd2qFsVBxe4WPqsGQ31fghmkUDbxhXZ21AYpNtgoSbhL23F2QrfPo3q91x876N7awawVkp38Cz2D",
  "key24": "4pMHHgP313NmdSKLPJUCo21snnnECUdHaLRfaRoYA9VcRiHC9NpNKsZWWgxyScC8LFXo3FVA3Ss7EPhePXP3caBs",
  "key25": "62bZNU5SPcNAtRUcvCDQPnuXSqXjiwQ6MuSuy5cweygYZ5A1CsA5iQi7YAi7iD3boDfj3vhQQjNZ2cZRxPmSg6bC",
  "key26": "2Tkmyb5YLtdyxtHp7XkdrbuZZsqX7BTeobDeJZZygqC65vDj3JnjjuuNaSnnwNyCs9PQYNjWRqE7rPngUavzezTd",
  "key27": "2vUu5Rv7U4gNZY6owj9AFjpTuMTTiZWxhweeU7nZjR3oqY9xhSNRC17QtvzDoBs4CgSYQmFC93aGjp42WJ3ZUNwo",
  "key28": "3fbSdW1CPBWYoHpp8H6Nyvm87V5r9n5p89Hy7DcHUmoXstUt89eaGuZCzAsnKKFo7zMwW8sqR8ijqPuSPNr8r1jM",
  "key29": "uMzm8ak8N6rqcYG6QCVkWVo3ALuvvivwWALQ75XMdVd2RbjSe8NgcUcANeCs6581xH7ttaWLnvG5b7nhdyMLitd",
  "key30": "2hUpVBcxdsWZAZqgLSvVpPbB4StQJu4t7UsRQ6Tg4t2kS8z4vCoiSxH55ofRmBM5xgCAqUkEguvNhXxktQjDkXJ2",
  "key31": "5nYquL3F9YetejawXUJ8rCLzFCYJczZLfiHjFcW7NmzQ3paG7HsaUNSSR4gdXWSdKizkXaCoMJ9DAjN5FCnNuF7b",
  "key32": "2ZBkRgPAwTimTMHSczYjBdWH944zkQQM8auyWsLGKNmmKua6g7CrNogWnKPZW3NALFiMHNvdskEGNsAX89XFjyU5",
  "key33": "5sXv9dif92XZPKG8TWrTuTNaLMeo6VH13uJVCtZXvaXA67As7nhnMfRYvFDPY66pb4JY3ZPbr9ZVN1ynzTn9fbfb",
  "key34": "aLXa5kMgedzCvDgRYtrWQSdnhy2PcuEpznvrJfDLZJjkbbhkXcGRCQx2GtvouYibpVfU7MnNqbPS25rywYKgnyA",
  "key35": "3xLxKtsfN3MrqqzvMQSYufQ6b7ri4rPQxbajtEhUS4vQVXNhZA8cFEN1Cca5vqofs19LTqBBF7GGyrXk4zu6zJMM"
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
