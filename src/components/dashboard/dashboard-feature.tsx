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
    "52MzBvdq7gYdFiLREDy5ptxqZ3azcYarMFLsSE1xNJfXPpyavgBbuPk25upHyDmDoCNSkj4mmh7DVbGhkuj8Yrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1SagWSynSJpBBdUHHa53g9G6xw1egCr9qjohMKQ53VcedkJpRWTGaRp33CdrBGYkmyuP3BzAsd2db43c9BubEu",
  "key1": "3GVhNLn6SPPfwahRguUZK3dGiYmNVTvD65FrCWYgsrRkqxVHDVdtbsRgiLQWuLfWzdGhPfVyX9WEESfxAFrSrLej",
  "key2": "3CeTjW57Tc57kkz93nP63qkRhuz2i61fjAJgsSofP9EuLJTVWCxpdReJGzf5tYBzzTpVxJoeubGUkzCPfvWN6Yep",
  "key3": "5n3rmuXhqLJj3xo35Z6Xg8DAj5sMB3zf9F4mYHb4MY6S3Dx3H1mFP8etXUivu23H9wS1h2vMAhf7Hj2XGePHDvFU",
  "key4": "62PedjRF8oai1NKtwCNoJttkL542L8S3hFifugyBoiuGpE2uJYHUz2W6SoYLHpQ8CkJ4X1oV1sEwx3UprtdxeCnN",
  "key5": "3utSKvsczYvz82uhJT9wgc5KjTtPqN35k93ahkYN54A2iF963sED2FQeNgWJL63Xa9RLaCofnAfgABDGjPxSYEMp",
  "key6": "2bpm4fARAH2JMGcJgnxd5V6RGm1otXhAdE8LDHjcNNxnjF3jCwdaHT9vmJ3VU7cdQS3RKjEKDsC4nLMn5yhDVQhZ",
  "key7": "61kZHkKWvveM9731r4r7NiFUMLRoRRnVtWfTxAvwrukLtdhFzo1Sp2Lb1tJ7KGQAgPDcoNhBh86Yc19MSL1cy7Kw",
  "key8": "5mfL3WTtnHox36JVaPrQCSBZ36ZijEQzh6pRpd54YhGYqe3EPMVBgYwnkPrmBpqb2GUrejgpJrXfxdvt4WcRpUon",
  "key9": "jBgrLVreQaeTMd2pJiKvwJFNbzCgyiddFbt2XWshQMAi97CD6gKMAq1aNdQGmAPSY96EtS8b9PZSSjVXXsv58m2",
  "key10": "5oCgfuc7cBQoxf6DnTidibJwSSN4aSHnbYDnoiFDVY6mRWkqgLJbtCriR2xMFGwuehgrjadtanBBrVXm1Gr9NsF5",
  "key11": "3EhqCryffPVCVN1zkWZLDoFBrDRhRBedP2Nh9rghtTXCKV6Yxap2nuJhehNkEduhJk3gz1NN3YkwA3Jhi7qGztNX",
  "key12": "5PfbLhh1Mbg17wua7oQvwD5wgczUJErURLRMbYeGJ7zLFVGidGWjvj2fkPduTAiTRVxA7xD13N4mTn2QrRqfrGs7",
  "key13": "4bh4rNrLTfPevwe4dG8VZVy2rSa267GUgoMdmdTH1nYgLXpSbjhcW3g7pf8Ut7GP9cZGW6mHomTL6EUWCMq53oUY",
  "key14": "7DbarWL8m2HQNkwvg2JR7iWtcKyocNfDJrFo6gvf2R8zbcnwwNAFJUrnFapWkb6NiSmVmxZ8BHJUKmT4NK7VtgP",
  "key15": "38QGNKpV2uASLVvQQmcVvin7maL16g4dWm891abp9p1UyZC8Z1ZKzNMkEAALBJhum2Xm6tjx8C7vH8aC2synQa62",
  "key16": "612ciuohvk6ZnA1tD51c3XZ6hZ6pRZp33j1SB2LdFtX8wThaJGDzA3vz4ZCxYPa4hSVshToFJsRe4iyPkr9ETjSw",
  "key17": "3L2NZSsbPdE9myw8baJiBKVGuhga3BAbNo5UCuxrJAwKWDoD286AAokLRsBrfAFFn6KDntqzfAjvMZ99ayoZL7Uu",
  "key18": "qMBSjMEATo9BFg25mWLVgJvMKkqphgfbWUPUUavhRFxqrXXdnbYF4fQcavCtUXAczhtQhthgzbEqVhn1Q8zZniG",
  "key19": "5xHcmV1AZCiHBHs6vNEkyCgb1GB4pmt4NM71eZ5fCTbYGsatKLqyxQHaTuXptLCtzhW4nwSTKeNmFQyj33prz5EH",
  "key20": "3BKCTJyW8Gkhe5DiMyEjJML4f16hhqWhtE1SkAxV7XunutVpvDPsUzYrs5HeELdCe5KAnUo7Nf4chHzS3o7pDFHy",
  "key21": "53kdBJzn4roYkmwtWvkotkdYwpbL7JGuiwk9cYWFqxs6QGg5TiepQD3Px9dvuiU2RJ1DmmWetooP2DK5n3F8rgS7",
  "key22": "4guYACA3HL318dDUJZbWBxvXhZ58UPBXUnFqht8Dpd3ausJNyBHRiuc42kT5bkTEbAtkAWKin46vU8M9idjd8FAh",
  "key23": "4qPn1do9qcc5xCjv3xkMdqvue7wAtvKFWL9jrPw3Py9nJdXtEdKFp8dTYaJVmyvHVhYY4XwLn6EDWyEtRjkjrGdQ",
  "key24": "2wfkizV78ddNC5WmhHjJTYWWqCGjHSRXNrL8jsqxRva3dqpoYp7Dsq9ZCE18g4KWHNUHtXMJSYvETW2Cma6xJnzK",
  "key25": "287ExoAEHeFm6iWx7WNFFxz6obYoD8BrUUFthThyeEGcMRZXJNeDqE7RnGcJNrgBPDBS89kAENmbU7gsTZDATUmn",
  "key26": "619FRhhAQja7DwhireGYDCVLYH7FEZjQLqj4gFs72NcrTsCPSeWd9BFrpA7HEVffS1vEVjUZ4zfHSxoEWkJdo8Qf",
  "key27": "XwPWbQ36UmG9LEL3RpfidRPpCa1FT5rdBCHCYdN1NWfuLpBY3eyT4eYp5c2U6aioZpFpCqBobHGo2uAJWcfX6Ap",
  "key28": "5KqoHmtJecWXHgkF33FpfMJtafX3P5MqLdoLqWjTmFYCcFFHiUJMG9qfxGh2gyNmiHqomPWL6HnB5pojMQJuae5G",
  "key29": "3QGT7Be2cxQNAj9R3v1mJQ4hY5aeHwYZGoPqYFiRWE4QWSh2gRuwyAjDx6zAR3n5i2cfKMbqhXp5SX1KjyX7AmYu",
  "key30": "62o779bvi7yV8jxe4meq2kQ3SaZCBrhNcdkWdUN4dRMUWALe7iQvH5Ghk8NykdvdEmW4qimkwHRUYPURYwR1GdEs",
  "key31": "VkGLk43buRLzn5bGAESKsEVK4JN27guzYLd6bv9qbE2KEcD8KPgqkqRUMAuBKqVoPgM7b9cjtFV3SJBUtbkX3oE",
  "key32": "2VgYNqDNFJUZjHMCq5UE7B528nYGSTHdyBaEE6wctvDBqoXHmFRc3Jv8EZ1SFgq1bVpFh2Uyzux5y8C2XV8kmBn8",
  "key33": "5Hh1GmBQFbDxhn4D6wXZkCmbYSxcodVZnxSK1gggHjsbJeSqePBAfYGhy9xWe5da7dwhBed3v97XMJa2FdBpYc2z",
  "key34": "pjdzkzjFCKvKyndfxigSmDBDRNDSMqFiVuWCQCRfWNGSBuQAuEP5buTVDVPCoqWVZAW1dJrBk5rZR1a3RUBfVXt",
  "key35": "2kZEtJrvUKd3YL5K5PB93pxhMys25NVNbBpVGxfKMXaY366aSqmU9oq3ai7PgzBRgDUqmNiHuVCepAQFCdq4i6sE",
  "key36": "4Y3rTPkR6FDy4igBW3hocv3g5sFQzdbLwiMsFWtoDKYkYdT3FSmFf3GKzXRrj5arwnTrUFubpoUXSC8vYSGcZrzA",
  "key37": "3snZP99a1Vw2NswW4BFffqXoV1oJ3Gf6VLz8vwBRmyoM9Jm17ZsH4QVgwx3bNHK6de9YP88mdz7usGzEZvCexMbZ",
  "key38": "3AoxCfzQnF7CjhfQnng7nXzDmCCfwxqs8G3kTJsnCFSJE8LZcumgvTkimtjYqSJqGbqNpB7WT4ys5vbdmiNY2b19",
  "key39": "4bd87rNKnfcdykgMvHgqE39c6LBkhuZiZZMncr68eDhbmeNLcqaSqHq8n3Bwssb6G2CAnLWNim3dY5ek6zGU6Uoq",
  "key40": "gGSgAcX3SBfodgmo5uZZ5yV9q372rkvNQCNbnX9coAMo4sNh9a9FFurin5iUW2oEjsutgGS51rX7CmrS99SSTo1",
  "key41": "4kSdqyEizmGfy9EFCixFPWzQK7qnYb2JTg9GoDHby1tV3fPwa4F5NG4ddHYV7p2ZmUPC37cGFXD21wiuDHZpjget",
  "key42": "279KNJ6vfmowzGuWD11tj6MMfVAsCqQqrncBgreRt7KNCkDNRL2kgMWxEFBre97XgqtA882VgKTbYoQgJ9Deupnm",
  "key43": "6NaLqKm7NH1VZnuTE17KJwA9ETJ6ktCDovKBbyf6FS5bnvKbw7wGiCNwd27xdeTGvxEQxwsMcGLZyB3WmGUWMFV",
  "key44": "5gnAwZnNA7Gaddu89RQyrRzfLfQV3ifr45cdc1LQR3JnNfWhhedDZJa17iG4tFbNo5ccqbXqkyiQMRry685zM8AR",
  "key45": "2oXZqcAWr92b3EMpEm5KQfgwtgi69PZJGDe3EenAQn8eYrN3kDQdShx9g7KSba7cR35vEWG1XjUQF6f9QnZfRL5z",
  "key46": "3d73XQxVaA4ZFsFfzzb6SMqt9AUDMnPpZF8ohbBGJ2DuWM4cNjsvXFUneZfKp9Szc9FQta2DmixmYtSb577MZgan",
  "key47": "3HBcEkBvSwXsQLGm6nYwqMbHNUhMLTADkNfcyFnRBX8p3o5QiD8rAVoDDsJQV3zHtGe6AKjEmZ1xT11PoSu6So9Y"
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
