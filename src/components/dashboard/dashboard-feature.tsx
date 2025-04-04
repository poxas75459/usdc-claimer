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
    "eTvxccopRri6hxPQG5QPGeLdKXbKk8UgD5ocEN89XfyAuLRHq86PjsQ2Mtr2KXsADL8AFvsjuRJSY3XxpNYgNds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G4wV4wFoBcQ4V2ofMKFkfqSdDTzUSLaNvdVEaAvojv9UNsYLm629tsnHmmgfkyfoi8qx273DS1RHYmnFrZhgzXM",
  "key1": "5DSxW75VQYUHwLvx9eqRTY3oojQR66VJgDxBijWeibjpWQBYFg1gD3MYhkbnYWArgghe8qfkK6ZYMSBKDQmASzj6",
  "key2": "3zy6GbncdwoSofGxRRQ9r1H5LehruWk5qT1DK3v1N1DZfzBv93Bzx9bfRqPrncBeHZVvzfhBFftuSt7x1291u1nN",
  "key3": "4jUg96Qe9U3MkJQvwyKRAab4sWBgfb91zqY3iyDt5jX9L5g2YDz6UGi8KPUftTHRM9Y89LVmhtyzWHJJNQtW7Nht",
  "key4": "4XVrs2K6XTdgmAvXpH5FPudGEDtgWv4xy7ASbXb9KHxmya5eHBXVpHBbLKKgo1WLBYH89bvcdkicH3NtuP39Z7Qu",
  "key5": "4kLmtkawHuwFfcAtLjZxgm4RtxLXfFR8zWe8wT7NxzsDVNVmdWFRj2eQ94DJ2MLE2do49hSM6TGVTmHkMCe7GN77",
  "key6": "53kMuMvW8Ufa74nVfLEJiTVHq3U9QhFrC1SMx24HqWVRBJ23v77KCnqLhUzu1jPzAzKXAbAuaRyw2Ss5obQufBvn",
  "key7": "2kbqd1g5nGSYgoubJ16Vc5VdKDUEpLd4kvk1nweWjoLNUZfjyCzDACCgFaXXyybZZEidPVzveUBNTXPsBMCtTLWT",
  "key8": "5pxLUvjmnAvBNdUjMoXMrzVLgHh27nXhBu2MAjdTjhyXXqgZLKXBp1EB5AxY2twAFNjwN3A7tfEf6ZxUFLJvEsGg",
  "key9": "3grQDojWN6eqjx6sRSRUDYEnjMF642v34yikB1CxJ3mwGkAtjNjECuABr41cuLrG8onSXRmGotckYSweKGnGUUfv",
  "key10": "m27N2kNaEs6ELDEgRdd82P58Co1vAVK4d45zN8Mrh6SSxvCnv2ESbfCmi9Coo3ZRYzWdsWHZWcUtCNTTX1c9W6v",
  "key11": "2Wn3JXfH3VGZGVzmJzQs93VJ3Ej2KMRpZnpdEhtkEpq2jeLGevSFJRLeWVFk3BxvBDKeAixxB2VaJTpbsJebRTtR",
  "key12": "4rNZ5Grwc2K91gMhs8daaPenDdHYzAMV5HKQUT6hv1hitbobkMJdYrMvzNkNas5aTWvPodmuT5M3c7PPc2txWf4W",
  "key13": "2rEaSvCTHGaCWmnpLq7tFYPCiYBqkqQtiHif9P8W8CKMfANdFMpe3DRjmnbitNxjAVwgJ9JD7H3mBZSCAjuC7QR3",
  "key14": "28HMM8ziv6yBSPJnUW1BQKZ6BipFQ1F78AVvUihkDbA1bqBR1SopQb7UtRQAjJQsPPn9BbkdPs872tjgEZW5mxFe",
  "key15": "SvAzfeZMho1VftfRQp6WcUUBmeivLW2HHyvTe6hon6WMdaThpQdfirNwcG2pCKeC9t1mnJiupsPGBbQhYtnG3BT",
  "key16": "53W86oVY4SqFbhGTX8SMgZJZJyXCAzHtP5UqGVnuEv6pgn6Dn4bxac23aD7iAEAkGFvMCg57SaMu91vvpzYjwUJG",
  "key17": "4aUyz6HfSxaSgnxtcRNLzXJjg8pG8GUajYc2BVywDwqzPKZwnLzxxmnZK853WyL5s4qGn8RHYnnvRCpRFZSgqLfH",
  "key18": "4CYzLRwxgoKjXUycWYvG2tSbY3V45scQ14Tw8ujQ4JZkFutTm6eDTrgNqteU8bKYtngwp5eqTYdyFRcKgq8AM6VR",
  "key19": "27NgREz9pduAsktcVfv6FrybJjJxPvV4dEfw6SbqcuWbtemSGsDXxGKnGSeH85fpFaKk6PsTpxwU8gaoifGA8tKT",
  "key20": "3nwtKXyzsZVYuCoPZkrTCvMJPH8ZmmHrJGH1KdoyZHPAsgVf8gRqABfnVrpvP7nJcZQRxBxhz8thqHydf7duVb8w",
  "key21": "4za9AViWQyAPBoTeGHZDS1pz4maTVkSXbJT8e6HDyqdEDajde8mD1TQ6yCgyJZXqDQ4tQDWjs9BXK6gk67jry3z8",
  "key22": "63qobJjxKmTTHzokew95NYoqmwByeqprU9h7KYEdkP7NDUvtthoBPFiW2QX3bTYKiM4xzVVJ2sh76fRX3hd9ZHyM",
  "key23": "2mhZ3NNRyrMjDnzJyvzAY64hoyPCzdBLqPqKhMojzbDuZTveMEuLJ1iph5LnA5bAMKuhXNGxM4CbVLSNc7f7V3tj",
  "key24": "DG3AbT8TyUpzEdg4eG4xwbWGqKK8CtqKLgNdXR3jcm2ev4qYMGvvxwjYTFUuSdaqJrokA8gcWCRu4kjtJsZF6xu",
  "key25": "28bU9xG8TdodFTTqpchXWyK3YGu9gxpe7nvZWA9yk7bkANk9q6Baa1gYC8urimoJjC2AWsQ1kLofM9Ju5gqQBjDp",
  "key26": "3pXtRKGQEtGZjavL1hd9yomfL91rahEbZgxTRGxguUMyUi5WNX1Dsv3KJUvtrnwZcHPe2C5JF3KK4ZwJztm6XWjh",
  "key27": "28hqX5HrG8AkRpDYLjxcugjYfbrZ7TEFS97e27LSU62FhEu8aeYeWSz9dLheNno4CyFARYctRyn61oNx7UtPvfsC",
  "key28": "2tfwjH9DGkveZ3ktzVryZeWXH4Rz2GbucLP7HkkMU42GYA7o6CmmuAFxgPN8wdWWMW2wrUgYx14nmqsS9gfsb6AT",
  "key29": "5QTeWoiq83uWxJPATf4LK1Maw1wwbWWajQEPiD4YeJUr4aXFALCQiZ1xCRJWRPc1emXkkUSW5YNwBaat6dF5S4Vm",
  "key30": "4vGuRdwYwYNm7xM6f1Stb6v3nYDCk1cZwwcbK6V1uvbJhYRpxGa1bULH5QHAgQLqtZ7XHSAf4M4igoUScxmcHRpk",
  "key31": "25A7QcXiF728mE4BkxF3zfJYrjWwdt1gvK4ks5rtDrUsvbcuvkZDZybKBFeUY3n8QomKudnP3qGY7WYzjuUeAEXS"
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
