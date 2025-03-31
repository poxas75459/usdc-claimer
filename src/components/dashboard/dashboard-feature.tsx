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
    "4PWAJ2v6QgyN1yc5Bo5DkSSL9pvP3wGZ7ZqeeacmSsz3jPS1n4CAGtCGTkyuNA6ZDygAenH94SRPTvioWtCDQAVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z8cawxKrjraix5TUj9iM7b4zW53VD7MZVavn8DZUEbR21NTdknzsGRKzshFWGt8zL5EqpdJm69CusLbpSCBvnJ5",
  "key1": "2pC1e87tyL5aLdBChN58KLNbnStdAyhwx3GkkDnMHgTeFSmthWzXsZpDxt5MDQuQHid3ZWWg329L9U6AuurcS45G",
  "key2": "3L45oCc1UE9QFuXsuM9Vo9zshZGGYfFH5T3MYMtF97vCEiQ4L4MEZbwwE5hAUrMeVKQabvgtN3uWRX964Vd84wJh",
  "key3": "47WtN2xkQoajRyGMPQ1CU4LBDnc4qz6ZU8SabnC19VGrG6R9qpPER8tNBKbXDPPP1be6j3P4jWUzLzCNimoQYgC3",
  "key4": "3smZw5bggmndfLmDbWVUNTak4SCoEzoc8kHHJxCvR6ZPSg7qUz76MHw2PAbxcjydgFW2wyW9pymU2BuGoiLpVeKG",
  "key5": "2jSBwC85qRN9TA2hgeMAhq9ZCGhE5dtkyTiG8Wy1gadqX2bSG4hJzSNW7qu5aHXadM28ABw4VBdPPogmSLYgJAq1",
  "key6": "tAUg4gHTdnzU8gv93aSZtFnKkMw9TKErUYjGVxiumpV8P6DHXqudyJEKbWqNkg88Cm843wR7b7qgMF5q7o5rPLu",
  "key7": "4YUZzGGs8xVa7T4oyg2kGrRQBJcwDF9EJpkcQ7qv7zEih1NFydPVhitr3JxkZoBapdYNPU6ZqsyLgrtgvoxr9gCX",
  "key8": "5Pye7CkQfAfm6hQ4SFKFPMc7LjB383NLXaHEFaKf2eDkDuNn6GoTqu79q5SH59DdfTSi1CrEfbqPfQctix3rjovJ",
  "key9": "3XyS5dxrxqkfk7u3bvcKoAgqP8eR6KM1QARykHhBjCcVtqyYUxzHSTeGfFAddTEJg6d1k1bRixpknG3HEqPM64Zv",
  "key10": "5v1vcWxWHRzrjeA85T8fg5SxUGVE3mzMzmRurLQLJwUkjv7M1PNmSWZBFt2RfV252GAPUXe71sxMETe9tpqJGmps",
  "key11": "2vzTtxYwVZogM99PnQwcCkximgd3ZC3un1pboQ9vYRXeyTM6n3HtEWp4sqG3bTbg523AKVwBvuwuzrjek5mRoWoy",
  "key12": "23y5mm1ukqq8Dm8tn1yUtMupbAo86hEhuCtX5BHGjysWg486fFy8mUdb5XdR2A2HTPB4uUQ9RqSUwGv4XyE7E3xz",
  "key13": "63AW2otxksSgC2k9ioCtSG3DWPx5aww7EEokDhHqCLFKhfepH4kvUmM2R8W6A4jVQViurQmACagZQ4x5Q1zr2Rk7",
  "key14": "BVDpu8xx4pNbortpv4ZJmWzvbD3azifvW5htEfdu5rC1p7VpWDwGytewrrxadywgmvhbo2gzyB41x2QiawkrCet",
  "key15": "5GLaTd7TH85ToeExbfpzN97Na9QpSRGWjrkyQTFLPz3HhvfbGWpvpd94hwhjhMveErXPQk6RFrju83e6QtNaKjBe",
  "key16": "5RN9te7nMm6ZpcUGdFVbWxzhR55sh54ZNE3pTqSCL5FYD9UdrPK6kSQXCcCf5gzPBjKr2W3VY82duw8cGLoQy6Pd",
  "key17": "3X4vQzs9ZwenScsLx7yTNZ18oGjoMBmXVPu5yoQ462Lr56e68ocC4ZBvcNBSkeMQ8skHwWgMEShM3H43ESvngBoT",
  "key18": "4dw8Egh5rtLbKqhf8VWjXdMqcGnhCsqDmCDPZETX7gU44CQ8627rE74aGippmwNMyYxKCaCmptjto8DwEnSSy2HM",
  "key19": "4FDA2UKSc9rirh2r9YmG1L5XVmVbRVuvfwovL9roDVaggTiRnBrtVNwTz6vqJwnvQRAwmcRoMBruN14WmpFED4mX",
  "key20": "fKyiSSyEFCdfRTBJSUepzRpLPzP227HQfxsNWpS6shw79G7Hy7RS3hjX13LPv6C97R6QRvqWH8t1Bmn8CTh5b8Z",
  "key21": "31Kc16aDepQ9gYgNE7MR2wtaLaXkJGPYvDUUi9TcpTeu5h4Z4uNJT9VcuxGWo44JEMi9SmJUVTmBPiXzkoSAmpWV",
  "key22": "4eXXKQjvoxSjuc1hvXKnghmr5Pn8N9wNXfny4DsThccYEen7EfpBHgpnbaFqLBiHR4kMsSpERFrWHvrZmjB6cJRE",
  "key23": "2zjheRjZ3Jv9ZHF8QQQPh4D1HLbDJWKZDwzXGGmd2xt9FPWMXFnQqQaSk1vCDKbp8Wc7xF6kZbictPfYR7WpUBAW",
  "key24": "4fGKHvH2A4GFAv5Swrg6SuhxsB8Ct61oYE2oYUqNBN5ToqGYV9ipKZAhd7rYyiJ1JTJUbDxaEL2VPYJPYZWPNTNR",
  "key25": "67MVQGSDxq5Ph3BEZkwHyyPrAfPoMDAqL7u9homLRSkQEeGVdurZ9CMuNK8LsGromxCbDnVaq2kzFCzwcD1PDXKw",
  "key26": "22rhxXCLVPWBL8EhfWo9utxEjorumcwoUVxd2pYtNabeDtLrKasuVWic5CdMErayHz4mnt5wHMYwnoAnXM2KYRft",
  "key27": "2jM1yNmAJdTYqrf9h7kFoNbvBM92pA98gt2bThFU42FWmcdx3dHDmz5UupRah6K2ejL5gMJTnbD3MtDDaLthBcdW",
  "key28": "4rV5452y6ks9DErzBgQnZ9vCWdza6iKSkESX3YmjVLosm1tkKvw2Nzj8xWs5gKZCqtizDWGESXCGoMdEQhUDQwaq",
  "key29": "5V3jFxDqt57RJCcG6fKaN7zfYLbsUbT3TxDReQB4sPeFrdwT3PvrmAkm3XP5WsrnsQWU6pqnVLDMUVcWfJYnBACM",
  "key30": "cDGJABxSePE6sV9oAr2VCEeyKyi5i9XdUgo2QAhm9VaEMXdcaAreg85jnSvsnmFKRAyLkwXPQYvhBSNaBZG2FkA",
  "key31": "HnSVRqyLB3UYedWBxCJwySYz5Nfer8PzUXNcMdvJputaPmpCfQjwrGgUxcTefbFRZmMXddLA5XAJNrvwJtBMjpr",
  "key32": "25Y5T6HBJG315HEViXKPQz2bWJ82AeX9F7g8RahA1GmnunoByTfW7ErhSiWVxGYiUmcZNU7UgajTSmU6bk7x35Aw",
  "key33": "5TPqF5DTB7apST88VHFmaANYbEyswS3GVXg2eVyd2US9L9z2AthN1qHvUxDQHxgf6K2SeB2bu8EGSRKyaNYTWFJx",
  "key34": "3tdaxeBCJh5MR5xDhr415etmTwDjYaWfr6Zk6dSU1ShSPTxLDx6Y1YsND9nEG3i74gLdm5uombRmXctw6SpFyW3a",
  "key35": "74MTAHYaRm7nAqxkduNprp4wZLmdunHftufL6qd4XEcmGyq661Vwme4rAnFCbuH5v6VWbYGAh32mx1RnDa4ox88",
  "key36": "4NtBfwbTB64NvoFCrTD3MBdX7z82zgVb9yxHNPbMboqLHkQ4cSnqUuU3hSpwv2gy8VXSFY6Q2BmAgpxXWUKjTo5D",
  "key37": "5jHDFMHNYw6XPF8M8QF92RcSmfeDqUGoXyaSCYE7hhUS9ktcFaMThzY88Bcem32PDNejRD3DvpnK4dHCCwA3uvWE",
  "key38": "3rnvSQbzSwx9vZS5HbkXehjwJwjrxxh4GhqVP8crciZ7f8rhYKAmrDHiGatQqMuqbtemgovaASvNmiybXfzSUAzt",
  "key39": "5yqwcTmf4n1ioaCB82DnHBvHXVrSYJZWo61TN7SAwinWz8XDGobPdKC833HPCubwJmF3rrsyYhmhpdyFHAhfwr8v"
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
