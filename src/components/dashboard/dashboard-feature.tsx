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
    "64ggwYamiAB14N3dkP4Wzx4oRAuSFzL6YBWbaTXmoRuKggdSYbhNBo7ziEzfp6R4gh8ATyvX7cWqNBpBsmGZwu6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEcRfwVZMmA8ZxVbmRwNijAHuaGoyRXbFDZZaTTq72UpdXrtGxuZudJ2j2MYZW8xiQB1ME8rDkC5LtA7YdEYjx5",
  "key1": "gYbykAMyx4JdkBizrWJKyGbexvFvyxYbxFrSc1TWa7hSeTSSRR6ARN3qhxBKcAQNnqAkqWn8Dg7cDJ5HJY91Cau",
  "key2": "2KnY5e5P7ukH1ba8smk8aJiAsjngHcmBeKREwTJuzGcDU5GGbMMVKywSzyFSXUhjZvD1z8RRuwLoZFp5jiiBWQ8k",
  "key3": "2Q8NobwEKiVodVHBMkHEQwUcRcWecURcFbQ2SRyHwdCfhg7auqVdEfCFCWM442LrhBefCZ7BgpDziRmZD1c7hodZ",
  "key4": "2EmtXNfds4eyJYEbcC3AVoV5NMYPkLAE91dPf4ADsVW1ZhrkSxkBK7VHmWwk3pm8KoYfrMH19gGkkAC7ZCWHg4dA",
  "key5": "2Ygk2xfssgLfVSkE5MtkGrdG5exEy8238nuABbKNGD5fRTjKpr1yxqBAR5NQLrS4iTvhMcSwyRJMqgabuLm7Bu9U",
  "key6": "3dVKF6ziBZs7ytn95uP4MJnNDhRFLnczmi43BDKKKkuwnAhTqwDGe4cPmqvVTTsVyNvLD2qcEtwA4qkoBxmcLaqB",
  "key7": "5VqfkGSKiVvSXfTH8BTWN12Rgs7eeMQ3TKeZQofFfGkQUyCMhpD3f2F7EhckzrcgwM8LeK5X9rLddj5hmYwTm36m",
  "key8": "54N2obFurBJ2cHRdZeoEkKjU5W53zNoruHWo6Vc4eM86ywAM7xrrVEgPEpqBnbAAwaY3bKYU3jZcpRiFr2hrfBfm",
  "key9": "56PFDXktgBAz2Ua8BYjgX4vaDSp5wsgGb4XfUgypQA9XECyNq8UJAmdbRUB4T8gKV2fW5GtnMVRQWHRUdFNyoAYv",
  "key10": "5y4JRa1Q5asMgjeUW3n4wiMp31iTLdhkX1SFAtZuG6NgDQQm3kNu3vjKqdkDuDuajrUTcQGshGXQ1aYErmBjdnFw",
  "key11": "3VcAyywbMmKgL1Ceu6hEyEJqwACx85DnaW7UHGrqm55vEYbAN29VMpTceVQmciKwM2AmHm4TToGrBui8xiYN8PHM",
  "key12": "3MarerBycDQ11k2H6zq5dGNcMrU1zb6SnSemonQyTWW52wuhdtXJjAvxYUALHRV5sRVWbh62YBBDDndAN58vh19X",
  "key13": "21mCT3H3eSdqUT9HiufghXDkkqyaboDqG8PgUz6CjCCKLTHypCjWCMxhHSbRRgrDeh5BSfzxYPfV1HRSNUv83X3x",
  "key14": "5R8BLCLLq1mHSZkdAABU4cB5qzXhwDD1xC5U4C4wWMSrMi3YRmLCwga1qa9iT6oKY6YPZK3aYABYGbQRqvsCDjHP",
  "key15": "5KmVK6wKVV5AtTbrWcYwXfWGqXgrm5cjCYRwD9LvG2sYqBgnheqV3GWU9WpBEmPb7gQw7WhHCTjrBDgV4Cx5x4wY",
  "key16": "J2sDK8kvr5Nv2ZwUBg888eKpM7fQ1EUzYTsQvBcxx2t5HSjZsvR7tR7ExE2ax5uWQtZGLyJxq41opircQChyhU1",
  "key17": "52kxtS2BTZu3EuKoif1ZwSyGr69wEfenhWcxyFRcY5bU3uSNwX6V1mtrq8vGT5zdZ8PgEJauepKEgqfXwE7kfTJf",
  "key18": "3Wj75ihbYUXM3pq9WEY3iUpFM7VNTdAovhxmcczR7BK8nrj2o8BB4ZtZHjdMWoc2QwvuCqGvqDMzjqJUVgtqdBWw",
  "key19": "3DwddDdEk8TK3qsnbDJtfD4kBGVpQEDnhrhjhDu6n7bpzuPCHfawtENqGxhn14xr6gLLKpVrGaz83upSKyTGE69t",
  "key20": "2NsRY7fJbxxsPFEddHzP2pBJ5cPRcZeooqxNus8mc3UMtqPU6dcGLdhF2QDQzNMMfE2R3hSAumgDYbgrAH5WmQBP",
  "key21": "2TXe3ZbRYsvLV6ZWTDFdyXPNGWqDurjduxBYdckg4ugcS2VNF74tcJVzxzTKew98NWmH9MatHLwCuJABhd8nVQ9i",
  "key22": "4TpBU9a6PqyDnGmqgykwYxjFkAUtKNCp3mb5eHBWAU6A2Zdma7JNeJJuvYifBzip2j7GehPTmfArRkpaZYTax6VC",
  "key23": "3Ku4TAgGRUYqyFVJshPfox91KuiwV3rYPt6YG7jYbnjySz94DStMRyjUBCa1vpVA5QK8eV6bAhvA6BdtP6Wrasy9",
  "key24": "3xwV4bcJ7Ny9DrnRkPDViDooZmBLXfPeo2Qrmh8GoFF1U2bRE11oSHk8k64cZZA4CGwdBbLcE98ajNja4FMHMHyz",
  "key25": "281rwjrTnTh5v3rwaSEzgFfYSjSSVeJfA3JVdSKEqVvuqXZQDvnNttLJPGjm1FaPvbqQMtd6QtktWW7NXq7Ubrtp",
  "key26": "3aNXDueskbiFumWxBLY7U5i7mReMGEXjeUMaYcQyPpdpeiQFvx8ZfEjw5nNWZZE2wDsWnJ376xL4RZB2WuGZGh67",
  "key27": "3JVBstBuun83pex5v3TALyLYKg9LTyc7XLAdFwGYawwEG1eum4oo4j7mnKrK9rYx1k5ic7cRATcSe6yRjJ852WFv",
  "key28": "TmiF1UiNws4qDTi7gzFPRtFK5mH9wRThoHdEj2BU8tL4QK3rRtn14y8h3o9P4GKB6TT2GyWAER9MwBoNpy3iuRm"
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
