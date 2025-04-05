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
    "2Z77SQGMPidmB2HUCZhg6twdtK31h3tt2MVuV3chqm7vV4HX7CMK7YrHTvscYC8DZcdNsZhrjPa1MGyR1arEm4M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BR9ZeScyiZY313XZFfKwbFAoBrKzZwX5Uh2g328XTYcEs9igWM62MCMd7QNDEjikkyZXqVRP9Mmmbp7Sxh1UQ56",
  "key1": "3xjHLYJP9fkng8chpHCEbwvndWTPkEhGrUn1aGpr3jp8DaQqhbs5uNhcghDgYeEAzdQtyNSkKmfZFvKP7HG6uzGe",
  "key2": "9xnpbpvN6S8hDX4mEcEb4t1kj6CHwdkqfkfRDznbKc96GRaXVpUAk4aZaoV2htNj1N5gZrBg6DWPvCwD9c5dDyo",
  "key3": "2z215GCeT7HQ4DWVquh2SgqnextQQjvvW8unAwNAssjpSpCxA6dV883L45LRu4jnF34rgo2BSP1BbzV2S2QhuG9A",
  "key4": "4M7ExF4JEwSVcD7aFuskqtFd78WtaxzAvs6whLUpbpWQc8iqvS8y6vTWtmFv4vYEVViLVdTPuwT9EGjwXqjRCRry",
  "key5": "5UgXQeBVeQ22ErurxnSajPg2tyinkAZ36iGGtrTsaeJKyXe5LW1bE6o3pseWMECsVPzZRVsZyGiMk6QgSPZebndn",
  "key6": "63XdntZ7r8X3EzB7wsYwvxbd52pfXoPwFLV2F7CcZG1DcXysB3oETC23XwBb51jfs6erbgkZBVQREYGCAU7iLqBz",
  "key7": "35tobRXUzLbJWV53LHqxast9ZkirtV2mGdMhSuoQNCofc4k1hRLupouAfQjXkAtpCK6Ewyx27mKy7GuRd8m42iCt",
  "key8": "5GHNCuFDZBuxxeBjUKNpirnjdSoFwT3kSpgMQQUnAoNXzYM4PxNdbcWwNTzhw4SS1yPzfYyZSXQsk2EQgv5gSsBL",
  "key9": "5ro1NxPW6uDMA8jSVMrM9ZPP1iEb8kiVHcaZAi9NAhZQ3ti5ePoaRgZAS2JNRyGBSHFYZvK81bGaBy1CE3wSsYu9",
  "key10": "3fbGGLUYocGS11nMrRHuzczEpFSHPXNUL6YJZaApRSN8XHmyF8gmf56WLWSRCBML993RGp8npG1JucZcUZGzi16M",
  "key11": "5WVcDidpoHQ5EkyN35gfEBLrNEMvHK7a1QELC7wESXfdkDVtuAA5ySDoX5nes43wLqajA8taoLHmj7jAfNvvU5qc",
  "key12": "3gLR9FSmwEp1BJUBQG7x94rA7ikbmDSNmU4e36C7zvNk3EMTdvPXdibkpGLYzpj7RoywMEnxWz6QZrACGipV5cg2",
  "key13": "563fFzgKY14jPqYHbtQe71AwHEHuy95uXNSQqa9qTfKCnkAd3DuMfDXF9PZhVdwvXgcWbmXLy5k7DQqUq9pF5WNN",
  "key14": "62ixfcMdiw17J1oC1D9hbXPUyJw85hZcQR7g8bCkWoK3UrjmdsqEudqiXqsigsLZdChgJy7itfREUqczmGTSuudf",
  "key15": "y8JCwULH4yhboupJsaKa4RwhhnRMx89CHYG9uVWcHPZXENyDHN97FYVnPoUE83LFPFEcoy2TZz4WmUNMAkzdaRt",
  "key16": "4wLby6j37WKQ14zuBdYUUqzyuNi2sPf8YMbLPXk7YuuhyYpvYGoTGQWdvy8ba8x76vw3aaRFHvm2ckKBagAhRy7J",
  "key17": "4eUYKekf4mmbJmYbjG83oVLngq6ow3npm4GkbL3YmzB2HJbJqva4B62BdxtRVZtsShFjbViSvk8iMBrv2aneZG6y",
  "key18": "56yqXTLpCarXkmdU3KeKysFTrmC3qfh9GVt34CrniWth8cXqbRLW61roxmcZvLUNngcYAGRFZv7G4yFgVBhgKPgP",
  "key19": "2a8Z4bfyArcpHgKe921DdehXPWGC22Sc5vQiihtmpokTqN9AuzkVCuWVK6GaikdfaFqcb26NQick27oM8YSxVNHr",
  "key20": "53h3aDDjhvcj6dsodk9hHwxT3mzyEEQbHmD4b1CgswFPtr9snQQFnYSRHv888HqDe3HmXUeS1YCUHjoY6E7yAH29",
  "key21": "4fFK1yqvB3uUzm8wzUQURvfgxjsxBed3SeyTBYgABEufXXRT2gpJ4tv8v3jSBkxUhV5UySC9yq8zeJmt5fWfohQ5",
  "key22": "54g7sFkA7Lw2DABV8gWmKem2MResHyPUzpSYtwmVL2f83wuZUip74tdTmppfYLrijrxTvaNuXnVjQ43rF2PpwWHh",
  "key23": "5Q1cZR47GyWK4GB6G2sTg1ezZzXFCWhzBvreQ4tzEcSDpHvdHEPYSJhknFWDEb63nsjRbcGdGud5AbXT6BanBosy",
  "key24": "2miic5ByTaziEsAbkDTS5CDqTfYNJkJpMaKVubAQFhmng3b1agQGX79QFgLLCtL6kaN6cfvrLB5CxBkyRdTBhZgn",
  "key25": "4AnmiGL4BHTVrvWwKHAb6Fb21Jce3VJQxKW9XbaxFmBX4LDYTnuCJJZdMBBzSzm29rF1RHaGUKQYjJiXXkEvzPmC",
  "key26": "5aKC5wqBJ2pLC3RtkqqjsyF9iwJRo8jsUh7U2jghv63EUESCjBxGW2gc81J3Z9uWjfWw4eQgE73GPsx32wGfarw1",
  "key27": "62B3W8XYCiukXYtSEWjCic7oB4Dhn6yyAm2Z3NqbjNfvRVX2szYgVjrpyttdbDXjYJoZ4MUck8PssBiicoaRfn7Y",
  "key28": "5dgy2HAbngfDtumWUfPWDv18gWsgCgZtALYyf54H7Jo4XJDgx4oe644ai7QcuhHNSLnGsq8LiMRWDPYNzyyYX6hM",
  "key29": "RN5RCuvmncjU5W9qWGkJVVKtEnFgV3FeDVxHeWG81HQvKVZs1iSXe2XXx3Kqz5N8e1pyeiEWSyGuwVWinqs5Nn7"
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
