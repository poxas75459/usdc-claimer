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
    "FzJHwRReeSYzbhHctRmeubDU9yaiN5b94aBrJ7JKrStqvCPjXS3zF5HLDxNoa7sLTgZoNwezkC4q7bvREzDaAUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hKGKZBqgSzr5fzmx9AXZT9NcsCRZEAfkeR8nwk89tFDgGNduhd3SVXxvKdo2XKW8jXVuH4VnAN7mmgHvZ2sBwj",
  "key1": "8Zw4TCmxrK4FFW5s3PJiiedjt2veACYrbjtcXiphTZbwcMcvfN7uXLopskx4Dm7C2Gp93dkFsTeFEHV1NaeHufy",
  "key2": "5BDcMJycAwNAacnM8RkQnGEoDUomjdqpybCBdecQroAEzY3Lx6kBB3y8ZXqyFPkkT2wiTC2HAKqxZCp5syE3GoFd",
  "key3": "2ASNcENmMSwYnZCA9v18ihXCmcS955GMnLvj6kB7haEMbLwrgNyi7e48Nh7NMAMiqLQamLPRUYU9H4wvRPHKC1FJ",
  "key4": "331DaKP8syCqw9yaQA7tUhEyMsYQ3NFHS8TicH2qj7xVe2C7GBRg3yMPAutPgjDoDSFZmKbexSTKtf6a7P2oEwW",
  "key5": "5jboEgmP5LwBEYk9reQeDgufwtFTsMsteuZjtcouVqyK1aCg4DAjsjYqa2tYKwwVAVkm36xb8nMR39yAFozFEBRT",
  "key6": "52kX1HZatM3RGBRT3HBSWWakcuPCFgkgV5wbmurYMHo8Swgf8jVBsKe3RX9MzrdxwKPfwTMZxVMe4SsbLEq73FnJ",
  "key7": "8wxXPRHuSh3F7yfQHXDd8zW5dWbmoyKb9C2Q4J9QndFN27Pz3fsYFMcX1GWk168YcqUPrevWXCNBdEz9fBLCbDx",
  "key8": "4kvcmavrE92qeND9dttyYeohgqTaFeFPwZNoDP5B4tKzpL1Ynn6ofz4xWPvLN6NsJV8Kb6krFc1zqwomVcFR6dPN",
  "key9": "2HsiPb88T63cMhWXFA4u9uMoAbpgjpa1y66bihVJ6cfeofJ5cFR2xPe7LfEyQCpecSUkzxsUcgugPt99fzLtPHr2",
  "key10": "55wKd1js7bAjDWnJd6zX3iTCMfMpDxHkwypvnryWkzMLyNvnJWtuG2KEPcWUqjbsUTTZgkuovGixxVFFNiihb63f",
  "key11": "4E8rnGa3Zbi4JJbxzf7iZNEhAGCbosSfd9a7L6pHeat4j77XT1EFfrdXgtAFLcgfc3Xqe1cbYkLScbTNxQuzRfKA",
  "key12": "5RtWc8qaksQFV1STPsThSqgfPTBQJaHhtMVACVqU7kP5i5tGFynf5SbH7R5u4ZF338c523o3Nc2YYczQxQa6vt4H",
  "key13": "r5aeTCXhyetEBfKBsN66dw98Guq6bUmKw5uXL9Lt7QgPbBW6HdRExK6cWGT6Wd7E3zUNDK62RWeM7Aer4cdy8PD",
  "key14": "XF3cX7FLz6Djm4nULpbfnNiw6idfcEUzmzHRhn6kmudmHu85tmybep9akXf4deb1Kufnd2TtgFR8om8hCXVSYc3",
  "key15": "4G8iJLAztMhM5cDJfxjuaMo9iEpsKRCTxQcAyBDqMdm8R9Leeap3dQYJCUSeRN798NQQb6mMrogXXUQSMSzUmNBb",
  "key16": "56gxXcTgo1PAEyu6rCtiLL3yeEGGNTUzQNCas6ad77TYBXQKDBHhje9j6vPy2isVx6EDfiT5Qkdua7dJ2Qkn4r8Q",
  "key17": "46m8oKFH5Q1iMD9BZ6UDJNCR7iofsYKvqWKGnTEZ3ChVDRmo96iySyiHuHVRpXWawRixxWzhjtdDT35mc7Bm1xfB",
  "key18": "458vAUYCEQAUh64dmKz43mLdSihhnb4byLZnbJ9NTSBiB721eACzUZt53rkepPAh3Q5JdDL3rprEHciXwTVo3ddS",
  "key19": "2R4svBun1s2FQr7Y1a4vUsvu7tJKsXVFkAXscXWRnsyMGekKy8F9LPDQMNSWrDeVs5vRHL6GdD8cnGhFXkQrKgCR",
  "key20": "eYAS2p6JWArzRWHvgC6LZTfccNZceyj3ZDcpz2CThRLPGpTTtUnqxBPWvCga2PfzZJcBmDLL2hSDTuRgY4Qip3y",
  "key21": "3bZpwr4gfP4RVKh3QDoXx9FJDNupaYcfj7XFdSmUsBLSMmbNU9oyKBSbR8uCNZo1hWnPkkE7eg9Z4imdLc88r8MZ",
  "key22": "4GMNs995FQHZAdLsJzVMXX3j8UFiALN5ZsEcauSQsYxeF1v2khYvLrx5HWhzg2Zgp5KCEsqB4WxWphodmqrFqbq2",
  "key23": "eGjnWcxuqdj4SHaN6gxZXU6uNKdm4mmD4wdfmxUASbpjDvtYuyz5kpGW4JVcPqxZ5VUePKb824m1HXmsQPxE57J",
  "key24": "26WtuQv8UNfixjLNhuinFMoWxFNhGm1b3HiG4L43JErMZLXN5jTJuBAqkubKPVVKA7rrShbVH5rwruXJa9uMG882",
  "key25": "3e9CcyaqJDirConJVjAgw9GXfdcKyNJvRRkkBd2AU9CkKaekDFESdY5yZVKXsY2oANDwg23pEGDnVBYAQHGD6fpg",
  "key26": "4NaJ3594uxssxw14p6ZcBwLC5G4fDrNjYdtPEoKVcBWGNAfdj86RrcrDbGhbJR9AFSHeP6mKTFRdi8DE7Ea9c2gk",
  "key27": "Wg6hsupKtBdKikRdVkWVcL7tsA69P4CNcuXdZ2ZQvtNTQAp9Crw2Qbcs6sN9EhvAN5REerMSZJiECyDzVZsLf1L",
  "key28": "4PM6j3FF4LDmY1bYBi2hWm9U3bV8fYmy6KuzD3jv2GpaNm2Emp1nrarKdfJErqod3jK7PJRyFQGcfB8dbC24fQg9",
  "key29": "4Rke4A6DTfDCtvFPcU3dYfYSjsM12uD3H6TSivj7T88M4YViJvmwgRNzLU9vkmZmidiFVZbMcjXnqocmfmGfouCD",
  "key30": "3BYiw5ZohHy53WUp8Ltq3Lkpt9JkAsSMvYFu7rjj1k69b78Z1oBS1fZFuGiCpiystv7mKCtwkbikrxgMyUGuTx8C",
  "key31": "2r9XHcWsW71JbVak3syuFcN6BkJubrVYG9UggL6TqKXUxde93Rncffdc8fHjCQyqxAveL4s5qZQvTB8PXviPs7ip",
  "key32": "3rooxo6Z1KrjB4dbnGpEN3Db2DVyaNJ9eCmtFfe95ofPHBp5oVZ1Qh2BMQECWxnTF9gXT3it4VX2JyRtgq375A4C",
  "key33": "rsCZ36LQPJHw3sHvk9qfFBbXWzmBCE2zX6Uq5GPuohiMnLGspBdsYHYp2EyZMtDxM2zNHGgpbjwUVtS4mbhBTaQ",
  "key34": "hiRH933ZYiDeETL48CVQy13fC2fmF8hP3Y5bFsYTVgwLfM3BWgKhLHyw9B5f6cvEEJHT4QjPSiX32WPgyaZHqcU",
  "key35": "3uGnkotztZLYBRP733E1psgxAvbFWwWyRsB2Mi69Hr1NZNsXjGqLDUttLwJY6gxMQpsBaqWNhPczcDrk9vwXBLbE",
  "key36": "eYYZySq7xibrQimd8taDgktJE6x6gXYRertUzyDvxvyGTksVYM52xEaBBRPwajwRTjJniaDLZXFcJ1LgbSuZViV",
  "key37": "gKG91SXfjw9UchYaMLuxGrkjH9MnU7vTqHCLTh5XXWpofm86uS2doD1jw1tCfqDuAgo3ETJdi3c5c34kow6mkVQ",
  "key38": "3dUqgXF6m66jsfhKmpGqfyaZpg8SCJC2uGHsSua22VSPTAKudCpWfe3oXUznQgF5fLhYDnycwn4bgGUvbb6YayQQ",
  "key39": "UxPs2F75tqRhury4r4tgSzv9WzMQEUV8b5tUSiCBUAsb9S6Y5jY5ywEARrzUaZ6hm8b47BaZcjQ9pNDN1UdJdfg",
  "key40": "ZtexyUDR5jKPxpmk19NDvmKB9Pr2e4qtYaSutE8nP2qdFjWJ5skgV3tiBs5WoCy9aZppmz6Qfw1n8n2GfHLGY7Z",
  "key41": "4rs59j5CFPuQpV1aVtSjvPHVH4kh7dZXw2CoCoHEg9sSBTSMPMmr6kPX1wjwEpam7N1ixAtC9ujJWxmzju8MavVy"
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
