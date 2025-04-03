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
    "3JV96TRsKRafRDmLpZ76s66gUpU1tVd2uUv7388AdEzeiqgGN7zhkGgZuaagZXjvXbYDe6kCu6CmkC4wSU5TNvQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bW3ygL14ggRQaqBRvDaEtGbBJ5xoiGQhK3f84Zc9LsT6EjSjXKxd8PRySdp7YKz3SRaW5mNViAGtM1FuWmwutTo",
  "key1": "5zhvSpty4mD3N8tCTpZwHRWPDYccwN6Fnq3Ksms9h6ib7WqWzqFcJyEH9yq34HtdJR5sNwVHW5aW3RAJf5DLM7KW",
  "key2": "4QMpPzXvms3kUX4DNUWFMtJXPqhqqgBQMJhX7ubrQoCGvBg2W4vkdy2h31eVVTHrHi9eijtLNpRXLx31MCADA5AM",
  "key3": "2d1FneojAfRazG7Y7SJMY8ERM8G827LktdjZzf3q1uUP9fHcm9sa8oN5r6hFCNEfmAye3bo8y1bfocdAcd7PV21t",
  "key4": "4CcwiehRhcqQryXZMhFqNnFCZXUHw73KxT9cGZXNSRB2TB9rws2LQJqrNxmt83w5hDmfxNEBxcftbBKgVp2geDf6",
  "key5": "2f9GqjvF4WAm7Vw4yrxzPkopWAk17eVp2nXiKWGrgeHDPmoscAPVY7WpFvf64ZchJ5mBExqNhX3JyNcVUy62KDQb",
  "key6": "2WJ7WAZRNwAj5J7bgRtAkr2pB6cGRHJXgUwDUpFfQB2ocpKmbY2nDRzCvwbdWzkQ8QdS7niRbqRoGiSEmbprLUdv",
  "key7": "4EbvBVLQjqiUHa4gWNhYDQ6bvatxe1xZo4vJiYCWkokm8nGq6hN6gkDGzhXFVceuDMWcRKwVvRG8WwHiL8pfvnru",
  "key8": "64U4AWcAJZPzH9SqadaQrZLEx8VUCJAtDaSHqG14KHgpSeJ7imPyRxZKcuSb2Nw6ssUNz2w929vuzHx53JMFCzV5",
  "key9": "bu4pPPkR8HsKvcoNGXNbVDU7EU13tfa8baWw4HEvqDTNUXBWMC9b5oCNZae6P8ujgpKHD43aKd2msQBfH9Gm3zc",
  "key10": "3Gf7etbqPHax1wx2a2io2Puc89VdFSTo9P1p4RmAijQgVtybRKgYb2AbEFv7Fmv5aa4XRHwgTMbnmqZvkDE4uTCA",
  "key11": "4ihBUUp5a5gGGpxFWMsyExLUgbxBBAiM7LznTRtAJGA6sAffSapmFwU6DczRLgku1jdFkKWzPLZKYv5KARfjVaex",
  "key12": "3YGcb96mybC6MtaVuRfi9qJSk9xJyBSDJT1T8YRcBsNbXyCAh5XVTiNPYhtvC2SJkJdx3xTY91gmbvv8CXVoWStB",
  "key13": "2U3PJAsvRioyNxDuSXybww3N8GqDfP5xcEyGkbiqwVqSAVfzo9w68PaGkznVW459sVCuPXNC6c6dAznK7GPXwurq",
  "key14": "4mLkDQQyha4pvMf21FQDsFrN4DscH8aaxqGRu2qUN1tj5jjfk8QVwWsq8WGdrMpTc1ok4NqcjqndDtWZTeCJpu5m",
  "key15": "5MTMGKL6t1jsof3gCfLtxLqKmCUaGFiZSi6fdpoyajLS3wgTdKT8dxCLnbhpJAQZuZ7SsW75jJTk5ad84avr9AAm",
  "key16": "3CH5cik5JXEQVNSgcjGBbj2ZGapt6RMK9wHYFMCteb19ti8oBfH3WaGEYDLWCPLFAZUVEV9xj5iSqjADZFUs4XEg",
  "key17": "5Pzyg6bxKZjrZ1BSGcYZ6PMahTSiSM32gLLJFRrxR5RWKAjfLzLQMcB8erzmzRfnVwjtXMrKrcKoDMhA5bmoxLzX",
  "key18": "UnFtbyxTM7DsrPiEV6CdUb6xzjqQ7nemZJawXHsgGeb4fAFYGG3yDgHc4fUB4VGBz9nwTYFv6Bx72Tr7qLqMsyX",
  "key19": "5qrnn2iALZVbmWrbKoJKS6NahgmzJR1f43JZsstLvDvyHjUX5usgmfRiEKj6fwMMPDxhVRshFbMG2xJBKT4fF2tL",
  "key20": "4TYZEK7gq589hq2TsKsqDkpeG51Yvqw78KbaQhfQipi593cH3h4WA9NbXfhsnDFiti4VuMumraDX92f6PNUL7rp5",
  "key21": "4RMhpjBUMF3r4u744bfFd4wdixSuBzYMeGspMwmUwA2mqMhmbzXVphUpzSxTQMZjsjnCYh7aK8dWwKxTnFzhpDeU",
  "key22": "bRCqYSGbixBVkDmhfMx8ynCVQbLxSPtrniHCXZ1bVaQoeM3GrMjBtcAgXYfMvWWCftzNkU57BBNcEsbwgbjPfsR",
  "key23": "3us3tHFnd4pdttjbMTH5LTvhkrg6AkqDwhQaAAbaGDpVuaXB96XYPhs5esFf5KX1RegCRDAiPvu73E1J6cKenJdd",
  "key24": "5RXnKagqmPfK53n4q6THu9yiYNmQ6WnyCUN8d8ENWR5zpxFdxqnbR581Jw81WU5xXysRAckUrUBHqrtPoyoWx7v8",
  "key25": "dgLuKP9sjBnKb7N9rQHUJnuTRuyoQLg4GNq4HsSato2PAviBut55ijiT2YkCiK41EkEywsNWAH6MRj3NmvrWCUc",
  "key26": "aA8ncqg7uudLxsi6UKzJaiJLGeB7LkNzfsGMqPBJ1M4sFBW552G5Jn9WwfRzgVE4TYJmmmPcV9VgAav3sL4px4H"
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
