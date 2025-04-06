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
    "5zQsvTjrsVFUgx9QfFdzbviAvxWbJgX9XfQhwATufBy3aQJsgAwDb7SATu6UVxJzncDjRkFJHX4YvVH8kvWgRUw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdrHqAxanZM3hQThjGPoQiZuoY2x6ppcHrWNpTteMexVDHAei3N6RSzkEvx2aN2h8AkPjBr3jVkiJm7icfWNT16",
  "key1": "4XipjesBjbngr1sMvwa8FQ6F5nJzth5PcDpNpu1yBKEa6T2TUUGCWYHg3MUjfXTRmoLkpNwCwQMmzZQfB92ytx5e",
  "key2": "4suNpsib2B8iZrgzvrvH6viVHA15LuzGLnoUftiigjL7rh9FtA5wYBnvML32fqhQZH5cXz18LRvZBKRpKiaAmnaF",
  "key3": "2GAaJVsrjvDbofNqvKnEJ6h4FLjHDSTGA3cdYg1WVuT7Wxzux8jBzNq6CXqQcsdUH4XTNgihqm1mSUkKFCrcNmSv",
  "key4": "rt1o5b7r2bEKr3gTQnPHhEsKCjok2H4N6dmiKb6i5jfb58VHuHbFKJCrpMQrx8pSicS14yvF2qY9oW9fhFK9bPD",
  "key5": "4kZGLEaaPRJA19Zh67NqadJHo5avrwPLA8ojRc6x4ezjyKNSq8neC5CoxWHzVtsWRbCcsWGTQ6ZBp9MdCLb8GAcc",
  "key6": "cWpKrWK5r2gV1NFhRmcBMJW3mkiWTk8UAkE5RGj4iLmAHSYCXf6jYso7epttVNqrT7cG47AUYUXsAULFLgMzkzT",
  "key7": "4NZhXVzr68RCHgRHoo5MSu4AC3mFyGsve4FTGnSuhg85UDLS17SqPoL9L1ZvKu22D4C1mFeG89U35s6N2ZVHVycM",
  "key8": "4VQso1XQ22JS3kQvwqwzzvTHpb4nwSmE5uT9BwnUgBv9DPFRcW6RUgavZMBhQ3irXcFGQtkWi6h5BPjevSmPfSh8",
  "key9": "4nERM4YvAQ8aAwDdCAx9ztXcL1sq24LUDw999oQaNJxJ5WsqYpcktDcTeUYihQvGYS1tiCbsHmfC9BqwD87CMwLu",
  "key10": "4sESHrcRWXo44PeH4Qo6aXth8BzYUo5PqDiRAxP9RzjmBHohVHoiMPNwNKk8nZT48bNYSwpzDnc7iVJsmHwN9q8w",
  "key11": "5bXe6eSqJPwkNj97AqhvYvAtrk3VKvMLgVNtWRtPwe4ghupMLm4QQzbbhJhip4icMFHxSnscqdQg7m5k7N9mpogr",
  "key12": "4LPiTFZ5p4uvPBmMKBGeg7MTF9zfybfiC7jKyeDzeZzS8TL7qie1Z3fXNTHHksWXC5E4KF77zDdpn169eHbbBMFa",
  "key13": "36iaogSaTykGzVbLNFGVrXfUJP5eUgKoswUoEZ3nZZk1JMqMfUDwedmRRbgTLESPgspeDrwoecyvH71KmQsrxS1H",
  "key14": "3GXTAfUPxmqeseGXdRFBYSmpVU7DRFo2T4sHqoJ1XCngZHbe3DcWHr32wKMn35BjCKkXc3ZFBk11n6SnyrQrr321",
  "key15": "5DqnQdZ5dn37d1sfs6Y43kg3ATBiuXGAcvscKtrJb62xGVAT7McuJmyq8KEE7PZXf5QTcsmtLVmzfV77pYGVpCXf",
  "key16": "5sk8iDuUnuex7zzFfGj6TU4Pvv22RSeqAGob1vxx7TKySSgmU18dLExyJ55xUjw4gR3SYE3Fxt5JToaFLA1Egqy5",
  "key17": "4GrVSwKmyxvJU3b28TLsF6C8bExQ7nii1duBUKC6moXEuYX1NNgE85yMmMBpqMoWpLAZZ3HTnk12fRzf91AKA55Y",
  "key18": "4ELymj9pTKufxd3SePTfEjJysUfKUtnZPHDnmWR7xwqwLu5cSVqELh6kVN92WSxApEbcqJrVd2yhTyZi7CxWKSnL",
  "key19": "3o2NVWE337AqTHnYt2eMbyTjzznDVjLniWARy4jioaYEwoSbsDCPBQYPg6e4AcWDpMjm9ceaHdaAvCqe6iHkjeRB",
  "key20": "4dJWP5fabLzPXb842LbkzZN1bUAFhFH1GatCQ1mXWvx3zd5He1AZC8RCXXzxk1WQtHzRQsDo5SMbjEu3bmS7UaED",
  "key21": "2ZCxKjdqMaEqnFtvpU1GZDdsSFvijSwajz5k5ud11dZExjUQagL6xhAu6Bbyx4HFPrUyLxgjnBWNWH6BMGf6tXkH",
  "key22": "4M36qb4efKKTGKoAsyc95wTqay1a4PbuvEGD2YTNLrr9rTXHT6tPTknGxrb96JEarN71wpLYGa2vJiub7S6tJA9N",
  "key23": "2BfMGmWb719ajEoZt9sHVFnBdxKN7wuKC1GHpDTeaxXqCZ2hSGJXrhyrDQLh2J5hKURWQRjCoA4XP9irWJeLXNQA",
  "key24": "5mpmL3wi4Nq93ykrjLV83xFSpuBxqoAqmaAG5WcXtnQqLwHMB4tmTEUQk9oDeacjgEFiHJqud4sMkYD7VQ4HuLri",
  "key25": "4qo2H6xLJfm9S1JP6Ed2BdTGv3wn9G7JEPe8CEFqasp3ALo6RaeyY8E3B1fWuHAQZNnkAaQqFRoBzEWnfemztyfi",
  "key26": "2mwZDDPUnmzewrVTpTxuH2ZJiwBgVtPrT35pQTnu9NzWiiF5DZ3KJDK7B5kxftgneDqyBW1dLJqhy1nD2uzwL5UF",
  "key27": "5uMEJwLx1TzmSymyfLHmXYmjMbyos1jKPYPsBY2wiphMKeKnzFT4HVpX37oxL473vpXeMkkknLGDPUhnckk4s4wn",
  "key28": "FxCevYWH2cZXYdoJqJ87xrtCwNGPLfJZHBiJvNqE15vSbUsDgWdNEokvfdoxDNiW5AXZZ8qjLbSQn2qsywWZ3G9",
  "key29": "5nDm2zrWZYbtRCBZadcxEoE9vifRt7mBoVLoFQnsaEmCtZw8YJzguLgQdX1r3cXMLfpXR3K5UDMfZXGNriqiPsf4",
  "key30": "5KdXJE9ew67yMLWBKtM2VotfDV63vHScqEhAwTrpmnMUmBM9BCeuz1kpJuFB7ZnmX3P7QjxoPptN8DG6qcYuynTW",
  "key31": "5oQeoEJ7e7jUnhdTABCQkAQxn4SqwnQ2AoaTvTmtghcQTnpNWN3u91G2UYQXwfyriKu6Q5MnUM6XWVuz5k6Y759h",
  "key32": "3oGJoasaG1sbN98qo5SA6SZHQm6nZ7gjA3Wu2xQG2SSHwNonBDn2UB9sJC7Wg4H6wxbLxd81a9tJMMq3izbpcqth",
  "key33": "2pbCWeUxyRftdohNNbmr8Z4HVEuYu4bYSeLnp6N1KyEocKoXAAXZdzZ8owYsa9MqGtGP4Ki8NJGgivHfbwoP7R4W",
  "key34": "3k9JSoypLSqGPQSpQuUGd6q89r2f6XcKVpR8zbx6eqEPTHdJ2TwjdV8iGYSvzFApHPY7dZYwiaqueXCPhNJZkr7L",
  "key35": "5x484BQQSnudJFrQnuEkfuuau4hYLi6gTMBuU3WCmpD4X8PXXRTNrvoPneeJ3qWGNzf6q8jJNNcKXGAS6hWsb4s6",
  "key36": "25VDuzhoe56ZK3GuuDLCpfxQhqge6p6FMJBUW6LmntLdzU8AF5n9t7sqnezyS2AbTwh4rT8bVstSrYpi8fupbeXu",
  "key37": "65zLpezxmbHdeqhVATyCXvLpdFtNZ5cMTH92BdaZiZEjTk73irrAAyBHv7CqbzBEG53FFwcaEp9NMcECBgkJhv2v",
  "key38": "3dmH9RV2Q9eZPKbzgSs5wUjaqUznoXefNYwzd9n4kGwxmkH2sZDTS52TGKvYy2BUo87423WdPMFEyvLVkbgNUXHK",
  "key39": "2wqGWpWejJYdwMAg6Hh5YkHqVfrheuUSY94UXp4rMSFp8opzqNR1YZ5rt9FzJrPbCxaAWtc5AHW1hNSU7tud4Acm",
  "key40": "KgcTWhTrfFSjdsSx9hjoWFHrFEifXVPN2qCcETWgpz6uVUEcGqv2fWfdnqPyACPGokwp8xB1ufHQesNsNJPiQMP",
  "key41": "5NssViv1Gb3G9x2YVUL3KTPac8mUeGmz3TpLwrNmKDd5dx9vwiTRjUfSFRAscwewSEuPmLPQg7WkP69qA3BbeAB3"
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
