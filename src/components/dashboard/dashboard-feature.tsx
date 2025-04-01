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
    "5S2Bf5474fuWQaaSKVLc8FW6g1SQ73vtpg95zM6HuxvSssa59VJE2fFCiYCNZS5LkDiN1jzC3E2CPSYRVtcu6KiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AWKMrDiEf11ya6yJk3MJpLJsW5PMFk74eyZrCXu6KhdPCHaowTJdjHfDzzUyUB2sCaNiYVFdY4pfFJaRk9h4fPp",
  "key1": "2c2bh3ZCobCoPV9p36nf2j1MnEWtfY5ANe6GHs6obNU5ZdVjpEzpBD7pdsPT3r71ro2XiikweBNT6gG7wCoj8EGT",
  "key2": "3977KG1fHwPdtyNSqNESAXwZTLdY7EBhFrnxAwEJS4ARWT55CRH3tHcVxv48kNLTokfVB8eX17Z4ZMjTdVwaQq6j",
  "key3": "4m2dvZfAgwM2Rozwehfy8WFZcMr527VAPw85rdetphXRvNUdZrvhx2SGnTTNoKkmJE7rFoy6pzY7s8bNrzijWqbt",
  "key4": "2LLE7vrgAeMBFcHDoCpxZwSYXo1xMm1iDoyef5P7Hvrf3WV38qxyNNzeGp7muR86cK3ffK9PYhbjxFGgExW8rkEW",
  "key5": "pjnr7zJvxvn46h8avsawePVPrqnwjn9bJbNhFECiCehNS2ZLkJsqdffQPWtsNbvuPYoSCMMk6iaZTRTewoQDzcF",
  "key6": "276suuA2S8rfVHQxfqW6BQG1okduc4usETQAwnCgioaAfhzYgy4LDt1bky3zduxKyaMQYzZQ6jAdYURr5gHwZpuG",
  "key7": "3UKWNutkyGZxNHBHhYZ4hQds82nPhVXtrmjHRsqNQhB1QJfao9QUkoAoq6EnMEYmiijHYe6eVypwH6CJsdoSAt18",
  "key8": "z8U3xHNKSVVqwqUuZPURJCSb4ytMZ596iN7GgVxEDSxT8at7PgWpQHxieogSzL8RvBj266QAqnbffKoHRu8vkZF",
  "key9": "4qBoopERGWhwsrgwPuvMkZYJdjKjMZ7Mh3M5xWugFPZHHBTmRXyfUsGB2BCojeWzkPmGYQGs4u4FfBTHomHCXwn8",
  "key10": "5VdL81KgF5KcRh8R5gvKKHQ6FupUsVvjsQiGZjSgPjQxCy7eoRPkTHwaEoFfj8k4ke8RLtHznREtNYtGmShrgsc2",
  "key11": "2w8KkgpB25xhAYiCPUm3wwsUumnUBwuxB2rbJLyQEQk3zACdmWitX3cDTtvVMyF2WgiEhFPYoj1V5JMK9G4gyVwL",
  "key12": "4tGPkQHh1wktQLRccN9ALupeXDogL6Z68emr6bgMikC7QSv1FZP7sC2upTQ9A1pXf69fw6LtXiNKT4dZxrEy8yJd",
  "key13": "2a8WXqEWXib7FqKPecAeu4ieGgqtzX7k6PTdQt3dQxCR9r6yTUniohq8pUL5S3jnfK6NQMdJrj8DCRikmH2wRLu9",
  "key14": "yFjrtZS114wv6JH9UWBbLqyiUzfijdJbW99UKm9gaRWYDpuDTpgDzuTJwCCcN9GEmBC4nzF3sirfJUpHPXa8GB3",
  "key15": "UrZJ7QV3d3oXzPVt9ZoVNx4DruqqL6fhM7eyEFNKU6GbYhLeeW179exVUst3a287PrMMzDVTNa8S7Me964gQxDN",
  "key16": "3adoYkcf1Tw743wBSGR7sq8SztCUjG9JyJoBvppaFirDghM5TtoobWNDKzBpyvNamn19UbP3Gr6DP8vFBTTCxjjB",
  "key17": "3hSLfesePDGrX6eseXVqXtLGKLWnbqrmCmQ1nmCRZwp52jDzi4JLaGhjhwbcnmGNeFEVMpovbGcUWqdQePkTqGDG",
  "key18": "3icx9ZcgyXHcZ5KXKFSUMtC8SQK1WTKzT9KuTm2syqw5quG9AN7P1GPw3bvLKVtUoFiz73dS2AGUidCFyGKwJRLe",
  "key19": "41ytwCr97f5LiiEZio2YDfkrR8zSpjUzJ6PD57G9CPreSHHsXVkN2Y2keWWhAQpxcB5KjvAuJHP5mrb76NeLh2m",
  "key20": "2zxB9CEny46VQoCfZnsdm3QuSLhBbYY99Fdk9TT6WkuQEL7yytF6vsEPPo8MXdzrUGLitRC9m1VejtBBM8c1crR4",
  "key21": "gUAhqp4QZC4WhcLYKkxF583A1RSa5voPSFtu39ALyuYmCba4ebrHm9MF29g1tgeYbVdVo5p36xFvV14hsGy5asK",
  "key22": "3ihBsfc5YhETqH6m512pjD8XBmtpDx91zXSnDarRTw9dpisEB8RDj78xcmH1AohXQtpGs1gEiwwYvZKixqerWAJz",
  "key23": "2HKSPwEhz6dqNwfR9E8DPQvNsfntV3oHUuzcFhe79PkoefcbrUPRna89w9o6p97EYukBu1X2qsd4YQ4oiYXGd4re",
  "key24": "HK9iycwe2rzbXTDXzXMuYTXHCJkZTciJurJ5SHFP4UKRDDVdzPWBaQ8Q2aWSEwKtxsjyArvHkGouAhURjYr7jp5",
  "key25": "4339GMp3aUjWEd7DWBtc38KybrDjNgPTPS5pZhWgpsUWLrfjqeSCH7xTKrcMuBoH4fKdq2ZYs6GeVuKpovzD8aKw",
  "key26": "2sZHgSw9ECKHsjVCu7WRvn2U7R1k2C27YU6hGokDY8jALrmoLMyy2Lb2H97tqgHDAjBPsegtYCQWj8DYxCX6d9ut"
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
