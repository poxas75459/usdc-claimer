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
    "51fQ6SL8EdGaCV7DAApbMWmCVSpa2bjhGpw5ZeENjZRFF172mRhQ7EHmK7jrJeYTKqLMhUNHhpdptpwGL4uA5MS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eVBs3xZFcvGWM28J5zYhhHJmEutKdQu3XB8NXykymxGs9QGnMYTfswhfGfM5TNuawWi4ieTvSTp6DzMXhfN98DC",
  "key1": "37oFeNcC8Wq1oV3Y6nqNYYijf5owzN9SbASnNhGepjTSPKmZvDwNSDsqmiFQK1dtMd83YSBBNQJGucz94t7cvknG",
  "key2": "5GeT5H41QrakHxP7DCL25S9gQonJ7QyL8BHz1jQUTGdZdo5Y5PE553cGqqLMeTorxYj6fb4hoThbM8L2HcmxFEHM",
  "key3": "4eWbCbZNrEkg85zaEPf32VwLAEM4h9QJKFsJRHFqJsmfCFsWe1hxS3nMFPPNVJ9iEmUCsdRRieJ9u3aRb2aL1zwg",
  "key4": "4F1ugNXFkde9LpzULj6YYjuzPLpqN79MNRZipZZoxpNZGKiHRmCqf2caNGJU3eaykac8mYeUWcVSWTqYVcmgMd46",
  "key5": "2DSB5xFXwZ1qC5LNSFeSmG7VyjWESe7snyT65jm8t2BhyWCBfCv6iVHJWf5EwTno2BHQqttBdARe6pR6Uj7ZvfbL",
  "key6": "2gAJRNbJ9DtbAv4KrXD3BEymo98zYcUo3HTKQEKTpbmvUrAgTsrWetLiKQNVhfBgpB1bnn6hir2pfCcqHn1JAbpw",
  "key7": "3sVkAbXb1oBb7k54XipUoot6F6ysYaFa34YybrH3hxSjxie3nDxwj6kkFMSmFWPBHX4JT7pjtxHAbd1EawvSBjn5",
  "key8": "2c4CZ6ypQeDiS3v5kFspLveikLrH1hCnsYyfETuyLPgDg7hzwWdk6XzPxdZUogARbp79VmrQibyVEhePDid2pTLE",
  "key9": "2ce3sCJ51hgPJTDhW3MugAE8rPiJiT1uuCmsMKh57Xm6foNqxTGevxjmjZ6yvFw9dKTsu7qtaY4XV9zkWEv81W9V",
  "key10": "E582XcFw34fgFYLJpc3brqmxbLjvCzNzyZNmN3stMa4ar2PdrxoNPR6BQ3ZgKWv2rWzt1ptyZoyG8MehPtv4KZC",
  "key11": "1iMscQzuNVSCQpW9qgG8PfcG8TvBc9yDyFr8rjDfgmctTgk92DssiNLvj3vwdneWnwnYt82AGVmCeU8RhndH4YB",
  "key12": "3pSZs7Hr1htKtQVUxBxtKMWeexWj2G9wZmPRZ54wxWUfS1J5NB5Dn8ggbYrBd2qNQS8qDKLM9uVQM3jAHNPP8oBY",
  "key13": "3196YG6oj39v6SnfXkZeN2fRfK2iTBcxMigtsQZwZiLGevLszhSAMos5irYMo2BB5JfMMo5BjpUd4xjCW9JwcZc8",
  "key14": "63DpnwYJCBxTvb3NXYqWC4Z9Wk2ZzRdcyyDKWZJY8grV7ucvYXX4tqAFZwwJC3HL23PKJ4Xvuwy2TYySMjpCi9Xu",
  "key15": "XJmvgAdQ7vsb2ejUKW9hN6LPyUDaca9w1aN2o8Sd5X5JDqVXBQn9JajiWpj6awiNKUmFXAL5w6dvMp69hQYzfGq",
  "key16": "2vZR8hAdYCMABJz4MmyANrNQi9u9mzopMan8KYyv9yvBgVuh5yAS691Tm8tThASwWWnp8VooXpWbtzuZdt3qQZP3",
  "key17": "5XZuZCHkBdJZWwBTgBtvf816NKR9y3wtPXjM6UXm99vowsQ2h2TpmFDwnGUvBPe3u5HNnRxSSxeGaHY6nefqdmZN",
  "key18": "5mYPyTqQHhf9bNFWSxDjBeHzE8vcFuDGKGxHsHiHg5imGKGeqrE1e36HcS8npy5VkG5AweH3WntBLGuzwba3Mr5q",
  "key19": "38EWUynitFSNWsSNdknYThCjiyK9dKPX7mvEmXEi785uxEEjWjf6NjyjFCBM23wmZ71JFtgPr5DNXQmDTryxJ6pK",
  "key20": "H8PAUJCyUAZrT5bfv51uXHzYGKsDvqDRx4qpMwFge2YCpCL6gnuW2ZoUJ8KZXZJSa65pWG5QPEsKibWEjkiKNcA",
  "key21": "3Cjipat2z7V44xP5H7pdWmN7bJ87c5iG7VLSnDmSBMvu3koVtd9JWXpvDQknjF3DgYDdv3YyGzHkVwmWGx9oohuF",
  "key22": "4CRmUwBAXJ9H8DfMxxfRzb9azAovPSBG2rHyazuwRmdnsBPcrs5wLLjaNKhJZRPJ2tpGc8PNz2ttuLMgXoYdRQJn",
  "key23": "2np3GWJRTD2DPksLZLj44Do6VTkQLGmTHcvi9yzRwzWbocYrpowQM8Fh1GDNcgUnmNmvNt3v3qwpyWJKDMCAAm2q",
  "key24": "5Q3dKDNhJvEgf7UYA2LETWQNBddG5MqRtAHupjmET6bJWBmabVS9EpxcEE1eCYFaTSjsT84cHvsftUyJo735aYmr",
  "key25": "2ftEtHV9KbjU3yKgnFyMtAGb3wpuqbE3yGbfpVQtsBiphz71Nwgf1sR7U4DcWCjDPeKCCaMBPX9UF3xmpwABALxy",
  "key26": "WaJrZeffGE5xsRKzeGTACitXDRB66t7JhdtXUf6cMqfrVQAmQCgb2xd5v94xwDvuPLG3XBYEGkKpTNNCZBuxaYt",
  "key27": "5boX1yg9TRG8iFa67xGtrxuv6qUwLjvZKjDsmKcDm7myiS72YQPwaRprugBsVodykGVPVDsERYvVZDvVx6wmtpAk",
  "key28": "EQZsv6Pp9xPdVN7qyNwjdL7uBztGiwUdpRZpkXZAxo67S3CmMGoAKTHXDY6n6oUJwrRLmtbDjm1VssNztZL9yq9",
  "key29": "2vs43uCeYT4AaQZvxHBmQNnLUbAFoEig79FGvGhJHct2zYT4ApSiHued3vNFDHwiuJgwDhM4ScArTohyqzYbrisA",
  "key30": "3mrynQNM3j8fUXxWPV25gf5JJiowWeZptvXhSJDqepu3NTTSB3R7hp4yhEADfQzmUR9wUHNYG98nDoG8k5PhtvbM",
  "key31": "2JmCmarzwsV1gqkZDZcY1hYvguT3gxEZtTEVQYBBGpX1afKB9Ad57RPKQHQNVg6cahCdGyL4oi2PaH7EW6Bcb6To",
  "key32": "3z5Cp8nztRvXDCD9R3tJjF78mj836qXpRhJcfWTiNw6qcBVpzJYxsycYXcanG9JTXto1oW3gGmtbUo5ymggKo6S8",
  "key33": "5MWpCCcyoozbNo8rhwKmPdkTAkSPXBkkLJWDyicdHudGGk99nKnpw4MaevyNKVaGTTDH4j8VG1vcfWPKbCry2woe"
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
