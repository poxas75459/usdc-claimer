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
    "3uFkcmeZ2RM94VnAFHa5MyYKr5vUkjSrMgR2gGehuS1XjXLcv62GjPny8zxYCQjJAPbCtpGgTzsT6ttVSdtoPziC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Xhskih2h2diVuFezavLZrQrDGtZGnqDGwturimbdp3u6EDKkqfBo3kjA4aCJXy9RGrS53RiztcHYCmKHAX6oPH",
  "key1": "5mMUynWH9hbwMnhztWRG8Q4Rn2s4Gg5j6UH3m974FD6M7h4jZEkXCzbFi5hES91G2UqemNCzknPSb3gGqt12QEQ2",
  "key2": "215E8N3iDJ12ZA7F9pve8B8kUkyGeUqTFcGtsvtRU9g4Xnq4S6tGnoTeJ8nqBDNsXoH4pYhvtH6CYjWVxh1ZmLVs",
  "key3": "2HqRWWSDsGxY2cwnFPD4PLJHkNg2VApMVL31mM7UG6eGFq2zewRq7ib23uc4Dgew1kfGpgwRvUCvWus3gCvtUsRJ",
  "key4": "4s1J5tPbHNDLWYd9L9Emd61oqh5cdKcgeyKvJams8myFKFXojdt3iTU8FfzwBe2czsyfV29fojWzvcHyf9FDkGsk",
  "key5": "4yyb5HmUsC8FhPhfbihLJR8ynShkzEipX4ygDuHktGR8hHP8uRyKnjcLPWVqa4GJBdVYMux35hBUKuR7AfjPHvcX",
  "key6": "66y7rFB5DxkQ8BayHUCQs3yNd1R8XnidMEsCV1783ELTJ72NWjuKPUq2dFijiZczKBWUxsTut8uCWvCJuRYPGc2z",
  "key7": "5T4Kvk6rdZmTZykBKMNDEAyha9PM4MFTHpb4BKENhoSsFSGHR8LWQk21HEBvecBTGTcnh6PCD18UiLxLmjCWfdDG",
  "key8": "dZXC2P64KfRfUc3PdWcX2PvVhdWQYkQqdsjMAW3UwjEY3aY5aYZc8GdJMt7HYgtAK2UGbtu6eUccqsNki99GD9U",
  "key9": "3MZ1VQFcsFGf5z78vKpdjv7oN2NX18futbt4w4j8W9KHQEgTJ8zEhpHdoVXGpNo4s3YaEvoa4wuN3Dr6ky1m9eNr",
  "key10": "4ALXChARBfV5vW42prSg54Le2NqoMJpPYCHRWsqcsXJQdtzt8pVLhhc6U6fG9mVf6UfSrSCHTNzeueybpU736YoK",
  "key11": "49bvn4QmqSBJ9AKb6U2wubKryuvyPX9GaSKX9rhrrvVxkc41W6H8A5tjKYmjM8gYxE8viEXrDCt4bC5Y6giikXwV",
  "key12": "26EN1PAn44jcPKVsrVzWnaxjALqgBkg9VuJ1GZ69WxJEv4cNquZk9WNRbtYzP4tkXCJMh9tKj72BYv6BpDmXhWq5",
  "key13": "5bb53jhAAzg3TQyo8NDiT7WYi2E6KF1DdgXp5aWMs3Q8MS4PMW8x3UiqZ84zabYXyjB8XeDvjbNP4fu8rW6fQxsv",
  "key14": "4GRFtcX4GmSR33b6BkbCQTeRJEWFivNX9R5FHwYbZQWCUeeffeYteDLLcZWvym7es5ydnp298ya47tf1X3jxtTTz",
  "key15": "4tPiyK99rBAoMzukLpVXS8M9NAv9aC7PKd2XZHT835fmAd3uKRpcs1YkhEJJHZ3zN48MtbPFsJNGmWTzKkXgFLtz",
  "key16": "3z36MrhiZK9tbYyiPPqzg7vLaFW5Mwg8iqMycDafATjNoL6B8MqbMCwza98G8He23BC1Vw4YfEYpeQcb7uv8osPL",
  "key17": "5eryifUs39F3irsEdntbjAgAH2JH3HwCmWRg1TTLJwMujaU99AoiEgAhxRR6mcMwbAsTPidLgdjevgvEGKagvEDN",
  "key18": "2FuroB6xRrTZ2hzhcGSBaEJXrbuBhajZd3yuJoBXwrp2nnGPAqAt7r4M6W9NioQSYAbLUnVhUj6XZMzqQcTeStwo",
  "key19": "4oH8iNJLdRcnENiznry68Lm69wD2ZtGkzjN2G26A4tx4cVG3v2k53X3LNGrjfZGMrQ6HCnYxV5Bfa7RjkqEnNxW6",
  "key20": "3THaHNp1dNzPXcDd9FMvJ7cKURKXdkGxnqCizdetzsBHreABvUEF9Mh6dVKBz48okzhkvKmgXKT8dWYz78Cy2MNH",
  "key21": "oH57VbtWDDMjyvfAt1sZ2DFRXkj3sSN1jeYV33Wa1rCdjTGcYn6tNrFrDxiY3E5CAmTs1HUfTG8BruRkfSQQm1i",
  "key22": "4x6HiexkTyrgVm88SVvXo4TYc7H53ZRJBKhmsSbzJSzjizrcfakY75kiQ9Ysu3cHwRq5E4zBMRGgUovPBF2QNxDm",
  "key23": "3TjWd1nVvCN7THZMs9uGQHUmaTW7Str3JjLSqetxMqNpUHJ29ZtjZmRdvrhxudfgfgpDtQ9LvWnhi2SMCymT2z7g",
  "key24": "3ja6Mt6U46JaKXAdoubmxqcCXrfBEAZSLRhnboQoFfPmEZu47YTH4CtdDffJiryvbwPH5UD6eSEbpXdLPiPHQ4XX",
  "key25": "2YweGEq1R3AcGNKR4DhgLKPsdWzfLBdi28TEFCc737aJQdhNokjib5B7k5FKcrRncyH32RKWjCxBQDNo9anLFDMT",
  "key26": "43emNN1GP5fXnF3wmmYbZuZkvbRaksXW76583JzsaNozM5ycAQwJNYjku59QYDRQ6q6f25knP6adikHvDHayxWvE",
  "key27": "2e6NJu3RS2LBRiJkpY7K9VoF94a3b9r5L7CrHjD5Sns2ghtkphzWjuELj2qTD2D2tB4myuXt2msweQMAj4DgiMfQ",
  "key28": "Pe1BqBHUThYMSafYkNNHArdm5qhYJSKpqYRmXakaiw48mLJH7Ca11j5CFFTWtR3Bs8fEsvNuMXfApBhbRea2A98",
  "key29": "3SZ4BszHV46ZaQQ14jzDt4apJutqDvNDsat5N93eLnNyhjoocCHVXRmkqoRbx3DSCBdJFMq2TAHa2JMsCFJehwVL",
  "key30": "3vqswoY8LtktJXEGk6xcPitnaXPnAa1DfrCWgZNkxERgRtBmqVDZajfahSytWS3HMEUrEGyGLacPaqkdhQftLqLW"
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
