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
    "2NqKH5Sfo5uHY3QJeRMHhpgQ6U6zpguEvjg6DxotYfdUmR1wfP1UrrUVh9xKxzhi37HQ69FXkwUq51rexY7TyeqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AN5GLqjVTdYCrzCq8doUKJCyE8FdShsLbYnuvJvix8JNY3auXFT9tGpSCAm5W6vqPgpmXeF9Pkt359wZcMHto1X",
  "key1": "3nUcm8gttqc6MdrUPtCZt6Lbyqyat1fWMduvamzyYUdJ9DB1Aj6E9p6fUSq3hJZQGCdBUWHab981PAoUXBx9SdQs",
  "key2": "3yo1VGTL86whb9aNdX5ateN4Hy2HnEvMS24S4W1BJd7abZz2BxaCtYrRNXXAApisTqRZL4QcbwfSMGLFYZNgJLRU",
  "key3": "55vwRnMrJdVwG4qKV2tLp48NU5nnZYYSKVHb9jCYPDbk4dR27X7tMYzxL3FTVgFjMZSE9TrrW2xC9wjyxsnzdJG9",
  "key4": "2mNFnjXCNub19qTXSPH3WftFAdmoiA7kTu9f31vjcuCZP9S3uGKp6GTNaKsCC9kyvdYsV4Wiu6TRouEpdj7S4zrU",
  "key5": "51xFLFgWVUG9JQyJt7xuZ8gg6HgZys3YBuLEwA2FNzj2vhF8KGe1v5Ef56uho3MyvMv3gZLR7UtX4AHjJfWdWAGD",
  "key6": "4iKBb5YAvPoZJweJiKxPWLhMSvKTQ9ZsQBsFuhqA3DfXxyTzbsvQfTG52bD29gXX11hCH2FPgmeBnJTpPGBAYaoo",
  "key7": "4qDfdZrDyg6YKZWw7ZuroubLdsFfkbehHk6yS4jeemVE2tWRnVDZGyD2RBvzo2Q1ovbXjV2bQVbdy8ZcsRpsbKWp",
  "key8": "Qo5GZonQJjen3JYTer2eQ4JNRHUdQLSak3i1BGwUbXuCqwnc2XkKUwWG6FHZV3XuvSubaa1zABq95QKehZGT91v",
  "key9": "2F1gA4SsCtnqfzcA5CwR4zhYWcTDzLZTFLBGuN9vujb9VWD2RKvwH4bkycmoCYJ49pMknXTbqRX5ApYqDXJGWN8a",
  "key10": "52geTg1vdciVyFCUqTuvLStEZLG6ceKTLGNhprzebwGmXdzqejtqWPcFiJusgFp4n6hCaiHMKesKHQXcUEaPzqv4",
  "key11": "4CLLaARu3QGJafponEfi2M6oQm3BarP84DErMLQPPAU4Hb36ChCXsNoVaXXmWvK691WjK9eFcQCZkSJ9r9qpnv1C",
  "key12": "3rLycYnKPyWSeyrzDhynkaPUdZfk2pPM3FkYnAbE6vycGBcQbPrejRPdBQ7kX6fceoWvE9w7aoGWRHg8AYTNB76t",
  "key13": "2rFQdLZUFERYHvpngSbc3ZUttEoPkKSnx8rJKdDTA5NMsTWK6P3QEPe59XTonfzKHBYtmMcBKk3cnCgY2pyWYtMe",
  "key14": "43J3GGt6huAq78x6oHeG8P8na6hrjdPf4doLqoq7mqUqkPviZ5V7y16ajFk4iVY73N3TtZL6edQjwLFPhjx4S6AM",
  "key15": "53wF1i47W9iFXzDJcnHw5BtmaGb5W9oAqhwcQdUcoZPifTBZwMdBVQpoTfY5RG9pQF3H64WCKP59wa86BYJuvcXq",
  "key16": "2gHuEgnvv5NocNmEzbzCNcd5KmQu16CuFFYNY7MHcbUfpmHAycZXWjakUkX6v9RhzHufmiqvMZoJ3ipTf7VaKoRj",
  "key17": "5Tj26ydy8mVnZaLSviWxmKcShx8Hk3AqchzmstesbwqjZqZBM98BuMgohMCXECqRCUvZhaEhL4SSkxCVrYHytT9M",
  "key18": "qa3yEoTrBeufTsPX76snTic7jWbcKVmjeC1Y1cwxb7iUiinL7gLkkaRyS31qXBWs8fF2HXhVr7dpAFxBcpcvXTF",
  "key19": "xoTYFNV4b654j6ZUsx2eDbQrhw1JycUFR1HxfmUaPz7cQhj75HyNHnBg96BTJSqmBcz82JNC3s6k8RVrr6dybTh",
  "key20": "3RqU5b7df9b8Dpqzrj2V2kqqbfYSuoDmRNbJkGs87kd3hEfybmsxEXrfEb73Nb4KqX56CxWQ7aNnWRD4YKj39nDX",
  "key21": "6672mhUDYafnRnqSnUdPd67iKNrgEKa9MQc8FAKUwzi7tv2BYRVbJjbwJXHUgydc623ZKZu9tyN1nCNHXGnLbyHS",
  "key22": "3fp7RuY8i4Y7vbvNWeh6d6LDfLEWgvr6ouBZKbHXJ2khjHVDTEVS2RBMBrkrPVScxopqSk8Yaknxy2UCofvwqMUG",
  "key23": "2mi2ieEGHSJp6hv9aJsij7fC28DrBTV65YLfcVLvpAv4jTuaqpnzDoc6EFcbdtZzwyyEwYNmcMbdErCtNUDCQuMT",
  "key24": "2qRFiuJ8NoWYsSTh9ZKLZZfn2QFooayyjbud1aZAEkKcTo7Rj2rpHohTUjt2a3ESfLFKyGeTc4s3DDSL6zaq9CKt",
  "key25": "2sPazXuVeZxvXvr2GbonqpLYx3nPhDFvT8WVVYGKQWGsqRq7VokQtoKW1cKbptATBb7a3e7w6yNtGF1NtJbdwV9v",
  "key26": "2jXsfrVG7ejTqMzFjKF84EqcDTCgzfzRyWm9RdmF8YntRiWztqMcE6MSTzdfz65DRYgNR1WWi2y9RjUxWqfQD1Z4",
  "key27": "2kcWSZGSegvVSZ2Vgd3sJfEZwpHNX8srKg984MLhDcANqer8suWfNVNuD8o832yuuSzmQaztDZsN3Cpz8seAZvEZ",
  "key28": "2RhG1cFMV1RJWJ7hDgfnuWE88TJUCjmvZTMVQDjTV2DVyKY7mZcmHFScqpH3e9N7Ut66v5TQAomZsnFmKAPVoD5s",
  "key29": "236i6qyxmB85V411h28LMiXs9dCPjktM2hfnqNumaVYPomL1hmpat5dYoLfSY7M63r4DsV1NSHC1EY5HFiNJou8R",
  "key30": "wf4A28aDrachpCkYHR68ydtuB3gWNdPcNv5jZ1ZGxEe2LcMqPP5MVmZz3cbC6p8bnmkjwAiCPLqoDN29MSLkNVG",
  "key31": "2trrjggbZdsNhMy4m5j2QxVVu92AqmboTwDtTuT3hc6YFoVKJsue13hoNcfKfiLThHR63ByVtrr8eSWu8T6uYuNh",
  "key32": "5Ziuxsg1N7Ry4oS9hcLdaZzzhRJx8a3BVUVT3ZezpXbWhhovMRxdGGxMJecXeV6oC9HynhQ4HU5tyywxcXENnuvj",
  "key33": "3hnenDghmQfeHaNrwCjgUez5US2nEJmVBnub4ddeyJfQU8keFYfuZKxEDnhuaN3zoLNCFoXRAh4jxGFXMvyRP5Th",
  "key34": "5v49r7pvL5uZBgpoRAyAmS6egtXwc2JKhxGSkWvszmxh5h8B4im7nnVR3iybgHa5WeFbXQuE7g6trwz7bhrMEE1y",
  "key35": "5tJtAKG2fFAtmTNHpAxQLwFnPFMyHnUrmAuH92vSSsyjv24hmJLrz8FH2GnM3twFYW2JhxyMSJgkpN2uEAwfV4Hf",
  "key36": "RfarJdkAnxeLZaJ9dfQYpvhfJNBhHPQbKGD3xqP1n1XY7CwwT9jjU7X4hhPg88ffFwrb2fbuTU9CVowUXhqundu"
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
