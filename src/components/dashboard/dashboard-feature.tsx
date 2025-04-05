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
    "23BD7UxPvKU35JmiRCzvYXhLLFwFtuSTHsEKTbxj41EqBFaKZqt4UiVGzhiYSe6jDdti1qVMVbkPKEybw8ZyHMYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPYkcViBGdgoKsRYUt64wGbxSWb5FDsnSitfDWvwN6GUYKS8D1wB19pubmw6cQMiARVNKT3EAvUy2twxGSU5FUg",
  "key1": "MQnSyP54KMYwywNx9ZucYbPN48o8c8y6xkFXwpdR8ckvLDpxF4oK7NdBTT8LL6eX5iLCuAzAQHiU2vpDe5qM5xT",
  "key2": "5gzgBX1iqnxHhZo5eVnGZ9KWbBp6ED4JqL2LjegQpPoPyaH7RLc9Ni4WbZcL3jgDdYerSwDPYZHzpoRvpCPXWRNF",
  "key3": "5GN5mnfrFAB1zEbWuhyVzzdY61D5soK1CV6eL3i9nZhXjPE2spSdLb6zgmtJ59154pBH5Xa6pZe3nY11mSGY7k6e",
  "key4": "4R6JqJNCKuPoR237ppfkXQXZuHuP2CGKF8knw6McTsJmxnoAqyQvDBMhLJBpkkPoXKv1XtgicPDdqAEtUabCWAC2",
  "key5": "2E4gVtErdRgab7qHEoc2qa4JZnwFx3sLfPeLyyUVT4sLjTMUuiMEhDGThN7bHA1hbX59Xujfx3nD4yErggg8fX2d",
  "key6": "3AhrMffbYhjYRJCkAHtUQibUnBCEq9GvZmX5MzC9Pnm8ApAYwV1wRAWuJPiH8wauQPs857bHVUGrcZF7rgWSkL3c",
  "key7": "5QkkjJdHMWPfVZeEt2SNPGgsdqQr5KZuYXiZo7Sw94v9a5B9HxVnH9v7EzaKYCgekjn6bNz622pqePjqDtCp3BJX",
  "key8": "2UjfiFTMm595uUFvdamBeQ74PbypQbSJkqEMoaDCcR759r8wtY1MAMkiWKMsbE1mVxdaG4FoZvTrY1JSnL6YJHBG",
  "key9": "58TjNbgzvJcH1rywb1KsMRVZP4HeKZS99osg6bXjjwuaMzQa763C9oVnAp6oYWBLgVT4FVqWDZy78s1J5emvzHev",
  "key10": "3Lxxb1pe3kBpiJqBFQhsZK5KGL1bXX7bNrU3sPQyUAsn9aCdPCsCTaa2AVtUyFhs5st4zpnpWUNp5y8DQGuKwfUv",
  "key11": "4CrkdMaruf8aevAbTfVjaX6BWN6vnJpE5jJgY7yBWJoKAP9za5ojkR6ZBUnaksXhLEYapvwfnvChCyDVwkVuYALn",
  "key12": "3fUfRKNfYfcpdg8xPacZQxMERER3MGomebgFtPYm6VMNzpLpaFKh8dAyz6JCbWh7kZ2CNAZvhcNBTRShM7eLS8Fz",
  "key13": "8sjv3E5L6KQNG9YkCu8k21iCQ8onpZi3CresXFByNvWwTdNuhXtpFEyDs2spubisUN11f2LeRY1SwtDm2fAnX39",
  "key14": "2T7qQaxabVPzibFvDY6ynMhMKDgVYiCYUtceCA2yWbien4BpXgvgFg1ZgAVqsw6ZEUgSQhhYneh5gBTP5VqzBRxb",
  "key15": "4AYFRNgSSuF33c7ToWyvu2un9AVBvr8VhLdk9Wj7KQnr6Uvd86VTFSzywdMqMavDtpoQtupFuJ3ySgXWpunG1EfU",
  "key16": "5ZY4TdB8EmcJLruVyJhDgL8oF7YedG27NJrdUGXAZa2sy4qwbF3GrMNnWZfRarV8MUEuQ8fv6FopfEafv7DiVstU",
  "key17": "3guYsN5HsYQne2oRQKhEUJuVniivLE7AAJVKtsq73p44nydQDQLNTkJ5EiqcZ4wDdcpbucz9rDbNiqKNJq1mLLwh",
  "key18": "5hcSkkmbxHcExdudjCVLYPZuYpyCTaY54umtXsacUz7CAsGJ7dVJnThPbw3vuqUyZWE1GSgEtyjiPCuTsU3wuJnj",
  "key19": "3gzczRbH3MTD8nVgeeWAH4nzzYhbhn7ypyTP3a6JSr9fBcCLFeW6EeaFFhXFMSML7dgv46kw9yGEctbY7iuZ6Ymv",
  "key20": "oAee8QLNnff7NRFwpK9ViUnJhxNmfPQmu4h9tHhXnrxdsmec1nDyAMoKaAnT46Fcp453qjEA9rhimayyaZQZhNo",
  "key21": "2zpvEuNt3Eouf1PMikfEhk2MXhEznvBxKph3URYSZDCtDzeqxo5mgxk31tRfQomDkN7jfhUVEeGwf1N5UT4Qbp7j",
  "key22": "5Tb7KTF3Qz9CrbP2p12zw5taKjER3x3ejXfWfchMdfEARhmik6nLC7NTkJy8fb4zm1CgNfLJpYHVocwEeAnCqFNK",
  "key23": "5RRna8iidXBaumrwD3f8ryyaFARcrFYzeJ9qTRJcrcVtnAPFW9e1CftA1mYPPav6D3FcBeGRfS3uBj5gLwsKre5G",
  "key24": "4DDB4kMRxpVowuetc8aZgxEdz7yZsHWxxt6HGqvgN4ybLXJbazMno2YF1emCKRMR2kHkVAtVTxpgP9UuwBRFYHQM",
  "key25": "4WWJuCQxSSwXEGMCqCctw7qCzNkxkQgwAnWqVjkGbxQsFGkCZP1DUz2YkhWEmPgxiiDeQG39eaPCP6aTmb4ieiWq",
  "key26": "3D45JZyK9P8E7aw6PdLy4VkqvUyLZUByWFNkZpb3CdvwAfWxdE56xtF8YXKdrrimHFkemt8XRb59XBEvF2wmvMKz",
  "key27": "3sCQD5yEHFF6t6Nm7LRbxycCegA6qXWzr3664GmhQAUxcRUopffqzitHitgJTKxmNTBxhYtnG4t9TJ284zR7gnni",
  "key28": "2TqAjNNXSkb2nBfEf7kwfw71HYsfdufYtauGMWC2UUmSDJ9ow3UpEhtiF35ReUFjqGwrYNP3RAEJCgXair5eaDM1",
  "key29": "NoCEdqqKEyoAzzR8eV5FqupL2AEt9KN2rDWPtW9N9QcrvfKwXK7kDWJaLi1ntnrv5nL73tvrAXDjGo6RQodzrMK",
  "key30": "2GyEvqWYeKptStJcFpG3zA2oW44NXq2k2hkJEpio7qs6ku83NFZwin3KjmvQNFoadAmXydW6gRAcpjUT13xkJ6eH",
  "key31": "4Tf3pYGErPrv3sTakCX7mLqc4nWHwaFrUM6etugDA1MUa21Z9RrmyS9ciWVCmxUp1CawDHt1as7aUKgm8tyxTPz8",
  "key32": "49i1hWahf63wtMx3RbakQS7MGKubtDPrgTvY1mzBsWwjyHmE6k6odghhzoXabkvwQqZShYfBCcPwNUs8ZVpM9fqj",
  "key33": "5oAyyahurMWMurHEUZbnS5oo5bkaR8Aj37VPQno6Y6ecGwjsoK6Avjj6iRG94nJRNpM2qquEifhhRZeWefYd6h6n",
  "key34": "5arqzBQzhTGL9EvewjYqLqYn6SwVnNKcTRCBSMUAp1JPtKifPaEizwuU1Jq8ud2chCbFNYo3mvSg5MHLJP2DRerv",
  "key35": "2xiprCEVQbuQwbPBn1h4uox6qerq5SxyGJYBRAEJ6vWhWLEa9VDag6E2VxkJaS4FXcmSnkqd7orSL9JNiAPxuzF2",
  "key36": "2Y1oQVW5H3jq6wbWxUgCJNQoRxg7gp9UuENw1bk5paS8CZcJnKqkthZQUNFuG7hXq9TPuE9fxWMHxwJzechC4aUF",
  "key37": "3j9SpJAQMCYLvZVU2JAHDPFvx1Lo3MbVNJ5cTSZhZFaUqL1RmMsae6efLdXBhtFf6Bwn8WsNJkmCpL1ABUwdUCGG",
  "key38": "57pNKJrCpzXheJfecgUXzCUiLWYXFD9LheFqbvhkiVJX2zeeiEJw9sWTkuE4vSDp2gad7YPTkhs9Lbv1nNABnh9e"
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
