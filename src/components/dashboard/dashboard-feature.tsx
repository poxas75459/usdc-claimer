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
    "PHfcnZ38ztEKaGb61L6eoHATBABYPbU4WUGkP8UReRPyDZEzVNNPSYaKvYxyCBa7YgNBefcQ6eebDn6Z7B9sp79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JE8PnA8AGWa5X9HTtokZ3Bpnye5YnDUAUWV9pWefEaTezJzbQyVhpkWUr8MggzQYADJKbfC5ALb2f4G1wQNTzQJ",
  "key1": "5DkmSezmV6sAvDVi8yBoYEsxjJqLrVyMxmzYs5i7MVFaf3mzf6kMS2Eo9vUck8WN5sfkqecf6F5BzbFD79JrGdSi",
  "key2": "2YD9bMX4iSXnaQq1KyWUfTdSwuuyZ8FWiTSSYHx3DAGrJ3niysvaXK12H6gyZc2EEzPG1ex3f4Jnrhf1kgvvSKTq",
  "key3": "r4YEGefoR5Vi6JYtf7BYWmYtyaK5A9Ep3E16zroVJTTNn3PBZmadgf1ZNWRZk8qmP2LSBDQUykms3DNwffkWTvm",
  "key4": "2YyREFPJYBB7BUDWDdeC2ZUxzoxXWwr9WJLmdSbKETN9rsVbX6P33itckN4M7Sr92YuaU2SzdvnVNAU68iy9myFW",
  "key5": "5qyv1ghHNXNehCmyU2o5bnGLfrfJXbetRDJZKCkmFdyCGNnZzft9k3gtr7fQ7ZkHPb6XZ99KEM2nBncSRBN9rdrx",
  "key6": "2dMn7sjzFtcXKkFxNb4H5DArU5ffjPdVqtMCy6xMD6gW51xvLaTk8zrv6KRJPyTsJGX67smAhnHrXPW59zbrhAby",
  "key7": "5bYJGXTLrSCDxRySLT6W93RUSj99eQ7mzHUsMuPndPnKJQHgjThAj7iLCZbCxesw7zJhBDz5jiEpArba1x54i7Xu",
  "key8": "5XJTeS7nTAzdTwW1W4FvR9FZKyGQGSY98wiX5b7t9iCNt8Sd6RSoEW91psmFJYWVMKQYK1f5GJLDQZWJJZ4Zk1TB",
  "key9": "5M6FCWoH8WDDxgvqG8LCPHMVxuEbuNdM73FxzRd4NkmtyYXu3MsCEh5eRWRjDfRiTgLYNJv2zFLv4WbMKoJj5YLp",
  "key10": "4MwdyUm7Qv7Uip4bNajNJTEDSGymoXxzT8MWBSk2xPBYTM8L4bws4wFpguKpuoQdJ5KPckp6DjpcQaxGCGhPXBbX",
  "key11": "4dES5TM3h5R7HgcceqSpYAjDjk3KcR5DxJsqQinohgDeQyk3T1phix81R6QEpBTuodzwJb6GKfAGGavHB8pswhsT",
  "key12": "QVvNt6oi49ay5fwPjqJ1ShMLUWJZnyH37TG5yW39Yy8hs94szyjyjPxRJSqDSEt6aUdcjSFH4Jk5cpmuwD3g8aL",
  "key13": "34vta1sR4EpBDWhjEQbFytRuZ9Gc2iRKDoCcTh3zmUwef7cUiWU4owZzCFtxLSm6FKJJYUWoX22MWKUx1gfgXojS",
  "key14": "2EVURnhAhbZKmicKTtnQ5AuqFHEhhGCRL1JWzFuoD9NY9DaGc2hVcx7KEyjgq9axAEQuyc2YAPQW2ctFTnbCmkEb",
  "key15": "5gyyn6em4LpVzAJBqf2ZvwsNqqfEKDtn6BcRxhuXFiCJoPD4UYceRXGrxg9AmRZ3Dhf2EW5BpMVErjLk1ZnEPffB",
  "key16": "246rCoeUB984MfaR8tydxtZvbHxsvTjY6yHQUNWDHDMfuaArhJrtYHLtLSNtHfDPkAhEDk9unMZLPuZv5WzNN5Ua",
  "key17": "4EyAJjsWDwsdtcDkYUF7YHyKGox2VKNkbaPpCp4MJ3MsD1L8CeM3MM4yrDFG1AfxanhyZWGgt7jzmfS4QvvQmtoC",
  "key18": "4qpy6rxTaQ9jgZNW43yhZijNfBFEzjsTgckx9K7Tf4YvMTfAStCUADe1c9tLxsYQuYAfot7VVS9BxgNmsLbCdRkg",
  "key19": "2YdKix9TdhYDbwD22ryodnAjwfnDyfYJUjYHeMcZjRYJxKodTvxRv2YSxFMBEUxRFMbFvrN37HjYjH9kzeGDYHNi",
  "key20": "5p5eMEexkJKTxco1GiJjWwKnYgGWp35RQtykj9uve9NR41RWbwHVCZDasZ7tmu7VAGCsgp1dGBkw35puFFxPuNwf",
  "key21": "2o6AvSkAvrhZofAKsytQhebpZvGm8cpeR8jBdQXFEW7JgHJE1dHaJeB4jHaezPK4gP54pbxCFAA3jXKsYF3Ne2F2",
  "key22": "4Yax5x1TQ2HWBU5YbrcH59ffhm2akK63QeMMP4Pfo3uQhAkXUFR5f2cRaRaiAGfokDLjP1Eh4wtHE5mAEFje1fZC",
  "key23": "2cGQUjEcjSNYDwN9Nsm68TKZJM1D3sq257wYUbxqtFWNCKNc9JuG9x7PaYCK9HCC85EYE5Lfdy34uVGAVfdLy6if",
  "key24": "2LUcSWqTkoTWA35CezgPvWkRnvU7fedqkZsxMVJYEGQgXu4ykG6G4p7zLGhHAiKchjjiLmqu5efYaR6qaNaMq8RF",
  "key25": "pnjewh8faNP9rT4RU2L1gknhgNpwjPJ2XSV2QqQSLQacd7A93qXRahMVCWV56x5SwjfUgmKmX5rm7bknm4ykEMs",
  "key26": "28FQsAGBw7jQrsBk2tTqMcF3qWFrYo1YEeqvio3KAWV7srC4jqWJymwfwasPRAWauf4mdxU5YrYJ9VTpN4ZivKnq",
  "key27": "5o7pTPofw53TLXVxUVQr3WayVJas5kc3VYhiK67eNDV1ruazsKd8K7jnzao1F2vsp2gjEX9BnoW8GSs7uyC3UrLc",
  "key28": "vNQeVWU6N6JbF12FwbTZJJMC2vPmKaUXpHni7QioB1xT8BzvCX6HMn82MV7VP7m4wcnDGcEYE2guh3KY4D9NwLz",
  "key29": "5yHP85Y3PaoNSUhzBgNPrYJRtafTbXXsiiCbXWRY5VxL1iKPpAJpybp3dGwr6oJV2jZfvKnPmcUFNtj6mCHX2LrV",
  "key30": "2aSaMtkUnUeYbh31EsKakC4KVzqNawFeQ9X6v5btJTeZMQgt7e6p4ftA79eJi1GjeQY8nN2ByErKpmC4HhQ42pAB",
  "key31": "47kJWQ5T6fyfSVRFbo2PQyKKnDSXxixng7x54h3mQVZiFTTV4jN3Q1We9S4qWC1PS9VRozYwwaBWb6t7wFCFtRxt",
  "key32": "2zTpe96Gf9hG2sTVREpGUvqBmy6MwHzEhe6vaequhYY47Fb5LToVHPZCasnNHQ6waVKBUaS8CUdEvY41FXTX1DYJ",
  "key33": "498kiwNBNgBPoE5MMnFoHiiWAyr2NJTLqFVygzqQpBdPd1YMLKUz9y6rH8D5DjYLiQxKeJeLTr5ou2W98FR4W5Vz",
  "key34": "2nLWKwvwTsSPN6GeXD8hQMuazMu9gxBp737W87yBoDPQYnSM6BF17CQVTKRCn9QYE4imPHMzG9XMqkFVZ5bBeEEB",
  "key35": "4Kji2MEfUd1Hy4s9KidURXFQ5WQoVrA2mCDmYrA4EvVY6azHfcZmnKHFhqgbxhKVyNypWUL8BXLszVZAFbouy15N",
  "key36": "3m4YjXGwPxhaDdaXg7tQQGdUT26oiWCsUrryKt4RQ3GvD2dAA4UoC2C7R4LFgsuszBSACBA7HATyzbqMVud6NrpG",
  "key37": "4Zpjh61dJEeutMkYYdyBpm5PyHu1fJjrYx5bDjUcHzGN4Ud4PMUdsk6ScgJBbT8Ey25wJCD75mwD5oWSJV8p58ci",
  "key38": "2NvZTc7GybhCSmQAa8fuo84Pw9SD9w4BbrUF8pmNgBKbpVkD6AkjhMk3wDx3W56eNSgUknpA3Ft57jSRy1awZByd",
  "key39": "625dt3ff6VM6EFbNaiNsB4hEDjoBgDosTYM6VZbPGVHKPDFPFTQaCe8EmFarWN8gENvhb8F4zB4xCg1zKDXh3TT7",
  "key40": "3Z7aeVoK47vtwoFbXQJKqdV3ecLDfiEq5ebxnxKfMrQDqJmBVjGGHnvEk3D2HuTQk7M8biV9TjEh3afGGZ6y9YEp",
  "key41": "PSdABcFh5QkCLJzcbKWnpLMAzswJeWASM7vFQ8MZj5tTs4vpqZZQ7WPN3zTyELPbpPwscDBSyDdyRhjzr6tN9tA",
  "key42": "XNys56YGApFndFK35PJ1LiQQ5XJBvm1hQWquXZwjV9BKy3uZhKHU676dMZ7W7FHU9YKG7VX24MCdQQfsfJM2PFc",
  "key43": "3zAGsEt9hr2wMn1jVMv286VmbPybfo77wSyQAAZ114n8c5qv86Z8zxvXkQiZghTkFMKbWbEvJMR8fE7j4b8Tiv9S",
  "key44": "4azh1pYMboS7aQzuU3jKgiyJ9GJQdmjtJti7PtLy6r1PRJqNyBMASXNeiu66hETEo1WDzSpSZoNauTs9dJpWC38A",
  "key45": "EHU8dCqTz3eTpCPoc2oQo7KcLtufDMfCxXp1VqMk2G136boMmdr2PzruYfwDK5WA6e9CpPHGKqchfJEP3BsWfHX",
  "key46": "2WJ4hos62rtPoEEdiFQ2XGde7XwtC5a7u68LbCKAAEsLD86NfFMJi3rKzmkvbNzRLPogqPtTdzkRDxrW12sPuj95",
  "key47": "5HtBkfHx8gVDyNKx2jcbmmEQa5eCFY2sF1UkR1zoMdLgvdMwmSigb6FKk9NuKVJgVzoqnyQgABcrtXpA3Pa4m1ZZ"
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
