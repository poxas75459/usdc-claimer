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
    "64DDLfoag1nxAGZRumPEGJY9RkJtfbFif8nyDGTzTRmjSdGCEAwZtunQF97PxHohRxXTof4TbxfpK3KnRre1fcHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYqCYVpWDAX4fiaCq5greNc2asqztUkowm81Cuy1M4WdwikCoGUvRnTTYWTcKNG7Us1jsjJRqEW9jCYuQmMbo96",
  "key1": "4zTwb6aJoodL95qtsDm7SFkrUyjZq2dKdvhEJpggojuFmwSkWdejDZY8tRqz3H5nogx4WdAHmrsLbNp2t8Ljmfh1",
  "key2": "3Mfmgauoisy56Etm49ZaeeSjdvTiNSJjny6B9dL7kFkxAacZKjpbtxUvAcxdeiSPP3dE8PnjZQwPnciss97rdbuD",
  "key3": "2e8YQEpUzeQki5aVM5tVuz4vvgwPkJBWqXpk71geTJus4cozjvGoiLFEp2ueMxFLXVjP17uGBugAnDmfHkBZrhd9",
  "key4": "58VRmtL3uKkTmorWzwHy8nE4cGGQJzbSqgjMRnyZftX8MW1VpGcpQakgexL1J5NQKTmq1aTayaZKLwUJ7jvu9sYS",
  "key5": "62LajYGfXdvoegL7dBhCn7N1Et3j3gKdPmfBay157yuc2rkhyjDgDk1UzGcuSPnuSS71BEHWfvtLJtRsgW5bSRVn",
  "key6": "4KCUa8Ndkyd3UCvNZ6sekhxfuj1VCnSWBhL3HP2tZF17TQKAQ3Nzr28ViLnb7ck4Gamv9S7rQ7pjUatwbSErKUda",
  "key7": "saUdxrTG75pR4YVengbLNngKdRzX47F8u2DvmRDxMwf1Es2Rj9RcvXPHnKdEhQydpUZxFBDfeKMjvA9kpjpMP9o",
  "key8": "5AmkfuYAErozHB5sB4dWauYPpzWWzrSRhnB6amVxnntBpJoEwREpEVDxkCePi7dLLPZpXTftKiFBAygb31VQ19C4",
  "key9": "5dUpHgmqnMNZNSJxXg9raLYnrC3hYjaX5J6Q8xMpo6oZP7YYHCCqGU6ivwkr6B1zLd7N33C5Soky8BPhuwymRdBB",
  "key10": "3C9HPHtEmdXe5DMWJyMmrUDed6XH4QU8TxfhfAyYxxfv4zKGU5LGPhTcH8oXndQR3W4GPHL56fscBQQGcZV6BgU6",
  "key11": "2dEBJo6acCGQAg4Nkff5sR57BW7jQk74EbL6dFdTb12MdvZCqspycbPyxdUE9Gwtn4292fVcAhYDtJo1r2nzjdgm",
  "key12": "2fJxi1NXjRzMwEEZmztmxb3sRLyF6FLyigw8wrZDNjY9JCJQcebgkRm1cWaPEJp32e5RLGg2sBNSTzT8EMm4ePmn",
  "key13": "2uPEq5Z9bSqYap5C6iPv7MeNNrqrPRm9sCWNwWU4YmUn8QAsPf7trWZcZmDwjTNn7fykpKQGZzuoGnaRhuxswqUS",
  "key14": "3LLNFCmw7XWsYGzMq65X7wiCvQLXz9kQfJ4HQMwWZryknnkAdz8Gu2NJemSPYndSarRLYBVbe3ctYuNtMiDtFFNa",
  "key15": "21ydShN5nFG9jvYL64qiVpg8sFRirF9Gng3fnKC9ax5G9qoVMcQGxgMQRBzDuGogaasbfHpGzjmmgmXnBG9H6T18",
  "key16": "zGcfJvxDWPnfHkY9WVGGqVYebLv7kM85gedPwDVPmGWFwrhj5E9pFMf4Bvb6cKa5SNQm7sB5C41tJ36jxUN5UBP",
  "key17": "3xYB3bzVC1VWrQvpb3ULEcbSoj3QWgZQV8LPvEtuXWUo4CDUmAxepR165WWmHPYNB2xyxAD1XX8j8nrjQgcZX2sc",
  "key18": "2BVEymrpf7kUFTxNwYG5ei8rK3ZJjXY2akYhpbrdsJt9d5YCvSudsB7LUDJFNMdZnh8vq3bnXr4JHYLjz7n7skDP",
  "key19": "4ogTZH2WavQ7Z6VD9zvwhW7yoscucWBwKEHQRQdpi8XWFZbgnr9GkMYgPmNMo2EKjeAkMQ4ugoDWHU4LmzUt9gie",
  "key20": "3prb3jhtJxLgmjpeemh9JSaXD2tnoN4NzAjbWKzhKJ3PChwkjFRfjBnXHc1qsEBN1otAn9VKg5f9T42EmPY6g2sZ",
  "key21": "2uwkMvYi6rKLqqSa3Gqi1VpPGunecWX7qobCvSUrEfi8TEZnvQ4Vkiem1KhKsGR1kodxBwNGdyc9GHWqsmdH54Dw",
  "key22": "5vVfTELG1P342rebNGFPkU6HBRUxwkDafyL86o8EwrK4zL5PLieEQhmSU6XaovgczRuJzbTDWbWy5Xdt5jZAfJod",
  "key23": "2F14Eqt6ATRtHXSzSUCogBGfhZSn3AKh65HyyQd6DgZApYMrxb9fwEMozxKQvEqaCQtxqu28jUxUARsoQQnDvk9b",
  "key24": "kv6zhrhzxyFmtqKdF6GpL7xTZqbH8JiNx5dEwAmTX9zkAAJCaFvsLKorAtEC6D6hPNFpXVnZs7iavYFMrTVVend",
  "key25": "kqkQeug9EzPuSyaL4u9Ln4ZZiohnS2VzV2ep5UAd9xDFs4ozF9cCqWf9ZR5JUMVBipoV1ccjtRvqJSBkF1gCXAW"
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
