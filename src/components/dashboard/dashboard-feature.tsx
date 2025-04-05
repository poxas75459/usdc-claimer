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
    "35yvq5Ah8CGGoynhs8hMtwPkDioNbwrfQeEf9PSNASGFjULvyCKoSNrGQgymqJMPDUGvEwEZRT9VopSELQz4CJvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYv58LzxCypfSDcGuNeNi7j94GEvLgASGySwbFCVH1eUx9vr2Zgzfon7Reg8EeokZvtnkGMVC1pexm681j3RVig",
  "key1": "2QXgrrcp8aqERnAZxicChMEPT9fnhS1s2pVUn2VGSyQEpV4mc2byangFa1BH5kNZTHjDBTPfkiLfvKDCT5aDbeik",
  "key2": "2EPii9N1x6mAmaNpuJJQj5PM4JSk15fKkwUrcPxD8QwN5Nqggj7CekqpVuRRxgG9F62NYfArbD4tmhSikiVdmg7Z",
  "key3": "2Nnb6HDkYg3LbWTR1w41xcGTCaGxiFhjvW4qLxnZ7G1M7tztsRPGGXJ92x4tNNEzwbsEhXQi9zELyqGwN7sFMWXf",
  "key4": "5MCvy5sC8PpQ4TyPBwx7Lv8uZmrQ9jfKgs4H9HmMz2qd2gW3JrE81WqKYxnyFb5vV5EDSMSdoDnH8Ecs58Vyq21U",
  "key5": "53mzk9jA74VmkXvusfHoAjNKUc5ndV3tyvDarrbVn7gZDFDMdnx5kaZoU4SwgcsuREqkUpqShTht5i7TKaQsYUg3",
  "key6": "627D2uwhmSJsE377Buc9rYVv9j8uM5vpWQtzGLyySiVoC3mjTEaaamKCmyX2Gqjuoa45sf7ZJ2A2UrJJbPrW2ZNC",
  "key7": "3rBNSVzqR5bPHxfmV7HEGeeHqLZnvWhyJjtYgRDbgQBGCSMkDxMarY4NpMxCid47SQYDhcqsHmnsGHAFz9NyumoU",
  "key8": "2uAc2W8ARY5ssEwmVJSDCG4JgfpEUUguP68GsVqFc9CARRjfjsfn5bbZrA7crZPASaDGYjnNK4oVCkXTbdmcP2AG",
  "key9": "3yX46tLCeHHTwapWxkPZaZFBdFwgbNMcJtSUi5fMF3RJP6sUstGCFGpJQ2W1eKphigfwNfgqNGwytVwpcwQ1k2pX",
  "key10": "8PDZBdZzG9pqDWtPX56FkcHe713jG5Dt8mTnfjWBXbVYjHWyqwm6iAGVWTwrdwe8hL7VBPUy5NqeeLLgNDZrvHs",
  "key11": "66BATzBVYCyssUYYvZSMXrwSx1CCMae5P98nRo3gWiK7zdFNT1p43NYUAMM4c9fuSvEvgqAcJcja7Ew3mqCyxpd9",
  "key12": "66J61ZhfoBN931JJ9S4C9xPyXWjy1vauV5WS6WL2ntHAvZWto2kdKFdED3k8RUGG75rWtJ3VuS3Vkht1NSU6tGLd",
  "key13": "2598pTvo1WR4rc6YGnh9FTjHBbr6zJnrz7BsuPFoS9qFxhcUJUjNqUyxVbMwcqdhsLqT3RrxEhDppUzKvRD1Anrz",
  "key14": "4RzuhmVgH3hVZ7t2J3cjfKXfR9317xR3nfn8gpPJoa1T26K81wg2v4DUkAnQmxDnMhpWuyytyV1FadS3V3LU8u7v",
  "key15": "5dEBxt9fcaqn35KUnpuzNEzLvWTJKg1KhDFv3VBtBtRuCBMzRTsHdtt7LeyG2rEbHaZvgVenpivfY5Sd956DsVRj",
  "key16": "2ZXEe6DRJutr5EdGJpwtVvjqvt4Un17KFUuWWXPBaQWEi5Vfo9uiaLYHggXFwwwLbw5fKDPurYkrp9KdKaxL6uUg",
  "key17": "iNoArSgX1YYLJx6PzuG15nBTa4GKCdzuDcv6Psow3bkySumwjzxjevM78EgQ3wuzztjaewjVw3qw2vShkTwY1pE",
  "key18": "4u5KF4o77BJ3wF4PBSzSAbuZxmEx2Nvt8u7vQTsRXedS8k8uGA6FbZHeJ573L4kYmcP7FiMitgSRJ3a8aDYgZ6Dt",
  "key19": "3EkeQbT5sPcLQGYeUQLDf3mb11gnf8MJSfZPqPaUedC5iy4M19MVPDiugg3SJpXMfNsDjTysqgi5NH6X2MKq5GKp",
  "key20": "3qwHQSqahSmXpq3nDRn3ekqa88ffuMyFPNzMuogTn7HCx8n7zB7ESzz17KkwWg2CBkYEDMYGbK5Y1z3w53zR9HfX",
  "key21": "4basoLrkWXmeh5DiBbkm6zzg5Xr6yFkGDJyzbmv45aFU6x5VGtC1xwVeDPUXyukjbR5eVoJtCHoSCzjtuy2P4uUk",
  "key22": "4Z8dwdP87iqgGpC9x8hT4zJtBKGMJ6dwZNw8vQmdp5RHFuYmARKvdjqhDJZj25BpjQ95o3GUHyv1c7XuBv8kdB6P",
  "key23": "Y6UJvTJG8kaddsm417LkQ59hwDWrJgNHwxK7fmomCAhky4pLNZB6T79hGWPhmpnsd9P86bPz7MHK6udLvmgPLf7",
  "key24": "bL371jSdbgFBAjny6Bq15yFm1QxN1GLg5BNSZmYWdHm3BHnbj8Zt3ZJJJRcNHpB3GuHSjNv9MDtnckrYrLi6FzP",
  "key25": "2Kvwvp5sTKJXJkNJ3ZzxDtKKYScTvXu25u4mDhwJ1NZp51yRFACRFfEqxDhwt3WEpKZdYbkAXnRKcBvifraSQrAv",
  "key26": "4BLdyydGXNYjVSThktS5Wv8YSkaLToYPEFmkXySve8cFEDw69vdnZA8uUQFHFjdNvz42trtK5qpm6dPhVq1mRj1P",
  "key27": "53pHf4EyfcnQaA8kBcqGeqgjcGc8QDUHqZKxzXafo1bUBXKuPUu3JB2wG9stwPdz9wi2LXzFVbqYGeR7t5rNcosQ",
  "key28": "yJbxZfgcNVgJ1Z7UxTshYtp2dCYvecusxHorcFdL1yadpnSMQd1ubEe4jtDRjozSxCmtjFwnHxDVTiYXEY1fzLi",
  "key29": "4dj4YXfbKqES3r1cGdkCpBGNzkKKXn6Y14optGZRTCRbfZZCbTShfZTA7DKqapqssVDmTL45roZQg7Pmim2ndx8p",
  "key30": "5k1SY1zBKfULg3Bf2DoNeinTchkDmoaB5jDXfV2nWDYy414kP8chBJZjY3vi8EhMCZjNH8ikqgyFHhcx2PJmYWda",
  "key31": "2nng1U8adinhAeQgidmG1V5v8eHAfBQxNzxRgJbUE6pYFb9ZrEsJRDKkDxrfewWLPk7DV1TKrH5uywkJsZRhZRrr",
  "key32": "3JRU7s8DEip3MBuo11e4wWXAEqzxMTkeYYdJsQbTr3xcMVTQ2cptkR12L1sZyxxnsgKYvdzet5NiDzuznH8fzhk8",
  "key33": "2oRR4T1etzohdnuZ1MuBMP4RSbb1xhem2Jiw9geCmJppZbC5SkLNx92pAux3D4FMZKeJJrPMJVR7u4npzxQNSthX",
  "key34": "Y3yyQ9gdquy3wRhmArewCoHkUyrUJPpXPzikKYKTQsYL3xAUSv3UAuLivoXEyvk9swgobehvUii2YMbD2g8obaf",
  "key35": "4dRRbn2SBYE5cKw4o7Zm8AQGGFnf6uUtzqu1Kwwav78uH3mLrbGaWUpngESgCzVWp6QdivT7rtnkoCJqUtx1cmjL",
  "key36": "2RxALMnw2Y7oWR2eDNagdNaxouBGWvfgwpUida26gM8JjNz7383uQs8NBVMr26RNiYFTLDmA56vBybGT2q7bPwNo",
  "key37": "2VtgLHbnaBT64p2eP8Apa22gVvn1i8ugENxKa8fffavYfnt1SG9THq7jfPMvBA9yYqktteURRtVjUK4YoNYmp3XT",
  "key38": "4UAmtEhFS1CNikAxADtk66JTfj8an16vHAp6GzoiQLVgjcFnHU1oCMmCbfz8Mj4hDtJhZt4pJ6knCkDnGG1Yb7zr",
  "key39": "4KoTWe25S4m2pSd1bfJiy5DXTgcLaNt6A8pGDooEZ2b6CY6Thf43F7rbBUUPYqinuUT6rpDm5LWu1GgAg9evbDsy",
  "key40": "2zJFAqXgsSHSMz5tgwsBGr849uUKawCv11o4W5cg9CCUA4uxC9etdGvV8sErndFdvCxdDCwqCDUvBRwtmiGrcKif",
  "key41": "3bVoxPGc4Y1i4sbEZQ9N7SHieorAvbfbiybWzLVniwUhRbUwRCFLW4pWcmYCWduyeNreFfjLqseEPauCXJmbwgWV",
  "key42": "4bdiAjadi4Rd2P2dsohurMzsJf3Bgm3WEfiWhguKHN42GzkcY94vu583d7ohMyU64AWUJxHUciTErCxpVdSczEno",
  "key43": "5Eq1Rph9UZioya6YQExRJobgQb6joTCgnA292zR6RJ5N1jXyeMtgCft9iuMvisa9FEVdqRCN2s4h7wawCeJnCkiF",
  "key44": "mKWEv6J66WmLM6gG1nFaBW1LQD8PnwZyWyM1duAUiFAgu8qyMXGVn5Y4y2jErED17vMhK6gc2wv2dtVb5emsHku",
  "key45": "usvAdXgcjscyYuzVLphVHCyyXSNcVvdwgTfUy1rXY7GgRwZxbLneVzVaRUpxVAh8nWFV9t2W6iGWDjuTeQUbALx",
  "key46": "3Z9cv1WgFbaFeCgJ9gR7epjuKZHudikTiWLKi6dNuCCW6d1xzfkEq3RYQ4ZXiyQoN8LsmAMRKBxBshqopNvMbitV",
  "key47": "3XGJBD24Q2uVU8aRxo1KcKXBmAyPSNuzxsnN1DzsaUBThrjmj8ELM1Mb52tEGq2nr1sj2nbtx1zV82DdQJmedro5",
  "key48": "3ePm56P7nrgrkaHyV6gWLByaCYdzCjDzLkJDnSb643v6bd2jEFmVSbh3esXwF89ze2bhig1Xv3h7YiGFhuA2nRTR",
  "key49": "3uCTyg8FwTTzCTHUGiuXnQ8o7ES9bX8GgziAQvZHvSjhPzb5SjXdmtgeg34maaqceQbZo7XCjfzw2gc2LjhyV11g"
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
