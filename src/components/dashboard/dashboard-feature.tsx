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
    "5GuY7wkxnCiT1tsgXfXicRXmUgAgSKBhrmDTuBHx5XC77oVMwo35qbTxBAWnhikW33yxHZKZt9ogWBKRjMK7pyBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwBtoJ6roc8ap56gYzQei7Aj5rdx7mMJeN7JC4ZqF8oxeJTT93T71MHJMZjLhLYNyETKXTwYSw2PatrzEg3fyEh",
  "key1": "5APndwbWcfUzkEC6yDbZhJJZEmRE5RzGxWwSVMMLsDha9u44PThGMsXja2p2UwN66NyZV73Ksp53mYVSnPH4URKc",
  "key2": "3W6AATKZAZea52eVH3zbEirgpyitK7G5rg6otPzAyAzn7tF78pSQs9NZZCRvR12336jm6pRuExvXtja3JUrw8KJw",
  "key3": "4aPRk3KsdWiFoXDQW4MMaSNC36kzW3o3LSdEbuAwLCTbMqgpJuDX6LXmYdSdzfWz92ZAZQp46To1wWZ2FCesuo6n",
  "key4": "4dySvDL68CrFvkJC7EPV4RK2B5WwyDXoMYLCHS5rKd9rfAuKerzmcmhM5xBufAheUyg9MwdaEWXkTrKsZL5RDsk1",
  "key5": "2mafQ7StHYtvhENBCAHVPT2hmNCUJXoyj9Szk5jawTvQXGwjfdzWrC4PjUbGzU57vcCF8fui8w1TknNHZWaofS28",
  "key6": "yTtD73kCAWUAs7TqnLPubNCatMUZN7YUwXrhzYtJVHn6RKaCgy98QczG6sr7wr4SxmMzJwwsmsBKA3x6pncNrbH",
  "key7": "211oJCKx5cSw1UXsdW66sLbfihkCVSXZXwY9z5qquZKezwbBy6VW7yx65j9SyfpDE5qzGMsKhec4WtyKDBjDjxWn",
  "key8": "sHYhA2Dt7ygeFXG2qvCdnWWW3DniyRtP23u4nCSCSVY3QTRuaAgRKXabg2V1M5iz4N5iNnitezKKcwNwF4VatjZ",
  "key9": "3ngJaHvEMTuektsA348mo1XspouAb1zyd5g8BRUbxb7f8Bi3XKikWdRo2K1gdYKicVNJVqTa4TTM33g69nje3zn3",
  "key10": "5kYynfXtSkneUreTtx6xTcdTxFLR4LqC5JAynkLgEwgGtLiYRSqQvReQX9xkxLi6fVumCh6o2pJ5VuPGDzU5MrzQ",
  "key11": "2gaJqMBZea96fB2HpzuWayvMuz43pjGrgh3T3L3guxjz18awSkPXLWfpSfZWdobchPZpKGuu2mRT2M2HgTpZz5Zv",
  "key12": "4Yq4mUGraEc3D3e73TQVivZp46VU115dwGFGYGRJjemWetXK9EbfScwi9vhCJkXZuBMFAsPW3hhb8kzEoS1v2nHf",
  "key13": "26aiqduDeijcPYKyDpjcW24rMfyjc7hLScUwcjJynQJ5ZAvmNZcqPh8UV22iu3jV5h4kxdVaevaA9HhdozFXaW5S",
  "key14": "2HwfiGuEA9si7XhoganhWL96kzdMXTAByP9d5Ancb2Xyi2nWF4YkkTvNSSxTeEdhSSAzZZPiefr3xXmVXqjhT5Rv",
  "key15": "67JRydkryLQHxtv9nscbCVfR3pGNRZueu5vcwhCDZnMt1k28TkPnWHK8NSzp5RQsXq9zLGdHSj9aWY11CyhpVyPm",
  "key16": "3yGW4iY1woNyhkFqnLb1GjyaEB5t71CmW9S3q5gbYcD7q6jwBtjsiGaxjnHt9cXPgDBEoshpA5vxouN7C672Bhr",
  "key17": "5USCfLRpmYGMM88xMY4kwqoDssfgZdtX3RdBhzyVprUZBztPNa1qMSwwE7ubNQWWLgqYoawSLYyy5ozkDuuraLeb",
  "key18": "5SyCyRCr1X3STjhfLvPLXZTRdKcmhRNZPGo68XPZoXVwJzxfTfvdAWgg6eaLRmEMQTSsQL2NxXWXgREJ3Ybmfvpk",
  "key19": "5hfLbn2fAvpq59y7BsX9mcMtXGdCXy31mXokkvC6ekYcaE1FaEy2LEmbmEshS5eawhRqJgDMbYi4uh23cw2mDWyK",
  "key20": "3snS7QhzyRW6uPAFGUVEMmHqScYnoK6PX1pyr3u48aSBMt7C4X23zCXBcHUYQ8QEVQ2teeofbr4DEtm1uz763iYk",
  "key21": "5VdnwtnuojrNkik9DZmZ3GCssqs2xJb4ji6MzkZ9yN8yn51ZXjCkbwwgrhwoz5Qe5woBFCY5LkwSdD3DDYvE526L",
  "key22": "CmnYdra1iiqnpBkDKjmaCAR425jij7u87uX213vyf8aN1UYbKNkdb3aS4tMPAg48JjiHWA7uSyXhMBBZzF1ms8o",
  "key23": "2uuxM4vLHT3q3frA5QQZGdnoxbJUdQrYd8sajsXVvwKk9AJSydUm6Fsw78MeHkzaruA3LbcWMczUkgEXZ8sowhFA",
  "key24": "BMcj5kZWefDXJrerJEzcTpSMZ6QGqXBsd3RjAAE5WwA2SzvDrBg8aSEq9dF24vJCUp9eqYixoupeEhhAhWQRCsx",
  "key25": "3SFfjfpfoMqyxyZh1tiRkm2ThJhYyejJ9qcQpHH9fNUyXubmyGXgCJz3ftxbHFhNHVEgaYHYpFCPG9Eep3JwUtwf",
  "key26": "4N5gdr1vT9jRFCfb1Fc1GqtyFDNKBcFVtYsaVXrAEAJj7RNGkfxVpF4Qz8jGZRHNzMU4aS9wuQydvRLr42U12c5p",
  "key27": "39B2tu5rc5khqYXjMjkMW2xvxWgoaEdEqZPXYk1NnSK5XUg81yjdXoMaUWbTsAF1Pi1e89LdEZHVsAogrov1QgNg",
  "key28": "331mVnU1iU6QKXcv5nQLjryhBAzrbijabrzcWxDuXg8C1UZNxizv8CHc1yPJwHBtq9k6UANTdpsZZqHXuk1uPYG4",
  "key29": "5854ypMe1wW28m6wGu5LbUzxE3JThjgNmRsT4mAeoikEGiB9B3KQyW7rb1Y4HZBnmvGqPKvp9PP4rtxB53kYn4Vy",
  "key30": "65zfLcoMTX4eu9rGaCrY7o1yGttDD6TYM7zxLiw6r7DUjiW151oaWVeAW2M545DtRDqR8y8d8Y3ZFpNDJ8kAkn3Z",
  "key31": "2mD74Bt3mVfQiTFu63fudP13DM5noVnNbmDpu8UuRSjC6ntQ1TTCAwBUyRWjNywbWdofczhWcf7KwsVeooac7rxW"
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
