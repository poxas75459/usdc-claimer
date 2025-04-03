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
    "31WJVcUiKqZp3PMYtT1oFSruYHQW3prdJvjbBHf4sJqLFzoLoX95wz9RJKH1ghXE9Zu9DLEQdVyC1nZ1nprsX2dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKe4oftLAMtwNbg37r5cBU5nGsK3PHEEZ6H3P6KenUgzySU9GKtHNvh8CKtdWRAPcZ3VW92S1ULGjjpS9TA6bKK",
  "key1": "37ZcB4BJXA81wiLHZHypXMzXJnsPu9QSmPVbVMZTmHoAWRxokr9v5JqtLPyE48rQjHdp5reE7zWLQQJphP8jAw2Q",
  "key2": "4L6EXMfCS251FvdPg62C5tJPkRvu1FZttNvia5361QfuYVYpZwmGjjk3RMs5HtR7QYFrjFzsrDkWrvhWJgqBuxcG",
  "key3": "5SgCkP5J9qBB3CyVK9ZmjyrwbQbGdX23W5WHxFfBf3Wi2ZVmNgizo8KibcRZLRWnqzd2m8vH8n9AWDPNwYv1GSfX",
  "key4": "mnDmnzLqbv3cqP6ZEHRRrL3LXr5vbPbo8BfCrUeNf8Ghs3D7S83pZrH1U4KXorC4XvJNwdT1NCywBAEueGdxk5d",
  "key5": "3UokHDGdT5k3yYKn4N29xuAVDVRkybZmU1V16mMJERGMwdy8NNR7EgTVGr2rcBW6MH9XUUpzYmqDcsP9wnwnZCcg",
  "key6": "4kNQpqApzoJ2JA72p9HVRU2YitQ8CmtiksTAwq1hebRLN24zBJeDgM8DPSUbeFLZdDeLYCKR2xK8YuvmjZQkDMDn",
  "key7": "5UsULTCxPpWgHAMzWuEfJrq7Kb8rT9RbP6xbgrHMLArUYcfCniLw7Ars955YbXJLte2qQ7LbKYiDus7G7zwxRK41",
  "key8": "dj5eSzjFJb5VZtiFM5AGVPaq2hvUibdDJJCcyfy4mhNekW61gf6S7tU4RLBoNmpbrzUqT3nQx7KSehTN6ubP42H",
  "key9": "2FyqLDqe9pjF1jbFnFShZAYr6H1mSYPzTnPeZiYieqXXZvyoT2nf5zzSdE5q4hxxQM23wgx7BafToN5UAiEj9UBt",
  "key10": "3WR1H95YSy9CkkVrkkcsRW6aDEH424rKF35gC6V7wyGUwdX6h5dRi5CSALb8AdwFJ7cRj3CFa8v8bhaFaxYcm5Mv",
  "key11": "22tffaUqLqPQN6rgs7LeTh6VTXUBn9dRJk9ZAAB2PWDR3uD5N8siZacJuERXnyRpsZ9s2VnZfZaubtuGns4YWEaR",
  "key12": "2HdPGuU76XySUicJnn581N2FG2rHBRHQgUqgxp1oQ6wMnHhZ7jywfZbmTfAz4ReBdamdW95JN8UhsHK6DQx4WWLH",
  "key13": "2s43BLrL8WH1ZuHoDNmD7W5ZXZY2mZWRRnYxwy7dY2X5bsagAgUigZcyyesLtYZXFWMYEUWqYn5EVcoP8FjAcLwf",
  "key14": "62ot2n5mwdkGJv2gcMeYNb6hPqBz8sPcfoL6EX81jGt64PGLP2XCyFNNqudvoaDuoUopWCjSAcuzpg3Vh92JPa3Y",
  "key15": "cCsSm7ut6DbPezp1k7ypdBn1yzeoFUu1VsPduoRNzMc4j4yC6Fm9Ag2g5Wv5SPdn1YGwo4mLTVCPg2bdFkmWXgc",
  "key16": "4vX57GbnrFxUqMMGfDc4S5AMkr6YxMrZGtTeShu4TXyapwc6wKt1rCnLAM7BMSFfjcrVddeCwToxCxuzpXGoGGVr",
  "key17": "4bqyvp5Z5ZLKqhU1rDkYKrvF2n2bEGAb2aF18s7pJFjEaCGP9S5ECWUekAz5T69MwEfdwCAKiU3EZWuqC98V5icy",
  "key18": "55pdbuVkGDPVTWnaUAT5KCAisoVz7S5i3uTYHcCGoEzN1rzsj4A6RHrBLEiJskSg3VsHt6YPkFifTLzSNc8SkY21",
  "key19": "61CJSRg13F8pNwSQPoC8cjiqNQs7JTghMDXJFYibrmVJBamtfBYhjKZkn4fMiXTqi6j3LWGL8dQArXd4XUPak3kk",
  "key20": "KVTtUqAGhx89NmzaD6PooxTKMqAe3T4r2Kuzpdh9DjbAfEc64odj3RbVw5xm7zdsKWPLYACPF8jb1LDZfPe1E9J",
  "key21": "34NWweVCvw8vX32qNZZcHXipAu4Jp3QqUyuPQ3G2t8cyaSUbGhV1rdhLBzvLk5SZ2FHpduW1gHqZJxwEfUCcuLHk",
  "key22": "5UbmJDviTLgtnxxQAXXAFmQU9uC9BPFCF1fWKG3fGmRjAF8A8MAzT7H87Qdbt5mptBjVwuzEH59yC2f7EnCCebjM",
  "key23": "4LeddsieMGnL8BCAFB6cTkwWjtR7sfUKuQD6TMbodHuDjQE6JLaQ9DgmsE9sc99QqgU8CpiCJptKVg5TnufFfJQi",
  "key24": "4bBKPmnuyKbRf6VMFWz5vCTXBWqRjZRfQbDCNTjsyAhDDFCanNGgwPvogsgw3QehtLbRhEmsw31N6eHB9LDoFtxq",
  "key25": "2hy7JWi3oR5Gf84XXkVqU39GtPSVjUnEQVYv9pWjfk8tZQAgELmUDXxRvknoVMB7iTjzSkLbq7X3NjYPgxkswm7B",
  "key26": "58GWAdAwNtQ8L6ZcMhcZcEJEU6knVfY8TYkCGESkqgfewiTUBkR3LHBV6zvCnaNqWZpvJwRLWqE4NqxzaUfYEVkk",
  "key27": "47Djt89xgMajDRi1MRy4EBpTmEbxa6DxLSHQBSsvpB48pdoa1SPwwLKbViqhWL5tct1Hd5C4DXnN5eyLuoShiLje",
  "key28": "cgAUHwfcnphPfM5VntoEBVD2kRWMGJhfoJk5BNpKksRUDD7WdE2rF8D2TZ4dYvbe74LVYCZXxCJ8VvqyLFJScuS",
  "key29": "2SRWstKWJAYQW72d7oX7P7wMqsg1YphJqFGEG9ucRGHUG7ZhnNT9r3AwqTgkkVDgcdyig3EZRVEuS3mqLeC27RVu",
  "key30": "5RNmNj3jTBGSwvPQKbdhwbAiWZ5wAT7TD2DP2D1vBZJw9up1yqLms5CYCaZnKtpuUoftRuwTAtdGjN9ggWNUgHSC",
  "key31": "3zMmvnerGeXaGFqZFX17DgdmtMUyUumwJMFrvEebuWacZhPbvXy4PcEkBYMpSXyA9kRR2PAYsG8yu7qbLgVfNSJT",
  "key32": "5EhspbcbKiEEvpY1zRwxLko5J9yPNB5th927jXiXFaMZjufcjzqgWm5oCSfiqkThJCGm1ae1yZnzDyWcxB1VKNik",
  "key33": "2gDEF4nurBWyHVN9P88wrz8DJrArPJzt2srExkXrRqgtLxcTAH9GMPSngvt3VAipMB5ddGr44DKQvcSsatpaZjAn",
  "key34": "qvUM8CUyWWUsJowR2KdTuzAjHhYdK9SQchCb7Ynr3TutnKkajs7nc8RaQGHrxJ23ssMbaGasJdJ5etGcmaHFFpM",
  "key35": "5RqedCBAknpgFbn8AN9PD96DNDKwfjx2YP7cHo5qQWKxGroB1bjzLm7oHnsgiBChTLEk3wBQhen9T4mtNnAZ8r6t",
  "key36": "atTy1DDzBYxkE4QuEstHHo3bgGeLc26tmdF7sMX46Pyh6arjF9gz9rcqqEWfMJ12RYgAqK62t2cR7DrpX8hV5RD",
  "key37": "3q7vAqFUeW7vid8wqhEXog4QAJppSt5nfAw85uGoTkx7TJLgi6BNxbZpR5V1vjCghiCLew8qv23ygLDM6z3ShhjT",
  "key38": "5sdZCx38HZbvsTJEuDinuZjGQhF9DbJNpxss91YK7CUrTEraNJrAsVvQUQLTMTY53dgRgyxTP7Mpd5d9z6zXSC9g"
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
