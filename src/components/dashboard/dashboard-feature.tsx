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
    "n9tzaJEgPAesVC1xCZiDi6LqGwbFLSUn63boz8zM7FR2fLKoPrZCoYevBi1gGzcS8A13F6drwqK85bMPFhgPyyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SqyXMHXrXaocPv8iF8q65azDNdaYfqPC2RbbYKLikisRXJR2FkQxCetnN47h1CiNDg9bVqon1iyQtQbMHYXmY8",
  "key1": "3Tj21QrxhS3APD6HfmjyyMQSuoMBxssHbwJRNWdnNiAuPrv6gSfgQs4vCPp977zkqSYKMUiTJHwe8CzM9dHQfZU5",
  "key2": "5513XjrRSsgfpRHnYKeda8dMnd34kjQPiPjKZjnPaZhCDhWohLgVf7zggd5pKifjMJzz7Q4jNVgVE7ei8wTruW2A",
  "key3": "5i6MZW45HUVkHYvEbsA7MfEh5wYyQKndkjzzHzTDkg38w7WLbV6XRrFnQxY3KYyDu5pwEtQ69xndduz3dV5GbNp9",
  "key4": "4nCVJECnCVwckDfHn8zMn8gwQ3QfTdaauPTVnyT1yauEjGJjidT5v8wgRf9NscxJ4KZETRboSzKtFEbV2nQ3bTot",
  "key5": "2mZzQJShvp3Xmy4BVhtGHerdkB6ua5CqSLoQej49bKcFtxEegxvZM3vXYChJJdypjd4gAjTp4b435xF5MCFHp2DG",
  "key6": "3N2Q7akdV6vznhmQKob4YfpZRDmyBMM2Pe7pVxJFVfFiFuNfvCkCZXAiCpc88PpT8YrKiFNmmK9e2Y9VvxWAQDxi",
  "key7": "7wx7MvmEhFcyQVijNLxjvQtQbXEVoHo7FbrgMPiwdnFZnQpwJPCD4YLNxroAn57D6ZRo8o5JH7g5qm98FSQWcnB",
  "key8": "4NdGDyzwCF28zMJJwBiauRrBph5oRACzxqaxLm34TTfUouaqqEkfdmVnHGLnddokYCQmVuLXBd5yD7UvnAVfdHCF",
  "key9": "2nK7yvNBEKRuD2He5DgLAxq6PJ9hUcLRq2uEtcq1ckBW7NmcWgPyc5JKC5QfQJSBnpt4qJW1KEXGwteMvA9Joo16",
  "key10": "2WKyvpRbLSxRc4kwX2njB3eXFhBHCRN3xxhseJNS47ouWFcw5LwTNrqTfbm2bx7sFJnczBwjahWFYqn8A8V91TCn",
  "key11": "2SYzy5VyZPtpw2LayLoNZf2MNQonm5rq75MYcYYRg8UpSjvy8cNB2QiwJ9FHSiTznBPZxAwS38u9Xi4w8ZVksvCU",
  "key12": "TL274Fw5P7phEsWLsaksAVR2ASLswJEmsGXJemn8GgRfuQZkYrBzBwcMpAWxMXvRvudzNix9meUPsKg2KyrjFar",
  "key13": "5Hhn8NB39LLqVBaoHs1i1fEQzcBU6APLfyvCLbgEiNDiYm9DJSpuoTpaoDyRDdA4jvTQ9x86UhMfcvJCLEPjPM6k",
  "key14": "4z2X5FhKccJbrkajjVkiP6HX7hwus3uMSPC7ed7XmPvmCJSgYFfXUABjc2Hiykab7hxnbf9Emyniw3S427ZVq9Xf",
  "key15": "UDNYHMXbwWWAqZxzbiv1eHshfeBQp1QSjrEaciygo228Lo2tR2KWyie3oFwJoRfPe1vnNVbMhEw1WCVhe25jPp9",
  "key16": "2PQ58kx2qbVFfEjLNjdUKVzaCN4wVBRBvtRY3K5zyhU1x73SCyXMk7G1ovBuJfVzcFRLWTssLB24XkzqjMyiVjLG",
  "key17": "3BnGfT6VpryaHoFj2JVR8kWaZ7tvjLhYurqtZ4x2S7vzGg4juMjAhe4bx6mfCXeNcdQeMrBE6ropjY2uct4XUzpJ",
  "key18": "oW4mrMTroUV6Di4hsZYcmbc4Aa2V1DzueaWUuTptCNe9aV2zM3kCsM54NscshH8wwJmMQ83usBFGBVwt1WnvpfT",
  "key19": "jRGsZrnwZNUDGonGEARB48w42e3JAhBcDCT5YXX31tob73m83FPNgPtcVkZqRQX4farTNgQ2YDM4dVmxQMCqQaH",
  "key20": "2gPUZRnKKyFKpjQTFZf2B5E5GeWn8Ckth5HypeBcRebEiCokBigxzZwcqFZMxk6ftySUsPU1YmFqNcziC6vG259",
  "key21": "4BodeYZtpMCZdQVbKiKAaZ5e4UMshHQQTxow46KcVNBr4mLw2KvRiAnFgVytzvwfmJQhHujjLaghWGetHZky34u9",
  "key22": "5fvSwh4XKV5vy8qcnAw38efe9aLHEqEn8XdCJPUhreMnJbaHByEXo9oN9e3y7yvcbUUquLJzg1r6h9JRFoSrY7gk",
  "key23": "2meoZkzDBAyFMs3gDjWQogdhr7ySPb7cyVRna8UcY73N5Wvx3ZyUc5Feuqo2VSNteKbbA1khkYHS9jpYa83y8ACH",
  "key24": "3ZWe3vJHWQxikidPqEGZQUbDxfHcg8i3LjcZHuDWEc3QAL5TbWb5uMUePg48CgPatUi55V1rSJF4vhGLGqQz6TZK",
  "key25": "33HuWJf1UiYfhbRKtYrC6aQfskyWBpL8sE7PKrppGrxVQHqAsP66juH1evcJcjgTC4PErGi1T31Mkiq5aDRSE1TW",
  "key26": "2hGYwZDpKpSXGsueKkBemLXaGmGbk23MarsofGZ2RP19af7rQcKfKB1ibpvMTPQB5m4Qb49sUL7S7kNXCeCqwUmu",
  "key27": "5F9mPEXjhiyEbHxmUGTDRYyaFjwR1dAUWigNiqvu9f77KZwfkhgSkVsBqXie7b8Pr4a3pxmsFuGJUPuuWVbCQRLu"
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
