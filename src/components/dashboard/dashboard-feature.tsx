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
    "5J6JcbxX9z1dmxiVHFp2gUu857tuQeeM9QxgEe3XCmLiga4WXyMk8xtoD1UKRAeAccohY9pn8fdE43sW7aRA94SB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMzUezmsykKJBbfu2rFL3UwnQc4w4x83bhKefqnyWCbb3m9Xu4a5odJWcbuErrH5tFmpQCdk4agj6u7WWpPHb2f",
  "key1": "2T7NctPKBbQyrGa54sdYAKduFNP5ci74RAvhoYvzUwMMXvKF1oUNjjfxfo2X5XS4q6vEGjnNYS8JdpwD4yRTyMCx",
  "key2": "295v4RJ5Si85zA8RQcGxo87LMuEha4fWiKXG1TUQP4ahptHSM8BfCe1r9TTUGtafzhSNbcG8NAUy6e3wBW2dHZ7E",
  "key3": "B99iygvGUtn87k1eYNCLcHy67p8bwH7MCr3MBpnTp9j6En1ffSUyQQYjZQdPJAj2pGqkWeN9u6KjodsBbABoRmh",
  "key4": "3skKCgj9bJa4Ui6jeA2sxEejo1t5BBtoncoy59eiSHjf2vWkvJ9Wjg5NMFo6W7mnPDQe1MwEcFc8sfKwbcUaWZt1",
  "key5": "5xzPcZt8n6AanhRa3eYM2xCf4ipKTztc2fw9nTtNSA3ZgH7REaDp5TwwHGB2ncNRhNhV8LvU3K6vzGhZ5uBYAoCR",
  "key6": "FMyCGNs7cU8qTX3gLyobjX2eeubySEf5fXuuELcKYH2mmgBCj4pWh4C81wcbjsmf1yiimAwnnCwkP6FqfS9QSEE",
  "key7": "x593LLSUV9DBimb28bPGtNFyXAc7RHNf6GAc7oWb1mxSy72Ktsxk6jmZDowN2DADsDSthEfjF7na7V7djJLdkFs",
  "key8": "V3XQ7HsoUQcgC8rjAX7tcxsapL8EH57PkL4MQzSkfkG8k9t3iDKRHApfvM42CSJpsmfQ1GAruXysSHV96YCTiTB",
  "key9": "3qC6UFcVaxFfQdajCiPsUnvwAZDFQpFcntx2yhJeXsTNyNqkjzR7h4t2UXnSKycjuWw5SygejSsiCgJTpNZ3g6ai",
  "key10": "2odbP7sTadYFTosQZ8dioYtkUUtEmeYZSs6EvqhgqfkKHB7ZXkAC3AtSu1mKvmAZTuoRWzFiFHxe2LcBCS5VGLdn",
  "key11": "465HetoT38Va15Dncw38yuxq1xED17CsSJQbwesYVECmui6UrjG5jYkGBP1E3P6Tdvk5FqVCVHxae5tnToeQiYE7",
  "key12": "TxV7FYJuvExhoy3rJDcX447uFS6WuvEuvQWEtfNf1f4gVcSgS1oQefumMjviDvvRDh3mqv2ye1eGxYnzb5XdAMf",
  "key13": "RUWZ42MCi6Z7EwMhhAU2VoNFkgSLJayrLNCS6kv9DWYhohpkubCM1AUXW31ENuYdp1XK54o9t9QnkLHexGEHj7f",
  "key14": "67mVTRbqHvsr2AYXrRiZyAYtbY1EaBHL3Bhum1JVeANAuSWEAoTFtKTA5Gq7UdNv73VWC1GidSvSeUCBv88ye8Vk",
  "key15": "4ms8Kxh1jVAcbNeW38AeoYfGAMqWPkcLoQtanbNTEhNLczud3AkuiXrfsahB1TqjjAm9dfRNuJPmjArWvjhMa49i",
  "key16": "42paefnxt9c14xHs8upZZ5E9WEfSapyHJ7cLttKp5T21ez4yx3T1xviowZy6qfvgsKjbmi9bTMD5aCcGGQZ9sbon",
  "key17": "3E5qjuvu4VHxpaK6uEZnjQZtXY55xB6wjAKRLx12hFhNPeGtRjbJjHR585FcEqzTti1gYqamQV6eyLC71mvyY47p",
  "key18": "2HB33YfZade6t5ry693Bskz4TnaqXbPhx4qcwXS7Bv9vgwD3PfhL87gPRTJrVpes36no4k35imawX3q6VYPniaTG",
  "key19": "2rFh7S7mPAFVKV8pER3BpGKBbo2NKcBMXVZVAduXBPqALu6aQucMzhn7VKaTPdDgbkWojhNXfs2b6NqKTXNrJ2gk",
  "key20": "xXVXNJgvSSh2imBH5anEuvJbnazMrfMfzohq1SRBUrdAUiiXZ9LaRUH8oSwwpC8MeS4xPTuXNXznZRqjLG1EiHW",
  "key21": "5frVtfZz3Yy1yTjcketQ4PY8g4ixgdayjD84WzUjYDnvgVsf5y8CHmHRaCkPiCDshaunyhhuNgdXV7qTdAaPFe3h",
  "key22": "zcskrZnyP8kixBb2cFCeT6oWzHXnaZUstHsVzveJhf5KQo3X73QooBFaoumcEe8PNPi378S9baksX65C64yH3NE",
  "key23": "5iWenf6dV7tiEJe9JLhiFpKrznQAmUrSSRTx5ZMuTRAsgi3KTCQFrMXHKQkBk1QqZiNvVixiHCc4VCTWrBJixzXg",
  "key24": "44DFkvy8urkEX9gNkM85sVzYvKHWwGJbSv55gPsXsz8VLjvihD1KKbuuek6BvecbdaMpr5okNd8dbwdZgY6Lscxc",
  "key25": "1281EEXEwRvX9YhcDTw55qZHoHEMdNy2f4fm85qAPSDVCzGUdvT28bqmr4psfjLdMusc6nJdckvZC91kqbcVVNoB",
  "key26": "28RrGxsLhiCPuMPo5XRAFzHQag5ac9nKPek8wf9RQAnThCKdJsLhUxZJyQyC5iPv772URRtpPbYhtC2oMDnb8FCf",
  "key27": "5uAUk61nzPGAxiMwLxiFzZNR3qLEcN9mW3LNkv3kMQ1tPKEKviv8RdMV24TKHu7vfqZPoBCC75b2rqntMWVmnDR4",
  "key28": "3ekjpqvDWE3Nq9JHcbLtf6ZBqjy6TU3gQUSXj4iFNVACcwTkv2VRzfeWTQwfHngsAkeYo64tPrKGZCKeQLT5c1J",
  "key29": "2gcuZi35m1RX6XsYSLfNSG8tGfErnaePso4qr4h8Npb4kRsECFV9ShC3LwKq7xcKfZfG24jh2rFHbPvccgGj9PT6",
  "key30": "3ZZ9x5xqBqfhiQAdi7sefPLWRGHCgPNL8zE3qKhQMrtSQHU67KEy36DETf2Yd4ybHs4CfzGQF184xGLyPdGTcMy8"
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
