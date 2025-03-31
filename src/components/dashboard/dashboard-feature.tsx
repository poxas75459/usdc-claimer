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
    "4WWrUB8gp3To86cqYX7pTVBYeqTx6z9FXm7cJYfboeARReM4gRLzYZJbAtqPgoMokdBKCtGkTVjk3hwv6yZ4Fikg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CYVjkGsR5sfmsZj7QNvudqFSbDtSWdDccN4ACbSMX4LyRiDCfQnPQSWzyyXiMxi1bmZHcCpNEnzFLBi4TLaC1d",
  "key1": "Yeg63aHsN9ygftgfvJJcJytWTk7jJDMrrK72BkESDvQxcqpG8Q443Y5yAK57UxUhr29sPwS6zTT3kEykscgDNs8",
  "key2": "3hzbN5uRn5Py922jXujSAKjaULzzYv4Q5yTeJqkZV9GN2nHJYv6Et676qfXWRaZ8Rd2VNm8gmqZYf1Cz78NVrBsQ",
  "key3": "2eCpYvrzpgDM1biPectFiQ2T3fUgvn4BaZAFMMUs2eR6D2dHDpczDSkZCZ4pajjQWvZj6Wc5rmgG68KiB9oxVYug",
  "key4": "4yp9bPpD8joRozogqdmcSCv7uswfEegDHLQVCt6eFTdkjBP97Wsqoveic3ThYU4ErhZhnLN3pruRYvhkEc9w58rR",
  "key5": "AWhWPBZf5U8qJp3E71p62QpT1MEzqcweKJcjbrNXNychssXo6ourYjKRCadTDs18RhMF3M3VtMb8cScWCytc5LT",
  "key6": "5bSnh6Ms1DJZ1n2J4mnnduaZ9wuhdWRGeig7FZdiwe9eGcxrDRjqjSoxtbqAJJJr8VVkaDtgX2BkdhTjnfzCrkhT",
  "key7": "3HDQXDBfzC8m8VrvtF9Z6oLJAG5PSw4AFNbcPJdL5tjmBc76FdYjhAf2d5HToxjFmXStxXnEcy9zQyJ3QJD6zgbw",
  "key8": "5Xanca1H2tDgrLNVZQinxKyvST11taHpBXudDCXKppGc7EjP4VZWRtmXuRkYwzaDyhXCZME28fwfK2RV9xaRDH85",
  "key9": "GNLtT7UFSEPhKMnLAT8rLyq5fS5dGbqfXQhMNUzUrQXrLgG4gxqGU1jDtZLC166eVUPTfMmWBjF5iVxSrQGU8pV",
  "key10": "nr7c2LJfbNcsG9PbjhQ2ED54WpvVTVZxgspQLnkJg1MMEHYkPgDfMA6PTrgYbzWejENa2g8MtUkwyyaU6QErAez",
  "key11": "4rtUer8yhU2SPQSz7YqNd35qLMdkbjEwq2pYnXcj31GYxbN2FrC4Uk6N3AKzeAqrmFMauMxpbuNQNDmrf1UGqb1y",
  "key12": "5AKuHXmhCBBZ5sjAMm6p8JfGH7opG9kfHhUmZXCBm4VUayVFhz67DwtXkXieajJHw2x9ht3rqDGrwuHuPYLqpU9S",
  "key13": "3fMz9CciwB4MWawkxqwALB8SdqXcaX8of6fhKGbYJycyfdHUwVKVa7mQbtrmGAHUJYRXKoZZ9wcRf5WFF3kFvr2Z",
  "key14": "4n2jH8YFzfazPocroiigNqu1TxDepnXrE5HnC9vvG77nC897thTjR2Kw5WC8yGjj5z1tjKHzDFgt68gWPnssmayR",
  "key15": "y7wCqQGuyATt2WX1uq2yDH5gNeWQ7Gxa3hJFYXEC1ZAm8obKQ2awTHBhJxJmVX9zQyNy41AZ7ysBzwcTeFwe9FY",
  "key16": "KvCXt5gPnEnN76Ed4idfXTxMA8GiLvkbGQR8r4z4MPPjFpsyosSY7pNftzNY37ELfo9oEnqAyuPZEGMK4HXbsGP",
  "key17": "g13a8WW891e6qckqByNSW1T7P3HQUQvKDyts7iQDhJguZ5zpQbmvJ4f2idAB2yRyvaKw8NTKFmPsbzPsK2KB28J",
  "key18": "4XcPMHKSB6c1FpZ87rEAAHrjuEFZuvSnUVH6qHnhK3jceRJU9wGkkmKY2fhMBLiqoSY8rQ5q4CsW4EverR7GWYtW",
  "key19": "2Lh7cz79cZ7SWMew6MGEfj4EXkoxu8Ku1TK8LgVBbsKZCf4p3J9gE2tccuD2hyJgaHJoxTJB2sPw7bwQPbrkwRk8",
  "key20": "498L68G2sE7Sx2E2tsdBZbeeZpYdxBwzDMgUSkjp59F1QKHcWapVWjfUPHf8xdaEYVZz3aR6kQTnhXjZWSRtwVWG",
  "key21": "27cJeRmruq1ybSFWVEhn3oTnLR4E28fYo9vwaVXwaqjZKrSB7vsi4fvoxM6BCxne5SSoLdSesKqm7ccT3AcqiYg9",
  "key22": "5tGcfQeLrY3Brm4emu9guM5RqkVubZ7gP84imyi9xWr8DeQU6jDNo9nZKJnTzkxDYdn76aoETcBFezwTFppW6Z9A",
  "key23": "56LMvG2KCVidND9LXvHhwtUAY9i9bTBXKeZmSAYSwJ8hfACQRWMH5pgoYREzfAUBrCaW4hdjE67VSzj2f6ro8YcA",
  "key24": "2xx9xmGoUFJSFRNeVeVyMyPguBL6m7BfViHuF7XbZYFeHo7BrFGq5HkGoSzkazUNwTixV9b4T8gXtTBLWpYK2kbB",
  "key25": "1w5haGRnPk9yEKwYpxrxGgVvRcQ5ysAixuhimhQwzURRSuregZJNmALxSVr8GNVBUmqf4KDYv3pyfwAaCg8h8Ny"
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
