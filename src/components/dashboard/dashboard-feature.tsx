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
    "49EUydNoPW8tjDQZWYfjTHLqQXybaaRBt3V5W1Q38xmtz2kFjESabYUWL8VJ5k8PdH9GvGJBuLRwj1JgMvTwPWix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8ioRFULu6amvzEfWG5PqQwHC5sf52FTusQvWuMne5uJgaFhnja3x2mhb2SzZr4xFe96QPRQAiEEqgkjuBYTNkF",
  "key1": "4f1dZedjHTcbGC3Jqxo3496W24uvd9bp5Gs5vvMDJ19Ucwgrywz8QctqfDMmudnNApsvQYL5VLvzeFhQGaWrdKmS",
  "key2": "3uHgrwzcQFZ26hqampXEjZ7dAgizKhhV6FYhkoDYESntYtNsKaNxxE1sQKw3ZSssLHqV7NdpMu7vuUYRzj3jTJmk",
  "key3": "2h7tjwje4QykyVa4W3vSvRymMZs4EuCX4NUKvWHb6YtiFqsbsUYLkFSFxR9UHnfcqxEKCNudn8ZCDUsCetaeFEwy",
  "key4": "2gqE2R2zwrXpRzxm1YwSZzAm2GyKgUycB9Q3he23mcQ7mDNu8VgDxD5vb317cHaKVm6yeH6ZgpPoJuAd91Sz3VB5",
  "key5": "2QxA89Hh9kGcv8aFGekD4DzcgRy3wfp31WALQXvdSWCekEACy1m5BTKD1Qwkd9YyHFhGyx9Z8wYr5qYfQjm9mS8H",
  "key6": "3hQ5J5EJPG5gJLieqcWEanSgbAt33WFYV7e4r2svqEdw8yqPpbsMqNHsoHZE644SrdsDmhxibadxWEHqNg3QGM4y",
  "key7": "3BEZMxYgXxBBECGmJFeGALAHcnL1WAw2byR52aX6aVe4haJnaLmxbtVdg6N4ozXnsbzrBCjD4bd8Ysq28DDJ4q7D",
  "key8": "2AmATv7UrkNm7XYvVFz6uGT7sCpg6msmagohNBYzwPbTPv5AJZ5LJYs7ChLi7AbWA85HezaT71EqFMWFTKTirQD1",
  "key9": "26BnJpd5MFoUJvdveVFCy4LsCKXTtM53BKABLE1WTjQ3MJwB27KUE61o2dpYm28yN1myX4Umw4Aa4fGpiBouBZpo",
  "key10": "5mkpeB8Kizkc4rf5VxgfWnKPHrp9SJc6jYyJHKBo3UQgEeKSX2YCepuLtvK1mZn9hpGoeAXoFoSZNqvEk5tb5us9",
  "key11": "2DTxNJLA5Aj5osQgT1ahTMhtAzVBP8QyFCmzarZs2wyH7LDFn4e5aHR8dCZi5hQ6i8niDC2Hen97pK6oZyawn4bc",
  "key12": "4qEv42jeVSvTaEeueEiaEBGdmWkXKwr49NBhZZg6bVcL5ScFwRUZ69hJCgEZ6vhYGxSAsCnSG2wdrBCwEZXgC8og",
  "key13": "5exUVYjz6zT3z1hYCxXiamaLo5sUUfeg5m4LX4BXLuZMrMLSeAf9r5FCiRpe22fT1a4CnkHwy8H8ztvbm3fZEWQT",
  "key14": "ZhWJ8zu9gtwz39M2afWDWoodJtRiBorycDzKANhP4veByrVZvKh15xdLZm6NHJx2M6BZDKctr3MNXettQJ4nb88",
  "key15": "2UbuwHySPK9znvHRfYXw4PWtF3Ap1vFNDgCDU2ZNKLUeHKZxYPqwMx1HgyBcSSmGTGPU5EGS2SMb4Kd6RoBPoAwE",
  "key16": "3ngUwoCTKNLaaAh6wrnz36e4X68ZQFvtnfaKk2CcvQFcXjuowS68ioYdEezGQbL6451M6DRz6nWa3oWKrKEqGv6h",
  "key17": "Nry8neLMGEaYGyyGQ6DQ3Tmr2jatuwVc1dZkXBYqPMEoq5o2KQZKmwSvXrFEXqNT9An2FYJpsy9mRt3AeWr8V9i",
  "key18": "66XYhX3UPVwLmuZPXvvz3HvxdNtqYQGqbrqVJVCA1gGTC5PwLfvrT7tTofa5DJnHS9v1GNWowzfUtTsJyppw7sdm",
  "key19": "4vncEjLg89BeFrE5jK3E3zBqHnGQ9dDF94rqMEwxchKSzkbvsjbUPwu72XuhpXRv1ZAz8AeuPF4ZJZD5uRqhrk4p",
  "key20": "5uLuc7Kmt8vYHJdBrA9VpoaDhHt1nepsoToAfr95gtkkcJtcJhon93HAeTshmkvWxvpPzfdsWPMjkF3K2F5Haoam",
  "key21": "2MJBhwKBhHjetEJv8K4QVXrhN1BnAeyECvc4Sa5LQuEJXjbnhJrfLeN1qyCZDf7pFrx5AicqFPyd4WPyjXtk3fhd",
  "key22": "Ts7sSZX6w8FV7HdrWjbm4QRGsxnvBpPvMoYatpWvoVvcqMg5fyKpFWtQVY193CEzD3oe2WmCWdEsa922F1DHyw6",
  "key23": "2RXR9WoUPftytowdgsFngBHv9TvJhY8GFSCzejmJKEDQY1B3ouUWdEAens1HTuZtYpGMw4YtCqqfXCCf6qeHPUba",
  "key24": "5W5NyA32RQUsrFNAeyjztkWswQDbsXXRbS1tosSGGQ2gjy292XfGw1wF2b4Jx8mwDQkPHTgmVYV14f8z9gWiy1tU",
  "key25": "5kB1xqbnzMsVU87cA9VYfkougnaJfha67ksdVXVWboTfbxafKSdDMcfiW4epsthC8iW4QFyuiq3kubW7XVzaHPzn",
  "key26": "3Xrx9evtkYTxhH1HLA5ivsu8fbWMgQi9skw66ToEo3uvGQ9Ni3wuDaPJjQeoXnQUBtyMECUctd6aUqfCPQmM8ogv",
  "key27": "vx5W1aHxowRNG7FL2KhZae3iW3UB3wkbVhu7WR7jtyy1YyGfwziGR7ecqu2GvxP38M9PGLk77JfHSnQBhRAnCpY",
  "key28": "4Ryt9HuVFgzQDxrURRjrGo7GwbibzvUcoRgL3gr6wRAUiV4XH6SzU6UQnw4eNNU6HD1JjG65nGHFc25my88ycaJL",
  "key29": "4B7FxGGyounrcDyK9FwX6geAwEFWDzeCtr17PqdWEJBuCodw1CeY7WW17bUhbcZ6P5N5ho48uZ96QJC8SKkZS1ML",
  "key30": "3g2sRPjnHyn49m46xjw3RTK6Lex4X4ATBAKwd5KdFLuHcyozX5NEk3ZwXAycmUqxtN7j7pyDTGuPK9WDPfWphDhg",
  "key31": "2hwzjZwDak6eAiKhcR6eD9kePyamCbr7t3SZD4CbdLcgC2qAbavasV1NNT4Ra6uQ6FeYv1abFdSyo3qbiwEKNHT6",
  "key32": "UUyvSBeoodvj8m2WgRV5KUp63tcUb3kMpRdqXX7WGSoam6t3fuMFsoSzSDBSEXoKnPARMGeurhE5pEMR1yqWA27"
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
