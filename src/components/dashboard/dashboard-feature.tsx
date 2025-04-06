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
    "3SbExrRGHF9otuaEvEUiRsgkTeqLuaPsVVz6QNy8dxSipUh45XzpgMbX9eYzx5o4mwugZL1BtxtQLFyYU9BmvToK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGz5gFaepaWrMh5k57oEopSDHZuQV8H3qip7foXRovHiPETKA1C9UGAGDBtiVg79ochk27mLd2buWRFoQ2tksAz",
  "key1": "3VUwHePaVShg2wMrZRtJXnwbNNbchw2JpRKeGctAo9kZ2wXRv9QAJpxLdManp5igeXSgnF9bJwT9SukgDXqwVwhc",
  "key2": "8yZB8MjGD4Keud9t21qt5mcj2axhYYn5iMJXGuH8bDqzHbhcX3WMAUN3LbCc1iwCJgrPvMxprrv4nYmdgpjaR56",
  "key3": "3AjKAo1SYJjsacVJLhfZZfEArAMM4xKv9NpKhDtSjX3dPBtRz49bvxzVxdoUY4iXsCJKBKqN8UJDZF4K5BncA1En",
  "key4": "3jThyF8BCmNP8L1xmZ9ZLg4asEGmhZLYwY4StHaqj8Ufb6gnRMW4HLi7SgBTZ6LuZnf6cxxVCkr8DUp28stWeyQE",
  "key5": "5P96NTxLAn88XSr2PXk1nraduzVraWcwWGXqqLpaJqPHxoDbtLWFVhuZ4wfHfus2eAB4sfEyMngY7RBSLShk793X",
  "key6": "yFtZ2vEQMkEe561FcuNL3ZHLJmX1LbQCLVLTFScuW9TiLUebFTTs5wsZFGybTCecNYYBKExJEewEN1pQbUX1XUH",
  "key7": "5hUpftrou5FhzKrj2wechf6XfbqGh8z1pVkBtgcQAEjYhw9THP9m27HkenJEHQoVurSA4BqkVX8qFZSVwxXqMEhD",
  "key8": "4MSWvL7J6Vf2vGDxrNJWFn8YAN2748ad6h8NNBW7oxSnFFD5ofNBo2Hjs8UScXA315n9YfJPksuJ8WrwhERDXLKb",
  "key9": "55uDqAVynmrUgXUmtD6e7wXEa35xdNKpNEqzYxHGPWJxJnYNUb3GPBvL163WsLbD7D4Q8A2nc8jK2NcsGFpNNLQm",
  "key10": "4hVKfPNUbNk5sjHxUE2x6TKXgz5srNHaEzDKKaxGJUKGSPeLdV2WzAtR5C12a4wKb1CnzJvY4Ss64Vr9aMWEt9XB",
  "key11": "5JVf1Ev7HcWxtCHkjGK25z6dswpHpNRof92LWo7FWWuitNHFkS1UBWtEMiVoNuRYTUKasFjv2hEgWKjNQjrouru5",
  "key12": "3hvumUm6tae7NFQ2JXDShrjaFXEWWaF6TBGMmgDzLmfrCdWJFmKieBGvie8HzXSQ95TQjH9K32R6GHkJCYLqens1",
  "key13": "39zuNtHg4m1EWxDoRcUFXD1ZrYZmNinDDQVx7VzhJ2ZrU7uRzDdiXTb2jfUCgNKGRs4SkLpbaD7zGNQy1MPZjZd",
  "key14": "2o48Akct9ikfkvYkgMKzbKrPbqX59wtav9jH7Qb4xgVTEUwTvpCqqxo6rhhhBRbbGMPGqnP82tFLwenXmmXDVvCD",
  "key15": "56w39NCB8VHiuCtp4ViDHGa5Bw5bnFqvedbrNFgqi6mhtqp1Uuz4ChhgDTpuvVaC9SQzmapbBMsNggAzahtovgfq",
  "key16": "5XondrcY4MZKsEfxxzXMFvAT5cz6mfYtDgPWi6SeHjADa56YE5xgqMM2eBvVwURpH182fJ74GtwsLEg6xhfun7XC",
  "key17": "2bEPdQVEATbwYgqRjmQeaQ3P2nDc8HksC29xz3sAcoR7kLMwCE4k64joerFq7YZPsJmAiL5Y4DSjWepuWTYzgm4M",
  "key18": "3hxRQkfQZy5Ty3Tsc4CFXiPZQ1T3K6euSN7BRnus42JTHet8vpL6QmdSGmKq3GSq9iDY2NuHpWB4eJwabkKZLKaK",
  "key19": "g6QAEhdj2UsamdJUh1Mn3yvq3oVQAG8iHn3mzZG6dcjgt99VdPsVgPYGoDEgz21Pac68Eb5rZUjMWzhpnSM6vQe",
  "key20": "57rC6RshtLcPRgJDdiHJ2GX49uqtwihXpfudS2Ss4fuHLui9aQH4G7V73JQ52mdzkBAjXV2fPkhg8Ms1cn1ftc9Y",
  "key21": "5z7br6RAjgPuSzaaKR2T8hUQ8vPAUCE67NewApkFu3SBMP5nxnBFM5Kq7d4hVCaNWQgFE6SDPPUKoxFuxmoMXvQt",
  "key22": "4JVKdpLd9jCArmxNKHvCXnXnU4nCzAZZh6XQJYMRLYTEPtVbnP8tyewkPftAMqxYceA56D7RKAKmuu3dL1Y8qPD5",
  "key23": "RE3NsXV75PWkvbcYCicBXj1MWKgBarTuseq7LQxtRrxaEqouAZBG1jJ7rKfHjtN4G8bFeGGhWW2ro31JzuWcQEa",
  "key24": "537hU4X8Nn73pdiejS64JQvWNh4jNKd1gKf4jEUZX2xApJVhzR5RVMDkeMJz3DAjVJzggiSSyYgSg5c6yWroRQDy",
  "key25": "61Q7hNQMFux53vSUtfsRKsPiBxnZdu2BH8vwYuCjTpQpoBdCzYV4qEKNu3obbVU6BcmN7DhCdNugMVSoydX1WEbW",
  "key26": "3ahKRWrsYQCnKxX6FNQrbKMwwk6dx1h62MXtFwCPeEPZVWae9yjbPvVagtCLtahPxMcB9m1bUhHbkppqphS5ijR6",
  "key27": "4sFU9dAFPHLTzzk8j5E9B7v535WjoV3CoLRNDZEN4sYL4EUvrt9GiWpCdY82FXYYtoNrFjTu81PiRqQYzw5n7AfW",
  "key28": "3guMNZRu82N6PWuBhroYU76WCuhHTdnNjoqsH9zYV5yKMtCjXJmWquPwnXWxrTMTnoYnc3TqNxmg36WtDLNnQuiN",
  "key29": "5USUNoNUNppK3VfpCnuembry8xrB6PhjGgU8HCjQtbbtuuSvfZpwrtfrcMjWmK6d7JNyaXvs7oYP383JJTXvKAKN",
  "key30": "E1xrNbt8fGewVzHS6oQMREapnVZq3RBWFZ7HCyn3D3iCE9nEFNEu3bVaUdoAxPEfYiYWrTUM5VRBNyf1e5Xp2si",
  "key31": "5dx4N9KVSp2mHKD2SYBuA7KHase4M2VRa43gBdxQAvvH55cRNd2AaBXqTfc912dRqYzawHaGEMk5q4snabJCRq19",
  "key32": "44WPYKzdr2o5Q6soNbWVfXXKU4UEDBmPnSXnaqZdcWAzfnGi2FQvwaPugzDRj7QhPBU7MWFGD2SdRmoacYR3C2VD",
  "key33": "2Q7ntmejJxWDsQVsUpnqcxStPhoTZe7AhiE3vWpbyRj6v4RCNoXXD32iMJjGeHyJyuvK2dxPmZ5oEGKEXYq4sGKN",
  "key34": "2Xy46f1Y2wCN46GMViMbNhqJbmgWQfBY1CaeVtUKHB2hQZekhwvHjMYyp1i3YVGATZZ8U2iGHS3SUgqbjv1vLbpX",
  "key35": "63y12tv3WBsARKE4dys1M3YeTqfDkEHPSWRWjHMAgJaKphLWzS4X92br46CweKCpPyrSiZ2uQRygGn4fvyLzdhJT",
  "key36": "2MtTjXp7zbL4tMfzpFo9wdxdy5Hy2iKPY4zr2XD67g2ZygqNYfZFoZAG8statENe8gToiSZQ9Yu2KdqZZDcnAHym"
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
