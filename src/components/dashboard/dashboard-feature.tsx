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
    "4NhUSvfCugTvEiAL3zCYQvvWqAd6bL7HY2nAxM3pvqEYZapCDm8MU7nEKQqzqx8PSKEgQxkTCWK9zvD1VFSVGnsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKDxmRTzQTef6co7iGMQA61rttbJWhZMcXVF8mWTpMV5TeH4j9P7oW8Q4D5X4JDDCLXsSAnR1XHDGxhHY5LewUj",
  "key1": "3nqxFGgpKMzX7dqHgj5h6rvMQMW5VHNjXhbT69HX9XSpUYRrQ1N5FgmCDZmATV6UEhKzGSa5y8TXykywUewLkY5L",
  "key2": "55JsZseYi2Pmat9zAYwHUVg34PCg35M21uPhZgq9WEL8Jb3ZPTBK43PDjvKG2NLV7bruAKnPgfoviZ5HWd927Xuj",
  "key3": "29kV2cLy5MGJXB4oEw31TSHx8faq2RDsri3VRERz2L4kB7UKdFmgyYaZTMRhYGmoRgdWCaji7e16eRzRMX2XZiT3",
  "key4": "4QF94oTrCYDDPHRQbquBgRyWXzPs4CGJekh2myWjcP3Q2Wa5tJ2s7igHoG1gtBYa4NFSXuMAT3AeGex1qjsCShwz",
  "key5": "2B7rWv3JL8tJgi2CmZP6r5i7msTndmAfVxdLZcAwczLyEvMnDnk341zGtV4u2MPHtkj5vZx5fbeoB1Wo4PnVwsQ4",
  "key6": "3WYznA7w5uCoowJDn8nBe5sz7Fy4JTNrUgv4B8FxbxnKv1A4x2TUs9H74nxcLURKLjwAUMBgnw9hacZTtPv2ThHG",
  "key7": "RhVcB67XQQsSjCakXhcGTpqisgWbGbN3aEwXozqGbfva2yvDFbZ9A4mYUZaP8Y7XgYzmcMjWjVYLo1odqL7mqch",
  "key8": "3ntd8KkFQs6dGR8zoRucHUYXcLL2A1ofkgFz84KXdS4qTZdNb9tPc1KtPBCfjLgtnam5C3ZSU2s3RcHMJ8rL81XJ",
  "key9": "452W4tXEGarSqUFiMfH3uiHfAAKcyX7bAzhLmxot46pMTURCJ6sDCS663LTbQgU6HLaNi2rSpDZ5PrdU9ueysPy4",
  "key10": "3ttSSYNhhnRDSAVqXkJDfGrDTvLcNDCpyow5KdP3gz5XQDQ5xmmry6A339pdH5UssBR9cHpn6akjgeH1rX85uJud",
  "key11": "2UEkd8dfxvgoMMHeGbGPQ82d1cVYm5QBpUVuyhrmPE7PEJMqZ7wYeoXr1VxRseaAvNMLSGGKhVHmhb3tcePSGBtD",
  "key12": "5SzKFTKmCEiaemG6fUFoBzqNfFaSMTQ4SgByiNyCiUvFDci1QWy5Bv2y1BptqtFYudWPYKFZR2g4XrviDCBYG4qK",
  "key13": "4X3VbJGTnEcvedZqoURHx8hwwwrXHvzhMFa2AGv9tJV1YfNrrj1SYvjd1KUcnhEVvgZRTjh4sHzdSaVZjrAaZxi1",
  "key14": "3vY9VVo52cC4eyxd7Xt9UauD1ANedP6mb3sL2mapwG4B7iWGNuB1K5EnRBVymvYv4SZWqssxSKTxRqcJbSeTsURC",
  "key15": "5EYFoXqSuQWUTjuKqWgXKfy7pdqF4Apo1nsHBHxin6a6g2kK1A9XKsGF3tPuB8P5MHDd3pLy5AutMv6jyj2Wh5xR",
  "key16": "TW9BkZBeGvsSKpKd3D1kNTbWKaoRqkdE6R7Hqwh95gfXF8cF5JegqBs9rR5NyB7NKuKeXdYacDMoPvjUbvy4ma2",
  "key17": "313KSyQWXxcRofgErmLJpmJyjevTVqN8riFBD3NVu83UPpmJ8dSiXCKK8XAvFuPPz9mhyEAqMZoK9RiuH3pjPt8T",
  "key18": "vwmi8H8mdkGXorFiuoYsvvTmhFQK7kUGKbgVcksX1uhC7HjNBAnjUdW7c1JhgW7WEMvyYd2E8dgis7zpFE36Uo2",
  "key19": "4syJX7rqoUHo68UaeJnyjrw7KuMQVHrwoL5BX22UHAThXdetBRvUHJNmmhjx45kTrNLKtmivAJVnohd2GsSwZ2FL",
  "key20": "2X1FmMjKaFnvC71x9eGWXVQCsJKWxw81W9YsyUwiPrUoiVCmQGaJ3BPi2sWfcC78jxQ8JVRUBhGvt8Mn9e1Lpfu9",
  "key21": "3nFnfQguizeHY5ceW9WcmGVqqs6QdqgMQKVJ9yqFq4kaFypgSYJ6RhQnKaij7g6xbVekogG71GjrNb9nR8m4GWGd",
  "key22": "4NhXGvFUQPU8ygJdc3xrsyJpfYsHLHdUjGLZwRbjrfxfAww3aHXoSGi4PuebAsnDCDGzfzRYYAfyvXM4CDthqNuN",
  "key23": "AiftubkMF5cxErdR5XX6MuohjLZKPyJpSNqFQ8FMSLyxAYooye4HjcmUSqP3mFMkTvVXp9yhEpcHKSJEQVVJq8z",
  "key24": "29JNP9FRuwQXBdn6ibWX4HNubSeGDB8sUoqExSiEBpYKE2D7zLDbXJySzNW77PMtPMTbFAipKQdX27q1qo8KtGnH"
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
