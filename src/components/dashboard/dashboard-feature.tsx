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
    "3yCgypGykDrgA2drQnFPzGahg5kT6TZZw5mHGRbNZCfdwwZwNdxhy4ah1pQpfyqmdhV4rbfdkAefaKj68JUcXBXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAK3Vd3gwzA8mHfPSwJZgEdMTgpxnGrzWAYKdYDUc1myBLJXacnofe1nm3WNhXvvTGaHFuEGYKTtNvt86z39hLw",
  "key1": "2pp8mRk9mEweYWWBd4qEufbiHqkA8JZViJi6qEWWtGeV6YbVefJYntE3oL3FunL1BhHKWPa5E7UUbhuGNANniqoc",
  "key2": "3uJ1TY29XXEo7AdYztaR6rbRUzLLfGHvTvUph3uyBRV1SK417rB3YgWunvfGZTktYaYsQ3YcHMZcN7g46LWANQ8c",
  "key3": "r6f9Tbr9aq3afidnLVb1RDQSk7XgvND5u2gboieBfNmsqNHqTTE6WjzN2SUz7BbQAFubBHnSLs6eUm3QX3UF2Uz",
  "key4": "4zWA1GvHeNrdN2KFZPGQjuRcEpNZoD9WU5DWLB9nYaZLcs3WFgYeuPHUi4HW7A23ugYnBXKkUVSQK5V7s36vZtoT",
  "key5": "3TEoVKrvaiVWVa8dqTfRbS7hZbrmYckwoGx4N44in7jW1rzBkkxvjp4juYrApbNwxvohqhmCjffzUK4SQ9iQfjZg",
  "key6": "3pDfVXP27WP1491uUqc6haCUfwnkttRaNJXsAoRTDPR8i6Nf89KbZuhQm3ppLDHMWPymhe98ZPYDsidNk1tL99Bn",
  "key7": "56s1sxMgKuBfq3opDDXRfYxPKZC6R4tdsEZGcQYKAuQhn4MQmJ1LveheNJGibj4Lo6w2SSnAkYhavDYHAgz3heYq",
  "key8": "FUscvnicFKt8SWrMzAPggdpVdvRyDERqTfEbMZXFxaUxtY3ituGovnqY5Fq56mpU5ATessDJdxWZCCpePTvNjva",
  "key9": "KTYuZTDvzt43jYfR4cuuyE9jrLExUaymCxnQNJfwojtNi49EpccCc8nLx16ozwUsfWdjU27uKKDq7tc1yowZGFC",
  "key10": "o9gpThey6TxyCbA3HSWo62YmssvHeBDNL9Xro5cnk74CHzCsiiejGxaNRUsows42prjHmQWUgYQLZgfKp5aNXmM",
  "key11": "3jHRKhRgbsZMzjauu6CUvoa1zBeUk9uFvgqVa1s9UkPE1LGo5TEei8XGRku8KQikAu6FmQULH7DyN6ZtRKzXqJWP",
  "key12": "hdQnwBKinD3Xv2qbJFZWcxsTBopKttBeGKpwtbiw29jad1QNcoKerEThVGJymDbmfDQq8ZNUyDt1BVsEgzf5u29",
  "key13": "4xynoxCsiu9jww2LKLExqBA9aTuCgUQKRt4AeVwbbmAeM6Fy9Zvv3oqbEkpLGGuQyBTxrN3Chrrck9pX5jSuYjjj",
  "key14": "R94qmi7TNE7AVfPnd8NicgjWhdXcrh1AmA4MmDjUDVx9oG5sN3yjC2c8DG49TSMpzN6ZaLbvE7Ra7WieJkCMqE1",
  "key15": "xXbMSMBNYg6pS8KRji6b7R1EZz5orEYBCSWBXU9LjoauBJTt5hHHFg1ZxQh6KWNGGkBwBaZxJDMz9iYqqynvLuM",
  "key16": "4rsQt5NnE7fYwUBo3TUvimKiCLLffsGRpxcxwx9WXvZKJ9QYu5hHpdEfLcAdHHrP3ASZDQeoDZyPG9qES9pBWPdM",
  "key17": "2BWU3wKnSBu9V49tzfYtAiDAUW6EL9KCaVkxx54d5ApgiETPY4Q6ULcYP3ccSUk9Pj68oW4dhPpmeJ6jTgBs1LdW",
  "key18": "5C4dvyoGo35nWYTGdSaAFUws7GS1AubWKNE1MHC9QzkZXKsbNSz3vA6fewcqtxP17Z1CMHtJrKfmFJ2PravY6SwC",
  "key19": "3MesbPJMqpN8VeDmz1YRaUasXgyHJq2muVF21eXuKHd18dwuSGzF8UKBF2JW2A2bVP4gJ8aULaWKfYtDX3B1FpfE",
  "key20": "5JxTDgEy3HoLND4KeyxfZRNro6oKC8HnWZaQbbwHX91k6YAjw4BUv8eyADVhzs9Csg4NKG5SQEu4KLrEPibgfjnV",
  "key21": "4yHhWxEqLjMeaJrdNtE2FMoN7GcwoSCiLNzVdzVo3DPJqcr9gUyoNMHMxqFnyBtR5XJzM1keM7cQEW3LLyK3r9Q6",
  "key22": "YdGvMArLJSVEgiedQWv2U6kpV6EY2jh28bfX5eX9Sd54JhMp6Q9mfsuHLmAdptdXrS5a9fsgHGckf9KHBgV9tWs",
  "key23": "5Ew1UeLpqspDSFJGCMPbXDde8AWmdkn4ghkKGyZWBy9TPVNUMyQoBFRrLB6S5qhwgH8oEx6x2JiPW2ifaa2zEvW6",
  "key24": "57oDgnSTxAkmq64mmMQNs5DM6eDbMgRNRE8riFBmLX3N9JSE4wghPMCJj8VZiFhuzYTCvWpxYPhy3zxKLGhYbJom",
  "key25": "2y3pXrukSZugh7hj3qnzgHomZwFHuZkGWGoHefGNwmGf2JeFprWr6ezRKcPnNnaD4u7ELUrYbybP3YXqDsM7FiNX",
  "key26": "3vP8twXKih396xzd7wvPB4zAmk2QD3MiNt1Ny2pAHuhkbEUb2Y9pnp1cZ93vy1Am6Hu3LTQiS8s7ujwSjM7c4Ywu",
  "key27": "3dpoEeE3hACj549ZcNJXmHkixZuosM4e6fvc6wr9zmyxJxwgRLZbP3nM79BG5ijPcfMZBLZABdQqiiGAYppSbYCc",
  "key28": "61ypW9HP6kdyHsaB5iuds7PVs1hEtcbtAL1eQcL5WCzxqNTrP7c4UHZKCYsfNJjbibtBfTz87SUtbUpMNL9J2MCb",
  "key29": "M1GeXvh1JJFihSjDBsnbGV9F9W91K4HFqwDPyFEiRpkjiDxxbo7cjy68wBxoYnf7smSaHMiGKco4FAUvCA1swC2",
  "key30": "5iJw1qUjhye2d8Nz6uv6mTbTagWcLUwYfXqS5zVCPfqNnZjY37WaD34nVakELSBdRdYm3ym5cn2e9vNzk4pxG4Vz",
  "key31": "39Pn4sVb4UKWrgnJaQXULEdKpmHAh7ScgGHQ1dyeu1y8JQHFU3Jy1n6vVGqRtDrZqRsh7pWVoQsSxAsz4hvDBYN1",
  "key32": "61Eeg7TyPqFst3i48hMFzdE2VG5hbRmB6xwsLQyWZ79SDzGFgUo7UThvd9DV8nwekvgWSekQsGcWU4EEhiSjyQNT",
  "key33": "4EYJBr2ghRqf5B47jZSeUpBjkJr2Z1xLhe99qmnM5UKQACE8evdwWsGpz4Mteh3c6U69MaRD8PwTGXQvpZmh33TW",
  "key34": "rhnqVU3SpT3gdjAUxWWiWBNedUNqVSKi5hZXrx7jRXxRXPFMhckzWgjCdDDNAe9m86ANgvQ8g5GvfZCk2QAYX9F",
  "key35": "4xJR12ntYwf54HnQvoy3QTpJDLkG6ACakjWpWFJdNYBcmY77iiBBjNwVZbTbtghp61d2fJt9mFPTbQzQynEftFge",
  "key36": "4ERP8TXG1ZndaCqUUV7KDobnzRb3bpmZFas2pyPjB1kBbw9EDiTQBKa8c5ss4LEnjXDGm24BoMaR1mj6wT7ximx",
  "key37": "2zc3eqqxELfChjhKJJKaS8CHdz5ftAxAHx7NSWL57shZxXR1Tux5YCAXD2qNXWPYcUJvkajjJthJevNHNCkMNkK7",
  "key38": "JBcU44uYLXYho9hxDz4nmDDE5so7fS8BHY4ueR2cMZ5AveZJeJvAb4YKjrQVdRsUwRLU6sLeLBfxqW4J9cbKMm2",
  "key39": "2Jsg9ZQqtREetdPvmhdWwjnkBVhAQzFfUtnxKKgRKhkxD329vi8c6Ppjt3VafaQenjScAGXxyh9qYVPnNDYNp6SU",
  "key40": "5sJ8nBLExCEQsMHomtbYL73agriHrnu32kSmdERsrnhVieGaSPZ1BMuvNKUoqehPVbVk5zXpebpWd13nGhEEaxsK",
  "key41": "2CuHaMJkVCnZwPumuXDKxEfoqRosxThdWf85dRpiWqE7xbv3DwCGT1yraSmgqg4iegJjcobSY2ogGCCSTbAiWP26",
  "key42": "2Ugr6FhdeQor8HsX6dxhRVTGzp2Bi5g3uiNjzmBEKizZmeyMXjihqnaEBBapESCjC6Ft9GdkeS3PxXRKC2XN481A",
  "key43": "2hdELJANhGv37j3PMY8hX5NQz5qaVxkBkCKoUVMa7ijCBsisL1MzwQYHJqgg3a9JPfVLkUss6ekcgDxNYrvNBTTQ",
  "key44": "4os2unkomYAf3fMSrmgreWBWcGUPYvnpLFj61HD6CfMVqxKvEYtjRHPrbZ34n5gFN5c8gvSB1m6LPMzA6sSs4bat",
  "key45": "4Pcd26dcuXJiCedCugb86QgtbkzasvqgPtH9Eq66uxMfUUfeJkE57V9kxsNTn7wQLoiVhQgPpS32awoncT8isTic",
  "key46": "5yx6taDTN7Ts9X8BYfoPEniYnBrrh7xTQVZT669nhR4CJMCeL5d1YyJSri3MCC9sVWUDrTTaxsb9J2mx4rZ9ynWD"
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
