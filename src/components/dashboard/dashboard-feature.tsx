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
    "5PPDX7Lz67hHT5U6NbNpMTcAdg264Tmn8qwxsuk8PSYGEebz2Cz1ZW8EaB4hbiQY2xNJikc7YR7HHrcYewxxw2wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8C91J13vs9ozSHwB2ZVezYSATW9zN3o4vHGwCb3BGywQCiCbbPxsyPTeP8QK6EshQMvPhNsaNY9A5ZaRRb51Xz",
  "key1": "2FyaWiDF1e5xdXSvn176xD7s4exxfN1a2VKgM5jb8m3ASwvme6LRAerYLpfvk4vrUDufU1eZJJa8vL2FaCGNWoCQ",
  "key2": "EuN5DsFhr6VX5xz85uCLHj5K1L2aSWhSbhKuHPthUDt2o4f3YS1VVn26hRaZ7teYTaP2JmpwYRqemmSrwGeBy6c",
  "key3": "5fMToawgsMgcSRjuEN5UA4bxEdur3QBFY9drwtrq1UbgXxjPD42PfHU7g53ogYDxXrwTFAd5eQ4P8EKZJy77QJp8",
  "key4": "XUmFgN8pPj7ffQjpoxJrtZWJtvdgJrdZh5L3uEzmy6HL4e38BV9Z12qNaGY1db4jXcK6HKJR9UBDcRth4Y4qnAL",
  "key5": "5TTjEDXiNinnWgx2vBDXmtqMucn4HapwzAqxuZj4XnHWM2NYhtujyG2NzFZ42pVHviUrLPgDMKuCDwEyLwnpBGcA",
  "key6": "ZZX2aj3x8KqBByvGq8mLJ5gaV6tg9fnhheFaJiksyUMNd2k9Bjb4yfUWEZQMjmzaNeTBTftBsRv6rCC5rMwqLba",
  "key7": "5vMM9taFeTs5DL6W13HWRsLm2bvs6w2z4CY7hCjiJ53CbSWnzob4EWM96w4NsnKVionEPKjKJWXPZwk3sWJgHsqy",
  "key8": "3McZDG6rwjVFUx9oNTwxFFe6R3t7PkjdhiwuxBEJQPNpCFpq3LhraYr6gDbJhYMxfLdGf3ZvKYNCjddkB1Gumrxr",
  "key9": "5urFFCh1wcCMusjg4KtBRxQ7J48z8DHEtwYf3ArC5gPCCGTPG8qioEbFVyDzspdBiMdeq4JjgUW7wJhxRdhRY7Zm",
  "key10": "MiSL5qNEugxEQUPusWyf33LTcgUyojAJsjy8ze68KDSPwoj4AwsqfuFR46nZs4xJY1ELEwMRmMqfe8gP3wsDyHG",
  "key11": "4rSdbXtExzADJo2uosv33JmkCYFdFx6gKApCWLGKwQRaoe9zwETTfPUGMhKnWApPmz2zvkci42ZS5sJdN3f8Yc9n",
  "key12": "21YGkvcKzYNffsR8Gh5XL37sXH5pd8kMwXXQQ2kWK8nJNDiXjdeEisCHg42xajnFaJHWuxvWixh1s2Txro3tpbGC",
  "key13": "34EM8XVsvXZYs4itxo5cidYBCjtZq6f4bTrXMvT5KWqMx3zcoydvt3dcaMWD4ratSp8SsoQrNVmPRTgizu1wLrSB",
  "key14": "23Ubfp1ion8BecPjgtF4Z1nzaRycKxVt21daC8U7CEXC6Hse3tTJvgBquDUh3idJ8cXC421NfgeF7AzdcBZqo4Mx",
  "key15": "2ZEwjePD91vPykeA4GUTdu53Faj1KueoTrKWUDpjahbgTo4q4TWFdab3HgcmL77TVEPPUZZakNyQMXTbaf8Tfcdc",
  "key16": "5wMjmBY1rcNnw8EUT2u4fAwHR8w16wYB8FebGN8asW4CqxnhBjbiEUpaPtCADHdY8Ms59x1dxtFmNexqQLjsJcmU",
  "key17": "5oejZJ2tDiSssMS3ucw4pSmwEw1tRKd5xA3Hv5CQppQBQo6C74N4BMkvoSYWgejmuGggsbSe5ExV7AqsH1k6K5kW",
  "key18": "5FmQi2S93zvGTRcAa57Tv7SwxSFqzwcJPSfcP5RvrS2SG4ozBRqUwQx5JW7NSeUCcwJSfcEX6intjVJNLYh83Wty",
  "key19": "5zVLDrYqEYYRBiAW8adwPtHCeuEjjtrGqGxdFLBSXeEoMRFqBUYckhtKMoJ9xvWDsxVdUGviVcxFiCbNWLH7pXtB",
  "key20": "N4fQJb9tKN3jW2qALzmrK1o1msaCfQ3i6LA86MqCAZYmxfC23smaoU8ULHW36eN2eeUJ62q8Mqcv4CrT1PSro7L",
  "key21": "2YvX74f1yUZqcrvuFWovxHoy9iXuktuSe4VQmvxg2SQpynW5nGNvsV9778quDcZmB5xYWHuCiC9DBBUj2h72mc1S",
  "key22": "4L7SYHPbSBPhGpYeqZfEBvum5SH9U65b4Gk6Vh7jBJdZvdHsBp48fUEUFVSKifT3cZZaYEXJ5rHcS316y9fFCnnz",
  "key23": "5412hkjUPnGPHrcMy2J2w1zQNiQPvjvzw4Gy8jGzwKtkWf8A4agyDyxHFbPYAzBCp8czvFWUC9BXb7de95KFN8kg",
  "key24": "qsFEdTYtbehdYVmZPNyHN1XACbYZ4venvZv2Vq7uuNRCuyZGDibFSNev9n4QLZg5zpAFuUjaKt7RUti72bVugLY",
  "key25": "4mtxSitzHVDHNLApFJYfVYyEm8QZ66zSpWJ9h9i5Zmofy9SqwkmmumaC8wLwA9q6wu13cAapwW1CSdshzhVg3bmE",
  "key26": "4xBRZiVLZLEiEvGhwdiYyUu8CthBkUsZmF7ouq2ZZeLdcBQgTcfPNwM9fcZkuw7h1FWq3PgrF1Wr5tz8ZUKXy1ne",
  "key27": "Hm63n6Jpy5C4M87rt8XhbNKgfpivXkwNZmDNMSCdxHx3tXkVN639foU5MNJ1AbvU56TYYz5kiUxJoWDHgs39Xns",
  "key28": "2gqvPTkVvts2cCKrFWicrU9NeYFVWKZ7cCbfUdN8j3rNKeh69YWMZZzWrbAWpNNN7APJMfcDQoYN6xHzTyXN1sAU",
  "key29": "2ddCWJyNXpdAazFAhQxaybx9XcwRsDcihX1udgeWJaKyaBXGkkSZobSdRfFyc7fiiwwLG7WXWr4yVWp4BBRvgBZY",
  "key30": "34zMGde6x6XQoqbnGkHQT8ZsuNTGeWTWLPxcqMdE3pNbwck5CD21B22xuM1PrPAKao6hjW48ieh9P8sat5hr9YQy",
  "key31": "4JLLcRG4EeRJUg6jHmu3BoryEPeci5xixKMYrPhKpxmk9VRpgRXqFxyjHEh7TuY9vwVv7q9oYzUfkiFYHw2u1Z5G",
  "key32": "2Z7GVfNjq3reduJstfuz8onn7ih6kGmxfaTFUHb4gGYN8fzssq7fSREpFn724i4AcGbfexE4XbfPJXktwneLfkSe",
  "key33": "59WTeDCAWKG9sTVT8MqWAj5EoQYfPQqTVnCSCrWBeHsKz5b4jJuaAANVzrNqQMTcsG7Q2wyZGF2qUgcyw6y61fnE",
  "key34": "5nomiKTrYPZBAtWKi4duizjDL5ottMtgqSBb4vvxZ9JvSnc1xiRKggKSgNkSeU28az9bGuAoYnooRCYmrdzY9kwN",
  "key35": "2zDuLJpLAFXVu35PPGqK2nMoLaW3kR3HGKcBrtRNP61MfDhdQrEpjVV14JP6MRzZtdRV87Caqp3Q3HA9PkLWopg",
  "key36": "3EwmqmNesvtVZiGnXmznm5gGAqqEp2fDc46ZDwhduE95D6LJryUGW2gL9iWmBaBCJFGuaQgubzyGSgXPdne1mBaq",
  "key37": "41SaR38kWMT4rauD7dVVWT2v5tdBEDcgFmKhms6GbTChmBAhSKrtqJPu8vHFt2sFE2JSVCVwRziKknH1UzaBcU8H",
  "key38": "vngEfPXxzQ9Be4zxvep9xqraaQPqLuhwG9EY5gsJBQdeHYEWta73WWhhMiJY5QdoxYyaDVEVLHx9qADyzXzSQic",
  "key39": "2WBa56krMbBnwB1EyzfGJgwdwvzH4FFE76R3Rb1A1gxZfKFHws5zwgmz2oNvWbAjzWsUYYqCRN9W8jNa9sohAFKh",
  "key40": "2YWb41cT6ramBXYAjr986Wy5h8uRKsvUrhdJUDwJWtyNEd6EyccifnshEhuTXqzCFGtmzVxo4smVR6LpbKxNnYTD",
  "key41": "2tNWqCZMD8wLMHtScKKt3pdw74B3jkYRT7L59sTNFExcvnAD8jQozHq18BH91q7ui74g3bugBnAAF5WfxMeBN6Tk",
  "key42": "24KTHd7Hads6SSdiNZUV8SXHBKBL1vmvs7AxXBiymobgXUopBK3qwoNXUE8RBxWBZno9fnUMbx2avdXa4a8nnMwU",
  "key43": "2HKkpcaXSLP8dfkip2aaNDu6MUzvUeeQCGEqZ4QYJRHGeTbM8t4KMWLk5z9McsFHkPeLErWnvQkCBnocxpaip8GX",
  "key44": "4Lt2RWhjjCC7WJfYoT651vX5ncpYYjepJzVWkjL6vp4fSsS9im4b2mi4JTfyHQQKCrDDt7osmcCxsTcRdExWEhHU",
  "key45": "5m2z4wZcGMTicJWcFKqKBKXo6H2ov7UEMb4S9ieShFgBS8ZXppLmAuqwa7r4pRGe8nqwUrJBQa5d4yXEu95WdLje",
  "key46": "2Ft5xgmMNwp1HcsDFuasr1ytXUgLX8xc1nM3AxJB5p1FYq343dXNG6XoHfNgzNXpycKjTyNCBXGmxKnYxBCfmnZ1",
  "key47": "H7AMPUBA2NeuXRx7VCdGFoY2Hd9fg3BPq7y2RzmcycU8UUBDUaoDtjxr3qvy7ZSWcJSXSzBQEvGwdPwV1q763rY"
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
