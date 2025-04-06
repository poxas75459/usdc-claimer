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
    "64PPNEwUSpaSESWJ8QStqs5HwmG7qE3HJP6LRrdroJMWSw7xg7tXFyRFKqrVG53jFf6qwg79rmEP9rdcxYXxN7od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mtza4Qnr56zwSFf25gwfSQHAw6wn3gN2VoDAXCoXtSQeJhJBMSZYrhnihcEd5XijLyKxJJp2sPAo2U3Nqo4u62R",
  "key1": "26oebb2yM8pE5rQzQQnybLunFjMCzYpdEbZwLfUxpH2CZAtoaNWM7MjgfcdB45DKBvpyfkYkCgcjiuakFAVdP4kM",
  "key2": "5JdbeeBxYAHWDNAbohRKU6iVaHzege4tDdH8RuxXrKY5etzAJ9C7fRFdpAAdxA1GnJBtDPDKp7Tb2WSGT3QkQ9SP",
  "key3": "2Z5bELfzqFHEJ1SiEUdkYTsxTECnTMWcWVfLqEeXT3hPbkcCLbfGCkZ6dEPKtdTZ5XF7r5Vp1eUkgp4J2CRe76xy",
  "key4": "5qUa8LptMfoBwSKSma7CuDdh6XuGp1xxVrdkQ2XYHVEkJQ7bFXWezuHc5d8hDkSYHP8e4c2pL72n1PqN7h9ZM2nw",
  "key5": "43JUxyvW4NzuMLv9xcB7obPCjSsguKkCdW9FRpBQUX5HTpr18c82CCSa36ca2ZrFca3Y25qo6HbFiazJi2sVn52X",
  "key6": "5fYWjjRm2AkUJ9EBaMzqnp83hDAWhxrBAxSXVvLrbwfByvPwRe2cjrPmqpkxEtmwaFAnahtHhR4EXzQ8JPYGL1AE",
  "key7": "4ZBR6ZY6VH6nubkEKBTxR1oNXXAoJGeahiMBe3vM3AWFDizkn8S9vtM9vNgRv6tecgQEVa5Z6VnkcRicHuPPVMvK",
  "key8": "3NKug1TvpEw6SgWvsqrM7rAWPhLzUFknghVJ39cTqgE6LM9LCaXUX268eeDMXYY9NikrXanB3rTFHYVJ85UtfmaQ",
  "key9": "3zhDRdWLAChyLbZVDhwwTgKEztqgPnDeWh55KBrRXJbVbz62iFfHGCEqn9fviNmSLgpoCt1eusQ6MyY8ZVGNawRq",
  "key10": "LK5Ah6pbDXh4dZwc2s8iTSPHVvT16hUury6BtefxXwkE2cq4EaQQ8rJ1hFeXH7roUL1HWWuR4aWuhD8YwodPwsZ",
  "key11": "51WRvDDUz2hVAXRsPCRUpWNQ9YAdcFr8pH3R4PuwmzSFuiCN8LGDEwvD5kJdvwcusTYicJThf8GH42h1MpNcFL2f",
  "key12": "2JrayCktDs2aspHxTmWTc27qVfJTmGMdhQ67ytiHGa2fihBMLnYJxc9hhtW3c9EZ349HL5os4kMUeahA1tRe2zhc",
  "key13": "eLXyTpkthuUgKxuJAcKTF4gt8hSkeCS9jymJmezFJiM6YDNEy1ZveVvZbGgx25TJ7pAL6a99vCLQ3J3ftt6R2SP",
  "key14": "5gpWQzNRoAgJTtuE177axkzB2b8dsaynFFKdSyTA7bwt4DmUTQJzmsYqb7UpAc9vrRpG5erzYbqB84yvrUSq8CJg",
  "key15": "a6d6aREVn1gofy8tTNWcezHenapjzksfKQP8o86H21r9ckURm6WrvpVGie2z3WufP2hmgheKywU2jp3Pg3YFkGq",
  "key16": "2PGi9jWj6kvFufGLAfx8wvyQzuezoVjDty1wgPqZrthfWyckh7ALamkHRiyjiBZy3daaUN8RrkNgjheRhEuMpRRM",
  "key17": "5yyMCJToKKHRnWvzTLd1tBPb3Zm7oSG5t14vcxiFXRdhyt2CxmBfuDuKeYdRuYgjpLCkTbqPqF8mdvF98Pw8nwsm",
  "key18": "31kh1ZvzMPJUbUnzidehbh8WNp3n2Z24q4ofS3KDEghNGXv5sArZx2X5d4Zv9WJDiccdPuZeYt2tVhWNdvFRQud",
  "key19": "3rC79Pk7t1BvGAtK16dzFbBHjqMKkYxSKwqTySosqdxfo5Y3VXxi7wavDoePUoYjuuVv9e7s7o65jDMyrSDuwMvf",
  "key20": "4A5eftxdFjjHFeYPwdsMz3fohadBUxncCg8P6XHaDWZYsjigvowLWE5JeyUQX51BWpZnHr2W7F34Ri5fz1HZL7BP",
  "key21": "23v49tp4wvPESJMEoBTKiR3pZHYPQXk1ZmVkwESkXzE2yvR4uwhvgHj5qgnwzSpJKPDFhjB9eZAWDPtuJxvVJ988",
  "key22": "5HiUwpcfVxLti2B7xm4ZptziXyd4aoF86tG92ZaPTdmpdCM9AqCcGkBc1baFdiVwurFoUh3RVeRFY1hgwdoh9keL",
  "key23": "5TJyBpUS9GMpwJfNABuQfqZrUDHRGCoPi3aM85Zf3DjTQ7BHZPVJfsFTPSW6xXEmpRD2m4ucVfYxRnmjyANkL8qY",
  "key24": "2amrtdz2G7Gqqr8df9rGF6svc3LekawxiofZorCB1SJieE3DHxLkAk32sfQY1trsgPmbaVHAPMmu5HnFd3fEH2C",
  "key25": "SzzYwtCiko7kGdyEgbPtdi1mQXZUE5sHyXAeYUX3LXzywMBftcSremE5281wB5f5o6cX8ZRQWySXTihTpQS4gYs",
  "key26": "2T18dZRBrxWfXaywRuJ7XE5CuiBtTxBpd1RrGcXgq2TRPrVPb3FK2ZabhqthVbRTSY2YR6YfZ7uof9zRx85MxKX5",
  "key27": "2fnf9V8PXanEoum4BVQPaLhxE7fm9ojVFE78vMYJxmJsspPuKNKUqe7t4nutTTyzPaqfCU7pL985UcsvNXHSua1p",
  "key28": "2DVHZKoXui4fG5P9vDCqnwUJXWpU9dJexcSNB4LGdBbPLQyzDiJEcURfzNVfaCk55FDF8oxcyzJJo78weQoEsiJA",
  "key29": "4yrVP2e4GNCwDTGSyXvMMj7BeWGaFMJYvJ4kqZfR8zKNHmkpLUGASWRGkgRD36NKEYfmZ5Qsdfhm8RuuNhdBs4XN"
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
