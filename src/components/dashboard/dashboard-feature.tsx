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
    "4j6Sc4c2zJStQtejijKAaepLrWmcsawVMo6m4XyuK44LdqzuRMyRmKW5f5Xo2skxx73xB4fE34VX7eziFtU5LD9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6Jo4DyHLg5s2jW6siow1quyar64gUPBAuUDS3puhbYjNvMwtj1ETCoYJJr6Ubqj4JpoAe3KGYLhVd3y138MX2K",
  "key1": "sR8iQLrVGhTgFArrFvfHAeRz15jXGHysrSCqvsKLwPkWevWs4uYzzmDKLG9cbj6vMKeCxUnxhLS3mdiTEpxeC7V",
  "key2": "2Gp9ueX2WLv3V4qYDvTqBcx9fMZNk8JCKMgKbB6havcZ3VftbLPUmkuDVxJbnYZu8MfLUAtY69PjdT3VMMZRAyEC",
  "key3": "2nf1pz9woGPZKRZHx1SYChr1w7FSs1oiYvzVp58dJhyNzxFBtisrWRvLFu6uKY5q6EFHT6h6EZPvaBLZQPhvWwsM",
  "key4": "2Di3vCEJDHyfXu1vMYhbYgX74no55u3nbVkH4kAKh7Qwpubj4nz5aiLFjGcVMEZnadttKZzyLrbTtK9B383AN8Lw",
  "key5": "44UUr8YrPjTg94umDbifES7aKJBa3E988ngWtiL8pp9RGUkczhyVHcycsUdWjhEfzCaDRXefurVjvYrG7ThyTUnX",
  "key6": "4pB2xNQ7UtcnFGNHh35nG2RHTiXUygisg8C21Ms7UkKZwhPKFra93MVVzfYXD4tyLDrowqZwxqrM6Fc7f9ceiGiZ",
  "key7": "2mvV4zqm7e898csUvgCAW6S6h5MjoJeNVQL8gQd2JE71TmpEpDXVAXRoR2HPVQyRKuLHt8EwK6u1RbZsDhhbQQoM",
  "key8": "a61cyH6d9gUrNGa3xG4AhkZQEHzTikZtva4iFi3f6uMQn5h3B6rJeRU1Ega8PGnzZ7mh73SDyYwVXVcqAQjKmDa",
  "key9": "3Thj75nCrQxpU98THY9kgrTi5U8dzAJ3668Pu3AYK1PHpjRVKLvRLyxpzkw9kSRn7VAiWcdFytn3a8VYKuFgNNur",
  "key10": "3y9qk1Kncd88Ubs7xuSSvo6oihU1sMRerGZgzDxeGPzww78QVzwNLZz2WhUPQHW1XbJztMosyErSbM3UwKGLCeZ5",
  "key11": "3rBrFy7ryAYSudyzWFLB3i5pxxC7moNK3T5GmEsD3Wgrhe6YkBXvSVo3jKHcEHSC6ehApsqg9723hRtbGzBqiViY",
  "key12": "4m3xzCarvKdfg2GAyqbrgTtUxaYAb1rs2XCHo4oCKeAG368ZZ6sXcpvY9zfGVnvJmCYoE8ti1i3pDFssWjF4FcsH",
  "key13": "3cpKMm8WdD5gJAFTWpK2wZjNpaNDXnqK1TE1udYbY1bYx2BSkrZepCLHsxXGPp2SW7QyyQ9bD5WmNtH5FW4wcs6B",
  "key14": "EQr5pGkLnR2oMwAzE1rM5676BaPK8baPYedhFYxmeen9GtHNBP1Fxpn9MWyS3bKVDgKri6X6RRUeEN8bf6icKKM",
  "key15": "4ZRpry9UTRQYMFwzLVvcJHdv78h6nUHQWR8Uj4w5gr28RYS437WH8FoDgc4QsnbscFc8AVp3ZhNyyGHhMXzfkB7u",
  "key16": "3dyFteEPNbpezKgDs5oTDqEJtBqMoLWezs9dcAv8v128X5f4GswY8LmDHXQ8FxehddBnUtX9cJSKZCMLknaPoqR6",
  "key17": "3J5fQTzVrdriLU9yiomA4ipuREE8XaoAQqyYuwqojJdCSDahrn3M7tfkBM5RebgpLoMeaMujeV1sMePZoSPCNYU5",
  "key18": "nvvm2K9cDc24Lo547E2HDEjjtxeqKxor8fFnnKCb8ZERmTYGTdK9K5LqVPgfzLVUQ1DY4nYr32cYWcmN2e1iNpJ",
  "key19": "2oEVrcbWMkDhiyc1aqcAdPVATe9gGtnCDhr5qHTfQkQupvX2mUevs7wSPFDMEFUgcNhyjzWoGbc4edHkVUiLuSiK",
  "key20": "3KCFCu1uzRX6S19T5E8nfVT3MYcrViWWazN2erJbWX8enW26YLiJpMXpgx6un47CVH2CGC1fmacG4SAiBZRYjqSa",
  "key21": "67SdBN3x94JTfTyxLoMCboGyN6bqEX1Xv3rfZk5c2Lh9MhktPjhVCatp2z4JFG21YxwNcW9QTor6AwxzHkMxzQFg",
  "key22": "3voeNuKkXKTyxYrTNx2V8kNJSFeq1cSqB4xDQmMoGDjMw9ymtt6K4XRBFGV3yeWhkfwG5RKh8VLNJK7E2iGrhLgr",
  "key23": "2MfMLextVQHjdDHH9gsKjjYZPJf47kMmsciLKeoDadGfuYPUJtJWBe37mZsTVH2ZhQr5JFWWmy1p3oZmhh2PSgMZ",
  "key24": "34B6v7Y3dMfu6r4M1AFKq45Tz37ZzCxfqMr6FrxFmwUu55KhxYoN8Gg2Q5GyFLEo35aahtdJujXxkjTNFTPiaEXj",
  "key25": "4qLsvfnnTQHMWVAdDjMr3wn7KJDBd38heUewDuxxBQPsMb2CMLy1TrXCCyWVoddzYSofckmi2x8J6GawAuYoUt6n",
  "key26": "TaME9r7qJvGukbd4q8LsfFTW27HEjenWSRKXeF8SnE59gAa16zCMdoGSNSTpAQuL3Kh5aGV49FmdHwW9rf5HZM3",
  "key27": "xu7DHrFYnFA3cxwCV377V3MRtNCZrnQBb36sEokhCCDanpxCQ6nihdYqJVFJf8JfMiJekU7by9SBAi2for31jMH",
  "key28": "49bR2RJhRSAWJwpND1xBHLKRroErx2YdUQiz1Ar6iBbVugAs2997nMyZHUiMZkHaM2ViAVmo35cuqDCoFNg7qDmE",
  "key29": "2MJ5PzsitXYivkVHANdihfduYxyU8ugUNv3XjhXLhbmFrPLo6h8uF9ZdZqpoqhaapfnhyrLnM4KycnfTHcxFe5eY",
  "key30": "CkzesYpsawcDgecvzS8pbN6FW7GYDm36uE8X8SV5eeNUGdYqpfihHMVU13mYQhgVU1G6PBXCindzoDjmh7tGaMQ",
  "key31": "2MdC4xjvzA4GxhHrTwJgjL1rsdkLcxnMomYz65RZjiFPDjqUpxyUkD41iy1WvWKXMuH2KveJg3qW5hhLoVZLtBF2",
  "key32": "5Y35tFFtgjDXZbKNQ5vS8r7Qo69MHo7NwotKcy5doBjmMaBqEQX3NBmrZz7Ag5b5a9HcvzxRFEZBaJMiPw8choou",
  "key33": "t69x84tY8Dhb4cKqqayckAwuTKHyTJHBod7UaTHM3U5umQGdQkC3TYk2xYG2ZYPZP6o4vyLiH8MqKQDo47eTREW",
  "key34": "2Qb5nJdinUXT5twwNYUQRoQwoFeaxt93T9bADLwWdFRpoSRFcdjELgciM1QQfKDcRQWjqBKv98JNwZwnQdFoHpxw",
  "key35": "5cxZja7zqEsWCMHBpBqkjB2VVozsJvJTFsqo8y5LZiMFgJwN1oPqnkMdMobR2mgDucWvEGYNhT36kbcm8DcFuG5u",
  "key36": "JWG5TvGJJdUZjLhYpj1MukgZcorgqqk6iWfbpeJ8J9cmsK2SqWmrvf1HNKFfM7c89rJJw3vcXoS26yMMWgnLQyV",
  "key37": "4K3UYkaXfWE2jEygYtQhNsYrG6Bv1FLb27ygL411S42c8wqzoeDHrMxSvY4tbCAZ1Ei8vrUsJetFSXvodHc8xWKv",
  "key38": "48n9wGCoWqLVsC53dy2cPntRQp4j2Q4aLjDvpSMQc2gncUxAwuX77xnZ7qGo83fxm3ATCo6dVVAkZVrryDhdZaGd",
  "key39": "fq6uwqztdGDcVTYzJvtHdu2Nip8nUQzfRVFNtbxB5CXrXQgR6pBV5BT4ANfdoyPzw13PWBRwDVuzXZsQRg8ZcNU",
  "key40": "3objuDnKvc9xQAGuo522SU33GJBkNPN7EycFkL96hka7E1pYKKDnZrGT1G2iSnt6HsAQxZ8HSzmjHtzvRaFeS4hn",
  "key41": "3mHUoR4AHaEeCEQ87TvCZKfwGAHM8H5o49y6cpUo49bjZKpvmBNsFaoztwRNaLnMXGn18Hvp8TwizrFxoLTjP2mt"
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
