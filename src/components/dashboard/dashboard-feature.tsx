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
    "2doXFHa37c3AvH7KaULPgXxWfT3mBsKr2jykDfW7vmjedq2zxvWB2UBygjrGMHY8gptpCmTy3Nnp7MWrvbm7Nn98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evdBrkyfhGb2nkJWimJTuUHAnfYxvsfyXcsZDD3M3saxtc762uiw1w92pA3QmiozWxwR4qftZ7cjfUt8RSLk4Rc",
  "key1": "LkhEeUihwAWUxiTbpbsjoqo3KtKCqLAUk4EtuQhYABq5taZMs9MUFNKpbg6uZTtjewgM8YmagHxWdg1tzmX4pfz",
  "key2": "5Spgv4XeAkA5reLzqEA2u3WB3kfxC3JMXU5DuzxWBcGSaGvzh2SUA5MPNGgrEmi7sFK4s8i2khKENA92VpYJrA4u",
  "key3": "4i3iYkwKNsurUHnWsWjgXebAD6a22gxKetJxKoVQBtiYWVcgiz7d89bexcr68qdZVL63SYdxnS6nBjTwg4Npv8Na",
  "key4": "4aL4qzbrGpf45v4TUt1Bzc2hsTCcU7KvvQzhcgsNAxq6nK5aNUum4N6TEhwmzDPmM6HoPvMe9EvVk1YuFMLRGkq1",
  "key5": "43S6iMQAQBn246ahWa3RVCek9KZTRrTdv4ccgQGBZHaUzQzDV6LC4NuvJBy2h6L2bKUbdtvw437AoSQeettZFmba",
  "key6": "4Rm6x6KagXLQdfqvzWXUVZVK5Kg4oqjwW7UkbQsBT1SEZzLLkSnfZBi9dqwhosLfuwVNSJPo8atSDone8Xg77sBP",
  "key7": "2LgPsPK4w4GZQpcbwXjYgPzhD62zXdhNLdzeRWwTjVW9frztdnsVrwxkn9FqKhvjf461gtpjr73Rg9cskv8oEbGt",
  "key8": "5VZMKb5v9rqLr3uxpC5r1vpZ7cdnY2TQS3CjmSCMYjNVWhQ86H5fzbX2WxmfRsuekKgegra9iCxmuJkj41zqB1dM",
  "key9": "3RvnmNNgGgbZQXvWEKbeC2mHvZPVhMkhhUE54v7PYqBqRX3P1xXKL42uxz4TV5ZwjqQbMgmxFHpzGLHHGD8WwWPG",
  "key10": "Pukqknefm25NikyBbREwTMRKnqjRhTuN1RNdRf8qHBs7pXnAFFU9rGAW32Ce4saJKzW1uj7zFPnhd22QaMMtSK3",
  "key11": "5Bp9WimaJbboeiRpGxz8gCap2xGEp2GpbmZTMTg1kS475Vn2UnzKUVRegz9ma27DP4VHnghYWBzBsvkxZnUJRqqD",
  "key12": "2LrkZoxgyHqPszGuKgobdaoWMpHJc2WZi2tyqNQyeWA5K9juLaTYrFQ1bjkGJyqtrxsitCFfz7zr77mkqc5UPn9E",
  "key13": "s3DX1ck1v1WaMbKGYWme3VKBVFNAr1vjbPkVAk6Z4coEswetkrCXQsXFnHJsZzqSmRqd8AERyNzjJXxKhePGyyS",
  "key14": "56htPhtdExVgrPoWsPkNchf9aKcz243sRd6gR9Z5ZGBKRCNsB6myCHoQevXy5d1ycuA1wPUJp1PuZQz6gbZvdyeB",
  "key15": "d64SLJeEY9eH5phgrwoXGrMLZuc7p4k2vF5tUYXPDWcfkHo8hE3QPBYCdywfWRq252F4tFCN92BBX3HDcDF1rvQ",
  "key16": "Xk2Fi2Gm8ekN66RfA3zHBjEMPpquaHf4MFeRPq14eCdJEqMShZxXVSFG2VHuP1xKwKbXCZNTw9si2djxihhgcRQ",
  "key17": "2GCaBtwTxDe6mdQKirAB4o3qn944pw8uYzXCxyo9cJL8xG97YtF6YPfa2Ympo2cyhyicFTHr9fBpwAeYMrXokTYj",
  "key18": "2btX4ruWeyQoa8tMqXUQ833DsLbqgbLZfnfrrsr26x3Gnppnow4phPT9uuXT4yHoEcjGvdXBr8rnmxwzKG1ddEtW",
  "key19": "3jDkQbTXwFCgcNMpQqNjBzFSyZMG3F2oSYiyJB2QguYMPTZoLvxAT8qDWV2da95bKAiBRaF6HnWHhBtiL77JC4qj",
  "key20": "gBKCf7QAu3oXJeisnEW5HtfKUTQT1qijUzN6rABQvNYcFq2mVbxS5nNd3wkSBsirhLvmwUzAtJf2hXqipK4LbBK",
  "key21": "64fbdvdzYfDkX3y3X8uSDdAA6uiLdXrVVzZM94zxLZAsC46ZNrGXdUREqwmM3RF8haKwADbzxdjVfZSggJdNTYyu",
  "key22": "3UuF1Jh5sH5fwG4AzgAxoSgZH1ufBqJVwyfyAUE2633tGxZgoY7rfwbJ7FkarFT6a3JMnTqAPC1kynRpni54St9g",
  "key23": "5gTiiTyn7QAMxAScPagkYGz4sbobgTGKwuJ4sNSUGgwWsTR9ngVoHrxDa2dekpW3o43QzQCnVYqttzifFArk8bhf",
  "key24": "cKmJjeGDUmujxt6WX373GWquGzaVh8SNXHn6CYSxhsxep2hp6oXtMT6ahuzKXa5yub4CJ5c9ugjon9h4AizsDvJ",
  "key25": "3LYTrgEF5ux5yR7trAhVC2euAAsHJG9E5M4M3H9vmnUXX5ERyH8tjcM5CKos6M3jjA57H5H2v7SLp6pM1qHWwcw",
  "key26": "ReYviW6gfLToVBT3kfApGRnhvN5Zi3GizmwFpdp5chKokAC3oAMN8EyQqcad9q67ShP7soX7qicV1WDbNcpbjhE",
  "key27": "3f9NqSh9uskXeNrh7hTU4ro5bDj3yyv5WrjpTNQhLh7e8ePee9wovSTRca34heBMCLaNgqrPJz7dNCeZGxTZbDZX",
  "key28": "2UKQahTDUxa6MkR8hKWAQGiLjoLV4EoRDLNy4JXwYBs5NTmvQxmLitwGkuSdumAMGsaCcj7dnD1vdcXdDuEsSPDW",
  "key29": "3Bxvsc9BJis98gAPh2JLDMiJFckyUFLJFJgdjkfni5v3LrEw2r1yTQgnsQm1FV5q62bSxeqNCNS7wbuGcfENhNGy"
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
