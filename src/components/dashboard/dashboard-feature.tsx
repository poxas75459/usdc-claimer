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
    "h9PTTBf6ZpB5ppzWUQs47zC7LS5QYdigLidZjEUUpu9eBWbt7sFdcFT8QoMekJZQQRDpxHsEzY6Kg3j7AndUoRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bT5kuy6RHQ473XJQbbFwbX9XM4xojZ8EZW88LYBymuWX8tzYTj6SjxqMnis3meJBNGqn1vQWe2hghNquQAS8S64",
  "key1": "2LEsaLUaSKnbWK4JqWA2WX21SHZxgpwpuz1mCEmbeRJhZMwyAXPuLXtyawXXwh9i3kMLqZeX74WngzpBWvBVpoZv",
  "key2": "2XLGc7gaxNRve3y1NRQBKcJrycVaDrsraWdCARJsmG85J4My19LigoMs8yjyCkhahX8Ab63qCSEjxZgLqAQtnTNx",
  "key3": "od2EPpkBxKAa3iYRnmWfy2qVvmmVea3jHDear97zgYwHxippwjULpdpCM9NuUc4W8UibeLNaj28XtRDASiUiUtW",
  "key4": "hfJf9xP5c1JU4aRPWdnaRi5XSEPhojvnojrHg6Dy2LTzcK77gytFzUTfNo61sUhjuiN1GQ5MBTGk6Jxobvg9ASc",
  "key5": "3GV9PD319uLBytMfrJWLFttsemT1Q8JsdtMktgd1hD1KnJDAEk2wvz8wgRPns3aQPZu87ezDU9BaWZnZgokA58rv",
  "key6": "2XDvUn2VsJ53T4hamNsESxBS4oW8VW6VBZ5ARDgTnV2U4Kduz9uL1socuKmPAvDTHpi55dyhzJcThoqWWH6qBPvp",
  "key7": "3gJZqBYTVWfVe43oD6pmhruZJHujLZGJdNFNnpAbTHfk3FRFLcCwZwiHNYg52ivvpaiNxr5B2L9ZSKdsFxYVh1f1",
  "key8": "4xYSAYVJVkeS7ghSmGBycDQ2U9kYYQNEDyY8sukSV8w4iPPAnWUzTDjVnNWz51PjvegFuynPdKYDe8wFVQ5Ga5ot",
  "key9": "5dgvqbw8STQTrrBfZrtGNL6CnQG9gstndjx4MsmMW8nNCnRuz6K9XBaKEFLPrqwjGC7EX8VZpRTMBzgTR9ZPi2bG",
  "key10": "3PdVD9o3Fjj83GBzW2XJzCRiEeTBpECQGP1wEww4Woxdgkdxnm9hCk4LUvZYsawnxnLHnGWs3k6n3ZUHq26Kq3KF",
  "key11": "5nMnWqS23LdkkhqC5V9QhGzeedF8wSTiLkEcAHdAuXwNDMywYRpMtFYq2j8z4Cu7NBFS6SBCc9kgZLyZiUyMcj31",
  "key12": "255KKRkiM2QjZVtSqXtcfLd8XWQqpJXJUvx38DWL5uHCov13rnMn8UojcjZEEWRzCCvSvv8jNJWjYTsAdiKmFESc",
  "key13": "4fKMwgX3Wis1GPTKbSYtE2ri3QeVyNhCCbV67uSrEX8Wrq53EmxQdXojYXvfYarug8zqqpC5Kvbg2h1WYYwCss2D",
  "key14": "2opnMcjnTjXZmdTPv4AbSUUM7GvPgnENPeDggZojKgwJJswJFMe1m4EteS7wTUvMQqfFySwgYTFDoWRLJPuED6Ho",
  "key15": "5P6tQ63MvePWruJNQuBSTPQkQFnFPKwzYsUfMrCVcw7yZmYuFLzuHkBjMW42Q25cEi2mN6eLHzkEybPyAwhiDVVm",
  "key16": "sbKx5DYXgEnPkXGGRPcv1Y7ZVMBd7UNpeEssFpFYgosKxiTtJvLW1LHh9KLiRPsrHkHetoNcRBBuAWVsu7n1s7r",
  "key17": "oDNjVxeKyDR5FPW9iYHCZmy8oZryLqHfUfW7MiVNBDgApFX81XeHM3z6yke2Fy9UfrTnX9vLSiVor81N6saqtGd",
  "key18": "2r3bSwaLFyBzc1JzBzYapuBj8ghJme7rhrB9afdT7zdA9eq6Kub4c1apU4Dn7VNb4dFciuHXMoCvJameJ1i5SS3d",
  "key19": "3snQfc3wMgjC4ZfZme8U1CYVH9xGPWuNwWJP4H9zXnReg53Y1BGAH74HPE4sZJiz75HVpzPKMpAUFskEdeeLrDa5",
  "key20": "52xXpUAMv3oUnSEqxSBmR7f5ioT5r7eFiyGCVFihDET6JVKcD7Dh9DQrMmEzvszuD6LyDtzmScf6hL9bU8xXH4vs",
  "key21": "ik8V1xw5wHCPa1pRjAjUnpNL4pKBRtBHdvNtW84fDKRQqDcmX1nhkAz3yVDD5K9SdmoJWuqwUUqH9dUBsJSk3d7",
  "key22": "2oSC6i9jWSqEQnRVRgNeehgWyAu8er15X9Mn5MvkR1N62piS2VbBVx1jMfE75kMBaLvZNAvN1tLU4pgzAJ2ovW8R",
  "key23": "2ByE78eNZ3sd5V77bfvDowARBerRwA3DjhYUDWZFQdvhNfe5HD4V9PYxqdrd9jUp9f9jNKb4Z8iB38zrVFhteqMT",
  "key24": "3QQmnsPPGWVXzbnc9D7MAVro2eKGiqiDixvinyQiogJhWrt9cZtXk3NvivK6ixERzTXajTrZX1wJ2BShtyKpwwZn",
  "key25": "238BpKWuvnDJj3BHnoqk6s2UkauknuaCd6v1oHCuaT91NCojU3LQkCJCnVeDKNiHQnWCGAq8U12ZGQHMa9YD4WJy",
  "key26": "4DjomuRSAdVyKnoqEteEEahMRZMbi53yyw3GPo3FpRNewqCLgXYMqZAestDMjksJHypzqiVtm6R9H8vLEQcaEKks",
  "key27": "jmNy3LYPtiGeHLoT16xvF2Q7eH5x4KquViQFt9CAKhkggzweyWFQnhNzr88uJtU8Es6RnWkCfepusbDjKLhWvxj",
  "key28": "87zCr2rgcn4otgg1q4Fq48Az2jYvH69te8UF5TK1nARXJuAy2KvajikABzQ2swYsUnscyNsv5QgG5mDv3GwPFtX",
  "key29": "ZwNvimN5ZWDzs8ZMPQ618n5pTR7bqwZNDKcfSmU3KGdCNEaBLYmDQ2gUqxtXhKELzA6LftvqiuJ6oDiw5TDK1Z3",
  "key30": "kQt9ZeVnCVXsuMuBavZ9V5XpK7dBfaxRHKJQyA6XBePzEmLgb4Tf5QPqsdfyzbBb4sro3B9e17PQtsSsEyZnEpS"
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
