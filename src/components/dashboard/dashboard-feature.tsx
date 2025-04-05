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
    "4URYqquboCthBkrg9Hm1htc8rU9oq2fKMdPB2qBGrhZjE8nDhxQp5XmQTJ5Wh2RGkennURpFvC92XXnZmkS2ShbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3teJCb9xCVA7cWhSdNZ8pcGkXktUM2BubXPF56jkz74b39fFqHY5csGnyRRzXNaap1JNEFjpAiGXE3De6qSKD4aB",
  "key1": "2hZ4pH9UccP7mDYU8MKydrUb31JxD7LCWvFHY285KjJxeCm4aLDcdBkx6gjrWiXvdGNmqUgQsqANYzgPtE7kn7RY",
  "key2": "2nKiwMonXGawzCDqq3nku6XoSnGXhAVkdEdbtK7HTJkM8DRNtknDeHZh9ormhrC7ptD5QvT9YsDqLNAWfpsUBq1y",
  "key3": "SmjGi9YuWNKo3sv3whiCM2eSRckyk1Mj6LKHPhgnZRnMfWSnT2H641GppttPU2TTP4wsT3MwznUn31oWagcqTvs",
  "key4": "25DMVGZv1g6yYyoCAvA2A4Z9BNRnLc1vKaJwhbJEQBbsDH724hkRHaMUc8m5Fvo4WZkg5UPvzTPLtuW1jqMq5KkL",
  "key5": "4oyMuf6niLpZvAp3TaeDmaUAPatLBN5nKBcyhjrEbjWM2zdmNsmQGw2YZh4MgqFFRhvUNwzr3QucEhPADoYz5ERt",
  "key6": "4AzVduHZjA6xmjdrUDp9jLYj6jWB13BxwUc2PTEj8TNdQMfL6fm4NZByK9ioDZVQ72rHTFecDQAKvuzFEfpqfwMA",
  "key7": "2GH6zMtJDAEt8BWTcjaZdRKMAJ1aY8gDsy1wYWdktonKrxbvMSPcii8CF8GbFKMmfNf1QJLJno7Euq3bKPDzikRm",
  "key8": "7g93j13XhguF8ghbZ1B6yxy1igXHo7WqC9m1eb5qTYAcUVg9zWjWDrwus4SquaBZEQaAZaVWpvf9sT1cwAar9SJ",
  "key9": "4EjNJ3DgvGyYoCLM8j95jEXhgmKottixX3S9aigdZP7rYkqN5Ysq8jhCGLP7D5h4nHfvPYzTWzi59bbznYXHxkSa",
  "key10": "4Jm9EEFryswVL7shGxBLR1ku4WVoJwYhVHC91sCC8g1Wa6EsgaKhcMZTyuP6gTAP3uGhMXCpuJopGx1hM4vWBQk",
  "key11": "YDJr68T4FYzePVRxyPcrqHhChcqY7kUNn9EHLvrPGtQm8eBwgACvQfPiSJbu842GBBw7JdrUuNQHYt9GAw7cwAA",
  "key12": "3U1DRc5cgmxiDGccSVEEXxdwo1Tu24n6YPAS6EnAJqWqrVuGqXi5fL12DXvr8PC9Hbu8j9rJ4bkAhqTz8iKMKc7o",
  "key13": "28N6rwMTt4q1vBA75GsKfRAvjbZrfVm8C8WWPToK86QWgiJfiqrqv2Fd4C821McHUVqdmTsUv4swPtwvzzefE5ts",
  "key14": "3G1oVJB7AmofK1dQDbbUnEBFF8E67qTsvQ3cfGgBdthKfoQbG2TScQSSSFaiV6pKrEtQER61f2C2LwpJxd1w35io",
  "key15": "5YBJqGrscN7SFy3kXAQEWvUGMHbq2VyHB2BeY27Dmmgt8EY3H5XoLp8SykF97P5WaSuwBsKLKC26nsNXr5RqPLo7",
  "key16": "27Y5c2uXxUYY56VQFRWTDvuCX5HA9UHWNSoC78BTefSnrhVddeXQcAN4dyc2Y6wdyyFqoSVM7k3zH3KSiquKfd4r",
  "key17": "21AZbMsYAthrEqgBUjm5ApSH29gXfE6ShSrC2vTgDpL81Nset2nSVGCASbTZMUN78oTayHchZUG6aRtvYT1sErp9",
  "key18": "2PQ2JUyGCdyrct9AXXzRWGp1yDJjfQBsXnnuo1gUK8Q6xY6kkCFT9JSG4UJJV4ig4oVk6nHHnfsi165yjHNoguJs",
  "key19": "7NS9iHbCKM91ufnHLzKDrazazU2bGYRVjD61ATGbhAucxBaNSyt3Mr2EJi8GNXomuGkBbWiCduprZEgZMEGxzDi",
  "key20": "58MA2QZqDEV2eqMYg7iNknXuXbmoW5fw7Ned13eMCwomyusUG7L2r5zjAfpp9t5mXfLkBwpNNGwrkRAPXtmqZr8M",
  "key21": "2MfUQ3W7Ez5ZJ6BkDyUUhEvGbdixR9wSpA8VRxtMgHNRMgKEXsRJdtypjLRcdSJvYJ8uxx5W9zFve5dnsUtTaHrm",
  "key22": "3i2uHcvS1ohrTfQrPr2bmhitRT6kE9djan4XnhNzrwhnpUVbghYUkVVtRnVZ7FghT5o4c1sSJu6xbNpo7BYqCfHv",
  "key23": "3AY8HcsrWwfVCge2KjH6iCAmEg5FV6CMJY2wcP8HgrCU98Q5AunmGNXnn35iVPsagqg2V72CqmDw6TjPsfx9f8gF",
  "key24": "7CmpwzPhmzGNfijuZRdcvBCr4KNgBPXZjuUbd8YpiXJvskqZgURFgUgdmRrnbrunyDiUw5geX4gcczahpM2j5Bx",
  "key25": "5GvzeQKj241DRSLq1HdKqUJkW7HcZKjs6p2P3QFguS8F8K6G3Vp5tq7DUYqyikhSbP6AEhybY6dQFiueAc3n2tjK",
  "key26": "3gCUbtJonoxabxKJQzVY6C1oX7NewFcLTnCeaYjEVmrbCkdFAiXDLJKpJARLkZdmGYqZUXoKKuCEuTndGhFqu651",
  "key27": "58XwYVQAMgR1td8876KY4ioqJhoPY1x4Z8jUz2nDc1jqCyyswriUQZbuiCqALraxGroMLQrkv6rpqanJ5nbpCPrw",
  "key28": "2empW1ayhmchT6MDMYbsBoBS9j5ysUidDhjCbcPWsVCTNWvMj6b4tk8br1xfjBFgCCK8SV1JRyvbbfqYUz93zZoy",
  "key29": "4aUw3bTBwiphgjt2sDskuWmhk3cRpbfnGBk9FmeyP5wKyXz7Sj2UtD7a47phbkkdL9FhNJSkyYv3YbfK4RvT6bew",
  "key30": "226QwpUbspX5ZKHm3hbbc56W11Z2eATrXuCUPTWzmdHTCQKwrEMD1gw6MFMioEHi17pdtzoEkVPX1hkjyisRtdNM",
  "key31": "5kaSmNAn9ZGpfuG6Yskfpy8GzXEngDF35XKsGtAynLZr26wMnCLKAigeF798i4vFNuUYwoPGRidCzERJtoqeDg42",
  "key32": "2avE8mRK1qtZ8T14zjCNenypCVGaN3KTm32XcGRZUwR3JKLAmY45tn9fmPPq5f78QkWfekTXQX3dmdAtZJAMAZV6",
  "key33": "2mR1c3uPjVwyoG7HS7NZyG54bKcFkMSzEtji6EU7hyaxfe6prJXvYuGffSSAjmAWRGwfsvTNBkwCDzGAgM7v6YgE",
  "key34": "xYX61cTuyoKP3XJMRH3EgzgWASNYH2cBG7rL7opnuwvY279MwATtUGgEf8YUVRU3do29rnHRoHrPeMBmwBPup31",
  "key35": "LZ5RvchKivf2HD5bdQMCdM6w1YdYsFn15uZbcK7MZMEcsYUjYEcUWjW1JGtdoj22erGwiTRdeum5oaQVUEja4WC",
  "key36": "FUCisiEhHC9XAmxKvqq3icpGUdtL5Ra68RTp4EKvZWtsiVwDsB9WmiXjg3iMMmCoDGagvoHLU6RTJf23WVQxr9G"
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
