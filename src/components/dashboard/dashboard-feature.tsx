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
    "3CkC3GLVUXnQx79WdQ7ZQYB2EVxsRuRVmSN2qmYpVXXakUgb19M5qScnDAPrnjMWJaFNoWjAWLkre3F4VudvA1nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23dZZPYREpBEtBprPqzL62UNsTT4Q6qnXGN723zFpfAZYGGHgjZanmoDuxeCtFgT5eC9aQ8zC4rfddnXyhaFSFbf",
  "key1": "5psntsPKFdvMiN9np4y4aAs5c6S9kZbNgUGTzyQB8SiHq1t7r1xEqda5GTeBFUAMdKpXZCZgJ5AoFAyG54CCJvCv",
  "key2": "d8hD6g1vL3q9CgLexDmPZt67rK8X5daziRiKJTCyCicsMRubXAePYCfB2chpjdRbp59dFyAB9PtFtDUJuCTCXau",
  "key3": "3gCVmG1doz3NDz9cG7MaAYUszhNcufyLj7S3hZxT7hV4LcWxKakYNMtgiqhTH9feS6zrSqHb1rje3hgKiXkNtsth",
  "key4": "3Yn7BudWqUk5iLcNeWdumHnAThEEETzwGPCaGyq5GVhaJy3jZgf2HL9GRygiRux9Fv5SLDw43WVZsE56G8gY7AD2",
  "key5": "tKcKr8VRyBEHthDAUJ8sx2EvLQS91Y5Us67BmskYvtQ9St2o3Rgzow1jU7iygcoCMcRVFrgxN4WFYcmpSp7SD1u",
  "key6": "4oFsY8D3r7YrfPL8m2uushAEGHeMP8K2K8W2EhwFzx4qUzFN5J5k9eybcswPg2zJdsV8Ef1gYhQG7JjUwD8Xqt18",
  "key7": "nszP8ySUuaHXUWXgeZqQNFhRftnkFmsk6m3x6QBiteud68vBpmxEaJtU2gz23zETkQHuaXenD8ERUxjRtC5epwN",
  "key8": "4ZmeJmqXihewdnVd2nfWD8eDfNHYdr2xxiTZqzZeaQdEh5Gvc8rgJox62TFBZuGWskgE6oG1duj8F572jLigZTsC",
  "key9": "4BbUeMSQJAoQFhejcRZ3ZL4U2CFVvqH7gsgLz8yVubY5fsBBdBfs4ot4GQCr7RGECcK4i9M6vUweEhWay2E177fz",
  "key10": "335E2Wr8oUiWAuLBPGEXaoY2X5ymcW4ZsikntLvGW75X51C6t59MmsRmGUURoWzkN95NMJ7Ae9dUtGjKBRsShpd",
  "key11": "fonf3zzuGb6kGYwXdmeuV6Z8a3VG6r2CbXPkzZB21PmMwrBauoYPwUfcRCREWZ18ycpP7ZisAAS9c8xTcRawKnY",
  "key12": "obvfY4H5JiNaxF1E3HXg8nQVbp3ZF8evGg4oejDWv82BDUSekKKf6Pesrhb9FmvdXyE3uFS9cGrTeYW7fybLpQt",
  "key13": "4DYF48Smfhw8G3mL4yAbgUgzCRAaEckztpe1vXAUqJKNrPzCBTnLiMVHRNyRo6Nef5crUS5Lp37qB69t6uWB6yFo",
  "key14": "2Xnho6oTZYArdD8e9UBu1KPWXMYQgeBrMT58z2dE4chWy9F5pu5KKnPoB9qQhp3z37jzApyx5iataLNtDcVB9vye",
  "key15": "26Nmu4fj3dT5swf7sTCebq9WV7gWJGdyjeWwiNHNzFErLYxyDLkT27zfL6X5mvMb5uMrsdFmKAJy7LgeLP8dhVBq",
  "key16": "5pE4EKBvot3yfsZp9WaD7aBirnM7BYRjGeJPdBGLGmHgCYsHEnF79oxk6spyT9izuRaR3sVPYoGzhGiAGx6ecKrJ",
  "key17": "4wJGuxdRHKFGpQcS3QXfUeZAaHuuZcBRxbHL7HzvcVmsXkZXtyJKxy6j1QLoKG2dwkA3HR7AnSdpPzxz6WCnpcnd",
  "key18": "4XA7tYidSumrZqSZExeBtaEJ6LbEpDTtJ5FwJkDGUTejkqkWRzKSMJtx5r6mkFq33w7GxiyGTxp9rLo9vkEiWpCK",
  "key19": "2CYpGWqQdCqXB6eB6QPnGWJb8nAbeBThV4BStWhK2U9EYFyMNH8fUnqf7vh4umVWJB928xfeiX1b3z3w3zAdCKUL",
  "key20": "2drJZCupCUBK9HSZHUCi4TRojJZagbweQYqpCENQFzPXKVJVDUxZ4dMqWpATd3e9vouW4EiQUuRq39QfvwXJFyxy",
  "key21": "5gQJL12ZAFH17HeG3RoxKb5zaysnPfqu2zpy6tF8KGBF98z2No5Qjvcb8wTsAABkRn7pPfVqjEAVbqCSy4hTJib6",
  "key22": "3U51K1t9hcZKWXDY88NkUKmEcjBH44VTh5iCFa7qVj8wXkeTnYftxsDE3AfzadtrCX1jARrtgC73vxy3ELkrsRpF",
  "key23": "5g3LeZjAxTCDpe19NLBpaWJerwMUrbJuQYBsi6ar14n4ahcUT64CBNZ2nLkc2sxdyGc3TRqvuzoNpqKhV15RKVRs",
  "key24": "2AWz3rZLVgZhQ4ormVAh35g7NGR2sZ1pBi36HEsoV2VwBwntoXwiZ1TRF7h6PVBW52uw6WDaSHw2Tw6fUfEbHGAx",
  "key25": "5ZzsZvQxjKeZyQADRT5twih14EhovRUtpXPJj84WKaWbx6xXuYQ4muL6LeUS6j2mWWbywLRQrLdsaKorp7ZVUJTj",
  "key26": "4baLq55NN4RNFmxMvhVjLYvLWPatTZLTMuiqrET5fpGX4n2vzRAQ7THAdW2dFHmpkySqzLBZdmKxPLADzJLeadrn",
  "key27": "4gfc4t3271huQyziYXx7Bc8xMGSXKs672wxh3uXe6n35DpmHQSyqudDPJwA5dxfr9hMHmjHw2ENaFCnRkvLCZu14",
  "key28": "56Y6UQJhjbhBVjEKSzLPR2fTmtGLb4EJ22Zq3tSNwBcdkCRkd92B7tNG6BBJDs6nU4ZWDQsJ4yeBH4UQvM67z6Ex",
  "key29": "tpfopwHbr6sdYjDBASh7eWRZGNQn4S3NMiguc4TefA9SQfuy4Dkr5ZmLmrDpHMuYkAopvxTSeV6yUAmX3iDeefP",
  "key30": "3H9pBMPQkJNhoa13mehT18qz7c6bWyhp1TXrenqfazT5iRXQ538rDjx5AuJEsTeyBBtm15fS4az1rZKvk5PjQ38h",
  "key31": "3YsQHWG2oeSHpBHhb5Qenoy9d72fRU5WbEpBeneNfMAYLMWZHWUUsbCA4mB9kLtjF1NYSHUmQrtcPz7syvxY7UZN",
  "key32": "5zX7WgTr3GWhnyHjzsEkWNnQLizw8NUg2vgQW4FjbK8ax61NP22yAPMV9KZTyy57XjuUv9gyEWKwUnTvXSxhRuW2",
  "key33": "582V7W6esjqQvGcUg2Foba9B6EJATbLPAgJxZ7EqrRRimDG6FwyZWZE25DBD3N99GNqYD92vHJg8V7WoX3S7CWci",
  "key34": "5eknzhyBimn8jTonaq8j3HdTFVyGm9xUsrhiaFLUHNJDGHeW6Zt49W6ZHzatpVK3uKPBjgSvU9h2JicULzPw3rDA",
  "key35": "JTE8Ao8eaAz7FQumD3jWXGjYQ9Dh4TjiP5bX7RgzSNC2YXTu6yLjqDtEXFy1CiZ1aQ2rx7xqSisVqbgKDpmV71w",
  "key36": "2K6qsjZQ85R954jiuGFjpppfS6dek3eY24xipNLvHzJkVjRL8Xh6iUYz9gBK58c25m8UcT1rHhc7xVfus9fwoobQ"
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
