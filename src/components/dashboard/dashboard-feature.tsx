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
    "cL6rX8Sjjz8B6mDJGyhAMCLncopbkAeshKqBHMVGtifzSL82bfKPJ2tBFKcQRQWntZd5aUYDwQcaDfSNCimLKht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ww8TTRpbBYbyJt8qm6kv3SgkUCBPpE54Xv6odWxjifNrC5YpzptTW4TT4FxKjpVCZvMPWt9CdPTD1x9QdKAwJeG",
  "key1": "5ADBCbKCk1BPC8B3UsD3STQ3GCWRJaxBRQVJwAc5TXgoSdX4TVBBUeToH2cJC8T3CvhUbeBYYZK1ZGMRW87D7QJk",
  "key2": "4CUqWeQq5NcGakHPhxaS5UeqUEDiUu1rw7THs4W8g5KDJykDL6tpvmTXEMfHgh59Q8BMPVcvpgyQR5VtQ7xr9u3M",
  "key3": "4dj1jYazayFWwG526VNK1vyQtKSFyyBQQfoeu4hGukK5GsZM71ymA2g5dEZJLvvdzn8aCZGWghHGdc6YEkmo9iyV",
  "key4": "QFptiXZ23x9Ab7zr6LzxZYMpju6cbNERh2HTGJsDrQW2WkGj5kW2ot9wby9moGTKs5Git9CqZvsUkNEmPMz7wV3",
  "key5": "HtrDbrjdjo7MKQMwLs8iXcX7z8qtuTpnzpGMJALWyeZgadJ6w2zzZktqQpKf7DA9i9tY5oCsiKPZVeK1SefD5Qb",
  "key6": "56bgjVDccpwRLQuMdF9VCZeipA1jW2x9QmiHqr4SoJZFc5MpBfzL71XMVaJv7bJ4At9XHTxZq2EPSsKucD9W4EMk",
  "key7": "UxiEHXJAgETb4dBqTYqxNS3UFKCpALCTqXGGxLa4NztvRC8Ecn2d83Yb3z2Cpy7FcNux3Fvix2d4iv9QXb5PRDv",
  "key8": "3rfzmcfrny7AokyfLEAhoVoTiWEnHtNv84BrZeAePrgdBAso9eAbfuZ2XvaNrMC3MBLuxMRebv6fqRqfHxfD28F9",
  "key9": "5G4zxkjikGDcTaQgXoMnRJneMzfcsxAB6JiuTRyMcUFq5UKckBiEnUvtWJpZU2t9AFyQssVdYhhK621DeGspMHdU",
  "key10": "2VWEUNdhG7jiNbzmU68uvcuDwcJixoNkdGQtXwMrz1CCvdwP8Va533VpV36pWYXjbeboUhVeQFBqYt4KaXrdJtcg",
  "key11": "21gvWNuRNNBsUCPt7Jr6himSeN8FLjajwVaMKQ3Bb9XE1NjeKzZL6GPTZMg2GeosN9Anoc6WbAJ7U5QNvV3KU9tp",
  "key12": "3MLMKsugeE9NqTCjPWYBQ2ZugCia16Qiktrc13bNchFUCnK6YrwRcC82x1QnALAE3KTYxb4FG6e6TRwXzoLW57YN",
  "key13": "5RSUH5ngDSTx14wbtKSYZnW9yWyJRJJBH2nMDpC3oWwRUNAgt4B1d8tjA4naZMdaRf1tdbPzePacC9zLvoWZgu8N",
  "key14": "STzHy8VDV3VKxuomcAoqWJabqc6MPKx5dK4MhN8xoBSAAZ6z5ZYew8mu9E9UwNo6WsW5R4DXmJpALrPa38n7g2r",
  "key15": "3qhk6Nx9wfoTfaRB2WCUWGyycBcAqQMH9qdvPZT6qXfSuhcSENvfbZmEacTHAQnnFDeds4V3kH5EvZVZwSRgk4w7",
  "key16": "4ynfFpVdhXh2T1w3gju9foWSNwH5pzWGqjvGy3xGQ3gdAQ7HfLf2R6YEzMXrLoBQVDLpvCRGePEWtf2GNeDaRbDW",
  "key17": "29B3M96yTGVoAkStQaHdyoHKwmER8jyEFHhvZPegHjUMrtMA2bvMYn1vHdphb8oktz6btACLt44hKekyza44Y5uT",
  "key18": "5nABjz6KrQs32uz6gNcE6dZRPxFUEP1fTRVWr75kwct7VAhZnh5SpqArDXy5CKBX5AwPoc3QmzfJfG9u9DBJL5S8",
  "key19": "m7f8He5VgEbohMEfY29Eu7Ust7spwFQjZUzyGppXtVWGX3fEZwd7CxKb2ALsBggDCEheBXgiAQYTv6a7erNFvjY",
  "key20": "56N8gMX2vaMheRuZVaEtDyvUDYs69mRqWw5efCopxBcDViPKGgFW4BibKiJNWaMyeoysditvs8ryhxhpLEVjc3sX",
  "key21": "xaB3TSLw2ibqhCfB4Fa1vLBS5fNDCsweV9nazhHB9RSVwmr6vgqsMWB4yZT6nQYUM3c8gSbkuDaSE2YckvH3jCj",
  "key22": "34dJjjvifLHhixzhedscomQSjgFySBszyQtGkPWjmZCnCGq9ZANpjWymSuvdHRyTWDLSy7cdAVmaf72FVfaDqKgP",
  "key23": "4v4thbJL5QTMq4itwpmd3eqRdayKD6NUuWu8BYSN4qpUjB198YDBT7uEdeXXi11n7fXwzsJepZNFywyK3w2xx3ei",
  "key24": "4agcqQVcjWcpv6FJUxSy4uMqDZF4RPt5wQyoUV3ECsi6zWACyWspfsCqLQKUYdpSeH34ZVtceGqjKqp1wLtZoxiW",
  "key25": "4oNsnuUDspLH7JXcXzN7kfBJiK7tQQFi8yWRHEeFmmnCHFnVKYUB5qhZg1UVGtz7WqLCiRt3uv7mGqz1HsQmNpHW",
  "key26": "3sD4CJ4qPd13aYvGw2g6MCvmw527teTxHcQLWqzJUGF8Kn9e7JiJBikusVpsT5Dd13Nc7p62nEz84wcTfhYkStMv",
  "key27": "5p7res783CKj17dXfYe1uFfJtV2t8mmbVyGnwa5a863wFnsi4P3G15oftNnNhXFEcLCG2xQpiPi51kJZKKrGhu3H",
  "key28": "5d7LnWibm6o4Z8uJzwweBrfND8BpffJwL1G8aGHUsD295hwRuywBRTvV6PQYcwyK7a9zHb66s9YVuR17nNQR75k3",
  "key29": "5mVwTjxGE8suUkcnx8v6sd5PnDEzkiNF4K51Ss2MBECzKeMPLbYqdD5zKQtPdA5VQHfPJgZVoeZRfcSVMGauY3LA",
  "key30": "4Gt125VJpeznfucen3ZLyiViFtfyMTxqXzLpRMZvQWEktb8fwBYYgAw2H7aU4YabXDRzPXuxUxQF1QNuZx62QXHb",
  "key31": "5R4MV2RmQQotM2Xz3FxXaH2prZrsvghr1yePTrKBipMeWXCud2BCbWF6Wxs5ebqR8cKPSJ3cb5pcW6Qnz926H6EB",
  "key32": "4RNXitw7yJvMYh6nqK2sRQwKJ5mu3k53QauR8PKwrEZbzqXinZ8MbRb8bTtuwCVxxxwnyf7tiKZRefcUpexeojm6",
  "key33": "CbaWHwD8PZKaXyUqwrBEE8xujEQZsKsCGyCK9SbJDgFqbnb2xNBwKkXbFLBvLAdQQuuFhKcSkU7S7JVAHwfvdht",
  "key34": "4uqoh1UEfW5KGBt7hzbxmdzHZo8E7SWZ6MrhWEKQvijUxmf2iKdhz67CEqkKvox5apHEqN9CdaGyA1uRXY6Mn5EU",
  "key35": "5HZHTL2zCdYaAfjWB5McJCKKNZoL6hnsP4Rh8febzYFsaNc4TSXYg92TQdWJhttTA6cqpqrv84GaSGZHnvUgRDxz",
  "key36": "24MYtKJdZrHwvLSVFo6nRJCcZm3hcutGo3BtHLcP9zv78NFMwwCucYHMh1wkNcQvJkJSXVFSqFCLgHYS8UwVtW3L",
  "key37": "2nvtbPq4t1dHYQnBHdPyYNe84Z91rxNZzSNB13awJeLPA8prKtb7MEgpprdTTxyCG2D1ypxm4tEU1o6Lv7erSJB6",
  "key38": "2Rge2gweaGnvbmG6uSwnaUzJLpYiSDmpgd1gVx8zcpe7ieeQyxs7k6WyLih63j47RS6QGHwV6vcu9o7Gg22FCviy",
  "key39": "2i3DQf8ZiNhLTBu2a4t3quj8WfpCyKC4vXqZmFbCoy4ByZRYL83i4JEaMntxDpwVAzkmbvV6gzozK9Wr6r9iS1xf",
  "key40": "4hay9N11yBXpe2GR7yuz5KtzeX2vjAbuhbHA6AHfBQpC9TLUDPCQ2gVDYLncAw53VHS15KTS1radePM8ny9Zt8Qt",
  "key41": "5VkSA8rcoq14zPj9XjVLMGvbvhA8jsoyS6DxpykJPdKV9jSkrL7gAEqjbUjNdR7b5e4ZQc7k58LmaEQekZjZ7gLt",
  "key42": "Jggf1Qw92QZ37RBU7Ji3UhQn1xT7pcRMhZLAtCZ8eH3fTHq3xq7L6zHgFvqdU3pgqKhicFmdfHvAeHJ5eMUx4zB",
  "key43": "GtXkpuyT95DbJu6oWf2DSKyvPoz5eFfTwCkUsbb1fSctsgajVfKiU6qA3PcqSEnVrHb4YshEP92XdsLEwUrVYos"
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
