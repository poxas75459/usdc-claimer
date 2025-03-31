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
    "5TGZiQ7av72TX1GvZhpDSyjcDfjW5AhRV1hxbsPs2gqwEaCeqXPTisnKZa7TVVJyYiUo5q1FgVTKxk1pJWQRCo2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6612NadAYeuw4uHuxB4bLdHYE5B7q4U1nJ8JjEB6FNvvbUHzTDz78oZhVa4ppJCGLpwyRsaH8XQW4M6a4MF7BoC1",
  "key1": "56pzxTxqEfNGTZ8jPb7amgST66zjPwXuLwTnwb5AfjKSuWJ8dKYs6FFYH3nB5Rq1YZ1SwCpxEtdwsu63Q4uByhnM",
  "key2": "VUADd1rCpZ1DpRYmiNcBP8ySub1rUM66jxHW9BkSxhf7eFxtweidhnncYsUWGrtPPMdWFwedyppcrVp6hfeHxJZ",
  "key3": "4fB6EfgWZFUm42KoseQKGm1B3FcCHTtWbPdZfNmRaCDC133daMoKbEBimK9tXC7QLT6NRc7hHtmaizFBneLcoxNv",
  "key4": "5RurEbehFcEY9brz7r3qQ48hPH9CooKqi4AiUmbhqw21xGsSmy3K9PxXZUy9BTAeZPVwNfffnR9LLWBYugtwTKyq",
  "key5": "24rjd5dSexMJYdPbH59B83QZvqVCKBtvmsH8Nxd3vvXadvoUFJBYMCyttHv7Kup4gTNw2PCE4NRqgadxwwupYrpS",
  "key6": "4z11Mv7mTXR49jMapSKzYpWZEH3tTNqw6LD8V5pUo2MysSPusc3ARF7nWyTD6ppB2yS6CN8phMPCeP1Kmhv1GEEs",
  "key7": "2aVPiXjmacfGYHRp7sPnaB91CmFbuBWFjq9XbC3C2VyyqNYftqhuMWiX3oDQmY3YZnruSY89DfwsLo7jA4yg78qN",
  "key8": "41JiUft5Tc2QyRGuRENHgF3yVL8JBBRgijF7SLN2N9Q5M3LL6o6pCiQhNBCw6sULFnsE39w8WjQK6vfcxcea4kvb",
  "key9": "3o3s2pZHZdg3nZ7yZu7Z2EtKXMBTbkEVnSQvPrtB65bnAFezAUaoazMbRezdb1BdTK1MXdCGpLQab93jSQX13rEs",
  "key10": "252fz5gsjddquopxStg3vwGPnDrzLX3aFWNRApW7Bi1fvxhD4ieF1hamTXtS3facdzxmVdU4SVEP8rVz9QWe7BSv",
  "key11": "54QHmvwmVmZgfFU5hgrfJqQaukeauAc7qDaSTyGGtZQ16cUqsJsMw1yB96WjSTTjdwT8zce7hfaEn17AZYa4GoiV",
  "key12": "2HRxbwNsVcVVZLGdV8UiXuhuemRLmMJ77dEJ6Mm5zAZCLUEYoMqANZZCTpLz2g8AFzUcAQNQBv33CZXDp9XTyXPa",
  "key13": "5y1a3Y9BGSCqa8sKyPecaFjSXZumUXqc2yUJZzYhAbuazTKpHEQz2QWZV9XW1aP97KL8H9dA4rtQaFG7Zn5ULvt1",
  "key14": "nKpu9tuYgyMR9ae2mfHac8hQtBaRBdn9FBFnXtqof5K35B8SNb93Jbk7G8mjGsNBqdgxXtjpVw8fNh1HumYjhvi",
  "key15": "3Q64JGZzAa83kSiuSM6t5Zm4bYBD6JrLca2A7SGJ4bJhtS92P9BZRnc3GfCdP7jAh6boWuv9H3RRsGaN65cxLRqZ",
  "key16": "59UprTR4qhUycK5zPuSoaEbSgb2isWeuz9Sq1rFTUoSdUicc6YyggpvFuRkxufSP6hNTuiiGw6sSqoZkZfaLadHQ",
  "key17": "ATmext1VFFDHAxFiuzrsx5aHAdDPj8g4qJJJYgpPTCp5UAcrbbXSFZyFeZnzaM9Q7XKJR1N6doh2YG5xKYfsHXZ",
  "key18": "2gvGhz8cVXfa35WmtBx7eBAXw56aDySJUNi16A9hpjLzhDhEZVk7wtaPP8PxqHp6U8YvxJCCbskYWKTJdc74pywp",
  "key19": "33UBnEy4oRHEe7AJEfwZv7cpZ2ojFKhSKjv3AmG1s3MHvr2rYybBpWTuSPyhc6eAFEm51eMwvfG18HNvKo3GMM3Q",
  "key20": "2Lox98tSHvA5jfUNz2oePGiCzNPGgjarBVAhq1fchPtERFeBKHjjFzk1o3S8BRhvZFzVy4EM2BiovoeicGxXEk15",
  "key21": "4DY9jSpmV3KGyoC85urqfao9DH7JR8nHabmLECggU2hQwH7rKsbgXyd5CTYdvkRG57jxRrJJ8NVagN6y7U4RcRrj",
  "key22": "3HHNS925DXPk2RYrZFmq3P13X7Kt2u2tTdwxchsmRzTW2A9TVfWEo8eR83YtVH4qGzXo4pSDgQtpm83M8DYEpP1y",
  "key23": "39XgzLqYwUzfZ72pRZrehhrjfeFHgAbHigCRZbenX9wQGX2AvZk7z2iNVyvLtXGK1rE333noaytJdPzJTTk35bbf",
  "key24": "4UrgJJw9NKExgQYfqwRje1aCi7P7VpkZJp8SJs1MNSddiZ5Z2ZemEf2c8BrPcpJJYczwo5eEWkD42adcqaytfh8t",
  "key25": "444SZdvxGhgo4TQ4QehJRQDCF1NvpByvQThJBSR2SWKxVdyjz1rNCFMvbg8QPXyFaXuz2aXk6fnZ3x6yfkfuqRay",
  "key26": "2BmwnaNPPyz6s4eUGMxB3KqhUjK4DFGqCdizt7nVfCCsyyowoJEZpKrcs9AkkDXZMnqLZsJeLzBKDRJT4WtMgieC",
  "key27": "3JJkwMsDz9Kfs8q2KSBfdphEL2seyGniBo5MrJNWjpFNGU1zavTyHk2rVKcVBHXgzAdz6BPvkctRt42RxBzYzirK",
  "key28": "2vw9naT9BHjYVEWnAzkAsedzRcDvn3QpzVu8P7ckCGomFP2wXcB9skgLFCYfSpHB1v4d7k57pP5JBVfRFVgoJSPS",
  "key29": "4uTeoWaVvGnLcvgHe2D6HzYV1YKjQDTTvgKLp3An5xDavxRKSXPXg7EHb7tsogjLa4zYpCkb6tZiJM3y9WUHQBHD",
  "key30": "3gq4qvbpt2z7gNTNyuWZB65bugbHj6BQ4i8nVx4bN2jY1hpRLz8yRSpKQieCZiXsvoAdZvKz1Yq1fmXR7GV1dN9Q",
  "key31": "3ZMw4fWUktCttm6Pf7BFZsNBu5WL24jye2w4B9Dy2Bey785xezcPTNwYFEJsv3cpurbB6VfPcUq1MUHNkmE2rPpE",
  "key32": "4i4zf7UjBU9g2CnhCyteQGDg7U6RuJpbjd4ebtaynvqRgGj7CiJeb8YaEPbio5J5cKeN8K9tqXHARjrxXo9BGdKz"
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
