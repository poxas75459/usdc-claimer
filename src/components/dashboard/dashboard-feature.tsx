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
    "qVTF2LTChaA8GHyx3Mhtdn9LBQL69gMQpoSG2TNXbNtBFJGUWtMSzLYA6NrdStwJiij77fGuAfpLojDv6njqXkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAdVGu5a3yAsSgxmURij1cCaX4Xo3NCjjFNfqpnzs4v4xWv1s8A64fN2fYMgMx9bGzm6M7v2HSMAoZfJvghqVKR",
  "key1": "2SwPwXQzkhFqEV2xqdvTr9zK1nFG5K5W2zWCZxUGdy7uW3vVEMw4GWma4Hsvcbysk2zU5fi9pKEfs4K24XfNfcEQ",
  "key2": "3eEVD1xqhjMWFU8SNVr9x7RqVn2jSkKJLFYdu9oUXhgcH6CnAL95JL321D5JVt7eYGwC1VsE9da2rhD2Wuj5b9Hw",
  "key3": "5HqoNdisKtYbNad1jFjyeCBJ7gVDWoieJTFSxPs5Un42TDWQeboUVBGExc5HWGpWZFahUGSaH4y6aYDCzeXdZYQs",
  "key4": "4KFLTgvZBAbcErdAQnKFrF9wNTGBb6GQVKMQbpni3qHt9FoRWS6MFDFsM5m5JNriUFTTW3EQJN1MvmS113k7Vnwp",
  "key5": "3SRV2RLvNTLSrnWEgaQ7cSdSYReCmtEsCSHXoNWKLQmmcdAHcqYWnvEdMAADq59cKQqqHRyyN95ARrbbZA7MHUX6",
  "key6": "3d1pRiTS5veJZHBa2k1Ukf8ikMgi4Gd7ayDJ3dj9S3fvtoJz4hdSwkiQ2Aq6dRFfkBSLs5nnzbAc9FbERkCZDtnU",
  "key7": "3Q9BrG9bmKPVG7e2ypoysAueEQS9c5WWTaPaEssMrtydPwTkN7ARWPp7xDz4qBe3Kwrg6Fh5ciwCFwwEJuDo34Uu",
  "key8": "5MSsLGJEzZXZKKic6991mTUg3bn9hRUWQLQTQzquKeTbtswfeWRfDrMuRYBzqMDmXpai5eA77xHPoTAMD2oKTeVt",
  "key9": "5o1Dw9o8PzMzDid8U8f7tw4ToLBDyvrh3iD2fy9XcGgow6GjgKSJK5qmYmqhrpsS8YHp1JRrvNjHJ3gaaTHx4ybY",
  "key10": "4xjVVpsGs41i9SYRKN8V5ZSPuewuafFhLs6t2Tb5DSq14qWaoYG7wFN7oTrV253JGH6STSYke6hn9YMFrnwbxP6a",
  "key11": "5HsDVzNMWo3oyG8t65vG8nvqgqAQ3ghyAjy5UbJUtyHxpKkAAf8zcXMQsXyHWkhzhqdjqBw74TLswtCK8Py6oQTX",
  "key12": "38uuwTnUPG1GhM8j5genfMGWQG4FHKD2G8UEkv8eWdXw39cf8iQGw1tAxUq4hWP6Hk92WTMEp4oY7ViqSwq42MkT",
  "key13": "skyGqHfJWch4p1AVFVNYRhDwkN6q4yEGCrhZLPw36aiUvZLjcr37vKqRzmJScqzqjzANokgBQ4LQ8PUKJgq2VJG",
  "key14": "ABkNRSAbwtTuQmqr8Q21tnWw6XVUprwCEBNtULWsdtwm8fW5KZaqi4tXaT4Vr3RNQTShovNfqYNh6RxGWJhxJTs",
  "key15": "65vuqr3u44agXtTQH21Newf5rYNMoFKsFygWrCxeGn4zC7mMw8w4EsNWprjuGPer3J2NBkVzCKZG8bnqPRXJuSd5",
  "key16": "5SrcNwyxA61RDH2QFpxoDrpZdVf7b5x5CoRzEP6HXjwbrrb8tJGyxLwVJ8bmzgSZ91jNogUGyxKpsRh7EP7Yvd34",
  "key17": "5BDyA1oDPn9zv8e11CujGUEecGK5MRmWoqpcSRqvQAwyPW8RrJhkohUP4MxMuojKM6N7NEkMArF3gN2ARCHqfArV",
  "key18": "4Q32GJU5iKwkGNVfZZ3VW3eXQaNWN9DYMQDh4oXCcA1kzN3E9XcmpLRPrjykBgjtTqgSYqBEzRjghb1ySRn2S2EN",
  "key19": "5RQvMote7BJNFdxgBi9JtWxwWSTKFH1m4z4WQNrcx3yjguTYbfj9CnNKkYoRaMuyieJeTXdU3y7PmWXy5D7BozY9",
  "key20": "23VqAYyvcDHqe6dV1tre3aAUMLBKRpBocNDMyKUyRoRQuxJgHiZa62e7qKsk3FTsLwPNc6YiE4Yov1vto2WrpdVD",
  "key21": "2jf3t9nkUTvSUofNUumH9JHduYjfGGyAe6GZmf2XodyQtCtYzaoTuU4tnxkn7dCYGCR917pbaVf5RhnK2hmvNbrL",
  "key22": "91cHgCa4cGGWU3zyrf3yfJn69Jqq4qkbe6QzTsLmmkfXGcqwdMoaj7qKxHFs6wW4F5NoJKJ64mdaDTs6s4nfLgD",
  "key23": "3AWgxEaguEF9NqWzeAnpy7eGTB5EV448pWCnb4izuGbQhz7qxSPMssy3DcMMmGReUqu2ZVHVVTXr7nu45cZ2Rrbw",
  "key24": "4dNYHwcWULfykzdcetoTK3bYbhySKuQkBZRW56kNspnS177TAxUyMDbzwXwMFwXj7cAyUx1ohT8wCcAnNGb7ra48",
  "key25": "3ca7yuqrUwFFDg6JDyQwwetHSxEDfSiGrLWPiZaVG5TM4yQAhAd9J87pr5bqc2ZBeeR642CkZCxRnwDAyPQVBKRA",
  "key26": "29dszJa6uV2q6F9K23k7bzCTRufNrtZVbbDAiHLoQXmwibxSC3PSgJSQ5Ak2c6PqjQCi1iEMy6ptKCiLwh44qFmQ",
  "key27": "2Udz7PheV6zKKRSXni8wKK6ZKMmKU64pGhcFBx9e9HYoxX7aAV1ydzVknrTp5dwFXYSKKNTBiogAB3L2JuKCxUQX",
  "key28": "5igxKQn5KdDaJPdhWbqsxxmtsTxsqwustJXv2yBWn797DD1r9zPUBajdLg4fzGQ73yTeKycMw2sXHnYjsTom3jnT",
  "key29": "5Yz4mu38xGf8A17tcdRcM6dNUBXvjfQNPFBnWTnW76JTw1fqiPx6ihi3Y63CJKdX1VpUdfaHmZv5BM8NXXZ1ws9S",
  "key30": "tcQBJgDLAZKmouUhQwoc6YoJ7mPDTGoGi4nEQZksxr2Y3QEETNW9iqko9Vt2c9psn3P3qDJkiKNVDjW8bW3Tpu9",
  "key31": "4sUCdkv33YAfciEBs4oRsoGrqsxaj2EUWA6gsERcystr2MXhxUr3oRrdpw6s3WnwuwxP1McSa1GgkRpj5FQjLqxW",
  "key32": "34vvG4ARgcXzZS7fQdd2YDSUZT96YZBkqdF9Y8tJSyr31aAKKDFEC9Sw3cpbhgi2gGVV6qqt3FySD9WPLJBxWDci",
  "key33": "4vKkqoYoULLiDtULW4aDLoc9jHSVH7enHS1eyJVsHVTw1qC1j2gvoUyLQkX5fhgMMH3c6Z8qMVFD5rMVtVJCEdAp",
  "key34": "67rHJo1Y7vuwDNZN2zF6TwJ3zvWz7dFyoJLpeYi2gMQkgE1vZLY71zMBZRzB9xuPwX8utkaDJRzDCqnSvxQx3F16",
  "key35": "4TexPng2oX3oZssh9sNN8W9MKSeopbQxGHWuAYjPX2WB3Yvc7ENs66HGJ2dhspP1FscDpbgpX5nAJ7z7pSPrdLxs",
  "key36": "2So9cwpABLe4oy48t4EhMt9WJJRhsX5dwx5dZ3BttaWFGvtK4RNqK37yG9Vuvs28Qp7Psq4nKRRFi5xGdggoF81V",
  "key37": "57Fj12vZM3BftwapRfDSRGQ8hQzEWWV18mwz4g2cqyHUcvTG1HsrW486sc4xC17GyRiBJ1KwHKKVbMztrsdUd3Me",
  "key38": "2qbVhiB1VQXXMu8Tyn4mPkvcxYZhsnS9QwLBgBr5VpsGhLAkYJjq47bJQwKB28hKb7ZAzj81QkxzX91kTPRtyFm3",
  "key39": "529CHQHiSrSP8138wntyVdTwRM55MJCibCR4HYqABbwcdjJPSHiEK3gN1dx6d247eJmFv4Ct7FYASWDxz8srdxzU",
  "key40": "xph9qwjnqRmfkbhCgkCf8kNqLMVKv6k8e6fPciuAmFMg5GPHcvLhMC2arbMuSxkb56RyCYsgpTBiP2ecgqepcCv",
  "key41": "4wzGbAAqWDWvReAyLM64qmBU7zypgrgcTMvo9fhtbJsoMthBzZM6fmQsRi8DBZ1u9D4fgGy6snqxJA16N7t1m4P",
  "key42": "2iPRcKtcBJfgsiPKxFbCjdbES9s211JMqtNRQHLT7KCAmTf8cczpV8WA5EAVCmXTcrPYQmX4L5QHiR7QYrEgXR5a",
  "key43": "q8JdyrksWM47AA12rWEbmgMbzAWkaQibC2UN8bnMsMroq74FrKDcuUynhw2MBuUEER6bbJkunjTV5Mn5mXhZH2z",
  "key44": "5m6oBj8Pa7gSqw8e6qP28SK1AjeiQETTi4gPEXSFjS9dLyEMCyhEmPbc2sXn83KSUe2uPpePacxPFiCpraiGbtY7",
  "key45": "iYur87gJTbFGCVA81ypFQaiipESJVY7imFJ14D3WJt7FEfB8UtuKfBijdSzytEsyD33XDJdctmmPSpnVd6qMraV",
  "key46": "33xuVdBEocfeoi46LcemGrbiW4cKHyHea3Roz96FD8CPFzyWN4WeUAFgYzxSD1dgw1z7hxyKe2QhxduHqEb8eGuD",
  "key47": "2YmvFNcYBLgYFoQpXKv7x2tJSZKuDxDezdMm2phTBPK5w5Vas73EXRWtXJ3Wt8wJacqfUEoQ7dwybhkxvqFmULKY"
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
