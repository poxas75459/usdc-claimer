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
    "4VPvgmi9fHuve36jEBnRAJ8i9XqomvRJp2HziFn3MawmDbHfAiqRuPLDHwiU2i5rKZCi3QbCUq6cErekropMnNTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1hCX78v23v6VJPVZQFX13yrZ7xozbuszLww6aXSYSz2mdBTD5yhiRcEwsuUDt2LxMcUhjXXDDmFgywnrr31r28",
  "key1": "3yCjGGNY5YgUhrs6y86oU6dsqTo4NUk6xgoVdPgdwEHnNe34oDVYZHm5oS8Gz2sSN2LENN9M2bCZUzocJrrJGavB",
  "key2": "39wwCPGZd7zwWqDLB8SEBN2LFwTqZVcA4s1RavSVjKmYAQvzuycsGus3EBZqMJspnLafCdFxgucTVnHvzxS6QTVP",
  "key3": "NwyQ54zzhRETqrcaYshJXj1dvdWqErh5iu74XZeQnTESqrPyG9R42BznKrGAy317ttr4ii8NvWuMS2sdQ7ypPSq",
  "key4": "5ySSjbSdzZovRhE3vk2yPrDpVaN14PaDmYogFEHR5iYPcG6QzcKKqsez6EHDU3tFWz7EXEgyz6bzmbVak6qezW6k",
  "key5": "y6ZYADQfWcYkQjSqxdrLv6DYHe2DZVCp2TqmH1JC1TCGG8Xt7GRthKf9H1oweLNudFpn42XabfYD8UJJfYALg5C",
  "key6": "5XaiVn2c3xjrV5WcBUvMr4MQdndMHgyHAGz7csD2XVk6LNGWpT8DbRAEmDxnt5XhedUmo7fWkARwZRxhApF2fgwE",
  "key7": "4ByXMAeWtgnCaw3uUpgTgXnUXEFDjJ6jcz49XZAUe4Jwawy9TCaRuoCqYx3NxnWz63UZfKFT8fHnrevbWu46Sk3s",
  "key8": "4YkryVJ4tq2vuyMQqPij6BupTRGwmiVp3pMGuZ7BgLGt4o8vJC1oWzWkjQWsNjah9yrYoxSFeXFREdgFESotBzWH",
  "key9": "5b9taJCGB9v18JDJtuVBS7DQ1hqZdF2i8HyFSfXtnZeTkugPPdYvN1vALUNAxSRHN7pzzdoz6wvMEUfbbhJuGbXH",
  "key10": "5LswkPP1TiGaF9rPFc4T5G2b7Ftycw99Z5jx7p2zbZsvTwNQexo5unCL9uKN8iAidnRuBAcb26Mg7vtAM6GzJoXg",
  "key11": "3dUFVdwHy39j1zes2VnGm2DL1WhEqFbhNRn3LATrkypupgx9pKnz4xMuccmPrz98KVHTZLvPfRrLSR5gjLxmDvnS",
  "key12": "iMdvDrE81cbzvF1hschtspxzHZgCy7nSLkNLPJE5r6jWGa4YYmRYUQkZUMdHxt6u5oNgedNgX2hk936Q8De8rBu",
  "key13": "3ZX2oghG6cqgxmtUF5QSUBQPLp3AwTMDzVSWBojUmbkxuMvq2rBejhWYhL7tvZsoAj5Qz3RfWKD5vtkKzvJAWjJt",
  "key14": "5vH6psyWD6a9BQieqH9wZjWmdkDQ2WhsCa3A3ocWkft4xZKAbhC1xdb6xBRUNeWRedKNL7XBjx23qbkGkaCaxR1W",
  "key15": "3aPAKJq5VUzr9T3F5FDnhv3GhzAgDgqzTQroGdLW4srgp2RbiWbiLEiy4YJBxLpYEBDMfawe5rpu8CjPSUui3jZ6",
  "key16": "5C11gxRMU2PtRqYWUAmnKygPqptDU4rLuKkwxZKhZ3epQPAjCcQtZbfGD7ocJ4Uxb7DArQnVv99WVTub5NXkDUnt",
  "key17": "3eepAhU2gMTgBsGu35wahWfpoCGoX51YQnG4WvqcxWMNvYtiM23oUN9sM2zhzAxjZCUNaqaTQ1nJ35HFXhKAMqAV",
  "key18": "1zBwsqsKyVsFdKyKXsupuJTX68Qw6oEubBfpYJ9M4zR3TRLwjzKfrcavyftbyDMKC7YwLPMLcrx4pbwU6kc8WAi",
  "key19": "4WDL9auCDeW6aEUfE24xFirxsn47smNv8SNL4YujZLBJp4SQrbhRaJby8XwK4pS6kqGTksXSA5H8feTF1PbRtuop",
  "key20": "3Rypeffj1NEAW9puyv1eG1z8cWAPcgnND7h7XRsQnDj4Dx5Tom68D1ft4jX3PNQuAn1ThEEXWxtppME9GMy3JyP7",
  "key21": "3DUbBgxwyVZgAe3FvMangL2MUTaD27ciNyT9tubiQyZjpjzJzKKhYWk7VM6WRVfKU98Qrt2oUw9s2aubMWbcdC5D",
  "key22": "2YhV8RXorqfQkMMoYotHiwDPmsunGkr3Pi2MNkb9Zsf2TMx8WgrBAiDrqsWYs7T9bKYfSxmKPQ5Ka35iVJQoqVGo",
  "key23": "2khQJkddiaRS2o29LdLbypJK6wRur24AG1q4XuGrWdaNynbF51zTEvLhqzKtQnzU5mEHvFCALpxc4Dg8td89hiNZ",
  "key24": "3pcW22gwk1mw6NHYJtXvobVwbYgo3qW43HbFtaWYDSBwtswWFRBWEFRQz8WwHxYt9x8WXnhPq8cboGK3EqZpHG6T",
  "key25": "3kjxfRwHAxEKT5Y8GTDXBp3fnjSunpncLtYKAt4X897wsffSSmYVQ6QWHyfgixt2YkB8gDepQ78MfiWpkdJVfjnQ",
  "key26": "364acPZNrPezChRkEJdsVbLesytaLdQH4fwZCVY82gNZ4Rg5hijrZGWXsZ8SBbE8yUFcDVhbc582VvBg37ut7Jnb",
  "key27": "XS7RFECJTsDD92f4fh1dEzgGSyjYVfdhhpY3LbGAEeKSVhffVRRP4PAb737XFZruHzzSvmkRfH4h2YzbBdVEWpL",
  "key28": "4U4sDtwCwTevNTBsJpAx1Gzw6W44nLdgfEao62dmdYp7cySmYiFYYres4PFXUqY9DRE8E7df2qsojauZwGP9PpRZ",
  "key29": "1Pb8uec3MzjDwe3yHunVgvQGfus8Y6kQfBDz85DLnpX4kXz1ZPyzDNZnKomvSjoyWVr9XPhvSpZRj5iVtgVaaSS"
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
