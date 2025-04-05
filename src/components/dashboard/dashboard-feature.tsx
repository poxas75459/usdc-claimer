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
    "2L9TJKnfy1upezbTA3oB2q7ChizSfJ5qJAaSfn39XUMZrNy9rpq3Vp9FUJjQxuv16BUphpUci9VSK36L2JfSpB4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dF2pa388PB6VQN9LQ8xpvdzCn8C5CpDjASCZh3dR1npDiAU9NtdaZyGAm9oXpCe7yHejJpZwWG6Tkyh7gCPnTwJ",
  "key1": "3ujcnY98MVPRqAVZgdpBPmWnfsETN2ce4jgkP35QvWhLR8yvXjzbqgp8QSBt2Hni9NaGPrMoNgf5hbGRshbK9Ft5",
  "key2": "5EvmNmjfgDCqABdLgXo6pCwZkQfseG8tmJ7HZUgpzBjWF3kgqUT5CWDV9yFEYRbs8jaC2a4yAZxaZHfYvgWTBbPx",
  "key3": "4DDcH3dU8FXcBz3NNqQrwzmV5swCD8Xrus92akg6cUuZpoLVNx5Jsc5iaDxrL7q2onxXJUESx71bWSgnUTcVUvdF",
  "key4": "45u41871JxJEMEcgcNhB2y7FA2ZKkRWWLTFyWAPpnDnWjAVA7DYPaRJnDhieFVsR29KsjGydvgHaFcYV32oeZuor",
  "key5": "3RJHus1KQoBa89vbUrWKGjwE1crdxYqYCWFdDHGYPx5Rt6CE8ro5pXWourW1QcktDpK5jcue4uacprh91Y4tFcZt",
  "key6": "3647NATrwGRCkVQNvVq1Am9eyYMn5rp3aMNoJAuuvt4rGeX5kW18GZcNaHAxoarxgg1FLSSruVDdcBjptGnFe95Z",
  "key7": "4DARfibb4bUjj8GQjuhQ9YKZQm85Dh8tnETmKmETqsVW8NgLNqZYrHGyJWHdd1nWxfbXNMc5LCnuNRH465dCAvFf",
  "key8": "8usceLtYztPoSZr4hizoo8hSV55Tey11i7GzW1y9w7pprygEP9M4zkyLKZdgGUZZTgBREQ1korSJs12ZJ1VDtpH",
  "key9": "hEgwbwCZEG7yuPZVRSdHjWqmCAMQGSxMvjm2vr9j6mZ5Qy8CxzaLAFrb8DsHtHQpuqfLaVHQSUzEvt6fGoE48iB",
  "key10": "3uP6s2GoB5zNHeiPwx1q4U8Hhu7KwuwtV3b3tr9XyrhDSeU1yCYMAMMX2fT7NDwRpmUtNRTU9eeupjSbgGJxfcHd",
  "key11": "2C33tPPZM7mbnMMf7xJ91iCLhzJdPaMwiQMb4XyYHibWiQnwcdGoGgF3Ckn2cVfmvRoDACjsvsmWyQeiGQLqMZcD",
  "key12": "4qrNYD6wyP5mMnDdPriwV3YrsygZq89Ur8oDs9Dno3m54shjD2gLEj61xTxC1niJKWNMicMQqPNNKQbK1T7KRJKD",
  "key13": "5jY9GkfBDn5yQfn3LhpatTBUv85v5NSfDknSZzcgA6kAVyqitVsK5UPqgHS7wUkdT8fex56tAyP2aDqmgGenSv83",
  "key14": "3UNJbi6picuvrKmufviCdiSiffVv3t8DBYFfEyCks4hY5dAAjcVndLA2DposyxW4NaP3FmVmRnbd5GQLCgKJzXeP",
  "key15": "5y7Q8LN6JeCfJanZcakExZB6C6a72EjN5mPUGK6HdaKijafzT7z8DTafdKfB3wiDMPH2n5yWpFTujucxbFpEPxjk",
  "key16": "3iTrAZfaKbzC3MkkcmucAW2je4sd4dZCfwLGnwAsgJxrDbYZSbCGWsQxAzk3nooQFU1vBULX6pzTXqBVbdnmDsTy",
  "key17": "motLJ9LSFDNLYLfdLqm4DLr8hSMpaf5ng8G8M1kmjhb6pivRUcYqTPW6ZtApdKWLQEEtcozu9RtBBefGYoKjGai",
  "key18": "4o8T56fUqwwCQPkNLPfvH1fW9MdoUXrNLb9HQifQ6egJtntVsS4N9bXjKWgoVLoYT7B6FpvTgTYiiSrXqXVESyjf",
  "key19": "3Sdfu88yL6XypgartGh1n5mok6SyYb5RYTMMEJUCaXmSToa4VppN1B1MQ4jhsPh338arLg2YdYTbxLwK5X6Eopqo",
  "key20": "29owVeQ2YSRp1cvzZRvegVFXYiyxCC49539cPEnJSLcZ38vJbtxszxAZRhr7fiXvzmgkR6mTZHF6yNdcshvMq4AP",
  "key21": "4MWAtLkfBf6vJBq4LftfNTVA5DyjV9RBn6U8FDpW1GiNvaoQPonVDSjhoqAyeDpS14RLMiShszccCwAhKbxhHeZL",
  "key22": "2z7QXRwuWRR8D8gpWXDRnhe3XJXTtbW5HBup7i3nftB1jHn7M6hvSJay9YohBni6YUvtHirtjtREJG3222UDqnje",
  "key23": "2WDAAhmndygqtTdPn6h5kfXvwA8Fmpa1vLCyrYbvyzmc5woqTanNArLiQXjq6bVT6S8mk4sikgk56Z6iCDhfRzJw",
  "key24": "FGhTwQq3h2qxVZYETS6ZUv3m6u7ABDniXV75ViGSwK5BDXdqjybQu9zTZYkig2vCpRCKEdejRStnMbhNdXRnYLy",
  "key25": "2fwpYWy5JbZHtrtUaxmbtTvydtVQdsbDAo286L6MyXJcA7bqHm8RJd9iMfb4PwxetGvDhMFFGHrsRoxRAezRhAjr",
  "key26": "54VF2UzgKxet9SgEov1xPp8fR2N2MACLUFbPpQfTLwJKsnCVM64cvZodYVLBWd7fjBKUWkCaCfnHvE1nCDKWgdFb",
  "key27": "2nZWJFk2ibJR4XRroAJdUfMjzTVV6GZZddvbmnATXzzJGavaTs9W9HSUWwDSwJurFr7aXqSRg4PJsZx1GQL2VSCq",
  "key28": "35EjRPDg9pggLsmzLUECfqP5WmUJV7Gkergrpo6maMsabNDJurjz1vyuL6gN6jqM8Cxv7G72486tqF87H5XjEgKe",
  "key29": "3pbEXHwPgwJ3mrFLDhk8u9kRigqAmJz5ugp5QM5xdTrBXM9zoEjALc2vfdAgtwoyvStdSqA2cvgbsydDC29ai4oQ",
  "key30": "5Zx599SrusKHKD4C53UhBas4T764Ec2hGvoS3enFEsroTXRXh6f4D1AzJzwn5TfHo8MH9CU54ej91FwD5UongTfH",
  "key31": "peFv7QAtj2BAGtDyVvjxYH2BdWnpK43NCrNjrtRMnk5FQ1rxfSwPsbqoDFPbtKoEZ7wQxYDdpgrcMWYGHX4SyFV",
  "key32": "4PNfEZLmXjoqq1VKWBDe7eU9MwZEUhk18jXH2xzMSmVaGGqHNXWAy54h3TaaT4vkrgRSDCaUmuxQmybuXsotFuNe",
  "key33": "53HGFzCstoq5vbceEbC9D6DLvGCuoPKDGdPakhFcPdFi1TN6nRjNKPHourF9HGoTMo9i5d1Lk5LNrQ1n64DU1nwp",
  "key34": "4c8ssrjHy6Cjtutzb8r2HX7FoECMtigrrL5nLWoW7ECfwsRzWoSooSnu4jUTZyUTVcuzQ8Fb7SdWtbYaT69P9gLd",
  "key35": "53t1tn8xnszmsESqMfAr5Y4MC6ijbW8fWWPcyBnVi73zwcd2c8rPR6HLpwTAiDcCvYcExjwbuaE11ec619vcPBZ6",
  "key36": "4mdYf8M4eCzWp7mMVNU3SaUddfeA1BWr8sxX5gQ1bgV4w21vWKXoXyS6MVu4JZTbWAKGofesaDKnAeQMj7W7nGef",
  "key37": "64XfJf1QZMq9bxzLCbSBivN7EmvRCocwR9Uf7hYZHXmwGc13LYFBZsDVYV7bgXNRvduLadeegYW6C9prCfvZuoS3",
  "key38": "5Y8PWgsL3CekihAEZRcv8iaKy2UfaGMzfjYATvsjQGYvZSE1T4mzpRWkBxoPPBDBdXWcqLbRYA1FuSLxMLC7qUid"
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
