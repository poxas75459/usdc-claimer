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
    "m5kyJ4AmN2RRaGSynngn4oHms4ZCTaJFCx3dvuUsCJdH4GEk26gBjLhnqqJR8aKCkoDemPsUdFs3UMXfE2c7aNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdw4Y3B7fkM5tAU4yyYSUvCUyVwUbQ8MkEod7gdhQzNdJEFjmVgAwhwpbxSAvH9YdAmkbTBwWmq4bEBDtVAdBsy",
  "key1": "24yCVbJC1apFHfE8Y4xRwT97UwC7BWJ6Kuy63gGLUPpev1YtLo5sHQebTd1DMGhbzzSdzGnJYZCNwUaKbUY4E5hM",
  "key2": "wJurLT39TJAEYk6fjW3SJfUttf796gtFo7dpGHSBvvCBKZJdKLR2xipTdx33GvWzaGTjVBuJryJNBtZXa9occTo",
  "key3": "5qBiz5CfpYusdwzeoHFTUz14VGGNJbh6LdoEUNRm8QpSRG2iH94jFDAb3L8CuEHWHXPnDFXvJfrvx2XuHq2gW1PH",
  "key4": "3sGh5vBy9bchG3KryaHX9RdwoN5FEEuai7AySteKu94byGz7XLXDeGeyK8rzerG4SGDwF6WdWvihnF9mXpNAb337",
  "key5": "2MAMatYyhJtmxG18KCGGmLFRBcTZWmTEGYZoo5VZc9khFoEytBg3SEAYkDf2cSGBGPmxt1E93rvkKnhp72DX7ArA",
  "key6": "5msboCiCPd6cL22QBFkAnhs9enpQyNVaKZWCMRuwgxgCYZybYT81iGePbNnZmswgUouL6ikpJbKG4wvmjbPBPaby",
  "key7": "3hMP3Rzu3FABzj8qMFJhm2nfSucUpV8AMGhcrkcSbXgtyc2PAqMEjCha5VWdYW9RShz9U1FPuxFYXGZAkf9U54YJ",
  "key8": "by9Lxr8pEmgBoSTtXyCuXQDuzH1PSQ3jSSY1qfzYpBnbTXrtsQkMVEK9qgaWSPchwckTaduczcncih2Vd3WqenP",
  "key9": "3hCuiqoUZU2Aechp5MDJ5fZeYTaMC1V8iXK3byAX4LQFBEno1JVXXPFLg9XyRtAZpU2fEe1dnW7Zg4Xkk731LWc1",
  "key10": "GZaXJG9zZAwRdAmeSm3wCb93mWQhcDLYjgzc2vKBKTjD52K8x3spa5AQ4FrwvsFPtivjuEUB2yhLZuSt172KrHm",
  "key11": "3oFe6Mxxy5SW6odJVL18VuZMxrizLyzQA4HQ8ZRwFRcANfmnMRyiVvBoLBbfHqqZRFFJupmHt4wZkAH72Yd1KtoX",
  "key12": "4EUYPmsN9RLUpGvm1n4KMis6LfyWUXp7KcFY6pEKo4ARXHT8nGq89VV9UtnXsbAXHAkm2EpYn3TVzCcb3QPxJvDA",
  "key13": "61Bio8XkTPNBnWYkrhrBcQGQ9Vyc7v3zkQJDAuW69caruFvt2FJL9txk8ESXCKSUetomG15pPSt7siBHVLEDDLUB",
  "key14": "4GcHVNacZgNd84214BXdCAbswVKa3mvADwPtS8TVET2TWTGMyEHR25u98a539PVWx7kFcF6h4Kf5biozYmrhpoJJ",
  "key15": "4hv14SSZNthTSp7g5rygg5rhz9cmFbtdP1boS5pEbTCpAx31MtTbtXQUaMzUP7roDuTt1Ro4MKooixh29TdG13sn",
  "key16": "NgJwEctwCvTG3Pj4hzA4W5YebCAQCiE9JB9dkih2zVq7QcwypviafjPChpXv4uMFeb8vBCkojnKcHDhtD9HcF9y",
  "key17": "2TBih5BxeTfnZ37AES9P8wunfCK1p4NuvnGn5m4uU6PEFsfJnauN4k4qyEeccJvY2LuNHcg6AFftceJpR1TgH75a",
  "key18": "26tbbgoc32K9TRLAqDhP7umJfk43YCVCLrsTHtWrzZYFwB2tCNoqmvbjUhaCSMQPFWwpdKwVpL2Wa7oV64wmwPme",
  "key19": "4LnQjBXfuXEQ7uRegachRWXZ17Qoq47orfFMdDh3Rv8bQMDzqvA8ZEUbwePkEypcgXPXESsNcUVw1bgKdRYkVp6z",
  "key20": "x5vuHQjAeFjPDz5KWbtE9s6CuBvgr1BCfvacBJYxdeojhwWyPLxAK3FhrkmSrpzpXxwe2o4PA18CrntTzfy6V4S",
  "key21": "dt47p13fDCUVTpHyqJMf8EarmcbCTtRE1S8AYfC3wM12W2Eku32ptD67tp3Fir4yUepbwqqFzQ7cPWW5PPym5yq",
  "key22": "31gzyRQDGLZLjwXtvFQACr6sK1JKyGCSrGpyAsSbkTabb7Qo3NuHf22js7Y6PApRVQXe7BMnj8bVrjBMzVRrBHxT",
  "key23": "6325YfL2kNzD66wU4Uirw1qriw4wKctC7j6KmqBuwGcQGuEwFoKf4zpQAYPxZ5SNpw9ydmZ95S7Li14MUYsKR9zZ",
  "key24": "vtTgjUt77n6LYhBxhES3QEudfaHicKJV12Q9E5ULgaQKypu7jm45bNdKf81zBFtNV67YHnQnZ4Mh3YEAY9BdryQ",
  "key25": "2XHwiZD5e57fS6SRedr6PxZ6bKmMtWareGKYozDeUBtySi9bZ4Ap5NniAPn4ybZkvLzJU65E3tYJJwNw8w1HVXtg",
  "key26": "3zuGpH82UdDNdDwbjm34Wgsf5VB19Pcqd3ypMo8RD1zxJrf7F8cVhq953p3W3Z66fJ2fJrianHzHwtBR8SBM8pRe",
  "key27": "5y1yCADoBvST2Yep8TX3181bCtVJ39b8cibZXqe4vkKDnxrn4oVamT6wRTJhJTLGN4wTgR5GhcqkABCcwqRoKWzN",
  "key28": "3iaJXk5moziNzrrFGRybd4h71cBCSGgzGHCup4auPmKjTAS4GvZ1UuzLtTzrxS6RYK89VciceSzkLG4ijgDu7pft",
  "key29": "5jEmuYXHtKGd5d5udV7FBPQ54mTMN3rUHkURyrnKG4YSwcotyezD42uxAfYWTVCD3crPymbhsP7urQjPk38ZLxV8",
  "key30": "2F5PKaXzkXTCGABPhiD75WVCDjzwecN3ZryWg2kj7948iSVCD8GJW9eoQx2dsBzNTUAL7XraqaczBkaGhNubphgu"
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
