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
    "m1kt8pdM2WUni24cejMSfcaiV7BkQ4VmwbrizeTo5qhxpQyQmTMHvyUtHz9J63ebLwtft5tJdpyRhLkax2pNZ6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvXnGbyTjAUnHkWVuf33PzXpFBNkRT55FzAgU2fRdssZwgWH4jrFeNdysvqpTMqmQ6zZPLQW975PnZFfiAguRjJ",
  "key1": "3gQbqHptfeAP4ddyGqS5sf7Vj1PAwXjWYsajK88wS5vfa3vxLArcskrJh3SB1XxCzGGx2Ydbve849NxJHssE5Axw",
  "key2": "2mbXHpYoZB39nJfk6J2MFiq4FmTNhNXovyi5FpooWBQjKG7GYUeSpw5jh5QEbSqy9WosLWqJX1VGn4vaRYtGbUei",
  "key3": "41NtaiWJBUyxjoDEon94XDZiCLg4siPB9HR4U2D997V2ENRyCfxLR35TdavEzmwDComraKg5sAitxLwPbQoySpxn",
  "key4": "JdzRAQLmKFeiYTy4iQfDwxsBERLexRqUPUCCCNHb8yQoeW2vboZAzXdrxFAGxXVmTJtougMMmNzxz8y59tBi1EK",
  "key5": "5dpVwLnNTadq5gQghXecB9X5J2aCgsAPdikaFgSECTyGzqQ3hDzKjQT4WPzT9g9ZzE4aDEowTfq56LrYAeshjJQB",
  "key6": "3Z6S4LJK5GVLJfNgytpekr4h39byYATRguC5wcq9Yja6wzR536o4asq1wLLPxE1fMpLoJNz2X5iMxyw48mUcX1hT",
  "key7": "4Pr7u3LKzXi1NH4Xrcnh4n9jnTomjozUNRZr4fHHoazCZ1GscPNVip15LkYKQSzAgbT6mtMTbz6qirdZNa6NAgGk",
  "key8": "5wwHjBZbYAt9JSRxBLtV1keCyfPRDx8ZayUhfnbaKWcsfh8ShhUA3oicCCU7aSyFtbhcCFgpLLbshs82ZqqSqa47",
  "key9": "4wALEpiEoQWwmDBRH8dcbsZZ6WzXNbDZT7ZuZ5huUkxyMFnEj7oEvgY6A7HsgjQKFvUVh2ANR7PbVjxNkAEmFzg8",
  "key10": "4yMshytrvg2qqLHxSaRXXwBszmm8Qf7vdEC9ovdnE2k7htRBXa4otZd555sjMYSfg4ki5hvd1xFW11XcZWYxHj1g",
  "key11": "tstjL5iLPRpXneHcHwyCT2bnSvqoBQLbp1QrmgaJVEU247e9YfTxFPvXs7GzqTq4d3qTcvnr5MxysVgVKpX7udE",
  "key12": "4Z5keCLyLtEjV9RwrmLZ6vUKe2G9xZSSRnpXdMqQUeeNGKKg1B3GKvJLANMtoxDarqh6E21agvd6tA8vxUNpVbr1",
  "key13": "5MPfgKCs51FDdcTpPxWUxLf6UC2rH4uA4h9A9qBFmnseytBVgTEg8BavTw2SRgDQiHR5xBtJFZPtJiU7tEonfNtc",
  "key14": "4pJvn1LsjMzcgxdmAHSeEYNzQHTqcEDG6rStEYYykPeZQurKE45GhWyoHFCjPVBWG8TMBwWGQE1UF1uCZhdeRhj2",
  "key15": "5mUgbotUwhFoywsnfwkwTMB91oYrz1gqt5ezsnTZCqy44ACr8nQMaSYfVtJJEbYMae1x82rXKZkN9xesxCqokwA6",
  "key16": "2ZyxUt1y1ddyfJipMAcxMH8PjbEv3nNuwRWmm29ykV8UCZHHBKQiVMxPtYFPAPnpw9y3i7niYu8EbpSa5UjcLoTK",
  "key17": "4PEJUqkgsYmc62vxKApY8NmWHbsgrnXKdF7m4CbdZo2UtTi6124sg5iW1ZTpELEF86Fez2nRmt8MjtcnPiZo2MTX",
  "key18": "4HrASXJYsYT9MQJAN8Ewei2wKdkju79y3xMEgZQv1KCBUGhZ3RWghiBtfrk5pVVBL8wDaJiMUFu89mesB9EArZB7",
  "key19": "52XshsnEVVnjjpSoKkynfXpeSZiYCw8vhR45m3zCS66i6XtUWEhYYYjNHhrLcaZsycYhabBkenVWTbtAAVkfakw3",
  "key20": "gpTcAYgLshCiS5UA3drRp149TtVtzbA5sFj1tuVfH1cYR6GiyXbZ5uEszie5G2oJ3Any1jpx3apcH9dC6KW4xTR",
  "key21": "2EnK39uNFWDt4v2uT869Em7xHKtXNrogHVxtQ4ztZgpm9ij3uhhEQbMH9fxA3QoCCVKw1tv6oGEVYqbe3hitrsyY",
  "key22": "nCCgg8uSVbqLDgDXupswH6rUhgpbn4Bs56UGokCbEnFBXUEM6hAx5Nrh2a2MH6JLAoeHS6fesi9a4MdMHH9Rwn1",
  "key23": "26d7YPnGbyuMfvVJ6Nq6w1q3fGs4vVcNEXEbJGEDs3xPMDLJq99G1ri5R8W1ntKny7vRBma4BZD9Twvotbwsadju",
  "key24": "LcXqndnQk6hpNxiocCKYEsm8jAT9E3DfUY7MbYRXXPkEwDURkhpnPAwqBdjYyLqzihDRGHZVmAm4UZNEy4ktJ5G",
  "key25": "5YHsR2C4VbjMKtCs3L1WQwUHSRFbsFcAjxTLsu616b2gEuSJJSptrRvgPzbjP1PnPXwwbyXSpavJJ6ZtywaqEn6z",
  "key26": "398sGpFyusApcHPSJNumZGd8xUKsNu5xQYhQ1hXkMYxPJoKpszCAu2Pmyt7hoPssVgg2e26reMTehxSacbv4EXyD",
  "key27": "Sho4fepGi3wJ6BpJaPy27ucoLiyjLxx1RhjCpU8e618Kwk3mK54aGK5vCCSzZAPcsBEza4wnMNF98cWj599sLRW",
  "key28": "3ULF8f5AYhYFcg7Kh59jgNUASd4ZnTX9w1MfDNgdgxZMUnh4rrJnGiHhcyv52mXYk7TEf3eP6gJHQWDSHcpefin9",
  "key29": "3EuyTEPh9W4UHn4VQQU3UT4wXHe29LHytfT6QaYD2CPL1r9SDStopjCvh7fkweUbi5MiWCiCmuYdo5gGxzgvpPad",
  "key30": "3PU4k7D7c5uJv7KRH2hNdR1uwL847amEtfpHKyXbqMXEJkRQWvE4NVAYRYSnen5HvVwGebqXrrP26is3MCxYSB7N",
  "key31": "5v452gvjMscw7PA8KH8txpFBYzjv4XgCoVdgJR6T11PG2aYsJm8YQT3Rut3Vtuudu9yZjUmJY2ktsnmd6XEX5djT",
  "key32": "3x6im7QHaUn2Xm3twhq3aTiCZNfwcSRszUt5r81BLPn6XwjyvgE8KWHt8DLCUsSLE4LmeVGj9heSSC4ZKwxAV9wr",
  "key33": "4LkLDrmzKuM9FfYXV5Y3rduHit2rL5WyZQNQJARZxmSJzwhdwCcDqikZScCHUVfvndf7ZhCaNUwCKAn3t4sLjXdT",
  "key34": "3gmXSWBLdaDmF3RnaP1TLZFqGoxVycMwH4sP38Mu2L2G1RhqiAtAZd6yuHgUyje4wkXHGBi2w2b5bdcqs8oyYHjE"
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
