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
    "3KgvP1vmoaU9ZPPYh7QwLEetRrXDjwC5UxuQ9RX4F5PJauSH2YSBSymCGGNZkvy7eggFBDTiJxaHXpzoB7DsDvD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWJoLyJHyYRgYQim52A8t1fQn3vCnxXDhmgMjNi7EQwpWFP58CcafHpz2z7cZBUFpsJRFvFDVzgd1zAWSJcG5xq",
  "key1": "9BXbQcftmXuBpTaxnrH2HMs81f4NbTEYeUTXVPNJ2JxH3LYvGYgSdhzHV9YSdh6aGcsp9bsBQge1ZssNGqpfRDN",
  "key2": "5guH8GL5moctS8dN2rTUtsyJgJAboL67Yj8af2uuqtrdc84PowZ4p28a27dzqRFkpjFbQsw1a6y8wXC9XrGyE2Ki",
  "key3": "4o354SewymH1XHWCkUWgbUvYEgDdB5AWNP5si1TznM9tzPZwgTVEvvqGsC1HnFgwQJq27EQHUv5Q8JjSuoAnrXcW",
  "key4": "4jT4JDWoKnfqCrLorzVkntrR1AvNqamVJPdmPprLjrw6WDTcsxvFoU2oAn9xvWiYhuphKVFh1MvPmVffX8AjgC8A",
  "key5": "3HRZmdCkWzjhNUtNzaKnJCh9fsxwvMQsW5WoTKiNty3qj4rAHBRZXW7sCU5dZJTfTeoxbRhz11mfEZoRDaeckoEE",
  "key6": "3zeLqE8C5ApDkebA3jVsT1SyKWbboUCAnBueikA9bT8Vvc7bFk6TFEwttusqHp1ZTwEZjTrcxnLcYA1Cv79JLErs",
  "key7": "4s7PU4ERbgSYYX61ACap26bPsgFCQ5gooNFoY5EUKvVVvnotbTZjc51Ctw4y6pRvudu8XKuGCgRmkFdezBgRpNbA",
  "key8": "ShBF2PdVAmunN6s4M1xRTYFpCXAhzpyhuAARHQpe3Q7B2CZLV2aTW7Ci8mheKEZrEZmWrAG7RcAfhyUaYmDaFmP",
  "key9": "iPGfWWmEvwFij36wZUhzy9tBvJhYJbvGAMztxnDF9cmhDDvws4SgHfEeAkicSrY8ZKJ5Xz4GQxT37E6XHy9DbNN",
  "key10": "WgVR3LRsfyLPHbFbERc9mwYyqGzAMesnotgYfMdAB6awQtBHABqLAtdgZkUVXLCN4eHKARdf1cwx5s9fWNJJFye",
  "key11": "3eXxMTQHXYiY9vRHdyy6CbxtAiJk9Jo8Cqd7C18ASw9Subix6EbFQvY8rPbxmboTN9pNSP1SsKpyeDzmqZQ9cB2G",
  "key12": "gWaAqfBmEdhqnFbtYt7WjjHLNUqXWF8hM11rqhdECcb4tepuFJj4KHo8vXTtK3w9sH9YmnKcf1XFMdV1CpNzDfr",
  "key13": "4nzSBEJWgGUQUwzKXZDNbiYDVCNiWnzGAUqKvZqtmWdzuUnmdgYeWa1ZjyCZibSrQpzYy7rdatd44moKfhUBTqM1",
  "key14": "9htkgwQ6wa7diadQ7GAXEEo4QhKCDj5wtk1HnSTywfSV1CWwuuLmU1XuPLkfFyvYymeiNf4GAJXZY2DaytrXSeH",
  "key15": "3ZKnw35hdYjiDDPPQx1PvnS1SFvyr3cx1KcdD931ZrtJN6ebHJYud6WRDStGBgP7xp59LiaVRxcRD7twZooVzpLg",
  "key16": "5UrBg58Hx4YD1crDFKwW17gcKib2ZoX42mV1gL3g8oW7TAUKcS92DtWYsQqxzLtNBfUkHffqwinFiudRdKCFoiA3",
  "key17": "4bwGPWuoJvW64FnNrbzoptQ7TfUgfB6nztVKJXGXyDWVrrtKgDXXRUj1ApkbuHgqncDEr9zTsEC3Fo7LncDSM1i2",
  "key18": "5sKTPYcQZHMZLfuMKQkmgFmnZmHYm3Uki9R7BxvjMqCUCMx9D6AN518EpTUWjEqjjpoZr3jT9KjDm1XJp8stQxEH",
  "key19": "SM2jbFQbgqTqBkhSzGJKGsg5D64yegF8fsY4ZsZaTGTYhutdxWUYveozvGiYiNC2je6FLSBv8NWiTJwfBtw4ET9",
  "key20": "45Dpgo7zcuajAztTwRsVjYE9hbM6AxiQpZuCjEpBTh5xHxWiewh9ERowDNaLuFDDq2xVCG3cJRu6N4tbTx8sTbH3",
  "key21": "F5jbS4KqgBSngmTL8n5iF1q7KvZpVk33sMYb3EBKRszqWb4K7DX1MRYGmy5kvsMTzLyJjRoeAWYHkczb7ohu9tP",
  "key22": "5PSq7DdrgMWipDYSVL6GgpZuzJYgqUipRDct1QMt9t8WgFdqdZmQMdNA1a26AB882MKBi2uWNHAUkfZZ6Acx89XS",
  "key23": "65aGSwmX8PX3ZTQXC2aKnuzZCx1ixN914EPYBJ94hrhSn9p5JkEfkNYxYnqZNRcyFe4JjzUiZxCie4hA27wNLERy",
  "key24": "Wdp7Dfqz2qGUFFCpYTofogfE4nFgemFcH5VTTzptKXvFJ1NUdE5Fp9N34ynkS9peg1j19p5ih1rS52qZyLX59po",
  "key25": "wfworaXNVYPjFaeKPzTMLNuL9WgmGzqaVrqVkzqGSeJtLhfibC7BXsQrfm3SAkDbjXMbnQ7QNrR8LcMfUV9JTsc",
  "key26": "5qtE8hnzmi64TbCH4EfdwoQVu8XqdjXWXhDwVxATKp2JEvhhwgtrDCkFGjZr3QTB2LmkTGCxTHG2EkNpoSkjN2zJ",
  "key27": "3Grj1qLmJhuzwPU4t74ETvZ8p9yhBjWCduv1Hf7etvdXHedkBqarnuzYN4KqJ5eETCsmpBYg3ayfwbi72qksWSNr",
  "key28": "4Ffi6pTmGpGrUMjq15gHA72JA3Q9LNUiMzZkkEkaWdzQs2PPRK86TVncsfEfSbqxSmPZpeFnQa6r3BejRyu3XA2u",
  "key29": "4tRiY24TA9dEuBD9QxWibMLVm6XBWgpdrRjMGhYG5F2gaZUnNSPihxL99nKz4JnuXWEPPkZZyTyDdAJsKE6E7RDy",
  "key30": "XMQx61SUmZCTEwNUsUFfvDARWa7pqizC9xHpXhsNRbuP8LXwcSgXDJfh5nUjBEiKtg55MP6YfsJMRECJwuUu3Ex",
  "key31": "2r9C13QimkrcogSZKi3XwxsfWvs8YL3mc5pTihT2kF9bTjM9ungpZisCG9n8o6CHQGE2vx7YyXapVus4ors2HHom",
  "key32": "5AgBD2Nyp46nJTf8nM1QYB8Noe3PFqgZoEtyT7ms8G4t3KQWJQLRLb9NuZ6zyK9GibitNmPW18LZRwPpoZoi5Ey6",
  "key33": "nDGxp8ZKkCAYUaUnfZut17mh31eGVfHMSnaKBkbWzhKsSiWosjwTKzuy9x9ndGyRvYbG44xsgHb9DWfVQDRyuSq",
  "key34": "4JTtJ9yQWjmrGnCnfJwPRXN1ST111PaoaNeDmLPXQQjC9STVoYjyb9d4arHaRKFamAPhabn6frHJs7rTcP8JnQUS",
  "key35": "3RP4fgXkpEBBizcn83tag516PR7TeDf5GtU6CjHRjktam9eAq1Mzh6r6SvKzML49yipBNnjgz7ckPqsnUe8tBgSB",
  "key36": "2F51BEpSF3NXyyYma5fFpRb1mvV5xufqkhs2njBtqGNNDxFqcHPEEH2A6hbbhsk1awWLcUe7z3Nnj7dkqWkuqTdm",
  "key37": "5fN2WBZfZ7fsMgZWidcaCQtvRc2mUVstBBXw6rzZgUBpHsrw1pXw1y762cPgE5sdygxu4Ky3kWxEwmJix7hnqYtc",
  "key38": "52JHqg3mGLYAiTQREVBUxLmkmVo24Vb15HqbNU7Q5Hj4EY96kDhxBZ6tUaVECHdMeEgWXqG3qiuhHr2n1d61C64D",
  "key39": "aXbLi1cm7VqVr4oadnAKJ7cDCzJEQteBkM62GnSwm3tieYnXJUtnp97dKA9YSpY5yRKRjd1fMrbxaNA4eDtnNGb",
  "key40": "3DwsKHWTSEm8VZKTT3MyRmq6e9ybhrAhRb91bUw3LevoUeG1YQ22ejAcF2PXVsP7dTSTKBj37fCUVSo8B8pmsVwe",
  "key41": "4sZPRxgjHZypYeXigr7g7RmvZY53Wi9pJnVgFXhPuKaiRTtSuZoaNoV8JoYgsBWGNv1NS44oXfCw2SrAsJvLKQtW",
  "key42": "5U2E3w2kEnaRXQURYG8HbHciQWT6DUERK5N1DmUKxKUWP48R5xR251TQomPjggjDGrhtT8CN9Xd4edTKahbHagsv",
  "key43": "2DgcgFchMPwMKWe45BpAMrtTdmBVxRokLPH2dVvbHNHeUAS9TbVjP5bb1B71pe32rqzEnCKKbLzVc7osQWmK3Awa",
  "key44": "2AKxqsKPaYzgyjGX1j2CC5jTHQBAifo3LkootBszvBDisywdEB9JSUb8Vw1QyfpDDMTCHPf93RRQCWqfVm3nVUBU",
  "key45": "473butv7vjRq2AmXMpC3RdUeTV5wcxohfFJQ57KixaXAfbPCVh64HtKFbJFsnLPYUwHXfTshGbkmRCJM88H3dLJV",
  "key46": "3PtfeQQj3SkeH28LtncJWNLjybJ2Cd1KpCNuGLbjJaYkzi38ci81DK91gpMvCgyBPvUQWdh7fTGYHDs1WHeG8nQp",
  "key47": "eD6wsYUwLEvfqENJLo9rrVw4paytY4Vt8knmWNzSNrK1hry3t2jzSxJhJA51QdaNn62WFiVvVdf5RyqoXt5oDEx"
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
