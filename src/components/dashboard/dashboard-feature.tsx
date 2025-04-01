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
    "vUpz6Gs6QcohcCwx2L1bLe1e9XoNWRx3bazBwQd4HmKESABmmX66fq3B3qiivSFZJmpamnU3YRHWHWcQCaH8pq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2es8zE356jTVANksWSeRZs8rTSYAk7N5q4ymJ8sdjWfkiR2PfYXEWQcsJTdjNVXe2Lg8GNGa6Ef8zu9dEHQy7RsH",
  "key1": "3er4r7ZkH9TVuathGWjemERpcAjC3bECDDbqNips8U8mfVQPTNUV7nxqDzzh4RJvXGBHuEozjwNSzLPqCerHiZWR",
  "key2": "3uTpaKk5cMhxa8kjCbF2K8Usp1eh58urTdieEoTeJBw96gibLQBR5qiNfys7zEiPmbCDSyc4aLGU7DRqZQgKCyqz",
  "key3": "5uw2BogLXJ9T1upnwAWYfmg1gmBVXqn5Scw9FzmTqXudbGuKqKrT8DPQYDZ4GRBeuiH62U6J5ASitaEuhGfTTPy7",
  "key4": "4Bh1jqjifgyjquF88U57p3ogjq41H8yYhSbdMsBRVQYSTBfiufFbujsx8GDhEnBW1vkunzAwZQwAPomUcMDivVE1",
  "key5": "o75rD9PWnccXXJFBGt4ooiAm2zonnCnLHQfSDnLbsstrykpPnXAGMr5XcssuHaY9g73E6j6zVbfDA6PvAntHKbZ",
  "key6": "3kXgLowhhssARRnY2Wj7FWCS3hjQ5MvNkAwXppatf4KGwAQMvaJDnvTX7XKsX4PP35AUvqicpr31uYb3KPSjh7nF",
  "key7": "2RZU8XHgHmMxuSCGzgo1hbPqx8CnHcWM2TNE2seERrdfxX85P5hazyd82xiwEBHQV6hbrmL8zAjJSMbi1qAiW2dm",
  "key8": "4rkqKRpStkhNGw1WXSL16gjbV9F8BSHmWJxYvtqabu8uaPsFGeRhEdrTPCq2g8modGWX3YH9Kc2FftZjgbj68R8E",
  "key9": "22YQRsHaVtRVqsQngsDtAsKM1vhhmnDBTbazYvMPLnwPngJAcNazuJ1hdXfPyQnZ4bT22JN6D9uTtMb78EWjBAMc",
  "key10": "53e1CCzjhVi23bRSNqcbbwcZRHu6h9jF2iMfQraCccRPxpP13KVdXYncayDBZbwy9rzXyiYXhXJLFgDHwnnUnPxT",
  "key11": "tYHkMPU3QeJa7UcoDtGksXbRuRxG7aqPpurAUuTnUqsk8heLnpLekh9sD96avVvEdxo7wMRrFHky76wSZaATCrL",
  "key12": "4bjVBZEShjeQfjE6aDh4RPTGfgLdM1xWiSQyKwuDGWLBEzMgRyUsvgvwLSMAdHedRGkS4Go7EGjpzadMGUAHPnTf",
  "key13": "5Mq4BWzeDhdSJ3Ck4shhA9KpW18UzhAJWo5WygECUxdpjQCL3Eyp3ftj7zsvXYkMLrxXXytuhRpWvWJqwmyq2t3M",
  "key14": "5dCeEPYLK47tpdrkfTk9Xe4skbHoZevsfQ431BtouS9CifFxYygyJssqNBmwSxZxx7gn9rPHhD9TjR1EGZARRkmq",
  "key15": "jSR1zygecrHLMjddEYYVuPa4TqaCERttsSg8LehYun4jGuiZM9MkGwDc8iAxbbisADAhxcxBUiePhGPunMoP44v",
  "key16": "39CS1BZp67E4P8PdGF3hkHiLxAJzALxx6M75RPcSRuxjN6fZq4PRFn4qUaHd4HByNyU9fnjuNiw52h5c4BePkMif",
  "key17": "5ek115UvnSqDBRfMmujjhLJrErjpEDBWygFKRBFcMCicsBzXmbC6VsgTfHHyJgBWVxQS2U71tvDMR4bHTry3AotD",
  "key18": "3NaXHUQuRsTi3H8JyPDbkWJLe9dy79TyZsySFQwyAkAZ9pvsLye8TVrXXdkSKjRmq7MTyLahEH74TN6XtVvWfef5",
  "key19": "2vnM1L3VSdXMsfZ8c8dMxK4S5iV791y2vgQHmtPU7Nms6gDTrHTbbodqfzD3fc2s8ueSf1BBAAyUBqqUgEwx9FG",
  "key20": "2feqJyg3pVPAUoeZQ4bZxXu79GjXWhFQ1oArCGfmXNd8XAujsQjCrQXDZS5XPK5HTRBQZYz26bu8EgcxFJGN2k8i",
  "key21": "65hWA22ZYqPkbgTADFmN6xLBypMNPiBU7Gzy9DMUnuNpG8KEkmvS9k7MWwXcSJobsLJtPmjFUsyWfajAS1D7GDqH",
  "key22": "4uWqyh1FgBbDC9Jtym93aayvnakggNf9n9iS5yo45zz4qkYVkNSHw9LneeopXv3pHtGUupXs5p78q1bXVjNzJEEy",
  "key23": "4Cb264cxvb7PKdju5NGGujuDff7v2rre1gNacxDaoKMd1xLQo1Lu91rs1h2x6aaLpDPvc4zT4MX8CchFxEmgxdxU",
  "key24": "3XdavuwwjGG3TX5nwgLCzP9RikWL7PJk4yztFX1UWmyFKiZLdmeGQVZCaJkCC2JqhEKAeetafyyeNeT8Em3ntPSV",
  "key25": "3aFsh1YWhAe7PdSuH4MHpDqpcmCx5HJTngtdGJcn8VfFHxQqgpEC5d2qKVUJvKoMVpD7eVZ96ra3iFNKesw8fsxE"
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
