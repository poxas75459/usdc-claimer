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
    "3zRhnwYeU1oaoLyRXkjmY123E348xSQXPkhkRarx3iJ7BDibaZdbizvgdW3tgb4WQFQc2bSHraQoMr3PdiuyXnrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFfBxGb8PKgZV1nqzXnDmuZmeoXd7hKCpUj3QntzBVByYZvdJ4hUbbZdMfPANWaEfmxgYmNFmD5e54hURWvkDa6",
  "key1": "48g9eVVm4h5jLQt3kCpUpap4zgXTn3zruPEZjL2NauRtd9Kakbwak3i1r7zQhNYrZ4vupAR2b4zCwwGNbSq7nF8h",
  "key2": "4UP7C7vxawXxkqBF9EaYtxZ3aiMJtLe7v6si69qyAF3CsHK3JCdYYirG3Z9udyU1R6X3omhxVLvTbkL8NWzp1gCq",
  "key3": "2w9GzffkEpFz6swLusft5AeSsS9pKvcc3Wem8zDnEL8bbSZtkkk1vkHUDYdzsWkjs74DDhp2KJNqRxasT5pxRCeX",
  "key4": "38BnapDSUuGUJ6sNVwRJsu16yJPVGe2QEYfTfAmCfDoz9Rrop5VrMmfCrGw5szkJGxT6p4aybsg6BLiqiweSzTpw",
  "key5": "4WfHh4kTqiTUT3Es89YzWGRLtAQSy7WbFLtZHmN1Z4vHrWtkjaMFxM5weN6cNDQCqCfgpj1QH6Rfp6TZatTLtbP9",
  "key6": "4SKzeTH2Fgcv5CiyLxWzCUK4kEpgx1zrwaK7cfjjzgga3zMsBEPuonM5gXkBkF6HZLbYvPcE4TUxurUdwvFB5HM1",
  "key7": "5efVLEm7bBfuK44oqFfBFDKyJBsNocPB4zonSU7F7Xh3DGcpjATgMZkVmfZziJ7mcpLvJ2v5DGSnU2ncUZNDZ3bN",
  "key8": "2YjMCvjhvuRPhRMN8US11v88XRCznPCEcRBcM54mgqMViVTLMAGcegHXSGomzqQta5oumMreVrkSgRLqD6j7MdYc",
  "key9": "35E87LTF4VVHhgRfwN6SAELjLJtvNNE2NL69SXbLFUmVXbvWaXha9rWC7mepXiVwCFQcxgTE8HYnj9FwFpbxHEKL",
  "key10": "4ZWMa4jz2hHoSDBsGyjMzFszWunXmWMvEb1VX9CpFp5hr9BpmXVV4bwmxy51F4M657uXd8ZYP7sPHncUvv7sbCM3",
  "key11": "B33HNowZPUf7XUyNfQEiGiq5fe9cXdN5iBAXQvSP5xu3S9Vzep3sYETBDFFVZo8GqQosD94qYuBeLBacweLf97R",
  "key12": "QCJETcwQ4WwKDi85vnrYxGg4NTFJ2yY7zkYhyqUe7Pppm6t9DDvNae3fypDKhvSrsoeiQ9yKVdwYtL9dkHc6J4A",
  "key13": "62pVaazvqiTYgkZbGuCdAw5gCfxjpr3swaAa2ij7iZSwBsSbiRZLVY8iACrnSrvUAzuJEya7uLihSxJARW9LEn7t",
  "key14": "63gDkSDmFQsQnTBgqz9Sb84kCLQhRA3sBLP1qLv9sfVyRbJxKMGnRj36btuT9qwYSoD3ehidv3a6g6YYNnN6WXG9",
  "key15": "5UYQwcHhSbpREFAcvkNHY2GdcbtkXJ3XiTSmBFE5QZGnd5xjq353SqQKTo2yo8XUAJbMhsC7oZAt3zM3auwNCNt6",
  "key16": "ZKjSG1ga7MB93ueTh4je6fsM2WmE6HLFdRm5qMXjPUXSdeyhA8mVTCTnuFSkmFDSnKquJ4gShcrJwaeMnfA4A8A",
  "key17": "2o94JECY3JggWVxviGAqVodynmXQNevTzYfNNPW8AtzGFvpDrK7SzJhiPBLVF8VjbZmnGADZ6arAEg4qwwfWDT3C",
  "key18": "2d7idMV7bMYxZMxM9zmTJYHyhiPavDwKQ6xVVZNGPfrSuPddksLoEKq52UhhssJdc8cHc69sGvhBVxaQjLTJ6AhT",
  "key19": "3yEVmnPRw9ZMRZL3TbqNHHEJMmC8APbj6yEemthD4qmLgFXSz27WtVhfr8TwGUpAwMedCrB4Tz6AgnMAsbpWZawE",
  "key20": "2BVruYuSK4rkTbzwwYXCaUDVQqAzaxqsFWFfm5R22E6fx9wNUwvZvsZLLFGs5rNUcNm4W3tD2edxekGUJHPCG3as",
  "key21": "5XH4f2fDShnX9y97SeREsuwaamQGGVQ7Rvy6uTcL5h5Cokrjem61qLvvHNKoyRHrBsLkLdPbDBcCJ6NdQ8sd1LJ",
  "key22": "3SMe4fW6RzEhmPuB2BjeTpAKXqgnN1qNk2knhiw72U69EN5Z8qCtCYWh2pdBps8rF2vUDJFUtG1AwPd1SWT7RkT7",
  "key23": "1wJqMMPMcotu7X4aQy1bGrjgsNbHEgvVNNhfcggRu6WytmG4n3EsarzeaCWaFokSouAv9hNeqd6pZJ3LforkjHL",
  "key24": "5FkLmEn8mGyNfVBtaCWbwtvkUeuuAYu4PpB3qdjTSiU8HtjZL4vDj3HtzEas7AUAYr6oLEQnc8rURsPxVT6u83mw",
  "key25": "4Rq1sezYy5VNGB9VuZFa8EhRteqE9y5VLXs8UnVgHsSSUZpamqtskwBFgvHcoxA5kLQ14TX8o7c63vDoX1C3FPBX",
  "key26": "4C96ijyc2ejhwevt5W1bsLetKZfBzTenqx3uaLfHCoye9shtNrj5D2YhTTx4qkqV3nnVwUVqFcyrc2a2AjBDWoe1",
  "key27": "w6WWM1L7kqTCMmJperpxSppvY3VqCFtoEdWy72nVtN6PsvtRLb2JkVmf8UjSnvMzehhcue498aKTM7xDF8cVy52",
  "key28": "57AesrJq7ogVHwHaZF69pjCX21Mteu5FSy22kPpVEETwi9mrTZEoY1k7RUqq2MboYuUKnpNFzuhRXpqpwFxrbvYZ",
  "key29": "2aUXNwqFEyTe462S81VDYRLT6KgcUZL6qaEY5yr3ac2xuzVzFN4LqA4FGBZveYWru2LY54RWLE3tj8db6u7E58Zz",
  "key30": "5YrkXZd1BEZiwoPKw21gikfgWnp24M2jrWK2ooUsiw2XnwckHucP8tBp22q25hqubU6qDQPnxFJzQK8Brzrf54a2",
  "key31": "2coyMv4gkGp3WDmMtqFWTb779xHttgi5cvr6g3y7U8dCqjuqvyL9YaoUV2sD2HZmiftBrz12zZpES8uwQDui4SHG",
  "key32": "3JaG996GbuamVf2UpiZMmgF2M5kfMhQD3DfFkB4VdmLMwwFoL8aKCvxa48cG5cjry8MNfeS28fXHUPWqghuyc4Cj",
  "key33": "3jgS4ziKS6BEzr9KGceHpkM1mfkBTsPSwms3SMFRHcgqJxebTpuhniCy2W4Lc26nf3aUhCyF7S18QX2GCvZntauE",
  "key34": "5ViMKwsWJqL4cJGr5Za8KPA5oYbT6jyDJSptg1J8TFV5EjfE5umgDdscopy9WFprysdWy5eWP62Tt1C1XLVLLsME",
  "key35": "23JuvthdXVuw97WDeFWrkAK8FKZqiZAHE8Vc6nenwySUXgifexpKuLy8TQrFTBrSM2awyuXEFJfhZw5gmrpVZY4v",
  "key36": "21ufaseaUQdR3AdPmnGRVPV7R8RTDFLLDYGBDqXnjtqg9k29eRcrSvQ5p8bktThJoJe8yrMVKj8oMrnM5CVx6UCo",
  "key37": "4SZhngYK7ATiRxNLQF6aAreuZMPYamwQTjH5d81iF5EUR159t7SpkaumtMbBqbyxWW8igPa9uLS2dZVGcVffruzD",
  "key38": "5bKy8zqngRVZ5zurph27RYQ9AtcbMbQTr9fk8mnjq1jjtS7YQEZgDctKjfBh1qML3HJR5hxmMbaeneqLXnBdFUNk",
  "key39": "31ZNkEncCYb6uxwDNTWMiKiB5CcEm3fKQufH5oymne1YrPoi5V5Mee6gALRKWa2GAJA4Jm5U42iykHLATM27PkMw",
  "key40": "5iCYRN2N33FMPT9uEECpqsLZVYKT9QnjkSMys5BFsKfcaSfhUb6DNxX1SgeBgGKTgSsrRuoLduVwwNDjth7UsHPD",
  "key41": "5kA3FfcrEdCVGDJwDAC4BRiHzgeSWrAJXDXF1BzSrKifQWFbkx9CsxFH2UXUk4FJvcnqgA7v4AfQNbS54FmcFJXr",
  "key42": "3qwhZFtSZLJXWvwAwMSpdNGSxJ8ksCDwN1chGNqazZYQyo7wMtegarqu4NVArAHm3YFHVSaUsk5GMMRasPYovqQm",
  "key43": "3bDgNVUSJ6a91gN49oSTRpuavffVgUwr6Ew6dFfMQyzhNm6pQ5tMd3omFgNPfnYhVg8ZYXFZrevv6tGguPrRwa34",
  "key44": "cBdefovSfpuPCe6xPct8vRc11PBWzyGUntqh5Kynk7xee9W3Q7RJjT3RvVeqJBKwQ45AvN3dEjvrhyababn47J1",
  "key45": "3vwEokGdZsBGNuAaHhqXhVT8CQ93DFafBeZFHNDHgbuknfMCcF2H4MC9kT4eRhsq2ctQwrdQk45vqMkea2hYptov"
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
