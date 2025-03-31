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
    "2UjjhFNCeQ4j8V5CxuHCf75cuD9kg63VS5CH8tMv2jN2XouUSiUzUtZNYmNzXDS624UBH7RYjtUAMXT3Kq1dzWua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQQPh5ifU7VctTComzSqLrCYCetmpuSy3THPKfkw9CToZPpnCi6wyfjVKJizwxL6bNfrUapptFeMcsyLyFpbfFH",
  "key1": "tPAFw3sE62ofHfGM1RC9zPmWRbRVMuSFGNJihp4xpCQu7SHD3fpYVqhFqS2MCu2GWzxghXCLY36rUYoHxUB5tTR",
  "key2": "4XJWkQh4mo7xsdENfz4esKEWMxUNndef9L6v4UfZcQs32u1LbU8F7jmhvPTXWXxWvyMQdUKpEVY4rbH285tLnZ1e",
  "key3": "rW1veM2aA7gp1n2suLNEwcYQGkFgUQYYF8EmtvnrAeCXLB9c5e4zoBLid9MuwaccsjuuDEmpUHg6ZAVy4eRJh7k",
  "key4": "4ygHXeWWQbcXa5uFmhWB8oCJvPvoaSujwoEC1CUXQKNeienxXaGhJL3aCaqDf4tunEBVNhzjd44ss2X2kkE6gvDv",
  "key5": "5FpmbAmEq567XcBG819MHSD9nQtQujNfmzvb146Z3LyGN66MQaF2LdPK4Cq1gbY1WZPhJoxfF1unn8zDM6E8LthS",
  "key6": "5NFfWSvr2KFUa2MeT757qHkuqLVkJHWLdE7Z2VpSMS1h6fWtHSh169wVcyqwyjNovNdPytJ4kjRDcZSxRVa7YUCv",
  "key7": "513mQFuxvxRjzcghfA5u3AqRNGKpbxUdzJ3TpxM4EatpkjLExxCCXdRgdGRouGeAncYo75g6uwm78H1SrPF5ESBy",
  "key8": "5y4ScKKph1mCKLcSeZufwSqk385r1ENeQAAvppKKQTDb54sXVFYEoF1d3cgVSFSoAcTTPVzpCkAoq3zMVkswET69",
  "key9": "5M33q5gQCXQhEqeJB84heyXeZYWDkzKyFzn1XoUGyGXY33xJb2Eupovj2vYyPfuQ6yb6YmJcUT41e6kzceMfw3wm",
  "key10": "3DFpBHDoybkVbea6s91zgFKRWLpMnGHvjpqM9ZB8iFdnE84P83NYvH2nPdhyvux1L4vqkd1RvCYM7WqPP4NFHQNV",
  "key11": "312dAz4fZuKQZP1m918XPjVccU6vagfVnJGcytm6JCWR7PFBjqxRiXqPK7wE1fnS1o5CtP5YKyDT1ghCc8CZaFeL",
  "key12": "2iyVWrNEpQsBiRK63SifY6JwAhCoZubUp4ozLdvUrgdueQC2g5u2yWiCAiU475GGydSm3fzBGeVW5qGSo2VKPKpS",
  "key13": "HMNWnAEKi1fNXvqyB3xw31E9QXKisEs35KM2j53D2C1fVx594pzDRiTTTiUBUBkjeBsSy8Jw2nz1GfKDHGproQA",
  "key14": "4Ljk7q8mhUfWpwvWGarAKoF6jxqUmFq7UTkH3vTg8YfP57uDJe9SmbGHHMcJ8Hy9SgpqMToSJg2GrszYvqJw1z5",
  "key15": "31a1Ngu4rqr7YcwSgihqvHf6Bw6bn6FJtVoZ84UrFkTagoRveyi5Ewcazua8oPU526NQkEX479fXy6exrCpAjj9r",
  "key16": "28z7QLtriigLcULKiYw3HXKZa8Kv4Zg6xZVUX9DPYanSCsZqnyGJEvDG3uhZoqbvycUZvzbfubBnSG3rDNP59uYF",
  "key17": "5Sag5syqwnXHCN8i2pukDZXs1nCPFEUnwKmfyhnzFvTTKPRf4gVRee2wmSbTo9FFig7zHVzDX6AG5zMewVZEP1H6",
  "key18": "2FWJqG3fCocjVnManSJsWB3ZwF2GLkHbsU2sNo3mGMhD12f6ALC45oDnSb9zX8f4c1d48giJVDTzXpgcF6FTsSMV",
  "key19": "4bcRNZk7t8dge57PaRSSY3ZU6cDMDnw8SXQnqtf84GQdJ9ALFnwLeT4sN89eoNkf2DbSgcbQ4CDH18iHAhCxTvR1",
  "key20": "5AnosSNt5jH5B5px6Xae12pEPm4ouSKk88CVTmqR9BnosjNpNN2RV8mcXetpFwdSAMmFjYudpKQtdPfZLSyx1WZb",
  "key21": "44W1vMA74tMww876GGCaPw6XsNFBXg1eKyseSRrgGdpQNeTM4yTGjBi7YdwCafkAQSHZ7CyvG5h35Gwi2BJ8CAQp",
  "key22": "4Zr1aQm4GsXywN1KGBzZkz8vEhS7kzvDcNyUrQBxmo543DQD7xukoVXcjxZiCPvguetusVVvUyM1NRbYj82JMCej",
  "key23": "2hMZeNpLR8wF6zcKgGidNPd6DdN6pPGv1qNyboQjvxtMRz5xQESbf9pjNXMMvKK9hR3mKffgxxsNnBHmM2m51jaz",
  "key24": "4bRjUGUbWhBpfAnopy2giDWc9qU7EWqoNAZRbvpABJtAFEiiEShZm1n4pn57H6DbFcAZnbYtqVMbtFNNM5C6WNxb",
  "key25": "3Qveqk6LQSM7MnNTSXGesuEWG8rUGPDc4PH1YpshGxj8Kepfp4FSpNJiRMDoKZpuMoRBTTazjn6R9E6X59xfSzkh",
  "key26": "4FXvC2QHMR8pGyRFZ6LYLWSiyVraGtdU8B4ADyEVqKhTU7yTnyYjaGAt5ATkKVBxd4CqcToXhhPYiwrWvEpRhWAX",
  "key27": "5LU3qcpWDWKptZXBWSehTiExrmuVmfrqacsZ9HLpA9gs1xoKx9TuQq8PNjP48sQFtD41fvQCffLHtp8sNcXb8Ptj",
  "key28": "5upbz4iYVdSWn11UGLSQptFSQPLRMpU2BBM7qh7Mj2P9efApp5ZNixt74TM6BD6J8VcWMSvc1hVKaNcfj94mpeU3",
  "key29": "XV7WEBGCX5NeNFmERXpbuXEzNExLqPVyZrRBYsxsRJe5M6Nh9gq6jTx45Ko8sRb2KnNgJgVv9x8zu2iLR4CZE6y"
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
