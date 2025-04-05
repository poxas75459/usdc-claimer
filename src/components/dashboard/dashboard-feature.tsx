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
    "DKHmZYEtb7azH7N5Aqet8iL4AKY8pAhFWi3g91WG8oBcdJGq5YDd1cDESNym8HUyLLLtUx2LyAW7AtKW7p5ANgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UHUeZUEDEctt6BH7SrLE8SXGFfZdpHhZccANivHaDL55SCTTBxDbpYem3GHb4z4EuzJVgnGiDUUhemJzsjcBY8u",
  "key1": "5CPBdp8cp97BYxRFeYqbhcAZQz9dq7SCWK1fGPVW5ctcUSpsVjkZ3gyoEZNfLDrUFdZNULhSWXPCu31QAwJ1hJoC",
  "key2": "2ZqicT4n4yr8Yx7FYVHVv8KedmYzDyEFo4zU3CmVVSxU8bKfeaQLAUYiSgSxpMcC98b33QoeSYGcLr5AYpPvzH1G",
  "key3": "4feWtAC6UW5yJCSqXhUoaQMmkCD27Bx3PqLKQwL7CpZEwLiTbbWKTocGLgjWbu8yisAXW5sLSmGp48APUZHQJrNj",
  "key4": "5vEUBWau1A6G5Kida3NEkUb48MSLDM4FWhmpQ8Uqj1pnpSgKqXyaZ46voUwtT1GvVZ4cVkPS3uQKt4PWvrNzi64e",
  "key5": "uVwdxtBzPW8tjGTf351iqvnSRrGVaCksqAFavd6fmbqsQ9aW4517CxfdxXYyGkRPtJfWzemJZwnPzUdViR61KGA",
  "key6": "3PoqenG6yYLKAN5Y1vpsY7JgA5fUnBFJbZMTErAXGT91VuKqVSSBVdbkGmFtkVaLzhMTEH2Lv2D7aXupoiRKVBdm",
  "key7": "64p7DZMzJwMHpj4QiBwy8KDBvfGYSP8kbWBHqRU4joJ8YNvctrsnwoAfmSHvzJbM1CyJ338xvp7jhFci4D2UMRb4",
  "key8": "4DRGCTSjfjAFQ5fwYsLYaSDfSgPihsGFvVqmxpGNw5Y1ueQwqC39Hjfi2tABzidG7hBkmCjjg1fEZ4jTrse8Qf4h",
  "key9": "4VyKL2Zj6ZFPkrh8c6Jn1AA8oVvBeEvvEsrgKaEkTXiG82vp5rSZyYH3EPYqiXsrXCde5hJ3CsMdF3vtwzB6KVMJ",
  "key10": "CXMJVfj9CAxZBFutoghrxvZZ33HiMK7pYA8DTrKSFUnBZTDfUEk1qVJNzTi7QXDV9pobF4WhvgV7a2SnBbPJTvq",
  "key11": "4Zi7Y3UyDJmqrzBzQ7YtLYCGT8brWEbZU9kyLRKBHzwnRxFgqTu1QBQCoRMe6CkeFcAQZpT1FRVvz6juFra8gK4U",
  "key12": "51d6QZbn9Wa1R1T4BUJPPkYuxGsqneGmLkiHsDH6fY7PDhQG3AWvEAEY9S5Ytq9Zg84VoraMCazxnanTnt3zK7Th",
  "key13": "66BPFnNG3PYRkfr6fbgmGjNrWr4RZrKiSdChx8ZN7zxTHJAWk4oNGFLCYeidovQc2p3jdzgQrTqh6wNaKKwqCaGz",
  "key14": "49YkFnEQXwfnLcEc6L83G1wmghcKND5iXG6iumrZ9fYf3Kac4r8GzC9T4xzmKq4XQuzqSJiUAGYsXkti3XN9ModL",
  "key15": "2vDe22sd4fjiVQs8poTtCafEp3dHWZ9yktvxt32yvWjxLRFtxPjxFUqn1uQhdHr48MBD9wRkMhHDVfm3gXPQTANi",
  "key16": "2CxNPvNntJQqqgaYKjieQU6HSjVpT6rGmvz2YCNZ8KB68Adk5RAKw4AAMzSjUTPr25EJp912xCPGHbCjC43mH8Ri",
  "key17": "4mFp29qn1ZgYqYKRdjU16pi8GW7ioY4ANkP5Zwu3Z4Cwia5GP55tJjAhxbGFC89D3vJFkd5qj29SYm3zd23tD6Rg",
  "key18": "2YgRrRuauj7gkBotmjFV7dzqrxJLgd9igKPom7bHiYULoQoXk8BLNxa7gUBe3SfGFtgamEf49JteUYQcvgR2DVaQ",
  "key19": "27CBp27qgQXaCYgsbvjYFwgs6iNn2EHoMqZetNQQk1442zDV97Av2nWePXyatqMt5HrSHzfZP4ykCW3QPrKea2zx",
  "key20": "2fTzpgPt95TzwaEqQ6fWxwT6G2JUZjpBZqAnx5TGuo1cbjvK48a5jh3EthwAkfZwgcdMiATtRdDJbsQT9s7FPyFJ",
  "key21": "4X5K3siANScfnzXcx1W1ucu4rJfwxY5HSqahcvR5va9YzFniVwv7it6PXjopV1k5LPWLwmirt3dDJYZ9acexW9jA",
  "key22": "3HG1QCioWVPn2mhdVupo7MqzUoev35GC7yemLioG4RQNcYih3oz9aue23nYCLjfsSBm3skGqfKtsRZ9gwyA7xVBu",
  "key23": "HKayCgPbxFN1BEwueTuFahds3zRFeH3M3qoEsxgvJgBVRAL5XqyEedBd6X9Qg6Zf2ERrjysoSng34DVCyjmpoM6",
  "key24": "3TfvNvsF2RKkPh6xFin4E5R94b2EX1fJ5XFCNLsdzLkQAFEaxbcqcKahHCE8k6x7WWZkd4rhVpc6yQcVgZiPcQAp",
  "key25": "2xKEGUjUeqczPDtDUHYAioY9KEcEKmzoz5Zpi9MQUd8s6NSxv5axxYA1NmRnaotqBMSFmPeerYfJLw9huNyJFkyh",
  "key26": "26TUKA8UhobQeeSKfGjcZMqG4N41Kc5sE72f3mdoQcnp9py7oEiQiJ7WYzFjxqYU4148hgzc2sk7WNJaV2SXkABn",
  "key27": "4CF4zgjzLFe5X7x2pm8Dc7g1hHUGhpDvG7nFRovBcGoXU724pz7bMAwF47QhdVBRraEQJCWcrL3uBsSuRU7h11D5",
  "key28": "4yiKsjdnX3hCCCarTsBJezrpj9qmGPcfxuNMZM3FfYktmzAqg4vvEJ6oZz9GexKqpEfAbrtUNiKtu36xMoJ4T4yC",
  "key29": "3vprK6jandMZ683Z5YqCpQhjBanvjMJifjDvSVMAnVCNJW9dXhL255DHafeLYuNf6s1Kj4MBTajWVJG3Ub8XX72B",
  "key30": "38cqUKq4V7ixY43ZFnbY8psgrEY1EwKMVfCSZrx4tgUxqyzqP6beSvCmiA6UGj9g9xLr5kx6HQXHRbo4RFbSTKUU",
  "key31": "4aHWLARyHUbZC28oPL1FtprjyVLtKt2LwGWCc9VE6mReYrj9vB4Thqd5AbPX5q1CWRWRF7NB8X1whzyVFDz9cJec",
  "key32": "5aeuLH2mrjebaUjjP2qWJdysuhVVfq7AgaJLauDHxCXPjo39PieowiPYQZx5Np8xVh27eoSrzt3MEsqn2Yxcq3C9",
  "key33": "5THqMWnXxk4SVM6JR7TBkECZ7mNx9jzajaPbe2aaAhcNXQCz2nuHPsoyVB5t1in5mWwNC873Snh2mXNLw1MmH2KA",
  "key34": "TwHQozGpD2h2xLwZNNgKKyFcrFcTy5p6GagbMMmGtAj2K15s95kuPV211u1mL7uwH4KqKePRVigN9upAPDjvnxB",
  "key35": "4Rg5HAbkXrBzGATifDU6bj57h3QkXcXUPKWuiHFXQ6y4kNf1LVSwCDgeUxSoPoKgMU8Eg4NnUWdUSLxbLynymmfF",
  "key36": "2ysporEorwfWKy9uJMy4tnLRJ7UWf6E9tQ9cF7ZQvzfRabCtZj5Wt8DporZjSgUoRvRbPpdiGMeP48LUJva923DR",
  "key37": "3wRWZUiT3THdbB9zazVSWBp81AtAzfCkNyG1U2TXWfHHaeS3crdwRDsDWXURt3j64genUuiNWBAQZ8NmcfB6XqC4",
  "key38": "4r66czNUwPc5CYkosssxTsanMGn6AFbqtbEnJTzAWuXkFQp4czx5i1nrtHTtiChqZtGPS3Nvcnr8fcZb5TAMERqW",
  "key39": "4y4qVT9giCWdrajfK4Ky3LDfgpuFNjuUDhoKuRFdaCLoikxrqAWEQRDzAFpCQHoh3FEu9rHRgnM84zrKxyN21f2p",
  "key40": "7LAVCK2h52sLhVS1c2HpDyArDFK2VcSNUq7b7wdwQPeNqGNRSaPR8avkunQJCcnPPWgJ8XR77bPvAP12ALCNNYJ",
  "key41": "G7qnjKhWpEmNnkdTM5a86c5uzpbVwwQpu53TX2kRkzc67gdZUSdZvt3VukTkWdMD4ByivabqkTa1WkxK98Pryvm",
  "key42": "2Jjv1j5yeEa1iPgG9NVgiDyD98Pn5JkLjbT7h56fTErzy32VMYmaWGBxBsn7Wziieavd7G2BKjABLfsQPaGpFgut"
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
