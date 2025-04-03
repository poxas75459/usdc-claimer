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
    "6oZvgbce8oJaK7GxkQvsGDejLV1BFM39Cb8SN7nt3HNxtv5tytUXYGYq7V2HR6RtL3tVF172NPXih3SyinQPS5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYrUa8Y624wpHnB8zW6WEGrrygb9oqs1gZUNUwCqB8Y86Hbo91uTHs6xynBHRT8fM4tZY2jputRMVX42u5XRsdS",
  "key1": "3wTxZs4ReXJKS6XYtHmzn1WUN347NNLgYswLqiuR3pTgvcHjoRvTokSumCg1f7xtKo9q1JXAKPTjG7B1WkqoMB62",
  "key2": "5sqVtMDwecSuaGRBGJ6RPjdwhDzWQBU9WWdEhvRnsndECiRnTuJHbPSahXzDwC21by2XDwEDDpWB6sHQNLh3D3yo",
  "key3": "kuU5eFpHTdPaS9JN3nk73S77uDp8V72wRYffbgDJSGcQhnEm9QzV5BtuJcb1zT7sMjPTcVdXVWLMRQgD8E4ia7L",
  "key4": "3eknhGoDWN7v9HTD1CNaTkxQxNCKSKMw7Emusa5PWbUKHcUXZ41tR76Ca6LeSyBphnwDD8KQVLaC4LDxDrH7rzrN",
  "key5": "4F5GkMyvLoN7VxerMdnLcJ4DQwjSy4JPnmiMJFYXMbWg2yby937QUzqXLsVEv2EETm7yJ4XmZTu1WwSHvQzHSGz9",
  "key6": "3ZSja7Eib71SyovDBGVRZPwd9Nc19XPmo8S1jioUbtHRpouCJLzkM9ZC2XXGkrmV4pkqHf5jNmBB5ptRamGEHTkM",
  "key7": "2pRepxG6N4RRNJVFcHS4ESrbQRQVLeaPdiMWnHP3xCyRppMFnAGR9nLq5TEMf9bDL8fiz2NYWx2syyavCqkiJzvU",
  "key8": "3H9vWujCAJUwgdX6N8GW2t7cmnMebKUbz6GgUyFUeUMFe4aqZBTMEHCTyKdwYX427qhXWuzYTAUyfocmh5oduram",
  "key9": "5WYm4stc9ki2MwrJLy9ZECKoQ52wYnqVkb7jj1NyCLuAsY6HUrNsXSxQMreRxdLKuVqzJGxLrP4ca3z8BXquyxb8",
  "key10": "RJmAzRKC5tYjC8J1JPhRz92jJSV6H6BU8YfgnMVJqzshnetCc4teRGPvit7zNMdSrVULT9EWRbaqxw9TxZueXNx",
  "key11": "yXFED4vhBnV1bwZqQesZLg4G7KgHoaeWxiJ5qpNWARupZqcjLzpvyRxHbUY5JbiGZgzmTGXP4oTevXSFfPFpXq5",
  "key12": "4EZyL35DyJwYAvvCvXFPHNKWQbRuWbtYeaBs8WrJRgFuTH98prCQfydhrWJ2rbHausAGUZ22QjrzaVjbiywedwyG",
  "key13": "3wKFeSx2dikRUd7s3Q9iSqth7wyqpGmgFRHYbkwEJiP5LkqEqHCRKk6Xo1e6JfPGkSvboRCfHEB6qDFD9DQ6TTBU",
  "key14": "Bv2xMHKHRyuPVdA735mN7SD1azDPxpQcQcpBhfmVmjrH34vR4qoMT61ZgBQZHQBv1etANNFReosdSL5ziAzjvCd",
  "key15": "635zx8JufTPY3t9bqLGQ1bB76x5XAMztwYxFAsEuzcD2pwgeKDtxSotqXngYJV8zMap5pN9TRbAxEvA2z9U8Uefn",
  "key16": "362fF3imJS8W8gR8MxF5cJc2v2qgFLsYuQpBatAmp9okkbNfGCFER8JCS8Ph96QZ7TLHeKA1v5CDQUX8euaVemyG",
  "key17": "5VLXFyqwXBMZ8pTYoHkWGzwbWCRFzWVcTKGEhrhw8miScZBiMPivU3HqEBeE1TXGjWNqeTrkokFLr3q9JJpUDVLF",
  "key18": "4J8eHDaGB81VqR4SZij1HsXYyiwUcJVdx7CAaW7FPtiYGnz5o3r5bVWvsjvkskxDogJ2fCmKT1djF9fHfCa2eWr4",
  "key19": "2R9qRuqXALDFR7vAWjHxeMHvpi69YSwoQjbuS5MiFSpCsSYSyS9jsF8Jxmgn3H42GeU8zgvoGBN599gpJgWihxT",
  "key20": "5jzJLiKLtfMbpffE8mdkKvLPrkzdzdz7Bv5y7zNNF3MmvWZfePewJzrN9UXiGkuYbXWwMoaG9X627RWyrB5jUdvv",
  "key21": "2AyzmR9eSrWVSmUnDX6UsYNtXUpF26ivGj3QPfmvBaEYxCSuu63ukSUD5KV4EycoyS25CgLMMRuHuYsuesBQTq8b",
  "key22": "5B1QrHLfqs5Tou9NGxPotPu7YJzf7sXhynhrEeUWZsBxncNXqSvq6rJyciBioNodLEQuXwXwxfs3bPNAi5VHrtEU",
  "key23": "61Fh1jQnynnLxX54sJ8Zr2JvL9pYuQ1MN2MkWnfuPTmrdqH9XTminGYqwW7JHQhXx6JSgWKn7j5ZsLBWHzkRiDxE",
  "key24": "4fHtiYVRp3DsC2sgXoYzVtXx5mC7fqWZfx8cKLjAvdv2F9cAD4pU2DeQJMSuYtvVopXPSvRCax85R2USzuucbwuQ",
  "key25": "3pSjioJGW33TFocABQs4Qawidv8Dt8FixDXerubtMGn9ShucUBj7fxRduqswy8m1369Tgk4BwLCfKK7kBg6ifqXR",
  "key26": "qZSX8ZzDnhNvkmFym8rHGdGhJfwpniDMBJqNCrgZvrc943K7DvqdruxRzhhSXPzCLmE81UiWbMG8CxBNJX8JGDD",
  "key27": "3ku4iC7wLLdDCmBf2qsXhfa3Bt5yV2izrsjFKrGSjfGCrcqpbap6xG5eF8Meu6rJaFsyb8fDrTNZM7iG4maGJhqQ",
  "key28": "5FVnPb6HJf53FWuYc131HaPMo5meY8NC6VYuNxjQVHLvDB5k4oQknAepbiDTi6G3swL9rPiW6jukfX4tbNkexwAt",
  "key29": "4iSSk3SPZ2oks5ju5PnSaCuv1nvTnsmWVZGuyLCK3dBCpiaFUNafWCiLz1hKLr34nsKHHnV1wv6jy8zKVWnJhHJY",
  "key30": "4ZZUDrp3vCMJRCidPEfcuUoHMeUz9S4CDoMzjQyDL1dpnjEAWRc9Fd3pJsniTkzdBAFKMkphucYr52y8n89TkAK3",
  "key31": "4Qse5HCPMAH8n91J2GTryaYqHFaX2YgpTumfLXb8EduD44eB9r4Jvh2twmczj3KWksQeBewxewvVy3VXJDsFss24",
  "key32": "3rZ4spLioABrQ59jx8tAPF9DycEioA7ndsVS7WtwgcSWg5ygZ1qNYC9sLL1K5Ub5UnBzMCxn4m9Ae2vfTdFYPvw6",
  "key33": "5NNJyiHNjCuE2ejWHre7YkNfU1Ym5Ai9niTvEYT24VL8rDrNBwsdnKFLMmFVnTfvyceVaRQH3rWzQU83UFQLyqnj",
  "key34": "EXLaw7AG8QT2fDmeV5XfmQ7dacHVecJ7H3h6JguZVLuqLveWeCozsFRvWm258JUscr43SikongFXWLqFSfiWsN9",
  "key35": "4xLZVx1ps3su9GfYjfnbRkV9WhQncj5gcLvNCAa3ucFtg8L8GT6uWcVVknDGMmDDA76vATeRmUuYEKnakzirBuzL",
  "key36": "2AQFw5uKfAeU69Tzj5R2XBqMfQF4L2VTftjgsJrYWr95hYndE9ksCBVSTXg8rt1Z4tZaTMc89MqmtYKREReNCqZh",
  "key37": "4TVfSciGMu7vEFD2iyNzi7ATaps4MfbByD1AAUzUXSKsxUEcRU5DionzgPh5N9GWMGAwvv3LHdM4obeR8xJL9FJw"
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
