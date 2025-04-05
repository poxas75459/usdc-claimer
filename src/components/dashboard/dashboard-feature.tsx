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
    "8ZcAqj7JSuT5n5GNm62m3yHZtacHpQyguzNC4f7CN5vSz28TuWXgUDFZwncaSjb91dYiUUj83EvRE2sJy3PTe46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQQshPJQXATnSVs1VDUmDMY31fC1w5XC4KmB939QcHwHUhwfm8JnttrPNZq8rbT7XfMKtvm6xeSuPyDCDDAcACA",
  "key1": "2vjPsmcidqLwj2MSVGYshoeLyudsDGRMzYz2SqfmL8S5KgBJLc8K4M9oNNTeSLrz52BK77gUnfdub61jB9okB53s",
  "key2": "5da7oGQ4xkQTXfdAbsgsXgfAGhdvRRAzNJeynZyLNkohcuc4cyx1s4VmyUwdMLDu8RRhWtrHN9qZGGG67w24o5oi",
  "key3": "4UbkHy2NAjFsT6NcmQVkFr2RDQz3CwLEGdUpwr9AxtfpD7MPwCkxU3wiq4L61Pze57WwFRUSJgCFxn6AogeVeGGC",
  "key4": "3wxW9A9J8dVZuCbNtXmdWHodAHoiRoHSLo6JZzz5PigDLVZgLcQQwwm7SU7X9kwUUVxzMpyt6582xAV41pugkgMx",
  "key5": "31kp2VTZzg4EseqL5aHZkGg6z5rNNv6ho6BvPgswPB1TadHZeJCnVxTcgk2zk4CN7DDXHLYfSbsfW7FL7JVajW2X",
  "key6": "2fJS2aVXUdGESuQRwwJbV7uQfAVg8iDQGaeCe8eaPkaodoq1iY8oUKimBryLC6on2JJLngmDBH5RA7emGgpxH4HD",
  "key7": "5rZVjpY7H3sESc7qtN6Uf9vCW25jdWLpfHKDUyTasAa9QqRFUwUFH3xCwpdv5zRJk4R9WRaFY2Z4bQb9VULmPBEs",
  "key8": "5FZNqH8ZXxXo9nhoT9A1gCnVkb1TdsBjB55FiWj1m81NYJnbtAMyyAgHEdxgz27toT9WZ2P3L8BAJtmbVBfggQyD",
  "key9": "4GZMiX8G2nMreL2qRn3DfA2sEcNC8NTVwcoDKwS1LtiFJBmJSQhHRepTtqwRVsZgdknaVaSDhfBeAAbhJhEDsWRi",
  "key10": "4tUvJGMYpmunGTPZ5voNgmhpvjpSPrMBqU2zV1jE37PKYwxeAqm2ZPU2K9EkqZG15VDffvaW5BrhU7St13FcQkDq",
  "key11": "2q4XR1UeesXMT6wZ2h1wUTSzTaT4ATGykdCsCLzyt7VnbxZRE5XDiFLKyP5SuzNPW1QKGNL67LYbLT5UYWK5awSm",
  "key12": "5GvpUi5tEhZaQdoqunoYmV41t9SJqXFfvzRqJa4aqRcgwQSVupKVjH2EYmaytSC56QQ2QTfpLwFKS2xsm6TawAwu",
  "key13": "3if1av5NvwwcYp7NJ7u88Ca1WaUkRz7aipDEKwvco3TDyx6TXYJemPPf6NZ8Tif55MfoaXxEcNesz2uhWV3jDvhv",
  "key14": "NGuhdEhifANFUoHQZuhZyU97p6qLBuLDeqb1uPMPpgQjkPJr9QiyJSoWJoS4YBfC5tHAKJA2DEr8574E8VqsTqG",
  "key15": "hRiivr8QkqzbPc8gW1g7Y3KXVn3HG4PdWUgfeA27hQtzuRxYGNxu3zPcG6f9uj6Cy9nT7r3jPMqAoFKSGQrfPMT",
  "key16": "2hQTnvBEM1ZvVCe6V3i2e4j34gA3j3QY6y1de2ooHMffDjx1JazVgPGrFwZTEXGkyqvpesXQDcTwpVQv2JP2m9gi",
  "key17": "3SpxPG1XucQUgtEzufS5S7r1VqVCfY6F1Ft9yrV41qYuj1gRxdCSVmvdCCRyUtXbmA2VQPjwBKPRYsTTt1JHrZuY",
  "key18": "3t9VMk4gEakuNByHa2t7U8eCFHPMVAr1t4rSkBpmz4vmqriT2zpZpMk6tXJh8s3yVcfjUzrD4Gh8x6d3h3QCPZkQ",
  "key19": "2kMfxtHCu2SGwuQHcV1hK1qa7ZwUM53V7chD1LAsGXPoaRLaHdDtoCEBozgcEZ4TmZhAP3yNXLwktCTiTKtNRZTd",
  "key20": "3HAxxAwiEPWdHTAcGzfbbWGDrq8QDM1hodcWMZRyP47XTQcT7G8w1dkiEfyxNNe8xpGFT1UfF51AaSAmBoXexJ2W",
  "key21": "4bmUqo9U8oZy8mccy2cWFS896rJ7JVGmHVaQtVyQVVq7V2DRJF36F3BApjUDgtNSTt3iZQjNnScxP4XntyX2Tu5N",
  "key22": "Lyiv8QUs4Ru3jXHRid3xPu248HAep3xxKDYTJAHJjRPEYtVytefU6DqbNQWGTDGCj8j9Pu1bHqxhoWNj4fGaDsf",
  "key23": "D1gEsMwptGy2E2aAHgYgYJPqtu4PCHsjcV9JqKLaPc5uYQjMbzG7tYeFjqnVxwnuS2yh8YyqRKZnsMgYEC8j3fH",
  "key24": "S8UePYTa6wdbdoaTG3K31opDSrNbGDkEBG9cG8URx3WZSiVA5BGMUDpWTSBhFPQwXJWJpCo5WPEfKexr2jhznpv",
  "key25": "3P9wWJpRwfdpcgzU6EXUqmW2Nq44dTpJ9PxgYVLXRQHm1s7gtQFVAMD8hNNawuoi62yx1VwVg5v4DDAtRH3dp1tn",
  "key26": "473uiLCM94cJcfxgofC2WqNF53ZCEXgcQMpgyefUrG2e9aCZYJWXKyYxukK2gYsUvTUYPM2Wpv5eGXFjnXz6RuhP",
  "key27": "4zgsfPuerrqhnGErq6rFZ3tvvvW5AVBYftb3QpqxnLAbvL6u73N8K4ffHKQRxpFy3Udy27mAuWkECXro1CuRTRPD",
  "key28": "49EQ3fkmNXLuHpPnmSc9ofFLFnM1E27hMDJ21wHkQTSXtyRbBNg1f9YUpJnWvbqas6qkAdaZYeMTqUmwBrXYuTF7",
  "key29": "5o2VFdsrvZC7iWkkqKASub8c9YoDkzERwGZEgJkovJiZZy18P7GT2nUjtgRewEckhF19HQL5G7wiz9qCQxzkbPzt",
  "key30": "3PAyJB9WJBQuGaTGkK81WqS6P41XWsTUnwdc9LpqGJygtrE1ujz6ogjbSYtmhJm54JhJySowVcJqEpCKKRXswqo7",
  "key31": "4F6izy4yxaVPAGzyvDfNdyWzFCUSFG1aYp7C9g4mmYqCGxFM78TvYZWfAHEkLDxZkWhvx49GWo1JMCBJkTtbTS79"
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
