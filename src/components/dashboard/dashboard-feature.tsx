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
    "2qRRjnWC2JqcsvmZtSpoiaQwkT2FnwiQCJomK6AFhv31JCXbbAEUXY6huzqf1N1qybLswKVcupCGr5kpWjtzWj1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsHHyR8rrMkxC3z37MPK7domSeVMw65KX8VZS8QFoRQCh7QNvSdrosySk9QemsZoahD6t6PfUKgjWuN7BbxiRS7",
  "key1": "2ZuxM9AEzwkZzMSSJ5erM1SmUByKKWuCyyZAT7W8JBewseSkNJDeMpo1bSwQajpMpY92Dthf5FhkPbuPdw83FAgm",
  "key2": "BcG6nMpGQx4dczQhMv4JuQ6deqYLxEhKcDF3pDejo878ESkopDm8VHrUhveQq6ioNauGTqGsh1AYyaXu2R87S83",
  "key3": "45jFPgN4CprhcdwRSSRAV4qfWQfmKzSud4wqhWDafJTTyGKuadmNGqBUofkXrMBmJy87BwwyKwuJC1T3FRNjouiY",
  "key4": "H6WAL79m7nLZ7H9j45veKnbTvYrRe9r7UCBdDF3K4dg9kwPfkrfx8L8yTS9HUcrry2ykWF781YFk56Q1iCVo9HJ",
  "key5": "65VGzmCXAxMKgK66xTsR3yPhBPkaZj7EjB3NyiH2tsNy1eQku9FoMutKoK7neabgbXHrgrfu7wr9T92nhQa74fyQ",
  "key6": "4zg36wp9JZKzJ8edPjhZDN1FWbcDqUbkrB3896JG5wfVJuaFzVZGWzGtYiFVxfWhzRjSj35SFmjtww8XviTKciFE",
  "key7": "25uiCoPPwCV8ZNjiPjdnhrFvabZ4zTZZPQFpiXxe1ygHrhHwBzopLisrQ4JyqZEAbgxsgYrH5AzWmRb5zt5AJsRX",
  "key8": "36wEutezXKPVzom4t3HiwB7pBE32q5pfiTscPKrvrs2N2bswcPZ6Lso95onUSn9v6eBsezis6dth5AzDjYNkfAkV",
  "key9": "3aKTSpBGDt8AM4Y98n25Dun45A7vo6nzMNN4QCLiEsoCGcWYttUQtAFY9FBXG5TBbnR25kd5aoxpoSYagWKuq9b3",
  "key10": "ePscWT68WFfUcs8tu2FnmEZsQPQrsbRAg5jAt9f4N8RtLVavnS5iMj1FN7rRPi9jGcP3kD1fEAmFePJ2tmSbzxc",
  "key11": "rMBizhP6ndpMuTufo3x9aCMBdmunY4DvydHhSBEBcJxCHaZXNJFsdi9rpWjJC15LPBYJPZ5PAs4ECS9Hirt2byH",
  "key12": "fuv4PULFpKr6jfp3RREwmrrsQyFTwvMCZVwtw4mmL2rpvm8a1YDzfkBfbiEq8rEc7sLLEA8YqZAk1Z6i7hBjQ2e",
  "key13": "5u5qhjmiR53rbZuj3LMhRg6jY9WFF7RMB5pRf4EQHyUXuMLAzrsgbAHWESsDARBuE1bc4xBCFSEKY7EHCn7V3YHr",
  "key14": "5axHjXTuBou7AbbjCUg51ycb8B84Ae6XNPZfHxmwJRSsHNbFUDjTVVsZ5dMYMLwFfyspPqSvWehviwSRj4hTKKcV",
  "key15": "3RLxP1uPSmh5Q7ckSLGTwJm6LoGUg4VLDgKeXa53PuZMXgLP1ZVkyWecRaDEjP174E2VYe87qqHDf7oZCq6GhjKp",
  "key16": "3W5XaSnUsyJFFEXv9LuMkc5v4gcMWLeGAyVrfKaHTtnCsyKCyKhnKUpoQiJAAahYxGX8TDgtSFaW6j5e6Qh3T4VN",
  "key17": "3AQQsJBhqb7v55VMLGQ8wQK7rgN2tnTAXNotuphqkMBVRjcbgtKUduYHMVjyECjawF39xKKFkhEoEF3KfxxoBGFq",
  "key18": "2VMjRzpv9ZEW141TZcAkMgJFsK1MagXofyHxnH8krA9G2MbUk2KLcsFgXehyUrr17FzUndWvu68RVPG26KdzU6ZL",
  "key19": "48g4xYjPNpn73CK9FBeJSY6whhmVcyijzr4AgVprQYjUbWRvQ8M1oLuNMhrUvtc7mNf6DBZ9BHSgDDQjBy7rqX6M",
  "key20": "3i5KbemD7KhxSgtXxc2i16uzMnPmKWfaCtUrRYyHqXH9CK7XjU1CymwPf8SwDEY8yqjv7wosAZJdvVKjWzKKu2VA",
  "key21": "61bcp9PSMEMpvSdrE87x3AeEdUXZ3UGyjB69iRGHteApaAE52xPZhnrCYnwCkpJmenctUpaKTz6ZfLUh43vr2VTY",
  "key22": "52iUerVEBJDfG8Ha7ngvMyazZJ2gXco1LsRQxkjCzoajJgxp9K3WC4yX8FuSWKtZd557ZUz3JKdChFKnAwbWkDAR",
  "key23": "4soscZnTH7kNA4jJ8qNGWNshTpiJijMzVBgnfeedSQ3GAyCuY8acAxf2j326zbJDgEaMD2WzErCqkxAkYp5xAD4b",
  "key24": "5ArrUWsFKjVWoLdX7nAomXrdFfyKzk4mtrAAa73t9BAAr1YE3u24mQDQWWMYvowH8GCFfnpiNLgNvcX7RAenHXvA",
  "key25": "dFRRjFGKkUdDyBcFm7B7Dpu7xvtHrmoBHA5LTw9MUVkjQe9szTcKMHCD2BU9h7pXwrdmZKD6asigANQdx4CTVms",
  "key26": "39CSD5sHnumKWHhju2oqR7Q1aQYJm72ArU4evCC7f2TeSttzdccEncDHSR4tSxbivpx35D6MdR9HWG6wBGZQK4cw",
  "key27": "3s3oLxwCwc2wYQkUyA1N1zgoTTcfsgjKELCye5dPq7vHm5v7eUstW2xdAP9EBL7Lo6JkQ2E1TYq35AeSvffJkho3",
  "key28": "3d57JvUAMuZwu398FoN2PP35FLpJFHE1o6k1go2JpsP6JvVpiKhyUyQKCiqGhCA8PJo9WsNVmjh1oiTbsC1gM9wp",
  "key29": "34Jap6jFHmkiiQJ5VDzdRrgaPFi76LFuWqLLq76bJMYKkgHRzusARkjiXwdBw138aTbuEkoez5eHfuxZAi6joRG6",
  "key30": "5vbcF4FqJVhLi8RdYsBg3b6T5iQ1Kg6oRxwhu3egbpskXX6Tt9i7GToLqeeTbm4WuPVFUJehhT9WcEHx6oWVeksZ",
  "key31": "4TgnfBtQuzATNynz481Q5mJs4YBFG51ZnUhkvqDwGUMsKBdRh32amS1AHqAimTVVZVobuToreTyHiQCsj2uPS8DQ",
  "key32": "3BA5phhtJ5YGrL6vHLDao2CPUoHrcPvezZfV59uvc8SjFyvbiHMAb8Jy2Z6X2B5skZq1W9kf9shTusjv1ewF4qp8",
  "key33": "4Xv7t7ZQiVDuWiTEqMywczHLLUnMXhrirkWsBbCE1fhoAptBgQVM3hGBGbLEXeKJmFUK1GNAipXFJkBZ95Y6p7xY",
  "key34": "4MDiKRpbjzhoLRRDBMDai8tSyUxLP5QDBsJ9DviiG7XQz8zroXhvNAHnRnCt5JGBs3Xkfvtzh8EoPkxYr8GkY2MY",
  "key35": "5LBxM2paxGYcHcJq9VR1YEqQCMPKcG378gnGkEHo7cA3ayE3tLD2i8VfhQsBGarscwT6ZJw3TarBHHpuQmwtLLPa",
  "key36": "5EGQDfS8PqySesVUNEJRAqZAH1MJox26eYQasrMxpFUZ5sHf2hto19CPFjDzhVPEdGDr2FpD4hU4ex9dABNDNgHn",
  "key37": "2muzPii8yTX1GxKPJ9JHmwopjNBv7Dfe6KXJ926GLvVsGynMNHHeis2RgNqfkZVEz91wVyvot42Evoj7KNHa5C6Y",
  "key38": "44FTWNkCo53JE2k5VGSbB78PXcFoqViiGsgCJ4TLNVZUdyVB69KMCRv9W6RwCbAKzsP5DeEcLz5gp6HN6cRUZkBb",
  "key39": "4mxqWXzpRcY7sZQPytRUNUZ9k5i7QzTiK78AiXMWKmpzyzS54VsjMAawyRR8noUnrb5vSH9aVmjhnvpBQWcYetMm",
  "key40": "X6Q9D2nbBDkYtVeNGTDaAAxA6GL94BGBW8aMJTD5VM4NuSF32hVARMGLakfodbYJb6FD3v4DpifcCxFLw2YJWNV",
  "key41": "4dxGhvHBE3cy3uDEASkqN9DRKRgkwG7ayigp63ycFLGgn6NVRnvySQQ7FPLizaCHEKoYNEaes7VqJr3DNfGeoHva",
  "key42": "2YKzwQ8fugcZnnzkj5hHo1t9of5fMZsk6zvY8qp8dQjGtj1SzN5GcsRHTjVP5qNB9nbfQxCv9fNBk4vNK6xmUQ9u",
  "key43": "2reEy6gh5KRiYmRRXKpoJ25cWEyVhpjzqVDnZzB69UBZfVZFqAH4fcqWhsqmttB6VwyEb8kEheTGmBo9BUNjy76h",
  "key44": "4MBY4UE9xLMKXQNtw8f7AxXgt9y8FFvhA8wHuz45kho71VDt953DYdPBboYUtmnQDrVPBiPNSKA7desRpP7rEQVd",
  "key45": "4W7gzKzo99KudrzCYpThyEtm42g6hSgz2fyNNwpDGw8h2EFp7DWA7VSoiQTV6EYLDLbfuvxq6dfMJ5tWmoic1fo1",
  "key46": "3X7ZWxWTcKBtm4jCTUqEBZmCh1ApeKvRsrLYjuS1GTim8HUB1CZVQS2Y9JBGPg9XNN4D7gZ6tsr4pTV1nsbt3mcF",
  "key47": "2h3rjq6bRy31yutF85xgtnBUrVcVyV4C9f82dnyfFhA7PWDy88j7oGZ4pcLbKYArohtFTiPHovY7hpvLoJ5zPSVo",
  "key48": "2Mwnq7JJbeavnZoDCZLdCDH8chrAecPn3ATdsmv1na53zHkVGN3jAQ7tUVuviMBXvPNrnibAExQbHr3yN533xniu"
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
