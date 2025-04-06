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
    "BHR1K4G8uywg9nW3MptzWG4Xc6sJQ2ukE7r9KoAXsM8YtUYc843Bx6JF8R369mSov4fqZhat9Ge2ks9jtYnrLra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MqLLeteFFAQys28J9T4MQToHjNDQ4qkCXa5BfR8Kd3L6ii5s5b2fTxN9zX6dZ83Anc1FjTXCynNGd3W4rLGer9y",
  "key1": "mM8y5KkH6gJTCZUG8Rfy9Zr3J7x5QU1uQi5nTsQpRA6Ho2sQetXbX9ybuDLwyLdi8N1PTwAtk54QkdXsM3fVVbj",
  "key2": "4eTQXgvstBLp5PbVMwiFZup1ikc1XVU9dbLj7duRus83PAMzCRs9RjYJj9cQrn7Zrp3RmADw8hYofLqJshQotSqA",
  "key3": "5AXGJcYPVq7DDqmwHpegTF2t2F5TsnwxpYGaaSRW4QU1UmP7iiY8b36PRwDwcozcNcqqRy8nwT3cYAtTBjgPAMsG",
  "key4": "5WwnVRLZ6ZJyfddDnM3aNB2a4MYWpUaage9fC6StmyV5RKsfbwWPqHbiRSvSrAoZQSJpD6ykgb92wsj8bgBzMqwM",
  "key5": "5pWHUSV85sDecgvjW4xbMEnP9sEgA3tRi2eBUyJFvfwyna3Sxm51UTqVjAyB2e2XLchWKy6YBLe42vEiMPbhaThG",
  "key6": "2dsSnVgHMTpvCstvrrDMg4HDjdvRF2tm8eqj2xYMmkn3SG6FA6oQn1tDgt89F6YXyqoHyNs7zLVRQsEaPfiHdYbz",
  "key7": "65M6dSk9GiLZBUXKJmtk96pSnNQsLfhqHFDdakUshi68EUyLE8JGYLW3LyJbjcyo5DoamuyneVULU9EmnMA9L5NC",
  "key8": "4rxLf9FDgfn8yHwT82zuFvX7RnAbAWjTvgVBUt6Eb2ctxWics1eUoBA1U5afYhUS3iKbhDLULRbaUNV6VweLwxTB",
  "key9": "2QsYSFKBhh887UZGeKWbZP9w7EK3rQsSYDCKh8C1JndJjQ6FmVoB1NGtrjSP1rHu6G4K6feFbC58kKsrxCep2r1B",
  "key10": "o2mjXPzBjPkAEfNSJPunr3AbFwckvinP7sLzeLa82dnxwjWpRUBBJ3zVLA32nrTootQQqip3E3ymsebcSXh4tws",
  "key11": "3XBTnCjSKyWWgFjGtZKBCnEnQpWK6Z5pLewP64kFvLEuGX8o4mC8wR1u2hj2d2DWmLhfNAeDXdTUnmvchQaJ6znE",
  "key12": "3x5yoGZoM8f4maCGjZYBXjzGY8zmUyPQiF4hVrzh4PrXrgpExT48Qj18aRwuU1jhZ5Tjffrp7DvmW7TKXf4hJk5V",
  "key13": "3AtXk1zvHVWuwryfTRiJf13Dn41sriLYKizqJYrt8x1jwX5ZEEs6WqGMEYSAYQrKRyh5aYTRauRYexbCmrMTwzoq",
  "key14": "2KRMoXfqJxENR5jsrnWEA8ikyzpJHtngursPoqqkXyyqcCfC32KmUi1MLqCw7LDUhtexFpSRLT94XJvUpxXwAa5m",
  "key15": "5iWr3ARBir9aF5cKxYnBA6maqWZN3FKaE7YYWZBeSMyFKtiZder34AaPaJK9nSc3UQJi7gCSAkM7wVyU4QfTuLQ8",
  "key16": "5vFDL6soJYj6t7wzKnQrrinX4pZ2z7qjR45ot9E5KUKrQ81wHxPxjj53i2PNoMLy9KGRUqxwgXyfskLFv1f4KdMX",
  "key17": "5C5ZcLiREmPRfdyVjfuWdn48qCjFPxeifJv9JpF6R3GjjWbML6W3xkrrUPNdHuEJQ9tezo6eeHXxwGy4DzX1PEdL",
  "key18": "h4XhgB8uDh433n8L1nnpJP1tx1r3LjucMm8hBLnMaq1uSf817yE2gke3bkuW4LfqykEX7evzfzsyHx6oHHLgZyH",
  "key19": "4StVwYCUYJ9KGV1KaWLDZrRkXyJ1PPi4HStegubFmocgLA5uiWVMqiK4WxEEKja3Yn15fC5W7anNAtyq4F9eDZGm",
  "key20": "5Hd1UFzbWKrxeRkyqTn4bdAKWtz8bwLxxby4obhUjoR11mZnCXeMvcGPicB8fEqKWGAxoCKJanJTnfH5dGrprKTc",
  "key21": "2ywHqnK3qugqQ6sarTghWLGdnWRU35qMYriiejA9cLwHNxQ1FPGHtXWwSxpC4hpL293iFPQLWNgZiNF6pGtb6bta",
  "key22": "2p5baH7RE9Nre2Qkh21frzY3k62eymThxPGDWQRpU9TsVXiyxTUoP6wD1aduedZvHnFfHfeQFAyZj7Ek4UPq8ovv",
  "key23": "2ydUMMSuAsBBQxyrU6DKA1gWUCRnrf1Wqw5bcHpt4iHC7EiZARRoSnhELEMbAdgT3vsQpaHvJBXqYnnjhxygJuFv",
  "key24": "4gy4GGYpNdzhHSRhQjVvfnnc4NEZs9XrwHBbz3p3CDVahZgmDC57iW5UnvHQmm5HbPnj8gPxdc7EW1ALXPvfYgw4",
  "key25": "3kecEBMR6jb4RweFvN9g7fQ48FFjBJZiKnTiAsW6qvCY9h7edVPpRjfuFwMC6w6LK5heDT3r5JUbPTzUUnDiVdWz",
  "key26": "3g9wEefLCttFehcdC7S2sAXH9jJaxkxVCwQyE6orXbC2W2ZbNnT2y3t7NLrctiHqAL74oPeqjWY52j8HpeGjjuLH",
  "key27": "4hwQD1RExCiTbDawQet3vzSPy2GYnupyu48C4uSNarxe6GHxqCTi1rMCeGqea1eqKUpThx9JU944cFRxp5yMREgb",
  "key28": "5SabAwhM8QnFSSzYDs7WL8fM3tEk2q6YLyKBAa2vzQiZVToDTXNDPcxZMnGkwgTVRRnV54LMjM168XCr26DXjc3r",
  "key29": "65XkGowctD7Ba4wHEk7X3vewqKdRGDxJNj4jppgG6dpStoaMdGfeQu7uFpa5dQFZVV3UmRc6Vs2nyveadNKNCtpt",
  "key30": "2ckpxxxPX59itAuVGYEUddcwzg91E2QUf9DiTKBV4L3gCFPB3eVYdVJLn8LuRaqL1192y4DKm84TyTAVXJbJfbLi",
  "key31": "5758PmaqGfyVJe18945U6mb8C1ymxxnzTj4vSvrVRByzumLx7saJQe3V4CXvZThHTDHJ29M6VfmW2d4M7L1CzQv3",
  "key32": "2WQ8UY8B42hvDVj9W9sdk2uaSSf6XgvTeMQfxm7vrAuoXo4RWw3SEFjL3GLtTT72PosFfzyruk3nKZktcVmmAthi",
  "key33": "5GFEbqTV5oRi1Viiwbf1TRmXtVAMtfFQoUTUQeVcehyhCnJSTvcAg8D9w1dmGD9WQHK5d8PA3v3xNj2Cd68TfyH9",
  "key34": "3mmsmBYQvi3ugG3KeLaMbza8vPBjivcLMKMKGtEHhejomJCLueBRXrPqvw5LqoieJpP8yGKBkeaRdEmhNacuwrkz",
  "key35": "3Y9eji4hzcv4JYM73GXaRvi4dtoVkx38T6twz98QgZWRhTfgWgu9PpVd6TtDym6CRPWrpT84EcmNyVuW7FxNfZuz",
  "key36": "Yx7X16V6FLNmn73JmSdn9crn9A3f9X4reWdKzDww2p2HnGGyJe3ZQHZf1JpsD1xbGUrYmAmSrZsWkxVJYdQHskm",
  "key37": "24a3jKNgMQAZLTEjK69m153e492ZnpUioDjaSErbrGgwR3XkDfMb8cjcDscnYqKv4djiYkyLJnb5hb1esA6bQiWH",
  "key38": "5yECxDspxiondr4sVMwdYqr2drajmcir9CfYtnxL2kcqjihS6ZpUPqzhJBgyKzZoyc1GeszCGr1J8P1xC7tCRZ2d",
  "key39": "5ziSmsF25EzAMqYNfJu1PnnyTfSWfCSFkXKBGfgZArE4na1ypH4Kab6BpMvByY5uujaFR3k5X2xYbc6ELwpWs44s",
  "key40": "3CBKSHQjAH7wXWvoexJJvFQAJsdUQNYcE3cbid5YQacAL78dxM5bvdmJvJNeV81kVfhgFxrS9wZr9iU6AVpjjAMc",
  "key41": "5YTSxzAHf9jmTtDcckxWzerAABQiHj7GbV94rH3knWZoK2Scd2Vbz3YBq73eCshMAyQZEhPuGJFuqhK26yR1AWEg",
  "key42": "NEwQBWuMnsCLCycgaP4b8m3YUKa38sVe4qQaDzYJ5fL8G3gowGf3qoyZ7chRGa7MARWUQ8RdJQ85yU6wDEmuNVz",
  "key43": "22fztLdvmeABGp4gJLcbHUYtMHjhX4wGGvb3ScjjNhaHTmJ6qpcNDN6bgRgoxcmoX8DpS2us6U43R48hyWArvSR2",
  "key44": "3zHLskgxF4GzdphFtoQvANx1eHCm8sArhLLXBcpysezf4X5ogcQt6D4nSyGLzgGiABuNAdy1FhHWLQ5e9vHd9pvR",
  "key45": "4ZVr2oMQiP32edeeydwNk4nr7dwYDn6W2xMn6NHDoVs94knwxbwdYbx8aUiqdxdaMAe4nwwpfP7PWV5rd5inYhSn",
  "key46": "35ds99gKbL6NTQM5B8s9K44nZ8pkjZpkBNi3QNm54Vh4FhdMZfsmW8ugs4agY9J8GSmgPFQfXSExUMSjRvkE1ZwT",
  "key47": "41JPo2qQjPeEdP77MChe7jBSAuFmwiwM5yiaJuyRXGim8a29CNZomp6nTYXANBy8n5HYwXje7kC28XTDnPBTFBTo"
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
