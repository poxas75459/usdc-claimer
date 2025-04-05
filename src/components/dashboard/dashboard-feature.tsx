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
    "5Js5pm9uokbe8J5E3WTre44RyWwjoQdUakBrWZq5gYsEyB8Dm9tLR6p5tioRTW8TT35tmaJpTqvxyzoYZrVXff8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGVX16RCavW5Kc8TeopQGJkzZA514shJjroVd1XiwettgVyFmpMYJksoXJh6s9uRKvJdykRHEMdZL5T4EbviDmc",
  "key1": "cpGLg31v4DdrPi4yUFfPoubmSNgBpYK2FVbtyxq9w78kpKYphV5zjpSbu7u4dWYoxbnY9m4KskYZCQdTaM2ypr1",
  "key2": "gSfY4d6TgB76DKeFAgTgnhpLDM4waf7B7VwqH7B4xp9pnosJYhc6ncFuymUa5r32mW1CUHmupGprsAVLKLgXsbr",
  "key3": "24BHiJXcvLb9KPJLuGAkD285oYrSnxTpNBZhTYu8RV5AySqhqJaTjXXT4E5VXemxZRhCeLiDqDfFY2hh5vmWdsZk",
  "key4": "gP14rSLtHqtsFtbKWgynqxqQYcbriJXVoyY9DUn2yBvevypJgD7RLzb2AK8DkvMc9hhSmXdbUaZBjWCXSjqfVTD",
  "key5": "3JQByc3yxmDGmnDzscQB8rfE6gAwyDmnzpM4VkQD3yNuYnxQEvBaBV1JguJRGZhDQKqUBaSikB4RJnwoWH2Wfq8z",
  "key6": "G7qL4yevKwVfpe67seCyzY5qkGqEpABtAWzoWLJDmZBBsec8XcqcwYvMoXxqq3NzS5Pqp25LcGJamKRpkkeshFq",
  "key7": "2bpXdPerEFQeCrMn1B1YHQwR3FNW9y2kJKfanLds6B5Sfj1qRK1JenE555GPJgd72nwj1aGNXrpLVfDqRZEJnbBY",
  "key8": "3tLh6m7fCXtYZgT1MUm4gWvTiGsgUG6c9tvAAWvsD2Vuf2sRq93yFn6pvboz9YcsYXWBsbuHaCkMRzfCBUEQhatZ",
  "key9": "4e3jqWZ2YbmZBk25Afnk3aUT6xeXERQRqYbywsU2sUaL7hnNCs4mRmbzRnJ6wqQf6gnYdzXf5Zp5rbjEDnomuu6U",
  "key10": "5yJsyggyyAVLmShrR1FYS33FjCvics24XDVPFG978ds9yCiLpQypCwq8etox9uGTvJkZ6nrmT8v6juZb2fTHhf7U",
  "key11": "3Mn9MfeRcyN6pGQgXURoNNhDd63wu5x8nXs1ZhfRdPXdVXXVXAuN4B3KFYRsSKzsWiAGMeHXpMYRSZ5jDduaABcq",
  "key12": "2iDrtYFRFCwfo5ujjP8Y5FTjNNwTohXuRATsEwYLKe3vfcrT5RcZ3GdtZC7Zxv5MGjkaSEvvWdVC9YWqid4s24ht",
  "key13": "2qyrJ3GYSKCB69CowfAx76HRnkC775CpyCoGKSinroXThuU9HMyYveiXErYj6h9bErS9a377Fu9pRTrTZMRKgX1g",
  "key14": "55HpwZeDrqiWjRcwHC5zpnwFakQwyRK5PoyTjUK3svim7GszH8HmMuod3QPad7YxfxaqfS96o81UdCzeNbpsJBE6",
  "key15": "3UY35YMn87tkB7w6xW3WJbXzLiDwGVkTfKbUAsgdVt7Nwp6AFjj1sQqd9VF1svkuCZRNZKaSnTQuR4fwYR77m77T",
  "key16": "66rfcN8XM1tMfBLwQhnKVxiWfSE4v9AUaHprKhVtRQj8rb14fQyYUrjFmhuySvZJyLqrjUSZyj2snv3p23iX7wRU",
  "key17": "4kxa5fKBoJDZTZLvn1XVBJokCHXKsyZLPPayf831AsLVdDwKBxjyjgDwcRz9j8zGKsfXryQY6rDXX8e4CSi6Vtnj",
  "key18": "3NR9BGLntPGbq7PY6XSkjmtBFR37oMAGj4G3AHNUFMLQzsViwXA6YYiivDFcAbAv3W7RcaH5kabR61yt88P6yB4n",
  "key19": "5WVucTmn2rMahL5keEzvF7Li646ox8T8iQ1g4kedWY6bL8t8cce8mxLBSQwbDG5qT7SLdQAdcPqNvHfymaNQYr6u",
  "key20": "4jwSrMxuCWkCqZixqHTBbzmcU7bcsR3nJVemVa8Wcpqc1zSSJL45YNxdj6bL3kye64S2rYtoFYG2ExuLKvPhwooC",
  "key21": "4owL98yEyMCn6D4kppBbgx4uB2LD8jSxrevPzt6Uh6zM1jDLVTUGLTQUYtaf64GqT9CPkCgABcCDv57JU3h6hZjc",
  "key22": "4PakuQLPeCpr5PXz6EpPEVkVG4rqLeHb1EMbnVcxDP5qbJd5UbqtMC97PKdiuVWsRWB9um17LMCzMaHw1B6cLKL8",
  "key23": "3pMEt59jRH5piZ8tqBK5CwS871wFWGrFrRD5wd1uynWcVtGY9VHXwd9YB8tN7t3CY15Eu5cFZjk87LAgDJyea8Bt",
  "key24": "MBVikK8BZgYfaZFFhNQP4156UsUHFqn58kz8ARetg42JuRZfio9ppd7KXnoTZkXMCSoHQ8f4MzQdBZ7y5DAM9HL",
  "key25": "5RjZfQzU72YU2LF6ybEpnuwzusiPQNrY8bjgYvcvKMYxr6N5nQQxVu5TsNRwN1jUQhta1tv1EdHxtJ7vMRvT1qyS",
  "key26": "4KeY1wKTpnwRyYBBCA12AycZMo46byNihBMQ8B6UE9BeViUd9EVhNJButpw52AZy1mqha2zVyZKPfHTVREpYeaAv",
  "key27": "3Xvf3aqwPKeDCh7hoxcZ3Yyi5HHSJyehjBQKBL67Kd6Q89P6TgYaPuqRiE6EmpfyS9NLYyvL7QRCCmsaDDEsVz6k",
  "key28": "5PxgaM5sPDVmEyDQGQTEs3QeiRcrgazzV2LpLNeRwcbNFcU4knXPRfoZsCTL9b8Gg5dSLVn6sCsfrJLHHPL34tTm",
  "key29": "3vqqWtF5sSHooUkV4NEsgishHhf4mXpCSUqfjGjVSM99fPk95KpDQkWNhbtuL415PxBjHLGyqe74H7BrPDfG7LYv",
  "key30": "4PAyMbJgF6LSKdU7fuesFGvZKuooTqbXVtstYCHS9QKZEGAjKr7cU5LG5E5Ee65jxD9LNxHjRZZqpgg2DanvnoAN",
  "key31": "rDtjw3LLzFECarTvR8kfhGfZtNMScvo3UL2LKdn4uGDS6wW36guLED7JkMiorcPfrScuhPX422oHiLPKk2ZEPMb",
  "key32": "3iS1qtqYUD1SzizpHwG3mXtZV4syyMpbdPd92jB4ZWct3p96iwKWHLtFRARm9JSR9Z28vigeqB7b29MLEdkyiaoh",
  "key33": "4ebjvtKwtDqXMGNvCpGLAPrboBmiyEupX7WgfyjMTGMfPHw21W6FZcfLJGqR25zdzVKVPQG9iNRBoHaH2JkVNGts",
  "key34": "5ofJCcEwtrjyWji6nsdyNJdiaTscZvf1g9gLQuN9y2dUHgQsGMb7DQM8MnHueVjZyvGyY5px52haVHzKv5npT7ke",
  "key35": "5yKRitRnHqSPYbP6F9bg9o9p6mPcpZ1FWhEx1GDnvXYfbwwpJNKoSBA1xRWsjgW3FBcLoXbR2QimrhDxZ2kfCtWc",
  "key36": "31HMhV4DWyYSgpypWvHMBoLjgTQEUT64Mnsh11vXkBjUjkBuiBxjEAfUGinLjQ14noUVDgUWQSKxXZHbvtppYt9g",
  "key37": "4t7wr3qPWBHFM3QN8RwfsctRLzqZy3S8F2xTZySvz2gkN6yTgiYG4bFYNA3Wqccn48uC37hWZUidEFnsjHQfw5p6",
  "key38": "3V7JKrcggG5RMm93miamJqwVsycXhKALKXtSiz8QCHN45fUES4PaMtvDjBiQYJLu4Guk3UxmMNDXP5d1PLsnUpt8",
  "key39": "27c5nyDLqVU7vCPvxF3Ac8BT2eniMmREYHFyJ7pcKAHseAtY9hJh1Bn1sNSRuWLTH28VRXpPqnMP2h8ei7hpmK7t",
  "key40": "5ypqMwWZAXcxmh4WsjuPqCwXTN7YaB7xVbBNRVZyUhJ8WnKNuzg4NmLMChQWWW7n9nNCPARhsWegoT9CsrzbsHWS"
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
