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
    "1S9gNGfFMmCdbQYvcpSXTih2NaggaCsXPYpQA5spRRuURUZpjRdmXcchHWnTLhfjA1rsNJbC9ijUMYKwe7eTQ59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWrQXTcq6yrBNfUsvD6Qcw2mW2BqAYRav4ZCJXbEYbMKSmFT46vf5qz7g4HGp1oX8nBMiV2j3uYB6R4HKVHnx1",
  "key1": "5RpYRkArnffFMnUkyeetWPbwyqMjJ8Qbng3ZvRrdTmF31v12r2EodpUXgAjoDBeLKrVbYz3Kb4zvxaeZRi1DR8Rc",
  "key2": "5V4Axy771rb9e7wjWwRgtRiGP7zHtD6WYTntpZzxetaKuhip8ruicLUJyymFBfjQaSYUNbjBQGWfJtdDNUANoyw3",
  "key3": "SRZHnerYK57aHQgdVnbbZCYqgvxicDtNjjKS4jG2hNan4wZJK6gGXV2iZt2WPRWAsJUWkmbenSUtcWxAyAUbV3d",
  "key4": "2gdbngzgkFTdZT36G142ZZjdLq6XvgxbiQF4r4k88NYpVjY3pjucQyMjKzUAgSmq82mMdoCSwDxxUm9EWnsoFsCx",
  "key5": "e2rUGd6ekbH8GzCX8UabcZcm4f5xfgh4hYfhsjL136vWuSbzkjshwjCTYTNE49Amvi2Y5eihCwAtZ7gFfbS2Q4i",
  "key6": "2ajSbC7VtWxSLAQLhPdkL9qCW7HZZQVEWxeZJstnQ8kLWM2paDBVDD39eigpozZMw9EYu38Puy7C33kkEb3ZnKoN",
  "key7": "2LSji43WeKhWGtnby8UhwqmnTdD9wZR7AVXwCoH5Jz4y1xzwb7CpDbxjYdq9EnSv4PSk5nmsD4zMNhwnAhZkm1sc",
  "key8": "2oc2atzhVWLkiyZRxwE7UmMb5T6x2Efpr88NkMu5yQMMRDo47BVvvBU6RcopVihdDUGf4tSuXUWFbhMcYrq2vEyV",
  "key9": "5nWvAQA7oMFYSF16Eb464s6bTa5y2NiCAPza625aGYocD3peqk3jNrzR9MhNpVDSKQbSzc19pAiMdVBqDbudBzcP",
  "key10": "3bvZFmnxuhfDvpKzwq6uvA6HeqarGpMbdgVN5xV83RnjgWttPeN64mFSknKNYrbaCya2ayLmgfb1GfJJFW95CBjQ",
  "key11": "2xHtp6mC7UwrFR4PSh9c1CZ2YxyW2SscFR9Ug37RnbVpvyx1JVHEE9DE2SkE9qsetKwHSjNJN9S5M5XwVPBJt72F",
  "key12": "53rMoh491RxjzWbR5QSLncUW1KFRTrSNsUaes2vVj36bS6X3RtVpY3U2n3jEn2eLgYHfBnEWe8oyZNfk78KaXRZN",
  "key13": "9BhSxpRLWFe8GYqfJBi6GfhFxeS2g4gpW2oCdj5YwdK2SUgYKMV8j7z85MtenLA8nso1fBQ5dX3cp5S4NrghJMx",
  "key14": "2Uce1z44v6Jvro72V8FgHkKUQW1jyzxCqUsnM9J7v2PvpxyfbyPVstZ86qYHDmeL5E41det34oyf9FgnEgiYVSRD",
  "key15": "ovyRtzZQ7KcZ4AvLcVKp6kVwRcVdbiZNPJBUzPHEU9vHfyaWAWPERoUf6QqCJospX3YRKuWwaub7pgT2tfya4oj",
  "key16": "5KPCv1FvrfsrMNyQ1nQkAbCm6iMhF7gLEr7PYx4Sa6FDj6BhEjCjfYZk2DfXzCwD7k7SoUwrqxxPti1Hwy8ZzLm7",
  "key17": "5via4xDN5rRKqr5ZjovoC9yhJXu2cAZ6mo9DDbsLKkYmqT3uYngK2i4aGCwnwMK72x3M6xY5htPo3PPkPjZqAMsq",
  "key18": "5WktMCSbA6LroT9po2mMWQyZFZhBAg2ccm8vh32a4qngZ55d5KMWaSTFXZRpFzqEJy2XDipEDZNMMkcCQAqgLsdT",
  "key19": "3mG27Df2TmZxZbchRWcpi4Dx478zXBaoPZNPYvWh1HR4NXH96fGLa5ZVBcaR5pQahA7R8nZ4WzJdTLHtkbs76ww4",
  "key20": "5e9mJAQm2pdvmkFeoitB42JqGAathg21MHbLV5EJMFT41K49qtCX1BU4cnF6Rr7c7R1mCGjaw8YwkfQz6uakswZ",
  "key21": "4Xsk9LqdMp14qDAr97MU76dGWLRNBrj1wn78X4tqQpTP9sAmx91pqJ64GTjxRwruvfe464RX25a3yb9Bt5DBdPum",
  "key22": "3PonjThQuVJkSdfmZqEg8sRjgRrgPxQWZpYf6SUeD31FsoLs7u93d71k3McMnBqq6re9HjFy4oW5LuUBYzQWWtK8",
  "key23": "3W5SNy9dxzM6j5TisWYAZGiTYBspAUDuPGfVsrSkAAbZd1vWCLj4drf7ieNnc9Dqno1Jz5uZZP4iRE2zBpvCauTd",
  "key24": "XV97iD7HyWUeFDjKizzc2amRso2SrQGzMov2JXFny1ryNw2VMUuHdq8C94PoqQCtKb9cUyowcRZSFaqvbqoRqBy",
  "key25": "44evmZJGATQ9xYEzCbjNzm8Rctg7Syn9MzjFXvbnBeYZQ9yvDWyQvNZWskiBom19A2kQhDvDd97KawgeBpCRGdTm",
  "key26": "28XiQSh3n2Fu2KitSXYZLnEatm1aZ7PkSdaWdzjiq5uepvJctmBQbwBjAUvYNq3524EYHBnu5X62xC3oz3Fhsq1j",
  "key27": "dHCVfdyBewujY2WkGetphUgAXatUFeFkyYhRLDeeyfGwgivasvhEf6jfaU9GNbsMHHATFafnBZHoyHeVEpLj1bP",
  "key28": "2xmTgwuLXqW4shMm2JTS5oCoC1AyUHddyNj41sX9G3A14deC38zu4gQekpcfCd2djuZbsp3fELCNj6UbmA29Y7JY",
  "key29": "5DfDB2iz9TARNRtMgqgsWGCRCqS85veGw9PFBHrLZS1i3oD8QM2hD1fsVDdEEUU1j5QhbnGooTxUYKy4Xzz7LnhN",
  "key30": "2vVXch7qX43XM5uY2VaRysLDmMJSyWXJoxtMmdmyjGMT2aKL6MDwQt6qwqEkTnTytwHv5Z1HgDMSh9c8AmGpAJ6d"
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
