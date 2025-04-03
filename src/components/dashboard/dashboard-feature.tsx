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
    "3fqR2VESxnZfgTrUf3xZdLaGk4cjBHnfWJrXFQUgQud6VZpcxeCZghptEdfuVX7sPmiNi94pXZ67yQQKUaQFH2X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJJv2NJpbV5CpoRB2nSzMHTgjbo7AoxXCGGt752XWvtGh6MJnzf6RWZr4b3gR81YmxgbsyUJcF5qjRdmPBHra3R",
  "key1": "2wdDfZiyufs2mNVGLJRL1gAr1YZnmT788owZ4mfvYEzp72mYA7xaxn5BVBLMEiSBvVfDnAt3FiPtC5Az3EggrQ8V",
  "key2": "3WiYnNnG6L6jrVCXQBMdUPHtaw56VAKjRdqEBBEinHsQ2XCAdCG1qenvXFhTie6y3H4hwJVbMMpGhcqjdCzP94m",
  "key3": "MCZP7ejFRZadWVUn1R7WYodEiLi7qYJu14VWY3piCM7ysamMn34jkN3cCjkZuzB5nsCZehUyUA3NjPPoMiJuThY",
  "key4": "5J4V4SRwnb8AqmP1EaFX6GjKL4WcKG6xSCKFKPT6vHNZbEpRnMrES1GhXASDxsnSbbQa1X6Ve7oiTGvNK2E9J7yg",
  "key5": "3ciRxAVrUh234fZk8dopaRbjKU81Zezo9Sayh5dombxBpaV8qEAhYYfUR9aJ6skLtHn8QdF5xSDqS7iWwhewy7ky",
  "key6": "5mtgHkeki2U7MrdvnyE1FYCBMAprA8vBeX4bHTLKT7agJcxyGPWAQGWVNAxuSXWSQkqhaqajHPJir5Yb1SkbzU4d",
  "key7": "cggY7U5LSRMSBh9RR3d8D1GrZLvaJAzM89iFbKqFXXmeGjbKsM3ooVcuegAhaNaQxU7rCBaRPtTWQjNBiqZ9LnF",
  "key8": "3YBAwuuA42yE7fhgTnrREjgoMv1KRaYH27z2czArycAaKLPJqxCAKYLdpegQJJFw8y6nMEiobNPJNBVYbnHRjEWQ",
  "key9": "WuAhnmxAw536xC94eu8sTDgEdRbEmzFYEFnwwszPsSBEc471k8XpDYaN6xUd9MRBos6onxqM81wrYk2PBP9WYwH",
  "key10": "4L94wnsZwERdwFv4HGnAYL68duwTgdVVzModd1bzcMXTEcLgJpB94DyA3CskHwNcF9g38CxAkgwCX3MMRg2RU4Gw",
  "key11": "53vX7QTtAfXcM8xkW9rJmNvWViFaD3Yf4W5ojpjC933fgd9Vpeg3HcJ4ss3gvbEscbw4spKbtgjt7yvDc89M2PCt",
  "key12": "3GwW6Y7iw12aBbkrVpgPexHicXUBJEDEVgem13UxTrwAy4P7We23Xmd1rC5tdxuKjT58R5JAJSkVGdp4HH3hFSVF",
  "key13": "W4s4aohbvGHmnRrtNeonYktptdd7zSuKhYHSvdRf1BvnwoCZ9VLq1VtnULBuHEdFyynxMD3SZeXpjshY9a6w7Ar",
  "key14": "4ucQRVELMseBzqYHR7ogisQVCC7DiDPf21CKvCGSt7yazHJUKTtZf8MkaeHxR5XryZaMVLuQtUmeJFyBRdmJrEhs",
  "key15": "3RsUs9DL3oBYUEoksGG1iV7JXBS1XEB4qFzoJwvjzrQjjk7d8yQGSxPVSrFpQWKLVPa4arFxjW37qMRyFHT9wFEK",
  "key16": "4tsyqxB7DGShFj6dn43nCKsCY1wUno6VzQc5djXGNkhpSrC147HftmaiaUdFmoYaRBkdf7YgCX4GVQ2ipCTPaXPj",
  "key17": "24xH8pffM8NaKBH2r1V1yQmkYVAJ96ZQX5vdE9rCuyuSQ9bUTXYPgnNjF5f91GFAai2dsYFhQyCopjH5f5dJBqkk",
  "key18": "3XfGP78mucxmy8Ld944piWStTWkJJwRmTpCXZjLQnj2izBqBqyKV5nc9upin9Y38mPZyJrnb9jjADbnmv7FwiTh7",
  "key19": "5jyUfiBTRfVih1chFgLeQEA1UxPAR8sRWxdg757Mry4UXgSS863fg6Ewtb4qYF2ULLQtabVoXifbvgfZeez54S6f",
  "key20": "527Lyppb7hWigBWNkGUk8NaGZ6NAuiaqQcMyNKgzZ8eoF3MuhjX57vR4bfzvUu1jbfzpJMec1KjaVD4QyANZ4ftx",
  "key21": "4JAGYwsxrs1WnKfP47XFXjig6hLrNGw3BDafgjANxeMkxyqmqsoxXbhyGcFkwo8AfcNDkHmxHATtSfHwg9vezZEQ",
  "key22": "3QRHMDQYoNjR8LaLJCjEhjkZNxBGc4zZfRS9nUHmkLZY6cvUsR2BwXX4oLnWfXGpZPZF2UgncSJJJVrmvvEkVAJZ",
  "key23": "5zUZ727K5oVHP3MAs56BkVH62DbqdPFRci4TfHktG62SEHehLzzpA99NptbJbZERYGdHJbXwXDTFiFSvD7pTMZ2H",
  "key24": "2Wu1qBxQWpAp2jsUKJxBNZwGUjiLxWxBKC2D2h1QZScuyoAMPTsBYqDqBQB2Wfhx4QrPMqvpmRMyvfsbU4JtXnTM",
  "key25": "5fLSpYNPawQj3F8B6fm4EoSFzQzoqPfAgu7urUtrqgWNHf4SQfu6kRokubpU9uxtgaHjbYix7AJw9tNX4FptYutL",
  "key26": "23jcrNScx5SUzPbzE9farAeDwRYzY9H5Weo8x6NQ9Pqz63wp1yeHFy3wC9KPGgqdW5iumJsxuckxfLoKNy7XyRaB",
  "key27": "45CU3HZxLDeU55Xiu1kqa3BGBfGEPmDJhty32ZEVU5G5pphWVRbDYCxrYy8enF8bxi5QwEJFoNFSeDrqPvxMqJJh",
  "key28": "3YZrdTzZ2MAtHtuPNtiTVscHyTyxzYJE2fYxcVmcdrs3rJtcDjnD5v5ApepeYYTFFpRTTwN7UyRUcisaYqcuyvTX",
  "key29": "QxSduviY9XZTuiWXgPnJkStQHiN9sTqFTDD9EbuMDT9fB9WYQh2LCFReo4yUv4BkyGEBaozuiPvPG1WWtvp8zHq",
  "key30": "4fkKryuzbYhfGmavxk9kQhc2i5UbqPBKEvYHbzyW9YaEYNXDYiH9sb6Wfb3QzCsnwNqSs2zzduUvk1d1Ncfmrk3K",
  "key31": "36saC55X1wRt1mXxJXsQo4T6TNbEFk7PFUuZKgswpKLoKw9U4izEMteeLgG1RBHY5vKkQMHChzeSV2VxKgvVVXL5",
  "key32": "2SwstkS2qUwJA4NuZdmbeamR36gz5vQm79YNbVJQxs3rByoB7HhSmPWcJMvhfsTfjbYp8ckjBq1tiah434hfJPRN",
  "key33": "2UV2MrTLQQwky653pt9tS1onp6TDA2dqfXFbqFz21XA1PVpk5YiDyVNdRKGA36GjyoU772PhuFyMwuPCSMsZx8pf",
  "key34": "2mobuuUiPELtgLDQSQwHeMft6osTHkLAty5vAbTWCggLLGeudw5zkFTvBuyxB816fXqrBAgpro4RdooMiGpKncNp",
  "key35": "4oYeGPbsQySbMYyKrw4zStqigXJYvaaidmCAAq9ogjHoPiZs3UUe6AnK3CQLZtE1HTNKTUD7NkgPiJfX9whNbrSk",
  "key36": "2cyq1NHbmJAgc7FtzFWicLnFpqzjbCucKZZNLx73gZg9k8Ux1Hd5esutU9BYELzsT2sMobAQBYUgx4nkyqik1WeW",
  "key37": "3oWiZeqgiDb92wz4FahpvEw3JcLKyjRLJWZQuXFAqvY9tto6HGkRcDBb2FRniNrQPNYAaEu9rrAfSWFvBVcVe3hj",
  "key38": "4cT1hUG6Mtazy8SqoeZnXAW4qsEBBLyKxYL7pNxzejS1NaUHGLRy5buP7yrE57cSVMAbBSAsSRXCF416RueCMHkh",
  "key39": "4yMN6f3VpMYt3EeNoh39Xf9yvWi1znDdK5X87Gfc6xvNgaoJfubvwwgSBym7VV2JFWg9xUQzbt8wn448DLYngRES",
  "key40": "59NtBGBbKR2aBWCe5gemnim38NGH6M8bFq1PYQe17idnVvjg3Yoz2zABHzvYcnXJEZnW2Za7ry2fSn4MJqTYQv1",
  "key41": "5i6DUDnBRfHFhrE8dKc7trhxJ9ptJvqwsA93zkqNS7t1rMcyTen1ScmJsse21jBKp49AFEUomQJxe9NNVJie1AY6",
  "key42": "3qzQZqK2UAXpSXKX2gjUJ3g45rRHPNExqCiB9A2fHym6CxsVW88eJ1r28F8cZXZq3FG1agcj5YNmMiKJFbyD8yEa",
  "key43": "5ngU48P9gmDzG6bYMqB8nBivQ1CkDrhiNPac3MBfoUqTYVGoBahDrhSvwfKL5WcBKKvZJXJ3Yk2Sn1gJxT9gzcfL",
  "key44": "3463A8eyZ3uKHnR6smi516dafFwokkUwSza3jv9TwunrajYXdv81a7yygsNemruk7oMr9FVxeJ2WKscr58htXTZh",
  "key45": "389X6qjGqSeCyNz7u7jzjokhc9gERkB5rqgCRtihsT2Xk6BqjRaSqRQQL24wpqsEH5wd4Ud8gGL63hu2CUstGwJm",
  "key46": "4NhQAuaw6fDfjegkCWgVHyG9JA9RCbDot386Ynf42n4ACTStbd5RcjmyKE8PGQFwGQDpY12wGJNCjmVnxzEbZQL7",
  "key47": "3aqFYsjsNkh4Ng5RdvqCN2stZwaAL5GxxLo6qKaXowe4ud7kn64SQrHschoS1wjdGHstJhPu2uWJNDFfYRf6nZX6",
  "key48": "5BxEPDKZy7nXQJVEDnT1HmourRpw9EwdTeTFQ6BzFjB33xTgyhmTt431VYzzWUAKAoPnkTYuwHRaaMdH12afr8tn"
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
