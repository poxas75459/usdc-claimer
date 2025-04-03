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
    "23HkpsrBLMPxfFHrdSvoUCuk6sKrjnN9htqLBmMoHamiJ9FsDE3oeCzaYsA64w7xhNwuaajwM8sAgN21sSqxaQKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FeehLXeryKJdfzScg5zyq6KeLG7ua8YJF8U2oV4tJMsQxJegQms9s8oZGSM6vS1Y3ZqNhFUJ8EcKKjw2sHfofdB",
  "key1": "35Bxe3Xp4gbeMiX2iDULFPtKpHnWoFTzYw6PhZM7J2Nw8rzgTgde9aRkFw3ZKqJ3mbsQujzyCoJRyVNZtRXRK4vr",
  "key2": "5mkYoPJ8EK3fb89PyRZcyv7BYU2Vt9ttxwotsoWwYZnLULYAcVnv1BANn2wazB4769ibePrLq1s8DPs3EJkH3oce",
  "key3": "39V8Vi3K5Y3d7TxwSjDQBRgbFrHJfMC2DZnuZHN6cWgHezRtoFZTuNxFV8Hhv8EMFJcyBLsbce1WjnJLjPnL8RkH",
  "key4": "4hKBDNK4QTEkNSyhpVAFH8N3USRdHsf5FY6z5V15KxQmkhXqJbgambFFJme8rB7YZDHip5wfTf2QrBPHqEJf8ji6",
  "key5": "3ypweTxeitUQ73JzDZrAd2maPqzc14sHYLE9XWeqdqZAnKFEiLYDX6rf4uhQXqWBFrn9sWGyCccnnzXSwTeQhtKj",
  "key6": "2AeUbi4UGaBwe84M8oEUk5D7iLuXEpuF7m1vxh7HCZm728MUfjTpNM45aRzZzmskVvD2gd3mmac6jivNSEqnXWK2",
  "key7": "38pqFKWSD6er7kTkfUdRbkeU1JdPyQvhG1E4keQkhuTyZ95ane5kqUXgtzWK9Z9h8pbHzW1xmMnn8jacvrMeEMKu",
  "key8": "23iJdC7ayb2fS9YZsHhdquhjMX4CFqfjSKQuxT8nueTf2GWD4FuPiPfAJqeA29AbkgRjn3F7ELEzQYXZZKjTtuiM",
  "key9": "FQwNc5MQzP8Qj6gEBohoPk1HYLDr41wDuy7c5E54V8FC3yB8VHbqfoC5HsvSZ4znu6YZHoDYzwCf9aYrtCF7XfR",
  "key10": "4EVHQP7dH6vYHadEpSrLNdv5h3hXpQc2o4Cfp7RJvD95BpLFontxvRLV5xBG6n5UyWbqVkJqN1GF26SGqXcUAYmm",
  "key11": "F1poisJnyg3WKyJbVJXXzGpgZjxVoCP6b34xKvToVjvCQCbmmRjNFbKPhpdBFtvKNcUKhYsi5eoE7g1rQkqWYza",
  "key12": "guvprrN7EnKdBr7KsVGTPh7VNG5UqjDnEmp9JAWn7dU2iQK73ixmwV5jZDZNjD9ZitoS6RnKTYX5kNXzTsFCYsr",
  "key13": "2ofJmPUvJAPeXG3hVbrsnsW7jUNipieFa6c7V3bLTZ7peBqhzTSvW49kpiRdhaTYLrzRpiSbAykPiKUmMGEF1aNN",
  "key14": "3mM7aoAZF1WPHVbNWjyV8CM64Q2nqrFQrN2Jed8tweTtF6B65Tj7G2qEWggFiCYeBiMLP8GbhwEWoaUrawfcNWqy",
  "key15": "35gLnWAMoBCsvYSBFfp21RWSfRc6MwW5MBMfDZRQuaGDPt4Di1ssHaw3H4Bnn3B7ikZurEkdHaPGRgLzMUqWByoo",
  "key16": "2Cz4kKCgvoBShpAHAH633MdJrTo3fy8ZED4HAiS5zibk8vtADcSpnffGY7LHrmZTbSUco6tN1hjtzX9icWcpBwpB",
  "key17": "ighc5rQs6Y2rVsnY5bCzbVUnsff2ysdhmzSYZHmtgNmJSGCBW8jUFPwmF1hqY6Ht6MMQPRB8jnh5KeMYAJZ64vU",
  "key18": "37hrgd3YyMvxRazjXN1J1GhEKMi1DWgyb5QMDztTL5y8ivNZN97HZiGbA7bnLD4LrxV3qEmPyt9VRhnF5v9VkCXc",
  "key19": "2w6RcRaE8FWkVtZ1UHJhxozhSi9zvAsGZi4YHgAA1Qr7FVGdHnazHfswegchwUsJXAacczJ893yQZAuiG7qkRdV5",
  "key20": "oLJrSU26REurBy9ZH8GmcQfCp3T4XrgEwJjCqLPdkErppRcF7ZLcMjBjRo4tieErT8yZMtiVRGKaHBbz2cdL3XP",
  "key21": "4q7F5TDAk5ximYcqYPr2uM7pAdSahHFHc64mi2WZ4LMfURuFjM4qu5AJon3hF5Wx3FdyBDqedwUZ1iVQLp8FgpiP",
  "key22": "4tNtUafQxWXA3kWgKniWDmkfUo6zSQpbrYXJYSt44Q71AhQyph8NhQ7aXFRzRsHLnew5uSAgwna7sv1gxpE9gnWV",
  "key23": "4W3J1bBA2YpnbmyXwCpwY337s2bktAuJ5csvSRuxLm5wpXhTW4uNoweBCkwtrjRQQrvwePyTBQMa7w7rNuxpT72G",
  "key24": "2JkDZLqMFt12VXL8Rn2L5XiDdqTDsVEA2GRhxGrcUmNn82bzmrxgZLoj8dc6hvsuXXXbzdMQRyA7AsNqkFzbkpKV",
  "key25": "3ut7Lv6zu9izRAUtuKcF9FJbYpTRDCNzqFMY4gmE2ZMu1W1QGWn6CQq6rtVp49PJZXLq1HGy2Yqi7tmntt7rNTVb",
  "key26": "3RXsq3VfXRDjgvryFsZxu6ViEmUnRem6Fnhz92DYGKpucWtnpr525BfxUs2F1W8YugurRZ2DBGKjGraswoFY14pe",
  "key27": "3FH9N6jm1jJBAYABkx9nmFoERxY4QmibXY9kTGu8oxot4VZC5X7LtoacvcqED1kXZWH3jTR86KcwDnojnvbmnXfm",
  "key28": "Fx2TUk2pZY2FbPZaPVFUsrdXh26pepSFJF9mmUsCusfzZmwsGv2i8uaphu2zUficjUiHBAykDyY26WPtz8dFbEK",
  "key29": "4yis7SLhbkRpSXsr13Chi2jeRM2Zjt1BMp9RvrvDRmsF3HbKGYqALAi5YkEquNseq5Zmb4YNfZx8Ev57tshPAMMC",
  "key30": "5KUZB1KEGgjgWixG6KgJxkViGmdC76FYynoJzp5S4TBd1hAGyYxuFMB6m5mFfsuQ7topYHkTLWEVD2eK8TATWdkK",
  "key31": "up4JFXZuDnFbPHy3tSusDqVZ29gzuCiDPsDrYYxEhYqdNrQDE9LkZHetbVMAj3z51jCueYXWGHDhkpcog6PPhY7",
  "key32": "5CjKZpGQoZbXDrHdM5tSremRrse2CHUiY9AsZcHsXtKoYEMU3doxKpobC1HZibzTF4rYM2BDLUWQzSJ1r6XqVzq",
  "key33": "3rVxRo5dn5JirTDCTc8XKabtepFtM4gd2sCwoReuwofEfdC5anBMCN2oQgi4Lovk3fwuyjBMFJtnVVSMjMRkzFyk",
  "key34": "3eu1R6aW2rvJVLbTpsqTxLKmm4CbERu1ARh6HjVddz2EXBPj269P959oKBhmRQpas8TX2DgKdfNDCwKcrQeL4Wz1",
  "key35": "3zgsTdEiTXH5Ja349CdNj69QybvSVV8WAQekoAPWBUZtkzpWwB6kveK1TD2hKfGtVXskkXYadeNxZcma68xaARiu",
  "key36": "646382hhbVvWYHqBeiGktg2WBrTBTUofn6CWriwrgbN4DM58UwUqAkBTMMdhEnvWivdJkv9tHQcEAFN1TZcyMhox",
  "key37": "5PThN3D9aPUMs8cFS9pPd5yWh248dE5PogzHbcWATMJn3HCkfP1i4geCXEBi68Pf3VEbHTZUtx6UkkpDrKMu6YC5",
  "key38": "2TtN4GyuJXH1bnHiwFb3iBMcuFub4JAhXfuJ9rKzsnHgZ7X2TU76ZKHczaEaw5cy9Kt6RGDuhguebzdgk4poPtqp",
  "key39": "2UmRdHhcd4LZBvz4Bs29evHJP85DxaDio8tgyuVdP3g2Zf7SUzt883FYwHP5xG2xZY2fPwUgHTzsZBPjCRjh1jJM",
  "key40": "3fPdqErRuQuiQCJN47hKn5QBbMGquSGxWJt1MueGqn53BUeK3ysi5yEsaPVqmmM6z2agSMGXkeDwr9FGDMYUyENa",
  "key41": "3HXcTcn6eNkxztypdpo6djhgtNgdBCtULxov6fLs2myuCSFEW5cKfoLBmtNd9nuwHbgsxd6df1j59NDBFZ3keRz3",
  "key42": "5sGJLyyEgvND1vAFXU8Q7VLFV8FHneDiL7QCnptX3R2pQC9mDMfSCJUArDZWj3RMEau66CUTzzzAjLRSbrybY5Pi",
  "key43": "3cKUW9n51zc6uStsZXCBbxHwDtotbAWQDHaFq3vtMbaMHqQKEhhQQrZtbntwD7DPo6KLjdHaruc2YCsiisSN9BjQ",
  "key44": "2FrcR4s9gzaNs1cyyBfN8w1CdYrS7A79tuuMQZW7A3nehSF3dWLURMBCfApWKkJhmdbpPDpYg5eXj87eoq2yRvyh",
  "key45": "4gVNuadbreeCUmbSoz4PonACvrpF8uEf6JxsbYbT8cB9jLDBYRPdbkZpXJ69E47i3MAfL8PKdii2U6vWLWKgc7hs",
  "key46": "46K8ZSJ7FyajaBVvr1T4h1PVWoVmv8fgYCngCgpVPsxKTNss9mQDrtsawDmy8Dx7q7E1xjvgXfW2WvE4pgsJK8Yz",
  "key47": "38znnVKGY768SbR3zYc7CG8eU8QTn17FDeJp1HHLL3uBhjbgMo9zbvYwj6d7CSLep3ekkVmi4M7E1B9woZCgt3vi",
  "key48": "5ey5E1BForSPGRTdCB2XBHoPqtzVE5pDFT9bTfXWNxWLkRc7kP4pm1wshWJBh8b4CXbtPsCSKNTw6qbVzpDGYiW3",
  "key49": "2YYEY71FFxVxiSHn9an4PJiLJKpsY7KdpJips22d3ZJFU9c4F9NUG8EBGKcL8uWRsFgkZFe7Fke2sh8hgNpgTdLA"
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
