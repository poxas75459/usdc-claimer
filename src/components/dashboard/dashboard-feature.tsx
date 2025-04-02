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
    "5PbVLaeneu6yC7bwpJfv9rqmpQL4d5ZSAbSsSK9imhuhRrVV7xYePFUdCAvmCgep5LNQLF38EYvhS7vDtu38tydi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbPCqJGx8QJeEyCv5Ty7hodMPH3nNTTx1HdkybteKf3hAYHCZmEJ1bTsSYiquQMdmVNArich8UUdTuDL8Sfjscq",
  "key1": "3Wb1CrwpERybgGV2X4mPbYC7itbH4zTXsZtsjFTaVpBECa7cmsyfd9tfgmRo1VYrPMtTstty4GVZ7vyPpXW55bLr",
  "key2": "5BihEsjvGopVhjqbgFUg5ZSPa228arHah2ZeMTgi19sbUGsy9QP7C4RNqaK1doGY5g4U2Qmi5aZqxmPES8JtMUYx",
  "key3": "63Ga1XRXDJqGNJK4z9qjFtUgPfKPMZ96q776C3FE7UQt5zjPmBKrhPQ8p3XyGDWVb3gNb1uAvMBGigFn7JVqc3K9",
  "key4": "3D88LqPrj32XC5nG8oBUrruPUPQcYDTYWwWFHnqeb6WUMzjqXWHtCWtLQFakJa9eFRaCUDtn7SCNPNMtyNTUnhZd",
  "key5": "56uutMPVneNCLuoh1M3JcASkqSPiPLdbyLAMxuPkW1oQYv65VM3PmdQhA5WxhKvPz4KNHEZUxyCDg3zTvuhbHuef",
  "key6": "vhYTXjjcQkj7dwuwQWWVCR2Zx9BxvVNpAJtXsQ65i3qwcM2gNJoixTm1p97BeNJuoUGSmKYLLKnhaSuKiqiC2ns",
  "key7": "3umDJsNLwkFjzu2VkYqFAQHH4XtNejXge5Ucb2oJG2mw5BWhv9Q5LY9ftTEZUrEbeVdSLbKWRrBZUH47t8fvw1MX",
  "key8": "3RrDHchKAPdevTudm7GR8ZxY73gj593FSErxNTmawoULFvCiLH6muCpTMLkbcNAHZXFwJqX2XVV1gsiWMUsVQD4t",
  "key9": "5xf6yUCc3q8hEExiahJibt221NPTaSuSisJkemE6jsKhyKeNMPV9QX63FHKDxvQdYLK1YDZocAc74a7QQBvLxdTs",
  "key10": "BowK96UXd3Wf9VKaPB3JEzTs7D6ibydtBiehKpEfuMub5DY6TnpZBVA4preSk1EfxGZCzaCtaAEsmPQnVKFa8T8",
  "key11": "3BREfwawBbFztFxfwu36t4uBtEox71eFtZ1LiyiHx3we4zaJd7ZiCWGRxN4rMFZW3B4jCiSfGAeUp3MNYvUH5nzm",
  "key12": "5ZHgrMRYCqaKruGaSCvxr61nXx56pCv9GFVRj2JTmob85SGcXGWLiidiNUxXs4q6NxHEztdBLqssBvuhU4e8Tqy9",
  "key13": "5jD7QhsKEFqGmVFmhkA1JtpBZ3kxMJVFUZE5gkX2fHCsj9RWw1FYBoLGDE737zitDGiNoetth8L6LNCLPSYMErBS",
  "key14": "DbHvrr4wB42WwrgVtJi1fKPUoBZiWKDicHrGKwfTwoSXdD2aJtTRRLBHHWUwcHbGqMpY53R1wVrS3Ht7BpycdV9",
  "key15": "5sWHV1RhWsUbDUsLrPN3Qwu2mgdjafuJGBtyiCwSt1CoshfWazcUqQeUP36JvgMWNjqp2srFaSyuKoXmKtS7MKGM",
  "key16": "4ea9t6NMZZ7anf9itrHGeeBBdUnywsaima7Ej3ADhVFsWP2jfQBDP8EKDtJMMzmHapMUchMCo36UUkuvJTLZeFXY",
  "key17": "3uKYxCFq89VrLPmkq6XaCTdUW4gnLLLjBNcpCBPSm2ZpRpa3dpFZRnu7HGfxtAFmnQ4h6mLHn4A5hvyLXyTX5rgX",
  "key18": "4i8isGavSKMVgwC6fCsvjRMUNBW996AH5nBZYYbXcXymugpsDAk3XAUWJtLgNz86xxvEHRZ4krreQwZGesR1HZ62",
  "key19": "64nCXTQjdaYrMVDAUxt9bNAQnmWPjkszAEWNfYgphofBNzx9rP5oCHNoA8AnbUkN8UauKWPLe2qc9KRZEWYhvuDf",
  "key20": "2uEbMgEFPu9n1RCTZEYvJ82uTnmEcYhq3ZWUDoQtLByZWU66yewACvNN99VUgg3sGBfpZaNjQfQ5kmXFUueDv9VM",
  "key21": "3rjUmPb3yQZseMfz8GZfHLYJ4A7v4Jkn2vL75yK1dFdhUzzvqRsswajHcMarXwZQcfVKtz4PEphK2NJoSkzgUsTX",
  "key22": "3LXotL5VrLVc48KbhWt8zPbfQtJqqsHvMK1oMpVgHPgAdStnWKoFWoLWJAF6HygeNV3wU852LoAKSiR8zNGw5kBw",
  "key23": "4m4vLtNRJhdKWNwpxKYFpmHk8nojzpjfD9LSTeZrenSEiDiBoBrt8zmKJXGfX8LMuyiuHytMSxuPpgQW7AHQERu4",
  "key24": "5ZmhQcvFPa3paR4E4DMmgbPqEoTXcfzsskxqCRTbGiSWWJoqmQfPP9kiUUf4i4KjeRxnusXmE6wqZVYCFCzxQdKS",
  "key25": "53dgfcSBARMsA9N65LoPxSjrG9cJQBFTTFayHu524zKv6yUxu2kbakzkozKHg8WnwsgX6UMXkswu8HPUYdBjp8v5",
  "key26": "2JLVnsH1FaFSPKjb4oy7o6q495a2KgEax8YewBJriALVvC3bbSWX3cBDM6iRUz512A4Yg6JWe8FudRGJRqFp9V9f",
  "key27": "3mivr5YBbqfophJ6321w78RyYqkuhMQvfaVvSHeKKyHrEUkKf9VUZan326hbcwkrYw5zXe15JTxnKFewexU7VipX",
  "key28": "3AeSwMe3smuZeYv23hjMXwUYbHR6JPQwu3mrKz4YAnvFGmEAB1eLMps7zjwgCJCgkuRNs13B5rD9W9YdRTbR3DYB",
  "key29": "4u7VM8vR4mdfWqMjQ11CPDtGrDpHh3zumFjLCBbKkDg4hj4XWVHfPtUHp3bX9mAuB2dQAzDQcXyiLnuWyerfz95",
  "key30": "56P8UDF92QjYG1gXUJzvEtfXWR3mYKtmaE98N4Xufiwi6zpnRyriRpbBHKKF1Tik9SnqjygccvjMN2mMphAfAuJm",
  "key31": "5z2pYLaJCAqFCHLKcUxcemh5sYmt4sEr7Wov8JBs11x1NSK9EMDMT3KkzwmqZUHuK945uzurZ9pQ5Lsp8Gd2Csv9",
  "key32": "3yTkXnYo4p5Z3Fi7tZ7Cwbuus1M71fRmVe317aCXpkFyo2S3wdHYg3HQzpkPEnmf1HXKtPrLYP6rUL6G8KkQkotm",
  "key33": "f5cGgaayjzhcYNyQ6WxsQVKcMbkChbBkfGLbrAmLyZaArsDSGzdByysnqgwU2fApHCHfhedh68zN4b2dB9skYyQ",
  "key34": "Fc9m3daiFhjc2kfUjwQ4Ya7jvQGGNTVfRgrsocw9D6TL6xypB1VpiyiVvEjCaC5Ef4QXqeZc3mu1jsY4rvoe8Aa"
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
