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
    "4WjcJwBhkFCiRLk44pdUENpDZS8zBgH1sMLZzjCcUzdtN6tUCnGrn8Pk7p3SDK2v4tDnKyo4Liop148b6BUMVwML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WBJEMEmkFTkaPYgb7vcUNBSLamvR5GFo6gyTuTPG1WSXRkuF6su2T7st9jwWMC48Ki19egCqfYw2uPVmRBDCWBX",
  "key1": "3hse7jBBJkskudr1JP1ns5gdHKRZqMuUJwpYHWgLaYqHkfHhKCMsLxZgAASbZVjffE3hygeszXC8Khhk1kE4zAnM",
  "key2": "5wn2bpiH375sCXNvVJcTcqUitVjg1bXe6RGSVkcfHG9XparKn1Z9iexUnjzrTHNjhkodbFMbyxXCtrqZG9XNRUgg",
  "key3": "51rMLkHey6JW68to21rgNT5nt1BqVWyoEbsjgCe56yHLPhcxFdVfGhf1prmCPQyYqAFAEMNssbMvEpb5YSeqSdwb",
  "key4": "2F97HCJCiqW7JTqjeiUeaoaeGXMDNt869yCTjUA4zAdZmKubw5NBkVySdh2vpw1K4biYkWFzw7WGjca73Hu5xXHy",
  "key5": "3P7hj89BJypacSszpBVtz4mS6GpS9MXyLqKv99wVEGsjPEZfFg8JfoKT47qLzDGx3UBdh2HxCuSTsWuWZAZrmwn",
  "key6": "3JzJjjP98QYmFHLqpF2thMa9VG5yjrATytziWaRUWKutTSMGaUk3LaERzCQuYowjpy1Do7MYzPhBZdijdoRdRHcX",
  "key7": "57uF5aztieHDRw8PyTGE9eoay6VZXmyyeHSpcMFiZHjMXeCXydmAmppYKCP6ovQkcHKHjLMeM4fu1jqwka8HZDYM",
  "key8": "4T8CPurkaPybYLtanbL9Ep8yaDiDA8kihFUCSc6KCUBD2iCHaBZ55igBTyA8ZSQZkZaajMcRGVkTCwHTESVCMcS7",
  "key9": "8sfQcb4k5gH6GYM1KxLkDXJqdYVnkRGUKfYKvcBrgaTxj24pnivVYJDdzkFnNsPBXB38wen4PM3qsy7XTs2kYMc",
  "key10": "wwj6fP9j7p3vrynSTJdijKX4AeM8f1LQTbQ9f3jQz1SerfxQFYCkCsoA3JXJjVcgikxfs8KeAaDG78ewEx5qrEG",
  "key11": "3Gd6ui2kP3qi7BZaQZAvhgbtK84JFNCCKhuKZG3zLdyXbkS2vopzmaLmjeuwkHjMuMUEhLZjre6nHj1jiscPbqtj",
  "key12": "5xGUNaCdd3guqzJozXL7RuV73et5tFo9vhPY4XFfC31RDgjV6ZBtSgGjTMbc64J9YdY6ATD2SggFF56DXgKDU1se",
  "key13": "3JNaDCT3LfwVL6ymVbkjpkHtwduxNX544M9875CtCY8Z5xv1qLnPvMfB6cHSCFC5eMzRbtUs8RBD5XQH4sF6B2M8",
  "key14": "572kf3DMgPBNmqD6vNJoars4LGjK5bRC1Jm41duUCjMez3vLXfzK392RcoNgjzASzuqahMzJUCDR2Wm6RkJYkFjc",
  "key15": "Ayf5JaQ4SGamw994oS1kh149gvrhKeigYU3BFRif4CZd8EWpE3DQ4LjuXkXcNwn73c5P98FZNs951KSqarZ4xgi",
  "key16": "2vNHxQcsWqpXfoGA93uD5Gg14RT4Uononsngou7JwyEFaxKt5KqX3PMNvV1tBfxXQbxwC2sJdeFcFUUtGqr73ucK",
  "key17": "2UUxsf1oULahxr3xyiTPfBX5Z8B66AWShYGYmA1uBeL9No9k1t9mJ6bghcHRi8g3hpRmtR6ycxFRdbRw2o9o4mVt",
  "key18": "5b7SByescRaxnwHuNbZJPxiwf83Kb2XBLtHrRLUujC2bWrsM374dwCzLjdU446wgidRvfmPKL3eaYfur4ssKjBKZ",
  "key19": "RQNoeUDEAjqzTKXj3x2wx8nnkqyvVPmtwUYdxm59aTTGgUjqG9ZdKrPeqsfkhg4VtZ2NDi4G8boNeLe5fb4jtfL",
  "key20": "arh8VchyHCLVe261aJb1TRR922T2EsqkJazoebPYdahRQhBLeXEQCBvXyonT26hNMtjFffFanFmrMafik6ioaQ5",
  "key21": "369CCGPeouW7y3piLAh7mfsBySHT1BwsLRC5QafvXdPd22juJUhAKiytFfrCtGZY9Q2bES3ih49iEkuxKnWwjqsm",
  "key22": "4NHHxZbFHzQ7mkQKczmZNi3LyZjkprtFZPSLjgMwTYASw1yz77HPfVUb4yu6nBcTBNjsuQCnYFVZwhPyV2xMNfjb",
  "key23": "4gTuM9VWYDEv7FmX5tNjYddPFvw1fpS12dhbFZe7sjxyTDaZGoJvDRTy417EZYuR9QtfD35Zy3uzHfu9cBKwuonB",
  "key24": "3d9qs6FrfcoDX21uK8Ev25jEcS3PDbBStGanm2bPuzzLriSkxRM2WHF3bbJgvA5xHqKfe8epe17MhZhhdVUDTaWv",
  "key25": "X7gzSmaAa8EXQwo1qXGTwsBzFGpbL3TNMEaWjUp8Bm6CLsd4wzikcFq23RVVo5PsLq1xzESBHjKy5w9Z5HAsgNq",
  "key26": "3etRhAgszqaUCTnZwRmM5CFDXLSXM5LzSor7n5fFuL7bgibUrg3SL1tgtDXk6dFJiUQPVaCX3LXk1icg1V8GefEi",
  "key27": "61rRJSnL5e3oyNowXSXNuYzSXMHYStgvx1aepUFSpp7rTpQXQe4tVDbEGsA3Ur5VoMuEx8368BTVPuXbKCQuyBxr",
  "key28": "5NER2EfKwTbZHdrPaRsF5e2NcUNSvVYVLF9n9CrqMuxDKc3WQMN3pTVpnGxdaAQSKB6jtgW4H4PrXYegx9gxFEK7",
  "key29": "3hPfCiPKwVJvN94TjANCNegAqbbN5h3Vbp4dX6SZe3ADVCev38DAJD5wThDebUoqutbRQGGy9eZPhhciamGYKrNz",
  "key30": "iDbEDL8322KFmEM2LR7NyixzXVPWiKDZmpQhjzKTx5ys6g9Pt63zUdEB1fMy56XgvfvHjeoXrQ8VUVVXRViUbNA"
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
