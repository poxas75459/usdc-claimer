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
    "Uc6BFdmJqGtMbYZPyNYcqFLHwmhSezauxRZgD5USxpmpHGMVzmNXBzA75twLJstPiX1g6Z9GNNMxrZjPmvXj2cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHYNk1NczoYkszLA1ACaj6UHuzd8VUdf3vsGK9kwsnQv4tfF5dkbJQtKTsHowkEWWHv9mNxByjNA2ecGKX9xW8P",
  "key1": "8gFHThfbpAb2qyUbMkeDHXcqcQCucZ4zVacJyWNvhr6FkuRmSLqmPVuL1phUKVSG39fBigP9dPFCQNwFtEkUMJe",
  "key2": "5TtRchXsogcqsuRRWCZN9gxQYyWMiSShM7mdk5rWut3EwnfzHWv3dcXUhTE7gi5J9S5RYUC6D7VXhSJEQMgsenBu",
  "key3": "4oN3PConEob7TSsnAoSFSsr4YUMaN22g3F5aXoECVcbBeDfJmaC7UxU79Xo9X1P4uwsRAuk5Ds7pPXqp8Cw7UZMn",
  "key4": "itM2dxH21AzRE45F5pL1WEBME1gvYBLUXbtP8dVC8boLtcwMBzU2kv5iVhAQQqdUVWJFKyMFfHeXxA3jXzdiNjU",
  "key5": "2AxVWdshXP6we2RUYWA8jy5UMDBwZJufKNYGoTLwpSCxwk5xFR6yXwzjDnqQZu9sR1gfcvvHLBeK2TsKiqymjyUt",
  "key6": "rtkyBRXw72pQEUjJcoDikkEvWAC1GRSMrMBAyNnWgrWdbkBXm3ZhawjPaNeFwJW62TzEEafQbd1Dg99ZSDdC1At",
  "key7": "3gT8ELrZRn7qBLiv7Be5sq87gbSkNtWdWkAgcbZJrbfiRy4RSPwQgizpVBChkncWQfRVgiJWQ3UTiE7NDw7Y7rUF",
  "key8": "7jSVnos76HEu3joy9qF6XZg2SDbf4pbwL6ZMUKmzs8dqRDGUpYNU3aqDLtPhWp7zB44b4ggZdZ9RgY8BSUqFD3U",
  "key9": "5WnFaYPfzqD5qVEZMLQDAnvZhWPLKAh5HY2zmmVP4BR8jVGSkGxydPJppaU59XRfWgbZqJbGgUtJkgnjB678YC6z",
  "key10": "WAD8iMEchnZmGuJS65DRsyDjJpMS8BWmANsefnQ11SSyneMFFtt2fbjYF5o8RuHLw57xaasXvomXczWHpouCZ9u",
  "key11": "2AfMFdevdKzmxHoRyfrt3vTTRFd4LvUeXxTpJazgBNJHhWckYXevH46J8dhZLbEdqSrS7KnocLRnrtbJy7YwL3bH",
  "key12": "8uhp1VqPJhp5jQ6xvZuyJWfycz8Z8iZLJeoZ6XTvpZSs1gKyUhvUJfP8BsmkLdkjoeQfrFPCNs74DqyvNGMLUGe",
  "key13": "49sgeuLgCtQXhBkuQU9r6QcEnAsXvMNGyuY6drQyH9HM24EP2gCKUHbeE3LVky46Q28HtJCXexWskx7FqZLaCMjq",
  "key14": "obeR4zSNkYqqrRcBbAfAywkcuc4eDn6CnS5MVF2PvB7gtsY23AUDwJq4mJCFv7eaPDBxWAuzMB4qiHw6YHyZf87",
  "key15": "65Li1SoyiEnApM6B8Hpo6qh4RWcjugRu62thd9X5YkAEvSTqoT4hhvXZdokxfRpARtxasUhQ2WStvZpCNKp7qMcv",
  "key16": "hS7yMYwKr7CQmYxC2dQqTQ3n3HGovikHvmjr5T1gVnok27ACCKrWDtRpV8qjQtahrNVu5wtoHmbRD5hTqcDAxre",
  "key17": "2KyMuXcmz2eWxh3HiDuUT1a3AxYjdvm3AK8UaHyTzB69inj4gQBK4gzfmLgxwr7z9BKFfHFpi7wU9469UqH3rRkx",
  "key18": "PdGjfaMtTiBdjpzJnk7fruzpDh5HvjMNCeNdnkWimRfifz9xQ3n7rSLqfXBMB4r3skivmbA4U7UqvT38Sz2zFBQ",
  "key19": "c32i2u97KPzaVamRrj4HEBwp1Q9XnmdfaTjLv9xKmQ26LVnK5DUHyC6pe9Y5cPJi2vJ4q2x2LnCEy7DSSPe38RH",
  "key20": "5qXWShXPXunwjghpZFQ8NHiewqyvA38gdfdcYNBtvbE2tjuY247rZWyYZMQc5G393iHUJQ3cmoWx7No2XYnYMYxL",
  "key21": "5hxkoFdFFmH8ckDsgg4pZnoL4QBf54FQQPth5fFjxHaKhj9bzkYEoY4s323oZW86dVWFQCH9tNptMGahTttZ9qfG",
  "key22": "4YznbLtTJsrcN9hqYuzXqcnJtVZzDanh3sxrTpdDP7AjoT4aJy1D2xYh2aZTQw2LbsQD8Eyn3Yf1nbU9tK7szr2T",
  "key23": "35gz57ic5JbQFN7YfHvBmp1yyxmsm7SoXmzTPvUjAKS1fAP3Li2a1P3YhMk6Cz2SJqF6eVtNm43riHDQWXY9WHbE",
  "key24": "53kUbCnsJHHyK3WiMSut6UTqK2e1SYerTzimesyTkMASW4WWHFUkm2xsG6MuFxFNWHFhBG5zdxJxrAsiBJeTtW8K",
  "key25": "3S2AEiuWrvWGzHCM9xZJ5udXzQoDBVxAcAGzpvRz4uDy71hYfhnySRbRzY7psGmTLf7ZBhkZ7E53KsP5R9rQrhHV",
  "key26": "bbUvjrzFPdttmaNzpxp12FFB8QhqzdP8SnssX6mVhJhnLQVArvx57J8awPWpRuH9bSkFUZ77hs8KUfLnMBWsCbd",
  "key27": "3hfYJppELeAnD8xmpXePX1mn1JXP1ztkVKfbamMbHnY5YvHdwHRY6FziXDMc91HXEamwzps31EipKuzLQ6qGPyDf",
  "key28": "5YinUkbt1JbYdrgLfafjLUoFLHMV2BrRzvV77GjWKnjUN7Qn8MdU5KAUWVWB3BdqDaQhQTjcx6YGUu2GdDnKmMfK",
  "key29": "5WrHLpVzLvQGvSLMxcpUBbDPcBigkCZiyC1VErN7STZzp58mWsMF3c2NC8So6JuEnKDtsr44mfnhofF4Gwv8SCcN",
  "key30": "T74zhAit2tR719JteTdRLQ3QA5GeHdS1d1mvDMi4TrkgCFPe1Z3pnh2LPEXz6A9wS1iJN7RnU86rv5BYnFRLyoU",
  "key31": "4uXNkXZeLopwaihcQMqMHKKzJqfYj6Lr6fnTgjbGVHiTkQddHmeKKF58DDY3qAgdHxEPRihj9VurTgSgAWHWtguM",
  "key32": "542q4wzcAXvJYGwHJW1JndeG9GbiutgUEv3RU4zEguEVxLa1wDDhhngkbCQM67ethSL1MehfSS4SpeYgbEDh1xSP",
  "key33": "5M8UpPjF3bnA4U6rmZct1WEZdzWMBFiwZziEjK6o6pJnrUC4aRE23WH3BsnTfw8FSsi3hyQ7UNkifwigbtQQLVHD",
  "key34": "61jrcHCjLpdHLYvWgRfPaRjxLfiYcY3yhkmbhQfNjVgY4nVpZSyNtGcBM7efzQaASVW1AVj4UvxFwsBTqR5qPBBs",
  "key35": "5R6EjqRBmSFdupXXRvMUGRCrdsfMgy6arALsxBL6ovg5RwWTthximhzvBzJBAbARgvbknj2ZAXNCjBfrN8KGnL1n",
  "key36": "21Dhmbht8PaNYUBSbA1vPaWDspHAXpNkmtd2ggLEska7B4q8ALWY5aVziZtZYZUGKLNmHNycyEnh2usyWfyfkNse",
  "key37": "61bdPLRFSWRLHq3oyocyfRudBEoZHVxm9drdr2t7yw2UuEzs3vxPqGGotHYBPbR68ZBatLQtaVwT4jS9VhsHcZXh",
  "key38": "5c5Ehwcqbyea4ksgBxStxLXEdPn2FCHwMUhKCYA6MoXsYPTtQWFCbxJ8tTa172FoGZdxPFnL5HeooM9XGoXYSe76",
  "key39": "12XsedwJUAj6Qrx7Mz1u81vUpPyp2aw1NZ6NqDLVXVHTPrA67bt7MrxWQzVTqht9aQR8v2GdGrDjTemfGewhceY"
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
