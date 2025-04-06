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
    "4yWtMjcJ8AWotpGCrF9BcPJDMj1vyeB7Me9254mtYFEDFv2hzNv2S3YLv2dfj3cedUx8kxTBoYBXxYDA6C7FoGkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vH32jDxPEWuNWRi6TXeinmWFf4wZZjw3R1go2zSMCuMuL3AuNKNX4vH4ko7q4QdDbMVBJUJaSDMmjQRoauj9BM9",
  "key1": "4F8nPUq82EDwVHCds4dp3g3xjayrh3549oVfoA3DFHSoFyqQQsyNRb72FP6LhJ51ibh7HR1h3JfmHRaQS3ZXukX5",
  "key2": "APAzTkfnAXzLKaHrk5nsQS5JuiNJ4f8fCztyqmrPzZYG5cqywerWYfzwdoDEG8JCriyFN4fhMFmUHS9DrVRmdLu",
  "key3": "m6mMH8ApXH2EvwaHbt3SDSkXKAfexYiegkkEiht5bp4b2aGCWiEDk1q7141wwuuv8UvkyExgxpaQ5BurRSFw3sP",
  "key4": "2nbmsfdqAsb7Z8ujkMwFjLBnyW7wU7nEWFy4goyhe2n95Q5AaHKMkVeRYZtw9jnVitt13CQzoY2HBnqArkY3oQje",
  "key5": "3dm3aywdPBZy87YBaTnuQZUvr3sAawEB9ArCtc1B28gq5g7awDfC8U1SVrjrUfhQhXa81BVyNcSZysu5sC6rS68x",
  "key6": "ntWjV3k4uJwGkQcRqmmfAbVLeGjS3ENDjuBbXsamnt9rk54yNHMjkBASGfcZCaRNb3YeowvuQhdrL5ooSa539aR",
  "key7": "ttNi5Gydv2jWZSP72iffsdCYrvPkta7ZteNcRjEA7zoUzADcUYGF3QSm7kzxzRkTvRFeMcMca45EwbXkxDhefRA",
  "key8": "4N2AjG1vygiSEsQ7Dht4N8Jci555PXWVyNUvz2XtF7gNLKmARTvkYfPqx26zqDVpyBGK2ZUJVRmW4SKKk4ULpkMx",
  "key9": "4fnoWjmSFjiL7FjsFNJntcXRPsXLKuTxy2QF1aSRj125ATVDwfikJMiGj3AAci4YkykPQb3VLMsbEgr7gckn2Vb6",
  "key10": "5ptARwar5jP26JHCDCznjnzusJz1KxSeWucakXofce3wHn3gPnSf1Mo8j9J1tVnnahjtNbbBQvS5unSmksK35xSk",
  "key11": "568pydFQau1LvwDN9hk8xErnv3g1sYke81M4mUbJTSEbXhnvxRwZWGU7nk5uXBzq7tZHExj9p6vq6Q3VBF9ofvLg",
  "key12": "33QJMdBxFBCAhyRv5VSGSn9FbV5qyZtyBn5zseKFvfNsV9SjrMZSBcFmycqgUwsJEtxAe2TaCcaUg7maxv7dfWKP",
  "key13": "4YrBvrg68SSD8zBA6P7mwZ2mxQmFNaBmtMCuLrYUUHVoHR9nCMPpNKn7dUha9jT4nqtsNvYvoYszszyTDiBPYVGr",
  "key14": "2NgQvWv3zYuA132BRTw9uygThUofhRAsDAvf2z6vYc9gfM71L8x7UYvXQXKayGDMvoBiNriTjwESUVMhbgK3Hcnp",
  "key15": "268PYLidcJ7kbests9muWP12iuv9ji55ZPxWJ57FxMe2FRu4MKs1YX6tRLJRWWFSbJu8mxu3fV4NJrba8i3RDbeK",
  "key16": "3DL8dfzkMmr8wFCJeq9Pnwaexv923Fm7NXA5Km3aResTeXtZtTx2VUVzrX9zKfUEw6hgPYffoMJE6A6r5LdYQQJx",
  "key17": "25Ws8XXF8MkvCgi3bnzETGMSKjH5WBE6heoG5eQoQCW1T62evCqSyGH3G7C79qtsTAUCBKNkLrLQBEg1LTyyVryE",
  "key18": "wnECvaoYHaA4sYmuAsiJtfAE3cFrHFy1pPTxceBxqgysas3XzEcL5nF5SeB2dDEaW6ZGDLUPLouoL1YxvMMb5N1",
  "key19": "2eR3W53vjQjR7ARvYztUfv9CwdJ5zXk6rsMQH3pBVnSVkrN9ob46g8UPuLLGbFhYNxnEkbUqPCee69L7y64eFwGe",
  "key20": "mHosCFf5MFLaPioqJa1nzhy2RGxqnDrR8AcQ6zc1o6ozqn8fnh6h6eiNseFtAUnme8PA45McH1P51NQ2qsNqmz2",
  "key21": "3KcMbzXoygmvc5U9TRtAAjGckYpHJtRuZTY2VxUwTytS2ZF3ThjByvQ9NrmPXHw18EAVMEDgd9aaGEyG7P7vhirD",
  "key22": "bDiawKnTQrWdjSZ6LAYFLQbcdbZsaryXHDm9cG2f7Z1cGPZ7A7pq4WLYRtpMKWMBFesdfrDqzkvVCxpkVBQRftv",
  "key23": "PXjf3Eeqgm1C4kJ1YCJvw3ERt9KfT6h5EeF1qs9TbYMACWJuDPmCQus5EXab7PAEyM7weHWyShCnCNV1vYNmZ1u",
  "key24": "3Q7sR9E4CvQppTNy4XrxMMEtssXK5T1Gkfj8wfoHhtb9ZvkDBEep6G1brp1Qohr3cVcxhL4MrGnN9KrJMwcdP443",
  "key25": "uGVHtYNDE9E3AUTMkqJhupHihy5M5kF52RRk9vWj2jDoXGXdKnHxRRfekJiEssDhjZAo4C4GKcbuH6U2nPqmFik",
  "key26": "2fDdTH5pojjfBydMvNbphcaAWFhdS83QVctaDy8AqxB4mSadf6VMEfp8osgLtraNCMvhsnmt2XRt6cvvVNpqR5vT",
  "key27": "zGHRjscLozC9zAF6cceeRTrxSb3WaYfv4qS3mVgQY6FRJub3TYZzu3d9CY55cEdzaNYhHtSrkuogk8KpmpmAER2",
  "key28": "3R9ckYYjJuJHjcmSPverGmpgANdYgJ8cQFGbX7uZ4s5rJ7mPGZjdveczDNCamFwiz6ZpGs2d8Wk55gR1fj4zPL6K",
  "key29": "2VmVwXpUBbUBD7KuPTNe1Y8moAkcwf5gknzs6p1yzE6dTsfYQkLsrsQJVAofptzsQoVxgbkD2mLZ5CrTSrzietPY",
  "key30": "447DuGpPfosMRXwRTfDpCCdE8kS3BqjKmNm7sBBAJ966Fwxh14vocxQBa3YWhNgaMyey5MbmF4AeG1mYo9MesVrD",
  "key31": "5q3t8QpDrd4Jfj9spMwPgz7vpVScJEHeudxDp5nqQWUYTBb72RuTN37F8JszniBkaMh3w26RfAQV29sG3DhtDSMB",
  "key32": "2B7wtJZRyesoZBrR95Dg6Af5bkHU8hrAhHksYKL6BXuGHcC6Uv3YPzAxMmBH69kMXRhf9jDDwuAfMsAgtKWemxm6",
  "key33": "5dfUJYTTSs62a4aGFZzyZMjernUgVDi5c6Q3ywLFRGiURbAWJdSqRQivnZQf1wWbNMUxweWb24pPwdfagX8JJJMX",
  "key34": "64zAFRkPXR2fmYGH4mpmEjRkGAbiULPXS7qkWi3jFrssaeLU7EfCDNVBUNG9B622GSKPyPvC5sHCGjPrA82iTCwQ"
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
