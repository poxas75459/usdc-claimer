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
    "5c6dz66KXH4B7tbk9qryubX8vLSgk6x5jxxjwxVBGmCQQXmZ4VgQb99RgEixQ5hXmFdftFmZ1FPjbEwA8zwQLEDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYCkMoc6XcTaxr1HQNX2eAMyrGVMeAhoraDQonMaqgAHkEgfGNzLeTxuVsgK39qFP9nBZGrWUiJ2iYeVgdmaCHM",
  "key1": "2Km52ZXPdLNzcCxRb5SqScwE3ecz2EWUGWkRjGkBKrcktP92esbRmWJhzVCMTXd2N4axgV7CTv6DzNvMVbb5f8m",
  "key2": "3feX84Q7fYVJcdE1WTBLbR6K67xCQsNMEbfwBiuU8vZz1XLXAsorFsjQgpnodsx2wY6pH1ovqBGWz3VWfrSYh2SL",
  "key3": "26axmkNuFHc3fs6mjWv8AEQXpfe4Bcrwod6b3rahT5JUdJRfJ7F7iuw7aoeb4cHTYEffELum8qz5bFGKfJxdTLDd",
  "key4": "4b1kRQjmmQjZG7CYeZBAiiyrHZEdYYSMB9oVNdhtNFbwfarwaASRC5ZxfVRbkiZm3r8Yi8AnPpdsxC3z44K7cbvP",
  "key5": "2mr39K6uih4XuxDsLu2JNZS197E4JpfMdhbd5RU8CiD1YVSWqjAZypix14pABdcKuxtNSCqvZauKvXxscDtUZ8kx",
  "key6": "3vW3yZaL8cjCK8LCcvHABP4mtxPSJYiCtyaaCbm7qKiFWeYz9ke8Bdpuhf2iAL1vECVp1UCzF4AoquFDJADqRWgP",
  "key7": "5fCooRthTG7eWW37Kv1DHK8hGpXxvqgLNfj6E4k24ghuTYAiLhFpigJtmKJ7vUFcDDiM61KRC6RuqLqvrY5S9S78",
  "key8": "3KyRDdcmnBGMJnc5hHfkxnCtFSjB6jiCkBG42XBDezQHezTguoxviCJaFbAeHuY55EDBY2ozmhSJDd8XMqPDrkMu",
  "key9": "wzGD1pGHAECwjLS9qxSV7yJ32GEQm7o3cq93A9eXRYBFc5va1fNTXejfipwRmTeKaa6UvG942vWhg8Q17DBRKRP",
  "key10": "3d3RZVfoo1fWcipCgxMfKDHKvuSZbxZXhNmKhr7mRegZgT2rJdc8715T7dNMsegDyCNYiKA8ot74NcJU95F4pb1q",
  "key11": "5CwQ3NGhW2vREJHpbFMB5bD9T8oRfFnjU2jgaTqm89cf7A7wuiZGtLdMe9YwfGwurdB4LUQ2DsdpdovpZ2h6sd3Q",
  "key12": "5ryfpiMh4paRSxpzVQqe1Xkf8CvA1DJV4AHbztQnpzXsViStB8Wwk7a7F8dsC5rJbpo4ziVxbZTTMKLYmbML93gK",
  "key13": "3X65BzqoTw1AShuQfrK4rHJgSrgJtUKuZ7aVsPyTW1ytaDGSLPrkXarPY6CA9K7s4NuSKWd6hD2HtpmvdpU6w9aN",
  "key14": "5GfPg4ji4N91xNfme3Z1VoNoYCTxqHbUwj1FTAcTeHBs2pQeQRhBvcxMcLQowF4RVvDjWrjiUyFjNzepjzc9pfDP",
  "key15": "3yRVzZMSGHReTsD4HNiar8DCqQe4EAg2ofrjpWTHSVLhpyRFY62t965Upi3jyJdFvJFvz6JJHz2C6MsqEJxzqJHZ",
  "key16": "39pYE2qrijBE2KGsf5dcoJuFAGTgDc1KNWDffpNHk5yYLcGNWmSNzn2ujMNBaPsvYJjMTbBTkbNAox4MNymgzUCY",
  "key17": "KvZTi7roaQxeLmr8SRoZB4ZKX15LLnidAVSZq2ddNvjfQe5fVYA2gydX4BEuEJbjGsNU16RZjLg9cGEuMfaSB43",
  "key18": "52Wqsr3u2kzjmRm551f5xR47y2ni51NbEdoSEPqbuPKNcXE37uETjzSYdaa21vhEh4U4LEZSxjYag32X2Kg7nzAs",
  "key19": "M6sCw9waGvTcAdPGpxsfVrDCMXWtpud9a8ryEGVx5jjaBuPoQdms8UAvM9L96PsctDHeT822JVKr9cM9rjgCjG4",
  "key20": "4YvE638Pg7WrkDGiqADCnXguPU2dALeWQquvLmZzo7vXiWxqefx94CKU2S1dz3Ej4bcoWUoGhhXVNrKFjzVx342c",
  "key21": "yvCvKjiPgF2tw2HT9G1ZQHDJbYEkem7wn1AJd3TWrVqrCTN33VKgqrQSkrb3dYq9tEGR8r2N2vaARjwQbMhXuNh",
  "key22": "2AmRcDzMwqVy6bAiZ1DySfdC6raWz88ts8Xv96HzWkiDWjH8YDT3oN4mcJ9q2ADmpkfWBo1yqi7JMYvENA1pvHeq",
  "key23": "4JyhhFJ2U12ixkQzZreKvYJMosBNKTvT5TpwpxFdCxeN4ZEWNEKx1aZq1WkkqEYk5pHtfyGNLX3MyXygHYmEZLQ6",
  "key24": "WGD6VncSh2Kpx165NkhFdSsjL4AAyoMUYJ8kbSAHPuC6PNTXNgGkvbq6NYocCUJHhi25vkLCu3xWmfYQ7AHbqCx",
  "key25": "okL6tVULrZiCbREjtCyDvLk44cjN3Ne1zBQe72YWNeDxvBqenTdTXWAK9WeoRBZ28Xn5ZYFLXci6i7jnss1ePFT",
  "key26": "2QYk1hznTjgKVbH8gVCQSPCcC13kGzTKNoYxLGtpRJHGqWhMsvTFqww4ckSCHwRFqCGLGUHQcuAdDvUUPjHc19s3",
  "key27": "KdwiSLb7XweVjcoKFQrQ8pUqMZd4cWkHqgFM14kihxTTR1tnTYyweZgZFdQgGhtV3YnTgc8tB5ZEgSUSMy8TrCz",
  "key28": "3ytTRfxDKkfLP5R7G46pdWq2H3Y29crSjFWH6ZPJJAJkdNzQ1DgQPwakAMShU5UceX1iwcpxnTm3SL6gkby38NW3",
  "key29": "2UPrCUmE8aozQGXZgBEM5AzPbFeGuTSnpzk1mDExgKHdG9LgLa7aWEUre1hQMjiN8meyRxhvrRvgENEVzDECc85T",
  "key30": "363sbVNe9TdYDBjqpdBjup5ZXEvgjnrmsLayWVeFWtU46BUgK6XVGPDufzghMDiKBxYFSGmBXo2U1QLLsaJXBzzp",
  "key31": "JQifsDQXNgMT91Psy7E62rF4rVywtx9FModM56LxVvxV3JcCQAsDvuLpSfiCv3pWnHVWp9gdNmR5myGPczPiwx3",
  "key32": "4sfknejethSj4Vd7qFtQnTF7jZjvg4EAJhm46B7s9KVocjBBSknrvZUpJACKKcsEbPAWs92coTmywvih3wC6dGMV",
  "key33": "3U3qk5jW66V7K8kWKqR5bYjgErz5hTfsd5hu4g33kwt69jJFBSQzwns5n39xojNrCP2AvE1qCTMtFC7dfrbbYFbP",
  "key34": "2s9HCxWBHWpwN1AePFAEGndmY74cGVCxhrNVxn5doUL1QvcPd9g9ozGjJvXHfR93Ryg6QX8qfvhGrbHhNrF4Q6tW",
  "key35": "48bf7d6f9zML8BUtd1nNZECQhU66T3CC6QsVdjmPwyqwkDV1C8EGBp2cjEHfFq3XRYmmhWwse5u6ARUu4MNqEuLn"
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
