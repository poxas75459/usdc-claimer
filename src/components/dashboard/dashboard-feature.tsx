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
    "2hkVSY6K5MhvUUzpn6y2xDyD4wEh2Cx5PmGD6VQ7HUNWrohEKgQHuu26TsxjAvdKwQ2dcWFDnsffpG7Ng5ex79tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQL57YoGY92ADuwRgUSoDLFE76MNyfx4fBPMGo1TYeeDCUUSFM4aKFk6pgXMELuCUW9uydnHdjsY9uKBXdJ3nv4",
  "key1": "BmhbYBgV2QgLowcvH3TowXCYeZTRUSMuad6LYMJ1b3MVT4mRVLtjdSorpuJSBQeqfJ9TDtUGggjZ2eSjLWZ5upP",
  "key2": "3S4xXLfZ3WNZuvFN9vEwJVHDnXc6ipN2PjX5a37Wv4S2xcDrbbxnHBU74TDvc47hhDQrBNew13riMg3ce2sHgJNh",
  "key3": "2MHrtQsL1tsr6cBrJTKo2kPcDhwdShpC57vP1vE3T39ainHKbHodkneyG9jGXNyggoY5ZYgwhBs3Eds4BkQM97sb",
  "key4": "5xx4GzeYeXtnGf17LAwgApvcyEUN2bUjNs823geDpxxrTRPDyvmVZDZe66PorxCdB8hzhzbEm1fmmLbHwes356vr",
  "key5": "dm8APpTQ46u8DpXZZNNMPdLH1tmAnLvCakgp4JRR4krpcUUnbV2NVz9DR9Q2GWCCdfCfvQKnnUXHNXrcf6SAuBD",
  "key6": "PLZ2euovMfoifkhLhXdNSbUTVSBFKi9QghucJfdW6DGjZY5zQnpEXMuvRMJ7nkFGDQ4H7XzjDDLCvZzuMr1p71G",
  "key7": "4zfkFRDZrrkHkgDhBTc87HZyrdH8NvGye9AqrLdu5dGb4eprcZej9sGonj3rukeDQrhzMBo1h4q63VJQNmqzkyvo",
  "key8": "3r54ZWVoV3iTNkiymVTVYXRNaZXrza9yey5uTRGdz3LM7PkzGsFvBPyFDmyopFRRAD5Tgvht8MgVmpf3Rc1yFWhX",
  "key9": "4hoDqqWg9T85xtneaNKhmVnZBqLzSxm9NQkCcrv42WZzBajduVsmVYMCJKkkJbXYLfAjXtKrhavn8Z6PRWW1Kn6o",
  "key10": "581rtZ9NbPG8VB2nxmuGvo1wC6ZKYDmP9gPqBUknmQcM1x8nzz9sq3UFvnrfKwe9SBDHSB5t4iKeTaYcB3aH5Uvx",
  "key11": "gLv27ybG9eyneeS6Eco44jopNRPEvDDdE97xuDd2FxhjeRUFHqCEhnkTchLLRTy2qr4BfnXguq1H3tzcrhbhphT",
  "key12": "3vSGCkZu9PdWzwhFGMQ5h9AcXuEGjdi3RyzHY4vBKTaNDdDsMqmRBm3j5ZCx8EnRaYYM3AmW1iNCpHo4agcu7QpC",
  "key13": "5MpQXYvfcCQbMyVnQpMn89xV7Vc1CGjcWdUf7SvUMXDEcTUSF8oAfkaf3zy2fZkBWuEV8WcyYMDrqXvX99UQx3k4",
  "key14": "2sAYsJmTsJ2axekEz4ZJn8dpSNeonthvqnGQRGV19KARcM3GUfaJtQ7d634LBebv1mtDTSKdJHyJueiGxjftqnue",
  "key15": "4nNTvG7BtAqkcRQxhVeEktmytBssBTEMcky9eKdJDZDydHqTJdKNpSzuwq8xGe9AGb9fqNGjBs8t7hZCUUcfrTEr",
  "key16": "3PSkuECCFCjjH45SBwXxyvT9cm9aLnHKnYa1LP4VgdozTii7gUcTqyoJ24e2noNtK9QtZdBGLjBtruz45okgr9gB",
  "key17": "3Uc4ELZmSkTd22Zc3vL3kdjTyY7ZEo37MmBeHmTaWAERQ4q3nVhYTBoWJ1agWpRqfTVzGquY99pCJo6b98krbLG3",
  "key18": "3qqiZA7qFfEidhZ9DZXsY4uSchagaKTRminixbPaGcPBvh57yidbSZnhqMrEpbzZA5Xqa6HF3SCCMPT3orad7AyP",
  "key19": "5wotCaU11DSzSQa8stso6ZFUgkN8UEAwSiVKnZCeW9oRN9iU9sviyAThsmQvMcppiJ2pFMJtPv9fALDmoNMgHPNP",
  "key20": "5V2XyggM5b5UY7WaDKyDmzfXc7mvGDbeBxBWeZLD52NEBXCRP7bsSpDc68Mv6NW1hRwBKyrbyT3fWgEArpGAJkK7",
  "key21": "2Wi3z1c2ZpM7Y2R1BS6mPrdqzt4ihKDVJ4ptprGWSfGDQDqjf2gDsUcS8kPr3yjmhH8Q31cxaicmLh1pj1XsmGcG",
  "key22": "24j1Ux51EdLRs3RsBXTbg3JqDxQYM2G2kFbbtejs9ZdT2dgLdudkbuk2VzTCibXggfmaeDdKZT4qaYwzk3ChePuT",
  "key23": "5GquMRqUGnwCZC5fZ2VpqU5jXitpgWF6w5FkGyEvx9WfLgVWK9Xu8Z3YeLD8fHFWPd2y9QYkTkUTC5hWrVnYHgv",
  "key24": "2KXiSeoCLhZJwxSA2aW2h97bizJR4RPYTbkLhBF1CoNkabNoZFK7DitcVBJQGwWkKoy5brnfj3KkhVrCePEPW4ve",
  "key25": "2Fz7YwKmQBP7gsEAa5mFswjM9W9qZEguaEi3PtPoYWjXCRpvD5RPKtas11mfkTYnKQuaFoGrYRJR7w8fWfMZQRub",
  "key26": "38a9uGzVRdueBcpu2G6zfBEhL6xvxCR2JczGwkm7t7PG44oouboBcUSYpPTg1kQ6fm91tfpevdwtc4JVfi8Cs4hw",
  "key27": "R54s9a9QSPJn1Jh6WtUo6WGwfE1Lu435K6YJdJamTaKa8cXL6WWhgETtUWx2vTCxEiDy9sG9KjRnCcGXhFmrCSD",
  "key28": "5qxNJaK3t6ZDUKUWKSNmeDKVZ9ioqjLXrftmDzyrxLeDuwtiSueDnkxHwUYPJQpkZ5htG8TGLGirTLEVyBa6cZaE",
  "key29": "41iTy28GvQnS8L5Y39boe4k52Tbn8YKotbhs2RtXsZ4NaA82TDw4Ta5NNQdD3k3okMMKf6h6tgBEUtqa4xHBEDMu",
  "key30": "5QqGpNn3dHunfQJbf8DkEwZPyVLkyavYzwksNCZywC2TYF3Xva7RV9JKYv6DHSbVAw9W6cD5rB7QxrYgo7yev7aZ",
  "key31": "4LQET2Cq3CqFhBsDtcFtKh92BFDLGmMs8jD4XmohYhbrJMgu4XyGh6Jj9EXWC6WNBPExzjmSnnaVFZhyP2P614ft",
  "key32": "5xiu5gm9orsjMS9hTJNXsQENCTFmbE8iyD92EFZ6187nFix3Q4wdWJ2sb6w17KnsBKp3CbPUvSCU22pvmvbGMopE",
  "key33": "AD8DazDWBqgFkyXLXPa38biuR2xQpWDkxTirysPkGC2LNvpQ9uEj6e2xMXefam3wEQUZrFWP8EXKuBx8QZUKuQM",
  "key34": "4uRchoL41QADgRBnmhbseFsywbaAe2YZXxfEaPMvTCYgGQbmKEdEujY6g7sGRMv45AGtKCdDkf8YDPbYtWEztHVG",
  "key35": "xdsGgaks2t73JozXa6wB17W3azC6TH4cjpx1PUteou6Dnvr7PGYsicVu1TE1pKsV3XwfPFsvGu7fCdYzjSRB5Cu",
  "key36": "5m39R3iMDcQXJnE1JR5N4HszBsnPLeJjzuhY87pnPrbVLBj6BD5RL9spcApXFkNSS3utwDHKHe2pdg9PqLsJAsdm",
  "key37": "38hWCWGjyBEn3ypyg3uzS33vtp5ZDkzCdnhh7kkh4dWbMwXkvfMLMJNWGzZ8CZZ6gpUZsovrV1AqqJbGSnL8iVFY"
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
