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
    "3ys8P2t63PWS255QT45Ci4qmhbMvbe2XScw2ALPQfAP5KaDPkShc65qZtNmU29ZFK4RGKheWapZzd6w19RFxBJ9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjqM2Dnn9PQm2s9QxUv3mboHY6p8FC9VAjigGxhvjvB3Vdpq7frwasgGpw8HpKf5TVFejSQCDVF1gntds2WVA4r",
  "key1": "4MSeCA2UZ72Nk1H2tfC9yHTogZj4fs27NyZwXPxofq72dYPcS2wULd6N2jzwYmsmzBj8acsg8rGx6kC2HjDTtsBW",
  "key2": "4FiDPD8CxLHGVgDgHwcGKRFt38dXfc2vkceHtzGu72wWjcG3X8rFvvLrScaNMAanKasNgm8HDF3wDuaQ74iTRKFj",
  "key3": "3oSbfFqR9v4EEmqGodCrJVK4EfPt4XLcYCypj4NPR69zmrP99bntS9Co5k9zbnjf8CnuzD2YgFLfwkCuZhVLNiYu",
  "key4": "3zHJGE5bymX1ddhGFiyuibBJTzNt5C62kHDGrxzcwvECTqnLN4MoJ1W49aRgQ3YY4yQF5oMx8jsxQ5oFSjSnGddk",
  "key5": "4p8L6uSgkVgmEGL6UGSD9WMt7zRh3YtPUC6rGZYX1fcrNbQvKxmEWhFZysjrB9EEZrCc7QhHxqF6pvZQqQLoogMz",
  "key6": "4snrTEZwhcFRGfB6o764dKxymBam3kjEuuEXJ3T6D8Jx5tt1u6WB424doqPdxUofkR5Ji8YMXqUPfZEjymCH5weN",
  "key7": "3PHJGo1f3mLK1W5D75CXmXFQJ1fZQB4G6BvGHac1XkPYzzYCcDkHmqnEi3AHLpmxXa7QfSTB7Vhd4xH8kjN2ftry",
  "key8": "43pRs2hC5dUPG4Sn8etNtgWErCHxGrb6sN8wi5u7i5qLQh76DUNk8uLnVLYFrrvVUP841XodtBhWL5WwwBy5w4KW",
  "key9": "2M1h85hhoedxMCUg9k8iCfg6iRrnPWUwywEJgz7Kgz6C2tmwwZMZe2236xJLVc6oZgCw3VpCLGckzJ8PvPVwoWZ4",
  "key10": "5wKdWBY1GkjgTQ8GJ4Wws1EUqsq61ts8bLtCXGr8C7B7fatKnHdwA92je46hGhYfzbPv62NF3niRQyU3duiLAkJN",
  "key11": "3Whx8MEwnXhE8P2mHYahwz4JYaVi8KxtqBEBbtiz26XbfWh17w6An39SmUPffzwhG4U3gWS5sWvHZMs8y96JpErM",
  "key12": "5mU8wt5vkA4Pf9HZUxE9WPNhiJgiskgpWbeRh8mnR35k2oF7sj4w39g1var7bQCNAqch56huK4Q3nTb8aTGgo69F",
  "key13": "67iMwZxZthwaUpWPrHnJ63UsihU6HVPPRQJEEepsiVGZbv4SH1H4NFKsmDEVtRv71LyAA4g6VTsRBt8NQrVt5uPu",
  "key14": "3py3bN6E5ZbshuPhfUYCid9GCgZzDt7TUU2pN9zqoohpdMR27ZcMHSRYNchSMnLh3Zr49CJkjkMWpFcbFTzjJmt6",
  "key15": "5WW5izwQ1jMztxHvw7r55uCTggW7MFiED7Z9aREREnNmzJZmJrCWqCfFXL81v8dn9Af21Y4eUxKUqKTKRnhRuqU7",
  "key16": "obopp7o6tQhKjnh4sYFintdDYp9EP3ZGxUvHKdHJqdthMJpnjbktGdgnYZfWw6KZhTv5g3wjEMUoRWfRoaTjniL",
  "key17": "EG2MH3mvpNQTNNAaWCFywUCj1D5ZnCxWcNRy1Zuy8FnUmfsPwGSKTCtQXUo5z6XVVBKhsEVUPQQzuGhg68YSUJY",
  "key18": "5DvbKdo3CZSp1qeqcYzwtDp234KJ8V5tKg6jUwdXic9EouSituGijPydGW9oj1x3TMFUTWqPZEc8jNUfdbE9XChU",
  "key19": "3bt4iyTme1nEdM8exSq6fd3LXaMNkmYz5yb4mucdL6dwgCSzd5b4xZ5Yx3S64H6ZxekUdEVx8Qzbo8GdX7hPVM8j",
  "key20": "CVd62Ca9VWGpJsPp9gt7UrjCz74zSYChLQyASfgHsziPnjosabGgLbeJ7s6g2ekGGqCob5ZrhpYhdTCPGJnV5hq",
  "key21": "2BfUns1BE9SZQAiVZWpum6RP2sTs6AayzKmmZ4bcJ8Vso8tx7iQWfujtYydRvQYEyRjkmixw7Gi2EWsT6UtYfNQr",
  "key22": "51vq9W4k4Pt5QoVQoSmGy33bqQCMYRRhSc7MDZ8QYv87WrSWEUmLUdjuPLhCuWHHp9ioi1tQeBzHFkfqVXhEkUe1",
  "key23": "3E3Q2vrxAbk8CpXmwg9gJ2VV8GQKDPkEqP86CDvJst4V7Ppiu53WjnXxMaRre1ceqQyetmY7VyRgirWK4UTkTJxj",
  "key24": "3RBg15jrvMQvpn8wFyNrAUmhoZC75skQJD7qGuesTgar8VYXGXtTmQD2EyDqpP9YxKny6YZLGKrXEwZ8gi6jqoTP",
  "key25": "2L5v2TQRkwoe4mrpSH1ryurHf929XS6CqgJ2q82PH2rNAHE7iFMdjtQbo5Anyfd54WEJoR5EsWCQZVhn231pp6Hx",
  "key26": "2fWqBnyH2vZPTbSKxEVbvNBfKMQvFif8jrRKakHMtWiZptxyAhUUDvgDBPcXg1JvRA1dZhCA4AXZcGXq8zWWCiDq",
  "key27": "4cfj5yeJZqBASzDsNoNsCEfh1J2jFGM4LimUwC2ef7FHsPThh9fZ1f7ZS2D1Ki3w6Suo7hkDLxDfMg3tZ5p4Yux"
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
