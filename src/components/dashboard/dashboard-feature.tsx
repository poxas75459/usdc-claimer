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
    "jvx7CHCLnsR5TeF9V8P3ituNjrsLu2dwrT55YYuUXe3ZxRq6jtH6U9siLWnZTQ9wDfPWVXFGkvBz5g4hXe3qE4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EgyuNmBBhPot7cacSNGhxdoDqHDUcWbh42RGeNdXJpRL2mWhnTLtdB1e7BRpWLu4xviFMtLm41GyiWTm5Vku4mm",
  "key1": "3JAeVnEMy65tQ4z8dNQjsf61W6KTYZt64LXawhXrS6YWmDrjtuezuKh2vjYGoX61tjC8XUwgag2f5a9V9gXTxnmy",
  "key2": "4qq4N4W1RFNhkkzHbAKw7WyZXpKKc9Qn7c9CAye95FdodQGpaikzjgJEDwrEjb1kSYqjkUyEzZ82BbZG1LHiXeE8",
  "key3": "RXh8fHjpDjmLDQCw327b1p7mhJGa7dyHwBRd8i43peWHc7nBi1xaqwrfn3iY83Y5KCrnVHj6iUcdEm76GNphhzk",
  "key4": "2cqEHYhjCR2uqHnhYcmRcFqPUh9Q7JdZe92h9Ya5SBCEFhjLAzbUvPLJi7pMQLupfVjviuwZZz4KTaYUGJShDyCX",
  "key5": "5dBKU66TH6yoXGWHhwMvrATo73P9YDAxGspYuwDq1iJWHnqEivk5d5ap2AmTNPSeYEia8EJyvdsEgx7DkPkqmJ25",
  "key6": "3zLJy3TfQmF3wBmK5ZYk5m5pEHTBXDdqwMqwp7mN5KuozLcFXL2Cj4Q59mpLR7x8CmqbZmZw1LfDDmVkfyyQNALG",
  "key7": "2qsxm87B3Pt26Kt2jFVAh6bepoM8QBQixxgbyKc6WHrEhYi89zyQjE1ZHK3VHoUWJLKGZQL25Dew7MF5KjhrYGyd",
  "key8": "Ses5BvEvfVFGrQo7Vj9MfhUrTA1dNVjrxvN5hTEZDnVex4TYk6RYpFNx8pHZj9pDPayfFf7HnLRYPbx6e7LLihH",
  "key9": "61aw9JkF2mDBgiCATBSfjDQ1VYPx4KCL9BtMGtG6DvRbcBgu5QQS9j2Myg7nreVnidwbf9iUchN66F9p9H3pMSeH",
  "key10": "yAdX9hr8GEfsATPb9vGeYqeqYUCXwhUhtKPStLR5oj6eCBX3YdSzvTND3e1XLJ7urYERuyXNcyA8BDcHsNZ5qjn",
  "key11": "3qaaibhRdcnEspKodbdjnhF96DuzjDEfcBYHUcj7yTuAsPadwRZVx95Ys83qUAJqWmRSupfeM2eUT6GEUrcTeTFA",
  "key12": "NRdSLCFqJYVvcPG3rwoG64aHmLf614x3C16WRa5mE5wCDKrjNG5eTp5N626CsGbjKfFUKhzqCZkeZaGM8ewX4o5",
  "key13": "2TmpD9rjZcN9QsZRoRR4koKVgvx27TmWqXiDxMEZYutpbEZPL1UA26dtp6GgkWkyF4XxVrj3B9u579eFoKYyThph",
  "key14": "4yMbNW5SZbgZERwuGEFXy1eYNzudmCerrrvyFHixF5BKqXqoZifus5cxafauGpn9fwYyGxbrzFEvqT6jfidEJ5en",
  "key15": "5Wo7NyeNVRb4aLB3c9kM9etbFcczE4zDQ9bnN5jvR3NtZX8teDononmtaDtBZJbDQWEP8kL7deH7TF3nhtjGayTn",
  "key16": "4nMBjG4Lpv81FrMY5Svj5YA11V87HidD7Aw7hbN8D4UwBizbjNKZYgbsBnD5nwg1LCQ2PUqRDbYgYKtz1W6Q29Jg",
  "key17": "3wKQqNYyfd7MC1yTBZg9D35aoDqFMwnUeeqayCvaLe6JrHm4WVxUeJFXfM1awUa7YrLB3vQQtAMetzfxzjuJ95km",
  "key18": "3wpSVvuecteeqaJkBpMTTELnyiBgmoutfr37ELhS3M4eKzh9obnoLumzsur7ZBqv6SpxjU77kZ5syZzNETkwW4ot",
  "key19": "5uUmKiYAyqtcQoDagwprErA2i4teMMCUxvLcBfhMcNPMASTkbT8hW6d47pfQjvx2JfCAHhSxNiqxnwJiRVSM4cBM",
  "key20": "5BrWo2EQyV5R5m2CbsGYpa8TTrQK1fiBD7zijQj8MX8v9zvgCSuA6YBbk1sK2uBc13Vza6UZG2ejD8ZTPTXv6vPy",
  "key21": "YpErHP5hA7WS3C57fitpYMxKCLC1PzaBX5VRRZV6bs8MoCqqBfAEvVVCLSw542F5m4shRujJPuKrvmRydndQSLZ",
  "key22": "2zvD4E7JxcbqgEt9hm7skr54EpuJb7npCGFi8d79wze5GXZZovk1g9J5cT7NSdmwEeRNR5UUuUcyhM8frud95pDg",
  "key23": "2TFFTRRYgjSgCCaLAtHuAKTzz2VPqCyU89N5nYvUPd28b8H4rxkHU4E8QwzYt3SvYJnvy9Qoi5GtVK6vtPxzbdm3",
  "key24": "3TWPzunT8C1WV7626BMmJZK27n58XE1dzuLiy3opWxjaK3vTtM5LZkep5ywhDdtuBSU7CaMW7tXeox8ik58CaSWL",
  "key25": "2eTib54Jp732WRUDMBZL8n6LUBEkCz62HPTYHpkXNE1ZJrTiZG64Gc5UyqvhWwuJxpFXrQKdcfjUYnHuCrbskVtv",
  "key26": "2p3DkSBF14du3HmzxZLVZdSdyBVwqGNG9tWQfrYWHL8WjcfN2Yb9Jx1CAzmEsv2tBT1g3TR5aHTb5PFJMcsETBNa",
  "key27": "4fKJysd9PZmf1hbxt21pGvcc68K3G3ueSRZ8uHmWh7LUXdpDkfcjVECu5QkFbRc4fzMjFvcUQ9iJJ3tncJy8io6T",
  "key28": "5wHcDaxrDpjwQZZwXcb9kEd1kBW4vVgNW1kZVNyAFZTBcpQXZpvZq76K2KmqCxpS4idFg2CtTU3W4BrjxNR1fT2N",
  "key29": "3C7qLV6226tkkSVgjTChEBkoL3kVoW7tvySSFmvQCJTZRBagCrER7ggy1WvY1G8tCjCqd5E335HPotS7cKAxvYCT",
  "key30": "7naPiGyQPNehQsA8cEhVVTqgbfKTQ6gdCfsGciwwAnjjqQArpUMSJpw1js1A6c29kQ4qEoJ7G2YXZXvW2Wbvj7G",
  "key31": "5ECG1FvuLQ1znsCZng8NwZvHRWoNRW7gemK3bWeiS43X6oXkk2UtZF2cFkETY3zN7mSQZZ5rrvqjrFk6NeRVJZi9",
  "key32": "3oXxhQEFTX2KwUsQpYEsc38XQpvvDpMCoHv85tqdh4sWgWtySWYeyPJR5CdMjFquxraJJbmw2h8DNfYdqxcY6fCT",
  "key33": "UVjG5z4ac3riS7SttpkxoX2WEEuetAwa1CQcQFxtgjAjp9YKBRPBeqUniQAU7DFAACb4xx6ywDDNLwG57fpFDXx",
  "key34": "3j8Vq3r9cQ1k9UiiSzkonTNARr3yGtNUsyeNKZdWXgBQ9YbJtWqQyXwAt4YsymvkMEe83bQybupXEfhp5o2pcSLQ",
  "key35": "5dTfZhEXuMArt2zfqQSsDNRPXqHC9Wh8SQzvAK28fDta4KymNCjD7g25TCXEv6krcEDMDeaDhh5hFqH4a4FLRt3d",
  "key36": "2y6mQQ1HRoP1ktBhiibS47M7xcNnExtXdvwKjZ69ygJUFYfh24uzrpDCJ4rBzYxBHUYqiEZzhv47uvsGnFKP9gbZ",
  "key37": "3Z5AapdWgFijfDjCzPYqCRwg6BP8HfLcuTCeJP6jAEifFueFsEAyg8b7BBfPYj4wnbCmqwtLf8M5b2W4SiYnHRK1",
  "key38": "4KJwpLmuFZv1gYjSsLAdbe6yhhjiJbjfxLXDtaUZSg1a9g4euWJP537D75qm4chVcUgyzc4aXRjVsvA3GvZpz1KM",
  "key39": "4JMYETenVTU35yXffUQCezXC8cYpbDJjm6eJFNuSpaikB1uJ35h3KvKsocBPzG2quiRnUg5FyRFKPJXBk2yahkhZ",
  "key40": "3a8b4vC3n97VdbephmRmAZuG2HugupwJSprbBCepR4tM2iGtqypfKqxKbfYyD8Dd8mKEHGYyzQUjwaxGSU1XzMmQ",
  "key41": "2JECpUcEnVzgxgXFNWwVAwzoKEC1i3u7BZWiGcBgRnr2V5P1FZVWFA9zWxe1gVjJ8fwePThJcrNwST5VMRVzc4GL",
  "key42": "24b7QFE7pGpyWdh4TWmVGDysyYsMX5uUK1qiCCSwKLgZSqMJRWEJwDAXsy6nMN72PpZyZCURY5R5xb9fXwh1Qg92",
  "key43": "5dCACSBD5QZD6mp9SVB9ds43Gv6uzu3XBgyZj6BdevGCAo1QA4bQC4MhtKVYkSv65ejZy62dByJG61S844GyCWYV",
  "key44": "yaEMJ1Lf89Bt1QTcmLrnUV6xwCaT59w7gYhT6oxpfwoHZwaDhx5Uo2KipwRXbXcL5YnMihewMsYh2PoJ76EojvG",
  "key45": "2qaXNdZGapabQEGTS3LDDoQjwpD7Fz5gJBF7XLVGgg3mFtrZoZgWLcKkgy918arnqHiLRVxZb3WLjerz9oNRmkj9"
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
