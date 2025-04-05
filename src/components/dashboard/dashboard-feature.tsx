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
    "2v9pn4CiTNjsHntjPvepUvWRc6TgDfJRBfd1jPn12kCZkSWqxZGJo8p2eXkQEwCzfYZj2Dj8ywtebqAWZ7cEr6jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53akFmQBBJ3e4SMvUsMjG6f5P5Uv6Yidrxxf3z2aoaDpgLw2dBxrGH41cnEPBMmkCRbSCZNvZ9oPNbB7rC1ekbJq",
  "key1": "rJ1RCh4DK7iX4pVNcH6S6ovAbPm6a33DZfFBEP6a3LDcdh8yEWpqNRCTZYYgaUvAp8yKkQ9wzmQL9PcexP7d9iA",
  "key2": "4AgmnZth2cVdd2gKHBa5dHXjALutjFjXCXjfvsd2C1viaprXmLCKmS2kecsEM6n7ny9rjrzrtY1RJP9FSXZoTMjw",
  "key3": "5CgMLSvUJMFKmPcUbDkLzLZs9LiD4BNcD2DPYnw6U9xtpZBDbdmgqi6cfZzJ9LTtTS7huNCR4ZNuRjwZ2cg2TPRj",
  "key4": "5ZaT9hE3omeuerSqbpSkymHz6cHTakWtrrGReePQDVaAwRxhE5Ld6WbzraQUSCEPexg8CpAamC5iVKPq5KawWTS3",
  "key5": "4qH4edRKtrwEFvf87zC5VUqW8aooWLD6nrE7oz7xZBS3N1AnqEGqFPZmChbz1qm8Qmqb6RYFfGNXpwES6BDPo8YZ",
  "key6": "2NeVLTEX8okK37xLHPPvsMUiCgFKXQ4L28AsyxZWhQJ513D3UE3ucGEy8VeFV261uuxebFUra96dyttieBtded9T",
  "key7": "2eSYhTQuVxgeGvL9xWVhBe2PgurF5tsviBGSDKhAa7RCZMuMBbfk5AsUJTqBW69PzoDa3acS5mucKGxiPUk6pcFr",
  "key8": "24JDioSKFKj736NRHVGY9w4xMbqTHko5twGKMDHoUojdcGWCBDk2DaJParG1JNG6YUdH6cwtAXDQHSBzCdV7sTcz",
  "key9": "KR8vTopazn7Y5VpvGnJ3RSzn3N6hQiH4v31W5mGf3L1nLjtn5UW8gFYbfsoHpc8vbtpyoMEQUHwUqfLmFLFuyfg",
  "key10": "5PFAoYSGu2UsPC8b2PmW2DK3tjo1vRsSjMKEW2k8RmNK9phTNGx1GYacwhrBEmxLu6YTZpvpNPmuyrbyshTDzpC5",
  "key11": "p6ADjStvjqs9D3kTAeeie7JjDAFchuHqGMp21norA5nUpK16ohUYTuyGsv3jw2r3DuvhKH8hphdPyvCuemu98FR",
  "key12": "TGkAZ9DfkVdbXG9HiwQamiKbUWVoxX4vH5GxWPAiuFkHWFzGe3yVkrnkqBL9HTdsK8kXJeYdiPJQRTmGtMDMPQu",
  "key13": "21N8FUHcYTivEbwA1ndb4Z7t9QJ1dprwqiZSFhke1J8edBFjXuu6jqfJKiuKP75Ea27NzJXVshkDPmJbfGGTtdJP",
  "key14": "3pz8eVZ8apR82iiJuhuq6u3WQxArDGLZ27gZrCC1kzQ5gBHMMKqPQ4AbUREfe1u4c3ZcmiEBJhqjeZoX3APPnPeN",
  "key15": "4Y3wjXfgpZ7cjtxitaAL5frsFGXNwjGGJCFe3JFvADmM9FNfZwk1xHVynXcHykJ6AKsJER3x7ZddJsphAJAk3tQQ",
  "key16": "3rqVcPJij4sXXw6UPKU2o9mUZyvpPtUtgLYb7SNKwDq8KgsDyHVJzNWfMqNjrxurb7WyybeWwg4hZWoMsc2GD2iY",
  "key17": "4PwuxGVDsfTmFabE9CMUZzNwJgsx6B2MaV9zueuvzgYvKwAZ6DH7XWyXN1meh533sW8mzW4RNqR5zXnXAjXZCCax",
  "key18": "44T2V48xbM4TGKSGUq9hS1pZX8qCAAAfnq1CMdMLuxWxhUyeWcQ45fNwNYd7qS4Gqzzo9JZQKKuduTvgnLfC6555",
  "key19": "3Mma78xLKpjJkFZLe9xMdQNGMoHKoRwS52nysXHz9CGBx9qv1VEuYhid4wdV13MagmpoNw4YsGLZ6yb4DvWoKeU9",
  "key20": "5FK4raKU46MSUJpV2FQpbHuKSVNGaCRyncCvsUHBBtpuei8ZHDrm9wHcAFg4enBEzthDQ8ch1YcrqXMTxZeRKpHW",
  "key21": "gjQKy7jNa2PAN2pa1LRKGARn7he4e28BnR5Kd7yaEwme61U5vTboUYrKsT9XDbxUW3oTCqXfzHy2WTJb1wXBqyL",
  "key22": "57sxpJWFV9tz3GzyvbzpriwXBhQjn91p8xYsFi46ZcZn8MQCCUP44uPAa1Y5PXdFexYVPC9nHJcsqoGf5VSb6TLf",
  "key23": "a3XU6gcsQgUtHtdNmr7e29UhkeBwCnGc1g2rwHHGLVfZUKZo1oatNd7hRSEKUr5X7xvA6FgBt7haCH2TRb1tMB5",
  "key24": "4V1ERuEh3yAnaiBfuermJzYoAfHs3AvSizdj3B3oTQJL6np2ka27zGUCztyd9gNzHhG7KborM63y4F37anyCakN4",
  "key25": "thhF3zhNGaekmQiK3G8kpQkuyDw7cUaaKvtxD2Ui3mk4nKpTVpX4sBtLVY72JHqBCsNwUC9WCAr5KbHruPjVoVD",
  "key26": "5gzcQv6YbLzVkSzj4aao7xXbG5BQ4RvUWqLF1EEwJachrgZrtaabpgNBQJsVXHyLJfDMbx1og4zNYQLVmohEjN7P",
  "key27": "AXU6bWXvt5KhnNxXCBGyKfHDz6YLJS9G6tqiVg4CqY7WE8gqitcRE4wqq6LHD6BgU2AYkvopxbnei98NrJdo9Fs",
  "key28": "2E14AomiACPsvLSaSUxqhe6R6pWgiALEEN4FZsrFqnHrEgfHP9FX4q3zAWiTZEbFNxLJu4LrdrRL1LMQsn1o2owe",
  "key29": "3bVEDij8tReuJdPe1mtqzAQZwtKqX5LcZaXLsW5aHaG75Y9Kiy6HEHWrw7Sh1odSGjXYqnpPJrtPfsnFixLt8mBN",
  "key30": "467Rzib3qWLrNExnVQTD1CWY9xBajAZDGrsdwYhdp1q2J1LtSQkaEL8DqqCbRNLCGcFRWBSNSXNk5xWXAqMfPe2a",
  "key31": "Tzmt1BWzdDZmoZH7MkdgjtJyT5Fw25d8PCBUjPn7xYgqRpkU54N4kSu8pMjmHjyYDArfgAfteTVuQQALgBLULXx",
  "key32": "4XxQCmWCFxJFMGqDGawYTamVkrApVPr7cXhgaKFpyzKF7QsHrP5do4zeKTW2T9Ei3bCVesWbMj459zjeTbajK7yy",
  "key33": "5ne8XH7rViT4WpZc4DgEWjEsrXwfBABXUPknUp3LescPuyYteh36WhfR9UEFcipdCiYsS3yA7DVDcNeQ7hWXCVu6",
  "key34": "3pzU3BXqLTfRU6v53SFzmX5KWHCYEB9f6PXL9SGXbsN7RnMhmExHsUKwaCKz2NWTqY7PzvcrMEYmswLwWbJ9x8yM",
  "key35": "2aEY2LSpE2VtVJWdV8LGJ7xPvzdUWj5to33h2M5wGx2EqzpMcCX7FGJ22tte6BxJ3ZitRdkpNDUja59BUSH77qnY"
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
