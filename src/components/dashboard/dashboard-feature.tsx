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
    "3bwRkTijjTjwSG1WkACRDKY9qm4S6unS24H652zvvHh5X2MopzNrtTEmaZ92fGrSREYnhwj5HfPAjf7Up1h3L96i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqiXG8uAmQPNEr5siMvtr8iGEVSbnQimUBy4ToWzNiYwHTBFFx7ZDKTyX3FVjmcyNAoiA3rZk2MF9xakPV3yf1M",
  "key1": "5DgMWsD8AcVW7UH81y5YikoLzVs3Bz86Kur8Y3Chrk81ZAoALGnBzyMHFbTokMtn7hQtp9AxHThwhXYtLtqLBfoL",
  "key2": "CdbhSERobgKL7idbnANH2UrpToiKQauFcK9EmjKPHHdwoX96yyAP2tbZgufyhNjeAChPxDJGNNR7oy8dn79iMcE",
  "key3": "5FntKEAYk2wRaYMZaDV3QRSpCZGkWTrj3pSWe33UN4jxUZZtavASPV1KSZYTGtmwB5pPfzs5weW4Viz4rdYetATs",
  "key4": "5DkYYkkhQBvUVRLqLVxRhBuwXNjq77EUiAFt4PaMwCdMkz8g6nH6u3BSn5So6onWt3fGe24h1MMszddvm5YqE6ud",
  "key5": "5SEwuZpbiJeAoNrFZsQBAW9TqwDr5CbL4t6sCkuMiYDKg8Pnzghz3cD5yvSSgzZzZZ69yuTSweEdESzkcddefMft",
  "key6": "3VAtKbfjmMqxUEUkHGRYiVL4JmCHxtJAQXUrHZ4buFoikfE54sA2HrGj5btkooNTcpxNbyCTo5KpRGyjRq826biP",
  "key7": "2pyC15w37RDC8FQFferpfj6Rq1CeiKA692BPHwtusZJcKwUWamsQrXwnTkWwWDabJRM6BEAsV2t1VZffzYukFGmG",
  "key8": "3n9mXRhi47Aauwi5YMPsmrBimEKqQGh7t1KNfHGdHgfJkSD3V3TKS5YhhK8UNM7CjK1DDfXRHGHMBJrNdGmm6bcG",
  "key9": "5kxxVwCvjD4NAqAEBRht6noPeXdiJp9SWWn5KBPyknTUZEVQq8KaXaiAsYEjHzah4DEhcAD97SnVbFRpks2KW9Xi",
  "key10": "42CSbmWAjWpbhfFc3a9Pxg6AAXhVxiUpVzUbpo7mvFpG3dj2adodbJv8FBMLYDgdwbETv7nWMBbo6ATv3cngEELH",
  "key11": "5kXE6KKJyLJu6KjoAJvLxqyFc9d4TBADSELZnoGtFrkPqJVK5kr9RVyYUngtUXPH5kRKD6ZsCGgeh58NSa7EyboF",
  "key12": "hhNCRjM4DtHgyJRNkfjKMjHXb5j7qE2AL1dvtrAaNURwmjTQC7gPKXm6aT5mnPxC5wfdx9kR9fmrkgMwgcgKBts",
  "key13": "4wD6K4rgh8Ge1Lgvcmxezz4SNDq3cys8Fg7ffMt6HShMFZUsZG9LywqJtsf4PF5qgAXUx5rX7D91JSG8yqjgPLwB",
  "key14": "52g3p2GFba4pxvMLazZhfyKi3xJm9ZwEvG1G7yBuaZDUWGJ44y3mKzPMkCSor66dVx9TFhH8FWDZkQyqgzpXjYRL",
  "key15": "qQHqCGwPkQyKEQAxnxh4YaedfGnp8nqp1gEFapjCww7jbWUPMkth8avEbZnejEsXfdAhF1sdhcRwTgMMCHJco2z",
  "key16": "41QmQPppgKAHqR3rYwyauaVt5qo5rmejLhBVRogaLAZ8LHLTusWUEFufXVsFUA5J64Yn12rRkEZqaFyqwpqzefz4",
  "key17": "5ivjpUe8Ky9pxUbnBJtAQ2tkRh9cZCuL4pFQ7pzYKVPKeAaChEJcLiAuDrDMCMbcAEsbDC74LtpMS5tK5r1jxjbT",
  "key18": "28fk3NnvoR4pUmeX7MjmdzHZkEJEpHFpLVZtdazdDifcSskGMeBi22Kyqthd3QDLx9QPAHNAJSwdRWof9APYyk1d",
  "key19": "5Vq8gwVQHdGKbYEdm6VKhtsMagoVs5Bse7WnRAf2R2dtAw5E3AWVCmqUZxX3YFLLgVQufJS1WKG4esei8bm6eseb",
  "key20": "3jXvickpa96CfjqeeaPudNLWg9j9d7iiSiSpYGHQMenSkbwEnAyyJEDk4EstrbXiWeh9YU6W5dEsz3ApvtpL5Wf2",
  "key21": "2dKvB9Du4AMo63sgEfq6jSVtCJV7UNMV87ZiVcoX4Qq4BvTWXFARCgyNP96XJ2R9JKqbGhDyQgTdAaL7aTTfkXJV",
  "key22": "4dvrspjkrPgnZ4CTxCBz35yTJn3bVYe3Y5NENvEMNucwduSREVJ1yC9umQLM6saDF2pYV4GBWQPCZDWGZ37o3vVg",
  "key23": "2e1v8Uvehd3iXvpEysyEjN63EREh7PJ8qQ6fauuA8SSFVMrX8P2ZBA6YXpWY2WPBLttth6zRr2WSCpWP7dPXerAy",
  "key24": "2tQnLz5Trez6rG5LcQhWDoJmky9xm8BbsxEXbx8MXpgsCeyhW7387GERu1GvLp2EkJxysrzvCQsX3ttsdCvFTNM7",
  "key25": "2NB1aF1rD2dQ7KZo12sii2nAkySbrSsCaqonHHZ587mvt21WuQMEvoEV7ADmsxEpxmkeVF2Kn6A8GPMBYBJbg8qV",
  "key26": "5ZpFRViJMvBwiqtXUUAiXan48BV2m4V6j6jSQVGcuUdSFZgNcFfYtePFEAeizJwr7TcuQyBqZCeyAz1Qi5awEvUb",
  "key27": "44bHiF1CKRWC6K1Xiuz85M1wxxsRjVnCFLDGEAZyj5MrXQyYsq9MbWMQhyvp6a6raRHU8Dc2qr4AfRBARbQ3rnwc",
  "key28": "4jXWwmBm52tXBosoxGhEzZGqhzyhUV9NGPYeGjEpamTVbexs3teP2TRAyyYviB4bFcCkoyqWVAj3XzWy7kGjUnW4",
  "key29": "5Rif5PaqvQvJeEdewWC8HGXuT7Biyngu4tkEnEyYwqGedyYs4AjP6RXBcUXLTNktGoc6jtAYahM5oC6dvcQsvfHn",
  "key30": "kPNidnCdtP2dxG6TK49wP9H5ftjQovAEZ9bAfvnkxeCFnoVKYEkAXPNbLwnZJXVMZyvk85FuMmJJJGPXhvRWn4H"
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
