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
    "4r6RuZfcUBuyySeqDDW4Q6gqTCJb6Y8SCNd8j6NStmShBVTd5J4FTEu3DYV1dzH9JH8UHkMh6GhMsvRAgu3EUZsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmBuGBLrQ1jZJyMLYKqhns4TuxF66RszNt1fHTYhSrzHjLwMrvz8b7frad4hFUMU1FWtFsAfBxXova13kKJw1VQ",
  "key1": "2yZyHYrWaM45wWAPAN5ZgwT2MJjp9TFor8o88rhFHAdiUskhpcvPCc2UfVwH96rb9djvTGvVaTBjPQ6Ttc5ss6Vf",
  "key2": "kiVsKYwe93wBmVE28yTm5xRvTr22Cnezi3TNffoMVitm8h9g4kQeS3XRQ3yNTD7Dy84TYu8CYMPGxfigkEZ6RU6",
  "key3": "5XwpRupyGunz7fJmFNDXvEURNVYmvFvAAtY9hb881CC9D9sajRAXbwLfMJKbY1FkCHmUWN8cCGpL5miHPXdE481U",
  "key4": "FYumxn3A5xJiPZvAgBdUZfjdRHdoRLjWET3GYv5Ubt4R1DiWHarYkNQiXtoRwxbUUVA29tn88xnKbMZvjdPi3Yt",
  "key5": "24P43deN9gtX2Nb3BQ4KSdxjDdU2pVF2zgFh8UEsSKXe88nba5X5c8RvAN1MhnVwbL9Z5WyNMr8so6Jrhcnb2FQn",
  "key6": "3x3Fhq6ER3bjrTH2rgdRaT1zaWPxyrUe3xfAHSgYS3TKcCJ4GJ4PeJrJQYyPMLnP51Jq1Qz4d4EbgCHm9ZVy65Nn",
  "key7": "3VYCvfBTVrBpgYT7sHrqehn5N7PLwei79gApda7fNJFEQKSLxhVVkQ7b3MCh8SvDfNCpSbw3awini8v9BqHB6xmV",
  "key8": "4NMqXvoW2KZ5Ann9oaZxg4bTtWjx4dWnfhTKUenHXxt1uXviGdxekLspSE6UoVoejEWJbCYzFjmaLWUPtDdEN7rG",
  "key9": "593y1zAFdJxWfhqA8vBYDkj9WQdajd71kkZDjAtPcgPBR4GaA4wGZq1AT37a1zi9nMLaZMJd9wjeE36xgW67v6rG",
  "key10": "37mzgFdTx5tAdXkeuDF3ERjBcpjKToWYFKgrFaE1wycB5T58jfDSUEAiL3znMkwP4p75p1W6Pnzqdd8qabG1Chcp",
  "key11": "35LirAti5YG35n9zHwbob4KEzc7sGsH6RorrgQVViyEGwYoHn9ohhKo91sGCV8NKnp5czgA7ZP3XQaJ9DRhe3zeH",
  "key12": "4cmNupMBbLjV3EdMTwwWxHJNd7PBxk6XeHKtxK5GfLJ54QFeHm22ygvrL4MACUV2uUWobENwNsQdiMqdhop2SPJS",
  "key13": "2Pd9ZJSVuqmVcfSbGnZoX2DLRLSSr26HF2iYZWWpTjohQEe5KXX84SXUtnLuFFe22v69zEnUCwCAG5zzwVAWZqf3",
  "key14": "2A3WpW7DiyZ3VhgTKwxJPkbMTuEW95Ev2GFrooS9gZcu7fiL3UFMvrtHxgt7AhdytGHCzHaopnMhroduPnbMc2yY",
  "key15": "5RU7KCgsfShEQcW1BqosFw5QtDrWkb97zxM8D17McRRQgPJzEXdYF8CHVmE8y7KktFZCEjcRP9GiFGi8rCWD5qMy",
  "key16": "5Q4g5M1w53XEu7Hk63y4Cp4UGceyHKtaAcGLcDVEZUdCQoxgR7t8VEQjvhPF6LyYvzLBW21r3RTLV23L6x86ppC6",
  "key17": "iWgWkmZnq3m89QGoaKBZFaUWT61FQ8UBLpzM3q6ZcS6V1ZY2E1N51rymsWiLC6tk6fWfu69zssquDZLkA5dUJd7",
  "key18": "2rYa4qFadwiKY5JpWP2HWzuASi4bJu5YEMDuaLJHpdcom58bddaxTrnpvvbq3CboLXkXvZ9Zu2UtLbN9hA1bNFwp",
  "key19": "56izNMvpT1HVZj7sEWGFj8woe3wvMTYpVK4jtZJJyiUzsDF6tyjK9PEbFiKLGm8Xfnis3zfppGCRvtxUiajYFsdb",
  "key20": "jNRZoxVWQr7EL3YfU1wehwcajf22JX2ef6RHMApycfDB1CChNkMxqxVmqHHPfG9fEfq3enBpEAMPLAmGChED9qj",
  "key21": "23VpE3Me6Gzq77XJypPFNwJ1VHYicAmUiqbSmoTCVe7ZxZeLxXH3WyuNm37rAfKF5kXb51W6YLQdmogGNmKKUT1X",
  "key22": "5dEWp1oreay4M5tnmjJsPRRQ2kapqRddyMftQyJGnkhUqCAdiY239hSmeJuKKFWGr5CpaaKvsjdSRPxiQYxi99HN",
  "key23": "2gNhLxxCVxTDAbhFDMJv8uJDMn8XPS9oCW9HiuWzo2ZbPWkt4gisBfACiT8xj3YTK7BoyCSHUSmrwVihXMjdJh9j",
  "key24": "4KaeegfL7WMBpCE1anQ78v5ZBTwe7bqnRTPL4TCNKQGEPq2FC3uBj4gU73AVe9jWVXXN7ckA9vmEAbvRvW32eAoj",
  "key25": "3sHgpCHPzRodR4WdhjJ9T5iNLaTdMAfHvJc4P1N6n8gHorY1wZYcERA1HUCMjfvjT4NPvSbw5otgbcjjAVX5ZVwm",
  "key26": "2Y57GrDKrJvHNmSp4MzxT3d257gpvLALJV44Tx1rVAaTj2ZGVPrQfAsPKwSP3jut8uDRTnpP9xPtaL7tELE8c7Nj",
  "key27": "3Gp5oMRVmuhbgPNeGXrjSyCwR2UCLj6CNnVqALQouQCrvvaEys7qjrbWhutrPCevcGi8N89DQULxZRNSLNqes5m7",
  "key28": "5s9wQEDiph2mFEaJrgpHp4kjLxakWVUfeq3uineKTaJZpPucLmT5GHUNDkKEuLoWoCqdJKYt1QL1dBYY8prh5yzC",
  "key29": "SbYx8s6zhrXSxc3Vq54GV2nGbhLTUAAK9FGhj42b89ZokBkocb5tg92LPBMk1dncW9ZAyCtb4xKtQFhSdnPSThC",
  "key30": "5Vg6V2TF7hrrWJ5R68QYXLwn47gRske4mfV1mz9whwdhMTvVPHi4efSbrCsRJXdHookCU6RBKXgofewKVsk4zovy",
  "key31": "UySKJkk85kKmKAh53H8jQnPZi1NeEQnv55Uw7UbBifvcqM69uh5SWeU6APQshZyhtX7tjNxQejTq6uLMEgFLBwX",
  "key32": "k1VRjmQHSRVD534Kf5QFPiHVrdssrnkknHs3stNFmn3SMo7AFNZD4TrWQpzxgjQwCiDGfkSqohB34pkTKaBbx25",
  "key33": "57DRj4oFjjQxsBh5pS8DQRNACtEW3gJExTWPpZNbXYo7KCCusgTJEizQunsZRu62EPjyDjTc4zWYtmvsbnUkXntw",
  "key34": "2BQt6tDJjjK1MiMHmcov1A1gbhdwUozVeUWPaZd79v4ELNj7LaUFSXYFSN7UVXUQFQqo4WjUnW8HDkhS3dJqfJ77",
  "key35": "4v5D8wM8LLE2XSEsozgcUPDC4HQDEMTLYp2k2odG3Jo4kwtR9EaCa2YxcFfdGVobUoMDpznv3eU879LZhVeDqGZc",
  "key36": "41Xkdzw9cqqYdcnoFob1n45uYUc7oZHvZo9GJvoSvWWzHYYbb7nMTbxoxsbLNb6gL7EAEiAXuCtrhyhNGVGpWFgs",
  "key37": "3kagTygRNezSMJZHRFdeWKe8WLcFDMSrV8MzEKCGcZjktjmRB2vCWzWnE9vn6XYtHz4Qt9Ew6EJKayaSd2tTtyck",
  "key38": "5nDVgYaqmtakpXjxT6c7LuCK4FLZL8UCCn96YXZYrrdzPPupbAmExmJtY75VbFNmrDbCcJvzRkLv4iBVEAR8WAkQ",
  "key39": "44LJhSbksHUSBJwHUV4o5SNmkjhCwHXHM29z52xUb8RWgWsz6Jg6YqZW4hiDvMg4ooDDFf4Vgm9QK69cZ1zj6VkG",
  "key40": "u5ARc46Wg2qeD4n7SrGRCBSoE9koY4r3DQ7kxsn7kmwWAksHd79HZbfa7WEKmZy7JXhuuLaoG6rWyH2A13L2Mqa",
  "key41": "2sdT7gwEhdQkdjwQ364dcYMMkWTzCC8uS1fi7reb991K9onPeQ4cmtUQE54kGcrgqX4fKLxhUmeHYAiozTCyB6az",
  "key42": "3Pua82TEjKNfWJfGmwmNcATqfmPDivxEY8YE4JRfqxLA1QuJ1grWfr3nf1eBpcVermkBGAr1PpRQB2mKobyGMZgr",
  "key43": "5QgJKdcgRX3F5mQsxhRKk8C14FXymF3AdFSyh6gpyZAbzh7AcyFBFEV9Ss1a39yiisQhYEaQDwzWYcUaWKTQeBjW",
  "key44": "55rnhJN4UtEZ8YFfpst4LHgALEboq5YNEQkz5iVB6CN84MEsw9S1icKXfMGfFV1jkU5tXJ15pRFf4MgvriuGE3nQ",
  "key45": "5egGFC7wqb1BpnzL137fWaj33FVZqMSpAmL8w2g4c2EMWd22CMqDhUiDLgAhWxGeKWKGexx8mgfgVfLNUYvc4KNj"
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
