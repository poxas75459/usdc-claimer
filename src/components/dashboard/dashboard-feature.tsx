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
    "2AYbtk5titpYqocZkJacZCXtYJsaKNfvfjHTWFsXsdYCu4zaTHxxy6nfbzCGetrHekntKy4RJCEd86iqo63F9YqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQQ4qi1CWmafwrxsFFsVZts19dEELjz8SQ6SngRRLvpHKRfgdZNwY5y1KQ6zrDvUHNKUVqRqCvVYZmavEyM38QA",
  "key1": "Tbr9s3H7nFkZ9z9BTfLSHzB5Q8MgjhieKFTyPynfBh9KZwTXeuowSA1PCFg4ixqrtHec5kzyscEpvyza32D6EQi",
  "key2": "GD5ewQeWh8bbckPQGPRGKubWe8q3aK2YMteBjxNpPuuuG7v7u75dLGWsgcBfzMH4TwfCvJFGgDyEW5yxL1RvUWa",
  "key3": "2LaMEzCx94wL7KeoST5JvUNu6UCzq75bh4JENuV5PMwR69xmH5ZGehwjY6E63Cic5s9825XSoiBL9TmAaUmrkeu2",
  "key4": "i7gYY7cZqVvPhokgCUe5PCf7jAysbHzXDUc3Q9144bwmuAzowxzesZknpJUjfbzkTCsZRHceC6MuXS111QrSwXs",
  "key5": "nGJSuQyzXBCf32o1T3KAXzFsnwPE8qvcK16ACRHBXLvRPo9QGLd9nimFRs3cATASFgVYQfQnwAoPNywvRrCxhCB",
  "key6": "3wqsi1jVN5DPRqYMzAoCogGnb4Uyh8dEdshdEJAmXT7BHqghUhfPDk2wwEpVDutdLiKaijbDNVFcig1eM6WkSanr",
  "key7": "3qmrVmyMSTskzJ4ck1HWcfpuVGC1xwsrvYQSDTVxiHGFMaLw6Et6pJMmiz4xY8BrLPXZ4MaaEsadYKMiJMELdX6R",
  "key8": "5gm9CJTj6bztXQUFogXQMBm48Gap7QLZEc7TxjGsm6rqvnMrnbWxeuCYBA66ZKxvn8vyQkMuxX8yBHh8Mux6oZzj",
  "key9": "4QFnGVLi3Ag93u794X2LYKhneDhZJd2puxRW8AU68yBcWfpBrFvsFkrUwJWd4QufqKEvs4FCFkw5ai1myGxLqWjE",
  "key10": "2h8fxm84CoEWGJzpoQPGURznERRsYWmXvRXYYMF5AeFovtr6tieTxMJzk9uhSKNS46BMQ8KhBcQP6Jkbp1uXHEkz",
  "key11": "3fH5Wm5nF463Vt6tfrosxCPkYrkc2FSDWAwhosj6mYJmCwRRGFhrY162UCigCf7a1EmrmTrSxx3V8biYmRQfSCAr",
  "key12": "s2rxqU3w1KJ4L7XsXeNtpkC4vDkK9cyK9EomZz8Qf97Z1mpqWbakVsLXCzoQg8uKeMmQqisRcViYpFXwcJa7QbJ",
  "key13": "43tJciRE2CCiDgEFZTFiNo2RaXpnoMn1D7EvFVZK6F3tUfVhv1wEuHYePnqX3y4aT54ssVwCDW3cFmq2rY8aRDjb",
  "key14": "T7ZDuCJAj3fDfdUAYxe9VAJZpQiJQ46NNBWK3xdz75xuAN9WpXDMonqV2m6RWGc3qxTTfrfBPKNZwx7FioZEGJD",
  "key15": "2m8wYc4oZTLsrsAmJXdLj4HbAyFo49mt52WJH9yzcTTkLbbhy6ec2ZVpweFfz3q8u5itqK7y4QGTKm14yR4GB6gp",
  "key16": "2r3RicUtPhFRDP5faXsHhBYUUdYRd7qEUakyUySy3FcPysXsRgUGdHjytnxUBZngeHTL4Y12wDDtzariWGKzdToN",
  "key17": "2kFvH9LCJQP7KF6v8jJJ4BjVgZxVtBFP7AbX1rPy4HMGTW5McS7b3zFvCr3umHNoeAK96wb9qM51YAQKYVhc2Got",
  "key18": "3LWYNDoPkkDmtsWSGPJq78wN48tMY67sEvfT6jvnQixaorRQsPPh6AoBBTBxK1CgQUgG33ENZvQFW9fS513RQgm6",
  "key19": "TLWQ3sRXjCF3xT5cus5TUE1STVH47nKeW2LTDKsFZXZLppCqSg3JUtuUTYJUwsXwtF1MTESKBnFYUsNP8nAqH4Z",
  "key20": "4bteADvuX5qssJ2hJp1K96S1GyfgkoSvn4ihx52qSeRAqhHZfp7nbs62XjyfQSRgHq1m5RvDscw3oMRBBXhDw8X6",
  "key21": "3PQg4PbWeSPLvHDwufLLhrmueo3LjmbKHnrfpKonuW5ekxvCFXwpmHs6E1CfWj9ZEcbpRu24iU2oCwJwtdYKqcNj",
  "key22": "3BB5LR5ZFa3hELPD2A7vKwXJJK6pyWvCo916qgqBqyHpXPVKyDeR22zWy64nKAZeWgajhQsEZ3TicxMufLdUJLGh",
  "key23": "27Mn9tWgAiyQD4qULYZUL3vutU8MkHRY9bq84db1eBo8CS4ByyCMkZpxmw45MWs7NBScVqUJLh9cqF7Qbp9UqC7r",
  "key24": "26w6dKyjXjNb9Qs4PrNkf34CSN1EkpW19S7DLdG616t2QMbp37S7JWxaDJdMvAs2amN1uk41HdQGcSd6VWXqMQ7w",
  "key25": "27boDpqf6XW4v1LCeczNTMfN3DhNaKwEctwCVXbReeRapyrReXuuX8vLSvFTWqYYURRWwWEw33H6ReSPkMxGZuAk",
  "key26": "2DeXLUmBNSPGGChcwTFCL6unQWc4REQ1wnnSUbvjgVQ6Xbmk7vrxXwoHTkyFW798xAb8tvCfoRcGxRnFWgHK2mac",
  "key27": "3DBxC7d2ofF9zMvKni59WSY9Sxp6hXiJeEnUj4vtFg9sPDVrLds12keR5GEbWXQJLbGthRFtwn7Drq3kt6HE6Qem",
  "key28": "3swJFFkYNmwaHVGbHaYjDPq2QjJx6Sg9z4Vr2geDmxNt5FQHns2zHbgVjkUjaAmBRZfS5BT8CQfsHR6Y7tRWGe4T",
  "key29": "5Vty7cKSgQSoHJw9HYFDQYCgq44WaeQMvvwLxkAcEuvHh99R86FS2quNW21PZR9M7zTds7hAZkNbUZVNYDYzh4cY",
  "key30": "5LP1H31CtdzoJqzZuYAWjjT7deAHvXXLarxxpPx1XntZWycNtC9F9GyDATfuJyVtJReVTQT7NCYNew5fGgzXWqu1",
  "key31": "2NcSQDN7NJuU3hhTQWKSioHZkbzfEd5u7HPWEyAEyYjty47g8Tr8bzxb5iiHbrvkFHnsWedXorR4rr8YgebN9LsM",
  "key32": "5isnPNdqcrpNvGEFvbWo1YYhwfNfrjxF8gM2XWnaAR5W6LdbbpCg1REVpw3cSQW3L4pS1ST1oPnjuhF6VXjHXzSw",
  "key33": "4U7cWFcxDNbkZL8z1HJXFxgr2k3hGWu2aoerR16LD92vBGTxQ1WMCTzPjnyGf8z2DqDXztkaP1UHiKZU3RY7AQeL",
  "key34": "5m4EHtE3EBgPrSA95Va2ZpQFh5XPTgWyQseZQm6pBCMBBUcAtbrPzfWgTZg3nVFAFbF5gykKmBmraKvgo5PpVjcN",
  "key35": "2MRtMVeKjtaQbiMsRbE7JqMcwLKekhNvVfN5Qr2xzpZDFiWD5t7wGEgjvwcZDSgpLKqJ6D4BFHyjGDpw48u7M9B9",
  "key36": "3f6VogqPUHMLmTDnse6rArEGjepEm35Xi4ydrEEbox3d37poyNLk5mYwwYyw9BEtZR6AV2PMmXUURYCBRsWMHHME",
  "key37": "5b9ExDBZ1bS4gpgzjohMHTbAcwyW1vNX27zTb3ZLC2pQf1DykkdB9R2igBuJn2qvtHeLCpQLaDx1VpXzhJeFnqr1",
  "key38": "4rHS2HGpAJoKyvQsGQW44pavx6bFULxhYjb1ksv5yANU3ZJHLJkMBj2bMSNZEuXAvSMLvPs2oeLK8nQXqyFQuGgC",
  "key39": "27Q5PBw7fTCNSY2EYidafCCfCpMbsCmft2idPQWWBykjmS9vzYvxq1EaKzmjMUzcWEDFXLGaLBztoSuMbnxmkLYe",
  "key40": "5simmQNyajCSfLzjasa36qGAU3tHL7gF7jr7BXWt28EFtD9cvz5sRFk2Ug3SGS1qEfvgqLfawEx6Vo9goJPwoLXi",
  "key41": "4Ts8D9U9mXu6Wp4jHGYKQdkZQccpPZQaixk8Vpjd41UDMYwKUcQ3APtXRMd8xBN4rSNSR4jK7ThwNVkq7sBoTex3",
  "key42": "38NZBgcY55KjH2fcYxcBgDgnv6pqTQ43F9YAktp7t3MdzQnJVn692wPM5jHTCdEunhfs5yKJEVNmHBZD675Fmz4e",
  "key43": "3x7XsdjjUL5e9TNucMuCmWhFnupAL5Be6nkKHrXehqBxg23Kzi7BiXbEmLrQbxSWyq8se8kXJPAdh5vpbcQG1WVZ",
  "key44": "2z4FxsADV9NZWC3J3LuaXEXZPiaZoPp1E7LNBnQcMwGAPdseZjh2kZ5HLdnxLyB6XRWG2xsbtWvQJECevA9SrEP9",
  "key45": "3awgHVpUerNb1LRhJ34Wnsh9siExdcuo4BCeuotEdxaEHzoJ3tnzqgRYLMBX7SiaBvFkp2BJZ3EAiwevgox4ocXv",
  "key46": "UqJ6tNWA9QrgJ2PU9H3CUe8N4wVWPTLWJiPJmGxFjRsDm7L3CzuAKQ1kUSV6mHEqMUnwd3ewNSxkijd13cGHCrG",
  "key47": "4otQUsG25AtRiEkDWceL2p1etECrXRrygQD5r7bj4DQ7XrUD3NDGCzdUBZ84QucVqVY5VDEPDTzqnWbmRJaRnJ9S",
  "key48": "5S5CzWmroGsdGn1uzR2UL6s8H1HjMQo12929eETLYViaHb963uRuvXRFL5j7UvzHSaUGfW3SAgein1ELeBW4Jguf",
  "key49": "5Wcbyv6fn2J9GgJ6TVBLsDF2LTt1iELBedGGWJVZczXNhD7h6Pj83nwUHC2uPENHnYzRUktjD9SCJF3brAqiQtCw"
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
