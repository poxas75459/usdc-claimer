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
    "ckuN3GFy4xnG5VSZVAYGEHHJcFhK6jspasS79R8fWe3xG8skbiVi6TQ57xiS3kjYc1W9gGXLGzyWjQCLERsBkHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D5k4kZug8uqv1uVcXSLm3pHmn13fEruK4eCn7w9HkQWNScsyP1eQrG1t5NtVjZi8pD7vpAjboPj3SBt2UCgkE1z",
  "key1": "4jqJd2ykNneww79rH2S95pXnyR68BAuPcVdQQPqPFKDEGZqF4pN9wJFAEZbf9GYj7DVg2ikmDtG9fxAWVMuYjuwt",
  "key2": "4iLx26CAEUrbAUqqUX6WKmWiQKDbVEXwSHNYXiDmgAEHvH9dweTPMFXRPV3s92S3tSmAVZ1q4EotN8kNkpk7aLKz",
  "key3": "JvGWBgxGhcgEL9sQX4PUXLBgJ4SZmE9bqXww8fxjV8PjzQTckHKFNHmGKy6mKJMfDKiok9fiyHBis86p3oaYNfG",
  "key4": "5JUfCsspniaAnRF4DKzQvv1KFUEFe6TP3qT2Ec1bYMCLCBgwQ5Tq9uvB5vtExM9AWReXWXdSdmnp9rFs7Nj7wHJn",
  "key5": "4abeBLr6Rb4zvK1ovseu9PDukB6PutQrcYRKPYYMGqsg5qs99zDwWKV2vLfb25cDaqxQsj93vsiqxaMV2jukf8Nc",
  "key6": "P6uVqQbP3ZdpL86yhYzM84fc6SnUpjxSHkDic1SWT248ke5ZobYyE96aymMwAcsaAz2gL5ddTY6megRnNkC25co",
  "key7": "3rRhRVAQcGC56vcwQKKZtZBuj5KUCssjTk3C3A9YkvFXXH7j7tH7LsX48aEoUu29VGDBgNho7SEPYyxM3tLDb5sP",
  "key8": "5poRKoqqv1DuBHfxjfvknhWfTxdG4JLhPTKLNk93crnxSgGvPmbNBha1j9ggcgLAQdxdxrAbVr7qamrfNptEwy6h",
  "key9": "3bn1xNrSDyH9Z71adofbjuJWXLw7tpyMBJwy4vt9vfzJfsxgHFEV3MBWuHyuxatg4k3MWjtyYMeTdqoZWjHSVxGk",
  "key10": "7gtJnoRR2BHqjN11x7AEtMPJQPnpZcXHhJoYVUUmX9nV8Vc7UuUjczjmp2RQHkCBfCHjbs7XktTpgsVw4VQtjNf",
  "key11": "G2XgJipjhi1XRyZSJcTXJRN69CURZ85HWgJtseTCprrNeYJwYFWqmHDiHS7CBVtg57a4SgK7xUzRiWCpQ2MX8DV",
  "key12": "4jvWsitav946qpKA2eTbBz7p6FcuPuRNPjLXTPEKCrauTynGEcwyznzMGSoAVn9nZqk13AMdfd4fbLetBddy9Mpc",
  "key13": "5iuR7Ziq8pqNXpHoL5uz1ChuEqJM9NEfk9YXp2Kh6QShGgcYa94hqc6EBV3rn4Q75iTVZjqNykLpkCf5HSCofiSW",
  "key14": "6aJGJfsnTQGyE1bBim7No89Hzmwz7JM664khKgfBhJ7x7Wru1rm6NaZGx5JE52BZPoMBHZQCrnmG5kHiEZuhEZ5",
  "key15": "66zSzwh3VGLVo2mYGAQie56LuW9jhcT7Rvw9bFcqwcdmMAq8R3LVJU58KCZ2f7CZN29s2rRpKa7QzCo4owm4Zztt",
  "key16": "4VtiRHaxjxFyS1jetsffkEo9YKAUmNoUQtVUXxGkBapYB7cziUqm1xpU7UUh8N5hut5U7Xve4mJM8LMkchs8uCLv",
  "key17": "5cfjVN7wtTS5VjZPUvJpAY2W4LKGsaVtSPeojd9YdUEQhXAKzPntu4ZRXpNg6ecLQDmoNBYBwoR4rCCoP3GqFbnH",
  "key18": "3mhKYWJ7hFQFyUhkrqG8AQXhjCPcjEjKcNWYU25217hWSBsdqPxtkBqLmeFQeKQ8WEL9nN3X2dw1r5QMwMVGr8P2",
  "key19": "3mcVBkQRwxbF2zvDndCmhuq2bMHN8QaEcqKj5Uzn4Qioo12JAterbDb5keSibtMj6pwSFvEBFV1FnxbjqHeKeyUL",
  "key20": "5c3pTCL3yrCmyxdZ6oyLdDDyRdcM9AxtAtY3GFJSHxBKZncSgVXDcBM48s4xJRUpM5aFqBcGGJq4KybsfhVENNdh",
  "key21": "5ALX7awEFvCenhRoTDbqqX2C7cZCEsXyAZ3xhq5wGgJG3duW2LkyXzqPghdtZcaSWRSa2FaSywA1UZbTLvZrDihn",
  "key22": "3MEG1nkUQ1pqrMkLLMRJzdA8zwLYeb9BjnPmiXepyLXNUt1bKYi4GWo81Lf92TvuWxdUTgWrmmfc5vgzhbVM4aZ7",
  "key23": "2HgH7R8yS2FnSyxkoqW8FfU9m19oNqPByrsNwDnZRAuPcX3u9D4kmrEha1TV3w3PQXGoGoz8rtpgxvwv91FP8NB7",
  "key24": "4o7djjKVX4Xvna28MRMmzrPvCrfhfZ4FD5sfZdo31odt6cZJGZDuNvyobNyNMxanBSxDVZbwUdKQNZDyyfeSu4Ur",
  "key25": "5fgkyKLti1XaZzLvgLDKHp32w8LnVTfFo3C5nnJU4gHB2Y39epx2pbbuserK5pi7jCdCszcbMMPfed5b9TmciK8K"
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
