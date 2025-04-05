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
    "5ut42ULYVvZSBZfaE5w4TYwFq19CtZs2mKYBLYDkSGPknf7wB5Wv5bjr8AEbh4RAGEW2ub4QB4arf9jKUEWyehAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkmfAaSUPRFUUZ4haNGJBJzKs6p2ciycfPyQFFfqYMWRVxkgKmqzZSst97pB37ocXNtn2Uj6xDzXLb2oDpU7q6Z",
  "key1": "5eRdHtqa4V7cUcWbf6Q7WN7EbiJRsCi9aqL3UkULaZqn97usEUDdVPBEmRqL3EVYE3JUoDCWrwzpZZs9X8GMb9Bg",
  "key2": "3unW1p9jKG6HSzqmrd6L9Dh2t9Z37as7iNUkMaUcLRQGsCyiXC4vTdfWSy8Nsj3bRcWNcQkTA6VnGTVNLzRq3CQ7",
  "key3": "4gM3sVf15ZTj4ZvKaYcVfomeT638TaMMK2FZHuv1URNGLtnEYsPSy3mTx9MhvuQRA3Fhx6bedB9S5pCpqFDw4Ujf",
  "key4": "4Vda5hd6kZR8sWngbQ5VBAe2ttUS9ym8b12j9kWz99AgWrBNLsZ4TY6QEjRSdaQ352jW7HzyZHoW5x5tiScM25VT",
  "key5": "284nbYkPG8sBkDnqsrcnpPYtgZC6jXR7y5iM8vaHS4sLcmjPE8FCbkuX7LfiFjfvsKBFKah828EbiZmv9s5choNZ",
  "key6": "32xMYaNTxyT9GZHFuFmim5GwHChobFkLe8VSfeVHYQvb8VDi8X7dDKjWMXy2ZQKCd9sDx6Sms4x7vvNVEGULz36K",
  "key7": "YULiehXn2neFRrqt3JK5nbGCqwoLXfi3P52CnBr9VdUXuTuWNYedbmYZ7VHp3w66udXu7jan4kdcADXsjRBU6RQ",
  "key8": "2VkigHwSmruY6Tx89kNPS6VudbFaG693r8tZa56aVthJYV4kCfAaCvBRQd6YgosnAuXWoE6datk8jj18Q6ywF5CD",
  "key9": "572sKqmVtvPSYDht3uUuMaGPF5H3Lt7HwTxEegDP8kpfUZAbwnvyG1mpyFr5AZ75aYqn9rj2SvSe646EHja4qx4o",
  "key10": "RBRsge4JFpp3zVTCGL2QDDbq4U7dWzRgU7hwPBhCFHbU69MHKFirDgCfjJGkx18mMeXu8ELg9YuvfYakcp6Rhzg",
  "key11": "AQt5RQB9CKBsCCY4VMjdjo9UCcuoszuTRwzaxPQrmt5S95ZiV1reMnKACT9DoLRedmim5ffPeDxtVFqYyHx8LUF",
  "key12": "56jcAujFHSfaYnX4yTUmPqPWdKyrQzjaGQzu6GFyPvceid5PX5PypoCHBXzL7H7dZQnNBKsHGpGNndALZaNdNRsL",
  "key13": "GbXfQShnre13W9bwhunak6cnYgEC4jBm7Y1nV5anhoTADLAZyF7vWm4PuwYx8LC3KSvDMwXv1uQgZUn4sshRmYW",
  "key14": "zdMRbQp1phWmvR45DQGUaYe4PfMjd8jBC5HmewpiH3btRr9FZGghb66BFQC3udaPDzymtfWEnHQHjTrFQg95jy3",
  "key15": "3HAesw9cC1TUzZEEHatSSVzWuq1vAopjthM5RYkqxKi612PyshqfBhQZ29WUqqbLzCkXzgU5MVu4PPyC5W3F23n9",
  "key16": "2brppj8JHUqMRAJ6afTwNBYS6nnwv9oYGSJXw6usc7JXN7TkwkcYecccAvSjP5QV9ox1PQvGVVijPUYBCKYHbirA",
  "key17": "4Fg4GD8MryyrE7ERw2ouHz3A9Ry8oQTmdsqE7MRSod9G81c5jLc56pp9PzehKxNjeuK3QDzKN9a8Bx8oZ9w1R8nF",
  "key18": "49RHxrcP8toCRD5sHfBHAJ4FkJ424JJXC2bzdhEGhM7jecXsSozuLip87M4HBpSQzyPYKAVkY2xmTWcmXJsFbSki",
  "key19": "5K4BVxy7THsjmVgNVr7YjKsi6vPnnU3zAm2mb4Ve9iBfzwcT9V6bjYzT1oEZpc6B8xnsJ5FTD6g4ie9B2Y2ZAtiW",
  "key20": "3yCpBrytCQjPT7URix7EK88sr2P7mJeeAhjpZp46k64CnyGCX9aUfBmYDQnnzjKH6yakxu8wHxrZDfjRL6Wy1HR8",
  "key21": "5xEQ1ZYeZkceorXafzr7tDpczbqeEQTgXAWQqh5swZkB6xfgwt1WR61wossKNiihKSb8kPyN2CSYbpfidjMDNgRh",
  "key22": "39W4yATmJupSz6EJNo3khtCdQUqkn4pi6rWdk8ZwvjsWJghTSmGxaFUCercFuZWq3rGmsm5z5bJafkrg3rWJWKES",
  "key23": "4RAVLAqiw4rW8yfen8fNnWuJp6jPwHcCZM9Yn7hPdPSjNFeyL4A7bLMXSp9vEGFfyqgEFAZgLrsMZoZ7QMsZZHeX",
  "key24": "27mAU9onpMgHCukzGchbYetD5m4PeuuNgtrjB6Z3mn2WxFA56wTtf4QEj4TutcBTNytueeNS2yLvWHQxqg23ffW9",
  "key25": "4TXwTTMNMp8eiqb9tWSmqyjWtVFW9Gk7HLB7L9qDj5TEbdnxXcAQPWfguq3Vuv2uR45euWTbHM8uwvWK1XTSoXoM",
  "key26": "KiqV9FyMQTKjvQz3WQ3CbMHpztyNkT9on5hm9uEfH4mEdBgErY7KDZ2obvVaUGJH9vmhdfpNqqJQw9sN4P9K3Xv",
  "key27": "5Mn8cYQwM571pe8B3Ud8VnpbTHv6z3pQd9QMdiMSkRKMLozhDUdP3HeRgsHMMnRgXHC1pijVYKU3Gxpbvhd6QiQM",
  "key28": "2P2wrg6ZU7ERn9BYALfdHE2UG59NLLHRmDNwwTbyzG1qHJfSj5hqKfpxFeCwce711v4R6n81x2hx9Jwb6PwwWgr8",
  "key29": "2TFGusQb8UuGnk9YXn9uZoQDLCgrEcuP4ohdcRhP3oFeLUzG2eNdLE6pFffcysXxAKxoxrm4huWtaZNGW6hYabiz",
  "key30": "4XZykWxgx926zQq6eNiC2af37VXkaGFsCwKVvx39qRug6RpR6d8GCXfVASebNnKm14X5W1n1tinAygjBj11oL6FS",
  "key31": "5tRXMEgjnE5pwUeqqtd2pRKs4mbSDb2DiAsHnGkmNrRpb3f8qaMNaE13YTUh8xtuzeCn27LhHHyXDYKXrw6tmhMx",
  "key32": "4Wstc3MQpaTXB54b6SZJWEtLSjKu8zCq8C1UYb7zXt7TjFCev3owiMVqbtB2ejwYWtYQvRrQjgwdfAFrbLExQnkg",
  "key33": "2KYBEEMuK1vYzgL71r4bhyCueNc9dgQSqaoXGtqyEYjScBvjdecPdyPYt7jFYZEj9f87EyS7SeSnBK1UMF2qSzxY",
  "key34": "56aASjW8bzKh5fxdxH4LwvwfXXDzRmiGhnXejdx3pBSAsFXcCFGwDhmoNeSrmnEwJ7cYjQNNVKCH7yDDLQD6awPp",
  "key35": "4rQxzo39Z1isRdnVSY6sx3hDQtgHz91dL6TaRb2tNprW4b9Ev8TSEgF9WGn5Suoho71JjAqGjJ7aFYPGqB2tAbfX",
  "key36": "KrkoMF37WRSwAh8mEzWJFDpm9Sm5EoEtKARo34rvs7JGmU6rmKcXC8qUEcJM9JCBzyi7dgKkia2ZeBZm1aEczXH",
  "key37": "4HAVNov62e7uw2KYV6uuVjRK3yNwv2qfaqE52goYJcKF4d7V3XCR9NdoPxp3cWWVDNTWyABSXpdvhZnX9ENxmagW",
  "key38": "3erBnZvy2sQpAMdBGkoUKgyvQA81zBcrNiUScdQPp5exidgffQAfeQ5MqnmNn4jaU6zLBGp4nVxmiP7oEmaBuAaC",
  "key39": "2B95idHM9jgYC2dQfAUyYVhA5RV4DvEEVpNkWsngiJw1H6vDnrATtKXHm6Vjs2vs7Q6qYo59BvApkkHVfPYED5uM",
  "key40": "5xCj7EyjPy7xotnXqA22Hxngj5N7v6tJs5BS3JcjKJnm98CQCn7zMc1C7reudijspuCYX2yEQGJjB32j7uwzWeqH",
  "key41": "5s9L6bFM1BrMh7S8iPuPV4r1rqnwyZPJFnNg2SdPEGuRJ89wFiVJsdcacA2xdVGQWbi8cVPtZPHZPQG38P4psQkC",
  "key42": "43doWoD9vQpoxd2XtQSfgUWzrZrpynMYFcp3muoPQ6mJTr6t1mLvNihk5VTCB5Sg546gpTay6ciHyrBDNWMcp1cX",
  "key43": "raoqNGScvw29SbhD4AJcArkJfc8iocQWdeLhbQbe2gdJngCRcrCJkFZQBEkasC5Cp7md82kAFFP7EhFeFTPv1uD",
  "key44": "JBfd5P2w6EVTNzRXC2oeoscT9A1h3HWSvnLKiFD3BJ3SGur3oQ2A5fbvAhFvC8MLjA3Kw6excNWZj1MqmFBJXL2",
  "key45": "5NBCDCW4HuiCrDcQqBsVpaVkb2JQBtyAuLrcAiqT5frBBNV69kUkxaFbRsL1v7eH5rTR3bjMFSTsTnr5LzN5yQ8e",
  "key46": "2JboX64bPgavcebiV1LCqaeDtpw29tMsfAabCsxVKNDRqiCoLGR2b8K6UzqVXV5c5sa8E3TXeydQH78WFcnZJRqe",
  "key47": "Ex35tzgqCUKsJ5uksa7MsUfx1gkBz6Sj4dm6rMQ6yid9WWrdPQ1SzN2Hi6h22fvdAaVXsVa3Sq7PACCJTLqvcBJ",
  "key48": "5e3Kf8BMu8PNKBjbpdQG9cd8Yengdzd2stg9epbMcDE2iWx9J1YBPH9ZtkSfCi76ot2yTWHANRcLR2CHsgbhLrJX"
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
