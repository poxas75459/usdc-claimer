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
    "2vL48t4UYVfkEeLXqV3zbqvzhnKXK5dXnXbxiWjzhZHviKvjQr6HtFXNaqZPydAViPXjrDfSTBd3y2ykmuU3hyYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VvK2b3mKLWarYDPJiR8U5WYSbQj8bFvh8XFD45QiF3YPC5o3NXF8f5tJMtuhR2HgJ3Tec3FoxJSWo8ybY1nP6h",
  "key1": "4zV8R7aYADMv9zdZ3eXvMCXePtmh3ACRpfRRXjCHiG3mp3a2a1epxD8E3PZyjksy69xRq4S7QuAZM3wKYUB7kmQG",
  "key2": "J79jX28P9PT2h1c1SzApxRJK22aBMBJnutHpdzb6NmzuXoyRG2Pu42HSUSxKZ6QZrHJp8b7RgwmaV2ywCm6ArKz",
  "key3": "vMf3CnNZ36yrDvRpBqcQWivcrZwTATL2vgJECbeKaT32zXTWYk4aDZ3KZC8sNb8Nby2hVgJzsjP2opsHTjd8dkk",
  "key4": "3NoRqHyU2vR9Qszc1Z4rfgzYFECq2UAQUF5uvyVHrp8ctwYPgfppz6dRBCZkGK7UPG2RehgyFomXTSBYxqshiN4T",
  "key5": "33kRqEPgTiKkGvJ6J6gy4hS1z4PGDy8tSQjGj88xotR88z7ejQbUpxijTJWkSj4oGp2rwsUqE13EVUGnHeg7QsYH",
  "key6": "3ji6pStR52SPZdtxgWLGwfzi69bNyJktbyY5MWXPbsyBF2RksipbDMc3NYAcodWnqah2gAYSuyLHFtK6LHkWhLo2",
  "key7": "25J6kacKH3zm8PkkFemwEzpJdWp31c1o9a7eD3H6zqW8V6t8xsG9tSuqqxuc9LveHemu2kEPs1AY7esLfzTSsCZn",
  "key8": "bKm7ZuWJcV2S5zThnzUBXngGqjxsAxMfw1Sg3ipyvFX9H2MHSuZE7NZiRMzGYipGjR6TJfw9VJ15pN9occ5BxyV",
  "key9": "4XH3oFxWx2u8gcTUoD7d3GSod8HKXvbHfmhvZyaTu9JVsaSf2NKZc9nFKsTQLxxZ9pWLtR2u7vBHH7vmzzVTNrAG",
  "key10": "2iitMXqGv9C6Qv5eGvyfLQfk4n1HceaQiihjVvee3y3u6GvhLKiCtViGWQDhTyPserek9uvFCf582fEVN7HwW4ve",
  "key11": "3KeMHstrQP8Kwp59n9RU558g9Mdpz1vZVkTg9ePs4RpPxaY1mKTStEobY2QYiSPdYEcxopebPZHETDwWKMiDQ9Ra",
  "key12": "4r5PnGdr35G4Ug1UjWqZhvPTHAWmWjD8JYoqKVmpHoeAA5kAQRU9FfDRtS6CTB1Pdy6wV81YwmiK5psnkLfrSQVC",
  "key13": "23CkHkGE5pae4aauztfns2z32F527zoE83a3qkcamkapBe7jh7cXxjrCtuvcdepzQKLrVg7MuLYwv9Lq6oYesMEz",
  "key14": "3UmXsviZ3WmbgjwRcGbjWP62Kgs9skXRtKXv5TscxQSHuTkDV3fTCVW1jSsjfqTwEMqywWhorWd3UeqH8gaVM2tY",
  "key15": "5AoWjpW1vtUSLVbDRLR2Mj7L56vj3h4EiUX5Aq8xRSiwtbDqG7umZ6bCiAPJt6FNWtPfYJxSS7TCJc4MbWtBVLis",
  "key16": "4JJEApbSfRMwxMXbKTYzRdwXbnCdy6h2xYtp7yk24rVvxdGZ9quDpMpwXuEktFPuVbSKtfXLK78SG9DS51Gm53Ty",
  "key17": "2BJPaPoK4GTe1Duckuqd4ohcbWkR2KBpQcCjwFNQRJd1SZB9ojksXh2MkAAn3V8hcgN4NTg8EcAVnE1znAmMNPxN",
  "key18": "3KBdk73TB7fteLRJU8u9wy97LwbEbkw1o7J7ouongCu54wE4BZ4PafcWXMwLmczLHg4s3r2LrQRrNP9ohehSwbXU",
  "key19": "49mSpzzDNZckRmrT1AykfurbQfVbhf9WHru6Ee8Wj383g1jS3KNdb3JZMVBdNK4gdLfkQravu83EZs3p4c74f3Gc",
  "key20": "3vWhmGfHbjumcLZ7YN4RMhQtU7XSunQXGT6wQK4iU3k8WMHTuuH8d1i8mtEALkdpbAbiytErnaKg1ncxqumUgVVj",
  "key21": "RSVKXgnUcuouDBUanNYEwS5QTfcFJ4AgVSMGecYF28UXFF9S6VH7B1hG1zrF1baMwTV8Jve6XfC2HfmQWEVusqJ",
  "key22": "4gMLti5JTnWcKeSUZxV7YV2mFjDDFjxbCy5BmuDcN7WXdQ6LZEGf83oMtWuZanMuc5RbuWwdR2KoLw7hZ5M3G7aK",
  "key23": "5USdSaaG9D42fscaFRkhpDAwHhQLMvtTyWz1kAdsGahX8dmkCwgy9QxDchsG8QoSGYR4jVGDabWJzuxGYZzrk1ez",
  "key24": "3N3eeEUwA6JsC3Gz54Wda1ub85wBFdnkx7LNsjFaPJcSnrsuKjdFCCo9L49aaTcUn5ZapdjbU7x9j6x7DcGBYniH"
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
