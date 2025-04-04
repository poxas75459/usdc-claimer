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
    "UsXiw9uRK7yMLuEiRTTiRiTBAWmttn3VsYDCm9bhERRhSJcnZsXB8qo32gHZxMrtvGziAMtAmrEvE9enAQ9HJqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bD7ww6xsvz5un5U3tAQchP7KcZvvRfn2BEdUYgwmZaFHDFYFgdpkJb3Um3VAsfzf1SQmhxaR17VXFYqzYt9Qkc2",
  "key1": "4GkeGtXY9TiRQGG6bTukitp6UeYr4AEbzNf7PhKKXi6GyM7PzpLGX7zXVCYkjURHxxjF2sngnn91tTwbZqYFeFCv",
  "key2": "gEwJY8Bi8ustG2RZWbBs5GevPz7N3VoMwmBhdk8o51jrS8rFFsJn6UrhN1vfximtd4xcjGDWFZTJ645rgfabw9m",
  "key3": "3tYQAAmPYwFVuu5VyZH1uGtTN9xwSoVkaEYpadunJzUDmw9eFAfi51rCxWCLvXSGBUMhSYLcXcEYdrssUMWUz9zb",
  "key4": "5t59mJEfmq8ovJv76R9XVkZK5FvA9xba9g34vNwEDz4kPBoHWhKiSEewT34bKHhW3UJNzKMWaJhWR4SB85ucvqap",
  "key5": "5jAA2xFKm62mMSkrL1yBcmUZ5MPKBUKgRPYQ1bJRA1Y8pr2NmGiHmxZiqqKNZa3tEBRPqD5yCLVpQNYrpNJA3YPd",
  "key6": "3HCfoHBvcSgs4rfpzBUwXwRagpcBrau7D7SskousxnPQ92JJhpPCqtfJySCtqfLgtZzres7zTSsBSCRia57fx1TY",
  "key7": "2xPDQRuPGfW3iNaYxYohQBfDkdrXsn5iqbb6gKCGVokCGiymNVWnRH9C5CR1GUFZYtgcn5Uihx8LDm5UsZNeAbGS",
  "key8": "53usMPQRhvcCujwiRCKuHXeeNswTx2RqZ2JomosmBe3Q9yHeJJxdJKEfrsaX6a5rSUkwMxLvogX49SjumpqLzs2U",
  "key9": "2RgPnrJ7wXUuyynh3uFe1Ra93Q2EuQT7EQ1drgwKFMGP8i7RdfrituLfQZt613y3t8Hd1JYmiXuQrhovfJkomnSq",
  "key10": "22nG57YjQodGJCdVDqDaZi7BxvLYdYYGeSPauDynb9A9UeYycwZh6bCQPoATqy1Ee1b9EjAptCJoet88Eipx4U15",
  "key11": "4k4h2t6hEHMTADcuoWH8Ah4mNEocaNr8MCHfxZgz6swqTRzmn2vxReExKLu4c1262xhDD6ikrdjQM4xb9NHYd7SM",
  "key12": "J23qUDRSvs2FEwDo82EvKePa8AUKVdhigj2V1V9arbaUQWBP3nGCEyZpoCec6gnu6Xq7612SqiWWRumjA3Zp94d",
  "key13": "5RU12NaLkNWZZ2T3NxHB5B2jcLDUQGyijKcqkEDKpCP5Lw6ZFPcDyXYGBSoLU1iXVG2m5N2hVL8Vqaij2p96vRDD",
  "key14": "3TH6NoPpp5p8Q1ngqtcyVdr46Vcg9bvr66BkQjsbq8UBYvc52uaEr2FQCbwGs816cmeWscVKriDwoRQ33kKNS7Q1",
  "key15": "4XYLRyt7iLPWUA5iwUo2RFerbxJtdsW7zN2NysLdZ9MnccbdaUndMhNteFPrxHpn84Q2UJ9QW6KRaapqefpfAw9s",
  "key16": "57SQutvuUnJvyL6vc1baqkmABRsJSXAit3HuGJqwXCor45rh8JoFmC4rfbtBd8NG67KrapXPLytvGSmhn2K8mWFk",
  "key17": "2DCocy182bgS6VPPNVhgERpbNhSt1A7kYJm9BrfGLxYYKtPrfYWr6Cjxu4uAwsJoALZaZwNhEaPFofo87ze5ZJAa",
  "key18": "KBbGUtmVkfsjA2SiYhJYMUQKWyNCPReAXthxD6pUkTWnhLNS9deviiKwZSqqJCWz4wNnzDiM3fE1LyZTpgSUtoB",
  "key19": "oofYFviwrLsvu7PZZMx4G1kFGKr8hJxoUA71CpNF4zHAR7rKXpRb2ExWdeNgnvYezi9ibDYukKGcRydssFn3KYg",
  "key20": "5fa6uGoTzV1aCcPLZmYQDyTTVdub9cN8aWkqgfLEfi5qPCMZLdmQi85ahhALbqqoosZAWpP2zhprFCSnAdJ6Sevu",
  "key21": "64RtstC5j3RGKHNfqQDEGnaueRNXxupks4v8ypNTs3XEYvF8DcoMQzdpcopaLUWtZAkrCwtyzK1NxUvW9WHg5LBE",
  "key22": "4b7TNsoAGAGN8ThFoupzEQiriGK4vywJPMWmoaNHHV3QrfXpPZUoY22bmegDyBXZrGV9p7ejy5PzGiFRJB4b8j7G",
  "key23": "5vUmzjpiZT8DmvvKyWJqdFywegBvCSjUgLkXsMGocHk9BZTGd47CrBnm93uPHzmvHWFq25X3PQUFHHjipTb1ytxa",
  "key24": "UQGY3asKEs8ZbvuZ9CqEn9WeiXKA9fqJLxZP9FTd3aWAdBZR4jKcaKCKj3SoM9UsFy3nuTYJGHoGRd7dDf8miWQ",
  "key25": "4hqVt5pbZYPC6FYabyvixPxxjX7hfcpn5UCAjsbX4ZFXcVzjnnFcCYwiefzwbCrJtEjbm6ymj6YmWyDMWEq42khh",
  "key26": "3CtxwDzpDwr1KrdTRX6fKuvM8DihMtPZEzZspk3cPFzxrHzK66L1Djnjtft8vL8y1RSpk8TeNGCPK8oSifMZ9WeS",
  "key27": "5wxz3tUQGuT2aaHLRJN7YPDNeM1nZMSbEkeZ9uzxgsK4hecy6Yc6nToqhT7L2BPTQEhmwcGdaekhftENE17CKwBe",
  "key28": "4XKWKvAoGmnFBDbhSkxZtnodM818oGtfVhvvhpyxXk7ir1A5vrEVbkkULFMSw8toSFjBJphyFKSw8EvCrbmKA4su",
  "key29": "546DKVECPAnkVBMTYtacVQQy3nZCRGwCmtyxorNxeepx3QTTUtcCPAu3Uhd26CGFw6JejZQCF737kwP2ecCLaFy4",
  "key30": "7mncH8bNF5sQFhnqDA5mzHXqEUjJn3AVgaouVQqC8Hcgh6z7x1ha1sR4jQtx9ACoHxKeiyZYQeTLVP7csUqhGwp",
  "key31": "3mYJFtvWWSivFFmmPWLzf5RgXnvfcnTLhYfZNhyEPSkwbwMA3QsJKcUFoUkDX883acvb1GFozcyofcLHEJ7R4XoZ",
  "key32": "3jmER5mkyHYMMaEgfPa9dhbSLVin7XrRNx7YjDpnn83JgoUgKqua5HRazyBhFtMNBxmQqGcPLyns7yxJZE78P18n",
  "key33": "5xjk4P6XA7eLVjkLiXJtSBPmoHhyERoz23uxWgS2uPMVguAW3EdF6V5szjTd9HKbA6xuEwNQKUYzWkAYHnpLHk5a",
  "key34": "4LuEZJhrezv7ERrenq6b2atZP71WjcXB53ZFH6rXYKfKY3GGYHQ8bRQAJgJ1erbBbtZu71QHZEJSTbmYmPXifPzr",
  "key35": "5ca5Z2DhXKWWgniNemi37hi7RuYCgpBAL8bPzYvktmPJRaPeu958BAzoVgoc3JD74s9CFmMCodPNhBDfamyoNDoS"
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
