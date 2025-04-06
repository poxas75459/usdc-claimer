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
    "5ZPizmvbvG7HTPE5L2JAb1shrb3pa5jHSSvMGnGLERtiuRskQRh6b5jiXfi85a5yMWmR2w5i4dQMq5Bw6UQ1mfvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KEngmU1NnPhgX643JGo78t4yAc9eoWneoisjCMZvHbsJnR2rhrk9kr7WdUQsaMNcgTUdMFVzwraSyFdf6fe74Fi",
  "key1": "2J56airKZdTsF2fQx77ckgTGfnvaRpsWJnC1FQzEZcmicingy875iQr1UB3g2fDga9VXuXqb75qPV9PuosoETWgs",
  "key2": "2UashXsA8iEZ1FuEmALaf1c2Dub6RoWEj6wQoBmPmDMKPLJ2EbrbmMjavpmi8EREm2UNgCNNThj9ZBcQCX4kWo7n",
  "key3": "5XzwF7YnxWnonS43KeaJWe24akm8BJY3yWt5PM5vmCzA2q751rUeer4AbU9KnryyMUsNMwdWx8Fk4vLwDHp9ZVTF",
  "key4": "32kqB21LM69QR62Sxq4pMqx3grwFd8qEwSqJA6fHDbSt2totzaG2QgfSFEJdQsXr4jYmQn5KxTTe1j1UVFP2smfB",
  "key5": "2vLBVc7ytpn8xCjqXTn4kgfUi4Q3C8FptRo38YFqM4vypH1eYMKpcqiXapLci41N231vUDRjnXHh13h1pPvvpvuu",
  "key6": "paa57WY47bEfiLiCm9FemkTGkvNc6U66soCNfAXMXkTz6AyFMkbhcNv6VGuAHiRrPZ5KLxK5Jm9fH9qa292SQmw",
  "key7": "PoVgjBkbPNnmwbaQNj1HHGo9VBYT333TyNLKXGw7LoQ6YDriM1v9z5A3sGYpoCwTH3281ho9fdJMhYYNeJUMgSz",
  "key8": "5ifoE7VX9qA6yMh2ERgVKt9YvK588sGRYJVcjkmU11XQYmB4QEkLv5wiPUL86VkkVbwag6rLsuXksX5cAwHEL8ZY",
  "key9": "41Y1kcPcdDDUsBufQao1wpaAn2B5jQ1TSCX18rzy64gsc2qQ5EfdWzLqxc5eGz8Rs1682UmnGwUpAqsAmwDtHh5j",
  "key10": "3skd6kmuTjiwG6nWDJ2xXCPJqZZjeLwkEdoq3yHYELwpAWM916dHCt1Zf6cLgLJD32XmL5v8j9uafnrcZidseqg9",
  "key11": "3ik49EXpUiCuNRG5sDYcu6Kvvx4F61AnvhdDrxMHiRozDEGs1y3k7D3Y8JEyRqgxbXQHUUAYyJa2Ux1GZ6psKdVW",
  "key12": "2wdvbt2NireVVNrLmqVtdzad4CGXbAKjxj9mUozrcacsmiyPoi6TvCacVDudh6K9j1RHfF26ZiAZuWRwnjRwgjYu",
  "key13": "2V1zv9fUy3oKbRJdJeH5p5ax44LWfQXpMWmLsWFRZKn5g54RfTkP2pXe2ub7hYDncYtBN2fCEocf2bfYqQPAoSaH",
  "key14": "4mThxucDN8h3Lca7JSoD8BmAoHPieoMD58dJuFKxwLLZp6HAHtxFHZzmgXcHpKFHpnfwoWTXhAafepFnACAHZE4B",
  "key15": "3seMSR4Y4ZRhKKtbt5qk3bFW93H7rbdKoGSk5VgPnEvae1tnLBVM2Ad6kHV6Q3UptBreuZEipZkWrScb2HffZcGm",
  "key16": "2URqGC4kkEkhqVPSjSWzVrc3T8e3WyrenBd4ideaHPUyVXQWrxAzoXvXCGobNdAAoVtLTKPxbMZpnRV3ZWQm98By",
  "key17": "PXnApULr812ESqqjBG14eXfpyb2RhLqfNEm9VR8KTfAjAaoc1D5ANGs6bkzCW9oHP7F17nmvse1GJwnBHgF9tEs",
  "key18": "21zgJBTbvWxH5hwKqhZAD5HTKDNk37QHNxitpSUbgrqg6Uutu2iwyQgNLWpA64QgnrrLrXsP4gmo6DkGjcGqJtuz",
  "key19": "4MckYCM2i8iLbnaGGxKBFUWQVeh4CvDt4arFSrRgoUEPRZ8xkLGtMzWmmWqhfen4X9wV1BxGje6oGbXRFUek4EpR",
  "key20": "37hJhKCvTxnBWGkhwzfxs8zf4KnD44wLEYVqK7pVpbm6nqAZ7ob8sw9cSvjVKdiG6fohk9X1d1bYrUmVpegAyLvT",
  "key21": "4S9Zf5XCTwK6istwTgvNhNUwy2ET5U4aDXwXqDjevoJTeKudscnXbjbvYgLSGz2ajsD2XsdGD7QRjSHkcXGT3YSu",
  "key22": "3YFzVqRN4PJYEzd7UY2EwxWkDzz239kEhHeJNdDPGsj5E8924RG5Ex7cELpWPn3vjcJs9Rwh488cv4pBK43rFC5H",
  "key23": "fwceGmVzVjp5d8XMkBrVhEbsz1z4CdckJMPGYMETXAF4QyeprR5DGZ8Vcwhkw3w4ZxaL6cVyTz6cpqUn78Z7AVf",
  "key24": "3EKoLmrZWY1VPPwEZneGPXNUBbKBEXHfBuPauxx3CeXHW2Ai2fut4mbJnYQcfgKZ4h3F2U1sKaCebELVYNFZUaWP",
  "key25": "5VfYsj5bAbovWADpjYpcmghXw5LeSqSCTpYr1xNqu7BHTXzg1s6Z1ya6XF9UXEDfic9fp1foTSA5sXMkVtWnEe7z",
  "key26": "Lk8K4HD6KypiVUKYmvv8FmbNY9LMM89cbKXVnFs7zYbax8396uuKNnYYFXT1WyU8XMUGehkTHHPubEeTmpb22Pr",
  "key27": "5KjHZTrGXs1Xj8UGtndeRnscMt3SLr7EigVi8AEqjhC5Y793GCJBeAZrrASrepNPQG8nYogLcmot8VKTXGTSWfZA",
  "key28": "3W8AS3ZHSPKs6akeDHzigTPWzeMQeiVPw7RcnB1f4E6oA5TjNZ8M2Cua1aBYt9aVeKFUmevbkTMtNFSU776e73HZ",
  "key29": "5VZRWFKmyewHw7rWYNCoJ76m5V69Ztcv84uhEPCrQ1kBTg5BozkjFeuu4twbhekcYxx52UwSMCQzaY6HL3w6JjZV",
  "key30": "4TNSKYtffZCLF98n9RUMuTDZTLX6sRdJw1jei7MRu8WP2z2ZLTbwKJcuKrvLzB5iDr6aNAKp7P3TygwLMxCPRSYk",
  "key31": "sSMDvhR1LyDF671dFCnhieHDhFNND8hp8aneaFA6vXAW4iWj3r1VB1obqPyj1J37hFFK1zD2bPBhtynR5MBvBD9",
  "key32": "2D1M3tnEfBEx5pn5CV5PKFAJC3RpQoZEKZjSTc3e4SfW5TwirMuGL55PgEwNSoiHzBcYTgE9QKuCjP7B9JvUaT8M",
  "key33": "3hx4kDMusruAcWpFRF96CHMq3HfiV8HYsbRQgvgxhDKc5RZ2jBJ9C8dPTNRYo4M9NTC1vUtkXhujRLnumyYYhL3y"
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
