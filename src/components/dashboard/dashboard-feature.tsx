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
    "5qLoCLzTxFpYMqZQsBTpqefakL4kZtzBC8tr2v42FDLMNAWZvQcVqG1GLjkHPHY6vnXRXuRLYptcPpFVa7CY32uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqyYg24CRLZSAbMsNk58CvwFgVCAn9LVTfEXsMjGZDhowxz4Fbyx6LVxnYJUwa7FPwt1Yw9yMEDmbA46BVAnT5z",
  "key1": "4mBW2MYf4MAn2yDSrZtVzUsno3mZR5NrKGZCBfcV6CPVGCThFGnS1zPb5mxBshPnj24A9czSPVDC8Fw7BS4QTWeV",
  "key2": "5ADNjMSrsTSidGr7rnWGNdjUPiD9znVX6UPCk5fQesL6nty69jzSnLJ6o7MPuyvUaYwvqGKhN1QjXa9uYHSy6U5R",
  "key3": "5a5qqze5rT5KmDYkidT1k9G89xtFbsH5Z2EwCfaxen7dmvtpX2YMgSHUYmJ7DVNx5y1cwqdEfAS7mheekXdQsfQX",
  "key4": "3pdDgyfxqPiHg2DrQW34kJdm7UNHMkb9mB3r5jCWS5xXWb2VJRbqLuJQuVSUW8gJgfDxmP1mCNdqewth3DW6cxVt",
  "key5": "b8JE9cQEe6Q2SPTZHm6eZkdVpLSwhS6SJ3mtv5md89hPFNyA6dSNiVyRmQGSE7MS4SAUu2AVm4KFvRKitgUTciX",
  "key6": "jsZSp4Jt1v5Fo47mPaywbu71mada3VMBEoJYxN3Bzo2VBo64WDnNALakEwReAmzxPnwoBHXSXETikt9vS2PeTZ8",
  "key7": "2AhXrHU6qeKtQSpExXMkucQeh7G6kEe2u3h1fBTriuq6kSJcxyfvr9r9Gxqu54wAMMs9PFiR3GrrgKynB4nWzTRo",
  "key8": "8Ao1L6ungcSUwKwG9xxUpHRx9HVdPf5j7DzizCdeG2NKB3kQnk9pUEZY1vEswhvPEgiUHSwpH2phYS8rNvZVAaU",
  "key9": "4R43jBr48wLGph5zWscGkcHxtmvN1WVkLT6r8ZiJSkSBXrDksLPDgVgCVrka53q12Mnrj5xRgTmAExWaZatDau5K",
  "key10": "cvXcFnCVxLWoKt2nuDjk9He2qsJARCNnNid4dUXC3HaWu9cRaVQT8UvTqE8p46JaSL6byrQjgNW6VRUQFRQQ7mk",
  "key11": "56QUzxtpPnkez8pPYmNu9oAo3VLgGTBx5BjN7U4DBHGcQYhNofiSPcwhe6irBFg7KkWAqPq7yDQSs8Vy4EgZJxF8",
  "key12": "5Dc9LN6i9CuxJbupHrxxw9iLqArfKYJ2EvjDgCyJgoPSLUFk1TvtAxMbAFd37Jw1m9xVxxyFJAFezvoxBFPagMQf",
  "key13": "5G4aptqh8hWEUPaRjjLsXGyBxg6NbGpWQYSY7CZixAf3twqnA9A1BwaMjdmBpHzibEphsvNhAGA5minthLZ2B2fD",
  "key14": "4MZT7Njbi8QDCCLfxauHkLwn2FiFKM4AaFRs3QHv9eCKDnTE9XdXCQ348FbBdscBhTwVmVNxsAfsSpwqg7BbMfjH",
  "key15": "35vJDkCq56xkbjja1X7W1Fd9A5cxnAJDKuNDgeYHHfYjMsA16QcyWer8ZpAY43KZg7rpnar7NqFL2JCzqY43timY",
  "key16": "GZVrLwDCt1HGgt2uhuAsmD6cyKdpxfCSbo7DHR5fmTZjbF7x5zeuX94imo85KwqpRMwthdYMc2qsdwyabUGm9b4",
  "key17": "2n7HfkGQg7qMbozZUaYWpHZRabkphCZwHP8HoCpeTTg9jiQL2zuj9LbvaHzAVEpXiktbFgR2uuveHrppp9EpUvn8",
  "key18": "4BoNUwCCx5xcr9wcBaaNWdkzeMdDLycoEKfYv6aqdqba8d13ajYSLn1MQJWjnBjaDtmaaBgKzWjyihKZDx3w49Nn",
  "key19": "5kRkGYZSqmRShVsg5CnqZUgHPeQeNPKA2o5RNrerRZQTYPTKekMYpzjSZtCGNqVUG9enVjRSo7Rn7UAgjdLq4n57",
  "key20": "4geeWzLqzs4zQXyF4JAcJuW5TK9fGz6TTgQofu8fr3H6gidqymLgZMwgt6AzQYpAz278NmzcetA9vGwqBVh7kQ1n",
  "key21": "4XxgtRyejntfVw3hZugCF3cB1ZsqpYzBhUHAj5DEm7xnPCBL2HT4SU4ujMn6TckQRvacFnxcCgKwUd6xvnjLWu25",
  "key22": "3cjiuFvPbzFcuDKpSfBfrKANNzB1ha8KphCm3QMM1fXzw9LrgqdQCyTamuxXDvo1EU1vzh2bVA3AAjsESEHmzjmT",
  "key23": "2DaEwjHVpWfybcfEXw95tZkK38Nz41eZtWafQUe35g1nZxk7LLxW16gb1UbYAJVYrF7m6ps7d1KfPTHkBGtvzwJm",
  "key24": "G8UdC2o5phpGuxSeKdThCJhTURGLovKcCEsGssuUmfpA4cEgnBom1KDGYjeLYHkoDJqBDYbqmUngtm7VkPNYWFH",
  "key25": "3UFNX7itwyaRQ9vPRSJeYru3bCk2n4RcpyqjcdZShYbeNKGvJZpztWFuRMzcEzBRkVoLQZuhSYxPemD2f53maEhn",
  "key26": "5MEubLgDQhEBsB9gepmVnsiR1RtJh59oUS4oc5dSnZJdX5Mv9KzKGip5f7VtnKxTcTJpg2vDXULbFrEQ7QqTbPUK",
  "key27": "59ygj8SJLux2c2AFPDfSUywVryRpVZqxxwmf7zoaDZXSFM1zTDrLTBLkJmNBYUf6iGEUKWm2zwBJHEBDsMxWMhvG",
  "key28": "67QWUeyYphRDeshPEpCEGuHngNSvG8CGqWZGX9792LQ1i4zWh24pCy92uk31R52ArqbXnXmWzvnb9fs5DK2egG1T",
  "key29": "wLdKLKEXYq64LjKj4vy2YHazsEM51rRoZNGRCyVL9xeL7nUXsqzMu1TpTJJ8gmR6CfV6G3pKYAhqomjtd9kUs7g",
  "key30": "xGsw6zd8f7jhCRPnhpzRnMU5dNEC758rt3rvQNA1sRPvXzqrDPWjPAPjzcyGHRDbRQS8MHCAC5nHMYxj5VwVh73",
  "key31": "5bakjoidB37et7nXXiCQQ1zq7ppEXrV2bswetzpswuxo3DGwBdZmRH9kpHfRbEphjPjSgZU5HXPBq9E8KytxbDAW",
  "key32": "4Vod1oMYp37WhZ9DnabJkV1ejhEYfuLeSuRVQeMjaRQe2wN553a5KGvqmHyu2faTwVWNLpFmNqW2CXFvErddKUg9",
  "key33": "5ucmY6LrLFVPbVtsiDjw1qKUvprJ3gVXNJHBKsgJtF7aGaade2fF5Pr6yeuwhAnJfRvanzozQSfamGpQs5Cnji7W",
  "key34": "3iwbuB7iPGgSc6PMjKdKs3MLcQkBKS9F92zYZumVS5TWCsrUQv1Bo9U9fXTDKBgUAmW6uqab8mUQhqb7zzG4tocq",
  "key35": "wJQE4iJZSbrbjxJpmh1KhmD9ftsXkLreo4EaVJqq8QGQFicHRYeffANAUm5z481H8FhWPTPajBWaXyfbGJdQELc",
  "key36": "4dmZntEWY2v6D56WBWjVd1kLpETo3PiNYagm3Yy1iuXArGgp8YJTEzR24h3JxFeHCS8Sm7YznqFfVj1vJogtnATi",
  "key37": "Abw2PaJDDJrrqLNjDibPYFdP3fJ8uMTgNyVj1RmFjRGE35hkMhXATZZrpXVHjzG9vCovnQMcdwZdUTkADgk7srN",
  "key38": "4TzJDDyrJ4epqrGs5Zqw9d6sfjedpdFooaahdMKZf5i4eL2fBd2zkCXqAJATRDUqUGangZs9TZWGCMBNyfcZf4Ek",
  "key39": "4FfU825SZFfoDbMGauonyGWrkZTCCD394En7MWpt1dq8HPfC6dj556Xoaeg3B9bgesMEAPw3GyeKTY24Ym8w1ETh",
  "key40": "3RP54AJ8AoMKrSUs4FErji6Uz6DUBxG4QSEnmxFpkW4eEtejBhW5jN7Nid3nX7QHexHksKiHrvC9M38SXfo13weG"
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
