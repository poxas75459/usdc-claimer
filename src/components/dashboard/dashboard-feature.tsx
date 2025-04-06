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
    "2cCTh3xXf6iSE8UcHeqqkg3gHM6xKEkNzbqCACnmSGjtivtQXdvdiZ3tCGBprSnDt27a1oApM6UMp1VQbPvT4iT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiYsacfQgM2WV2coaYTq4j4PydJsorU4UPxcn8vD948BhPxLp9jbLZJYkfXkXo7KsfQV19HfvjhesxV4AFSGwTy",
  "key1": "2qxBmW6gFJKs6cYWuhkzx6A8VL51yafsC8f9Bv26vvoys2SzesEnn4wHzyGNaUr8WSJ8cfmf4Anng2pDhG1F8128",
  "key2": "2WnV5pBhf9jw66iPnZ9FvJbGa6VF9EFjf4MGfdMWrH9sN1JBUirg57AmPF3uCzNoioeF1MPcfS3ppd5fW5UirCoN",
  "key3": "nbav8MbbB2G7CnzANwm7vEsB6TGZgFW2Je1sW3Bw74M4gdG1mHT67fwfCirXDsAE89RR9rp9fbCGdn3duLryDof",
  "key4": "3VtS84kvXN3jdQv2NNSADL6YErw7uyGLqNd4D5ZAk9vfwYJz73oG8ch3nQzt5wiMe5Y8VqrPBToSrP4GDEDcgqXg",
  "key5": "4X4sXfZD7A5jxWz3sKiwajJM7AUipJyAJC3dvn2zbDEo2Qk99dkNddFEZZ7rKCVgg1y3Q639VtJF4FcVCPyB6sRE",
  "key6": "KfUSrxnRKCfM8x4JUNwbFYA1TTx5KkqJRdFQW83xp77o3D2GvT6sARLgZZPop7YtQMEcxFfN7mw4V3qMjym6PiW",
  "key7": "5zuC1hxY92viNtRCVWdymfGrNukV1VQuCMfcNFGFW2htY7ErpsJVTBEvhiLxJL13HqsKyBDkvuSu1T8jS6fwVsY3",
  "key8": "GXJRymQM6BzdTDVHwNQjjM9bzQdLcPL8NQWkkUSTeVu23J9rM1zLc9ArjVMygtjjjC7cmzU9YiAfKQYpw24hWau",
  "key9": "2t9XwB15SUCcveGpjcVarVwLFF67pqiUvCygJK7xjwrW16dqpLrPFkC1orWAQWSm75K37Te7iQG3KFs9HvXyitbY",
  "key10": "HcMSJrYmMEtBj1mfvb35bvAm3CPXPJE2Bks7P8qoAydiukfLXz22TLAocWLwB2sJEt5dXeXbtspsSwwVdS6nQaG",
  "key11": "quKBDWfsud3Vqhi2YVGWCnH1LPyoxDiQG6EshpP3a3kMFEEwT56fXKPiQDqvXQfh1vtnYzdcZEuSm391un4FCf2",
  "key12": "4MWpuiaCSiAULFKqf6NEo4rz8FeyFuNTUQ3RfF6ZV2acP7BaWwwxhkCwzAt76HHYgi2AR2es7cZE2zg6ppAtHErm",
  "key13": "3X2Rh29xcMdErqLwsn18y7szXZMWJdjUEfuqTeiLiRzTK1nuz7csQbuetJ1maiWQt7UFCdT7JDDTT5HtExeDCsLq",
  "key14": "5DpHXZ6BoXc7KDdQdUExNDZB8mv7b9yjwsDpbTLrQsvdsvj9kj3ysEtMPHv64HnvdD1joEiMaodvpKDWeG5KtkEx",
  "key15": "3UiUCBh2KqEZA92UAb1Zv67KZyi3jLWotppHdcHUtv1SiaoXQMtCDoZqPhxQMJj5Kq9QPqJoVRkhqRjUfiown8Qz",
  "key16": "5zuxNDqZuKxMPW4fg4jRTNefmMhNxArVYUvv7F9Kn3XA5CzTwgYogpopdd8q8mTqrjqgek5NwmTMFqUvdgG5hHyS",
  "key17": "4X4pp42R85N51pVTTT3q5A8nNcJkiWjufTRFHcnpkeNgcYnFo4faFz3Eqm6Ygs5XA91LTC6b3PdqqrgXcCL6TbXa",
  "key18": "3hvEYWnaAgP3XSsnV1WP4QZUGSy8fQHWiGYWgx84sMUfEqKbtHmBL4y9X6tFnoxBZPhhUALvKNKrzgSYmdKLb1UV",
  "key19": "VSmEiAeVHMANh4miR7wR1bDvtK6owcPpNLF1LZpLSZmXatxGVeKJZzCW6JX3ttxuYUkrKq3tPzi5dXMsMN51pWr",
  "key20": "MFTdywhsWthieFWY4Ghcv7sKfX41z67cQm2jWsp2hQn4SRqiNNNK5ibCDfqJ7dPXrvPU6AMs5RG32r3VVNf8MPw",
  "key21": "4YVYDx1DG4R3ktJkXLRC2wmCPtNZCDQYfiL1iPe6R7MpeXUMRBkaGUC3othaE2xtXY7XWs9tNMXcutW9t1W6HdQP",
  "key22": "MbP6RNBW17HVSpSGdwscUWcC7d1KFgNuKTSQ5R184AwvmmtcPeydMWktncQ4ZcZaYtcPsDDtpPfefqPeAxA9rKW",
  "key23": "2wn8gneSz8fTt7KPW2iYkYuk5mpgUcKfC3gkvv2Y9sZk72QYnCa2CzTr6y8ngmcqpnFTbEpKUpYv7fk6RL3ni9em",
  "key24": "ykVWqbUUk9YhwduMqvXB1bG8f3eoNdT3hE4EXg47UJsQKUMV7map8cCvGrDvcChugs2Y44EvwDZF8kpncFmiPvy",
  "key25": "hVaFvEkzcx53CHhCVK3Fe8kNLPwMTBCHpCMF88xcBLQD6PymobETTRjGPbSLfShsmiEkLxh3uy7gAQEjPcWvLfg",
  "key26": "29k2L36EJbBHdNVXfqKjcQsbqwG7v1TyS3sWfw9u4F18iqLiLCDatUcAXpYywMZwsHnUovTuKyQd32Yixvxb76T4",
  "key27": "3fVYcVdJdtzLpsfgkg5mmLMCVkTKAQQ2BmknGd3BVNNkhjUnf45NNytQ12CGzTeTffVhvMgzT6EzLpURAe9Bs9ua",
  "key28": "7zKMwL51KWcGe4XkdfmJ1J33VBABQYFc7BNPKA4xWookuhD8QWujwU2meUQF7bguVS7y9f6NKjzyYkNky9ELYtY",
  "key29": "5NarSytHEWeLdsEqoc8SAUREGuLPrdxX8ZzrYYnRw9eVujwddM34nFQbVKjKZJ1HLrGmM1hdf32dPGbYBU8eBWUj",
  "key30": "3eFcRcAiJBo6GFxLHVEsoHkjE3QTYWtvuiabmmtHzC2sxpBeWxoJGkWkxiZoNC4ewHSLcXCzFWymSSz6kfWcrxz5",
  "key31": "5s2afxY6djGCSYJ2mpHg33na6YwehG34CR3gcbMMup61r1TUxonALWv8KQbu8P8eNwc4pvsHMB8WxKPX1Rz2ppFa",
  "key32": "5hwoME336XgKk7pLWBF4neecemuTNjDvMMWJGjCaHzoVxWzcBe8Tax7JbHuFzvFe246ZFmB3d1X7CFhDcgrkSxus",
  "key33": "oaHkgQoom3hUMjNUMrJsQ83J6fAo1a42sfFZvJ5Vvp79ZjMyaDcZgnRChFaSdxSVnNaWafF7iW2W3u4k8AeZmBg",
  "key34": "3TpvEL4YCTtL1e2wXK7QyzyqLZyMzteYL9jCp1fwVQxGREG4ZYBUC8dDYj8bt1C1pTTkHsK2bXVQnN2Z4AGc8usK",
  "key35": "54cSG83Rtn7hugifd1pUjpUZorqCBBfuTVBkP2iWzDuWkWvfg7uNyswPhti1rw45z8RcB2QB7p8CvLPLSEyqyWxo",
  "key36": "4myMwEtDUyh5a4vo4ofRsNTzAKaT6BiRKrdYnSPtszG8C9r2dUTKMuYXbeEUz5miM7asSmhe5ygzaVx3eGgsFddD",
  "key37": "4kwGNRRokAr1KmnaHpiKwrxej7HS5UhRhvaXCvW6vrTmaekwDzKtqSXxYTbGkjdMPXwdULBsmsYgMtPQNMp3ij7B",
  "key38": "9kTVigZd9qZryr8NNMdWwmVZFFGwAw1hUmN9hdrU6FaDbgu54ybgzL4UapfEkwviAvk9nVeokRHhmx2bgaPCRWo",
  "key39": "4vmBpAn58JPHKJZXN9y55BgVYFGppjdU22qE7jjRWsgHctiQWuhCj355iiG4NyXc9CAebEfHyCPQkTG2q6SF8cNo",
  "key40": "mJYN98697xB5MY9Mn224vVCLGCANGkD8SJedR3mbZGQVN9pZeeaWVe4Q2CxSRsoE9GKmnmqJkZWfEfjeSDn2rwv",
  "key41": "2Z6jVzDr3q9ZqWNMcQPkR3LLgGVb6TjyMoV1AcMoghnR69PfodiFqm349HpCwcxBHJCLkVL5fkjbWUe7uwvWUnhc",
  "key42": "3gcUCsr6ph93hxagi4xrJ66YnzN25oX7egjSzDmeVbhN6Xp5uWdYnK18Ug8vzqtZr1b1uuyyV1UibzPcWJh8c4kA",
  "key43": "8JAkKUEUwwiscKpXZTmmZaP1v8cFMQ3CsfwSkpjsyLLbmfDZWZGu8va7UQn2t3FrsVc2n1vdkpmjr4fTYwzXLNz",
  "key44": "3dcyUy8gFFQFZUUtZm2iHS1za5ukR16p2Nmrftch8RzAQbMMkZgzJs5kX9DWLWb8P6KmgRAbm49xhgRNqHne33UN",
  "key45": "5YzmBnyYtjFdwHdMGZmPF6rmJFUBaVrqcuhNppEZLBadiUsPMA5JkVt7WPh9SKxAwycTwm96NvP7yPzKhpHx8pZb",
  "key46": "2mnhbXcUjMcDDyWMJ7tSwzPzPVw36s1s5TzV4se5HUo6X94viMB5XKrwCqjQukt66vM8WjqxEfTZxagqZDLgttGW",
  "key47": "5d14vRpyq8dX4CvcpbHr6VG9G3V4ZT8RcUtfgA2PgLpeuhRsCWWoFJkC4SWBRQW1RJMwfntq5e3saAwXgrWW5eJ",
  "key48": "4TyHZTEgzq2BYtj9mRvddCXncz9dYcM3S8shL7NUsJkVYQGuoaJHahHqNgSJ8CNQpJpzGVdwpdj3zmsdVHyDSswR",
  "key49": "4petFU2oPVghox2qKD2D3aEcxzsvhPu28NzNea9kaLuJXKTqMr4Ubw4RPPXsK5Jbn4K55pxUd286MkM8TtoW2WjM"
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
