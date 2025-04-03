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
    "5yUQcHxJU5DmRh2bh7nVbzGP4PCSSdYC6fDmTtJC7nm9sM3pArq83pxZ6DA8DXStRhug28c3XAFs94N6yQjSciQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6Kq8TWDsb4Cw4afk7EfCbAqLHRTx2WhQd6JGpvZjNz2T4m79CVurVDdVqTk62vv3WAbB8TpDWPmAZmjLvHZCmJ",
  "key1": "yX4KGxiVCEgFXxBn2No2deLeh7SvwkaKqfL9gtipZvvNRmNAb8hjrfKFpqBKvECKcHZZ2tEpGcqqDBBohUtVv5P",
  "key2": "5gqFSQcgzcFoc4yX4zPSCRcPGoxAYZnZqtvVp275FaSi7pjbUigepyDRoGWMF6V6FbpXYgGWYet3EdBwFeNdFWhU",
  "key3": "5kfUr5s2s4egwvC9EMgNidJ132YMtjhyeR5HvTCb4EA32rXKAFs58bHQU6eaPcLYGiSFWAGcH1yD42uM1qV4LDjR",
  "key4": "5VwE2KKbkD2uvaBdooNCHceDvznVmKNTCouqZ1NKKdiH683awahK87ZMcLZb7dXTJCQpbbVu8AX19N4MsVdhRthw",
  "key5": "2jzhjMrrLBoZUuw2QsUMKmZcrw2mpFma7hDzm4wK5ByiLdLFsjjV8urXATDtVrGbmNyzNLTHejNSTRUmwrPX22vG",
  "key6": "RY73rekH74Fq11PS6KpBft4JikWrM6rQNhTuX4MgAASr1MeXAKUj2DDXC9bAWF6U35HoaFNVRMbs7FzkA4uUbg8",
  "key7": "hMduNc64xpYaPMpM3Bd17qC3cTknazYLm935XLkm8YvH2AtPkYAdhvFRVX19cwkcha6tjFc2khiyTgKtAfZ3Qmu",
  "key8": "3CN8aiqEf5de4zVvNALV3AggjopAy9WZpvQuCd8mTzP1C3bTQP1zaXpM5WQCkxS4yo7Hr6iktJw1zx6MhT99PB2b",
  "key9": "5vDzyFUsPMDWpYkX61Q9Kb2DzJTDFz8B8Vc8EBj9dSM4UpsBKqhfV5KGc4S2aeCxdsEmFaAxwVgfgVrVqHRSya96",
  "key10": "7YET6G1hk2K5sf4mGrgbb3MdEmP64pSULwqvTNNdQKEEQzcWFt5Vm3UWHcADmLTHui2GQCscjFLfUYL56wF6FLG",
  "key11": "5dduLjJDqx3sbySaNDdayoGUmiTKKQMs6stouTDSijxS8T6zyC78CHU27mNbevf22jCftmWdxYC52VRLzWYXjcSZ",
  "key12": "5NiMb4ivU1frJmDvhoHuuJ2s3Qa45cMLE3DJfQH7BCt3tWL5wwoQdQGnjy85rBCxyhKZkv9aAkBmEpaE3y6HFdcR",
  "key13": "518bzYsRCJ5xKvXNYhAiH89iW9Bc1W4ZJ23zHDcCXK3MBpH2HZxkAmkBTxVVDt9EjcRSBtJWrkUnDHexdx9Fsgd6",
  "key14": "5WUHEy9uhAfQE7NwUi9ro7QFYSi4SCwifqsi4p9zmmy4QSwmQmuupdTHGabH3GNtNL3qCYEqvYoPzaMqT4NLuNgz",
  "key15": "5imPzhyVbkMCdWahncRKiYUzBSBTmAc8S7pFgDEhEdYbSwKwuekX4SaNw9aP7jNynKKF1br8zuVQDy2JCwbkadFV",
  "key16": "AM4M5myEdv4ex5zVGL8kYVq3xN5gB5CybCDZyxxxhRgLyCFLBduc1WYJ6hTEzqyJrabL4qB1Cna9a3bKogQ3Mzb",
  "key17": "2Zx1Ky8MnXzdFWdQzUrfEqBbL9dcgZkdGN7t39MPmbU4b9F3hpcTdJXd61nWCeUBSvihAcLFN7hWQStDME7vw4cy",
  "key18": "2D4HeCu5mJpJ7xx2gkP8mXgytfUesJQXYZxHSqJ4hb9d9Bi18bobh2gPcVejcnKscnrP6XHiX6VBE3qsCamrATJS",
  "key19": "DvqnEKYSqcxESRWqB9q7jZYJiNw8fXHrY1UfV5KekHo2yerjXVdXVDtc56W6PHpidiJoAwcndnyJHw8E9D9Rdr1",
  "key20": "4PYnqZipjeFf8pfMQfcCWpzCbUbAgSE9oxurXvhvMt2pbeqPMYJCpvEECVAVYFac3GFTjZ9EZXhWFnCNgBj6ZNaP",
  "key21": "wAUHkoubLd5yJYR5V1xjvCdNRaT7XRgnhEWwd8Km8rH7zokq5U5LVz3z4fQs5zByM7CJEh6jQirh6iw9L2NUBgc",
  "key22": "44YkDW16Y3pXFK19XDsemspZpE8Ug5XGngC8abhpvyrPvH4iCTgAjYjTqftbdu8joDnkY5QMm353SJewmT6QqwAA",
  "key23": "42ZirMx8FBFLfisnHS4iHivmLiqbU6XSEEiiCaMkCBywtDcot2XATsMCCGQ6mNhiBnCEw9tBB7o9LLVw5GYzGXSY",
  "key24": "64Swegk33kijJp1wdem9mvo8NqWbCn2ZD2khVtKAdr7wXDMWH4ax8ht7jKMAr7qHpEcLwDaZxZwAZ9jbqXXs9Jq8",
  "key25": "5nuJRE8nr75LBbqn2HuckwzFDb5CxHpj387qiERoMsX9cuKsEQHSHyC3affqoWNcPNN3GFTQjBzWUW2gbgLMpAwz",
  "key26": "YtbE9qowu33pFeEieYWu7jvgBgTaJQqxKMnXFh6r9yaWvdi5dKkoEmCBFLqaHS8QEZkZMqrHqhXHNdu9CtUTW4A",
  "key27": "3KXjZCahp5ft6fYZ8srLM1eDksDi5QDrpsZrtGgVEsbdyR8A9EgBsEotWEDwjZLZj9AHezo1n229Mp78ggkQXNW2",
  "key28": "P8XhVnKrDiwFcF2Br4HA3wc2Q5hs3q6hcDWpkdwjURygBzwf6hdcohrLeQ4uqpSPcnvaV3R26Q4qhMonBfc2tTs",
  "key29": "3bCUQur89r2NG61yknn9KFkEQjvZsujvhZS4FfBLBXMTe7oD5tXj8RM1QqFaKFe9sMynZPsqYim4uT4pL98f5isR",
  "key30": "3wPjjnGm1x1A1EcsYFAk7sZodMkJEsHedrS2nzY9gbEg8s1A8KoYRn8tJvyDQ2fjBtSvJv63K6yQ3hfesC6ru6pN",
  "key31": "5NH7LAcXbBYZaoeZmHUpxn3VDKeH7J5RJeJFK9Hga5C8a76nUic6cjF7M5X5KBiKD9fXSjYQ1CN1AYBsSMCqffoR"
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
