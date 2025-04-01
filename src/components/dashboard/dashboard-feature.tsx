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
    "2fRB5J1GojVwNhjBr8UEksHZgKLJ4v8jDRkdK1sRbAveMV1xkuiL4eGxwquf2YULvrdr4L4zKjF1zRa5m5XAmFBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHDixFUMiiHF7Jt8L561btVkzPm3wMQsYwsSosJvHMVwUT1N3PAqqdUWYKEdCVBLXbLjqNQJ6KvwjLg45jAtEn1",
  "key1": "4ygaTYvMnU6LkGmJsXDg9LNmHTNwAnD7xqPENrzBjXQUCu7UW9JqTdZE4pWe6y9YT346DMpSbEdhDGcq5LcSy2w4",
  "key2": "5XJKT3vLgJJLrNKiFvfTbBDcbEAZEkWu61myqRfv1siG4QffftQjA2XksEusGUKBrXVobt42FqZMjBtiBvTernE3",
  "key3": "3FMmYDfNDJrwkrG65GfqLiuvW7FLPFZvdahuSzAimgQzdzfthvSvCHSRDL7aGear4SP2Z4Aj2XF1C5Qo4SDadqTr",
  "key4": "VKY7GWY9qobb1pV9g2ZZ7b1zfc15bw1fYcox2Eg7cBGi9QrobZuaSYHBLsAsKNwDBqPyfbXne9VnW8A43S8En1H",
  "key5": "4zgXpGuU1WAJ2p4ruAv7X6b3y6WSv5UNkyx3SaJES2BYcFDuox3Y6oHxxviUdvBZMtVNNNq5L975dHLHGnt8QmPT",
  "key6": "3yvYCs9Rx1U3oP8bBNjqf3bUGPRGzvr6Kv76QaQnUSpYo5gfuVD7HzQRzefmcqKVz4sBS45pFUL5USEpkCFYietB",
  "key7": "5qPZXGy7n9wBuToMqiLb2W8rxfBcr9jST1mPX4urmbzKwVR5mccT1bTPxgQxJKpKyZEH9pNYWbwYYVQyEciU3vxm",
  "key8": "3MrnJLNKptF1hcw8WWQZJm6EUVsKoVexhgA9jxhmQZ29hh5XJVn4WfixRLZobYy3VMukDbrq2YuXKXnn4xX7qnBA",
  "key9": "4csbHU6ozHUsrfspY7PsfBRv6GXLDvPHGVupvJVH3PFyL5Di68vy6e3zP7zKnKw7pWe34tvV4PRLNABgTRkmZRZg",
  "key10": "2mH73thR1efKmCvkpPjkhjfDKVfG8HSEtUDaDYEayFDmXXZc374mrF4oDahtt2AHU2nDaotuJiM9ENKvrte3Y6Wh",
  "key11": "iDtuPhXSZbbRajPzjs4uhwFazNQQk8beeGipRpyGVsqYEb96MuMm1Gtwor68cUSWp3ECcf5AVmtSdXDEF5J7HVB",
  "key12": "2q8dSZhfn34VGNa7MT67czgNEnALxyrdB155eqZQqNeksCoF4eYsyVRegUdLKSxioJ8ToeA4JtwxWMVUiYJHKL8G",
  "key13": "44xyfc6Zm8khL642PBks1g8DAh6dD7pGG5pL5vDqR5TNf3fuTv5NUymqfN4ScCjR1y7Mcr4TjGucyrxpmGkYreaA",
  "key14": "4JrHfKV9KU9zh4iBXc5Em33dwYyRHv4NjoYvXxg5f3wPvxRF3Hn613MNQ56QCjMZVAYJCbfP5XW7J4uH5Tr9yZNZ",
  "key15": "3hLR3ZLTzCUiZsaJD4AeRiLU4teCaHGQV6Let3T54ETuWBtfofCKC5zXeKUQLwXJw1GDMTUj6p1jkaeAFxhWSKs9",
  "key16": "4epPLwFVM1VymR9of8pE1jYaLX45phkby5ZtGLwEB8Z2JBAf2xn4PSzcvgi4dNZyFf5BspDfMMLRDubzaAUs4Mue",
  "key17": "2g7o9cowf71V7wmuyDUevLWHM6sAHApc87Zd3RiyQTmmVZUGco3qHv5pm2kyL5Uk2CzZazF9BWC2pe3m4Kj6Uo58",
  "key18": "2iCx7EZxB2RHot4T9cLRrGR58wLB8sPnkzpSKH6tvgf7X9uN7PBdLzfTsZhupz6wihRVYLXz1unvDPdKGt3FoWzY",
  "key19": "486XR7AQwAZxisRhZo3DA1Q5GrrEdZQjr1j5vdLren8LhDsNgDLET3G42KmMoj5oErqs7S3dkywspkb3P9GQNmaH",
  "key20": "PpSjNrAWWZ5XttoVZz864Edm2j8qyxXYjs1tb2GhDEEEwC1CwJrxq6h8Hj1biGdczEdABouumQZ43hHGDjeGYPd",
  "key21": "4J4fmU4Ufu8iLd7ZCxy6bvbEyviCrZBNHsr2cz3y4AnsoeqqBAxWgqWq67dNCv7brsvfQ1KYpXtQA9ef349iBrYr",
  "key22": "5DxmCqHycP2tXEcKmp11Tz5J3e9c1vD7JWa2NfDx1rjoq9Tnpi71poMsScsn99R1TL9BnN3baXDy1YMCeVdxoHSb",
  "key23": "3MemAL4EprdPdKc98KxiiLzBi8TE9v3LesMnZbrCXXf9rLejjiU4nQYfFqk1Yf841826CkxvcPLmtYMQcQ9LReq2",
  "key24": "4Q7s9N4GXArY7kr9Q4qDXR8B5QTP9bquQTqjBXMSgQB9E6mHfxynnvKy4uo2Re43y7ApWTMzunJqhp7Xh7CVZTNw",
  "key25": "3U1szrAX1QosfVTj5ahJ2jQrcF6e1U8wFPEv7bxupbs5aeEzatz5CGPJivw7nhfuuuBLVKvSREFkLYh96STZ55PD",
  "key26": "XR5zQgFvEksHTQ2WK19zwzrpUAu2nnAZ5LunRquuXsmeyTcgFq2Zp1YDiKj4r8YBR5XaxvFdpXokFxsAREQNtrS",
  "key27": "su4QtC9JgtkburgrJpUfKrMNS5zha8tQqEoU5LwGoXmvUj2hJqDAF2tzCSGBDrNWPKCVmd3stMTVazHoow2uGVh",
  "key28": "43x1nwN4Zc1KHSR4BSZYREUTj9uLXoL6VVqfzKEJcf5m782zJ74Wc7gdN6Zc2j92GyAC66uSXxcmWbPhFnS8GqZY"
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
