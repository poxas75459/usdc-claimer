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
    "3QGiFrxLCN8n9yW7yyrQBRYJybtEy6teZfm2pbow45Uno8dMgW8NqDMXZZXx7nNehHYARcmgDq53NAmAWeMHger6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTgfSirx48uBsaicLsQyymjT6dz2cJUffKVT9LtU1HToDWu97jNYCEZ4bLoBWxVzHqVCXkc5zrgQtECzBdyyJw6",
  "key1": "54U1C9gGDSN3971Zty62CVPquJJ9cYNSwfUMRimW3yjsqjYEQNMktz5E6DpXYQdNeXPvkgwGLYEBA5KBUM3JaGs6",
  "key2": "teY9sa3TmYa7up4CH4UrJ8c8NMtP7JdttUFkRb3gdHq6mYB3a2LHMDwhKhkXA1CjbtTgzQdakewPCx7wnP9Gyqg",
  "key3": "4K1yNeYjjpLoPX69Nbrd3sX2RBBqubAPNxYzdWHU1wLtsSdGgVUpdHYnqvBf1sQNYo7kjDPwwWZMMf8SARhBAjS2",
  "key4": "4JvKH3Wm6UQt4nZo2MFd7mii1Dxf7GbtiNVmwhj5s6vKxNWui3JuqX52yN4KgCAunps1fFZ1Fw1f2fkYnZPUESrB",
  "key5": "4nEfKheY93avk2PQfCmnR2W19cr3juvg9nbeXoUp7RughS9FZJ9rb6oinPZj2fSyckNJkpRJBrW8w5zHg1QiYqEn",
  "key6": "2gVPmrVF4pVWeZqYa5vxHJKpnEvs6vuBiSkoEhCm1P4GHCx7UZRRnRpY8uRjrHGVWPd4wzT2cBTJxnwTDEEKh9bq",
  "key7": "3jZGCxrSzDM4L9naS5eHqkcdNBnaz5xmXjPritWBymaUbAnFmE3zz9hZtwhTmNFEdVrYzavazqy967QyFXuzmvDT",
  "key8": "XNtmq47ZWYaaFAaAM67NmeBi5UjLYMZ5HX6XfkYQyb1bmpQpkfVA9b7djnP9hzBL92uGqFw8njDMVAFUVJ6NJcr",
  "key9": "sE1pfVRsmmTkxBbq9HVTt219qjWdKSB3fBdLgEuij1mqNtm6ffCa2Lg7th6fW1wYKFQpNxBgY8Ak322dyt6c2kY",
  "key10": "22CYkXRZhS4tt7Z1WY4FfoLDuWVuvcmFrxGCSxk5Xh577NNhLsudmsb7V75akTQz1KMc8a5WsdCAju2xSjB9cbp5",
  "key11": "2DTV4A9q3dwkuNhBZCmYwoLpfeqREGbiqTyYQkpVmb9Yyrp8tREeKZgEoiLX1TRukwSMwPMVwYwTxBBmJGNaZ7Es",
  "key12": "3zXbBZnieQhyTANgmv71R2RBsqsRm8vNLrp8nxj4tWkpqgGiBvBBWSQJYTmXz6WnazimpWUo5im4tumA56aXAuiH",
  "key13": "29dcKiBqCSbYGJJKWb9ccerhh9s3VSoJyTAugXjApNVsKFQxbBAYQgAg3ZsZC27VJmJ5sCBDCsAGrQ9y8PUnBFNM",
  "key14": "29vgVzjpn6cGjg6UaZDHpzG6eugfLgVtJXqv5ngGkbxYZBnS64bfp1BouMiLjn6UeFysfYQsJk5Fvs4uKHfeWFxr",
  "key15": "5aTDt58G58cLBDjNNoq1dEbPUtMCdZr1ZaRTuYMNkTptudf3UTyDD6cHcT1m2UsNuoeKc7NgZ3WEvc3PMTFJP4nL",
  "key16": "57q3rVB2s8Fs3Q1XUwcMLBBsR9pqgHnW4B84ef7UXW4jH25b8rtsC4LG7FpVNbhManUrV34xgGNSHuiHpQFPbCSi",
  "key17": "5zaqPw2VDLC7qt8ozV1qm1sLbBAW6jHc6f4dRiiQ74X6QRxr5yjNehudyTta5tDgoH5kyVmDH4QzgTUZ8Tbm8mHJ",
  "key18": "3GtiYttUZJRVKBuykc3iTyAELTMq83iWLNT7tTTrekNKDcPAc33crDZJGr8FoVZYXVNxGgZ4puuXeJVV51pcAstC",
  "key19": "29iq8o8JPj5yyE4hjMSg9NnkLmrLFw4QK3H9HtJda6AqMHiFaijtbG7vyzAPDYVcEm3kZv2Abvzv9NVPPo9S2jve",
  "key20": "F8gzNTZuFGThoqp1cFfqa72utEeo8SMqWhG6oMFvhviwow5JJzbqeNz1HVVeWTA43wGBVfGcQzFt9pW92WXXZnU",
  "key21": "2k8XaSiDk8w3e4ZP9hPDLkZqVELAod9nmBcs98QDDPAQ9DDsHHx7azqRhSekrqQ12uaCQJUiVYek8dYNS8N2emat",
  "key22": "4baS5izYm5dbacEMq5ejNFzuJyAjzoziokengQGNJzFoveinfP2UqnaEiPP1Xu7aC9uCAsKn6pBtfGsX5ED5sGky",
  "key23": "58ExV2YTbJD48TGRCMbXbLu9xKsUwZtYbJhmUwnyDLyrfPimx9KbvTtEyLGFChgPsGzx54o2R25k2LC9irmbrhHZ",
  "key24": "58cRzcLm13E2utuznMihcGiSW2prfLL4aFb9Hn5zKFpSWi7o92FPYUxvBBTCyVfLSGk74Xd8RXhe7vo4EvD65ad6",
  "key25": "BkbTCaaSRv8sphr3pabG8UgLEwZhobrwS2GZJ62QUWtrz5EhjtnH3Zm2Uq1qXcdHjq7YviGc6584XwZA1z7Fd3e",
  "key26": "5ihijwBLxtrNeWGhx74U6Tr4UwTh5ricuD7woMUjZBVqD2qpFRo43vdGiwDjBcJM7daPLzpvdbFE1aAgymHmtiS8",
  "key27": "2PhYARpT5PtpWpkaChWCzS1uztYpAStdzMKsF9rr1T8a9UmRmCZnb1z9SJsbb66JUCL1KrGue8nfPkohjNwTYe8B",
  "key28": "2pihCTVdqMB7RWfEnhhvzou5jtgf5APh3evjRajfaXj7hwUpvaQKLBtodxXw9c7hRtSehvSqEscBBaeDLWwSuv9P",
  "key29": "5bnPyTSRc2EvJ2TW5i1aRcH2Y3tG4JeSjqkGwvhE7uqN3Kdg485fCeruqbnZp7vQYoKNYqAKCuXkxpLA72sEUWQU",
  "key30": "61ikVUw4uYtQt6ZJw4uV7z6tzJ7SKiebyNGCjiguK2NixQ2PSiBraRmfNSYdfv66ewnDCWmf8nfLgFP8gpmuph3E",
  "key31": "5va8kf7LbTqab8YdqQ2Fm9xJjEt4c9jwJXPCgMWjQG9NaSbJyBv3tjkxZesmwRwDiQy5tYzHqC9SbG3JwKuaE74x",
  "key32": "4cNFxGjZPj58PRKZ4xZEMMYCG4T3wanuU9hJy4HBXzLcQL2yJQfQRDtYz7g6ZQGEksKYg6E6M2BVfAthapXHWiub",
  "key33": "kfqHD5QzxoU19An4LR39Ym3ejx8T85jRU1meCrmUK2w3ARpJb4FW8KiAbXHJeTrQmPiqbkxjGKBaS1doAGd9b4m",
  "key34": "5GJRg1sZ2wmQeyTSkS6qRJj3hsCfHhFTi5oVJGCgdxDtCKa11ByUoQPEAsAzRPB6bnXytcR5EFXUfxNqcwmDU5PK",
  "key35": "3PJXkBAYdB4hLgBG64pDANybU3t4VZKDWYzGAMCJqDm55yUvJU6WqFdRdinUavGyN8E6UK4yzPpeWA5tjppiaejA",
  "key36": "5dcJAaEhw8FhsR6LWpyP18FfJHKC9UpPpUxGcDzCacWR3sBADAqe6AYcdzTSAyTYTNhzzTNmguyNyY2b6y8V4Mns",
  "key37": "3BLtHXzR6W5YKj8jzkdNdydbzqmpMAGe91QVEDpihh5KXqDfcyjV49jn3PDSUkz4ckyDnLqVXscyH8qHdaEQvmSk",
  "key38": "5nmXWtUGtdp4uFKku5WDUnaTRdUekGd717QHXew2znKTPD4Vc6cVSQrrT4PvkcH3smpeAVKYs6vfTMQwe9czxn6t",
  "key39": "3Q4rjgXHWhquWky1ish5xeusoUMuJh7fhbrFqMQ1ezR5VDwEZ6SEBSK4DWrsdMJmRYVsCXeghHXbMgHG4tvrkfZU",
  "key40": "2TwTiSpAenBzhthwAmYPa3x8ojvASu9iJEJ6Rc3rVRhSspjKzpqVh8c2ne3BhCZgfVsAuKwN9YgML6CsNrnmxv8D",
  "key41": "2SLkn6JrmfnKCYyoauJXHUG8meiJsXqczw49jLVQPSAEYqn2craXvNbdKMUEjNLtv3M6sheikiq8i24G8t5AFVuB",
  "key42": "38heYWM3JnwP6NUNv7haTVM7AKLhvE8i6VKCkWprbWFWm3fwRz9G7kpxz3QAbq9D8oh9GwzY7cisXLTXAGrpnRGG",
  "key43": "uFxiBQKCUvCrAA5DMiBi6zWciWUG4uLDX2px6piyUMjbU1qMxopVo7bWMqsR6redMNhieb1FMoLeSbAVhQriiJb"
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
