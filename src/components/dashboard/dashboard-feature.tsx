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
    "3HXiRJ1h8B1UCUHqNrfH8AU5ECdJU9Adn8y1UboQb5LSLTU9M3Mcq4RDhxCK3Wb9wZ3tZfMRvZkLhHVzfTCFySYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EVCmhEhX1oxCREtZyCoWqPXLVtqbYGcvQLDYPaydJ91DHn7uGsLwhpXjGM8FAsd9W8Xmnnf42sJp2vWdD1AQ2P",
  "key1": "2RZxsMKo9o4ZbY6UnaLiPqKGp7ptLB9cH1hLTuVBzmiELhtGdJkE7J8PR8tNjyJeH7n7JrCrJCSFqf7ZFFFQ5bqp",
  "key2": "2Jt8v7Swmx3hmDa5E1ZVQevTzHoBJdL7uDTqMNAVgvER7s5HPrSQMBRtkHaznjn9eeSqiJ78wtUNsXMtdCKtkjAQ",
  "key3": "WwhNRMySTh7pvvfHG6Hr7qRqDqu3CHu2mgjmAc94YcUTKHC8nFkwZHrYVNUrj95o3XbCMEiXwLV4zxX41JV8pR6",
  "key4": "4TiZCW4AF153nMPWqSamMmBKgiLowwn1fYdvEE34BXtd1fTtY37K67RARYxWWHVUMc2Zkks6gofhsnNj9wGV3eF9",
  "key5": "55RLNSRcwG8ciU6CS4FVaC6VBN3SyLk2QaFUu2FGjv2Q7LMrcTF1SUmQL71WSCNfmDh8WHQdqBrYvfvfQbrGJuGt",
  "key6": "2UZTu3mCVST6njLLL6h8ye9vrpvm4H1G65Cf1xci3cwXhVCPyioQSdGPH6Mk7cKHWUTucqcUnNhuVDTznJ1YYax6",
  "key7": "5yxYHDcEYVGdZLk6UB8CcGkXfMzHHwtAr1pXcfyD3ZbX4RPDJXzrmZGNAbT9nmrQMvS6Rmq87aCmXUH6PkFKzqdz",
  "key8": "5bhggbEtz4QXrSk8JLG4haUsEUc5UGFWAkK1n4r4JiWPAdjcuF3ePEf5SNH8z27V6yVos4bYvMd7ne5W4r3STi6W",
  "key9": "3sKwK9h9s4a1MrH7UU3xVekfBWGLKwZRpUky1WDrb5fukQD5msdATZty7RkMADhiLFnrimpeTELehYCKgKo6xqye",
  "key10": "yYbbJkZeF9nfZ5n85JakTGMYuCgBqgRjj6cA45mDJJsiMQjotf4BqF8MH1Qb6qYiGZqiSv1e3MA31sNhh32P2S1",
  "key11": "5jEmMd6A7XYAav5sB1HqVAUWBHXrDamyaXtjznnEULeXQmunS9b44dS5sLAAjinFSRLsmLd51yB5fuZron8iJZZv",
  "key12": "4uysd9KuNDKDaXdp26fVQina3nLwpT2EhgfES3L6jZXDbohPPnnm5Zv82Qq1yNqaJCVMeL8rG7FuCcyKfU12zowh",
  "key13": "5Bta1Htb9VtSbmrmK38ZTgvGDwNtQPXfw6uMXG2evExHrihgofVXxJ7nMjYkY1moZVLnw73LDJuuCk9tF66qzUeZ",
  "key14": "3NctmvZvHbV6X4aHE1Mm1KotcbwAUjHxYur32DgSp9anfC8bTKajzFjkK1dFZDTDk9L86EN3ZD9CLWV46k8n7FMV",
  "key15": "5WZYY2NKhhSd6eehEpR2jKnk24NYLG2K9546gSmAbJpTL5dSuKh2N7o9NBrBMSNXM669oSHBzveqKSwpaQaUegus",
  "key16": "5t6Q59EZ5w3K5QYGtrSTnn51xDkXY6FQ5DneaeMuKXHNvXQVuJazTcBd8YepAoNBwvQucybvKKyYAKF2rzVNLEHh",
  "key17": "5FZf4bxr3d5ns5SjxsciMEs8oxxmExCj2QSasR7NHxzKt5QSNqsFYKx6GDc3WUAorFJdX6Kd14a7r6uS3cZbExb",
  "key18": "49r4o4wm1uYYicMDNJwM1HugyNZXGvzk1M4FEx4jFrTQqwarCvoRnK29SQTBc9QkUriPSj7KpVixXPq3xxfwgxXb",
  "key19": "2eg3t8DrZbfgdfEayRQf6TkpKXNp8RWnNZ9iJ3e8dn7e3ngW1MSfjjJwTwdwayNHXVmhM4CVs1cWgzJV88Yj2fGd",
  "key20": "2wsZr5d9rp8jGeYXfwh6Trg3r7QZkaNDhKZ3AusB85FvEnuCYvbu1MFQXLUedGJR8N6k7ihZps6FbP6QfderdRx7",
  "key21": "3WTpVH74QnqtM4g7PZxeDBbm4GwgvzBViT7saYAKgVtF7QVUiFRruGC24Dxqce8tQmATvVJWWjFF6CmtbthR5LXw",
  "key22": "4egxYw7dsU6tWupYatJMq8usvj5n4FdCiqT4PHGP43xwR5jHTDMzw3MXgGHGHc39KgacDgxqQHP6VBtPhCWuuQmJ",
  "key23": "31j7WipuhJAgSaV9Yazcmm1tQvhxMg6XtoQCydq5EUcf8G5z7G1DC82vTmGAa4kWDKFztj4Jc9cQ3NjixyAY1tkM",
  "key24": "4ytW6KHvTipTRSKwixNfjajjfUEm6itY4Yb7G8e4221hA5Xm6SECcZYJDjCUvXpQNBU9x1iQmL69aKumts7esGT8",
  "key25": "2gjegL89UjV2Be8reSLSAjCH885TNXvU8X4yBMT6F7KqwBBthsXAT27WxG7EkzrM1gLL5GbuBsBveFW6e25fVMRD",
  "key26": "5pRJckzs4DQ9rPoHbzTym6xe8XCi4XZru8CiApx1DLXB3e7rvnrcW6fXYjrPjqtnjrurDJhA8Wh75SpWmahNT9Qu",
  "key27": "5S45HZTrh6eAeAsE9uzBX2j6A2joKP3ni8h6oSqM4PykKregBaVxwYDVBHewB8Upwt8Js1bWJUSKFKB4z9eCghtL",
  "key28": "45xVZ2kv1nNaqTnQnAgTrhyBGYBM7fmKGtFc2Y21taqoBoAdKqTEvV8iQDoJyQTrAi6JsesLfGbayfzFBX7R653a",
  "key29": "54uWKbnSQppxvTBDZ6FJJJFx8jSHf4sAWVJNXHRkmTm9n4sYwD2384SxtHZiQSFVdWBveYMKfjHP2U3SUqvu2Gw2",
  "key30": "3TvLmoeHYd61eZb6EVwn1HQe1dLKSV52pCGdtJ1NJMaV2QeNywxCWGqLwKfNwE5yvBS6Y2ePQupFbyNA5uVixAzC",
  "key31": "2kzjEyUyJ1nhsQNuLkyjCKZMtJ9hgf2k5iHD2K9smbDCahkHWmoG4MYPMx35H8zKh3fgVQL65g1hh7spmNkRC4k6",
  "key32": "4XcWLcSrX67BiBxq1fhhqEBX18TtXysFZrsgnhuj8XfVxGbcikoKP4F3czScddV4fkhZ1236duDLReews6p1WGZ",
  "key33": "129ZQHgps6oge9re5XcsdWn9pmgqts4ZZMDokcjsxRw7BZbwVrNDXYdbR2XwRgZkLz5G1CXXHyPFCzg9DnY2YqsN",
  "key34": "3jGkxt71DveuaJ4HjwrAUV6G7huPr34JBbG1R31CtKBDw3EHmaqYduLgCkA2R5fxQu3vdtEuHhdZWekeZ8H5NRbn",
  "key35": "4rmFvZKzts5PDPS8TRhx8aoCi3rF8zN2XxjwtYhUeLraeNYRoU7kXs3kCumCWMJ1xpvhSinzUVzSbYKFyQCfzQQK",
  "key36": "39ecv9AxNnd7opUBGGFsHeRp7vXMb2QxWwyx9UzrYrZ73jm98YD5B2x9XUa4V7TcG9sF46WSLPFh3qyQHViMe288",
  "key37": "4CL3p4Du2bphkQ9ugsprZEzxXf9SdxKMvBWynK2QGBTWoNxteYkehzEC8MKu3Dg5cfMz6gTKaufEeLRZBrqaXPmc",
  "key38": "4pQfWXAgXUsyKMHcYHw5TVWNEMuM9w53SzLZxSRwnmDhPJ8kUZhrBTPnagLcvrkqN2vRt4xzK9XWwL4WYTW1LZbY"
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
