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
    "4zS6mMfjf5Hq3eRG5StM4qQ1TXbqqQmKoG52gk2QctmDXkAmzfeN1JD8jL3viw3mEwm1o48GLaFPYyZS7J8mPu38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uuvb9seg59sY9N4zjaQXfh9N8weLY4z9k8xojCW5WZ5PuKnLpDtJhp9AP1FSGPfJqMiMzasXrirmdBr298gAD1r",
  "key1": "2bLUhk1zcRggpKN53ysyj6pQ2PKfksP3HFanVkNGqiYRuZkSRdDoUjom8ptG7Wd1vuGfxfKxwnzb4jvgwwoHvQnr",
  "key2": "c3rkrQNi2Tq8vYmKeTKCJQkAzHNQbn4tT6NDjno3LfxVjGGQKxWCZYa8yq8byNbn9LSFsohNxKYWUm8jonU1vFR",
  "key3": "4sUvfczSZySHR11oa8c2bA59i2AMjuHWY5yh3iWQTf5oMBmJCUf8HF63xggsrv9YHnuG8YeY43zzjnCDWVYqbtaD",
  "key4": "2k7vCamPsJt5qgeMi9vSgvf4JZii3G9hVP8UGL73JZkzMx42mqcMRMehcDEmKSK5NWcaB2Swz3q15nCUsPD9m3GQ",
  "key5": "nyVbFHfPUM6sDo9YinmhW8VLhrMt1WCW7NhJ3QGySJvevMfz79J25QhUFAApGMKS1HNuQAwayB5ZcnVgtFNgMhq",
  "key6": "4FxKhBpz8W9jd1m6ksB7sqYXNvuZKykQcVEBf6f99tdYDhS4SdKzqXh7DvYYpJZ4uhdGWmXcJnzLhNjCXd4SR9r3",
  "key7": "g7rYBY1onFFB6GpnbRt3zgxztZJ5mQ5VV4N2D8NUDc3db2q78uUveLsrjLCAdpoTpaWFVhCSYfY1YQgBnmVqeHC",
  "key8": "5HDVVbHCMoPd6oPQcbZ2QZFHgMcoWkPDbp2MRy7EFuhrqKfpBasHbNr91giPJzZRV4R7nMjMyxefgfkuWewu5MYY",
  "key9": "2KCFzHX2V81fM4i3sFEFE63mkoy43EM25Ahche3APawJ2uABx5uvtDtCLjwfFy5kQmmReMKcQAtGGZXg9YzPPkkq",
  "key10": "62RtDeULCbYZisTjaGVqy64QZydjsjWaK7o657AQLrN8odW5g7K7CuWftaYgjQBpzmFG7x6o7F8yTLSgzTjofRiU",
  "key11": "2KbToa9ph3vbe6T7bFJrC7k6bUnFUe2FwLxHdxq8bRcfQrWWVuHTbh9RfjSciCsGXFFpPp5b99wasrdrHNr9KUop",
  "key12": "35fui9gpQjdSxKRU7WnPpepwMbXeMpXJ2dXzXcbgc6E9s7AmzTD2oHXF9L3fapbv1mVgeShoRcrBMhm8psf5NtLq",
  "key13": "whVnH1ZsWniUS4AiweLxepkbz7aoCGnHnGNxYXZWLoXwGs4bnxVgk81DEJKKX8ujkcFJcV4yzMm5XtugUpu5oqr",
  "key14": "4rp18ZZnf8hj3zQRvFR3p8grvoxoJfDpPEdQqSS8Lwm2yVezYXWGXdHygoUmYUKK6uYExg3Qrx2ZqFjnMK49QX32",
  "key15": "3ncv7gQjoedSam44zs3x5B4kok5TqvjdnPkDeWF9vjun8coBnQGLmvLVCdypo3k1xoqPNP5Ln1hN65nGjFNoM2tv",
  "key16": "5hQmycHimbafnkKsKx3wShCqFDWug7VkYwJ342eiayAwyr5RD7czEVcaj4G58LkxQB51i8pPSt83sJAKKvkn25Bz",
  "key17": "5qkS6XoHKSbUwvvdh9y5yQqCaEVt4aBfkhYXgJGtffSkA3qMjLjgweB5EYmDhawLKceZh4TwFoXQSoNjsFLFbHEP",
  "key18": "3Zqp4BbjHdHCZpBweaQxjgCGWhtaR2d5FqWAj6eiWiBHshLLGpXCFwBr5XJ1SZUVbfBvtNrpV5F2S6yee2PrRFCC",
  "key19": "bnetg5Pd2Y7wZLYbMUPszhNcPJcxbgdik35JhfhXXph5Qkgp5Ex6rfAAXj8BbiP4ndGiH8SsLYCN1f4RkqGJXQJ",
  "key20": "4ZmJFNu6358u7TifzSt1cgsn4y8VR7oWyeb8t79WeKtDFy4b6khLKsnRgCQ3T9ZEXR1a2kqBYsFCLLLAm6qgxiYq",
  "key21": "5dLJvK87TTVxPQVK4TUHMRN99Et5qtSfJ9zDQmXjbrFBdKUqrAMf65EqvdHC9VsgmHWF57CkgCrZYieuizm2jS5U",
  "key22": "3xSvs6HDtX7eoKmgDgBD5bRzXr8aHcbkWi9RusPQXZu4F8i93AVCimQLAd6npE2uJ63vU8QGFEkUzWL6fqutgfo7",
  "key23": "4RefikBxQEdAieivHbgXfyqYDG7tFG5GHivU4iJhDLWZoBQzrSYeKKneaUCtubWiwuSgXcgzrM7bDXZXM3h8Ps7x",
  "key24": "4bV6KX4YwxG4gDrsHL8kcozDuw6o6h6dNWF8oaxXMGVC5AuksoPykpmiEr4wTGXr4SHFXoQWWRw3C8gYzNm8EhpT",
  "key25": "4YxPGxtSQd7xkT1MQnxSGNBnqF8UzmqcP9zpSTReB7N9dJ57pTN83rxKLeJ15fsNcyCgf322d3KbEtTrywVMHx41",
  "key26": "mW74fTaQYQC7KD5s3Ts2N58VzPpQHg1YjwbtESoMxHXYVyv8Av1WAuy1H914U66aE7DHWaFyoHT5EZGQozY44pi",
  "key27": "21G7RCgf2QtXSnxBD2KBvxNGKHuXhp4JZF5V5qpMmyAMYNo65K8aL5H5JfN2UXXf4ZBvZukJiuNE2ZKEMoWE4DTn",
  "key28": "5vwoDNnAQxmXe5DMDWzg1KKuB3XDcUqTFK32zQ2X1KLtk2USKFu7qv8GPHJ1R78HSARbThAZFxJZZUJJRQVMpkYH",
  "key29": "eQhdV5eMo7xG4h1fidDwwVBNgUrMTQovj6fiD8YP3cursowas7Kf2TRzJbzm4yamCcbfvxjWTfJB7qF7wSy1AcC",
  "key30": "2gNWXAr8wpx5zVZdh75MpeDUS6GV45TDcbe8MypFiTheGEpA2pvDqdeANZcztbQtAX4tc4UxUZaaWCDm8gcGykq4",
  "key31": "5RVuMBC8MTYj5kxm8UgbqQ2nbWu54PDc2DmiJtH4qov6kSr75dNv7obkTXaYgzTAFRthhtiqq46deZPY61qqnRAg",
  "key32": "2o39fTZXZW3Ni6pxJceiHdUHauhzmbnzijfxdoXQ9RphYXbzTruFM6KiaXtubfnuPpTNXBMenAnrxhjdMsXLFor1"
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
