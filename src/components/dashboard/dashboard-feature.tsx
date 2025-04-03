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
    "4xX42QX2Y4HgyLYnoYUWLfwCmcmgfMVGiyYELm4hvPuT9BQB1g4enT1evcRu966tyoMTAEeNswodPDknSnwYNYtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wS6TTmvEtAftWA2vpCoBUG5eMZYHBzNcVYfdsxVdjbBfStbeF5nbfi41CLKp5bKG8eahVpUU9GRxbzRHoLswa4a",
  "key1": "22FCb9JsWNukmsY1RZAyrCkL7AbtMCP43mgZAdZVSU3HDkAznK1TsasE25qEU4H96LqeEt3PVVr2XN5cdPdKLcuX",
  "key2": "2DTXZDkSpiMc6hGYArv3MQnAXkgMHLoNQdFiGPru3WUwZPMKTrUGzSi4fb9iGMYMEbMBgxsfAz5NrcDHUmWDBog5",
  "key3": "5mZaZzXsqKBPFrDrtnSLMfG7TjLhFiH4FuDa8V9PgHAFpjrJ3HqCoQNcXyZBTgNLVATvhhckd9DvxU8eiDLZ2Dcx",
  "key4": "4Bgv4wWFGXzPwJ8LyiPcAzhRXJimcKwebyqnsBV5KqHRuMN9qLBMjCZUuiqS4zLUuJ3cmaSrSia6EDoBP4uhRBEb",
  "key5": "2vk4PhrUZepuidHxAeqPshEosoMjqCp6Afvd2mTAmd4MJF5awhBPKh3vyNozfLfHzJXSarFYTpNJr6qEgWCRvfyF",
  "key6": "4mrXScNUyJdBoufykU6VxRdt7TVxk6xjFUGqHrHApUT2X6KtCqvZxT4nsZgESe4gHeXgwr3KyqKxw3rS5bTMSiuW",
  "key7": "3WYbv1f1yaWq3rr7YgbSfrV7jJm3k5SNMUfUVUrw4mSxqWdN3LpVfXXrnXZhVxm8jERZkvqzR3xrqDNJDKHQ3HZK",
  "key8": "4tbkVWYBrbwvf8ZK2o43pcJCpr4NehqyJ6nHfsUQRPLWWL6rdWPM7gwVQAKEjA9UZ5Godz7xWG6KvExrRfZZzkVw",
  "key9": "23vC5CW9m7heo5u7XdkXbMgHMS89tLK4X8REKx7pAMAPHhXjtywLqgWvw6DHbi59umBWDbpSNtPRrjDnTsmGC3cR",
  "key10": "53UCBS4a2HuuuT9sLCgywXUXeRu2g3TJvwmYZYmG4LpLP8JRYZi6K9pcBbm8mvStAjMqUbQkT68j1KJLbrsU9hBt",
  "key11": "2C7jCstCu2kGDCnBDDfyQ4otC1DYsygj1LLihdiQ56iY8YP5xG47X23VEnpjd5PEFsd8BnaU9BjbvYNvmdgGgrZm",
  "key12": "4kQrHM4GQgw4CRLSeBzfz7ajDBUD7gqq3b9yBGci2CFnwwjdn6m2EBCj4NxssuNnR369AKktWU4zPmhNU71aHM21",
  "key13": "2XR7vKxq2yJ91wT8pTSPTMLZMX4to5TMe7d8vYTRH1vZP41mvCEUUQNeRso7TUpUDRzp8gpgK2JrXaVdNqDDoMn6",
  "key14": "5nXsng334suJYfgtrBZx7doWENh2KwbL6eGtpbeJhFVqW3beaiYmphd7cLqcf2Fy3v2U9dx2eFxq1DSMSYwXFjPG",
  "key15": "54wiSz86yzUm9LRhndnjZcDZ4FbPXKxSVG5wSm6vtVHFiyUJLbcQcsW9cY64Tb4Wi1xGfckTPp3Hij3qqHSkqj8w",
  "key16": "2L3mNCw9hS6DmwykPKjfqmhmTTa8mMPtyL9M4gvxdAoX1yrqd7PS3tiwdt5y61UZK7e2XCHi5eUtjefXdaWZeHau",
  "key17": "492qjMDTMoG5Fjsxv3yo5RU8P9eXbnF5Tvzku6fDam87C1oZuXpzBj1buV8JnKoiW5aCs6C6pmMPFYCb7rc2ek4k",
  "key18": "5VaG7tT8fzPsdjRyRKKFb4oAM9r3aFEakb5YB9zbB257YWQrzbUjhGUwG15goygcdEVxXZdqMignvkiB6BuYL53b",
  "key19": "4VS5c6Bc73VVFoym3igrQTAXYaYXDHe7Sn3DKPggSiQ8RxHiiBPWbS9gMmkejqNXURWTnq1gWGCPZycL6eTELhgG",
  "key20": "3MdapBWbea1BBHLwarmvFgo6dgpFjcqjP1bqM9z3FRf1AhuazcpHwH5DSzY14HBx7DzxsJUMdAUi2xyS8ySN7H3L",
  "key21": "5EYPpgS6qoBnqGVwWk45L5m2Ps2jdUgPHAno15XKJxwx2Qa5Z6QF6ZdJ1kVpSPthvqS84r5uiuJZzw7rrKxFjTLh",
  "key22": "43g1Jht8wwMNspczTQKL5cVU2rvj4ggdWvidc5GThFdncakgF2BDHUVRD5KGT7H13agK2HhHapkDij8z3xNqTsMG",
  "key23": "5Y3Gr4UgzaZw7Yw3W8uLugM78W8aZJpfLjbhVwrH6CdAA76eWAaU9YWgTFyJYja985D2bUB1EQWWtRu2dLunUBxe",
  "key24": "4i57iqNW66BWQdjjjxte4vejFKj3HnspaMtSRzo2MN82TfDxfroHYeZPTAEvCxW1HdYLeZS3Uhkn4xRCB8fHPxXH",
  "key25": "3kaQrxDCFwY9u4LUKpSVCBE7hjGpvgQQVsRWH8q1etn2QwN4RGnpeRBEMyGiGMXHhDmfbnSEtRXhKfcw2uMpLsYD",
  "key26": "HkhTYG4FMVyUDbLcYf2SKEcwbFq2VQm3VzrBQXYrFb3CKhqBCmGwTuwnUnzTX1DM6WFw4GUERNPtuRH8ZeBQiaB",
  "key27": "2BxpBChvp8W3gwGtPtijzHSsq95Ecz5hrVXFd7vUaoLLLHGnuDWHuZsxcP3cDveaUD9MJBirDzh8KvCXhEcg7DXQ",
  "key28": "52EjvMWh28AqfRXC7fMsHWfmh6aRRNy2jk2JYELXABLoZjnrgKXUEtaS3nGWCJqocHnhXCaKcbjviPit4zBLvTCQ",
  "key29": "rXK4CfSPwQpzyhXS6MbY9FrgHm3gJjprRAQJStdeQuec8Zx3W7xR4TAFMwGbsR2jL1dFGHixtdqXm9MrT8z3BPb"
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
