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
    "2V5J9CVs4FdUuqLqoX9SVb47gsaKQuk4tKX7YtKCRNJaJVrx12iVjqfNEGtVEuWz1VLBxEB9uQVkm2UD2CJ2VyLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJqVXgbkHFn7d5FkzZcMLk5ySGeWQQhrSsgb1qMBQCekxkHDV6ZSW8ZjiBeg793WgpVtaUGroD9m63PU4HrkFhS",
  "key1": "5HU5ZEAf6zuBWA9c5eTZ52oXm7RCQvfHtJuHBnWkGhSHVddhk5bW6Zvq8CEErWG49DLCCDHpWkn3oQMC3q1isd59",
  "key2": "TgRh4YnWgAxFpugnT6yaCobRYP5Fcqrh19QaCb6wu5C4J1asfmqDLkJMWWjr5R1HJQ1kxd75GAq34gwsgPxYU6S",
  "key3": "35F7gXhdsTfRqWFfE4xSQFWAycGe339eAYQkM4qsv3jh84hoYsVVWGzFZuT7fXU78eo9pek9DF7UsBXGy9R7HoUG",
  "key4": "2wbNjxbFaFcE5VoozkWNoLpoqXVAzK27E6V6s7ndroSTgcV9bfCiM2fEKLFyqCJPUdrcEZCGqLeAdCZhwMiQBwox",
  "key5": "5E3GCrTweSuUMgv6dr6sf4iCK5DazeeoC9yNR3AycMcnopW7TgPnVKewqw4NKYZ14HDj15vnxqxH1WS2N85BXrpi",
  "key6": "2whEkj6sc3TwTZKJ9VD5k6c2MYXrLiGG79ihsy3cmnZgyhQREgHwJzvWnJ5UPfDC7XAkPYfDjsNMKgM8QYRBxqNh",
  "key7": "3Qq5jk9iRRDhQ1J6Z9Eo44iroXwEXSCi7ViXRr8KTtPayoVAAncUcaA8uEg3eLLJDMZN5vP5sK7uk7XQUEZnTFSf",
  "key8": "5UFJSs4Vut443ek4oP9RqJ2jPutCqvDdCfMgTrsxjHhFz36nK1A1MsKLXyevhphgwaQf8ajAK3YJGnHJbquLmNta",
  "key9": "2bvfnJAGDuGtuvcbVJThqnunjXHnzdieibGcHg17Fy71uZyznJSnudaRQGGYcc86rvcQ8PQzoc4kSyjdztzWP7G9",
  "key10": "3L1ytDus7XXcDAtvLRJA828puLVKRq9tEJ1DGUTzbphF18mGGXEsp1WsJ19bxXGrjrNVXcUcSz1tRaCi777EmzgP",
  "key11": "2qfm52GiswyA5bzeEy6qY8uCu2Eo76zn2ykf6potn9uZSvrcWPr9M6955oRYeL8MC8qa8okP6HJKV38FqBymcvpH",
  "key12": "ofepv4QJZVHMJtvPg5GbtpJvPSzzAc3MpWLcD4F3D1gd14kjG19zn4nSc5ZgjMtVCZHf1yBnnSc8KGviwPFZ319",
  "key13": "7wyjDkP7sSrRBdRh4kBbVovnujaLop2w54PyrKvycPadnudGRALXKsb9eDSHhipgtSwuQA2mzQ3vUFSE4gcyCNT",
  "key14": "82FQNZfDnhr94S1exojpLorfaG9sVb3tK9yzbW7LAhTppabntY5YiGd2pmT4eB8V7oeLHeBuCrGf3Fq36UK4cZf",
  "key15": "4H8WbGxiMcXap1JhYYUK4KWKJfWjxZ9KHQ675ZvwRmYEdbMmLhWAA8UvMBLrvejjuvAfeXF3B3t9y6JqFmV4WqiB",
  "key16": "4daSCToyPPUjHeovaEq2MTqj2Eb4kiUxNs9HP6nnNv4YhuzCVpQiG9vdZxy3F2m37xau1fujmzRkyTweG9ndaARy",
  "key17": "UDvmhV1rsnf3aaQNLL6JFTkTrdgF23baNigr5scBQkbri9WfyVuAjTbpaZxed4Tqey7ZBVXnXtLFkEMtiZpnrXx",
  "key18": "2skUw2UfUnvMJkytKrg6z1AFDTFNBWL8nmryPFX4b6kgB84aYnZCzjHXbBSqSSqoL5wZETqH79jbDYmnG7vuuEkL",
  "key19": "5pkbMsHN5ymqNTFzocrukhw1EMK5NFsRBnwNYbmVBr7fwPShHXrf62xEof2iismycBmKk8irXUwj24bASt3jmtmg",
  "key20": "3SybMfrdvGR8rQ3Q1pYbdUzSwMsHaTsW7Qsd9QDH35e9gMXQPd2KdDnEvSbwZDN4ikabTtq2gSSnC8KUCSpDxXZA",
  "key21": "4zc8R4PpWkEBep4yycshw28wfeguRpDd1hfPPTHk9n1bPwWTfBHhCYYRzQxnPkWHCfXnxDr1EC5EXHdmd9EZTGF6",
  "key22": "3MGdusBzpzDUP4nm3GM1tpqqEkjYQDbvA6Zy6CEyz4fen8j1vvSu8geW5Ajk5WKfpjrAFwddxvHWC3JQKn92nv1m",
  "key23": "3Hu49T99nuV2tskkoZ7KyzK44t8DncU36gLdZCwqZSgPKPJfpMF48jLVZof1dfk2UtBBtRZ4hhsbX3LhuQpF25vz",
  "key24": "2F1P6YHnJVkovRjLuaJ55YPVsBAx4p2nQzbmKb1xB9TJojfc1njNBHF5DCSo7i3kVDRNeefm1D84fkubHkhLPSjw",
  "key25": "2jjA6Df2kxKNvUyYybEgNd3DrbPUki1ng9MU1qTo7NPSt6ZZWeMHerwok2zs7HNhB4dwAzys977LZcVstaRqbjRx",
  "key26": "wLbKywzjqUmqVT1hmaCwkJC8GTMaLMZ9dsVssaqQ5t6WMpg2p2bZPLF4f9UbM8Ngexj8nmNNgSyJ6PE7WR436bH",
  "key27": "DEjuRvXYprAN5e1Gg4pAnGizkPpWTUpyTX8nbpkobTZga5FFkdwVMkpFV719p9DW2WMmKRMRYktdh45Qh7wBKWW",
  "key28": "4LRFbLbt159u7gsupEhPMN4QxDFUT9STt6NkNRhBY1uCVYPwc9iLQeS9KRYbVCVdTsqQbfqeeDwqSVtBcHB3J3Rg",
  "key29": "4eDGHg3xL7dvDMJjPstmp7PqcCXHag6tbP541VSFvuHUZahvVvbu8yATedqgYwjwgXKDQCD2QPK2qaGvzeinweLX",
  "key30": "4R1tZ8L6QVgC1cBtUDMAZrEFXGDLCuockG1y459Gp1S9p19Nji6gV5CkVBGXL1oNiiJst6JsSySDhYbVoP9SqLvZ",
  "key31": "2jrrS8zTtqTDXz7bsWFygxf5oPePL1dThVmYGtLqhN4uBcKRqZHGkZRXQqah96JFHG44ycxGfPpxYj9c7W4VmuaP",
  "key32": "zKWdbkdybcZTLeG7XfHPhJVJJKRAQVdUm5LcdgdBju9HjSEPDZmfZ4Wtvi6f7yFJjkLNiZ1hznQFS3ts5vKeCuB",
  "key33": "2VXAHrCg6ZyNUroTP2qvDJciuhAjXK215iG8CwCnYBuiJAXCnfoHQzaXmnbCtHe9PbFQSABLhm8KSu7H1nvNcyd1",
  "key34": "5YDV6AFE2HaLuu5GYpH6JvgxkbCc4HaRKicAa9oHRbERP9fTUUTAYqb2ZBzR6iKeHG48wKnsZTS7ytagKB1XJ2vt",
  "key35": "54pCakf4CMotv4VrGDxkW8bfdvSF3vCzGtAeTyQ8krj3aHFxJYJ2RWhwVJPvbBvdUfiTDcaZUJTZgXX7escRvHiL",
  "key36": "N2ztHwbL7wDm8jn211KS3B5T8iWxbBWvLYNS5ENnEFPvPMCtXZbCD9uSkP3pnuohw5hukghfupE4wgwPLyvs7Ub",
  "key37": "4aDeuZZp8ZFT3xNdfACvuRvGJVRdbRPJvNguz5yCNLZQhhRCG7iUoMDCncSProouBYsZiB8Be8Agr8y6cNiXFKUZ",
  "key38": "4iCYnQvLo8d1ro41e9zo1p48vS2yyfFXKh7NR5N8KeC9UecSwg7Y8ybLyDJodQKK7EPqyiTsfvN7MtELFtxhCayn",
  "key39": "3XPYrWh9gjLYszbJowLLaotUDF6kBH3XqHmiSfm5gcMXbnQPYxXDZaW7po1d1z44Qn8euQi6e8EJz8nuHT9Z4mvn",
  "key40": "26urRcrLGL3Uk4WXtv7dpg8nsEFXcqQAZi2c8pGBYjpSyznRSYLTyPGp72Y8VhAtMEYGJzCj8rJPqDN6hCRsm8es",
  "key41": "5QmH6UP9xTa6pNV4zminfbyYvByiH5W2mJJMdccWbhYvKEfZs45sGERz2yZKBcKLaWrQFAjfarDdHStuo9pQ5jf5",
  "key42": "5pqTtFyLQf2Hqb9gVvLXb8fx7u1M5yhG8FbushBXxGMRPph8tWqWz2cPUj8vXRhiFGt57Tu6FociT4Bpasf3TFH5",
  "key43": "4BbGoGtMHnr9b3T9CGctqx1qR5MaS1CKSiN3D8c7avuoPhj8p33iSfP1Qk4h3NpmUAqQcVWKFQk9tnnSE7hzLXDC",
  "key44": "5ig3VfDm2nQGM92nKNTQsjgPpqrwkMzfZk927ocD8fHu3e8krqz9AAdNzvE6152iyiqbkVLe4sf92NkqfoVgcVTZ",
  "key45": "56D7ygLTYmeamjBybxaRePreipcoVYKGBagoruUB54fvR7u3TEM9QvGyTUGDCWLswVgdZDvCr1jbRAUfH9MafDuA",
  "key46": "9LWyhmmASNXp9xE7mrz2EDwDAeJQ9hdi9SJfgCTNnZF8n1s44t6B3DqSmTAx2BEa9RvC5KhaMVHzXDYrCmparwr",
  "key47": "3AaRPoQ4tuUXsy8LL9Mxk1KuWqcp954nP1wyyTVqw1R2GddkypwicnAZS9tuFcLqeJnm4CLz3j94WfqMRkBkG7Bc",
  "key48": "M3EkVLDZarvMMs9wRb2j2Lp1vR1WjsbnSskVDQqmaeLe9VVfDfxmPfDHCX56moWdzwsvWfu5QTJVb28v3MsoYWz"
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
