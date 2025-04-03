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
    "2M6kRfrhd7UHEiivxb2a91UFtaqGqpVJckb22kxxUv3k7qmVbnhHdZ5j5AqrhfwYuWdnGyRyUKHJCJxmUqtjJtMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PaNxUMQL8BzZ6ifKKJA8fdjXF923PiKHSzdVuPU7PxY14aPhG2VY9Bn9hncDBjyHKjHe6AGwHuYsa2DtvZxHov",
  "key1": "37zohSZ449D9VWByDeXFAdAcv873jFK4tt5iLFWb2SjUkPdWKwhJ1KniUSXLaegvmmipLuPXsvV3ZkCrgMx7xuTB",
  "key2": "3cT61dP5tQaYQjacBV7jCJrTJJt5R5ufNt8Yw5V7e9HzHW8i6GxBmjnCdHYobBAhmoHqQ7xku1xwYd7vmNGmLri3",
  "key3": "ygXKWvj3rGCRYkypmt7BeAfhSd7NQBaU64u5rybB4cMYsYfRCyJQsngqVaWKTQtMUiD46fyAjxwQzCB1XkY3MQy",
  "key4": "3LQkDMyX76sRyFoRcPQwe4KHsaRynY3CCe3USQk2DJJ2VWnAf6YAiVCLrAym81edTJqTopC3m4AwkvMypbPpdCvJ",
  "key5": "4wMwNU5Bu4DxqHFEcEoGHN7bRJLUpKsN2TotdD1aWNPWStWgq6DFECEdXt9haoYwwNwtbesXnVXbR6ZD2jNqzjMb",
  "key6": "5vFTQ9NURyJpnCusp49vonQo499RwKv6oihEa5LKQQcC7s8fsBCUd9jsbF4FGwZVSG21sQ7CTiku4ZJEt5a9EDWS",
  "key7": "53MGaFTgh3uSH5FLZWxju3AkPzGSmR7W17B1BZK7VCSFCmfpivSptLfyHswrZep3h2HGC9LNtGRX2rqV4BxKMyPZ",
  "key8": "62YBrbLWAJTDJw9eUGK9ew68HQ2JdBwayhAtTYQgQMAKvAp8sbPZHfakHvgjuWw5wTtkQXFnrPgcMyvMWerqf3jS",
  "key9": "2etZuaQ2aYtV5zn2qncpaq16qX7sN6pua1VC4kUJwT1zgN1cJW8Ywg53RUb7x6dpHSpeug5LU996iTQpvjJtJpHJ",
  "key10": "61S7TBSFs8apQddR7aEtbhHsPTWb8MhxBvhE1FCYRsEMtneYJ8WQStxRZyAAzwhB885PEuHz6qKqqGtQ9quyzUUr",
  "key11": "4o6iKKKwJwXWEyKVwLvM5Qwnkq4a5KMKUW9kN3uJCofmbYHU3g63f3VHxHXY8APkseEy6WA4VGU5Veq5WmFKr2KG",
  "key12": "5VnbNCSy4kd5dufYGmaB76Q4XxktfybSFJ3sKuRMWdkfzBgo1GDWdybHWnFQSsgSsV9dkfCPDhJD5dfAVruDSE94",
  "key13": "exNk3nzuGhnioi27DTFbB6HmCrtHQywufnRttaFaDdBmXsveGbYobfphbKcbL9UFSF2EcdM2GRhR8YYqcpuhzJF",
  "key14": "3krwT1mZU272BByMhRfmMfFLnJP8TURxRtaNDnmcEaF88uHJu4JJiB4kaXc8ZcRcXF7EsHu85xiheymstBMVF5NX",
  "key15": "orJBtjERj6MMPwPHKV8ck9NZkcieT367kZT6JT7VVnvhqRQpkuhZN1PDJFmzJHXZEV1Dru1RRkc93GVieNb92BY",
  "key16": "2VAkRByVT1mATfK1A9uovtpGYrCtvMqBQbuvCX2QixWxsjRzHpsvW9AhHdE5Pscs9GBHSEsC1NFkKMEjeebTqtLY",
  "key17": "2E4X9RT1GyJHWTFFccTEXhtMNFWekwpDy8ejP6f3ZjSezJ9LBfostZ31qrGWZ8tMroB4exfNTihZ6A5sTUfJi3XV",
  "key18": "2jqRyY8Nw44jzpde85NScSKt8AZakSKYkkRT8HhXH54ooSpWjM2G5VaVWNm1wJyWLdJHUmTSeYop8oLY4Dpq19Gs",
  "key19": "4bayYhcmLZnN7acns8hzMNUu8CxtcrinmHCPxgPtp4jvZNTXS5pXgDs2upCBenfh92LJ4bQ2vyAYdSTFDVkyp7wY",
  "key20": "2btSLeZA21Du5uCqtJhfpFH9e4HaHx3TcELoG17MgGVUqW5YtxrkDc2WHLGrgRYoGqTQ6tQvfyGLay8Vm9eZAH7h",
  "key21": "dmSz8uNEwzrCxeViYKtqs5KpffwDYmcNwprWZrwqA1k7FovMJmSmWygTf1wCJEuMcKotDdwPArRVeu381Qo7YTR",
  "key22": "2qRn4CWenfkXPag59cuFFgyhpSii7H2ZFF5QKxcQuwFaNQD9H1tGf75hDFzVHQDbyiJ4k38L8pnDna3UFJPok1Hi",
  "key23": "5fmFv1kLgb2cxj9cXJvUJL2jiF3URqXfkRbs8PgERbauUKDcjxmqeGsvPEiGJvuooS8nFhyUFxvbbpgeZBj3ygKj",
  "key24": "U4thXxhNJ7oFZG8WWUQWVqcYXUojhGZ5KPswkUPMwg4HyLHjt1tJFPmZQ17WDnAvNRxBgymkdXciYXmKL1JUZ3X",
  "key25": "51KV1ikcwFdhaQnvAMaeAhZcydxQ4oiNzwKWZjdvbZNyh5vsqqK5t5TUwsx4rsMujP5DAJ9BqKZRnenrvkvPvaoP",
  "key26": "4nmwRz9ys2fw9d1dDeNjTKB5PS2Geo3azpBzT1jWgBmQRVeTZHGsNGMyd1TU8F7BaBA5mcQuGE68vQeDvmyvXSxw",
  "key27": "ZwjhwNimaxSjrWaYfzCbaUCmcXL267Tv7jCPvszJuAmzXyaCai2vS7gLqZFxEB7PLDmUNGbTsbzhCdVcjn9M36q",
  "key28": "2GVMVapp5QVkjJ29hvP7fqySMQrEAkJA5iJELHPTxtYpR78kL9YQBydi8KLBsyZj7qxNB6k5eZSqUiJXAN6WmA2v",
  "key29": "2a72VXjzd2eXDtRN47Ec7X495nmUfVJMxae3cRw13EZnMcsqgR7MLdVAXC2HWcWR8rTC2igVNuKb3W8GjXoVbkrY",
  "key30": "4BVkQyoGNkRWuRQP7fMbi1k4zFPxA7Fjsg2oMnetPUTPBqcmGoNYu2vDPazGqGcAcU1s7Lvxvk5a1521exPES6Uu",
  "key31": "fT8gfEtbKpBXGBChZF2nMaBkr1CjFX3dD18sNoGXNyBq6eoP7v7rSiva6wjgmWEi3hcqUSY7yxjRzPQZUurrz7v"
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
