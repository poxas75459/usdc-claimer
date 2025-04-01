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
    "3fKzfCYXawnni6vLi8QhtTtLXLk8L5UmKJuV2518VP2JxjiAhdFxhjgwR9QQBUJbLg1Rxar7dnXC5Mv4F6frc4C7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZX9MzepQgPTZgHrkSydT9Ff4FFdiyf1WejkrBbMoe4yx7SC7gYvhMPk6sBSew8B9c563JMZ9g4mFzJHrGSXUJC",
  "key1": "5A5as6thAR3dDcpWnCHFfoeUcmPP97hSoAGoddnR57LpcQMX3jNc8riDopeNNaoBztznCMj1HfBXD6vM9pzpV2ga",
  "key2": "42RdJSf7qjkKc3Pj32ZGjoN3Bxp6CGUGUoFm7AsUMgmKsj3cEsrr3xnuTfYkGv37XBSg8tC9yxbBaZp56aFKBZws",
  "key3": "38dsejgAQKbqWmZvrTdxvqgaVmiGoFBYX8yVxLk4fbvJ97iARDnWPvxeUuCR5ZLmG5y8csndW5qRpvUijQWHujtr",
  "key4": "3cjGQriiGCqHHUxEbimkJNwYaXDLEE4641gtR7Xt6PxA4RgE44AdE2ZGTUbSXmFZnGDR9BB6kBLRPsXUPX2FfDTR",
  "key5": "47B7nmD4qRPQqdQHfY6xwyYLhaSdoGkgsPHYquFTR7jkBZXr5SQ3tmiMHcuKGgTE9fFounVvheXfRofm9rhyPvt3",
  "key6": "m2Vq5k5qQjhS5NDoJTMP4162752stEciPghFxWPFzsUzXnxngWSrGSCgss2skYimScCy9z4HPbhLPkSKj1d5Mjg",
  "key7": "2tUrPP27aHQ3UdkXeWqJuACAqzBaDoqoLQUnC1J47rViaRv38BDzppDynuFMXLgPbaMtvVuyaUrG5uM5VwnFvy3j",
  "key8": "2HqTfHvdzFbMv5Wxad3gUG3tJDbWYnnbRTxGwHkAPe5b213ihcg6ZWngQyy1bUdkQUqnZyeZHwadRwdqjgryH3YW",
  "key9": "311ToFgzmRXeRm92a6cHdzSEAbJzHHBC39dyXpLi4Aq5sMuN5gJ5PTDuqMie22bmkUG9aPrL8YLuUHzSizgLYzPH",
  "key10": "3jL1AZCR19Zhqbw4341NML7Jf1dpLnwEw7mzrFZfHk77sX4QqUTXKMMNzEvBBEQjmgqroV3oUqQwfMB5vPBmpQWC",
  "key11": "3tGE3pCfWyNXQNLUUZEHcTiAaTfCnFmWEhcH1gyS2Qr8iqfKh4Mcw8tPBr7sArgTuvtcA1fmkhYCXy3u2MegayzQ",
  "key12": "63xdLLuktxzLD4HSEzkFXY646TH5LPGju9PmCQUNdh3daR8uXtvsvZWYxVwYubWXvZQJAnXUxR6CA5Exkk9yeBYS",
  "key13": "4nEiLJZyBAexTV5woBbiCy7fKr5bqTbgtxVMSETYMJTo5YCbfDKL38wSozrYLEHp37XskuBX5viDZ5fpXfrmFWBM",
  "key14": "S9g7xHpiAprNtLHhgbt2sQ1MQkr7c49v67kHxweYC3qCS6tmchdiMFuopR5BVjvjXKTwom5QsjipL4xiRfQp1jc",
  "key15": "2qkPNKHbSDVaJPSFKYPgQYgpiFKcvuXErfv5GByBbhYeW4uA3GY2F37SY9z1ZBYRUKnU8xURXVF1ZxS42eM2mSUr",
  "key16": "4Jeu14ukie8m1EjPLQt4Y9D8RKFAy2MemDdJnWaYdh3XiNTv275NRnC1An9cSWYVN6hc3BwFNF8zbJwYGCeCFsAz",
  "key17": "5EK46v6Tsg9ngo1Qq4bLdqqMQeHJ3fgcLNkwVnSSznB4QbQQddB8nx3e5Zc9SPPzt9iKwJvJqRAyYEoYeRTTBSCD",
  "key18": "31bejL4jrf78XWhzmwXdNS7Dmb66BN5pwkHBMWNQ49KVP9D6oBSJDJXDBih45eXZUbDPFeuEaLRhGRTJ9uiahhfJ",
  "key19": "4xJrtPzx8ZPRv6L8NmCSAmrsnjaU9gPywwmjuMf6DojkEevfCC9jV8Rwm2rweCBMcsLk5yVqFTa5kv1V9sDWPYfc",
  "key20": "543g1i3uCjZqVZZ4ypX16JTCcTuvHv8HWEoeSJWV8DSKnNhxcMYwULcfC8EVp8ERtg7XKv59AbmmVDC8tbKxxAgC",
  "key21": "549gnWQpEMcLMMJook4rVkpw329jPvPKWVtXfU6ZKrAE9paet8MqiAxAzU5dKNS1GmTPgC8J5dfnkerG1aeAc4Jn",
  "key22": "Zg67RTRDNswmT1vmLPqZqqFGzv8zpkGSbDB6i9A8vZAikyt8VF4HzSx5zWsmjVyC7FPptEz3MH34Sbqdd9wzQAs",
  "key23": "3a58G3wqyXQot5JSBeS6qdnxbtjsMWpxLQnq2r7BbHzKZCzvRMumg4togYHPFz77iMWQNZTn26YZ7b7aPv6dDx2J",
  "key24": "3cCaZG6jrxhg2sRGucHVixvyrFCqG2kRFNuCXrbzA55vSkcccu9UGimJJ9nGqwtmtF4thCfpX8jDybfJVTzEMJrf",
  "key25": "4t4PtHWRnwMKF9VkJQKwrskxtidZAX2nv162q22Q2UqjXeYjEtG3cD2VwesqksTGjakFR5TPARUxAUjnWXePNMRH",
  "key26": "3TTJxkdZY4XThw2CiBd6YWKN4wB9cLMWqm4C8XMqUgQBiLNCBbhkgA52tbkJy7ShJgd4Rn9f9FpM1e3HQPNGE688",
  "key27": "Z5vU8pVn6YbUT4seUXAUGtS3Bb41TPhSjn22fEEVTeFV71YsEGDfVUHwh7AZZMGhhxxFCPWzbJ5883z4ytGzaVA",
  "key28": "5QCD19up3LpVyyhC7iZvTHqT4odTLHqDYSuNJBoHHHqNv3goj2UbaJNwZsxNoX1TbqywjqS4MoWqL3zGYHikZTYg",
  "key29": "5uAQBZM673rv7X9kXenaecS5StznVJhLUhVRBGtDNPRRU1NdLnykcgmVtvZTFtvK7Pgmthboeoh1Un1b7Qwb7Me4",
  "key30": "bCR5Sfo3228yguQVhbKbGduqLLENw7vwww42gZdeMBMQsJmd5rnLdYLbzGDkXi5VWckXhtUi6JhcmqgQ9uUG7v6",
  "key31": "kEUVpE1FvicxDyFJnwLvcA1YmTgqh6cxNiGipJwHK72y1daUssu5ETpSqWYtixp4ZPTR1FBHuGVyTvx6T98MqBa"
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
