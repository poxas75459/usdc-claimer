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
    "4VxNbNvWkwB1tAbtZewtfniyQC8rovvQWJaaNb8u62ahArX9GNf1QuFphpFiAAWaX6Bw36FyMdL5nGor5ACMk9PH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmmMhxfA98vED6YZGdgiPMxk926PGNjG3oh9zFCgKKEVyRNfMWDFxxANem6jPqxHZj9LJk6sSCaPigF1aJyrfNK",
  "key1": "3m8YVdvWoN39VBPHcgmZHQpWZBXaGUJKD4doYruC9AHQzcFoKJtPTCJHax3zWkucd32cKpqtfYAtTvpQCzp6rFx",
  "key2": "5V3Udap8X73ab3zCZYVFB6pa6K7vFeYXgBdZzQKZ7FDJJonoKC1Lz1sKZGPLcpw5aH6CrvrY7BMJo68ubPmRexWH",
  "key3": "nSaDiVHpQq4MgTh7w1N9vsEvN8BGvctNrdM6nnGHSRaSrfnaw5KA7Yetq1Q3iXZa6CE6iHHndMR8WnN5HwRmvQj",
  "key4": "3eY7ZQRsscFF7EuX7afcEzVuWeoafL3g42tR2MfKFGx5zVwZisRkcGNkU9mMQT5zjuHBZiuh6o95kMZTMbrggGBt",
  "key5": "2gPQhycuCBgJbfaTw24tCRfPjejn3PqVqAAeKKc1tAhc2BDQpvKCPDrSyxqTXmFRarpjuEokYHJEPu2tdw4u6voq",
  "key6": "a12fFajVQSFJWDmyQC7SQLbpc45Zw1QN9kgdu4tn2C14VLuvpt4yqd2oGd2jB5dgtRuRyTHGZTt9nGMm74XZY6o",
  "key7": "24qnwsc5GWGtDbJK7V6SZevSnVcUK3QsbyXWjHSN13JLFSc1zrypjApHHeqMtr3b4dDD9wPHTfdCGqQPFcsHQbUo",
  "key8": "2G7ovrBgMz9x75GnSovwbzDLAjtAnfuKtPYfE7QYRWUQ6zwuAceVzgHtG6gyvh1ns6euV7EyfZXdvdd4YaXWBhbZ",
  "key9": "5JHXuzYBGn6KnR9boYsgrrUUc59hvZVHdps6tVLEv79sSiV7LgvbaKjf4KwktzXMVknDpRWWRpa5yHupTELxE6iC",
  "key10": "w7aREQEeSjGasPQH2NGwUYeFnLQfYobaNGhr7RxuXXB926Sns8DRirVTCdwa8SeLDoYXnZE5bbzx8v3UPr8NDyo",
  "key11": "2gm2wmqz1wrn1oufHS5jDP5BeTWNsQ4s6oS4er6SprwFuWbvgoi6ZV5DSa3iZ7DJ6DwSLFTXSYRqqKo6yZj39Foq",
  "key12": "4J34Z48WQwmsRc3QYDnE4eDfawDbn8bd2oNM8z7KKwE8pBvyjbufg78gFFtUkmgLzGF7WpULdHJfpxFHzkaUfsB1",
  "key13": "43sUMUyVozXcPdpyCHb45Sqe8YBrQadDAi6qhXZoGctuyFf46zsJeWQstqDDyMCuoUrwQx9GgpBnhWktsDfMuByH",
  "key14": "FG1ctT33qJ5tvDgESU9t6yeZH1GPh4AQTBc9m13njEu589wUTTTMm37y1yd8i6pzJbKc1oBRhj5BPyAMchFhDxC",
  "key15": "63KUSM7ZgYg7BaR9L7fwv43dPaQ6mJH2N8B9b5aPcxCKochonaiCMv117eXHS6pdwrBpxpEZeujLdd2deNmdhHZz",
  "key16": "38q2eqzfZq8yJ1wC4Higcm4PFUj8bK9R8vL7nacsE9YbjfepmWvGprPiB3BJthWLHiHnjbyuJSomVweGkxpPvatK",
  "key17": "5c8GgoGHGFYZQ4G4hfKAsaHNoRZY57UtyfVMovoJGioMbdzJVDvXfhSAiN7x4prP2nACpXQGCepBCBwniUc9ZVb",
  "key18": "4wivzPzNyCDvjmvz5uKxpShW1Y9Vb8MM5wxKsFH31QrKduXnGpjvrcLc6nzC4a7k3G2Y7dZ4XqVZGaEe5mTjTvb7",
  "key19": "5MXGbMLMsE9pXV7u415NqUd1M47d27rUGhiTasEXknFvd4fqFwA7sxMDwJKT5or3zPQsTFSpc646Nqj5JxD3Pccm",
  "key20": "5VRz21mEbP1QpumvuxDi2gYMdg4jTXyKo3a7scj7gGKkMzd9vtn11e7QF3hiupE57A4epzjmhrBcy9PcrXhL1kcm",
  "key21": "3QeR8cAu7mHoeraPbM3niGSE6NGcgtYeQ9KFkE64j716meNbvsMU3PbMNhPJT6tyzzmDmpQtcRqpzqsr9dAiwEVS",
  "key22": "3BkVGNhkSeTXb3mMHgKnFrYhLMXMzmYuY2JCBsP2wKXW8ssKXA6vwcJ7uLjPrMYTc3h637F1P1XuriMp23NQuu3g",
  "key23": "UrHPiuNve4tom4HF1rq1kAUFAYxz5TEEHnczGVAkAT6koMyBV1hrxGm5VLdXpsEYKngakUkTUE4DNZ8Eu3hYtN8",
  "key24": "4BxWuYDXfo9hKwLZtnJ752xbj8dAriWdwvy1C88HwLXzxJvscGt9LqRy5gEZbGhKr3TdtxM1pjuLYCaNQ9fKdDr4",
  "key25": "52e9uUBUgjHqzCd7rEAP8XDQPufBkjQbyV1VV6wF2QcAKrc2MjL7Lzd5vb2Cqg8e7wKqpMBTbiL56fyLFoDfBo8U",
  "key26": "2anWbJEAWgsjukuEbmJ2pb6vyWpzwSTKps8LFutkp3LGDPXn175ktTntbUrGmoHosQVvzJqg7k1XLFMqsxXpA8Qp",
  "key27": "2MSN88kiz7ovd7ML9NM2LcywD2n5DfePNKhZi1bsqhAozXpNFr2YL2c4xAZRdsucqW12Ha1jjoGmJP5YnwW8Qt7N",
  "key28": "awCjauktBQTre4VCWhCmG3Kod2GesRPWx2gzegtNsauc5wGTbpXTUR2EivBf96R8e7LaJ28h2Li5eucsZixxfeU",
  "key29": "sXGx8aiakYK3haUrazfixvEeG7rKfuHftDJwQ14mXkRwubptrBf7gnyeVffkWzCXS4h76S9nyuCz8Lu668SbpAz",
  "key30": "5DCZP1sZf2nnZCxvTXZA2yeVuZGj73vrQvhBcREX69398GuZe1waKaZPJgafBFABqDer2SzA4dFgWbe5gTS1VZin",
  "key31": "41D2rchkF6EuYdznRLJ91ntSrm6WU4wpZ3Em5521acqZagmZJ8EfdHJjrxJm8tAfR576YqQ7JXCXZABGX16MZkiL"
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
