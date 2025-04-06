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
    "bp8Z3i8LaBLjKmVifeHT9Ymh8eyDyRzqMErmFhKkmoFmjATriUSBF7UcGBD89apdELZ3KJb9sPLwiqaYy3tGngu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSCFghrgh6v4wxcB5uBQj4qqXWTQK7EMzRQBXS35tHGtXiYHg9rir6ip2sqyGXcwQ9SUWmE7mCJSLUyeuZajy3o",
  "key1": "1xD4jDDuKQWXtRZbQhMPoaftyHrU2sz3GGCXdwc5DCtiEAUunqzu2f3UMeHh3d96NXyRNQC7Z4jeo7EXd9VntKQ",
  "key2": "67iD8hZVReZWZMG85qj3Ajy9oZ5YcNr8sSWxvyA29HtnxqirUtUfvTbEYSxXpSYp2UPnQtsjaEvXJHdHxzcH9ifD",
  "key3": "5BwmzxqbbVMVkNuhjgHBycGqE8vRNJY8SfojrTpUpZnueYJydRCnp2XftoiG6soPxhhu1ugptci2mS9RQEC1ZDFx",
  "key4": "u8BcfeL5BtbTEnGbwfSztBRq2kmbHUqvgZtEa4VgKnKkZdygTxrxNJcxGeaTrEMKdBo5LpbLeDP7kmj87Ty4Z9d",
  "key5": "2VVoyDgLfbPU7XFFswqHTowAL1Wjqrw3vquvNNNP4CbtsDrzALMLixLELz4W8N3GjT4XCeupAgfMSBPjDtE215Dt",
  "key6": "aj5s9YEKqdZPpTgGNFrGzPuWnNZKwnkGSBtTLFPHuCkFcN6uX6TeJn8yAHE1NZP9bCTHLdGbYC2uhC8sPLBiuFT",
  "key7": "4JbQcVqrM9MgwiFZajsV5KxLyixQhHHS8cLjfN8eq4UXnBBd6s4Jz72TkAUEBcdfqrhQ5zTNz5X5EHWc6pG5cDqC",
  "key8": "5qJkeBnHAGVN4Gtd4xofyKbjKYfvedjJTtbb97jSqPdGCJP6a3fYJCoomvXWzobA72fBKPENZNUX68zJR3McjSE6",
  "key9": "4zsnSt1PfUSW7ydpvHJoF6Dsxyu8hMAhNHJcr9vLYjHQ63qpGn4BGiihV1rWE2szjFyy7T5wUe8TqzwHLoDxH6JN",
  "key10": "3iZESrT49WX4DdBjdPDw1Ei9182DEsEYH9bta3THJgujfDBeHQgLEBq4sVZKX5BbjSpFFKmjp4EdyxW9RAFokvhR",
  "key11": "N4MvSeTJdkrrya4o17qGvLb1jRZHKt7VQcYVh7b6X31wXJd538XwB3LWoEfVSAfxmELeLtzxcxxcmDRY5kV7myJ",
  "key12": "2pvUMJ5fyoGrJ7yt5SA8N7eR37uSzSsWSFbuzEdaa51kagzCwTf4CDa6mt3CT7sNx1Dj6A75ekb3RsPmaQaCper7",
  "key13": "2ELfigzPUCucQDKHxrPtiXGVoRcDYneRcSNJmFT8w1kHvc7pirSZqGiCL8G7or1p88BfVXccAKdJjiPcDegPZD7B",
  "key14": "2xNWanNiBok4crh5cNgG1hUCYUEhCazngSV4CxvnNTfVUW2JjfdzCKCCfSK7bfugnAdKPquVjuFupykt3Zkv2zB3",
  "key15": "4wjYZJQss17jQRLYCMpmrwPUSMeXP49jrStesc5ywQf9JX3ydSZJDq5Un8C8XJzNiRMJY3pBa3RdYGEquBz3793e",
  "key16": "JvS5WzNPJzXpY1XGLqFXTjTxwsLRVeNx32rMyGYErVSZ3tLBGam7HPgL93swEAHTgYUo5hhcM4LZ9xVvhBxwXCa",
  "key17": "23c6ydzRM3UkZ5hH3TSwW6F5mtVdgWUkGvTDbPZXuiKpRWiSmjqFme5SdafejB4Wug8CkwEpyc88VixJCn5sPQF1",
  "key18": "67BZXL8nuygkr2ZSQRmarY7XXobZpddpLGkS3VHgjTqCVzGrWwDg1y6ehEYTF7AR4YLJvxFuYcE6ZgjrJXt5h1v3",
  "key19": "5vVbh5u38pjbrysx2bvbWvoaUivVVGAaVxNqDowCmy2QoifWNYBEkioG7f9TEgpSwH7F7j7oZsoLMDSbmHL1VNh1",
  "key20": "2pSBdbbTZ9M3927u8J9RvpAmn3RYbUjuGvqZ8nWFW4Qgc8YJNNvCpTrTcCjRhnGKbG2uqd6j3oe6wXpHQU2Dxgy2",
  "key21": "3rNw788SkWFooAPqyK4BPw5ahex16MuxBKEXbskBTWCaLyH5W1aSVRjcawKoH9RHmyq8jy3d4tGBr97KXhjou2as",
  "key22": "3pxYZkmtJBr9wYpQMMj1zXTKFu3CvLLM21GPrrZCMVUJopXVj2naroLxKBaPKwYpSFkJojV7F7rNVQdwYEX7jsRY",
  "key23": "2j9jykk4hKvE2uCGtmhhnhqtE299jESSRFv73cLKpmvwxkroPQrB2Zm4Gq5GypRYSPnVfqRj24fyZHbC1aVAeGPW",
  "key24": "5vh2jmWadFKVEVfL6Rs7h5bB3pjdigNdYBQHqhDfLtw9JaJqSbstHD7UCzSWJaVjMScfXL4Eqeg9sJF7WyWoQw4C",
  "key25": "vBAnXME8P8BLTPDMjpAJpiG1NYt5s3UE8YreES2cUGp95x5gPqHw2UZQ2wUAAJaGqgJBH4okbNU8ZnYvUart2us",
  "key26": "3D5GQV7TFgPui3Uh8p1LzuiitS1yTTuKqecNJeQZydc7gdWq47JVFprmwJzdgXtELsvN1Ebs8rb98YFeUgGGkqAG",
  "key27": "2Y4Av8gcTBAdD2RRnPxPnbGaMdA27CsqGZNUR91aWQ79UDTXegbyDh5ZwCNwCt7EaAbbpdRvB6B6mXTzMrwUtM7x",
  "key28": "3SPJHPjjZTDFGihoBfiX2GN2bShMuq2R38k6kathjSpHVMthnpCpkpWJHw7MYxxypGcPuxFwHSsQS3vr5pWRJfSc",
  "key29": "234beh4Em8FmBKw3vFTvL1HHRsREKgq2sdoQVpqRmBgBcshTh8tW7DRG966JFgKFhghzUmCaLTrfpmfSdNMK6qgn",
  "key30": "NpxKwhtbhMd5MnbijFZVvi4aSrnMeSiSpeUssaU3jRQjGUSwJ14BHVa7gP1i45tqC7sEqPLEEKuANXrjUFBQqyz",
  "key31": "63sVp6PVHeivm45Qr3X7Jsyhw2cXXzpjAL6T5a6Gcmg6wv7Byo9d8cidR8cx4R1wDt9uCNW3w8ZxMi6CduMSUow4",
  "key32": "53EStn8C4YK9XKkeer9RGvwzVGiwAz7gqdes9ELYWqB3S1yQi3h9G9FxpL35GPxMQL2xEmqnBhU9C7E1Se7GM5Jt",
  "key33": "4p4yCDV7CXqkYPR9TLzuFqco6dY2eqKQzHWgxAy6ykMZFJQVpexeV5Y8fPHWGBoyVrhsbx1DjdDfYW6qEoocVG8T",
  "key34": "3A9BVBNYnQ45GH51yCNMUvp9fbSgBaMZJJckzbVtU3xTAffireUXv9rvfkXvbzeyTCvWvfQ6u2rJ53kRCpUa7wPN",
  "key35": "3Fg2t7LQYGwoJKeGRbNbJCDxwPYoB1RbDHs8KGQtTQRSZuFQV5o9dLXxLSb2y13s2FnnKwVvfkdwGnnm5YNg66h3",
  "key36": "4E7ZPqHsdin48pt4649PGCSuQdWoiPwkg1ScR9JtSYpD9jTRSf2ofzD6qsvZhiBFuq5WD9KmtZNraisPeffpT8ne",
  "key37": "3CJrqaKPvMMR3HvGtGFg1u8ownhZe7PC4Bqc3SV67AEA8Xrmxm8TxqXTYzwycDfCezcpHHFZtdeS3UfRdiKjtaUA",
  "key38": "5SxUkn2RfQ85zAKqhcux9Sz8SsRgRmactfsupRSaKwbDNfiRQFhoyB86PmTB7updzNyRGGtKt2eRm9W1gRVYaZVo",
  "key39": "2kubyAgaVU89qkzE1t4hvAo3nt3CAvpCuvDSsmN4GMnG6GzMijtPLzYGfyCAFhDEnijwHxB3K7ZfUX6ni32GHgj7",
  "key40": "4gjAGjeHUMnY9Ys8LvgYN5Zhu56fdGFEbkxF3hzJhDuVLEWVy2N453VfUEf5dW9ggUWq8Fw6a6FXjgJZsyku8fdD",
  "key41": "2S4wPmoi43Kb8J49eSmZa5CQUzkonXzxq9dCLhp5LgNgyYetEHWCafj73GPpMQf1ysoAZewKoW1tbuLWttHwW7aS",
  "key42": "4PJiPUqtjz6m5eyhWnDTqLRqEiPoKSYUCCF8DunUNSeyEoS7x3tn6bqfGKXfAAotvqFg6cPHPhTJjtNbTNTvbe9N",
  "key43": "2eMEaAoyRdRD9n9svLx7kLhuXM5H5PMJS1E3bsmybDh8MWHzXgdjny7XQjiTaM1ujq5QK4SMUTDVbmSgiXChwdE5",
  "key44": "4Grg25KNxMs9LjN3MFne54n1Aub9Yvk4dJrAAXG9pb7RjhTDcehMwn5NVbidW78QE43APVd4ZrpuWNP45vPBoD23",
  "key45": "2v2eKNPazQ8eYEUgAZruLJQGvnVhkoyPXdSHzBsthm72HYr2ErpMakRmh4VjRBXLRR8ygUWQCqPfyFWp19MuSq2T",
  "key46": "67RDTcTo7rxpwjoKHxBHViS8vx9QWpsM5ko1NiMbbJTJUJMZxQUMhxY2YoBb278APnQNfFev1z8KGUopaGbC24p7",
  "key47": "4ZHNA3CSDD7zfyoEZyfthwkLMPsGJY7K4M5tjf6ktDdKPXXdE2t8CF5dcHJqp7YFSjjCEqEkBEHV5N9zWwtVkM3"
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
