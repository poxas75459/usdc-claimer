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
    "Ycf4AGr7m4p53PFk8FxhbZyvKpsyBP793mA4XZ38GxzjukJgG1W1q7w28xuiFcxmbDEvogYqwLT36XM4AAXrpSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RM8KM6QvB1NUjHm349t8ZsuUk7jPCY1dGHntz4k4UAcqNeCdCHjcvGKYMQFx9gogF6Yi8NLuF9nsshgFhYBMEd1",
  "key1": "5nuauWti6G8ade8WF2Gcrrq3ePv7WzUUeB4Dof8Uc9W1Um64S8j8AE1cewwJwWuT2JE1YErdJ41hEnZ4CFMMPsj",
  "key2": "5We1F5nScmeZpXG2cfc2uMJDJwaDgWSxucSEEPzcGMVYqEy8TLwAaDRytgyG5WdrmzouDPaBCA9eBP3ytwfqUY1K",
  "key3": "4Vg5QqdYHLsDEXkzzDqCrxGsE2VPrydGhzQUxmXAfXNjSJC3NwYRwD9ontneXr5oxpwqk8jTL3XXxgtmrdGYnSxU",
  "key4": "2Ep2AQEheHn7VcpmyJ1aaMiRVS1cTKKwKfKvgjiuCo5R3LtiyY4tn7PNxUsmBBf3h23MwBNUwkMr3ShaKx1kJda9",
  "key5": "3pwXJNGsR2rqBsjN2gj1rBgpWfPTcftxdStutEtJkoSubXgJUUZvTmCEQMnTuNrrGewQS8Qez82nSvXxu8PQVh6f",
  "key6": "4eD3cdkFQBkbvgLAjjqmnfJzLZ9RtdZGh5xzFMN4vJYEwDLWrqZixVFoBKnBDm4fZ8fv1rHTdJNnXJxfTMHq4fyz",
  "key7": "5ro1WhPuzVztL3stHhTDLGNDjq6PqDc9hsuEzWWQ22nkJmCQpnQMm5HRNXVSeQcHryEmyoE7fK9aBCU7H43Zr8hG",
  "key8": "3kfParqGTdBGNFnxzuiR5TmWWBsm7NU6QNdGPERPu5cJVBDqUpPoZQiRkCrcAKT4f9hNaJ2LTkycaKKUxrCFx19R",
  "key9": "3VUAbPchcHJPKBowSxzakfoByS3doHy4zTSjoNFSRgaWB9sZNM6j5z3pihShjj3YeyFYwrM4S6sb4J5MSpiy4UUC",
  "key10": "3VS38RTi91kmpvqHYExwfNthQyEEsi71C1NoAuKf3AWCh7LYS8D5hDTNHpmopVXrU4qq8jTmEtVxGEJWW5MkVWqo",
  "key11": "4A9nYutZS8zDyFQP8xZWchSzho5aGXSKqSbbP93VsbP1udRvFhuAJ7YsH6GkHMEQZwhnawbkKabmGbaCPuNWj8AA",
  "key12": "2LXwksBQUF1VXHL3W5FdcU7Z9bACG7muf5WH3SNbiBD3Wn1o1ywKxYv48B155nr4tG9z5GQUH6fMYBxR6mSJK6SX",
  "key13": "2Vn2gNi3e22KMEhe9bxHSoqAbAqqX4hmPZFvMcuG67RTf45u36j73QDNM4Am827KRJL87oDs3ftpPuP3CF69nLdJ",
  "key14": "5eyr5ZXykyconMfnbWeuzULvW6Ma8pdPs1jYhRv6WDA9VHGAH742Wxsm9Ftwif19hf1U127KtiJCU9i4pQLHEXaZ",
  "key15": "5Lice4QhAgHHTyKLbTbb7grBjJLiPtvzKU4brxmv3Shvkfda6RrwntfEDCM77NH735NVHnWV3c8HRZGPtW5YV5nV",
  "key16": "5MdtZxqp8gVCGTXNdJ1VUz7ALkN8oEtsQP5fEErLfPmQTAKfg8sJnQNr4mTBvtPMCNmNpu3fPgZwVEswp72ezHrJ",
  "key17": "5rEnoDo8WQoMhPM3HGfjfv8X6w2wSomuTKJbpSJWB64EazKaDmFbm6fY4aDcwqq6V5XtsTYXz7nHXQfuC8k89x8Z",
  "key18": "1kVd5Ryh5FSCWNi9SrbeuvaZoRSVPpZuftxRJJNCXzLEWbjsDaJY151qTm8vxdYoBAHwrzj7CL18MBeaxdfKhoN",
  "key19": "4WvEss3jaQgHMT8XShZsRpiBbNYvHSPQZd4FydskCwck5S2tNK7VmFJGypAi9UVZd5goFMBQJxrVihXoEeLDz9mT",
  "key20": "4obzD6Gy3wvgNpENbvsCQatPxYq7KJjLRAbB3TDZMimyjXg9LkYnuoUeUTFQBe4FrkJDYAvzbkNU4GhqE8XHYXwm",
  "key21": "2DibeKeVzHwnvQTq9erhQ3BCDCGAD6bjocYkVLTqtqC7VKxCzPfXhf3fiHFgR8numghYPgRLsabniZ1FWr26z1yV",
  "key22": "4PzW4PEF8fDwXnb4hNYLNxL8KSZJbeKn9Ed4f6rBYBHXgjuW54GeAdi48BE12rg4BZLq7tjUVNu7R3XSHWYcBeUa",
  "key23": "34zbT1aTchAxAoiD82uo7CLdXg5v3baauWoscVqJ5XQRw8KwS7GRsRaTJxE7ZnCTMigkQ5LyuxFZMKxXwdQmnSFm",
  "key24": "2zphR1QZuxW1g7y7NcLdjzyY5Pur6Yjiev6rhazUyrX9EjtCMhdEP11QQJozoE9jaVqYZspCwkVZdaaFzTTgGknk",
  "key25": "3ovra1ijMVRRxqPWAWoh5muHsKcufwMvKdXyAX3waFqRcjEkmaMKr8EESzQdWY9dAgqEo92Hq8QeVgdm3KgL2r3A",
  "key26": "xHdmnDDkKJfLKahbBrZLkXnNBf5RdjwSbnGdoEbzYnnwf5f7kVbmUGJFkowgqy5VSHxBiNaJxSPNpYKafCa2T9D",
  "key27": "4E4HZKdhnT2R2fntfguuhaMwrtWypjMD7zL5v7GhaRTMfXjgLoWMAtAb5d8dBgdLLJYNzQD5CCDFHdcJbh2bPzN6",
  "key28": "5ACcZddyGsxhytgvg4D7VnXtgpH4azjW7NtFJBEbdY45inm2SYvGsb5N3hGWs6U85AEkmdf4ygmmdcJw2ZRBcxSU",
  "key29": "45Xmh3yAECza67XCZ1F7gmC7jRGyvcPQfanXieMMzfAcWPY7b8CeKwMBoyS3cxDL7YecPp1KuCtdh4Nc4muBxJhv",
  "key30": "22wzyh4V8iWzzqn1RWKizSUb6KDRDZbUU8uzaKWH8G4ZhAK1KBJsmdcw6EXukGS9jAPxKn3WsyHHmPR7tJqL1q1K",
  "key31": "5qcegGCLbUuzEmqB4iAvshgBACUeywmHKioFsPAAMVMxScDywoyC2AtRPQgvMLu4xk1RfoUSRTTm9yZiSqg9WJcA",
  "key32": "3bXpJX2J3E7pUkTxvDFwDC8jxr18GDZcBQyyQATkNeG2NykY3tsQLzwjX53CYR8U4x4rckp8fuffiZuaDD7mTHnb",
  "key33": "7WPMNkcAGzFdCegK6zmGJH4q912xd9ijEYZLfGdo7FW9Stq1x1T7RGaKUnwWxhK6C9FFbpFYP9KzMFb4w7RPu3F",
  "key34": "3NqJDPppd65JFt4H7Uoj9jZMicDcdJkZhWHq2z266UB6NrCtSmuo7WdtNSHaUmvi1g99fgRsZKVqF4U7GUecUHU2",
  "key35": "3PNZdc8yVrBPh4Tm7J8Y7L5HdN3KeGoCerotxvgXenKZ5esjCjsLyTBVUgPpRDUziLqeVZYvszAYT1D8v5QJ8Rgp",
  "key36": "1iphuU5W21SRspmkUY3JjbTs8sBxKytr4F9G2NaYMd1F3JctnnfatR9DgbJhELUwkFU2oNRiuj6Ys3tbrbYLnRz",
  "key37": "prJmfkQSfB8gYC2Tq6Mkmgb3r3bC6q53JNvtkCFerpAPdiLkmVq9j42LU6qVCeGnErEBh4MFhPrqLJAHiG66Zq5"
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
