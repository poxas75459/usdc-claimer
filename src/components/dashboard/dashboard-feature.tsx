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
    "25BAxjH3MTfL72m5yahTTbpX4CBE8fmsmMX5VhC7oHnDQYynq9oKausDckMmfy9xyebB37PAZq4Q3pybYuUnqYC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWWKbz9V9JtSU6V2wCgKfnoSn6d5zaubjNgJbGSNzg3jwLBa7kdNjgsb5Z5WBJcr95i4ZrMUBhMm1J6dLiPtqEh",
  "key1": "2SfpP22Nt6mMFGmCngV2j4EdxWvrUrfxwxkCu7G8qLidpygMwyDxGSxVitbTLz94yC5TXCvkqVHMGccNKLK8KX1U",
  "key2": "35An6VW1f4n4AV4YFVwzveyDNVLy5hxb6ffifGPdGLcMfHSH7HmjE2y1MX66DLwseUGJL9Aw2CBKwrD7X64YPTQg",
  "key3": "42yMUsjHcLY3VEb5oYbYRcsQAP55crdc1oPS1yCE2xJAYP8vxscpwBvcPT1JVuSHKDUAxo4Fwtic17BRCfZyZo4Q",
  "key4": "4RKVRzxd5CSszqXhvXgL3NZXBnS47Qb4Z58LgaVBgtQ7XVyuVLL3Jprtcd42myBrGb83wKwVvbynQhbD2s4Ld8Mb",
  "key5": "3aLjkVhPoRhNDJ6u5v9Q2vAVErJm2Ti23oZxPkKU92m6j7baNxLZx1qMwDYAC4sigDMwxydHbMGBg3ZLQ1EGe5jo",
  "key6": "3F1V28VfH6PZpocehrkNHKUfJA1nJWJwccB1zkjiCYtyp4njzkWoF88az5cKoyymeFHMifDWMxzsAYfk3eemPnpR",
  "key7": "4FNfju29mHPbdmXiwwRs3Gc4w1cVdnQJg9CXhffmg9b1SFwvabzdVGjkfRhmN1iFF77jnEnR1V6WzNd3nmYJEnx3",
  "key8": "2zx7e8ATqPBJAMd1c2RuXkxs7xJTaUSdKPcoDU7g6c1aHSctCmjMv1PgRzAmrkY2Ti3hbLwxzMbXKZaM75K9sjhb",
  "key9": "kX4KdQGZUTPWSw5CEKKMFW9RMpoHsKfaaYrhKyFqBD8c4ntj1Ro7wwKHMwamPxEfs216K2F176mup2kNJPruma1",
  "key10": "4M7qaTXzP9rMLmNDpH1PSWC6giGfW1R52eCxh8F7Z37jxfCe84ZZZHMaewtdmtkFL7k2K2NGRtr3Gjfg7e99WxNW",
  "key11": "ELLczwbXbFATJhr4BjFseD5i88Hz7XNKu9cZjKuyybjcUdDfew8mcN3S8UTFCYsN4WdJe2E1hB3eP9DKDC69drv",
  "key12": "2XFPLcivFX9n5Mk8q5zPX7TESZKa6u3i8EcF3gUa3Gnjv1gkHasuu1z3Z31J1iZWLhUh2kqdtheyc7svvGmP2yqH",
  "key13": "36fkZ5UgNLiVwG7ecvpVfscsj97QKmVU4c3ou6F5TMPhWfyJJUcxTQ8KsQ62U38Bh7jfZVFBy9jEp8aceJAGBEnh",
  "key14": "46XMDhY4KVCHxVhK4EnN3enTxe4pbZCMumMXaA1bCbBZwDhNKkUdAZhnnGFEMYFCyeHKtU3yyfuUF9bJtqnpV1au",
  "key15": "4BKHWZcwDoMJMsFjrUuUiKe3u6zosyKRH4vxonngpMwAr4xjKsufr3XEYKS2eKQyXYboGc927oqEXuAjnGGPPmWH",
  "key16": "3DE6m94y2LNXQm9F1n8YRcGJ8m3cqBkgEbFYvLD233yx6oaWwmfanN5EMaTteTJzTx57sU1yX8EYii4sa8Z8BZsJ",
  "key17": "2irFn5Z8NYHMqW8Xnp4KPauTaLHYU3iyXhDLeG6uFExyweecxup7Gu2u73Dn1QMzoLCV1BvrTksfyD4LyesRrfr8",
  "key18": "5BhhcnWTdedDnSRc6JoaLH3tEAtxq4HLBfA9XEK5v6dvvfLjnyKSuUwYsNkjBFtTCxQUc8Br83VAWgkZdz9yj9Fr",
  "key19": "4g8RjEonWVb64fJfKCVsTd8C45uguBZBy1kMd4jy2qP1WpwuoEeZArKBN7MunrXVvkBM9F4JEYLNvXqvdHkk1onW",
  "key20": "5kYD52Jy1mY97zjPxE9ZKoFGQL4Nj8PrYG14aY5iVUec9oeF6ZNi66fnYHvvDonpBhFXmLSWAnb6kGM6BJ17CMbE",
  "key21": "5ugzD4ghVL52R2BBPSqRTEFKPwbGm8i1qmZ5J5jLGTb8bMqM6GpVEnnujtg6V7a3sJ5h1XBQbzEoFnboSZzWTkan",
  "key22": "2mQ9waSyfyyc4zfmDPvCkd9M5UG4Cfq66ZBh6FcdT1our6hsZ58KTvvWx114zyx3HuDJSsHhrtxKQgWX4xS8EPXo",
  "key23": "cKdmapBZwDB5zQt2N3XQkRaLc9FmA4oG1yr8PFHEE6ADp48cmnt4jZDGH9cSgFFsrx6n8Kkt5doWXtH1MXjgQAX",
  "key24": "38twYdKis7qfiGuyVYErTAWrarcENAMGYn9UYr1x2tUC8uh5hWRagcvdjx2SKdLaN4Hz59GGt781HsqmZF6tfHB",
  "key25": "2kGTRYVJ9Fq67G5EMgb4h4D2BwYvcwQJR3i12BuiaMf1JWDqbB4pR9b7pi2TPE5ZwbAyZDS2u53KRFVfcehE8buV",
  "key26": "67qurGQArSRfVAcCMSHJK1wvThvBwQWvjwWQZeKrizCQfr4zreBKyr6Xj36ZDp8cAiGvXicU7HV2vrB6B3jrxKRL",
  "key27": "5mfiycsnevTBfE3UnwEdE8CZTzRu6eTficE6zKigEZJsJKw5NJLjrqstnu7h1Hhb4eybYS6HdGC5KjzokEuDSnyu",
  "key28": "5pjVxNGfBc3y2MW5PeHw3y55dX9H4HaHij7iw5nufeeuwiVEL3jnoqWHyuK4icq7C1zobgN6TJgDF9AS3xpqQWef",
  "key29": "3guEcRxVzD5uYCMU8i3dG48Qj99WaQJuyRxvCeEKSWd86e1LvbFfcQCdWsG1LXgid6NszdxhqZwsaxQQS37R9Yt2",
  "key30": "2b8Xh5RWd6QhVusVKEmStqUNLeo41ZoVDE5PJ62NqwHoTRkKxUNZxjjJ2MPdn8YfM1cJzZwyhYW2AdVoVRU7nnC6",
  "key31": "2TWd3jGgANfmCMFdTzxqvYDJmhPzynnjp6w34JtRBPhMte1AK1BgfCi2k8L3Uj5Qph4ZgzJEQ9uY6BwZuaVTQCDY",
  "key32": "4q1NyEZfSC2YMaaDpUakxj1WduDspH54mHA57RjgmhUgfmfT3iEhQD5ZELhqfydANs5o5n677zvD2PLL6D4DjeqJ",
  "key33": "XcjyrkeRRRgZTNzFSjsUwEfqk2hTEPvMigh8M2bKj7mPMafV1tbGWMPpE3jtnyDSRAmgfsivJDCV9fFAQ6GwNZx",
  "key34": "RmSxLiVAPXANYRKkrfcMc1Cv6VPL1vCVy3oYRHUAoVx5QRfbrr6uEW3P65hrgXirCemPMG2oNKqm9MRLbXkiBmd",
  "key35": "4wifxc5mdCBq4od5AvboCQQ8edrpSD3M6Uqbq5f1amYgpjx6DDZEFPHoCdB9yBvHBWWttGhzLmfiV6TEZ8j2eQkC",
  "key36": "5S6Fugyk5kEsmVDogiMfDtW76U5eEnKUpfZB9HDUMrs8FE95TCd33NexWkTwpntfCE3Pr8rH7zpBd3EnDbdnVKR7",
  "key37": "2zso7T4kGWxQRFdZJkYQQNHmYBqcHMEefbN2VcQ3BdYcoaBwtouA4PcF8SNfpUs8pbDCSQh5DeWoskAzgJ1PKXKa"
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
