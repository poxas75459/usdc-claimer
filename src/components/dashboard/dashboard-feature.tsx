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
    "38cXvRr2y23QS34xTCbTnhuP3moiT9yPLuSnWi54fwPwkTBhH7bsFwhRbb8TnaUGykNLSeGqXB97mGntgbgfdqEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SH2ZzP9xTzNkUbhLieca257xP7bkA2AYE2CQMDSc8UHMwac1bsm5jxrPMAWfMyh9utcUHV6pFqNJh1zuEuNEcFj",
  "key1": "4KUsFJ8WEkB2X8maTpauBzxAt7S3E9VUgpck5gAz68Jtm2s3V8g5iXRxZAsBUgujfe6ttcFGGj1C8oA8SEwCg4Lw",
  "key2": "AdnpTtoDUgNyYygUZCNqSRa9xpkBQczsqoJY1jegZ1zJLvmvXEgmph1LRTHGLAzjY4DjsJ1qh5zV1q1rYxqo3iD",
  "key3": "37RYzeDF4Tdfgf64pSV7PGy1yJDDPASvQ3pj96HBApHUwHPsb7LNTfrEvG8R6JaXAnvVio1XM6PfD71D1QarsMJD",
  "key4": "3YFTJAf5RZ8QdzJ4kyMfeE8SCZcWw4C9nXT6WiUNYdDJ2Mha6MZt98tMBmW96RfrKq5NZ4ejJQz4FpwSmkxy3vcN",
  "key5": "5FreorsMxw5rvptCtMtBFJz36tw7CH3qB9n2wV1h83Hu1YR4zY5gaA3mriTFCxqZghRmaPJZpZHCCAkPRrYMnNuj",
  "key6": "5QwLFK1tZWx74NRpeobsruPrAk9i58SCyierDcy8PJ2w4gHFRGQAGQbbD9SH5Vbydi3y2dJBD3giDVxY3d853ski",
  "key7": "5nknjUjFxn4aRteswL9VyWu6LrN7meKzZxfBrL5MjXDp9WsmebPK7fZ4FSS4vKG1eJCw4fmqppDqKP4RCvYP2nbC",
  "key8": "2hTduNpbcAaoxnqnVJyHjLrQrDE3atVvkzAd14aeJ3tHZpCQ1om6mEmA1QRUSwShVdeiE5TinQbpgSceU6yu7umC",
  "key9": "4hNZnLX7WgJcBgBPhNicManHm3kDhQaoSkVMbpgXFhfijPYXHPuDefjwmnBWA1Y5qfkbX6UsQmAsCjfHF9ZisqKD",
  "key10": "2VA4KLqeGRjejYfPukTHxQ5w2E23nCnGg4W14Xk3p26kyAWTbUYNoNxcxTcgV7LFpsvN1VQCQTkKEtgRqPMWGU1T",
  "key11": "2Mn9Yky8D2tjY78Q3TzrSWWd2wBtBiM6C6NbNd8xhn66mc44XnSujac8GcTYEDyvRGhZweU49aZLpQUqme7bDLRH",
  "key12": "5jovDdy76FosPtBGmqzrvet5RkxDG6mo8kb1N58cEFabcLNkr3ypnhX9v1CMUWUHwmYqFoR4wZJd13NgTfFUvZku",
  "key13": "2qNVvnvUtb1UUWGaTWtvmYNUqox6QyHYga3YTBvJchKH7agavkHSKjkbuPzRzC5xwaAcAtJpDivyAJUEdwu9SPq4",
  "key14": "5DkyQnk1eKygYFqPzTiSav6LAa1qJWD63xzf8V2dZ6ak39SBUkWBYmT2w6KqND9QpgjedZnBFtqzoYLhMxGc4FEY",
  "key15": "3skFQBXkqjsQwZN47cBsyKYPaFq5c3aAbbr5oGHUNsb2hGMsggzeR6NX8jGjcijv5mu7t1iFmZ7uoomP9niafWA2",
  "key16": "6VHAD1DP1xdfAtnG5nVKMVbSAP6DXWwabJtWSa6jFcLtmJSyEYwpxTbuV133QcXanghLqvUrXvYpXtA8hQByQnj",
  "key17": "5SGtrJ8JncDnjDhA75asYFQTjdsK85zZdXNxksgQUCzgcnHhhdV9iNW1t82K9FR9vewESbqY1WivJSuZDkYQVe2Z",
  "key18": "52ebmbNVgQGgJ1BF5eAL7upsGxngeMiCFXPHvuSGgfUvnQdVSpyc5Jy56zUjXqSbdC8MaCDrqCybmk2KQE8u7DSZ",
  "key19": "5YymrHEcSxcxZjPS2hw84ZZ8GF72pLU7XKESrqoWBvcV6PzkM93n2L58Ty9hd4YkKrVLzQCUFV11Mi4jN9Dje8vj",
  "key20": "5Je6mF89mPLS2FVziXdtc7D9HVWJpAechTbBnjY9JszM7fx7BAL5ZRjpW7H4gqCDi13KsfFXhNxNaVBRFxMm8a5C",
  "key21": "619rKjdifDcZp2CsiXQcjmfS58GAQdK1FFtwz4E8sU1GxJwE79jDjdBstyoMfVDKPjHy59fyGbi53WKGxcGpnZ52",
  "key22": "3VfGr1a8JxuqmkM5oTsWRNEZ7iY7Ky6rSozmzhRhyEUoitMaB9XqrMQNZNiLAVgzzN8eDyXYJacjiNBzA1M2fVJC",
  "key23": "5M3DwciEn6BSvrE1hF48t9ML6kMAr8LjH7gRE5TZvbrVoaqeJrCVdKGp4QwHy4Wnw2S6QcbRXFt3MLEr44u9nLFc",
  "key24": "3vxryHoGaT92JiB1ppJ3g2nw1DAJimKey23JorkUCa2MafzkLng5JyRxncEVo5ifs64QxoYC7geEsN5CBmFpcohf",
  "key25": "53oyhHyFhLQ7Ek6irqdN3QaYjC5UE6to7RetLYmaepiTPhotbgX1FbdaG9irBysJiqKk3ocyEbBAbuCc6TiBBhPc",
  "key26": "W9AWuMhp37ghuGR3vikNtF97YisWeJppGjh3HKi1LshkZxJX1eqJ9wHheqeYEvaGY5FehRz4AJNLTDtgvmdzTiW",
  "key27": "3RP8VHv3a8RTqQBdBgQ28gk1zAxRrgj6ERpAV5PSPfhFdHSY7Ti1sGaLxPjezKmVKWh9KJScEphpqzdvwidHUzvh",
  "key28": "66aRL6FC7aqUonJJSHnFdD1Pq8xvxvjqbpPdXKYodiw8CvBzdVfqPu6fZm7eL5XFbvQUTcoKKTda9292pYzFYoSu",
  "key29": "31Ja2YDtFWWSgGmHQHVigu7az4BqWdpA6eRP4g3H8wugSy1mZPXTJL2ud8bevq76s8WhLkjZeuDKRMTCoBRSc6w3",
  "key30": "4zv1Z5fvwPyJGJ3jd9KBA5E2F4q6EQGfv6F3FwBjXC8oiyujJ5rdYuJ4EfQkRvo7B18McZ3Srni8BWHAUAikY9YC",
  "key31": "fymtGiDYu1yqfTAcRXrkJNCyDDNWDg36LH737o4NdECF1Qe29fR5mFqYbGE95fP8d3urTRh7FwdGELTPNgqDNdU",
  "key32": "23p5g1AtZNhHiGy4fzuP6D69xEVMmGqtAJH8N7V93cJC4vFqjyQVERhtmHEZAcyiTxwLSD1SijRaXat2PKHYQBrR",
  "key33": "3WroKqLU8swVeeq7hAHTV4TyangX4kx1UViTRYuiaBLMkad7qpW4yJGy5J75mmz6jVjFrkCKJB1NWgK6eguNdQUw",
  "key34": "62Mn6esSfEB7Fxj9rQt2M5XuifJmUzN7e3EJkhEKEt43P7C8Bo8EzRoASzdy4pM1oj1UhihhA98tt6eUYc4ogevX",
  "key35": "3wRS7MRHnW8buf9rYsXdocNuCj3cuvWY9d9BqJNL97LYTmadsH4iRfKVxehSG8vQjcetBhmxEKq4hKgoqf92GWsB",
  "key36": "4TcyfkMishRZzzZ5kMLydtXCrb94yMEreMsa3qrh7C57uP7Au6DJzh9EYzohBhXHw9uBDk8NJLjsc7yiVuSdU6pm",
  "key37": "2xyS5cu8xdwvuqTnaTPidxeXHtQg4daQFf6ZG7s35FSWc5GYmaB2xJuRFMRcFXHDf7pDHWgLECSDfjmUJvmQ5qYr",
  "key38": "44kNtboR83LPja6t3ytKpdNU3ed3swKDUpgyoNgPMjfWqhgnmQfdqKhGxRX7kq3XVJf8TBbW7va3tNc1u8XTGbzG",
  "key39": "L1uMPEdAT8sWkVDvfxgCszQypZLRodcsaGMnXaCWxCQ12cQbMEWCba9poUcVe1PnYGUmWGvP5RTsB2zkTFzYsBJ"
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
