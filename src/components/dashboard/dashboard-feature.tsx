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
    "2UHdAeTJXsuNoF7tUYgUfdzUDyZ8V9iTVbox31VXLQEiKYGhco2keGn3nPLEYCjXydpYHT2s93gk3Drs1LUtE67n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYZCFwqrjfn3touV1xtoscUe25cFGWZ7WwKmrjbihTNES8erQ4KJ1wmSJc9u3YxJgCUmfJ71c5DPEyqg8zRFdH5",
  "key1": "59iiLJER3nLjVKEWAaAcjPCRoCdY5wvyzDezjbZ8xAWhe2gwqra1E9RcpTEi4odcXi7PzMur14vkWgBiwJDeUQ8L",
  "key2": "51bcayumBDSdDSyQtnmj4GZKx2qCd1BJZmx3Ejr5w8xQZ26BTVtfkFQik5rRsvoDKYSwJg3pSboa1Q8gwNfMNbNV",
  "key3": "2Fmydmey7YEA2TGawUnPbpA1Yrwq1msRaHwWwHCiG7NxDxxrw8fAhBD2GT7CfsxpvmXyRdQMRTuxHPPco6a5xFnV",
  "key4": "23wjxKsB9bZXpdU74u1Ud2BrufT7GyY68XcqtYmxzazTDjxbNUEkMKwLDT1NeJ7Kq3GV66oN3CDjC6PjDvEc4rA9",
  "key5": "33up5A1CZ8JeZD4te5fmDf5jZTqDpBxktduT7nbpoaM9L1FarnYegsaShv2xPCrS1cJz2m2mZ41eH7wtu8GE5hPW",
  "key6": "4k48jieGFtAoLCPfpFsm8nDSzaVYeDuqKq2dwXthWofd9nQRNjV6t8yA4xmDhzFmfak6DKFxfni4EijZvwSpMciR",
  "key7": "62ybZnp2mH8rZnr5y59m5d98wcS7N1KYSZXqMVJDpx7NpYMFBcPhwKGCxbZ6hwpvd1tYXSSWVTg7EM5za3wdoYZA",
  "key8": "5fwY4tTqw953zzTxrNxrm7KqqBPGuu9Fo7zrGg59PmhqPqQ4xrpX5C2corrxydEmikgNpbDPFFeCGQFCo3cy5gW1",
  "key9": "3wCMYwvw7tSqXPpJm5nknoUy4exYSNfwwfcoNoMSMTH9yGkin6w61LBEAqVBNdAfHGGVApU2sE2HtTFhFwdbsSbW",
  "key10": "5vghGib64vRgnMhFdVTYm8pXDasa9PZnj26HZ1bwM2swTBk9aUPimkaAutTET64LvXP9xY1QxDYcrEkaeXbvPvNT",
  "key11": "3jHA1TfrsPeuJ2RQSmsZQSFGJJ8qmF6vRFeg2xvWr1M3aRxwgrQfWSrHiZ7ANyvEhdscL2zWDB1wHbbCJHefCszk",
  "key12": "ZCBMUfQgVLqfj93WuUP8w4yDsKqH6jzZjAw39q2CktSQrYXFrXCb4sbnUrKqRry9Sxffmi7rdC7PE5c7TFPgwc5",
  "key13": "666NxX4AbWdHeQ7sk9PSd5udtoaLmTaCHUvnjuXWHW9TSSbL6z1evSTYrZJUgXKhAPwG8eR2hCaAaQronD92iNrW",
  "key14": "vYP3SvZYhQxWoskPE6yG4efr8CS7g96uT45XyAQDcRz8TTdhGMDnyqa5WLneFJ5hz2G29nfzJXJE2ZbmcsLNavD",
  "key15": "4BQNnJxakkNUKqr5uhkpGK8A1DfnCqUb1DwcPXJoXWG7cvv85FVvVd2ZUBw7KdMsnetH1AcdPC1Vg2qQvLkGMGys",
  "key16": "5MhoXuz9gTfa4gn89vyjDFdtfAHsw7pR3roQDY5b6BV3i4PMonBBeKRnX7HJtoLaRtJgWHU5GAJMmAvyHbHxtsgd",
  "key17": "5A4WLr1kLY5xcEL5VzA7DK8qFLAKzZyqDKV44QXojYtmh8A67cq3nej7wRCYcXAKdMkW39E8s6NVYFAgRZnxs2FC",
  "key18": "55QfAucW19d3frixsaP4LxsA1urQm8EmALAy1LSoraxCN2kBijpLDKiLnSSGYqNZZznkNkTKA9ePMBdV8z82e5cq",
  "key19": "ChxwwBA88Y8hnPixWSTeZaoNCzj5DWHybe3MdoWHcG4TuvzP1shVipKBzQnSKq7GGTEWjkuKxivzLXwML55Hk82",
  "key20": "367RGDymfjrYbCneEkv74Ueos7R1ymYvTA2VdEHBo9rQ28s2obeab8oYR2gHe7UpQqgk4yRZtAFECiXkiQhxVUUa",
  "key21": "3K7JRf1SdFzVARTK8UvPEHvtuJfZ79Mr4pLJB8hgjuJTbNVgVW1mQwavMxH874Ti9DgvGi1s9mATVZGy6cS4rABF",
  "key22": "3SPCR7d83rocDtk3NSgV4Y9fkvws4E5raYKukfnb5RjafB73524aQCfAFJbqe6a26Ne4V5qRTRQ89m5cF2645j47",
  "key23": "2SvwKD7KMfCjyYkMZRfKg3zQ8anpfDJ4px8AFrNh3Y1hYi8AnNc662HmUQxySCgpWd7hrscNWw13tjKrcqELNqZn",
  "key24": "3GG4oNHyojrXySVijgfWs5xM2cgmCPSRYeJzrUZ84bZCoQ3u1frkD2sBZCJo5CSmsdpwppCW9CCYpmyBMCxXzDyT",
  "key25": "2r5dWsX5WmKo9dtgsHizQQndE8b3uDJyxrLytE3fAPmKsEJP9LEUjwn8UQdbaAgtdaz37XsVtskSUWUqT8bzF6jH",
  "key26": "yrLB844TUoEqs1C7PYF5etynKMnmgNhwwhsxA6FDCCrgWdXZ1sNZBHxJYioQDF7bRgaWZEiUZEyCn4ipVXjxaKk",
  "key27": "3gZj2AcfXAk4ctqdYnH3VeUyAtsvag8qmXTjUx8jzoZrizVJZN9Nz1K2S2LJNhqnw3gZLEw8fddpgq4RuFE9boTo",
  "key28": "2WYjkLfKkKSSti33x2DQ7Vh9pvBmdxuR233DDkfaBUb7b7SRyvDp2Q4CqSpHYR4FRYm8Nzdms6aWHkx2PKGSmvBZ",
  "key29": "4uhUxvggoZ5NpkZx2UoDJF51J2h3EtBNp8NeVLMRQr5RJ9jN2RpqH29AAf9htycxigwXwZTHaKPEUjPyMgVgkwUq",
  "key30": "4L2iZxxveZAgoW82G5unF4oR7xmLL8nBouN5brtc9iQn3cymc1UmNgCTJQMSbH3ZN1mQTWjgJ7ah7PM3igTMX3th",
  "key31": "63jmtvk4BMFLBvLM5sWBZgY9MnGEq1QxSHbgYFVWtrAKSdbmpzQcjToNVBaQ7NWfbt3p3yZGq8CRvZ5vZMkjeT4Z",
  "key32": "2gTqFyf6S6fhoh1RHd7SKs9y8VGKLSQGKdUkL5bUARTVLKyV672vLtddgJE8PXY2u1QNQ6u5WzXVPf5wL7LigRR",
  "key33": "3dNDAN1yPjEDoaWWUtboW3oA11wayhJFSWX6Ki4FC9Sini8wPKUfbHdWtVXkSdkgwdBe2fkPq5q5MLToiMAwDXPy",
  "key34": "4xxoxAePzopZWfsdfDToBzF2hzTPrZPhV4Q1rCoJMEBnSpuiCBddGJ6M9QmCSftSmwhzjMZhLqLnXYrKsY2FLea5",
  "key35": "3m7UUWCgkXNFQfLWH5jS6Euy1dzxkgEZ1KGkc9Ahzy9KpPtWvUsTPyktrZ9RQLQ4Wjn9YTn3JwWG7bxrjvprc9hg",
  "key36": "4e8LiU6hm957SNS1QSBQVzC6j5Y5ScESfYhErF8ETM3dtXVW8HzYrKKHKGzAd3RZ9aPZXaaVbApuU6cHXo1BPudG",
  "key37": "4tydptDy3r9fSQkou8uuYgxzSWVu6TL8pRH1kcjPr1Gw8DnAa1ejKnB7C4n7StXm3o7VbeAteckUmXbVFtdMKZna",
  "key38": "snQ13UmKgF3chwRvKToVTzAEAvZd8AbsZSWLzNEDsM3yHwmsodVZgzdW3qTdynfc8BMpwfrxw4z5xvm559TC8cj"
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
