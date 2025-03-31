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
    "4rTnutnGBD7F51GNdut3i6ySEWo4wfYKWWmZPZBuiux9CUXrMCDvjtmZJLDYQC4EUh4zsjakq2SBZAw9V2Sb6FoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSJpA3M7HuJieUyh6k1pXcANoqehwmEx5p6qNFRToGCN38gzGtwkK4ExPnqrok5ixAH6HYTAXeYDjLAK1D89Ed6",
  "key1": "qNJeJvbWjZkrLxWCeNxAC8BUSwwQfFhtV3AXFtN5xVpZiuvfHLDUSFeu53vztQTKm3AjCoqBGSqaupvWpTNHt9q",
  "key2": "Q3yLCziJD1pDgTRU61zRn1GV6xwmyMf7fSZho9WPuhK6dyZDUFMjKZGJjzLnQRGQn763oCorM2ac4prHmUzN1th",
  "key3": "nAxTXfsQuR3oqYDieXtU9LhmX1qJTCgoVVv3FJiNxDGM7av9avF2Z8BvfZ5wh9nv9WYWjDYctdbsrNgVs7VojVM",
  "key4": "2QoWyYWGxPVLzoixQw9AuzXKHKtGPLVniVjWieYsHjvtPZNVNYdPHrvqB3LkhkRdn3FH1qfGQQfppbNSKst1auSm",
  "key5": "5ThfQaFXT6UWcSUEGSWcrZR4mGSRQjFqE1o7KUubVXSjFzX3AZWuSPK6z2ZaovcGsR4XZSbuSvmo9Su53BYBtrya",
  "key6": "frhuT8UKnDpiwBoMhc5VjwZGbMALPai8wYNZTrXJtVVCgEAJALTPq29MQFvX4SX6KDrZHH9CELQmqYYtMsussHD",
  "key7": "2uXLFRNCeKRZv7DGu5N88LGPxXMaKABKBEybKWUwXLkrWQJsSb7xZAzH1S1RCBo6YA4werUbsNZsg5a1AfoVJCsc",
  "key8": "63fgYfCivoTVcUqgf221iq2wStFFuaRy1hTcesBw7RdREJnzhCiktEUdk5HHFWLvrncFn9Kv8wD4yPPhzLMMvyHi",
  "key9": "5zV8K3jhSW57Mdf6rayUcaCkBRRr7hbPWKqoyanjgLyW99c15Nw3V1A8EijTF9nsXc7MLztKN7QVSKYccMymGNAS",
  "key10": "2t1LRekF9SMZnxrjJfyXpmppBxddQ3NijjNFpVc2UqYAU8syhWQ4TWtYbXkG2KcVVUiksd1HDXsbYPSxZceKuwcQ",
  "key11": "33mB1m9PxzLkh1XsLsWpiABCab5tbzsWAdK7ELtxHGqeVLrrNt94JCRLQf4DADixabsGMBr7xku1Ar5WVNbYwqYp",
  "key12": "4M4RUk8YgTJUVzj2iq62ta5CZG3N4UEtmXQUdLvf61H95iViNBTGLdzmSdmMJmrVw4hP7KaCu2WMfbAy6mDZu3Pw",
  "key13": "4cwhxyJUF7hhJZrvXpjDqTJkQMjQYA3Fy4g7jScH9UcT27Jkk3ZX7uTZz1H6PbGNcPyKx2173hWiyLQrbHcEQXuU",
  "key14": "67Qb13faaWh7axFMonKw9ZHEuK2UYHdw3Au4P7MnL5s94TiV3E3Jm6gMXovCxwjCcQDvLorGDR3jA8e9fZFsJVF1",
  "key15": "5bmqNPhE98qMgr5LBKjGPnhx1jCoXnV6R7mfJxQgiqdVz4o8Qs2CjsGhRJek97vhMXcXcPmbeiYyMFJ3ghTTagfB",
  "key16": "3HPz9pekWxHzy5J8LNDTzhTp6QduJ4QX3cdHmx994BNyBtWza4FS8qPhaY5nv5XA5myyjjUF9Av4C6FgayvMrhSG",
  "key17": "2j2drgk7dFvfiiuNJfh47qQzP97cG4MSwV1jQixD5qxvRpVi9hGNcyqHmYVjBTU6YZZKupyLrHxeBTidpV9LkR87",
  "key18": "GwZdF96iZkSQP7yKsSzJfpJavqZUeztCEvcx3dfpyCDs5gvUpmUFhGvio2FCKDbEG2sKrnFUpgQdnSm9yL2Enn6",
  "key19": "qGbAtvT4w6sT9tEiYarZpNK1Sxuw3MRUVsfK8Lzq3FTCXPbRjeGBxGe3KAWirCFZpkNr2nKYSpUzvVKWM2Cp7yW",
  "key20": "2Rn3zJBH23AybVVGiZ2S37WZdLCNGZUgicwzPi4SGZNWgWtyqodySzKC4FuxVucitU2bRfNfY7rXYNQUXMcVQpE5",
  "key21": "2m2JncocapuMB2YQFwoeU79ajb4cuN9ak9nMK26zj8dsambDYse9scsq1t5VhB26gZKj3c2npSUFm7MruvK1vnbA",
  "key22": "3BuGgCtAXJGcCzvzKAYRyFguYBg4YjSfyzHgiXfvPukDjKiMBPX7FkFFdBcJb3mGxWqT3GpqpSYp9H5P3eGLsndx",
  "key23": "5p27tbK6jnafveYny3mETDJYX3AKN26JyXkPdRtwdEQFoqgemrrGWyGm2rQmUPgfZieM3Kw2MsgTwghGxuU91DMv",
  "key24": "3p6nYisjDUUkPqugmEQpY8fZD7KkNr6DjPbJth7ZZGGTsv7vv7oPb2X9nedS58sj5FQSJRxACvEAbCfTBGrehBCd",
  "key25": "2upX1Rn4usRLPC6nmSMVTgLNmwj6ZBva1vyP1nBpt2wMqNGxwggoMFTpQsjgz6RtSpzbyGcNnNbg81bzXHRaMDTV"
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
