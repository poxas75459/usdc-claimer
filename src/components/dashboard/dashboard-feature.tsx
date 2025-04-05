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
    "2wpeFcvxB5Vg2nKduuC91H1ENhnbmH2yjcasDAtgXQpMrawGV4sJDEvZVVZCFf1vLKHLx2TpQMtZyWjV91N4guYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNp6uP521JfPCfN6AsbwDjhvuY6A94uiNbGwRPMrHWdF5bZLChUZfZVD8jTqUaj9YQypXk4Vo8DbKRSJYWsG2eN",
  "key1": "4JcoEQnnTC88LvnPKZGzKHL3oAhmij5hnUgcTWDg7vuiQuWbB4pbToB863P9KRgdqPig4WFhVgUocwpFujakUf8M",
  "key2": "4STk7bnCaSQHhPYvEBRDUoFESRcmf4bkeFj3mdoFiqL7U6ff3mPfXMjdDZwC9QXA4ejP8gANrYfRbr19aqMneSxw",
  "key3": "26uin379ci6zw4pcVMoD67j7QejJKbm4WKbBmZmuRyHjYPc2gcmV4RHWmJ6Rz78wiM49UoroyUfGK3mmtCVLD2zH",
  "key4": "4xrdtfP6gZmP9yY3MVF1KFwkpciwt1XGDpvfroWoSFLR2LPKvJXv6v3nfKHAQiJzTBPLyfWfmFzd8ESyDULkkEVz",
  "key5": "5jWYj3eScsUMhz9FWVb8DMmvckAZA3KrbGhmeUgJZRgbBA9ppK221uPwEugiDf2tFwAL5HwXunq5ghVnCjbUJMSw",
  "key6": "4xfprRzne3juQA785heDK91ue4f525DnZvVDRpAxr8GVXakZsFBNvYLbuicp8kz3KaztazJ4MmMCNauf3xeunH8E",
  "key7": "cFT4VGTrzR4bR55HnmhKQuEUEpQmg8g6eHLMRjr4vkjiQMxqM8h1f9uzUpG6azV8Sj6T2dg16CAPGvJk15SKTgt",
  "key8": "vNye4KF8kEkGibxthqSwwY9TxioFtbH44daPDLoKZNkcPrdK99S8ZS88U622rBZHt2fdRRAe4eyzPC2Uq5yJdoC",
  "key9": "27brihYfHNrexpPigxSv6wjTapTfDGM2PNHnZriC3p6gWGPARTUx3R4PxtZDd8F9KHmWSYdL1cqp9ZTpgcYuVPdQ",
  "key10": "3F1TYzrrucGHoisxUPjVuzoncdjUgERxJgW8tXDfeaoWdzr4K1bkxi9pdZd3fAnmZbGUxKgSyXMS34vyibVUCxSh",
  "key11": "61tWKxULHWfu6C9W2JYzu4bR1ZPtb5uC9wHTvCxa5VeupqJfVZWgXHQDUQR1yH7H59mAg1m7YBHqLpLTbNsXn2BL",
  "key12": "3hMkvv9SiaR5WbdwjFfHGx7DfDoogbKiiSxrLQJ7xnx8yoELbdvBqsT4jEW257Uq55Z5bNmW4NHNgZGNkt2HJXeW",
  "key13": "8tAEfAFYqRAUsUSRLATF2XyxhmXzEYENrPq35wemVHC27WGWWsF6Hz5oWTjJw9NbpAywdPYCCaZeG4aFBxyqeEL",
  "key14": "3iAHSNRdEk5rkdzrC8rcywB8ee8tAtqAs96pThXm5AcpfxWrKb6ZXAS2ibB6PEDCyDqjUeAaMeJFvtRzuVnRt28Z",
  "key15": "VNYfjKD1YJmvFzAYWW9ByGv8M7Pf2Hj6fiwZmiefFVDT1F8URVQGwwJ6qHkCtbey7L8Q8NQTHfiRcD8sBN4o6bN",
  "key16": "3EQ15TWvWd45Zw24KN5ABufoZkdR19i5HkTb8yZKQFurpUeWh2rf9st7Z69sJNxU9qN97xUfXJ2Pzfx7QLHkvx2",
  "key17": "5xLjsXyKApKWFpS6f6iyHa71FoA8h2ZF2E7BwsteQDGLgeznUwdTjdx5Hdm14zQGAU84ZbLDiioyYEaKBJF1aLee",
  "key18": "3kDVHD6VQnkdNg2W4gYv8RkhYBn51ZaKK4LmHWga2wCqmxQTvHnTb9h59m8Ca9nqPQcx9fZvdm1bdH91ZTYuHPck",
  "key19": "4re3uCCQ84k9nrDEbtgBGYz7Kk6Cxrhe8b652QTvq1bVUBpJicpMDWzqsvQ47NYg5ciVGkZvziw9D3m2KuhaAmcU",
  "key20": "AzUojiNk8PRh8j6fc2i8P4ZFS3DuUZ4Tkp9uPBgaGy18hJBwMwxp4tfXV2wLmJBMMs4WAVvB14gtASaqUnnsjp4",
  "key21": "rxhXX5B9zCVKW5GNt2r5s7AxmkZBB7BHqbK6TXoJAchS5Y1eJid1DT9cCb6m1dbaDSRJKoQ5dmDh5k4ASout6sv",
  "key22": "3guBLxMBU48kswmmd7tRwVUv9Sus83aEz3c6u9c8tXaxC6WADcKvgupBjVZF1hL4E7PTBVoysUss6SHTViKtkXUn",
  "key23": "4wu17pQq12cupHuXdLrZok3Pk7MPZsjGXGoet8jzmc2NXVmEiXuRqNhDgfhp9MFmio2Jkday8weDJA7hRx3U3ZXS",
  "key24": "4RNKbqH3mMkgMKnw58Udb2Fo3Yyeaxzbpmxu7f4FEwgEoYYe2ZKwFKjwXpWWKvT4CJ8dA74DeKJFq2SASUs3CHBD",
  "key25": "5wWu8bgYxhqUqh6MJoc2aNvXadSF8TDp8uhgMzMB2FMs3CwtPimy4yySEAXKYtndW4krsNnLED2pinqwVYmZzW3Z"
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
