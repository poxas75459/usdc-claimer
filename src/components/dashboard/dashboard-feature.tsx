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
    "4AA7ckBbyoF6ndWis2CTYAcn4e9w9VmFTnVvh123r6beB3BfF67yA4V6dCNd3u6rXnCW4CcNmdxo9YMw73fTiTS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQkN3umpRZtfTstQ8LiNSTNp3ATK7UkVhqicPuHRxPhucBuDFbUe6h73TwXXczvuufp8XVXfyDVyAhZx3T21Xos",
  "key1": "49UqcJRquU3WRimEbP7BVAsUHDCC2orCQiE7hxJkAADeCq5jG16eWSvyhkB5K3wGN9prJFnd9KjsaChrEmmNK3on",
  "key2": "Z3EqTjszd7oCpocsGWBRBB5MLv85P8n4DdtuZiWyfffs39jDfoMRA8vB5GCy7ewQ9cHwyKgHTyjf5jktL75xHgB",
  "key3": "2u9nLwC8iv1pk9oc5phW4feDDZ6rSr7DqwFV9UbfXri8VMkBUSPvza5ekct4uoQUFA3GNX1Z1QSWnYo8smh3yu9u",
  "key4": "56g6eQA4DsHp1PnFS8yigrVHyroEGGBuSxESvzq2gwGecr9FzNevGzraX9CGJKhEUYAtNctChnaF56duqqeTrnJd",
  "key5": "2q4GhkavMfjPpbT7HQXo3gzj1E7Gag2kKhmjUJnfX8sMxbciNPazojJWauqDDzcCvHpPPDAAdohex5ek9S3Wv12H",
  "key6": "4H8ngpFZUj1Vc2CZ6ZdBk4gTkyJhLSvhQhM1ub6D2mBDKrgXAn8ysVDajYr8ozsvEAAWUqP8AaBgMeB2TRCjfYfR",
  "key7": "31HQZDS1rSNZH7jWjrvHm2TgVG79gEn938Y4Rff4s3Kh1Zyd1BdiMspegrBFyq3FzX5TXqAnpq1vjkoAqdr7u98E",
  "key8": "5My8wcaTH85q7TxiPU5vVudRFuW4Yw2QZc3KmgzLacV1WzyxDZVBJdZFFxFPB8qf3xJvs898cFGfCKrg5ZMttxEc",
  "key9": "2f3PMokHJyjf1kSPqZ4QQjwzckxn1hpDo3eyxjT1pH8V2xZZAdQQLb8wHBeHdMtTm1xW7kPZfCkqr4M7xkY6T9vP",
  "key10": "5hu3Ev1JqiDugeKn5g8TNtV7m1Q4SbBgq7rcYBrL1xmGnce4SKqra4LcXdZ7kqDonBcRBYPCmdbCiqA383oHfXoh",
  "key11": "2C294QnS9h3cJHvwLULqmTSC1koPjeWQtR2tBdt6D6Q3NKp9UNJkxAydmEVYSCQsaX1NsKX4iLPKG54PhfvoMgYV",
  "key12": "3NvVKLSndRAmBKLYnkavhc34Zbh2YmaiTbmqE5xJKaRCnY6EfMjXvq1MdUUixPdosVU1CJ1FpLiVoTLsgYMqd7cy",
  "key13": "3DDor7tt4o9eELXrqF1yy7PihJnvUfdgreZ9H8uGawmdWMzcHi6VwkAJmn3FPBNdUvXfukWQcStaYCdvF9eSioGD",
  "key14": "3PStzGQnWV2e6kuBsc9c7TtV3z23jdmZxRndUbn8UHwHfXFXyitEVpviZ1t9oCJrKd1pJMiyqGSJ3rDsuPM1xQUD",
  "key15": "27UJsDf5oZYU6tDuVs5FMB4pPj1fVCMGbPZFQ2VgjvuAGRcF3j5NKSiC8gwx3GyQBquVh9kQorP7QGTQ5KiYy2XW",
  "key16": "2NFz3zufPfh9J7ayjfY868wL1gwCQVV98uwVrCKngZuR6CxuwPjA7T96LirP8m8H92LXivKZqdqh7EWCjvuWzk6w",
  "key17": "2dRahhnbJ2uT4s1jHHLqvYQaShYkJtznP1uDfyxtbGWYvy7SZcqS8oM4fDyNZiScLqF583GJJh3npoWNZXiJDqUY",
  "key18": "2865k4H7tJGakQHaJ1JiXsGchV4NGgwQ8nfMQ9zeYkLn4JvpkLViZnUbfuCNPPYG3L1tiaedPcFJ47hUNPjbzYqh",
  "key19": "3SWM1xgfV9fjdsR8jo89QcoJYdLbrXVksqptaNU3gJYyaYgLnd1aLXK4Gs4S2uojNcdUx9MYgwonb48BZ8v5nDMw",
  "key20": "3PZdezYSNvix44fUgVcgbY7C5M7Bmau5bt7uYNwBhgCXTH2mDNDBXb4uMoE4ngvzPAyvBAFWGULTKb1qYmkWzZjD",
  "key21": "3f8mhhJ9hcoZnxuS2SBDDpDqXXtuvEAQ6MTGix51HZkpGhdyfwG4w8LcYtN9LBv9pkAVj8bpaMSg4xUQLHGCJFpo",
  "key22": "3hz4Y1DSogbCbqfbDkKq2QMRto2bRahXYoMcUVmmbBNybvqPvXo5o4fY3wL7WQuCx5uTFqJuESHi1cDHniRgoacL",
  "key23": "4cXHUQw3gZiXkE9WmB75iGbX3Tigs6pMR9k2arf1PEs1mtNubh6K9Cy3tQJBivjD5evkekpVCuz1stcov7bWJeYU",
  "key24": "2mxWLyJUVXypNhvYdBv3LgyZA66YVKMU5nGzgd2Rbq2DLgepC9YTPRBkh1VzRaxRbLRx51vsqoyLk79apqw2XRbb",
  "key25": "37RU9jFkJJNoMdWFvbw7PSpk1qDmNyRQdMu2WWR3Uum3o5wBSfiALCRQL6addqX5RbERtkY4umJP5P8daB77S1sQ",
  "key26": "2HQRkSHGYGavrQj7ehzU1azNGJ9A3FVzPbX9yfmQ7p7mJoykYGGdyYW9qf3tgu4AcegXs7UcbaiotLwrf5bvK4cE",
  "key27": "2rwNNZ9ztfX6n4sFNwDXaStqXywPVX2rzyERe3xTfrq8zcyfwdT7zheqXo8FLbCMSKLTpP2TzSCMVkmuA4aPLbok",
  "key28": "26BNNHKxB3MhroAMwetsqJ6d2AUhGoysRFnP4g2PgxquBcq1s81bdr9WNFWvqqdMiYLjSUN1rUVqjPxVdrHjmsXg",
  "key29": "5fRiroswFdegG8F5hvaeSM7Mn73JnZMh4rSrq15bhw62MDaPWrLjBBnQKeU8JyVDCMtPeoLYi2LhAAFJpqxymKkq",
  "key30": "5h6BASMxtm9eYbgFrXwahQbWR1W3Wvtrv9FVhi9hmY5akwhgLCo8c96EDRAKp8ufHpLGJ9vBeegpQbnk56GWieMX",
  "key31": "2uWfDwBzwnVZkhQwKATq8o81nuv2eNjew5nsV8qAg6aP25839LBj3TKUhqXUjfMJEXGY22DqfLNVFBw56TFjEdH2",
  "key32": "2FbRPEjNBgp9nPjtRNGPCVWDNH9pntw4JoL8giuGQw2M1EBtifFWF7qCn8P9P8sv4yDzVe5dm5NLfHR8XTjqx3vZ",
  "key33": "4izSAtwRRHr6GVhAsrD5JFWtYSFUJxXKF9Sviq93jabgyvxp2SmGNAo5SkzBQZ1YYiFHo1iyq5NaC2caaPozFJk4",
  "key34": "2WP9uXVQyAYfwsVdNnoAX64M8QZSTgk3hLSwQjVfEF7A1Y72eebnTVfFpwUYcfWjNMSdjBeaeky4sJAZbECVvBsK",
  "key35": "34Lk8zPyEV5BMF4oSw7f4a1qXiMqMHDBbuhL1zGnjCZU7YUmQKrbPkr64PK79vP2sf4p43sDaoAgNg3RUr3UwPun"
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
