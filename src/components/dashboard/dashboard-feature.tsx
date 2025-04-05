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
    "4Z5R88tGH2ksdG423PusNyQe69v19QjH1mea6PHAS2nWXcnUXYQjmLS2idSPS3RAbScZyJZjYXicwo1BXo2GbiwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwPpwi89E4N222u7hnfr6W3cRHu5XeJUwgEWR6crCG1iPUgbyqRQJSv3US1F9si91QSca2XnUJ5LYgfAPvGZjzE",
  "key1": "2XD4eQs559qv3kGEXkNYkpT3M1mAhtggmxdGtTTq3HYYpYFpWHd1kB78g66bpLUuMqmdKGFw6ZvYaHBGFZAMrMkG",
  "key2": "67Lw7q2RwjuwcLVyUygU5x7cpoh5Ud8VXdLEKBy1MTAqvJ1LYaq4QAemrG2VHExSRKADKhgVx9oNNKVbbrboFv9j",
  "key3": "4QCJAnzxhey2fw3vFFyKRmhn5m2MBY31RgtVKgycutm6sVTDUPG3bRjxtfwcQK484cCdJpNPW6uw32Hothre8GZo",
  "key4": "5Ay7SQM91cd5CkkoesC1tBj5G8f9CUYrYWR4gHNRLXYFDw5fQ5pnVCJ8DNmTsVNG2jKEpT2ATXDxNDtx7dxfJrHi",
  "key5": "3S1LJR2b3nKD7Fe44n9oFpTJHzKAKZFQBEMX3P7YDcuVRm15gJJg68XjvfU6Q7NsqGEyzxKGEmgMTyuzQ3mGwjQd",
  "key6": "4PjHtDWVHUoaoEYdbGHMBKZZSSz7TGXaJEajFqFDMer1zRdJPPJvcuCtGJt7vtpHGDuXQNHu6Sv95gTbsGLu6vxp",
  "key7": "irFKHUSvRKTv6gHfDeaiwKKexXjuCwrHwAtBT5r24Hot7ZEAdBbowJ1ccSDguQ89bUbSLwk21uP1ibghjSAmHtA",
  "key8": "MTE1z647k5rHfjrAcQjaJXqTCTniUx3suvoHQGWMjVotWounWzC3QMSGSHMu4KRfivgsTPZa8LpccUnxG773sAe",
  "key9": "4WMhKYUPT7HFTuHtRGcsZHRMnG5ydsM8h8HTR3yM993XnuPd5qsVx5ikWDZf37GwMqbyNhvZBEiGoKAk1xBJZdmV",
  "key10": "513Mjc9YN9emU993nA2o6zghrwcieCgXqWVqygAEv3s8PZrvxrNBKf3pWXd7Zp1NxGCJZAihHfcDiZXs6f5SUPUS",
  "key11": "3iJRZCNLsT42wkFs6JzMVRfMBgnCfb44rQiUaBJUnSomfYn4D48dypZo2f4iqj4CqDPkd8hA2CtQ3tAPTAp9CKKV",
  "key12": "39xCkERh1EqCrSwHE5UXnXxpz1eQdaVJ99UAEKhQidhvi7Gi3YpL3Cy8tqYFV3usjfEqYrm4o9bDBdUUFfMzmsai",
  "key13": "wEren5JiyJPaCkQj72Sn4vTPnBuxyB3quPMdQc5U9gLG3RSbNbrwYnAjjwyPKNN8xbKMhdLPF8yDxqUiXWn7mgo",
  "key14": "3onnF9GrZirfsmGk9vPAYXdL4mM9EZoW7A3rQ4QCW3rxAioYqcbDBpP2Fm9LGNrXxjE8izvT9qA6uVoAfqFaAByj",
  "key15": "2Vu6UMoJ23jDFVtzDQk27CYo41SofEKu66D9HogYakCMovtEEcZdPLa3Pvpi3VAUARMMUfAWq2mTj1fk3TCT5Wg2",
  "key16": "3HF1WXmW1kV6oBZ2xA8epv4ri4GwAwU9XonzyXuMMTdusLrTSKS4rLJNK112RY5H7cagYaM5hooohyt5Emd3am9N",
  "key17": "3o1rs45mZ6Q8vn2Qz7bBAXSupBtevigRyya5Bn2e6h9ih86Q1zdGrucgYPVB21vj2uMfgyAwWy1sqSkdfnUhu5dq",
  "key18": "4bLyVWrj2zEy7synwB1aaxkwaf6Y4FhGgKkvucpSBorABEfz8jNDYeE7w4NGiKQPj5wVX2QvLiFPBxwUKnB12TW3",
  "key19": "4NdecxEf23p7rimxd8rrjCbXN3mdrLCvR1VZPiBNN356hQsRSb73GD5q7TsnEQGUvL2gR72mR44NzUzYv4XgjDLM",
  "key20": "b9uduWY7Yzqm5HjTajty1RHGcdHTvcDteJrL9qiQ67cjwctUZcJGHeUwftoPzPPf3YxDUqtGiP3cgFPirH1LwKf",
  "key21": "9aet2b21me6FCvaXJxMHpWinQX7LxpzRTvxv6KwgHQENsJLh7qtrzeK9BZ7BYsL36A6vtuzrQfrFidhtJuZaZ5E",
  "key22": "3nkAnZv3W5Kqrav2poJdBXwacbYXtbTmC5ofBbMSpGUYzZLc4wVAYMUXrnb1JyMugu3xfp587tLnNPk2QqCciCcA",
  "key23": "3GjpZueR1vy8HMei2qk6gDBTMDXNArzyzA3MPdV4R2BXBy6NjA5XKhpKa1hoB5AThHaS1vFYR7tjPFpcorBXEuYL",
  "key24": "4v22AUQnLaXRz5zgPiRqe8wRJnhcyb8PkEyoV8GEeGt2ugMvQikKib7uvVNdxsMVraDNWMZJKcFB3fPj5tVXqBJ",
  "key25": "3PAtc7QsaJLMRhSNXrx7SCJoSAAJmPDZZcqoqYR8LEHgNBDD1dHRWeAB5H6Vtfb1ZVCj8sUkXVNzx2RdNJQ9FExS",
  "key26": "3WJUGToQq9hMKGjxHvYBe3yyX6tdkfX5W9ASoDJfDWidjR5BqaJ32hHKRz8en2fr8TCCfG4Wbch1K8uyXNM42zTU",
  "key27": "5X8QfEgfRoFgo57EdLwvYzwbcujCRzJ8v7NHpsn2MKkcNyAzWzXMvZCKvHSrm29FQHDxwrUfnjo5UEWjAyMwavNJ",
  "key28": "5t7SFuhbty3iGNfZU4ZDnieURJbwpwx275UoGSc7P7TkFgnqo3vf5p9Ab664a4j77BLxuDsb5C7RVn5PY28MzYRL",
  "key29": "5XKqDjUW6BXAbJh5SL9uyYbxC3jWUSfobo5kcoDv7ULtmuiKGqCShSR7omW1VxqAaVbpkbMZ2EndVCMqFwJmHFwG",
  "key30": "3eQm5xHVf47ixPEba1gP2mQCV8WzNAXpM295eeK5mk7LnxcLS2xpzTxtzmaEZkXALfpvbqGfCMhhnLubZdDbAonD",
  "key31": "4Fgu5kNnPHf9W41qcRme7YBEebegpS5mtdtt2Z2uianqEzzXZPa1yUncKehNYDhWXuz2f8e5ci5DjhYJN82Hw5jD"
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
