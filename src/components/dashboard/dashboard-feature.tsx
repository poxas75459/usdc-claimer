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
    "585NzWtJccB5oL25xHCMBG9VVAhAD2WDq7FxevmvgTP28WGXqtcFVE21KTMwkyLo9FkSZG2bySGUPfRcRrW3ffox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQuGCbpTfDKfBveVgDJLdNjdPvFRXFqZ2P92tjpEc8Jo8ooqM8YiECn7LWxRRVUFe1cQ7FhBb91VGhx8TD9aNtd",
  "key1": "5sXN6Kb5p8XUW1fc7fyok6bVHoDn8kR1CSRLbkud7XctUbqtRm3er53odEq19RPQ7zZD5H6LjAfotGamzpbTR1T2",
  "key2": "5HJGqzowiumKs6NF99krqbqnqoh9CHtJJn227n6NNAvuzErwezXM88KsdASrwXezui41f3wHfRYx4DyrDczZv7t2",
  "key3": "4FmG8Pgz4tNTAkpHfLxyiDb5FfCrqK8zY6aHM2UQDUnoi25XBxXF5qgt8otopeMiGpUTZEBCQPmHq8r2NgFwSJca",
  "key4": "24coyumrUtP5qpHmuWKqAgim4AKZD5c3Ckto1qbjBXTdfq32jgG3uyvKqBvako2DUv19LVwfbAGknocDBtFRdxpZ",
  "key5": "4zwf3r66PVPfoJ3r4WmrF2D8QxyCSHX1PBeT5ufbX1taCDcTA75jDNveamiGFtXxjsMEkLjEUXmoNhGd54URT91X",
  "key6": "23BYj8LysZR7Y5GbrZs8Yek3ULouDM28vdtcib5VfpNm1uv47NbRahNkQocebnqMSxstJDYr4JPtbydZqqdt7UFH",
  "key7": "TuYBvuTQEmLoFuuJztcEaAxLXxhPySaN3ua553CbXPRsq5GS6Lm8aepxraM2PirXv6sdCt9YgKNoE7YwWgrMPFz",
  "key8": "54fREH3STenNhsPCm5qB7quTBqAGArsypEogazE3dUPPKAhh6R6CSUBdtraWLHcY6RZgwWXSBB9VWVeofZa97q7N",
  "key9": "23LnbYg8MpQdRBhYqL5JtiCMMKJC8nyyWK8oLWuT8x73TYLZwXWik6iwyruCkMFBdDMQT8XG1P3UmtK7rxC7g8Wb",
  "key10": "Lgpk6oRbES7SabEQc6GTrZCsUcn1GpU37mEXeHW3v3QBXC3YVo7sDrVoZgKQU88sMiDuYGzqpb7mh5SmgE2x6L7",
  "key11": "2cmvgaDHESaqQigGtpvq3B6d6Zyd4bsoMr7vAY4kMzhXDV6aL9xiVsKv6tBzEtLkz9Ee1Mmgz7QiPcx61kpN3riJ",
  "key12": "2ZvDjXi59ob3VwUePXkvj65aQqS5AdstFFzXmACU6GRcxhSjtiFqjUmrgtGBbHVgceCRigguB9bMwGZNvhJBJFGC",
  "key13": "4GvcgYRyfvWm8tyX2viAtXiwYubZuxs4TrvXAAvJHXALvDCm88gPoXcydmNWrL41FrWf48zpnbB9vVErsYJzfYX3",
  "key14": "3LibGezGNiiadDBzJZ7fNrUHM1xhwFdqnqbb1CXcvVEEUbQMJrpd37Amo6R8yvYkLr19iQoRkD3irqqtPWuseX3G",
  "key15": "5nQoWHqLbRV5jZNFv9fdGMBddVFbB4rzwCFLTk6o7ydX89eCfcM17RszEb8oh2DaZwsjhcvYaDH3V3sdWLvPCoxr",
  "key16": "2GWUiZ7e5qM6QVHi7i9MSTEh7U2gT7ukBDQBGuZ9x42tZJspVV83XPrswB3aQdaWc5P2MiXVEA1bLfFrycMSCAcM",
  "key17": "2NQW4DfYgkSs7P31EuLj4MAKefHRCFciWWmAkAKTwTh8BvMWf8YWmhHLZK1RwGDEGbzq9TvM51KT6B9Ndf7STrZP",
  "key18": "61UUHedGgSWVAoNuEjjkWeDD6BPfujq26pedBYfKUFMPskFfeDq1fduPYC42snvyQZeq3sSM73nD3Tt2fuf4LWuJ",
  "key19": "4KVheZ6Jash9uYZqgY14r2P9bAwy3Z34sgpWfs5BQpfJdxeLxEet5tM3fNx1LMbEF4MZWvhb2V3wWsTEsAHFWUA3",
  "key20": "48WDrs7iX2jZR6G9RcNTdUNhXnHasSV9MLcE15vJwU3bivQd525jPz5QxAqixKA1ArSeuCSM5cqab2k9biKWQM1P",
  "key21": "2rroFuwuMYEyJhmasZUhkWBsRGTg8PnvQxMi4MxzFyw1tg2CeSsVBdWAJCPsm11MBCA4YjsbLAowRoxYcwy45xDa",
  "key22": "4hdotsJvE5Avsz9iEsr4i8w5Hg7UXCgQo96pZ9hxRbPPcUh7kp3nNH3TMfNWZVagDAmzWRoPRtFi78tP7rnqDwNs",
  "key23": "62Th1Dt81yHc9JwsWkDWKLk7diYAXDVERdEGGjKkcAgFu3JqLboMkBWEnkSMyApeHxn6JZvye21J4G9yavnTdM8k",
  "key24": "2EqKFECFW1YfEBWiMZeQrDxVKyv4TiFzUcXUwsQh5kRP2e4EJhdULZ3aiAwnjUgUyK99c3Wqp73cQ1f9uZ3DDSRa",
  "key25": "61G7PtrCtVCK8MWEeETcPNq3TaJZWATAJhXWMFH85FK6BUR9fDKTayVmJ5FfYV8xQeDhQPozqyiFqkvLLwmhBZSS",
  "key26": "4TVnfCVqXkEhJARd8g4LViU1YgTCsy1JMkvdYha1pvp3YgDZpBd2gh5osaGtWQ5a2GdcuHd7iWRK6TveUyKKNnbT"
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
