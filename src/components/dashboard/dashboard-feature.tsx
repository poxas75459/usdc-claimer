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
    "5XjbGtyMWKriaYHKgL9ZDwNLJatHbkYuSZnrhTSh6CMFv43MzcQcoYE35UymXebwHeTTMZW1vsUbgNKtsS357Lcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LoQvoFgxD342erEdueuxhYZ48ukTXvpm7qYSX5Xs47AiMrWPSbp3giZ3iDHAQcJ4sTpsYKpbK5vdosAkYGXvqG7",
  "key1": "2MSzWGkbaZu1iSd4UQd7UcwWf3DQoZV1W6skzEaid51RvA7Y4n6mfnp8m2WCw13eSxEvGMsFbnSG3f4G8VX8DVMt",
  "key2": "2YjBXP7NusyfPdGu9f7ydtJmDttQqNiiDKYFKgA9e1xgu26dxjR7qj2piWBk3pNz7mx8mkhwBCSSk25TSLXVp5Tf",
  "key3": "26V2G2w8DCM8BguFrd3Vet9y3r7fFQC4hr3ssxjyhSam33qKQZ2nH92pmTYvBR1p2z8fRAnLKA4mMxEttxejJjqG",
  "key4": "4VFuNKjM7fH1e4Uw1mAgXFftuhf3xxBS6p9cjHvBw8tuZXTPzpuYkqtPghqSxeLY2HCpz6fYArn7beCgtwLULMtv",
  "key5": "sECtFAV2S59wkA9ehxsoEPvpGRPGk2SX51csFqQW29kEbpo2WX7jzQSJBFfRwDduHoJkuB6hQpwXUfhnheV6ZNF",
  "key6": "3VrSdh932D2nAb6PLVj8q6GDNnvjmQx7ykaqpzFCzV9tZXzUSgbBZFAKAH2VzRV3SevzosypnfXqXGsX3eERqsk6",
  "key7": "5kxKiyPVWSyc66UFGCd4zeD4jPzzuKwLmzMp6GX1GWJucWgnmsjrqxD81tNFRq5mXFQ3Pz2L32JehAZeFJrxHxjz",
  "key8": "35fSptVcgsm5zMEC86naZqms44srfEnbUvRLvyg4nKtVYiKMvJaMHTnJEX9Wenb46dQtc1QS8Twattz8QyRMV2Wt",
  "key9": "FU8QczsMWT9y8rLjwTCdFKwLLgL5PbsYgKHCYoVuCcaSMaEfbPBut9J5F2KH4D43T7jLg2RmSXTkLsKRhJj6UKG",
  "key10": "8ddoMM5hNTc99SvASA1vXQV2A8YLVusk32rt7jEy7tKLoBsZFQPb71un8dsYdraCJY3w4VdXYRRZL5H3JHkrWq8",
  "key11": "b31ddQgqeNiEPSSpXkG1LHjRqiaJbBUnE6LRUb6b9awfoKdxLrLwTyZKottBhvG5cLkYzPW8yUbc3dwVU7vUC3T",
  "key12": "5FY1ey8YwtZVPAoV3AZCxPLwrKjbZUyRfd2avG76y2h6XCQbETyK3afbCf8uytdR5VjiUvNDMuntYDCGcZaFq3kS",
  "key13": "595bqmaFW9sDAVX4FJ4akAJ7n7USBw4RqXg8v6cYYPxvGT7T7DT2ttfYUnxJaR5XT1m2fktougyk68s3YgPNDH56",
  "key14": "5hSbpHmJi5qA6rryaSGy8SKZFKh5V4q8LQmnaFdgXBYq9pietxNE8JxHrd1eYpCmbtX98Wz2w51pDFkk1Z5k9eAC",
  "key15": "2KKQaztVnLnU4moL369bxNd2w6PzUue4UzoDaXrUNWUzdsghbhUFn11KFyRq3ECgkPD5LVzMFhnzMMzt4LcVY19U",
  "key16": "bJf18QTsxb6Q2D1foWfWvxSkYzuS8jz1uNaq9pHhh6r52iR2bDJaq5cHbYqTYu5ASphSMJyj88zrBj4ocuowSrG",
  "key17": "4J6Zq4bfGY2q86n2goCSc7ZgSHmnriwHLSSacURMn3uMY1rkY7yRuwVAPsGNPAGRUTwS5MYLQGDUsSGXE4ckoKCg",
  "key18": "4kuqSbh1mNPxEmwr43nbJqBvfkRQz6t1AyGrSp7uDYzJRRBvF7UEQKA2mthNuBccSMVrVGHvcPgtcv6Cf3HWjuCt",
  "key19": "2AFJ4P4ejRS8AgJTijzhiicGNuSzTZMYo8kLWShQmRfiVQ3XY1fcHrm7ryYf6u9koXtLsvg7jpDSMzP69PYGta18",
  "key20": "5RT2rE2tkzjsTdNCvd3tN45XsrM2Nworxa85whsfNgw2Lgi5xc6g6xTq1XQDx2T44mFPuYAmgfvzAR7s9i53DkcV",
  "key21": "3US9jXzBQYtBpnceTqi6xAhCaWxAzPKgaEPat9LysR69imdWW96Q6QgqdvpZm8VzEU7W38MPRJkAWmftfG8V3qmf",
  "key22": "3pij9VNJmtMyT1w1jeRNBrn1Q72a1r2NLc8pJMRzugFh5Qn5aswCQnGf5jWrakLeAnn5e3w33AC4LRRXugTdxNYz",
  "key23": "tBaFaEVsTKij3RKWBTWyiJmFr9CDPPtDeaSgzNFrqLx5eyygtUxiRh551s9dyNdAEm7jFg67VzJNFzqjvTSAXPa",
  "key24": "2L5c2x7VCkAyVfoPRDKfSPa7hq5t4D7FpoYbetzg9pe4ZAqnqyzHYKnCb3rLVKX3x8nKRJHoFbjyxbtUyCuGGei4",
  "key25": "58St5n6w25fWYV8SBiszVpaoRjhFVXwt5uSRaAYpsRDYkLDbofKD6Au9JXMPnA91cygvqCRc2pjcMVLPaNoiRLpT",
  "key26": "33ADmKiKfJtW5WjZ2EszbVKMy26cv5SVoAm8voBPNzHPTcFZA43Fa8z48ys1JmAphiBJhycejYH8odRuH3X4B8Dq",
  "key27": "4hekUPSZpjYSdDb1PFfkGDra8vLtktyxrN6RzS41W9yVwuxvLZi1XGKZSXwAie9qKWJwVfW9PPbmWSbw1Vo9Aa6B",
  "key28": "4miX13r1rjogJS6ABzLKxjrZhTYSXAWF4t4dRwKyXJZkgg3vRBtD4cXmkFu6BpK7dHsPJfGo5h5qD2V4PHkhcrYq",
  "key29": "2mZ5Uh1xaJUsQomEMofu5WcxiYQHzDnxaUobLY8ApLojmhsdvUYTyidiTMTXa4yPq2KPwecVdWA5JxBYFWQ5QYqR",
  "key30": "474ffFV1vWTPvppzMQY5acCm3gwwY9PvTX8yTRmqFceiQutD1bouj6MyXtzcYN9Az6VWTXK4GgbrFU7jCYLALHfA",
  "key31": "55GzzikesTryDnfGzgnkWSwBiT1JupGe5acHxThzgdrpnBfNWko3w3GdHUNHFjtTtC7n2iYnnDtNNCynH3ZGZ5Sm"
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
