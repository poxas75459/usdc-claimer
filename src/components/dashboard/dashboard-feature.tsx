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
    "4t6xt95MmQPTj9op4j3VMVm9QcdVQFWmGXnBgjkqCJbLyp27EFTn5YMScEqTKPmFDKEQh6h3FRDFj5Q7DUC8HXyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59f4oGWGCLU41HawNt1X2rBuDveCNogiNKFYLNnZwRAJ6A84qrNJZ4jNTwuGHTvAAfA5qXSeQBF7FHPVR7fUKh3X",
  "key1": "4xBrQrnApYP8GZZNtFhoQeLzrSNcLb7Ajro3w1CxDeYBJBLW65bgey1Uib38gWQUrfDLN3HrHWm1yrkj24fpz9Cn",
  "key2": "mBV88J8d2nzXNwpMWo7FZiUpn3KSjwM1yc4TfS9yBpMDLvxWM5aeWhE9iH8EeQRnsErbRzWMGYD2zTCtEr4Pomj",
  "key3": "2QfViz5Qh42csc19HhZmV5YD5BP4zvpvP6ZxJ8CzeZHzT5YpbCX8bMffsSFy3y9nggN2AS5hyWxRdXuZbjgciEi",
  "key4": "5ajMrnwFXKFzKVhmPevpTaWxm1LdCQys4MFoXgrk4KfqmMxXZqVj5FKdQ1nR29tot7fF1dwRb5hyjX9fWSsbUW5f",
  "key5": "4Q9xTg13DvHqhqVmt6abYwAf8UyjykMeN1nMWpjpgoWL5eqSDKrHpJNCvAi5G9RowmdVcZTd5gecBFAXaBpTMFMo",
  "key6": "3AB4TMi7JFMFoLr2L9Fag3wBc3zzgnkTPnQ181JjdUvf1vLRQeXionyi2z2V1Yd7dmHLXuAvb2kYRTaYqMRcGnT9",
  "key7": "fDZs5VNAt5wPMXspTKZKZdZXMgUrgwKoanbTj7J7T8c66TFafWFStzPvmQKyCk2UdNEupzVtg4mwofjCLNytJSg",
  "key8": "354evJUijfwFjydHRmzLRQ9nFe8AUGjHZxQ2nMYghPs7uqpJZpQBKqFVDDCtTNPFXnaGWDgQW3ga7WgLgZrsDJB7",
  "key9": "5XbDsefHj8aufsWGBDDtk7AfPgBZLSzQxtGCMtxQyGJKXXDDEPZ7iretZ2t8qfMicS6EhNwNApLC5tqbxCKvuTCt",
  "key10": "QUpg47tHPEiJJh61NxAXzAWzHR28zSeW2yNSAR2X3n5kYN1KYdzjyBxkPbLJG2352Rw8aePRMnZYbWsaDEdajf4",
  "key11": "4RvGwDdFkTqLLhtW7tFZHChfNYByyQxtrMe3JJLNBrz63mF1zLes1C2gftEynCN59nZeZA9xPU1798nsEupJyAxz",
  "key12": "5uAi66Hc53XaeVF8HrHogEMvgkJA4P7wz58Ccg3nmV5o6gkrbzhS9MmHTrp4Ffcmy4Em2dzm3fhneimiXDNBTL78",
  "key13": "5vZEHCTkE6GkFiLJfLrJiMfCzafpbRW8A1HSkHYst1mWmKUpyzwAzh3yHaMetr6EDrjPV6ZXqQByJnjPnTnxjcQS",
  "key14": "2d335BFbrzavDVaDTGSjFhgJAwa7tLGgcEzbKkBwcdfigFmWiqKaSYr1yW62jiijoWRC1MpVLUMwVNCGNXM7QrDy",
  "key15": "27EhWdR2MBAik2a9QQ9aP1Cn66bKiGhna8CnJaAs4RgDm34YHkve7nErrProATYGeq8i2VXvmhV3nLachEuny5YJ",
  "key16": "4rxykFPnnquxG5JcNZyQ2FfDayMArXVajS4WsBu6gkLs3Je8Xmd1gD3cBYSt71bcPsiiDnZj9Ld53ty8MrzsxHxW",
  "key17": "LbBXNE2fbaSaJPvqpEYigpDy8np1brXBqKwbk8jDDKFEqPKxfYGkeVSaWFQCB4YxjNuQ57uXVHS7jp6cJKTkqhC",
  "key18": "55nGxBs7e2rAPtNrW1c3hVvTBYrheCZok7iBgCQKCsfQLkwZwkYnCZWaBA26f24PhDKchi3G5y3waVGK8eKtVuvL",
  "key19": "2rguMUKTa8nNmozqHU5bPAiaMKk7KhUS26UymzyZ5XvtkYYedxoFPXVsFTcCr6dXyfAbYuGVgfjv3uPdu4Cxk2uJ",
  "key20": "33MUyWWpumjTLxRvted6yuV8g3Pfrn5PF6rRvVHdDGWXCQb2D4WvLr79vg6bn55TQFz1oVuDRfdsicHTnW4s2kwF",
  "key21": "2NZ4vja2XPBBoNZUXvcBP7Wfd3ND3tkYJB7QkiTSqvfre7FTsb3YScdMFFozD9Mq3Wf4jWpz2gpg17k86KsQeRKr",
  "key22": "57grA8U2sQCcpGYyMY9STLZk5Gts9eZdfsFdtc9nqtVC97KvzKuNL7Z19r1obxdnmKTix8CvFQuK5N98osUx9TWn",
  "key23": "4G5qLvt8qGAp5mcH1bjqLF4motnuyihzNkAXL7oDuN3F4QdGJ2JG6CXLoyzadkT1WBXWAek7S8UuHLL86ACDpdFe",
  "key24": "4mRDR9Y7dLhyAmCvDnoLZwX75uFdTiScJD6YsYyiWrEfqp3W363yiBkvJTwZyjs7JWbn9rhSVuc76dVjJSadubrn",
  "key25": "67iEKn1mkSmgRHvzxdWTGWS2Cs7552d9FW7uhrQuTsrw813MvFdoWMxdqmn2VeJbYTm7DS9h2YMVUS6uBBrcuWdE",
  "key26": "31PbH9D5NL84cayvzMDzhKFSuVgbQEsy7WMRnAKQvmPZwc39xjthVohZ7LRd8ARaTy36kmcnJNAzjBszHH4CarFZ",
  "key27": "W6z7HxxUX3v1YH5xFsnGbPRq5hwuuMgRxPzATNNyhj1gzhdKpCjiXzcSq2wodXzuQ3Pn18DVVVSKZAiWD3ZqTqT",
  "key28": "29bc1nbpF97Lj3GwZAsZCwkau4JW9Taaj8dkG1guaQiYLAYuLWkbohkvEoKgRHdPUBtxeSHjvPpGD56ZXp7nxSZh",
  "key29": "3hU2gnq8nFt5SxgUHbhyhG2upVmqndqAeTAM9Cw7rbcqoapoNJ76fcMuMAZaVbt31YxTHa9BkCgRAeQtMAximYXK",
  "key30": "34wW3YVseawjnrqiSquRBhanTV76Mxa8gdQLpvP4rEvYFem82fktCinfHtpMw4176gSPwmbLAnVYarZinUHDSk9b",
  "key31": "UcyyLXHpTFg8t2G7Do26V9fvnQocvs8JCCxQ6VRmmprT8KaPkzzWj1FdxGrJbyDi29bKVySgUj63RRWMJK2peuL",
  "key32": "2GWgWAnusPdeoGpCwsCY5pCCBdGn6Bx5SUH6sqKbUCHrBJ4WsyPJYdnSGZQA7GmVos2bDKgrSpnHpGrion4L7zSa"
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
