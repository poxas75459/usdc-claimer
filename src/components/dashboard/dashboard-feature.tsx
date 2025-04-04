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
    "2g2mVwmxGKmwJR4EX9PG8xXEPn8em5QKWA4aN1kE9yMwovvAwQPa9Nw9ZvQNGkbp6KeCArwrwYMb1YFDsWSmsE6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQsq9iZPmpK8QUzD83tYZhWC3FuyCqW9vYAfzFTedWFv2kHxtjEqeeNZCP6YKZKNjWW8jqNcShpxVQj5ac3T5PR",
  "key1": "2LADwexuAAjsGJvJUJH6a5Atx471a4noh9iJf7DLgm37MVc3XShV22WHaAm835GSWBTo6yMCqHZ6t2ML9vj4JNut",
  "key2": "RytT18aMNr1rj3A4rTXhpuQSearKRmPDZsdy92zodcjpJHFRbswXp7ciumPasVjQPeATAJ4uSBFaM7UH65Zfwa4",
  "key3": "4669q1YBTgceRxZT6roPF7B6HPPcvqByUN38XcrHHr7sfHEgJRSSSVZtX6Ur2HQFwwm8E6E5UDvZ8dFUVspjRDA2",
  "key4": "5VdJrSKc4MfjUwZ35c5EFzenvB7CDDsJJYL94P35stja4dBY1RXJ5Sjdmn9Ar1pxQp5Z3KLG717BvEk4yajCZ4BB",
  "key5": "43KPb8aQFb7SntSo7HMHySQgeHN6b6inkSkkRjZeanHQjt4tes4vujPuQq1uqPq52dLXSm2yN6deorNWz2BGaft9",
  "key6": "2cEUum8g8HRCfhR1RgTjJbGiPJoRD7p65eFQCwsLLeYHddmgkCYKhZvLBpzkaURpjK6QS1qj44tPcYwT1fyqA1Gp",
  "key7": "3dzYoND2h96kcT4U3gThKfh7gBZ9vzFbPwjramqAnkQvw24EznCsvUMgkKhXtV999RJS1z5Y8C1YFkbXb12HhUiW",
  "key8": "5r2TnEqurWfhS6nyGmXQfBaQY3oTbJ6z1FcdkuLutqnPrnni1GDsVewC5dCNNvvG9L1H5Ny1NHopHKfLcyYnpJV8",
  "key9": "3kyDzRjts9QrLiHPNu9JvmHV9hUHPhtEWNtW9PuZvrdsyaqHSbSef7MGzWTCNZhzwDgKqonhwAApPTamJxgrFM9z",
  "key10": "42vndGwDuTBmFQPSnWKFNaqXfsgAAATAr7bBdwgPQV12fqaTay4M8k4TrKQen4x5vP3HL45ASWPRSA1zC8wo7F5Y",
  "key11": "2dY7FHkCBmvJd8EprY8Y1tWAg2jhotZ3LyTWrxYHEw6P7X8qHM9zpfJifV13F4oTmvUi2k3JdHDB692tPndbbKjA",
  "key12": "4XDotjiF8k3WENMrW9YZRA3umdPxcAQNmYPGSY3YiFTS87NAida5XtXcaXUPVggt7a9rfeSKNyPeyNmZffV22Ybg",
  "key13": "CcbwwNWEyNtoAAfZsV3wMd68W4pBqbuVzyg614WK2dNed48tGMUeTcnqQDp42aumtxQWqPptyWi7w7RMooCoTTC",
  "key14": "28nu5Vj77XMCJtJR9FBFwDRXo3DNFnw6xX162GKDC12p1DxkbNzv31dNEGdpcLZtVVXwdUNyZCNqSs9BxaJgEe6G",
  "key15": "2vF5iW9JB3EiGcC6qzN4YWP8xUgKLXhsdnyaqsnZ3BQT4PaUwfS6WAcGtDcD8Rsf29h1HNt9NrDC7CLjQGJr2UuF",
  "key16": "4x2jkg6xFna9iK72cJ8c6L1EtdezvfFE7rFdkA73JNDMU2CqxhTA82d7drkcw6KDXDqm7ajiKARFuYYE5qzcDgpR",
  "key17": "5VPGzkEXaX915CpHsGsZ9TM3rsH785ZrHyHZoixrUBsVLhCso3KVz1c54UN6V2A7UTrBkv5tdcucsqHT8CbTagCH",
  "key18": "3JYxmX8PZTeNshUdqtNggTCwc2fJE5mbjMHF9tVSQUEcRrGG6EyfiL3trETkjurT1bxYZgRYUtTtk4SNTk2gr17n",
  "key19": "38xfFf6YPy9uMZ3CoJTia2MbZHrbfXg4wc38cKWr65EJfzohuxoHUjfi3Dpes6TX7sVscBfhUbFimPKS421fqgzW",
  "key20": "xD8WvZTPe5LMxhQK3Luvki9kuNLkRDRPtFpesW6YWJGf8tYzDtKFKP54m4PhoCSfzNUkW9YX45bkyRZbFbzHfmD",
  "key21": "4JnPZ96JALanHM8bdy6TjXinLSjuiBGpAJ7WDUNwUu5DVEMbSWoShVtErLS3jUprwBNmdHGwf2VdPzMNfKXtn99p",
  "key22": "EydPxs1YUW8m2CWLvXjCE4N8iyVK542Ext91WRxxexR5CBUQJ8nCXnfobqXHQnYH9Jq7sqNoTYXJQPSAJzBeRzh",
  "key23": "4jtQ6gh33wwY2c9E6jGs3poxmJ8spy8Ee1JEqtHZFB91rkM2bYcHV29UHfR6ikvmfp7Jgmw87fWFqajwFqFKjQvR",
  "key24": "36zsiaurytjz5TjXL6Cyw3hQJ4mAKr1k5kmgWKo9QzhQiYexeczkSdB5Tnyz35s93wvzE1WFHrWYWm548M9frYSF",
  "key25": "3erqfwY2GFfcYMKLfjdDvYPUKZr575quT5L1bTaaYKGSCSpNMRn6nS1zjhD2TMFP7asetq2ZKu5s9bQThWcR65va",
  "key26": "4ALWsbC92i7PbAyNvurPEw5zgmmD9QTt6udzHZBMYPdjf6DC9iwgvBZhGn623tnrJbTPak5266sKm3WgxedrpuVF",
  "key27": "39RPazkePYvD7DHPsUcxY2R1YRDn9Hq1cBJu9jVMQGPeaobMEo3QPMKSLV7Hn8Q6yY6DEYS9d5udbgeBa3xVeCJC",
  "key28": "2orMLAp2PWrvgxKPTkWmRC3egScBFXuCVE4PjtSBxP6jigDBi6W3qJujxb7GwbfpqcDrA35pK8JRx7CXpjc6ZnWt",
  "key29": "4qxxh3K6gzxKDuTW9V7pARPwZrPRTuCbjFGZmUbw6dtiJ9wX9b1aW94J7DWgf86TPjPCpZvMJrie1fUoQXN7kQMN",
  "key30": "4gULraki9tKsihZNmiPiFqfU39vwaAj6tY7w2nKkuSDverkxoEkhXxffnmWoJhoK1T7yeHQLP8fEk8RTzNF8dYSB",
  "key31": "MwCuCpqBq9xiyMqLpAMo1AWuySULUL7B4D6Xb6sjhc77Aam6owYiYa4gT2TT1aiCsVjnJsFBG23k23AgCy2wCb1",
  "key32": "5f9HaeqTRLUhW1q5XYm7nGTpudfq1EWXR3rHhB3f6aAewVsvTTZwQcj3M6hoeUEUZzVbttyPQSUKkvmieTrQsp5N"
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
