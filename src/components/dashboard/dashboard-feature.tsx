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
    "4V844jcd5oYUvyb8nzKYUL996PNYNPZjd2WRLn9G5Vozq4AeSSj2MM3NtD7k6zd2VZvF9LDxtHZ4oQsPQC1uyZKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYuH89US5gZMQjm5GgknA59FgAnqxDCC4x6zLvBWsGUywNbERYCThD1QV8K2tWbr34oYJ3CV4PbFto8ePYkdQr8",
  "key1": "2oUDvfL8aSDt5pCnfeWngUEBoS2Mmo2JzYz6y2WgWxU4MJBNTKg8RwQSvitDbGuh2NbYraP3jCcxUedTMoZGxDUr",
  "key2": "2r8VJa76NhediuQjQLHhxXsQEUMWuPruPzAfm6nhDtAKKZDrUNmbPUHErfL3niiGThVinGignH4HtdzqPWhmRiZ6",
  "key3": "5gppkXBuDqA1tzvudsMFgM9k6cEz4PJ4hH4icwQxhDKajVNHZW5PaVFRARBXAmjuLxU5SSqfFzGz9A8nT9ocEnC1",
  "key4": "2DUBRYEMKdC2wCkpEoBWMbGGkGuZ4uw7mjkgvQaaXTgYtvU1yrsb7Eto3jX7fRphY6RMQRYeTjjMqVoCo8sAZRmJ",
  "key5": "5xj94wHZQ9MkRDuLR2oDDSRqE8oNT8Kex3xEiwTLkLETgtND95pEFPju1EVsxs34Ph7PZcRvVfQ1zqQTYFXgU2na",
  "key6": "58JLyMf9vYiiYvDqdgYD3gCVCryrmkuq9jd3yddTTZ27nKJVTFxcFLfhTTfwBNMQWxBhWKjPjZaVxAThg6MxgwfF",
  "key7": "21CeHY7xUJAqk6TPAsUNHuo88ShZ85FUeFaoaWCKVYCYLLHub1vo61MGypyrMXtmuwWq4nnss4FPcXjCxwYTdbrq",
  "key8": "hXeASGXb9K8ZoTjYG8zTm29FP5wyhAaH8t655FWBwXkbkvDm9jwS8yUeT95scWudR6Q7k2rSXhDC1aSx2MrCCK9",
  "key9": "4JEvcybGQYEWvo3GYSrFvBniAqwmAgHP2bnHfoyjC24r6HNRuLitB8UfUoSr39AMcn2esFYGnUu3DSET4xo9LjQH",
  "key10": "3gFHsKECWS78yGaxZaDiUJALXsNKdUyNfUbzaWu2RxhpTbAKDU92fMQn6qfZGW8JnYoWhkZYorpamhQhiyxmciuW",
  "key11": "4c7ixbEheEuu4dutvgsyWw3BpkC1wkduNWc9T8XsNcKPSPEuAW8sbjTEkdvurm7ev1iqnKFBK5VfEaCs2c6jp2hk",
  "key12": "2Mxs78YrGSQtq7FUbNjsqe4RE2i4jwiCcjXZ6Gt9teUj8pkVCqwtXyn5Pf4YBskJCVLTM2Ekmf7G383YgpzMcVQD",
  "key13": "3bSfwGzoUvAJDdqpaYSbdMpyZBq7MJMyhoKtzzHSBoRiytzckWYcHGZ8LdYHnSxaaGYcqpAh9caip52DMurTseka",
  "key14": "5NnNrbb6iZK14eVSDkg24Gp4QU4aQdcxMxdSBLQci4A3a1rSd8wdmFBj8jXtCQDb9BgEjN1iHCLtL4yB1Kiw1512",
  "key15": "gWcU1ErkAjiUTFzWE3Dsk74Kxa5Skxf5hySsZoMGU8CgR6cQVEuRiqwxfzke7x5B1m6gFaPphrCqTds5nsNMKX8",
  "key16": "KT7cvRd5tkhQckFjXKYwfATUzqLhbV4ns9EQfQPm58JvFyAj1E8USP7umx3Yuvytbpqo2z6HSGdvrLhAz6rfJsT",
  "key17": "25GZnrA2D5iZw2ZjtJo7pbALbCrJXsGc7F3hTrudCBdpVaMCCdCMyCz6WHFUSKNexYAmMxLQtS7r52nbWEDzMmhk",
  "key18": "5qwD4DzzNEG5gXj612GCfhTssiLkTgxeqfWk2NEsuEi1tVHvdCfgEmUMJcCHj2GREUj3fDxnKNy33zbZ8RYhsQXv",
  "key19": "P64o92szn43rw44MfTf1kXkcaesVDQeK393vBCVv1ivYVsyhzYEBVvdG3Ye3Enten9pxvJt5wpnmHAiK677wX9k",
  "key20": "4qdHiPqzCQYntUpk58WyKfLouBnPMYBXXHgbhat44Qo2uYZSNTnCHhowhWeB2M59tZfk1uA5E667RJmrhGRiPsg1",
  "key21": "4jg3s4D6ZUMRcCXo6fBcRNgYchpkWsWhbuhXkxM9bg4ZdQF4YUCtSQ2c6LimZVpvcwMudFuWikT27GcWhsduqU1n",
  "key22": "5b7CK5j4TEyog4GMp2179XZ591eK4oR6z6iePxWCUjqMsYZjk3fCQ5gPYrjdutRHyfHwgKT3rWFYgBRgtVkx6qR6",
  "key23": "5UMZCLtV9s3Y2GcBeBt4NvNMA6mCJYZFGZR2CnRSMA9rLRUBAfG3QApn2LjnBneTzd9NtMoQgjBVVM9tDKhRXgF1",
  "key24": "2tpWbJsanmKHwKQaiAJYV4JEX7ovZ8d6T1VEbLFvKboCHPi58KvQohAT4LZKWvzFE2VcU6bE1zEGeoqDoiTuAi9K",
  "key25": "YJdCnK6ZdgwHh8q1C3aNvcTEdZdNdQ392FZmzrvKmxuJ2MmxD2Dxj5tHmbeGj4phzEUHiTLAesGWHzfkP9Rh2eY",
  "key26": "4MBUb8uhx5nfHRFBNgvzLHnMBLwbtqrEmJVFBsbJjvVeVCCY9WxBhTNcaYueEPBfBDvVsGsYuLfnynpsMxmAbPG6",
  "key27": "2vZQAxLPGvwdyMuoQMHzRnkGtQryfsoCvXCcYGJUqFivYccFp6WNUjhVTXhfvfy9Pp5fKAXYLTi4GVGMe13QeEFS",
  "key28": "51mVPPvF7kdduFNJXiX9Z4TdFgw2VBi4piqnzyxWfJL2bWgkVurYUwrZZJ6p4mDfDpo1WUNwRRgFeiT5X3sPRxd",
  "key29": "4tESWCfutQCGWivSRF4C2QjsmneW4seQWrThsnCPkoDnhtFLhBE8UUqEpgpB7983AGyQDn3E8VCMTaDzHseBpDEY",
  "key30": "317SxbU1rVUGsKcgqWLKZTsVvWMaKfPfBvjQACC1EaRx43CKybpSKKfY3LKKDqPKFmRhUBnRjUvzW6QHJgG6frah",
  "key31": "4GbDwdvVc1ZC8rKWFqBkY1AvNeJaBLbaqdLZ5nndcjVX2rVRPRnTQbPmdX5SuTL5c39xyjhiHergJnL52FFh3LH4",
  "key32": "5SgBtD5QDggJ7CP3bDrRMZCZSp54Lvj5ftUi2WGwUkLXFPM3Tp3bCFdb8fSXbE79KuTDLmBuwSUuWE9CuyoaJXGB",
  "key33": "dV7qA9SsAWSVjySYhP7xx3SLUUGpsoHxbSkShNuHuQyo9H1Fb69L91DWon2xRM1KiVWupZnFh2JUQH3oKjXrGPQ",
  "key34": "2NjJw2MsL5hhYBFevTJhRgnEjmUTND9sXyqopCsFFJxYiK8ohejAaenPGaoTfo6aT1nyo4iVzjWKUfvNrjXBDcF5",
  "key35": "2eXiaYuivPQXsJ5dCHPysKyZxw7Jqe5oHwTV2KCrYF5ukFUFnaKQwPoCaeKefX6WJzeLqcQXTjU9fxuHFBv5L5ke",
  "key36": "42dwGbRcG6ATKxLN3PBzaBcEZVLUNsKv6tMNXzJ9FJkgtB8eMZraQXhLoeZbYZGXng5SjX82VgsQKxY64E9sCYmG",
  "key37": "2BHz5WeQzy8DnuxXPeXEREBgedgmtR9D5in97FGkA2nEBiUyCVsG8jq1ZAcNDzwnHGWreCKwzgbqoG1dnqBkN1Qj",
  "key38": "5iNMP2HYLTe8k9XvsT4DuhS2gvSaE9UxBU3dLebkebeF1vi6sQY3oG8H8tnFqvvgDqwguxp4fbdQJwrBQyBHVZ9b",
  "key39": "Hof3bE6oujMek6Ej4uHFYfEfHDtriqCD7sHbw8XLFZxHajrYiYnuy86NUK2q55VP5J4a14Q2zps1ZTjNZeoZuyk",
  "key40": "33u9Bf6SvykHawLiZeAgifL4QJaKoVKTJT5KS7puhe8ba39hV1QfPCLb5G3zVSNF4NbUXJP8cgiLxSfHiHvoAnE4",
  "key41": "58yNvjGrrgMjQyoNy2tXwjMjXcerM399ogqQsLWSrPYGCGwxrYHEYA1zXqrQRSvof9gb8mpMiKLxM9DbNUF3DBHc",
  "key42": "3xmaHUF29zf69DithsemmzkLFGGgj7oTLeKxCUMMN5dg9NGJ4CF3tWHy4cvnGSMmLnEXWygg6KGZVWxAmVJHeGtZ",
  "key43": "scAb3K6WzSnCffx3VLSPMNiiuvbNGK9Ex3mPhpWMU8oBaCVqEZcGQhY68UjNrWehp7AoPqQmJqM89HNGVE2kkRu",
  "key44": "3oC7yDbrBF2G9q2Cn9Cm8nA3wUGMGexeWrvchVdxh4Vbp11bdvkFeoSUhu5TgrLVZKZkj3149aPrSWFeSjRUy8hx",
  "key45": "56SnHcWUgAfaKwqXNsCVqx4xEjREjwxN87LJcjrJnBYX6sfjr2rLDqexV4HMw6o8Vx9ExbNmf4cZVGmsFdc5bY1i",
  "key46": "sYVnNAXwPp4ccXHcCdZvuQLknPCW9xKuzXv9XDQGDNyaLfTPXVLYRVmWpcNfNpEarqbx3jcuFKqyttANcNX6SqU"
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
