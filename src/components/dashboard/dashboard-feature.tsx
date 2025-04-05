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
    "FShq4csmMfNk2o1Em2jtzBYzuGtKzkonLdgF3PChgh1u5rvjM2RPxQZToQN5Ur3Di7Bat7ZgvYkLCboZDLNpnVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SdBqaa7rXVjFwnyph7gEWBTk1bPKSFsByvYPh1TA1bNHT9buBqMgNe9oBnhryhjmRaBHSnht3sQvpTAZiJxHP6",
  "key1": "3VdRvTzxwFvYQAjDmHBKu77MaSxtfYHHgZ2eQ9G4zAB7WBLVV1c4MZq88iBYBcie4cSyN63gaWwdizJkR2ZdrCHn",
  "key2": "56NY4asKCWc5YoHsS41moAWj5zMtKT32xP4o5Ti4es1mUHrdhRKtyiivdzp3qkTb8p6Wu2vXEKBs6TaUVSWSPnz3",
  "key3": "3of92ERU82RJwBFpLERM672QKWfCnMftumbtnEKxEGkxyjTdWuDCMuh5L73Aqx9LTvYhy57RbaDje8pGikXGFAgZ",
  "key4": "VWcj2Dq3Fz9HWr4TnqdWSx7s33yhYizkD3mZ4JGqRbnPWQWh88KtSSuSX7YBmaePkH8g6AC5oAJigQBZMC6BmiC",
  "key5": "5Y998NwLtEn1M84Rm9xdj1c3QZDjq1A17d5XQAoX6ReZoQ8vDeqXYj2TSWfU4x3Xui9veNdyDdMFz1G1VM57oC7y",
  "key6": "38NnQYL3djLV43qpPTJeDzq2VF2zZPSDkFmiMxpTmeoxoPX3SEcweAyvpgjXciuYURzh24kwUA6k777DobqZa3CW",
  "key7": "iJ4bDPTES1aDv7xdSwv3BLUmHnzkzrmhfuPzd28t895HaVdhZe2N59b8Cqsyii1k7tQaZr4fbJzHJBFmowFos7H",
  "key8": "4VKBa2iCFhGEurV6PoKyw935V6eoYEke6hkacGZNN3zFJqmQZNwDuu786NKS9uy114PdG33AuWqnehDzpe232wuM",
  "key9": "YDiheEaE4yckiDdGVi6HtxU72Ybi35BPJbDJz2ajcHnWonYnCACeSFYWutLuYLXysw17xgay8ZW3FCYhXVa6WTy",
  "key10": "3bGsLUmCC3KgSRQo7Tq36iHBHuLPsvQEnyZEwbmMBYd3UnHSc76M3KTEGtmFnhoP7ZaMRsfVRGBLPHA9fBYiEy9e",
  "key11": "4m4fXwRnE6SotsVzC1gF591E1QdA1jaVVLdfi6amDNA4d5qvz4nEw7xQcwKPZPsBCDKEkoEJ5eiNSPr3cS2kPJKn",
  "key12": "3L668jEgfec1YfAJroWy9mTgrx624941ZkKTUkjDpTHc9zko2QFHBT5z98p1quqwf5wo1y6cW57D4cpEHsEskDPr",
  "key13": "5Do3CEzW39iBx1XY2Uw8BPNb42XYGGMQsNcFwaqtBFFhpxy52dKfywTzbB4g9wqVkcPhahjqHsdFg4FkvKCK2Sc5",
  "key14": "4WNQv3djEAbanqNtPknvQKMJUfrJj77mA4X2ZKxaPHUZpZMBmge5b1Sn5rKFnwqCJHF8ZydcUeYXNt9YirJctGYQ",
  "key15": "5tvifTcLA7PzZMg1oSMuMfGKoA5o33ioFXMxhPRUHXr9CHFEntkf5jy3a2HW3wVmbvz4Ag5cC6aaw6cCXZsUPT4T",
  "key16": "5sHaPiiNHuZxvzZT8c1cze1LiwJbcsq4DMsWaPboLERMjw2ENvVc2DaDTeFEHLesppBvtRfmLyCGA1TEMiXr5Dt",
  "key17": "2AeZrGZ2A3gqQWBy1yBWGZ8Ubd7hgf2ZQJVvj6XCq2YaX9s2Zp35sa1N52hdz6t9dBt6mGeYYoBLTWg5749nEYWz",
  "key18": "56q7Jfsphwci4FCwaFJzg3UhcnYjifBrxLp32UrAV9rzq8Q4jX7QawruDYH3XeWYJtTaoBfcLuLHJq6vnmSLPbF2",
  "key19": "uPuuZZiVwLmPBqyRxQse8gx11Fb9cTtEhDYkFuRzQ9M1DbXRmaam9EPEW6NUEYqKKLFdQedcXBG7qEMuAhD3YDw",
  "key20": "2vCrBhiak9ihiBmRGxeLNys318gFc16wqqzP1qM4tUXNP9yfZ3roBE2PCWTLkDheTpkXgv4TXgHa5pZbvEHQfhaL",
  "key21": "2CHf4J2oZpSkGkAWnHTUbRg5batfV3PoDGyTcGvHRKVQxrd3Mus3ymnQ2D8pjr1YPKjvaKPmiNqbpBBbw3LSXWDo",
  "key22": "3UgzPnsVAe1yfn14zgAskNCbyTU6Myw7w7LnynzVQgpAAEDG4LpbyoYqTC2tG6x989YjHbAPDBPJndacheRgUCAL",
  "key23": "joKz3P3hjx7sqcnwqB4ZwFmpvMQEJEeB8D6P6fridZbjsxV2SAdF1tWiyVtKcV3cpBrhz9YjrWE7jrurMkkgjX3",
  "key24": "5yeMgyMTBqHAzLZvzBXEAfsmvQjAwcDwoQ4r1mkN6dWRZR5a7B9FxBHEwRunQiU1nqFdQWpLnArF6vnHVbYaDw44",
  "key25": "53iF8uerkiAGta1btDKxPWv5nysRjWr1cNZo2a4GSJv3CCMa9Hom5T5RnxDJBMe3gYxNxCjJpvJnXieaynctTUPr",
  "key26": "3tY3UDTc4yWSdEuBuseG33KZb5EzteHzVaTW12f9ZZ8RLcyoxHus5YvUjagvA9DRRWdtqoXGUhEB1D3FnmgS33GY",
  "key27": "4KLVBk4RAXxYLbYKQrtS7n5ZJbbbmqwaHxK48S9eMdZxr7X7kobju7TP2NAytVxbP4adYGqnGi33GdpLnHP18HSY",
  "key28": "5tTz8zsKRBVKkmwms9kMXKcvZrBUDow7n4WzkKTZ9M9UCFrZVPazZRgcH9h7JEPzEjmArNzmDqD7eezdhQ2cdsD",
  "key29": "W7Yphu7dKor7enDHnrxFbXt9j6vXNqHrUf15rf2ubHRRBPmHQQDyNVBPQ2q2j88GSRuxDyykva2nxZ4WAYjoaS6"
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
