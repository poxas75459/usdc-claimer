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
    "Qye6EvWjDnAVnEcGdnV48RHDWxUbbnv26WFX98Ztp8j2wocdxK3hWRPdcvt1zZ99MTk33cBJZ9CB75NY4gxULRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b52okj6rehNXGMrH8d4TNeG6BW7d277Kr4yTNhSPkACGgV2QcKgeJavdmyL63oXn1akKNqbNdYS8ZoBthWfFGQF",
  "key1": "2Uwt8LeatZeNGK5cbUYQytiNSgCNDhp8PdUuYTXKBruPsAqgVurjyFQMRbz7yMSvAETk17wdaKy765iepx72dsKP",
  "key2": "3v9Bf9Fnv7b3ZWwkDs15pPgojw2UCcT95Gmp8Sr5hoFnfYpxYqUKe8Zf5rs7YmEqysXakS5dMSDFqm8CPadAoq2z",
  "key3": "4AQQENVK2BD1Mit6Vvhy8BWwZ5HZdLwn4HTneMEC22bTV7aKFv4f4V2VfR4QpnYpYvYz5WMkbtbqkSnGYfgNtaAG",
  "key4": "4oFNnxSwaWex8eoM1huL2yTuZ34C5LXuhaSMnKC2ML76Qjqo4QF2L3MMKdL9TUNv5yaCrumrAYh5GtrgcHzVst1k",
  "key5": "4vy8FgqpyCM1oXc7FgUbwvK2X4RDJQZ5dsCARt3FdhK6zCzsGXiw8xBLgPHcd5pPfGkSiNjRCDfiAbxia5HSHXHn",
  "key6": "F4QbTuZYdiqsnyb2t2iVhq2KEW2i6mfMok7uLNDwUHyVWLPg27gyd9xEKHnfDPdShZgfLo7e33EDrSiKJyaq2yb",
  "key7": "2NfYEUZwj1jD5Wf5gK2e5chsHLHpuDEN1BM1L7jcKz3NZBrpevSKDUFAVYEDKap5xJyz2schNt86pysk4X8kHM7A",
  "key8": "5iqNfAsp3z3Ng7qzN2N6akYewLFmhSUpnhsrJyqXDb539JVSTwGoyCgtQLvNrcj9do6TT5GRdtvy9K22UYc12izZ",
  "key9": "4Ya3HMSCsHjV9bBttkjkR7XFRoQqYCwGcpwkGLDbq5hD8Fy2KZkSTJyiBvoHgqyQrCGBacQvX56uSqppgJQbA3cw",
  "key10": "3vm6z7B2r2TnoboKXfTyfkhUuF9ugFRaosTSmXtSsLEdrpSEP4mm9Zx8bYXx1gT2g9APJqJusLHRD21k2ZpbEc6R",
  "key11": "4e7Lsz1EzoKKZEpXEPLR2fCiYmqEEFryuFhE2ERT29t9q9DD6Wt9xaFzqBUZ13y12xnmFycys3yyZYtWwA3V1mqS",
  "key12": "5mkBeNxrBnx2fQoizunGVa8fbUt8ZhrnoZnxmXVxL5Lxvdm2Tv8LHXDtQzMJ8oqshFaMPt4ZkYRP5jtiFQ8n8eth",
  "key13": "5RDTu3vyrRJ1DBV8eBjMMDwJX1Ty9rPwmJ3X4rJo6UHsrhBNDWJikKFh8TuKWReAdFNra7UpiPsPcNSL9tS8HWmF",
  "key14": "3KivpGrK46bu5x5wTYhSEqonWWuVGcGN3FppZcPN7gb7aPx7dEwZZc37W5vs4YdKmnBJt6PafTgB1NKoC2JQkjHH",
  "key15": "2WaXGcWGZuWUwS5n72jHuZvp23Ft4bsfdhhyk2cRP8W9cCcd1SrSVd1A7Tsdi8PkXkALj9RgpxdKMaPuxcuY5mH8",
  "key16": "3ZBvpAVXG9bdSRsMKHvc3bLokngjhas63guJcM4FiFVsRLpyRETQFk8sEFLMxk4oes58gu3d7UWExzzsuBpbGaHf",
  "key17": "46nDvByZnMLMJ9NhrupRxbBqFV4hjEh2jsYf41SiLLen2b63yHERP8BgLdnZ2AgvCrJo1a3pm3BXFXWJXNcGQ37r",
  "key18": "4AGaf3uwmT2geMApowe3krYXcd8JRc7GHnCeHH4rxaD1MwQo2HzYu1eq6u3jP7cP72L8Xtv5tt8mPwYSz766oUKL",
  "key19": "5PdEMQxeFk9CkX3aogPrWCutq2KgSQTBbEfmzWakvpcU7pk4juChNN6SGHkuuRorn5jnqKs7hc7CWFAMa9NBtNLW",
  "key20": "3LHsJWY4ot2oLw7uRmACsaFyqkkGw7jU8GeQ96fYY4tLteKatBe1ZbLL6Y8Kziy4KUD8rHby2AWbbEQgrE26Hg9n",
  "key21": "3Cup6dA4hrhB1KnmQsxo2cLnRreRvo8JwqzSGaoPDCwuarP2YA3FtmUUeqxE1GecDYBpDquFWsid95G4Mtk4i62p",
  "key22": "HbZzfwxFqtMm9fP5YBv1p7E3CpZS7VjAKQTpqMaMgRZAruTwiru9ywmRn9TB3sV9aRJSfwWPGhKxsMkJtuGg1jx",
  "key23": "54ZtmCY87BYjPvkZ8xi1jZvycxkJMCrYLu3eB54m3Nap4mdiQPSJby97rBRGazULhFaJ54ydXGE2zvD7TfrV4YKG",
  "key24": "WoJwWCoD2C4VeEpCaH4ArsJYLkCakd6eM1VeiumnDdYzMWAtzQ99UcrVYPQjb9ZKyd8878a3T1Y88vPzKjytC52",
  "key25": "2DybvVh3gMcfcFpdVYVRfdUzE2gvBkK4nxT6a45QjtLQogmHRXUzB2QX7bQej7cdRgDBX2xR1q54N158V2NVDcuh",
  "key26": "3dS5aZdFTjFtHwiFi5nKx8cppdofWrvNRv7FvQZsYPBT3Srbmr1vsyqX73RgRbPAeD7THN6GKHHtrYksBRsJQWss",
  "key27": "5fSgTLYifpXr5yyoABQPxgvRSp1xmAASjDLF8WG6VdMbH11HXLZbKLvNrTTdaiVFuBEwwjbAPnuDuVesY8LPWU7y",
  "key28": "UXSa2DdLzfPdTLqje6a5Qda4brawQugCHPfnYcDtmJ4CtpWjpNxorUKgKKBj6vUVR9swJ5DEFJUEBZHHJWFZf1o",
  "key29": "2ATRiSnoqgiAY1vc8uXgULcrKTcL8SLuhb9A2y91r3tK4pRdQFTSU8MABtXq6vwXPn6pDdHwhT92rY8ycyrXgJps"
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
