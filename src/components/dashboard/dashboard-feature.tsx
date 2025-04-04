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
    "6yQt8divkUScTKe66BaguNUjLxTNeNZBQrXjzqzWEViUvo6kVtmZ3kqT2UF11iLh1JScB4RR8mtQNFYNR8yRVdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmjX6BaxPH3nxBn1Q5WxxRVw9dfzMwL2ELXfZL6PNWSH9FQGvvs3MmpHmYzHJexCUJdERQcZuuya7Kx7aQAT17L",
  "key1": "oiQzkR4gkSL5N6egYPzBwpbnHyJtrAhM7H3Un5LMXVABmRhaLRe6jmGAwdbuJrTzRPXPLt2mULAUfUe1Lgdnheb",
  "key2": "4eCssyyxfY2QMRP4cqc7KRcnJWPi7HJbbAiNQwX3JewLvwQVFTtms7GXCwZ93Y9JZyGsNxcfjmLYeUYEamBnyCc3",
  "key3": "23Qne4xDUh5BgcfDtoVt4zKcuuc1ADxGtW8DrbQXTcWY1ydhnRU6ey1XQCckwBfDgYYZmLFr4PU5uSjJQzjqKjFA",
  "key4": "3aLyMWMPtpPHtmfpKTpbDuP6XejB8o8e9UBiTUbtYdWFGd8DbJppoEfpB7sco2v2H9LJxDz8vt3cDEcuP8noFMGL",
  "key5": "56b5EtdbGjQ6R7xP9eWnMgUWJBKSLk3HKSkvMWsXa44HkCFvz7BWTDADYG7bMcdztHrPA2ff1ijyd85zrxTSQswV",
  "key6": "aoiWuvAuSGPDD5bTxXQvjKmZ5nigrBsuLeWhjNevj8T1DPxpiHdzA4QJ7D642s9wuxUC7yDCyPHWhL6i46aa14L",
  "key7": "EQH4ZhXcXHWE9XsJd3yTuTFpRkWrSNYdegKfokJBQQesSVPARFgWteazyCtuDA5c2BdmNUY13EvMkqFKS85JPjk",
  "key8": "2vb7xUy7zEhC8tEGp9JzFrxckzFfpxqyyErKRvLkJCFvzqNdjdHvmcPw986t6n8NLJptn3Y3kJhoNta8Misujao9",
  "key9": "23XF8pCXKmsibdNLigbcgCjrzhNYYFarKXXh68x4HzaRhnz9KyPNVFGB5oSC6nofQkjCqQAyoEr3jbBfTCejM7or",
  "key10": "3XPxvophV1TuZPieMeYMxQr947wj1BAzV557Bq5oHqwN72Bmh9FuFt8ZYvc1TD6Z2HirAwx3CbYX6oC5C58194aQ",
  "key11": "HbcEopq7pcDfNCmCaaa2vFxWmuESo8L7sje275qpZGQrsxsLU2CUqpwaa8uNxq6QLCd1eaGbFRVXH1n5b1umFjY",
  "key12": "29Uuu1WS2dEMcadNVNzgf8C2rau3k9b7bbxwuk2SNqNJHPXUuqU5BZz7e6PHr5yhETn1GvHHGx9J19QbfN4nNALv",
  "key13": "3Toe9rf4mCtAexUddQ8pUu7xyLeajSLaQ1CF6RVfVHBg5i2iUiwjiDucmcH388Z2YbC5x3HNrQPoL9ED8BSW2eJR",
  "key14": "3MvYdSyuZe1w3NHvwUb3xqYcoD6Kp6Lc2QcrZnmf29xufp6A2QPxbZcrH7gpsDzgqP2HqZPtjnUBvNG4zc6Qggk9",
  "key15": "wQj2b3XBsnB6nGa8noqhSsj7awJjLt7jGhmeeDPpdhNYEWTcokcNuyVhgMQn5EwyvSkAB1a8CmbXTA3rfpKoW4a",
  "key16": "5yEb9pQDVduoQYUSJWtkLQKmQ4uHtZQK63SSSPuLMxpjbuynB2WvdnZYKn7DoRti8TTRS7ADu7gTEFfqViGv9Vw8",
  "key17": "42K4cheXtZe7uCHR3uAH5yUww7ogsaQJXMdNkEzDRQ4H8A9uPavgYZ6XeebPPwzMatyXZ6LEaoeafDjgTJ9rvrv8",
  "key18": "2NsqQHcVkoy5ZjSq49ZfrH4iWNshYb5aj3MZVkUyqgeLoHkEuwpeqYax2EDbxmuE5zcbsrDqamHD5rnxX3NBCoE1",
  "key19": "4uZbcPQuiGPswyp5TkDJY1j8t9ruuAHEros6nF31925BBcsHQUVuFqpJ4nzgZj75upxj35zzGKEdrg4rn8WjnJjj",
  "key20": "3BZc55ojfysigFKPJTiRJosAFzELLTqJBfTv2YgbhKVwuZjuecwtmA2axFS7qaQ9YvJNeHnxyjJsXEBHKebx4fWK",
  "key21": "5ptkTiJiG4MwP5j4qT8qRmapZ2avARXaqUqUjpjJ3Kpa2QQS27DtjJiLGwE3qxVrnoqzhZVfU57wGSSfUB31igLJ",
  "key22": "4msMQL2FPLypdqkP3Vj1g2wWWxsuSAqRb9HRSMLRyUPykQL7ZLshZWQbaGLLMewgJHFD3hCbmSFNQVefaZHbTU1k",
  "key23": "5QF2gLzqUQLuiakumEq4Z7o2nVvFH4CkdZUdSh1wGHxim1W2CFr2UngLEuYi96tzDuc91skxLNA8NyrDHjC3fDqg",
  "key24": "4eBXntPYUdMf7hL5EjmdQG1eAsqkTQZp1iyt4dfwowHbE4LoVS7xBcMa1hYpxVto2LA64rFJ7UyXSH1yQfBCezDw",
  "key25": "2CfFLVHKMw9nZfP2gGDn8TdzPPvwEEJs7wKpAsWrWpbDYfKVBjPutTT9L551vpQb7weVeWt2H9C9gP45QA9Te1uM",
  "key26": "5UEFRNeYbzzPQHjdVgzi3rzUKmMJHFGSykFaFYFwunQ19F2yXZCL9C2NZnMJubUUsZWpakCDhJA8VGiESvxxncmG",
  "key27": "34nhTn2Avp6oWYmbpqM13UDmxkpHzpnCFNu67az3YM5B92y269ZwDkjqY7F6JVpQ7KqUpM8UByHCkksBijCh1Jze",
  "key28": "5SHjADaME9VoKqXFwm2yGcKLebLDiajpLGhycbam2o7FUkRYzqUbYGEC8P1rnSJMmvWEGwui9eRov7DeeBzJtMEA",
  "key29": "5NkZp9KQhzKF4B4evwBDGrKvByCi3MNXStYRw9Ss2prbWeNvH3ujZUyLWVchLsWv1A3AhhBTtJ4aZiVy7pztEuyh",
  "key30": "3ursVEgdBe3YEa1uJHhJBTLVvH617AaMhAzDqFB2XcS8hdgvFDsUXoDU7PEddHphZpZFUSgirHAaVnGuZmh6xKap",
  "key31": "2CAhmysuMPp8Lz6FdDyyYou9RXK5RQrMmJQXwdmoAsGrfXnhDMusTvzgWsaPmWBV7M8wp3RhrtiNfiFxoU9MTqsB",
  "key32": "6HFBTjVgf5V5QYdM38L2a9eZjJBtF4ZigzNbBafnv2HXk9zUjuC4B7sv9oKHjjbpPCdP4MYrtukZH1SqUQZPGUV",
  "key33": "55aEaQf9xMczf6B7Dnyow61giQsMibN4PeghCbWzYLryp4bS3waMGcp2ht1XXK1MhnkVP8AMBxDB79ubtCXZzvbX",
  "key34": "64hc55RqWD26vwRS4u7qopyutfZnh6zryseJ1LJEbNM35qDRrVSzTbQG5dNNpyuzJFbmEZ6tdQwTZaRV4iwzkiKQ",
  "key35": "4YQ6fy7gP5RbMPLVbEFphpZJKKWbhWpJAcfLDypN7Cia6iVx26QGaWXj3uFegeqk4iSHaJ6KGG9Y78EkwTbpvn8C",
  "key36": "Bb1v7mpn3D8LBQGcrB8o3Dn3pyW3mAqdnpEXia5hpiNVKgzvdxbzQraYHdy23mmgDm8AaVrYEhc35fJLpsB2PJm",
  "key37": "DQNwe2zgzHhpn2zN5PCdohPcoixZzn2jpzQH391N3eoMuaeZjhjXsQkRnJ63Q5k6XvFbyXhKCmpt2nBhU3GGpGy",
  "key38": "3uCQd1Gpu9bmRUyCBgPrDT2uqj7KjYjx4pt3X2wqJCzKgNdcppadoPgK69guBdS8TPMywFcm12FhsEMJcsGkdWVv",
  "key39": "37SDiDL4wbLhLyXm8gCcHqeMyGi3kNCKuarvNKRUsTHAMqJzTjFWz8aQ9aTxUJ9gBTkakDeTHizwETntvrHrvq9H",
  "key40": "4UHEatajiVz28mziCx8qxGvh1EjVRqCfW8u9bMgmf2c1ddhMcTPFHb44kL5xNxiRqd8QWbuP7M4EZz6RqrY6E72v",
  "key41": "5LJAbopGtSYBHG2RuCyGjXpVeHML3wwhczSRWYRLtJ1wJDt7Zi89y1jy71eVUUSCfaN3wtnzFhsKoENaCrTyUpKD"
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
