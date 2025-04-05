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
    "cVqvDL9tsSj2kAsQreysVCpFw4LrdVY3vSKfcU3e6Q4yeaVvPkyo6NMRJEe9KjWDEbU8XKQiQuHvBfsvHPHoYa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5baLn5gzAwQ8RiKqeHvrZVrHfmNtgCAq1q6anD5hMDWJh4J9zrajRZkxdKUYLQyoyujQZ3tpc434FSe99PbSQVAA",
  "key1": "4nuKeibfiZZo5xoUk4PLm8wYnNP89xfB85QBTG6U16Gu1MMUzo1DWZ2QDN2ajZvgfZm1LkzDEByuDJZ8Xpr6Br7o",
  "key2": "3GH3Uk6UoFaXrwshJiXuH6vpPoyF1mEkFUnQR54z8Xs7wLZ4EuvxA1qEeJSZrtxCeSk1Uv3jbawJiGabYJJKdCBT",
  "key3": "WJtVKCzDUXpFJHKJ2SoyPmFE5Z54mMcfQ7TT1Q79LqWYYJug4cVjbo5HC8cbEjMSi5Ecre11tiwGU5FBKn777qp",
  "key4": "2G8JUcqkH2Y52mMc2go2VuAarFBnmebHvZWrWzToHesWTXVVKnAVf8w9sMitUZxa4BUQpBnxV17b1UeN6EsTr8qD",
  "key5": "5bA6uFbAFV3dMAwYtHb5zCrWDAYjaEEth4os97qh4sGDb4ErgGC23BCGZCc8ZGthbNBwV11bXeuJKj1E1Fi3PuW8",
  "key6": "2yUqED52pCebwCvA8P1c2krRTWfR3BR4B7sAESbhg9chTqonkPbygVANPLwRvZhKfMN3tZD5yaitZKW6gdTU99G4",
  "key7": "MgrA41KqiaFCF1BRHhgxTzKLZKkaVYtbqWC3B1NX443XAMjrtDu1aYm196rpTs4jmYKUCJ79eUCfh6ZJxXCbopw",
  "key8": "jx8isjgi2g2gAg8Ad4FFHFLAyc1MtoKxmvyo1fbP4Ap56mC55yhq4ctL3xC5pXd9UhwNcwg2ngn5KgqMaSbYbHU",
  "key9": "LPEYbXZTokLAZTxrKx4mzpxJh7cpeDjZew8RxXoEvdVRdH7ETQaFJszNGuth5Jxz1G1VgcsxWbkMbGTseS8AZxx",
  "key10": "5x8v4CCGonKuYPE8XTrA2AK5mXc7NGDuzNyU3Fq59gYZrXc7DF41GGVPGTftDLjABU8dTKzjXAkUTQk14i7e8mEj",
  "key11": "4wdByadHzsM1RJQVLZNJvxXgC9UNmrBrHdK3gQYfWqGYchrimkgkRADNvB4bmd6zyW2bihd298CVFjBXwycdo7UA",
  "key12": "5Zt7trWRZLwoYk2ve2HFCW3Qk27yf8ghqZMWYruqdxVbwaJaPj3tw3hgREXWw477Bp9Zgq6Uk49NooQ7mXwwBUmf",
  "key13": "4kWzZhwYEVdgy4HWDSh2b5BbLqh6e8kPPf11oA2FVMzg7a1sN5sByUVBrU8Fp8smVcjuvCZtL6MNKXXScZkdsv2r",
  "key14": "DhsxF1xc4uVW3oTDwbSQHSVaw1tLWR3FTUtacJsFXRj3PGCEfDeGpWPuaufb6iVHB4hSSfcD9nELN8MNSpiCV9L",
  "key15": "55z2PEAK1bJ2cUvY72YK8FpCwyKjz4cEva398GApQBhMT54b3vKb1k1aEhbEQH91VzauFdTvDiQ94cDN5j7PZqwP",
  "key16": "4RqfhSdAiDwT6NMcy72hnWmmCrfwuy3WGCLRYDkdVgNHwsmxvHzrLBtDgfCiX8fFvAnQ5STPQLW3v8CYFnntUQyJ",
  "key17": "FujcUaAyQSemqJJY74VNsuviZhiZyNJWV6StaC1cFKfLbtMg9pKiPxDoZqd3ecs7aRSVGgvVwZNz8Bxpw9xXMy8",
  "key18": "FGhzmN4bsXLvBvt76FEkhrmMVn9n5tA1GZfsfKxskRDkZQ8zYozeAw9zr1nC65WCogzhVX95WY1zf2s6LnGBNCP",
  "key19": "4m9rUjNfgDV8T45kqhTMWnoBEtPUadA9KyamyEHB5Rjy3tQHZBMHQ5aQPECnMof7ySWEA18yUoCjmJYZ8MnRr5NL",
  "key20": "5PAiNDHcQJqcwUyfQwp3cY4qpQbvGvMMzR5DnM9dUcPk5irm5zYYjEzwgdFZBuQZtydSFuPpZmZrs6GjzgCujvs4",
  "key21": "pc5J9bnzWPm6yVLsQAaSm1GjmmU1eX7sg8EcbgGwjL5LPYS23Q6AfQoBRH4GCXvhyqM4DqYfCkDARzBXXkb7mCK",
  "key22": "5wD4YR2TFLrZn84zYq9GZD6V6NXu9Q2GAT6k76wmrnJy4AsGPZ4nFjkdngQDtjT9LvMLDtgxy4bUQZjvzeno1RDg",
  "key23": "2RgjcoXkNTzi56u83toXU8H8GKE3MgzkX3MuV7qqkKmjMBUacz3SRtrQPSJyZAcPGjvBjG8JAiqE2uXhBc462xyJ",
  "key24": "3eLhoy2d9BptHrDWkRas6wHA4DKtvCgcGq9AMZNbM18u1GZWZ4umYdMPGok17ExW1qbiTv2b3rXVPBGCTx5upsCo",
  "key25": "4SxsiEyCNd9nMWp4NeiZGfZcTK8ez7R9mBB7f1v2vZkZHZDcrycjKX1CtT1JeMZwrJBjdrhxBo7tBCdTZXZf6KMA"
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
