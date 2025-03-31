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
    "3jo1bNErK9NevLXqRsi3R1gxy5mCLau9d7aXULh58cDw9R7ahw5PgiYJm73SpJj3Qtd2XdcYsVAfK8SjnQhUG3ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLqMcyMiMr35GPgEFSauYF7prLGMJhYDA2jLqQVSwWScscgKfFgEDGsmTu7Eaby7tqcankJEgbbUT9krPrWg7MX",
  "key1": "5RYiJaenjJKSHaLpRM2vCfw5uYW8sYYZgz5fwKjxNYoo1bmtwKm2eFU3zMwkZGRxzyv7WcorzKDp2L7uG4XUNY99",
  "key2": "3piKKUZ8GmdW7dd8VbHwCTfigG4NwLq6oPEDRsCP2detPxDRBWzvd65gNozwP5jfyzRNawXKfD9SoBMQN2gyU5Wk",
  "key3": "3qWDqWe5DhU2oRML3rnwDWf1CwgnygEN3RrndZATRdsrWbafxHpwihkPX4egaZmSssHPQRZU7j1QexNdaLWQuhuQ",
  "key4": "5sSEEZUx8J8xQJNpeDzxQeC35DL2DtUrS3PTdieLchf1eUcBRk5izYML1RkDzqx728iNvsAV9s3FzkM5Nbf39Cg6",
  "key5": "2BcBLWYnitt3irLK93T7QMprzRHErxsaSrHmruYeTqaQPmRdExAPnwC31goSytCD3PArQBJH1PtyE1g6U2g4wZ4s",
  "key6": "4czjTJy1SHpA5v68487b4gHRszCSJGkaC4WeqrjCdVm4s7z2BeAdgzpu6bioEM2EGxjKFjKyyrNq2PRJB5UMEA8n",
  "key7": "4F7KEa9jT3xU7FXBQPwtHiFVrjYGRWc97EK6igF1fUU7J5gimAkHa31yWNSCMoiFPDXKAHTC2rx6oXLbdYuxMsox",
  "key8": "4x1fWrRHtoTPMp4vz62MFCFMtyFmMUBBb4aaLgRuMhBYxBk5fpaRHZ2D9jTwHjzAULB538WDyrL6iSfXpRQhSz6u",
  "key9": "4xEsgtKDVifPxCgV9yXJgykeRGK2M8Bxk8UGCGy8H1LK3kNSub3idjqZCGuXf4mGZPWGxeu5n4MPQNRvhMVxbehM",
  "key10": "3cpZf2nvaRHfaGmNMrpZ7Xy6JFkRQzHk8Qi1tPmbdTNuoavn3CGTHJwCgQCnUUWtDJ8tcPSYnMm16mnkZGiHis6r",
  "key11": "ccxrJfqU7UKMgkv9V6GwmydVEs4Q2e5eggKveqpvJWW2eVT8HB3XGhqx5weLsfzFZHu1khkRqqbSJcJ7o1kSQEQ",
  "key12": "3jJLTvm2bLAaK4UUacNtjDxLJQDACRjVjfeCcwhpk6aQjjT91PBBEVvqZx1pZpZmnx7ohtA8pXkNrYMjv1CCjZG9",
  "key13": "4gprsomhhLEh3kNHuYQFpoC9SkGt5umJFwfKipXs77axLkZooXAchAvSinQbK1rVW3TTwgZLToBxNBnmZaxwN36q",
  "key14": "2zcwAktw9Y61XnY8YJqsa4jeWtanjkxWrAxXgpJUcDLhaZVebmus2bsopmtpvGCs6tJFbFaPuWP7ehoifCKCNEph",
  "key15": "3hRFtEY9SADgFuqd9WjLZ423DWTt3x3ZovTo3yBpZnyMC3gEiq8hm92aqPnyB3EzdCsekQgnZgMF8mLgbB5jzbX5",
  "key16": "4fibNWTdtFVRkPuD6rjU3qPs8oTuXc4RWJHN3uY1voN1iXfPvEbFAGZ1W2xAUNcmBrcgsNziewvRpmea1TH1BVu3",
  "key17": "4FjtwvyPwAnP9NehE7ShkHS81AdK3yTN1rmbb2SUmbLfu4ugbUxP5xBRoVAm7qnkkFWnPYf4on8BcjoF4crZMb43",
  "key18": "5ARAf6YqtZRTXRw2KcJBGspghwEsEZNY7f86wGzZAysbMwvCf4tMCCzuF3ihPU8jF2ChhrYycnUUZvFAvKizh1Pr",
  "key19": "3KZpdsSRUwFzRLJ8LyGMFXUMvhBTuenr272dVrLn1aQrUk8iGgBPJCzFGXEjqdNTT3mjrgv3kksXg5AioZgN1ssP",
  "key20": "JBFwbgPVJgYMfvE8uML3bHBpoKZU5TdVt76dZUkKsWyCUv9vrmiZD6fN2L3uPU8vNxdEQhLWv5khuSUXNHBTrFt",
  "key21": "3BtBxkUZw7jB5NasjkSERjnUvKhvTLp6eECWB1AKMKRkGpupE87W3XTTvF4QAgMTgM4dEuE32asLXqGkAog3nEPy",
  "key22": "57NCqqgQEw4CAGFruf4YptkUNaLL9WfQirD5v7YioD92KMUBZVYgz4LvQc2y5zZcNNLEd64X4B7GUS5zvvN7uZy2",
  "key23": "vPkDCYS9vY5DheJAVfrE9gRcJBpqtHnEsTEYwjSqWu6YDNNgCcT16bsWd9wjncigBGxuaLJQKgmQEuYPUP6Ymcs",
  "key24": "2A33jt6chBTQ3Mb4ABWKpFGhRGHhUVAPv5vaTwtGeWnmmXV4mRZ4a6XJp17XjfWXTLSAkiqgohqVffwzXXUtEidg",
  "key25": "5Rh7L6fYy6uHqzqyzqWbiyidH5rLodTZ2FeH5WLhDwrgnBDGvCSvk7tZBSHp9tLMESy6ZM5Lp6TWEAq8A7JGU3Jv",
  "key26": "4tLAPQKqojQPKhgjkW7284yv73uz1qrwa31Q5d62c8S52izJ9RzcefWJ92Lft2Z9CzWKNLC4fDtdSAfjU5WV7Utk",
  "key27": "4F8XCb4smqqBt7xyQmP7FZoVXbCNRJep1QUAn1uG2M61UjqS4Jdx1RMdY6b6ZBRjcwjYxMAzNoF1RmqUkWzbDvcP",
  "key28": "3ABYJVfHNv3iHXrqNvECDnm6WmTWqY27vuStmkvex6gk7YujXMQYgr1cLufeDwa9v3zhQeR9D3txgZzwY5xmDaKE",
  "key29": "41Aq72wHsBhTLmv4FDrC5ujeS57Vq5j1hfwU7yrHJx6RG3pEqCyL8badssTEbjoTUP5peMz81WSL2bogY1er63fv",
  "key30": "GxKaeGGNiWLsSD5UujtSLJQETxvUW7KWZLtjnddvMQi7iTqdKcKrpgiWkKGHkvPgq8Agysik2mgQoZUahjQyXPK",
  "key31": "3dAyeB9S7fEM25qFj5WMWZrzSxYu6Y5kGm4CKtACwBoppzMzVARJKvjhWVNiWjwG2JUC1oqE642GgA8keKCJZmK9",
  "key32": "54hHh77LFPSjmcd5GyN5tnPDqefFEupWXMbS4DG7JrHHgCcF2rg3WWi46G3eXR6N1UciLM4DCHEsHpKeDkjGHhE",
  "key33": "2YHs4jyANTbxsSb6YrnvCZNCd1WbW2qQbtAGKMUjXNKcRJCihGz4kHfTaAuzm6A9jeAFXg1UpUeTihtG4oWHsY3s",
  "key34": "29THWgqqwF66uPMY64NSUEP2PfQquWyYFqbBL11gtTA76y5aHFqsTkcgx6UHK1isysM2PEW6pScnZ3afPoP1tBth",
  "key35": "bGbzf2TygNkAn7BvDVCqWZCoLTYtZmptCKfZEbzz8KkmhjfhpsnSq6gTsNmb5HrNyKfAetmRwUguT8UK4PQzeYe",
  "key36": "2jWaRC3GPV8hKnKZ7QpVjeTrqpDKtFPvmHvqLhWKqUCNKdZGVZ6hSNGvHy5ThmzsEPzNJsuw5BpMLhaW8bEnxdrF",
  "key37": "3WhQL2sRj1qJzQkPmQscHp78MfZBgLtWnsk7zeSAdhxyTNPzxeciLCXSTBcUV1tcSNt2P8FzLqJ1SYELtbf8N2zf",
  "key38": "2cMr99WWZBjjmZqwzEPW9gKerEMbNuXMZPQEh8WR9Vsvcifo9ECMHw8AdnwUtHxZouBa521Tq95mywnMdpeXvYps",
  "key39": "4RfbRufF4fsQuJh4X4DKFnvkSxFz1Z4KggrbrKm4awa8bdGfcZtMBvcEZt7zKpuXrPqMQ5FRsG2vLkFhiJ5mbvzs",
  "key40": "5wyKrchzEtg2EY1b2vNzaW2BGHxgXagUHeepNAc1vJsfxAA3noY6R23aKPe3w1n8rRqgR5W8XP7AtUgqgZ6yz7Mh"
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
