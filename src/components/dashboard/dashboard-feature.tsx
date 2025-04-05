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
    "4sk75xeDyR9iGwVgJjGBjvKECK5LnMW8wWgnbzsGcvLMBxsyxxgDj6Fh2MY6aY3aKn8h3bfsz1gL6nc5TyD4JqKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QN28rjNcDpsy54hdBLJU74QERjUWk4eCQprmWyYFkZNrx6kAuzcoEvJMtqfexJ3MWqwmtgpwdSmfP4mAYFf4hqe",
  "key1": "XY7YuGYdo4zooWYTzmXqTVAK9cskXEqQUy1et3c91mPXvsjnUCwNUQLR2paGpLeZdtqWG2WK1VVXH23UGrEJGDE",
  "key2": "3j1xriwjMPKojPVZdcJo1XZTsk6C1WeCycXfUtJDdSVW49qxehb7KHzFwRfn789BgYagEJJuuCx4sC7JzaB9HVGq",
  "key3": "h8C48c5PUGwxQmmvvRAeSzGEFBcr1LQD4ZZZtstzUPeYL9FuYK2b5EFGPPUPjK5HdfLg25znMZmQyr9VPqHRx9g",
  "key4": "4KfUhqaZTVmi8jxoMy2eEiwFjAYe4GL7Dg3WnWGZWeakfHyWSKKkMWs6DrHaYttdgiHrrQ5Ua1QcM32cSsPtgoWq",
  "key5": "3JzDD9qQcjSpdAwWfeaAvkFnSHpWZKCMji6J6md8DL2AArwHNds9hUeoDoQZwQ2Pd3tvXDrS1M5srNwavfBGwz1i",
  "key6": "52mzWp9Jhux5KN2JLmP1a92YHeCKsw4xw7Q1ZcQt7dvwPgmP4YAf5guWA54vPvMKXhEsdyWErKuwwTZeLAs8bKy8",
  "key7": "5UgMevshAvY3J8kjLGeu4APxc3J8WKgEsnbhFwWsoQtxAr1aRihQypjR66tGqjAP5ZpjFdH2hBtj1UD2pBseuJKY",
  "key8": "2jF5jF8C371FEAw3Y9XSoK8RZcSwTnTajHmrCbsLqAtWWVC5LtxKscwzjhSCSo2inuSRKCs7ruAswVTqfEv7mhKZ",
  "key9": "3LL1vJrNo9qE7fUz3Ct9ihEDgSKDTjkEQuGBAs2AJnFieYfaYzu44vFyQbnosVDEr9npVj8sNwpkEgUzFL56MD8F",
  "key10": "26ySCEwPbYwfwCuouXCQLq22R1VYJxfLrJunCqB6mp8QKGi7qJixa8gf4T6MAJ8UZ5MqrQhMtxdtRsgPJEpaeM41",
  "key11": "4VTsBW4dDbHtycjkCXQqnEgg4V1u26vCbJsXEM2cvMPRL2VpVVRGMJfcwHUzphP9ChEtpkS5Pwsz9GkwBBhHhzHX",
  "key12": "ApvsKpmEGft8CL4oypYP7LBpCBukNGbeNZAdouxD6Lir22QySEaHS1U78GirKWxkSnSoTs9BW4DHX3g9nwRC6FV",
  "key13": "2M3TTsQtYr317ybebw6LjnKbTdPgT7cgrtaGaCuBuF7FQyehN4tEbRDcVyWorsgdYLp5sJAKYxFAYGzVKFzGEBfK",
  "key14": "4SFY1k496xmpCmJzbjDLVTirYr9GisE2VfFjPBeHgMMb5Zykg4wXAf6JSZhxapLmqXEaEjBVLw1dSz1sBzYLYmMN",
  "key15": "gJU4KkL3JC6fNR1akoPHmZ38qi56cQ4judmpdz5f5F2qpfKgMG42V4YFPq18hM9mfmZJavAtMUkQhhuQvfrqmco",
  "key16": "2N3oK72bTuM8rRd1bngy6q5NjiiZVPCrvb8xDHJGHcW72eXu5rrQC89quB6DdacQMZbeahHqxmTLd6wYnxnGcDs1",
  "key17": "5gELSCMYJn2J6JEgW65hvgAd9a1LDffkNTZjd3WaAeNZznEZySfyU1xtdzDMHSzMhuEiTkod4kkRtZVWb71RPfKi",
  "key18": "278L3Nmtt43WsPUszfZAfDquEVwfo5nR1aBVmrLtmEiGCpi5nLyxeEhvLx37Yrjk6ercHnV3bkWrbAVTYQGpw3nF",
  "key19": "63Gr2K6DvikpCy3mSahpDGwTbEPkcZMzq79acUvu9Vx1V4m6s7T3Zw4yzmfqEvdnHXjctznV4ptpKd9RVsHzpNho",
  "key20": "4mge6quec8iLGo3e8etPeaQM7idVsYeCqG7hP8r738gaHW9xLJgCFZ5rCyEPBiuhyNju2wPdEnQAVcbMPeMpzcoX",
  "key21": "5GCGBuNPf4BuvVfh181i2Fc5ov2PtVb7WtfVZrXmtXvbJK4a7KgaxJkRq2CzZnFZztHWaVgQ1YpTL9Nn8wT1R16r",
  "key22": "2wdXKtAuuJz3CGcSqKNSXJcnaS33edyvTK7Ri9UUddg1gZeH7F4DVR8bTdbYeTdS8P9YWKsaTpjDqtxvAonagHTz",
  "key23": "3yfkARgyAKdGgYQH1wtLbdNcHhNZLiHQAE7ce5QE3jrEszkrpjjUBfUAiAXfYJkbcAqxxpTuVKqizSB198Vy1Hg9",
  "key24": "3RswnsesP2mMXYe5nSyUACU2kErLggVF3thpS7dRdkSM78NQgUD1p1aGjuRP5Ucn6VQEUU5giSur2FmUYctWxWcr"
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
