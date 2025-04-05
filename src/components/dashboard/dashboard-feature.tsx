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
    "5V2rJoZ497hSqGfPEtxYHQiALXNF3ZYLDvWTf9BeFcWv1Hk9zFN3mNpT4NXyTiWHko8j1Un88nNz4uZVrFEwUxdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1v8ZP1Rhw5qpQMEo1diedBLyuTnbZe4AtKQpG47hkcYowJhJPFaHQVxdTBhxLEUzFtFeQcfQzQqk5yukRnzpsG",
  "key1": "5K6XFWHbqjpWcM3rWbtEs8GVmVHtZivnKw2jMwnt8ysf2B1wQvjHUGaSNSM8bihDoEogT57t1M8e6rkj7PQW8RKW",
  "key2": "4tSsniqv31AJYdZP8LbRxykasDRsJqJhVSE7BLFTUkLmGmL6GNVZmybVVHpCXkGVxLNkrbm6keqaa3FM99Jx98n3",
  "key3": "2XEe5uUVq1dQFgMxX539RYsjz4P8tXmnPMTAtGSBTZiUYKAVQm5KMunYVrMgf1NUZSQ8gR2gVsGFTxvr2bFqf6fA",
  "key4": "22Uo6hfsrQG2wZcDDR62tdGUTetqAjNBfXYT7Lzfv1ChX9G25er5zbGAbNZTPipyLHAZjrTKhsYwEUYk2E8MR1fY",
  "key5": "4dNHwVeAFpfszb8LgZb3TW2RXsy3P6tBHMkDJVFkF3UgRgkGMD6iJdHfkTushBJ6mWvDRrihnfLtygBMgQ71reLT",
  "key6": "MXYdrkHfZqj2Z1oq3d3EKLwFciv5YWvRS9TmLVrxUt1RkA7LJDtVHFaKqELwVqTzE3omdaBgDteqzGoEEhw8keL",
  "key7": "4WdxeJn5XzgNvz6eEBqr5oMry1ET3N9CvCb67PzQJ4xVVJ4qx2J1KRaP1cWJxixLHKypG6qRy2jAE2xmi4SPSHT4",
  "key8": "2kqPSr7Gj86FBgXYXtW9xs5sbh9S5iF92M2EHc5uHBEhkU3U9YusCDuTNGBsWqcNgAjNR8LzSZw6z6s8g1ku6uS",
  "key9": "5xruvw9xDqh9XscUx15W9him4iUSPRFUaZkBZZgfA3trrrnDsfFajK8Acyt7TMQM8s2EXkvq1CXTZWmMeRiwZktM",
  "key10": "rmfMqE2FgnA227zJ2cFwN5Z5sebvAAWmUTDnWv5mWkMfKbFnW8xXZSwQoq6npnvGJkyFEh3hKE8Rjkne2u83h26",
  "key11": "m4MjPiBnvWaxprJz9gR4hMK8zDfLymGZXpp2NERuyuWCGD3jADauYphf62jDhn5qWwBgWt6t29otnQdugENMUhe",
  "key12": "238dfzGo23CKrbFhyBjTnB9R9AZUNxinDGv2mdUU9ivKt433SGhDiQqE22XCXqmw4ghZ89oxNgttgyq4BfujHVh4",
  "key13": "5VWJfTwnsajuZtTmqtfRfGcLrDwaS7ASU18AiZAesLnGsYxebZyfor5vJS8kA3EfhwETxXRTiTPqwXjsshKqQ8h6",
  "key14": "3j8PwxHysJmFxsr5cUbnqNK4Y6pjMfeGz3q2X3ugNtooYAzcmLp6A574j2z1WevcrFUBFAZRmYVNVWF2weoRzmWx",
  "key15": "5dfg45CRPvsYNJpcAYiNb5Y9ru8Cdxfv4p8tMthYmXr3s6eMWKNBa7C6AM2z9bscinuDgE9NkQvvFWfxcoC5Ytpf",
  "key16": "4sbuLRaWsEda3cRQT8KFBA5zfVMLpTzGsMxiMa2TTJGi3f9ncF7uhZue9S4pnhmXUo8i88PKTkF44amuarCKutp6",
  "key17": "4MMQcgzWRzudq4Y1Fg4LW7qKJwdTUJ3WA1ozFmA5Ewk3RZEP4PeEkx8F6CcA6dv4pLWrLbiR4YxxaPa5VM2nsC88",
  "key18": "8YmNsvwHCgpmzb8JmoXtsBxng944ruEMUCSfyvRTCjp54BnTxG3ybqZZj4fph2HH1TghDXhQ9qzK92Rb3uhWguH",
  "key19": "5gtJeLLEubFLpN65N52Ta9zZf16AnDyPGEViKiEZt7HTsJV2BnEEQQxMwZHWiuu9aXtA8MNDSJZ9vJQVwwtqDtSH",
  "key20": "42hCxsBxgsR8PMq3CcsEnjFJ1vAthE7KAkZHp6Heb8LUpoxo3Kx3L7UXdAFGjaQ6svrAZMppXYpaUGXprzKjrAdd",
  "key21": "4nWk1FSteuPkiz9Cy7ZuKQLbx9eJDADjAGsv9Un25CJry28kUwaCu28uz7KPwtm98jp6xAj35U4yFMf8KaPRFWi6",
  "key22": "3KdFGkVNeX6SW2shWNb4ij7tbXguCnNFMc8AAZzX5pVcj4tD8eD7FVBZbtMwMvvZSUV6i6T3Q8bZhtgEekcoNerU",
  "key23": "2fVSdQfi3M2EfKLi5jbZ8Ro2JkK4TLvKAYDUK7g2AzLufYQPnkdzje6y3hQgyhiT2KXmPvJ8w763esRnydGv2Rte",
  "key24": "2fpyBBbeWQLtLNXYmJVMdWkPmu8sT2tyyyd15E1LeABdZzHjH2APPqSZC6rwaw5cXFk9ZiLdieiWxqo9v9N97E3Q",
  "key25": "17mahG6xFnCLTqLab2kRyFMwvdLZYghKycWjfvRxukpmU5ubg9uAymTMenSG6LsGeqdtnfahjMMZxrUupXafyiX",
  "key26": "41n592SodkkqCWV5fn5QTqLb5XaAwMCB8cTRF2SdK1TNXVxxRCvGocvgP8Tzvdqh6nBUfnqq8YZF6ShMxzcGpjpX"
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
