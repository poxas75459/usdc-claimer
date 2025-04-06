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
    "2ob76Ma6Z4zbndLpqj6BQW76BvmSsCe1m6RBysDHhyXppRJD5YLnSbvArUDwuGrFwiYrJ3csKRLtK2aUdSiRPYER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkD38bUWQ93jWcCVhRjTtsyAdVmS3BJ4RGxnc4cBejmMAJQwcvzjFagp9sN3XNVQ9NVWEMngHwDmMc6H1HkHTrL",
  "key1": "3mdiScBaQ3QEN2Xioj5P2mE1Y3DQRV7FGRFH3MJYjYy2mLbZiWphYzyEpn9XqsvVPj9qx2cx6dhYxBbvhyDkNKeg",
  "key2": "2vdaEqQkY2PiAois3Vr8ThGRWxH49UbdYa6MXWBFQz2ZiyD6iRtzEA9BmC5PR42nANH6yB2ZmroLVwgLQSQfB4fg",
  "key3": "5PiVRYpuQVbY9NCRLmt3RFnHNxkhsH5sDWqohext19mDxfaq4UjwxgeRXuggk8xbv3UhY2DNQKUbT9nNDMtwUFQ9",
  "key4": "5kz6nVSpMqyQ3nQfAbV9eqi4J7vhjwEn6s1aeWmRxMj1ChUMcC95FezBRt31T9anUXNkttkdK1yDWnN3ua6XEEr6",
  "key5": "UVgphnb4qqgYPNfaMXYJPsa5GBMSaXDcAhjDkfA7b3kajP3uzfzKQTvvosrF81YVEg8W93xWh7HwKBM6r1v1t6H",
  "key6": "7VFWN4QprXJfBTcW996GcsPpeyid1xexWAJ3j3eCCzFADFywx8uQaSKtgc8DZch5Zb4HkfjSDYMy5sCMKAkrhcZ",
  "key7": "2DVXj7aME54Hst7sWGJwscwbV77UurSQx17F7KeDZvCqjQBDvHpoZZQwjJmvsfDkiqgESiVjS9HjvoeV3JN5tcUF",
  "key8": "64HBVfPu6V5YrGD3Gyfa6UuQ83UQAt4gUf6uUDTJiPgiPNNyGmTPZHxNrJp2bRXum1t5U8rkMvUE9FGQvJXwchXG",
  "key9": "7S3Zp18Cg3n8F3ajZxWcpmtbsEWgskWfLdfF8gmKJF4VPb9LqjWGudPNKYDUTjSBe7QBfWBN9ot45V74nUeNVWJ",
  "key10": "dJq7BdgRUrQ6Wi6guuYGLKAGxeRQsoxtp85sDgntN8xWLRPAUwCAvMqi1jmCBwjdsd8UACoPzt6MzKa7cqpwA2v",
  "key11": "5V6eebmGB1BmEGorbRpRXKF9LtQ6ZStziHvtcyXrGoni44JK7pmTEJfuG1FffdYzBTSCeZdXeFJRu69Rjr8CDyKM",
  "key12": "4BgyeGm7TjabotSThHZnzkEDuAtQvbYZTbXqWo8YCwj6k42CUpfcp7Nj1gXhb4kHfDLZRHhgbTao8DfVcGuBGC1U",
  "key13": "2TRpZQSPznS2T6Aq3rHWNVJEr7YXCZEodW1A5rY6UZVa5svPrKWswqwfJhfLK2to4WuXrmL59EDrDW3iPg8FMGqE",
  "key14": "5EhUTQ4FKnMm1Utx4boBFNhmVehMNJahqnFLDD5gBvp3xbidR4NcQZiLEm37QFMXEd2LdVeiE286aK6fzMQsXUV5",
  "key15": "5xwV4QuJKx8rHw7cDDT4NTZGMDijC66EhQMQ8Bnyq3F4cyJpeFD18kHdVpCUoiH91xFLnjohQagWXGBbqNRKRYTK",
  "key16": "5oVAGreZv3TJAtyzXZtbbMFs93GvRussDaeX68pUSbxGRiXHxyemfPQrTCejE97h6wWg7QSCP2jepC3HevxW3SKs",
  "key17": "TZEvGgfvoZyCXGgzH8TsvpB4F5qb5z3rkxLqiTPRmNyjY2DUdCGzdpazGahfSvxfgQjMSW6mmEqzifjDdMR4tYY",
  "key18": "2JMtECspQkmsExkvSUfxbWefZVDRDEeZLajbhEnRYxNBYSUrJQWHpZYHiXr4Y5nYYPGJ9YsGnU8L77CAax11e7u1",
  "key19": "2DD4EvYEEDdW58QoPveLjQvmoAhxmV6pLT7xPNvDfy3Fsyeg7rPtN6fZFsYaVvGskTdLpdRVgXkLcn5TYZqd2mGp",
  "key20": "3sQ3418LYX4cBjac43WVRTZR9q23Rpc93XWEssQi56NDKVYs1V2QSXaxM8MMd6aGkUpc9tceLpkAigxVY7LuJFuE",
  "key21": "gGBe9miUhkCAv6TqgeuvhFvZh75xWwJovpuhp2MMF7GvHkLqKQ4Z8zANrRTsRkT2YnAGypXi5VhK8hS6XWK6Z4Q",
  "key22": "xj8MnKT3M7FcsSyWgJzQv3N85sL7vBarphxa76z3CccGpKq6Qb25NtkZLctKmsy3DZBr4JtSyWPuoPcdGPordaA",
  "key23": "5jT53JTJGLBHHAEAk6Vfz8XAbDfqNA6EgLc5jwribqs5JuDpwv6C9R5yaemrVwPWu9i4ygpWeodTRG8X2nrLYWrR",
  "key24": "5r3z4g7b9s8hyzxjuB3mfdwnTNm2JXvuUT6s3mFfAMwpk2MbWec2FoSyKJxZeAaUPR7gZhC4y8qAyncw2hkugccd",
  "key25": "4rwSVH64kihq5Day1PiUdxhpiTiTcL52Lhs5S5arFoNbs51zGHNQJijbz6VpWjLbhfLtFX2ntkJJqqhP77ykWrD2",
  "key26": "4XxyWXRzM14GRNwTgfRAwKkGftyjRS3u5YeedUzssifpTxT7RBbWb3qxyQ5xbF8hoyMPpZ4St6zrgyHfPQPWasUW",
  "key27": "5Tt5CD7wkb6nR8qvxfWXQ77S3FxyBkib2rg5bLpLvsZ3V1q1T85HniKomowUi8zz2RbbiKH13RHK2yzjfHqnpUVX",
  "key28": "2XUqJ3WFQSxha4zuQGyUpSVzUgtkQeB3b2eSx1bx6FNZAfz2rKg7KrGd1mWhA9jeLu1jVpNNvjsGrk2XSjnas4ZV"
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
