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
    "74XE9yhrrL8t6NbwRM7WzRVZvUX1HtAqKVAVVNoWknmPLSfWnYhrbvXeHTPB59wdJHmucQwxZgi5EPiLRjSX3am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyXY8hVC6Tgwwh3zorhZ7aGUbvo9dem8pXa6YfQN81fRndeaRkbYtZytx9qKGQCvYWbKCLZ5XDMHr1E65a36yRx",
  "key1": "39Q5VCL5Hx1RdQdc4HPu9R5VVK9a9cTzSMQeH7LorUcU3QBD2fNL69xArjJyG1aPfG4KRpJRRszRRHBZeDiiz9zA",
  "key2": "2h9Jv3Ekai9yURgBwLY9gB6Lti9SGzXpd5vCgP65ZudbeYWikEZVUjcD8HXdCTZnj8nyAsuHARmWmnitynb42uiT",
  "key3": "2ASzq6qH4o1J4frBGNnCWVDtSADGHRqPwC9b415vaC46rzRpq7pc8py1TmCzsiviERx1eWD4JMRZiHSNMb9srDz4",
  "key4": "2UJ7K8SuVyGk4jnssJXmX4YrgwXfkDSKcHh5XzvgGxxeM7GPnX3LMfEbgrrZYf21qi91nj8XcF7BGz2GHbCiYLau",
  "key5": "P9eeT8QZcfrAwA581Uc2FmrjPJKJKemGgHcD9bRfmTe6qRAcWqQ2ETsa28zyySDESJhyMKvVNGjzkafxFwVDs9x",
  "key6": "2k8nQ8D8sQFkCRPh8Q1YKiSGpP6iqE2ixF1iQgM78seSkcvYJfgJnJN2a7YuibVx9oK6mFGvWQkbPiz1MC914oMS",
  "key7": "4PVjAotm4x6tdEmgkKpojHgHs3LFzH62CK54BF4cyC2jzkbgyBsMDMFxNyhiBk87fP5h9GS3Qbk6Ym8bKz6KEPoJ",
  "key8": "25e3FyqQaw5hpC4o9pnY5Vb6m9Dh2Gmvj9apQKopMiTasCdchro7NFjRcxQ4EGthgGF7mgBeHEcfBn6eQ1KT2Dt2",
  "key9": "5vS6QbVRxfjeRKaxzcBLsreUoeqQz79n3yEF852SjLfGURJBZDvGvDYCyG4TznYMsBoffvMycRamPPEeWP7VTdBm",
  "key10": "2wbAKYkXs78UsA6APL1Kt3vTjLv88paqGGzQ7qAS3KgJpg2RX3Nt27s3KobywNEBvBk7AA1m3Udy1sBNWKk9mGB",
  "key11": "2Hj7SC6y6wqsfmLNvBvxJXwAtEfBxREgmXFENgoXPZBroff4RNgmcN5ft8z1jJwrE7jPPFgvUMtr9YR2Z8poKLfN",
  "key12": "3h17imW4G817qH3naZUib9YiSyCfrNqNcL2if7FwyJWNTLqRM7sTpMawEna25shzThvuNGejYNNhLcYne2vTT1st",
  "key13": "3ThwWMZMfvayn7u4Cbys7KGycEeAxAb5a7MLyX2Z6Gb1pX7FfKWfGZ4z3EgRM9mNJmnCsHsBZ76mkRGSJtYDvNeS",
  "key14": "5X7xG8cw4LpG2JscnNeq9bhFYWFcYpeAUUrwcQ6ksfRpoStR9KoNGtf1nu1DAS4si7VKY1LNoDcB6cYLq9TuDcPD",
  "key15": "61gVgGGm8Aou5pU9pgSroVDGMtjqsBVWHHszGFUMyGVWN9mNrTTf1dhEeSAvJ1d1nudeeiq9U3tJCkTxAVVfs8A5",
  "key16": "4X2AptkuFUbfjx41xDr6i3YCRW7JvJgsNhQbNQKz8JvUXMpctnKzLqxZaLxoHDif6RazWko1SCE1qwS6tdncZ3MP",
  "key17": "5g2U2xGDZVJNcSCE3G5MyhSHTPUAW947ysNgjXiBNq6HbaETQkaRpep4gjEeZpHWQPqph3XCmenjRERpHXoEznhA",
  "key18": "5Q1Z1Bc33ARDt3WnbZZLDkkJL74MFqNDngMFR9igAu68RSucL4wupmEosow8s6eQaJuNNTJQgeMJtkwbYreK6o8C",
  "key19": "DB2kFGNUPDBxPuTqeMhydpSNh7zX1vudZg6QNVzXYfjWRk8hMJUb5rz2xoEBFfwQRDRpAVWpN8ZnZRHVHdTi5wL",
  "key20": "3n5C3hW7jYni8fSqBahe4yznqvVuSVkQmRQt2cn2w4DwpqjFDBYboUNXYsMMKQUHf5RdjdxEqGnkUrjpKVU9TUGH",
  "key21": "BTMqEfYP8jLpvbJ6qDiGaky8zfisDPCAzyjnn62YvP9FS1CVQRfCWKxwsrxkpHq5Q1Qcx1ANS9EhMvfFYW7X4pA",
  "key22": "2YXGEVDNX6KUYq2feTt1SdybX77K9MNrk6YkM9EMxiWUXQpyAxkvMGgCodqVAq2hKb4UdBLDWx2kbP9nBufbmncb",
  "key23": "4ZW8WZS7d2gkntVqTmX78bHDpVh3DkirFdWiQCamTway6LJ88DSh45Ta9iWwWWDRmuxrnwWKd7nkHWMjgEP4EXFe",
  "key24": "4WxfcUR84EC1KdQm5UrudoHVBw1rcqBjCdcxfa7dq1EjMhfRNpkLrSorNhoyHn6c5rVPzrr3Wz4UCDbrxzF98H7F",
  "key25": "4PbG6uc9rj8dvFkBppjF8hNwy4J6xSHeb2pevKd9LeJeuShVpxwCJ9Mbf12hEUjmLfZdmCgVUkX6HkfSiSLwSdqH",
  "key26": "2ttGibNecPGDkJwnVT6uDaN9Qz9YjJpgQKBFBTs797JcMLLHj6Zt4XjjcVHC4Hq5jHvHBS58JSXzdnLKZ16KVUFd",
  "key27": "3Aq2N6eTrycnbjUUCuN1wkw3gWVh4rLZ27QrXwxeDqbW8iFsCeDmXEYnwMJXrJ8Fx2U6yiDwJckLC8tAwtDCKdiB",
  "key28": "2K2ZNSQNuK2qujQSaYrGRVUL8nRau1hkTiHUNomcCJWxKN9jTsfMiCnwS2tDVnFShkniDEodJk2fgzMQmV4bVGww",
  "key29": "2cPbumS7A3WEQXAiqov8gc7UdSDYEHRebksDiGHEoMP1q3KVWLxofgGEBMvSahnLeyivLoQJRZPGtDcDfSsz5rpF",
  "key30": "5HYVqPs1sRWLumwGByaoGCNovUmqZhWxERbEn3bbsD2nN4F9xBPmqwsqzo58XB575iMx5z9VLYpZXgf9g1rfPk3w",
  "key31": "3azi8DFR51JppiJhNCXxyR9LwwUTwq2WJZVs9y6JcTW5QuRkCZUA6yTzMabYbtBnBeAFpZ3Z9pzD7ZpohKGmXHg5",
  "key32": "4wnG6rvfw5kyQXcyss5QSQz9j4ACrGbx4nSgRKn8R6QSQxmrtiBbtemWpwnyVAdE81BGt1KLqkLUXH41AdU8X4zD",
  "key33": "4qai2kCsMAp8RftVwk3WxWjWha7obNYWinhyWKgnmkjmcAoGxMF8RGyie1PdbLuU6dD2TaLpMnpV8M17uPxtRuHi"
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
