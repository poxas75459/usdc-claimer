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
    "NhDEELzioyUiREUjSuiXfvj2wPLfqYmteesUdQt6EpNybwUieMvHpT2dDuqYAbYaN2erP9GVyEvvMn4rigEy4Wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmGxfZ6pk1SRVBW6bUh9gkt2CHZdpZZBc5mz2BYS9tMS4cB9z4oapfinLWFcTNGskMyZdbJMwvUq875C6CQqK6t",
  "key1": "5KFK2at4Y7KGTVaQ2Yiow5KZPDsbuKzV6z93Mw9ibzecM66orJcjaJDBjd1s8Titg1mtP3iv9zHUfjtsFSTiUhsm",
  "key2": "5aGgXqQ7Z7BALofw4Dgm5YWZErZHK3tVrKLWn6iWS2erVzyZKCagcjWvLEo7dyR3CNC6kpe1xWARUpdvWzjgWSv3",
  "key3": "3bqLiTBGcFtjBqWMQw8xrQGU6mZUMVq8k17xLnuDdxsgMbtpmHVVB79bxJdeDExEnkNc9uaoRDQyZ2FMb277RDG9",
  "key4": "2xn7yqwBFEnC6eBUg5UJkRcBKT3nHyfET5LJyUjYyp1eEwCfoq4QBW9xYwym3Rzu8CB3P9eudqud44aawwbw7RDr",
  "key5": "2roRvdvHGS5Y1dhPsCsKK9Mf62xpTTQUV2BWBWac5g7UMtASKXZZzD1k9nWSuJPDk2fAhKoL8b6gcfHygNeMxoXH",
  "key6": "4YGeYwvbhHMmq5L7FGGjkShRQw95HfpgxKP7auERXMhi1fD5s98RA35p9dNuzZKUh2gFxFSFR9Xk6CdPVvAx5Dae",
  "key7": "4qwbEtYsz3DFoshv6w5s2RRzKsMhm3x3j81WqYceTSk2JDRLfVRYW4se581goraHmWimqmy57AD85Tmp3aPuSL4e",
  "key8": "4GK5HjxR2Y9vydAoGsN7ucupM3dW2MvHJvYKcfpqK3SQ8pUoHXWqi7KuA8uAToyDaQxrM86wza9o9qWxAKzziryo",
  "key9": "RwqHGED9914Sko2untDgcjJmt3XrELW1BoBGD8wu9mBCVngriMuV4AzVTy5b3PW4oeir2gY7oYE4QyeDqK4bVgn",
  "key10": "2yHLYHuKKFNGpNQXyFiFzXnTwsXP317yXReAp9VVdxLbqBCXxN5K2LPu3wLhts5V6tbMK2xqNAdXjrBayfysb4ss",
  "key11": "3hwp2RAKH2MtGozh8neK6CDeebYKzj5ujkR5bfkxHxxJn3fb7hZxtf4Hj2stKDvjaTho2BL8XcHpaFWF2MFuinom",
  "key12": "2UPrfrLfEddbvBeE7CSTXsEn3UvAwmQwNVR91URvdqyk31MpDrQtN72pTcGenau59aSkkfR89UJsebg8zDRYrFr3",
  "key13": "4kqGMD5XtS59HVUMqXKmCpnCUJzvH1b6CU9NGnxdZRbvUWifhbjBoudewWb7Xfsz6Tue4BtRSBhCjngyezwoXgxn",
  "key14": "3JegvStovvpjVed9wmTLQDNjXDznvb4tV337Jj8s45PbZWcqyVP24DE6d2u9b1Zt1zLPmLMUBh4SLWPTBusDGHCf",
  "key15": "3u7UmmSCtWpZ8RwYBWSYqAVnzQKbeEXeehKxULg4tPiF96kb4DzBpYHbpYMqTrttRhSaEHBS9fbAndrvxoTnQtHn",
  "key16": "4AC5iBKHKnfwCJoHaXhujKiWMnWid4MQzB5x6EF1dRef2U9Bh5rb82rZs2tMzGPMJf57y6wVksq6uRg5K7sz5dun",
  "key17": "5gV5uCoLq8DBBQQoPTc9B9WYspSLv9pxyaXfAxT388eNdPUSUPEPh4oNh2TQ9rMVnW7YSDCsBSXjSJFpUn7C4Eew",
  "key18": "4p9s6BWH3KHqHw3ErosRN8Nh9B2ABPzU88tha3PmYsGHFiAu4h269JSinBZXFJffP8ZWg8j43tRfNvZDU923n7rD",
  "key19": "34225YhgwVvFmbcunj82kPDZTTKuV14qeLPjnMYvKEDoS52MrfNqAN4wkbtji4DoNp8yqcMF1YYG5XJ87t6AA6eK",
  "key20": "3JkyyPYm3Me7tFw7UtZrhrEHR7thWExRiKtCk5ALq3ew3Uv2748AiW6fu8RT4iLVKjuszBrdkuZknVWMvTzqLB6o",
  "key21": "2P1UEZcZSeT6c18xDzeU37kTQjLoUNurEb1icGhfCH1sCjQHWuKL4N6oVd7neNh3fPv4NU93jWdTJSgJy6sSQZNa",
  "key22": "4faa9nPKvp4Rs1grLEerbPXQS37wTVihLcyUX9vRAQaptvvsZPon9SLmQdE87DWBqw7yipgYXinYv5bNe1gpfyGk",
  "key23": "3o2ETw2jozPe3hng5Usq9SnYM18LuhS3WVK7soUbAtgjfcsADT85gzjLXzF3GFKeUqdpmbw1KVZ7vbiQRntScbHj",
  "key24": "5zj9WxZN5YvoaM1dpcgjqDhLnhQEcF6AwWEwPqr7jQ7dPyQZ9J4CPeWzWpZQ5rt4y8VG3r6hZYAiSy1N7dor4fEx",
  "key25": "3APqUzUaFsrjNGy5pzEWD93Fq5M9DmSLYgYZsvP4DwkHA1q55G85cdJd24VLMkQYCvZ9gq2tiXMfpLpmmHhtXas7",
  "key26": "5pkpVK9d6cSZfQNbtpX8pggpRHEk4NNJHRQyQZA3Xs6mwrUP7poMpQSofbHkGrDxEf14AGja1aWLtYbjf647qcS1",
  "key27": "4EnK9bcvr1eDzoQt32TLyq5qYNgYcLuR9s1yPyaWjdgUPp2dMdw8oRwGXyKpSgrMLST9wHvywsAbrERd3bNMiiaU",
  "key28": "4KwmFDY7pdw6WUp1i4haqDJauKUQwGmH2JpihgegnSPvFeNUWTD5kyxPtZaZxCcksNGi3Y3C88Fs8Zbmjg6U1PDT",
  "key29": "42Az3WxVZohAfKk4B2XHB9Jpsvw3aPmJqmPgNF94VjonEsC3vkL8qvBVqXaxzXLR9QKxskPcYiUj7gxMUPAp3wFe",
  "key30": "5YBfFmCvfDy6mjrGCBhr3YXesp5uSM7SbgB772FbxfNioFKi1e28YPXkQBRbmDVQNoWx4FRMyqeejLHSrbWFWcPp",
  "key31": "5WACzNqY5yQrY9j1viG8Jht9k96ipCyz5p8AhAUzVYE324TK8zdfTUP3AMZDSLyvEeskYvzo6dKzNaetpDF3wPju",
  "key32": "UB95EGBzoaqWg1iDMoVfU3tQKqTsVRKgG9HkL21Thf7Ct3nZM9AsYaV6EFDjL2wUSKfHDeWmCaLi6z3rCQeNqaB",
  "key33": "2dhfD1iQZiizfiP8qR2emwmqRTFq27r3X2DMMoe9nDptSXoRTZvRjoTsGYXEVrg1zBVAwmJFUjnQj3QHk6yaGtET",
  "key34": "4MmjHM7cCTD59yoesbKUoVjBfsJA94GYyT4ES1mcTMft4SDiHfqTbqP619cUu7M4CfSqx72YhDZMLFCFaqVwNtA2",
  "key35": "4Ni1cb2QEP3N8VYRPWFi9otb8SCqtB9NPSKciWjX2hpegciE5JuZjHi48uwwPcYVCLHK4CGoJnUhfFHNUZM4Sm6G",
  "key36": "MfVZGaQhankr9K8v4E26F8omxHg2DGir6AzRaEtX5t7z7DgJSDDkoLPT3gbRX8xwczranHSeMHBkoAX6RkTXEVA",
  "key37": "4AD3PqVbTDErXvqMcb73VJA7Z3CZFMCDjxTKuvxyNVXwJ3hpgZLaJUBQECkLKPGJQn1taXCRd45SQF5Ng9FW1bon",
  "key38": "38X38JS6mTuKX6KyeKESaBkHLExURTu3TZXv1zgMWo4PEcCTPWGqVLKbR9GViAEiH4GnfpA1PnMEA1XsWyJC4HQn"
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
