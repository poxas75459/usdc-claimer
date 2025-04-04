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
    "2ZES65FKBFSMUvnG7gDZH2kPkRzqTUggDf2rKMJ94fsbP8xtizXEVaNrhz6xMTPZDgnJcVQaSUY8UBtBrwKc6uQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RryAfHqqTMFtbfYrJqL36nwehZLwErLJcpERnNbrfB4qBksK7EJXdiemNiyFtXJBabEEVNrHhoFGMXwSRZDcXT2",
  "key1": "2PjZJjNngSgYp73A7ngxYXvrgLqySjSh9rqGJNX6TcVteqjujQ6L76uad47D542TQCSYPMEa6Vm9RznuiEUu1pF2",
  "key2": "3WgZwcDefZ4roSTRhzWgaWs3AEukw2uvxqVbN21JB7qpJXTJ7KBk7X2FHVxdZDbpiYCQd8YcCZKd9HRotoUzL8xJ",
  "key3": "Zo2LchRKc8LKb95WAu9uiVce3y4JuYgAvpXMELpLG7nMuMyeUMBCD8ZFP1V1iv2RAXzmZLu9i5LVWSYQpFBKj65",
  "key4": "QmpWzxEhjJ6e5ytz9dc4KcXmfFk1L6ZZv4SZ9XPHDs8E2fazxYTrtd2Ua9aF3eR4gRcZadBdwG1DmwP94HHPZ1E",
  "key5": "42unSfsHqTdhxMYGx3rey4sLCcQ3kNKY7mY2hoLiCZX1FdKa31Yh8c3jco5CQVMuHu9oTW8xAtMpwgxjCdzVdNxf",
  "key6": "3APabdFJ3Qg2vHtPP8V2FvF1EBBXKC8CrtegcsFGyGQyCTedHjUGq7p7ZHt6uSYxph1NwHM4xquHGu3mLro4bCqU",
  "key7": "3MkyneiZ5YGMsnx4haoESvw9bPZJ8AKWqwe8geoFC9knG8cC8B6rrMXdVrRTvBh4u5vMMDY4mCJFxxL3NxhrAz2P",
  "key8": "3DK65oYXwRtDG8L3pBFRo51QcWHE4tAzQXu3dJzdTHTvSsWDWwviEcuspCXFL7X8kGx87ni6rTDzxeTBYMECvEZh",
  "key9": "545GuDxtrZ3CzPttqEuuze61xH18skR72UZj4QL2CYGiE9B5gjG1ho4XKAgjTyN5LHXagUQvZKvw3Wx48771SN5A",
  "key10": "5PRxLE2yRrKqygjE5MVQ5DaKjujBufv5fugLmPRMhr9EqZzVVVdmoX8x5ZYCuLPzsrN6f7NJU9DvwtaXLNaPC7zi",
  "key11": "2rkLCmmCwKZfenFv3wuu4FkL1YYwRSbRq5yyWi8DPfM2o4HJXYG4gy6yQbFzw2ioWadHphVjvF3KhejEAEmZKJqR",
  "key12": "2YTEyN2KVUNBth8iK9VKs2qw2MyJ8m5deWJtLFKogDrUivm5yjAHNoqScdKtqW9mMRBD6Gjy6h6jps5CdAYLxvyb",
  "key13": "2jPqwk4Ehhx4ePmFX97Ps4sQFqdsHhKeTAabrrEkT2DUivgR7TiJDAb9UkXja8W8SzoLX42ZjttGpgCvuNBGPB6u",
  "key14": "3uKQL54y4j2RwBXASuqfX8faqAjd7a9t8tEWpwPPB3Y8UhBSyZYCDJk9cwYtdTcgnwVEY8Gx8GsyHTcvQ4PXP3XH",
  "key15": "3xGizsR1UV8h4yoPJHtV92rHnrG3Qopo6BoERpCtEE7RfAtGTKuWNQp7FJK3h1hSNAkQTP3dqqdoG1YgvChLM4Ev",
  "key16": "xAXyAaSJoPKbMDYnPkWWRaMFF13uAhrQiBst9SVpugBYPGbPHQpUMpPc6MHbvbBmt8NE6ntkJD8p7TyUrQTmB7w",
  "key17": "Ym84YuTDkEATsHXzJJ4PGiEd9EewLVr1BUZZHibMq1bfcrtAXiQghY4bj2iRi84meLR5ZHZUscnNK32VFFbowqP",
  "key18": "5jgSpnUz1rhNWScs9x6xx5UTKg3566LaFRqbx5RKAbCUJQxWFW6sC5NcnAyv1txtVTNj1LPS5sfsqK2q74zpZdep",
  "key19": "3gVwBPKnEMRjPhdWzYxXot2SfSHdfAG8kw1ZQz8ePaMBQLQMUYvhWe9r3ALL7ta1PdEUnBkgsbvp4Tis3JqeHSUo",
  "key20": "5oYWdSrLChLQ3JSvkhpWTbTb15s9tWmtDH4MH5btxpv7o4LLARR8HP8b3qT7F5eivXSPvDdCYFMrUEt8Tn8h9VDd",
  "key21": "3A7TcWGY1ZfhuLUFs7zJRdSn4pAYb3Gpqw92gdkKzAtWRH8VnnPEHQWEpC6tVR9t7dv8badgEvKTieGeUu7Acdm3",
  "key22": "5MHihurpXzjgLvtbzdewrvM4xaLZe86XzJaKizxuT95ZGTEV6VZSxgpFoXHykBTPUgGbwYCukwNCkuf6udyPGqwF",
  "key23": "46EbmzbS6owxj6zQZrCEAy4TzYVEsk495L46ZhRFRGWLxhDjaZ4w4uDyZKNAV4Zz1GbDKQ3h2Gs8PpDPQhN4HYKq",
  "key24": "4s8Wem2f6wNxyYX8vzrY8MeZd3eCYkQ4Jwf5Ma7KXvj5yCFUa83B87yxvYrzyPmfkHMupY9FErFFUyRQeUWoWa1",
  "key25": "4mB1KjRHDKJ1tJPThW2V2W25uB1bgFuvGaFkDaj4SEHzAECjrrraeF2rqfL9KTJaFJ4LiHJvgRSYb6DHTAf2DjmT",
  "key26": "41NL4w4cYCN94Lhi5DzbvqYAFuHPkPMR3854sN3p2c4XPyGzwM6FSJCS3sU8kgaBQjmi9CpUL5t6W263N1bNbtyG",
  "key27": "5yYRaCMuspG5wgjq74E4rV5YUDJPbhEFQ2HJm2iC5FwVJ5uXfQGMujWfWX4ks7zU45GJSgfnwpyDS5sA3ffz7w4A",
  "key28": "2bwkZ5bAnxDswqoZmvj8GogmxJrc2kRWeXQtVAi6VYqaJdpbu2cKJw15WxoXZhCUqJhPhujJCug8K8umaiLzfZkS",
  "key29": "3NAhcWh5nYy8ZkMgsWgLkUeZYP1GxwLfeSABJY8YUa9gdg8Erec9VSNKFedp4xUbcqDjoVsTBZQonQksC9uNvVx6",
  "key30": "2MmpRhB36jhSgd7mQZagHFyfENuKZ4NhYwG9ApCxDFHTGzgRJqtuJY92Y5hrk2ifEPB1zCodbKWEYfvKc5DTx7MC",
  "key31": "4E8GBg4Fqrr4sQ1jffJBCUbjVXpHycVoquUKBi4bUzsn5C83MenupM2RgDzjN6i11bd17Ay28HnBA1mF2bZDB34z",
  "key32": "3ehtFqRASwPMC4abFss221zrjo11GDHXoupxAVDB7oow1AimrBhXs6NDW7tvFt8vYZc9MsHzg99EBqK3jYbCGF8j",
  "key33": "2GwsBcwykCVwGX2J6iH4zLxFSBDJe5Kt75y9233v9szH21iJkEdK5c3xzH4jPnvoVhJEoW6sXtZ6yC7KV8LZJZ9y",
  "key34": "guRaF51iTHAibNi5z3U76X3LBeFbnLw8oknDA9ynBXjZqgSP54NyPS9EPPkLusMRfGgWDarADkjJyD2M9GAfmYe",
  "key35": "3m6kunmVvB4KtvcAZFYGUJTc2ZZ6EeYPv4ehsabeB5XjUkRDySByFhT67y6wAJZwBVTwXkc1tXXffRudRbxL7v1z",
  "key36": "3C2wwEQ6oZbHtgrPNqxr1eTkT3zQb8nKWm4ugdxanPE6rN6KdxRgos5wkafaRYU7V2gM8ycHw7oT6EYzqXthV13p",
  "key37": "2TV1giVD13YZ7UaQY5kzJBGBqmt31M9HubbQj6YiowgyvLn9jgQnzcxbPsd3Uun1gho3Mp2qdMSMgCaCCx6WcTV3",
  "key38": "41JWuAerZi1zHhVZwfipVkNSYmcD1x25JaFhs1fpdiaf2cenBvwdfUngRpSS7pU7h8Cavauf18UT7d1Nq8ogv3Lo"
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
