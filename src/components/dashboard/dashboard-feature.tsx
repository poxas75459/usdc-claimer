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
    "57Ly8MbXR1qwVbtiEZvkSHgcPeARkwYRwWDFcE7meQPif1cH58jhu8rQV8xuSwg4PdTBF2J2PzQumNVu9nKGaer2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eB5WexW8kqRfRofKoWvZrD7uShy8CcoH4VuPs8ouR49Gjuy9GBK4v7gwrrkmyFF1f32Gtj2PUT8gnz2qMTDwK1",
  "key1": "2Avd9UJgRpEEwghmt7hWWUv2VCrYJbiH1XFzePNiL2Drn6goNDDfvSWbas8d6M147vKUQv4Wb1KmTkwPQimaVECS",
  "key2": "4e157dsYqHWXUkUhqPswpCppvYAnxA5MZACm8HpGgptYJegw4LbAet7ZMswd93RES2oCRSQ6AqNVgaaEgso7Njwh",
  "key3": "5zT4ZdSaK8C94PMTxdgZha6SRWraoChrYXmVprDxcsMQa4xbzHMFebUgT3YFX4uQk2wKi8HBEpStgHiZFgoqoVAd",
  "key4": "2BhMRVuydtYKSbRMzzHbtP6jMfZthJZjchfF55WSMm8ypubWnED6LE3bLSuiVrpVFG2eiWPoAFtxZxa6Bmt3yQiF",
  "key5": "5kE7bUPpcxbQuTh4UNFLroHDW7QptVwXbqNzn8uaCpNSHyUqfR4Qr5ufu5M8dbQBaP4g3tk9JsGgW4N3c2gbQieH",
  "key6": "3D6bq4yKfbWMbBhVpQEgUvhMeCH271QCH5MPMq6pDJSqBoRHa5Rrf2x5meTGMiUmyveqVWJxnyb4JJC4TQnAHjo7",
  "key7": "itVbfm8111dUbVzaPPLvDTNp3L6SqfUc3kg3eiu1q4mL9MaqUPpszbCXwNTVRSfGXqWK6iTeBt6Nocd4rgyKqRA",
  "key8": "5qQUK64bk8rWzf99BBMoWRZqgPYxPmymoRfaRtBFSsc9mWYUPVbiSmiJUjyghrsR2RwucFLSVqjoqvbcdwxUY17x",
  "key9": "4rDfEd2sTveETUNQdyNU8HB3hxFR5xh5Kp1UCxVCYZ3vJKDdcXW2p5XGJk4MW2bd8WQF6Kn7yNE3TRL48xKypUnB",
  "key10": "XUB1HmCjpqZqiTFrn4uu4PQogo5QrZt9SAqrv5aXnFmHVpJwg9LJxGfdKwisypboS9PHG9RVCxBEtexn9jY9Mtg",
  "key11": "4Tnu99QVRSjz4AQcFXYPfUyciu2X1qFWtt1nvpFgoMfMHzPQ7R5guySX8uypD5DB8bWXQmjERdtoLrH6tEU9NWYM",
  "key12": "34Ja1SfNv8hJkMkiyjSWB9sUwJbNZVcyttSWaEcMk3yxnS8PEbqEgirnXN6p5BXajWJb5ExUo2phLLkiome5pZF8",
  "key13": "2gJTnaDB2JikVGYGCVf6eWJb3ZvDG8NaA8gfxtqC4TEcnZEeUehn5Y2z4i7nHQsU5CqhquFxkVnZY7gojiCPGrSA",
  "key14": "5uEoh6sRBZfM67bJrT9znuxrfmFnEj9fUN9H5osfrUReGr4V4NDeiJq5ASKZT1sVxenWrN3xpdaYoN1ajvZgymAa",
  "key15": "2qxiZiKEfth8vkydMVpiPeAixZ3pnZiDJYAY3hjabk5zRH4ev6SGUpVNVGsAV55uCzPpdDE967yWxp4YXdV5Tp4J",
  "key16": "2nMhnrNBqbE1tFoGNo5YJSpvXffVaSFYa5oeb1GBLoYdL5xNo4zHdr8iveJeijwoTL6PVPVFRWYjUpRnt52DCkTH",
  "key17": "5591M7NTEiArpFqh3XzonTfEEpkvCxad1LmSQT3VMv3GvsK8N1t2BZ8o2zGvKEshVASKKUWbZpGvwLELydtcUBbS",
  "key18": "5GudF2Leg6X4hoUwP1Tw9A74UuGy6aw2KfqL9ZpPD4WJzrujEPu3PuEThYuU7oGFNHft1KkRmDxyxXLezgj7Jtv6",
  "key19": "3EWxfw6sAYaEBNSnKSsiJtwTAeidwxDEAxHp2FFmKrtYvEwgDrvuHfUNKDTa2qH9JKC6DGKjmoBMvat1ybn6WPnk",
  "key20": "2f6vFESr7iBM1vC2vrdWWXPq9yXp3bWa3VppbdHPL6gQHJvHADCsidYY5bEUeJQ6QhSpkf4a88SwotWan88uCmuj",
  "key21": "3RmyX8rkfBLGhEj1iCJi8GuTTjdJiq9yvYpHLtSNsLEcw2XpZjAY99Dk432zMLtV25K2Kq5EHXsfzLXwhVXHwRvR",
  "key22": "5HFebb4CgnpxUkqNS3tPnFvrZTEzq4rUkAmXaWd5bKQF7nYzhuuErwQQ2MJLrgcukipPY3a48Uc19Kx9bYF5Ju6b",
  "key23": "5rC2YuTGjVM6j1WoJa2bvdwcfm8ya4DXvx5ZU59gvqTkKX6emEu8QRLhAJrELNYELGQJkLPHF6FJpkeYgZV5r5rb",
  "key24": "38CRHT6c7hShLcQ62pSrLVo94uw626N2Z5rS1v6qDKsV6a4de1ZXYm8cdsSpZZHnUXr285bF5g1pmK2xvwcuQog3",
  "key25": "4swxZYzgdNZ5WZbxWDdATxtFc5imj5qEbFJc2RfpPQbYFZi5xkJzRdhL86RbHRgfHtF7NCvC86deY1nWwCHtERyZ",
  "key26": "5pprf3WngmeLjdARHkUCuDviYUHZNQUVCAUjGom4nexoCs3SSeFTPpoGPfZwVqYue7xDzmoaMpm8yvsJ2MjcQeDM"
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
