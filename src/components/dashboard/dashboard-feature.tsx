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
    "4UgoL736Cfwdy9VF8su4PHQMeAgSpr241QZ4AZGYsBzTFoLxZYRygaXcC4smKBDmbKehqmkNV3SKCqETYya1tmra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYW1g6DozPYLxzyLZM2anTH5K3WJjvuhtVotcScLsLpKNqvpVMFoBpTpQQF95F9wK7pYFa234GzmFRHXUBB2ETi",
  "key1": "2SRR66oQLdYFnWTWrtsjy34zrgXLXYnSe7pUqNyucWEWKaFXR6g6L57XdjCf1xgZ7mfbcvrxtLC6nLxDhDdqZM7c",
  "key2": "4sWAjQaVwTYQt9ABLtGySwUQ3f6Tm6NnvMJ5YdTZcHxtsKvJRxDKJZq96BbzsgEzy3dsbaMgdyn6u3EfcNcsXj19",
  "key3": "3kPHE8SWGY2TVu8iavLB1eRFnCVC5D8JvYuHXtoFghcj35ZXCUxg31pKXoxKBu4MhqfFBf2KQZv21uDF4az5FCte",
  "key4": "vDdGoYHRTpJFs4AZPVs2qrnozFejnoJuBUrc8G1L7E4zVWfiP3ewBqUwjScFEKPenhokoJ6ssN38qpbBrmVcYVh",
  "key5": "23hNBkWscxChbKrSNLCbmfC5upqZX958GX4SC2mrJh4wDGMiCdcCd3oBTzWxztUtw5wNFBtB4mnNiwPScSMNNQja",
  "key6": "62M6F593JprTrNR3UeAFDhJKjDNUfA4vqGzK4V1T3XLTcWgddxAu5aj7gtJVdtz7wzmGvoRApp2ffGzmvczDwEE5",
  "key7": "4whrc15qnKfQjC5y1Juc21A8nV89wA6BKQJvhzSPtabnRWz89CMZLWjEmj4fuZ454oVHR6HCHV8VpsZ2C5hpq1KS",
  "key8": "4X7TZRMFVZwDkzkyNRCqVGePV3nemT9u1eQt7RYzkVFh3ue1dCAm8gHhhk4rfb3NLjL5P4CGkJ1SdoUCczUpAoUe",
  "key9": "4T4UHenJkbZPCM5BreEFu1Cxxnm5oEbzt1eFYDDRhYuE5REZcLbwc5A857Ma8Tm1VR42ateDyMXDKaucXZFsFXty",
  "key10": "47o1xFe2msSZ2GaseCsreXnhmoKTvvtuczNe234b5ibJoMnXKkhScMsCCKn3jC7VgDBWJcBam41fe7ZPcKXJiEpn",
  "key11": "bXsh2xi6gnFFHnPzeYEYfKxuR19gZevs6zE5uL9jZS88xUjS8kboCehbJsYN7cMivoDML2FCd1ZsR5JJ4Qpd7qQ",
  "key12": "4Ew2jdYUKsbJ1evHbYQAZ2mpC3aQNLRymuRsVicFVdDx7ySYYritKKHyN4yRSdiy2oCBVo7R9wycbXcP8ybyc4mE",
  "key13": "5B2sQVM1pdsb9mY54zPZcXbqowraiz4J7ppcM4DjxiHPH8i64dCXaSsfzkqr6MuGUhawniSqFVtBXpGEXjGvqKut",
  "key14": "5StG4Fb3QJkreF9AaaJiJZeazGqqZ1yMo2iRhnm8uV1ZfzSALMFC9dBXDvHyYVs7bQcZbvoT9kwdmKackTZj62eE",
  "key15": "4KWCeoLFuDEuovpR2fzbpUtmQXBwRCJDz4HK59wmsNuknZyVaPxFbFmbDSM5L5GHbiBhUZ5GCPbJdMCdTfVR7EFH",
  "key16": "4YGKG4TiqucdxHD7NfnmQusj6qiivrmmhckibWZaSTbjEHS4aazaex6b9G4kS7QMnQkGiwm1ErQjqcWCsRogpB3A",
  "key17": "2Lt9hXuX3zSK9ZiKjnXJ1oVXiaMybwM2LQCcYjR9tM9xzNKURdvmLSS4xXDGpnMMB4rWE1GHPGGedQDc9wGGSTBi",
  "key18": "2D5twdFX4dfTywFipMx5LF4eKSPC8VVH7ChXeR6uwSGRP7Lp5ohwcnTwzo8eF5MJZmZEtwv6ryqDKCK9RaGM6ujH",
  "key19": "4CbgcQSk4y8VJkqZjwrc8kTS9e9m6beaYA1Ki2yW9V6M3k4XAcke9ugPs4D3ZL3ZqGo4wPAoRSrCW7zDhD1f2Nv",
  "key20": "2huDbL1MMbjnRHYNtDX6uDCTtnWH9jePveFvKqZWE4T8FMcoi89UQfpp5jfyWJiRHFaNLiCAePm6biNwNw3v7YMc",
  "key21": "2p1voC35PMU77S3pXfPLac2NHLPZurnwTUoCXVdPbh6iYrsULrV6h1bwGtcXtt7fxTwRLhEB1bTVS1ine3CUscJL",
  "key22": "5CwcG7iXHQemcZpdJ8augqyASuGiFhLfj9F1Mg7epP8WSViuhYseN2ivpH2nMeJJQoLGKzWx1yCbMigZSoSjSf2U",
  "key23": "5E7Xd8T3RXknP2TQJ7cyZ5pn9zfsTyokAgW1DJt9wacSXY7nvVDKXajxPQzdemAmQJwwTz1hfKP6sAsyXwHQvdoT",
  "key24": "5yKUD1u8rKTk4UuJqwuAzpU5MKbccEhcJyXvL5RbL4mF1mTu461yd6BSGRjaFkkii6PQFVW8Umjem4pQbBSiGFuX",
  "key25": "3moGMqj6gd3F2GiR3AJF4kJVuXWcF2AnFpa65Qc52RfxuJR8nGrdY2hHY8TkBQHPR4xTpYTCAbew2Pd5oJNaf9Mv",
  "key26": "J6fvmK92YxBEnpadHcVCdBdH8KgitUKpLuf6bghdyNAQazDB4e2iUQmBvkmTvZyw4jXmeCNGiWifV7YSbvA8czA",
  "key27": "3B3pwr6qEmagHJJo4yKWZqgEWVjM2BRrYb5cjwpSNHNJWMneauCeh9GzktWYroq3RXJRgjjbMcoiYAwHihV9pvCH",
  "key28": "4jv5jgmgZZ5KxFUqrD8ZWN3umDSrURhsR42AZgGCWSFf2FDdJahonLSmKn9HHUCfqwsBMCh666CgiJ2AeUgVqR7T",
  "key29": "7kaUtPLkJwoSKdczKQ4vJpspWzdKFTKGLqZX8AoRvDviFDAZcbB4iHhJbh6CvNgwtUThKcMzvHskLM49pTtzLx9",
  "key30": "3rSWUSMW75KrCdy6twnM79EaT1KGqJF1FJWGAUAfSwhXQcj4BFreccKxJJjA4hmzhkayRXmL39oxQ7rrb4BGvhSq",
  "key31": "4dHVpathobC9VzvmMUoDBq66nyLZYMkDwx92qNi54ZQoxpan3uCeygzqFXq1qzjBYq8g3rAnjohrtjsZHfWD8ijx",
  "key32": "eDYxqUpnUgyD8jD8FMsUp34cyNGCHh1picn2LwoHJhg5Ysu1yP5AJzEPrU4mhKTBppUgVicTHnu9SZLyeVRaBG6",
  "key33": "61oeNwxNh2u3MhP6yex41fD7hvWmKSf1RzWaerFUrLPaxFsKbRcg1y7ibXwM61brchxLzb5oKxT7MuFWrMGTFedv",
  "key34": "5o28zHxTahy4WSmZ3php7vudHQ9J2RPpfLCMTk1tNsNSKn1Ce5TpCMgyAtvgdXPT7pmhumsXJSLq4xwELNRit3Ga",
  "key35": "5STk4YiCHhq7KTKX92UxPbkSWMJw53g94VvnMBqHyU3ZzLpQc5W7S7gxVgtU2S3gBDNiP9zNevujxWzbAP5RcfYA",
  "key36": "yDW9cNh9H56rAKUwekbLUuwDZBmy7e31zQDJ8khe8WAUtn7TTBQh2Ksp11s5MzzQpDqZ5TJ8hPvBnSPoM71xXMK",
  "key37": "48PrKyQhesYptXHm4DryDDjT5s3U1JAg1qamsxBLeUTMXor7ag5MmsTfAdHeT7J5M7rydgA6nMc1P6vdZpXHMemL"
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
