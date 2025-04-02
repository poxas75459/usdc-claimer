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
    "2yjHZc1vRqGygNURqPse2JvGV7g3TUKw73NuJY6TUtaRMMwjRNfEL3Q8JSojPiXvMGQ4jR7eHFrqdLBDFSMU2vH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8BVpvhpNPauDEoA1vk7pac7TKcVRnG96NbiFeNgXyc1Wm4qz3xon2QQKVFSppZsVbtwHzfURtU2erhLzAmkGqP",
  "key1": "wQzdoDKoJtM8LUcc5yEJWkD6qkPRpozuT8vEhcECo5oXpSyPUtRJdpmzzMRbMrj3RHqvTuXRPjX3JpcYSkfDHxp",
  "key2": "5WikW1999PYBioqWeLsvwd1Ju9KZ4JWLFZGEBUmmrxiL3H49TknV5stT3ihU1PB2AHsFdTP7KMBpWn36yK2GH89",
  "key3": "2Ekvjp8TLgGj8pYUeoUrJ8FJBmPPcjejFPsUAPgzr2N2xTxoqRdh5U9tuVasJYJTXrJeFbWbT7etHY8jnTXpTMy9",
  "key4": "3p6KP6yY8RSDZjAyqgbV8xmvUgJF11jdmUZuc6MGbtLiBC3cMZ1CA6Dtdz3QVogcXezqnDtuJTB7HWSn1H1jVGSj",
  "key5": "ANZHvjtZjD67MP8UtN122jqDnzcVNQHYEYFs3qYm6gWxav79xf5hkRGsVDRkovAhX9df1CYuoq5tiWwjr9iJJN8",
  "key6": "5gkviasDBUcmUWij1kEgr6Ebu6uVJQM9R5ZkGeCJNAMkL5rzGxGLSkswrmrGv831Bf2SyaC9fLiuD1QF9BM3ovrT",
  "key7": "5wyZCeTz5a1LMoTJ7qcd9zyKZEBUzMknPmFj1LSszvGTzUXYbPZinSZvctudNMu1jLarQ8iGMEunQgnxiDvPQrEf",
  "key8": "4wdk5HeKgFuRs5y9bv4b7iqJJ8w7Mwc4B3cVrvx19hPmEQvccTZiGR913y79mrLNGC3nQNGsg7f6hEeTEUdaqsZP",
  "key9": "4HgNjWuGvd1ABDpy7VjXpvRRPuSPCTg9xqZU84nyNG2emXEybcnmUA244USJi45nGS8MEudLDwgbVC1ThypgfiHd",
  "key10": "29a2awz5LhDgMLQeC7MnbTB9SY6K9B8cT9Z9WhwUP3qpgSAw8pWynV4KCFuhPjkqndBwHEpbu7ye1zNc5t6uj2RD",
  "key11": "2oKKL78AmE3JhBc2dgz2aPPZr9z4NLWpn8JkrSWPCthaphNYnkCrVQWUepfJq46fv9Hpp5uJ62w1Voqs6qTQgfUG",
  "key12": "VwqWpBXBr6y1boLyK8NmT1vWPEsT3EBubvwy6GEm5B6rsD9cYqgofzohr2nwptfyLL7axSQXsJFT7Pkaeb3tHoj",
  "key13": "4H37nEWvHsc1vAJoTWi5rT6bKEJpB3kU6NYMtVtcRxFTy3K2eBVayaRUavquj1JEbgKdrMzqVW7QPVDWdn4sPk7h",
  "key14": "4dtVzFAxc4WKyq1TpmK3vj4PvtkdGsvhAjW23KXKT6stKoFyU1R1tQ76tHEuDg6SKDo38noZJ7miCvogxehc6iiD",
  "key15": "3VT1U2jjGHmSe2GfryKMdNtrEVG5eqzJbpBZmbmAtWPbszQ6XGR7qstk7dnxYv8hzXMRAyUuRTVBNDo2E9WmrAx1",
  "key16": "24ic2wA7iD7t1dXP5ToWuSgUrq6YDH6uEULxtkdsNKXr8hY8ESLFiXVNJcPHAHKN6bELw27SJmnmBdEjtW7MiCQP",
  "key17": "41Riah1D9D1EYggKmUzHQBBm7W7nNWC8XxofBh1TwLa94MyEV5rS9AfKvEA4PAtn3GGAXGSjMk3MAzPi3EUstFFq",
  "key18": "vKDHTy3J1Qsr6gabnPcWkchXXT9NMVxG5KEU1bpC2PMUz5EFD7YrzDop6GPLNV6RshfyrxxAzAsaVEQDDhG79ht",
  "key19": "26ACSg8AiPTp3U5UfRGXY9QzfE8R79gQJhzudAcVHvJFbNSFGTHADEwUcMjdRrGxW3b9G3yD22PWzeBN9y17mckp",
  "key20": "v3xkRpRapA9jv37jZAbtrDoqEpF3U8wn3Q4PScv5qkkm27Ry28BbJus413CJc1hdATRZUVnuyjCrGuTubxxzPUW",
  "key21": "5VEJEVtJ5KbrZZEfun8gtsNEzjE61kXx2tHxcS9mM7aRw6MppirJPueLNTvriDRN4188SVsKcJJY7iVXe645Vy8D",
  "key22": "3FqXsoTkhWTQRGGZj1nif7Ti8HVdjX4HAenXzPasDFXdprYS15EWfRUfwBZ2yiZwcEpVQQP3t1edhNeEsboMRtMd",
  "key23": "3aY3SBMwqEAYwg8DtWdJCrxVGuhHxth6DQSBW3iUqJhpfU3Z8PEwE84DjBC5BgPJCVfSahvhXE3hr9bdFgik4U55",
  "key24": "wgsxJJS7DwZUDdXTQuj3NHHnYhR1o84D3G6mK7kUgwnT3d8bV391Z1C5ZaJ1V4tHqPSsCdvYG7yaEmDtUxaXx48",
  "key25": "4aVELpgEPrt4AzmSVv8EuRPrJBHdtg8tpDgVk4NtXiwXyzpnuWNuTHmj2kWrZ1fRJ2grwvjE8uvDs9hYbqCurtU2",
  "key26": "3qzu7sqmkfnfG6b79EzkJaX1ptrFs3mV83Ye2Wtj1L9D4iecernM1hsgysfXfi7j7rhfQFE4rkpcMyHVV2dxdufy",
  "key27": "U5neVjABisqcfQynqYpgAxSY232sCHobYQbk1SQYjHgs5L6h1E3htKqBgrdWoKuEx7cB1aC25XpcxFXBhfmKmyA",
  "key28": "5AppPfS2fX1AnaVw5N7DYBUsm6beKy4fd3dNgkYsBB4R5mQLeG5Cmt4TXqtzRd8EbE61uGG7tqgQyPTF9Mzono9Y",
  "key29": "3fGjJBQumF97W4wqk2zPhKm8rervuKLEow5asP4hRhfDfxhy2DtdE3Y32PkbeXGJT8xZM3JmqhYm2fa5YUQj11Hp",
  "key30": "4NJ4Pw9nFxY4Q1wLnHDKX6yh71TFKbcGNGJ3eq3eGBispGJMmZiRVDFjAiXf2mDCTpqjfXpCBKZmZcZyTMdoUys8",
  "key31": "5PHnaoxqZRRqT41k2BQLcCmNdrGLL5QCRsvbaEW8Ssw2D3cfSA8VAi6Xyibaq8k9vMuYkz57fR3E312zLTBPwvJH",
  "key32": "3ou3YBJBDPgVyXXHWEA2Mz8zWs3qXAz4bU4CrzXBRD41NThySSWGKVcpAoWtdeSZkuHEXYhkdaZD6gPZ7vdP9wWx",
  "key33": "662bUxR9ybzjkcvZgog5GTvzmzr7P7xCCXSWdSNcsfR3WAaCC26NmWdbEuPZHtJJYhgs9qmrK6u6hGCq1aE7fcx5",
  "key34": "YvVPqcpGpN1v5fMeRBBh1vWZGG9kS2osEJU99mNWt3tRNfxEhAWFQM3kJrWg5hHEkfj6Y4QsSW7JWCdDzE6FHQv",
  "key35": "5sYi5TvsjnXTHrEwzdV4hTaoU6afx58KKbzTafmZAFhhych7FqkpmwTgpePrQdt5c18ugxK71SAoLAQfq9nhtwnT",
  "key36": "4x17uS1Mxqp7Ann4VQRF3JCyeXSi6DZQWKqwGPjtgL2fPga9KScjRxV88DTvbjiYtNiJvPgjBMN9scKYskiXt3BC",
  "key37": "3ZqwP3o7t8u7WEFkawXwwqtcM4byhF3V3aMPU6mf7dzxjMowxdQv8CTDoH7Mc5tBviB6BV2o37c6vqxVkz7W9VqL",
  "key38": "3W1Uk4LYg5Ho4xyR4zL9RZY9CpxHxAKwijHdyHi7wY6AJCrCtPh8Wd2TUEFF8V1jvtBsDDvxU1Vr2Tem19Pv9sRW",
  "key39": "62Gt7iY4H6Rd46J4jn6zfBejkMoT6DR2N6WkN3yCVGNhJZDRaHWKfYvaiPEQkdA13tKtYYtg8wqE8rNd1CoZdDG1"
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
