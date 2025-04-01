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
    "5rkdPFtmngQ3T9fTNzKYhGKo59u1xrNv17W2W4saZ53zYwrcbAjXYDuVSHNLMJRe6wxyNYJuCvN62iUqtL8tEY97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rnfpWMjjGLzpRFVkfoh3iZJSptxsJ7UtHhWuWkRd2HWyhL8sej5BUJU1bzVLzaPFpfa4XggBZMSpRpp6hXxchPn",
  "key1": "cEHfdkmbig9PQAm2jomAnMC4JctnYeRfDiP3jkWGWJW3Z7tTFnu9rhQ1axsX7nMYUbcUzHKPDGckmz4gvPWzX93",
  "key2": "5Vq8KhULDfGittGVJmwiVwjEzMw5oe6QMQGaDSSo1gKxGLdHaNnYwazFB8Vrup8bFLPxZZRW8oLihZBDWKSHxWoP",
  "key3": "5DFmxqnZVs8Rkrd9ZJFAGZXZSNU5s2GJhVrhQw6yyjquVQ4NgNU2Q3sHVVwGxcxeKKKVJQ5YUHW78d1qzGi3ZFaj",
  "key4": "5LsV4bGAwowmeJaTjxHezgz7yGg2M3foUQ93u5vzoBN174aEHFM8xVenb5ampvskbxf4s6ozCRzgRz6PDcM7yZ8H",
  "key5": "54r2iJo77tM4VyeuGaSs2cJcQ2x68WbNzmfTNUhHEGfhYC5tipzgbLQ972LbsWr77ko9W6qsZUFEnoNX3eRdvaGP",
  "key6": "3StPj1XVw48ELqWW3VF3Md8VaXjwjtUU1VSdHbhuEz5wovd9nCuFUigZTQhM5TnFwk2ve5Dh2n4YEnujYobJKLJH",
  "key7": "aNVAvwjL5JtT3okB7YqLbVmKFyccUNAciLUP8Rz874MLm7SfPZTzpHyGWX4nHyBDnu219TDKC2hks9K3ygHktnp",
  "key8": "rv9os5vs5CRbYwcDfWY3qNKqbPjT9G3ue4f61xdsyshFRzVCUBfXqxzZHdCooVYhJoUtAdH1ASTyvdtVUtr8F6G",
  "key9": "eXRSfrNxx9mmcThqsm3pj9KQNfHUaotogwBynHThn56rsJfeUBEC5B6KUSEY2P1qU2Zd7mJZcM226Qmg5S2Ta4u",
  "key10": "KrvKjD2yT8TBucpqbc5eFUs61SxXRXbKbwnu2DmrFPEen9ZydJdkVh5zSuvaxsrPZJCYXJvriKUiWevHDo9YQpR",
  "key11": "5ZcujYGkgrFRqdN24J5o6ZazuLz2s1UFHfdYMEfv9HHyCi26mz6VZHVW8U8JRGJkivgTgJGivEFQ7nhPJqwia23s",
  "key12": "5135v83uNxvg7wuU2zczC99jDTZD2AbSt9VQrgrbwLh6x3ER3ASXsZFRSmtuAFfvr8bxUbK8S7ErfS4EZ5mmJq3J",
  "key13": "45c7BeaJYzBVGzPGWrF64uRLE8G7zHXc8cAUzjN69tdMUcGzNzAJcxLVz9oSnGniX8jVQM3gXtuemtHJVD6TUDgf",
  "key14": "cLSZLFSYWgfFb8h97N6nttUZfWHgrZxT5rsTQnyDvdKGoHTYnNB2yPdHcY7AWBKcF2sd6BNmT9RfHb41gkjkapv",
  "key15": "55uMFMm2JHFhfJCX77uzRDg1jdARTMfG3JkJZ146XUFPEyRYmXHkfJro834GyG9FNffTVrQFJKuWsCGFqvcc5Jdn",
  "key16": "23ycWzm72QwEenBVw3Qt96sFNPr947RE2vG5qaKp44er8Mw5HseUPP2Vvv8TtKqguysg8n7xmtB3CpXZi33DT6BT",
  "key17": "24HVJbeWUrqXQj97y1gUBhkR3CsF2oRQTzr6deGJkR1j47eP4JKLoPsn3xDJkwcPdsP1FxPqUfk7e3GbT4MWfMrN",
  "key18": "3jrEWdginzr6gwjfywsKrN2yEwqtrSX4dVVJw7HCMq5CTsRTyN2wpRhPDTk2vtxrS9yhwxDubiZU4VGJeGhuvC7y",
  "key19": "49jJ4Sn2cUCebriN76YLy1d776LkVu8n1FWsVvdS6DPi6tKyjSJ8RtzoGar2fRHhhvGybx7TRVZXwXTEShxFNtpx",
  "key20": "3FR5o4DS8VMVHhharw7pZRGH9zqjqy46cyGaBjvxrRgnwnH7Dqxf5fNXR4doY4AUxZ7H5j3j7XRFf75Z9uKRnLj1",
  "key21": "3GivrUC1esSsZrbgfZqoZxoDXkRuQ492gwSySxyu7LNn2gEuvVovcmK2t8Bw3HixfDABLigqETnPdZqQprjb4drZ",
  "key22": "3a9xUwwHwRZ5eeqeDRcCebFG13KM5bwFzQUyL4ZujsDbUQDJJpPm3yt2tBk3U6fdi8SpJBPPHvi2gExV9d9y5oyQ",
  "key23": "B4txasKhaaUU1nvA1vqUzsCKLSvq8L8keRguKsdGrMeYfNBAScAuSAbJqtf336Hj3m939hjMGJowjj89t2mkbpV",
  "key24": "66YucEuVnsaRDTziMwK4zV9ednfQg5QaNRJ54yXrtMjrSAYPRsrThv6xYNRaME2AzvhEQTWfARgCSVbGsoPpPzjJ",
  "key25": "34GVVJVmo7Mv2a5nniPot36MJNXVjsEUssny6ygdCC7RvaGsgY1bdXszhZv1q6Bk9sLaKhL1eFkSi5uYKvjLnBM3",
  "key26": "MuHSts2fgwsWcopmSc7C4Z6TMYi8tM3Ao7TBYsDDjMY7saXwVivTrRrrUb68eeMiJc6MQnumKzaz1cSy5rNtU8e",
  "key27": "3LkMjRM6PYC11rw7VjYtLho549iaGdoQ3rzAUcWTrTRDwCJAKWtDxiRCAKsJWj38QKa6diUudSi7DmXgJiZGC7Sr",
  "key28": "8JJqYU4htktya49nq4zCXRPtMg3vAtqGaSRFqcqDiFurbj23zH1kQ1Rt4YLkezfCfgY78pxSAcBNoPNhe83EUwH",
  "key29": "5XTFvQ1y4cBY9SWvodDRv1VbCyx6Faku1mdBKBZYNDx3wiJTH4wyAw4DR63wfV6uYhn315J7DR8Yk4dQsDzPduif",
  "key30": "2NjhKkz4xMzDc4ugGBiwZJGJnhjAUupoKwcXaxciwN2o4mig9Vuj2icrJJZnSGZVX3vFYPSjYcD2iSuveYumC84t"
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
