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
    "5MsP1ReFZ14VbnPuwpCK84S9eUM5XcxKYGsvGHVbVfB9SRHQ8Xf3uGLTprS3rvrpzCwC3H2BjrK9iYvRuqLAQXW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33KmXv6fau5BzkEZsgSwFZjwibCYNnnDSTvkcQGHGkaoLVWzT114cs3cxYircD9cf9wdCM41T6S8uCUuy9zf7QCK",
  "key1": "vPck2VPtvcfgbTjyFVWFcWBoYJsPsX3PtwCEGW1kXt3YY9YN7C3VGEo8XmyZ4FvDhENnSLq7uaTnyuhPrRtFnvN",
  "key2": "5CxntrH48kGNsfvE1qW3Tgp77x3cYfwNpBLt4XGZzocotMhjbifEizWVxms72VMAciF7EQc1itG72jvvZiPDuv9C",
  "key3": "2dv5uP8nKYSFJEHsWN56uYpUrWrHro6sW5qpmfwNKxh7rYoVPgZDKhs1Jtpmf53e5ki1LQXCFAbU6VmTwPdC59E1",
  "key4": "39z6uP8YAcBnKaCrJVwhGg8Tv3Ey19tHGqw5P1We2vWJp7KyjVx3hBp1fYagT83NroPXM1fSsdu1Uh11VxpFVXVD",
  "key5": "4VrrfnR6yh4GWYsbsefE634mDu5LoKFTmVwcHCJhxQB87BrU7Xms53R4PAU5D5dfJBM1Ep2DGNBELe1evot2sLud",
  "key6": "3XNLFwTNs4dUvGPZWs8jBHYwqrrk3TDA5Ww4cRGLw9QscGHVMh5gRCBzoWQqzixFJRZrzgCZnXsnaZSZgRooDr4S",
  "key7": "2hNX6TXsDqaX48kDtg2rFP3RUo7dhn5znEgrTtkiw8D95w5NeomStMfoGKoLk6civ79Q8NDGBf6b2buMeMStx8qc",
  "key8": "2xtK7BTAjMEsLQ9SpmNgReUQgnZQmobFPtHUY5k3aWuoU6JHZNrVt3ypo9f6YRKkBBuUPAFyURD4wSJM1TvcXSie",
  "key9": "5TTytSZUSLxyyXbzyhEynQKSCCnuhQ7rkEW9u2j98f6MVRaF2TgJMf87BSwyUEgCJRF6A9FYsASgqLSfrZH6AavX",
  "key10": "2ETqAP7vPbfFKcMzPE9CevXodJBAbhQHn5Rqi2NN6m8D4eDw5rB1z9MmFvqALQM9gAUbWd2gQmR5C9jZBcR7e8gT",
  "key11": "ZUnTpAvpnVCTyeEfwksppcjH6DYs8jguS4EJiopymdi97c7WEpKSNCMbh4nyaPfdLhbf4Vavh4R231yxAu8jGhR",
  "key12": "3HkAh4ELeSZ6KinrLrRZ59qaukPnBFYUsqjhsgNWuYNxsxDCg3nbFykwBYW4jMZ9iZrNGZdqSmp5NR2NosZ1v2Qh",
  "key13": "5Drp2y5FZmeuFMDqCpg7KoXCVxCF4M3c2WwprQ3KLZ112zUUQK7rHUFok2ZbV6FEgwJUKqs5Z1zBiYmwqPVREVUj",
  "key14": "523cLDWhgVG9THSUhiRvivruncnTrwM2MKu3CBU6gYEqX37YxGofbymx4uXzdcVAwHX3SZtciBSNPfgQgUFyS2q4",
  "key15": "2nUfEiLkRecfG12X5cbNG5bnokMuFYAh7WToqCiEYexy5XscnACpbdXjWfcLKgsBSuaifMcqCCaGRtm2BdWnPmnr",
  "key16": "UCp2zjqs7hB2843Z489bJy2pHnawFN6UJr4wt6Y6qNzrfCKm4dFzRbeXjVqY7Ao6KXGvpek89LeaJMJingskKub",
  "key17": "gy2exxHYhz2u1dT8boSH6SzRpEkJdzf1gyWz13y3Wh8Wc4wFMfooSnJVHmc9zvnvuVmmSzW2eFSmKhrjLaMZ798",
  "key18": "5wCrxtPmK7uubJkcHboJPXxMAcLu8bmy6XDdQyyRjs8ci92EEy3mzt7QVzd64pPMYZrHnwPR6JdXUVjoCpYSjuRR",
  "key19": "53jJ6YKSvvmBCwfaQzPNnXGZgDeiwZ1SPUTn4pSu1GiH2FDCG5BAjqe1HgUcoQkdk3TB8Ug82wUT5KCQCqxW52jN",
  "key20": "5kNRiQTRGaGyJzWU3dXG9PKPCVjymUdDXefSnri9fhcxCbcsiS3ASKf7QZSjYCjnYxtD6kdNDbZXzkXDSzarfwpq",
  "key21": "4RaZknKgeHVWbPk6o8MPkkCiS1C9J9JPDR9gao2vKnXy764YN3LgvcL9mPKKTZceibz7Qwg36vmdkuDtUWC849Fq",
  "key22": "5egaTMorhrqp2XbYYAwaFLHrBmCgEwfVYcn9v5qtBKaLV9ndaDLxv3YP32CWQVAbzpNSc3HjGkLqdj49ccEaPACu",
  "key23": "3iUiX3jJanktb5qn76RZX1vdgZ6CqrYUtzGZfMoYCWzrwMf4L89zozRsYfhoZP63mkQEpKfcsGVxzsxnTgcwBQTK",
  "key24": "3PPA6CrHEGoNdsVYEJDhPLUheRi3QfvnT1x7eR7L38HVAyLMCxKdG7ATgGLjFMWTwpyhfpYwCiGqb4usuqh6PrH4",
  "key25": "3BnjWXBfjYEs7HeizSyPJYuSLPA5j6mHGfJT4pH9C9h2T84VhaLUfimTkW9bkBgKp5y6wRzLUxHYrDL9RgA2B3GR",
  "key26": "4L35K8J9eYWn3KdA1voNftmJo27f653pf61rJRW4JTBM6XcYwgTQePT2aMpof9rwSFxBBg7hMtRCtyTsuLNevJdS",
  "key27": "4YrgpwTuXBNmDGJwwrJfVwaj5GVxuVXbiQfxrZCsH3NmA8ksH16A93vKcZVKaUhN55fo3ziLcq6BifrW4G5VCkJm"
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
