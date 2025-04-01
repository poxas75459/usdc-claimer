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
    "24CXMQfrKrGhENwVWZCQNW88pZhTHnTFQva8LG1WoNd7dshz6UKFUG5ZFkEvJfbGvKxMCAeCVsChS5BHS8hRgg5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkeBUx8zAp8wgGkicFtbnK7UDHLRV8nhtRYca8NEgGzaACsAp4rPhp3jhvEguAitx5hndqxjrxGY5sqkxo3adzY",
  "key1": "5CA3LbbJau3GLN1qzQickeQFPwmiXYNxsdZME1kCKLZiGLTREdYXwc4nxi4itbKSemgCTV9BQX7hALku1hAbXwrK",
  "key2": "G18DjodiStqJMZz7gu1rmcZcRMB5AZAvNNWFNT6bjajUg1nKkK2gSmWDtmEea1APXLmCT7V3rznjvqZDMm6yG1q",
  "key3": "bGmZ3uRY686fVhRmgfwFrBgJcx1AEd14yc7V1QiUKahm2jn5eXirnxbkcPckxzomKiqr4vW7uqCKFFummz7m4i8",
  "key4": "sq8suVNqRJ1khLxmMEvd5vvjwfiigCoppCSaQyMsmKYMXYmAeVgRvRdpRAnzMHmKTNjx3PPUx72PhShhYsBoCRG",
  "key5": "3MGMudSWg9E7Yh5mWpbUodHUkFQZ2oN96ns7LV4LTqNZWmxfUE2xEjLWKuJEhot8wxio5qskW5A3hcGtnwNek5UB",
  "key6": "2WbTbd5VvnYVVgiRY8a6Yn6Ji6qUh3TdL5UpngD8NGgWgX8VTZ96ptVLqnaB83jQDhSaJViX2NR8UeT1u2YFioHJ",
  "key7": "2BF4A2wa2FJtxcRm8H87SRY9fH8KBG7HaShkkqMkFJYeJrmmHRtYR1JhnhEgY4fMSsJPCVijHj1WNPEsPfsA7aJP",
  "key8": "rseD9P27GDRmudo4eT745fokZxmGPMqCh49sSAQGunDwET7Un9Eysye9AUxa7EKHZmPMKwxSsmW47ndjh9jikZm",
  "key9": "4ki6mjGjPJhdvu4n7yG65kN1m2rgBSwZaJZSMS9i4w39Cp5jU2dUTdLmxgJbFy5Ezn9FydjH2GZ7oJZkyDM5iytj",
  "key10": "44nZd4CXvUdvpjC1UKrfnqNtxqYwGGmYizE8iLjcceHXGAo4zp1bXQXtJ1Do4K1gvWBvhvNxmRLQ3YgmWdRhtjHE",
  "key11": "2dHURXtmeqCVS3uTVgNexei9wFVmoxCoG2xSYudVULxSogMN35RG4ii3FkTwUSiDgAtzALtNLoD5dVH85HGpSTNA",
  "key12": "5ufL1SuLhnGxDYULqmZAyHFdirGsSwo8ZnAzQvY12iiszvx3ADiD7J2AQgSnnsUNoCGFbMTcDXBLor79gnM4JatV",
  "key13": "pHsG3bnDJEu4CyYTqjqdbdKJDXvJ8otMzsWhgpm6xNBn62mGhMsxSmfsSKMbsKAyBAhvBzbjS2A3wytJeN5qP3N",
  "key14": "4H6iGmXhuP6NvBkzDSNkEzktE1zaiBgwgVp1CzHRMEHVZUrh7CCwsNLxLCND9K29uHSfgQsLmtX9c9LrhgbVrpKV",
  "key15": "3MHGqqCd2TRbPuBQiBjjrMgj25f35sorDUFzjGKvKYYyqdNUNazwgQ8QTVJZh3mVMLQYmhX9CtBLWuUksJvh3StE",
  "key16": "4iPAm7skngGLaVjfiPG5eRk5Nr7wFmjeZE2TWTiMNLQudAUWRXW1e7UcooL757TeeZcdSZPSn79ekfw6EKrddyiy",
  "key17": "Q58MCLcS2GAY8DzDLx6UTVixMyRVMum9vELYFCAdvqcQWfkHsTDqSjPcgk9JH6ekiHxJMjggov44yXYu8AEuUg1",
  "key18": "3P9G6ttVkNLut8C8E3UEWMojKSkCQRuSnPHbR3GTQperaBaS6KVEAbUHWxiyDgnbKrAZohJo8UfEa63TgCWx7DA7",
  "key19": "3PQgBnE4EPwFSrX75fB4pZ6qD4apUA9bvAjuU79J8pRhDsmTuDd543ybZ7F4bkbCDQ9D76xdNp2tvwsU6yFAbZQz",
  "key20": "5Uu8h9xuaLcw25xk5nY2dRqK1SUuWKTKcYTzgi1C5LTC5Zg1JDmYyrChVXTgd6wqSWwJT128ziiTHUWPFe4F9mGU",
  "key21": "j1B1ikCi4t2aYwt96i1QLGr4VLGdDQiRX5ov9yxo2cDgHwZi812uQqsxYMWmZJcy8dMvx2prqnAuagL8LDyr2G2",
  "key22": "2fLg4wvMbDWR3pT9U37vuyRsGVSHgyqKKDZg1YMDJSkvsfTnGDtAvBiHAHEV97hq7GAky583AzLd92dUBXpMb944",
  "key23": "62cZ9gL4MxAgKJ2Q64F6mkW4usDx1UQup9t2XU8zuD8TLa2KB7RnEy6rNZpTiVfZyrRoJGHNmZUNjHWdkSgR4YWn",
  "key24": "3X3p8JW7hU214XwEdfZvVXC5ZDxxPZwmcncPmrzng6yvHyG7tr2DT6Ga4gW5VZ7QJbcxtes2CNcssHDNrjXWwyVi"
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
