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
    "5eKDvaQn2NGpDZHNcUnyTvEXrSvWeWMwgYfq75dN43bgt4xWyEiiULxyqYB1QrHcNFwFEWDjxdTrYQfrVBW1fzvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fE1drgTxmekZkPaC7GB8CydruuEuBksLBX6K4qbDEuwQFjA4U4nncC2J4PqhFr2K6CmvzhbFVJevd5371M5QH9i",
  "key1": "2hjWrybBJPH15PomW4vJhqs3TRJp6BXsPdcctZLCN5899iVbhu8t89GFaBCtRQ76MMjfrYdDWVjVtYJm6zZVWAQ",
  "key2": "z7TpdxvmuiwoNbnyeExLvzhP99srbMnAj6d8xFLjfE6xF8ojNaa7Y5bgY619753i2tiDMgJpc6nyF9icfz2JKRG",
  "key3": "5xXqgoAMXpzVENMguEAcVaxZQErvoDVKRBwmttWz2AEnggkb1RZrfzf5mUkmYJbmEykwfUARXwFwW2qPLWb11qgw",
  "key4": "DLa1ShZ6R7TU62F7epWX8qnd72HDPmNZuA8bLaXEb3FMQtYjvLT7woKqrD5tqfqn2aQA4NwkYddkfeKmEen4QRF",
  "key5": "2AbdfvBHWo6rndkW47BvHgZRn5jAawkUoyQSZoXKNnGhr1xYU22qPoVkMzE22X6szWhWaAgAeHAJ1KjTckwtRxsJ",
  "key6": "2Zrj1RawcGhudDNePK9Co7oB6njXpnpm46PkXRTbMQEaZ9YrRTcgAYchckdHuWzH4gqYVy3pgLEX7PPf9BLAc4vp",
  "key7": "2jzwk3ZeZwQGbaZV2GjKpkz73Jqmr8J36znU9FVgnNTYiSnubKUwvGMEfriLpQvJoGv1kEwkLVPuZzQaTe1tLyjt",
  "key8": "5Ka6TtbucrLSRxezATm3uopADs3jSByUUkpFgSArDYnmyNJJJrmNREYvJTxGaJNV9YrQL4U3J7CDAYDRmDPaaYJg",
  "key9": "31a8NmoKacc9PXtNjs2THvxrz6gij7viPgm2pWP3B5ndaLqNv9HgDFymRwoL2HypfVoXEorWPVxdxuLJhkmWJxa8",
  "key10": "4K43VEPyiQzLziVamzYuPsFy4pDbHXb9iCWrqDGCmvTd9PYaseb5Tqs9YLFgbGB8RmYtD9AnMJY5KAhnkrjiBaNZ",
  "key11": "4Fuvc3KHuduUooUnGpaTvGQQdhKwzgFXVuExt5yojc2ZFASF95ZhM8qe3i3LP32vokWdGixRTB5no5mCtg8rTzZ8",
  "key12": "3i7WnXZGyjiPG6GrHb7tGcKstiCAcoHfrJ9QjF2JctRJKrKjDc3X7jbKBr6YnDEUycgPinSTxzSTG1zmewWFt2B6",
  "key13": "5iCcVBrYmGJmTvnf28STBs2YMf21SiJh4BJA3daTrVDcgPxb7JLRyPWGsxtJB8BF9VAfrxv5tvHzom29bAkLpEUW",
  "key14": "3AVUS77wK1TMpmxjznzCpmhwXpQ3hRMyDFHekBYz6uhp225xnxewXTxH83phXBk6zJpeEyBvLB5i3cgK5SYzgkqD",
  "key15": "4UVpfS1TSLqs74uYzfFWSdSuyNNXg5BweuH6tgmbcqVkQBXxTsjEAZ39K912n9RXJ3KoXB2NKgC6N12H6q2jDvas",
  "key16": "44vQn2PXuSqe9V7xyQGhkY8DxCyH9UiQfX8mMSRHvqdKFvw6vDpCRnVro4vQCy9taXQ3Y7um1F564AcR8jVi3bVp",
  "key17": "bPwayZdpMAj7yN5dzQSMwh3jC7SsJySUjMi8pVFBpyAMgx8vEkhkvYkwYMiGr8Vyy6s2vzvwFjFNB8iAwdK2fAr",
  "key18": "5ptBNy89knDdVbpyd6ELgpPUHnNBS2qWWYMEUn8kMmgNEqEEUS3nyBZTeBTd27gG7QhdbNrP28qbQvXv8t2WxN4h",
  "key19": "3NNEJg36YtaaWPRdobDnpQWoAzNGiJVwtLhdw8Dnt8ucFr35wMw7Gfhr8BWAbAhcuUmUNf2mkYv72Zsnh3h17X95",
  "key20": "3EZiuVDdH7w9g9bSMbGrd7kSqms3m8K3ND3Pg5SgoXQwE5qZV879imgsFJBtshrvgVqMuRZWzqJoVByy3hPiEdes",
  "key21": "3q93erVHT2oZRrc8RZGZUAH669uwxywRfvH96pbuyUUuBedpjwb9KpNWTkEj3RefFKkcsquMjAvNvmaxqRgmsM61",
  "key22": "L4KqwpqvyKJsKxEWzD1bttcmgkPzofTkiRR4RwDUZChRfiwaQjkDvknMv9dnyAyBZUWLxcMxV3u1GtEHM4DTjts",
  "key23": "3QrjoSBxCThhoH3VUGTDD1spviZfN93G8tUkZVaSL8LYEnvPMvmiTgQu2uRmiDTthqJYaiT7wotAyTa5bieXBwv1",
  "key24": "2BvJven9dK2RY9zZfAH6ywkfF5mEmYTg9rSVbYpV2wAT49r3kWk2ytmzTWiQHgwPdyF6HAzQy8cdL4URvR2QHP6H",
  "key25": "4dMTi4TJfYjVjSFXn33sYyjA7BCstjY7bkkacsS57Pon5NumJhPYHn78gnCGpBbp3xuz9FDKWtGsJibb35HqwbZA",
  "key26": "3YEzUTfvJxWjK5JctUd5pzcXEXqtdDYmWbMGqrrEQusNBEa5uopHgc9QM1ngwTvawYSmyzqzhar7xMGi8XK3sCj",
  "key27": "URNsxq3n1s2hQ7UyyefPwdvV5TL3csAAhJ37YLBwFxPK8ooX1yb8WiTimLeGaH4L442wUAPbNkDpsyPc9Mza9na",
  "key28": "SNQoZbssMRswqMb4sN7729NSMTCADsh64pNwPXUMkJeUTyjb865Ac8ZAveVyD3yR3THzGzuYKPj7LTx6DN79rF3",
  "key29": "3fKLffSdqjDcp9hPzC9yjzAgzxKhwfFma4XJraohYyNVFVQRVmfdeP8PFCbr6ZE3AAkNUJyy1q7bDcRksvfuyCN6",
  "key30": "2qLvULAih5o6ot7BWZLGjBQX9EpvgvawwyKLPyRJuGVJHBfwtNX5uQMS6Rb5iEHuKvM2PGh5iV4ic4ctfdUsufAw",
  "key31": "3DsKCzvCP74s2dokZTajoqbyaUe3woik5iVyeBsvaS45tRCVGnkiCkBR8yP3PY8E23EcMsRDzPvaKyVnCUDZbX4j",
  "key32": "2eXSv1PM2ux5HeZKMmT6Gv6jN5fZgRM3N1Foe6ZcpZTvzh4vqF4qfqkeT3j7UDJcB6Ta5PxLQFT8C5buJo7Wb1kj",
  "key33": "kp3vYof3qYefp8BfXndfs8NATQ7mEohooiVY7GD8gAwh5pKavRD7bHZHmSf7jnuB21QWkP4SsethQWsPvGRHM7j",
  "key34": "2F62yMhrmbvwpUJ4enNEEsFSxc84gQMyFHYx4VyxXNhjbQKWUBiafVsLL8ENXGZVcTrbqh5gLjV3LbnDMuyZSXPq",
  "key35": "6Dpa1G4hYPrknf7WCB3SexKjNAYXqhvvnimWv8BD9FEzosdTsvSfKysGAkV3j8r4C92EiEnQHoqWEw72hYM7NiF",
  "key36": "3r9XbCMomd7AbXg3huivceT6SrEbdtQDrD721L6HsLs7k6rEZuR8RNkREQdtRPQqgiGQpNDh3SoKsacM4bDapzJL"
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
