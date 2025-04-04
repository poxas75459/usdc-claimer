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
    "AWRUMR4CPRH76Li9CN8j2GKKYvqvqCTwhuZ5QmGkC8iYigFEU4k9kR1wuzAER5cLequVbMeQ9dHCyK25vvGozxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSgqnU7My2bXENDZvJWBL1fa3ZFJUaZHSuj52JEDQnDXbCrGECPKgbKSpn6SRxhgemSZYuQvfPzP6GCm5ss9K1X",
  "key1": "2heY3er44GrxQbLjDT4Nzrqs2nJhXHEMfMPLo1kuFXLkKiwAZsnMpCYiRust4PcbVUgToNURx44r7Wsa6L2CJ7Si",
  "key2": "5a4LY2UpQpJZ6KS3AFHJHuGCWEoP8t8KAjPSxHKxnrqRPuq1Wwh2ni2dePygSV9owgYgVzxfqDSsEHfoed9QjJGw",
  "key3": "65wbpjrQeivhgNC62FXAVVPATasecD9nKjpSp7XsUy1nGu5eaymunrFojZZseZ3sVZfxM2U8QYEiDJ2sNCSLUvuK",
  "key4": "3rvyzpkX9SFpiB66kVzaSo3TSP4faENfuRetgYVpipe9rHYAsBhBVm8LHRsYJD9nxHpEQzUUXF1aJQvz4eDwpAZ4",
  "key5": "4mLDZoGdNnyneBEZH5uP1e8LyqzsLaEV5ivBi6Mr2o8uPdUCMXqqKbRSa4ry6HL1uxbjLdra15NX6g9h3dLmjcew",
  "key6": "3gviYhWJNVfp2CUhdE1rbYSr2g51ojwHzXtuyLWtDnbrQFeSE7aFB4zWm3GREBARecKnzgws1GyJouCrTQbBjSZv",
  "key7": "33CiED2QnCyZLiCezHMKr33iPGbL6Ly4AKEHgqchPD8kguU2JUn5JgnwTppCU6FHEbeaGpZDkTjCepHHGgTwXdCH",
  "key8": "32ZkiJEHZ9miiX4mLM1XjNaYkrFJ6c6CHuXS8Dny3Et1KMCoGJTBgEPDPb1r3iuymowPz9NDj2vECdkhQVPQvVw8",
  "key9": "4V5Q5kNeoPyteyVg7CfLxp3uWA3gkYFfnX3DCFarnpqMydHagt6fEEN2quSFnu5H1huCEtUKopuTWwiX1wRW92ii",
  "key10": "32SxNZqbfAAGceP3vHi8Ts8Vq6upiULwTqUbcfTyyRenXwBWrD1wQwajoZBzg6R72TxymGD8wQy4EruRpoqonQsU",
  "key11": "5tBAGwhrvbUnfeJ9mgJ6T9FArGHsbT6qTt7cLiEnqN1D64vr78DDfn141UsuD4SgM6T2PpqVyUb7koC93ajkEmxF",
  "key12": "4ko5Kc8qQn8KSPVf1xG5K1ZgZR8bL7KeKFcY4X22FCpMKygUebsTbPG2b9fauz58ei6Jv2iQJC5PuqZrhgqBUXbi",
  "key13": "2CVVS3s44La8PXaipT6rsD7TDvPDeRb9Fe83CPanEQTXnNKHhJu7vNmgmVvzEVVBXpv9Vkckn2SHt8nrJZZZJXWv",
  "key14": "4teM6bKWUdEMg6k7jPWRMogYNBHVfYnUwx2t2bHbtTh75Y3rJFSur469f1bwMof7AMhn2ZHfPSDNB6MtNKDbLH6Q",
  "key15": "548QMYXB6k4TqAyudnk4oUBHCw8H7WyCwoYTu9YeoHMFpcGMgzrWZE891EQxcDGMbqn3h6RoHg1VQ4Ws7r67GDJQ",
  "key16": "Qx8sFzQg9n9cPaDULwWm1VYvR3gDsd3BTLaH5uzBA7zjBb1dv2SFfoHuSJmx9Tx6Pvjf6WWjs1MVGoEQiLWFec1",
  "key17": "16T4uxSAheA4QxoqRRBu2toFKh4dkAiEUtfjJtNv8worNpZksAUarW1nJwbH4TFVZgEXcbd42fv1135vEqbeSfM",
  "key18": "3QCqeXFVmmtJmTN85ig1WmLKAsot6gcbY67w2YTG2Hibwx9UL8ZebCvTwn6c9KCbuCFrTgbhQbEq2TBfHcwRVSH2",
  "key19": "23z5JMm22swK6xcpWeiFn4Fm7p7ZdCudJc8GCFF19VNaaXmQqZxgDj1sGdGABD7sTuS4vN2othRcGBr5FjTEJJpu",
  "key20": "3vS4bPcMnmu6iZmzkMCKMAJJCjCVjHTwSGDC4oAyNqzyEQVQ7VrpD9wtzfrKMKedtLMdnYcyTWL9Wtvsvb125Yw3",
  "key21": "3Vp6x56KYw2Q6e3tbbjB3MQpo3R6iMPnGsTwTL5oHXL6VdTqkMf9DgCjFfLYsCUfYD4mVejFHkH6HDe5GNyGKCqo",
  "key22": "3gWhHLPhwsKbjvDnCD4VTTug73tCGUEyxiLZoJThyGwK4g9iZNq1uzJ5KHBmSzkdepfupn4voXHzx6vut1jQdENp",
  "key23": "5L3zH4RsLUbySB14VcmeYoprkvJNEjkFnifY1X5LegQ6zWw6N3KDVCyhfLTXvravbpXJEjc7dc1ExqS1Up9ct3Dd",
  "key24": "4BZpJZcAdDCsd9648nBNuwYXgjdd79AFEkGZAqeRfpGQK4QT1aXumJUffpUPBwxYn226tU6P9cDcgUoRfQKFUD4s",
  "key25": "5s7cMEtWLcLP1cPvT23deb5x9QTqAx2U94JR8xcwv6dMzccHtt8i7evdC3zNULw69dfBzyq1gH5EzX7xc2YZBiRJ",
  "key26": "3vc6r5NBcnx9VT8Ae1BbVFC6egVuynfeqq4ZtEEtkMtKXFpcMSXJqzcfhdeZokEuFfFVX4S9DZX93BDy3sihXLRy",
  "key27": "5v6kkPwyNJ65zHRhUBZZxxuPyidEewESiS2orN2SgZGx6GjZyEGbkYGPoa4LdGAzaFzLReuyvvU77yapt6NVAv63",
  "key28": "5KMso4hEq8Mq1nPyqVex6WtnjZK9rcZnRHuCJEKMxZBhJMkZZXv93A6oZaxi8cxgXrwMk5pM3xeL2DihoeaAMqPr",
  "key29": "nXBFU11gPFu23hpwANAzrfx9EHNNBLCc6YfJP9tRBZfpc1kzB2MPrbSkkfFRBjWmiyaCiqCLZV7Vs88oTp6pkcH",
  "key30": "p7UiGTdADN67vUQN5ZYTG3V812Uw59fGgL75RhFFTXtjg1RC2Sa6rVHRDygyip9oo7pAFVZ6kB8QuGHJ5r6bYBH",
  "key31": "5ayoqSKJ3LtCXm54z7WLo8vJKdbefVKms6GeznfY9EQ7FCWZgNHfGpvrdsmSqz1TQJDUFZqPtVQTZTHmdCDgyngp",
  "key32": "4NfJ6tZasF1gUbXP5d7ingdHEpQLDsN8juSgApgUeU5pYNPiixe1iVMt2cby9DXoKDM6TjiHj7FrPgALL8KqULZQ",
  "key33": "2VypF5AiJsJgAvddwwrArmpD9auq5J6AzkRxigYckZQCYELhZJvVyar4N8oTdAZEnsHedLqMroTAGaHjLLdgthLu",
  "key34": "4zSpgw6oRzLq8ng3fRkp45fn58Gc4bSpAUUid9S8BhqPygoJ5AXnhEfjp6wqbYSS9Bke5b4hcXwjJQ4pjMpB1DDn",
  "key35": "2vgmhEWzS5DSxdDATgAYaCk8uzVmDPMeMeFjGcjoHnTAGdTqPtikQNoPoURGbizCEGGLCFQSzCAB1PQmLXrtjQis",
  "key36": "2RiQQ7jtHdYcHzL5nWT89E9TkZaKB9f5UHwQypALnFtYAA4fnq5CFimNWAN9sbbtuESexcmyLcubdM6RvZi62PBa",
  "key37": "4nuPttgPtJN8k5BRYyi5QaJmPi5n2KbkfwXJdBwadgD2ACjdLHjXDVNANVLMxSrLU2UN8p7Wp6eQburcnQqF8nfn",
  "key38": "5xPSvBN9EDq4VyW1n7ky7icW4HryYykGioJnK86mM1sdf7L39S1qirTeoY3NrGichx4uVafvcktEpiffdN5Lmrob",
  "key39": "42RYUUdeaciP26RYiMwGrqdVjgdqkvm8p2KrSZ7SYu8c9jLRkmRBRP3fnuXM3MNhVcJhTbCqu2gFTUqBaFymtNnL",
  "key40": "3E3hnrrinsQvCXWVrT8y8qcKDgNNxcMkfVd8uRgaC1LmShoVqUYEHQQftsHvup9gNCRMS6jgYrdexcENVb4m1m59",
  "key41": "5Q1Hacf3vzd7Frg8yuBrzdEHUyVYb3wsR3ZVpevxMWFKJXYyirxRP7hzCk1og9ASNpWhhVisLGvk2B8bCCNNPmUP",
  "key42": "3Nsjk2DrNVYLBabPw4QrLJ67G1oTAi5QP7rJrTUVdpsquqTxqMF9j9gM6AQTb8pK2y1dCFC9ZXuBnaYtAF5ZRda9",
  "key43": "5NLgt6zCTpgENuySch3kppUSFCjUkS5gWu6af2miztzT98S3XVWtFuoWgutXhB8vcQHBxVkQ8RT9hNwazBzcJT8R",
  "key44": "5vLekQLSmpFsnfk1ukCov8ZqaGqPC5h9yU4Wtb4A5k9EbXezbK3umFF889sM5UzWMRXjyJMnKQc4mLErNMgcqTxz"
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
