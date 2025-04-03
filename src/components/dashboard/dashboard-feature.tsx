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
    "2q6XGNqYikCxdV1AtmWKs9Sq1hr365s67wmgYnzSCDRzXxV2adXoHEvvEt4aRNp1PnSw6yw9PAeu91dov2vAMbVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qVmi7jjCgKt2ukTPzS5HyfZ8r4xCX3a1xaUB9jjkNgnCMwAfygpKay4tJvWCrgSytpWUasWDDPbnBTij6i9FLV",
  "key1": "2KxVeqnJJFkU9izeg6GewAPdik6z9QNkMXvNemwhLxXKch951MmAQ8Jh23ThH3SPvrwEhKBAakxZdNadA9ohMaXx",
  "key2": "3M4A6um3UVgFpHwAEr5512jZ6suo8Nj4MiwNg2apJAV4rrH5WaDrcHZW3w8b1c459qooHPnyTHyxHC8StbKZid2V",
  "key3": "4UZSoEbkD8GMHQrFvx8K4q54UtuBqyf78MG3aeiUafB3UjPpcNwHpjofp57yUwAZPQH8iG9NDQ8QLBTuNfBGNC9",
  "key4": "TFyx1Qf83X7fpo1dM73HiTRwDvEhFGboH5sXTszPSE3agpd9mt3i596ywkUncrNqvRR4XLPpDBNqNjPJeZZuiUf",
  "key5": "XzbgDdPeJLAw4BxAYnesi8u7eWfbrCt2XmRetZFL7wfK24Mgy7iHaUBuwRwsiinHj3GSpHiq8sisFv4DNQPoH3L",
  "key6": "5FtzmXN1VnsRVj2z25j45MSEatXrYaA2DchyvF8okNp8vQ69nbFP3xc2vDG6jygCMDHQMJe9TeCkU24UE8vb39qd",
  "key7": "2SK4ci3oNB3nfiWMFNFRoFZDzpwdCow1iWdtLJGqG1fxujkrn1D7RzwZCxqoizDTEdf1MxiWVaiHm27e6WcTnJ6L",
  "key8": "64XycQBRBi5c6z72P2w2nAMs4PnNnXVyyaizmHv7uwhSEvpmQBJgBJ32W3sq1ZCYxDPtF7raHnMxuUjgkA8Li6o6",
  "key9": "5CbGsXRHSLT2kscnmq4vQ8XyE3hEph1FSzbyTLNVVZnSeJk4TPF7ZuvRXD2B2AzUKBVmWoaX4H3yxWdTSsrFqg4N",
  "key10": "4Af6Gn2yr74UUQnLj1M1SUkMbpySWR5AWStPf6ADhMUd5UHrJMKk3yGhnui2xwC8RHGgA62kMBAbikWc9yMTvHYj",
  "key11": "33DGf6jSUcLTv82oCJKAUZ2M2cC6nKS8FKMgVdVSbzmrKntzHALuW3fUW7TEYthanubBMmruS8T4W2D4JdmVgK1",
  "key12": "5hWVuaA86cMwtaYWpWub9gh2KpMeR4H87iBvud5vz6292sXwb8W63nnJ8EjGBQeaCemL7GihzwF2VE2a936SmPKi",
  "key13": "2EjCTB2uibE2x5JaqCuqp4aBcYRv85A7yPu9714cJhePtUSv58EkSMFYvqzx8ydQmNBNRhbVNbstWduzH4zZ8uyZ",
  "key14": "2n9LrXqKxKFLUb5WLLrj7NXoDuL97Te2somxixtXBQq1AcufH94yxRS7aHiNftjRPzvKHhRqfukwAWNk2GG3VPZw",
  "key15": "3HvZetSf3U7zNUbtdYu14sxi4m1pgAMUu7ExaTq1spv8KNFNygtvgBhexgiWQ64yMsUukvCSPkgUkat4TS7QNDks",
  "key16": "5vvqubyynFLErFAeSByqPi97fSAXAMR8cNzDYy9JmqRry4Dv37TWtL73dMyFLfbuWk39682VHosdPgdom6xLiSUy",
  "key17": "5EWikMTiQ935DCYkBFHDEsLqRRi1d17rF2QCHAqzC74Fbh5dR33y6V3MnM6VuzSKWiSxTezC5fisMjHMChLLUDNi",
  "key18": "42YQjt14mjyuuXvDzQxAwFfVWEvPrryTUQQrBUdUbCCnXTbLdBo9F7hq7teGJnaWJX9j8X2mgrHNFF2tHaTGjPbi",
  "key19": "4xCgnZoRKHEQT2HmfhAvetBoQ7YiZ1j5kmLN3g34tUhymNMvbo1tBth2Y9PcPeYexRh2FZEjtqtVb4XHuQ2fN6Xe",
  "key20": "3igPcDqjj1fQAa1bm1LajxY31YVw2UDYuupngtZgvCYkmhA1tx4t5Wv1qZfZze7NR3L1yJ2CjdzTPEcK9FjyuFJK",
  "key21": "2hzzTQt57CqnzJ1kRfb94bcAqYUxEqXuZXHe76Z5czns2uKiVGtvkWjxKAgXVFgXtgiJQMDJQ7FivPLmB2QtbwfE",
  "key22": "5tro34P8vE6zGFCWHgSmBhjP6gMX7v9WbZiGbwQCuugzDno1LotcVqWifdzNxSZgrix2vD48QGcRV6QYwzcqyGqb",
  "key23": "2qUm4RmrLDqVZiAByjnQPB6ZtQS4hkn9KZVjpepLmYZNTwYJBoJkxzTHQCN8wsXmPubz8yPYMUQ4SxcW6UVa7Cdy",
  "key24": "2s8Hj7Wv5LVXGiqRsRodaXjrKekGHQaYqZBCgQP2hWf6QkjVuzQqR8k8yb3kjewHqXVLEkqSXDHmJG16NuYGyTM2",
  "key25": "vvpXHjWbvqe9SFi6HzwgTEK3D6jFbLmW4v9VzyfZu5Behdv8sCByJmo4g71BsLH5Zrfsjv89BcqJ3M7ERy8SUmk",
  "key26": "3N5jDH4JZYzbz9Ze9TBUNuwyfBc3tq2iVXYbpjy65CKgBYiuRM36HDHBkyyrctWeszsFtPVR2CcfBMykt6f3zRdq",
  "key27": "66ydqUiwFxiEtEB4SpZP4XPbzfcqZ3GZVF7VmuZ6zANZAixMXa4EvpGoAUjok3pouz7pfXzDf7cbKh4LUyXnLbce",
  "key28": "3KiGY3a7ATg3H5Pw8jZcyVmoiFWnEtDbPMSBK9m3wz8cKVxK8P57wnnyrjyxioj5rY2RVG27phRtjxnuEDcVnPNy",
  "key29": "erME9DiJxtPCLGbVM15wd8vN9ECNGSockj26WEd1P6LjmrTwnig3FDszPeyNXi8DZFCnY2gWPK1kS4B41CsU1uz",
  "key30": "47JeZnze8TgkZm41wfACoJY6aR4AcJQkngFBKMysNT9ZXQnZXHRqnXGVYEsWP6pjJq8Pk83WFTbxqjEAhiGyVCFF",
  "key31": "Dxaix6XJVsEcQsfLKrkkTJ2yHK3tUJ66qWHLVVUD5vTCio883HKYndvHDEoa8uSNdZPHYxBqjmtMsPMXqZd89u2",
  "key32": "4r4JKYwJLDb2XiPgTMVhTG9CJjzMg1gDK5JPMqhiRJ5TAzNWSf56KRG1xZszz6n4hG5dg9KsUAxUnEXgz2thJuL9"
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
