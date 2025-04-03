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
    "59TuQW4Kss6XrCDEKKTr7n3q1zHEBZ6PcvoEKGfSnuGtMp5bLfZkmZPq7s5WXUSjzBqf4HrwJfgprwpMboy86Zug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqaF7XDpKAH78fKgSux9C8FLhXPXXre2i3WnZEr2MP2UWyWyGuHao7vFanBCKoLnPoAhw7kvx3boSYqRURE8ZcT",
  "key1": "2eCBr1JvzyWQozydRTf29DrKudAkhWcumVq6XXyfZgM27hqs6vXpLxwvSeXjKzFPcD5Qe252uzTKgagh4h6R8bkk",
  "key2": "5jWTu3jc5nhVREMukEtJADJriuSy3KDW3psfokdNsX1ezGdiiiaqBK23snLQtmXWnXistt5TVGJTDHcPAtEsf2Tv",
  "key3": "643NArEs2FTDnCgEqizLYBjXVjcgMQxTiMp4Z4Gfy6okufHKCsxE4xrTJMWm2BaYjxGd67jGhPgDxwdQ4yNFZ5UN",
  "key4": "o7DQjxa96TYXVorWoXWfqXedpBUgjWiZffgm9su6xN76h6s8Qv8EdtHx5cqBWshs6Vric2o6gLtProsntDFfvVv",
  "key5": "4kjT2Bp8gRhk9htLykakrHMEzFxHGcYE363iLyka67TDsU87UA9J8wK3QZ6T6ferJGQNQvDMBEGjatKYvr9rs1Qb",
  "key6": "2z6Gu5e8TL8kjAnRFFQiGyzoRNG4ExBqD6th9hKFMp4gHZb1FrUGkWqAHGZqvdmSQe4hdJHYmnSYknSpyg8ujcqm",
  "key7": "4ZrKqQ1zZL1joSoubub1VT1UVCvCiFuezBGqgjcAHKURCvnqW8Z9ZEVw65NpasfsKn8EpB2KDEbAGvGtw86Lexn8",
  "key8": "5BATZ62bJDYn8zPSczsGNiXMdKjxB8bHmbK3uCaGoPQ2buVuUKXF7P1kNUjL2F8J8ap1anwadx95En5khoMsV8Km",
  "key9": "4NSwZKQCE1F3wBqEebVmQPu4YJ13Eqj6v3QYhK7LrwVREQcTGYCPv5VNCAEn7wo9mEa6Fqwtw4NWk4D9JGYTRbQ7",
  "key10": "24MnBvwyuzhbTLG3W2dVSrJ7gFXDB7ckQCQZiyvk7Fksg9xEEDifu1BFf3mjjFWDqUxdPv7KSB48n7HdnKsnfEQs",
  "key11": "21Hot8kuRFczfMCLotpYGe55GGX5YQCq2W3AdxzcXWZqcQHZ56dVudP3aNaZdCHFxmEnfSaG8RRF4xLB28JbHWLR",
  "key12": "4vPQeQNtKX18x5EuXZRSKgNRSXJGywrkHwq7issAjwi3yT8JbzBsc6VY77fZhc8d4HktU4aM5q43QmhDvh6nVcjC",
  "key13": "EqW2zoAiXRPRBJHuJtH3DRSNB9xMeTH7EYuXB6Ar2wAYSL3WYT2n7oHkBCFtvvHNWHVHPHEFutApiKyAYYE72da",
  "key14": "3KsXK7YFuprKkksXxRDePeh39EQCgRVw51H45Ton4BBwCExXNExja6qFd3gDXNggpK2cYYDPn5t9pumsPoHxUDW5",
  "key15": "5hCxHNHHupyHt7N92xzpo91fmZdK4ngDBjF4sYai1gJFp6Lgbch5GBrTCZsgLUwfazRxvVynSFhcudkqVRDjuJ9N",
  "key16": "4E4yHnbYFjrkeYh6VBAnubPf3S4rKp8kCCZCijXAEkt3nB6mP8iQSX1db37m24LunJxNCHFNxSHNGxTQeUFrLBx3",
  "key17": "2QiQAKGYWumBENhatgzaTjuD5mHP4kjjR5Qng3hdq9Ar5tKY3eSiHXAmpbPwGPZxhWZ6Q9YUBCMENfRK7WFS6QFx",
  "key18": "5XRTBLRoPshyUsuidFiQREV43PfDrFy8XZKwNNd8EwxFZ5m2VoFJAf4p12ApSuMoWFeoPQKMJsDXGWUSsDuwvVp4",
  "key19": "43ragviA4ibkxve3QgPQ46Eimhsyr9D6eV6m5RSjJ3F9PuE4nzSXwzmwXA7AQ5NrXAmBvTMueRecTR59eJXA5Z36",
  "key20": "2jfqNcrTqcTGfbtdLLJJMWtnZDwEZgb9FJUCCCysqsFqvzwvmLjFd9swD4cs5dfBkAY8zrqqdcv8eyxokgH9ZEnw",
  "key21": "2ypJCuS3rpxTysTAkmLvvRSkKNGEMNMGZW8vEDoKkiJhvaBXdwiCA6MPwBwNxr3fvPT87jfwdS3pmkD8odHGLUBe",
  "key22": "4zJM5zuUBNxwawiaqGrTBb1d4K2iGuCy5RgcLX8hFbUK4Zd5Av98R38eb116cocRKRawNfSfTwTkuF1S8JfYALKz",
  "key23": "23VEC6PBYGsZgzibzeLiWtxXZbJMFozSvro9zmHgLBTJPKjgT31vrepFYm4MMCtcz9EV23AnEGnMUX9HnYyDbEEK",
  "key24": "4f2DwQPUeTRFCUc5Nxzsxd1LTFb96zbQ2u7pnY5oRrY7rYHqmUfhfKFBhxaRG93J26zWowJxjMzD7t1J3bKLeqWt",
  "key25": "2Nr4RaQVzEPXVfb6AAV7Fbb4hj8T6ngE88LrG9JmsDSevbNiLMqZ8a2fRJirE1dyyRANEYsofkrZq4RZVF9c7apg",
  "key26": "4aSakcSg7xnN5td4kwmBGkfiEni8XrLRQHev5iDeRiDKGmwzEJAbbyPNKzrH7Z5AfqHZZBheaey9jfGetjJWj8yr",
  "key27": "4w5Q3iv9tJsF5kowuxmvF8wNGh8SfMTPyaSXkktp3T49fRH2cr4t8w7qLRqpmgW7yhsJp6Vo7zXW7CZc9kqeJjsk",
  "key28": "5eAM9qWo5zaye3RsysW7DYW1s74HyhbCc2ym9CF41J7Ufjow44ctZuZu8ZuEeoLb58vUDYLLCpDsTHLnS8wvdMyn",
  "key29": "3KE2PKB97CNyu8idDrRnvyK1Crg6gpqgWdKeCkErNMBUFNYYYUhzqrjWnW42PhNdUbroezXP1Kuu4SPk2beHsx6j",
  "key30": "5Q2k9YorLxhwD9AqZHMwBmt89GPRFPczDS7FQUwk63n1SqPgmoSWrkRrRyY7ibeMDPiSrGetwGDnVXRFHDwnKzV5",
  "key31": "2vtowVjXFqnWqeNp3y3Byru7VoLnpxQrdYp3eunbFDGj8CJ9T3GRZRrJaFunZW6WCZYRn9hhgdaRQU1x2aCTFvpr",
  "key32": "4cvmDFKJdDaBiQohDbyZKkx4CPDyWEA9zntVXZzV8vGTiVqFBu5jTvR91crZ1TD7xoU9UmaKee4EJMYZHoNTBBK2",
  "key33": "2cRENypWFEm4BN2kiuSmdx4kM8CuSw53gQX7FUEmorZ7AzHAw6DebcR1QLHThWvtD5D2ksBjwCk2W8FMs2f1GaPN"
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
