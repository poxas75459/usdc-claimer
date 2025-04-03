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
    "4fJJ1nZfdqcj5McwgNjoxNDpn9NNkQdLSw44HxUiyTJWx7iZoTEqZaPBp3WrP5X65EBbq3L9ak3GPPMpS853q83N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGM31477TLCepz8TDRaUpwp29TSgLfTFZMj5SgkctERcV6ut3rvUL6N8oR7jtBrqkVkTkC8KFr2EtMw7eBezUur",
  "key1": "5Bszfe3T7vcYNqg7vo8EfpzvYNXPXy5EJJ3Qj7FZL1fMrDguCAXKMLrhenAtcV7LX5JfNQ7n1cWnWuw4BwnMEVB3",
  "key2": "4M3epjaEFSwwKgxu2mgfmWMsTtY6dVmG2N1dPKqkC6p8SgBntLE4QUQ2xVLv5ykKeHzcfpL9qKsVMon2Z3XLuHCn",
  "key3": "4avfJawEAMNoGfde13WzSebSL7oZyZBaRotVrDWyM4gUwqJzhshcnepyQQn66PDFkQ7dvESG9mieX5GMxSCjbsBG",
  "key4": "5AwK4eiMAsUZ9f5Q1pRCV8qJXQKFVsdRrq5aStGcyLq2MZEJfZqUBq7Sq6KsynZkd4MpGfuwDke8GZNtzJpBqCcd",
  "key5": "3xTsEzD3KigggQvWRP4CMBkk9bijm5vT5Q2FphJs6dj8ZhY6ZU5fXrpS32WciUtw7f2dyFXCjdBw8XojoimJuoPu",
  "key6": "4nD5V9EnXGNhuzBmwpDTHTVqo1PsYrRfutYAcTJfDQp8BNVtHCdNk7L2KSBSxDC4v7FfK1h7xgzDXUGvyHdFtGTW",
  "key7": "3UMKVaZ9ckrU192tR2j8nhPS1bRiJqo9a878KCCbwA2tTNg3UMN6P1fFz9zszRPxMMwkV3355ScqFUu2Nscg7gxq",
  "key8": "3Ru5XPXTfWVuQ6jAfcGLzjWAifAyCsudRFkDFC7CU1ZxKJvABufMG4XHqr9bVuFj7fWyuMx1pGSyaGxnbfEpUzmq",
  "key9": "4xDHsrBLYREYBefH1VC3DkXG1iiKTSnuPcQZqMFu6U6h5AdNVtT53QU46Vz9B3LvJMEwMp86zgeHAqVyZQrPzhj9",
  "key10": "3N3jYZ1pAdfxMUaCa9iqQUq3TR7XZLX8QtYK4se9yVxFxzyDWtQLGz2NpMbN6WknBnehERWAmYJ3WBJvfwPHahQR",
  "key11": "5D1birc2dvRjH3kPXJrLRhVFcvM8s8JGbWVBZaN9HbY4pZiJz9KPJH43meKrwPyPkFd9RyE4r9FpuM1or9H5UzZD",
  "key12": "gtRRGz9zQxhD9CSvh5MeSXBpSpfqGbGn7AiDBnrxBf9yC2pdANhfDABLkqxbbnfsDbwUKRjFM3obxyYHWXaht4h",
  "key13": "4H9MDueCPSgzWY2Ffx6CA7WXAYDKT4rccjrcAREh8TDr6bWtzCn2hGgHEsFFmJxaBJkRF4sSxgjx9irqKTjnCo48",
  "key14": "4fmiRUZC425sHpVMGxSg3ivsDoRQY6QnLdxe7ZxvSVCn3W4gWXfYVP7HSP3Bwsxs193EMuwDqEpKB3yYAUxjVWkx",
  "key15": "5ZWiMu6FGvq2pGg17Rw8h1GP9mhjW8zxBwNdyj8ETwKkFFrDwF1ZMHybC7bYFY5pUdbsEYWdQuxB92fVBw5z6eUQ",
  "key16": "5WB2HEHpDJKDdTkaSFrNjxB95CnzuGPgFUqSjnEx3z3bogrrJcak9tbkqkZsjAvK6s8gbjrXQFYRMqmBMhFUzqoD",
  "key17": "SLv6joQmN2diGb8HU6AEA5Pg7mY3tHkbqCVVakiSxaYFvtYda4TjEhKh3d2rw2KX6BH78CqVzBPQpRkzrZS8nGG",
  "key18": "FpUZRHsrXcKLyfteomfHqvzXMMKWrJgnqQfQTXLbEjv4wRCLqftvxAay9By4P7dqfnpyJjM6y9SZuTmibvLujLk",
  "key19": "4ddKVB7vXrPRkWN9iKbvNXHdsd27MAqbY2vMA922Ln5nqtC1aSCNmLGEXk88PLuECEMCsFVxdCNG2X19gHpQfUZH",
  "key20": "3pxzxNuRLXcQWUYT9NgcMnTbguDkJpQ94PZj5c5TdfEs4L768wf5HZ5i7pUbzG6WCSMy9n41dp1UkxRDMXnRhQND",
  "key21": "3Fes6vALBcW7sJV9EVnwnJJpHCvzuAcqNDPGZdwvjHaamuSB2wVJ2uZrVQQ71dZpsnzjkdvJqSG1b2MgPnRa8cyR",
  "key22": "3zKYiYbUc1TxAgifFLvd7aZZe1ENWtVtd3YQKCEaWgJUFjY2mgwkiSzyaJB6r9FUXpLwaqYx9SMt8uaYz79BQr7u",
  "key23": "41J9oRvm6s5NavDP7zpVb239fzJqkRAiUvbZb4GWRBqtCGWq3bKzkZfHdGqVvKxq7fvvZXRkaDXQwiDf98HAwSd2",
  "key24": "4hsHsm1o7umX11EZE3oEMg2Ubgeh9XM5hdaVgy9cL2PCNDWBJBRC6TgVty8hVFBFBFYXYMEJ9XxCDVMpiaCJcMr6",
  "key25": "4KzZTV2HVDEYMCnvcQCje91QgFvkKSbNh5cYLVBdMTVfNv8WTDMsZkYBLZi9e7hGdfze9yEkg8uGsrHuP4Jmg8AR",
  "key26": "2kHgsxNp9Hma3fNc3p8ZBDw5NNQjUw69HejRvYGw8gWHiPa1XineBkjittRubo6JFW4jThKWYBKxo9Q8Wom2jiFB",
  "key27": "41V9YQFTvhmCQWkGa2GtCfNqcf7hBHdMbF9FbCkJj3z23SHm5kBcPWzn3KbUDvMSCfWSDUfWDELRHeLRokmoEgW"
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
