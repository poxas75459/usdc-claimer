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
    "5hXGavoXzWuHs5ft3g82C3zMUfsHQ4Sy3wCaoATABjbj29as8J7pf19cb5QUbBHMR3jvrM7QyMS8eKScWjeypfrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxbN8L3cCiqvxtAtGyftfDE2e1SDR9GAvrxE8r48Am8VzmfxjWX67rYQVo7Dnw6Qdty6qM8ZLvEx4NDFXogtBse",
  "key1": "4LnV1ZmfBs12FPEwrxZJrACzDQPiu5inhuAArSwCi3wBEa3esMK4sqfYSobDWVitRMUq76RXy4wfgFBW5s3yr2Hq",
  "key2": "4wL1gikQ2ehLWJkUEG8e6mwQ6McrgBV4GZY91wM6Jsqhdj5PHqQ8Cyhbt7grCAWmdst8zz4hVbbC6P9jZGdU7REf",
  "key3": "3DtzLcK8sJnHN6PUzCGSP9euVNysMCLiFMB8JW9N9uXDxdwofoB1yo1D6StHjRUd7oGfxFqvih3G7JAkjCwpg78C",
  "key4": "55TJpVhvAaR5bMLfiyZyyJWjBPHN9UNEPTwJTgXDZNjQHxqqfvVxTEHDk7hzcnyUjB85jwXQ1rmhPCRE8EvEpMgg",
  "key5": "5MpnBvCHwek6FDjniUcX8GymZ7P83hpcPSdoGngARwJsfCohzy8St1rQipz5dCehTJThLGaJSQiU5q8ww1Vi7uAf",
  "key6": "2Ns2cpTcT2w8gpRwjGe6db3x3atbEu1CD6LgBwsUPHJcEZurhp5hcjs9WPkKe1HKtTP1v4juszoBh9qGnB7RTB2q",
  "key7": "29wZ9MgjnG7ZRjXH8nnH2TAXD8B2ATHydcAs7HvKE6BLvyGvLQjbBsD6yttQmAq32cJ464QmoRMy4e4ahxE9mGBW",
  "key8": "5X2ncXQiAGg2atUrVmnv2QWbzd4gQjY9UkfREj8nCWonKnGbbEyHezu4Xn5q5Eo5Vb51emzFp7TKN8bdYJgQZpq5",
  "key9": "42QAap6qobzMrorgHTXFEbEVJMbtbsQrTybRdpxmf6sgobCUwY9QjgpkUoCdqpii7cn6UrxMYk79xNpbL9kDS8nq",
  "key10": "4oBKGB8ywwFEy1PADFDec5n71Kt5fSuDWBiCjtzMYFLcyEGXrjqV513cmzZw7K3SfFwutpuk31F5o6VCPaRbVERp",
  "key11": "3Zox7iAJ87oeXrapaUFt3nG7zxEyCtdTY2YBst63et51xkyDt1ovC3xtbdBjTbip4NL6XLGohmC8RQwHHnuE8qmE",
  "key12": "2cNKuQaupppNvgLTzcTFsoCdyTasv1jZYTKK4jZzkho6ZM3DVrFadCbwpqqRGEbiSwHLa4x3cEE4Ep7xKFCbuhDP",
  "key13": "EWBo5QqsrSEhjZTFpGfqjFshZNMvkTscaS2SD5hvPgCqSJ6qAbrokYmevyvYQvD2jQMDiWibffcWYR5kpnboacY",
  "key14": "2LMTShUQfh83p8EToGmyk7gR6qpfzcU2Q1MKvknakk8GMSb8bSTryw2fdf9Kn6VZkLp1ju3rbsdkJS2bYGG81x4x",
  "key15": "3qzXqdvJ5gwXbuWx6dBTEE8hE74cdQrnVj843RpZBqBSbkiEyLzvzLPE1btc1mzXBusUiGouWscCmYAfaJWWkoqv",
  "key16": "66q9PJTagsuVvNBT8fAYfzNYfZ3ZhQaaKWdaBydnukgNSbALN3Z6fadVYqaNsBB45XJffbdvVzuJwVjnPAxo3S8D",
  "key17": "5Hm1FRnh8UZaPSwvhkQLwYobPTAYRK9SokT8HUi3YTMxCEszS8GSWSxVkADya32YJs1MPejfNbzqxtaFbX81T6F5",
  "key18": "4RpRgdstRAyCDbZvnXeDi85CWCQWWzYbH8CwBAGrnfhh3Ck47a8DD1DH3xoQMKgV3eTawQUSANUc6pxVPLGc7HPy",
  "key19": "4LpP7ccpQq2PGCTvXpCsJp6Kh3FxkWzkxRd9tzBDFjaMVvreULtf1c34JgvVguYCFUCytuL841tqcYQmPJPtVakh",
  "key20": "4zPiKJZCidMMaARQYLSSKKMeLzQckLYSbfRTw5EoHccixCms3GSrEoUipjX4KuQz7k9gGga4tDvRvphgq2exSzyE",
  "key21": "p33Q5a1TpenfuVgN1q3QgBqsXmEqabWz9SqFHv6D5s2qFijefsX8bVFDSo4Ze4jkTWViQAvBtcGWuRQN1mT9ao5",
  "key22": "61J4LD7h8czyXomWfo9LQRL4eoM2dpnSsSWJzjx5DWDoJXTZFw6YBKpxzA5cj8d9PKsaU95CH7uxSjCg1k5Z3b7R",
  "key23": "5HkkKNvmMEvuECbhydd5dTdZ3cb2sz3bkf3EjAqNHsu5FyTANTDLq3iY42gVNvbsHcuiaMvGgrEwVBqTrcbyM7PW",
  "key24": "5qms3xZGn15EPqLqABapLYKYcrRFA4BTNA6XgQpp3P79hQSNFmdhBrHuK4pKQkzr7951ASuv9xHc1eTEryFMe8cY",
  "key25": "4EtLv65wVr3UqxHTt6qVFxZjJkZethhYqytzHDa6gYB98Kn9BuSBM1M9AiZjomnhQPSQeth2V2dSYLavM65yhHHK",
  "key26": "3KvcLfucBrUdYxagVYaqNa3QpWscjvNb88PUUh7b2bBngTpq1jwES6iJYvJSm5ZKYByVN5zLoqenFDjJWfeqUf1X",
  "key27": "xNGNTdeCMMRZRavqSo6wJtiGtT97s2opvXNHgsGjNQ1EwWriLCLM7wbJsK6JuCef9ZJA7ez5bYnvenBJeysJMZZ",
  "key28": "5GRABbgy4m84q6oS9PbDMMFvsibK3XurDwbqes8N1mKXVHFEww63DYXPG4FNBg4Bu8kW6SfftesmzwPL9Hi1fywN",
  "key29": "51YtnrL9g2W4T4T6R9VjBM41q73FHWFm8643N6bqYzyJhKp2TdcK3JAmNg2PFpaEExMMNfoj23b1nA3STroy4b3G",
  "key30": "5MBMFCWa55AJaiU9neZVwNN2Jkj5Ap1oFs3itkyYFRGJj7ka1T6bYTqSfYWd5ZCuhR7eXbuG6gxKs8mqAUZkmyDp",
  "key31": "4S1Eb1LNUZa2RC5bfMhjB8SxSU4N7Wd6CqDwQo6qvQbkoFodnzeFkyCMcSEv8cBekc1ME29PhKDrGgiUHY5Fea2d",
  "key32": "2WxoUTcqy6kG7RY8dWSVyUpaX3f3aMWfo2tqqXzvoNbRmenre5pA32D7W9R8bA97h28YFDWjTBezjBCiWZMseHRv",
  "key33": "2L2heRqc1hZFQPaca2A7ktgyGL47EK25ZAi5EqPuU1tWRF2KZxWxcGfdYuFSEn68ZiJ7KurohMgPEWMUXLhUzugf",
  "key34": "4MT7ymbUbyPNzNgiEJoEj47Ffn7fRkVmxUAx5fzymQRuC8DB9tGahjL9HEnDsAp2ixSaRowPG4VdSmKY2vo6tUm2",
  "key35": "4Pn3khf1XoKsjZ47gAkpQH9uE2SneM18SLBDsAjbbD4LdatGXU2tifLWt3xvAQRT9o3oHXMFuni97ahKLUe5RbJv",
  "key36": "UuN4EjJxtQwpHkitvB6NgNTiqw1HMBcN7ZMp9Dgiz5aLxty263RYLYY8wpY4LiW4TCzx6gTxuaXmik34bU5coYP",
  "key37": "37LtzRZRoxXv3NKcs4bfKZ5XzPYmpCcG2GbNxVpy2VJw7KncTfZKvmGZT6T14QNS9nA9WW78qTbAtYdo42k4vcsb",
  "key38": "PNuEzQZQDTC46tViNDa9UnV93iDV3McwzFtJB5pbqVzNaFBi2gjKp6Q7XC4aGUQhFpxwdfDkeVMFoDRVQ9Yv2w3",
  "key39": "jZzaCLRzbhH968FbYQ2idVm47CEfSSn4JM6oTCFicippHZ7xNtvxr1gtJPeP135Hb7C838TfVLPxA9d11BhAASB",
  "key40": "3zXjfTiGpJf4jW8Ujv6eVnWcJN2g2m65438LUmhtTV6FiCg9VpbyLtJ6WDr5H8rBM8Xh7fjEqvXwTygtt7Ke4EQX"
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
