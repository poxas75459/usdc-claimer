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
    "5aDE8qt1QMbUhBvZUuweZC73JT3LmLRGPfBoBStgHtY3pXEUzVRHVSJVMTKc9hBxDQjaSfRV2cTCR5LnCKfqpfq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vJXK9HUiNzrSh3c6BtDPN55aZg24H1D5E4k99h2J4X57wu482zzSBwiTrLVvUvubvtzGV15ioZ5ePdPcoURvDge",
  "key1": "295ogwwsvz2STkCRvAKeDMTuDJRjwDPxrQYjgNaS2PqL5J7SZJMksQwzUyFv9YnhwFCWYfvUC1DQvdhB5aqoPL4k",
  "key2": "54VsooGHqttYBzULXixK1n5sNuXjVdKWVv5b8p2pJRXgVGUyH2kdpeCRgAf1dMW8AR3FG8VbERCFBgqUsa1EpHDv",
  "key3": "2AnyKNTNHxjcpH9pm6KxejAamLtBwnkNK7pLScV2oFaWs3C8FK525oJa25uzwPFo9aphqPhbBdrgs8s749xWt2pE",
  "key4": "2EvokYkpW5LC7dsQ2dwLp58nwQhg3SAwdwRjKRuiucXMMMThqYFLPejP4Gb6jyHDzQs2J9h4nD8WymyVuj9iCzbb",
  "key5": "45FqvDu1d7qMTP5qwcH8HLgyyjhtQfega48e1c7SEU5k7gPjS1qtvfq5HmieTj5yKVJALEbAs29qcUhoNhBjiwqW",
  "key6": "fjqZMDmmGmtGQa98gUy3vQgrTASv5qopyhwsz4NYqoArwtcHVGrPfHwyEZJ2xbzwEnke7VVgpCaL99TN28Jidwr",
  "key7": "6GDG6kqhD3h3wyvMW6j1LVtGWJ5upL9je3BcbxT8bQ5MuxZoRpHFvyv3bKnaVskq57HAzZnJtqQFkFgkLrwthvx",
  "key8": "2RV26bGxg4h1iRvTcWXPAWJPC238tw42Rui4ucd39C3SPa7YyFqBZvj91994wBdz5hsv1pNF9pGE2jMVYmtQkhZe",
  "key9": "xX1rzWDTGpfNZY1oyVB2uDCJEskytF6ndtn2jYuh7UKk2NaUkqyb3SxXoJ2QyLz3VUS1cJT5ca5MZKevv4RECZ3",
  "key10": "2CBdfTM9MENMLsAntaEZmoRurxYn9wdjCdtbVh5XNhhCszNAVWCTbgUFHV1UFbNuJes4gs8aUK22HCBrpxgz4rV6",
  "key11": "9m8u9wiYznHkmPpodt8cb1rvvDoGQYmTwkS9c7zFUafBFPMHHd5gVQzxgNjnRoYEDsNxsGY9NTTt2Wa4TEf3F5y",
  "key12": "quxDHg4ApF29SzzXZCjPo32PfvXdKtyfTA2ak2fQB6mDFbqNHCSYqEu2LRNas5NjPwLZDeXxUcUSc8jF8TKeJg4",
  "key13": "4xthEU8ip3hp2YyGKraKP6yuDbJfeAo96YCfvQgJZdFYMCSbfNT65UvE1xyvAgransMg1VNy5tZPkRGhMCr4g8kL",
  "key14": "2gAW8yC3iCKTqwbTvR8SH8FADvpMPmZKbHCp88tNHtbPFdikTF7RKVRMVyFeCsHm2YQDqEzZ4gPU3To6VEx1BAGG",
  "key15": "NXoxiLLTG8Gj6jAYwDQLapwBwzcnoeg5zT6ZdoG1UjSoRSsQcZVCPWepr8dT1BxpgPchVtt3LsXQADixA3MoSoq",
  "key16": "5uDpPurSC1KCPJnD1pRVAFhmz4AET9wqww87qWHq2zGXYTTmvUkKv2dGcNXvyuHFY8MmqZe5NLHpGdbsuGpb4Mda",
  "key17": "xV5vTJNwYrvr1BpNBGG5qiHwssAd7YQiUtyj7pDjp7bL8sr58UXmqRJc64uhRDdaNpPmt7gizw7Z6z9V61rYBj8",
  "key18": "65dFmXwDXWK7mAtGbyENtj1scdFiosohnEpgAQrWyh7WCLL3qCgCvveh8t2mx3wT1ed1oDgBGyFcKtz4RnmGin7c",
  "key19": "5FeTrYGVWCsHzvNE4f4W3or3W3bFTz1nXkbNcMtxBfcvWzxLXL2S8WbXWLtYLbHJDX9uWfDKwektbxqoy1G4MU37",
  "key20": "3o47Qd42DZFbPfpnqeqpS42rgQ6Uj7G4tr4jpJqy4rZjHERERxgqU3vEn7fPFyQoGTbjQzMmtcyvFVKNmweqVmhF",
  "key21": "5cM4dDgZ9Z1iHQuLeCxEbaRK4V6wjMfmVKcGHPNE4UNtgJYTVqsivTLM5T3Uu6myzcVz8yHo7ypbZNz3EFKoD6Zs",
  "key22": "2dCU9RquTzYF2gHJ4oHDjsYD4xraRUS4UQFLeDqVhQLsXfGPQEcbgXVKbUBHV1dZHG4zxHtpvVoswptPT2m8v1zU",
  "key23": "PJMa2svKk1Awt44Bc7E9iJp47jWvEbDPojx9dgdXQg5rwGcJz94K6vqLz4xGKnk51YxXLH8ZodtBUZFHHk1PttD",
  "key24": "2Bxqt9LWpV42JGWpoNuvEDtJ5cydPVBsqWyLQvJC8gWMsb6QHXUrfCKL3vdd9ArGf8XfbTssrNtm71zc1pLYSdnQ",
  "key25": "2WUrTZPmwzCyBrwnPyQiBr2zumKLP7Vd89917ACnwLDEwth6yp6Bb86ndYWLYCT8LFoiJctkDzwnG6gsn8zvs5D2",
  "key26": "pGmh7x5UEBNtkTgk2dnR9Cs3Nyhh6kh3PYPvVa5Xikdk1aZ5YkoztUWQbBVwXicwBcALsQ8JTehnc8X78P9oNGY",
  "key27": "5FhV1tc6j1BxH439Um2XCvY1UnyumcLXGPsySHVx9655fQycTHL4KGucEV5x8dwS9orVs4BTuhoaDv66cMzu5eeW"
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
