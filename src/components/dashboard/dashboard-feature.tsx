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
    "N5PT3NZPxoqfLbsYm2BGaotD4w59zZGRtseJD5NkN2CWKWDbo4a1Hhy66CJAaUZbh6tayZmzCjgc21BSw1AG4ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Hor8nDvnT8qHL77RbAnm93rkfDoywq4PCprfHZuj3Ub6un66cESqWbA9AQpnW3PFM4iqegLiqjJLH9pCNmJdXL",
  "key1": "3aK4XfNP5fQVuJosY4meVUJB13F9RcraBmfghmCyvsJfPA4RMMuwyX7UGj5LtDdLdzmUkVMPW7AR6HbiL9QCPCZo",
  "key2": "4EAcimNR64LX3GaQwVuemJfwbNuq1qCwLb83gU3UFe8Xk2HYm1XDMXhXgkceGZt3obYF2h6bzd7xuqPXKPWrR9sx",
  "key3": "24FgPKaVRxoynAZCb7GFXKLmVqSFmw8Pwndx6JiE5brxaeX8mFjsBF3PMRhWv5XEowXM8VBQ4mqreZwi3xZWce59",
  "key4": "2YbogerXa2W9EmPXPaQnTa7tpTR2Wtmw27P8DfTeyAXfJqSYUMbaSPq1V2RtWYFPKHP9bP5CRsXxP9rVJ6oAuMEW",
  "key5": "yeJfJRhjBhkRfXrexaZgxYDzCGG6ooChrteCazMB5WJLHcamT8cgQe9qgjoAjThVQa13iC1yEinnccX8pBZtymE",
  "key6": "4zBn1SZQuqfm24AR5chLyXU2YtDgXo3E6oLfFQtiHnMaxGjcvV3VcctAMoYFRdPGebEQC3A1JYisi63jn9qgcyR1",
  "key7": "5LgjExyo4XjrLwS46njU8mpes2AuWbCP53yWQukNx63cUTYzBCM3531WaxppgGMBk76m5nXE1PC1CAzWym1dyPhX",
  "key8": "2pDUH4B3bYfS3i2Dmt3e5KkW7NePZ8tafFAtaesBL8Ygez1EoRJP7FxHo4eDmtXRFCckmpoZ2xfdufUz6LdDcPS6",
  "key9": "x7bA9WhuAqFnLfZvkASLMshPYmmzQTv1ZQXa21VYS2sFWYG7M79AtL6bV1dJDRULpZFuZphpVYmP2EPXZPqSJoe",
  "key10": "35oe2sqHbvvBU6n8JkWTPBFtkEEJX9izT2kaAvWEqEHRoBj6dKyCGBaxoaoczMZpEGLpbKDGMHhXVYjCM9WeKDFc",
  "key11": "6766Mcvri3Hs1o6vbQgg4KxHoBLDXXnAdVnYk6GxS7hg56GDGvkCmLjm4GtUxoiWaPrrw3DG6S1ogbTDgnNgvGp",
  "key12": "ksPNtDqyuWDGyqLDY5UtFo6BCUa4nqa6ZLPAZum9q5ZCzD6uyYFwPUEpyXZ4rCcFaGttTsGiBiMiShjVi8m3eur",
  "key13": "52BHNs8qpYxa8wAup1J7aX1mBRci8iLd5KcMtuukc2Radt6CYZd2bnn2uA9vkyXhykNSztSspUWxXkKo26hakuoP",
  "key14": "5f8GNvhtGd8HWeBBUzGtJuXaeJL8UA8Mcfb9xmBRKZh7tXV9fUcwPhh1d223C4xX5bALC95aKY39x2upxwH38HcL",
  "key15": "3Gk9UpqDLdd6uCbbHEm1jWCoSh5CHG8wmEQ8fD4sRAzb43VHgWNzT3q9z4WhTCt14Cn7i76xknQ7QDw7z1RJkgoF",
  "key16": "4674wp8VkaKVZkz7seWMq89jqH5r4dv1sxNCKj6GujDzkXdANXX8nHsZEkQPhkQX71kANoANTAspEUu9tGMxH8or",
  "key17": "3RoLLU7kb5URM1rasUQVLeLHTg9kiYDz4TxVUHk7rfVJdqZx1kNNWxDXKct5nLEUhQL3ymbK5BwuuSY6cqwDZRqd",
  "key18": "5pkmjvTQNaw5F5SSpMHPzVYVCkRGFLyZ9HNfQcTxKevovfQcTFP8Fb7MuAjAcbY8QcUD6vHd8MGTeZenxwESNced",
  "key19": "UaNjFeaXMdcdddg6J5pr3nM4ov8UGKByCAeucJGRc8o4ZgyfzX3kDY11ZXTiaqxCPG9wi6t7pPb4JmCtdtypLNg",
  "key20": "4eob2dRD2atY8JMjQJdYbSS1hLaToEHHhgfmgGEg4SqTdVq5Xc94NvTVtGmpkAUH86ZXqYLj15j184XakbhzcHzh",
  "key21": "3bRFwu6aCsFi2tyMMbmdVqj7Ch1u4YfoExQUzeyBEWtghZPp87eV4ULydAhsKDuGNsJfayg1RDJ52pEVnxoLBxkM",
  "key22": "48SbzPgpuSrwAxMkBpsRhNRgorR96VFXkpWb2y2ddwUVKwfxZ6cHH9hbGcgr79sbmBpFne5PFNMW58rezKricjeE",
  "key23": "4YXDVecpjREM5SJT9q3XbBZhCQTuRKYVTgC6GKVSvNitPqDAmFNoPUCgPG1eQXKAekS1UopyCqcsvVFaCAEePjxm",
  "key24": "3qFmGZPPjw95FF5EqRhmfnzRJN9hTCPbph76JxrrNSDxUbqaEvAKEbTse6TkptQvZ4hXvgYHVywZmuuaXmyoiM9p"
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
