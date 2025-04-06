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
    "4tuGQLLDUiHzYoVqqivH7LCFcjS4faKGteMDeinwEAbX3sHfBQ9c7v2BmdKshn139RLwFSxqRNckLAMwU1Z4gMP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBDKdtvkrCvbac2XjFNnqTDZkNkYJP9KakSdvydDJqffUACEF5mzEMQ7xHkn1N5Wm6XVxPHnAGArh4Q3uJze2v7",
  "key1": "4TYfwD1tGHqk7PwPdDFubgE1iM6rCjV9o4cu5sscGeFPAqLtSeKfcqqvCynaQt1xN5P5oJUzsYJQGrtdGGsz7fj1",
  "key2": "4HuCFyu488VhtC5EtJhoUg2g5jQvx2MV6b4hGVbY7w66Vo5vt52FSDqFdv3xtQFdbKr5PPEL37HyxG996gcQyETf",
  "key3": "5E8jbQPz8UGAyq66jDVjmgYUuqbi81HpWZ3JV2JDj6KfkkD5GpkRJHF8sX1XXixNcPa9ZugXc7QDRUQayQuLB6VJ",
  "key4": "2UW2QNwkf1tJnT32UUDTwSUvA7vDrQTm3yEbdvtJZYbuHc9JvDg6r129yZoRYQVJ6EHKRpLozmAfgSTEdC3okiFz",
  "key5": "47o7yitmKhfX3Wbwwbj35463S2qAeoa2iiBtr18WSSguv885cqh4dWjX2wkjGEwgzuvXtLeqEArzCD2dgmBVwxNE",
  "key6": "DgUmk5y7q5NWkUum3sTkY96RsTN9bezguQz7CVd5jvaNvB3f7XziSPHWkicPRvkJyAkL3t2K5RAQX3cj6prjG6B",
  "key7": "5wZcA85MJ6ffQnK8QnjCnTvG8cfrB6GvbGK1HqSEqHaDFvKJ2T32RB72QbRNEG4gzSu15UwoHRSf1qYobb5iVNBY",
  "key8": "5B61j9QEabVZyVZ7qW1wYKdKDfxZuqsL8FPbZhY2TVi5aGJuTAPmF5LKesBKSyd95FbqAyhRsueJW6wQzWSMkkrs",
  "key9": "4vYjQn1p4Hz9omtTZSyqR6fLsQApMA1npNx4k3z1zfsPsvBudtkfNZSrcJvhoGvHMvrkKUSdPkoPdttE1vr1dXDa",
  "key10": "3kzioV3mriEc9X9wbDWcKMb9xjCuL4xREewtwFVtPejdMgxqDP6UYaR1uGPksEoJXLDRnEuZMcPmWsarNA8NtvUQ",
  "key11": "2bKASknKwedMtVYyviLnWyss5CPjQNBBSpnTNgBhai1hPv9FmyUD2KPmw4osYnEDMFUC3PU2XEP7AcbiN7JXMERe",
  "key12": "325FSyN9zh93MbPQcccK84uzS4fiRgMJ81m6Yty7z3KQ4m6haZtsYyoWCGsREjd4uDNRaQA7zpPuBimWEBWPj4Xq",
  "key13": "5oqRL9GfT4xUV5NGRAFpJyJm7uAHZeSTWftPKcJoQYXJcugMVVJGoyPaf19ypPTvBJAdPQK8kynZY6nq8KsfpL8",
  "key14": "2KQe3pL7baxeUwdD441TUTR76dSCniBLYBiTvNwU1iC7TvCLUDXHtXm38Nw9ECL4sVAGQw1Sue76UPR69g9mhQ1n",
  "key15": "4xjtYQuk1Spa2LKRNdC9om5xzT1swJPCwLvN4ffjbfaFAkfPZ6PZ5GahXPUVarDFdVazheMpsgQRdGcuW7akPUxk",
  "key16": "4jU2mDSDy92KSs2qSf4tUZcGh2Bn2XTc6WJS5eV6LkcYAgcvRrVeBYgpEaAfbhqGxqCETCJiCTzZ8T3vn7TWn79i",
  "key17": "28Z5YR7QCAsmQnf8tKqR4Ca1Qm43v8a8kfDg1aVEJZc6SzevvVfqCKP9MuwZiBKhn5YPAFxGoGeWHbFj7C1fbbYJ",
  "key18": "SDq98tLg5mSeJU19NGXbtaToottxZpaJxnWkLcki1Zb5yxTwabCygEVUurTbtXzrjsB1igrdVDSePjD5QWneqBu",
  "key19": "tvmJQ1To9kSVoN67T9yr8xoJeUp917ZxdvKpPKzXTzHtdzxHhxpkxHH7k7MFbEdkn6oD2p6cEiHGhCmsGwSujf2",
  "key20": "5iJRb4YwEpSGLWJxWRXoGf31ammJVFCTRHUgndReoPoAhdMAN9eT5DBc2BKnxTmRriq8GEB45KUP7yQSjdyLPrA6",
  "key21": "5bUfGJsBH74Awur8mz7HRB3QSgqoHBncvnzdtE1C9N2HsA64dCU3NNfDHSimVT6VjJS5GKPFtEBDKtKiddTLYaJb",
  "key22": "4MgJJ39Q9ezErew1zdYqr2Rg2jtLJkxRFpNN33VvzU6kPjyBGppRkz7kM2BSgfNGN5WUFTESh9hC1V6ryZLTADPD",
  "key23": "4U8jhXyUCVe8L7YtHkrqo8sfm533rLCFHCtU62PH9i9SkjHCaB5Pf3yTjbVCmgM8DbRZJZqMBnxu72iKq6kRxWki",
  "key24": "5c6JK6SfYsncCSLEYbz4q9qD5uJtKEDy1vrvFXAx3HkVWCJ58hABBDFtbjUPXHru7K4aC6HBmbokEbPnwJUJSpjx",
  "key25": "5px8W3X9zxVgk4ntcCoDebhBmA7pM4niujcbjEag1LshWAYbGQsP3MdWYbqxHCP1dNmwc3ASQqTTxrGMGnFoCyeM",
  "key26": "nUhVctXWn9KqaQYxsPHtCYmmZJtAypVo39qQkjq2849e65NjHjX9TygmXDSahSBxGLvWJS2TMU388eYCJmTCHQb",
  "key27": "2FXbmCj5Ptdq15SazXkzgSBmyT87uzaPCGNF792vJHJ1ruwYa81JCNikigPK39xVxe8B7NCGsMEWAnXCgrUGdmad",
  "key28": "2aXBqpnNXGQbPC3UbXsmtPDW5jAVnUXjTHa5F3nUorJzTtTvn5aidrYZV47hp8FwjF9U5g5ojU34og5zGVbJLgsk",
  "key29": "4gHPmxFXdGVFDQ9kD1VeFxz9viH2NQuCor5sVd54e7nwN2X6vaSMZRm5i5y9VaqCf8X53fx6nE6obhU4VxgewC2o"
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
