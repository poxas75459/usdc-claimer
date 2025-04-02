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
    "558K4XT1AwuKeizvm7AYyGMX7B5QaAxrKy7jMgd5gjm7Xe68tjD3nCoxuCifg3k3bAgyA1VFsUHjfiPCQfEmQ29L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46et2gxR1Edx5cfTrC9fY5MqDjuWot8bnZ4eRP6ji3QMk71qFzUXL6gFG3W9JSV82WH5ujQAL5tfe4TTU5E6tJ27",
  "key1": "HVL1KvKtqEnebtsFyAsa5NNBDtUk3etsWfP5JxEHZAT1yqCCWkYTTGaKdVLoAvRezJgXbynAqL9PUMiMWfEStCL",
  "key2": "2NScnYt44KSzBCnq2wezVrJuv8gKqKFB521XZBfCnea2KfCppm2JYneyYRNKCYg5vUo8oJt64FgA7Z7ELq3MamQd",
  "key3": "4MbuvN5jQXfH8Z4mjtGAvvxdFtDVzqS9DpFyqYgFcn27w2MgHjdqiYCVN8EW6XLwFLn9p6Lsv36K6FKN5c2WdQcE",
  "key4": "3kq4vfBPbhzDrKD2XNTx2HyfTooTr5oRmB4FejevdV2KvYfMuSca35JxMUuaXk3HGSfd37HpogN98ESjyQXFENkm",
  "key5": "3uoyHAbmZdLJduLDnDHM5U3tfkEUWosYKciXcDE8ujhLeUEgrMSP3FehfSEaJVWJNrFKpmtVjHi8PcMA3tFBsTnr",
  "key6": "3fx2uaDPNZpQE63dQunnFqnaTqP6F29jwYW1AJZqopznEsRfJ9jp2nstt9dzEs9Yem4EPfZLVVF3Jzed4H56eZfd",
  "key7": "5XMBy2X2rQkZrE31yq5LmrMhrhJkjB3DMnbxb5P6AbKss9ZpasUvpR8MHLPJsy4FQ5c3TJzSYedfAo8mmFkVY3Jk",
  "key8": "5Sb9R7J3KgzcdhvuwM6ZQnTtgS9vuawjQV9s7XkcLnc6SUoMKc7JZwsLjqtZgqbFq8QXuviUu1qp5nuE1Fa9T8FT",
  "key9": "5HZJvJ6VXe3GFtkNQeRSuK5d1NZm3Civy4KSf6jygUpjLwzRTJsfSQdhr9cPyZVRdpb4vWyjkb4QETBBufpBKDoz",
  "key10": "44n5oQ1f4c1Cb4JuWz2YRN4auyFUng12oWfXEeibURFugdKURFS4XN4eHhGBq13zZgA4QMyXfSo4Xp8PRmFMuP3K",
  "key11": "zg7KGqGnGFNYbWoVCPzrdzYBzyoatD7qf23mLAKEuYxzXVjNWmcD4cADXrHJs8HNdBhcamB1LyqRU7HpzqVVeKA",
  "key12": "3XHHzkLkmsV1mMRSo6E3iqx42Knu3CaEauimXPivJFFapSVsmxrYubwspTkmY3AzEEu3jYYWmfUjXYA34bC1F5n8",
  "key13": "2BjLtsS9aNSuFCgNmjhr88ccoHQatcip5nkZJWe7LK8irkEnRPD2JYn1HNEsqSmndMyYauF4Xzsd8kptqq88NZGS",
  "key14": "4grg8hXHcq669Exwgn2aWWiSXMtjk6xz8c4cNEcBvo3dBd8gGskzAa3UqzpEMY3uRABpckKWMmTGCMvtoEaJaUFL",
  "key15": "37jmhCkbT7EfXaxeSPNouXgANLyGHPYCsudWizWqhH7qHxMgsRDv4wto4u94DnBbKytBi7sUx3Sr5iqKbqxo39Lt",
  "key16": "45MzxaU4YgUDBLXsUwdUjnd6fqNRmPinrFenBRw6Rb7fKVL19pEQ1ignrJjZ6JUQwCYkwSRujwNRESRWydF39D5p",
  "key17": "2qDjFjymxaAEViMKtPVpDy1VvHarYhDZD7UKXX8FY7cA8456SieaB2ASJw1CWAzeReDDzAncNE9FMK3AB1PQsu65",
  "key18": "4zabupuF96WkcCFpFdZK6AKMQPt37Y3P2xpvK9taKhyPZvCPZytegaTjY3MXaUaPT8qpdefLh8YmpwowsPZjdUke",
  "key19": "3XBKHPfKYKR9VEmK3H9f4RSNAjRSdA2nXNxcLBzH4jhbauwtQDMj7Et9NXEAC6PGUG9LWAXWUUWyiHyn6vjFUKoC",
  "key20": "3dx4TGHbC5zE8kYtJc6ERXKQDHyHojit7DmKBtsqmG8B1NUfcb8enFEKmPHtsDX6Vcg8BVLebYEo5Yu78v5owKME",
  "key21": "ByRGS5g8QgAQN3deyhVjVvDRkLcR1zBmcxnVvVnsQWWqEugivDoPMLZzz6YJiyGWRbM2o5fQQXAobLCt6m1Patj",
  "key22": "7Zy2cZxWt1o9Nm5vhv6qShnzkSxx4tY5zV1iS8P1oGZC7qhjyxCGTPkH5pGy8mX2CttxAPCBbbA22WeokKvhrXb",
  "key23": "5mzeJ9PNgcXz1ks3ombRkYpPjgiNu7NfjxVPBMa85c4HiubYgbo9GWqLM3LhBFxqFyKXn7QuxBtPvrz6CdLGYgbA",
  "key24": "2J3Yhq3MFB6JJidzdGVBaB2fDsPSvGnbb7CgvPMNU2VbzBBK5H84YPsrgFG3QN7e2VsC4LNp4UEQeQWQSYw7rJ2v",
  "key25": "8cTUHhmxMrAPnHTQExzV7YoQX8FeYbccWqR4P1yEr3jSDq743G8JozS2GCVHEw1DYPhbs8bo3QGj5W9ABHP3uGf",
  "key26": "5Bcs2NnDY9qC6FBdYGsuJT7X1FRwZhfP7Pr4toYb5AbCLrPcK6w4F1EBR7iposFWhfHiuqdc5rPEwbQ9dpchR7qW",
  "key27": "5iAbeyE3qLTKiBqtaZsycZiU7hEEfFEwvBCkaQYSK4Giy5yCid6uju6eSU5FrnfpWE2VJgbcyN1Pykg86x5sZyD",
  "key28": "5MUnHcc52a8tiDfesy5K6dzBYCu3ggqLChpwiWWqhPGvnf5BoA3rGqbDGtY6pM93Xk5WzbLHdDGJ1NrG4aM2PdPA",
  "key29": "3zqVczKRkdHSp2ZgvQbTJ73ZEC2oUiyadLHLAkUmctAyv8nHQZzFi97Y53ktt35oj8qyUftTxweCqx9wvBp1zwTX",
  "key30": "5xNUugBsEmDRiuZnsEDcyG97Ukk68NMacBw16uY295qT3ivQaLqaeEqEZRz4YSaxvbGH8452FnwmgBmWxuTERzXp",
  "key31": "4tuZb7HMw1XnGYKcMxQP3BamGNxSJAihFzzYneszTM351yGxGEnopDzvMrJteh5sxqNrgZFMLgFeSKermMQxjevG",
  "key32": "4p5GZDwkAZXyM9ZYHcx1gRvwCybcDs1HgJr3sY9vVeuk3Bi5XU1V5z6YFbe97w2ymCBWUGq58Z3PWbSA5YsX6cE3",
  "key33": "5mXJE9a1N9k41SbeameB4bFBhtS6LaWvH9ibhmBGEZFNGRnfAGduuH2tXD5Zrrm2gmGX7ieLyGdDGxU1aZhQvMk",
  "key34": "2kLcYw86JRCUT2F8jbHeXDXAXL65ZVJGavD3vQ5vwwzSdftvuAPDNkqGRpXFbRytTGME1hXSUKEFMa3npCc3KwSx",
  "key35": "w31zE5JgADGy4HaGwcvkifxHr8T8UeZEnuxcr1A1b6ukDaGL6cwCSNFrzQ9WithJG4bwkce9WUR5tUmvuKqJM17",
  "key36": "3B7X5jzupHZUKoP8GR6XNcnd7SeYTYP1zkfsZoVByQ4GJFYxxNe4nz69VXTxWhpmKawtKvr5cGKjTU8vMCjrGUNT",
  "key37": "31ECA1SjmR4crmp7AvWTw1cnLMA3i6Ag5HvMpDXTPwFpRsPEXYXvZBMeu1aoUHP7Y5jiAKpZtgabL6eKTGva6cNF",
  "key38": "5CUytzbKT2xzEFLR2KYLniP47yfKtPuyaww8XnMinN66FaKCeKWCdVJyhFf6GxVaQfDzfepLpVaufiPFHRMwNuQH",
  "key39": "BcoXUQF1ZntzA3NyyD6Kv5vuBc9zbDtTVGVj4e7kJzzGsGp8vJztaZnm7UrES5uUWzyVxgPwdESaN9FAhJT9JwS",
  "key40": "42PXQ6cnfL4R1GQwENLqNYBy8xqDMia94tUTWqLdqFdE7DUDNzBLaVG7GBdRnAbUcvt9Lq3mDyqs7QubaLTWBVS2"
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
