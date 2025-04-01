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
    "2NruMhuMGxG2nAAcbe7YRCiPtXrJAFpF9Q7knQT18ggvquJcNNVQLA59zSegPLVAb8LgYCmpfqAJG9EWEJCyAkFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rGXkCQSYpa64FoVHHmVFLmnEANrce4MsszzsZ7KQh7HUzVcAbiqDh6NtdBq8VUkKEHR1TCKWtm8vUYnZ9yEbuZ",
  "key1": "3VLGDDjkzPFiHhYx3AMbuDH4PJy613SS1GFUqw5p6QoVCNVnSoAVthNnLouurUqSeGxyzqxG1zJkotd1aADars7z",
  "key2": "529S9X4MsATTd6mjvcbkCxWg3Refz7onxcrJspaiAXP58B7Szf4AFE6JZh7x82Nerw3ATUnP2yE9svHcUy916TJz",
  "key3": "5aQ2qfwjdYwTxwgN4D2FaUkbztFV87Z8Tsfw3W5JKQehQQEQaREBsn6QVe77Riqj462ibqKuCagwCN6cETZuVN5x",
  "key4": "cwTVzjF8UDixYXq8abLgNn2HaWXWLJPLoPVvXpF3z8drf78pwe8K3a3GZNxMAzHDohrnqpDoY1HZpxf5eAQxWb9",
  "key5": "2Rsv5mFLR8YqqprM7oSvbCJoi7BmcnuBq98L89ThxLbUVVBJzsv2EVH1xgPfAMiVWkxA6f3RqQ5ue6XkfBoByUfB",
  "key6": "5rZJUCpNKbi3jGz6ytmvgfzagtB5mLW41aFATDemae7rTtV1ARxgLmgBWW5w4HDCEX3TE7AePetnQgLaS7yXpT85",
  "key7": "YfztzES737yrHWc5DW6vaVgFT2NXv9jbMUKwKsJ46uEFYHKNnfDWBRShcaxgGbKSdaez2VAVpfc9ueaPtATHD1R",
  "key8": "5K8MEbvN9G2TXcp7xrbotX6VRXwFvjQ9HLyKj84NDSL6kdFUPE5qT6pPsFN1hMFen4d7UZPFP9DJZ7HLCJNPPuPs",
  "key9": "3ZiLGSwfVcgFzGcFR7jhMWTe9FHrxoJSqj3pPBFMkbR5xBwwM1nMYg39yvxFwbvWxvVAViqMLNquXRoshyKGaR8o",
  "key10": "5xo2gC2fJfnkPuyxjUMb8TXYHSqEGr5VHTDpKchVnksGYzJoio59MenkEegLrkdJCC4noG8eHeYzi5WmBfcAv9fs",
  "key11": "39ck7w4zf4VFpEzznGTurYBwJswtTAN3Qs5297ReGNEuXLfJYsB3wLdfVi48oL79DsGfihL4fJ8kwSMqXcvnbGRZ",
  "key12": "46y7WBYgDvX5JwMDY7umAT4m8rbbdJY7SaEL5EiN4LS3Z24u6ZhcQxcxo337vXvVyyVc9Sfgaa4cY4GDyqCj6Aon",
  "key13": "1yrZyfsrnRX5sHinZeUkUvNyYfaeBZYQNVn1PkPsqVHar7PhvMnhVFfAVkXdrwuSrUHX2BVC48yCE9iU6sRqMb6",
  "key14": "48fcovsc8JcpdU5Py2etoU8r1GyPu157p86NvJpVjRhVYU24Lo6iUjr2gXoRi7eZoGSfrRAUTBUErMYottSDtUBF",
  "key15": "4iATjV17n7ZMu6LbrJ6icMZ6QKY5WmSGizmb47WBQGPhJYTpkKvqLiwidDzPvDEhJMZPxrxAHyHxCRi2GGABtMwf",
  "key16": "2ujMBjgcHLiQuqTsUWrXzfYoWzBuEkrvSjUvkmtgt9EmWAaKLsJneeMH59psLuBJsNwEou8kv4fM6ohH5KpsHeNK",
  "key17": "4tQQUgZeq7vAF6F53nbXiMLVKHDEy9UACSPSLyf8GBM8xuFALyoQJncAZDJ1hrLoYY4kxfv4xtHe4RToqQoopgtd",
  "key18": "37JAe4Z8HfbUnzLr9D7z87bp6N4Fj43QENq4vVjtRW4BdZ8CESNUbQzqzHKkSwTcxshwQg3jspcAfBiDk8TFpy61",
  "key19": "39w9WwufyXLdpsQ9zt8t4WhGTh8RXVsr43LU8cFK2QBxLTcHiRLwfVMaMrPpcdBrAMe1gXUELv7rscvjoUAaQkdU",
  "key20": "2F2PMQhVoJD7M226gMhvUx7mPZwUKWPhHn1fN4HQhGipoknnazAAWvn5po5dvNtvcXvmEfnvmxr2kLREQCgHHuxS",
  "key21": "Lg4KVW6yMP3aaPspo7sdnSnQwoMAC14d8ZkB4jgFBJLoZFZHhXvLtJzZW5quhP8emxEv6BgQAs4GyXzU72r2MKY",
  "key22": "4yAthCkhpXeaG1yWAjURP4kjdWsoGdrX8151PcaLXfPZ95wQBqSqjUNc36rsJTLoTEvH6S2Mp3s8sR3m8eao4vuj",
  "key23": "5WjkYna3WcLr4zwzqonFLEEQWoJpNsFjJDdpABukh19fpApquAKZcmExshvFVB6iCZ1Xrc2nEH8WKvhKfNQfEJBL",
  "key24": "3mK6aQFCXtZA3Kd1MqL1W9d55aDxMv9NAxVLsnxToB9MA8yQfYpvxWDncdA8bd3fRsWHHYe3oQyrMTQfWX9NR6M6",
  "key25": "2nj1LpqFQPH6groUSSumVFy3YjE9RReVbFB3EYjmQbzDtP8RyP8x9rpfYFEGYpV5CPE9SjryQ9tgEm3ghD2a9QJk",
  "key26": "QWgo8iCQq8VnrSqzxmY5nEx94VgAhUfMFMjwp82uoN83S8vBNYxXwzFJBVUZPcnJz4ySjEkC4hyqArxCSU8y8Ma",
  "key27": "4KCKVhAyPgFYKocXkpfkFNhzN3aj5YSPV4GjzYf31EDU4ZqVX9FGpskn93oC6rFZ5bXuVJiTetzSbqXgPZtqv86f",
  "key28": "3AgU2hZ8Vyz9rYYbyYcERpgcegeBtjJi8ew6ZKWnw5o5uyrv2C3cmhBbHV85kaEgAkYRPG34gQCcfrPZ5wQPjgep",
  "key29": "4MKfkhoD6z9WGqA6XouZzEY52vbtTBgo2tmBToxxekcA4QaVdb6PUaq5MEPPqrSsTsxz765rA3HZEVRQwuUucYyq",
  "key30": "3sGaEM1V79E6E7TPcFgcCTXNWobKmwBzZUNmvRLvRwAYb4JuuBKfT1FrHbnFdJXZuSambe44cRg5nF9ArqGgjVfo",
  "key31": "22Zix6HL1V5i1xffbdcTj1pVP6ypA8RkehJ4HE8opmoW8PwTYa9aDr3VRHheHCjfPkt9AkEhaUzucDqxU9XJQxoS",
  "key32": "3rRDvc1wg1EDuR42mrGL1SrvaZ4nKYRrZwzhd6gC9m7T8LySgZczXNR3EAKMULWA2cpWttCEzM1BKhaoy4Kejruh",
  "key33": "Z6bcVM9Fz7NRmABQU4s32RiKHJRuarkBMrWHYVpuj4fQjk62XuhAA71tWjLwQXcJhULVzDWUxAi9CV7rY7auqWN",
  "key34": "5UyKtm3UKh7nqU8m26nhuGH7hNV9pTw5tjB6qHWcU2UWbkuR8wUK8zLTrm9bViox217UoYjMsg9UWzQNvN22mZNx",
  "key35": "3ZBGTeEboCVGJgwptxJ4duABSEoVHRJdWLMFhuC1vUBFYxnn38whv63ASvq74YvKAFwbhtWC3WhpYBdSSvU2mUsq",
  "key36": "iBwgXnkSz1DFHAxzng5wY2EWn7bqbZsssiwLYfCv4aYsxLbddRkhokN5Ga2a3XqM5C5NFFwma9KzUHvaMHPGwWT",
  "key37": "1qzhuyBgaFY3NsuC9FGoJEBwmo5Xfnadn15gMe6gonxY6oMVJhdXWsLfUgGdHA9G8LQtdj2zRaBMgkio7pxTCVV",
  "key38": "maLxJ9o5eucff1HaytruvcQehTR4gazsL7JhBG26Bths3aufbWSfBipDCgegxaHjBnmJNug3kSCnZrtaniGtMBq",
  "key39": "53wjBgeYzHbRW1WiE27SG6RqQNL8o4HW24AzWMEtu9rJBKEfnNCUgfpLwEMdauvQBATrQqNrbzt4Y5WjbizFnQ5F",
  "key40": "5Z42fppDMj7EbrdHSdDYAQjSkjPYNtzRReWhqTVeUVpAQqPk3UTkTJZy6Lq7br2xso71PExr54mPgpRxq5XZDi1a",
  "key41": "65qDA8ugtZ2giztS36kZyignaMaS9LiUHFfyfq3qB9aDecPdRzZW1mLvobkZWJZoFGgwo7JryPBnNc6RL2j6QYu2",
  "key42": "3be4cuwKgkab2bFHFdDNLZQoHQpxmGt5AwBrhmjJMehgShQmyg7XrvNNnsu98dF5juNqXgJoA73PTRQSNF67xMdN",
  "key43": "3mRYSHcWPbyMj4ehqt9UMjX9s63D5QMtJAuqrKaYK7tUhao6ipw84FWk3UKf8a51cW3z3zLFLe6iZEpT7LULYRF6",
  "key44": "5ZPAsmjbxWz8YG9bRSKmGiEuv1ErGuazqWKPbr41asCjNZjMBG5xKvumM42NK2SfNNyqgSKT85Uaac4xa8F9uH2G",
  "key45": "4qA8ZnYRQXeZdsMH6X1VTwiGnpHd4GJpZ9ntPSSvFmmuJLnn6dXYUk1pNagfD9LncuqmZzRLtazsbuHf9JJCB25y"
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
