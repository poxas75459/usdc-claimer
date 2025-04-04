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
    "4p7ppvTQVV4mEsveCKVB9VrxHF1PQiaWGh5qvP2EgUnAYUGFhNuzDHiuKBhvbKHniLMmsXpqmXwDYKKdiQCf6Qwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yUeTKDpngQdEjTgg925Q6uYigveef3XToqaeqeAHXX5CVd4YVZqYa7tXgsvMks1VQ4TvEMrL17YNzsEGnXGeCUK",
  "key1": "DPKnq6KuVoHr4M84ugjVMuL658vCpaxk1N8mdwcgxFdNwqxCFsxMvVohSmGUdSE7Rcpef4soeKerYpQsUngyXwK",
  "key2": "32QJ1nvx4Yq2u3ctLpZgA1QhKYk9XJ5WFFgeqS5VCj5CkKw15gBhUQBFCodxC7BAMefrzP3SZnkr7dFy28kaonSD",
  "key3": "5d8t4PxqaJc3WGBhaWVc1RP5RRDDtBy5KCpwCoteHrRorn6MdgWY9e5VuZxjfTyBBxV66QwJpheV6HwFCAxeQJBx",
  "key4": "xNgFh5dBERUscv4rJvkEhGmgXkSmmfWakWhvc3z64Pt7EPEbkRgJjP7aYKtWX4NiB85AQfSgpRiC43SVDzynssE",
  "key5": "4BQVxCiGv9mK7S7RempTLRX9KzUAn7STvYK8PoqNLJWNkQrsxXJ1RTWLdP7ocRddt9jbQaid3MYDAVirsVpq5V21",
  "key6": "4G454SMS4RDTzJTpJVP57HeERkgupfULB7HabDAXgyAgZm1GRAaZ7FjnTpRpxe55iCXm3gt146WJ99RLPxDa2ian",
  "key7": "UJU6ncCqzHiwcAaQ868z5LoY8oQ6qhQHjwnBj9ZCzdmf1Dub8MptaiuqLMLsHMdfz28iCBRoWTV9G4KbhVkjwzX",
  "key8": "38nWZi6bckNcCAGZjETHQKtLKJse4aRhYPMDPxBj1a3opKK3qgDvEbKGUTcM2z6vN6CMKHzg7yFsigE5xHCRN6ku",
  "key9": "ZBQY68ZUbUq1gc9CFZ2nB2EM3iAcrYrtr3NQ2PG7bYamEFgPH5LXXcgCWchEpM9uUze2N2UCPDenUWKYaJAxi4d",
  "key10": "FuQwpmrihSDHxnMVwLyCUazpgcPDxaiGkuEvuXidMcDRsMbuvmMVpJn1rSuy7iDUS1bSA7qsG3G8gRexzDUJ4Jy",
  "key11": "25D4QLqmCV4xu3deyfEMzhHVNYk7nhfvCS8VmARnETHGDjhPELhQfs4TtozNiBKgZ1kKXayLgMBi9wr1DPD3LZpK",
  "key12": "4bqKtKan8HJB4x3Xy7B8y7BaZeg17Qiowp9wnw9hxzCpiKVhqiAfcfD2s84iPxAD4knPcaftnyfxehAZoQ363uT",
  "key13": "3XBW88xzVf8b85xrPM6P42FqD2YPcNZ43qDXqATxm59znuvaay3sqcuTmcrFSPGHUMm1VQssYLgVXiAwWZJpAq5L",
  "key14": "42615f6hPq3aTmaWmZkXgu58zic77yRLaFEySM1cX2MD1atG6gPWUe489LdzkbQJZqXwbG3Rq6on7Xo5DFNP7t19",
  "key15": "59qajniZQAUXwx56SeeoDf4sUpSPMEqRZj9v7toMUBN2cb3PBXmnXNDde6DehfMCi8b8kHvSfRyhqAggg18psmCi",
  "key16": "3gTbMp6oWmR35bG7PPYEpJwSbVKpnU1QH8CzNakKebvnZ5UhfdwBsLyXLqsrVy3XMs9ozMK3vV8V4cro5iWVR7Hc",
  "key17": "2NZQXZBfozHQrdgpjcrqiDC27XQ6B5ESetjDHBPq3qj9uEJCLqmrLscbTjmV4C7HbevPRY3eaAH7bYKcFQf9Lcww",
  "key18": "3LqvT5xEtv6xedseHgmG4w8cXqFzqde7CmmZkkWDSWrExpQFMpWk23ggegvW2rZfadpdRYs576634ZQEbmF68en8",
  "key19": "8kAqndPcH3uHkEF9HhexBxsFXpUSdkVfwqYGQo6Z632tGLNpi4hoa6yvU9RxjzDDP5boJzg5VWToZw3G3o6UNb5",
  "key20": "4WRMaRMmWwKuZd8XtYKZexfDscq4ut63ePtpmDV53pwmGBY7HAj9BoK44Eym45NC3ucsDteq3kcs8UZEMJJg5G6r",
  "key21": "zEzYkcik37CLqTNZymfHh5zWHXoqx6mUugjZjnGj4QtC4Zfk2Xazd4kuMDfy4jSicYsRrdqTdwRbkgUwmfJhR64",
  "key22": "22EjmKqjkMeXeAq7aAJL7ntTyRjUJDozVW7JeGjxmqJfS61jyJSsxK3LQeyjwhJkpgN97RMAajBu1VQSfqWvAx3W",
  "key23": "55HgwyicikH7gwaAR3JCX1ZzgPnXseTSjsCEMvEVU99ZLe4SFpUMxR6puBKVXLwSSQYu8VZPJ72yWwEdh3xuzb6D",
  "key24": "3oamkgp5VfgSnvv1CViXSnbVCNsGUv2ECw1QMpJyFj5oA262Hrvrybr71n7AHzT6XR2PBAs13GuEHeyEK87cKfpj",
  "key25": "2Hmwe2uDYVKN75UVz9pns7EMsjsMAwznsCNhk1wFQoJjbaRbZA4z1UyMLBsNa2mu2UyMqmFBcMhysWxcKhQoP3iq",
  "key26": "3SFzAiWjBWND8ejLb3CxMXBu4YVYygJoaQDJzPeaF2M9HpoqZUiwM7NFwdZRyEeqQu646akUiZ8ZLvWAp7NTcttH",
  "key27": "2pBgU34ZaLTegoajZ9ieSyhQNLHiW9bqGXePHvc3ybXxrMEwQSKzazL9yAhTAMZqTkbgim43b1SvVD1Lh6iwyitJ",
  "key28": "5tGTZpzAE7yRrvatYxvB8Pdiz2ZV23iEe3ZDYdb1fBxxPogDDxB1LrEcHHWPAcsV7xkHLetD4kZYUxAEgapv4E8C",
  "key29": "5oTiVpsABrJ31VWEuvibGHFhVwajn3dvP9g6h2dMWeSGrZGtrFaDgVzG5fc4Zr5g9jhTdSVPrxzuPxkJU5Bd8pbX",
  "key30": "4XbbbeLbSmhesgprbPmnXj4briDemy35HJQ2FQxABaR8fE1y18upQxWEwYkQkg2nf9En9weduv2AKdgRfx8fXK5e",
  "key31": "SSHzai5HmHFooEr62esUkP9fekoJxWf7He7j9bSkZ61ugshFyTV3dZPGwGBvLuMgDw7s8zYiMWqLws9sWYa2J8S",
  "key32": "f7KP9CaD85boVfZ16nN84HxiwiZzm6HATR1D8ZpYCj5UmmPKkJQDiGxNoWcHPyRDqpwNDoTk7Ud5EVpQsjrUdDz",
  "key33": "5oxtHooMknkwHqADZ3CNceaF6fuhTZSodh1CNts66w7YkhV2zVNRg8RucqkXuLJQo2HQDidZNZ42kE6cURfYoQ2b",
  "key34": "2oC8Cscm9RWvPUKDrqpvNhQfMDfFk3yvCjsCbV1wcToW8YMDoU1iVajNEN26DYDQrSQ1zRSAeta97iFoCtKHBR99"
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
