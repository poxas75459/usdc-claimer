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
    "5W82fgAsKjsUrPcZgUNQyPHMSL6qK3q6hrisfYJiv9yGbKigKawbfqJBbuDLGsgVsfwvXVXTp9gjbuKKV4gajAnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pKsDsjxTX7iUN7bzXGPUuhgWu923MdcmxChTdsuot1aL7NZzvTEyH778N3693NHRo3Zs3ByJffxVtpqzHqaJDHS",
  "key1": "rh4LuRX8RqZs9iWP9vkchXUNbPTQmv9PtXSf1pg6VfEajayKSYHh9uyYB68FHgRx2AeBhvDD5FW4JE8WPGK92DG",
  "key2": "3P1qojbf1GYU72jKKCG8eg7rqvetCUsjXxJLTrJ3LwA1JVVhxVsTajHeRdNYm3gTQKdkQPfJZ5U1M9TKPtSxaSPw",
  "key3": "6171rr65S2oa9B29z6Asw8cFRX9Aoy3XupU1BqbhvuSsDQjahKjmhCGkcw4BjTAb2ZYzgKDQ9b8HBpT6ynY3f4Uu",
  "key4": "Gv1KFHVZ9x1DWK26RM2VKGGNBTf4DgYstdMj3cV1p8fVpSPmhDBVkwQijQ3CZqze2yKqF2g87hgheBxgnUpXhho",
  "key5": "3zSRsWiPgcoToZQ4RTaQdUpR6v1odQYfVwCdtFvUvo4s4aUxRhVPJzcK1PXnN7fxX62hBpgUxPb28QVexrydpB5g",
  "key6": "bSwjpjFwAkPgpjCG37uxf5AcpCgC6KYHbmtSdd4khoCPan6a4CsaBheaWRjX3swKAbj6ucRC8db58Y7X8iw34Bv",
  "key7": "5mGr5U3DLhNM33xzEX66CJZiCRm9q9VXZqFaX4sqVkocfVQMQghpnj6CKGUKYFLDGyimY1MdDQbSEEt8bhTK2gS2",
  "key8": "T4TN69SyXMh5QRKKPc45CbfexarJ96r1fPfFraiA3fy6ud1XrMcttYCuZVpc4d7ZVptZBwfNsMgPJfxePygBKKr",
  "key9": "4WcMsA6FBUPWomE3rn2QMFbRdsy61pZTcmT4m4YMcBJnyve44bayEDYURmuMwfg5Xn2Lc7LMBqnM9QAuxKnVDqck",
  "key10": "4V3CQZxBa7NfsMMf1A9iQ8gWfrPgEH2DpcNqUd9XmG2hehjGw382xHhEWEypNdEBwsdCn7CrDemzrFuW56EV4U1Z",
  "key11": "2xWQxVKB5w4AYGryVyS3kMQm4mWJUDCEd5PCVCECENYXbbBEbfByx9M6nzzzkaJkfMPPAk15PZmCQjWZdjtignsp",
  "key12": "5Xv9LnKSNcuNDGcbNbN9UnzUZemF56Yv5tm9M8t9o1E9QZYbyR1bwHMV1nnWMPPGV1fkJvTx6yX1JWtYNCSuZRcu",
  "key13": "4HRaPrXMR1beSEAbHmhmbzZoDVwgeJ9s5mwztZKQgyyVmUfo8gysVrE1bhTrsgrRb7UpEHgFyu5HSDYhMkifQ2y7",
  "key14": "zNBGpSt4N886qonoyWeUBLGgHcPNcTB3MWsk2Fhv89EgKqBTRSybSZf3JxF943vbgWZxZys5uY7BX4e5JvXMBSq",
  "key15": "5tMakRmqdLwySug7AyBxw5w2M8B8qni4nLkepk8bVNkX1DsZ7SipdtwAZK3pWm3pacqvQUUqiJqCqGR8hbPZAW1W",
  "key16": "2eExfEa9MjQdqfDcC6MYQ96BMSMcQXR9PDiXkBuXuoLt6twEDXCJpZoogRkSrCCVR63qvSbzJfoGJPqjwXZpZNzw",
  "key17": "27NUpBkY4WnnreZr8infHGeuSircPNHzEgJ17TRJci6aeWLC5xUcQybPwVZJf1XTNeAp3qSpikb3whdbhgHDQ46h",
  "key18": "4usBj1iCHmjZ827jMopsdGHFGt45o583YxRDGUhxeaqnV4DjLsii9fCLpNZqeC9TZVf2JkrkeDcPdBACBVC1sxps",
  "key19": "3E8mstzAX8ek9t4B8yDz7FSkKyH52Bu8zxcuNsuqGf8n1ywKQgWEmL7gnXS1pARxffmEZZZLbBeYb411sEzmRa1D",
  "key20": "4k9BpXP3vfF9fXD2pmea4mPm9BGtfVEdyaQWmbqPRkJqetjVqThR96QYfatoPNCUx4GeJppJDFXq7cqDWQiTdrB",
  "key21": "4eBMHc7hVA99oQ1vtdcJtmDBRJL7VWRnQuwqPF6z1GS4FmCd3B44JA1VNgTNo591fuGyQkxKzHAAfJQ7GPg9f2uF",
  "key22": "5kmZ1XbwyK1UKgtyRwxYwpUZfEB9pvB96XEzWAoFLVugThwSCtA7pWpRs2pfRtD2DmnFVSFSuZ4BWDMVoWwp2bii",
  "key23": "7HcG48HuUjB4fqxeFFmtfPDaRokVp7bQtjBvD1Smx22kF6MWnoJqeAVGCbxJN7HxvfnEQCFnELHdvkz8KuKnvYF",
  "key24": "3nPAPDnJwaVKEKSucJJL6WtLBG1vsRFzqhc1qWzZhDvRjGydtPA4yEidpCvozF3nhHLboBCyiiaGcKrDdFUnqWcz",
  "key25": "34WyGZ8GD5yHWkyfTTTkLAb4EgVbiDecxXc19LCftGmyxHVjWbw5riV6gynLhpurYfYP3ociFQWTV9AYvkgzw52j",
  "key26": "2zZzVir3XZLFXUx4yLLTFMx3eva7vXua4uxCtHfWEtLrq3jQYK9b3n353Uu7ot5QS3BCzGqEvBaVa19MRNm5GRB4",
  "key27": "5c91ohC23KXYVc7hre53uNbnJRoCLEzfm5cXnSSsLs7C3NzgXLLahBa3ovDteRHJhs11wNnNcQdM7HeoUvA7M3hK",
  "key28": "3vKrWjLme41XAE1FnUbnyaLL45YukavXz6GQNbgCiqspqaqZHspgK1RPsokJFAj1ukJfS4yfuxFnHDYnuvgfeUxN",
  "key29": "3Q9ZKNLDJuy7ZXPvQn4QVECRWeVAtYwx7jxJ3rSzkABAwoHvrGyp9ZedM8PibkemVpJDZ32pouKDV7vxpXvfma1",
  "key30": "5WZBn1usd24w7GGzdJpPEYUgHCdL7NCgHwufqXssErT6cjshHufo5qRfCqK3MYSBibgf4j1ocg9mzJ1ojwQSRzVv",
  "key31": "2iBqr5bhT8cNFsUXssq2eY7XyKkqXAuB6Jy8H47McETSmRTnUeJd57hhi7qNipFh1VDoJ2BNohN7ToM5EPASkTd8"
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
