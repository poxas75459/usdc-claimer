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
    "2Xq6AXu9k2ggFNvCaRGWkm18ZVHUc4qC3Myq5B2tWe9NJcMWXiup2uxLMdnrQ1fMgBmFGXHC1FVyCTnrCxfTpCuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XAkcBKdFDnWhpTxaKU5uzqkPKTK3aPqncqX8uNXPEhrpqdrYddt5gzS23nTA53BvnMZbDZPzWrRSpaAzNTXyPUp",
  "key1": "4X8rJd8b2g5uoTwgtrTw9hGae82ZJWGKptRgXPc1ZpPjMfM3igRF6LgcUj8RwktUsMCiyNm3MRLeppY2bzdLhpmA",
  "key2": "V1wte6pvvJv7nrKpikon5urB8fGrSs3tB19pj8g3FNfeYE2EFf663UPPxnLRA8uQdcGSNkGpVqvL8dE8aSEYMsa",
  "key3": "5BQ6Ev6qr9SPrsoQqCiVyxTRraphkrnu8AHE8nSDmVKxtS3fspYBFARWEzWpxtBNNQ9p9exLJ1s6ArS9WUK8HyXM",
  "key4": "43VpRwNJcKXa9cRiSZPXCGR8LjeMeya3DXUhCVHRast1z463XiTL5dcp5EbHMc5HoSP8EPBQ2sUhrJEqqjwuvuSr",
  "key5": "2xoVZKUwAPku3BJe76PSjAGTNydhc2wAK7wFdq4grZcCYSYA22PSus9vUXBrEJGNUUscLAyYVGtW3ysbebKv755e",
  "key6": "4jr9i79JzDCSdgcv1sgNJP81HgL3jUnPmoQx6r6mgpadGae8vQqA3cPSoPip4XszxeUqC8hnHD5i9UnH5DKYRQ26",
  "key7": "9opp4kEnAAQzMfUmxqrzCTAZ3M1WQ21TBhWGBtRafky5w5yEa8J4r5vXGaRgdLL9EWxPZS4Kbh1KPkM9o4DSDGb",
  "key8": "65W63QLf9Cq4918jary263FkxjbL78z5C8DRTU5bVoH9D7UXiBCfoRPEvm9eo2mJw5DTnXArfNenT6cp2qLLfcbE",
  "key9": "33d1E1NpiwQejJFxFXkeh2Z4AKSdMLMNq8R4ZoTrXcP8rnoEBJpqwkZM4XXtS67UP6vMEXTQPVWZCmA9a7t5Lfc9",
  "key10": "qnCa5XYomxvzec9ufTKXPKArrGY6Xyo32j2NhSPw1TGMW6cJygnyEN7bqvN9BRTx7wydqWwZZGFQZurU3tsKDG5",
  "key11": "4qdcEEfxtjV2NZrg3bfJpPi7JkS5maJtt6KnxbFkQagWATXF9y4FJMWyRiVZhCEVcEBUqTJspiFZLDq9URvE4sJh",
  "key12": "2eYWYfpNAV1ByYXSPfZQLAaXpnHPkJsokyhHeFwSY9B6Gk3wKJL8VK5AUcBi5c5aR5wHen5snxVJNqtFqNRBVJKx",
  "key13": "36KG337geDEofbysJMUwhjPp6UXPZbkkXEN2RNJ1QEDdoVJbPYqAqmPjrSkVdavXMTGexMLKmtwr1qK49jQNKizd",
  "key14": "3Cvdb3nW3UFvdpRWuwMbP3vDt3f6jM3hp5d56HZUFP1p2i5UWWHPNZdDPYfKHowuDe6UzRFx8yA227ad6KZ99RVj",
  "key15": "2BshiBBFxiJ3bcUEqKnCB4N8pxzH3q8AwAg2Pktj8owb6fDZKdBphfP8fKkxuXvbe5tM4taSxSPx8qNoR2sw9tBv",
  "key16": "2yy6yoqofQVhFCzzjcXZ1QURzJZVrPsi8S2wUnVrMouErKjybSH2U3fQkndRkRtTXwAXGEYMEcLkztPCUbvvtr8m",
  "key17": "2BTBDafpACN8YayMzzTJLFeb8ssJXJi8jaYkiEqTt1t8GKMq2v1wrTLeFb3Y842KZwydRXamibMzbkFRfJQMvSx6",
  "key18": "2sUSQoN5s7ApnRNczsx7PPkJnLfg8o5tYTFbjH2td6CTX4LR1Y665nHowkuV38uNraMJRmcPJ7hSCWoDSfXb1LTj",
  "key19": "4FHpDf8AXMj5dC9XPBiuaWBaZGzEr81mNwF3c6AYce1kuPRQNTo8chWy8HXTQT4tzTg4BcMMnY21jfVMgY7ZWkXu",
  "key20": "1whyRKimhWunxG2ov8ry9qzkFG79Rk7qQCFCdby5N5yBFFuFLjWndun3uNx272wp4k7kdKSTLnVEtiouCSsXbiQ",
  "key21": "5HVGUqbJLssUBKaB3wHJjwaefbPrrB1cuCEZBfT7pb6mxipwQxfuTPNCcbBHcdK9uZ5ewowZ5RbEebdAdnC2WDW4",
  "key22": "nofXkC1FXoLAS8ff2zf7LKomipeuvA6EXnaqacsoftWCzozP8frGdbqoMFr898hnvoAQ4KmRDymoJ7nNH3eEHcv",
  "key23": "5pc7mYMAXvGFPaDgmfGjiRbu2iKYZhX9G9qkN2jFbssFpAHEwXt5Cn4ZECW8dxL7zA2dubwCkJgEA7dgTSLXRST9",
  "key24": "4TQYXNSMmk1Je9BEgipERBF7GHpZDCuRiiR4uqtV7a66Ag41GScUwcvgohAPZe3RZVX3ytLuZvwF9oXMzxvsff13",
  "key25": "3ZLT7q9vQBm4khd9sMxstaQSJBsWByxGjixZmToQ7GidNp6aA2ZuASGUod3jDUacRKQeBTUKFeuBcMCc8TVGfLhH",
  "key26": "62yKMcHdZu1mVavsdajCcNPVesrk7UD7yAGvtbTPPsfnRfQavkdLGaRAof5TRgCmAqVMy6867hE2GcUeyDQBHZxs",
  "key27": "thMWCFWuCsiSNBYBm12y49VUd9renzoAW2ecf7kNXtzsGYRcvCgDR5m1nThdeGJsoL8B5uQ11oH7asemWUZ22pa",
  "key28": "kpa7pWCA7Jg18KQWKNwiZfchfqkgMER6TwvNtBW9Jd95u7uMhYHtRtp9CXnvFUEDtj3nCWiDu2ZETZZxNkzCYzN",
  "key29": "3V2Tg8FdWCkxTvVfBh9fVSNzvdaXkGwHrd8bmqMX2Hd2Tj6YoqSRuKPAEoa7mUWtPN39AQk3cruzk9wL5GJb81Zr",
  "key30": "2NYJLzBWSUzXPMynhfvogQyhFQDwQyCjw2CWobTuuM6k3eAp1QvKUCGWMCo3kFRoqoLxbNRVFV9phjk2H7hKG5dU",
  "key31": "3ZJ4cJ3SRH5KA3GmsXzS5SLJratYJNPnMQhLchfnDNsqTyWj5VXzKAaJRNtyiMyLfuYiMmFUocFwfzTCAZpALrwg",
  "key32": "541td2PCLDMzY5XCypuDYsPGmRST1MtqPbDKZj4iHSk9LToMm4t25e7vsNhSJug9M4N53AzGnhPA1z8oEP7oAwU7",
  "key33": "PQqqoE3wUSTd1odjs6mPr2Cn2akgkTvAz9Hc2xx2QFrMNGR1Z5QoHHqjPTf5PagkR4kHTCSg91Hxm4BGtw8p1k9",
  "key34": "2mdghRcoN67NJnoDKXpFunYkupzgYjZq5jzTcYiqE69PNZ76nWuumD2kHSR16ZGuUkLpScWNZPo6qcDUjp7eaVn5",
  "key35": "3Q27BdfthuXHUUyiV5zJ5c3ASKuv7y1d94J8gqVqAFMb35qb2iUHZeouhJtghcLz9d1S9NApQ3caaY78WH2s3nSe",
  "key36": "ySKYyFq6waM6o4CghyvbdFtdBCL4foBU6gMVnHy75iVmRZpALxWW5pXznzCdE7JCJSyAE9UTZuVDSkGbk4LUEaJ",
  "key37": "37H5fjNnEKFZPsgAmtukFoeeiXnyo1CeMkpD7i7aahS1i1wzKDc3poXSmQkQ9UEfh1E1EFN5BcF5RrezZ3Xnjh74",
  "key38": "4KnJQW8ja71xf6P61v1Vz7bhZRs6z5b6j7Qddu8juUTqEVHakUhaTLbxgxVEUennprMdUX216N9b5N2zT3SMnnxf"
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
