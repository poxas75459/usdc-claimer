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
    "4mPQp5yoAURrSZqDqXKUZuedgeN8G2gRMC9ASc9xTznMUo3VPerkkN7FAKGiKfaBLDwfQZab6X7D89kiEBhi3Ndx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FcwJncpLHY5x47XafBTzZDwyyyZYgUFTiZP2Gae3F82XQdjVtKe23Ar8XYrxD33AxTLAUpccRzWqpFM6ebdhh6j",
  "key1": "4ibGmY1JxskXcuXr1e4q2mC1NbkXTkg8Wpnj7BzDGXojeHsXNVanMjR6Jp24kQD6V6XkazSW1EHLRKpaTqds1LWt",
  "key2": "45NSSgYPDfzenctEDfByQd8pREdcTMBDm56RvLCEJSYmcwVa8E9jkd5X8FTjDw4X8LuZSNDMrDJwvJVxCkBE4uaN",
  "key3": "2FBL7cvYfcXajdsY3FiqWd4eKFvhC1oRGZN6mwmkYP9gYcgzyx3NHd2RcW2QvKTHBknd8i889JA2Xx3FFofhuNHv",
  "key4": "5eiqc2AMGfXJwSLAJSyGuUMFuQBXtAq3ikTPnjvAoGsK62rDxY1r7V6e1QSXbexBPgkQ3D54j6bUWUYcFL9ec1C7",
  "key5": "4avthtGMYfQYkq9XShoKyKXBdqAUkREfodm9wCWHfCH8XpxVR7bDSrGuysozFJ28WTaz2QmWv6k2wUjFAR5Xcane",
  "key6": "3GHKiEQZna2nRu2SXuYk3Ps51orfuFKbB42ApiYn5tVipECJBZqdsrgkssBhaARLmri4Ceajz2CokF8YpYmdewfL",
  "key7": "nrkDtYjwWHq6XanqRWfrwkGzH8vGkgtbnCc2Az57PKix1SXRUjVwTqf3Zq8mhQetGqy5HrqteRZJwQxHgJr9P5h",
  "key8": "4ZtLn2iQRjdHkSC56tjt3pPLUL9sxCyedQVEWKWrQYUqen3qUJ8r6soPJQKpgtGfhLRV56U4LrZj3fAzR4ryKGv3",
  "key9": "9pvU1Kj99R42nZo9cmbmxSV3rWj5EYZ2FrjWm6mkwadXkvvisPW3BmorszybgXCcZ5Kk5sMv4iBjDjy4fsVFVjP",
  "key10": "59RLq3J8qEsdRYm67wTME3CVD2mroUKuYDYTtqf9JrP6v8a1uJJS2sqT9mbb1QTDKiE3qJ6FJLxNowSr3q7gxr33",
  "key11": "57c9NVWbQqwNE6nMz7ejV8pLyDm9cWdZqREEFJF8HSMcRDZze7De1ajKprp4ybAE4WTjptxCsBrsjFno1C5XdMg5",
  "key12": "3J6AJmvvHjaMUYDLd3PS5P3XMS65F1qXaGBJ48HrqTFCWikXqYpuKYNdLuaLaVB7rZ4eCRtckPbYEqkR6VxVPMmo",
  "key13": "n1s6P9KNcMoQ3q2N2jHVNnsgNc4K5ESEn3HDA9j1SNk9QPUnQkzGTHNLxz1Mcj8zzb5QfifcpuSVqBYX333Fqii",
  "key14": "3AQaSRJacxEQYDAx7a33rg2YLBrbdox2ynpPFSNGCUZgVYCkYjFF1BwxRnLWGYZKXLs6rhyg1VyZJboDTeUEMr5s",
  "key15": "5WV6711h1pteHkQgrUUWUFhCsZ6ocwUYpd5en41kBKaswCsZgjh1uaEWKGtHh4yixtxhVK1Lyq7GTV1Gh4ES7eQo",
  "key16": "545HrJVcvzGs96VA4kbzBhDNA6AJtHcL6VH2bz6BnSC1DhYf3RaPZZjgGkZc2uyhT7NHU8H4Yj49UkEqsMVSfERa",
  "key17": "TPJ2yFARfBsNUGXGiD6EWa3iabEeM4MdvmSsortdLUNNKTFKRWT18ksAUR1cumiBhPrsy7DzR1GYF1SWPivzrZt",
  "key18": "3jC2XUCEtjFV7tgg5tNVFtG2M8cL25VsBVEc7aipAPcL26aNLGoaHp4UvS5ENdsUtGZC49omsrY7Eyw1j2Mi6TWr",
  "key19": "4xAyhrSXje4inh4gAoSkutZ7R6JWo1D54UYshR4tFYYgQp7KvqUoDYzHmXCHadfHr9brpwQSTvetXndfrVWjdjTB",
  "key20": "2duNCs3QFqDeevT2fBiyN5by45RHdex92zCEv63fXFdNwifPpEdUvjn8X9d6MJCUY3u6agov3Fj5xyCdouVPfJDc",
  "key21": "3KxuzTZnz3GabktRxfPsUU9qKVyBRt5V41RevpfiqiyhomWRwdGtvUEXR6NBwk5zVg5HGDmLpq4jjR9BmXDGh8C1",
  "key22": "Mntr65LD6Z6gbWrucUBHRoFiBccqjBpeMYkBj1LutEGKxwWFMRu3stUPaF5LeKjpLBYdQnRLYSZkiLZ8Xthz7Cc",
  "key23": "3AhbF6iqzp91ajXPLuxja1BrnVZomJ6fRHRzGT4yJFwN7va1HrCgLQCAauEtdFohpWRwYUVCHr7R7c4z2wPTzMYG",
  "key24": "4vY6ViaGim58e8dPVCuMhKQEjY8nduAGCjMMSK4NqZ1LUopCiT47StDMFz3okttzkwpZy1nFFE5tgNHkNDeFk9cq",
  "key25": "4Ldx1SatDWqZ4TSabPbBryE5sVRQRXkCfvKW9bLZ5KW9djMUu99BkQ3kDXxPdMxGAJxq969rAQHgfiVmVeUqLVrE",
  "key26": "4nkW3gCG3P7LEw1uzJ6MBzKup5icUE8NoGBTdJZZ7t85ARAtaMuv6FKFvopLq9bB2UWRkBfp73nfzQRYYdMshDxQ",
  "key27": "9WeB6nFxN9VR3ztHbMRqu8MmcaxuyHoNKifBFndXbMMryBADtpnZrbZjKcVtRq1MMXvS2zFNMzyhfFyaJRotYqo",
  "key28": "3jgWajWBGhDTnA2fX8FE4PQpFJP8sRFEvqZQ7wBN6gpxQCSSpuFusJ7j5uu5p9cvuujZeZuHZgV8rraEaZvTSSKy",
  "key29": "YueLfjTv6DdJkxuiHBsbFcqyc9ytCJaW27193JSRyUgtiDKxMR9groyPB4wHt8AeWRquKR5pJMu2bgP5vceQ34v",
  "key30": "5GUXjC2xppd3v9Ni4mZQzffRPeg7saRcoUfgz3eC5zAqbBYaxLpHM8FftEKv1y4tQytnWQWMvPrrccF2gpEA1UaU",
  "key31": "2yQBPVCXuRF5UstGpMuw24PP8Vxwy1Rw3y8wL5uu7crBpJ4p1naKzt5W8eJGU1XFKMZ1gy9gHqo9FK5nZrMfxzt6",
  "key32": "3SeWrK7GmVpFWwD8NB8R5woDCH81dt2B4BbBAY25sK5pdJhPDS7RGcCPfXrbTmFadcX6Z2Dg1TeNzqWn9X6W9mmS",
  "key33": "cVpYNJVTtU5HuZNqoocjMgdkqrzZ9HKcdQEcWR77JJtucRbR8N4eE5rbMkdLi3FVCijTp51ZAM8xbxB83EWrX64",
  "key34": "5qoTfqAzSqbJ2yMd3Q5z3eXQaFGA7uFDkYLLxaynHJi7xB9kkFsRLmFfHtRewbAhav6Xdk8YkkDiBu2PTPY9Uxf",
  "key35": "3EcmGyJirPTfWrMb8q4h6W1h7d4ZswepFEctjorAdqU9qq73Y2sRMDnaZfu35ECDJfbDdmPBF2xdNYs9fCwboqif",
  "key36": "2pD33dEWA2bpEuKkw6EvgyjLqz1hCPUxESktAtmLuNSuyhzoB6go8f8TYFMETgQmqrnD18thBcZop2asPEmSaXmg",
  "key37": "5aGB7dPbHfiyCVuVUNarBkKrVL4eCyewhjCUg6H1GohLRyz83zURxp34ss9DJHhWZbDosnkUGcP6TDE7MVPYTnYv"
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
