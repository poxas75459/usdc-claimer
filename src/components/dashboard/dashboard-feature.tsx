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
    "2GTiKhamjR1srrQEJfYVtmXPxuxiDeJbYUrLEmDfSFp81EKz8GAW6eikyAqxekXfE4TrZktYid8s7TT2EEt3Uqqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jk7Jgoz9WKBS9USyuNvxZ3eRBTAvBJASXk3YL5q45XSm5RusiXieiK1TUcsz9kyyYfgJBgcWPtquappUasKecku",
  "key1": "5aYHXFRYWAj9aW7oivHe6qEzawAa5UV3YmrpZYRESQy7a4v16D1ZKMFk4PSrbKN57KY3GrbPSDMm5nJb5eD6vdt9",
  "key2": "3JDWAri7MKmxCpNKE41TReHZYprm4zZnSYz8JzzhT84ncJ7bx7Xbatji5Cvyc9AeFqDLsn4qtL3kDeGSdbqkAdna",
  "key3": "49skQjarGRhxwGvKtYczLSDbcVg3sePiKDWjWvgKLzbKrricj4kFxLRpfFEgXAn6a4du1dCpRr5ARyAFLagxTTHH",
  "key4": "3X78qB7eegcy7nwvRWUaNr5Zum4KGTBGeXa55QsG4vjL1xXk2SMCwrZuKKEKr25xgnNobciSjrYCMQgvvxmQ3jkH",
  "key5": "3rYz1FMqYaEAXt4AkAnoRY5nsMQzDqZZAn4p7UxXhieTyDNP2tMfkP7fKgXFKXG24vVLFcKhuNhd4TNuzynkMUUH",
  "key6": "553JiaN4fumCPQVvRzz7N9n7b5iBoxzvJiUvWudHhW9BWkV2V6oXLWbC8Fb62JAYzZwQfRfVKKF722uRoBANmXRx",
  "key7": "3Ud5PGceUUM16Rycj7zXNSo7jmLM7rLrKNPUU5yrDSTEskYLMGdMJC8i1b6h5fiB2GDGZ4chwd3j3VbL2FwNUUYT",
  "key8": "2e2hG6oaEDSoXjrgjTExruXu5hVgUTDXhvqF5rhzj7H4DcKHHqr8nj8cdZzBccvtTLCaSVgasXwEogky2AXDxYNy",
  "key9": "2N6NPNSAy3EQcyARbrH6DdzRpsHzh5iTmSwapKUswn4HSEB9VVB6bgxXk4L1FNMTAccUSd5s2CZ9NaYF5XhXdazg",
  "key10": "gxFRh5JjkANi4CyxUFC72JTevRQe64yZaywZLpjzL7iWPMVs7Z6We3aUvgEa3F1JwQh56QHfj4fY7Vuqgod56tz",
  "key11": "3bhNQRYVyWua8TMwTSg8p8HJoaxkKSaQcHbioyzjBZX3Y1VRAhbnBAHemyJCerCuN3ZuDfWbe4F4E4suvTVM4Kte",
  "key12": "5dWvrgsX4khCKx32MKdjvNXYxtyXTweU8gne7REwgxwi6irD9Zvm7UqbmPMa2qaASzdaseHNHZTTLE76hS6FqTak",
  "key13": "5ECFbGsTKjbW1AdsBm6jDA9Po2a3G4frfpxJs2RMDM6sftYNvEs8ECLcjdhc6JeQACBhxZVYQosybbepohiM1hUT",
  "key14": "oymYHUo7UZ1VhnqRR2mx8MkX9JTba3WmbN9U25JaD6qd44wRUbMZDtB4bhDsf2DvzeAfonqc6o5yyQu3Vr9WxRY",
  "key15": "48AGw97RLvJbDgcpCFQcGVNHqvwtcx9HGouGrGocwZeo3HED9g7fkvwip9xtwsQdsPmuhmCvLd6FUn8gP6eSsaDJ",
  "key16": "j2fp4bjrzip66nttz789neT6rfrwPMuHEpakPANk2B4R59o9iB5dqMm3N5tE4TS3PiUEmurBfSgYLmcCYiNJCbn",
  "key17": "2qWwnmJ8iJyf7ncwmLLiKU4HVhW3oi5rcDa3vumrjRtXYZ6pNZpvZMZMEcSfa1QnKdJyxaYtXEBsBxxiVxxTbWm6",
  "key18": "2TGxpgfkrnkPEwqBAf73c6R9famzquiE7Yu79yjm5n7KiLxdNWfeBhE7wGj5LtDuZxRYUBHEZSsyREWQN5kGJekD",
  "key19": "QhxsjK36M8RQBgdbdM2HDEfVjQ7numgTdP96GbJRJj4uAwHeFK2AgNgewDC1TZxjayyvksz7gomUK6RFiKadnLG",
  "key20": "3YvbX1FLZYmJq9KpRoc5rE9X2J2XxBC2HiAFaQF3WL4kBwNWMxuRkBhkEq5Rrno4kj4WhgnBM3TrQzi8wCmjSUJv",
  "key21": "2yYMcxpyNMxQPheNNZMQ9z4oRtWbs52qDxhZ41FRvdWarnjo9Q9wnKT8NSr61ekd17GgEmc8Cigfo4zCrWznLPVz",
  "key22": "Wzv97UbspiVLUEAnupCe82qo4NeYCG3CxgTDCoDTDpRSWr65T2hoEaGNyqiWBwmoQUqq139nLpzVRzqo49fQkvg",
  "key23": "3WJMhQm9dd83b6aWYrqC6ZZyym9P4eoMBCt7aojanmLzYkHF9Zen6KHE6gvgyTKgCbpAPEnBr1fa1Sf32wg2vVWx",
  "key24": "33j2eihHhzE468U9hFUj7bfqLNrnjzfuuTZZposybbxLFfNvaYZKtyxP5MVWaFHNM1xuhTHAiaMbdbqbDKRM62SU",
  "key25": "5QRLGhReuYeWcvpyFbThWGWWuyJGHUk4QRoDp2VaPdbTdTBbp2pjK9UjooQsJir42yZLGustWr7BB3hYwWCJ16UA",
  "key26": "3rLGSGXPwXmSc7u2ogzrvLt4B2ua2SZtXr39gDXrcFfiUSu3iNQxXDCmXn4sSZL3nRFVGqJWA527GEw5mZXrwgrg",
  "key27": "5Sa1uAaysFWUddpKa81dqM4JoFcYkt9ssj4uWy9qm4t16FHm379jn9syRUiQmh7D5mJCQ37SU3VGEiHkbCCpJnmm",
  "key28": "4n2pxnCs9sAJdm7DhyPdMTqAArdkJv4f3JrtBDrLQ6QC7KFGUW6WJuHMXvpbPUCDdKmhbJkcdrDQWnBnx5eVvsVb",
  "key29": "5pZKQhDWcYF3fQKzVScknZ5faSajATdXxwfsmgUytpeDGceN1AztyDfHbcEo49PWPLMSFzmey8UpH3F8zDtMTree",
  "key30": "632Vi6DaAhirJup5ym65RBFULcbYhJQHY3rPimDgURuJJQHySrTCBRxc6dcvbXWaCUU7NRu2GMEffwiDELXM51Cm",
  "key31": "4759TSDT9wC2kCuLNfex161Hh7JUctoFWTXZd6BvKJ9oawjD38QqSFPXbsQUgThDZwTK5L6t7fU4jtzffFNq2PTw",
  "key32": "2kaQNHJ65wZ2eRDcXRS1RsAeA2SoTCXFjt7D8Pa8Djs9nCHBZxqfDk3RCrWNvztT7zqLRCdWC261S6M1bBUQdaoM",
  "key33": "JHkpzv2zKB72q9u4hYvBSzskABhNaYF7a318pcZivnfS3QTJQgdfDCh1SQDbGBiyV1xtSYvc2grDFqYokamWTgU",
  "key34": "2EoQzNW98Um4uZFvTLrNKQXkAcaXmFA4YXR8R9zgNLGMBnQ5hzcYjrVx2xa9UohVFVw6ntxFSZXwsHf1fyKmnBs5",
  "key35": "5cmHYPe6Qef1arAtojYiA1dD4YWpHcx9RpoQbn7fDo7SE2GvHhzMZdWZCeaHpbtKg7cLYJLGMAUFEE4ZdCFyGcM8",
  "key36": "2FLpLFVAH34MWygKcXKJ5frdo2GbKNzRpTTRprPegsbAzKHRvfhEA5ipLNnoxpTPXHAyP8gbobg7X4NXjJtfaSFB",
  "key37": "2ogqFRx5gSfE7xfinjqgCYENdiTaYQTDG6UH3eTimzhMK3Z7Bb9FEjxe4H9vAScKpzWJJHDpdxSZSjmCk7cTV8qZ",
  "key38": "3gG7xM7XKfJHdhiyE4LLteei7s2sKRX77h9CxBuqVJb7jeLMChuR3EsoXscA2h8owFDenWnc4atmeQu2bLrUFNC5"
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
