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
    "49gkeFSi9A11K6nqYP9EkE1rUDXZP8LBE8ZfaUUfgEztfFNgXbRVSgm9kVwzBWAgdzPdZ4g8qW8GGeLDvNx4CZDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmaYSKMtWfHUaC4eGTSKqoFM1G6w5PDaFuS5TPkYDbfda1wYqgui2SRKb3BjkUG4vPGnUhXpAhVywrRHm2Drcno",
  "key1": "4XThW7JuWwdCxVMwHpfTb4M8STNypWNpXUHxap5vDdV1M3CTZMmxD1WaWKPrydgepxzxU9VYbW9XmRnP4jeDYhGW",
  "key2": "4SLBiTrb4JyWsxVvxVR22j5M1u9J2djK9vXGpXYwpMTgPXo4WXvwJX7HVuf2Mx1WmncAz3cFSM4qDjGEr1QujdT9",
  "key3": "2ApXnWNZHs6ijjJtzERGpyegxMu5yyeusmTrY7QWcvBSSrqY66uA3ruki8E1Gm9QAYW9v6hPBWLjt2dLnncWVp8c",
  "key4": "5ozq3CK2w3sMEpsUi2zUULvGgbzA3uSYTUWRQe9egcSfTLVSqn86yDVUa8bD8WMzSfpP36SL1byJNy7vah1sGnG4",
  "key5": "35TNZ7WYgaJ8jcFvknbmMgn4NJftv4jAxCsqewA6uVcx6RX1vEbYoZ8GtNf34EwCRasYLGbxfWMggj6MXcZU5H5L",
  "key6": "5J6gz3iM6zhkWyPbt7gSxZJ2GcruZQKjZFWoApBijscWbM3noNRBN4pRjvkGS5VMmhzzVVUXSBLzCtHbrfRmpoVa",
  "key7": "3WRjKMUd3fdzrjtTSZLTeLm22He6PpZfdPURi2JafQnJGDop28RgkstrDBJT9YLqyZL3tzoXhy3BKHCVQDBwDS2B",
  "key8": "4GbZ9F6HzgDk9x6Q4DL2rD7znDxtyBXV154STRNKrLyJTYQKcZyi183vocaztHRos9TVFXb7229dt3RB9D1yDAv2",
  "key9": "57sCKz6BPKhLEjs1vwDagHiErPkQTT257gAMURAvtKCkKEnApSKZXD5ED51K9Do4N8YCVzsv5jDPJKunYro4db9z",
  "key10": "4QYBq61eXJEmUzBnVMLEq25YkeGQK7tZo5PzCKwzK7gXKYTiPz3eBJWynn2jCECo6aJ4Q1WVqwAxCLeYnk4XXvYC",
  "key11": "5YwAu8gEBxfb6pecvLcqkT3pJQ1Shqg99fbpZvHyHeHTA8fuX6YnBCNAEt6gTHNB3g7zk3wtxXK8Eojwoxq826oj",
  "key12": "5P4szfKusveCq6wY5gUv5CaY4fsGqRqhYUdWPSf4zA4aSQu7sFuowMA1bu42MmXsw9iJ8A739MZzUadnjcPD2RSK",
  "key13": "55djWXjGTjUUSNajLpJNh66M14vXsSnWZjUxt9AJiPoqNc3kwSFgYdccgAoDC3NeX8okCg1DYN1wgudRNGcUFEDY",
  "key14": "2MTqSawYns4zzMcQxLoH7A7YYGpa4Bb7fJCGA7U5YE6EYGU6FTLEgtoqXYNpsBGMYxRQxNGi15FWDGMFn3VEEjt3",
  "key15": "2e9qYg7VorBgvPGBKYBEBV7i4XQMa5oiivmmqCettnzQsLzESfKMXfKktMo2Y33erQWi8vkHpeysbB3uMquMpQsU",
  "key16": "4PpMWQmSHKqPp9AK5hZhiCduZHASBoTutmk9mSAdJgbxr94pqZVLdDhozSHDHbWZgtALgpu6Xup8oBHny58nzL6Q",
  "key17": "3X6m4d1oBk46JT2bqzMocPsDDGvLcsSqimEdv5jejssfqGYZBb2LdQm3zJLUSW2PhFS17DEV21BFPG1fQWUWFdLF",
  "key18": "3gMDrRfRskWmepWvjtm4veRipyoaKSrduBMDUePmjgECoi3sR9AVeik8VTqy3Qq9mTALK7TLe2KF43Lpc2Db39u7",
  "key19": "23wkUEP5LPFNhNiPrFMMxVcu7VDkTHzUM6MaUgzZn1BYpYMnv8cyzM79bjFG1avaR5r6AFAzv5NPfFWvFaxmBRJX",
  "key20": "25my223FYiyCNFk3XP8ejM6Jqjnnhox5tEYHhs8QpSFpsNDmzQwEv391bt4okh275MvECdHUfrDbvB6tGsqYGma9",
  "key21": "3WDmWiuv3jEdPEfqUd7TSeNPSqUSt2BdVNAcf4nLoQbfwb8YJhCTqSqxqxG6xDfdHivER98kyHVt9Q5aKnkWgDk",
  "key22": "5pBN8f1JZifV3kGFKZHyjLW6KZ1sVYc38gfk9wyv1e3FHhbQutT2RpssZV2wdjgwcXaXqgCHkVABYtdsbZD8ksZn",
  "key23": "2sQ9M5jCEZ2dJDmdhkzmGV9fCi2v5meeMXV6a7GiZ1fjP4wr441sAQkckes1TnYphu4M3AKC9f9hZ6FGQpBKSy6g",
  "key24": "5XZkqdNXJitcSemPXHPa4rYhxy2kig5FrFS33wQUpm7XUSr3NHkXFh6epCWncDdkFPWe8eDEjcXMtyowtCEnj2ae",
  "key25": "tUAwgQGF7E3jyaERFXP17Cch1ELrPb82KnVUu91fmmzhDDGy5pCAz2Psexb9UmyeTyWTpWtEa4PfJANnF2CAuen",
  "key26": "2Nrfo1tRBY3fxQGvfUDq4j1eoEgza64deR3bmLFGcSHxDTHUEdHJA1C2qR2kZV2r4ESmgw9JW41bjpF5ThqfSMji",
  "key27": "cNiKnVBznCB1sXRj31iyEyPKnxYgRd8MN3Uuddw6vrdyAhdFf9aaguYMbubz8HKS4Ve37gy4rManBREriVbcvXq",
  "key28": "4na1zqaKobCfRtjo81jFNjvVJDj1nAPUZzCXavzRUAreF5KbC8tj7voHcwdLfD5anR2oxYBVjJ3CkNHCtW1da6nE",
  "key29": "2pdr3NmmcRNL3Bg9UjDzbsrgq2XMZjBobQCB13onSdp6wDNjoUsdyYrnm39BkG5ZZaSvGHGHCq87pSrtEVT7aBb1",
  "key30": "4gvutCoCmyb6UwqRAN4VDWU2EPCSEDekp5dEAuiziiDGAJqMoWnTwMH3bbCB41y3SuVgCJRKy6mJDXPgozuPtyWT",
  "key31": "NKaSvAck1mCUHVrsqzkRNqezD3o9QTEV1C7ez5QnKYMPEvyAx66jLYkcZRC7zn4RNpvFpWoLrZBH8h7fWrzLb1i",
  "key32": "fVzeqba9J2mWozA9ByFsSfQSidcTZbRJJuBfSPD44VobTqYqtb7B5R98yUZ7yfLkSKJNLYZj3GbhtkQnW6ZwQu2",
  "key33": "mdxyhYu5aEAwqq212uDcFPaH3XG3EK6LUPcCMsyUDiWZSP2o4gk7c5AyTZi9ZuQw787oE4NK8koz3LGbR2cxq6P",
  "key34": "25s4CZE8mazdYVwR5cQZv7BuTpUnvrTjQyp8t7qCBoXdrd14tKR6g7H8Jwsr8XWhpcZukCm59XjSbVSb1gfbr1hk",
  "key35": "3Nd4vJ9KWbspLtCUwqDmSWpFakbfgXgXLjd789sDy2qzhoccCqBQCNQndcmgz4tXZq5knXVAwoV3StCiCttc8SgD",
  "key36": "bjjLFg81S9uQmxCvHZVFdFapex2evMLsHD9Q8k4jgfahi8y8JDsRSJeceW5xNJpZRpTBYbB5baMbU7mnH6nC12J",
  "key37": "2ycRYsDxG8vXaTcsQgze6f8JwdLBgY7nVJhmTccctRBh7Zp71MsWVtQhfRLtBhzB1doK4AXC4MK5VddZLLBGb4aj",
  "key38": "QgfF113XTiJ77ZmLcErffdc6sQbDwu5vdRCMWTULVBzGRGTAox49ZRuM2ixPBcR7cUcPgHAQZXwiGz5Br9g8v3q"
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
