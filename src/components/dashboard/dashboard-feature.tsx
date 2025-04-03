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
    "4TL5JkiZ9dB8uFJqjPPt2HakVwdsZJLt6zQeRWLMuyVdhdcubRq9JmBrtzpwTNvCJCSCuHq8KiTt2EcW4ZjPHQjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfsSpqp7yeRi7fcAKKDApPf68UaE3EUtdgjEpPngE99RA9YsZbDp6HQn3RUWTk77DPPBN1nmGU9ri8vxZ1DQBbw",
  "key1": "2GHwRYatrFQtkEN6AmfbJCND7F5BSVutfaWZabdPPkAmfSQLmji2zC5SqQ9z7gZggGr3t5fYiJULix2WjNMBspnD",
  "key2": "5FJeyAB2Th215ws83p7vHc4YRf27971n8GUX73gzAPHC5s7n7xEx9LEERNEmubovzqtFYL266Fnk7WGh6Qdyv84k",
  "key3": "K23NRyWt4QSgqy46Ftyt7GHsFQkcjjLbRJ82HKV6VahoycR1JALofeGC69Tw7jyKUo98D9zKeya3vq3g2nWWB7b",
  "key4": "27ZXH3t7hxhHnZugvEaaYVDBHsvXsU7LTRYDm6kDKPG4imyaNfmBEnGnWwY3Jy9QZqzj8c8WjUGFg2YKTjzA2rkm",
  "key5": "3QLVMFjvAQwgtt2zDE9ekghkNM4zNfhby5a9vqJX7ZB3N3exGAVhAj48UpWGrFwUifB9ezQZ1B45dhFMw6JG5JMf",
  "key6": "4ghzL3VcEeEhh7Xk7Cd5ZG3PqwQfxw2qJ21gBbNfRdbzaowmEMe2Rf6KtRSDxuqESrh7PLt8BES2juZwkybuW9cy",
  "key7": "36aKUBuCfSN3jaowUViSLwaj3nTjwHkKPU9eq5e19CiwTY9m38VPPqqpPDwHteReBjB1NHQ1MarQ5f5HwcchZ3jZ",
  "key8": "5Hn72sU4uEthjPfpn1miXT6ei9K8jnt9wfNu4y3x67MMSJCEgeA5gcC2XrXFJaYnAsVvSWE2Nk8r4gdq5Ni2nwEH",
  "key9": "qnGcbrWah4xLMD1htiZoJ2CsHHeCJSNrp5VJBZuVLfAkK7iurF3qrgd1WVrUdnJjWsMMvWRrT2q2FVuwqDSYy8E",
  "key10": "2gotuXFd242dnpTceet3WCyd8o1ZePJZr2TmytrsSvYDkfEkiMbBAgzWveQivnkMtLhNXMk8bm7sYfWd4H88MbvH",
  "key11": "5yYp5XrPQCdAaaLVLJzpL9hL8G244Yd1X8KxGAUZSqcFD1xcE2dhbSovGzZizCAxwUHNty8VM6XHVzk9NLsEzvJM",
  "key12": "2uxW7o1CtGpLrHyQdonvK6msgWW1QFZodes6RpkkLgPgEVSjt1Z5pgHkSKyc4VkLdN2utGKprsZWFDbWpDyZRjks",
  "key13": "2tJ8GeEHoSMMnTDBfubLeVMsCtGiG6TK5vhyeZE8R7TXEuHfnweiVxeDBSaQU4eKMRxqXacEwzxzP54mHsi8yAut",
  "key14": "2CZ8HR8nNjKWiVUsQQ7fta9s23S3JSbyh1UiGMQPtjsSvDrWER7ygjF9y9rkjUxAcHbzivnAeeDHVitCmxdTcrvs",
  "key15": "5xne1FFajmzHBqttVZXZzbt7atBZ7ffYpjsMjZ7fpaXTZ14FhbExwFzrQpZZBUKpGen6DzcCQV88BuYznAVYEi5q",
  "key16": "k9qib9LNEC9iEjhfSgPcjUsR5yqqizE72G9SvnB3N733st2x9WWr8GpGza4FPW8oXKt1erFdowfe7GgzsJEURqL",
  "key17": "2aKEGoztQanp1bQy3ctRAyecvJ6pJfYVBYaJA95Av41V9xe2hqqfSVY8JMSyvzx959JfyZF6vgYaz3Uc8hVQf2R2",
  "key18": "5xg1Q1kBfZWLsSk46ksnoEEYo3thXcKA3nimox4zpQu9DaAijjJA25CWPn7JrquP9wA1GDboAzLvWRQX3viUoVVi",
  "key19": "5aVikMWQcYfAnmQFoM53PyH9hQKYkmaPpS78AxM4rNdBYenyb2mooZ1VFw69yLGGrr3LEFNBXWeorZQCQQdhZHZb",
  "key20": "3ouEkWEjLGgfpfH5L9VM7N3BFjLgdUsjQvj9dGBhSuTTB534xYzBBV8GNc22irPSJFb9QGRae9Msx6DTm6DGprT4",
  "key21": "5766wSVy5k9TF9qge47ZyhTh9HawjvMAeRRCt6D5zQpyDioGygCVXW7DbPhC2uG6mQU6M5N26asqtuXcAHXo45jz",
  "key22": "b6He94asE2NLc6d8x817Z3Gqa5mNMXmu21odys5hVvD6rqGJrPY6bePXvEVNu8idjNzNUdB1oMVB7vWVoZjNaNc",
  "key23": "2x86eEFppGPrspwNifTyPizKXtCtDcxJyEGX8mgC3774SHZUCQgCycXGALd1GtqYJukwAWw8sX4NZSuUdvoLaVwU",
  "key24": "YUqS2HGL6yNb5Cp7tk9BFGoQXcH6P48fxVNnAxEdHrZ3f1Z8F4mZKiCJjwdsgBq2qR3cUQbaJgKmaYewB2mi68J",
  "key25": "27ucD1HJaYV9XTacWwWWKcuyTZvjrPHUDKGtiMr4kseaVuG9BJKqBfRFXBcbS6VWScYckuiospQRtnGvPCofRxd3",
  "key26": "2KM1h3PFNz8ARfQA8eTwBa9ZAygWpLkfcGDwiSGMsjVyD97MXveEe5EaVjNk7uHtZ5Wvyi3ZWf3goMUtkJwbYakC",
  "key27": "29LMqt7Ujw5M4AMjtEumDTjr1JgxMB672S5MKWU5DxJq4ofDsUs4oWoBXG9A6BStrepUuKCmhJW8LgyWA9E4Hx2j",
  "key28": "3Mvi4hGnRYEh9QH6tnSzqMZ1dp223N4cy6QPRYi3r1YB6snJaNAbGaqufphXmWu1Zxa9TJnbkRx8LGV1JJAevnem",
  "key29": "5tWTNbf2w2eTUJ6oWnpHwpwDTGuJh8L6ckXfUhxBGsm1mNGCccYb2NJsXw3gdKbsuGmUyScu6yHASeMSHXYjawE3",
  "key30": "3XaXq2yUJ3MPkMPJyA3oPiFJAoUbUL8NtsBS9CLXq4QVWK1S4vG2bmgK3vvqf7vdinqNeRGfp9Ak4buwA5nSuL5w",
  "key31": "5vyK6xZKnjxLeks76on1w7GGj9stDw4nsBbZvL3p7sVkxiCkCmnU7Y8FfmWjozxmeViz8bYLEyH6G81FK63sqDEu",
  "key32": "3H55cqrxhEgqPMNyNdpVH5Jgr6k86VrnBNFeTVhhtDeiif3pS9rod5YTM3n9iTXi6AD9QeUpzR2SE7bhWFn7NpsY",
  "key33": "3eZHm7vqpuYQ4JV5J9twDWSGuyzZQKV9tWwuCHuJafAA8xyDb2c1tRy8aX7LZcTcrgJUEo2RoEPukQkjTxMc2cWz",
  "key34": "3X84AHiMNU3CAUK2DeP3doSJtrkLPnRrNXkXwm4hxb77wdwwuauoCKUKA6JmHXkgQ7qFjeeqsVYXzaRiZjkmgrKg",
  "key35": "3kNPC5cqaquY6zjMnWZKr2LTwDDbc9Jifv5zaAXRLv7FutggYbBG5wwdun7CBbe7cwbUx4hLf2HfCu81zjQ4AnEe",
  "key36": "4Tu7u2Q5UCb2JEz6A57swd6TJn6i2wKdeD6D2jyYCAy8HTEkfjV4BsR4jvisjRjaxRLMJXPRxXW6cHJFzMJ6UXSc",
  "key37": "4pBUTdFsAWcwrvi8d6PeWTuEDoVBcJCEw84FAFikTi9ShmqBF5A6LRUjADq4iWBP35jXpgTFkqgYVCJJ6cLowKTf",
  "key38": "67qYRNjgBSHBfb9zcZxw29WYkE9fDobfNeMEETEbn2vL4FinVxP6gHdGeP8DPBYRe7NzaCHZBUNSrjeWrMF6cS8f",
  "key39": "8qEaqi1nUmBWtZej6pLg2ZczSRb58ToVaRNduZdaFonKgSDGcLXvxPfT2iGn3LqviPmrG3GsitxgeTti56t9M3B",
  "key40": "5BNbn6BWR66MoSFcp7LfKB2H1LSGBxQFV8wmynKjdNA4BxYQV2R6ZrfNdQan8BSWCCzVKzkPL2usDtkMwjSFEYaW"
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
