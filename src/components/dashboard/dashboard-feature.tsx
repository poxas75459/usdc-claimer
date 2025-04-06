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
    "35VqGnga5ih9o19pPKfZXskicJSFhvzXN7hbRjRGysGs6hw88LnN7DPLc4LzDT9bguVSKg6nHUb3DuxUb1FSpCov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jnkJcmn68WBPNbhVw6HyeM4A1YpuZGJKP1HL1hSgP5NxdZCwg6he8zk783UkZsF7rjTV4pawK9cC3w9schdYzf",
  "key1": "5YnGCqYQuqJ3z1pzvkeCoTXEv4MBgFpWRvfiny48DV7WsxpjimvWeWWUHQddseWvV8zcieTbsaPxpLz9io1i4KEf",
  "key2": "3BHB18Jz7ZgAbNvbmX61Sgm7iuoMrZc29j8zuDx2wt8Cvu1wen8gRbK8jRrdeR6YPo8FpooEshirqkVS9UboAZQb",
  "key3": "3h8sifCphXVrczf8NaKb8XUgUo8HXiYSqzvGSkqa7pxrFFsphvQ6zAYZpK8fPx6GEUBA78CumGBAuyAeiuUKvion",
  "key4": "45ZVqHY1JsY1r6akXa3yCWWqyv6BESCfQJkHn5eVzYFSGTQDMkb5bkoanFpdRNQLjrvCB9D5KkjJrSJr3eFyyAFE",
  "key5": "5nQbVPHysFtwfngr1E4g2RoLDKvtPbD4DbPfBcGBbBempNdKRyowTfYxmrytKb98ZQ7hxsMYhvZrKZRTMiyQXJQj",
  "key6": "3S8AQxgP7SBDuNTHz1TphNNT2f4fSbwEMzTQFzn6w1q6UHkdtLxaTYHGGaYgcH7Gs4Dj67L2YWbLCFncVH17JFuB",
  "key7": "28DXzBPFNkJ6Txwj4egBqjrrtLiXxCi5JpAj98shRHXMp9KxKGt3GV1R4hPsUjiDwDLJQsVq2kfNEBrYFF8xdxYw",
  "key8": "5KqCwf5uqrtWMBNXcCSXkzNmR1daP8QWoNKvLeeXdxokXJ7g3mKaYFJtGibuNaTyG4NBRyeYei3e5QS4PugjbYv6",
  "key9": "ApFAuxxCrtiYR1AqDqKAMs8LJm2cudKKa3uAZ5tYVuqc9pj5Bncb51VUZr5xJvvM32KSQdiihFDkUu9vixXxFqZ",
  "key10": "2FtncYWwA85kJKYnWxRUyj4YfrgeLtW6KAfaTuK9m4CBCkJfZbdVsEFMRTyQWoWYnTStUbRijNSQ4LTEGtDgMBJM",
  "key11": "396NRoxzqegtrAextVv4G255HNAJ8yYVMAXpdBzoWqtTnLYwP3S2JV6dFMYv79iHjb6vFhkFW3geUTG3ikqyb2rp",
  "key12": "2rUXWVPvFgYDZPi8FPPc3SmzSaQsqvQSpewicNWTyQzxAEbNnLaQqeXjL6ddo9qMTPM6HpQ52KHLvjXHp9vTQDvK",
  "key13": "9rHKFrkNcFHxAHr7JZzXwdtX5FM3y3ekgciCW6bMpY2KovgRswRxmTQ5bwBGy5fDNdt4k8aWvRdkaqGXwAZ77sf",
  "key14": "5hrYzoKYB8iHz6adM6ptYF19LmJoqxgMoBWM5Bra86sQWyThPraDWVUtV7rgXuBnDQ4zztdTYUDenJ7V6Vs9P77L",
  "key15": "5ZWWgx6g58vpXivi8GeMGasB1oUMctppvM3vKGNyKyGQ51FVTnhWwuU1kAYG7ci6U3GqW9DAqaYbQz1YzvKDxXhT",
  "key16": "4RDAx3V57WBaJek88kNTfJoMCF7atbiwbx4Y5Mi5cnDYq4BtUX7pCNuRp7nhwDa5fYwe7G4UQT3muNzmb9SrPcRy",
  "key17": "3ykjh1QWMHS6b2FuZu85udsUN9ekvpnr8PhBytt7JEmkB2NeGNoBMHyTfd42NRA3FaTEY6Sch3C2MeBNc8zW7GQh",
  "key18": "4VAUgUKkjNEh6pxJBEbY3dcV4ZyhzZ6BBdGFNgQKLiRxURfX1jutLN9K6Mcvac62bku6hquXJHhv6yhtWCAWFy45",
  "key19": "3Dznu1GVwDKkbQXR72SoNf7miDYBxRGFjwBvV6MfYU7GhvSJ8TRv2VZaYc8QirWKfRNvLAznU6QtQZ2Fj2n3AZcx",
  "key20": "2vBsMnvXggAp41wzLc29TqFuUjkft9vBBNBXdiXYEmvdeFBnFDHRH1iWJ4ATq3ZGf3Rw1Hdx79v2M1SBASrXHuko",
  "key21": "qdJM7CWvrxHNoeT9XkBjfkojKF7NQFQQNdmjbAWgqSmMfUdjaubpYKsHsWDW5iZzaxfhom8cL76mRmCAQDJRBxD",
  "key22": "2Ja8oUJmsBuNZq5T82v4eBSB1dnfm5LRger5MeaCujtmnMBfauyvKPosqCkXPe1wxdzy13F4imQSbF23ft9ZCMvj",
  "key23": "4rVnXaiVWRkQhWdRkXXNXPzzc6QvqWtXsJENpgxLTVtEPHLonpcuNxsGuFvHBxuSaLiGbEuSDf4KmV4kDzEBQyp2",
  "key24": "FUzfnWEr63183i8niffJ9zSdiEEAHws6dbtsSY8ibMnNy1G84QnazEjuuotHpX5DoYAcPC6QgHP4TVxcFwS6JTF",
  "key25": "5gChNMr2dzEdn6AG94yPEsB1TYjtcvfATJgQ2g5yEnXPxv2BT7vsMKVATfEmWNqcqBELB77x2y9RgtK4i5KmNhew",
  "key26": "3xxst3wELExFwazfNUXVbe3GmjUVnd3u7SLhwXSbevgvTFB67fgmxrMJusMigsg1hX3NAUdCsvxoNbKnqph5RtUb",
  "key27": "2NL1Xs9uwXps6LmdHV4SL1wkhp89MhY74UeCGyBcCXp1EjntXcSexYqCMbrD5ZRGf6FrQoJaeU87q4pdX1HbYb2v",
  "key28": "3zKV6muXVu79ht6sWaTdvLmsiuNrTVGvGUdH9nMA3FTELhDxyWP7N5rRCttKwYkMf3uFmduqV57fnF63GpSdQB5S",
  "key29": "47izb3tRbq3qPkjJyTUJ6Jvs1286a9uY4yCZQ8MdA5PqTPD3o8vcirvLPUnvzhs8Ue8EBcJPoj2zwgtucogoTUbe",
  "key30": "5Yu545gqVUy2t7pSRxmJLpE1L23obcn7gHqxqfNeWbMT13rBKZ3u4mUPeHHgDfM5623sXbCeJWSuGzpH5oG12phP",
  "key31": "4dVwtjswqQuSvbGoh2YxGgFtEbhYqLy5fvYR4uTpCUQBw9h88VneieRaN8vfrUTC6yUtaJD7YeHZDKyHnsPWuvQy",
  "key32": "3KJbZTcibsGimHbAKtDZcTCY5d3KWdAZBvHwFr2gf7givuCaae8QNPnhXD9JTYD86CXu3sWVNU6zVQGLneFhFC8G",
  "key33": "26pTJymDTFWWRv7hC7Q34pqFFFeXHD1TkydwAccQZReNSFL5CgTBQmnFTyswxYvDudALNoRBrydD9tmYkoqnZqn4",
  "key34": "26zsAYBEgsbGngzfQJomyvTUUetdSCd2upbxx9iVmMrFfjrfqvcTkZzKgMPpAbxfp3TYvuLLESBPVmUHmwvVPqoD",
  "key35": "5B1wQZabpFnTMhCsY4RbndtcDjqbKJsED4Ha4SrRMxdQCfLx5LmbGYzXoBDG6dupuR94aV9nUD2CrMhhQmPyiQYV",
  "key36": "3ZSexKsCewrVRquYezbm9EXCn8KqBGCK1tZpGNX8hZV1ATEis1WDucMiYhdcoSbSEit3KYf7UmWEghdYk7Kv4cja",
  "key37": "4JLao29Un7AG9roJ74ytTLjv6MbbAmjSEywSANLGuP13FTe8gbAoUUr26vamwbvki7mR1kR2cpusMS8LbdvAWXZv",
  "key38": "5ZDeahuYv7isYSyRsCiV9ptkbCJmReRtY8mYzrmBWVBdTSZjnWBoemJXHRKBwWdAtiV4jfxxoQ2gTwBMhAtfSWx3",
  "key39": "5MyvermWTwAxsgdEGn1ZeYEzq1nXcpoNtVqTaw99ae9XNNMzB7XfihhtG6sFMAv2a7rXZ4ksyYBPFMCbeWw4bX8x",
  "key40": "5cnQWyBaMAUiWsyPKKtpwLP3Giw1EqRuQBv7DDG3Pkc8txSMrJvP83twEsLnwZzvutUD88n4Z3bR7d7X5nA3bPtj",
  "key41": "5aqLPhzyRWFfPLqPzMj1D4hHyyJpTq4kcvPdQB8zbftwebq6QpQmzKY3sKbYnUGZxN3Xde71xt95twznf9GkM6wE",
  "key42": "2sV1DtgTGRExSxmp65FYRjLyEiup3fZt4pNY7HPXPRuaX1z697jAm5gnTr6pg2J3q23PTq3piRLAQ2qgu2BAeCK7"
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
