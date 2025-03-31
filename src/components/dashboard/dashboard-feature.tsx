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
    "5FaBHnERurNYcMTJg6x2MK6eauxG9zfDfnwBt3ABcQTo9jEiyWQPwSbbVrFheFWfg55gWbuRNrCkUSBgSJfyzTT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsEpujeE2zc5wjh85eft5USdUQ2Ps8gX3wF2hZCfky3qmA3jBnameNRRNNr9dTRWyzYTnNFcqnEBbpy2ks586sE",
  "key1": "5uUZrSppTJLsUVwxHsWVqSdXQi6iSkZ3PtwNPbL5pBTbe9ewDbWFVYvgUvvKJcmzRz8VXH3HS7bPGKXjYjiQ5qPa",
  "key2": "SC5r7yM5ukncPvjKM2NGDKYvYMFQLq1dYYuBGUa9JjJbuxQp5UzutAjWVdmqRsgjD1VoaCH1srH5pE68VumeY3Y",
  "key3": "43bhbHGMKWvduwzxPcyVmGqZpqYtMYoM77BCgtwWWpWweUwvgAqP7UnuDmDE5Bbzizib6MkeADRDxtBLUmYZ2ons",
  "key4": "3uvbVrpZKz3s9BC8LwHMk3KXqK3LT3iMYcD2wizrtCdotxPeMJnEz9gmqi1XtTeP7mp7NEt7wysKs2g7nfzxRqws",
  "key5": "zn2WsozzLAYX1R1LwiZsEHByVhGC7Mtd3JgKNk42sLgHP6bvTDbQL9KyFjFsQ5oE8zVfRvETRtKULKLLyA3fPbz",
  "key6": "gPeBSy51grVPUtVxxUez4iEtK3GiMNTCXJH1hXcVLXBRavg2iD5cEwiWggeCcnjq2Qyv5GthBLB4aDaxCky99Ud",
  "key7": "Bgq7H58NT6dStotRKfSGtZKkhh7mJDRYHLkD4i7bNKejmZNQN3Ljd7DYQscZ8FWjhrc1ZM4U9gnEH7KkQForjBK",
  "key8": "RpMPgE5W9fzULo2ycPMnCshfonj6Avv6eMn8zwQaDj5fosWbyxjdN4WJY7RKeP6ZHBr6fSAGdprVrkLQdjhwJVi",
  "key9": "3ZCTvHCWMFwZM51ap2Bh3xhodBQdgMdCXRq4qfkeZ9m7H5Hni4iKbc3erWC7JT2hPfprZ7tnGBmcEVc4z9cdHBRF",
  "key10": "5yeDYFfUARyccn4xWgkgxzhHxUNBopj8UztN3hMRh63C2SWEUkqNxqSA4P4MDiLrhGCNDmt7MMBPsSbkJW8x8iVZ",
  "key11": "2rPRTqMvj3nzUwUfRhKwiRq9MxerWdiH1nvSam27DZFSFnRN2hhEt17mPsAdGFjSqS4ZDF3AD58tnQJRJTyG1MFH",
  "key12": "4rM95ocjGf3zzGJ1WPNSngsHkqmpmzinEPRzB28CmaK1HXcRuaANr4YR193Yw8j5QYxWetCEytXDgNfvcAnXyr1K",
  "key13": "3m2dwy1RFVKtoTmmWT1CixN8nsuXDutb657q7NuFde1nVWoC3X5E8kvuXFx2XmTj7WbLfJc1jMjkJZZmrNDg84Ub",
  "key14": "4mKyjQiX4jcS3SY9VnjP7RyoMRLufTUSA7Dgz7bEBfNx1Mk6crHD3No7PJUV5BXPFKTXgwq6ZZmGtGwnjtCk5jWw",
  "key15": "5WbG3UJ44kVneFDGYQkLxVoCap8qzYWcgTrVAUu42dLBP3T389osRgQMPmKKmoYrGLFaiJsTFUpZz2CnLGGErVvh",
  "key16": "4yc44WJp3R1qoMyn2ueAukJSoUj5K6RnKQEXDbSnKnt8csePrffoBgTXyhWfyKZntuxywxTJC9dwPKHGxsjSFeu2",
  "key17": "TsGWi6LvAnN6SVxRsDP2NuPgWnqfNoLM7XX9YkcdXHs7un2xuw4hUHXxiqBVdaZuCGSoJKenq7rH1eKEPeQat9Z",
  "key18": "QB1Pie5zPU6BTjJ7in6kBdfzvv6Z6WqrdfP5ctnL5DSuLgqCpRx3XUMGBESuug8RBMrvZV4jeW4S1DkrgFvdZKt",
  "key19": "4bK8dok9uUmsCfRazedgHfo7TQamtdfxBYoQSsMPkWcVQhxjkTE2z21cW4dRwUY1wU1zRGEW2AZKc3pJ6Bi3878C",
  "key20": "4zX61Jbyuh5YUs9m1MPPNfFuXnE5YPuRDctz2DKMXBdczPKD9Z67w5JDP2kLoiUgyzVr8SdXwLTgtmR7CWJ1zRkr",
  "key21": "oih8ZL3X987Dgu9jx5p2gcEspvKuJTwwKwnEt1ycD9BZp4mQs5UdN5JisD89gK89J1MG8CRn5erPSnwh4itReJz",
  "key22": "aiBZFwCAqagLgS9GcMHr6E1h69Frwn47fN7GND784N7uHd5yfHsihEZE2TxvfWx3NBC3ZnufT2MGm1EsLy4wNQX",
  "key23": "VM3nqixjLLewkMLCTtK2AAkLa2jaoWWZMunr8aPqjoNVHUn1Gfo1evrxt9AH9cV8FmGrVWwGT5X8CCn1UVGUTkQ",
  "key24": "38JTXjLz2XRHySqwizjQYGpFG9es3jrAymqXiVX2x9CsKkUSHgMHWLyJ35j8eb525787bnSv31p5DVtiuSifMPKt",
  "key25": "5me9tt6VX5Qw2hfa7UdWvNicmRXtryfGrceGvX8m3C52YiiAEpPQGDebobrYSv1nREbpf9FK2ZPQDLeHjhkMqk9J",
  "key26": "4LwsZxk9DaMPtLhWGDsDNDbngTCKgK5xHwf59aQhtJdLUJdFj9TvkaK8DUv3VKuyq9geacCAcuvwZXgtwjuhugN9",
  "key27": "3TgvQcf1aZaJ8AH7tEYQ9Yck5qoKEJLGDJ2u6kGjJY6LzYZP9VbueqqbKDXB49gciZ2QBuMTy68hFNnKbJbU9AFw",
  "key28": "2EqAg2HRDDEHPkA7LSEDBcRB6wGqDAEy1Pqob8xb5EYVPUeHQVGudEsUxAeeCEpp2GQHbjSHwanF2gBEidya8P6K",
  "key29": "2fDQR8PLwHYK7R3Rk2M73xFRd3QEFzc6DQUXtGVe833AA7XGe8iFqXzg3yo3rNbwvnGqAsyEDf8AEKJufi4gKEEz",
  "key30": "3NPGhwdFX17gueCV7mzSsJfYLCcebid7SUePRtWXGXKjVmUxkCJAiTupWMMoBucxLUpMhMSzV4vuvxuzyoeEhqjn",
  "key31": "51u1U3JqeCC9mEhoZBixwP6vjACpQjAypy4Q7RddrBoZsV8kTaNZj8wGeaSRWhJsohfCuf6xiiK283quE13jsA2L"
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
