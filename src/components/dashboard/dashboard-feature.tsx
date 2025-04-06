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
    "5Rni6a1KUi1ZY9eVs1scHrrnRx8r5CR6tyAHtdB78K8JCXegW6e2RdUnQAyCf1K2udoVmGuJtYndp825bEGAxhNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JPQEumUAUk3hb8xWJ4mhcM7JJypVqctBohdMz8xB7WtRQysbK1y71vMNnGtrZ6vN55fax5tLpL7Fim8sJpX7nya",
  "key1": "4ZFMM82UxC6eeecuXSE68mRx42e1BzrXW8riiHbuDKHpb9iTPWbj7F2GVqf3U9pKAjr4eGHvFZkHriuQwqMexVM6",
  "key2": "66a1xweYUyT7vnHWDReHsr4pdVT5uEoFLoKtdzsd9smVAuezNEkYrKTv985hbSajvuBJfCgbBRaq2NxRtf4yj3fG",
  "key3": "24i77s6EiZ5Si8fgDoUuFa1T9rPVjJb9Z6kpXbhyFQJ3jBdrWixT79EigVdhJWmzmJrrYmQuVfTQxX4c1fKkGtSA",
  "key4": "3ZtMshfxFDewffR9JHTYW2FJ9G1HMPUcXSTSHbNj6iRXsCcindxGfRTfVz4iisLbdxPnNamu5QETFRvvBW9E1Auq",
  "key5": "5V6TPuRc4CiYcZCNDF7TpZhr46wakGDemR3YfHj7wTRCQ2PKETxrJCUcu46tQ6MGhGBj6EuuMcQDUTBuSf5irDd7",
  "key6": "5WAnPdrzFosUMywcM36MqcC8ETZXPaYCjm1Ex41Qz68NDPGDKHqQxDUmpGqBesn3MJskVb41GKn6nS8aoFZmE7U5",
  "key7": "nz2xcVdSeKz383Fo38hahUBatV51q3FoPYfTAFtG9QFWMdB2Kt6QRPXni9Rf6s2HQiN8oAFGB1CePwsHtESU1a7",
  "key8": "56Qmdb7pLTAKrgnu6sbfgL7Zxa53CA5PDbZuhTSVJuY1ww4LXnvJhgxs9ZWmCAofZAKshh7C3zxHsTQy21V4hYu6",
  "key9": "3ni7n41aWgzP77HyuFNhFW4EHM6y1SPCE9fgWsNyBKZ7iUMMoGVkQeHARr6yxgaGRz9QowfPraPkvVgxwtaVbGdk",
  "key10": "25XmvdjKKDib4WcdGdGbKE8U1NpT8F44v7RZ1aWSiiQhXw8ndya4bdf7bBstVeR7xmNJFHgBhYt5Xya83z8mRsQi",
  "key11": "2Jg2c8dDtCcJ6Kj6x72SqnbvxHb4sfBu1snXqdEztVtNFj4w8NJGUggLTUHH9iWGLCQF14W8mEMSEhoyN9aQajYc",
  "key12": "2UBg2N3Xp1hrnhDfJEUfzM7iKXo2CBac7bYMPWhqb7pbbWiKKTYuNjgT1B24Umpzhtx8c2QaRHKsDvoDsV6vFJVL",
  "key13": "2JZv3FWPxDaDhjCxyi6ZYGwQdYLjkYxtcGeJ1PvxYLvECv9yr9iaWG2hPTJAFDDdcSEHmun2Bbu2cvKsrGPGHroF",
  "key14": "4xiVAbMmaU55n1CyaKqJb1GLav2xY1GfTJWpiLz1rPu6WiB3bbBisUj6WFtmdLuequQUFs3MJaY8FPiUgKSiisNM",
  "key15": "3EjsL7apfafWG1y8qJrVbC8yTpawofqHkk9FL7SuT5NJnZLjBqur513wK4UxdS5wz9TKYH57uGUJKfmxpZY6cRfZ",
  "key16": "MNxgsTjJ5WFW6aWhfEn8SM3NeA8C6Ft3A1Eq2vdSmkxACLk16LKZrLKpWybGVoKZwMVsXNVymsxRUbcbx22ZHX5",
  "key17": "2QUDWbZR9tsfAFAXC7U2YTJ1Ed3xmtimaPVn67sx2GSwfmiYoPhcDkuoM3isBjoa8daSZYVAWvZDKppRh6aTvzdA",
  "key18": "5HX9m6mxxAadpMgZseggmrrmP5WJn7sCCQNEYgaTsNQybX8u2TzLNf1TMTTgv3dKzN3CJsvxXvdDhJ35Und3e7zZ",
  "key19": "3FdhNe5hJsjX62fiieBuij7TmzFd8nCWrPd4HM5yu4w8BMeC3UFzpKtS8nQgEeTsiryCdwXxzRLvRQ8k7a1KRzwm",
  "key20": "3myh8odW3UhVErtufMZAg1EmyzTeL7LPWxdb3Yqkc99xTumJ4bzXEban8CvbZkGjKb7ZznJs7ey3Bj6XYKXS5FK2",
  "key21": "2ws9v26CkrvChpQMKWNxsXSKNns3QC5CoyoJ9wTSz6NGDbVbsaqSL6Mx7sJ8mRnQyGLszqZ3pNty6fvYP8s39UWH",
  "key22": "5d2SgsT8JBNLnge2HahZKzLmdaN94yBtYTJmLozn3byV8wN9es3Xg8LLqFTUQRRCEbPejrzpZ2iZcBBChQXNbDea",
  "key23": "287PJ8zDhgbjVXgdLsjJunotkHzoeAxmcTusQ43rAzKcHL4YjECzYQkpQf7M6VP6vuqiYKqeyRUaQBSbRAqU21xG",
  "key24": "4AgARb9NCJcoTtksED3UJJGN6jh5pd4B4qqN7r9ydtaxaBw2Uz3kd3zvL5WGVwHXT3vFRK3uSGSNz58ifAt39UVG",
  "key25": "3LTsYWz596uM8kGAcxgEw1TMgrov4Y8idXAekGDQwZYheyVMNZKkCLdrNtA6SHGWC8TjXamV5ZmKW4PiLpZuGS1q",
  "key26": "4rQTnf7sT2EDtJHnEaUv4fFzag65DyZjxN5c8UYScU26Sa6MLpCciX6aiJmuUycRP2SEFWuR7NSMNjSJfRiz7HFL",
  "key27": "2xRoRv8kGx9N9R8kNL7X2Sjdj1hHoByQELu9YT8ZUCAFsR5r7U383RgMBJoWZEHB1Yk7ChCVMEwpTVbxAio1fvw",
  "key28": "3Y8zAB7S4yRZohgN6amYixN6uvcTsjUas7RbN1BfgbYHo9jvsTHFu1MqbDTp4BZS1hJ5SQEBb8FBjrEJar3yzTye",
  "key29": "Ea7TFPXEGtGSYR8MDi6Q1RP48AihEx96PsZHfKe9tpSgfktXS2Edv491h1SxTLpftgKFkRRKMV8wCWck9Qgyjpu",
  "key30": "4mYNtKDooDU7TXbDxES697iQ9jkfaVJTnBZfyALKCBC9aJUM7eenvDDA1vBPnDaVSr1E6j1DsR72Edrzs7a29xCj",
  "key31": "44croaB7X4HX5KRq848jDGVPk14NDwzsL9zVeHjnv4nuXBrQEnekdN8Z6i1X9SnCo59ccSxLWzMG9WsVuE1oQkgJ",
  "key32": "JuSw5c7689FJqSCUespwWxh1GfmvLw8q6Q2uLSbfritFciQfP3NavA7qWRK76vzAzKDvzorBTMUJnSn6fGszdyq",
  "key33": "uXyuZ7b2A1eh5JcGfV8tuagH4WRb5J978qpApwwpQdjog4CeBqBPSi2UmdRpmmmFqT6CqcGMyga3TuNKeaBnDry"
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
