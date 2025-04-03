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
    "5f2ocSiLfUgm3uAcZoMtWCpYZ5UjPMAvaeJcd5et6oztCFYAnV28o2EWqUYqegDAcJQrbGmoRsDMHNgFtWzttw8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StqRNy6QXtuy948nWnm2i1mmJ3pL5wPM3mQCB8KSTKYeZTqsgqrhFrfr2BhdsqAjEkBrSCXzqJDxUXk4ofsHVmP",
  "key1": "2Y15m7fRheywmws9k1JCDmWN5patnL7mksFEfftHbAJX25EpCi1eKvogN9qnJEa4bwMYQMWgqZmeUgrJG5z9mLqW",
  "key2": "4TQWkfjKCNRWCAxrhjomEj7ZuwiNuz4X7JsijcaReFQhUyQqKq6sZfD8YEzHEpmkCgf7KNFqGhuRi6KPEZRQAMhM",
  "key3": "38gvbbFnHpfLrm7SNJCb72U2oWRaJMoFDxRbK6qnTd6rnpVUuAJfp12BpPEmhWjdwZCEQdMFhEsnsX2gFDGXziob",
  "key4": "2snerLxQL6uAg9KEae7tYTVEwVpBNGG38Vj7hAHqbnGUYAWuyXeKoNNQhTXdvRsvePvSw4Hg7dEWzqn7SjL1uYSG",
  "key5": "LtgaM1QfoFVAAWgAnitD8icPJXA1QUS8gzR6KSGh83c3N5yiKfYpLadwpi1yc94WjnFYpgpPJapUqqhd1EkjMty",
  "key6": "2kYj1gdXY6ByiZJ3YrnsGH9XhQtE6hoHCTcbSWJGaJFWjSSR1yU3ddw6DfFfqEcmM6hrt3ZRPuRP4EvWqRkqAPXq",
  "key7": "4jV6TZsuGA4b7v17Dwz4KJ31HdRuneQtEMjmCkv23rocvWnU2Nxc6v8MBc1DazgojfFrrXZ7iah5cKJ9BjSmnzgd",
  "key8": "4ZEV5pu5EpS8w53Qse4nksxeanLntQDep53gpCDs6yeQmevRwLX9F8RphPxqDeqAdW9vqzjs4DqcT6YuPxa3z2C1",
  "key9": "Q9n4cnondjwC8i2Qr6X3bsyZy4XyduBmKhu95Lx9UiJzHP8mhD3NNur7SkFyMitvavi2an5H78uWLg3dF29RwvD",
  "key10": "UHRoTwo6rEuA6aZXr2Bb57tY5Zepb1LK2rmYWzPD8srSiJXuWVRqiHwBrieYG2MJkkStQjDdEjCwDpdiCFsV8rS",
  "key11": "3Nc28TCUfX5GUqPjkDLbG4ubjohFrk1RgxdcYA71ZFEo9jrPsszvAYSMRZZ6JwitP14CyTT87cxgSCCsfdyiH5T",
  "key12": "4jHE4nNTHTwG3EQGw7WZQ2kSr6vbpwKTt1NZscgKbMduBTadGjj63hxt6tG8LVFdHE1aPe3m6qi5FVsP1NSpWjBQ",
  "key13": "5YJ1Uj6SViYQaVP3PyUzEhzGWrpZazXVYyU1YVbthS9Xnr1PCAfvNJDmQ2MnG88LbNXR8Nezxg8sz5cwpUw4bPsc",
  "key14": "2q3W2UPUnVHCGwhV9HZgA12BQyKQWc7cmVvaaPJpQa4dV47EiU6nD5ah77AGg5ZSx2JBLCxqb9dMno5afC86MSrZ",
  "key15": "vcGdcsE8mnRiFiczsjaR5wLuqf2T3uuvvhDHoaWhznQYNzS3m5181s5TCnKuuuRyfEJgoBjyVMW4m1cQV99M1E3",
  "key16": "57Jk3FggXYe9DHD67xZfAfbxhmbae3arWLGz6SFy2ZXYJYLZNUhhybaT4EwXMDVM9SbRtRW9Dwrr54hFBEyT1Tk1",
  "key17": "1TkySmojqFbWDVBg5kQSBBst3gAPoDQkkyULcuEwLBN7P8CVyP1H2fcxPaYYLihP7wGzV54dQCViR2mMXaRW1Jo",
  "key18": "4GShaYSCJbB1k1UnDY7Ba3BG4Mq3o5tjyxoNbkB7HNyDXyFpCkZaTjxJfdqGjueMhLADUpFTMBpSu7XgWmEMwV5h",
  "key19": "45CmCwwEStHQtZuC9zbGHPtTsTEJUJvtYTqbZfjygrwMtmaSr2pesSf7R7xYAoHYTRLXZgGqANTPrEPYGUdcacHa",
  "key20": "tS8Bb9LRmbBtBndxeAjoLVAB1hZT7ow6CKoMKEvDKhh82SkfqPaWPH5muovMWsnwkN8M1RSHjm6NEU1X9kwSbUc",
  "key21": "gtVLgFqzMhgZht3v6MaCUoSq8qgczottgMyeWMcoAS6WffpHybC3KGMkG27Mf7zgkU8EdZtMHZs9hgg6b5wAg18",
  "key22": "2hmdF8R3KTAi7Uw26S8Aft9VTqHUAi4tqKVeAfdP1WAsihgBXgYeWAeHmsAHMasNpa3PbVUrWiKQEtVG9BkQfuF1",
  "key23": "JaF4mwXPi8uCQZi767M1HkUWt7aedWfesNoZE4ocCuKD3QKa6XAiqNBa3Vkk2cUGrzQMubyN2b2iPXXrXjGoobo",
  "key24": "4pRHNsPEqCV8PwNDr7BZPjQorxuRAmxeAKmSY5p6VwdptrEwvPbAgLJCSyNf4Jme3MfUpU9amfCSebLPEs8inQBA",
  "key25": "5rfUBS6z4atbbt51okCrFYfmdge84aAS44zKx5CALxwnmWpcqQ8taXFMpxmtRAmzCQ3nyVdGprAZY4PAT3MZcz1t",
  "key26": "2FexcgidxHE7Y19ohDZtkk4ZoTpcFNFo9hBCysdzYPPasfzwYhECSLudDv9votCAFXVd2z2GCmXVDEaAce3c9uDS",
  "key27": "5qbVRwCzfrNiDVG5r4ntqxhFCeBCs4J2NECRCrR3qjb9u7kAcSNdXksyaA7uK2SJ3EU5GyyaonRsSWAKaMGUmivk",
  "key28": "73nBAfXsk6iervrMqcjuevG4uHxnTpwBjiMcYPLFGBM2T9eVMCc9rbjtjnGaLgLGLc4gRV933MxZYh9EQTTQFLD",
  "key29": "nbvH3fkHrov8C7yHxYEc4DewmPVyYvxzKUAqToU6yVHKZUZZvhBn1jFM5ka27QofrgJkwsoRgapprisXREJB94b",
  "key30": "2m3NR3DvLYMYLzNnR9AmppXGnxXMcZvB8mfbesQJTPPQUdwYSpHshFV8tpVJXBgWoH9gyFg8po1CTapz1BwnBTcM",
  "key31": "64WR4RpgQZP8cPqBANXiLio8BNp4Uxd3xhKGfVFAQt6dPAp4tMriQJUFHmFRabzhHSBbxjv24b6HACKp5ncks5ck",
  "key32": "NjEZ3JiX3Ww9QwicdVGoVg1D15BtLNkYygtsJfsGgB7A7o5G2EZw2nUuiDyANeC29T2RtqpCcii3Jf2k9tNYo7E",
  "key33": "3jmmY2bw9oq69z8fSqjb1cjrL9dEQYrhPknFWSuwMkoa41yn1bPo6qFDz7vhui3ZPBf8qoWAuWNcTvAK4hjkZBG6",
  "key34": "3w7RNc7WjwvZX8dwQU24MYu1nkuELtXrU4dx7TqwvNFMJah3FoCR417gWF7Ztup3S1ACwCHJDvD9miHB2Kxxrd82",
  "key35": "2XbGSe1DVMGow4TUEurgVPHgMVoo6a9SBdQMACUfMY5QbAgiQhP7bU7pidxnMQEcgMXxHG4RyMjLASUbnuciZixW",
  "key36": "2xcAgATgR3kxM21zjAuv8jwHJWJexriDzngaZ7hVisuScLJWZt2WzAff51zjNA6Dm75dZsKPbezt1C1ir6qG1JVi",
  "key37": "SvL5gparMyjjRKeKb3ypAoXP5rWKobZ1iYSan6bY2CA1ogk2kK6QaVkxeGHeAoZRhVzPRCBXxjuFfPzaP4aQjjo",
  "key38": "3jTJT1Ue5cCUTHynFMP7paRDjiBcWh3QSLcE1RkCwwT247KxgBNKzeE176WdBpTM3AtrFj6WQpaZZY2c5ozcFfCp",
  "key39": "3VpvDaqhVmLFE4dor9kuaik8ExWDmEmp6E1a5YZT1VsXtbvP6984y413NWJTQ4z9RbbTV9D2g6Xnra5UjzDDoxGC",
  "key40": "5aJuDqgnMnWu6eKXp2HsT9URRdn6JSgfVCptCYi4hY5FTcdMRKXYxMSj5Gd7HJ5BftSqwAShqN6Y6gk1msm5RrQG",
  "key41": "5LSfpdW147jbpidBWXRL1ioGiujPCrncuhTzd5i79b5gRJGzhWQxbCfD1q9MbMi8geJ9Cm4YkUJHc7p7GBsksFuq",
  "key42": "3EgZxuKSocBfXy6kY8MaNHUFzYB44VgFYUzGqjwz4b73wc4tyDh8J2ngzmWFH2rSBQVa8ZkzdcRE4iRuv4EHP4ui"
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
