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
    "2KwdAFpn9aQb1RVENS7BwHqjtt39p3w3PyjM5mFWGuuxuoTQmHybPho2KjmqFAAUYYpygkAU2gw86wbntxsyQoRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cw4SHFxUeqreMigoMSYNnVG6S57DSefDzQ9F8fLy3HZnyd8JTYKWyingeGLmXtRCcbisYBAP693B7rsG7rgnDLu",
  "key1": "53k35J1U3Lm7cha2HQKNcqHeTtT4ZZxb5xqLiUgugV7RdHDCLeywoSS4NLAGxrd4U1cTMniNA8QGytuMRgv9TMao",
  "key2": "99uvVbigvVq87z1kqG5qPGyeHoD2ET3wBHzbop6PntPxJ22PrDffyicR8f3gsj87Rvn1Tp6AJX9NeSgZd5TF4ZF",
  "key3": "5a9eyms7V8ngz8VJkCN8TpYTmWN7eJNgzQmsStL9TXtgCrx8PfmQkbcvtBtJPhn995sJpCoDrKCpJspoTMbeVThE",
  "key4": "2E1k6Z9mkfCH8K4EBRBCLLgmJVuadEQYTMQ75oeQV3Y3Wet43jqSucmGckHyyE9oeSWagizoScjD9oWPsGuhwEPr",
  "key5": "5sWt6PERLjSKwRqRA7ZGYJbFbLn3AXZna5Wvz9N7eqYLxcLmyzG9QrfHtEi2tQYrGC1qspXDG4HTULACcTAJ1qXi",
  "key6": "dgr1K3X8ui9kHLeQTpda9aLyRwUrxBLZUFiDPpGprCHFPM5To7psKkfA41SPUFPZF3hajmKQyqNdFJ84mbYHbyj",
  "key7": "4MznuNaBJD48EiKybQNL3bhUnueSFJCgAiBAEpqjqHocin9uPxv8ggHWFgPNp3zoe6CM9687PWeVNimyC6A3JSgt",
  "key8": "2gaggZyDMN4JVEkAQZC9gj5eKnkDbcS35MG7rCh9BKE85caqwsA8f4kz3xYwPGcTFftyK3oamtA8NarALbAAoNUy",
  "key9": "2QEA9kG5oWiAab6C2rTdsAcqfBSCguiTkNZMEQ7rxYDRGXPvLeUgXvQDc5GgEwzHqqT9LQyghgetNhxHegLDALw7",
  "key10": "g4zik5KhLNaWhN2PdkL8BzptSyA7fgRcmn2ztYYgnGSSpooYGQktrQYiq4GzGiqSMy7pBh6goGSPkRhtmiAaZd4",
  "key11": "2i4YmMYj47jftxxeN8QucqhqheQtME7rwwUhP79wzm5RyDbcL41sn9ATxDeypoieNmrNdhzLEtpbCLb7KPEwUpZL",
  "key12": "5XD6Ev5asEwUjGHVrFb4hMayrMHe1oAsodH7XwHPXHJiZZzuZa5CEvxhRQrWdorDecjophVESbhLpAUB5UwdaGw",
  "key13": "NphFHGGJUkfqgbmy6tPHcPrZewHnPBuoHovFJzb3dViCRugyyJ9tayYvqUmNy8y8LaqPpukGGf25s5afdJJEnVC",
  "key14": "3VHTp4NWjPxKv44cBJgz5Qyk8SJYCKpWhbKipLHUv66AeYaPEEh1hA5xwFkXhz54Yhh7iVvtXKkKSzmetVZJjEed",
  "key15": "5mLxncks2XAQcHS2ZVBddqJ1JbzwquGhEKXTWMAnLBaHRWJbDghSvhgAzJ82Exr3i51oAycJjUA3YVGqCauoQ88A",
  "key16": "2eEoCktg4eSFuNZbHGbUomrq8MBGR3dYXvqisDhFZ6YgGwPPA7cHTkHMFrz5UYFgAiMsCXRhD7QrV5tj9GBs1dCN",
  "key17": "RX1GecB7vwAPCBQrDiLyt9uQzURCiMjMcXM2JjWpHqvEBRHtK8X5ZMssqGXeN6u7Yhegfp7DQ7PPYC4GauRanA6",
  "key18": "32bUS5aDEWFa7Bqb2qWn2Wz38Jmoy5xZDhS3mR9egHkvezmBuQhLW3ZvG5MAehkf1jczAKxnLDgaVTFGoYrk1Zhy",
  "key19": "2ei6kQLraPuv2biy1b9EqVWkkGjfz3sHGQseU3WbCQ7vHWt7ZEY2FEi38VkwX1DBeiGubEmjMvAAHhBt6oLu9HhS",
  "key20": "4bZkkqMNDtfzEBiojpcWiNet5t3GvVWo4LVAJnPng2A1rJSm87GpYuQSeHoGYU6rRLywSJq3Ea4GmQtBf627Nw18",
  "key21": "3sDwVcjouME1XE6PFco29axp3Z1NLUTMUBG4jdXE8BnHW867QZUtQR8NjUKT5ab6gFiSKLbshKuP1AitJH6AZ3AL",
  "key22": "2LV6juWkXmSb3BPg2Qm7UG6aVfTq8FotjopE8t12iF3wsurbJiD4BfKkuZUSW9sHxNAJ5MkthDaCwV54z3zprRTM",
  "key23": "5vDx3KH7k23eR4UJ4hioZEDBP3t7BDExzQP99MCu8j3xjBa8Xvj1Px1BYgZFzVF4hCseZm69LHEGYi6GBRkzuybr",
  "key24": "5oG1GRyEL1tdaZTgtBSf5tUx5zjg4xefcoqx3EdiBFxaap77isPgsVUCv8ue2n6whLFSHR381VaDNvre7FoGG4jg",
  "key25": "2TwANsrWUzTKyRXVZdD7i6NEjbTYPS791UBav7FEBMNagtps95DuqbSFH3zSyE4aSkSvvMjcH4wG9pNiZt5Mj8bY",
  "key26": "LmK24MSMPivUV2ZRK7iQH7cvqBx6uB6xL5webLiXkstEg7ty2fhvYqhbvbpiSB2MJixi2h97Eho5qBc7EGZK4k9",
  "key27": "5NeM22Cnyx4nDf7e4nGfZHfLUxjnVwAJ1SXWqos2DSxHqv62jgq7H4UXGYUu6iso5zTK2NG8abmpcojEdW7ZFG2X",
  "key28": "iAY1ya6os3ksfLCLCTCAkzcZ3MHoNYkUxMdJLhw88hWEhn9QpzLeSJnb4Ct5x6oV55dmVG2XGNV83XX2XqLxEbE",
  "key29": "24PLzZKLSe6RZYcYwKohKUXfUhorAYH2EgB6TpMuNA819pNXdTxwewZ65DYkMaH6AYGWmod2wVfZ8sW34d4Y9Pda",
  "key30": "NAdcfQu1Mk2VfXhCxMT4CsapY1DUDnC4AomPSrAJQiP1vyCF4hY7uE13UcRLSBJwz4NWiCzBE9pjPoadQ6fmq13",
  "key31": "3Up6Wf9P5zJ1wHgLR9BH34Ynm7hXmZFSynKd7oSY9JewEDMXnaozXxE8Xr39GoJCT3hTbRbFuDVKMGQUyLH4B6Sg",
  "key32": "5mFD2f91CJRu7UNT1AKFU671qiDARaxT7tUKs8uKXRcNFoxfK38CNC1M8VM99g1i1XxvyVYeqHevYGYUhGYrxbUG",
  "key33": "3gyrroqHJhVrmEBQGbPZMA8GPVTUWhmqMLTvPcsRwhk5rKMRn5vZE6vVjdtCngFja1uq8YLdJTwFjxHftsG8FKjP",
  "key34": "2Y48gUauvHiJtea15VDEw6XBHxDyCkpqVZHSYUTS1CJa7z6dxnwoAuWo7PjKAGDt78EFhGExAB5b8YQYQ5gzijcn",
  "key35": "4CSjgsrbZTxxzrc4dhQkVR7pwYwrdish8ze87j3oT8f1gcTW1ieAqArfsbgoowD9sr7kpYVFdx3ymx7jmi67MiTJ"
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
