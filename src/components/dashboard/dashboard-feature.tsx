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
    "5UmcE4g7W5ZTRn6rffpA9cM578KpWzQEdUWJ3jsX6mkvAirSREPR4wiWJXjkpR5eNkqBsuZNDrkCqe4n1TSPXkfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiccZQ3mWrLA859B96oz3iqGNghRcnTipGGZQYM8Ehy8soCqcGJZXxAxrLETHTF9ARrKzLBUAPCJDe3mcNqS1Tc",
  "key1": "wtgJtGAH6Q1MfuEdQqRLPpSC5CFfUyP3T1sogsPqJdxT3mdaWuz4Go1Ndp5f5K3v5HzR1zpNPNp56J5g6ugjPeH",
  "key2": "3BB1BfA8LZuLomvpmKT87HiUd44FHiXEGiG1bEG3TDbTpH92CKx1kkJBsB2bguWi4s7sisN9LTS72sj6iPo3Pz4r",
  "key3": "5tnvg5Fax9XCmCX3apgDQKST9k1djUTWy57jm6GucdvfkLiSrZFKLmhM5EEpG4RfvLRZC5CTwXbM2Bmneq9wz97M",
  "key4": "3d94KQGu7TMFvxKsJX7UFxNBqJsndj41cuZTLmhbKFd2SSkHY7UMhbZfENX59we4vhWT4tTS1enQeZDDYr6DiHVR",
  "key5": "3fXXNMYgMooLZDK9L72a9Twenh8o7udDxTxWFfCaumMGypJed9UwvQBpvQh2eLreTYRwnZDHgfR7TTMEHJ4h4Bdr",
  "key6": "2BETRxczzxcmrmRGW83NzKbpXXcMBZ521tHcCZXS2Jubk8WFhLB48C1NMDqhXYFFzuNRkQLVJ42Df7H8WL2dYZLt",
  "key7": "22BF2sWraz8aBJxjChVUeqo5jkbtYR9QJDoH7jxg6UwyNrRF4wJRgLiiJV1TZf3wwEEUmZ2tZsPRSpnLCuNgTXfz",
  "key8": "3jGimsixBpGDPpdJkN2GmNTzPdbAn25u7BnLAMtRy6eBPDhtu1pjoQmdrqUKvntkmYmQKbTT1a6PtUCn8KRvxmkD",
  "key9": "5jFfFS5wxhqkGt576PUDJsaxoT26A4zdGnayiD97De41YAfaWJTbXtd6X8rkRiA5uEWknRhnqC5K4e3WjB2zYd4y",
  "key10": "3qwPbwRfnYY8wsgeBh56JDPGqAHBFXCdsjx2NRBM7jdAsuAsEf1umNL8VRK4naCJ4n29RESKAkq4b5FbWYsTt9SW",
  "key11": "5YXJhqMEzGnN9pyoTHhQUEDv841Xo2b3yZtFiGsndqf7oV6K6wsqmw89KH1tRvCYi829iqetU46QptistFxg6vJw",
  "key12": "2hFviEvdM9RwW83VLYHemvcfLNCEF4rYqfggBruJW9kp1QdeiTSEHTs9MndfcTdw8cxGqzD9JNCjeLr4FHnLGNjq",
  "key13": "2Mh45752rC9dgveXytRLZvpawqFX8YSNuG6WRRCBo8BM9Pa2GkUD6NUiMw2yPnSSFQm9cq2wbuRxubay2vAQQnJg",
  "key14": "4cHGr4f1Av1gdZ4p84Qu1nW4yz2SBqHsSLNDcdNKRK2dPQx2DmeKLHKHdVL2uCnTs5u7PKQ7WcwuJdnhdBGjovrC",
  "key15": "4h8PnWtsd5fb8F6LpgviLKnRBFHAqiuvKchP8qKBCcUG5pxoD4TVoZ9wSEsVQii9oxxJ8n1f4NX2LdZhFu9ZHtyd",
  "key16": "4iCnf31QN4RtubQmJgiUAnn5yX33VDFn85PKmwzC8gFHAo18aCh787p7m5WAMbrK2CUC9tzSNdEYwtEgXTtL12JV",
  "key17": "4mFQdz5QYuU2LeV66ixKLeaooJ1GUh2RfGygcP2eyhY9MSA19obHHnk7w5wUjfGN5qgYf9UZ7rX1Dx5fQjZ8AaDN",
  "key18": "4aZ4ptPX7Mhic5XWr4MgRHhgj7dHx8JcWUdVmra6xgTzbVeuvX319oFC1JNHAomAQZaCD4UZjkwumgjTqcmMJ7MC",
  "key19": "42ntNhZjcsF2WbRzviFJDLMENZ9FLnVJEgmZpr6Wwdzs5P3gX8NKSS47kopVsXWjJ37DS5tSBUSipWqUUzdTrNnH",
  "key20": "jhJ1BoDyHymue9GWXNYa5ZtyQXuFoirHVqAe3PVkqoGUz6gjH5YT6gkUNvLjtyEsmmu8Si4SGFN3Wtj4s3vhuav",
  "key21": "3tYaBjpMPkxDUAu8UfsrbfP158g3FYr7mFoT3xvZnt6BvSi37RPrve2bHaAzrRQSHqCPKv7QSJBPiK7qVTKKksjB",
  "key22": "2KwTBQWzPFP2j8Zhtq7hc2nntFxkVYr9kmRU5u8p4qR3tugbLgZsWJZSjQfhjpFUGULEk5dcvNhNduSzCGPimkkp",
  "key23": "397hZqVKEANYXos5Pt2bwvMA5MMLBECQNnVTPhCBnVkyt32Zcj1ARfMZqni2D6whVN7HeiZBiUDZWMHkTVzr6pw1",
  "key24": "4iSkCyhM5cxeUJPTvBSEXwdYNVwAmSGnZzSJy5GZktkSdqGnFhsiQe9323sBYxno1SVFFPA9rS6jgJKXtPpBZBC1",
  "key25": "5rHBkBZ9vQiBU1KYq2spRpPGPs9Z2wH4QBRfVAWpTj1kKpjBtAjGsdqN33e4qb55qfRdjpc5YL9ZDyxmRGjSL3MN",
  "key26": "5CVh1AVzxwaNenzTiFUAQJHoT1HbSgcwFynLi8MZERoQbViciWDFew1zjdUDPV647QY8g9PGgBGVSSjP5wj9FnJR",
  "key27": "2S2g87Drs1D9WwRU1fZKwRseybGxu4jnB1zXDw7k9Gen3xGn4JxmT1EQ7HM7qAWB9D2yotssGJagcgRhnt6v4eH9",
  "key28": "3dnTAa1fzzQP5dESsupEfJP7GXBwxgSNY85GLrLAZE5iatXidyBy2pSzQiustSiC9A8fWeWxeQPRc4PGkf9rh1V8",
  "key29": "2bWoVnCrt5njzVTmkQxBXXopyRvc1hDRZKeKekmJtZx2thNB8DYj7iGobrFkr22iT3zjD4RwFrLLcKFqREYEReh9",
  "key30": "5ieNoLKwkNxo8YqHsEw5jk44R6LzYzbhuXTDLU8wX4LwFb9i4fPfXoLhRkX1NHy1igehNSegtJbU8nEkBYfrvqET",
  "key31": "2A3QdeNV4yCRx8rNK2H1ZMebRZq54AJY7nsWKSGa5ep5PDhzyQYDSguH6u5CpVyaJwLZBUYqDvk3njBQ5iJ8iNXj",
  "key32": "AYNv6coq7JdFeSg12PH7CJdiMmhvDfKbsrr3cVsL3nqj6PrWrquxr9L6XXy34sw6p6BCKXH6C5B5hiV57WktTLJ",
  "key33": "2WqX1Cu3zq8PiYLWukTeTPrTmwRSYi7AjX3rDcEZYSQwMyg3AhPQGn6EgjnBkjJji7RAAncQ56wp618NrfZj6Mf8",
  "key34": "3fVadQeHXqTCfj9E5uMcj6WrQwRzCqMd4MKLuLFBPw4Q4ng3WwjtQgPoArdn79TeJp6q7XZsbhqdrf1EKeKjvBU8",
  "key35": "4fyeUuAkuRdUvp27Kk6j5SaFqV2moW5QPvwv5w7MziUg4krQJxhyvowtDqzeSjMVrtjukHTqCJXJjhMYUCaypUmb",
  "key36": "4RtaJj5QMjHDMNrUh3HPHPzdXkNUgRrz7hAhezBr62xGFnmmQyc2GsDNBCiT9Bw3UEgdDdb6zbFmRbZF5ereJBBA",
  "key37": "2dxsvFxEG4a8h9cwCLrGHs8g2PNnpzK257fZemJxfUFVnreMd2Ng18WSvrz3NR5EUk9ykwj7BQD3FaXu6YWT27T9",
  "key38": "55emyY94dVWaJ2S6onroijbKdLqTHjp9yo3dmHBtunHrDVSP7vAVGPyKzexkMzPHc9UdpiLNgWofxA9dFHto4oVz",
  "key39": "sUjAmcaJrozcccs3M77CByMeCaMjenTXWNkGBpJFJ5hdQ4XRNpJcbqhMUxVVk4Jjp7ARHm1ogP6C3dCZnkEnQx8",
  "key40": "5rTotaZ2ZQwGiPV9MHwCPHZVs7mBxE44RB63Pw5wMQbbk1TnZUwqAF1b6ExgDRpJgebhwbwf82wqezp9R7UnYF4L",
  "key41": "5eCJAT1dc1x2FRUTFhMmzYxUdzGBPXTR3eHwDCzavL64mHufbKshs9tTkhatosgAasrZFSdEfGUhx4oi16zjUk1J",
  "key42": "3VcP7KjvZR3wj5L36Wr5xHBMR8o1GQQgyWQfrnQEcC1GxifoapQKnq1PvkC324dsSShYiac7kJjGveooQ7uxzxA6",
  "key43": "5PPPMPEi4JVvK8umeEcrjNpLJzkd1B1SUDs6MPLtQ8njbsS1NZXVnm1bSKRae5L2VbW7vYytr81RkzN2TfjzmKKP",
  "key44": "rENELGuinbrkaZxnd2RYLTWjEMDuQSaAGmZhGJeyFi1CiLokWs4kDoe1iGgcpKGbnQueDtCvhAgJCkHLTR5WPFh",
  "key45": "3XrPD2FqQbeKfpSyugT6KQ32H8wZELNuKEXMz27YEDic3KKMzuia5EApC4NcVsa129cAQKPZfuTceUZ87Ne1XkTf",
  "key46": "5EhouudvAkMCggmh37MBz8o7Q279KiL1eBDJYvyrEY2PLDWBnWmpfrHx1W2uopjzTCTMUTy5sX5DZN3nuiVT6VCt",
  "key47": "XoGyf795iGQ4iqLyyVuQMCYJvF89b9XN4SDhTxpbzkjGvHDAa3tNdqrnWij64uqVxnuAgyiQso41HVDdcBGXn4t",
  "key48": "p4LYFobRxBX5Zjoj1uLvCKJMy41CtvN4nGTF1XXttfvvqzwTrJTMrYFYPByyrktP24ZvKkUfnbw7n4emQKaMdK9"
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
