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
    "3eQrL3PgrCQAKTNgCSptBjsw7GN637v31XEMo7idacerWvm314QDydGz4xXNdFKVxUN2Ate2hvtgWsB6HbN35SBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFgRygcFzzBKJhuAMzuvZfzi6mFS7zWoTZoyXKdQGXfbAm9xJSg1U2xdxcVwj41FQVGyNWnNTZddy9DjWWJpz3N",
  "key1": "nXyG4F2Wv1C4KmLHyYee5e92ATQ3Zh9QFMuD59PRa6d7mLXHkQSqufKftfmM4PwZADY4WdL2s78Ntb7291pKveJ",
  "key2": "2WPvZ6dCPmccJgay2NGiXzXjgQNCzpFoBDV1TonR8MGR7As1GDmPciLVsdNhf1dukQoGpHPzRWewREGDG7wjqQCp",
  "key3": "5zN7tN2yAu39nLuKBP3HiKTTkMQSHiaFYMsq4gEjpJevso7BcHytizbL7XSpEqcVa11aJ1iEqR7yru5BMHR3jmM6",
  "key4": "3nNuPzQzoKvj9HUviqPpkpaq6VZEwM1xAzUMnh69NMrNxNVnZJLFoUR5x9TpgkwbYjpcyATaxnzZjYxyJRAkNwdm",
  "key5": "4JAvGgmbkVqo8BmUuLJrdma26HTo3izpe368xiekG8CeRxHayKYBp2YUqmDNaz3vqM5BZZdsQ9NL2NUUAdv9aAob",
  "key6": "uRSDotMvhvvfHdmUenwThdtvrq3ohtZD4cXucsetMn1K4rYtzTgsXU26Upjcymx9pHXNM4jiCmq37QmVjz49RZt",
  "key7": "2DRVFB3Uio14iEu7wHkNisZxmAafuP1x1jN6vZENcNkxd2C4V5RiDoaBnpYPScbDBYcCLn9X8ND4uEePWmYLnHSB",
  "key8": "hTPWEQGM6qBFXeuhkmrGeKwhz59pchvjzCCNJM9YVZLjhSdtpToZW1z3cuyGDbn7uAdjWNHk6TYqtHmc71G6Psy",
  "key9": "reLNmR6U3JEY2xRXfBV2ukfUmdJZY69y1wQrHf7pWaeu9BqoCdXnTWMakECS7Ycp8WpQc6tgitgoYZYo6DULZP6",
  "key10": "ufDEDy7toYMQ16mcktKE2A5vyhkAhA6swEjaDHSfJ7yeP8tHUukZ7DGmgqZ5NT5XFq7MnGvaMHDDndLi7QCjiX6",
  "key11": "5zmAnyNdMt7MS4LqbDbf1UKtjwJY61ofANopyntAfaLbAUuBoSvQr9x6FiRpkPSpizgk166Qau95TnCTbru2wSrX",
  "key12": "4NjvbaBKeLwBqvVZZygfp3mR7c3yx3ncnwVT6xLVtbbmB8Qh9yt1YASjqHJ4sFLYzNJwNXawdZxRK7aitSP6nfpW",
  "key13": "BGcZdmetaZN5ZSRmuVDCW3SfmvnAuHVKQrtQKuPyJpEnyXUuP7gscrKto4AMTbwMCmZMv7FvJtUnbUhkNa5yQra",
  "key14": "c9CzYrvxJvu4EPQhDLHYXA8KdnZBnfC4JQXtT3tZ6pYow17b2vWG5kcwCvzprxiJTDpjH4hD688ieNRswj3wqHT",
  "key15": "64vwgn8hiL7PfWWXNNqvzv7Xah1DFdcFtSCYj1knZ9kDbvVbjHP1QGBC61eT4Bxd2bRj6KdaPiHJhHHWoHD2dgEH",
  "key16": "2LswAGydZxT5wvt1LfoeoxMgEdhFyNwhSVwyEedufe3YqvgTGKNMvbq1UtGVfSjtjtRCvkPjtX5rTd2zwdcaaFhy",
  "key17": "48AzYiP7Znaz4PzdUGTKxfkkXfjoTfWjwHYekXR8xc1t5SoUMEqq43jKt4FWPhdoR3r76aeFAK7yUA7F7Zgdax1H",
  "key18": "5uHgzxz6EQAMZWvmF2ar3yhyzKgGp37pPMaP91prkDzG1vUhRLacVTzDBo6RJd3FYhTrK6FmnAxZTnnDw3nxTD36",
  "key19": "2VtD3hYBGzstf8WFWbq6AZxDUoWLr9HCaVfSgHQZzVu5pmrKYpwqWgxySEMAoS4xiFEdxpCz4z78wt5Gd5rSf6oa",
  "key20": "5KtDBAvqBj8v7v6YxopxFk8y12yVXhdwwEn6rjzWwRE8VyUhZWYQeemibZkZcbsZw4LAEos3yuUgzToMvXjJcBkZ",
  "key21": "46q2wRyiz9jxrCdxhikCmdFWrqDSR8NdtNz862HHn7onsdTTA1jB2wiLtrj6fvAPt85Xu3gcdjnTBEFfxYLmGwUh",
  "key22": "GqXLrzzQEhDHnYF7h9PMtbS2qs4137g76WUuT9HZZas9fjgDoWMCrTRV8tg9pKTP1t3xyn3wLJt5dZYsXqHtCoP",
  "key23": "5NZ32wfaAD7ivTJKNC1aFjmtLiwNtbf2xajkZfaFHeSjuVRAzxMTpb17L4MDGDmD3o3bXqutMwG8QRjEt6tyo3yV",
  "key24": "5TLtA8bfdz52yLFgvERsKZMzb6nW4TF3G5vi6nqQxbQ8ihz81cy8PSxwKGeNG7LPod7sBvTZQn7b2byJwfcpwjaZ",
  "key25": "67oShX2JFDZwzjPuxj8fXV8i41EuwNDSRE4hwkVyA9JdrFaKcTwVtRePcW4BAP9eyMDsGcE8zezadiFbHK2PtWYH",
  "key26": "3fkQU9wTpEA8EaJB35qgycVJWhJVSqHTKiDea3vtamNfJiugWFdVuyaz2VavbrUsPWLf1VGL7WnATKT4NNYdyBxu",
  "key27": "3kpLbrLdzjJzdT3UDMr6EKWk3kp2S73V5aneCUqtrY1BdYbhYTw6936nwoK5nt3LzNgGqkHiVVWveoYUujqeeaQQ",
  "key28": "3gEpcWjcWmFhnFsZkjZKXLeaMWpGFeM5rzC9xzCf9ViJTWn7Ab6Ly5MBavpVCwtJ9YFCKGyfMf9Cghf2Xh3JYsZE",
  "key29": "62YCTyarfTMukyuHFMJiEL52y3ZDeuJrq8uii2Ec1KGw1sst25qBLLPAojTvP1NGbySoRsjer49uYVxE5xzoFK2v"
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
