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
    "4FnS8i1D9fAhJrFk7CHuyMF1GTZeo6oYau3cAar9fRVWM5uavnUDCgNcHf5XnCPQE2PqU5rekyUhyDznsyPwdXR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461ebe8xnZhdC918WEAYfqhPZZXpuLshxKWHD9agHjUzZxePG11p3ephSxQ3Dkcf1KnUeXvVLyPBP6H2Ts5aYakj",
  "key1": "PJrQGw83mLGZvvAT7n23JVNA1u6vTPBijsuqQbSCaLApH8Dq3TPZ9RrNov2fVc2C4fUcerTi5hrBjX9CxkRbo1y",
  "key2": "46ixji584RZMYe2LWF6C6X8Z3QgCGFRyvUeXLhL5GQtyuPumfsSDChWNtu8sqJJmqW32y3hH9FRbBjMZ1gBU62ES",
  "key3": "2HWKAtDk9UpLTMKm3jTyDBJLgtbQqghJekpc3iiS8uRDZv5Lxji31WPXutT4it9VSSP86miqkMXBggvwxeADMFik",
  "key4": "yg38PgLruPtmHAHewkwhVtqnMEfbQ3xi3cdMVRK2rihAPnhtMQVFuoQKqXXVcBYLQewBmDtj5nNjP16UYembHHz",
  "key5": "2aSsEbwUjNZYpioKkqHUkW7FU5dBD2xDtyoiLki2EZiPZBSMKDVeXY35BGL5GTLrqhYPb7ssmJRK1inZ3ZuNDpme",
  "key6": "4cToCZrL7sWwW7EqxfedcL5Ue2NLU3Wj6meVdtF2rhCuGWyrkd5MaTVtbHiM8FSmV61sAQNyYg3gUw5FkMsgr9UE",
  "key7": "78Rq7r1iwpNH76sfMiXfyj6PQx5KUFFJWqHr98XMY8ZVb3Bnroo7gMTLaa9Pxf6E8dVozdvXAGy5KfNNmrUNGhY",
  "key8": "3HiCX6xfQTJjvpqH4sBNavBUW1AbtgRZvKi9UP8n42AiFeNaQoYKi4EM4E3FtQMG9CvgcwoiMfYAGAAkkijmUS1x",
  "key9": "2i4gNwEuFpPqmDoz7gkJmpPnPK4yDKYfQh4taC19odVtpaXZ638VA9GUSmAbQLa9y1Qm8ZNPgkzzb7WKVZ5R4suB",
  "key10": "5kewSr1sp78JBmk579inX98BGDGPww8uLVD7ngDLgnV1K8NCEwcs2xS4pMZigsbtvJcGNLwqrXbcy6mjtNLCKMoA",
  "key11": "4HTpRT6RVnk56HpKCmrgSnivcAgbsBoih6fTG8gR6hLYZbiVAex4QpvNRPfrTWPAgCCZhCtWTTWmXQJo32uwrKhv",
  "key12": "3zuAdUB2PErdFf2cKPwkqMwtkxUmVERvG4HAQwCq9kDerkHR3jfU3rSruoypA1pKeocN5nWiFXF73QunFTjB4a8D",
  "key13": "47p2iaFCSeaMPCopVmnjo3KGvFsmysRXEgV5mmgKmxRwL8UruRp3oKsnNh9PEKAKTjgsGTejan5M7FRR1f3u4CxV",
  "key14": "2yugMdnjMwLhJpZVmmUSPHFFkQw1cohZoZMAhPyDLKGUCtcKqNKP3eheQMsjFG61x7MwiVSQJLvRqcivTHWm24vu",
  "key15": "PJ1xcrW4crFaKsjZdNXDJhUoBQfxPRqYq5opBH4Q1K5WcgzCZ9He33HZoHstYDDQcSUG3Z5VjVMoNuFHzAXdsSg",
  "key16": "3seV2cbvxR1V6jwpZbQCjUN3CKNKdZgbiNbVwfUQLnX8Gzf2QitYmdLMTpdAexTmEvkXCBDygnHRvzjTZpkUcxyn",
  "key17": "28rTrm8a2WBDLGm2EyBX6y6vegnuXwzbtwdkJ22LFC1azk2c4gnHhqjKY8sUTBWQi6pfvLzbKNEDguFyoaP5uRPw",
  "key18": "43p7Q53iuAZa19AiXK22YrFRkANa2goNZPq9wPfRUkhur6jUT4vuyUm6tDQiFN9agVz6A1sYyTVJCE59RcGkKHzC",
  "key19": "c53n7Zh2w59VTXPVKY8mTNmQaKWmwkip766b5RfjXoPYziPaAEcDbne8ca1pGcdSoAWp76qhMncSLCZfUFkNcyC",
  "key20": "3rhETTAsk29cSWxgzr8opYjsBFc296RPauNWuzVm6Lj8FncGVZLkQ79nZZ7gr4c29n8nuEqfh7qwbNSVfk4ozeNC",
  "key21": "514V8nXG6sjinJ7e3S5eDWq5Dsm6L5YviMz2ZrgFRy65Ueq7JUjrkUXqTdvfADvgdwteYUffKnmbiBhFyArJvrHi",
  "key22": "58JYNMgkw5ZQ3yxmo8JFUoWrJqxFb6QUzwXDB5fqzYo1Ycd1UVFERWfjFuB6WNN8zkY5EJh4mjdDMJia72XHcHck",
  "key23": "4srcx67QQAgp7n6XH8XTcUjnafrwu2QDjju6smf8LbqbbtEqbNRz2u61ByeybexhZoMoRziNzJMwGKjBocHmVVbR",
  "key24": "2dEAcnQ3vgBokPoJn6977YhCLAARnkHEgor87jKQCCig9rqZoZGuj6uxXgXioGNqyChT9qy7eHL5MHHNTNwh9Q6K",
  "key25": "i8YvbTZ3SbVRJyje6tLr8jah1sQBs4zKGCa2PvgjKbfkXE4DtPmNNdgEU2prGyzP1r6HA48hiFLYiRSZekTYhuy",
  "key26": "2v8buFG7TMF1NoLPcVSoMq3KEgsLXm6MKaJKhsex68QVLA9dUjufpveF3jNy4DMyRS2JNwcHeUbmFAxJWYMtnujh",
  "key27": "2yNKPc9kAuzwEHvZzZqFYw78dieVxUB7r6YLmcXUE8M2z3XXqXG4Ev3gjb52nKGSYkQPEVGrzBaPg1J5ykp93BHH",
  "key28": "2bQGtnTogG3L1eLqveY1xtTZctohQmSAMN3sWEdqKhyTWpaSN7hcDk1jDD8KWVEBY9dAiFNxaCiC1Y5gQEkHM6nD"
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
