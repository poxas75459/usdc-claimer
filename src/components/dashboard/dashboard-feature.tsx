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
    "4RqzoH6z6uETTfMEpVL4TCzFPwervKdyUYUgkTR8VQHui6HziseZRUut963sDjkw1C8GnCjxmrjUwj7EyixFrokk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mpLM2DPQ2HpNV5zoHPdtGkp223CmgrYeNtZ7CKDDWqjnKcMFeKX85WSVuRCFNaS3XJNeNc8zfq8PSGVub3yswLm",
  "key1": "3Jpx91juQKJKFqmpiKLzNsFnqYALzN4TdG3RpqSnPTimsRdJJGgWhpE7YoA1rTyzzUvWW1F4zTEBhLvLDEq2zXnA",
  "key2": "5eFwGvCiT2FdC1cWRnQZPKZR6PBKvqFG3V873QYPyc73oJ225P5t8qXLgvmJEQV97fFRNoPVugZZqVpH3BwVGApv",
  "key3": "4h4fWBrdGeG9txGD91hjLrkxoDmYVMZoNAHvtaYBAGyok5Urpg6anhtwfRGRbWQeYxhHJPMBvPQo4v1eq7C2zwbS",
  "key4": "3Dwce68aXQcGemhjUG8n4RdWMtTyjCZL8tJ9Jfe6ekEVQ92MzLcLnGuqTsBxxFrdfLPo2oQJ1nxRDky5MhrZsmZJ",
  "key5": "7YKRDoqgChAxyQZuACzHLGFUfxBokZPbzGgjDsxJbeSR5nTThsBdyWXUpbRWgzS4WxwcFvwnVFSCpY2dw9FFiY1",
  "key6": "3m12ta9X5mrGwQTmhhNjmESKjAmvwbC9ermcBPFTVay1Qc6ZUdp6fY7a5US8ZxTjSnZ1oWbmUAmRFgp9qQjLXC29",
  "key7": "4vyb3Qwu5sBLHig2e3rM7X8W8VSxQRWAiAAD52ui2GhK8MaKMaAqtkLARqYoi6vAsRZNhH9N3Xbj8gXAWCHTM1dd",
  "key8": "5BEdZnD6gxKfgx2NKHvDp7HAiXX5Ca1JScASu55vYcWvHZmsf99Yvx4H353z869vprAsjkptFk8sRTwXA7p5KtGQ",
  "key9": "56WVWxxLVvi2ozL5TakGh5XAvKNmL1Bechd4AkwvfU6H7eacUaWz1y3DLvgR5UYbhWq2cMgJfWfuw3N4MyU9zEqY",
  "key10": "2Ai3Lfi9oLNEqArJ4H9FQLBV3HtMuF71byK7ro4t6wKHxDB17XNA5VfyGmejDevA23oLHLyvUqQL4d1YsJ5w396i",
  "key11": "5PSUGaFRgwy4emU9JDSvN5qvs3UuZnUu4o59CLMhudznLtsfLttmsSxkg3zf8CTz8XVEEqzQDyHNsufbMT5FxDu5",
  "key12": "57WPHqXot2ev4uQTE3iLKyG52xrX24y2EkjsDUdM8Y5TdaUs6RB6N7CQSgcjsMmQezVmQXXeKNQugeuWs5wiekLc",
  "key13": "hCcAZ5SvxRJ6bcncJreGToKxaaF5BgKREz4k37ydpVwX8w4f3BZagCqGhNmo7uKYLMYV3dkaBa3YCyV4QwQf9ur",
  "key14": "866sZzi1y86SHKaeG2CnRqYFc7yaizijtG6aVhR44C59Q86UUGRN4dEH5XCiwpY8uzzBZ8e7HwycKepvSphC9u3",
  "key15": "5aNDNdjYsE31PP641az4D93hHy5SgpyHNxkTQbaaXQ1NpWPdyRXgRmg485waJJ1c1BENfZcWFZNbZJRUQgRwnQZu",
  "key16": "fBaQWqqd1JDxy3WcWp5WtYf2d4frKEPuus3a3KendrCksnmhP3dtpBE99cxvoYJLrbcFD7GNsQ6iTrySNHMiks5",
  "key17": "46fuJ3QLXGWvLxELkhmtP7tEsxm1dc2NuqR9XR3F8jiVcU45jPmeQjRfV8eGmQrZDbJivQ7bWrgHHb5ex97u72MM",
  "key18": "2RwhK5dP1hRyewgTmEi1nJzhwetBvhFCjCqBVW9HXEMo6sJLQKDKjvU2bA1zNihpvYiiDQvLQWkFMXtPNR8guXp4",
  "key19": "2n1bQyPeiDteFardHJBPrtXDsoNzwPLy7XS47WWMUxLAU5UbtjnNwWfDdvhg9W5xEBmzGohagfqEv4G2MDqLrGpw",
  "key20": "5TRfD7a1xqfJ2JrWR6WnerPGHGnPmnBqiKreESqoQsQojDYVJqJ98r7wLBVtujdEPFD7SvTgoZm499hi8obaGQ8c",
  "key21": "4ogq1Xtfj5jTmUPhzK6WPwpRmkq8humo2jgyAeS3ziAjS9h5hUP8beFLAFMDmpXbEuvswpubzQaD1AEfbhff4AdG",
  "key22": "suGCiAFsQqcfWD2gNChAJxyTHEopqoTMsB7dC4a5j2d1dD4jpHV885YUrigc6QGHFMMEFbER5eAj3dS2Rpxp439",
  "key23": "b5gnJJi3ibC7WsSPX5mhTc4iziKxBzQbpajAno8r4ZtacqLzZhR5KYF41tW71iG3tjL9yu6dnnjDvkpbAcYD1DD",
  "key24": "5wFu8z1UhicXZvc3JXRiPGCPDyc2QuTqCV3jbzF31tbVF9xX8e3NUhs7Egs9yaQPiDTAC1z9Tj6WuVNMDGa63ori",
  "key25": "2Xi6fUm2MdKdcvCjo3SMJKyQstegaMr1QhUopYfxYrB2Jst4oRuqpbH6jDCir4bjTNEiWGxwQm8b2ccWLiXU5wu1",
  "key26": "4VTHjh7wQTVWyfSA3zkZSYR8R91WAH8KcVhp7KDD5NTAB4ZWnouEjpKgiTkDymcxKqGoE29C3GVyq7VmJ4butALc",
  "key27": "4w4t8YtL1AUvQNEbrpi7ExyT5MCBFd922wyZ6VhPnkkbJ5rfUgfjNKmDNnHhwwakTG9xvxRnvFiJgG3rKCHY1QZs",
  "key28": "635VJd6prD5w6X4Mi4qNtykKiaX5GLGP6QJcnRTy2w1BBc7YVhAhSY4d1Cq5zMg6RqMKFPewPbbsu2A79KfEHkug",
  "key29": "4AhWiSMEyyuA3ghtLySga9cFcvTz2St4upzqRLFVpqQYh4exB5xXsF7FUvQij6hGQkKfMS2i11Hzeud9C1CvwpMx",
  "key30": "5FX4PQ5LAUbicP8y9mXpCWotu21odEckmjiAMKh88MT8cMnFWk5zniRzahk13BELaCE1b8nwGEkeSThSudzBdysG",
  "key31": "2wTpaheyyn32ozj1orbV3mZVf4b463JEuFemiCYMz2a699SPsTDZiamxHwVox3UVhTGCQi25X6XhcxUee8Cgj2iY",
  "key32": "5e8XTZ8fz69PxGMQobit1z4Qih46bqyU8HcXFvKr7VbQirQrHmQM3ZyJ7UoRWHcy4npLKrGgRtsA6EoQRNJD71oY",
  "key33": "3Tdtx7oe2maY929n6Wxk4tkSGGnXkbuaeEv75dJ2CD3635RgTXDmaKJtxbFyzXswvGUZW82wmedNYcE1K4ZUCiXe",
  "key34": "2n7D5sWcTHSJyz6rqco6vL7xWNoNHKQ6YqWz5DUBxQjbBAdXDvTk36hwB5gCyCL6WJqFgjY1744nrhzapfRPN4y3",
  "key35": "3aiXcu3hPq5Bh9y2J6bSWLyF8AWmuAZzMqFb5wXSGE64b8HQDQNLc41Q6iEbbnuawYoYVi7KuPvGtCePUhZsquqr",
  "key36": "5Nzpk72vb4hW52HL8qRNeSW3tAXTHyFHkviHe8tkvSYCTgA4dStsdT3NCb2x5AD1NqccvoYbA7Fyf9Z9EpzRkRL9",
  "key37": "veM5FFyyvjxZ3rSPxoWGTQ2ZL9r4nWmqRgLB1Kk6K4YNWmYRbbahTiRXnqcZccq9mL7Lx8hbunXmFJnJk6tTaFV"
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
