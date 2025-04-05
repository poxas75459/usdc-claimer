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
    "t6gf4tA7Td58u7Esst3HQi2k8GqtKU32B6mbsAtZsQTgQYFNidhBnE3WYZRYdNkc6szsN79FHjteaZzzoQH4bGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWvyWeGBXB4pve23dxSfGmoXXXeP2LZ55ZW3nNCF98q235WL2HUx74c7PHL64XVhEV33KAqTow8ZrUapHTPsxBX",
  "key1": "SsLmddepX3wCy3F1n78bX1gpEX3CGBjv37pWU1EvLoByRGKaCv4XSiSv1TKNit4RDoahLNHpL65yavGKzvEUqrP",
  "key2": "4kvagA6mDL2qv5uMVxSoumD9zy4TmUNesGVuHkfPrDxQSvTxrVXYvP4riQU73wrJJmEGXbhB1LfyfHSsH6dRAZJm",
  "key3": "9fWwB3Xv9af8wvuLD92RB25oif2GAGsXYtpMhnaq8YGnkh3qfv8PYSBuerhovtnpTC4Ayt3fL8SnxCNwbCMsPKp",
  "key4": "A6vZJWmCWv6ZBCJX6479U5Ci6FEMmH8S7q1qMT5qaKM3zhh2rZYDbxhRa954Ja1on5C5RDTqEAjuitwcSixsSoS",
  "key5": "34YdUMJYrXAb8Qt2btEqCf3DGB7dV6nworMU2qVqWa9Q4tkzKwZWhJBVFMLJUn4sMgZgJwuNJcjK748eJ4yUHjQu",
  "key6": "bnfbHhA4Ed6xRc6MKWJwpWQVh5kuvdLXBiafRjbaFY3co3APV2QZ4yuXXd5Yyp3jUSa4yMFjQYzHze4di7zpkUU",
  "key7": "CanmiSMqAXq6h6cHLgfQPpoBiiSi2wQu7eXoLXrTqAHQ2SQPvVrWv93aSkVECbni2bgKuCxWtVJT4G2XwBZy63L",
  "key8": "5b3mcboCd8ZB8nrT7LD3X7wsqECQ4v6er3CCE4EhWCCPyybHaB3VJZENN9MSoHahe5tF9q8pXEy5dsmpD5mc6sa4",
  "key9": "jS31MeQFEtJDdaF9tzX4ocuiFcsShTL4JT1E3dAKAwWzC8gaCZCMkBUEMGBxrPaptMfVM5bPRN5PaofdQWRtkP3",
  "key10": "3yDH7oFzcqNiW2Gthsd3YJDMx6XpFeGNmNPyp5Za9oNvwEfxcJeK5okCQS3Pjhv136S7AcGWWboorQqUzg8FTPxh",
  "key11": "3kWLyaYS62F8a2GdchVjJqyVRH3eAjcMu7utDHj1a84Ywq98uK7RnDNYTCbLJac8Hs2arhboY6ZirisM1KDwr7bk",
  "key12": "4qW5CPtECbVPSbJGzH7xbxEXTrJVRGrc8igK3xrwGQ9YJepaS4Gg2GJWhyiFW9meJzWbfTRk3bPyVrSUvdZQAuuB",
  "key13": "3q1gYszK11ZxcMvQcXy9SNXs53Cp4zfh1VbRFxnmryUXMWsHAR5FYqh4Av46pAyKZnJwAzb6mJNeLPRMjg4ssa8E",
  "key14": "5VLqZAErZu5jHg8y2EoUsDM7ZmpTh3XeRW1wkZpbkbvyZFu3XNmdzh7J2zpfmHkARWF1eU18ZXhdDzUAqGNjosSz",
  "key15": "3gyfWBJmufraq1mFKAsMr27PrNdjr1Aj7838xH2AbXvKutcgULw4ctBpAG7rEJiUJPBCoJhpFsAYUQjYnXVxhHEa",
  "key16": "2RQXbbFpXjMx58wFWYRgpV4HSddq75a63DGjr2R2WSZhC5FdN3xT4NRSRr9oPsxYTQEFxi987VDwQdG9ZuPJMMZW",
  "key17": "5ap4jY5KhUZBq3wo7238Wyi3HrdhCkCn5FDDVo4ewcv4VXtVK2wKdz6PLD2kULvY82KG8x5T6JQ7h65cEvK44m5f",
  "key18": "o7GYn94ETkHnk83jAjgeLzQGmWHEgUEup6cW8nYdC1MVSBsDUvJcHti8aiPQfmwmPiB9VEhnK2Pc1sv8bfibSZK",
  "key19": "3u8nqw4XQh1gEvgPorczd5B12YqbXPvX8pweXWVtqqxaigCbBfsTiYoYwxURWSir5w1VSi4FY8X3RKcFWtQJdBdS",
  "key20": "DUKhM6G4ifuPmNXz4A9k44KofdeohvqFTHV38TFLdSGrJNBUJvi2dJyKrdV5krqJ7zk1NELyUwL5gXGkoEfexHf",
  "key21": "4ULavMk5ZfRqTkSsi18UuSAQSvr8KgLyPHT7BiYMBCyqYh99kB7TZGY3enYFC3B9dxD9os1AwuQ2YUmLWwUyeZiQ",
  "key22": "2dpwu5WXVHQTDMhPK53UToKgNYjYDuTKVruKCxU2BE477grzUgc9C285gpvkMj49C3WtZU6b2qTqvqWrcbYaz4tX",
  "key23": "2d4rs6xmpSpvLD457sd3ggopgJ1GFWt4DNjBFDaXsHx93hzgC54LVQk8rgc93vapYrjNWqCDqRDKmpEhxz3wr5VW",
  "key24": "3jZYYcqaS5b8SC2hNzAsiTk9Gayuw6XSczpWz3TekWRfyMFp7sVHxBLkfctteGrsJHpxA1Q9x9gjtrb8iYE19YTx",
  "key25": "3GSfNtTryNMQjAmiZrKcghfz85HUYrRtByDWGvh3iCGawuYBa8ee8QRK8LLLESGAh4uU7biRNFSp6k3jBj9CS5F4",
  "key26": "5zqsJVrZLxC8VUFuJB8Zt55F6KJu5wA3Kxwn5NBCsS7FXGjyyaeajfam7nb4w7GavKvSW5tbkaKaj7oYbCxZBGTn",
  "key27": "2ohhMGpfnP1h5wuXVneUeuMVEUv7mnbZ5cJS1y7LvAVzytgSmRXVH1wd9p4DH1i8VAZW52ZQn5oo2YCMw6bVXVZV",
  "key28": "3YtUQzGzAfWRfSnkVBtp41JuwkyzD1acfzaAS51sH2ZfmVKDVNyRsrBNLYDvDVC7pZpffbSeqM9MFexXJR5YZwQ4",
  "key29": "5ya6LvhpcUArMYwmubYZtt1kgdu2tq26Dnm3sNivbmHyrRgjvq1L1eSfsNaPSrjoW3RwSdeLUmw1pC6wenM75iQH",
  "key30": "4AQU4rqmLCExuBRCa9cq7AhcSzM34c6dK9XXDM7jw3FcqQyitf8pEJ5MtXTcBDyEox47BBtfXs6c7SQ5iFoGTshp",
  "key31": "25RaeEd2xJ4fyGLX5QuCBWAPfTpEyL9Ltdfn2HWrR3UdKzrb2ZtygcM12bL2g8zq2cFLjwHMLJqz6dtrG7am5Ntg",
  "key32": "5UMGPQwHXWsyCjZvqbMbWJuuV4i9dsPKY4Cx3Mo47YxSVWaDVY8x15HmRtxPb1U6PcdWkHpQBmwGCQPcGtkYhbS",
  "key33": "2jeBF5QeDTLJPeFsSTdQwRibRxe5JdvcbPVBinHwQZKgW2mbkgTpWFN452PepH5PRt87ujfLg1uxyfXV6vBgfMZH",
  "key34": "3ZnRKP5Pcsyh1Rd8HK5RWsWFYmqpqcJhcVDXWHfjhtLQYfz1i2EkrVRBZZhngtdK37bNMyg5bbetjSWyPUU3HmAE",
  "key35": "381PfUgiT1YTQF3zEvc1cvaHwpf89Vo1NHGaeAcb8cqrsxujYYhp6t4tC1jfYAZDFbqNvXCD7Phjww4CQc5dKSnv",
  "key36": "3JxKdyxw4yeLh1VMtrviVvUATiTkKVhW66SVgoEhctsopFYB47sHRanGwy6YE4Pv5EocorjTSFCMX3CtXnV2Qc7S",
  "key37": "3X2dQD5CkxyuhvUzuXvUKr3urscpLnSXeKH6hDK4kt2FotAueE8kNR36LioTDKR1hoSAYsHZMV3QZpd983kY99uW",
  "key38": "BuwYSdGimHsHwxYfvMgoYeXR3MRQQntQcHhC9QGHpEY3KRjzBFqMvJWemWq8dWhZEiKAvrQ1vbuFDvgsLsCfoCh",
  "key39": "2J11eSZsg8m6mFjzfRZ3sKFjEyscVGK2ja3ZDdacUG2zHSMyBnyKsAcwLzoAm2gw6dfFmmdEpQbru8qENwzZd43p",
  "key40": "4tGFmVHvqsN67pauqvJPop26GcD1LqS2fcPQp4npCuEKCUGfrHhrcsaGLKb1HCK6p5W9CrBxzGScnbE5PApbNPtQ",
  "key41": "5VVhXtx1A6kmL9A7iL5AyTtK8BmT9Vx9QbdhvuYsgk7TpYzJLHfaTtr6xfC4VhTzWRPS8vtTWQtQEnvD4EdMs3Gz",
  "key42": "4cNgztEsWhjZZo7bgShPxNEEXX4grxEqBtYt6ZYa5kF8nhNSjauiehbtP7x7xtEaWDv29u5Lz9YdLt4pRkGa6fAz",
  "key43": "5acXjCqSCBYs84ZuGPZJiCBe2x7vAfaaR2nbtyeVwHxckFuSVxh816N5QmEjsCDgGtg2sXm4gCtaDGVAzHkrJcwi",
  "key44": "2d4RFB1ZvkuJPHxQSMaMhRv6jjUSP5qTaAoeicqCeXJGoQpertmsiL9dEx9rM49QiqFudZ7FkoUczoVqxnqqs1AL",
  "key45": "fXrBSm2mKk5MDK2861Y7cmH9Zv6EXYUBXWZJgLxGg4mWdVi5v4y1kLcdXJjPokWoAnR6XwHbPhj5ztzUV8J2X1G"
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
