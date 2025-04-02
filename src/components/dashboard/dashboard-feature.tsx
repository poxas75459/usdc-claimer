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
    "4fcV595XCVeV3uK1vYQKnpE6GCoGUKtsE3Hn6Cu4PuSGs5cpTGLBGP5JV1nPQvyqtfZKUgZNzvAVbYHgSrXH9kk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5u58Y39MgPrjPLvJSsJ4Exaz1cvytkdjcvCJumQ6n8xnRS6mZEJ3i7RXZjAGjJt89jABcow37LkWacY2zJhUyb",
  "key1": "4cweJhbwf4aBMvv83XS6KHdo25RoSXhcvteq8eomdpfKYDqkyHtz5AyiSonc55c2QaPdHuXECWnd1rAn6iynxk7n",
  "key2": "4RfGbU2iBzVdA6mJ2rb7RG9UF9bCdwedUuEJCHV287pp2XpUdU2APZLebMpn9E9vE7hxDQByhrK3t48vV8YPvesJ",
  "key3": "5Wfcm8Ke3k1kQE5S6fuCi4kGh71Uhd68T5Mbw8sZ6d3Ygo8b7qroc1eEDyrXe1S7Ye1jFSf4yNAGEvULhGG2dN4z",
  "key4": "4k6Pq8ax2raiTw4JsTYwvSSm28YeS6BDNVvWKXiXpuZ1PrsFqYvYo8Vj1vogHx3YG5pxwJ53zFNX14cCfuTwFRtG",
  "key5": "35fNWSeuQGZkX1vTRbn5ipLmm3gaJzPYMEdGbxZKKmNBQVNzb5BczMpuNTfseGUrbTcsC8RRYNJVeE8GEwypXxVC",
  "key6": "bcwug4CnU1yWnydLxU2FV6WxU6ySWHa2LJK2tNRC4WL1U5FtWKfxz3o7qvvm9NkNKEqikgB5TgbnKENokLKNHe4",
  "key7": "32izMm21jrfsguHYLn7EMrWoEBzHhfUHLTMH6MD7A3Re3sQSGU9AJ1CuKeEPWf7BZfstvB3gaFUs5zy9rXNy6CJf",
  "key8": "46bxWocVTZZ77dwEq2XFm5ktctv3NchMUv7GXjMRjdxQCPo8VAW418UkjGz2sqoW4dyJTU4pkhNtn2QXTB5Us2rt",
  "key9": "3X5WymmXEQP9aTjJD7hv8jBKTu4tz7yZSa6tGndztNBhrB1cEigyWDbiNsHYkWBEJCLSjj6D1xrQGY3X6eRsUBeA",
  "key10": "2xQFTpAVqHR73o9TGiyTj4sg6YWGouCd6DaHZjth5ZVJoLF5FG5ZPJcrQbPi5N3swLn4Lj1xeDmDf2ytiAPsZqFW",
  "key11": "5Qf9CwrThTJwgyVvBtL85Qd6AeQLknqkY97NGe9k6pfwifrMC8AGfLGsNZ6kzs7md2pKUhCZh26gaHi26P29qkHw",
  "key12": "58oHFVLA1im17SLCqnnLRRwoLRwojjRGRLHP4u7ByHk9rFY2XW9Yy4FYC8Zsk7G8aWKJ8TfFudg5rjUvGtEDyrx",
  "key13": "2Hn4BeRWaydJnvpHCTeLz4eGYdGVTbGSRMGNLyPym4GisFptLhtYECLcUWi7Ank8SnMzxCuuLcgKyBHJhPooP2rG",
  "key14": "4qQzoNz8chkHVG3pPVPvMAoBPSh9A52ds4ayWphii6geNGi5mY53G44rtpnc7S7KcKFZuvjL3KwTgm6PAP3aSN95",
  "key15": "276MS18ohswusxMS8jpMShoWCVYHna6GE1NEQYaVFKjbYgyFo6BBrYpheokZNAPbJz7HssSnWZihGBWtBAQkxWpS",
  "key16": "dMTFKTcLRoXF8MDX69dJ6Jpbq9TcfCrr79nQMmVv4mMhD8Xc7ozsVuJfX17hE5G6GP56cTVWooLJoWR7yzJRakd",
  "key17": "nW5XP9diBWGrSRS7DaqBt3yRirb5WKDeNUAPBWWVT3AgMWAfQubvA7z9fxhpfegMNnfHv3wDJM1g2joMvvtond3",
  "key18": "22MWLSHzcrBKVxB7oBZZRubUgyo27tDevrF5e7PhKpkAkHt42b9pViHBgPaAdJARK7JF2dpWgWoyXR6kvoZkwSJW",
  "key19": "3dnLU3dAxnTy1V7ZsBYEwkb3tsoPHBK24QsGAGgtV5xrCwQJ9bZh2tnjR1Qw2dyijas9pZn4oz4Hr3VDpzdYZcDS",
  "key20": "uYHidpYPwEUUe9ZW8km4K4nSRS3ntpuohaqJDMK17k7N448q12GbXUV6cYv1JqU3HHGbd6o86YzwNNcrTd68zpZ",
  "key21": "4Hy7vW4qLYwWdq1wPHquWjH1WSJaewjgPidK8To5peoXenbDVS6ZuLesYAaZKarfEMFgKy3ggfB5TVWCQftVFaGg",
  "key22": "25i5oemeoVAUJcrm7GixtFd6sCpjkTp1BWCMT3Z7GPDU1Uh1tfphQf7EbHmtfCXHygaYasQutKWHxc6cr1qpCNdw",
  "key23": "47sStwLFi5tc6kmvax4bmde8eoAumYGVsvQkexnwTsMfno4UhgrvYKq1LNS39rpWSKWo9nreuoaXZkCuJQurqbHB",
  "key24": "WxKATmn9XtMG7S5GKRXyUGcRSmcZ5PyaqPmW3JQkNiXM2MsCGo3oFQbFpC4wLNbX1nSMN6gqzRK5Kw7B1Ve5YkU",
  "key25": "3QVhgNaGbdsNhQSzV3MxVTekMijhvNX9rbPpNXsiSQdVp3hohf7bSXGtdZpwLgJ8GLjGh628ajMi7Ux5qTfGJ9vu",
  "key26": "57tQyPmfAvZW7Xxm6rXCnQ1kmTcMFJ5hRZwiFrRU3qGi8sHKV33GcbHhDMejMe6m1nJf4H5WgrY4HupnpWxRUnVf",
  "key27": "2UBFvshx9rMno9HcKf4FVhVWn6bJNWTDFKRpjiviLFhDe3DqDKHNGN2KwHzJgKqKXjgE1Swwj78P9A1YRGYtjRMC",
  "key28": "57TgdPY9S5E2d474r3gm9uYwfwNLN9XRrq54W2sXF9vB5DyuvXyncjhB2kRgy4og69Cg73MvCcHye5oocWeJ8ARJ",
  "key29": "5dQtwKKXsbMEYkK351xtUh7fU1TSQtJ1p4jttfiH8s2dz9NL5VGyff3DojDvJJyCvK1XvLHagRvGEJUZGsAbZbV9",
  "key30": "42qfRiLSU1MabahwV4BVdE1hqVyS9HWrDUuTY1L5PhW59TdGAuBLTNJfygfppio4Vcrr2dwaGfa6E8jSZFkRpBv9",
  "key31": "uKAnWKMFi3B4g4wxsTVFW8GTMYH2vJAHsXphqwKckT53KohNMbDf9eqSmDDfYbqLisK8cmnfZZvZCTpk9d82d6Z",
  "key32": "pw8nLxpWZQEG2cEjgPDtXGnGeP9gT7g24KsaBNkQHtPVnbyLrsNs9QtddodPgH1yEsSCSAo2JuXgSV3axaQF9Fq",
  "key33": "eKo2RowMVdbpJfxbsZ6CMKgRFSzSqGeEPdFeTHcbqdZduKjyiVFf9eC6SDvgTM7nLJAMGDNg87XLPagnNq2A4G8",
  "key34": "5bZDT5evSY9dNnzVP6EYq8zPHNLmiDm4eDZApBVSKHup11f2Exm7Mf8B73Y7nWhU3UNErMbCWYwfFfw7nGCfM35T",
  "key35": "3Cu3E49F34pVPwYRBzGd68qCeyLpfXUUZJLCCLG2cxgSok3ihsV3r2j6q3tvhRiiUK5HUuFrQLv19n1WeQMeRaeD",
  "key36": "qwqvmpyTRn1U1cP8ZpYpoYbXkLQwuzRCs9jNM9Vv7h8Ndr5aMBYkFSUkJevJXRzXq8ayHtfnJJf7rUYWvDJ3oBr",
  "key37": "2HZo87cdB1Sm46kbdYRr5KzZxySi4QhVL1j3qvsrGndioqH4agT4NbUWvTSBrP863j4LkvsLj5RUAv7QCQ2NvPhW"
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
