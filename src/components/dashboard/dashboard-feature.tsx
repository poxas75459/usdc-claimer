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
    "C9FVKzLCscpQWRhZTt3zt5WpK8GD54zXAW1KmoNKuZA76FKJEuh2jg7sEMtqLwERHSS1QBKfVMDafAdaPGz6rV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "go65VhGKFfVcbTgabiNP8ZBqEyb5yyWPouHtWZEwceRiAJUZjcMo7UmcmB3rjziPejGypq5cRd7qAtdzQyasuCv",
  "key1": "2MLb1GnmmPE7MipZmaFxBD6Fcgc6NJQm4kXz4cj3qXF4SpZxvhgBj2unXXLDMp6uFwyxrzA2jer2nMUpdCwJXAB6",
  "key2": "3iDxi7PwNNtsqXYAw3eFyU4nqzjFVNXpmp6tzTcAt43KYUp6aDAQK8Zu3inRLqDqw8DsN3wxdRmbzDXAc2EjjpFS",
  "key3": "4CHoazgLDRjq7xE6bzi32ZBSsFHDziQv3FZb7tZgHgqKLhdaeVt969y9rerYJHiPk6L4FiqsudhLTSpYd7jBbom3",
  "key4": "4cgZ4qjkCh8bduyz9UWMgYGGVB4z92NR5HEuHG4gJsXP4SUc2QaVvuXC3ZAbSNSKRnVtLze5u4WnoERkH9VTs33E",
  "key5": "39U8uYEQQ9kb5JeMopiiie7zSVwSCbYM8EGk56J3mCk186Bs6iQLy8jFjkmzMR5tTnRxsxX8HdFDc2dCF8zUpGUp",
  "key6": "3iHCNEDbNga44983myTYuzbQgu5yscVZGCypCHWrhuvFTAmES2kLes4E69sjZjzMAhmP3g1i7N93iFSKcSYVCpDk",
  "key7": "2vu7SpAXjuzmFfX5kUrvFBq6sUEzCtU554MR9PPPMbCwWUrPbAM5APZnbKE1pVnz5vat2jgR775y2GszY1BAjMP2",
  "key8": "2ZvwpYKEixjKVGtgfcX1DLxVn9nFszDKUcDGzhLkf6D5vFutEUL9Ttq5Ree2NUvRZoy4wDGfgUeATttLDyjCTyqN",
  "key9": "2Yjfxcovgbm7bnzhi2qkXjt6rJkor9uyY4rzeLeX9Qc74cSs88mnpKaXd9hCvtcN25kd9U8YV46YXHq1cFBWr6H9",
  "key10": "mkNuRpXZ5ytgmJRFDtfBoV2jf9PJLJRPwfUjGuQnaW3HfhHCW7gZd4jLGNSBepXDfVvrYqvoQSDo67v9LhHsEsf",
  "key11": "2ddtCas7NTY68RKDkMd1CNGhFATb35TXQbzxrQPQUe9ogD3CUzr37NbhuZYS7bPD4SuGUbWDnVUhbnfs4WAAqNgG",
  "key12": "bB2ND9DkaBJCvgdqzLRX4W43v7KnoqrXABtA7W3TRtYHPrAZLKZdjNS4yCBMrA9SqeD8DRgX8QyK4Zk4brRW8Z5",
  "key13": "5Y9d3CBBpvXBnZKwunDNDBfsUq78nfup3zvfoYGfugMFzS85SBDiYbe2DxK1CTowAR7bM48aVnCGvr8QnPZ7rLYc",
  "key14": "3oFxiouBhXpUwH5wPQtPCWJbuhU8eiHePuRnEibw8noHXSFxUtSWRChGbkJVCLEbWk5ZJ57ToaWqYsFh3ED96HKm",
  "key15": "FohDXugBd92h6gAat16jhiHhwFcfjHvcy2jChmnebjJrXSadKZNqQnEv5gFwGvdidaUZnMsqwQXD6TPhATXtV7o",
  "key16": "3GQoZQmLGZs7snW4NH8NCKm3sjNQtV345icdyc5G7LvSLdvxuKw3KBnj5GKDmsjTLnCiaQXRzLuep2nR4MSYS1v4",
  "key17": "4vJf89PoZ98SrGznMpx2TkAaZ84AXBwGt6gKiecE5Apadk4UtXmXRiJBc661gMJ7ZquQYxcwrtsDi2iFmAaqrGbN",
  "key18": "5doGindJbHh5XWzB2TfZ6w8CgwskzvofCt2yKKwHmeGBqcKkpqkSBoJK1X1YtNptRVY3dEeh5ENLcHLYVRdL9H4J",
  "key19": "5G9gK1J6gixLLZUiFwQrkg4pJwdWfrzhFnHbaCJ7c4ZN1D4gLKfYJrumzf6ZfU5uvh4GTMRErejAHG3BviopwfCa",
  "key20": "4PRmv7X8t7qSmfgqoyGaB6Nau9GAG1Lx3bJc5c6ur3272qGXQ4DEHQ8pERGAGoVSrVjWsVivVGz5dWjmeeXJPuWt",
  "key21": "2ppzxQNFsp984jWXBK5z5Q9g7KZPPZs5YYEQxDt9qqRyhBvtfdts7pQV9338bKpT9GeVPmL7jJFK46fvUPrwB4aB",
  "key22": "3kWMq98YUQ5bMZoT2iz3y5M7xyRKEyQDBXYWqsxXwYP1C515Si6qfoZsnRWaYck2WLQYB5PckKoQoHvZ9FEa16K2",
  "key23": "dV59Yj6kXhgjt89PygWkdaT3jq26hBsJRKvG2XRveXKNmmsG3ZujM9mWM1LWUeGFteYzUVAHUuTyXk1QkWQk876",
  "key24": "4893E7H1cfh28judd14AEJsRXKaVJx4Pwaxq7DpHc2tSn7fWiYDnbxaPexkLHpWeTGDykfbsZJW66oVjBMxetFqL",
  "key25": "4AdwY4K71FoTAWUAr3UbPBjKCQMhaWsS6NtPQs2VhQM4Dwie3mARZybztNXW5c1BXACU7nUw5JUZp3sGqpYGvyQG",
  "key26": "enmH3vF5zzVvDcWUd37wdGtLpvuthPwpJFpTWht6KPTWvwC6o3B7tLjFYQ1aLEPEnZyih4NyUYBDr6X7zj2aJjw",
  "key27": "363o9Pfxgzp8icbVShjbAqUxwGXwGhkryN3VtHByMoViWckdSmtG2R4xDhCeEGyYLPY8X1xR9osirZuQeErh48kv",
  "key28": "3M1H4M6GoL1E1GyGGHPxseFZcR8mpbBozFhPkCoHRBrytEwogA6f1vC76ZSTiatBdh2Kb3U3sAym4iiqBeDfYdAT",
  "key29": "3UxrGd4LTv9jJUTCNKKctywU9SgDdq3qndNGAfDGNEcNDLqSXWkxcubE8JNFH3zWoCYy9VvXrECa9JuShV94df43",
  "key30": "5WnRHvo2aW3UMbp6NnUcxMA7Fku8ZqC8eH3g4FXT8AdfPo7vM4Ht5WaW7KGXrkdFXWkcbLR1QqzrWtNvyQpw2mFe",
  "key31": "63R2mKJ9iqTfKpdvfesYHb3VjJhup1Qowu1LXCvPFgdKuASiBWapR8J1jUEESiLVWvxvTnvdRryTnPria4SAaDNP",
  "key32": "3rESJVXcNmjbAqNB85LLXS4RxV62wPmZ3Ad2tD43FCWenJ9v4XyD56tgHyxrZjnzTY1dJSdNzbwhSSzN8Viji9HA",
  "key33": "3e8iiBqpXrZaSPcpLVfrJUbQfQ3bdhabRTRkKBKkDrJTXLe4Ge1ddrbubL8hPyAQWwwMBPDs8iLW95jtWfX358ne"
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
