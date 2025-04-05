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
    "4jxMmAZ9szDdnuF9YDsnEMaeJJh1A2v9QmgKskFii5rBHBfpwhRE4aBM8P9pmEF3Vt6xFbxU8hr1rNDvpPT72iuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x43z9yiyJ1uqzwbCGw8hotfmNk33Fu6hcf76PUVbTk2tZcq4WVSRicVmbV5uxg6DNH1H55aBFgwwaqsQ1NGCKAv",
  "key1": "4p5dWp4Lgs2xiEeVdmzBgZy6cgB9xgLceMmDqEuksSReh5e3xANXJewkw8X4fzFwf31Pj1arNqvL14DqvwvBF9DZ",
  "key2": "2LZd1zWRiLRMV1RaFESYK9xfzSWpi9Z8WAferDwXRrLsJVkmgM2DJkgysJcBi7ASbUs2ub8ZVvXr25c6FZNWhnHW",
  "key3": "3jCjLhX7bVbEbMXzVm6pkPVm1RagMUAiRizPaxrVQ2mEcWhg95N4ZUGSDMMRrp3tVBxErLEQsDYh4EsqZhGTtV7Y",
  "key4": "22iqbXphKekhM6KVee7RuMCUhjXH48KG6o7qtaLR3w1LJF7ApdSgmfhhW3CndsK6FfndTGRoT3p9vc46Jnm2mE8z",
  "key5": "2KT3xXEPB8VyWKymn9KReVTUHCn7wmfFofQQdEBfdGp3VMNUZ1GAwQ719yGiWYKwKUvCZ728h3d81BhcHdkb5vz4",
  "key6": "5XKypFE3xU78TTgF9z127KKfA8kKqJQsqAUMKS7nRYRhjBUoCr3tH88JQZ7B8iFcPW5uMoX4xbLCWM75hewztpBh",
  "key7": "3o7gjuGpy4RLDxTLkw2PwAUPWj42yc7aZCP43SjyNi4hgThPHqUwMrsZcxuAyQgAjubVjksytBUxpTV5ubKoMXqu",
  "key8": "5XjMrG1qnA94urAqw5HxEUGqW932tVKUnt7rEfK2Vr7htCCt6zbKBgo4tXtQAJs2ohUbnLdrREBdxSPhYKq2YtAA",
  "key9": "iCf5qUweCVGqcJXoJdJBdtjT9bueSFjDt36V99bH1RR37u14dMF6ikq3S62JiJfnSHbRRzXooR96ebWpsE9M4Ca",
  "key10": "3PpdKdZRDe1d3VStHPBngZyndEZnaJuwSqjVaDPewiHFzqg1pNQMuK7EVCgi51y6NmZHiQ29Nrg83ttX6bjEHvsW",
  "key11": "4AHTY6E6je1aTYjwWKXQdjLrGvhrxuwsTxvkauvib3FngAQqVLRkVPbwd1v3YhzGXmbHaxedkzzb6AZn4q6eoCMq",
  "key12": "HXEkgtsFoeKNkmYQLRYkfUKvySWNGT12G4SzmD9aqwb2nHyGJm2wsjuR9JrLAPfQGcFCFdkL96zpANGuKhF3nMZ",
  "key13": "5x5NYRyZdaoPMkpGst5FtRzu9ArzmJMjKB78rujeunRmF6sgdKhoNjfTsLQDiSYygRixg9BMxkKNzhozMzgxU4FP",
  "key14": "KbmQaJmhti97K2EHXQAyBzF3KXSu5qxMyosV512s3vUGiL9JzipkaXnzxZWaEKc91L5RT4YxrLfoPQcP7s1yxSj",
  "key15": "5PgPHnSpmTiVRfJdk8ri2QWLtYi8ocDgonywnoWqM5TurtCGM1jdjsHGBwveHcT4GM1BpBRCQXm26J1kqtYZnWtz",
  "key16": "2krF5aPatHya6TmFAGcmS3kSuw38jdB33fZTjPuzehzyLZ6M5XhxknwbcktQpPrAzDfi6Gdc5Xufq9jRuthz3ErW",
  "key17": "4DZYuToxMcd8WPTCF3Xg8jV4AmY1KRKjhTpKiX72P3y5JsrALrudznSPHct3KLHy5HLMbqU6nqRjJyw7Eyf1KDs1",
  "key18": "2UyLigztpwRDcVpkJuzuqZvQMiYcg3pXaWXcDAweeNpGXdVb8YFDNRZeR5RK4BVvgh11M3kUmYA238iBCmfEwVbG",
  "key19": "2zEP9dkh7G8dokixNG6PgcnHmKaFHKvpxPk8e3U6PgBQJfYMMiSQqyRsz3zioSPr9NUpReCePa87nzpd6AjFHMNY",
  "key20": "413T4jKVJmZ7g3tQxNhpk1ikavpA1zYE8Lep8es5CRq5WH4S3bNXNZvq8LbQEcqL1Ly2Jao4fDXA7fY3xSPbxK5i",
  "key21": "5N7z8qW5KsALq8trVUNRTPSZ7z7iFpSusNCFKXFJBrFK8aDww8q1s9Dn2F9M98RJ6MDFzxrDcgXQS4nACNPaWVFK",
  "key22": "4a6ac2CyK8buHF3prVt5gHDYPGkK9nGFiDrLQEEE3u8sE3mw76mfNkvsv893hTe3HWc2tC4jSELQqK4HGzBaMbq2",
  "key23": "2Qvs1itQQxeu3LRHiY3M579fBXuPboSRymUmrWrJAWSQfCNnGhC9dhgSdu2wjb7nwFKoYyW9NtDpWTRwuJ8h2JU8",
  "key24": "54c8KxSbeuSC5mYFrT5kzE7jGFM2YvVa77gR6ZDMpDBmbs2upH2obP3VbfP2xRq8uFaxSZGkAB8zVyhdCFmeXYbL",
  "key25": "2U2358JKNm2andwwWxHM355YYa4NMDkK6mWfFWj8PQbp4Q9XJVT8PLQmbHiwmjbHpRib22redNrqRXx1AZj5wspr",
  "key26": "3GALdH7Vi9cNrgZATDNGma1pZgYzEKzqbqkRxfpn3P1ZFekTCCj1ss4Zu2XpcGsd9thgauTswFfcQbPBJ8fp6tzB"
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
