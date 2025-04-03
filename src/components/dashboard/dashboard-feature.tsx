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
    "269eEJBZReUbM8etBvGegkWZYWwn7gQaJZpv3NE76gGBYRUsHqkUh5esGbXpCxReTPVQqAQnyBgbHb9UvzvsG3MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q865oVjCE1muwpgsmmngGJE2uiz7MfBgvMSiNiyjf5sh8X4QRf1nHHqkjTcqqN4NBnRbTPGgASXieTZgEDLKAJb",
  "key1": "eYjZjZBY8MmHm6meEJrGvn7iN1aVr7EHQipLHBpd5snayyiNzCwNsAhofaCa7zMAz1UShPQcw9cFepr7xTDoiDL",
  "key2": "5cHcVfgwJk4Q1D2JtzuUttW8zJLGvuwDxDE7HHrGn3JBQkXhLgZtYHp66MNULKobAsGpDbLhTiAnN3bcQ5qG2Psp",
  "key3": "3maYAC3qt2TFaG1jmx9oByiYhoCsySdB17hRQ7Bwp5qkCXHrkLyNLwYifGsgyP9jUiSAPcFUQB9LdG36PEakbatz",
  "key4": "3Z1x518sfCbqJ5gqVyvGzjPNWZmgSVcQiSMmPK5srgcmwmFnmobsTP2MiBQXqhXHi2zzgubSSS1HFHLTjeDz8jzT",
  "key5": "5FsEd3R4NSjLHG8SHZVsfuetgCQBCKPqFkUzKrq3dxNv3awD2KuGSpVNGnAARW1DGsgCUUKhF94Y9D2mTUdcjttL",
  "key6": "3yiTBX992WVqcrGyGbBYpTpnggxStB8pVNjvcHB9dNsEXcUvP8ToebPV58YYvB3m8ad5avFNPBaRLaSxbsk9AR5i",
  "key7": "8Tzp2hAPCB2e1aqucRK1UXptLPSxAk5oFFcfstb9WdW46Tmpjp8TGNGN2Y8nSfdWUD6idZ5bVwRy2TFEAYZoTTL",
  "key8": "5fh4TsALwVdob5HZysS2j8ZtDi32oVPktwprGFS9THAaHacTjMzFH9xweVL1qLXTKDFebBN1WxZFRAJNbup16Dud",
  "key9": "2YYX9zwwbrRpkyMn8nVjhCNH4zNKFpqUJ37iQVS1qxx1cUHuDniABceQhXrg84k6ubsJjeD4gG3uq8LNWLSi3Vtc",
  "key10": "UsZNPfGurszqaQpqCQw2bPtG93Gcz2JqKQqDSpyUcLYuWkbX7LGJtuG3dAeRNQ9hrUR641kDRkLHp2xaXVFGZaR",
  "key11": "YBQgMVWmgSGxvwzG9hsbqkAxTDX9gdFkgPXureJY2maphYbPqsyqAJn8WgTPZDr3kZY38WVg8udn7E2nx6Jo57d",
  "key12": "3JDC54adoBRnkGSzPiGPeKZ2HZf8vUG135nsMtHwKKbjeCppHLPmKUqhTLUrRB7dRgbgzNhi5R64Nnid2SLsxTmE",
  "key13": "3ZpCjPjWmLqZ3T8LJaQPBdngj7cBRirvrG2eod1h6aZ4euixwbmWZXz4zu4fdEV5CQXCs1PcKwVMhMM8atuWoJkc",
  "key14": "5NLHWwG9QDZYrKqZqCaT2ksZYSAEtNzaUL3Su8rXgi2pvDKSCjaSMnvEpEBXX9RE5pqhjZYBtAQf3FxVU3CGZLLY",
  "key15": "3kngCyFrrBvRb47W49RyCis34P9o2TJtgHUJo993RUV3xHM5g9ftj2WqRVQFrXSjPrzuBvhC3uZZzZmWyY4A6Rvf",
  "key16": "GqCWq2RDWPTFmAYSLX1LGhfu3S1XjHm3NKuEApb362a2GnprqufCPm4BcM1A8rUyCx3LKhQmFspmYgp1BDkTQvV",
  "key17": "cstGr6RzB45kT5bBRdhWyH9usryr7CpJvGVuZAqBpAbKqYJLURXXduwMEJVM25h4eVVfq7oBeuT55c2onmXc2Gr",
  "key18": "2tnFuoAewnKRNp3mbp3zhhMW14GBiUtWoUm4NNBkQoyc3hexqa6vbmAmqnV9nQm71Xk7eCCwebHFjj2RUKhddiXU",
  "key19": "225it3a4ysMS6zmvo9ZDV2eJbErTX9YmUNuqAmJdZ9YnFYAo1KXEXnoQEwXb6ECHyfT9a1LtbzEiTbveUcNCPzF9",
  "key20": "4w3nq5EnP5u9RDLBKjTNM18M3g9rbt3ssKm965w41F6eFDNBb5DqYqYd3RisArmkAKPW8qrsu1i7GTPfGij6nb8U",
  "key21": "3Uc6xrZAFwQXX2nZcH1kx8ggoMNV2zgMpHuyY3E9vEH457afYKaGFkX9t4WdYBk5XkHzxdQB6g8uRgVZaeH1USCB",
  "key22": "4S9w6YDyUobhMtTPRRES3RN1zpTfCuurdPDCHYuP9Sb2GBksKGpw9MNo7XiyR9FxC2u9pXTbwsYRYNwe9BXw3urx",
  "key23": "4mWZVGKigA8Wzq7Vhh4aEqRcDcZYeJuVNbZprkNcYmf2RU4qCyCWyRjrSNZXvU4dYQxdJ654rkvMjKGkuK8zxaRc",
  "key24": "2v252VtVpVjwRTvAfurFWhgeP5pdqmE3j25c5rj4Ezv6YHE2Fok8ehpQyiCRHLKE9sKFDSTv6xj3uaEWjM9tpRns"
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
