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
    "YeEuQBLAbEWxUjtrbvPk2SdutEfNbeBczTFZ38FyYgEQZv8xdnsxaYuzeuWX1qTEHwRA4633HHH2JL2T3XMpxxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Uue9C4CDGaGAsyNT1BV8EKcUAy7kWPUPssuHwuMaCjd9ijurF2voEUY8ybANXm8zhFM4LdihypVvgwqjfyvEei",
  "key1": "2RQ5r2Fj71kfLN7xTLEtexmpycnf4dCHM2yPEfZ2oJjhFCAxb8LfHx1WuCjHKp1MN5tSKmAJE8cxdVQtprxpq3HU",
  "key2": "5ZuMXkh72Z2k3qtd88griFPVioEdy9ZR59aDHtXrCYNvqmaQtkVV3gAq9bnyGZSQBGfjNqdGNvU6nDfMi5XDJoJ6",
  "key3": "5uv18TwqPL5cp1ugp1Qefkr6zVmffTGciuhxywK95th5D9Zg6UGLWS4T7Nf8DKh5pLbatEYqJfLsYWpqaEvMbm44",
  "key4": "s2AWL36ZJ1HZQbD8TCFe9UApKujwzoZ55SYWKXqXK5U37m7AKTamJ3o7tWucuJ6uTZvF9vqAgKtQWrrNixVTeT2",
  "key5": "317ZhmroKDF5jEnyg5y7DRFstyqsUd7wGJP9wziyhBmtCx3Cj1wcVjzvk9NEAtzBowCgsBPTMp1S1GZndCqgKXNi",
  "key6": "5wWXwHdu2jfRHa8vZUXnApRAuqYh2bsU4PnbNYYqu4LoCUiaDeV7Lk5J2ZtDFJLZZvhxpQ2QwbPQy2LjrYqizWnw",
  "key7": "5Xyrhp8oJm9q2Qo3arSoWvAkdSHT1UfC3mvApyrKnr69b7gM7pi2xzVeLm2eXYsn1WyuSX749XzuLf72omrhHh4P",
  "key8": "4nqzC5uwjisViruVGmfxeLvRCn8K8o1cwfwH67cCHADnRfaipyiADquAjtrFPbEhEJQYVQR4KFrj2tdRdzPbyjH3",
  "key9": "46w5HYUibgDFDHepXvNRZzPHqCSSkq6uLDMU6AhZ5DnnMPingDfdwAzQcLD6Znz5qfTtzsH82fVnRxKwksBMbYTp",
  "key10": "27mh861fV1eJ3F7aZeqbkvntEALSiGvqNM6c651BsQ3neRujFJ55hJ79vuYqCKKkpbj6EXN6a6U5jUfq6E5oXufe",
  "key11": "2151K5Jp11rKXAtNR76zXKLG5bmkAibUfvJJrwdbj8LxK9BFVuEKtLEKRpW75ze2Ngx6PnTQAEEe2FJvkWJn9Hfm",
  "key12": "3HJFUQXAwnqe8hGc5Tt1UpopAE5SefT4vBujwUPvVripi2VSjJiZj5zrwjNZjQdCNyGPJspn3kDhXR3TDkagbGdo",
  "key13": "3pC73hKNJhapMAk7Q7XBheDnN1z2svV7FLzt5oYDNw2oW4MkYvQQ4faCNJ8arVxXCDLKQmPZuPj1bjjUZNSEUDVP",
  "key14": "4TwSXYs6XaPmuXxkchhbMdGK9xjQWUKaMGNMCFjx96AAeyeBRrR9o2eZRPzqaC3Y3dm8GE5DFqZmXfmg4pExM3co",
  "key15": "5QKueVG91NX8H3bUo1a6Tpr4HVLY14T9LX5poRzHvsSXuFAVpW9XfR2Vd6B3CcnynkjiYvQPuc24KAkZUXXP3NbM",
  "key16": "2X9HGrkhpDEnkGJcsdUZgsKMHQedLhjrM1yfPNb8rUbC6Z2vvUCDfYmUdWNoJCTbwkbcLdZeiXwvK9uxcT4yCfzD",
  "key17": "4otCPuLvQm9v7BMcfZcAbSNnEurFcRsjMZ1AmNAkScRr6qKcczu4rGyKYm9t3RFoTi1bVHP5sYQ7xrvjTDwkmKoz",
  "key18": "2LX9UrKnpbiqzxafg5Sj4CCNdnZDsegLt6nF3JTmS8jtf92icbHwYGcr6t1RLCyykhEJAsFzA68vVjSyBHc8FrTW",
  "key19": "2cubyRTsEMZvMuGsxRzdBfcMgYFM2G1CgFNwLaYcPANqdyDVUt4mLiqAvRvLfuV1osAN4YkRXcUXYzrFttA1PqT7",
  "key20": "2wQNQC4Nh592hxFr5mv6dPisE3oFExy6WiNXpEh7p7mabEqdaFfRso7Kdsxt4wZgE2ZohAM2qHCkHMuSpuaYPxwa",
  "key21": "3AbR5h2dgvHvaj2o9Wu5Mwgw2NFY9pGDnRxktK1bLqMwkRZuU3EbZRjx2R8eaqHyih1kC1GdnHy4ED4B77kUtgEL",
  "key22": "25wFy8wRzf4z1r6bXf6GvARf7efAsNwgSrVsFVrHFwAmPkL6fLyfqkXZTSF5RxRsGSpJBJHkcYoGa9ohdTdtkubr",
  "key23": "3R2RwQ73B5vqoLp53YES6MbnjNQmsBWeWgyPsRdkiH45w2jJgpfCP88bjj2h9jEZrxbqj7Ekhzg34axM28XPX3sF",
  "key24": "4FRtwu6onzSPcSmGZ8ZJ9zLr7zSiwYp5CB24FejJ6rx7rHbqsXgnH5BAdpT8Rw7jukQYnSRoJMqL9tVq2PzuyYm7",
  "key25": "3vWLxzNg7TEYbDsKsjzXT2iPbdUaHdkpcNNruwnyzByTFNXKGNjcVjXhUh8pRfYi9HZnvZXDiBRAm8bRwdwmX1PM",
  "key26": "3imjszZwg4rTqik9xpowu2DXUF1srZGhm6MZTwQYTaq3xF7JjyPNvkfs7hCLGajgyTUbH2w8P5dVy7Wbe7huVN4C",
  "key27": "3YCAHSUM1fjHi4VgdsKxsuT4bXqzQ7MQQDDwLek5PF5AeccfFVPTEsk9p8SsgMgRPsD3eVKZJkHitEGYfM8aKYov",
  "key28": "5k4UNL219wegnh6K2doUsxUQ1GEiHt1AUpNx6x8wRQuoC2YkK7DosrsQbM4zb9P6zZrbh9erg61pct1WrnT5ayfK",
  "key29": "3n9aczvJLRgzj6rG7Rd1TujcvAYZieaCqD7fSqkGuQjDEeTq23NjAHmSDUgvBeTYN7w1amrxd4GATAZ5ppTTX4ha",
  "key30": "ShFTNtkn4fCttPQ4aCF4KR8ACQtiZiU1e3dWh1aSWU8WSqr7XQjoTYDtxMR6bVtQczvMKN7heP9kZZ6ZEJGHYm8",
  "key31": "U5em5XNv8bT7jbtT9QUTHxHNdAiaJtgnt9VyiUweCicVnzP6Xzf2sj8h9Ag2bWT4qostgsBVFV8ZVs94mXaN4wG",
  "key32": "5YNbmGkvDFDAHm9UfbZqKatC1rVEF4hP5smys5wMaW93Tx86Lt5yoDejR5WpF8qt8nQzvNmoGe2QqZgZSVzGYP1Y",
  "key33": "5DXBL2gEvui9jxDBuMDFu8YTR4J7GdBN43QrAF5GMeqLWSapQBFmFAPpRJLqksns2B8TXBRsYYFWZhLLnvpCDGMb",
  "key34": "5mjDYQ4c53xtefaKDMg5dG4kANKpvK17jQcvGTczNd2YLnsx6kRPz7rJRz1qyTEnYp46KpYsi4wPvou5ca6T5B4s",
  "key35": "aoozFYqicmQvQWSaASuqNgxPadqccr8UGBmkSyRchTHMDENovMXTdmggcdSpqKMdacsP62tMZKgWdMvgBrMw6Ms",
  "key36": "4L3CQHbLLcdNPXWV2SQa3yzxJr2qNsSKJDr7bgGFxaKbcoVqbjbf92kQmPKbNBkBt1cDzmcmMXyaD6Ui2Daqjfwt",
  "key37": "3PCK8iuiUaqTv2vbU3znwrK2UrhLAqmZBehTbEim8tB1RfTUtxLR4ZFdq95HXZaYeLLEWqW7qo5oNvmdCQj1cigi",
  "key38": "55BFjhsbpq55NwDVRRoxr24qhFUaaz7jitS7FYufDSVvBWufdzXVUSeX6CXxTT7g9VgXggQNs2d5ja2VGzVqx4A7",
  "key39": "4TKa2cniLyfY3S2G6zcD5Q9xWXKDfgQQq1JJ1V7tSbBDHAewzwqRJKUWwN9YMUsGqGzM5ReC3f2iNxp6dXmLo4yU"
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
