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
    "21C21MpmW2HU54DB5Wj99uyfDbmK8tgBArVtyXkTDwTBnfaXv5xG2e7ThvsjvwE3bZPM6h1e2LD52ZpYX3BYgHAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRrfwXerH4vov4Cd3Z7YbLD3LJV3t2JgGvU3tMacMRCJ42dFxzjZUMWLWnknzidbQ84BAbKewToQm9LxhVJpDuw",
  "key1": "2V91EjtKqJaQ3BxWD2nahG8pMvrsyekZjzQ3dCGt9Htwnv3rCYgf4bU9WM9Lq2uPu5NE5mb9r2DjmdU9jAAiivji",
  "key2": "3aSVfH8aB9EwbL7kpCX2Hj4J7ihT1CceCRnU4Noz2KHBgLp9JdJxxcdZ1av9xwmHGo9HptfLpsvZt6euKY4xrRgu",
  "key3": "38tfWe6WdoNA8YocAxueBcNjiBkZsgQPs2jYieyMYBRfyHUPNDgjAr8Sz7kZmjEh1GLxv8zUvKWgbDLoLSssLjd",
  "key4": "uoJrojES9qFbsPU9c2U6VnDtQFtr7m1WYVm6Ck2jZ7P9QWW2zUeDTyNqNnqAw1k1Sm8azDnW7FYj8rVf19XuUuL",
  "key5": "4dnAAiX5xyXVswaBxHyPJsRShPUDYb9atLpJVhne8fzECEoxBjSrj1k2C2eP1aw8qyB6WBcTnnDttMBq7B7ed5SZ",
  "key6": "3b75GcXiiDfJkHoXs8qBMaNw2XHFg1DWC3dC5Ubg78REaVmbZqrnhDtLzYZP1ZwMyyJZGURVVgrzS6cEtH5zGi6W",
  "key7": "5Xd1fn8YczQGpC4yKb4DRyzsvpf217xe443vdMwjHKT5jtPzjqUsk3a9hznSGzvb1XEg9mA8kgRPuGmU8nmpUbLL",
  "key8": "63D6Z8JRKaDL2XpZ49nXAKQFyvASYdtzWkTJRpzZBViU9FbnNHTfUuFZL1Q1Y9wpUqRFKiCAEENe1FGHSnvL2CdL",
  "key9": "3uttBK6mEt7qfTMSzdUDh9ujjGnb1mqHTjY1WP4NNpWcdZSTECtzjzGvc6qCTQ75Mq8v6DAQrNprZA1TNXvb7t9H",
  "key10": "5dLC91KF84AtW9ZmFK2qHvWBr4vRJEunhvcXtxTn1V8MsavzxGmb4T5SAGrgvQEhpFm8qmKdd9E8VS9NFDRf5iF2",
  "key11": "125spugGB6tXRMh8GyXxrN4xuYP9yhSKVA1bKb7p7fRixkfb8CA2gihu749PX9Q2RGfBVmXkRietvS8fHobjo6Ja",
  "key12": "5eczeV1AFaoxzzmMQ5Mg7aTMGwX4LnVxe2aaqBx7vz7CnJZbUJTeJiBAVpU8NZzcC72zAVqKzKXboYpR1cAEmYqy",
  "key13": "2i82kDd47YT9irab8JiEvaVTzXnUDPMUCFkfqXnym6819GLxhYnMo7P4s2vKLpfL2TJkCyEWwdZv3DMDPv82wYsJ",
  "key14": "TGpXrQVjbzwfz9aS1wqDermHRhqZyuMAaaETAtmKSh96sss31B4Em4RLAuxEGXBzbqnTZneya1tmJ8m1v1iyr4m",
  "key15": "5wW29Pu7p5hwwh87j1Bryp9ZdXmaSj4nMbhTuC291AoXeWFxTawwq3Z3E7yTMAxkUDNLeeRfma1ncazdTK5mXTA",
  "key16": "5AgTpGj3wEmGxCq5rwGZ9caULEW6PWAkKBELyj6KfSv22LCxDbAbYKRnLVuuev8n8LjdwGNWmZYiysQAzs5N9pWB",
  "key17": "5DeQ16Xq15FK2busMtyzfUUTyWAaBrxqiF98uaK42ovQe32CTK2hWgHghRs7HZ5trFBXxXM9DLJgS4z7d6Vrs83T",
  "key18": "NSmgGpNYdfEKKVUrb6rWrWYjV6XZJ1q9UFiEbmSWo5rCoCkw9U4pRiRgNoWRth8dhPBSzpCJmXzCqRYjZjUcKjq",
  "key19": "3kBGxD1moVYFd9BKuJ7fcXWUQhXkZUzh2eWVez2WvmB4YCfitnvUcNKRux7ew5zGsfiFM34F9kLR9RofhGAgop1v",
  "key20": "4boGBdTpHee41zptNnNm5BKXR7PbiGRmTFzgscN23dpCvebzRipUAQQiD3E5CuUpVcvwFrrNJzDe85ABM9CNFc7c",
  "key21": "2z6QKn66fHds3gkaqF1aeuWhRPjvH5ynf62NQwpStVrn986Xw4xbv1m5RKfv5oiS3s1gk5zm4jdoxceo7M8yDmPW",
  "key22": "tDR15SMMvTPGk1ZNMR8Msba4EP8muEAQQiQoDBUR86M2gACBG5fjztA2UXiDNsSzZ85SNmgupFppq5i1TZJAghi",
  "key23": "37j8UxQbuTX7AGR5KhPEoS26ren128QsFJtnUV8thwJqx7g6gbujDzxCmh9bzBqmCdowwG4DCGXhsxvaWMcDLa9V",
  "key24": "4eFPtXtkNDPtvySfyiCHAt2w4op2NNuVXyL8vjbMUFQFbJDJf7HdiByrobht1rmJhkismnmuG79ECSg2fuudeARj",
  "key25": "5499exdFGXVzDnhobbvaf4gy6c5NSZarLeDeYwbTK6stS2DyRLD5LgjpThXXAd5ofxPkAabZHw4WDHkPqXDrbbZj",
  "key26": "5jJiHG7C7FR7igRuzF9rSEwRe7NbSRz119DGb1ukQtqrdbimSHB3MtoBsiViwtUvpggZaTXXQjQ4YacLDGXaDySi",
  "key27": "3PjUyunVbxhF36sRPc5no3uLb4pFKrZd8PobZLnjpHJho7h1Jy2tocroTEmaNnSvpKYrM7RQL74oCQ8rT7qdx6hj",
  "key28": "3JWmfj8vTLPdEdDvyraFfmdrzcAu4QeCwTfhf6w78sUqJxN8QUXmbZ4ud3tzinjwqt5B7KCEsXsdmikqrp4fdBsH",
  "key29": "5v8fk4uHmcP9U7XLFte35qHCcVBaBZ5TDdHaEQQ6d9bj5qHtbA3uJC1zq2Di8i8Nw4RbYM9eq1x1jNTLeArA92pV",
  "key30": "5KgN7CJTN1dRame8Qvzx1ktZTNF6raTFNQJfooRGQ8986CN3nKyo6Zto5hLCuC4B6EektoFdDpFFZPznBXU7C7Xr",
  "key31": "2fh7Gnhs72VjRvFZJ74h4tphELJd2niuqUVcxW9dwghDa9UNDsgjR6KG9XecXTndVANKrqTdXxEjaBvg26RPvCSh",
  "key32": "2NoC748t1dYTCJBJKmiRXP2crB4cKqPMA51EnNePb2CGCdM6aPhSboj89xYM32oWzbV6ZS1UpH1Y4Kz53753gdDb",
  "key33": "25i6C3DhQpDqFWjtD6NRhkHgo7s5Y9gvGoKwtB3CVwkgzPzzZrzrPTJdEWqKSQyonNxXAWmxjkQuWFtKRAkvuuGs",
  "key34": "5fFnLKfeGuFExmsHshv8a4w4v66EgnQaJjjMp6AeesueXA2r4AJfALs8gxpcUomyZ7Btyu5nJVxFKAsy5Ajdzq7F",
  "key35": "4qdKKc4h6oMhC3eqPzAUSN1BZafCPruv6eS1dZ2LmAgiqC9yguk9GTBjPS2TbzXfeGyUn4UFSgUCJohLndrrqTRT",
  "key36": "3qrrJ3iKhTUB9bq2f3hXL5ds5kL3PYx5TBYtEbkHakuEvxyD9bWX5K4K2dciTYZsFrFuNELuj4bqpB5gM4mkZuqj",
  "key37": "3nWjZBVNHrS7BDktnGd5SvToSv34vfUV582LRPZQJNWMxREyYHDSLdc3xQo5nM2dXY8hcjgMKx5btuij1tQLBxKS",
  "key38": "4TyDGkg84cC4GHREsQELCtupFvdbMf3H28VaMNVPWzDZqXJFbHo97K7rDrZZtSqbUinpiyDmUkZjoWMaiP9JdSsq",
  "key39": "3XtjF51BtRr3YEsUJAARF53zsAnSpsucdz1jUQ8zZ9YgtcLwB2r9YD5yjE2bGQNTSGLqvqpBsHjKPh1vBXmF7Vgr",
  "key40": "3L6qdDZyjeW6BjTJdiJzBLvBqzUzgp9a9LCKdPwCiWfGQwpHvDbPeCMNXR2cyAMTCj1N88kjMWa9Z1GGTFZL6h6z",
  "key41": "ZbAEEdaHYnk9mGxnqjABBoakp7v7bTCo4KivUyDFGHihPBQT2GhRrLkiS8iJzHseymc5wdEAzvrE6KpA3Gqy9jG",
  "key42": "2chuea3Pwo9MQWeqcdVX2yY4iRESJn6gdBNRzCqLggfuV3U5pdhdSG9GGKXAASMgMeWrCHd9PHnn5wGowAKAVQuf",
  "key43": "2A5CuUCcuYaMGKfjR3nNARzaVWhV1Q7mKTsQyEgxnFoEUqAN6NrSfqL5JD3HaroVVuKTQFUzzHZgg9ocbJGBUN8w",
  "key44": "5FFKhZAhXqZLZ4aTrkCBVKrCTmDZT7izRTURU54YHoE8ms9u4cMqfVPYDBUFPXPbTUj5znf84Whg9X3AUWYmHwAA",
  "key45": "5yTqhpWjNrqmyc96dQXYiGqcbE7WpurCKNhDiiK5ZC1VVmmCEoDL5xSfwA24qnhMMK6s3Sc4QjLXBuBJ3XRe6xqx",
  "key46": "31QFPffWnBtVniRs3i4KT87c5TkCA8xkUazNHms8bK59AdV9mihwtfzjVV5mhUaPgLAagvC5LsZLbERkvoNHcCSS",
  "key47": "65PHduNeKB3wvkY29qMnEbGqbLrEmMW471z3rhJZo4Q5dPfnZKkVzZtGJgs6don9ZMH6sBg25GvfRRG8E3eEF1oU",
  "key48": "5R8bpnhRu3PkGnv7EouDiJpUCraTDBG2GK86UzCvyA3hikPxxPCJKJGNT5r9KZMJneVxMZ4Z3M5mYwfCKwqnEbJp",
  "key49": "AHdPieWryhUj8XE79mXhbmf4W2TctutVHA29GeR5de8uioEHWLPW5i4Sga3Wh9AHygMDcmoXMghcSGmHP1h8RfF"
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
