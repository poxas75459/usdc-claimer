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
    "5vcdBubk55KoqsLR13h67ypGtKYJqZVKpTGf45GqkyemiRV1moSE1SKnGmkNVrqJogtrtKcKLLDbA6KYvch3wHM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvVeYJS6C5RVYxtDShQwXZW38RQVh1UrLgyz2nTGMpeN8Ych7RLgvNjgw9p916Y655w2w4qwzcoVYtoUuBdFW7i",
  "key1": "5DtLgcWdx6KCSJvuRL4VPfkrzueb4w6SUEgG4ASWGPJeWf2j1L1hZbQFyiu67j7qyShwZ4QZ7kFdiCkQxBdfrsgg",
  "key2": "3RcDbELfeJN6sGenYp7qch5WQdkPha84dC6bCKhpdQ26H9TRKLS8g8FBcMZMvCU2aqba6FjPqXYg3ELHsC5exQbe",
  "key3": "3K13hLYikrhNT8Z2mH51JuRJRCegHFevfknzNbQWZPXikbbg7bxHbomWhHLogKTfSxQamT1zQH8QZeb8nztaUUuY",
  "key4": "4qoW4gtX8LbHcFVNAdRHHw4PMHGiozvh7YXFZASpYizCNcm89kcL4X5Krcw7NonASp2pqvk8QitgdxMeNGLv5mTU",
  "key5": "GFJo4CZeHQz9Tm1DGSihiP4Maoo3oPAUJGMH93oXWaDJk6iXGeVN4ucYkwTkEHcGagMwUsefvLoHEfiwUrdGCXJ",
  "key6": "o6VLZpTLx4tZ5HveMikVHpcC9EtyCGbqzGNCCWRKQ2g1YMCQfd8DpiqGziqm56V6kmJMoW4F6mFDBHEJPuEN9rB",
  "key7": "2V1Gd5UGZpwWGnJakwHECcyRioJeX9kTfbWNyqR9worBLVf3LAF6wxV4oVU5DWNpBp8QbM7AC6H7xb2RV44qzdeh",
  "key8": "4jXcgmDWFordvYbWSijZMtKwmnWFEejB1SESs8q752y1LGuyUudsayBxfK7sdbArtmdyXgPE3SWw2MnTVRZJSAyn",
  "key9": "3BHLTnr6GzGZ8HZhr4MiBv99XQyQR6PDQhVztYygfZduZdAK8WQvwa7M7uiXueCUHwpz4oQsShoApdwFZ64b7L2e",
  "key10": "4qD6V85gJ4mVwkRFpjSvYmv3NC4oTVLdebLDHLrqvQzhsnz2oXGGr2jGqRuVELDMwdWULrnQYEwK6BfvkpC965mp",
  "key11": "5QJggbnqtTZ8hyGSCc6Pv29CZhcNCAQKoRBhbLSa1UDmvHooy8sQv65PFBezEKia7VhD9pQbJTfhuZw7wqDmdBm5",
  "key12": "3KhoBmNz4Qjjp67amd4472qeYcgG2FN6rctUirZu7BNeSqBSjACJgaHnjWiLWC1bp6nPg8f59y3iUke5w7ZygkVC",
  "key13": "3eqrMynkoSWxmCQYktzCRbCrYs58MfgLx6fFtAZjXRKXdrcQ3JqpXXnyxrtHUYzjqZwKTGkjnMsCnivfYxoJpg4S",
  "key14": "rchkMP27HyTUxj5ZZShf1ziMftVjLxjYMYN2jUWUErP5AmuFxTfTjKCBJLw1UUeDczKqhq9kRSnhmd1wShWgAFE",
  "key15": "43AzPrujS1rXdtKwwuVkQNDMataVAKHsN6kcUBhbhtLQLwn6fopVnU1BNoGxfFHqdxDCLQm4X5Y1KGg8ztz5LCWw",
  "key16": "2uXJQzaTTUYDwYJXzWgZs1ue7nbXQvn8gJVSJCpwManxzbGREaMLfiymRgnAvTPBAdC3YYiheZmjUeKUex72WTAD",
  "key17": "5zh66cJbFuc3cgTPfa2yQ4stddSR35PhHQw3WTaRNRuXMHnVLky9bfechK7VDq2LUUpLg3AnBdMV9zYxmT9FSe8W",
  "key18": "3YskdGtMkq1usrBgpeRfF1uBbPv61m9jb3oWwUVBLF52eXkkfo3ffkt9jvj6Li1oZ59D8pmtPECLiSWVEaErq6Ab",
  "key19": "KKU7BHDfyuFykj8dSctge2sW9Cd3ZH6ocLpuxYHKieuT3DzujEYfeHtqjxPpDzHqu2Uk4Y4vr1YNnQz2Meg2R2u",
  "key20": "hTsJGWU9y7FxcA4mYSi1D4G1UvoXhPLWmbs9wUtQB6VmwyqJKUrj4j3Mu37dJA2PPQdgsHTd47Fiu3AhciKYZ5z",
  "key21": "317bNWG8zDFWMKFp8sYCG7DSDqr16qENhxQc4dLEBzjAfAybtyr7dY3vowx92VFANxnZei9JyvZRyByQ2fpbWyzF",
  "key22": "4D6aLtULMH81z1hNapkhB9MdD2fo5vbzSJE9ae2ajXEq4XocoYo7Ugk1wgWApPt8wBsJtAxABmiYHY1GrZczv42h",
  "key23": "YjJJtYqdV2yFrvvbrLe5NM9VCVLBsKwrmLWqcXWLnKcDzybjzBgyW51nSWGQhm8oBPMqcvRjPWfShQMwcuvZKzt",
  "key24": "4eU6ssQMLvaRxRV4jJRzo82UShA5MyYFJk25YS6egakGAkv8VmmZp9hWB7jx3vUSFVKgMM6KE3acuE8gJA1UN9Td",
  "key25": "5jQD2sWWct2aMhVMEWzqG7aPiHkXdVsAGWA7ZnYfhDCawGFZKxUrG655xsqzy8Qi5kSBF1HMPusbhdupcJyifvWz",
  "key26": "4A7hAJwn8vZ4Zy56VWW8ShxGdn4DTkjEqjEy1N99AWuUKpCA7NBJv5QHpf698TJUYajEGHXogVpuDtoYjQwUCuxK",
  "key27": "dfVYExNp5Jdj9x5Rtz6B3yyyXsn1xX5qZxxF1gnzN9UdDry1K3ofV8Q2JNv555gvNdXNX8SBExbofGZJJYYBmik",
  "key28": "2YmgFSh2ESUMBVVSooJnndBndeCyW5QAj9mAcQgVajDZV8AhgFUJzXgF6tqYwKRhdUEqZRrKkUTMyWVQobuAaW8P",
  "key29": "2bi6SmdFdTYv34kJRYTGS46fMrtYXJnBUXZh6APAcRyGRGg5Ts21HvE3i2yZFcMw7TSPwpGULgTxyQ9F4xTv2XnF",
  "key30": "TTXww1Gm2JXQ42WNW19ttLyeHAd8mUaodGzjxJPUWQvWVY8ryJH3c97orqtXLnZ41321FyGgbZ3QgHYHTYJ9NyF",
  "key31": "65Dzsa9BwsvkDDH3M6aia1MPArgZsT8mZxFqbokxS3sC9D9jAtRzj8UiabpiT7DMbQRAXx49QN56DPd3PR7Sht4x",
  "key32": "2GDabxk8vZf33k4cH2xtB5WynyZs9H9nq8K2TgqzmNo9QpHRrUjDnWE4pLRLd5HhVXBmNYt8HnUY6BGPWxuTauMT",
  "key33": "3Cuiy31Efqj6shAqDDUmUyDuqnHnuA5jCafwiZaWP9PoCViThkehBv4vG1wm3piXfu95aN2ET9wWQb1CWjH11sKg",
  "key34": "3jraq3AoQocbjJHU1SQvom71fG6onStb8n34w3mYumQzwqrsEEy17DJnPba4GMsYdsqt2yNmEE25Njh9oz8wRFiD",
  "key35": "2uzw7A6qf25gaNzmPCaQg96jQ6FKT1ob8hhZxE75Kz8ct717KqqYaSPLSvTHNvmbwFoQ1zxC757UYCr4oith2ULS",
  "key36": "vFpWwr4arVLnBPSA51wGYQZPoojee9cxbdVHgbjAaJ1pXCHSwPRZDBrdTaiCFB5HkojM8AaapFHEdWgg2dqmXUT",
  "key37": "4FPLXawqoj4poCvFnzp1TrsgpzEBRJB9eLVuxUJBurQK3Lrp2KJcigtKZWccc1bkQZhdsVRbjgw9cJTuzSBReKaa",
  "key38": "XJsD1JEXbQaUDc2496DFuPwSeBWJkjB5LF6UGnjfoNAAp8RgC8Ln4VJik1AoFRkJr1AMXpMoJvCRT6rN74whJ3c",
  "key39": "4tHkTfvH8iYsf6pnoPTPDVg2svEfTg8GmwPGd7UFstb1SakzGREpXHj5Gfv2gKDC5P4WqsghotQioVYaJxgW4iYf",
  "key40": "22ny2BzhSpT8ENym7HDKErbbgFmeYm8au1Q8od6V9J7jXsh2hGxjSqpW4GgyikxtTQTXP8AYVSVw4v8wkYmaqUJZ",
  "key41": "4wp8QNRQZ2yppbibFhGyZJ58NM2LwENvA6Q6vj4fQojzhUZ3NF46bQCCmx9mCN6ujJupr7NxezRxEhXRpthvJtLe",
  "key42": "7vnULGnaWcK2SbVUsgTf5QhGJaXtLyFF85GzKyQCNRyP6j67DHx7yhUXaBibFDBFo898ia8bMwAUNU2s3xqjqxG",
  "key43": "4jnPY9Uj7Teb1t7pN9Z8Ac4c3hT8u18ZK2Hentfa3A1BJjYpsEKh7EyLkYV35Tcz3RmYgzEjDEzkjPBoKKhzvL1B",
  "key44": "4JKdvR99NBL5afpzj36mVckbnHynBFgNvTkPYTba4ejWczurVBSShDvWS628y8uWP7CLBTSemKSf4u4rzZ2316Ly",
  "key45": "5BVqo16zczoqPxGEh8ExiM5bhpUbN1fVkRNe3vwkPmFAFmtAxNFn9d2Skm8JJ6b33ydfkPFZiS2zNEhc4pXMwsMK",
  "key46": "4DKpr8ucbvGSwaDoZzTCXMd1BjiwauYE2uBesxTz1eEGD1UVuw7WAYSQcJUkzng7NV5QiFf9T8ZzbRFJHbQJ5QBw",
  "key47": "jTj8hpKJSHpbqX4by1Guae3FgTkuaYPAaybrsG7GtRdAsmsEjP89Jqwoj8v8QuHoh7fW6dUzE2A6N6uv2Jcb4F4"
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
