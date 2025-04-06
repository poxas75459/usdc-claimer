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
    "3h2aECJtRNuDf6XGYdoX8KrmTqXUMjfp2ErX3HJSEEbSvHQNPdNTFCzbFtJ8TN5xMkytUu3gn5191sb41tvE47B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6ZsUhJKoaSkT3SF8s3VFwymZM4eDQ5vcRCAEU3uY8LGeyUJ3XYZjs3uqAZyaDsuzn95PXH7x9UapiTiNFUtf4S",
  "key1": "2QHZZXw6CB3JF7WxA8ZaVB1P1HwDLYbrTKKoYaeKX9CjjqN6LDbC9QcXGjBjnwu34ku1K8VJSMxd5dEcBZMbepR5",
  "key2": "3xFMUufGjcnBLYPBe9Nr9TMHEfg5yHShhDGV2V6mZeNA12kcWTQfUyRNgBeFD2dwLonaeZJsWXagSZAyv76bg61J",
  "key3": "4FwqmDb6MNgXGLgNdSeSpyf8FpFq884JjLqYcFUjfjgXkV7EH5hFAiCYAfR4h52XiC1kjSLw8VVEgF9QcAsuYXgG",
  "key4": "Fbd9bc8QnLdsY7ejFPPLwZtvFEjgDxafjDTSQ6biyMZFuzFtmiVqHCB2rpCvBaQ8GosjDk68f4Dv3NzzH9xom1p",
  "key5": "63cjahFCdYX9DMU4c6PQT2HdzhBf88ZpoE1mEPEDEJKBptHBAZB4o3CxhGyKZQ1KB3NHBUExBBpc2shdUmgbgEvB",
  "key6": "4brbk4goNib1sTFPjyk6fi5ewzaWQyx7HYXDEY9Nk3UcJTei18E9aMwBJ3zkNgJxkkydaPLXGEqeyZH9XLgRoXPp",
  "key7": "2P4sZ3n4dcTCZZLKFAVpQJsZvj9Rfy9KusvsbqjsKiGL5P1n9bK6DYCiqUTtqGmv9TneeFpzZbiWwfaLQc4hySbK",
  "key8": "5R9koLqo5rf67Rm1cEZ3TP5qYWZ9QhwBV1J22tBoCdMxBCaRLK4P6DkfofczAXQYvb4n588kaUbMwVCNriEoKmci",
  "key9": "b6ZZH4rN9EWoPMoQBmQxUzGkQ4EQhNdgwoRdWDiZJgNFJ748LyXh9cADxZH66ms8UrXWU34Sg94WePTwZpy81PQ",
  "key10": "48dzLq5BJSQsZK4xDAc1kHJMz21XAZdT3DYRjqLuum5uhNKMhaF6jjpH13fvbgutCPBv6HvM2JGE357T19ULM9im",
  "key11": "3qzJohVnwgSk5GtgnHi2z55skwbp9PUMy2jqZPby8gAZp44t9JmXJdmQ5m3gqbLM1vDr2znAgRnSm7mpNLyEKNzF",
  "key12": "4GVcedDXuN89bxwzF1T39m9oA45GSGmJePjQShrTTBPKXjR4g4DaT1Yu3pCstA4WQJEKnBfwHBNznEPB3EVaH3va",
  "key13": "5GcRdhDrb3zY6smfvyczLtbmBUEPwxonEzUF99uD2VVGTAcvsoY1Xn6BEaHBUq9zd5GzAYeGwqnztfMAFEdZnpu4",
  "key14": "4Jb8m6UQYaSqEVQGC1mQqUzDcsVixT4S9LYpy2Et8pKrnZxXhUhF48UfA9We3LBHcvjjpcHk8vVvkk2tMTvUqJnB",
  "key15": "2LMbKUm5i47qLXzD5MNF49FzK1nCFMZ5poG7MzLMdkSBBrSpUaLbp4ttYUxkPHQrnacDZRtdSdFn7Hz948mGYKPa",
  "key16": "2phS5bVn42EeFA9k8knjHjDpMnia9MBJzPsKuqUq53t1V1dmqitUatcdhXD5qPmFvYrNyyc4tpAVygdXtwZoqSBC",
  "key17": "2Skvt4x1jnmNWREJgUu1Btae9x8m7NDeChAHJp1V9VQjobKoU24dwG3TVhsTzu7U9jh5TsnsfEmKQXNzpxGKhzsc",
  "key18": "4jM9Q81bpZx4owWPjLMtK3mg46HhX2YDhEEbPZhRdDPhvSLEyc7ZvUrwcKjFQJH9dJymFSBGoegoBZeoBQ8dYRvh",
  "key19": "2af7R87ZqZ1aZtHCnuoW18VNyVoQ8P7Tn8wmQLs6yYHrkSCP6RH74Zg4rbhjvf9patDQ2wKMk6RjZxVSxDbT6fvf",
  "key20": "3JNZsbd1ewGwS6aJzuEbRXCMBS8aHgDaSRjZtCEGMc1ZtigD1qCPvTKCcFP9JUduntBPT1CqZi5ug1SwC1G3o1Sw",
  "key21": "31GASLwv9BKdN6QJourvKbABcCqo6eiQ8mQ9CAMoxLnnCaf8VFfaKWVoXv6HxmyXjGVpxeGRmwAA7H7wchqgfaVs",
  "key22": "j3RTEcacWkMAEv7qYqsADPJPpa3ZSREzKpA6632g4d1T15mBP9FmEEoRzubNMy3ssuwcBBoJWmttP4ArJgeuZUz",
  "key23": "4FcfqyYfGKTBmmgG7k7g9foscSwZfkGHvBJoWLhtBqkJkMjmv61oNxT6HEZ3JrHDtD6TNUc7GQHP9ysdW7q1vqHr",
  "key24": "5CpH7C2nCaxVqYQ41iUpjRBWBbwc8GHqSjgVbEPuZ8sbcEfdyh2xmQkmAa1FPdsNrmf6BbTkwEUtBXeSL6RW7Yh8",
  "key25": "PaJxSN9hQfHeF2RKJBRkLas1Q458gJX8fExNeXemdDQQ2jafoZSbXAyYa9FAYWwE8a7PHtFLCLaTuvQJG1pLYki",
  "key26": "4GMzsKi41x65QbEemA3ZaY62R16rGZ2Q9QPQRkTSdZLWk8PmfZP99yZCHPAiEn4D3BwnmHiTo1e1cy3KCzhCEEcc",
  "key27": "3vjAbTxsSwxkD2XgPdVkg5pQne6xh1snzYGiBvwUwvGPGEhXvDQESht6MhrkHDYoD3oWmJTPXfj4Xd9FXa5BwGPJ",
  "key28": "4fqejMfNRLXVyxHP7Mb8aSEvcQnmK1jbNg1L7YysxNcXNruofWCS1U9c77Un18Atmm5VAsUGut5wzRn8TCRvphNm",
  "key29": "pK2i6yZupUdMgoNFdAZCbNfQs7cageHwFD9LkQUBHhHFSAary5P9uGQZSpkWbczuLHK5PdciVokiH8AzxBtyb9U"
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
