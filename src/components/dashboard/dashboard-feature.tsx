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
    "4La6UJimyaKxi4gAyBbQMVn3QAduF4dTwwDEsXgTBoEQ1h7pku4aEQYa4fijo3p7VALAQiaJ389YeoAhUc8JJzXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEGTtjfRokEaLQAh1jWi68NzCADyLDXu6RDfiuiwL89DpZ5YXdfBz855ue9wE6sCAxMxbdiRgeXgvjJzxT6Lc5T",
  "key1": "3AA66xzceUGTgMkVcCnZQ4AjwjLhvH2rGAguzoyyRsGi8yqKHdKDsuqAuygZjpoPHPcdcJtDYaUCTaduAsAW93Mk",
  "key2": "53mvkDGcHH5SSqCVK9kLV6t6LRa6n819M62rhCCEDwfZV85fK7X1nWybanQiHVZfdPnHucPTdWW8D73jYu4rtz7a",
  "key3": "21bantf3cCs2KHqDk99gCRMgHyxkfpGLYVo7Gq6xzdJ4SwDkuCxpJ3CU7XoL7USKQFrt47pYR9ZAczZPg3a5jZLZ",
  "key4": "2UTRsNrLjn1pDjEbsSxyhRu2TMXZM1UHZsQX6ULdKup16BUA6F2PtjsKpEN2BYpcp77LormGTk5XxaKdipJhJ9F9",
  "key5": "67QJni5FNfoRQ1wFrQdPRjp4My4YQ872iF74SncGHJ6tcit4ZkEKQuii5rn6XH98t2Uq6krXaEqvdXozio4Ba2FS",
  "key6": "3xRbBQQoSBfwMXjBWrZnVDynziCG7xu5ZqYPjNZQKCY7d6XSPXBVG3moirx6sjhwNe4Zd5ktcNX7vVPTVRb87Af2",
  "key7": "4H91ih2SLJPv8bUPGBbnKPPCCtdU3MRnJWCwseNsuLj8FgcQiz8dQUeDxgpaKX6XMtcGBvdDzL2vdCGRiPbeHJiu",
  "key8": "54S424f1bTB1VZRtuP2EYemj1oae6zybEKgrYHTv3tob7Xvd8rB1DzzrqQhvSvdtckHjrESXWgnh4emVjofCiNKs",
  "key9": "QWzScMMunZernC7z3dr6vEMQSJKAJhFi2nhi7Pbc9fZ1QnvG7FkMvFHswg41xiAYCcFxYTD5yLTFRGYH9Kxn6dS",
  "key10": "NUFLWkED5th6QD32PxtrphNceWLv3JVp7S3YngH7jUDWRJb5fSBpXB6b7TJFnH3sXiWDKGBhb7eFXks6BJea7V4",
  "key11": "3AWBicnPJrsVqaBPRKEUyZQCjmspQHw5hoQxKbHiXsHjUQRUj7CHKPZy1tt3iTEuNRiP8pvc4srpZVtoFvKmpYxq",
  "key12": "4fej5NdmMStfHL91oKyPC4dnfbaKLMZSfD6jYif1hsNhkuc37mHMietGpqqyFixnWETj5nGJowSpNNaezV1ZBGcr",
  "key13": "5iJDGqNcfzXVFMU2zB8GCm7u9Y9eeDDrpPW1BvY6TxyWVTabpMHBNSaczLbYmkpzjRyYhuJMJWduQJugu75VrRmu",
  "key14": "4D9vBLX7L3CvaSR1Df2oT9GpTDrjXT1cQ2VPohC7Pd1S3QAaREr5URVYNo91pBeDjmL9zcPcSGBjWyUnC8wdCxos",
  "key15": "64kf3iw4NWvYrTgAmfJqEEsF9kpMHSc5U7LGdn7HyLU3ScgqZRNS3VJgqnFkQLM9Z2otxi7DpTDP63dq8ZWGCRFL",
  "key16": "3Dks99gN6vC4xPaag4ou2vHVujkvzwJXHFT4xfUrydLBfLH7CuR1qJT32Ky6hchzKHXv2Cruea4EduXaSbs6HH7W",
  "key17": "3p5ZqHrBVLDLUspnofkAVCeb1d9LiVTKgUtiV3XqLtT2KEJoaarCA8XD3khC9oFvvDPVho3NwyjZen4QNcjHM5GB",
  "key18": "5SrtEVVrHWagFrpxk8Zzazc8W4gSLKxq6j2dSCBaoH9Hv1X59R8qe71JZoySCjcK4rywJ8qf8AhN3RjAgtHqwdzp",
  "key19": "2dV1sAUX1yGmBMEMVm1SmfBo5XDHoEt1mwFbXGmtiDCBKyUp1BDGqtgKLfccRcwAe35J59JhTdniznmzBsqSyeyB",
  "key20": "4ShjhzcBLodx5AKdps6C377NiGETvxBmAMyhScEsv7t2AFhrwPnzZYRHYqR76mgNLu8FB76jXH2sC6gcSd37Daej",
  "key21": "2RTjYXc3MUwRJKa8eG92aRFot1R4evUczNgPEpBKUojsmqH74movw9fbo1sBFf52rri45Vw7MWFVAgm3mxnz3qRd",
  "key22": "4WtBFhF4zhfs3LxrtAdRZq9BXik3X4PVh39iDK5HrzCS6wsq6mFgGLVCXLnBwhEwL3unKD2wXM3oqcidiD2ChGBW",
  "key23": "XjzpK2JbFPx4aqwAm6DXd3akMHP3CRkYrPyb7wPaLMuSZYspfDgXkQ6y6mhZHoWfyTb2DYMxQYEfsnYvVZTJeHh",
  "key24": "3t6YBieWHxtYUKDLb8juypJxm8RyKvjAK1m82M44hfvZYcxVcuf68uyt5X7sWovzAmxKkh2g7GBf4xJERpjCRn1t",
  "key25": "3wB3SCwXsuufBu6UL4kbpwRrzZPANnsmZGRMF2iiAw7CcMKbKg7sqyKrBAFPX5oDBADVRJWxYaSM8xnDZf9EDS4u",
  "key26": "tgwTUCSZJZ1mxjK3cMkwzfCB6NJhV6RBNRwErFd4tYTsbuRRfqaqhhcJHUWX6BvXeF1bqhJvsGp7AMqHUY12iJX",
  "key27": "5MkyiMoi5srGNseovooLvhPogXgSyhWdZVmmwfUCVw42ETuaP9d9GLhoDwuCZx5tHcnsULfi8H5sBZZQ4ergvSaE",
  "key28": "4mTq2sKSMXLtXfK6KutKnZfy8LvhTNWHUoGxmj3NZ6K9a6yiVGp3j986YdL17Df5bGD2ysCioZ4spcfAGPUiK27s",
  "key29": "5QvDQA6LT1hDvumuZh8zQkJyJESMhhVFFSA7pRc5VenL5EWA4EP8s8Pcx9NbEUDGFnxiEqej7ifKHptPSWrnJypH",
  "key30": "3GGMDaJyqcyESqKcDoN4QyF6GhdwTkgkEiXj2PpuEu6L82nqv2zPb4veJCx9UZpYPYQCXAieH6EVLZbsBcd2by5t",
  "key31": "3dZ2SwNkA95FQ3szxHmnUiFL853eQDDeBRNtWtPKwr3rz1wKfta195BVc4fRW57JTV1oZVACeQKELsBJox1TkX2W",
  "key32": "qv6oLWf1gmE1Dttcp2wAQLJbQTb2NnQarVNGBdborKAEBa5zJCxVujpK6GsLtk8YC97wB4FAjdYwUrDf3MLMGVK",
  "key33": "BaDTneqbvuZe7EfpVwUYP7hkhXMQEhWmKKE6zSZAhi6QwSn7DFab3bVPBqktDv3Fwx8SpsjdrWigCs7BFy7B4ZZ",
  "key34": "3un4ydro1wkLvqrayoakidUqgNKycvo8KJQ7srM56a64pMtjVGb6vnjph1jY3enYcNQHuMDx9ucKmwcERi1KM7ij",
  "key35": "4F3MwDBYjbSwk4h6rVN86iPmzvGdzKonFKAKidja7qgLEyPwUfwoWaihw4PQFDxucPSnB9WxPLZ4e4BazRs9j6dW",
  "key36": "3wUkwMJJyJEF4JX2j7G5gGo6MUxjqTTBYnfATfE5Rf2c3WNrbKMz87TZpQHuuTMjKczLEKvrLUy4drah3ZYx6Qho",
  "key37": "5p6Lbvs4pwvnasfzE3nadXMCTdSy1Y7S8Z4JWeGuoad1AYMA9wb2HUBRXWTdzSQ4wR1Mx76d5CiYqg8hcGRonUnj",
  "key38": "5BoQ8UyLhbeF39bKGtR8LUvK8Lz3ubnJosLjPDYGWocC2fNMnVDQzrVPwn4dGnsGPuFdSXJecvHuTnHTE5K2NVmi",
  "key39": "ugFM4ebkf2uCR8jjd9SYyk9mHuewfQ2Bten3yZGUCmEF3q53mHDLEyTGg6LrXQ9iVgs7M2m5jUt448rQSPHt7Q9",
  "key40": "5hbGt3Ro9vTebRwSMJBhQ1DiPz1cFA8Q2yVCmSDhBsocCCC5wsanAr2b4Hjfbxp63J694BngZM5YCnKqWiqcRqPU",
  "key41": "t1HcrwCBexJbZXTAfdtY5jBtqbr6iVAiFBNdQUtsbT84drGdkiWJrtYyHDSQ8mCqnxEJ5rKHj1YvEmRcnAh9PL8",
  "key42": "2JmunPpbQiRkE6G156qVGP5G5HTrMQ2od4vVQDWixKEQa931hF3MeBkeKiGBW3y8TXtBVWaGqPhCgmTNCDoAhtVL",
  "key43": "A8k6ghZS7bwRVEYwsTm1tJoLrDd7de5NkQnDLekY8tCTChyTWk4ccqaUCtGD7omcvrJDV3TAAn92udRhsQSNG4u"
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
