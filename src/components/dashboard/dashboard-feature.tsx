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
    "4njZkPrXLvqhWqM2yRmHxnrj9yDeqzBpA6WtGPKcZmBLdHxu9c8Ha5jq2EFaMAxSRCPY6pztv6uAtwvLaqjZpk7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vC9LWdBuziN9SNBcNhBC3mNpUJiMKgfwwvkHSsZoxrtHx49FX2qadXenkiWHoAiPUDyNghkPudVYhGUNSPCnENh",
  "key1": "zx9PpoEB46U6ANVhZSWTqr9mbqYeNDWW6dCXFsdBqmrtCPriRBUhFoxZ98DxfP7hWpRMhCSYuZsStfs6nEvgste",
  "key2": "4MnQqFrbrw2Kw7PjiZQncjXAcxcyJhEXbyTnHyFP19xcriv1jLmVwumt3ALuHzTeGcv46agN8vqWUaFVYc1sJeaq",
  "key3": "276rbMcnUYhSzigicYQMdY26CNbwvvNJc2MM574exPXZsYsaJhuWiSPtBkepncqZRDGCUWL3jWQ897r4K3oJFUHi",
  "key4": "41ygEHguk4DLYQADTJqyurxfX4Kf2BjDLjjAwsNRXuW4x1wzBDVqvtYfEFwitHNDLYK1bgGHPXPEG4B9j1abdepv",
  "key5": "2SNRbdK87zxbDxhSEnQXHNgXiAn5h77sBGoLaCtL42iSx9dCCsJ1Gz8gjXz9DJWmBW6pkfhztMHy9MSEabNv6DCu",
  "key6": "3XFokcCvydrwF9649gHJzMPXZoLsKdzmZSU6f2FwJHvZdEPxF7admNE3z6zinFwD1ZvXjvXVKpwVFxGjUL648LPn",
  "key7": "41s7AmYnZCQBXQwJTgHrYRoV3b9FpeBnsSjUHkytoDAWVgRogQULk5iVSG8r5nSXK3FtN1x5GavDLtAed68GsepD",
  "key8": "4idqB5sKoS6SeYB5E3qEoFLFAbdXR1cXWBCSTEoGXdqWKfHhEwdDyLu3XeyF78XmrAgTEZgivesnDzWQbnraCxJ6",
  "key9": "4prf4GTRER5gsTR5GYDqDVqTh7684gXnSwKxvhYh6FCtbLNSdVvJiUNJTyybJWYeDo3uJKitCt5nrJEUSGaDFEKN",
  "key10": "5ornx4XvPFLtMUtCa77jDk9msXPdAmfnJp2u3TbQLQL7zVS6mswyEiY6BCVkLmywwPsJ6UekHxrLifUzNDhTuRVo",
  "key11": "3bVEUAEreiKc5wcKkto27PEowmbKEYzmvbW6ejsKE2rBVtb1zEefZoUF2LcDvGSoKa1gC63U5zMKYe9avLbEMcfz",
  "key12": "41nQ7ruRsbCr5VSSZYZoXV97CqxuoeqR3ac8DoXQCt9BFpzpdpDDPkHZN6VhcBLvwqwxr4wZLABxz2oZaCv9JADa",
  "key13": "2UaM29vS5C8Hdy7v8y4YuYMeds86b9VsLVubwVU2EYai63dQ6JSk4XnMrGoaF7tzmjd3rPN819z3iE1pGTNxDAJM",
  "key14": "5rLRUugK53JRVkEDbSGUiEU29h867c5nVj1BsYgiVcewfF14XpEf8sqEtczpy31p4R27EHKReEbHNHwxzxsj1rFE",
  "key15": "Lno2Vp4Dib4zARc2VBMi3Khy8wMageWAGtxuSj6s8xaRcySW5VbLw3BCePUsHEqWDk3rStXxKgSv8CotmiMFzme",
  "key16": "5peYuUsSnitZqSMm4NSpCgWvRkxkL4PZpwEEHDmMGT3xvwcsE5yjHb358a4JD4BgyA5yAcBiMhKnWcL8p3LZFjGk",
  "key17": "SzYZnmpK4Z5cjqh9g9TEa9CEC1wkuZB1qAwLEECicfzJYJGw2zN8NYKesyAjaj7qsWKuvGPkAExNhU8QDj97V4d",
  "key18": "5UVXMawUk6uWHC2hBtMEwm7HtEK2j2pBD6FePLsiHdq4SUJUAewCz1qhf3VeWK7iHXsrbBHbfG4hjVdNHxfnroKv",
  "key19": "ZQDG4C7Cv4LT3zajtUBC2EuCYGAWT5D9dfnScSCAXjk9eCVEy8vGFkrMZJhXE8Tggc94dJvAJ7Szrmm121J4QDc",
  "key20": "7mzSJMSMZgTJLSrxpwXJ7aYdBQL9jXNuwtjr6GgeNTzVmvCSuRQpzF1MhJYGYBH7ttGU5N8TbqFYufbq4gufg2Z",
  "key21": "52k92o9pW1jWGH8qHecBEUgHDQaVuQMJx16R3dPid1R33duDHw5c3vMmxyvMoBsdo97WPnuQKSwKk6fsB5ZpqUTr",
  "key22": "wasC2y1bTZykq4itn9jmQoQfHETACHQ3ktD2DsdU7qHnkhqezXtJxTtPjQVg6CL5FsWNayHTYBvpEjxhfqjdQBB",
  "key23": "2y2Z1oCyixUaBbbJkTXhDEwjA9iSx2jt4jALmLfLjacto2s44dUnu3s5knWkUHm7Jruz3NS68LkuQLJsv9ST6MzK",
  "key24": "4njBUQJQV9FVHMrMXf8WDvuG9WLdAvxsFKGXzmErcFUJVgTAu464kiW67oCPDwmVrpJXybUQnny9oab7hnTFy2U7",
  "key25": "5G4PwfwALoEeyanWRgM9xtTsE7EQHRCwzKJRgyzQaPmjx318PiW1tSk8rLTp4C3JCqiz77UnA99ZTJiAr8QnkYFP",
  "key26": "3NqvyrWBBTGuCSK58sezeRbjF1rxB588HjzLM1CqcVNW8aKttX3vVC1PvhhhymW65ZupHYqJDzjqBD26ZKyYPg9s",
  "key27": "5QkcrvKnBDG5q1SSTi2VjTvktdJs4mukd4faJVBabbjx3wgN6WLmRHsyJDei48YLSXf8dCH4LM85sYvQNWUzPn5k",
  "key28": "3FsvxikngGh3QUi9yqTha54SNFze7UBT3GBWBHknA6i2g9fo1avJfbL1TmLZSwChSyG3NgarFHPPEJvrwVq174jT",
  "key29": "25moktU2Q8BQqinD5Vqnzc3Pxn5adEoZpcqVEUW4rYxTDro3KpQamQBHrt1F8P3VqiGQ7Bipbqp5LgNsmqGqZyLB",
  "key30": "2B53vs5pa6GtF3J4ANsn3fyScG5xCrRuNoZog5Jc2mY2ZysVD4hGBikrBLkbKf4iLX6g4myF1KdMdUBDM7QU6CAh",
  "key31": "5esbUgXDKjsUt4rGiLpMxsEhvo3UVT6gqgSYHnSgVfbU7sGgZjCaR6uLuaddbVXiu9DWDfYjbz3KEWKWrmPphz5E",
  "key32": "2b6UckBrf8Jy2A1ZYRBoVuihHqPviTd3GpRVJ3Cdb6ezFVGvPMwD2uBfGnPuoDZHtdaFLX6XeVTnRFUjkwuf8A3N",
  "key33": "5CGtmB6NTSdTWGx5CiYziNT7gjwormasUt3fCSWy2UvzzdpmJsHbrA9c5emK63GuHtYjBFjatyfySMi8Cb72QCWL",
  "key34": "2FQnspXhH1EMBYFYAvpe7ASVwePu73tRiGvaQWdafXdp3kvwvGC7G9j72UBR6Ke5VdwEdFqxVjXDFBSBjZKXLUgD",
  "key35": "5PtQtuxCkpdh8fBLLxqzA6UeQrrqiP9D1B6EYEfBoAZqjrH9eyqcgUrrYvoCu7iebHcFhhdN6oHCjFAvgsxWKj7S"
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
