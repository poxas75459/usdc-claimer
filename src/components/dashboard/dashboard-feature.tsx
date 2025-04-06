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
    "3HUMyu1HDsThMQPpkbdZVCQ1epmy74mCkfotVeMWJYgXSyZzYw9o9JuTrsDH5oP3PzTg9EpdhJhWsFCV6d38ys7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLAdd6p3HwcvLwWo77vcEJ54kwT8cJXpA7swpRzxuvLUXTvSPQEEpBs77vhdYz7mBJrBceDCcjp1LJ5dJbPJiTR",
  "key1": "5fF3yfQZGA5NeZeArE16Fr71gLQ6waJpzRQnqgBE7WxcMBgdCoQxk5pxyB4gqmXsu6LCmp51gAyZNRMmed3KiPi3",
  "key2": "5jPvX7Dm2619iA6kZRzLirLrWEqqReBtJCt2EkjmUqBhhY9uoQbYi9GkdMUTJRvHnXWUqCYZDvm5ofL6goCrxaq9",
  "key3": "3E96G3DkjjeDJy9eo4shjSQTyYxpNRmvKaQ2oVbN6qzByWnFQyKQQmtFgQThxLkTF1estLPehdbtJpCD5JQ7rKiH",
  "key4": "27Jw7UrUzcguuPf2mNd2FB6fqZabMteevW5t3aF4oakUvMawRGrfmPPcqTsUo95e6xX48BGJgkTQxuSkcDu7BPNw",
  "key5": "5vr4rghyn3FuqHZaXz2cmc9GeyMnEazo9Vw75WPtbzvHJtiCPzQVBSrVTFfFrtd47oSnvBPpAXH17RmgRH9V2xmU",
  "key6": "2TZoFp9HCyhsMYgmMHCwWf3b3Po7zvgGYuANgET2J7JRGvjEGMicn9ER24Yks9rk1jQiZrz51DPEjDFqvzSnBuXe",
  "key7": "5zxPSEpPoGvhkVuoVnSaUD7wLAtEbF8dDZiCL5qepFsCkDZuemzE5wLkSjfWJneyWPNggj3W3mE5HrYAEbKezw9d",
  "key8": "5A5jpNME1EWzXB59hShfR2CUJVe6rPdtpFHre1q8cxGmhty4KsoRGbrmtuLQ7Y7awnZScdWpfu7cnDLnzUaiXu7o",
  "key9": "2sBGTnNV87Eb97srFHqCTuaaqsrZFFiqfsrC14gtuW9uXu6rdJtEw5KsuRFxFERRhkhRRUEbqK41phGJEgUDuqz8",
  "key10": "5deztb4yZ3ofV2ruLgVTETMxuf2wxMqjseTxUAzNUfuwZB4NMUvc5W34qU4apj778TDQjPwnpFwc92zcgMRPD7KG",
  "key11": "4HrqiFg1DBGChtgKRWjc9TtXBrTTqj3AksYCWAKk321ArK9nALSCPkCSoHsHFu8VYhyJpYVq9UD2wWwjt37NbdZ1",
  "key12": "dBL65oA6FVwoMFSqRsm39JM28S7RF6nM8s9odWZpBKSRb3fxVYcCJHEouPLFsxuBvTPShvFkCxMUTd2Dbr3LKXW",
  "key13": "5K3vexz5pqt1F1uaPmSmoDsNGDkGdBTU6BpzktKR3KaLADcJJUATxVm3hJmVG1mVT55VTF1VgXiGfMgKWoNhX5Xp",
  "key14": "aATpJgWyA5jdjxWNtZ9J31NG7y4zStfTRJq9zsuMGC8jgcbtb68KjXf1RsxYxTg6kCNTxVivCcmA5dyXnBkqnYi",
  "key15": "3Sz6hjcj4qDEv4BvKy6TXGFoRWNZjxdMA9KA4TbiYjJSo6mMb1PKyTM57QwuQvGUVvFKNnSSSyDt7UJ8HSmXSP93",
  "key16": "3AwqjdG2K8Yrd6AdqGb1786MzqskTXgG6zeKNFzg8nWLxKB4jWoevXUpwhDyF2GQyK4ff1emT7r8UMM5RXVgc8a8",
  "key17": "w8DcowYQCMsXMF2Wbshch9BNHTcqVeanmqw7CTY7irdPrd3aWLrj9gR5qaZCoeaYwd1ccwHPtB5Xtwy2q6h4bt6",
  "key18": "5LnpYdxgX9rxTR1WBPmff2qjUXjLC1LHkxgGLkJwogkwPZRQkLByhtHov1rKPa9K3PYfaQWZPLvfwzMs6oHaSWf1",
  "key19": "7icfCDbfEcjv8FLPFadVFKuvSyAHEP7Faeucps8Uu6Bny3f6ie4NouovWYte1zQ88ySJYTZ3D1TVAGFaQH4L2A5",
  "key20": "2pWMC9YDqfyhqURovxuL5TwJGVuepWbShq14MYt4YsB5bm7ft6T92TsYXzBXV1ebbnhrUD8zLrqNKFvEP9FPsHbV",
  "key21": "4wMhnb9q8ENUqTyZuhE76UXEcb1vSUSGTGJnCDTi6h8uN4cbdRjjXoCxHT2ePxRbVezniYywk6LyaL85pVizqTh",
  "key22": "3vwFsdPht5FrNvB2DBk9U1vGnGm56WkQMtJLKtFddPbepVFJtMfsDc69qTTT2ReNAaYZSYUzAyUvFnksvguBjuTW",
  "key23": "5sk8S3kzpn268BeojanBJKjgGtTNtUjPbJDheZsHazT8K8KWovAEUHapN8mVfjEhoTQxtqZtNGZHhw3CpQes7veY",
  "key24": "2Nd6mkfohopAk3xUFH6cf7qfqpv8dFaYjNQwQmJJcd5uhhaNs6jMddbJAeekEf9TB3n6HkJXDn9TpXmo1DnxypvJ",
  "key25": "4rTqL3Lqvutn9sBqwxzWyQLwnUccsJ4nCSnhdDWpbyfrN2jvixuswCDtvP7PFQuTbToZmmzGUfF9wKUsiQ3FeHTv",
  "key26": "64VpnsssSJkp7SfTTpvMJQxeXWdRtbPQ5PW1KH7895pUVJUus6PRawp3RMZerDsn7d6kBmg4rEWZJfUptBq1yyGM",
  "key27": "5F6547VMNXK41RYj3CEpX65gD8hFf5GVZAbkAeEkAW1WGTCmLbd28FmLAwGhZmmPLK1GvFFxEWcVp56WwS2G7N3X",
  "key28": "5Jyw5LusDcbguxif7TeEF7VQq1TMYPYV9HMrYZPMRS6JjVveA1HMmYUiDQSnYu43EBw7w4LA3SdsXg453N31VZuy",
  "key29": "4y3gz911fYpH2CNtaqu3LuMi7C8qHtSNwSqc98ayxhFrZF6uLr2EKJCXipHPgg5kPVjq5fAxg9idxMk3gbVuU1dd",
  "key30": "4kxieV7eznJmjg68JUTeXDLKqZYMbSdB89CvTiEaEH5rcgmW3j3UmU3bNraePFGWA5JRL4GiG7Z14CQJSFfzWSoK",
  "key31": "4FTBRBUa45NjtLaiPTrKY7pPTmT8k9XZmZ27p2ZQ5DQ1ZjQHPQ9ne2yQ217s3we1NMpH86CzD88NwgcCVcaGTEuZ",
  "key32": "2J3n1MWKdggKJQZnUVZ4jP1rxfiuWFBB2t2vWXwgV5ZTrSGg9JpJsM2J39r9FBeLEG6A3mZx5197eTYv4zRZQTCz"
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
