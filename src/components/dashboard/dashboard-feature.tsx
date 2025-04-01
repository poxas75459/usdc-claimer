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
    "23bhnDLJHug7RHKjCzavc45h6UnQHi5oBsqf9HkBvunaWLW9A2QJzMp8xFBKmKur1kCZcvZihLvTFzL7MoUSHyc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fh2EYQCRT8NrB4fYxTCi9oMGu2kqCDVT3yPRUxaYnwiVzSV9JarrKn2fjtofqJXwRkmvUWWzUQqzevRQR2Y2MdJ",
  "key1": "3JCbxWUJdjybU4JpmAvgkjnhdhUdMzbgD2PW6rowdmS9oWUASbbH7Xm35X6gL6ChuG3SFiHpfZesXTuiPYTNU47F",
  "key2": "5gAFDFMHNXBiuWGxyWkAtzCFFByQwnZvfa329gGcZNk3gsCqysiZjfD9LNuagrrD2As7NyAZBRcBe9hP1e2VpvEW",
  "key3": "32Yy1jFDdyVAZxAnBdojutF84RLqwvPfgtSogTuEB2SHSaCWwteJLSRiPnK5qBuYYJ18ZPNM5ytAQ6zW54Kyeh4y",
  "key4": "2syQuhMXbqSr41aNkMMpikohvCXi3CfWy3Bbjn3JbsmkHZhS6Q3fYMgXDGvkDk5DmWNQizXE1rYDupcfa7PsFdwA",
  "key5": "35Bysk1aAXo6Zb9svE3sU2w49ESrpiXPLSgMFJMHmCzWe1gZK1LXZFdLPWTaAr5uXLx7Be4NbvY7xHDChJRvQTr4",
  "key6": "5Pc144kSeiWRoJYHHGBXjo5hs8giyQPWDmrpYW3oz8Vurk9Gg3tgXXqfxW4hrdr1hzUKXt7TZA3x6YvsWwDEi5H9",
  "key7": "GYzh2hqdqJzYWM8LGr9KXQeVui5ZNwXcgV4a4s5i8RGrjDkDvawGvsUgvQAJ5jNd5qxGCQzwbiK21cfvnZp1JQf",
  "key8": "2MRs61hw7EDYkQvRnW8hfLbb244GYjyj4Nuyige2CUx9i1KrKGnUSEuYTDAThq3viCtCxk7xjzdWHQ8eskqdp5fL",
  "key9": "5UngSJ96cte4cQHbBC2EqmufKdjtBycKbjqip21aqbnmSe3AppL4DJU1s3TGN8y9NjZb8dHmEh5mswus3G3cUWyG",
  "key10": "4dfS3AYZ7qYvXBXGNz5HTEYaKHCxAH3BzVPYx7deygRwYE61yj7TcXazoaBdYBbCKjz46eLb9aD9Rd1h2B7Pu4iN",
  "key11": "2rTWtjf41bcFSiC8ZGYomCF46PShLfzDS6Yfxz9W3Cu9FrrZ44kSgFPpoTL19CTrWxWEg9rhLYczMd8am74jH8nb",
  "key12": "ez9fy4FhE4zuT7K1KjRRoZjovQuv7nLRqTzHedRx7ZTERHk9HVujR8ayPpHx5wAscyGZMzyEdGH6B5TmgxktWWh",
  "key13": "3E7GsFbkePp4h6YfMbsYL8V19iZLo3rgsrSfe99JJySBMRUNHjzyvTXb1ZnxQPD2C7phxWM9ZAUBnBvsz7QxkwXm",
  "key14": "4W5cE5tBeyhu5PzRt9pdewek3SU5RJzqSUmeVLA5nJxxSZtmHmermv1H3nuHwbXERiiwumkJBNaA5DDYbn9QF2R2",
  "key15": "svbWzoAsbtcn3cydvk3on8x6pxhdwnUq5UvAcbJrJCoe82VRspusM6KLm7v6THY2tzrgdiFgHCAgnFiytjgqnhM",
  "key16": "2hZkPtSth2yQWQixcK1TAHhiJvE2mQRm9fFmZHVGcZNQtnLxdb915nvQnnFbvAArFZhiMNT6naKi6SUtiWrJ28mt",
  "key17": "nzSQKZF9UMwvtefJwVkD57TDySmqq5HdUeL2SgJqD7Quu5pQFC5XUibDmKeAasZ5HWsbyQRbEKAYru1otxqWWeo",
  "key18": "5PdyTvgc9ZdYovoK43kmqsfPM7MiYQA74UJN2NeFCiqQz6DAPu79yd7a12b3rvDf1rtrtxrShPeLeEm9qn4pTRCr",
  "key19": "4m2S47NPe4Wki9pp1iRibExDze4LPVZJKYAKr3k3XwkhJKTQTALzN5hyYFBrtsfxicS4hVzvhk2d9s9JDLjkQKRG",
  "key20": "5ofwpvDZrGPWJuhU1z1bzz36e9CpQ5wPz4XZtDEDaQtCxxpbiBHz1eXXBcctnMNYXEJ1DUxiy1UXuwRtLp9EeQUK",
  "key21": "5T3mnujjCwrUyjuxGHohtWb3tL7oyYotZmgT3pAbSTTFMVbJRPwMBUojvSdoohwUEBR2mqTNkjsDPxy4FZJwwqr8",
  "key22": "2upesBxXpQRWzjeAmUFuNHwFGKWgUrD565mQVWPGLj5hoZMnWXsUy5EFUDnPJNLEFR4kHxuMZfnau5vFDFFC2WVW",
  "key23": "5WTGMhfjBDtz3Wq5T44UsCUnW4oF5JbfENkN5QJe5RND2r9zk7kUtANnk7vDgMURjZMCRT7LLpNsHrqWxvFhP3SV",
  "key24": "37gD9a2ZfQFaoi3uVxbX7a6Gyc57iGSd3F59h2FzpXrhoFax2dipQDoZM6KDchd25axfJbJ34pH75DXags2My9Bq",
  "key25": "64vnaruRft89pbharKZK2NsJEdD1sSMSAwwPnkVS9GcBcD7d6YjioHGTxG6mJs5aTj9UXTGhNhsHX8uXrDxKPySH",
  "key26": "A8LUg3r71N9ac9v8dx6apUEHa3AFTH3vna8nkPmjkD4sBAWniphdrfAks2XCzmwqESSPk4sa21ZNGbckzytSXkP",
  "key27": "ivLuFHbmNg3RAqsDmubsspZ9ryy7Cw3uuuypQZTxDDTYTxgogE5mPW8PaiABujMiZifseZsmVhKowNVL5DetEUY",
  "key28": "P4zNdkpiqmCxfYzyJvXKieyENxBo7fKenzL7EVh2Re5YRono9eZTXp3sytRSAw4UP1BmtBAT4Ze6exzimppRBrq",
  "key29": "2BrXAWWRK72ajmmXLLJoU6QVJZBtQBP3Fa2SdA7sXTTK3sovjAvDnh1Bs61yAuJ6oRR5aUkrySmk3JrqEZvPtmQB",
  "key30": "62VasUKm1wm6pWGPJnAqzP6WUgMdViv3kyWY79ADe48gAHLCA6ea4gyRJZ2fGRLdXgW6QKT7GeDY1y2NMcWN7FuA",
  "key31": "5b9XBydfS8zUkrjXdYcDnXnNJhGo3HPPxM6QCYoF1ZEHPUcEYw26NRTVUhzfZ19dC8BSiyjFRzUyGaBJ3dYd75pi",
  "key32": "2kjdHfTWeqNEATzM22RQdxJzyfDxGCgWV8ED1iDfRp48NAZXGPNQtYqKjDQyTZVJjQUZU8EtWRo4yuDuVyMBX3SS",
  "key33": "2tfe17cEsZjNX9pB51ynkky5WL2Ty7gLacqUPKgwSuiqfa32dMgL2u6T3PQcJt75NwCGzMvx4LuBHktygKsFt6Sk",
  "key34": "4qauwLgVyoBPtJxu6h8NMzusAgguSBYoTm3TghFBYiBhEEyS1taYjWgyWpfoLDV6jGKuuCJrTKE2zG4dVXXJCANv",
  "key35": "TvKJKvV7cUQ9KV9BNpgbmf6q6YAANyfGQmWFj13sNu8tGqrovDsBPgyYPAVgYTp7ASJAMThjfmLMW6HbKYKx4U1",
  "key36": "4n3z9bZUwDrkrqxL8coXfPKe9PwsJkt7Quk7bTf6iScN33Afx6zBdTfUkSGsH13VKP6AdCp5uJQB6A91deVDZdxS",
  "key37": "GYWHAVYUWxpchmuUu8N2ANMpqtRibRPU6NjBdgXnFkea8kgvfwh61Gphzg84YXsdxHaGK4CXpRRD1FNWhzqFRte",
  "key38": "WxsCWWPPkxdm7FNtbRBkQQ9HSv76aSJYeYqsEBQHXcLJ6GxcqznP9Ki8DsVNumxuNM6dDpj8oyWQ165Rt1PtZHb",
  "key39": "2mzJr17pZ5ZWaoRvhWJZhKeHkRsmX4T2aTJcoxtJnm8AqFT1gmJLfXX3jQer5mmfSCXFzCt7wF6VT7LigWZxQwFH",
  "key40": "CEnxxUhXDn47MomjVe8UGpxmVgmx4zvvJ1YMu63yeVo63gV6uiou3LNvHdCaNctBK4VnJ4M8HwvcJZ6CkbE7vx4",
  "key41": "3xSbhFBsUBh7ggopy2yTKYXdyGhtcfiZiTsM78i9swfGG8eW6GeoY37Jyqxgm4B6Edhip3UDnCpJUs19y4iQ8TFC",
  "key42": "5JEFUfDNSSpGc5k1Vm5cMNeie3R26Yz6RSZr8Y8G1fsK1KTt619yrU2Y9tEVquYVJ4iZb9miN3L3LaYrvG7jRuie",
  "key43": "2GuoVGuAHygxWz6BueoKAq52yTPxQok1PdWSJdyiSAMx9gtkB6RFjcadhAoby99T6sBBRetdefbSfVYygGyzHFeo",
  "key44": "3BtXKtuvTuKYdpTHaaLjzHKUtNdRicvPG5fWrmypq184hByAc13YDBTX2Kp67TsGaW99RVWvqKVJV3AEJmcyDznE",
  "key45": "32hX7dk2Zq5TrD7LAttbsvBm4ZgJH6VouWZmW8eeuPmmvZUYP4tv8YRjbGV5qFmvH8b2CmKtCC3fHxijYDw7kPDq",
  "key46": "2FRat7jMzP9cEoyz7vuDYVxmB34bnD8r7rha9DMrRtBrQphsc51sjxAt1UVpbyaiNVTFg87ppfvQwuP8M6VmAfHZ",
  "key47": "5qH6ub7hNcGeb1tZ5Phws82vXzzYh6UsQ3tMjqdbZGWGQvEGcBXA4TgjLJExvZwYRtcmh4DZfP3NU9oSuoavh4TX",
  "key48": "2hNow4zCkhk2ifncMpGzdcv6XDH61aEbCo3CRGMf8L529oDbkaR5NVEWQc2p1L6TqPQFcRKbEuvYbSTNfWi146ve"
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
