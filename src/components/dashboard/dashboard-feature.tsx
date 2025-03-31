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
    "3sySXJofibAqpxp58Hyf2QoZsJvrVfskPDBgopdvcPj65pCg68qGsnty4DN7YSk8qvnT4oBKF7pTSsHz4NUpUyN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsWFmSpkgdf3ZsdLkFDZjDXXPjjUfqEdz28Leo5k28B23ayjfmgiVzSDcmjWgTXmUJkSzQWXu7pTeH9xiEKU2xs",
  "key1": "LLckdXYHwfGy1vhZwr2Aoojy477i7538ZzZd1iYwZ6EfKr6BJSiMLN2Cs1NhU5frf3PyEP6A8Cq7ZYpW1ZjXq8b",
  "key2": "3pzcHfG7AgcKtbuscPtjy9M9iwstM14gxAdRd3avovE2ZwQVEb5ggQNSBYjXN78B57McUWtJ6YNorZvAdihWPTqq",
  "key3": "2BgHBHGoYV5MuENpr4YMg4EFhZJPyaCkWY79W8KbyJVYR8xHJXZJRH9TEJDhqS14Rj8XuuxmxqrAPhBn13eTr6G3",
  "key4": "2EBHLX2eoE8T9WpfeqU8DS3Lh2QnZhwUEr6yJAiaxH8fN1nTcyo7kLrM587xcTCcM9c1Ch6uLrcUSbnc7z4G4knA",
  "key5": "QQaofWsWpzUfdssufV2Gqop7L3gqYFUd9GHFViHJUGUjncCdyVYh39YKjdTwnoxB9A5YL5M2zJgcCXcx27JXymU",
  "key6": "4Y2MSR3MpV63qSS8ex12UKAg5Pq67vVg9GQK56uXLhZxzkuYGpSjVL9hkcD2cPxgjc84LD9xCR1DE9AMytqgbbxc",
  "key7": "QbTwTP9CCdAXmJU3Tr5VJjsqVpH5wd7koFrTxeVTxHxahGYP69oiBYMXV3ptxsuvX4UE1taNcpnveLBUUCB4UCL",
  "key8": "3cKEntHnUHmBwzWfjaRVanycKrCP3mnrYvdYrSczj7Fc5s1UdFG53M5vV16VVfhMLvd4cXy3BB4rQTyGQpPfF9j1",
  "key9": "3nnTQpT6im5xW38DMCYJCviFG1c6pYZEpCkRBt6urtzSKKAeSPHsrBv9tcVxMDeR8L2Hq2xTGdrxK5WDJrpTY3Wc",
  "key10": "RApeFNacWXRUhVNk8ogkCogH3sXM3iKBsJUrKJwMe8vJGefkQJbxdXfaw5PfnFZit773unyFbN3oFhoo2w3a1Z7",
  "key11": "4ifQzkhr5QBgWk9BSeP6EfUYf2v8neKVN2f1SwStDhZ3DES87cQHDXD7NBSWD4HZ3wXduMaT2X5G5BtK3s2N453V",
  "key12": "RF4qH7DzBPtkiqoTTfLYKJPraiyiZ3VrvaR9eDMkweieFjJyjmJyFNi8Mq7Yspm5FXCzaPLVedsgkFTFUqJDsKn",
  "key13": "3VTiJTemEjjH4PWKh8pEAvwepV6zz9FnnM51VMwGC65MS6bBCuS2tnaULMnzrYx1UKvR7LsgqeUhcZexo5nt3kRF",
  "key14": "ZxZVGspTxGqr3hgGMdeVLRsWC4vE4zrLYVa8snb8vaNdk4k53pDE5DqYJom1j4a3Z2FL8hotgFzauEviTLheQop",
  "key15": "2M5B6HbyqTFhNJBibjvHCZHKrFbHhcCDobYPn1k2JVK8ne68Rrs8V76X3WppJWoZ8h4rqxTBZZN9iDUYfdwEjRvy",
  "key16": "3q9Jbgt3sGC7t4zaSmqbfESLPDucvYEgMpCYKrmdcJYG9cQgLMWWfiVpDngNgMbgJtsjCLo5bF39UBUqFxyQtL7T",
  "key17": "41vAPumcxr7H7e12aA68isjXuKeo9bzGXnRzhasQNShNGjaViZNkYUFSPmm6xTPSbG2XzMBZahjTXbbhZhA3yRSB",
  "key18": "62HLxi6BbBpikf4RDLavVS7G9ErtC1wUzDNbbxJYkybDzWsRQ8YU1GmJ9nKCDGuYUJ3gqpFEEFVonAQT6K43K6Px",
  "key19": "2nKfCzY5Ji4xRkKZvaPCuYAFVfYvDd82AQzm8g7yyF1syFin2LTcsoajQdaZqMyUoyph9wViD137sg4DeSQjKeQk",
  "key20": "3Vy4fCGu1pyS9tHqf6NDS439HM3ZkkzLNwp2n4D5erV49hWkrZEymNJShdEaeD98u9pbexwPGHYBqQ4S8FwrZAw7",
  "key21": "3wvc6nxKNYwHPYFDKGWM6H89WtHFijqxCRQcpFWMtWUijxotFWmh5mjeUEGEnExk2MRo4Pj4QhiUmFmr73ygmqk8",
  "key22": "5658Xa9tznv4S5nDAwid2x3XYTQFiQk6rgHAG48T7ao1J3QQFbSoLnQuvnoFBQimiBSd5FisRQ7VQNRaQydtCsas",
  "key23": "4Mcw4WZNycWk8aRCywynpfGS4TvdiD9vCrEvZYnuKj6X6t9SJe5d9Ey3iZaNpYjzRJSDJQRMFB19Pj4v9kN4neQM",
  "key24": "gPn2eL1MxpDMfEXHufXyQsj4BxuKVcRpQp6ioBYgnJeDgGou23rT3XK6JN78PuC8xLry1kche6rwNoSvJUj33dy",
  "key25": "21TLRMyUJiWZZFwJJcT9vsHrLeSTJXUNaeRwU2xJGHC5pCCnDAeFGECfbAEpKZRnSqX34riz4eQyg1Fy2pjqqRgp",
  "key26": "4ocmhpDZLRKYWcs3tjjGJQLKcZbLjVB6P5YJyYZncvmTqPDjSx9yytJwvboMbhj4DEsC211YkKXPSo9jq4foWDzz",
  "key27": "3JNyZ5aSpCeg7TREESev6jc5P5Dpaeyqm4HXEmD4tX3TEqg4D35MT3eXkNGN2kRNJguaXfyd1N6qUdThCcG8Kv18",
  "key28": "4Vvcb5yAExdkH1MqfuKtMd5D5msrpGZmfcK5Gi45cFjMUWzFCFCxLXFAaRmPpQCosx944cYsu7zziP7ErKv1sfaZ",
  "key29": "SeUV6xWKYgPq9vdsPcAFgH12wHuA9cATgFbcBDuCLWcHRtxLrks3FujxpwiPax2s44MhYV3avRz4m9wEcqqsgi4",
  "key30": "3g7ghvXMfMF4So3VZnAW5BHwJYhpo7xrCf28s6GVYybz3kMH5udpYRQ2h7ZybMr3dEg6uyLQC7Xbj3Qn3oecgo6U",
  "key31": "5Nb65nU3J3R8oV4EtyJLuwk9WBaZ4jzNwCXCRiBmtHqbmN9jBDt89YkGqMVte653kZPA4cbUbMASa9KZynDxxw4z",
  "key32": "3YpZmmMRaeGnS6H3Dv61SFAALaCeYNfeAdWGRujkThAvjB1VhDAaMVJwAiM4NXbnjsqEChw7NQc1LrFGg6b7HXSM",
  "key33": "pC7Ys5A5kuVN6yxmCXG6jSwmcdMvFL53BK2ra4UfmLSz6QuVsMpmZtwAW12d1Nnc7s79KiPs2Vof2fSXCZgRnPi",
  "key34": "2TbKSUh418fV1bDtZGSrg3pHANPbhUovPveMqPSVT84Lrts2R8nSQ1wEDMQLNfhzuH74MeX2zXXgjcYMrYscV7WY",
  "key35": "3TgRKSg81UuHnB15brcsr7xDJeCzchzw3P81Hj8UQuJhHrpGReQ9LZv8NYg3uw8r9H4K28m7z9odFP4oDHQdubU9",
  "key36": "46xguguybtMmo8ebUtP2s9UsvTqS8zNFMiNcbKMsYeDxPV2DtGtUmGtK4VugLZ6sBYibZmCSq4dLAhPNWwkBWimy",
  "key37": "5RYeggCohxMmwDyJj4G5c97sePs3KnqoefLxWs7NSmKkABqNyP1to8Sqmu86zHNVgdBdyTL7hGG3z3FF4EuCfbfk",
  "key38": "P5KVsisV7eTkKnTNNS4UqnKJfGZdBEYgZKSJaqxoWdZbGkt7evApCKRj6hvbonbZ8ssSZjdeLuAtm8EEragPZxP",
  "key39": "45nbKBRpkHoaq16nEUkMbKrfVVGeX5BVNbRAxZDGgn8evHe3Rfua1oDUXpqfiU8GFvDGMxEjXraMTXn15mpZBBn2",
  "key40": "3bna87NC3E1E4YksANWNYzpREHVvkjMwepqEibrMoKagbTvetMmoFaLGhhsDypD9Tnht8Jf5hW5md65ZHdDezY8i"
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
