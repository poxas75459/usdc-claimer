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
    "8KdopHmoYVmfn9xqoL4g6pYcWG82ykFvWD6FCtGTnNxQ6YsgAZjbveFcSApgjznWFJGrZunVL6rQBsQmwgC7GR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cux1L9nZvhT4mTfpez7TeyftRpov5PwjrRgQ8v6ddKyWEGam8aekYTeRmhgWskp5d7hKKGtw3H6pLfEpFiGRXsA",
  "key1": "2nrgV9kVQkgT3inVA6jRJA9WpoazWghdXse7WUkkQLubfG2w1nLP7Nr6L3DvFV6GmLeVvd4dzcuw77Ma9YqUbf4f",
  "key2": "3EnV8nFx6BPtaB86nzc6SYn1mWQSmToWD1zEg3hYUxC411L2VXHrGYid3f33q2UrjT3nJTbb11hzeFbpAUn396ye",
  "key3": "34BwAaTdCy89G9WCs8NSZ4gF2nRDCKgQZ6939ECamSGugwSyNEDfdWKXsHR6JPmDeZnNTSjGTow8vjg76Tm1kpQh",
  "key4": "2SGGDbHxHVLLSLvWzTurMLEYQgZDyfWcfCmymN5GRxB1hRPakm6BuePMUtHPme4R55stVFdJk48jrYt2Xo8qGpdh",
  "key5": "2ci8upvfNaTFZ8YJbqQ6cGKcyHPoWLhsB7WB2Ln3VdnGroCVgV4BZbtkrQBH61eRNyYzE3beyfpfTorMr4BDgcFA",
  "key6": "SLsTLWdeSyyMsWDacWFAnQKcMz8v9ADYPZ2iyiTr1i447r32KwRpt7s6bVAdvvXfUZKDn5xrrkRqRC9dC8VTikp",
  "key7": "5ukiTwT3FTBtEhGwg1os96dXaKNaDWZA8NvaE9g7iDCxMNkSEWyRaWesGiAJxKvzLhp71yyZZNPjnj3tFKpvVuAT",
  "key8": "3r7tyUQRMCoq6cUN1xAYymib3hbpbka6BWR3ADzPWJMb8vbcfqeCV9bjev7UEPa28gaQmCCsGQ36RFrWuhEiFi5T",
  "key9": "46zecYuzALfGoMQB1E6LdBiKnLDTFPmqNUZWEcNXMJhfju3qJ4vq5LufDho7v5JUcQ3o6ofx277pxoaDiAFCdtkW",
  "key10": "3p3eH32rc29uyMkMEb4tp9EYg6PLhU2crtNNt4UHXa56qwyvaQxx1sGpdYubyuTkQdnMyxxvxdDJcFBqLj4i55yS",
  "key11": "5fJiNJik8hfvmTtL1rbCU1zhh23wTBnHXF5T6HtpyqLYsE6BxiU5Eu3dToxJL9jSWMAs6ZTznhrPFWavUsraeh54",
  "key12": "hxag27Vt2nEoiKVRN4y1LcjQy2o1kzehRMLgSDitzkeGf59jkssk1LC2sEXTBfnxyCbg77fKYA6Gh7aCm1MDRDx",
  "key13": "5XZXCe7dktaN3BJjzRQozGNFxn8svYxf41Zhsiz835vVxGDwoRPiuL86VbRUfBTsKQHBvYyQn9idUwNqff4c5yUE",
  "key14": "2XeULcyFwbFcSeTXqGopWGFjW3nz4qZwJjesqEDiUyJeVNaovvrNBQ6LpiAnAjZaQhyycWrm79WAmNrXRw6mmfaN",
  "key15": "5HWqSPMAzN5EMVMDH1ZYYpH3ehD42RvBj8rUoHjKb7ZFqmgrvwRQv629MWAuvxTa2kwKZ5petgQ28nHmNh8hvvtF",
  "key16": "3ECgErqR3kVVM1ddgV865AVwxjr64XVZmAnCnPANhcxek2MWCfb7LoudbHsqiYEw3DZkbs5NetM9gsXAkaX6wUR4",
  "key17": "4LEJhgLFfmP7R8MDp7r5rcQmH2s5EzEYeP6uUnVVG73wmv34yvPfyp8BpDgFfSb8A5KE9v5Cgvya4VNVv3XPoXvT",
  "key18": "2XDLhyMBBhhPQTRrez8Chw8cH4JqJLLtcxPjnrCpxyS9Zb7hHXmugfmGqieU3hyjHLpEfAbuJFqTjpuatTRsqK8B",
  "key19": "2uCGDUpHW51sCsJ3YGycRYibhRVRoE2Nrbn3s2feuBmALxuemYEPbLGCpk3czvefA1nkYFDprzi3UrRzd6C9RorF",
  "key20": "3mCokKSAkmrtSM4H7DpiPDQ1QV86iJV6FKvLxfgZfAYm4pfErzskUR27ksMzk1pDkCK6JjVTsgJvAJ8CHhTvmVzK",
  "key21": "Z3cgUPZRXfjZ8vBS9feH6bU7UoGMAbyGqGmQpU6J6E8aA3kFmnKQSY2JMGMthRRYf1MasMMJtiTRBrysJgze26V",
  "key22": "623p2kZ6Swua1i1wyp7YxWTbggL3z5YW1hxrCNS1ruCrUTjCVoVGWnDSmvZ87U2DLoZvtoQNCG6wcZaAVbewAbd4",
  "key23": "4AKUuuFyAHCarS6E7o5WVRXkDUVyTnmM8BFLnjLJtUZH6iq8nDsRdroFaVwzCuao7dFWi4EUuKVDw5Zn9wzHnZWb",
  "key24": "31wtkAEX2znqzPKYSAK51HLMoM6iJsJ4wcsRnHYFzVFKQg5pPWTxsLW3uZpkEiCZKuq1xtBdqLJUPaByZ6sjZWV8"
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
