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
    "58kgp75PWZM8668HL12NWCs5ZwHRt4Ugim1FaMy4BWB2dGnFfnSR5VtPLPED7euTDJyyKVVER1SMW1VLPYC4rePU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rShmh1FWuvSzHkmgkg6r4pHeoaaVA9CSVwNmFpKjvqAKvAbHTPXPN3L7WZxkDLVGpooHDgDRFEzdQ1BhwUK98Wd",
  "key1": "4DBR4hMtshAtjHbBxnHycAQDkqngemEfZGrboQLdN8a3KXdiJMmUee6JULpTmBCHE8p2KQV3RsgEj48zpAmUU5Hh",
  "key2": "4tCW9PkujfHM9q6FanDKbU2B71ZzTAdzC3Xm4rs5ybxT7jUaopbNoNZwzXGqcrSXKGX39pvbQobABpESFNeRjpyr",
  "key3": "3xTeinLyGnt2mEbpMN2BiMhnxhYEcApB4T7a7fqogLnEgC7f7UtB7dRSE7sZeGBPWAqkKrKbQoN63XoUwq9T58Bf",
  "key4": "5M1N3gQZFtxDmso5vCDccZzAJRHSnswfPqLgWXsdFvQ7ZGWQHokCT4Axq3581ZDUzvWdoHwtj89yVjpYMMzYTVo9",
  "key5": "5sFy4x1YtwATWC4Chb2NbdNhV243MsdDhtvvYtwWxFQ8EQkwkeQvwWFx3wCS4htvnPpvAYSt8ojUVBHrWyfSta5f",
  "key6": "4wyrQ9pdfbKQFqt2RFAqhKczx44XwpERN4ZPAadfy8KdKAnqvhP8T3xjuSXbFb9dwLSc6iYURq5CMHayTjoqgkEv",
  "key7": "EWAZKRWgVnBxx3Rtcq2MVFyfs5A8XwtG9iN5jKpqun19rEJEu5pPxtsRomukRtEKSDCidkmH3hgitt2zVzFrKtR",
  "key8": "2iyd6GxEap6XgHeoqPvbHjR4wV7m8QEpMSDHtFrpYantbztD3gxL4doA8wv8YAAm46AesiejoauSZVxSDjnb27Tt",
  "key9": "52Hprq5F6nhPbFxvDaHawnQ2gA2Rs99w41oC4dqgueRL1cCA7BzT4FDwaZdhRM3FXNZRU42bbS2RkAdgw6DMNPaX",
  "key10": "aBriWFmcNa3mtp5Hm9ELq8xhZGnmSJJeqUpamhbvGu1JvsU7VkZtFd97kWNmnJ3awQ6ivrpBurUhmCovinnA1WK",
  "key11": "4Psyv9o7S5ShMNJhmkB6V3rX9ZDTpWW5x8gbSHZjHYdi9aufDTieDesjGALXbSBeQGrFLj494D7ciU8R9XDRVn6y",
  "key12": "5QsBttkVjPtSnoUeS9Am84Wr17y5EXwrymTEYdFxpY751KpfyF8SNyePqTbmRKcy6FWhAF2QSZL6EPTQfrVf2ySi",
  "key13": "uwLD2YyBqmPspRibC1p4eAgFLHvMjbypGdnAthwY2iebbHRwbfReewCnQhQ18Zfw2hcAwXf65aR9TcJxaR8Fjot",
  "key14": "4GC8yetWmgommgTREsQ8YNgehWiXDBD6NYqwhiY4ucwFKvxvrtRJadVjYcQ3ZvsbhQNe9kWkJ1Kpj8nEhXv1ET7Y",
  "key15": "DwLTMcoZnS7mnZNvwd5THvSrVoSk2HeVbymV3GBEQe8wVpTdYeABsF7rXVVnhCCQknG4kMmxCtMHTHrtNNJn5tg",
  "key16": "65STVAXnP1RPTHot6CjqJ2oohTDuJpDuxf7QH5wzoci41R8Q9uxJvDM2NWrjbysmfML66gif7VdY3SypKzANAB5H",
  "key17": "2JB9kKSi76dWPf6f1fR63FxgPqmfdbpaAhPBVHbGb77QdRhuNzyXTNGNCTujWvbg17gF74e32PCKVYTf9LQTzuRN",
  "key18": "5xFtqcr9UqUzcUcYNUqM45a5wSQCp2TMh2eF2XzyifocfmNkfePzCaih7ezfnBJRQW5HeQwEWMQaEZwg7Fc8BHng",
  "key19": "2AUsjSyZDWLexthqwfoGBGrmfF8p5RXNBtd6xPi6Qdyn9RvDYwvxS5fhPfq95GQxkhoW7sAxeteskfuTqyBfWvKH",
  "key20": "4f85dSih9pvWuU7UFBwfRmaY1xvrmoJNvjbHmexT3hhv2tfhEc5zCRBUGMqGGoLpePCN1TquxukPE8ZZLahXRQTv",
  "key21": "4zXYHU6u9Hwt7fGZqRwJTWzQkNJcZuc7HuvH52apm45iBgxTgjm8fdNJ9jMuLAjWpAXwEhzK3cUrioD6BCXd6Ldg",
  "key22": "3whgXQ92f9LZd1z9L6yN4gWDjNfkrBemELhsjRBBSJ5kZSY2d9hjNqZkM2MywYcpxERxHdvDBzUSXgzSWkDvPY67",
  "key23": "2Cnt3becPzyEB2bF7JGCpUtgHLY2fSgCkyS1xthwY14ab83h3Hb2vN28iyHH3ZvkhGvSMYzeMbFwBWYCjXWb6tAZ",
  "key24": "XnwHFNoDx78vZXXyCLCrLgySe3Sp87K9yDSRZejFNXojPuy9rbLSvL5SomEn2gJZPRufdmNiM5KBLhYgFwNxiXe",
  "key25": "54So5s59fRzkQuU9UN83xTpZRPWWxu7A9URNpPf8tRLtqcF58GTjBWg7Fx3vLH6Fx1QMQkdjWpU8ZzpnFmebRmuH",
  "key26": "2NumK6ybUe9K3EWp1UrUXL1rpyLXAhqYHwVunBPV4rwW5Spt3Epp1wjLzw3HZBwQWjZAsJZWFMprPjoaRM97zkAR",
  "key27": "26j7qmV3ck39Kb81RSrE5D1jiMBgZY86bHfxH7ensDeeyChgPeWmpGcXE7TfN6VXB82ZDuBiZqE6tU1uknKqwKeM",
  "key28": "2EiNLRkdgC6UBk5s7ktinhrUbEX7QcHLPjjW2SSdBnrvmkD67W9eFNv6XwkN6x7RKKv8ZvtpEaXHbHYaaXE25x4H",
  "key29": "cvnCqqm3hJxDh9jBxtph9qtyLNz4Ec2gYXY3ZHh3FbjoDExZpEai3MGTqJM3WtrmbaxWX7q8VJhe9D3omFX2DQ3",
  "key30": "5QMy6hzSmqoT1h97nMebq6UFxxUanozYURyhGVM3V2FN3JQ9JZwWBMnk4YUfSBHEm8S2m53n13MjGp6M1YgVCTdb",
  "key31": "2uEdobLB15nWU8qKGDXX5vycRHQqzG4Z1Q9KNnDp9uZCttTB4xQrivRjfcyvVNyGWiVMfByuyeqTh93F8m6KosqQ"
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
