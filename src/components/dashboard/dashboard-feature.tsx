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
    "5R1ZuJRhLcgPo8aEyebqfsqthhj3rfQgsSF8rutYYH5R7taQ5nnCyHuxfL9mwsthR1pHrr5jDNoAARo2uwQFJDoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ro2SmuY1RHsswggg5Ng27eP291Zhevrzb4jMYgaVAhGPpu4151GkNf78bXNiuCQ6hNu4t6W2Di1Seud2vCcLD1n",
  "key1": "4WjiVJEm4wtYSPcYcmf9D5mPACYKox3P72bSHjY5kajQgUY3AB5x6QoV8X3gfgeioAu3aze4uAsDTPLiTP87cyMS",
  "key2": "5hWcDn5y3NSQ2ECp7bEwuVzDJrDLkXNYPFeVLtttB18JkFBv7vYhpNeA6RLQDXFatN6gbCKqk782GjrdTq1td1uR",
  "key3": "GxSoErz2tng39gWsyLMA8KKsZTSMkt8c4gWdQ2udnhVHdN6ADLrVazAvAgfrg5FTue6rq241DebqSKttVU9Ftnw",
  "key4": "5GGJNmSBdXSg7qiTKn7d9uNsTGmxJ19xuVZ9i9GqGvjfbr9D5xB6Ge2HDZiofjbotu1zcccWzYmwwUGHVamkWRMx",
  "key5": "5AwbWQFRkzsxVu3sVAJRtBdGG42SAksBS51sULPFQJer1oQwYzzNHuBjmt9o1A23CyjhJjgbP8skof5Axd6wybDp",
  "key6": "2K47qotyA918gjovgSyxZnmEeTAkYoiHFUz9i6gC4zQHVePSfq9MsUQ97ytGTTDgmh7SgbqB33c4C7FCUStmP8cc",
  "key7": "45ex3cu19JQxw7LCnv6UmFdViiyzhSMijFc11f66gMBA72AJaKTTyNsqJP9uPejURMkY9eR9XpctiCxdowaa5mJk",
  "key8": "5Tazocz3sbcboavYJfjAdAFu1iqeHKzeGkhXvAzxzLVqLg3wDxBuWGEJ5cyW3Xr9MW368qztTvFx1JrNe4UTmRDJ",
  "key9": "4ZY3HiJtx9wfgx9Q5mxQ4CBEo1VTScjieVx1Yfrxci6DiRqWvEvnzvgh584bKCi4QMzWaYGSZN38yAvTXEQ9jcVH",
  "key10": "2fT2g8ipgPwPtqjG4PeDYJF6ya5Ym5NhrJmRDhp1NWvCZRWrXVusBJcHsoFGv5QBcsNaWCmKPtCCkJWaWYZUdSfp",
  "key11": "2tHfpr4GQ8fSeqG1bTfRgMjbVQicjRrPfEc9KqmLsC8xyJKxAJsrRwgRyZqThJbzrdiyBLCPsbc4f62uGnFPaSkD",
  "key12": "5KieCSaHfgRA1CVNqFX2WRuJRq7LhWJ2TLhN143CfmtnW9KrZwy3sC3DafQx4bf6dnNk86GwWJsLg5bUi9G7RNQA",
  "key13": "3meeGutE44i7nbwQbF5ay1d2dYBbGjoQtpvwdbWRnrj5LCWaAGB12FzL7Ch9xSdqAU5s8hjVYWSsUKBBS5aRUy76",
  "key14": "KYrHs6Lt2Ys6dXsLQpX31jqGGbXgS2KZpt1fwqYk5U6qJLbDpwDaepfGjzzLZpNGea4Xw9sv6AzTQErQuS14P6g",
  "key15": "2bEbujWcaMqHKsTc2CCapHKajKZ3rhm5igTUYvfNjxC6uGoMHfYn9fLP7z8vZWGdexTCGVcJQwC5Qdp7rizBYPqM",
  "key16": "2hdSEbCuHzgLVZcr5sZhJdwiR5HBevjfetaS5cmqnhBc9mSxtCTgtxF9yKoaAiEjJrfgQrs3qyLLE8mhwXKDwLnw",
  "key17": "4NU5Ka3EXhWS17mWEKaqPH7DWPR2zpWwVV3QUtENExVtD2beH6JcddzJh8vawLGWdrsjWZE86fU34EG8fA6CSKev",
  "key18": "4rEpaP9UtTkSC4xVYaTxp7khcSyMk5vYd8H1GuoxeuSPoBqce3JTWYuWnBh8FcYiX3w1J7aEcoC8ZWYwgVkEXxj2",
  "key19": "4W7nKACyLAfZJxjGHgAiKuDT5xUb7tLYwbvViWjC3G5HZRQ5fa8An27mqKdBzQK7otj1ELPQX76tqPN7Hu2vJFUQ",
  "key20": "49fUJajp72kMF9kwfkR6YLPn4Hf9mdgJzRMT5q4FqL6LgPxib7VFH3M9UauPpdT4SbvFTfPx2SHdGHLtyLP6EB8",
  "key21": "63RjYBvaiVesMH3sfmHrUb4BfT987mUoFMQwFBYj6H5M9832smf2q44WM2mR62teVtVPsXBAhVwW9YwQQbLqpSM1",
  "key22": "TWPevSTXACePYrrvh2qUzBWy1GmdMVKv6frcKyhfcCmXP7JCi8sZvm25ecNR7fLzdyNPRM7YzjLPVLhryLkY3id",
  "key23": "3wq1LCu5dQYTFEXo8AtgUxgFZ13TybNFgTNk1rJcwqmkKTgqSvikMEqWBHKdwX8qZtQfFi4bPZjypy16kGs7Rg3g",
  "key24": "5aB5FLdsckTPyECzBmyAwAtJi2b15PDzRC75r9tJK5u4HN8zAE3PpwzmFb1kxoQgWaDSMvf4dC28dpXPzto6snZR",
  "key25": "4Pa81rKeYMtcszgNdhDTB63CvKQrqMRk253apQT6TDyYSUu3LdMFju9QSDNNWYbqJMgRnW6icPcScaxgrdzdfpFT",
  "key26": "41zaXXwuHM1Xz4o7tyWXxuXXyJ1gELf4Buksk86hXT9S69GLGZzkuiyhts3Esu1QyiFQpr5M84UAxxcsDoJxwhWQ",
  "key27": "ZCBz1VJP44BHYJftxv1xSz9trZAUqzCtiNPGryNxB1P9MDBH1qPBkr9TsK3oA1tbmCxYoZCrp4EYQDUHFcxbWzk",
  "key28": "hV6ioqriui2pjNNdFtVxkJe1E2zrWReDzgRnw3Afi2F1WDwPiybkuP69riZDVcSyNUTZgroAecLEgcqZRaGxEyk",
  "key29": "5RuYudzwTHHVXqbjHMM8qyQVLLH8fszhyQhqUaD73DCSmjy8Z7SC8YHkLUcLQz1myBRQDJhGYKX683LNKfxfX2Qg",
  "key30": "2GKp4M3w7VrgSrfTtgAySymA9uKU3yaxyHv87Qp6sFiaJAsd1feArBD2gX7MxkujAnowPFLXfaxUDiAeXk9m3VNJ",
  "key31": "yqePd4vHxNBgXRJk63op17BSHKzkvKHw4P9hiptidFhcxWwqf1NGvFgNhoQQ1E9AKVbL72EE6YYEEyy44ax3GoJ",
  "key32": "2DEKe8vYXtEyaq7HpcFtPQsQWZh3zsjbPwgUzpUrmtHTgHpjbtnPobGYwSGdtwuQsZjnJ3kDhK3WsHW1sGmNpVQi"
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
