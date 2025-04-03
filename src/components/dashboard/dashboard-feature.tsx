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
    "31SffateJ2yXu2rezAsoWTRwUfp4wgRKg9Mdur5kS2Km4iiDmtWqX2BvptLA4eCwrEHYyo6iMFhmNyzroCQcssao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXajDGpMF2YvVkoYcZy2LKzscDCNPgfhgqRNTTyK7nkfNLAx2dBx238iu6yvifzAfM72Y9pqH8D7kKfqkubuMCB",
  "key1": "4mSZLHKYfi7GoYjBVvp9bCp8PDvU1jD3BbGj6CiyMaF93swdrjy9ULECRFQeRZTnTB3GFeMQNfNwYsqma6f1J4Pn",
  "key2": "2yCe21SVEe97teycUBd4iba7wuBz28WD45gTs2mpjm3mRkEtYVaehMXoRnAQRopVGNyaVzvr3q8aPpSCvuTsBC52",
  "key3": "2Wme1kQmB172U7hTZxQJsyF9myTFyKfhBmyn3YhuJ5a8HgT6FTfcrAw34R1ML5KsbHE97xSnaTE12TqkekEQjLv4",
  "key4": "5UXRq857XJechUudNtcJy3KoEdTgirFDxYepwdZddSxKUQvKe2ZzCCJUw943wXUa6C7HwUNhiVmmhCWZN3AZ6WGH",
  "key5": "5gUQPERSSYBCfiS7y1XYaj61J9uEZDvY8LUyiYF5VRyaucAkKBFC8dpfyU4UpAAMjyQnK3XRSyuTSBPo7vc5BadK",
  "key6": "2MxS9AVytMVfnFf6vvDa7CugzHdU3tLVEXhJRTEyqnbiBBbfiMXN7otTFsq34cTxzaTQ4f75zKoYEr1ZPPRNSueu",
  "key7": "4MkkTpKdrBcacRun6D1M4Uc12yLg8n71UnGkoawj3BeQNzHwhJzRSaqn7kdLKXLACfhxJrus8LkYedHd5FjeETHs",
  "key8": "5nDQzyH5qVUJXv29Ux4XjucwZoQJzMVjUC4W5j5V7Yfcg35SoLqGUkY9Q5rKf3jcLA8EnpzeZckzZjcKU9RrXEQ1",
  "key9": "3rPWUeA5rhgvwfrF9M6T8YYbTStGY6AfwSF33KLoFhrvt7qAmY3wp7vHUqYHAPZ7hjDfAN3dFzqbcTqt1mYqtuAm",
  "key10": "r83o6tvdbPyTZBdKhqRxS7fwA1ptFN2dJvc1mr3LbEjGejRaAZjC16FpuDAQazFXHBowA7obhkHhoxsJSFpod7Q",
  "key11": "Qrk2bMiRoNgHvCCk8PDKU7a3XA8KfeqfHEYdDGT9d9kkmGDRJyt5Tfugt8BfMbzu6s3nk5ZcKnYgmRi1sECuWjV",
  "key12": "3u5M9vQnxBBwiyzWJjesGcjwoWWpqx67GZLvNXDvx9DDNBKEKQU69zmXS8AWCEdp3BiYAXwYFoifmmNr8EGKWxst",
  "key13": "473gmPWA4UFdiNYwAfpPVnGtyRQWiEzr6BKxud7EVyzZ6MQgiudhmK31khbdjxmf69cG78Q9pk5X6m6FsrxHW3bB",
  "key14": "63km9uyVjYHCF2M5C9EsUWjxvrMaTQ79gFeeKzNhtM3FjmBPECsY7J97C6e48E8UyoGMsDURGsA5nyefM3BJcpiF",
  "key15": "4mtTpxXTMdHofj4tVvkYJw9BmLyQgdrDwNQJw1dmiWdQ3xYjMBGzLTg8dZr5hMhftuR1XYqFJBfjrpL2HszpNgrw",
  "key16": "3WEutUxFSCTZUz4dgqXb1dHJ1Lgxke4FwGWg2MBzRam3GSEZvUacTmXLde6Y5Qkd1mkYq6UvYZTSPy8neTJAU3dw",
  "key17": "5mcVVh6CeXqyvfgyWUt8JXZUkkhVwiwYQB5rqDgjvMs67MHKogz2vhp9nL3qctbQ9GcVV2QZ6uwitLsyYpbjkkXS",
  "key18": "3ZSeWhB5aeRQFkNysZXAKCemvhmhCJRH2SM11WcGKsECbhQ17BZc4Qjyja77MbKRYUQdDYkh1dN8ZCreoTcNAS7C",
  "key19": "4NGU8eQM9arc3nVdGZ3g2C3g7AM6x8G9tMbYBuRaTp4epUA3aVzBhbmqkRK4tw88Xs85d2Vd4EaemjmCGD2nBagk",
  "key20": "4CRCwuVdooUsaFaff42FxmgrL4NBqVBCksKnxQiMU9FRHakCgx8Bg8gsuojBxM2H7HBfLaxda5B5p664H19awzQ",
  "key21": "4hSre7uS9TD82St53g9itxkZVJd6TomgMAVt84CP7LjDkegtUFY7JVMMWAnQEjYcKkSpcurqSW9MvYTDJ8vy7EhP",
  "key22": "4QLo2XLTHy2wAJRNwdLnXhoN6bsobLPvTDdRkmS23D8bMtRvwzSvLicfUunAQVRWrV6UdQU3VJV5uBdvA9bGcZpD",
  "key23": "5cMbjyo7q72dmQ8gTgWZb85ZR6UunT1R7VxEq2iToKTQQi8n81F3dP6hA5UuTCS5nyaqZ4A6nCfcEaBo4BKpcHwz",
  "key24": "5PJtKMgVmxn5HYPPtctPVEoPkb8KMRmogyg5ZFfFmaCwsGqY1tRWGJ6NmnLYBxsHy7tE7HHM99y28TiXXT6iU5aC",
  "key25": "3dP9EyhTh51Te19SxZqaHmdTVjTkd947mnKBMDNrKDyPLVHL4pZMySkH3ZynUrnVNqKwS6ZqQ5px5ZWvC1Kjyu9Q",
  "key26": "2y9x136s5yGQGzwNzhNwasXyAUDQCkveRvhc4exDgYSGGMpMxnQFMCL2tVF7PtSp7qpgcAMUEHhf5v4Qkn2ui8ka",
  "key27": "5PJwan4RX6NLHtt2kFVrGFjjeQqHordQQ5xLrpTv4vFXX7SBqCchWB5VKrqbJy2cjjYBR3i6aHeJKysSbgSEnnoD",
  "key28": "g4gMEM89KYG8FnWcPrqtHU7SSq5P5kzhhHxYMhzTqjLqYHDGZAYzZmRx4vTaqGivSxwc5ro2cZGxD2miypuukFY",
  "key29": "48uXCyfbcQPubJf2ff5frbzSpoUBVMc5ZwLmXhtgkKx9Hb14haP2DYseysUT8B1LdqxBiMNbEmaFUwSVwczpgp3D",
  "key30": "3BkJmHjNUHCBHVvu1mzh4W6Pvn8v9w1yDMPjPuEbF9Zwk8UTyq35wu8djsfyBES28U6217LAnfijS6KtfAjZP2e8",
  "key31": "5GvLon6mYgyYeMLANtHhj3s39uDktEK7HVWAHDC3YzAzSLQRQrkd7ihQdfW8PmoXyP74yR6sFkhRMUTYBqL9ESFY",
  "key32": "JZSuF9HmmSXTs1N9zexYsjothiYrP3pUb9qbaxmzAHuipsuwxXhdaUy63RDbP5oheRU2Ru1ggnMKJa7g8jPtH6z"
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
