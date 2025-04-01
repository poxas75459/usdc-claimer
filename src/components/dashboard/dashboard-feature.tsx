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
    "4u5mN6KURMv7Ds3NUJNQAGnWJtpTbi97bTh7BK1fCx8haBdyhSPgoheLvU1NrmjV59jxL5U6VYMoJZou5nFkXGm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3py73xoKDJNuGYbpehvBbigqzQ63Jdt3EJcPmDWVULfWkRhac5ZaDLepjmbALYpZJ17PwwU38JRyV5s251RRQGFG",
  "key1": "2K6kU8BRK6WSnSpX99Qvaj9GcTAqfKnWLAb6BEKdbYzGNWmTxDdM64Hk54hNhm8vrW1v33g6aQb1cZsZtLZLt3a8",
  "key2": "5AUweQZmhMPNTdLFLjTiCvULDZD8djnr82CpP4m61fuNE6isg1boC32L87BQmFuCfNUGs1TGLd3q393KuZTseDjy",
  "key3": "3has8JhsoD2ki6aUL8x36GoYYGBBqePxZ3McaESXsfvmHUEWBHTzta9UPbvDwNGRQffc1Y7u2R7gP1oh9v3iwL9k",
  "key4": "3rzb9NV1AZHJW8koLYJ49TPeiHRB7NQPUesCbKJmyTv1Ftk4uGBRaa8fmCE4tSpZJZmniGsQGGzxA5zxv4DoqcoZ",
  "key5": "4486sYQAamDvzGfbWkLFRxczpkr4tjuatvoACgVjcQdPWuN3r6c4zMcRJQfppvDiC9bFFZiyEy54CN6VkrefkC4h",
  "key6": "3avXvhmY4Wj9FsxX4zRzeDKddVeqyhgNczDmuKUhxiFtG9abRoXr3qY94TycT4QoJ6QCrQC8jd86M48EHfasESwp",
  "key7": "5m2gp4Mc22rA3sUqy75RQxpcNx93dU3VUqwSmuBbRJYbDKWhEZD5iNYo3m6jrnXBdzyRuhfAsRyMcXBFywZQvnqu",
  "key8": "5GLpjaZ2heBBH7Q8CiYeM2XnCjPKJBBdRZGuYFgHQyfsKpqkjsEBp1aYg5AL66Qnk5hdZP7wdeeZ5EmRrQUU2Sad",
  "key9": "4pCbnEHzR4TwkWAB1oPyA9nWip5Hbytk6riFqde4CCAvQttqYUZA935gGkp9my8J74xYQEiBYVfhjjvdDQ2JvoUC",
  "key10": "5KVn79hj948FfQrZeSuXmy6rXQZbbhakRMAkbUojgrW6PCn8QRmmcpTX6m8Xo2a2evZuanQ5Uk8WR6L5ZEWdCqoB",
  "key11": "3EoBWmuHCWzYteMxwLnvQR3K4B66sKmfgN6GawL2Qikztw2yBKy8YjFBFnE4mEd9Fi8ABrFHTEXBXmBXEmjsbtE",
  "key12": "5VwVRyXVtLokpYhnn3PQm1BkXwfXMtfqToLLxmgxrSAM7xcSZpzxBueekiXvVMW3iP87wxgANcYMZnr1mV2c6H76",
  "key13": "JQhs65LasxQChaLgqVqnTLVFq2yZ9ZiAmoxdgS5SDA4sH3UMSZKXLkyesaxtv9t5XEKYciksSz85h8fjwTVDRsW",
  "key14": "2gD7iuX1c6NtKtsRKxbjzuPTj6BrXcpDjUhk85fKs83TjWMA6JM6zDSpGMwqbYFvfDgac1Xq5SZQkCEz8uMEsHdP",
  "key15": "24dM1GhJHAhkd5bfy1BjBbQRpwz2kktSog2Nqazsahf7EjD4VkuEbCyYGd9FWYYy9gYa8oPa1bb4g5UEx8uchKyF",
  "key16": "2BrP84oujERDpYHuPeX1TpYyF6LXw6HfFpVLo53qTCJMNBue8WxviydLs74uGfiXB5FXPMLbAeYX8ieUpKmWbY1u",
  "key17": "2Ci2nQf8ZQmF7k3eTmFum7bKDVyTvmk4h5gawL1c9SszD3XdDSvrCEhA4fXJY6gn7iGUbWw4Ma8hRETb3DNuxwGH",
  "key18": "3ic6Em9UraopwwBa2PpLUbz5drLPTLNhzpjJjEteDCnCZYxj7cg8BA6qfE9MCyMrqPXbYAvyLuqEV53GWAQbA72Y",
  "key19": "4hXbv3LFwxE3L8VJGPUgTWQoayMjgBattpw6KtrhXbd9zstppsXb9NQwytvTjfLEP5PcG3XDLqKdZnkmCgxram1U",
  "key20": "4JQc31WFXapUUrVF26Hna4mYTXXEzjHMBd6NdoionhGSWfXnpyVVypbtRJYBbRd2qdshfqwkPoM5ZLhzRiTqii2N",
  "key21": "QrmqAVMuDum9mJazYhUTgipmvJiLgVDzuFFyZxBromJQnBpHBrg5LXQJ5Z8viFfeTBWVM44R2C6W8sCW1Pk8MY2",
  "key22": "2ohZFw89GwQHtEeqYbHmYv9Y2Fq41FAfhHbcJznDsqThztVhZawajZjahHyapsChmxCDbQ12Z3qcYm2AGYcPJuVD",
  "key23": "5cht6gYd2We6Sf6xXDjqamqKfgPZL3bpCvphYD5GZP7XhZqaETSzgMhEhASjQh3Mwz8MRnWtHV7t3WTDrdNWYaeu",
  "key24": "59L9WGNgTR5agifjNpEjYX9s57tvq9vqfBuysmU6F7ppG2gqEZaDCFpEA14VYaoZ9xanAd5CL5ztWGsa8AQSaiBM",
  "key25": "2aGk46XN6gXxmcFFZFTW4HLToEtfBDDjZkrfAvV2VM9XhrF1Cto5iGwtQqHvrthLXkQBS18SXs19cwdBcnYBgytJ",
  "key26": "5cXaEVqygWcbecy4RVtozM7brEAjs3E3iKMqoDVNPcGLvCNzMmTKxxUkfqNTfxschVc7QpFiJtkWu5rQDXVCPMoy",
  "key27": "4YhdGcN7pe3quQ5Z7EK2GMGjW1Sk5gQnYShpYu5f9ejxPQ4i7meMHv5HHWPpu85wxDbvknAoHTMJ2jjsf5w1zw5i",
  "key28": "5LEVVX7pzBRbXeZcpWVoZFfqCdBrBCyweD5tWHk2Yxk2EnsqVN2HRb3ZLmZcXCVRUCTLYBeTPXKF6BcW6prHYzgK",
  "key29": "4qYrkLVfad8RpkrZG3GqFxEeNkYZVtDmuf46NvDk5B9AadA8EwCAB8DXvfSTeWGV8tAhqtDyT1yhQRVM6oi7m6CW",
  "key30": "4etdeUyNWfJpMK9sSEzu9fCjBhgdGk977prRyCsL7JcEJBWhYNDLZhpg8JZs4NX1Z35RdLV7rbJvzZRk8pQzSXv2",
  "key31": "w1AbvSE5wPqs6VAJwchPkMK7yvQxT1GTFP8P86rRGD4ovtzdRvjb8zbPWkwoPuroQrE5vHB1foBChqfeRyYWQqo"
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
