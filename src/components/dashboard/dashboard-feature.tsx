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
    "y6d7nPCeaq4C9xmz73zeZ7B85gt8pjAcxTjJ21xYQHHqcnprmFdZLHmtXGu9quhf2Z448Y2WAdePYnxUjSKL7P1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QP3TjEjohv1RYivfM5jKAM97bUvoUM35STuPBQGzHJPEkui3ieAYCU87HcoRME8YWi3jycPrUxzg7qH5XssX3pc",
  "key1": "4svbDmEmXqTCY3xkD4qFkKdNwocGkEetPxQra9GeELxggWSCXBvMjmnAaQWtDvSNqSdmvgtCFLf5yfBMFj3sUqa1",
  "key2": "5ANZVyaW2pm12guRZXvLjsygbCqfUZpa4jhHRKTvVu6KuWVp61CJEmscPeExKJjBekjdBzeXXDXpiNfKqjEAU1qY",
  "key3": "4ZfiaozQF3iSnDT6peDcLQXHeFDMAYrdygFwdAnigqUiWVZiZM2VR73CtWGX9xeEjzT9tVdzHJ5ry3ekYQgcG4bB",
  "key4": "3oUVsdcmmndL1GpJZaxG1KrUReij1zcbpj9oT9YvSyo3e82YxCK51JyQyhYWX9oJ45agx4S49u4teDmPcvuMT6ZK",
  "key5": "5qdKon13ay7P4xWykPfys6JkRDzaXNzBfuaQMrxttWAreNGF3Rw1snqEDbGvvqA81GGKKmaLPiPXiRXiqNWqes8p",
  "key6": "55JNQxqtUs9Wprg1BDS11nju2Zj8EWq2v7XDbPzcxBqeUtsNnc73eY3jwgEJzF3NNkXKhUvzce4pmUtK83s8Suh2",
  "key7": "4i5vgNw5BNfiKHPtgrcFSDTwZ3WRWUT7QGbbESJj2T5yT9rmvRKHWDh2VeB8xDeNgJqyVCALYwSz8T9m3dUWPpXJ",
  "key8": "5KWq4nwYTaYYiRTy1g2MMoSj1J5yvpjEDokmS2o2UsLkB4FtLhY3UG3nD9dFFbHfjfrzoJWFEw3oygJDpTbJq2KL",
  "key9": "3XswfPRmCZjodfRdus8nLj3nr4xhBfe8paiG1eAMeCUovu63aqwMZSjAogkdL9fP6HQrrMWSNnH2gcajKvvS3ESN",
  "key10": "3x4eaTpfBr1UaJa8yawhib1fF9kbDTSBonN25adWeSJbweiX2z6LCM9FQNxNzNXXjyktzj84XeAk9HsfKsVERNkg",
  "key11": "VsAzDJB5qRuF5Etbyw2ccmCP4rpetjoehRxXecDftsVzhuGt3ntRS4uUS6rae4UzpCvSY4dCnuw9gqMQ4rD59Y4",
  "key12": "3FYMpacsmDkGrEhP8JeR2ZFE6fVkDZZWCEF4av8Eiu439hPyeyP5knNhy3RcyKDJz4GkwF9Jsk5nBJQKm6cGVFti",
  "key13": "4E8hhmBV4bXCKcw8UjjJ6CqZ1cppfmU5dqw22NZShvdwuibpKPPL3GXvTq9hnuebszpvPevKFgh8d2sZoJ5hNTq6",
  "key14": "2T8oShtmp4DM7NQPo1jhtBMQVc5FPX9eKzQDqCqkLqrdnourepCMDf2bUQFDeeAzzuQe7QW1JsrGqtFitcmLtcxJ",
  "key15": "2jPWtcHBGThaaifFayaVhb8tqDLBRi7qLXUKih88boQ4rdt1xCh3fvpLwzeXo84byc4yGn4zN2P7GoPZC8TA68SL",
  "key16": "5mv6HxMpUJpvABR5f3pfWS4w5Koe4RptuVXd1bJBvGTQvppADEWgNjNSRmQNrs4Xuqxg1xBo4yscaJfCtX4woiG1",
  "key17": "z3QL14fkA2KuPBJr7f1Z2Ko6LbbKfA1XhdteGWqYSTBs3mteyaaxFv9cFbbEZCeWiWiuEwpTALi4nttMLSzFagx",
  "key18": "5CxwXQYWtBigPgZ6F4Ytej3kiUX1aaM3NKeeBkbtM4bBCNjrUmEKW1iyodLM2jUr1yAr9AEYpwNB9Up5HcjmhkCo",
  "key19": "55yK7Zsh3JZk96aLjJqMtJAxggbaE5hzJ81n3p9ENbviJWiZXgpR1wUuZa8ZUZ6xy5spSGCbiNikYc82CwNt6DSM",
  "key20": "3A1zMaYGC8NGybL3giwev45tTSTAHekVcSAXFSEVeK4FqjnkvBp7RFMz14DxACS6wdZ6448PUzVYuRfcRGMauxgT",
  "key21": "3uYwbrPP4A3xphdyZEeAT86HgzsrK31Yrw5pAvUjG7wR9XiEBHYhD6Ppab2gAzEaG9pNHSpMFmy9c1JEUZ81gwkt",
  "key22": "4DVtKdxH3FuNXkKpm52o9whbt5xZ8SyQNnDymtDPAmG2QKdsioHeC8b6BsSREMpiyjB5CXmdKXFqGuddjDZyWNgz",
  "key23": "2eDbkKyRXuhgnzVS4mFQ9FNNqN3P7assqb2tT5ZQJx9N3uNSxqSW61hPc6eqP4ThUDNHCNX27KiYUp2ZXNNaDUrF",
  "key24": "ecfjzvrGq8SwXWXr4Eq7aKgtouVptLEqi43UNJyoQE6mJ5s3jtbLprZgkUoM1x1JJ2W2e2juYQ6qvbRgmection",
  "key25": "3B3nG6hRo27o1bqPrEbUQfCJgxeDKRkLQHxFBcbiPrEpL95Zutbqoa24ugMDkbwxtrLVdt5LLbewyY7DdDd2Mcn",
  "key26": "2nQ1h9boRh8zBC1YwqtLkSbu9jdCdpF5PDFnEn64bZwUGQ8RFm3mAePtm1xL6S2DGdwwyhbh8ykxvdCbPqESeTRT",
  "key27": "nbVtivxDuYC6oZEXGTTSyH3Qgk2EkMrWuULBgLVbC9SYcrg7EvXc3mMUtiZ4zoW53QEijg14vTgLtpV5T4FFMRn",
  "key28": "3buznvZakbVwsPyfZP84gxaV8snPgXgmaeE4cLbzYRRyY4PiPC6mCE51tZnCKk4hoe4KrHkoxGzPk3CtPfzpYMoc"
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
