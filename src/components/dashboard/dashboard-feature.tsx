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
    "578xijYifGgLyBrozACR6nKCwbHReSuwUgnEhuUQboHSmsJQ6dLadpta2DPpvJEzvW9XPiYwV2bJs9v5naJeVWd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omGCxbqxoYu1yma4JUK7LoiNSjc1ktokCJniLsS4EpJBvXzw6pANbJ44VLpf3dZASDxCQm5beLaMSDoRzScVoYF",
  "key1": "66xNnNyoztXgaYjdsz7NnzTmXK5m2hGL9EmgdEHd5nCghUs1sw3jwMCvSfAhYyDHFb4bCH3YEvW91MpvhUJSAwic",
  "key2": "5aQ2wSehdEekcNcTzcw1qdJ1r1NNgwdm6JQ124eZTj42S4AEbDKXnZ3fcWDpKnpQVgzvUWQxUjtwdaJkqLVzrDRL",
  "key3": "2NeShnHLJKZA8DzxJCkVaga5SXdmrRLhJryGHfT7mMEakT5W5LLFxnJvTqXtgwZynenEiSyPrBa33Kt6N18zVAcb",
  "key4": "ozZwKyu7HyTBphaXAD4XKjHGTpnbjj3yNPuXBaSo59mfhd8th9UpuEBiyFLGYNNu9RWUQUyduV14YyaYqeRw7B9",
  "key5": "mt49C3fMmBpUNiZw7bgVR9gXyVrb4bcWg4mdx24ozJhDXKKs2grJkLH7gE36EVnNac4dGJenskm3E6UZwFS1Fkz",
  "key6": "4pXRbEAq7am44JQ8e9Kv73XyomBtsdEn5v9b6UZbQfLhUudfkhpg9XdMdNHXLVx5RYhVaGq8Tb6A7m5VtjH7fefD",
  "key7": "4DLPbyU87NYd7grT2oDud3uy7LpFn4yMazATqZXZoMRecgAZkbyHvAE4SQ3he55qj5s8gUsnHvccQFwJTZJoUJ2d",
  "key8": "24YNq7mvNFRpHXR2oBasEktuPeVMCmKMKDuzE88keqq2efrjZXf3cKf6AmTaRnEPE6RD6wTPtwarmgnLrXHgWRwJ",
  "key9": "4avPrUTsXES1CkSuzumhKZm51924safKAhvh1eFJb9deT5qAganVndYpitVMZVyNY9K2cB5Asg1PYD16yHjYYLBM",
  "key10": "5xYpNtvBK75jHw3BBGywHMNhJmeieDfRCjzxwfVVgpCpsBDAjuyiToyNeEFXxdUik3uxVCkVmmuc5ZnLRCH3zLMT",
  "key11": "2aHnH42mGN63VBU9XAiExqsEzRSkegWbhiFEAQKWLixc9fSYKu3tm7QWXwGqvoqmezr7GUPaHxPfK1C4UVtmsAhF",
  "key12": "Qjb2yLEuTvjMG7AjEGXbiEe42XtRbfB4ShysZP4AohiSPm1SQKnYYkCAPiNTHnf8A4CXC9Mgimz8GEmS5AotnRJ",
  "key13": "4rESNUw4BYeUg6M9cRnkDqYBHUY6H46spU4mmoruiUjE533uRdfXxtd6Gdy859LXTTZXedg3FJo6UFFKGGaGwJDG",
  "key14": "5JPQUjkD3XxgTwm83ShtLtpPUEPpYNR3fbxT5pAjL5xH1CMKNk5dMAmvf3L5DCwr85b4PNZvzSzwKdvAvdYJuQYF",
  "key15": "VSbW4YACKJzm1T26TbtLHPCZFwr6f5vNi687WfWfZixtqDoECTFrZoJaY44rhmX34oYMBcJQjoQeF7QgEeDDzUd",
  "key16": "2cQK9LygogPZpDNc8KiqDmZ7q9H8dVXdc5oiU7fPXjLxq5QyunKoJEmGPvC5kKvTxXrUbwWYmQPv3QkXxspNZB22",
  "key17": "4r1MG6j7Dkw3QNGzaNdLDgzvdXmryLYSYiCxW1TfKLkn6gHS4kZNhRoJGrMJrbbMA5X6gSaGGH4bCizXoXBfbFHP",
  "key18": "2JYukywQY2qFE5wSWFzURceTHZdrKy3UaP5bKdF1t8jypNqxDdVmMdMoRJeSM4vexBZ91UAo2YMM8bwg1EUqkSS2",
  "key19": "4e9eq4Q8a6n8C2MUAPXgyb1fduUj4vMg83Z482LkyoQXjkzTZs6WRPfvR6kGg8czqHXLJigvt1Nqc6AQ6BQQWpE7",
  "key20": "37HNuXA1pa4hJEX3oCM8ZMrTMaWdKp3Zuy9RChoqAunQkywVy6UuF2iSUWvHkMycu1fjghpv7zF5CE4XVDDAonEA",
  "key21": "FR1v7b8z1dHbtcmynNt8ijkdJLWGHKZfkbN7SRVYFr4Hzx9psU9yEB4usH4KFV7qooDpNYgmbu3nnEaH7j57hzt",
  "key22": "o1oEYSxrKPwA9Siha6LR6FUhsGbpFA8f8vqUSgHnXEDDE9g2CugvXKYYnaV9zCRudNafnSPd1tAe3v2Zx2Mii97",
  "key23": "guJ6DLVcTm2s4b8zWXoPgg9QaLsAAXsxamNNUsvPiJeR9W4xMimMLJtW8BSRBNxGwv7FpfL4DdrUMWypnJzUkPu",
  "key24": "h5QuaSnny9JBcSyEEJxewk4G7EQfZ1Y9KFbm5q42rzcReMvCU25Hga2UTP7fzfd6cxhB8jkbTavWjSdPd3afrvt",
  "key25": "2J97FQ2SHynJRHrrdBxCenCGao2X29bZ3XPGH5yTfb1n7HcSTao7BKwCPJGDGLPUDcYA8LDLWn16mc2rwT7QtVLD",
  "key26": "MxcBXeGskWH1192afmxUYCt4RRToRb7GwkiQPBmQUgFenYHB5A8BrGxjUVtAY1i3agmjBqptFWMFHWa4PwRZxbY",
  "key27": "3V1YbmA7K1UXpuLUa1hApBPLKF8CsdZ69QVGcRjKBqrpPPLe1cCb5pvg6KLe7z3N2sMH1ADdcxMxx9VJiVbGbq9M",
  "key28": "xMxWygWPLVzVUhv5BcstnqQCrnsH1zP2FPfVmNLdQMt5m4pMqS3RWWMQQvwqTdKjBfpkbUjbK4exyAVs8FJb9mG",
  "key29": "4c1yZ9bjzaRmSp4YzUEeGrKq7ckBsep5JwXNYUZXEGdB1Muaq3fMK2jCWGGY6orjEuTXZndYVcK1sijoEh5Z9HKQ",
  "key30": "67h5fYoKnDMHE8ZgVKrrhLKHKPycH8NdbkS9DDsmaAYCGdPpAiNQMHHMKYECFvD3tm9cVmSdLqxcYkjS9eRKPhG4",
  "key31": "2JiRrNfVRPoraMv7KzKpd9iWeT42VDFPHeqManmBmsGhWEEiBDaWzbKWiCCS5wBXVW1iChTroQUwyjV5yhPA8qfN",
  "key32": "4JXxMjBDMQoXDbAbL92AQ2qy2Qw7cNUuoyNahjJPvatACu4VPh1YtpLDq1E58pvAvy9ak1dbwGhuSwYd3yaSqeko",
  "key33": "5EVAYdWm7yJ492FE2qruaTagEJFAeEvUG5g2h3qcdLh5d72U9XAUEFqr91woWtJkjmiQN9SzHTbUVwNCJT2gwWxZ",
  "key34": "axpKUdxTjoU2AfHoYPbXmSFojciKuwM5j9RJsy2z9J76DWpyiLZXtGmxRMU4xpztzC82YWvHKUUomNBiNLLvHx2",
  "key35": "4mrdgMTJ2L25JuzWbF9wFC3PfG5VRtQDLMRwKvcStuMUddCXzRszTQtKRpzzya3erRN32qyR1tNW8cSxgmzeSUi5",
  "key36": "5Pv48MifcFxPczzopAGNDUqs6cQEAZsdeyMg4ELv87QnPnLGBZFHqgAmcSFiZvEiX92ZQD7QvMfa3oF5cRbsraye",
  "key37": "3SSZZEKSDCX9wAJ6fRfkLjQCgrdGnr9XwPasachCLt9AXNeJqqUZMv9jZnPoNNZoz6uip6CtHMic29QNEKjCHKxe",
  "key38": "3ywnrwhSJjvMyZEmGcKttqFAiYfoK85zJBsL6GavVkURfpvsJ4DbwtpdWNg5TsucyT2YYrhTG7yzPa2hJJYBdKR7",
  "key39": "4ZwBPJvnxkogpnX2gPRYULsYion1wYjjKpfA5QfHaxjuTUo3V1MYYGxvLByB64fxYqB4wkZYWDdJq3wdfmjPfaw1",
  "key40": "4YMTJK7bAsx1UFFUyeEEWQ9c5bZurhhwgrkznToXRntbfkq64xr3KrnQ7NMskQr71bUWLqshh54qQPF18aFhCZqT",
  "key41": "5USjaq9ETsqs4QfZpW3coqq9tyzFeHP7pAybn68gCcBRhdDR7PieLeLwfdJzmqQMeZb9UueMQw3T29pFoj5opSyg"
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
