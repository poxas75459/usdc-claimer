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
    "cK73yZ2DEQ5K4nwTEgmH2pgWiEvc4o7rYXuD48mFia9focaZbLhfBz3khaoLLsBy9cTAxZdALioganoDc8KHiFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bV5qKqnN3hj54vNZdEyLUCngpW5K1vDZCLkV6XMZkjZkXmEhDeCjoTTddxrH2cXpTwhRzdLK8ccf97V8BwMXvxZ",
  "key1": "4SBJgiXYM6bahupr6PRoqBtoNCwnc7kJzXgtP8uAoKCoUpNSKziwsrfbeyBvfPJLyAiywkN1k4bRQVZ5NAvvmUtw",
  "key2": "2BJLJxSNSMg9BeANP9S6DzW9Z9dqxv2C6LnaYYfoNzhj4knLrTHqtehBPqBN8iunNwuVmXnpia8hqCPxz3KSZLkL",
  "key3": "3d2ZoEWLPLPSaDUwiAPrBLXmw6n3Apt1mWT6X8Fes6VVpDqnNosGZTjmU381vPr8A1b2no2A3NPRytFqB68JTvsH",
  "key4": "4bHdtBVQtnmeHXeVZHNmMNFwBHASADmNRpn1z6R9oUX7T6SaMSf5WVa5nNLKPreCTZfHM1bbRPWLuVRqQuzuQHyi",
  "key5": "2pjMKtTBnn8YzY17rT3gkdg34pa6r5czZ1GGR6t5P6BYKzdJW83jHnYVDoLGRGzK9gzNkCWXi6pXCK3EiEH2x656",
  "key6": "5Vbt44cnvR2RYw5tHT2gSxTxuAgmB1kyYspAmNaguSv5tUXeV95Z24g4aseXBZ7LZ6n4UTgvFsVTfMw5qoLQKYxu",
  "key7": "iussHLBvqEGni3Bej3avZmcw2CNijFqnEwb7PhvC2Y7Sidwqfzgmt351fy4zSsUGwXZeQW2m5eHYjd2vy9ezS16",
  "key8": "miNGWyfHtzPwKRxu3gEXoYykVBVoevjDXNxgq4BCDFtun6kZyoyuebrzbid39EpKX36YpFCQmzgYTaBM6KeEdgJ",
  "key9": "2yGLWoDmz3ityCHnV6wjCvUjbCu1KZanNb2yMMyeSKpPjHDHc8k35pvZ4USDB9DJcYPL9L8GhWEQ1WvhYVvXcjdF",
  "key10": "3bSr9g2Gib5NFbXB8DzjUnxvdQHCAf5WmuYD3uxb1w4t1ijk9LXN9MEmhbPwMFEM3PeWyhB3QRqDzAx328hQQrPA",
  "key11": "3MUBzpLxqaRBk5aHTPVhqVCRnnqbvFTE85DMwbArENm6YCNkdZLjvC2sLyCnyqf4PoiggXYKWt4zirxYkZFkrnkU",
  "key12": "5CptbaLKaaByARLe57V4GqbdzgyH9EibP5y9xqsZuNbhZzHAJkpTwT1RMC8qvsa74wg23eMoJviQkU89HJqMLdp8",
  "key13": "3bf2QGkkG314Y2zAR7kk6oQABWqncS1DXk8nsEFyAWATSttKHZpDe4UZp4HteCSUn7BqbZ8gVNp6L6VwafHTkxRr",
  "key14": "w22gdLntAD7eAZbPBvtB82XHHdN1HEFK448WeqQwUNUho9YKLXqorW6mfh8QzN4rjtrwsBiufJvDELYmoqYR9N1",
  "key15": "41Rmdi2dV8K6dFeKwZRDxwKYcMfSE9EEcX6PGzpQp9nKiaY5cKKsy1DedesEgvcXbLcvPVtt32CknSv5HxRzvbd",
  "key16": "4D8Tpmh2yYPuhHGAnF1kx6L1sqdSso8TzzAuj8rLfZiDyZDEJf9srQHmyu2GakrQN6oRtzXkyYeWzWadX8BeE8PW",
  "key17": "dUxFWhgb7JGUVQ6kUoZYpcVkPaX12Aes1zMeXffJv8cyhAQ1iDK4FCkWagVQaCFqfeyMaaYwnAzpdzN5jqmCzMA",
  "key18": "4RHyLB9HRd4Twrxjmysuj4RAbmyohs3hvYM8zLs1ynTHhWKg8RYXPXQgrkVHXVD194zaPuvZjFuo3U5v3LQve4Ec",
  "key19": "27CQLd9QW1ut5TrvimTffNciaCAYhd2Rirpokdd1mB49Qpv4TZzgNxbNyWrQ17Tg3qQo6rU1w8vUsTJqRLy9Puq4",
  "key20": "36L5bPwKWnWLLTPvEZ1tVyF1959kqKeMygtmuDVKeVx6ASW5gjchGBPEcWSqvn9vonkCskJj5tCu7WuAek8ism1h",
  "key21": "iiUzcmSG2jzy7LPkJsWj2X9NayF4W6biZfZLPJLhghwTeHMp7oQdLFwpCi7QFH5LLCoymFs1aXgBY3S51s3gify",
  "key22": "hrVRy85KJNBBEmXmacZ7MFNjJaVWFZDKxcHFGhvEnE942A2ojzRV3SiLhp3EbV1EPAUxN2WpnQBJepXwAecX6Z7",
  "key23": "4C8UckKjZqxCXKt9Diw6rnPCUJj6eUZasLPDSgPuHerBQyhFv7PZB3RpWKvhr9wyPd9PVdu5og3gKJwLRV8BRSpn",
  "key24": "5RKtGhVXt62y6Z1JZAJLCsVDuUzBQUsutqmTsohqDb6X2kR5zNxQLrakfNZtjBJtPigQBQ6fi8xWPZXnphuyxp84",
  "key25": "bP22KUkAHysVM8bndYZP7Pnv2gq73Jgt9afMtwjQ21rQ6Mi8pMDTRPu4pKrzJXc8aRa7RokhREYSFwgGKsHZA3A",
  "key26": "4Q8KT3LZpvqZrLNDVCAUNxVC6chqBDr4mnuycwawu2n5nmMQGHCr3WSc4isZptctZ1XF4mVys8MFu52aGBjLSjSH",
  "key27": "2ZSjsGJpkNJruGKqYnUzfKg7cwKMQFKAfFJPFhtfSEgspuztaWtHdUJ1eTi8ZsLipNfJtEMayHDFrFJFUqDwtZZq",
  "key28": "2becZbi2yGqdL4xNbPWzEV8hcChS51pfJQmSrU8sfmYQgxhzzWt9oJZAHHqNvzrdfqYhftDtoQfHZQehv2KgAz2b",
  "key29": "5Jisz8EU6xpJdBNkHUqYDQ5igGqr3eSFRbSHUdhzQ6HeXUTKRmqAMHmzsrjbKiJYSc63hf2Fnog7wcB6GkQ38Zxe",
  "key30": "Y9VsCPRvsQrTKP2vZ2YaoYAy5EbftcbjSJfYhRideeozaXG69yFdfuVnkAvn9TUYthiLtV5iW939N8mCG4zgRVT",
  "key31": "VKBhMJfDkMpoGnv8gtwZPipNdX8kRySxFj664DXzoRK57NyNWtvzyNdFjazWwiiVYzGBoxCiPDpJKu8aMqCmYRo",
  "key32": "3PiYfgcBf3L1oguQEyy1mxcCtzoxurmJuxZTk4obmuYAqSFTJ79tLFw48yYU5AMmYJeFYCcRARmaDpSYbox9AZZQ",
  "key33": "62qASXT6hKof1czeF6T9yULf2xoD8harF9HTdcgMhkDcKEf1DPcAD4M8UqaPX1eQGvq9HoWYHe2fprv55iLvBN5W",
  "key34": "5iTBpd3KA7FkwaYGiuN4nZzgQqCDr3Tfp3VKh6mjURP9saRVexyyAdh9sFcafLiHAX9t8j9MzDwuHJb2S1fHeTRV",
  "key35": "5Akvx84rDh8cwPWYya7CdvBa6T9dkTJFj81MuNS4c2CxUNgbhSQroeJFtkn6z5RZYjHzCb8bEytS9UBkpaXfgQ8E",
  "key36": "2BsQpThra5Wfjzb5cj7oFovesKQCoAQWfaQe4E3DAYuPbur19qBfPH2TGPJocQR7Z5EpJeiRbdqoywUX89joXTcy",
  "key37": "347roPjbjp8RsmUfGFv6pWDkpeZTPY3p4m8t1KbcMRCdfqaBs9tBdSVoEJBNYZd4nM97zUSHT24UJcrhAA8YDdYR",
  "key38": "2kmzuSpcDoJTpRAi8kfYk6r87YoMR6AGbkqZRL9gKwL12a97F3Y287ZiQb8PE6dPP3fisMFmiMVZVwqiD9ykHGuh",
  "key39": "qzsLm3zGDKsTqdemoVMHy6478xedad6bzrCYHGGSfVYg1oLZ8iA3M6R57EiKaWRASCqjdDpU9at1uRFPXcnv2C1"
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
