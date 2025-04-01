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
    "3L2Vrm44tDYeexseVhwqwXMaxQz6KazrB9mpuWVQx63tABza67gYyfzDFgstJXVNvzBba4yUryqKaBnZqPw2pzmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHuscbqv9JHjSi3TcVNvgHYPSqA5vaZYsV4btpWzgkSWeAogo8EuTg33A2fweAX3oyFRT3oWS59sqLJw1UTjzs1",
  "key1": "2mFU9v16m8azWnEAsStkYDKAJJn2RF9JJncJB3LSv6UDCzL8ayEksSJbt1c6dYUT2m2aBCAVrqG1LiCBQiw54j5W",
  "key2": "Kp5YrZpkyq7tU24rU3AFqvCi9EZMGTUUYXE1NSSUqgKTBogovKMKQmJKLtQsmerijQxBnqdpT1r8jaWSmafWATF",
  "key3": "5okXiAWbLTbipED2XUSeZeD8856LHNwLTTkFNsCbJBawLkVPaU9mseVu9kj7i8JNVPiAr6M574Tm9GLuKrxXMvUC",
  "key4": "2UHFvHTFeymnMS68UQyZw134yUBAZN3VdsQDa3f7cxD6mLTgYxQ4VAoUXiQ26GB7NMX7tc87Eh5YM1gu8e3bnmUQ",
  "key5": "TqnerRcwhD54rgPF7VQ2W6S1wgWtGHYMvDdBniUvotqNpA8wSRfQgDQViEK3aQD6Epb3nTBPr3MkF5vDoKvhmV7",
  "key6": "2yMud2UHSYQgBEFFZmsTC5fcCQriSPMHsjobcwn2BMHggGzNgMkYNoC6Ha8hYaop7ffakMbFRNRucMnZzLmfZv6c",
  "key7": "4p18cWeuhRCQggH6L5EwKxNBsLanD2WCNUmx2R5hjgh1MjQaA5NcDqWNFMxjAp1U5QXp5vvgUB4UFfSvRa7cuKg2",
  "key8": "T2Zxu5YHDEfo9MzKqE3XKzL4iXsA5UBPzJ8qyeFEZhvHhtquNEncxAcvYayXr5UUCUqaGNQZxjTNbgSQiUswSx9",
  "key9": "5tFTcUBxUo6zM7v3HUzyKoro4kSpgxwCGHzVcGeLKGpiQsHG2VXrjx14PwBKwwDPgovBUp86JeQ4qKWjCx3JAFuY",
  "key10": "5fLcLKEo3hpxwX4nfRMnHK9kDjGdPo2auF4obMSwo48pmABV6o1ZZV5JYCKJVNN9V9JFzD1owe8r8t2csnAY9cTd",
  "key11": "civvp9dRQXBKicYMBxbRAuujPMaBWpmyvvywwCcbWMRM9x2VwRtqLuDsV7eBeqb59xmmBNoCoCN7eqZoN36ib3o",
  "key12": "3V7LcB5gugec3gM9GNYd42TGCczpKV1sBCqbzjB4XjiuUXLG85CuKjWLnxvcGvvJf4yAyqkWE6ZfVTSwGEGK6SSw",
  "key13": "4xmaQMoWiCtjv3rMFQwPLgsQnWfHwvSfNi3yVrB2u7YBVeatuMhxxX4ugXCrVzuyhHNiZSfw4rrKkk9xmpFo893H",
  "key14": "3H54ajdovq1rw2aBnW8LaPBAwBPWMhR5gUvKUs4BtecibhkQhpdeCZRXe5o8fszJtWcFZY7r9Um5wirLHZXaDBVo",
  "key15": "4P4R9YxQNWg84u3L2f6nzXv2KpK1cmWSs3WvARdfZ5Er3faphqg3SWWdwuDngmChbK9qbVgYyQoZX5t4y34UBSDG",
  "key16": "41DV6agL7mTp4q3SfSLLympixEoWY8ErgUQBTDDaoaoA4YUPvucTC87aq1YCm18hRnF9YnrXyZmPUoxkaY74s6Dy",
  "key17": "3dhEuiupL5hCKXKAWuSzh6XGB6atq1boF8L27f8g3Tsgx7esejixkPKVbk2Lxu7szpU8EApNxN4KSvdetv6rfDaZ",
  "key18": "3kZRj76ar1LKSszonRoUVoxNjP3EyV5dCmCG4awuV2gQTN1g5aXyBANzcp7ABt9kkdVDqxvVkhBTWKXL3Vz2ByV3",
  "key19": "3ydSkMghkmnNNpvJvShGCbaPNuSX1otbftoTdSdmGcFotd6VPqzwqNTDvBqqWUsKawdj1Th5FXhVwHssdZBVNBVD",
  "key20": "RYF2rMgaSPQ7PWANQeU7DnUiUG3zG5SUoq3T428e5as8sGj1wwfZ9CWpK12PJQBD679pDk7BWc6eFASB5BY1d4s",
  "key21": "cRSbK6n1zCc2gb91fYWCbPrrVpVXAKP2N5GVLbGdwTSqBQivecrdKL723bxgHUBbZCSDqeGKsqC6EBaqP7hrsTV",
  "key22": "32nKe4zcUbiX8XcfHDsaruGutp1sUN2kETHUf4zvxpGz2ffezfVAPgHXdPkp4M2B47TrjpyWPoqCYL1CGBR3ijMJ",
  "key23": "26KMNWci9N9T4RnFYCvG3aNm65qGsfmrsvyKp5x9R6N3pRQ2evjLideFxYU6iM7jT74ZyotPjhbVc4JxTXqM5DEG",
  "key24": "49aykv6MKmmHb3RzrZ5eur5CZpfqS7BtwrsRbHeEAm4aDNc6nDNLv9xGLksWFD58Vtic8zoRvVZ8mdopHG1NJySR",
  "key25": "3raxfk9RyZYus2zPE9BN1tEPauK6U1JatDuzk3nPSFL228DyvHFerGfZDUfREz3899iC8Na1qmnYsR1hqNhHukKD",
  "key26": "3zQwRZZTohPakpKx8GtSfGQNzTX55e4ZYLQTz6LtEABLWuv5z6BnVHtx8SJbiXh6rhAkELqPik2EYqeWisjdpYwb",
  "key27": "526mLAto4GdAx6W6yXpVGeAXd8QrixvEUN1cKm3bFzyiSB4G2XEU6uDiyHZ1YGCYZ49hSbkX5LNh7zoyAcDfAhkG",
  "key28": "5DngBFqiacypL9MMNwiTCsBm3EgxSpXsawNKeNntjiCWeKkGS14bPaR3BkG4FY8mVdxSoTicRusqgigFCLS7aHNM",
  "key29": "3kGyybL4dVyfsLdEXPComoaVxDNTH5Hi7d8fxrAW4Dk5SyEqz444CKFbBxJaomSkzLXQGtRwwrK7QShoo6w6rDu7",
  "key30": "52Dq8aJF7D2yU3P6Er5uMxsvs83iVCpffZvLTxG34SoEtibxsan8SaKJ3sZZ78e3s3QYybHWobCEaoFX8xQzZWn9",
  "key31": "2rxLWhnKJDrr854Fe3mje2J7dVdYiGXFvx17TAjf6gV7XKLico1dz22pGQanhMMsRFsRFxWBQZdPwEThor7Jd7rh",
  "key32": "5BKjxuLgDUoE4ancSf5rsTPQGZEmfRWwHXWhLAa5dH2fdYEMLp5kLXhmV8yG3ocuM8g1TfCoAbEA4evpPp2mjZRj",
  "key33": "6K8kiGNsJkfz9p31Y6X3ZpnS7cR55rUyonGoQ4dxPc2CDur2LCv7RJbAtSzUuJXKwLCoxPPpMbgaomGvt9qrCDa",
  "key34": "5Kb45L8YJJmt7DCktJjibpP4WudqaPZWwPLjAKvmX5Wxc4ZfiLyZfZK58pHuMtgGoLUjoMYJQhrbxZexcpa1VecW",
  "key35": "45D7mwfXzQ9ctPUxXdiLfUZan6doNVtFtidQrLAHmgzm2eRPbmGD7wyitT37PCNQzboWYK6WHmPharyy3H7mr38c",
  "key36": "2dY8wNgtfFeAHm7ZecbZvgrnMmg3ZNvnB2dwWqxz6TYU3vwTNLgxSDy8whN8Vq4kCXM62iRTZ8hdi3DHhhqL2asU",
  "key37": "2xd6uEAdLzoYunwDQzWdZeHounK9Zo3xvcfX7P96Mni4E6uhkZ4HW8RfwiSxVDTRYbktHGwpzkqZM7ZrHRdLDjdn",
  "key38": "3avyiMPrMaFuLh8VHWksSqpRrtXphqGhJLFn9zs9VZW5rmMqGHWvr2nW5wZSgxrDiLTa61SFUUX7AQUVXMSUENbD",
  "key39": "2cUFk11t4QghFoUgsQGkDzEjk9LbfDQqwEVRqro94pt4FNmsHvwbrFrusNF4kSRpuxSeoHES35hC1YDfqVwsk8hR",
  "key40": "o5ZCrMQ5uPHn4Du7KWnd9cHr1KZA9xmu76ZxUUt5MdXwKeFXEfBc2tdcHxDJtaWHryA6GzusB4m4PQNnso8b1nb"
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
