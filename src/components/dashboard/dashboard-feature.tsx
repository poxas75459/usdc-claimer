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
    "xEuUcB3qswo6E2szn3My7PoyYRucF2eiBmr835HeeP13EBQ4ynbiFYWZiGcCMcfZND3XecQAQhruRHMkA5CYDtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58a82hen5FewnzGfxms5sUcbt5nPQ6Y14rZ6PfssmNB4DSXXsTpTAjo8XceFpMjNjRVj7XP1CABEzygSuKLuZ1Gk",
  "key1": "AXMuhD9yNPMaGvWazndeRfU2Nz4mFMgFZLxg3SPL9GoXmeCDWkAsALf8bZbVjadnqxc9CPEYzvidtAhmVUzCVcp",
  "key2": "56GS2Pc7ei55fcVBT7rhBhpvyWcfC3MbB37Mdy8J231st5SiXEyk9gXvpBq4WXACqwdjn5JuFGKKo3EBkktDg5Jx",
  "key3": "2Lccab6YUG82HPmqDT314GEVpKdbXUEZk6pc8NSevHSri5uDY7ncWLoiZ9MqfySXsNYx6Q52B6FMKVBWmQ2gyBtz",
  "key4": "3hTSmxUxFvDdrE6H3dyQD3cnQ7DHjRAzHgDZMyUXJWWM936goEcsc4HVyoGuRJECzejrTFVKe9cyPNywpV1J3RbM",
  "key5": "3TXXBvHwKsqqx4AJm3PBhJqnxC5LJzcW4NKnegnUVCQFbjNcs5Xzav9F8whMkLsfmfgfHDNrVNrbsXZgD26Yd4ZA",
  "key6": "3HL6bHz6Y9YToXYykxv4q8ySkCrmUg39dmUyrKRx8RNydTgF9iWXfXHcTeC666azoAPzCVd4GvAVSXRhbCnn9Ru6",
  "key7": "43qAnHLR5uaazen5F9Ab3hGhwhoPP6ntSDZ3AkUGHapnvUwiaTq2NV857MwwqHHF9RBteu8bWKmJUsy9Q7jiKDZs",
  "key8": "3N8g1migc2iHFJeDCBUc7fzFZMeRydPSJreCeqcNkJLebyZuvRNV3PqNqhfPj8MJVQ5PNavKAj7jHeTSr1DjSUwc",
  "key9": "4qFhrKC5Acojm7iPVa9iWeoiQ5TS6FbgkX7gt8Y5S8Zi8Rgi3bENCwxqQgeXWVLnvBdiQLqsBPqoiMRxhceCrSb3",
  "key10": "3zJs2MdVKH8yF371nqtYz4KS7Y2ifnkBRXAJ1XMirAfKKD9CJVxryLpnbLXBvNockihCmAQh2p6oQ95NUj7HUzap",
  "key11": "4PDGSrR3mwWgF5bKFYj7M2rRdXL9NtArhsNDDGCJKUcyQ7MKVPnHnJDQZcdtrvotMxPLwvgPc4AgA16qheqHPuX9",
  "key12": "3UB1f3Rx3NBghQhmBTvEtacT6j2Ts4JXVG7rHNfE2sJkZYS6wCvR58gzCtVRNEJ9Sk6UBrghD7BLWNXponEqPUCm",
  "key13": "5TgEYhuGfnxQ4sGXLGpmvVwNqrbzrupPWevEsQEBxEnzirhCYbo138QEMhQv2LsusHqm7V9wSkRf9P3JnK2h9SYj",
  "key14": "5Ha1HQQNCfdjq2ikZb9EXCXrn9EUNRY3dVBjL8mrjAAm4NFDWken2FAQaUz4qZPLtHspsPkfR4d4YcoRrM6ae4N7",
  "key15": "2BDwmhqD9JofLaSurL2Nuoo3YvBhzchWELvPMWwZ1ttv3FgC2gmxcMdfya5M6HtMgXRMqeHiAYr5i8yvftCg5WQp",
  "key16": "5JZi2yiex2cEC12PL7B6NCTY15dfmyw1q2hbecuuGtWZy8cXV7qYGD3fvqC4MfTTsaq43cGzz8jc5EVdzhtdjttE",
  "key17": "wC9PgtTfyVtA5moYuzTFHBoUDeb4afYCLiA8nPFuYRJGjdaLwKuUkUKuVfc56DifGy5RASxUKSf8ZhRqr8xesXu",
  "key18": "fkdjAGD7yXFRJpk6Vxxj9nMK4AyotsuZgZZLzN34CcyDBZus1jajtE4ptgAWHaGAKfPPdW39zQQ1TYJDU7SSc4A",
  "key19": "4PvFguczt1YwcvKc5Sh2Zsjoc7u1jaYR4B89wHStBYVVZN76ERDcDARQR2ej167UB75NHoXQE1xhka7Wisti8GsD",
  "key20": "4Z7rPyn2cwvufJ1Vb89jm5Pa85rKkdAjsWeVgtgrbhkknFhE8mZ5P93JbcSannqudd1vJ8tm4hkRcdtfVRZMSAW5",
  "key21": "2qEXP4zsUPDsJZeGVtNXemcMVBWyYCMU278nAjnwCotquwGgswD6UQvejuQ8GeMMgRtoydLKGTKRusYm4CC2Ehnn",
  "key22": "2XmgCd9eLkmKqVRQJxaT2xGN8Etpb9gBcEuJeh5A5qoumir12sKat64bezuCBpk52xnbKaMx3vs8LTX2DCmr5VmZ",
  "key23": "3NM1XoGFM2GV9RnRHQMHtHTGgEH18dbfQ9f2EjYfH7mCYSCHkCyozeaEzBnm8kvuAq6orkf79NRuTkmviXfzWshg",
  "key24": "3mRTdF6KiEJqNP5kfUbWiYV6dSXXo52ajs8ZyK5Ve9wqfDdeMXUDagPw1X29gH7UqrMekDFX513aaP3SvBghaiNL",
  "key25": "JsD9jEV2ahHX5pGeF3xEEsSyp7dsJ3RtabGmuFfQREV5oWo4PkrjpagrqJT5hrwn9kVhYK1Mw7FCmTWu4tNBExS",
  "key26": "te6McGvs7ep6kN93Ncm9WbzJJ9JgnVyiYUbmW4oz4oFErWBCa1qogRCEkojx2JiJChsyfCJj1roRFwRaQq7SG2P"
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
