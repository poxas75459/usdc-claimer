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
    "4KpRStkJX4jRBvPojavxzo9z6nXZWKUQA3XKTsXnpufmkGaHqhW1CUdDEgk1SawehQXGDjZmDyJRupeHXqXUPaxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vKmwpGHtzxY5ke1aunwvHCQyoLVvv4TjTRecGrUr7PnnFea1Hiejrwmpy1o4muRwE9skPm5auWV9wSBFR9Ywar1",
  "key1": "3hRZRNRGyMLdz5dU7ZQj6bSfUeXxxe1ytEWZroVAx3D1VrRjrN4schSM94E2Kjt3bEBRXQr316WpV9mYYMiNRvUQ",
  "key2": "2sfX1zGaPifDZgZQKATJMFbFLNdk7v3RRjqKHBEpue82zepzj5nz9ZQRSKkaNrTfoyszSVr5xChoVfy2psxyvm9E",
  "key3": "3ahJP1im9wuRbaGP23MPL3P4M5ZeB3UhV694LcHAwLTrTetpGdRXPHKaRThjnpnWQwLNT8Zw3MheaXD2VMVZb3kC",
  "key4": "3amfDaaSADtEZw7HjZ2x52QJSQHz4mtLpswxvmekYydAnN6aQjVjmKxkWTAhCnBm3YgTU4Rm8H5gay3KRwZ4tmyf",
  "key5": "5QZ6wEMATywvdpRE2iMekoRvoaLGz61dpYjGkKtbYfHofAGXTkknvcFpgbpNqDS23rcqVvH422CHPfT5eBAHj1Vr",
  "key6": "UAniMx3u6XyaexU1TJ2AhKaV9QRqRJrBeCdGJCqvwd548XzsC8NNFEB7bKgx1KjEDc9hxf4c4QwuneH1PeU8gj4",
  "key7": "2zBc1LSqmW6R9pq3yj8xqULLAMKS8H4fA1Aqrd1xEJwFAnofk9GFv5rTuhxpgFk8BHYtR3qkGN82WZg7cYjJ9amC",
  "key8": "SvEB1dmgnuNfZMExFAANcLGqgqg3bZbwfrnHu1ZigMbqa6Xf73A3yH7zUhgptqxJTaBAsQ5XzvWWnWTERWcpUze",
  "key9": "4uxy6Z27GkHJtpebfoDy9SAcRMHahL7BZaSbvdrMtdMQTXgdmXTuYxb5DumXmVKWxJ3HpdbaE5zaf93ahSxDKF1H",
  "key10": "tyEB595Gi3Y5qK2c4KrnSCEqSTangHM9ZMFFSPFcsxGbDQzheu3quPDbQ6UdXUK88WxjAyMijDBPnUB3QUJ8XRt",
  "key11": "2FKKgwzCp4V9xjTGo4vaW7f9FTUSe7pJFsznw2EFX6onpGnajyvW371yffFUhPyszojVZA3C4LHs9mb13BLkk6cw",
  "key12": "5o7v9ZARiDymSgkyJwVaYdgdmmBu2uprnA9qMXC99qji4phnc9Qf76FakQSxe3SodBrVG6KtMZrdtpE96J5E2TtA",
  "key13": "2ucWG32j4q4ZhnnBankJJuaXpJp8Bgbg7VA4WKRpmmw6d6jmYt5w5uuvjtBKwsn9wPSHsC2LQC3jJHE7GKiywvtx",
  "key14": "5TbSdeiZdGUE4rm1Boqi7SnqL4np76gheXovXD3qm18JroLaZj44C7czEx1Fb1CcLx2YtahuDa5JgeAv2esf8Mp8",
  "key15": "2DbnjX2ZUE2NoTVSkf67Ad5VZwuutfb5CtvkSoFnR343KxHMiLjHbQsP5fLBkbX4C8R4xwThWdcjyP9bamfhkANn",
  "key16": "4yakRof4rmHjv5sk13BSpSMdJmiJq6YBjK8Ui1QXpaLkRVuhwyhuJDdACV7iZvhwnA44d7ovyLiUZRHDtFHhHfCn",
  "key17": "4uBJEMn3aWA13HHgdV6i8i43YjSuyQCf5iT5p3HBGHWxJjSWoUAq21EkA2W9rwHmBNKinhhXsr4AKrZg6cpsWnha",
  "key18": "4MAmPHmHZ1kjrQ2ayCGsFF4MKRSr6ZQyJvwX8ww9PuRXREqnWyc65z777ybpJQJoW7EUxRGm27SissGmA3BnzbUP",
  "key19": "2z7VX89RUbG9SuPcK6HqPnxSxhbH4v5zPs4hr2yjoowaKFwW88EL7ApX6sNR6SpqPPQxFymJzuynuF67dwHhKbg4",
  "key20": "2uTJ2EwDqR9fEYaYNYwPjZBaA3Kvykiees96WtrXp5Vpb2w4UR8HVszmVKSToSLndiQ9anqqGNE4faXrCvRjAZ6C",
  "key21": "2R22d6yrha7LRDuHyGYva7yEqW4yjbGJeN5JcmREhjqN3wPBC26QpnG57C4EF47Qe2QVbpzWu5LYW7hD9E4wBUbo",
  "key22": "1225bJZkoEwVGN4VAFRp4xTvxmw8aKy9Z8gHQThVJKsnXHGZHnfAAmz2dR96QGfmchQ5XiJU1eyRb2sqnnpD54zH",
  "key23": "3DQ73XLNLFrz2dYoUjc472EUyhTfiEMATZDyDLabymY9nBhhQ9dhm1sjX2DahyRQnfV3PC1m2hirAWgwBLz5kfnw",
  "key24": "3Q5koFiAG2binRbzwZWvQ4PVVHztw2uLMr9o8KLsXpUcTpNfjmFJqNnZByqARj5t3psQaZECkJdqQAFEMtwJLsVq",
  "key25": "2NviJ4T1nUh5q5AuX9V3iTpE1Xax8ra4R6x31KP8Wm1Qnhnd4xqymMiCSPVdtCZmrPKpTuYQ6cpFjvRaZDuvzxcS",
  "key26": "2bUCZK2GiFKucRHbBKQEjL896KGCYKmkj996AmQiATXm1J8Ye6JhT8CnnT4dTQxGUF7hEi6J3NKMxQWB5tQt9m1v",
  "key27": "5goPaAPd4BFNJ7xvuhScdRATK7tSFtDTath7P5D1QApNGXQ5UAUhguRZ6qVEBPctSXZq5giY5CjY1Mh6DRnUuhjJ",
  "key28": "4spumbro1qRzJ5PK13FgFnVym19yvNq8SV5FcadB7Tq56XQxDB7w6QUYMRyFXQBUqEDmdDw2zBifiy2yySoWtwbr",
  "key29": "2zZw2ZLiwyCg3c73w8xMuCXJbsLVvPNEN8yfynerdLXwvjdb2s8BVQLE5Ze6ESvB7J4fZ9kQSm3TPaJ7DqQuTcY2"
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
