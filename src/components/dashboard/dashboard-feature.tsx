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
    "4Sb5nyAncjhZTVcDk6DiEmC1nxZ6LAiuk7pUDAuwBE85bFpQWv11ZVRzBZkTqTSx9qaCrN8qJXjkNBTeZQmoPA14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeSH77km8vU2xHhLZg6S8TUjS1Xs6STb7564oJcrJfRYWFv8TSocNNLkJutziZTUw9KLDkNwZ5G5UR4kgVeeKPi",
  "key1": "2unoYdCi9GuYYNxriU8nJe9aVRZW6NL3ZLcrNr1sa2rVP8MShMtTBt8JLQYCxjgG9G1DwdnkuRzgnMiRTbButhkc",
  "key2": "5HqZQmJSy4TQtvcPo8a3wEDkwTjNmfA1QCkW49A2XDzW52GWMhff5d7VK5DQcdZegstx8mTLcT37k1tNVrWLYoTA",
  "key3": "5oeRAsGC9dhaGiBCim2AZEpkmwja2TtUDM8gcnF8e4iaBG7ZT54uBdkdt3GyJ5J7WCm6acSXECxUdQ9hhNiiPVaq",
  "key4": "5cnhSxLp8NcphoFQfKKVFBMjr7oQMLkViUL5H9XULYwCkDy5UW1bfBsQZtyQiAuSmFnLJ5xm1npYkoPE5dowQ9zD",
  "key5": "4BhBNsoVN4PZEaUSE45SND9CbsKSHcvqYMWnGsbeGZnYPDt82Lz9bzqpR6E9qL4nQatNUeQPbgfD3KNedyPMdW8K",
  "key6": "5zhmZDoRdQMiDtRm6eWUytQrJM5qVtHQqwzwxbLhEN2kHDky99Kix8SBLyR8UVg9CyQSRAHduzxDEHuZRddMxQEe",
  "key7": "f8JEaKmucUEvgTWGLh3rRPJYJjTyJhvaAN565UThPRqGrftaRP7B8rRWMfAPg3FTuJtw81KH1FxqPjdCtdHcJVf",
  "key8": "5qxATpCcXQ6gWTn4kdgLZKyS5ywKsKPVDR5tSjk6ARiErfw5nBS4tgeBcEf2DaeMVpCyxEnbzgWuzRCvf4WzsKz7",
  "key9": "5P7msv3gpmZSinXrZNFtCyvTrdgz3e2SX6qxhWZMbM5rcYNHfJ9VojVoa7QeNJZyfMtA1qytQaEDVLKx4zKebAps",
  "key10": "2GmGEZK2bgw23QvhCzhavaLsGi3UzL9vTJchcnKwHvEcHHcrKUptEDWyE3t6Ne452VXpgp7KfZT6zuZ3jzFAqMub",
  "key11": "3yNTKH7x6mWtJfQREZqSZPv1Di75zRTn37zMFziCM7hCQMKKN5aDSc4T6AbcKNdMVbouFnGLUazNku8DHL5gTWPX",
  "key12": "3M7cz6RuUF6r49HCYss2XfEzRsZYjYmz914HD9HiRGKAt6AMzffPXBtg8L4fXg3t7WXj7fpSewpnpBXAQBQAN4YF",
  "key13": "ovTjwsMNh2of9yTKu52suktxNUKEqfzSQ1yXQmVzpYeyYBhXV5cJgQVS1UsQQGMCbHhUYAbN3KMz5QJvVK59Sbo",
  "key14": "FmAQSEGbPqRJsatgCRyKMuPigcKVUzrQPmQtcUXogMhSQFrQssXa9GfbL2JNGey4h4ykhpjnxA9FjZPP3u6ty6s",
  "key15": "aVhaQMRuqzUnyDqv8jgaddPPPjjPvX2qihfbwybrCHrLUtSKNgU9DdcvDs9WAHV54i6N722BNPvoTbyu6yEfyfC",
  "key16": "5DP325PMjSqwrp2bdEuUwYZW7Dhz5mg6aiXtpqZiHpG7LcSnAhywiARQk3L6xdk2sPCSXrf3E836RuUMWdgy6D4",
  "key17": "5SwuPDjygExXMoaueUBCaPWQyBsEyvguGGpdsmf13QXJYpStLAweBwPQLeobCor4gry7SUTwutktmTv6m2JkLi6v",
  "key18": "4E37UA9FU1sqQ1nMihXCYYKsYbZ4QzXBY6Ah47QHckLDhXugmHNTr7Xv6cG89VNBM6GENkTvtP98SyLCDCJtA6AE",
  "key19": "1hqS57Y46kpYFGz4x3GoJtWcD9vhMRtVMYJjokXr9iC3gM7xd4uY5jZNJYsFtgAuieMAyfvCiQhfhVeRdXCx1ar",
  "key20": "4AfnzRnBPozMTvaJuApFFyLrpWMGr8wWm2aRQr8Ta6ajeQSTfLSgYWMU784V3R1ij9vZLuzoRSSmUE3JKSpfCUfj",
  "key21": "51HatMkzwCsu8qvaTzhECzmqRLemTn7ij8zefcfnaf6rwGsyU4u2etVg5TMYp9UjaxyM9WmN54uRsFFHinFWtbQ",
  "key22": "31qtCzcxa7tuW9Gu2AX8tyniBNxw49yGMsgADR4CDcUn6jxmw9owEXkfcgwRBSkV5WPWGhaLhHueGneBHJxLVvmR",
  "key23": "PVsHukU4WESgjNDMCosybzoFX694cVS177R4bpt955KZgzUFfpQ6PDk81ks5YYZU2dAje2q6Xre6KoEUAhnDzJW",
  "key24": "65c1D6Q6uLUa4pGzxUPagU7HMwivvsjDScvVt6jkfM6UsbFmcH4WwtcSqHqEe6dh3nJT1ue1jRu33cGD4QnpJ4Z5",
  "key25": "5mKK5BvQb1MvU67JUEiVK6tvnJXaPhSxb6W32LFdw2dtuhFxWR9UaQxJs4Bu2nmqyHQq74Lx9wQDTBBxnLRScwKa",
  "key26": "3H1CYi2yNJAEwpwKoVLGKzTU1rhb74DqVEoCrEoVNd8tU8u9g3UNscKCQsg64yn38k4YJE6jyeQbf4YoJADp9cqQ",
  "key27": "4acjtAKNyMaxZ94VC5krfas3So6oN61ZfMxc2kiZbfqKkqPuHZAdnE1bxAdyQ9HzmbSRefH2nmtzACNv96bsDiHq",
  "key28": "5Gv1uoSyJpAFQhU5t1iGuSkZKzvqK474jUDhk9YHWQ5dArTnnAgU3oZA1owZvEbQdze6N8hqMdKwGWndzcYmSEtL",
  "key29": "qsnaRGuKkCTKYjsBYVTfCsN6gDR76GhWe7rNTu7J9eN3SVX2bFrVAsZTWvErQEwwJ1QNJGLXetpejfSqejUUf59",
  "key30": "3pxzD7TvXhnD5yqcXxNkenREFfFTEfkszBrGG3Gsyd2fzMVUnPiVYwz8EB2yFic1W11ZmJmnS56SpZywZNpxjy3e",
  "key31": "4ymAYkgLpE4uGeursmvpgYvvWSYJaS3YDAywoPxYYt4eJ9JbHXYmAg2hkRGG8FT5ABxixJqqtPqWXqnRZHf2shSX",
  "key32": "2iBCgg7QmZWWgiSM8osF1ZTyW3ivo8EFr5pL5pH81D4qiwziZqRnyToyg4zK1Un4qoeCGvmKxv72H9uyejZzoW4v",
  "key33": "5BLcs64qyJdGcidXLYQFJ9vix2YfevHjJK2xkqGWGPwZiAzgXhDKF314hb3rzmAyhkLTaWW8bhSp8RhKnjwnd6i6",
  "key34": "CvW6mCBQpt4cbHnaGXiweuTD24oSVcJ4iXDRummrEvWYkVwKBDNerpMiq5qdSi7amL3V1en5tqTQNnmutpVRoee",
  "key35": "4pQmq9cAV6FjiVz4u4y7RPGuCDrcPn89DTZWXpwL8e8ipFcDZycEex8eRNrADC5mmFyjEQR9dyfE9SYWD1fKvV7Z",
  "key36": "5kDaMroVe5xHprbPozNNvFhQG5na1UmuHV8eLJzVBERCfjPGgUnrMnfkLoyLWYdMP8LVhqy6BeySqNUyNgn9xkLC"
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
