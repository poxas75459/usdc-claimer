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
    "5bECFZb2BfL2Q4qjLT17yCysVur44RasZDHrWi68TxPYRbLsK2gCR4v4qAqYEb2yAjFzkWn8US1DESDzEJ6wAUzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9YLsRBKN263gaSWxiC6ftEWctiaARkvS5zBZXRuYxwDFePmkJAmeMpD7B7HHYjZeBENcS3Zqf3M7tMZZdfWrYw",
  "key1": "2zM8qxFA1WfLKGgjspAEyart3fuiiNHV13XtUWLY1hT22MJrP2wWKCep8Bn3NqN71bpZVpo8eCQp3oDxwTHMbQhM",
  "key2": "4ZM6fBUwxgHHYKvRSJnunmFHCVFdGyGyErgE4CiquBZsjqteJGcEmbmfJEt4TxfEbVmNwbF9UdnDvVhHnELGdowH",
  "key3": "5kPe5pVx3suLuuGP6mzz7hknUdnNcmNBkaas2YsgbuczgMJAsmuoAPfGQoZS58idXfKynHNJVagktdqcbnugi4Jz",
  "key4": "3pxQwhMAHMDbQfdBp23fU2brG9QqTCw46kbR4EoqAjSNDQukNQxtd3joBUmoKRyhx14YDrBAh1j82T9KQMRh2swj",
  "key5": "2nrgUXs1Vev3W5j5suZv59YdkEyu5U2AwbZztJgvTPFeQkFAkgPV9rMj12LB1RLZXJ1erh4JLJV6oDicv5cyifcq",
  "key6": "3J2918pNCsbf2D7z5XxFUojp4mk78t2S9D2jSx5upaNVp1CsnkL8Jp1QQm44b5eFLWpnymoKbsGdRP7bEAbJsHBH",
  "key7": "4LcU9oNGGonoZT2d2MWkgmhUWb5qHV2j4RHqChi1KdRgD4do5F5AM8WA4KTNTzfJ4ViXVhgfmH7KvVDeziP27tbe",
  "key8": "4udoDugYnmhg68QMXa8JjTprfkSEKGUE8DoaymCvoS7HKHzNwngo1S7dr6hFAAtKTS652s5XzE9hp8G6h9u1dvgk",
  "key9": "4PyzaYGPB7uPwx8GYrcHBq3zfTAHWigjXJBbseUDsCZQwEji733aq9XJZnHkoQ63duKhFZRzLEB3FXf3SW5HT1e9",
  "key10": "5QHFZo18BfEnfgFd4nJ9jqFcf28dbGkE3EV9gZNgUgUoKqk3mvmPSWNeHsdeG66Rwa8Vnz2xy9SfvwecDjAfP7fs",
  "key11": "3LUKHAo5tabKrZFioqN4uoUzoS1icpPZuahJdVwRupagRx1oGkSX5pkqj1AvvgR2EXV4w8vzCr9eNhWs8xgzayZU",
  "key12": "4eAbHbtMiTyYcrTy915aw4DQsckNA1ts7udnn8g36JNYKb8PVUJ8GYDGqGGEnoLcc2rbxGqVsYaaPHE2Jd5xgQR1",
  "key13": "URzS9k8CQ2M6389MPyBDaV6i679224rYnBsbCNQ1wDrHDGMF9maZu275iUKv7NKi2oJPNfvLna9cXSAcqL6fWC4",
  "key14": "38cTDYhCAdxHL2qKgtjAK6H2jYRRSnRtfQD9nCRTKvhym5AYjGsgtiuwrsPcXbpFbYmABD6cDP6wNyinhTxPqGC",
  "key15": "4jVA2H81wmZhPLRHueQG7symmVQrSoJmV9DzEuprxsVYyK8LzN4qdWDSqEN3kJsgz94CXFaroa6EDpu3pzEtcMmJ",
  "key16": "38q2uZvGVUwVN8xiJJVAUhVtpG3swSVjzQBJgESNaBkgs93mtUxMKLp2Jn2yHQzMXUNJARQKX3wckhd3Wjd8MZPF",
  "key17": "2AvW3xzRQHsm8q7zZHb1oaKrkMM4N6CDyYTmC4CDS5uLgp5jcFMPKZ5jLc3ATFjE9jrvGgXjZpR6prg9rDEYfqsQ",
  "key18": "5QP9qiSeYPLYRz82iCBSHLqB2AxrxbR3Mwgx9nGkfxPn1E9baWF66vDnM8aMt5DKfgv9oF61smg8vhyBmc9e8ogY",
  "key19": "3SqLpxWso1V2TEPUcDn1vznQHoQNfaw9CySMy98R8i2M14GxHGmpRPafz8w84S22CkgbTQoRwAZuBAS7DhLRtm7n",
  "key20": "2DPg7gy6y251CtUQoUbwL5HYbV5Q6daX54f1ugjHui9iWCTMVzWcSrrWGkmD21pkwkogBWZP3uLckPQPzDXmrSG",
  "key21": "esQmiMGxNtGXx7dxhmZnx4PbLCyCZDesUkLP5aqnYcmkmC7nqT4UJShSdaEfmYsemFR7i8GX6K1sd3cMVHVEyST",
  "key22": "LDWbHzJcAbwxH4iCycGzHUVWwa295cfkzA4LJmKtMxrC5QdLjy7MieUVVWk5eFpnRNYgKCQULKc9Vmc8hM7jKEY",
  "key23": "4kKXWdvYdrrDBLkUx9Ehc86VGzLTWg3s8AV782szX4XSGZwZkKtsyTRwCvE4gSz41p66GZzSeoGChgYBKmQrPZaL",
  "key24": "59Z9ENgj2HBVVnZwTgdV8Fxnfxn2CvXV1nZJ6KuCRrej9AUESDLBMteNTJKUJjKx3EfDAc6wkNhDjKiVG16hr4VY",
  "key25": "WDbZBvM54rsfALK6JP2bUtUMwZhfWc3AcqQCgk68RZgcPMKzQbTWjaQ1ohPKZugikcFwFkbCsjEGcyqjnfGf8p1",
  "key26": "2AQjMM4gRpeCJ7S3c5h2x259wdGuDqrfpNQxREYucQfBcD2GRf5eDeyMC8acG4um2zDFwAMGQUac1Q3Cd7cqYaaZ",
  "key27": "2hUM9zXDa7sSaTbZWYNeEZXQscoQrRwouXxvMmj1CWh4ZtkcSori2V9RV8xi2HJBdXzmtWREzjU4Lxo1QUyE9CGk",
  "key28": "2bCdHG9aJvWsU7arfam9YGCn8BBdWWQxAArjPjLmH8RWwvvpKCufYpWdiK3NxZ78m3iJHKmLC4q6ExcwT8oh1zgx",
  "key29": "3A2YgGXGPWe98dWECPLRpQ8oqoHfC6zoJCsKnK4tZJYKTKsRCjizMYbQbJkEikqtFmLH3BrusrWdZJSNJYnYeEZJ",
  "key30": "y1vyyqqRQLs5C6Ds8zCSgup2P6KyxUQBrFoToQpacwj1DZusojbP9eRUSyBPpjxf4H3SaryGsZAY6EUm9pRnp2K",
  "key31": "4MWeCZLbHPBtkyFSHJ3BXVdWYj14PvgR4ySDtoHuwvqdohhxPwMCohDNihxRaRsypVZRtsdSgqVgNRL3iN8xAspC",
  "key32": "hmD9i9PUadhUziT186gZxMyFWWQ5NpL2Hr53MWMX5NVKwtBGPCYRkYRzudeySgYUoWxcc1c8FjuwjWKCpQm4g4L",
  "key33": "5L8YWVPd6dt1ZcYGifH3qpmTkuUFU57UPLK4fk6FchZY2mqpuhvTYyCiWCHnZEdUpE3zxVKZD1aiBWT5ZV7xozV4",
  "key34": "5EMZZ26DqVLjZWSjESqAdqX7QcufpwLm5NfmTFPEddkPVozhfrFtjyQrj8MaA4R7E14y2Us25qkxB2nwXZb9pdPt",
  "key35": "4ianoSt8ZbD5RRKFV9XUP1z6P5D51X7H5TqySjjqmSEDf9SRk6zfWKhWzJdKh4pcAcD1tXPdkr4YdnhYFWsW4hh3",
  "key36": "zATgxexdQgn7aWnGbGvSPtL3dERSf1PU9qq6JMJB9H7rt7Ph4UcYedLYAdE89dwQbxX9hbzUQ7Jy95DUh3eMfdR",
  "key37": "4yGDfiNY5FzMLCptPUjWvwhkL5wJ92m5zLdU89rgmWPQfdwDGXju5Sa4fNhGJWqEBWsN1A1iufgXU4HLdKmXGL2U",
  "key38": "3B51nUH6257bR8QC1vavv5t9CkCtkB2k7QzTM3AKpcRKbhUwrFjn86eAYjPp4UL6VHidPGEzWyapeBUpffTbmmah",
  "key39": "2HGJ6r9PR2TqJDik6qm9QXcuXy9dLrzu6EKA2yqpkVzcNGRdMxkHq2kWmXWDWQZG35YhFttygULBuBEdb43mKsWY",
  "key40": "3YzndHtifTyGkKChshM8NycqsHXVcaP4cdP1vpr1CFPu3JVNrCjAa4nrXZ6cQcuymm5djN5mhv4zvQTBCnzMdePQ",
  "key41": "2Ck2bGCmE3LuYnTnKwVXjLHWqLMu1HMfSXnKgMJRfnnFNV1UKZApmtNvpuPAvjk3GLqdgp9iGgxQieTWviXcQyX6",
  "key42": "2KBacGhHbNF9Ed9ZXjCENEbVgxKvZmcQDG8o6QYnZa5QKW5VjQiZFjTAUGq1WVP4vh2pumDba1F1Mu3tQmNBdVCA",
  "key43": "k4KAiiRf1p7Fp8hn36RRVhm3ZqaRgFHjYWzrLWMdKFaCGt9mer6CdCtzYAjMbyj6opJGzPeQV8iVy2Exq2VUrxU",
  "key44": "3DXbCAHLrdiFa85G2pGJ7KgaCHbFGfPB31BUuzhgLTASLzX9efRCU8ARGJqMfQk3Ewyy3BAYjf2fW9gi3y5VVpn",
  "key45": "2CadUWDcoNkHqvHeVaDzbmigrU81dYdyoequ1RtfFSWYgGXwtW5y6zfmrSfoNsHtxiEHEVqcHDrQw391uca44Xmq",
  "key46": "58SjhZ58DCRChJmx5PYmziL8S5Ap2gYEDpYDPrn4G2vCmVrBk2rMfP6Z26oXmZkAwxid7cPzAXW8zU8qrBL44W2d"
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
