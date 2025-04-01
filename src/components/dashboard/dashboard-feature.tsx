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
    "5UwHysdfcRGW4fNoYfgfF7wgo4Y1s4BfSHfdj1cuxJEoLZkWv1C92twUBgH4ZatqJ4V12b6MMEXQCGYytEGVD5Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjX6NaFKdPWxiogANctG3KxUBF54gRrw1NBcdpjyQ1CgmnkfcZW2Rm5oHFx1hi4n3Td4zP9cz76ACVtNcsY9Mxq",
  "key1": "5KH139ZwTieWcjeqSmMYRhZkFFfxNT2v5R43va1cuABjxJeBQgWM2qiUWKiThxonCUkGwqkffT1Rgzu1y5C6tBo3",
  "key2": "rm3FMeBruxqrYdtJ3nsphqEyCA547GA22QsHZY2tvjSe2VkSgQP4EcD8CwnMrHgift1cNQALomdsSgmN9Nn4NA8",
  "key3": "5PJ9bYf4tbswnt9Nr2C5GMTpEZAjcJYF9K6xN18feQy6ihTxtejo88TkwcF9TqvcA6xXViWv9vxtmyggAdeE8xpb",
  "key4": "4yDD3cK72rgw7aDqFv5UhmznskxhjYT58GJQcFxWVhcTpTdkk8GZYSGStLgWLqFERddG357xzvPHrQJYnLxwyFLn",
  "key5": "3Tru3S5V7cRAcx4FrJkC9xPfj5RESoLkrtZXDczdRSCLAfB18E2gsMuqzegycr2KZsUUMMP1U928TFr64A6p1eYk",
  "key6": "2EanBfFbUB4fNm85giL51xH4heUeMvPpqJP1d3HbUWTZvFpSumC4TzHdxPwx18gfb35ivzmftqpxgXmEkQkUq1kP",
  "key7": "5FHLcVufhCu3Sf75a6kdaa5bo1qrrwUr3KTvkoS3vHPstgi5dHpTzzgiKCjAbycwCJ85ZU5EbYdJmTmsQVqmcyvJ",
  "key8": "4KNRfwpri4THXmmyG82F2ocV5GHo1szK3xDou7eZqXHzS4Znr8QciGGQBc53F4Jieaogf6qZ3XwYvAT8u3wQHXZg",
  "key9": "44uuWkMc2QFwCjrrwemtQkkX3MiyCyeiaBr1Pvzix2G35Une9UHDMj5fduky6Czgb72ESnCXpR2XkssQHRY3QmWV",
  "key10": "3ND2zDpzEH9eYwNFiboGXoG5PzetphuM2rkqa3ZxoqHEGgyXAJLcHjKNzYsGEAzDWoYKYVRjcyHXKk4AyL5BG7fx",
  "key11": "4LfLQGWsTJJAwtipTNvpTfGphnKJgQxmqb7WzAUr7uKzff2dWU1J6romdq8Rjzqh5mZhveo52RgirNBQQ2RoNkiE",
  "key12": "3xc4LfNM1rdfMWGAHKBkqTBueBVFrPpcxP8iXXZTMh7stoAaGxT3AGf2Barq7psD2ZBFgXF1QMHiWKSxAj7z9Y7o",
  "key13": "2A8m7GMaL5GZmWp9ytNWUJS2jLE5phEARke1ZEksUan79HUQb4RFCTotx9rLKbS1HCjY4MjehrTwpcSGdzWF1h9A",
  "key14": "5it3NhZk6CNW3s6VjPJCQhhQtCyg8sQP9qhsM5mu4HXLw4ViyTq9sk11f55XtxE3RdFP7j3t4k23amqFKoyY6DPu",
  "key15": "EF2XiTZEcgTU57JT6iEZL5dpQ3WpzKAaczrQSnfUceb1T5Wr45V8nD9JvkNDKfC75XDP7bhCJwvHJ2qycQLfsEF",
  "key16": "2UvjHZ5dw4bCCNvEjWs7PQ9FDwdXqxyaSRr3rLAbkpjQcKrvbNYwPdo6hRKQbGyvH1PvMMcH6gBdbFfyCydSkT2p",
  "key17": "3cES1beYM4qC5PVDm4dNfr25uZj7siaczdZ2ZsS8F8oAhALdZ2Gp976atHMm2uWpa4Vf4FH6nXrnvjvmmkfTApGd",
  "key18": "gmSrjp2hWhJ8WHUyUb7ZEwVsFZbxTQWgZTSn7gGqr8ZAATRWMukwMChwTDKjm6KfqGxRYXeUbeciWkBxALipcu1",
  "key19": "26D16G84ja8ELUbmfC3cPLTEK3DRdo9357PeZ2Tx13sK7YGwRPhmvMJQq3NLNZ9TQrtQQYqKz3LRY2vsFmrWnwDe",
  "key20": "5nTE99bTE8LjsGdjDXctjSHAq5KdHuXUBktmmLFFuMHU6vEj5pcRUqBYXKXDQLVUyAomgibzGVSTSpCHXX7NcKzi",
  "key21": "2Cx4PPhxUXKfRVcoxNbLq6WrCsDbNgN83U1NLWJETh2JPsuwyaBkYhHCSE78eaZwnz2SgRr6hQ4YQrYpXVG5PXJa",
  "key22": "2KBs1NuZgjxvy1bcdz1xxzodx7PNRn3cRaLsxKK9FMnkhNuUvnBJeaCDNdZYiRhDm6DBooCHpfpdFS5ze81AJ9MB",
  "key23": "26fhPz4kGF97pb5nVbvvGLm2A4HpxX4CxSpC5YoPJTCg74Nz1MJj8WGAkKkRLDHjFkVGpRe1exhkP7aCNBr3psNt",
  "key24": "5HeYG7we1cKEWPy6EojGcvn34yiUrcNZSNvGEaDVeiVZT8B4BjB5NcbC4uTkDq99j7v4Z8VDYWfz6svzKzQ8aM6a",
  "key25": "5i8wMcG1Vwx8WtWcdKS3Hkn4ebrLmaGUoTjjXEmbWJvTnLJYhS1dvCxB8nFqxbEYZBXy8qb3qRW7C2eALPPkeY4s",
  "key26": "2F6kYK4XBfGK3C8a9zQVdcsMAN2EooRaS9E8iu2y2uwyBpw9MFHNbS7fxTJzznUKj55AHWHLR7zXnmF4beXMPyEL",
  "key27": "29QhQL7YFAEUcMH6kuzYD5uUSYA9fYauvXbMvQ8crAPuqDgmcn9H8jsPtB3vJ5SrePxKmdYr1sjpSY4YfW7MoRpc",
  "key28": "3SpSMxTfuKCyGZLJUDbaH8jKLYs8qUmUYYYv5gfaQQa8eiEFJK7L1HwdyQuuYiyRTnS5vR3YgJEKsfVztsC3FE92",
  "key29": "2KoMzbWfVYy9EnGzzkDDAui9TjAc5t2dAgZdyPvKe6hmZhUDv8DEeSbiSuy9z8951sRTcim5MQBFdVfeCzvUCrMp",
  "key30": "5REBrECQusDQy4w6cYb1GnCuSCWojje36oHW6z3vFEZe1sumdPHCabP2CvRRn8pumWEMiihCeos6mFPU3SvhP1Ze",
  "key31": "5oXPfiS2dcYqXGuXdq9R8kxTXGCaYTcBvQJyhBJcceZLwKeqSLYvYfCuT62xVBxAwv1syQzY4PoFnMrqcxo9jNyV",
  "key32": "29fLFJhYNJXV9bSqYLn6MabvJYMjYmsAFPkbvwtuCm9aPdBJgT7UwyxG5mgYRSH2GRpgj7LgEaAMJZEgBsQcG1ha",
  "key33": "VvBFohtsfr6LvV8NtoeqqayaiXkFnzJcYJMc3Cpt1scuhkfp5soSGnPnJiCMiohmfgyiEe6g5ihg4nYpDFfYEBs",
  "key34": "2rzMwa12sBe9M44HxWRgyzsKiubU6uz3q2oUBj2yv8XPrf2iRKrJjZFSwxZCZP5bjETNQ6EPesEnTRdtLgV4oqKe",
  "key35": "3uSj4DPoERXMCjjpcg7Nbj2hzbKp4wdH6JjxggH1eJ51gMPtxEgAtkvBVoer53gsw8fPdgrkCTwHrPavkKkoFWu1",
  "key36": "eUjcV8B58ei8JKWjUvwc9mq51AD89TqzC68nf6VqWu48FN5gkC76DvYQnxgmEYs93yCDay7guSUhFUpqhh14mrX",
  "key37": "2bRr9GnYQxMieHZJ29GtvEXQ8Lj9ftLaWxngBmvjbDwGPGU8EVoN27V2gByqYtb71pqNWfQ1mAAcgnLYt8SX9Fyy",
  "key38": "3boXUBoCLZTwz3z491cCnj98KVvgtCXUzVDVozHQ4sw8ALGZDjf9ZaNb7Lt4s4wCSY8VazDD6ibfTHZneudS9XbH",
  "key39": "4pewWtHPYNnfY975NcQBjVWDCT5UjmMTdqVRULJKwKKyTAQsDGzRs3DSxQUZGQxLMDKHMpBgMShityv2RL8JXmss",
  "key40": "5jgHZkVVg42jWX2ZsAG6cavoUMXV1qJohtfErjAj5fYtYwGizwFvPFSP4nq9FAbY6S3U4aesEbLRW4Hf6exQL2oB",
  "key41": "3wzBSkrct9g76eS9s36PnBfNjerx61yFvQfCVoEw85dyUwboCEkkrEmE8M69FkVFKyx1GVqmS74nVypSCibQCMvG",
  "key42": "5d1K3xwYnwB3uKomwydzNo2RFnQrU5inj2sFatT11ctNKYmupKvurn8vWddVNiWCDeUttPdB96CETdaskoh9Ju6B",
  "key43": "Y5gRjojJDATjt5hpQ47RqXtaZuE6VV44VhScvih3dwAeToHfGe761MYzVjFdJFgQdkBcSCVaMH3BmZkbbnPzy2t",
  "key44": "5nDq37jphXrR6wvibjBfduqdtD2fAWKcpGAd4Aqr159yiVizo6hePcRquwT18N8f359BAU7vMrYziYnNA4zFmvjo",
  "key45": "fYMewiAzyBmBoNGRcu3wHGeFvEA94CCT8rSq6kDHKHvK68ByJqDwC6ZMFMR6uw6HRrXG83UCbrpFvS49inHJ3K4",
  "key46": "D8UquRYqXKi7oXP2BVA4BXseGBgWSwbY6Z1btk9JMgAJCQ9r4uunJroY3DNPjoxaZk4Pmqqw4Te1ZeKC4gnDSEZ"
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
