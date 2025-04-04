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
    "67CSgWf3FZ5ZwNLr7aG4iDsd22DyFPVTFZ1nNCfD4kfr6VQMWdJ7U27ADffncmkdZnkEPTUf8VdMXYVNFYSnXzCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNi1HHVuD3g3FNqBgtYrA9ngSqq3tf7wfip7zvaBypCMct8a2V96UMJtNm2tjG7W6NRQ3T33dcZnCxuGHMtC3F9",
  "key1": "4jAFpDHgbremiQMDt9ai5zvkUN6aoTg7bQGQtU6TrLCURFb1uEsrNeHBmego4k5koDjJdse1JHohBthN4dCPdUht",
  "key2": "34xL4NDvmgATziFkqXV4HhMY34EzrgWFT5uh5ifgnAzthuBG6tQc4eEGZouioXQxcPZZRSoPGssJGL1emQSr67mn",
  "key3": "2zxYV9kSxGWkCP5i52JXyGRVmFZHXpbqn5Frm5bscebH6wtqNcKnFL9CR3JaXnrtiJhB6fnGHYHYGxcrUfWzRSir",
  "key4": "3chBiu8PSb2XNPntW1WX8Qv6PgQKkfPYRhkqGm4SRzpc3J9CraMXjCah4pvZBzBWsyvbm2MRpUuRLd5A2SBDqn34",
  "key5": "3DRH8U8vyaHzxHDMD6JKXSD7d9yubZkj4jm34NApHm9gQ6UtqkovdLS4VLqYSuyKZXKHJhQ46HMnynTmpzRfKUPA",
  "key6": "28bU2vUqwvLLJri9D5P7iTZwJbv8KW2ukRLUT3r2wbhMs3jbvJHmJaxrpFoFGwgAGd1cmYJXggrFS5dn9ayzWDF4",
  "key7": "MTgii7AaipnFbkyU6zcjPsb3w2tx9FUhZmMNqabNXWQLummc8wC8XbJtbFRY7ZwxKdyKS9UV8zf6phWjpY2zzmH",
  "key8": "2muG67mSHocxzk1EbA5dJCb8FQsMZpLsXsc4QyJFyuFNc2PuGi5UiKv22VkPL5zkPe1AXGQnWEr5qRhgoFZzw5GC",
  "key9": "3GzLbVefPE7FX6kWTZGDHy2Dmp9T7sPjAmDmVzNXkokRfMx3Fqq4HXEQ7uTdNoYK1oLwhLKAbsd4NGRSKgXQGAeq",
  "key10": "42zfXYwKVCugZQpVRD3cZ2pMNWFpryDgNoyWF8w3JjHaYLkYBBRYRr2BrdRpxthzbZ9yENXsKBDAniH4UB2EYT8g",
  "key11": "4Mkpfmo4gakmYyAT9QcFhPkGJgt8F9wihsvMisSz6GRSrrPMvXrP324Cand1qsFP4puS77BzzWXcvCnnR6ZGReUR",
  "key12": "3bgJKkwY2sgje5VJPpLeh4mJSeFwn9uAJ98daGQLyAt2vT6MmWSSWFtRqQkWSJGHSqTyDBaCuRM5dNXFWvEbY3RX",
  "key13": "3hm7uNLmnxgujFPY3nbuyTxLitoVY3SBHow3uKbRc5RriC5ySKbrsDayKvLZQr6W52oLHgEDZTt82kMhRKBTRT9W",
  "key14": "5QLKBkHAZhhMWvvGSFdajfMRVEihbJYKc6sEdLNcXpwCg2rVXuDNYvMz36hPsAUv6jXxte9Gr2X5EY4Y8hCmTCyX",
  "key15": "W3Jv5ECcJ5osBhc82Hxb2Z1KfpPU14a41oNXKt82G2KCLFyeRBYTJ7Vb5xxkuvJaBkwTgNfP4UQg6ijA1BZM18t",
  "key16": "4D6SxirYbn2kiwtNjPdWw9Mh92N2ZeLLbdeeEq3JbGL9k6N3tmnbWtKZykezN6EjZVdm5DZ5pvnqoyerpUYQdW5k",
  "key17": "gUbSM3a2ymsDWp3empC3YDjMYSKMzWrDws58EDZCTL3WJe41FNyVzY5ECLzXBvdjtwJm2VYAuHb4N8YgFTjvjiW",
  "key18": "4F2ECiKatYAeRD2KAD54R48RDmTmPsoXPcsCSDs51RLed9b4Deyi1KnEpSnm8k9sWnDn64N3kKbW5BT3mk8CkjuK",
  "key19": "66i4t1xwUeQtKuhSNiNtcp2nWx8vm56iztKsLKQvqX1MeaQPPid1FHZLMSD534bRRMK3h4KKQfJMzZJM66LShhsL",
  "key20": "4EWozAeFtaWWtcePbeSmwkkfxHGXHszhskQJrcUoqUbn5gCHzxakx3AhUPAwhKrcMjgKLepMAKAN2reSDJz5zo9m",
  "key21": "3pZNC9uJGPJvH6BCRG1TRdYhrQPtkZP1tb2ThAVK7CYya395dXSAF3NGxZqRHS7cRnmW6qzNbC3E79QAXEBqskgg",
  "key22": "3UZtkXLkpU4CZdNHc991hg8wemh2XF4rWvoT4aoW8vmUzpbNUoMiY7FSq1er2T34F7PwXLBx9L2CtCJxnwcZtNUd",
  "key23": "2htYH1eBfLbM64gbzdjcHLcd1eQgUE6fuTMQFvScjCcLag1N6PF8dtvQeBVXB2cvRFdQzraaLARAEB2PZq9z4mW9",
  "key24": "4dL2z8LMVmxwx7r9oSFdw155TFcNagAcUMGQ4oE81r1xQw6rDMWLZpK4xnbYsegYtyri5qW49HsnQgJZfjHm7kKG",
  "key25": "4LmtTar3KAhbvyZFeHNyM4PbqKXup1rASrUDSQEh4vh4iwcwpztX971xRhEtWjXSA5eQ1mTcUQaNQmhif2cWjgdw",
  "key26": "4CbM6Utoq1eWCXq5FWXvBTgUFnSgKStiUMLDf7T5i8Ai52RhKQJRw8YgYJxjWbD4NqTPhR3ug9wooTiZpK67WF9D",
  "key27": "3XoY93MdUhsk5WDWHutXLm94K1pwN7EXmiNqMN4UbduJehqCAQUsfn24xMgCXVMTUccuijye4CvoN4YS1kAmgtmb",
  "key28": "5LPh8oRLPCkDtor2Yyrtf8Y4KA7KSJE8vKT2vJRTitDgya43vce32jFmazRtqAB3NwqbMPm6oCZiaYx2kSoGQupL",
  "key29": "2AdRVMvHwfXL5KqV1K6UCWpEuH2gVEjRhZp9pLt5McUwSbTXPUYBSK8aqBU3rnHDa5WAajYSPLAD1ZMydRwhudfR",
  "key30": "47wAVfou83F9FuS1ahY2oZUzPW4o1inT4NGAPHz7NmYfEKvmMfNjGZ91hGZ4u7mnerw367hJkGt7EiFD997qN6vH",
  "key31": "3eQCePvp7qLUho3cW9WhocmcCby29193JoHXd3BA8kGVsArHrHG9ACByqN13PxnV58aahtzyw7nHnESJ4w4vC3mr",
  "key32": "t1udk3ZFmJppUhsiJ21qbjUJkKwhxNY1PKKMGNn3qpx2hDJJfwHPGXpwZw4f6izznn5jZi3vLqE5wasBK5y6ngm",
  "key33": "2t1c4fF6EpwX2hSzTXvzpgEbmc3H9KM15oH5DTxtYjfztGEZBPejnBrSexGvobw5Snw5aQezjrm2N6RnpdpVJhAd",
  "key34": "55enozugbFMqUWjkwPd25E2LGrA8Ub55XzdPPstydSFWdiTXw1rAXqpUdaNyTKEebM7wWEWtfe6C6PPxmF3D7gUa",
  "key35": "Fdp98yZr3p2dUiRn8G8pKkXaKyu2HnV5pQvbctjthwdyzop7gkyFifvnZKx9hr9WrN4oCGKwwSQfMXgoZw4zSVL",
  "key36": "5NZPpWqzPUqM4sFb3WsQwyedDESag4R5w95q1oRzT9qHQ6qGMnvCVKLyQad8Mg6TTfxrA7Q59ek5UtwxY2tcZvyD",
  "key37": "AUQsR26RWEv7S1Cib4EWepMxb921FemhvAocTHiBbEpKKujW8GRohDRsS34JqcQYkZNredDc4PAxZj2pS6UFXv5",
  "key38": "389spXxc7dRhLnGEMastSJBkDpNHzxDqYNMdHqUsnLqHWkZaBZkgBhnNy8G3AHckiwRUNFYmKyqMnoAQ9LvoHaJi",
  "key39": "4R6VxFV4Ju2Zj8zwV4jUTVn5BzYbjNy2JE8yxvSKDt2k7Du6UEAudsqvimp4928ZonXED2ba8y1VWiGLurNga5t",
  "key40": "3d7p1orNr2g28wUqAtokAQEAWP7kLh85RWYDiwsrYKoaQRchNuCpJ3i6UwqPszscKtrdLU6LdE69B1zZ7u2MRJCG",
  "key41": "xd1hP7wKNpreGzjQeDbZgjTNS91qgKCktjZgW8wrtRgmPTN7o9aS48dGxTk7gDS54aLz5vNJSb5h34UzJfi1FbW",
  "key42": "2pzppGb6AH8fbtVxPXrQ2sVGCsuWQHQtDwRJXu8jAzv1n9soLoCNbs4iiw3dmqjbAex9bQ6cfRnsT9HNEnbujn39",
  "key43": "52FRRiCja7ivN1aJV3aG3B6JyYMw8gpkSbR8CCuTVQYeyXkPsCUp3bdNtgZ6UnU9uXQjEA7F4VHGhy8JSFy7s71X"
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
