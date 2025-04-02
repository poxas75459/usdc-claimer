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
    "4DBzz4FuTnyhtWvwikWQBcyFJpXP6gvrfV6iB9AcoBdQrb78AtGSTGkKp3QeC8qCJWvPiDQesDxc6SwYhufaMqdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adoSoa2ri1am15ziXRwZzGTnpyJjyUMSNVKbprksjwkEVUBsyBbFLyhnmZkRyLsYP7mB3THT5KiRMRHmGchZPBF",
  "key1": "2GrANfdNk4jK7ArvNLn9SbUcr2vtKrkCTWTNAoNVEAL834ikCddTmBWEA1isHkjSqPdkW9rseFPfqsUBRcBD5jAP",
  "key2": "37ChbM6KLUdFqvqikZJiWKDf4fbggbfubH9tVKpVVGWfFpPzGXd2MpgtwKDHsuHxQGkR7UvY4TrrJNUnSq7xSRLk",
  "key3": "5NwT1vr5WhjPTzYmdN2MR586f8A6DDqYLm7pLc8a1e1VVwgkV5iUnYtFkuMs2KeAFE7Ez26DnwoPaaxn7nDQSYVz",
  "key4": "2rCZuE3geqS7AMboSdaf1V7TtZuZNefJgXpwPwDmJa6vWPAg2VSAsFBEL86nusvR2ivihYozt6U6et1qcDhtrP7M",
  "key5": "3nQA7piibQNZEWm9fLXHBgkGSGEp8xXekxLZPBas3u3p3eaZASRMCUgTLSAVzxRLHoZKCnURb57YCTVEQ12nthsS",
  "key6": "3AMbELNBNHqRA3h19jsmQCVtDQdoWJzvfqHSMpd5Ahf6s9LASovFdSoNmZ825BHw9xeJPprrjT5tNBRJ9S2Pm1nW",
  "key7": "4bWYbY4TqhY3rXK7wu8aYUd7CaMNT5vogJjpLrCi3Jb8E4UBGTPhdG9Ud9qUAXBjefkMWYrdqDtehFGKDayUoi14",
  "key8": "drSv7vRaVWs4REQrXpq5NUV9WVzMQDTZcaYgPNmjjD6NDv87hBjhRx1NS9bnQ2hY3zAPLbrKCuraJXnUwb6URe2",
  "key9": "2ua17pwVdnSGFum1Pcp645GQrunHQq9vWYa4CPFmdMtfm1zVgVvWYx6BmYwmFACegfuoahbh62qr2J4CcnRic86i",
  "key10": "KTsTj36rx5KaGVpvbpgPCVEySFhPm8puFcQoLhecX5hoQaqReUFq5Qk4oWx2WBUzsxXJtf2bCGFayv2Lk4w9aby",
  "key11": "4AxwySAvontNMq7qcbtXCTHwon1ax2FuF3v77LSHAnneh53dhHZXvw6WF4JKnoeHvnPoVbzQVD27zZXKEzJv2KGz",
  "key12": "oXkjAfXZKZ3H8gNpSd3jYkchHhjDoHnHCvY8QKGoTCcquVWUQoTLQnYyvnGC4Vg9kp2WUREg6KGQE4kh3sUpEW6",
  "key13": "4LWnsTxoecWiZdKbpxg9M3CCSsbPVjTVHgxTU9VAt1UAPMDjodCh3sKiWbav9kDZkCVCsHX1GLiZA87skHXTrBLT",
  "key14": "5oV48N8cAL9mbhoiHgbbLLGii1WMA62wkJJPsmHoo7DzhkEy4zux9doBMPwkumN5wCfrJ1FBcG1ABHGV9yZ3Hqvw",
  "key15": "5E6LhasGYKTRLUhDV2F6uDPHgP1TszHDhiom3Kqn4VVWSNoSZ9EC8UpZK6Ur73UYtNEkqsLxKXWuHTTc7CqYF1su",
  "key16": "2nMrYZYqyabG6wvp7UrbvSVyqiZoyQgaSggpYB4Bji1f44ZNJsHCDZsQjnvUgxnfdctHeHykkBE2fEm4bQB1cPCo",
  "key17": "2vLSYgTTnoRFMwmsmmtC9sVA7aF6r3xYzc5sLttM5Rmcfatyfdhy9QfHZkWPT3p2evNUMRT1LGLpwDtnvDprUXDZ",
  "key18": "4VrT45Gqn5jVn9QpuQEcaxRizL7EZFek8iBmzYoGTN5ARYXy758gxzuMCeRLVBBgTQLB3mNnemwAEmzaTu9VvTip",
  "key19": "5BSnUvQKZVpMKFeGQCjpWAP36uc7MgZQbf7RLP1hXhn8mNspugCBeTGm96LRkB1g8yFE4qsAJvhmjMNs5DMuGCza",
  "key20": "5DLdNMQ7BjFLe8FoMjGpxJhNtiArcpkKZhrYfFsPAYHFqzfR9hTLYF198NZVdqfeXcU2crGWcaJWkoY6CHvntd53",
  "key21": "4rf1QQmybVcxF9yUCj3zguaJknxHE17aa4NC3Xmv487ANR2b1vJNPFN5TGrYfWqMFguix77nCZsSoBQnUYHEyKM3",
  "key22": "2cw2bAKSq61DRaZMWp7pbdBJ3J41mGANDfeUL3xhoCo9CuiFkKLP4wKHCAg9aoLsyZUeF8YNRoUu4rRhyKpF6omR",
  "key23": "3JxhRRNDCQyaGVrk2aiCgSQuhYduNr43YZvrdHqgx3v2y5DBCzWXWNcjTwWRyME99v7b1o1SmRog8e2WhT585JQJ",
  "key24": "2dSySHyU28ouknkSWMDNRDpSKpXc73Wd8BppAgiApw4i7esXwg1ujcThs5CFPuVnrpG44J41xr4fMtKpSoEjHRQF"
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
