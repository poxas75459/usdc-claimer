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
    "4EZPCYBPDS4rBAMAcUhinjQG2jzwzeFzCKN7ZLmtZvzNoguGUcoPjnPgMauZxRqQLdXcvnucnjECd7x9nuaD7dQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9R7HdLuq6YZCrhiTHUsv4heQqzcCQ24wLcMtzxbjUB5DNQUn6Zxnp2NTf8rLVxB92JLbKz2UydLhYrxmHqzQps",
  "key1": "3or1XLuo4fxesnY6FFbBqHsAz8GL8XzVyB2jrzTwiXY71QfCxXPjXzJR7fPExo4bER3Ubc98nGvozibBHJ718Kth",
  "key2": "4v53S61hBzadc8iTUMpF57BFtWaNyMQcHzdF25GH6NWw5gPhMrPJF71BR4vZhPFNFW3p7uenPLf9f9fP5C3H972m",
  "key3": "4MYFRrJcDSepd7MQtyr2xdEsWEH73ix8zsbAA5sNcZGBMZGibUsH4HC1zRwrLtLZHvUn3X5qXgjchEqdDSk3eidJ",
  "key4": "TjkKSoHS4NLer6S1tQ3o3U4NYsvbQU5EC6jZRgCCWYG9PgZeM7AG2RLWrELvb9Fb9Q4xVVEwYQ9Vh45G6vaCCC3",
  "key5": "cFT3Qe3ZK8Vhie6dmPsDESwQa7CZiLe2dLSkfZaAeZ8u731JiTbcSYeXj4x8GWMR2JPAEe4V4jfWc1zH8GKQUnF",
  "key6": "f1r9zGnAowN2jDrXUrxd7SiFsYy19viPG6b11jgexJ15tmwiRTAyR4d3d7Wi5k438YxrNsuZJFh9g7aK7arjsgC",
  "key7": "hfsjfMPeG7GvesytzBFYcdSCreW3HjreUbpwWNgJVKPuJejZsyPV2amXJZqd4493JrAUTpkn8XoZQrZXVWJ28ra",
  "key8": "63oUtnhdouyBEmUPcVmXpL8LdQeDqSa8wAHDPREHTyjd9SThhFYxpzjhPgTVD8dRCVzuLpDL54W7ZZHVWxee1XGC",
  "key9": "4pcDXcGTyWYhNh4JMci1Xjm2SPGJ7wnhabzihKYL7RF6qm9HM1uUaZRbeqyX2QiS8H3JymZRV5iVkBdj6czn1EnY",
  "key10": "tpP7yq5s5g2gQFrxTdB1ozqz877hUY3uVauy3u2PYtFKdL8fHqr9GNxa2taR2oteFVFryLCVWz6K3RqtDZLjsgQ",
  "key11": "4gHvz1xVxNkx9hg2x2ejkvvmhXbmrxr9qe37VHCFv5wkmqWS7aGV7tbGjNErh9xeb17dLcCFkdbZ4cGksUVa5gvq",
  "key12": "5W7fxeGawUTVh3hyka8xrNNcajHUAFQyZgjePudZGvvCWxcH9MpeRHJyfF8Ps54Mpca38uUcWkpyFrMv6U8u1g6U",
  "key13": "4N8vdanUz8yj89z9hc9t1k89cYXjwgnS63AEs13XAvDzBgWQ1ksxzgSA74gcpzLWatGHfwc2hyHdwDreHbCvb5jQ",
  "key14": "252Gz8AkKBoLBqyKiCJDeiDZVkgH6eziz5dm1TLNnDjXuSw1xoa2cwTtsYHJxku5rZ4kdEGgrYLEZkoHjBrxmkWN",
  "key15": "2zEPtPwoMzJgB6w5xq2MHK9KufYz5zNJNQWTtygx1oChMNQMNy6Qp9HgUZUNqEAn1fxUXX3tYrxmySeUDjehQTwd",
  "key16": "3hjVbxXQ6T7sHGHw63d6JPyQrgjdGQL1h7YeddXtQahLtJFMLJmuFRUFY28THgva8Xq9ebz8XtzJBkC2mGAw3RDe",
  "key17": "3BE9NNKYUHiUNY2yNNJZ3wKHXZLGwXNRPRohaWgBAGVKWNomqLbzmg4uEFv1cgAisYyar5LFMZbQ73ohV1rAxNft",
  "key18": "5zR45D2Era8zn9X3XdaM5vCB7TNBZNAaWHc3H2XxvdPX3EwML4xYoVQMzPAyAQabyUKmA5EEJgk94ARvArxwSBos",
  "key19": "3j8dCAJEWmqr2wmTrgfwUJy29Cvz5uTSTYiz6WJq4NH6N5tSw6iiBejW6veLnsgtrzhAMk9j9hPnhcBmjJVYSVis",
  "key20": "5US3i61zb9d4ftn1gL13bCvs32e1fTmXVpLe9N451FiNHEeyYRqHdwYg89n3bepKrSRZkKFn1m8HibUT2hmjceHX",
  "key21": "5eAGyHC4M89ZzhRh3wPTaDno2wjK4GV5xZerRz3H46inYMVP7UcPj4YdXXzNaxyB3VAsDuuXroQ9SpaKeRreFDBU",
  "key22": "ouzrYFMyZh5usRmW4QKKMQoPDnxhjSzRxDYmEaMXG7PuMuYUPozKapPSYFszj7pdCV5wZnjDbadT3SwCUSWbR48",
  "key23": "38fQXi36CXT9dAUEdELpP7ZNamjeyq9DVNzyVDD4M6a4aBFWGkLE5SZcE3orScrwrA7UivDPumRjkTkk4MYvXjm6",
  "key24": "5uaCquZ5272KAXp49sPUFFkw1bzSVVe176Uxm1sUhTzmkAD9fsQSddZWmKtLStdsryV1zDM7djp3fS8eHHQhYpiX",
  "key25": "3hNBr3kF3MLFv7GJWh3VCChtWRv7tzHQFi4aFPeWW8ZkHbH1YgnPguy6LfGxWWPjY3o9RSurjTuVT5tJAr8wwLP8"
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
