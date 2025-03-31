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
    "XBPjEi3Q2SAHhGUDPqxyEbrRyidJLedNQBTH445bS6LEjqHgEZNbNhGbTXM58AcaFpmGvRLNWbGvfMBLVztCJaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbqWYkjd1QsZofDDWu2PJqDbNt33xc5aKTMqBTYeXxQfVY4UkXVVAxuUz3grFKVjUHS2Di9frLLHyS76AWTHUZL",
  "key1": "XQBrWuwLpmtRpYtxJVkrpqk9GQfc63GQSLqnVSoX8XPnSgjQ7RNT2BPKANQUs4bPDH1zVSTdYzHGFsPnBMgbFRo",
  "key2": "4KHhrCmamsf97vYVmgNvTTJtDbwCH5HWFrdhjWrqQ2A6mc1NAGc71j6VbWvr4j2VcZvvNH7nZG1SYyoH11U6xoem",
  "key3": "513pro2XMec4APytt5M9S3h8ChpFq9BfcEhbHLPFzcCf2tJWCcfov2T8De5tnzVJNR8dGpQA9QBZcwzFPNL5eBXy",
  "key4": "2SMJnXNKkUmPggTKjrpv9E8141dQGhWc6AmLRdRe6pe5vfSMKiD1VXVRbRBTR2wtjWrphmqML5gs68LjpUEYvTWV",
  "key5": "4rrzjg9A3YmZpAVnM21AtwVmN4uccx75uPpk6xYf6UT1c5pMwtGGT3RRwWg86nsdkBeczjGxRLdBCa2SmGJs4GAX",
  "key6": "2tDsxb1dbHseZFtzwDjp2z35mWfQPxqbqYMyLqDwyPp5CVeqMx6B8Q1HsaVzWeqvujX8Nd24jqtuM6LaJp3PqAho",
  "key7": "3RMDv3s2U6zon2CEQ61oEj2ymHaBBcFYvoKGFh1LE4FwqnJRJzNeTMvXFGqTg56tsG8kwxLtFPyPFyTm6sva2yJa",
  "key8": "63FiU8LFnW1kENHFWkP1LPA2kGRN6CwRjTiTGP1j6vP9UbGx4qSALFgkbW9xD1rUw8pVQNcUz3m7obABuGWQwy64",
  "key9": "2TjrUo8nNGSGTmFuwRyWY76VftkqimZoEKEGCziDaNnJhjomBtD6jPDFe9Sv19UVdzfM9B4ezPFj3bgWn3F4tsVL",
  "key10": "2kcgUVUgSbeEjuRMVera4cWUiuFNcrLwYqqV7WGdRrqcFwh6WKW5g79B95QYXkcvmWPVVr5jUaNwvNXSuSjqge7C",
  "key11": "4GcUsgxKPUcPssgLhykdShdqLAY6qMkzEuq5Y5iukqEgEo5NkfNT3KMZfL7GpGqorbdm5v4qpA41CEoSvu8ZLkxZ",
  "key12": "4b5uhLFy2Q9QAcNRC8bsS67N2AvW5J4s556HxV6vW9EUfJfF3pjq4JtJ5hX8jEzykJb5Pz6Tzi7yW2b4DLkjvpWL",
  "key13": "4wTuuzMq6wXWNrD9MrDLRrEq8xNW5uxwmH5V9SZPvwetS6Ds2cuG2mKkg63WuZMog8nQ6D3av34Pwn5nQu9PJSw1",
  "key14": "4pUx9yHG9DjNesN1g4BAwqpcHstDB8oWM1rtq8cRBmPTt54JEMpR3TDJnmkc4TQrbwxQtPd9jPnpmdqof3KJN5GG",
  "key15": "BciKAAPhcUMvsDn6pL2bhtoEKzhANHTiNnmGArd5SbxkzkrRUD6GvqsUkpzSqKTWZdvLoF365MMsWei5cC1iALN",
  "key16": "293j9ceZXeySUYBYS1f7vtJ6BuyDp9tPQxupmvcNPNBcJRBcwHoiFMR3UYiLre79bhz4ejGBruXNkYFrm3epFvDj",
  "key17": "2D6FAYcY34t2gku4czyJjbueEee6GZxUsouVAF4QbCR5YdU8FcVVEdZSVqKPWNJsTNrpCxm3cuLqQ4nbEKTTuHKA",
  "key18": "5MVjFoJZAprK9YZxufbp8zo74rJR2VLtE2C3ckhv4iyrEfwAuxeUh5rz1JdM938A25aH7Pjbepsv9YPm2j6Ndq3F",
  "key19": "4qZYYUgNWj1cmyzzLhPicqbf4CgJjBwEbY4djN3V6XfqEh28uFfhuVtM2g8qkaX5q4WjsCK79xEQT83ozMjAa2R5",
  "key20": "2KsAto2GFiMwHRLeYthKcAg93hXkMsrGui1Kg6aa9gfoFd1myEiBa9qFAgTwyYPkqkJ3LjGkcWZtm8boATaXh3SQ",
  "key21": "5P6wKUtP3oTabASsW9ZQ4NB2zLJPFFRD2skrY3BHpCgVEij1jGfuVgvfbDGviaUrMFGmowcznRQVUHfiuVhuri3G",
  "key22": "2nuv4ES2HGkLqHJnhCEYfTdcUsBnZgRHBDtYNUvC9hZgdVQjtT3mLRKFN8hA7oQNgnUMq5Sv4cECvuxFX5sCfxts",
  "key23": "3sVqtfYJqTfCDDMqyGURrTE6AWdkX9RBtH5cZAwJiNkW3RqnqTA5Jj7SFz9HJv9FwQ782PcxAznZF51DY1U8B8FN",
  "key24": "9LHuBH5VCZBZ8iMJb1L5NNNiY1gip2kvzUFzv75Qbrjfx2a1NjPUFyNdEHyJbM8TnMR76d7gF2UxcxMvWMQWvhL",
  "key25": "2Fn1XtAaYfMsafgpZw7fvmmAPbdxoNxBuTPSiK9FkFePHH4pbNpKYxCkgzYGovbaGfrDMoG17jcs5Zd67KXoyr8b",
  "key26": "94B6d7fpiBuFiRkRxCHax6Du8CYFbs75Lnxfyx34vHTBvbNQg36poaCyCNiw7zGXTv4aj7bAdJBGuWvYfagLKVk",
  "key27": "2Uv9DQc8H6UjYeddy2CP2R7x4E41DJTFVSqNoKM8vw4Zpuk3jdbr3n1fsyNeeyEejn3VszYp4vMggwwT55Dqoxjt",
  "key28": "2EeFHGydhLT2r3S1jtJMxiCA2muSEVsr32qdx7cuT1tc7kcdge97XSixZUuWKkYfvXXCdsfdYRXrY2iUSYvirTHy",
  "key29": "24uPxoAJowjLpY2rSpdi2nnNjHDeETajNUVisUrW9CAumd1aHzndUn5dYB2qitrDETp1QiQBisgEbHMHqTB3iKne",
  "key30": "2Hj2BiLSk7dyXThuogqxACfLF8Xzk9DQDYDMkjBEoTeBqXEB517emMbD9piQG818RU2nRTjhTL6kSumW42v6Hsaa"
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
