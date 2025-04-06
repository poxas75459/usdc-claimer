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
    "54ap45i5x8Mgt4Luf8mhY7vm3C1vvkcjV2xqSeeZku1mRVzyWsvdNxbHrfU8EbYvXyZY5CtTAKUJbUWXhyE2Yci4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmwAfXhLioyj4y5AodUSK8iT8LtCsdR2SxczbAiR1kJyMTsdaSWefoXry1fJdAng7Ean59tpYpsVwEASMFhVfFs",
  "key1": "3qgzKnBrDReKegi9VCicSug976kcS32N54QejSUSih74JwJF8NGBoDCbtngAQqhnS3WCos1QDBwAPeT9nQV118Xu",
  "key2": "4ez9rDorMTmxSGwdstqawnvN7kdacubGZxuLv43QfqLZTjY1vCFMNgVvpZeEMrCbU2TKAEbPmxR1m2N7DoUJVNUL",
  "key3": "3v3L9b4bpuxsJLr3Jxd3VqUMXHA89RSudDNnHZAty3GnkzUrzRWPgLFWGJNpAd18o8n31ZKLaotEy7VGEHzeg76w",
  "key4": "5Rm9EqhMxjANWV8TGR2zDpChHXF3r8gsq5JuTY7vtvHGdo1K1isgy6SKUk1X7Ua2QtNkEbEF21VR1raATw44CSjN",
  "key5": "v5iw4bK3B5LPUAh63hAPwifhVfBTxT8thLwyd6zSmYKHAq3hzuivU9DLKAc8XFr3odnSDtqLKg8NvqTr6CYy9hQ",
  "key6": "3DWrzAyc6GsXpjMovjCPLNyEunbo3oHSxojK1up8CxVm5EBQQWq662JjB3JxgMoXNJeuPKdJdLBiVZYVspR7DT4X",
  "key7": "3WcV5BqmaPmNp7xAYgbPz4GWhBZaascKVyBqVee2KgkfV8eF4ZBtFxA2mZ7gWhVGba9AGnj8v7Wky3qX57SCvCnt",
  "key8": "6QUqn6yo8yaZnC8ENZRuAJw9VNZSzA3uowF3m9mwvc12debuxwFTvPSRa1Vh5eqqDfy2FgXiLuHngMbhPoNkvQE",
  "key9": "4rwMGgx1VdsRZMcJzPDByGDiresoUpjxDi8SXhqfxe1ZbTaKD4nq1jTVG6nvbTiRhNcxfpV1ComxgWz3P7eGJQKJ",
  "key10": "5jmf3NthkyjtZ6umzayiXdFWMmGvQ76SFcabtZMx1vGMVj2qctf23eF2GZTbF6JJFjk72jDs9eRd7wirRYhycgbS",
  "key11": "2LaSDnEgjJJj7a261ygRci9pNnUSGzi1ntwWp8Cz1mYxo7h3Q5BKTScz5VtGrrU51nHuWgd5uhUjNZms5a8MFeNJ",
  "key12": "5Ta3FKBZQMno79qvTLuqVFo2twN6FNwzdCp2Jvasf3NWXNCd4hpcXntA2ZMQFnneyQ3muv4JrvZ2B1XUrQ2HMrm9",
  "key13": "3xWTN6sHUf1vD6ohA6ehS8pFYy4Gek4KXZ7ws4uLDmqoXCNMFNuDNHsJDmefYehR5dZh6LySzm1QUETDgshB8AQP",
  "key14": "2or5eJFrcsBydxRtgTjXzGsjRKZJ21ydARvyiVM4LQoZQna4JrgVRegZj75TedcrFRvN8f6y6LH2sWLCzWzLj1ri",
  "key15": "4arHZHFXkjsJaLkkKgp8nmMEGiiGiVoqvwvKL83vLUjRTVMJGqJ5QnU3we1CDW5TFHsL6iK5564akiRvc3mbXJWm",
  "key16": "2UPpLKpt144kp9e4Gd7xqRc9hX89j28FLzYXzvMaBVZVfAmya2aoveHvxwiNUgLoLE8LtqvpR2DTaU1rtcHH1BeB",
  "key17": "4hKWhwZr4Jc6gcnkcidCBYFDTcPzFsYDFinUc6vur5oKUbhCYZmVW4cpzCWW2yUD1UL332yhcT4KLEmsBMGdUCZv",
  "key18": "5Fmm6G2zqJ3WfRgFqRcrLMRwqbdBy75PHfxcfVwSYhgw6pxBCxsTxEn1HKCfmo2vQCtR1kZZrdaybcZ66HF9KWMb",
  "key19": "51h91eNzF4sdSmjcb2q12PNxoFy4xdEGUzVfHgiWRptzz5wXb5m7i6RTWBuVfvGcieoZkhLEofjhr7VyZN6nBnD7",
  "key20": "CGPAzniBLuAKurqNGqTQSruuyorUrkXj5crnYjHkv46QqzfZ7cN5rBQq6hzf9pFwppFhvVeJqmdyDaziQp9NDsP",
  "key21": "2Yscb6tKHsp6xAXwWuLsVWK4QvivARUAfVK3kp5nC71Vrtnt9ejhJAjoYSgbLnXhEaaKMnS9Z2Sn6yKLiHDBTNUg",
  "key22": "24DXja2GrtQ4NTjuHhBojj9bCg6TjcTVYM3Ss9M28spDrBCBbuviQmJa1Tk7caNcAhpFV3kHQJ3kQS6QM4MVaqEy",
  "key23": "4o1SwzvNVrhaYTUJGJapboy4RvVeiq2LHAzewEr1tWYrDzANvQrgoZRtRHPhofcya79czi9Tt87R8zd77Cvyv6A3",
  "key24": "5AfrxxGe17N8Py5uQhf3oFQmgpAcbXmdcmgQeLkmnNqaR97NsXQqU6hPaTeM1mJjPnbxJ6ggcABFRs5hfraMcqtX",
  "key25": "58of5sfsfXzJJ8GkqM83WQhpBEBsXSz4VSbfdiBqG1jkJSGSkiqQGQ1csFygbyYphj2232cXoFPVYHSFn86gZ4V",
  "key26": "MEtwSdu1yg9iNAe5wKWS3iHJnfeVuN9hyHwhGYh9wajCpgwSyGqtyZNUyMSNELc2QAGe4tqwCV6heXQ1XipibK6",
  "key27": "4MjLrCoSd1z5KUwBkcyfLPBrtk1AyexFz8yGT7d6KSuxTj5Hc38CVp46qbLHjAqJNbZNwXmjSBY4ab3atAf2KhW3",
  "key28": "2NmJWuwbK1ucwEvmySr5wVVY2jDHmSEHiFXYpaJf3VvQZjofrNG1tL8AT8gkwJd9kqHgnBcDGYvkRrhsJVNF1A3v",
  "key29": "4UnfzNNyXjPLeH6dnuYTdozc4ciuHvhDVZHsA27rwy5dUUiGc8jx5hpNwVtKgFc9T3UjLuwNbc7A6NgBEpEQpbXo",
  "key30": "5xSBpdFtfGGvcbkZy2ziJmetYtaSwMLLispc577JZqKNLSBCMz57t1PnwzU8B2LDTxD6fRpeKE5bnsjG8quGzWai",
  "key31": "2eJSKKuWJnV4aJGDkrHAoMqWjFpQzt5PPQYeENrty31Uvdg9jY5grUe5rgUaXWKZ67ciBUJ1egreLfBAYWC3v9LM"
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
