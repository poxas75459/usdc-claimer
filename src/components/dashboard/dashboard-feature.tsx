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
    "LSUTPAoznuraAXRdhcZzxXdbYMdPc3zDUrnDTvu8pMUj3PRsfwkmoqDupTduv4Fbqx26mTJi2KmgdSV9hKKCAJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D36rcfmENeYTpvnutKeGrpYz4P2SmfUWUhb8qX3G62BTdGVw4jtdGpEsUiHVjZMmmHVDZoJCzEWyYx7shtocxrA",
  "key1": "3uxsDSizcdiMU9VnktfyntDaQJtuJMiTymGmNMwY8qGHDGzgcCnYFC7X4vD4kmsWaqA8CWCxRAcDpaRaQRScwsBn",
  "key2": "36vE1GBtU6R8BjfEw4YD3kx9ykquTAayAHfoJaKzTk3xp8F1FZK3SDqmB2HdPSAK67QazjVN1aa3Y4oR1HjRV2zu",
  "key3": "3uzAccL3MfuEJfoWvfVChz3PQv7UHdEmF1EdkTWvjJf7ofotWFE6WG43TbxLqNYJjkB2fGrwkUbpH4VR8txWc7tA",
  "key4": "3GZx89GWExJuZzi5mY4yn9BupVQSUcN27fr7J7XbajFEAXtJPcyT2pXvkyMnTF7VyJiA3QNHhoVVafeFqU3b1ZMh",
  "key5": "ts89pWgMx1ZMqBiiHbNYxWmscvUh7LaF8rxC9D9LPzbUEvn8Pfmn45adwD7EWkEMyNVevLxuz7r1qA77BgDQ5iC",
  "key6": "4vm5As6gwYodYyKnscYdt3WPEfY4jPRGMr92QhLAYFqtF7ed2n1rCACpZCPrpmycmtwxd2qtLfinj8LVU2AsWHPM",
  "key7": "5EKzsfQd4KUBpwh3VB17WyVjwEneKUV31VLRXUXzBgksL8exzonB9mLenbrsjpuB8WGt9XV7RtE211YUodgxbNBC",
  "key8": "2vPygsvqZuhdtGroLtZKBNLx3UzLmfg3HUvP2EinUaezxfWoZMjifZ272o7JdpTqsWHG7U6QTg3A13WrZWqc6Xae",
  "key9": "4PPNDrLjywbFUPgf8hSwCb2HabLivs4PGc1exifYhapTjy8KZLo3na8Hu6SF631bqpqkTXBAxsJpCjBUhrUaq7dF",
  "key10": "3xULiqGDuDMmg8CWajUjtrJEoPba7bGZacVv61VaBcqioqR5zhX63jzgFeohrMrhiXnV7gg2dzoMteuJcayEsSFm",
  "key11": "4mwiYQ1mSbreoR226S4foPUakuuBp11Qy6hLFNGuoyAodAuVUxXyhd9tkD3wXuyko35u3woeV6c5ptsvNXP5yBbR",
  "key12": "pKRd4CjYvWt6gUi2tjxYkLfc63qzZch21bDKbZAhfQnbaCAXH3NSy6uSTPCuPFTdpXsiZQLHvqPn8N1tcGz4Vc5",
  "key13": "3XBAvyLRNZJxT3ruBFC5iN9kaemkaxrFp8wuiNJsMUhfFnnnyiSuZ7JPDJgPnuG5c4aodAGX652RusVKQhc7yeGW",
  "key14": "5xDUyCAiMnomZPnV5Xotd3oYE9ChsCteAK6HPfbniszy3LjjnFLj8dL7TRqYV9eQZ61FowqAuDdpVXJrefyVX61S",
  "key15": "JPj3yCYPLsAMFTecqxVcMLG3hrsZfcuZhgDpxPu3N1bdgaczHULpnN1RyVXe6SvkXkaTVVD7Kh7PcDsJrKGRVZ6",
  "key16": "5UD9vKBUTJawio44Ju8UxiBqbMHTrP4WdDiKW6sLycX9ihvsXvAUyBw3n3Q7E6CiboQHJFf42ie1yPr9zYkUhr9S",
  "key17": "3Z5jEnHRWZfsaRyHSe94Vd6g2gYs8hFEkxCAXGFVeK7JRsTJXJngQ18EupsvMXtsY7U9HnmFWwZ2wGvixuSVaqu7",
  "key18": "5r9pATqqKCZ7o55my1qJRM78CGjWvtijtmtqsMFLuXwreuzCuuNz8T6E275U3YVZi3JhN3t6zHaherNmUHThYi7F",
  "key19": "34iFpbH62AUpuETYx3aB9doQo6LCiQLvkeNw57ubMKxy35WuktpMWhHpivQxwJZansFpkMNjAXKQQgfTZkbje6Ho",
  "key20": "uefyL322doER8Rq2RWyvGTXhBAx36prP9RoQqgtfaX8i5meKjgsthzFt8iU4EDtJL5YJptGwD1VYAX2MXwCc2ii",
  "key21": "oYHjMjqcBUVwkZikN4Tt6tP9Qu77YMzH33ZjTcDq9g4bw57avwxkQCKzKw6CcZrJRPSL9Sm4seAgfMpJsYqkZmZ",
  "key22": "CoMBPv64Qjj8wpVNUKF4hT2i8aaSYx6MCURSjjb4VJToC5oN3fdrNcjdwBRdSsLULMBPqYVmPJvgZMrRHUZivo6",
  "key23": "2Q5BKCNG656LQhWKBnaLp2siPBiyVNuiLZg79ejHLyV59Y1yDv9bWZrbZWTiaSTB3PNZeXx4kShRSYRktzg15tJK",
  "key24": "9w5Aw2J2Shg3SDYZaF1bsdQ6hL68Mgn1vZFLUukVCrfD76VMZk1qg7aLw7UuDEeQdCjCoT5M4u49akeBDqD4map",
  "key25": "4bqhbmM61xm9T6Wnt3VcX4SHJrPj8PNdDTdXaBX6Vdto6dRkXuxtmzh6CZz8eWsC16R9zuJCeUJm9mEtAHFBLbLi",
  "key26": "55qdUBapbQixrJGgcFZP64GDhgCjNKxSK3xQ6eyiXoPQ3gJxYRmPccEK1GYj9m9ChuRRYThXcY1hiwuHbCRqydiY",
  "key27": "3WnhXE2BgBvRK6V2LifoWgxPLHJDycrf5fa4Uu1cAQjbParyTbDZJvAQtmMzPY3J6LeGimHbJKx7jnoBe7BQyPuf",
  "key28": "3XBWPitY36coiGJ3ysNwYJVyYwFmCzo7G4mEVPqebxpRgVrJV7TysZ7sX2WyKkwWNL8n25chAcxJaLjQHtghBrG8",
  "key29": "W4HqDYiCtHrb4UTA6BDhLfYUS3LhwVB2BQTHivDnXsqNEF43v7ZccqVHpDt22Z6cEeJajimSXeSMqm446amKPss",
  "key30": "5Nf1h9e6VhTAAUreD3T3jKqm6NGs8RPsDapXjcLmzwMicmPduAbXomG5Avf4sWiHrfKm1esSGcQoy6d2kA3fv4gW",
  "key31": "4AGgM3zPVq9TKF4nMTXVELAW7mYByuEVY8HMSiVvnd7w7EwKW39NxUL4HuCibUt2AmZDZ1f688scX669bYC7rFxk",
  "key32": "31owrgwopEocWEz99MgnXtGoyT1hyaAYbQwtubQFzJwLVTqTDwWcW8H2ycWpmxnz89nK7EAvPcWocqajfhcBANJo",
  "key33": "2W9QVnegSSPqWXa3rGm7Siee3tPkXWRtwCitBEzsiV2RjJSuzqmzwbMfdVsELwxpbfqQwc8He7rVabtwnzDmML75"
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
