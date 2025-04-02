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
    "2opusudRDi5vp9uf5M7HwMxV1qw8VeWMkyk2TvA7JeyWfMdmhZ6mCq1rWvUTkHpp9vtWnbBDKkgdwuTrf7oD4qWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miwqKQ2Rqt2vvgCN8Jq46JCWKLPS5ViyqjagwkbB5z2hBMe17Y9mMjk7rvNHd7yiSq2b2XUyyQYtsebfj9Dsbrh",
  "key1": "3mrxLf9DDnfXbNnLvX8ZtEje2ASpz5cdocgB5W2b4fJsdyiM9hRabYx2Jmrr6k6o3fsmJQE66jWVzpc6nUF5v2ME",
  "key2": "4hVapmbAbuwSmJVzjnAeiFo5nnTme1cjGcs32dnHsE4VGbXhkqUhYC84x7fA95vp4ctXE9MJReb37Dym4rUHqbDG",
  "key3": "4UNHV2n9q6FXTgmegGeHXvSxi4UTh3xwbmpbrdqFqgtRV3adpjN3H72RBQ1xvzaizy2DSqQnfDgGthNL7kzvCJuu",
  "key4": "4arDffqxm3z7nFUb4PBZyvw82kVZq1ZNAbGkYwrYgaXNhUCSNEn6CJs9EMTDunUQNgxB4fLJkU5KTiQmFPqrVxB7",
  "key5": "2wBiXuvPd67F2CXbLwKauKTQQ99vuqaYL23rQAJy7Z6yjiTiqZYuhryMMsXAh7PMjJgSKc6oTg3CzuLFNwUFhPYi",
  "key6": "4zkKUy5kp1g8CctAMSsSCUjrYPRPy1zmj6wyGu5qgFYqmKrAZkiv3VQU3rwUjdVr4vydUDDKJDuoWG65JTAtav6",
  "key7": "4FonJqDrMEpqTizkEZrpEfsvw9rSYGzcToGqEssVREojm1cUCfagn8PcUik7q81fZ9TY8udYt5VbkJAk36FMddVb",
  "key8": "46nrHh1qNWtVb1JB8QJrTpbYfRHMkqHSHJA233eL6CGstWnfCJ8LLoGqCMesaxc2D1sjCnqHyjiKxzGfxyt7ztbp",
  "key9": "2umskLq2rZdcxDPcnNaTVVLMxhs5tqq1UwB5wGWktXfBCEaTVE8ckUzNR3HSjgjTTjWtCkf1rFmdapE2yz9ZcJHU",
  "key10": "3i1kNVUjyzC2yGutYp4fq6D9rkkeAn2Xwwjrax6ySWGJhJR9BY9sST4ygAyVK7tiuHxigauGhSVUzL2RqVuyRb4u",
  "key11": "2wCKs1724785DPM1pNfs585j8SU5BKHuGMBwa7FkwFDYKurq8qbbbrx7MG5CbngF1bVhPNyCcP9rbZV1JdKHqYoq",
  "key12": "9HtT2mB6TSe8LpFqFs6RS8yAZv5vwaQV2t7RpFVryhQyGFAPe9xg6aXzSwqmeyNtqLchTpUtWRiiTd9CAtTzNDo",
  "key13": "4YWaXm9rGx95PcmpUej8xxpbiCweH3XBf7omKbxBKcxMWaEA6BNx7aWQh7A7UgHM54phTByZqgHZMJ5PG6gV7Kuw",
  "key14": "52MdLUsQMhdBFqXTgy51MnsXfbaUqVzTUFh2UbTUatwkMBEhV6bFcTufZbJPNyBm4oP23mJ2U2AatPDPPx966E8V",
  "key15": "zMMKzj4ZZMcbts6pwr4gkykkUtEs35GHPgARZiwwkZUqtdTLiK6QhJE9PiJgs4PBkghGv3dESTEQqCMi4gvWkJ8",
  "key16": "3KXzmv3yxJ8MP5Atd8sLikw1SouBKvcSirkj71teiu1PpDYUSankHF6M4AWh5usDPytpsnLdiG68MNarTm2gaY77",
  "key17": "5V5fe8wTctWRK8wJFmBVUopuRmtM4BkezQofuRg8r3g6MPFTeix2GNNRDm2xx9kWTQiCYEd9DaKEjXbNXg2EwJm7",
  "key18": "41jhDofa7C9PjfQc2Mdqp7a1qBU7qQZNvFBp7nJ3MMpnUc4pYLaWnf9x73qtuxTxqJfkoCsQrRaFArpwnYnBQZZc",
  "key19": "4zBXogkWxT1pvssXXNWKVMNTS5naQnbai14DTnufADQ8VT79t8Ge4jjNTpGfsaR2sHRmkhRGa9nE364cFqP6BWrW",
  "key20": "2HTgK8oYiiCgEtNtjRqGFFg27PTmdEx2tgDS38uGsoVcNfk1wTueRn11nAb2vRX7GRyVgQ73wyY74BLresT1F4tM",
  "key21": "26Ug3b47kDYcvkcT9SN8WLZuTRUguuc1fZkDrbSeVW82UM8mmwS2kuaFBo47CLDCR4CeSB2gpEBbNUxe3YbfR2Cx",
  "key22": "3yfyTGkN8dn67ma1irHbVLEcZhJbpDaPenWBu1CP8nrr4hPuQmx18NVRbBbp1fStQa8DJRzVxsnEG9MamsDsmnXy",
  "key23": "5ANo3LR6pCqAY859yHaBVfnYCG4mU1qtu6fc2ohHqkGxS2jymCJFnMraGy3w2t7LwNX8FUDBGeQghcSWqBkE868f",
  "key24": "5jHdvTjJUSQC7fvFw4Xqbhwx3h7GhGr2i6wuvCqEiPPqWEe7CKeqzGbWqXmCPFUedkPDYK1u3GFXnGXfMUYa7JFP",
  "key25": "4tv4nKTCXpAcYrBJwoPptYDX5wiyv6LG19pgePVLxKbM1W9QM4uAZh4HXmFBjJGJYLaAcCpgA1hxeCwBVmnu1TDS",
  "key26": "4RCTopmGMaYHh8qjU3zHskdaA7nEWxYYQEPJfRfKyHCSz6nwrkPZWCg6mpt362bScX3xm5uMnSi22FsndBGXq66d",
  "key27": "o6vPEttBQjkBTB8i19FizKK9QvUg5QGnM1ZA7TEFcgNBsr7usKhUjaR3c3cuJTf4fn4iuzp2mVWyKNkxeW6P5My",
  "key28": "5rv7VncBYw4JJfZY13Pn1wvLqwFjRGBoHVjRDJ6bCGWLvziNiRuY3S61VwvSQDT4zcfaB6Jh1UJutPSHNnyVymPY",
  "key29": "4XHBcWUpJgofDqL9fywRzgGWdWnCGFass6NXvYLK2VkJdo6nb4aap23iw3HeZTQoEVZa3QU9UAh24JpxYaYat6zU",
  "key30": "3ddxCtfZWBDqiwgaJhriG4fBAqfui7Zi2wnwU59KNZEK9rV94kQMkyZEGFiNiQVBvruc6JV8G58N9ZRXwRYTGfnp",
  "key31": "38qSzYcpydRgXHxhojZ65vhJ6QKxvT6mUYUbaaPwR37zAmqDdcbEBNBmz4eVsuXPQci5C7B9S29G5YYohroSRFe",
  "key32": "5F8KXrb1hMn3Aue7du3Ejaft2pbqjoSgTxuKDAC2aW69FAYV2vA9H1n2GtWbrXdUe4wtu5Fs81roW3hezk3auffj",
  "key33": "5MDmdqMSyAkU2Jy6C7pyMrtj8uGguTYuifewTN8thSYW6GyEiUyfPg5qWPu94ZLmvGqXXVXCfqLAfV475tGMGM7T",
  "key34": "3Guf6ZCLrS5kTUdAaPhgZcMnQC4gKUA5RtWzwhDfLn9twzsuQ6WRW2qwYNG8jSaKysi2GDzFEHwHXWshGATpFP2y",
  "key35": "SUPKEMrhhpEVgVze6zWRKXMwEhgFMLQTF3jPLRmWukw11wrqaDdH6w26v3AhyoYsjrHhXqzHDGH92jiDbXsPdFF",
  "key36": "5zqwkF2NSMi7mhJ5fF9pXTXSHPUCtZ9VoQ3CtXSG1J3mzeGZwUmoaFWJqxwbwST8gSYMbZhLNbJX9aTZ149UNezT",
  "key37": "379AEKbQJ6ufKvFgPUXPZpDjMC4MRrdUzPRTyr8VPL6JAWCHShGw87mapxXZyDFvHedzRUYzgcPPGH3RvSTYnENE",
  "key38": "4ABsMbSRB9XjtSRCQbJ7MZDMQX7f6pwKbS3Ryr3FWmSTfB2NERxxfSNFhxQgAjDpPAbdM3T8yrGigLHBBPqV5Cmg"
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
