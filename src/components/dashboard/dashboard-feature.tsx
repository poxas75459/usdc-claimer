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
    "57ENvSbPDgHFT9ucVuViRxU63eE26Gw97QZYV3gGkKo9ttdqcJkuhicsKFWVkmpZ2KVfogjKrDicYzd95nKX7qVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RaJVP9T8VnF7z6ogibi6A6LwsLdGibzqEPamKAcA37j3UE2MYsnJcsYRVCS3PC3cLqfXzGSCHVjJjBxiWTYgnW",
  "key1": "5Ftf1GpZkiva4yLgQC4B5woyV7rVNFG7ntPcu6i5zWDSXJKeu5Ed1PqEygWwoczX18RJ3ZDEUcXTtjfpRye8dPZh",
  "key2": "25VhbiLn2DaocAV5GYrcXG5nyGbzZbzBfLjUHMVHHkWb8UiMNHxjhY7oXwNdQE2FVw3CU47fyspXG4ath4HnCba9",
  "key3": "sDArKsCoPQNgLbzDiyTCohi2B5MYyKPA3u6bAF73X25yB5RzabNu3vWaATT97owiNag3GaSqfrfizksAwWqhDsv",
  "key4": "3JZ61NTPw2WTnSaHnKAu8GAAr5ie1UND8LUL9T32vv7nRceaDZ9i3s739Ga66qpB6cB51wP5gUWqwy6ACygyP7gR",
  "key5": "3qnJaakAs7qMUykQuFaCQY9qUD4XZJaR8uoaTsTqgLaDwbGQETWLuNKq9proxSL35TkyJgrfAnDf8SRw5mjjXujP",
  "key6": "CfiLSjpvkiUrf9KLNi4P18eQ63nEZKo3tCWbZbFE5z9d93SY8ZsJbFdgobXu9CUc13G1MHRu5ZCq3q4iikLZTp5",
  "key7": "57RcWPrcLRjLQBccuWBAwWd4XRkkfsLp6NWEHxkGxBSB5xGNU5q5mYHXbJTcD32nk6rLf7isHKojeXtVZPDebD3K",
  "key8": "4zAxB6mz8x2QDziUjcLmLkbf5smw5fqhBX3YRAL7QmnXEYaPyzaBNLWVEHEQDRDcXGK8utCknX36xf37zV1VLHNk",
  "key9": "26B1SDgpTbRU3CrixgmN8ZwQQ57o9pmFUASsf96SofzJUKdvBEkcK3yQxxgdxqZ7748VpvUCoaQi7JFJcnf4iTmV",
  "key10": "apf1FDXzKM6Baj22HRk5MZPFEjkDbx2FQvDtt6PnkDuDRvnM3wf98pdKDbFBahXfFR7UqTPA1toWdnrwW74JDn2",
  "key11": "2UQXR5TUgFEkfSHBrkzgq6W1RzFmLGez12nhnFHukHZcteywiC14VV8kLdkSnt5SrjYxwKtLcCVTcHEWyixFcBLM",
  "key12": "254wX2s8559weMPV5TU7xqaWyoRU4WqeSdJzM5t2a7pF7r9ZjBSZCgz7GTL9nP2A8FcfaFSMfmAw2MuJqTpdA3xj",
  "key13": "2ATuPhH6hYFGCAdwmrCzbn415ysRHMxE72gk67NWXntJLQYrofyXkmU8Yjzh6NeoYbSpeorN1SjVMESGSrg43SRK",
  "key14": "5dt39Ssiu1kGSk8AVpFrs2D2h6QZ1pmpeED1STqTe4nQFTQg5mt3CS1oPUZQ8WQBBzqCWwHt3RmXWmUNwhgXcPQ9",
  "key15": "65NornUUD5GPTsH4sNtXVGNZMgtt348pPC5yAzDzB3DyADCsNMqMTkLxvYe9oYYAn6untHJvLCPWpcQLzfPJf6zD",
  "key16": "pqMt7EDDJqnX7YUsGk1S7CzNLjsBAnjJjQVeBcaVXGRUiuRBj9uALa23GcTCaAaRv3LCPbMaLZM2C6oiGaLoJC7",
  "key17": "2PZBtfRemN7w4EQ2uWeELZgY4VyfwXcAAgWb1uEqxTTZdPosHdmQmtDrJUwSdx5AfhE7VZxejTfJEtFe1BoJJuXE",
  "key18": "2TXDouq4NMHzXm4rxbDB4kr7GzMHVKJuuMmSUBfa8ScSJYMGG4k2zjvTTUS1cTfZffpNT7fRu2a6YwpXWW7kQwKS",
  "key19": "2R2TYeX44s3j3v8HmEpF1961sybGMiPkLkxCdEej8JP26DbGAqMEo2oRHht4F4KNSf4ndJ51T8oASXz7meeBkQcb",
  "key20": "3718nk8ruc5fDRjDocjrxHDtTceJtSJcFWxGoJBuWiyfjCnTj3dbSSxVyBqYZpx7JAxSfZSmZ6Us2tygXjxVzX2b",
  "key21": "5DEoMvawp2ge4DhWGHp4bZx1uv2PPpwWEcjMv2jn4BeJS8mSX5yCKFr2SQF3FPCBEpDyFPWRBDgT16YF2VZfHP8U",
  "key22": "5i6MCqgQDkoARUTZia4fQjQNxer8N2d8Y5BDj2683TmBak3zCNY7gvm8tL9SC6J8mrc8kmFenqenhPPvxp6rXpGo",
  "key23": "41uUvgBbrZG3QbyyuHbH6GMhHsX7nYxBTJU6XX5dihdKbSzkoTsUAzG8Jv4aYtXdqJ9m7XwTW3nbgaJzd5Tu5mkC",
  "key24": "5qxZUsDsVYoMJUhPANmPagLeUqhVdbSLtF4S1tMpfPqwkpFRz7jgwfqcfmfpLLYbmZxzNcCrnSNgWHwJ2oEhfqA5",
  "key25": "3qVmPRE4kttLsM5aeUqabSmc2QoZNYGkW7C3g4HZ7GNLaQqXV7ckcP7dnWn1buEd9Zw4fTFbSGScs8vDKA2JT2JL",
  "key26": "8W1pNdqf8vGHpzDRJ8KHMmCtTqLywkjE5S8ELvH8hym6GBBEwek3JtipRQ25jhonA9r61bs8beSiEr3PaMdmVn9",
  "key27": "Hb2Yk7B8PCQJRuDHMp7EhEniB6dF5aAFWDFQYBtQ6GyCX2G5MsChMZNcEzfXSgbeNSaksGuFpU8HXonPS3QEcJ1",
  "key28": "fvBshQzDLmNfX6dQSKbJTGifdkkxdx6EQ8XokfDfbmjFaYXX67ns9ydcVDBhZincSTXQZm5vtcyknyZ8EFNKwoj",
  "key29": "5eTRiMqMppNYLgkqFuiZNaGqfZLMb1KGg1X8h9feHGUoy84DsdryxkSGDFiPFKUExKaoFbGPjHD9wmK1H419gt24",
  "key30": "3x1hDSPBX9rXHeroDqoGEXGJWHNThtY5BfTqmEPBQdTroMcShDo66xa8NF5cijpKWvay8JqNTwDKQQ7NqNrV3rEG",
  "key31": "4HJyr9Do6hdS5EBsQp7GWagKCvRPPu6Kxu55cGqhfSVNm9a7w2fHo2ECfpcr9tTtDfs1J2AJSmtVFz5Xo9LRBD5o",
  "key32": "3WjQ3mfpcgwSufYHKTiLBEYz4dWB6sTwxXT24wSjyZfwYNN1yE25y6WdwapUiqX8jp6DYcMeCRmyTp8Et9QvW5wo",
  "key33": "4HeNEu28xZM3CxdctV8ozLgvXBikS4Famo4upGrT4HSeUmDj5sphoGb59Um5X5cfbj3eZBvutnZfuU4Cxphy4RUa",
  "key34": "5FPBKxhHHNVckRhLnPKdwWXgG9jjLck13Tae39CcKuJhsh4WQN2xo5c2sWvL4QjmwYhjhGSfJyJbkD6GMgL7aaT6",
  "key35": "ouhP1rBQ1fLVm91JnnPUJdXHhXKtUcYyxnxsMxxdr3e6kkPj57U5dkcSkmBUiD9gbLma7J2BmrTUK9wvaFq3gPA",
  "key36": "66YS7XEVzxt5q7HSuStuaiSPjwCiX143vsQYocGmzeH2yvYbdQZr99uHb7oU27EKhMvJUZESgqMHGSwKUFNg5fY3",
  "key37": "2rGqVHTq8Tp6V3o8yQN4Q4YGYwZLDFqKNY1odKtpzpjeA1k3oUH44sfxeL6xRZTyn6Z1a5QAiGnpiHNc34Mm38Az",
  "key38": "4j4CufSXGo8mLraekReR4QokDiDcr1wVKFkMorbCHeNNJ1cKZR6nJXoVEw4PjS9GUwvwHnBRLGzyZehhfqYhhzdw",
  "key39": "5SzfgHRGadcEAUBKcLV5gj7eZL41pWCGb8XFsaRNVmp4zJREtcNENYA5Skw2SJUjXSb5jiC9RHncsuv2S3HLGi6x",
  "key40": "3nJ4U9XwzgNKRL3PePPyuAhVzEo3ng8bJds5dW1uLCnUwwzJEDCpaaom2GSM9o1oogXFs8vriTZyaXpdGYZHF7ci",
  "key41": "MUXZyxq29DPeaEDi6zEKabcJdMAFfkKeoSMFRv47zd6ruP8kDkZmNS1ysX78Zjwu6HUV4RCqrTHA1HamrVzJ3fN"
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
