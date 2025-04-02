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
    "5k9Cno4EoighzNnGTTiSVzvRKw37KT8xfoMepFuexz7tPUTqyFve9BxwYFUj3dpTZxvouVrTg9xEJAzzdrLKPZYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AcJG4Jr3mNxi8RUqquW9XsT37acdUT26LFmAwmoRes6pf9KN4KJgygSTPLnZTcamn4siYJy1M8xQveLgpRCms5",
  "key1": "4Xs3qEF56hLqnsHNaLB7G15yQV6PpdeNM6o342XZVxAAKPbotuDrY6jA81YDQi8zCTC1JkLiRbxkRQoNYNKed8dE",
  "key2": "4BrD3SCFpsGdoB1SSqoj23zTWpru1rrdvmEFCjteLfEiTcWqnE6dqsUdND1VHkxHsCDEFR1uKo15ZCwy5tKRGerD",
  "key3": "25EUmjXe6mUvYJnb2Bk2LxD61gQbhp1nH6n8mEZ5g2YxbyRj28hmDyDZk1Gq3hoBAAN6dRvHdRjVrBTcFtJg4Tr1",
  "key4": "3uA72mspDar1jQKtGViB5Ax2dq3eFDDesihgKR9TXFr8eLqVjZ6vVq5HgXBT2dcMJGGPNC3K5fRXBWiMhSd9SMan",
  "key5": "4mzZXuNe6RaeVCvWGGPBRKLXDVBttJoY47aZhPtij7ovuihWpxhfHTF8R3KHZ4L75XgYeMuveAbRde3bFiGuWyFB",
  "key6": "5U4y5gWFx4fXG2Fuh8fuqUvN76KZvrPLzUDaojYky4M121WgVbb4tKPoSMgd9CBoz1Mgw9mShgueEVnwEiWePJnJ",
  "key7": "3bt2oFsuH8fePRKuiQStb3ce58VtWGw6TmatgEwkLzpyt289crY7EZCfNxx7dF2ZcYSmXgxvQpuBaYCC23HPLQKo",
  "key8": "xpf7ste8MC3muWvaL7qDGvBdxGhtoq2RNnxt5SfdiGVnucqpDvfyQjAXd4b1LUDRV4Rhh6XQqTGN4Hk3RM4Ctxb",
  "key9": "5kXD3g3oG56vYmS8EamkXbk4XbGiayUx67imhGLs16u9U96RghMDdsVXei2ysWnfLXKrcFABwRfLi9Z57RKD8Ms1",
  "key10": "2XxDfN3pcG3D1KKVJX5jecD7ae5kZKmz6HYyvS4o2fBf5su7GXBxk8tuAK9ppTNbKvEVe9tL7EgQk2Y2HWVU9b1p",
  "key11": "bpqFyH9n3hZM2EfkzcUjniNwPHMEDGBSY1mL19T7fkKKiXp6SYdagRG4bTvJ1bFTh8sbeJMDfZcYkzbZdH1er8G",
  "key12": "4mrk4qnX2Dhuz6hopMsdG6Lu5HTNbFtKzxbr1vEDJFYkHUd1Zmb67NTbo6nVzfACviiHnoM4C5e18ryh2ULX1jTV",
  "key13": "5H4Z3uLgKv5RRjvcocwAs1rzu8xZixzRcc2aqG1E7oJi7XKJKZ77Lx5pcE4sYFLGgurUcSUmD1cY4Y3zDdAwRXKj",
  "key14": "5nJCfTFpBGAf2GJZYmoF2iiZJrqAVZUgGYnKNW69VAGE4LUCkUBkCd5tfcCJYEJk7qsHy1oczseptnxKYDLXEpUM",
  "key15": "4uHemvyaAYnEx41jsSiTGCriycBUSM5G1UGcNk9Z648CUKanawk6AsKQhp2SpaGLzkF15exTSCHGH4uakfGvjPRD",
  "key16": "5mpZkoKKJorYPDgNgBzrn7YgyHC9MvvYubwr7pwEtuXd6TeRchEyewCgsivriodr7ei385d79HgE8G3FgNdhbvpn",
  "key17": "64t53v89QJYHP488W5B2b3hxczQXmoKFtZ9187ZoxkGHeXh9XEv8Dkd32t4HiLq5ZYM4AGgEt4yEvffT5NT6vyXK",
  "key18": "5kFsB4zP15zGCUFES8RuX9GQVkB53fKTvhhoq39tymJiR124HNb9rqY2UKWukKx3y5bLPQsWY2wqF4z8n5C2fGBo",
  "key19": "63JANHsUkP27xtDze9smLCspV7gzXCnBaniF3MPc6uktJxyJznoe7LEUGz7BN8mWxg2mDg2fcSU51fDrAmT5zTpq",
  "key20": "676LHnSX5f9ZBANt5EmctbPJpzCcEBgnvXCJZNftGSeG126cBVxH8hKt98JDnobKQzSvLtxL33ae8Rrj9bjS267Z",
  "key21": "2mmLxhapGVt1HFN8x63yZnKCRWHFgJTC69Lp6BkSMRGsJ1g5KiW6Bs2QPXdaG3pY9JFZLZHdyDmJmeHM42p643ky",
  "key22": "39BbR8EWmpmzGU89wC7xjP6WotTCNfs6qaZMY3qLgQazpE4SLFcod2dUhexiNkvGPAMUX1B3Jak3PiLMkC86fNSM",
  "key23": "2hi7q3WgbYu9kdauUkca5VVfxQ6ggTgBJ1bjzTumEjz3qZjkzaVby9sNdJfiLoKMsGiu6sGNHidx45tt2YE1fx2t",
  "key24": "3r8GWFHPc2YDXPPRAovwmTfBWiV27Eyo4P5jxdAuLtzXWgies3RJRTWqQkm72UBx2bZEZXbo6sPsVZYTmijb8oMK",
  "key25": "4tVWDGg53R1YxcRZVX4drTMWgjELsHpFy7oKE86tQcgJ4BCXjsypVWV1orEL9UR6CTQLihntyQk8p7fNB3CXkuZV",
  "key26": "43cUw7NhPKfnpoqmsnCdy1fDPQ12tuEL4PMbtPyqqmjF1RTBdqAVZXoU2h9KfqRemrAHgbxZUTXd7sboboCUqDHs",
  "key27": "kENKmUPKjZiZGfm8SBeGYP9FENCc8jTAwGtj4pU2N1gFHxRgECHnGPLBfGa3ppLXR8pWqb7mGhKyEPJcUFJk3KL",
  "key28": "v49VqsVk7vnwh7kmjWPy7Fdo62C88SyokQNyx6G8osAef85UjXJ9u55AuKqkBC9VuC8p2i645cWGWai9mx1iKBU",
  "key29": "4wVHjDaoBf7kGPebsrjzFhwHnh8F4T4Ya8kJW6RUgbX3jmS9QuMWU64ZkPceABcRv8UXaKkw1DsjeZoG8Lc7TMic",
  "key30": "25fkzeaZpQxcrWFoUKDCB4omPNsJubvXScQUiz5Xu1tkx748nLweUKc9nyMj4Ga36ifVD74VyQ1DLwStcdV8VvHy",
  "key31": "4jg4YUnBpJn2QX8pZjVEM8xMSh1KSa4Qtm3NHYnZYQoYRFg3wzGVcgxsC9Bw2oRQW3Mix86717okz1XVEMi1jYU9",
  "key32": "47SaWb8yaZwaozRJkrb2VyZBRbku2bNCK7dJC1MbTGqpLEb2XRDNTww3cZDJ1JW83RJAmus3xkDVkwrf6UQ2iY6",
  "key33": "4EcbwKQwuEYnujn4rMbmqd5Z1aYCztCYiARmUCccE9rnKaij3vjYGm2D1C8HAEbvXF2kF1Wa6ercroBLAySasVhb",
  "key34": "2wTQQ54k9HS11ekvvWT8XQ36SerWvXCRg51VfRo7tY2shgWuD2XnRNMFb7TQpzsTeY7HMP44fPQYDgRV111whD8V",
  "key35": "2iSnSAJiUuaxWiBQtMohj17dfML2Nnr5bQeCfH7FA6zyUprSo77toR61FMp5A98fX7UcQRBg7mTSHAyDdwVyrbcN",
  "key36": "26CXx7GtUbLyN81d3sLAoh3npm1shxX9k8M4AtaUE5cnvskdG2TJPEzqiBY6ewQ9XdY5LV2FmMr85j7LqyohUCsE",
  "key37": "DKagtAkYJaaBF1UwmQfnnMUs7teF4pEuBYLb6pcF25u7jz6usqbfhMQxTeYCkAiAuFEuiQECjDoy63Bb3GtWd4T",
  "key38": "3u9bBrcqJkt9FxvUFHdgU8XsRKFu12V3yG4tsNbeWNUsHE8HzHW1ouQ6BqULwNBnsGnYZWAc9BmcAzP4FeNYohLA",
  "key39": "3jqWoSJFXGM2J5DZkhTUMgw565JUdzT3Wq1X98V4NTZq7PyrRSbgkPKqnmRXEPNb7my4kbezJBgfZttVX4ydnRfm",
  "key40": "4cyfc5xN1tUbn1CQEworRHFmzT6Bfny5jPbBz4FGoLx31NT6iPTaGhXiHybX8L5riWR6Zd5JN8a6hfpMb38ueeQG",
  "key41": "dV2BN2piirDJZQEotbnFQkGEhUWJe2Q4hrGfuQCorW2qa9yf1Mu33DkuLsyMtXDyZTvj7fY2nPSREBEJWcKiMi7",
  "key42": "bkfvDUbDEvKyA2Maas38fxZGos81ahhjatEVJKL4JiXTXjibibDXcPn3ytcVFkt44QpVGXE6T7hzsQMrh37JhCL",
  "key43": "5Rp2Xf9JwHSP5PjD3FVENKy4kVe9KXY4Tf3NxG34QxiTY7A1EFWZaiFW7sTsXg2SrRjeEHBptJGm91Tc6t87FP3u",
  "key44": "26be7NMsFeBuGw6ydap8mp9qLPyJjZxQydK5f41BLVf7eJAYdCV6tFFfwgbZcfyNvuxPdkHpr53JDftwouN2uxE9",
  "key45": "ZHfNJUXDjWq8QH7nVr5JJ2ypTt6ZtbnxJCihwVfb1gCUi6WzoLvRjpZd62yaTaRKQhwYytboDYB7fmY7dmAZdAY",
  "key46": "65ZXtVBaq43dv6FTaXP6NGj3iUGEiRkm5hR7KsJ63xVyaYDGX3BmNpyPpgR5fZA4FwsebMymjCZkj1dgSuvmpkWw",
  "key47": "3LtqtfsXigd84XprGy9MHLhRxpLt5EeV9pEZTCD8fZCQyRZz6UzhuXSSbjEw3D95qbEVsoxTd73rddQdcMc7pWyh",
  "key48": "5xLVsithAqq6W7YGBz7aRFtgsQsv3A1SgsvRviEjShBPnygqZPgLTtY6peSv4Ey9y9fUctbAsxWhDEbYfJyWhGNM",
  "key49": "2Pn4Z9JawsN3HwYfn4QfMEPt2zhdKX2MHEoudCu7EdrEy8i9yJNuMTPkhtFfBfqvFsRcepABUS48Ctbhj2GN2kHV"
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
