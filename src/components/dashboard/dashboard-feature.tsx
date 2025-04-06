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
    "4dz5QVYWaYdRHn4d3CwmKZuSmEcqBqBhLFeZ9C7Tdh5KdqsiY8j6JYhJ6ohZLg2iUjoiE8P99w1AjUxqVRfDT1Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZWYvQySERz8ARNCfrk7pKedtVE7N6ZkagupmmBeor7XD2xeg15TQ2dopA5wEvs27eeHW54t6aZrgS7eP33AzVv4",
  "key1": "5UshE7fP6dRySGmRHp2kn8FFUUdjneeNPWJL2YaaC1mXARBQaFRXYAGSprXzBwCgEDrfaXLZLZancou6cA67fM8P",
  "key2": "3so6VC9KoySZvw2o4UCC9Pv5vMmBG2WhFV13uTPNBhReG78pRQVcJqGmmxou8817uMpioghmqfy9A5tzufssfaNW",
  "key3": "4LCvrxFMvHZ4BhbKgi12FjVL1P4mjYykAen5rAR2w33G8NScFmnLmyeZoAi47T3Qx7ZE4cj2vsq332xJhbtMdVDG",
  "key4": "2ZGws4dSgc5V5EM6o7X8jrpQWsssWY5CH63Hpb3BbHDouWqx2x68RP6zyDx2fdL4wMYDmqFJzaqLCWC4u1yVHtsK",
  "key5": "4UkHVLTp6XFbGFQE5wqHYXD9ew1emvygz6L5RqeYyyLrDYxqYVxZ79i1q8SpmXTMX9UZguHRJDPNJuX2YvUaTb9B",
  "key6": "2aFk9GfG9Px1TtqYc3ALV1aWjNLixZ6dF8sQtrzSMVoBYxMv8a2qvGe8CHdKoMKE62eZ4uMzWcEwFiRtUvpkNQiq",
  "key7": "31mrHX6Pq4poGSWWFKaJsqVTpmVp3gP4Lct5QoEggU53C8FnXYzp6qCFijnTKfB3Ty2grSiJT1wb5EjJb5uxZcu2",
  "key8": "4UwT3sZaeUkmaeemnGZ28MP5gJXFJzNjy4E2DxE1hi8eB4isuR46g45cLwHixy7Z4kMo1kCxj8Z9fCMcdr23o2c9",
  "key9": "5ocwrQJ89XrScbRzvLwv97jK97ffytSaWuaoZuABe7tE1XUJKY8hYkJtpLynYi74YZ8JFm49Gimt9Rin9uWsjvc",
  "key10": "4w1GMiX5gghZ5k4E43RRQKQ3v8cEbUNzcV23pFm91GAptS65wb2FtKw9BvtgXZwJkD5bXZg84oRNyVNSj24pfTQs",
  "key11": "34bshpaap1C5XigFuR23fpLUwzDmQfC9585JSc2BZBMY81Wb3nmPc6q9LQVricmtHGQZ7jeTqw1uXS59JGEWrrD2",
  "key12": "5WVcM3XER7swU4xVr9iUEd8TqU1oetuSaHs2yH1tQ5WAMWUfVK2b3uyz7u3SsCa9UGMWi5cPV29smZR6LdzT8xN6",
  "key13": "4RBNJ4v5U1u5bpZFpsRziXYC43QKfnqfM7yC82evANN1YWuPhiTX1DuKV2msvp8cYebwd2yqR1AW2QQ1WyAsD25M",
  "key14": "3dYMMLbhYVtHk6SJPJju9tpPPpGX1GfjLF5RkvLjYw93PS8FrBK6jjzjt6WhnC9T84xsRpAFG3RCuHPRg9meDAuQ",
  "key15": "xkiX24kNEhTrPN2yjHkQ3wugFfXH4pmobvCgVxeDVyr4se2a8ANtLXec8mniHg344HwygNBMnPic1M9vcVxV3Fn",
  "key16": "3eCypWw38UPoTzAsGVbdTXpPKR86Weuw5yfChzpVbcMhEmmMnnUVddFz4tQZDQNv3mrLQd1ZzZQWLJzwJGZKEavY",
  "key17": "451rNLbd6gGiCuiWW8ktnfjxqsDsgNxHUEFHpN8Ar6bj2p5bZKS9upbeaBYgsCpeqMSD4rt4St2pC8m6FkEzawT3",
  "key18": "2L2Q6MkiTh5jRBiQPYfzLeiqTEZ8ZzNpmydV4fi18ALQQjqHoNAfhbjfBAnvWBBFbGHLPEL3jykAtvyBbVx8enYt",
  "key19": "2cvFzkroXaUNewX1wKVA7pagrJcVYbFTUd9BH9NUBSjC7iCKssYSLreY8PwfuHH6j2DnEzpZ6K6K9JC4EzhZqazb",
  "key20": "5R3nan4s34But8TwxqwsFXeFDbmLYQgxfhmChxXjyFoHFoS9PfMapBRuQrunhWHqoeF8kLFvA83DMsCNJNuTnZvY",
  "key21": "2QXZ6NA98hKpSao7Ekp2TUbwDk5Ch1oUdtCzbsWntfd996nTYNKLKbhS1PANJyHtRRevG2AA6k92vEVxvt8tp7X4",
  "key22": "3sSnmHKh265UCmi2hwtK582JzQiaq8gy5f14SYdDiqYmNXQJKEb5hDyd4uQeKqbu3BDswHjGJiTxqQpFzX2gJhtC",
  "key23": "5nzLztExjmN574trmwd4UnFy9qt7ad2sQnd2rsT5cj6VPknn22Byjhu9GHpS1XpLSLDvaFtpm76noUJ7NwUq34Ld",
  "key24": "3U9rRvjTdbyFS7KmLDRyVsf3n5tpCTYgRpZi4gyjw5LqcEYXWKnXaN8QUduZLP9BpJxoqDHhqsHMbuLq3HMVBe1i",
  "key25": "3tXdsYQhKcLjYHgNdRgFR6ELTTR8GqDH633P5iWc6UFaG6kbHLCjLDg5mtbXa2RKsVY5UWfA3ELYbdp62BfopdyW",
  "key26": "3y87qms87ns29n7wraL2bGEWEoKtQ2rSgoJX7H8Rutxkb4ShSTxiWQs9vrtqpZrD5FpugYf3RogS93985HHvAWxJ",
  "key27": "5QWFDrZbmx5sJaoDrkSiVwLawqQd5itLeYED4v2BoVwHt43JUeVi7srPYkcdL5qq7KCxWcSquYkU2ncJTdPLsUdp",
  "key28": "oeWaQJyRBQUNY5Wggv2CANYEsTjHdsjsBjyVRZ4sqwbKrPQf91qgu7ptHBFw3nFLYJ1XK2Ra4dfzPiD6t6vCom6",
  "key29": "4R8Gm6XNjJjDvn8JfQ7mqbb9QSmCRe9X9axx38jVhoPRDbppuvcjRrssYKWhsSk8fJgGrSpL8QBcfWkEB9u2n51e",
  "key30": "4s7eHBmdpfKGf8qG3yCfv1PGd9ACwTiLCrU6r3TnomS2GNEbdjqvvtXxLYzCXJsCBQBiLwEpghZ7PNkdkgmGzhSF",
  "key31": "487wzqHA94AfpjUQbLBpoBbNYiWt7HCwJMAKzZr9wQJuA8kNDkhwNfKPQdFUHcd4wT5g7d7R2XoFSmatNQ24UxMB",
  "key32": "3aFPfbyZCMaGoDzZ7nQXqQy7v31yFnyvRhJrHyYi1WLgR6o9TTLbHX8JegL9DWsL7RrvxBvc3bYaPjZwPn9QUCAd",
  "key33": "3jiQkiZjaH7WLqqLHS3DEw1bU9yg4GYRJhus2Di6jiU7s2jehFRZ17dfvdUQzZ7qWbPZsSW7k5a6YZDoZULDzopc",
  "key34": "2BEa1yyGhfoVcvuzCLD5dxAf9JxFuut7N8DwJm36Hv1rdFDwHjpdZmcm3GQ6cavuF56KFzFf4qBJY7QDwbAjGbsz",
  "key35": "5UgAAS5PnyBQPWacsfKbLzWCioNwPXxgw9qLU9fGtTCaomxnDr1UNavucuUnNTRVjjkdcJhsh12pTATh3FtKnsKz",
  "key36": "2PzzEQ7FEX6pvEK6KyxDtrei7yWBswxGi92RhLmCQtkLJRbxXWUb2rQexBfmmwVoQVmWZBdEKjV8EJZpzAYW2CGp",
  "key37": "5RybNFeXw46R7xSGBpei1vUnkHiruyiYYyqoozSEcvoEj94oU4Q2f7PgNSZGFBmE8QxDfyi7vo1VbW7ak5KGEvor",
  "key38": "2XKBwbXbvcAN9zhLHCTAvWmSn95SFkp8aFb8A6G7gywJVvK6NwV3p45pGdcERTNboGo4WfCEesKCzkAL9YX3KERw",
  "key39": "3cGhJ3qLmd7rmDkQzRLVWDSgc3yHz4JYBBrGiTsPVA2qNoJEAJHfLspDnuRFTCRpzH4FxJbvKCUz6KVMkiAR3Pz",
  "key40": "3GReC33miGEmfTmQ2J2vxkXQtXgQM7rncYFLhj4YTdhm9xJN4TgrAXng4X9WvY6poYkVfJdmMHwVyjxbdLwtp2m3",
  "key41": "4drXHJujbDDmBhTQWtaYPUe17kiRpJLfXFvWDgoV2Wc3ueQ9qVA64RegmK4G5PcdbczZVLSxEtshB4o1ccvPkj7T",
  "key42": "5DyULec8ccMcbecezFkPJoxmRrKxaM3P4HiXHmenvYpM5ViZTfADmeowcZdVFsHfiaNaKCA8J4e5XJ8efPt3y6K",
  "key43": "LAtWqT4X414dtBgYkWLVGcRMg2TQa7atDEXZmegWQiipRTF9DqmSfnueHtE5Z1Xtj6LsxZZwZ6WDrQum6g6xvdZ",
  "key44": "2cvAt3FpVDAyRXGL7ZBXz3TvPuxoddm3NjvgxMtgt6WUbN5VFLNDrapBh24aHUwQ4F8miL7DptBAiiXjhuTBo9oH"
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
