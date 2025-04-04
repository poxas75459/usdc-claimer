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
    "M66r2qZYfgjLuqPbBEuGhDuwC8gzGtsPoPfTuQnwPoTvtYfcGdtYqWkVefXhHuxijVnkSanZAPXuudtKY4vvoQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HwT3L1TPhnbt3uH4cxdFfprcniLTBcFBdtz3JtdK9WehMJiZTjV7ofGkHrkD285pcnBF8rDmhDbab9Mqzd3agem",
  "key1": "1aESB5wjKEnZd4xaLGg95vsPrzoUrgHzQDiL8HW1VmW9enWKJe7pBJyGdXBqSgyvvaV2p4et4ikvkoxQ6RGUCE7",
  "key2": "4UDkUVFmr9ogzMNitNPaTFjTQZCozon91WUsbwtWrQ43sBnTkBAD8CMzshcaLEmUyThRbHTPZbHXvMPrJdbWRird",
  "key3": "3xi1DMKidmbWygFLxisVCGtPn4QojxoDUF6HkyPzNcbnrozC8qpfSV6j5wbrhNkXeQ12YyYwbbcPWPV5XLZrbB7F",
  "key4": "5SB8Vu4pydbXGBgpNxQP42jcs34C6KtX2A6vJgXMfmyVpERySLdtWZpEVxQ152UuBfqF4njHXhTvk5nXdZrBMbYv",
  "key5": "4JnpCaRNigjgpXm2r3mVFjDuSFAnyinATycGkmcAwxDBam59bu2yAEZku55oyyGe8DYhwgzLSr77kjyLR1GiWPSY",
  "key6": "66tjqwyMucXwwTWwZNNDpf2getJRTEwiuWvaRhM3kXwnJ3H2359KNgMz7xL4PJPFmkz4v3zLtPn3q4kDYVAZjv37",
  "key7": "3URDeMARt125DqoJFty7AXPRfsXuLSxKsz89EHM1rMnm2MJPxFUBYNLUhJK2jvxmgnByth6VVzWub1wmHsQhDaU4",
  "key8": "4etA41pQhffmUu3TroDfKa7pBF9YUixZXy54Hr5PV4ZZA4MEmxEq4S2tamWX7zrFJ5SKBfrGxpwmzkcjTpDUuphm",
  "key9": "YD6oFDcn2og8NPDSnQDNumn5xpGy4E3erqj4TjfD1pzKEWspGHEvKMqZFH6tFGsQsXLDRQw3zmpy4mV74Ex2jVe",
  "key10": "5KRhGw1zAWDWEb4YW52jwuJRtWiWKwTAxZC2JhmoM7bZP91i5BHunFz7x1y4svkXDNBD3eU2EHSSXizZaqioBhbk",
  "key11": "2cFBRqznXg7a5K4N8k67K9micttQhpit9yhPPcQNpsYpdjXThdtnmpytA8w7zVPKqCdY4WtiQTfyUeYvku2LAXy2",
  "key12": "5WXqUWuZSyDBoMo6JJ3E3f5Rf9mw92fvKVfmKqWHk2Z2Z198bhd9PrBWQMRVJAQHsLGhztfH1yxkL8mxd6H3FcNV",
  "key13": "3XrzZbQ16ppNe2yAEfSBs9XvZ7CeCPqk8RPm1CLQZTGWV3nmhyVnY9zVxFJFF4sgpr2jBbriY9xBDdiBYM4ikmDL",
  "key14": "g4ZLimRgYeVQEXZtrWo6Dhv48h2TFfMRkUM3xUZBNVF9mbofTAg9ZULT4sLx5VYgWtibjLgstnUbFLRygAoePYx",
  "key15": "3tXtuvJsU5nuBBB45jADHMWBKm1P4cbG2FWywKhYz9oKWeS6qaNsp5zjmpg5Edim9awF4WKrr18fYaq2S1oJZQaG",
  "key16": "5dShCjzm6F8ZVHsM2Vu7RjnhwQaYY8udXyPJeUsWCL1bTWD7hVbGLmvZJ1LbKHhLb9m9uzFvvSMTRhETAZe4ngXp",
  "key17": "361MD7evPfPAHXyXxi7ZxPnhcsc2SC91zftg9e39hKfXhSaeWpupNfuGtHrMYg3pYQ8qU48MJuDPWAksvnyPHqrz",
  "key18": "RooZoPTucF6vWe8L4JCRbo9ui9Rm7tZSXtVrT63AY8BV6RLWqfEk6MZhVFDiD4ctpedXFu9SANqtUod3TB5XCyv",
  "key19": "2a18u4746qH8T82WGmXEXpMSf9dm74dUARULLYV8s7MR5vUnKrKaixWo9g3DgNNUwXtdWns7XNw5ZaxaQDVkQeB7",
  "key20": "5ADLEHZda4qGTjQefAR838LyJdUQtzTgoH6KQpQqfLWxUpSbmnViDctmWHLahHtxeyyEo2oxUPEipFrQfZGWG48b",
  "key21": "5ASRSm6RX7XtnkhjhJV6u3MmhfWkGhPL8p9NRajYChgemJdhHipbGohGR6KQdAd9jVDr4aMurobQhDwM2FSeR8vh",
  "key22": "3M6n4GrgGLZmUJWAf8gn4JuoqJDyN5hahTwSoWZ1Kw6gPNVgdnaZPg3A4EssaShCLtjr7pmsJV27o3mPT2SXwYi8",
  "key23": "37GsFrxygwbAgGo2omC8LbrbNHt1isQMep1NmQyTmuVhFUA13TCGnsBkiyGM2mqQovPV9yWGpeMxkccntUiUyT3z",
  "key24": "3JJVWaS7xfsf5MAzeHdDvkkgPRKpeCvgeE8xUgYRinpzBBY2ypwqiGYU1WinWAUWkZhVaWTbWqQeLdhTxNhkqgkM",
  "key25": "4hKksmokywvP25CduzDUccNX86M4AjBmsKW2tSXPm6Q7qoC97KMXuB2kzsgjdNkuF78tpSDgzaPMPbQBwwpLsUpr",
  "key26": "2UYoDX15w8PGk3fyW6TWBcG3e8cPjTV7yzQHB6ZdkbhJnPF9z9tSd8SNGygXhGyoDLsDZPK91hn9L4yNGqEmgLbk",
  "key27": "QxaSpGcYuLdh6hL3XmDjwgRMY2yUEzqeodVCHxn46jDWoqVYAfCNkn9BgeMJgxTx5oypukGzWFQ85CLudJfM5Fh",
  "key28": "YFyHycA2q2EzraXDSfY7hqYMKZWaUy1HETe4xwm3BcbyfwiUy1GU92FoysfiQEtgU3jEZeRbkobSGWYTz38aq4M",
  "key29": "4nZj98m1ysvMhS7RqnVj1b3TPaJNHWh8TqHoJamAXXt2rfoVXoCFq9X282AeLBRuZnagVtexFeSfKk4m2Pj5Q5yP",
  "key30": "sWiVHs6zT8ZMKSc8rpuPqiNjaxz7qaJAnGPWxu3EQvqLbaYvzZkF6SZ1MsU7FeL8FKANoevAoHGLdsvst23oVKu",
  "key31": "4Bh6GKjT5ubBog9cMrcKh8TEoWVUbEmW1PqrEExDhAX2mNFbTt3E7evCKFUEZhYQcdPGeoYW4dyf2daA23CRe5U6",
  "key32": "3Nf69RCsxR7nAaDCoSzWyiW9NSzttV9L2a89jcCig33MKJKYeGxJjKad2NsQfeYN6ajsLaJBrSJcPiMJfC583V6r",
  "key33": "5CKeCy1EhbF9sg4KzHPGxz9RywBqtviNjBxZ2UFM25yjuXWD2wF61bAcaFiVSuxzEJJR34YmhiHziRqnjg4hv8BN",
  "key34": "2qydVBg9vuhjizYAj48EWzFzPK1HPsTmYfTYMv4M3NJ7hgzXQWHfZdgD5U2rBMN2eyZzgf2iCpmu9sHYAjGPXQeT"
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
