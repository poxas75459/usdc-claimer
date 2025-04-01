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
    "i9rT5qsW35ctVLyh96UZFVcCzK95R4r3mh41D965MxtVHrNLZQ3yD36w2rb3aSuKiWTux1krhAn68FTf4ZW4xKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xKWKvYsELMFKfVEyXC4PaZqK5AjzoWBdhqUuVEW7HcMXSbi1Qg6HptjE3TT3UjjKB3iKenyKyeX9aLTDvZMvnp3",
  "key1": "5zyC4dqa2vpJpoMVe39Lmxi3RhyBQxgWj124NomBiKB4jancwZ3XW21uMXocNiwWSrfUbLnQiaZrQp4rEbMUtEWg",
  "key2": "22Yz5pVK9jtG4xWriP4adfYiJ5RUJkp1QUKVFT6hzGssz3pq9r9U2we6APG3myjooZe3462fLb9jEwEveFvuzpri",
  "key3": "Pogm3wADMvyqow21L458fb6vVcDp8VtmbEsBrfBEtynPt7e5XB5UC8xto9Ax5syCsGiAR6fE7hBhacQyjNtTwnV",
  "key4": "CMHHmvK9t15pEAfUvmgMgSZWhCnSnZqEw3A6TV6jXA17QN9ovTaSuM61VComzRcpNT8bABnwLCabTn1CLCS16pB",
  "key5": "36qseLo4JFA35U9DJZS6RMDjbeEhsrRNCvvm7vq2DCNE284BESajJFdoCwv7c2HwLHHso3b4XrmRuXhDg6rD1yvc",
  "key6": "5kFygoaQfw4jvwh1dBCLuF6W7gYcahDVxfWLdVbaQUy3SxWZZ8eqkJrHQ8fCYjfshh3dJBy7PYi2mEKJorVkm2Sr",
  "key7": "42X7Q3ws5g5KjfEeTzi5ixfWPqjNswCybo3wrccwLMNafGRXJuD8uPkJSuRKFE4CbALjCP7arTW3kzAkMYpviZFJ",
  "key8": "5iFUiBtHRLAdxZQByrHCgzCg1UnSjjkpGYVb4iQsTFMozVnZ3JjnMDjVHJGVE5LptD95RTmXzNce5CyacrDWJZaG",
  "key9": "3mT9MKzSgrMT4EtGe122qgPyxSmPCAcAcaov9pDHPQYMFDVB22rXJsCptvgfRDK2hxRVmQoHkV2LbVHjtNYxW3aH",
  "key10": "mz6ZyjxgRrNtH3noTSe1q7bqsC25fFo4wcwY5q8X2FH12hdGNADGrz6ou8HN2XS4HnP9o3g6R1MNMBoEimwBQjs",
  "key11": "3hqo1gbq61keo5xPbofJ91PzkWYQQRdVhe9qZGHSY7ecwEMFYJjrFn8GpBLM4eZxD59rCMbZeZxQn5jKkRp2TaHK",
  "key12": "46QPFHMoJtEHNHUqLuyPnsNfvbtbfTLYdTigp69Hv9AMwmPCMbkbWHvDt4tJ3CFHeymJTeQJPgLCdzHoVQcXMBdW",
  "key13": "5pimEeWqeWAoKybTGoDozcMhp57P7MixNDe2eHzcxwDGFvwBvXs3teeJN68M8BfSkEBDAGPiMhfa6RDM7jAfqtCG",
  "key14": "4dZocDUE9Cn5zyeoYRxyh6mr4qLLGtWhmA1jBv5YNcSs8QZFRvK4jxGzKqJBqnH83DLWnwVLqLDxfbdw24CecNud",
  "key15": "2MLpBjfzCZC4g5VHfZt4xV1VEuNtrLYuZGQQs4z6bBsN9mZ72EGZNkTfJTcDJPLPHrfwWP5fSaUQp8ka2hm9QCTU",
  "key16": "LQAe9iCoa5NS8jzANpPu9W9QbYuzNy6GeCWXqhea2VBTkKqVHSj2QVgCGppPRviasjvW4FBKDsYh1rpBrCsUzDo",
  "key17": "gqcp7eU98k89GiAXDcsn17mfWV8jU3N3RT689iXaDqBohzEtagUCKC9bNcYvEffdaod5v3cenVk7v2jRbmeY3oQ",
  "key18": "5Kto11Fw3hu535bn3N2iDi5E814PMeKD77xBYoBTit2jQKK8a2KkEYtsVE96A3akUwtHvD25DqL6q9G36h9T5hDt",
  "key19": "2PbwKHL7uKyc262zYFGxVVwPjQNjqUVwwYKogtFp4Q1Cs3v7kbRTGAcrEnZpDMUcRQArSaFqyeLqTq5SvLFcht5v",
  "key20": "4w3es2Wquh8EziNHd8rxCG1sEexNK1irmzZ9n55LMHVoVsVNrCmGKDmfYusmoQoreB3VjuyfqAr3WWBNzee6NmHJ",
  "key21": "4MsC1ktcHzRVrFMSX8mL7qVCtxJsc7vgYSpsChTBauV1oN1n2j14dFJfonGFxsVV6UmyVKx1tkHCFazKiUBwNnnk",
  "key22": "43rHvHDaTFhZKfZU9sqLwhewkWdauecJq2iHWLp5CeWp1mdtaQXtNcSLWe3GarN1jKHHsK6j226fZLb73FCSnNdX",
  "key23": "3xGNWiCWDJYvgcnx5hLsERN3PJ9ineDJfE77pS4NTNQbCgW1gdEU2kbxVzV3Dh9FmiD8wtiD1Jn8o8vqA8rvGQnU",
  "key24": "2Ay4ZxaRkWwBH3v1jyogue1uK7wo7JPikvrHnrBKLfUfke9Dbu63LhjXv3NFP8V3JwbJtgw8rd7CuRJnn2eAum9c",
  "key25": "3uU4giD7EeWCFM6B6wjLVoMTKwnnJpnXeiLXZfnmb6dKz1CtcZkK1X37FkdGdo7bXphSeHDeEsYJivrghu9LVdka",
  "key26": "5J5TqUgS6LLVFs6ur4wgyNSamU3eWapCVci1jyNyZuZLf97TVPgpdz61Xt5Lci5PnSC5j4BAjGu2SWHhBhCUpNkT",
  "key27": "5wMWrkDdqpTCBDqDqj5tAHeKrC8kbCHd4xW1uHtAB5Uw8urYvzc51fkhZ3LTHa3MmqK72iCVnNWmsucojYtUEcqB",
  "key28": "4nJ3C1hqMYHAWPTVCGzUGVVHu6NKRknM8H5BGgdm9mKmTUpa9hznqAAkYy1ote8KnNtY9TVDRSVDE3Gw6Dvmqrtx",
  "key29": "4mzrKMnC7DembedxQkNYJRXrQPr9UqVfztJ5vo49dGjVebfhqLKTgnf3ZaXoQ5iorCBPYcwnpnbDkmS31Lrau5rT",
  "key30": "5jc9f1d2rLrWtvMrfSfPcVZc2VjYiec3bDJWZJFnzXyVwivsqJPwThg8pWjYZvP6X6VCvnopGK2jEkd9oY78NNNL",
  "key31": "2atWxRdSeBvHdyanjzqLy5reCYqR9HkFkN4C4A98nPJfHoikQuiQtY1k5Nc3u862iDHFujqPCek5eqFV6YsLPphm",
  "key32": "3p8to2RMXF7MbnNipPEgg6HNKVjWJKiuwpCBWiNa56p6fmjRNz2GAUK64FPS4h9YB3scuaDBX7EZbar2VCAYtpaM",
  "key33": "5mnGyfVojHTyh6hrVyRsyFqzyGthLKPXWvXrZi9rKE1SqmrZQJbMPz4mDKVmwQSVtUuJcvSPE6oZgas4ZxYLDkFi",
  "key34": "2jeLaq6BoNZ87iYp9qDYtiKBCtomtB3VHjuGmNJevHfN8o1KQR3e1kEB8qF1UUwFcvWFJ7pyAX8t53Qg2zEbCYGr",
  "key35": "VkYMsqJaEVbuFr4hw5kEL2A5FhkgsnBX8SjG4DsLAZFCxWfQ2Q2EJwbFEaDqxNyjR8SakWTAoDqNzEuDNv4XTkm",
  "key36": "5LMjRWaRkziB46PEmcyCyv9s7jCWt2fkaLmWc2T7HXeM6dLVYqhQT81bekeuJ6hoH2vxM9zCtfCT5B4NfXaaH9t5",
  "key37": "5Taff8tYivES1bQBRRBZeKcDsvsQEFZ28vkXRvqQf41WB6tFuRpMoi9t6eW34oP6KW7DSxb4iZeUphZ7z6KTumiY"
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
