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
    "3pgSh5ZrYWtW5eC4mRzEcwkTCEnpuoAECqncgvC77UTVyYQ93eZpLUYe27tJa6s8AMAC9EM11ibEsRbQLeg2P9td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUFJaSNZnpPmwVL5TmHoAfoEUR7h4BsgYyapaQV1QuFPnNbEz2z1pqtxcHHWP2teBDv6DorxkTy7cu2ZNMNoJu8",
  "key1": "46YeVBhP3NgP35W1Uesi8Y7GJ68umQkaw8Zp7mzfCQris1Y98MXMeyfVoosizBXtG4jRm5HFLhdXahq3L2J8bCTu",
  "key2": "tKUS5uZA5W9xo2zqMwwAmv5mMpnA4DzFUofC5qiBCPpRC1CNdZHqMUxLrMegQR2r2Ei1mh9wzkLVYyWaMKJh4Ao",
  "key3": "26kgD8FpeAsQo81kSUG2Hy6LBL6CeXqrGZmvjLeZSTSba67kRT2JRtRQmhT2YHyAxNfhAFoyTL54CL2u77wrZBHR",
  "key4": "393RU2pVPuKVzBvLNLSCfLJ2enRKWhPsoYYfm6jMMuwPnyML4dNjdFMgGa6tzNPGobzuuSW4aknuPY79zZiUbW1L",
  "key5": "3DswqywU1o53prEz7WYESSVw4vD4NcpTnMwmzLUYfjRAvdUjk5fMHReMRXdLsyeKZBCwTtEzT22HDTy4K6GT1vEv",
  "key6": "tkfZ3MgUuTYwWWrzgTdhRL2mJUZxkoyp5j9cCscdLgeb5HEP62HzmVRkpYeoW9Sae6FMvyGcece3gZ8TPk7srFG",
  "key7": "Zg1jGQS1z7yEUyADcqVnUYACYfNHkyxMhJDASAAdKruWH4iF49MjvHS47nWFoMVZyaGJjwBvxC2Dp6oxwMdLHvH",
  "key8": "2tCJq2LZ7ezhhvhDWgLF5YSgp88Ck1JZ7b41o7SZeYLsAv7Jsi8EDJukB731EQ53Knjc68qhdo5ieiHozEh8qszV",
  "key9": "47GpeMy3WEh1VbHK4SyJaw2DHmDX4rAWPkAes2NgmYphQkkiTPDJNbXxMSGGMXdKBhqWFEKL4irfDdfNmzEw3FXK",
  "key10": "8UMA1Hmq2XqTTiFXf1LE8eqcNwoQKSvh3ijpFaepapZxaX6U9e2kAwRQYv3DYmXDxw6fERtL3YLCT8xgreT63nm",
  "key11": "5CaKv6Ko78V8A4kt1rZ4ekHZdWYwvF8ayVit57yMJvztqREBxte5XbRR8pSQkjNXFb5XT3AAMB35jhVoaTtx7ToK",
  "key12": "5uFFmEycKWKUraC9zUvZ7rTZTpmSMndtC5G8RXg3jXXNfju4xYRH9y4YAxpD2BjXQcisynb2Rt7jzYDsP2QDp43Z",
  "key13": "5bHPsNGrXDCTfTg2hbnJwdW2mfMXvQg2LDcQd9CkvLQ7H7q8GfLxaquJUE7we7vgjczHtGx1uTZN8YqxxNt7kkko",
  "key14": "39rxsALyGeuViGPg4vpfDVX5ZZpYArLm7tzRWCQuzHfmdoytot5kjhoiqACnY47TNyr4oDbnjTaVp7ag6qXvsBCp",
  "key15": "4mcfJbQQD1kAhsPRzB7usLotMZTDNTQoeVPTimrcYqFcvakc1YqLZbxJooFSaunLgBnG88A9jNJw4uNdgUP4hfy",
  "key16": "3eh2tVX8oJrhY6ztHNiv9DsrGqzkPbPxTqnVaSDak28rvNZN1ih9wpv25eL2Dpymj3brbhuxASmdF75qEvCatcLN",
  "key17": "4BnD2cipvVZ5NDbY2jxw2JAWmX8yZKH4n1AGgLExeo43DQUwELFwJsh9a7fv7efkDbWQmto4uxTbuxgxtrKw2QU3",
  "key18": "2XK3ET789JyGbK7WeJwh7W5Yteia4UWEY3pG2vrePejVMvR2Kkh9ZhZEKrZbgcPNMJ372zH3jVaXWEksEBk7GK98",
  "key19": "PNxCeByufbZXmvzEm7XGHJQdrda7hztFWKVJ6g3nbWb5pFo5wZyzA33iLwfLFghGoHMQJYqX2rjHrmfSJ57KTEC",
  "key20": "sU12do7832hejFbt2DbywDywj8rzorcJRrJVcrZcqbR3jpADWUznSsqNVGw5QpuAxz2Hcj4zFi7N9ADiscTWJSG",
  "key21": "4TYAja4cXVWtZxEJjP58yhbVAnafM3j4LoUJ5B6jKbfcNYmYQJHCASuRZnhUUhEtuvn4JRS6opoHHkQKavmCp4hZ",
  "key22": "SKdy67ZCCTQTNiMehVMAgnTXFDUfRZyfUiPCQmqEQY9waFBaFSKenTm8zN1FYWx6CcMuwLZ6UCraL1R9N2fHmZ7",
  "key23": "3qwho9LYmafGm5AQVyoix66YoEJwM82YUXGrCK6kC3YxDQwrmZLkPcQWXWERwT2oaE7EyvawFatKgPNifp1VsA1J",
  "key24": "5UQWWGnN4adjrZcsScs5wtpewzsf8wKrcV2AMX38baF3LFLKwm1EuvVvGrtZZcJ7pSEmqx6SSABPn8mJvhzzYWq1",
  "key25": "4CPWTvdZVhkLJZHsN4keRq3LFKH2WdaoNBRQRs32Un54iRuKiv8KxevouRai7GfuaELGUYsg2We95pEnfBFbj41i",
  "key26": "3W1dyCgm2wNrAuarTZP7QFF7WnxD5FLNBfheQqHMRoWrNgnw8D8P1wqxRNq7z5WVhvKQVggoiZPx7epRRzhTG5jy"
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
