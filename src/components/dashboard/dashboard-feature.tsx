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
    "4xwYLSGpDBvKbcUBRpNQDaPb134Pjh5wk7NQVTQezpwhhWZ3g8ic8kMnt93QaWw8gfgSR9N3N656uBfR8bLyQocg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QRU7USSqU7Deuur5JAw4PRtnL9xBJ92twrxRXLdNvYcakUa4VXRgKENmr43RRqYVJazpGh1gM7KMBnjmTNDTpx",
  "key1": "2URY9L4LPyvMYoY5WJ6Z5JPGDH7bpzmDaWbKXNvsNuyhibYWJoRE1juamoUfgsNAfBcXxmdHn32AUKQ8xytkM5ch",
  "key2": "2fq63jMSDWRdVux1JpNBcFhAYuizGcAP4c6gV54WkJrKMYsrdGu8rpxNFwYJ7ZyWsXJ9nZLvUEaPaxNxkoHPa34n",
  "key3": "3Y8HWiJACJQaBJhbY5TxjKeJEA3s8GhuHwYKAqMYpe5MxfqqYqwW5iUfCf4gUF3egmdtsxipCh1mZnwr1f3ibHWy",
  "key4": "DeycsKYLen18QS95Rexb2kqn8hrMgvhRY33gk6amWgNVa9jKmHDaYpNJoCaU6fDFqMvnShshM1zeC71wD6bySJ4",
  "key5": "4AohXDwD8ek3p172a27aTrGLAXZppoA4HAckEAcioDcRojo8wEhva7QLCMG3ngQqKxaPCkhdY8jTYrPzkXY8hY1a",
  "key6": "2P1vs9KThqbwvqJcF2XofQsEDYHhNNabqeBFkh3ribTdn9UZGXkZmAo7Q742cZQDbKZQgqGFgs3junazqbNvaS37",
  "key7": "2RKaB3m1FiUwjVskRGJSSSBPKkGvk4NRrxwTu95EMmfpjqAh56fXaehcBVH8XCf4HSV8bwQc2qPTzYiZrR6pZ1A5",
  "key8": "3tGWiufyeKUHCCbtdQ7KFeWmj356zEmMaG8tYTzvdd4hPZymWVZ5mrVZrcCkgCJiPQKDfjwPJTZZreZA3ZYLMJ8u",
  "key9": "2dPsmgsxiqpvstC7mTEJswkesy4oFndrvpsj8huB3tPTBYVjFqxzyy8npqSpbn9oZUsK19PKmv8g5ALznabocPu3",
  "key10": "5u6PVyS9bbWMTnYMZonYJscP2VaponWeYYbVTmXovNP842ecvp6cUSCUkbQ482Utoy4GFbbFE6tuJDiG9BA2T3JY",
  "key11": "5c5yrx6utqCew6ykSXfeFDqKcxSjVFfhSyY2HU61cJrQft5qmmeGKcM7bzkKrBqS4Dmhn47AibZbPJzCH8NYGpoC",
  "key12": "3Ue1uEMtnAEyca6dCaYpm8xTVeao2VqBuhJV7WLyicXAjeJ6USYotaosYws8hhZeqPxUePqC4XJczHMeGxdZguxf",
  "key13": "4e7BS1BheUJo6g9gtSX2o51yGvWgsVzBWfd7CkY8HUBzr5EpS6PJb66PyM54byCLWBviyvtrm7y9WRBJ7bRaRxT5",
  "key14": "35bfrdGEhEGJzNAQqy6HNeptAse6SKdaiusHeC3K9LL879r5GNYxd1zW1DX6iKUeAZUYGoL4vTcxe1GFSdFA3Y1t",
  "key15": "2ht7LMJwZkBkipfTbTqypHpdb1ten221vAf2Tgu65ZBcvczjxmxG9KuVwrRQEJbMRc3FUfneDi9kNu9nLLYuBCzk",
  "key16": "WCSSDuBYibGiisAvf2uAayXV3ijahNpZkNcR8XRnFY1arnWtXa2cMJUihP8Pxn76G6e7TA1Bp68sQkpfa3VvD11",
  "key17": "4SVk4v7WBYHQK4WgTYLZnZRt9JmpT8sbkVPjsoHkMGXUjJXmi9VjrnfLsPvbxL7TFqQ5S1CYVBBKKPaDca5Xh296",
  "key18": "4kR26jbrPCYL3miEuQZmLDVTQXqkMWHc14nd2c3CN2nSKBbBbRbcTGegZzt8LtMSmtVmv4dybqh96TVqzZt3yHMx",
  "key19": "58ZYsgrugh5fn1nynb9xixjUy4EySVKGqWvkK2oijcwemSW7nbVPUJKMJwzW2X1PRWhQbbZ5tKwNYtyxRS4Ja8BU",
  "key20": "5Ufmrrimk9AXV2G3YGAYuomUMV6vDeGaCGajVwGzzH2x2KEsBfQ9gjDfKYmCZz4EDYJaSXSdSLHMXTcraQazihQ6",
  "key21": "4e9CsEJe8raFKnuPV2D4TNoe427VzoZzF6vNVXJ5AAL36P7D2zcx5s1HLuDkTT5x6H81RmL6TR6U9yd2NavWB6R",
  "key22": "4qZdD2paZqS7wtbKubdqVej4nHTwsK7t6rCPL9eWugQx9gF7kQHzFG3cf1vUbpJY8vrxuxxqfkBi3dwdakbBxc5b",
  "key23": "4tujq43aM9QixfdmVuaPG1vVtR6xUjV2rRwjJmYMA9jLdfpFT3Mi63X3ua3mJ5x8iwDL7wYy2g1khyd1rfs8C6S",
  "key24": "3Zo7sgDMMCXzSVuJEnSJf8D3mi7G7vLDTgHcpbDG4Ag25NPu891mKfavsythGuNg7zZqsAqimzqLoeDqzhnTUjho",
  "key25": "647tp4Z127LT85Sjp1Us8GtrB7nTDoaqyQ7rg4oTuqCdYnELbmQS2Vsp7AXvRDBX3BNjbEmggkHtHBdWxfArCyWe",
  "key26": "SWQo3wodakF3R3NE9vEUX7gmyHRZ8TBXxy7BfKcb6ZuesXD4SZkaEoFjS17A7vuS8qAWtgUQbqwbNrN8Hc1nba9",
  "key27": "34sQUjirzJtzqLrrBUsuXvAr95c19AUP4t2md6wthvXep8mcWH11fGc5b5kT2mNLavRoxozAsQFLSZsBVaGHb59X",
  "key28": "46Cv6P1uf7VgqNGNMZyYfn1f26fzyor96jUAXHdpecfbGXUsK6uKDK5ZtUeTzbPV8hSaiWgLsXCSaJ9RmWjysmtb",
  "key29": "5yMDabJA5XhkAtt2pujqc2Mb8MiheRp3xTmLBSu5Drcy1ChfipwB3yqF3T6J1hraCJDQnwud8o2XE9VfVhv6XJYG",
  "key30": "3ZssyZsfqkkG3dRZFwydf6isuZ33kwMLdzK29Up7oXhskJSNP3tk4mrx8NAW9s4NUSqhA7mmtczNT3WZWXg3FeJY",
  "key31": "2GhxBRdnKmCSzXFxrkDpqVard3ig1SfFABjYVLUV6zYbsAfRoGF9Bhj17hFzcasqfy4dmwjg12CpAPyAyKTp59ha",
  "key32": "621pzR7YsDdxokneEVbrDpX7LUG8WJ8u3MZ3zcVMx5Ee6Um7KewgJWqk58DCcsyaNPWFH3sQxE9Mz6d9gkjh2vSc",
  "key33": "3d7TkDSfyS7piY9waRJcmWX5zFuby7uvGdKZeoSSPwgs2uCRP27BVF6tM1a4GDKFErn1Cn6Jpb4JqyZ6Z5vrVDVT",
  "key34": "dQ8ZyiWtPeuQ1ancrjGq65nf92LwPNab8S7bqhr7D7VXTXUtwUNUx7BrNdQE7TRH7WYTq6q4wXSxhh8Mviu2hD1",
  "key35": "63UamKVg2khzMJE2XujZXNktFCsMZq2pgWEHGCQ64WWLCqHQ8YEeAXFofNuD31qGaE32fbdNXWRw5NiQNKgbFEM4",
  "key36": "32M2sZ5wAxun6dH2hYDbKnfHTL1UbuXXEGfSCSW2DfUNLNgLUQfmdt69CZWy6rRSe96ePKygTCsRPMCjEW7LsvvK",
  "key37": "38V1yQt28ZaNB4TYKqKMfZz1uFCn219mPeLTV2aNasKPSAtYCjrj29Mc5Ed9s7Yw5nVqYu3cJbxQ4CGVTsqB88Ve",
  "key38": "378hMVcfoCYsQp6gahudeKxEnQ1xhEno8ns963bcdvNtAZhJEqN95WTxsn3FEVXNcqWHCRbMwHkcPjn4a8vZrFcN",
  "key39": "5XJtKstjS5VtQqtPi3cSWRCPfYDWKp65Ka2QrYadsxGTL9yZSP8w3GxL3f6yTSPgDEkyXTnsdJuA5UcCqpq9w9b4"
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
