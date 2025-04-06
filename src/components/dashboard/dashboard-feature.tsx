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
    "nTMiuSpvrFsBTmnNMzbtMHdJXCjQvXvLXAZ4KQw9Bmn3JAoc8aRTgd7k1crKAUZoc7jBFpbEsmxh4hVrVHUPbWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQ2DEaa3Ez1XtBVLbXyycJDGBexLc9Jvop962ACkhWuu498xy8TfWu4tHwDe2bdM4WYWsJqQj31ERGDf9Tw3VRG",
  "key1": "5Y2GELNErQCfJdGf4Wf5UaqyjDsK6eNbc1NRnkSrNw2xSwB4oXLQhJqDH1JHyBjLQKgYxZ866tx6X5dfHkG3fBV7",
  "key2": "5sr7brUA49FtDYGAFWYRMG6C3RemWLFA6CH7TNHkz4V3HEHawohjmeEjbzikGTkKt3fgMryzSZgXMZYeZ3u3FhEh",
  "key3": "4pYJpJpUxSR28WzmTpFt9WnNRryLMC5P95yXii7avud6q53pSqEyYGstRQjzVGRNfMdhbXNSHyVfYDNrss6M32Wu",
  "key4": "3aAADAp4DktaPCwDriXDHaR6orBAQA3WK3QhbSgsie1triQiokdAFriLu2jJDURRtU11oXymXar1RxKvmVkaySfM",
  "key5": "352GDiS7RRY8WuNpy3HxE322kx43hVe917UYR27g2YoCH5qtrRBzhQHjYZoNxm7uZRF1h2Ay8kehUBDvGdt5wJGV",
  "key6": "5YGTSmApQgrybsPUnMTbU7EKLF65ewgD2Ghg5e4pAvV8sndkbt4F7dnFZk6oDvWt24UT1ZVLw9ycUdRJQbHm7ykF",
  "key7": "2vUyRp75i8D1cPnE8jHhwiYjoxehKA8F5U6rT7pvkLUSvnsW14DGq3GdEqiCp9sBj9KRj3Jstpernte1W1vL6yCa",
  "key8": "4fAyrPUot518U5hXWWRT6s2tp1RFMVTDKXVR3VRZNyGWCHsTp4NJXRchoywenTYf2yHnEaTrbaM9HMb9xs37u7q5",
  "key9": "2RRYh5jbQK2TVZ7TsavNazoGyfP66oyEFuv5fQKniR1AU4fRzE19VyE5sMEy7n3UD8nF44TzCPhUchick6UPfMA5",
  "key10": "59JkqtjzeS7ZyZB9bXLemeqcXTRPx6maSqh3GmsLDRoxqJi7Xmi2sHW65ceUiwfgKPwbgN8trBWLTdmjGR1xJNx5",
  "key11": "5PfCeyzoYdv2b5pSibvKGXaNmyRozcYsS4hpgQyuu23mnN4o6FtGG7kvspsjCr2brxaBr8gHM3QA4if4ZSocUcD1",
  "key12": "MScuNdNwn7mnAMPnoN3tkxkEjeAE5LuX8QcFrMVtXfkZGRexTz8Kgj7ib7kxEAjoC2io3oEgPAL5joqwkNqWpub",
  "key13": "5CZbnZ2SenJtdDN9xBYTE2tsRnkYd33ywbYCnrWn4P31Pf96anW8EnmwYL3SS22xbUKeDi7raBCTNpGWy29pkeP6",
  "key14": "5TBfkd44UPzwC3CmidbvTyDfPWym6YfRTZGTHNfpXFV3fdhBWfxZuTBPFHWHCHSQY9Xcb9UHAkw7tqob6Z2KhnRG",
  "key15": "3ZrPjrysWf8MHLUetbYNWAKMsVNyFsQianbLrsQAbzWPuagbMJor7DkFtXGWWcUKsgQ2V7LZ4b9PNLXEJZj3L1K8",
  "key16": "4abBzpQryxHPz2H83rKkP3vm1Mcz4E3sTDpY5ci3LEobQe1WTP7BpiwPnf1h4oHie6JXjyipWGDcTMz4U9pzFJ1j",
  "key17": "bBWpKnwA5s98eZc22R1A4tbLjUtXuN7BS5EBdbNQutUjJJMqd43m7KP2QKQCXTp4sevkUnVHXHCGqsqfY4jXL9q",
  "key18": "39myEbZkzAWQ2k5ky7wbC1HAYbEdEuZ3Q1CNDcL2x9pVQTZDAFtYsEYNfYzELeHe5zyWBtrciPEi29rLVZNN8qgp",
  "key19": "odkvS89uPFGcqTF34g2URV6pBMBi4P1oFWwBoSEN7w5cNYV4uzSsaixtpDL1qwQrRabXZu9Ay3hRWxdm9GSfzYe",
  "key20": "4Kwzn8rqxicv7Xczzo38NysCa9BCoK9XhfBWtmvMhPmz7m7DJM8LKiRsYQhRkeNGLaDfskywbSMk9MrsD1GgyuUT",
  "key21": "5BJfou5S7hN2WM6Zbpk13kUcZPDrXmNwZQiJhrKzjTvf4YGKWyTH7nqiaYwc9jedDttyK3t9iNFtyYrSvjDb2ead",
  "key22": "Y4qY9nesF8aMNGTi14CJNE2RSNYCSZJqyyQ44JSNtgqDfSBPLr3XXtZoV5n3Uf2vqyKCfYayEKRpBcKzjy6C4TN",
  "key23": "2j1R6Map2iax2PdEp3YPGzVSzYuuU6hu6GSj3NenGSsGB3P648kAVqn5ZpGmpaoasebsPijBUQef1bpeSRuvRjYT",
  "key24": "2V5gTVpc7A8G1r6mXHTjAVWjhodsE8nbKBQGxfz3AGhNuzw87fQpNp6MHasdd3TAriPNnFfJhwRVYCJLhBcoDCSe",
  "key25": "4HbrpE1hFfADNUbzi2TSMWxswu19DKtMKzpEWZfAhSaTYq7EtDi8uoHeWQ4qfHp3w67fRxUicRa1ZZzo55ePfSev"
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
