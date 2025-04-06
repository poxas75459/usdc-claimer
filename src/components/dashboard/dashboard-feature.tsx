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
    "4N4yhaRwbHjo2ocpErev4BQgvgu5hqTGS6YsbHVZJcrLfzssS2cpMSySYZvyWAyzVh8cs3vVgNuUiS4yLf1ckWYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376LxxtAL4DV5CTG1jencMbZjX2Y2FgVUDfnhEpAky1WHnQ5Q2h1tvLDy3MHLGR6fYGzxWjiovQ97EjmPhjR9vCK",
  "key1": "3hysvtAdt9FQXC6qRLbYTTdPBPQb6HxzKjWxuYRDnKRicu1NnqXcvywtEMDXpjVsimzePx1ZPicXtmwttF3vQefg",
  "key2": "J7gxTkXYhk5XPGvw6R59UHUKhTS6466Kdzf1dZS3oHeWxoGDznjTLm8spW9UxDgSjL8ksVJtNYEouk7yEEN58J6",
  "key3": "4QKjrGLR9KNYz5cwTQS7Rk5DEmYmgAFvGMCeGbdVU5BdaezcE1aek7MA7KQtYgTpip4UsPzc2B3XSujq6kV29y2S",
  "key4": "41yn6go2xUCxgzvZjYSqBc1ejvzw19C1UtcqQM5AJ3wzTNeRMnaT8DrAhoPQ96PiSSAjCq4JunjhZYgdU78tCqRc",
  "key5": "4Ac5rzuCwYQ7ZioV9GkRK1gdqDwGfbPeQYczXjr5FUDyvqSUjHke6ecPVNVcY1oEU9w8YCPESmpYhRgSZKvjRpoe",
  "key6": "5nBkzLp8Y5v1JfGNBcSRUoDdYhuN3C9fRsdhF4CHUVUf4HycHsqjeCJYaJAvWrfH73vLbAvcyLgpVf9DpMC22W4K",
  "key7": "3vH2LqLvd2rYTbJGKmnv8paM7NjgFpqTKGhnSgsbuPNMJdcFhgypvpXUFmS7GyfbUDrgpU82ApVhBgWLDutYQRyR",
  "key8": "56UkyY7tNc7tdoPzyc7kiGmECmQHeZKRUpCnxgUfH6EUxLAsQsUWgRxJYB3pcMPxRkwtbKgYqXjxwsQKB7Z6WaQg",
  "key9": "5eaYVWboXWcBnhJcPiqnnVWNKfHy1dWTCSFYGA5N6k8wUg7xPiwaqHkrr29SLhyVKDdEQxmX6wvQsJ6VMdbWHpxL",
  "key10": "3HbUawPA6vwjNXXXFUyo7Z7KRCkL15j8aiUH6riEfTcbxbyCy886fvu8GbpEq4V3mGbXkU6UomvaVzoQ6rECDPcU",
  "key11": "myajrbNqhimoK6nt9YKm4yZVhFVaMzgtiHHHpvHpNKzuVsX3cdBQMfahamh66UgtaMK3Dhkfb828WpqzAxwju8d",
  "key12": "5HFgp6cmz7uz1AwjrDnhk94X2tWzU5hyCGQENzCDrxUhVBSbDEzk8UMDDSXH52GjNMeNFKnEBraVi5vZup8g2xEn",
  "key13": "3FszHudpjwGDq9FXe1cvXSermDnLL13dc32gkHuy2gNiPES8WCLqXTo5FMPAfd8YFjyhqTR2eKd7qLwYif2nFWDS",
  "key14": "3iLr86ArRvWZEjzdXHMapR8RQq6Yq8MGRtb7mGdJzknpaDJbLNgdv6bWBh4VUD3Q1PM7KaqBV7WG9Fo5P5rzAR5W",
  "key15": "63GdGGp4we9RfcfVJyZBDzbiN7Lqqdr1bKThXRSzSvLoo4SHmxEV1HNVEZzxbiB9gXcJuiHFpmisBbk4JTBF6K19",
  "key16": "51X8gTMyz5pNRHZkCfCdzNZ6zB1JgAstpBzuW8FR3DZjCK8fLpg9MUUbYLGTxFnAkL7FsFdSpSeChNs3c3F8ZjAv",
  "key17": "ZCzBgGzP2zF7hAX5nWAV8BoiTnsgSm8Qe29cQuddcfdPgc2Nr3Q5s77nTZ9sihk1Acj6cKYgomEZGsX6Vc4Y2aw",
  "key18": "4i2i9GntCJbm1a9s3yuFCpUyavZ45HWa7kSEUKKh2H1LCm7RfkFzfJaosLdfMdmqURAooeeP84qu9DdWRLP3bz6q",
  "key19": "4V8wBsH4r8HjCNsZV4kdCBqTy5ujVDpjEYDs6tfoj1QyupMtd4EuZd1LLB1XLxR4dg2LMkaUu5RX3TZmNPbakFoT",
  "key20": "FCjZ3xx54rX8NtjxG2pajGT6WSnvRXTtJct7Q4oNSbtW4H94T3fTXymkjUErA2nzd2i52ZwWxmvUBGF2V5Sc2GJ",
  "key21": "2pHfLy5uAJB41vtZgwz3QMKUveUC6SwABES9avJfKkxWd2jpykAYY6kRboCTKPwzScXr5DruvsJThrCCBgEgU5qH",
  "key22": "2tcQpyJJw1u1GNgFNQxbxtR4KvG6nUxfiQBsdYkVXjyS9baUfBuH1khq9D1P9ifb5h8QhBQbTcf2eLT1Ttjd5wXQ",
  "key23": "4DyLDWCDCtJ9JZ66TrtZ9uj97BAbjCMbC1kmsb273aETntUsrVa6YtJHjBZRXzfqn8dwV7ezhwkQDQ3puZarCGYn",
  "key24": "2c45JdJZ6saCxQ1nDLhSb8p4pd51c5o9Z2jjFs8LuaiozHCmmqoXe84PF3tmagbVFUwoJoWJSAbaUousUV9qCvQv",
  "key25": "5DfEKC5XvuwvUCmLxV3FqHwLKdfbX7n6GTqUE2Jjh5ntzJ2Zz96xD8MZbFfEMnKPde9HhUFdCwT9DwbtNV6maRT4",
  "key26": "5F7YKnFJ5GeBqTM6VyzUiv7TWQJvfF4VXZbAXJhPJv2dBjNMUofg6LF1mstVf5Wy7FRcfZW7NXhDskD9m4gg5LZb",
  "key27": "3rp4Hc2s3bxQdDKbiV927FqU6MjJ5TMR73UXZvctddAoPQeP1c3JkJavJ86skAnRFoRnQA5mEtbBace46rjecxTt",
  "key28": "3ZsV1Ujovezxp3tAGFZQ3hA4rqhUNssBxWbJh6q1CVeqU6G5FX2KUF1St4Pb3nkgvGcc4J9dodCSExLcjH8PkmDz",
  "key29": "2P2yWZTwE2BjxcdqUMaogAKSB9EGRFk6dLr2ba1QUGtfeREFHKFKFtC7eQUoUHTivGToDLPT5hvvzmUQYNKMfxeF",
  "key30": "39zprRJNXbFWVHABRWo1zzyXgD6chfQWRRGabBqusSFW4XB4ziqSSdytaVj7uMjEx13yMXwtyfvwg4Fgx1eXJ6MG",
  "key31": "5La5Ls1XTu8dMgNXXNQc5zrTze38671vkAxjv1MsiFo1ojMZj6bw3gahQdVjmrbQukK6KATtLro6v7fckrqyHHV",
  "key32": "47Ka9C5MFbm6ihJUAFTouEZ6ukQB8LV38TZSzjWsZEKugEHMvWhF5Csjgkr4E8ZmfxEnawYShA95DhJZgQhAKgN1",
  "key33": "36t7gHHexzQB2DzdQK3EWEGBYLwFmVTVbync6YfmgzFFQVou5Tov1HUPRCQRGVjSKxT9PAdKjvFX2n4ReUdaowP5",
  "key34": "5SpfgCySJyb8senpprxShBC7qfsAQeopVu597daKuAjiYxazBPGzwdcYsfSAmwRp897TYRBMgAg7G27xeyWexyFw",
  "key35": "4ggJDqYXkM7CdXDP241d4Hq15RJdyuKFyHVP6iBmY7Uc4KKpDitK3nuqGR164f5UnwqJjTSxjTA5VHybCbhVgE8b",
  "key36": "4jU1A9bJ6mxQVJdwgyiM2y5jRzWRtzP5pV3MjPh8JEHVkac6Mawx2RL2NrXo1ntYUvaCFq7JfPzJaD9J61e1oz64",
  "key37": "4tz4DNyMCexohWnCctHeSGxmbbfW81Kug2nrQG4eXhAjG1PPPQESp7DudEaJLkmrubd1Qgy2v7jSHALm4YC5Ac8G"
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
