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
    "XyX4DPB6drem4SsDLBZSDgDvpQDiACjzyiN1jB7VnuHoXJowLfmuCKN1gjQKY9u4FTVt4g9biRBc2JNFBwUnasP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czKPkwEitvDn4VqL6HPTAwsvdC7Xw2KCMdtrcDzY94UNNtEqf9brYjPMUihDb3jchqaSJDKmk3mffguJPRFYXtM",
  "key1": "3kRRqSAyqJ6SxzzPUVNPEqoSaTRNeTyYE6J5GVEQByKoC3rzqC97k9ehRLh7yVMGPvW6PKrr8K6V5g5MBjXudAWk",
  "key2": "2saUeJsVJzSe7L94naigu4YfkAqovTrn5EUbH8XpnobGVi4Wp8fvzULupfAudRQvaexGmcvLsX1WXERfdc1f6jZv",
  "key3": "3D2bTqcCgVLh7gzNhnQk1od7vpVhC2DuMrQzwLkYCTxhDzC2fzSh3QTudGhNatcDF8x9pujeqoJZjDjty1gT6Kce",
  "key4": "4tK4ftxPyVfd6aiiV4LWZSppbQRsYthJHwVMeyp4MtMjEWYexAmhw8h4vy2sUhWZidaLsviZTeakMMsWUazngohz",
  "key5": "4X53endkUjFxZs46uoMGDq2A3trBEx6JfA6U6wYKjHWu5V4M6qsYKMddE4Dd1q7ZWQ3vm1rfg2NrHCikBg8oxDFF",
  "key6": "34LazHcH1wiWCCVtNdyE8Zx38R2bCJKPz7sDrP59yM6zdtskrPpBnS4kyPcpAdD62a3ek6LRm1EAy43aSsQzDqD5",
  "key7": "412XU8wmeCYaigEKEvgSeriUxQbYjN9jVRa915S7gW7TM9U9CLzL5YEVMe7oYW4qnp3HLuRp7b1gtYYDG5nCSrb6",
  "key8": "5o3E8E2ontNEDzavSvp1DTMKRowgxMrgGKNHRN3CzKr3WPj9nhqeuAKr94RxqpMBU4pPrzY7fgqUg96Pie5hVa1m",
  "key9": "3cnGVV4pkKWvTZS6e9P9XRSYmT9PPDUegQaTMmhsyzJFu5qYcnXpqne2wLWGrsUGBvXDdJKNMfukVZwdoZiHyK4D",
  "key10": "3HrgZt5pmSDCfQJMtdRB2maQNDQr36RdL7xyQA9WKEguBLudfAdFTskdbKL37GzteZfKn5ypE8M88E656bqRCWuB",
  "key11": "3kYFWykYVSe5RTjz1BKTnkkyUZ812PJvJKsfeAohGAdyQWaXhozzsEbTQLyQLZqKrHe3RU1mNnmBovLaWBBfiahB",
  "key12": "2QNvYBDFLhwJEmU2dFTYYFXfm1YnJK7HfKoSuSr5hJcHM1jdZdotFggUvFUfdYzQ4qA8iuofWyjaHPtmB5XacnzD",
  "key13": "CSEqMeNnSCekSW8oz5y7dCHjLrTGs3NA8pAnjxfjQ5odzLEk1R2tmNRXEa5jMFLcNnj6c6Pm6uGQwX665THku8u",
  "key14": "67BzrGYH6p9gBoMdu1qyERbEzQVR2HwVfZ3BCtvrufKubmQRL9CueAcmaSyRR3tiA8pKka7Ujv8j3mWNmzP84wVc",
  "key15": "3zb8DQJTLbSXw5zcFUg681kyqQCtHkAXRJjLpDS7t3FwMtjC4pkaYYYNsrEko311zVSK14stGkVerjWau2huUnT4",
  "key16": "4Z4UTJmi6DK9WaskeHsFpdh98RtAey6LSFcPfV7yLdP5uhxfyr6bjih9bX4zWBSjHh5HXMtF2JUJytxgzjdNNMYo",
  "key17": "nQv5TtS4ttDJMXQYuWBXMotdpNHawwAKs34hDYuR6PWZz3bcCGd3xydrWb6LuUmL1c2sdvJ2Pyv7qybaZqTWZmS",
  "key18": "5FLWWHHfFFBUkCLs4GX76pdzVJJcn3962yagi3KQQxkUPcdnCYe4mLRHj83oSC4rYoVQVBhHKnnUSgMxh7GYqY5N",
  "key19": "3iecbrSUydxEavUGS88bCGUUokUXik2gd8TwgQLqPczdgEgGjcRxJeMTohLMckD25HvzJJYH98BDtxBZoUfnH3m",
  "key20": "S36osCwCusRVauwRit9MdrjjSMnUJVHaTtvMVhLVcXAdN9PKRN36pNUudJfqjYHSK7qN3Cde1asLpD2YBH29vab",
  "key21": "4ZdntZXnTMj2AHyAiZi9PwfWA34L65DznSUavFRUz3Yr9wTVFbusCe2HZY8rwXx7qwRF56Nym5tnvcaRJp4Mdrs5",
  "key22": "2VhsJHyHbcjgCAh8x2VxqM3uXN9BF2M2KxYLX5URHVj5aSJpBNKuiBQb1g4mWzRRAaCQ9yCxebfp7PEkatiKVYMJ",
  "key23": "5vCQRPzrEMVqAcsXifVRUaqCtw2AJG7rEkdKcRF2bL64JnFgDHH76uvwyoge4p9gLu3AGb22bmrwmSnPPgiiy3wG",
  "key24": "2v9hNSqbxNZUcvyyJLvhqfuPbuEvpZHNu1wY67r7JRi65ZoXQy7cSKYt58fVh12PuPEgjCK2BoYwqh3UMD9hEqRx",
  "key25": "3bxt3gtMjMZe9uzfyQ9rByHHmtdeX9ov9P855yxMg31wdbandz6ooSHwuUG7UTVT371u8NsEpeiFd91CLV6Krfwo",
  "key26": "4oQNU8Kft5RcjUMmLi1ssCyx9MNYj5eGDtrvm4ZcKQvfZXFmhJGT2FCav668u1xS5ZcbundypzjZJDGcxKXuNgcv",
  "key27": "5CQL8YVbHTQZbBNJ13Xyp8wxVYLwPzCdoXZMC1oQqEVQhZ6ekxSnHAFjLZS2AP7uxsgWapBhq7VVd1xtbUS1tYeg",
  "key28": "4bHuvmcjiAYY1snVfcSoSKCdNi3eoafr6dBpS8iUJhggYYLJCkaTccbJ1sHG1LgJG39T68Y5FykZcW9euXTdh2yJ",
  "key29": "4yqSYw7D2wqgKr9VvvkDf6fPyeKbFHi87gMDtB9AShXr4YMgns7U6wypkQ8TjejtzQSbJLj2JFLXVGocTJffA8KK",
  "key30": "m1Vnqb71Yr5hv25EdjUWuDzrR2y6Kz1MWgBtiUAYnGYrwFCrJm3AGxR7aiR2AEjYkVtAYD6AnkqFqC9AC8XNe3q",
  "key31": "4PWFYEbJvZ7AB83HFsyNFbjSAyKJrdDAVz9TsiV9RmBRoT1dQ8TcjbPJuTCmwoc7tCvvsqds5MvQ3syx4tgPXDYb",
  "key32": "3xgrZZ8vzJyzRTfpXodW9jVFpRUwsx8znrUdjUqreZQ45JVEkXmf8JZoHPxnJUpwkZr3XdJMP33GCwuf1FzBNr1P",
  "key33": "3TKP87M1C2uQ1ZHTpo1x8bAG7fWZYtxqpN387vvQ4rD5UxSELEDcdTYZEz7TeC9uik7Xu8zK8oXSLXkvwJU5noXw",
  "key34": "5zmbmAoKr6C352y8vzmwkSkL3gJzcZXKiR4pKcH5VvkNA2Xbqx72WHA8UH8Xwf3Uer1S5W5LT7pxaFL9p6vW829R",
  "key35": "qRRZcZpWVKS8UPMe8WZzFMnoq3nZ84Kgg2Rw9LAYLMwMrEMvopVZLuRnBNAzohXbnBhBt5nT7W8grYsH3dWSaQJ",
  "key36": "3657HCd2srDFvwFDFQm5LQmLhEXkiB369j93BWHH3ke31okoBstz4Db8z6uvrVwqjoNjJTYMYcKZ8UCcKacTzUa",
  "key37": "4ZPDToHsj6VXaBjos39KAG81hKf7dYU7u7UfkE8ENSc6HTAG7aUkrdQnM9NrCPHuoNCBH1SNrqJ8PWQKqC5DRXMC"
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
