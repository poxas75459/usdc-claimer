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
    "2CdXYPMzhhK9WdeegNRukVu1wGxNZVkd6VaRGY4o26J6RHkXLpdUZAtwa8bDdzvXudxQWeuY7D928GrzSe7BN5zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z3ywjhbHXQKeYKYXiKiudddPFw91om5jeoujecFHa6fuRBa3ceEjhZZD8zDyP2eNbkLKrTkCGEsUwRA9T9KwxGd",
  "key1": "LpwRfXTibRDJFGHTXjrfp7JWZ8tgLgsWjNn7wvWSViFqf1GMyiTSmUo4o1c3eBWdR6d8t7wiD2m4M6vXzPyVH8d",
  "key2": "47hb2b7nLhDw5ctGQ5MFsnhTSkRepXpRDRaPdiXxN4VheUanrPf7yJiWNsx3LUaFVtNSXJM1Uu8cEU6WPosmrm8b",
  "key3": "3RR25caW2NHjvgj4mikbEfZ8otqcN2MMduSgA9y3hZEhn1EoVTjkBodKuStf9SKN5jQnGZPCf8Em26CxnCu4jsJF",
  "key4": "3AaLctrVxK4RrRnJLE4jDGhpWVycMzGL1q7GPgey5SrekqZg7tEvgczNZ3z4E8Pxm2gEw8PyTAdrzqq5LjecWk3V",
  "key5": "6U5TsztLt3EYNirjTo7iJ39pFsEGYVhD9rA8EZNQJcSstDfAvABFkoipK9SeFRrShGKSaUomkEoej9cKUmN4vHC",
  "key6": "4NEzw4TN7WAhkgw74z4gdmfGJPM3b9LZzLTSYBC8g87t5JqJ7Ya5LKgXTQoAN283hVWWMJzLS6PHXswfZT9iizNi",
  "key7": "3pSsaypxSXZu9JC1xT1fhDhAu2dE5xnYS9zoThzcsi1RNRPofNuufZQmUckvmV5CA4ZWnntudfwVufGPFjvoJQm5",
  "key8": "53n6uTZdi7fiUFRrbkQNtCzhPJqvoBb9r1AkjRs3CPs694WG4KQkwwyCmTTrbtXDFdQJ33q7meGKfFN3tu3HZ2ax",
  "key9": "2A15Ydbhy891u5X55YoNGUqKuHoyKjkWzY6zkAabc7tiUWncLW6DsowiWzLumowNKF6iJEYkA68mZHtUPnNgek82",
  "key10": "5n6VSYkLVEke21RK9ALpza297TCk1gzZcaNJfL9avZGactnm5RfGCBrWXDWhxt9jbK4VjYsxYX6QiqMQ4aLckMCd",
  "key11": "5UiWxy4vjM3MfMxGJJWT3e7KtFNGQycJnRQkKuFLa7GRxRL3SUoPDWhRnKiqSZnUtELbDFfvCWM33WL3JBhsCjAt",
  "key12": "57exM2hU3HPMv38WPeMfEk2N9AewTpEYodrKTKAkN21UqvdMnFZNiLPwMZvoNYzKbz9Y4T99gE3LrK1b4gbbNEsd",
  "key13": "2dnA6Lmv6GZa1rCcUcQ9UmL77AuH8nxAxBt9yxxopjobPttbknDyehrkQhaLNe2FbWDhkAWwxbEddPj6w6cyvgoi",
  "key14": "5gg8cupwFJMhzG4QXQbRG3VSEEF3qTcPjhLgyXttymg2vFikio3oxhdtNGdLpHxLDReupe9AmWiDbXJcdBYJebd8",
  "key15": "4WLMRPzj1pLJTgPBBFjdJoraM2v6CQQEN5HqYoJhvYCSD6FJPvegSMx9RvxJ1HNkh1E8FuwpUZZoNb7fxStsV3av",
  "key16": "3jByyn8eBNe1qVRrZpTZvX82Az1bxbk3qDcVHBgj8Sr2ZXzPPXiwhrn7yohp7mBTYFp4vYuRM3gtT3xS7Pc3p1F5",
  "key17": "5VwXEV2nE939HNZ3ZDEtsSkuBSvzw4f48ExKxefurso8yEXjg6H34AtYXC37vcyXwTJbUidfiRhErpaLCbGUZ7Lh",
  "key18": "3jGWfAmTgGyxbCVkaozL9vBwuebV7sXSV8qiKfojBPBamEfAtjwoWA4t4eM3iCTKTYdySiWU9xx3kA3EEEtWaQSo",
  "key19": "4uongaKTadUmcqzD7x3t3Tz57FJ1YfCedybNjZkwAVpJ4ZSrbtYCzGGYpNsnn2M93VrLprCua2yv91HU5KBCmtFn",
  "key20": "35bomkmxsgdnrxEhY3ny3vJ3JHP3BiZzYPgr2hj8ZGJSxSoUjFG96JaV4sU9oyTVtt8bA7Q1GC46X1iMv8Vgna4Q",
  "key21": "3N1gw3VTr9wdNQTupiAjgzrpeGjChrCeFZsFno2rgEr9m1jJUrk63o4gxSX4MnBfD8VesxjSGr5buVQCPPDyCED7",
  "key22": "5kkRdGBNhAfQorjDLyfFsav3avdZo5YBaxaR2VNFuXU64RHRACDfQVVvfBDBvipnR1EqaWzXcE1C2feQxks8mPge",
  "key23": "4pPtmSZ8J9Z1pu7QJw6uSpvPYP8Dnv4sZuWjNnPpq57wNppN52H7XopcPyStv7ARVvb4s85qdQxwbhP7mMahVNaK",
  "key24": "5pxYvQS84wRMh9vqsAWBzDZkdkuDojhd1AARrpyMe7h8fr8jJwhMceKP1rNUC8E2XCNPHwiKXMdCBXi2sBWfjmHi",
  "key25": "21FqcpH3LwYB4yP4Sw8Wp44vLoaahQBqh7Nao2d2nG2ou9zQBrxJshv55GF9RKu3W94kM7oPeass78yhdcoPoJQo",
  "key26": "3XaG5bft2b3m2CeUu7gn7Qzj3ViVUjm9L6FAtVhz57Dpw8U9WUQG1TNbhA3DFr8EJXGSHjniu2c8ARnEg5rGTu3J",
  "key27": "4tsN5QLuRinaaKGRKXTng6XfUdXxk2WtKP4kV18vRbL1m72rsw2QFZtj5bQFxA2gtHvxzUEiQrLRut7mck1rJ2j4",
  "key28": "5VkbfMhtEGrXbhypeNK6Ui3dty8QYgsVYQB5MshJYySXz9j8zx9ifa2rgo18dVgXB1NXCsBM5Ev75bSFknWsz2S",
  "key29": "5XvShsrybqbHGy7poFi47BRjh2WR3wgKpGHtzvurrNqPibCBFC9XNHuqsd9XkLmopGZiU5uSqAN5t5QTt2agaudh",
  "key30": "2xMoYF1LQsSz2mbd2F3deGeGnTpqEp9ya3yKCrvtPn7a31UUhgdR3mhaFcddRrrpzWtqvRtVcQFPCDRnUe4aUK29",
  "key31": "4xUkYkZcWdyooY92ZiEVrSH5uDtjVWvDJwvBtdhMgP5ZeuvMtCqi8nXeLs23vcg2zGv24bzfF1zcMNTGqx4AVdQa",
  "key32": "3Q2E5kgjuPBXxFh33LNTrGYaYkXKvx7pwEqtk3kG1A5hbvJ1ik2Hq32UmgrZhCpepHCh7UFNt3zy8vx5GzVWPnqY",
  "key33": "3fHKxY3ByLQ8SS6g1HMygDrYkgbzacZGcUViDjQZ4T5sbkZ5MZfFtrL4owqi7DFQfQmL2bzA2oJMWrR6ebjnXDKW",
  "key34": "4FFvASZPgegRkkatB2ZA9vdd78sSdJV4QpoyVHmnfaYRir271tg3cB2VuBpCwyHJ42zy7vtaCxfwozbAKEZjr3T7",
  "key35": "5jnBsqeZo9XTJ3PgBjuhhh91uSLVmuNAh9rKYKnzTPt1NHzW1UA7WPUM6DWduf75EQQhnibc2wK6PCzFyMNDWqE6",
  "key36": "2E6EP4ZREAQDjQYTz1uZeWcVemxPfE5KuCfUfYKW8GQghFtb9FQu1vPp5x36zQyq9u6wGpXGWTL9NdpqUDqeWYSV",
  "key37": "5BJEGCcSxXnZ9aMZEWX5jELHo1Q5KEVNvDnme3qM7Mb6dBGVSMqaBgqJ5ojxCXQnGDZnDjUaXhAXvFGiNUtSU8HE",
  "key38": "UhiAYQVLDiF4E6Rh2DgL7VQEEZJfcWC1kAEyBVgHwKHQHR467TbRGiCCXPAADw4ScxNtGc3wiMs8Eydrmy4uiz1",
  "key39": "3jskykLdgiNGeqnAGGEEhqnFNLVQJtgU86VSCk9dTimtG3BD5fTvESxChbZYM23qmKB3oKjmdNw9C117xWaLKBcC",
  "key40": "2XVkJoo2BqAxWBcDa79T7iVSAy7XUzV9GjN4QWg82YDM82Swp1EvbEsywpQCeeE4YBBZFLsNVbSJLwV3ZqsreNwt",
  "key41": "5L3i8nWgAZvSrwnzM3pe3ex6dmAFSjFL3qvFMXDxyCdFBkQtaGmEJSik7XaFavkfFRxg8JMovSCP6oVaosKgw95D",
  "key42": "5HN2j7Pxr3ZL4qNcpJ6e37MdySw7QSpVxhLywGj1QeFBsgS62yskGmJh8mnjmAVRnx61YxNXqtqSbwyLgeigTQnU",
  "key43": "2J42XHzmmFrLX4UiTM7YJNz41ZFX6LMEmFmgiHmqWweq6m8X6nWrRwwiudQpEsm9M9Wy7moMm6zfTE9gVnUARC3x",
  "key44": "3NHBmmh9YVkZeoAP7EWZyV83FR7kGQLntmELPois413BqqMRRFZHAERPrqJCTkT9LkHo8iCxh8QgFqjfi7ZpKykF",
  "key45": "4DLQGksFviCYgN2dka9NbPfgRZ7YLCTvmRMj7rT6gVjEu8tNjzaNPHDBSpSSchFXfsDpJcetaWQAHZv2t3xvYAQW",
  "key46": "5juxM1YE4s4CvwCEbGr4SDjxJwiiiHbPfLKLQSGiXCzQThZdkPTHzabcoEcVzTrNMomKry9feNAj3okAJqK6pWdS",
  "key47": "4KJYigEuSiZmAxHJdKdTHqgYwrFD6M2oqKakKyWxrvtETbJAre9YJfRgypphiJQLPvYQZtpydGCEwLafxwzWUuvS",
  "key48": "4XRHo3VZF2qSkWWYimjeGhKxxtX3WyJJxciC2EGDubeoKkrJ4e82fPLnAKx3b9WGLCQeDQnq1TGA3R14ZxDn7cbq",
  "key49": "5GvJzJUQCR8aGTwfzVELUxY2SS9ALvnU2D9yqpiopS3wVFzApVSqWJHoYrzvtd8TLV9LkrhNJJ61H2dPxbTvJxKH"
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
