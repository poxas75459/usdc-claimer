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
    "4s9Z4dyue3YuJhtbWjjd2TCyRW3UufpL4f3XDgbPW3ncZwiudpchoakXGmXdXw2c9KvpPqsFiPwcZtqxGxn67nMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oQcUX8ZRzAHf8cGzcANHikEuSaKivt7R7H4mZstV5bSLjcBin5Z9KywfJjiZTk7PUjPS4tYdn5nYZU7nEgcPKt",
  "key1": "Hyy4vJ8HXHXusFcsaTvPYr1wBRmV6NXm6qBGR8ihk8zBbT56cwzqaQ9qeXT6HazuRZFUHiiY1TaQ1eaVbU3fdj8",
  "key2": "5YXqgptMhqo5LzUbnzmtEFLyRCFEmx37sm5A8wgYaVz2LVKK4M7c8mURqM5rYdesEVZX91VZsraTKHG5pyQgXkBB",
  "key3": "2tixpUXQFwWk9yxcFFwXHcG451Cf3gFiDXFoUMdSQDHBh5Z9ePBoZ1MyFSk3LhTnXZnYLHtrFqAhzYLMUh2fq1jH",
  "key4": "5GJi4HwVdihosZQmKxYnhxLUKEQzg1vvsrf7CFvG2cJ5WrWg99Boc1rJjAenrUQySLJNNiEavb1xCxZekEyRNM5k",
  "key5": "2y5UN9J8CqbgqS8geP37XmYMdyunDYD31efMUjyT1yiEhNt8by2raurLqsEAiDHtMoKtPG3gtcqEz5Fg9LEHZoo3",
  "key6": "3vYu54ieycGMiprsvk1RoBzhRmRi6TDUMmf7hnBGnMCgpVBfqeAhfop2DPJqftBD4dwMq5TUUtYBiBFqkUnc3p2b",
  "key7": "1GQDnwAfjSSdWk7qm9RJzCY9VXeSwc7NEUWiNNMupY9FAtYAFfqBxa4ASGe7oU8nzg5wK3UCiUEr5BgnJgg9Q2q",
  "key8": "R4pYQks2SdDwqymbhF5b8erov9Wh7rtndURdL1LYnrc9h5mRsotgPP8ZUGHudQZ43RaaMXJAsnbFAPmYqSCFHC6",
  "key9": "37SLcPKWNG3Ky8nPGQ63BjRov6jydrwYtQrmrtex1BrBi3WKfdQzJnT4NYzmxAC3uc3FVQkRKxNpQ7XCiLfGoc5u",
  "key10": "2CJgHvQVz8rX996WqPvTK7PbR4ecGmBx3LdUVBJtgHiW9nPzxh2gTie1s6cESh7CTeMn3dCBhsEo8LKXEkj3dwhk",
  "key11": "47gCiTsQ1hAKXzPfCWCZpXk9BAZKXCCrii9imNoytsHNMT847T7h5wYawnyHpqwu2nnXxVEfJwrSkenUk7Wjzc3B",
  "key12": "4mG5w8yiyegUNJBbgHDdrrUgDa2cKyfViYQeeRMMtJnkMppzPi6zANcZAWct3ftYJ2Gzu4k9Zodts5GrhRyzJs5b",
  "key13": "4uLq2cmWNhFbMR7CuXu6fpAhmQRWZ1BY4k5GcSAxVYhbDwMRSKpww5jWykpBmWpx2GETbGdmphEPBGWwzomeAsam",
  "key14": "maoAMRCVF64svaAKSDSwddn162xhHj3qWTVBti2xJx4s1gbBn9uJ5YE1o5dvrKqJVfiHrf7EPRdVRGQWfv3qY78",
  "key15": "5inMeF1S8k67v4vYp6T1LNBPQp3DTmHDgjCWu2jUWvyrt3RC1onPqNxYGu6DAo3sbz1BaKkwAknpbxmyh7NySN71",
  "key16": "5aXSZfw4zwVUskv3qToBdLunEwbtLyqjRzBmrrUYv58ue6qJNtpsBN5SFoLLHz4JbkPPesh5vTuECRiPYnoyCVKu",
  "key17": "4rie9L65gdJUGDZzgYJ4kqG5Kaq7TuHniaqueZ8xYQf1P16sX4VvPk3ry9LvPCf75jDd1qzDHuZYUfejKPSxFRy6",
  "key18": "3J7k94TLT33Anqf8B6igKZ3E379SbvDHnbDKKRMX8CmrXxfw1WRqvn1ix1o5CnDW8XjvnEJaL73YGNnz3ApYeGKK",
  "key19": "57p5AKwKtUqkNPaqwjLYZxv3dnyVXrPSxRUgPnxCgVo9Rvzc9f4QqiYDFxGXQcCxfAVg5uh3q1kDGpBqiq6tfiuh",
  "key20": "3Enf4E95VjpvLoJxU2bJwivYwTCAcWsqrQzJiVqur8kvWf1FMxDrke2pfjKrPXgtaQvp7U1endvFVvmUnBdgcxrp",
  "key21": "65JQbNhvspRSnLsGVwudTTNzyzaErqPXYoUkJVxLH7xjFb2jHCcRoubX6f2pKAyEFcVyeE36CPwwg5wyb7G7kVwK",
  "key22": "2CrHqVQ8dYtRHKsqksaH57qNRVti2oS14eWaSCLp9ktEv5k5vN6UtReuEQydyFKbvqhbWiRFWRFJhvhk27CZMPHD",
  "key23": "5NqY7B9kKkRcQnP8DjJHUmknT4jGZK3vF6toTXV67e196T827En12hxLH7Epaf6RVMmdoKfsHgj4aY9EkEt5ADLU",
  "key24": "5Hgr2waoMA78zKys3dYWP14e99ddV1Eboqtpror92c4ZTHmTExN7ATcdW4hswufjeXFzEgrAbmNXK7Pnh9CUqGFo"
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
