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
    "33F2eXGT9KWwg8iaXD216KFp51Y7hScVUtVVGXR1jCDjCAWXMX4HB9VGS2EhJKw3KDZbaT8LqmHW13MDpM7gz8RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ADamvPoLu71qUvc2ufWvuv2bPjgQe35wpxRcCNqYggezE9G7N3zCxtg9kdZ3wqP5kfxXjurRgc6T5VPKH2SMc1i",
  "key1": "cnHLsw4f1diLA51KAQJCyMsDwWiss2c14chYXVNPBZcqd4AHR8b5ZjHPqnRAxjKrVQXgRCgXaqPigxGNRQctryh",
  "key2": "dEALiDP6m6LvsGWYkp3pwdN2dCkP2JnD9hV4UbjumD9H66RdCQNuReDXtq2u95fZzuXwNMfzxndsB6ivWKTcRa4",
  "key3": "bbCVrhUFwGc4SqzNKkwdZ6avXmU4JXALjZRddVF4fhDbWG9yu2EZPuxSz7wY2MNNgEP62V1yq5pD6SYN8u35g7o",
  "key4": "4DAo5zcKnQAEw62nwHCeNAY7CB9aUnJaqdiuZw96iK3WhwSB1xeNNCGnjKHLXmWufuvSMEYWZ94ETxAuq4WoP1jw",
  "key5": "3VPZZ8LSo5dhx85zY15m4bYM59j87twJfEJhskbEvKG8hnx2NJcHQj58hEqEnypurV9YRRGVC3qSdqx2vGbKS8E8",
  "key6": "5CgdZCDYCY3BNzcf6cYgLaCAafUbvxFxcgu79Tzw6FRYGBS2LzZSBJCszFik3vJmDwPyeVQuZKn3owyrqRPPJX8U",
  "key7": "4r7MUi9K5JGDG3ZL26KN2uvG2gWLDHxAqfHLiL42TDuAqULEYAP9bqfyaeoJRwBA5cRLRWz2rkp1fsfKVsoWErgT",
  "key8": "3g2U9mp2u5kq5GmmU5fKY6AdxMJVFDWTPgHsFmfpFQsMwXfX7eckNUQPv41yKjBvnKrjaeMiL96vQeHM9MM4CAWD",
  "key9": "DBvexzuvUUdSwrEcgDdPFQrAAWMLHzg3bENL4tSCUjfCVztA2nHPrZw14nQHChDuCFFv8W34u2sHNoMUZQAPLEw",
  "key10": "2gYieiUU23Q7ckYmRPnJPizSvp4fJuz289dd1zayr1joexhZ2G9CDM1cg7Jh49Kp9JbW77xwxb3nCf2hUATSVvVa",
  "key11": "2eWxjQenYxTa4GCmXZHgpMgNKGaLWSSS5WGW5XBfFS9JJxoZykS3Q21m6GXyQuE7HK2VSMujf9Uj3SeXsFumdYg1",
  "key12": "ZA9Y7wxbo7YiB2XJVYGLTYffTbPWFHMQiUyMa659PqQ6cCeA1B2tiAoxAYJCCx9AEJWzgZw6YzLZfn9qGmfkvL8",
  "key13": "9qZ2fkt7iLAwjTU486Fm8stPJx3G228VdVfDdWiS9hVNh96XFGUoT2xAmReW3DN6D7UsffWR3Taq9FkTMeVVrck",
  "key14": "32WFbVEf9ZjK86caESnhgfxNLMW4NHUctEAAG1hd3FDXLWCAC3Pk6FXP9KW1XUhmQeRTR3muojYfP5C7HQJyHHRG",
  "key15": "5z6HsGf8kqtB3W55EGJVtnnPwjbC2XMAXgtjM3QFUPUyt8KakQ7rMJSCxjq93koKxHRm2ZoNw4apEDfevzFMHDc2",
  "key16": "bFAWxftTdBDp4dJwhNtoRFSPTPuYW3TAT9GMufTTsfjmZy69rFUXq2Qr8Uj2Pf2cETfVk8L9NJXmGosdzQCvQCr",
  "key17": "4QhmTcXD2UwWC9dekJuv9ek4kQaKX2wXeraYfnaQsHuAy1LqHDJ5t7H8eyEaFm4cip4JPazBHmpfCKNaDTPysr3o",
  "key18": "4rLDX69AeiiWHTa9zDJsuxNVbfyakte9X5hfx8hUaJ7u7rrzuBbLdVukPttPJKdgkAp25gQ5GMacN2LzDFn83sLZ",
  "key19": "511XapnAxqdRYwaoc7kkYka7PGBs2XxPUPp46YwZ1BgMTpN9LQLLTLaswHNkd5EiLtj7rmvEQyjP2M82R9ene8JB",
  "key20": "63kZUP3Ndk8pSSbRCAsP4LmM6n1eySjL97J5JdYpMUQ5j5FFVNimoWr35E6xYFXbN2xSvwfBvRtB3WnpEQaGYRo",
  "key21": "3y6xS139c5N9E5GQdfPeUf1q4aery9HcGaP6ZxuJfyBRiAywFWKFnXDe79PBrDBmxRJxzPHFJDAL8t5BHrZqv3jj",
  "key22": "4G76n78roXE7QKn3ShR1a8p7W5j9JWSRq44YoftCo18PaatyDswagthB9t9L2acoFWyHN9b9zPRBfESwDgy8Dezi",
  "key23": "3sWbwjjQa89Q9pq4qHAcA822McXfkojNxxQT1VkCcbTNj6ojbAXLZ8EbHVQrJh3z1CAm37R1PBX5V9Ze6Z31djxm",
  "key24": "aU4timmzS5ETSEvYR1exvuE2hU5PccqUdSPHDUmQx3tuDHMWGWCZiuna1PCneVdcC1B8XhmVZCJJ9WpSUp4biGW",
  "key25": "39KTeX5Wx6b1iky6oQdCXPysxSCgJqxVGXcEHivJkbWs8ztBpEXvCE6FR4proWhVEw8mpvmuF1gD6sMvNQUeNcx3",
  "key26": "2zxf7xAhQwBbjEPXykCuyibP73FfNqzCRunbPRdK1fyNKyGmqdd5WKfPp2TpZqvQjVXWcwkPbxs5dtQN9ppjMpuj",
  "key27": "HbDNpXCwf78cCF2EbWUF1zQxuaDZnsVr48PkUQWkhMQurbk3wPu1QpVP4ck855HaMoosiURPt5Q3MeekrR4BfRs",
  "key28": "2GaEfaCcyppmbsSybe8TE3j1iy3BFtmcJbTypBakCTVu1LusWZEAHt8wBL3FQZvSJWqv2acnZqKUBo5SwdioR1Sf",
  "key29": "5yLGjjLUisGGYqfzNzmDcXL98apixUcnjeRgyKz7ZuNvx3bNm61xtAPsTBGWZPzy4e5ScWPJoMH32q6dJ7EtEpZf",
  "key30": "GGFSJWzbYy9gsitx7Woqtf35rQkpgv4SLdEL9faSu7UuXwDRwjoYeAT1B9baxzW6oWF2BMGC69PruBRuqPZCmm5",
  "key31": "55DQ1fbcRYpVzLrf4cCWzZupKVsM34nR8VH2RN3BEYgbf8VazrS7nUYdiLtUhgPg1uw4o6Ds2TGREKxRkALYi2gd",
  "key32": "5833gT6dxRZtGyU95QUHQetpKETAYYvJuNeadqUd9o68oFErXixUsRrpTnVziJ2oVHfYrAh8LA3umSSheQDKyzBZ",
  "key33": "FjTkkViN9L6puLSzq3b2yj4ByCJu4bxfThFJffEX3XbE2GkgSaBhamrQKzXE7kPLeeLR6AvdenE7nhZc6WU27ix"
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
