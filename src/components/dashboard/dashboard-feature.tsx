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
    "4bfEt89nrXSWF1sWpCS9kYrJs2hmN7GRPLsH1FvswYbN8QePfRh3DoUYPt5mXkMW7SSLgEv7zPxqqhqcAh6Lv8Df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCHQy6WGjM3jB1ch2EmqfaazJkvxm633eD3LKsR5bpGGWAHp2yC7zZFztq7MSf2H3ZVXCsVTiScbcoT43mYDFeE",
  "key1": "3zHb9khiEgMg5Xr5HK6Yo7qprxRrcs58whJpCWhtETZuBBZamm1Qc25cYqfirVkxMD87okxLERv3XGnb2UeUteNn",
  "key2": "4Ct3pJQGNrmCZfTBJ3pgiM68yMsbRBV7gxoXWiQBAHX4tAqoPFXogURpkjAg5yr8SjuMHt12Kg3THvmS5hpcVDr2",
  "key3": "24YTbfwYkPPE6mCCkq2a5fCjZPGgDPQLK7GC2VMgrnyQCA9KTsfMtCR3QKqaJxE6UTDgPJXfhG86jssCNfNiZZ6Z",
  "key4": "3ppMEgLcZXrxB46XFhmyBHnqqThyfsLR494gRRdk2wvWAeQ1a4eGXeSJWcHXHHnt8TZVueEuLCyb4Q7s9Yx31mTn",
  "key5": "4u9WV8zaa8VbuSexKzsNs1YRwfdEUu2L87twrrLZEpgJUSpRJCnbeZQapTdfu6NzXfDgAn45Z9YuLm6MyujpBdJH",
  "key6": "53wEtDEgYgJkJs2KaXBiAKEshGCdTyvDwQ4kZHQ4S27yco9sVSsta1o8yAHpKkvmND3a1cwFifvTAuUnPhTHoS4L",
  "key7": "4CLoNS678PQqX5EP6QTqKL5JY7TshzBZLerEWyMJ4MHnaAwM2Cg91abunrRH516mSbUJfB3shyKbCV9APPPAm1dV",
  "key8": "5yWtMGkwLdiXHNjwC6MUjnBM7KxmxosyoPGuVUGGpt4i8EhfR5zpPAaEzaAKatUGzrrM59NyTNnFU5yWC2DiKS89",
  "key9": "3Bt1DcuA2bVMR4vScN2LD3tkSnJ9M4yGe7NegcNFKUgwvUJPPVsxyRjRfbUYEou46rLVrk9PZfCgt5WvnQkFxX5P",
  "key10": "65nUqm7o45NfcSe1Szk25rH8MojpNvfQ7nygkQd2CC5wK27GtD5ZmRnz5gwELatqk92wNvVdeRKTzDgr68sCTTkL",
  "key11": "26Ye7eEJPwhqxri4x4AUknDBsMg1kFm3zzhRDUVRweaJ5gfE5Lvmyj9AuQ1Xo6vbH24UJUe4AgMQLHxj7K6RsFUr",
  "key12": "2NurZwi4CRVonzaUPtBF9UDWRuj1A4FuAMwEB5oRsgHWhr3Qp3yafKELmDCB8eQUpUTCyr3LcNaefyBAjphPULVX",
  "key13": "4G4mHDrYWqTBtXujuj8jAhQDCTs9gLa3ZrgvWVHZJ29afni2V9PWSWq9JVfzqp435B6Btcex8eUBbFr3QpDcPpMs",
  "key14": "LhUVgM5n3WvoJfT8pgFc2AUWA99KXrexMtap4HaXHDuhGErCWwNAiSDyxaSdJK88u8BkRre3dDEtGBzaQRRW3cB",
  "key15": "26XgfKY3hxt9X3kJVCkSFgVeeRjXTnZb1d6v9YPp38LDuHpSJiUkgsfaRy8QgPbdjhyNL6qKwYcjZSpcyyqVL5mW",
  "key16": "4iYynr3YAUMbav3ae1hJw7XoRzNEt9JXxfQ7sGiiowtotDFy2qESnQDjw2hzfds6UvAdWzVddveiq8eTrcm4dzuH",
  "key17": "4XMTmH6WqMS4M6gQivtPPRUgM8GrzwpmbLySQTF1i8FggvjWmb4E9Bo32UJ79BjuwLNA7Bkge336DjjuNbwx1Szq",
  "key18": "3pN25fAinrGtPi91bVMjiTZCkUy58m4FY66Yh3mJJZ5jbMy5mfhntxEgs6EPDSdQQEvGCG8fyPMGnMNhJcCMgHzn",
  "key19": "4pyi4ptDR8E5W1aqK9aZnzVNU2CQJEySRBwJPjKYyzmWr42xr9D5uxWmfMs57qDBYXM6AEG1ETJekdem9EMxYm5y",
  "key20": "2VCVsFyRPhMFajLAbZ5SRW7bLHkKaTD8WnrkGCZpqXBqLQiUwxMgxoPQvW4qmdEMYZbESyDP7L5BVCN4VTLkaLEh",
  "key21": "46EpZx8jink59xDe2MgK1pn8Zzjc8GaLzHTYZVrH8FNmMrq8wciapWJie5BYmHGrJf76V13G3D8cpdVexE5yKixW",
  "key22": "3dfw8tYZR5xuPKiZbapqJGWm7ZAKNb8sUBNt9zZsxgFbchzCZwhuX7c8wo9Dd5tdCT1aVujbYcKzUovhFwJpSQTD",
  "key23": "353zKfoGp1sjkTXZHY4oKox2USoVvJx2wHNAz1MDNkCpMRdSUnY4TvZMSBYDtKNAd4uA92CdAsz8bv81abUqn6Rw",
  "key24": "3bNQq2cYK8cj2Fm8dmXZDzP6Gh4ve5uuEzhZrcwWkV5mbwc53C1JyepTLMWYruH9ycVPGHc4Rm3t13bu823q2vCc",
  "key25": "2FR4Kh9h9jVEBQg1sBj9vayPMmHyGfsuo3R2An8eLvszjNog2S1gK6us9VXL6swvh6XTfdon4He32ZxfswCnuhkb",
  "key26": "2nfoFNXkHoqUqcprQLsy86rzvWtm4KpRDZzYwcdgfhp59Fd7Ti9Gmw4kXJCiJUzsu1puQqHqRQd5UfCpVM9VrJnq",
  "key27": "542r5ttwuWzM3ANY5FPEWWJ8vxnadbAYvGAfNFV9FPvCMoidyPqpfuMfieQA2251fMASTEdDxkzGjU7AzY3D4PTu",
  "key28": "2Dw5MdUx1GP7xi5aihyxRK46CiXTmwkdacc5K2uWWj9D73eikJTPvAE4K9G5qWrLoYW5XRKPvoh4pNjt6pmea8QK",
  "key29": "33vTMvgfkJpcFYN28RhvKdVMg64NJjFFdLHFwZMj8VjR2TFZ75qJafiSaiNUh9WU91GcvJgaNs3RNM1atExQsUFD",
  "key30": "4omT1TkwPxxWFiiLC8WMcVcrup7sY9R9EWwc7ZNATozeNYjCx65NmABnrW6sbCoG2kY87gf1Uxk7jApjePdTjs2g",
  "key31": "2AdkTpN3Anv7HcDh9Hssh4YE2hx2dUgwH9J4qAAtSG9GToeWbgx3riXE1kSEzJPpXqxFqF4k7BkbXdkAZ4FtjMar",
  "key32": "KMt2pUUWkiFKiG1f5ThnsS81tpupJgVaJ6RzgAN9yw2aGrFDA74Hp45m19wkRgX4LznbtMpkPbj4ry9foxhExfj",
  "key33": "3HpEwxrz1Q64LNuU7eqsZk3NMJxS2tEMqHCo4LLv2HDwDdD6yaWp2qzzkSzBJQ1YHETYNYg9eR2vMZvdW5cpiQux",
  "key34": "5XAwYUTdCjShSuvwoFE43McyLZWs6bQxckBS8aYszvEGwCh12qKiQaeVLuCASDrZ85u16pAnWMerQRLngKjXYpUC",
  "key35": "3Yqtr5MnZF7vJLdPZ7qtcaL1buUWQ1xkVxrCxJd38Z6mnTTdKYhSBbsADkEterVhYPCs8ZD6SommQ1wV7r92UFo5",
  "key36": "2H6RsG3oUHp11dsF83JBgQyK6TAsUkpq3EhAEfDvycr73axczxHD1ZatUUEwD5Hspf8kYbKnAeiFgeiSUzFRr36r",
  "key37": "3xDTLxpAFfa6iMa8oAqj8GfC2xEWpmbpL7NvxyGcWmWbCeqBMYtY4vWWDjKDjwXTuJmxqheKc3pJzwCsWJknsF26",
  "key38": "5fm5RiyJsSyDGrFJQS2txF9fvYKZqFDQk8UqkdkGuPs1rBvh8SP65CR2hmmqz1QaBfJjF4bXy6VpXerGWhfjgeBb",
  "key39": "hVVdqSirsp4wYad3sm4jJsHvCbqnCHfmBWYwqXxDJiUfCNjWJis2NYuYbW2JwEgBEqZDknrKCQpHBZ5jpGqJHBD",
  "key40": "4S4zAAWJoxbboHApa1kkBkUCNhNRF3Nye8PWhm79ywvAGKUkuCPj51dsnTR1jk7uW8TDazgrbEuxs4dP6E7TovWz",
  "key41": "54rmR5wgwxyc1VEZW8zT3f7dGtXmw2hxh2vQ4rcaoSYrZ5Ge76ujfhrZWSsCN9BVEi1by3pA9bFDX3PKs2AUbSeh",
  "key42": "UhaK6Qmw2PhEfM8zCQhchWu4ktg9LnR7RDCrdNiEBuWzGZU6ePHW6ZQDZznvKhEjHUUfy1e9cGFQUA6LtUMqzeU",
  "key43": "5DFWcidCpYkuC9oPBLD1d9eX7nE6HLQixxjz9UUnt9jENBmkwdy6dpWcvBMpT24rrzj8jovikyhKyanjAePfmL9N"
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
