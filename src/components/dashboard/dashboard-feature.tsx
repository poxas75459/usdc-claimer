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
    "3rzbKMKQRmfSCGVmos9HM6XWuST2uU2f8i7SQxEZgxuiD9Fd6Quv62aUM79vsZrHCz3WNX6nMzZDYGYuwbzxmakL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462kayU3BchnfsWMBXpF9eS3e3YtReLS3kc7g3WcRP1VzTjgLWCZSkMVYTLJz9FYnMXcD25LEFRVEsoy1sc286nz",
  "key1": "384WzAzwR8vY8syTPmSvV7Qq8fivkX4BmdYUb1CmdyNFDaheoA4kEWbB7y76oGnELpTbyoqZrfMRQjQeznfirAef",
  "key2": "5a3CS7rRKKpjcukNQjxcrwQDEyfbUR17VDV75xZEXG6jJa4AsP1M4jSyZwBVfqZKzBbfkmxTCjJczBZ6xBzo4Zxk",
  "key3": "4zHyR181esgZcWqbUKxdvKP953d4C3KuEqYAMC7qZM3sWeLp999UFnGSygDDUkqvEXnmVbQ7Kjf2Hcw5PhrdzST5",
  "key4": "hdo172L2g9EcgbQL2vbYxLdktiAnKKZWhQ7xKekuktskHrKCCY5ohK5gsuG2jHnAZ8kdU2oXgzqAjxYHhQiqE1X",
  "key5": "62WDtaLjZACfDmKFkYfm7AK2TQuwwGy2pecRTJ3vDDYYhWHqG9VCUtkieL3hCMi8XTzogz4div9hAJTFXmnLMbGW",
  "key6": "cG4BypfHTaccdYDtdtkkmpAiiCpwTCnkf3ZeCJCNVW7PtnxLZJZtraNpz7J97Xp24eHKgE9Ba1PivfTTZiq1jbx",
  "key7": "3k7VtBHrDv4c3TeyuhyjZD5YCMP6N3irSTPTksNXvzABzToQ8f1L6gqzRy8fWjDq8RCB6kdUMJ6WubfvU4SifskM",
  "key8": "28mGLzBr2xZTg11BgVByTDKwgFQcyEApMzoZVy4CxrZCDbod4P9UHA9KCvoLHkxgtmaoiJQwHqV6hDyQk88gGPmV",
  "key9": "4ARrVfPteBdukHmSPgELjqMdHBXyJhsEY3AEjE67j9bJbH8QHQ89pm1oYg4c2avqo9Kg8NXtH6pcJLbswX9rwbcK",
  "key10": "5qf6N8HzeieZGsd1Y2eBbHQYpKmJSMVDvLeVTEwW19eTGpp6dyzKwg8g2mA1H4v9jsZ3QwyR6sWfAZS7cj2VNkrP",
  "key11": "3Rw6xLzh5A93TBoAkBf9b6PB3DnHD8KygvzYHVt44eET1MdStt6rv24pk36o1kQLdbxCuSsAPo39Wz3Gjio4fdeJ",
  "key12": "3UseG8QRbCP3XR3avang5FzCqPoBRu8Ao1btKSVianMVH4Z4H5EvUaKvSziqjD8achUACgXU3stWBUPNWa339ZdW",
  "key13": "4fGCrHQm8nCckLQaGJk3yoFydnN1daGrmHfAvNHSbgk8tRRpcaoGCAq2douJvCYD5iHRxqTJNVgd6Di8VqEbKmPg",
  "key14": "HM2BeYfozebx2v41hSs6Cv5mBmTzntjM6wo5VS9D8xLXEneRQpd3WHs4WVRVBiAJVvg4bH4nNuKbL9DaEyEGZKp",
  "key15": "5FJ4eh2Ni1zhNGTLK3mFe9ZZobphKMg3tkgbEvBMt2823NhdtF5SapLWapXcVwmfab7qCtDVJ4iRkGX4YiDdyB3R",
  "key16": "5rZHKbziZjCE2iS6vy27wcEHr7F75b2noaLfKMfaAgxeQ4jGVSBWR3QhFuMKiXQiwyyqhjiCZRaHqSWDQ747ww5Q",
  "key17": "5BdZtQgvchYuzUqz79x4zSAiw99jHy7TX6FKoM1Siv3XpWyymx8P3M84KJdeNifNZJ63LZTDKJ6GbwPSNsndeg2p",
  "key18": "49B3AA1jWjbpjsNBus3mKR8B1rQ3yT59MmPpddSxvadWrAGif6BeZ3yLFSQpqs4SkoHph2aUqhtaR1Qc3fJGLfR3",
  "key19": "4hQoBieQ7Pi5Nh4EzHLy7TzGEVXhWodV61idTdJkLfSYDzDcH7G92bqgCfymEw2PGE9EuiUS9DSvvMuZhHQ4Bhhf",
  "key20": "4jyLykRHaDH7dUwM23C8AzALRoMQ2abXvsKnKB7sp5MenJZZMuCS3rn1mF2EYB7Ripd7BJT3cNqQBrtA5FJMuX7Y",
  "key21": "2pxTC4NBcZ7okxGckNxw9WkdAqgkToszz1sntcWepid3UR71p9FEdu1PMpZhvRNowmZHd9BinjMJoSUoQjLWrFQs",
  "key22": "5ccxhsdLfDYNnjNWe1162wSTYfGHVQrLASiLQaiGDC8AqQzj9nrTfLtuXxmBFZeEDTNCn8Sd9uD1xib3ZE7LwWaX",
  "key23": "2yfjDzafKspvVFd9wA4KyCv1fTH6TCUpXQHXbaZtXdggshbJBiFQYpRTDNqpfBterv8T8yoQPQtqCASKaeoSUpmf",
  "key24": "4DUvFgDvVQ4TigTadZqURF1ZUMTGYjqLTjehBzzBFs87fvfZcC5XiaVUHSvLjFKyfBimrCRHurGgJPTL2CKEpBmG",
  "key25": "4b1W7dcPfrgGrj3WQAXu4ab9w95kC1x5ffpi5VV9MANZT3tj6ai55d2erbJKxT2TyaUutN37yNPjRsaiMiAcEzEj",
  "key26": "5sqc65F4gpdj5nYDYe2FkskdFCSikUsTkqjc3Snri3erk7fbh8mscStC25ZNikE173VPHdNwSu1WKAx6fsApPyXi",
  "key27": "5yikc1aEsqCeksxbamdeoL8gdgtNN9AiPkxhY2Qzbf3Edf7suosRjQ9HXZ7PaRt9uGvWscb1WT1SoM6qnJh3cv5n"
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
