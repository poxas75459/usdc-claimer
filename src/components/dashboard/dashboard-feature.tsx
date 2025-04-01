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
    "QwR4WRxFkbLv2XcLAZksn26t5iqAPbYrsdUKTwS7KnSiNBasdXvGahmirVFWQ1cM4mjBkMAgRwx6TtRWUTgzSYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8xYMga5axJfav5HvfrC8E8rjfLRdrFBfeemEqRCUXXPAF92JRhpzDTbovpMAWzNsc2LSkZS1WcL8ppwQj42UG1",
  "key1": "536SXhaKeSy6d7zPafLTkV6HXEfJLm47xuxtFXMFrWPY8sCJMLSUzyZqZVqfpVUyQg3n9BnFQQUAPdzuXRCXBQau",
  "key2": "4keuA21bYjve6V3TjxMAbyVdTTtcCknCQyFb6UjpwSLhhzd4SxH2Bwr4tJ3p9hepnd19R7BGGNFcFVEKTab9K4QM",
  "key3": "3245LP7mG6gCDTRFkdY5VsoUKRAGNbNNDx5iCX7bALeLHgsNrETLgcqKJPjtJaPtEFub8BhkmYrf6YTAuUbDhBoj",
  "key4": "C2Avnzx3fuhBYcEEVasM3PpmPC2csxF2Y6B6w5qF88j2GmsWW7chMA6s8Ds7X6twcxwXVuEHRfRCRFvoYFsa5Pi",
  "key5": "3A8pVP79PvaCAKy9XUZ3PDrgTmiKc6tzEDWaYjoTvzZbNvLAeXQyAnN9jyg2YYiiD7iKwMzMBmGd9WPHc382e47c",
  "key6": "2AsWtNPYGC4xUrXhfFkkbGQfbN9SDWUfzPUPJeGp7FV65cCgPnx75wfXcTCdKYx2kKXtmMyYxR8LePqCECF2AvNy",
  "key7": "3CWUTj1KSD5Wg3yNQCuoUq3sP1BoUD8URzpvees5VJ1PoVzpR1DcLKFRY5vBmph9k8CCQtYzPNU7rxX8iPBhGCSC",
  "key8": "4uXUkgiKTiNu9jqC974tDADBTYL52r2VaTS1AeoAC3kTkMJ16jwXRFLdV97L3EQ6nPSqjqaedmFqrTf6HbaZYc3K",
  "key9": "5TEhMJUAxfMdiYuTKN8pe4YN4NCT4DKa13EvC8FHRLbaNdZiKb8ZdGeYvcagGepXqHYFWLwY9yRiEY8yPh2kce9g",
  "key10": "4VUGyKdo9xPQitmGkKkrXDCzLkq6Vr5jUSWaLLEWZ5Ns6AVDKrhU3U5T7zzG5pZ8hFY8NMbSbosW5GJ6BKauE9nN",
  "key11": "R5bnjC3CMCFUywGvY6iW1eeP7XJtjReKpUF5Zbeqy3b7y5UsTmiMFwvswVqTF1MqgLYhEPsar5TZzRV6FR4mcT9",
  "key12": "5FPMsnddxkrj4HtwBzp39kt7wZwUkZ6hADjwBvzRj1hduDUi3LRL5gHAiq9fyEATdUEByK3UUV6Jqr5fKxKTb1QE",
  "key13": "3hmgXq4ax1uU17u5yAAJRxf1WdLKryyoa1Y6YrMoGRfNF4EDJZijg2vv7U4vAL4ZnoykMcyUCNoo63yofFTKax2Z",
  "key14": "SuKo7LVKwqpzoCPE15gQT4sudutYYmCHs1z24tEeQVX2qdUnmuNCf9y76pLkW233KNUrgtMRiykKNpY7fo9avk1",
  "key15": "4rDnBhnJSPBJDHcDdJRdy3i5AfYELerku3pf2uhQanMS3o3sdg4cE3Z9ReJsvyxYqySkwuqxQy9L8Q6vhxGKAkgm",
  "key16": "d9tgTYpbJ8UWSyawACzoobRH2E77iNHHMgZbgR4WsTLqQNCAYFuYzhCg6yNaVuR3ShfibRQYUm36Qduk8yRjYBd",
  "key17": "4aLzWYRgkq9mjCzsBJYAMez3dzSdEnZ8CuVaBs59w6VqiErBEHMt7sXUZMfUtKAEpDHF51AEgBtHMJwm87bvue5Z",
  "key18": "4esUMqLhD3zMc2uJJubaBMDrsGumz3kfYu95Vv2WocbAMgpvjJQAqJTWAtMfyDY5zsoWvdZQaAdJPWFaUh5jiT36",
  "key19": "3CvJ9nvTFn3rsx2hAQY3CUoC2CjXWnWnUPUg6BLURMJN13uPrKxBWv44pLyHMV7ugnD2nvebZBBykF6usHAqfuQC",
  "key20": "S1134B3QcWTZ44h9WWuqA5SodZkK5nSw6fTnHCang99j18QycvMnwdoVyE7jfsTbw8nnqrZqPPAw8RZfrohkj4U",
  "key21": "4tD1Yzfi48h3WXpYENu6w5HK3cGZPRQnmoR7PYNbM5rZcsjctd1R5mSJYny1dxsWS7oxeM93AZvWxu3UACiWQ8GB",
  "key22": "5EkarMxuZgDf5QrnH13pufYo1wxdV4uXUHCnUnPefhmZRSyAjhuCLzj2b2yXgesdFEncnkQsCCy86PchwQGXohbc",
  "key23": "22h9d7tym9UzKvexiYFomjxGsiGfm1937EGW9nKg4epq5mbo6MShMShHgn1kL9EZei3fMUmcmChpsS9M8uje1feB",
  "key24": "3dVJCE9mwXuXwDY7nbPNVWxZziJxAY33qmbFESno3BQ2eLbdhBkscWWTvWW5k23fzouT1AeYTXvq2gvHpYcmWfP8",
  "key25": "GejHvp5uGxN6VzKdYkcVt2bDPReiruc8qZRiE4q2fssctzBrf2jTrYiDnTLnEUtKRBiCBFuL5pQ8NDW9d1P2ChA",
  "key26": "3aiFxaGmxSxVcMu7ZyU7YvhBUHgFMKqysbTjHB8J4tCm8sJThaoiBLrTN22TcSe3HPfP8ZAxFd4CwX9bCggZ7Qqw",
  "key27": "52oWVSH81NAvkGvFdqQH8oRz2mvxv7tAS6iUYZjm43iDGhokJfm2gphz1DCgYQ59JYx8w9P4VgvuvGttSoXFpXen"
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
