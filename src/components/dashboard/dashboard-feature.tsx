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
    "65SJBTyTrJm1qxRbUuQBM2YFyaUoWE69dFHu8NvyXmy2o2HJa1SLEXMJ9jpgqfCnwe4AMZSSQZKQYUiW3CGQKpW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzgNytoWvAjmJrUtL3M4rnhUuMrDsrKiucuseA853t4A5tz8UAWdr85ZfaD7bVVNpRrVWM5KK9QjKbTnaU1Q1mg",
  "key1": "2pYRE1joEiDRaM1oxrPGq2hJGyVchcc7MecBK3DgeUnJufGTgKftAsEEfNQpocCXjkELEgQUS5nX6fFyEqc8skqU",
  "key2": "4F6swDD2vWu347myWuNnX1CviCiC2GX1qjnSCJdmzEWgwMB9FXeKm3D4Ju3iS7UUeyjbkpowAVxmmazicjd2TLpm",
  "key3": "2ur6YQetnJS1LQSV5YJAmku3dCRedR7jzmEz7sS6cj9svWzrscqoyYR25MbyEan9hN6gHsmpW8J4grJvZ2mc6Gcn",
  "key4": "63wjUGfJWWutmv1yrkzS6GyS8pSS3MB1r8xZuhWraaavoJiQeBYcQj1H2U4KeWfQ5dMHnXHihYVEhUHwjMFCeqL6",
  "key5": "4cCCpVbvvEq2ZcuDkmo75MhtyEKjFK4EnEzvVBuEzJ6SxoH38hTQ86bvQCTdkgHzoHiSx2YQgt3CVgLwwQftjYKz",
  "key6": "4wPUQvcLbn24gqFhz3wxizPsrTyau7nJWxZvEcoe4jUohPLN7GngfSfSZWRb94V4ThGbp33foJ2XdVE1bgA13Gxw",
  "key7": "4V1du7kG7wa5JRNjjmwiM2TVwpPJNSQHzvSisnTaKCo7YPdsQsJZAJuiD3T59YXX7DRiVjJoTnQ38MQJeVMgEY8b",
  "key8": "Ez4GXtuwhGQpBwjgDYwRz28XtsnYur3fbGAdAdJGVX5wCQUUaAgPuVWaW4ofiYw9HGB72r5H7VrPtBqG5PNdtQR",
  "key9": "R21eCAbR14RMtWb81wdSkUbfcxgPLmtjRSUkAMorHmyF6c3a56FDxYifa7ggaCyZp3YEc6B19pTc1HzRHJzEP67",
  "key10": "5KvhtGjvtpgTxx9QWrD1EWaafmEkbjouxoWPJzRHSXogrJK2PqvzXpGxSL98YC7XvGU9UFMVkFe48PoH4UybddKR",
  "key11": "5FLFyNdjeXLSKF9U8zvYYRQtp6x3JB4DxHc7kVVpqi4GHThYjTYsBNsdVfFHj8jUn1Qz9HwZdk4HpyTwKhWKMq9i",
  "key12": "5thx5Y5T9BnmA4UQG9Z2XWf7B4h2vGhnoH2nVWUgF7Zx6Z6ybpLt1cQGJaqnXjGPntAzcTkwMXCuj27iSfSPB1YF",
  "key13": "2PBJn8UwKrbaC1z7EXufrxYughkb4VcWsnUP6MM8bpKeRRBU19zDdqMYf3GDEkzkr1VWqZE55xxVxMNpvpHSe3vs",
  "key14": "2LMZ558sxJBGy8Z1LqEr2tVa9EtUeTz7sKAk9UFSKqjvJZU2ppj2XSLUNgFy4KW9XABshEXU4bG7yd3fZgxRQL1d",
  "key15": "3Y5p4fKhJi2yxVXbYQEkyVU2FK6BUzk4RBFuW1md4k6RjvJ5KzSTvoPhmXXdaZg3QHA9gzUM37FwTv4FsRZc7oxP",
  "key16": "4SfzBYtAMa6vXwtGJh1woP167YEe86LEJbMqcGm4HUxiE7RHYcvi9xCPix49KEu5rx7QY8DVvj3QSVc2bJFRRsqA",
  "key17": "2ULr6orSJbisd5DFXR9RJb9MP9DoP9qAeqNeVNCdtfQzRtgoL9W9rsuH1Nuw9QnwDCiQxYuXZKmL78qeA7DCL7Wa",
  "key18": "3GtUFvFE6RmwhzxGLJ9zhdmZDu96WKFTnqQHcVxbNL1YyjMp84xgzuE8KfhPUtN1r7jTv3T7665GHorCER6XwdMd",
  "key19": "49RK3UdgufdyNVe8waMXTaM8E15KdRGGzJZV5yoLAfpQ8h6C5TPJXvQhKZTvYn8gJJi7AZPy3k5nAoetddDp4qR1",
  "key20": "42UaxQr1RttVZVX6rGDQgew2HybKNDMEnqr3YVSTLSu4367JaowUbouyE1reSrTb39xo9V6yfF1gPdstR1UZkHUT",
  "key21": "398omf8425x2Q74nnm8Cn6zuJi8oRh2gpqiDxrtpQUzPNwkgdfpq6fF8wuHmjZhtEerwB9KXVv6bQWLsZ9BDtLk4",
  "key22": "2ThWHLEMpdiud2HZe1Z5WN5CkpZo1mamn9CFfYMFANqq1hU22KNSfdFMHYmhmdiKC9VKVPSbYAQcdPEmYwq5v88a",
  "key23": "rtnGMLYmwMrbQx7ULheiNEB77EeS2cdn1rVjaJyJAk3PB5aecJskothk57ehMs1yacJkAkmrvkiLmt77DnwjhV1",
  "key24": "3BVUMXzE9kz3ZAXJ7RxvAni65T71tbtxH2rJttqkAdU5HfPHfiRikemJ2t4RiAYCb42pAiftt1TXrLFL8t1Y8g23",
  "key25": "kvvjhZ46pTr51ostz6JpWtTg8srvsdTYwhMXS5YQji5FyQghzKuaKZnyxXYnfG4BFBubx3canUfxReKUxzdNPjF",
  "key26": "4xUziwf7KHditAxtwUtoPW7RsdRysYnkQk8vzRacZzP6W6RrZbDCcK9sdCSFSBEbxQGVLfEKN5sJ4SBVdsoPfjXk",
  "key27": "3Ed61uSeVJ5ZhxrCMiUWWmjVQJTkZA49XiUWFE2UXbf6WueZLZ2p9sR1w73vD5MLadjqxYPiyZQ3TenpQwMFZC5o"
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
