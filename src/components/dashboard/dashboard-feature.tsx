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
    "5HyWUf2fqtRr7FUj88eq81vqKqjcQF4YjaRLjHKcmoK5SrRhsvv6j3eSmz8qDd3xKdZm4DgF6ybjUu2aLUo9Ubk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LPn5a9JC4PB1nLY5PaWD9CcGTJ6DPCsxnsX2dw8158rWoTWXBxydo31E3TUKWnQRi5h144g8rWYM1aEDWmteks",
  "key1": "62m6BCvYJ38NMx5riRECXk85kepiqqe1gzvHWC8hCinFUqGQkm6wD6PLFr4w3D2VW2KsMua2zjWLg9A2bA21cvx3",
  "key2": "FnRCbFXuKriZbne5vVoocGJAhbmKzrv5cKjoqyrigqAfUCVxHtPAZ8zCgWg4jqgcvmkYw4xgQ8zJmJiuivfsACN",
  "key3": "agxxMTY7PcnDKXSFQirDUeCXv2qH1hUjTzB2C4jvfYNm42V1ff1axr6RGPemehP8fEPhvLUfQSsE6XeKEkYkRy6",
  "key4": "2FoBHTApUrhJS79eFmz29miJda25jP4DS33mmzSm3iPWkENEyvuY96BqWVTioXuftJk36Nkwucsu73cAhRfRDJuD",
  "key5": "4BRZigmUN2H9Tcnzcp4ig4uDGmZ1PWc1kXdoEs3YxGTMzJ96oqbVSP1bgk2wquFWWAxJFwK7U2kCYXdMZ2UHwHv1",
  "key6": "4Z73xQtoZwCN19aejJobTqQhcG98Fxjqh8N7UhFJByfVM7MAQkLvF32aja4tvnEgAipNJSA3An1XQx3acJSN7fAw",
  "key7": "4FLWYkNUpQYbso1JC6g5SugKp51MiuqL2C7Lk1Ke76S3BgMxxMmyXGTYbhh732du5cQnngau3yq9ZCobwv6pFecW",
  "key8": "3SgVJSud74YH2kuWnwbBKKgr7JVKnXVQ2S7Wx9ZLj35qDLHCRSBppjD6vAnmci1wwaE3pEfTnbpK9BHvEtuoggHM",
  "key9": "2dhrrm51n1u96rVwHFwiozVmM4WrsaHrVkGt91HKDfVcNQiLNgpdTYFHhQ57niTMDwzcc4UhTULCeEKgCMgS1yVA",
  "key10": "3RuVYo4bxHK5tJwDGc4m5bovPHGP8LnPoBvrakRRWYtJAvVTFTrTxPSKKwTC42nfAjna3F83EejGUAXf5wWi8VVg",
  "key11": "4xAWwHpX7KbKzTAAXKq5eQ5E4Y7whS11BUvNkdfBoSpNyCRHPi2r1ZnMw7BcnawT58J1oSYWhpPFCCvmeTijEXYt",
  "key12": "4mYxurR6HUN2vkgvVXqhjQu5cEgLJKy5HtupGVhaq53uwGvA8nyugGMdMTx6Uw7jQmjyJSGVDqw32arR9EAzGHYw",
  "key13": "5nyUkCvpyUuCLuk8sttJYrmgtFa7krHodpE4oYrFFBHPFuwmPVWtf9TSiQCynZaQM6qKxhktWNtZD3SvA9p4buBW",
  "key14": "2M11r56k6vjSTkGc19EErMxBGAeZ1MyUFFhtj5RC3F6KAc33hqqHBLKU3V3sohQZm2fKeXdb6evHEwVeQQfV66kU",
  "key15": "5m917uU9F8but8P1E46ZcbGE7QrzV2J8AUyhEipvMsw3Ryzgc2YL9haY92sMJd2amKt6WiqLatsoCkJX76yWzS7B",
  "key16": "5zD6x8fhKaRdpEt2yvf5Pjsn3a7Ah4tXkRQLoJ3hnPUWv64mpoRbJrVJwfVtePyQbReoqXCHCUsZdaGwBHmEBmvc",
  "key17": "T6a79N3ae8Q2en6nqGUWvAYTvaTiqaYJXNkVYR4XgD3jQ4oTb6s5vcaQ7zELBo1RqFwiZTzU2i8Hqv2fVaoiRNW",
  "key18": "3XXwHc5vobB7Xz5s8sMj6x18EVLrnR7XXFfiRHEZ4n5caVTV1nRTGxf5hRG5gLJpk5DFgm9cG8TSSMTu4tXs4w38",
  "key19": "2hhNmK1hGCxcxdVm3DyvG5G8g7uSrahXKSXyBTJ8cbdEwThSmCDxnZjWGnWSNaXh5ePkKqzwvPpFMUuNZR2rSj6u",
  "key20": "2sc9JHn6YNEbz4WqyB9rG1xgx5PiTdk7zKK6nMwwjJQ41AVottFzpSNCt2jq8wjGzRcfocWxum1PUbJCSSGcM3Kg",
  "key21": "63dSAyC9oCj1VGfMcmbPPzdHscrTbjAmARa2X8G6DqVYespG2ekaJqCXSWVbULZxcViZU5Km3SuLJmvwqHN51SnA",
  "key22": "4trGwijunvdEQvSmgtFRh3bsurq1cBLQ6uhkCjvfRTdQ3rvf3Mi2rGV6AkrLK3fRsaTfs3diBv73stD8Ey2AGkdz",
  "key23": "4WkbEkaWj8FeaTm4d7TmSTjeTbbQcf2eiEYGVKji2dfUexYeR8EqaXDco7PxCfXovWHedtoGCGx7mkXJjesryxmx",
  "key24": "3RsZDuxbe9pgVbogPrynCCTjgaHTdYxNKf4ewRf3jnS5MRketRBpH3Wi3tmTB8eN71tzN89NiRbd4CLEQ3xza246",
  "key25": "7G1sVuCk3Fivzpeej69ceZJKjz76Aa3sD24SBjEHKedoYsGfatQSNhvqXuxGDYnQB33btabjAMcbP4NepLgDwsH",
  "key26": "572rgMgTZtZ9iiFXrFiDeuUp755VcTF7MsMWBb3Sov3SRDMd1UPjxZjeSH9YaGd2u3y6Z6H7XmiB47j64JgaUcoa",
  "key27": "3N6yNTUAEzy2Ge24zTiv6QYjufhDgXKURbV1HsUYHBWCnEHPE7MZKzLtAEPu72YhfWqEcKtYN5Lq9ensYvkdPNRe",
  "key28": "JLVyt4u69owR2xBmirwDvK2dXBQvwcGmA6jkZKdJb9qd2xk8AK7A1hY5NXg2pbwfPyN83dCWViZkBc3PooKrfGP",
  "key29": "2xaArfJHHmr7KkJwcZv3oWQPFr9ZB6G8rVDZC5rrUUdtJvFFN6KWKUvJYJV9s966qh1hC1JAESh48WGeKDPCZgK4",
  "key30": "NUA4PQd7EowpmPGXFa57aPxmXtaff3yNovZpRQwjff7FvaP7ujpdinhPPC1nTdXyhBYG7kpTDPPrDhM1vytEXTE",
  "key31": "5wHoQKHgQGnyn81tpu7cY1h4Lunmr5SbARDmEJi7J6H3tPen9JwtGEhSzEZhMbFiGxJ46tc6KWDyCmtWAEBDRjSX",
  "key32": "5jLrfSGUxE3mU2xNKbsKpiAhUzwXojMgqCUWLQcTis9i48BWhS3WTxFqdXYLxLJjkBsMzQZMcU4xFqNpF9n4fvZp",
  "key33": "vvJZFRQNLDXTUpmFsBytiA3QJZE4R8XN5DzKoboxyRE1hYCq7FmJB4MiUwUzuUREhWkNhT9zAFETkukfKHyeYyX",
  "key34": "rWpTMvdmevzVixqipHYgtFUtUeg8bzZMEQTQQXPWEtsa5cvAdJNPH9HAFZRGxHbohWNdPyyaJUgJYeQjTtkdN3S",
  "key35": "4uxfxK1Jg7Hw229Bqiz9wCzGsaHw5Wg1kgB9kiTRdJyYJFRj1TLKorkbd4MmzcNp4apK7bQ38zDQcunvEVaaSrAL"
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
