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
    "2Hzeu8F8LbDBLYYrNt9Vu2rahLCtLu4NdHNYTyWDsgLkL8VfQTGtKAJ7ZLC1onSFGzqEKy3EHL1yNFUyFQmbvavn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rvCWZCYbAGVSdxsuMuqi28nnazGMcESNFLdZsv6yte5LVRgRgb3pJoDg8w9qZDhd7Emp9cwwjhSZjGFAG4u6bg",
  "key1": "28TrPFMuEi45YrTWbYH3WCyXVjbsg6AYLbZ62MhLG3orhDAXHEQPmb6xuy9xjQ82Dmvp4XHubCffJWTpZTn6riru",
  "key2": "3dvj1jgxr2DqusUrQg589S6jorUhUoEoZPAemf6hfeRFxw3fWKUtonY68A9787gxZZgR3dsJnX3LLjAj3em3ZPKx",
  "key3": "vMLasLpzg83ZawMuTrcPtiYyyytABimvDV6eRwvQtSkLpp4Q5PADmTL9yB7G9ZDPtS5LBWU9GsFw7a5FWz8hFip",
  "key4": "5MmBcEC7FczAzjCh5G77iyVJNgAwxhA8bHcbXq9fkeKFWfwSpBC7w6RYvwbamzNqMQCN4eTHfh5Au2pv98mKWfH4",
  "key5": "a8aUqqUaSM434yTaR5D1YuHSX3p8ZDMPAt3MrEB1w8sQZKGt4NRw117ubSuMtQDbmZ9SpfrbjH6zata2JMixnTV",
  "key6": "5AJvA1HRonoriAjV8VtKdGoePcqDFVe6SuTtrKNSjUTpPgDnWjnfeaa8qJ9BsowGvD93t1XPPWRsgspfaXqaUrH9",
  "key7": "4NaKn3n3kV8qyXP4xhu93Di87Znh6ogFZ5L92fJ1rvfz1fxWua17GLZxMwGbe2kM1M98oVwfwHnjmT9BNVjcMyY4",
  "key8": "2SEGURBFvhQEoaXPoDqMSC2WbkLFpJ58Awzqsy44B3hGuh5ZKHXbJkEPmirx7MfbcPfQACQz3LisdTdqWkcxUnxT",
  "key9": "jNQ3AZgHvQZEcZ2XyYpDLxB4457khyE4jtz8TZrgnn2W7jGJYXyLuia9SMAywjkd85Qn7bK4KQZLGippx29RDkp",
  "key10": "3MnrmXWkjddXeBjwX6ix36tWRMNeTiqAA2Pi5uZb827RdZgLjXyA8zDS8G9R9xq4vDiynLpnjyAPKWzeSG2EduPx",
  "key11": "3YoiN2kFRsbRxK9Pd2kK8pTAsiXUBc7UULnKuPkvbXZsUuUjm4vpy39yVmSMRuexC4sSVnLA7eeM2ut8fEeT7tb5",
  "key12": "2ujXJkMhqcD3esJVnFDaKPjp1MXtudeqiY6HPLDUoVstXJsqH8k7wx7URmaWAc5kikxk5tdn8aib7rVRq64wsbSZ",
  "key13": "Bsq55YDFVvpiosbxu8aznq9bo8HhbYb8rxAJVZ5EQE1nzxVUcMXBaqWi4m7Kxyuga9KjrrqKJs9wfmvM33WfdMK",
  "key14": "dnQ6uVP5DYPoYeQzs1RaQ8CLH97ixiV9xhn2J4a2EF2NRva749Ui8R9p1UksNpdrq7BwBLgsca8Un53Njpth8Bg",
  "key15": "4HKd6WVyQv6xoHf5xwzcusRWgr1znc1vTBjU3yQWCmxtDt6taFJS447mobM6cFzADMro8QurcE9nrF5ji2VVsSue",
  "key16": "aNuCVqacEBBRQVKC91ckiuAH9UzXt9RJDXQUAD3qCUxspQwrmKCaR7hBb2vNnNUgKeco1nsR4Kqhb1XnpLpKcFR",
  "key17": "5TWfVXsQwBLhaxhjoAT4561oUWJsSH2vs5nG7d4LFPN16A8NHfEKGD3mo49ff8X6kZ3eAhR7zCmS5sTkhDBENPVL",
  "key18": "PNpy36WGcfJUXc582uZ9Ld45fskyGBov9m2p1pEwkuhdQxJhSRELPMtuKavAYWrZQemyDV9LPcsShmBpVpUEma7",
  "key19": "2aYbYxgWHsVUomPnbYwSuG7Hx5N9UUk8Dc6BhKb42dXMs6HducSwpgcmKn9JthuEfYWVmH1EBZo6D4iGBxsJ1bzm",
  "key20": "5aRbfETPkC15zApoYyDUp6KgdeVMfi3SDZj9t8YVvGoaXTiqnP8DKjHPcqaBoyvwnQ5aHBveH5Z2ktRTYHG3kjn",
  "key21": "4iujPHEcAsKZqJSXBC7hvDSCcgpxBpm2cxZ7HCoTH9ZUp6PbGyjkA7vAnnKsV5k1whv3Gd24uT8aKdv5D3uPXXaW",
  "key22": "4xf91wLsXEFMAg9sLZ7yqaphTHtzFt1wmTQCJeQqVSMAbnQt9ncN7efXeTmSAuhH6KLdxKAT5sAiVEUpCmnuK9nw",
  "key23": "3L2RkiupowB1hYNddM7wnqDtpvCbiRDh2E7cUPmfQj8Bgefmm6bkgeMgrMgZ2T1W9SYehXvN983CJ6wAy1GhxWAk",
  "key24": "5uLm77jbrtneohpe8EYjEEPrqYE1CVJzgwP6g1TWXahqVZanWo4k2JVa35vm67AcTWksAas5wqMRFUtjezNBxH2m",
  "key25": "23nKwT9v5ExUHUK7RcaKYCLzvbccyshMUidpV3TvtoKzqaGrh6sBjCA2ui3mbdTRLRgZks6E1z2wnRVPTNAFHMbU",
  "key26": "39eXJTus55hvPZpZBsemYGQpvJGssJJiswCPNeprCE92CprdXw9ST2HPWA7tLPW7LbdnprdPQrxP4JKT35XsQygZ",
  "key27": "4bGCUjwV9jGN5MQhgy2zYDUrT12cu9ZcjX5BQEJnmrA88wnqeuTffFYLbUW7Aag5tUxvunMwo2vC7DTFiWKihpNA"
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
