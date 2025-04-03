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
    "3sHoGmVrTTJb4ZRnwzV29VFx6jtbVWQ3Th8NZXLzkkxgw7kS73fXehaLK8TqikKmzGvAr5YnLsAtboektTgRveJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgZ3RddhfTtQfnyu3GTbPwpTrg5RjvSgpKJps4wcShSEU8MSSZV8nkam9ZGkJ4bkQ1Xkaz8mWaV46qLCQJbfKQF",
  "key1": "2zrG2HR8g84uDA8rLaFdUUnjk1tynjJ1cLkDVSaTmdqyH3ExqmJSnFtEj9zgj3dsAroMKR7CwVMoM9CAWCd49M72",
  "key2": "3aUEdneoXwEh3bHvDxSifbH8Wx82z8LmU6PoCxaSKyGHk7i1BNuc8upz3KXv2ZNY1bFxiYNNnamtioa4xwkvNyaV",
  "key3": "UPtdwMD7c7ZXshT8yVEavQQu7JLBgFeKpH672wkZWpSxjLgjytbQJEszfsqHkLhsuXhBxzHsaXcHLdxZctqkq7r",
  "key4": "2iSHogkPLQRJvQxsLcdbZV5TQHZpjfczphyQq718owjBgoy4UdJbtvjedrnMi4ZXCg3SHb4ghS2DknAVd6UzYe1i",
  "key5": "2NtmkxCWg5k2tqYoz8D6zNb9273Hv6gBHvakgsJko711cAm9tTxQ2nCTzqty4ibspDRTd2HKbtcKVzgYq8nZLkiF",
  "key6": "45LWwRJLJLJy7sHuFe5139k5sjiJZ7NBPYWhKpocr15ZQ49ae789yPd5gtBSHQCU8ttzy3ChRHXk98VPJaZmunzD",
  "key7": "2qKBbuJHKVczF1ErrfyP11RNjqXPQ4EAtrEwgojyzEgbAjWheWp8JRiBrZ4SdBtqt2fx23gWMCPCQ9oxrMoSHYf7",
  "key8": "P5Q2cgGXfAvsUmaDDAXY7SQugo7HYjg2kvcDEJMnB8YSffYNt5yUGNKAqJmz9VX2rzc4pYs4JggNjQNov2vCxBT",
  "key9": "Tuwpi5VJVbmZ3JTFULWePVuFK7S8zpsZZo3hRyTZYXw2BsCnH7Vtc9dw9kEpfGyxisKwXyrqwZQkXN5eBtpBEnX",
  "key10": "4tce3rk4FiWtGJgtGNoKHDRn7WPFKJZWWGtr2kTaFncDS4wqSXL83ET8xqLVZPvabAXNnDaGr3HHfBAC5wKvmJ6A",
  "key11": "5ktTL75NQaffpAhLBTwyRxMmzaFaVrU3DZ9g8qCVSPV3njJahtg6WZLmWxAqhudNPn9Xr6C7E9usb7TBnmG9UUXZ",
  "key12": "z8C122VAVr1N1uuVofs4Sr8qWUar6ej7zd9LrGkHDEV6GJqcX4Xq2A8zYYP2G5HEVViRs25HyspdVUcKQVYpfBN",
  "key13": "64q77WRdvGtaxuWdaSVxfhqqvKeBysdEySDnzoSXSBSacXYeFegaALUCynRgb23eCwW9zkcxnhXdKGgkHbmr9VDL",
  "key14": "4TM7PSgttZ1PX9C8qMEzVffZHbfhophxfgRW4tiWfnjF2GBafCehe9uK91ev1siwkHZmVanYUNzzfUjbEM58Tyia",
  "key15": "4i98htm7af3n3EB1bBrdjFSwfsAuSCGpRoA8E9QFaaHRmrzo1rr6qRzWuVyNLo2uHs38Jum8c4Zi6mLsRkD3nwQa",
  "key16": "GcXXrbL1mz3J5ZNmdGkVJV2mSWurDA7JpN3cN5aBqD7fXQHzCwU4sSA4DZv9Xipjpzhr2uiFNwtqrVGBinkFcM3",
  "key17": "jGHJKjkyH8RvJ2HVwy32vwThpYas4vtrcbt86X2V7piaQ17mkGxvayhRYThjrmvrHYRsMjQCGfdwm45E2tyNXkf",
  "key18": "2Upx2N6bwYfELuY2b6XzQCANh97g7EGnVxYBLxMhGs5f3CPxVVrbTwRXeSGod8KPxzVx2KUr6SNQf6tUMuvsJeM",
  "key19": "41EJoo9razEnCaXzLsnVtGPrisEPE5pzTuTun2kZwkekvTbq7vShMEW7NTB3Ms5kTynExvu3UCWSA9FdAfVLXktR",
  "key20": "2K3PN9UdphxzrdTFXGmxC591k3HMezzamViAvNB6KRAVwSZ2ur53bDmrmvDZa5a2229Qd2kD8WeEgwzbnKRrxeJE",
  "key21": "2umzjVhEE7Wu4fNGPJacymB1yEAWWnGeekZcs1MNfwSARf51geyZjFcr7r5gqLTFimD2JiokUjJWmYhBWWe2s4sV",
  "key22": "2baGgHqGHnbmRb5gbrdEfuSawWiB2u5L1d2CzVk7SgM55GQxtPyZ8GfNz8Z49esVoZ4oKyLz3KWYKKqBQm8Z97mW",
  "key23": "2utkwCFLacYfxEn2bXjorJRFDuchEJCHFxPU9xeSwz7xoYWLEXo2e72fiQyPCudjoymKavhXrTKfAt2Ex68WzRgE",
  "key24": "4i6g92S4nNfs7abbxz1wYBtdz1ikgsCPSSFgSvSdryAq8gCCB6x3CF2Y1HZJNDWE6B5EumJpMdko2SybAn48z1fC",
  "key25": "25GZZTTMKD3sBmpVeVpChgSNjJyQLkmtcegDTf3egGkyqZ2MG7zbpR248SRKrC7GsFDozGzqSxvF7GvjD3v2gL4a",
  "key26": "3npJt39KZBFGeat6JRETJKzFzeUjpqT7BgapfvY4R1PnwU6Ut6hSqpfynhGmersnXBpxxNWmUBPVSQhzvXCdTgdH",
  "key27": "4MmtCZmcWAbA7FNb62iK5HQpVnmfg3JVZYW8yLohpjDBHunQ3Zy67QLF2YCnb2VSWdrKSwvQUwJnbghgxhC1YYkR",
  "key28": "63oExzjVwKkr5kmHsYCWpDB6n9oLX6fYeyN7APTwP71mJDLvJ8skpGHksKK8SDeZHLZtrgqzC2zNnuskSFdFFquh",
  "key29": "3w1F6TCoUDqcdTHVEPixWw9i3CwmPD9Heq8W1F8SjNdTJtxSy1qNJz8hTR9dJhEb7NyRtEkejZnntNiN8rn6ouen",
  "key30": "4tG6HTPo4qwhBgjeBTdSGSFWJPXj22rpUKrSEDeof7poXDxuoPyidCsARv49hSUGKsLZjPjbgsb8Zv9Q1Mxgsnue",
  "key31": "3zCkf8WWESFTVZMFC6fEM2DtrMqcUDA7fRWiXVjS6jgwogVfZpWmo7TZWDHVRBDCr2YHMogoaTtBnb4Dv9wBHfKn",
  "key32": "5e6J3888JCWKPAAb8CCqEDoPvKNFSb7mNe2vADTgUW7V3yegRVHBR7vXjMK5QXARceV4vuMo69Sabkinrd23cABN",
  "key33": "5wU9Aqo9yavhB4vB9BWJqHgVoSi2ZEi2f7s8Jy9ZiJ7dVxvUnDtAqeNneowEeu5KQtzsQxYq6piuiJ48tmXs3eC9",
  "key34": "5tdEsQ6CACCeeJqDBXxQzLRkWbRL5puqum7id4Yg82cA8q5wq9HQpp6ASt6dorSw6mH8veMkaswgjK4fW7LtieEi",
  "key35": "3A4uDYeH9SD7TnhZj5p5hVAcTKiZU9P3Rgey3cMQBUKG7x5LZjuxbCgtcEdV5wFaG2NMJ2h3c1CnNeWU7hjCdSpM",
  "key36": "53Z2RdbaJxYPQ8Gd5Mq2NFWp4x9Wyq24pp9mXFfx65s1CW88QCvSgfgVDL2myYHjcS8PdnEDoERTLszLLuNEJ74e",
  "key37": "3jtGjyYAq7yN8i33ESBTezuycUEKCLF1Q5SA5JbBYy1vSdq8hK2px4Hz1PEVMSbVKrpveZACmLUmnTDu3WKZcePi",
  "key38": "3FGCoBTwXRPwhP7S5dHHAgcoh5mwJASGgKPDZQwWQvedY8d8GEN9doAdXRsjEA5e2WM341V51zsXKWNHRcE2BKhp",
  "key39": "PFJLCeFF5ozkm7r25MAyi9qwRXQbbJNuHp1n64hiMUZxMDXoe3YJC26jCsw1Fpk8HEBoSaMcxiPLjmnFUPRWZek",
  "key40": "51vU4vHXD4mkxWijucpwp79mN4BLwJmycjjBnrZ3LZ5c5yf3LMJMB5XRVaTwhchHGB9N76HhDEgFAhExv5CbTRd7",
  "key41": "4iht51gDkHuHkmJy6afwuxREDBEXFafrMMx2kUUKWxLLASL3Q6MaXovjwWE8DQWuvH7m3AyF4bp2dMRWFSr2xt63",
  "key42": "498xv5hAt7bSNPrR7mMsX1kvHZRRUGuQQJSC5xzKqHuRZeYkoGTYADdA78NpBfPFiAweaUbtogz6aQccRYMDEJ1t",
  "key43": "4ZU6bCwJR2WnS4gAEVsLTZTB46GGDANUevW67B4rXiNKyiwhG45NM7FvpZqMP61ReVtn7M9uda3B4v3G4X5rUcG4",
  "key44": "GhYVNdUymYDr8szxxSbSiDUmCkeFDRr8qAorK4fB56xzxH5qRwznGu5NZHccddXUH4dqxQ3eyquM9UWBd2WiTEB"
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
