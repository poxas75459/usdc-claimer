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
    "MDsnyfPy4FW2yaTz4wSoWL9hoBaixjRpcypVJcyRK48oMFSpfTXJKcbgpofDAu6S3pPnKgJ5ZG4HEsR35Zyzpob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YVYfYbD8iK1w58mm6rZDqnybBgBWpz7LkNQCJcr9TMv1ASht4YH4vixecXCWe5zC1JjRL2Az36KQfE6sGUoEhUL",
  "key1": "2F4fZ4V1rk4xGMYXnviMhHoAUgKwVGy5EJhUeYHbR9E9BANbeCwuZihY1KBBi5D1xFDGXCZmtLAY9QHWUr8bxmam",
  "key2": "5gxo8CWkZgXCiHv23bc46DdMY5ZMzCTZ4jxjJa59qVP86PFV1FFJ6xVnqikuiZ1gF7926iwQ7uvRwoMKLwcV7zVd",
  "key3": "3KiV1kcTEukmyDWs4FK9YDCBjPknVhZdpMgoYXFnUFiKhR159QNjbSuFZKxCFmG3P4EwnUsW4yfVboYB716cqiZ1",
  "key4": "2FrBkQ4kvLHJffa6Mc97xKjVNMoXswFKg7hiGNwbpUr9YRyueniXpA1kFxYuQ1QpEeByMy6ChWuYhkrJ9GxG3nbQ",
  "key5": "5u9zzStHWqThUmsf5Gs5CW8Dt96nwcEj2ZBWGXm7h5e9xb9X43Hmris47Uu5BbQHuMmXuNcb3AgVkAp5bXee7kHr",
  "key6": "3q5T8ts3zqGk4JyhJaJ2E9rVBTrUt4nvsKpaLrBJ3WZNYaHqUZvHR6VX5AtFqjTNkG9ueA3aoUGZaBsHm7xB4q9Z",
  "key7": "2VNQMzHhMWshQRihsbmNESeAKk5cu8Y3DG5V2C1RMCsDPrwwd8ZhmAGr1KRjsYMHrNsE6DWHBHZUWq1fdPXci9Rw",
  "key8": "4fenPtgrWsCqZBkTDdqA1w5Ft78W8YkLUS19VEsX5nsBb25XULHK4gLPLUSap6Q4Y69pbRJyYMmcFswQfRz4r3hs",
  "key9": "UcNVNtoUF6KWcAjjjsPsz4P17fpGP9sp96qJVJ8NJHqkVzYUCdSoVE9cj8Z9MpJNrjH9RytRYtV5v9V2y8qJZyg",
  "key10": "S1eY2PpEmREvxWb7UBbSLVqrxq1xpV3AvkKFPZ7j2n4WdkarmmwGYmzPmgBD2AV8vnR9UegMH1jxxbrgh77vd5s",
  "key11": "4UHiRmmKEoiEZfMbgHJnSbozuzayEnZUPtvMJrK4wfuK4bHbddDMMi31yKxg66ckHENJkcFmYjBptPioUfk2XfLE",
  "key12": "4DNKPAuyMVCn3p1her7QqKTKHGs3XK8QwDGoXGhzyqykMDKJ7BTap9s9nFwu7Cy6r9QkUb5wzG6E4SqWzV4hfdvf",
  "key13": "3zfpZbti8LSsr2D4Q7WibFMgd5htyomi8pZ4Jta7afn7BHLJ19F3sppK68gkr8f74N1htKAmUkSKCimTiq2AndJ3",
  "key14": "3mfKZdyLEc9h3jqZzsh4PVohqTBjrUqSePK9gMwf5WWCGrdws2yGjvd1ZTjD6AEM12SHw6vBDHG5ozYf39NhJERC",
  "key15": "2YagtsmdRu1aedP3CS8rTAm6PbVCMX2XGbKQvn1uiDXhUdjzsE2yToCGnysCvcbpqxWd2ExZzwN6QgktPGVFkbmc",
  "key16": "28F6H2K8Nxbhw8RbdFK3vDt5zaQAPXKHmoHHkabMbLBtnBmAhxqWYRKe2rC52QsyQ4dEg8TxYwzH6WQ7rspdGUGT",
  "key17": "4zbNaiktL4fCYziHbC9bPkJqXFzjSz6fhD5BFWVqtu3Bvftao8TTPBQDP1PVQ2CbRcPSa4P9qH4gUwJcRJbPjaQF",
  "key18": "2G3FR1WNt14pWUZ6xAhKhtDZvGvn2fJW68VRKSJRvCSkm6URFE67huQPJ8bRWz5vEimSGb7K5Jm4tvG9v1FxuDmu",
  "key19": "4qCSxWicrWpsTCbCF82Gev9PHnhBiBZ22dksdAymHyfAL3jkwrNxjJBQNasT5Va4sG21Yy4wpW5oRwxov8DTc9tS",
  "key20": "2zqiSpSPNbrK7eFuM9ecFHaeATecViVnoHMg3SPf3brT293VS7uhAnBytEbgCeBbYcgT6yvXskmmjihh9hd4T3cB",
  "key21": "4fA2YvqkJX77xjbGxWd64HqwbBsCa8erajBApm6hdANfJ99xBBFWhsXYRgUyY2dwtGvvtjRTNEkcJvNtK8DNiYAj",
  "key22": "66hx9NEEYwA3W6P5412WHknya6cEjSwfNFXyqCyG26YQcnWJ7LeFbk1pRRPpbj2h4fTiJawcGLBbMAsLQ7JwNadc",
  "key23": "2SXDtQMhSX8WVPz8YpdoinhdgtBNDH9UEj3w7VizW9gipdknVqvyZtDb1UmVH83Z5BFfjwTAaH79q95cB93mikKN",
  "key24": "4o2WWoijdS2JsesS9TrWFnoymjpv4NSDgvq4FcVMaGPzfuaw3H75siSdUZi8qpXh9vgzphy882L71H7YzD9RzufJ",
  "key25": "4XagXoon7jEe1dGhXxQ4iuaZEnLV1T7QgsxpE4tbkWDobe4jvFJFvSD44ZWr2FaZR45djep9eaz4AYttMRTPQ2Xr",
  "key26": "2UBh8p5fW56v8tbvhD2e9miRjwbwuFz7kvCdyhqAAYu88Yrqj5Hw6xNFp7SAhDTQBwKd8TzLVu4xqyXCbKXop33v",
  "key27": "5q1H1gYFEBYNQswXT4cdDRcboduCPUD7hcPvbUYAM8mAuWRSBLgnMEMgaBCt9WMNhecQTc3e1DdQ5u1pAoBYFiUN"
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
