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
    "4fqUWB77xfiQtBDHpDg7VesmKWgTzKzCPHSRZRBeN5rnG2F9QviewtTSJeMfprQzd97JAGkwHriSpa2jWvP71Ejy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d8synC9Y9ft99zaWTNVfeQHij25SaNbyi43hEHF9vUC65hpXLRUEbb9vNhJtascd5aXx13bt4c6uzc51gKB53hu",
  "key1": "56HyAFCkXh3v8gfo5yA9czjXzWeTkZeDteoZucATdtH4sUYm8BFAF83BNVqjN8hVewvrESZacyegDnd4X5YKJ5q3",
  "key2": "2RGTPFW5YYJAQ3iHcJ4PvPMk22p246HJCmBMC3g1N8kzdJG2jfd9aTTzqFrGY9kfLUzUjMWRLkGH3EDwuV9oapwN",
  "key3": "5Tw6YxL1LzYYMUFpf1292UxupTB8wnSFNNCkzGrxw8qf8a1Q7zpPuTEBoZykJuBLpkw2KeE9TvudrqZpvuULZZBo",
  "key4": "2gxt76jtvBX27JhvxjzoC8pQKD2tjZZsop3arcfA6tUkPwWuwzGtcvt1fE1RFxjMb2irqoabPFGz1oZDfpCnhVQM",
  "key5": "2XJdD6KFm8VhHvVo7eEwx6Wq7VTJC9wQQm1aRkG4mQo3C8m9DpdAbq7vdk34hrSijU96GpcgVgMsEwCkxRmqCM3y",
  "key6": "3gWAoFAUH2hf9YWuoiSnb71hwtP4RvdzC8y6749d7hHUdvWtva2jXmvsWJz5xMxEzTo85iGYg2S3RTEY4tHuHE6f",
  "key7": "3WZkVpRFzbEHckppYtxnx3varriyrYMei62TGYDw97sjkWyrojvkMipuyEpV8GdtRztqN6oUrEQgfKLoHbjKmwuo",
  "key8": "4yBoY1MqrykiiCBj3WALaHXBRnzbBeGWGs3janFwaUnP9csKdQDqTdX9qtCMX6hrED72MWCEKGr1NRa1byidaefm",
  "key9": "3NrYyfgYTuXRazJX76zm3qubZ2EQhFh8W35bV14Lnegzdpyui2ZX8fWjp7oSi2DSnfTz6x1np1vEHVwVh9PWRgb",
  "key10": "3AinxQtWP9cQZ8rrbyN7kzEttc38VZnGHPFetoo8mX4UuZXDmseKVXtQ3uyRyWheUGSjve18v7NDviQerk8HYzVh",
  "key11": "4KZ3DFJxk1d9YCqUyr22xRzS6nCMa8ZTSgZ95bvZJvf7Cvmkp3zbhConVGkNjXUb6HDvUQqjTThR4Ys46iJGonRd",
  "key12": "46ahZpY6KDk2J76kqjWurzZGLavp3TVMbQv6JBX715KAh9kP3JVifn6nVdGrrhqppjaSBb2k3A6b5HGPh1iXbuCi",
  "key13": "4UaxwrjUfM955JoRfKZH1YLwGNkfoDhg5RQQKdokLJD8k2yemqxeXgyEEenZGKJnxEFgGWjZ38tNKmJLxxncsArF",
  "key14": "4BLRXw9jfHn2VFyR1n1vvQokPNjrcvV6m51Tc1XQSBBJrXsGrHiA9CB7tXC9memd11wbeTNgCymrKXRmaMs8Tgey",
  "key15": "3ev5GUMF6ZJpSWcUUh7mesFuC28EoHCtVKF4JUnswfXwYsKResA9MhuuD2agMhosvNFj7xd6C55z2LnYJzyGbAio",
  "key16": "5VcKinj2gAx5PsfbhZmPMLyiwdsnYpvNyiHcKF1rhYadgJwzVrVt4NFvhCvf73S28SXTNH1pJttYLeE6WzBmQ7eL",
  "key17": "5XZrQQc8R53oVxVPSNJz3dfmMRaZu4Mc2TtM8Eizc4ojVwVJQY3vZiBfk6pqVcBiv5Cho8fp1rRB2sQT3qjJHHCQ",
  "key18": "2d9GDhGdxZtYhSRcVY1SAQtCvdKy1wY2xGbWGCt7wMWzJfETjvMnUTcSNt7UBdTa2J3W9XN9ZR7oyw3qJsqBNpjn",
  "key19": "3GhaDMsN3GLidYq4C6ktUnLTNbkZuMkJ6FJJMNPBeD8Yr5GypcH9ZVAAmEteiaEPYRSABqfiJMdyP8rCyyN6Qaph",
  "key20": "2Rmb9n2eB3tr9Rkd5aFcz3hqxwkkA358jy6vrAKrSEvxgDM8kVETRmKVE4Kv8DPu3cLxZQ6peA1FZinSFuBfmDuW",
  "key21": "5yMhdYF8ipRxqRa614BKcqijVTx2pCVBackK4grhCbV9BPMz48ppuRdhWkDoyZfYrKxZSFRsHxhjDQU5PtAa9bQr",
  "key22": "5iyrsDpBxMUHsW4ye7bXBt1Vp7jgc3yQntCqox2VbNXWq23PnVuVhayNgz2kmTVwDCNv1PEtraFmoKqvoxw7iGBH",
  "key23": "54aHnkV7JajGttrWdkFXhnHxmqy4ah4DL5FmWnwwm7DRqHAZtA5Y5RTNCrJzESaaBKc9uEzv18wV2NnbXsUL5afD",
  "key24": "2Vym5JTjCkoUYuNAvh8PxZsgVCUVjZ4pe31L391g7NRgmbMmV84N42QYK5orrJ2ZpX5EVNqEqGuNS7BdRFbyrmNb",
  "key25": "5JEhRA8STsPT7PnyHF6sYVs9Ra4PBpJRCRGCRgxzEbKKJtEyhqCCNujAcHUHHjm4PmvranTCavg8TuxTakVHNnaG",
  "key26": "5rhYGpgBxi1wTgMWdqvHWduPo9JNUmhE38caqUuadGKQoym6idcDG8eMYcQtDxQLKyS8vq2nvg6YK2TjoUuydDw2",
  "key27": "2K2eZLoiNeF3pcynMuHxMUpzxqUkTtE5ft52adForVHZYzut9odzUgH55s1zpYBA7YkTS8fmajPNk2gXGefgvgAD",
  "key28": "2GLc5BZQEDQ4aYkXyNiSBYZFcj1SPyqstkRk4dpDMibEFVmuY2p4dKXb9RctwUyyz7zXqWKEzBWMBKxNNaepzKtx",
  "key29": "4vXpRZ8JC4aVG6f2BjPKDg797eks48xpd7DBW6UJgDfP3sQZfTuVuKwx12TBZWfPj7JDyoRjQzA33gV9Q8bE7sy6"
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
