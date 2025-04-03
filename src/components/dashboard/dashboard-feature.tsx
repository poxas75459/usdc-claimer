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
    "5tH87GD99MyGXdsL9Z7mnXn93wzKVGaB4TFbfRQqJHgUTUvL32BYLikVoh7gJFzdT7ZWNSWJoyijU4xQyNQBmKBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtA5gLZXKhGxjDgz8YVst75twFsKn9Jx6YQKUcYVHRKK7i4FvQxinzrgcxT68kvHqzyHv8ECznoVpW4fWNSEweQ",
  "key1": "48HNn3eEPibSKWEZqSad1jRDsXH9E3UUEobqEsZkigCFvR93JxqaEAiGAwJFaFXqABXiCMRxa4ToTnNRHGoSHZGD",
  "key2": "36kRwqXx56xpmvJmRZx4MUAwftvQUMaCfCN3bCPDVEQLSXtmP7cYcbQvsVA4WU8cmY1cB9xKRFtizBvrjvWAdvET",
  "key3": "5HdpQ8Sh4XNjegu8ReVgn9Rpqy6ALWGGoMvtUY5nEGNu5sGLJXMMZ8tzvwfcCbChZR5hZbkTpEoKcJ16HBx4kdP3",
  "key4": "47HiwbVY1uMSDXneTJuunEUShVYXbMAqhaqQqCqK1o2P9MGCMxtcCECNFiVrKzqFJXQxw4ZGDPgvC8i9XmxA13PU",
  "key5": "4e42xJCsbhWRukSRYF1qcYPnPR5nHgWMWakRFitbj8hQqpjTyy7tkLwjsmzWhhrbdpRPKnzbzQWaEg6oVtuymsks",
  "key6": "3nXHMuubQz58pFeXQyGxMi5WU814uMAw8yci5nWC5ijbtYmVWj1XAqxS1FU9teyRAft9nckYJVFd3J6EH1FLgRsY",
  "key7": "66At1NDayQ8hfobMT8x5YP59Pr98qR94pn1E48sF68cyLuQ4mQ1f89pMKvU98tp3zK5hRzWAWZw8g3WgaCxVJfhW",
  "key8": "ZuwyuAkRm1Na8HyFSSEtQWDx3Vz5UssCnF1LPVvt2Zbq1mWb1BF1dzw5ig7jS76t9zFdxDoUbHv8SHkJTbbhsxZ",
  "key9": "3JVbtGJZLiMGrKgneLA7N4Z4smegvPuvdBup1c4Sz9rNhjh9qY9u2pp2prLaTcpYXg4rXJ6tXZ5YD6GCNgivsgJo",
  "key10": "5xDoitqNjFQRTGWCWzKoo9YnJmgL4CtBoT4XcTz8YasRTjnXr5vJQFsrx5yLrTbqH9zR6xyeDxfeedSN218SaZWi",
  "key11": "26qahkFZgbgpBaqbLJT3ENUCi7VyPTjXYRee6fmYg5rdYZzUjStiP6UWvvNz3MVqy94vG1cuZdxiwnCVn7vEm3Gp",
  "key12": "33qNfPZx6ZDw35jaYwg5ZsrCfgKiPSE8TGbsPWcae6yqKRRDe4LVs6bGTynYkcaguDDykpXQtQytrgz5jsz78vM4",
  "key13": "3yxgMmDeuN44SNS28DmuHUb1HQue9brM9fUSJU6XK1eyK6BUHWy1kbdXVokTrRNnREXUTabKGspz8K5HHHNxVUUi",
  "key14": "4wLDRFHZqAa1fTiB3XXVkd496DRwFcnytCSQqnbAJTtWJhYMAyFVNM1wxKVD4oFyFW3aBYGV24RNTCLSVKGPfiTi",
  "key15": "5v4APpcAqX92u1PLzDo3VzHXaoNbuoEga63iTwLUnNKypkrdTVkZJZGeFyVCXq2VtHwDL67tcs5dPFBPVAsXzYUb",
  "key16": "27v4f2Cwfnp75bTerLpvcdyykmY1yDGSLpp34kfbTiea4oHRX1NvkMLstCesPowGF3ocr5P2YMs8e4Zt9heKHswk",
  "key17": "2T4ZLgnP9EfSd7n1m6R7dFaujMEpcX243uU5LneDTkx7Tgiw4u6QZptMS8yZRppSzkRPTpCvNgrk12z4wq1VbV5n",
  "key18": "4XHhGDmJmSF8JVLKdiR4d9bF1rVKHGA6rLZ61W2Se4JRB1zH4G8ezSvgJRd279mX1GgQpJHsbVqKrppb9CWvBmcg",
  "key19": "2KsVsxL9QVdX4xE4PHsAaX4WZefw7mvwm9f4ZQfmoam6tmYrVEUWFX8mFFyryapQ9zZj6XQ2QJmrjVUMET2jumBX",
  "key20": "2g1ana5UFu3xzWefZye3wKeHpPDAkugYWpWefDaoNubeCXy3bNefYew8R7guMFDVMkuDtQPYKEQVn9eJp3EaJ4qM",
  "key21": "5zYHirUr1hLz2UW4divZiKuxWo8VkTmiu2YgsG8V35Uws7EMncch5vknCTHFBYN5s8Sb1psnobMcgyVZVvwU8AcZ",
  "key22": "2iSGzzaMTwwoZjYKdtGhAZTQghkV4e9rzZU5FyRFkd2PM3t2dLcjJsaVfXruspU2Xn764rvDpRzzet6JXiBishWK",
  "key23": "3GhquatDQTm2iVSkx1QZJErVvaSNw2PGsQoTdZyjqawG8AAGdDhScSrpQrthiL8Zx4pbRgvPqrfTThHBrSdNCvZx",
  "key24": "4cwj5BsSNy2zDm2TKPzny13ywtXJajo8mx6vamsRL1kwoWk8MebnpYnuLmgu6h6KaQmF2DFUX7qRaNdvkJnU2W2z",
  "key25": "g2bKC4JLJvvk9mrJe9yNJ4rQBYe7iErZpxUAgyjBneSymQ7EHA5hMjwP4Y7zPsR2gvEWWrkgASQJhRuLgscKTK7",
  "key26": "4TH4Aa3rmid2S2SE59oZAtwPF6Ahet8u3TvYJUyF55SyyjgU5T6FzY8ErTJ5uJ81a7V9QH6htck1onqeghSAc5mK",
  "key27": "4V1FEA7zRQEeLotPy5WssAoeA7nteuossAZ1BM6kGBsgshKauMkKNPSKyuDW3v3hivAcuPNkyzsN2TiU1fGgR25t"
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
