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
    "BoTPKABVRq2WRJxgGCxgniCEbDsaPwKub29UFTf8a3JUGkdT6sa2axBPb5CVVoymmaH5gNuRR1P6c7w1tnvYmnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4VYCzoKmhZ4NqUTjo34ARH77AwE1z9JE7K7FR1jX9TJeXAwyAZd5Fogq6Ef1oUEP1nVp1wBuTkpEzhWW3PawPh",
  "key1": "4nnDt8dvY3QqKSHed8ABNtn31jdmS4p3MqqpJMX93ug7AzJZyr1rGCyqJvryQxcu4nYrEDCgfQhAybBDr8zwR4C5",
  "key2": "5vmzUCpEeHTHkRYDwifXAruhg5ycJemrGhDrw5qqfKAx1gXhwmooUeFRwWj7LK7aACBSYsmJNz9Lq6fK67ATYu9m",
  "key3": "3W8598YrtDnzMQVn1Ccpj2tBRauSUBgqv22mRSfe61FuNJysPDdKsMDE1FARpDbMRyZ1wTwvHMbW35Ne4VFHo1W2",
  "key4": "4pdMkS7ARTcFan6SSfXdiHz5k31nF3FYGGcuQC4QDVrSWGVwVDYYcgFjjB9utDoA2hX2JAzR6K9228Ysjih2NCD8",
  "key5": "2NAknvLnvP4VCp79BvUy9DpLj1z2N9FxeossdEaQsjMqXqzRkHnw94qz65UaoiQ3vzEfKGYu6VS8yZ4BPm4JS4Zg",
  "key6": "3pXv6So6KCmhpgwsmtJPMKSoP7jRzScbj1i15JZnBqQjvZsiCG8B2tqjQ2ia5uzHdaNDrVKHuV3sxGRfC5jpfEKE",
  "key7": "DvpuEKRkUdAeqdxo6X4AHi6SeXDNvCwX5xV8SytrJhAj34FzWPU1aue5m21NWbw2kPnvNHkxGfLHhj8YHixTAED",
  "key8": "31gmv3RdWVUVVkEL6uNvq86aeKCUQTGt5XhyhAPgEumLhQbBBSa7Hjrs8FCBm9oaFUce4XiRueboGx6qFfwccyPh",
  "key9": "2hewsUQTWxec15d56pdpHNcUn72jJbADQKL48iHCSujwtS6Vu4qBDD3ynD7UKXj5MZKKPuMcw3XGiDnthRb93eZd",
  "key10": "2m8tMPdNTyfFNWUyNR6Jd4AzUd9T93wQLcKJzn8PiJoJXXaBZMeTiW1fHD1LdtHRTPms88aGiTEPuJKz3gF9nD3N",
  "key11": "3DXULwt3aL695WUn5q8qdvgYr54dDmitFSjZXUJBnNBpQTsZoEGAfLNXtcNrTe1vRpCvZHziHiHWhpqFmZvyyW6B",
  "key12": "2vJDMXCkHpi6hEsuvF51TbnRXxsiobKgBQ8AcCF3h7aggbFkg1n5q5XcNjLRc4ZiukNfRTTkcZmnjNfWDvdy7n4o",
  "key13": "4Ktq79kXXLidkux33FpqTgad3xXXyXfo1D7fnaJX9gZ2ZNYPKyXhX1tmFLKxDayftGY3iyFSB9bM68BpMA8Vwfjz",
  "key14": "39b8JTbWKT2Le4qQLWo3T3iNjisBdEe6RJpAgAa97SchXWf93W8kdrxmCvmaqjwQDh1Nmx3uwuRzY9wRSYvkZbUC",
  "key15": "4PCyVcu7hcXJvgz2t7H9jKzdA8xvLNRHWtD6HNaJ97qXAnBQxwLi81nNWpauS33YSxc6DssQUmztujqW8vZJhi8j",
  "key16": "6vuTT7vCRSSCfRRryCpfkTF7aX6SEW7YG8BMzgRwDdCtxgLBL14kTXkZG8G4xtKi5pvbqocCUha38xXfvQaZnhQ",
  "key17": "4gTuDRaZ1XiuXiWmE3VFwFgQfAVenJoW1AwrC431SbqgUhM5KU73FPPYXMHnoPfbeiRbiVYN4mqZq2bBXfFGrecu",
  "key18": "hZqJtokQUPU3cg2bjnmo2DQASJxv2VfFzt1wWTx3axLmPBUXbnfvziCxBaQG4QjCbufnFTo6R3m5gpB6qhEkNut",
  "key19": "4KbDExDGRfaYv6RqwACM6cSpaKi98SHozdHzND7xx7YEs7LaNyRvto9SBJ5zY3fSyZzmwrKfTNodGp5UNbBQj2kU",
  "key20": "4dChUw3H7NWHvj72rZibnN1Pr3ikHo2gXJx1bKGUq3QVdxBYAv4b6YgpxjLG76wv1Kqd2tzXyrSQks2JePZvuaKg",
  "key21": "48zB2KYpQWpaN83FvzAkL3nWv1tq3ww7r5BPvW7y31tatw75tqQQqqjLvKmGja4UDUN25RZ9Y8yyA92wMkGy2dy8",
  "key22": "cm8q3apm4aYeTyDPtG2PaNM7Q6ueDB74Rorc1cRob2eM23kMVA4sojTLwuqgp8R1XVu76vjXFvAzhmNx8ydqJ1U",
  "key23": "5P991ekoc2RonUNa7xhipE92h6rcNqTFEBejAXcRf5LwVZcAJZ4TPnkA43zdVMeFMM1EusdEpTWN5GKPwbF5ZLDV",
  "key24": "5WJj8anvggRev7gDgXPGcMEd5UoAmC89F32pE11MYoiRVQYd7GPrwop7cC4o7urbQ89tXpym66guqFQXzo25y8AJ",
  "key25": "4RefrpS5wgi4gz4jYr5oaKFcMRPtjFRaf2KiSyB4T5QFzWGFgUWzXoVYVhCoV82NqGnHZgJrahgBtkxvUyTuVPXP",
  "key26": "2jX5Yi62NDrkCYMWbx3v2GnrSCNgXzpfkr4MecMz8FKXzmuJ5KA11Te5dUfogKoJYBPHhiHaLcGcZTUhzHvnHHVA",
  "key27": "43Y3dMzDZhoVUrdTiY1XogQByVayUjiH2ktZbNmxbps84oPgBpqsxSzyUiRsjNQMomoRxt5LJmNVBfVwnDL6RA9F",
  "key28": "YCpP3sfm5nBFYE8A3zTLwKFPw6p5ZmyPs2uuiA5Q8FU2GbBQTAKSRJDp9k79C3Uua1Z1Ai5NvZmWXDsXGQWu8xD",
  "key29": "45WtgRCRUPkvTHMQ7cfnTGvnk2P5ApFdUwq6fTLB8W4RKNzKQE2fhdehdXgqWcsd4JKAEydkpqzjU1rAjM1qwfEw",
  "key30": "4AeBeXSqLBZ65T7CXz4bU9WQybyV72SjcyjMpifiMrWnskc4WxXtN7fQ8KiKDq5WNxpJ1fFNvn4UEzWxNTxJzFGX",
  "key31": "5Mn63R7Y3M5iSVj8bwHWfqvHnBaJKGxDy8YPT64MVv52wcPDaV1b3MQAJ88kvXjSMghuW2ZpvLkmgSzkS3w3T7wz",
  "key32": "55SvsMJC8kuAcNnYuRPPon24mMQQx5u1QJrEwwu21FKAhFm39UZnKGVG62kXhsX5WbQE8EFQsAetg2jCewVDdxZA",
  "key33": "5jWS23b4whXz5S6ijzGE1YnakvrsXhAM7eTsrD6guPmDMteZyruT9o9TUQwdacMGxQStueX9dboSFVsWjRbqUYFZ",
  "key34": "2Qkg7NB3VTMM4k5RqkemdRG89BF2wEnkdS9avxAZuUF7LugBZNDwhD8RPdamEHLZmqxSKq1KCJ48pMPzuYofELT7",
  "key35": "jU5bePYfYptrej7NV9sZKiaWNqHwxeDP7gidQZb3MnjBhPXSaMqWbUSNri53eLkqiuogsAVpbM4CG1GUrfSMi2L",
  "key36": "3FqhdaUr3B6bfXhnm2uK2ut4oXDTnn3vHnY93kLxun5QtrBtxWQjJgKPmdvxg8URLV19LVRBdqW1ggaeUDtCm6w",
  "key37": "5uDPuxuQKMcX1bEWwUX1gKWQaAFbSYoCwdkpBjuviT7m6WctEWqRSPQnZuy1VsgkzEPgvun4eHS6HKaSj25LEfmD",
  "key38": "4gEkizgr6d2vHkDYRZ8Hc6TgAirfrzXsaqmCWMij4etNu2i4SGx9ANMNvRZKNW2DEmXyfmxt4i5Th8xSEqiwbnLo",
  "key39": "5hBTNxZP8hE2xCki3vPKJRte8WVbjzfYckYVEVz8U2BKg6tE3VYQG4Xq9N5gzMuESbqmXv9cnTaRGwjBFBsKB4EG",
  "key40": "hrKVQy4UZSBrPZNQd98FmJ2ohS5MWbHJNFdKptg3ZsRtdkA76baeKUJDbajTQybrzCn7xYe1JtRRQiJfHpZGwJx",
  "key41": "t7F4Z2bSqCFsSVZPKcMuJ1dm4nbuEYJJPe7j2MSkGb2AV3WCq5ncjPyXQ8gmoJpySMDm75L3JJx8QDvXgM8XQfK",
  "key42": "yVhCXj2y12FJEYqJsZrT6eJR2MoZxVLYUV4fhjymee5u3zNBv3mTmcEZ7pFWKLoq8a8Q2jp3eUonFLexyYYNEEC",
  "key43": "xDugaqXuE2hsc2U3bMvmGmcWjY5yC1QFTrmJQJVX7Ps8bmL4QhHj9dqySmF55L6K3jzPwo828fwtvvKH1j1xzSP",
  "key44": "5pGKf2a8FyfR8rqjX8Eh4U2JQMC9K3Fb3dK83RTVqmYcgs7QGM7M6aqvJxYtX6jQsatRvd13RPvEo4jyyg2ck7RE"
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
