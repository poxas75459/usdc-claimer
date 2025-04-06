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
    "Fq1v9KxnttetXcm3W69UnRLLB5tvQ3oMZ3YBo1UaoDdjCnMeQw75rw2wnETrGVeZVqyQPdCbGRenhZMrHSMfase"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NrwzxBH3VuQBBg7fMsExATpDawwuqytBEW3jmKxZ1pgwXqVwvPard1aXr5RQfhsM1wfrUK75hDQpVN9hSVSfckN",
  "key1": "5D9rVJL3FNEpFkX9SatoixnNBFpu3CrNRuD3hwmCu9JqpEg1zMQ4RYAPzYVZZUuzUYUqPFYUJDVbHzfZCLeEFXLi",
  "key2": "54Md58eTgW6fmKWGZnvkgP9RP8fXNLw3XQWaVDuEHmopi53kEyxyiLFF8FweM5WXR7hQL8y5zGpT7hAxTkMSt8fr",
  "key3": "5SfaQf5ZEYRDcxs7voBoWGWZ3YEXU9mhkNjTiCdB5iDjB7anbCuZa1D8HwVfC2xVk5qrh2cwtgo3EGA96gnaRr8M",
  "key4": "cJNN58BvMNrZvERWpqaN8VLfpUg9Cr1FtZP6e8PBL5e6zMme4qeUd7n6wGhkf6VkZMdPjpk1BGB5qnSzdCu7Nxt",
  "key5": "3csUG9M4eW2ugK1FzrKb7QwxLawQm7Y4oaaGguKyiL3RhN6PsFKUorCrTuh1aiygMXwne9Q6BaqSYSV1M58bLd9W",
  "key6": "FeHAeie8nnauCSKDDXvCzbJQwEau9JU7GbnmFKMfy1uxjbGDP2EJKmkYan8fuFRsSDryoWa3rRfZLBvJNZWzkzu",
  "key7": "3N3hYFU9kjxMnfsyCsXpjAnLAwPBqeNA2hjkW6FjdLbBrnLNz3nZFmvN8aHr9bX4BcjnqnGhDUvZjedKnMzyowj4",
  "key8": "5B5yCbJbUyMab29zytp9NJ7Z77GcNi5Cty4xATB4PtVB6oFzkwas9AWDxik4LXj6jnqEMYutLcxTAtLN8EckhBwG",
  "key9": "2eToJixDXgSYwovpFVPtfHNsJsruBwBJUWANH841pWnJEFxt9aDcS2dCLNN1tFvKxkHFRyXP1PAqnQud8kZC6wWu",
  "key10": "d11Tqb24DM7tdGb16S7t8ohREwrVskJn7Bb6mZSAfcdDfrFjsjw5JQYj7AJ9g7qouMRwcigGyohA18eL3RmExfC",
  "key11": "3kP26jLdrKE1cB9WAPHya3KVuBHkM1FWZYWNEhqQzMXux9mYmHBVZt2BhtvpaamW8R3fAG2yqVNwGrhSW4sBfbEC",
  "key12": "4hrKgZziVWRgsbzEyudp64sLYSeYUDpoUeLZbRJHCP6dwkBzW9WiugfCKed9FjSeQJEZ8QfaRBqwBfb4vzFAXBgJ",
  "key13": "2TnE8sGmficVTfHsTzs8ipXZmrcR114C9GFqUEz3wHsQo95jw9K7kBmA3ATebNGEhvWVQhA11nP1r8N5wR6pUB7y",
  "key14": "3jknxzGGPVCzAd4KT5T8Ydivzwqxb2ooWkTtfhW27E7Noz49pKiHh5kpYnsciuRBhRRnEHmYQ2MFZqGwYhRqaHmH",
  "key15": "52wXNjyLARZoasiSmvdkY3iDrdM5Vxk8UdBMRzPHPyn6jCfyqHngaDFqnPaErkvDLGpLMGCY6roeSPuJTmt4Wuc8",
  "key16": "wrHpYfW2BBQxQyrMd6hHcWM3wr8dUgiEWjrV7F4J3WaN5yU9Kok4mDwEQHsh5vAJ8L6QNaA9jUriiH7sjahXSEE",
  "key17": "53zvgJQzJ7hSfqz4xc3ssmKiqfoeLYMB7mRn5beekRZtmCicFjSqAdHsGCoLDbtAbZUSiZdWMKTie5s8pW9Lvk79",
  "key18": "3XXKjZKbEnbWUCksoBmAthpebS9afCUCUNuvMgZnmtVhrUcNTBSp3aanA9N1HbGeaJ51WdZDfnUpXCfgvyHQyLgi",
  "key19": "HSjwicnzHPhf4vinHfS9rUPMvLNbDuwRmkze6NDd6T3ViFywdodSd4DTBTJLPwHLy5xSRq6RvM4tzVquKsjWzzi",
  "key20": "447bdsYhLo3Q6EPAWVbTtVf5KS51kSxhP8zGm3jxVojbf1yD5NYHVWamYKt5cMyooBq3e8nLV5PK5dF1J7nuN3TP",
  "key21": "5SmYwgzHQNok43rXuHxEccr5vg6v8xcepmXd9VtvPPLSo8CwSZJhUv2SAW8DFH7ZdZoSkNsdoy3mWHhQy86xX9sy",
  "key22": "4LcS6x9Mxjyza3AqgTkaRAV1JgExQBhx869ziKNuTFG7w163nLSEcQQqStTup5qTxmCAQQyQx3VbjNjK4QmPPQyi",
  "key23": "5NwqjyfTT4tQZba53WfaysXq4ByeL7Wk3K1KSQ6TDT5KyLLSBFN5EmgjpbrAazYhyL3DMV7YHdEefXevBJat1qWh",
  "key24": "5u2GuhfizXmac8xkKbVq7rNm24gWRm4nWA2wLZ63WtJwZtdmA5uyGHDcmWmfEfCFnZwEPLHTFhPCroEE7TXD2aqc",
  "key25": "9xjt1yfhSppbfq6MDtV28p3cauyuheoJmgU69W1YWPKmay7E15zxhext7vQCu2iPiRtYuFNwb1Gt4sSrX19AB2P",
  "key26": "QdbJYtYmnExkdZ8vhi2PCCN78AeiHZCUkdDkWnkfUF52Hkkwytkz8n8s6Gqk6ruC3vSk6ND6K5p9aUda2zKPjs2",
  "key27": "RKKUV8E5RtReSkEdMgYsAu4V35PUr8GBNascVaBEkSWgEGQtcpAXPvmRg598t8CgSTLjKBJukCFNxPnoMZTQ55p",
  "key28": "2PmaETsUPKWWPJT56RyJrjDKDCgvywhfa8qs3FQQXqRudWbe76XjtctTE3rTPuhabjd2fSv7ib3Z24myViAAiGbu",
  "key29": "2aYBVr5kc4ZxbRQkosPnaFuNSgEGwR1AQWycEoos55siXf8P68VREwoyU8pvLDGyyrJvj366qZK61jsspjg9RaS1",
  "key30": "7oDVuXGxCY9dLY1w2mfhj84eg8XtGLiJqKaPNvwRxaGLQYoMDumKNbpwSDQBBg9SwBqR1EbmT8o31g4AGa5QNvp",
  "key31": "MwAP5nGqYAsi8qf8TX5S55r2d964Eo2dXUfC5F6SAhkmcfLW6aSh9ULfDutDUGDEpbf26QPjYisYzLDmtVXXsDm",
  "key32": "4mEJFdNq4vsn3eDDBmyuZFNihcNEN9PMWDAcWSweaBuHx1bW4RuahkwSPKQX3URGDcXisJy97ukhHp9jjSRbRkEc",
  "key33": "5trFAa8bqcYu3EfbGgKUqVzGRHEvTDdf4yxbbideqGaEHFPUm9PjtgUcEhWbjUoNeZCbRCEK5GeXqfvjFwMFepAg",
  "key34": "QGqxUgoMeUf4T7EhrETGAWc4REqsC4XyVQ5J1QPoPgVSpcTomFdoizHDMvGaJ9oq87M3KXdj5H8dsmmPFVv5pdX",
  "key35": "5m9rwRq8H8UUzjzy5artVhCTQsy49oYZzsfPjndyFq8DKyAbRr1n85Q5kSCoU8t1jARNFt5HWGTZGomCneyV4ogc",
  "key36": "2wHZWzF4h3D7NL6NGKenMaNV8PdfX9hNXBU9shyYnbmU52VdMWes1ZB3iWn4Mo8VKrQrsiVRKWoLytmv2ZWfLSWp",
  "key37": "67Ev548bNs1oEBcxfpq8yV3g6mHwUr2fPGsC4poCQw5Rm1jRhbUpKPiiY3aogjC6f818T1JSe9q7ccqntkxczzsJ",
  "key38": "XhuXMioUnvovVPfBVAhAKfVfn4B7YWNA1HMA3CkDov8DoDDxYXoTUUxwE2MqZ5xFDNMTgqe5USkUZ4ZD12zXU3H",
  "key39": "4FRvJitFjonGp9qRfVo7giu9WyLd2VD5brWzFA5xgub9nXvny7BVinyy8xczyFzhqSdAWo4ESpfXgqDYY5E5Rkqo",
  "key40": "67k9SXdK6XZnYQcUy2kUFBvrCiLjuzpGUQ7dpJstxZ2A1ZUqSty16MJGjdNzLdHbu6KcJiNv8nfCVQJBxKNUFMUj",
  "key41": "2hKMgSV3MCnjibQZWoV1vN2YLFdMsVPvHF4TBEnkepBKTTye5mv8h4eW53Rkb7iP23HE79FSggVu5ChxJH6XTJV4",
  "key42": "3LaDN4kLpcx7pMTQxYZxyZJa3rMRuD2dRDAnzVENEvxTzz7zHQZzXJM2LqEAnStvtpBpWFC6d5ZQ5CuWJDnVQYua",
  "key43": "3kDGSA1KDZq6JnPNqhtGw2mjy1hBvMoqX5rMQzzZbu1hVg7A6vdChUPP5WSd7WhqYSYJR94RHHnkorV6aay5MnxD",
  "key44": "SpFAnxYpxr5LuLb3ziYgwhxGLXseYBC3PjcuyWcyCJ7midVroySGQr71WxCi546mbx79n45F3A426x51LH3QTjx",
  "key45": "3gNU32GEj3yWdYUsGuXDqsE9eXvwS41Pv3Vf8FVRF8V9rUcAAm9TyYyN2TNwrEUc3yXkcUbsW7yMMm3KA3NPbcrj",
  "key46": "57kEo5x6bycYNYT2Ah2PtvpFNKE3Tkdsw8kgYRe7vN9Nu4vy27oonF4BqxVjf98247ZVeryVvpv9icNyBm1Y5RfQ",
  "key47": "2urSddscKumSA4h4vCSVhnSJ5Ss5qfK9RGVW7hvJkQFpghMaPXt1otg7iM1riD2SqkKUCQ2aXWAoDv12ymcpNwB1"
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
