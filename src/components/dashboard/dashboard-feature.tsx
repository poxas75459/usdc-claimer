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
    "5QA4qMNA9Q3iXzZGsqh8E4heqxDp5TnAGtYSJozj2LL8CD2bXwmTpzdGWJsM8TsEET2mwYz33Dq7rHLeA2sV3rhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "485JPPH4eXKxx8L1qH4JcRFznStYWcxLPBoRUZ1JdYi3sBUHNV2KwFm26LugDN1WcPZjBj9tpxZuAfpDfkK3sT6a",
  "key1": "yDvq8Xra9pjPqC7NfWtnvmXwRsuwGBBTsfocA3SU2DCv5sFXvJiKw28uengjt41FTcUpy8EAQ7UZfds5w8nFRoQ",
  "key2": "JucwXUSewyUQUr9QWAtTx4coFe3LWP1t1SghWu4WAiKVrhAQrrdww6qTzF1tGew2qwfbmvjoXdhDbcFpELi7zb6",
  "key3": "4jRie9kcucVLN4bgY2xAt7rWCMRqoHTkRdGjMcEjehepFzqF2xtM3Kj6LXL7av2UnFFx9o8EspYiYjyBdW49rQYD",
  "key4": "5prZx4mZBfChddYJNTuagTM6t6tPXdmQ3Qd1hXGvpz7oVwx1iM6iqsg7koVwusqydJW2haCbsXAtKcbXszajUTXS",
  "key5": "2hBXxteDfbSxboP6EDGvbjKZSQoDbRtr1V68JaoT2LC8xuTK9LXTdNivMBPyyMViCa9xkLtHxE2AEB7SfxaTHnGG",
  "key6": "51CqG8xCwz1seGoJBPocU5JHfvAxm7b8cFuy5sVuJxow2yhBcXnNFKS8CoisaUVBojh7ZWpp8hisXpcn5MmTscBr",
  "key7": "5nmHafWKwc7L2uUkHTUuRt2UJRdXF59uHcQNJUk5A8T8VsaQ2BSVAS6TfANhbhcs6rooiDUvjwmM7cy4byMyDkrV",
  "key8": "32t72mnDkAWgLDkm2yGkY5H7QSMdm1MjowJwMhyKKSm67J9RNy78joYMt36Nm3EqnrJaYCtEgHJ49yAgnkiXCVxZ",
  "key9": "3kWDk8dPrw3ykezSr76uF6BqwqAAKr89U4MyKdeRC1wGi8phJz9vkhwa71PBGvDQXCAtGWX5npr361jMDYwbEZGR",
  "key10": "34wTHxTTn2W37X6UxEBAe8jrQweoKHYB5CavYn3GZM83QiBnye7jihioWSxzNLZf2uVNoQaHAdgAEE78cAM4iXpP",
  "key11": "38r54hBcFztmnX6fQwJQGz7Zp6Y7dtVcbQfRF5yUSGLiNzdJAtB2th8bj9WLkCJ6wyFwN1s5wow7vvTazqcjmP6c",
  "key12": "2TWTNF7q8SQooTkzfkp7eJG8PBLACvazBxRbopJbhyvKFoxnafNjttXrdujfNaswjPZg5Sn5iUsQqQU61ToAY4Ef",
  "key13": "3tVbRhVDiB5JyeJh7fZAAebtD3cZWbqB1ZJssDWePDwra1mBKRZw3XLnB9guCDXvqxr1u9fh6raQ8aLRpEfd6BiU",
  "key14": "3mwUrm4vFR4CBEuLW6tNgF6EYA2gBkcMFzmwmPGCLvZMeGTxuV7nWWPNvMGWXo4FpjYejcy9gXstHgmcuZmbYoJo",
  "key15": "4QQb5RCjizKuYAyc5UzFZaNAyyyE8Kc1dW6ebS87Qc6p5EXfkZawBBKLdPsq627aegTaQcDjWHvBpuPEgnF2aRpu",
  "key16": "5pgXBCJze5dizDETgkjAHtQC1RwUR83KCVPcsA1N6p6wEBDyW3rF5Ry2onS67uFnJA5Q99LFcQMx593KUyjYR5Sb",
  "key17": "5Jz2ZeGWjrqfswgibTdP689mRnkLq3B1yQdxRXtUPXkKK8uk2i9uAcG7otUc2gBxMPgd9Aosn3y8M8U5zbuTb4AL",
  "key18": "26t16KrA77tzPH51R2MqboFQGJUzCNrVrC77VAkiWPwGrEuASFqUHqhgaq7AWAEqdCrnSqcDLENSswZXdn9HyncM",
  "key19": "4mcqSEtmGAH9wjwn7S7i5F4myHYtq6xMmnPfr1737rexzB4gD2s4oEmoGT5VVy8RjeA6GtbGcN1vj4FW81NLuc5V",
  "key20": "3AP8DWiLmT7intKzX7jSwKVu4yCJgpEbJHxkR6KGBpMmVDuqrDLJik1nNbmAbisQo8uVeAeJGjZxver84ytyWpzC",
  "key21": "5fwBeujbemYJNtQHfpymd72PF91YvudKcfw71BeL6f6FbaEu7QHqVFGxsAT7YJM4gTStkM9DgzY3vqUFE9Y1WQ2c",
  "key22": "2M5cUsZW1cQ9EyJpbBTmyKyMh93cH5hiexSPRf1TLrCYekRR3pHSZom7eXoGDxBBds5gWFdGch1wffcn2EsTMfPA",
  "key23": "4WEdzb4grFvaer4wG4UiRurEU4xd5PeTPixyw6p6FkZoaKrNvz9hB4DdTM9ZGB1qoSvVpLPEboG98f3489A5xjEF",
  "key24": "QVq3SKGh9YMD7n45pZALi5Fbqy7XGsqwBoW4J5X1VqX3qWRz6hp38jddpc1R5BKkZSKRzQjRj4XEh6M2gtdusYw",
  "key25": "xtty9o1ymoHMU8EdtgAQcB44i2VngUU36BUWMkcySAJoyGJi5jBptzgF9Cd3TuPnrzWgpvFMfTHB4eVAo4tec6n",
  "key26": "2MCJyCX3EWPEHgwznw2gPpiXRc9xDLXmQUQDkoH9CzLT2QW92cZ8eyuSNMhhLJnxpF2aNVYGrXFNh3LZJFSihMT",
  "key27": "2TmnN4CUQDEsBdFrNB2vs2SEKAADEeUsSwaYeuYodhoJf291h1SbLqPw57y8qS4abq3zPvnmztqREMAndVja7TpN",
  "key28": "2J8RtMSPrfQ8radtQDHdukCsW7axCgLoJ3V1wmsQsybm1Whw56HK3d1NFRSVuQkcAr9YJ3wxS5MyRWCzgMuQTUwq",
  "key29": "3x3BPUD6NPyPZG3B9RkiGZ2iLpVxFD3Q3UJ5ydHHjD1k88M1Z4oNLfA9covPwqUqPb3JHA19TsDTAfBrcoPh5XJ3",
  "key30": "vv3hrarVaSXoqrFAv61PTTUBn9doW2if1truWz2hPKKwBSeV3uF6iSqxbsDW7cP5BwdBwGUtHxAjuk7xfrcD4Nv",
  "key31": "5J5piBi48FovqmfMYS9zFR4eqGahKkrSp59DVWkXnobvVxs8jz5bU6Ny61AwEcJSUU98my8Y6pQb43zWfDoXrk3u",
  "key32": "4JY6Cy1VS25iRXEotwZJh3yq2AgR3osXXAdRvEAYf6SwBLoyR5m3DwfU7X2XXXwNCYgLPYcEngXr7euWq9xQQwFc",
  "key33": "3uXJ5tfhCTSRV2JuoNTgyMWoBz7Ltkp2freAQo9ijSghDYNBR5bkoMyuzuFYPkg9utk1w4gDJ5LuupCpTsqm7uGe",
  "key34": "2H7rFWhYh8rEKEZv8Co8dDhJMuD1WStaTb9yxsN9myDegnpjE9eAZW73wXMEbazZwnPhpa5tzrNNLHUyQKi8Q1Jc",
  "key35": "4c4NqDjDLmKA7qyb7iCDXg48yUrp9SGNqUxdRUJ7DEUqQRXYD2HEXEc7qYJ3XyA15wNwAnWTzMXY3VyJhuHM8iMG",
  "key36": "4AiPzNgE1vTdm5823vt3urhghGH9ujpY7ZcPKF6LfshLDgjWe8WmmnarSeYNQvNjWRbeHPu4Xyh7SLEHnDqCNMsF",
  "key37": "5rG7o7PCGDhUbGdB9Pjdii1yZMwfQQY6ygBs7T9EkxVZ6cgAPMkEgx64RpTRP9TqaPkok1UqniNvGZDh9GmTAHDa"
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
