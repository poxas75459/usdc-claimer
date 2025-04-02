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
    "3EtyEaCwmnSHpKUeMq8KfCxeLA9rdeQrJbBvGcyeMK2SgqZ1KQ2XhFtxN5Zkc8eHyER8C7z9ZT3Mg7ekHkXChTcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3raAXBtuPJu2axMjZv2iwsrJ5XGek5KJgKVHY1P89KbrgiL4KbQD83SDgiLa5ybeafCoPhmYyf7gURvCVvGc4NwP",
  "key1": "5SqksTsTfZjc5pzvp3ErvsvJqvdkdtsWvCHbS3gnXXTdi2teRrnmvAykn2D5a4LyzRGKVRvYRvQCWxrTvbz8GWae",
  "key2": "fG7hMXeMFBvajYLwQckbEsaQoJ8ZbxfU5jmdpErja2rytyyMtrPc8UmGNBJPSBhgS76CYBNihyZV4sgGxVFVy7m",
  "key3": "51P1VyVwNsQN3xEaGfkhVxEvqUTNERzwY6pqX7nb6GoQyzxuUtRtS3LfLp8MYjwbL5agnSqzrJf1ybj6A8CmQ2qN",
  "key4": "4iizkGiwFy1fy9wVoHVqeYTDNRXwufgdeVzhiucFpt9YBJkVVQwNhq4KuEDpGTqByhTC2yW91EYMNyFkDiGaNthw",
  "key5": "4aV5aYtknmomjeSTZ8zY5eQvz2mNM6UVGyjXWac56KTXKcD1oFML4hBD88Zhqz3gnwaDyBAq3ewMPMThvdHRzhrj",
  "key6": "5phHfbLj9R2CMbbiZb2BFgZsX5p7KPGhD7q34hAedFtmAwfwJLZaMXsdqdpjJ4ZwnrRU69teNYCnJ4samu91bWRn",
  "key7": "KphP3unJjXf8JX9862iMGxpTWXRLwm4cTYouwHYedBj8md5EHCXc7TkNbxqtSrdJqgvD9QF7bS2LV9iaTMkdd3V",
  "key8": "2onj8T58xH5McUAmFXmgBZnrRGfbfPTgQuCfYNs4h4e5daJdgiE5owimF3EZu4Q1sxuVfT9pbUsZvvA3mHza1ohg",
  "key9": "wqHDRVW5zEyhYeB6WkWH3q3oWBG6Z3B7VH3HqKemRSMsrrQXrNeEpV15CHdBhuDq3CQh48dJFPptZjqB9Wj8dHB",
  "key10": "4eT4wbfw91KDSiyvFgs1TrkDoamGL1fHFgTP4JAgw5Egvokkx2UhwqErNn8J7yYDjYUxP4se91ecy52UBg79aVVB",
  "key11": "44VVt6tcVA9pyugnTDmPfU7kEgr2WXg9XgARjSEVXBTbja6oQrRMiG8zbgt3EjXWdsCFX63gtKJsMLi8X2H8UjpE",
  "key12": "62FK6yg75NhHvssAoVZ7YvHciA8YgmdK7aC88GQWqnBBPTq5bAdsU5yFVVeQNiEjYNP5Nid7x7WoVbcPQSFsj3vY",
  "key13": "wZfVHSZ5SfG1pSkDUiDKLcCjg9ipjxRXiq6e52ZU643WXkHQvKt3eBQ7TjVt9XCpXRQYHoqHcw824r6mAF1Xzp4",
  "key14": "35K8LM6Dk1LN3vm2D1nGxWMFCq7yXVhPSBSvHHVWHUcmD2N2TViAB2w1UGXvcRympAZEhGPHJur19zUDitvhxxgo",
  "key15": "3ZjJK3yJdM7eK3ZrkDH1hwHTrHNjSz8kZQshrc6jZn6s1mAH5htnUQdTLbyWhiWug1JV9xzyd4RSwPnECvEbqz8z",
  "key16": "28QegStLmKMFdLWDd4NWh3kPsryZqvGfUbfBQUnLKBr17vzn42KAvWY8Eg8BBYU8JhWMJgqKLeVV8HzP8W7G6GSK",
  "key17": "3KDPH8ZRPCF6up3dppSnYjAKhuoYbUACLhUq8ik9HX7WShqVpzpH324E2t9ZLtYqGvfFDCDFXjKmqUXS11KjNbh6",
  "key18": "34CcczBFJNVYhQZ8DJdSbfAJV1VjKUgxj47QAyCfXuijLEnD1xNd9GQdcsXskbXSmBv4oaUTJz5ssEqGzKeQWqQ",
  "key19": "53Sse6umkhX3dktETChip4cAz2YuoHVt9pXoxGZZ2XQCk6M2vSwe4VqsKR2DNJfhs1Wsx3WgDoghc4hAkNFW1Kvv",
  "key20": "2ECeL4D9UfAuer6HsBABCGFkE6HXJbSGtoAzv62ZMLvutL3f1iSep8EjNW35XPwLeV8MAu8b1b9SJQ3yvuRTHito",
  "key21": "3w7tjtqmMjsutwzKLSq1pawTDKqFRs3JvJj6JXyk5PGxdUMdK14VdQTNvF9VyeAggwh6ahggbnfzgKZfR7g4ZoWM",
  "key22": "5yTQ8WcWtnqRcPHpC5qzdBAu4k8FKSXzcnqGyjACXqSzXgGqHWqqk8zjrdVKBm8kVoajk3SFEjrM22rSKwz4tTw9",
  "key23": "368u8tnLJ9iGm679gKBugEvFCSyX1nebWDWumQc7irV6yX8ce52Fz1skrQq9azvCFh8hYTSLjsiP6X946hzH285L",
  "key24": "UTyvkCQxAuMV5XYiF84uD5J3rzjgLTYTzKoxQWYm9W7BMWGdtPeGnXaAfsAfanSxUtEPNU1G6Cci6Do6H77QLC3",
  "key25": "5HdaGNi928NcvqnWZx9XNbN5orWLQ9LHG5RC5nWx67gexGC7xX6vGgWEjd49ME5PLj4qHXSdDRsV3q8XyKDr2Tqh",
  "key26": "4DxJL4yvo7eoY62MDYEManri3LKw5S8SXY7fLGHeZd1j86jdWEY4Vv4GD8doC96NscJfXVp4HQGA6guESmcRxJuC",
  "key27": "4jBzr57K8bPHyuDHLJr3GY861pzZfcZMq6tA98HwHrqAFBYSZKdgVvNwduQCfd8Qyht8UfLfMPBbSBj1kedZe35c",
  "key28": "5yUaawhKYaMtgdL5FermzEwagX1fTczk512T8RAXjgEcywsa7hwPQMVepnJYUYUQVshpVdS4TYSqLbyuVZwVWsiX",
  "key29": "52WzqMKPzqqLZKYw8s3aTY8i9ys1TeggxGApVKf3e3UevnbNvs9JnBSqWjPNmRoURubfKdQAqoyrWncjBJUnUS1Y"
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
