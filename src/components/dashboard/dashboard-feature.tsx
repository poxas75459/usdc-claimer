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
    "2Mq7gnPUF13MYd6uFk7rEi4NySdKAMmkZj8GekdvZadPv69a4QrZ5zgrhinDLbp8X5TMFKtkcwvQLNRJaWbY9rRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4raFkCfEAaxoxJYtVnHz219mHR3JsQVBTAedwC3jS1wNsjsE9YBau6iVgjBHeDxsiWvDm2eBFwqd8HShn6mGDHtP",
  "key1": "2jMfGUGvnWSMcdMsp36dDuXKcMpitqvojx49r6ZCfMXbnogayTzUQMKdkQdKbCXRSR4zqNC7iQhmDqLDcMsGqio3",
  "key2": "449ZyNZW9S7jFPH58Brwjx7NVSkFcHGCYTkGavtHJccY8xcNWYTVBD12zv48Gu5gZQTQ5pX1HuiX4juPtw4vZ1Bc",
  "key3": "2A7XuVmCgZ3VdA8U5P5BvSE1CLAgpZ7iCa5Lj75y4364tU2n1gtDhHMACzmXngq1cQYaXFcs6HXT6G89j6eB9ws5",
  "key4": "4qTeEiVzgWXh5HQxcfGQw7UZMYjX7mLYgL9bfjY1P1sQGTMf3ywvwLAdSWT2mCSaRqyfXqjR1TCGQyYSd4Fo2rrK",
  "key5": "4WXN9jzHwUZ3cYPVeJcmmDYVpJ18zmd9rnszrf2ggS8qXfL7tXAoc2Ay3P5nJ3hSo5VQ5eXcaKsJiJGP3RJRPamY",
  "key6": "3ER8xHJorT3oPx3RkhDcXxfdYWRv8atKXNDYFE8kLxr1feQoVL8ZSqVkcSFy2DaPR6e7TNMah16eSsfa3RmZGLRk",
  "key7": "3mg813X7nmtpBrurWs8DcTQZyUD2TSHMnh7ZnqF1BxGanYGE9Ji7GtVUKwLVxD2adFMTB1zuUaU6pmqiytwobUXq",
  "key8": "671UNL53LCZzUjDRUhXFvhSHVjTJGfENcfbk2HyGrPWTqwzHuAbonuRbWj6htr6L6sSUiehvUwAhK1eyjSri6emh",
  "key9": "H2BTVgtwijsxdfPr6Ko7j4SUa4etfacADRTv3PGFL9jg1WdZCxek67zAViRG5iKWkFH6asCzLt8xUkoqTEWLuY7",
  "key10": "Z7o85GzMd36epPzTHMSyf6meNS4cdVZdYixohcHMJzGs32KahH3FMhAp2RtC515QsDNH3AqpAxAQiTgqUwSb8EQ",
  "key11": "3v8EysJVCAoUCiRYCSrjU6fziwyq9NPy7RZBnjPc2LF38yhTkE3Z8cnFPdfN4A8MDRnorYopCsE4ruE4LNfP11Q4",
  "key12": "4cc3Bh7H69h3qpM4gWQXdAQJY2UNek6SuBemNqXYJi2yf69Tz5RKe32aHF6ctFTFpWzHLEQcRfZfBwjEChCXvt3R",
  "key13": "3HUKsumZzJcvA63VQm31t5jaXTd1Batkn3VegZaZsFHzSXCa9FYrxrQiHQ6qdj3gKxtffm1h4UkWP32VB5JBbVvv",
  "key14": "2jJp3b7nnt2xgJ6Ff8S9VhU9YA5JHn1KkpqJCpDVF73asLPQeVhXSebtEpnX5sTogNV9RH8m2cjAeopgF9znMe3J",
  "key15": "2WJoA2GfQdNzUjpia6oD6PqU2gXuDZQdskpkxt7okLf46bF8iri67bruH6zwWRnbA1egm3ZLPBwagB9ivE6EoFC9",
  "key16": "4pVxyRzTJXZsj1AqexMjkJdjSkvTkfedpwV2qqFxo9rxue5WYV9NSKM3DqwAbXZTkPKqHf6SWVzyAZJsWjYjcJG",
  "key17": "noBRVRYBQv1oDxj1TGoR3q74jP2v5e8nyxhNFTuWL7QMbjX4fZdbfQWYgfpLbcrB7ELRyptp1LUnrf3vwqNAuij",
  "key18": "1f4uBrvPrqUhWuLLuhJAAXPQAJnrhExH3jmjhSAbTwuPCK1M1bcMDE4kZjdWibAgxppLVX6nYoG7esqtsK1mhZt",
  "key19": "5eac9A27AfBQbgShfWiJnv5mMnPLae2t2CK4uqGmCZgjDwichkPxaXPdatZSRJJawUdjoKMvDfpVNFAJKsoK598t",
  "key20": "4i9keoFJdMKeF8mBuqa1Jvem3EPQkpxyZ8UZCTA3Md5ELUqxAc14SG3ehDyovzpTvnMpZCxpsDRcRU5FH9CXse4z",
  "key21": "3Gc7BbdUbtLGrQxRXXp2Fqi2WhXKQHFGetuLgNgPTFtUTyEi1vuNYbDWCLqjvjsXbs2ApFtiW7pbLdSNrmmDEXUK",
  "key22": "2MZM6fiQMF9UqfMQPMmLYah2NVEPYXJSFQ9kBfXfvkSc6Pcesy3bGcmzbpXrqmfrBJiwnn4PdmxRrgq7poZ4QMP9",
  "key23": "4YGH3CL2pBtA5Pv7Kw6HTPDYm5R9DUcV4z5gCG3dU91HiaUKqW9FtvTummC5dgGDTgo5vKaESgCxxE3uDV1uAy8S",
  "key24": "4w3XbuMeMGVkWixkzXfME4UP2aa2DvSXkVpr1iXsPqmNQHT6fwAPW3nmyKuyX1iDs1bqMQMJCDUrD5ZP1YXMB5jx",
  "key25": "2vnHw9DmXWHYssqBbZ1nPX3w9VjnQ12hMPo6o767yPLFqN5XQtvx4VFTMcNcLyP1Y14Q12EU4MzV9qZ6GrMEqxLH",
  "key26": "5NtQTYqVQp9vNMepnH21Va3Pqn4FMw5MavoEgr4ULjofvfiK4hBzHYe9RdNN9ZDCAsSBzZJde6eqzGcmSZjrMBKN",
  "key27": "3VDnGmokjSjXxk2u5LmqAicfXAYyaT82gxpPSYfJTZtoJFhn4kGuaA9qGCdDtu8BRoa6bN6gr7DruVTbqMAA78q9",
  "key28": "4jzr1a843U5t4eYyJYB1J2GeXSXZrijpKiyFV4QA7pMiVeYn15xKctvXSsK7C1hs7HZXSF9bPvrY9ZpYNZU4cx9M",
  "key29": "27xkBPkrNcZ3Uvg9x8JQLE9LakDj1XPfDNgMpxZCnPee1YEgPHYQwhJgsoQfDinC6rh57bCdwEgJMa7cGGoT1iim",
  "key30": "5FWhVyGW8VqkNZiTWJVDra5hAMrFRZmrtvT1NS3ZT2MRXM6QRoaGMNUZ6GPQUi4WvhJQD8pE4odHhaWzh6f5wfdM",
  "key31": "2qGmfrEFoA11H5tzkHHznQqGvp1qvo32zxq7rfxqdDvjkEyNvWurLyKsyrDvseqwcdwLy9Vx8VA6TMpay8BDajrq",
  "key32": "4RfgDzCK16JLxH1aaZN7BxACrGNH1dYeQZPVRLZx6XiiWtfNZLkbkzcfDK1QB6irgRn1b2HhPmWrCRy95bEu5Ugu",
  "key33": "2REeefVpqfqk7GTSrh1XbKA3tMp3YdmPTtqRiaSnMhnM8T9L6KvfYR7e5eU8qR757CHDzrMZVMUFutM3wqXyerdU",
  "key34": "5xnXEWihNaYeZr88aoVvRXaZHU4wLxV6u2t7ZMZn794v2CWoQfb7pSpuP5gGGHaoFabPpJ9RQjjUp5YW13CofzB6",
  "key35": "5powYe1NNbTfUEy7y4riPTpqftAJ9DQAhHrzGDuHMjzC1dm4mSFhXZQpf1eB42L5a5YDeTyR7TD9oNTjS1o2wWrS",
  "key36": "2NgspyuEPbpPsfQAfVjBLZHV61Ydb6Ra91pmqs3fCkRnkct9wqD1iV8MqsviUPFPD8pHFnzvaJSpUgrhVnfNsiQL",
  "key37": "4fg5QStWTxgcZ5NscaYj5GPdV6KLG2WDhEnNy1Tkp6VriGVRoat6cMSgnDTUm6uBTZGiB9ztQsfT99QHinawkrXw",
  "key38": "24ZJKdQ8om8yzuWePAeHJtzKfL43HwmiZDpLrff42MmivFZ8jkvf4RA2d8xhuaoE8NmFF4yT7yeikkD38t9qijDf",
  "key39": "3fGuaySM24SrN3EqGywch6HnWveDhRR6spHeAwg5Za7zQU8dQ2U8PXsVqgzQ32USqRTwdtJqNrgKsobRatp9rNaT",
  "key40": "2gSEd9j2aHXTTdM3EksRNZHRtpa1cPfLHtC875hJ4pfNSLoGL84gL8HkKYuMwRwQdYnCLmzC1HEWYyCwXET8Vb7u",
  "key41": "2rDn6T6stSpqHZDktSJLW7LmHMyD1HvbbEtWwmj6tg7MfjS1Za1Q5MXSTEATCpUZ6tRd8tUSXoQZax4fsnHaqQe",
  "key42": "q4N3PRbJBv5458vJ92Y6GjjeSmsy59w6yVtu7oRX6kD37feteDj8agTvdbUF4baQRUeu1dvW9qA5bcxZcbTVsGc",
  "key43": "2aYTpCAN8Jb1JYPkB2QqnuHi48sRU3inS8ww9sURQYgraHr6bGfgougfH5QEQCUZQNHzFDbLPEW8SzM9ofo3pJfC",
  "key44": "s1yUvRYMi9ahAAC6CoMvSXA2aC2SBQUrngs3dXBjuPYoMowNTgmvZCRe4kXAeJNMbfMojBVLYKZQVCw2QqKjJiP",
  "key45": "xpPrLkokivkT9DsSLFcWvLRUCNpjeDzPXfMKvPt99jm78r1DoZERWPRN3whJEx8VX8rg84kec4bNZddHp3qhPbk",
  "key46": "3FhzTXADVMNADy6pT65HtDDAkHGQxb4VJYcNSo12pQwSzF75rWVw9HAPuad5geet3DM6fMALzkPjgC6oxLXPbKJG",
  "key47": "5NkCyuHF6jPeR8RHknFxpC19LbPoswdTMwTmbv4gSpcekS7NnEXHpTdzZJc8zkBrzv3Ez7Gxz49SCtqFNtiTuty1",
  "key48": "2txim8rzxM9fhysCi7u1H7VdyP5wif3pCd7yc5hkpiQJojQSkEVorJ5Z8Ym5Z2i4Zc1aKAe8wrEzCjpEGBz63YzQ",
  "key49": "zueE2qpRgfT9EymyGGogF2zBBpkrRpesgB9SS1gW8FLQ6Lgve72g8uTSYb7gCUDTvRpjtdqD9W6PiYeB1jZDMcC"
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
