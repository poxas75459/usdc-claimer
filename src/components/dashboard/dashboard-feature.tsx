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
    "2FkkGgHjQM3HzavSVLJbHnjgndLg8yoAQVED7RJP6Jj84dQpD21hT8L7uERxM7dxGt5BosBwQDrUYkvr6kMu2ebS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHtMjzZFDpGCVUp61xE9th2SaT1LHcCBTYaSjQyEUuo6h7ArLJTmLSULPkuv8J81o2GfuvK4mrUHFSAWefg2na5",
  "key1": "2ptPKuiCmdNnTDVpmh4mnxYHY9vAa1vM3WCq6mtdj7JgqHN76PKuDCyL9cWj3wdCnyu9iruUJPMWRyfcLmnoywBv",
  "key2": "3WZiigTB7jhcfLUhnytYQqdNVxsmFEcdbNVPVjveHK4TgkUharhFvyq4x4XVa6xEeCbc374XSgR2qvzWqQAmvTJJ",
  "key3": "249y9wh2Aee77WMgGYQwBBhuJccpvoDeKSA8rMSjUkF2u6EnLTuYQrPRaQLADhDb1xB4sqJEe17VzDWC9zFNwgSm",
  "key4": "jXTE7aEfdCVzr69mcWLjPjaMVCjNyvS5pAskdtLVDLbhczixo5xatNZaZenWWtHH6uKQ1TdTtAbBmYi6fwcGJQE",
  "key5": "5TffVJV15QVZirYxhhyEvikVuboUXUUinVooynw7Th7wwK1MQhDtVu9ogcUmGQmnNcGwSDmbDUBS6Rz6Rcnauh4b",
  "key6": "4fZe5WFuBjaoy3ZT6kA6m1MFKmPR7rVUb8Mj9WkdPuuH2EdgiW7a6QKdvEwEbmqFp443GyDmyxDy1s5zbFWKWL4u",
  "key7": "5zqTdawRD86WbCtSwbx7eyH6QRrdy3WESfFLhJUZ9fdxx46rvonn5hfSoBx5R5NEPLgGfuAHxNyuDUwGWJigURaW",
  "key8": "3jL3amj3RRA9hvPWtngci4HykN475KDBTq1b6kLcUjtPPHZ3UjPqjaMxpNjWhXgfj9Br212kKgr8Tgixd2j1GpEV",
  "key9": "3GqhPQwbzXpQAXAzGp64y2Xx15eESpAsuB9VHqn74bvHdgF8yqL8CvzBJ3BG193T4f3EcXyUQihajKKVF5vcqFC7",
  "key10": "5fiYuA1dmJ3MAoGpmeCeP3GLxMbGJTW3RLTsRcfCH6HzMyigGi2cWw5ZsjMQgdd1eTFmjKFEM8MW9NV19HrmBjfn",
  "key11": "356sQVgPqspD3AHYdm6c3AGPGaawVpYfL6mDsXF4B6HdkPFUPkWK1cYAe7Knmn6Td4Lk8VWmfZrhmf12P1koWveG",
  "key12": "RaRGpv3EfpDDJHh4sE1fjGWf7L8VRb3P6DAThwhhzT6xtWb5ifQQ6SdePay1cwyiZAB8CjD8hRqGAKW2RXYw1rB",
  "key13": "4nfa7asBDMNmnCgmDMQdYF1B7eWEtrZaBDu9V2KBUFRi8nY2mcEERDtYLUo2oi9uUKhYxUXtXLtzKqsWaVcRadgs",
  "key14": "5ZgqnTC8WzfaWXLEsRfNwGfz11D7bhPpGKuzsLLhDgMTLbW9ssMahMRBCMmWJJ3TCfkDBNq3i8h25ekPwMHzAzKh",
  "key15": "2Ku7aihCa1mGNnqDcz3cKKH4f5d7MrkAU6QNStESijAnn5bYEeh4Qe3aeejnQuxnUJDvAgkUQPRE34afboX8ys5w",
  "key16": "5Gqczp43D7FuK3ooE1AawN6KbTFLm3t82kV8ZXj7CETcHCLGUesfA4r1Vx47z7RmmxSMPUMiuaCRhQeYBuNaJ5m",
  "key17": "3swZsHUwpW5QA9aS6omjCVfFrupA4z9GFand8CLuFrSAGoPbEeFqw8b278VxFkv95rwYNNDytNPPYVBqwUC8genC",
  "key18": "61Xx57z3hi4YWtXMj9kTupzgv4RzD95ZFMYU2476SXiCYPzDrPhX7TKEgfBKyHmG3R6639dSSEVcYGQjG8N1tdCC",
  "key19": "sien4HhqR9hHUVubFuhdb1N5boqWpTtfcMC3bruYbSjkXMx6TabJ1PBTGVBGyQNZHXZ7zCQ96cKCz1a2QKrEWvC",
  "key20": "6745NseF34LxXbAsQ1ej4HjGgW9WFiU6iFKxbSdTM99fXnU8rg4GsmbJPdZDZSK91mnx8hHq3F9FDCjwBUzqJBQv",
  "key21": "2LQ9ErBuEyb1oKEs1syV2wRExTGpEpmH59tj9eygSeQxNiTzzG5emsXkqFWpd183eTzNoH1TGW2ZkQDeNtks9SSo",
  "key22": "64xq3VPhDB5EE19kx7WVuRpLhaxHze3Y8zY4tsrgpFVEcZuLpkxTT2h3Vn1oBT11qTs1zpFwimwfVxteQzrL2TfT",
  "key23": "8A8DuxPm7kwvN71JS6UrF1ZKz6pUu5KnSJwsMYAXHuqbJbGJjEcfxYaehkUDNUCuXiRHDmR3rHuVt69BnjF1EXk",
  "key24": "5uswUPGdwhXADzsBNN6SLY5NYrQuPuEWf5XmPWwcJoPfgNsea8ExaPmjrfhvzt6HpjdDcm2ZAgZVC2XS16oLDnLc",
  "key25": "3wXTEGcqeihD1LtcaWZDLXu5s8vD4uagDiyKnGD36cAwkayJbFB8DVpvdGETwSdAHe2Vig8XZ96Q2Pe1Kw7y3VWG",
  "key26": "59iExQFKKuN1CYVVW1b89MhvkJeLYguSAeDxzaJMktCEoq2hWc1RVjJwPUuM7pJPnqLN5m8j8Qn91neFj5NT4MKW",
  "key27": "2xgYtYRPUsRNHYvgnkxbWt3XscjTq7G2YmxytQCBYEzAnkr8RBdZkXYzrAUCg4SfNPcTnbDaT9ptTPjfAXQWmVKG",
  "key28": "5qrWDDEFgTzQ7R82AQix8F6oCSd4hcWcWiB3WXTrYxpz5whEFA8zsPck3neHWGiZnKQfgbDXA5EkR91hhYpvbsJt",
  "key29": "3cQr7yvYSiNkpHUugtHV7CSc8TcKdJjpueMf77sRXo6h8dTe8c1pw3EyRJNVdRsWpomAvGLMLcB49hd9mBDrH8GE",
  "key30": "23fp6S9deRhbTmhBQJ3NnpqpdmpQ6MZ9g4MwcZ4HyCMsbhytt7T3vB6Ke6kicvQeWtA59xubkpLdpQ4Q6zL6uvBy",
  "key31": "5f1CUqwY8mZVb6KunMf6bTEns6Caz9TdeG5XKEBMZWUVCpsZhiopYavkfQPCXah26SCdpkDZnwAH6DzVW8o7FvPa",
  "key32": "5tb6AfLPANDGPLasiLPqogrfMdJRnEqMx46cz3qs2rceWh3ptKeZpDKHKjUcu3YL24Qyj6GQdTHZBfYorwGM6hdb",
  "key33": "2Y1MTUHsHjqZD521PyBzCDBqxpMGzUNC61HpL98srWAxfDzN8CvVmnJjVyioGfJmfmx78x8yz3v4giYZvB2sysWb",
  "key34": "4roxHcQ8LXSt9n6NnKU4mV19a8bLFaJ2RDihMJRiF3QW7nE1LXtG161YhP2WUtzMocKSZpRjEY771LY6EqMg11pk",
  "key35": "5dAq6XBjzioKPLHP864FKgRZkvbiDKBYkZnmxffwx7D1L2RR5jjMFQUQe2EJ641fQWHisvb2y8vyJL9iWdJoWvDB",
  "key36": "4sCdtC6MQjCqwoJrDKvxZ6CnuWh8QTzmPk1CmHRoGciUxCdBtPAdv9iie95KnE5mAeSxNe1dCtX54BRhFPjTFek5",
  "key37": "4fowmkURwqEvVPNt1XwtfeTyxDZnDN8Fnz9Ng2QB3WziBvUwgco923yEvbKRKszBezB8Mrp8uM6HtHg5o4s5MDrx",
  "key38": "3ALzW1fiexVvuVqNetjkVSRqU9NbBMTzqcDdjUb5QHzbGFZ1yAkxXvUjoERS8pkQM7Af3yEA3P6avmriGT5rXPft",
  "key39": "n8jjkAq8SVQinFDvgJQT6tPsYjDxYk4GpuvAx82tsNzvVtgicrQ67EumX3P8A7pgoFyUEZkypxZ8CPNdhwcwh5h",
  "key40": "4kLDNNiA3h6K6ERn6YLBCsuVKB3Q4jXevS6vH52L1yMEiwciaWhAKHptwmdMJj8Hm8NAFrN4VTR1N5mQUZKCH4Mn",
  "key41": "5f4BywsGJ9fuck7jqGEwD3DYZ8NmDC97a6FskoAmawr8wsjd64BbSCvcrHYZuhMqgfYqCrge4Z8xwJFUhdDoLaS6",
  "key42": "618H3fzMHuZFqdwyELubFqQwqCwS9WmmDxUyedeEKAFVegUDETYDdbAME2pfe5xWfH7FeqNxLmbU3nLgjRZQ8i9i",
  "key43": "ofPnXGTot7WFF7hq1NhV3T3TphXADVt4i5oCaQojq9MyRWt6h52Pet2xAE5G3qKbGt33RZjM9wJkqzwBQJbwuAw",
  "key44": "64faaepadHWVuCQ8svqXS88w7LDPgYGC8hbwqh3JNELHbA1rEk1qZSvvFCTs8p4hGYNnekESEEKdKuekaBqny43j"
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
