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
    "5EbvP3Sbm2XRcaLkxWgN1x2SQYeBQvBVCY1bicr29aqbrdH9GRmAoiAXuZ7mNNTb5zjQ5gAf6xVDXhSMf497XD1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzMy2gK3p9jVVviv3A5GtDpdqhjuPZWUAPvFgU9nWBX9meiAGUCHzs5z6KtXWSDT4rzPND2kKWBUCPSiJYQA6i6",
  "key1": "3BtxYH113YK3FNt3H71wk3YWLcL48Sj8LcKV3Ede9rq2zVrTJHYCZsGQPq5m4Nu4ppfaRRBMobx8oThzMvc22N6A",
  "key2": "da6RftjRdd7pxvDh8zcsJBbgTpnrzmEZohwjYHLtNsZpXCHbYVHuJRTNw7G6XBQ5qEdMCx2kW1nHV35atCmy764",
  "key3": "5SqLqDKBTHwjiVprhqVQ4kvnBHX4T8NWXU2WMvahc9r8q1KWWJCA4Vioip8DcffYpmm3MMqcmtPpEA3si5Fbi8kV",
  "key4": "2X76HT3uuoWrYj9imJ5i7F2zCJwuCTGoaus9UXQdyvYAvFRH9fAFqhuXftYnqZ8hC1wrfTC7pgQZz28Rk6HzHafQ",
  "key5": "5cWsnSQFCY56k63bBdfp3NuKAHdEVfqpKVhFkCa3iLMeW7tBVGMiWT8DpGrZcyJ6K7L2HXYkmvo63UsTAnTg57M7",
  "key6": "vY64FMUCGeFQ3z6rnePtdvWmERVMNLNRtXtnzmJWzg9XNSvQgkF4x7t4YF9eo3VnsBav476QUidEvmYmzcCWGtc",
  "key7": "2Bq53135ZCWoDWbtwTcvfbdaPvg9pz3UTvNgaKkCMmX6PgCUSCrVA3RHo3Sr32VabtF8EBCbudLtSkT1XYLmt3pW",
  "key8": "227vTiSbMZq7y2kixo6izWeHbXXhvMQFrXPEDJRSGodze6qjiVjg6sMpg4QBaDyphJLb7wz9Y3ahbtxRYV2mqQ4v",
  "key9": "65AJpa3MtRBa8hLdn8hyQkbG8wdFwdE669pnSoBMKnbSASjwxzfUNdjKwAG6dVcy1cJ1v6mgWcJtfdaLsJ4i45QG",
  "key10": "5yMqRL6hLBTwfEfWsmMisyrSU7bVVn5tmVktESnafVhuh1UvKy2KQ6uVT68q2Usq1DggnKLd7D7Qv1tfpY3LoNYj",
  "key11": "5Q65SGk6WyJ5DPNDeCXppeD491UqXANJvWEbt1xbqAYCWKuvTSQVR1eWuXo51ivuZzTR8E3g2vxx2s9QqHKY2N1r",
  "key12": "5j5ZGfL5wK3BTywPxqZzjGyBJwaaeDs21d626WjaNScLd9DSEo8oHm4bKofBkoMsFQhmKLvaPXuVZpsATUX9ea82",
  "key13": "35Dz1yAeHYvBN2h6UkpTS2SjCJvtdDWtsTmEDXei8DkK2P2XiqhvT3vB3k3QadRwv3kdwzLn6KeaqtHcYsDN1729",
  "key14": "2qZ5L13E9jCQ1Zcw58WhAuZa5Z6QKF83aUUAvdQp1nNBPdPD41ADZr2M2f2WwKsLgeRFenAngLtChFPmKYyowFYH",
  "key15": "2ANCT19AybKuHByfKPVtAGjKYbwrX413rjNictZz1xtVrbYZmT9LMEqz6sLPJmw5NRFsUjpfGoA3ADXwtGbbFi62",
  "key16": "31EMhCPAumMNcCWcqVCrG19CwjKZR7iXgVrJHVGSQKXQ9PMWZf1uVwr161BUQ6nhre9WeSnxjVFdVW3DZcyko213",
  "key17": "4HEfnk5vSx8AzrPGhqMaEc3n6x8zDRe6zC6Mt1Hq695Efd16rVbPZZfJ7SqzcafiqT9vqYPKdTePHfbsLKmDLAPv",
  "key18": "5tfPXNn56h4c2JzPVW7oqD8q9kSc974yW7TDGKqD422hVcgD6XU3PeDQE5MpPjAuuMYGA775Vya1qsW84KoojwBU",
  "key19": "2PV33Gb1W4NjZyRBD59QWtvbVPzSFa3weSXR6FHuqHKLjMAY4y2oayxi5FDPzTgP55NhLaBasRXASXj7kNsW4yBw",
  "key20": "5LyUZg8c5mU9wdKQqCsaDq1t5wjw921eWWxuZaYjzahamWrR7DuGorm6Kgecd3xhLQU8MHamC2Zdtimw3UmuTRCj",
  "key21": "4D19Vp2RGCFA9ZNNX5Qy3x1UjKWjv9wQoZhUvhBe5GUB63aqP9bfTVpgfyeqioT7rg3X6mXk5x4MK3e2BdVQSbTn",
  "key22": "2NUZVbK7XEatpSqsKXmKUdhNuLtAd21RUtkH3PCwMxSrhDMTgTFUjd3fS3FAQL8CNe9xwefnuaar1DS6AvE7HEmD",
  "key23": "8Xo3m5RSgrHPkouL1TfkRpjLNEorhdGsZ8gyzUX66gxTpnmd1n3AsmFpPVGfJo6gEyKu3AHSghKZNu5RW5VGcNF",
  "key24": "Ka7G4CbcYhMJBCnwpX3NvSuwYZLf9Jwsxce7w3pncrouGJLptLtxL7Ci7ZgaTYQg7E642sPRVmthtGZUFuG7yb2",
  "key25": "4jWwgPpVY7bteKj7BQdg6qcpEipiFJjRjaPVYagUvgAcE9ZF3ncLRo9kgKeZZfHNN3yWHSRBkTx7hqZjboMvmbfU",
  "key26": "3uGhTGB93c7wxwXocZqXV3J8CRxjkyePoFqpYj36X5JBdy1mE8Tky7Sp1pJxkKkX6o36JmxK4P8A2BiDugGhg9CC",
  "key27": "5UMaEHyGHq9tPVq5tMnvbXqPQtkmt83Qrh5s3uNXxxXmVeb3Zyiy13LVib4oS2ohvwJQ4RhcZMywSCnoEH9NKHAj",
  "key28": "4PbsgFFKhHskGagM3V1MowYeDt9n3fmfwY8sURQQAz1mwjySypgTTHyLyWBdpnMazSfq5N65z3eoNvT8WKx3z1wR",
  "key29": "3ahTAGvts5Map987t9nJ1NLBCbhuJgxoDNkvokA6BdE6eBUQJQXZ37afPegUTECc5258neaoV7iE7WNrCGvM7mhp",
  "key30": "3fstEF4TrSuEPzp9WqVCs9QFSnUx4gQxqG9VCSzhazJ7pjcQfg5958D1v32t4Y68X3pfgKnRu91KZbB6fcCYu8pZ",
  "key31": "X9GEvDxUUtq1NL3rJ7Bsps2UdtnREB5Ri8MaPCSC9FKTNC7wBuvjzjjnsyP6g2NDPxt8WtiZ2eKwSCc3kqQcpe9",
  "key32": "4CpH9TDjBdfEWBgc8zGEEDb8y1jyQ7BWQpixUn9NUWBhVwqWYFVo8BnSM5yLPPvEJp2Y1YLDGnmAKmJf6r5VuBuF",
  "key33": "2MBDg97fZFheJFLqfUtJ84qgZJVQKBHypKdXGryG9NKCZ8WHMhM68f1hsUCa4hMGYARxwwvHbdeajzsZEtymzwmm",
  "key34": "3WFtaFxmgPbTMGo7AiQtPcbUfBNwnUzX6E7jHey81fMMKrGaQquJtYCwVgYkFHEBV9a1MQzTUWJ4MoEruBmanM7Z",
  "key35": "3ESXPCopFvwrM9mRUzPZzCDnFnMkTvLKtZz9o9t78w3oCxRU8eeFY6XYEv39nMhzruRNNAuD7uRE92jjQ2Hfoycp",
  "key36": "3wLbTwBhSkqmD9iU4xNoApkkgFP33iy3bc6R6xcYDtdtQoX4Cw7g8bz8FqX8791FaCyUfNVXXGL3XM2s92Y7EM9N",
  "key37": "vbmE6MX36uFMmTCJfHuf8Kkhv56g3476U1s3Yr8V5sCWsxXX6derAhLigU7A9XTirPwfsubYXBLiaTkVYmF4CcC",
  "key38": "kqbwL28dvRaqXoRecN1E8bp37x7oRv2JgfW3tR9dbwWii1XswnCqfg5kkuL2vz6yWdJN9uyRBDNq5aKKfkhnSyo",
  "key39": "TTBv4GGDiVF6CjdQaTBzZGrMN4D8gaRdiYYCiNEHSuSHmUoizpszgjiJJJ47LdUUVAkjQP9ucV5qWd7T63f64ge"
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
