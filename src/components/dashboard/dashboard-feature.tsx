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
    "53X6XwmzGHyyLvNqy6UKYQbYSKDAGMroyjGi2V7Qv5S7Ub35VSEiU7n53y4BXtof7HRU2d2dbZAjNjdRBULou2fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMA8ybNbfs3M2BqnPFgyJKBhsWyRiwkUnqn5cEBUek4iXNZ2Xas9ZSTcSVLBhKQ9Xvc9net8nHeNwUWte9tffv3",
  "key1": "ch3zw6VTBQFy1hfUdLsASABnnLC3i7poNqe2Xi7VXtSSs1vaiNZA2D9TEwdqqnDk9LWkxPvBKH1HqHqA56qCkGt",
  "key2": "5JSVyJYestyj79m6J2bsKPApx6Z93ANVmDFtuo7GLnyFTguJvkHCQGttKSusMT2ZooM392qC5WiaxRkuRkDwy3NK",
  "key3": "4kn1BPoEE2hSoSzZAaQkUedm7xmCmrNDVkXPd8p5MLwcuAvPYrTedgnKB7srqC6d1WEF92LKGZPKowBaz5ZB9WwE",
  "key4": "42sTNQn9Z2AmMmM7YJKw7oVRRnbznY5avkQSQvVFgeAdirsFpXuhQCd34GTKtTYjTk7eFFruURYZj8pHAEYHto79",
  "key5": "4ZBkBqEAwv2hp8DERhrne8AS2APXRF8tPy8xQdKuS6t3j2DH8x2Myy7Pf3y1vnJGiDzD5wp1K9DtaWjPxhruNce9",
  "key6": "45cLuFS4KQyNypHS88MBz66oYPMcHuZ685a52EdcWBEqBBEtdZZJvtfg2jvZX5wAk4S5vAEPEZAT5a6YLsnbdxoD",
  "key7": "4QSu9QwbFxuZprVeUqj3c6FMBzjnoqRxR7iAbtVKgHrNTu41atZ84miRYz7mc369UxBkYzJMxiS5ddTbuVCz8fjV",
  "key8": "2hRbu2gkH5a2jheXPtxJjzvkRDz1EXLt1D8nCjnrLLW6w7PBRRFg9fppAy8D1BFyJ2SQS5batdKtDqUo75jg8Dir",
  "key9": "3DH1umAqG3BKkppfGibYQ8MTmX93HxNWkt78u8gkY9xtRPp22AkKUHHsx7tRuqpKspdjwRHtaGANpcJ1xVKejYN1",
  "key10": "49uU7pHR8Ar1vjMiGpPufouQxM7K418xsAQW5wt9QsXWLVjvKsHPvvcnZjU4JrvEezUQMv79B4YaD7Kv35mujrkE",
  "key11": "5x3GFhsX3sud6hFdD7dWSKGMLkYJZT6NGRXix6NYo3CAYnqDvTRHT9nPy4DsSZKaaMyUFz5mYaV79vqSg35zN7py",
  "key12": "5rX22tewkfwa5CVxjniW7xDLWjD7sNYnbVcnzhiUDGM1bQjKVLmaTxcZfnYV1dYqrXK7cGSxHzEHY9uztLHo7dQo",
  "key13": "5q9rTjzVG86ifNG9NukaU5ZTUUJoazXYczys41CCkXfBjS13mLWN7hE3AApLzmo1KSe67h5oyW3phacNvXwCf5Et",
  "key14": "2kwMAq1wtFCEKhm979k2NP1qXbNmydWdiYiLUwhm3Ds76AUwMnkKWH34BRte4BADRJGC8XBYUVwzRgUP55iBg1pG",
  "key15": "672XgWzpghthpbbfhzqN2ebq3ENU972caghjbi3TxMz4djvZoFpqNo3cHY3b1nzGwaqRNsh6oNnXxioQ2kfeCFkr",
  "key16": "2Cea8BcToxJLJUd4SUPzVo8rLHYrMXJQLtGy5q3ETYSuzVR2XAmEeMskJKZm3x57YRf5vGY89wPnvvhqBhVSJWtK",
  "key17": "SF9oshgqTfC8CeTPESWuAkyt2M7JqJjDwLJoNqDYX6tymo21EwtrxYfTvVtJXNSHXP3GufDasurH7zqbeUTYQGM",
  "key18": "3qtaVZuSBVo2rXBeEKgeoA5UnpguqMATTZfrQJmPvbSMMedHFooW9EgYZ9SRFeFSB5rQfEXMcKA28LEZd6WVGX2j",
  "key19": "4mdXM5gbu4j3TjBHyGt43NKrhzxB2HPqcafV9jDWBcsNm5z9HbhB1iQe5Jb31RTajBuLrWjVTFvMvCvtJGiJy3bo",
  "key20": "2Y5vtMYs7wBaxRhmEjzvn66N4ivUPKpNzarYMJZzEXosVe6viYzszqrLL1dy4uYETpYDWp1KwwvfR9AX2u7XQfZp",
  "key21": "2DZHLrMVZDPpt2ymdJuikt6yMxubaAdJXKRU4sn6RUkFR8p3u5jgiXPhUBMbQRGevbPLLGgbp5YJkaXk5UKfEBBq",
  "key22": "5y4dPAAayk1nvYCJ5hEEuUBstqZA3cMYtCV21KZTxjXTuVk4HyCXBCQj9p51APUTsHJVYCqUHL8S4PjUrqzGEMGx",
  "key23": "4rxeJh5An6k5K4MKr7sHLCkRSrNDLQXPC5ZC7d5rjAnotF3KV6WgbQWgxkqEJ4pmt9qjE2ELdEoyuPNgq2uFd7vB",
  "key24": "5wrA5KFEHi1FoGMvipaxaBpYWGgVnLBjHV4C2YdFFiNLF32AkLgC4sn9k3jJiswwe47EKzM1rCYRkxh4x8HboWQU",
  "key25": "kKFvo9oXeheNZ5bWQ6CrcJKSaErxoQocbDTDj7DNK7hcMJ8sAFt2SxCjx8LdGHonAcr5nmAdkSJm8adwdUPghj2",
  "key26": "4FpQwxZjiZaTR6HtQkAJHk1zwxnutntVF1noDRtH3Dvbj4e7qSorjPd1xWufvcNbWCVp2mDDNCrQQqKPiTXywLAh",
  "key27": "4YBHDnGRTthxF3Tw3kcpzyBGEYHneAB9xK6vcBKnFUwqGmuXtaWbitCdrE6AEhkXU7W7ccrCPoGqfZLsReGNaug8",
  "key28": "3aVVWN89wyeNAzJ1kqpP6bv8VXsUjMpoNGJMKS84BNJjq6YqgMJPggDt2BFU1xpydPRdmwzEJk2JdHAQcGZES7xc",
  "key29": "4mja6Mszo98c1xAwdTSHTMuznCMVxNKVJdXg1gphkbcn6iGBHcAicKrx3orz1xNmZ3DyRhvSpUpCBhqB51Vv4FCu",
  "key30": "fTRtxqKdvu4PhpDU7PPithh5fWTG2m93nn336CybK6CCMauP8VYEHeTS7rGaX2sEnuP9vuiXQSQTrLQxfdBoQkP",
  "key31": "3SCrLC8eKuasEDQuNWvoVK9eEUUbqWSQhmEhfkBMA9QQV4zoNZJMJpqx5uWNk2h4Z1iZuKnjKoAtMH3zKLnyspii",
  "key32": "9W77GYZQJ2xq4TfvsEuuyShftWRKExaGKVUZjCPaDfsFMtWzeRTfxcRXtaxdiVPFLnBbTVP1F2qqGviHRfUiupZ",
  "key33": "DhSYJ4pH97RrBAi8uCgcNg8YXsqRQpLsryMvyoX9T3tqB2zG4DyimpW7n7LE4DDXnBVc7cabsbuL4Kew9beT8Bh",
  "key34": "24LCEnNUAquZcx7fUoBCmvZ7jnhXLqkk72XLLrYnUMF9LSoaQqSh1AVD6E7cSjmuQufkF6rWmtysPffCsuLA8WxB",
  "key35": "itysRdaNt4m8z455Wu25fMrTcNZ7k8X1YsFU5TyxHuLqz1mNvxf1Qfk3isQqfcqzJbhGNqxtqbznZZKdc5C33HH",
  "key36": "9CRbpmPftRXKLRsCnJ7xNWn8xQcxGwrzW4pnx79CGicc3uVXktaZ5GgXiJQDJ9MdLN1qrAqDwczZhxdmUngjJN8",
  "key37": "4UgguPMuZtx54UYMpdsjuvPiBm7nw3oTm79s27SrJxHuyBt9CNZTRbrnUCRUCPHFEZ8h3ThwqvcjUwrdezrRmdFe",
  "key38": "4afnL1evRQn7W4DecaYvR2fPTcvctu73LVdYhSgmfWnCRdeN3jrBoNo7y6Qt6G3xhXHTALAxuWpFRg12GMZX6np8",
  "key39": "4uCYFr8FiJ7L7en1sbj19yMeCLk7jU8pcGga1yonvrRXqTvmt7NQhQaKMJWQBzGEVs9dUuRcb1nHKRsAGgx2QcjR",
  "key40": "5nFieZ2ATbY47YUBHubPYr9T4HXEAunhJabFfVZ8QeQgciYzjnQd5XA62N9zBifTR2MzQE1fTFLSKHcFnexUGCoK",
  "key41": "3sD5so2XuyTMgq745bvGn1ygDukYthd6XKPdTJYcdEAdpoPnUyUbJoPG8g1moSymmWLMyStSehBUx3hfas9Ss58S",
  "key42": "3XemtiTHm4bi3aGZgUCSDWa7F1LJqxxU5WvBiDNDa6TZKrioPJYMEXpnw6BhhhuEm8e5LThMKNA9CgHGL3B6Wffc",
  "key43": "xdRPX2dKGA5BexufLZowqa6jXrv8NtyJEv9MyHrCpteykRp6VamTC7qZLYzkyzj4JeGjMqAsXwGGhCZdVcwyC6T"
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
