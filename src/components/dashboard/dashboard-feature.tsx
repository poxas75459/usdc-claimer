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
    "3ieewvupyuQB27S39yhK3dDM2DzhS4xCwTupKyngdgcwZQpSZ3MmQJGrvrsWnRmEZH2ibpMePtQ9ZKXrfpebbZ1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADijGc4MpNzot6ad86NjHqjHmNdpZvktY4ECVtK9nCtig7t6xhjEy269KHrupipvyxcKoJ7SoPhvdiF7wL72544",
  "key1": "3dmCsGToi5Qn5kusAe4ER7UpHWHerwbm5ekP4gX4p1YvutPRC7iQLkTBbHgMw5bs6sUjenH9uarydz7eFTF6LH7B",
  "key2": "2yF8TNJEJtqWeJQjN6aNQq5Qc3aFLoocynzQChTLHVDKgGkkYubbv5yDu3LEhAMt7G2XEd4LcK1JSXdeKqVU3Scs",
  "key3": "65nR2WZftrm9CrUAyXJdGbVGT6MWCjhEZwGiJUfdGRvrSrZ7FyY5y6pG5af6Rw7JqKdtEzEC3cRnkJAAUAbRtyXj",
  "key4": "n3XCJStTtn9vT4Vi4DH9rZNnvNcdS4Ko9PAkNgQKy9n7PEx6UNe42PMLM1www4N2tbWB3Y8zqR4j1wE3WTXJmPQ",
  "key5": "2u4NocQjAmCHaEUo35Raa6WXbJ7uTpdxaH4or7ymHc76Px3wSw2haKJbQmTVrv4f4gZQeVrXSBYz3bMoCPDgBYNW",
  "key6": "3DnXrpGdczNfySRMJewuNWYg8XkKbgpmneSpWnwJEj32fqKZDb4tM2aosCMMd4ar57bG5beo4GSYKF1qsahbU6Jb",
  "key7": "2MqwNXT8pVruXT335yFcT68EBvfcRpYvEJ9ULhTXbX5k2eZiTXN6k4NaDFRzcuEo5vvMdPYhzf1RwjvXeQ3Wb4js",
  "key8": "2RWu9kuf7jwTdotNasiH6GrQxmELJmYH7dVLg8LGQ7vSTzVfg7byiYvNKTy891EhBJFvC8oyt8bogpyLRY3zKkS6",
  "key9": "4nBkzFUXYzjLgHY41gfstoQrXXq6xuSYrN4D5ahhLwmScWp2AYZAT1X4b8uD8wjuWY2s5yptjtQZ2fVd37PNPCzV",
  "key10": "5nJgEjjKiXhkKrjXXbwqFk8pVBJVxLKgWDjgiX4coMA7ehiEbbW8XjnSbGz8FukgkWNCWVq8k5DsjqpcW5dyD5s5",
  "key11": "onMzUYi9A5aA3xqmpTQrGHu6PiQ57aJqqzUXtm3U6vRUtmC55HtTQs1m7sutFBsDzENGCiHm8t4osPz1WhgKEtd",
  "key12": "3iRvTRKgzHgzFkBcXgjMwi5ib8kfPypQJtFTHsHuQRZqDTjgB6rqi5wtYm5ehUdEiKZUiAQcHWdg6SKsRtBAMK8S",
  "key13": "3QeXkKHEdj1g3xHNfZu8tUGw8vQZd237ugZneP9sutxvrr43X6e5FkqEnU4T4v1CzSSmjkoYFvLtWFtzRxUJvKhe",
  "key14": "4EA69woAQ5bvtc2Vvx7PstpHKWV5fQJ8XP5j7pVtnTx8tBZUKDy4N1iE8bdfGp8jVUGEHCNrezsX2xnpVTKkPKXs",
  "key15": "5sgKQJRQozjjYxZxvMzTQJ879MSJo6R4M896rcC4y2WFsQAFc9AVaFXFWp4qBXRCVebUVF7Km3QeyfbQfefv8Nsd",
  "key16": "DkTKEKoh8fwTt4WmBkkdGMLqoJH2qU6PBkURXc1T2vUAfDCM3CfpBV136Cf1p8rdGfo9qexwLbKHamo5VdfLvtL",
  "key17": "48wJqUf4266ebxU1Z96VTeYc21JZ8jJdJHxHdwovHZJTcZ9FSayseS1X45p3RAdkpajag6BANRowXx23fKuCyNgc",
  "key18": "4wkuL4AYqHz3giB9wFQmDUTiNgWf2cpKsAg6pQFSK6AYpMGpVSrMwLVYozjuxcHAAAW6My7RTS8jmYLjUFw2hEZe",
  "key19": "2LfYHf7amkCaRzhYUZ9UpoAMRrZXk18gUu7eQFmnewtnDZUPFVEQJDCN6b7vaD4Cx8fCiwjjeKN4mjVMHeQmm9iw",
  "key20": "5HvMauzaoJaxgmdZAREA59fs4RT1qqUGxxvfM3NvVfWMCmpFfjatcAZ7hPWRaYEkZSBggomndPyq54Lp6mQYdo4B",
  "key21": "5PTxaAtTXX6LWwyR4J81o6MYMtKfvpta6kxLAo5LuRiR2YoNMTmZp9DyZSrk9XZPSMP7TwjVHRjzzKMG1ma7VSqL",
  "key22": "3bRE5FckFVzwy288dfYMi2Zj2PjogcwPNcyrtF3L77m7xGnmaUsp2WL4RLCEMabK7XAT8fGiSNgX745d7mUeJphs",
  "key23": "FVsQs22PGYvnxkXmUPf4k854Wm6owjghjSiZVqSCiGPMHzGEtn3RsWpkhagMCyR3TfhkgKdXM9pYESsAUfjmn3n",
  "key24": "24bHYYGEA9wnnxskQT3poucowopoZmmDrH6gAgaKTGAjpQAyFHNNPGGtqZy8pY1huBr3QrkY4Pbb5LCc57EiEpqm",
  "key25": "BG5MDdMDqe86b4dsvsQy4Dc7yjiBSwEoEx7KZuxEySwKSThiyLWLuXdJKSpd6b8qpvg9nNorFqn8qd9HbidY9xo",
  "key26": "2xrg3jEdxb4HGafD7mJUfRKEbJfSjfJrzZawvDLqQWCSfKAZJ9aejrmWVUjbcbhjib9YS1xUW3yt58w66h4aPiX8",
  "key27": "4agJYWEu7TpLEG7GtenCyXdhF1gK1Euz8nBUaDHPBSmsh8oq7xMF2ufLpVoiQ7wTX6TWPFW7M1b9RvX9Vhoepn8z",
  "key28": "3nofychNuUoqRpcCbSijT3M9xZSaKAHyHedbBGsMz2EKWy9Rfmo7TbUnGGFimYjmZBZZaakh3LwwT9qE6ReMKYsJ",
  "key29": "5bC8a1HKN9fhMdHhNNGj68zFk2ipWFdh5Es7ozenTaKowHSMBSwacNrmBKFgh3pAk81tfvzuUZpw7ysTVdFa78nS",
  "key30": "5eC24VcEv8c8JN7bovNRWno5jW8DCyTVwFGA5b621qSwJRacqiGCje4ceF9eB6GsFHtGwsni9UVUYgajDDDWEErH",
  "key31": "5qnFmCsmWP5tDKBy66jEuvCsWV6WVrzbmJqj2G33XzQJYgqrfasJ6MpybixzYZ1cfn1H2dmJg6H6K5Dhs9ADnVvC",
  "key32": "63YbN7LVTJaSn5CQdhiq4AyKWVUT5u38juc4R6k5ENJ8CXuP3hUV9MizzQnj1oa8nBKqBdTSwShy767NJ57GYVVM",
  "key33": "3W7J3x6RJkQHXx8S3Dk435GeSj47Gj2egyrAfMdEJbLoaQr27aSRKFDQY8RjsGyL2DsZtLhexp2T5PJBVfzZ884k",
  "key34": "2vftoWLp1oPQ2P3tTD4WxH6jfUPunNvrRJZPJLoZtsMq4HLDwMCnSQ6mMNiQ274dApWb9a2JRkwRTrswCrPdzpKK",
  "key35": "4srBjhCsdC5ptSivZaoTVD97T8QGZd5PxZG6hF6C7wJMngMeiEQkK2xeuKUiFpE8oRnGH7mBC3sh3zPTjsVummer",
  "key36": "2SNGJTPeU8QqqtqjXn7yC3h3a9V85cHoB2oebsPGPi63PCLxLHJnXgTcoYT34bmgM86LvCvU5K8FFNCq6XHsNFVu",
  "key37": "2vRKktvq3dyD52msWCmTeVZQLgmQyhB8zfr1ETSbx2BH6p4Y9hSCXu8yYR6h1wz4P4EguTtVo9mkSxKb9w3VnBko",
  "key38": "3t9uJ6NWULDF1Lt3BMxkz8tQ7dvSSuBkZqRrYAQZK8wW8phhnULhGtCvRNgX2ynhcF8N1qZzNCoYhKk6bPg2mksE",
  "key39": "2XAynqH9gqsAXTyfRM47aNFp7M9dX4gfzLQ85yQxsmqxTKkaDkM1yDkkXuvxcFbGHZ21eG6TWq79SEqX832pmtuv"
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
