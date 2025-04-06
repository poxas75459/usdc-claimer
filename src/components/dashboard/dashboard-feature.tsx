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
    "5wiD6RTHD7zc1SvpmPG9bdYjxrGq6sx9Bz77D1XsnuJC2VVdQHfmoEryn7RzPPQEyDxo67W1DDA7iFKwK2sdCQv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHsbmeADHaLYL7CBG9tQTf7ey6ZJZAFSU5V35tJLwrkAABJuZFRHpc8S2StAHk9ivdrtFiDpYBGgRAmFJvKigYz",
  "key1": "5ppjdn4wzTCRbgkDdJ3qpDDboKfALhiJJ9DdZ4TWC8m6m6pB3EGcJzLMM1GrGC1wVEjf5eK2oxLk628Rj8dpTjaB",
  "key2": "aWh2jR86tVhgiho16U793W5tFcjmZugwE87FwzmHdK61JyRb7X25fyuU2DRRtV7b6hpjBahxUarxHLm8cesUqPT",
  "key3": "4de84s8RkPkCpUS5GqjY7yK6TQry5Awb9tD4JDcuBCaK7NMuXMJy3HXv2G6QBKuaE8KcAY6LXsVLDTXJaL5un69s",
  "key4": "4eJSy4nYben4SBWDBkdCjiFuhLyK5TL3Hj8e8rdGRtJYeHymADBkoD6CeW5F2SBb97f9iVQKtcYNMYS92AHvyt9T",
  "key5": "4CBXbt9v3F5uSXPcHj2H9VMHm8KXqHDjyPQnddXGFh1LG54DXsP6mkDHxyc3ESCuCRyUTvxjPzucZgLC2SX8gKYe",
  "key6": "3nMeGKa6TX8npbm2UuGZjmggTemTXvtgekTRoRdLMzB5EbXyCFQY6iJVjfWi7QEfAKbEmzxAtzP7AjRAb5HgEeUm",
  "key7": "TfzcKkMXophyoHJ2Vd97CJFMRjyBvjZaHyvLKuXxGjRDWyDcvg1UnjC9ZhtqLovLtWnbbrc1UShzxbKxo85bBtH",
  "key8": "mSd4jYnSioaoberVr92mkQ9RLai9AzHYTUexHLwjCLdvLUxRVSbpc1aEcNN6x5y2Si3QRHrLpGxspcmSZNuqv7z",
  "key9": "4ZXKrXVeH8BT8TyQCdY8rbB4FgjEJbWWwMiKBUCsi59QQ3cWp1X5WCVpMxZpNQoWpFTD4vBqsMCWkf3BnoywmGYx",
  "key10": "pPEuhk4vQxQYvqFEjNMvHQ7cbJwHz7bFhAvwmdZQy9CkrVnP5kJDFup2zWYzJyMsh24asMSDtG9ukoGfktqjySh",
  "key11": "33q5XcvDxaWnGUurCXCLPJKLPqsScVKm1stdC7pVrQ1JUS5AuFZLer8rWaveAP9ghpJv9jvZdUuzb4vtE63ASjBz",
  "key12": "3D9HVMrAmjvxYpPveAJmgY5vU5jaMrSVoB5Vt3jAbvEujxGWA6PbdcJ4WWZHyzj24GqwSRpn4vZ1oRgZzYeQMB95",
  "key13": "5kMKS3EZZ4fSv98M7xrhNe1enZbNMyXM9YNsMeNEikAodnrrwQqzUh83yXGbKNMKqfUc3cX2XmqsVucTe9iN4AgV",
  "key14": "5c3iKRyW4z2UcbAhuy5sry1w2gKKbBa191TxBbGC7nh8HjEoY2tTuksbZ5JCDfkCkTr6ss3wPMrvatwEAJ1GYkHY",
  "key15": "28g4ggcDD436LJeFT9pwKtskmv5msLJjn1hfwccQtRwfqEXzS4k6nikZfDBmABeRsTxQJqYM7vX4odiFCHXUYdfM",
  "key16": "5LSodjbR5tC5s4ycdEJwuowQUAdjoxc7jNX4nN2uWVXfAtUZAt6QhjPmM8wN2J5gQUC9okP83ThhHHTabHnvZriL",
  "key17": "5LSrbtYYKumqGFM2vB4QZcCb6CkRaqWSEKidKU2YLf2uRScuJYKdqzVR6q13BfWWiw7xAx6jGTVEFRiLeufDgMQa",
  "key18": "5WDMCbb7YdLaBECrPq4JuV1y5vqram5L4jxQyiqX5JoYxF8EPHJXFqqEyn8D8yciarSTWDXgf65YZtrReYtWCWsr",
  "key19": "2yyJzb2izA9a4Rr6QL2Xy5VBEL2pRojhKjg2utDvg2TXRbYYUo9ENEiLK3xuQwojrvpNVqYNxeLzjtWQrh6qdy8S",
  "key20": "44WWkb62Upxg86sGV1kjKSpfZ4tncvP4uCAg7rLc45VcNMVMuCfqMLTWPC82pUADzgs6aUCHofoayZLPyawgGLVn",
  "key21": "3PNX8c4k9wWDkVWuBy8hEivYzSBfKfaLaRMAqM1CCK4PYaXU6AdejC8UbLFqYwcGUffzWpq5N6JRF3T9jKu9HdRr",
  "key22": "5iaFcfiw3rbajZA1Rv9xa5F8jF9FJGWZnj4F6XU9BYudVF1s5TQqjP6FQMkAeKEJcE47QsCRswhBZfmavsDiwnpa",
  "key23": "4U6KBXQ7CLXf3TQcGrwyRfKYDn8qk5ExQQrNxahR6h2qtiZKZS1jXfonNmZW5f2MMdGHc2J9sHPoCmsSMTDRcEih",
  "key24": "59ydaM9gHgz9AnYuPaechsbuanjiNy7Pw3wi6bR8a1k8RE4H998AThUZb3AYbyPoQJkjBrazr9u4CLJRTFBEjEEc",
  "key25": "4sLiqkTJiiAY6munjSdF6UBPmqx48PhxXuD5pnyEHWW88Z3CVQ9SDDyWi4U2h2cwkM6fHA2HfhMveM3TMggMD2ka",
  "key26": "5NpNWLeEZwGzc88c86xHQ2wRcCXqN6SDqtLZSwWAFidQvGib1mvDMsgFnx64vqa1fBqXxrBEa8j52QujT8jex4iL",
  "key27": "E5AbWMoTSeKYa6WBbZLkESQquGGygpcjg7Ky4DQnhoB4AVK5jWGcLamnQqjgVVo7QiNJr3pcXFaUrgrNWAry299",
  "key28": "29uqVrwZbhQbQCgNEiQep9b7ffpPR5TDSa9uERhbMExDbmFuRzkxbpsm8NLzFGEubixkVsm2hLEDv8GgSa9CpLYr",
  "key29": "2dwDuCdMsgpSo1zbR1S8Vn9Q4q3VL856FAwgyy7ScqTcELF55iAeTCJrc3xiK7GhfQ864QCnB2nNoQc5CDuGm7YU",
  "key30": "2hXpNoX5mKoZHruQYxfVtf7LpTtcCMyaY1mR5fRd3UsNP9mLQdGz8jdoW5YrsKg8Uk22Qk3AmtUJTCrWT6H7EPej",
  "key31": "4X2hoTsxCR23gL1MrAh9NVqF5qdvAKu6rYMeV3dWLCkSNk1YTyZs5AAekiV5a7iqd43BQJ7ZVaFoAncvDZXvF4p9",
  "key32": "2HE8zCyCtALu7Y3DNLXvLyo2xSBo5Qq2Wku12mWT2deBvWKZASmnzjUEsqStP4jvC5NjoCiA53zusgfBeDsLmCET",
  "key33": "C3AHKicRxKLXh8fuzuTi1WqN4AwREPw125V5AL7sVt7L4hn2EcRxPsM64md1hN6wB4kj81SnuvQYLVEg1zHfpZv",
  "key34": "5UcA6AYPaAiJAJ9u3zFEuamHxMLBhJp2AizVKgtpPE6vY3ZHBe6yEP9aEG8xtvsZFi2J624L3uU4ot6kkaCPSAra",
  "key35": "4Cu7dcJ5hY5QBbrJ2HEjbDykuGf3Gjn2dujfoFE9ykrEdFb4pukixoz4i3jXo1CK5Dp9y6hfd4Y4kZq58xSdT5v8",
  "key36": "7Ft3UGWAo6PN3XtkmVpi2TriTdkv75gjRZMZCyQWfbGoeFVku3D6gtC2SM8UT2ZY6SAuXntvwS9QEoNMT2soe97",
  "key37": "5xLB3V1Ud23g9vxqrh3dMfP1ZAgMba43dYsgwpeRWVXwVBGu6g8ZPzAPhh8HvtfRTBqwxgWdh5ij6qmy3bmwDYa7",
  "key38": "DStpiMAfB41sCzk8RfbD7eqi67Do9DbiNzggzAHJDLV3FJdKf4BvL85XAKE9rLAizGLTj4M4y8XAQivQVc1ynzM",
  "key39": "2Sja5bgrrWz7FRF9pX3kqxdDERgU6Y7iP4EhSNtXy4YtXR9BpBp11NedPBWDmPijBABfundtEEtsoLFneTryP9nf",
  "key40": "2qngco6rhbGeJWss3vaALS4pcBTR9pULvJ6Cobf9LuQapnYi7RdEcGscs3UeP31XHV3wEjCjQEHkrB7okdfrDAAr"
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
