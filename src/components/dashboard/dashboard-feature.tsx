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
    "2S6UtDze32QrNtzNE4VChHuAQ7n2VcM8TZ5eMEmoUWmNUJn587SKtc9Q3ctiMs8rJs6kj8uqWx3F4mcTieMY6ay6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zc9zEFXBTq68prpHPXnvMpuFX4JSAB9oCnXVBFYY5hHJMuzVYLYghaWZ3e2jTCQfCggku3HYWb6wd1HhTiunDr4",
  "key1": "4yjnEv5TKcYcVYHYh5BJC2zFFfKbp77cCLMKGhULom1XXVmaLke6qvdwZinX4KZiucteB9H9JbuWcC63ZUieg4Pd",
  "key2": "23DTcJj94EeLoQEtgGmwiybFn511nN5TyAa5yg5P4ww9FSpayw5B9sJAyWdNyy2wdXzWwti2u593BbQ6aGeeSS66",
  "key3": "4SrSM9rofhvjyknmvtjgh3bBxX8HhWWXCFpfidL1WTh4GMsvkWWZRyMmiKZZtzC3uhYjVzDnqyzcAPA3jcXj9XHL",
  "key4": "4JgEkWHaRx9tvBJVirXyQ4c9RHemTCdnmrUgCHkdTThqrrjW7X5hH4SUfCVhNiS4hQ19Xzc9cCCchJrF8oZDZJjX",
  "key5": "5LcykW319ZKU1S1YhfnHbq75n3YD6ZeAasZ4hANn83WWWBNNXf5Sbz9NudnBDgctsUWrZ4tKLByCMFgUNPRS5dFF",
  "key6": "2WFm2CkFUSAUH9yrH6ezr8xLWqLGZaQtXPZCqmsUVmrAN869mNdgcEvSeNkso54gK9mfmREsoxKue5qLX1bQJ2jS",
  "key7": "4k3Wz5c9ynQNRowEzgHKptazVqXdnt59hcWCirZyTK6Q9BwNm6okKgp9GMqKnsseVyturQub9qhVMxExANMdEKsV",
  "key8": "5k67qvTa2G3BhRCWsD6qyjWAfVeiB6BbvwScozHnaUSrJrEewvqVpv5AwyYHKRmU4cLMKrGtBC72uLug9VmjDpnm",
  "key9": "2a9Ki2q9WVJVmG7SPJnmC3Eyj5txhARQk28jcDFUvms91BfzXgrfDGhyZzy8RyXoSehCsqsVy6w3m94W4U1gjpVW",
  "key10": "5yBARc4jY3sPa2v5J5V6yJbDxkXLZJDP9v9n3Vj5Z3jpqqQH1HhbHLoQns7NicmZdC3xXLE2qWpvH1QPtbZqdXXs",
  "key11": "5Scs3kmQykbaa17QM4Kq283wBieV7WsNRS5jmvzuDWrR21jydGG8ig6ibAVmqe2DajhVJzKa27k1McMwKgubRGWC",
  "key12": "3mxE1vuidUuVoAAyacQUhyHPzetQYRA4Fu6HhraQmX9Yp5QnMvCyimq32yoBF7uYFEz4473j9xvMeCiUpMnVHDiT",
  "key13": "2iVfa4YVzcWZ8zkrUxk3oMBEq8qBdPxPFEx1o7E9Tfgg8m1HWtJeJiBAMBnHRCHM98X1dCqjC4nJyme8K8yB1TCE",
  "key14": "3szSnCBN9u7SxQnQvQR5EhxcVyGRDZJRr8my61VczR6xy7rFaNNT1SfATZooZ2CcTR7ABGjjricDo9xq3xwEwb8N",
  "key15": "31uTMeWQypGB5a9FkBcMtsG34SvxYdXHRtP4FLiGv8F1L7jR5aSRv4HRiUBcgZUR1S5iyjGSPhfEAukfZUQn4gWi",
  "key16": "2BGAVzbSiNXr2RQsnCvWRBvA8b5Tn3cmdwy7p6xt47QZwbztgB8HMkcy6ZSH6dta2EMC289nrMePu1i6grK3LZFU",
  "key17": "5voebRqK4VAZ8PRT1ksoF9QiRYSVbWuLAxEhycu3JLCjTtw3TVQeyZbJk4zymosySTEfHtd3pGKhV9Uq7vkW65CW",
  "key18": "41pxwmCAroiEpoizsZvCJG9dW54JzQqgcVNx8VGk9NhVyXCGHsAJQYtdW6F6eme3RLPWVK9EypJuoBvy8xCXo3u",
  "key19": "5PPBZDCEHLSZoMVx3dNrUUwQ3F4RaivqnhUecyMa1UD24s8gNS49LHY4sWE2RL1ztzCyT97nVnDTSbuqBBPrnXYN",
  "key20": "2JqCqwuuSzDNSchP9dyb7nxubxgN8r5BiNnUeB1YimebfW2Nw4AaHaSYf2eMk1UMi1C7M9jESH3183P8JnBtsidC",
  "key21": "4t5UoFMPoUjDjdK6HxuAZTkNfvkj69dPP3h5k1xSTHjgSvvdXEAHZgKi67Prd1UYkfgEeRzTn1rzyHYSTGC9YDd9",
  "key22": "313f1szsD58n4E93n6SmgfZQJFP1sy3UWRDD27drHkFCVAMEukDtMzwRCKxyqFTrBfLYm2oyzM5Um8tUAdT3ZHiF",
  "key23": "4zVp2ypbXbBa7DZkYPK5qhySMCw4At5XSbm6THDbC9NNs4bhs4EBuRzcb3L2NNYbW64YtM15H4wYn8t381HqTJV",
  "key24": "51QvYKsXboF1WeLZPoAFQmTh1aFRqyHaWziFpfKRMBYQsLor9ZBsYsgY3D2K8jfQQTutKLQkzycAgsbcqPK931AB",
  "key25": "3EVQxVj7c5tDHYQz1tvQEizddjZvNPNCV69J3qz6gB4KtyaJMRGzUiVVJWpKBE6yDfg7tQCHx89r5zJBi9FhBT3E"
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
