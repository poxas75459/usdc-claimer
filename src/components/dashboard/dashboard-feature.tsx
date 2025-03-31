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
    "4zJP7KCoUcmjCfc5jkHZx3Wx9CCSEGYJW6TXXxVdBy8bspRESa7AivqB3G828TLJYLC4g4yWBAtmYsx7KKZVPT9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FwUWgCw56WG4xeyGidPvK1U5eunyPPof9VfTdibPCbUwDzamdbeVNmprN6JduU9mULKCbZqvxnmCMuMYsz8j6b",
  "key1": "GZrcFygXXyhSKPYY1ctNVPeyCjAyAYAte748XBQyEJEj4sCTzZ5ZDzHqHupTmBKSWuyQC4tqoBHfZJPTB9A7Byr",
  "key2": "5gwAGpUB52tmHtvpGdc5Fnggnbgq4fv5GGhwkpuqdecHcWPQEty1mwoN7keDghoYiaTCr6Hwf5Nuk37jta6V7k6c",
  "key3": "3bM1bcQFVT8HbEu4SQNpCGJyTiBZQEjpZnXtsNGJpZ8YnD2Lgri8fKoisZJrf3KuK2vt5dkuypF2iEVhfjvXNzZ5",
  "key4": "5eArFfUu6X9aDi7NxfTT5SHGXXmoxXJPVSCcg7sKGtSZHxAFt89UUMd2Fq8aqNhLhchhScU3nLJGJybekn9TMaZN",
  "key5": "4GHQQPTxanv5QtzeUyKtb8ZNKcewp7yAVxo5cPchdV5xTnk5Y3EdGL9s5Qtu47z22DS5qYP8hKeWtEvgGxtyVvrP",
  "key6": "4QFpvawTKvicj5acHYKXCsTCtvohGj46uB5cFkgab8jqtmzyKfr18G3b4ppgGm4FXgnFpSTFpWy4VYkkjSg8dqGd",
  "key7": "4CmE42ZpwSobwKGfELv23nGFM3LDrKfoDRCZs57f2g4DXJjEWRYoazj8pB8fCtorUKGHpenVWR94TUkPSnrMvpDn",
  "key8": "1BoeeknbJVqGC8Dxaq4hu8YTg2DMTtaQjWLmgje1ktYuY38vEdE6GLYtPafXvrNwRTf88y2dhfSnjyCDnmWZw6y",
  "key9": "qH5DoudiY1G9bbRyD3Ace5rLaaLvLY2P1VACdf1uvJgeLBQ27BmZr4azfc4g65WAMfRHh2MsCkDU18aWHLtcZkK",
  "key10": "3TDzwp2NyrYvJHQUixyr3a2HFT5RuvJenv1SEoPWZLz98shL9tgpEbjBkymvmyiydHQKwVE1CHsHdgEgJeZMvPBk",
  "key11": "pevJ1i3ctYEsW46aCfSbrk2QBV7gayWrmsN8QRCApLYxVh9BXnJyayRzk5HzRdnFmSBXAdUbxMBHKgn8qJcvnrB",
  "key12": "25xJgBLrfNDoTMGgzf3hJwiMv8mWyrVWgdqDoiJLw5mYn3q1d3N6GsustSQLMehRRkuMaNNNXABvjWiMPhiD9em1",
  "key13": "5nume1RwKD2LPZs9Fh6WXSZjR35f5ZDQAhyrDbAoySrPHnLFgFeXMLYpEd4SYxwcC1BHmFnLuSpk1UwV4Ruts8EP",
  "key14": "2iqUGNiLEUdVHQnKrxYySPUBjuYPzg6KgEM21HjokLhUJqZFrGhLHh9LB1MEDYeF5ueYcoa76ZbpY4BJfUqwuvhS",
  "key15": "woonadFHueoyx8Pe45HBfTw2tRMLahv5EjgCqqtWed1egke9zvFpdkvp9LCuJjWX8f8zRm8aM2Nw1juzaT1BkmD",
  "key16": "2DG5vnK7dXdk9ag7L6buLNENdvYgGkshtqjumRLA2sCBtRCzn8U2i9ay3PKWGtcNZke4AXuBzTWFEyuTtspsMjeo",
  "key17": "5LcgSXA27kbPnBX2fbWBEVZzzUK6THPGkAHX8yB2E9x2mcBSv8zDRoKFoUaVvMsWUT6jzp1GCGXwsNjkAP2f7WJD",
  "key18": "5v4hLwPfiG56pdbxuNQoE27AeYnhCPndY8cMPS2y6qub1WEaXdxJ6kfnuTC2AoUV5KG7ZnhtuisDrJTE97xoFcUm",
  "key19": "hdZf9a978te8bQENYjjbNxKffhDcojZKGbNpfysDSL8dheZygzHJEquk1bGWxnFJa55oH2Msb7ytDpA7nWrXUU6",
  "key20": "34tzd27fvbBkB3CahS98XiutEjDA7AFzgHwwGCKBCJH3SrZDhQ5wnRVshiRRCTtg38SBWZUhs6fqdS9QEtvvo6NX",
  "key21": "2Dgxg27KsYDzQ9tABohBrk1Zn6VzjoQXdFV4X5wZJjFdSfsXPsunUK7ZMmaUtc2ALLbCWuvvw3rauDLvvKz8ZUeU",
  "key22": "3RNzCXbzgZsMFwY6seH6nECvLu2paycZMdkfAEJuLQfAodtZi3k5aeCpCTypmVKdrfNCGRPo2xq17233h1xCrxfu",
  "key23": "5n6wrKzBy3JaQQzPZsb2xqnFaxTfwDZ6Xiu6ZZdLkWzqn257DcqP7MbPK3fEVK1LfRwBeuo1DJvr6HjaudEde2JU",
  "key24": "zPzwXN5ZxxU4FKqhprJf5bEsKXPWuCZ5Q5LHq7QPebeWvUEkGw4kxWdtrsp8qcbGVwTwnyKuktWYUgxLNAnqf1D",
  "key25": "4U5aNKtyzsYAkpo4ghrucja8jSmwWFzNYQ8pG36KpwAhTLctYKJY2uYwUNsbKCG3QmNh8Li5YN3Z2iUZFkjNgDBb"
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
