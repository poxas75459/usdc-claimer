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
    "o3L1JcGpG6fvu9HMZWUYF6DBswyZfvyasKkK3bTA9WeNTZVgUCc51j3j3cQon7V7Bi2d6FTx28EfdNhST7MHuEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Pj2a37W1vdei8634ypYYr4s6SFER39R6Z4KHUZVWhD9VL4YytHMEduQ1QeosqvHM1DD6WoCSrQ2sTQnx4V1T1p",
  "key1": "5wFhBBrxXAv78PXPB95RKNG9gBt3PxwX5URPZ4mSY8Sbu2MjzrpofFwU257y3CWgyds6WD4nX4M9kDnJdUedK6cn",
  "key2": "LDHe5CggJGQpePrhjxmX41s7qWnWZToY9gSwqhztjZsKfd98vBdLY2shNzveNznmNrCRKJkDyZDuwUzXGtkPDkm",
  "key3": "4WUJUZYGUfYt12hQr8quJQ2J47vUev1QMixbdUgoTdVxE6MxvNPXb41K1W23KML9TJBNyvkMrGwyG7KSs7zHZ7mT",
  "key4": "f5Lh1UF2stuMuG5h3pyLbo3FoG3axXhzigNVpHTgs8NzMgxKXsgDK4Cvt2iC61vFbZYEeacc5JPtNTa7Vun7yAC",
  "key5": "yAHzcz6Y4vvt7vwzJdrzTceiAZZBNJcVESfb5zHp2Dt3KW63G1cEp6tJxFzeeGFQNzksL4kGcxCeMtq8LqQWst5",
  "key6": "5km2vscV5tT3fzRDSC3JVZK5BmxuxMJhKmqTXXP2xWveRkyN1SukPkVohSPPF4gnN9E9itJVDSb7R7XsSVcUV993",
  "key7": "5V4Rd8xHJFXw3FZnbkTxJZqUnUfmGSnTqhyNHpq3wRuomMAkgdGgwy9orBYTJ2Eiibx81NGLbQ3gbCgrwc6nQp4d",
  "key8": "2DPnKKpsav5ghmZDFoWaMWTc466CA1od9twKxgz8WPoELCQpTSmbv5uLvVWt61sFx7DHyDLUkvxRrgpnrndnpvWD",
  "key9": "4BRJMQBy3uNcAxiY1x7YjpmsUKkhRfkGy6CACEmWLq6PcvLR5tMU4PQxs76V52mw5wm5Gju5R9MHRj5WypqWKfb8",
  "key10": "34sFmE16usa6CTiJfcyQvzdYByrKdyTCW8CGboQFTNe95Faqxdw3F9d1F3Y5RDk7PgjdWHDq5GdnhSwB9ZK5m4bZ",
  "key11": "57vuVLvuUgq8GQeqnsd39cFaatrjUe88i7Gawk6kePVXLqaY1qfCvMSPbPfQP9Cdguz7gsJ16rFh2aNAisnsFjT3",
  "key12": "Ade3z6dPt51D4pCNugE7HiB6xoocCdupyNoaDGpECzPycKVjJMC36XczcwNW1FMD5V8Mjv6xvQcSG6fFLCxzYoi",
  "key13": "47aEPpbdeyfAqLpz1f9sjgVf45ea3Uq2LRZZRZk2YMTnGWb8B4JtmtW2xbBibgJjdsohqLuitMyUj17mVsPcNhed",
  "key14": "5HnJ8FdjrvKAEScUwhs3cc4D9eoGrLZrSaengCfwhaDcnrDz3VbyHggxkCbmjJockxiQbvc3woMrwX1m4s1kxvVa",
  "key15": "5pdRUfq6ZxqhBAPA3K49rUpFkuzswZS1yVxQYtzvBvkGEB1uEeXWqrbrWvx6AVTBgWuZGSXMaiNkNZJWJbsTiTa5",
  "key16": "4U3sHWMG3xWBcXTCRVdbhk1L4E8ApfgdMu8Ph6cXWaQTxvWdnuh2U1MSxRJZR59pEGViVDNYqZfKxGGdkPS1mier",
  "key17": "4aDRahz7Fnq4Ck4et3bs5C1SCKGzDaECDGFDbTrg4ifzL8djwobxt55urfpeW2uYmCSyR8hzNVKoFHfDBdK88kzC",
  "key18": "3Y5xDsieEnzSTUGg1vgpqFAWCr1b6QetWGWFhgVdsa2DYuYEe1TJkLWUrb7dhNbENPV2SnBdQaw7tMRUqhge1UgF",
  "key19": "56Vs9bLNPx635dUsFcW7yyZ6ddUjizysBEfm5rZeGb7E3W599ALCV3p9c8sra5WXuZUsuHqc76jeZhTH8QgaXruc",
  "key20": "Pb21Fj9iNZBnNH1SN88EwiFeRSCUrZzLCsBnZwTTRqdMYqRwdmgAYTWXtuEA3xzwKnU7xae6XgUrM7hbD5ptAK1",
  "key21": "4r9W2pyMqWZHgDt6mCANtd7mDQk9jaRSVJE8WthQHXaCxNDJqbvcxx9iLc5KUvbPssUt6EB7NK74nzMEzZNXCWWx",
  "key22": "2d3AuBcBmTh21qMpkGFyPYb1LhwaJazZSsYPNksPBnAZh3Y914wsjnY6xF3YiPQXj31EQi164o1s632he3zzNZde",
  "key23": "Q4g3buVBWgdWiRYNG8uzk8vbaPFiZnh8bDmZfrpVpSGcA2wVWJ7d44atWpDxj5oWjotg7obV2gNJXKhUbQiJuhE",
  "key24": "5zCnL4BabKcFjmNw7ZWyLFAQFuHj52kvV57DZPmS6ewYQgqqiKtrUMXxkaEvRvbt4azSG2aMZvDkfDMvnkZfruZW",
  "key25": "xtoHX9v4hLy2y1es6Q9B3HfJJwMcRGSiBwUH9u1MyKR81iTzMdTw2RPABrg5yNzzaLPvBdc2WZ6y8sGJZXn1DN5",
  "key26": "5DfRybPYrWtSuh2KbRtccapuwzVzkfYmfxEEbaPMjmVhRjeM9XA958523QA6uQetFasCjre5neCVaBQ2cTXf8Bun",
  "key27": "u5T7MshwK6vwuNhhchoeZXdpsUe23DhdyF6eERH6eSUYD43x4oY1gmhpGqq7CzkpRLKrXo4Sxs3vhLbxfbA1Puv",
  "key28": "344VXaLq88HjrKc4mq69x7NaUcrwXp3Gb6LjuJCrfu5sH9kgJmsoTijPK4hdLjPGh1hqUqTbc4Bqd5esboPYR75o",
  "key29": "3uyr8C9ohrrLzBQvgTW6sFf2i4xTwQJrwt4KDqc3bFPQrtpQzvxiJdGX6osm9MwEHufbVknFaaYTHpkeejw7DLvq",
  "key30": "ArUn9keBXNm4mszxBoZMMHutBmmHL8KQk4c4U5oUV88ELtKbopWJCBqLcBXWQijSEePVG8coVUTp9mLnn4aiTmw",
  "key31": "5T3qD3RA7kHdcrNExukJF5b4cxHSKWHZupej7Wb88z6vJintsZm5bQn1ESYZkiA1H3XGpJxEpfvDU7CXbMLVqBRx",
  "key32": "2muHoxLH3i6VgLDMiPkbdCSNnAKFLkFPDrPP8arKToYM7jcs5V9NHbrgcokdoRCZ2P9FwgAYBBcKssZLM1ffKXhx",
  "key33": "4z97fB7QYLxURUx7Tbg4Jb8XyeNY3acj6kZyEJy4Y11w5V9FSxF6fzrU2A9CJJY4bgfbkjVBqRwZMbXWSsdhvYKu",
  "key34": "2hcBEG4PtkVxuzAJxzwPhYYcV1Ue4fbR2hJwivDp1yTGc8AsKGEvP1RbPH8pwzDN9vx8RuXX9xb7sVFiYnyMpAXS",
  "key35": "5PHWA4JimhFmWwFv3edWxzmiK2QkfC6H9DbsXxf43jKdvXoaPDk3PoHKs2EkCZDGxfoRH5bnMA2kb1iRyMYZKriM",
  "key36": "4AsR1EgtSreowmXAQ8DL5ZJveFYE2L1MLTUgv7VsoHwsogCVCwJvpf9irQ7ZHfC31rekAXpPYmgCyENzMPnQ6eoJ",
  "key37": "3yh7LXKTnYQLmH8s7juuSM19Qo1i78wtzs4v4mX4PQk5QnmZJmE9Sx3kBRAzfjG4g6542Qqsz55nieUYt25sxtVV"
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
