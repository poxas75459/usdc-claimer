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
    "24UDThqr74dG4Wb9STtmdp5zbdA4aVZvqzZXajo3YT9F9x4xTGMMHvsgwALB66LGv3SaFa8KRMUu3pSQp9TQU7ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67YoF1rxwpTAgfuL6EZsQVR7bhRq7UtCT4mifgXbph8YZ2W726coRjHsd6KwNyETj6ZyRzSJPnStUnLEvqzBry9",
  "key1": "23uwSxvf6w5io2QbmZx18AN8K4rzNf77RJMKykFrgyjjHJBo99hxf5KhMVU1HsyhkmJHjWMXNganisB8jAXccTx2",
  "key2": "5Jky99doccDKAMQKkV8KU6pc5b3Y1CWQTHPvp3qiSBix2uQvXDRj5cXNfZeSh4dCPT6PpdBxFDqXEJLGeLvL1g1x",
  "key3": "i3Eomk68Djaondk17wNiUtYg1woN9Yf2NX357V3iSYwvH16fPHnDQAfbDQM5YPktSz4uMyx2AmVuxbsfVdVfPW9",
  "key4": "25DGnp6EgwHQXFs8WXNG2PFr6tMGxwHxUTzvAVamatpbevynCu8BXjWTXiaKqgdLqx9ozLdZt1jRFtUKAT9AiyJu",
  "key5": "2wEYupgomkz2uEBoK77dPNKfhcAm8BqEkyA1wPao9HfP7CWGAzw1Y3fEa8NwtK9YDqfjXFNhiZtLDYQyYtkBZaTw",
  "key6": "4236w4uv42GKHRoBBSuPyycf4hSzirw6EcvcqGbKrWtTJQoSviFJnHR1XFokpXv3MMyk7sezFMUNFT3N9wDrtwCy",
  "key7": "3KeSxnXNikbJ7XKPHCJfiJpcVXMdwq177AWbo5c6kYPsgiC3gwWstsFwq2qT7CruPpWfeoNYJF8Sznp9mzfu2XyR",
  "key8": "3iDBLzMd4wmAzxF7n5eosKmbeoimn34WUQk3myXBB6yrwNwcTSnESwC8KHZtBXNSPafPHeLVFJkJpLhBCm33GgMV",
  "key9": "3b2Hs4UtMqcyMQdhDiWMKsCefveSvGod2BNYb9Ekj9hxTC4e64NiMQSJDPHivtdQXtoHxSrkVC7FZh7bwpe47vzN",
  "key10": "22iEJkWgaK2dknynqodewDCfwCM7sux4Xkfow1LhNzktFoNCcevzTK6yHs4xuWoq776edhenPhXCw9pqhkwsJqrA",
  "key11": "8vCRxD9GfiitdAZ7BMK7FBKiTox3oQ8T92WfUkJtQiHgnWEBhiU4KzDQbvTcchHvDBNUEqMTSbmgZ1fh8kHQiY4",
  "key12": "52yEo5UtuVdhJx933WGtxNZN3v3Yt2o9jmqwoBBpNpcKWiDdx2nzdyt6JxrR7BaJcC4XDyZYfxARNZmCPdcSLXX9",
  "key13": "41YPypWtL4fHL3h71zynnvmPJT7GS4EsMfMisgnJKoxbjehsqqNRKk4JwY1JDJasRTdDJjvPYTX1BzMVakk5Dt4e",
  "key14": "2pusWzYmtTCNc6hhndnf6PWJzajPru53KFzxD6YKm31GRKq211ebPaUh2gDoyLtJBC4rQqKs8hAb2CtEGgHwPw9C",
  "key15": "5i5GiibxtuuUBACbDAqmZwipy9TX6B1cnyrWiwLALoXYtUkCUCuDCXQydwA5tYwdzorcQDQwVLLwquWRhzbQGcBk",
  "key16": "3Kc3X63RjibLbs9JnWzVQP2a2nFSaWwk138yQp3PBuikaCR3wYxqxEAuLNVNxDmSVqCfcHCt6uZ7KMKuprrSTre5",
  "key17": "iBhDzVVUupapSKHWm7f5E2WweHk3zyfKk3NQdhU1to5XdZMLnGBRnBV9ga4MRBfz6so6RsbDKS3UAqW1gKJNt4X",
  "key18": "5KE7BCw8ARzpC7jFf3uEw8XqSkGtQG3R578TfTbVdkPddkSEtFQeJ3VaADbH6VEv3mVT3s3D1QiFJLzgaj9geb6H",
  "key19": "BA2pgi1phKAtH6iQ1fMo1fUGa51XzfLV6ekk8mHHoHfdvaArmXLPP5dtrnKAA7MxTRgRaz7uQZ2ntCe5rYf8ffG",
  "key20": "2vUgqogSwk9bQ3RU7qaRqbrQswfy9JdyhxRZ6WEREk7ZLKJS4KcvNTwP5UTiYFDKjt32unk2tPMkPWLjfVELkM1E",
  "key21": "5EJMeng3fNEgm83VzQJ9aAxMVwDU1fNgNDU4dpRt23N4haRyeqjpnTUNnowpzAaoYBhDhNeBJxCRw5SKbQZtMZ9h",
  "key22": "5hVrrYcxSQhaZdzdrubwhMu4VoKVWE1PRw4ZAnHaVMBArpNnDrBSKQMjgQGzRhXzmWJCcS6svziRxxQvTpvMd7EW",
  "key23": "5MRtE2UaK9fvymGJDLCRf8oh3spH24GF6Gqr5jbddP1tKtUfAGmp4vF1wbTSLwBwKScWSUuVcFB3NXYHrX5xUrzH",
  "key24": "3421cJAFGpghXFKyMXtmtVBizLJeV8br7eZ5xNGfLA444ycYFgayLEyj7Yo51fg2ytyaX6P6XZZ33aRZRbn5uH5r",
  "key25": "2BLkTsP1KNazxe8tLeKeUwX6ZpiQXGwLgJbAe7Whv1CttDdb8nbkaVhMD11zT5CwohEXuURxR11HPa5YRGe3wbuM",
  "key26": "43JDXVr3FqLqS8NDJRiBPGPyDBxTTdD6YAU9yCmAVd81uSVDFAbtQTVoViVNZv5EiYDh7nn9p2QnDZ96yWiahoUV",
  "key27": "33MmBhGCnm61r5JuMmhd1bpGmXAcZ2Kxrc8wVhinXpynkeP8UWoxorwmzGuuCB6RUm59dfJvZ3tiBGTYQDUUVt9i",
  "key28": "3wmKeQFf3nUAzbLqhYUDxtEweB1qi6LUdTKY9sDGAMmzREM6potW7C5FfB4Y5mchKtJzrHP9jRgsNTz6kqVueKAk",
  "key29": "4w5n6UczvkCqdAZdVztSAe3wp1iRLiVohtAooanXbZrmRdWYWGx9fQpY7empzacxbm2KoVVF22E3R1AvXXYmwjKd",
  "key30": "NPnwhgemeHiEFoGppT7GHzfhWPuPZTk1Vub5Ngy14jK2Dx8QuyULSkXf4u2unyxfysTrZjFg9nnkahUYfEdNwi8",
  "key31": "2hb3fDcCmnWPE7wWLHvD49k9aLWKKy7Hj3EWgY114KBdQFhg2iQyuWbTiowyJVMfnaLubM9sG1cZAuT2CSF9QdZf",
  "key32": "29UQLw5U795pbybqu9RrLwiBE6qCaAXqdtWRXHD65Lh6u7DXUthZY8ZKkRGrjApv1rq94oRzYY9GKXwrYHQhHJ8E",
  "key33": "4t8w5RH3EHRGi2cY6CSLyEqLb1zcnLgJ7J81sxZ4gvs1RF5WTMzYiJhzNATy3JyqJoGHhAJWCH7n16rN4XmbkzXo",
  "key34": "39KFg3BBEaSJtcgLVt96gwHCm1VJD6fGavqYE4EWVqDBKKvk933StT6mqgL2Tw72Z5h4dNxYkyZ2oMvWKcsrVimE",
  "key35": "4WEWb8dDe7gxBhvSpyz4crXX5dTh4ZNiBmyKCRrotVpgmdS258HkeLRmNFEPwTkgse7gzUXJpAoo3af8Y4KSHUAv",
  "key36": "CCr88QCkA4s8UbTTohhb6cUp6m1Xc39sYLxNm8hWnUtkTo74wsHKsPS7f3ic4fWdaGdJHNSZiexxgC9aPgTwBDF",
  "key37": "5EPiuEBfz7v6ULMvoN2uAv8qMdwETZqj8FB6gwV5DBzua4zWKRzGZ3K9bPZoGP9DipdTQK2HaYjSpLxmfMb5pNQh"
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
