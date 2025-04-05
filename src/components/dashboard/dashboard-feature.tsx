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
    "2wZ8GvZ4DAQqaq2XZjVbV72TGuryjY1f6LFMREARqoXRpd7CHEaRvfuCRC45zpmwWcxhYDard3Z3NRp6rGYSdeQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tt4Pn6KaVjVpyz7U5LuwMYt8Bq85qaMP4ytFFrajivSiCfyVidgPSCjXc3LMYmy3pwT1zERVawNmREos3UsKy8D",
  "key1": "44CxrNtQMGo4mnmzbrJLjjnstCXDs5dGVx2A7D8pjocuePu5tcmi9fjLhzinLPXizFVgXkru8xwwfEqvU1G9h82c",
  "key2": "3e6Y9qGu5tHaL9occdfS1ovzC54LZGchzaSS6xpUPncrwwvrdeFLywz5EuLUXQQqYB3gkZGwKCxP47SpR4PccUZt",
  "key3": "jKou85fKGEu58nSE7nEEp8ou7hwZg5bJzV6PESeXz43CKAhHp8M7vbWYZ1zpxZGKPemAoWfoCuapGz8kft2bR23",
  "key4": "3eb6nkRhJ4xXk2Pux46JUA3aFTX3zp7v4WkH5jGGTQeL16uhH9tBw9Qm7Vc7w2BpS4tL5F3upspXyUXx6faboxdA",
  "key5": "5vKf3nbUFBeVZhVYCxDhDCM5e1B1nex6eG37PHvbhbiubXKC6SmdHr6EzqVCJg7p7XsSjTMYas8Y6zW7VMd89yvt",
  "key6": "3G386FtSHa3BnXeDkjiWuHvf7jq5dSS9ts7uWx4NdQM7k5SCpzK53RRCk6NwgqKEZiP2WtEyWgHMCvTrp6HBpnQs",
  "key7": "Xwyys7ycikJGVsB79h29xQZXfLmbtDJRY1ohwWGDE2c2xrDLBPCJUH6vzy65U7oxZ5bjYk6c5FTcgWB4TtmG4js",
  "key8": "4dE1XQKsjqFTfGyDD4iCz7QoUNZ3ViVdmntDDHBRVAcTv1PidkGTqg4ujA5gQmKHz9DFJ6U4ffnfmY9bhcukGoUV",
  "key9": "5JdDzLLfUnvsYaWQ4Hf942bFiP5MWFg8wEU7newQyD958zGStxV7jcfcJBuk8TBhG9eTf2pjcRjCiCbhL65drfdZ",
  "key10": "5ARJQhBZzjkzXoBy7rrsKyYzzJPkU2yEMdh8EBNyE9xTeFpGERK1bkLc8i9MrjvtQ6ufGptuP8mJawqEbFEEGzYG",
  "key11": "4JbzGhqhwCRViiAapv7tq5jFXVLYnWmXBcxhpKs9mFexsV5Ktd7dqSHv3U5nv2uMJtRpktZTh34vtUZhxr6iuE2S",
  "key12": "5YAMcXAG248Jkb6mahp1bbirJW1vHsrYb9NweR7qkimgMqW1tcVQpTzSHp3gBaJqXDUeH2ZCbU2LJorNcpyGjGC8",
  "key13": "267sCBatGdeBCTCnHkoMniKEkxq5gD76oqW6UukiS9MSLUNZSV7Qpd3GQzE7ypu2gc78kB5FykQLBGfAZQbYM8h3",
  "key14": "2p5u4iwi86g2nqxFfYPFKfh82H1Huju13oa53kibm6XJWffTEqwBMJ6X1hxWsWXoZrTcxuXck7GHEZpDkRRo7Kx5",
  "key15": "4vmATBjEWTasWiAxwmehoq76P8tXYCzP2uKge8LzVzq6UdgqxP4tQTcwW3HdrjzzKtMHZsZpjg7brxzRPoiazqu9",
  "key16": "36g8PpbnLSPXNJZL3JxL8pr1NLALS7xPyAntTtB3v1fmnUMmHpw41p4HvxYvdqXyyeGp9zoC4HtJzLpF85MXctbE",
  "key17": "6fCSE776kbJs8whE71W5xQXFgatEdwTmFQ92nspD1wqKgBfEKmPPHAPc5TQDsS4y6oYamNTwdKECzfjQ8hfXyHK",
  "key18": "2rvXMGk48FS8QZBvaNaB7syJ3po1zvX23zbGJZewn4KWFifkqTvpa7oZGKQ3JaPConztdTJUMUw4BkwqmRf4aFPz",
  "key19": "3rxEZhT9n6aeJiAyTr4zUCAeTr9eUsQdPAJ97mhkJcqKitdxmgpUjG1PhhYK34awrbgW9ixySyufdSruGEYETzMZ",
  "key20": "i2RVNjabKHEDDCYo582dq7SyQT7xEhA2t3wAMeMney5ZcNSWTGnVPh4HuVbYoNb6y6ZMeEuZk2m2FN9WoE67Qio",
  "key21": "6i5EpjUzH8e5AWVd8XywpX9cvbVTHa6cEGU75S9qpiyFetts9N5jxReEVXtQPRGwtdPbBMioXwHMp12J4caH5mr",
  "key22": "UA83HR66bzS4U9yAPTryYwHDwUfMvjdkSvYu5bv8aDTSruaJrN64B2U4moDSzKzpBaMHyzt8fgHuP36B4KDM2Vv",
  "key23": "3rJidqHiDvCEBQgtpp2SeRkhWuY4etdS9obrGKgwrSEK8QoLVYBdUDuQVPLEfjJxFzu5v9QEaUfuptA7SM68SbUk",
  "key24": "2DoB55K7rGMstD1tjpam522ztVmQHCxcR2ZCK9xzK8cbDiuFB2JJ8F9pqak7pvYzYg6Lu1qDUKNXK8cEkdxMeK7U",
  "key25": "4JREWj1e65p2dCuMDJcwg4UPwzWqx8uqbHqjh4qXZWasAhrFeBysSVaC5kPYjtvEuorTyd2a8h4S2rQhsFT1Umhd",
  "key26": "2ojVDjjq1ZhV6KjaqzByLrUHDmy5WGAPbkfW6vq2tZD8gYZp9vqmJH1HNKMr63GE6QuHqYm5ptuDv13MJtzhCBN5",
  "key27": "w5nCAZuXwcaRtAXPXQFyqD81UXXAPRrv5duN5NmMhujXybHMTVS6aRTHz9C9Jncom75xU1hbBirkzpiRcsknJc5",
  "key28": "2Yghjst1SwH5dQ72qo8qZpVUibDHerH6DX9acdb6eSHUQqA8PgHbKmLutiZg8oEPRPZ3wHAM7FMQq9cecGc9TdyM",
  "key29": "2h6BgWwXg2QcKLtL9YFk1WdiAS7PCNrArPB5VkMeXbsXQhzK9c2gG1kLuLLgQawGwcwqrCd2X28epGHJJQm1eFAd",
  "key30": "4rujSPXbEV24tTJpPVrvRBgLem8K7nEaaE8n1BWbn4gbPvuNPVC8Rn6CrN6BD6rN6buD2GgNFabvhFPeXzfkEt3h",
  "key31": "2gWHy97nUYsUiaPKrDpWRBsX7jYv4JZuZmQPR7rS7Hg23gtDVcpxfNt6FwCGmTyt8gmmvDaQK5y2pQeoaeNLZyiG",
  "key32": "4ECFcWZzTLKJfNZiAWweBwx2KuD4fQmDq7TPLHJuzBA2RJqfMr5QsJ72SKYwJFKrcKecFr6gKGHdCnahZqsUtk5V",
  "key33": "5ZAyJYpWQd8FQCDRTk1NjmAJ6wgR6xctedTdhQ3RZEhLdRuMJeeQQG9ZSQm6wANWqYJ1pypX4njde6ZtLf24J4aM",
  "key34": "5SnR2B2Uqt8URMduouD9BH4ff1yrdu8mQdskwWNdhHnq6kmECrbaNuFGQU7JoQT5Ww32QJKRf3a2PeGVjGi5SZJr",
  "key35": "4ACMSmV55UadEy2f4273sMZ4tBz2YZxZbnVVJ2QcXxTtdHt2nhg3MtHxozwA99ADgBVz9m6qt4R3PMXrX97Rxt6K",
  "key36": "4ojatojBkKrKvMebyh2rXgsgBEGbAmUeBZJvVMUPApQ8rSERXJiXFnfoZViqBXUUmyiCE2saPxcFBUUZaipFkfFA",
  "key37": "gMoVPGQCB1iAohEB9Yu7p4mPnjVkqeK2MSGSGPKpwv4LqAFk4NEeMJRuN9EZfV3FBf6Ckck1MALjMae9xYEECmx",
  "key38": "3roJpE9qAeKcFGpuiNWL51p8WQVR9MmKtjexx24JXrQtZtmrpJJrAikmUSkE7ZZ91nKUy87DUoKqhVuaQgcnMDBm",
  "key39": "5bs8Uuv6CbfKfRTAY1DJL2YsJUGyU4syGYUHH2uMnF5kFdMn13UW6sxXbThbgVJEz3qrbyM9wGv26KPvcw3jvJ8V",
  "key40": "4nANKJL5QEzPtMM7MmAfWXciBt9nFSSb8eGYkD8YbiCH1hjgj4Ca67rQHRugkCfHi9bNM52mYaP31QvPGBXiEfbX",
  "key41": "2WdeLD1kujCYKBUQEwJHFL9Lv182E4B4E1WAUEzAJQTWLQmQ8k1EmxxiAMaQEFo4D8RefUGdNcxv4XRTHunN99x8",
  "key42": "3U3oXw1Np8fF9pMLDkttKsjp2cvZR1pfP1uZQCeQydKSYfXiQEKzKgHTszgnY8sWQFzMJz6G8LHj7ggei8hMJ1pu",
  "key43": "66rWCbuxGYGcREhgEDT4f1NzeZ7kwUS9NJfuBMjrF8qfr1xMfJvHBqty7hoQ18bLmqUTqSM7KnsL6oPmaGvdCnfX",
  "key44": "5hgi9DQ7kj64gkB1QRStXdyDVXBEKwsn6LG8WF3uTGUZT9cqar64CqxUe2CMQGkWCaTn6A4o6HHcpLtmGaarHccN",
  "key45": "128oCSGH1SXgkDj3vH9btDe9JMZHgYxqQkGJutejYFw8e7BtVxNXr6yM6D4R9RCJ5SHKxopUNTYGkKfUvr6g5PdD",
  "key46": "4Cw3C67od3JXanpcz8PDrcbWHNSiSDdxvF8X3Ys89iDHWg5gHmVDLvhSLH7Kr96b49pj61zwDBedrmrHAWq1g1MG"
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
