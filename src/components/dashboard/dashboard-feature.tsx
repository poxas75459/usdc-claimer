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
    "4MDfWZ9fHStV75kFafxmWdX7WAygd5zainbuj9if18RKsMPQ7JhRybwWynuMarB28QeKvyhve5xSYxmDvSgKqp89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KexgmQfk53SD9wk6AVgFJ64B9aNy9iSd1WujMwExYRfDpiXKs7TqCpN4auVVBqLr3BAsTPVYwJV4QNR1eLfYh9F",
  "key1": "5QvzPSCcR2oTipKcGVwpM8FR28nQHcaLFw9W5p5M8ADEM3Sh7QTmuKVP5V48z1UFd3kEDHkkmcfmzTo4aDbWu2mf",
  "key2": "2WjS99wPsbxyxNXMfW1JpBa1CjcbQ2nc8Pw9up4cDwL8XWDqzLMxvbqvhYtAX5ZpUCXcoJsAkxztTXZQ5AjYE4iA",
  "key3": "DA97s6skqNM4JDkwiEc3jhMKLDtuRw2fLXRByG15xhocnn32U4Q6bFGvMrZhaqAuBtqqy7MNcJ76And5ivzQdmS",
  "key4": "wR1qa131UJYAZnz49JgeV78TEcq8GfykhYjjZ9V4MUKgPvqKHJ6Q7pdxoPTzNHCrHR4hSwgUQD6tnDwpSKboLrR",
  "key5": "4nFEKez4Mmtzz7znChEcU3P7Ajw6MjyprR9xUYiN5tLTGBZBKZVp512vmhjTgGXs4tJmZ2V6KCiiHZT9StFoxywe",
  "key6": "pAHRYq8HW2WLyPFirwvtxBkThrq3YFEJm6ggPbdQjPauJfDNEcZaypbHwN2RYfr9E8wzJ4MzgA727EPCWHbjviE",
  "key7": "5SYMNF3LJHyFsmUN7oPaWqBEd3PP9V5Se4uePymiDEGTfW1ndtYPWwgx6eeE4iLHiEqRPkk4JTToPTYeERYukouP",
  "key8": "25pMRed9SiC4ebKXpWhzJVsaBuy7qoQMYzzpQT7wgSQhZZtiKsqmR3jt1Gc9DC6Wb9L9kf44UwiBhsJgibcGKv7M",
  "key9": "41E9CRhkWUgeQN3A46ZyVX2u2WsLHXVkgmSAXSQPp7RZy3ecrLxuxF6ygxiz4rSTXNAWMJz7KdqKRg34rF2ymgLN",
  "key10": "NUy7VCCrn5hTY45bGrG18pdez6fKdmTmPiudbEy5zxgFVAuTyRhp7kjBW74hRhrs25ifT7A3DXGqztkbsna7Lwr",
  "key11": "5z1q9Wnz52vFu5tE7VCcTsgy8EbEhB5y1agH71CqBMymEvy3dqGSNBWH9vwg1xGxQLD6thh4sEMFpcxjeNLCrewH",
  "key12": "5wxxYkmMyox4WufLKBk1wZ3YXv6iY2T8ZdXxBALtw2bzig28aHcftLzqZBE1DfofU8anJkwYaLpSuVHxaEs4gvro",
  "key13": "2KAPPVSpjuanKD1ZhD6nY623kQDELDZVmjuG9XP2ZGhBEJ53eXiiqtTwmcyjWGnq6jqxFyJdQix1rd1AAcaFxxQL",
  "key14": "43f5nzHR6cfE3NvptUYCUpjh1jXfFPLvXaojpv2vsB1UrehWmr6K8WqCproXobwAcEprz4T4PRxBLQaP3ResBb7u",
  "key15": "4xf9wAmz8UVgkLPvL867caMUzTCKH7bodQCG7MR8cENRhWJvdF5QuKfbZFUMKkVSJfJumHwJQx7KsNKn3pEPegbT",
  "key16": "3xrMMbj3UGdJek3GWVWHVCtfzGKF5RoC2viyP8dURDWy5vfMpnkKXWjZPhmr2XyrcKuX1u9spPLYjrWfKbS9YPPC",
  "key17": "5NrWpFCBDP9KGFWA2axsvPdCnB1wy7ZDmU1eMGKZSoLHaEMyUvBW2TVxtLkPMiAsb1FGAe39XSCR5q9ewFNx2kNq",
  "key18": "2Q1TUFufjc1PyPeianW8i4MSnigwLtvZgPywP8YSAH1henPyT1v1FhCVVGCHLNCzrP6berTBkFonLPSy22TShT9c",
  "key19": "2zhbQ4CaJ13zDP4fJgjGErDZxF79S3J5JS8bPfsNDJAhvA3kTgMxCejf4Ke9CY4nKCjbukv5dkEiVkjxoYgDgWZx",
  "key20": "4uBG7DiUyiWWEC3v4maDVyArcdffMWgX6DtB7MD2W8n6Yh8jMhqFeW8urts44VCDWjoA6gqjMNZr36Y5xwhyQVV9",
  "key21": "4FG5pUPNkbd2RJVE5fjM2Wfven6fAg7ZFFzheERmS3XSpTF4o9QWSjHW5L3xJTjZ758B9fmXM9yzA2BbnKYrytuC",
  "key22": "3EmPhXgVn6R21KiY3JFSNnRq5xHaKtaKYAMwtbXF1zvrjuwwQmrQpBDSETdPxj8hSDex6uJwRgy9qyAre5YxpBbR",
  "key23": "2rPL6FhG3Ri1ghui3vw7ZAgXGiqYNcoBjkDYAHCnbQbRpdxR8Enc7r4rHKiewJaBUKNWyxzKRhwH6y6c5KHzBzMM",
  "key24": "3DZZaUbZSkbSctA9rq72zGz84a9WLUgboGBUE8KvJ6ngL1PWVPb8ZA9ETD1Tpkp3vcW1HJsAzzETfcQS2BLJpYQ9",
  "key25": "X5EUUeEekCgDXHfxaZKDtu6DaBEzbJfm4vKRzhZ4qohwbg9jkcHb7AJn9YMmEUa3RiTDwDY7oAnkQaHddW92oCc",
  "key26": "AmYtmCG4FbHvj7YXfWReimfW5oU5UWuf59vEX89VPMBbPPc3oR9yynQDc33Rf1ixCTjHXqsgdHVtYuNFurYjCQ3",
  "key27": "2VbiScJwA8N4k4ditjGCDMYRxGmqEMa6tMbeBLfNiMBm1uYV9NkKcm8Yn6g4Ax4R7p3b35KEgycR5VVioMokS2rg",
  "key28": "5WQnXqbv3nr4dZNatkoPx2kTEovpxm44s9KSUcr4LMS9yePtELmbBWtBytixZKmqTyoXHFVUSncoTdHBYM6YaMvP",
  "key29": "2spjh13ExgjXSFSmV7hQp8eNirxqooWPe7aNdwFnhPftQnBC7hUU8kc9s4foAqpLWAewtc3RWaFT4UQSSiocGZNj",
  "key30": "3cjaMGLex9wuxwYmoETJE6Go5Cb7PJZQobmNqXZXsHpnebhzdueW9qW9ZzSVeZzQNEN5DFMuGFxVLADXWPLZQX8d",
  "key31": "2Q7jA5ckek654Q6XCbbnCsUnzAWzEpPqHBWY7AYwe7CeVv5c7wd47VFAyqMLkURCCHatPxPcrFHxXGxamddD1vH8",
  "key32": "3xjFeSJCyYksEYtTQLtYamLjqT9vRkpg9wzcg6w1qB1hzvxqyfJ4HdCjQe1Ek7JFb64LbEFDL8TwKQEmdvy4jr1i",
  "key33": "35MKe7ShtXUER7Y82Kdu6er95vSev7vaopiB2qhG4Z3o1xWwoRkXV21M5Xse92dtrhksYJm5hc3P8EEToZyCVhXr",
  "key34": "3jprPH7vCuTRcUBNTTpMegpQcMKrwpaMqsVZwka4Y5DyjVHtuP2Ug5WxD26BXRNHZ1sEFiz4bVep7245gctLHzNk",
  "key35": "63HtKRW7JbE9qFb51qx7S8xr1THfipusiYN8ru6BwEafeSGbN8g5WHHM5vnwun6gaBZTGTn9SRgmMet9fumRPxtM"
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
