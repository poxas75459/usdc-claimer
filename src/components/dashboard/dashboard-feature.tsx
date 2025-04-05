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
    "2hGEDzhNGDBichqcSpCZ69RPG7kBBAF5eQb5KHNastC7PMtZvBwKh1oaYYji3KUG9fCjL5f7WfYpWHBYbr61XEJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FYEvrb8BdncevGfpyn2PRPRxBUFGTvaNLEgpRKLjUAehuCK7SgjT2e4Wiex8ZpUUqPNq9BoCST57pAXmHKkne1",
  "key1": "5em1ZAiMQBmEuDd6C9upkiJiQ7CVfPE3K7LkXqcYA3BGc6KmJJfqHxMs8EUgS69dP3KwyKp5qmnHHySoB7X7pRsL",
  "key2": "3eD8n8z15jWwDJTp62i8BEMxtikHFh7cEMTNf78yoMTvzvh44i5QZhwioHmwdNG7cER2pVmgDVYNd7qXYBJV9VTe",
  "key3": "2NbtAFu6kz1cPyGxrzSLCDScrmdyhjrnRCxgwcqa4MCMX2LLTRM2SE2xX9ETB1bVo7HeK66LVWTtY3Wko1mNQrvd",
  "key4": "3vZhwGCbsHQ8VETBhxSr53sC9Y9P2hLAi7f2JPH6PwN7SQdeLpHb4WLLdZpN9VLhjyKp1VQauCppjNs6u6qEGVo2",
  "key5": "4ErNhArTddrUsaKU2wv8yW5T4NJouWNpcQMjgaLB8Ykk8zKbf7536g1MWunDgTVcczRBqzdf7P6Aa4RW5SinHNsT",
  "key6": "4i2frvNvEHsLt9gb54EouzxCLcBtRoBvtuAmfCEKp2PfMqKqbrpJWNH9sWVKYU2S77xko9pdZAvq3gsQ7ovm1noZ",
  "key7": "5JeUpPxuipQq5mac5LKRgu1eWrtjAVRDJQuP4a5XwEQz1NSKNcxPqUWpvSy3iUfCdXtKYi2AZYRaRXS6PR6myJt6",
  "key8": "3uf4fhFPeZFsDdaxQWDL8s7L6Mx4oCXmLNu9LcpvWaGLcNPHRnZpVfeAKNT4CBgLJhQSyPAtP5fuwDzQVUsH9xdx",
  "key9": "3FPVrwMyZxfVQzEmMzampAhukGzRauFBepcEtkdaDSBpqAkYnArf92SjkJfkm7jmkEpN1zTkFsbyF1veC3rLBpiS",
  "key10": "2Y81WPZtuSk2hybyD1H51UqWspegLuER84nuZuAHtYz3AiX6RF9tcTwkeaCtNPddV8T1aw5hbUeXSpe74VMDCu6F",
  "key11": "TVJi9zE8rXkXDhxYxFrff17Cn6aEX2W4BrEh8y6rDLB99JjPqy5nF9iNBM8L7EM3S5FD3zkoj1PZh5v8uhFhzXc",
  "key12": "62f6SbhtoLNfw3NnSZaqkNLj18qzseAsH9CBaufzv2vUPph4W8cJomKSnZn62HYV7oC5NZv9r2JTp9hyfM5P9rN3",
  "key13": "2RLKC7VPU1WC1nNa5yC23E7zFZf6c3aFqZA86psYGx7Dtq6e7K56zLJpoTotTAEtj5f2865GsqHabM582LhpqYve",
  "key14": "5ox5j5YeYkbgosXk2qNf69fLwv8duVx3XhDzoSq22Wbr1sqUSWJqfMGZYih3R76q2ms2fnyewrzbuF9Bzg3D92Vb",
  "key15": "3LALtbAu2DcUm7EHKACMjhqvVni9BKE3uwPhtNj4fucUFZ5TPB7ioyrdoBMbqekRu6AhZWN1aYFUaa6XPTXSACnK",
  "key16": "3XqpsGr6aw8cmrAnD6bsMNwaWjwHRoXbXPVvwRdYhwUAvhr91cbEJrSycAZWq4mf3aNXkV2o49fMi2YBZ2UrfW7g",
  "key17": "21AF6LBMHb9qShME5Z2Fgx4rnpeFJx5CbEKFwmwVTTu1ukpTPurYweQ7L42bKsxkhgBu248CKhJZhjSGAryYBihm",
  "key18": "2dKn451fdJv64pMSq9jY2GDuewYC4UVEKZLbVBkfhiZBho3rodWYbbN9M8bM8ccyN2AwpSyiX9sg5QVeMLS2sErx",
  "key19": "2eo8k4qzFgfq48fgSBkThprnwty2vdV7nU1dVEDVkwneFcNzYTo81d57x4mu3EjTrWU6f7fmdTqDYpnAFqSQtrHD",
  "key20": "USrR9y9QkTCRUaLybemoSaYbgQ2gWDcyVf19CQGgtxgFE5icePjGrtxxkvwHcdPC9jK138xx2rrjN169akFcjfh",
  "key21": "59yTfc2sWkB9BcNEecaibadrxem7gHGJRVFByNbZjByyzpYAH4MSZcMborpXCkcvE5PbCBzTwCsFZ9gSrqVyLXaD",
  "key22": "2cFdZnNnya9Enr3drt5U7nSYGnYPNcSEP7km54cSNwCtoYiTv8ntnpMakwnS88d5d9ZvZ6169V5Jc9faUa78uBmC",
  "key23": "3M6VfguLixEALb8511N1EEXtH2vQo7LNnwD19ATYLaUqDumRXRu7Uzc1VJnegDS9hbSZrPhb2QzcMAW5m5Lchqvj",
  "key24": "4QjCmcMebupjM8EHp6mLQUPUxqAotqojuMqTHARRcCQFQJ28tYZnZZ3aQgE1a5PSqJqiLrC1XZ4LmVqRLZfre5Hp",
  "key25": "4juoJT6GGZLjbX3rneyp5Xjkshf6UpZ2tcxNfrMg64SppcYTTB58J4bR8QNCVUC2s1Rth7XXippwo2hS26W7nbZi",
  "key26": "5jvdfUZK2V657xyCSno3Dz4BWsUqBE21p2ptUeNYLtsHg8RNBkpgG5xfs548eDECGTXdu3rZpagGz8utBLEEdMEQ",
  "key27": "4mWfzogRJMwENcKeCqeUhkALJzMsouquavu9JM1Hy3gVbtyS3KH2RkNhNHbheX2FMUTYTNuaGjNXZKraKzhJhrB",
  "key28": "33eu9FPXpRAk2cupdSfNp7pbgB8ezP3LWTU88DC8xjNFtA49J924foH4q13qfQAvUjWSYxsdxi9krxETeTixyuqB",
  "key29": "58PKADNd8e1myvUJ99txbyyJAhVJSd1yqQpXNPnsL8BXhNK9Xs7Ef3D9sZGDaRGKtmCLFVMm1uD9y6biez7vnDEF",
  "key30": "2czL3EKB8N6UesjAkEqBi3o11Qu5xyEk86KZisq5KURuLifam84Ya8bjrv5X68tb3TKa7PDw68jwjCy5U47keQqb",
  "key31": "4idHdS5RYVbqmWZXSTdVfAVgaYkjTUwFVTrbEd5Aj32pzVTFeaT4uU1uVrmTYXRnMTudieeM1PKtotFMZQr25MBf",
  "key32": "pDYRBJQdn6R6TdhgkcnJDCGXThu4hZXRNPQChpr2zYXZWZnvxMov2MHmwQ5VKv92tWCafLkd1Audz9iCzDmLdbg",
  "key33": "2f4ppQGm8pxYe1EvxsQ3Rr3gvvpqadmoQGNXQFdvwdzZpbjAi72qmRpB2taGhAVgPtU5bEaWGRyPGFRhAuw2B4vC",
  "key34": "2MxZ2VNZu1k9V4j9kSRD9k6XNew9bUjeE5SaNgKHbui9Z395m1mACCvpKUutfqqACZrJ2YHVGhGwFP7X53FmqizT",
  "key35": "2trkT4VCfEpdk4e5gxKqGsy1UyWwbDSo17LSdrtwQxin3LjA9njXZzqqs6BmJTU4iqKz48o6WiJDhr8Wua72Ksmf",
  "key36": "5GfHqgJgmeSbJu1kG2dJ8Nxq9mYSGeY1SfBC1NS3dNRxqVkUecyY6F4kXs5NTwTrXbHa83KEWhemceDtEi1Tai4i",
  "key37": "3RweYBYKT9RH358PZQmZgJCspiy8Vwer368xu1nhVc3e9j3zYCJ9BDzGaTPxdaXj89rZvvCkLHENt5Z3Ghn8fPox",
  "key38": "XQGiFCqikMvPyP1M3xayWAKmmykADDr7hPaJukaRUSPycLFe3YsCvKEbdS1UKcL3jAUWYEZEhSViPUUuZJUHwx6",
  "key39": "3QUKcnG2pc3zJnakZZGGgxJbTvF3NQUrC8qTDjmUjPk3ypL3315ivpudPyfGrhFsPxjDkTPfUZKthKWHwFNRLzL9"
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
