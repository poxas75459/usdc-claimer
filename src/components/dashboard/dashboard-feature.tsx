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
    "FMMtJEgteVnp2MKnviR93mGof4FjJeRgpYCwGJcdqGCAwRwmezxApi7UZfv6uJ73hGoc76DT9ot46sPKu2uEi1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFSTzm4vr6ipmVpT9u1afZN3jJ9uPGMGAZcYiZHobeMbxAvvWMtrtqhwuyaMD5WHbR2LtDxbdVypuREd8afugNG",
  "key1": "LHLiDpJ5bFSkMLhjj8u1XcwabKCcyL3beTeRyPMH8cJ5e6559mXiyrUpSxWeUf6EwkWimdodNvN3PXYFJ4duAp6",
  "key2": "51YqH9skv5XvgqSGNJzphGiCgQ9f1hTDyNEGPxgLxc2mbuyZx3oj7NTKvo4eR39zBdV1bXxbjJDPyAyM2mCnp6ij",
  "key3": "5p2tmoAZ2qkdHAXA2suWBcsj9VMfzxXHANi2g52JbvZJPjzgmQrL3VeKub6MtVp4tNNpvGJGd1gSFfPa632K1uiD",
  "key4": "2HnmjsmwkCPuAN4T3cF75NzW9g26V9Z6KsAE3RBGQZh4ofKwJHtbzqkp8C4enzB9f4keoyXs7cQCwYeTyGoRRrAN",
  "key5": "4oY8U9r3cowM72UFE3VdbmBKvYKW23QoJYmvd36wrfSapi47ECz58wB5TPQ6yjGm6wJ5aRVj64am7sXkZRqTRYZg",
  "key6": "58ifnc5KVcqPLmKqhFqHjBu1DDKAGk8DLuXkcLg4g7jjrNj9Tg5JRMqMSDGdDZC8wRetQPYveasUu6tnCeSAYJAt",
  "key7": "4DCUTufbfJgfj1gfABKsaQhoBakBwfqXJaukjyQmCMiz7FTuuXdb41rJbrXzdBmshvNoMey2gn9Q5gjw1XK21Rja",
  "key8": "wVBy3YkHseEfkPcfVEL7iS8CvBPoK2xnXA7mSHXQv7BRgPcEPpfKWagpKavsfMyxh8vjtTUjNcpv9tCewqm91Vk",
  "key9": "3gyQEwCN9Xtm6FfarwQXpbMhWtFJkWqdq98eJQ7tJPmE89oo2C3s3yz1beukQ4QhjQDQHwg7ohqGv4MtTjAUa71D",
  "key10": "3YNcvh3NNx8CkZq49Ewe7UZEazNWyevLvXkSgzzY8UUbqNE98F1hFkyyzNLeeHzjWZLD8AUrAwEzugB54dBGiHrN",
  "key11": "3qp9nB5fFwQoZRyK6S1D1mWFE9YyUPSGkcrtJYrHccLP7XY24yYTcGiNrq7osv6B6KADBsDxKteWTZ4m4te9XjnH",
  "key12": "3399sefv8JJYaJ6n37BcQXE6sgksZGQfvKx923J3FYgtqhL1e7nrCZamfHtipeJemfJQvwXzYKSUTojr4fQ7oGdw",
  "key13": "3m7fGLdGism2uQeJN7uY6qDHrvfTmwYgkqDhSGCBj9aewrMC5kfiBQh2Q6SXsanU2Jw72bujF19qLHnaQGedUf1X",
  "key14": "QiPYjLgKtJ1f8CSPakFRECnawdqhhdoHzLr6vJtg4exBfP7eX6WkFPtEBhgKg6GUBAyJJsjQyYAuRdEFNR3s9yy",
  "key15": "2eHdffMz87SczLG3riz6yFNvq1MxsEDbA3CsMhBokJDU4fgP5VLKFpfhksVQLFV2JodV2z9jqvorUJkwooQ1LZXC",
  "key16": "zr6xMt8H5ntffGr8EA1xGH67dpBYT2fnUxx57BVxdNffooGmmoaiNbcqXuKyq7VmxfXW9QtrzScK88r7F1o75v9",
  "key17": "4qm1FuayzEzkSeSChQRstW1So51ZBq5PJdYrEC7XUJxiXWYePEh9QFCJzsZZJv3QV1RaQFeMqB25nFCcPqa53gPR",
  "key18": "VrHrdAorTiddiNmDJ99BD5CoU5jKGccFywLix715ADL334SGxHbnAiN9nGZRmY8AU9BR3gYuS6PTN5zTodYQ1nQ",
  "key19": "3g6Jjfr4gtn7q42NvKE5LfFha8rXpWeLo4NnMJ9G6dzy1kqdn5HWz5js889EoDvPGYPPqCyj3EAbtHYZ7b2XEV7H",
  "key20": "3AQ6UT9tgJU7u2fKnFd9Z4xDYUXuMPMM3A1Xt3A5HeujzjHUyj3UEUoEdAMJH72i8j5sPQxC164hoRAVrgSfL7JH",
  "key21": "5J7Zj2Di8u6vz5pk3PVLz47FUGVVyDEMB7DurezLFzpXsLqqiDQExdHB495Z7jad6ebkGxgyCgp9FVkm17av6bZg",
  "key22": "331oNkHD14Tow2M6CvowfFqJfQWVPenLZ8SXyQgQuAqhqAoW8GCdSamomXT3xj8wWEih2Lod8fbwrZTqfP16i1EU",
  "key23": "4GZ1JfEtatPw9LVgALJrRXSzfTanx6hDmjLAAwsro2guwSxLuiKXmNXRbsBcSU3Z6c3uBGxn1WZjAn5KRvbnn6ns",
  "key24": "3Bcpf1eSvLXmLtUSjCxGZBmqdbZKmiM89iSNknkUEBHE3Zi2vNMc5hxH5848nzauR6CjNXsCC1cUx7y8bseAwDdX"
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
