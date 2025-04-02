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
    "SCKE88r3QfRASHDJ4SfYQQr7i1iHvS6s7hcK718FXh336G8oHtBSQz4bux7rW22wwMiGZ31ouj1amPpC1NgWAZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoWsXeJuAa2tDgfbmvDVy9xcNhzBoXdvwpndjzrBqq2N2vyfiEBNNmwiiuHZG3LtPEQjMG99pDGzH4G7iCdJ9oP",
  "key1": "4XPGXm9HRYvLPjwKVYywLR8ADdV4Mh15uHpT2Nwgrs8mVAxGKipyFB5koGR2j3frQtAn9zwLkNYgb5SZonQo1JEt",
  "key2": "41sHVrQmQXfTogCHHxgVUjk9YwPabwsSz497Kb5zN9tuM8d5J2SE2eKUzs7n9i3zJ8nrVBtB8w8gXdYBYtDWrtgv",
  "key3": "5dHukVbv5wjeuAaMqwVBzQQFbfYV1ysvVZZAB4SpMwCRrbYNtVAqqtKLNoUhfWzfyD5165qSqNiYkaX5ACc4H4yY",
  "key4": "2tgKYRjD6zdr6gZ4pUvhbfkAYB6WETa6dNi5HsX3rPvZ2xKV3StJERY6TiUsxChAagT3XL73jQJVYzaezHB8pCEo",
  "key5": "hm3eVhWac5iFRRPcVVVnJqWrCA3gyhkUd16nbqYXdBLSzAbTtJoz96h3CTvaWUtGwNS4UgUnqHVE4MNypiiZCxp",
  "key6": "4msk65mTmMJsrzsuoEScdQMJKzXy9kgoSi38amq82epFaV6E1k63HFo7ioDZ7WdYnhbVDj8YTGNc8t2LS2eXpn2M",
  "key7": "5FuoNASV7AepFub58RvFidG4izxFmVomDv8rHrW64Mvkoe7qHUEUEgCnL4AowkDpk46HfEMQudCTfMBLm61CooSx",
  "key8": "SHtJEP6DhD9p3PWyjfDZ5L7budFGv5S36srnYyjwVyNtAEHAKgRaomnVYFcE4gvgAVRvgTDcpY87VETGCgMQjkr",
  "key9": "2RjPDcTE9ZLP5XNygb4V2CqF2kx9QgbATYu6VrJcGPtcNS2Xm1V38we1mRXddtNnPCmXsu1nGM5eUaFspG9bu98S",
  "key10": "5JDJGKotR9dYDBu8cdDZZirir2ytVSYnQpocTd2M5MbZgm346DJ4qecpweeWR7YwTQeRSCmxeS4XniMX5SM8dAQ",
  "key11": "4ndscv41gDzq42HYxgi33XpMDU2JMprRVGxwzt1hYuZaMe4uwd8vnV2wkAhU8qXFLS3RHjCpiQCf6pTmmdE2ufR7",
  "key12": "NcnnA6QR84uwbHDsVDWA8FPgB3nxhQ2SHokwXeEekvAVcPFDsveLuZGTR737htvuRuVnLgjCkQrEJcVudQM2Nft",
  "key13": "2aQFo9SWMRJjjbux1LPTi1WBbqtBYaDP9HHeioHpXb6XNdjamUUUhqn8FNoFTfLvCZvDPiJkycY5WHc8KokRUo8v",
  "key14": "4rvYnDKJuqSigmZwjKB2A8WPqt4P7BgxWCW9wrpwTJkZRfc1RFHiKpETxjZSHkKqA7BYvQ8n6UXr19x2cs6wQUYj",
  "key15": "4XjnZ6mM2FPhEqSuBFTy4da6Fry65bVuRak2iN2jbH33C43Rmg8Fyd1ALjEn7N7bZJ789Bo3rmnNDBchBccM4Jc6",
  "key16": "jer8cHbghCP7WzQ3o5zwUe3and4iBFmvxsqRxVjzmMC2oYtsrJLkRWiPS2sf26YucyJiPRuKLP91kprtXUJ2JMm",
  "key17": "3yRLpmLwAEUf2mxUYZXZtPoMrB4eGMHFB3bHSFY81nVCgtmeo7kRA3QgtD1G3dTELRTs7MgCXruB2qkWo4gJMag1",
  "key18": "44wPuFuWRzCbzKmRBpFeoKNFPepa6w8ufn6zM8bsHaz9y5nxHGpt36QjrPRhnhgZXAoEyu28YQzQnXPHVwfbbDrK",
  "key19": "2KpHBmyVS3bkBewJ5GC1VHp6DvNeoUzNzXdN9Edm4niEMoMpV2joCJX4huFFrXTTKit7VrF5C5bjgZXFS4eRwHLq",
  "key20": "Kb1nEkfRmNE9fMre9hNcXvgGnb5mFxjWo9AVcGTGYARtRap4RqXbjMNVn5VciP5DYie8GBEotzxHXES525bNtAK",
  "key21": "2Eq8Nq7dj1H9YHvDZ8s9KKW5vgqxT1Kg74Jz6s2H1UUofqWtTmJgJD2Hab9NjjsoT4mrHXZKeAMGCm2R9R2x4jHu",
  "key22": "33vW4hyLHpWMkTXLF3ZzXpk8dkek3bozNTHrpuBKjstTj1hJ4Wu1cCwJn2d5UTCjEhJbmJhBAHxMf3m1hS5nFw9U",
  "key23": "3ZJHwri2LtL9YSyu8Fc59tRXAnD48ZQFkjWTLJ2x3PKk5raqB3b5A6UEXnRNUc9M1zg2BT3HMSKQVQQZ1RevMdJt",
  "key24": "4wyTYhWGuG9ByKrfco55bD1de8tHkZXbudpNAmtkBGPn2e266xEaaQZw8ReQ8MHder2Z1DngCoFb4JRykRKraTTu",
  "key25": "4YjCmE9kFFze2Ga2vzP5ECbp4FF6LKWTbwCmRLhZsgzXYJsWq4FC4RzMtJJVHcpPi4Yb2pR6wcniirFYmDdCfKAq",
  "key26": "2zmemSRV7WWKgC4k1D5fSNsprKXAaV5JE6nmU6WFJfe3ugPz8Nwx5a6w2PYSAF3NNvCif79Fr83enYhHqpcc7kfE",
  "key27": "Xo7ggDuy6BdMv9xTNRbFLpwCWJUdJ6qd8nQ2nWNweUenTGdrTcGdqDJauKRHVhxbSRg1EJPJUSqrDRaFNb8ohJQ",
  "key28": "4b8Ly7RJ1tupyeWuwPMQqZuwFF1xXHDduyZrxP6hqGNQs2mzBBpA5xRN5WpvSxzFcVzapt3ATzgGtfLGmAJ7Krp2",
  "key29": "4zXyWH9kCck33oFyAZWqLuZqJ8N8ukzLBAbptVn3ghhbRpmyrJ8kvmkXqHEjCc4yPxjHY6FUdA8ue8FW4s1tiPBG",
  "key30": "4wnFwDzuyp86UaAcxigaXts2ULr7Z3MSsEFVUvu6dXWw67wZdVXbAFS1FmdJa7RuZY3gnGEWjBgjWnNE8Vt3MsR4",
  "key31": "bokqEYUJLEiAW5tswN3h6HUEbAJz23Pthp8699w9wkfP5bDvPUoFbhsJ7jNsQMKGXiH4ZAnS9D763wJJuWDvnzW",
  "key32": "TEY35EDqSnmnVXSubeUjbwKqUQfUHKTvhSgA63QfLEi6BGhYfrQF9FFKyHNeknzwWEtYrfUqLnp4MzQcQCsteZF",
  "key33": "5SnLNUxBndqV2EMEBGfFsuLKzgCApAz7cTQJmLZfPfZwys8JScv6GgWuvyFmfHoahsuxm1crX8yQKWmCdLdHDoUY",
  "key34": "4rJhg9riUMGaWtn6u5TjS46NgUVBE9oLcfdQS2ZmqAXd3Lhd2i4en6dJh23Et3zPaQFCa9Rq5VLJeYX5WHVgzN8y",
  "key35": "PNWviWqrzCTKJBPrwJ1fUCKuFpKpRPsve11y4cjb3muuidP3a7FXBLgD9bxRdrZx2iVbucXA9TsnNz1kL57MAxj",
  "key36": "5bjm6LXZTXUae13FnSBv1ymipgJUjC8yVaDGFizTymTjc2whEm9ggB1EYCTnPtSBubF4ki7iFMHJiP1dcaMHyqNB",
  "key37": "oxm4YJXtNKuYcakdzM1zJZywZayYkK3RGf8VrYCRD7HkNEtTAQBVsZNLuyADM3y2XADgj4TBvB7s1PbTAuHfTdV",
  "key38": "4rDggZxrJh8tfqnbod7KAU6212iAJicq5H9z8RMLKSrS81AgZqN21ppVFv7vJnH5uKrfrp8WERWtFp7NetMuWXeF",
  "key39": "62PpUUn3qaW2jSaY1WKZzs3775yLVL6WEHBCFfnBeu4ScbX5Wo8Za8dHgQek3s85G9gLAVLEKBzqLGv6Fkmof5Nu",
  "key40": "5qyho24pkdamDEyWp2bGkHyYTu1Xke8N3TWBmAeFDKZvqMpwFxKvgR1Uc1v4gZk5zfGGm9d6vFfeV6tFsAd5PjvP",
  "key41": "5bHA4PyxznfCTcKCCMupi5LS3NxRKmahPY2NQgDyKBfTZQmoQLyCTavmSz6khkRzPoBrQdeWX9yJh5mZjtb4tqqP",
  "key42": "2crjLNTnbocvvukLa1M8pPFgU5MjAZd8Q9v2iz6BKBeJpqRiAnjqxHZ6AzNEDHnDGdezUC6WJVQZePnYwU122875",
  "key43": "4g1KYmTf1qEpEnxf1rFdQHB6QGyQxqVG9zPfmRRvSfBSQ8skoJo3eH4Svo4yqrKgykP6ukccDpvMeVP4aH92RT4v",
  "key44": "5fTTUnSiXReuwgDrb7XnLJsFpyeDszQtRL6WqNv3KSrJc9U7ANNUrM9qhzNsWMYcFwEsVBePXCrAcxMBhoASxJxE"
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
