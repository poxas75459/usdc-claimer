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
    "3eDJ2VsHeX3wzPdFQ9xpDjXgcMib5WQQGXLP54JcecDtFjHVNHxYzv5ucEJwgUAm52EHPvBwUdWDwSdkppE5HNsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vcziVAfCr2ok65kPLQATn3SrbV1FKh9FYZq1fHtFHtCvo1qY3s8Z2MSNyBuPj2vvz6aD5BVP55GJeNyPXNsh6C",
  "key1": "5AdDtDSnw4kyQdTriAHwQprukP49psdLEnHR6DCm6bWhXBFkeaNqqaXVq2QKTg5ic6yB4bfZW1Py6nzr19E9NHGA",
  "key2": "xM61Ukfhxm2giAPdrPwphhhCtDByoEU2M51vbv1y89WVm98EXXZ9z28cnqWsGsfuojGdacHc8BGror2DimsrMRH",
  "key3": "3L6RrcNCd7mmqWUuDAn51mEiPBHk6wwdTiuNJjgsmM2yzKGsortbH7zc33podqTYGDZTta2hWa7Hd4yVJ3WnpmtF",
  "key4": "33sFYnv488XqfhAgFDQ22uawwgmGrqTCeJKpXLanu3B1RgKtm2vTFVHWE8UhYLUsXnbWhVBJsZzTMchYq2N2Ebb9",
  "key5": "3nr868m7HUhZVaf8DJSaQ2C6tc2cedRTNWkVYCwMPFQfh237eA7uupXJEkxjyLN37mMmq8pCzVPb766xdR7Znvdm",
  "key6": "4omenjFu1aNQBwAYeHmEgsH1yan1C8LfNw4cu5xLhG3QrjkXULt6NU3CxV7R2MJ3m2hkcRdqmajiDDHqJDoniKiZ",
  "key7": "5Md4T2PUPBNPKGDNhqffmeh1Zys8HYJiGeCmqRUrvradECexVs5xGMJ5o9MnDNJNKBeMPsqgshkjexUM52hgeC6V",
  "key8": "Z9zujp56QgpQRQ6GGrA97c5BW8mtrrshYoAjE9zmjyQqVeDbrV7EjrAomgPYiRYXuXsBTakMDpv51bT4SdHqgfr",
  "key9": "5NhRFvEYbu3LrCw1XAgtg3fibD4dZFhMYD2VMnYWJe56PR18JF4ow9bmn21FfnJNiBz5Ya7Z45fZyY18G7jSwB8u",
  "key10": "5Epev3b1gHFQGZT1bsreq88wrHuHmzydFqH3175fKBkSnYumB9C1xRX2pqy7TiCPv2iUrnMxznEWy7zBk3ps5891",
  "key11": "5YZmyXbni4eqKiNLrCDXTNJFbGwKfEVSQspnvBhdjqTgDXsvd2fWo55ptn2kDGsEA86zWMXEffF5oQfg7CnViTXc",
  "key12": "55m6nn1cxcGfxRuB75jnfe7479VGrcF1VujZ29pBQ5aVnZMoje8yXnnqHsbbzaFgguKpJdwQ9wj6uMHbS6uvkbu2",
  "key13": "5Y2cx6k5VhT6YDkoRCt1vAVYtHfg99xGjHTD8hDv6fG6PDf8m2smhdbYPpC9g7jRCorr7e3iN14Xqm6QLcxbkJrA",
  "key14": "4peiZqJ9zkg8pLfWZhPBxLvTGb7zqN92YZELDRz2LdaXmiErW2MfuQg9vfd2Hytw9oNrcJdG2qdFDt9WTi9kZ1aQ",
  "key15": "5h48ViMrayyF7vCEcgHuRrVsbsQudrD8it4ZpdZ46ToKqw3jZmZ77AKd1B6cXJsJMTHLoL6RVrLLLpy4GVMms9Dk",
  "key16": "2sbTz1sUDG7BSj3PoSXxEyd5UctQNUNtBZfeCaMp2MyWUoAZLCphfivS1Kg4vACqhqyec68wF8qDmjTZhBt4VJzY",
  "key17": "eh3NzXkgJnB9j3x4SqBsSVB62wxEYWRzSqsLGFjSqgLLuckPjSXspEWrgxWFFtTMaUZ6axFTzsYS8Np1wZzh8EE",
  "key18": "2KX1Dt3pQtHvCxRCEeaAJYwETttjYZ3cgN9wF6UrfBzF3KvHdWMLyjz9MqLdgbyD2rXWdF37s11hqKqDBBWrjTvr",
  "key19": "38AtiDy9XEBZRV5cnNqTfHjzcEohzabNyt8fvsVv1XBGdGoZukQQ3W2WXQz84xwbveNLdsZJN6hNiBU6uR7Gk8tE",
  "key20": "45o1j9TjGFn89G8jQMuWfwqqMWub6upu7nKkyWmnTwL3rr4cD5UFa3DproNAmTJtiGVBWdvNyzDyBXJsokYJXTyZ",
  "key21": "35wYT6ktMfoEvmZjZFo8hvJ5aAbKR1fJdDovU6sad49N7VwZaXt4XzxDTqcp3iNVwpoKST5ra83e2WacnEtSn5x1",
  "key22": "5zSQH57JbTqpUQ9vshDUbby8KLCx8dTapMsm7nLjNrNEuj9qEJ5fKpdiZsVcZVX4pSjZEEpqDHtkd7MhwHN86uEQ",
  "key23": "5rKdfpxTq4ccoBxkvgahu92sc1Lzx58itnZxbnMdd5L5bdne8LJeVAnqw23fmBUgHjeETVBUHikpEr9oeHydtBsB",
  "key24": "Mem4edEQjaWAQss4VNKzNnRFNUzeFGTF19ic9vS8Z5fUNf53aNsbgY5j4RPMEosVz8AhZ6FDTZNrpQHkhwNfbVD",
  "key25": "D6552NqMLBywVssW3YvPqqq3BXwoqTCa7wiZE4E17oqy1X7e412T1f2xe58MJxRLJqr499ZWYaG4sgUXKcrqBpW",
  "key26": "2ZWivXLYWRmW7vQCk2LbXw2LzUMHjyj9Yxd38UpWfNUPXUZRDqWtCha1ARUiARFW2phc8LSnQCcXXYQpeJXmS1x2",
  "key27": "DXigVW5W5WiCVKrkP6FYUm7hGRGgrX4TQeCQ1h1ZETKzPC3Y8yA9dvG53jSpQqtAsrWQKXRPzoY8nx3GT4dxYDk",
  "key28": "3GxF8c6FAXzEhU7yNxpBoUZcJZ9byPga3vTdvMu1RQiBZerTxJ5GmM6wHqtMLcRvoEjTcnVXqf6j9aF4wpTxQ174",
  "key29": "29x6BpaYd5WGQaJEknUoP8cUbHBdBT3BnE8pQLDiqjwzshTRpS615Q7Vce9WU62SuVExJffz7vdXzb1EGHdVk8rV",
  "key30": "496ijAHEGH99kqDQqESN4X8e54kxxExoD1Kua5pEzdY3iAecRwQp9Dzavpdr6k3Z5G3zmbRhc4skcrUuRRYcrsXw",
  "key31": "3yJyyY3iQLhfoLRrZ6sdowXa77ZFoxn7ccwbbY6hyPAqdrh9sY32suNRWTTSYJbDNeM3j93AP9fx5FEgttL8qHkd",
  "key32": "uNEy1ZBt3328mn7aJVaXNJ2KT2KYa2NXAX8RxETZyQwXxAYw7RaUBZ3Epmna4qXi8XgUMFq1FTWgQdM4rXMZtQB",
  "key33": "3ZFuv6ixSxWNJfB3XGWkDAp1qToyBFwcrASq6eiHjcPmgaDuaiZHncRWKQTU6S7fPn5Uavo1uP8hqUUkU6qim5GP",
  "key34": "52YRBuo5g4vVseAVqcEqUvbyp32XQyXaHQ69S7YyLFbbQQAsnKtSTRzMZi4Z4QqPyR7R2YHhkztKdEbWnFJ7pQXh",
  "key35": "3Vp38w9AFwWdGhEriZCk29TyA462UgF67W3kwopBvoSKu7boVEV4EhaVPjypTyQb5c3bm4e3UUZNX2uvGTTMhTS4",
  "key36": "2knmGCJXMQ1Ys9urd4PAXYdaKjVxyjRYdotjUBKn7ypes4ahLqPsDjL94ucS6DxdcoTYH9BbCZU8VpY6eTNyKdoD",
  "key37": "G1UY3XxJ841AmRhcj7hDshwKUTj4MKHMjsnW6nQHXwwDLepr3jTfr6LrmFmBCThSoCeEYXuqnaykp5WzT5aWZWE",
  "key38": "2EyuA22XaLrq2TQ8zwAFzAMosDszY3btTha5bLfXrH1wh32K7n52tC539hnxM1tKZHuXWq4HthV8TBzfKMjCCfWu",
  "key39": "5bECwcuUSwBpi2Ka4WDzep2iZdL4v6mSrNXK1o5vMuBA2ZqokFxniKgxG9FXXSwxPXihqX4K8ogXPYHESzvdT14V",
  "key40": "3whkYs2YkHvTtdouFaj2D2SbSpaCop4gHAeFVTKuzTPJRNvrJdpzk9hPELu42Q7GKUA3JTUb3i1ELmb4372AywtC",
  "key41": "4SYp4su7vGk7cxLkz18BBiaFvDTMV627hfUJHSqhcoexDbtLtH4MsFZAakZ4i6u9SWE4EFcGQDpyKBHMqm2WXC5i",
  "key42": "3xm3PzDEVwFYaXa5i4uQvbsRaV7oX4ncoJCffkAVhkF4xD1LQ2nsNn5sP47irsw1SB2Dmxp8W6Bz2iq7gxM5sKz2"
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
