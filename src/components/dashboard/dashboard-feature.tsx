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
    "5fUVsUWBp4hBAMhTjXS8DsYeKMz6E2448WUjvd6og4VWLZXSjGtnShPzCPxmNA7yttUAeEhvn7RDHFDD2Aeb6wXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qtYWbvRfT2JHgNsPSccxtYbNE1trTmLj2w4bDPX6rUJw8xFCa13cWDncpkLHKqkzNA39QPfJ6iuXi5wit9w6xhY",
  "key1": "5ZURKvaxkmfV82Hgwez8aFgMuzc9DZPfeCo7UYMtgCtnHhufXUiEVdxrRz7nqTusB6Nn3GbfH1L7SXZnjijrXnjz",
  "key2": "61dHyYWQXF8pjZTw2L43AVY35u9gejRvesbMwfSzpPZ2K3X8eJFdsqj1TtuzzWM1NrXvdhhE6UdkZqpYqXZk7K84",
  "key3": "63ztnEHf1J9HPfdin2TQ9PftXQBtU6wykqAbTyMwKq3oYpQyvvGff9EGh4XWZgfjbxD5CcuozBXi4FNv7LByBXCy",
  "key4": "4Tceymz1AvNvMsbpyCxccmGfT3mVXfmhAZ3xvpva5hXruhDfiY6WPAsRWX7sVrKbbp1XGgjEbvheT8sEwrJecBAD",
  "key5": "3wZXHYn7iXjEaZ4cG56qgvy4VgemQbNXsxbuJ7ZaUiMSy3s3MMDQ3tEy4dzwAheHxHF4KGcWnuRQ6VoNYzp7Xhjg",
  "key6": "3TyUN9ZfeUv3vLnr6GWJWY1Z8aRuPjdnDAKCGHmnCjYRtzH6iRVRcw6nCAWZKYtAPR9UN3VjHiLVzJ2GamLCT5cE",
  "key7": "4Ds958BGNqB2JK6wfxPHFHvKN6sWQ9UBzFuwWRGMNWKp4wEHMuxgxqd993Z2d59ffirTHgdUmvxcSYUHgZXZynWz",
  "key8": "4pmznMpThv9TMKkUrkKhmnyhK3vjfKJFBavUTckoenQG6WHki6FCAwZjeoZ34VDKVXJKDQaweR14QV4H8zQWu8B5",
  "key9": "5UmjzmPPS9P4zd2dXxThmjof6UKA9J4cJhLcaEPc2C7cevjV1ixCktb6qK8YMge2v4CtCCKJP6qWMCzUGYU2hrh1",
  "key10": "366pjLswVihcfRB4A39sukmbkdd3sSkEKbt8418Zy6WEr8heD3HLrqABYar9h49frSWEqgFdenBzxC2EPHuP41Vp",
  "key11": "4nokxcP65RpWXkpS2LfjVSYMJZwmTjCUA3dMsHst862ipatX5j6Kdkeuupp4TgbwqgMhdp9JoChs1VpYNgmgwQH1",
  "key12": "dFvQfEc1qbNnScEyxZ6HWi46HSNJ9J786Pvjd6B9YMYZbuTi8DjGuuxmsGkefpnSeGhjBDcShpHPFLjQxpeDy7V",
  "key13": "GiK7bYQqUA71VCg9nssWkf5WePKaX5ugBtz4xTVPmjaqYfSnrMWVgstdcWoYJ1DuMEQDs2FXfbFmBuzZTaULiDf",
  "key14": "3f5iWZiwqxxNNALR93ZSfgvpRJuaVQubXL2bHSeKrvXvqvhuMPyhjTrGqUQ1a3XwrxuinWxmMDdXcsKhysQvNL1n",
  "key15": "5DngaVer8u217vtGQjBQP1cj3wG9LRdiVqKmyETyqsJWVTCdwaDFXWxZmbQsMaYbDAsm85NXKsJfrdYcZxj59ZUu",
  "key16": "2hb1yHrVeapFtTsDjgMPHo8Xe3ohUFLdA57RZEi9C9jfL58VDz9JP9iYdfbm7kMn9MY2o8BHMM3p9rFibZzLKT4s",
  "key17": "4exH38azut4gkqmtgNCEdeAFRVjfHoQCSGyRvUZk6SGm8aKjCpH8NxuYYKvZ2JiP7s7HTVbGrRLurvHr7JVB3aAk",
  "key18": "2dZ4mbKgFs8XXTyuo9Sk4LBaM1ZLbKCb7FgecLYFtyCAscT1H4kePE43ZbqN5k7jbjKDUpZJtmVbdb9f7bCxLxSu",
  "key19": "43pUCLN8iQpkHVkJr7V4QrKbK6ReeB1ppE27yLH3buPCywHkx25sq3SRGzKVeYZUvt5BEocuGF8mEK9UquPyYx4n",
  "key20": "4habBEuzLt5QANZyXjg8ixaSEZGnqosJpW8DKc9z4qGYkr5SuujPXtKtVVcd49rRG4nqoGiMrAcsSfbeX92jspmW",
  "key21": "36JgCx9fbQunf4jnsWiqQWwLnBFqtSvrkai1vNbE93SWfAWxoD377FjXyhAyZKkxtQELJD34BUxnb1j8ZhXvJney",
  "key22": "4eZ5vLuYVhkLyzbDZB58dqFrRqXVJiJHRtaaCTWvAg8jWSwFbXtfYHvm6QtxSdS9DzTTKhFvbJR2Fj2cat9FhYaA",
  "key23": "52sKnsr4SKoeJNLQBGkSMZf3zyRKGFQTp4FnYQjtcNjeKTyY9t7Qp1sft25h6uEsficMuRYqyamsTaiaKbtSUTNj",
  "key24": "3PHUqzsgvjPtbTKw33ifMzBvPLNaWAk1boXeSAV7uzJMAXPJ1y5EpwGEiRpwqTdgy2um8jKitWYYYLWFjk14iqLT",
  "key25": "3Y9rxpMjByC937HNH4RV1UeVxiKYH9YjJkZXv8817dzQkmDZjv22DksShPEvScNiJK195ghMMauj56wcYVPN1jXM",
  "key26": "2KMZFPaZ3iit4qVcERRSjbdDBChuUaHhaaY6aaMPT4pqE3nnvrD3w5w4pe1tnzVbwUfPAyaxSdxPsb7YoQVXhj74",
  "key27": "5dfKAV6fnWqdFgMtHrAxpGzm1QQBKGT9di1X6PfDQ6h4qyP59UQY3odxfPm4AMCgiouipMoe98YRq2eS68E3eqSn",
  "key28": "BBXPBZyVevofVdnCVEg1hz1ivnNn6y1RW8rkLNu9rN81CEp1RXriLhffR3tKSooGUJ8hUpmiMHj4Q1YzT7z3TDZ",
  "key29": "4GR8VYfWb3wjwiSj9SqbEHGzZDA1u2CNHzETrEmAFyCngQdx1JdWwDCNP4JjGv6qcJTr7xpTG69Qx4rFi6QjVWPY",
  "key30": "3q6qdHVcQBXEdaC4KDowbzzQ92aXQVTExhoRywvb9cvyxWrjH4tGzKp7PtYLTNrSyaDyzVBrn6xFdALGtqXFr6vc",
  "key31": "5QC3GzbgUcBymaGHvyNdaeGd9AFHTAiPCXfbpQmZ5VML1oXS6UrdeFED9umoMARW6x1rtCch1FPDN7j2q1DCFU8K",
  "key32": "4NcV2sM1iGTLxdyA7LtP9LZVNtZhtYPTGDHrXSKaALRm9FKLDTcKEi3C18uxE52CWwyMWT9uPoDVFCbKtBRZZYXC",
  "key33": "5uV9Woeq9Ub8wqoGp9xY3Gkj1inwSUS63ZAWfmChiPxgmZ5GWRLATFshBV215r2pPVKCpDs4MpvNzcdGnKATh8GP",
  "key34": "39g1TRNvgGdJjNfyP8xpEnWSVxJJfsQpznT697deXvFJPACTD7hoJ2QikqUfHJg18AVasdRH54ptuNfqLyidgSXS",
  "key35": "4RmyUKG8NA6Z7KUxkFD6947v9uYay6iWwtSM9Pf9RW5dkD4CS9iBH5ZXvGSgVa9uvmhH6aZ5BeVAbZtfaU2puQXc",
  "key36": "4hZ6UkQuAERpbWw4GdWQs7HY6hLj4p1dsUgo1iKChAyto68Tzcqm28v47xLycjCcToW3mo7WTYx5TzC96UiJZY1F",
  "key37": "2vYU3ECUc895hEc63Kxv4dkQ96x9nqznRfTnqUDn7dF6A79aMkz6qBfiNUdDMPFx3eayeDDavmL2Hjym1kz5Unbw",
  "key38": "4Nwhn1GbgPeVz5UkQf4Uasg38vAtit2gCEnuTSaB5d5wbcq6xDdDmUZPaGyayTbbZre8NV3hd3qozMBTqjesGWxj",
  "key39": "5qNwZAPTejAdL7VDqn6B6BdQFTbqnZZ5oUoXTkAunrRiKvxgWKjdPzRCmHmAMKbPqhWUkZvBq7TpkQEVKmRwi5xe",
  "key40": "ZvYXs4qEeAyqJfeDnDZJjqQCPJ7zphz1Aas8upQ4kEfZkWb9DaVhh8Fyywu1zrpCbCGR2YwMuBCAS9XiqxnKZXn",
  "key41": "5T6m5eZXAHgt8hNs1AjqsiBXN1y4dpoGT3Wqhg3kCwemSqqASmatzqgBxPazcQWYFn5VbpmgyXY7FaxUyuaYeh5i",
  "key42": "5ixmfHnkXmCCuCdd4aKEzudwGBSQ49FyFEpKwHzCL57nMf82wqT712iRyLsjR5aSwZEuyW2eu8PuHVCLrPMpSLFW",
  "key43": "34vqtDTee9ysED6A41FRYL9WCLo8EgtUmvGzhMw8kATj3SaK5P2XGXHaAjZEs2EUNhjezbEiSGY1mRT5yxMdpEH2"
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
