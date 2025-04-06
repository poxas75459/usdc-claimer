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
    "5oDx7DUaD25LEWKs1AttWjzF8jfvD6GehszCD3e1MQa3aE25PYze9SXTwCCPvVMbhAQggGc2htLEiW3gc2aUDyuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MMP5RUpxZLKZMHprsbG25XSARXuRje4B1P8EmDSGDkePezxA4rhUPdg4RMyCDVv3vNKY889NQwZoc1SLpkp3Ln",
  "key1": "66nn5gPNCCuKX4bA49EqtWZ9Rpnc6agxsvTYNV5KGirCr2dx1eC8731GL8M4KjtTyHjswSoctMwcb4Fb9paLVANX",
  "key2": "4zD5yjKE6LHKHQKgRqpSVbuFCYJBFwzkPo8bytGopumfEEkkRgymz3HgMVrHgucEyb3qrDtYrgj9EcWatFfQ8ATb",
  "key3": "4VAFFWDgDTNu9339sTyd6DGtGL3nJFkj7MBMPBCS3AhCkrUxjfuRGtAYJkFDvBguVRDfx6FsPayaNUxWzJvoGrZF",
  "key4": "5n5kvZhcqqwDkppMXnVv7Def8oGFyUQYwsFspG12ivB2VrjpiERfVjgTStKDRTbyMDMGFSGXzvFwiXV88ySNJLQy",
  "key5": "5hy6JdcGMte3pfbYqhpgGBhjCH1PkWJdw5D8CfzPhw6BFFwY8wRjcsqPNpNtaQWFth6vn1vGeC3B73kHrPwCtdfX",
  "key6": "39fe9K56L595o6u7sfUHBBGvChcDCrVhDMN1u5RTs2aivmMgng2y4ieQ9xzn8f2zqVripxJWuZLpUVFWWn9jhiXP",
  "key7": "5Zmk5WKsbTMN9EmsWx6szTBmsYjMSn8MuNdSz349bn6N9M4FyQa23wDBUfTPrkR6gh5HdacXmTm6nibcS82fihKm",
  "key8": "5RcEEhN3UXod9A9NkWpNa4dAxSmpZG6BfU7K1uYo1zPgW7CyX8AnGbHpnjePD1msNeCuU467XqnJ8qKBYM2Ykav1",
  "key9": "5ha3Xai2Hkkz6Jxdyb9QqL9hBZBoxXHFGCgR31g471ikzZo5BLu7BuKmaspoyBaazDftbL8ZF4vVhuykHC6GMLyd",
  "key10": "KRXf3aam8JWrMiT7ZcbrGT3AUW6wfjdkJtPGnPtg9XGCN7JFm9n6J4nEZoYio4D4JoeSzv5rPUDJWgZv8sHAMRv",
  "key11": "3PEGR4AjgDCXiN7aVGypbnswHvZCiyDaXmXyvSGUKueQ7HE6vejqpsB9tKA4KhpcgLcxf7JwzXPy7WaYwjUaVqwc",
  "key12": "8FtVGeoJte8uRMWB72XxFVM9pZWjgocFwi65aocZx585dRoq5JzAz4DMFdGDXczLh9t6YckS1nCWCstQQUaAHJs",
  "key13": "3Rjoi4nF82BLJMKgN9SaZhMfnrRxUiECDbs5hEmr7zqVQVPuWbjXwEWBEUmhavysGxvcdn655Tn9vZrvAocZA7UV",
  "key14": "2ERqqNGhVbGxj9gf7LNH3sJES1GDJ5HwHpPvmDJKdmRKcDwRtbtiHra5HZncHcHxgrsdT25rHUYoGiXF5sZ76caN",
  "key15": "3LJTMHJpnST1GstetN2q3UvCavi5tbUpnMPagK1gHxZvdrqCUZ2CZ5tAttHXC3FzZSmVg6ndN9bzMUBz6Hd7UE8F",
  "key16": "2VJ6978BFq63uGsiXi5pXh3jAmCj6YTL9TD79VqjB74fyyz72cNnFcabQLQ7rQdQi36Qa2tr5YqhpszsxBcoiQVC",
  "key17": "4CR6Fij9nTQBUMAKQwFTst7LH84oiEjZd4yJkLbZ1PQrrB2GbK1auTuSrBt6ADdHWxVfzmQCZGyx9bsSfYTH49my",
  "key18": "5Q6ZHD7vkbmQ7qY1UxRJQFuT3QisGHPEQE9Z54ki5rpY6SpA9xHjJTEwmGSHXUcBcyLw4aatkm8omcBZfmk4XAjD",
  "key19": "3iEhYVr7U2fXjtW9G93qLHQZGuJzWWJpGV2bkh4woLAhwndp5PeGhTihoADnh71SEnbAKd8RtpMCNEh4QVTpgh7g",
  "key20": "2gxZyWjwthUw2uqFtZQnewoPSsGYMkxFy52f1mMsGxvgtFSvbrobSSmyTDG8NrCJbKg5KsjnKVrV8oYbAcTXvcQ9",
  "key21": "F8N3Crssc9DK5F7TpQiHppmg55Rp4E97ZmpFUNJqb1k7DbruHvKeGTQUf62FiNccaCUMTbm7rPhMefp6vT2eyNU",
  "key22": "3ndCiQSUcwiXJh5H6snSBWnN2YPF8ZYbu6xywQvqznsYNZpk7rcdJAE7xJyNUGArVUW84bxP4ewwgYdEmNYfswwC",
  "key23": "4YiaSBcn7Bg431BCCwDH62xxtyu5vVEYze5S68YTZ5z8iarjRtJu6Ctm3PNDMgGVi8r3bKLcE4JKYkmNnmHhEGS5",
  "key24": "NGxzHh7YLAuwVft3oG8LrZcLdeqsiPHAvmkNG1nyjGYivqE1chjCgrba5T7E6mG7YX6Ma7oVdtMEuekpmfSRphK",
  "key25": "4ZjA1uYCfUMecyaYYuWeRrn4w8KRKjH9MkqsXWQ1Nv3VdtZ2vqJqA7wFYqqo2xF8kpewYPKq1NAHiJYgFYJF3Q8t",
  "key26": "2SEbPbfhRrj7gDAGhrPxqBCeBqfR27ddxW6BexszHec7SUHB5rLwvj7WuqjKwAybP4rLLtGprQwpJzGycbhLDH69",
  "key27": "341wPzrNjy3uiVaCqST7uLrGWtLswWYxepa5nE75q6iQsN7BKWExokmE55H9XmgZuspsgC52NU8twExDkJFdBh4x",
  "key28": "3eFx2JGTzTfNGcyiNz81voB1D5NvH9Bg3quE9hR5xQyqpJPHLPN191qYMABF6VDSfRnmKHcgKR8zt4G9m817qPhr",
  "key29": "4Ucf5MiBtWRiEiLtRP2aR44D2f8uwheYDpjLpsFSgZACYGfQj8sFrCx8cf2aE7dx2bd7XbcKyGt4WzRkrDQ7hCne",
  "key30": "5JtKYaSZ6sr41SdDteuDuEvXT1tGhiQnAMC6uh6XDXP13Dj8pvNRU9janEBov1S3HrtBm8EXrbMturDWDJc4ac22",
  "key31": "Q7YsxHx8E7iHBCEpVRscoZeyzKXYhLDQa7iEZD3EyHw4gcrTmGWhbr1tBsj3uLkT9Qq2Qzq82gLn9mHnCTSEiQw",
  "key32": "4akdXXcdLzkCwWJmKoKuwLqS2tEHo2PvZiR8NJo9jG9VMTQ3Duf5zgfKxH2cH1x9o7pbCkpffV4svDZhvDvGXSpi",
  "key33": "2LU1PHRU3DzoDrJtnbUtKWGBC52VUWAqQHU9GZS5QDKVdVkserm1X5shF8WrLHJcQGDg1xLd9Acf3fbu3EAueiqQ"
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
