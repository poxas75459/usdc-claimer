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
    "4zEDEwFoydww2YMZURkc14vvUFJBzcB12bmgJCaJaruFYr41gocRVhogoG7aqs6m4FaJj2VfTThhwtaBdXAC5tan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRmijGSgJL5imjNriBNV5arBaptuS7QwzQxzoH643jtHHGwt1KQPYKmerNVHCtZ8qhax8pR3uUSz5HBUSp7zFBb",
  "key1": "2rW7fUDScqPhmch55Sqz1ipbeJGgVUeeagXd1zgUhXYAiBr2B7uKgXSZ8t4bdvFXHyXhufWVSgvZJN11R2yVwexc",
  "key2": "44quu4q1HzGFHU4m3xUSkkMVrRa7bhHwM5p5HF9MkKr7UxJD9bnizYpjmq2gP8Q7Eird4YjBX2NF3zs5t4PiWKUk",
  "key3": "Z3wVpvjfKfFqcB7TNpVvvKw2thHW3M8kgdvQHadoZiJBXmhBU7GD71sRXQAq2tmpKpAqKqTgC6dUhmvX62uQMP9",
  "key4": "qFWJqxk71txcr5d8YSYEhjUZ4Xzok5SfTtb31zFW1EVji9A7FuzWb8pmMK8VEXMPDUW3cd3FR31DDGz3x2bZxMh",
  "key5": "MEbduwvZ4GJWgBHSQEatvGaA8doDymiwNQHvPcD5NyzMvftn2nFaRrBtqo4cQ5LcAm9KDQ8taKqs8M14x532jNb",
  "key6": "qaVxEHrCAbxiafqmWKzWD2gFHRMcpLuAwgPKqS4QSMkGt2gSqYzk1pvRf4jxiBTbLLdRkJeYr3RYTsu9XNSgoLR",
  "key7": "32vSZyrw6yYjYw8jpnXV8kQ9qCX9pDbfZMqXt6t7pMe5fVcH7x3n55b9GNdbwbWsBf1i7pmiyvjFY95LMSqLyVyT",
  "key8": "2hHo6tC7iFUt7Wk17JzhYxCTmKBi7T2BTvbF8WPkeZDraEmcBMbgq2YSnMtQcbYqtznsynLV18mqaT9SpvM8VM3Q",
  "key9": "37XLo8oGGGXQDGmvR6x8xHhnoUJjD8F9Zxy8DjxxQnHs1gMMijw9EKxTinukLb3M8ExsniDKTKq4TBs2QMnUZmVR",
  "key10": "3w3SZBp3HXYwaCW2WXgU7B3maixsWmugPhiPVNxCG3vfXNztJpXjcFUMLqnRoMghFVvzgQb1THuA7nfkgDJDQjgD",
  "key11": "swbBT4pC162isxJhqhnvDHA3n2tTHLezyqEE3vkaj65bsGbmMpNQL7Q9Az411itwvQYhSi2Ms1WyruYZuSTXMcv",
  "key12": "66WzeXxSVL5SVJqmmJ2zg18HAd8R4rf79NCcrovuSPrCDMAEdmoBwarSubganvkFcFyENuA6UPtTeoEuhg64b9kj",
  "key13": "2W7M1inhLhDQNJhnManQznKwDzFXLrJddZdMjjpZ5ShRzkfizQuTNkx6YKyv3PK26z1rzZRjZL1W5PMBMiGEAApC",
  "key14": "2ZJ55qo8dQy6xrC2cFwetKKCdYHtKU2QoLaASNmxFroE8EYYfiNCpFVvhccUuvHtrS7kVqgFSvHgohfZQarnxhJh",
  "key15": "39h7dYy51V5owHhrkjVY9EVsjM8bemunwGGnFkpeGC7qisJcqCCpLk3A68RUpTRGF255nCUtoM3t82qhQhTJb2t6",
  "key16": "EDXrSZNEYTDUUf3CpC3g6oTwcRmfgAZqMsBWAHUfGCMj1FCC5Q7CHXkLjUc13zZHzgkFNK4Vp8x4cpFck2NGoc9",
  "key17": "5TPH7yxjQdDTgCCKxT2Rrpx8ZTkMkXqktj9yK89W9hEKRP7TAxLKbP93eb5jt1vk44BLrSzkP9N1UoFeCPfwtjcH",
  "key18": "3jnHFFtk6UwD2ePQ3tEiHVwkChRMLM2RaVNmRU3dn7tFP5jkVBtN2rXydyuCBZvbqoSUyMMWKFSa3vd9rvQCBd1h",
  "key19": "3JvojrETk2nFrXESPYGTTEv83mDsb6zEEJRuen3Xhm8mV4PRcp6Q3w3CwAqnJ84vDW1Es63QZXC7YKi8K9kjwePp",
  "key20": "9MsyfW9hqZYGUHitMoFbNTvbVRwiPQiFz5mV3w5AQG2ZbAWEbRgMdRtin3VKCUzsWk1nxrYK3aoe6YEXj7o7RYb",
  "key21": "3p9MnjAb2FWvnr3LQ6JrFnyNsKGPZPWsZSA5HFsYucb3mAHpMPFZmXhb3MtLMY2Xgm3CbY5TsHLq5icgh13ywdHm",
  "key22": "5BwNJmv9CZmmVqjN3Hr9TERqDDCMfjkwYBZvAEzX4NzzWrZm7HU8m3Brf4kWvZLud4rZeKniBzbxSH67y3yAV4Q8",
  "key23": "2cYy2ULgNCejVCshCsekN6FpaicNv4EAxhASbCSGwdKk7CXG3vZZVeuWwGPDCyQ4vrQ4ufpKjEFEV78azL5Hj6pT",
  "key24": "62ifk8MnqR4Yjsv5gAnfk2chH95abVUVY8FeixPUnq4yFgtGdvYA7aBXWKmXAKAC8rGdQUATM2QTpn1382Jg8EpX",
  "key25": "4kB87iyEDwDu4WcQ5NJb6LPcK9PSzGhySHdGkyF98w8w33WtFbJTYS42gNBtrkambt7su6dHuBnELiEPTJJ9JzDG",
  "key26": "434FVHh9H28iTAheamq5mHN7yF2MD9hFZPE4JSZmL49H9nhjELZHXABzHNmStut32qidssR39kT7Y39S7AU27ZBT",
  "key27": "39MxLjQNpzTcuAC4J4Kc6pAdnpQdF5et37fHf6LFPETWr3oKcM1E3TS12QctdhSsjXX6KFnbohE6y8ZprmuCMRTL",
  "key28": "3jb9CLbqF7WUVF9R5Xju1T4u76Gu2BpCUE5Me69cCm2UuPNQwxAgdCMDqarhjDqNa6Z7FB8Lc3DwPdYEabkvbcyV",
  "key29": "2f8qM3Py4BqhZk1DaDPF8TL1Tbnrqi5F1QLoorDS37WpGxtDubQdLruLTGHqam3N5nKmLLd1hqVXhv2g7xhyKW4z",
  "key30": "p2JkPv8RzvwF9rfgiwv6oPvNrp9CezzVstB2Kyds716LksoLLjFprEBLg6pQQbG8V8tHREeWgzCVgMT8X92mq23",
  "key31": "EmHkxREGpCSW8NP8fVqRQSf417TadE3nCGuiU8uqauf1c5oZHnanrwNC3b7uRgKz8QyfktoZ857domfg2RxxEua",
  "key32": "2D4BRxjCHRZPxr8r5iR8xXXWaH3k16Qqpv1inSPsywZZDAzgkJqSEgqYDubi3vXmN8meD7atFdH6TeuwkfqN8Kgg",
  "key33": "66Eh4ezifzhRQdP6fNtP2yxXhWQUuAGxLm8AeCxdWvBis9vi5MHydspyewNuttvPvzmv59ib426g6NFdLvGxGWe8"
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
