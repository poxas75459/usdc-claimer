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
    "5nbMryEea9TMDJjsB8PqvEFuCF5TrnuDcmUs9nvz4MYifjNM4sUEAbbBcAB5xUFViMSp5vok5QXjWKjmGb1XVaN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cf4ePqS6ZdjbuqozdLgWqZfG54vwokqbj5ESNygVYQ6DFCamYZyRVSmKTVbo837LNgqhkxKGQxVSF4Hq8G1zgAf",
  "key1": "3pWq3729ZiLjVrN3Fx5shs9gLAr8ScZXHy4C4Zez7X6fPadX78ifrVHNNKAvLLLuLjnX4oz8oRheuAk6uvEwUA6T",
  "key2": "2rNUXJFLn1GDf9EVfhqUMn4FAcM9tLTKKoWD33vD3m9Z9fLqA3m2XAqhGKabgjSkftZZ7WT1ZkeyiTdQei5BP4Y4",
  "key3": "A6v7xP615RAur5dym4BbY1iAtELkpWLevVvweh5j2mZfGgWKsMqvN3UAJsSpjvyBo91qGUmwCuJeGzkDuTK65AY",
  "key4": "2uzNMEvNFahHdZZVuhodbKvN2paGtafkihrxPpFxJL9kzVojkWM2Mn1QGE9tubE63ksy3dvEMqwo5KcKdj1D1z1H",
  "key5": "3HDvtjPt3y8zR1WWAWqVG2EibXFrZBs1zaZr4gSf2SMouB6PSQXWUWhMJSCoWjGgiUbPLNTZ9N8pPcDFFTgJUXaA",
  "key6": "5odRacMsSD6Wk1nCwpGegiSqDphh5vYbYjGzy4anqc38ZMPTa3dt4nb73LuuyaVFb7FbTCwck1ohydt7Jbk5cYKZ",
  "key7": "4vQzFeURVwYamLYRJ4y5vzxtRDgFJDnxyGamk4DVYiu7YKyoazMDckiQxRkNfvPrFdE53RbqvUL6W44NuMFNP2cL",
  "key8": "5EpncqdooegoD4kXqr45MVgj8g72X6BzyKAabJgaQUzw9qTVgLy2KVxbV7pKDAuVxgjJ6orAhCrHHjUf4oyrjr5p",
  "key9": "29kCHiHpyRCmVPAxmabzDhv7t8jkE4VbLn68ZgxverZoY7nkzh2LE2euve7ocZwtVLzXCCY5kZHcbTJGppDtQqn2",
  "key10": "5u4PALq7Ko4pitpjL5YMrsG1WM7gTHitqxKxaaXyKgUbMxbmEkiX5DJXpJRp7nCMBjygLCNzFatEWnDby6a8aPT7",
  "key11": "5ZNvyt6LQCwtoFxeu9u4VXtxtbvR4PdZn6uRzvy8QxV7BaP1RySG8ZzVwZzz7qpxtXGiNSnzBf92hRtJBMEtk4Zb",
  "key12": "3PgjcEpFztfo3tbvwL2QBM5BkWZ1JeCiLe1fEntJ71K6NHkUsvMUqauMgQoPG7raY1HpxTrd5HbfaNTrV7fzFctR",
  "key13": "2dfUW1AJLxwpHXfVaErxYy8Rq454GdV9X4YH9ZJaNFs4FFN74FpCMdFy5FypUdPBHgkiZ8QLRuFGHkszYF8oH3bi",
  "key14": "4u5d5Abyvby2LWPvYnMvR5NcGT2ogaGytGPKvNzVEjm91ifQ777ixnr66ZJJvhFtSnwQ3pZXLrhjFmCnzSgNdY5Q",
  "key15": "5KNVbrVUwDvQcFaTyPKDKV9po2kEqy8krxLSEfPHiRNi4qYMMbi2vXcNq7ZG1frTaYk8JYXQzgkM9Tji7KsugNRv",
  "key16": "R8JnJP1xAqxhQszVGrgqP3CKF4fK2e11RtTFaDrFFYLpGbo8tZYhKY3hV36gLvUEYt9nXG3cULfEVjiwoauSM2b",
  "key17": "4UAiCttqRUZLgYMBJL4dUUYqZ5C6v4viDhio3BNvJJcALEAnC1TjheGnFh5NE5nycTw3wMb3hpqnFvht8ykP4pfG",
  "key18": "2bgo7BAEvEuhc5wjeuv4pgTrbB6f4yJtyvVjbwGAq2bcw8NC4TVEujchuSymaCCo6KwLafs1ZYqpHphLcoYSDKFW",
  "key19": "67WMg6XAJvwGGLSwnEyxVtBiZW4zHqwP4N5N9nSAhyf1YhGxaVXohLH7x2AoFV4PAD7C4Rd4zeQyFGhWB9Niboe2",
  "key20": "4uXuv2ZB3isLikEx8GdFUzjfjYerZai1xDVpsa8bu3qP32wMEi2YTiGByF4rYXLaJ8xVm48Tzs6iT4Ns5paUcMLW",
  "key21": "47wwHsg31r4827U9U5S1thE6roGHVjf9D8EJ3KgUDL1rrRkyyvZMcumQEzNAccTxfTVC8BaeZ5PCChGvdFKaChyo",
  "key22": "5Qh1ek5sae8Sr9qNbd7ARhwTNJVFqrwUQN17g1Q9QZqVfuKCdg8xeHyWLq92Q6YmR6L2jspE7WzQCWAyE7e6Y9vj",
  "key23": "5TdiC4c7oLirmJ3b4WFPdWxnTPcZhp9f39qLA5saiqDLqex5yqTcan6KfnKPwHJdMDQW42dPNnpHK53R3nxCuszY",
  "key24": "2MSKfTaqEvZ39NwiiJqApXerQMiX3WmD6RHEDabzzXbjMXyX3tosHsmijncimJbPNbdP4mPRWKvqakmayV3VKUgF",
  "key25": "2YvjCTeUj1AD3SadPQADZghJ5xnhBGzZxT3Qfweo2z8Jr7HtP2ne3igqWFj4LxStpc2X48ZeLZLXp3mpFYpN535M",
  "key26": "sL72qsM2NJjZRBGrGEc5KcWP9GcBYBRACgmawCrWKE3RcKwKi5DEQEPn53pFwhHQnYgGPEdhXjmhMc1oxJqv9LY",
  "key27": "7ffkGrPT8s7hPPWYe8DGnuo9PaXqi8mZE43AMV2hm1ooxbM62mjsszZgNaYZxRHHpAqku6QDyDns9nE8Hwp1bou",
  "key28": "2QJJm6nnskbq4daxCkktxBVvbc4W6upDpHk71HDP1NMkVq9XLpanSxbuC2B1GzhsStVXqkzSkQEkvq74pA9XGLLm",
  "key29": "MTnhuPALSx13vGMTHUn5ZBC1SZGRhg6YrNUfqcwHbpMwPhUPokfVJqdPycwTqfrUVQcFZ27rcw23dZ8H43CxCt8",
  "key30": "3ZfVy84HE6yPoD7Wu4A9kufbgr6i4Evii7bvvtyanwuJLEeVyqiVg6DTPfTjJjX9LGV7vhaZuYZ7MbhpkDxKt9HM",
  "key31": "35pEou6BRuYpr4SdFa2D2BdUKiz5SWPS4gJRoD2VWVXLBGMHwv6BVYodvfxTeYdTUizREXCCxRb8CdGEd4HEzXVC",
  "key32": "46DH9wXy3dJdq2jiUd7vQiLXXBrXDqF678roc6avsgjeiXd5D5xhbWFuikYuUR1kLKzkNF73augW9nt2D4JkWPWS",
  "key33": "4t29ZhAe4bPm5Mric2snboSMuU5WNoxmC3vMr6JmHmqY5eEH8Bb7qi46SR2zw9VmXtRCtNFESM7Bs6MaMCKx1KH5",
  "key34": "WHhiNbbqnRcDf4LV65Jid7TT7kBayYzhn2xzFYZyHWwtDD2bcXDdMniKymYqcw14MqXS1XPpjiz9XjJu548ieKG",
  "key35": "3FcYUb66Rzc5iDp8yxSmGyDRtWXG3MH8VCAgyV6ACKoT9jYAKdCE1KebpmaYQhwedWxVZZEHk4YFBMKWuA4QCd88",
  "key36": "5oBBu9CQKwf8JAcfYwUtcKGyXcWoRmWXLEnUeQVA9PQDnmcV9xwzSBVw7E1Ps72PcJbATMTwtPEAnJdm7kWHjiry",
  "key37": "3kBWBHHqkFohr3Wq1MKp2qHuuYwNPRzeZ7iGwyMfpWxZL1CorC9Ln11RE8NQVs9krgsiCWzxNtKXtrGe8MZS9SpK",
  "key38": "2NZNNMHeV6ASW839NqaXqaamLhLjx7YLTTJzw8y3xT7nsDcpqsE1mDqn16eaifoTc88uZCfYpLaCbvidwRFMurj2",
  "key39": "3NE11SBR6YcTUXoii71tdgdYrqjT5nrcfw98NeDDwBEHtpszd9xhepSLctRopDr61Hm4YbBXiAkhf7amSLpzVHR",
  "key40": "4XMnPP8kxDcjpvspSrR8eHQX8QQQnowFdPoR5Y6ieSui6dQr4krmjQs2ZHEAF6Q7RYuAJY49RmW3DUL3DKfeLLBC",
  "key41": "32orrbenAhYFrequZynSyn1LTRq4dLp9Uib5WfP27M91Te1HTRpB2WhF9jf2sYFMVU7ksFaJQTvyCLdwA8wXsZED",
  "key42": "46nDmKTPabHNqfKTjP72UYAGkYXbUfd4sxjobSjvKFotaQqjakAjZ9hBYMPrY5HBhgXBdjuQpDGe63SSGf1kWuAU",
  "key43": "27vmmsorjeL8qk64mukGCXNbDLomxpsHHX3DfJXDkWisFo8MsBXkeQyuqJbRbmZkjv3oYWdnUwaDigRxKRNhRkub",
  "key44": "5SKfmjMQC8r7uiRSjaf37DKRbnZwf65EG6Guci5iY5CDBCvWgPCRinw5TeQLULySbJ1AcQJ3SjzCCz4gAw4vrhWg",
  "key45": "2FvuiSdURifkSkqjQ6f8M7yvwNpahsaHbJTnBU5xCBdMTND9prJrxy5k3bo8umhYnHGMxphpDfG1EHjeQzmoQaMf",
  "key46": "wq9bXrXqgBDFLwxLiar2jbN91WtkXp3CfX9exe7d53fjekQQmBBmAraafy7o3qtSoarmP24e512e7GHSKwcKX6L"
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
