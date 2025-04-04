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
    "4EjWU1eDzNERMrgu1oXfEaEKxNC6MR4RFFqNjsEzKCbg88frNhZGJpZC9JY7Se3GgLw4w6DPbEGi5UQpUFUk13jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfPcYX8t37UzUSJrV5DzQrrzoRY42CLpvKrcekMGeNHeUopi528w5Tc5UQq2q4LLt5JahNnPAFKTY9zYTAoyKFm",
  "key1": "5ynuqoQS72F7kE72mZPhWzNsjmz95jGJaXQwWUEJug6QJu9MFoD3XGvS8WDPdMfmvBcLB8WFRMksZSuJzRpRQ9QB",
  "key2": "3DFCb1Xk2PNK3unB5eXiw6j3S2aErBjGDobLTjGV9vLt1dTEWLjhuF3zqTWEa1NiHjfNAtDv4YCp8cH9sa3noN9g",
  "key3": "664T3sKZJ92AiEum9Npc9mCrSeWxhF7m95BDKZ4kNiee5xf2RuD1uc5aiLjvhXUafbmuf44ZpN5kPDvWL6BvcDTW",
  "key4": "2rf46r9S1aWk6fL1hSTbvahLCG2muuWNTiS4FvepXriaCAML1kFHZ7D9f6tj7CBUQFFFLtLUeTTJCuDprQWqmjRj",
  "key5": "64iHJ6cv8SDmqipQySVGNW38cJH58rZp2od1LHA6DHurTL6SzQUGbs67HgQYYfcwCFCeTwwJb8c1X3fM9iabFCHy",
  "key6": "2ocQ3irFQAr4Keh3USKnum54FxacW3dBib9cYUrntsNo1R41MgxYib9TGQ8icnXYR1bmBhvFaTSkEipLUwwav99J",
  "key7": "2Brk7K8dTsFE8XcvNv7cSNSwyn6AZiZvmRtVLs5ub5xW5ednpZR1knx4wcf27NAvMTpra7EWe6gWpfCfWMYYJLyw",
  "key8": "3jQ8896ncuHeAWHUJ8iswwSPDSc9gLyh6NTF6D8DiCi7ww5JJ82FaCVsyzVonq6mEAHW3RVmV5LhdUMXgAcYRuhG",
  "key9": "5QtiFDc99LnQoSdFJK628Jg3Rr2Qx3k68BcofRzbtRYzZwaBLh62fTY9GgoG6i1vTxNhCNFPzwHexoFY4XeqShMT",
  "key10": "2hEt46izF3EhUKmPKWtskkpqoJsqdNfvyEQSabbXMM6iyJreSq6q7G3USA9fy9143hRSH8scjfbwPsQiUBKwcuvt",
  "key11": "4ZGDuh3kofUW9WP8PmVVu4ZQHUhjLXiPVGrTDKmDK65f1bcSMF1amSBvT9nj7sDV1ahcrpcwCtmmyw8MC5CoKarW",
  "key12": "4tB7dt2eQbTJPmemAYxUNsqNqSP813deKrfvLTTJiZUdDyV2LGUsWiSaWz9sJDhcAaowQFZKs6eTwEoCidPtKy7u",
  "key13": "5ZCBJznr6bMLu3J3AAu4CPMGXo4koPZfeoG3Apd7Rb76eUTDT1jT2zRXmJ4uYJQDAzLc4pQTELHNxgreqdkXCLxi",
  "key14": "2UoAFhjb5tC6cXHATRZ2yoJhx4NRavmfdMjLvFmoDNipMPN1Qn7wKPNAjExiXbapHwwEUAU7xPURL8iQAVrcCTyd",
  "key15": "357j4HNLUXTnzFGMWY9USWMQ7Mr2zz7QeR5oZniojGMN32HqgL8TfhbR62CFR7Lzzd1pry9BGKU4FxJQzRuxJJb6",
  "key16": "XuniDiKH2DTAEPFUrDq69DkzytRJjW9aFc96KvtonqLqzt926cVPfKYr15v9qhdEReavvWnWdqSaz5nEA4BvhUj",
  "key17": "3bTT8JHxGpFXCM3LAg5Aw2iTGGRxV5mJJybRhV3TT8XEh9VZQzB4m8UNTSSbVRHEAGfDzCgSGFgG7cJd6RD7njqF",
  "key18": "4CKsPdVrXADWApPhg6zSaZQCvBSbLCWL3GrFWZD5grUB9iQZ9TuaTSZvzkwqkkHjnMFwN6FM7VCs1BVVt6rK45hy",
  "key19": "pPmF9XiZUJeJfDWeRR8zbyNDJifPtCJR4yiLcRUW1h2SRSEUBfSjWxxG2YWxYCaetvUPRkN9N1CQSffBHjKzWy4",
  "key20": "4c52WGCrYnAUnzFJWpdFiCSSoRJMCpXjTyKLuHBoV7Vc1py75hDsxipgkKfhi62SKuFo2HBBGrz8qApKSEsT2X2r",
  "key21": "ATAb32BV7iWKx8Qinj4FdtMXTZJqrBv9nxpQLwTaJQ6NoMMmXUFUneX77gzLNS8YrrQa3Hz2SYYxHupG4zY1dWN",
  "key22": "2zbZYvHmk1KqDyW6MahhPEoY4Dt8CJPHvkuwp9w9CsUtoGkEswUDCkpQRzT9UM4M1BuqxawNTnahoEtEcxyaxaou",
  "key23": "49ixFanQ5SLYQJap3pmF7jz7H1MafADU8rCKGkFfHzNhLatQEk6aCUwgTDAu7xg9pTV4izHAkU5oSENuvkhCtB9w",
  "key24": "5dJWnRAX68djwus2q9yvBSk75UvAe9Kyj2dquwtfWbBNUja3m1uzSPV1gqFYoKoss9QJLdZq7syjbi8odzW3V2vx",
  "key25": "2LUTJhyMdAwCs19aokmzKGX4Pbf5Wg3hD6BVJwwTaeNJQ7vSoxq8ju92qvxXxmhRRCdy8LMAr4GAjGT3K3Cueeea",
  "key26": "3HHixDTSWf9KR28cSZAy3DGfBcWh8GUoJsvpjq7fe79CsSECdBbN9A3e1QsfUh9r5ChX999r5hTrPKVVs967Qsot"
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
