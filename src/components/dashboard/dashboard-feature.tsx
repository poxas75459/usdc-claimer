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
    "4YUy38GovpXg5nWH1e7YQch77ar29f4brYacgBsjtgJftdT2sV2GdN3PrWYPab97RByvoohfFksgWH6BZT37BydJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9QFEh4yby1KhnqYEGed8nYiB3WgxzLhB1DFr5T7fLrkhhCHdU1g3oBsstKw7dSybTfe3T9rUnwZ3M4Bm2KshT3",
  "key1": "5r4CcsEinPvSMtwPY4BHMQrhe6M4D8NkvrJDxHTZuM5wHWpfxxtpwfQbpFWX615pdnn6nmUzHw8TuzDVGZw7ZHT4",
  "key2": "3KTVP4nqFLA5aHsMrtzPkC7ekchKgYR5weeXNF4oMN57YsJCXiyoNpNnJ3ikWqW219unQeBnhEuqhxDgVhDBrifT",
  "key3": "3xRiLBiv3kxvNbfoKT11zV6yZehvfy4tDkpzDkMg8HCnsY2J9adKtbfcuJGqs2DDQHeWCYfPt4aLwZip8iP83m3S",
  "key4": "2vf1HxeKWqVAKfpJ1q5gULcYf7wSPoXexHe34cARQTJuiryUmCQaEXV3ecJDL6Zkn7wFejEyKgYQ3t1P2kwPqRca",
  "key5": "5SZrMJfDTgxwyVZokSRZfnLowYTAvFn6ZYiJYUG6EZGFa1ZZoreLs2NCJAcFrivT6q8tWDboNeCjAUgqCAxL8S3H",
  "key6": "3YfxEGTouBHBBrJ8zGSWogCNsnBtCNN3pcJJes2zFDc9bRRUPr4pz1EKGRGz6e6n2H5Wi3MxPAJBoDqg4zT8ZEgZ",
  "key7": "ymC8Da5q8eyLPgQT41BYVQm76KPEs9VFD5vkAhNUwm9DNC9k19t81FZ4Zh631GZkS76hQQLZKrs7amcWNvkPfXk",
  "key8": "5dMyCF5xb94JtXdyb4rDaFscNCTviK9KEzRbdLKcW4kb4AH3puqLP8TWE6itXpsR6423pmXRbNwunizEZ2KXeskm",
  "key9": "2TM91FvfnGQp734MRkDS6Es8gtpa4ko7cikQ3Lx4f4aisqbR6RTmA5XVzBVRnzz8Qc7vuphTm5fWGCidm9GrHPCW",
  "key10": "4xEmaNEzfgQVpTrZDVzxQyF4HQMLiPT7ix5maZi25Go8ku2PucFfC3zF6qxMETckRpSsu3Z33UBwzkhhAVJUS3BS",
  "key11": "RQMfkJX6Jf2qUDk4m74W57kRACQEvT2k2YBa3EmmUV4V9KmSphHxREPLzRRw5LHszH1KspBcLAxdmMw5UqmEWcb",
  "key12": "DTWKaJAZCJYFJsQhfLik1q2RP59vtSPneNdR1QsBbsLBdUgoG5NxiGe6ez5saTpEWKeDz296AkVLVAf7F3M4msg",
  "key13": "5NoTar3rF9uQoW2axCAixmMgnDqNFxDsoJtDJQnQjM5dYpCttYKHpCT4RuvtSG1Ko5kM8kjQmq7ASZFzYRwFwnSJ",
  "key14": "a8SPqAJqovFXCKEruThbNNRrCn7ByT6YKUUCFKYKdUF79j6UTnghJGUJrgrFEXaEa65BtTY8pLgTrjqws1gAwFv",
  "key15": "29ThVYmZZ1cQUTdH2Sf2z2GiYwfGN4vB4cnAv8wkQDV1CveZ8AKzzYKnN85paEo2Sth7MifVzxPsseZgkZ4koMmi",
  "key16": "4gARHLuL4ybQRutuZa3XNgNxJKYSuNKpNfCfPhnkpEnamN7fPRFLcaLuVM7AgKDaZ3TbTC3fnyrW9JexE4WkoFNg",
  "key17": "5kLh3PzaQNdRPEoWW5tZ7Q6BQdcti9WKpo3o86LPfGi49EyQ72QW1L4G9QyHR8u6ty3uwYEBP5fDNxnC3UauMrFp",
  "key18": "iegp3vmzB7qaicgo6s9XTcwZV9Vb8WFfC8UsQNpmZCgv2rwvwsyZvQ8KNfPNH5AvLEu4crHMcKNA1XAT7uVgwbd",
  "key19": "CysQVK7MpuFJ27j7BhjU7jiY6VEuYWtAD1JrmNyHCdEasGcZTWB4HutfLLzS8ZLBwdPUxhUbCvcR4voTj1J6nHn",
  "key20": "5BaoS8ADhq6xdm85DBAzwkLMYvTiHQdEDNxBHL7buwTuqcxqWXZfzpvbv9nLUTgPk5HAJJfeWajhdLxXacqPbB9L",
  "key21": "5SfDPhFGbWeMEHJMb6GDwk2782PtZ8tVwycJraqAcw9WYFGR8bD1YtKGipRcQgVNhWyunww5JYbqBuzcfxxrprNn",
  "key22": "yHttKYBuiQmEG7LcXKxnroYpYsthTujZv82YBAtiRVx3hNEM6puGdhNfNebbYc5EJWZLJUDWKuDExqzVGkft3Ua",
  "key23": "3UUszE5E2YgfaBVNcfByWfMfzWXPP2EqoLm5oBwEWpnhQX22m8q5LsHP2yqYFJbSqhGkY12ZJfGhHkJSK3Um2FKg",
  "key24": "5xzmJLY4RkXNsHJ6PH3ThkNiK7m78S3fCtckykUS7BEshgbQJVuwQYTSvhuQhcoVE4nsn5nZewb6WNiCiPA4yU2L",
  "key25": "658qH4chdHzbQB2r2pZKykoiiJf7GYCDHQSJjFCinrgg9Fhi1HmejsrqWKZoHXQoBpXGKhYba51BriYqEiUsSquy",
  "key26": "4BCkbqJjFbHb5UdN7SNVSTE2SJqaKgMs7QGRTGiwsTdXyWkYvnLCU4uVHUTaRnTGksJydcotSiu4FUyG9MastzWV",
  "key27": "aetE2hH9w2mD1VuLJWzWFswMxouaEkZAvdjzgnJB8AThtqmthGHmQ1HLjHL79GJDDhzV9BGMmQCxXRex9VVrMMp",
  "key28": "66WUjnhxDjhjbXPdVFQJ2jmmXyqDbvPg63dk2ZVkmap7KEXZbrjAGSLtdF5aqoNCarvHUHhtLsRXGRPZbYQxYSVn",
  "key29": "36ZCPnGsjUJ9KacjEu2QVkWfmxahhTLB8HMVLUfYbjeLPqNqDGW7a74NnwyFVXq33B29cQGcdC8ErgWN19is1ptt",
  "key30": "xmLS8wX2GMA5SnNNA4ksR3tCZzmrRhEFQZt9KY9UrDJqBtSfAumtzpEMeSj72jDuQbdHqnJckBdCgpkTiqkhtgi",
  "key31": "2J9Y7HbAYYrYNm3dyMCESwdQcrrhybrN9c8rXEeB6SdoBVWnJR7y9jDW8h75onvfZZ49VDmnbTK5MxdVtwxB6dob",
  "key32": "3VUQVwNuRg9GZsbaDqWTsJr4d7BVbQnTY6Cv1RPjbmjFSe7nXUARu5VxdPKiGzBNWxvE4ExQWjTXX3nzXHHn2Bae",
  "key33": "44sc8DRyapd6DjMbf1JeTJ2x9aCHF3VowYBjgxLLZGhQQjX53eDcniU6UEXEBqZ16To6KqddhHtDgzScyeQHWost",
  "key34": "9MsPjFnXFtokb5C6YQf3JmbfKucgo6MSB7JbfZk2bPzVxAGH6Q97fUzDLCj4116th3hozwWX4NjcnvWkX7LxRzq",
  "key35": "5PeCXVv8bNdB4FLStNUMQGtMbkr88LtLv12fcy46SysKKaR2f7rCybSRhbbNZ1fTJKPqYPYtday9vk9jUoHm97Wt",
  "key36": "21Hdip5TU1Qri6TgdCF5FNTQif98k7vChvhZ5rYiFkmH8b82ToyU8gvwEy4krm618UnV7QJRt7aiyoBWc4hwReq9",
  "key37": "238H9dh8EwaEweyR7C3cyYccb3nQBJP5RpkgDNhnUKKt4QFegqvo4uVEvJo1bbo2pw8BfY7DweJxg1fix3aAKaD6",
  "key38": "4N7xhu2eg3pZDzEca4NM718tGNtEN22Kf64t1pcucNRUiypPSfuHXKqjQw2A9y3nDixPQVhLiJVbVTS6vqrcPNT3"
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
