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
    "2c6KP8fPNG5861CAUPf6Gubx1qWa2vqwdfBMAg6FWrG2hbFx91h4ybnsm35YPg2yG2FDuj9Jx7kYYsjyRac4gMBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMDFspBiy2nm5bJDEskLdTPC6AhAM3uUw4VBb7Qwd4VFDtrVYjRwTQHvtYcv6cQMpZ4p9UiXBRPS18fzcUdoPQy",
  "key1": "RRSkH2LkkGqzmQqZrdyrsXBbHDeZKvXqaqR2VFYV3ED7y6Ki9iFSjVsynJU1soVEFsrNW6zz4ZLkq34UnUQYgu8",
  "key2": "4VUfMQeRoh41SKyxnBnMekW73NW3jZMcE2N4Gr68TyS8wttfuwwYNhhd4CTU4DKVffjnVHgVrrAUXCu7cA8vd1by",
  "key3": "2PfUvZMF1fGG6N4dYN59AyhxjGujtP5qNE5WWKt4zmTUL4kYB7uMmMa9MfGQgdhBp1TiKgZNCCR6AqqBzWRA7kvZ",
  "key4": "4CJK1SJQAPNoWS56XrYLdjsFaVgEZ2A2Hk6L3UdPfu6NeBZ6QjnUh56nkE5rZg4odhGABVzeL4XU8R19fHRkar9w",
  "key5": "3VSdDwuqNN7LrDq7XuvALcqSbxN94cbbRrtnhbKAjPmYRw2UewN6jP3a9tYVMA2PqWAwBRGJCxe1KLAGBd6D7LjY",
  "key6": "rxr5AvoDGUktMMtk1nQZuvihpfovaX1HCeDvwdbG6Ap1FQfR2k94Ga99Q1MAfmkcqavGvFtnb5fp3M63bXW4AHd",
  "key7": "5EN6USnR7FXb8yZrgJSXy77P8drdTYsQQV3ppUw7pMrKtoNNZPiY4qnFdf2WKXFjgBksi2PUPLZHHuMU7SDfxnGw",
  "key8": "5MSUtLtghzdknbNzPxm2fvfnoTY7znhneqQLkVppoAtjV3bSN5wSCG1aUL94DNRoVV1oanpT9CwJEDp4wsGdBNCk",
  "key9": "FdCcb8ToiVQdycNfnRRobKRXR6vre9mG5KQVzJgbUJSnoakNcmW3dbZVsbd8ec4PrPYgcWkYVGMWmEER7smuDSJ",
  "key10": "5AZaKJNn7MaUkWGHDUC6PBseB6zAE7e1y1yrCGZBrsx5KQP3Qn8X6B6zBasZqNUERxpmvREGZKJRxtdCAPFmRCfs",
  "key11": "48CH3uGyF6kipNdFZEu7EnoTUfx85K14vCu77sfxZLB8gJXKsHcTm8P3b6V17AiJh26c9rV5tAzcD41RD9DdKePp",
  "key12": "3W9h3EEbd5qkMa4qgefwQ2eAtUrisEknt3NbS7vZdRTJZW63ahnSTtxYCUJa7oXk4Eomt7GDAcYBniVLcutt8wdg",
  "key13": "2WquCckcR9QsE1oKvJamezGmQMbPEBuDN9UJJJrP347osz42vxB6b38HPzd4FnWn3ofW5xUSEj8A6EczAWtsSubs",
  "key14": "4FKk854cSsrC34ZczyXpsLAnNP2uGk1hiMxdZkpczKzcqphWp9dtKdbCm25fw1dbLT13KDoLRikzh53NWXkDSVER",
  "key15": "t55Kv2ZbjahaMA2fb1DRMdtpgdPYjiBBA2fpPnp7FzBG1Lik7nc1kbw8LY3GZGRnJNsWVUP7C5fq4eLrp8mNdp6",
  "key16": "EUSRgaF8zP7UDPKt1wyUqpPVH3at6A8pngii7iYadbQccnun7YzD2JA2vNcHKF6bye2aX7Qro21skevL5jF1ZbS",
  "key17": "43mH7QJ6gNmfxJMsFJAfwLu3Bqsncmb7S6NYWPTKBD3gkdKMNz3975csp3sKArYFPdD9Aep6vWmDCcDpWpJzSX1q",
  "key18": "4uWbzswx8rZ6qchvTvhs8V1YiA6Gndy86wBnZEVrGqx5zFH8EVRremF9cMLrgZCg6PtUirLxKhQuQv7hViZ6RVx5",
  "key19": "Rgp1jbBcx8u1N8gYEB3tdv8182Zc6uSCJMY2rFi3y5oh1EuXTWQRQCfjjksyF3CmxJhamWqdfugHeNQV2DVC8WT",
  "key20": "3XTYnGrtBfCSjdwdpzw7NowrMxeUttJ58BmimSawm5MPN9pQZ1RptZCVX6RWgxKxhXgZ4Seu1sDJPaZQPX5QfJRc",
  "key21": "MB6w4jpgdT4R9LCy6dG86xjqsMyTgxsjthGn7b9NNbPKtCUMH6SwiVK9BmwxDCDivfQ2XbxkT9C2EuWBJ68VMKK",
  "key22": "3KAuojf633qCgkSx9CED98GiQFaFi2Jt8oko6WtoEtVqp2RRwRMab7gUAPXQ1aV9KnDS5TAUCXSHQN6t8vHWCn6W",
  "key23": "4oYCkxYmNYUnZynfnvXKuodNxiR526tup52yDqueZD8pkq61dc1eJQW5cW4y6u4MahBJ8UKHA5zHLCHvEC7wDEPy",
  "key24": "4oz7Sj8StZWFJfQk4onvU92HRZkZvjAsqALhBfLLxSzmRCLE42wSw9yMqQ7pwik1y35xUzRX86dbKTe4TP4bEJo1",
  "key25": "26VaQwdcELnynKHeU34GfdV9SDE5U3ggacWPd1u7ds4PcfmZ8bTSaqH8Zp5W5Np4QCJmdu7f4GqU4BeG4mqbPrPH",
  "key26": "r6jPmQV21HA54gC6GEf5o5M9GWKutqb4ej4SQCQPJKMQyDFGuHkS7rjhujqCiTEJWcR92QPNwdmX8aJDNFWshPh",
  "key27": "2iMHeGj865X5c63VGbVXSyNRiNB7K6MA8E6L3q3fCcA6D9uJtiu6N8rdH8UZ8sYqd9KkpyTp4GPRZ3jx1Qvb57fn",
  "key28": "37PztRCAovQE2Q92bFnT43TeTa4zHnRAy5LC225AZbjU7CF43WMnJg9UE2xmLbjickQjGkdUGFbP8mX9rSNwZTch",
  "key29": "39VdBjqj2ubXmUWW3MuJSthssM2Xey2HGRCxYz1T2eRYLfv3ufTmpeojQKr3YUnTKcGLfugQjDPYku3MRV2it72y",
  "key30": "5S6Vs3wxHCQyhdkyMUuqJnDZdjMXq8V8nmJhWYKsRXGgoNcrsS24dJjKUaJWrynzTy7ooYvXpuwSE6sDBSNyQZz",
  "key31": "2XfSazqikx7pQCAX6yVf8PcbRxGibeHFMxryiM85K7aqFFtLoTbSaPpX17wKwYPb7qekYFp2F3VZFkVem3jepijt",
  "key32": "MEprFkQPXYrxQFvoEBMAmgJhvJWR9eGVHfXoyvAYj9qo7WC5XbaxAamyciH7XZx94ymYeLJR8nMPYDZagxF1vpL",
  "key33": "iDM3xpSZvJxtR9kc1jBbEphGjWZwq3B1pc91HXRQ1rtcQTn4zubwDNMsQtzw3PQyz8Fbsiey9JpxzPPTJaQswFG",
  "key34": "41LuuaBvYcFY6e2RAXVSRy75Lca1qsJifr5x83PcoLJTpcMusPsbnbz7SG8WBPbo43QcgZLK947njhtdcEPsPeip"
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
