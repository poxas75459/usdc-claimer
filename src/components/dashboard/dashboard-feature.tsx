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
    "5u2gcZWq1PGCDzehtBjfP4nVWaxD4PDkmsLsA6h7nMUHJ2wct8QJLLmRvJiTytkyWvs8pvnN1WWzyYngLtu1NbSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oi5gzhEWDyAWtsXK1tpk6LZna23rGJVEEVRo5FVSywfqXqJ7NAERhXb6Lzp9kZxtsNnyHVgaVaGMrWwkwvrJnwQ",
  "key1": "3vm8mCpZ12Vsb9rvzaZtY6FzDYbF8WudZ3Xrj2DHUXR6fPjx5PUfgcXaKXXRjbLmT598H79zTFMa4GJdaxJsoBfq",
  "key2": "2sdBNu2926wrfVD1FUvivqypyJD8BkCwvEXN9hua75v2SN32Y13z71QiqQ1aJQBhC2G1ybncJpQ6RMaf5XLGdPrC",
  "key3": "3kNzptZDN2LppEvhQr89VVT2zp5sUsSpVp5P7wzVuE2S7wcqTq4GRaEYsbzHMbHKDk5WgnAjfNnhNKXMj7uq1ban",
  "key4": "5sV3XVBM2PYQNWGAQsS3W2qdP2gB9csDMztznzYjEhyZvuga3M8qETJiWw9hRB21kNxCh26fTpFdUt2Yn5z4H5RR",
  "key5": "3kZuBwEQtxwDbGbEPB5X2w4szLqqUusnNk8yc9woAvoamE9MyCPE21TBPaR9rQSHGLjTqqkV4FZRcDTce3PzWULS",
  "key6": "pfNuLHuCXMDCbpYjiD1AcxBzc31VhcH1EdDjKEWGdJmnhBJNNqfEyUqiLabLTB6GeqzV2eT3fnyaiezaV4dP79G",
  "key7": "4g5qmK2CJ7wNhgSXMQVVJcbMNgtQrvALShhpjttkKYaUJrfjMqy5yNnvvu4ygj4jZXtPPt26DHWxJXfaKmxPimcc",
  "key8": "NZhzBmxbHEFnHQBbxZKRs8VifXHLFrtds7etJ8HG8Pvx23wu6wGFDUA9D2Y9rL6UkBEPWDwS49Kcs549tgx6g3m",
  "key9": "uUdLcqFfULLxEvskTGNbn7XUnSXZLWsEZGAoUr3z4UVdHgNwkVJVDW8m9oGWExorEjDZVuvsY7QtgAfMrx6N26Y",
  "key10": "5FKaFWrWRwSvwXGt5EZ5Prh5NMrkSEzEy5bLK8KB6kLTE1K3L4iGvVtc1wboUKPJv1ZjGcxiCPSdhUER9BXkUTFE",
  "key11": "3NEYPDAm5B8TfyDk4MiKVLzdtZxuvCQ4p4Zi4QW4Js69e7FiSxc54AGLZNiMfGEFh12mFrm253WF4aw1ndTmfTX3",
  "key12": "476hkKYKF7kR6KdGGgMK5mnknZRChULjK8CbAyQ1SDUKHiQEu4mB71GKQ6AFDFDo16s8svkErLaS33ZptutMsScP",
  "key13": "6ZQ3K8kDuYaknf2B7sqKeAosfBqhUw4iMP5pNDt3XGR4Zs65AieHSH4Kt7cJoiLWA9q2torUSxUxPrr7s2Eue2n",
  "key14": "5wzWPpp5HTqz9qfgBwdmpefHuZJvB5vseMy1cmiuaKcRriMcmJCjhfYMrN6GUwBttmsd9YPeMA8fqdhPLwrVSFhJ",
  "key15": "2CLiEhLxyHvw4T1UtAGbTWyEc4v3ALcSvNPspKS368V8CMT554Hqo2a5gtrAENUWtE51rAV7ZK8NxjiCMfYpydaq",
  "key16": "28atrz62EDvrdPGrS1iAnzMaWdJ6WmZaaRMQufaJqAtowAuPajA33xeCxUWaREfXZgnaNwTPvsm2NKZMRyYQqfns",
  "key17": "4DMocFihXPgebdydVbZoWZBCe7t8CFMMRY4z8zRDhKwe98JaRy8pMSPcmjNgaSnzkpiSt1eDa8Kw2EBgRMCaxbS2",
  "key18": "3CbHvyBzzRWFepAS6dzFf2yeuzdMnnc1SbqKsrTCErsbc9MRx4ityyUr1Bo4ZRZ691q1mY7qJe97dBpTHtKyq8o9",
  "key19": "3sQf6xe2EjzvNTQfDFNbTsAgkCjsGnypSRUMPbKjf1mbrvhCW2ihCjkHHsYQKkj1kZLBd8zU66dfRi9QTSpGukFk",
  "key20": "4RubdZLYW1atgeo1Jp6XdBDBjZCB9ikJjnPrGgZUTi1TcyCCw1jJ6G4Pt3XUZdA6wceKY6KqHENqxQ1AKSA78HED",
  "key21": "2pUR5CZi45qBRu8aU2zKVCRUVPZDhdFiMErc1T8C65uxef1vGFpf7SJcHcsAMqE7iW592yb6kBji1NPLSmsMZCGd",
  "key22": "5oM1GZofoHK1TRYc7hLWTv1WPU5oERkRMfYzGQSw16uLiSMM8ao1MDTUNYgbhaLVqMbaUgTS5b7HrKe6yQw6UzKH",
  "key23": "4KwfisUVCqQV3YiFdg5eRQMUpo8okBRxmYviNErJAV5moCneoLtaqAvHT6Zdf5ZgZyiKXAWASkFEy7MdbQoYYszS",
  "key24": "tB2b9Hy3V9JG2Fzmf9hD99BjnkbSSUr9KbtH8znmmSQpQKdNWPDMY9dAuvcwJdphaCMNHikmsWQwkrUg612aVyS",
  "key25": "4LHUVPPAT5W3YBfMeJooCd4TNYvcVjKh5kQcUZUxULDpTv7kpXEnC3fj5bKybfwteko6txD32LChrNFJzw9RNZWh",
  "key26": "2v7rqQgRh85CgzWfhAggLynRdmnJSrB2h3rP4Djvh8F3F2ZtFqfKRCe5Zj1KNYrJqiMUiRvieD8Ygu7isXo9TNKP",
  "key27": "3JomjzGN6YdqB69XsRDGNfay9aBcbEK6P4ZHX5gGg8ZvtTwkLQcVx7558Xwvtbrbnw8FQQfVgkEq1KJwSynJSRp"
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
