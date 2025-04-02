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
    "2F5RFujpWrTBbufnKsLX2rpzpJh5zDyktz5G6qc8xQkRNqD1tYGVEzK1uVGdgxqAsZ8h7ByctdGZCE1y2FreTJmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JF6STprNRb2HyEp1X8kUFxangVxnLQPnZHrGZsNwEGdq3SNzs7xH8ufGmxMjGnSB5GPvsqVtMAwqAH3KxTGcsJd",
  "key1": "q7mrzbJbHvQKBJHfmLNZPgodwFZ5TDPhGBTzTjTTDg9sK2EeMtopuVsuVNEYxqjyEWvtmHNBGwE2zpP9kvsUeZJ",
  "key2": "28Mz2VETVCVaNs44WQVz76be6MPdgZdzJQK8skHVmxEGSaSfb9mTV5hqbXFiuJpG4wPfazdvN91N6VwT94ehnMwa",
  "key3": "2oniTPYtUdWa8ofxStTurRNSBUZjon4DeYBDfX5YV7hzUxrfVtLeuVHgc6Fxe6TkxYg53Ke8J2iumSbC4tB3fjpS",
  "key4": "2y6imT6odf6XmAuTf67Pgp4kMfYmko8g7DsqNHaJNmYrbMJCAfMSAKk3XWTf3quM23BEPnrXYdan5dBLZuagaLJQ",
  "key5": "33e4sFSJnih7A9CHvkQLuUaxq3ZauhhdURHk2fSWQjd7camF22FRLwYzqu5ZUaFoe5Y7rNNQqoPd7P1LPnJpVihd",
  "key6": "29DDb4zknuDQe5jWWbpLPFmS7Sgu2V63NQKKhGR1Go7s35GewRsxEjHXPQHsuJ271iTDiK5jv9FDAsgFhBpq46xG",
  "key7": "5C5CqRwmK3d3PEjonbpN6EvDUBLw8AjpBL2vcw3eHrs4FnR7Eca6yNYabf3h6dLynJzC7JTXxiioFcNsYFju4zBK",
  "key8": "3sGirhUhaLrJqyVpfzNK7vCcS5oEcYWXppSfF4wurDHRBtdpS2Tr7sawSYxWa62MqJRbvosfvMRisq1o85fW4LLb",
  "key9": "u79viKQmtW5GUz347ACXtP38DHsFjMwKXA2yAvQRGtBN9hp9sfVVAyDdZMfuBUkMoxTzZDzG6sbZvfixph5bcqs",
  "key10": "45mstVX3rmb22KyWVFoWDktnsocxR9F2kvW7UkwFie5XCX3ziCr2n6pgmGtg5o3eviVYGiE9ecxFs7LRUUG25Cpt",
  "key11": "4MoSLjZYgJc2xrGs8LDP7MLgzR5wbbDPWgDxMqQ4r2BMVdhLCo5tQD62HBQfYnTGDp21t9pmtYLRpy2SGjmwoi1X",
  "key12": "QEkYVjSBNhiVmes1Egrj8oi2yiqbCvvRqzPzaPdCyK6Rsya2TLggaJouaa3RkJ4REcgGRQ7cgkGeZLviZ5DGVKm",
  "key13": "4zU9Qijqhm8BCX26SyiEVNdZTbYoaqPd26iYGKfxsoP9x1yzfwQE4vYSLVGYQK5GhoCwrExWXtbwC2EuufYK78XE",
  "key14": "2kNfUv83GYqYR326xKazwCZ49ifFDz5Enwp9Dh17YxTE6arSnr8tLb4VDzjBbKdhmpkTSAinYifD4Rs15hEL8X9Y",
  "key15": "prXYik49G97HxEQDS6CLvpYXaq4kEneGuw9wRavpLTbJCkDtRuGfbe7wHu4NvgZz1JqBZpUVYY4eYJuT4qNU2ak",
  "key16": "hHurE451eWzwXfk1w1C9n12hosHq5bnqxLxcUYHGm31EKcekrfiD8A68NQSiKWYc2NZ5DNjEWrifqJ3Y4aDSQ2N",
  "key17": "4e4QADZnqydpx9BdSuYmhBKwTXTDKpzvEgc66MuiPzBcm6ZmW6pQQLkoLd14ZqvfRUUQ621DUVsDBGrpwmnWqGf1",
  "key18": "67ihFmB3QVaPvbxGDsVrYtXdHS91tA8K8idMFh5YFfm95FZqAmsiAhVk9S9HFefpBmB1Y5nMruaZRzichYJ8rP1T",
  "key19": "2t7mmuckvnhkM57x7CXrsSjYxJ5fpPgYkrL3732S5LJznMhz9SY2gJicwDKvNPuKnvuErA5ytE4xb6rUe3ZZoW5W",
  "key20": "bjNJQraY4Rqr1cZeRv6oZbkSvf8hMqrQZkHwtPBLW4yCU9emdE7vkWGy3bbjBaKKqWu5g5HvNfFYDbWk3ZxA2PU",
  "key21": "5p7WRfPxF8XKFVMgsoht2NJyeYxSQV6qxeGyaTavJrRf8xdePi3LKvFNM4Q7Cagvkevt3WSwox9sbZAWxU9B3ntY",
  "key22": "PMJRwhjbXPzMmRnKpwMxR3V1WQaBr9ntnX5zqtj7cxVPdfydfCNz21mb7SPpkgwMyUietUHh18KwCon44ufVNvN",
  "key23": "GbEHv6ews6XmBD7ZWjJxz2yELCyMSprYSFaWuHJTdQhGM3c45Gymwqz3qddHPWcUe3CP4DdTMAG1vRnLeXVmfac",
  "key24": "4avGxvcDCYcHXuQWoYwHFVCo7XXBJujbWU8fM9n3NfH7guohUdiSqxPdHUB9gZzmuQttrbGfusjxMdR4T5QiHmor",
  "key25": "4t2p2E3yAwGPWyBQYsPjMsGyBhMi1fz7FYCJJ8GZBjEX8oUWSHD1QwhqGit3rXaFvSqy7yEbQFjojpoQoemYB455",
  "key26": "2gQVavDxn4N5tWvP1HzeLTDEYEVtaFDKtczLNUn6LyAFiokwNXF6ccDbj3NLgSSBANsS97feqve94RMrgfPzju7g",
  "key27": "5tFcuotFWsRBphLw9TTx5TzUWQ4ttps3Hhmnfj2ajJZQRnmCNxn1wRb1QRp8KPSMCAN3chpLXhzDMkD8hvaAFrad",
  "key28": "2YHYJFDFiYZcx9Nfgs7yhtpy82tMGuP8pgXkHbMiigxkzE6RWPC5XmZJbrKok5Wy31xhZnns2iwCTQMh2AmyM6Mq",
  "key29": "TQNKB764szbuAL84jJrz6rPmHSshoTyWtg1tmMF921qX2Z3CivUKrZ4qnwbW5ThBFxGEbPfWWgkmuffgCbLm4uh",
  "key30": "2vKagJ48mgzivRXTo1Z3xuP5sV1nQsQu3NaMVKmvAnj69ozNYWp4epnGeZyeuD7KQpnXQPW749LSZf5QrAGR5SZt",
  "key31": "2TWA1QRXy2Pgv86fufzDReyfnTa7QRMkH4pZ7W42GPky4b5k1awTe1KDDXPH13r4XusbUxWURphU7s7HRR9YpQBB"
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
