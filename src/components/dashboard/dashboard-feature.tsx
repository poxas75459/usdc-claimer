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
    "Le9LWGr6keC9kJSpAUdiTyfmsYV9a4bZvoZ1eBjnLmeSGfXTqiHxBfuVd12GLYaNTvUX2tcMXURoAWhXMn5HK9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrR1Et8xpZFBxh4rnAKT3Y7RPDeLfpL8WeJKANoVpRAkFsiuQvTHRhmP1nq5WGgFoiWNnBxLvSQr9zHZay95fhJ",
  "key1": "2Lw9KvUVGPYDzppJBuSCaawsjSTwMFFSRVvSej14JWmEnQvA8aeFtuxmJVu6AsmRJVdGBhK88DSpQrARsyfifAtq",
  "key2": "5g4CSYNGAgfXf1ttHwzrSzuSyekibPLouM74JQfHYZdgKBcA7rYPrTr5XmhAkmaX3VnwVvXimJ4WTbDqVVgVXtF2",
  "key3": "4eTwGYvyjfovWHsKyvaC2tWHTn8PeeuCATxSFDDhmDUTq8WkKUGheBCtYYF8izS62JMqUHMH3idzs18JHc9NDGRP",
  "key4": "2PLCTMCVRcFeT89c4KChKgtA8TeppxPaXZyPcaf2w6QsCGrGZ68txdav5GHo2m8sbyNBu7WkKgZRJAB1H7zxFmwX",
  "key5": "3SxHhfTpKT5kB38sehB28Qjw9t432Ng8hzZi6CjQgwoBTDXrzMfvMgzy4GMnF59Xx85mbCFRQg9sYq4ncVj4JG3z",
  "key6": "jD7QejUW7MKgikUNnr2iX48skmTByVE5EBRpX3wWJKekU2naoSXhTXQnDpmW2AcwwcwbxNgSszQtVBogK8WCcdC",
  "key7": "4cFhGcZnq7KqsfzwBpVsNogwRY9YUmnwcYjpNKfw9hQAgmCRhv3dmmPyT1a5Zq1NRPt3ksNjNAzdXSg9mRbhjAJS",
  "key8": "3GYtPZSxMiRkNmi1YE65eN6TMnHdUW5Yg8bdaCLRBJTnV4F5GBoq1wGq1b8AH7snMGvkt6D857ecHRnvUaBbfR1o",
  "key9": "66Mf9xJQFwScyP899B2WarDFrouocMTWsxjGFL6Gw71ZCM3ARPcjKbLsHbGTqcXDuVC3q3CCubNom2AosNjQRdJq",
  "key10": "2hJqAThtqp8zcyPR1oBAqjjCY4UATzZaKW9ZNDgd7DHK3pkNmiwa3a3GduPnbSZ3bGV8nXZnL2UZXewtsgeokeR5",
  "key11": "4E7t4JkNGCWdLAeFBk1smyPFHCPw5PHtk7SQLPhfWj23qudNDMrFUQU6ubsnimj8iA2eEspoXJvZtwPtaRZzgxUZ",
  "key12": "nU46iWnMqhmGsKZoNjm2rwhTQc94hPAe26c3c9BGzk24dU7q7dWKab2VGGDxnXPiyVk7uSBFmVYPLHR3RrWqM7B",
  "key13": "26tQ68Lz5inPnMBX8JKCGvAv2do1HbRt4Z1Us9i89vk5R2SZzdU169nNXmh3tyi399AG111K5KGURYyz6Us4f2SB",
  "key14": "5XhAUbgXBV8JNcZUDNzfBHtjLmfYRrinJZuJS1oWiZvuvx9Yn3Wj71uf38Y9FcfqTXkQoPpkzjW2VhVARthuPCy9",
  "key15": "2GP6YwChD34dBchjBcCYkFUo36pvQLHU1KaamoN1w48TrZPP2NmeFQXuQgwPjdP51Z7C82wkmhXkJkqw1vnKVFKJ",
  "key16": "5aSMDip2rVpGSUvajTfD7uDJ1LKLfrA6KMH3MRkJEVhTJsZ2vr4CgGCwLgy3tNWXmiuyrJ3zhUaxyjdLpJUj2Jkc",
  "key17": "5VYgyzJjLCJJwTAA7SGnAHg8vKUUcVHY4CHepSc7zuz7Qbn5F9e95dmnP3iReWZhTxRsSNokN8umvGJwhNBfNd3C",
  "key18": "2hx6dNR51ooccEttvQKG9RuEHdw1mJyb3cHu6Up5ZQhZVL8QsjEmjvUrP4LuJqx1jUkfF1nGMDVwtzmpdrEBuhM",
  "key19": "5dDWCf8fttLV2Agk73Em5kF6yH2UPhxqUEewVA98dhuuzDWPyQ656JfYjJNkp6L8mekTtqVDvUgn9c4mzd66X9qF",
  "key20": "5tDwBd9CpSBJTaNz6SZu2fZLaSXDbGCp25MokzmUXwRpMoHhA7Zspzs9CAowZaPNKDQzrowK8iPrKi64TKUGGqgD",
  "key21": "3pLLKFTuYFii8QtWbYr55EVFbSm8uGr3nrNVWptqmGRubM2Pc82tgyGt4Qz2ff4C2DpZ7KsgJQhXZbdrSNetEDzH",
  "key22": "277MZihFzChngrVE4ZBaDWprPwVv27mptXhSV99RKFTFatY9R5LKDDiQHCRfpvx7a7WDrWgXBEQW4Ym35PB1dN8Z",
  "key23": "2mDbjfMr2qEyv9rckehkfj4mspRpy73iDZaBzCE8HKvnjsnVzWezzK4muVUJa9fzXZuHmBw1LhKzysbQF3ENGzb",
  "key24": "3uXJgUV1gfBWCp8st8p6u25jCgVqh4LSYF83aemvSG2LobgbJjasHeDtmySRJUennikZ5gx7k8CyNMwRpUy662mJ",
  "key25": "C8DHxwpmPynsuJWppsVXY97uS4SqJ5hCFbarJCSJGizM5J6T82HTKeiU36wP8BjVUfEw6P813ffWNVK2ZeWN1td",
  "key26": "JVyrGrMve1wBHBt1guTyrVs41k6V3kbgXB1JhGDSMc3Uti4Zi5xvK8URmJoviLbePfQBDNkYNG742z33XU7fCuk",
  "key27": "LKw64ynFTR2Qe9xys6QtG6JXs7LN5FeTnSq3BVuo9iDfugBb3GbvpufxDQPpbiU8EAKuCMkvfq4mrdewRe6HbNa",
  "key28": "5TELvWoQNUgd6T4JCgefSGa5DF5ryVGA49fwrBxXw8jaZdXpxBSwkBfpbWwQdd1cCUitiCYjPDmCGDSJpNbzvcBt"
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
