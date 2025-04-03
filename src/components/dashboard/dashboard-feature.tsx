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
    "4kbW6LtHzVPRXmoRXkkbb6M99b6NB6CTtX47VoERYga24RZnKDPzgnMtn4p7ZzADDw23MHM6SVWEZdbkPbZtdzRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6wML1oioazpKpwbJaMpy656DFGBaC3Sc5LMNyDvnPiQCQMdNC6fk9Gqz1HyFpJSrXjwv4BARekzriqUtLniaiPa",
  "key1": "LKsnzbT2DJ5gGuzyhi1oCy4q9aSvHRaJ2bzGUu1fQ1M3JstUwdPztEZUNCUQzstog9ijddozdEC8vB2aMhFNrNn",
  "key2": "iPKgTddjDHaRTUZdhUtUVfrekhaGYTwroYhqk2wfDQxZ1BdBbxeb2SGJriZKvr3fCMqGgYDcua8m2dM9Lh7cmdV",
  "key3": "3HtbBE19u9hprXXEBd5qEp43oxVGHjB5jpDRmX3xFtMH4F2BvRcWkx3HAhMpVv2s19jPg6LqZSbrMLgEr3ExXfuH",
  "key4": "4jyqkVH95HieYmcZVVptGwrcw3sTarpieAbiiC5vLai3UifTjinvwY5gt33usa8MQFkRfx5rPBecQnvwxQobNRyL",
  "key5": "26sd68z4gupymAdxtcyisyS2g27iHD88QvVTpoynG2SMvo4Gqinas9rm9hDvwigqARRGAz2ShtqYVDqq8zb8d3L5",
  "key6": "5T2bkjLNZ1dMXJe1oWA9ov1XgXbR2vjQM9JwvJM7egSqqR4Jn8oC9cvoVGirnxAtVWiVyco7P6NfLgM1ydr7W13D",
  "key7": "5AQDzJNHGzmGNw3QPr5Adrt9H9d4WgJ4XRf532dCxRYV7ykZEunRjCwt39NGo3x4Ec2EV3sDM5vaNnDxb3WeLReN",
  "key8": "3XJhaLbKdJQciDbUmuanc2TpvV3tXh47yybvw4r3pFgPuPeN9ByUioo6FGSt8EFmq31jqddE7yYsa33qgjiRFTma",
  "key9": "4dJuYd6XaNYYHQTCZrwyG9bu81z14osLbMySuPiAA4BaABUZ3j7SYNdtwQpW9qhCr5UPxqZGmzciFk21CH4SPs55",
  "key10": "v34ZvNczTr4rLwtiWfi8XMNPmkjxt6zCQqzhABUzRgtoJgaSnZDtm8tT8WYQ1pmjjdskPvjg88ka5Sybz4ibgRL",
  "key11": "46d1w17fy6a6V1RLDYemSkoWmJmVrHowDavypvcyDLMf3Yhw8RLkeCyneRjjhMYsy3wmqYr3CAWgnYeESxmGyHDp",
  "key12": "4FN1aywxoFKAX4gYDzHC22tbtP62Lfu79vx8nmKkLag7yTccmAY5s1gaGfYNyn2DcotVw5ZKbi5jcPRU2UfLx4R5",
  "key13": "tLio1xxBKcp9sAApc5uPe6m35Z3HHWYcbY9Y82R6iELGHzsGMUNgQ3udRTNxtSA7YnooJ3QYyigXBqXsmCQjf34",
  "key14": "35BysfbHLcoqrb5Vy9vUydPfqwxhAFJRuQCF4f49KsFq1ufxfAimxWgAgsB7BrLzubJJukvRBCNqbN2tLyKgoopN",
  "key15": "2q4oRTwyjtGUpNHkLMDEC7kEkzZmdemtFYrLYCfCJ1t3h7LtsqAez2DfbuAZZaK4812kexbUZErS1L4rB8HnVY8B",
  "key16": "3tHMhLtyMhD2ifFaZvGd4iky3wdNgFfN7T6UqN2ZTDBKavbjVfSQh3YBvrM7qy63pY4d8kcRRPfHSPdtsdHf6hmd",
  "key17": "3t9b1bHZqrdYf54NtcSHzqPJ3KyYtBpTegsDNDQxH2Rdg9QRTJdmAXRYhJYQgyRoc5fpNGBdFTJ4ZFisqye1eCgF",
  "key18": "2c8jScmq8LGur1dqSrkE98AdNZQxKJE1h8bTUzTQ6WQRuZqm7eBkbCxLKo2bFnc67xRhqjJGQiAN52MMJznyTftM",
  "key19": "29Nt3WmcYmzvN1w3KTW19ymrJFXTEGsv5U5fzNjxwwatvvUJoJLtA4N1PZSVFGtLhyUZkwUUsZWtNnnmAVCsy7gW",
  "key20": "TF135qGNz3hbLD1xUAvkFFRhUk8jtJ3DK8WoWnE2KFdmAmxAiC6bYgoTARuDRxWJa5gC64Bqvny76g2f1CDfnbf",
  "key21": "3t53nWRobAq8yUVPgGEqcVvV6RmjAZ9QX5X9uudGrvfhvHDizqibgCod9qY8vD5Z3SZRg4o2AcZkJsMqP5MBL7q7",
  "key22": "3bMhu351MmQUmbqHz3FQA56TwWwpjF2tuiM8VoneVvQbkb1ewUc42LtNcs4yxSGmMbFMt587gC49tc4fYpREpq74",
  "key23": "5fUVw8Ficj63tx3haGx2eZs2FmSsdYQAkKgNzMoqnKVMSDiqbBZfFGZQBJrdZNrtwTko4451VWLCfmahNF96ydRy",
  "key24": "5QrhoMKT4QWLPiKvEgVugqXrkpwDSeuyjrZLTMXJCZRzQCiYgmGxbDCUWdGqpuPtbp4HVwWTJRGZ2kQE4oAmMiNn",
  "key25": "XrhSy8rMJ8jWZ6PqPdrQ7pvjc2P9tyH5bgib97rtcs2gNs45GJaBm8t5maLgxSYDLtaHYxXyNftaKDFpvu6HiL9",
  "key26": "2EXx381A6dUcDYqYKm597j1qgRHJkRn8GtGz8L9Zsdbst6Lphti6fdjQ4KBV1ViTjGgRaaoeBzj8JCLU3Nu9mVDi",
  "key27": "3zrj3kkKhLGxoCf1W9R2RaoYUGt3F45Dhtnwmr8UTC2e3hZCnvfeBsd5kjCPN8hJ2FdWCaJD96miyfcVctYZKBxs",
  "key28": "2v8BYR9fmhpqCouWVPxbbd85EmZTAixs2wfdjcqV9GcyDd63nh38S1ztsEiU8h6qrjMzsrc35nnwqKm7dhRuETrt",
  "key29": "56DpQwVyXsLSjZZuUbdFMx81F6cYr2x355RjBntFNWSzWRD55RVfnAcoCUTeGpAUEZrhuqgeF1PVaGNAKgwC8kPL"
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
