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
    "4GZCXL613wyJvTgpTxJA9kZbYV5bXKoL3hdVgtHHf5CqCXYyxLniDPFW3EC8GWoTFGmB5Yo4TwVQvgNRnFyeA87M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cr6zF6pSDuZnv8S5pbyMrpPZVXnKcuRpa7bKJ6fPwRBKuMFtyupfFnQcDxKT3rSontKfVzY9mXHy4MQxamwntGL",
  "key1": "2VCfFya2gqBDayTDzcRqXmNTLdtVhfmrDgkL2EFZ9XtDgBpJPMqFZvhZ9RDpYCvHQQMphbqjJqX2qEJJnJba94zs",
  "key2": "5Lpi3frkSqH9wm8zZiA6J76zWWYE39TthfPQdJitVo5pY4ip6zCdYNQPnxrCadrjgyX1CpizoJYPKeepxXpjfWcA",
  "key3": "2WtiqEnfN248iwgoBoGR3otpuwComwYbafYP5MkTC21ZuGQZn9XWa6TYUDhfHtcoyXU2Bms4fQGXTkYuQECEqkPL",
  "key4": "3mKrYXaJwNNxD1JQYjer6yap7v5WmUeyAGnU5NPLQVSf2pfumBm1STrispr8iR7Fh6mvixXXAAA7XvAJtTXtLvsd",
  "key5": "2KB4nxhjwTvGUweamF2wmbRVRFWwbHScw7tL6fVmYeUMdaYBwt4Vt7KDtwVsJ57Atymd1wPjGjuy6BvQFLNuM4ez",
  "key6": "Wh1d8sddPHsSJS536ZorAJ5wf82gKJaPAK1WQCWZsA7fxcVv9Q9oxyLzeW1LiC2v8TM8HGwJ6EMDkYxUxzwtAMc",
  "key7": "58vs2gYD1V4E7CELt3knPLCu7b3fvP3QRLR4NYWTgZ4WdAgg8bud2GDPqKhRabmwq2S4pAbWqP6arp5Xmp2uZPZ6",
  "key8": "3Lhf4qiSsYvWJSMx1L6YuDd94qzAya38iLhM6bBKn6ay6VYTro68VXQsCwvrZfNptfPk8RUfgmo1asRej1EMuCvw",
  "key9": "67Br5M8A7thU8ENc8gF7doHZ54mAE6SjZApGYoB621x2tYCJ9XDwvtY6rxnSSQj1JpoTQ7Bj3Cn83U3npYX61TgM",
  "key10": "2UZMfV4zpbiuxKQGFciL1zNMSnTRMzatziibbfsavz1QFfjx5ztv3kSh4NdnnSb5L1fP8zRMKVaqXhfHyx9mR3Ez",
  "key11": "2DEcPXm3uNLtcEE37VvoL9xEntD4pyA1USX41mSX9zqpBxC3CrsWKuWCcE6B6Lxa5S1kMdHASMLCSctav2wufxDs",
  "key12": "2oNPGodweg9P86wyvYfHDa6YsPYA5boC3gyoo9McwrvDFVzd9LQmnCRcuUPpQYwUPraMn2h3cPQJyYvm1RAzLEqe",
  "key13": "5PLNw2k6q7GRwbzhRhvwgjSdeH5CUPvJhfAZeYhtY18BTCb9n3QEarodfoHQhZsFubbKFMRtNCgwM55LRPKsGhs5",
  "key14": "4rJy5BWocN16km4GtbuHS1gFjnUngWDE6VaThCqntLyEqxDy4xGkFhGjCvBpBQbUuv32UZwN9dm1PkZ3cDYt5gfH",
  "key15": "3Z7pPzPGcAi2kmZMCEwwmSgY1NBm5m6mnSv4bK44HQ3XUXWByHHCkZcWWcTJXUtYWNxfKHYcnMs6b6NYkV4zS1Dp",
  "key16": "5ei97gdHHvD6EFDSAYLnj146MXDNGtyFgrxui15ou2yhcUXDdLXKKts83FVkgVQU12ixS3PozXZK4bCWMV33Q3Yx",
  "key17": "5fc5Cm8xeVGmRHiZdBYbQ4gzDgga2BmN7LB6Zs33KxRySrq6ghm6dnpwqiHCq7ptYj4RUTgpmRpB8H7MEhD2Hyod",
  "key18": "2ZfbivLSR5jxuV2bKGFJuLfhtcYDsVKgpcTLbYAFqCmjVV1mTTWEgg5hVg9LyN5v1kc4vN5KM6iorK8WoWyNGVAu",
  "key19": "2KnthqPz99CQQC5hWipBYRjPsjtdDafyjXSe5iEbAkh1YMWC53RkxjaCd9vPirL95zVv3peGbeJP1mZHTWmF7sh",
  "key20": "3Ggkq3fsWH1ditanHq7TbpFNw6ys2h8tMRDCdZGJKrj1CoFZE9hRVm1B9BmPPwCVyVykhA2SUQeC9FEiNdfw9e7y",
  "key21": "Tt7cpZeo7RXbp4nwB5yanvkoyYGKqycbT4RmQvmNSrM4bnRWbovtXjTHpBuw3tgzLuxkFkKTDkxGJD1sKbSuMSq",
  "key22": "5okWiegVzwJH9aKrX8y7fiMptiRZwuspKFby8iw7yb3JjhVVbpVpUHYtGVstYDnifcD3ZCyDFFRhz7sM3ZoAe58r",
  "key23": "3kgufv8Di5A2aZkQcHvC1K7ybpy2naRw9s75wnnFvJ9smXKktf93vYaPnCb9rvciDPBnSzDMw1WWU7dJ1XMSD1wi",
  "key24": "5K7dEDXZfjx2feCepgQMR2maj4vVHxD8SScQxcp9Mn8rYAqmzBAVQKpXFxPyFM1DWTBxx68suTo7tHDq3tVzvRMQ",
  "key25": "dP4rE1NPzyMgCbTXvLnoExkPNTxDp7bKSSj5xcdDUU2qrpYGpu8pJjkDYRachY2MnBtz5MY2yhLFVq2NWBnvYXj",
  "key26": "2Eq7vY7MCGX5ncTsj8xbpqpFDsQBxiLN8Mqy1FZaZ73ZNEZTTM2LnZHeZmX1FtogJS7EeDPF7NmsXyDd3Whmerar",
  "key27": "4j2xP3iYjC1N2axxCPeZrRurKx9LQ9CsH7qBv1DTAEMdaUfhsreMAbQHSdpXLAjP2Hd78w4HaQXMWv5DTF5tinim",
  "key28": "wCDh9k5id5JvfzLipaqVy7GCR87ZnYe4W4NU7CLUUKLaLy3RoKHv35gbyGgLivAJch3ySfR6ffHqJsGUJFx5app",
  "key29": "5e6MJKM5acXWeGxYHvfMdpWmLmTgWjZu1zhpT2BUFGvsi33P2FjG8ePNtUXGy8bGxVhmEvyjSiFNRT3Vy9SB1qGT",
  "key30": "H3UKL2PGPrQXUJLuHJF8m8yvQN6s97HwBnAxxT3s6oXucr96pR8r5MkDyRXw6hH5esYfEfgoQyVXu6UbMJHrKrS",
  "key31": "UfbPRmYwegiQA7WfpxsCXcsbRaYTGiuDQo6M3t2NM1xLZAN8dAWo51ahUKpzv6cuYEbuUb4YkeEsDzBrGFdWSh9",
  "key32": "Ap8s9ATWoE4GyW9jABQbBFYsGUw16K98jAPJA3PW3PAsoWfSS7v6hWsnS4M5pptTp5V7ZppCTX2o1RedxP535k2",
  "key33": "2v1KADuDjemQ9j3EN57f1Zr7DU2fPiE4G1Z8niLksDANdqrYxThjjA1HQS8TQYsmh4e6gJ3bJR2QiGVctovReAeF",
  "key34": "3de9pcvCYZ52kmWtLWCGjDAgjLLxnNo7bBfnRy3RT2ovdsHujak9xfszcAv8oi8pZgM3ZTjkisFTqmvMjK5nQZy5",
  "key35": "FYjXiBULXj5XXshdHovkeHhH2mBz9hAb3kGAtirhXHPiARtRTTWfecpNAzzH75pp2yi1hm4J57Ng6zjXKzRbjfQ",
  "key36": "J7X5CyNBsnNVMCRvaSNvTedXLBhyLt2MeoGbmt2aKGNeJXKbCJ5wGs84wsJp7JbUYWzTeTStMe1TvkqaRXutNQ4"
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
