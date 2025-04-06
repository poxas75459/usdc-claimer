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
    "4z8DcPNFkFXtEZTez6sUAwD8vJ11Es6FgsufmBgTW5xcZHasYsbDUYtisSDw69tS91taPcBk8VMkKxF9ZHTwN75a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fyfA7HYybBfP7LiMrYV4CfWbMpkJdnKASAayt8KUPXugLr2b4bUvLAQVnA1Eym7yKA7jQZu3ApdFoeCYgkQLEj",
  "key1": "4NSmV1sSeqAYTH3apRrdY3iCwTtgf47Au51VcnjWXEbjhDw9jb2m9tvqSjWDiHFyb2kaHWFD6HTA6HWqC4giHJTB",
  "key2": "3hF7BRoX96jt2D9XrkRtJHuc7X7KGKjMcaA9p1BrchGJ3Qeahy1dNn8e9zbPwhYT8hfZvwnYEcFzZADYNRkthCEj",
  "key3": "3sLnGVuLbNYr23pmxiyc7phAQPq8mWybaSHuqmRCq3YKLKnYSognM1k76vTRXXvwyx4bQ8hHNGinSPuVr52r23Cw",
  "key4": "2FUvR2rAHho95ZFmVQSMNibYV6YTEP4fHDn7yuy6uffRmL3Jc6EBha2oYMWVV4BS51VjUv57hW3EG6ExP87fiMBe",
  "key5": "itEUsovsZR8wLjmS8JEUUnUqQntAxCwnG2VdpSkzfbGz88StvtQnXdR7iLsnMZgVLiK76NSi7ke3mLTjp5s18Fb",
  "key6": "3uwuj7Lb7FaZdVvYGjhkEqQyS7Hvyf4cp7MgcpZsu7emTLRex67mght9UKerqWdLVu823cEXg3CHhBcNJx6RJWrZ",
  "key7": "F1cPPwAanYALmABoT32UCahnhSJaJCLbTMhC8Kce6q6bb1MQzHkqxqT9jfTbHE4tj2DM7jWkF6eAsXB7mhbBSvv",
  "key8": "3Mgbp1VS4zx3F2a8vWncAG4gdqiWvdZRi6iEdGow1tnK4yK1qYee2cczvtkeJ2fKBrhTRyU93LNAVXGrzrbuF6zC",
  "key9": "4Wd4QAry79S6uTTzEiaUAAzGSz8gkkB3AQPb6DkpKfLF7hErrXpEwMndRUtw8yuDSzLHSmDv4rZC1rgfVfYpQf5G",
  "key10": "3hqbmYTtqtF376phmBWa2tMutMxhfYiNPcbtBaWsu9G4Z7kPG17apxH3CVW37WGwq4abjMcWsehBu3v4kJumMjBW",
  "key11": "21ZBEhdYXtMk6aHfHpaArvPQ6a4TfbEHxRfo7ndxq3mJvX9b23UCBDsqdopeE9apNWYhjsAHewt1LshmKBGEnKPT",
  "key12": "4VCM88T5gDgHi6KkBhK8TmQaYZcMr5Nej7keM4ob1rpvC2d4jhZWbys72Yav29HYyNvaHvAWKvtkxChbqAEipFUU",
  "key13": "LHBdhX4SBELD8bYH6x3YXcaFHeA3Tbp449fzMQWCXhn38LdyZ3DhNaf4M2313WFPg3xukjbzTvPBVFC9v5DWERu",
  "key14": "4m79imK4kKauu5NhJwb7xq3nu79m3JLohwf767n3qDCqPD4ffXiGbXHLh1SJtNmwHFHsBk69hF3aAbtiwqiENujj",
  "key15": "39DnZsW8zok5W9cyZHJK911vYXMHNJf6WN7GC4VVxQnQnPF7r5m4xinLKBmT2YND4VucPjivVonzB9UBsECmmUYo",
  "key16": "4JYnH9hsUHbP4THZQ5rGsPYZgZNezAeBWaeH6pqEw7EQRvAtScE2NgBFc2UJ2dFeUkhCW6N37jw4De4fhrdzqqwa",
  "key17": "5wHNkNNLti34wweUThuj9g5iyzX2JZbM7ocPdo1ZKLTXdCziazgmSuSKHWgawcHwxAeqZwYnjj53SV21uXRYrqAR",
  "key18": "3s6vvdcLUGm9EAzSmav86SRQ8F84VD6CwweyDz3iCTzHvR5tS94gjUozmH5jwB1EaJSNLhRHxPy2XwHHiK7r3v5C",
  "key19": "6cydhVHLfP5Q129yaSVXPZVkXBnH3WZA8aPUBizwSk9TzjSTYHMcwaU3qQSd4xXEG7HRKs12FjRKV5Bg7uujTi9",
  "key20": "4qpems3wu7h9sRtjx7rfDj16S5QismbbdHKo2QQrofkyNa7537GQZFymVQGw7Mm4yPV26RBKn3NZxNCrux2nm6AY",
  "key21": "3JqaARRj7BVMyEsESyTurwjoYQzQABVrKgUULVBHTSEqN6hKZsjnZMVsKsednutsCCmCRU7x2Uf75Qnikz3sWHvx",
  "key22": "3itBFouZVsQLN3By8kHj7Ck6H9a8zc4QCg5wBQFkNpynBCrfeMoFEgmigMRrovQJHW7VG5Ssx4M4jRruWh7MBPCg",
  "key23": "5346NWi6o57ZuS6PH6FByJfft2aKNwQUjSipHriFfEtLR167L5btiNn9dxEf5x8yFjwAJsALU7KQTxTE9tqsAnF1",
  "key24": "4viAvyxLMhUL4gKaXpQyvbfmYxZ2wB2QsqRPuABcnFecBbr2BbZvcgNixKKjLE2rnNX6WmpNuWHUK2pHWkYkbdX6",
  "key25": "ZCHc1WxkyskuxoSXcZ9uj6KWaBb4RhMgJqJTp9dFACfteBM4fTSag74UL83574CEpZ5H3YWGcGtCkx5ZhTc4qfr",
  "key26": "wF5T1hUgEKTgQGG8mZScifNP7Z2ZHCBQ8CNaLpTn5UY4g4XNei8y9HBss91XPqvLeFzDjNV2ugXqYm3wKTLUGiz",
  "key27": "2XTdUYVbF991G3xYo7Gk6peJVPfMUomusWAuggUHqvByABaZYrosaQRx79rJLxEYLmuhJQm7oGhfAhPd5FBPU2Df",
  "key28": "6qE23hRKSbYU4Hsi6RCXwekkG6tZQuwUmoiXsNfNMyxeuLGP5vmr9vQwbEf81EgoyLGi5BmAsu2mFPmYaGwaLki",
  "key29": "2P2CSjfV6kWv3RP8ZJPKMcosWxUA5oMfSMC3HTiYEMbyenCFZZRXh3KKBmL5se9zq9ErRTry9T7M6nG7UeJpLtEj",
  "key30": "5Gv9VbKC6o3U27H8pdwSV45pJjXT66tbrJfapn15hMSTU5TTxqdwueHsBffhoCYUZcMWEh8MrXTq52pH338ddqdu",
  "key31": "4jhoakNRNvvQk33AFaMpHEKsKHrRXvrv2DiHEt65iq6KAJ62irtUhH4KDakjXc9pE38ncJ7arKjxpdugGJKMQBzN",
  "key32": "yjjYvCTXUbyi1zt4qP8Mhc6wvQf8xPm9RBm1u4sQRGVqRyYWnnrtPB7pZobBgZFbeiEJg1cE9hbaRXyUztmEZH8",
  "key33": "BSNnnRD7CzY9ya4GF2pL2JqLUjTZdojAzeEyM88gvzUqVGhdYsbycaGWCBtddQT9nq1LvzcK1XaNcySXMcAYoza",
  "key34": "4LBh1cCvWpdy3T2eygkiSHiM4iNDscdenFtjS7XKMnX5Jexn1sQ1sswxF4BB18w8usgdu9xPD9jpj2iJiYVv9Yx5",
  "key35": "34ZtM5yN8t6kmrwebSSrabr17a81ZU7vAKXBfWELJVzzFBoqmhNTwc35PtLf2FyYDbDsigKXhyrzLyEPCEPdm6Ty",
  "key36": "2FscKo1KoJgpaHH4Tvqp9qJ85hAS4usNMZrsW1cQDkijVFT72NEdXiuFsKqPi2QTZpoGePiMBC3BLnXM6TsZhWgf",
  "key37": "4tfNtKPLjb4HrPQHxA46txDReBFnRpzjECmC3NHaVjL33PYUj2sgWLwy9KQANCPdgHNrCoREy9EzmYofVHo8np1y",
  "key38": "4gVvejwukbvcRJqBYkBGLwsjiSXKXG8h8NPKchnzZD1dYGZKpN7vTNeU8bKYY2XRWkYGueFuvGPcJQrwRCZSrgam",
  "key39": "2MiykX6xgAvcrgRYYY9ZgSYYKrzDtgzqdwanNDhKNHvKKhgjHWxCnBmztoy7EswHpgshaRAyU6HsqtofNbehgUBK",
  "key40": "2HJ6F4NPEVSdAYxLhSPfkmF87hdsgnPgU19P3VoVwpvWKGjJbVTdJ2DkCjkg8jjLH2fZhUrnFQtN7FqjGwsvzkPk",
  "key41": "2aDWfLTCHmigfYhfX1t9soc7QrnpYETAikDZ13ZrvKni2qLGyFw1fjAFLorUoTQTWQsfJpuhsRAAjtKAtJmVAoc6",
  "key42": "2avXDEwPrYekieWYZv1e9oTMAUYpSDbhYLLhQpK8FEvpSUo2NLnrHRhBRb9MZaCqwpkgkme2CF6oknTrkMVSAmsJ",
  "key43": "2evwEYrnXsLGwbXVFbNAFHRrcNMkNoJZd6cFt6Xrhz4AK5LUuaKhAJnP1tKdkY6Z1zMMkSyktuiprEoK15dTckyA",
  "key44": "yV2MywhPw6LiqATAZVZkCJMbu91ykaTEwbRMGt59DSK7uUu4qbKHpb57kHctQpMhPdYWSRB1q8DtiZQUHw9f3w7"
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
