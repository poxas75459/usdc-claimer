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
    "4VwAspPbz4NuoGn4Xge7pxzUG9YCs73AsXifXPmL2MtCyGMb7Vn7on56Z27m6CPUYK6dhbTH7LHKisA8exGZTCB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKq2XboZGfWuRcJTqCvCBWvq4QwQQvemMasdrZXK6KZMtQiRbpmhqfDqGLEFFq4djTfr6q5cjX43z3AFByCHRot",
  "key1": "2u9wLzMJf9K8UeHDvfY2VqHPu4kv1dLiafVXjA3z8xM4XgntoiTCQCM8Rw76RbDvdTc5joHEx8WsMeR1Vuo8Dw2z",
  "key2": "2faJYXaPbf9vceLYaStC7ERbDcXEJGewyVLhshFk4nqurU5HE7Z5tGyuB5TUDvomcp3aAFTQHpNtct2KkGVUaP2f",
  "key3": "3YVRBpwebnq62PMXb1j263XkRfVWeHbo7Ky3hLuffsjMfuC2bDZDts1EGgtiHp2YkTGVMXnwEdDB6kdsrS7PP787",
  "key4": "HbD313qiGj6bQrUzTaj7kTKaMMVFEcu7iCaEmkpPifLDuWJ6z9C9B4iGCHxdLEVeRnhhtraRRTyxeCwcjtw6Gwq",
  "key5": "45j2A3ZHCCJqHbzewWPoQLLzUe6JEW3nYAkjuGBb6twcnNY1VEKT97SEbqYv4MKaiiUFqSxoLkEhTuzrPd5km33m",
  "key6": "4F6xmfzJi3f4ZfsNAEaLV1ZZVCpKiiArXwwdS7sYMxSKYR823rLU6whd9qK1J8tu6PCUjs6triG4WPsEBT4vcDXT",
  "key7": "2eDsXzgrvBSfKrLYpK5qW1mEZCVurFWE7KeuCzmTb2DfxRGphbKXpp85r4xPmzEg234R6mmhtZNFZzzc1TxMKNte",
  "key8": "5URMX8srdjBjkDUvzBWK6oCKGjGgCPK9qXEhsDxSz1ss3m1aXXaNDhQgK5UVVPEy7dJgSTJgCHNQTiy3nfrJkGym",
  "key9": "4Yixjc5fFve8xfRPwpuh7bjtDVtJDDbYfHLhMqd9GKAqAxMrddjSBSpJ4FcxVW2w5gCeoPsdS3xABDZBFiEYe7Ax",
  "key10": "3sSMhhPxM8pUpbCVhgbHMYtfbXvCrCaC1NekpW3Bcin2q6cYVkczurVqwFbyWTGZqFFzDXmsGePnpcaD1dvhs6C9",
  "key11": "5TF9VhUsQgSFimsXsg4YARNudb9bGML33VhwvuV72YRdAhDY5ab8hEHL9C5Q1b7BxyH4XWgQWSFtLgofPe2ePoyP",
  "key12": "5qjMPoLBj2vnPYb4PRhgS1f35BH8ujBueSH3kiqXY9nY7RsDQBbx7GeqNEEFicBRWsYNK5f5odN4k5un7bF7CGvv",
  "key13": "3VyzJTCydYc1cxLSSXGPsXDmApvDHDzmEgSN4wthsiaC3U3NebffcFwztx6oRuzaeCrgijLzv51Zh2Zqas2V2pdu",
  "key14": "5eDWdvwJz1PA5tKJxTTTVszrRvggpt5cr7whBytdErfy28PLMdGVLN5QJFKzu4eWFE6T7ExZ6vWzg3iCaYvYqCQd",
  "key15": "4R9W4yJ8ta1xcaJFCn25rcF6pSDDoSeJp5KibVqiuVegVcPEo1CeDWbXE3oqYJmpiAefoAkbggFcW8x3JS3V2PAD",
  "key16": "2e8MPq9oA8xGuAXAGEQyQ1XbsYB6mefDHEUgMLzQTwN2PXExPB9gKiijWnbwZ4yJVy84bGi6dEk1ivafa9ed8rwk",
  "key17": "gyqossaHA15Ry8c2gqPmJqsH9gdaQTJiwYf3GXL5TJ6pXR6JffGFtAhh8L3kvTa8MGBZeHgLRDby7f8PVWmwYER",
  "key18": "2Qj38q8xJFbHrsyRsZUVyHtRdCo4swSAkim5jeJsBjpUFNF4SdsMYciHYUR4VgzQKk8XCGqVurJz6E56G5dtRxi1",
  "key19": "4seL4VVGPgaGsAmZjzRZd2i4doro9Bc4qYmJu6hye298CubAtjD5aV7WFEfJD8fFXxAHyhneknZUMUKCAzgyVYFU",
  "key20": "4Ynxut4uAc9gX1GseTie59fnwZXs4SrFCkJVntF8iGGGoDVGmMX4Qa639GJfFXZyWVNFEkca8GuGvF4nvpQexYRu",
  "key21": "5UB6dg9fgYNGKegMtSXCJePPri4dUwfPRyMFk5bsrUMZ2b7f6uNr3CcCTe2EzyMZbTSaXedupmba37RLCeFHxnF7",
  "key22": "eAGdFtePbPYbYbeqhoo6z4hojbr4R9Jw81VHr5LQ1ptwmJrYsS8ec3LsYLA2vNWfz4p1bzsUeyuBvsnFqG2ddek",
  "key23": "fezct2e4rKY2TPW1wpjtdJBATHuvrUefTazn6WcZuuEhVEBkocDYDEHK43PFVzDvUNUXiMgqshjxE73ZC4wEWf1",
  "key24": "3Qnbb8ApU6gwTeKZMN7pjw77YJeDc4KHdvqtBzKLdmjBXH1ZTFruBxSybJvL9KRm8ovrzb1p3hddCc2buVVpoYQz",
  "key25": "4LWFnAzkcd8eDDz2xq98Fj6jA4fVT3GgRdEDmi3SjDA9vyXaMxuGcZGLYDFt3LdnGoVbCYVij3tvhRFv4miHNrCQ",
  "key26": "32rermsqGueMBnUBeJfMQv9iSkQKVGMxPCMDrxB4LGtCp2cZkz8UkJtHWA1tcNQoz5Rpk1tsgFBeXLsgoZjfTion",
  "key27": "4bKqvj548fJdKtyVLvb6rKZqVvBhZ1VkT5WLKRyFRTVrE16WjXdRczaG1aWfvjESAe6NKsqGmZxXGgpk15RASTmr",
  "key28": "3Mqq3xvnNcSjWuJ1sxFmrCrKN8LqEa7yxwftLDLQ1anMxj3J1ZH3LkwZKpZHjfJMeqR61npXjrVrqpvScmDc7Wxa",
  "key29": "3MharCKGPRiXQ1Ndm2Z1sVr5WZ9Jc33txktr2HzoTuQLAHY2SwZYyagisw5PDsgLsn4t1UgQxxbuHiLULNhMXDMU",
  "key30": "UzXN2TA23Js7ajnP7nEZzt49FQWtYgSNpkCUMUA4CkKfXqSk4Dq1trg2Hb5Zr6TaGPyfyqNQDBs35kwv6CfH4PT",
  "key31": "bH9hT861k6cHpFH77zMeBiMDvW9uDmSEtf9uXfDrGiPeqaNieHyi7cDypgePQRs1A4Wu8PkQbZ3Y9K8rZSYzhtj",
  "key32": "5U2dHPbuSmfmqkiSFxxwem2LZzeVLYvhEhpxfrTrAYfbsGEjk7GXrRcfiXVExNLYUs3fgWg792U9inAg1jwZckZQ",
  "key33": "4j9zfszLYYU3BfV6FKdgftyEog1riT9qRrr4uAF5vksLyNCvKz8R3J2ZLQJDVwLYEPbGkJNDqVn5yJ8bXMajq4H6",
  "key34": "5gkMsZk5orETniv5tBHKY3WskKiLf4QcVYFnPuKoN2Ywviz2zTQFmJSvngXkt3J6xfxaSi16HTfyT27xQBekXXCK",
  "key35": "58LBraAGDkmNjNvkXaoF3wVBgwSoMPGehiYaVGGsgLNrMDLNyjAwPHtGPKuBHu71Jdi3sAeDeijHKi8aBdJoGjWq",
  "key36": "12MhqzdUx3CDj7xTGunfBPpocEV4guq7AE45ot8XtQf6ZB3Tb5xz31KDf59MszwqciWrKHVDhqoX8NnHqnSVdPf",
  "key37": "5aMjS2WFwtHiaHvsph51XUG7iYAnzLSLYG9M5sruFA38pWtiTcFxvXeHgkWoTv7VswcioNKxQKLaZwsAyqN45EHt",
  "key38": "dz3iqsJJtpPD1S2sYFpJBiYAms3a8DUJ2wguo4okaC88d6eWwgHdeSzFxr7KrupNqrKajmZYRdukBihteZSwG7D",
  "key39": "3XbYUeLC35jCYTEZKmiNw7MDLAz3GQLpGEzju3JVNQLYT5xfwWtmYAxs6vdYfywXaQ3kKv8YTXvM3GkJ8TCGEz62",
  "key40": "2BtodKJJYxYWZA7K6u98gHUkUvzczLLWHJmVVdSfEQmSHbPkKoHoQoosggNzroYfuFY1YXwuCEGQjrRU98XdsXZm",
  "key41": "5dd2GrrcAZ8gDtAv7XJvZRoLAuqQ5yW3U7JEhdUWZENHZkZbPP5dRrANtf1LK7TBHU1G6x4SULFeBDEkapy63h6m",
  "key42": "dMMgHzLgMEpFFMw9L8uB5Nb8G7Zs2tVd7A9YbHKH52pjdaTkUKVLCiKAAjp925ZNWvdSXyD5N21Lec8vVQKfoNQ",
  "key43": "E7k3bXdaMxcgVZ12fgAJ4tUnwkQDyfeirjEj98jqXyFXBRWJH1Qb3TesEpEo38D9mEmhYTD6TVdMqK6gnjTzAKW",
  "key44": "3hSmFESF8E647cv2be3yZgvBL61m6bfLScDhHaQNLhjKskD289LcM5ssyq9ExNfHVR1Tf6ygmg3qTUvC9WnGkm4k",
  "key45": "2ithpJ8KQNDXCc5zaenzDHSAK1zimxQjsLy9QQ4A2qRZCHU9vu29y9jeeoKJV9oBVEDnUN4ogdko6EtvV8sWUXoQ",
  "key46": "269JrdfTzKxhWLArKJNEDAe3ZMVZRUtVyhjUDPLBk8SnCYXBhBYrwqHjemeScnin8LRbbmKsC63TeUzrZcCRfyQA"
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
