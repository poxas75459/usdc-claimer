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
    "2JhWTVVbTZUJC9PQz8n9R74KRfAiSmKVNLgPFSYdGtiXrM3yUUwz6dJhE79pLZYwBPBka6oF4obeTxJ2YTACzTgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CoqChQQA74wJ4poyjmZM1V9xztcdeEYryzAWE1h5mKgQmENhnPhZ8cmKZAqrgYQjxk4ivQBm8J6rxvfLNZ6df5N",
  "key1": "PjwDFTmPjrMadDJ2z2FbYh7RZAgAZSSCoTKXWyu1MU6PhA5tjPXXAMzHficTKwcLnceas69eQcq9sL5RsEvzNhb",
  "key2": "kqDQFcjLouGd6khxzc2ACmbyMgJdNTj6kwnZzjpBmGVKKJG7JmWmf5xAaxr2FUQ4kaAtM67jgDkCFRwx8rS51NB",
  "key3": "9JxSZSDVSaJ4SeS53nMFgninWVYDpmxfeKD5dCybQTGYYXEtzGyH4owktXJ4MMGjGrPwkRbyU4kYuKG7P9ckVjW",
  "key4": "4T7gVRECmKA36wZUDPCgWBq8FfQUJyFRqcVRKPGKcZhjvKGWcZ7jqPMjWVKQM162WDZhvoovxP1a9DLQCKpREUUY",
  "key5": "5My4dfk5BndP22Ndx68KL3RNHteDbzihgGtMw3xjcSavVdZnnbZFYCzdBmYNVQfyPHM6SQcDftqL9Bvan3X7Cs8x",
  "key6": "3X24ukS3qSJa58jt3ZDpHMFygAhpsyMjiPsje8pcYPe4CSGyfhFCqg8ebGfSQxTheLXKdbHjtS6x6W9J1xkrGbpi",
  "key7": "yTCm66v9zGkxtC4s4tVHV8DXnGTnMTegeR9zBRTUswdFNYTFBBr7bXGjwpui7MHg4wiyvXWPrxjvSG2B8k9MuWT",
  "key8": "2YwnyhqtdJjefcTwDdsqEqdVHGDfWuxNk2WPmh4ZqXtRLJ2sH4uCW9nJdQrG1ZoJCDXCWcCArryMrtcGtVZ2SD9p",
  "key9": "2aeQKQJzDFBR4u2fg2jpzE518Bp6CHQjC4hzHwVETJDaTPyNPyMFrUxT5yTKa997oGZRwbfM9s1gHEb1BpJxhLud",
  "key10": "5htT4hamYt1UcbsunbTnjQ2M2isXpPhXNUHhN6oUbxZpLp4gpurjPuaJUCivSMrT3VqfMxuxWdmae1JVsybXEM6t",
  "key11": "rjx2bBjFwdCjbktLLFnEsrD6vxdnu1G8CGjf3G3G5reoYUmnAbwaN9joXdDpB3cLHhKA8nK1wC9cswnUScfXEX2",
  "key12": "3R8XnziPuav3AHMmq5Ki1sMaYprSqEPWaXokhnoTnXGjg2mb3rpnpVhSQ44js1HHbLGJnmBB6bSmCUMy38fwcHmY",
  "key13": "2PoAW3JQT6dbgYtQcmsjm8h6SY48g76KVtb5fUfNDyB2qkmihzTVWjNC2ZfLjG6emeN57GDzrW1s5BApU698aCc5",
  "key14": "qkRF9eba78kt74BzYHTN2bhufMp6q5pgshWkcLiWPoK6EJBSahSCZEkPikSzEYBo2fZ4YmTbYbB73WRPuQGYmZv",
  "key15": "3foXwqSMDxxqXoACpAbSCSjoNkneohQtMGMVxoa2eEtevE4H2RMDTzFVEdqR3HWEUJdBxsahmKRSuMKX692gzA8z",
  "key16": "5ZastuJS6eTwB7rTkS2j7V1vWWQsb5EpmEJXsUBAcaDh9tWBmuwN89H2YW7fs7QUQzYh2uvnVivHuGJEmSgzMnJf",
  "key17": "423Luo1PF4G9eMfQhxMiuEKyEsQRP5w4JKyjyA5EBeyMz55f2dTETthtxFapEKCeGN5VVt7Dv76itrbX2Hf5jh8K",
  "key18": "5rjmFkwLj6nzrUeusQeiT4KAJXqyvxEGai1M86gx82i9tKEkboV4SX4ojqnms6BvgUR5sV7A8sYkMeLr9Kt3zFor",
  "key19": "3z1dfxhbkiDywEnzizr2gJTqPq8bk65inmqKLH5v24cUuzh7inuzUF6r3NXxmLznZ2KaPm9XsSCd79fySiR2fukV",
  "key20": "5e2oax3upbAwBkVTci9dRMvGgsmTmiT7u3sx9tct7WUUJ4k5fsnWYmu7SrCxxjYquLH62RbGjYymQBsYEovfdFTd",
  "key21": "64Nm6iUDeU9UUkJtjRDv79R7HdQR9uGB5B145ohsTtWVRRPe2HddBQhWE9fmrN1fHwDmSkryEu2YSU3rHdT3N5iP",
  "key22": "u9FKkuF3FZSJJbjmWzmhnAGuCajWxEbYBRJ7pvWb1Ydwb5XG1XCAH3g3uz9LRnC3Fe6gGqaoueGaZ1zsjocsRBC",
  "key23": "nppYCXFPyosmFBzYE4DgSsDA3xUaZoU4rVFwBMaa9ZbuBbCc56zKuiVsGQADU3p8Bwv8bQCUA1k9Wtktc6K3n42",
  "key24": "621xYCNoeZKghczfVrxSARTJ5fxGHRn6HGgUX8MLbqdCPggEWpM8fu6UA4ScETbkS2hn6KruSt3dKEwa8n8ShZGa",
  "key25": "5mm8gApq2BdnUz1Zqip5nxGM2BYTiEX9gsLMbcnQvWgchQEQyV6r9ijCv2LeMkc6QTVPPPZdSFpdz7jWZXXDcQQ3",
  "key26": "54vj8JrjYJQvrbYiUzz2su4v8msdGpVCEJMdnykcd22UjW5C2uNCrxVu96wcoxomjK8k9titnsx3pqy4sEviJBFb",
  "key27": "455Hopw1G3LL8JnAScfFv5MHYRtWuLDMc9D3mkcEiXwdNboPxdgk9Di4NaNtxZwQsU1vme4Rvuze6aJQL14vyY1g",
  "key28": "2oop8Jn9A1R2ECTySCjZbtFhsVKswPiGt2kTzygTRWLqq5YomgvvdcSnXfuN7F9nAoDofS4wx2snzYCbQbhHZPrF",
  "key29": "2i6tJ2eLosm17XAH7FSheBjXvPyd9brb5Lyvz47Eyawx9rCYhhGLEQY9qCnHzkzTkEtJbybZjFjYBxE5THW6UCKM",
  "key30": "3Euh5YTHbVYyKufUroM83TZDinb97rv8gJL1Gqvb6Pk6ShTby4ek9QB6DHYvqZQCAJBr7kZ1guhKCtnEBybvkNUU",
  "key31": "4f94kFr1AGqFxhoGJMW6M9nkAEK6tinBJnTUNhzC7sTUiUfaiKByg3jJMXYM2KFGZdFpjT7rAxE1PbQadPtrfeYb",
  "key32": "5m9zr12it3Yhd3raSxPtVneLGBvGCaca9ttxyfTLd7BHmQ2kxdEXKGTGtp8gX7dvK9TSHLu72nAmgWruy7UeshCE",
  "key33": "3dKXANtDSmAcjueJaxuf41WV3VBVwbvme3KsTUnYmLPixqJQstq234ERZrkNzmqAzGjdzNDXBKoiZmwQJVV4guj3",
  "key34": "2nUi5Dfwkuormfa1qAq3PVeB8KBrpyefncNi6xopKdDASP5tk7bJtfkpy4X1XZdMYtWTCtJTqQ1kN5hNGkoVHdSD",
  "key35": "SUFhQ6ZWg359o9XTmGUjNVzu99k2KXZsPak5ziHhADDKjtqHWyEiJtnujC6cc1vyJWBt5Z3kwKBDxRJPskdBbKd",
  "key36": "5BLjMqbNCv9t3ATCBDgN6JEQxhbgDdsYRtuX2u7ZEb2oxHdgwUqjVJ9nbjYv5jEY3988y8bhhcAswg4Fx9NY1pFE",
  "key37": "4GuqbvpM896C7uc6YpXsyPZWE6y4JYjBP9mQ7YFgon9dU1MBzASX5jXFxHs2BQj3zc1ra8fFF1PMNHy72AXMpS6M",
  "key38": "2iLkXT5wAEMfTtzuMgnKVYGzQzv8X1ReU56LUvMGSMBxEnwJGisS8ymjyrK9NfjvpKqEAYCAczLu1ufy5VKKoomD",
  "key39": "3yimPF381RSSGGaiv5vAGeeYgCdBWFAffHXsUoiUJz3EnHDh5ZEexJGinjZeduxpSVvTrfHctTkSjbTHenbDVCwC",
  "key40": "38PHtgNQDfXZ5Bb1W64cueDM4S7QSGpukSLWmMfofYYStmUY296YBMKzLJVZiwPRkopZvcrGiZxYNe6MUkU5uZAH",
  "key41": "5yptu74xooqvHmnmr87eDeNpV2NKrxCByDQ4B5LVVBnyAuN1cxyR3uiRBiYFCtmRFPhpnUZ8mogm9JTv8DCeVTV8",
  "key42": "5Z896NTAP1KLFonn6r3ZPifXBBz2ad7NpJp1bFEQhGKZp59LWVg9rTjGYWK1RaJek4HgrwFm3ixYt1eaXscSLHyW",
  "key43": "2BxoMibWED9KBFRo3FZcV81wVweRUFJ4fMWJsNbBv269ojPqmqRo71gvKLsA4RQ37jFHQLbYGd2sQBVPuDPSR1fF",
  "key44": "3JJQZxDRaG1cjweJaqUi49yAxhoDPrg3Q6htP9AnMG6btMpuw3ajM4hVgZvzJbhorgmgMNs2Pxs7QfXpi5YEQNzK",
  "key45": "5MgR4KWBD7rkFawb7DPSCJP751G3XAHadit9CGE4EPu6WNDAHX2x52xbSfbA6a1TmZGGcuxdh5xUQZSou8VA22r4",
  "key46": "3t7iV1ynM7sRRoAzf4vmuXnb8jURRZ3o9oAiGmyyeqLNd4XCkaBa13gogqqkQbfFw4UtfwYPxhndaeHurbUCpc36",
  "key47": "4gGfCSnNQtZySKuDDKJ44cxDG7ZeT8J518ew8ptz2kmXfuotKitGD4KYMZ9946JVkdkDKyubuo6NKpznz9SkVViL",
  "key48": "4s1iyFmo4giEvtf7RYv5PEX8SJUbJMhmtSq2ScqYZ7n1Y6TVM4syQS1hRBGGzh7rExrYB4VEN4Hb5M6cNK8LLBFp"
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
