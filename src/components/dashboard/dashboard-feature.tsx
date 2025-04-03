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
    "64WdQJJocz8W4RSzgMjHiccu44akWCHNsdJWTDCqi44nnEpb8hoZYigJcTNB6y6vC9kfV9vfHEUHSYMJhyrVzsTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9GHweEbxuQroxPFdA2ta9WTTM4zFaxczZ2rbuL9QNHQJywzJx4q76eDDzTVxC1NkCTbckbW9szTk3Dr5wobC9v",
  "key1": "jaun6VSEL7af1YgMVtRjLJYibCbcn7M9CMcrdUMQA5hvEv5JQsWgxhi8xdVnavtsnfH5ciXK3rbTVA3BygbSuhw",
  "key2": "4wntpBSK1JLdVGqLAdMkyASJ7EdkXsWXYNRT2dm559T8AZq4WmT66ggMVZMYRmHi61xUN65CWw9p5LesntSzhiZC",
  "key3": "3r8SG6gTDpxhS845He79DCLqaxwJeM9E8sgKqkKA2D5WQXDhyWvNt3W7zC29YShG75KaxiBKCP1KJS2hXhPbwKTg",
  "key4": "4PYHSd6QfKpM2UTutAKM9ypxutCT5cEJUWkoYKPyPgcsdjHpNydukWf4Tkpi9Tc7TTPG4gk3aqQiqkbhyzdb1a5H",
  "key5": "4MLSSYDhjjtk4TywgE2HuuDCMBWJkyHdpsBF8mKmw5WsGNg3z4qnbuH6gACATCp9kuqzrPLX4iZeg2bzHo4wgHnW",
  "key6": "fRjXxVSWPUKJHBCHk4VnsHPUu8XXYuBBafUF3qLn1TwEWeWgE6ULMu461C8wpwr1dvwQYk1Prhc5KmNsWfkczcm",
  "key7": "ZWS2h6a6iXbvrRyhmJCvo51JwYjUZi3n8Hwd6ihtZyUzx1DzykK4TncuF2U8EAQYZ86T95Jp7yMcXHxC976R3dh",
  "key8": "8GcZyheZcrUastZGLgF4jd1P7kCvvLB9PgCdzkEXjtpxyuc5f8J6vR7WvZCp38pcTMoWA1UGmqQcrKv6FWUe2Us",
  "key9": "2MUKsoNtVgt5Lo3KcdgTWQNX5BexRvuXPffAhfkLmPRmpvRr92zn9WYosXjouvgVXEYpyNDDZBGpLhRQ6bDNKmav",
  "key10": "2Nyx11knhSViUo54cuQYTDC6Rddg8tSsHp1v9LikV8jxYZCBStc2XXN7WLmFu5LP3W425Lw17nBYExfnCpwoVZ8T",
  "key11": "663JdWms3NdjWZwYeepsELB2dxJYgkrMVfA4MugJK8T6aJaXmwdT3JcwF8RySv6zaZkrKnTnWZyi5vLhpDUTMAuT",
  "key12": "wn8xUkn9zCNZjpbz7aL9rK6tyJrUxsHv2BZ3hU6QiZs1u21F85up457fdsTjo5X34D3NkP7VfK2KyNityKaAjDd",
  "key13": "2EbYX27CDGZwCZdUvgdfQm6dHhk7swkEWrm7vc2iTbd4GfaA53XaYSdV54GwqxBRXZfyN2NCQtW5KQ4kr49M7yus",
  "key14": "4CcqdfYGT1BRkvhNrpRcSEfoFybWu4ftnAz6fAjp6ivrrLSf4vN4awXytKW59uTYovkDKaHR4MkShK3oprez8ZUQ",
  "key15": "4LXRVbnt1ycV3bMsvBgwFPsmKpfwWzuPeXYqBEjgELCEsvr9AS8AWNqXXxbajuYcTP3xWDLHCcsXKYUTMsk2WVcD",
  "key16": "5bhw47u8r6Kbrij23FDjt88BnftAPJd3cvD9WA6onBJxqEaaEins8yArKan2LJn1xtMbAgmtcLPQTbfymKaftQ12",
  "key17": "4Z8V7CU1xZqN9nH1bnx1HY61CmTSpdhSu8fndFo8FZsUiNkMLRAk6rYui26jXdU5JMnVChSTBNhootHxV2WMMJ7w",
  "key18": "3ZFDUwCcMmsqPcwxAatE7zJo4uiF9TJUSGqpyU9mBwXEdEoCeqf3NsbX7zXKUfaC7poRbk9xVgJ3pjKt3PeTP6gj",
  "key19": "F4vj4vgW2UCpV5d6E6syBt2ybYyU8va1TrvfD3hGDowtAzB3k9S3wUj1QmBXZhEnyUreVqXws5tGNYG5G38V6fG",
  "key20": "qFx368zZ5VfJZxRkqN7T8EfLQNP9GbwHyESbWeta8WNci7V6R7HP4W3VhwZvx3LQwTdYcTBSzsukfbnW55f6Pig",
  "key21": "3Yvp4v846QQtbx91YvLaWxVU7GVtLXoU2qtFfpTg1vkogfnDNUWat6jJNDC6VU4rCLQDGGfos5zGE5WsWff94sBE",
  "key22": "EUyJiCCegcDjWoPXupRQA1vj8M4WbkCWSftX4k8FUPPifmHqLVtXsgnoVFdNmsAZEnyf1qevp4k6UKHH3sUHQ54",
  "key23": "HLGNPAPEYjgmdpddcqKwn29V8C2QLnfNUk3psJocLdhQh8p1a9sb4YAPBDaMa6a4Y2tQEXmb1c72cgEoPjrJryT",
  "key24": "UtXk7q3VboyZa1mmF4rbPzbmyNR5NToDMrToy5ZcZWmWF7uBAJetsdZodX9iHdBcykxAkvH6Bnpb1G7nq1qEKFE",
  "key25": "5oUYh9fh4DnkJUKBQUf1mocDKdvQveiAh6xPjcAtaAJtmGhUM7Udjp4mvTWE7bVAaFgCfao16CCQXmJzVwK1yAxG",
  "key26": "5ZnZ1ou6UpPZNVvEUVex4rWQBx4KHCDbX5G4fLH48KPKvdfWTgqKLyQwrnGVYiTkgffvNN7YJEyHnNdjKeJJm6Cb",
  "key27": "5c9fDKNhDtkaYoi9mSrsasHbBsfKHKhJYN8zPR4TndKi6rhZWrkWeccVNephPrYXvrwncBPPhN1ATkDLUaofCyWr",
  "key28": "3Ve5rsYPyuZqA7tumGCg7rYR182AEH48QjQix9LK1nPM4LKmmHZgDCtHsmBkj5zb5T35qMVkYFFBNU4nmXBfAghi",
  "key29": "2GJAz5xmRYLJUUs54ds53pYYZkYPbyn9d9UwaPqPQsMTsyE29m2XpHTUoBwScLQeFPLxdKNjNWPLa7F1Ns5TD3H2",
  "key30": "FC3HNSS2kukzrTzTmLjLFFNAJFPcbFMRbGP6ZetqC3Urgf3asu41dy4vUCVZQfemDgVuyaAYQA57Th1E1KRhdqV",
  "key31": "4chXXGUWAYrCbFKukmpeK7hYkBELxHn1Z2tXufaqgCgkPwmZBhSBQr7ZUH3Jnbrg3MvZRLcWNKCABN2DtamN1bQ1",
  "key32": "9Dh4tXeTHU1ZG68N7TJV5RhvHwzvt4GPTSrJSZAZgdU5vSF6EZNdz9Qmd76D1qHDDxB2q8eMYKsf9vUARSt1brF",
  "key33": "4QANMKXdmYwA7jXANWy8zusNXRKknFJoBC753G3CGj2k46HsqGDWk4EjgXhUEzFeYawPoDzewXcohJKXyAC6vTRs",
  "key34": "4FNDVSUfp1EJi2fwYJTipuHJHsts7uzs1ebb89fiqxnJ9iqDCnZdnqnidhELoRgcMqHLGmkcfHKC2rgvwBrhMN8t",
  "key35": "3ka67z6WcZZoQ7kQRThmDP4bT6KLggK8o7iKSPsUZx5DqB6DxXqGjT7e6Zm2YK57sihSzm2ZCwyh6Q1pnmWmChNp",
  "key36": "s46tDcE46FxgZVvF93pqEMsiLfuiYcK96tirLgfvug7qxPzQhXtbkJJZEzL6HfrxcLDoPyeCMor9fKSRQpQj1mj",
  "key37": "42u8nwXSzVwz9y7yRhWTb3aw1bEeq3u56QYFxxBRUipJptCZeig2Goq2WH4hRHXuQ4ZfWmtpddGvLsNnrSFy2CQX",
  "key38": "3TAgBjjrs6fZJYkebDQdkeYMHWknTQFvq8FUkrQpjLhHGqVArATTwAe8yPjvvq5NefkaDiQRm6Ew9Dgk1q9LFCt7",
  "key39": "2hbRFDpJSj99P5hSZmTzRmyvP2xC6EF4gxrRWuAUg4TLJ3bvFgyveyGG13TcdfSa1UwUYguHTnLkyC2Qv6SDVL3w",
  "key40": "EKPVkvqxN5RtQvTbQipwUfbGitFdRTTsoJhK8NPaL7cogASgD6GkWwmL5M9ybTCoYKtHpm5nTAqh5zTazY3vkRZ"
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
