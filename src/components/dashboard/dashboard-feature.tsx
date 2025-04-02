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
    "2Le6ux7bXRZmwbNz5ovn11xAgqyKEBE1keNJSbodJyAz3ye81i41Penqi5UhV9FKpeaGb215RdZBP4A3PEgqcFFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZDFsssGmG1h2d4JUHiTisC3cNFZ77p6xhaLbfFckU6YisBHR8dAHS7bThN6h4UtJrkjmMWncaLBhYTBDuLGyC74",
  "key1": "3e9mRzxeS3HoL4Gx7piVBr3QNE3JZpYZPBE69amfmYYV46uP2q2MiPWaFjnZfKL41cpft2q5AeFko8kSimKxALGW",
  "key2": "5gKXPifbvKpwzcNKcQS91uN7eRjGe6frVw9imSiok4eM6AB1YqhPzR91e5QhDaDi1J4MZSAx5Gk3sn23pc7sKAPq",
  "key3": "QpQDcxsHr7EkDrqNieLh1EsUf2urr88XurznKoCa79rxaaGteH1bUPNJRTGYJLXZnx1dbYdNUtiNrnEhkjEt6m4",
  "key4": "2AbXP1fJ2hjM3p9bhjBnU4sTTigYdWihNvDYxQuWEBznoq7JEfziwtzfwf9LyvzDQxeNDUZdh8xWLsZicWAsBidZ",
  "key5": "33pWGu4qY2zm2WB4k24mnHvYomLExwTE87Pqbne98X16YCxg4Exw2cP5R2oqMB4yPNP7roKfagd255QEADg965h9",
  "key6": "3otfTzZiJ4mqNwnUqwbfaTJTqMGBYGYKmwKeitusxxHGxx21FqbmNHkVtmP3EknmhsafzTbZfyZHimWCYZPnzjQa",
  "key7": "cB7Hpzukmt5yPWc3SRy8DXYydnK3gqBYUT4LaGrJvQteTJCboUHboCmZh5DJpFUYe65AtupwwbyvqiLaHCcChC1",
  "key8": "3STEVPvvyc8bVsbkyqNEG4qBYd6VdCW1LSXpLg7684S3ZP7FcBbDdFP3gqoAYqQXGMY28Wx36MrVHryPTh53HhKo",
  "key9": "UvyjGpmExYYZQezESynM34dzitU6QqqAc5Zg13cqTcrP9yZGdHaitedHqZCVK7AN2txS5j4FkXSbUE8TP5CFQcM",
  "key10": "2yjKymkFY8X2iifodNtU3GfgTkGM1cjtRdgE9w8vpUf97zPG25FjWz4F8mYudhcQ2XdGYK9yc65u54svtmAPRyWr",
  "key11": "3K9RTwmWEGdfp9iHirq6qbVfLn8MYFXJzxvVhwFSw7wabjrALkhM9FXVBrSpeah51byuZCnnX91GxKR6MXxvYvZp",
  "key12": "MsuspBY7eE96dErGFoKM3D2cc6dzMoDDnP2QtgfdmkBckw6oViJD2htF6vsBG5ZY1ivdns2PVsbYo9V7QZnz6vY",
  "key13": "3DW3eK2RLHirz6CDE2jnfeTuVd9UKQ4zcvJkkkXkFmfLykhidqCW5jPBgmZDMAS4jLXT4ax6vPtVYBQ5tLc1UwJV",
  "key14": "4YQgfQDi8jwnA8fCXJnAy2Lv135PuFCenNogy3H2fPdBX4vhc7cpTVGgLsGP3H18JoTCrwpcrHpaCjoToFKXFrRA",
  "key15": "4C7AfesYjEBpBUwDHex7XjVASXwFU7Q9WcDkgkE1PNTPgbRM1Trb9GAiv5gtGRyiGZfopNmjkgWx2cXGktZnHdup",
  "key16": "kg8dSY7dXaZ1yzQArGTAYKUYwWaZxUdd49o5bS4ggUyN3sNtBKfxynWt1vDyJFKBLE2b9HENtZcvqfJE8SPfSjx",
  "key17": "29pWuqNSF8m3Rpz1dMXdjUuVo7xCtC2TpwZsgc9iC6HSk3WHQQ8q1rprtjBs8bmXG7EWmqTUVUrex7sXX8owm5cg",
  "key18": "2LkotQCjjKwv1ZiFcXzcUBdVaDaiLsYWndAvFsUid5dk3AqShY3WymSRH14Zb8xT4hHFLWJoPL1PnrBCx7RTEoU",
  "key19": "2YwiEdA5gb6KobVAfx69KYx5SAkk3kNsUhVTptkVdbSdHw8EBgNHgfLoQCiXKjj1w9NWrf6SXkcHoPRxnxhnBsZ1",
  "key20": "3UBS1KJuD7P2fNwDrQ4fTrdgmgDEH6fTxs1d2fEiLuWYadSkjquVkSs6rAvJCtQhBS6Qc4Ay1F2NCC39vvaZZDhf",
  "key21": "LM2JnNYCqgkRJpfrREWHWswGcqeDFCiT7jHi7KJkgLp9MtHzDniC6mRP9agBgwVAhwf7MXqpdVLQXB5v6xa3Zre",
  "key22": "45WHciq6DEEVHVAH6paW3A2du4rQK9uq5Lxk6Uth9t7FY4mDuKAuKjXFZhoi97ujWKUe8ufLYyDHB6m8HF79YNno",
  "key23": "3pLfXtkDtsYRuLL5RRdsRR5vM2PrJ1Nrq1Fdj5ZDHY79s37LP9zN1nPmXDq6YHhPYwTyxr3qkyT3cYMQWtZb1hd7",
  "key24": "3qHbhHfqvyjoUCEze163mG4hEXE51avcqor3hm4wA9bUTFq7DGbMwKfiopGsv3VtUFxMiXkW1eK3SUQ3UhcfEMzv",
  "key25": "2U1bW6J7m1MqW2hiedMiXJEXYnzG5YzH2ByN5zmtcXaBX5wiwNFEepbkWMjdvwFSKnLQGePCtWVsr4PgsrdLf2kL",
  "key26": "5tEu6cE1Dg2QfrY6ZKqdhNCgzXNQQsAYvuRJ5a9mJrPLJ3UgZT2N5wvxqp6fCYC8s85HT4jtXSstrWEG1J5YDoF7",
  "key27": "4h652LDYmpXGw6LW3t3Hi8ueHH7wfGz5LBZnXD1PZdZKjKGg5diy67F74SHyfE45wmaKVFJ6yHhwMEhjVPirPnYv",
  "key28": "4Lr9s8mb245tZ2gd2f3AKee7uN8mGrSsv5aFeFoWJg3TDnHRHS2i3e9vjC49Cmuf5jM1gPbisWxB86v7hzqW276Z",
  "key29": "4pFJCzPtnXJkFAfZFNNFXoHdHw1qSYLnp85FrWgMr4GBpVUzm8uNsUKesPJ6tM3vudRchDD2fkSENRyCGRTAApTQ",
  "key30": "5MnYKhRJoGvqUKdP7RbkQ9EmmDDAZAmjDM2e3kWPeMDmyETYKGtGkL9jnBrcDMfaYNQhWdGVPtTQx1VzhiS7HyLj",
  "key31": "2PsbuBEq6zTctD9AC8bTBgisYjc5VfjL2tu5TjwVCSzs7U74gtqg546v6mdceuz3aom6hqQHgsUn8m652JnekPJB",
  "key32": "67HTqcqwV1gStNY317kaw23s6ac52P46X1FjZadREbtEzqADzu1Bgk1YaMToro2NJJpnwp7s7z7LXBinVScrvDxc",
  "key33": "5zcufgWGZzZAEwW6EJXd2uWXEhy1TXFtHdg2hXvYjDMp1cz18JfTpxeuqmFxJmxcH2dhKaHeBba79ojZP8DRatPq"
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
