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
    "MFRKkzfg1gNVf4FsV3N7LcsrRxHCtKZVJB5RW1WHFot2HeNZp9jWoMWYGwUxq6QZUcbrk425CBuXkyS5eznDwNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Am3pRyvp1CQyBjL7nVYENw5wsV8DQZutVvppPae7Mhj83ftZij1qiobPKvQu1Z8MvmpGhV999Mnw7a1qTxrfaNd",
  "key1": "65raD9mikDh2JjgAo1cS8zNVZTVr8EcWkng7HxFBmGZYcZ7TjquRqSHY8soQWfNTQwippVsbfNk4unqw1kk2rmHK",
  "key2": "41pmexqFvYNVXyYYWswuQvkHb9qcdJWyLY3Z5fWmiJMFWUmhvYxECpMVn9PhvEsLWMiM9CxSPoeg91KKRtmpEC4d",
  "key3": "dD2TMFxSYs1XbkzcQzNCZ2bs2tyhxfi1K1JU5hLcE9Fz9pXLrHDHpdNuFi5sHj7Szk5QkbGvmK9PaNZS8tqT8og",
  "key4": "3rjYNKhYFo9a125gce51fEQJB4zmPNzh6s54aFNQQzvqJAf5zrRpeiYYFKC4zkDV1vkQ3Fvnt2uLwFqooV9pyHzQ",
  "key5": "uxZGcTBv11CKYnh8Z4sBp1VePQunucStoxcbVoqHKJ1CUaiPUhZDaquuoJyL6TMXGWgR9FhwcLHvd6eUrrre8Uu",
  "key6": "33ee7kVECrcwkbyPWkpJaiietjNdoyyKVYmYDvR6hVK21LBDU1VDciduAyHkCxWPVJwa1UsA9VoRcHcx8xjkWh1D",
  "key7": "2eddUWXhSE9spMDRpfe4RYaXhaJkprQrxfU6qU1Ne91e4cihArg1JA4v3okZUJgitauKumGQyWuDR3RJR8g1oKWQ",
  "key8": "2a668M1jxbRJrSqABZiqpgZoz7w77DGonNJmF1qKgdzSaZG9CpDwGXQtgDytpc5B55behU3iJ73o9GfgyVcm6441",
  "key9": "5dFzu5mVfcXQKwY3u4d9VhzCdxKTNp1GwHuTDEpCcc3U3TE4JwcLXoQHkTQHMSab6mXQmhSjG7SwqyijCGza4Fkz",
  "key10": "3AHcgcHT8dx76P7ArGxW9yRhVRx1Hdtp5ME33sfjq74nUK6upP2465FbvurJeE385iStKJ7gJvPv5FWWkycNNMKE",
  "key11": "4HasJo1dfghN5L3YUgjaPGcy4dXJgWsrwDPW4UQfui87H88iHVdjrAACqttSaQoHXn62UN3MurQ6ZrnwLSw58PrB",
  "key12": "4k8bcX42RjKuYg5Y36P5WcV6W77GjkbSWJXw42DCkVs7PmgvnkTQS2RQYu3q9zeANzZU67gaim7zF3CEXDLYdLrb",
  "key13": "RepmCSHwDLDLuafUn3t3tj7vd8HBCjiWWkAUGoBJPF7hubnR9YvVZVtcHFinT1v8dbfc9czhh2w8e9xyEdNNPeK",
  "key14": "2XmL62cqHgS6S7a1Tqj5dxPHmXXJ2ub9mNPvxLBCQ3ALxuYBeFFPrwey47Ndwf599MgYyPnTUmYLbupDQgQ9PSNq",
  "key15": "q4CQwFRuYDPZ83nbigDz2VayNZfxPjm9oM12yKYqFFkWu2akkNs99RSdFgMYvFYHeEegwSJa1Eix2aJVBGU7Xjv",
  "key16": "4QdAfrzKR3CiUw5tdKt4WF3FXfVKHNnwDRhL8NpE8ihiq9EUJozPcnDd16Cs6HCGsMAYZkR6T3CjYUVewe5H5nZF",
  "key17": "5d2mZgH4PxvWSPhTAyd7b1toCTEQqozgHHanTnTZnwRRzeTF9SUi1dWsV8FuJpo4ByxB9gXsLQv5eACKkeacG36b",
  "key18": "32JjxVo6KYwUK2sNB1pbL7NYxJsQi4ypHzF9tx83U714pbR19us8YzdifEDKxxnuMjLWfADemCeLLsX1XTo4urVo",
  "key19": "osxkCidrehZ4WRrEvAQcyjEQAJZK68L6KGHy4XKcsqZPz4QcbogJJgLxjjoD7Aw6RJ2gFZxhZ1YgJTYB7nKdrds",
  "key20": "S3HKyHS3k1o561hud4WHGEvyyZCUSq7WnZ5NKFx4sSjugHs9WPteJfjLh93LbxmT7FyZ44tcoTqtxKhLGNvLdgT",
  "key21": "5qhhAXhKnZsKvJB1i3dSvsWS9b3CP38ZtVQhcv7r3J9PKZBqnbes5geZXd16FWDAQfEJ6sZ3YSn73xgHJvRyRwkS",
  "key22": "pNupsA7p3jv7ojv6fRrpT6RcEmNoBGV1ekQMA3xi5MXZPP9QxSbSKHzdaBUeuz6SN7CzFJ4RmX3zC3uw8BujFmy",
  "key23": "5UUzTrZUnv6wxSSern5XHjwKpCfvL1pGgWASwyVnudSr2MyETeDFoCHEpxy2ACawDCDsUHBSVMYG7FNodwLNLumV",
  "key24": "4N2sHEJsyiMfJkXDL487tGhXpitnoQGTHMh9S8dG5ha9YNzrbnyS3LQ7uz134x68F816bPFN9VFdfSyQpp2xM49L",
  "key25": "3xaYZYSDmyvEEwyQrs3ZzUj5Jr4JoCJAZHjfEYWWtQERrrezE6N4BvcYNZvJaG9R548oGgD855zzT5rTftWSh3as",
  "key26": "4mzswSDzWALm7sGbkxtxwjRFiaW73WKacNE9tdtsVKn9His9KREv8GRj8c4JQRTVAGtiW9Lc8mcd8CC5hUiEKpDd",
  "key27": "2WBs9yMBer6VEopX9MVSjCnekf43L3oEdR6KCoAJVcdu8vo7mhDPApkXPZix1maYhiZ4hN6bBbScRG9AKCsZNtxh",
  "key28": "uX6yEDRbnY81VqMPmLJJ9gc2bUdJQDZpQuUsuqRTh7jxocZkCjXsTAtSugmB3DEENqKcpTz8bgPsVBAUZWZ8faw",
  "key29": "2ivsb1sg9kPYv4ctbh6CKcoj88zHTpPYvocfpsGi5BEFptdNYfyUeGLERkSotzYv1hmEdi1zLJTK4yFBaGQeujD1",
  "key30": "XYeHYJLrsCNaM8wSVrxbfnuWu5NoYaod2a7hV2wDBbaB29BNpEHm1s8bf2JRoMB1WcMr4CYs14v39AY994cJBQA",
  "key31": "3CHxWqoP7diM3aNMNd4BBPX2kHMAvdNcji1iEcyHyvBF1C3teLyaZvfFZJCoviwPhVNGrCuthSzgsWruuyeceJzS",
  "key32": "3d4jtP39NNx5dLZvXqXnjQbkDd2RANszKHzsu8pueMPnFrpKxfFHSAci3SnxRyrnFcdfUo5kdvzbvanvXb987wsf",
  "key33": "mmwYs91Z3v97zVjZosuADnbCWzc7ZocJG48soQqJyzJj8KiZr1WJZ5NCFcADEcutmDGsMjazbyr7Q4fEpESsosD",
  "key34": "5SS27LwcskJu2ZWXxXCA3xMh9WC5DD3vo4t9K8Pe6HnVGsYCGD4UZG3fCxnAJyQbzXLV9pAU9R4TZh7mVg2hJvKo",
  "key35": "Ks4HvPjjwrhD6emUzVkHHgygmcTRZChpEkgRoPx1UWiZrVK6ycV7kC3eL2nDyAiUNcVdL3T2GcnPKm4HHAre1hK",
  "key36": "3tp67scyoPD6jW7epJ5iGeVVToyeTwkeb3iwn5dNP3yisgDTJb4c7svufZ5p9JTVe2mzX3grXZHLwKr75aAvqYkG",
  "key37": "5QirXrdFY6MHycbt136YeeQwvZFat3gghdzwDRuripEVhAWCrhxSSRJKonEaQXspt86EbvGM554CK9u1bkGw78aV",
  "key38": "3wuCPxAuxSLZzTuzQ4DwNpMq7yEpZAaxZbV1KCCS5XiyN8scrPeXTfAkfYLziHiPnY3RpS3RdJw1nzWuomroGDWV"
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
