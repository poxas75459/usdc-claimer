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
    "5Eoey5VqkjTMDvS7UjmtPsDdXUxHYYd55d1YDLEdXNEWAJmnJ9fM7km95sYM3JuXTvxH8uTyhKBmEWYocSLggdSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4da2tkPhmr82FEWvydpouGEMyTLwzTRUaWskhxUVCgNhZGWDohfDgempjFJ1pg4rwdWtApYoKTDoSbGGS6jvaHJD",
  "key1": "5BqwwFA49UKbnGNghMsVy1QsJvT5diGyEpXPx2ihycSM1vHCsQqzhrU7Kusqon744b27967bGyeUBoAwCrtvBdFC",
  "key2": "38Qo24LuMZNT1jN97W3SVwk2fSrnqMRms8wsXmKiPxxuxFXAUMh4WVvE9kvgj9CKbWPP1yWEnT9qC2N95uQ1M5S5",
  "key3": "5tGQCVhTQJkErbyeWKTiRj4ZtAEiyVTFi1NoV9FMiXZHZzeuSd4wZmEALoBVQhiQ4N8xvA8Nspk9XV4ZY9JoCTHh",
  "key4": "yTVUqib2qqP5uQMdg23SbfetV5wkmuxyrPWA2YJNYoTmLHJy6xWNwTLPjc8VDZh76h1eJbrzgLD7MKfkcCqVms7",
  "key5": "2L75gpFMkycGJ536gS97biYRtTtaqbhwNwWwBRBSzNEgRWrhhNZwzVYGBdRKycAJPRBs7BLvT4Br39fLgE3aaFCk",
  "key6": "4JVRmXeeC1ubGdNr6B3CSXyEKVkhpodFzLjd33Ye7FseUU2VZUs5uW2fdQGZvGoMJQcUKQdCzk3k3gcNqdSre1CZ",
  "key7": "LDeUpjXpjomScAePAvFjimzpeJvsCY2PPqS1nJAQpWFx5ZDsjBMjD1H4uHXr8ch2kjCF5qJr3KpVLejP65ysgkJ",
  "key8": "2gHijPh5w42BhG6L6YYi8jkkukCwfLwhmSFBGdtsCVWGQD1kif7Dvxfwfx4k16LPLwve1MfaA5DmDS6BP8J9F1Mr",
  "key9": "2CDEefhijyQ7g39aRWRwh5eHqSuQAjXEq6CNRAuV9KJZSdnGEk8pfd5A79uiSyDRtZhy8ymvD2xMJgdBpuECdwPf",
  "key10": "2Vd5wa1J6S9YkHERLDnQTApH771Fxq6LELSS2FKXdvzUz1dzTYdb9WYYj6vmbBmuQL2SuEBxjzSSTw5BmaLDEh3Q",
  "key11": "4mpqijkBZ6zt3VNm8tKpmxM1ugpobZEJDk8KA37JMnf4ZgNMFNxXVPVPoRP3nB6q2DRUvu43PziZxE9XiXX1GQ7z",
  "key12": "5Tfuc4Lq6qMsNBirwZgiXvWUhGS6evfppPsyzrW8aXQLVwubRT2fjDz7eAy59jPbU1JuRTR5NnQzPi6C7Whsq3QL",
  "key13": "2uAuX6JQA1JJjLzv9XqTeaRhRyzQPSZVmUXND6xsmzi2wpmwefQ7kJVriRL8RhuRtnnKe3eFcC8xWhtjiXhdPW9S",
  "key14": "3sREGQBTVY8Vjado52diLmcAUN1HqpNsvATVg2uZW72BNGzZj9kNFAhw8GzibxZwXxTraqvXVKmKLKtBuwRdCVs4",
  "key15": "2gAdRww7Txn2NMW5n44iJjhJfRWAgtPxWeyMjkYqPhAJynh4HM4mEVY8V8Hrt99EfqbrYZPSUUQ7mAfMZ5X623nd",
  "key16": "2qZoBkLY8srSiK59wW5ChLCEx8Ej6ojVYmfDcatjyNrVhdNJxWJgU4yV7uTmxE34JewUm6ANcuw3ToPTYFK9o82v",
  "key17": "2xgnqfZMmrQVMze7DLXYeBWqvueBoyHw1t2wbjs5V6H3rAuwqGCesazjY73GzgjicByKmzmnatKxYMGfCFRUEGrm",
  "key18": "4TTrAU4s3x5HyRQ2uL8ReSQGc4auopE8FhWCDDLanMua2UGgEAMvP3wyQXgRNHFE9sxsJ9MMgN1sX1ti3zjiXv8c",
  "key19": "622LUiBLAQvu4AuiRJT1cY3zUGwagJWmZC8tYu5LoaG5ZpYDDQSAQ5q6zyBLZ256zsRhtRps1NhEaGd8LYJA6drG",
  "key20": "2cBQPRfAu7GsGkZVfsYyW2GvQgfeCsn1163adG4bLxTXg1yp7ozncjeS6sNk6Nt1JBgjBfx9rDvVUR5T3sm5SuiU",
  "key21": "2AG91WoWG3qzTHE9rAXcrjSDPBP9nxWWSfVwiTy8wFybB39Tdth39Yrw189KhQit44HAyMaXAgmdEAFUJ25xGJRV",
  "key22": "5EnBTELKxepyi2MMYRt6fSJ8SFnv41D5P87VbMWc6EzwdNVfi4desp9tUnF39Yev6QcurbPtohPp7WHaYSXcX7LS",
  "key23": "Cam7gmEAg3LtBzqDs5ogahHrpxjC6D5M8bPLqWYeSTmK4Mq47wKwpqzq1T3EvQLA8CJ8T47QkKxUVPeeJBz7QWb",
  "key24": "42yQud8cuB1c94Wom5MY8q9K8NJEPE46tQjQGgAXww5j5NugyjcWKSCCZ4RGJZnogubTCjpxSqnVAb5GJQ5M44b4",
  "key25": "4MoDbKHKfmnvNRWH6XK3A6dXQtKBnM3ywz8kRbcevP6tTqYVbKWBDcu1Hq4eqnULya5T5oXpCEDk4JqWC6vpC5V2",
  "key26": "2eigtZs3gxtfujK5UoNPMbmaPG4R9oW3ApWVMYMJB5iMcswzYfKtpggXGptzarHNLPhHKiG4anvKfVEbWSjDAwK4",
  "key27": "mQtd2Eua4rno3drqEx3JdkFR8R6YpTq3c9wcFor3ZpQvTCyQ573Y6iptVji9quKhQexv1FczkZHBs6mQUTgorqU",
  "key28": "4rKk3rAL7v5DhZfg2PanueN1gNoZSC9FmXcdWWbj3JqpbUJPSi36LejYTJrMVnfw584fojak9vKZREqKY7s4Jeoe",
  "key29": "4kdtXh3RX43TjaUMjYJufayRPTL8SLC8QjfLConMwzzxUWwRkL8DfWZqWc8XJPDTWhxbBJh9WhwwDaANYSmz1W6L",
  "key30": "5bkqBB7F7wroDF4JwVyEMEkBPiZiqNndQRs8xQv9Epnu71omZZ1Yxk1DH29J17fVH4AuvFTUKgio6JjcedGjzFHt",
  "key31": "5mUFau9LN6BVD6wAnjk2E8yz6PKQSVaFw5pyNVJNWtqE3D3R568Bi88YW9dmeRtDdykxHgoYNdJmQWXqq4YQeSuz",
  "key32": "3PpuP56N8SLFZVEe51tuMR31RFadAoY8rGf8MyEYbMfRqE4iiNTeqMrGVg6ZK24H25hUYPg41hnNTjRM9MX3oviC",
  "key33": "2AYMA85KBD8ZUYBU2yC79eF2mjxpupKLvs8HJ8GeyyaJ73pynRC3NaVR4VXuYC2L2FWyGnvhdPpJypR2azSY7CD5"
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
