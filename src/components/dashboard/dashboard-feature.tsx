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
    "5HVNDUMWLTpMchUWPjo6sk8MbQFjnmc9qZSTnfXGrzK4ouMdDZfYxsKH5xMEMdajMLzjeN7NeDUjBLzSwHm44rH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctF9eBvJpZcVhzeEEfvKTVx9jHoLbmCNdWewfaxiWLSWScPaHSYGZ1vHkLUv49DDxRDeu1g84zZi21z5ob1T4ZG",
  "key1": "9mMwun2WP8da9W1Vb4csbfEEbbkQxsQxi1ec1jVZUi71QhE7gYN4ivwU347LzX7sDvCAoXNV8qNHh41YGgQkuRi",
  "key2": "57oubkzmXeLW3pDNgncmYEQ2oE5X3rybRKkTKWYXgQqNdjVukbmB1u2KziWxkazkW2UZm4cCAHyuT6RNgAVHw9ii",
  "key3": "43Tzgo4QbJYsBPXrMZ4CK1wKvb5F3WmtcNds4Rv3qrmjo5PPXheHnvfzWWLRragDNcY6v1x3YFFHKZnov3JWcjHs",
  "key4": "2bhxhXjASF2mCDGJZDLWXu2vzygvc4A1bYEB9zGpUGcqfoWZRchtnDAmtDxxTnpVLJaNk46KLP8m66aJ6hkGhrUd",
  "key5": "yhAbo5azYBUhEP6E4tQwLhkqwiC5Zn1irQdmHrTeiGuoiTMaFwYjmDsKXnBo2FG27PRtdHNiecCsoMfir4Ypw3T",
  "key6": "aNk9SFziDuP69seJDKZ71cU9AvsgP1CJr8vt57oMwK8Vqtft3SeAbxi9FXjTBNpvP1MCLPmT5bWZwwncrVnb7C6",
  "key7": "3bbSk4qST16GSF3una8c4SsuPNMNGJWKm6ozc7yUhhKKMVgFLzjQ9ALMYkbNvN2XVVLo5STeYkDHhMUuuyPuSG3G",
  "key8": "4gqALHtKhYLDSfCnh54kSdsfWLmpqVhiUjPSFYmv1FjFe1EBaWh5YRe6udrEsSuDPQhW3mh5kNCKc3qbfMLUTCoU",
  "key9": "39tCwvMxqLKzpRdgSyeMz1Fgo3hsUhapsbH9mxsWvYEY7EgLMnWRy5kks16GnWoFo9iytWfYfKveKrpeuP7oHyfg",
  "key10": "4QvdwnmBKCn4FgzjCCqcC9pjSbagakzw3TS9QmRGre8y5vXiqnHgc8MRT3viv6bHa1SHnJXcQsaoFFuxsPVDnqRa",
  "key11": "2QXZ2ubQVXTKuybYym48acvHHojMxKUGnFnyykkiGz7EQjbYso1EH1FppobgYBuNZtW1VaUJt1ELbUFcE4gGPL6y",
  "key12": "64mG8uXEt9H6BmzA9S6rujmPjsni6LJfxYbY9DXv3R33eqkvKj8LymVYFdgzWwoJLP6GZKchg6rBpcuVWAK6Fq6Z",
  "key13": "5aFm1Z3MVTkSWQqQqwPsAPKHCTw1tqL2gWqnmZx2nGkxqt9CKnNViMt19cRPC4d1DFrPotuaHctW4JGeLEbMGqC8",
  "key14": "2VNcSmaMfWhFiCbqMQevQgLuBqwfgR5tW3knHm3HCvnA7jJpLWqUAF8LLMr6iNXLssmcNaHkS6NZQqphjXJwYJ1J",
  "key15": "4saBAa9g35oPWYVZLH2rEWiH1pA5fi56kx1pgSRDeYHukUb6EVtJgv5JyxfeNohhugXcG5C26LLVPnGiUFcSEWs",
  "key16": "LEgwLJdg17RUQhwMxQZ9gNkVitNxrYudcQrjezBpiH1qJD6p2MWgcgccqwNAEdj8gNTWNmjb8EbJetFrg6uCwUT",
  "key17": "2PQuzZZxRuPXa4pkLc9YU4G8qJx7Dfp3gt3aq3f6pbXtnHEs4k7G96VU7HU7BcdREr4sp8P1uksgDvyCT4cDcDn2",
  "key18": "mNJtRBVVLNNLpXYJLFND7hAaAVwgYtVrWn6Bes4bttvAmSrhH9MMS597mD2vpF5ThjJQt16YncS26mQ5yVeip52",
  "key19": "4qPgZ2anSSiychKDMaFTKXRJxPgGg2nV9oHqN98yZZveEcoT2ptSTrvm6f9HkzKBKkANjAdKASWEybBiXEz62x4U",
  "key20": "4qem9CmCDZ32KUapAr8R1P91UHjRXcsWNZih6NotyQG2RkkxXw8A6fyLPrEkdfkVuxH6uYBMBpXYupzdb7rkfxki",
  "key21": "oP1CTY1w2CybaFRSDp5mb38hnLMABUeMyAcMVuVcxzUQTWT7pzyyB9JUiACgffoNRsVevUCXUQ9Yp926u6QsDfA",
  "key22": "5BZkRs3DJvTGExm4LqrBBsYCvuM3agFa4qE2CMUxVZrMsNKxh9wgtASn8uLMk8HicK4wzhLRkFFtEZGRHUkMphED",
  "key23": "2fjREjfRrTwvZpFbGpxVsrhYyBtpzD1xEtDQZmwcr5MyCdEeotDRfAHH6D667gsPfEphyEZu5SBknFQNpxySiway",
  "key24": "4cqPKXfqrXX6qsQP1cMVHKyJgztJEU1M7TZTNCMhJLxAjCacha2AUtcQkHJ3UEzYHfWyBHVunpqc2Ftg6TsL8yBx",
  "key25": "3gScVfm6u3iBSmbyDYwoSY9ktMmhfD2TyQdV7B5oxB9rJdP8KecSozkLa1rXvFK7whLqbwaGQfqaiZ4vNWVkvNHc",
  "key26": "3ppeoS7tcxsxCfvd9mUwsyqeNBuZiNYif1BduidCHDvC2ho3fSq89xva8YHrTWdfiRakxSLb3FMsvs83kGdQaZWq",
  "key27": "5gGLUsJjrwEWbyrgS7Ffzjpxn5LyRtjoLVnbNs1HvE8P52YyVVq5yGC2sKdwpxm5KmtLmssnVeq2r4HXtCuRicSY",
  "key28": "3JHoynREBPA83YSaZDbBrWmZ3yma8nh4aDAM3VnDhPi6Mfh6UXMNwDz7ZyQ3bC1fBbQ5M9dVThjqhMwbWZMN3mgW",
  "key29": "DqAJEUL573yDmJFUM7ufyBe4c9edMvUpR6WwSbYKohJHnDBtd1fvzD8eanivVmaJNhMCSuQuQJb3vTnwEAGCUPT",
  "key30": "5DpoBmuTRjHzdfb2Z9WfEwEuvthep81abre2LN3ah8shx8P8pbnQKfm5NfbUQgdwjodrswZT6W3SchtfTQTRPApm",
  "key31": "5cXzryhcuwHYhh7ZW8pvPUwdgLrzYYEhWbWxP9gteJzknphp57kCwerabMTAN4JZcAi5yRJRp63Pq45bgG6n3h3M",
  "key32": "3KiTJGoGyGDrFcfEexZeAUYVJpD5Ywg35Y7wvwk2tSJMWT2NoA8HNKzWpdyeE7RMizHmVLwfH9h6gqWHMdgWszX1",
  "key33": "3VjLydNZ65bcM56N4C2GBCtW7VXxM8VB5jC4tYeZUwj6zyy9Nax9hfZqv8yXe51skDZ8b5VRnfw9GjpFT84BNL99",
  "key34": "5AztsxBxkwiYpW2vWei8VTt8QdWvL7ygrm7w8wBAdFDGChaD6m3xH2DVPqsS4ZFeiLiZ4nBjj3HN2H5tKh97n8pa",
  "key35": "3rg1yqMJffa8Dy2zeM6WC3oSFRZw9b6sdmnuapoVXihYZ85YxprKJMzEsgi4nmcMcSTx3DCGzbJuKhuXxgf4LXfj",
  "key36": "3SdsydAJRSCdEQFigbnkHAyaKbCnFnobsw9k5WrsSgydHJ8PLni54HZcJdzofiFSZS2vvgHQurdf3PgdYsFuL4we",
  "key37": "5kmPnDzRSW4fVdUKyeHvejZvREF5MGjyMfzcGYpk3tQRktxfWk8kTCobvum8bZCd2oPTVTHNU2ZvNd1QcVREqzBX",
  "key38": "4hsyXd6AHJFVwYphFdn6YQMv8LC676442eAYg8pnC37FSPg6ErGocmMGyF7yVX8u251UPazMJ2YSgyGT1UySrxYU",
  "key39": "5k4nejnwLcBNjyWGGdapufD3UYAGBy3neHf33617bfNncSHYmB7LpvXXTVNKeWNeTSt7sU1KZgAn11s9h9dbPV33",
  "key40": "2UetxemCemAFj395os7U5RaPT6LnUrtaBZzQVzaPwwZ4ABNr1mMJX2kmgtk2Rmr8pCD8YXGUXEEjspdWjwL8V3cW",
  "key41": "5wSH8UWi5sUGUUbLWJ1cSCteqJSpjprtDc7TSkNotGrfmdmKfXYwi3NBVWm6L4wczySnneyQppWRw1uUjck84Sci",
  "key42": "wyHv9iCVSabi3ZRMcCGkKbBJiRZ8j1yc8GEeMuaSJRxWG1w9CbEmYfUS9CeJS2XmLvH9LRxXxirkKBTHG5ssAs3",
  "key43": "5X6huXYmd7BuQnmb7vuNAJWQrP2ToDxcZJNfkBsZCmFAiKXwh8vDo7B6nMsxfGvf2p4cKgKWhgXvMDSFgaMwQr4y",
  "key44": "64ZMHxbkUKXSVJWP2LbceP7RCTR1kWUmmHDvb8wFmeydUs1TXeNzEdXx26vyZJAzwn7kuXy9cLFEW2kAzVY2Bv8U",
  "key45": "5UsPXd3ZJDSF4SXCrG2941iTzSrF5faHLp2YT9SAwquQpBfViSx66NWCZHCgqSpZELiYDgaHCit61bKSTe8K7riY",
  "key46": "3AqVYiwWny99e5Nc1aAAMRp2hREsMbks6XjKD41HGe493Lm7Ev8voawLc5Qaora8bd274YecDc8VGvvvtPZ7Poq8",
  "key47": "5qBJGD4fWG1NNHp7nfK4uNCn735FEH55XxX86P82mEUfBzx6bpxLvtSCG1QBDicuAiUUGyUcvGkydcfNNfWebBon"
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
