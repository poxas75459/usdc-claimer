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
    "3cBTc36GoHyBJtKSdPmMQpuejkiCDKCuqFWuxZp3F6ZjphwXyMbM4F6sRaact2vqoNsHLeZ9mi143TjpSMURvijp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QX8DbwujhT4bzLkRW2hf7og81BQGxQu4wYBmWDh16uhNfoR8yhro9i3PSBGjBt6VrcxN5jNvaYhJJPQWnHiv1ZD",
  "key1": "5BLL4ucLVcDT9LmngWZpi5hYBEe6b9HjKUTyprCfg7fZABMz6PRvr4t73xvSkAgsZsBHztcc6XTYTD1u1jXbwSv8",
  "key2": "5cuQYDuMgUt6i2AzFUX1kJJypZB1jbKHdJJnq3EEBYQeNT9ryVkiaDr2Fp8HHwCR1GMP1aX29rczNYNfY9NNYH4o",
  "key3": "4HiDRnm9qo2fYxQUPzaMyrHMj51kjTM1ajAK8Yj9yKdWvWQcdfHdb4EsmWGmcD9Dca3yCVCWMxQTBvrGS64SwMef",
  "key4": "xGG2Bcmdy5YW2ULysVXWWauf8rAggQX3c8UNfmhBLDfJ6orYdvZMn132cxu5532mmzpArVQq6zuoFDch4YKUynw",
  "key5": "2XXEeW5nZdtu2M9fJovgsEbnqXKeYnrMHYg49tvcThHNPc3KFkLyVAuMa2FCqNwy6Lkcrvq3GCvoT6gnbzEawBtU",
  "key6": "3b1NSRJV8PcpUwT4GHtqcxyRxVDmTCntD4gDgaX8zbYN63WFfLonDZTgwTAAmVUhhNoePP8vJxW8HYeHLJs2hLh3",
  "key7": "4fhqhGHR6H1reo8g8Dqunejnacmkms1UxnGyRUXrPGvFWzVV1njZZQfS4RQLntWdV7XPtHdZuHi3C7gsgmkHK1UJ",
  "key8": "2KqkDubX2vgzFMAtfHi8xqcv4zFcism8PTeceuPRrqa2mggX1ddaqur59LzDFZMqPCc7toa21suZP9j6Qobd81Gw",
  "key9": "2G8qWTUWKqBrfuEaCbcbUB2VMXVk56TbEWBnK6j3HSjvrXN8Z5X7q3m4caqXvQP6srAaHJfd25XxjqrHZQAC3x23",
  "key10": "5rHtkkK9oNbrs2F6YTgv2PHqvF7vwRqApwT2HhKupTCmFXgGphsaXQR4zQiVU6yZswmhNwyPyHJWz4B9hG8BNxeY",
  "key11": "2nU93aSV7tTgR7TnSxgR78KFhDoCBG724297dyqHbmbKqoKJLvynku5G8hJSobiRDw6Z7DiKC388dntqAUt1FJ4s",
  "key12": "5S5AUTAHX9TSucxoMAM4RYf53UC75RjrZjK6RQFFGwd26661AqComKepkqEzEvpY53GNvaoF5xfEz4XVhetV6Cd1",
  "key13": "4ErkWn6h5trkBVKD3FGhQPA2T6FGSjTcaCPqX1L7gnqfR8nTKpJeF5bdWyGSyUCHgTQTCyiEYBap7jdUe3rgxtK2",
  "key14": "fcorBkAzod8utQ2hxzP5uxPo1LW2SoDXnnsdaucqGYVzG1vZNDb3CCTrL1Gupemf5bPvQWWs99wyZPF7w81v4R5",
  "key15": "4XfGK1B7jCVWPWdtTyBF5SZMgX6ffWew4AM4PuUJb5QxtAqVMMG3oKzbP2rPGYmS92eoDDVecNMNgtGdtsoYEcWe",
  "key16": "5P8XUEdEDxHirZ4Dv8YtbdDTWuZKNqVNNw6RZK87GFdeqvxuA2WCvz1avzeREvMKZrSZbNnFS2VJzdUdSEjFmvUo",
  "key17": "36zguo957khSyiGSS3a3JBUi56TKffZvNwTt4H4dg21ikn133Bm89Y5pTTRt1eLnSfHCarbPsLMhgFTDxmjQbJyF",
  "key18": "2MED6EBAqTQiwPmjnQDCCYBfbQMTvxknxpCS3SpNz6urobN8cF6SYu4s91yawnNFzSYZpyXJZ6a1rHy5JdGvwVWs",
  "key19": "4hy3756HM7i1YSjgas87P1Sr16w2zeQ2akWS9Qse9Pcb3EURQozytE7unXdDukYkJTPrmiMpb1eE6RJFZaYQfuyi",
  "key20": "2wv2Gxzdmu5BiEjBLvxUjzkmyMdMFtX8Ev7UVx7z5ts7Ztw4yrdHUiRL1yhKbfuDfGomxy3WM6cg2Rt7bmquyt2Z",
  "key21": "4kfJHxjMttHuEQPaZK6yHukYWVqwd4vgiJbeXcpjnoY6rzpK5oEd2efdQtJPxSCYN9kbn3fgGTfwGtfiDUPaUzBs",
  "key22": "2aa2VJN4pozMnGcyJjCSvuQK8a89HgTw6ycYhi3KARD8XpLmXcwpsuuqKEvmasXFjUx1d2idHposti7iett8169g",
  "key23": "4VzgSfFvY4BFkc2UqxmpCTqWoQZ21r4kNrLdF7S3EMyGSnZBpCjuwT2YCDnQwaDdLXmDe5YQDYNvmwyMs6C5Dvy8",
  "key24": "2yaWomR1ZoSraFaRMkyo7cjmtaGgNbnqq2fJnyUnaPexY7X5q7jRBkrZsRy8ZTMggMzCTGtPbmCUJ9y65okxUVQh",
  "key25": "5Zz24UqhHAF5dyiomLJPwv2GCkWAacXfM1kPTmfX4uuGJScrCKmxbXjTpdxfqRcZ7GgKa9gTHanc8u57tpw3ZMUb",
  "key26": "31wmba5cwAsKp9HSg7xfquwRUg8ZFKzSEpCy4BchM2Pd6eY5tNsQjrhbdqybEWghx67M37n1j5AoYdSDHa5S7vFv",
  "key27": "4hFz3eR1sL2oHsynMXv74n5niXRaoCgpGFadeuA7WvY3ibUtocfYBuUEKS5J36PDPbLyivDMqBRT9dAKwBTXQwTK",
  "key28": "4jSmwPtzKZnhnA4jF6oiMAgjbtoLJDvbjVGuT87afSqacbtXr662dwCsPJTiRFcJM3cdz6TrZTMUGxFW57wWrMXD",
  "key29": "4Wt8TMYj1j5DDtV6EzFLv4tzHSRcq99JrfB6jdjUofLQthRYKV5D63f3Ah1m4VnCz6qTNBoihUCKAGJu1KfumPiJ",
  "key30": "2MzBHFJJMgo1t9XUghpAb2sX6Nvf55mSAjuMjqn9MQRiika4pQ876VP7p9ixZu4zw46cFgWmvDpkwg3iMrHmP2w6",
  "key31": "4Xz4ZGUZnEPZPWC8ivK1MPA8v4cp1G6rck1bohTQMCopySmJbFJvCJpugYr11zBAd7i1MosbCNTF2WFthwG8dNDr",
  "key32": "duV3QTLQsNTurSyJkzRV5iqfSqdR634CkT6jSHDoXTK3zqLS1rzsH5PcDj4tU5LcSMF4vh7CaR6FAXD8qMmsp4t",
  "key33": "35sUooQCVkTosr8kSXfaxhCg2xPeFQpX2PnGvsr9xTKN6vfWUiaDMtRWCC4tGecCGwAivJJBukfxCBYjaAAZPywY",
  "key34": "2N7DjiyQch8awxWTC99wWH5s7cg2w5GFjvA8FFTedXc1zGchhCnk6yomTgqeqBrQoKjd5oZz2rbceMGqEkFgatH6",
  "key35": "rsnZTPgxwHsztUUiv3EkywzFjAjrfpZkM8bop9pwjNNQg7ijKV18JbcSYxGeabzN8BUGmby8834eFd5hWRDibnP",
  "key36": "i124MVGcYEQMVX4FscAKsFSgz9aweQjDoM3mJ9NCrkPrGJy8FnzPEqq3LRwUFQjrEaFFXiAKQBzJiPrcSPE1jJq",
  "key37": "41jQ1NqnquDhKuV4KQUhiCK3cW2qpZD6GcAgNyp2Q27xMBENrkZPVvfrydzGzyuWub49Q2PafM3xSBqJLGkRHtKA",
  "key38": "3Pzbg3EefhRW2HhtbcYNu9X93WJ5Kz4YC4x5QkRn5DPRetpJQ38qoXZWKK8jLdZeX3XXNSpg8c4VQ8DinvZdpHZN",
  "key39": "Lq2ov7t4F2kcDhbs1oYAF8JjyLxgSx6ekPEhcbrhC2Zb5tHoghMT49woZcBc7mb6poTQQdPLcgW11wZYqemHTwR",
  "key40": "2zpZXuuUWJ6Ys43ekdhVwH5pAo24FjtEP5zM2oG8mpoJHAvuFfERmXawo6Bj4rTxnyj5mdJgQzHLh4SZaj2iaq5K",
  "key41": "5bcaKvsiJg1gs15nJi7wAT16Fac4TXKZQQkC2xRrkhWrEJmLLw6WJsPMYesv4M5j5tEuY34dupu7av1hLcA5ZiVW",
  "key42": "tCgoikLu9QZgrMdrxJzHUE3tUBQiHTZ1tohbf9nSianmqPmCTTJkTWzdus7FTvWDWaM5QchkeyyscZBDL5t8TdL"
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
