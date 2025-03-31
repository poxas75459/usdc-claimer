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
    "5tYmxgxUhd9y4s7Bxf2o1PP4wSFt7tm5pViZphmwJLYxEViPFAdEJZkRWHcA31hDETiehPmGwkWAxsVFE2wzRbwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPKpWN8EVMzg33drKBqVR8VtwuBXFkDub45VL4B9khP7uLYYVrTe47oLxbHfatGgzsw3B8TAQxSyidT4Rnj7HHT",
  "key1": "4TR8bCacnWo1BkEuXWPWGBZxui7qmq2GJ2bE6rjxUVptFfZAWzosLAPFRmusHj2PEYYGYUTj9LU9BJFvQRwcEGtG",
  "key2": "5tr7NFZ6SmR5VaCkgX6PkodUCvSKqEgSXj6kuQMNYFjLQo2TYj9kp7ZBELyRWBxtMobj6qAgRBautpQioniescmp",
  "key3": "3rw9UYNNc3q3hjMq4W5uQbRBazfPdirYDfpTaazABeM7ytSkx3TqYwATDuAaSjeANMkT56PT4qdLc1SssBiXd41W",
  "key4": "3NpjsQdsmphyncfscKASi9Saf8SvPhiaAJxi2EjahXsaUXg9oxZ6cQRoCpvx5dhveHqzxo9bFm8aDHwvbKYFXdKa",
  "key5": "x8kaBdot26uZichgq5q5GcU73TBWLSMDR52yaZP1cMzUNY8Ws5xYA2XSCteUAgDMVsFmPuUZDs1LdLYyjHhvvAC",
  "key6": "29aHozpUfgKnDAeCz9uoU39L4vG2SuyxJNReciLoGTJH6XERUXkMU5MArxaZvUnr2sSM7Z9Q7RhiAZhkDLUaXNvr",
  "key7": "59iVfAXWcogBiGRLCry6o9kkWR3WCX34n2mukDFovjv3ScCpyZsuv1sWgLv4vCgZ4on1P7aFXzXR8A8YyozEskFq",
  "key8": "WkGVpvb5A3hf3PkzkQCmbB6oGis75qdNcac7AxS29JfUNYQM1zzwJ1TKVqiUcxo9McxchimViQMqN8io7WXBSDU",
  "key9": "2ajsffs7bUiX2nsyJrJWE1Cd7vN4fEL9x5pLGNpM4vaaRQo8qYnfyiJrYStjrtQxhtBxMZGRfu9oibj3WyLtFmuG",
  "key10": "22zn79PcGiA4PnAxpTvswU1sRTciYJb6tgYS7mLLnYkMjR88ef3FxAyX7L1L1edTRNi8QKWWFETLm8XkXp8L8DBq",
  "key11": "3mLvmgk2wyestzpArdYUvicPtscTP5z26JH3JvnCmq3nwhsRx5peSE7mmwcPW44cd8HfiLcpjSagrpdr443zru6P",
  "key12": "3m6QouJtKMzizSoEyFu1oR5Q5aykCBRHftxjaSSGzVqs37DvAUGjaVtsoP2Nknq1whLmnjXudxHABvP6fWiiKb2S",
  "key13": "5K9GDFa3avKr6Rk1YDXtbedqAqMuVfzTrQeQKQotsK3bNBNmtE7tas2kADVENjmSCRi1tCnU9LYsEWzfWciq4hD7",
  "key14": "3aREiJQMTSEEPE84JKrif3FpLusgpahMVXN1mNqrUfUNQJWR828HsXMpEXSpwrS83m87rma1SR1WutSvbGZJBSAX",
  "key15": "2ZuJwJ7LWY1yr7kfGTcnBFBKyaSu9pFqBw6hmie7tLQtwtugUtn16dEfkYC9S4m3Gaw8pQQ2GLgpEqZYJeSFzrk1",
  "key16": "3EB1Ho1EByY5J5HSvUoGtD1GQ19oGNX2aLQHk2qWVRLCD77yDo6bfexCyNFVx6M7ak9Cro4WW6hxXr3Zd9xbrAKj",
  "key17": "2qNZy8Hm5YYkHyqdSkuXpevwA863Vdsj6WCJDSsP9zBaNUJ8C3TEDG2K7Zdf5AyJH3j3CrF933CWh9eh4kHhTHsb",
  "key18": "4xVo9gVvVFUbtTNhFSbNDWfzDavrPTrMEhckV3w57oT1xbRaGmNPvRhuEfQtw9Qpttswy2Me2UjeeUrw6TzPRZ2U",
  "key19": "2rgsts9sYwyRgVp8cb7c1Y2rvmNFhApThrXopLzzxVHRanNfsb75NaJAZTG66dyLL1K4gPDq9ZRsFc5HrCK4dSAS",
  "key20": "3SBqqyrsdx11zbw9Dbpns67pFqpVSxWrtgZAekz3cPAYRscwQyoThmyXtAKgcUx91H4khNG9Utt4fpPR9Kh4zX7H",
  "key21": "GVpRH76VU1x9RJzFRAz6rMZz3Br3ihVrUqqPJGt4XQL31gJe44VrenCDhVobUR9k7Aw2bpTgAC8k2MZod1sLQ1n",
  "key22": "4kVNrmkvB8gTebvRptpzXa1YUj7Dfp9KHx9gvBw9WfXC8rbjU3xtWhro5BXK3q7utksA5nD87nzykmwEb9bEaW9P",
  "key23": "4or9Y26xpvZU3LcSdUF6jgmJrAounyxWWwcMKsve1vQr5jJHR51sejLCuZ8qtrrWRa5aohAun4XNAytk2KgKWWFg",
  "key24": "49hL45HB8UgtSZLkDhT1jbsAsDSdqDxjNyzJSL68rc7KvCfg2DZ69F49xHYnstk7VTACmKg3ekBN9QpAXaPqXx7J",
  "key25": "5tpTJamCJHt9LtXUMfGyKinufhjTPTtjybBt2wxdPp3godf1t5SjAFqRnnZjoNqG2zAziScDzqGoeFrordvvAPNK",
  "key26": "4BRsaDD4qcQTFsLHj4VbR9zqiKRhBGML1T2d6djE3otgUoySZxqeHqN9hzd8b7Tvq4Z9RLNHUPFdG6FSN2vF1B3Y",
  "key27": "2kRgW9DwUnSmVHEuLqr4FYV7FkEgQ4wC6naMEbj7UtqmoSnNh9gbg5e673avJVPKLtMgLtUG1xELU1xX21cGxZLq",
  "key28": "3VfoQG7HVuBb4HRLpaw47jsLgUmauUPXgkwq9Z2kmHPqStVcsUSodgtRqj7UHG8S6x12PfqeRtzKYVv1EsEK4tPF",
  "key29": "5JEVfBMV1PNhUCH8Wwzu7b8Ke8JURoHegMZnzoj1Y3zW81KwE5HNo33arhZgDUUM4FJeuRnexmj1t1gC3oV5wDGm",
  "key30": "4ZkNL453xb1Ejvu85ApUYLCt4f8HweJ1JxNUZsun65W5kyoWWDvbQ5PadYWuBy45P97fcDjrgzdeGAzuRGSpAE74",
  "key31": "4jpRMPzKTtj19TZS7BjuCnqKCcojaAuHYTTyGYJQ98YaTEjctbwQUf4BnHjjDsk9DLfzHu8ftf7t73PF6mmQeVse",
  "key32": "kSDVQk64yVjqaGGHa5KsussdApiM5ofGzDhkTf12qX1oJVSSsRftumZ43vHR4jRqNMCpfJKgW2sjBTizjaUHKEn",
  "key33": "5sQC9a8oD8SB8tbK32QEfsYPice73zkDAHYr67ky6ptS1BLfHXHLL3wdG8MhufQfJWVoxk7knKGWS9pAvKDcS8Ct"
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
