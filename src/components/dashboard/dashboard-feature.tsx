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
    "5cP6J6duXQ15WcYACTBY7pKAzMeCdz87bcNRJpaMy4cVWNWwgjZZZ4CpojEeLgZrr3JvKG9th3AYo9wuu1XdsZPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyvuHPgBoAQ6fEBo9Uhxs85Dn4DmaDj5vFyZfmwj3QTYAYTDJb525htD7GurMeDzvTAeBUHJzqKk9pdXBvbqyTJ",
  "key1": "4Eyuf6NXRMRWigcJGPwNJRqPvzT2ED9yYjCUw7nZB5vK2Rrp9zwduhoQLJkWNgYjjpMoXBhbbzDNSKm2r26xK5fW",
  "key2": "tEybBqFPCp5jPhnXeoKCfGWbirvuGJ58LDG5m84CgWCAPDeRTKz1gPQtqrwmjjS5evvKFc8AoPgo615DnSFEvfk",
  "key3": "2Z8dhVR2c91mQb38AAZxS3vZtUaQss6bcrw7AN1yoTgyVffTx2m1mF7NWQDe76kfo2EBnEXqLJ5chd5CrQ1L5g5s",
  "key4": "3YJPKNF2xULnTdaFpJCNy1yLbaEjGCHM1j4xF3mWthaVgHbPw6nQwpcByH3U15E7cQfkyohwfsQkxEkQsrB1D6fh",
  "key5": "217XRgD3vPYjQN8wdDyZn3DtZkxZCk998RyhgxTTDZ9ok488zTaSEnZXGfMxScNQzASbw8TkhSUSNk6dUrCXjmhN",
  "key6": "4n379u5nky5Dx8SQ44aUUWG1ZbCZADWVGkJBZEWVYAr8iHdmhCsdFJuzn5bxGbupnEcVJLWuibNkrMwhZjp7eiDx",
  "key7": "tsXkBWHwwqJS34ajaQnHn26BexWy4JJF9W6jnuv5qgfypeGPRoM7Ze258f3k52oUZ5tHzduCLqdmKkSRW96rWd9",
  "key8": "aqewsyfoqtfexjy1gKCEvve9Z8USFQ1zR2qMzRKvuUixZQQ7k7dWMraWsND7mqbjUPRNZVjWnpyaamDXULEe9tb",
  "key9": "5vTSmRAP5zm2cw96zR4hEbqkpU4LjKGbX7gNQFveRRihPkrB3gVmZqJ7Qk46JfdUVTwdJwxg5bKna4Kw6WTEsRwn",
  "key10": "2BromU3k7CmqskX2RuG3Ksy4BFohp3nngo3c4RJoqUukgwWxShYB3j4bHLsf8yCDfVjMuw1udy1n1g2hef5Dxdo6",
  "key11": "vAiUqLXs2s6JZxaaZRRs35CuYyDQL4uUmS6AEZjTqxLeU5vFZUMTEn4jhh3dWvRFRkwwhDpidMkJmpewUxAPKLS",
  "key12": "4nQ7FMaKy2YTYvrubEquynoJPdydxdPJQY4zxqghLaj5YCnT9eDva5H8tUuieDzXbEzsnPAFsKTQHS2JHtrV3CN",
  "key13": "3khzQWCCMjMWW7AcHZvaQBrTkbYCc7FsSGh2zwpuYD7kJEM18BK9o63AAu2x2R4A4LWAAizCiZZDaW82x4h3M1M3",
  "key14": "bizkSSPREP91sj32eEWY9naMGnu57EwkrmD1LjFbdBHTcnb8EdLzqYZE7DSeZVB7j7YsmULuqJAXeKqBGPqg2v8",
  "key15": "43tZ4dQc8vYQcKTUTodZwNj5cYVKxLsdTDqr9ttywJUBrS5Dvxo38aymfNwvRHhyLQKNwHoMAF7gcXqWYuQi34Uy",
  "key16": "2kfXQKZyGNbViQKyfy1stFf8whXpNrehDXj65XmWRQUJZ1g9WgweXmtrKd9JYDNrJJtZvmDVKuTHqdFgwMtG3Mg6",
  "key17": "P3jvDLraqaZoMFfCCdnfxEdSgxp8H763NzUzEeM8qptbA8sjL6X1dEtUjVzCefJwrNg91LhmLLa4drqwG6HSk4N",
  "key18": "4MQhjxeETa3oxPxPW7wqWYTVTtFAvzWHLqcgUXQqHknvXuMFk8ZWaop3FHTcruixWzUxkkfjJgv1CfeK3UEjSRJn",
  "key19": "GC37DL4yxSoJb6mhQReuHNfpHaWDwSf9S3TMru3t63QbGtSVYRRRT5MVEmgTSUVPnFyPRh89tgnfPH4QDwz5qy4",
  "key20": "2zNCNfV4KJ7oc9AckLTGzgSJ7Nrimbpt5jQxTQQmmCPYsWGU47Z8nG7cYaY8TVEh7SJ9SxHCSk7XFGfqV1o3VLq8",
  "key21": "9SggwmqfarFayzYdzVQrm5A2V6LjKZomBZCic1oNnX8wSn1eg7CEjZTjmkrGzo3oSXnH8Pk5H6UVyDbPK4ufRRg",
  "key22": "53eM2jNubu4NRM4x7N8s5RzvViaKQFPLPmnJDjf7Qf25UuJ8SnTgTcWX9Emkx3DVTvtSB5o1QEEFhMbWqQNs1eD",
  "key23": "2iCrFXyZ9syJ8eKNDham6uTRKmhBCJGN7CD8iCs5pC4Xt5v34DyWL4vU97jeUe2ZPQF5G3RKdaLMRE4AdmsAjhER",
  "key24": "4wk6EN8bd1hQSEEhASfaCAHAqD5hrkq6pAYWAZZAr9mkDfxd8uQw7r3LpFkzjhtd49sUEqiAy4rF55L7gxgxTJk2",
  "key25": "2x1P4z3f37ttvjQFYopsigEyGYUr1D9LFYn8CspMfSBYTaCzyUZtrtQX7hVeq6jpu1VU54w2gh8kqC7TMnHtkStQ",
  "key26": "kRsxJSEztWoMJGTWSAfPQzytAUjAz8VZtXsYSzTmcLFv3ZqC82bPZE9ZpASDuC1yzG5GJAwinuvRg5aCXbEJRfK",
  "key27": "5Cg8S3nbuTg9wEL6tcVtLZiGsvZJKbBT8zk7WLeP86iafDz9pfBkG3a96jc7bjw9s4jKxWREmfxZBLQhqG4WUb2T",
  "key28": "4PGQuGpHfo71A2T8CiRyFHHPDQ1QkGwj1o2dCt3CqPdLviJEDjeiNYh7Uhpnhawf9XAmwSQRXwBSNmjpGZLMybqW",
  "key29": "49bnvs98EPo61nMefaU7UcJFnENgQkvJ5gBisESjvYKNJAc5KUsTG4imDH998gdQa7KMt48xyx82Kge8ZMtWtygi",
  "key30": "36LhgfMfXRaAw7rDuVYYekTgbfCU6jC7CTng3mk9MTvG8qk4zuEZRA5HmsnHJRU9XyLY1LbEs26AgenjFm6MovBm",
  "key31": "5SgZSvo2JJZ9zqYEQPcZ7UMFJVwujNmX6UnN1BcFhnJa1Q1Cf2mkzhg9GqPsySwaRtz2ytf6WaSWUX5MsMn3Kvcw",
  "key32": "2dbZb2c6DKhztnNu7Z426tdatiavgb8Y9GcWcZsrU4CT1JuKC4AkcYFwWHT6WNTxRniUex2bMf3Ja3GFEZTjcyPp",
  "key33": "5vr7fzHcqAGWeks7hVisoVSdvWfCuXkr7QbU4GTEjKzDHaqCqbnoWc9zk4Nt3kTgspqZUQFUrppwAedSdpVh6rMU",
  "key34": "3gEpnAGawVTNAfLpQUJW23dL7FZn39JYEUacZLqrjbCsVj5MrbNjtDpqgutdrUP1epe1Xzt2CwXvobJNiGroEFfm",
  "key35": "2ZhLg9zDM9ZF6LF1QVxvXrYwGqGvTotHB5MzM8qF2QMsJyaPfqEb2bayzvsz1cQ1bh7mFwwdpZZKKBaTtZFhJQH4",
  "key36": "2s2VLV5xhppStBf6zsKZZxDZboTATTv8JSCaapqRLW4GQ5XrmdWKdA4kLCVHsNSQZsqfDMorZBWq86f4eAYYBBxR",
  "key37": "55RdS3UWWSCoZ5NVZ4Cx81qCQFBeYzeX4MrZ9sF6pQWi56s8ypB5uj32z1K3DWbXCYP5Avr4NDeDgS8yQwsJgCtb",
  "key38": "4zVEvpCsGXLJgnfosbE848gY8yEkB9RXBkHzBurRcGZ7C3qE9dVmtKatwuvZ95aHjwsfvzLG7c7oCNAm6n6ycP4Z",
  "key39": "Top7b7Y4FdX8WoPMXABYJNccZwRjbyHa5Em6vpvLmePP3eKK2me7kPSGmN8QbBGiadn5j2Git6KK39QQF5L1jC2",
  "key40": "4xGQww3YAHfXLeatHkebaMET1U4U7Ehjt1nSWa7PgWsCKgNq8H3c1ZqL43Hs7J9QNk5ZsDy15QKkySsNPJ338D2G"
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
