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
    "jHRYf5P91szALaK39ogTxJ22auYeAWvt9hTSJ4apGV2Eb3MSW95NnjL6qaqxQCtQPsTeDZRMq1C9TwMR6oq2yc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rb2G8agztur6JE5cJPTAwe2CevV8v6ZQubAWTxymuQHhqmiPDbCEugsCYb6s7vcLhP1xxji9bHZ4iabzv7CjsmR",
  "key1": "2gFCL1WicaSSsXF7XqZNYMockEqHV1KzjJb7eVyEQCNCg7zRv4KpLdgWb8BqA3ZgtsTrF61jT41ULsqPrywkKqDM",
  "key2": "3mD48FoKaHHexF9s27DawC6yC2o2TEzSCPjfPcLs6BmfwUbPY1keXxszrouZkt8g2vfUziUiXa7i8Pgo5k5gdBzH",
  "key3": "5FLgKC8LPDBWrpuzMF71Y5g1Z1HVMN34V4ophLcYGxT8B7jmjFhMaTctf9AB8HQtchrA1p6HEZHbwAyEeAxDK5R8",
  "key4": "67AKiHirHfm2iRoy7UuG5Crzhmav23P7jharDzqk5S6p1qz5BqQ81f3WLHWpdCL6gxs9qyyiRoUgbBnoy5yZeoCW",
  "key5": "5Zyd7NNbKxEadLS5VpHZQs9zLCRUf4TsuTGDzxPEaF7Sr89qhiU4jkLDXjumgNaDo6ytNUbHQFKmo9mFdfXKRwR3",
  "key6": "2DWXVwm6r5pXhHTNyhfGXLARYutfi7g1HrX7H7Hy2XrWmM7gEfS7QSZS1sYUAPSfx2RysiXyajfD1siDEQrowBzE",
  "key7": "5QWimefzr4KsBQK9gLTF82CrGomf2QLg8dUYEVX5u9SLPUwQMtFtztE7eNjL9tktY7NspCgUn6ayf7wW4H8eTVgu",
  "key8": "3gcNLVsyN67oUGLGqktGREFnqse35tHHgUbnjrV5U8R6Amn7y5uvz8hagmffRMDzWdaaeykXLZJcrRuSpr8s8EbP",
  "key9": "2oWtQz67mdSNLccN81EZiduciNRUcG5u6g68ABnmyHM6eL4tfLiTKcw5jHt7s4Kuh6HD4QH3LYituzcvuVveuFYD",
  "key10": "3hVzv5Lmub24552AMBKcM9h1sh6nkTzW5FgREEefUePVoxRkhpL8eDXA9RgJep8fbxuXF6geYrnLFHGRNZ4qbJKc",
  "key11": "5o2j3WHyP54xD3DSp6dxxEVn7v24mC5wZEM7QUsiSU4DbVt8zR7H8EWRxLnPXRh9CZfmoqYM1phNMNYmfjmVMNJj",
  "key12": "2AtvpfNNSKximYByULNgqZ3YBvMooSYoCSdQiF88yG9uHshJK1seRD8TsXfzdrgorRohrXPGeV2srK8BbcdLyS3W",
  "key13": "2GJ9aqkAcME6bLw55Eom7Yhpy9iG3ut1uqtVD4hUyvb8DtbmD4MPLJRX4mJ4FufWkE4KLppLauFNpgb3E18tD35N",
  "key14": "2C5QxSmS2szoMSsSDx6L7aU8a6ANyw9Tj5FNaHcVZxh3WJPd9vyX7rn5VT5Ah6SkKPX2vT3YvGSwoHEYH24g4CS5",
  "key15": "3ApvoMuH2QTLLS1rKZSxqRuX3AfMW6BfViTUE9UJ3SzARkdrNgtS51RLkkfpCcTuXCSsyUbZKjX1JkgteYtyi5Xc",
  "key16": "387vd5AabbkYEGygCodi1KxmU46UK3SLkACcwhvDygvEmEFoMXrTA6MM7MTKsUsC8PaoYbYeiSibmJiWcpUq37n9",
  "key17": "4o8iCg7FXnvtbrp3AySUsXmV964ACPLSsBcgjKKnozYiugWyzCYysWuqYv63YqXUQYaHcr6c6B8LSqvUh3ExUeio",
  "key18": "phvfyhGMoC3PSbNwaTuRLTgCsjWGZQ6CyKNYFthjsXfKQanrs5rJ7z2NcNWhg5DwEQf3V1g46yraAx9JzYRsz4C",
  "key19": "2zCnHfTvM3sh9SAVDoxcnbYckVu3rCPQxEwS34MZmKSHwEpucQY2ZLSvBHhM94a28R36qHfqgYn2jJJNG17Ykrhm",
  "key20": "57PLjGbhWMzvWVzc8hGqSBQ4reRrvDnLy4xMXpkG33EJS4uVetzfDv7tGxAueaJA8APFjAqYjChpshzTXX9GQLtM",
  "key21": "4XvaxuT6bNb4JgGgTefJkugkxzHCNaSBAuM2tM4w5wRxNXezHohgUufJxbh2iQHJ98W8mnXuTLNRW3mRb62hdHnD",
  "key22": "2ofoZxfipgUr1mGxeWaMEr9bjvwvv5iADF2HfRdzJrFW2HtD2UqsWEuBeRmP1NGqL3ASDiJFtVknrpCAWZmLZwH4",
  "key23": "3ganrnnZehsAZw7kXJKHDNGNAJZupahys21n3GzRafQgeWzhpNHHj1nHhUFRXfz1HFeRtXLYps7NERcSUdKRz6Tm",
  "key24": "4mFkQGo6mAwcpuaMjr2trc5P6JjYPj57GD6zkjgNjPXjiAqvjDcr7WL8CsXtg8ddPFYtv7ysuwy8wqUQ6Cb6JjpY",
  "key25": "F7WFkj8XGMmGhDm646Do3YjqXiCKnQeufis4MShpgcyt4XyK9gpXP8HuEAYBih43xWPLEWnTqtaFSTgmfEmpknQ",
  "key26": "5jgSCgriu9RSHJ6LKLvmHk867rfCZKdhPnQ4S4LhDPnk2HctGtaZVr2D4cnP3HFZXPWHgv7gf6aRnK2LPjoMSTuF",
  "key27": "3ogYo1HG8MFq9ZzxmYbK1vRs6RkrrdekJEtDocdwVtJbFYjfrw7YK8LvHdVdmW1bPLR5BD8WcSwpqv1VnnkvRQii",
  "key28": "3jBfEn6b2p9FUUgYy6qwis9YRZYjZihwiTxg8uBG5vhxQUTkcYSsT6cW8PbzxX9kFPN4zp1ViRDcmFGqBmpkpWGA",
  "key29": "2WgcdYWnjkk6ahfeet1w7TALuXcycjcdEvzneP5JT6emAAJGBiarWcuyVj3wNqL5YXBQvAV9WQKAS1xVsL3jiBJu",
  "key30": "5yBPSyMoo6DjznUxvyyzhAToUZ7CiDamrt6m7M8Fg3BN4QoKo1KQztj8bjTvp4ZsiZJpUNuesn8Uwgay5kUNFCsQ",
  "key31": "5evHQhVNHaS1p5Xb11mZnSfBPf8FbnonvGswn9fB7NsCYGYjwcXTVG2Q4Bh1NjeNaEGT9p5XHKXs3zAQQFECCic3",
  "key32": "4Gvktujmdo4wBUB6utoRxdYrKUU2SHtu3jvga4sbf8ycKryNYkzsUSusqoAEaHVZLqogroJjaZ4trGPJ3YmrTumt",
  "key33": "2JPUMRBNbigZ2sFz6jsmeAVWW54J2XquP2tmTSQJuVVJSKWhFsBggT6VWK3VAMcmF7A9Dgc6kLsWU4iT5JFJnPmJ",
  "key34": "4TCWvQzyjcqSWNCUe1e1xUpvVRJnWbYB5GR3TrbDwzWntkJJjdAupKKGt8SY98A4zQZtGY69KRuTK4yhXjeFDjes",
  "key35": "245JcKvmqyKUkWvYBnWa9QfZTZhPQXLW6xMp5tLBHTk82UtnrM7Fr91ZFLjKM8Kvof29ou5C3ksocXEsKHDuTJM5",
  "key36": "4r2TShtHDrwAr2bwkJR6vN7Z4PttfFJoS8rTx8WqpX9XjidgHEYYm59CNmzV16n4gLmAN8MTMHRqDJeBQnyiFdts",
  "key37": "3D1Hi9fPPV3ArcYZ1jG87bhfKv3ALu5id5dMaTPCvAvkA9Az9Pc3xhtDBG9vk2hviseR7JVkBp1A94c5mRRGoLha",
  "key38": "5CRyCWdGmx5mGbzJavcuyyGA6QDkd8wiGz2se7rkD9yMrEoowbZijszp4pikxLNWPK95J1SgzKX1byHsU59LHfJk",
  "key39": "4sRMQ7wtw2gasjPHvXtGSDP2hwcVnt594SXpg4KrkKfqGJGu2vYfJEsrXPaYHqKwtv5WxCrBjSWDbRcjmGHcS6YZ",
  "key40": "24G2PEEBe4XsjL6RJ2Kj7fyF5tmTqAAEkkCydgpfHBRpgctiPqnmV5YcKXqPPRfbvTNnp9W9Y3VtW1iNyGaNULnD",
  "key41": "RVZn6Np6JCJQinc2ebhhtd5XGpHTzDto1ZdRbx1tsVQzKqQ3kexDciLFDypTVWXfLyxqdFLCttuTHb2aTFWyyCo",
  "key42": "2KxMbHXns9pzzSq1m5mnNRcGavra8UkVtM3m4jXawcXuJFTg1krFgZfxvSE84SpT3H3siE3XkNj7CwyBV25P5FDE",
  "key43": "4tMQgWSkBMmyWLQrppkSVTu7NhudmLjqE91CMGjcaXVxWKNjMvjwLuU5YbZ6TPdJcmxDjizA2DrSWYiTE4Je9jx6",
  "key44": "4WGc2XN2qBbRfujfrjf7aWUC3hXqw6Dd55Bdf3NbMXpVGbdSQN3YieDGKGnSRPYr5ZsSuQuPAMzkusVzXGtSRnpR",
  "key45": "5vFxrE85rnG4XajTpe57Y3QVgnewKtkc3W5iu3BKkauxjX12ijMYu645BU77tbhRVAxSYoXcfZbjYu9rqVp8Yi3G",
  "key46": "3gR3DtAzQd6ZgqEaq54nwfAZn2Vc3f8FBGfR1msuVvCJwdc9YdibKM5QKkCVM6DNim8VgJc8E1PsCHLSjjQBeMFp",
  "key47": "39VZYFV62ZaxrTTauEPt5sqruKBnLc4eYFdAB2A8K5ifyc6fXzgKrbKYDLpqHdeV7kUhUySy69JLCMPfDvBWcC9W",
  "key48": "YoNYkhJ9ZNVFKGwbUBx1kjF9FJUtcHCa89WPWjBErLX7241Jt51PAn1L1tHJvEgR81w4TpWb7rHxCFrVUujUr17"
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
