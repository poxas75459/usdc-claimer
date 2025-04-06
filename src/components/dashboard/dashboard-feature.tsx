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
    "2qtpzF7P8LXkf9ApHpVxdeN12Cd2SHQeEHiRjfJ4ZCnvf5cZk98tApGpUXXPiEHeHBca1Z6upCt5WdnX3s5m9FjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7roLoxxD1qchxc57kyqUA5NeU7TnGBF6rhY81dtNwn825rhGL4LonpiuzchC7cTK8tvg6nRndMgqnGwisX1csq",
  "key1": "4T7eAfgu1u5nXcdGxvJ3HmEEppzjNDk2puzN68CeMVQexkECYZza1qP6QbNxQ93KnKCHrRTserzksXjrNNjKW7qf",
  "key2": "3ZKrQdycZYzZvHz1R3yKhBNuN782THod8QtPwdzJ6VSSEKTjMkTcxY3rzronSCyvUvTufs3c3YoCaubN3F8rtffH",
  "key3": "9S6TdYayExe7cdpAkhixbLLE2ckE9dXsCCxffH7DkZbdapPwbhMGayPUwXJLXD3v4YR8CGFbuf6qHJ4bR2urevr",
  "key4": "2gT3VzBcvj6DFDGycZPwffDjYHLR8TChAxEnmGF4ZxNZoCWpY4rvdHe3nDD6P98EGojJkcD816gUVMHPgfAw28UG",
  "key5": "3tBnGQtxdhf8uy8v45V2uzZpSwDKmytm7xH97KgpPaCAgY3fpQ1XYK8Vgp26rSrGzjf1WBeD1gkT2mZjMocpBc3J",
  "key6": "5SxrG2KQeG14Ufwowoe4dTJAEULifq2hc7xDZn47yYwXJbWQ2gC6en2nBi23YoMw25HbAqbAcVfyXbYBiWMgt8QV",
  "key7": "2y1ReNWUpqwPbLRLkWzJsnSz8U4vmMvnPwdE4KUVBkDAaYXVpUee7Q36wUgUgfcPAc5G5J5t2MBZbu7VKJvrWjSC",
  "key8": "5apMKA5JEpEiPaRHixtmMYNY7PFnDdkbZQxUroSV4zx19Pf8QG7jSQc4qhqKuV2xAwkn338q3SLdBetiVPb6zU6G",
  "key9": "2Nky7sXcVKvtJd2rmzzDUtrDYvSPCB2CBtJXbqyb8RYCevurtAL6TxtUENdwN1ANBmPGRoKDQ88Ndm3eBmyp5pB1",
  "key10": "3qACXc1ybsEyYY5FkTSDRmksw95nAFyZL9mMDvN7mcFRegVjNJvhvPEonaWiDTfYpwdoHnv6aP5qDNVEFUNwum4i",
  "key11": "5MzjuUEcPnXbcZpBFczsSus5RNrEwKgscCwGi6gskxPdCistupEM1dBGBnVDpvd9ZUtBhMzep5rZ4awR75nB7fwT",
  "key12": "4XjgTuEeVicwiMR7YY1jW2VZvk7D4JXR7sLQx6mk3VTMhdnuSjRXuc5N8S8FzPQM3QBX9TzA5NAPrjjoJXvu67U5",
  "key13": "3w6KN9rVyDiTRL3otMUYfyMAJ7onGA2b1wPQHKRo9wbKJQahU79VM14fcsBxSLkyMMJvhbK94ZpZ1ZJAQmEaq5ao",
  "key14": "48SDmmQxpKzCN15e62PJupX7jhn4GnwhHSw3Trnrenv6v3N9ERHVGyM8KjygHepvBfZCJGsQnPBXrHWirn7wKnZy",
  "key15": "5JLuxMgjcFRHvHpvhNE4KbkRU4TUuK7eJwRu1NeRFdQbu7a8mrfe5ry4Dr7UQBTmQFxV9r1N2CCeYHv5mVcjGpDG",
  "key16": "46g1vasifzmhouaHY7wJZkcPP4eQVYAVhw4T79NiKHjRh2aP1216F4w3J6K21kGwUcd6qvR6U5VQLGnhgZncHG7a",
  "key17": "5xSJmxgXe9qgmAtAqBUgtM3TZzJmjfRj6p12Ehp1XCzSupmRBswt1XVgAMAhouj7Cd2hUmSAWzQckqiFxqxzrhfy",
  "key18": "LPMwAVKJy8qzrqZjuJyoKMhF8nTC4nSEAdiEqy3U7kzL5Boh6tsZQrsQvLT7xzM5q6bUVG2WQLUsmzsBaXBs2TM",
  "key19": "3QsbS49jvp6awvj95raFozgmGqdN9T79bHfDJ1FAuKjgnAqes2CHHjsCPLH3XNoV413AinGqx8XsDKXA4z8ueWzJ",
  "key20": "3ioMKf826QDKGMLvdLt6m88LYnuvHdq77gzMZocpLu7wMorjMkLLbsdhs4V7cTiiJKJGHRHSVQQL36e1Yj9rvQNv",
  "key21": "yWH1g6G1HWixYSpHeZkkGF5NmnYiQSpcHSmBcKSvaFLDn7wdFcmLu3EzpVBVUexpWE6rcBnHyjS2mTq2hSuWf9x",
  "key22": "3CcwixbYbdjkjvFXFSSozDYcCyA82xX7ukHyBzHJBFysbcBM4cP1uCz6uomrDn2ReWG7WXJxFe4BgvEXE3ijfpQW",
  "key23": "59CrEhFrGCTFSRUDRthqgHduNBh5SYueV9ZCfc6rmNcdGxSWSBoBK946YsthKS8tn8hbwPVBMY6o4LmcKSvmYBvn",
  "key24": "56ty4adUy1rWC35dAT1XwBk4J2nr311XCdRbkcZLv4CDpK1Qe5tqAXaGxDcobQc7T4s2x5jf6VADAo3qsE5kxJTJ",
  "key25": "3DeK7T9hihawBGK6dTGZ4Biu14pwS4kgepimSSx79zGMDVStk8eqKHaStQuNBDzXjZEAygtijVs1jjF2DxZjfibc",
  "key26": "56s1phjCH1w9j2AXmweBCjhzuG4UxtkLp7b6hCay8Ss9PusHnJdQfaK5mRB9TySi97H8f8bZj85Qz9iszNHj2CbU",
  "key27": "3qnWbjVeUqxuigSg9H4T3x5DR4rBb1unRBHnuYKPSQCuvaB3AxefKA1ZoHXW4mktWQma9tV5o5EKMDkFFuBiS8ZZ",
  "key28": "5dKsxC7vqoyQs7VQvT8QGR2v9j2GR389zaQXDXRgsKPLdvrqBcQ87MX87VtFE1pVuV729TFCnnGYLhnKaaVkN7F5",
  "key29": "4rUyAXsVGRw7M2GE93gHBgEj9o2VrNtw83dQFyxjitKbstZKddPXaRxWCBoME99YgNDFzDUG2Dajht3nMwy2n4Uo",
  "key30": "2aT2L7udpwUMrSHiDvZDprNrRsaVGEifFeaPGWoydcCTpjjRBmS7HQ8xejzPgnvb4CDdJhLfNdAwco9uwcmpZo7i",
  "key31": "3Aq3WSy5c5CcD3AF14jWpsmvGYuvTNRjeLGmaPnM3axz6qWkNi57nY552nLG6N7ATUYc2phxQuUDAzENmFZ88mTa"
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
