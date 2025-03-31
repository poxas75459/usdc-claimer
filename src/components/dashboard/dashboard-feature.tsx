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
    "5Tdav85KkANv7T6Lg34nof5o5aqEV5BWY3yzkTSiUrjCCAJqnB6J81XZLpK1yGxG9aWWGC2dcfvzpfj8byJF572Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xFCVMApgLkY4RmgxUgjUVhghbZEyfzysbCPP5WU2juSp2t6QKfiFrKo8ZaqVjpjs1afN4TGEqkbP9apL6n6vr9",
  "key1": "2xxAXQowVFZ5q8WMGC2SefREPj18uiQkMi58me8tqnGMWQivoKf9r3GujBqTDQRwZ8mK6fXh1n5h4HH67W4294G8",
  "key2": "4oK2m2UjfrGPQDVvbhWUXxGvcRcLCUWJNcmnnQ38hVRo6HxikPz4kneNfSjyTsV31ZXE8BBPabBLpH4KEL7XNnHG",
  "key3": "427M17sxTXeHUPybqpHEyPSjpXjia7CYwewJFsheABbcHcGxLeYxaqjB6sMueote5jzrHAh26dQuhKV6PZ4T63Pp",
  "key4": "51AQ5D5tQFXedYR9Ui199DDundgR9B1cwrzhnMpKAbAkfuSVMvKKYZZpztQrczRjrbpssjCvqpgMZV4pziggCh5L",
  "key5": "2eJyqGEjXsdcEbn7APKjAHgDDV9ZbXmWQYNstk7oNKweUiqxLsF9xKL3evoqcaFm4sJcrn279wM9NiDq294mpYii",
  "key6": "54ncVPzFefav26nZ8CeBP95Vc1a7UxrGdgBtE5XtoFya1z7sRiMRqJNjFfQc6be7Pz8r2UR4SnzUVP9CYjTcghhm",
  "key7": "4XzpmcF1pgU3yHaNZwMEAX85mGsm1nYJzZ73z2zStK5rFAVZVDxLAkytwK2Dbwh6tBbgjiphQtdVKW4nYJLGA9tc",
  "key8": "58XZrtnx15LKckotagkYPpJLH9wJWHtwRxhkBhLC24g7SgecD6mwFpbMqZtBrn9HBVoXeKAwjmArRSyM9mC9PANr",
  "key9": "q5MZ8SL7mL8LiarRZanPPqrWJ4BiMc2WNZQeCiiZzBX8vg7KW1FDMpUiyM4Fg7otSLb1ortmqLQDzFNZMEX3tdg",
  "key10": "uvS1FANFtUbF8jwWzXWYcWM8a1Gt4HRscvGTKH9djguoaW5BJyWmC8tRG8r7QYc4V6ShRi5f1arfDB5jdsEgAWD",
  "key11": "3AAymke1j2Qpm1wHDv9x8ygPaWueS4zQppHGdcHpEtKzK8BvmpPun6ZLWc3y8d5nTm7zb1esvrrMXJTwhwmmDYnX",
  "key12": "4xkqzgQsqbPVS1nm6nLLyN33rWKVUjHUGfikzAdgvQxNdv8JxmBUibTmuHaPFzgcDwkkB9hyyzKF2QUsE1bP9bP8",
  "key13": "28DzMJ22HhoWZ7KWHKAw5nx5JQz9B8wAWm89deKAJAAuYxLkG7AkoMAkZXCKbi5pRYMivEWGrEPBa66AVPmbZJmX",
  "key14": "4DuXPe51mUXcEkjbdCkxA3hdgBDkEAbnVeHMZRx1b3MENEnJMQyamt4eVpXTeDGmAqSS48kdh6p4sjjPQXQdBrMN",
  "key15": "2P9TsMShe9uNNEhxVoyjQEmms4s86M9genHLwWbm33qkmEheJBTWAbExVy1TTedv9B8uvEuvrDYQEFFQHb3dhTsN",
  "key16": "2njwHijv3KH1uiWnxADr1xf2bt36D5y1B2va7moYC1E5MxiTVYBsA1vMedeez71Qgxoqa69rgTNaqZpj3TKZVUoB",
  "key17": "3eGHGd5jwVAJH12s2PX8gz1MRnbfKRf7YezsegwtXBbbGHhSwKDB7WXeeuWB3Rx42MhESJdQC5mXhUCaTifJ9NRc",
  "key18": "3RJXNkcXfc2dTFNcbzCziuNVfpy9rdw9ufgEh6yjoRu2W2x25ZjU3YJSjdU77Hhh7mZ1JX78ro6sixBQR8qeuRfH",
  "key19": "2pJ5xo2jrM9PTsBnHLrWvmjnGsM7QKG3Y4cVKqohbNsXwMcemwHvgSdjiaKP6BizcnN2bbb31VT96zwxpkHtME3z",
  "key20": "zfiehW3FLMo98ELd8qNXyz2t2hJ3FGfpVpChTMEbKw6UoSWwZZ2chKAcvMjsd7QUnQYY3a4nWNmUgDB13mgficM",
  "key21": "5MbzHbyBqJcpmLxYifGVtvjwCYrSA4NutwonZXx4yzA42mxxZ1x8MfruLWbJfaH8qurN1pP2mu8PP6XGkiFvF8YT",
  "key22": "3Uw6YqtrsuqXf8vVDuZspoXkVjiEGFUkvHYhj2ooTUMGpWQ6czQEfu1YiHN2V63wkxyBmZz8S8wmykUZ2QDyq2bN",
  "key23": "4LcVLi5kcwbc3cfbNU95jjd4tECbFJoEtg3GNFoWmRXhdosBkDtfeYTCAvTf8kWyiCYt1xLj3WDqa8HkEiWBSYes",
  "key24": "2hHQUxHmzV8aU7PLRQzeBMcKy9kXH3YvoPe8eouuEoSGtSjDhZpwWatpvCMape3TeLWdUxie8UjpYgPSJvEVNiqr",
  "key25": "m1xBTgoyn4VnYsAjwE3gFgD7LRF8gQ76myEnf4RftCvfDDX9dH9bURKmLhecmDZZjzuyx5YWZQPws4xJkAajKg7",
  "key26": "4wnq6ZFbamD6CkTiSft4Jiic9r3jhnCbunB4LgQTo3ey5TMPX9YaYQk8dag4h2b2WvvqJMaCDGoTnQ4BH9YiF3HN",
  "key27": "5mR696AEuTZR1q9DqR7ePDACMUCtacHfygGjQCUQgwi7h6AcQfhDbKtGj41K75DMT5yhcg1xYHVQUZAGXgzxZoc8",
  "key28": "4228ttUtB2Czoe5FZWAW5ZC6DkELMKXuT6GnqK7VtL6ZgR9VwPh35RrUWmSFT95nAjQiSEWGZsK5D3AuWgg3N6NE",
  "key29": "383vzLDJdE1UZf5QvERu6oarfARGCG1gFyLaK5GBz4SWWK2e34QAiaa5DcgLSNHk3Ssq4hHJ9JWam2gZyJXCERzr",
  "key30": "3muM4byDdGhMSQvjqKrLsnsw2a1rw5418gZupYdCP3k2iAb7Fqx5UVSDxSZ9GYeNvixSjE1wREq7EULsH31Ncod4",
  "key31": "cqk4Fq1SeqSSFzu94fLgFQ8zUuVBgrVFKyJakbf8wVJnnQZLzMbQ8x79N64Ydbhc3BsaPYsECD8rPHR6uAG56qB",
  "key32": "2roHNaWUoDAG43BtBqoxKigZnhPCsq5sp8U5sgs7BYWiHqTXJhm2wfc7TXsaGNR8D9Vdgu9Ac22ogVmxoFq7ZgEU"
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
