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
    "37ENhM4swzPwsfx89eWKNatRg6dkrrvD6PJNaU4jfyCYWFwAAMUh4rQ6SoFHwFtvM6W1WWtYZuqZ86BbXmXUSdEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRUpjBXx9spJFAP3RyZYVQqpLCAoL6jhPNc4jiGRZeaunv96Gzi6zcWHvK8MoAdY12CriB1RNhQB7wneV4tj9UR",
  "key1": "2aCEioixE4bN2Bu7phYgZZjT7nKFevdviFWpHxA6ykgQXzMRHcrBVzpDHq1LzK5zv736U3HnDXiZWSbpAv4yMVCR",
  "key2": "88UFUNHa2JhWz57iEALrhuaAWBF6XpLS19zpb9VpL4R3wMtDDjC2BqucRdmZgMJFTBvM93Z6A4sbku1HaERUBR4",
  "key3": "4bG9DXNwc64QjhnKMUxni72P6hq1mYhFtn4wJ1s9J5PGRZNwqzEKtRF2xhZSfWUJD1p8EcNKKPHbxZEMTCwzJu25",
  "key4": "3hb9VS2QxpBQGUkAQKnfLHPDvbt38cjVvTMf4cpfrXtg4V27NNAkM8YVVKZGuB66AsdtzWVh6JSyru48hT2vBonN",
  "key5": "5WtLucSz5W5Z9cY4ZpL1XmDX9N7UweSpkgy6zkC3EjQEpZBnFaDhzNKNLNXtdtH798e2FMaknLC85xAJoJysGXQz",
  "key6": "554qiSqNTn8N5UJiJu9TqTC4CbTZi1BHGskxAtj1X3SPyRwkU3u7RFp5CQARe772JH4gSieY4jm7h7XVAzye6U46",
  "key7": "4dDE6rgFwj9JvDLNM59fzNxz5fhCUUzECqx2qezeNNUFZkip34PdSDghr5ECh19eFma7ovJHF1Sxf5b4SMtqEMGZ",
  "key8": "4aBm5V4MmhHRkYjpqbwbiBDiosH4fwm5bS1FWBYKJKEohRBJU3jKsC4w8wzLeZi67Ht7RAYoSyMkyW2gHDzZXK5E",
  "key9": "2N6mMPEjWFDUfw2aWoHXUCSQYLd6UL87Ps7Q4YjMSkyoa5fZvettCWnPEsTwpv94pz2NFExG5TH9EL2eUBSfZhgW",
  "key10": "56bT2uJeM7NmmmQjgqS3R419Wg4NEiTGh1F7K6GUWop1qmCzKoDphT3eywDDC9eb3h5kkgSRoLUgnffpZNFYg6tN",
  "key11": "4aaC1ciTgT8YzxUm6RgsipsxLUrVHLNhpW4NUucqgHH4F2Wup4cot9UVnbV1BRcYNfh7oXeLEiELM8fWvA5jYGsz",
  "key12": "3TWJqfemaQkqHUWhCP8CtkjHdPNeetKTrMQR6A1px9zNY9sASUp1TixLDAcPiWRj1TsqyMyzMTYKm6sVTBJY1eWD",
  "key13": "2jrShXratKLyN3zbu85sqKTi9ZB9BSFPmDkMediuTVVMhHYG32mJVjKTh2WAc5VfBdqg2QrGbrtat2HxwifYTSHV",
  "key14": "5ewCb6AhDHovjRjUZkqbex7KCtzn3wun2WU8bZN5cGY4Lg2FmSXeUBuMgGEAsYdK7qCutmqdDVYFcE9WCNGPCqwo",
  "key15": "33q6WcGcdiqEy4gKtS5g6113rgQ6qVRZmzK4v4QaLvDeF4SuRctgYbXJMvB91P3aN6qXnrAkTzHVRnXB3JYGe2cb",
  "key16": "ukp5UTvXmh1D5QL4zfoiKv3pqRGua4JnhH4a8iZ4sfc3LoHwLn7wF1K1uFg5vD7WFBsQpHGh5X5R9QbBZpfVotx",
  "key17": "2K5fpdUs99TsCgfWvoqERux14yatn96jwfgVJVaDtNAhnPMMnaojDjEgWj8sznFLcQnEwk2QSpRhuqXu8uzgs7Pi",
  "key18": "oSQmehNgZx4ZkwMp5FW3fKE5ZizxpJkCs5WbUDz4EWyYMvM3MviCLL9Z2BSXZ5xeEBGP7VySPSfFuVxZXWPwcia",
  "key19": "3AHDpHycgXXXe6omHqcogeFTsjYjPdebkUZVGEkLn3biKAgssLf7wPQtJdwM2CmtKDZueTZk2jrbfBSF1Bgog1cQ",
  "key20": "3AB3LN1ByB2CoWL6gsDabfcMPTWUw7hRp7dyz7tSsfy1QYuZxwK3tW4ALEMn7XrJyiP15H9tC8B8Pai3Vejh438k",
  "key21": "5YCUJ8rVNqp73R2NivXAPQLsESLUk2Du4jX75itxPgKarATY4e7BWPnBdQ63NinQo7RU2jeF5RUmj3MqkTEWVxhb",
  "key22": "2V6Qc7gXFUusHpodTQRkrvHwWEuAjYbJvrTi8WATcFmbgs2gwERYq5PadoJqEZfVeaYaCtm8dXtem9jpbgq5woR3",
  "key23": "5nrEAFdZeZXLiSbuvBLTsMKA4AjpC4jWvGHoeT1Qwb3d8worWs5U561kBGNHcrAHHpDdYjArE1jmSdJpfqJhpWw3",
  "key24": "YEBYTVhJt6EVYxiBnx1A9HcBoG4GQKYwiXUYGZEMdCaRCbnpmJdA8Z5HXAU9JFq3WdT3BmBWyZUypRAwtVc2VtJ",
  "key25": "q5SCsFmBtok5AyzE2BsGX8wEt7ex7BrCogZckaXYemeWaQ9Lprwt1411scDRArcakWh2Rm4yoY3SsLnonun25oi"
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
