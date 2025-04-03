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
    "iLDQjeA1tuAAMQB4pA6SVRwwSyGRsau6oAPiAL4gU35VZ3Xqk8ENrGSEN4J4Hg9S7izWYS5EYA4oRvCdFLmDV3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Re8e2ryQKKGsKzvKR6brupizMxzU7iPSNqkmDm8KNHqBUv4WcdShPFc91noswXsELFuy7FJjsPvf7hnGADzqiB",
  "key1": "2hTrhmNxqSyCBKEuXpo2wsKnrRhe7vYUHa18c11dzLWCAPV8FXmgVm3xNnCjTxzbM9Kg3KBkWcKpz9ykG7FfR21m",
  "key2": "nFgJHieXT1wTzABFveF8sesBAZ6Qjj7egsz4NncENvhqEkjdco1NRxX8wx5EhiwzhMbBkgjgv7ehzUCtpxWzwcs",
  "key3": "2wMXVxJff6cgWiVissEKjNBHkBYrz9UZ39MbbKFXegRvcJHVpkn8MmucSiFhUG5eHSpUx4sngTjA79eHipU5UnDG",
  "key4": "3CtNoYp2EeGaG5KSaFD2Q7SkTVXyTWJbeHBgHyHk4Fm3V3uChEtKDB64bN6NgvEHaFpjaA1oPYcdKh4JMZH2Q6e3",
  "key5": "5yLKT7pmRpJvyDU8QpGYVduFdYtAFvPgDaDxQ9m3fb52DFkrKaD6uErKWBsZjCuYpPS5V4TzuDwXZa1AzPqL21kD",
  "key6": "4g8XAUE2SoactJRr13odZAf26jtGNXns2dRajhnqGzdS69FgyuoPQy7JidUaky2fis2cm4M7qNGgqAiyDD3D5fma",
  "key7": "uS29BTe9YFm9BDE43qcS2Ceu7gLroDqmuPgV8zZJLdsZErA4qKYm9GjaLCk8jzWtsso1Qz9C44ismF8Q8v7vYvz",
  "key8": "2sC7XLMwNrsQywmLs4DGnd37MSgkYpjzGwQG4EE1poeR5mC3NXEYGu7zJAeADgvg7BEDtJaEH7B8DjxLDD2X6M2o",
  "key9": "2ZHV6L6W5ogZkA5pSNJHzBERGEBoXx7UxCLHadtBE3k5DMepzWSvFEXKhgpsPJyaBM6vzhJ5oQM3Wjie2jjXckSf",
  "key10": "vMvfftTUDfV13o3ZPHW21r1D5Z7aFZfFF4neZzeKSxaqcfGb2VuRbyxU7NDM8qM6ZXHrjuVxF97MQuY1zVweaKk",
  "key11": "2psnEQcUs4uT8gpAeqY3G8eAPZyGbreVUwdkMW8kEfNR3FrYfJCJLTRJQy35k3D1a5pHXT7L9a427pXbUJs8STGJ",
  "key12": "4zdsVChRbjKrdKTDS5jtZc5YXj32fpPH42jNtKboJ46Cpegk3o2LxmfP4Mv3EUoGqqcHQ2msJvz3odinkLCRtdqb",
  "key13": "CpkjMQVigs7uWwrGrdtHuXQSghBGThWfuje928QLkfRmb9eyRSY1AYeJdGhFeuM1RfDgHYMeLH7qT5jNCdNufeu",
  "key14": "4MNELuwxd2CW7o6KCLbwEgdkV42coLvMXBFUP2EzqGvn6nMN9nt8ACLfskMA2ggdzesEwfAjvXkntXkj5iaahQzK",
  "key15": "2c6juBnHqLDah6qqymqUF2LXsjCkbWFXahvXPJbEjzR2CvdtKa8iRFno7mud9dPiSTD97kRQAvrppm1eQfWdCnCn",
  "key16": "4b1WYAMiVZGyDDsmzhnFpnhdHtmX9zGPTonfv4ZrDz3j5F3udJcHYP2YKAfWiA4rkEdK2199U5no3N1kRbibAXGH",
  "key17": "Bv65gtjhpLW8eXaWAmXNiKtUrFNvhgMzQLVVydrc5EiWwfBLxMKK1PMKWKcA7BLneXaE8tRiwmYUzWQ5fCrycJV",
  "key18": "5kiXa4X1uPFegZBEwj9NKtjrtu6DvBnwgjJS9k5LYo1tDyA8wvSPceWVjMCwNr5Bszhu7NmEpsCs8yu14SVhDoim",
  "key19": "49epR9bbw2J3GN4tf9g92Gr6Bet9DbK1bdJe47PTvnJNEFgSKwLkAWHTc4sFPoERktRpxw566rUJsYZMfRJm4tLz",
  "key20": "3wRh2fs5Q4YN7UBwn6tiDGkc4R6LR5QX6FKQmSf3GHzq4jQ9fY2eYxqCEDdW5jLRHLqcujPfB1MpNfpUuAiGECuj",
  "key21": "zhqFHk3TYWmt1Njbjt9tHEKmcawc2Rcf8W2qGtCYiFQGuaDAB6VYfXn4x5JwA5ndqdbQKmsRdiRhochS183ghYL",
  "key22": "65REnYZVtsa7jAmtwre5aAoEzmMzk1RgR4o4HXRXkJQrbbUsDQsKGPYKotRE2ksMsXir9kRnmEgDWXYMXPFkYc1Q",
  "key23": "2XvzbD7MM5fpT2YJc68CySDGEBYA16FbDC9kZLWJVocy8Ve88v7zy8Vdm2nCa7aKNSLD3iDW7bGv6RiVFK8bp9mG",
  "key24": "2YqcEm8zC6jfijDnSJjFmSrZZQWh3VrPw6Zk4j7NDpMw3BefjE8sGBSrF5eEYieAiaujVRokxxuukfh8bf65oJL3",
  "key25": "4iVXLWQqcKm7qGmad4Wi8VP8UNwqAT5vT1Tz8q38hve31cUV2BxN2Zhd8P5PyGV7ULo8PLLZrdxHJ2CaYtkCHmPo",
  "key26": "2XKpx9NqohPsug64hP6tkRTrVsC8SeM3mekZcZjyUaU5rnjJ29i6F5d4jzqSeURaQfpi7HMDsGmCtpuH56yx6abb",
  "key27": "2W3PjeUTqMDdZJ5AXZSe7zBykzAFSowA4nTz81J3CRZXMZP8j5Q5EXyfEnBUTf8zZQ3xCyS7ndeADkqQWGiM8hkS",
  "key28": "97fR1jkZs5CRxpMQkowozhpR9ZbfYbaz4f2v9Th6LA84NW7PbqEVAPRFTzeRLJL93aMfhjo95RbBppW5iRLHNRF",
  "key29": "48m45EuyACWWxShPXrUxnuKLJkJoZhdXgFxrWQ5s2rVpkDfZ62y6EFC5Y2TUtf9CkZ5kwVNizx7SFw8UiawMwnxe",
  "key30": "3A6aK2dre49DHtuSCnQ4UZzC7uo1wipBhDVMusjot9yVegbQ3xz9AmuesAm5qCEsdzrRgeJFVSwV7WKn9ETSxRvQ",
  "key31": "2XVnsBmUgxjFo8PYPAqA5zeZ7iNTqb59r6BWyLEbF7ZVPM5PkVhpzr5FPLmrVrVXdjVfDDPNt27aWpk5bweH9onx",
  "key32": "4mGfmKJdg9NCjDYyvmeBf2e5iPU895CZV9ugYPrKyrRLF3j6N3W9Rc6CWvwqHZHju372KSBtXgV5k213M2y9vP5w"
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
