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
    "dzFVKJPj1g8LTWnVhZjt6x6hAXYrCeFcU8fjXAwLjPGsS8KmjQytgyfPrzoudTQCV3Wc8g2za3EjAjHeZijVnuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hL1cBBWdtfrcHs5vDFgGiSBxjgSjCzUzKVcRGXbXsxaGGY26hK6MVa49K1N6zfUQ6QxGNb7515hx76GLPCkfRzt",
  "key1": "5yLMS5FZ1r4WmsTkFJPUeKC2Y4Bz8yCxizePz5nPSvCWUFLS9oJE2uomdx4KWge1cXn6YGFr9BN9cCTnM12LNBqg",
  "key2": "3p1SWvKqjcZozjNPdTtrV7Pa8yfVxKbPhifFsLjqj2WhFC54F9ZAN6GGDKLcx3SKYZ2vtBz3fnEzY3QNpE9ovLr2",
  "key3": "7fvRPxZTBL8JKGNgqNjYXQHVxkKNdKqM6rdS6XXmw3qvDqQyzV4JgzrgnvokGUagGNzxxRHj4XF9H8D8d9ksrzE",
  "key4": "64T8RunX1wvMJFT8GAt73doUasvytYA3YZnCDwRPtTrv74L59ao6YkyCBvQykPDYgqQCXdNvj6ACoFzvTdbPPtbv",
  "key5": "4nNADoGrVCv3HozoRQ1ahkdvWUCbM4eHt5wmt3LLab28vsc29a3LGuGBTZApEuwAPC8qpHMcJJAPAHxxgxccwN1n",
  "key6": "LMKHDn3izrprGqYeJ6Z9YrVqgiPnUbsKMff2s63foWvk45BPWKqvLCzwVCfY8Wh3uAhLHFhJQgff4ffiEEjGN7i",
  "key7": "5WNC68pswcGZj9FPFpTPSBGASGLXAD2N8fTnXtcCo7E8Ps9ngkt6BqmUAVmYX9AZziPqwHNmB2TAheZ4eDYNK6oY",
  "key8": "5cF4TEpwG3UudiCQDjwJacWKFvmcnufvsWaMJN4jq8JaCaTdCD88cqgXJMHbbxR5nJXb4BGG724Mqa1t7T1hxNgK",
  "key9": "4AbJhDKWQ35JeZ2ELJU99AQpjBycUyrbdyM7dwtZPJxvNrSZBDSmBgBfaucLS2xpEaNoqx1tMsveAqxp8FitWq7A",
  "key10": "3BmgubLtWjK7J2cHcq5UABz7XYgzcHXTugz1dUy138ALHAUFQi1HtCdhqXG7eiT8hp1ciSYusEcvf67VMVZodnrc",
  "key11": "2QRe9fJNbNuNUc1qwVMeySZcuj2Qg8hFArBdksrVZB7bHo1SmSc11BeFa6w1nxGxZ3adxMKnzzyty8Dfk6iJZNoj",
  "key12": "t1kzehic1EKyqfdeDaQykczLoyDkLELS7zAxpC9vmdfyjXY95r3DVCb3UN2t3aYXZ4WSfEjEszgZ5zCkEoAbgE5",
  "key13": "549awAswTtMzv8sMibZ8K1BCEpnjPJyoSzqCSPhs5YZ2gmTZXZ8FrivUvbmY6XK5GsxKNnJWT7wqUyAtHkDqHto9",
  "key14": "65p2BX8XmMhduDpi6PJiKhmP88Utx5DL55LMN9awuk25SAhAAswP1rmEfNpHXN5C2MQ3h19ax6T6dCyhafq9qbQz",
  "key15": "66qNYZYNBNrRBfAgB2h1QzFSWH4DLqxV8HycY9jDyYmmk7qppANdYk9d8YzC1zbuh73UXnNJ5pSGVhEeBqc69iHv",
  "key16": "5cugtxsqmJS7Cv1tcThRgChNtYM2aYbVWA6qdswp2oqYUhMscYbA47sr31T28PunkZqhkWvv2rUiyX7xoPCtcFdD",
  "key17": "5R3Hc1KF6XNd4zwihoVWkC8ApnxZiuQ3WGzJU71y27JWkK2CwtiSVtCEWH7g9fpRbmTXSChZCm2X5Epjk17fxXXB",
  "key18": "4PtXm73HAuS31o5qhL6pLwTF7tfJigiQxxmCaWKP23znLu47quSYf9r4AoSoz9jUe5GWFV9Gous3GccFZgsLms4k",
  "key19": "2aGk54vLi7BLGCSSi8ERCBp6v2FFLCiXWenYPuK4D7dKMcLcBooMVT6so6x12H1DgNhVYyhiui3koMDRz2Yc8vzC",
  "key20": "ugZVGWb1iGC9FmvdjS3rsJoYqP9tvxxTULE8jFre44Td2pYgZiBKJfquyzxXgdgtEWeruVEUpc4HAkmzgvQPqtE",
  "key21": "22XuEPKyhWdxBSvNeFTWLqB5pjojJH5kft7qhA6PmmxiKJojaY4xSRwqpdDaujerueuCVBtjnvSL1FgX7Rc4pMsh",
  "key22": "4DXkQAkcyyMU98kdk2VNPTN65673UxP9Pibv31ozUVJcHSB4pTGCxhrMAFRCufT4GmwjnTmo8FF5dwA57ALgHr55",
  "key23": "3bztCNpqqGbeC5htvNTspKX7uTjsdkSJe6RAC48wzcCTVH4wkq4SoZUbFZRojxWF3wMQNG21rzkAT9eUNf1gZ1zC",
  "key24": "b8P8o4xWubDFkvr912JNW9LbuQW3WSaAb6RPPxoyu47QsFM7xAdbrJLQPz9KQpHArXydvp4e8U3nyVLAMtgnJ6d",
  "key25": "5pV4oMo7SKaz12MZMYRJEAqeWVJgv2abJ89Sxpk1DttwxRV9MSGqriKrWnBM6VVRLbgmxJPW5kKtHYKtd9NVNNYj",
  "key26": "3Q6uC6nmxj7LmpJax52cXudqd2MkdFcz7LrxV36Quui7CXpAKyRAzPUdB5vTfgaFxjyixFf93rTyhx9Y6mmgQmb9",
  "key27": "3F4XVa5agrT1kHRjqB67LpZHGCkWNcp2NDJqtM5Q98o5EDwxFHGwTzgPDsFZXFKj9ZkKSsXcaR7efpiQ956WERmx",
  "key28": "5rV2YZjt5Kcap8K3Db2YS1632ZV9bjKFphWLz1RV92VeYJ4xLPzo5sV9CxjqX6hjZTXTwgodYJ4nrq2dnhh14VsY",
  "key29": "2fYMzVfVxG9sL32M3nfJm1ZBw7AU7mS3ANhCnAfhYCwLrXGqxR9H9V9KxxfK6j7HV6JxVf8tuVoaqVjfgHg1RcV9",
  "key30": "4QjXUouoEdF1PSFW8ozG4CLBC5fggAdhPyhHYyoZFPqS63yrWTMfWU9HQ3KkMrfW6NXen7gMTVb4vBvq7LCRobg",
  "key31": "Nq4dTtzYcYsp1t6uTdFFEiGsFxd6EgnMR7jrcVjWHn87HERV67QANoXL8sHmX1svmLDZVucSNLMsfdwjoPH2yNV",
  "key32": "2b7qHqBP6e4K1YAfXf7QmjbmKfymRpmNjUHEYMWUESDVozvpFk5DiCkCVXAZMLxArpCYvw7JTkyBzs3AkBgzACon",
  "key33": "UNxRtD7BR56ayv6M3b65yirnUq7tbx8iPCZDcaX59yvDFfQf7x1dT1m8eNmgCXX1bBhf5LEqAx5rAwuNcZu6eJt"
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
