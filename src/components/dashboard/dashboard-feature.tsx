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
    "4zSwPJdxMQJVrXbd5w5m6UXCC3VMPd99QbJ15FnhN7PQGs7kcpQRtEQEh1McC1CRhQ584wgYXEoZe6EcktgCovH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evyQCnxXnCTSEakppKKRVwmPWaRTKQrSMh9xo2jJWPGQURrDptpqK9MAofTwBPxB4M4e1rzBxAQ2E4cnt653Jfa",
  "key1": "55kXhk8wecXFiPiiPztvbZwkFiBAUBDDaJdP8Nwhm6c5oWjVVyWdAp246yAuWfuFQY5SSTbG5rm8r9Mm1Fr1mvwY",
  "key2": "Q1PFJMFrntHvABPz4HD8m1gJwhA9wnbNsRojQujAVQNscTKgHEcurL5QMZ1LnCYQj34vVpzyMZxbRzaTDCYBByA",
  "key3": "4HAW3msxYSTefzdiQWKFcdYwBNVQkDn5fteeUz7PwcmEwAeUw6cvCrKgeSMB5G4tEMS8MjvzDhYQ6ProndjD9sjb",
  "key4": "2TvnsJaeF3ELhcaPP5XkHo8JMtEBFLWWgmqSWrcopaZAAYFisZvDLYRBadHpCjEw5XVyM23WrbYoWQGXNhq6rwz4",
  "key5": "3qsP4dzzJ4ZehxJzT93e1saE2xzKHTsQ9ffheaWKHvwhEBVusTDo1v5UWqrZL95jNjRY3ARQFK4ZH2yspmjpB7Cb",
  "key6": "3EfASAQ8rHW2eQhQXoqmGjascQHZ4QnPNZyyKTSKJbpAFemQQXjBL1X9xZFgZ4B31kpSLoKjaEZ1xnxAD7FP8nKx",
  "key7": "4J6yA9ZBeXTUgGTYPViXCd7Wepzamm9ueGMha56iASyySu4AhaHbHH4huLZwCaVX6wTAAmL9Y8UzSUMmHh5Zc6zm",
  "key8": "3A1ChQTmCqJFF8mMvDihutWBQo4TiDiENYdeBqhFK6TEku9jwBoxtbQSDJJzvZ8a87uZ35atafmXnsELCgZvvxTp",
  "key9": "xKEd4gNDH6vEQUPkT3Y25B78ftSSMepquHqbWRbu9FaxrZ9EV62LZTshy8NQWmzoko7TotB7opSVo6vj7jbkBKw",
  "key10": "TRezXVyFVBGhB2FRsBkT35ASeWsWmLd898H4kHUqR9X5bW6MhFMbYJWup6qzvaJRvUL53CnE2Nya7q8k3PSqt1J",
  "key11": "4d2jUp12vsHwvHa6DZG1qXsJBLs9tbtLxUKdGwabMTY3HTrTjia42PqGH4ECQhhKmwQEf1NTsuTgqM31Mx8xeFyN",
  "key12": "5qFeUJJtNUkvw3XUv7iVB656yx7g9jbJJSX1QZRaYVCr1UNQr9Nj8czUVDUG7Gufb2MeDuWDw2oDWiA1dktvdjhQ",
  "key13": "5w3hzhFn2jGLsabv44V1h2siEmHDU55H6oEH4FMxeTB1xMt7YEPtXe8NcfFLFUWVshfCr8GgnHvWfXHxXFqTCoAi",
  "key14": "3Q29GeK5wiM8u1erhyzv7DTCX1jS7MrQdgQxA7dGMrTY4QiczYwLJ9X8KHh4RsojRpDtzVNQh2oL8y3GmPaJwhSi",
  "key15": "61zoXbNbcc7dLamyvqjHagJNye1jVF7i37zaty6DnsdanV4rSUhkmxRwfLRB6nn2RKPaa8mLKTZo81gnFseBKacY",
  "key16": "28TRqvaXhXYH4uVRr2vezhuEXdzn22AgNXuDsQ8VCeWy96bP8fU3CBN7sKxNb2nwRjqGcdKRxAwhpA7kNT1jauSz",
  "key17": "24dURyc3dfAYdc8Hymgp2sc6Kbe11iRJrFcM6G9oxqmCpGVHyXJGUyccDT3QgfzDk4TRySTYHHHV6T2BTCMjU6vA",
  "key18": "4QLW6eZdg37Jf2yPP9FKVvkVNF7k12PzmQ6fLdrBGpmYzAAEoNWqJZZPAYAfaB1amd6oMy9B7neKLYWkYQaoQJ1j",
  "key19": "3BSYs5zJWUH5gbDVpkfo4Vjn8amt39uLf3MbHcoFBP9zdjbYBCLNyJv63BwUgnA7nkp7MS9CLFdDVMRZxucDsGyd",
  "key20": "3omNpjYozSrWkLbJDaZ7PhKqh8G4U45yPuWahnMiYAtL5Bh6GbVJwxv4KMhrXv5wW6BThx6SLs3WRiTCM6ToQUA6",
  "key21": "3bcXHBwbFksD51Y3Schtcx9pVi11JkQSfQiCJ2LjSjuJRpywLm1VYLeBHWdpqdpizRrEKeUN7USGNKZj2jCvNp2J",
  "key22": "24qC6yk52D3bGUYhn2JcNJctX5KdZJtwpjTiuZZ392e1KLCwbUvZUPuYNoSsetficSM1sXLED3GE3ToGM1EqUdTu",
  "key23": "31mzL8RyFJ2tqcTcPoaxbgcx1L7nV2VTrxGhCh9dNgX5nTZQvxtBsdGBzfqziPurxP98wv7wheiyQwpVtHJHecVV",
  "key24": "4t3ZmqjAuDw1iBwLQcciidjGhPrX4Cqyi4Gscym5ZPfSLCjLNYPWq79UUubqc9SYs1cAAvKMod6ZvhZVB6gysKEr",
  "key25": "3mC5znidz8EYSbeM5v4WvXz3EpFBXutSbX71txLnVQmQBtkyES3XWTzedVe7PxnsJvGBAhexjV5ZsV7cPj6PLHHK",
  "key26": "4fnZsQkjGXqEGUmAcYmATEe3t5Whq1BWJRRg9tmXMt6gNL7DkjAufHffheg7TBxW5TQKRXuudc4PwpxTULMk1EP4",
  "key27": "3CffBPQeGxmgb3sfAGSVnUYCJtPBQg2NJGNV4ApxfgijuN2bBtKJ7yePb7U7GwSWE6vF1dRYBneaTyAQGTASj1kk",
  "key28": "4UeQeTr1mRy4pHK419FLjiyoMhwNHURmhhDd4DQjgjANA3EHrc9DQEBKRh5iMooekbujzt4DnWrPeTJCTMMgnW4D",
  "key29": "4AteLwRv6HWqkCm2zPXJtdA73N2m3YTe7tNJAhoccXEonGgzrYesiWeun5FgGKZbvqi8MqeTWHZKPZmdXSov553V",
  "key30": "46vG1jedb39Lstauwt9mSHjgBpVCobE6ayKPFAqi9mQkCXJ8SnZBxh2nn4H27yFG6ZdjetHhsYrygKW1sLhEmySd",
  "key31": "484aLJ3B2YpHroMtN2EpuYP3vwVurRXAa5wGkBxi7XF71wp6jDrJSyRFsxWs7WPudrLTkVQLkxz6L4KV2Svi3Stt",
  "key32": "3iYEjC6r9DLRMrYZZD4g7FVLM5HoSLcP1xhmikoWNAjWkDL2JkyHAjHbJ3BJW2UXDCyHMPcinFQRD8db43rjJGqV",
  "key33": "PCSqScrhpSsdLaBzZD8u1AuLWWtxrsBHPCvKhaisXge92KV5n9Cg62cTnReYYt2c35W9tQoPSteJDFMGbvFbLzn",
  "key34": "49uVL1cwFvqzKZBJgmYBYMMP2D2KGgALXud5y5KNaXYPcexLhdFAdk6os6fu7SAoZL8GQMskWVy3SMBgXJAD8EDM",
  "key35": "5nrbGQGfDfQuTBfj7jvu8A1ZwVAUr4ecMcXLBqur72UEzKW5sBuBTrpHksZdFfnyDRhUhd3VQb6NJpWhet6HkGeJ"
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
