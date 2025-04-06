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
    "5r9DgEHNTeW3tfYbyfdxn3WfPx1PsRGySHxzcYvMyxaTDYdCEiYksew6itfekEuSYRva6K1TEpXqaG9f9BXAQEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XdoiamTRWZgDbSr4Mp4RBaVucrt1fvpwhunkU4wcctgiCnyG1AJFqdJRoJhueEAnv2FqbfG4UcbC2YrNrZg8kM4",
  "key1": "2eMzuj3Fk5r2P52uVrzutAFB5rS52zip2dLXfNxCkRyADEuYz1gN2H5b6fGL19gNzYxSUwJucwpKTCFhJiUG8XX1",
  "key2": "3AV4UXdAbBiwwACPSEhq3QEUEbrRx4gUGu2HjQumw3trfg7pBQ7kta9ZJecrmt3DEopsLfkd431tL98phTSHMLV8",
  "key3": "2j1mjcY7kB5veHXppQa2FM1jqyE4R4CreKtFmn5koqtMRJtwRCvx4daU2eCYAPvVVG5FoGyDc1EB4cDAPUKyunff",
  "key4": "54rkWRDrGYsVQSzpqgSnhTS9K69EiJn72C4r1HUgKtyH1oUdFBJrEHTAjuABgPKW5nnsgNAJToV1c4wgghbLL4Pj",
  "key5": "uQ7oDwq3EWbmtVpDWGxUL19bc9fypFaQQiCbJat8FPpsR2zWLAfDrmUwyDZCeupBHo9tEoznT3eMRtNnhmie6nZ",
  "key6": "4aJ7Xgj71BvN9w3WdnjWqwLTta7cVRmi1tbp6Hq62g52pFQ2aMCTRZGPnNyu36yMhNSCMqiYSY7BmdYkoz7gaWz1",
  "key7": "2wsFBMK8aeV5HhYS5BoDnFqXJv3tabM1rqKq24i7dEV5uizHJCooxTfQmDixjGsaTvPJUECZH2sAikExbhPEy6wQ",
  "key8": "5JxcCk7gdJz33xY7phdb8zdGGUHBrZTYAbfwV7WzfGM9tBj1HH2TipPN58cnnfKGGonwFjqAvyavie9Uy7TRaQ9y",
  "key9": "4uS9Bw2FA9pxiDaDgY9VoUQi2uVZpo2m7cs5TKmVH5kDeRtrTL8uVnmh3u8wuDL4B7AakDuCre2GGYpttsf5dgcB",
  "key10": "4ZeSW4ayxaZPhB8B2gNoCr6usTDYp7pQneARv1t8pQBwNAqtqnYR2YczvXt2uK76DhZofEdBxMVg9JNt85Be2Dmi",
  "key11": "26dQ73pMSrPkrKsS2YnVEDDZN5BpxDtcYwQD1p3Mov6wE4TkKg6LvcxPepRZ1jMTanNaSfaGd8qaUCggba84fLaP",
  "key12": "5U9W4ZSx4tHkLgdSqWUbsTn62tEH1y1iAtJbYCPfRJmtjpycGyCvvZ7oAhk9iMEAbz4Pgvgx167c6EkF62Nag6jE",
  "key13": "4iHEN2DBZMuoAf1SQbLmu4FjBxZzD5YEyAVP6GMNpwctwzY4GzkpKhh9x9ztqK9QxNipQHQ7RHe5aanuZdiUZDuR",
  "key14": "2FGQm6DXtmyHFXXTqTzhZ9VbvYMx7WdRpvXRBqBRXngirr6YgSEvdop6pgpLFnPgbCZb7Zz5dAbQgNA5SD8RD7G6",
  "key15": "EZHKCeNDSFzvXBW8MCMUyR9qwq1Aom2FL7Gv6VLcic5S79w56hr7kL3Tb9uDWMhG9x2kJXYiqSnxA586vvSbXUC",
  "key16": "8FyVz1neDxhdubMucn7xS8F9EVt6mML6SCKa9TqqzLpAWbyKf4djB8GR82mWBqscDeWsTrR3MEgxtXzCU8cAAMm",
  "key17": "56DZuR7DnJ2MwCSu4r3vMGe4mFNESvnurdrnpLKE6onK7f8QC3t9fmbbGTB7HmJnqDJH7gGWDb1yitP4FhfpKdiS",
  "key18": "2pMBNGM9QEEAthWfcdyEn4xWMd5oG3Xi78DoJWFJUVd1VFiZ3M5H9LfaDXfomp8VXnrQRmKmDyA6mA15GDnySQJ5",
  "key19": "4KWZ1PbUxt2Lhi4nLnGKo5KFvoi1eH1LJozLGyLa4FKsi1uWWKD4rSuVEa3EgD7TELRj8uHLF4TZx77XJLoss4AE",
  "key20": "3DPnPJdz2CWaQr1bUBtn52gakyUfYRbBsKwHAdpSVxoH89ghE3Pj7r6JqCwtdeg5w88PWoV3JHr6LXHX6gGTcfzz",
  "key21": "2K9s57iDCHXfSBTdP3njzpANQDPbzYmp4QLwQSsqq1S2mNdrrBmgBTSte6FoJkEHQgP4BQ73ZpnVAVUxWAY5Pmee",
  "key22": "5cfk3CXYCHAqLceycenCYujnW95ayMGboSRh4bkgWcYdvwZtjzQmpgfHbyYbyPjbVyhT45hAPykXGDP9M1rWz3GE",
  "key23": "5anyX9yXtz4dScEZg9LSSryYjwj5QW12ehsKEreWXpWoGy5kc5RHgjU795nurWcxQ8SQ9PU1SoFqBx28Bq9zZNZx",
  "key24": "2bzW6nCsikPy8DYp7dsC3t1sXZNev9pzdzTv4gVyqfM5szTJPV2Q58ouT3oCecXFwQ9Lk1UqqzKUUyB78o33tjKL"
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
