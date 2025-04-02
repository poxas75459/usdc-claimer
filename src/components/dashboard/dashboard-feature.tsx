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
    "3LF4GAKxf6syQursFWu1zfYYrx3QpkJ8B4AXhPnV2ddGn3NrxkGd5i2RzpshJKyu8xAkkK12DG18XbJPiKn9fLY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjwqXtv2WKTVksCRf5HtT8EChfdYEGfMVgTEaVV61px7ru25xzQnweJyKMzdejX8gsnnhobqqofG3jRHhiDPSvd",
  "key1": "2SYFTMuTqV22aaq3aYfje7AndgFRAAGMW2LXWgFTeovxBEwgmHtw1rfoAWWbLqxLGmVzMhEtrtEgUaa62AuoCjxV",
  "key2": "5vPv2QoPYDYrxMwErngKj3txzxtFjGtgnavaYamue2P8RJ2qJU1Qpb7rPH7AzcLxgfuH7AmAfDSofNhnSJTnuRgd",
  "key3": "4agL5YabKjUtgsCU2ZNZhgQXwBpsMFD8rRmrKrxAkuC2ZPSvXxABJgufKPEQpdoqtcW2xK4qhs1MpEQf5nqWN9sR",
  "key4": "4f8kAQLQvDzQYYSK9pB5rhJVFwKuZQNqExNS7KpELQJ9RKP5XTUUCUpmLZNGU7WE1Rn4nvyLsLijHEYQaDmiUa5r",
  "key5": "2JMNdU1NakpgJWTyPPHz3u3tq3RMNdxEiUTTjRUDRUQGX2nzcyrsXPnrqQDi7j5ucDgwHSjz6QdGeeV4NMVi2jLZ",
  "key6": "4KNeEeoY6DtKRDzxQ7hNjBNd89cEiE2ckqhthqpTqSn365cvvvZoX7EJLp3GRnb4sgdZAFHd1BA17wBBoKdb1akC",
  "key7": "3pz8UFgudBcdspULVpmUvdZty3pH7t3h9YkBME9wzUzbQbo14EBtpGL5bZ1WUoiBQmydfJgAQYZLsLXfBCqUsmhs",
  "key8": "5CNphzCPSsRZzoJExbMXK92BdgNiWcHU77s9oMKVSmDhpWvWfupCGbi15oKDsNr62ZFzftU1N71ojesgRJka62BT",
  "key9": "2MDmkZ8mpkP9q32YSKBCb4h3yqkZw7ZVJPCzPy89pX9pkMPqBnQp37maitYBuxeyjjps3uho8PGvcNsRb7TWFtp1",
  "key10": "45VcsuLtac9qFwmLsjebeyw2DXgThwFpRBzxAzFMwNRhA2qB7uDtuzhNLoAeYuvDfN1NAXKPbpPMN4DR88FtzYBX",
  "key11": "5BzmsAjxAMUb4BW5gaKqsLE9VskeFLJiU7KzivyNKmW88VhJ8rQ4b1RqyJ9KK5B1BkBN5zUhHaqEVF71Ho7H1tKm",
  "key12": "5LAXGmE4WGhwAnT9ZJFY8uiXLRtxhfrYvrH5N6xkRDCVL1AyPhGLi8y3XqKFNMeTxva9WSjLoCGsLrZKPvxVncFt",
  "key13": "HGugSgwKjHDpyGfr8BUBQQuuChFV53SZ8ptmWM69Shrhtwe15u5oE186WM775u4w8SWJyJGAc7LxbFKkJtUsz7n",
  "key14": "2obhM6KCWrPAwk4m6x8L8x6JWhVd4Sy9qq6LGt399hdGfBW4uS8tHAnD832WyEkPnAQzuJv8gKCPMPJiCrUtH7yQ",
  "key15": "WHnNrWvdRpQsDxvkEWH379aHywemnKNvpAvp2KqgfVJgxJh2A3AwWoeGxYJhinfQo8RmRTxVR6BH5mPMrGJtoVH",
  "key16": "Md1nWCuFwTH3gped1xHoudZRWEwTyvcmigFRMsM2TB8pakJrrLaHfhgTW3z7kiQnDwzpHyw5WJ2R6USQ5WgKLtN",
  "key17": "3neMz8DsZRPDza9LWoZVYWaAMTT5UffqVYF4sLtWCuHmh2wTtW288p6dNFrC1wFYodK8rAqxGMN92dGo7MGFQbYL",
  "key18": "r4BrPNYJZeS3D5z6HYsSDEw1gmueTLcAWnBz5HEyDZVo9JsZ2k75btqot5z1aqGouuYdg1zrki9RNKerYRRu1LT",
  "key19": "kfbnSe4KD9K3AaHgNtZhh4MSBkAYUrhQvDY6xpCuchji2ugBLsYqYyjfQnf26eAQZS7nnb3Q2xHebEpQeBH2PVz",
  "key20": "52daqyyaiskzETVvb6GvFvNuvR6m8thBVDZ8njyRyKTXgwz37FHskhChpJ77FjRS99Ch94fvN2uNH793ySnQauDR",
  "key21": "feuRwgosTSyogr5dHR4Mzo1jEw31uQdeUFFUQbUcrJucLDxwH8Z1x1RzK5HmDNib9KNdnqzLRwazWjyjYQCabo3",
  "key22": "2jVr93JYWWgi5vrtHPYAuHnGkYGPpSnddUB2sMBwvH7HRVVA8DKL8mqSMzfwxbCWUF26G9TLZhJLkzhP3rfmobhB",
  "key23": "3an1xrc1cWV96BMjDB7KZPGwPPyJ1Ay9frH6gdk9tmddZPNUwsrL4tPcEjxm4LAmg9tog2pHGB94QjLBHyHEBXaE",
  "key24": "EDvZk9Vqb3DVBTVx3uuQtyKy3Aff97Lr21Zmka16NiH8bWre5yhiqr4YQdkdDe15UgcZF9ViEbRBqSP9zAdE4wV",
  "key25": "8WZ6HYX97Tk2gyE4AKgWteiBcS9dtKFdz22qpzhsk2kB5gPGVfbBACcahs8UFPAXwLyEqwuTwxHqXK659w91vRR",
  "key26": "3469U4VNExasgz2k9HrqDZ9enYvJZNraee8TJRpMmqSFBmFtDxieuGANpiyJAVCzbA5FmnTmBc1WEKtciAbTVXMr",
  "key27": "Lq1vy12srCd817dpAKCiTe1QYNiKbUdAY7Pm3fmPn2UUgDdsDR5VB8APfcNBN8HobDmJMP2kg6KBZUPFPYfaBR3",
  "key28": "63VjAoxWX96aZYFe5mN6T831ZZ3hTJWhXgBD1Q6twbdmRzPUQbaoiy4PV7vN3DtkQMYXLdA9rphEeSSe9qk4p5UY",
  "key29": "3NmryHTRoK5A6QN6hccRHkb8jH6M6hCENDLzbbaWHmnKybw6m2SuGG5NTBV5gK2WM83LFyYT1ZDyXBEbbkGdDuJN",
  "key30": "3mrceMj3rYgSjW31p5KndxHtWQQzT8AzoCdyDRwBNCvErzKRhPE4gXRevwAwXzXwHni9LUpz7HD8HgraPXEdQcyN",
  "key31": "2x5vH2SeoEQ9v4wuDNMF8odecduBav6p3topsxg9dhbQg9QGLq1z6oZcrh4vgsxFkYLWen1bVcUX3xP3bJWh3UFn",
  "key32": "3v1BoYshcxnWHh5t1yQsiXKAe5VgsbBCHKFar2Azg8tQnSbSJQ2SChe5DA6rN7xPu8nPUwSaMXDse3yfHjJRJnsr",
  "key33": "QSaNygFb1WdVKsiS4b5gfAPdVkSVa3ruQWSEcQhEsQ6JtxsSCMVmivxHpiFEQsgRpGaUX7eJa8zLnyTzoTco3UV",
  "key34": "5DJqspTYGc7GbaMrQi82qpoEzyrHzozKS3o5K9RxEDDQZuRfj1qBaXZdxVruUZBTZJH2XC1cZATFyLg6pGze2Gfo",
  "key35": "3guu8376rA9o5d2QfckG6wNzLcAoDBTiNwPYXAgBFNsWRxgbWdBQ4Z6nYtsXb8qnfHtbyu88A39y76HhzZgz4oov",
  "key36": "2aEWb7cLGm3vG9UAVdj6geMiAWbR7oYwU6JwbxZ4xEsuhNAR3M9E1DRjiWHxSEvWqbNqMhyhYAvcTDcDbMXKuce2",
  "key37": "5FBe29y2fCL4jwXyyfkKT3cmii4RgkigKSTBD1mEqFH3Rc5s6eRFAJ6fq9SQxXtPaSKoJyHArC9pXeSKrq7p5F8R",
  "key38": "8N2TdwWF28U4XVVzXE71tTPBNjctam17iGbHbvd8qhZ8RvHNxjY4NrQCzdh7x3EXAacLSL2f8tLEfGBGQ572DQR",
  "key39": "4bKsh44a72bVpwmnSFXC1xcKpY9XP2jr6Cdd8bT7V4XS316yQEtp8ap2VimyjKesFXCkNAEp2NR3LcrZutxMkDWS",
  "key40": "5vqaz6tSWibqprEUgo5Eud6k1VcraQZt5ACTsxkgcPuYW4JTwDWDFDJYDJHb1VE9Sk3SquYvGqL7dT1cf1f5wFzf",
  "key41": "27YAZzMfiNyuavVcW7Yeem2rLfK6GiSR4XJqQQFvPzwmHvSE2y5hQsTXtCckuErD37JvbF2keACuBeMP2RKRm8ox"
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
