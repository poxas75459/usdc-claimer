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
    "4wS9PygWySKhLTBFBGBc6uwFRwb7X5KrWGwekhW7SG9xPygnD1EP5LZqaYZYZm55dLxc2Vq3hAAWvQVGvbt8ix4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vG7sUKi7rixFJcPk5rbLjvFh8Djd7RF1z3hqYhpqnxdJeb7BKv11DtayVDDUoQpUNdoi562qfUDCPe9xYaq6Tva",
  "key1": "67ZLTLxqJ2xXGXY2nnjyA8QT6nWnbnSAsnAKmiDaACzq1PcyyTvCK8QQPnCgCoysG4o4ihMQhoZLMpFe3CZPwpsW",
  "key2": "Qi6TXqAZEh9N63VEDFVqkocVEy46dmeRpDLPtR7fV3SSXXGGJdZ8M4sWVXqGBdraMmbc9pJriuLLoNFTqAgcH7z",
  "key3": "3Ygc7fCjHavj5zZ6b9J2PM7ohLSMygRQTBKGJnoL3L8aJwLErc5qQehAEHSvSEzdV7K7YjC6PBee9CkpCWSo6eQb",
  "key4": "4qBpQyWqer9up7A1R3qh48k7LwamjZxoWxDvC7sXYo62uVjgM8BcaQdPYmzDsuEW1Y1hBHFbaMzbEzMZ58hEpkvA",
  "key5": "3Cb7tP5T2zVx8Up4QLJkDSXAVY1tnwHYaikRSkrR4qFTkK2MMW65CLvnmMhorRDNRV13DdriMJ1LtdnPSkeDZpBG",
  "key6": "418LoyJqJMp2f6mVfaKmZD19mF4LExuhYDDy872JpmGkKfXJHxGo6jyCbBAFSNrUNuGJ4k4DsY9zpmLKr6suELLL",
  "key7": "5iKPD6gwM9SN7TkS76txfFsAJ5cyxTjd45eJ2gnsoV1BSJr3SqTAs6XiCnE9MEf7HWZopndzzaTa6TrLnaKZi2xc",
  "key8": "3shLvMYJJYCcZzA8yp9QjmwSrZDWU4MVQWFb21qtYypVQt73Tqsey5rx8zpgHUS1JqG7Jix1MjGDvS4BhR93trbu",
  "key9": "4W6CQCDuaS4pQYfYXnSBX8AndaJXnDPfLm3p9Dry3Ad4Cpjuf7MAVLJQaHzDxSuyZBKQ28oN2S6p99GYeHvMfaqN",
  "key10": "5AwETjNWQto4URrSTZxEUL1LChE1kiDLWjDZPrFQo6MqXaN9tujnPWtsUmSj8b6TSqNSub5pVwvmzQsJqUaq9XTu",
  "key11": "2ihtuodPEJ2bq4syhah74rswp9pGHS6femPHFxdjd21Mj1hjadPnpNKK2MEiUKDLigWPy7hG4TjsTXtmhJmAHJZQ",
  "key12": "35umMFrBnqQhrqyKHorN7m8cGf9K67nBJx1ErguwdfWSWxmxMUQsen7vnJjJkjVRecqjGs3CiqrCXUdhoXiJhiX6",
  "key13": "4MFERRJqg17hUCmQtpXYRZnebry2rjjptRuCt4F4fCnS2vRzExvfiECReTxW8ciH2933e1gHwdBMhfD7cbDbyM7n",
  "key14": "2fzNjx7bA9pM5bV7GyAkyhxovsbWCAKUbtK5jJiunutR7E4UJhEqmiynJvxKnVCwDkVzEM1gnuWmHtW8iMEi5LUV",
  "key15": "FXW1mrriiAKMcqZ2cQk4Tp9r1cekPauiGggd2NEaPF4an8AWQNBHwQyxa8cV2MuYL3YZh9wPV66CG9Pkv9SVHoZ",
  "key16": "51t9M9aHY7kjRCczq79hYHioSoe23DQMFWGAC3JiL11VCrdvkGBLNqSCKRfrZ3aLDjXXtfHGWeU954AjjigiqWJY",
  "key17": "57NgzjFWrcuhyvwGdHWeWtgzyogFM66hugJfLA97CHHSAAH4FP6S6LhzjyLufXm17PadzybZ8Xzzqdgzk8qSHUq2",
  "key18": "3Qtd78VETLP8vNpRqL12ZfuBw73aSYWnaf9fSkztjjBYEekayuBPi8Fu67VMsXbiwAhrns6fVZQQ1PDXyFT6fbYj",
  "key19": "3Xd9DgrdFubvHj2N7BJfZT7zBcXPGKFg7TokiwWtu7K2j3R5hebDdWZzHFFALJKZnnRCGBvszKdwyZHmH6zbfmQ2",
  "key20": "4dNZbjJTmuxSaMyF3XDN1gBtmAkhYDjhfbjhngSAjf35cvX62wqdWVTPgPDNfbk754dCvYiErD2H2gcG9H1uERhA",
  "key21": "4xPWunAEfGX5LsCZcLiRmFr8zvNiFnEKGcg7hGEg72s6mmj4bvUxbmXpHPasPeUb5ca1kfSFa61RTGwkgMNavAZR",
  "key22": "5JLsaoyWC4M1ZEo5qfmb3XKiipD7MoRFFHsEbYBj5CBVTk8REARXpWzqkGRPEmv59EvhV6ttteNHJdEbduag2zbs",
  "key23": "3q3RvKt3HygfxyZezdq8CXFWsLDc3vBpCX3fd7C371NJWwB28J1zb1qZ9StuhKSXC41fD9SDScy3CA7u155pAMeY",
  "key24": "2UJ5iDWBPi4PePNTewe3VCnq5AKk6TtzYTi5aRxb1FDv9TjkCzCdJvHS6QsGRZcL365SosF9dhB1h8LWaGBPyyzk",
  "key25": "33Ln4wNsC3N47WD6MZYbTy4LWqqkMWK2gLW9AfrgEaPY5jwAuU1LfKdL26Y3V2J6CbnJVko6jfKyVCgQCzHoXEUd",
  "key26": "BDhwM8vdY6FbAZVzbpGNHKwY1hYv2zcaArrVe8jZutcFNHKZMYJfQF5tfiJBJAcA9teqG36nfNBnZWZbdjqQnXW",
  "key27": "2iorjcXHWW25jnEQWSXLRSeuYax8QMLg8EKGkBvYuuehUZBJyk8wwHv25w9Peh8gp2m1gzsKbSAWF7THALQcMT3M"
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
