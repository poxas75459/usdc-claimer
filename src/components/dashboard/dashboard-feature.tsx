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
    "3EmW2oEhhieDidt4QSznd2RoH8apTAYqWNAJfo2RvhFnCg398vAioYjmDP9ZPK1UuAws4CS3ht9SjLmHJ32Px6Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T3hMgKRaCytkPky9KwjNrXH64zGLENm6WVXuJRyqJPigW8eHkxt7iiEcXNfa43TTcRYvXH56buu7sT4smrh7B1V",
  "key1": "65EakZ4quGyCJKrJ3TGXHUs3wHjZjAASCj8ao8a5FFEWudcGwQHN5uWmVrd8ze47y6uy9V3SHURJuQ28zCSsFriN",
  "key2": "2YhwQgS1Fwm6JxGc41WnzTCKYiJoj3JGke5D9GoXU6pXUHqC6hXotuFAq9cYUhpFqFfqTQtL9q1Z5qxmDk1n2bhj",
  "key3": "7ixKcETXzrcy835mPbNYXjFhLv3BbmWbk6m4agPVK845XcGNxn5DHjM5LGHP3EbxnNFwH3Tg2EfPPvGMWQFNFJ2",
  "key4": "6vLn6piipi66GFeJB5hNAfrkjdWpVUs2P3DD5VJUkk7EujtXmUMNTDQYMvKvbqHxxvPLr4p7Cu47SKYpX75EVm4",
  "key5": "CRaNss6di9tUVQ7qgSD2YqkrP6hwNh9Jk2ijpxD5r3hL6eJXCiezqaPcjH4DefmjhDfDFiPeMEijdW1oAjAFGq3",
  "key6": "3aLRxauVxrgDvzLML7dX4PJgtERxfKYWUBm6sUCjT61dmbPq8bhqJk9gLTUWQcRtpKrAZXG6DLAG7BQC8zvuvmqr",
  "key7": "65MXDGepTGUiBCnreiugmtmn62Y9sqaUGAz3S5Mrj12WMPKQ9L2LLVuo65rrcNCe8CrSKRW3QrxzCKpKguo2jtkE",
  "key8": "27B7K4P7zH2FttNbbxVLD9nySLEJKrTk5znuLWdjS7KWcBB35PfCxDrrEzjCznc1gjmNw6EtvFRe2KfSji9E8ykH",
  "key9": "38aU1wDMEUR24s5vcfGEEaMMDJDwCmWgGDgmbji7zDajqV2pNL733rktym1mSkvZEG321ZPbpTm3daBDCoWPqDgG",
  "key10": "3YotChSXDQV38Sc7PgLjwxKn6F1WFBENAfqbwSF2b8NZgmzFQVY1UFp2Gv6A47Pd3jqkkWpPkgdtf3nWAseEmrkP",
  "key11": "41LX3yVUYftzPqNaUGEtH5m9hT3P1cFNFTsrkX3oWeDmDP2xucEzY2HaF35oRYEYGio9vRimFEoXnybxrUoJAUET",
  "key12": "5cZBjGUY912yPVeXCtsf6xNrBvCXEXu4qP22PGkdkN6KedLpN3v8cNMM5VmwF6uTufDf4bSJVKM71RWnt6aZpXbj",
  "key13": "6272x9EaQPDx2NgP5iLhHg1m2Q1SaGsYz5UyshexmDsta9UPpyNn5N6k953DY6qtPuD55tkexTUGcRG9kQdLpGzH",
  "key14": "dnkLrahzqG1BRaiiQabvXqxNGqLTUmQXWWy9Eve2yYNJDnBUMF1EMN4KZZG1TCwgefkv8ZY6krpe7VvA2x8Ltad",
  "key15": "UdFzUeM6oGaKdRpDPQ7QtE8YsdVXcEAqoSexKDjUJJqEPopfU3B3Fht8w3zGRwNN866s77AoJ1nckHjZvDjacpp",
  "key16": "5zXCy4BsukFqk8ruMFsmH6u56aK6yKFiSQAJa3YnDwB7B8mg6Lc75g8itpXq86vwa4d4AqJcAY437BxrLi3cXj1k",
  "key17": "3WWRqeMAqPtxyfXmxGedeTnzhxSeU15PeSZ7rKaC3eB7QzjmPs9poKf6qvBiXbimZtkW8KqnjEs8eqrvXCt1bQmy",
  "key18": "H9KKEep7mh1sikwF1P1wi1X4Q9Ght9gv1tjcXZdeqaeq6XyaP8pGBT9DVqX1BDPmaE1XacWvawjuFtTQnrmSprP",
  "key19": "47aNfQXp4oZQRJG4gzVAjigDdrCSduknVuugnMJ3aP9vvgpZ8D9HxBBiEANUhBmDudCU7KM3bMJSuGNCR7hBwscQ",
  "key20": "p1PUNcsZLho97ESNp7NwravfFSbMwaw6ootKp4a3E3YgnAQh26Ag739de3aTaggMPAALRiYmR2Pcotsx4dhVAjH",
  "key21": "2MrvoVfpzLaRrjFQQtRtRGERuGsjPJW4DSmakbSYLfB3XD61bfTbFJN2KFS8KEM3eMdaUqepz2zJ1BkdrivnFdHc",
  "key22": "3gvFDGzr46Y3PKLqUwA84XmrNGmdBvnyKwUx1XmdWy3rPqihiHMbKMnYRdtEET1SNwwaRt9BPxcbsBNz1d2bFZoi",
  "key23": "62KLZxzn7PYPNDECMApHeN9MXfzkpJqP1oM9Ak7qJhUGHBs7F3ETkS92artQbo9e7KgfiXuneQk2zTNvp4JC1s2B",
  "key24": "4DpdYGtpWxjTkmfceCggG5BW6fT9mCNqvdxffy5aAqmSjax6c4XQYby6oSkCKd47GEKHYX95wzqNsezBWtSUuYBN"
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
