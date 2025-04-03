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
    "3xm4w22QmduisdCnPAkPnNZrxxcZaRM11jDNXhVeJqe55cBSM5MwQ67wWywvrwppcWHCc9ZSqgXTeVnJW7MptCGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjaY4fWqhizyXv7zBiQbi3dbgE8rJqttjsjsFJWx3h8ayLN3SyyqrJg7Wwt5aBKvzwiJ2ZzhC7atEN6K52GSkfq",
  "key1": "ticqpz6eS8xkDJEur4jzGArtj9D343bUL8EZ6CTTunS7gQ4oErqYJLQyGXCtQn5r5BvHyTa7aPPVx1gAogAhnGo",
  "key2": "57986fm2kFLR838HyG4ncHR2NFuaLozS8jrq7rNnPWfjErYpZ92WDeevYLr8YDaQqSXLPrYxRA7tWnseTM5wE5rP",
  "key3": "dCLDYN53wHTior2CdM5Ze5xX1Ymg78oeghWgYDKcqmSn2mRHtnd98SstweiajKnn2xG3QZ2NwDQGRGzdA9N8HpR",
  "key4": "5FSBjvtd4m8f6E5K7sJS74Ex1VDPDuzmmTH787cWDDtzritRrXwZmzx4Etv43kRxiti89ie4Tks5Wg8mqf9CX6r8",
  "key5": "3KL1fYdnAvjqvPZeMcvVcjM1LsRG9Z9qgtaJ7xuoNXgV7cTTkbjegvaGYFFxbBspz5VfymjP8bbyLgkAYgfWdGkq",
  "key6": "5d8Np7GKWFfL9oda5TrNG67SFDyvktnb96CBpNAttACNcw9BXVjm1Pk62GdtsaBzk7jMERou65v9FgR7EEnNUhug",
  "key7": "8n52xm9ADZJ5i6HyjZAiVCmnEsvEcVa6S6o9SXps5Py3gsucjhuoE4Qqs4fp29TyZqTRG5zsVYtEtiHZ9yZmzBh",
  "key8": "5TPdceRF3boDU65okhqziZJmZJ2fbVdSrx6KoxwqSiVT681vhc4bWPE7GbePwb7cPoCo5eTDQZojL4FVD6Nnqj1R",
  "key9": "2mdXWY8pi7Eqzqk1w43GT8CALdhNGgYtjb6SZq34qKC2X5a3t81eM6CVNLVQWQuKz6FoDy9Z28Xe2KQ9DUEKsGbG",
  "key10": "5MTFkxF3wy9pFixMC7MiuAydCgjfHESCbyUv26s96BL95ZC9wNhQnRZTLgBuARNSsQCiM8iNUpVgxkWPZZ1RACCZ",
  "key11": "5CNGrYixe3GxmepDWx3kUmgwLLvEdKYvTtZVhLcW6pBA8SReJ7X5UixwpLJFB1RL64rc3dXCrpthhdXZ641qmxwj",
  "key12": "XXASqnhW32WWqiYW52WGzaDrmuQuGJfs1jcEmSAFv4AZK8Nnwn4K1pgmyp6nsm2aqdvtQDgBh1puJX5AQzqwZS2",
  "key13": "5BjUALbBr6vB9Hv2Y2pWGRRQymzud5QVKD6StopidHb3NPjXsXSJmDw4jVVZygceqRHt6xZTQ3f3AYgfCshxm8jB",
  "key14": "2rDiMUQgMr4JuTU5EH7xgzF3F21hMsv3UnCGeNfFzv12f2mfSuTfhzkNTPZGAUhoAX2d1r7JnH9zSTcF1dCL1J3J",
  "key15": "5BDTQedEwmCcYHyvJ3sA5DTSHBR6kTofmBVo5gFNuzwGEqg5XDwZkybCiJFaunYQthH6p3m2crPUAxXgdFrBe1Rk",
  "key16": "qNHmxhY7yo7WqZYbZ3PBSz8EsbwwE1aNECFmvbgXaCkjSxb1WzCtfib2UzZ4FvVukFwCa8SAwEG9FAHiUgqDFRx",
  "key17": "J8huqEJKm4LWCEuQBZsGq4LmokUX8tmxWCCZYsN9CpMWLht54Q9xFbNoLka8XKJkQckQQer9tQe4abBAuWu7yC7",
  "key18": "nBDqs1EkKvMzGRyejCktbMP53ew4mkBX2ehRewt6ihWQ999ZuqzUncaqHK5MWNrwPr4z8T4YwWiBqoWJbP1VtG5",
  "key19": "yqbSf2EMArBSEtphUF4dxoef2Tj7ytD11Q8vFHr9XP5j1u3W8qwPW2sAA7djd45oTsEkf8aCdaASzGPwdroq1yc",
  "key20": "32BSE4j41bJzup97BUNnS6sim8oygTKnLfKhwNMByi5J9rfkK6XHwTQEkdjWGMgKuwVV8Qbduzj7nxMPDtzKjt56",
  "key21": "3zzoHCUAoSeY3HUqi8cGqSWwh4b3oNwjAdUhUW8uBHx4soK8vWBQzs7inYWHHrKZUpMeVXz3BJhW2JFUuJZFyzQo",
  "key22": "3GfuNH2KGx9jYCZ4GDCLJQJCXhGfMXjks5vzoyhZE46W9611nT7Ehua69ZRvuV5gNZiqRwg1RC1bBNwRJ2QvJaqp",
  "key23": "2TrpGj6usSWecEs7eu9crAwJMsaupYGJ72bTPUKXsyTALpvk6Js6vAaJBNgETTAUCt3LUU6qnfpLDhP9786rYGf7",
  "key24": "5LiiL6teKFWsGpo4Kp7ss4ZGQX74uGdUhqPeRzv6qeHx9b7vaqkYq3WTM6kQqjSUuP1rQvTHQGnqCJpmPWZh4UAk",
  "key25": "5fG5gCberDgEmqnrEXQFvtuGMNTV28U3fWGSWxn3Bhp9i2KXXTxCjjepiNE93hMPhLetuiW8HYxZ9zA6Cm5muZjg",
  "key26": "6456AC697JfJFr9ebS3VT4kENnRYrnfVh1mBXtkf9Kx62JrUpUnF7mRRCA5f7AYhtcgpyNvzMR2jaRsmt4RRNFuJ",
  "key27": "5Wh9hqt8JjSqeJdTF5VT35MGTwDYVD8p6YrfmvpibsxMb3AVrvQQPb4rETUHsD7JsuMAzpY53gVY4rsH94EairKa",
  "key28": "65yjWvF8ZrLj9uLwcSoxwUiHDXzjTW2cTX44CDokkppqbiEuNpPRWZyvbZ9gBNfatwXixoTmUcEUV5VuycJfL88K",
  "key29": "3928f1KJwk2cXjtDJvymZPjM3CSyAT6kUDYzKBFaCkSm9yxosDg7bYUXKSMk9C5SDxWC6cCi9oGABEMKgJXiMgYt",
  "key30": "54CMkWPTzqnGM5dsmx47HrYxgtNC75UHbVw9eAuqqCPWH6vPyaFwxyeF1jDvx4zikdtnV4YMQ9wpWsHt49x4J8VN",
  "key31": "5UJ2JLkqnP8mdPtq3uutQqdk15ya95SG9bp4pTqMvBYSZaTByTmtfe6HLMH6rVxTPLV5xasqY8gd6a8Pmyic9u2c",
  "key32": "4LrYSaUuJVnxa4CSic5wT91HxBrUALKjaKNA4XH6PS2B4EwUwPYihammNouUknsR9A6LpDtw72vXLfmTeCVgwE5g",
  "key33": "5qcNbkYz43kpMWk226CW2gLTSqugsoYKBQuY8RMcBazkQrhPGXa5ua6XuhQCvXHc31aFKBSmwzuj9donNQYrWxz",
  "key34": "2SJnT1nb8xrLevjPwAc7DbdfcP8r6TTgV5ZVDEvYRM8USQjjsCF2k9cb8hp9ru4sGo6VAvhRQ47D5qjM7GxDeatQ",
  "key35": "3wGqA1sWCoVZ5nnNqUQQUiNfKAPwHkdAMADVsqb2x1prUwWwc7WELYhjT6yRgDwrWkwF7QeJewXK5XcUidNJLxMs",
  "key36": "bTnWcu86us6gMC7BVeAfeuA5CmLpyRohzMmTpvGDyjVWQJuouek5ZFFeiQu9e76ANCzqHVwwwj1eMV3m3E7983h",
  "key37": "5nN4JDQzQhTwNjTPBQgZq2YRunZ3KBzPogENSEEa1T3mAJQQwKqkPGARaVaX9SegP6CsW6khjoz7q6xJGdThY2MS",
  "key38": "5KistCwatWTYSgtRSbEXZ7aC4guefyy9E54pq1dbYkxDWBXEZRazrxkZeBmtZ1BA7ax2hvci113tycVJSniFVzri",
  "key39": "5ZGLTArPsoHVxZQ92KiF1BUfegBDLxFCRSWASrh4SWdiTiHcAVMmEUJhNKuAmmYS9Pa141m5mivTs34Xzw7xoFcJ"
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
