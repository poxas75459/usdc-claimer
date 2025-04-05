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
    "5yqdGz7g7EfivGqH4sGbUeQJT6BnhQXCDuum9892Fy9Up2JQvQnbveNETTe977CQMwiNj17xY19QFpqhUM7hcz17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47GP8eTTy5hnaTaBqTrM9H5S6Y6ZxurE4LJyLHnRQvuL2ssJfTzuiiZfygbiLtmfHfSHk9PPeUbcBWqNRKf8hEji",
  "key1": "59KX2qVAa5SP8e7DVE1qUZ7nWSyxxhUw8eXHpNr9LEg58pEWQWoBZUJQF4DSevQm8GevkwNTi3yHLqqWe7GBJh5w",
  "key2": "4EW89yJpmyhAXJmGgSXWrcmFFoY7kSN5vgvz8Rzjb4UynB2w1XcLrmqZD8rwtYr7i4dRHbcjT9DnEXwrQuiavQF7",
  "key3": "29QQULgQXhJzma2Ev2rRwGc3cnvbCd5u4NAnYUhFMCzQKD5VVqASX6AFfWRduRGdkUnG5XQCvX54c6ZZJFdtoWFq",
  "key4": "4Ujmqpsi7zGaAT7cDKwfCQWUwa9wysiwJrBBmzTHVP4J4sgwFATURMT4RhRxCFFFJ5vJ1XymKkj9pr5EwycjXdmq",
  "key5": "gdA3pcoYRcmQD1Ecaiaxz6HNZArPWw4T8HeQqinRRCajLE5abKo8oFBD5B4djRMUrqrhnCnWJ8MNwtS7RcW1ckc",
  "key6": "2rh2awRnP56o1Z74FF9a2Watwzd6vKDo7g2ZEknv5cUh8HhwCbNspEsrvXV64UGGJ3YEKEFiUGez35KCLnd2w3JA",
  "key7": "4reE6GKMEmexFNCgnYoeMUrTdCAumhUJFPNNyNBWEQGDG1Fj78iSfj7fTpJjHuuX92yvA4ybYpkDF6PvbjUKTh1w",
  "key8": "4S8KfodAyNXowcNRXZZyXQz2K35AbNkrTH4xn1JsnArdvhLWWSCt9pVZ5dwwrYE6LKUShdqMDSS38GthG3V9v2b1",
  "key9": "3LDLehyEYYYLbxcpp7CEyZaEePs3agjngzdVt8ct5WHfBDGRR8Su4j87EwSy76StARYpZizrdPxt6PPhjbmjWtLf",
  "key10": "46UpuE3ZAWzsvrAA4rqCHXdkGY7Cy4LkkymA9jvm9Zy7X7TDL35ZqseuFuduFNjxN6GyN6CQs9HqPQnUzqRtTue8",
  "key11": "4wzXZ6xgmxkjRTjMsLpycJJn7L9QVFYsyQPxwKw8vVchSTQLiVXGZVUf7f213bpEdaZkpZXo19f7BCdHkVtB4qcZ",
  "key12": "3Y475uKQVwG4UW1ttuH768WAAWsXpKQpAG1ubpRpCs1DCrBtGxJV12BJ65jQDiuhzqsZ457g1PoPXumht8uqcQiT",
  "key13": "4QCaLpHcN6D5yo6GjRmC6KksqcsB5HRXxBDUJSrGdZzQvDmCoXnFA3Z7Lkg3w4JKfkPD3tm6tqyjxvHHsKZuUQYp",
  "key14": "3kYqz9QrijDYiY4JnxB6F7WfiomZjgSvSv7wYP9QDJvjqLV4cDojrHovebmkn8FHE2srDMmcnCBpmhWA5rSxV5Vw",
  "key15": "4LQ4CUJUk46RcTdpNHtPxZinrBKcahm8Rpos3KxLpWK4L4Hb7ULeQcA3izB4EyBEanX4sSnU58r8APnAgNdmPCtz",
  "key16": "3AZRAvQuUr7CLxz8FXsQ5iefL8bop4WXSFR1HLJ3zjeSM4kwnkQ133c9nQgcReeqDcVipSTgK8Emq5J2MEPisocm",
  "key17": "4FxrCZyoBZdR7SuXj2wkUWgLz8VM3iV8bXVxJH4XcTd4xV5YXwyLgdpEhPF11fqakkKtXvVAiML8edv5UBkWqm7H",
  "key18": "2RSteJu94Xo33AoDcc5QFCYtxQHnHHtmUxvzCCa2N8sowVLkekUK7ojdnAuV7cNtjxdde4onHWgcZemANqNkaqGh",
  "key19": "4uuMAxad5VyqVMeXit29tz126bveHYz6E76D2EEDz3H5gLz4trHdaxvq6deq776Tm8t3LRC4siiSeQLRzg6sNPvz",
  "key20": "5K1wTuPNjwVdTjd8XGvUrXWSNBwEaFPYAeKbuWu8AVwhcioSj1JbMcu6L5Akz4kaHY41xn2R5Ag15kd1pvtFbqzT",
  "key21": "3ecDiDXxF7ZR3zP2JvjPBEzSPnC9eK91SoyjaeLDYSLgEUAw5cenQfkKXx3Q7rQTYvvs3VjhCckPtWoqfZ2xQVVC",
  "key22": "4Ma1JYMSLAKRb5AHqkCRDA2EoSZqSZpDZ1rVx2tDSL8LbDh2JjNT1Asfrf9WJceFqhu2AGKpGrGkS9ewgqWo9nHc",
  "key23": "rLaxJ4kr9LvcsbnRUgnEr5rbKMDxFHYu1zQJSh3fT5moU6Ky6sHMbiytYxi2ri5i2wi3PUp2uNS2gMHBawM6kqm",
  "key24": "57n3xtBWs22j5sS3q67BX96aUvguoTAUmgWLCi97yJj8UvM9Wm2j3caPdCMx8JdKi81h5NcGMCSBj96PDSnR9M15",
  "key25": "2MapeB1VZLHwE9uJXmoVTXnjSXxQFvYUyuZiNH4jTVKjLUqTBcXKsnMW7q1789CaJ3k3i6yQhHYSff9qLT4ywuBQ",
  "key26": "9kNdHxcsbcRLfphdFnrzJSDm4rWv4w21e5Wk1UoPpgBNDCB9a1VDap6PjpcZVeW4Cri9jpeUc7Mjv84uLhMHmQf",
  "key27": "2swY5V13qnkFU3qWrVeD3NwneRzkWgD7cN8QeeMUoYpkgEFdKQgHckWYDAebrPBxN5Xs7K12yzs6ogw3pgCpQgNJ",
  "key28": "BmytKcE1vmsu5CkA131AnDwSQaekD86536PFhaMgTvTR6LuzNco43kCCzeMGuwk1Dx3VXTMVvVkFD4eFHXQMs68",
  "key29": "4DF4BxTfrTZt28usFStNKmQpNzaw8qbQLuDMNQgYSe1ZVGNz9xb9XjQf8MES2U98jJxY9HFfmQ1yK63wiNqEhKfu",
  "key30": "5ywMgcVuHvyaAF5o8E4cpjSVhUquQ7VUB3ntgrJ7edxtEbKssSU4YZ6GQhxUsTjBgsKEVUgdJWKr2ikfPQVKxeX4"
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
