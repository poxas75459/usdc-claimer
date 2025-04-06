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
    "5rucfDXHXLxWzyXwigRzzZ75UMCmZ13kTFA3fcKjX2UCwpMqJycD575rc2Gx7LQHCnUSDjHgivgvYyV7rNcUfcdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BzC1TnLHCGCfAuvKT48AqWTmrpqBqHYaTXN9UoPWjerD8vwQWkgLR71ojLXAVb7FwxvdWYxFfqLnRk1SYprV96",
  "key1": "3JKDciH9KsWZzqWQUo99uvLmLWgNG3LoNDZ7MCtDwbNEhuG9sbjPbhHsqpu2Nr25MRqSqrDUL99TBmuKv7CRKTpr",
  "key2": "4b12YHyVANDjftygWLezJwNLdxcLypoGxVSUq9m3KtfrAAHRxJvoxSCLuBHMCK1Xt2iQBHmLV2C536GZ7WqGyVBL",
  "key3": "eLLpLkbtQEGWLPoHe2ogcp44chKX6VJAHnf6mr5XxiiQ9PTqUwYj41w1PUzkPLK3f9kaFhw7DgAzJSNu4ZYp3UV",
  "key4": "55WDB1qQhwdUicP14sfG8hSsQ1MU9yikCydkVoALkXPkGDxdx8Lrh1nnCpxx3epvMiyKiWKfzsnbQGnjeaRvtPV5",
  "key5": "5i1apWXeuv11wMJgFTQMFykh8QHEsjgFpeGH2cWp6oPGa75Xo1SbVJBdtU417WxE9UAy36M5zy93tn6Tu8J3uFiv",
  "key6": "DNqnhzTp3gzb31htNBrbJJSVwnkxG8MiwV5b13Rp6moYTWU72X4xyGkzoS4D8JuM7oPGhCTrXtDCNWympEJhb9e",
  "key7": "5DXANweUVY26oD18mRT111T744AeqZWNd6YaLRCnu6eER4P92AFLDfhb1ey21WPrMAujaAN1E5nCaGRy8ZZpRQ1J",
  "key8": "4sKL8wQCzsTYxJshSRcUAoqW7YQxxxx82cFmmmSjHpBEZqEUYzGVj5gm81TXNanwhTmUeUEttpiH5XWUrH9YMooE",
  "key9": "4yMDYuX2dAkTUdUqifP7yctXWgz2DsPizJSNLuyHC1YrKfAQU6Th5dUC8QEY3mWHnSACy2f22djiYbG9aaUxt9h6",
  "key10": "5MjTnnceMfoqqnRLTKEtfP9kPqYj65p36atWGrgEorvjerLGrVBYSysWSCr6KG8MLizrhFHbXzAQkfCsn5mN26Nb",
  "key11": "3wRWEswgy2oZqxvQo9QHU7rBziEcS85MYtYqSb4pBt1D9FmULAqBJXoTixCn4xmY7BK9jw1sdHaRFRDYMQWEjiGW",
  "key12": "3NNSooPerunj1Y8w5SRnfn5BSU81Wf2uLALnNbD6XCrzPQQW7P4XnLSusUB6SV2AZGF3dyHUEUyCeY7GjfFjYpKc",
  "key13": "32FkRSzeLFa1oYJ2yXKnsByTSr7oqtsSmWMPdL483muKqi6JjAs242TCJ6otYimdfbTRMv5jjzDnK2Nc4XY9TmJY",
  "key14": "2rKqqZfWiSWWaQeb75JRkSURZ95iomTF1xSMowTho5hwhqxA8nedWXARADEeUizFgf3FyZxVhYksvR23XwH5vP6Y",
  "key15": "4Gh9DkVEuGXE3Frzij6PMY8mHxDCdqs74zq9A7smfNAfp65eHvtNkzrn8imqYN9s4VSEVQgG1QWAd4A5pb14j8ux",
  "key16": "5XiDRbZyQBHtvx4WYhxjz2GULWFk2XDLQcrPVqnB6kUYVahPfcbNGzKj9166W9XPMdb1ifpVd3PuujxE2RqtSzSL",
  "key17": "3eFVPY6a8qFJUatiZ1SWZTL2o9Y5YhERg5a16LRpHHfPYCDoxDFkXctMNFacatzP4jZ3yRNLbe2qesKGN174x5LW",
  "key18": "3xUujxmgGKDDZq7yccposxvTzLXgiDvWRtUQ6zEJkcWUVVxvuwFALEGGSSZgHNjLAjyWMMZaRB44m8816RgzyV4F",
  "key19": "4brYVq3qGHWfCycmqUViUKupekQZjCrPHd6cMqAA5mKPrdYkhaMGcjzRwF7jMgoyjqqEKJppmnwuHsYxwk7kdaS5",
  "key20": "5qaeXi8agGLiKcisCgqWVbZEFoR1gFdDgFX8u3LiiRTtc3ApQvngFi3M57oNwJGXTwXRGWgK8xUqPP5woF9p9Gpv",
  "key21": "4Ud1NrKSVWu1VPzZ975iXFQuBE7YPcM7RyyuekKRGqJiJhTJwpyMDCASVJRQYRcvSBvdhuCMfiLiS9rzpbziMS2L",
  "key22": "2tk5EQpVCmNQJn9kSAjKHz1qUqDAh8tb6RgauG8oXQef7bvdewTDUBroJHjmrinUczJ8Y5A3FKyD9t9swxzoyqwk",
  "key23": "58okKrqNEpKvDoAnAXke4RZRyogPGBNT6fkPDzqPzqaXAxycf22rNyf8pAEaAsDb5Wmhca3nVjfFtM48r1qMy3B8",
  "key24": "3nLhKLEsztb2G93TimNtEe6kcdPGRs76wnzATjJLNUJqpxBZooukh8jWiTirAkmcEdbYw17HaFtZMBBD5EFPUumq",
  "key25": "BQijsFQnZQr5rv96duRn9r36jGNZpcwsbc2z5JhwtKGfr4KCqPsvacQmaScVv7GsP9ACPyp3TBeNtg3pjUmNkNm",
  "key26": "5CgxnkaXAfP3Sgu47b5cX8NFa8jm4j8M2czvuB4DBnZ8k3gTkMXhUCSZpF2eYp3ghoBNt3mzi9FCQg1ioYceW96H",
  "key27": "5qC3xAsKU5NUKWtui16Wr2cwyZ2vZZNzD1dMS53Q9ukbeDVs41er5sqJVxJrzgLu15DFxeWxvaUcYPCWgU5X31iJ",
  "key28": "36ujjXzSNf8ri552Umd6SKccThDg2SwZLufZoKmCfJh1LVYq66zxp53dJR7hqC1vxLty4N7bKZy4w7H9WBsGhPho",
  "key29": "2F93rDdfQghjzorYJtetGuV54QDDnxFUyBCyzc1uncRwSE7Ea5JjkcMrsDzkNxcmgXrtvWT7GMDd216HHX6KPhbA",
  "key30": "4X7s7DKMZWFL1upz3ZTycxqYeiU47HyGdaHaqSaz2KB5m5ySihxgrYGunYEdjRJcLa9wLeqo5wK7b12cscQ8Dr4W",
  "key31": "3G7P69qwvp43KpEAsR2XxZ7jkREBy1d6xXw9WarUdoV8N6J7h76n31QX5yLy6TDYKWLWhhXp8QoUpHPsbgwbqVu8",
  "key32": "4CKnuBpHDicNr8RT2cNreb7UYJDDrwzViJnKdKZH2HUapHVNBXjnSpemv2FvYHaZjmzn6PBfnw3rkPTYBWcDmFLo",
  "key33": "3DTbU5Ze9Ky3bQVRGvWV4jTxnLAw1vGqh5eD9JjtYmVrPzLRwUCVLqyNWXngBFDACkPaMnhQqBMBGNpNDvhqhV9M",
  "key34": "5g52v8uZaKw12DRGP5AdnPaVbTyGw68y63ToAJJhbiT9G1HFwmejtbkKvZkNy16yJobZT3NRw4MaVXEPFhXEzpWN",
  "key35": "4NJz1VSHNQDh668TrvX4Vfjxo4MAAgpnr7TuFsC1hVfMZdLnKzSMN5w6qJpGqQ7pgSe3ZMrdDhJtjGzcPumu9szp",
  "key36": "uYfSdYqtENMfhRTzfARvAMVbvVS33XbpS7uefgnrDBbVwk3hE6K3p2VqBmsXPjxv9BBQNefxWCFPzavFzRKc83u",
  "key37": "5d2VnPNQpS1BH3Baa7ynYgya4DWeZFR91xceMoMw9mNijsFxxmWHXYdyrrKTCSdEm6kkydXSuhayAGeMPe4bDpno",
  "key38": "4g3n3yWSUYJh81HAVefTQ4wxbK4sWWpHpf4ttW9c7bMZbpVk9QHAHBVxbEv5Hp8JKiMp2tSkM5eo6rZCabQa1jk8",
  "key39": "5pL2prtvSEYMcPZmZGav9WjKt5eFECemf21UGTrLvUdjcg5NLM7yZ6MU84JMsbun1zWaySRJQtbKHhrQ3en6PAjg",
  "key40": "3ZsrtYqTQiciELAqfzLpcx7RkvzHw3puUKchBp19VU8MteUa9LZ2bEyToP75DT1ufZGPZp7nHrC2iDKL8FHMVtDG"
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
