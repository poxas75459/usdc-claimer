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
    "2sHmXP1TveAEjdL4UL6DDWqjHueM3uncsqEz4bgcx2uzxdrjLD5bwXUg8Pc3jc4xzQXAbaKF37nEf8wT5KKiGpjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWTkmVYYF13anCkJL3XgBHbtGJxciAP8xYKBrhiJmtwVzZ2rv4vsyGYw7ZzNGPmLmFyUsQk3hfbe2kgTDZPjUVi",
  "key1": "5YCmH49uWd7iNvzdHRkcDg65C3wmxYbvmRsnbLQSy9GZtsSSFMz1DyR65rtdY9fE7PRYXpLz29VkwBXjrQQpBShu",
  "key2": "4tGkB9XyRrdrj1LVjuTsnuNPU9QNUmtF4NFUqCGpZy6vDuEP6fG9xjYUymjEtCGgqyqiQBvoNxshU7VLHp8LRzNF",
  "key3": "5TQ5XQNApcYS6hpVi86JCQoYfrNw3zwNxuQkwbNRRaTbi1xK7QFagTzSeCqspEA2Sb1EfcD5bitz8tymAz6Mab2u",
  "key4": "4RnYSrL4tc1XUM11xnBdEhd5ZKzC2iEVYsTc8fZVtjRHPx8Mm6XSBAneXjisnZboyYvuh6AAJffAQPq9Xb8gcauL",
  "key5": "5Qxs5ZyFpHGUKKaW9iL18rJ2dLuYxyT6H5N1mPCqWqazo5uaZiKHB3oWtfr6qHpH3XX63Q1hHGYDS6tvh6rKR79q",
  "key6": "5HFYv9159Hdd95WGFKHnJhMx29CDiFFonWTc14DVpT6PVoUp83ThuhJzSYdoB19WX1XerowQqiwcFvkZ3hJk6ZLG",
  "key7": "nNAWCGugzka52MvexpuB4zxcU6WSEi2FX6J4qUjpduzWwkTwYQdCz8XHXE3kQF5DwAAJKKhdPACWwCfNmcxis8n",
  "key8": "KNyorjHK5DtExbhdgoB53EFtE6d52rkhiHrEq5k87XfsbtCw8gdwZ8sNh3CdNZGEifvqt1WQBtfjAd6vspZERks",
  "key9": "4jQcFbWPjmeQQp49Vdxg2JgYXzfxmhmrAsxB381yXvUgr27YAmSjsrA9y7tw5Ex8hsAQH6hLFxXH6qDKimyoxx54",
  "key10": "5if2HioZFJyZVLq2Ui4mg5y9EgWgXZ6Ld11WWdaGyVT5sGDTmY4gJcW1cvibDpe5snsX3KN1gih4qvDxuyfP7BFi",
  "key11": "53mauT4VUrdgeU8CqWgDSVUw2tLwMakXnvYbX4fiG8rQxDnT45hWgEy7QyxFH5JwtBtGvrYAyytxA4jV7b9V7Lj3",
  "key12": "32K6rqeBzoeJY48uADKv7DfLkiusHnwiEwLVzspVQfFW1b4rSrKrEVXQiTmWzpwtRnGPtCT5EAzEjyWvNaWxems5",
  "key13": "5DbB9t77RPKtTf9emmK3A1NivJE4qK2cJ9YAz8a49n662Ntn9DBvHKw8zDTpyQ7PcJHhwxYmGGNtbFcubcV7gA3Z",
  "key14": "5noZTLWmwA3vy2q6mU6kXHhAqM5jnMy4D2cxWTwUDAJN7V2J3tosgpEpXAmPn55CCTknsYNMNsUxBnXbpkUHBvLu",
  "key15": "5AamK4jU1Wu7TRfmov4swZ7LBvWStP8maEDEWPprxnRkMaNofQMqVVLrNs9ToXDQgWzJJiPeXVFDWRfReGRBV8HQ",
  "key16": "2VHicZ9BJdcD9zDS1Fu9jBHRfmAWUhAnBGaw7S63cWBYjUPjTugYCz4wu3iYyknz4qWNXA2dPvFeSysY8PPcESry",
  "key17": "2yWBqh3rt9vQgGfsNbT5x1DKw4aGQDsWS9GsSyYdLRXKEPsxZYjij6Hb84g9XGqtp9iqyKDEupgXi5GDfZ8UotT7",
  "key18": "5UiVE14Fghs65R6XUdSH3uhQjXbckx2n3p6kvSrisCZij6aTayfgzcXUyhjoqV7xf5Rnnnuh6XpvqvotKS6ex617",
  "key19": "N79pL78wNB7QCgSMpRvYSzwAcDxB5dzW6F95wHD4KctobPgK4YXKVZAHdmMhVDfH4QSypnXwCqVaXSkVhCeCyfB",
  "key20": "4aPRgcF5Kv86wZPTuEkbRzu9WH5SHsU9ZmXhosvRRs3LfXJ8Kq74orAnLQ49mbxLBLH8Lw2AxXTnxZ5a8Kj8VB7J",
  "key21": "5tMmRqsKfjQ8pGgQd7g1qvujePGujxTxLtwaRvvwMUg6Lu3PWGFVynZpdFFFGoEpnNCNg7mdA9ASzvx36nsiTdYb",
  "key22": "2BpL8JXzDoEyEGXcd4dh8oncF4bbJafqobDrNK7md9bYBYaDM1MCJ8mPQGZUsEkZbPX8XRRrYn1pPVAvtE8yoE1T",
  "key23": "4smCm9PQ3PG5nmLs7LPWsfdJJYpgcDeu5tKWBWmAU8SoFCmfEbc4UeLbPDGcBQWZ1anHueM1ci1mhfYJ62EZLRUi",
  "key24": "yZKnZUKhm1FSfSTsjhRzDaRj9frJUGiAnFAnV3VV5uHheR8H8Jey5Ky1JVd8BvypTZjLdWQsUQyV5t8t7zXjS2p",
  "key25": "5m47kFdYCzntz1pxufpVbsZMsa7LHF81e3SKedJj53vgKHuohPd7AqeCt3tKY9kmgufFNMpWvXdJWFftoijEE5qc",
  "key26": "666RKg1i8dxoiDTwju7udVsSF1pC7HQhTyMy8vRuumkv4b7kZ7p6w1eo6wvnpvbBdTwcj3TNM8Rmq1YKj9HvaaRR",
  "key27": "3bZ36uu4zGF49ifX6zfoqBfpDLd2DT2LiLj23jzh2vXMNxTwGJTMvCasyLhNCuak17p32sZyBpzFke48HK38iBqC",
  "key28": "5phz3uKx9VvHcSgvwSPGLLSeE4PxzUccEYZN6qrLVUbFNDEwfK4W3j6kSQZMFbvpdgHbg2WxGuvZFPjVikn9TEqS",
  "key29": "484UPpZkiyjwzSiE1TDm5midcHaGJYqBXfs9RPCLgnd2WhetxAR3VMqdEzLoAVhUBUEJf4XLrPSDWxBrbJj9ob2m",
  "key30": "RTxNch8TfzuArNLcreKgPiwnDnZfxmC8D2SSk1wQQWvuB2VqT3jximrXdQDvviR45x9veJSy1d8LSJZgeXwkhrS",
  "key31": "28Rw2RTJC5Bx1ovcYPDHwwmKvfeJXcPkpJhLSyNFWYfYhe56DA7bHSNF7yAc2nGtvcpSSQYikizofTDToswHPkKh",
  "key32": "2MydpDgJMLj7a5u8oRr63Nd2g5eWHVZbwDrDxmgTtKHwmnEi4qcituJove5htm3mHV1jPS63P97dqUtQzCakxBrv",
  "key33": "4SQgk4JmugxUkX69Fj2hBSSskPyMxWUm3cnR9mt7qtwMjpnaKAfhDb5qdcSdsCChKcKF8iZp39o27Ckq3hUkWGVe",
  "key34": "2B6uLRhGD2siPbsoQZYbCa4tytomEDBpXMruAUUmYiYzCcpYjJvTXfPdxaZm4GvAgFb6ePbsjYXxZXNs8kKzRZku",
  "key35": "3VYoCpL2mqAYFYvSA79JvVSn8DC5tGkahU7rU42vkkD38y7gvgcUZtrgxoRfk8AMVoVknTDTKFaWTdbuCVdcYF8C",
  "key36": "4u1S66uBmbotm24Pj5nc8BYi9BpSMvjQSArNYDkPAaYdwqj2wDsADkkTkQoAkkX71kWd6BTWodK78oxosm9aTukJ",
  "key37": "4LjiVCAp1qU2t3VKF9tjiDvHtUN1aMD2EZmZAZ7gwU6Rfttiy5JfhVQ3Y9ygeRSHX1hAgnYKDaf7ouWvc31ozUm2",
  "key38": "5QDeXszYvmkk5iUqCbMXkWruTXUTL4Bt5bCNcHeUcrS5p72u2AeLz3Bwg64ywrfUZEBEhwLAQiABLh1EhGp9k2PB",
  "key39": "4d77xJ9jDgGuVaX3ZZzDq7QFjpQKDMexmqKRZabCXay71CtxmQBo33JS5Ah8YFTsQvC3XA5kc6m7R77VkjX9PGgP",
  "key40": "39sB7XYKcZTfqkMhKhYeKSfFcJyhjbFhLBJScvkPP2JJDD46S1xjMcvTFKSp5PGQeBfovzbysz1kHKGULDPxbaDT",
  "key41": "3hMPpQAvVc8WkVqvofkBQRwBLe4kJWv4D6DuEBMzWoB9jVkU1Q27Cs38NzRT4whnHnmB5YJM6rwaEg9yyZCCZoba",
  "key42": "4NMeXqaneSH5MKg9PF8WF8qtbucZsPgoSNgEL8MLDBf7qE6bsJhnmV5QzetwiayB4rxBXre6HZhwqVTPmsuScQvj",
  "key43": "329R7AU89XgkmZmYkFxDuo9icMDWTsPC8uqtYNWPLiVtXQJZLmG5XXnXTZhVsEszUPh4MKp4wMT9sWNbJ4wUh1HD",
  "key44": "3t2SMPmZbfjhMKWx9ePm7fCh2ZoHVyHYr5PqscWUiofRL7w5qAWBJB91K2PMngjrSzDGj724L63yecE9CuEg8HUS",
  "key45": "5uSEKaNAn7JRqL1jHQ1XpA3TShumVk1dMaEYnmGHU9J74RzQKoS2FrYwoyeimM1kA9Ww57bXndwKGCjYq17HphA8",
  "key46": "4JiFAGzucJXu9WyPQkw7WZc5oURfeWwuofWWxjCMjfEkL78obywhb8KEgBtzUxrSrkSgzCD8Rnuqt7HYYUyZg3hz",
  "key47": "3BF5r9y5pAGZYrqV38wfWHi6KUuqA87uRY5u4umSrdmhicdsgfvb5DH92zWTy9MRf12YE99cQ8XKCZyET4vhPBiy",
  "key48": "4dTjK9L4XtVVzA8oshUaMmpqKb2yf4bQPg56FNTBwJZQ6trsX8XFGViywwVs4X9EU5epbFUcigJMBoXbdZc3i8T9"
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
