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
    "2z5vmv65wCQwyxA3orv696Ckd2gnZu8sBFyT9DJZsN8ykvhxNzfJRALumsQycPt7rRicExNTZRsMngnFy7L9KMbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4eL25B7fNyTN5PCTBUqcoTsAmug9CQgf3rmXSQDS6KzVcrPMRWd3vuKcaUnG3AGYAoraucFSpWMpSJxgvUbETb",
  "key1": "5WfatiVMQAnb8LNruQKKX4qzyvLuYqhtxVr5PHXAFsZhvmbx5njaY2JFkdkuE65jnT12DYrUEkYn6QLJ6R32Ntwg",
  "key2": "2Nf64p98dLxWquZvoeC6UL9m3Md1KD7LhSUebDdzzP5P1HwJqR1F6CCqAX1T7ZCXbUfob45jnV6mVFnvxKJgSPJm",
  "key3": "3owdF8cMxC6Lrwce244578A2j5y8LD7SwfTMFmov2DHYN22SkUhZSoMXZkcKSKRKBp8owHcSJjwomDD59BvWPxpf",
  "key4": "42V6UqdTFi9Z9Uy7gxLk5LZ46ZzvSYeUKEXCBen7eNyT4Sse5phEQdZZtM5GAnene7RXR7UWTp7tUGf7qGDy9A36",
  "key5": "2aM2bF2QB2FH6cYbjjGREP5is9wTMrHEemQxq6mhnp48cmJaREU74aHbmtnmBUpZwd85zvYGukHjDwBpgD3aHPxs",
  "key6": "4uJP45NZAipejvRi6QxKf2buKBgBd1mV5SbJwMqcxKZkYuDtLHJXgGkSwwsnr8tHnKgALW8TzBwZVd1fPRYnPb3k",
  "key7": "2zQVTZfjkQJCDkHifeQzPBreH8Kzt3dHBX7sxW6vYt8qWzU7acxSd71y6s4MVoNR6mmWTJo9D4yNjk5QZGdXPY3q",
  "key8": "3Lzh7k7EBdESTXayCCUQafSwJ9p4DYuxhCMhwUxYARmRiCGaWzaBrAwE4MV9xRGx1R7o25QwkBYUHczgRZtW8TV7",
  "key9": "3ZpY7i9X9s2sSX49zfNVe5uENAXCfN2f1EeEkQsnwdnZqCFSfySXAJM8xGj8oN4JRsdxVaRqWirmwEwebKf7AAe3",
  "key10": "4NMLLra759QxANv1YJZGz5wZRCGa1LZ9WMXhL5spt14dmnaUEhUmpDyZDWZvRRtE65GsKW9nvd6SDB21nNqrRkwX",
  "key11": "3mcLu4FdxqLZ8QzoUpPLRg1qkrqampC1HuFaGbKmNmY87kMpRjrp6gAJkyZAHymr9AZugiEc9mfdfr54v5wtp6GK",
  "key12": "3cZVbV617KK316v5YZyy1Y9GSnp9axPCTVbsGNorqTEdPWuWByfP9f3aVeHtyrufGYkKLYSuch54mWEUF9mmo7ym",
  "key13": "C5i8hUC6ntZxXGSfU1FCD1CjtR4uAR3y888kVSKtgPUNqh6XkTTqZTsBW4sQNpcywjymZzXDfQ4T9S1Ymb1bbUR",
  "key14": "3veu6ck9CEnU69ZPLDuLFuGeiSp5kFtHSmFpzhQs1v2utqGMtC5Zx681RunxkJWekNGoYLhcVheuKovt1GUCN4Js",
  "key15": "5NGAELHL1uE4XxxCTHgJZHjcE5gK1dPE9EWL4oNcd5eiSijrvDzpGdb2QZKB9XVoYx8oK89Bnc2xUUtNmvti4QMx",
  "key16": "3CSYzQt66ih1oLup94RAVGNfuq8XAQNjsM3msqRs8Y6njqQE5x6R1WxQDCyaE6azRKphagzCjxGPBHAPx3EyxwWX",
  "key17": "5uJGbRtkhvaBhvEQ2ZanpFTyLWVuGvGcu7PhuN7RcU7DMQmfzHU8gcbAZQywAnCyr6GtB2k65RuLKDBjiKg5uFRk",
  "key18": "kxRqv8bU6yud4mKRcSpWAPWHqF4BzQJEurVVFxzQzcWcQi7eVRK12LsUa4iat6yirYgKW3r7fidqU1TJ6ALjcUy",
  "key19": "3Fy9wQZHKaD5UZgHkNdzZLUnsS1e99V8wMHtmzMA6BMGneantFvLTE8rgb7JYUMnnyvjARHPfBzUpxR59wd1hj3T",
  "key20": "2VKHzxmD866QeiPaE6UsN2dqQBgqWZJdwuk1w4vRptV7nXhqVhmswpqex7SZeCwdF61ZpwP4zb2BNhLiCSUdNtN6",
  "key21": "2aNuqL4a2XggLGBc7RehBfa3C6Mezgqdbe7mK7VSXLTkLjzmcM7DNRjNXbkntFXmEfcuhGTkDzve6scMVXUSre54",
  "key22": "5Kmm9pkyBwZXnKQZgDZmJMEpHFpNovN82CvtWsjX9pou3WfDHDh35Fq5j2RzZd8UNyPpcTwup3ZHj61TGvGRZtHt",
  "key23": "2gBD7GwP7Uy4azaPaXncUVWsY7nKU3M9UhsX4brF5G53isr3ewJ1ukb6WzvGhR1RwjwfjdsCPrkYrfo71DMPbAm1",
  "key24": "2TmnXyceW41jfuPCt3eojcpmNghaWUXago66T4GQtP86a5kA2ozmnUGrZqZpsC9nXBf2V8QEq2q4ap7ioDj2N8SR",
  "key25": "4RY4HaQV1AnaLLjQDnDwXxVJjrT8iiFH9auUJzAZwaeCfwjqqezYgrzn3BWFAHKT58bdZ9rjEqdmCMUVUNyua8dv",
  "key26": "2bEk7cM3TAPVWme61YA18DSYx2KxZkpmYG5WwjmxmAZqnaZxrJp956wcN31ESDA9v5P7Pppgk8p15Tb3bPoXViR6",
  "key27": "4rCPzVMzXp23Pc4Ss3yBcyXUwqEi2kf8LsH1kUzipkSE288b9uaS3yrtmRNQEYXU9zUvagFbAEFDuVkdguc2FFeb",
  "key28": "6HbCcKwAdb7aaYfa2aNLwopwh1T7ymZ8dfmAdfniUaavmcwQbFj2tN5qCqzg1ed9hFJvv5GcQt4L5z1r2NRBwpD",
  "key29": "TEfLfjjdtQiFySAxbs51nT11cA6xPQwarTKYpgse7Q9oGnS3kgJe38B6wm9z6psyZWDiBeK2DfMUsj1jFsuBadd",
  "key30": "21gKVYmmojCjVofS5Gd3WUP9UJuvncFQUSuj5RUJTTxyDXmkSiqLbsKyVykCQFSuWHc1nKAKHQaQYioEdZcetmMJ",
  "key31": "4f8u7RUp9PAGNo3SJJacMzrdxiVHDMUc2H5hxhz2hvW4mHDpR5Wmo7t8uoFzNzum6ZTh6VYCuxhN9MiEsm9U9AV8"
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
