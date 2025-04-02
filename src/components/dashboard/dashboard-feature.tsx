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
    "2dYqdDdxPvCU6FS2qw6CUuYjy9ozrGiRQXX2miVtVf7jgZFYxEwLSSSNHYwNCMJdmgqBu79SDXrkEkH37vde2s3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZ7zWrMAAU8Ck5WqgZw2iRezJBJQN8odAqDWyJmYFzZiv9rJLqz54V8aNvdPZTVh5ewzSMWmswcMaH4feeiZo4v",
  "key1": "3b2xfo9UAaNtDDyzrobHCauaP35vNqXW26BA6qa6spqYe6fYqMycjAVWQyCj47juQpCJWzWGuSA2K7yJiNB85sRJ",
  "key2": "5pjJM3MZKHdwjSRdyDWisWGQM8x9DSpGetbEnJYgKwsmBBM9dudix5v4ehvSUsrizh1PV21fV2uTzZV77a3SNebj",
  "key3": "JE4WCEnDDzVwZSsb3Cu5v7Prss4qKK5PQmzsQjuc3suQiLPFE3tzwnvc3heoLPJUhHyRSFsrALns7FH22xxqnfy",
  "key4": "2eLMkTFttGGZF74GDhte4QREddjkSaBVEWqN3whgZ16vvV1DxSLuv7Lpy6h8As8GdqujExxcT5pMEQx9BsVjiPAq",
  "key5": "2eeVbu3geae6GmPb5BmGBmgWRh1b59QHBMP6wnp7X2VzsXXbRhMdQ9cYP1RPHyido36YMTSEvqXzTwuSJYMHJT3U",
  "key6": "D6za8tXE8HLQi6YDsYLBATaEd5KBmT8e4poJfFwCWy7mAWn9jFwyhbmvZ4CWQ2baw4ZiVNW1hdfKxnJmJ9oKJWZ",
  "key7": "4LJQMr11gXnispXvFAQS5FtSqAZNHEiK9amVr3UUdrKDvLrcPwFCJExfkw3iHfaMCBzmw4V2Gmw44Nzmjin8jsKE",
  "key8": "5FU7h56kymd9WUAVw4zGvvBes3SLERP63YbNuNYSHHE3KL3QoNvKdsY9AKAF63FQKSv3yzRDLFbUaRLwTNoPgHAv",
  "key9": "128Y6KFbekMmQovjmcbUShwZ2FrMMfpc3sZPmJMJEomx6gYuqKKmYkd8TRL2brE85LiwoSM8pSATD8ipDpxHC2c3",
  "key10": "3q2N1GH2YuJgfe7ontmMtGzdxUqtMeZ21FXxq3Km6a2tPyaydNv3oHrW6uA77p429cqjCAserZjB7CaUPqFE8soc",
  "key11": "3RhvKhkR3eD3yN5rNUC5BV29ypmPfKeoK52e5KoiuGqCCiChxCePmY62h4zxDExK9cMKDu5fZGwsJVhMWgeSqSa4",
  "key12": "5QTp9wRuez1FyT877g2JySLJsFa29wcwNTRNeR1pncJo8t6X5BHsPBReHkKakVXgJVffXYG85vDv7wqxfty8nWpJ",
  "key13": "4ZYFEiHkoM2CWwbfup5vGxwcewFHG715c3pXQJqMDkAof6dtpg1AH6fwDH8nzGWW7kgKLsHtW7CXC8ZSX4V3LEXz",
  "key14": "31EWjLBfLuoSzxZvewPPiCkwJnxa4mLM9H8suUSDr3NGbB2YPwCwuuSfn4jhrrRUKKJjFX86ZdB2wP1edkQXA3Xy",
  "key15": "5vXR38Qf779Eu2FhPY9RvHmkX9RcSjANXGP6povzQJ4zHdnZsoWiEey66RKtk5DK2Z24gwmWMWrAfvFavpYbRv9n",
  "key16": "4hSdSFvW7bxpvZvgFzMXYEv9v9MGtUcwC36DAHyd1pwJL5e6PenEybBGACAH9LiScKyxXVika8wbsqjvq5uXag8S",
  "key17": "4hC1QYPWpAToYzQkkjVJeCo3u91HoWu4HJcsUr9ecWutTdkULMsYzozHA8zEbMDhHanbUNuthY3BSK48npoyhAB5",
  "key18": "5X3auv1xrKYZgVJMb8a6jb9SZWDBwuypcNnYoLScserxeNgChqLVLAj1DzPG78potK59Pfgbaqiz4zBhQwhR7fhj",
  "key19": "4ogkRnGKWt9tBYGJ5AikQ7G51GPQ8bK7uRSQxCtaeP1C1wgv2u4RZf2qFNxuFJ2s4RUpnz667K8C2gbw9zc3bEQr",
  "key20": "MGatYL7FiPJhz18Lvfe1gYyrYS9Czja6J1J8VVPPfikdzzrXqzRy9mgfBorVddYXgFysSqKFcKnCcR6JJG3e9HJ",
  "key21": "5zETkQufqmBqjfxbJM4gBfuQeidiM44vckDDHnrMq8SVKJt7onmjWDqG2xDQaKefa7CKTs3u8ojSZfXLziPNgxZe",
  "key22": "hqReinxFWJmfNfMdQ9XCo6aJT5rAHFPxXG2L6XtXMtek7bPFe9GayEGE5nZNAYgMEvoBithkM27jLAtVSUHnb96",
  "key23": "2s5pv9vyHQ8KQM9zEvr5Bq4f6xFxmAyW1a47Q39NjajqP3aqCcwvPcEMoT47mx1gGTFHa3hSuLmGEDAYu61yGupg",
  "key24": "3ndMVujVBJUBXhMzymdrLc2MvBBbHLMYp66dwn8KWjYNnRCi1VWUbACXvEGHVEXtbWkLmFfWQVk9CjwdNYLk1tww",
  "key25": "2mP2h7rNJ5PqbKkXU1HfSe3Q2SJJZTrgnaJL2wadC1G5nMmCgzFqrSSXwJiSVCvt97Sri2i7hoseXG9g5qVJYUXB",
  "key26": "5xWNnSsHGNFh3z8MXZsici6XSPBEJAMx6tXkDqioU8Ztx8wFf36pRXqhNrsA2uCHJg7qgRRwRbJztr46kku7bCvW",
  "key27": "2j72BsA7KW3za1HKVLKGL12KDcH9r4VBn6C6ecKBVSSKwDCpmVYYfuk9EBjTsTSgzuKen8UymeEnmTBoom67hsby",
  "key28": "58BS6HqGTEd2YhyebfbaUT1Jq4TVfNQgDEkUWH3vGEnrKJcpwjMAgkHXCttGFNT3AjahUF2fXA8MMrd7qmEd7frs",
  "key29": "3iBgzeLVSngBaapF2AvJ95YgEsmGF9Rf7qYwsH2PMZ24Q83pPNpGujZZqimT6pUzN5kieWX4FAWsPgYMsvbZexWn",
  "key30": "35zy7oirnFBG1keWSXdmtTK2NuhDEivqpvgr2CDvTKw5DNR3Hjrkz2RiMpajY7b9BTmZcoZ1pUAUYzCGuFxgF111",
  "key31": "NxFpXPZeqbEgYHtQnPbEAunFBBJojRy3BR6cgQc8CUMRVpHmgGypkHwJUUAGpK2UJK87hzNunXtPraRtoXJPQVV",
  "key32": "56Rc8hRpBrCzErbs3tSc5mgoKZ3pWePfBdUCxfqDTEPGTPovYvqwNiUyy91KHQf5edFwvLMnsH23nS2HopZNGZve",
  "key33": "4Z3EzdYGZEtEbGCdDCRBy78qdp8Y735cK5LG5SeF5Hun3D4NjEegBxERmAi295pdgkNHC32dKJkzNNaVyEXckmSc"
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
