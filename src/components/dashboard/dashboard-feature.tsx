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
    "4VXTqtQSJNuTvWPBCnxJt2niN9ae37vJYw6uRFxGdFh896VbejqvK2gkFkrseSfBZhawBP2fJN2M7nfHvZ5enHs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNChZieQEeJa5ggUPHDqqEf61WPjoLRmj6FX44uTpyaGgPHzaBsrdQUXmVKDYDX9BwnEf5JhMgzUosoemCxnNbx",
  "key1": "2eXBttidk3MfQm1imPWpsLDx5R1r1TRhYN2R9iXeMw4janKT1iBA4e3niSKY4pKEiwvW96A5Z8D3L4GrMbJboqQG",
  "key2": "4wMacJoJPysMvYrNgey2tzF3Sj8zow6hu7bKTAaLR5VsyTxDPxZoxisJMtdog3jkuxPx3m3NnksiyY48RFvgJJ3v",
  "key3": "3ZhuT49skWwaZxCb8VY1BQaBmrX5jy78Do61T9VzbVQJxSWsBG6UX1J1rhTqqqkptvTX4SLVbkvQ8LTenTTdPUhh",
  "key4": "5rWtm7XHZrU4zYQoa2ycrBDvrYrJaZSq7GcUqa5JR6caSzD7j5Fs8EF5HN1bt6jhu1MmQ248RGhEQgJ69zABJVoQ",
  "key5": "25eu934esvQAvu213vwZy9J9WC1ADt3kHPaCnVwAi8nviP9z43G6hXSAJjkEqi1QauSLcnyxpFcgRjariDyEDmc3",
  "key6": "2zzP1egLX47pfKZPy1L8Zmjm3bWc1w6DqKeV92b953X28sMEWp16eeMG583Mct8C1H68JpVUYgStiVqvJ9BJ2dky",
  "key7": "zi2RLZ2hBMioFMKkPZQx3J4M9Fxb9BBoxtyNitXVTdQYccGSUoEGK4ttiLu61KPc17cAvG9A7AC14DCayeP1dfx",
  "key8": "2JqwmUgaVaTK2vLSqVjNtbJHcCMnoch1LEEdubLLacxs3FtUjMm7ksFem6rimY4fRvav6mFB733WhoTmPouAMNQL",
  "key9": "4pMTapyRkdKJrvYumGwbNaULybE6nEv3Kow3y9RkWMiAu7TMbetw7pHgGscFsw8nxa6rANn5aJX47ZfvThxpGvSM",
  "key10": "4gZ9UkUmhxsGQbS3SfycVy9kXKnHiRaEnw49wN44zQ8V64ZErZZeFUT8HXRYKf5ejbST7jL22fJgeJgqpqYk18Jp",
  "key11": "3NJTRyiAVvTd1MMqqMFzpA5zV1tvaShjJTHd9zBNntsjt7aknZCsppjHKBh2jqyRypCjsfjtaNEZMJxLuqVqhX5p",
  "key12": "4E7NgLWrFiccFn6wuNZ45RiQnwc2P1T4FmkQvNB9kBt6PaPKsHeLBxdNwE7iWQWdFU8rYqwnCLFEZPVqa4uMqgJD",
  "key13": "4WHVFZGhbSJJca7aF29rHqygfYwSiiyGw7kY46FNadLQKiyiZUmAKeyCbqoBeN9We1hWw2XugtijRiTY6n29LV5e",
  "key14": "5ZBV8mecFyGFCCRF38JgBF2PD5zbQ1CHvaw13AqFapTf6GsYij19Sp8gi54sWM8U9vBhoGCZ2SAozSCYz5Br7BgU",
  "key15": "34LKzBjGG9MqZWGUC7LFLsNkccMekKztkPimpySBsN2P5FihQs91kbebZ8zKquLzz9oERMPLUk8sRvKpsotZDWTg",
  "key16": "36avtkaWoAXEg7rCwtqeQ16jP63osffXTVUCUzdDocgbsJ6SakNSRv6ijrqv78JjfvAGZ2wq1N39UhANFvDeHTCr",
  "key17": "QXLez4drEa68x2jsYzjTDwtyeeQ1cQ3zgBdPPC5kevMazZL9wcbVxdnQRULYid1qouHAdei9J9LE5nJVQqKspcL",
  "key18": "5A5gpDdsVqs2wcRatjcU3pCL8UCmFXz7ocqF2tT6iai51RWFpp1cNe28cDzDYsTqQVqe3qNj83EaQe9FFFmQydDj",
  "key19": "3ordySveW5nprMDn8vfU4E9afebwD45Q7K5UQQg5P7csM2HDXeMq1fXLZqZNdLRUvsNhkDsMV9hmbF6VGWmuEjVa",
  "key20": "wWqTy315fZ3x896wgk57j3UupT5mmur6rzP6CJHJjqManste4XZzKXH9vZ7XyW5565r1oHT2B7TzAmdkZXXnWxy",
  "key21": "uhVj8PNY8aNwmpzh5ke5VUXpygxy8x4WaDiiwK1BW1H7Xx6F3Mea7KdQXxSh11ZxhxjTYiyvqhsqFGJGCsSaPgW",
  "key22": "36ceoEjtctqF5maU4CTg1LrQoFFWkZV4LoQFHotpR8zNxExqqLPUcCVLo8ieXfr6S7AcZHcM5n5EiCWD8Ph6qQNV",
  "key23": "5SgGeaCvzcTPGngndX7sZV1yEGwZDaKCxJSuoHNUvcAfNxnyEnUywnYBLqSJNZkbzbTyi4uvqYEyNvguHV7iDkYo",
  "key24": "5qsbunkJAktgx95NSCYbyTtQ1qJiM4VvtWzfZ2QeMUWiy2vGusSQ3VvTaLtrsxmVe7W1EYN9KKwCBAyxZThdGuVq",
  "key25": "5VBEKxkPJoW2AATgfECTkhHgYLcNEtCa9RC4Fw6WeLZLkdZ9g3SXS61GtGg6p7yLhST741pnZ5K8a5wfRt6BboUm",
  "key26": "7fwTCb5ucWE4xnXBfwAXvq31fNBfH4ZzCF59sfDY99ucvz4Xhvv7RHgfSSWJuqNoHqhtLWJCzcC19PBdRrwSvxX",
  "key27": "5uArUyzHrQ31m7Z5umFkoHafi1nB2bmFRg9eKvU1FEK5JMzBQRPv29HmHVanNwoCZbHoaXXAbjZfCF73i2kbGkiY",
  "key28": "3eS8ey1zLhipRZsikQyWxfGT7P1k2GVRfrw8Fzozt8VSnFF6hR72cv9soS4nEZ2qxnEjFMsRqhTQgsPWfsvGaUfi",
  "key29": "8K6LsN4B13bCvjssi5GySWVDgEpjw7XMUBrkpcGJtbYVB3qsRKZPgDafE85mWsez4gBjgNvFqiBdZwNNz9Dw5fx",
  "key30": "2ibXQoaRELbD3W3jh4fMzPDWQrq84R7xdaJpY3zkwg7QYNhTnG63koZ7LCEFxTiqS18PttpZSbo263Fehqyjaafd",
  "key31": "2ZnFDskxrhmQ3PQpKcYUcBUC2JRNX4HH2GQWeteRfVFytHytdLKp4d2a2P9Sb1vpAmqxGpgG429P4fzVYK34sCQa",
  "key32": "2eesYFL68HdSsQHYLpEnhGrohKjQR6BuHbTRRuJMWbcZSYQLLPc19aC3nGbFzAPx5mXjRasD552GEyukqmxLur6w",
  "key33": "494xEkt24PP79AzZh46CJdnz4QMiuuNCSfKbcf37tMw64yAVTdF56Q6YKF3L6hMoJkuWocGK16DCXuTquG5FLRLT",
  "key34": "5fB5LZeSDVv88oVXQjzuYoaXjaKNprgBskwKzavv4Bs1bDyfTrf5WyHPBi2b6SoeN7K6j8t9pNj3tLWwaoPKgmJM",
  "key35": "ANtKbditRS7Cc1yTSCpAnjjbKeMgKA41xfCBMvnTEHJXQzkzSPDyHec9QSANbtXCb2C66C3nHXiVLexjqbDX8BS",
  "key36": "PHwiLgk2tJs32sjUVfH7PH4GZLJv9nRSEoypXiuH8whawd5J4yteUVYpbBLB36Gecr9hmoixBQk9epLmNKmzaaK",
  "key37": "22ur1C4o3ZvKoz45m3LbSGygmytBMTd5wYfBz6iVFNJ3ZqM9Fy5sJqtZQPxiZqASUduixgPLbXUZMEY1bHegg5sD",
  "key38": "4bEDtSCiVpsCJeC7FJDqPfWSpM8J2oNpbuHr5mA2q9cSfypfUnRueXWMD52TgHdYvRZnphX1DwPd59dQzhb92XVJ",
  "key39": "2wCViEbJhL7GGubJw2MQuwYcMc1Kr69A2Dm3ARfknMpouv4BJkdM6YRspTF9KTJXZviovoXsqW7T83siUoofK1QS",
  "key40": "37Fo6tSttjEbKqRF9453PsWxDLJjykgNCCzmE9ks9UZcmqnVLzWEXHA5biW46JL3nJZyi5JdueQyLmFQS5dUKnS6",
  "key41": "TFfncfYtxvXgn2T6wVhZBXFakJnxAc1ykECKbgU5E6YaBJRQ3v4aWVuK79tucuN5ok6y69vWGEVvFmP2JBTxpZb",
  "key42": "3JndTy4cKLgkGxHcisFWX3oSAVmnqF7Gq3gpDBDGtvYvsYqLaVEe7bimgpDkjijxXCAh6JQL5ixPi99TbFvda59w",
  "key43": "393yQmatDxrK9WidrUZ8w2Ds35fny8EKt51nBbpzp6ioxxWknyKo9JfhrZU6nSyJJRstzxfxyBx19E3BD3qwyohW",
  "key44": "2UaNpiSbfFBmg31axgDPPt8eE2Mw9BYCeUFxhSZGk9Rcu6bSKjVmyphKbPKv7taRFjo5xS3coteYcxBWRVGrSSnb",
  "key45": "5ctwUgB92rb2jV3SeZLJdmhk71B3conNMn2YK3TxZ1GWP1r8M8E4vV9X1C6MAffk9C6FiXgDn4KdzAmH5RWEfgXS",
  "key46": "23VAakjLwRnD1qLL2y8r43kR2gfDP8wsRHBUtiHZTocZ4LfHdpdAv1aZasoKTFnXYkzdDe9pY8vHMJgUnpKY1YEs",
  "key47": "4x1JwovUeWkFyShRvtELqb53hTdCrtFWVNQgqpjLBgoNk9j7bVmg7M8UmNZypRofKTWmdoCEhV93NU787gCJgiGM",
  "key48": "21BFVjz3Bxk2LhWtGk1pQfyxMt3tRZSLmmAyeJTN6XqX5NGd6JseU34svnQmo1YBbTZHwq6jfnejcrpnTtgaYQpq"
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
