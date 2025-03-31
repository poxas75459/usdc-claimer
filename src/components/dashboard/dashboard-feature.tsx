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
    "5WdPQTXLhXZvw9JJ9LXL6bHFKyjRiDYD3hXSRZUC1dejkhmapgTcnLes4H1yWBb3aP2cRGqKUrUXnbFgCR8G1xX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dZrc3svUjXtDK6HuEunGxBPzSRicZuewUe45eopBox4CYxodykgdeVJxaMgmhfm9NMo2FgjkQYYFzfe5NKcKwY",
  "key1": "3rKo5xRvadi9YZKrvEkNCe88mZ3VS17D33UnUuR6ePsEfU65wS1UpALtCGVieyvnrDuqnPEpJYfDUNbai1BjEyUW",
  "key2": "5SNx7AQUv4NVr8aCMrNxzw1snXJFSUYQpt5ixdRddEwxjWE1Bk8iHy3CAXcx8jfsVPHUc3teLgQ4k68djRNWo2FM",
  "key3": "4CwkppR23eomPYdp1NAA9NfCz1R7t28KpdRxFoekHxQFRHLYgyXMsKEqDAzE1VEm4kkQa8KRnGXVevmnUHz6Bn7j",
  "key4": "2DkyogU3AhbsndBeWyX2qkFn2yQMv1i7iQwXUnLe7ib2uKgAFk19TSSRd6JASffaE7Y3rU4BCm42YZoHj5WAu6Mi",
  "key5": "4Uy9iz6GGK8RcPVaUCGoBpn8U1WLd5cvy97sSPxaepfyP5XfDKd7QJ4YYeQA1JkAz5M5KJRxmj4G6m5pH4cWifp3",
  "key6": "5N8hMhSYM5Z3bavd1RRg3EtHwmg3kdz8r2Za6EYUJF3fKYsdsRXJkhK2Tn9a6ZqUbvL6mq8DsQRGRvLF4hF8Fb15",
  "key7": "5mQHqcVmjE3YfqvZPTUU121ZtzSNp6rqCTMgxvTKea3CAASHFG9ijATaUjep5PX5fhqiBcV8cwfeFF3a8ZLZCFcU",
  "key8": "4Z2QbjHPdQEdLqW5CtoniZgCYrDKia7yrUK4N2zHULGSMn84Wz7Jd65nuesPJHeYSvrHTyptrewnP37JJV1K5myP",
  "key9": "4UV21zQTmoxY4g55dUVCxdYr8TnoMG6ycpzGoee3dxT6zz98Swt3mjxJ59p9XbVd33TLxQjqtKrJGCovVf7B2TPM",
  "key10": "3SgXEgqpvD7BEfXThJAfXip6GLHFMHfcdDtXYHu6A5gvGwYZCYs3TiFRUhGp8UQVcxdWgfSXNuE8JdBb2macweHu",
  "key11": "2jxBHatCgsNfnmTcSAokNQBEeEnREMwpRseWVD42WJHTyj8rD9NoJNDGF43U8pz5nNYBJMw9wn7x3pjWfdeV41Xk",
  "key12": "2zpryBSCRY8tAvR7zAEHXGabUh4Emqz92CKuH6yGhTA2ZH31K4XcYbYLUbFnMDAXQEZZp7UjcuXZHkFCpRxqZMpR",
  "key13": "3oX1Uh4zLdUnzdMsVk2vjNwfvjEnMHw7sUvETg6whgNL5gjc5rYGtACt18zJkk4G5PSBUJ2z2rLWVWLvF8Tnx62T",
  "key14": "x7d78AarEiQE31xp6s2ackfhsNA1L7x5YzDiWc6bBBNG1Bz48XRy1T2STKAmK67L1mDbkKjmGbBYV83UVVA7mCq",
  "key15": "59X2WQ5gRvNwAdJPsoNmb3ssdcb19gGqjdQDQFRPnqVqE12GtV11MSkxC8eBC59XE7c4GfRGoiQJHsfRFj7emFnt",
  "key16": "d57ebMXU99pmCA1UzTSjCCRgXjhJLRSiVPkJE4YdUV52ULFtA1EBBGgtXLfy45QHy956CUbKvSesF8QyoNrF5Uy",
  "key17": "56q3Sd74Q8znfQjX44agvQpGsBHHgbj2S1rPGgcFAX3snB1fQU5s8BBxBzszJYbogLHyyjT6vqBvzWR8xs9dHxnd",
  "key18": "343qipjLWFLCuNng2uVLbECeFmfSafd626nHapg8e1guqhRtiCACsrPjwed2U2FwDmqdJRMXgrkVsPCtCN95F8CJ",
  "key19": "3WvXz6Jk5DmFyZa6mMmdymPTXQfAQgu2FtAeryuZoG83nSU3s16YYAVYBYvjXPowWuTj5TiC8ZE4CySpYUngD461",
  "key20": "4iMx9sqNA1jEzJPvuX1bgpqbxkXWPjX4mjKgaDYHZC7x61JyaPAftzHfFvTn1uazV21tmAjMH9XTZ5ZT5YLaYBKT",
  "key21": "4t3pvaa3J96gZ6VPn8hYSyPfAVtPbEmjMUkLrD8uDW3NjkyGc7wBS2X4Nu8fqYa4WrqLr7xANwtc66J3tksvMBA6",
  "key22": "2vQkzd6RGYfUgfwqiiWq8dP9w3hP1v65SNhKgKTPXZJsW8pn9nuGK1Y7xRnxs45NmuDYAEErCPojsQWkrkJqz7qo",
  "key23": "g4aswCqRihCqfnYpdY1U91vx3wBUu678W735ZTwnwUTfs1XUh7WtK152G6TEeA8eQgG25yKv198ZoxLhiGYdHKf",
  "key24": "33pSoK8c14wuJniJAPJi3iF1PnCgjehRNVrxkiRJ7QtQnA6sAh67muC5SYVH25qx9BqrsHKGZH9JaGicrPnmCPSB",
  "key25": "3ApmNQKX9LLbPB6FxivpwFTo35wLCnm1N1y7duM1G8pXKsKmfVSaUJMC13xgsGFWAxEknghiAYHFotuoUCaFsdyv",
  "key26": "2yeYHk6GtjazKTo6qUXjSKSQpYbySMXU9Sqwvzfrp93BuDpcdmsrLyRpZsK5eipwcrJWjyZm7gMkJwsUkqKuHjc6",
  "key27": "2JBxV4oimPQW2Ky9SsY6TpHE5sUVc225Pp9VHisCzjSLojotntbhw4bh6K36R2k7iPW7RWtxotre56U2b8rcSJso",
  "key28": "5R1Mi6AiDACYi5EuESfKVxej5rYcM2JhjWDcfP97KBidT9tZiktvR5D8FoYTAFDCzH3R1hSjtnkyXKXj9rk8dyYK",
  "key29": "3Ds2H3PAwnJFG6Y9fsyD4JmwRuNKTpHFrQrhFGxqbZNurWkLa7gmCFS3e7z1re89NdSWKfo6XogZfQQFc285RrVP",
  "key30": "DcfNy9vRJwtjWNkziApaY5tSiz2qxbiFnqEVGDjhxdFW3mxPe1TKgpwRogvkd8tcstHA7W9Erv4HgJKerQaDBM1",
  "key31": "4QtA62Uxg74hFVJsbC8ebypW7jVXoUSNKkgVCWm2zNCzNsqUTcrPkMTMpGYMvg9cvKZDWo2PnN6me2hkpc5fjdVX",
  "key32": "35kq63zpvoJqw5c6qGNjY2wojJRa2pmkwoE7RyH5G6jZ5WXpsrwLZYytYPrs9Yx28VPLvxCdsxCSydeSYJutKopU",
  "key33": "39PRsAymHCagMPco1bvzt1WeDJ1cxww397L7bBow7YVMTXKd4fxgRuwxu9NsufuuJGv2woDW6gh7ck94nMFrKFWy",
  "key34": "2bJknDh6dKZc2G3Q83f1yd7axi6jd9n3UuSffHcXNJ7oZZVzX95RRuhm1boakrXZ1TRsEsAShEy3JC7wrh2jhBar",
  "key35": "5a3BqgfrUCwYfBLtM5x7gB5PspaC2WJ3jimmWVEEUNyPxaVqDjVcrXEB1LEv8doNTZap8k5avBoak9mK2cnwAWEJ",
  "key36": "63R5i3PRcnqhTXSUb1qxRuv4kuB4sAkDvmCjnoz9PATRfNr5CmqAbD1spCN73TeiVoQtQQn9EkvMfV1Pj4A5Z9QN",
  "key37": "5Soy99bmaZjsrTLxFuANhbWp7mFVnE1FBQvMSxZu3WgkqPTeJho3hdV1NjcU7vLXFcNAdjM3kxUK67xGzVm1oQJx",
  "key38": "25UsA6dcaWRLVnK4hLrzwruAjwJ5wszUjd6bWTMe1pM2PY7pnuGRLUV74SHLVD2CejjuggYeZMaxTMayq3G6kAfa",
  "key39": "4qe9q9wc997eX5SoiZdUefzbNLCjbAF34HF45Nj75rX6v1xPDQbgvMkUzhMxQcPBKfzon4HsLruPMNhtQR3qrJnk",
  "key40": "64iVmhmvJFxwN3awTqZhe9c4KgxAyZDwH9dXwoYne4PyzVQEBbDrZrF81LNyf4jTDeYQCPQ4nq4sGj79dnJ9nKUk",
  "key41": "39ya5YhDWagtsaswXbDAuydEupt1a7fVgydgAsKHY9BzDruFoxQ9GYyeRiMTP1ST3RD5oUZpvZPduV71aVoRbkM1",
  "key42": "4eNqPnSmiqqfTUeHs4Q4QZ6XNojsnfmX5PCpcuqnutLTjHt4tVJ7366Ww3niabXs7GKYvNJtYYkwdry4Qye5axkH",
  "key43": "SLeJhkur8hqw9k2wmKJc7zwpsjSALB8RoYX6Hh1yrsX9aiaj7YjTpVKK625ehYvjBQxiZqMA8x12DK8Mo7EDkLd",
  "key44": "3YF8CqHAyMUgVXaf5g6Lf7xKEt2WK6hkkP9o3jiJoiFP2ceE6jZjVKzyDnsziDPNiXuppWyQdmsRJgdah8h99XBm",
  "key45": "3Hdxf61pMM7X26DA8wCfdbsBBgK4gpkUdHc1SbtUCB6tdMNJSZRaKKa3pankn3bfvwSqzBuvXNske7H293XTWLYb",
  "key46": "3q4PvmGJ5DxAHZX6xVQFkQa5P9RmQ5e5sVtcFrtK6pRmQGycz2mTqBDjPGa6ZKGTFSJRj1Z87i8Qn3tt1psj4o2x"
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
