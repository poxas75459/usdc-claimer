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
    "5BCuKBFzVQCZGMYxShwNnj7fEqyJSenz3RiFefybx8s5LvtsG9FZFzNkLS6LtcapxQSKBwj7QS526edTEPD7uXVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YVrCtKKnX7GBKS5Xdb3CbSLeLLC5FH7Y4xvSJR9e2VjxJ2Dcpjj8xSXW2AJ3mRTmZdqPkbzunheQER6o1stejPG",
  "key1": "4p2Gcdnd5wehfstXMdv7kDq6AezC81zuAETHYgZ8SvtNHQHW48zCAQNtotfgamo7Q165JmvCcF1prKRH8b8GHMbu",
  "key2": "3ozQjbX7RppnZhyKpdKDhwwNixi1zfNzgQNYj8FGugtYBcvEiLFUyddhqSxA8LbVabQhi4tNcjochVwVK58Ti8Rt",
  "key3": "4z39cnEb317GtrpPvVHUrNHTJgoPUHLRKngjCKuwCyKVWixWJhUR33fWRyHNMZKZaEzm8Q5mCbE1PP1PMpqQwb7m",
  "key4": "gEYSWgGrA9F8iVibHCXSofFbPsqiyM3iwP9vRRJkVv5Myv6nCQUbVGMrJk49v5Wgo3TAPTDM4XKXBKG3w9AoX1g",
  "key5": "67ewTsBKS9o35hxK43FwVVVyXo2MyLsBC7audVz4XjUjoPVU9e7TrhzLthLQpXxWzi8b4hydF92bwMWoQK2NGgxP",
  "key6": "2d3pwh4BCdDVo3L4dJUQjiTn2gobPygcfKA6xtEmXAVdnm4vYN7hbYr3aNorGrwWQhH6JuNLULB814q5GjwELSre",
  "key7": "5bD1FnLA18ne3j2i2wTryasaqsSNc3KF2AnMu7ykCAuVJFGmwm8siJLwRsFRw5jvVsnispzLqp2fG1adWLwvzv3B",
  "key8": "3UXjV39ysZmBnwAgPdYRvSr7LifaFLKTVgKBZGbKSqv8XP1wcveMDhh18is1EkbXySBop1ohCWHiTjG1tppsGduW",
  "key9": "5ihuMTPVFCCTPop2Vf1LAYz95Rre9HfUScPYtvU1ngkADZFstRrLefpEFRiT2oWCkiPdkjqzeA3WsTADgfXFphhS",
  "key10": "4AByDqT9MsC3mUE6FJpRMonePbVdyyk7LKMVeMEmTn4xnagk7dmt1PTuh9Za7YTutxFdQ6sA2unz587K3o9Lb7dm",
  "key11": "44Nd71K5w2AuZo2JYjNvxCJhi7yaP7S3aAQiWDNx9CHqusbo1aSCQM24CiyR22uY88cGS6F9W2frr4yMN5FRsZgY",
  "key12": "3deDbWoi8rJ6bfjmjeeehN7soqWEvPoaPtGvA4iU81azXjQNeeANqo11e26XoqJphqXZu3MhPY2D3997Rs1Tpyf6",
  "key13": "4ASEcM6FLso34R4iUjxtfLzZVJ2v14sgkUubnb7itHp8xmRTGMh8NpoDHYSRD5twtq42PPeBUKSciAN753X3GZHi",
  "key14": "3BWinTgLctDGNmU1DCA5ZZMEQoyv9MejHrzgx7ygfvQrzT2yFPTWvqNoJdjJ648Qg2yNygoEAwpy29xDY8dm83rK",
  "key15": "mBRHnAHXuP6DvVxN67gnognkrydfutu2hNW1mWEPpKXgZdEkNk2cQs7K2E7DzQBzpMXTb8tVmpyF9WnehvR1bR7",
  "key16": "5v2gWk2oEN5DzWWunJyfy9XBKDV2MGcwrgzBC8DBp3X5kjCbQFXNFHjGaLTwRrftqUp3HJJzaCPwx9rbtYsuCd2c",
  "key17": "21BZpgKAV5oxeaGPR7opR6sE16pR2xBy5nN9ysdhJFQyYpM8nTWPArfa9ZwvkyuUMmMwfURXGJZceSSQRAxM4RYC",
  "key18": "51PdADWifEVHowwdMq33ckY5hfQoFHLam4MdV9CFjP9YhzvF64Q2Jmeegssc2ZdkSimNMMDFxjCZxZDYpRJKNy99",
  "key19": "3UuL26ewTagUaRYyYUz5xZDzkKkywKFjyyTAUoLsryvMmtuScq22x7hUNdJJvJHoFGzDKQA86kJ4PcBDsBvcVfUL",
  "key20": "61TR5vMrodHFfqkpSAcY7tzmyAiZLdK9WJYLggH9jt2AKT4mERtsUWVzN3k33Xsp7waU4FQ9W5heRpK2xaHxYv5t",
  "key21": "4YRZC2UCVwzgtHgt6d9svGcxFKamGvBAnHp4fjqMptNztRBjedkSyVnby8D2Yvq9g94LmEei3xjP4UL8RWPyCfm1",
  "key22": "FkNLmWPT63ebaM5pvtAKZr7v1vmGxkqYBY8uXcGec1zEmXjpfiYjb4cbJ5cR9jyA6dYAznk83CmdwCBfnKeiV9v",
  "key23": "3wkGtGrJNCjSpch4QkQ1q8QPdzaUe6wv9pzAGZLUwRYqLUys3myM2HthHS1rZ9WGg7Yoyv2wSjaNHD8b9r26sFty",
  "key24": "5KMRh5obKaCAnwJvXmP5JDKUKARCGgxQTjK5oEjeppYxvTXDsicwqvgtsoFTodASCkKB1inrmDcqBRekRtvEyWFi",
  "key25": "4dDYerV5FMQfVKgYZXDQntPvVM55ykA3azpmmwhVhCZMvhXDbXwBSjenaU6VzRuHZz2LR3Uf3hTEyoidEQgorzgT",
  "key26": "2fQLjmp39HE1yAdQYsvwMtcgNKwb4VYtWdr8diAcqurwPnVczvtL6ZTYdXRmGsiqJwDXjEe5ymAkEn5GxqdLyFP6",
  "key27": "4VYrhUhfhWzKnkJmJ32mJ1dv5ZTv7RkA5mEv9wHESVTnTZge6PMvLv9jqYiFotsYk8FeD2wL83xqQY8cqm5LqJvC",
  "key28": "3UFHju3Q22zxQS1qu7EqeTYc9QvyDwUisVWvUs2fAKtSU3FdhWfTKUyMazVRat1PX9ABJXiYK5RJ8kQoZc7D1tRH",
  "key29": "34Q6YwrJyXTZjrfFL6rGwnWFgaHm5UhS9Qc9YvRyoACDRH8T3x5xHnv6iu9p1hi84VtcVUQErX6YX6Y9zkvfdjDA"
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
