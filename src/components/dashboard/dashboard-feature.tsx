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
    "enR6uPSoKKHxnj6NFmRzh3mhrFv69AT3Efs64dKiz4kUiND7eXZxyMisWyvVjYmK18KPrvfAeDMcxVLBB1JryAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "158E8WhCWKym8SXJiJFzHhu68kgnDz6wpuiY2nyz4s5EHUuVg3aMKBaALN6eUEDJNSG18c8CxGw3pKDJ1pBr4gZ",
  "key1": "2YPDa3B1TnL59CHmYq1D9E1g2YqZqYpGfGPw9iXUcLDY828fV4STLaL1zXFMXZKaccBghVaft3A2HW2n9KZwhxzu",
  "key2": "2TBv6X2hmPvZ7TWBixzs9aFgcpg4gY3uY5nAdJniJVuK6PbiLgMevbQg944shsZHNNotAjruy9dDsBfVfpbu3KkP",
  "key3": "2SqrJmnqEGN1knRDo2e4QMtAoWAEDPmAvGtytJm3vpsqNWbtQdHV8LMo6wyDCJi1m7vAEKpeyoUhuq7GkEqtQY9T",
  "key4": "arpgho5UYNt3YDVNn76totJ23NmHU9XGb87F6Vmn96ntSsKVfwDk6NXkNeihnyNAmWJnFVYG9cy1i7a7BHnbQrT",
  "key5": "65gLAAjW2HLvnKPGgyfpeBwWQpUokwk17k8iueZxJBXvjbaL2SBEcueynwefAeNLEhEFKPQYLHd4anZZDkLcLHD8",
  "key6": "2PHsVmiYdAbv4KH65s15N9ZWRWaYucAMc88F1SdfqTRpqzNYBNDU1WT4MnERNMXzKMCsbuURhkjbSmVg6YJdBcjs",
  "key7": "mppH5h7NAircAyABo8BsbUZGq4kW6EgydWwYTyu6CuunFtssWxFXJXDwGVSyhmuqhu8EtBuhj2N56URfqsxDEcD",
  "key8": "4yeamr1w4mqDCvdFVeEVjjjfkL65neegoMHaLCnuvYUP39VqctiXV9fNewFuCeKRoyXpoSW6GSj8VaZ95kBbEDGV",
  "key9": "63XpDuHK4hK9XJDk5PArCxnbn9pRkoM3SyQqk7JMc14XApkHu1c4GxetS7hwKsjZ6s8KXsvHBifkibsdHU7Fo36D",
  "key10": "4Z2UNJJbhF1vHjQcW89U3MfJJfRnfFebY89k1RDzLFtqGhPGMhqXPyMiAzYPYTuKFiMds1U712GL8BRgQPEaKNv5",
  "key11": "3biuubBiWka8hyWqqqg2dvgv9WhaFMo2dBK4ytwRmL3uTWMxkTwyhxhv2K5nhbRanktGWX63t5p7z9eeGS1HrzJB",
  "key12": "498saDB4e921pMJzZmKsQbJM2hKLyUsjtU3JcCQU8noxBMYz16Vtvx5qZNhvAMHL9sGVzjWLZeCKQ5PPpbJUcwq6",
  "key13": "2qSDcXQUFxSxh8iS57kAkf5siqSuwVDrWAyeS5wpTrvub8vGpeQHPmmDRqRwWRtdtT3eXs63Zi1wrtkSECkUnmH7",
  "key14": "3iS3Z9g9WNTsNrVs2FCvzW7meRSxWhYcetFgrTXAvAN6eBnqGsm19SsFDWxSTJ3sFUuNma4eqsZ7N87TragXti2J",
  "key15": "3rTaHbE84X1D7jkcejBL2hQiEcMJR6YRhabQZV9bsTFajujUPh8JxPxktLVYhSibNHREtqzaX7gscMcjXP4wQoU6",
  "key16": "GQxYcjnAL4K2w7AFk49aMnwc6kmqLEUoyzgLs7mXwkfZTFwnyuQFcf52eFA5FqwPAceGKiTRMHqP3XxZfQFZEEU",
  "key17": "3MXDubTDkgixfYZE6u33UoFpjQ7FDkx3J8zLCauKMPKYb5XLFs7v3nfVeRgMPZGZRoXQ5iUSj1ReKmieXsGEMdi2",
  "key18": "4uZdWPuFMBsL2xkQDYU6L8KjhjdF5DPijJK4yUyBPFNAwuZgHHJE5EJKCcSHVdSRrK8jTwrG6TMbTbJq8vm7a3GA",
  "key19": "3QtVrqVidmn4JR2aocTNd3rXc1A5Xbidb8DjhKFDgZdCVnNjA3F38KKLe6y6mvELYfvHDMoVXYpRE3e75yi1yLeP",
  "key20": "4Dp7Me5kB6dZ52ez9WhVG8BdNTpgvqzakv3onDp5Un5WojnK7GdB9ki4jsBxB1zfXSfEQuX7Wwx147ue6Pu4kHtS",
  "key21": "4B3xi8Yry2a6v7kXV2pr8hJjdBic785whi9raeQanG2VGL2Tw1xdXqXHWNPe9Yo3bv6sh77PCFf1a9PLz2tUioFR",
  "key22": "55kL2XpVrbxti2pVMvUDGQ5jNF58shSWgXdgZBDgHGHCy19LpmEZ5XYdkmXgKPyfZZbP4xmbTbC4T28rSb7XzCyp",
  "key23": "2nDic9hfGbahGUiE1LfXr3TzXuWkR3Z5ZALwe5prYuwqpxzVn95y14K6WBSEoGjPZtmS4NYafa6KsuFo2fDUMqb7",
  "key24": "mpkqimYfSVCQNVNriJPZxq4b2rAJNQp6Jy7XQ5rZXkoo2zZgMqDRwXi5TvCuGmmHxEUDzr1H4v4P3vadQq8VLEB",
  "key25": "2CCDWHy1mHyf6BQdUaQ19De9G64Ttx4vYrR4sjnwH4JHedbaAUbR218k9rRvkXAdYSX5wyPF46j9zmTJAnrPLzeP",
  "key26": "4JMHF1LBpYRdNjNeD9fFtZSL6HC3oyQMwiyvz5T4ihHGdS79jAy2gvLkMRBHYqpTmhnMCFEUem7CfH8b7NEerKFD",
  "key27": "4iq6RnAJ8uHNp6E23WQyuZZkgicNgWr1Na8bxWLFYejr8Xtfd9m3QwDpsHxzM9XGEPKtrzc9YhUF1eoGk3n5PwN8",
  "key28": "4N7DZWd2iQU7nbYhKv7GAYqQM5qpp6Vy1tJ4Am3xBvt5n697cKNE9Vk7npYbLos79TBRCG92XrkvnRWEm9bSoarH",
  "key29": "4fFSfj6mSizAyDRuhDdKzw3JXBCZXTWxiL92eZG6kAqs9ZXUc71BDjzFYK9dC1u5JxLdu4SGzQmP9snikHnFYc8o",
  "key30": "8Dp4foZhPsFCnBqnHQJPQitoCg1eVyqeHXL6berJcLmHwSMLkPiAqMTCjx7Dyaf2USP34MtNMXW8dWHXmzANbLW",
  "key31": "3HduLW3mtmwY32kyAREaQFG9EbdUxPPghv6dHdM19KpVh1X5Zwcts1vNeBsaHdVBg1PjQroSqMMmomh8Y26WFnCm",
  "key32": "5G5igacL8gz9VkTLnkgVMBw1HQH3nfBgbPd5PrjEUHm8Xf33z9azX3JtchyFdkdpkuUiEWzdasxcr4Pjgj8HDmNw",
  "key33": "2D6eWMTqdNW6Vc1vKn88yrTwK2waYGL5obUp36KV6Sxty7qVc4rvVvY3CPF1G4gwAB6LFQ1zaHDUEKzDKJLQyVom",
  "key34": "5xdgKoB6qhWvsvLqaqSFDqf1htAnJrAxithaQN5hSbWLGghQ72AB3ZyzAcTZjYvdwAKg8tCridNTyFxiteSzLprK",
  "key35": "4fCWcbhEaD4CtvvYNxTCEdz4fZWCVP7DMqkWLVwez7udD3SrxnqcmgsEGm1X81cBh15arvCiXvEEVdXtTsAA5McX",
  "key36": "2sdgsfqVx3cuSZeNJwKRmJvpPkxX661Y8UxUM4pjy1153p8mSdSYN5VCRkHjemcQNUA5pGLz9toNXqd1iYzahgU1",
  "key37": "og3d4PFpvAHcsFipYhLJWmNBMc7qpSqBJkxRQ8pS3XVQRVxana3skbNC5v8ttxpEdWtcZWUtcTvngpAE8ztDRE1"
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
