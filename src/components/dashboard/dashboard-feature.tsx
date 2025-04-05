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
    "29S47zM3bTZz9K45oVL2zeTD9Emj5Hti5D3QXkgVjJYDH1QuyGt68hxd4w5zQ6B61SpvRbpXTCrVVh57QxXCHqJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osyRRT4Z7RDH2ub5VpGdHGbPDB1FaZXiDWiKxY7T3S42QBLxuyXSNoFQtJKdVhSXP5J6ZNaWdF2CNxdVvgsvn3C",
  "key1": "3NrAWh21M1iQkspoM9q3ugbEqKGNzLjLEKDtJbyvgkshQy2L34DMq6Tyy3zPjJwPD8FLVinasezqxfc286NdnPt7",
  "key2": "4ZP2QVACnZiRokPYPHMSiJ8KBQKzNRxNSLZ26BW7a9PEWRTpNHuNnk6LGTZpocQUrxKKgETPcTqmZRF3YrvtgzLy",
  "key3": "2j531UbWswaenaviVyYcK9aV3xaFj1GtreZD1c4BVZ5WgAbWSSPPcYPgdDJWrbjB64mjia7Cc4VqXGW4cdeADHi7",
  "key4": "5SFnv6eK7ssRMW9a8GVW1LrkC1CGrAGwZ3NJeLWChnaskNRqZ79MRxjdxqeEbLEMqNUoYAXBVwgLse8YY3PrTc43",
  "key5": "5AJpHkVSzcWhzLUMuKe3tkPFUxPse2gySMpWYGQTXLUVFLP3Hh2gL86w9WcwJR6SheGPd4fWLtiWtuk6jn75bhEh",
  "key6": "4MMvJGKzLuNtK2GCUVZqnmFH5wWesrEZAf7xkyviiTPFUT9Bgcs4MLNA6YM1joVbQctK4tojzYGm3xnEbtnQvyYA",
  "key7": "2GkET9efa7BWxSCGrnXs2kQJprPqPbz9yv7gBLnPUKA6SLJ5sWhs5gRipg4M3JqhpYBZhctfENfdu27CG8mVQHCZ",
  "key8": "AAY1kehzbYiDtCKBgzQXJhNJodf89hcMRQuYydKgyigsiuMPHQ5vA7dS4pWhs2KzeHgH5kN9mMetJnczSrCWkmk",
  "key9": "2297t5JWftboHCo7PYcvzyNesXsHt2k4zosinrBXC68SeAifHMD5NDUvFKcgciJmm2BnuHM2Z2jAGoqmh4PZNZB3",
  "key10": "4u9BvdvM6xpTw1F7JZJvjwnyEAac4yK5yUE2FTV1WXYWNJuggEHa5rCdj6HWZSUV93bz1NyCYH5SWSPLtch1Nsvv",
  "key11": "3dB6DvstDGmGYBN8QNdMQYvh6Esxfu7aKsrfc6GkK4YN2Ddd1LXEDX2kjaeK1s6hV9asct9jj3i9VWMHGwGXWgL",
  "key12": "GPQRnQ1W8BryRzwdN8QwjmD72LFC4Woz776f9tX6Kk9YWBpWw31dTWbYTwr52vYyynyqFqCqrWMHPcBE9scNduJ",
  "key13": "j86ooLze1xzqCor5g8v7GWESa8TU1reATh1dwR2hdwuX7kTG1Dit36n7mzucGCWdTd6CteN1H7Y35ZJbKfFbFfv",
  "key14": "21pVwpzGehcNjbPhHS6ywGzsv2KJbDX5ZFqbUrL1fW9pEvfjv8757soZ968Derb9bjnAKvvFdrH9dMefj1b1CRHh",
  "key15": "5BRTg1GdPkHbM7uEobkoZKTdxEZmGce2joo5Hciq4JWzqsbczyVtc5Sk9jXvim3WDv3pqk5SH62BtKgTjh6u79GE",
  "key16": "3kT9sQBjm7EXGMS1KS3RWKYyQVZhSxf5cVpixEZgqEwb58UkAiQ3wHxaqzT2n7Lnxx88HNbsSVCeZKm1vh7M8kUx",
  "key17": "aeBkbjEoi8UMwPfBojaaptAB4SWAQU8RPk7pYFAvk9toPY3C22X6stt5wCgzinTmt2cKkPK6Q76cfapip1du74z",
  "key18": "28DdQeFDmkTYbFwgvpLoFvGsfZbTgaKNpA6J5KrgqQ5MEDbQTJGzWmvCwCe6FNkYMyzMiMErsht2RGFmBLMJrBxB",
  "key19": "2FBXojfSmHSYL6oj51HkN5CyivQvAut7n4obRZwN1si1u89Vrek8btrhLNXg7yhpV3JTief14cNUpFWywoSt2A6j",
  "key20": "2cD1V1vyPouH2KYiFNpgLpMXCAvpdfzLQHh9f44brhMiTdudMrMxYfKNzkW7to56deVm9zt2ezqMCRD2WxQwQgvR",
  "key21": "MuYrE4G1D1KtcQa25v3UijhWdPcNoZQZHPnJJm9RD3aNjJ4W5turHkStHRuZwBvqngQDDq2PDrHv1eFwJkAeGfC",
  "key22": "fK7ntLmkynNSymCqmQHFZ5jUwSifs9Mh4gPuVXu4bpQ9MzVM3YDVx4oj2oUgJNEbEpyEvM5fckt2PeKyoLhmqwS",
  "key23": "3ppwy3JcwJ5Dd3hEn79GWut6DCmFAr7NrUAG6zU3p3xu3nghvqorcdXd1oNVo49L9ZiS2fc5eEina2BqFGNfgts8",
  "key24": "2YyL9n9ZMhNbVEyiSuMERVA8cCfPnGnMZRyma8aaUdcwCztghZ6iipfbp6SfVDDmpEsWzPQ18expEfdmy7f5nafa"
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
