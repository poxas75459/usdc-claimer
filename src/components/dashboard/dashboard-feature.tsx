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
    "35uL4xtGR8VKSybSVqaHhuMrh32RBQMeFBmccm3jQc1E3sWxMjd4oHvcbZD9pUkTfYgzCEehFymrrN31BGrqsFdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5isZbiZJFWweMyrxyoJTJiBHkZC2dE5nto8XwshqFny3J8jBR3HT5cU6d8xnCWketUd2g8g981qi9pfwV86tX695",
  "key1": "WSNLSVtLRuWaGkm7B4kRYuKLEev6St5QLAX5LG9rs5zwq4Wk7UQ7xfFTuQKg4GgZcKSvVY6GajU51rw4Z1zHaaC",
  "key2": "3Z23pZczsPohwFFS4eSQARNZNvXDh9kwh3zyXhje7YrvXPMHqPLHkhGGHAqEorqAfrVmzwKLSy1AwJXNuBADaJn9",
  "key3": "a4HHnoKjQU2oj8igEDs9xozdkyxiJgKNcqYNRzFL7SwANQGVBc1rHDjFQ3afUopXe14g6q57FphQbtrCQqcUs8f",
  "key4": "xyWTqj1D4giJ1AC9JJN5JbVmpBzKymmNqch72mfgvmaoiSr7r2NruQ13uFNRezyYp6gcb9ReJb4C8RVc8Lo5a5H",
  "key5": "4TGMn2TJ7nZQDCxLXUJwm2MBX1E6iQ5vaEYZF8RfvkzZsDGoSZrTTwc3fCKL9cizRu39UFfkJeUppaUjq5DCdpXW",
  "key6": "39JWfyZvSRDUcK4ofnHK3XWATFEVPoFAcjJu7P1HE2fQZ2UsBXrBe2Hxv4o6ErBUTrsNBnXGon1U4LqGhoAATiJE",
  "key7": "QxG5KBmwPMpGTk2CKLWC5jYY5TaudtAvtmtUVK5ZbCnabcwWh75jV9hRGJUeGQNCQTaPkBXkLUXMxJWZ4Yk9PQZ",
  "key8": "3THvaC3SffwmoE97yux3tasf6bcX3czP1x9ZQ8tuAmGqYaPhnqBwea1aWPzeE318y2rGuimttcsmcpLnFRWr5iuk",
  "key9": "2Eaxqkt66dwjLhm6EDEAHZLWarj3hRGu57Aym4et3KyzUjBwJaUbwq5RGfdzexk6LFV25XTGnvbgfbMUK18tL7ES",
  "key10": "61n9zFhirAL5eaynjav6FzA6heCYhcTPz3ndoK6yF85MHtbAGKVcXaVNE8kvrRDC41eCdzgDToyjhdwd8WoKXBir",
  "key11": "58dtEaR3bQ8Ueq9PuykTtdVRETSoEQP8Guy6B6ZkSGEtEohJR7PH4Aj9CToT9AJE1CCFWn1qoJeMBjNoxK9WZTiY",
  "key12": "3Cq728qu5PLtZM4N3oa8MfZrMKKQZ5U7LMVV4fwWLkNugK4jbYpsYpDaLoWn7qSGzSfE1vKH5n1bsCDdW6q4U2V",
  "key13": "H9BpJkjGpVFPNcR8mqgdQo2CJBPq51SLdyAfsncNGTpRQUWkdhcxywPAw7FQxeoFDMaWpYY8PemkyR1zycHZfa7",
  "key14": "3mT1PJx3u8TeK9KyTpCaU73DH6JTtGGwxzravy6zvTEBadP8miuxtrWSd9brPx4vfMmxSiu8LgwJQi8Z9uz5iYgE",
  "key15": "3dybuTgtiQkW4VsVsUWGx3NZQ4cSZp3KwQpESnqLLqKN8ZvvaCNy6HET4BmMpVKxsVq1f2LndbyozphCjcS3pjyJ",
  "key16": "6vF9vzpTY2e4K61ACD6SNcPkCJfBMAcsNEJHtcetCs2X9CaVhMuPnjVkMYWVV3q2ppDGTSyGfYXPyvU2AJDRUCS",
  "key17": "2s9WyZsZyKHqFcvAWvRDVLf7weYEvdVHJqRXKcuDF1SvzSmuEDaB1obDbY2mN4ASwcxbngUxp9czojHNJ8cP5Amz",
  "key18": "2NHgVBFXGW7QB7kRUhModHYCiky14a1osHojZZVczLW2DiiPD63CWKtHPkMqRtEQp2pwwrSTPXq5wV1dSNtHgAqy",
  "key19": "3hKt5a5BNonD6EbYBMKsXbmeyzsSK2ZzTbjmBWoGvyvmQxMpC6yZHWhmhj82R2mAEAn8Spnj5mTqgRNEA2RK2yjV",
  "key20": "62MndrEzp7S2MKbpubieqfeXYnhdLsLArXpNXBruNtke9TedhvKQ3LBs1Cu5xvUjrHbNdyQ8PHbBxyGXDQxpK2zV",
  "key21": "5uokNzsPEP8k6Sqb9Z8tq5KUk5tsZKurK9rFVA1FwrKFGsipfx4wX1vSWoVzKGLWB1Ems4mKkUSqx9dNcAaXcCkX",
  "key22": "3dcP8m9vzUorzW8pJJ5Y9xcajT47QgiXWjG4BvjDhezsamZMwUiKRz3S3SbK2ymhf8e8vP5pJs5XRaRaUfifA55T",
  "key23": "4Q4v7U38U6zDsyJg8Gj1KCryWqgmKzTKkkhpthybXoAxhZj9vDEfSrdoqpa3EzXSshbYNJpnYtLmjoDfGLys6KKM",
  "key24": "3y6CkLCCYgq9SwtudL5CEDAnbC9ZqjmWKePkGy4ag1VVxrDURQALDN8Z2Y74ve8xRNxiE2oXoU76yziBnKr2npRL",
  "key25": "4pAnyyFjof67E67waKq9NMgE73SKPnSiAksQZSNuXXiQhcBw3QiqvJswpAMAQmKut2Ap1UhVYGfK5zpRstNugezF"
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
