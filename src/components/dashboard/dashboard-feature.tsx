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
    "5AeRyiFY77WXRq3y2ejVMVL7xuKjG6vVjLVET4wjH3UsEyDk6Ebd6p6zyc4kLoDkYtNzJrXEpcAetvUHJfyT44ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsfy3j29qbqGkZpFA7bWM8nFkTF1q8ABiS4akLYGDrtYYfjjxabdD3UEaemH5du5qRFymZhQEVGfNZzFCrSfY6M",
  "key1": "4g2gTQzRPWMbCZGxJp3NdvzUgyfwaaPfKAVXEHqUWifQ6M3gm89xWhTjMn8D5SVdETWr3J9t62amQ4QN3XjHcpEb",
  "key2": "5XUwzy7cgoAxgy5zyFRubfULS9PMpidnUVE3jW7nfNzFnoHA9drXNpvRPef2yy3MtGbuybjp8kqCNSvtnx72A1gU",
  "key3": "4WVLbZnmZQsZKym9tLZuSK94V8kA3zoDvBt6LuykYFRTn2UXNow63bcCfP3fjgNiRCNRpjGtsJr2bXkP9bvDRXYr",
  "key4": "Lg3677fS9U32oP5Q4XXgAEmx3Q5cNAyh5oWWiJQfFRx4RG46VXNMsgY9iivqV6umREH5ChZwvRZn8kxvkWAEMYx",
  "key5": "2oLTsFRtCmuHEFoHyvzyzQ5fDpGqxeMnsrbRpiSQsG7KJULg4wmoYkKGHvNJgri34Q1xxHtDwbRAsJRP6AyJP4fC",
  "key6": "2HE1yRCtVKiorftCYEhJfAg9dzmbsS9PrQmu7zh5RmFieGpz5RuxzeHHR3ma9BoAdwnPXPxguWKCd2EUrzhVEAjd",
  "key7": "2TEQWyPkXqBiHdj7Yh6qEaPCPc82XroeRG8LoXQAC4V67G2DA5GDCeFmZ4PrSWRuJ2RUdk3GzHs9CBtTPX7KKkfH",
  "key8": "TXLkXQ1w5EiMsVxoFTRVngAJ6o14xEY9D88hAHc5C1yDzqvLj2JQjKJwAHkwU28nAs2XCQRfCrjutotr8sSbqVJ",
  "key9": "3adHm5NV11xd4mX124thPjVC56ZD2x8HXcvdFKsW12Ky3CDEEbxccqateGokbVxy6CZ8nghuyQJoAahJ3yUtRRTT",
  "key10": "5po9xUsYJq7VM3n17gAQpjJj1MfLV6w3bDiagqQsVebjTkPAfVSQHnXqc7Y4tfLBRTkRMcq6Bx8e4QS98fqXiByM",
  "key11": "iBhQ9whqZCGoByHy3VME58ji5vzku8yQaCKrwkgaXurMfE2BbTc7Aza9gP7y5oAKQNgVbzAHAYwroQgDkNp6B4c",
  "key12": "5iaxjZ32QFRiMXYA7x4vcomGNinnTsaXz3YDGxwiwqQwvvoDtNMoict88bjJVLQbQN3qjE2hv6sWfhXZDbJgKnbC",
  "key13": "3DC4T4egt2d7spistgdc1A3G77TUDyq3UMexWZ9wS2Vq5BZeYhGmd6wuY2s5wpSEddAXVkWk4zwKXbnvmxrH2Zvb",
  "key14": "3xtKuWDByjFAWgzhZHWym82gcLE1To5awidmFASGNcpUwaoDSXLx4twjrsWwgTib4J3KBW4rsJQx6ma1BFgf3ctQ",
  "key15": "2LEs4NhuLXDQ8qAr7HvtL3BADvwpwGoD6G8ppn5a3eYGFzG9ANLzC9R14H7D1jRNmHHBRuUYNBDMeBzvYRmcWcHJ",
  "key16": "37R7FPKqQVymKsDYXNx9u1HmsDFdiP1cjYQSAMBB19wwqHPK96wNAz7dTyskikM5tJpX6MGukVgUQTzNvqA51gtD",
  "key17": "4HKsTgqAffKRgc8G8gTPVcbmVJBotsSfayRKtWRnwsRv5UND3ghFDWV4o22NatfAroBXEifivT1qabwghYH3zyih",
  "key18": "yMXhpskVKpmBuWNm2AGMV3QCicpUgYjdDgBtUWd8Hf1dyb4n4xpo3d6SemmfUUZUyHHUarpNsDstaVjninLiHTF",
  "key19": "4uqTZ48Ja6ARU483UxYDutVZqBQyG6FiJk8xudMjYFeiWFq7KpK2X2i9HJ2bVoXy5Y4PmoX5s7APF1tNAGPKHbUr",
  "key20": "67G6FuiTAu8X2HcFciFiPkhM4jqiqnutzwcBnU9t3p1BMPY3ZZuHBsSsTFtXkCbatnenDJPRyMSepdZUZgcCbXHD",
  "key21": "54g2YDvtsrn88kar3bC1xH2pN4QWCECmHTwVG3WVFQXxwjvCavHrVx3g2X4nvGqX7MWW1ciLzRgT4doCzz85PBT",
  "key22": "3P59oTSaiPSTFGTiUetyP3AAdBZZiuM1pGbVSzySCr5GA8R4BtFUENjGFo5p6jKB4fFnuPQvkHgSzGqrrgKMXjVW",
  "key23": "2NQNiLACw3NnUT7RLVMmfZSvEH1ExDPax6cnJ29eUXReekZBNcj8KCWMTEd8ooBjfdWjvrAgZgNm4oGMbV8eptwB",
  "key24": "Eeu2A8UPUuQwEHm9TKdGNhh2Fo2MY7ff71F5EufvWSRay5TW7AMBKReSGNdJGrUpWJWqqS6mMz9E4pksr9L1Efq",
  "key25": "2HNqZvcFTCAno6tJTENCxFbLiVztCGzmt9Z83VqHRNww712CKneZ5MJHABugEk7NhpW2ix7d8bxNPdYbknfEP2gd",
  "key26": "3cy1ygWxJjjYg9izZ8tXrVSradVVnx8K1YevijnmXSFYT1H7h5eJ9Xyq9tjiaY9ZEPUUJF3DXbQtTpHn7KvaR4iB",
  "key27": "5RatWcsJGQdQZaW1Mzkt88UU79RLiUccP5xfTGqzVvCGyNKbFRYckWv6Quq1rVdFEgkqekauAYmsoh29uS4h27Qe",
  "key28": "5r4ZQcWkhDjdH534hwbKnf1brD9qazmfay5hpJPV8NRrVr473auiL2A2X12WrZGRYC5VNgZLFRFYgeGHqX8M3ha9",
  "key29": "62SRzWfzP6rLxWe9NNvZ9T4BVjUuCXb6s2ompjtgEvFcTQqT9LQrMU59zroXkGenvbveteyxgUXRrQBNv7fSicst",
  "key30": "43rkQDTgZa6QkTkaRwccsaDbYFojDwvjTmt7WvpCKP3jz6bi3Vs6398gLBMr3jSu9KjcrqWBke8NZTB1FvuSzzjG",
  "key31": "3efG63tW6GygLzniTpRm1CwkPJDWRPczns1JKEnc6CsjsXuV9C8T65fwgVKuhFE3pnkRWV9d2MoqSLNQ5aQZJMij",
  "key32": "4XNJomghGXVbYoumDA8CNSj3QsxrJGwgqmZSpW4nFA8ooX6cJbWvr5ZVuNdkVgAPeeV3Qzb8XEtAaCgRnkgDrFWC",
  "key33": "3iEatxDRP9rHnckCWtEpNgfx46NUMt8FCyvkaDnPu1AsBgjqTksizdffXGyW516GwMgc6MzPLWqnhaLwhHa5XnRy",
  "key34": "5jut5aifTs3Pq7pfWRkTB8bSFKhKcYXqtSTXvzYg12X5mkhNUbF6LXCWEbwHW7G2kGuP4sXFPBEftoQmwkTQmZHY",
  "key35": "3WWd7cEV9GfuoBjT26rXidBqnfh7cMQ6qxxwemgj8pnxbV9RcGi961yUsM8nLtAcBr9QY3gQG3yk8yrmTWNqUbA7",
  "key36": "31Np2coMz9eTHnecju2LoSep193x2bB5RxKnJBKJfS6uucry9h8MKb5QnRmhuK8PYZNAfF22N1jfmKRF6n65vWzR",
  "key37": "3yYFxLnqVNNZ84vDmXjeB4F1QhPChWUu4uosgj8Nf6j2LdnDQdprnNKdA2q1ECKt3u8qsuwTinpQCNnxysQ6pcPY",
  "key38": "2aTGBwBLnCo5TtQCsHZKig7o9upbgb51wMAkD1B8imvPWGeHpQ89hs9MkwC3AA1rTi4NaEHcn4qJ9DEtLAPu1Jsd",
  "key39": "5SpaLuuRFUNiNUJJ2GnqNaw8EPkagjfGP87SE45NbUrFtQMZWnN2iYGta4yTHepTSBdE7Vnfr1WF419cHA2Mb4J5",
  "key40": "2E11qxnaL7Fdu1a5ePrD7NG3JQRQa3a1SVUiFJSw3gTqtBGfJjUyTZEs8q1vD3DE7NXpfbB72W3Dj1rwSQQoxBRY"
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
