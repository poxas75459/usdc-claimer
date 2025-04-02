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
    "5K7hoQ8ZEJUDaJCmC7Dk8zo6UYkrGkMPd3fhCUmucSgjRgbtJG7PsKJotTA5i5X7RPXq8WufpxS6ckUGEBKx3QhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637hxVZ8ijgn5MfmfnjhbfmT1Bm9nSJdAcbCg5vhnddNzaLsCeQ8vSy6dMbNgDQZLzf8w8i52bmAR5nV1VALWnFW",
  "key1": "3PA62WtDqjxqzqp32M9ZLMmyAzZxSrKKZNxKVqyx1E1KDFWr9RS4aQv223FuxWbsUJcBM1Sji8Nhr8TCxXH3aRGW",
  "key2": "5UDST9oeWeeiYfp1EELvxsD9rLc2hhpiLdVBoQ36wRYZTDUbT7fd1LCzkV3RmWyjwU6M1HpuxvbupqL5rVdBDdDL",
  "key3": "f9cNNyBUyaP1KzNVzsT9Vi6bLDSe1peFCkxMETN116Qw52iFTGjhN4iPSVmoFaLzMtV4Wz54aCYuQEjDfmbM5vt",
  "key4": "3r86TYSHw3NWGmabP24AHVHvZ7NL43hKvAZByKf1ZvbEZ7UFWyGj7A8TqZgBzRrwmbJ1QBCvTYShPshDExYtLstV",
  "key5": "2pbivfhDgmFUxbP9WM3NsYGusAbkfobzCu3LvERLaNwfrCoWMmbWu9X8gwwbp51zFzAiM3vDtBw6YaGMKHruc6Xx",
  "key6": "5dDL6Ap6VXX3KAVYHHatakG3Ba9txazE7FAhvkYZv92pypDsxjjyrpJndepTJim923uox8XZUADW59VFiRmnt5NV",
  "key7": "4C7sPzdoKBKS9XH7v668qm9jbxC4mj9LPLgiXWzvDVcf5oP4m6eH1XRAhCdUAiHkdin1E438t1K2BL5Z84KAcBC7",
  "key8": "3D5nYxr81wFitSoHEN9EeUjBaGCycA1kDneod2dCiErAPGMQncV3wQZVt1HY63BYSuEvtmwkpt1sgKRJpkfjHjAn",
  "key9": "hXyFesnWeFBGtnYmrGtM7nPaFf17gvR78c4p9T8diBsYUuPBsEZxiwjDactjuAaR7JGj2GETYMKNXcqiVzEEK1m",
  "key10": "66gqWzamrUBNRGecN72Mk9cW9nAJkMBgdjmiXes4QDNe6YAAg3mK2WCvNG6tgrmSCu5AwVgQkFtUtAgGvmEcbXVo",
  "key11": "Nxz7CgUVYgQD9pLL84RqZhjxWUTLfssJj6Mz1WHuDEGZZEXU9Ty7EXeeXqigZFJYtzXN5rbywdKZDuUiZKvJsYG",
  "key12": "UdBtgfSh3ZCUsqKGwR5CKqDrKwVrrLnQREcx1JEkiXSYZFJjngEacVe8x8XQP1r1DcfMovcNJDiVVTSU9GYH1oX",
  "key13": "64eYj1xgap8VtWDwKjph9hHX7Pff72scKa3bzYZui6vwJSLpYpjdiw2a1VBpDbz7YqghXsxi1uk6dPvwDptgXn9d",
  "key14": "4PHjYW7c7SihnrfujvsVYf6QVtmX2X8PjsCa6WeZ4otVsjbvZ21FsU9NShw7CtnamwCr5hGHupsHqRK5C5wtQmFU",
  "key15": "5dpYVbHp7oh3E7eQ76cn7JLaskjuK9nKK4RbRdzBU8DotuFvDNGLyAv9yTyRRknjDgVA8myFg5fW11xEqmhoMASG",
  "key16": "2HWAY3JmYVqBHyLnDD8SoH8HEZTXMYf8P7NngLWgomHieFBi4BrdDfxmd6KFgyuQM6GsRiwLHBdd2k6UP6cN2p9z",
  "key17": "39E21BE6zyDZ5KkQtnsmjDinixYDrefk8cVhVe7pvayoSZx7R6rEPEhBSwAeH6CZZMgroxFuNqNnZVQmcdfnGUf3",
  "key18": "36tKnch4gz41arb3p8Sz9m2W1oxd1psDSbUR9FvFFpr9nuePXpAyzmL5m4HsYefyUvwwxP88DMMn1wTLA7ejTLVk",
  "key19": "3PTSCfeLYTSxHwToCa4wk5h8mEiD3KMVetdkSsiX5vztNBKrDziFDA8nDxJhgvskE5QjDgYBTfBZCn9hFxRK8WBm",
  "key20": "2UNcYstSiadtvEtkeNk4ePpF5AqVhekLxDYxqJC8mmSnKE6fHDetdGMEBuiuUYpgbojtWPhdcrDrHsKxGnEdeMAY",
  "key21": "5yiNASqoe63eCb3x2NxjRAPrRpFpU72sSv7QdbptWv7AzBnmJ13EJbCJ5ZTjAonrXPn1Qud9UYTBLUSxS12g328x",
  "key22": "2FN2kv9FEUDEcKuJX1gQNU36jAMse5xtismYgAHYZeZXPi63ybPkgry7CtJ1dK9orcNmBKnKcFwjQiX8ZATrgYdX",
  "key23": "54iZUGoH2WvzdQQxfUhpWK72iMZt7popEPGK6Ss6tGVCeuGapJe1XG9RfHFzcAStGrGQGaVnw6tAycrCj9Vc5wun",
  "key24": "3AXoCpZC6ZxcVCsrpVifvSmZptQdbZvAtQJEUWhnXErsV8yWNWJMBuNg2n3jdmqGxGA1ds5FK6BNLLeq3wJ3EBqT",
  "key25": "4oRZStVHrsqHp2zpCnFGrMX1HU6ZBvC4RNxnorV1RXd55qxhPdKZLZXL8VLmN6BuxVdH7r4h8CaWk46KXpC1K2U4",
  "key26": "5TxVZz21pNMnE9bXG4ubccx4LPavZb1YsgV2JkDz3jQddMhybn65ctPnw15HMYEDGcSvFMiKuq5nU4cBwNuGH4nh",
  "key27": "4Pp678yuUVT7nEkMd5LB6QBPPatZURQG64xJNtvDsQdNZ3fKApQ9mBChcm2sZ8jA4azoWreWug3yin3ki5Ksvfig",
  "key28": "58C1ZfTGrHaNqPDjrw1Th8ATJJ3QAVJePtv3qHqacuvbNuZ2LBwf8P9quC277cdp5Pu9q8CiS3F2BpkW3QttUbYX",
  "key29": "5JiFfqVJL5vRNiWdcSBVZVFxNHnjXM8LP56pGZ4LiGi24H3pUoib9oiDCZaGhi1gTAANVPNi1FbYTojkSvoWW5ZB",
  "key30": "2v2ixTTZUPuqpxg2eHNzatmCYvjgQRhPw3GRtCBAeATCwJSy9sUdsi8gZoDGVDJisRrGJLx55RLaeJvFsqaUUmm2"
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
