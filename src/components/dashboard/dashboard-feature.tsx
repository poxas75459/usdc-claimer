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
    "5n9Lj388ZqRXQF4aagPWHVfMWbgkHjCc8sQdQNfSKJer2h1HE88iuYbhb3qzkZGtWDKu7GWYnmNhdKPJYeshgZHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZDFUv6n3wnWZ1vuBGmXwq13HDJjiPAYiyYkr96sQW9NiVuuZXgimynxBqFYtSuh321t85B1uTH4xA7kfZxDNnv",
  "key1": "2jwYYhNEmt1gxM9yU1qhG8Z7uJ28ZhVGN4xXHBeNCLPB85v3UvKqELf8FSfkk1bV34mqYHVtczqG8y6M1qK4jsqc",
  "key2": "3tz8pQ8SPWGXZgncrN1HEVq3BeAtVUv4EC3BRbf4uxnWysgDHx8jqqSsdnYRGSGQV4KHQ88S3KzHLQhatZjPornX",
  "key3": "4pbpBdQag59J5oCnHg8yD8QLRfuoqRsiYAv4WaznYuEdZNTdWj4Z3ntkmmXMLFTSQwwsAvF99kYKW5VfgtUjan8j",
  "key4": "2zqKeQ876Lt1zZWmjxA8dyJVA5W5337V15TeNkFV1aZ2nQWKbfsatpSZMj6PRgH2s9YY2q1oAkzzMe3ADrCd2KL4",
  "key5": "54apDHcA4H7kqtgK3kB7rDCFtR1Th4De6ALoL3JH4tcNhQzQ53U9Pf3hWJLYr1Bfm5bJ392GQwm2yNrnMjFchWQv",
  "key6": "2R8EuX5BCmqkbGEHNDXRmG9H3bxD7UUbKr6BKmfzAfAUo353sybXaEbPSCVqZLTApvSXfQiESUCuovdy5GWUZmA3",
  "key7": "637Gz7T1igKD6jogxDxvdDFUrsDkAyZne1EYoqEb187oLAWto9BtLveesdFpGd2BT9wVZHrw6VFgdxCEwBCGKjPg",
  "key8": "pmegEGKHixwy8H2LDhDNVWhatQqxRtZH93XmjXsLDDATj2AVaWsmpUwet2rroKkB1HVKxNmcu7552imFKzNTAVe",
  "key9": "2ZvMizCgx5YksZb7RtmSfawLnc343qLW2QcHPC255LG3et7fffs5BCkSvtLvU5eDhpGMDVYTzacbfwFi3MX1onCL",
  "key10": "62h8NTkFaEgUr2SDL4FJi1egd7j8H72vLyjgpooai2ow8RLHKzbyM5bJjZWYmhuF3UecpyMA6JuaR4y744LGSmxx",
  "key11": "5DRQzTPxCcJWDH8EL9dXbfovSv2o7PP6PwMBKsJu8Q6yT9C3zrQkJGZVH44osEwc2UBBwvMfvds5JdQhTxTHxwfX",
  "key12": "4wWnhNoT5DibiKTHEAMeYM395Q1y6r3HU6h8AhyoTggeYUV6EPBQE7NtWXGsoF1cwwmdC9hCJwN3VU9rRGbbkRUW",
  "key13": "4W1rzv4UBcViGP4Gw1ZcNAyWLkUtrXf1i3KWc9tcMe4onPjHfzDYA15oH5t1jUyyMUGv7iwgj8u95Rw1D9LDrAws",
  "key14": "2yHuZRF6JddzBZdq9pe7zwe5igAkVh81J67kQ7Wtxc1kXt77xyxDinLFonjK9PCcvy7QDpvHJSCkopG8oVPyd5ic",
  "key15": "5ruXouzGq1CS7rDjocq9p3UCCQNPQkrqHdc1ALxujxvVioxtJqGTjDz946KkCXBvLudB3VpnWPYuCzJGBPhnZmGJ",
  "key16": "QJmkB2GK2hGHbPoczAxbvR81azCMwDkQtPnfowmrYyT9AqRzKsKeqfqidyoDyKpyiJ5JAB1NhG4ktoNmvnmAgZq",
  "key17": "qz6Va5Vy3Na19tUHTv5wgRWZnJ65BFG8cycnj7xe6qcJ2f9VhguJ7gA24GCuM3VntYfM6LLhsn7YS4q4gmjPB17",
  "key18": "5gmVWvWshKvP3Zzj9p9GqNQNRktGQmbPc7fzLFkHsedYkkRsdiyy98VgxDLySPTfSdhzHJrJyabXUrZxJTWfznTx",
  "key19": "5BF1mPandHWyNixLqr3s1fibU1VDRwT1vPn49xQ5sgpVZcnKc2SL31QH8WoVm6coW88AdS4Fkj7fUQgx5yxVJ9n3",
  "key20": "5PsvZnXBJS2RsiaFC52XsyeMSBBQLXDJeKNz1KEVti4Dn9XPt2ZHe6ezVXCjm3LeAydwUxdTwpsrsgEFcaKk9uJS",
  "key21": "4RxSpiSnfmjipM5vXfhXjYKSvb2qkaoMX36r1mEqVZt2Sb6FhtwanrUWYPwJcbRJcp3dUyNBYdq51Hgq4MSUTCdM",
  "key22": "4j8w1nviKUDLcKHzbrZUWpXmk7zRqYUcKwc5Gf6qBBNw8x9vyqnEBS4ADLcykpwQDU3nxiZYCV6yBkEHe9t78UPf",
  "key23": "4QBtbEkkpnTHLzQAwQDzYiZig1y7CPJq4ZZvnmchSPHDy2t98igSdHvyJnch7vETTN1YGit3ZXeSy54JGSm2GtXa",
  "key24": "3mNuTrttgHkcVnVtDYer9NKFKuPpWAfcTne4LoaE75spSH3J7vW1H5DjV1G6DHMgusNhj7CrTiHZ6YiUpm71uyzt",
  "key25": "b4pJBThwaYzFyCPrRmQYHiSUzFyzB3e1JJzJrq39YN7L1VnD5dvw5MZcGvvssiGAyvWUZEVBoG2daht2qceuowE",
  "key26": "31BxiMYVud8iHnG1WFvj536pSxWdQDe5ymi1SMG1FkWAmzi41rbuRv8QybboyiaZENaVcuX4C6VsPjU22Qq785am",
  "key27": "5ZyiEeqCVM6cbYQ7Wxfr29FngakHp9oS8DtUNJPsX1HN11Xx6A8FTTpvF8Md3oHh8ff6aHRASNrXXbEqQxx6ETLc",
  "key28": "4cLy3NvKbmPyxvd6xNfzLWZtb6dy9CSNCvVA94m6PyWk1KDpRmhdwWnja3DMWzDisKND5BRvbsBPkXoX8xF5CCBd",
  "key29": "48pvfJmqSGAY2zNjpAHbK432y6AarM4XAmxdsNFyB2jQYDWEaj84jQAQ2ZyiiBEC2PzH9DrdvUWpu6Z2fkTqAfvc"
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
