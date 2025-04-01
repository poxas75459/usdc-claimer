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
    "5grRjdWEApSzziyWNqoHHRn2yUje4BrorNzGSddhbUuV7wgxGfKpdUJaukYuq3x9CH9AgLihFWGwV8xinUYZz3sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9Ag7nSR6WbSA4SjY8z6jgkMk8xNJBBd1FmQieoN2pHi1zNxrNnjZHGqPPkhEiv93peze3TupvHcYNRrc1k6JwF",
  "key1": "5d7xwCLUBqfydzHFeBhpC25tkcAWHCQD1JfB2Jco5cFoSAQKmAMNFdjY3qg1bDVQshjtrvPnqkno39cStrVxBa6H",
  "key2": "5ubCDMuZAYkfNkqALWyk8ax9qtPB2o9uVL7oY3e5Gyyn1z2y5252BKv7upSGTMiVx44ovmexFFR4PbfAZ6KShcSL",
  "key3": "gLL5eBGDnY7aquhxXPSXZR4dNbz3iWfcWN1CspsTYBN3aJCALRtF7rafXfVLQmgacYzrjwiFs6EqMpkUBV4EeAS",
  "key4": "YypUHq1JddnNFkQT5yHpYXtUrSx83zpFYyZGTLZmQPWfF4W2ZXwiPbPQYioy7z7FHctGdyVtbsxewBaMDnCmqEF",
  "key5": "3wmMC1GTTCiMXRrzJgzzpmBRhZ7JmCAsjnz9phDYUFoZFtBW8r5qgi3AiEKn2Tm7wQ8te4fkRFiPbpVG433F96Ku",
  "key6": "2dt7wkVC8LzjCTpZpsePBmBgyXbYLzah5NgFTSXoKnMYwpT9b5MykcwW7rP5SPGoU6YoSL3DSQdRktYjcGRooYLG",
  "key7": "2m1tNyMXTtfR9zkv5ZbzAgEMpDmwinNz4nJvEzqBFYKy8vZzfik5jWHBJXu5yQA37D1LGYtYixX1FPTYpjoqWq4F",
  "key8": "2mhToCWTVJr6wXE5U6zBBc2bqVv7RFsRQRftveDL2rteBxaAvLhf3SbVa792firngfvSKin2szxb3qxdJ7wDxPa2",
  "key9": "3KzCVDeG3TVm5HYjJp23KU2bbnaztsCZBVvjz9xM3VVt18NAWH4MHuboA9TF3b5TVUK4M9hYkxoRsCTJFUVScUhV",
  "key10": "k98ACBQNJtMUkAcNvM9uJGaucvDzSjraHH8NnsHYrtetCCdbBue5CSZZ2JFD4hyBiUGjidanuCXtR7KsRM45ZHD",
  "key11": "3i7aNSvxzEkAgtAsZE2aAtTHsYMVwbLSN1BxFB1E9bSrUWg2sKS83eymSPuJe2RannNxkkgFhZ3GJ3HeEVDZwv6p",
  "key12": "23UAbrDmCzx2nR7MxqX9jSR41Tbu2VxMbuBHaRQ77ZNLxsBcdcMCCAJfuAG5pq3Nx68egXMjKQ2ogzgeNKXkix8K",
  "key13": "3ZS1ZRMjGQVPuEKYN75qGjFMXyD2vNLm5Ebu7baYLdqZx6uZwsZzB6vxWZVwhwSzYc2t7AEh9xLiyiY93To3ppj6",
  "key14": "2ixzKeupvMLyr53snGSiW3vmn9FABTFARxPjyoxhpqNSwNQvcrYZUviR2UTec2qUbbFioej13K58FWE8u6HYhwhc",
  "key15": "2ca9keG4m56f1zJfGbNAHzQ3HfMyrCsNnkHEJ27by2ggTdMf8hbuUsYy8N3hYZMz34eiX8mgEXzLf2RXNCVS5z9c",
  "key16": "57d5fbXAhLWoHgv7F2QAjjs2XA1hszr6uaSYto75UbSQM7msZk1iCUZrLp55r7hcT3DJWWFnEGwj46q81e26GM4X",
  "key17": "2j4CNsXe2TsG39AA3q6xkcwt7sKkfSo2gtKAbkfNpLtC3XbQCKnRH5XP9TfVdZXDXfz4USLTTYvJAmaoVkuo8K2t",
  "key18": "5P4FUvoAiMarF1CH5P7do8hKaFHxcrv6vPg7NVAtL18RHVCjQWd39RCv6VYQg6tEKatRZXqoAnnNaXFADWwvUQon",
  "key19": "4JbHmbQEPMVdLSqZ2PSxXqrdYZgxBC7DYRsMDRgJttVUhMy2psohGWJx72ZPakahx964cFkcR7Cob5WzRTvzn8EA",
  "key20": "4EiEaXKqWgzTGZDxtpY9bHAzSuWgDAUKaXp4R3ZrNQbTFVzJbBHA2WJPszQk62qPJzMNcmYTjG58dPo2VWSSCAyN",
  "key21": "5p8JEFMX3JEt3FvPPjnX7BQc8grwYj3xT6QzsyehvXvpLmyUEKZj76nxWZLY2FSkSWoAuEUva3RfyaHVyQA3pjHx",
  "key22": "5QBJBy3k7G92gPrHRH8didTgkXzLYWCmemZFCZPuYoeNzDXh3DVbEM6yCJEKgP5XUb7vTsMgQRGGXcZRBLVBg7XU",
  "key23": "3bTxVmHqTkEPr3SzKctUi5cZ7eiemP4NdtQFvgZL4WtY9eu9dzE675aprxH23RuUR7UDavfqxfTuQXXNKAeeuaDe",
  "key24": "519t6qsKnME1Ce6dvF4MnPeLwgBsAw2DEAbyAYzfG5sgFcs2TZ4vbfZZcv6pxJEez16WMTA6QZk2vMdRgBhpEMxM",
  "key25": "38JVMjAhXkK5UXgwSEADD1fCWEPCDneYL8HyVR4xy3i6qJQV34QXu5of1hq77YLhrhZCNnSv5Uy54xEDsmKRE2pK",
  "key26": "WhfnxFJnGugeGgXtZ9eaWZCTXAUBAm3q1fCmhd137vnK4zTkE3FjDmKYP3jHNyiVicTMLcWAGC7oUKKA24nw9Tt",
  "key27": "CUiymWxNCd2EtAwyEviZqVub1Z1xGV1Pb4nY2YCGr5yUCSJBtyjYwxBjwr8kRt6x3DdkH2a57UxV1577ziHXb2P"
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
