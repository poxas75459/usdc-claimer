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
    "34HjVD1o1ghSEwuco537RXGkH7k2Gx9CCMKbdTT5FSgeBR9TyrNsfNUSwVqaKhv2Bi7oHarTTF4ibgtWioqM3jNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s6mMiem7U5N6mV4JYfi9xqLGcjcChcp7bqBwTwQ417o7yWMQHUvLwbCQ2gwLbdBp91krYhggxWR9rVyJJcz7qKy",
  "key1": "4hKN67wj7qLfyxKy5xETXg8EgY8gbqKrCW1auT9dgB6KqaMHDMbQ8hxGxLrsDSNBaJRBtNUsBqYnDC4eYn11wYLP",
  "key2": "5FjVaiJTJ4ERuzVYNAw7KtLMAi25rbQhRmZPafPmqMcDyxTawDJeyKU8Ji31cuVeEcwHk8fiABKfjtJpR2vjFJe",
  "key3": "4xvF3G65AGEMirAwoKVB76cvgh83SLBLgP9q4PzMXETwZ3ws55jUuLcXSoUs7KCL3N8mtFyp2LnteF6TGpLkvxst",
  "key4": "73UdF6BVpBtzEZkkZq7BqdXozRFveYaWoaML8q2WqG5pXwUaqioyW9pQFyTCjofvH1Ai7MkTRNJaPxe6rR3VbVJ",
  "key5": "5Rmmk2ZdUi4SQnYYzEgWkzSw7A4Cxjo7GeoBsN6f88S4TrwXXnLXHskxyDJV8zFRyfHJB6LiR7aWsYibfs9ygWuj",
  "key6": "6x287jULsiLPpo6EPavF2j4oah35LcPd6CTVmk2FXrjuWveXxUHciYvDHBjakq6wvJd9ec8KHJowACnyDmKeahB",
  "key7": "4oPa8z2A6bvNypvvRPkzxamhLqt5rpF5GUqEvKvjxukpwLgPCsqGCXxzBp2uE79jWGJ5m2FYdde2xXuYSvJTyiaE",
  "key8": "2yDSkHstA6f6r9qsPYpjALuYPgvP16HtqAAyN9Po6HMeXDUzZXzBTTCvW4bRUriHEBcsf4d5XNoytMAU8sfgdCKu",
  "key9": "3aXTFTsxvLSjD4DxfBb8mdEELUXgEmPWAihnPsfxYAhaK9yWK9he2pjuVhVLqjzZdR3gtvk3VrLvN8Uv6wSzJrFR",
  "key10": "xZuyXXvsApkRQFVFHLSCUTmHPcsEJucq4PdRrDH1CcEvpLsk62aSf5CUhsih2YHieAiewq9ekt7yJU6fVMmYb8u",
  "key11": "2LKYrZGYsWKKXBD3qQALYyeGbosiaYfDpU6w9aXZPJKXwHg2TgKFB4cPGLNzqKLGeyqW9mb2nS7g658wCUBMbdPg",
  "key12": "4zrgi4U9FjR9Yfn5rPUwUu2PdFWAhMkMY78T8etC1WDSnUbNj5sYv1QDKJNwJR2bRPnT8GxKBRAD3S1pUL7SPBA9",
  "key13": "2HL1LLCcKA6fHXFSQS1xtkXhnkwVShfL1GtjssAqwKCpy4pv4r7PDWj3pjmPHGNWxwzzvRH2PB8pryCpy5nRU2mG",
  "key14": "2EJBZhFzzSsSSgRqPMJrQMFb4DZZEQyGRJbNu1t748PCy4p9RxMdZBz1iaYjwyhAiEdKPKuLubqGwpcTUzC9S62j",
  "key15": "PPqqhA46kr9TVsYTVLLmdw3mJkCsHVPsaDf8owrnGbXt7pS6iAWsuijSUh2p1keNJFVAnxSHet94bDu3Ay7igFp",
  "key16": "2hoRWfnEEswjbYZq3Tk1ep1Zy2ugiUNCG4DXToF9PEobpnTq8taEYQ7HmDa21UHBrGSpQ1RvMVaeuuVAyos3k58f",
  "key17": "5RHtDkkf4RkyxCC53W9raek78w7NUahWgKkppUeZZ6hcrJ4voGCKmL2WMycvbVcXe5NjbeGvR9X4DCK16HiPf53i",
  "key18": "4UHMHMadFNCVpq1QJBcqGY3zy17QFZ6tHZsPwNZPCGheecqYM5TUMrUw6VnppL6yLCgV3TtoXnjXoZRJJdx72mLR",
  "key19": "58ifK55WJY1czY4coUSQoiL7SkWDFwSJ4xEJJwkvkZDQH37gtWVHoVBiiGEJ57i2iztspSJTMv12PA1fnoS1Fisd",
  "key20": "2NrVrh4T6JKwxSy531qJQ2mC5YnCmYSZM42k5uiAb49h8x8dEkSiGVefmUStnaXh8d6pvSsw8VP9QxN5DxaYqd55",
  "key21": "zqrtcFLWfopZWVzqtnYuPTct49Mozcv4UuTsv74ATWA1V5NTRgLous6Q6VLU2x75i2MrTgtQd8j6bjQpAM99k5f",
  "key22": "4cmDSsQwT69VwLtMVzQNG1rPhURAftajceifgBxq6ekR9c3Qkuj4C9LA8k1SrG7avb4N2hBCXVnRFUXvHez3RXeg",
  "key23": "4zESgTFAqBLXaye5wZsChsJxoEDJ4tNfQa6s9UwAzfjKJKRsaLKnYF5zXJeSP6Qc1JdbpEMDtM7Wpm1re3PgVx1j",
  "key24": "5d2AJaYK7vELX25qZJXVZxfsEoCZDe1SfQhsbdQ7EGcrmqwAk7pQ5FUU6GF9xGa62oRhyPA9pHC3LcFi5bE3gKtb",
  "key25": "47JY1TsnmbhhDY8fwdCvZaU7CYpirbq3sBcqFTGKJ3QVpXvkgMSfbaCfYqriDv1QW6G7uZKmu9Hf4oUUCzWhdU5X",
  "key26": "uo5waX3Qn2egNE41WUbNN8uZyPxd88zyzgXUFc6Bv529Go4yZL4gaVKzWWZFShV4JDf7FiYAkqTWsuterRa681L",
  "key27": "4BeQjpnqQ3s73rELT6YPZQkGCcxnKadM1oW7rzvUWBzEup5gTC1PxErWL2ieyQzsTgkNZsr3m7CXMHjs5QF7VWV2",
  "key28": "2iuuYh69JKQ9y1ory4fMd1aceJnUNBcE2WXBB4H8ATvsv2UVQEKw8bsQeh6HgGk6Ucn4oSvZ4qw5TUEDPaSVvmBb",
  "key29": "5qHQJb4YfwEWu7sw8yyviSec1Qrar5YGAxez8z6J6u6vzGiMfsKyaB5emtTzMNRqkdvwewKbBZKz9b5wBa4u3yc1",
  "key30": "PiFtDdxMMHNpUd1DkxVYivDqDXmY2qTCXbKc28MBg9kT7voRPR6fxat8ByXaDM6LFmtKaEpH1Ntxq7JfKCkSNz7",
  "key31": "5ZkvbNhZhT3A4MGUc4dNE7gHa7StNRbcmHHAwHoWrFNTBrBf2j82FthDARzWgvW3L6VoTnjw2GL7FaGhwJRy3KV7",
  "key32": "4b1RHy6mNqVMNhCvt9RFBcJwQRArF4piSfgkoYFbKS3G1wwWPrNeV7FvXiTJ6oj3A7CGwLQtUbfByCp7nTK3Kxqc",
  "key33": "63pfinx6gz6dCbHrsNXqsKCd3yHazTAAJgRjB4cQYFMNqV3RPPSCQZiay2P9ANtMYf6nVqfKxZroyfB6EivfCyDj",
  "key34": "28UNkWT8dcW6cMZsAbFenATXfdBQRJk5AhqnMz7hN4vvHpKed7c4zye1dx33EBSQ3F7RJmQCJgZsP4ujhsYPUcxq",
  "key35": "5aaQyDfxqz1hBTEEEhE2EhXfxUZSC7wy5VXTWiwv9PXCFNCVhkEo59vWGiJP6x1oBEwr2hQV8bB68Rji2UtGZaid",
  "key36": "5qiV1ZHEoM3fzBdDDfp8nNwMtxZyqpJ1udq9CCfPBYxhdm1um9Q16ZScK2prpkUxBYzsEQJoBzwfafrtAFf5jybF",
  "key37": "4pR5Z3JeB6bWckeBtBP3LsZCqQsXuRDQCJSxonfy94MTkdrUwAAcdk5g13UUEoZCWwpqZJgD2dWzUPPKhewsNPsQ",
  "key38": "q2DS5cD4NYcWHZ1MtcMZSCvokWDLk43C822fmF1pNwTdsycNkUnUnfty9LLiRUzN17YpbdQ3oh8WKdFH6TyCA7E"
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
