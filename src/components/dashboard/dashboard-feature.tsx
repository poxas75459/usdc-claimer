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
    "63gSqHJMY5jNE2Yv9TfRYsdURyxvVWAYAjz3UjfBaSV2So19N9izd6Vc4ECr2px8CSEm8LEvRXgxbBC3yQ1e9UTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ErSuZswMaMGmGDCM1QdQppMX31P5YiZh1o1DiMzUkDGHCc4DPKH5jjvHuZpZjTMuV3CRuHBBpXVLmfQwsDC5dM",
  "key1": "4RbptVMyHZA5kPrkboXPgYevr5Td4gh84RZYWNWNR1X6sD4CNn1h7mZUFurAVGzEgksuEN3BVkgPc2Xm2frs2k9e",
  "key2": "4nRrj32F4i7ZjELQeeRH8JwvBEtkpYxBcD2x6dHqQBHUiguj6EKM9GAUiyWZ6WKNiRbERvLT8oCiPCj2HeML8gum",
  "key3": "4gyLrbXyKmQecDqtwLLckXdL3Gu8tx95RZXWaTaPVpy3uZKTPQiW4EBgPt7LGFNjDWD5yuGfKNfEB99YEPXZcQGB",
  "key4": "4eKrWySM9PKyqnjiw59cYRtv2Fa2pXSXCCvm7uTZeSW1SzapBqtfbrL1huAV2CKZpZXL9TDdDBVyyivRSdZDjVMm",
  "key5": "4ZTFVk2VvTpGwTM26ATXaUY3eiYKwin22fTyfLFrHVog15yoYg7DHHjjVjfcZJjhLyqg4TkCXSSzKkZHGjDfqFP4",
  "key6": "3Ay5qzQFkUS7TxAYLRgGRnU8kzVF3P6aEprJLwWSsMj8ffY1F9DATsdftn53UjCBAsWKXHtFUDmLcWKCrxPYV1PD",
  "key7": "2ywA1hbWGYtAgVMarSGkJ5pwZTZaNhjAsewkWNLYtft3b7bBbZpywkLLX5nX3CjCypMRn52KQNJiL7euV3FudxJw",
  "key8": "HAkSVFLKNPB5dc1y6Poxv3m58eXkjQWDrJfgMrY5MqnixEGiENF98AGt776ZMK4zA2dxj4ksuR2Tud5bp84d2KE",
  "key9": "5TkdJrhmiBbE7CTNmEjdNdkhExkx7qY6o1R2gXUbAPMD6ModhYscktxvU18PSaFGPfixj9RJ3X3xJZew7N2W3vYb",
  "key10": "2EjFcyKJ5YMLj4asUgCh5v7hpBjD6WVu6BLVACPSnBm783mf6oHEmRSKdTCUySp4nsi5fNxFcHL11qLhU9L1q4CD",
  "key11": "5jBACYjyY7RxSGcs9hy9N84BAuuumorEXFSLaky7GYw3JUYiT3Sn25TMwBophtZrvN6HX3BzuBoBJYSVK6qpAo4K",
  "key12": "5Kvp3QfhM2ndSG1RFVp25KFdffkhUR3rDTBQQYHNEhpfDJoThUAcK54V43r7oG6ZqzMot68Zvnnchjyf9kvnqEpP",
  "key13": "5Po7DVWyHSEXHyxxybwJegLWc1XoxTkbajFgjT1rbmygU5DSdvbCxtZpkiq78gCgCvuAWQBiNY98oeixKELGTskM",
  "key14": "46tasLuQXrHoYhjH2eMc8HXpQFb3ZzbKJjnuhKX7fySby5RbxaPXHgQp5nrb5nhffLsV3H5jHpfokV7yvz29pEr",
  "key15": "2k8G3pLMxkT1uBZNm3jEHuq2CeendU8PGxirX23WV29nKFDejf6ko8oigwiYNU5aCmzg7heT1oQPhJ5vSKqjMZyM",
  "key16": "3Q94ZELeJMJtXCJ1g39tDyzkHAzsVTx5dUg4eCuyhQGagG7mRPtjRf6Xst29JwBzoWgSS5j1M3tBrmJ8e5ezCneJ",
  "key17": "3wU6WRNPEXz9r13g9PsVrnYoFktTJZZK1xajvTPussDDDxKUtRoGqP2ocdZuBYjPdPv6N4oZ54dBTLRFK1qzhnjY",
  "key18": "4Cfar5NVVzUHypZr1TYmorBM3gLSpstjmyCe9oyLcvJdBs21whgZyXDSgs4NCBn3eDDxVQo5d7uafJYD1CRtxTN",
  "key19": "3naMFZisPPkPXtJ7ji8wg6n7qkFwZwjt3aVJ2GXczZLwphx3HuMQJcTWPq4t2iR1T6mwopifi6k65z72vti9WmNY",
  "key20": "5t8Zn9wgj9178g8NvzQxz9G63rSSZd7J9zpkDMCWc8sEr7T5i68JSR9DetrCwFG8SxhzNvCnEzMMkaDXrvpGXmeM",
  "key21": "3tTeoeib4JBpSaRh2LUXSqFEdf92g2QpRLR6C3HMbK5eJQTfF4pup6F2syydxmgqTqw6tWSXneGeQkfhhKTUnKcg",
  "key22": "oxCGFhVT9ruakQwH4FKaYraTXWFST9C8PwKBYtP1RnzFPoWfvqgikk5q23AWpq2dZy278JhaoVmxLMXfturZw6r",
  "key23": "3usDvYChQURQ1F9p2Mk8w3moTtNDXjpthHoHWaXwJUURMWbydnrGYFqQK6fpr7Wfox7LWg3Epi8KfJc74yPjh9Tv",
  "key24": "H3xb3D9CTSYLxTLMEP4ZarvsWo1DKGQA3Vb9RBr5HVpCxPgZFNZyfvcR3yGqoYDjcBDZGZsgB3vYEyv7jhc72VE",
  "key25": "MGiMsqGJinaJq3jSbqwv69VdKifpcs7bEMZdqQyPkaxitvXujJTUSGv4vtRGx46B2R2T6GVrXxWJcXmjJsUt7W3",
  "key26": "5BQd9hP1X5cqGfJ53ZpocH1hz4PQD1XPJRbur1p5P1Y8xsqNZSSobb16nai37qc2Gn9jF76ZCuuo3MtnScCBEy7c",
  "key27": "2ym5LBzB43brAkEVkJimDUjZAKcH4ap1zwGYRuDf1Q61TsXK9vde2dzBwNKWsuWhm9PJY3bePrNLrNBYHycCrcwd"
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
