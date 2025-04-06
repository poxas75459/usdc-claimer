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
    "3rchm8ZfZm7wcMtuqj5sYveyYdpUfzHLM3cpUVYtXzsh38gaHXs1FSNpi6V1mjrMf6tU9PTMy8uhsnkLxN89zA2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZpVCP8Hr4PafETz2JTXv85UwGjbfxFs7r5oB6pKXzcVFcVU4SvrRN1HBVqYCPpQ4tdGfE36XdU8xzdFWm1eyQ5L",
  "key1": "2aZWCSrJQDsTwieypgq5HoXKwQVxwgakXDtqsQjoQBwjAV28DTsQqedFc3Vt958qAjHAVNjwvMQLqMfFzfkMWMS7",
  "key2": "3LiXpvZVT2b9X2b5mLSDYwxUR4Bewh4Etp8GLKXHZ9Mf58fXhgmbW3A8VKQkzuYrmtHt8ZfwBxYVeCELTdr8oady",
  "key3": "CDxHeve8z2q9KruQ3fPtx2RZMV2DLvq5yZJzvszF8YH7F9GBpEQLfkxz3EfvaQDG6JV8PAREdWRuw4PAanavfZp",
  "key4": "48baDCExMcMfJFCUGg6RuFRZfq6roUdy3LRJsoq8NWorrL6CuHG52fh3W5hdfjgLhuwpAjgPRa3F8ett6SoCdTVe",
  "key5": "MGKEKxDeTcWMfuyvg8GZnrNuKPWmQQezMph39mRELMW4CWnDxkJfdR6x79zF7xzeAuDsSRzARDegJcoFK64Lf5E",
  "key6": "3koDWgBcuspzcEi8qoEQSduvw3sXsrB2fSU9Qqh3Hw1hFasj3mNh72952vzdUQt2agB9jTGnejWES4H1vBohbeCG",
  "key7": "2yiLF6KLHfrTuYMLVjcjixEg8cfWnPSDjERsbv4mxqspArFPXq5qUGAw3kGCViydXr5LARfYE1L76rV1tkcGtTYw",
  "key8": "2RiXUNL3jTfT3T7tHiRtGjz6QZYdAxaotJAcT9AG6JUSAYScDRXEYj2tZD4boPfPgyKnyV7k944meY7XXJfjbXJT",
  "key9": "328E7QAKQDVfJ5Cafcyy265cmonQfQessdLzp8arF8ibCcB9zghxCYvbWBUULfU4mW3k6A3F2ZT9DcrseYVzwe8v",
  "key10": "3TLJ6rCiFLvy9zmXFAkD2sDfn3dbk5ydYizFFVRXMPHYmhkYeFANnpEJP143Lrd5o9nXb8zKWBxtniEiSsoNyijZ",
  "key11": "4D5g26pRtCot8YRQ7YgmfVkG8G78nMUCAQEKAU41Nj8Sdkg5TZEob8cyPuDb4x4NLWyV3JLSAkxD3hNjWPpg51m5",
  "key12": "P7x8XUDxgcNgHaT9t35CXat9qjHWD7m9e38nHYsMUKZx3n95FwWG9mtzGbV8MRWDQm4MBv4cHXZYTTGndc5e2vJ",
  "key13": "5oRfeWraxW1NwwY3Pj3PVkdjZu6HKtUJesYwQnrR58Jp8utvqEp2Yr2CUCFkxuL2MxhUcruRVVV6oNDkNRKFpat7",
  "key14": "QTri1p18G3z6u3TGUWoVEQjv6kwjNu9kDEo7ZCTGd9c9RQqXdzHjpneBvaEQtKCYLksFigXdAMDjB65UwBepX7q",
  "key15": "Tarp45C2uAKayNw6ShUdC3Q5GKJBGcDsWLRyQ9CnCGFcNLhoa2sSrsyiLWKiT3KLbti3VRPmZTp6tPxdWkVkL9i",
  "key16": "2BFn3yXrB67CmJ7A1wzPPsSSbpoiRPca7KdiEAHgHGLp9kp9ULXvAWGdRpxLCuwXLtZj2MjdZLiE6oymoZVpFMTt",
  "key17": "2c2KuTV76hHrA8yMsXE8VTryzt1ufQppwnSZoCzCxtLTGgnf9Ur1ntMKd6CZ9VvTcBnugYAFnbZ6iWHqGqw3nzdB",
  "key18": "3YgtBdJ3vXjZ2XkuzXTKv9vD6dYNah9uy7BqevuTphARRa2yGnme446pkmMiFzk72d98cxLfAdeTvaXpDS67Wp3n",
  "key19": "5J6wuD9zPvtrnSmXnBK2xzs4bAYB51hq2U53eZuR2h1sJZEXH5w8bHcopaTDi6F1je8Z5FHzzCLf1gwe2jwpeV57",
  "key20": "2Q5KSEEyXxay4KUbhBTMxD6aqdjhrAYRMD8R5gwwdvSro363tmiMQpJGZ7xiXuDa7kqtL9Uqr6h1YdsKVSh9Dbrb",
  "key21": "4GTmNsvRaiGJhwcUh2Sto4XWgFUCiUfVWpw1anHeZTLLgCsvmC4ndrnFYjQrTkSZyt1dqXa79JwTqNH1FXzzU3Zc",
  "key22": "4U5Ng7xnwxpjns26LGigixyVctbRzAePdi98DQTKhJyGNBRLzkywt5KvAxdqFiBa4aDwbqw4DuU4y1jkB8KbPNEP",
  "key23": "2GUV6H1naa1bHSRtXpcWLcPYBHeSrY3TzEmvZeTL2tWGPzHs4XR5mvhRUa8vSyZfE56WHcmmexRaik73VgBJiYmq",
  "key24": "2d4QGpEqT97QCpCNaX1cDjXrMoPmLgVGaVpVayCW2sfH14eNYpJLfmvf3PvEjcmx67nH72yf77a3N6KMyYsvJQZs",
  "key25": "2SoTw547XBWYtLb7UUrSDQGNJL8k5nU2vBv8s1tnQX5s6U5zi9MetR3BExURPjYi63cMRGJEtgQ6CVZ3MdVoZ3sn",
  "key26": "5a5eAinwyuoVay3iCiUMD1pmxoYXSNfW7i8stAL7DU3jn86CPjWUtdHhVVCMFZFbPj8PrTJntY3J5xwnRcWvdi6g",
  "key27": "44t7KTZ17uFQkJ8FJ5pNg6tGsFr8DfXzBS2X5t2kseJzYbVptHNdaEBqqNDDgAwgtsC1KUUyMU35a29nBUmGbqxA",
  "key28": "31nzPvb1CxinTAbF2aDcS3QKhCs795Api1GFejLK7f66EVmVgWvHEvrhVc7xA5tQWeRq9CipsBvq5uTEgTM9cM9G",
  "key29": "3ghu9Xj1JCovudWieyQE2Lg7574mpYpiUohgdXJPmQCCuASzAr6shseJ6UvS5pJgaCY7AsNLeewVD7cg35gC3NKF",
  "key30": "3yP69xy6VwfVxNnoPNQ9sTbAZxsm5YhBJX7X4oZjxEoaGwebeuHUG1p15uQp28CCTkE4uYHa2BJsUknqyuCgP4uU",
  "key31": "2exaazP6QppsK5qBEaD77QDNsSLodV963ZdgeG2bj3Baon7sD6FwFRaoVwFKay27WdqB6vBhcpFkB3KRG4VYoo1c",
  "key32": "3WQ5d5ZVCTDoqL782PayJueVwa6xZUDqguejwTiKR9RvX48Wqekstp2mNCSuxph8LRMm7TkbFbLWpReujfgKYXzX",
  "key33": "3U9Ag6ntQxnfvFRzauvDJZgSs1QC84eVgekcmge7K9VDkmCMVjrfHXA8Y91n4JPJUm4JWbVvaKeGnvGsKYtyaXHc",
  "key34": "4ri2ztvXDr2pozsG2jaNoNZfnr7vXTLvd8XcspBgfjfCoUAg5s9nMPpCkbfPwuRJdE4bATCD3GbuJgeapkHzkXyz",
  "key35": "3PD3pn8yMimjpbsVmFyiUGP24tPfrHh5zVgqqiRx5AHovHbvhoUXBSVgfrmcksrwtKqE5Y6q5b9DoJ2xZdDPN6Gx",
  "key36": "5Wh7RtPFDrsTgNdaQAfDdEaV5B6Yx8Tbxo6eGj2vtsFu7NwsmpfxeccKiy9p6QL2tV8QJTdD5BH5WuuEYHSeTZwV",
  "key37": "5mB5UMQQD5HVBgoAbd35q63U3fPFPoEhcHwpcGCSbhJGXqyDkrEEsp7WriCnie65ugscsoqccwVQkk3bqtetxAeR",
  "key38": "2rhLNPaGtv27RQLSdn25qDbQhsCoKD8BhpFgjKU7y4dEs5Bc52Lee6WGmCzZegqQ7pNkzBMM3cZE11o51pB4aqHb",
  "key39": "3jsHWt4647H3JGVcoFjvMRW2a9JSrmNvtwFUuDgJttbVmEG8fj3iQ6oiyeyH4hoKXWH4WNBHrhtBTMvFA2UdpZ7X"
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
