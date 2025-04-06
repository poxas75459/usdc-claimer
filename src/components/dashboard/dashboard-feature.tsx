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
    "4TUvDSsbkWPBgbTx51RfrtDeCXdR8GcuM6RXX95s5bhx7DFbdqgqpjJbSj4b95ZVD3KfCw78h1PB8THoEYUxLcgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dPQ5h2A5rmdNk57FeSnkr8pBLnXy1GnJLyNKRV6ynvXzXnaC7VsofyBiEAtz58BuontWuq8454HQVQ38udrsuH",
  "key1": "5dsZxW7UccRKygoVe4ng22DW2AHHnoEzqv1c7Y8oxQtamo1Ch6hqrn9x1vuBTvMqeQUfntqZsXgjQVgEuUXGyGk7",
  "key2": "5o8GBGZyHaYa1LjmV4kAByPh9pzz42qawYKcNtfE79LpvPJ9eVD9wunp5TfVtbF5gX5sUvs8eFJX5FQuefEpy7g2",
  "key3": "2HezPiXgz7e8J1UabbpHpH3xCbArebFys8RXyP16GU7yBy9meMvVryPaoHga1uz3vzsk52acpezb53nGwDA8qzgX",
  "key4": "482CiuRWb3NsyQXbzX5axLtEcytoiD7phUPoN4P6uxVuDg56LxCwNq2vXzy3sqxWvidqNjctbs1Jjz6jnAVQC4oE",
  "key5": "3WyXhnQds7NesznvkjS2BMQCo7LYftmNMhpb6Fqm1Cv5NH5dVmfyvq1V5N8bFwmesamxjGw5NLLvVfW2g1s8obg6",
  "key6": "2dfXt8tzwerdEM74NQEVE1khBNGj48uw2DYyRKyK2DAGsc34tX7Tkewe7szvGAAqVzfPo1rjZQoTm9Dioxt1Uzoa",
  "key7": "4vWiKLwpfPQ3K2dSRs6j9BbLEKjdGooMVo4sN6bWWnQPfYcQ4mRM39FCU6Cavej61H1fK9aNgAqdqbBC2m1pCjv3",
  "key8": "4YoB24sNcpRjuSwBPJnfNZahNDKwe5sat2qAQy1nWtGML32neBmEB77gECBYceRs3aDq8iHW62Ppcq3uz8XMzWJm",
  "key9": "4wmnUS2VGKpgFwSHpDm5ia96gXyo2XnGkaCmxb4HHjwTqSYiYJMXzVv5k2pwyGD9poDwDQYeVQmMaHuRpAfz4qZK",
  "key10": "FimyqrhLExmWGzdtuieXQTuFmaeVmQoFMwkVG6mxVKVC5VovqXa4QpWhepQqSESBGXS3THNJRxMiLrtDKumqsux",
  "key11": "xfm8gd2xAy4UcwjV46uQE2HJCpoaazumbman6WCj94df8FNb3XqDXeAxiT5zNAjt47bN2nYjvuv1QmwSkgt5WKj",
  "key12": "Q7XvDJj1NrwoPPVhfhMoVFwJwHMVUqDMvT9D22EGL3vFSfVWFeHeJ67B3pYy6C3QaxhxG2jB1qvgRJpQoDrzs7g",
  "key13": "23sY6ewg6hJRif2dcXzCYvuUFaedNiSKy94f9n9Qw7pfZarSps4DZQvc7B3Vp7T1JJnXWu6Kv89S19gJ6PuwrArh",
  "key14": "oeJpUYEfSWvGMAA7yLAQ6fqzNxuU2AuEN2HwGur6qTmuwmbjqSxupjRPWA6t8r7ZjgGrzHfybMBivVkhgDcdXSM",
  "key15": "3Y2NgkzpzDn6DAML1CP3BrpQS2bqduibh4UxgAA7do8wXMYLJWx7Jk9myoXJaxWZee165bNEm4H1NmL6Vwr17mqT",
  "key16": "2Gnpq3pNZrKAejU1c8kLHP1DmLHKgPFMkKsM5RartrzEhKkPTjHmDvNbiHxhYDDEumKNeqVtnmZ7PcYzzaJmBBQW",
  "key17": "4NB5bWqFLePNP8YGoVAeeb8pfmMKnF1Duqj3HUPjU5k2uu9wUdS45f2XpSgZ86NkwP46kjBGyybKRjiRMxZuA2yV",
  "key18": "293j66J41bLVKcT9wzvyQGs79DASywQcBjYVmavvNhufBe46nG4HvL6vGUkx7d9BAstGNHm95QArhGN75aVN1NQw",
  "key19": "3P7TRkYidhtsxQFsNWYBAZWJfbV7eMBEbPkcvzqAoDe4AZsV2AbZ1P1pAZ4gEZ2Gr9A7iQV7ev5xh3SadLvjXEF3",
  "key20": "2Y1y9MCtfRnYyRXxtHXsdpEMpgRG7L5JBfsZ12H3ryKj5NbC8L6qCuSrpkxz1zpXLQQP4GALLwKWgXB5GzRPeasR",
  "key21": "3ZEhnbjSkRznQDom8VrSRe2MNyiNiqpZMJc5mytnqsf1j5AxrPnUenwiCkQ8ehxDcK3LpKwnkGMNseSu3HJhSFNx",
  "key22": "49PVvuDYGNNzwB3VtyrHeyVs8Jm1X37ih4hECgeWCw796fAPuqFP3nFHbawv2SSK7iyoAWBcn5iVdCU2GMjp39fp",
  "key23": "4yQxgfuB3JkMVWLgD6gGf7GpQooajGsbqQ5p9hhVHh8Cqrc5o82882KEBU9TqiWHb2JFyCjgxpKU2ej5sLhBP5vD",
  "key24": "22Q1rR8j1W4FDuQeCHGf5zQzCvKMuHfKFmDEZDUyT1SvwcMGjhyjCJjUTpS7KU7qD5DhEbackQwaQvurN3CkYqVG",
  "key25": "5MY2MQY1gXSgoy9jcmsLRGkmmRkLbz6VmY4DL2zxfQteRHW6bHYdwoLzWVSyods94dcyJ8Wb2dk1Y44dtUjXVd35",
  "key26": "ouSBpKqJ3CsPyYyVEy9sgQ8wWMekq3YohveG87a2egdm61qYxMwHG3WMGSYBkYuqdaPET8Uiy6KJRLYd3DV6arT",
  "key27": "5xAkmT3JVsSYExqyG1cUi8zormaV4oHYMBBnJrRJzKCoceimFNcK9N3bpfsiNKqCWPZR3jJXXiTLcFbDEm3yEDuh",
  "key28": "5pMqDxehpfJrRnJJA8zeark5DSRGPyznicSEUs2VUnx1fipQpoYiEjNdQphHJHPGBdEGVtcjUSuTF5XhkLHx7nfp",
  "key29": "4wS7gs96ZqNvjbFcrYBdqd3T16vMiWfNCFxfDipeKG3oBHjMwwAGw2UUvmztc1pKi2Nf6dhVxArGKKDoEPpXC9gh",
  "key30": "4WbrcrrmMX6uMEiXruJ8C6s1x7T2dAJhjBfx9Z9ZcaUXPtSJZTnJtobrCgtiPR7GzV1AnMvZFGtpAUyHkYU94oSY"
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
