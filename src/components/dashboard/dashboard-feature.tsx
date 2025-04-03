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
    "9AmES3WhwWCNkvGBgc7rjTR1esVZXGLoty1T6eqhfGbKW3NX7xtWqP7of7PFin3wjWwCEgraC4ZYyrn8N9ygaz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48kwHTYftR33VmhHHQVr9hpCCsgo4CY6vcwvR93PMdjcKkFRoFkrAG4M43ADZbhcj1aVNaFF87h5rkRYoemN1uNx",
  "key1": "3tw3NRdP8mhT9cRJD8KPaGbkSQKKGLBxhZhGLcyy1sCMzH7vFrwntFZKqm646v8vbf2Pp7vszjZjSHYm1YhXfD8t",
  "key2": "4dpZi2ARhLg1Y3oSqS7fftRDyw5bxTogdzdjAuuRhVqhrbAb7zMqWfviB3eygRJB5P4aeLzhWk9c3HMM5ZpaJujK",
  "key3": "4F7gmjRYTuuKPa7rkyJe2crd32dEzWNS6bMLYrt6WqcMC87EwTTywR4RT2hiBn8ggCMHkLHEBs8G9DZN3T6QKKEH",
  "key4": "3wBT38FfzgCoWGmAqHgRjgwKid5KVS89ix5qkJBhD2wqhZ23mZJrt7ejHYK9DqgD5e1KmqbYD6FgELgPTi87KdvR",
  "key5": "2y7esJBh4SQ86ZaeZdm7WPQGmG6RQaSKHh2RY72gS5tq7TEZXLfZk8hNeGRAZ4HeV2xxp5737fyqs4oVM8KCAJSD",
  "key6": "4PdYj1fb34N1KryhyF8v6CXPLTfTZ6xXBqZwZfbdy1ZmqZFSJNH5gp56acGuRSXmBdsaXMirG1nsoxfbFzvAcc3v",
  "key7": "5E6hfK8fuUqA2rMWmmxerPWHmXEKn7nMBmPhrb6ryMJs2ksEFnXaKEZkyKEvwuhvLEb2sRUjE4Fm6Xx1CZ7Q6gHH",
  "key8": "5NgQ1TP2ubirgRq6oq65EUkoFkpi9JvaXUC5p3SgQ1JFGwsAX3fgonh4YGHZpZRQYnnpQvDigBNsR1hkSYHGrfec",
  "key9": "4gPPMyFrotJjvCvnZAe7VFMgtdbVTneHN15AfjYPoMRuptLKQjJJL6SkL859QuNFkeizD33K1vu2XCfCEjAxEUGJ",
  "key10": "5ZLeJmLdc9z4SLcp4GM2j8vfAUARYibJwDu7jTbqr2TmozZn5YrqCjHeL6g1VEfATdRtJtu3TTwbQnoq4b72BdHG",
  "key11": "4a6mUWzsNg4ZLaZYGCGvmd1pEcUyTTqdzhcWoJycJGDQXg3ENLPq7R4jVf68oUZxgQrq2WqLGSWSxeVeYquQ6ibC",
  "key12": "3865FJjqf8CJ6KiUms2PrTVPe8FNvsGewgAoj4JGWtpLmFDab58D7qBPKjAibFXsS88eM6cdchD8kGue7AaPJJuG",
  "key13": "21e9HcKg9bAgSVWSPJvsFTjMoCmsPZCi5pjesTh1YEKnJaG7wt4yYfx7ip6mbAipZ2gDMXLXMqvdDA7cUfHUd9b9",
  "key14": "43pbMkh79nTH7pLPgYBWL7h2Bv5PMpHYqKFgR5qmf2hsfUZm1zBopXqRVbqADEnnzqPMkdZaypmbTK665gs5neAZ",
  "key15": "imLzqjd9KrZKALpRtjqKrXEf2nRX2zWppCVYm8osvAkyrz5UfkM2bX2hCnFHraBumDU6zMFooMT4kBeJDdkYvvq",
  "key16": "5YhvXkR4pNLeHKsC3AovxczmvSBn49T7p9WKAXyVijMxCQ1Te1hLD2drpq2dgM6NLzuZnuo5DK5LQLeET95g6WDe",
  "key17": "44tX92haDp16XY9jn9ScNRxPqCZ48hbBt3ctdpW3f5o2zqNRvDfEMwymDgmoqRcVpF2a2hjpFcveFMCgNmzjZDHo",
  "key18": "3MQkfb7fsNHaME7bdVibDt9mCpeqHrW9LaGXnmp3TiVpj7jY8MrJVELRfBW1KKYzUt69b1LegNfTi4mRGJdzSKU3",
  "key19": "48FSU9y2ggveXWqr3hJdiRDmxQwrWn1WWg1rbQon7zQtddzyZTnPSxYPdTPZ8TwmeU2jK2Y4hqnV5ThN4cTh2j5X",
  "key20": "oFX8SJqeipPtsH2rT6RgmEyo8UnQbBjsifuk5cf1iwTHiXYzkfh3vK1HJ2ZNh9sJzWk98dL1Mzuw4gQw7Tps3Sg",
  "key21": "wmZBmVUjSigx7QJEH1vX2nqf9bKNQBVgKW8L34AWWqyVzXehDcG5tPmFbBuzTQHGi4y2oHab39cGnX7qmHi629e",
  "key22": "4nZNZGVn9LW9hS3WrNqxfyZCLf7M5sp2wVXmRRPMjud9emyHfe4S3vKgZxN56vC9hvS8ymcFeqsiFLMCv7XLM3kw",
  "key23": "JxjzAvrRviSMR9sPyJJe54n67vfVDoaTvoajtpme1ujdMPc3GNuytwiQsmNcWoSoeadRD99jJ594RbjqFirXSMM",
  "key24": "k2GDiPzgt6yhetLq7mHV1zV7BiXYUwTeD1AgjQLp66aNmke8h9PMSZYg8veLZYPugmL34reQfKbjNA9PqzSEBLp",
  "key25": "2osY2ZpSW5YTK1nnKV6nqisU7AWTJxJb6GdT4TeFL9VKAU9kRY38g7i1TnZyFDkYyt6wsje5DDK9EEwu4cKTXJ1d",
  "key26": "2HVky3HsMU8fyXrRTzYYPwNPuB5bAag7QQ869mo8k9k1r6gSamVCwMX5WUNe2RD5ZYEUSMd7VZWodjRT2CTeGkXb",
  "key27": "3LC5Bpu31fsd4Jvi3h6cCUbfTWxpo4v5gmPf277fuSDwdnxKF1Wp4xcTsNYCwyRRd5TKR2bruzww2MTticZbBtb5"
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
