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
    "5YX919mTZi5z1naTKijuS5Xmb5eRyW2Ahm7Xt6NMjM7EkT66FoevpHXyvUdyip2YwRsEsfeEb952pLykLdoKap3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBULT1Nhixy9qVicM888BttFve2y7wuoXjXeqVLmsqxgGjPEe4c8yWtmLqvQ2SRuDLvVnY1XTsaQnzJBqri2y1k",
  "key1": "4oHRMWTrCYf4x2NVwB3hw7Kxo1ZYLc5JcWKFixvasw36gKENnSqbvPnR6tqe94qQHe7eW5Z2q9KcsA6QKvbfUbJP",
  "key2": "5kVpZG6XpBNvbWhfz4CNGFvi6FVx4aWDpLmokH7kEDhuLukTBtsYzagaSq1PugREXTRpaTPqrRZ47MEMuRGu22Xg",
  "key3": "4KnXFUkicbfRkuZfz2Zw8QuQcZ94CC3WKPvBTtvSEQXGL5hfGND4L4hVW8Eyx6ceu9iPZsQL3Kmn8UzXDgehBKx9",
  "key4": "5DMRAiTYkmABQXdVNFZU38jnkbPDpuQ9oMkdDhhCVRjUdVrFL8s6NehfKKmX3TZ8dTPzeevd2DbHUsRnSAJtGCqX",
  "key5": "2sjCXvD8nb12EVyPK4vZcbivnfdWZcYJpAgog5bfy4s5YdYJExcY7f8e5j58RDS8V7rmqBGC33Yg69ixsUiQV3LG",
  "key6": "35XHVhGDER9qea4QKr85BJPvYMjdbBBHVVc2aLEJ2rcHBR5NS2sGWndJgoi7PHdb4Y836GEDURusekdbHMCDtC59",
  "key7": "36uvuuAjZS6CLaWsE892NZF9MTynhDTpj9ribWyJyvZwYLCLPuFX3wpvAGb6f61JySyEd7ppmXiH86W6CHpjeT9m",
  "key8": "496p3exQsdEEq2Y4aE5t7krjgC7nDERGcyZZqQ1XDJMVibNojYE441AFX15vDaEjoMTz2EAU8VRx3oV7HPKACfTJ",
  "key9": "2tvRyDRRi8EgVHVcGJG2RhRwRGYFsb5q9ZVbWnFj76gQjyQYgaVUvaoSCvaZFCB7TfcQLZUdrJxXvwvP8LwA5ZbY",
  "key10": "3bRRneep24VVeubv5tjFNKtk3kL4t82HFwUrnp2HEx5GnPBhGp8eU9ddJ4NejjFV9RhZEDMs1tXM1nkEpxScXWBH",
  "key11": "4TXjcdmTmSDJ13zJes4BjBdUiSJUj5FG1XVrVd9Tu9xo2NawAvBVZsDzf46WsiHQgrjazW8gakGQCBNuUfUjst8E",
  "key12": "eWwpweroDRxdjef6Rxi3ajvURMfNnAvUT7pRFdka2yJPJCNhn8jPRRRSDzZsLYx7xyASnG3GMVbh6iR1TV7oiqQ",
  "key13": "4e3TpeGQiXUVrNiafQ2gq25earRE74Vwo1FEB1GSYw7beuwesN5HzqRBvwCZW6Y4QfrUcRfDBGGyF8RQ4bDH4XbT",
  "key14": "AUTYzRhUk1fMBtTdZ5nJvymKFRomnfXMjRYwJRcgxwotQK9Zg8BmWGFKQqDxK8JVzL5gFPXxad988Z4UMjHnkdi",
  "key15": "pNtu1VLJPhka5sGxd7USJ4CSy7NTtxqNejH6qmYS1NdRRwyXNf9H7NJayfHccVfuVY1uri2vFrwfBtYeb7rYpve",
  "key16": "5hfMFaGh4LzEFURdrMXP32iTV9qjkuMissMbep5AKbfmq9Pxsk5MNk4dR7UpGRn9GYWD5EAYuoSDVEdJMr5Q3EU",
  "key17": "3wSaD6gikCZKx6fctJbHHtat2fMn8NL6h3f5rnfi1mXjkqdVGwS3NJ7iFWqZfnjX5i1v7gtq54WAHH53Z8HCn6h8",
  "key18": "5Xx3xSzAuya4cSUuY8oq9ewxDMJ2KgSa6pXJCbRBpDoBzi3xjpUBEZuvBNaxYAZrBRwpQNXYL52VNxEbtZG4ZJKV",
  "key19": "5HDv6W7yNtDn21EVLfGNVjuVanw7LTGEBiUqEbgnGPrAEFFkKC25GpZWUcSj9rxZPm3t6WxEeDmGQr251hnRcNJN",
  "key20": "ChbxcaX3PX2ZRBLfzGrKrFP1EVbg9UoPHpRax2hUKPnexhoUXU13kDNpRB5xYdcDyLenu53YTuBnnYeSgeNeVo7",
  "key21": "3F2jikMEdg6Nv7pBq2V8mUxrLBrWLsfav2LEMNJ3nkb86qpcUskfQUvs649h4McL2jVKA6b6T8JetajpC32GRt4z",
  "key22": "5QVB7iaY6tDAhXdTND83rcQSktciavpHFrCnqAE39NkMAjjivzW2nkJjhPvCBC7yjacg5oA77YsJfJE463U85yUs",
  "key23": "J3D9dRcoxzPRC1KNjrRCXsV2tLY7CAB47yeq65awkXs9quNba2ePNMfz3G6giKHC1eyePKCP2hp2CqLD6jfVhee",
  "key24": "278aXiR9iZ7hPSTEq9WUXSCzZBQ4ZD9WUY3iosyrVqDtV62uN3HCbKE9K3S4TnTiKuGWNVW9zabYqf94eQHiUCDX",
  "key25": "5KSPzzBkertXzfGXG2XSVuzbkz5NESpQMzSKaigNDJk62Rh9w5ANHgX56opFnbQZZB57eZz2NQXKnEY3pS6zbRJK",
  "key26": "5vBJG58PtdwyarDRYE3dmRT6SReFg7GSgwjfmxJxYQZZ8EN4PFjfp6WDzuBYEapcqM1eRcw7uVNSqES4JBK2qvHP",
  "key27": "wbcsFamumRhp2YzX5zDDcoLVUkj46oKumRSWR8EyL8CcjjWPNGwGUrZN21EN871RuzxjFZBeB1VuJZHnyfzNf5a",
  "key28": "4int6rSw6kRWxrg4V54GhrQB5bAgu5o2qtKmivUxQG1ZwpTgNsaVm8aP7QLidY9qxPGPW4JdMEj73qjd4oywsb8Y",
  "key29": "eS7gaEbo2KrV2E5XpDaQYov8qPW7fJPTxndnGNuhsRUHNw4EcDF1JvhMtX8zTS12ZvPuCUgRdjpw6DjZ52RSbiw",
  "key30": "66ZTjkCMa3vL57Mmd2j4MgnePKNTxQkHeJNkZJ8WAf9uYFNkzLbdxgfnysKZKTudmQNdmpyKCje3hZ9Gv69Mc38x",
  "key31": "2Xq6eeU5PQvrsei8vZzMwPz1z7jjUK2cmVrXWCEuwULimgX3gnLby2E9XtxLLJJrYhH18hfNtUjGDU8RDgAtoUSz",
  "key32": "i1QoqQii2KCvqgU4NzBeH4JTTv3wvEHYEB87VYThGxK3Cv9cFw22DEexaECzYiJbqnLeWvzyDvZPo5ymPT7rPxT",
  "key33": "2ZUnE1TL8Kuju47eGRQ1pSaMi7vbb5SVyNDxhMW19SFLs6YZkVVxN1Ct74r3fVENzqTgPRXF8JqKt8xgrazP5gvZ",
  "key34": "5xGoY92WVX1Cvo4EAi8t1oPyxQbiBKwv256RySW4NJ6rbtm8WXf2PdcR2uLb8TimB2C3C6q5eCav4iqBzqDyCcmR",
  "key35": "46oW2sseVMwCa1PmCvrqYW35pvkV6fWuckxnoaBmUHidE45Cmk4cyz2HqD2HrA8eiUFKkGLL4a6VDGwjuC44tyCq",
  "key36": "2d6VtLsaA4Uygkw5KHUuC2YCrdDKUZEvL4EYfZVRtYxcvjhrrL89EAuitMw8Ri1JffEGDYQAMhe1bNJNVLNesbU2",
  "key37": "4f9jYG8iAsHmDadF6pdHvw263LjjvCz2xjwzBLNjefSaH2syQuLueF1tRxKBP9kXreCqZBoYsy9x8CTv32jPa5a7",
  "key38": "PnBU6ZZHmgKCKfNSCkLAwG5oqoyaUjgxW4UEeMfhTiSWLrS5AmN5cYhvLkerYJLg2sdHaPtrs8X3fKv9NXm5EZK",
  "key39": "47jaLGZuqPjRppw3zqbed3RByE1ghFCiFXabp6zFRY7vGYLddxZXkmg6pmQQCMeWUuUGncPdRsNrPGK6fPr9fayo",
  "key40": "3zv7DrK5q4jf7yKnicXia3iau5UA9tinfkbhnhNNAyhJxVWKj2B6hT2V6WKwVgQ1o62GvcSCrsWCMnF3tD4z7RZR"
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
