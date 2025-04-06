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
    "31wJ8FNxSkqydik714P5wkWWqeQpF5yJDQff3noRaUhNCUbUjxE8eUFsKgdCLvjLaSyw5MR6ThwzGsw6q2sm9RBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "414DMaBo3zaQRWTRraXq2EmrBStCQvcgkchoBeNWWDW8gpyeYP4tN7yopaGmWY87eFsxHcrrt58BnLSf9YDNjfky",
  "key1": "5Q67vuDJYeu7Rr9TvaU9sCiouoVcq68SVuSMrJHBMMhAvWZi6c6mYCUfRmbgepac3D68qqyJQT1SzUZmwyEdgu89",
  "key2": "2uN1vVX7pgAp6sHzY5peU3EB4s3JjtHiVbrNCBFo1AKo4q1LFJ5nMKAKQnbe53zfAYoJ7H34r8mtMgNEdgos9fDg",
  "key3": "24yKgR7yFHLGmP9TqMcuuyr6WvFbN5DdgQ96gCpEgUX42FvsiSjC3iAXb54uDwtsf9fiiafhSNLKseLPS5MoqeA2",
  "key4": "2DJo7jrFB6GYikbrWLc8pNWMMSYjEPDrp2W5JHoSsPvnbY7B6jgLBsKnubUcFseDC6TTDA1qkfQCYPu5NkdrfDM3",
  "key5": "4T6nYA9tFtfwoEw2atSQWjZzJ8NvJgFxVoqw3rCY6t8pZQifGvAxHkLKwoziJ3evd1fSy8o3pJocV63WNfCgTAow",
  "key6": "4cfUQQtsrRvg6p6k2fyvNQ9F4F8VehEJRTPYbLwj2Mtot3hS3tV4WW6qP7AhnPmwDPnkftfCHBc8ET27yZZRqTDm",
  "key7": "nXWyf4ehQL1pSagZtBwDKC6Akcn96jALu2g4nRigjgpB4SUnqLSsY4oYi5LZ6DjsgHQYhwnSZTPxduPahD6JcoA",
  "key8": "35wyjGVZhTeUxsfPRrrvmxHkru4zLVoyK7z4wfz9pQErXsoQHuoF7nMzW4rgPZP3mzjauby6DTFh8xJMfubu2afF",
  "key9": "od7gfx7oTVEpF4jzPWzBTMm8N7gCUErGoEY3RQsBf9sdJMJJrguJ7mj99PvoXPXho8kTvtQEYDsHfE2TVXp63Zt",
  "key10": "2Mbifo6wFF7drNFM2YuMttQiDfFu461MihojTQuM3S17S48eH5xM4S43Thdn6GxG6mGKheYKTqkF2ZvCxyjKem9S",
  "key11": "xycuB4efPKpwqb287TTAZgJTnn6K65xsq3AZR2HLrJqyHRGSbyKkBzBAMeLdZXs1dEBDemzVwT4ycx2H3Liduxs",
  "key12": "2Gg27uyN9v8rbRPZUKZ8AWBAiuxKmqoXUgaG3uYmqPGBeKuzWxPX5Fhy6DR8gkY8YxfZ7kjZT7wAY61bExuP8tRi",
  "key13": "2LtrYAjotcLzE7uehRubBW5rw7GQbFPYTryCQeb3z3pDj5NWBEqUsa7BvWfBWxdxwpuo2VBksTjgQndbkuvPW3zb",
  "key14": "5XWEWFtgzsDmDLGzsQBh7pZDHtDKqskgH1qv9sSJFNAiKYjT26mrjtCSryZ64LU4zyTMVEPsToUN5juisCatQ3og",
  "key15": "4qLEEio1dk422FdKX6h4C51rBFYnRiMCVFq6TnvpxxX95RpWZLM97kJeFveXjGpaBrGmjmS88qQ2gkTd637zFjPM",
  "key16": "3deHuZ84ghWHDUAoaXgT4vUBSwWejPdja8DWzfuhRvL4SAMMLSTh4nAxUr5rL2bQ2zA9ZteVBM7d23cdB7ZRL1T7",
  "key17": "5hvPqYH2WgZGsm7LNdHxWJN1jthhYVj168iAuKKwQhB7dj1RrogVhAYa3AqnafkRUzsFhuGdX6ieJxoWhroQ2tYx",
  "key18": "5cLT69AsrkFayu51D8XFx5Zrvh8Q8qcMv3k4i3gaz5tuyNLdM3fXBfEaFRCzxMB2mMUfuRe75QtNMaMmRyP6pJbH",
  "key19": "4WKFzHU2s31dRjMTaRh74E5AU8oHPU749LX6Wg4LYcDeSvW6qL2jWzejETs3mzdG6vqozhj6YVsKbXoKRZxczNjb",
  "key20": "qyqagvf2nCF6j75cVKDCh2EPwy1vyzmJrV5AGFg8yJCRjG4XDfLF8XtBjbTcciKUxCn2dWsG5REcxp2CjC9Ly9F",
  "key21": "2mphexSv9CHzL5acB2sYqfsHEvoNx9aduUtWW9QZThtJBxQgHahpZwbB4f7jdPVBnVEnwjDEqzATYZxxLt42ohwb",
  "key22": "3rGmYYsAQn4FnRDmcHkuqKWWhdRqcyMfTrXXbv72hm1BwKCYBYd5Hf3jnXBb9D94JyArRZLjZNpr9DgnXsL9QovT",
  "key23": "5SqxesNXMWWhXhwG9NG52NQq9cvBWBobhupmW2zJuvThB7NzNTF9NF4n4twZNdT6fuUzd9ymdUZeith7Z6YtiqS3",
  "key24": "26BYFLoDjnHDoEtaowZU9YpBfiAhgNMvRroaGcohu5qQ2VFLbXafZtYG1YNGUswYoDUmURcAgpJzpRWUbD1KHFRX",
  "key25": "55dCpVUDjRa9M7WGdbaTX7Bs9m3nsgn7GmMxL2ApCNrcCWB4Qs6tMbREJigAf6XqJ29i9vc2ykoxoFg4yNx2v4m6",
  "key26": "2ya4SygNewadHJFWeK2k4qZNSurefydnNWDCuA1vBj6ms1xaaGVYCkvLMp4TozrwNmH2YwsjatbYXQx8g3iSsabd",
  "key27": "5GLd2uS8zamukCh5HWcqxNLAUAi1ijoLLd9unAAgTJnVbtMxUMbiTk8fdJXTyWEGToUzfenjCACu62vZftPeu8ZV",
  "key28": "yEpGupscBFZp9CQP447QHSnjsD2mJYwaB6VE46qJJkpTWMXLpUSgytVkr27gnCQ7wcZg6WxWKusqZHfEhh4CaUC",
  "key29": "Rt7SXux9hM2RzgBEZeWriLLpu9Mx6SY9KnfTSEfrPgV4Ruz7KDiVVrTgc123yNCa74W2qywqNRHQWEZHB992ruh",
  "key30": "625rryNQx7uYmx1RSAfHcvtwCEuTjfFvubTBCvCbAYVS6BE67QKLFsxSvUEYkJTG3Tx9hnycmVefE8YvfNnqL3Y5",
  "key31": "L1jtUMUZ7nCU88pSRcjP3uvYDixsqWXGkFVnCXnR4zXekAvAooCu5etvQp2bgjz7vt6yavpWEQNriDiNiofZtSi",
  "key32": "2mJR585AUW7D6uDgvjqrhSHpr63N7myekQwTRL9X1TUmcrAp41HDzkEvn5VtaQ1CNRj6pc3FGfskZLdDuVJwPBLh",
  "key33": "5cWPRwdaLzunfQ5uqV29SqcAoc3ATXTYoSnUN2piTNFykzjYumov5WDLANNW7BVxNwVCW5YmjPqZ5kRRVjQqv6oo",
  "key34": "4HfaM6TXSwbXLsxtHw3ba2CoiTozbxDWpQrLKgHRt2tGoqhiBumhtUw3ukRbTPsScMWdJK9ca9vBvcvKjYUtCthm",
  "key35": "VKGbXsfeToJ3QcEna4qJPy8y7vY6VpXwQuXTCDH9Gpp9Cya2SitC3ztp9ubBPzJAwSKGnc9mp254483noPdHN6P",
  "key36": "5LeFyTjhQU42CJxxu3nqYXHFT5bXDoAGAyPeyG7ooFtPqro4LM2mSnMAL4QiVyunEHz12DiYiYobg3Bo8woSpv6L",
  "key37": "3aciXUiLsiHbqLgiEuwRGD5offq3cBW6zdYKif3WiHXDVTaGUvhMHnd7tRSV35a6Da2rcM7DHh3gxDAAziy8qfMJ",
  "key38": "2rptgNxQDEVZjyQsoHLMhd7sBiNzEhV9aZKNWDN6xdbPdaP7NwFnJPoxrzaEEXhN3SeD5BEJTD6R9CBdUJT3WTGf",
  "key39": "4g8SvJaqou2YssaB1C3AQmAAJt46QR6SfuZ8m5FnAJS6ZEsm23jwnDwEbtgN9hJPYHDaPqwtqBnjG5KuR8mzY788",
  "key40": "VrsvZThxa6pZtqcnMUYJeGp5N1dUQUmb6nX4ft8hzUG2EqoUq9uM3uoMUyMwqX9BAGRNFxhSJ9aChSagDdbMSxs",
  "key41": "2vw2fzf8zarwngYv8xpK34u8efDL6BJxGJP7tC9MRyAq4uSHZAqgpajJZHUNeW8DJNtc84p7kBEuTPa3gqrHoqPZ",
  "key42": "3L9e5453brtTsddsjEpoeVxYqG5vpj4HF9nUEkWjWWZJiqY1nCya8QNFEQFoTUFBV7b2drD8Y5gE3FxiN553DX5Z",
  "key43": "2bzmAtJfXN243mWo2ATGzVadecrhBmav5JtHXAt5KKgQK1TRGShQFi7tw2CdBFN8UNhoHPaiVsdHmpwHCxT7wa1m"
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
