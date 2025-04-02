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
    "EpWHFCiZ8CZo6kzuJKBkh928mJDrEike65sUcYAyfDkuQX96iKHA1xb8hAuEGPWZFFD8JZMistd6zC8ugsU3aVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzgkn9oQfm19DRUTneNiTZKuQZJCjUHECnPJU7Ss319kn2o4afidLowf5C2mta5mkFenvAT6FJfPcnyquNUdXPT",
  "key1": "4s8MWbNFzfv34xmVErS2HPHoLYCZJmqN9fYJPAsjahzxHcearUEzj5CEm8bvNE4NiKBKGFVCdvmrDD8ZDc9CvYnx",
  "key2": "46FaEz7ccNxN6KmBVjGMsv3UsBsQvf96Zy9kJAhnsa956gqBRY71pU7rqXmmpcGmA7t1RTY55rVykMejkuyYXnLv",
  "key3": "3npQzz6M9JwrNWYVAEv7CoGwTcCzoYtw9G6Gj6nUsY92V1L8xC4D7CsnfvtAueXUKrbySLmkG459YQqRi6JwjG3w",
  "key4": "4PPEHmzDaEt4gRWpDoEKro2BMjUi6bNdJnAGQ51AZYGq4L4BVexfiSNn5oCUhN4oNXYQst9htPbF8C6P3dvNrw3u",
  "key5": "3Wq7Cefj5BAGHMGR8WHGyFKb5kzuoybxceykCFynG87yfR99QKdLvLrhRm5VHasWbQgkwUSXGwTtaJpRd6HXzkhc",
  "key6": "4DDT8Tp9fpNTqmGNvFrkFuN421kGdgmmLg2FtM8jYbMgRPSHacJWJJY7Gyo1WWQ4nP3m3yfzaJXy8FS2gBEyD6TV",
  "key7": "4DWXS64CWEwGxvrFi5F3Nkr9b7WzEP93vXdSKm9PR45ox6vfp41bjxB3EiG9w1azMh7SuqcRiPqwZ5AbdFkTUnLG",
  "key8": "224PNvcJddPa41oxQXkwjxBkcWL3YpGwmGUc1RkaTom784t9ttMwHrEx5dJZB6ewgXcRKQR86LncpjVS3KHSxi5d",
  "key9": "2y1yAWCRRTpc78cXzLmbbEV56PYaNekD1RxvgocQiGbAGuKdiAj3zT3pHEXriAN9pE8odg5HRnQ6cQqmQSk2GTv2",
  "key10": "L9pqeGs2wb2J7Zwce7NSCCkqDWoYy3XuULf631WbqkPYiBazcKHdjZdpXi89wHifVG2dfZ3gFNk5aPD5KLbbEoA",
  "key11": "2EycSg4kSeDV8YcqaoeDrZjkqLyx8yDKhHD5zPovCez886xBrtM3GmH9qLBrQaearVPbypvLMCeHQYDTGm3wdNAA",
  "key12": "5rDq9pCudWvuphgfNVSNe7NnSZWgDX1nYqAPRgxwcS7EFvzGDMQKvXMmT73vxfgtU4feALL2QxhsDSJXtvNSV1iB",
  "key13": "2oCVV5TS97CoPDqFkeraeGG2JNjVzHHyoTJMK1MAE9fvYKFbi9fXtRxsszTA3d6ZHaNSfQhPeAXJd2VFud4QRysL",
  "key14": "2wjqNUYhS2cG5Cw9n4LC1dN5fYPVJwtKD2ETjzfCjHHLsuqfT6KDP5rMorFoDtt2WUoCZV1SjQBmqmMjmHoZiypq",
  "key15": "4hNugMbQcFTjDv1qqWRWf4jjoj7oiQiSwpd1tSJGJqLMXcVyLX5Tq7xXv1KYHTdt35GJE2iW4covEdHZD32J4t1r",
  "key16": "4bdAQwKrfrXEzdmR9cYxnx6731KXWwsL5CgUCvrX2UJVxo9FQ6duezQayQ6hk8K5NtEyatzZSw7oTyG2nXUkkAAZ",
  "key17": "2M7s4NtDLz4K2eBefq7evLbWLTQ9pw57NJp5Av9AwokbWDcW7b7WTFdyWRTYnhxZLagv4adngG7cygTdzyyHz26M",
  "key18": "3vPfoJE5XHirzopTxSyFmNTWFSnhzAKLhy6dqFvEXD7ev9hVrvx65Kgr29ZU986xBsK2qfw6Uh6ZTyVGDg4Co3F2",
  "key19": "4wTp1ZDn7rYRtaM9HEafE6YD6JvADkt3t7h8Vhm2k5YyMW6erLoRJXwycUAzyXqV5c4WRXzdjFeLH7BJJK55t8qr",
  "key20": "7qC8PJ2TvVLbvfcKqDtgGmyCUbNgKuJvKBWqFRaps45tXkDz2Z9SFrL9oi2ivxERojxZr8jZg7pizabXFZhUijQ",
  "key21": "3AHvoa53EaHqoK7jvnqNhQpJR2E2zrAnjiceX5N3zUQCrwfaQnsR6PZda9DprEVHL9VJrEkkxsu7TsU3KgGEH71",
  "key22": "2osGYCoKQR2bxzyvEDDpYHwFJZPmsEvGEfGVoRsRAh2yXwzK99tDBHLFENoUeAYQ3akwUTPkhJ5cidiQK45Tqun4",
  "key23": "4W834ypaHvxaH51tZTARsd8d6CVBTrti342iifkLGYxhQoqZmcEfnNQhG4XhDtD7mTQF4cUFGcKkXLiQamiPnXFs",
  "key24": "5KkxmTDzf7ohzib2nymoBiU8irUJZL5GU1QzDTBJ24BuvnwRC5SUi4VGgKmqhyxQRfuH9fetjwQ1xUNb3emPPZAZ",
  "key25": "64rtGSXwbh6yLpuPzCun1qLttAWLxasAuJgJiTmZSC4F4eeCMXS2YqKWReVu2gvdSrwKjvmRankUsrHaaTSYwRNj",
  "key26": "2T7P733UTbihz25uoRw6AiWnjULJaC3vfkibcJAkTzb6SwDwNXn4h6w9DxufCsia7wdC7XcvDmmuoMXTH11k4UrP",
  "key27": "2PYKGG8y8mUy9Km9zSSu63wCVzWZ9hYybP9GQrzaQy11EXTrWwLzNaHBX69KQsr512Jweah5sgYynoxyxb5KgSBv",
  "key28": "5fePXhjCU65tEhB9yZRcftnRccjKzXKrcrhd7kUuZLbFjPcq9dDwg5xnNZWo6KahmHvA5fJTYxJeUi6tyxchaA3v",
  "key29": "2SQt8Seh58aeeQNfMzNbVwS6YcRYPT8C8bow58YDqL5NxXgykffCiS7V6CXeqw7KqkSGXakyZsvSqZjVu9HKmYFo",
  "key30": "4bYv1shpMuqvezrVfRvyLh9NCHmLUfBkmwMkcPDFsvDopNhgMW4Nykpxtb267dQqzv4P87HR8ZV5BtXX8ypkpykH"
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
