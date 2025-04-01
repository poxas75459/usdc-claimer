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
    "HtWPsKLkvJT2Jwk8rYpJm2avtBfg8vMkmwMwfwWvyEeVtLJ2tyNLDWfrgEuiwVp2Am8bBGz7DqPJrG9MfQdWZ2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PfH9KCqE7WSVaYrGcPkoGyX9quqQXBKeXC2h5upt4fgiVUyHSiYEfaTThEFhAJZGY3vBvFQ43YJ34sGeMjw3o5",
  "key1": "64NijxvCWg8ZXm1rGVsPBZR5rEiZgkijYXWZfrnLt64D1VraVGGMxtAPPW24gbDuKN9NVFT56n4Dog3xAEJsKEu4",
  "key2": "4kdsQRHiGz9vYZ2MMppy1SxZB139EXpom2VMsys9xYmFWAkfBrX3JGyVV3gYsb3CKNrT2K5yESWEG1QBaKFihHNC",
  "key3": "4g7gUmHrZ4P4vyzSBF6BdirMtEoHorqSkqhNZE5Dfcw8C3wfHs8f4MkxnAnDhvG37e9mnZUYkDBjwKQkkf9gwsjg",
  "key4": "15L1DVpDXEApvpMsedcMgWdGiLbBPfJWj5AeRPFgHUtYNqNi8FuYRCaVXhqLHxAgrp3juQvDnmScrgveojqJQ2N",
  "key5": "aB6doG4bdznY7R14bSHU1ftFizdgDkvuPxh3UME19Pj7JFpHzBa9dhX3PYKywcuEshY3h1xrCi5je1gokVjzymx",
  "key6": "51XAcnFyUgyae9PkVFV46QLTaaTYDWTxeb3LgUXMTgBNYcDfaGWsDPN1cZiMCp8yTSHE1SUPMvkncxtbMJE7VBca",
  "key7": "5bEEKHfawzHNidWSXd6EY23DnaHgX86TiURiBPAEwCcdAEJCUkCeo6H1MXeuMbibyN822EbypqPgPvg5agZHw8w6",
  "key8": "587J4DZx9aBye4ScUt26RY57E5CTGaLYbiqeyVAy2EYb6Rm6ULZaMKFSnC2t91yypWS9bf7tCSvhHqj6UZXXWV82",
  "key9": "tsKmZWaGsaLvgBq4jeG7s9MkPT5WuJ5LULFUQKd4GyfRHyJ5zgvag4MCWcpkdQHH85UoFamsg7vpnTR664bEcoi",
  "key10": "3ajcSBMSMFGSFGbUxSEaEAEYeVpDDFZrCnSDG14T1TWBXr7XKxPhcZyPP62hUeLdhegwkUkhdRwVZ7ZinaXK4ADu",
  "key11": "5vr52whJBZmGE5gK26Ef4tVCijXDBiVPhgSUT9J5B6zMsx1WoN1KzAcfBWpxLVjCZrnYstskYwCwPqAKpvuwnfPD",
  "key12": "2hHG4bPacFWrJGZ6p5VK4y8mcECsj1nNJZtp41sD1DKRL7wDPSu6tSbuFv8ToiG4CceavbV87dUpEaUCd4EUUy4f",
  "key13": "358az7Lr9xNDdbuuPjP6uDsqVriuSzA1vMuoRTi51ocgCz4suEWnBkmtrBmSNfmaLq4NmfAb8apNqiFjBMLp1ybw",
  "key14": "3eWgQG49ex8fF4T3EPUFmFgXpScgvBMK3iGJvXQFpR97BWUG6kvfD65zXs14w7x6aFwNN8x9HFutPnCKEstrxQuF",
  "key15": "4JKaES8qfQFTGpi4bhH5RzX8MLcmtMbFFRt9qMPGBrx5eCPPSKRo6o6tfVJtJguGfUK3eYWU9ZadvQGkzN9dH7BS",
  "key16": "BwzEw1TjDsuVAoGbVbTauuvyoY2weiWVd1NRY4RLGEvjQpBCduCkBT8oeVzffNqTeqY9G3JS2k33v4NCNqbshn4",
  "key17": "33pDXF9Jdfyc9Mx9tkfxpRCYyEJzRKXnKUaxgWcY9bauGpZvJku6WnJUH5c1HGJ2nEbny54ECBXWiBpZP4Pvdev9",
  "key18": "2vH5iUeU4c5SrntSo7j384SAS9nvVmwcKyefSA1rhRn7DaKkGLuUXHqpZq7fQx9kpjos4uTRmC8rpAQRYCw53NiK",
  "key19": "65M66EAkfLd8PnuBjbmPbaZE5Npgyk4pj97ZnVz7UucDTcNu8Hr6LFTdPHBbP3oeDTTwdxGUSQtTPmqrCnH36qKw",
  "key20": "HPAwEJk6E6uvUApnxjhTwSFpEStxpnah94tGffGUGqmbrN15odKVZS67H5572BexaExGxsDuDSdgZhctAHmEoJ7",
  "key21": "4FsMjgbEsqzjDmYhyHoZgLUnEpEFqJ9GFjPkTjg5PR7MWYUKLV3gUZ33STscjMDjVf9JiNSCWr63CjwXGdSgAodr",
  "key22": "ayg2xLgCPVEN9yuqpd8YSwN68Jx3ZrPJiPdxU1rnkKCaq6uZktLpw7ByiGtn81BqTwgKAzdAJb7hVzdH9VKSVaC",
  "key23": "5VFqgDaJV3P3naaMjPC4ReMAdbMq4esNJR3Eo8f7s3tXMZReuHosfP5GbKTwLzmh83qXXmj4Kyuf8qJrFYqCdf77",
  "key24": "4HkQpzFZ4y8NJkeZbdFhr47w7kt1EevsPSAgrpCkKG2XxqHP9EMFK6BKEwnkMhPeELzQduuJZk2ytDZ2t5hDPzTc",
  "key25": "2o5WBu9Evr4sUy7R1tyQrTzrEW1wA1kQoFQeTrtQ8qYPM1f2Fpue18HN2hhVVhoknt8WRhNtYScEPYbhCaAcwfm3",
  "key26": "5HxwFhSeUUJhc5SmuP1LXLiv78dUPVBNRYrhtRT5J4f9BXiLr9pBEqRNiupPvcbuvwmABpxH4KGg9as7LNUHRDP5",
  "key27": "5yDULYUPT3mYXNNgqPakUP5sVsxMAKMcdi8Q18HyKyFnHfkpmBRewVzvWWTkpnrezmy9Cb4K33uutjGmEVjxakLQ",
  "key28": "2YJZBgBTAjB9UzaFjKNw9zvEFXcYLSC1PLFa2Fk1odhstradXfNaAdhxMZkcXY3q36RA6wb6tc6YRi2rzY7tfXu3",
  "key29": "3d3bRmRgBCYsJZd8eMq3pvpunfTfCC1MkY4h3SrBFV9oypsyKW6m4CS8fYN8trP5nzRaiqbZrb54ei91e4crf4BB",
  "key30": "D4UhoX1FuBa3fCuB5wjtw2bBCPjRupmXBV9GszRoAx3HjfxJLdGut4eXLFH8B7AetdSheFewLzkWiwZyZnTdF5W",
  "key31": "zoH4kjoBywEvSNbArfpyc2ahm6LghbvFChr3iLQrm6ajxpXXS3XsrJBsVLaF4KfjdeQo12NnsoN5pCdu8MKTBWa"
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
