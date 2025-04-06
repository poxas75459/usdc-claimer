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
    "5sfx8jgSPSGXv3wDtC5WK2jBkBM6XV7V9bEAoffPmxWbrumgLRBL59gBAZjHKC5QJcCY7PKth3n85ErphhexGPK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rGAS1DWU7QBh2DcJiEo96JkseJuVRZBU8JtC5hjdeRvDVt8NtvWWNhxScX5f7AkDbWyu6GzC47Qm6W63eMDSdZ2",
  "key1": "or6QPQ8dqZfsk7nTdPFfYTBauSWtcdj4JhKdwsDXQPEVGTtkiyBoLRPBoDP2yqvYNZmC2ZpirEhTEfGM4QFimbA",
  "key2": "63ia2KusXPZTPWqpYV2RdLM79Uzao21yyoZS2zMdUXdRcPkUtuhYq7Mxpp4728PS3kEpDf8Jon7NLgaY8rEbr3cA",
  "key3": "3frshsqUEx75Me2Cg3Fge9JYfgRE8YZWy99Rnr66XsSeh8URW7EBJH7xsLgraLxsqjNusLp4yvARxehCedqJS3eg",
  "key4": "5LdTY19AUXBDEDFpk3ybv1uDjMUS5PtLibm1K3JDfQkTyMTRXenDdbNaouQ2cEJLNwruDHUXwsMZCLGkMmrw4KFn",
  "key5": "4HoCjXyzsUC8ZhBxQerMFAqNRQ2nWWKEw2nRAK4jxJo2j6zCmdS8Zh41XRrWb7xYWWGWNs5FqexQrKg5AVqMzaxJ",
  "key6": "3vogp9zDijLPyGLTdMY6985ESKHYFHBRLutiTzH5Sj3agS9ve8jHBBsNhYrroxSpehu7Tto2CqADdS6dRN2scRaN",
  "key7": "4DDT8EBMJXBs5n9fpTDN4YmbBxBrWXcR3dRoeVt67h8ed8QGKceeDL1H4NbPuMvn7ddPVRrUK8uQ36zJoo9FFC1E",
  "key8": "3jDRZWZxwY7duLzhJpNH2uqCi8FcFTM374Bt3MHhs6iqvsmQstN95se188nAprzXfQFbmtH5RuDr6LwTNm13wd7y",
  "key9": "4Xv2NvxJP7HnvUCRNzYAtadfHqh74sQJ5S3kEyj6pvvZGzusgMiEAGddQCULkEhFBA9q4CxdPWMtqUiM36idHd5J",
  "key10": "3aMeBYjAcXSJ9hT3iecRoWzoi62ix7jauC9mMtXgHFicy6W4tSHFkWYX3mKSxcb7wre5PnVaMF4EN5AQJQiKMx9n",
  "key11": "kUDJxruriNrBhSKHcQznSzpwm9ADLH19fWzWHa5gJobw2bA3orcdNLtuYDVxH5VEJ8nnkxdBT5JZ2M5SDiEbtpx",
  "key12": "45R1CCoVfMMswqq12uAJMhrnG2pzrk2MuVGA64gLSEQDBHxQjDHkd4AHBVisQDxfeEGKFpVfqHsmRJxu2ecUx3Z8",
  "key13": "5Ug221dHfS1MYuuSiJQdkrM6XML9fLrJ3QmCHXZnJh8S5Gw4ibUryHsCaJQs5BF1EmArcHcW3V44ga1rXwebFSTH",
  "key14": "3NA4ant99cen5yJvNKpSCGQkMPkwV5B1noH3CpqNzk2d94EwiLegXktWGo8uToiSGx4cPCQuoyEtYkaHPcrSdrzC",
  "key15": "2xYNsEXwRmYipPRjKyf3zMWW6PLgKBYYWTKefmR9CbE7Q9Su3JG2KwV5nJdxDMLHrfc61QdHd8pbnQZ2ueEbZDEy",
  "key16": "5PPKh8mtebpVku2EqepmecqRiijgz9pD6Qea2J9YH6UjiXBjyhu8492TVVoRxpMWD3Ne32VYCYkMoD9SsaCBkcXn",
  "key17": "2MDwSemzoQ6xZHc1vB4Dtuz9453u5XDWoazixkr8DZm7VA4RL5bfTapctP4SwsTLSsx2UQ4SNa52mEYbwvS8WTHr",
  "key18": "4FojaGRDf5RRreZMrGP4kKVrXVCPsgBYis6kEDW2VxAjiuXtMwS2BASKJYHt3aHxvUj6rbUhN8a2hmVfxMKb7iDq",
  "key19": "LQv9EiAb5ShYKFkexLYj9BD51pL8zi1gxQQYKUZhSkVC9JAuXBemUXMYauAHT4rkD58SUgEVDWhgziTR8WAJLhi",
  "key20": "126p44Lswq7fcWR2G75DPLwLN5496ohjWE2EdCD6XasdLiLqYec4AcdCnrNjzp6JyEhW8mKUpScLuB318u8UeaUB",
  "key21": "5uL2KJehSqUXwkkhSo933Z6r8mDrN2rfq58T8JZNVZuSVt7Y6dex5uPoD3VCtjvdA7bhsiKPyCXQecFvw5NTXHHw",
  "key22": "2MUuJ9rxYvqHMzBKjgGYSLRfGS65kM98vbXdS5PEP8XD3xXDLBZrnaTDxCsqCU4Dq1v3SmhvaEdpZAsX3AdahJCQ",
  "key23": "5U8ahfZbGVWyYYaMhrhRGwZDXcWTJuJTWkWiDr6JBqRKo5xXvzGfXR7Sj5N2UW5EbRGceQQmZGwUcRYo8zCmNCns",
  "key24": "2dyEdHpogyihXkqN4pyPwDGwjuSRMdgaCJDs6ZUoUpjspuTfDjLEAgECgZ5P75GU1TgtbtoE2UZCAs2BAguaXkj1",
  "key25": "xc3cgMQnRcjoQWXgFB5kX7ai2D3g4urVVaMWsZEgzzrEgpHU3suSm1WdjJ58SDGEsGEXnbRJaeaPF1ikafQxaGo",
  "key26": "evh331cYsLXhiR8UgnP2fNWiLGhuRvK6wExBrUzUFS6XHLHzG1zTZcTCudpyZSPpWze2hvdGBP8hyShPzXZAVDk",
  "key27": "3Z4khjz8CT1Na4QWcoNm7kok49VoN2zNXVHhkv3fFpiUJ4NUdNweyjisRW2qJqfDMsEhDj8V5TXKCwRXvtf7m7Mp",
  "key28": "52tfid8mQ3BkmHFw8fvHwwFxUhZ4ud39gBs17LucWSS1vyNHYMP89TrMJMtSW4AG7diL2gxAppEECT3YcjJaUhm",
  "key29": "4aJPQ74ME3F8DKha9E3W8XbC9cVU8U5r6takkZfGy8u9bLzLboXHY5ttjBAkbSbVGB2eYHdUrU5Xd6LDotiP28nE",
  "key30": "55a3z4Be9wU812WfbdHuSrDPRrJ1JFhsuxzeYN6gEvi9HKnEGbD4kSNwGK7RUrbrxBi9St2EpgALbnpoD5gqufTZ",
  "key31": "4P2vrkcR3eAsf89viZRfHHKKAJyYQCFA5hBA3ovr4qs27XmcRFuoos8uax4mkp9e85isR3tksb9k2rFdux1TKWW6",
  "key32": "2uZBnDktDBhDxmzqsqKv4hPyML1dcMdPYP5mkW7nM6k6X3rZk8Ts5vVSreb9Z7f4XSFxdc5S2ARf8ViDWEjGn8ET",
  "key33": "XErGD7PQ9pkqEqWsdLcKHbQHw6DbiooGm7tEuRAxFM2oYtP7owSDZuFt8SppAa3eTBi8gUuUFpcwY7gAQ3n7JET",
  "key34": "4sUpPTiD6sh6hZkuxy6zXZ2smzUQHUcvrt28XJcmGaKW8dmt5E3ANwzSFmALVPuMeTUikbhVTJMXq2ni1mdnB9h5",
  "key35": "4gkGfrmqLRWFSN8nmCUNKHWV6FkHQp9ZhhivVUjNNqK1sJEUpQj1x3xMJe591jkfYhZnpasi8Buv4azJ4y9h3mKc",
  "key36": "3ZAHebVMXGtZXvWLGUCmxUUpjnvucTz8LFeHhdxjCgK7L91pc8o8d1QJ74YXxsVttPgELQXPeh5uxA6CVwtJZA4s",
  "key37": "4jSahMrbn9HNijrmoNfthuCYg8xYz4to3xqvqnpoervHnE9HrFvZzUpduEN9AEcoZziv5V72WvC2TNQyjM7EXhPm",
  "key38": "4ZgScwYChtayYQRFCNXQDW8rMnTpi7otVunGwXM9bQNXWCA2Pk5ureq9ugCC81gpSAZwG7bRuFWioNvrYGH5rJ1Y",
  "key39": "4QQVDtsp2ur2NvC7vh8AkgHithVHBWFhE9VACwVNaMqtALr6yUY2S8e6KgoRaxDhCMYNkaqFQhVzjp7AekhqHN68",
  "key40": "5i5Lx89uTqKQF2ov9UB8NCyMvswF6LLLRuMQhUqipJSkAkDGi33jFeh89LiE3K1VkJbrhmrvxkgjqkXcKoujN9MY",
  "key41": "RGJDym8GERCvNbwBYkhdx4Vsd7DM75htWinvRkwhrnLdioV1AUpWjCRzPndKXiFWM3jQKVyHRxEQxGcmtg9QPFE",
  "key42": "3vhvKdVTy81g7bs5aUizzSgD4UcFiSSv1fEjtcw6N7W4uBzhVVXymWQVvSzxXEdscyE2mCgPeiPXDW3o6fxGcqdJ",
  "key43": "2ETXXSyeHSzrV9VinVqchLJi9BGCUnjhA3LQncvPrG4oLmBHhD1mLTzsP7D9gaQPoTeHdSbogZUfRxSauBRaEePP",
  "key44": "5AffrpUrzKht167iP68UbPDtid7vZkXM7mjE9nyyCgZpsqupjMFK2HjpJo7SdSTeh4H4UdxqKzRxQFuDkgts7u8",
  "key45": "67EnH24efejKTyfJ7gnLRnVJg2R8BHRYhz6YwgUph2jJWCPD8jppyK4KM4sTwHbBtemyrt7R7PZDsLH2jFy2eHTE",
  "key46": "5SyPHkiyYWKsnEJnSea7hf8Dt5cYwLyUmavGCzAGABozoxB7hHhe5UznJMnnagRj62qGFNK9MUDSQEzhZgncZ1Bd",
  "key47": "2YXcVYHyXD7Mx43XL9qRk2ABFfJ8HMTh1Bznx9Auxq1qALoqK5LMqNGwBKqGWjAhPjoQvwczsLFcoXDY9YCNvXzw",
  "key48": "wfqskB45tTodqsA3DsA38NUWRd6UxHomHs35E5DX9eAEZCrhtv8cXKJf6TGVjtcszupqAcaRDvtSUSVjDFQt3Q8"
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
