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
    "55dEBBiQ3RnEQPG1XA8H5ASmfo2N5rQhYe3oj4NGrA239tK4VKmSkGCL8qoBXPTnC3cX9AENgTYLdeW9ttgPmG2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2w24PurScoBnrEU45GJuCPqTxasdGpE2Zv5QVbu11D5M7swAnxAqWVu5oDpooUsp7GtpXuWr6LawtwxxHH3s6t",
  "key1": "42hZJnropP6waqhduJzqAyJigh63a6kXvENF8ZqbgZ8F5LKt3Rb6fcvSu1RUeEWmDRhEcn7PxLHj8FKVyEVS7Vp7",
  "key2": "2toGm8icpCnPS6YCEtWz7aRSt6mS2ULbXUFHWYB9B4ZSEzfYb4ArQhyVUVMXnhzsMzNzixRi3r4hfuM8gkhos8Kv",
  "key3": "5cfDSUu5oXSz1desfYzATwNhHXpNp4FYitHVpGeoqBgNSCHnFGY2iugBmFhcwF6KRDGDjTqgdLpEMDoQTLhWDFVx",
  "key4": "26PKxpRMHm5woZSnqqDAsdvdeJNhZtPfgsRcGQGUx24sbZk34hadjQoLfQu3yjvtzXqEBHEG82PrkF8ctx88psuY",
  "key5": "2cz5Fvmqf46iiKvW9SXoF2bfyVBsm5oKCowMdDBBhK5xFNf42mbpzAMoGYUtamdnGyP6khAh63TxNbb5tKmSfYQp",
  "key6": "4BVBvdF3wvewzcwErhdr446fbcoMFaAYnsGRpy5XZK4C6owTDEd7qnTuPQG9vq6zdqCBUa3R9Hn3kG4dXh8dL2TD",
  "key7": "7QG8Y6gqhu1FREgfBREZxCDNUDEimY8T9ABUc7dbBFMQi3cHTKjrAPDAHxHK1yLgkVVKLjeHuMgc8VPaFq8eoAG",
  "key8": "AWYA42KshvTRWihfK84WEGfWjZ7QWrM835DTpRFcjoDF4Sj37xnmUD6cp1xQJzoYmy9s2L6D2P16oDzCbSnTk3M",
  "key9": "4aEiGzFebP7kcXSWFLUWLGNbu4gbWBfnSLnvE4Mnk9ueTqkVJdQHJt2zHVjpTVjNM2VPkRqEFShLy9TmDXdpyGJ1",
  "key10": "2J8u8WGuQJKkAdxB8EtafTg67UyH3CYyv6SdDE79hMeccHvBD8BMpFJB8U9bEhsm982X5q8vnpjGYCqVQ6sj9qs9",
  "key11": "37SxqeFg88289U7WZCpkYh9yLXZjd43xKVMnzhGWfce4UNwjxE5MXVSwTP69UANYmT4Ua6E4dWPKKLcG5G3JgUHd",
  "key12": "4iU3zRaTZcQEzc3syAkoZJgZzRpV2hPXxwuxn2RvA9X4rZqnaMgypiiisByWDLAcgi9HnzixzGVQXvMfTccNBGWB",
  "key13": "3KHG87SDXrG78oYeehci4hPAD1dfFN2LgYiPurVoksFL2aVPG8gQWmDUmGzKSihGig99skox3s8yxQLvQQrPQVUd",
  "key14": "2meBeYA5WKDw84G1LjrETNS1PKeDZ3KNQWWyn95He6Jbfyuh2Ev9LA7nhtSdAT3UtVZtWfKZUxeVkNZsBtm9JiHz",
  "key15": "2oKt5wwA1CV5C8oHNCiq8MqKuNCCED6BGG9uwNJwWY181LLJxTmnbN81nW8iufYjwpn2njfbA4cb8gbJca7zchiH",
  "key16": "2Gpoxeysi2xAui8QnXN4Q5iPenKqnwG5CNhpmyjnXZirKC5ZrbhD7ruUcxykz8kwCf3jvCyGBxrGZFLMNHwgK1uu",
  "key17": "445D6kqEKgUvFXMVLioUkp6FAaVmt29q9aZLaRxXdBq7eLY3YrNQcFH3UVfCkjkS58AiUKzZxNUfoivT9QUmRNiB",
  "key18": "5BXPBQZfXXdivTEX7MGYLcWcT6K9SY3J3ozDcKt1NFHGw2L8cYHRiQFGt4RGwZz29cFBwBZ8Ae1R93NC9R5NnqJU",
  "key19": "54JBGSUYovHzQd8zMJGBqgWFKz5kNGaNkqJySqVhsJooSSFUgYmVahgiySPtU4suZdrSExey42Q9AYAW8bVd61Bs",
  "key20": "vH9SgGXt9tncX43znox5vevuVaHrYGMp1SBhHb2LKGY3kBKvA7GsFDoDAiSv4VWX4Vd7K15e1Hj5VQUmcy49vVD",
  "key21": "4NbbN57n3vPMDnpWZvqkwoXPRa1tDoLtKT6Dx6eAuNiA47CwRJQFfEL91ANKBKCD7fNzfdA9sXynMnARS8N3UBmu",
  "key22": "2V2y4f86PwKwzbccmFLqwKH5fnhPX3cmp5bcY6jV3MkiTqh5Swch8496D1tNzf1cjsDCxPn7tTiU5wFvCmLYdbvB",
  "key23": "3FHap9WkvjkTnEmQMBkt8XYsJgkSVwWLFJEoCnAZ9EvjAASbbp5bjw2Wpk95g1vVysGX8ABvfKvEpAfYPvX48m5p",
  "key24": "4wpAbMJr11aKhsb2PcuaE6WSCUCCum6GKrLgyZsP8n24Jh3Zk6iRpTFmEUN3gFGfWPW5W2iU9mBFEe89UjD9vc6o",
  "key25": "5EPqvSRBDBE3ahUdbHpQkThqrBERhnLMfmxaWgxwBP2dSCsMXJbVtmYJa3SeSXY5R3xvqxoMBhA5L9v5Tt6N5MAE",
  "key26": "jQAMGBLXZ2cYkDeWHN6R5qD4vongZN6dhDuXzkeG6YzgXJhHmQuxX4hn7CmuHGhxxxA9ZTe1EvH6zq1ayurqTbU",
  "key27": "2fsDcrm4uEeiiVUiqoFRvpyymAuX2vmr3vUE2SRX9bfu7UQGkqs1DErP3hZJUTKpFrJCXeGaDJeWmLozM9oRsxgh",
  "key28": "5Qi67asbpEbpQYP6VacwDm9xVLGKk1McdBPWv22eFB32P5DEW64jPo22d4korT29fHv379P8Ayqpp8xyTBopc15b",
  "key29": "2vnKhiFns7WuyrxP9dsSuNJ5yZs8qzQg3jcMXKnJqhdBYtZUSouwVdtZEEzBtR2vN6WW12m37qag5TouUi5MpEQz",
  "key30": "2Cc71DMjkRYmNVSBqCvfhczqQZAVNr4kqx7jn6KWVD3a43MKWcztT3rEVZ4cWptTTqK8SAPXFBGZdQSx9GEHfoiN",
  "key31": "2AzfDvunnjhzLyFaVf6Pf17mY37S9pCB36KRPdPheXtSLj3DmxAhWopF1JX4AFgjwnTzwdPHG5mgj9g8Pregq4Wy",
  "key32": "2PxGHRQ8xdtkVLvjKUtrqvnv6u9eQE4vG13otFXjWiqG4hJ2iBqScMZjEqTM74c2ddXJf8wFzJ3S51UTaem2Whyg"
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
