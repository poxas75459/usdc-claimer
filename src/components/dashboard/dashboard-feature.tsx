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
    "BkZ5PXYoTqmBGKJdRZEq9XRXW8YpzKkNFfQwAPfAu62z1RhwY9yQpyfVjb5CYUXUVA4PDUWCVpfJVSDakNWGNif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkkZVGyUJV85tk2DAfXND6YchJt4SetfGKXrSfdnmUSLGKCDLeLc9BRYMHfeDVeM5Q9MgNbMLXKHeUab7oU347b",
  "key1": "2wCPhn1UnsyTsdDKhVMNkY6xhdmzFbHMmrpWUTpLrxCoRxUZ182zyeXAZzQZhiCVRSEBryJHqiXsJmmuNjd76PPJ",
  "key2": "5PjzV8exgCHUvwgQTZLijCvyLK4U6V7K8nmeyznkv2khWK637YVrfD22f9VUrxA1dKiWVkc437NVwnXZ5iEEDSDw",
  "key3": "3NznnUeLRabiQjcbjTEn6wJRRdSBKfSn7o2rnXe6v5jSsS4bnXF7tE9FxoBt2NVase2NVfmjBrC42mXPAGACbNU6",
  "key4": "3PE2WCTSanHb6yFY9DE3BEktwBDmYe6A3hZdwsWC1xtua9fXug3zM6tLZEYKWry52fTj2sx5h7Ce3yjp4cFWjj3g",
  "key5": "23kmmTy7JpWtY6bWwFy33JC3pfGcxQCYxPdv3czCsgRBBUnUVQmtk3nEfvt8Qk2X1sGGmvPLFQnQJzQa9FQgcTze",
  "key6": "2NpoE2Ummmx6kuaiu9T8wBuAKhm6c1Zioc3hyNc5fRTnPqbJ6rM1YEnmbiezQwTwkBbQ2vT9oAr63Ngg7n5tnezd",
  "key7": "4NdpneNC2KYTxUA5gTq1fo2UHCSgQEtxGKg7A22q8sfhLkDhHXNyGxb8nAwNT3jxPX66FaiS1sWk8b9LE2ztJDt8",
  "key8": "atqU5f18viJTH5BSUXwt4RwEwtLAUU11X1X2qGzwHwci814bBw3YhnN7szfJAZ35cUCQcpkXu6au3zP2GyMAu3J",
  "key9": "4dgjuDbU1MJut2cEES2Ae1eqLaxsRbhAQjje3t2zy7jiypivvo13NmPJcvaKSCihFxKdzGBqeczf8Q2m7CBybFnp",
  "key10": "3QcrvWXdMGbBhG7Xbgu5seuLEwiniW6p3KEW6igyfv9dLj4P6pZjdAw3HKv9MJCk4yQ56EuahShhDFRQgf5NRWFV",
  "key11": "2qW9j3L4Xp1i77ierC1a2W1WeqkN5RgSAh2cHfuXWtuxBdyKdQKVm9dJah26mdMFP6ZDuzfa3gK4yMBE2nqC2b1a",
  "key12": "2PEfg8cjNvEt9v3ofwhGGE7zR7UaxasWFQN1GB4bezK5stjGe5na2czmf3w5skLmiq3gTS6p4zSfqJ66dWWNvpDP",
  "key13": "3UHUPLtRXGaFtfYGdbSRivxVgSrNqQS8GXGp9wAAnSH57PbMhNQ5WhBBVGiXh5yHPcY2dUZyvGRqJ3ctm7jRRtR5",
  "key14": "2cfvFuk32khTzqf1NhHXuU8Mnx1Qib2fXjcW5Ru8C9K1YMa3XCBy7LnEcjaYHJaeYg5Ytz5Uaq7Q3Pj8yo4gCnZg",
  "key15": "2vTznotoGMesEouXjnt17gHZPa81TGY66SHoG7Ks9BtRHXBfuXjavXQoVW3mNCDhFu3xtabv214LbZtcbsBjDa8X",
  "key16": "4U9ZYfZ2QhrYt4i9RQpNjdRNaoQpLbSE7Cy8b5i7pFmzsKdR5AYDF2PwVr5V4ToAy1hDh8eekDsWTdLwKdyyKcyb",
  "key17": "3V3KsywDEVPKaf4a17FjxiHUwjZFo6P3ZFxJNTguZ7k77NDtCgEi2bGKCvEKFTrygh7EwK5aYSbQBrM7bxWDjVSX",
  "key18": "5ZBsQQhv8bTQ3mgFPXtmNAyRvAxdkEcQXTLp616XZYidyZ448K8FEeMuRf284ivBFqo23kzEZx4hbjbFfzBgpfH5",
  "key19": "5VW8dDio4oUuMqPG9WoBjBiQWhW8wkF1AKztNTKt9v63d83G7HjBZDL8Cp4UJaacsVhCtsu2ArFFLfUurSN6AJqq",
  "key20": "2ea3kBdZGhVdZvukcK8nkNjmAiXPjGUVYPT7prxdnfnZ4zX1fAbLwvMgC9AJhhyJdLTABrW7yZUK4TJbAtVvAQAq",
  "key21": "58DjBWTM9RpegYSzpnbE5xE8iwfyUYqEiboMSZLSX9ZQGR1yrDBUojzsJmxqwJiY2P65QUaiXMxHzYrQPVdK6rLX",
  "key22": "4k9NqK5SaCdYGYvP4qQf22GuPRkR2pZxqt8AdU7vGnNGdUJTfEeuMB2F5q36t2nmDz4HKpZF3H6oRAcDvdwLTc1E",
  "key23": "3dMBkcRLkGo3KBqUQp91DZDgVawv8HEVsqWzXd1sGHTh2usU8geVfAksqNre8EiR7ogSQGhL8e5VGHpzqa859PWs",
  "key24": "5oCUxQvNGUa4DXUGzsU6N3hfzZfMu4Wv24nKi29Gyrs2UchfddiWp51BcPp3L3hgrfRSYr4mXzY6BkJU7G6cWraX",
  "key25": "26C5t8FKP4hUARt5WH6gk1UCHmumjBpR5oYMt9gg9fCUnLJqMFtZtDyrZi2MAywts1KpoXjoa5WDeR39VZDQzzmz",
  "key26": "32WF4Wu9EpWeRwq1zJgj2ugKq1FX4JXFxXAFP5rSmE4XicJRrNAcSCbTVNHE7JBxDt5YnJTp8YpX28BXr6Ha7jHK",
  "key27": "3x7w4Zvs59odieArKfTmPZpSA6nUFf469o44jMJ4LEV1LwriAn6Q3JiDJjb7v581UaqyNit2VWzDEgvGQBB5CFA7",
  "key28": "2WsJMb5n1ToMkSC5xPcGCbwLfrcUhyo79CrwC6bffFcAiR1wfA3rztqBWpUn4g1pyjxnhgJZfmcquas7tjgAnmeM",
  "key29": "4fYeErZ1KYUcSy2Qz4deFTqSXqCVnaEyYd7fzrkxhvj1s2x4nazL8t8vTPhZhc7XJ38QjMKVs9TULyi27pgCmJdZ",
  "key30": "3F7xH4XVoxdkoCpw1KrdtCasodY9PrjqnRH5PFBZfBDouDPQ76P4mfV572EarWzjBuPZJtt25aRFmQcusHPH4XCj",
  "key31": "5itYYTyb2PSp7K5FA8RyHjfiM25L4Wii9XvuFFAr1opB8W89Vxd573yFxyd4HMFDefunWeNDyCkdh6pmNTzBnbCc",
  "key32": "EP1R89UMDjxch1mVcKVNUyynnCFZGRbeZkqwUeNk6BvHhKAwkR1KwmKxJFzhUFDuRK8sefjhGwSBbhfcUqrdSFB",
  "key33": "uUwvAwd3FgSEsKBhxmeTMNVBSxRJv6fBcLfe5xbgLK94KH7w1PFQ8qFkQ6LD214ctAcYVXbdVqbH2ped2xiBFG8",
  "key34": "2g9rpAVezdczdH7CsTLjoTAiZgHdpx3eUeZ73Dnu7CVNfgYGfJKEH886ppLexHVUCT9q29JJGQyLQxEBmcKYcAns",
  "key35": "e2SgFuaxDzxSF8dTGQxz3AC1iTsq5miyvXXnH8u5WnqhtMgZT2DZ3fwsfnv7sdmHiktAX7D9dqzu2vQKkTFg6ev",
  "key36": "52a7EXf5DQv5E8k9M5wxER1AgnnAo6qAoaXMzwrXDz2GYSKJf3Wge1oE3rpesLDcGfoM5z63ngX9XrTTyApzuUNq",
  "key37": "5ZBDPDvAYVcn977zcaQLCu8huYp6BnREQhZJpGznLazSeLorGGr1HTnGhWRHQcB57NLSoYgxSascJH1vCJZcVcy5",
  "key38": "H8ABzpV7jJVFtLJu4jyPm1JeyiPnxE9tC3XZF6UB4xXUWo9LpMd7oHkmnHHxvQ67xGeJzhxUHPLjHSP1Tsqshbn",
  "key39": "2QC6VrXuJbrQBbTpRfDeRVo8K9Kw23XysdQuHXRLURyQtajypmRNh58HCSKp1ZKTU8Zfd8JYn13EX5fesWx5SE3M",
  "key40": "4vy3X3MEhaTvn7mJJfc8BUSAdJg94eWKyVZwaFKXV6DtbHvtBmoy8fYmRdaSuP2oPp1wznJonBh9JGY3mNVUvojT",
  "key41": "4TgNPSRhjysyw7B2TT7ioCVGGT5me9iGXyZGoJEZimrSjPKQr8Ay2JR5MAJvqwpnu5WLdNhg9ojomPmHrc7E7NZw"
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
