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
    "SdNd9GD84r8NzPnVHMWvP5yV5BAUoQ3BnZqpdcjbiNRhZ7tBfZLmo9aFtuYikrwRgjdxh3NcptyBB7S3iuTFaWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHCfntE7G8q6HRr6TRKiLLB9PdMLrukq8D4HRR3R1YTxDbsWe7ZXGDC29KFy18zNHTgd4fcLfJ8mdzWppkoRv54",
  "key1": "4TccUVwrDU3TcG3hEiajNn8j16z9oAzbSmUBz6a9uXBc5mnyBnhuBmk7kFHA38EErys1VnKkBj9EmeY3vb1SM3W7",
  "key2": "5H1KjAuRYuHhswYpNkWfbthkaCqNtcUXPXjgBKdMwdrVKPugGrA1cpZunZ3ufhCjXEtYRtLv9hwUcye7oaKB7kJT",
  "key3": "5uqnqJuyKSZhECb89imR4h2Ywz6NE97U5gESaV65MTcM6RSpTsXHJKqWuFoXPjuBzycxb5Cmv5bJtTAsHNTYq83K",
  "key4": "5VbZMnvr4QsoGEnwZTPUwZEC17WPzavxcuaCKpHcxRZyXh651ViwLQisVYeZyfjrVPtxrcd7At5dwvPSgei1s13r",
  "key5": "41JrLJ5vw3F815hHU2GrjqNqX671zyMEUMGYhUQrHWYGPx8BLLfrGXhwtZ52Y9TwdQQqhUEUPSuHEwmUyzqUQL1p",
  "key6": "3ykCEBWPrrpWZTLdh3BZuDQB2H7A7ffYEtu3ZpiZuR1pK67wR4syQUxUF7gmNFkSU2FQ1Boe8D7zVW53ArsVDnib",
  "key7": "4QAW15gPpxvCe59XYpRqvJf7y3kM6HXXWKqWjyTRzzzX1FGPrcw9c8h4WdTj3XQ3mVAagHTLYiaZXWtsnpAnfQsq",
  "key8": "5dpWQtRhYfHN2kyXiUXqYNSPSmaywpmhQrAcFsNNpJ8Bb6kZiSzybaLVif9qPvG2F9aHPQdzYSnFfVYUBL9xxSBN",
  "key9": "txKYzo5FKfoBsaQEzgTemCib1YhVqmsccEa7bjsFUxFP1GvrwETwM2VhsLGdtZmCeyxS6MPTSiJDdTShBWPkpgL",
  "key10": "2scGg8AKA4dEwTip2QVZ8SkjLhhGb1Ak6QsR4fRqmQbB6xMuQyC4EC5Gz6VQ5Bzb4U3SKbYT9Sx4637GKFt5Svge",
  "key11": "2McoQPZC89JxFtWWfy7gmwxi4Sxw2TEoeud26Cp8Jh7Quac4YnEB7YwFQxsqPShtUQWyj2gnBaUH3vsbLR1eN8B1",
  "key12": "3GpuPiLNFZ5CY1sHy9SH67VKaSX9H9HtSQ5tfyCofQgLei5n3CVZFWJDZFVV1DJ2mTN8r9msntRao6p4QPwnE1r6",
  "key13": "2YQFx28ziPHjYb3w2rKST177ZWXotJ6wVU4Tq63HKnxTxGJehdpds1m19VyznX1hgJNYp7KVG7ziPaKF7mX4yXue",
  "key14": "xVSEfiKDHa9BYCVQckxx9LESpAbu1n4BafJ5udC3aZHEz6fMthLFVFuyVLevVqxDaunGrdXfZGpFUZa6pLLNk7t",
  "key15": "4jvwpJEL2prXQVRFzvhBjpVQbgz5DyJGGVmiNXALjt32JvZ1958Etpw6KH39TPVDnPaBPS5maHu72Yn7auvqPdxm",
  "key16": "P4JnArHSxPXzh2G8wTPBV874k2J1RNbsm2RTszivfqeC9cQCUfo5K32jApwZptW4ehrNxeo7jsidYuLFkFFXkqV",
  "key17": "34w7g8mVYdM6zTPSUr1ayrYpdn3oBq8JeLqXUH9SYr2wzTsaZZiNZ7akqofUrjUVY91xbx5AeDdQXxSyv7Lnh9BU",
  "key18": "3eqGpYQ2RfUsbMGzgkFPhYbnetouLizeGgZB9pMmrbY9h8BocpV3E5FGtdcivKT9K8a1VShoarxgsB9C9awKVzmp",
  "key19": "28WH9iNq7RK4cAHMm3RBo4guxPaXaHyqhCTHDH41U27bsP1T8g21ZksjSeB93pfUVMvixcaGUrenqrcpGPkedg6D",
  "key20": "EABAPEfUpWXHZMqFALCGm8NbMMfemkbQJ8bWSykmCDvS4u13rSssoYycks5yoCZzNVFxB8mQ4aFEviwXK9wg6uh",
  "key21": "kh5EexrqaxLUPmgf27Wf4gTxT8mRkEjrtD9yQXTQdcYdeQapEfPErw39BDGqDcPcsr5PUDfaLa3aTYZ8FavkAz6",
  "key22": "5EoecfzmnzVvR56EN83k9Hdr5yozncKBpwaKmejgzn24m3J9HyyFiuuA7xhM9t3tw2yuPgCJrVQ4Bv2bN5PefS4h",
  "key23": "YJfP7vmjbRd5UPYiqxYxqeA17td6v7F1fwZHfrbjzryGxGfpsLAPwV56dip8AYLyatuSXBQmSmnYmH83gTV8cpk",
  "key24": "3aKUNV3DcR5kvSMpdvzFJFSqLYEezQu5Sh53CPriHDMeyCq6x68qZrCZDVBmPKrdXdKYYcMmKnRAQdU6anJgHV2h",
  "key25": "5cuYv9FJTAh8jAA46ZoyeuFZJN4ctufPvm9xVVyTN1CgMGg9FjHkawjhz1wGBSk5DfgrNWecBw2nggUncNXc5sd3",
  "key26": "45y2Sghyc6oDZkHpGZn2wq9iEyab89Sfrr9bwofBFSRk9iQVRVWAD1uLdA4DmGYwmKByeox9XChiwJ78nJwaYJCq",
  "key27": "4n8NiN7StPu8MkZrHrUKi3z329bDZ6bpqg5necNRbDMkgY4sC2cLp4zdrJrhoViXnWaQ6s2QgDgEvAicHV27HcwG"
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
