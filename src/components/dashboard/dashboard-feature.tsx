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
    "9dF9bTP4vup9nEjwP23Xd2CgGFx1CeB3p5FqK3eYrJ6undLqGuHqT7xxRpVfynKgQ1BvYixDtRBQuTy6MqcbbPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxuaVLXj2wGzhW13StpRywHyf5zbTnyo3QKq4hW8ksEfNPumRxwp2mZztAgBLceUV5ywFgs93wKSmQCj9xDUv5u",
  "key1": "2TLoNHRSf1GNqHzRMaKmKrDaqsUuUb3jV7mApNv5vifGFqF1UWYgLApt4hbSyVNoDv9pJ9gqc5WKQmLUQbEr2pCm",
  "key2": "5GMwg6YGuxojdgwD1xFqwWsunRGeQn9BMRH9k36bebE94rmiv8EyABLEkgGfmYBX23vk58xJ6gSLoun8a3zsvwuw",
  "key3": "4EbcGCmfbtJhQMdWFyBn4tM1QY4AXisDnZYdYdQjuu2mu2RoaZrwsNmgL45j8qEkBN2FvP4SLetCxdgjLjujxctV",
  "key4": "uN2pyp945hWGpfMdZsSyFX9thyr3r4dgrzS1R1EHACPqo1jMaRwDX9Y3RBDgqqwQomeshghe7NgAy1rymYLDG8Z",
  "key5": "2TUWKur2agDbv33ZdPpjTQh8qPAnvNsLDTDuYTVEQHWGPjcxxgZSJsAJ54KA7TEHAyFubRxmKqPbVCurkirf9P5A",
  "key6": "6616LoJFMjNWPRHsJZM7NfyhS2PZChhzMw2gibAV7eZwBX9a2iZpqriftFx235TLVuZfj7mjAwnkqRMqJdTHVop8",
  "key7": "5guc9wnTdzp8ytoFTg7P6u6rkS8Evu8J6pNDCqCapLERdq4d4BiKeQjTrwg1rP7Fn5McNohuZkcNWwsVexc9kyiA",
  "key8": "5PpvoS4Q19UZZCJYWm22jtG1J3J5r9KTbHXRkgfZZhKov6D776TpSFNWmv2RBwyyZbKv26q5fZKWiwufrso3HGnT",
  "key9": "4SFSDDa3bzheg4VhHHdHfnzQuBSWucxZBFcAUdgtZbcKuZoi1ngWmZzXsrWxgy2HaEmKFTKeeJYdFCNYzj2YHdfe",
  "key10": "5hNhfbL2kiUCDWRtAz6uwRiSq5ipQLSCB4pUq9a8vgMEeLaJyYf6PAYf9WMvw1czXh9PuFNaTr95Uscf67hzyz3k",
  "key11": "2yxgbhvmjQ3BQ9QPvX6TgFniSABFQ9XDqSYEwmReS7EkCPBgdyCgX61PmU5VFvbcZ7H9VLWKhQMABPxLG14RbXn",
  "key12": "4oLQ7DCMwcsLLt3BpAPwGjr5YW2Vj7dHBsNBeDhR9cgCghaRva8hTaVM9Enjc9X81TeeQkLdWGJ2uhjMg7Ryvvas",
  "key13": "5XKeCk8fSRJiAANvkuyaL4mmEgyrdQWDExU7xJwZVp6X8vdsDRKxiVXzG16kLvrnTXoN8FhhNoB2umUxyDukLTef",
  "key14": "3ArrGdfYJbwKe3Thw2JzYSFUnS1gvRjmG1krV2B4q96jsLad3NFgEmwpkSALbXMLH438S2ZtPFdMQtnYzY56YLZ7",
  "key15": "2GeyLmX1wyAD4QV7gDf8jSm8RVFB8nw4zyxnNMxvvrHjoK7vZrdFCvKtwq7t5PdKT9ajR8yLsMgcL6tsAwcg7nsZ",
  "key16": "AnQjFs4uwYuNZM7jTeGLVuDokfcYirSpUzkvDPK8jBcDfxJZBtzq8E9DhvLbysQd12gTQ7fa7ir4S7Wz2HPm2UA",
  "key17": "5fmRsj2th3XbqYcSF3G9fTyW8Vmi3wVJTuqeHV71YUkHdhfn39FdBzRasX1MoayN5QUWHdgjyAi38VkaMd67SZCL",
  "key18": "4bQwyMUDn4yXrQv1ypPbEm1cNrQTnFPGFjKc7wwhKdMc3HcXLry3T21HaPBQEY1Rayg8C5157guZhgArat1Dr67R",
  "key19": "4hnAJx82Kwy376Wwo6h6iVuFKffgyDGC5QWUpx89vsTtxXZbSJa4CSMoGsGWpUiqsxZ9eTigF4GiUsEWZQbtgsMM",
  "key20": "V36GSBkCcPo3P2SrDuF1qv7Sc5iPh8td8Xz4zfGVcF7x6XrHLnAK2SXdSNSLhAnXpqgc56zD9ojzmUrxvat3Qon",
  "key21": "4jcStsuPtBDSLQvrsLBdVY8747BVdKGYHcEectsJBxAs66g67tY896GdkL9mULcBYQ3MsV3KRMNeL7LfhuWxQRro",
  "key22": "5iV4YFNHUa4fBBANrA8ivNJSbMmEvhoGo5ZSoMyUou7ZdfU4yDVU7s7vgmUtkw1RSbkWknp41cGbUQZ8jKejhtwb",
  "key23": "F8EBhPbU3yFHbSzd2UJAfTs1LXGPAKNsnMkbBCDudMUDEtL8RTW4D2EANgerPFgHq7scorVzuQG8WFUtNeDYHvF",
  "key24": "Aj9G5AAZ1Hufv5cyCNY2w97yR2MF1dXYohYw7DEwkm1AzCiUHrFiBxeCmiJDQYsCqVvwDxkaFZ5GvyU5b25nhV7",
  "key25": "2W7cwB4dzqLHPjWd5Kg2CQbDPnHP82ddGRUbRLYD715BwtoNQaGbG6NgC9b1J2HCwKc7fkewEQf4VivgJ9z4orTz",
  "key26": "383arcaUGCedkJbWyx4vK1m5L6mfxURpWv7TGWUWuN8VtvdHq5FbHmUBV7iPZHA68Rd87H517eFJuJvZ3BhUco9V",
  "key27": "334LbWt5iFMNdtDaUaAG8asNSJwYWSXhZBsqed2z9eMF9TA87Jo1tREU6f1QuCmDuExQZ5CMsxzzmSuNS7QXbFGh",
  "key28": "5Y1aXt9LpzP9MmfLvsrzDxefd7Kph9fhpBvCVT5zHe1USxHfYMD3bopkBXb9QwAadPsvSqe5ZzqGthbqDR4PuVcw",
  "key29": "2wpaTJxUKE4e6edgAak9K1UCp5zE4FuE5njfp1M2ozpB7kPP1r4xReEG6SbTqfDiDgGsUYwWoxXLF6Gco8PDt33L",
  "key30": "kv2HbVgzxd88mDUJCry3GALz528jDyqpJ4s2vhCpwYa1vEq1VRnaa7TNmiYmVWqseAr6TzY7UdL5uKNysLqDNBF",
  "key31": "5QHSzZWRNrgFXiQ5LNKZcqhFBcyukpFk67awP9L4pxbxvKQFEuJuexrycAFuQUb3fJ11iWgy4BLpgwu74gbJr5f8",
  "key32": "qMVX6kL166eUuAY5Kh5KZmaf8dXnyZQb13bQhpBAEUpRLRtWa46bnFqJBx94hrhNogQVcHBRGQBP3P1JTi9UgLQ",
  "key33": "2CvAa6U4WQ7DEBnDxoADiqJeeHxejtVMkhQxqNRMBoTKgj9E5tPgNs9dcvAE7FEXJdgGdySjo8jhRjzoqDzFixPb",
  "key34": "2UNUtyP9psgvek9EyxWApvc5axX2BUBZcZcrNeGf2Vir3crUMCB2E8XQQ1oYZTkdtQXewSvPTpNKk2V9Jo9QudiS",
  "key35": "4a3RbDUCk26ESEg7cR1jHJzSW1MJWXePsKes6vJCafnK8BXGiWHS5zi1aUkG25xsV5qgcTgtrEcFxDMxgbMKESyS",
  "key36": "gTh2VcQVgYbiPHAoofesBoajv6QoYJVgay1oGxEwZTfH9NeQ57oRrnc8iM79joL9Qh92mBLZGMhFhJ4vG3XEXAu",
  "key37": "4gPwYMGQx3QwYchvwqK4eeT1W5BaxqZQ4XA78P1r6j1nDdneEk1XAZKo4uoqVhAzBFwyaz7STKk54kT3egbdr8mH",
  "key38": "5rJZzXc4tYdGJ1i8sCcnkZuEdGHx9vNtdZFhwbjizPAczX2oSVuJwaAzbx35oaTBiCKsdRa9WKcPRwaJ4XZAsYzw",
  "key39": "4UXfEYAxJvVZf7Sps8N3ymaKEH8Va3tfjCidL1ofC44NCvwocYwY5taaAQxSNx9R9YXADwgkP7tK54hxNk2HvqAP",
  "key40": "2FoufQuJSXWvRpc7eFwPGR4iu1R9tHh9tef38j13G1Pcxg4kxJv9prbP7ScYY1er1V4fdEAxZNA9HqMWNHRkZiY3",
  "key41": "34TUb4EsytQwv7W6waW9KLeFue9AA1YffbQeCMBJpzHiQVFpaPq6f18PjdttSkZcJxYLP64NP4YHsghDSQKRiUxo",
  "key42": "2MrRK3QgjFTUg5r4FiR2EaEJRwr7q7SHjEFfNQvGkScZSi8e6a9qWrAe9AnusJHPQPENN951mF5UYxuEycds71ER",
  "key43": "3iV7wUygJe91jm9qTaUYPHYVrwS3TKaTxjARpY5zcn9Z6dCAYUk14SsLjNkG9akvYSPM4FruErT12Ey4bLcxYbW2",
  "key44": "csab7FCLHfquVk53hJ6xH5491PJYr1tGwE1tzSnxZrnUapaXTUvqZFxpPoagmN1wVdU6KWyARRcv5S4LvVMkdNx",
  "key45": "2BDm5WvgVT4PEyYNgEMSCMjHbUBxXJkksJfcoVb3HtYwGSzkE846AA8vZ4DMyoANxzNrEGGWTuExVvmCyrRxys4e",
  "key46": "2ViaeTsbjGiXaiPjB9Q9ZYpa3QVve8q9zcRrozxUsvAf1Ees32foMLBiUTTsHJbALambiPPYJhsSHs4XVvLi4ozu",
  "key47": "psw2LzpQCf4tjC1kSZK1RAPL6keD5vXByJa6yXuVjLtYuP1k7XyKZm8i28kRMFd6VsRhdkBFpMbaqEBADppbbsy",
  "key48": "5BTEWfTbm2ZgwMcSSuYgMH7ubqvXhiudkrjbhMphuxdwXRMLSthwcRBs8bncXoBoMeBJ4ZioQXgUEgLtFHZxn1TD",
  "key49": "4aFGGSuRyhbHHpchVFNLQS9gRpf92MBuycS6p8QHvCf1hGKHyrxxxCeenrUscPiusLxpZrMBt9mRpC59skCBjTUS"
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
