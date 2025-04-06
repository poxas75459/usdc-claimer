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
    "5cHUycYjq8nnJYeraxQUeLd7mnThF5Sny497aDbCcQisQ1GbA2Xn77wYzSpCbJvyoJK2GSG1vXXqxz6qsDu8f7vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9Z6eEmNpZCbRNJQcbwLrQ6w7XVRAp54zgjHGyCoyw1r6f8AjS3m4Z7yuhhzsaEa4LcYsz6jVJipXz6A2ZcbLcV",
  "key1": "woqCrETZ36CM5vsfEsTLMwqxLt9dttR3zn4xRryuGJEm9tk3pqFJ5FywpyHMG39VpxVYXZnvNnvoXKvGhvZi1Zf",
  "key2": "45CfH1evdZjGodT1FUAj7KMvvZpALid4Df3zBUk89XrfuGxpgbgJM4MiFnGMBFmFRbB82qZUTsAQxusE2hVoZPne",
  "key3": "21KoArbBAoBmhGxRXU5MwLc7iisiJdspo2c9nL8GTtoqdrZ2YwyL27Eiq3wNiHdBMazrAota1jTtEDSWW2bioezC",
  "key4": "5yLbzuEXbMbJ1WBJdTm25x8hkfkuXrwEKE4z5M1HkPfMYTPVpkpuF3td772UXf6URStc5uifXwfjtGDBWMXMESsw",
  "key5": "4XJmKtnQuCV8773nBLyXzWEwdiFax2syCqJyJLCcdkvsAA6pf2bjyoCAk7jR8JcbGoSMzki54vLghXboFg47u3SZ",
  "key6": "4ACprUHtNtmqXmb2MWb1QeHAqUUbbLcm74JH5Bmo5kZXEv2MjMFaG3AVYrVWjxwnyK4WUWrZfBUSt8ofKW4yR2DH",
  "key7": "5jGjxuVJHDEwDXyPkch1UAZzqDUAjERvgna3pxe7wQggggu2RqTkGFfVFjHwCtmJRC1bA1rS72Ufbd4G5uNEwBo5",
  "key8": "2fv7S9bTEr149nTbvTqTJGQeDBpPav8uSH9CZ2XPnedjd467L417jq2HzAAbeBDJSukdmvHzCjgDcuyFc6SQANnL",
  "key9": "3fW3iT6W89TYF5VbB5SAsyJFosue9ZSqrFv16wDLUBgaxg42R2YkYzPLhbFweNPrPXLWAkvURB87EfWTHi9Gi3z4",
  "key10": "52NQcznBQpTKjGVD1j5J35kBmk9CmZjgg8kgfsXVeg55hFdk1wUW5zhFhJNibWniBSBQzZaoYncea6mypLbqYWfp",
  "key11": "5KqQngBnfWiET2QvSSng3C4PTzTh4AHhaDf1hurJNFC5Axzz5SFmw5qEuLf2QSwcEavQZwmMeRSBP1FmHbmahC8s",
  "key12": "Pj9rF6gUhkoHdXe3DtjHuSQb89VUYrMLgK4p95DoxdeXNy5BTaNCDZvyGn1EnKvvzuTNYtYzTdfe4PjLYccKvt2",
  "key13": "5nHoPQxCQTY4Zbse2iPmcijaBvNqL9VNDEYo5SxbaRHemTivdieCxBHq1tqdLyeLbTrX5q9Cbhq1Do733cZnkn2h",
  "key14": "z1B9CvwFDcTjGzAT3wgyQ5qd96MqYmHjCRXhBZdv9kvm1bAnsXaoYLgi9uunMY9QMhZhWWyVVrhtbb2bJp4s1YR",
  "key15": "2oKngXPNw98ALVDRkpTYpLdxdSg6KvxF5XXgxk1pwtf1Gj5pzphdVCayncAr5VWgBK9Fx8CBQPnrzmcpfdTw5edx",
  "key16": "2X2hCV9UYVr5GeGZs5sSJVyRLemwLiaGCkipTfurK2mCVtCCnTqTq8iziQfWqAyPQ7Whg8P7J4i46npcW5EYYq5Z",
  "key17": "512a72DmVFHAWSfjZqQdFZDQ7uvePtMCbgJT5FMJq2VynQeh66VRxagcWPbW8xa2cCVc2izDDmf2R3TsddrZEFaX",
  "key18": "2wGhWLBPagPjniTGn5SrzKkSBwdGr5rd6KRWXdJE2HxKSzxE5y7KpQhV5aWrN3NRdodLzh9YvTeq1vijrmfk3n4b",
  "key19": "61buih9q7JRiyy8HCHCxZXYjTPnYqNDJXUoSi4485poSJWtr5K2BAHttL73xo21Ax6TqpZS1kyDLYFnC7UbZCAPh",
  "key20": "5HYcYxPpUFAj6odi9Vx5e5DyeeFqnvaev9PBAh5jyZb9GF3GKmAmXy3SnmBKMKSNXgHovQpMasE4jHukQATiKfWy",
  "key21": "4LVgz1KAQRKWGgptJqNi2vUmQWmz9kZtHfGnuxQkyj2mVJCQcgC3VnWS7XDvCmB2bmgYiZ6KtXnpcaYiNf8X7ifD",
  "key22": "2Fk55jLEFpmrMT4GKuGy6YcNx4Y61ynaZZm4h55Y3GbdKuZcLfxo8eVvKoyXSfQSBTegGG43xzd1kiaGnr8UgAzW",
  "key23": "4xfGrM21pk64s7b1sNt4fgmfPyaTQVG4qodcSihoawgfYJ5ksz82cRYBnGcuAKF9YGu782gscQWoR4A7vdEg43Dj",
  "key24": "4i2tLCHWCw5un9jBK3DfEdNe3Dat194yTRnzWDvsJi5nSUwEDZoziJhbuHSDF7GtMaBwVyXRXYMqeFy5CrcVoyHw",
  "key25": "66HcRrqV48HtgVaYhgG2erTBpwizXTgXvh16FWGgFgmB1kgpv5p6dqFtmBjUUzYUQGdDbNCZA2r8CTzRUbRNQG4a",
  "key26": "3oHZ7mhooEAoQtkotYfMfU4THmmjXGrGkC74Ni4nZHu7edTGUyJGQpQiwySnhfpW3RV3uvArp9v88FntEt2TGNCv",
  "key27": "678skBDepfMkLsopapxLtfsFEgMMjV2vBQncsaHFnYGXnHSBi3uNkN3QWKwJ5iHSY7kJeYgY4sKzu36dkX2bHUrj",
  "key28": "3Lf9i8kv4YPVHRQcpMJGwntmP67Ebe3999BMg5WxmM8KMzux9LrkqHipUEFXRw5ySF6ECJCPi5gbC8RYDYTFqyWc",
  "key29": "2h1PW2neHMVvcSm42m9CMkmB9mdmckdEj5uqLQSATZxa9kJJxRYN78JrYp2YiNXkwNbDzEQi26Uq3ySjTQcSgoyn",
  "key30": "5CAecydKJn7RqcE1AJdntYk5ro9Ne5PwfXbVpuYLJBaRqHEMtL5WjG5n8uJGsdjMpHCbPxaMRvXtdvKDVHkmgcCx",
  "key31": "4UMHPbhQat2VgrZKvVADX4ucYVbo2vPR3GtaCz4cEKwFHVvux99Aq7dtNa7bT3qrLEi5ojFKBW4bF6BVkC92pwQR",
  "key32": "21QJEGVbt1nWx9YP9m8jtd2PFayFtz5mkFqMLczf2X6KPRSgLTVkxdan1mcWD5QCqcn9gCN6XrGe79vhKCtB2JAp",
  "key33": "3q8SWoYtEVJz5ne3DKaAJqphhEBDz2SBYx6vCRFNeYBV1SCrdYdRRc9Juwq1wdLZEbgWxKmVYawAvQmAdHgrz3TF"
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
