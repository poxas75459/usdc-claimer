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
    "59SVGy7WcSkLF5sUChh2jGb1hi2yXEMw4nLZUbGyndZNhej35BEszwvkmnd1eUzgEPY3f8gAB6QLdCwUAfhWcsqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5PUzhfbvPCUFEJibSLDEp9L1isa4uUSy2QLcnStUKb6GM7HtSk842h1gzdpm6W7vFMv3N8QjiEKjqwJXrtypMF",
  "key1": "5P19hB87DDsLg4e3nhjE57R8siMz3gokVTp42LWwMxqcDSR51mocE77uijDUCFR6nGfki9PTLbNLNo3kM1AhQSQd",
  "key2": "4LB5B5KeFZXcsPcUiwBz349Ukq1Bs9V4DW57WvWHikVTAdZSCDxuAy9kAG2ZAatZ9RXnp34dzuhu3b6yuGiELh5e",
  "key3": "4v1esmppK4DfkiuRSCvsMKZT5TcbPBLnBYwZLLtLVAV3FDnJN4vYNsGy4DhPxkArwJcPJ7WeZAynW5s8hLie5Wt1",
  "key4": "4pBELHWJtfjem7GDjR3ZGpouqFKkgkK6Q6r7WyuNDqfQ4tXgR18UpXecbTapjLBhDYT4wyLb2xBwQjmvfkaExHyj",
  "key5": "5z1SUeNySj8mij3uiv2YQjXpsrut8QTzCACz9fCsdJbd7ZToQ2kGF2iekzKmS14U4dEvDgDUERZ3pBi3oTFyBwe",
  "key6": "3JxWDHfyYmpF7f7N86J788FvazuDpVzHqxBUxhRdgGpPaRnPgodnnsxvt2RrdKMuT78desvtwY37DhTLV1hiUXZA",
  "key7": "4CEUAEjhi3QBjTGPZrgY16ENWKpre2zvTiwg7VzEiYXqUpAHcweKmd4KVoDVh3QidY6czqftujGJmnfKTydem1vW",
  "key8": "3sGt65rQACHk2xCwXc9FmZTmxQmPRF29d2JZox7fPjJeHJqQPQRMv9V3hhH1x6veiiQ1YDeZWewjYf3T2EJjERo5",
  "key9": "3V92Bz5ryAoaQd7V5qvbEAGLkNUVzgNJmnDznMjpnkeWkLWYHsXNEmv7o2Y16fMUQbGgp2NP5kuCso4U6gbx3B3f",
  "key10": "2s3boHdD8zdF93rrqsh4HdjxudEetHApuJhKKtSjdriL8WWpjhvih7WR8ofVieDdAfYaGhqy1h35t9KeDHtYW7oU",
  "key11": "5bWmf5iNVEjLCvwV3WLkt7i2LrZPXUKLsdrQqeWcqkBT8U48Zu57Pn5tbSkuvmaUmvtxadHGwdKZLaBK5E1HXTK8",
  "key12": "4eu983mYB2ECWeXTtmBwU8GNWyumgmtCWMAXnQBH1uvxBqCh6LMU2uqydnMqVFqLge4JZppQUYtc6hntu6reihFH",
  "key13": "5h6tzHnEEvzyFoVGAvqGoMUBxbVx8u9uSf8SeECXRU8FU12nVHUi7jZEdK7vKvwm2o32T5RVpMy367YpNPuqqGKz",
  "key14": "2eASJ39b61QDq1dik6WuUyVavd9Q7X1DqAYmMiG1HKi4XW6BgnzoEoZV7QnN9Xdy7b697fwppu2r5H5EXZuyY3bT",
  "key15": "3BZNrFVEm3zmUqKmkp16RZiXrnaKMf9uHif6XpQ6z5engJvTxDMpw8eC7WRgyboExBm4pfSiiHweGohk4UVAzGjP",
  "key16": "381BRDEWT4AjV7mbGHvzxYWht1wbejWEbPNMLFr9E9CtdvW2eZ3MERfQSNoeyK9uN1ciWJCTALDQ5ith2bJfavEY",
  "key17": "2X4dqBwEtQs3WFogFLHF8j8gfzQ65xtXU85VfgaR3ZD84D1Vni4GiHnswoUNcJiS4WFWSghQkFuRBcYuirdwiWt4",
  "key18": "2x3fozWzuM51Kp5ZbKavMEw2dnmjjuvPsVWT7EipjA6mWg9d4DibHKqEw6ua7dAtGtdVd2Bk5wwkF9f2b4iSKDAc",
  "key19": "MXWMsrFDdioDqb3P7i19tfivRous7EX3HTSNHX1xV9wSSjvQmDt3hCLmefSS6mbNj53ArkmD8tPLaHJqoFX1NQ5",
  "key20": "4R8uftQAqgF5m85QDmaLLANCYy4ARt8B6uM7jXzrsfgYP9JUAQmhxUfgbSvuLm5YivLBfgMJjEu8EN2XQzNDcZpD",
  "key21": "3aFD4bJP2XKU84xednDSCuYsM6YcRG5fY4FPLjYE9tW3CDtFhavpsxrjwu4utCoQupTCASgVNU7KZZiKd9ECQ2yT",
  "key22": "5tUbbYsGq9zbn27w9nVTFvipDAVyPddnamWW6E41YR3g7JGfvmP3Y7FFe4eZcXasp3gNgogbzs36CgRh2XvYBdRS",
  "key23": "z5mQwe4is9v8ustVgYDbCR5ToFxEVyWHjhnA2pMu8rgMqni4AaJ9S4KMHaNi9FMuAm8WPhWvuuYHUkSh94f6eVC",
  "key24": "43UpgGQ3JrxzgeE7uwL3Nm9gSV416cg7N8tEXBVRSogesiKeGJJFJeeZmTkyqc8WZHocSihVKvFhVeiRYaCKsZYa",
  "key25": "qkkm8XpA2QTEWDs6rUd5Zy4iDJY9ctsTXFxCDm5PSQdZQsAzNa123n3AN64FiDfB3RmBZ8ErApQpe54MtWruexd",
  "key26": "NFiHUr6FyCyyqNYv3T5WPBKhkEDuNEywv1mmtkrWo9c2km8Yy46Dn6horg9kMhTpwx73qmrTJzQpesDkRnFY8wo",
  "key27": "3Ew2kPTL6GKw96yMVWoyNAiyrFHTcZ1TsEjXoaMVYPxXAofqoeefwCEcXqQj3VftMy6mdYrPqc5BK9ZECNhRw4bp",
  "key28": "4ZKPdcbeBiyMhqcQJaBLRXX8JQpojsbMKZRCqMmcSLkW9yWZFFiDEjJ6PFpe7T21sptkqxyGscimJBxXCGxcpKpy",
  "key29": "5Hf1LeZvqYPZomM8dwmGkbyCHy21BTVrJQ6EnPYdx5WEGoJTKgoRTkxf2Sy5c4dfbyJw3knxEKJ5r19N4GT4grg9",
  "key30": "5DzYnxGzKaNKXxskTTKbNU8RDXgfTXm17GYmqpUJKfRqYUe31JS136p29bseZLh8Li9SdBBJYjFKEfTTnrkPQDW5",
  "key31": "q5fNchvpoH3Bz3tFbGG7q7WyU8TSAqPfkh5TBhZfdqQnvvwMwakns8eJjGHgwiGkHJHhPYc1t53r9czTLkZ2bHU",
  "key32": "5z9HTyfUy1mDHL7yGzzwfXQkSp5aiYbDvhFA5TUX4fuxUYwowjMmMeKDGmA8cDBjQ7RxqgZ1cEBeFSyCVqP33tN9",
  "key33": "2nWerECv2SRhktik3rR2eBWWsnC83DLUtUb22SeAGzoATFpBRUDXN4s3gxH6dG2tFXBKCRAFKrimyLc35EC6QjQD"
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
