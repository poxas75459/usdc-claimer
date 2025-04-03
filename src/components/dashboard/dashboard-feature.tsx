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
    "3THgJX57Bxycgi8sPz9S1JzxCiumsRXzidYYapM9YwSydZJwG8oADAyk3g6M1b1ABPD5GoDeGzpAAD3aCpSgxmLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aS1DRemCYGdLozvmxSM2GLrRVHnTWEZANbgxNnVd23rWcBGVY4GbsMY6nYR83DEtYdCEfzs2Xfc8XGgLbN3WeKU",
  "key1": "2pqMnmbSmdS3VDqsNzVusaQiVUBUPuPtmBMLUtjsg3zfbi4aZ4eFBpAraq1Jp2RjvxWe4WMmNsL5s7ikBAfynk5N",
  "key2": "3UvbThfTCX6hX8Nz5yikwmDEi97y7Y1DWS3Nd6FQQsghoEKKbcUX7pMbNNfNAB78VrUkJeFZJqaZqQSHHWoWaqgL",
  "key3": "857DFxg2ZhSVhGKG6QXLpw6Y5kdRmVbYaNFzP2WRBj4Y7d5mmrXzs5T48Roc5Jd9dmBee226XFzQ9MaMXvSFzXW",
  "key4": "5asNzWWpAdYAzzEcrVjfgo6LBkz3DWU8NjhzinXjcdKdiUAL3XpKGJv9JTyNzFWBWP8agGKiyVVakEBn8wYBoag8",
  "key5": "NRf3vYWvTyBrMGjRftAv9iz2u1BtDTv9RMhfFbDzTKNa6suBa215x3Z59kKQYZZ2Qr59oCYKF7ZrTeiDJnFuEgG",
  "key6": "3NMeEm7UiPyKPvAtJV5s6UQJoTKL52AE4UUEijb3N5fT7q35PUsyRQ5JFnbJoZi5wsqwpVTjkGGhBHYmCURL4h1y",
  "key7": "2cQskJ3jVetQcjvD9FyRDzaxXe28b3FUq6gZQogvb5yzF9HoggppAoBxabZ6yzv6MswP9yz1JLeCQXcSAxkjHM8H",
  "key8": "2g2c6HyMXNmesHKEgW3kkCr88iqFzCgd9PQrgG3b6LvFrZqDJU5dviPzmvsuHPAXsFJXpYN1qxbTGVG8KWJ4mFKA",
  "key9": "4Kmz9ucJQffazNf1NAkRmZg4cCvirqPKJj6ZsoQL5hPvFitXy5FXL48tFumPAJXgygjivZSUzHBPTJ6ZVayHKWtZ",
  "key10": "2WBVWs89ZLkC9mefYWN111shNhZezfnhDgGRyj6xqXRnhaGR1uY7oixrxiCZ4g8ZsCJBSNGaAb2KBDPUpgrdg9Vk",
  "key11": "5e4LehwharVCx9zLugrxHrXfh5JWLbDiBHy7w9Xw31hSsPRhXScxa29FpUVZLRF5ZpCV1FuVeuERUaZr8AifFz4b",
  "key12": "AMz6J1gyH6DXu5K14nVxZev9hLpgT29GRWaHkW5Lve7YAqfD4i68ZkfEQfyZWJoWEz5916rCuvcVnyKH2UKdSne",
  "key13": "3gEuW4kN1Ev2NzKXG4Tni9kRwPCLRA6TvjfDqjqukaFGvZvYDtxv5KtZR7cv7Jbpw1BZzinWsLc9yqFoisvwQfH6",
  "key14": "282Wei4vvxKQoQQDCaNhbrGPMVJ8AazqjbQm7oiH95pNh9okXYW5RPBvxwecnYe4xC9Kb4k8PMR9BsXcpuSrytih",
  "key15": "3jqXmzfoaLfRPY9DQ4FQZZbqWzLNGNN8Lk8KV3aDcD8bQUb4LjE4GXoeH5PxZapJs8CVVtvfHMwGtrPZzVn7PJ7b",
  "key16": "2obuZUZhRBhtMNuxgHvR8G2x1RzUDJCHsXMb3XtC4vQ24vaNM3ryiDmxYyZWQHBZ1AeAnhezqnpHoHkgMe2kyeWT",
  "key17": "2U2pPs8VR1og4MEzvtzPWjCepQiwQQPxzoC9VdqEmFdMjMzgVM2fP8NNxVFkt1L5TvZMHo7MiYqBm3KCTmoq4cnD",
  "key18": "rkwWpfq2MUjU7TcJmn8CbLfD5rReLtfpzyz9ZBL9FBTg4j7AQnKLzXGZ7txJuLUnL8ACMgqYa8tgGtAir5zNWbQ",
  "key19": "296a9kicTw3c86kVSHmBrAGCu57cb4iEn1uFE5yY4jUeinGRSFHwD1Bpzk6ZknSGjworS3SgutJMzpjbb5ixWJU9",
  "key20": "nAQrBrEqpMZ2WbkTypmbCX3EmB9heoQKiya2YPgV5ZKpSPHHqcMWLBLYBmN3vMbuPFy8e773csjteZYjpQAqiog",
  "key21": "21AAAEVkhuvQLFJV94SWksNDeHeiRRZNVgojr5YPrcjm9VWk8Yn5Mkkbv633ouu9f6g6pximnNQpnH8NkdgMUMRA",
  "key22": "2QLGc51Jew55E8ctiiJ357eJdARswL1TpTfFPWutzPQFnX46m4eV1ZdLoc4a9Trq4o4P9VvrNcRbr81sdBMEAA1c",
  "key23": "2uZ4EuptMLaCmZddGdVho5BTQZRg5MGtZJc1u2xCP2WMPhyLWd5Bf7NjXH1EQ6614mXLi4SuZWfbyuxiddN2tEHC",
  "key24": "3ncU43r8yybLH8MJasK6v99cYMv9k44j4HKdG2zB9sLnHiyLhzs56nsUQef4LxihNMfLYiVxEjoXbr2u9XeH9DSU",
  "key25": "4J6SYbpCXDpFeFXoHAzh8rSgM8BrhD5L6kqbdVN1QCakkm3rv1mft8EUWnVJw6YK4RHoM4XMKxJNgWWBu6mQJcu5",
  "key26": "2hL2nRzyW7S3PaNQ6nNpLTdhezLSufjqV2F3rGousm8u588tqdat6WRvCHkwLae7bgQv59MVUiYXx1VJsnjD28G8",
  "key27": "sszsQ1yR179WwZm69XymRb22UREHTW9xJ9ZCecGGf1bBdGg2zVQHzXow6ddz78YNwEeNcJyUKNEAxM6ZQqwfrNP",
  "key28": "5ro8F75YuSGH6Lw3dHkbxDbzPjaEWMmqJwswi1zrqqiYWJ3JX2Hg2bG777ij4c2zS4c9q8wJwMrq8NoLwKei4u4f",
  "key29": "SrucmDa1zUUpbTNevwDptG8KWPxnxf5BGE9ZJpjUpYwTe4U66KxnGPXJKLzYt8KnCAZ22gVTRjUAxntSQ3Pyqzc",
  "key30": "4VzgPEFdNGU3FG56ix5Ydzc1Le32WtGvvyUTXXg2DMvWj18aSmoh6mWDrczJXD4znrKRW1cEgpMJdPCaNngUH8c7",
  "key31": "4q3os5vrWGf4TyxnRLeR76AVad1CpFiqzk1jPn3rJG8LoaGtys8sbmbVfKkSzJWqnTeqkDzFrJhjX4yuQwj7mTPD",
  "key32": "4x1kfnRPLhbj4x3QcEGEKK9Wov3vapwgWMJj6cAJddMWJQL6eaxQgRR8qkFAEQdcpQniPh1nGJ1X1vntXQtbvck1",
  "key33": "5CyUxsEsax3rN9PNmTLx4qdNPvWn8kqrNVu7oqLrkiubq89jQPG2eGRC1cfYGLN1V1ZqbQPWE8PKQG1CqaYK7aYF",
  "key34": "5yQdD6HNjNyXWhAcz8sWFy1xeBgx9goZ532UunHPbw4ahJnfkzHiqaDkR2MZ5gqAPFup28woHhbXfXANboiu7vL2",
  "key35": "2Kx9rp91VjDvPha8QM2qBJKSPpNmZewUFvHAN6tCyexWoL7sVtBUbLY3AQRnJ5d2LXmUAsW57co4WCN3mXV3MjPM",
  "key36": "5y1bzYgEAWHs8hsfhsBgaa98RZx1ywbSu6DqMSgLy4vH9UfHhS7BfUMZpLgEETdThnwGwtf2MEUbUC8FebWRgNL5",
  "key37": "3QHiSXX9uJBupZA8zJNuoTKVh7PQzQUNXGFLcK7JTQKVhFkFx7W7eJQ4FuH2hHJW3KETQfs4xL1WjofCu4nE95ft",
  "key38": "Ldb8TdXADXqWSj4SAtjtaXzZDS34QApbA74F5qd2mBcB5rW1zUfpZn5GMWzcqxMzFGjaAwhsyQFuN8REqXVKMQA",
  "key39": "4QEgJqCM1TD9ettAgu5xYXiTPJt3pjRQLJs9pvHSBAJ3YBrXvBzm9zFdxHnrPo3sQ55j2PmaXqGnyeetMrTYXyfQ",
  "key40": "9cAGLAJqJZDGvPSabg6A9hs98Dwrz4PwHUfuVdXZfiuFJUfbcmUQEVQnB1C5ddwDoAQNShvxnMmtmspsYxk3tih",
  "key41": "5rFcY7rw8PzcaQqYB6tdpkfmn6kCLjy92DrjEQx8pA3HtxGwvJtfUTLVMTmhg9ucwLvnm5uqCD9DPvtyqHMA4NSi",
  "key42": "oFAvq2rRfwUTLfVfT1N7iohFsHtjXvEJK29zmWzNSTv5fFPDeuLfGX3XGaNsrdoXx8GHhGCzxmxJcS6ShRAhAwp",
  "key43": "3RS8od8yaxpom7yq4tEAuuFjewitCNUzgrV41wCBf4dUfZJvpWjH4C19FrfxFJjRqom3jJYfq122W17bbbg8ruMC",
  "key44": "4wUccrAxDzimg7BifLpgoUgM16ySqtwcVFy1Gy7ZEQTb43Qs1YkW2ipumopSt45QooQwaHShLxTWuAxCMrLsnmAA"
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
