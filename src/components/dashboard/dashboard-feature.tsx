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
    "5TbXEoydMA9Cr7wHNniFPvzwtSkEizNzLY6inG4RyCwMp44ZsrijVEVdtMtAEh8p3j7xegWDFgFTmL2uzU62Yusi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fscExnRHymDN3nxF21XRQuLF54UiJ6knCsyst8ME3TMsRdi99nRCwTjkT1NLsUMVCyHHiWR7TANydAd55KA6prX",
  "key1": "3xYTg26JbYAsMcPrgkNM6Wyofh32Tz7oYeEBCoVr4G8uYsVk1cSGBA6EyWkaeViokafzBXTE9QpT8Sbb2UX3agBk",
  "key2": "5bkqKXcssHmZvP9JToDEjFZGbjVsdMH4KcacTQXm4TRiXHuVVfYaGVcuUq8DXa1xjqh6zjBFqivmVWoVYvwV5YFA",
  "key3": "2pPxNHnce5woPRh2ts2MYqJWYWZEqMShDJRGT2xkVUpLoNipVcCRmXN4TngudAE9HsZodzZttXXRRPNPkonRPevW",
  "key4": "2VSSfd7Cy3nayT7rnQ2FboPfrmCGvkv8TTrDzNSj4CHqgs62mHf5Y6L9Z4ArgA8mYzyHgXweB2U5cmLYQhxQLk79",
  "key5": "4CQWDP9m4jqUbYotTcxxiCN97ACDiqMcEYc2UmCghwtFosQ143b2Qm8t58rDAehPYG6zPogkKZEC7wDxgiYPjmXL",
  "key6": "599wfa26QEAhXTjjUSndwsnobtUd4xLfRz3WY2Vie1mXG7UVrjxLsNjGNC2CPQ3XqKz2A4rrf86qCB122thv1NLg",
  "key7": "5afXXmEEjWD5Cvfo3SKx2CCyNkmRC8FGF4Xcb57LCbVkwnME9Dt9Em12iu3tZfBg35GVdz7Rrpxiw8ayuZwHwx8b",
  "key8": "56MMc9PzgTfFMbV8g8TeHP1JEHedmP2cxhtUTLvkfdHhMtn1vNkEZWFCCDryX8dzP8zLgCC36zt5Rq168WjhF3NS",
  "key9": "5YdXL3Asn72fy71VbgXWhabBEeJsZR5oN9Z2563dys8mfLzuXBTt7C98rApJGY1naXV8fYxK8X3J1P39NaCVjfYt",
  "key10": "4G6PYJQN7PAUMH2juzaCauRv2po8ZfFizXPcQN6EUeAcPCpEt28MAAN89pSNjsB7ujxKSdDiNJcm8EggXRkXPh9y",
  "key11": "5KXG9wo4a3DWEzVeEUBoVZ4HAxqQZ37i6VPsikBLsdwuzgSBgSzQiRTJeQjcbSGzxZKHmmEo7hY2d5LP82MbsdUQ",
  "key12": "QURnRbDra5zmJ9PhY5uQGJwhNdViLQNvUfb5FnsUQNGpBDaiHXE9k5SXjcGErax3iuHhC8ZW18GfYVXVGUM9nKq",
  "key13": "3YtPTNDVjAZjUECB8QRDWknpfe6KF6PUqXaKC5UrheVVVi3mQtVFj7iRZCKrkEZyy4aZv8Rm3P371ZRndtzjKseT",
  "key14": "3ipy2Zwbt4tXxcor7EZQS6K5Pk2L8uM2U66YTuhqwkEVhCXi1SyuSn8fUE2HDkgWiz2w8qbbUaQZVsYcTh2ctM12",
  "key15": "3HnLsNyHCX4hQymmd3x1cWjoz2TXvX5SssbdwZpYUbZWdyasjZ2u7ozTE2mFPmCHkA17vD9NTbeLPNXCNMqYR5F1",
  "key16": "2QLeM2pDAsQAMDD8vQUwpcPZxkzgaYAH81bitiKiTZ3hTBHa4QsfKSyyRCjeNrRhMpgDVdenYwopGoCrPqqWtQAn",
  "key17": "2kopxsThYQNrEG2AtdzXPFvmPJa72EdW8YjvxhYo4qR7axQJhPHutQSZo1S2Pa1h2w9vVAMh1yeUoNMTMBrQWVUs",
  "key18": "4fJok2W2H7r7VGg7JnpT1CEwcfV5LQLueZziNEENj83G5pXQwnTd2fvPThWd7a52YSHRVpMc1FPLy5arYtAwD1Gn",
  "key19": "5YWvc7xvvDZDnjz1nY4MQbrrdUtiL926vDnhLQLyBSGt2euqnYbuWNhPjP7qQAyZkSxhurTREbN1EKyqjomDB7iQ",
  "key20": "4udk1Y7YYjyoLnvu2LaStM3jhUR3x2y1jHVUJ8ptoykUrRXC53f8HxXoB3t9sJp4pZR5XVVr7hGBcMwhf7MQXjtN",
  "key21": "P3qLvY2FaVufJdBtA2gNEweYfy2DJPSGQXiotQUNYm8LaWveKvKZ7SGyiB1tAnRA4e5xTUh8GDHcNTAxz2t6j5D",
  "key22": "64eJgxtZGANisKGK8ESCgPmhm8aZEk81g8Gc5DiYsFwwEyBZGzEzMjNWQXPS7begCp3DYVoRWdS9B8pgNYEC1e7g",
  "key23": "KZDbUDgY7tqheeNKJUEwD13pZ6JQ4ysg9UGBpJErSzZaLXGi5peUcmMb6W7MxAb8oStTcMXJty9RtYDpFhDRJeT",
  "key24": "wZvDyxFVYFQLNd6Y21cgvZ77HBet3HLUCXyiCe79LFsHNx7KHRrAcZAVS7kWTr2pU4HSbQkFFDbR1GCpSvqb8xs",
  "key25": "4aedxSupkwmKdNEwUjZD7sd5GnN7gCXPnPh9daGv2VT9oEDJjRWpWFMQRaYCMKkk7yF5Yzym611e6pCu7m4Q2WCK",
  "key26": "3H1XbEMsHgeESSSn46injyHZi1Wn25fC1gfmyuJeQUKdwZFd4e5uti4SPqYWZq4sncQ4ecdD7hv3S3Nbu6YziF7i",
  "key27": "618U4KJ4gpqq2PDd55xeHzGKqimv6TKYcNtRRFvPnrjphCET1JWWARAJps1pk8CGK5WJvu8zFBVyKz44Ymjaw5p3",
  "key28": "3qLpywsGovKygtFkpJdxBGMFNqPmkkVV2RgDL7WkWZeDCjqTbQyME18mubDfovNZxMvuYRkwCMufsFCc9NwbtJBC",
  "key29": "3PYNpSN4VVnZ2zwcSqMqTYdxwPwNYgXBhYipUqExs5PVpAtaqfdUc8RiWhoMzmwLQ9rqty7K26vNqYXFV1cwrTUP",
  "key30": "3EyZFFWRMdYWdTpgoywfonLveSMoFJcyKCS69MzQ5nhkZrbCGDbXZ3g9HkVcWhrKyhmCHPo6ii6fkiseJLRcg6tR",
  "key31": "QNxftBvD56j54Wag4KFKkczR2tBCNdU77Qwnq1ZGRxUvqPRnnmKy7MzYPYaKRo5YiFYu4i6BXr9zygEqrQP3hP4",
  "key32": "4YniyMsuaqgyuz2UrtXxLrQrWvFJqhC57wUtppZdQnuXnvAtWEaWJPKYBQqdR1dXLYK4JYKdSrGsJZv9XCdB4ogs",
  "key33": "2mtyaSqzLXAxmgtvAenkizwBRBUWDLJPCy58Vq2aQDmLgaeUYqfPkQMC6P6caZ8q85NqCgbHyc7TNXr51EKNwFET",
  "key34": "VRSvEt3J9mDUf5qEqMJAmR9ZEKwzP3b8RiLMXh7wogLXPsVutBgyQy2SE34MciAw7SCxEg8pkV7MKSatkmQiXAQ",
  "key35": "4p4VhaCcG99hKNW5MhWMrTFfWBcSDNF2xKpE79hv8a5zUUvWxYyA6Pmu8uYrmeCFTMbKZPcqfMwDWyG5HYs7PrY1"
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
