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
    "637agmznBSNXu6QrzBgAQVmEd7kFpCnJR6gXwnBTnfzhpxqoRsbHJ8P6SuExHrYRbYRE4tZYA4JxQxFHTXjEo79t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jZpDZGctfhe8vvBhB41VUjgKGWEydsrB7rpogPqwAWXmnX6PQdtosFweQBPjehnSqrxwY2ufnWqjMsvJDgAcTU",
  "key1": "zHchEBBsRJsEMyCoDUD7QTS8HXkPu7yU1Qokf5Tb464yqQ65iVsv99JngwUSh3XtqWe3RxsfCBR3Q5CkNowBVnB",
  "key2": "2NT22x147NBSeSUXLwkk6pbkeud5Xyg8dymb1Jdd9r54AL6HoxbeTHV4efWLzE1yaGtehS5rVx5xSvUDmbinCunG",
  "key3": "5AEWY75R1Ji5KLuwYLYouJFjszzD6z7VcNnXWGxujhLKapVE1LLj7or1cFdptUjLeKp628XPZQJvwKnK223wyjXg",
  "key4": "3XytzuBHpDygjjdowJAmHqmekfNVZzKU1ckQoDq3hDnP9nP5Zp8rhj2YDs3BgDZ8AES9DKjzDFD1ioFQPdnJpcLY",
  "key5": "K38SRkK2yR96VTXjiMDZzvYbpU62XVdUVVgx7UCtALXqm46FF2gWoVgMBLXbb5ZKtyhVz5TwehXufmW6rjMaHVE",
  "key6": "2eSDJGQ3L1keba59n22TU5Nox2rGhbqGnfUwymUSHQt7yJtPxRXxnSQzL8N4DSa72w5c5j88ncEiupVfob8zqt31",
  "key7": "4XN4KJ6CQh5vNRjz8sAiCkDbh21Jp924LjWGM7ebapUWqN8D29MBbxmB1X7AitU6dAS7i499Fo1b7wgBUKXMUFfB",
  "key8": "3ronfFrAFFs4wyeZrWPYMLiXmttz6PYj7Gq2BHinfNzcT3fMTWQq8jhvcmBG5gx9A5YKQutSyBCe6AP8T6xczsSe",
  "key9": "5CF9K9C8MGpqNenpbUGm4ZZzNZ8eB5vNXRnEmspdzQ8DXBw1mvMYWkRU3upZdTrFDvhiXUh5HpQiKWaMeVW1h6aJ",
  "key10": "3XfbCFPvzGxHTB8H2vJmv9fJ43eHYg28DWcZDtsdySQcPNzFjfyYGyBhinCL4JFhiPD3xYBwNxbAwgv3yDy4Siay",
  "key11": "uL5MmK6myH4ywaQuu5Hf5J5xXzphtYCTpagKrssJcP9UcGni9WZeLhrUcJXs6gA37fBkwgQbULmc1GN73SjWSsE",
  "key12": "m15YdB2mTjW7MAT6a3QRC7SB9T9ptbNgmigkZMzcbhHD6AAqDGYsVhej4VoJm98kpbhv2AZS6GW7zzM3vzGHY7k",
  "key13": "3Kc38b6ZvfArrkk4g73W6pUAghPrTv675Rqd8q4yKPaYsPjueCcZwnJ1CwzWmtVQiFwFUVQxE8ipjjYQT4idPqAT",
  "key14": "2uvcX3vBdE1Uu6ACjgME9hpAGRKPakBCtzr5HAngnbBBNj32HsMayBQfMXz4qF3Ejv5cFX86hw5LiqwxoK81aHQ9",
  "key15": "2AJkQsuvqaL7w9WH6sFJ7LdJcXy1eG4oMQ5Ng84Vbgi13warRJKWU2CsWqk3yPZiKpHgzUi2739H77BFdHyHNBtD",
  "key16": "5wzzJbhtXGEEZXjjcbaN8gqmXvxysNVZk5TgPUqvFidVw8rozNFSEcTdtPBYt9zouRrXyVab8X3FXVqmqeUeSpxf",
  "key17": "2p6Pf5FhM4VH41dvqnaELKTJLD4mgaDYghXXp6FrD9qRu2SfizXtWUB6z2THV9aXsgnWc8BY5JKPiGMhHJH8Yx9u",
  "key18": "3qYwqHm58DtS9f6qKtkAypGuZhiJ2A8t99eN37A7JoZCM6Q3jvK1psuQ43GXEH34eRwuHEC97PVNyBmwstntBgmk",
  "key19": "XsYk8ezyTvdjbzude2QULBcwbqAcJZ9T4bkxeAdn4sn2wXpymwKHMRqwdLqBU4wykHZai6iJPJ9tkEcBv9mxEGc",
  "key20": "KHdgCdvtKqnCXDhaYWv1qawaj88Vzh6sXKK7dzW49VXUwyKc15c5a38Q2rYuYSc3qTKVG9EU6ENkLNN7GrBApcV",
  "key21": "4CQcdLm83ziaBvRCB1iHsEx53xPorGDwWgFFMnosJx2ejetcP9nPbwSnUcDzibV9vHKKGTh9ikD7RANAxaZW8jRo",
  "key22": "6TgkkqotL7BWozgk2fAPoVoxjj8CJesfYXf8FYQoiAcConXDHw7n1vLFcqdHPwkiZ9UGkWG2NoedeSj2eFFU3r2",
  "key23": "5tNjDECPpMnnGSWQwUrvoNAhKoc7LgEDjWHt9xnPkUsUcKffic78dEfQxZ3XNSSH3eEJuMe2ZcjDQdpdxFmRkvzL",
  "key24": "2GJAhDwsV87G82T6PNUB6MA6jyRcwq5doCoJgNPzu6mvTXs3R7vr9yu1bFxGbY3ZSLaKFB29GgWXG5WFNRpLDQG2",
  "key25": "3XEvTHY4MJ8qujLTotD6LfKf2Sduoq3GGUcqxeVCcntFbGbxDEkGDajSFjyQ6fEyuB3AdjHEPNTBNpUjPa8PCBf7",
  "key26": "3FcK4XPAkYSdfYhgLzEqW1QNMCbj1Q3Rx54JCUsopAEAKvRfwdR1edCcBjZVbK1fhhYM8Dza2turNu2AWR5u6keT",
  "key27": "8H5BssHefA4CAvKuGpqZYygRqgffEE9tipHkvTrLR618hhmkX9a4SUa9vBmCxb58YWnskdBFhwymckp7drh8EsR",
  "key28": "4acEHdmQDib8cXiTjeUJdXvo5fU8nj5YQwUoADv79hVN89eD1KUCA3BJ4NmxPLRMTaZriMsdo3QmaeyLbiLHrZjs",
  "key29": "2eX6uxhErhu3gbQCFafCFbHM5rG2RN5sZxtAidHnHLbnWEHBwncNwXVo2oHtZEbsRVC3w34hJEgkRGPbPZA63RNU",
  "key30": "32FMpiYMcwWZLz4LZtSEsH8o3MAoPZRNJp9ud1mNVZU8GzNB2yycXbQ1TWdausuhKzygHipMiGKsJ3t5Y5GC8oSx",
  "key31": "5qVHWPZyumfn4aCU2Cb4bDDrL4R5npyZoSUPSVfnSC1zBpmzktYzkKjiSso4bPd97nrRbstibByGwWMDFpEStJTs",
  "key32": "2h5DHiw34FjA1wS6utDAXpwfA8hGbNiNdpTnT1AnKk5vVzsZVfoK3ygAtCph5AxTtt4Jv63QH8biDnEHA2wxvyXL",
  "key33": "2sXt4eD5MenLgXxRPh9WDuMkABpVMbCg2aGjASftyrHaJdS7KFnzYwbfrqE39PUUUbJGeGEf1REropGppT9i2fdY",
  "key34": "4RvMm5PmbB4TvbsoPjkSZKz894Z5DnxjqAPfDg4op6mPowpHXjhtS9aPuhjGHEKXc9cXfRzvmahtwVEss9EHwauH",
  "key35": "5GsAiKYwpyB8GgDL4NqsuavkrfhNb2vUthypC751VrXeBZf8QAd9CZxJ19sqye9QhfVERqKYXvKqehsG94xVBgZ2",
  "key36": "5jpFJHE2CN2JmEkEej2X6Sm9Ndz8DuEqz3sVSJWb9KjfQH1iHb2kfSMedoK4NB4LeAGdWWjS6WD6odtSRq8C4Mvw",
  "key37": "46Y27iTT19JJ7WDR4cgDwSdbc2grgh9SEf5DtfSRfrLSG8Tg3GziWUmCX84b5QyuHqstHe89Qg3hcFMSPDUJqxwA",
  "key38": "3W5M2vaj7qP5ULuC2QP8AuW56bxkBkqrJei83VN3YEzzFwuotf98XP99U67FHFiynGzTut2s1bAvfbf8gQFw8TgK",
  "key39": "5zFvFtJjdTyN1vMP6gFAPALYVrC5NduaVaJ9sPt6pR2SB6b8stmtXYY2eBX6Xtd212352e79HKpS2bCkUuANQ6pG",
  "key40": "4z81ofrewgNc7D51HLHQnvByma2kww1FsJW5gukGu2igTcap5p7Gse6xQFVCZogUn26HeuF9jgT7HY7iCttKD3xJ"
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
