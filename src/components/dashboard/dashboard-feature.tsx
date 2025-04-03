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
    "4JMQWwGi5kLXhppn5ER9gRTLvdJLmBRs9HTdGB46KoWtDBEVZy3JMnvhkMwrmobipvQWatNgLXDNR6tVby6MsBX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3a1QxEFYpyusaiss2CSwC6WA6juP8BedDQDexrWRASYD54oTF9fEJmEJHgog59GhPQukdxETcQQLTJxwh5WvhT",
  "key1": "K1h56WfGXmd3DMVLnRxdh2DAeyAz7xbLnmkWahA7tiKiC3zkj1GgMuXz16QTsSP5G1eEyNsYJndw1AbwsEcoaA5",
  "key2": "cNmn3wTbbkKGGiRDEzuVjdaqKzqLNGxrToubqJufnWwtuzxTaf8FuKFqJseTQqdwJX6xuekFwhhR2c4xyQNXcXp",
  "key3": "2GeCVas5ozJ94GD5aegGUdz8VDmYybGcyPJnyujZRHRivQVqdAR9svk6QwXQAiameJbmdmccKRuvymMBjd1YaHnE",
  "key4": "5AwcmPLaj4YCggoDtojNNVSnbPPRxgYxFwsejnzHJ9sJMMpQsyjLwGYkEoiD6wsr3HNdKMVu1DN1vTcuHhxDEr77",
  "key5": "4Tp23UGUFpkYk8b1ojc5fuF41gpJmAn2NMsqMP389GeFzbD6P6iyQCgQ5P3FB1k8VQswAmCKqxVKUArEB4YMb4Cj",
  "key6": "JvgLiX2nsiTjrXXb3Vw8UhLBCEurpN7gkPPmbLKeMhPuMS7qAwYMt7zWahZ9fXhR2zio4XvCW6mv6Lh4h7Q12cC",
  "key7": "FHtWBL34VdTK2nncppUou7sYLUK1DMutZ6Wbe3frdctq62quSid4N6K239cPXdxWKbc7kzSL86uUt5JgmnxsHny",
  "key8": "5wFAQScfXwxTmMRbWMiwzusntHyEkprPQSnJMDpvKogi1WWyC1WwGxHpqetiB25bLBqBnQMuLerFtWvRxkxUPCDt",
  "key9": "3Ty4aCVc2usFatj3yexsRJSitwe3oAPgWCf9ztDwN8Y1oSx31Dq2C5nWUHeqSYodmMUDtFhYqFUJY5owa61Vqti4",
  "key10": "43hDfYZaazqssi9ezHZ57pWxjfx9Vz3vaXHEjysxMyosDQQ8wQWUmauqf9RCbtcaWg9mqxL6dmTvVPMSAwtGJ2rJ",
  "key11": "3PuQJECsLTS3SfM3Lp7zYeWfpPik2zcxXAua7iGPxX1htc62ytdjpLMku5jHr9JuSU5SP89vzT369Q5wPMeGbqWL",
  "key12": "3CiubhH3k2DSpbFXwJzNppDLWzqcnF86eZo8BF4Yn5mQPfD1yYdPkB7f2CkhW6see8YU71Zma2zoS6XbJhp8fLdX",
  "key13": "vmDMZffX6Mc28mWSVpxtdeSGWPBvLhppBbuEA79wfJp1SkgbNbMDjmmb8bKDMsVdicfws6DFzqvUWpjZkr8Ch3R",
  "key14": "4fVwUZyHA3mVraurwrmP4ZXyMBR3Zduvn3zWT6KvEPhcsBKM2duAMfsjMjFyhv1EFfLzQgSubtL23ybzd91PhERd",
  "key15": "5mrcuvUpN8cHXV5TkVLJDc8Rm9e46hM6Bs3NELtDMs49KWmFTgtsLXPRGE53qatySMLuHwyyCkucFwUmbeTfmznj",
  "key16": "3FJP2A2GYtZbAxRYPy2LxUgBd7wrgDf1eoKP1j8pF8AuSNwC6Vammn62B7KJwxXLwkZtNm9NiCzj5v3YgoTjtyoZ",
  "key17": "5w8CvnyV3UKyoncbHYNf4Ud4nE6e6FSQAFsTUA7vfndKuhDK5dxp6whj2Swpd9dzSpeDozQSLhBWiGEZuG7ykGAN",
  "key18": "3wSKNkd7s8ThYhrYxhQnscLpo8apAiy1mj3kT1Zi3ViLmPqWSXodvChvHkLtNcVE6PFP3bd6NFyQNQotBpCEupsh",
  "key19": "4oFDTChneDNugwXf9LQfjJoNHNJ3RJab13ro6mGR5g3kP8u7ybbDTYoerg5NqwUQLYdj6SoL6o1zenrprv8bnHwa",
  "key20": "5zRk2T9GyZCgwrnrKvbhHzNp98x33GYGPdRQJMcLgRTZkLjPzNJpxkBorp9e2eFV3tpnBuaNeEMWUdriTwv2jdSC",
  "key21": "WYMTKjrMiKnFCfxLS5B2P4qqPi327r71XbJmDZA23EajyUCocarFWM3eFUcpf8GsXcvK1prR1kvzXrUL8HHnyjM",
  "key22": "33n8kzLT2wrP4hTebqngPMnse9y9rHTiDEF5Pw3LUMEQxwvCFpgzSKgTcEWgsdyLMiXfcpngBDgkwBe5csRNahpb",
  "key23": "5xWuafzTsEgeQaT4eBM58LhnBacnqq1snQ9PvV436jhffS3S9wKcCEjQb4bJoriSZpXvfmDDn1dyBkUDTW2Puvz8",
  "key24": "PhrZD4jsDfYrSq8ARU2NywjwD1f91dTtHPdZrkanAvSdrbYCuqyFJ6fEEYJ6NAfKoRr1zQ9kjvKySG7xvMfD5nT",
  "key25": "5V8c5NzMVUyHULnUxcjPQ6vAAEdWGxFhKdZQAVd3UtoVScaUXQXdszKzmoG6mYEHyGerMQT8AkAWjHXFJ98DKtG6",
  "key26": "2GHCPE3oBmhCBFmwKmkQcmwrYcV6TgXk1oDz7MGkAeUn63pJamew92ZQxyirbxFDcs28iHPQQpmQm9PvAHGjrExb",
  "key27": "2CKUHXt3P1PFegDUHpVtvrurpX6rkzrhV19RLR8eGFZjazynJKkTBzFDBXTmJHjmCPQiaKmP3dyhyEWrp4nzrmQ",
  "key28": "4Z4Wziu7ypyDqDb66bqHZuUj2Xy7FQWqsa2ktF4naBjTrJGnMeGD9F1TxyEceu7WjtGmjrP2cNZh7wP2821zdLEz",
  "key29": "4hwWFEqGwVHFoBde5MhLs5xUu7AVuKA54XDpCNeaQoJk5RindmpAkntxzJ1pW1BuBEJFFrQcTUMbtZuGRLTK7Sk3",
  "key30": "3KgoBptg41nQgWTwxDpw6GQzp6Zb7K9heq5dxvYuQfz9hqCQZNy2d4teZUzz92ze7ou6jnoWTTkdqrCjJrokBzFD",
  "key31": "2JtFGuaXUSsk7K55ue489Ca6SaK86gw65EGtba8ugdWXh89Rm473evi9ZCfVTpeuwea1gXiKsb6BhCWU8sbYqLo7",
  "key32": "dXzKwQBiaF8L7yWPxUcSdr8Sv2CbbBDypoxJ14JBWtRqBhuVZsYV5s9YARz43Drj1RecmvMwzyEyKzTG1zLi1Wk"
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
