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
    "3pMHup395T94hRaeaqDuQ5PcRWvd8LjSerpmFHVjBTiinZ2kBod1YnDm1nSt1XYu2bP5Mu78uxax97BrofWfthJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQNYq4mFtLFS9PkGZbKFQGY7SKJfV1siTFZvf7UCubgERHVkyu9J65ZsQDStKwdqTdDz7oEGyS8sEzLH3bQ29VP",
  "key1": "2AU7qURPiUKVTChxoEgBuua4bNPuEk9Yg47gz8DzgvCRRFyj9k4Kaj5k8DSVGDphJaLddyw96BMaZfCP6ZGmEXaa",
  "key2": "3o3xSdjqJMbckNFkPCEKRdsWUMB4onXBqNh3p3h7BCFj6Qw1ArHQnUHXawEeTmxGm68CrA1Te9wYZuCGP8SJehAH",
  "key3": "4UdLd3ZnZrZ7JuNjNtgqeJPEB6pKH8hDPyYURnLm8buNQcrQwM5m3JFApbvkw9fLavY2apZ8d2LSXVwdsF7WzYJQ",
  "key4": "3NU53UdzMZqxbuCnaYdLww8iBUxwz2gpHe9HH8P38GzofSYgjUAzBkQNPjdNfE6ALxGMKnaaxXaGK32xxSvCWMBr",
  "key5": "2SKEYyD6mnxgz5ni8PJzVBF9c3Dq1Di2R71scS8kUhgXnHJbU1dhYa4ntD6tEaSukwYAtVaayCb3iUBpsdNGycd3",
  "key6": "zBY9J6ajTApe1SghfhEWfYLzB6FzthCxck1pM7gCWDy6hvK8DgSfwZePqqfrLdbNW5A1RU5t5a9j8QPkatToqxW",
  "key7": "Q8XXvWcdXqD8w6cmJ7dPRmecTEgF4rBpxyHPuVKsEa2Qwq2gCwVptZNbhb3Mnu6AyJDBrajtxARDbbHu2MEsTfs",
  "key8": "369rYoU1GKD8wN3yT5dFzXyej4ARjN57hovr8eayDwLHUs85SVdyav5wYWTCrUQSj8SVMdnqRHYkFhJuADbTExv5",
  "key9": "3UYiMFrjvDHsuAnWiLzWUhLsatKB6zYtqv6SRNunJSzJ6pMAkPyPhY5uLCbTjDimsdcNB9nyvg7zzF8r1w8R3PZ3",
  "key10": "5HMDg2BFgT8cDtPr4hX9RkT6ca4kYqU8VHZgVZEfvvxsEnRQBb2UgU12WwiCSfRMCXnyxWPN3oxDspap3M8iuPjD",
  "key11": "adoUT1tMQtoCR8f5aXWw158ZJuKrwH1kVATZtoVwDEGxgZKriESMgkNtyALMTJNs3kdA3bpNUPHDMLouBinoHox",
  "key12": "vWXVgwaNUArf9gJcFV9Z318qJsrJTRTwWNNUG3yt24SbG9jpFN1PvQRtRSNGBD2hS4rmcFkaHrxWK7MzKDDmPP2",
  "key13": "3L5rzqT81yMKScWV8GVErkYYoBxzvUjC91F9Pba1PmUHNngGVamtcw8GeiPTiEgSvoju4ntT4qp86Bm66CjmQaEj",
  "key14": "nktM8tiwxnavarDYCzamUcwZ7e2VKYEHE1FUeA94Ju5d4agyPvW6WwFuw3XPJuHN6aNjdFq7cksBgQ8KyhubN7G",
  "key15": "inn6TJH1GuHfuw8fzEjKXS3T8sBeBjvJnNjWkAdfZpFEJtrSMW3saydd1TLHWkredqVjSFcTXWKSQsmEpQwB5mN",
  "key16": "62sK4NfPntvPvirbyrqs1gLPbkKBgom71kiNiBRkfbCKwwx9XeXJhyEnghr1vXcBinN17TS6HGdyZUUvSYG3hzDU",
  "key17": "64g52F8rt8zPXzeWbi1oib4juJR6PQwtyMtQAvWcC98T8bEAhc1w8i3Thd8karomgSUrADDRYHjUJZrPtLq5kN4s",
  "key18": "5142q1Y1ZhSLmRVKwRs3SW1vSWK6b7r3ahnTC8SCe2yQjuYTfiZmGSogRccV93xoJTzyYny36zh4MAKYa7UP22UY",
  "key19": "2zcRot9Aaqc3e5hQsF3hwFUkVECtSfcjuXYygUZiDCExyfg9o8JpyaQUX2i3tGorhstkyAsnqSuesb4svWSUJjUF",
  "key20": "5Ep9ftLJDfrwmfXkxym5Ja5V6kq8Aar1788rxfas4yYcCFHsq6cMMT4BHhHeAgVY2HopnzUyazgzSPCpdjeaFknj",
  "key21": "53yUwcVnftFmAf8ZAB4hxe2uNwqFmQpvRTH6oKvncVov3biBJbsbPTusi8NsVWoEwBnmNR9L8jntzChX7V5rnuMe",
  "key22": "MwGGtsKNZTzKKbD4JEPcMLXDWjvTy3rosBCEEGjnA2XC6Vc26w2bLkWyPaHAtxFDCQ4sxm3Xs8HLRh6JB91q74e",
  "key23": "ZVCWnqQCgWavxbeC9FYHwCfFY35SovDjYhk6sEQshGxVjABQ26HcW26tQUzspBch44y3jN2RTJVhnZs2NvqVabR",
  "key24": "3VsvtDD5ctpBNbc8Lp7hMqgTdRR7nj1tfgVGSzadfdLXuHdSgw9u62FF3jct9bTARqQZzPEo7RDbLFsrLS8Zdb3c",
  "key25": "63r8xbbxzFhVwCCzBTDL9QA5wLGRLqSd6p8CLuxM5tvPfHXEuxTvxdnLKv62zdKPf3NJBFbXp7196G9B8aAELL5L",
  "key26": "67pAmFTpcDxRuLzyErKCTUEPe6ZQGYQ8mgtQV9LaaNscuFnqzwkAb2ifdmWaZ1jnwbc9QM4g2xmBMTXSC2tkbc4d",
  "key27": "3ShkeM4PdgAsNDLh6vNfJU8C5FKZtG7yEy4XN6u4HefxuNuSXAvjP3rySP3BVaerx2QRkv8vzxNLXdCL9nF7vgG8",
  "key28": "51uydEB1Zp7uAVRkzRqzbjaDg5cDCv7i7RnDTscajBha2iSVB87cCEHZfBdbiQmosxpYoFwCK91UfmZEaYes8JnX",
  "key29": "5MtzwMGUWZ3ypAvPCgEBbJDGzkVy1VSX4emi75idFvZ6bRzFBPGqpX1QeqHgbL42oNsa25GdjiHa6ZL3dPugcVxg"
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
