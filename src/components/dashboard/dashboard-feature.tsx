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
    "4HBjQgwrJAyKFYw8fM4fMaESZQMvi9FRwv8iQbUuZMzYbgS63ssW8rr7CvwkbZHGeLDUZbkE9a438AJV1Fv9TAus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aSVFv97wNWzXvxjdLJC8EGYNwkyU4sTgGMWM2P1rxBQUrm3jvAVAcGxaCaxHgod1VcjCzWPehe7jJW8XqMit1NU",
  "key1": "4esRMWHRbrdUk2jidQLzKecjWNiLfFfKqtHG81Be3K8W3dvmj7Z4KVCBzaDR4GH8YQvVLxDnXiKu6NMhk5gTJpy5",
  "key2": "21SFKSR6L62qCgNZdiYRkPqNubP24ouC5zNcPthH7dPPhYD6d9EXo72h4EiNgeCtTi4E6SGS2aH32jeX9JwmDeC8",
  "key3": "2gtwvfjVmttfifVcaixa7eN868wtah7ygnVQ8j29LXgudY5mTuLMQKgRPBR4FdYW6ZkoJXz3Pz4BNQqKtJywbAow",
  "key4": "EERSo4B8wV5DPA2TPCKedmPDxKWxqB83ZnKWtYf6npwyozJXmGCKAvQGXzndPwGHJTNsNi2gjH6pa2YGzyvhYP5",
  "key5": "1ZH8npXPThD6gNQDfW9jwAeSf1dZ9dreYQfR4a1onyUQ6B4tSx7AAwEempCeGPXbD6QX4tTRsdB2fCpxEqBvNsC",
  "key6": "3PQJDYBHFrt43YVFf8DdK3EgScRs9RwRAEFHpkCcxAfpv9BGA9z15em3dJxonKKVHHDJctPigNmZCZpDfmjax4JB",
  "key7": "51SYjMw5zM4FunphzjGTQVq7ahwtx51u6irZuH3diRECkmU63ZCozhu3GKjJApUePb2vxdoAn4sS8jccQ9Fu4t4H",
  "key8": "ZMh2eZpFax23dXgEZaXJLFcu5o1f94yBaAgQHjFYGTCXSxzzJfDSvT5iJqcNS5LGfGxdkpr6Nuknbx6wsvjWhsL",
  "key9": "2sJ5e1cr8Gx6caumhe68wwcDrcgWgKHCzQUFuFoaYoThSgxCuKx3naW6fWzQFwriNDuKsGWcBF7yoRMnvytJhkdj",
  "key10": "5UMTPp8R8rwXbctHNBEjjsf5VtovMjR5kHAEfGFyfbeBo1zg6aRua6QqXGrzw6sDGjaZuQk48YpjDzF3f7D2zhc8",
  "key11": "43wQTpeNZz45QcW8EDNg3ncUQmQFBtic8PK25EYRLey814CpGP1tYgAfCkkHNEZ4tHJu5kVX8q1aEQeTvTNLxtyZ",
  "key12": "4c9Gm2qV2tNHoyYUd78F2W1d8nzf1szavdYgm8CEsjPj8BnVSupsRvXy1KfdaSe9to4wE94pUzcchp6kH47ZnJM",
  "key13": "5tBsi5hoQuV5UwVvmF7CE8P15fCCsXR8fxAx5WeSawin2XXSJxto3f2WzbnDQjN47NzgA68N1ZU5D8B4XjtFhruQ",
  "key14": "37aB6ECwgb4p2ukdBJAuJ2guhG1WhkvFcxAnC5DCwD4uHFx8vYf2M6wV6erWpknpSQ8qfAZXdcSPD3iEKFfEKa8o",
  "key15": "2KVq85uuxLtYeB3g76T2zNfVNraKEaG8r4KVok96rpd8T4WJPbrGMPBQ5eBrS17UQETiXN2cMqTSWKURjjjABgLs",
  "key16": "3GjEzJq1yFA4sGfvgLbgAXrYT3jEGTbPPaKvuS3QYc8A88XdeTAZEqKuSq5Jyr7pNHN5st7KtvqBuZ9GYFegR8s4",
  "key17": "5ZyhaqN3iJBtBosN2NVGwUvk3hfAJ37hEW82wSJ5ewqsd3J2vTAKvuBobKS3gGsqZdJjFQHLZYdhNsZM1D7VWBDE",
  "key18": "4pTnEhXtSWDWhzDPCoCcRM3gUXB8C7w54KrKGtCJTK8HiXhsLbc4KTQeErGB31iKkYZs9EyN9a11MsAQtPSoZrZT",
  "key19": "2HsCLu7NNhrsQStKWXanq1fPmnvxZzWRpD6Kv45jBdPTKQJHrAiws43igk2Xj3dMfMCeA31PbWCpzPu8tRucXQBr",
  "key20": "5DoMqLz3SE6Kskid7M9VjNS5zCU17ss9c9ftThETvp9RxXW8TKvjNv8QcTWkrimUH8GmodvZdHgnX77mHTncdbzr",
  "key21": "2VDJdjEDiVYwaSV4fYChiQdaDHy7JzNAMweNFKeMJz5g5VPqg136qPDfw7yqtj9XUTjZbqUF61vDwnUKgCyEovaL",
  "key22": "3Eeh2gA3QYGihwzxqPGYy4uLF5qc8UcG739LiUZSm2Ja7J55dvsdQQKrFLobGhALrjrmAKq49A7jCX29u4oe2T23",
  "key23": "2W2Jxpi6okm374yMEZ8y22La6Jip2trSL9FhY2MHZTxRpaeZy6aT3A96k8oLLRPBHJutBuSzaaPUC6Thes4qWomg",
  "key24": "4tPTDgKbZ5zn6D5VazxwTaVuY1SFRod89u7QFPWDAtPw5eatUVgezfnG83jc3Arh85bWH4tCXBbzUme9ZER2QDk4",
  "key25": "2XKebwDtRhXg6BmxvKvhwVNesAsPnrCA6mKNF8JwsrFQDyBwCQaA1uByY2kGeNkhFVWxNYRbGsZiyinmBPN6Kx1n",
  "key26": "52qsZmuy9qsHAb28jHSU4CU9eyLtJrzZvSKK7pDP7Ha6qLxpu1JAjCW9QB2XWfW6Fche3GrnsUkvVNcXFwMTvXGb",
  "key27": "EBeALkk4LNLNRwyWK9RUvmvvZmpdycTKethjZHdfXrYhYwLevtCFALDcJJpKb2gANLEDNyN93RHTD3uA9d65xXw",
  "key28": "BSeRtoiXV3BS2ZSpA4cu38LnKyT8nhQPrrq1xBeA62bQmnGZmW9bA67Ei5VJynGwETVHc9Sqcy8tRTFbyNMLJf2",
  "key29": "2nUcXH3HNgLA3whPRw2rrbsRhPRs6D69YicPjyJe6Fx7Mg74MQxefa7YSmPfLcN51GoTd9hkmGBMhTTj68Xj7ryT",
  "key30": "4ZcRGzHKAe85nPdx22Ai1ZUQeKMytfGSUifFUzYhSiSFxktJid3t1654JLaqWseUNod1nhbYVEBPLnUHni79aw74",
  "key31": "3x6bRZo6ZLu9uQVH8aXyS2vZ5GLgpgX7sVHw6uQVWHLMxLkMEQr6kEAaVC4Wg1HxTtEpSowHqxawFYmd3s6yMQiw"
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
