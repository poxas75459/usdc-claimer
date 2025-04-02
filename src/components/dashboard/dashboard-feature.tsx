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
    "YGhTqFvT5hfizmVqCtk5RwFQTsoruyVtjRVkd32apTyE2XCGZC61zb38hH4uJ8SmpEsLCWArnyjVpzRnzZy7SEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usQQfVZaiq1YUGpAj1GH4S9g8eh8QHSdDgNgvKw9W8ATeQ7woZB5sKAdKaKxiLGeu9haZSu1w3ECNUWBKwiAb5D",
  "key1": "BWr1Myd3SRD1cXmZM2PEsp7KnLg9Gz9iUGmh4F9NAA945whbiyrNTkLSeXAuR61a4nga8Vnxt6n9QDQXDGppGbA",
  "key2": "3dDyW7cHAkwjt2nrejWQe9mSQPHhC75Gpda2AqN9jkQa4jTmLKKzbch4DqM6hyytHhmTkfTkun4JCoCPe3yhQj9k",
  "key3": "4BLvfw6R72DsKyqy9fK88f28T3GJk236RzUMDAax6q9v3DNnPtUhZK4YmSQWjYdk87aGPowPxDG2DbRuzzTvq4a8",
  "key4": "5epwFGbsLd5KqW3sxfFTsFKCnKivBEnET3ypiaRNEY8TeYuVhe4cBmkcyn5MXA8Kib5L1horGgDo7Whkczy4kupE",
  "key5": "4zonND6MNe2HDLkiT8ZHDT3r7CNcBza7o8cUjZvLpqF327avdDhRSLj4YnoC97xCeitRfKs57UijFLekWtJnNaP4",
  "key6": "2FFPdz5jULwzjctFqHLmVSzkWAJKNfqcC4YjKxmUX2DfyvtbCxZiKuTqbrBx8uX5nkyUfY7v7bXmnQMF8ZsurNkq",
  "key7": "4MsNuNUDbnJusrdYVFZ6yNjyEYLk8TsMEFWWz4xB2E5S2UWvfr59T1FuFi2AF6Swjwm397zUkJnuD4WACghpP8ge",
  "key8": "q4c2Nw1tLcws5gLD1YMDD6KvJuokWLPHDLKDznerYYywL4Z6zUwKk7mYuVVgMB12XHidYKpBWxai1kJN9ymbpTE",
  "key9": "5qVKT5vec4RWF4Y9CeZ3dFNnNZSbVHHTN9sUWNjiuWswg5zmqZwSRDpbFo2bC8FjUeEcQesm1CgipWdHWp2qgVD1",
  "key10": "6dcNf6dbbu9DgtuDGSGpQTBYZUo5pnkzsVjmLTxUPqvABNFFy8vVWRfLqNmrP2zqgUeDhXsHJZ2VXnfn2oHwsnG",
  "key11": "5GeNE9S9f2WNE4UqYkb6RjZwvPX18eS8ucawEAXE1Bu9frwog9ZJXso626bFqUo7XHCG3sZBBjCA4zmSPwSsjYGD",
  "key12": "yKzvQDnA5HKuG9tUsSyi9EaG3kbfdCxbiB9XGyYzmAzCRSN5BjUypfMtApf5mKa57igLJFysmFKuiEwhhNJsmXR",
  "key13": "4DG4e1JKNhjPXixGurKmF9ZdjaGoJTK8oc5RjA93fqiaHWC8vnAPMM8Hi6V9UnqaBTvQ6S6r6QDXkSG9ByoW9JK2",
  "key14": "2r2NYxF9TH3qL95g775Pv472xu2eJQe7Xi9ekWnAXSREPMMsEdMiV6Yksa2PWx58k8n1fsfeShTRLEmvkX7UHQVT",
  "key15": "5xp7Sj1aJhQptVBtWicbnpS7cC6sUUiDDmE36hyvPXQNNiZmHMFGrzUZ86nt2Z5fssvNatWXnrWiABx8wcVENSeW",
  "key16": "gzCCgRyHw9xiHoKnwiWmVrchA1V4QHWyrxDP6i2j28LBSbY694K7qWmG16YQmqbJPnRxe94rsECVzqzRyCX6Rup",
  "key17": "2ATNTn9HvkPX9Tg9Eh2T7QAjRnY4Fhi6Y1QETxVFPCAECJBVsqP2BYu1FWr4weX3vgUmvei5ET8p3p9NZf9xpaJr",
  "key18": "3B5F9Qu1x7jCcdNTW8vGXdZanrRM16jn9kebdnLdBC9xbG1A9Qxu37FNUwvrXu1y9y1nnzhRZQXUk8gEm1ctkFjs",
  "key19": "65FoMFQoALniKPMiwR7yk19Y9AZU9vKvVcy8agytS2LbY96ZcoeCyo4Qw9HTCBYgCsJKmX2dD1iWt56m7tLefQFj",
  "key20": "4eNWEZNBaE2sNuomzDvfnbgsHbowYpvShvtPqps5y4dU4Mqpv7Yopywy6StrM2KCU5mqcbSPe7rkhPjoLVmAPv5D",
  "key21": "2EqNCgLEsv4oWZDdHcLEgubyhwyjEyzApG9u49HKgjTpFqiV14T8HUa9mVezFJ6Yyp6481TZC8op48E52ifJCBJx",
  "key22": "4gvVznmXwWmADMKr16tDaf1LXGRNC4PMwP35Ao7D66q7eoxbfopnkr1BvngXzBA993mpLvd6JThJb5m1giDuXQQL",
  "key23": "4WyW8hoqCnNwf2Zbt9n7TAf3mhmYWmvU2jBM9HKg57u4PLcnZrtb9BQTX7y46X1CbBFaakxSNjWdMNs9N8wBr3Te",
  "key24": "51VRhwrkzFHQMvbkfzJpoMKArAES9AoEP3iBLYr3mTpxhq5vHGZF1eiRHpMuJdbTqrLELbqPkW6ey1ZTFDesDaFY",
  "key25": "2babs3LiyN7o9wZbPh6Gan2PdFAtoTCyhMYyaWWNDkBKaPDQgo8xQKfpJ3FfA4RkSQgCSMmZVYi5mfy7gG9nW5pg",
  "key26": "2LLmrAfUtyTrU8tWYfTmsqVj8d4uPJ3ZjMA5Kyu3XaM7gKRvzRL6su8scwQg1aUsemLs3PAy8zJAg3ds8zgRyS1h",
  "key27": "4tRfXSpDZp2WiDz1sVN9QnGbNbqMHdwF1i2KHTanSyfZXzfWT9njyYHksXCE4ATXDDXp9fpLvjR5S6zxSghkJJ3j",
  "key28": "5y7xMbA7TjoNuidn1Adbm1GbvfaJt4SQoXMujfKvZQoJCRMd5ddcQXzR3wsZC7yJmDVvDUm7hU6yf1Y1yU6WeteD",
  "key29": "55hhBthTTWh6tN27nBr4BsL4G2wLYw3LbMVJR5SmZYQ6LQSBubU1CFiaPGdb5ac64QWr1vZuk7iYuvwUtbKD9Jf9",
  "key30": "kBq4VFrLJFb9uTCpASTxJTZAN2qbb3XgzxKuPpA9Xkr7dvSNUoqeq8JNsVtiM6S2cu2HarPyu46kj8qFggZan4g",
  "key31": "3JJ2FcWmS4QKH6YD5fQmWASV9NKHDr5ErFnomfMUghMkLM3oZL5NXVze1kYhpjE2szZBvgCzobiKUVdQ8eiUGMZH"
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
