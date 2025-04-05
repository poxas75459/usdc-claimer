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
    "2UJRiSpEBnxieYQqgi8pWXNgQjhC4mZB1ofTKBSDidfv4AekkWsLyuDcpvpemYhG5KJkRE4MQsnyZPxRNuwMYs8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooPMsQiaYm8Rq4DBhZ6D6P65yaccYWxQ2Dk4EwaST9e6E44LtUh4cBekTRqukpxFTmMwQ3geuBRrWe8aQaRjtgA",
  "key1": "2Ju9oH28oK7MEssZjK9ZCDPPcqmQLUcHwTTVcvLLddMQt78Kw4FFvMk4yUiKxPDNj4JdoojyuQZGipZeBYJ8oRRa",
  "key2": "3ibmJyLXcxfaVQ7zUtTgRovRw1tc3htMfvcJJqsewpYSvBJ3cpaKQbAzyE95gsTd6b9cGT2JVvqimeM58nTNuvev",
  "key3": "5H1Qu59eiKg71t9kcwAU5C9FtTT6PakZrt3xgDbDK6FbfzVRiH9F9HGcG46HWSk3z848u8nagrYh9fcKF2xvwPc4",
  "key4": "QhyKDUFDYGvi4C3GYomYGJHvoAXsvQjXyW4h8zeTT6gMTynbYTcnR3hGBe5zmKqaqZvAFDCFZ7hrDkWTaPPd9M7",
  "key5": "5PRFfjGACJdu25wHae48ysGX9m3ZVFypYDmPYPd6sC4Debc7GoBMug9giSUkHd8xUZqNbWSYjB73MHw927Mppr4K",
  "key6": "5uGoXzLbZJh1BurQYhjRC1XDgCgXnh15Xh9ftqPiNPyqcs7K9b6ympKumq1G62aZ21KbP52rkDsuTiB9YghNMiyQ",
  "key7": "4QCreLyvDcBagAXmZndZw64LcLPtfswZEvYUuPq4T8dZwLAUydqGntakwJsTSCfmKLgHpPwWN7pv9esN64nQrrcq",
  "key8": "4jXkqmbB62X99z8dKgzjco4QBgemhFSkLV4nt3hVgUcoecLrf3bszKvuSAPqqic1WEwocZMKwRe7UkKCHQm7Lx7s",
  "key9": "3Ay4xQvGS5rSQy7TTBFYDZEZV4Vw98QAdLYW9SgxGX4YcubrzsEtv59sUgvPJRq4279mq4HqjzovRCawAtpK9pvj",
  "key10": "5v8oxSakxxB2yXmsSqGTQ2ae2FKTDR1oZuwff7ZWLe3DH7XxoEUeJAJYAwe9wEYqgaWEHpJRCaeLGicTExXtfpvL",
  "key11": "46eELZjz5ZrcF7kAARub5gRBnMDBjxtWfYQ5gdxAJwCRtYnNb3Pyg17WK2xdFAh53WvYChL3dDmsZt971bTwLosU",
  "key12": "4yWHvnmgopxN8wReDjtQ6L4Pw3UeL8QAicwKpsSPtQhZzgMZbBXTDwguVZp8oRfQD3pbjsFq3prQ4XcmZoWkzand",
  "key13": "iin9CDtfqCrrL11EWT8Dc8JQnq2TU8yBiwLdxJpstKgCYtv9Ao6kn522CZQiy3TJezbCeGHnJiTacjBjZkYYjL4",
  "key14": "4P8FVQ2iiVhrzVUbbngHvk15vh166Y7781K1Fb6dmCnvVyPq8jDwXJjovU6GWtvRDMwCYk8YB9DXemBM8XhDLrbd",
  "key15": "2onJFVB7MBdPNWvihhQTWKpEZsQMLNWtuJksoAxo2vxWScUFGwZkww2RQN7AXqVfaGhRNBs3kttvq5Z2wtzVEwXd",
  "key16": "34TCiBHx42AgWEWLvmHwymwMi3dDsgRxLhVKayT8B8cjk7s8pX1R4WPJUTGGoTFPVdAXneeryd7ExWHrFvUseQEP",
  "key17": "zrsJwrJfSJSLYwj4aYG6sTrDYMCvXe5L4RKFsfbpvQw28oUgDyGysxGRfxBkiCZUfButEZ5m1zQarxbJDZcNKQK",
  "key18": "5awLw7W1wtgsdn2KQmPCVxydkivkfwTgPjixD8dFTDh2yKhQ5gpZrKaNsHDQJubdrqca6QbjfHcBE1osWq6JSwxF",
  "key19": "Pk4pfr95h8xawmP1segXw7K8AU3QrQiMSK2YaH4naP5VNzPWVDLqRaRsGcDqAPqCkReZxX6SLrTfbV4VQWFPMmq",
  "key20": "5vcWNZHNmNsBqfmYDjWCPFjtgJEaPL6s9ns9Tue9oWWmZVFmXraJn7H2Nmmjs2uqyk63ZraqpBrY7x6MoP39WAdk",
  "key21": "32cQgxcY9QLa8eCBKNQ5uwrX9u9wxQcSGinyTJJ4JeQZNcBtc85TkWgTBwswL6AUkheKt851ZLC9XSEuRNUWSt6S",
  "key22": "vi2gTjH35PpCp8bWmKNQ9y7zzqG4KqLNeQa1gZMvCDbe9b2cuM5rgwEMVD52Hv3q62tqwSxL7TFRtkZUnqoWx4R",
  "key23": "2R7DqgcAeaJKYdi9TH7z5GGJJmYc7xrBy8VgUQ8VrwjC7M8sjmxw9CC8T3g5daCTEpVJxeJ22UiV3XjvJLDTGdQA",
  "key24": "5snU8pb77VgHX6PJ7X2qyr5rRuBUgE6iEz1inTBvyjxUd5z9vQNxinP2yJamcDk64HuNebCn5hvo5rx32VasU4MV",
  "key25": "5tKQkdjQtYPfub3YABS66XwCecnyGTm7Lss27iymuvdrNACLbdLy6hEQ6ybEMSLf7SKuMHUPkMEjpV4stu6Q9mX2",
  "key26": "63KK1W9Y8vjyzZ11xr3LRvViNe928kuYjBXMwc4vBpJu1tGdVGeXPRQ5AuwLztebL6yrWQZ5rEkY7qpzUMVoDtci",
  "key27": "2VTeAtR7pZ2uRAEbfyQ9eJxFpMB8mbY9ekMReczETSqgFEJ9NckQFfSGj243J941M7b6vWSpPyGen2VfVcHYUrbx",
  "key28": "ALfmCo4q9DjSxii3FedXqNBMktx9kzUcqoAB9oBiTjHGwdJaKc7qBLJA8v54jbcQxnbZru9H1jfbkgjX99xLEfE",
  "key29": "5L5f93FG2xYHEoGRvvQasbx2fbXTwwbWWmhJcxxn9rhUF13ih6mvEcySNEVyTdZLGzFah7edA1AQ2VjkJEs7ZhWf",
  "key30": "4DL4ogtaHebuLftmz1gWobHrsQJNkN7sRFJxhnpe6QEkBpDeytmSKmXop6WcFtXuXVBsNUYQ4js8vifacA4eAJBn"
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
