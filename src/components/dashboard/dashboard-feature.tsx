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
    "56nZVK9Xa2JY3TskdXPeDAbqnNVyERAWr4yvYa1TjPwDk2NFrLAgqQRxHuv8sxwiRdErzVvFfTfhKwyWqngGYWPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9YFoCPcjafmQdHUkknZY6VUUroTW1D9Te6Sje71z7AtuwGqDqQiH7FjQKJZGFJ3PB5K1aEawva8XsjfzZFvASVc",
  "key1": "5YNQotMT2DZw6Aioqa6DZGS2hZGJsKrxx819tDNssPRVu2qtq84aYeyfy6gyQkjgswfxTDoJp4eCdc7J4L9XrfCT",
  "key2": "3dPuxFFc8xPY5Lo6vseKo5UXHgWicZu29q3tXKERH91mQ3YLrjc4a3vBTWBxS7CbnikoWzvBdpRG6t2RHyN5SrvX",
  "key3": "2LknB6hAqVd54gZmSwW4YRgs4ajJpkf1BpszaAk4FDfaND9jrj1GT5To1rTintPGL4tWJyuGwmPbgJWACBntWdcN",
  "key4": "hNtrmXXYcxUjyBzErM1qbyVrPHoMQwqDt75VLrg3P1JEKj4Eu6Namwgqod8iTSjwGTaVrKSoP3AcuAAG4TF5cNf",
  "key5": "3sEyCsN8WeaniYHqmquyLGuvY8dFSykxUaX99WCMqKWrtzMqJyEuTjxDzHk63Sf5fZSBMRiZQqKN6gXdsxecnuCv",
  "key6": "3vbM7aD3QqDScaUBBnFmF4uXpmw3QYQQZ6PMM1tvS8xtkMHvuxcuzJsgcRjk6YoNdwEBTGFAEK8ubAm8ZqYELmrf",
  "key7": "2wDNNELehjPLTMgo9iHxsrV5dR27LhE8gD45JFQR6JYx9BmUNMbcUtSWHaAVKD36bP2V7DGTNbUBLphiyb5vStKC",
  "key8": "SyUHjinhX5KHJ2CAynFtuAEF2fouM6Gjf53wV3FQR7yAQxmCaWuyqQrU4ERzidTsE8nfobXUJh7T7LgnfAi56Eo",
  "key9": "4ojfT5isSbsXmudV3jnfUrzXZiD78ovXHeDLD1DBCG5ckpkQGfJ5T7YLBaAtxAtqKyokZAd8eavz1Ej5VWNFtJDk",
  "key10": "5ASuUx1zM5hKDnmMgirTSXEmkEAcmH7WaUEaRY9Qv579r6xKhJR86bRAs5xiUGVZCS5tnU45dMr8EouErpbS1SPw",
  "key11": "5dxyMGYCHVq4uqucoNRPLRmgBG4thNp6hXRQFqnivdt3xWPhiaHz5J6wZaoLGmVpjaBEnZhWwH1fr3QGgyM3K8Jk",
  "key12": "2kVttsKsBd14iDzermSu7yEAkQTgffDM6aZHPUashEXqXQ4CWrWaAVvTJ76nnj6zjVE7XWcj2H9bPp7hYdqZS6Ln",
  "key13": "4TsQWz1XP6hxF76SsaLnaVH3o3X5NFAt4Eh1E79mbbxh7mM83wZHp9gnVmbDe3JWKh8PpPCSg7acpsqhaB1SsHKa",
  "key14": "59oJba2KGTmFPfBAUaMzGrktzomNDwDQsfSPruaWyUzLjzktGtZ9bFMMnkhrttJr1itADQPZAmvfTz4ph2qbmbMT",
  "key15": "2VYonPvZRStdRtinJHH4noA8VWV4W6GFwmzevtnCXP9bQU5JscWYUgz5oo6UCVLzuagX4NhvLUG8JywxBFyUN8TT",
  "key16": "5NAJoh1VazaBgFQRrxZuTEBW2yYqL64pRVBRWcHfYn2eLQjZWwg1LFRsR8zeHWGMePkMY2JVZMHCNLqy6NEdznLY",
  "key17": "Lp2A7PhkWv4qGeRD4pje7vFHDRT7SVMBQ8chynaCsikaTpw1NCojSLe4y1ACxW9C8JEJVKbz5D3L498wYRZx1ui",
  "key18": "4q2BaQMYxnZfU2Xws2qEQQtL3vigbPiC9uuS2jDq3JRWMb12fdMe3T78r48MYptN4Zz73X3g9ohQ2QfTHpUmTkM",
  "key19": "5ftnUEABAq7s2eVMBfTVK7SjptDWCdJdN8vesAZjfMykDzvs4jx3vBH45vzPqaLKhtLbg1UDXhUHA1MVk3LdQZWG",
  "key20": "JhoNcycrcWtX1GbTtv78diYUakQMVb3mcuBntAC3mQUqjKVeBci8N1xsVRbv2DQN5xctSyNxbE1JjDPZyXbMNRH",
  "key21": "cqqEHYP4tURwwrWYocGYmZAeFc7V7bW9XAwes1K9ZjRP5UzykWaCeBep3Mjxqqn3mitbtHDt2rFGL86sn2nMKMJ",
  "key22": "5cph8xsCaaWoyTL9EFjG9a2RVzCarP6RvmskdqNHPUz6eUsRDHSbFWfiN6AoA78FemEyEY7wwDBbCNf3YFfv2ewz",
  "key23": "5NbrYu9ZRoVsUrJpcpeiGKe9veT3eaSd7NmhWDgLWJQYCq25M7hmA9Q1xqqWj3Y8YkyfSBmVeDXMFG54EL5GXWe1",
  "key24": "QErTjdZgoMjdGEdERBX7HF2jFU8Zco6Y5oJQoZXRVZqSWDc1kDp1GkGPUGvnFip2J7Z3zKwpYNuUVqqhoMJP6PP",
  "key25": "5aZABb49tJMfuZ1xBxqkQjY8ajWFPerxicDo6jodk5SnDLXBt6V4x1j99i4awU4T4URhrMKvVg3LTE94kGF2CFQe",
  "key26": "9fVUg4HVRfZhbqj5dm7BXkcDBThkpuHFcN3scX2mmkFS5xC2DeAaR28J4JV7F5C4snGJVAnBuHoPNcqg1hxLRkp",
  "key27": "5kJRmRRcqz4qszFerp9StnHrNQNGvW6eavUh4YciN6EqwPxyvQJZevNfj6vxwuRX6o8XnpLFLRWyiAvLTGQQKhfq",
  "key28": "5PMjZpTMKhcJ8qbmbqdqSBKnHHqf3YdUC3g4AhVJznLwdRoPBPAHPrJADjjsZVraejxezKtBbM992E6EzCTHecyW",
  "key29": "4R9Gsmfkkdsfntmyf8wvn1ENbGVpYi9rHfHvQbpQ7ojvAogyycd65kRcBYs7zN8hzL3UmZbGqWShiNJj5gLtssPd",
  "key30": "5gYYFBGKTSgVPzptFdpfkyKscx9tr5TCN4pHnQPCSgE4ksEjQpKWidJgMTyQugxSPj9Rvss9ZPjso3usfQkAScNB",
  "key31": "4jkrSGrQg1V9jRkr63UvN1FD7E3qPJQK3iQtNHfsckVtmwXdNL8AzPiKShr9giNUwHPymeMHCDG4dvGB5ZBuRxoQ",
  "key32": "4D7na3owKNTpQ21WqydeeMkaUhmr3XVmZK1Di46JTgFLGBh4FaUsC9hL6FmqSkTFYCMSvgsKxRw77crRTtb3Ci7R",
  "key33": "uTcLEptz5d8smR9FS4c8rFvX9rnK6como69JJXS4HPQaTZHjrnXdLkU6QXjMiwYgDhAuZ8X16c55S4sofoQLuhC"
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
