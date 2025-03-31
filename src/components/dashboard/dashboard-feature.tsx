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
    "ZMbZ6C3chy2ZSwxvEM2pP4erZ3vMxHD3h1ST3wUhUBUUV9PEZi9PQTWssGF3xsG6KsWm6phZoRBGWuBEpZduBpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjhYcetVaR31dA7vLwNSVV4JfTmCm4VzR2QuCHo4XnN6BXXaGMAoZjeCxKXPwRyRbv31DhTKEPpzufMNEEcpCuw",
  "key1": "383ZpJDzZGJpeizGhyJ5A2ZAJn3b9kkF5YhPKno5GBsr8A1S5enZ7Y5yCyoNo73MVRrHi3abz1TgnGUY4NUQdyfT",
  "key2": "3ABPPzeS2fDZw5QKP4Vc85r9A4STHjVFL9wH76RxUB4vqfp24yHHmHzpY9Jzg6nCwSVhFxh959wQMy4XK5gKD49a",
  "key3": "5HK4oGXevUM5vVSewNwE6UpWpxSLyUq6DBvahJsFuvovmLQtEvUu3tMizaCWX6g9KW6e6Lk73jqvaCK2pzNFA4P8",
  "key4": "4XzXarvzcz6vougoWCNYYnAGKxw6KWjDsGs6Noabzr8JcSfTmrQB3Xo4GC6CvfBGF9m2SSeeDJBDe4uQs3H416d2",
  "key5": "3Q314LSwK8cMcBBwoiJxuYDuRYhbskQqLyu2Q8SwD2DqegqJMeqoKnpq9LPyGQJrBG2E1v4gGHi2f5suZSRMRtqv",
  "key6": "5pYUwQPJUNt11EXucfEtfGbkUEa4QhpHh1Bpd47ZkiDayVxG5aCBuN2RtFG2oBtHcauDcn7Jvv89D7SpbRuR4v9X",
  "key7": "4aYs2Ji3pYmCZqPqSDvS9eUEKvw36Bn3GWTDNxHpgbufJYyR9vWd3AY8gBsfjJmLgX8M4g1ZSVWQCt9TPBPuEMzf",
  "key8": "3gqwWhCQiesNqzbxCxgzGwUaX6KDxnxFN1LSSje26Jp5Agg3KccjSD4Prcwihjrcyf5ner8UVxkChzyEPAwXRaAT",
  "key9": "2rEGC6xeSRVM5RYrf5VhUfcJJjfZ3TmGqvNUH9n5V6PsL7HmoHoBqXSBiAJopEdpAd3jCtUWErAswAmYJX68gcQj",
  "key10": "3oiteVBChEfcCMNJGA36Smt7ydF9J4vbrceb5cH3w2SJGGCKyR9yTzxrp8zbuZKvZEpYQH6kc9yFxj6Q1RUw4tvf",
  "key11": "Ha6TE3Pj4NtH7vinoQ6JabVq65KdmStEMprWNcwicNQsq1Q2wDrsoCHN31ZJXMvUcn3h8GYQQtz41UdrY1xF8w9",
  "key12": "32RyqzkE9aLCTiUWT6johWgFBVcPL4j4Ub6XFrq718SmVnDhGjypZJ48UU88bKnb42BJ5hSg4tN9NUnQRWYsdEj6",
  "key13": "41MGKDbSCa3aRHZ2GtwL6H9BZZs8R1psTFA5skFqTYvTBKcHSBqXC6nA4H4j6i9fULE9JNzfwV6mYCMBkvH2QnNL",
  "key14": "29rH8feaTp2k37EoVhzuioLqnvXRb2uNfCBXbw58SxH2vJnkYUcYympduqVZcKsW7nsmf1hCtVEcT9JrgaA5gRHe",
  "key15": "4ZUvxf77F52K66yph169kEp9dP6MLniZy5d2se6EKsj95gW13YAYf4b8btdbWYwsQzWhd9kGbVcTKtJrFTPhRTYo",
  "key16": "5Qpiyou3za3nZFyRfBd5pmNi9DVk5h8Bj1Py6GeVMxLJisiF1nNaucKDJHRnyvBf1b7DTepfLJTJuX3NMFXBgrdJ",
  "key17": "4ExeWJXFdeDS7n154KW7B9WhVBC4MaxTmdLcYawyAg7BmGddthLU2YJQqhFdpLSfLAjmcNGTzS7PPPSx6pdPLziC",
  "key18": "3p5ETZDyhQjm8uLP8bsA9ZM2oLHJQeZpuaK6SPvJi6fy3DKU6tzwvkNQdmqmKsYdVMmEZxsEB6tY4KHKs1LMPv9o",
  "key19": "2yxTV1FyTwRDQEe4pdhEwX8EFwVLjYba5v6hdJuu7PSkiKp1NykoadUyNXvMpRTAkKGaTjp3x34VnztP9qJcUKR2",
  "key20": "42j5PFcD6kViQzd7vQxrAM2fa4quzwJnjSaqQ5xPQLn9beNWetGadqg7X6zSn7xxouS6DuCAME4B9yKRAk6yjPM9",
  "key21": "g49K3nVLgBfVhP9A7WAnmno3qr2jHC286BvS9NGFzdyJ6AyZEkdgbMaNMd8f4yGYaqwT9JWDpVZZoDrDuwi2RdG",
  "key22": "43zbrc9mKPi84PWix57jFF78u44C6VwERkMKLWjAB84amfL8qJ2TFG4pMoLGUfeZQru5aeMNUd7T8bw4U4VRtBEo",
  "key23": "2cPwLFdVKurvujnG8tpJiroL1AbnwZNY7fTaqfdcq3qrKcu6mV4Z5ntXN3igoR6aHyU5FcT6J5Kbnckr4fgkFvhj",
  "key24": "3ahDyN3wZ8iTvgV8aKKbrNLxwEcBzCv3sb7hAkpA9aiYRtQZ13kGqfmm8vVCP74ToW8nr7CyA5ETsiksVMM5yUrV",
  "key25": "4SFyv3az1yPSM3Vzr6wxUUKKycnkasUznyTMNhGR6hYUP2QBmzALg1DYhzTRJ7o2cQVKZxLupVUDTC3J6Bq5MU2e",
  "key26": "gLw4rVhaMrK77V5TdcCqwkUzRFYPaEZB5SwBeAdWA5VdzrmpKaBxTUaqeCPnhCFs74A9zuPdCroCvCrrjzTb5uz",
  "key27": "26pNLXKFGXA5Czk47B4FHGUHk9UpojEL4ffBih8oqAjrcLn2wDSbKnVnoTZ7JR3DdHEqeh6Egncizk2rLzhFLrD7",
  "key28": "3QcBz8sz5QjTrCUmmL2EzY2f28uftzUnPzUke67ZsinH1RpuPhCu1oz93i5GHMD6jsRNGaDd4dGCawnQd43D1J9Y",
  "key29": "4HqYTgmyiNotCWToszxoLd9V66DjFDTEfi7CzeBGnsgTyvBag9BDCsgYVxy1LwxQ4R4mf27WUE9vMQfosQKccW88",
  "key30": "4cFSfPv6LEZJPZLjvGpWeUGqFhJ9NnFzEaHNcEHHU38W6hRYRuGcySsuof7BMtAVLCcjPXUdB6kj2nCRzCstgws2",
  "key31": "45GYju8rZ37HXByA5jCLHfykB9g2BY3aN88jYUiHHTApAZ4kxH12Wxa6McRxZQa5y5paX1UzFKDdfKuSUy7cB1GJ",
  "key32": "5DmLWKboXrspBCNo5uB8gWTjRYzzmhRAa1qSVz4ryHbsgx8e6VqjRDNhhx6KE3bkjwZxtCUbonCuCETNbStNs3xr",
  "key33": "58QdgKUk636MhshXCVoc6m4ECYASCaKAhYiER8H22Nam7ww6kPUJwUzU3AtRum1gjPqyVbzrE3gmsA5AmYbGJkDZ",
  "key34": "2gEaQgPohnZ71b4JPFSRSoW9kTYakncxPmUHuyoes3ncvbM2qZmMpcEDQWHfwkWCV9JxfeCWPPyx61u2EungSnov",
  "key35": "4gZYzVJ7pUy3sEYuTckhVDWvqXZGgPbGMH7ECSsHmmwXz4tPg5YBSQREpVBcV4sLiXEiYq8TKpLBh4MF32zkQNrW",
  "key36": "4oMgPYbP7fWoVJ7JwFQF4niqCa9hKTTjUzfnzRUwX4XVktGVeDYMKFGxVypQKuzZiwUqERMJXKRGm8EJN1Q8kqi6",
  "key37": "KsbDzcvKz4wU7ZNmi6BahRBvNB7peivVcqztFRMgcvdFjocZKmQBbGEvcBSBVyhQBu8eb4NsHZxy9ZXATm8dqZ2",
  "key38": "4FLwonQX1oxifpYQ53qZoMFKgg9hCMZLm2BcDbU2sKekP3AXX4EUzt9JMqpJzET2HR9WHHtYRwGJXYLEGiAvW8pr"
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
