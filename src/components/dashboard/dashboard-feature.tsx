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
    "4WVSEjXUsqoqY27gLaHprs7FyYTVDYhbGJzenp6PcMrPs4WSYcQZjXgMiwmUq7YqJ2aVqRocUrmjSTbafqypQqeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwaKnqHqVEPLjAeGaRq5qXMgc3xBpkxEuACf6GVaUabJTcnJvwpZHK7VBcjGQ6WzibSbrL1v7ncum6uFfdbCvhG",
  "key1": "4irhdeMNCQjy42Tug5FRnehFygHNtA8RjRm1ZHPAHXKgVm9mpk29gYSB6F56Bs6qiJS3F3hYekrR9RZYxCTqrBk9",
  "key2": "4LmCaNW8MXjSD3WCDzn59z29D1BpFarThrnFWHYSsZqpJUFowQYy2Pe4aTa7XvEmKMaYwnKCrbG3pkorzyLYJJaX",
  "key3": "2Lm14ccFh8a4hGfnSH3e8efwmKrJwh9yMdywbg97UYFNPZu4bTewe9q6rUtugkNQY3DADLbNmPviwtU2sL5xFB6N",
  "key4": "4ynKrpZYXTWxWQ5QvFbEMNbJnDCLwQseV7wLmF3QzirpDJCNu6fdvn4m98mJmvdMKxSaTTk5FDZ8YjJTWHAfrkgE",
  "key5": "5oSVkirAouP38JMY4SSQPd3jsH5M9kFBX7aQm4jn8iUwR6sWNPzQe8gLvuK16gsK9dqG2PA4io2t6KSTwUZuCmb6",
  "key6": "3dwDwUNNPLxHf4ULK9Enus6WLHrxT4x8JZPBLDnbqigzneHMRYE7yApWzS6KZf3iRX2qrDcEty5sN26tUptb51Eb",
  "key7": "aVHSjbGw1gr7ahhshQEM7aRpSrWutT5USdrNS2C1cype4uNBLBPGhcDJbqMTrX2F7NzxiKCafDMPdfBk8R1BhTd",
  "key8": "4yfCQEhEkDwkk1b9m39iaW4hL4cXLQ1fadw4bSWn5jjRyACTihFwUaDtu5H3NR4DRcWrQ6GaHDvsWtHehyoznUy7",
  "key9": "2hhE6bpp4j1r5MMenhGwiem7YYzMNerW5uNEVAbeDxQdgVNutQYgfbpyJcDfn3jf15RD37SfaFRtjLpwyYPbz8cW",
  "key10": "5unAdmx9pHEcyft9NmwKtsN6YWZWGosvLniNPWP3YH21gMien1UwbHNJLNcFvnciqd4QmcUUNNiRm2uFfQFst6ee",
  "key11": "5ggAoGSmRyaM3CSwyL1L8yHm7Mh6k6GYfTCyqqZzGTZPJYn1J11LzxAAnDahZ1hzgHaZZyqKXXRDz7UJUvHPiuAg",
  "key12": "2Mk4Se8KZo8PNX3HRd2xXeWVZQhPrCGL9P6cboA7sQfxcHxqvUKipGvcrnRBzhMi9ga9kRVH7kHhcuFack3Z8na2",
  "key13": "3axBZk2zPeRrALP4MnNVspFMzh9Q6XZtE97YYUT3v1JVMev7MEbCsLkFj3fHdU3L9RJf2Phuv2ruicmQEpNt5fpk",
  "key14": "5krcBcSjMq71KcakhZh5wXiFMt9MQJGE8U8Tt5PJLqaRYKwUGyPgdZxvvVEVbwqAKTg1ZrUgr91kQ1bPS1PW6bDY",
  "key15": "67c83weCR6EcSY5Bvp4CNVZRZZxEpG2S81cwd98k7po8Tuweohtgk78NZu9FF2F9PWaHpgo6e4DaF6uFi6d7aZZT",
  "key16": "56Zqz9rdyiU99q2dAP3UbqcKuAuZV679qEV3o7ykRxS182UR63w15Hj56TQsxQ54EjbiNQMGhoQknpyRQU2qr9cq",
  "key17": "2Euc6wgZXnwFVPh81U4udw6MhQSnj4bC92qhqGTXkCGZDTLaSQMHDEKYBft8ucNiNnPjTyEtYissLuqXMKRddiGj",
  "key18": "FiNtHXnnpiPTDCCSnbHiWPvwAHF7JA6ZnhJu9tNxvSUiXXUzWWyUunhc4Bz6Ym3MQYnibkqamCzyjM6Ho7xwdTp",
  "key19": "62pbCq3s7nnXdvgpXF1ZCKM77EfXgqQ1Law9a6E1rjTvimvwENcniQS2wSBditDvvQjRHg58L5oU1LbRnqTVJm5p",
  "key20": "5Rz9f4SXGgWS26XBmKo2RJUDmG7j7u9H3PaW4E8sKVVAHcFeQVeCtfSh7vxqny5Aqp4maMET2pxBfnjvUUDN4BT",
  "key21": "2wV5BhgeGKBWHQ4NdbG6bqTVfXFEb9vJs9Vi1tF3q4QTZuCzrHgaAXxn15xa4XVUYucPSW5o9EVscRfjkskupGq1",
  "key22": "5Q5JNxbvymSRk8GFVK4FtyRiwykAkGUqkzVB9icn35Km26XkBVGUJ45tufANgtXjqN1fezxwxyriMrmrLwJpMCip",
  "key23": "2tfMetoGm8t7UuZSNYyau5GBrArS7E39nrsp99mGKMjdvhTM6boo1caM8Er3UHdqsvpyk2ZbvhT4bMtUfR8pusmz",
  "key24": "6ubg6QobB3FLeoF11RaYRiq5bCcQLECTue8n4cYFJ5fohh7ZDoA981KyrRFu5hqoYnA7nRQ19hJw6XwLsRvtrbp",
  "key25": "E8ngbZ4Mdz39a6pm2Ee1oWbrGMFiqryBnFH8e4t3iHdDqaabw4hZfHDadYoGmrBLWSadTs7h24wzCmAnFpbb562",
  "key26": "25QkWHdgy1ZV2kjvJUu496GJK4gfFAp5rFzau4zumjLREZWiy3vALHpLz34qFNMFhi7i1hvVvdse4XpKWAKBctMN",
  "key27": "4PzgwmnPMmuBAKUDXnPqD8h7sszBHH5KyXfEMJCbe6Toj2hd4behqEw5n6nJwo1e3jeXn5wYAUnkEp1qWkr2a1Lb",
  "key28": "52erBDJMcY3CLUiizGMfGJZ8ruAt2zc7GgThwah7d9NUZxTmQpCe9U5MDyF9vdKeXsXvgYChMV6MhNbushyp1U8f",
  "key29": "5C7dDV5wZXGsThwoQNkRsWP6jZ2GxHW8C5fCf9Jw1Q9zCnsVNXn1FaJkJwLq6sVAJiEaST8hyipf45E8cvuFw62U",
  "key30": "tr5ghpRKLPRtZeoNL3WEXZGxsYd1cGREJjUFUdUpzxGYE8ZqLynDdM8kkAPnosrApv5AEYwLR5fWV8jeSffFguU",
  "key31": "2iKJ3hRugiPXwg1dzRy3rArMv8bXrhazH133CbS6Ft9zzn1q9sjhUdgW6Cmc7FRhnQC5HU4fXFxKHa3RBijAczhP",
  "key32": "2Hzd51zib3Pf5kn2ew284Ve8xKTdrArRtRmwWqqsofdmwtiJ8unb1nYo1rEXnUBn1QBhtKBYZmwBM8jAkiEPvCUJ",
  "key33": "48vPfXmzc8yHWPYyYXMp2HyTyVNBeySPEgYBurmVHV16Tc8qzWqwnkXWHSoTL9E68XhXPj1kaVqx2Vb4QFBr5vbH",
  "key34": "429CgRgNUGZJsiBSqnhqSqBiob74nXxKYRQYHjLazyxwnoKs7nkaqXQEf5dXR17dxzrmQH9N8h1dyAP1FYxLqeaN",
  "key35": "2NCYDyQUAnTY226hEgyQSz9WqifoMAZpPHRxy6a6Q7pWChVX5vawE18K2n43LSpqNCHXj3Dp9NZwAYn7HynDGx6S",
  "key36": "2eSp7XUU8SsGtNredNSMr6yCVRiSZAt2yVSiwCcAU3cfgsN33mEQ4LAqMSJLm69kNhvVpSffLBVCNZexSz9a2g7C",
  "key37": "5gkK8RcrtLufAvoFSpybwaNnksRmuSvyYLs5P6ygxCm2izDxhKi9VKcepsJzzNmWBqWPXgXFNtSrYDETkSpL1N4Y",
  "key38": "5W5Bq5ExkAKNs6Gha8CpmUFnoZnzshLZXBX66BEwGtd8jzmhLxLvKwxEprgnqgjcbxGf9MkUtLv266Utmzi6YfBp",
  "key39": "3aw6wi2wE4kQekQixg1nRhFb8JpyeSxbjJuSVwLGBKM14QznYvWQG9Kq89HY9kgeQX6KGx9mtUu87FikxpSm56wQ",
  "key40": "r42BsR5YTdkSKCUCxzX1jUFwL7Fr2A1WDSaSpeeRkabajoqw4KXNoafe2Yuwdrsbnu3ckJDjFTRCDLfosSanE2P",
  "key41": "5AvsDzuxhePskCpGPoJcLNUQgi7jKGnZDno2okXfcvLBsMg3kBf1oHYk7FP7EJn3kBn3GQ61ciAm8R965tLLWe4M",
  "key42": "5GLGFQw6G9aYeCxxQCA5auPzmwvNKNibYvGHgVF1923XFhhHAu1vW4VjUeQy9oPmNDWeJQYERPoq8VbAEqmiCtQs"
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
