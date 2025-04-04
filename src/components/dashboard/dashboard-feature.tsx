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
    "3wcyei6nGUh5bZxasvgF4GXDRLBAaLNGjgYDXGuBxkixM7nWEDjAfGaedvczQBau17DoE465R31WJYNzBBmCp3hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BprVwswTYTv8tdcz4hAGgUeNBkkf9z5Ruqk8kdSXrwe2F3yUT8wPBbRWss6UzweabzZJphksYK4QBSKPR4AqqoL",
  "key1": "3fyzuSKb2ppWgMDsj3ts9o4tBC8QjuPxBk1vu483HZXHyJRjZfPE7RsmYR7PhUqWRaAFqdXfKdAJo83PL4kc1NNk",
  "key2": "4kp2oigz3fjhTwLBEzEnkmiHsnXpYXoBatbTZxaasYnxFBMbHUBtVfZTbLg36vsPXQkLfJs24nDn8rDuYGk2MLCd",
  "key3": "5yS1SyV53BWPzRFarP88WQouZ2JLQ2WgxxNfXaqD74eYgrSAjbVDswj9h5WBBu5WqXUvuKntpbExJHpAxv6MKgYK",
  "key4": "4Ua2b4wcKWQsVneDfh8N546zgtYc8LYXrWWktECyLFu24fGqZDVUypf3WH7gnTEQGgeWvxoRSUafJqzFEL2t6SqT",
  "key5": "4U2JqonCzwehPb3rpkYMDrfKGQoftEpSYq94rVPvYWekhaszx3oD1Zt7ruaoEtpqgPunQn6njtYijdacbBhtbANm",
  "key6": "59CRwsqWEtHZrocRinyYRPqRHAZgj9X163RrX55rP3FN2uc2HtjghKQo5ft1FNwr4dsV89PC4V9XUyRXNNBymTBe",
  "key7": "7tugwgdKdvmcVYSWFzyb2zhJRbAtkq2pNkhj7nL8vM2eeeaP5QjV41GX7suRAbxz6xCscB7TTMjc4WEXnghg9hf",
  "key8": "3FZvFmp2wyBDtrtw4xfc6YZCe79f4YfZfafr2khMiUfwx9hpp1WeKaxA1DQg32Du6oQPuRWDaQ2J5ZhEPiDkomrM",
  "key9": "3tXSmEMqCeLVupJ5hy957tD6VejQnNUPGd95Gt37oZ7ndqs5FsEekq7Xdp8uqVt2xTP8EfjwUxju7D1ZmsF7DMst",
  "key10": "NYnwvs8ps1CtxQvjfk9yokddAimB3W8g1mP1yik2iRsjo6L1DgvWJcz2gd8ELYwudKZAE6kY7wKGePw61XjheJg",
  "key11": "2m1aSAeRQ9WZzQhnfhPHqKmcDVjGPcQQMBKWqfcJwoPEUoqxfZuANbYqVE3eSCXqC6rdsApKJb6vDBdtmT9YW14h",
  "key12": "4t76HkUvUzotrsGaZC1s2VXPxfdLqXrxhLnjgHfZHYwuXBhyyFTSquxwTxa7VVCM4eGmqJnKSbdao8Woyr8p7uEz",
  "key13": "2DRL5wx77Mrm7YUZeumMAkP6VSBE2gRdessZyz7MU9uag55gdFmjGUYeowFG8Ljt569MN2GHVnkb6iRoDf45CM5A",
  "key14": "4vo7177jcDLbAjwWjRS9aQEVEJgEDEof51EEkMJxg2B9wiQ6esyvNCpuTuz61gQzB8oHBusuFCkCpjjLskJhH6kM",
  "key15": "5Bsik2Hh3rXgNFK1GEWiCBfRJAGiVr94bTiGQZSBYUrVL9vDqqCgkKU2bMr8hHdgB5dEUEfboU81f8bk7qAsdh77",
  "key16": "3VpH8L1ptrDTinCVjZXZATYveRScLgr1p4qaQVYLYgzkaT2SbjZoXZKsqE3Xf4mTzCcGB2q93rkKnvRq3WMSCAhm",
  "key17": "2fc8dtEMLE6UZCp9SRQLsd514mRfkzmQ8C16kPijUK3jEF15XvrRq3r7HpuP72GPeJti72fPwK2MfBDUDu2vC13Y",
  "key18": "4Je7Z9iWgzwhKqCiUZ9idqiCMBAg7ykx2CweVpQinr7PxSQmaW2huQnKFneh9u3bUPmq81o4FjkCKaKwUxDemu8t",
  "key19": "56W6pbyAAoDoahRwSBVyXK2GZjt2iuiKyUpeY4RUsSuDTt5w16weSegi8m67c8VjErczFJFpn3ks6vvFmVuWuWVH",
  "key20": "3ji4BbatnupkMY5TkrEPnAihjPyngRN1TBFgJjT44uxGRod5a17BHtCgxU56kSsouep9RwsmLDvarQRRsdELbSPh",
  "key21": "4c14gtCiwMGSVVkkGWfx3tStcwdTtvVvxxrJPrWV7NnTue6w7inkFnCuKFrHHzbcP62GsCQKx4hmF9LXBPcYWukm",
  "key22": "2K5fHs7MY8oJQFddyrxPuyyZ19AZd2vvdiLhQab8ZSsxVomtUt4Twh1u1gKYRS5E54cVZYBf1RpbMbwBLqjGi7UM",
  "key23": "3v2rpT5SZKZdEgn4tZSLGLvYntaFNjFRtq8qDUXg7S7vePKz9QjP1j4seWZvmEFp6fx2CRTzBxq3zH2whARLPiQz",
  "key24": "4wXVaMZNrZuvyQ3KfwufJwK52VmRBPuMCcBSzi5FyyFa8jjAX7oFfPHgBN8F12jHD5yf2JVQGziAqWqTtX5LXrx9"
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
