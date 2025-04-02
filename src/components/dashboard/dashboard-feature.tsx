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
    "3BH2AXad37QqNmGVX8ZwvL5okATgow2v2Ueo4yhYwovnbGBKUD2LsvBdNGQhq1wVPdrvR77ErBcbPRrg6m1SUT16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qp5486pSbSfqtnEgMiv8TAH2TwVcSShpDfpb7UjwP2Wn9RTPDH1sjJhjpnGE4yf7WbejAxyKVCKe9U6f9onVEob",
  "key1": "2rPoygyCp1EhLbokHx4jQKraari8ScRuBmhtR5L6b9gZhL9syXHyYWU3za8MQgMsg8xkdpn2jCSLZLSAD4Bfir1T",
  "key2": "5hV68CcJWhHGBAB16z4ycmegj1jxjWkZcx6dy5yDQJ1oWNeDMJpTv2Pi28eDM28htLo2dnxeYgRuRT6ngdQhkUoC",
  "key3": "5wJBS49JPRZD9GnADQrx4oK1kLT5mfTjpEzFEP1eyQ5BvdSq3DCJgJMcBNwwQ2QVU2KD9nWbECnSq2C2UzaBpytw",
  "key4": "4bFEB2F9c2w35CwEyL5vKXM4bVBhWFHzKJEgBcFYBkSqZWNunFKzQco9RExKh48tsFQSPvRM5yFLnrfjUbSQLSrJ",
  "key5": "2JA1hc5BfFpFCM5wubZSz6kF39ej2kc8BxrWKg7gCvVFpV8HbZUF26d5zukkzKhSzFHguQbKsSZjUmTfsg4Sqp3V",
  "key6": "4JuKkgyMpHvwARK8KKABy7rSDHCK6wsxmH3CUqkV9b7jN4AtswB1jA6fNvDtR2mv1eUtKzYTHzRdPkakoeun6mTE",
  "key7": "4J5LVq1z86mThdXaifaz635YStAKxvgsxA7kqPBmhQbn3XK684Vk19iy6sN7z9YLoiwrKRRcqVCFu4DUgZkQAfF1",
  "key8": "8KFdBBhwJXdkBEXoAe249CqRXHSAWnCQ4T92fwboTLaeCGJTo5fmR54V95D9tU4FYuasHrbGYAYgG7UP7zipHMo",
  "key9": "39naxQKAeNiHw8ncYpkDeGbPRuAqo7YVo3A6LP3EbQUQofcAK7gmsxkokscG67XFnDcLrpQ4QZf2Vkuhs8icJwrx",
  "key10": "2JpmmK3c2vckP7vfNCHAFhdBRz8fnXR7YJs5y7KpvpNMK4BvSHRf95okq8J48q6aNt3LgbDCpJXF1yQKKKZYJKe7",
  "key11": "9zpD6xgZ7wae6XVCzX63uUuSX95R7dx9ohoDRZSPBzPCe4HtA4PXeD1jpPcxk9vudSSERUPZigkA9J1oG4EfrNb",
  "key12": "Bj5MvkYWg3A4Lw7cHeEsJ4oQhqXzyr79FcYNUZ4VMCTkKZrQv97B5fyG5hxVZcQmZzV1QBEyk4SadA3ocHTHma6",
  "key13": "2V7U9Vy3NWd5och5haZdaLvM5jsD4t1f3XvbeGX3LWsZJt5MA1WZShRmApRhbVqhW841phtzehiFg9JvAaQDgFFQ",
  "key14": "3UYpD1r2RdfWgLiUch4n2i4DABYd9JgNe6cLFEG2pPZJBW5uAi4oRSpFskY6LhoVLsN6gSKU5bPM4wZuAPdtnqxk",
  "key15": "5D6jf6B8uqGCYx5ZJU483aZ5SGBJMxHFBECvBwXjM4ZFCCapdv7d7aHB3PqRUshcb3iWa8U5Y7DPkzPFrWVNwQui",
  "key16": "5UH8itA4d6vtBJcDYj5r1YrqPmGSyGXtwhgtM9fApBQqBuJEriNppyUMxXNwHMHfe2aveYonCVPxGWW5XykkNuoL",
  "key17": "43iG7T4Ds4otpJeoKvCB1KbfJAx1A3wFUgizWa9cXPB8yBEe3Kbm7aM9hibtjjqcHbTwznvp9Wk2mmZ7shV4HiSu",
  "key18": "3b76dWRZHYndTfLJoKqxx8NnPTWp4ApCe7eoeoHmEVVyHgsmfqQm1ZkeuHuT5tvtHoQdjy6v8u35pgHzzRFB8cNb",
  "key19": "2wtaewzeYachx7xHJcP89J3DBxPDz4AS8PiEm9XyPjs8itxX6M8459vxWFA2UDPrez46oEoeCW4GvLbqsVYK9P2n",
  "key20": "24jvFGPcbgrBJrmf4gN1xr3FQB5YLuxBeJntxTTdxXdDfTfYXWv4gmB3Jg5nfL5rMpf8K7ohKwY6p3bShonzxg1N",
  "key21": "2o4VGghTxvvMff14C8KqQA4BwXMrA26rMBYWGqRDyVRd2ghizSRiXhWT12S9Skx1wQh5RfAUtrenYgu6ChC56R3a",
  "key22": "tuse6qJBZJkP2SzXewowdZ3U2EwdECtb1T99w4hd5pvAjLa1gbjZSh7m4cmJBi52SYnm8Kf1rmQQPenm1AQoroA",
  "key23": "jSLkZ7tSwSykXbNZtBEzdtEZUMEk1YxfGTGfLDpMVGghDxAG5Z4VgekFeHcY5jPjrShg6BatCy7m2UPZ22hnbrK",
  "key24": "SMkKJQZbRb4VMF4R8powNJLgQgGHrwF9h9hBDYe42PwC9rV1VbK8UjDmHWGSSNJHczfmymmv6NXhzb7LvLAHPd6",
  "key25": "31QYjxjzZdpsyr3h9ciDKgUyhQGbXPLWWpbvLwTQKB83aoEkuy62Gm5XrCdw6ArG2KT3CzShmhEz3a2yQdUUWcph",
  "key26": "3SwZfD9USxmKyAZUQ83eoEc4T5sxdhSVnMK1y1PqVk32X9rAThQHGUTkovspmeYxHAJ7br7p3dovzFcqt14QRH9",
  "key27": "3Qo6guwArF8qRHcJT7Q5HWtXpDM1mDWAYSwZauK7oYCwxTbBUwMuw9rJEkeSEgbAZADrcar72X4wDYZKXeJf92Ky",
  "key28": "5J7848iKeRxXraGSiZSaZMXURbdpPQ4oF59fdZDqdHEPyrCy79Rf8DvNfGuuer1cfcMRJSDioziCQEu5SC2kjkNW",
  "key29": "RBszYwWjzuCARWuJmdNWQ1Kpsp1q9Ct3pwUA24csQe2GjFirbx38Qxo8n4qhFNXRkF8qEgNtW4hbtpQxN3WTFSs",
  "key30": "Ybn1wteJC2KdcoDxec6oKZmwpVkLo5ZAeaLT8rKE67KzidQeb6T3jrw77ui3FHTF4mgp22TKqo8JyyV3wYa8WqS",
  "key31": "4TYAJLJgN64R1kPfU5o2LgV5CpcWgDwaNsxfKJmqvaUVHhXSLqxc2BGdVtJELjPP1qQSVVv5KS2vCsRaatpuh4Yo",
  "key32": "3UMYoFyVADj1dJE7FD5G1DM834JUFJVyF1hvLDmGTTVff1fbnbktgVcfHEKSb1tuBP97X8jQyhAKPxir3Lp6vJVc",
  "key33": "2Ufv8s1Mn7iTakvAAABePSv4YFse46yxerdbGRKrCq4VdBo7uLJr9w96EeV4PJzNzfcHPzgCugwQw492LXSDzEHr",
  "key34": "42szuAtWADtGpJeTMQq1j5nMJEnLrgEPTrvtA2BBWhhP5DZSWHRcBsodXoL2xAerNvyWZgtqK3mqdCu1vZcF7rP5",
  "key35": "5iQepdMHeTD2mrybG3Eo9kZy13k1FzXVXNYC8Q2fZCb8m4kXnUuRo38qxhJqLdJDx7qFSWXxM4ARoqj4BnuUTtfB",
  "key36": "4UbCZhXnaKFK667bTGx5ppSCaKiCrtd7JyH2Na6DqwZc5rvsf5TnaWSyvw6wiBPwqf2Ea1ao5jKrmoKqvaCAagyb",
  "key37": "5Ka97ANUg4kPy8Qqr8iuMvWjWNCcjDGnFR2TM5zf2jm9xqmiGkDfmQbMWYoRwdWaPsZkWFjcbESb5VksoHuJYHQU",
  "key38": "4FP69egqivqU8St9hHZGJAwJkDEDAhSSt7epdyiUvxEsZ5FR6T3Cp4eAkUTVyFUpiR4eyRgezFLBhGRPvv1wtgds",
  "key39": "3qGSn2NtMXNYduKCMiHYEEJnyDsfdzQM5aQUpf8nDesRucF3yzeCumsE9gL9kCBk449QNrSUVu6i7krLtJ4LFbGb",
  "key40": "q4cuzYnMLsmf7cRJP4ayG8198KVMvd4GLv5QgyQnECB43B4qMBC67Xr6udjrHCJCdp4Mqo14Au3nrxMRnkFs6Y5",
  "key41": "3CKmdoAvNtHCPtJvt2XGk7MU8mXxpCTPb6gtya5kSSddNZhS6zTXQWejcU4GdhfYg6HHBRD8oHKx4FG6ExfzeN3N",
  "key42": "32peNVfdcg98Ay6qbwF51Qz52hQ7YVWeKudiLHWGpJv7zaf2kVz4N8scA5NSHUG6dTscVDcRVm7vyC4J6K5Rqpmh",
  "key43": "NNae9iuLy6NBM8rJuKxvukQbLv5i4oc9uSNUUNB9XLXqPYxQrGpWLhoqHEx1BgdupQTuemsza9VF6QTvemT6atF",
  "key44": "4sAGXr6r93WQqmv3TTdxMmdpKua13uX9gSZsFtvLj6xW8zw6REjvyeTCrw5Zb6noQEQEjYSuP7BMtcdcuCSxckiN",
  "key45": "31gpdH6QRyPiVPsnRbLDRbksu3QeN4vz6NAYFqrrhJsBzeGeSE2HyEhErTKY7q84jYui4zwevtsfgLAKRE9daP1S"
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
