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
    "5hbbaKFApdYRjkMe1mcznPG6XH1kGQvpaiZDJbyFGMjuPc2WiVrkjM3XKkRoig87jZ1DktD2Bxe6v4EuGpjY7Dv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wCKqFueuy9xWjKDLzKm7SeDo4MFkZ1MVT7LztEnXpmx4cPC36BashVKiFNRtyMwALf5Wzk661S6onnJDib5Wzv",
  "key1": "5qsqtsDaprWdcyKmao818msmqbGDSsMdFEMpTf6eS3eU1RCdaKkPWPkrFDPte4YLJnc4wzoFYLwskmBVhdc78Qju",
  "key2": "2bL3NkpG4ptjDRZJd2eB4ZR6HziCMzw6dxUmuVL4hq5ix3Y8iAEVswnHezRaRgCvMzYnq9rqSFmoVejfFNAzFokT",
  "key3": "3Y86xShAKQHb3jc18EKknNeJDLduWGfvcgshNHrmcFmGzytDSyApLwykCgQXR8YVfdpmLPqBGmi5jXonfTVmS8sF",
  "key4": "fV3n9Tdh7NP4qrd1ro1eNDy6RZuUQL6Sar6JuQQUPZMAqcNXo7b4j2RpLvkewnccGsJR2j6FqqSRgzSSNqRpAgs",
  "key5": "28dKiL8ioM1QLLz8bew4tcc4TPjksf4PJU9Kwwah2c8MZe5xho5iYT83L6SK4ss3RAbhZpoza4udDs3eQPFrLHYb",
  "key6": "4Gga4VtCF6xQecmQFqs4iDebiL6dzau9DpTrrLDLTxc7wHsAQAWPxJiqqQt7cMCYUaNE224gWqpEmP1T9B4UgBAK",
  "key7": "28MT2hcmQq72fGpN52vZjuFk4Ja5tQbSdNmH7eQ7CkjVu78pAqH7jaCwG4ihGa36qXQzgMfELXapzpV2jhSZbBPG",
  "key8": "36ofb7DQ3E76VcFriY5YD3qAU6zxtKVvXZv3nMcv3JcxupLcXAhvA5MdmCGLqt2xz83dJxdAPGkQxNtgey54H6ES",
  "key9": "4G2fQK3mcYRpYCLXkZZzRuU6v3hqhwvc7KrvmG7vC6MbbyFPTdQKHEVcBDRrk124yG1m59odQn49E9C3jegPXvR5",
  "key10": "kMYBx8tdcrG7jR7cF5AYYYvNJn1iEy3LDfYPaU29ZerdKoGXTdd6NsDh6Gonx993SDijgPjhbCNUZRQSRGwkHxB",
  "key11": "5onrTCXoqrmJvV7qptpmJo9yTof27s4vbkEnmPbDb9NQQ4vdArqxxd9dF7GCTXauUHsjLdNaBRi13tnXus2LAa3P",
  "key12": "5x1XLWoxdxtTu2JkQyRN3XWZvkvTWwiePobphLLwuKgbmpjo4mpKmMyRvPHBDxwcoBsMDLFXzpnq46M23MRgN1NY",
  "key13": "42kMZbLxi7tii6M7uWmCjzQj5BuiNbLWtPJQVEpm99rFkeX5muhpoWdT4ghTzo116tJNbRqe2tVXqnFxpTNtNjx7",
  "key14": "29qfbY7B5fnby2W7o15P35k9LoPsywSTTJ2LqBNztFvAK4Pa7hWv88hAmSHMHri9SzEdRuHFCkMdTtCJ3P9FKVYK",
  "key15": "bv9oZvu5qqqbsFmCaQYwYR5TSCdGjnMxogfM4WcHpQCtKR3xa1jHYQx3HJfuBffy5ahGA1NWeG8Y8naoFUwKhWq",
  "key16": "2jBikSwJnfSbtxBMqSwLtc5ZfSn6KgawoJqTZuEA4Lv9gNScWXEFs5GnDiBaE5DmdDRTxKMbupK6ALqTiDY7mKkr",
  "key17": "5WmEMQFU3b2LAvspiUc9rQ7XyfY31Hj8Ca1zSauQyjW75EPz6Q3EMTh5S431oaAG267KmgC65JhsUBU45xp4pwre",
  "key18": "2fQa7Az8iGswGmFM2CAq8Zg2BHwLESRLSMd1Zu6XzEE1dKn5Bp2FzWH9HLR879zi828FjHPq1uT4fML8s5mDCq51",
  "key19": "4ihQEDNN343AXxw4VvuJPP95SH2RQzhGBZ8D2EG5miVZy9EBe7ykKYcCctB4iCKmBeRm6LJTGL1hfedmCKjuGNXb",
  "key20": "5ezcZ3KT9vmV1GicEzA5AkvpK1uMG9bMTinVW5x6v62ZTGoir5knK63CygJshRsCPRN5D8T3NE73totxDHxNpsvr",
  "key21": "2ggULuFZnDeMf4QfkB7C4TLYjGCtk2GfqZvsFRJTV1jrndXbPjM2TfRP2qBfUGyhEvYjn37rsgxyS5AmXKyNLfLG",
  "key22": "t9mKTgeim6u7BnDZUMRGSKWYovfZpe8MxjzTwKU6KaADh1a8Q8tovrFoPQLRDtAzGUwzjDisUJF5CUPdYA65vpo",
  "key23": "4hTdvxZWyGd4k22CcJo57zkcymYdSa6uwdwKo5JwS4pcHeD9u43ig2VXPLeNVpiEHNjSxNd4RSbGc1xsgggkaiT2",
  "key24": "2TbXHvVVRTqq9jffss9ADcPrJim3CEQbP5i4UWFGD3D3nYbuwSkZkCGoj9YbHVBFGqKC1vRKZYHdTi4Y4Cgfr6Xc",
  "key25": "4t2pBbETG7aUkXzDxA76Tqv6jy7kd38J6f7XUtqFfTT8uhbZL4fszaxaiBRt2eGRHZR5GSfs14fCnuY9dwQpWuzw",
  "key26": "4paxZYuU2gaSuBBr6TgG1YLuphkA7LxPmVuvkZAhwTgrUNB7EXyt8YHySmhkoZHq3XPV7GNGEqCPYuuPQzNfczqB",
  "key27": "37UV4QHH5BC8ktQebqkd1ajPqgETzQKqzYv7ZeymenwELtk8QLdsxeFC4ZmxEyKgojtSwxwnmUah7QH1wGGmry8t",
  "key28": "4hQkn4fuxKSb9nvnxjYnimoyQ9xQ8oenNW4DuhCoDto64spfkLuHyY95EAz9xF3os4Hs6i3c381qeCHqArPfX6qF",
  "key29": "58ejTGFQnbJ8KL5Ldaj3i22F2huxsvf7h1n2Hw6DCWAVVokXu7Ka3VHKTdTzq4dkGyHXc15T526iLHEkqZUZtmEp",
  "key30": "33ySwXygVUM6RxpravStwHdjNy9PfYzvxacojuBF6cF2qm1fy3GnEd8eMchvcjyavG38P1LxSivGRfgkfhGb7svX",
  "key31": "6k72X6vHpf7pa8FiBc4yEzWmAT9sfWiLFwkZQaFbyXEfAJTc6N3m97VUgEGQGy3NiPwKS9JBrTQaiUB4z7tq99v",
  "key32": "4aWrKJYgnQSKLWvkPFQ7zAjm2WZFsfv4qPWUwRz2Zg4M8iVCRanUitKkEsgN7BE73BDuXVEiRP4T9RcTWwo19MuH",
  "key33": "3LYWZCzXhfgyG4g359TrhHstutNNboa3dXXGKiQbSSc22QXzjfxzPfrh1FgF8ZhHJYBkPXrPkLHYW6mB6CLrJeyd",
  "key34": "5BLDULNbdSVpydoZh1Jgu7McTA1i9pBHjSv8CAmXf3H25mttubqkkezYkAL4m7pRYdgSo9DKLHdqvdQU8VdRySRC",
  "key35": "5Wd11iFHRpqZoEXN173JpssicCWE8otyYewaqwGMzjHoPhoDUy94k2ymhmvAB24NjTiQPTQaL6eSfMdyiUmomQ6c",
  "key36": "61De4zcHLjX7HQJzZky2caooed7z95cyEWJW54xBxp982EAfcaAJMKn98pegfsGa9i2mVDDD4Tv6LCYJzh7BU9qU",
  "key37": "5DR1vbuRzWgEZ7QmqmAKbqckqVfmQ3faFXcemaw3c4J3FcW72QRtWz78HxM6neQWMZbywxJNAPkGftfTzuVknTFM"
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
