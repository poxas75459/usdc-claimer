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
    "3DxY6r7FyKyJ2Y875jRBNFKCJYXCb7BecyHtEr8abp6Z7YZnXPFDS4PsrgKSqVSwwotFVFYmNPwqtEiA4NjFc1Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkiawCppbW46QnhoKqnoNV8H4zjNV7RwjFpaksgfaBvNS5ZxzPowHTo7k4W9HMkVn24bMoNzyBphJ1E1kGXDL23",
  "key1": "5M9mTDEUGvyisdEQED6p3K6BcgwZ85F7PjFfF2gbu6ChpUFHKSo2BfDf2xGy76yii2x3T2VtuBY3twXnh6RQsBfx",
  "key2": "3eTTpbMCVVJowgCpu7rzN8yno6YLd1To2adQpkzU6dD6HPSVNnanjVxKzcdL9A5KEFAiAGcCuipMVobQPPUBE9Sd",
  "key3": "3hdpabU6eNyTpqJ2kWCTW6aL63N5Ea1rzxwnPcU3JPwczga1tPWxXp4r9pTomYetnUDmZAbcUgFiTvMNWzYn6B6H",
  "key4": "48gZNTFqgFChd9EjrQB78uHnPKHL3E9i61XaDpLdQCdmup2toKMV39uKwFn1WVG9xQEJpEmxZMjFpJ3FQDAGCihb",
  "key5": "3EPDZT4EkWe2PDv3hovpbMxZ7xTc81X2gSmgMzdUZpJcB8L9B5VuNX44pYZ3DC5XUJG87dFZxikjgus4aoJ1tUaQ",
  "key6": "4XXT39gRj586HM9cbXQL8SmnJVR7EeryDSNLtmoip1aFyRjwxrCpe7higy9XEFS17U21ZEoDp38Ri5Bz3HYW6hf2",
  "key7": "5XZXEA3fAEZKTaFbvU8VucVQaZui3h8QZqLjAELhPUvdGVDreD8gBAbPDaZCQsuK2BJ6tE1Km2aL8VXY62L7saQo",
  "key8": "5K66em3b299GRBqcEwrQiCD2bq3RGJk1C6HthjZngGqmrUs5irAJLeKY6t5LP8zza7sWzzwLSTPQYT8yqpLLiFDz",
  "key9": "3rBtDrSq5PytDhdkkmZ7gH9LpE2g85T5iWZSDr5Jaj6KFEwjuEuxb6McCbejXWBYafPr9WwT5UTzgZP1mEmS4J5L",
  "key10": "24wnJLgJVBSgUxmRZB2VbZ3URToAvPaeBY5zAAV6fvt2NMJydWqrcH9KapEjXHFZzSfmPfDFNJyCoq9Z6sJcC923",
  "key11": "3o75kdzgkTviyDSkMCwD5RRWKm4gW9sCJ3SziyjNh1YWuYqf4iKtwV366pqYrFGEEUzMvnuVc5e7Cah7CD91YBVm",
  "key12": "5twtq5ERY9uTB43q1foUM9Hbc9bxuAToW3aozGsBc3aYRc2kPN6PpnCfBT4VYbNKCXKLc8TRAEWrV32DgaViRqtD",
  "key13": "5xFhx959Xdr2EsKYstJyBmw2cmnotQzZXMnCgmQhJEztWN6X6a39H79kFqQGZi7k9WVLrDQn1YQExNRis1BeHCBC",
  "key14": "4aZQSwkDKWanVRwAq7WFwDyXQvyvRNeySx2gsZ5uNU1VEMRJGuZozQtKormCvd9SQppHLRHTEnD1g8m4zgaMDWZh",
  "key15": "4P4tLn1eSqbycPkdkixUQMY3DsQk9Nr1LuG4vRx2wnNHc16QeFCjeNJCLF4uQmT8kencucZAyUDzEu6fEpR7wJvd",
  "key16": "35WjFSJKrSRGgmCttTcbBgdF6XEssWmHnKtqwYGTDEsqCiT8Mi9DiqByTJHEY36jyEzGCAKRk8Qoup2aMVXeR12m",
  "key17": "22SpFJDqGJZAwJoHfku89wqzR33wdAaGyg6SU5gJdape6Wm8CVph1ZRnibfrVVtqPKBxnYwjntobNyKnbWhhVGzw",
  "key18": "5KgMFP4LJemjWAaSQMpXvpmcKGcnHCyipDbsReq6AkCfikPjhgvmVChVdx6TUkrdeBW4YzbYpPXxwsFLmphxHZvk",
  "key19": "3iSwjSkCAbGw6mVnP76WS8wV9HVPbEs5xecxBPjp14Ued3LRbA7iP8RrytU1HKnyJKFZd9ibjkGdEDpHRFYjLyhd",
  "key20": "5mYu4w9SaL6buU4DJZpFTkWu9zQSUxdr2mWEhksb99MQ3s2eGjzrgYMygSZNgFUcsoV6tysfUoQxuwrqV5UgVmCi",
  "key21": "4vHrVAc2NWmo5mJjKQbSQT4irzQzWv9DvLSMKwH8xQpMitW4ByFwP6d8PKg79Yh4MtYQLtLBwu3bJUMNyp2bVX2x",
  "key22": "4Rx1QvQUEdtvYomZY4az6EbVPiQ68vgauTf6gME7yLDDucjQFzRExuzafnJ3U1wDdXjjafjY5jaSHAGGUr2iEBU6",
  "key23": "2S7qBg5guqDdcsjAKfnErAnKTfXv9MvPdfvGwQEWy9fYufmwzcL8SEBqoxdiNqmabMBP17ofuacwsYdF9n9CqzNQ",
  "key24": "3mpjqnDXhHRib6QqhL5FuDXbhkCBnpUP67YCbUDe69RTwpBCG3RMju6kaRQTLzqCAuUN1Z5n6MfQeE23xwVFbr4f",
  "key25": "3Awp7UEkfqn7GfqE6W5HzqfoJMVnSRXzkSCQ2T52XifWgKUpShzcCL28H6kmTgiHLieLvnDwSZyX57uBDbCKwKJu",
  "key26": "mR5tJZuLBaC5hG8tB9ETtj4jG5HmWMkQrECS53HS5sBDhucjvBWWUkA88bK7LWFz2NsSyQ1yqGpxDQtZfiqV3eG",
  "key27": "3bsnxwrALfsbQ5SMDdndn3vPXwuw1d2pcQqxLDp2B2NKssXQ9uuAysuCqud7jHj2QJdSru1Wbgtn1kWyk84hpbMW",
  "key28": "3ph8Jp6VW22te76peF1ebPVXYqvPgYunyciJfjXvmuD8TXgChvHPaZNJZGKjo8yjM7EZH6oE1P1a8uFtWDSYas2q",
  "key29": "4p73WF1Yd5VJjxnbXbV4peoqoRQZnhPEuSC2DdpcgA87u9wSY51rhxf4AEKVGNZrZvhHeaNWBgZdtejaW1rKLgAf",
  "key30": "372BquK596L7J86x1z6PfhtQLcTnau3iYE7wxC8GQkB8vARNK5HoqhLxH1EFQuafWANmjxy2jC2qQpL1iFHWVr1q",
  "key31": "51omapC7entVogrTTPfBpZ4mCae4rnBhBVyuUZYj6vUMeETZYL5paxpZXCpVhwviNhx4rzkdQFCMmUv6Kkaj4Sxr",
  "key32": "5wRvqiVMs6fLNHvMjgxcxeXhztymidJ1CVVUZcdFMVyi5JHFNCz7zpU55DoGgokg7ajArq3zTK35viQJNqJi5itj",
  "key33": "4Zt4brurHBny9fnHe9XffLSREdhZPdjuRwfMteXHGAYoUP1CJtLzbjZ4KDmYxTeduVL9piyngkimzMaYMxrvbvgm",
  "key34": "3Ah4xmyhTKxn1AhQLrFFDkodubm9WfmYJ8Lp4efUirVg8VYRxoCYfuRjWGgfzRjf4piYj9wz9vdxMHX6mHrLgqnK",
  "key35": "5PMci8pJVm1LScD5xHE1cfbLSPS3ZLM8crhG4oWUwdpkW7CvjHi2S1GVxCE6PXZwM7DtBfigAw8diKcF3zR4EiLD",
  "key36": "2C3TMKmk8SXcVDYMoMmJ8vuYCdqw9bivQPViB6dMz62agejBb5kPpmUYyj8EqVtSqsmZPEzrTcQfi6zAXT49uU3e",
  "key37": "3JoYjVBaGn8g1yhjjvP1767Hbr9WwJFueVJ9JiFGFMADFmuuq8snyCoKHLuzszxHSF5QCM1VikroG86eujT3KhPK"
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
