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
    "3p9skqMTkFuWHGNoKSCEEFZEyTq5SNC5QLBw16xAghNZQBbacQeG41swJHdfT1xme97bY4n5P3beaTTjS8beAfxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PJYGe7bLszNBWLhFxqGPScoALgvS9nLzkj7iTZKhNrY5reFFQ6SngiqamM43dq5YqAWKP8e6B8uSroddgotMWCK",
  "key1": "64TTq6RAv5o1qPGN2z6itMcN58HZwzogeA9dBps7wmn1EMjAMoWFMuBVv1LLmvZRm77Q5mxkPjT93vsoinmahqBS",
  "key2": "4CCZ9edDM8xHzaDtjPTKhuiqRpKyjBMQoDQf3GxCXnvoRUxnLWfg3UkNRJJ9EjS7gFsZ1FHAML3DrXhUaUsQk2F7",
  "key3": "2oGSJzDf92WMcjNDNaVaqQRikjqnXffe4WXU59t4pRav1TJv3pkG1KY6GWCvZ48ikHdP5NUaHnKJquwRM5HjGXWN",
  "key4": "5DV3mWwB6yfFBjtnGurPRBhhtdegjHEqQakE8nLYNqk6gfXyVg7YsoZoh8433LMTufooGi5AAq5Xq3RLHeZLxRgS",
  "key5": "4BCwPf6t4aPBTUU9ZPR49yJ6BRBPAMugPH8Dgj8cgUYFGAQypmh81vE8ACsw4Csq178wgeDT7ej65TkaqXukGCrx",
  "key6": "55U6t7r5dgqJzXSboNUpMEMP2VfPGcXA8kmPfhBKzzVXF2sPTGSsmNCenALcGjxgihUtgrLxm9uWHYqQFrHSTPDg",
  "key7": "2AVi9HoS2BLwDg19EusnW7N1YYiM8jDFuZ1uJWMhJ8oV82DCoLxf8AQxZiMAGDM3jqoQaLwbTTuqzHDSFKHxy5AR",
  "key8": "Ym5WqQH9JNHAGFwPUpJHmLbDP1SUTV5uPdJMkeBYcMD1mcVwJemnpaouSNXGNUVQB3B3iiwkNt6iNsogD7K6NyP",
  "key9": "5Jot1ExNEuemrywu4jyWP3mNqbKFBaA9TizHSswn1fvdw3wviowJynQz6YGSF2LVTdnkgAQADa8sNp51nqRZHDBz",
  "key10": "257xwTXUT447NbRPR5ons5H19Q57yJyJNsXnSqurWVRbYxLLkTEmbpMiLCge7xCjNGfuSXjrJim5dbLWi7CmD5uF",
  "key11": "679KcEHKkT3JW8sYCDSxrjrh9F4sAvYKDpVKnPgX7UMHWd6FgxnX2SR2jtEacnkWpdsiWCr7SmPqNsmYvF1T2Qju",
  "key12": "2rCT3ZvnNm5MWh2gEkN23dPXhtMyLgqTcgKwW6tptpX2KFBUFhhk4SXXV5TZViK9jQHGXvFsTtyc3RxpXvTqVGbz",
  "key13": "ySEGHqb3BCLbgiyQ4Wh7dQ14UmVNfh95A5KtPekBQFnU7REAmz6t5hLVoh2e3sbruzBFttHA2DCASUZZehrYzmM",
  "key14": "F9k7YoT78paixbjX62BZqtxrtQ4QsQPNyoQKYnfvTtnDVXX2w9SSfztmmsziiHeh7CKs69LYZRXcKoYktiUo3Sw",
  "key15": "3F47GMX6QAkXRJ4Qxowx5c2a2vqMC2me1SySZVHVvKfoAjUxGuqHQWfHsJb7SUqVi55EbLsrsimqPWbtb3aeguhm",
  "key16": "2rSYq5KBsgKhU9wFkf24gkuQBYcjsBHTW38FptTq5Sp2ieeLnWEqMSFHxMcEVmq45HW2omM6ypYbvdFw715EAM8o",
  "key17": "2SfrYYM4kDTwHizUQj2F8mcimJ16ABznXNvS86qb9k9UhyKMBTcAwn4A3Hmu3wrTCbUob28xrCSVUjcEGZboK7Sc",
  "key18": "4kRLzoSr5q3hF9xz5U38EXWHJMXdYvzysegJgwsVy8ZDAEZtRxbrhtR6L4Fp75pBvzNJJZvq78mF8331AnAhvyj4",
  "key19": "41GdDG7WdFwekheVkmRWszvxhX59wndhQHe1N9RByZTuXrjkQLEdT3hvkVwCW8rNpV7vgP9CC6pGqFDPYjULfHNR",
  "key20": "2m1rj1pg92QVyxp9WY1yefHcb4EkLLjP4NHAuNS67dUQbDzBBmPW8gyAwc2CdjAkpSdic3J9b5Sbce18evdgKXpB",
  "key21": "5Zdga64oz4Q6Uy4omgMMBZxQmfq2PeRB1EyTaJtq4aXNxZMDtk3mQafiKKUKoXZQy87Hk3CdtUBabkAcxFJZBpY2",
  "key22": "2wZd4JoK2EVmt5E6x2HPdXm7LPeYFZWvyzFtjrNMhgB279NmmgxRQV1c1MosVDhyG5ir2tgTSbHebwSYjQcRsaYM",
  "key23": "2DCFFhZcZMAF1BvzX5nFEWaEwRka2atrG9Vjo2zxNHYHnZAUH5LNhkBkLxuWYaFbY5Db5WPrJFNyQX7NCfmot6Uu",
  "key24": "5DKD7KCsbmx4GnKrUC4iWh6P732k6MhtCkBadNVGtYjbgnVkn877pUQ53FcoEvUmSRTVTZf4wfiTRroUhuNoxJtc",
  "key25": "5Dc22WUmEpHbCdqXyd6Y4chvZhKPwwemGnDU7SBCt2W7YFVivw2VGPfbstZPTD2VT6fe1Y72NKHtWc4zNArVFQXM",
  "key26": "3Gqs2w2UZhXBM65jba7ekGadbxHWRVqfwwpuXaM8yWz76sdwBtKiR5m2ojiKrqk5SKwvrpVUcpY6UFd7K5Kjc3gR",
  "key27": "4P7YvJ6awneandoSU1m57ba6WaKVCCpCmAecB6jPLQX2EvrjRQLeS6dm8hoNAeAnarDztY57EcK7Di9RUMCR8PH3",
  "key28": "4Znjo9xdYUqipS97MGANEUfL3JnbZtGQXs4LoJexUgcStLnBJHxyEvFd1rDNZXonMrS1z8NM4AgFFbPSR3Xtb2i6",
  "key29": "34jtX5VWgpkwTDAJJwXqaAk5M5hymKkn1r7BFPFKPjRUpAghs1jbMrFUsfCAXpfBaxeWBVW15cwEz5GVJCTbF6WT",
  "key30": "5FCFgGC3Vi3nwrhKiwthhfwAY8VqZ24ApnnRu94meEitdWns1Qz9M9JLfSPYc62FhXaURqjYj1dh2qvYNeBivKoH",
  "key31": "B9U5JCwrXEVs7YZvD2SVK6qt8kXEYkKwP42SSrwTRMqERx5zX89mJ3cjEqN9oCS1SMrrTQcyrjfHYXMTKQMps5P"
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
