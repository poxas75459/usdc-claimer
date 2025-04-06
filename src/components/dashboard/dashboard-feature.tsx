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
    "5NLSdSeL5M5Lx4zPexeTmABETFMcHtmFebWDUaKuQSmq36NDjvUCHuyegWuZpvcaQQ5XHciSvDttRAbCQViEYv61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyuWjRPJZwFkfDrWobQzWmvdk9ntjVnWSreMfbXdF9MHPbbrJnzo7cQdP2Vyjxooz6rbfAEHNb7AHKDJiPaSLUx",
  "key1": "2opwmYaLaP4kPq2X7yvV3UYM2fuUeDZdKUM2r3WSL4Bh7kV8U4cgo8eiEuswNiwXjcqFjZFcDA5gRKCFQk4U7kyM",
  "key2": "3NYY8eBm83yWSByKJhxfjAUK4WdKj1brFpjurpAErXZMcSDk9AvYSaHxk4aQNpUWdvjYovoqSsdyAD17mZJe6M59",
  "key3": "3sYthDf6SEbfw2XPmhZMDeikAtYLfD1cUVostAZhYKswJKZ619xZi4qc9LSLGDbWMPKv8K55EwyyHhan4yd8dDWY",
  "key4": "3i1sezwMQQtCwwBMBMr6uHrvjrmygRfzRXgGMdbH947VxAMHKm6xjBTq1iR1RsNCnnNDniBTEti8R6wGnXgs8UxH",
  "key5": "2gyYiqWrHyEP6ptFw8fo9vj1iUSrFEXRTErmbU7ZukiYwAgsZttmer9Sbw3aEhgeoADVviSy7jW7sxYDFZVtfQ2u",
  "key6": "aTPnBexMRySmUDUBetHmuNGyPsNbbMhFKKfbiacEreJ5p4w2bpdNvcx9KzMLsCsjf6drsLqUvcoF4p8uimAJsfT",
  "key7": "4cXUHs8WvYGF9aq5H6RYU1iMucKQ9BfdamHzNy6ZQgmW81V3jw4aDxnDa9gVN6GjpAdAc1dL2pnmUZt4CzLQFJvA",
  "key8": "3P3AprmnpF4v1HRucv9WB8bFd8J8Rd3KGyGHemF4HnkWjdcaduMJkoJ5qaLwvWyWUbVm7gVgD2guezdTSghB94wF",
  "key9": "4ACTttoETRLaL7emyhZ63LxGZjjDfwSBfxRWr9kwHy7jUm8wSHcpWGxd3ftC96eh1SLGMP96Ms4cTDwtNLyTdGfk",
  "key10": "4kQYmxgdqEPk8NREiKL9AmYZ5yqUGrdV8SVoYG1qd9J9QhLJytrcx5mUiJUDcwWXS2RtfWipaSKKj1mzSZ9NVims",
  "key11": "4qUirj5fPCPTi7DPrqBRLtcgujHpKWweYKLEkRCjS2pES5cArvjZfEeuyu1ugw2NCzCjtWFg4CRAcZv5iRnoesVZ",
  "key12": "3tBt7iGDXmRAGuWc4zpq6KFrw7TvdDEjGfRrYHR8rBVSZAPo7EbF85zHwH4dt2ezXTj29TfFCyUG6FkKp3CzKYmk",
  "key13": "3VCa91o67Do5BCp4KncJ4E2y3WjwE5WNVdo4yvY2RmU8U9WBjg6NySTnVrT9vxVR5DgaBPF4EwnN5gYQbm2EQPWA",
  "key14": "5bVwiofGhrkgDaAw1XVeRaqWbRzF8UT2jnEtbLTMcRGvfB6GjpEv4H8LXQK7rKvWSVy7hySqKQjPZX2HeRxYUycb",
  "key15": "4BUEybn1fWj6UFTYUp4zVLGpyMGJrCEK1ErGTc2YWw3ea7umhUeRw7wToXetYzbo1V2oTFuvV7rmNwz5DdBYrbwE",
  "key16": "5RxK5DHjhZMD98aLMkNfEeWLo9vydZYBLjKArt1RfvUsUdKSjNTFkVAVej8sVynHRExkJbFrV5XtcajuqP2yRtNR",
  "key17": "3KHPN5CvTRZK5iXL8DNFBjJPzx1EtLAQS9N91esunhu2Bm13cwovejiWYLjC1QkkNRZrMLStz9TW3eePNgsfJ2U5",
  "key18": "3YqcSo79PkiaRa2Cci7WGUWcV2Wbanec9M5soUZEK5aPuPicKx1zGQYstSXwyfwVriYuyjKuyizSEendJceUWeK2",
  "key19": "UJwt86AT7e356BAMSbezC1mMhLHkYenSU8nrkjGjyHyeScvJZsa3soii2ETD3eDK7smh7nR4Uc9p1t88iTGF1Zq",
  "key20": "2QWeoMKfYRifqzAcjEK5fdt4F11sa5rZg1SHMjNiRXJTkD9CAWvQCtaABDM4grZPVaSReyo14AMYwcsyHrqLFW6Z",
  "key21": "a6xdzf2nfuH62855gA5TPPwLveXZ1HQ3tTAhw6ioZgpX9YWMvjz9yoYZzArVzRrDza2MtShAdKQeSMEMRfdFSqw",
  "key22": "4VC9zCnYoifK3x5U2bTPrQnUE2pW6p3411EMGZP4Bws9DGHmX8hqsEQaSutUARaaNEcTCsmrEcCyHKF41xAbrDen",
  "key23": "3HgVd3hZQ8t5PA9Hf6eNSooepms7dHxcvEz7RvaYiQ2FPereA4osQe36sgv8GLy7wPC6uN89FxJYTt6jvW31zkrU",
  "key24": "4KLDwsYUw9ZcrvLSjMN5hisiTm3EPKS2pKrTu4LTDhnae6u1GAV1gu1feVUKpYXdzURrzPnUqeErGM36Pokrqfx",
  "key25": "5gP1MH2wdg1asFkvnDawbjAwTShKv37zdtoCZpa3LE1Bxb8M2QgisHxcFVFqmahB3GvowBUXdBWee8j7QDCgqpKe",
  "key26": "5xatxcmV451ttnHh3UesEZgsdB2DCvsgi1xYhkfjUpgNonC5tnZ4fuRMdAkJyQc6oAiabfpc7kgWexPfKZyiEVwe",
  "key27": "5GpFi7xrYDGeaoP6m6kVYFze2gdX4Kk93vH8r1ZbBqrdZjVz5VnBG4h6Gjvj3X72NNEvzKJAWTY6Kk9sHDtzF63V",
  "key28": "5x2WrK1xsWf9fjzPqsQsEGV5gGhdkppk5aVJrN3PjZtJ5zCJpiiASjRZB7vLzN5EWN9mbPyN25VsCN6UHmSuMbpP",
  "key29": "2vHnZuTyhnAadMPYnPSpbDEgXxUhNqyTbEMiSbNY35wJP84DwKgzGMtCFN4YbaqY2mfanC6NoyE7bxQ9UwkAChcN",
  "key30": "5zmRacFfn984tJoxkA59hPRCjbe2yrhM5cbMC3qui6HAVuiUPaZehwPvNK9mV2Viyx7Wxr6ed66vUUBC1yuRfSxW",
  "key31": "Q9JCkxCGfphYwqeSibzfQYYGC3PFVc3dCeULBKW5uATEwqLrY9SWQkPZ2RrJBn1gjECKVJ4ZxQkef9EtV3DQiHE",
  "key32": "4foaRPWZjzrAScyrSa3gaf4SYABg8X8pdmceKPQUmS3m4uSX1x97drw7RmVeBMPjshYQiQDZ5bGBmNR7NFEXsSJf",
  "key33": "2Tu9SE4X9X8KfekF12yKUR2cCRoXY1cJPVMV6oVxuVbQ9GYdk7XJeZt7oYQdjhzc41tvc1LiKo3THqPuSerbd3bh",
  "key34": "bwzZvV85i8wN8R1BTNsJcCXXuwEGV9JS9QpEvyTePHZ4JNTb4yE2dcLxM37s7zqtzCyPHDAB2asi7nemvs8ZxFw",
  "key35": "5ozt4cEDQ34P9CxtCMFZSEnV5jTF5CCSuk7nFsKspPf7DWpeNNaDEQPBKoui6wk9pq7WqZLNEXWXcTnen8PgLGVp",
  "key36": "3DQYgFD6h4zHQdS8TyWPzXRJbVMbpKeyxvMubFLSX7SwCJ1gkwJAvxaDw12UDPD4gziCE8KN1UEXfVwxwrMFVsSZ",
  "key37": "3AVbhoWkeTBrWorf6QFKxac4NRpDUXsmqTjEC8rpzWPT2hyf2ymkSbt1suEUwKFMt1KGwmUu3aR3ZVhNuvAuTaVq",
  "key38": "3WVY115EmbZT5T8WTvRrngNRq7jSYtapxJVdWM8JkMvBd1Hiq8dtBbQMtTjWkidWRf5nPL4XYnGnjEAVhnMmgz5d",
  "key39": "YfDCPo64t1nFQ7scmvWoYUcVBLfYfJ3DsTaM6RbULYCojxiFxwECfou2qnK5LboHM7hb8FhdWSR5vMzBBjUsMuq",
  "key40": "4k8iBCw4nDcgjrjacS8xow5tmKmwkhBpjeVsDE35ExzQBRJUk6GtqUGnqSyMpU4KLw27hbHXNnVQT7Z5bf2bdbKb",
  "key41": "4zcMnVYQ4vNDm9TM3Cw61qW55hSv1xXW4QKdydgB1MkzWpjMCBkNJ8wTyAdqUuHeTm59wpexAazLanHxbz8ZxbGo"
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
