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
    "2PFSFpQXRUwZXGCdT4QkSqdVWbUn13FNEYki6wSoZ8fgUALpCBzqcibwMPCs2ZUDxyLjmaxxDtKWb5FsNAqhWjSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywnjacGZmtz7SL2S227FuxVo2Tqyovfqti6DtA7mHHmexSF4cJpagTDkUUSfugTqEHPanbUEWS9d8vwCcUZqzbx",
  "key1": "58gtGs18pakqEKA2WgcBiEFp3ScvL449PZ9Kq4W2KzzvcRoHy1Dos5PafDoFMZ3z3rUk1trsAT7VfByuvPEJVHy5",
  "key2": "5NbKaaL5wkE9MojCTAWw5DpXJQ5EsXdhCedXDLC7zCUNx9D8RDMEevfTPZs9WQMWCsD947cdQmpXM3iF9bz3Q2sM",
  "key3": "LoSbnE56nxUthhimhV456kHgyBKMfGFDQ15cUB8eEiTofocsPePyCsMiXz1THB4TWpytFced9AyYZmkvrT5C3wr",
  "key4": "EY7R4MhDEUqTkVfWGnb5kDRFs89332GGczJ7zJVGc3ZjdnJcpNSJnzTFALyB9VFj4eaSQGX7xRJRJFMyYoSfi1P",
  "key5": "3ArqZ5qdnVdcEUfMzZS6vQshnz3PS1KCGZ1xgm6crx58cZNJqJT5DQQGTeGGuzbT5DHuLS8WDTWqFW7w4GNuaobo",
  "key6": "QAE8mTJ7c8WuyYGuUGLLyVTFjsYc2EFKPJsuNJeSUcNbT7rSkLLGCPdBMi5wru8cLYWZUiXbLhStLDwUPUPiG5X",
  "key7": "2cBuhGmsjBEgdagwPowpPqTG75p6M5z8Km2JssuqBk1JtP9g6TF9eMXyE8BjioLuLsJWwyndxgWNfSYcp9FqiZJn",
  "key8": "4tdhfAvprLnAn38uiCqQXWZoDVK2VDniTdCBoPSnUjMa5s1LjspBuVsZZgT8QXS1543f7DGFEVAE7r6JYd3PNbZN",
  "key9": "5mmrJeYpmavR29eXEVeP5tMxNxKdvYxXtGK1zz5eZvbYD1RYpwHh9VcNSqdbNR3UEppUSR9S8NyLm587xNkvKVrd",
  "key10": "UZaH6gem5kayUBfZ5ZPeB2T8AjjbXEVLFq9drN7xnhTu1iEXa2HR9PadTngqYBkRjQyLVeAghWZnGijyCoTZLyX",
  "key11": "M6tsoZmQh6P9qoV8fZL4pHveKot6NZMo9SmdBJuTFAwmBzqKnFmaxKQuQQ6G3Wv48RKYMvpyNkRRoBdtijmR4ob",
  "key12": "2kNDnjWK3su6QbB6et3iqT6fC2gLt4jr3erkUVnBVTvV5ZMfApbUYsFzWx68f4pTpGgseBWPnAgYDcscuB5hGcCk",
  "key13": "4qZd9BuhU5uTakEztMYMdxzk4taxKj4xsD9CEvFeM8GvHSu6AEFCTigNEusqEiTJsVNqfWRVNphPaoFMK3sFcT3N",
  "key14": "nwnajVfrtCDB8rAqNAakSKQ8H44tCbmCCKrdhZ9DpNgHbNWmAyV98TbaWmLBTue2WESjDkqnR7RZJY9Zv8YPAHJ",
  "key15": "2Rwmm8VNcGf7RtiqtqRG6hz1cuzhVpAdit4UzguBXPxC8psQsry3PFstqfMDSB8DnEHNdcRqCBTHQuhiyhFvmqxr",
  "key16": "3rSP55yoS9ckgrVDevxF4CKU1Q7WzLHjw8XL766p9HHU8Gfe2QStAZAqusj9Nbk1FCSiUMT2cNy2VJrTVxcRM8DC",
  "key17": "2jY49wqQyisYMuVwAEZNcUJiA1RSEUad1XAKYLspCjshz6xjuu6witQa4YT2GSQT6198mosR7xH5jSKjjEFnjB6Y",
  "key18": "5G6myHqWYAcsW9d3EDcU7beGXnhBbyAHgmkdpwcjisd9yfgoAiivoQqhgYu7wT7pua7Z1EbfxQ3wZERgAnAcTMTw",
  "key19": "4rywB1iPoyLmtsRkvpvgUaWZVVaXSnxo9ZBXQEADWiWjqfM9eviSrZTT8KpMoXjMFXSJNJLZ867fekLBC1xZFoXj",
  "key20": "4VG2ujd7TJCLPMQ6SwBQh3erYeh3UsYx4BpUcJ7JDUjk1RLiVA5sFwjUMLAbxZKahy4nqwYSkRUt1DQiqAsBNQKo",
  "key21": "37dU6VZmfdc5a2zYDvUceBj1VLCDQad5s9gL5njr6CrEFvvKqyCT5ECK9CdUaPLtD6GeHG94BG75gLstVMjB7gLJ",
  "key22": "5qjiCJ56bW8Lk7gNcg8nTyVhHWJ8XuYSY8omiAuVuFGCyU5SDxDf1HUkz7dE7UvDTTcKe8ztnWgNaqX3EAbmGZpf",
  "key23": "Kt37MyhgcyiZNJ2fV4FrFjL7VbPsdEuPbok8QzP9VzCUcPRnb5szUU1QTeDBKcBxmYWHMCTXd2vzduDuY5isUeK",
  "key24": "3bRpykkcrNqyJjhkibfmMrJ1fnuNSwMDbf9HyCairaG8Lz39ezcU8SnGUKs4kNoWUUNUfPRbe5vGTkYFisws5QVu",
  "key25": "2FzaVq3FdTERt1e3vSn8nXaPCfAt7MDWYUPE3deNUkahiEUEZ3Lr2XE1sNMbzHLtBsAUzkajhnifdZwSyqPbqyYx",
  "key26": "3v63t2NjdYonrGoYDqV1ou35v5NtpwUffFsHa3f1iVnBndvmdf4L35K3b4xqJgyf9cWZ9SNQWDAzb81E1Q8hW55c",
  "key27": "3XnFojCJHWPAfojJEGYZRMjEY5nyzayyP5dxVC8mhdbmgswj9gAAFQ7uj7SJbDuYZHqjRoowSbm7JS2buJDVd8gv",
  "key28": "5aL3z37zp9tqw8QniYZF8Wk63TZcWHGXXsR7wPRc78Lw2D1fE5BkDtxdUrWLociugiEC8V8R8x3TiUdtfFbVtkQW",
  "key29": "ewUwNZpcKz2E6JJ8ZXQdDmiCDESeeNfrr67861cKBhpXckvGDZVoVcnJxhST45gNesXXnw5E6wkC3jD7XBkCpu8",
  "key30": "5TU1GrNiv5LFyUjmJ8rPNfvwWkbvZm3siJuA4hmsXKC1r2dZfFM5PwPjYziaiwQaEYvuyRJuhoLz6fjFqCTstuHc",
  "key31": "2fe8PBTc1Wm2M4WkXWMJGuJS1V3CSWHR3yLszVYVsND7zshiFGWaBm2GCiMwTefvQsTs4bCsPwAtEBkiFtV9UwH2",
  "key32": "4A7YRZHtrA2Leize4wiKcLuuBF3uZUsuemLTGWWJx316ppgynMWJVuB1p4sonhzjPFVV65NZGh3JWXcF7JgwKCjo",
  "key33": "22rqxGy9V8NR1L8zvh9Xf8S12WfsXwmcRPJZDtnQzEGuZ7gtQr2dddz9m2YYVxBm5Bwu54RpFQCPi8qnM22Rqkmr",
  "key34": "m9iqMpaF2422BmrA7T8hzPBXWJu6gV9e1ghZx8qrvX26avLa8SmFKHh8w7bUBpHbgHiisYbt9JoT8Ric3A3ZB1H",
  "key35": "5ifzLTHJtZywZXHcVC1KBEJbrBmcxQF5qTYDY1xzZaK43U9z1kCPVUFhHjPMXxi6wW6RYxzukbbQHC6jb9nffLBs",
  "key36": "2Lex3a2whmnibvvUNR136rerSy87BLUfxzT8TSTTm3JiXnk9iCge5Y7qMswgct2yTtFXNCakbXTf4YvXTzCP2LWE",
  "key37": "T8yESQdCSkHsCV9LNKJmZjRkp2kHXP8tBWtyuidduoENZ7ya6QYmwnRnRNSX1hDXifyNnt3yarsSo6n2DdSkFpG",
  "key38": "VkNyq5MPxsnxb2snbGVw1ktzbtoq5SvD8R9v9c3mhokP2RnDfT2XT7FKYQrhzCcugDnwdDFkCpxYABbUjwrfUMt"
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
