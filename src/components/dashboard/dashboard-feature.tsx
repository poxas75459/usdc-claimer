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
    "2R8hBWwhiLR62r9zPrjsDFQixpQDKAe7DSKY4aGLWgtZiKvErC17BdDbzoFnics4epdMc3uiE84eJGfP7J7zWqiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7s4F66a9saVkm8V3xXUjkjQbyh1mpfamL5daE8NCdtnL5uFwkDaRWj5kLB8HNxhB1XPkMfoD41c27D6ESTqXmN",
  "key1": "48NKWpAheVogXCxRnKiNUCTG8kdR53vY9DoynsF3E4KdvcJiJooQzGCk4Go5b8sFwsisWKZFEiKZcQgRgRAVa2d6",
  "key2": "4HeqGEppRMTidBM3X3qC4U6YujbBeVHx1DUinqVcoJEHAueS3YHpCo5BpihLHip7iSMV2GLBmVE3EZFUvs5thTbo",
  "key3": "uiehWgg36bxvnkZRK4qqYTHNkVtTChpcUkD6sXRcmMe8X1PjP1uvBqLMNz53znWSzdZ1nL5hWU1oesXcNNYXQs8",
  "key4": "65SbC7WXvq89PsFstfeTe7aNz6aKwRGMC64XCQ65a2um61jDa2RoBpnnSEBCPrVmvRUaqVQNerYADHJYk1awPZji",
  "key5": "ToFqWMejzwiQtyDrogJpzaxyJX9ig9BH2oXg8hHd5yf6Tjd2Ny1jmVUXjdiwCKKkEUdZV8QNNpX71VfVd8pnqRR",
  "key6": "3sFB8jBPneHYivuYN3HkuJMNh7T5atNBmyEVdaPudASCYFuP8pN9SuD8gfzmdfv8xp62VNppJonJD3pMkEuvDPYh",
  "key7": "4WcW9wdZSeU5M4Fmq29hyyHhX2YZqz9vij42CvwBwFVLuMVXoPVTgp4Yrw3ETo4iDtSZuXupyoCF3eCUkZDFBsGo",
  "key8": "3uzHxWEVZGx3UDFNrdmePJfRgD2RY9vRZERo3LDqb9YNejMiMFy7AL8rrscrRaGVyeFecck2cY7chPs3fx8dHVvb",
  "key9": "ybwXSA8bmXPieY1aeE7xDHEdwXF2azCsqxRMd2og51oBjwEcay2nhB4RQqXEGmUuV7vUPZ2p48m68TDT1gyMQqA",
  "key10": "3sFguufmG8uszmhFFqdFKAt4yei9EsszgDBQ2orcyW8kxXP11Actp5KfqRDsv5rprMPpazsnWAEFTYD5AKN4z5Bh",
  "key11": "5Uy7KLFJ9kgiTkcqr1Mx8dZx1X14Fi87ne4NAShySq7oNjbuQw9LtRgdKiyEAfFekHjQgFKnuUQCrXJ2mqBcQkHq",
  "key12": "2zpVVVbQ8UUngXGjLTKFrywkFdGcUL4c2aZE2tRohzPm2PYTPGbtXBUnJHZNMWNNL47DCCh8oDsqL1n2QBXdRVc9",
  "key13": "43uEEb3GuNGEANZt6fE2Q3f5BX27Wxk8aPirywxSuVHm18K19Qew1g4JihmnLQmVev1jTwjtBsmF6maBpRwhek39",
  "key14": "ahsVTEorwKJGoWfhxsNybjjrCcYyyYogUoeofyVYuYjpUv99R1MN1Z4cNq3U7PA143fxGNZLVdNPDCeBXYM1NE6",
  "key15": "3vXwmZEynULF7HZBPmkAGaScsSEdu3MKPHsJP6qFkkQx6qKLK1GAE8H2sudrSetZJigGG2suPawfmnddS1gtK4eN",
  "key16": "5Y8SMx7umWSnRZ5iLhoLerrKMrHn8sQWMFB2yjjEfuNtUgRfmftxPnqkbJEzYt7QFee7xja5kwDuRM4NV13YxgHw",
  "key17": "5WSBdiQqXJZaNt3gJDdBUcEopMTjchBXKVCrTVEAY9rwD3i5293zGE3TjH15bdTeXumhxFYrkR8TE2nyv9KbA9Wp",
  "key18": "5Ff7SKz1b54VwFiwgixGr3y3haRwpfe9Qr3a1vbghi4QvZPH4MpVSp4JamFyYkK8YWyyMCbcbTVujbU8A9T12Poi",
  "key19": "4yGL5PFHhqH6WvKiuQFp94Fuc7NtEneRACHgviyt4A4x6NQnxV5fCHcc1uJVewwtf5BTSdFwh2Fn6sgP5ajpDfzK",
  "key20": "hK5GMGq2yvDxhUzMq79H7J3x7apAAA1fMJJ9DATJKsq6yAnQfd9qxqjQ5HF7xARnFmpyB2tMqR925E9ktR3sBTs",
  "key21": "5zR1LB171cnsceipSHLUgSRrr61ub5i5AAQn2YXH7Uv2utQ5hxtbrfEy71CDH4WEBk2eVwLcLSKpXBC1U18hppTN",
  "key22": "5BeeSeybEhDFX5r86vQc6xb6cdzvGmB7aCHanpwaQQfb3m7Y4f8PgRfEzhaqzgWgmM6TsEbvYh943RCTgCdP2Fq6",
  "key23": "57JV1uU9zT9NVAK1xbNWpuXb9jg15DCfMQF4b1jZxYYNyhvx47CqXKDWGaRRxBo253jyp8aba2wb5JfziR8sWQJC",
  "key24": "2kp9gcM3DUxKkazhSc7USu6vSgE91nSdj7C4pVUfshY3XSJ3mLnUtpZdPBWwRy5mZHsDhJyJ5NYgt3HgmCQAuC6E",
  "key25": "3oKcbLYwxX5skgFnT7XCJ8aUHhYgoQPnZEgaG8E4PHnsoaQzftAsjzCyq2htvXt7JuL3uN1WSqJ9mvbk8gjoGTCg",
  "key26": "KHkQTBmcs34JD8GSSjvmRGWY4VMqSn29AEvZUjccTBjRp2DPhkEDNmmmE8m6xJTEUSwoQmbDvgZLHbcXxgzU2Vx",
  "key27": "4tVmhiMaeXB9q3tH2zXNyx29R1ihB7Rk18kMXvYiPW8nFh74Jegw9xVC4so7vwgNmFMeU2SAcHXxyogAZsYjUpM9",
  "key28": "4k8rzpnrDAKc7PU47jgWahgZRBGurufGZKVYFMbj2YuHw59TJywGnPXXQizBhcPYneC5wCyZHffUZTYyYUahNzak"
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
