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
    "RxP1LYJk7BWFNyTTs5HTjsvd8sZ9LQUNxqxhYcv8kznYyPjAxRnVRPxkArhmFtdsmuZnfRby819wvgpQ9sj7SHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vHBYtYM79WFqwpUCYovHktGBY1RLpwNG1ER9gXsBs7JyeS4jiXxRmPNNTzhDCARg6K2R7Z6Rfvjef1DyrnFxjx",
  "key1": "5bKrcFMqEFHFwjT1go3HNdLyW5zyFgHueo9iZW76c2v68ECcL4LAY9jsBJWATWFRc9wLajRQ8z7voYpG4jDHtxCd",
  "key2": "3nswpitrp3UHvVgisTmFp2obpzXVtjuc3UXMhyBvfvwiksPrkyQdDbrHqf9jUURvMP5TCDuxBG3CT74x3iZmbtdE",
  "key3": "4ZhDZm7WW6UpVHgjjebfeYzCExdYvN8vNg1tJniEQobYFm7HJNQW7XAZ9jem5Xb2AvZjiLvjTTbTXratUjzjz4ws",
  "key4": "5B5o9T6EJ1wWkC8RMTLPLThXQcBZRLrrZE8F7uMFB4LWDAsVGkHNUvxKUQb9NWZXubu9iEmWFccRiZnBwKW6rYiN",
  "key5": "3bCf4VwucH4rA4U7HG8Jqouw7e2ESrSeTNe7ZjUYGQzVRn5qGizpb94txjqp6QXH2adadJwfVuxsY5EBXJXcfeiv",
  "key6": "51xXZwWAdvN8wob3UfeQWMSjCH71qjFeqFEjhCBMac4R1GNAoidctbRozfcwDHQohPCZZvkKw5cBkN3dkidWibk8",
  "key7": "4h1uHEn6jmdDLk4ZqeRKP2CUpEa8E1UumbHS6DUGR1oKoXmQ68inohCWv2RiWEgA8pJiFwrPoZQ28Sdp47BoSpU6",
  "key8": "oNGBjZCjKWJ1xYDZakKJMBBC1JhHZptNAq8tgF8myg2KY56mG2dNfhHeR8Pt92cNEQRWKTFr3qmkouixjAhkPwq",
  "key9": "2TDy4aQfRTYQ5jf7qMqwdXFaVpZh5iLAZypVYfhSsWkeevVbZ5QdHw6MXNkKNeieg1FMksB1TNNL3NoSPm7hvzS",
  "key10": "4p7otgbtEo13Sm2LWLxWpPzMtzufykf3MLKkEQQnSENYdJFgyBa5JyQCHDQJfbtrcecwAypsQ9VsAueUSLeZTgpC",
  "key11": "4PfX54wQ7F9ZReE9iMFd5r5wvd7xx94KKJjBwTtxHeNT3ooHxdmybJFtmsCk4WvvD1w2eNU349uegS3gfFoXH3aD",
  "key12": "2srLqQ6yMDoB6ogE2xjozSyLDdAskh39w9Q9N8ebXv4rVjvEE9EbuHpjWnYQuKZCXQWtVyTMcXvhg9CCBQVip4j3",
  "key13": "z28bNeuFXfVgSqJHpH2z7VDTcDU2xWBy2uZ5XzSUcwgJV7XPN4anjTpgKutBeSxGdFhgdcJgtpTbAUr3GwPbM4N",
  "key14": "3iRK6rVYFrLLwB5KGcHsNNR4hV1zjyWpFazyRbAgjbJMX99k1jGK7sFvcFmuFz9ZbMxhB9EXYdb8WMmAZQ1nu9ZC",
  "key15": "2w1ZT7ceUU1kpkJmNPqs35F4yjC4iM34CZHoAuMWhEu8TKu3bnSBnhXtkCQjns5nj5VhupjB4kC37FoaGCWP3yAL",
  "key16": "2JdBGdiTpPh26CW73aeGnsmwXWYZzio7zbFH1F1HmjmbJPog1pvcSTujTs7Xm8Bq86zCg1cbePz5UDoHUimt4rFB",
  "key17": "3FHbM66kdVEpRfGrsj4rEoQuK7bd7fqEApzedzNZbuyRnK6Q8jYVFxdvwNpZYr2ChPxB1Rhu1GdJjs1xepirdZ9L",
  "key18": "4MtdG5udzLu8TSLyWYb9BS9cDWU6sdMYvT5t954arhB2FzWv7xGuUs4iq8jSZVvjQBDEP5oR5xwf4wB6Tm1ASx5S",
  "key19": "3zfAXXyo7XAEfGZAToXLeq8EFAwKCmqE512GzoqPiBdM27uwm8R5JQ7SZyagsVevJEaNCRVJ5WfAq1xW66vHLuCB",
  "key20": "z26Rc6HnpoJTJA94qzvTyntEK6xFJjRX5CJD3fApdeXQMmMnk4eyKeFsyVGyAnKgPvJjzZxftifyx1ghWChyftu",
  "key21": "4Fto3G3NTQBSSBb7rtC7mgb8RDKrYYsq2WzdMJFdxEHNLYjexes7ZEyeQwSjW812gatnRyahwRgxg4JUqPE1hsdZ",
  "key22": "2x4v86Tq8PziR6KVbffSuoXecgFuuhqPCiWczCY1SQKtNy3U7ct96DSR5Y8u6EK4TfuJHbLvgMrDJDqMUJJUjSTt",
  "key23": "4x9tSiQpjA2cn3929GC4ymGwGkQNGwyhvMKtzPGveebikWQKguriugNh26qatLDrQXuu8w7dSn9iBgmg3DgqVzu8",
  "key24": "32uhMaLKubChdVSEFZpC6RFMaw5JALKzajNS4Bgh11vokcH9uGvSjqLmp1aozkRqbSJ8pCmft1C271jvRj7bMeG4",
  "key25": "23ZgLQJSBf3SZHh8D5PKMMQjY9fk1HKeSN87r118sgzCAMyX3ynUxz4PCwpgRYQm21Nyg77VJzK53guYwKTo8SPp",
  "key26": "hA3qbaRU1orXqQ3epuBHsGRaArZDYwJbBfHmJAGPhCs7Ra7onKX7cVSHYKzGbh2JLPRcPpHwc6f7QCh6XnjPuP9",
  "key27": "3hy9A54nMmQdWfRgfUoUQ4DWJRgwf1LhzG4oQk6wYbkyPyFjufN4TbauTXBn4SUys2SfRW98DpfGGntKf93fdvbV",
  "key28": "3tGNnvWH47DawVZL8DohyES4GCNZcgYBaGYabx3iQPMzVuhhKojeu86wezRjG8ymUKY8uq8TvuCiPGMG8XKavUrn",
  "key29": "3D8w7fWudRDGSMKw86EmakeSbyaYqW4zRuQuToBNunhSxQAcLgZTxsyDARM46rg7BXvLuCR992dQ2PCMyNoLJVW2",
  "key30": "5mwvX2zwuu5bCdwrV2JBLDV8NgbQTAJvDFtdAQpH5arxwMZXKDt9QJiE4iaCJHsHE7mJKP4oQy6LAhH7tcGysQYK",
  "key31": "2Na9EC6MVxxbHpaeDfPFKLGzagKkiJyrSFvaCE5zi4s4VuEzdpkEaNhDnCjnn8tf8MZDW8Q8f67ejbkh3WZAHuca",
  "key32": "4mwAUtzrcdkZPqrH1x27eu9Nr4GjaiVhVvTiJP7ZHwL4q4XFH7VETxfwWRF57Dhp9jj2x6BqsJKmcN17f9cL4tfW",
  "key33": "kKaZ3qbTndQH2w7tTVhWPLi516S9uz563SgSwMGVaM9ysUBEMH3FSDf9HgYAE77JCtVLRBoT7pR5stTHim9fWHr",
  "key34": "4BykiW3F7ZBThFXYQ5U8nhoRwS1bit4xax5rZuuM8LZ3gGJinsWmCFkmkJJfMBecL7AUi5v5Cbr6rSjb1NqHav9Y",
  "key35": "4A21JXJS5FG3reeWw9ZoQe7QS5iffEgyoB6YVhj2KCn5VWWdeLhCmdVDpkv2nVaqE3obe4dgfi5yUjMPMU5yHfFp",
  "key36": "5WWbs24nx2YXj66FzyrvWKQoLe3zPPvb32iArvnrGCWskfUzKPaNBrLpxHDYeJyoFv9XFVR7s941a8xU7uFKocaM",
  "key37": "4pZiFPRwfrWvYgWxVCEUTKaQ8BHhLeGmFyuQwKrxkoWedKJsRcdp3HXezh3zCLtsBDZz67Tcvs33ZZ1KXtbZfPPw",
  "key38": "4GDvdU1Lffxf8syv7fCE6TujucGPD1nf4W8SMwRLCTxaqa5j9QTgKYxjijWz2jRdphssHKR1ewF1isUBtQWQFxQs",
  "key39": "43GotU2rWm54H1H7raV3mKPb5qaej1XNWFQguyLf6k49XE5osEUCcPtzWjjQfiR82dHLJUTEpXm8cvLaYZqMj2yg",
  "key40": "25CG4uNMptxGstPYECf5YfoM9YhM4PYZSdsUy9xqbeMyrqDqcvURvTx4vxiV85YrttHuE8GEsWFbbt44g2g5s2WH",
  "key41": "2hoVPfHMsYH4srwK8DLeXiBhNpvycxDaiJMSA518hD6kDivQbZ13p5UTDXY77685zBXGuVtYGqBT3yuKapgNtv4i",
  "key42": "2U3Y7v69R7Ek2H2RGd7kCQoawGniwYPt9wUREt9gMvce6KNKDqrhiTEQTUMoAnSf5ktdh7azbHXjJWnkf3CLCSaY",
  "key43": "2uYeaLTiiM4MTAAuUboJedXPykto6cmVnmTknjbrH3o4TS8CUbVYVvTtYJF2oPvqDJtnDSJxuDP2HomKqW5Mk9vu",
  "key44": "3VmE8ZCeqp1WutzfrQx8GoksxAbddDbXpHi8QNZeQ2pyKCBaq6YHgw2YVtPr5vHVf5xpZ7SKZ3b4kY95HEsFEuiU",
  "key45": "5j4fWeqUPtZfi2auBSxHAEvJLiEJ5EiAV5uHcBqFv6TAftKTTd9sLSFgjh8zAX9bUz1SYsxXbGNvPCB9qiXoMqsy",
  "key46": "5PqbsDABabE3jBT6m3pFPgSzbYirkA8yPnQdiWKeT5XQmkP2sHYiv1yxxtNLBJuRsJuUh1aMDiUzSiioqrQ1QmXb",
  "key47": "5jpGNpS3tc7xL9XgvQQkWwbweNTEsYM4gdqs3aXeVRD3fu69C7ui7PVee56ZhZhVpbyDcdYsVcNNPAUfS8xcD8i9",
  "key48": "5JHDuN53h4mXdmSoi4Q4KCiFzuNi7oNXoduJfZKtc7pXeP1xGfMGGHWTZbN1VYpEGJrTPSLpt4vD5wJuC2MkJCnK"
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
