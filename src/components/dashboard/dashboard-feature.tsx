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
    "4xyaoPAeNZ4tvUDd72EVYzADz4XzRmoP759uJfpfPMsXm3VCLszQVfFMyB4C9PzrdBChmnPDQ83DwQbpk65vjLBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTb7o3D8otESGjttjRR32Qh7mc3mk5FubL1mSRKkvAaED2EHrnCU93fq8dfHvqPzQWNfwJ1LrY5qhFVi89rTQC2",
  "key1": "3xSUmzZ1nmqyc1HGQZRtEbQUEoLRDsgvhGud31vJ2StLYkW85nAdTimtpdEXWnSLUMLkXkbuPk7kNBZdhfKDc5oi",
  "key2": "2GXiuoFYLBSqksyEaRQWRtd94mQhNnrAhJWLrxDHCmHi2XLHe9uKHVE4qB1jNf2rrsaEu7EEXDtKiNE2ng426Zb",
  "key3": "F1hs2VK8McLzK25nmEsBaQnPF9AyWh4wtZgDGHiSkM9eJ6qLTx427Sf5GRtxtiDqKYaYm6mELN7kgmT5V2a5BW9",
  "key4": "4sdddLYzDQtr5MDSAEXpth19QkJcNAMPYVQVzzp6mWAfMJaqceERjTb2xC3sapfySj1CSYXLPnXc4gX9YoQseLiJ",
  "key5": "4RPHMieZZC7NVWZXtW7KV79WXjhbyX5FWSHAMQyoQHz8jx3AgdSSPAqr1mUyDZyDs1RkiX5rxZW3kiAcAgEDxg8h",
  "key6": "3SWGnKpE4AX2sMmxD3v1VRAkuq4XUzLugDhzEvKXxZpHGCiwiJaFPJGA7oUgsuYHvmAw3iuSuabycsoT4mXMPQ6x",
  "key7": "2bh5UUGGPdTMw4PEGXtfFCpVVnTVJV5YfxYxKyhFTKCk5S178Zs9GqzwvzWDoeazAC1d1HLE1FN3mWcDPDoVKy4o",
  "key8": "64k63dhRAdRzJMkjV9rEgF4FstfQXfZW9wN5xFMsAv95oQtEPinrwAnmMbtch3qBsTapHKtfNkVEJKjEvaDUPR6D",
  "key9": "2cq8KuUwfCeBDciZLrfmiDHkcWwgqQHXGJNwhf34HmHFZLY2XCj5nMtD9nqgk2LqyMvGfbdcF3oY3RMg1spBU6Ca",
  "key10": "2xkDDNKTjBzmxAWymetkzjvdNvEL1EE3sM822AJgLo1Cj4gEU6STCMLZot2GnbjuZxht9Z5vkAZSzXwaRCr11Qns",
  "key11": "4GFgoTcMSKYRXBJTaadMrv6qDNjLpN69KvV3zsiZnWcGPauySytpdRTCR2FbPSGgspjU6gm9d1xUczibke3WyMjL",
  "key12": "f4LsTYN6eLY7MLgabANDzoQMK78WtnNvMmLTk1SAGRuyNKAykCo2xs4UXJvZRBfXfjLYePy7eYDPKynqwNXqsjw",
  "key13": "3eQdXD9LRiv5h6JbttWbcxJAdodgrGPVeapKSWHzybfVVXJbBV9bWxRJaowXQhXyDYRj9zmh3a4CKnf3RnF29fLs",
  "key14": "YrtcpQF5q8yTqWYj7dvFp9Cy3pnf6hJJxsb9du5jxMXugjPrCkNqVNFqLvohusDYmQLjDsBQ4kJdS3bcjiMtKjy",
  "key15": "4yNnYm7EX7rBVsoUsjwbyexdLoFDS29EG3K8XrwNM83meinjczAixfmGs9H6DqES9W9sLsk1gFpfESjK2wUWM4Aa",
  "key16": "3Gxg2CXEhUGfYsXdRLRcuVa9w23bsCmi1mWgWe4ZW7Zxedve66AkcpAUjjPNksHJYf3cNSCRy3mGA1BBBigozKwQ",
  "key17": "3Ki8oayQSwJH4TFBXFaZmjtsih9EuveK9FXPMuaNJtUwqyg3zBwEeYvsjWRJKYpEzrZESNd7nuZBD8xVQtADW22i",
  "key18": "h9NLzPkiSXw7jykJv38R9eixzoJGZVrQrVKMRgD5tFJUdR7BKs9Q1TvV4hbe6t8SxAfzHoUR53fgv7C2R46ymoB",
  "key19": "CoMQimaRb36wsV6ZoAj7Dfc8yYC8Zo6qYJb98dQaGmq3PDiFo95zobCzC4iFXKjaG9sM32uYUorNYXqQiB52Yrj",
  "key20": "2dPNh6GwxwS9zKsmFoS814egNeqth4eXcBUQzipUREWyf6ujxPrZ3grRa3XuEPe9m9uJ1epRaT4mgULCkkje2cUG",
  "key21": "2dCyHoTJsqtNt6nk2nExaWsNpT5ZAZmmjnaToTK3YjPvhgeLgyTgPRd3Lb8SBT2VznaAFNDubTvSmadULjaffHPf",
  "key22": "3FptuvcRrGAUpV89xg78yBPaP3rJxFrFSG9yGu9k1qi9fJKxCvsXZn72iGVPRReMXFuUwmCitG4374hsC6CJ6e9C",
  "key23": "4cQpSQrzJQCStEJx7GzpTpPgs8A5c7JNeGiYYMDiFQZ2cDJAV7vkNWSB9EjiNrxRudKhP4vaN1CbdxB3PrrrnYij",
  "key24": "49e7iCJMjwQKZbLwKGevwEHaCETFTZwyE2bz38eFaw8MVBmaFCP9B7wEktsp557gt4bBvwvMT8f3fd5MiVaQEeDC",
  "key25": "sFU9zHTAKSFiPQMtZ8vQBJcnHTcXN1nGLg3FRsy1AjkPy9isvAGiaGzr8LBrfE3ZvwFUbqLkzB2WbttYo6dsLFg",
  "key26": "5JM1sXgBi2UtBcqgWQuRphNvzqSVJVaTsWADSScgJ6hTsRtKFnpuXWkvJXsPGvGZUsSoK2yJWF2Kvqf6wZTmzh3t",
  "key27": "3QU9TEa1DWBP9i7bAJ66361vHqugcJxj33qhVFVoF2q1DsHZhrJ9kqkqjaMA1mpj1Sbq6DUxriec9hZvGE3f1Ber",
  "key28": "2goj6Xk2yhzDxEoeDj3hEhq1Upw9KZzyS1zLbCy779hebfR4DnkMdKfEKQAk48iWZKHAN76XCLNMckjxyac48PT1",
  "key29": "2CmX9TXg6GHosMu2YAMQ7BmSdP7g417egxb1NxyxWZyjhEkDXN9CafGro6YXPbJKXuDib4prFquRLv6hAok9Hh6E",
  "key30": "35ocBjuZAZMx7Q8fa8kjeX4ddQdYANAoZPdcc82kWUjfu66bczWqUj2TyGh5YcU98HjEGT8rS5DA8vssiSj6C6Nn",
  "key31": "2KNXuYkruStmrq3JMd33P1dA3nGGdVnCXECJLxiqSq2jdyRwu6PmCYFoaFTCGEKBJzNfwEsD6BTk98mxAGpxeWHE"
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
