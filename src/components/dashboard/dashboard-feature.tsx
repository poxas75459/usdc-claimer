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
    "4MLugiPTFNX6G91CDXhcc7M5j7QiaXJccDbFpxUdJer8TXu52vYMxh7bBVmfSZq7SexJuCyGsYjCcrLjzkFDs4xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6LYdbLwWsWtmRiwv5Lx4QnRzLjwTAcZ2AmzGzeiMEvtm15yR62YofHc61ooFJcDfUxmNiAPZ4FqtBEGJiwy3fa",
  "key1": "2sAkCofDa8zaxSshaq5jXAUys39GTfEr1rNXWcMB6RVXgCmoLyczjpeQPWxAdUYNmaac5zoFmgCpXESF3jNUURtA",
  "key2": "3DxPxwr7MJPy79dm11taRppxQJ2KtfMZ8SRkupzUFRz6bvpXzRT97eMDkbByuJK7w1KSgxUH1CoWJJNBue7RLjWx",
  "key3": "5jn2Lrxegukyy3uaagnP1Wq32R6rQ429P6H1ENy17obiBTVxQ6tuEh9785nEtVAuAa29trtXJw2knFNV8ikYg8UJ",
  "key4": "4pZAa58ZhenB8gFZydcddEBbyrLMyEvfBNH1bvzqL9dwUFtJ9edepAYkogtN6qLezruwH9wbFZBFkPxHsxLPywdB",
  "key5": "3kpZZXzPqq4owuAvc2ivx3aRa8Ah5f4HZZrKfLdm1VznxUaHB1zKQcMuoYZkQZdiDerJjoeNkYfRnHn4JRSYueKf",
  "key6": "2G42ShHnvSY5o4tvtXfV92RnjnsnkLJH1VeKS1j7JkAzHoyU2GNWgEjy6DtRZf2h3zVu1s4PUDzaiCtcpUEouPwD",
  "key7": "65667W7pT1dZNJn6xxFFSaXgy6WuZJdC8CDAbfULAaAYkUYhcKzmNkJzPJTX2PcfUjqP5VSdrrhXav9Hvyh7KWAC",
  "key8": "X6PqTfMxKwhjGgBEDoNR12YVMxQrtPwgWN82knbZ5Ybo52X8FUeoMfu7m5ybBfvaREYKiHkfnxNmV9vfMfU1XWs",
  "key9": "63eKq1shsS1hQ87LTNpHGcxavWDZHjTfYPFME7ooJtoPaVHtNi54i7QrfRc6ZyX16wmjsownUvM28ouAd5x3Jt1p",
  "key10": "5T1BF59YC9dxKZMM4a66Vp9UEjxHyc8i9PPAv8afz8SE1SuJceWKCervG5ZfgHATiTBJFcTrQEYuRF4TeVsC9AWa",
  "key11": "4N1zAMAHSDdkaCLeZw8MXJ3MFRNsqSsknTyZLq4GtHSejTeAuEG4Dwsbk4oQVYuCLoqfF1U4xKxeJfEhYKjDXQjL",
  "key12": "5kddDzsPxmD79PzQPw7ERUbZ3U6h3AMpEHtzQiMniQ1g4QVWCRzJUjZSJEyvcFACYBxTG2jvZWG7VG2hgqgTrgSD",
  "key13": "4SxdcpxuVYaKWMABTGsRnmAHPtVZoH9emWtTpnKWFjhcKYhrTVbQZ8VyWt2kTVSKdu4kiU7nznU6wPtsy8LH1Qbw",
  "key14": "k1LESWK1ZFAJLQgyEnKLJ1RFSEWw9EuHygiPnk2hnPNx3eepfGQKqEaah5q8BVn6TCqNjnZUnyEPg9rxwb1Z9pz",
  "key15": "3AbTeRZnAQEVuFTvdi3dkSFLyRnFZUTjKpHbV1zTMWRvvzW3bZDRs1ejVy6N8vVeSRbgqPUKrsdzoaTUXpYds5nN",
  "key16": "5Dr3WvQ33wde4CNfU6BqJRLRpKVfLfrEsCX5YqVZrmRkDEnmNLXyeq6Wz7yVHRD6P2iUz74j9TYuehev8q8yJXQ8",
  "key17": "bMZPYMQhLwZLAhFbpcL5msHbhuGpuNs8WFtR4haxkTTbEFUYQfrJV6MMX57V3bkPwgRe7shu89veKSH776w6Dsp",
  "key18": "6MtVDnFvg35t4UtMmMcYVgkYE6183HkiTghFLjj2bwYjCvqJwwMkWiVb3G46Exfz5VwgCVsnAUyEYAehZ6omGY3",
  "key19": "fh5TwLfYCkB1vPZVav8rL4WVCB6xkokkBk5FWuQfYKMKnDv3LgiqV4oVcvyLiwF9W3UK6moQ9tSBCZfqJXHD6ww",
  "key20": "47bozi9VAbaYWkbvejmNiASRMHqX9Abw4wpnar1qPKi8E9diUTyweJMPKFt1M5kBAYZZi1tsbMg44FUp5Wpz6awC",
  "key21": "UrPgZaPUNhxqu9XZCYPCMW1xF7FUG4MwDqjHZSdtPuLYFntVb6MCQBnGpnspVArMZXiuv21zVPxeXggNsa5mvf6",
  "key22": "4y3KoEPrt6typtWtKvHcYQAPKnac7fJvTBJM2gXqpxreMeu8S2kSSb6ZhAkFqAaMmWZb3mAurNDmGD6ohdE73axa",
  "key23": "3RZXwErvzyxowY8Gj5o8NKZFauxrm4o3ugxsinMnJPgvokbNh7bLsGrVkXm84cZyYLdatiSBCPKAG6aToJZ1pn5A",
  "key24": "4zNpKYzD5ewkdeBdnUZyZAEc4xJrqew7hVRey2RGow7zVR5vX3U1kQ5HxeptJ2G9Qm7nHYyiRLQZxLwpMpKLjJEQ",
  "key25": "LcGSGLYWfCoUJyafBjsGDhbDsoWm5YsVW6ztb17zbE9Z8rtJxbUg83jx5MkSdk4oN8q5Z2gR1fqA569hm81N5TD",
  "key26": "3MaHGhzeu2Cc4YoUmomTDnisRTqMnLv6qWjQTHxNtPMuP3ev6kKHNvvf37XeU1oB76fCXqKrwJc4JZjfbrSeGeHA",
  "key27": "3eActFvvPzzq41Z8dr6EPZRwG6XM4VnSYbc59JXS6kJEy35q7YsuvL2nTcSsjpYnhKLvxyt4sc43jhByZxVwCTP2",
  "key28": "4cfnuymZKcvykFVCw87m5RaRSDNwPrAd3X1iQS6GaWjxX1mHSZs2DJLduUr9X86kiUVybrHiRRV95mqnM21VbyqN",
  "key29": "2CnDWPNnoPBYGCToLmtycnJawynSGmpLftfDDUZmcHrcT4Ld6aimfSuuWvh4KGihpWFF9AitNbXGqnhNP7SUKDBs",
  "key30": "3FvUBn4rcVayzRquWwmYhhbpyVpXc8v48hx7yB2girFPVNYHVVbCByynv2YwGCXPmLoKa9jskVggs5hXHpWSspyb",
  "key31": "3NnyLqyPjagfikWgZASsqQ2YSmfkpVpL61m8THFmvaK2U6Yki9N8dTSwZCWNHLdqPMc8C34DrvwHnNUyy6Hqprfd",
  "key32": "2CwFEgg7RsRZWWCPst7YuLbkmCpRuZmzfL5EMW4ynwds1zgLEGYbQo5ggxScSMNGzPWXqekPTkj6nZNPwyU4NwUc",
  "key33": "2W4HzyvccPt6KTNpRuYnjDjReXGXN3xPh3dAwSnhA3ixCXGwQpCAa8RjdsLe4YoHqzwT9CJyH2tTaHesfHiJbYhY",
  "key34": "3S1hNMBPqcX3LprQ2k8vfMBKtyyETu8ozeS9CZb8EcGknVQgAXavjAs2sBmK2RAsdqfnsTizyEGNZpvoPCZxsMX6",
  "key35": "5tkURWcLPesBkdNaniTxt4irDg5oCKjt8jobgi7KrDmpH3Mez5Fyrpf9m8qsHZ4tNcJaLYLrKHZ48Vv4HNThUsnT",
  "key36": "3YFNDEeNt7YAUcygM4wnU6HoGt2UGYKTA4RYBdkG6wREpv4QCcj2t8cxLmenpUzS5TBx5iJyspEjdy3k4vrNynbu",
  "key37": "4eQLHDWUkjPgLqqYgMUGpNwNmWBzpFxJwfo3LHjve7cnGiGsCxtLwggawqe3mqwKVJXdd4uTE7NMnLNsVqpfGLBy",
  "key38": "4zJTwv5iFM8uzdFFL4hzGjteiuw2TzatvecMYRkt7g63nFXq5uEEZYmZ4RQkJZT1bf2wgzKQYe4XNh12Cc5jjNKp",
  "key39": "2vSZqFFqbRqb1Re47kxXy9ZDVARNpV7uTm7uoaQAtgg5xMfqFGyhLMQYyHZQjExRRNzh8XMwYEzKd9EVVzFcjVit",
  "key40": "2QPR6RQ9MVt1gxgBB7BUN4dZex7SQsnMaZFiwGnPCjzJv58zaGvirDnmEr3fomqhgaC1voRG2jYpp19FpRJekfdJ",
  "key41": "5X19JAeXH9x2Nb3eYsqG6HufWh5nAUVhfbTn27jsTTdd1DDiQyC7NinLs1qw62BgmewnWiw2xxJiGpfhaEs7LoXL",
  "key42": "35sXj4NT5k32ERgVDR3A8MNsQuCoqShFdcmJtyX7zyDmbXVuZFxQjCaD9kiDhRCZrBqCq6RVoDAsrgi8QJWck6p7",
  "key43": "aKosYHzco4P1fZ5ovnTq9yrJ43G8yRjjeyStPFdcLYDzwKThnPXq5nvESUyhtwRxsrMQkEibJ4FNX72vxAYKQS5",
  "key44": "4vowfukXVCjbhUYgTqbWc167ApEFuL8p98hrbCcUwM5ZorKsBJUwNtKGhFju3JPCD9F25pBz5vWYha81tkVfCoBi",
  "key45": "5wtTDYb5WNM1BoM41hBpPqEEJyr9ca1DmRL5YWzXCrbcKuQB4FWJeGHNjC7SnB3Eqz6GWxmXQAzWxsRsYh9tGHHG",
  "key46": "3NfohEiqEJBEQNfqysb7L6uyfBneFQWFJ5bRXdXdKztZNmiRx4eAUdEk8CDmWrSd3cmkd1BnJugfroJnCZCcz1pC",
  "key47": "5jTzK6mG1CHBzoFRnQiqHZg2ZMwjBetpg1oeU9rV6xVYDWgoLTxUuNXzBiyRZrJmLDkSmgF7ZAKJSioxNNugM4fh"
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
