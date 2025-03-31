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
    "2fKnL7KFjrkKUDsCv7a7Yd124VFH5gJ7rCTQxUpL22RsDd68u181KN9g7Cvcw7kuwc781AXDxWueyqpJpB726xCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w738orGLZrasZ8APpHt9bouXo2c6Mt62ip4eH5CQzBbUePD9DXzSiJBnLdd6c9Vy61wZXkLJxxjERt2GuQmNdJZ",
  "key1": "5RQu3aRGR2XugDSJv5acCmUVCg4fTqurLdD3wusNRBCLgxxQRKaGooc88NUswrGYXLb6De31Ck2aWANUDSC4fjkv",
  "key2": "46L4iMoJTeD6EDFwT1aAwzhntDzkdAVSkBMiXocHsqQ8TowuCbPNgbtDcb9zN9M8KtSq6iNhUU9RWj11xUezugAe",
  "key3": "i6u22vd6kb3jmKvTG25NWkLuTjtdYydbLsM3ZwdsCBRDZ8gRYtyoBzgZvUMonMQzq1zHaxHhJYzc9zxzjedWATB",
  "key4": "5EbvN2dZrayXNiYyG4oxerFanbDdfx1TwuBL7NA67v63esNpJh9HZhHDf25uX21CXPkebKq8KoRdwtQAdz4i73Z",
  "key5": "38X5z3mic19DSFMXJQFgcWHQN7AQnzyf3dbX1nggk3dN42TGj8a2tmjP4hd2jaipFjVgGwVhRAgwHZuwBVGz7vfD",
  "key6": "L4bwXXuYA5fiWuREkJhwHVjQhiz4njPHx4R74GLSJAfZcgtTqXx8MzYWh4nafazuJ4MWZWmXRvNYVEsoTYBixLj",
  "key7": "2J9Qq7J8T8K5RM69uXtaZCR6Jc47mAZE6Q2NXqxeYmMvM67oKFBNesYpwHSbLZAP6i2EJkHBdkWHU8Ne6p5VxExm",
  "key8": "zzHMNMij18q28pdV2nwEFwYVY7BZfJ94pxzdEYdJfePMdk6g4Lc6mmjcWfJbkyAtt4GhwXPPP9LbYanWSnfa94D",
  "key9": "281Zd2wscQ5jyd9mcuhVRhH1wBTMvTt3yM9Us8gxhCM1peqJQ5YNp4ewBaXQ5dCFvhw1wR3ADPEHVPAeL8TFaXsL",
  "key10": "pRLh2SPGE8whphtbJA6DWWEzVYEmkryCsVR3Bj6stGruUaEtsydtkTaf4KF7U27j54mn4yAK6GipbuRM2VJrjMt",
  "key11": "4QD1i8RarM9TcaGh8dC2Tz27VtiDxvL31sABzrW6ccCoJkWBSonX4M4g2SEQjwX3fPo3JDjotgM8wUpwhDPstTet",
  "key12": "4GkMfSPDeL4qzgtJLw8xeLna9S3NUJoWvxF4wzkCKWmkz3NEkZzhn3q7KdK2QZeqjTWibxqhad5vP1wJKnPHedwF",
  "key13": "dkLD8huwfC33f2EXuteg6Wea5YhAhKYTorASaU8CPxrfu1oMdh8juRQkYb4QYHq3RmBiSNtTjjHA9EGzuY8WQAy",
  "key14": "ndHuyji5zyMpE3Hb3ESYWJFkAnJBsYuoRtiH2aaxyQhZBzAoDnCzq7sTdTtN9VGxpRKGq4eGqStZZeV6pmTPwLL",
  "key15": "v1jn9Yj66uGKdqTQxqBgQ4rbzPCXSp1NQh3vJAqZ2BLhZT7kxFRkedB8yywpkDdBk32RibkLJ3oEeohcrwtd77D",
  "key16": "5TXubCmM54B6FB7LpcLowHBtJFynst3toAzb4PSKZJwYtPk7RZLWpkGqSrJFz9VrnGgmcMFcYoocsbsG6QeHmDP8",
  "key17": "xtN1oyi2muyXzNFPVzvqvcBcUkXdq1adHhKccaydLPAWm31ophNmBiVzdP6JxffNRrPvui5wmw3DBNXt5qYfuNZ",
  "key18": "3vv9955UKFck9nKHWWafsGkuM2L2b5ANXHJhER9j7aXbzrqyYhx3nqgpGFdckpvqSE4We4P74Ss1J9NcmRd4Heye",
  "key19": "43d9YD524cnWba28R4qA4KUGkLJDdUXWvMVZcvgrVB3g1uERcMJ7Q3mo7LgSJ3emVWVWufEbtKGnQY2gDK9aTVnG",
  "key20": "32BcYZunuroiA48cyKn5WicbPtimVJRwhy8JhsZ74bGkuRnGKwNbikbCbwBS71qdGjmswd4pprf94pdbtKPAyNgj",
  "key21": "3Tk1GDDnkPzMNrz8LcdNFXZksvxfDTdT8ZosUCkpE79E5ptSfbUkw5TAPy2VykeYtWAYRZEH7a1qPLxAvhpzrqdE",
  "key22": "2pd968XfjVKfCQfMoFA8LRt5Vi1FBmvs4UZCX4FT8HQt9gp61i7LbbCVz9iDMKw5An6sSj5wHDQ2t6smVqmR66Yj",
  "key23": "4q7NoqNi7tuZsfeDm3yz76wWq4kkYjJAzYvMFtt81JTtQGiDinCvP3wRjF2PojCXEC8EDUT6jaGzrxUbyDK22ijP",
  "key24": "23qiCRNK2bTGEhHZPd6usJoX9QZUshmiehdUXrRFtYmR8iXHFzmrmRFP1SxQu1hWixKzxUewUxDZ3aYNjFuobMRE",
  "key25": "2YsppmwkQYuSG49WPvYDzBpkgxDApDtUr1EJFFZFtEycYf6TUGcEPNbKxbsZxz6yFDWD58NvEJYroWDVhdVDU6wj",
  "key26": "5LTED88M6gST2reL4cycRJAMvxjhpcFkBpyohZe3nYcFsMfiT45eNZT8cN9N9RRnotryQXnWsuNTFW97UnJ3BuJ1",
  "key27": "5sbGeJsX6ZeLEBoyQe12h2mM4sArStU9srdshjib26sSScAKEK7o34BZSr4LUSNW1PvCc6HgCbLH9XzA52jkmMuK",
  "key28": "3N15oBH5JekXcLbSbM4jKJqQXTU8Uvmxa7PiyFXJipRNP9BvoWrA1b1PnwQDCrWfLDCVLaq7rzGDJsYVMCe2oAXX",
  "key29": "3B6aJjGS2xho8p7x4w8XcHVae545WsoLWJHGG9aTAMGhkyXUAabBMpLYptB6GJ6ydtcmviSP3haUvzYTHAwzxngr",
  "key30": "3wAzmQ234xKvXGG4MBUCTLdvzzVsw34ENhvw9ggjgEK9YbU2qSVoSAPFbLFJok8Pfb75UppPX6V29svfVSkEyGJb",
  "key31": "4BXmpK47Z9w9cFmU9XHaPArifc266H9P8J8TFhzdouZXmC2uPuPUw2XChAgPyA4D8XaTRE32W8Wck5oGmhuiKJfZ",
  "key32": "2PhpcBdoskRkgd3PJXwjgt7fAdMsjtJyCb7dvHLvR8GfumefQQSXt3SaKp1WLf6ghfs29kuqacS8dtEnUyUizG8z",
  "key33": "3z1jhv3UhH5pkCXkocysqqry57d8qbjq2AUZzmEstB9Ew8H1Ww5XqHzbGZsgUxveczPoafFbWRt8ES3Jhs1dp5oK"
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
